var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import renderFilter from './_filter';
import { getArcProperties } from './utils';
import RadialProgress from './RadialProgress';
import './ProgressFinite.css';

var ProgressFinite = function (_Component) {
  _inherits(ProgressFinite, _Component);

  function ProgressFinite() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ProgressFinite);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProgressFinite.__proto__ || Object.getPrototypeOf(ProgressFinite)).call.apply(_ref, [this].concat(args))), _this), _this.componentWillMount = renderFilter, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ProgressFinite, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          percent = _props.percent,
          rest = _objectWithoutProperties(_props, ['percent']);

      var _getArcProperties = getArcProperties({ percent: percent }),
          diameter = _getArcProperties.diameter,
          innerRadius = _getArcProperties.innerRadius,
          strokeWidth = _getArcProperties.strokeWidth,
          strokeDasharray = _getArcProperties.strokeDasharray,
          strokeDashoffset = _getArcProperties.strokeDashoffset;

      return React.createElement(
        RadialProgress,
        _extends({}, rest, { className: 'ax-progress-finite', diameter: diameter }),
        React.createElement('circle', {
          className: 'ax-progress-finite__background',
          r: innerRadius,
          style: { strokeWidth: strokeWidth } }),
        React.createElement('circle', {
          className: 'ax-progress-finite__arc',
          r: innerRadius,
          style: { strokeDasharray: strokeDasharray, strokeDashoffset: strokeDashoffset, strokeWidth: strokeWidth } })
      );
    }
  }]);

  return ProgressFinite;
}(Component);

ProgressFinite.defaultProps = {
  percent: 0,
  size: 'small'
};
export default ProgressFinite;