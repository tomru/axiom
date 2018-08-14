import _default from '@brandwatch/axiom-formatting/dist/mediumDate';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Button from '../Button/Button';
import ButtonGroup from '../Button/ButtonGroup';
import Grid from '../Grid/Grid';
import GridCell from '../Grid/GridCell';

var DatePickerControls = function (_Component) {
  _inherits(DatePickerControls, _Component);

  function DatePickerControls(props) {
    _classCallCheck(this, DatePickerControls);

    var _this = _possibleConstructorReturn(this, (DatePickerControls.__proto__ || Object.getPrototypeOf(DatePickerControls)).call(this, props));

    _this.handleApply = _this.handleApply.bind(_this);
    _this.handleCancel = _this.handleCancel.bind(_this);
    return _this;
  }

  _createClass(DatePickerControls, [{
    key: 'handleApply',
    value: function handleApply() {
      this.props.onApply && this.props.onApply();
      this.context.closeDropdown();
    }
  }, {
    key: 'handleCancel',
    value: function handleCancel() {
      this.props.onCancel && this.props.onCancel();
      this.context.closeDropdown();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          rangeSelect = _props.rangeSelect,
          selectedDate = _props.selectedDate,
          selectedEndDate = _props.selectedEndDate,
          selectedStartDate = _props.selectedStartDate,
          view = _props.view;


      return React.createElement(
        Grid,
        { responsive: false, space: 'x1' },
        view === 'double' && React.createElement(
          GridCell,
          null,
          rangeSelect && selectedStartDate && _default(selectedStartDate),
          rangeSelect && selectedEndDate && ' \u2013 ' + _default(selectedEndDate),
          !rangeSelect && selectedDate && _default(selectedDate)
        ),
        React.createElement(
          GridCell,
          { shrink: true },
          React.createElement(
            ButtonGroup,
            null,
            React.createElement(
              Button,
              {
                onClick: this.handleApply,
                size: 'small',
                style: 'primary' },
              'Apply'
            ),
            React.createElement(
              Button,
              {
                onClick: this.handleCancel,
                size: 'small',
                style: 'secondary' },
              'Cancel'
            )
          )
        )
      );
    }
  }]);

  return DatePickerControls;
}(Component);

DatePickerControls.contextTypes = {
  closeDropdown: PropTypes.func.isRequired
};
export default DatePickerControls;