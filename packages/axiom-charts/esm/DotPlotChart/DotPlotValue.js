import _default2 from '@brandwatch/axiom-components/dist/Base/Base';
import _default from '@brandwatch/axiom-components/dist/Typography/Small';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';

var DotPlotValue = function (_Component) {
  _inherits(DotPlotValue, _Component);

  function DotPlotValue() {
    _classCallCheck(this, DotPlotValue);

    return _possibleConstructorReturn(this, (DotPlotValue.__proto__ || Object.getPrototypeOf(DotPlotValue)).apply(this, arguments));
  }

  _createClass(DotPlotValue, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          hidden = _props.hidden,
          value = _props.value,
          dotPlotLabel = _props.dotPlotLabel,
          x = _props.x,
          rest = _objectWithoutProperties(_props, ['hidden', 'value', 'dotPlotLabel', 'x']);

      var classes = classnames('ax-dot-plot__value', {
        'ax-dot-plot__value--hidden': hidden
      });

      var getLabel = function getLabel() {
        if (dotPlotLabel) {
          return dotPlotLabel({ value: value });
        }

        return value;
      };

      return React.createElement(
        _default2,
        _extends({}, rest, {
          className: classes,
          style: { left: x + '%' } }),
        React.createElement(
          _default,
          null,
          getLabel()
        )
      );
    }
  }]);

  return DotPlotValue;
}(Component);

export default DotPlotValue;