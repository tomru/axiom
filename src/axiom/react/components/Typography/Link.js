import React, { Component, PropTypes } from 'react';
import { Link as RouterLink } from 'react-router';
import classNames from 'classnames';

export default class Link extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    activeClassName: PropTypes.string,
    onClick: PropTypes.func,
    inheritColor: PropTypes.bool,
    noDecoration: PropTypes.bool,
  };

  render() {
    const {
      onClick,
      href,
      children,
      target,
      to,
      activeClassName,
      className,
      inheritColor,
      noDecoration,
      supressStyle,
    } = this.props;

    const classes = classNames(className, {
      'ax-link': supressStyle !== true,
      'ax-link--inherit-color': inheritColor,
      'ax-link--no-decoration': noDecoration,
    }
    );

    if (to) {
      return (
        <RouterLink to={to} className={classes} activeClassName={activeClassName} onClick={onClick}>
          {children}
        </RouterLink>
      );
    }

    return (
      <a className={classes} onClick={onClick} href={href} target={target || '_blank'}>
        {children}
      </a>
    );
  }
};
