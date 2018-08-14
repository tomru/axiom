var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import './Tip.css';

var Tip = function (_Component) {
  _inherits(Tip, _Component);

  function Tip() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tip.__proto__ || Object.getPrototypeOf(Tip)).call.apply(_ref, [this].concat(args))), _this), _this.getArrowStyles = function () {
      var _this$props = _this.props,
          position = _this$props.position,
          direction = _this$props.direction;


      switch (direction) {
        case 'top':
        case 'bottom':
          return { left: position };
        case 'left':
        case 'right':
          return { top: position };
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tip, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          arrowRef = _props.arrowRef,
          color = _props.color,
          direction = _props.direction,
          position = _props.position,
          children = _props.children,
          shadow = _props.shadow,
          rest = _objectWithoutProperties(_props, ['arrowRef', 'color', 'direction', 'position', 'children', 'shadow']);

      var classes = classnames('ax-tip--' + direction, (_classnames = {}, _defineProperty(_classnames, 'ax-tip--' + color, color), _defineProperty(_classnames, 'ax-tip--shadow', shadow), _classnames));

      var arrowClasses = classnames('ax-tip__arrow');

      return React.createElement(
        Base,
        _extends({ className: classes }, rest),
        React.createElement('span', { className: arrowClasses, ref: arrowRef, style: position ? this.getArrowStyles() : {} }),
        React.createElement(
          Base,
          { className: 'ax-tip__content' },
          children
        )
      );
    }
  }]);

  return Tip;
}(Component);

Tip.defaultProps = {
  shadow: true,
  direction: 'top'
};
export default Tip;