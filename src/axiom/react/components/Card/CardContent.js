import React, { Component } from 'react';
import classnames from 'classnames';

export default class CardContent extends Component {
  render() {
    const {children, className} = this.props;
    const classes = classnames(className, 'ax-card__content');

    return (
      <div className={classes}>
        {children}
      </div>
    );
  }
}
