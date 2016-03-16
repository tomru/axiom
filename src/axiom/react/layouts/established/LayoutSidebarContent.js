import React, { PropTypes, Component } from 'react';

export default class LayoutSidebarContent extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="ax-layout__sidebar-content">
        {children}
      </div>
    );
  }
}
