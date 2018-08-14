import _default from '@brandwatch/axiom-components/dist/Base/Base';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Children, Component, cloneElement } from 'react';
import classnames from 'classnames';

import './DataPoints.css';

export var VB_HEIGHT = 24;

var DataPoints = function (_Component) {
  _inherits(DataPoints, _Component);

  function DataPoints() {
    _classCallCheck(this, DataPoints);

    return _possibleConstructorReturn(this, (DataPoints.__proto__ || Object.getPrototypeOf(DataPoints)).apply(this, arguments));
  }

  _createClass(DataPoints, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          onClick = _props.onClick,
          size = _props.size,
          rest = _objectWithoutProperties(_props, ['children', 'onClick', 'size']);

      var style = { height: size, width: size };
      var classes = classnames('ax-data-points', {
        'ax-data-points--clickable': onClick
      });

      return React.createElement(
        _default,
        _extends({}, rest, {
          Component: 'svg',
          className: classes,
          onClick: onClick,
          preserveAspectRatio: 'xMinYMin meet',
          style: style,
          viewBox: '0 0 ' + VB_HEIGHT + ' ' + VB_HEIGHT }),
        Children.toArray(children).map(function (child, n, _ref) {
          var length = _ref.length;
          return cloneElement(child, { r: VB_HEIGHT / 2 / length * (length - n) });
        })
      );
    }
  }]);

  return DataPoints;
}(Component);

export default DataPoints;