import _default9 from '@brandwatch/axiom-components/dist/Validation/Validate';
import _default8 from '@brandwatch/axiom-components/dist/Grid/Grid';
import _default7 from '@brandwatch/axiom-components/dist/Grid/GridCell';
import _default6 from '@brandwatch/axiom-components/dist/List/List';
import _default5 from '@brandwatch/axiom-components/dist/List/ListItem';
import _default4 from '@brandwatch/axiom-components/dist/Icon/Animicon';
import _default3 from '@brandwatch/axiom-components/dist/Form/TextInput';
import _default2 from '@brandwatch/axiom-utils/dist/listToSentence';
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
  '1 non-alphanumeric character (e.g. !#%,+-/)': {
    de: '1 Sonderzeichen (z.B. !#%,+-/)',
    es: '1 caracter no alfanumérico (ej. !#%,+-/)',
    fr: '1 caractère non alphanumérique (e.g. !#%,+-/)'
  },
  '1 numeric character': {
    de: '1 Zahl',
    es: '1 caracter numérico',
    fr: '1 caractère numérique'
  },
  '1 uppercase character': {
    de: '1 Großbuchstabe',
    es: '1 caracter en mayúscula',
    fr: '1 caractère majuscule'
  },
  '8 characters': {
    de: '8 Zeichen',
    es: '8 caracteres',
    fr: '8 caractères'
  },
  'at least 8 characters': {
    de: 'mindestens 8 Zeichen',
    es: 'al menos 8 caracteres',
    fr: 'au moins 8 characters'
  },
  'Create new password': {
    de: 'Neues Passwort erstellen',
    es: 'Crear nueva contraseña',
    fr: 'Créez votre nouveau mot de passe'
  },
  'Sorry, your new password must include': {
    de: 'Entschuldigen Sie bitte Ihr neues Passwort',
    es: 'Lo sentimos que su nueva contraseña debe incluir',
    fr: 'Désolé, votre nouveau mot de passe doit inclure'
  }
});

var NewPasswordInput = function (_Component) {
  _inherits(NewPasswordInput, _Component);

  function NewPasswordInput() {
    _classCallCheck(this, NewPasswordInput);

    return _possibleConstructorReturn(this, (NewPasswordInput.__proto__ || Object.getPrototypeOf(NewPasswordInput)).apply(this, arguments));
  }

  _createClass(NewPasswordInput, [{
    key: 'render',
    value: function render() {
      var axiomLanguage = this.context.axiomLanguage;

      var _props = this.props,
          value = _props.value,
          rest = _objectWithoutProperties(_props, ['value']);

      var validations = [{
        error: t('at least 8 characters', axiomLanguage),
        hint: t('8 characters', axiomLanguage),
        pattern: /^.{8,}$/
      }, {
        error: t('1 numeric character', axiomLanguage),
        hint: t('1 numeric character', axiomLanguage),
        pattern: /^.*[0-9].*$/
      }, {
        error: t('1 uppercase character', axiomLanguage),
        hint: t('1 uppercase character', axiomLanguage),
        pattern: /^.*[A-Z].*$/
      }, {
        error: t('1 non-alphanumeric character (e.g. !#%,+-/)', axiomLanguage),
        hint: t('1 non-alphanumeric character (e.g. !#%,+-/)', axiomLanguage),
        pattern: /^.*[^a-zA-Z\d:].*$/
      }];

      var validationsColumns = [validations.filter(function (_, idx) {
        return idx < validations.length / 2;
      }), validations.filter(function (_, idx) {
        return idx >= validations.length / 2;
      })];

      var getValidationError = function getValidationError(invalidations) {
        return _default2(invalidations.map(function (invalidPattern) {
          return validations.find(function (_ref) {
            var pattern = _ref.pattern;
            return pattern === invalidPattern;
          }).error;
        }), t('Sorry, your new password must include', axiomLanguage) + ' ');
      };

      return React.createElement(
        _default9,
        {
          error: getValidationError,
          key: 'newPassword',
          patterns: validations.map(function (_ref2) {
            var pattern = _ref2.pattern;
            return pattern;
          }),
          required: true,
          value: value },
        function (valid, hasMetRequired, hasMetPattern) {
          return [React.createElement(_default3, _extends({}, rest, {
            invalid: !valid,
            key: 'input',
            label: t('Create new password', axiomLanguage),
            type: 'password',
            value: value })), React.createElement(
            _default8,
            {
              horizontalGutters: 'large',
              key: 'hints',
              responsive: false,
              space: 'x3',
              verticalGutters: 'tiny' },
            validationsColumns.map(function (validations, index) {
              return React.createElement(
                _default7,
                { key: index, shrink: true },
                React.createElement(
                  _default6,
                  { style: 'none', textColor: 'subtle' },
                  validations.map(function (_ref3, index) {
                    var hint = _ref3.hint,
                        pattern = _ref3.pattern;
                    return React.createElement(
                      _default5,
                      { key: index, space: 'x2' },
                      hint,
                      React.createElement(_default4, {
                        inline: true,
                        isIn: hasMetPattern(pattern),
                        name: 'tick',
                        spaceLeft: 'x1',
                        textColor: 'success' })
                    );
                  })
                )
              );
            })
          )];
        }
      );
    }
  }]);

  return NewPasswordInput;
}(Component);

NewPasswordInput.contextTypes = {
  axiomLanguage: PropTypes.string
};
export default NewPasswordInput;