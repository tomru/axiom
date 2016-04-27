import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';
import { blacklist } from '../../utils/props';
import { addDynamicClass } from '../../utils/class-name';
import { breakpoints } from '../../../sass';
import Icon from '../Icon/Icon';

export class Label extends Component {
  static propTypes = {
    children: { node: true },
    color: { string: true },
    size: { oneOf: ['sm', 'md', 'lg'] },
    full: { oneOf: [true, ...breakpoints.map(({id}) => id)] },
    icon: { string: true, },
  };

  render() {
    const { className, children, color, full, size = 'md', icon } = this.props;
    const classes = classnames(className,
      'ax-label', {
        [`ax-label--${color}`]: color,
        'ax-label--sm': size === 'sm',
        'ax-label--md': size === 'md',
        'ax-label--lg': size === 'lg',
        'ax-label--full': full === true,
      },
      addDynamicClass(breakpoints, ({id}) => full === id, ({id}) => `ax-label--full--${id}`),
    );

    return (
      <span {...blacklist(this.props, ['color'])} className={classes}>
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

export default enhance(
  Label,
  addDisplayName('Label'),
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);

