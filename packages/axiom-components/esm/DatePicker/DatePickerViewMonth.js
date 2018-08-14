var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../Base/Base';
import Grid from '../Grid/Grid';
import GridCell from '../Grid/GridCell';
import DatePickerDay from './DatePickerDay';
import { buildMonthGrid, isAfterDay, isBeforeDay, isBetweenDate, isSameDay, isOneOfDays } from './utils';

var DatePickerViewMonth = function (_Component) {
  _inherits(DatePickerViewMonth, _Component);

  function DatePickerViewMonth() {
    _classCallCheck(this, DatePickerViewMonth);

    return _possibleConstructorReturn(this, (DatePickerViewMonth.__proto__ || Object.getPrototypeOf(DatePickerViewMonth)).apply(this, arguments));
  }

  _createClass(DatePickerViewMonth, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          date = _props.date,
          earliestSelectableDate = _props.earliestSelectableDate,
          latestSelectableDate = _props.latestSelectableDate,
          onSelect = _props.onSelect,
          rangeSelect = _props.rangeSelect,
          selectedDate = _props.selectedDate,
          selectedEndDate = _props.selectedEndDate,
          selectedStartDate = _props.selectedStartDate;


      var selectedDates = [selectedDate, selectedEndDate, selectedStartDate];

      return React.createElement(
        Base,
        { space: 'x4' },
        React.createElement(
          Grid,
          {
            gutters: false,
            responsive: false,
            space: 'x2',
            textCenter: true,
            textColor: 'subtle',
            textSize: 'small' },
          React.createElement(
            GridCell,
            null,
            'Mon'
          ),
          React.createElement(
            GridCell,
            null,
            'Tue'
          ),
          React.createElement(
            GridCell,
            null,
            'Wed'
          ),
          React.createElement(
            GridCell,
            null,
            'Thu'
          ),
          React.createElement(
            GridCell,
            null,
            'Fri'
          ),
          React.createElement(
            GridCell,
            null,
            'Sat'
          ),
          React.createElement(
            GridCell,
            null,
            'Sun'
          )
        ),
        buildMonthGrid(date).map(function (week, rowIndex) {
          return React.createElement(
            Grid,
            {
              gutters: false,
              key: rowIndex,
              responsive: false,
              shrink: true,
              space: 'x2' },
            week.map(function (date, cellIndex) {
              return React.createElement(
                GridCell,
                { key: cellIndex },
                React.createElement(DatePickerDay, {
                  date: date,
                  disabled: isBeforeDay(date, earliestSelectableDate) || isAfterDay(date, latestSelectableDate),
                  onSelect: onSelect,
                  selected: isOneOfDays(date, selectedDates),
                  selectedEnd: rangeSelect && !!selectedStartDate && isSameDay(date, selectedEndDate) && !isSameDay(selectedStartDate, selectedEndDate),
                  selectedStart: rangeSelect && !!selectedEndDate && isSameDay(date, selectedStartDate) && !isSameDay(selectedStartDate, selectedEndDate),
                  selection: rangeSelect && isBetweenDate(date, selectedStartDate, selectedEndDate),
                  weekEnd: !week[cellIndex + 1],
                  weekStart: !week[cellIndex - 1] })
              );
            })
          );
        })
      );
    }
  }]);

  return DatePickerViewMonth;
}(Component);

export default DatePickerViewMonth;