import React, { Component, PropTypes } from 'react';
import { PROP_TYPES_GLOBAL, mergeDefaultClassName } from '../../defaults';
import { blacklist } from '../../utils';

export default class TextArea extends Component {
  static propTypes = {
    ...PROP_TYPES_GLOBAL,
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
