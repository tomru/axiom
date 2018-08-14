import _default from '@brandwatch/axiom-utils/dist/findComponent';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';

import Base from '../Base/Base';
import Validate from '../Validation/Validate';
import TextInputIcon, { TextInputIconRef } from './TextInputIcon';
import { TextInputButtonRef } from './TextInputButton';
import InputWrapper from './InputWrapper';
import './TextInput.css';

var TextInput = function (_Component) {
  _inherits(TextInput, _Component);

  function TextInput(props) {
    _classCallCheck(this, TextInput);

    var _this = _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).call(this, props));

    _this.state = { hasFocus: false };
    return _this;
  }

  _createClass(TextInput, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        size: this.props.size
      };
    }
  }, {
    key: 'handleOnBlur',
    value: function handleOnBlur() {
      var _props$onBlur = this.props.onBlur,
          onBlur = _props$onBlur === undefined ? function () {} : _props$onBlur;

      this.setState({ hasFocus: false });
      onBlur.apply(undefined, arguments);
    }
  }, {
    key: 'handleOnFocus',
    value: function handleOnFocus() {
      var _props$onFocus = this.props.onFocus,
          onFocus = _props$onFocus === undefined ? function () {} : _props$onFocus;

      this.setState({ hasFocus: true });
      onFocus.apply(undefined, arguments);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          disabled = _props.disabled,
          error = _props.error,
          valid = _props.valid,
          invalid = _props.invalid,
          isTarget = _props.isTarget,
          label = _props.label,
          onClear = _props.onClear,
          patterns = _props.patterns,
          required = _props.required,
          size = _props.size,
          space = _props.space,
          style = _props.style,
          type = _props.type,
          usageHint = _props.usageHint,
          usageHintPosition = _props.usageHintPosition,
          value = _props.value,
          rest = _objectWithoutProperties(_props, ['children', 'disabled', 'error', 'valid', 'invalid', 'isTarget', 'label', 'onClear', 'patterns', 'required', 'size', 'space', 'style', 'type', 'usageHint', 'usageHintPosition', 'value']);

      var hasFocus = this.state.hasFocus;

      var icon = _default(children, TextInputIconRef);
      var button = _default(children, TextInputButtonRef);
      var classes = function classes(isValid) {
        var _classnames;

        return classnames('ax-input__icon-container', (_classnames = {}, _defineProperty(_classnames, 'ax-input__icon-container--' + size, size), _defineProperty(_classnames, 'ax-input__icon-container--' + style, style), _defineProperty(_classnames, 'ax-input__icon-container--disabled', disabled), _defineProperty(_classnames, 'ax-input__icon-container--focused', hasFocus), _defineProperty(_classnames, 'ax-input__icon-container--valid', valid), _defineProperty(_classnames, 'ax-input__icon-container--invalid', invalid || isValid === false), _classnames));
      };

      return React.createElement(
        Validate,
        {
          error: error,
          patterns: patterns,
          required: required,
          value: value },
        function (isValid) {
          return React.createElement(
            InputWrapper,
            {
              isTarget: isTarget,
              label: label,
              size: size,
              space: space,
              usageHint: usageHint,
              usageHintPosition: usageHintPosition },
            React.createElement(
              'div',
              { className: 'ax-input__button-container' },
              React.createElement(
                'div',
                { className: classes(isValid) },
                onClear && value ? React.createElement(TextInputIcon, {
                  align: 'right',
                  name: 'cross',
                  onClick: onClear }) : icon,
                React.createElement(Base, _extends({}, rest, {
                  Component: 'input',
                  className: 'ax-input',
                  disabled: disabled,
                  onBlur: _this2.handleOnBlur.bind(_this2),
                  onFocus: _this2.handleOnFocus.bind(_this2),
                  type: type,
                  value: value }))
              ),
              button
            )
          );
        }
      );
    }
  }]);

  return TextInput;
}(Component);

TextInput.childContextTypes = {
  size: PropTypes.string
};
TextInput.defaultProps = {
  size: 'medium',
  type: 'text'
};
export default TextInput;