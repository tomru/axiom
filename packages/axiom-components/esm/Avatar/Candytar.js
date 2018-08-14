import * as _ from '@brandwatch/axiom-materials/dist/colors';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';

import renderFilter from './_filter';
import './Candytar.css';

var availableColors = Object.keys(_.userDefinedGraphColors);
var defaultPickerFn = function defaultPickerFn(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
};

var Candytar = function (_Component) {
  _inherits(Candytar, _Component);

  function Candytar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Candytar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Candytar.__proto__ || Object.getPrototypeOf(Candytar)).call.apply(_ref, [this].concat(args))), _this), _this.componentWillMount = renderFilter, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Candytar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          picker = _props.picker,
          _props$color = _props.color,
          color = _props$color === undefined ? picker(availableColors) : _props$color,
          size = _props.size;

      var style = { height: size, width: size };
      var classes = classnames('ax-candytar', 'ax-candytar--' + color);

      /* eslint-disable max-len */
      return React.createElement(
        'svg',
        { className: classes, style: style, viewBox: '0 0 32 32' },
        React.createElement('circle', { className: 'ax-candytar__background', cx: '16', cy: '16', r: '16' }),
        React.createElement('path', {
          className: 'ax-candytar__body',
          d: 'M16 20c-4 0-7-3-7-7s3-7 7-7 7 3 7 7-3 7-7 7zM6 28.5c1.7-3.8 5.6-6.5 10-6.5 4.5 0 8.3 2.7 10 6.5C23.4 30.7 20 32 16 32s-7.3-1.3-10-3.5z',
          filter: 'url(#ax-candytar__filter)' })
      );
      /* eslint-enable max-len */
    }
  }]);

  return Candytar;
}(Component);

Candytar.defaultProps = {
  picker: defaultPickerFn
};
export default Candytar;