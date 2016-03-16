import React, { Component } from 'react';

export default class ListItem extends Component {
  render() {
    const {children} = this.props;

    return (
      <li>
        {children}
      </li>
    );
  }
}
