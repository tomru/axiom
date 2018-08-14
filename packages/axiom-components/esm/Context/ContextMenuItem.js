var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import CheckBox from '../Form/CheckBox';
import Icon from '../Icon/Icon';

export var contextMenuItemSelector = 'data-ax-context-menu-item';

var ContextMenuItem = function (_Component) {
  _inherits(ContextMenuItem, _Component);

  function ContextMenuItem() {
    _classCallCheck(this, ContextMenuItem);

    return _possibleConstructorReturn(this, (ContextMenuItem.__proto__ || Object.getPrototypeOf(ContextMenuItem)).apply(this, arguments));
  }

  _createClass(ContextMenuItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          disabled = _props.disabled,
          icon = _props.icon,
          indeterminate = _props.indeterminate,
          onClick = _props.onClick,
          multiSelect = _props.multiSelect,
          selected = _props.selected,
          rest = _objectWithoutProperties(_props, ['children', 'disabled', 'icon', 'indeterminate', 'onClick', 'multiSelect', 'selected']);

      var classes = classnames('ax-context-menu__item', {
        'ax-context-menu__item--selected': selected
      });

      return React.createElement(
        Base,
        _extends({}, rest, _defineProperty({}, contextMenuItemSelector, true), {
          Component: 'button',
          className: classes,
          disabled: disabled,
          onClick: onClick,
          textStrong: selected }),
        multiSelect && React.createElement(
          'div',
          { className: 'ax-context-menu__item-checkbox' },
          React.createElement(CheckBox, { checked: selected, disabled: disabled, indeterminate: indeterminate, onChange: onClick })
        ),
        React.createElement(
          'div',
          { className: 'ax-context-menu__item-content' },
          children
        ),
        !multiSelect && selected !== undefined && React.createElement(
          'div',
          { className: 'ax-context-menu__item-icon' },
          React.createElement(Icon, { cloak: !selected, name: 'tick' })
        ),
        icon !== undefined && React.createElement(
          'div',
          { className: 'ax-context-menu__item-icon' },
          React.createElement(Icon, { name: icon })
        )
      );
    }
  }]);

  return ContextMenuItem;
}(Component);

export default ContextMenuItem;