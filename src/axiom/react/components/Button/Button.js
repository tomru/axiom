import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';
import { blacklist } from '../../utils/props';
import { addDynamicClass } from '../../utils/class-name';
import { breakpoints } from '../../../sass';
import Icon from '../Icon/Icon';

export class Button extends Component {
  static propTypes = {
    children: { node: true },
    color: { string: true },
    size: { oneOf: ['sm', 'md', 'lg'] },
    full: { oneOf: [true, ...breakpoints.map(({id}) => id)] },
    icon: { string: true, },
  };

  render() {
    const { className, children, color, size = 'md', full, icon } = this.props;
    const classes = classnames(className,
      'ax-button', {
        [`ax-button--${color}`]: color,
        'ax-button--sm': size === 'sm',
        'ax-button--md': size === 'md',
        'ax-button--lg': size === 'lg',
        'ax-button--full': full === true,
      },
      addDynamicClass(breakpoints, ({id}) => full === id, ({id}) => `ax-button--full--${id}`),
    );

    return (
      <button {...blacklist(this.props, ['color'])} className={classes}>
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

export default enhance(
  Button,
  addDisplayName('Button'),
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
