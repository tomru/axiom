var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import atIds from '@brandwatch/axiom-automation-testing/ids';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import omit from 'lodash.omit';
import { ALERT_ICON_NAME_MAP } from '../AlertIcon/AlertIcon';
import Base from '../Base/Base';
import Icon from '../Icon/Icon';
import Link from '../Typography/Link';
import './Notification.css';

var Notification = function (_Component) {
  _inherits(Notification, _Component);

  function Notification() {
    _classCallCheck(this, Notification);

    return _possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).apply(this, arguments));
  }

  _createClass(Notification, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var onAppear = this.props.onAppear;


      if (onAppear) {
        onAppear();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          type = _props.type,
          onRemoveClick = _props.onRemoveClick,
          rest = _objectWithoutProperties(_props, ['children', 'type', 'onRemoveClick']);

      var classes = classnames('ax-notification', 'ax-notification--' + type);

      return React.createElement(
        Base,
        _extends({}, omit(rest, ['onAppear']), { className: classes, textColor: 'subtle' }),
        React.createElement(
          'div',
          { className: 'ax-notification__icon' },
          React.createElement(Icon, { name: ALERT_ICON_NAME_MAP[type], size: '2rem' })
        ),
        React.createElement(
          'div',
          { className: 'ax-notification__messsage' },
          children
        ),
        onRemoveClick && React.createElement(
          'div',
          { className: 'ax-notification__remove' },
          React.createElement(
            Link,
            {
              'data-ax-at': atIds.Notification.close,
              onClick: function onClick() {
                return onRemoveClick();
              },
              style: 'subtle' },
            React.createElement(Icon, { name: 'cross' })
          )
        )
      );
    }
  }]);

  return Notification;
}(Component);

export default Notification;