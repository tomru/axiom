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
import Tip from '../Tip/Tip';
import './Context.css';

var Context = function (_Component) {
  _inherits(Context, _Component);

  function Context() {
    _classCallCheck(this, Context);

    return _possibleConstructorReturn(this, (Context.__proto__ || Object.getPrototypeOf(Context)).apply(this, arguments));
  }

  _createClass(Context, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          arrowRef = _props.arrowRef,
          children = _props.children,
          maxHeight = _props.maxHeight,
          position = _props.position,
          width = _props.width,
          color = _props.color,
          rest = _objectWithoutProperties(_props, ['arrowRef', 'children', 'maxHeight', 'position', 'width', 'color']);

      var classes = classnames('ax-context', 'ax-context--' + position, _defineProperty({}, 'ax-context--' + color, color));
      var content = function content() {
        return React.createElement(
          'div',
          { className: 'ax-context__content', style: { maxHeight: maxHeight } },
          children
        );
      };
      return React.createElement(
        Base,
        _extends({ theme: 'day' }, rest, { className: classes, style: { width: width } }),
        arrowRef ? React.createElement(
          Tip,
          { arrowRef: arrowRef, color: color, direction: position },
          content()
        ) : content()
      );
    }
  }]);

  return Context;
}(Component);

Context.defaultProps = {
  maxHeight: '30rem',
  position: 'top',
  width: '14.5rem'
};
export default Context;