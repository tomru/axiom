import React, { Component } from 'react';
import classnames from 'classnames';

export default class TextArea extends Component {
  render() {
    const { placeholder, value, disabled } = this.props;
    const classes = classnames('ax-textarea', {

    });

    return (
      <label className="ax-input__group">
        <textarea
          className={classes}
          placeholder={placeholder}
          value={value}
          disabled={disabled} />
      </label>
    );
  }
}
