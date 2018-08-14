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

var ContextContent = function (_Component) {
  _inherits(ContextContent, _Component);

  function ContextContent() {
    _classCallCheck(this, ContextContent);

    return _possibleConstructorReturn(this, (ContextContent.__proto__ || Object.getPrototypeOf(ContextContent)).apply(this, arguments));
  }

  _createClass(ContextContent, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          color = _props.color,
          children = _props.children,
          hasFullSeparator = _props.hasFullSeparator,
          height = _props.height,
          maxHeight = _props.maxHeight,
          padding = _props.padding,
          _props$paddingHorizon = _props.paddingHorizontal,
          paddingHorizontal = _props$paddingHorizon === undefined ? padding : _props$paddingHorizon,
          _props$paddingVertica = _props.paddingVertical,
          paddingVertical = _props$paddingVertica === undefined ? padding : _props$paddingVertica,
          rest = _objectWithoutProperties(_props, ['color', 'children', 'hasFullSeparator', 'height', 'maxHeight', 'padding', 'paddingHorizontal', 'paddingVertical']);

      var classes = classnames('ax-context-content', 'ax-context-content--padding-horizontal-' + paddingHorizontal, 'ax-context-content--padding-vertical-' + paddingVertical, (_classnames = {}, _defineProperty(_classnames, 'ax-context-content--' + color, color), _defineProperty(_classnames, 'ax-context-content--full-separator', hasFullSeparator), _defineProperty(_classnames, 'ax-context-content--scrollable', height || maxHeight), _classnames));

      return React.createElement(
        Base,
        _extends({}, rest, { className: classes }),
        React.createElement(
          'div',
          { className: 'ax-context-content__scroll', style: { height: height, maxHeight: maxHeight } },
          children
        )
      );
    }
  }]);

  return ContextContent;
}(Component);

ContextContent.defaultProps = {
  hasFullSeparator: false,
  padding: 'large'
};
export default ContextContent;