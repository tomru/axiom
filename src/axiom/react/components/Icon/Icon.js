import React, { Component, PropTypes } from 'react';
import { PROP_TYPES_GLOBAL, mergeDefaultClassName } from '../../defaults';

export default class Icon extends Component {
  static propTypes = {
    ...PROP_TYPES_GLOBAL,
    name: PropTypes.string.isRequired,
    size: PropTypes.string,
    fixedWidth: PropTypes.bool,
  };

  render() {
    const { name, size, fixedWidth } = this.props;
    const className = mergeDefaultClassName(this.props,
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
      <i {...this.props} className={className} />
    );
  }
}
