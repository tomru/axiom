import _default from '@brandwatch/axiom-utils/dist/findComponent';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Position from '../Position/Position';
import PositionSource from '../Position/PositionSource';
import PositionTarget from '../Position/PositionTarget';
import { DropdownSourceRef } from './DropdownSource';
import { DropdownTargetRef } from './DropdownTarget';
import ReactDOM from 'react-dom';

/* eslint-disable react/no-find-dom-node */

var Dropdown = function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

    _this.state = { isVisible: false };
    return _this;
  }

  _createClass(Dropdown, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _this2 = this;

      return {
        closeDropdown: function closeDropdown() {
          return _this2.close();
        },
        openDropdown: function openDropdown() {
          return _this2.open();
        },
        toggleDropdown: function toggleDropdown() {
          return _this2.toggle();
        },
        dropdownRef: function dropdownRef() {
          return _this2.el;
        }
      };
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      if (this.state.isVisible) {
        return this.close();
      }
      this.open();
    }
  }, {
    key: 'open',
    value: function open() {
      var onRequestOpen = this.props.onRequestOpen;


      this.setState({ isVisible: true });

      if (onRequestOpen) onRequestOpen();
    }
  }, {
    key: 'close',
    value: function close() {
      var onRequestClose = this.props.onRequestClose;


      this.setState({ isVisible: false });

      if (onRequestClose) onRequestClose();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          children = _props.children,
          offset = _props.offset,
          position = _props.position,
          withMask = _props.withMask,
          rest = _objectWithoutProperties(_props, ['children', 'offset', 'position', 'withMask']);

      var isVisible = this.state.isVisible;


      return React.createElement(
        Position,
        _extends({}, rest, {
          isVisible: isVisible,
          offset: offset,
          onMaskClick: withMask ? function () {
            return _this3.close();
          } : null,
          position: position,
          ref: function ref(el) {
            return _this3.el = ReactDOM.findDOMNode(el);
          } }),
        React.createElement(
          PositionTarget,
          null,
          React.cloneElement(_default(children, DropdownTargetRef))
        ),
        React.createElement(
          PositionSource,
          null,
          _default(children, DropdownSourceRef)
        )
      );
    }
  }]);

  return Dropdown;
}(Component);

Dropdown.childContextTypes = {
  closeDropdown: PropTypes.func.isRequired,
  openDropdown: PropTypes.func.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  dropdownRef: PropTypes.func.isRequired
};
Dropdown.defaultProps = {
  enabled: true,
  position: 'bottom',
  showArrow: false
};
export default Dropdown;