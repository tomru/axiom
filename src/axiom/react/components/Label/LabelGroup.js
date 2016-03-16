import React, { Component } from 'react';
import classnames from 'classnames';

export default class LabelGroup extends Component {

  render() {
    const {children} = this.props
    const classes = classnames('ax-label__group', {
      //
    });

    return (
      <div className={classes}>
        {children}
      </div>
    );
  }
}
