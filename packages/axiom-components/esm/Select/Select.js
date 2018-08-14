var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Children, Component } from 'react';
import omit from 'lodash.omit';
import Dropdown from '../Dropdown/Dropdown';
import DropdownContext from '../Dropdown/DropdownContext';
import DropdownSource from '../Dropdown/DropdownSource';
import DropdownTarget from '../Dropdown/DropdownTarget';
import SelectInput from './SelectInput';

var Select = function (_Component) {
  _inherits(Select, _Component);

  function Select(props) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _this.handleSelectOption = _this.handleSelectOption.bind(_this);
    return _this;
  }

  _createClass(Select, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        handleSelectOption: this.handleSelectOption,
        selectedOptionValue: this.props.selectedValue
      };
    }
  }, {
    key: 'handleSelectOption',
    value: function handleSelectOption(value) {
      this.props.onSelect(value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          onRequestClose = _props.onRequestClose,
          onRequestOpen = _props.onRequestOpen,
          props = _objectWithoutProperties(_props, ['children', 'onRequestClose', 'onRequestOpen']);

      return React.createElement(
        Dropdown,
        {
          enabled: Children.count(children) > 0,
          flip: 'mirror',
          onRequestClose: onRequestClose,
          onRequestOpen: onRequestOpen,
          position: 'bottom' },
        React.createElement(
          DropdownTarget,
          null,
          React.createElement(SelectInput, omit(props, ['onSelect', 'selectedValue']))
        ),
        React.createElement(
          DropdownSource,
          { focusOnOpen: true },
          React.createElement(
            DropdownContext,
            null,
            children
          )
        )
      );
    }
  }]);

  return Select;
}(Component);

Select.defaultProps = {
  value: '',
  onSelect: function onSelect() {}
};
Select.childContextTypes = {
  handleSelectOption: PropTypes.func.isRequired,
  selectedOptionValue: PropTypes.any
};
export default Select;