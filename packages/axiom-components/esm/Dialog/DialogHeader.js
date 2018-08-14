var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../Base/Base';
import Grid from '../Grid/Grid';
import GridCell from '../Grid/GridCell';
import Icon from '../Icon/Icon';
import Link from '../Typography/Link';

var DialogHeader = function (_Component) {
  _inherits(DialogHeader, _Component);

  function DialogHeader() {
    _classCallCheck(this, DialogHeader);

    return _possibleConstructorReturn(this, (DialogHeader.__proto__ || Object.getPrototypeOf(DialogHeader)).apply(this, arguments));
  }

  _createClass(DialogHeader, [{
    key: 'render',
    value: function render() {
      var onRequestClose = this.context.onRequestClose;

      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['children']);

      return React.createElement(
        Base,
        _extends({}, rest, { className: 'ax-dialog__header' }),
        React.createElement(
          Grid,
          { responsive: false, verticalAlign: 'middle' },
          React.createElement(
            GridCell,
            null,
            children
          ),
          React.createElement(
            GridCell,
            { shrink: true },
            React.createElement(
              Link,
              { onClick: onRequestClose, style: 'subtle' },
              React.createElement(Icon, { name: 'cross', size: '1.5rem' })
            )
          )
        )
      );
    }
  }]);

  return DialogHeader;
}(Component);

DialogHeader.contextTypes = {
  onRequestClose: PropTypes.func.isRequired
};
export default DialogHeader;