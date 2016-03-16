import React, { Component } from 'react';

export default class Tab extends Component {
  render() {
    const {children} = this.props;

    return (
      <div className="ax-tabs__content">
        {children}
      </div>
    );
  }
}
