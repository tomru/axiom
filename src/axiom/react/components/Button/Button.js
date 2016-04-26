import React, { PropTypes, Component } from 'react';
import { PROP_TYPES_GLOBAL, PROP_TYPES_TEXT, mergeDefaultClassName } from '../../defaults';
import { blacklist, classHelper } from '../../utils';
import { breakpoints } from '../../../sass';
import Icon from '../Icon/Icon';

export default class Button extends Component {
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
    const { children, color, size, full, icon } = this.props;
    const className = mergeDefaultClassName(this.props,
      'ax-button', {
        [`ax-button--${color}`]: color,
        'ax-button--sm': size === 'sm',
        'ax-button--lg': size === 'lg',
        'ax-button--full': full === true,
      },
      classHelper(breakpoints, ({id}) => full === id, ({id}) => `ax-button--full--${id}`),
    );

    return (
      <button {...blacklist(this.props, ['color'])} className={className}>
        {do {
          if (icon) {
            <Icon className="ax-button__icon" name={icon} />
          }
        }}

        {children}
      </button>
    );
  }
}
