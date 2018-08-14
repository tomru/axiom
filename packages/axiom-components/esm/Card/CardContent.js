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

var CardContent = function (_Component) {
  _inherits(CardContent, _Component);

  function CardContent() {
    _classCallCheck(this, CardContent);

    return _possibleConstructorReturn(this, (CardContent.__proto__ || Object.getPrototypeOf(CardContent)).apply(this, arguments));
  }

  _createClass(CardContent, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          children = _props.children,
          color = _props.color,
          separatorIndented = _props.separatorIndented,
          separatorStyle = _props.separatorStyle,
          size = _props.size,
          rest = _objectWithoutProperties(_props, ['children', 'color', 'separatorIndented', 'separatorStyle', 'size']);

      var classes = classnames('ax-card__content', 'ax-card__content--separator-' + separatorStyle, 'ax-card__content--size-' + size, (_classnames = {}, _defineProperty(_classnames, 'ax-card__content--color-' + color, color), _defineProperty(_classnames, 'ax-card__content--separator-indented', separatorIndented), _classnames));

      return React.createElement(
        Base,
        _extends({}, rest, { className: classes }),
        children
      );
    }
  }]);

  return CardContent;
}(Component);

CardContent.defaultProps = {
  separatorStyle: 'solid',
  size: 'medium'
};
export default CardContent;