import _default2 from '@brandwatch/axiom-components/dist/Base/Base';
import _default from '@brandwatch/axiom-components/dist/Typography/Small';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';

import './Bar.css';

var FILL_MODE_SOLID = 'solid';
var FILL_MODE_SEMISTRIPED = 'semistriped';
var FILL_MODE_STRIPED = 'striped';

var Bar = function (_Component) {
  _inherits(Bar, _Component);

  function Bar() {
    _classCallCheck(this, Bar);

    return _possibleConstructorReturn(this, (Bar.__proto__ || Object.getPrototypeOf(Bar)).apply(this, arguments));
  }

  _createClass(Bar, [{
    key: 'render',
    value: function render() {
      var direction = this.context.direction;

      var _props = this.props,
          color = _props.color,
          fillMode = _props.fillMode,
          isFaded = _props.isFaded,
          isHidden = _props.isHidden,
          label = _props.label,
          labelStrong = _props.labelStrong,
          onClick = _props.onClick,
          minSize = _props.minSize,
          percent = _props.percent,
          showLabel = _props.showLabel,
          size = _props.size,
          rest = _objectWithoutProperties(_props, ['color', 'fillMode', 'isFaded', 'isHidden', 'label', 'labelStrong', 'onClick', 'minSize', 'percent', 'showLabel', 'size']);

      var isVertical = direction === 'up' || direction === 'down';
      var classes = classnames('ax-bars__bar', {
        'ax-bars__bar--center': size,
        'ax-bars__bar--clickable': onClick,
        'ax-bars__bar--faded': isFaded,
        'ax-bars__bar--hidden': isHidden
      });

      var labelClasses = classnames('ax-bars__bar-label', {
        'ax-bars__bar-label--hidden': !showLabel
      });

      var rectClasses = classnames('ax-bars__bar-rect', 'ax-bars__bar-rect--' + color);

      var stripClasses = classnames({
        'ax-bars__bar--semistriped': fillMode !== FILL_MODE_STRIPED,
        'ax-bars__bar--striped': fillMode === FILL_MODE_STRIPED
      });

      var style = {
        height: isVertical && percent + '%',
        width: !isVertical && percent + '%'
      };

      var rectStyle = {
        height: !isVertical && size,
        minHeight: !isVertical && !size && minSize,
        width: isVertical && size,
        minWidth: isVertical && !size && minSize
      };

      return React.createElement(
        _default2,
        _extends({}, rest, {
          className: classes,
          onClick: onClick,
          style: style }),
        React.createElement(
          'div',
          { className: rectClasses, style: rectStyle },
          fillMode !== FILL_MODE_STRIPED && React.createElement('div', { className: 'ax-bars__bar--solid' }),
          fillMode !== FILL_MODE_SOLID && React.createElement('div', { className: stripClasses })
        ),
        React.createElement(
          'div',
          { className: labelClasses },
          React.createElement(
            _default,
            { textStrong: labelStrong },
            label || percent + '%'
          )
        )
      );
    }
  }]);

  return Bar;
}(Component);

Bar.defaultProps = {
  isFaded: false,
  isHidden: false,
  labelStrong: false,
  minSize: '1rem',
  fillMode: FILL_MODE_SOLID
};
Bar.contextTypes = {
  direction: PropTypes.string.isRequired
};
export default Bar;