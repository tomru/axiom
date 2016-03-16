import React, { PropTypes, Component } from 'react';
import LayoutContent from './LayoutContent';

export default class LayoutNav extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="ax-layout__nav-container">
        <LayoutContent>
          <div className="ax-layout__nav">
            { children }
          </div>
        </LayoutContent>
      </div>
    );
  }
}
