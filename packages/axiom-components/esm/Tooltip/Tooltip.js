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
import { TooltipSourceRef } from './TooltipSource';
import { TooltipTargetRef } from './TooltipTarget';

var Tooltip = function (_Component) {
  _inherits(Tooltip, _Component);

  _createClass(Tooltip, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _this2 = this;

      return {
        hideTooltip: function hideTooltip() {
          return _this2.hide();
        },
        showTooltip: function showTooltip() {
          return _this2.show();
        }
      };
    }
  }]);

  function Tooltip(props) {
    _classCallCheck(this, Tooltip);

    var _this = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

    _this.state = { isVisible: false };
    return _this;
  }

  _createClass(Tooltip, [{
    key: 'show',
    value: function show() {
      var enabled = this.props.enabled;
      var isVisible = this.state.isVisible;


      if (enabled && !isVisible) {
        this.setState({ isVisible: true });
      }
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.setState({ isVisible: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          delay = _props.delay,
          onClick = _props.onClick,
          position = _props.position,
          rest = _objectWithoutProperties(_props, ['children', 'delay', 'onClick', 'position']);

      var isVisible = this.state.isVisible;


      return React.createElement(
        Position,
        _extends({}, rest, { isVisible: isVisible, position: position, showArrow: true }),
        React.createElement(
          PositionTarget,
          { delay: delay, onClick: onClick },
          _default(children, TooltipTargetRef)
        ),
        React.createElement(
          PositionSource,
          null,
          _default(children, TooltipSourceRef)
        )
      );
    }
  }]);

  return Tooltip;
}(Component);

Tooltip.childContextTypes = {
  hideTooltip: PropTypes.func.isRequired,
  showTooltip: PropTypes.func.isRequired
};
Tooltip.defaultProps = {
  delay: false,
  enabled: true,
  position: 'top'
};
export default Tooltip;