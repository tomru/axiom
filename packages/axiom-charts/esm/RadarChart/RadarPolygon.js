var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';

var RadarPolygon = function (_Component) {
  _inherits(RadarPolygon, _Component);

  function RadarPolygon() {
    _classCallCheck(this, RadarPolygon);

    return _possibleConstructorReturn(this, (RadarPolygon.__proto__ || Object.getPrototypeOf(RadarPolygon)).apply(this, arguments));
  }

  _createClass(RadarPolygon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          border = _props.border,
          color = _props.color,
          cx = _props.cx,
          cy = _props.cy,
          faded = _props.faded,
          fill = _props.fill,
          lower = _props.lower,
          radius = _props.radius,
          ticks = _props.ticks,
          upper = _props.upper,
          values = _props.values;


      var classes = classnames('ax-radar__polygon', 'ax-radar__polygon--' + color, {
        'ax-radar__polygon--border': border,
        'ax-radar__polygon--faded': faded,
        'ax-radar__polygon--fill': fill
      });

      var plot = function plot(v) {
        return (v - lower) / (upper - lower) * radius;
      };
      var x = function x(i) {
        return cx + Math.cos(ticks[i]) * plot(values[i]);
      };
      var y = function y(i) {
        return cy + Math.sin(ticks[i]) * plot(values[i]);
      };
      var moveTo = function moveTo(i) {
        return 'M ' + x(i) + ',' + y(i);
      };
      var lineTo = function lineTo(d, i) {
        return d + ' L ' + x(i) + ',' + y(i);
      };
      var lineEnd = function lineEnd(d) {
        return lineTo(d, 0) + ' Z';
      };
      var path = lineEnd(values.reduce(function (d, _, i) {
        return lineTo(d, i);
      }, moveTo(0)));

      return React.createElement('path', { className: classes, d: path });
    }
  }]);

  return RadarPolygon;
}(Component);

export default RadarPolygon;