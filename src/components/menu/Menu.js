import React, { Component, PropTypes } from 'react';
import Base from '../base/Base';

if (__INCLUDE_CSS__) {
  require('./Menu.scss');
}

export default class Menu extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest } Component="ul" className="ax-menu">
        { children }
      </Base>
    );
  }
}
