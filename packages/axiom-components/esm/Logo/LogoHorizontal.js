var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Logo from './Logo';

var LogoHorizontal = function (_Component) {
  _inherits(LogoHorizontal, _Component);

  function LogoHorizontal() {
    _classCallCheck(this, LogoHorizontal);

    return _possibleConstructorReturn(this, (LogoHorizontal.__proto__ || Object.getPrototypeOf(LogoHorizontal)).apply(this, arguments));
  }

  _createClass(LogoHorizontal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          height = _props.height,
          width = _props.width,
          rest = _objectWithoutProperties(_props, ['height', 'width']);

      var viewBoxWidth = 150;
      var viewBoxHeight = 30;

      /* eslint-disable max-len, react/jsx-sort-props */
      return React.createElement(
        Logo,
        _extends({}, rest, {
          height: height,
          viewBoxHeight: viewBoxHeight,
          viewBoxWidth: viewBoxWidth,
          width: width }),
        React.createElement(
          'svg',
          {
            height: '100%',
            viewBox: '0 0 ' + viewBoxWidth + ' ' + viewBoxHeight,
            width: '100%',
            x: '0%',
            y: '0%' },
          React.createElement(
            'g',
            { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement(
              'g',
              null,
              React.createElement(
                'g',
                { transform: 'scale(0.478888)' },
                React.createElement('circle', { fill: '#9C7BB8', cx: '20.3741298', cy: '2.27534429', r: '2.06500006' }),
                React.createElement('circle', { fill: '#5CC4E8', cx: '61.5741322', cy: '10.985345', r: '2.82500005' }),
                React.createElement('circle', { fill: '#5CC4E8', cx: '17.6041295', cy: '29.8553445', r: '2.71499991' }),
                React.createElement('circle', { fill: '#F66800', cx: '34.5791282', cy: '29.0703429', r: '8.14999962' }),
                React.createElement('circle', { fill: '#F7BE00', cx: '42.3191285', cy: '17.652957', r: '3.48000002' }),
                React.createElement('circle', { fill: '#FF8D00', cx: '49.9620863', cy: '26.1145755', r: '5.32499981' }),
                React.createElement('circle', { fill: '#8EA534', cx: '65.9654615', cy: '32.8173493', r: '4.45499992' }),
                React.createElement('circle', { fill: '#FF536B', cx: '47.9986497', cy: '39.6703448', r: '6.8499999' }),
                React.createElement('circle', { fill: '#FF8D00', cx: '61.5917036', cy: '48.8870421', r: '2.28500009' }),
                React.createElement('circle', { fill: '#F66800', cx: '36.4091282', cy: '41.2981308', r: '2.5' }),
                React.createElement('circle', { fill: '#F7BE00', cx: '26.1327076', cy: '44.7376828', r: '3.80500007' }),
                React.createElement('circle', { fill: '#969C9E', cx: '1.99602338', cy: '52.6707932', r: '1.95500004' }),
                React.createElement('circle', { fill: '#008FB6', cx: '40.4032226', cy: '59.5205628', r: '2.71499991' })
              ),
              React.createElement('path', { d: 'M50.169,16.117 C50.169,17.471 49.892,18.569 49.369,19.293 C48.882,19.965 48.175,20.291 47.206,20.291 C45.43,20.291 44.636,18.835 44.636,17.394 L44.636,14.45 C44.636,13.012 46.185,12.058 47.21,12.058 C48.177,12.058 48.884,12.383 49.368,13.052 C49.915,13.808 50.169,14.781 50.169,16.117 M47.225,10.057 C48.763,10.064 49.993,10.638 50.882,11.764 C51.759,12.875 52.167,14.258 52.167,16.119 C52.167,18.03 51.747,19.491 50.882,20.587 C49.996,21.712 48.765,22.286 47.225,22.293 L47.21,22.293 C44.512,22.293 42.637,20.278 42.637,17.396 L42.637,5.91 L44.634,5.921 L44.639,10.882 C45.406,10.368 46.319,10.061 47.191,10.057 L47.225,10.057 Z M76.787,10.055 C79.593,10.055 81.269,11.855 81.272,14.87 L81.272,22.098 L79.272,22.098 L79.272,14.852 C79.272,12.327 77.536,12.054 76.789,12.054 C76.042,12.054 74.305,12.327 74.305,14.852 L74.305,22.096 L72.304,22.096 L72.304,14.87 C72.304,11.855 73.98,10.055 76.787,10.055 Z M59.445,12.145 C59.163,12.072 58.901,12.054 58.705,12.054 C57.959,12.054 56.222,12.327 56.222,14.852 L56.222,22.096 L54.221,22.096 L54.221,14.87 C54.221,11.855 55.897,10.056 58.704,10.056 C59.154,10.056 59.575,10.102 59.965,10.192 L59.445,12.145 Z M90.859,5.909 L92.859,5.908 L92.859,17.394 C92.859,20.276 90.985,22.291 88.301,22.291 L88.271,22.291 C86.73,22.284 85.5,21.71 84.611,20.585 C83.746,19.486 83.325,18.025 83.325,16.117 C83.325,14.256 83.733,12.873 84.611,11.763 C85.497,10.636 86.728,10.063 88.268,10.055 L88.302,10.055 C89.175,10.059 90.089,10.367 90.854,10.878 L90.859,5.909 Z M90.86,14.45 C90.86,13.013 89.313,12.06 88.29,12.06 L88.288,12.06 C87.318,12.06 86.612,12.385 86.129,13.054 C85.582,13.808 85.328,14.782 85.328,16.119 C85.328,17.492 85.598,18.562 86.129,19.296 C86.614,19.967 87.322,20.293 88.291,20.293 C90.066,20.293 90.86,18.838 90.86,17.396 L90.86,14.45 Z M134.215,12.054 C133.238,12.054 132.526,12.38 132.04,13.052 C131.5,13.795 131.238,14.817 131.238,16.172 C131.238,17.526 131.5,18.548 132.041,19.294 C132.526,19.965 133.238,20.291 134.215,20.291 C134.965,20.291 135.607,20.075 136.124,19.65 C136.559,19.292 136.79,18.766 136.83,18.045 L138.772,18.151 C138.713,19.495 138.286,20.457 137.43,21.177 C136.551,21.918 135.469,22.293 134.217,22.293 C132.665,22.293 131.424,21.718 130.527,20.584 C129.661,19.489 129.241,18.046 129.241,16.174 C129.241,14.304 129.661,12.86 130.526,11.761 C131.421,10.627 132.663,10.052 134.217,10.052 C135.467,10.052 136.548,10.427 137.43,11.168 C138.29,11.892 138.716,12.827 138.772,14.169 L136.83,14.269 C136.79,13.551 136.559,13.053 136.123,12.693 C135.607,12.269 134.965,12.054 134.215,12.054 Z M145.786,10.055 C147.096,10.055 150,10.724 150,15.03 L150,22.094 L147.992,22.094 L147.992,14.848 C147.992,13.405 147.173,12.083 145.63,12.083 C143.981,12.083 142.996,13.44 142.996,14.932 L142.996,22.096 L140.995,22.096 L140.995,5.929 L142.996,5.929 L142.996,10.991 C143.086,10.921 143.179,10.855 143.274,10.792 C144.013,10.303 144.749,10.055 145.786,10.055 Z M127.469,20.17 L128.585,21.668 C127.622,22.462 126.21,22.585 125.096,22.047 C124.054,21.534 123.293,20.43 123.293,18.775 L123.293,12.343 L122.003,12.343 L122.003,10.336 L123.292,10.336 L123.292,7.973 L125.304,7.973 L125.304,10.338 L127.447,10.338 L127.447,12.345 L125.306,12.345 L125.306,18.778 C125.306,19.458 125.6,19.908 125.939,20.149 C126.402,20.481 126.983,20.547 127.469,20.17 Z M120.247,14.057 L120.247,22.096 L118.69,22.096 L118.626,21.354 C117.725,22.016 116.577,22.293 115.513,22.293 C112.777,22.293 111.009,20.839 111.009,18.589 C111.009,17.348 111.516,16.303 112.439,15.648 C113.462,14.92 114.767,14.859 116.017,14.859 L118.25,14.859 L118.25,14.04 C118.25,13.402 118.061,12.929 117.675,12.594 C117.261,12.236 116.636,12.054 115.817,12.054 C115.051,12.054 114.439,12.229 114,12.573 C113.666,12.836 113.481,13.147 113.435,13.528 L111.494,13.363 C111.542,12.465 111.947,11.691 112.7,11.062 C113.498,10.394 114.547,10.056 115.816,10.056 C117.104,10.056 118.165,10.396 118.971,11.065 C119.817,11.769 120.247,12.775 120.247,14.057 Z M118.248,17.841 L118.248,16.867 L116.048,16.867 C114.996,16.867 114.211,16.896 113.67,17.255 C113.122,17.619 113.008,18.2 113.008,18.624 C113.008,20.139 114.761,20.302 115.513,20.302 C116.775,20.302 118.248,19.658 118.248,17.841 Z M70.09,14.057 L70.09,22.096 L68.534,22.096 L68.469,21.354 C67.57,22.016 66.42,22.293 65.357,22.293 C62.62,22.293 60.852,20.839 60.852,18.589 C60.852,17.348 61.36,16.303 62.282,15.648 C63.306,14.92 64.611,14.859 65.861,14.859 L68.094,14.859 L68.094,14.04 C68.094,13.402 67.905,12.929 67.518,12.594 C67.104,12.236 66.479,12.054 65.661,12.054 C64.894,12.054 64.283,12.229 63.844,12.573 C63.51,12.836 63.325,13.147 63.279,13.528 L61.337,13.363 C61.385,12.465 61.79,11.691 62.543,11.062 C63.342,10.394 64.39,10.056 65.66,10.056 C66.948,10.056 68.009,10.396 68.814,11.065 C69.661,11.769 70.09,12.775 70.09,14.057 Z M68.092,17.841 L68.092,16.867 L65.891,16.867 C64.84,16.867 64.054,16.896 63.514,17.255 C62.966,17.619 62.851,18.2 62.851,18.624 C62.851,20.139 64.604,20.302 65.357,20.302 C66.619,20.302 68.092,19.658 68.092,17.841 Z M108.382,10.252 L110.275,10.252 L106.873,22.098 L104.979,22.098 L102.523,13.549 L100.068,22.098 L98.175,22.098 L94.772,10.252 L96.666,10.252 L99.121,18.801 L101.577,10.252 L103.471,10.252 L105.926,18.801 L108.382,10.252 Z', fill: '#504F4F' })
            )
          )
        )
      );
      /* eslint-enable max-len, react/jsx-sort-props */
    }
  }]);

  return LogoHorizontal;
}(Component);

export default LogoHorizontal;