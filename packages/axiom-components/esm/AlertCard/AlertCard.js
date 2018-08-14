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
import Card from '../Card/Card';
import CardContent from '../Card/CardContent';
import Icon from '../Icon/Icon';
import Link from '../Typography/Link';
import './AlertCard.css';

var AlertCard = function (_Component) {
  _inherits(AlertCard, _Component);

  function AlertCard() {
    _classCallCheck(this, AlertCard);

    return _possibleConstructorReturn(this, (AlertCard.__proto__ || Object.getPrototypeOf(AlertCard)).apply(this, arguments));
  }

  _createClass(AlertCard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          size = _props.size,
          type = _props.type,
          onRemoveClick = _props.onRemoveClick,
          rest = _objectWithoutProperties(_props, ['children', 'size', 'type', 'onRemoveClick']);

      var classes = classnames('ax-alert-card', 'ax-alert-card--' + size);

      return React.createElement(
        Card,
        _extends({}, rest, { size: size }),
        React.createElement(
          CardContent,
          { size: size },
          React.createElement(
            'div',
            { className: classes },
            React.createElement(
              'div',
              { className: 'ax-alert-card__icon' },
              React.createElement(AlertIcon, { type: type })
            ),
            React.createElement(
              'div',
              { className: 'ax-alert-card__content' },
              children
            ),
            onRemoveClick && React.createElement(
              'div',
              { className: 'ax-alert-card__remove' },
              React.createElement(
                Link,
                { onClick: onRemoveClick, style: 'subtle' },
                React.createElement(Icon, { name: 'cross' })
              )
            )
          )
        )
      );
    }
  }]);

  return AlertCard;
}(Component);

AlertCard.defaultProps = {
  size: 'medium',
  type: 'info'
};
export default AlertCard;