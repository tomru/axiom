import _default from '@brandwatch/axiom-components/dist/Base/Base';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Line from '../Line/Line';
import LinePoint from '../Line/LinePoint';
import './SparkLine.css';

var SparkLine = function (_Component) {
  _inherits(SparkLine, _Component);

  function SparkLine() {
    _classCallCheck(this, SparkLine);

    return _possibleConstructorReturn(this, (SparkLine.__proto__ || Object.getPrototypeOf(SparkLine)).apply(this, arguments));
  }

  _createClass(SparkLine, [{
    key: 'render',
    value: function render() {
      var _ref;

      var _props = this.props,
          benchmark = _props.benchmark,
          data = _props.data,
          height = _props.height;

      var flatValues = (_ref = []).concat.apply(_ref, _toConsumableArray(data.map(function (_ref2) {
        var values = _ref2.values;
        return values;
      })));

      if (benchmark !== undefined) {
        flatValues.push(benchmark);
      }

      var lower = Math.min.apply(Math, _toConsumableArray(flatValues));
      var upper = Math.max.apply(Math, _toConsumableArray(flatValues));

      return React.createElement(
        _default,
        { className: 'ax-spark-line', style: { height: height } },
        benchmark !== undefined && React.createElement(
          'div',
          { className: 'ax-spark-line__line' },
          React.createElement(Line, {
            color: 'subtle',
            data: [benchmark, benchmark],
            height: height,
            lower: lower,
            upper: upper,
            width: '0.0625rem' })
        ),
        data.map(function (_ref3, index) {
          var lineColor = _ref3.lineColor,
              pointColor = _ref3.pointColor,
              values = _ref3.values;
          return React.createElement(
            'div',
            { className: 'ax-spark-line__line', key: index },
            React.createElement(
              Line,
              {
                color: lineColor,
                data: values,
                height: height,
                lower: lower,
                upper: upper,
                width: '0.09375rem' },
              pointColor && values.map(function (_, index, _ref4) {
                var length = _ref4.length;
                return index + 1 < length ? null : React.createElement(LinePoint, {
                  color: pointColor,
                  key: index,
                  size: '.5rem' });
              })
            )
          );
        })
      );
    }
  }]);

  return SparkLine;
}(Component);

export default SparkLine;