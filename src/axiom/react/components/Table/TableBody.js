import React, { Component } from 'react';
import classnames from 'classnames';

export default class TableBody extends Component {
  render() {
    const {children} = this.props;
    const classes = classnames({
      //
    });

    return (
      <tbody className={classes}>
        {children}
      </tbody>
    );
  }
}
