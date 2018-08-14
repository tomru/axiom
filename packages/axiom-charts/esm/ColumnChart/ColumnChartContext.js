import _default3 from '@brandwatch/axiom-components/dist/Dropdown/Dropdown';
import _default2 from '@brandwatch/axiom-components/dist/Dropdown/DropdownSource';
import _default from '@brandwatch/axiom-components/dist/Dropdown/DropdownTarget';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import Bar from '../Bar/Bar';

var ColumnChartContext = function (_PureComponent) {
  _inherits(ColumnChartContext, _PureComponent);

  function ColumnChartContext() {
    _classCallCheck(this, ColumnChartContext);

    return _possibleConstructorReturn(this, (ColumnChartContext.__proto__ || Object.getPrototypeOf(ColumnChartContext)).apply(this, arguments));
  }

  _createClass(ColumnChartContext, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          DropdownContext = _props.DropdownContext,
          color = _props.color,
          data = _props.data,
          isFaded = _props.isFaded,
          isHidden = _props.isHidden,
          label = _props.label,
          labelStrong = _props.labelStrong,
          onMouseEnter = _props.onMouseEnter,
          onMouseLeave = _props.onMouseLeave,
          showBarLabel = _props.showBarLabel,
          size = _props.size,
          value = _props.value,
          rest = _objectWithoutProperties(_props, ['DropdownContext', 'color', 'data', 'isFaded', 'isHidden', 'label', 'labelStrong', 'onMouseEnter', 'onMouseLeave', 'showBarLabel', 'size', 'value']);

      var bar = React.createElement(Bar, _extends({}, rest, {
        color: color,
        isFaded: isFaded,
        isHidden: isHidden,
        labelStrong: labelStrong,
        onMouseEnter: onMouseEnter && function () {
          return onMouseEnter(color);
        },
        onMouseLeave: onMouseLeave,
        percent: value,
        showLabel: showBarLabel,
        size: size }));

      if (DropdownContext && value > 0) {
        return React.createElement(
          _default3,
          null,
          React.createElement(
            _default,
            null,
            bar
          ),
          React.createElement(
            _default2,
            null,
            React.createElement(DropdownContext, {
              color: color,
              data: data,
              label: label,
              value: value })
          )
        );
      }

      return bar;
    }
  }]);

  return ColumnChartContext;
}(PureComponent);

export default ColumnChartContext;