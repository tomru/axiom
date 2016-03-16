import React, { Component } from 'react';
import classnames from 'classnames';

export default class Form extends Component {
  render() {
    const classes = classnames({

    });

    return (
      <form className={classes}>
        {children}
      </form>
    );
  }
}
