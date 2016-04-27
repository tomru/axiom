import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';

export class Layout extends Component {
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

export default enhance(
  Layout,
  addDisplayName('Layout'),
  addPropTypes('global'),
  addClassName('global'),
);
