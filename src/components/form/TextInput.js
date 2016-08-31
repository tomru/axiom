import React, { Component, cloneElement } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName, findComponent } from '../_utils/components';
import Button from '../button/Button';
import Icon from '../icon/Icon';
import Heading from '../typography/Heading';

if (__INCLUDE_CSS__) {
  require('./TextInput.scss');
}

export class TextInput extends Component {
  static propTypes = {
    children: { node: true },
    invalid: { bool: true },
    label: { string: true },
    thinking: { bool: true },
    valid: { bool: true },
    onBlur: { func: true },
    onFocus: { func: true },
  };

  componentWillMount() {
    this.setState({ hasFocus: false });
  }

  getIcon(defaultIcon) {
    const { valid, invalid, thinking } = this.props;

    if (valid) return 'check';
    if (invalid) return 'times';
    if (thinking) return 'circle-o-notch';

    return defaultIcon;
  }

  handleOnBlur() {
    const { onBlur = () => {} } = this.props;
    this.setState({ hasFocus: false });
    onBlur(...arguments);
  }

  handleOnFocus() {
    const { onFocus = () => {} } = this.props;
    this.setState({ hasFocus: true });
    onFocus(...arguments);
  }

  render() {
    const { className, children, valid, invalid, label, thinking, ...rest } = this.props;
    const { hasFocus } = this.state;
    const button = findComponent(children, Button);
    const icon = findComponent(children, Icon);
    const classes = classnames(className,
      'ax-input__group', {
        'ax-input__group--focus': hasFocus,
        'ax-input__group--valid': valid === true,
        'ax-input__group--invalid': invalid === true,
      }
    );

    return (
      <label className={ classes }>
        { do { if (label) {
          <Heading level={ 5 }>{ label }</Heading>;
        } } }

        <div className="ax-input__button-container">
          <div className="ax-input__icon-container">
            <input
                { ...rest }
                className="ax-input"
                onBlur={ ::this.handleOnBlur }
                onFocus={ ::this.handleOnFocus }
                ref="input"
                type="text"  />

            { do { if (icon) {
              <div className="ax-input__icon">
                { cloneElement(icon, {
                  className: classnames({ 'ax-icon-spin': thinking }),
                  name: this.getIcon(icon.props.name),
                }) }
              </div>;
            } } }
          </div>

          { do { if (button) {
            cloneElement(button, {
              className: 'ax-input__button',
            });
          } } }
        </div>
      </label>
    );
  }
}

export default enhance(TextInput)(
  addPropTypes('global'),
  addClassName('global'),
);
