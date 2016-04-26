import React, { PropTypes, Component } from 'react';
import { PROP_TYPES_GLOBAL, mergeDefaultClassName } from '../../defaults';

export default class Indicator extends Component {
  static propTypes = {
    ...PROP_TYPES_GLOBAL,
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
