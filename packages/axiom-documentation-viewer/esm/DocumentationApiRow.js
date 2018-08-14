import _default12 from '@brandwatch/axiom-components/dist/Table/TableRow';
import _default11 from '@brandwatch/axiom-components/dist/Tooltip/Tooltip';
import _default10 from '@brandwatch/axiom-components/dist/Tooltip/TooltipSource';
import _default9 from '@brandwatch/axiom-components/dist/Tooltip/TooltipContext';
import _default8 from '@brandwatch/axiom-components/dist/Tooltip/TooltipContent';
import _default7 from '@brandwatch/axiom-components/dist/Tooltip/TooltipTarget';
import _default6 from '@brandwatch/axiom-charts/dist/DataPoint/DataPoints';
import _default5 from '@brandwatch/axiom-charts/dist/DataPoint/DataPoint';
import _default4 from '@brandwatch/axiom-components/dist/Badge/Badge';
import _default3 from '@brandwatch/axiom-components/dist/Table/TableCell';
import _default2 from '@brandwatch/axiom-components/dist/Typography/Paragraph';
import _default from '@brandwatch/axiom-components/dist/Typography/Heading';
import * as _ from '@brandwatch/axiom-materials/dist/colors';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import TypeArrayOf from './TypeArrayOf';
import TypeBool from './TypeBool';
import TypeEnum from './TypeEnum';
import TypeFunc from './TypeFunc';
import TypeInstanceOf from './TypeInstanceOf';
import TypeNumber from './TypeNumber';
import TypeString from './TypeString';

var productColors = Object.keys(_.productColorNames);

var typeColorMap = {
  arrayOf: productColors[0],
  bool: productColors[1],
  enum: productColors[2],
  func: productColors[3],
  instanceOf: productColors[4],
  node: productColors[5],
  number: productColors[6],
  string: productColors[7],
  union: productColors[8]
};

var propEditorMap = {
  arrayOf: TypeArrayOf,
  bool: TypeBool,
  enum: TypeEnum,
  func: TypeFunc,
  instanceOf: TypeInstanceOf,
  number: TypeNumber,
  string: TypeString
};

var DocumentationApiRow = function (_Component) {
  _inherits(DocumentationApiRow, _Component);

  function DocumentationApiRow() {
    _classCallCheck(this, DocumentationApiRow);

    return _possibleConstructorReturn(this, (DocumentationApiRow.__proto__ || Object.getPrototypeOf(DocumentationApiRow)).apply(this, arguments));
  }

  _createClass(DocumentationApiRow, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          component = _props.component,
          defaultValue = _props.defaultValue,
          description = _props.description,
          name = _props.name,
          required = _props.required,
          type = _props.type,
          values = _props.values;

      var PropEditor = propEditorMap[type.name];
      var showDefault = defaultValue !== undefined && type && type.name !== 'func' && type.name !== 'arrayOf';

      return React.createElement(
        _default12,
        null,
        React.createElement(
          _default3,
          null,
          React.createElement(
            _default,
            {
              space: 'x0',
              textStrong: true },
            name
          ),
          description && React.createElement(
            _default2,
            {
              space: 'x0',
              textColor: 'subtle',
              textSize: 'small' },
            description
          )
        ),
        React.createElement(
          _default3,
          null,
          React.createElement(
            _default4,
            { color: typeColorMap[type.name], opacity: 0.2 },
            type.name
          )
        ),
        React.createElement(
          _default3,
          null,
          showDefault && defaultValue.value.toString()
        ),
        React.createElement(
          _default3,
          null,
          PropEditor && React.createElement(PropEditor, {
            prop: name,
            propOptions: {},
            required: required,
            setOptionValue: function setOptionValue() {},
            setValue: this.context.setValue.bind(null, component, name),
            type: type,
            value: this.context.getPropValue(component, name),
            values: values })
        ),
        React.createElement(
          _default3,
          null,
          required && React.createElement(
            _default11,
            null,
            React.createElement(
              _default7,
              null,
              React.createElement(
                _default6,
                { size: '.75rem' },
                React.createElement(_default5, { color: 'critical-mass' })
              )
            ),
            React.createElement(
              _default10,
              { theme: 'night', width: 'auto' },
              React.createElement(
                _default9,
                null,
                React.createElement(
                  _default8,
                  { textStrong: true },
                  'Required'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return DocumentationApiRow;
}(Component);

DocumentationApiRow.contextTypes = {
  getPropValue: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired
};
export default DocumentationApiRow;