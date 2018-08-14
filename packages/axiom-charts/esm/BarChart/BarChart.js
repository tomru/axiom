var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import BarChartBars from './BarChartBars';
import BarChartBenchmarkLine from './BarChartBenchmarkLine';
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
import { formatData, flattenValues, hasMultipleValues } from './utils';
import './BarChart.css';

var BarChart = function (_Component) {
  _inherits(BarChart, _Component);

  function BarChart(props) {
    _classCallCheck(this, BarChart);

    var _this = _possibleConstructorReturn(this, (BarChart.__proto__ || Object.getPrototypeOf(BarChart)).call(this, props));

    _this.state = {
      selectedColor: null,
      selectedIndex: null
    };
    return _this;
  }

  _createClass(BarChart, [{
    key: 'handleDropdonOpen',
    value: function handleDropdonOpen(selectedIndex, selectedColor) {
      this.setState({
        isDropdownOpen: true,
        selectedColor: selectedColor,
        selectedIndex: selectedIndex
      });
    }
  }, {
    key: 'handleDropdonClose',
    value: function handleDropdonClose() {
      this.setState({
        isDropdownOpen: false,
        selectedColor: null,
        selectedIndex: null
      });
    }
  }, {
    key: 'handleMouseEnterRow',
    value: function handleMouseEnterRow(selectedIndex) {
      this.setState({
        selectedIndex: selectedIndex
      });
    }
  }, {
    key: 'handleMouseLeaveRow',
    value: function handleMouseLeaveRow() {
      this.setState(function (_ref) {
        var isDropdownOpen = _ref.isDropdownOpen;
        return isDropdownOpen ? {} : {
          selectedIndex: null
        };
      });
    }
  }, {
    key: 'handleMouseEnterBar',
    value: function handleMouseEnterBar(selectedIndex, selectedColor) {
      this.setState({
        selectedIndex: selectedIndex,
        selectedColor: selectedColor
      });
    }
  }, {
    key: 'handleMouseLeaveBar',
    value: function handleMouseLeaveBar() {
      this.setState(function (_ref2) {
        var isDropdownOpen = _ref2.isDropdownOpen;
        return isDropdownOpen ? {} : {
          selectedColor: null
        };
      });
    }
  }, {
    key: 'handleToggleRowVisibility',
    value: function handleToggleRowVisibility(data, index, hidden) {
      this.setState({
        selectedIndex: hidden ? index : null
      });

      var onToggleRowVisibility = this.props.onToggleRowVisibility;

      onToggleRowVisibility && onToggleRowVisibility(data, index);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var flatValues = flattenValues(this.props.data.filter(function (_ref3) {
        var hidden = _ref3.hidden;
        return !hidden;
      }));
      var dataLower = Math.min.apply(Math, _toConsumableArray(flatValues));
      var dataUpper = Math.max.apply(Math, _toConsumableArray(flatValues));

      var _props = this.props,
          axisTitle = _props.axisTitle,
          barLabel = _props.barLabel,
          chartKey = _props.chartKey,
          chartKeyBenchmarkLabel = _props.chartKeyBenchmarkLabel,
          collapsedVisibleRowCount = _props.collapsedVisibleRowCount,
          BenchmarkTooltipContext = _props.BenchmarkTooltipContext,
          DifferenceAreaTooltipContext = _props.DifferenceAreaTooltipContext,
          DropdownContext = _props.DropdownContext,
          TooltipContext = _props.TooltipContext,
          data = _props.data,
          expandButtonSuffix = _props.expandButtonSuffix,
          isBenchmarkLineFadable = _props.isBenchmarkLineFadable,
          labelColumnWidth = _props.labelColumnWidth,
          _props$lower = _props.lower,
          lower = _props$lower === undefined ? dataLower : _props$lower,
          onToggleRowVisibility = _props.onToggleRowVisibility,
          rowSpace = _props.rowSpace,
          showBarLabel = _props.showBarLabel,
          showKey = _props.showKey,
          singleSelect = _props.singleSelect,
          size = _props.size,
          showDifferenceArea = _props.showDifferenceArea,
          _props$upper = _props.upper,
          upper = _props$upper === undefined ? dataUpper : _props$upper,
          xAxisLabels = _props.xAxisLabels,
          zoom = _props.zoom,
          zoomMax = _props.zoomMax,
          rest = _objectWithoutProperties(_props, ['axisTitle', 'barLabel', 'chartKey', 'chartKeyBenchmarkLabel', 'collapsedVisibleRowCount', 'BenchmarkTooltipContext', 'DifferenceAreaTooltipContext', 'DropdownContext', 'TooltipContext', 'data', 'expandButtonSuffix', 'isBenchmarkLineFadable', 'labelColumnWidth', 'lower', 'onToggleRowVisibility', 'rowSpace', 'showBarLabel', 'showKey', 'singleSelect', 'size', 'showDifferenceArea', 'upper', 'xAxisLabels', 'zoom', 'zoomMax']);

      var _state = this.state,
          selectedColor = _state.selectedColor,
          selectedIndex = _state.selectedIndex;

      var formattedData = formatData(chartKey, data);
      var isMultipleValuesData = hasMultipleValues(data);

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
            lower: dataUpper,
            space: rowSpace,
            upper: finalUpper,
            xAxisLabels: finalXAxisLabels,
            zoom: zoom,
            zoomTo: zoom ? zoomTo : undefined },
          formattedData.map(function (_ref4, index) {
            var values = _ref4.values,
                label = _ref4.label,
                benchmark = _ref4.benchmark,
                hidden = _ref4.hidden;
            return React.createElement(
              ChartTableRow,
              {
                cloakContainer: !hidden,
                hover: index === selectedIndex,
                key: index,
                onMouseEnter: function onMouseEnter() {
                  return !hidden && _this2.handleMouseEnterRow(index);
                },
                onMouseLeave: function onMouseLeave() {
                  return _this2.handleMouseLeaveRow();
                } },
              React.createElement(
                ChartTableLabel,
                {
                  disabled: hidden,
                  onToggleRowVisibility: function onToggleRowVisibility() {
                    return _this2.handleToggleRowVisibility(data[index], index, hidden);
                  },
                  textStrong: index === selectedIndex,
                  width: labelColumnWidth },
                label
              ),
              React.createElement(
                ChartTableVisual,
                null,
                React.createElement(BarChartBars, {
                  BenchmarkTooltipContext: BenchmarkTooltipContext,
                  DifferenceAreaTooltipContext: DifferenceAreaTooltipContext,
                  DropdownContext: DropdownContext,
                  TooltipContext: TooltipContext,
                  barLabel: barLabel,
                  benchmark: benchmark,
                  benchmarkHeight: rowSpace,
                  data: data[index],
                  fadeBenchmarkLine: isBenchmarkLineFadable && selectedIndex !== null && selectedIndex !== index,
                  hideBars: isMultipleValuesData && selectedIndex !== null && selectedIndex !== index,
                  hoverColor: selectedColor,
                  hoverIndex: selectedIndex,
                  index: index,
                  isHidden: onToggleRowVisibility ? hidden : false,
                  isHovered: index === selectedIndex,
                  label: label,
                  lower: finalLower,
                  onDropdownClose: function onDropdownClose() {
                    return _this2.handleDropdonClose();
                  },
                  onDropdownOpen: function onDropdownOpen(color) {
                    return _this2.handleDropdonOpen(index, color);
                  },
                  onMouseEnter: function onMouseEnter(color) {
                    return _this2.handleMouseEnterBar(index, color);
                  },
                  onMouseLeave: function onMouseLeave() {
                    return _this2.handleMouseLeaveBar();
                  },
                  showBarLabel: showBarLabel,
                  showDifferenceArea: showDifferenceArea,
                  singleSelect: singleSelect,
                  size: size,
                  upper: finalUpper,
                  values: values })
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
              React.createElement(BarChartBenchmarkLine, { height: '1rem', width: '0.75rem' })
            ),
            chartKey.map(function (_ref5) {
              var label = _ref5.label,
                  color = _ref5.color;
              return React.createElement(
                ChartKeyItem,
                { key: label + '.' + color, label: label },
                React.createElement(
                  DataPoints,
                  { size: '0.75rem' },
                  React.createElement(DataPoint, { color: color })
                )
              );
            })
          )
        )
      );
    }
  }]);

  return BarChart;
}(Component);

BarChart.defaultProps = {
  isBenchmarkLineFadable: true,
  rowSpace: 'x2',
  showKey: true,
  showDifferenceArea: false,
  xAxisLabels: function xAxisLabels() {
    return [];
  }
};
export default BarChart;