var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import Validate from '../Validation/Validate';
import InputWrapper from './InputWrapper';
import './TextArea.css';

var TextArea = function (_Component) {
  _inherits(TextArea, _Component);

  function TextArea() {
    _classCallCheck(this, TextArea);

    return _possibleConstructorReturn(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).apply(this, arguments));
  }

  _createClass(TextArea, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          disabled = _props.disabled,
          error = _props.error,
          height = _props.height,
          invalid = _props.invalid,
          label = _props.label,
          patterns = _props.patterns,
          placeholder = _props.placeholder,
          required = _props.required,
          usageHint = _props.usageHint,
          usageHintPosition = _props.usageHintPosition,
          valid = _props.valid,
          value = _props.value,
          rest = _objectWithoutProperties(_props, ['disabled', 'error', 'height', 'invalid', 'label', 'patterns', 'placeholder', 'required', 'usageHint', 'usageHintPosition', 'valid', 'value']);

      var style = { minHeight: height };
      var classes = function classes(isValid) {
        return classnames('ax-textarea', {
          'ax-textarea--valid': valid,
          'ax-textarea--invalid': invalid || isValid === false
        });
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
            { label: label, usageHint: usageHint, usageHintPosition: usageHintPosition },
            React.createElement(Base, _extends({}, rest, {
              Component: 'textarea',
              className: classes(isValid),
              disabled: disabled,
              placeholder: placeholder,
              style: style,
              value: value }))
          );
        }
      );
    }
  }]);

  return TextArea;
}(Component);

TextArea.defaultProps = {
  height: 150
};
export default TextArea;