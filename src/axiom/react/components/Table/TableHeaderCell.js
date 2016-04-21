import React, { Component, PropTypes } from 'react';
import { defaultPropTypes, mergeDefaultClassName } from '../../defaults';

export default class TableHeaderCell extends Component {
  static propTypes = {
    ...defaultPropTypes,
    children: PropTypes.node,
    isNumber: PropTypes.bool,
    sorting: PropTypes.oneOf([1, -1]),
  };

  render() {
    const {children, isNumber, sorting} = this.props;
    const className = mergeDefaultClassName(this.props, {
      'ax-table__cell--number': isNumber === true,
      'ax-table__sort--asc': sorting === 1,
      'ax-table__sort--desc': sorting === -1,
    });

    return (
      <th {...this.props} className={className}>
        {children}
      </th>
    );
  }
}
