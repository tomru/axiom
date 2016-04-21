import React, { Component, PropTypes } from 'react';
import { defaultPropTypes, mergeDefaultClassName } from '../../defaults';

export default class Tab extends Component {
  static propTypes = {
    ...defaultPropTypes,
    children: PropTypes.node,
  };

  render() {
    const {children} = this.props;
    const className = mergeDefaultClassName(this.props, 'ax-tabs__content');

    return (
      <div {...this.props} className={className}>
        {children}
      </div>
    );
  }
}
