var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../Base/Base';
import Modal from '../Modal/Modal';
import './AlertDialog.css';

var AlertDialog = function (_Component) {
  _inherits(AlertDialog, _Component);

  function AlertDialog() {
    _classCallCheck(this, AlertDialog);

    return _possibleConstructorReturn(this, (AlertDialog.__proto__ || Object.getPrototypeOf(AlertDialog)).apply(this, arguments));
  }

  _createClass(AlertDialog, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        onRequestClose: this.props.onRequestClose,
        type: this.props.type
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          onRequestClose = _props.onRequestClose,
          rest = _objectWithoutProperties(_props, ['children', 'onRequestClose']);

      return React.createElement(
        Modal,
        _extends({}, rest, {
          onOverlayClick: onRequestClose,
          overlayShade: null }),
        React.createElement(
          Base,
          { className: 'ax-alert-dialog' },
          children
        )
      );
    }
  }]);

  return AlertDialog;
}(Component);

AlertDialog.childContextTypes = {
  onRequestClose: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};
AlertDialog.defaultProps = {
  type: 'info'
};
export default AlertDialog;