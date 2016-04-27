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

const NONPARAMETRIC_PROP_TYPES = [
  PropTypes.any,
  PropTypes.string,
  PropTypes.bool,
  PropTypes.func,
  PropTypes.number,
  PropTypes.array,
  PropTypes.object,
  PropTypes.node,
  PropTypes.element,
];

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

  if (NONPARAMETRIC_PROP_TYPES.includes(type)) {
    propType = type;
  }

  if (type === PropTypes.instaneOf || type === PropTypes.oneOf) {
    propType = type(prop[typeKey]);
  }

  if (type === PropTypes.oneOfType) {
    propType = type(prop[typeKey].map((p) => createPropType(p, false)));
  }

  if (type === PropTypes.arrayOf || type === PropTypes.objectOf) {
    propType = type(getPropType(prop[typeKey]));
  }

  if (type === PropTypes.shape) {
    propType = type(mapToPropTypes(prop[typeKey]));
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
