import React, { PropTypes, Component } from 'react';

export default class LayoutSidebarFooter extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="ax-layout__sidebar-footer">
        {children}
      </div>
    );
  }
}
