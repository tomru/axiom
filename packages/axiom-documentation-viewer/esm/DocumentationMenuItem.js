import _default from '@brandwatch/axiom-components/dist/Base/Base';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import classnames from 'classnames';

var DocumentationMenuItem = function (_Component) {
  _inherits(DocumentationMenuItem, _Component);

  function DocumentationMenuItem() {
    _classCallCheck(this, DocumentationMenuItem);

    return _possibleConstructorReturn(this, (DocumentationMenuItem.__proto__ || Object.getPrototypeOf(DocumentationMenuItem)).apply(this, arguments));
  }

  _createClass(DocumentationMenuItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          children = _props.children,
          to = _props.to,
          rest = _objectWithoutProperties(_props, ['active', 'children', 'to']);

      var classes = classnames('ax-documentation-viewer__menu-item', {
        'ax-documentation-viewer__menu-item--active': active
      });

      return React.createElement(
        _default,
        _extends({}, rest, {
          Component: 'li',
          className: classes,
          textSize: 'large',
          textStrong: true }),
        React.createElement(
          _default,
          {
            Component: RouterLink,
            className: 'ax-documentation-viewer__link',
            to: to },
          children
        )
      );
    }
  }]);

  return DocumentationMenuItem;
}(Component);

export default DocumentationMenuItem;