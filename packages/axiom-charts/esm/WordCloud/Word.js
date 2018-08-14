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
import './Word.css';

var Word = function (_Component) {
  _inherits(Word, _Component);

  function Word() {
    _classCallCheck(this, Word);

    return _possibleConstructorReturn(this, (Word.__proto__ || Object.getPrototypeOf(Word)).apply(this, arguments));
  }

  _createClass(Word, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          animationDelay = _props.animationDelay,
          color = _props.color,
          disabled = _props.disabled,
          font = _props.font,
          fontSize = _props.fontSize,
          hidden = _props.hidden,
          onClick = _props.onClick,
          text = _props.text,
          textAnchor = _props.textAnchor,
          x = _props.x,
          y = _props.y,
          rest = _objectWithoutProperties(_props, ['animationDelay', 'color', 'disabled', 'font', 'fontSize', 'hidden', 'onClick', 'text', 'textAnchor', 'x', 'y']);

      var active = !hidden && !disabled;
      var classes = classnames('ax-word', (_classnames = {}, _defineProperty(_classnames, 'ax-word--' + color, color), _defineProperty(_classnames, 'ax-word--clickable', active && onClick), _defineProperty(_classnames, 'ax-word--disabled', !hidden && disabled), _defineProperty(_classnames, 'ax-word--hidden', hidden), _classnames));

      var style = {
        fontFamily: font,
        fontSize: fontSize,
        animationDelay: animationDelay
      };

      return React.createElement(
        'text',
        _extends({}, rest, {
          className: classes,
          onClick: active ? onClick : undefined,
          style: style,
          textAnchor: textAnchor,
          transform: 'translate(' + x + ',' + y + ')' }),
        text
      );
    }
  }]);

  return Word;
}(Component);

Word.defaultProps = {
  animationDelay: '0',
  textAnchor: 'middle'
};
export default Word;