var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import atIds from '@brandwatch/axiom-automation-testing/ids';
import Dropdown from '../Dropdown/Dropdown';
import DropdownContent from '../Dropdown/DropdownContent';
import DropdownContext from '../Dropdown/DropdownContext';
import DropdownSource from '../Dropdown/DropdownSource';
import DropdownTarget from '../Dropdown/DropdownTarget';
import Grid from '../Grid/Grid';
import GridCell from '../Grid/GridCell';
import ColorPickerOption from './ColorPickerOption';

var ColorPicker = function (_Component) {
  _inherits(ColorPicker, _Component);

  function ColorPicker() {
    _classCallCheck(this, ColorPicker);

    return _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).apply(this, arguments));
  }

  _createClass(ColorPicker, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          disabledOptions = _props.disabledOptions,
          onOpen = _props.onOpen,
          onSelectColor = _props.onSelectColor,
          options = _props.options,
          selected = _props.selected,
          width = _props.width,
          size = _props.size,
          rest = _objectWithoutProperties(_props, ['disabledOptions', 'onOpen', 'onSelectColor', 'options', 'selected', 'width', 'size']);

      return React.createElement(
        Dropdown,
        _extends({ position: 'bottom' }, rest, { showArrow: true }),
        React.createElement(
          DropdownTarget,
          null,
          React.createElement(ColorPickerOption, {
            color: selected,
            'data-ax-at': atIds.ColorPicker.dropdown,
            onClick: onOpen,
            size: size })
        ),
        React.createElement(
          DropdownSource,
          null,
          React.createElement(
            DropdownContext,
            { width: width },
            React.createElement(
              DropdownContent,
              null,
              React.createElement(
                Grid,
                {
                  gutters: 'small',
                  horizontalAlign: 'middle',
                  responsive: false },
                options.map(function (color) {
                  var isColorDisabled = disabledOptions.indexOf(color) !== -1;
                  return React.createElement(
                    GridCell,
                    { key: color, shrink: true },
                    React.createElement(ColorPickerOption, {
                      color: color,
                      'data-ax-at': atIds.ColorPicker.option,
                      disabled: isColorDisabled,
                      onClick: function onClick() {
                        return isColorDisabled || onSelectColor(color);
                      } })
                  );
                })
              )
            )
          )
        )
      );
    }
  }]);

  return ColorPicker;
}(Component);

ColorPicker.defaultProps = {
  disabledOptions: [],
  options: ['tiny-clanger', 'critical-mass', 'paradise-lost', 'serene-sea', 'giant-leap', 'moon-lagoon', 'terra-form', 'primeval-soup', 'new-horizon', 'blast-off', 'ground-control', 'luna-dust'],
  width: '9rem'
};
export default ColorPicker;