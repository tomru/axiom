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
import './ColorPickerOption.css';

var ColorPickerOption = function (_Component) {
  _inherits(ColorPickerOption, _Component);

  function ColorPickerOption(props) {
    _classCallCheck(this, ColorPickerOption);

    var _this = _possibleConstructorReturn(this, (ColorPickerOption.__proto__ || Object.getPrototypeOf(ColorPickerOption)).call(this, props));

    _this.boundHandleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(ColorPickerOption, [{
    key: 'handleClick',
    value: function handleClick() {
      var closeDropdown = this.context.closeDropdown;
      var _props = this.props,
          disabled = _props.disabled,
          onClick = _props.onClick;


      if (closeDropdown && !disabled) {
        closeDropdown();
      }

      if (onClick) {
        onClick.apply(undefined, arguments);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          _props2$color = _props2.color,
          color = _props2$color === undefined ? 'empty' : _props2$color,
          disabled = _props2.disabled,
          onClick = _props2.onClick,
          size = _props2.size,
          rest = _objectWithoutProperties(_props2, ['color', 'disabled', 'onClick', 'size']);

      var classes = classnames('ax-color-picker__option', 'ax-color-picker__option--' + color, {
        'ax-color-picker__option--clickable': onClick && !disabled,
        'ax-color-picker__option--disabled': disabled
      });

      return React.createElement(Base, _extends({}, rest, {
        className: classes,
        onClick: this.boundHandleClick,
        style: { height: size, width: size } }));
    }
  }]);

  return ColorPickerOption;
}(Component);

ColorPickerOption.contextTypes = {
  closeDropdown: PropTypes.func
};
ColorPickerOption.defaultProps = {
  disabled: false,
  size: '.75rem'
};
export default ColorPickerOption;