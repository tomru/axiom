import _default from '@brandwatch/axiom-utils/dist/findComponent';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { AlertDropdownTargetRef } from './AlertDropdownTarget';
import { AlertDropdownSourceRef } from './AlertDropdownSource';

import Position from '../Position/Position';
import PositionSource from '../Position/PositionSource';
import PositionTarget from '../Position/PositionTarget';

import './AlertDropdown.css';

var AlertDropdown = function (_Component) {
  _inherits(AlertDropdown, _Component);

  function AlertDropdown(props) {
    _classCallCheck(this, AlertDropdown);

    var _this = _possibleConstructorReturn(this, (AlertDropdown.__proto__ || Object.getPrototypeOf(AlertDropdown)).call(this, props));

    _this.state = { isVisible: false };
    return _this;
  }

  _createClass(AlertDropdown, [{
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
        type: this.props.type
      };
    }
  }, {
    key: 'open',
    value: function open() {
      var _props = this.props,
          enabled = _props.enabled,
          onRequestOpen = _props.onRequestOpen;


      if (enabled) {
        this.setState({ isVisible: true });
      }

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

      var _props2 = this.props,
          children = _props2.children,
          withMask = _props2.withMask,
          rest = _objectWithoutProperties(_props2, ['children', 'withMask']);

      var isVisible = this.state.isVisible;


      return React.createElement(
        Position,
        _extends({}, rest, {
          isVisible: isVisible,
          onMaskClick: withMask ? function () {
            return _this3.close();
          } : null,
          position: 'bottom' }),
        React.createElement(
          PositionTarget,
          null,
          _default(children, AlertDropdownTargetRef)
        ),
        React.createElement(
          PositionSource,
          null,
          _default(children, AlertDropdownSourceRef)
        )
      );
    }
  }]);

  return AlertDropdown;
}(Component);

AlertDropdown.childContextTypes = {
  closeDropdown: PropTypes.func.isRequired,
  openDropdown: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};
AlertDropdown.defaultProps = {
  enabled: true,
  type: 'info'
};


export default AlertDropdown;