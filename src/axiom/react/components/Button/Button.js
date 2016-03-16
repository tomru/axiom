import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import { breakpoints } from 'sass-vars';
import { classHelper } from '../../utils';
import Icon from '../Icon/Icon';

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    color: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'lg']),
    full: PropTypes.oneOf([true, ...breakpoints.map(({id}) => id)])
  };

  render() {
    const {
      children,
      className,
      disabled,
      color,
      size,
      full,
      onClick,
      icon,
    } = this.props;

    const classes = classnames(
      className,
      'ax-button', {
        [`ax-button--${color}`]: color,
        'ax-button--sm': size === 'sm',
        'ax-button--lg': size === 'lg',
        'ax-button--full': full === true,
      },
      classHelper(breakpoints, ({id}) => full === id, ({id}) => `ax-button--full--${id}`),
    );

    return (
      <button className={classes} disabled={disabled} onClick={onClick}>
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
