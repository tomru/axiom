import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';

export class LayoutSidebar extends Component {
  render() {
    const { children, className } = this.props;
    const classes = classnames(className, 'ax-layout__sidebar');

    return (
      <div className={classes}>
        {children}
      </div>
    );
  }
}

export default enhance(LayoutSidebar)(
  addDisplayName('LayoutSidebar'),
  addPropTypes('global'),
  addClassName('global'),
);

