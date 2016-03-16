import React, { PropTypes, Component } from 'react';
import LayoutContent from './LayoutContent';
import LayoutLogo from './LayoutLogo';

export default class LayoutTitle extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="ax-layout__title-container">
        <LayoutContent>
          <div className="ax-layout__logo">
            <LayoutLogo />
          </div>

          <div className="ax-layout__title">
            {children}
          </div>
        </LayoutContent>
      </div>
    );
  }
}
