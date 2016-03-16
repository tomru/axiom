import React, { PropTypes, Component } from 'react';

export default class LayoutSidebarHeader extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="ax-layout__sidebar-header">
        {children}
      </div>
    );
  }
}
