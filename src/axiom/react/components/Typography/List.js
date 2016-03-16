import React, { Component } from 'react';
import classnames from 'classnames';

export default class List extends Component {
  render() {
    const {
      className,
      children,
      ordered,
      inline,
      aligned = !inline,
    } = this.props;

    const classes = classnames(className,
      'ax-list', {
      'ax-list--aligned': aligned === true,
      'ax-list--inline': inline === true,
    });

    if (ordered === true) {
      return (
        <ol className={classes}>
          {children}
        </ol>
      );
    }

    return (
      <ul className={classes}>
        {children}
      </ul>
    );
  }
}
