import _default from '@brandwatch/axiom-materials/dist/importCssVariables';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';

import './globals.css';
_default();
import './Base.css';

var underlineTextSizes = new Set(['display2', 'display1', 'headline', 'body']);

var Base = function (_Component) {
  _inherits(Base, _Component);

  function Base() {
    _classCallCheck(this, Base);

    return _possibleConstructorReturn(this, (Base.__proto__ || Object.getPrototypeOf(Base)).apply(this, arguments));
  }

  _createClass(Base, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          Component = _props.Component,
          className = _props.className,
          cloak = _props.cloak,
          cloakContainer = _props.cloakContainer,
          container = _props.container,
          hiddenUntil = _props.hiddenUntil,
          pointerEventsDisabled = _props.pointerEventsDisabled,
          space = _props.space,
          sticky = _props.sticky,
          textBreak = _props.textBreak,
          textCase = _props.textCase,
          textCenter = _props.textCenter,
          textColor = _props.textColor,
          textEllipsis = _props.textEllipsis,
          textEmphasize = _props.textEmphasize,
          textLeft = _props.textLeft,
          textSize = _props.textSize,
          textRight = _props.textRight,
          textStrike = _props.textStrike,
          textStrong = _props.textStrong,
          textUnderline = _props.textUnderline,
          theme = _props.theme,
          visibleUntil = _props.visibleUntil,
          rest = _objectWithoutProperties(_props, ['Component', 'className', 'cloak', 'cloakContainer', 'container', 'hiddenUntil', 'pointerEventsDisabled', 'space', 'sticky', 'textBreak', 'textCase', 'textCenter', 'textColor', 'textEllipsis', 'textEmphasize', 'textLeft', 'textSize', 'textRight', 'textStrike', 'textStrong', 'textUnderline', 'theme', 'visibleUntil']);

      var underline = textUnderline && underlineTextSizes.has(textSize || 'body') && (textSize || 'body');
      var classes = classnames(className, (_classnames = {
        'ax-cloak': cloak !== undefined,
        'ax-cloak--visible': cloak === false,
        'ax-cloak__container': cloakContainer,
        'ax-container': container
      }, _defineProperty(_classnames, 'ax-hidden-until--' + hiddenUntil, hiddenUntil), _defineProperty(_classnames, 'ax-visible-until--' + visibleUntil, visibleUntil), _defineProperty(_classnames, 'ax-space--' + space, space), _defineProperty(_classnames, 'ax-sticky', sticky), _defineProperty(_classnames, 'ax-text--case-' + textCase, textCase), _defineProperty(_classnames, 'ax-text--align-center', textCenter === true), _defineProperty(_classnames, 'ax-text--align-center--' + textCenter, textCenter && textCenter !== true), _defineProperty(_classnames, 'ax-text--break-' + textBreak, textBreak), _defineProperty(_classnames, 'ax-text--color-' + textColor, textColor), _defineProperty(_classnames, 'ax-text--ellipsis', textEllipsis), _defineProperty(_classnames, 'ax-text--emphasize', textEmphasize), _defineProperty(_classnames, 'ax-text--align-left', textLeft === true), _defineProperty(_classnames, 'ax-text--align-left--' + textLeft, textLeft && textLeft !== true), _defineProperty(_classnames, 'ax-text--align-right', textRight === true), _defineProperty(_classnames, 'ax-text--align-right--' + textRight, textRight && textRight !== true), _defineProperty(_classnames, 'ax-text--size-' + textSize, textSize), _defineProperty(_classnames, 'ax-text--strike', textStrike), _defineProperty(_classnames, 'ax-text--strong', textStrong), _defineProperty(_classnames, 'ax-text--underline-' + underline, underline), _defineProperty(_classnames, 'ax-theme--' + theme, theme), _defineProperty(_classnames, 'ax-pointer--disabled', pointerEventsDisabled), _classnames));

      if (sticky) {
        rest.style = _extends({}, rest.style, {
          top: sticky
        });
      }

      return React.createElement(Component, _extends({}, rest, { className: classes }));
    }
  }]);

  return Base;
}(Component);

Base.defaultProps = {
  Component: 'div'
};
export default Base;