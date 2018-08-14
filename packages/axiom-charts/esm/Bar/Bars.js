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

import './Bars.css';

var Bars = function (_Component) {
  _inherits(Bars, _Component);

  function Bars() {
    _classCallCheck(this, Bars);

    return _possibleConstructorReturn(this, (Bars.__proto__ || Object.getPrototypeOf(Bars)).apply(this, arguments));
  }

  _createClass(Bars, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        direction: this.props.direction
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          direction = _props.direction,
          label = _props.label,
          rest = _objectWithoutProperties(_props, ['children', 'direction', 'label']);

      var classes = classnames('ax-bars', 'ax-bars--' + direction);

      return React.createElement(
        _default2,
        _extends({}, rest, { className: classes }),
        React.createElement(
          'div',
          { className: 'ax-bars__bars-container' },
          React.createElement(
            'div',
            { className: 'ax-bars__bars' },
            children
          )
        ),
        label && React.createElement(
          'div',
          { className: 'ax-bars__label' },
          React.createElement(
            _default,
            { textColor: 'subtle' },
            label
          )
        )
      );
    }
  }]);

  return Bars;
}(Component);

Bars.childContextTypes = {
  direction: PropTypes.string.isRequired
};
Bars.defaultProps = {
  direction: 'up'
};
export default Bars;