import React, { Component } from 'react';
import classnames from 'classnames';

export default class TableHeaderCell extends Component {
  render() {
    const {className, children, isNumber, sorting} = this.props;
    const classes = classnames(className, {
      'ax-table__cell--number': isNumber === true,
      'ax-table__sort--asc': sorting === 1,
      'ax-table__sort--desc': sorting === -1,
    });

    return (
      <th className={classes}>
        {children}
      </th>
    );
  }
}
