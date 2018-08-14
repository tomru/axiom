import _default from '@brandwatch/axiom-utils/dist/isComponent';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Children, Component, cloneElement } from 'react';
import classnames from 'classnames';

import Base from '../Base/Base';
import { LabelIconRef } from './LabelIcon';
import './Label.css';

var Label = function (_Component) {
  _inherits(Label, _Component);

  function Label() {
    _classCallCheck(this, Label);

    return _possibleConstructorReturn(this, (Label.__proto__ || Object.getPrototypeOf(Label)).apply(this, arguments));
  }

  _createClass(Label, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          children = _props.children,
          color = _props.color,
          full = _props.full,
          size = _props.size,
          rest = _objectWithoutProperties(_props, ['children', 'color', 'full', 'size']);

      var classes = classnames('ax-label', (_classnames = {}, _defineProperty(_classnames, 'ax-label--' + color, color), _defineProperty(_classnames, 'ax-label--' + size, size), _defineProperty(_classnames, 'ax-label--full', full === true), _defineProperty(_classnames, 'ax-label--full--' + full, typeof full === 'string'), _classnames));

      var mappedChildren = Children.toArray(children).map(function (child, index, array) {
        return !_default(child, LabelIconRef) ? child : cloneElement(child, {
          isEnd: index === array.length - 1,
          isStart: index === 0,
          color: color,
          size: size
        });
      });

      return React.createElement(
        Base,
        _extends({}, rest, { Component: 'span', className: classes }),
        mappedChildren
      );
    }
  }]);

  return Label;
}(Component);

Label.defaultProps = {
  color: 'white',
  size: 'medium'
};
export default Label;