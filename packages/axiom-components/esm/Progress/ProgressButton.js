var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Button from '../Button/Button';
import Cloak from '../Cloak/Cloak';
import ProgressInfinite from './ProgressInfinite';
import './ProgressButton.css';

var progressSizeMap = {
  small: '1rem',
  medium: '1.25rem',
  large: '1.5rem'
};

var ProgressButton = function (_Component) {
  _inherits(ProgressButton, _Component);

  function ProgressButton() {
    _classCallCheck(this, ProgressButton);

    return _possibleConstructorReturn(this, (ProgressButton.__proto__ || Object.getPrototypeOf(ProgressButton)).apply(this, arguments));
  }

  _createClass(ProgressButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          isInProgress = _props.isInProgress,
          _props$size = _props.size,
          size = _props$size === undefined ? Button.defaultProps.size : _props$size,
          rest = _objectWithoutProperties(_props, ['children', 'isInProgress', 'size']);

      var classes = classnames('ax-progress-button', {
        'ax-progress-button--in-progress': isInProgress
      });

      return React.createElement(
        Button,
        _extends({}, rest, {
          active: isInProgress,
          size: size,
          style: 'primary' }),
        React.createElement(
          'div',
          { className: classes },
          React.createElement(
            Cloak,
            {
              className: 'ax-progress-button__content',
              invisible: isInProgress },
            children
          ),
          React.createElement(
            Cloak,
            {
              className: 'ax-progress-button__indicator',
              invisible: !isInProgress },
            React.createElement(ProgressInfinite, {
              color: 'white',
              sizeRem: progressSizeMap[size] })
          )
        )
      );
    }
  }]);

  return ProgressButton;
}(Component);

export default ProgressButton;