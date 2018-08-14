var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ChartContext from '../ChartContext/ChartContext';
import DataPoint from '../DataPoint/DataPoint';
import DataPoints from '../DataPoint/DataPoints';

var RadarPoint = function (_Component) {
  _inherits(RadarPoint, _Component);

  function RadarPoint() {
    _classCallCheck(this, RadarPoint);

    return _possibleConstructorReturn(this, (RadarPoint.__proto__ || Object.getPrototypeOf(RadarPoint)).apply(this, arguments));
  }

  _createClass(RadarPoint, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          colors = _props.colors,
          label = _props.label,
          onClick = _props.onClick,
          onMouseEnter = _props.onMouseEnter,
          onMouseLeave = _props.onMouseLeave,
          value = _props.value,
          x = _props.x,
          y = _props.y,
          rest = _objectWithoutProperties(_props, ['colors', 'label', 'onClick', 'onMouseEnter', 'onMouseLeave', 'value', 'x', 'y']);

      return React.createElement(
        'div',
        {
          className: 'ax-radar__point',
          onClick: onClick && function () {
            return onClick({ colors: colors, label: label, value: value });
          },
          onMouseEnter: onMouseEnter,
          onMouseLeave: onMouseLeave,
          style: { top: y + 'px', left: x + 'px' } },
        React.createElement(
          ChartContext,
          _extends({}, rest, {
            colors: colors,
            label: label,
            value: value }),
          React.createElement(
            DataPoints,
            { size: '0.5rem' },
            colors.map(function (color) {
              return React.createElement(DataPoint, { color: color, key: color });
            })
          )
        )
      );
    }
  }]);

  return RadarPoint;
}(Component);

export default RadarPoint;