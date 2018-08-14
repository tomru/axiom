var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import AlertIcon from '../AlertIcon/AlertIcon';
import Base from '../Base/Base';
import Grid from '../Grid/Grid';
import GridCell from '../Grid/GridCell';
import Icon from '../Icon/Icon';
import Link from '../Typography/Link';
import './AlertBar.css';

var AlertBar = function (_Component) {
  _inherits(AlertBar, _Component);

  function AlertBar() {
    _classCallCheck(this, AlertBar);

    return _possibleConstructorReturn(this, (AlertBar.__proto__ || Object.getPrototypeOf(AlertBar)).apply(this, arguments));
  }

  _createClass(AlertBar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          size = _props.size,
          type = _props.type,
          onRemoveClick = _props.onRemoveClick,
          rest = _objectWithoutProperties(_props, ['children', 'size', 'type', 'onRemoveClick']);

      var classes = classnames('ax-alert-bar', 'ax-alert-bar--' + size, 'ax-alert-bar--' + type);

      return React.createElement(
        Base,
        _extends({}, rest, { className: classes }),
        React.createElement(
          Grid,
          { gutters: 'tiny', responsive: false, verticalAlign: 'middle' },
          React.createElement(
            GridCell,
            { shrink: true },
            React.createElement(AlertIcon, {
              style: 'subtle',
              theme: 'day',
              type: type })
          ),
          React.createElement(
            GridCell,
            { textColor: 'night', textStrong: true },
            children
          ),
          onRemoveClick && React.createElement(
            GridCell,
            { shrink: true },
            React.createElement(
              Link,
              { onClick: onRemoveClick, style: 'night' },
              React.createElement(Icon, { name: 'cross' })
            )
          )
        )
      );
    }
  }]);

  return AlertBar;
}(Component);

AlertBar.defaultProps = {
  size: 'small',
  type: 'info'
};
export default AlertBar;