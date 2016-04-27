import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';

export class LayoutSidebarFooter extends Component {
  render() {
    const { children, className } = this.props;
    const classes = classnames(className, 'ax-layout__sidebar-footer');

    return (
      <div className={classes}>
        {children}
      </div>
    );
  }
}

export default enhance(
  LayoutSidebarFooter,
  addDisplayName('LayoutSidebarFooter'),
  addPropTypes('global'),
  addClassName('global'),
);
