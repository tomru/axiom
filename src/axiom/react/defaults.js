import { PropTypes } from 'react';
import classnames from 'classnames';
import { breakpoints } from '../sass';
import { classHelper } from './utils';

export const PROP_TYPES_GLOBAL = {
  className: PropTypes.string,
  contain: PropTypes.bool,
  hiddenUntil: PropTypes.oneOf(breakpoints.map(({id}) => id)),
  visibleUntil: PropTypes.oneOf(breakpoints.map(({id}) => id)),
};

export const PROP_TYPES_TEXT = {
  textLeft: PropTypes.oneOf([true, ...breakpoints.map(({id}) => id)]),
  textCenter: PropTypes.oneOf([true, ...breakpoints.map(({id}) => id)]),
  textRight: PropTypes.oneOf([true, ...breakpoints.map(({id}) => id)]),
  textBreak: PropTypes.oneOf(['none', 'all', 'word']),
  textCase: PropTypes.oneOf(['upper', 'capital', 'lower']),
  textEllipsis: PropTypes.bool,
};

function defaultClassName(props = {}) {
  return classnames(props.className, {
    'ax-text--left': props.textLeft === true,
    'ax-text--center': props.textCenter === true,
    'ax-text--right': props.textRight === true,
    'ax-text--bold': props.textBold === true,
    'ax-text--weak': props.textWeak === true,
    'ax-text--break-none': props.textBreak === 'none',
    'ax-text--break-all': props.textBreak === 'all',
    'ax-text--break-word': props.textBreak === 'word',
    'ax-text--uppercase': props.textCase === 'upper',
    'ax-text--capitalize': props.textCase === 'capital',
    'ax-text--lowercase': props.textCase === 'lower',
    'ax-text--ellipsis': props.textEllipsis === true,
  },
    classHelper(breakpoints, ({id}) => props.textLeft === id, ({id}) => `ax-text--left--${id}`),
    classHelper(breakpoints, ({id}) => props.textCenter === id, ({id}) => `ax-text--center--${id}`),
    classHelper(breakpoints, ({id}) => props.textRight === id, ({id}) => `ax-text--right--${id}`),
  );
}

export function mergeDefaultClassName(props = {}, ...additional) {
  return classnames(defaultClassName(props), ...additional);
}
