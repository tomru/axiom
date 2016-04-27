import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';

export class LayoutSidebarHeader extends Component {
  render() {
    const { children, className } = this.props;
    const classes = classnames(className, 'ax-layout__sidebar-header');

    return (
      <div className={classes}>
        {children}
      </div>
    );
  }
}

export default enhance(
  LayoutSidebarHeader,
  addDisplayName('LayoutSidebarHeader'),
  addPropTypes('global'),
  addClassName('global'),
);
