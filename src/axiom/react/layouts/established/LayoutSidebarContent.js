import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../../utils/components';

export class LayoutSidebarContent extends Component {
  static propTypes = {
    children: { node: true, isRequired: true },
  };

  render() {
    const { children, className } = this.props;
    const classes = classnames(className, 'ax-layout__sidebar-content');

    return (
      <div className={ classes }>
        { children }
      </div>
    );
  }
}

export default enhance(LayoutSidebarContent)(
  addPropTypes('global'),
  addClassName('global'),
);
