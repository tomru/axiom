import _default2 from '@brandwatch/axiom-components/dist/Base/Base';
import _default from '@brandwatch/axiom-components/dist/Logo/LogoTab';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';

import './LogoPage.css';

var LOGO_HEIGHT = '7.75rem';
var LOGO_COLOR_MAP = {
  night: 'grey',
  day: 'white'
};

var LogoPage = function (_Component) {
  _inherits(LogoPage, _Component);

  function LogoPage() {
    _classCallCheck(this, LogoPage);

    return _possibleConstructorReturn(this, (LogoPage.__proto__ || Object.getPrototypeOf(LogoPage)).apply(this, arguments));
  }

  _createClass(LogoPage, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          backgroundImage = _props.backgroundImage,
          children = _props.children,
          theme = _props.theme,
          rest = _objectWithoutProperties(_props, ['backgroundImage', 'children', 'theme']);

      var classes = classnames('ax-logo-page', 'ax-logo-page--' + theme);
      var style = {
        backgroundImage: backgroundImage && 'url(' + backgroundImage + ')',
        paddingBottom: LOGO_HEIGHT
      };

      return React.createElement(
        _default2,
        _extends({}, rest, {
          className: classes,
          style: style,
          theme: theme }),
        React.createElement(
          'div',
          { className: 'ax-logo-page__header' },
          React.createElement(_default, { color: LOGO_COLOR_MAP[theme], height: LOGO_HEIGHT })
        ),
        React.createElement(
          'div',
          { className: 'ax-logo-page__body' },
          children
        )
      );
    }
  }]);

  return LogoPage;
}(Component);

export default LogoPage;