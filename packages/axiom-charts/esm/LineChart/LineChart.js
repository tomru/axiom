var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ChartLayout from '../ChartLayout/ChartLayout';
import ChartLayoutKey from '../ChartLayout/ChartLayoutKey';
import ChartLayoutLabels from '../ChartLayout/ChartLayoutLabels';
import ChartLayoutTitle from '../ChartLayout/ChartLayoutTitle';
import ChartLayoutVisual from '../ChartLayout/ChartLayoutVisual';
import ChartKey from '../Chart/ChartKey';
import ChartKeyItem from '../Chart/ChartKeyItem';
import ChartGrid from '../ChartGrid/ChartGrid';
import DataPoint from '../DataPoint/DataPoint';
import DataPoints from '../DataPoint/DataPoints';
import Line from '../Line/Line';
import LinePoint from '../Line/LinePoint';
import './LineChart.css';

var LineChart = function (_Component) {
  _inherits(LineChart, _Component);

  function LineChart(props) {
    _classCallCheck(this, LineChart);

    var _this = _possibleConstructorReturn(this, (LineChart.__proto__ || Object.getPrototypeOf(LineChart)).call(this, props));

    _this.state = {
      isDropdownOpen: false,
      selectedIndex: null,
      selectedLabel: null
    };
    return _this;
  }

  _createClass(LineChart, [{
    key: 'handleDropdownOpen',
    value: function handleDropdownOpen(selectedIndex, selectedLabel) {
      this.setState({
        isDropdownOpen: true,
        selectedIndex: selectedIndex,
        selectedLabel: selectedLabel
      });
    }
  }, {
    key: 'handleDropdownClose',
    value: function handleDropdownClose() {
      this.setState({
        isDropdownOpen: false,
        selectedIndex: null,
        selectedLabel: null
      });
    }
  }, {
    key: 'handleMouseEnter',
    value: function handleMouseEnter(selectedIndex, selectedLabel) {
      this.setState({
        selectedIndex: selectedIndex,
        selectedLabel: selectedLabel
      });
    }
  }, {
    key: 'handleMouseLeave',
    value: function handleMouseLeave() {
      this.setState(function (_ref) {
        var isDropdownOpen = _ref.isDropdownOpen;
        return isDropdownOpen ? {} : {
          selectedIndex: null,
          selectedLabel: null
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _ref2,
          _this2 = this;

      var flatValues = (_ref2 = []).concat.apply(_ref2, _toConsumableArray(this.props.data.map(function (_ref3) {
        var values = _ref3.values;
        return values;
      }))).filter(function (n) {
        return !isNaN(n) && n !== null;
      });
      var dataLower = Math.min.apply(Math, _toConsumableArray(flatValues));
      var dataUpper = Math.max.apply(Math, _toConsumableArray(flatValues));

      var _props = this.props,
          DropdownContext = _props.DropdownContext,
          TooltipContext = _props.TooltipContext,
          chartKey = _props.chartKey,
          data = _props.data,
          height = _props.height,
          _props$lower = _props.lower,
          lower = _props$lower === undefined ? dataLower : _props$lower,
          onPointClick = _props.onPointClick,
          _props$upper = _props.upper,
          upper = _props$upper === undefined ? dataUpper : _props$upper,
          xAxisLabels = _props.xAxisLabels,
          xAxisTitle = _props.xAxisTitle,
          yAxisLabels = _props.yAxisLabels,
          yAxisTitle = _props.yAxisTitle,
          rest = _objectWithoutProperties(_props, ['DropdownContext', 'TooltipContext', 'chartKey', 'data', 'height', 'lower', 'onPointClick', 'upper', 'xAxisLabels', 'xAxisTitle', 'yAxisLabels', 'yAxisTitle']);

      var _state = this.state,
          selectedIndex = _state.selectedIndex,
          selectedLabel = _state.selectedLabel;

      var finalLower = Math.min(lower, dataLower);
      var finalUpper = Math.max(upper, dataUpper);
      var labelMap = chartKey.reduce(function (map, _ref4) {
        var color = _ref4.color,
            label = _ref4.label,
            style = _ref4.style;
        return _extends({}, map, _defineProperty({}, label, { color: color, style: style }));
      }, {});
      var finalXAxisLabels = xAxisLabels(finalLower, finalUpper);

      return React.createElement(
        ChartLayout,
        rest,
        xAxisTitle && React.createElement(
          ChartLayoutTitle,
          { axis: 'x' },
          xAxisTitle
        ),
        yAxisTitle && React.createElement(
          ChartLayoutTitle,
          { axis: 'y' },
          yAxisTitle
        ),
        finalXAxisLabels.length > 0 && React.createElement(ChartLayoutLabels, { axis: 'x', labels: finalXAxisLabels }),
        yAxisLabels && React.createElement(ChartLayoutLabels, {
          axis: 'y',
          labels: yAxisLabels,
          lower: finalLower,
          upper: finalUpper }),
        React.createElement(
          ChartLayoutVisual,
          null,
          React.createElement(
            ChartGrid,
            {
              axis: 'y',
              labels: yAxisLabels,
              lower: lower,
              upper: upper },
            React.createElement(
              'div',
              { className: 'ax-line-chart__lines', style: { height: height } },
              data.map(function (_ref5) {
                var label = _ref5.label,
                    values = _ref5.values;
                return React.createElement(
                  'div',
                  { className: 'ax-line-chart__line', key: label },
                  React.createElement(
                    Line,
                    {
                      color: labelMap[label].color,
                      dasharray: labelMap[label].style === 'dashed' ? '0.125rem 0.25rem' : '',
                      dasharrayWithoutScalingStroke: labelMap[label].style === 'dashed' ? '0.03125rem 0.0625rem' : '',
                      data: values,
                      faded: selectedLabel && selectedLabel !== label,
                      height: height,
                      lower: finalLower,
                      upper: finalUpper },
                    values.map(function (_, index) {
                      return React.createElement(LinePoint, {
                        DropdownContext: DropdownContext,
                        TooltipContext: TooltipContext,
                        color: labelMap[label].color,
                        hover: selectedIndex === index && selectedLabel === label,
                        index: index,
                        key: index,
                        label: label,
                        onClick: onPointClick,
                        onDropdownClose: function onDropdownClose() {
                          return _this2.handleDropdownClose();
                        },
                        onDropdownOpen: function onDropdownOpen() {
                          return _this2.handleDropdownOpen(index, label);
                        },
                        onMouseEnter: function onMouseEnter() {
                          return _this2.handleMouseEnter(index, label);
                        },
                        onMouseLeave: function onMouseLeave() {
                          return _this2.handleMouseLeave();
                        },
                        size: '.5rem' });
                    })
                  )
                );
              })
            )
          )
        ),
        React.createElement(
          ChartLayoutKey,
          null,
          React.createElement(
            ChartKey,
            null,
            chartKey.map(function (_ref6) {
              var label = _ref6.label,
                  color = _ref6.color,
                  style = _ref6.style;
              return React.createElement(
                ChartKeyItem,
                { key: label + '.' + color, label: label },
                React.createElement(
                  DataPoints,
                  { size: '0.75rem' },
                  React.createElement(DataPoint, {
                    color: color,
                    style: style === 'dashed' ? 'hollow' : 'solid' })
                )
              );
            })
          )
        )
      );
    }
  }]);

  return LineChart;
}(Component);

LineChart.defaultProps = {
  xAxisLabels: function xAxisLabels() {
    return [];
  }
};
export default LineChart;