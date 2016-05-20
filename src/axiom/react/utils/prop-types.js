import { PropTypes } from 'react';
import { breakpointIds } from '../../sass';

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
  instanceOf: PropTypes.instanceOf,
  arrayOf: PropTypes.arrayOf,
  objectOf: PropTypes.objectOf,
  oneOf: PropTypes.oneOf,
  oneOfType: PropTypes.oneOfType,
};

export const PROP_TYPES_SETS = {
  global: {
    className: { string: true },
    hiddenUntil: { oneOf: breakpointIds },
    visibleUntil: { oneOf: breakpointIds },
  },
  text: {
    textLeft: { oneOf: [true, ...breakpointIds] },
    textCenter: { oneOf: [true, ...breakpointIds] },
    textRight: { oneOf: [true, ...breakpointIds] },
    textBreak: { oneOf: ['none', 'all', 'word'] },
    textCase: { oneOf: ['upper', 'capital', 'lower'] },
    textEllipsis: { bool: true },
  },
};

function getPropType(prop) {
  for (let key in prop) {
    if (PROP_TYPE_MAP[key]) {
      return {
        type: key,
        propType: PROP_TYPE_MAP[key],
      };
    }
  }

  return {};
}

function createPropType(prop, isRequired) {
  let finalPropType;
  const { propType, type } = prop;

  if (!propType) {
    throw new Error(`No matching PropType found: ${JSON.stringify(prop)}`);
  }
  switch (propType) {
  case PropTypes.any:
  case PropTypes.string:
  case PropTypes.bool:
  case PropTypes.func:
  case PropTypes.number:
  case PropTypes.array:
  case PropTypes.object:
  case PropTypes.node:
  case PropTypes.element:
    finalPropType = propType;
    break;
  case PropTypes.instanceOf:
  case PropTypes.oneOf:
    finalPropType = propType(prop[type]);
    break;
  case PropTypes.oneOfType:
    finalPropType = propType(prop[type].map((p) => createPropType(p, false)));
    break;
  case PropTypes.arrayOf:
  case PropTypes.objectOf:
    finalPropType = propType(getPropType(prop[type]));
    break;
  case PropTypes.shape:
    finalPropType = propType(mapToPropTypes(prop[type]));
    break;
  }

  return isRequired
    ? finalPropType.isRequired
    : finalPropType;
}

export function addReactPropTypes(props = {}) {
  return Object.keys(props).reduce((acc, key) => {
    const { type, propType } = getPropType(props[key]);

    if (type && propType) {
      acc[key] = {
        ...props[key],
        type,
        propType,
      };
    }

    return acc;
  }, {});
}

export function mergePropTypeSets(propSets) {
  return propSets.reduce((acc, set) => {
    if (PROP_TYPES_SETS[set]) {
      return {
        ...acc,
        ...addReactPropTypes(PROP_TYPES_SETS[set]),
      };
    }

    return acc;
  }, {});
}

export function mapToPropTypes(props) {
  return Object.keys(props).reduce((propTypes, key) => {
    propTypes[key] = createPropType(props[key], props[key].isRequired);
    return propTypes;
  }, {});
}
