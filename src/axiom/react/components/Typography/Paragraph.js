import React, { Component, PropTypes } from 'react';
import { defaultPropTypes, mergeDefaultClassName } from '../../defaults';

export default class Paragraph extends Component {
  static propTypes = {
    ...defaultPropTypes,
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
