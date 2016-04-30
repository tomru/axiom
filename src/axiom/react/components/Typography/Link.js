import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router';
import classnames from 'classnames';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';

export class Link extends Component {
  static propTypes = {
    children: { node: true },
    to: { string: true },
    inheritColor: { bool: true },
    noDecoration: { bool: true },
  };

  render() {
    const {
      className,
      children,
      to,
      inheritColor,
      noDecoration,
      supressStyle,
    } = this.props;

    const classes = classnames(className, {
      'ax-link': supressStyle !== true,
      'ax-link--inherit-color': inheritColor,
      'ax-link--no-decoration': noDecoration,
    });

    if (to) {
      return (
        <RouterLink {...this.props} className={classes}>
          {children}
        </RouterLink>
      );
    }

    return (
      <a {...this.props} className={classes}>
        {children}
      </a>
    );
  }
};

export default enhance(Link)(
  addDisplayName('Link'),
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
