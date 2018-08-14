import _default from '@brandwatch/axiom-utils/dist/isComponent';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component, Children, cloneElement } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';

import { ButtonIconRef } from './ButtonIcon';
import './Button.css';

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var joined = this.context.joined;

      var _props = this.props,
          active = _props.active,
          children = _props.children,
          color = _props.color,
          disabled = _props.disabled,
          joinedLeft = _props.joinedLeft,
          joinedRight = _props.joinedRight,
          shape = _props.shape,
          style = _props.style,
          size = _props.size,
          full = _props.full,
          rest = _objectWithoutProperties(_props, ['active', 'children', 'color', 'disabled', 'joinedLeft', 'joinedRight', 'shape', 'style', 'size', 'full']);

      var childrenArray = Children.toArray(children);
      var iconOnly = childrenArray.length === 1 && _default(childrenArray[0], ButtonIconRef);
      var classes = classnames('ax-button', 'ax-button--' + color, 'ax-button--' + style, 'ax-button--' + shape + '-' + size, _defineProperty({
        'ax-button--active': active,
        'ax-button--joined': joined,
        'ax-button--joined-left': joinedLeft,
        'ax-button--joined-right': joinedRight,
        'ax-button--icon-only': shape === 'rectangle' && iconOnly,
        'ax-button--full': full === true
      }, 'ax-button--full--' + full, typeof full === 'string'));

      var mappedChildren = childrenArray.map(function (child, index, array) {
        return !_default(child, ButtonIconRef) ? child : cloneElement(child, {
          isEnd: index === array.length - 1,
          isStart: index === 0
        });
      });

      return React.createElement(
        Base,
        _extends({ Component: 'button' }, rest, {
          className: classes,
          disabled: disabled }),
        mappedChildren
      );
    }
  }]);

  return Button;
}(Component);

Button.contextTypes = {
  joined: PropTypes.bool
};
Button.defaultProps = {
  color: 'accent',
  shape: 'rectangle',
  size: 'medium',
  style: 'primary'
};
export default Button;