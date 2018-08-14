var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TextInput from '../Form/TextInput';
import TextInputIcon from '../Form/TextInputIcon';

var SelectInput = function (_Component) {
  _inherits(SelectInput, _Component);

  function SelectInput(props) {
    _classCallCheck(this, SelectInput);

    var _this = _possibleConstructorReturn(this, (SelectInput.__proto__ || Object.getPrototypeOf(SelectInput)).call(this, props));

    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    return _this;
  }

  _createClass(SelectInput, [{
    key: 'handleKeyDown',
    value: function handleKeyDown(event) {
      var key = event.key;
      var _context = this.context,
          closeDropdown = _context.closeDropdown,
          openDropdown = _context.openDropdown;


      switch (key) {
        case 'Enter':
          closeDropdown();
          break;
        case 'Tab':
          closeDropdown();
          break;
        default:
          openDropdown();
      }
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(event) {
      this.context.openDropdown();

      if (this.props.onFocus) {
        this.props.onFocus(event);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        TextInput,
        _extends({}, this.props, {
          onFocus: this.handleFocus,
          onKeyDown: this.handleKeyDown }),
        React.createElement(TextInputIcon, { name: 'chevron-down' })
      );
    }
  }]);

  return SelectInput;
}(Component);

SelectInput.contextTypes = {
  closeDropdown: PropTypes.func,
  openDropdown: PropTypes.func
};
export default SelectInput;