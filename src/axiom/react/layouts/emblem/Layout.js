import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

export default class Layout extends Component {
  render() {
    const { children, className } = this.props;
    const classes = classnames(className, 'ax-layout');

    return (
      <div className={classes}>
        {children}
      </div>
    );
  }
}
