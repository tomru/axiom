import React, { Component } from 'react';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';

export class Strike extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const {children} = this.props;

    return (
      <del {...this.props}>
        {children}
      </del>
    );
  }
}

export default enhance(
  Strike,
  addDisplayName('Strike'),
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
