import React, { Component } from 'react';
import classnames from 'classnames';

export default class Avatar extends Component {
  render() {
    const { className, src, size } = this.props;
    const classes = classnames(className,
      'ax-avatar', {
        'ax-avatar--sm': size === 'sm',
        'ax-avatar--md': size === 'md' || !size,
        'ax-avatar--lg': size === 'lg',
      },
    );

    return (
      <img src={src} className={classes} />
    );
  }
}
