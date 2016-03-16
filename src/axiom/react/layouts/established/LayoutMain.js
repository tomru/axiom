import React, { PropTypes, Component } from 'react';

export default class LayoutMain extends Component {
  static contextTypes = {
    hideSidebar: PropTypes.func,
  };

  render() {
    const { children, sidebarHide } = this.props;
    const { hideSidebar } = this.context;

    return (
      <div className="ax-layout__main" onClick={hideSidebar}>
        {children}
      </div>
    );
  }
}
