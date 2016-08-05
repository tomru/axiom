import React, { Component } from 'react';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

export class Tr extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { children } = this.props;

    return (
      <tr { ...this.props }>
        { children }
      </tr>
    );
  }
}

export default enhance(Tr)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
