import React, { Component } from 'react';
import classnames from 'classnames';

export default class RadioButton extends Component {
  render() {
    const {
      children,
      inline,
      checked,
      disabled,
      onChange = () => {},
    } = this.props;

    const classes = classnames('ax-radio__group', {
      'ax-radio__group--inline': inline === true,
      'ax-radio__group--space': !!children,
    });

    return (
      <label className={classes}>
        <input className="ax-radio"
               type="radio"
               checked={checked}
               disabled={disabled}
               onChange={onChange} />
        <span className="ax-radio__label">{children}</span>
      </label>
    );
  }
}
