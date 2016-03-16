import React, { Component } from 'react';
import classnames from 'classnames';

export default class Card extends Component {
  render() {
    const {
      children,
      transparent,
    } = this.props;

    const classes = classnames('ax-card', {
      'ax-card--transparent': transparent === true,
    });

    return (
      <div className={classes}>
        {children}
      </div>
    );
  }
}
