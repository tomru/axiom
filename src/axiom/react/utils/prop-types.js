import { PropTypes } from 'react';
import { breakpoints } from '../../sass';

const PROP_TYPE_MAP = {
  any: PropTypes.any,
  string: PropTypes.string,
  bool: PropTypes.bool,
  func: PropTypes.func,
  number: PropTypes.number,
  array: PropTypes.array,
  object: PropTypes.object,
  node: PropTypes.node,
  element: PropTypes.element,
  shape: PropTypes.shape,
  instaneOf: PropTypes.instaneOf,
  arrayOf: PropTypes.arrayOf,
  objectOf: PropTypes.objectOf,
  oneOf: PropTypes.oneOf,
  oneOfType: PropTypes.oneOfType,
};

const PROP_TYPES_SETS = {
  global: {
    className: { string: true },
    hiddenUntil: { oneOf: breakpoints.map(({id}) => id) },
    visibleUntil: { oneOf: breakpoints.map(({id}) => id) },
  },
  text: {
    textLeft: { oneOf: [true, ...breakpoints.map(({id}) => id)] },
    textCenter: { oneOf: [true, ...breakpoints.map(({id}) => id)] },
    textRight: { oneOf: [true, ...breakpoints.map(({id}) => id)] },
    textBreak: { oneOf: ['none', 'all', 'word'] },
    textCase: { oneOf: ['upper', 'capital', 'lower'] },
    textEllipsis: { bool: true },
  }
};

function getPropType(prop) {
  for (let typeKey in prop) {
    if (PROP_TYPE_MAP[typeKey]) {
      return {
        typeKey,
        type: PROP_TYPE_MAP[typeKey],
      };
    }
  }

  return {};
}

function createPropType(prop, isRequired) {
  const {typeKey, type} = getPropType(prop);
  let propType;

  if (!type) {
    throw new Error(`No matching PropType found: ${JSON.stringify(prop)}`);
  }

  switch (type) {
  case PropTypes.any:
  case PropTypes.string:
  case PropTypes.bool:
  case PropTypes.func:
  case PropTypes.number:
  case PropTypes.array:
  case PropTypes.object:
  case PropTypes.node:
  case PropTypes.element:
    propType = type;
    break;
  case PropTypes.instanceOf:
  case PropTypes.oneOf:
    propType = type(prop[typeKey]);
    break;
  case PropTypes.oneOfType:
    propType = type(prop[typeKey].map((p) => createPropType(p, false)));
    break;
  case PropTypes.arrayOf:
  case PropTypes.objectOf:
    propType = type(getPropType(prop[typeKey]));
    break;
  case PropTypes.shape:
    propType = type(mapToPropTypes(prop[typeKey]));
    break;
  }

  return isRequired
    ? propType.isRequired
    : propType;
}

export function mapToPropTypes(props) {
  return Object.keys(props).reduce((propTypes, key) => {
    propTypes[key] = createPropType(props[key], props[key].isRequired);
    return propTypes;
  }, {});
}

export function mergePropTypeSets(propSets) {
  return propSets.reduce((acc, set) => {
    if (PROP_TYPES_SETS[set]) {
      return {
        ...acc,
        ...PROP_TYPES_SETS[set],
      };
    }

    return acc;
  }, {});
}
