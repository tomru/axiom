var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';

import ChartContext from '../ChartContext/ChartContext';

var BarChartBenchmarkLine = function (_Component) {
  _inherits(BarChartBenchmarkLine, _Component);

  function BarChartBenchmarkLine() {
    _classCallCheck(this, BarChartBenchmarkLine);

    return _possibleConstructorReturn(this, (BarChartBenchmarkLine.__proto__ || Object.getPrototypeOf(BarChartBenchmarkLine)).apply(this, arguments));
  }

  _createClass(BarChartBenchmarkLine, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          BenchmarkTooltipContext = _props.BenchmarkTooltipContext,
          benchmark = _props.benchmark,
          data = _props.data,
          faded = _props.faded,
          height = _props.height,
          label = _props.label,
          value = _props.value,
          width = _props.width;

      var style = { height: height, width: width };
      var lineStyle = { left: value + '%' };

      var classes = classnames('ax-bar-chart__benchmark-line', {
        'ax-bar-chart__benchmark-line--faded': faded
      });

      var pathClasses = classnames('ax-bar-chart__benchmark-line-path', {
        'ax-bar-chart__benchmark-line-path--interactive': BenchmarkTooltipContext
      });

      return React.createElement(
        'div',
        { className: classes, style: style },
        React.createElement(
          ChartContext,
          {
            TooltipContext: BenchmarkTooltipContext,
            data: data,
            label: label,
            value: benchmark },
          React.createElement('div', { className: pathClasses, style: lineStyle })
        )
      );
    }
  }]);

  return BarChartBenchmarkLine;
}(Component);

BarChartBenchmarkLine.defaultProps = {
  value: 50
};
export default BarChartBenchmarkLine;