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
import Position from '../Position/Position';
import PositionSource from '../Position/PositionSource';
import PositionTarget from '../Position/PositionTarget';
import TooltipContent from '../Tooltip/TooltipContent';
import TooltipContext from '../Tooltip/TooltipContext';
import './Slider.css';

var Slider = function (_Component) {
  _inherits(Slider, _Component);

  function Slider(props) {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this.state = {
      isDragging: false,
      isMouseOver: false
    };

    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
    _this.getValue = _this.getValue.bind(_this);
    return _this;
  }

  _createClass(Slider, [{
    key: 'getValue',
    value: function getValue(clientX) {
      var _props = this.props,
          max = _props.max,
          min = _props.min,
          step = _props.step;


      var posAsPercentage = Math.max(0, Math.min((clientX - this.posMin) / (this.posMax - this.posMin), 100));
      var value = step * Math.round(posAsPercentage * (max - min) / step);

      return Math.max(min, Math.min(value, max));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('mousemove', this.handleMouseMove);
      document.removeEventListener('mouseup', this.handleMouseUp);
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(event) {
      var _container$getBoundin = this.container.getBoundingClientRect(),
          left = _container$getBoundin.left,
          width = _container$getBoundin.width;

      event.preventDefault();
      this.posMin = left;
      this.posMax = left + width;
      this.handleMouseMove(event);
      this.setState({ isDragging: true });
      document.addEventListener('mousemove', this.handleMouseMove);
      document.addEventListener('mouseup', this.handleMouseUp);
    }
  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp(event) {
      var onSlideEnd = this.props.onSlideEnd;
      var clientX = event.clientX;


      this.setState({ isDragging: false });
      onSlideEnd && onSlideEnd(this.getValue(clientX));

      document.removeEventListener('mousemove', this.handleMouseMove);
      document.removeEventListener('mouseup', this.handleMouseUp);
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur() {
      document.removeEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus() {
      document.addEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(event) {
      var onChange = this.props.onChange;
      var clientX = event.clientX;


      onChange(this.getValue(clientX));
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event) {
      var _props2 = this.props,
          max = _props2.max,
          min = _props2.min,
          onChange = _props2.onChange,
          step = _props2.step,
          value = _props2.value;


      switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowDown':
          onChange(Math.max(min, Math.min(value - step, max)));
          break;
        case 'ArrowRight':
        case 'ArrowUp':
          onChange(Math.max(min, Math.min(value + step, max)));
          break;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props3 = this.props,
          disabled = _props3.disabled,
          max = _props3.max,
          min = _props3.min,
          size = _props3.size,
          value = _props3.value,
          valueFormatter = _props3.valueFormatter,
          withTooltip = _props3.withTooltip,
          rest = _objectWithoutProperties(_props3, ['disabled', 'max', 'min', 'size', 'value', 'valueFormatter', 'withTooltip']);

      var _state = this.state,
          isDragging = _state.isDragging,
          isMouseOver = _state.isMouseOver;

      var valueInRange = Math.max(min, Math.min(value, max));
      var valueAsPercentage = valueInRange / max * 100;
      var classes = classnames('ax-slider', 'ax-slider--' + size, {
        'ax-slider--disabled': disabled
      });

      return React.createElement(
        Base,
        _extends({}, rest, {
          className: classes,
          onBlur: this.handleBlur,
          onFocus: disabled ? null : this.handleFocus,
          onMouseLeave: function onMouseLeave() {
            return _this2.setState({ isMouseOver: false });
          },
          onMouseOver: function onMouseOver() {
            return _this2.setState({ isMouseOver: true });
          },
          tabIndex: '0' }),
        React.createElement(
          'div',
          {
            className: 'ax-slider__track',
            onMouseDown: disabled ? null : this.handleMouseDown,
            ref: function ref(el) {
              return _this2.container = el;
            } },
          React.createElement('div', {
            className: 'ax-slider__fill',
            style: { width: valueAsPercentage + '%' } })
        ),
        React.createElement(
          Position,
          {
            enabled: withTooltip,
            isVisible: isDragging || isMouseOver,
            showArrow: true },
          React.createElement(
            PositionTarget,
            null,
            React.createElement('div', {
              className: 'ax-slider__thumb',
              onMouseDown: disabled ? null : this.handleMouseDown,
              style: { left: valueAsPercentage + '%' } })
          ),
          React.createElement(
            PositionSource,
            null,
            React.createElement(
              TooltipContext,
              { theme: 'night', width: 'auto' },
              React.createElement(
                TooltipContent,
                { textSize: 'small', textStrong: true },
                valueFormatter(value)
              )
            )
          )
        )
      );
    }
  }]);

  return Slider;
}(Component);

Slider.defaultProps = {
  size: 'small',
  step: 1,
  valueFormatter: function valueFormatter(n) {
    return n;
  },
  withTooltip: false
};
export default Slider;