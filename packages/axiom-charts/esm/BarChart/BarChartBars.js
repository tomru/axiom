import _default2 from '@brandwatch/axiom-components/dist/Base/Base';
import _default from '@brandwatch/axiom-components/dist/Typography/Small';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import atIds from '@brandwatch/axiom-automation-testing/ids';

import Bars from '../Bar/Bars';
import CombinedBar from './CombinedBar';
import BarChartBenchmarkLine from './BarChartBenchmarkLine';

var BarChartBars = function (_Component) {
  _inherits(BarChartBars, _Component);

  function BarChartBars() {
    _classCallCheck(this, BarChartBars);

    return _possibleConstructorReturn(this, (BarChartBars.__proto__ || Object.getPrototypeOf(BarChartBars)).apply(this, arguments));
  }

  _createClass(BarChartBars, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          BenchmarkTooltipContext = _props.BenchmarkTooltipContext,
          DifferenceAreaTooltipContext = _props.DifferenceAreaTooltipContext,
          DropdownContext = _props.DropdownContext,
          TooltipContext = _props.TooltipContext,
          barLabel = _props.barLabel,
          benchmark = _props.benchmark,
          benchmarkHeight = _props.benchmarkHeight,
          data = _props.data,
          fadeBenchmarkLine = _props.fadeBenchmarkLine,
          hideBars = _props.hideBars,
          hoverColor = _props.hoverColor,
          hoverIndex = _props.hoverIndex,
          isHidden = _props.isHidden,
          isHovered = _props.isHovered,
          index = _props.index,
          label = _props.label,
          lower = _props.lower,
          showBarLabel = _props.showBarLabel,
          showDifferenceArea = _props.showDifferenceArea,
          singleSelect = _props.singleSelect,
          size = _props.size,
          upper = _props.upper,
          values = _props.values,
          onDropdownClose = _props.onDropdownClose,
          _onDropdownOpen = _props.onDropdownOpen,
          _onMouseEnter = _props.onMouseEnter,
          onMouseLeave = _props.onMouseLeave;


      var classes = classnames('ax-bar-chart__bars', _defineProperty({}, 'ax-bar-chart__bars--' + benchmarkHeight, benchmarkHeight));

      var benchmarkPercent = void 0;
      if (benchmark !== undefined) {
        benchmarkPercent = (benchmark - lower) / (upper - lower) * 100;
      }

      return React.createElement(
        _default2,
        { className: classes, cloak: isHidden },
        React.createElement(
          Bars,
          { direction: 'right' },
          values.map(function (_ref) {
            var color = _ref.color,
                value = _ref.value;

            var isFaded = singleSelect ? Number.isInteger(hoverIndex) && hoverIndex !== index : hoverColor && color !== hoverColor;

            var percent = (value - lower) / (upper - lower) * 100;

            var isHoveredByColor = hoverColor && color === hoverColor;
            var isHoveredByIndex = hoverIndex && index === hoverIndex;
            var hideLabel = !showBarLabel && !isHoveredByColor && !isHoveredByIndex;
            var labelClasses = classnames('ax-bar-chart__bar-label', {
              'ax-bar-chart__bar-label--hidden': hideLabel
            });

            var isStretched = benchmarkPercent > percent;

            var labelStyle = {
              left: (showDifferenceArea && isStretched ? benchmarkPercent : percent) + '%'
            };

            return React.createElement(
              'div',
              { className: 'ax-bar-chart__bar-container', key: color },
              React.createElement(CombinedBar, {
                DifferenceAreaTooltipContext: DifferenceAreaTooltipContext,
                DropdownContext: DropdownContext,
                TooltipContext: TooltipContext,
                benchmark: benchmark,
                benchmarkPercent: showDifferenceArea ? benchmarkPercent : null,
                color: color,
                data: data,
                'data-ax-at': atIds.BarChart.bar,
                isFaded: isFaded,
                isHidden: hideBars && isFaded,
                label: label,
                onDropdownClose: onDropdownClose,
                onDropdownOpen: function onDropdownOpen() {
                  return _onDropdownOpen(color);
                },
                onMouseEnter: function onMouseEnter() {
                  return _onMouseEnter(color);
                },
                onMouseLeave: onMouseLeave,
                percent: percent,
                showLabel: false,
                size: size,
                value: value }),
              React.createElement(
                'div',
                { className: labelClasses, style: labelStyle },
                React.createElement(
                  _default,
                  { textStrong: isHovered },
                  barLabel ? barLabel({ value: value, data: data, color: color, label: label }) : value
                )
              )
            );
          })
        ),
        benchmarkPercent !== undefined && React.createElement(
          'div',
          { className: 'ax-bar-chart__benchmark-line-container' },
          React.createElement(BarChartBenchmarkLine, {
            BenchmarkTooltipContext: BenchmarkTooltipContext,
            benchmark: benchmark,
            data: data,
            faded: fadeBenchmarkLine,
            label: label,
            value: benchmarkPercent })
        )
      );
    }
  }]);

  return BarChartBars;
}(Component);

export default BarChartBars;