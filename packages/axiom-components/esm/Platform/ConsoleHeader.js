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
import Grid from '../Grid/Grid';
import GridCell from '../Grid/GridCell';
import Icon from '../Icon/Icon';
import Link from '../Typography/Link';

var ConsoleHeader = function (_Component) {
  _inherits(ConsoleHeader, _Component);

  function ConsoleHeader() {
    _classCallCheck(this, ConsoleHeader);

    return _possibleConstructorReturn(this, (ConsoleHeader.__proto__ || Object.getPrototypeOf(ConsoleHeader)).apply(this, arguments));
  }

  _createClass(ConsoleHeader, [{
    key: 'render',
    value: function render() {
      var _context = this.context,
          onConsoleClose = _context.onConsoleClose,
          consolePosition = _context.consolePosition;

      var _props = this.props,
          children = _props.children,
          separator = _props.separator,
          shade = _props.shade,
          size = _props.size,
          rest = _objectWithoutProperties(_props, ['children', 'separator', 'shade', 'size']);

      var classes = classnames('ax-platform__console-header', 'ax-platform__console-header--' + shade, 'ax-platform__console-header--' + size, {
        'ax-platform__console-header--separator': separator
      });

      return React.createElement(
        Base,
        _extends({}, rest, { className: classes }),
        React.createElement(
          Grid,
          { gutters: 'small', responsive: false, verticalAlign: 'middle' },
          onConsoleClose && size === 'large' && consolePosition === 'right' && React.createElement(
            GridCell,
            { shrink: true },
            React.createElement(
              Link,
              { onClick: onConsoleClose, style: 'subtle' },
              React.createElement(Icon, { name: 'cross', size: '1.5rem' })
            )
          ),
          React.createElement(
            GridCell,
            null,
            children
          ),
          onConsoleClose && size === 'large' && consolePosition === 'left' && React.createElement(
            GridCell,
            { shrink: true },
            React.createElement(
              Link,
              { onClick: onConsoleClose, style: 'subtle' },
              React.createElement(Icon, { name: 'cross', size: '1.5rem' })
            )
          )
        )
      );
    }
  }]);

  return ConsoleHeader;
}(Component);

ConsoleHeader.contextTypes = {
  onConsoleClose: PropTypes.func,
  consolePosition: PropTypes.string.isRequired
};
ConsoleHeader.defaultProps = {
  shade: 'shade-3',
  size: 'large'
};
export default ConsoleHeader;