var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Icon from '../Icon/Icon';
import './ButtonIcon.css';

export var ButtonIconRef = 'ButtonIcon';

var ButtonIcon = function (_Component) {
  _inherits(ButtonIcon, _Component);

  function ButtonIcon() {
    _classCallCheck(this, ButtonIcon);

    return _possibleConstructorReturn(this, (ButtonIcon.__proto__ || Object.getPrototypeOf(ButtonIcon)).apply(this, arguments));
  }

  _createClass(ButtonIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isEnd = _props.isEnd,
          isStart = _props.isStart,
          name = _props.name,
          size = _props.size,
          rest = _objectWithoutProperties(_props, ['isEnd', 'isStart', 'name', 'size']);

      var classes = classnames('ax-button__icon', {
        'ax-button__icon--start': isStart,
        'ax-button__icon--end': isEnd
      });

      return React.createElement(
        'span',
        _extends({}, rest, { className: classes }),
        React.createElement(Icon, { name: name, size: size })
      );
    }
  }]);

  return ButtonIcon;
}(Component);

ButtonIcon.defaultProps = {
  size: '1rem'
};
ButtonIcon.typeRef = ButtonIconRef;
export default ButtonIcon;