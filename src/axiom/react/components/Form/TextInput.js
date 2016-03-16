import React, { Component, Children, cloneElement } from 'react';
import classnames from 'classnames';
import { findComponent } from '../../utils';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

export default class TextInput extends Component {
  getIcon() {
    const {icon, valid, invalid, thinking} = this.props;

    if (valid) return 'check';
    if (invalid) return 'times';
    if (thinking) return 'circle-o-notch';

    return icon;
  }

  render() {
    const {
      children,
      placeholder,
      disabled,
      value,
      icon,
      valid,
      invalid,
      thinking,
      onChange = () => {},
      defaultValue,
    } = this.props;

    const button = findComponent(children, Button);
    const inputClasses = classnames('ax-input__group', {
      'ax-input--valid': valid === true,
      'ax-input--invalid': invalid === true,
    });
    const iconClasses = classnames({
      'ax-icon-spin': thinking,
    });

    return (
      <label className={inputClasses}>
        <div className="ax-input__button-container">
          <div className="ax-input__icon-container">
            <input className="ax-input"
                   type="text"
                   placeholder={placeholder}
                   disabled={disabled}
                   value={value}
                   onChange={onChange}
                   defaultValue={defaultValue} />

            {do {
              if (icon) {
                <div className="ax-input__icon">
                  <Icon className={iconClasses} name={this.getIcon(icon)} size="lg" />
                </div>
              }
            }}
          </div>

          {do {
            if (button) {
              cloneElement(button, {
                className: 'ax-input__button',
              })
            }
          }}
        </div>
      </label>
    );
  }
}
