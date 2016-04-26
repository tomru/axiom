import React, { Component, PropTypes } from 'react';
import { PROP_TYPES_GLOBAL, PROP_TYPES_TEXT, mergeDefaultClassName } from '../../defaults';

export default class Paragraph extends Component {
  static propTypes = {
    ...PROP_TYPES_GLOBAL,
    ...PROP_TYPES_TEXT,
    children: PropTypes.node,
    space: PropTypes.bool,
  };

  render() {
    const {children, space} = this.props;
    const className = mergeDefaultClassName(this.props, {
      'ax-text--no-space': space === false,
    });

    return (
      <p {...this.props} className={className}>
        {children}
      </p>
    );
  }
}
