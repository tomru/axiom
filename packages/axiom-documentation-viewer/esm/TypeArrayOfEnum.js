import _default3 from '@brandwatch/axiom-components/dist/Select/Select';
import _default2 from '@brandwatch/axiom-components/dist/Select/SelectOptionGroup';
import _default from '@brandwatch/axiom-components/dist/Select/SelectOption';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import PropTypes from 'prop-types';
import React, { Component } from 'react';


function isSelected(values, val) {
  return Array.isArray(values) && values.filter(function (v) {
    return v === val;
  }).length > 0;
}

function withOrWithout() {
  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var val = arguments[1];

  return isSelected(values, val) ? values.filter(function (v) {
    return v !== val;
  }) : [].concat(_toConsumableArray(values), [val]);
}

var TypeArrayOfEnum = function (_Component) {
  _inherits(TypeArrayOfEnum, _Component);

  function TypeArrayOfEnum() {
    _classCallCheck(this, TypeArrayOfEnum);

    return _possibleConstructorReturn(this, (TypeArrayOfEnum.__proto__ || Object.getPrototypeOf(TypeArrayOfEnum)).apply(this, arguments));
  }

  _createClass(TypeArrayOfEnum, [{
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
          onSelect: function onSelect(val) {
            return setValue(withOrWithout(value, val));
          },
          placeholder: 'Select prop values',
          readOnly: true,
          selectedValue: value,
          value: Array.isArray(value) ? value.join(', ') : value || '' },
        React.createElement(
          _default2,
          null,
          values.map(function (val) {
            return React.createElement(
              _default,
              { key: val, multiSelect: true, value: val },
              val.toString()
            );
          })
        )
      );
    }
  }]);

  return TypeArrayOfEnum;
}(Component);

export default TypeArrayOfEnum;