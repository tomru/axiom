var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import omit from 'lodash.omit';
import Bar from '../Bar/Bar';
import ChartContext from '../ChartContext/ChartContext';
import './CombinedBar.css';

var CombinedBar = function (_Component) {
  _inherits(CombinedBar, _Component);

  function CombinedBar() {
    _classCallCheck(this, CombinedBar);

    return _possibleConstructorReturn(this, (CombinedBar.__proto__ || Object.getPrototypeOf(CombinedBar)).apply(this, arguments));
  }

  _createClass(CombinedBar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          DifferenceAreaTooltipContext = _props.DifferenceAreaTooltipContext,
          DropdownContext = _props.DropdownContext,
          TooltipContext = _props.TooltipContext,
          benchmark = _props.benchmark,
          benchmarkPercent = _props.benchmarkPercent,
          color = _props.color,
          data = _props.data,
          label = _props.label,
          onDropdownClose = _props.onDropdownClose,
          _onDropdownOpen = _props.onDropdownOpen,
          percent = _props.percent,
          value = _props.value,
          rest = _objectWithoutProperties(_props, ['DifferenceAreaTooltipContext', 'DropdownContext', 'TooltipContext', 'benchmark', 'benchmarkPercent', 'color', 'data', 'label', 'onDropdownClose', 'onDropdownOpen', 'percent', 'value']);

      var isStretched = benchmarkPercent > percent;

      var stripedBarWidth = isStretched ? benchmarkPercent - percent : percent - benchmarkPercent;
      var stripedBarStyle = {
        left: isStretched ? percent + '%' : benchmarkPercent + '%'
      };

      var stripedBarProps = omit(rest, ['onClick']);

      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          ChartContext,
          {
            DropdownContext: DropdownContext,
            TooltipContext: TooltipContext,
            color: color,
            data: data,
            label: label,
            onDropdownClose: onDropdownClose,
            onDropdownOpen: function onDropdownOpen() {
              return _onDropdownOpen(color);
            },
            value: value },
          React.createElement(Bar, _extends({
            color: color,
            percent: percent
          }, rest))
        ),
        isStretched && React.createElement(
          'div',
          { className: 'ax-bar-chart__combined-bar-diff', style: stripedBarStyle },
          React.createElement(
            ChartContext,
            {
              TooltipContext: DifferenceAreaTooltipContext,
              color: color,
              data: data,
              label: label,
              value: benchmark - value },
            React.createElement(Bar, _extends({
              color: color,
              fillMode: 'striped',
              percent: stripedBarWidth
            }, stripedBarProps))
          )
        )
      );
    }
  }]);

  return CombinedBar;
}(Component);

export default CombinedBar;