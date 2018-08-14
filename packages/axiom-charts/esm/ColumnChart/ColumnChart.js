import _default from '@brandwatch/axiom-components/dist/Base/Base';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Bars from '../Bar/Bars';
import ColumnChartBars from './ColumnChartBars';
import ColumnChartContext from './ColumnChartContext';
import ColumnChartRow from './ColumnChartRow';
import ColumnChartVisual from './ColumnChartVisual';
import ColumnChartXAxis from './ColumnChartXAxis';
import ColumnChartXAxisLabel from './ColumnChartXAxisLabel';
import ColumnChartYAxis from './ColumnChartYAxis';
import { formatData } from './utils';
import './ColumnChart.css';

var ColumnChart = function (_Component) {
  _inherits(ColumnChart, _Component);

  function ColumnChart(props) {
    _classCallCheck(this, ColumnChart);

    var _this = _possibleConstructorReturn(this, (ColumnChart.__proto__ || Object.getPrototypeOf(ColumnChart)).call(this, props));

    _this.state = {
      hoverColor: null,
      hoverIndex: null
    };
    _this.onMouseEnter = function (hoverIndex, hoverColor) {
      return _this.setState({ hoverColor: hoverColor, hoverIndex: hoverIndex });
    };
    _this.onMouseLeave = function () {
      return _this.setState({ hoverColor: null, hoverIndex: null });
    };
    return _this;
  }

  _createClass(ColumnChart, [{
    key: 'getLabelAlignment',
    value: function getLabelAlignment() {
      return this.props.direction === 'down' ? 'top' : 'bottom';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          chartKey = _props.chartKey,
          DropdownContext = _props.DropdownContext,
          data = _props.data,
          direction = _props.direction,
          height = _props.height,
          label = _props.label,
          labelColumnWidth = _props.labelColumnWidth,
          showBarLabel = _props.showBarLabel,
          showSubLabel = _props.showSubLabel,
          showXAxisLabels = _props.showXAxisLabels,
          rest = _objectWithoutProperties(_props, ['chartKey', 'DropdownContext', 'data', 'direction', 'height', 'label', 'labelColumnWidth', 'showBarLabel', 'showSubLabel', 'showXAxisLabels']);

      var formattedData = formatData(chartKey, data);

      return React.createElement(
        _default,
        _extends({}, rest, {
          className: 'ax-column-chart',
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
                  label = _ref.label,
                  subLabel = _ref.subLabel;
              return React.createElement(
                ColumnChartBars,
                { key: index },
                React.createElement(
                  Bars,
                  { direction: direction, label: showSubLabel && subLabel },
                  values.map(function (_ref2) {
                    var color = _ref2.color,
                        value = _ref2.value;
                    return React.createElement(ColumnChartContext, {
                      DropdownContext: DropdownContext,
                      color: color,
                      data: data[index],
                      key: color,
                      label: label,
                      labelStrong: index === _this2.state.hoverIndex,
                      onMouseEnter: showBarLabel ? undefined : function () {
                        return _this2.onMouseEnter(index, color);
                      },
                      onMouseLeave: showBarLabel ? undefined : _this2.onMouseEnter,
                      showBarLabel: showBarLabel || color === _this2.state.hoverColor,
                      value: value });
                  })
                )
              );
            })
          )
        ),
        showXAxisLabels && React.createElement(
          ColumnChartXAxis,
          { labelColumnWidth: labelColumnWidth },
          formattedData.map(function (_ref3, index) {
            var label = _ref3.label;
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

  return ColumnChart;
}(Component);

ColumnChart.defaultProps = {
  labelColumnWidth: '0rem'
};
export default ColumnChart;