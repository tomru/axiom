import React, { Component } from 'react';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';

export class ListItem extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const {children} = this.props;

    return (
      <li {...this.props}>
        {children}
      </li>
    );
  }
}

export default enhance(ListItem)(
  addDisplayName('ListItem'),
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
