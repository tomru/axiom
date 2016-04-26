import React, { Component, Children, cloneElement, PropTypes } from 'react';
import classnames from 'classnames';
import { PROP_TYPES_GLOBAL, mergeDefaultClassName } from '../../defaults';
import { blacklist, findComponent } from '../../utils';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

export default class TextInput extends Component {
  static propTypes = {
    ...PROP_TYPES_GLOBAL,
    children: PropTypes.node,
    icon: PropTypes.string,
    valid: PropTypes.bool,
    invalid: PropTypes.bool,
    thinking: PropTypes.bool,
  };

  getIcon() {
    const {icon, valid, invalid, thinking} = this.props;

    if (valid) return 'check';
    if (invalid) return 'times';
    if (thinking) return 'circle-o-notch';

    return icon;
  }

  render() {
    const { children, icon, valid, invalid, thinking } = this.props;
    const button = findComponent(children, Button);
    const iconClasses = classnames({'ax-icon-spin': thinking});
    const className = mergeDefaultClassName(this.props,
      'ax-input__group', {
        'ax-input--valid': valid === true,
        'ax-input--invalid': invalid === true,
      }
    );

    return (
      <label className={className}>
        <div className="ax-input__button-container">
          <div className="ax-input__icon-container">
            <input className="ax-input" {...blacklist(this.props, ['children', 'className'])} />

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
