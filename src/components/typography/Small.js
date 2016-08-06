import React, { Component } from 'react';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

export class Small extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <small { ...rest }>
        { children }
      </small>
    );
  }
}

export default enhance(Small)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
