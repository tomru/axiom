var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component, cloneElement } from 'react';
import classnames from 'classnames';
import './Line.css';

/** Browsers that don't support SVG vector-effect ... IE11 */
var hasVectorEffectSupport = typeof window !== 'undefined' && window.CSS && CSS.supports('vector-effect', 'non-scaling-stroke');

var createPath = function createPath(data, upper) {
  return data.reduce(function (path, n, i, _ref) {
    var l = _ref.length;

    if (isNaN(n) || n === null) return path;
    return '' + path + (i === 0 ? 'M 0,' + (upper - n) : ' L ' + i / (l - 1) * 100 + ',' + (upper - n));
  }, '');
};

var Line = function (_Component) {
  _inherits(Line, _Component);

  function Line() {
    _classCallCheck(this, Line);

    return _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).apply(this, arguments));
  }

  _createClass(Line, [{
    key: 'render',
    value: function render() {
      var fData = this.props.data.filter(function (n) {
        return !isNaN(n) && n !== null;
      });
      var dataLower = Math.min.apply(Math, _toConsumableArray(fData));
      var dataUpper = Math.max.apply(Math, _toConsumableArray(fData));

      var _props = this.props,
          color = _props.color,
          children = _props.children,
          data = _props.data,
          dasharray = _props.dasharray,
          dasharrayWithoutScalingStroke = _props.dasharrayWithoutScalingStroke,
          height = _props.height,
          faded = _props.faded,
          _props$lower = _props.lower,
          lower = _props$lower === undefined ? dataLower : _props$lower,
          _props$upper = _props.upper,
          upper = _props$upper === undefined ? dataUpper : _props$upper,
          width = _props.width,
          widthWithoutScalingStroke = _props.widthWithoutScalingStroke,
          rest = _objectWithoutProperties(_props, ['color', 'children', 'data', 'dasharray', 'dasharrayWithoutScalingStroke', 'height', 'faded', 'lower', 'upper', 'width', 'widthWithoutScalingStroke']);

      var strokeDasharray = hasVectorEffectSupport ? dasharray : dasharrayWithoutScalingStroke;
      var strokeWidth = hasVectorEffectSupport ? width : widthWithoutScalingStroke;
      var finalLower = Math.min(lower, dataLower);
      var finalUpper = Math.max(upper, dataUpper);
      var classes = classnames('ax-line', 'ax-line--' + color, {
        'ax-line--faded': faded
      });

      return React.createElement(
        'div',
        _extends({}, rest, { className: classes }),
        React.createElement(
          'svg',
          {
            className: 'ax-line__svg',
            preserveAspectRatio: 'none',
            style: { height: height },
            viewBox: '0 0 100 ' + (finalUpper - finalLower),
            width: '100%' },
          React.createElement('path', {
            className: 'ax-line__path',
            d: createPath(data, finalUpper),
            style: { strokeDasharray: strokeDasharray, strokeWidth: strokeWidth } })
        ),
        children && children.map(function (c, i) {
          return !c || isNaN(data[i]) || data[i] === null ? null : cloneElement(c, {
            style: strokeDasharray ? 'hollow' : 'solid',
            value: data[i],
            x: i / (data.length - 1) * 100,
            y: (data[i] - finalLower) / (finalUpper - finalLower) * 100
          });
        })
      );
    }
  }]);

  return Line;
}(Component);

Line.defaultProps = {
  dasharray: '',
  dasharrayWithoutScalingStroke: '',
  width: '0.125rem',
  widthWithoutScalingStroke: '0.015625rem'
};
export default Line;