import _default from '@brandwatch/axiom-components/dist/Base/Base';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';

import ChartContext from '../ChartContext/ChartContext';
import DotPlotBenchmarkLine from './DotPlotBenchmarkLine';
import DotPlotDots from './DotPlotDots';
import DotPlotDifferenceLine from './DotPlotDifferenceLine';
import DotPlotValue from './DotPlotValue';
import { getLines, getDotColors, isBenchmarkFaded, isDotFaded, isDotHidden, isValueHidden, isValueStrong } from './utils';
import './DotPlot.css';

var differenceLineContainerClasses = function differenceLineContainerClasses(fromBenchmark, toBenchmark) {
  return classnames('ax-dot-plot__difference-line-container', {
    'ax-dot-plot__difference-line-container--from-benchmark': fromBenchmark,
    'ax-dot-plot__difference-line-container--to-benchmark': toBenchmark
  });
};

var DotPlot = function (_Component) {
  _inherits(DotPlot, _Component);

  function DotPlot() {
    _classCallCheck(this, DotPlot);

    return _possibleConstructorReturn(this, (DotPlot.__proto__ || Object.getPrototypeOf(DotPlot)).apply(this, arguments));
  }

  _createClass(DotPlot, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          DropdownContext = _props.DropdownContext,
          benchmark = _props.benchmark,
          data = _props.data,
          dotPlotLabel = _props.dotPlotLabel,
          label = _props.label,
          lower = _props.lower,
          mouseOverColors = _props.mouseOverColors,
          mouseOverRowIndex = _props.mouseOverRowIndex,
          onDropdownClose = _props.onDropdownClose,
          _onDropdownOpen = _props.onDropdownOpen,
          onDotMouseEnter = _props.onDotMouseEnter,
          onDotMouseLeave = _props.onDotMouseLeave,
          rawData = _props.rawData,
          rowIndex = _props.rowIndex,
          upper = _props.upper,
          rest = _objectWithoutProperties(_props, ['DropdownContext', 'benchmark', 'data', 'dotPlotLabel', 'label', 'lower', 'mouseOverColors', 'mouseOverRowIndex', 'onDropdownClose', 'onDropdownOpen', 'onDotMouseEnter', 'onDotMouseLeave', 'rawData', 'rowIndex', 'upper']);

      var dotPlotsArgs = [mouseOverRowIndex, mouseOverColors, rowIndex];
      var benchmarkPercent = void 0;
      if (benchmark !== undefined) {
        benchmarkPercent = (benchmark - lower) / (upper - lower) * 100;
      }

      return React.createElement(
        _default,
        _extends({}, rest, { className: 'ax-dot-plot' }),
        getLines(data, benchmark, mouseOverRowIndex, mouseOverColors, rowIndex, lower, upper).map(function (_ref) {
          var fromBenchmark = _ref.fromBenchmark,
              toBenchmark = _ref.toBenchmark,
              faded = _ref.faded,
              fromX = _ref.fromX,
              toX = _ref.toX;
          return React.createElement(
            'div',
            {
              className: differenceLineContainerClasses(fromBenchmark, toBenchmark),
              key: fromX + '.' + toX },
            React.createElement(DotPlotDifferenceLine, { faded: faded, from: fromX, to: toX })
          );
        }),
        data.map(function (_ref2) {
          var colors = _ref2.colors,
              value = _ref2.value;
          return React.createElement(
            ChartContext,
            {
              DropdownContext: DropdownContext,
              colors: getDotColors.apply(undefined, dotPlotsArgs.concat([colors])),
              data: rawData,
              key: value,
              label: label,
              lower: lower,
              onDropdownClose: onDropdownClose,
              onDropdownOpen: function onDropdownOpen() {
                return _onDropdownOpen(getDotColors.apply(undefined, dotPlotsArgs.concat([colors])));
              },
              upper: upper,
              value: value },
            React.createElement(DotPlotDots, {
              colors: getDotColors.apply(undefined, dotPlotsArgs.concat([colors])),
              faded: isDotFaded.apply(undefined, dotPlotsArgs.concat([colors])),
              hidden: isDotHidden.apply(undefined, dotPlotsArgs.concat([colors])),
              onMouseEnter: function onMouseEnter() {
                return onDotMouseEnter(colors);
              },
              onMouseLeave: onDotMouseLeave,
              value: (value - lower) / (upper - lower) * 100 })
          );
        }),
        benchmarkPercent !== undefined && React.createElement(
          'div',
          { className: 'ax-dot-plot__benchmark-line-container' },
          React.createElement(DotPlotBenchmarkLine, {
            faded: isBenchmarkFaded.apply(undefined, dotPlotsArgs),
            value: benchmarkPercent })
        ),
        data.map(function (_ref3) {
          var colors = _ref3.colors,
              value = _ref3.value;
          return React.createElement(DotPlotValue, {
            dotPlotLabel: dotPlotLabel,
            hidden: isValueHidden.apply(undefined, dotPlotsArgs.concat([colors])),
            key: value,
            textStrong: isValueStrong.apply(undefined, dotPlotsArgs.concat([colors])),
            value: value,
            x: (value - lower) / (upper - lower) * 100 });
        })
      );
    }
  }]);

  return DotPlot;
}(Component);

export default DotPlot;