import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../../utils/components';

export class LayoutSidebarFooter extends Component {
  static propTypes = {
    children: { node: true, isRequired: true },
  };

  render() {
    const { children, className } = this.props;
    const classes = classnames(className, 'ax-layout--established__sidebar-footer');

    return (
      <div className={ classes }>
        { children }
      </div>
    );
  }
}

export default enhance(LayoutSidebarFooter)(
  addPropTypes('global'),
  addClassName('global'),
);
