var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';

var MenuItem = function (_Component) {
  _inherits(MenuItem, _Component);

  function MenuItem() {
    _classCallCheck(this, MenuItem);

    return _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).apply(this, arguments));
  }

  _createClass(MenuItem, [{
    key: 'render',
    value: function render() {
      var size = this.context.size;

      var _props = this.props,
          children = _props.children,
          active = _props.active,
          disabled = _props.disabled,
          rest = _objectWithoutProperties(_props, ['children', 'active', 'disabled']);

      var classes = classnames('ax-menu__item', {
        'ax-menu__item--active': active,
        'ax-menu__item--disabled': disabled
      });

      var textSize = {
        medium: 'headtitle',
        large: 'headline'
      }[size];

      return React.createElement(
        Base,
        {
          Component: 'li',
          className: classes,
          textSize: textSize,
          textStrong: true },
        React.createElement(
          'button',
          _extends({}, rest, { className: 'ax-menu__item-button', disabled: disabled }),
          children
        )
      );
    }
  }]);

  return MenuItem;
}(Component);

MenuItem.contextTypes = {
  size: PropTypes.string.isRequired
};
export default MenuItem;