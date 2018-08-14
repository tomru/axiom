import _default2 from '@brandwatch/axiom-components/dist/Form/TextInput';
import _default from '@brandwatch/axiom-localization/dist/translate';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';


var t = _default({
  'Enter current password': {
    de: 'Bisheriges Passwort eingeben',
    es: 'Ingresar contraseña actual',
    fr: 'Entrez votre mot de passe'
  }
});

var CurrentPasswordInput = function (_Component) {
  _inherits(CurrentPasswordInput, _Component);

  function CurrentPasswordInput() {
    _classCallCheck(this, CurrentPasswordInput);

    return _possibleConstructorReturn(this, (CurrentPasswordInput.__proto__ || Object.getPrototypeOf(CurrentPasswordInput)).apply(this, arguments));
  }

  _createClass(CurrentPasswordInput, [{
    key: 'render',
    value: function render() {
      var axiomLanguage = this.context.axiomLanguage;

      var _props = this.props,
          invalid = _props.invalid,
          value = _props.value,
          rest = _objectWithoutProperties(_props, ['invalid', 'value']);

      return React.createElement(_default2, _extends({}, rest, {
        invalid: invalid,
        label: t('Enter current password', axiomLanguage),
        required: true,
        space: 'x8',
        type: 'password',
        value: value }));
    }
  }]);

  return CurrentPasswordInput;
}(Component);

CurrentPasswordInput.contextTypes = {
  axiomLanguage: PropTypes.string
};
export default CurrentPasswordInput;