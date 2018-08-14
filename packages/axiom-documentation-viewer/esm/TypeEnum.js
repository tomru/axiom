import _default3 from '@brandwatch/axiom-components/dist/Select/Select';
import _default2 from '@brandwatch/axiom-components/dist/Select/SelectOptionGroup';
import _default from '@brandwatch/axiom-components/dist/Select/SelectOption';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';

var TypeEnum = function (_Component) {
  _inherits(TypeEnum, _Component);

  function TypeEnum() {
    _classCallCheck(this, TypeEnum);

    return _possibleConstructorReturn(this, (TypeEnum.__proto__ || Object.getPrototypeOf(TypeEnum)).apply(this, arguments));
  }

  _createClass(TypeEnum, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          setValue = _props.setValue,
          value = _props.value,
          values = _props.values;


      return React.createElement(
        _default3,
        {
          onChange: function onChange() {},
          onClear: function onClear() {
            return setValue(undefined);
          },
          onSelect: function onSelect(value) {
            return setValue(value);
          },
          placeholder: 'Select a prop value',
          readOnly: true,
          selectedValue: value,
          value: value },
        React.createElement(
          _default2,
          null,
          values.map(function (val) {
            return React.createElement(
              _default,
              { key: val, value: val },
              val.toString()
            );
          })
        )
      );
    }
  }]);

  return TypeEnum;
}(Component);

export default TypeEnum;