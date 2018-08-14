var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import ChartContext from '../ChartContext/ChartContext';
import DataPoint from '../DataPoint/DataPoint';
import DataPoints from '../DataPoint/DataPoints';

var LinePoint = function (_Component) {
  _inherits(LinePoint, _Component);

  function LinePoint() {
    _classCallCheck(this, LinePoint);

    return _possibleConstructorReturn(this, (LinePoint.__proto__ || Object.getPrototypeOf(LinePoint)).apply(this, arguments));
  }

  _createClass(LinePoint, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          DropdownContext = _props.DropdownContext,
          TooltipContext = _props.TooltipContext,
          color = _props.color,
          hover = _props.hover,
          index = _props.index,
          label = _props.label,
          onMouseEnter = _props.onMouseEnter,
          onDropdownClose = _props.onDropdownClose,
          onDropdownOpen = _props.onDropdownOpen,
          size = _props.size,
          style = _props.style,
          value = _props.value,
          x = _props.x,
          y = _props.y,
          onClick = _props.onClick,
          rest = _objectWithoutProperties(_props, ['DropdownContext', 'TooltipContext', 'color', 'hover', 'index', 'label', 'onMouseEnter', 'onDropdownClose', 'onDropdownOpen', 'size', 'style', 'value', 'x', 'y', 'onClick']);

      var classes = classnames('ax-line__point', 'ax-line__point--' + color, {
        'ax-line__point--hoverable': onMouseEnter,
        'ax-line__point--hover': hover
      });

      var position = {
        left: x + '%',
        top: 100 - y + '%'
      };

      return React.createElement(
        'div',
        {
          className: classes,
          onMouseEnter: onMouseEnter,
          style: position },
        React.createElement(
          ChartContext,
          {
            DropdownContext: DropdownContext,
            TooltipContext: TooltipContext,
            color: color,
            index: index,
            label: label,
            onDropdownClose: onDropdownClose,
            onDropdownOpen: onDropdownOpen,
            style: style,
            value: value },
          React.createElement(
            DataPoints,
            _extends({}, rest, { onClick: onClick && function () {
                return onClick({ color: color, index: index, label: label, value: value });
              }, size: size }),
            React.createElement(DataPoint, { color: color, style: style })
          )
        )
      );
    }
  }]);

  return LinePoint;
}(Component);

export default LinePoint;