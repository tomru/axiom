var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import DropdownContent from '../Dropdown/DropdownContent';
import DropdownContext from '../Dropdown/DropdownContext';
import Grid from '../Grid/Grid';
import GridCell from '../Grid/GridCell';
import DatePickerControls from './DatePickerControls';
import DatePickerHeaderControl from './DatePickerHeaderControl';
import DatePickerViewMonth from './DatePickerViewMonth';
import { addMonths, dateOrNow, isAfterDay, isBeforeDay, isSameMonth, orderDates } from './utils';
import './DatePicker.css';

var DatePickerContext = function (_Component) {
  _inherits(DatePickerContext, _Component);

  function DatePickerContext(props) {
    _classCallCheck(this, DatePickerContext);

    var _this = _possibleConstructorReturn(this, (DatePickerContext.__proto__ || Object.getPrototypeOf(DatePickerContext)).call(this, props));

    _this.handleDaySelect = _this.handleDaySelect.bind(_this);

    var _this$props = _this.props,
        initialDate = _this$props.initialDate,
        rangeSelect = _this$props.rangeSelect,
        selectedDate = _this$props.selectedDate;

    var _orderDates = orderDates(_this.props.selectedStartDate, _this.props.selectedEndDate),
        _orderDates2 = _slicedToArray(_orderDates, 2),
        selectedStartDate = _orderDates2[0],
        selectedEndDate = _orderDates2[1];

    var activeStartDate = dateOrNow((rangeSelect ? selectedStartDate : selectedDate) || initialDate);

    var activeEndDate = rangeSelect && selectedEndDate ? isSameMonth(selectedEndDate, selectedStartDate) ? addMonths(selectedEndDate, 1) : selectedEndDate : addMonths(activeStartDate, 1);

    _this.state = {
      activeStartDate: activeStartDate,
      activeEndDate: activeEndDate
    };
    return _this;
  }

  _createClass(DatePickerContext, [{
    key: 'handleActiveStartDateChange',
    value: function handleActiveStartDateChange(direction) {
      this.setState(function (state) {
        return {
          activeStartDate: addMonths(state.activeStartDate, direction)
        };
      });
    }
  }, {
    key: 'handleActiveEndDateChange',
    value: function handleActiveEndDateChange(direction) {
      this.setState(function (state) {
        return {
          activeEndDate: addMonths(state.activeEndDate, direction)
        };
      });
    }
  }, {
    key: 'handleDaySelect',
    value: function handleDaySelect(date) {
      var _props = this.props,
          onSelect = _props.onSelect,
          rangeSelect = _props.rangeSelect,
          selectedStartDate = _props.selectedStartDate,
          selectedEndDate = _props.selectedEndDate;


      if (!rangeSelect) {
        return onSelect({ date: new Date(date) });
      }

      if (!selectedStartDate || isBeforeDay(date, selectedStartDate)) {
        return onSelect({
          dateStart: new Date(date),
          dateEnd: selectedEndDate && new Date(selectedEndDate)
        });
      }

      if (!selectedEndDate || isAfterDay(date, selectedEndDate)) {
        return onSelect({
          dateStart: new Date(selectedStartDate),
          dateEnd: new Date(date)
        });
      }

      return onSelect({
        dateStart: new Date(date),
        dateEnd: undefined
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          activeEndDate = _state.activeEndDate,
          activeStartDate = _state.activeStartDate;

      var _props2 = this.props,
          earliestSelectableDate = _props2.earliestSelectableDate,
          latestSelectableDate = _props2.latestSelectableDate,
          rangeSelect = _props2.rangeSelect,
          selectedDate = _props2.selectedDate,
          selectedEndDate = _props2.selectedEndDate,
          selectedStartDate = _props2.selectedStartDate,
          onApply = _props2.onApply,
          onCancel = _props2.onCancel,
          view = _props2.view,
          rest = _objectWithoutProperties(_props2, ['earliestSelectableDate', 'latestSelectableDate', 'rangeSelect', 'selectedDate', 'selectedEndDate', 'selectedStartDate', 'onApply', 'onCancel', 'view']);

      var _orderDates3 = orderDates(selectedStartDate, selectedEndDate),
          _orderDates4 = _slicedToArray(_orderDates3, 2),
          startDate = _orderDates4[0],
          endDate = _orderDates4[1];

      var _orderDates5 = orderDates(earliestSelectableDate, latestSelectableDate),
          _orderDates6 = _slicedToArray(_orderDates5, 2),
          earliestDate = _orderDates6[0],
          latestDate = _orderDates6[1];

      var isDoubeView = view === 'double';

      return React.createElement(
        DropdownContext,
        rest,
        React.createElement(
          DropdownContent,
          { hasFullSeparator: true },
          React.createElement(
            Grid,
            { responsive: false, shrink: true },
            React.createElement(
              GridCell,
              null,
              React.createElement(DatePickerHeaderControl, {
                date: activeStartDate,
                earliestSelectableDate: earliestDate,
                latestSelectableDate: isDoubeView ? addMonths(activeEndDate, -1) : latestDate,
                onNext: function onNext() {
                  return _this2.handleActiveStartDateChange(1);
                },
                onPrevious: function onPrevious() {
                  return _this2.handleActiveStartDateChange(-1);
                } }),
              React.createElement(DatePickerViewMonth, {
                date: activeStartDate,
                earliestSelectableDate: earliestDate,
                latestSelectableDate: latestDate,
                onSelect: this.handleDaySelect,
                rangeSelect: rangeSelect,
                selectedDate: !rangeSelect ? selectedDate : undefined,
                selectedEndDate: rangeSelect ? endDate : undefined,
                selectedStartDate: rangeSelect ? startDate : undefined })
            ),
            isDoubeView && React.createElement(
              GridCell,
              { hiddenUntil: 'small' },
              React.createElement(DatePickerHeaderControl, {
                date: activeEndDate,
                earliestSelectableDate: addMonths(activeStartDate, 1),
                latestSelectableDate: latestDate,
                onNext: function onNext() {
                  return _this2.handleActiveEndDateChange(1);
                },
                onPrevious: function onPrevious() {
                  return _this2.handleActiveEndDateChange(-1);
                } }),
              React.createElement(DatePickerViewMonth, {
                date: activeEndDate,
                earliestSelectableDate: earliestDate,
                latestSelectableDate: latestDate,
                onSelect: this.handleDaySelect,
                rangeSelect: rangeSelect,
                selectedDate: !rangeSelect ? selectedDate : undefined,
                selectedEndDate: rangeSelect ? endDate : undefined,
                selectedStartDate: rangeSelect ? startDate : undefined })
            )
          )
        ),
        React.createElement(
          DropdownContent,
          null,
          React.createElement(DatePickerControls, {
            onApply: onApply,
            onCancel: onCancel,
            rangeSelect: rangeSelect,
            selectedDate: selectedDate,
            selectedEndDate: endDate,
            selectedStartDate: startDate,
            view: view })
        )
      );
    }
  }]);

  return DatePickerContext;
}(Component);

export default DatePickerContext;