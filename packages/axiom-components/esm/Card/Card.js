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
import './Card.css';

var cardListStyleProps = {
  divided: {
    border: false,
    shadow: false,
    space: 'x0'
  },
  seamless: {
    border: false,
    shadow: false,
    space: 'x0'
  },
  separate: {
    border: true,
    shadow: false,
    space: 'x2'
  }
};

var Card = function (_Component) {
  _inherits(Card, _Component);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
  }

  _createClass(Card, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var cardListStyle = this.context.cardListStyle;

      var props = _extends({}, this.props, cardListStyleProps[cardListStyle]);

      var active = props.active,
          border = props.border,
          borderRadius = props.borderRadius,
          children = props.children,
          hover = props.hover,
          onClick = props.onClick,
          shade = props.shade,
          shadow = props.shadow,
          size = props.size,
          rest = _objectWithoutProperties(props, ['active', 'border', 'borderRadius', 'children', 'hover', 'onClick', 'shade', 'shadow', 'size']);

      var classes = classnames('ax-card', 'ax-card--size-' + size, (_classnames = {
        'ax-card--active': active,
        'ax-card--border': border,
        'ax-card--clickable': onClick,
        'ax-card--hover': hover
      }, _defineProperty(_classnames, 'ax-card--' + shade, shade), _defineProperty(_classnames, 'ax-card--border-radius-' + borderRadius, borderRadius), _defineProperty(_classnames, 'ax-card--shadow', shadow), _classnames));

      return React.createElement(
        Base,
        _extends({}, rest, { className: classes, onClick: onClick }),
        children
      );
    }
  }]);

  return Card;
}(Component);

Card.defaultProps = {
  borderRadius: 'small',
  shade: 'shade-1',
  size: 'medium'
};
Card.contextTypes = {
  cardListStyle: PropTypes.oneOf(['divided', 'seamless', 'separate'])
};
export default Card;