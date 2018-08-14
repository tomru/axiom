import _default from '@brandwatch/axiom-utils/dist/findComponent';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import atIds from '@brandwatch/axiom-automation-testing/ids';
import Card from '../Card/Card';
import CardContent from '../Card/CardContent';
import ColorPicker from '../ColorPicker/ColorPicker';
import ColorPickerOption from '../ColorPicker/ColorPickerOption';
import Dropdown from '../Dropdown/Dropdown';
import DropdownContext from '../Dropdown/DropdownContext';
import DropdownSource from '../Dropdown/DropdownSource';
import DropdownTarget from '../Dropdown/DropdownTarget';
import Grid from '../Grid/Grid';
import GridCell from '../Grid/GridCell';
import Heading from '../Typography/Heading';
import Icon from '../Icon/Icon';
import Link from '../Typography/Link';
import { DataPickerDropdownRef } from './DataPickerDropdown';
import { DataPickerMetaRef } from './DataPickerMeta';
import './DataPicker.css';

var DataPicker = function (_Component) {
  _inherits(DataPicker, _Component);

  function DataPicker() {
    _classCallCheck(this, DataPicker);

    return _possibleConstructorReturn(this, (DataPicker.__proto__ || Object.getPrototypeOf(DataPicker)).apply(this, arguments));
  }

  _createClass(DataPicker, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          color = _props.color,
          colorOptions = _props.colorOptions,
          disabledColors = _props.disabledColors,
          onColorPickerOpen = _props.onColorPickerOpen,
          onSelectColor = _props.onSelectColor,
          placeholder = _props.placeholder,
          value = _props.value,
          rest = _objectWithoutProperties(_props, ['children', 'color', 'colorOptions', 'disabledColors', 'onColorPickerOpen', 'onSelectColor', 'placeholder', 'value']);

      var dropdownMenu = _default(children, DataPickerDropdownRef);
      var metaData = _default(children, DataPickerMetaRef);
      var title = value || placeholder;

      return React.createElement(
        Card,
        _extends({}, rest, {
          border: Boolean(dropdownMenu),
          shade: dropdownMenu ? 'shade-1' : 'shade-3',
          size: 'medium' }),
        React.createElement(
          'div',
          { className: 'ax-data-picker' },
          React.createElement(
            'div',
            { className: 'ax-data-picker__dropdown' },
            React.createElement(
              CardContent,
              { size: 'small' },
              React.createElement(
                Grid,
                {
                  gutters: 'tiny',
                  responsive: false,
                  verticalAlign: 'middle',
                  wrap: false },
                React.createElement(
                  GridCell,
                  { none: true },
                  onSelectColor ? React.createElement(ColorPicker, {
                    colorOptions: colorOptions,
                    disabledOptions: disabledColors,
                    onOpen: onColorPickerOpen,
                    onSelectColor: onSelectColor,
                    selected: color }) : React.createElement(ColorPickerOption, { color: color })
                ),
                React.createElement(
                  GridCell,
                  null,
                  dropdownMenu && React.createElement(
                    Dropdown,
                    null,
                    React.createElement(
                      DropdownTarget,
                      null,
                      React.createElement(
                        'div',
                        {
                          className: 'ax-data-picker__link',
                          'data-ax-at': atIds.DataPicker.dropdown },
                        React.createElement(
                          Link,
                          { style: 'body' },
                          React.createElement(
                            Grid,
                            { responsive: false, verticalAlign: 'middle', wrap: false },
                            React.createElement(
                              GridCell,
                              null,
                              React.createElement(
                                Heading,
                                { textEllipsis: true, title: title },
                                title
                              )
                            ),
                            React.createElement(
                              GridCell,
                              { none: true },
                              React.createElement(Icon, { name: 'chevron-down' })
                            )
                          )
                        )
                      )
                    ),
                    React.createElement(
                      DropdownSource,
                      null,
                      React.createElement(
                        DropdownContext,
                        null,
                        dropdownMenu
                      )
                    )
                  ),
                  !dropdownMenu && React.createElement(
                    Heading,
                    { textEllipsis: true, title: title },
                    title
                  )
                )
              )
            )
          ),
          metaData && React.createElement(
            'div',
            { className: 'ax-data-picker__meta' },
            React.createElement(
              CardContent,
              { size: 'small' },
              metaData
            )
          )
        )
      );
    }
  }]);

  return DataPicker;
}(Component);

export default DataPicker;