import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';

export class Image extends Component {
  static propTypes = {
    src: { string: true, isRequired: true },
  };

  render() {
    return (
      <img {...this.props} />
    );
  }
}

export default enhance(
  Image,
  addDisplayName('Image'),
  addPropTypes('global'),
  addClassName('global'),
);
