var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import Base from '../Base/Base';
import './ConsoleMenu.css';

var ConsoleMenu = function (_Component) {
  _inherits(ConsoleMenu, _Component);

  function ConsoleMenu() {
    _classCallCheck(this, ConsoleMenu);

    return _possibleConstructorReturn(this, (ConsoleMenu.__proto__ || Object.getPrototypeOf(ConsoleMenu)).apply(this, arguments));
  }

  _createClass(ConsoleMenu, [{
    key: 'render',
    value: function render() {
      return React.createElement(Base, _extends({}, this.props, {
        Component: 'ul',
        className: 'ax-console-menu',
        space: 'x2' }));
    }
  }]);

  return ConsoleMenu;
}(Component);

export default ConsoleMenu;