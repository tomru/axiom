import _default from '@brandwatch/axiom-components/dist/Base/Base';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import BulletBars from './BulletBars';
import ColumnChartBars from '../ColumnChart/ColumnChartBars';
import ColumnChartRow from '../ColumnChart/ColumnChartRow';
import ColumnChartVisual from '../ColumnChart/ColumnChartVisual';
import ColumnChartXAxis from '../ColumnChart/ColumnChartXAxis';
import ColumnChartXAxisLabel from '../ColumnChart/ColumnChartXAxisLabel';
import ColumnChartYAxis from '../ColumnChart/ColumnChartYAxis';
import { formatData } from './utils';
import './BulletChart.css';

var BulletChart = function (_Component) {
  _inherits(BulletChart, _Component);

  function BulletChart() {
    _classCallCheck(this, BulletChart);

    return _possibleConstructorReturn(this, (BulletChart.__proto__ || Object.getPrototypeOf(BulletChart)).apply(this, arguments));
  }

  _createClass(BulletChart, [{
    key: 'getLabelAlignment',
    value: function getLabelAlignment() {
      return this.props.direction === 'down' ? 'top' : 'bottom';
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          chartKey = _props.chartKey,
          data = _props.data,
          direction = _props.direction,
          height = _props.height,
          label = _props.label,
          labelColumnWidth = _props.labelColumnWidth,
          labelIndex = _props.labelIndex,
          showBarLabel = _props.showBarLabel,
          showSubLabel = _props.showSubLabel,
          showXAxisLabels = _props.showXAxisLabels,
          rest = _objectWithoutProperties(_props, ['chartKey', 'data', 'direction', 'height', 'label', 'labelColumnWidth', 'labelIndex', 'showBarLabel', 'showSubLabel', 'showXAxisLabels']);

      var formattedData = formatData(chartKey, data);

      return React.createElement(
        _default,
        _extends({}, rest, {
          className: 'ax-bullet-chart',
          style: { height: height } }),
        React.createElement(
          ColumnChartRow,
          null,
          label && React.createElement(
            ColumnChartYAxis,
            { align: this.getLabelAlignment(), yAxisWidth: labelColumnWidth },
            label
          ),
          React.createElement(
            ColumnChartVisual,
            null,
            formattedData.map(function (_ref, index) {
              var values = _ref.values,
                  subLabel = _ref.subLabel;
              return React.createElement(
                ColumnChartBars,
                { key: index },
                React.createElement(BulletBars, {
                  barLabel: values[labelIndex] && values[labelIndex].valueLabel,
                  direction: direction,
                  label: showSubLabel && subLabel,
                  showBarLabel: showBarLabel,
                  values: values })
              );
            })
          )
        ),
        showXAxisLabels && React.createElement(
          ColumnChartXAxis,
          { labelColumnWidth: labelColumnWidth },
          formattedData.map(function (_ref2, index) {
            var label = _ref2.label;
            return React.createElement(
              ColumnChartXAxisLabel,
              { key: index },
              label
            );
          })
        )
      );
    }
  }]);

  return BulletChart;
}(Component);

BulletChart.defaultProps = {
  labelColumnWidth: '0rem',
  labelIndex: 0
};
export default BulletChart;