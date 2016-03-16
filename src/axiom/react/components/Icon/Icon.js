import React, { Component } from 'react';
import classnames from 'classnames';

export default class Icon extends Component {
  render() {
    const {className, name, size, style, fixedWidth} = this.props;
    const classes = classnames(
      'ax-icon',
      `ax-icon-${name}`,
      className, {
        'ax-icon-lg': size === 'lg',
        'ax-icon-2x': size === '2x',
        'ax-icon-3x': size === '3x',
        'ax-icon-4x': size === '4x',
        'ax-icon-5x': size === '5x',
        'ax-icon-fw': fixedWidth === true,
      }
    );

    return (
      <i className={classes} style={style} />
    );
  }
}
