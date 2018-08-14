var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from '../Button/Button';
import ButtonIcon from '../Button/ButtonIcon';
import Grid from '../Grid/Grid';
import GridCell from '../Grid/GridCell';
import Paragraph from '../Typography/Paragraph';
import { getMonthName, getYearNumber, isSameOrAfterMonth, isSameOrBeforeMonth } from './utils';

var DatePickerHeaderControl = function (_Component) {
  _inherits(DatePickerHeaderControl, _Component);

  function DatePickerHeaderControl() {
    _classCallCheck(this, DatePickerHeaderControl);

    return _possibleConstructorReturn(this, (DatePickerHeaderControl.__proto__ || Object.getPrototypeOf(DatePickerHeaderControl)).apply(this, arguments));
  }

  _createClass(DatePickerHeaderControl, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          date = _props.date,
          earliestSelectableDate = _props.earliestSelectableDate,
          latestSelectableDate = _props.latestSelectableDate,
          onNext = _props.onNext,
          onPrevious = _props.onPrevious;


      return React.createElement(
        Grid,
        {
          gutters: 'small',
          horizontalAlign: 'between',
          responsive: false,
          shrink: true,
          space: 'x4',
          verticalAlign: 'middle' },
        React.createElement(
          GridCell,
          null,
          React.createElement(
            Button,
            {
              disabled: isSameOrBeforeMonth(date, earliestSelectableDate),
              onClick: function onClick() {
                return onPrevious();
              },
              style: 'quaternary' },
            React.createElement(ButtonIcon, { name: 'chevron-left' })
          )
        ),
        React.createElement(
          GridCell,
          null,
          React.createElement(
            Paragraph,
            null,
            getMonthName(date),
            ' ',
            getYearNumber(date)
          )
        ),
        React.createElement(
          GridCell,
          null,
          React.createElement(
            Button,
            {
              disabled: isSameOrAfterMonth(date, latestSelectableDate),
              onClick: function onClick() {
                return onNext();
              },
              style: 'quaternary' },
            React.createElement(ButtonIcon, { name: 'chevron-right' })
          )
        )
      );
    }
  }]);

  return DatePickerHeaderControl;
}(Component);

export default DatePickerHeaderControl;