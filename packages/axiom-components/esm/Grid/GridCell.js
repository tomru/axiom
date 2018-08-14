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

var GridCell = function (_Component) {
  _inherits(GridCell, _Component);

  function GridCell() {
    _classCallCheck(this, GridCell);

    return _possibleConstructorReturn(this, (GridCell.__proto__ || Object.getPrototypeOf(GridCell)).apply(this, arguments));
  }

  _createClass(GridCell, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          children = _props.children,
          fill = _props.fill,
          fit = _props.fit,
          full = _props.full,
          none = _props.none,
          width = _props.width,
          shrink = _props.shrink,
          subGrid = _props.subGrid,
          verticalAlign = _props.verticalAlign,
          rest = _objectWithoutProperties(_props, ['children', 'fill', 'fit', 'full', 'none', 'width', 'shrink', 'subGrid', 'verticalAlign']);

      var classes = classnames('ax-grid__cell', (_classnames = {}, _defineProperty(_classnames, 'ax-grid__cell--' + verticalAlign, verticalAlign), _defineProperty(_classnames, 'ax-grid__cell--fill', fill === true), _defineProperty(_classnames, 'ax-grid__cell--fit', fit === true), _defineProperty(_classnames, 'ax-grid__cell--full', full === true), _defineProperty(_classnames, 'ax-grid__cell--none', none === true || width), _defineProperty(_classnames, 'ax-grid__cell--shrink', shrink === true), _defineProperty(_classnames, 'ax-grid__cell--fit--' + fit, fit && fit !== true), _defineProperty(_classnames, 'ax-grid__cell--fill--' + fill, fill && fill !== true), _defineProperty(_classnames, 'ax-grid__cell--full--' + full, full && full !== true), _defineProperty(_classnames, 'ax-grid__cell--none--' + none, none && none !== true), _defineProperty(_classnames, 'ax-grid__cell--shrink--' + shrink, shrink && shrink !== true), _defineProperty(_classnames, 'ax-grid__cell--sub-grid', subGrid), _classnames));

      var styles = {
        width: width && Math.max(0, Math.min(width, 100)) + '%'
      };

      return React.createElement(
        Base,
        _extends({}, rest, { className: classes, style: styles }),
        children
      );
    }
  }]);

  return GridCell;
}(Component);

export default GridCell;