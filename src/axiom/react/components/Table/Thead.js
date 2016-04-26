import React, { Component, PropTypes } from 'react';
import { PROP_TYPES_GLOBAL, PROP_TYPES_TEXT, mergeDefaultClassName } from '../../defaults';

export default class Thead extends Component {
  static propTypes = {
    ...PROP_TYPES_GLOBAL,
    ...PROP_TYPES_TEXT,
    children: PropTypes.node,
  };

  render() {
    const {children} = this.props;
    const className = mergeDefaultClassName(this.props);

    return (
      <thead {...this.props} className={className}>
        {children}
      </thead>
    );
  }
}
