import React, { Component } from 'react';
import classnames from 'classnames';

export default class TableCell extends Component {
  render() {
    const {className, children, isNumber} = this.props;
    const classes = classnames(className, {
      'ax-table__cell--number': isNumber === true,
    });

    return (
      <td className={classes}>
        {children}
      </td>
    );
  }
}
