var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ChartKey from '../Chart/ChartKey';
import ChartKeyItem from '../Chart/ChartKeyItem';
import ChartTable from '../ChartTable/ChartTable';
import ChartTableAxisTitle from '../ChartTable/ChartTableAxisTitle';
import ChartTableKey from '../ChartTable/ChartTableKey';
import ChartTableLabel from '../ChartTable/ChartTableLabel';
import ChartTableRow from '../ChartTable/ChartTableRow';
import ChartTableRows from '../ChartTable/ChartTableRows';
import ChartTableVisual from '../ChartTable/ChartTableVisual';
import DataPoint from '../DataPoint/DataPoint';
import DataPoints from '../DataPoint/DataPoints';
import DotPlot from './DotPlot';
import DotPlotBenchmarkLine from './DotPlotBenchmarkLine';
import DotPlotDifferenceLine from './DotPlotDifferenceLine';
import { formatData, flattenValues } from './utils';
import './DotPlot.css';

var DotPlotChart = function (_Component) {
  _inherits(DotPlotChart, _Component);

  function DotPlotChart(props) {
    _classCallCheck(this, DotPlotChart);

    var _this = _possibleConstructorReturn(this, (DotPlotChart.__proto__ || Object.getPrototypeOf(DotPlotChart)).call(this, props));

    _this.state = {
      isDropdownOpen: false,
      selectedColors: [],
      selectedIndex: null
    };
    return _this;
  }

  _createClass(DotPlotChart, [{
    key: 'handleDropdownOpen',
    value: function handleDropdownOpen(selectedIndex, selectedColors) {
      this.setState({
        isDropdownOpen: true,
        selectedColors: selectedColors,
        selectedIndex: selectedIndex
      });
    }
  }, {
    key: 'handleDropdownClose',
    value: function handleDropdownClose() {
      this.setState({
        isDropdownOpen: false,
        selectedColors: [],
        selectedIndex: null
      });
    }
  }, {
    key: 'handleDotMouseEnter',
    value: function handleDotMouseEnter(selectedIndex, selectedColors) {
      this.setState({
        selectedColors: selectedColors,
        selectedIndex: selectedIndex
      });
    }
  }, {
    key: 'handleDotMouseLeave',
    value: function handleDotMouseLeave() {
      this.setState(function (_ref) {
        var isDropdownOpen = _ref.isDropdownOpen;
        return isDropdownOpen ? {} : {
          selectedColors: [],
          selectedIndex: null
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var flatValues = flattenValues(this.props.data);

      var dataLower = Math.min.apply(Math, _toConsumableArray(flatValues));
      var dataUpper = Math.max.apply(Math, _toConsumableArray(flatValues));

      var _props = this.props,
          axisTitle = _props.axisTitle,
          chartKey = _props.chartKey,
          chartKeyBenchmarkLabel = _props.chartKeyBenchmarkLabel,
          chartKeyDifferenceLabel = _props.chartKeyDifferenceLabel,
          collapsedVisibleRowCount = _props.collapsedVisibleRowCount,
          DropdownContext = _props.DropdownContext,
          data = _props.data,
          dotPlotLabel = _props.dotPlotLabel,
          expandButtonSuffix = _props.expandButtonSuffix,
          labelColumnWidth = _props.labelColumnWidth,
          _props$lower = _props.lower,
          lower = _props$lower === undefined ? dataLower : _props$lower,
          showKey = _props.showKey,
          _props$upper = _props.upper,
          upper = _props$upper === undefined ? dataUpper : _props$upper,
          xAxisLabels = _props.xAxisLabels,
          zoom = _props.zoom,
          zoomMax = _props.zoomMax,
          rest = _objectWithoutProperties(_props, ['axisTitle', 'chartKey', 'chartKeyBenchmarkLabel', 'chartKeyDifferenceLabel', 'collapsedVisibleRowCount', 'DropdownContext', 'data', 'dotPlotLabel', 'expandButtonSuffix', 'labelColumnWidth', 'lower', 'showKey', 'upper', 'xAxisLabels', 'zoom', 'zoomMax']);

      var _state = this.state,
          selectedColors = _state.selectedColors,
          selectedIndex = _state.selectedIndex;

      var formattedData = formatData(chartKey, data);

      var finalLower = Math.min(lower, dataLower);
      var finalUpper = Math.max(upper, dataUpper);
      var finalZoomMax = Math.max(dataUpper, Math.min(zoomMax !== undefined ? zoomMax : dataUpper, finalUpper));
      var zoomTo = (finalZoomMax - finalLower) / (finalUpper - finalLower) * 100;
      var finalXAxisLabels = xAxisLabels(finalLower, finalUpper);

      return React.createElement(
        ChartTable,
        _extends({}, rest, { xAxisLabels: finalXAxisLabels }),
        React.createElement(
          ChartTableRows,
          {
            collapsedVisibleRowCount: collapsedVisibleRowCount,
            expandButtonSuffix: expandButtonSuffix,
            labelColumnWidth: labelColumnWidth,
            space: 'x2',
            xAxisLabels: finalXAxisLabels,
            zoomTo: zoom ? zoomTo : undefined },
          formattedData.map(function (_ref2, index) {
            var values = _ref2.values,
                benchmark = _ref2.benchmark,
                label = _ref2.label;
            return React.createElement(
              ChartTableRow,
              {
                hover: index === selectedIndex,
                key: label },
              React.createElement(
                ChartTableLabel,
                {
                  textStrong: index === selectedIndex,
                  width: labelColumnWidth },
                label
              ),
              React.createElement(
                ChartTableVisual,
                null,
                React.createElement(DotPlot, {
                  DropdownContext: DropdownContext,
                  benchmark: benchmark,
                  data: values,
                  dotPlotLabel: dotPlotLabel,
                  label: label,
                  lower: finalLower,
                  mouseOverColors: selectedColors,
                  mouseOverRowIndex: selectedIndex,
                  onDotMouseEnter: function onDotMouseEnter(colors) {
                    return _this2.handleDotMouseEnter(index, colors);
                  },
                  onDotMouseLeave: function onDotMouseLeave() {
                    return _this2.handleDotMouseLeave();
                  },
                  onDropdownClose: function onDropdownClose() {
                    return _this2.handleDropdownClose();
                  },
                  onDropdownOpen: function onDropdownOpen(colors) {
                    return _this2.handleDropdownOpen(index, colors);
                  },
                  rawData: data[index],
                  rowIndex: index,
                  upper: finalUpper })
              )
            );
          })
        ),
        axisTitle && React.createElement(
          ChartTableAxisTitle,
          null,
          axisTitle
        ),
        showKey && React.createElement(
          ChartTableKey,
          null,
          React.createElement(
            ChartKey,
            null,
            chartKeyBenchmarkLabel && React.createElement(
              ChartKeyItem,
              { label: chartKeyBenchmarkLabel },
              React.createElement(DotPlotBenchmarkLine, { height: '1rem', width: '0.75rem' })
            ),
            chartKey.map(function (_ref3) {
              var label = _ref3.label,
                  color = _ref3.color;
              return React.createElement(
                ChartKeyItem,
                { key: label + '.' + color, label: label },
                React.createElement(
                  DataPoints,
                  { size: '0.75rem' },
                  React.createElement(DataPoint, { color: color })
                )
              );
            }),
            chartKeyDifferenceLabel && React.createElement(
              ChartKeyItem,
              { label: chartKeyDifferenceLabel },
              React.createElement(DotPlotDifferenceLine, { width: '1rem' })
            )
          )
        )
      );
    }
  }]);

  return DotPlotChart;
}(Component);

DotPlotChart.defaultProps = {
  showKey: true,
  zoomMax: 50,
  xAxisLabels: function xAxisLabels() {
    return [];
  }
};
export default DotPlotChart;