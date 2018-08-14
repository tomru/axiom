var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import Modal from '../Modal/Modal';
import './Dialog.css';

var Dialog = function (_Component) {
  _inherits(Dialog, _Component);

  function Dialog() {
    _classCallCheck(this, Dialog);

    return _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).apply(this, arguments));
  }

  _createClass(Dialog, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        onRequestClose: this.props.onRequestClose
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          fullscreen = _props.fullscreen,
          onRequestClose = _props.onRequestClose,
          overlayShade = _props.overlayShade,
          overlayTheme = _props.overlayTheme,
          padding = _props.padding,
          theme = _props.theme,
          width = _props.width,
          rest = _objectWithoutProperties(_props, ['children', 'fullscreen', 'onRequestClose', 'overlayShade', 'overlayTheme', 'padding', 'theme', 'width']);

      var classes = classnames('ax-dialog', {
        'ax-dialog--fullscreen': fullscreen
      });

      return React.createElement(
        Modal,
        _extends({}, rest, {
          onOverlayClick: onRequestClose,
          overlayShade: overlayShade,
          overlayTheme: overlayTheme,
          padding: padding }),
        React.createElement(
          Base,
          { className: classes, style: { width: width }, theme: theme },
          children
        )
      );
    }
  }]);

  return Dialog;
}(Component);

Dialog.defaultProps = {
  padding: 'x6',
  theme: 'day'
};
Dialog.childContextTypes = {
  onRequestClose: PropTypes.func.isRequired
};
export default Dialog;