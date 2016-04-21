import React, { Component, PropTypes } from 'react';
import { blacklist } from '../../utils';
import { defaultPropTypes, mergeDefaultClassName } from '../../defaults';

export default class TextArea extends Component {
  static propTypes = {
    ...defaultPropTypes,
  };

  render() {
    const className = mergeDefaultClassName(this.props, 'ax-input__group');

    return (
      <label className={className}>
        <textarea
          className="ax-textarea"
          {...blacklist(this.props, 'className')} />
      </label>
    );
  }
}
