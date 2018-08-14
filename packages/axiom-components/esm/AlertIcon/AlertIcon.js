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
import Icon from '../Icon/Icon';
import './AlertIcon.css';

export var ALERT_ICON_NAME_MAP = {
  error: 'warning',
  info: 'information',
  success: 'tick',
  warning: 'warning'
};

var SIZE_MAP = {
  small: '1rem',
  medium: '2rem',
  large: '3rem'
};

var AlertIcon = function (_Component) {
  _inherits(AlertIcon, _Component);

  function AlertIcon() {
    _classCallCheck(this, AlertIcon);

    return _possibleConstructorReturn(this, (AlertIcon.__proto__ || Object.getPrototypeOf(AlertIcon)).apply(this, arguments));
  }

  _createClass(AlertIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          size = _props.size,
          style = _props.style,
          type = _props.type,
          rest = _objectWithoutProperties(_props, ['size', 'style', 'type']);

      var classes = classnames('ax-alert-icon', 'ax-alert-icon--' + style, 'ax-alert-icon--' + size, 'ax-alert-icon--' + type);

      return React.createElement(
        Base,
        _extends({}, rest, { className: classes }),
        React.createElement(Icon, { name: ALERT_ICON_NAME_MAP[type], size: SIZE_MAP[size] })
      );
    }
  }]);

  return AlertIcon;
}(Component);

AlertIcon.defaultProps = {
  size: 'small',
  style: 'primary',
  type: 'info'
};
export default AlertIcon;