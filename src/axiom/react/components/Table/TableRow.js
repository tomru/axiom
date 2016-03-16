import React, { Component } from 'react';
import classnames from 'classnames';

export default class TableRow extends Component {
  render() {
    const {children} = this.props;
    const classes = classnames({
      //
    });

    return (
      <tr className={classes}>
        {children}
      </tr>
    );
  }
}
