var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from '../Button/Button';

var PaginationButton = function (_Component) {
  _inherits(PaginationButton, _Component);

  function PaginationButton() {
    _classCallCheck(this, PaginationButton);

    return _possibleConstructorReturn(this, (PaginationButton.__proto__ || Object.getPrototypeOf(PaginationButton)).apply(this, arguments));
  }

  _createClass(PaginationButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          _onClick = _props.onClick,
          page = _props.page,
          shape = _props.shape,
          rest = _objectWithoutProperties(_props, ['active', 'onClick', 'page', 'shape']);

      return React.createElement(Button, _extends({}, rest, {
        onClick: function onClick() {
          return _onClick(page);
        },
        shape: shape || page <= 99 ? 'circle' : 'stadium',
        size: 'small',
        style: active ? 'primary' : 'quaternary' }));
    }
  }]);

  return PaginationButton;
}(Component);

export default PaginationButton;