var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import DropdownMenuItem from '../Dropdown/DropdownMenuItem';

var SelectOption = function (_Component) {
  _inherits(SelectOption, _Component);

  function SelectOption(props) {
    _classCallCheck(this, SelectOption);

    var _this = _possibleConstructorReturn(this, (SelectOption.__proto__ || Object.getPrototypeOf(SelectOption)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(SelectOption, [{
    key: 'handleClick',
    value: function handleClick(event) {
      var _props = this.props,
          onClick = _props.onClick,
          value = _props.value;


      this.context.handleSelectOption(value);
      if (onClick) onClick(event);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          value = _props2.value,
          props = _objectWithoutProperties(_props2, ['children', 'value']);

      var selectedOptionValue = this.context.selectedOptionValue;


      var selected = Array.isArray(selectedOptionValue) && selectedOptionValue.indexOf(value) !== -1 || value === selectedOptionValue;

      return React.createElement(
        DropdownMenuItem,
        _extends({}, props, {
          onClick: this.handleClick,
          selected: selected }),
        children
      );
    }
  }]);

  return SelectOption;
}(Component);

SelectOption.contextTypes = {
  selectedOptionValue: PropTypes.any,
  handleSelectOption: PropTypes.func.isRequired
};
export default SelectOption;