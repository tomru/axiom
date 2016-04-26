import React, { Component, PropTypes } from 'react';
import { PROP_TYPES_GLOBAL, PROP_TYPES_TEXT, mergeDefaultClassName } from '../../defaults';

export default class Avatar extends Component {
  static propTypes = {
    ...PROP_TYPES_GLOBAL,
    ...PROP_TYPES_TEXT,
    src: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
  };

  render() {
    const { size } = this.props;
    const className = mergeDefaultClassName(this.props,
      'ax-avatar', {
        'ax-avatar--sm': size === 'sm',
        'ax-avatar--md': size === 'md' || !size,
        'ax-avatar--lg': size === 'lg',
      }
    );

    return (
      <img {...this.props} className={className} />
    );
  }
}
