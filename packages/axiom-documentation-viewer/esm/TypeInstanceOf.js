var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TypeInstanceOfDate from './TypeInstanceOfDate';

var InstaceOfMap = {
  Date: TypeInstanceOfDate
};

var TypeInstanceOf = function (_Component) {
  _inherits(TypeInstanceOf, _Component);

  function TypeInstanceOf() {
    _classCallCheck(this, TypeInstanceOf);

    return _possibleConstructorReturn(this, (TypeInstanceOf.__proto__ || Object.getPrototypeOf(TypeInstanceOf)).apply(this, arguments));
  }

  _createClass(TypeInstanceOf, [{
    key: 'render',
    value: function render() {
      var value = this.props.type.value;

      var InstanceOfEditor = InstaceOfMap[value];

      return React.createElement(InstanceOfEditor, this.props);
    }
  }]);

  return TypeInstanceOf;
}(Component);

export default TypeInstanceOf;