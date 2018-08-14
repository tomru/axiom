import _default6 from '@brandwatch/axiom-components/dist/Dropdown/Dropdown';
import _default5 from '@brandwatch/axiom-components/dist/Dropdown/DropdownSource';
import _default4 from '@brandwatch/axiom-components/dist/Dropdown/DropdownTarget';
import _default3 from '@brandwatch/axiom-components/dist/Tooltip/Tooltip';
import _default2 from '@brandwatch/axiom-components/dist/Tooltip/TooltipSource';
import _default from '@brandwatch/axiom-components/dist/Tooltip/TooltipTarget';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';

var ChartContext = function (_Component) {
  _inherits(ChartContext, _Component);

  function ChartContext() {
    _classCallCheck(this, ChartContext);

    return _possibleConstructorReturn(this, (ChartContext.__proto__ || Object.getPrototypeOf(ChartContext)).apply(this, arguments));
  }

  _createClass(ChartContext, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          DropdownContext = _props.DropdownContext,
          TooltipContext = _props.TooltipContext,
          children = _props.children,
          onDropdownClose = _props.onDropdownClose,
          onDropdownOpen = _props.onDropdownOpen,
          rest = _objectWithoutProperties(_props, ['DropdownContext', 'TooltipContext', 'children', 'onDropdownClose', 'onDropdownOpen']);

      if (DropdownContext && TooltipContext) {
        return React.createElement(
          _default6,
          {
            onRequestClose: onDropdownClose,
            onRequestOpen: onDropdownOpen,
            position: 'top',
            showArrow: true,
            withMask: true },
          React.createElement(
            _default4,
            null,
            React.createElement(
              _default3,
              null,
              React.createElement(
                _default,
                null,
                children
              ),
              React.createElement(
                _default2,
                null,
                React.createElement(TooltipContext, rest)
              )
            )
          ),
          React.createElement(
            _default5,
            null,
            React.createElement(DropdownContext, rest)
          )
        );
      }

      if (DropdownContext) {
        return React.createElement(
          _default6,
          {
            onRequestClose: onDropdownClose,
            onRequestOpen: onDropdownOpen,
            position: 'top',
            showArrow: true,
            withMask: true },
          React.createElement(
            _default4,
            null,
            children
          ),
          React.createElement(
            _default5,
            null,
            React.createElement(DropdownContext, rest)
          )
        );
      }

      if (TooltipContext) {
        return React.createElement(
          _default3,
          null,
          React.createElement(
            _default,
            null,
            children
          ),
          React.createElement(
            _default2,
            null,
            React.createElement(TooltipContext, rest)
          )
        );
      }

      return children;
    }
  }]);

  return ChartContext;
}(Component);

export default ChartContext;