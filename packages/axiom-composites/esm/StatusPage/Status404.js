import _default5 from '@brandwatch/axiom-components/dist/Typography/Paragraph';
import _default4 from '@brandwatch/axiom-components/dist/Typography/Link';
import _default3 from '@brandwatch/axiom-components/dist/Typography/Heading';
import _default2 from '@brandwatch/axiom-components/dist/Typography/Strong';
import _default from '@brandwatch/axiom-localization/dist/translate';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import LogoPage from '../LogoPage/LogoPage';
import StatusMessage from './StatusMessage';

var t = _default({
  'about the problem': {
    de: 'über das Problem',
    es: 'sobre el problema',
    fr: 'à propos du problème'
  },
  'contact us': {
    de: 'kontaktiere uns',
    es: 'contáctenos',
    fr: 'contactez nous'
  },
  'home page': {
    de: 'startseite',
    es: 'página principal',
    fr: ''
  },
  'Ooops!': {
    de: 'Hoppla!',
    es: 'Huy!',
    fr: 'page d\'accueil'
  },
  'or': {
    de: 'oder',
    es: 'o',
    fr: 'ou'
  },
  'The link you clicked may be broken or the page may have been removed': {
    de: 'Der Link, den Sie geklickt haben, kann kaputt sein oder die Seite wurde möglicherweise' + ' entfernt',
    es: 'El enlace al que ha hecho clic puede estar roto o la página puede haber sido eliminada',
    fr: 'Le lien sur lequel vous avez cliqué peut être brisé ou si la page a été supprimée'
  },
  'Visit the': {
    de: 'Besuche den',
    es: 'Visita el',
    fr: 'Visiter le'
  }
});

var Status404 = function (_Component) {
  _inherits(Status404, _Component);

  function Status404() {
    _classCallCheck(this, Status404);

    return _possibleConstructorReturn(this, (Status404.__proto__ || Object.getPrototypeOf(Status404)).apply(this, arguments));
  }

  _createClass(Status404, [{
    key: 'render',
    value: function render() {
      var axiomLanguage = this.context.axiomLanguage;

      var _props = this.props,
          contactUsLocation = _props.contactUsLocation,
          homeLocation = _props.homeLocation,
          rest = _objectWithoutProperties(_props, ['contactUsLocation', 'homeLocation']);

      return React.createElement(
        LogoPage,
        rest,
        React.createElement(
          StatusMessage,
          null,
          React.createElement(
            _default3,
            { space: 'x4', textSize: 'display1' },
            React.createElement(
              _default2,
              null,
              t('Ooops!', axiomLanguage)
            )
          ),
          React.createElement(
            _default3,
            { space: 'x4', textSize: 'headline' },
            t('The link you clicked may be broken or ' + 'the page may have been removed', axiomLanguage)
          ),
          React.createElement(
            _default5,
            { space: 'x4' },
            t('Visit the', axiomLanguage),
            ' ',
            React.createElement(
              _default4,
              { href: homeLocation },
              t('home page', axiomLanguage)
            ),
            ' ',
            t('or', axiomLanguage),
            ' ',
            React.createElement(
              _default4,
              { href: contactUsLocation },
              t('contact us', axiomLanguage)
            ),
            ' ',
            t('about the problem', axiomLanguage),
            '.'
          )
        )
      );
    }
  }]);

  return Status404;
}(Component);

Status404.contextTypes = {
  axiomLanguage: PropTypes.string
};
export default Status404;