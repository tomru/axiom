var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import Icon from '../Icon/Icon';
import DockItem from './DockItem';

var DockIconLink = function (_Component) {
  _inherits(DockIconLink, _Component);

  function DockIconLink() {
    _classCallCheck(this, DockIconLink);

    return _possibleConstructorReturn(this, (DockIconLink.__proto__ || Object.getPrototypeOf(DockIconLink)).apply(this, arguments));
  }

  _createClass(DockIconLink, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          active = _props.active,
          rest = _objectWithoutProperties(_props, ['icon', 'active']);

      var classes = classnames('ax-dock__icon-link', {
        'ax-dock__icon-link--active': active
      });

      return React.createElement(
        DockItem,
        null,
        React.createElement(
          Base,
          _extends({ Component: 'a' }, rest, { className: classes }),
          React.createElement(Icon, { name: icon, size: '2rem' })
        )
      );
    }
  }]);

  return DockIconLink;
}(Component);

export default DockIconLink;