var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Icon from '../Icon/Icon';
import Link from '../Typography/Link';

export var TextInputIconRef = 'TextInputIcon';

var TextInputIcon = function (_Component) {
  _inherits(TextInputIcon, _Component);

  function TextInputIcon() {
    _classCallCheck(this, TextInputIcon);

    return _possibleConstructorReturn(this, (TextInputIcon.__proto__ || Object.getPrototypeOf(TextInputIcon)).apply(this, arguments));
  }

  _createClass(TextInputIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          align = _props.align,
          name = _props.name,
          onClick = _props.onClick,
          rest = _objectWithoutProperties(_props, ['align', 'name', 'onClick']);

      var className = classnames('ax-input__icon', _defineProperty({}, 'ax-input__icon--align-' + align, align));

      return React.createElement(
        'span',
        { className: className },
        onClick ? React.createElement(
          Link,
          _extends({}, rest, { onClick: onClick, style: 'subtle' }),
          React.createElement(Icon, { name: name, size: '1rem' })
        ) : React.createElement(Icon, { name: name, size: '1rem' })
      );
    }
  }]);

  return TextInputIcon;
}(Component);

TextInputIcon.defaultProps = {
  align: 'right'
};
TextInputIcon.typeRef = TextInputIconRef;
export default TextInputIcon;