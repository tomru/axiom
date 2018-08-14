var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import DropdownContent from '../Dropdown/DropdownContent';
import DropdownContext from '../Dropdown/DropdownContext';
import DropdownSource from '../Dropdown/DropdownSource';
import DropdownTarget from '../Dropdown/DropdownTarget';

import Icon from '../Icon/Icon';
import Link from '../Typography/Link';

var UsageHint = function (_PureComponent) {
  _inherits(UsageHint, _PureComponent);

  function UsageHint() {
    _classCallCheck(this, UsageHint);

    return _possibleConstructorReturn(this, (UsageHint.__proto__ || Object.getPrototypeOf(UsageHint)).apply(this, arguments));
  }

  _createClass(UsageHint, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          position = _props.position,
          rest = _objectWithoutProperties(_props, ['children', 'position']);

      return React.createElement(
        Dropdown,
        _extends({}, rest, { position: position, showArrow: true }),
        React.createElement(
          DropdownTarget,
          null,
          React.createElement(
            Link,
            { style: 'subtle' },
            React.createElement(Icon, { name: 'question-mark-circle', size: '1rem' })
          )
        ),
        React.createElement(
          DropdownSource,
          null,
          React.createElement(
            DropdownContext,
            null,
            React.createElement(
              DropdownContent,
              null,
              children
            )
          )
        )
      );
    }
  }]);

  return UsageHint;
}(PureComponent);

export default UsageHint;