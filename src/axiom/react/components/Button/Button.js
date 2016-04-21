import React, { PropTypes, Component } from 'react';
import { breakpoints } from 'sass-vars';
import { classHelper } from '../../utils';
import { defaultPropTypes, mergeDefaultClassName } from '../../defaults';
import Icon from '../Icon/Icon';

export default class Button extends Component {
  static propTypes = {
    ...defaultPropTypes,
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
      <button {...this.props} className={className}>
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
