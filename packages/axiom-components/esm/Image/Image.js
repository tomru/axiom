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
import ImageFallback from './ImageFallback';
import './Image.css';

var Image = function (_Component) {
  _inherits(Image, _Component);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
  }

  _createClass(Image, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          border = _props.border,
          children = _props.children,
          height = _props.height,
          maxWidth = _props.maxWidth,
          onError = _props.onError,
          onLoad = _props.onLoad,
          shape = _props.shape,
          src = _props.src,
          width = _props.width,
          rest = _objectWithoutProperties(_props, ['border', 'children', 'height', 'maxWidth', 'onError', 'onLoad', 'shape', 'src', 'width']);

      var style = {
        maxWidth: maxWidth,
        width: shape === 'circle' ? width || height : width,
        height: shape === 'circle' ? width || height : height
      };

      var classes = classnames('ax-image', 'ax-image--' + shape, _defineProperty({}, 'ax-image--border-' + border, border));

      return React.createElement(
        ImageFallback,
        {
          fallback: children,
          onError: onError,
          onLoad: onLoad,
          src: src },
        React.createElement(Base, _extends({
          space: 'x4'
        }, rest, {
          Component: 'img',
          className: classes,
          src: src,
          style: style }))
      );
    }
  }]);

  return Image;
}(Component);

Image.defaultProps = {
  maxWidth: '100%',
  shape: 'square'
};
export default Image;