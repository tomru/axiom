import _default16 from '@brandwatch/axiom-components/dist/Dropdown/Dropdown';
import _default15 from '@brandwatch/axiom-components/dist/Dropdown/DropdownSource';
import _default14 from '@brandwatch/axiom-components/dist/Dropdown/DropdownContext';
import _default13 from '@brandwatch/axiom-components/dist/Dropdown/DropdownContent';
import _default12 from '@brandwatch/axiom-components/dist/Grid/Grid';
import _default11 from '@brandwatch/axiom-components/dist/Grid/GridCell';
import _default10 from '@brandwatch/axiom-components/dist/Button/ButtonGroup';
import _default9 from '@brandwatch/axiom-components/dist/Button/Button';
import _default8 from '@brandwatch/axiom-components/dist/Typography/Paragraph';
import _default7 from '@brandwatch/axiom-components/dist/Typography/Heading';
import _default6 from '@brandwatch/axiom-components/dist/Dropdown/DropdownTarget';
import _default5 from '@brandwatch/axiom-components/dist/Typography/Link';
import _default4 from '@brandwatch/axiom-components/dist/Avatar/Avatar';
import _default3 from '@brandwatch/axiom-components/dist/Avatar/Candytar';
import _default2 from '@brandwatch/axiom-utils/dist/stringToColor';
import _default from '@brandwatch/axiom-localization/dist/translate';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import atIds from '@brandwatch/axiom-automation-testing/ids';


var t = _default({
  'Sign out': {
    de: 'Abmelden',
    es: 'Cerrar Sesión',
    fr: 'Se déconnecter'
  }
});

var UserMenu = function (_Component) {
  _inherits(UserMenu, _Component);

  function UserMenu() {
    _classCallCheck(this, UserMenu);

    return _possibleConstructorReturn(this, (UserMenu.__proto__ || Object.getPrototypeOf(UserMenu)).apply(this, arguments));
  }

  _createClass(UserMenu, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          firstName = _props.firstName,
          lastName = _props.lastName,
          email = _props.email,
          imageSrc = _props.imageSrc,
          onLogout = _props.onLogout,
          rest = _objectWithoutProperties(_props, ['children', 'firstName', 'lastName', 'email', 'imageSrc', 'onLogout']);

      var color = _default2(email);
      var axiomLanguage = this.context.axiomLanguage;


      return React.createElement(
        _default16,
        _extends({ position: 'bottom' }, rest),
        React.createElement(
          _default6,
          null,
          React.createElement(
            _default5,
            { 'data-ax-at': atIds.UserMenu.activate },
            React.createElement(
              _default4,
              { size: '2rem', src: imageSrc },
              React.createElement(_default3, { color: color, size: '2rem' })
            )
          )
        ),
        React.createElement(
          _default15,
          null,
          React.createElement(
            _default14,
            { width: 'auto' },
            React.createElement(
              _default13,
              null,
              React.createElement(
                _default12,
                { gutters: 'large', responsive: false, verticalAlign: 'middle' },
                React.createElement(
                  _default11,
                  { fill: true },
                  React.createElement(
                    _default7,
                    { space: 'x0', textSize: 'headtitle' },
                    firstName,
                    ' ',
                    lastName
                  ),
                  React.createElement(
                    _default8,
                    { space: 'x0', textColor: 'subtle' },
                    email
                  ),
                  React.createElement(
                    _default10,
                    { space: 'x4' },
                    React.createElement(
                      _default9,
                      { 'data-ax-at': atIds.UserMenu.logout, onClick: onLogout },
                      t('Sign out', axiomLanguage)
                    )
                  )
                ),
                React.createElement(
                  _default11,
                  { shrink: true },
                  React.createElement(
                    _default4,
                    { size: '4.5rem', src: imageSrc },
                    React.createElement(_default3, { color: color, size: '4.5rem' })
                  )
                )
              )
            ),
            children
          )
        )
      );
    }
  }]);

  return UserMenu;
}(Component);

UserMenu.contextTypes = {
  axiomLanguage: PropTypes.string
};
export default UserMenu;