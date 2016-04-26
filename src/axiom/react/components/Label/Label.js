import React, { Component, PropTypes } from 'react';
import { breakpoints } from '../../../sass';
import { PROP_TYPES_GLOBAL, PROP_TYPES_TEXT, mergeDefaultClassName } from '../../defaults';
import { classHelper } from '../../utils';
import Icon from '../Icon/Icon';

export default class Label extends Component {
  static propTypes = {
    ...PROP_TYPES_GLOBAL,
    ...PROP_TYPES_TEXT,
    children: PropTypes.node,
    color: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'lg']),
    full: PropTypes.oneOf([true, ...breakpoints.map(({id}) => id)]),
    icon: PropTypes.string,
  };

  render() {
    const { children, color, full, size, icon } = this.props;
    const className = mergeDefaultClassName(this.props,
      'ax-label', {
        [`ax-label--${color}`]: color,
        'ax-label--sm': size === 'sm',
        'ax-label--lg': size === 'lg',
        'ax-label--full': full === true,
      },
      classHelper(breakpoints, ({id}) => full === id, ({id}) => `ax-label--full--${id}`),
    );

    return (
      <span {...this.props} className={className}>
        {do {
          if (icon) {
            <Icon className="ax-label__icon" name={icon} />
          }
        }}

        {children}
      </span>
    );
  }
}
