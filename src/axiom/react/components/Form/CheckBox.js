import React, { Component } from 'react';
import classnames from 'classnames';

export default class CheckBox extends Component {
  render() {
    const {
      children,
      inline,
      checked,
      disabled,
      onChange = () => {}
    } = this.props;

    const classes = classnames('ax-checkbox__group', {
      'ax-checkbox__group--inline': inline === true,
      'ax-checkbox__group--space': !!children,
    });

    return (
      <label className={classes}>
        <input className="ax-checkbox"
               type="checkbox"
               checked={checked}
               disabled={disabled}
               onChange={onChange} />
        <span className="ax-checkbox__label">{children}</span>
      </label>
    );
  }
}

export const EVENT_MAP = {
  onChange: '.ax-checkbox',
};
