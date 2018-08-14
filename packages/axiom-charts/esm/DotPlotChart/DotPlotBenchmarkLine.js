var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';

var DotPlotBenchmarkLine = function (_Component) {
  _inherits(DotPlotBenchmarkLine, _Component);

  function DotPlotBenchmarkLine() {
    _classCallCheck(this, DotPlotBenchmarkLine);

    return _possibleConstructorReturn(this, (DotPlotBenchmarkLine.__proto__ || Object.getPrototypeOf(DotPlotBenchmarkLine)).apply(this, arguments));
  }

  _createClass(DotPlotBenchmarkLine, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          faded = _props.faded,
          height = _props.height,
          value = _props.value,
          width = _props.width,
          rest = _objectWithoutProperties(_props, ['faded', 'height', 'value', 'width']);

      var style = { height: height, width: width };
      var lineStyle = { left: value + '%' };
      var classes = classnames('ax-dot-plot__benchmark-line', {
        'ax-dot-plot__benchmark-line--faded': faded
      });

      return React.createElement(
        'div',
        _extends({}, rest, { className: classes, style: style }),
        React.createElement('div', { className: 'ax-dot-plot__benchmark-line-path', style: lineStyle })
      );
    }
  }]);

  return DotPlotBenchmarkLine;
}(Component);

DotPlotBenchmarkLine.defaultProps = {
  width: 'auto',
  value: 50
};
export default DotPlotBenchmarkLine;