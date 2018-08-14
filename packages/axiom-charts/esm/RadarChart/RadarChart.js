import _default from '@brandwatch/axiom-components/dist/Base/Base';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import ChartKey from '../Chart/ChartKey';
import ChartKeyItem from '../Chart/ChartKeyItem';
import DataPoint from '../DataPoint/DataPoint';
import DataPoints from '../DataPoint/DataPoints';
import RadarPoint from './RadarPoint';
import RadarPolygon from './RadarPolygon';
import RadarXAxisLabel from './RadarXAxisLabel';
import RadarXAxisLine from './RadarXAxisLine';
import RadarYAxisLabel from './RadarYAxisLabel';
import RadarYAxisLine from './RadarYAxisLine';
import groupColorsByValue from './groupColorsByValue';
import './RadarChart.css';

var LABEL_PADDING = 16;
var TICK_PADDING = 16;

var RadarChart = function (_Component) {
  _inherits(RadarChart, _Component);

  function RadarChart(props) {
    _classCallCheck(this, RadarChart);

    var _this = _possibleConstructorReturn(this, (RadarChart.__proto__ || Object.getPrototypeOf(RadarChart)).call(this, props));

    _this.state = {
      isDropdownOpen: false,
      selectedIndex: undefined,
      selectedLabels: undefined
    };
    return _this;
  }

  _createClass(RadarChart, [{
    key: 'handleDropdownOpen',
    value: function handleDropdownOpen(selectedIndex, selectedLabels) {
      this.setState({
        isDropdownOpen: true,
        selectedIndex: selectedIndex,
        selectedLabels: selectedLabels
      });
    }
  }, {
    key: 'handleDropdownClose',
    value: function handleDropdownClose() {
      this.setState({
        isDropdownOpen: false,
        selectedIndex: undefined,
        selectedLabels: undefined
      });
    }
  }, {
    key: 'handleMouseEnter',
    value: function handleMouseEnter(selectedIndex, selectedLabels) {
      this.setState({ selectedIndex: selectedIndex, selectedLabels: selectedLabels });
    }
  }, {
    key: 'handleMouseLeave',
    value: function handleMouseLeave() {
      this.setState(function (_ref) {
        var isDropdownOpen = _ref.isDropdownOpen;
        return isDropdownOpen ? {} : {
          selectedIndex: undefined,
          selectedLabels: undefined
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          DropdownContext = _props.DropdownContext,
          TooltipContext = _props.TooltipContext,
          data = _props.data,
          height = _props.height,
          onPointClick = _props.onPointClick,
          onXAxisLabelClick = _props.onXAxisLabelClick,
          width = _props.width,
          xAxisLabels = _props.xAxisLabels,
          yAxisLabels = _props.yAxisLabels,
          rest = _objectWithoutProperties(_props, ['DropdownContext', 'TooltipContext', 'data', 'height', 'onPointClick', 'onXAxisLabelClick', 'width', 'xAxisLabels', 'yAxisLabels']);

      var _state = this.state,
          selectedIndex = _state.selectedIndex,
          selectedLabels = _state.selectedLabels;


      var cx = width / 2;
      var cy = height / 2;
      var outerRadius = cy;
      var innerRadius = outerRadius - TICK_PADDING - LABEL_PADDING;
      var tickGap = Math.PI * 2 / xAxisLabels.length;
      var tickValues = yAxisLabels.map(function (_ref2) {
        var value = _ref2.value;
        return value;
      });
      var lower = Math.min.apply(Math, _toConsumableArray(tickValues));
      var upper = Math.max.apply(Math, _toConsumableArray(tickValues));
      var plot = function plot(value) {
        return innerRadius * ((value - lower) / (upper - lower));
      };
      var xAxisTicks = xAxisLabels.map(function (_, index) {
        return Math.PI * -0.5 + tickGap / 2 + index * tickGap;
      });
      var yAxisTicks = tickValues.map(function (value) {
        return value && plot(value);
      });
      var points = groupColorsByValue(data.filter(function (_ref3) {
        var points = _ref3.points;
        return points;
      }), selectedLabels);

      return React.createElement(
        _default,
        _extends({}, rest, { className: 'ax-radar' }),
        React.createElement(
          'div',
          {
            className: 'ax-radar__container',
            style: { width: width + 'px', height: height + 'px' } },
          React.createElement(
            'svg',
            {
              className: 'ax-radar__svg-container',
              viewBox: '0 0 ' + width + ' ' + height },
            yAxisTicks.map(function (r, index) {
              return React.createElement(RadarYAxisLine, {
                key: index,
                r: r,
                x: cx,
                y: cy });
            }),
            xAxisTicks.map(function (r, index) {
              return React.createElement(RadarXAxisLine, {
                key: index,
                x1: cx,
                x2: cx + Math.cos(r) * (innerRadius + TICK_PADDING),
                y1: cy,
                y2: cy + Math.sin(r) * (innerRadius + TICK_PADDING) });
            }),
            data.map(function (_ref4, index) {
              var border = _ref4.border,
                  label = _ref4.label,
                  rest = _objectWithoutProperties(_ref4, ['border', 'label']);

              return React.createElement(RadarPolygon, _extends({}, rest, {
                border: border && (!selectedLabels || selectedLabels.includes(label)),
                cx: cx,
                cy: cy,
                faded: selectedLabels && !selectedLabels.includes(label),
                key: index,
                lower: lower,
                radius: innerRadius,
                ticks: xAxisTicks,
                upper: upper }));
            })
          ),
          xAxisLabels.map(function (label, index) {
            return React.createElement(
              RadarXAxisLabel,
              {
                active: selectedIndex === index,
                key: index,
                onClick: onXAxisLabelClick,
                r: xAxisTicks[index],
                x: cx + Math.cos(xAxisTicks[index]) * outerRadius,
                y: cy + Math.sin(xAxisTicks[index]) * outerRadius },
              label
            );
          }),
          yAxisLabels.map(function (_ref5, index) {
            var label = _ref5.label;
            return React.createElement(
              RadarYAxisLabel,
              {
                key: index,
                x: cx,
                y: cy - yAxisTicks[index] },
              label
            );
          }),
          points.map(function (points, a) {
            return points.map(function (_ref6, b) {
              var colors = _ref6.colors,
                  labels = _ref6.labels,
                  value = _ref6.value;
              return React.createElement(RadarPoint, {
                DropdownContext: DropdownContext,
                TooltipContext: TooltipContext,
                colors: colors,
                key: '' + a + b,
                label: xAxisLabels[a],
                onClick: onPointClick,
                onDropdownClose: function onDropdownClose() {
                  return _this2.handleDropdownClose();
                },
                onDropdownOpen: function onDropdownOpen() {
                  return _this2.handleDropdownOpen(a, labels);
                },
                onMouseEnter: function onMouseEnter() {
                  return _this2.handleMouseEnter(a, labels);
                },
                onMouseLeave: function onMouseLeave() {
                  return _this2.handleMouseLeave();
                },
                value: value,
                x: cx + Math.cos(xAxisTicks[a]) * plot(value),
                y: cy + Math.sin(xAxisTicks[a]) * plot(value) });
            });
          })
        ),
        React.createElement(
          ChartKey,
          { space: 'x8' },
          data.map(function (_ref7) {
            var label = _ref7.label,
                color = _ref7.color,
                style = _ref7.style;
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
      );
    }
  }]);

  return RadarChart;
}(Component);

export default RadarChart;