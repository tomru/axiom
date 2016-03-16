import React, { Component } from 'react';
import classnames from 'classnames';

export default class ButtonGroup extends Component {

  render() {
    const {children} = this.props
    const classes = classnames('ax-button__group', {
      //
    });

    return (
      <div className={classes}>
        {children}
      </div>
    );
  }
}
