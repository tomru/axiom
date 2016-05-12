import React, { Component, Children, cloneElement } from 'react';
import classnames from 'classnames';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';
import { findComponent } from '../../utils/components';
import { blacklist } from '../../utils/props';
import { breakpointClassName } from '../../utils/class-name';
import { breakpointIds, colorIds } from '../../../sass';
import Icon from '../Icon/Icon';

const propsTypes = {
  children: { node: true },
  color: {
    oneOf: [...colorIds],
    default: 'primary',
  },
  size: {
    oneOf: ['sm', 'md', 'lg'],
    default: 'md',
  },
  full: { oneOf: [true, ...breakpointIds] },
};

export class Button extends Component {
  static propTypes = propsTypes;

  render() {
    const {
      className,
      children,
      color = propsTypes.color.default,
      size = propsTypes.size.default,
      full,
    } = this.props;

    const icon = findComponent(children, Icon);
    const classes = classnames(className,
      'ax-button', {
        [`ax-button--${color}`]: color,
        'ax-button--sm': size === 'sm',
        'ax-button--md': size === 'md',
        'ax-button--lg': size === 'lg',
        'ax-button--full': full === true,
      },
      breakpointClassName(full, ({id}) => `ax-button--full--${id}`),
    );

    return (
      <button {...blacklist(this.props, ['color'])} className={classes}>
        {do {
          if (icon) {
            {cloneElement(icon, {
              className: 'ax-button__icon',
            })}
          }
        }}

        {Children.toArray(children).filter((component) => component.type !== Icon)}
      </button>
    );
  }
}

export default enhance(Button)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
