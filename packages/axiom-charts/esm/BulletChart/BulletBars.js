import _default from '@brandwatch/axiom-components/dist/Base/Base';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Bar from '../Bar/Bar';
import Bars from '../Bar/Bars';
import { findBarGroupMax } from './utils';

var BulletBars = function (_Component) {
  _inherits(BulletBars, _Component);

  function BulletBars() {
    _classCallCheck(this, BulletBars);

    return _possibleConstructorReturn(this, (BulletBars.__proto__ || Object.getPrototypeOf(BulletBars)).apply(this, arguments));
  }

  _createClass(BulletBars, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          direction = _props.direction,
          label = _props.label,
          barLabel = _props.barLabel,
          showBarLabel = _props.showBarLabel,
          values = _props.values,
          rest = _objectWithoutProperties(_props, ['direction', 'label', 'barLabel', 'showBarLabel', 'values']);

      var barGroupMax = values.reduce(findBarGroupMax);

      return React.createElement(
        _default,
        _extends({}, rest, { className: 'ax-bullet-chart__block' }),
        React.createElement(
          'div',
          { className: 'ax-bullet-chart__bars' },
          values.map(function (_ref) {
            var color = _ref.color,
                value = _ref.value;
            return React.createElement(
              'div',
              { className: 'ax-bullet-chart__bars-bar', key: color + '-div' },
              React.createElement(
                Bars,
                { direction: direction, label: label },
                React.createElement(Bar, {
                  color: color,
                  key: color,
                  label: barLabel + '%',
                  percent: value,
                  showLabel: value === barGroupMax && showBarLabel })
              )
            );
          })
        )
      );
    }
  }]);

  return BulletBars;
}(Component);

export default BulletBars;