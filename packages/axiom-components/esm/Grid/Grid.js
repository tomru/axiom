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
import Base from '../Base/Base';
import './Grid.css';

var Grid = function (_Component) {
  _inherits(Grid, _Component);

  function Grid() {
    _classCallCheck(this, Grid);

    return _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).apply(this, arguments));
  }

  _createClass(Grid, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          children = _props.children,
          fill = _props.fill,
          fit = _props.fit,
          full = _props.full,
          gutters = _props.gutters,
          horizontalAlign = _props.horizontalAlign,
          _props$horizontalGutt = _props.horizontalGutters,
          horizontalGutters = _props$horizontalGutt === undefined ? gutters : _props$horizontalGutt,
          none = _props.none,
          responsive = _props.responsive,
          shrink = _props.shrink,
          verticalAlign = _props.verticalAlign,
          _props$verticalGutter = _props.verticalGutters,
          verticalGutters = _props$verticalGutter === undefined ? gutters : _props$verticalGutter,
          wrap = _props.wrap,
          rest = _objectWithoutProperties(_props, ['children', 'fill', 'fit', 'full', 'gutters', 'horizontalAlign', 'horizontalGutters', 'none', 'responsive', 'shrink', 'verticalAlign', 'verticalGutters', 'wrap']);

      var classes = classnames('ax-grid', (_classnames = {
        'ax-grid--responsive': responsive
      }, _defineProperty(_classnames, 'ax-grid--gutters-horizontal--' + horizontalGutters, typeof horizontalGutters === 'string'), _defineProperty(_classnames, 'ax-grid--gutters-vertical--' + verticalGutters, typeof verticalGutters === 'string'), _defineProperty(_classnames, 'ax-grid--fill', fill === true), _defineProperty(_classnames, 'ax-grid--fill--' + fill, fill && fill !== true), _defineProperty(_classnames, 'ax-grid--fit', fit === true), _defineProperty(_classnames, 'ax-grid--fit--' + fit, fit && fit !== true), _defineProperty(_classnames, 'ax-grid--full', full === true), _defineProperty(_classnames, 'ax-grid--full--' + full, full && full !== true), _defineProperty(_classnames, 'ax-grid--none', none === true), _defineProperty(_classnames, 'ax-grid--none--' + none, none && none !== true), _defineProperty(_classnames, 'ax-grid--shrink', shrink === true), _defineProperty(_classnames, 'ax-grid--shrink--' + shrink, shrink && shrink !== true), _defineProperty(_classnames, 'ax-grid--vertical-' + verticalAlign, verticalAlign), _defineProperty(_classnames, 'ax-grid--horizontal-' + horizontalAlign, horizontalAlign), _defineProperty(_classnames, 'ax-grid--wrap', wrap === true), _classnames));

      return React.createElement(
        Base,
        _extends({ space: 'x6' }, rest, { className: 'ax-grid__container' }),
        React.createElement(
          'div',
          { className: classes },
          children
        )
      );
    }
  }]);

  return Grid;
}(Component);

Grid.defaultProps = {
  responsive: true,
  gutters: 'medium',
  wrap: true
};
export default Grid;