var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import { Component, cloneElement } from 'react';
import omit from 'lodash.omit';

export var TooltipTargetRef = 'TooltipTarget';
var DELAY_TIMEOUT = 1000;

var TooltipTarget = function (_Component) {
  _inherits(TooltipTarget, _Component);

  function TooltipTarget() {
    _classCallCheck(this, TooltipTarget);

    return _possibleConstructorReturn(this, (TooltipTarget.__proto__ || Object.getPrototypeOf(TooltipTarget)).apply(this, arguments));
  }

  _createClass(TooltipTarget, [{
    key: 'handleMouseMove',
    value: function handleMouseMove() {
      var _props = this.props,
          children = _props.children,
          delay = _props.delay;
      var showTooltip = this.context.showTooltip;
      var _children$props$onMou = children.props.onMouseMove,
          onMouseMove = _children$props$onMou === undefined ? function () {} : _children$props$onMou;


      if (delay && !this.showTimeout) {
        this.showTimeout = setTimeout(showTooltip, DELAY_TIMEOUT);
      }

      if (!delay) showTooltip();

      onMouseMove.apply(undefined, arguments);
    }
  }, {
    key: 'handleMouseLeave',
    value: function handleMouseLeave() {
      var children = this.props.children;
      var hideTooltip = this.context.hideTooltip;
      var _children$props$onMou2 = children.props.onMouseLeave,
          onMouseLeave = _children$props$onMou2 === undefined ? function () {} : _children$props$onMou2;


      if (this.showTimeout) {
        clearTimeout(this.showTimeout);
        this.showTimeout = undefined;
      }

      hideTooltip();
      onMouseLeave.apply(undefined, arguments);
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      var childClick = this.props.children.props.onClick;
      var onClick = this.props.onClick;


      if (childClick) {
        childClick.apply(undefined, arguments);
      }

      if (onClick) {
        onClick.apply(undefined, arguments);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          rest = _objectWithoutProperties(_props2, ['children']);

      return cloneElement(children, _extends({}, omit(rest, ['delay']), {
        onMouseMove: this.handleMouseMove.bind(this),
        onMouseLeave: this.handleMouseLeave.bind(this),
        onClick: this.handleClick.bind(this)
      }));
    }
  }]);

  return TooltipTarget;
}(Component);

TooltipTarget.contextTypes = {
  hideTooltip: PropTypes.func.isRequired,
  showTooltip: PropTypes.func.isRequired
};
TooltipTarget.typeRef = TooltipTargetRef;
export default TooltipTarget;