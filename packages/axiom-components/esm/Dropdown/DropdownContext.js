var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import omit from 'lodash.omit';
import Context from '../Context/Context';
import { contextMenuItemSelector } from '../Context/ContextMenuItem';

var isFocusableMenuItem = function isFocusableMenuItem(element) {
  return element && element.hasAttribute(contextMenuItemSelector) && !element.disabled;
};

/* eslint-disable react/no-find-dom-node */

var DropdownContext = function (_Component) {
  _inherits(DropdownContext, _Component);

  function DropdownContext(props) {
    _classCallCheck(this, DropdownContext);

    var _this = _possibleConstructorReturn(this, (DropdownContext.__proto__ || Object.getPrototypeOf(DropdownContext)).call(this, props));

    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(DropdownContext, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      document.addEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyDown);
      document.removeEventListener('mousedown', this.handleClick);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.handleClick);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      var dropdownRef = this.context.dropdownRef();
      if (!dropdownRef.contains(event.target) && !this.el.contains(event.target)) {
        return this.context.closeDropdown();
      }
    }
  }, {
    key: 'getFocusedMenuItem',
    value: function getFocusedMenuItem() {
      return this.el.querySelector('[' + contextMenuItemSelector + ']:focus');
    }
  }, {
    key: 'getMenuItems',
    value: function getMenuItems() {
      return [].concat(_toConsumableArray(this.el.querySelectorAll('[' + contextMenuItemSelector + ']:not(:disabled)')));
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event) {
      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          return this.handleDirectionKey('nextElementSibling', 1);
        case 'ArrowUp':
          event.preventDefault();
          return this.handleDirectionKey('previousElementSibling', -1);
        case 'Tab':
        case 'Escape':
          event.preventDefault();
          return this.context.closeDropdown();
      }
    }
  }, {
    key: 'handleDirectionKey',
    value: function handleDirectionKey(sibling, delta) {
      var focusedMenuItem = this.getFocusedMenuItem();
      var siblingElement = focusedMenuItem && isFocusableMenuItem(focusedMenuItem[sibling]) ? focusedMenuItem[sibling] : null;

      if (siblingElement) {
        return siblingElement.focus();
      }

      var menuItems = this.getMenuItems();
      var index = focusedMenuItem && menuItems.indexOf(focusedMenuItem);

      if (focusedMenuItem && menuItems[index + delta]) {
        return menuItems[index + delta].focus();
      } else if (!focusedMenuItem && menuItems.length > 0) {
        menuItems[0].focus();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(Context, _extends({}, omit(this.props, ['focusOnOpen', 'onRequestCloseDropdown']), {
        ref: function ref(el) {
          return _this2.el = ReactDOM.findDOMNode(el);
        } }));
    }
  }]);

  return DropdownContext;
}(Component);

DropdownContext.defaultProps = {
  maxHeight: '30rem',
  position: 'top',
  width: '14.5rem'
};
DropdownContext.contextTypes = {
  closeDropdown: PropTypes.func.isRequired,
  dropdownRef: PropTypes.func.isRequired
};
export default DropdownContext;