import _default3 from '@brandwatch/axiom-components/dist/DatePicker/DatePicker';
import _default2 from '@brandwatch/axiom-components/dist/Form/TextInput';
import _default from '@brandwatch/axiom-components/dist/Form/TextInputIcon';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';

var TypeInstanceOfDate = function (_Component) {
  _inherits(TypeInstanceOfDate, _Component);

  function TypeInstanceOfDate() {
    _classCallCheck(this, TypeInstanceOfDate);

    return _possibleConstructorReturn(this, (TypeInstanceOfDate.__proto__ || Object.getPrototypeOf(TypeInstanceOfDate)).apply(this, arguments));
  }

  _createClass(TypeInstanceOfDate, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          setValue = _props.setValue;


      return React.createElement(
        _default3,
        {
          onSelect: function onSelect(_ref) {
            var date = _ref.date;
            return setValue(date);
          },
          selectedDate: typeof value === 'string' ? new Date(value) : value },
        React.createElement(
          _default2,
          {
            placeholder: 'Select a date',
            readOnly: true,
            value: value ? value.toString() : '' },
          React.createElement(_default, { name: 'chevron-down' })
        )
      );
    }
  }]);

  return TypeInstanceOfDate;
}(Component);

export default TypeInstanceOfDate;