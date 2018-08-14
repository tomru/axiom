var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { getDayNumber } from './utils';

var DatePickerDay = function (_Component) {
  _inherits(DatePickerDay, _Component);

  function DatePickerDay() {
    _classCallCheck(this, DatePickerDay);

    return _possibleConstructorReturn(this, (DatePickerDay.__proto__ || Object.getPrototypeOf(DatePickerDay)).apply(this, arguments));
  }

  _createClass(DatePickerDay, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          date = _props.date,
          disabled = _props.disabled,
          onSelect = _props.onSelect,
          selected = _props.selected,
          selectedEnd = _props.selectedEnd,
          selectedStart = _props.selectedStart,
          selection = _props.selection,
          weekEnd = _props.weekEnd,
          weekStart = _props.weekStart;


      var classes = classnames('ax-date-picker__day', {
        'ax-date-picker__day--first': weekStart,
        'ax-date-picker__day--last': weekEnd,
        'ax-date-picker__day--selected': selected,
        'ax-date-picker__day--selected-end': selectedEnd,
        'ax-date-picker__day--selected-start': selectedStart,
        'ax-date-picker__day--selection': selection
      });

      return React.createElement(
        'button',
        {
          className: classes,
          disabled: !date || disabled,
          onClick: function onClick() {
            return date && onSelect(date);
          } },
        React.createElement(
          'div',
          { className: 'ax-date-picker__day-inner' },
          date && getDayNumber(date)
        )
      );
    }
  }]);

  return DatePickerDay;
}(Component);

export default DatePickerDay;