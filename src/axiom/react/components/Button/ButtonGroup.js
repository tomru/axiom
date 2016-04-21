import React, { Component, PropTypes } from 'react';
import { defaultPropTypes, mergeDefaultClassName } from '../../defaults';

export default class ButtonGroup extends Component {
  static propTypes = {
    ...defaultPropTypes,
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    const className = mergeDefaultClassName(this.props, 'ax-button__group');

    return (
      <div {...this.props} className={className}>
        {children}
      </div>
    );
  }
}
