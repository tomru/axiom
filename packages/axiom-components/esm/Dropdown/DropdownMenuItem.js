var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import omit from 'lodash.omit';
import ContextMenuItem from '../Context/ContextMenuItem';

var DropdownMenuItem = function (_Component) {
  _inherits(DropdownMenuItem, _Component);

  function DropdownMenuItem(props) {
    _classCallCheck(this, DropdownMenuItem);

    var _this = _possibleConstructorReturn(this, (DropdownMenuItem.__proto__ || Object.getPrototypeOf(DropdownMenuItem)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(DropdownMenuItem, [{
    key: 'handleClick',
    value: function handleClick(event) {
      var closeDropdown = this.context.closeDropdown;
      var _props = this.props,
          multiSelect = _props.multiSelect,
          keepOpen = _props.keepOpen,
          onClick = _props.onClick;


      if (closeDropdown && !multiSelect && !keepOpen) closeDropdown();

      if (onClick) onClick(event);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          rest = _objectWithoutProperties(_props2, ['children']);

      return React.createElement(
        ContextMenuItem,
        _extends({}, omit(rest, ['keepOpen']), {
          onClick: this.handleClick,
          tabIndex: '0' }),
        children
      );
    }
  }]);

  return DropdownMenuItem;
}(Component);

DropdownMenuItem.contextTypes = {
  closeDropdown: PropTypes.func.isRequired
};
export default DropdownMenuItem;