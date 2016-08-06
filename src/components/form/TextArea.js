import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

export class TextArea extends Component {
  static propTypes = {};

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'ax-input__group');

    return (
      <label className={ classes }>
        <textarea className="ax-textarea" { ...rest } />
      </label>
    );
  }
}

export default enhance(TextArea)(
  addPropTypes('global'),
  addClassName('global'),
);
