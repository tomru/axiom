import React, { PropTypes, Component } from 'react';

export default class LayoutMain extends Component {
  render() {
    const { children } = this.props;

    return (
      <main className="ax-layout__main">
        { children }
      </main>
    );
  }
}
