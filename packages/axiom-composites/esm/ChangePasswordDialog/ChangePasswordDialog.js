import _default11 from '@brandwatch/axiom-components/dist/Dialog/Dialog';
import _default10 from '@brandwatch/axiom-components/dist/Form/Form';
import _default9 from '@brandwatch/axiom-components/dist/Dialog/DialogBody';
import _default8 from '@brandwatch/axiom-components/dist/Button/ButtonGroup';
import _default7 from '@brandwatch/axiom-components/dist/Progress/ProgressButton';
import _default6 from '@brandwatch/axiom-components/dist/Button/Button';
import _default5 from '@brandwatch/axiom-components/dist/AlertBar/AlertBar';
import _default4 from '@brandwatch/axiom-components/dist/Typography/Paragraph';
import _default3 from '@brandwatch/axiom-components/dist/Dialog/DialogHeader';
import _default2 from '@brandwatch/axiom-components/dist/Typography/Heading';
import _default from '@brandwatch/axiom-localization/dist/translate';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import omit from 'lodash.omit';
import atIds from '@brandwatch/axiom-automation-testing/ids';

import ConfirmPasswordInput from '../FormInputs/ConfirmPasswordInput';
import CurrentPasswordInput from '../FormInputs/CurrentPasswordInput';
import NewPasswordInput from '../FormInputs/NewPasswordInput';

var t = _default({
  'Change Password': {
    de: 'Passwort ändern',
    es: 'Cambiar Contraseña',
    fr: 'Changement de votre mot de passe'
  },
  'Please complete all the password fields': {
    de: 'Es tut uns leid, Sie müssen alle Passwortfelder ausfüllen',
    es: 'Lo sentimos, debe completar todos los campos de contraseña',
    fr: 'Désolé, vous devez compléter tous les champs de mot de passe'
  },
  'Cancel': {
    de: 'Abbrechen',
    es: 'Cancelar',
    fr: 'Effacer'
  }
});

var ChangePasswordDialog = function (_Component) {
  _inherits(ChangePasswordDialog, _Component);

  function ChangePasswordDialog(props) {
    _classCallCheck(this, ChangePasswordDialog);

    var _this = _possibleConstructorReturn(this, (ChangePasswordDialog.__proto__ || Object.getPrototypeOf(ChangePasswordDialog)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.state = {
      confirmPassword: '',
      currentPassword: '',
      validationError: '',
      newPassword: ''
    };
    return _this;
  }

  _createClass(ChangePasswordDialog, [{
    key: 'handleSubmit',
    value: function handleSubmit(event, validationError) {
      var onSubmit = this.props.onSubmit;
      var _state = this.state,
          currentPassword = _state.currentPassword,
          newPassword = _state.newPassword;


      event.preventDefault();
      this.setState({ validationError: validationError });

      if (!validationError) {
        onSubmit({ currentPassword: currentPassword, newPassword: newPassword });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var axiomLanguage = this.context.axiomLanguage;

      var _props = this.props,
          error = _props.error,
          isCurrentPasswordInvalid = _props.isCurrentPasswordInvalid,
          isSubmitting = _props.isSubmitting,
          onRequestClose = _props.onRequestClose,
          rest = _objectWithoutProperties(_props, ['error', 'isCurrentPasswordInvalid', 'isSubmitting', 'onRequestClose']);

      var _state2 = this.state,
          confirmPassword = _state2.confirmPassword,
          currentPassword = _state2.currentPassword,
          newPassword = _state2.newPassword,
          validationError = _state2.validationError;


      return React.createElement(
        _default11,
        _extends({}, omit(rest, ['onSubmit']), {
          onRequestClose: onRequestClose,
          size: 'medium' }),
        React.createElement(
          _default3,
          null,
          React.createElement(
            _default2,
            { textSize: 'headtitle' },
            t('Change Password', axiomLanguage)
          )
        ),
        React.createElement(
          _default10,
          {
            onSubmit: this.handleSubmit,
            requiredError: t('Please complete all the password fields') },
          (validationError || error) && React.createElement(
            _default5,
            { type: 'error' },
            React.createElement(
              _default4,
              { 'data-ax-at': atIds.ChangePassword.error },
              validationError || error
            )
          ),
          React.createElement(
            _default9,
            null,
            React.createElement(CurrentPasswordInput, {
              'data-ax-at': atIds.ChangePassword.currentPassword,
              invalid: isCurrentPasswordInvalid,
              onChange: function onChange(e) {
                return _this2.setState({ currentPassword: e.target.value });
              },
              value: currentPassword }),
            React.createElement(NewPasswordInput, {
              'data-ax-at': atIds.ChangePassword.newPassword,
              onChange: function onChange(e) {
                return _this2.setState({ newPassword: e.target.value });
              },
              value: newPassword }),
            React.createElement(ConfirmPasswordInput, {
              'data-ax-at': atIds.ChangePassword.confirmPassword,
              onChange: function onChange(e) {
                return _this2.setState({ confirmPassword: e.target.value });
              },
              passwordValue: newPassword,
              value: confirmPassword }),
            React.createElement(
              _default8,
              { textRight: true },
              React.createElement(
                _default6,
                {
                  'data-ax-at': atIds.ChangePassword.cancel,
                  onClick: onRequestClose,
                  style: 'secondary',
                  type: 'button' },
                t('Cancel', axiomLanguage)
              ),
              React.createElement(
                _default7,
                {
                  'data-ax-at': atIds.ChangePassword.submit,
                  disabled: isSubmitting,
                  isInProgress: isSubmitting,
                  type: 'submit' },
                t('Change Password', axiomLanguage)
              )
            )
          )
        )
      );
    }
  }]);

  return ChangePasswordDialog;
}(Component);

ChangePasswordDialog.contextTypes = {
  axiomLanguage: PropTypes.string
};
ChangePasswordDialog.defaultProps = {
  isCurrentPasswordInvalid: false,
  isSubmitting: false
};
export default ChangePasswordDialog;