import React, { Component, PropTypes } from 'react';
import { PROP_TYPES_GLOBAL, mergeDefaultClassName } from '../../defaults';

export default class Image extends Component {
  static propTypes = {
    ...PROP_TYPES_GLOBAL,
  };

  render() {
    const {children} = this.props;
    const className = mergeDefaultClassName(this.props);

    return (
      <img {...this.props} className={className} />
    );
  }
}
