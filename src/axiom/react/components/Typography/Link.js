import React, { Component, PropTypes } from 'react';
import { Link as RouterLink } from 'react-router';
import { defaultPropTypes, mergeDefaultClassName } from '../../defaults';

export default class Link extends Component {
  static propTypes = {
    ...defaultPropTypes,
    children: PropTypes.node,
    to: PropTypes.string,
    inheritColor: PropTypes.bool,
    noDecoration: PropTypes.bool,
  };

  render() {
    const {
      children,
      to,
      inheritColor,
      noDecoration,
      supressStyle,
    } = this.props;

    const className = mergeDefaultClassName(this.props, {
      'ax-link': supressStyle !== true,
      'ax-link--inherit-color': inheritColor,
      'ax-link--no-decoration': noDecoration,
    });

    if (to) {
      return (
        <RouterLink {...this.props} className={className}>
          {children}
        </RouterLink>
      );
    }

    return (
      <a {...this.props} className={className}>
        {children}
      </a>
    );
  }
};
