import React, { Component } from 'react';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';

export class Underline extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const {children} = this.props;

    return (
      <u {...this.props}>
        {children}
      </u>
    );
  }
}

export default enhance(Underline)(
  addDisplayName('Underline'),
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
