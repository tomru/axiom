import React, { Component } from 'react';
import classnames from 'classnames';

export default class TableHead extends Component {
  render() {
    const {children} = this.props;
    const classes = classnames({
    });

    return (
      <thead className={classes}>
        {children}
      </thead>
    );
  }
}
