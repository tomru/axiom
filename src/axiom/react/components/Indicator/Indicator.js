import React, { PropTypes, Component } from 'react';
import { defaultPropTypes, mergeDefaultClassName } from '../../defaults';

export default class Indicator extends Component {
  static propTypes = {
    ...defaultPropTypes,
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    const className = mergeDefaultClassName(this.props, 'ax-indicator__container');

    return (
      <div {...this.props} className={className}>
        <div className="ax-indicator" />
        {children}
      </div>
    );
  }
}
