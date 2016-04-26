import React, { Component, PropTypes } from 'react';
import { PROP_TYPES_GLOBAL, PROP_TYPES_TEXT, mergeDefaultClassName } from '../../defaults';

export default class Td extends Component {
  static propTypes = {
    ...PROP_TYPES_GLOBAL,
    ...PROP_TYPES_TEXT,
    children: PropTypes.node,
    isNumber: PropTypes.bool,
  };

  render() {
    const {children, isNumber} = this.props;
    const className = mergeDefaultClassName(this.props, {
      'ax-table__cell--number': isNumber === true,
    });

    return (
      <td {...this.props} className={className}>
        {children}
      </td>
    );
  }
}
