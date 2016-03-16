import React, { PropTypes, Component } from 'react';

export default class LayoutHeader extends Component {
  render() {
    const { children } = this.props;

    return (
      <header className="ax-layout__header">
        { children }
      </header>
    );
  }
}
