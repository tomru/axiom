import _default from '@brandwatch/axiom-components/dist/Base/Base';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import ColumnChart from './ColumnChart';
import ColumnChartXAxis from './ColumnChartXAxis';
import ColumnChartXAxisLabel from './ColumnChartXAxisLabel';
import './MirroredColumnChart.css';

var MirroredColumnChart = function (_Component) {
  _inherits(MirroredColumnChart, _Component);

  function MirroredColumnChart() {
    _classCallCheck(this, MirroredColumnChart);

    return _possibleConstructorReturn(this, (MirroredColumnChart.__proto__ || Object.getPrototypeOf(MirroredColumnChart)).apply(this, arguments));
  }

  _createClass(MirroredColumnChart, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          DropdownContext = _props.DropdownContext,
          label = _props.label,
          reflectionLabel = _props.reflectionLabel,
          chartKey = _props.chartKey,
          data = _props.data,
          height = _props.height,
          labelColumnWidth = _props.labelColumnWidth,
          reflectionData = _props.reflectionData,
          showBarLabel = _props.showBarLabel,
          showSubLabel = _props.showSubLabel,
          showXAxisLabels = _props.showXAxisLabels,
          rest = _objectWithoutProperties(_props, ['DropdownContext', 'label', 'reflectionLabel', 'chartKey', 'data', 'height', 'labelColumnWidth', 'reflectionData', 'showBarLabel', 'showSubLabel', 'showXAxisLabels']);

      return React.createElement(
        _default,
        _extends({}, rest, {
          className: 'ax-mirrored-column-chart' }),
        React.createElement(ColumnChart, {
          DropdownContext: DropdownContext,
          chartKey: chartKey,
          data: data,
          direction: 'up',
          height: height,
          label: label,
          labelColumnWidth: labelColumnWidth,
          showBarLabel: showBarLabel,
          showSubLabel: showSubLabel,
          showXAxisLabels: false }),
        showXAxisLabels && React.createElement(
          ColumnChartXAxis,
          { labelColumnWidth: labelColumnWidth },
          data.map(function (_ref, index) {
            var label = _ref.label;
            return React.createElement(
              ColumnChartXAxisLabel,
              { key: index },
              label
            );
          })
        ),
        React.createElement(ColumnChart, {
          DropdownContext: DropdownContext,
          chartKey: chartKey,
          data: reflectionData,
          direction: 'down',
          height: height,
          label: reflectionLabel,
          labelColumnWidth: labelColumnWidth,
          showBarLabel: showBarLabel,
          showSubLabel: showSubLabel,
          showXAxisLabels: false })
      );
    }
  }]);

  return MirroredColumnChart;
}(Component);

MirroredColumnChart.defaultProps = {
  labelColumnWidth: '0rem',
  showXAxisLabels: true
};
export default MirroredColumnChart;