var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';

import Position from '../Position/Position';
import PositionTarget from '../Position/PositionTarget';
import PositionSource from '../Position/PositionSource';
import TooltipContent from '../Tooltip/TooltipContent';
import TooltipContext from '../Tooltip/TooltipContext';
import Text from '../Typography/Text';

var InlineValidation = function (_Component) {
  _inherits(InlineValidation, _Component);

  function InlineValidation() {
    _classCallCheck(this, InlineValidation);

    return _possibleConstructorReturn(this, (InlineValidation.__proto__ || Object.getPrototypeOf(InlineValidation)).apply(this, arguments));
  }

  _createClass(InlineValidation, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          message = _props.message,
          position = _props.position,
          onClick = _props.onClick,
          onFocus = _props.onFocus;


      return React.createElement(
        Position,
        { isVisible: !!message, position: position },
        React.createElement(
          PositionTarget,
          null,
          cloneElement(children, { onClick: onClick, onFocus: onFocus })
        ),
        React.createElement(
          PositionSource,
          null,
          React.createElement(
            TooltipContext,
            { color: 'error' },
            React.createElement(
              TooltipContent,
              { color: 'error' },
              React.createElement(
                Text,
                { textColor: 'night' },
                message
              )
            )
          )
        )
      );
    }
  }]);

  return InlineValidation;
}(Component);

InlineValidation.defaultProps = {
  position: 'bottom'
};
export default InlineValidation;