import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../../utils/components';
import { blacklist } from '../../utils/props';

export class Icon extends Component {
  static propTypes = {
    fixedWidth: { bool: true },
    name: { string: true, isRequired: true },
    size: { string: true },
  };

  render() {
    const { className, name, size, fixedWidth } = this.props;
    const classes = classnames(className,
      'ax-icon',
      `ax-icon-${name}`, {
        'ax-icon-lg': size === 'lg',
        'ax-icon-2x': size === '2x',
        'ax-icon-3x': size === '3x',
        'ax-icon-4x': size === '4x',
        'ax-icon-5x': size === '5x',
        'ax-icon-fw': fixedWidth === true,
      }
    );

    return (
      <i {...blacklist(this.props, ['name'])} className={ classes } />
    );
  }
}

export default enhance(Icon)(
  addPropTypes('global'),
  addClassName('global'),
);
