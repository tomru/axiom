import React, { Component } from 'react';
import classnames from 'classnames'
import { breakpoints } from 'sass-vars';
import { classHelper } from '../../utils';
import Icon from '../Icon/Icon';

export default class Label extends Component {
  render() {
    const {
      className,
      children,
      color,
      full,
      size,
      icon,
    } = this.props;

    const classes = classnames(className,
      'ax-label', {
        [`ax-label--${color}`]: color,
        'ax-label--sm': size === 'sm',
        'ax-label--lg': size === 'lg',
        'ax-label--full': full === true,
      },
      classHelper(breakpoints, ({id}) => full === id, ({id}) => `ax-label--full--${id}`),
    );

    return (
      <span className={classes}>
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
