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
import './Icon.css';

var ICON_NAME_MAP = {
  'annotate': {
    "body": "<path d=\"M9.364 12.293c.354.354-.354 1.06-.707.707l-2.475-2.475L3 13l2.475-3.182L3 7.343c-.354-.353.354-1.06.707-.707C5.121 8.05 10.071 4.515 8.657 3.1c-.354-.354.353-1.061.707-.707l1.768 1.767.707.707 1.768 1.768c.353.354-.354 1.06-.707.707-1.415-1.414-4.95 3.536-3.536 4.95z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'arrow-down': {
    "body": "<path d=\"M6.999 2v8.158L4.464 7.621 3.05 9.035l4.242 4.243.707.707 4.95-4.949v-.002l-1.414-1.413-2.536 2.537V2z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'arrow-down-left': {
    "body": "<path fill=\"currentColor\" d=\"M11.53 3.048L5.76 8.817l.002-3.587h-2v7h7v-2H7.176l5.768-5.768z\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'arrow-down-right': {
    "body": "<path fill=\"currentColor\" d=\"M3.055 4.463l5.769 5.769-3.587-.002v2h7v-7h-2l.001 3.587L4.469 3.05z\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'arrow-up': {
    "body": "<path d=\"M9 14V5.842l2.535 2.537 1.414-1.414-4.242-4.243L8 2.015 3.05 6.964v.002l1.414 1.413L7 5.842V14z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'arrow-up-left': {
    "body": "<path fill=\"currentColor\" d=\"M12.945 11.537L7.176 5.768l3.587.002v-2h-7v7h2l-.001-3.587 5.769 5.768z\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'arrow-up-right': {
    "body": "<path fill=\"currentColor\" d=\"M4.475 12.94l5.769-5.77-.001 3.587h2v-7h-7l-.001.001v2l3.588-.001-5.769 5.768z\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'at': {
    "body": "<path fill-rule=\"evenodd\" d=\"M7.988 6A1.99 1.99 0 0 0 6 7.989C6 8.956 6.747 10 7.955 10c1.034 0 1.247-.225 1.3-.639.05-.414.212-2.085.305-2.926C9.204 6.239 8.634 6 7.988 6M8 15c-3.86 0-7-3.141-7-7s3.14-7 7-7 7 2.915 7 6.499c0 1.882-.73 3.353-2 4.035-.934.5-2.003.484-2.79-.039a2.308 2.308 0 0 1-.28-.217c-.443.285-1.07.472-1.975.472-2.043 0-3.705-1.688-3.705-3.761A3.743 3.743 0 0 1 7.988 4.25c1.717 0 3.007 1.025 3.062 1.069l.382.309s-.36 3.274-.432 3.87c-.073.596.766.713 1.171.494.685-.368 1.08-1.276 1.08-2.493 0-2.618-2.357-4.749-5.25-4.749A5.256 5.256 0 0 0 2.75 8 5.256 5.256 0 0 0 8 13.25a4.765 4.765 0 0 0 2.786-.867l1.004 1.433A6.476 6.476 0 0 1 8.001 15\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'bar-chart': {
    "body": "<path d=\"M6.5 2h3v11h-3V2zM11 5h3v8h-3V5zM2 7h3v6H2V7z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'benchmark': {
    "body": "<path d=\"M9.5 12.5a2.988 2.988 0 0 1-2.604-1.54 4.471 4.471 0 0 0 4.064-4.064A2.988 2.988 0 0 1 12.5 9.5c0 1.654-1.346 3-3 3m0-6c0 1.654-1.346 3-3 3 0-1.654 1.346-3 3-3m-6 0c0-1.654 1.346-3 3-3 1.122 0 2.09.626 2.604 1.54A4.471 4.471 0 0 0 5.04 9.104 2.988 2.988 0 0 1 3.5 6.5m7.29-1.29C10.232 3.358 8.534 2 6.5 2A4.5 4.5 0 0 0 2 6.5c0 2.034 1.358 3.732 3.21 4.29C5.768 12.642 7.466 14 9.5 14A4.5 4.5 0 0 0 14 9.5c0-2.034-1.358-3.732-3.21-4.29\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'box-collapse': {
    "body": "<path d=\"M7 12.5V15h2v-2.5h3l-4-4-4 4h3zm2-9V1H7v2.5H4l4 4 4-4H9z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'box-expand': {
    "body": "<path d=\"M9 11V5h3L8 1 4 5h3v6H4l4 4 4-4H9z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'chevron-down': {
    "body": "<path d=\"M4 5L2.5 6.5 8 12l5.5-5.5L12 5 8 9z\" fill-rule=\"nonzero\" fill=\"currentColor\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'chevron-left': {
    "body": "<path d=\"M11 4L9.5 2.5 4 8l5.5 5.5L11 12 7 8z\" fill-rule=\"nonzero\" fill=\"currentColor\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'chevron-right': {
    "body": "<path d=\"M5 12l1.5 1.5L12 8 6.5 2.5 5 4l4 4z\" fill-rule=\"nonzero\" fill=\"currentColor\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'chevron-up': {
    "body": "<path d=\"M12 11l1.5-1.5L8 4 2.5 9.5 4 11l4-4z\" fill-rule=\"nonzero\" fill=\"currentColor\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'clock': {
    "body": "<path d=\"M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1zm0 1.75A5.256 5.256 0 0 0 2.75 8 5.256 5.256 0 0 0 8 13.25 5.256 5.256 0 0 0 13.25 8 5.256 5.256 0 0 0 8 2.75zm1.086 7.75L7 8.414V5.25a1 1 0 0 1 2 0v2.336l1.5 1.5A.999.999 0 1 1 9.086 10.5z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'cloud-upload': {
    "body": "<path d=\"M12.967 7.174C12.797 4.844 10.873 3 8.5 3 6.535 3 4.882 4.268 4.268 6.024A3.489 3.489 0 0 0 1 9.5 3.5 3.5 0 0 0 4.5 13H7v-3H5l3-4 3 4H9v3h3.5l.5-.183A2.993 2.993 0 0 0 15 10a2.99 2.99 0 0 0-2.033-2.826\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'cross': {
    "body": "<g fill-rule=\"nonzero\" stroke=\"currentColor\" stroke-width=\"2.1\" fill=\"none\"><path d=\"M3.75 12.25l8.5-8.5\" class=\"ax-animicon__path-1\"/><path d=\"M3.75 3.75l8.5 8.5\" class=\"ax-animicon__path-2\"/></g>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'customise': {
    "body": "<path d=\"M12.258 5.313a.49.49 0 0 0 .495-.122l1.56-1.56c.09.287.152.587.152.904a3 3 0 0 1-3 3c-.316 0-.615-.064-.902-.155L7.36 10.585c.079.267.133.545.133.838 0 1.659-1.341 3-3 3-.316 0-.615-.062-.901-.152l1.566-1.567a.495.495 0 0 0 .125-.48l-.256-.928a.494.494 0 0 0-.327-.336l-.998-.314a.488.488 0 0 0-.496.121l-1.558 1.56a2.964 2.964 0 0 1-.155-.903 3 3 0 0 1 3-3c.34 0 .662.07.966.173l3.16-3.16a3 3 0 0 1-.152-.902 3 3 0 0 1 3-3c.316 0 .616.062.902.153l-1.566 1.567a.49.49 0 0 0-.127.48l.258.927A.494.494 0 0 0 11.26 5l.998.313z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'data': {
    "body": "<path d=\"M8 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-5 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM8 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM3 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'deck': {
    "body": "<path d=\"M2 3h8v6H2V3zm2 7h7v1H4v-1zm2 2h7v1H6v-1zm6-7v6h-1V5h1zm2 2v6h-1V7h1z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'dot': {
    "body": "<circle cx=\"8\" cy=\"8\" r=\"6\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'dot-outline': {
    "body": "<path d=\"M8 14A6 6 0 1 1 8 2a6 6 0 0 1 0 12zm0-.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'double-chevron-left': {
    "body": "<path d=\"M8 4.5L4.5 8 8 11.5 6.5 13l-5-5 5-5L8 4.5zm5 0L9.5 8l3.5 3.5-1.5 1.5-5-5 5-5L13 4.5z\" fill-rule=\"nonzero\" fill=\"currentColor\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'double-chevron-right': {
    "body": "<path d=\"M3 11.5L6.5 8 3 4.5 4.5 3l5 5-5 5L3 11.5zm5 0L11.5 8 8 4.5 9.5 3l5 5-5 5L8 11.5z\" fill-rule=\"nonzero\" fill=\"currentColor\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'duplicate': {
    "body": "<path d=\"M2 5v9h9v-2H4V5H2zm3 6h9V2H5v9zm2-5h2V4h1v2h2v1h-2v2H9V7H7V6z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'ellipsis': {
    "body": "<path d=\"M8 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'email': {
    "body": "<path d=\"M7.63 8.13L2.15 3.145A.492.492 0 0 1 2.5 3h11a.5.5 0 0 1 .35.145L8.355 8.147a.502.502 0 0 1-.724-.017zm1.414.74L14 4.361v8.14a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V4.36l4.94 4.492a1.5 1.5 0 0 0 1.066.441c.379 0 .756-.142 1.038-.424z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'exclude': {
    "body": "<path fill-rule=\"evenodd\" d=\"M8 13a4.949 4.949 0 0 1-2.496-.691l6.805-6.804C12.736 6.241 13 7.087 13 8a5 5 0 0 1-5 5M3 8a5 5 0 0 1 5-5c.937 0 1.805.274 2.555.724l-6.832 6.831A4.944 4.944 0 0 1 3 8m5-7a7 7 0 1 0 0 14A7 7 0 0 0 8 1\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'facebook': {
    "body": "<g fill-rule=\"nonzero\" fill=\"none\"><path d=\"M15.111 0H.89A.889.889 0 0 0 0 .889V15.11c0 .491.398.889.889.889h7.658V9.813H6.469V7.391h2.078V5.613c0-2.066 1.262-3.193 3.11-3.193.623-.002 1.244.03 1.863.096v2.15h-1.276c-1.002 0-1.197.478-1.197 1.178v1.543h2.397l-.31 2.422h-2.087V16h4.064c.491 0 .889-.398.889-.889V.89A.889.889 0 0 0 15.111 0z\" fill=\"#4267B2\"/><path d=\"M11.047 16V9.813h2.086l.311-2.422h-2.397V5.85c0-.7.195-1.178 1.197-1.178h1.272v-2.16a17.213 17.213 0 0 0-1.863-.095c-1.844 0-3.11 1.126-3.11 3.193v1.778H6.468v2.422h2.078V16h2.5z\" fill=\"#FFF\"/></g>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'filter': {
    "body": "<path d=\"M2 4h12v2H2V4zm2 4h8v2H4V8zm2 4h4v2H6v-2z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'flip-horizontal': {
    "body": "<path d=\"M6.5 8.5l-5 4.041V4.46l5 4.041zm3 0l5-4.041v8.082L9.5 8.5zM7.5 2h1v12h-1V2z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'flip-vertical': {
    "body": "<path d=\"M7.5 6.5l-4.041-5h8.082L7.5 6.5zm0 3l4.041 5H3.46l4.041-5zm6.5-2v1H2v-1h12z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'folder': {
    "body": "<path d=\"M12.465 13H2.78L4.186 7.38A.5.5 0 0 1 4.671 7h8.654a.5.5 0 0 1 .485.622L12.465 13zm-9.18-6.14L2 12V4c0-.276.226-.5.498-.5h3.003c.276 0 .621.184.777.418L7 5h4.504c.274 0 .496.223.496.5V6H4.386c-.657 0-.928.167-1.101.86z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'folder-closed': {
    "body": "<path d=\"M13.5 12V5.5c0-.277-.222-.5-.496-.5H7.5l-.721-1.082a1.037 1.037 0 0 0-.777-.418H2.998A.501.501 0 0 0 2.5 4v8h11z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'followers': {
    "body": "<path d=\"M7.25 5.25a2.25 2.25 0 1 1-4.502-.002 2.25 2.25 0 0 1 4.502.002zM11 7.5a2.25 2.25 0 1 1 .002-4.502A2.25 2.25 0 0 1 11 7.5zm0 1c2.209 0 4 2.015 4 4.5h-5a5.784 5.784 0 0 0-1.294-3.679C9.356 8.808 10.145 8.5 11 8.5zm-6 0c2.209 0 4 2.015 4 4.5H1c0-2.485 1.791-4.5 4-4.5z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'form-resize': {
    "body": "<path d=\"M9.707 13.707a1 1 0 1 1-1.414-1.414l4-4a1 1 0 0 1 1.414 1.414l-4 4zm2.586-11.414a1 1 0 0 1 1.414 1.414l-10 10a1 1 0 1 1-1.414-1.414l10-10z\" fill=\"currentColor\" fill-rule=\"nonzero\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'grid': {
    "body": "<path d=\"M3 3h4v4H3V3zm6 0h4v4H9V3zM3 9h4v4H3V9zm6 0h4v4H9V9z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'hamburger': {
    "body": "<path d=\"M3 3h10v2H3V3zm0 4h10v2H3V7zm0 4h10v2H3v-2z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'heart': {
    "body": "<path d=\"M10.802 3c-1.172 0-2.271.989-2.8 1.547C7.473 3.989 6.374 3 5.202 3 3.199 3 2 4.253 2 6.351 2 8.07 3.474 9.51 3.528 9.56c0 0 4.367 4.44 4.474 4.44.108 0 4.468-4.426 4.468-4.426.061-.064 1.534-1.504 1.534-3.223C14.004 4.253 12.805 3 10.802 3\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'home': {
    "body": "<path fill-rule=\"evenodd\" d=\"M9.504 14.003h2A1 1 0 0 0 12.5 13V8.002h.497c.546 0 .683-.318.29-.712l-4.57-4.577a1.008 1.008 0 0 0-1.422 0L2.725 7.29c-.389.39-.263.712.29.712h.497V13a.993.993 0 0 0 .996 1.003h2v-2.996a1.498 1.498 0 1 1 2.996 0v2.996z\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'information': {
    "body": "<path d=\"M10.5 14h-5v-1.25h1.25V7H5.5V5.75h3.75v7h1.25V14zM9.375 3c0 .759-.617 1.375-1.375 1.375A1.376 1.376 0 0 1 6.625 3c0-.758.617-1.375 1.375-1.375S9.375 2.242 9.375 3z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'information-circle': {
    "body": "<path d=\"M15 8A7 7 0 1 0 1 8a7 7 0 0 0 14 0m1 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.2 6.8v.72h.9v3.58h-.9v.9h3.6v-.9h-.9V6.8H6.2zm2.7-1.775a.876.876 0 1 0-1.751.001.876.876 0 0 0 1.751-.001z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'installation': {
    "body": "<path d=\"M1 3h6v4H1V3zm0 6h6v4H1V9zm8-6h6v4H9V3zm0 6h6v4H9V9z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'instagram': {
    "body": "<defs><path d=\"M8 0C5.827 0 5.555.01 4.702.048 3.85.087 3.269.222 2.76.42a3.921 3.921 0 0 0-1.417.923c-.445.444-.719.89-.923 1.417-.198.509-.333 1.09-.372 1.942C.01 5.555 0 5.827 0 8s.01 2.445.048 3.298c.039.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.719 1.417.923.509.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.445-.01 3.298-.048c.852-.039 1.433-.174 1.942-.372a3.922 3.922 0 0 0 1.417-.923c.445-.444.719-.89.923-1.417.198-.509.333-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.298c-.039-.852-.174-1.433-.372-1.942a3.922 3.922 0 0 0-.923-1.417A3.921 3.921 0 0 0 13.24.42c-.509-.198-1.09-.333-1.942-.372C10.445.01 10.173 0 8 0zm0 1.441c2.136 0 2.39.009 3.233.047.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.009 2.39-.047 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.479 2.479 0 0 1-.598-.92c-.11-.282-.24-.705-.276-1.485-.038-.844-.047-1.097-.047-3.233s.009-2.39.047-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.844-.038 1.097-.047 3.233-.047zm.061 9.308a2.687 2.687 0 1 1 0-5.375 2.687 2.687 0 0 1 0 5.375zm0-6.827a4.14 4.14 0 1 0 0 8.28 4.14 4.14 0 0 0 0-8.28zm5.271-.164a.967.967 0 1 1-1.935 0 .967.967 0 0 1 1.935 0\" id=\"a\"/><radialGradient cx=\"25.156%\" cy=\"100%\" fx=\"25.156%\" fy=\"100%\" r=\"131.971%\" gradientTransform=\"rotate(-41.063 .338 .968) scale(1 .93552)\" id=\"c\"><stop stop-color=\"#FED170\" offset=\"0%\"/><stop stop-color=\"#F9A562\" offset=\"13.295%\"/><stop stop-color=\"#F05048\" offset=\"38.227%\"/><stop stop-color=\"#CE2F88\" offset=\"73.423%\"/><stop stop-color=\"#AC32AE\" offset=\"100%\"/></radialGradient><radialGradient cx=\"4.816%\" cy=\"0%\" fx=\"4.816%\" fy=\"0%\" r=\"158.037%\" gradientTransform=\"matrix(.97886 .20453 -.08519 .4077 .001 -.01)\" id=\"e\"><stop stop-color=\"#4056BA\" offset=\"0%\"/><stop stop-color=\"#7040BA\" stop-opacity=\".892\" offset=\"22.898%\"/><stop stop-color=\"#7040BA\" stop-opacity=\".479\" offset=\"46.167%\"/><stop stop-color=\"#E4644A\" stop-opacity=\"0\" offset=\"100%\"/></radialGradient><path id=\"d\" d=\"M0 0h16v16H0z\"/></defs><g fill=\"none\" fill-rule=\"evenodd\"><mask id=\"b\" fill=\"#fff\"><use xlink:href=\"#a\"/></mask><use fill=\"#0A0B09\" xlink:href=\"#a\"/><g mask=\"url(#b)\"><use fill=\"url(#c)\" xlink:href=\"#d\"/><use fill=\"url(#e)\" xlink:href=\"#d\"/></g></g>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'integrations': {
    "body": "<path d=\"M11.5 9.868a1 1 0 0 1 1-.998c.26 0 .492.106.67.268.222.238.51.362.83.362.69 0 1.25-.671 1.25-1.5 0-.828-.56-1.5-1.25-1.5-.32 0-.608.127-.83.365a.993.993 0 0 1-.67.268 1 1 0 0 1-1-1V3H2v3.133a1 1 0 0 0 1 1c.26 0 .492-.084.67-.247.221-.237.51-.386.83-.386.69 0 1.25.672 1.25 1.5 0 .829-.56 1.5-1.25 1.5-.32 0-.609-.148-.83-.385-.178-.163.09-.245-.17-.245-.551 0-1.499.447-1.5.998V13h9.5V9.868z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'kred': {
    "body": "<path d=\"M12.893 3.948l-8.146 6.448L3 9V4.5A1.5 1.5 0 0 1 4.5 3h7a1.5 1.5 0 0 1 1.393.948zm-7.346 7.09L13 5.138V8.04a2 2 0 0 1-.751 1.562l-4.25 3.4-2.452-1.963z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'line-graph': {
    "body": "<path fill-rule=\"evenodd\" d=\"M12.533 9.055A2.003 2.003 0 0 1 15 11a2 2 0 1 1-3.687-1.073L8.468 5.945a2.003 2.003 0 0 1-1.248-.103L4.842 8.219a2 2 0 1 1-1.06-1.061l2.377-2.377a2 2 0 1 1 3.53.292l2.844 3.982z\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'list': {
    "body": "<path d=\"M3 3h2v2H3V3zm4 0h6v2H7V3zM3 7h2v2H3V7zm4 0h6v2H7V7zm-4 4h2v2H3v-2zm4 0h6v2H7v-2z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'location': {
    "body": "<path d=\"M8 14c-.037 0-4.5-4.5-4.5-7.5a4.5 4.5 0 0 1 9 0c0 3-4.463 7.5-4.5 7.5zm0-6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'magnify-glass': {
    "body": "<path d=\"M4 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm10 5.586l-2.832-2.832C11.692 8.964 12 8.019 12 7a5 5 0 1 0-5 5 4.964 4.964 0 0 0 2.754-.832L12.586 14 14 12.586z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'minus': {
    "body": "<path d=\"M3 7h10v2H3z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'monitor': {
    "body": "<path d=\"M12.25 10.137a.114.114 0 0 1-.113.113H3.863a.114.114 0 0 1-.113-.113V4.863c0-.062.051-.113.113-.113h8.274c.062 0 .113.05.113.113v5.274zM12.137 3H3.863A1.863 1.863 0 0 0 2 4.863v5.274C2 11.166 2.834 12 3.863 12H6v1h4v-1h2.137A1.863 1.863 0 0 0 14 10.137V4.863A1.863 1.863 0 0 0 12.137 3z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'moon': {
    "body": "<path d=\"M7.3 3.049a5.001 5.001 0 1 0 5.651 5.65A4 4 0 1 1 7.3 3.049z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'open': {
    "body": "<path fill-rule=\"evenodd\" d=\"M9.25 2H14v4.75h-1.5V4.5l-5 5-1-1 2.25-2.25L11.5 3.5H9.25V2zm.748 7.001l1.367-1.365c.088.406.134.864.134 1.399v.43c0 1.072-.184 1.837-.534 2.489a3.637 3.637 0 0 1-1.511 1.512c-.652.348-1.418.534-2.49.534h-.429c-1.072 0-1.837-.186-2.489-.534a3.637 3.637 0 0 1-1.512-1.512C2.187 11.302 2 10.537 2 9.465v-.43c0-1.072.186-1.837.534-2.489a3.637 3.637 0 0 1 1.513-1.512c.652-.348 1.417-.534 2.489-.534h.429c.535 0 .992.046 1.4.136L7.25 5.75l-.252.251L6.965 6h-.429c-.8 0-1.335.118-1.782.357-.39.208-.688.506-.897.897-.237.446-.357.98-.357 1.781v.43c0 .801.12 1.335.357 1.781.21.391.508.689.897.897.447.239.981.357 1.782.357h.43c.8 0 1.335-.118 1.781-.357.39-.208.688-.506.897-.897.239-.446.356-.98.356-1.781v-.43-.034z\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'pencil': {
    "body": "<path d=\"M13.352 3.415a.997.997 0 0 1-.001 1.414l-.707.707-2.121-2.122.707-.707a.997.997 0 0 1 1.413-.001l.709.709zM4.158 9.778l6.01-6.01L12.29 5.89 6.28 11.9 4.157 9.78zm-1.767 3.89l1.06-3.183 2.122 2.121-3.182 1.061z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'pinterest': {
    "body": "<g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M8 .001A8 8 0 0 0 5.083 15.45c-.07-.633-.133-1.604.028-2.295.145-.624.938-3.976.938-3.976s-.24-.48-.24-1.188c0-1.112.645-1.943 1.448-1.943.683 0 1.012.513 1.012 1.127 0 .686-.437 1.713-.662 2.664-.189.796.4 1.445 1.184 1.445 1.422 0 2.515-1.5 2.515-3.663 0-1.915-1.376-3.255-3.341-3.255-2.276 0-3.612 1.708-3.612 3.472 0 .687.264 1.425.595 1.826a.24.24 0 0 1 .055.229c-.06.253-.195.796-.222.907-.035.147-.116.178-.267.107-1-.465-1.624-1.926-1.624-3.099 0-2.523 1.833-4.84 5.286-4.84 2.774 0 4.931 1.977 4.931 4.62 0 2.756-1.738 4.975-4.151 4.975-.81 0-1.573-.421-1.833-.918 0 0-.402 1.527-.499 1.901-.18.695-.668 1.566-.994 2.097A8 8 0 1 0 8 .001\" fill=\"#A8242F\"/><path d=\"M5.084 15.45c-.07-.633-.133-1.604.028-2.295.145-.624.938-3.976.938-3.976s-.24-.48-.24-1.188c0-1.112.645-1.943 1.448-1.943.683 0 1.012.513 1.012 1.127 0 .686-.437 1.713-.662 2.664-.189.796.4 1.445 1.184 1.445 1.422 0 2.515-1.5 2.515-3.663 0-1.915-1.376-3.255-3.341-3.255-2.276 0-3.612 1.708-3.612 3.472 0 .687.264 1.425.595 1.826a.24.24 0 0 1 .055.229c-.06.253-.195.796-.222.907-.035.147-.116.178-.267.107-1-.465-1.624-1.926-1.624-3.099 0-2.523 1.833-4.84 5.286-4.84 2.774 0 4.931 1.977 4.931 4.62 0 2.756-1.738 4.975-4.151 4.975-.81 0-1.573-.421-1.833-.918 0 0-.402 1.527-.499 1.901-.18.695-.668 1.566-.994 2.097a2.562 2.562 0 0 1-.547-.193z\" fill=\"#FFF\"/></g>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'plugin': {
    "body": "<path d=\"M12.267 5.151L10.499 6.92l-.78-.78-.634-.634 1.768-1.768a1 1 0 0 0-1.415-1.414L7.671 4.09l-.707-.707-2.475 2.475.035.036a3.98 3.98 0 0 0-.289 4.46L1.66 12.93l1.414 1.414 2.575-2.575a3.98 3.98 0 0 0 4.461-.289l.035.036L12.62 9.04l-.707-.707 1.768-1.768a.999.999 0 1 0-1.414-1.414z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'plus': {
    "body": "<path d=\"M9 7V3H7v4H3v2h4v4h2V9h4V7z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'preview': {
    "body": "<path d=\"M9.5 8a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 9.5 8M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0-7.5C4.134 3.5 1 8 1 8s3.134 4.5 7 4.5S15 8 15 8s-3.134-4.5-7-4.5\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'question-mark': {
    "body": "<path d=\"M6.625 13c0-.759.617-1.375 1.375-1.375s1.375.616 1.375 1.375c0 .758-.617 1.375-1.375 1.375A1.377 1.377 0 0 1 6.625 13zM9 10.25H7v-.188c0-.62.221-1.21.616-1.753.281-.387.615-.701.91-.978l.095-.09c.627-.593.982-.963.976-1.682C9.597 4.674 8.88 4 8 4s-1.597.674-1.597 1.555V6H4.445v-.445A3.56 3.56 0 0 1 8 2a3.565 3.565 0 0 1 3.555 3.553c.009 1.6-1.03 2.583-1.587 3.111l-.078.073c-.275.259-.534.503-.695.723a.91.91 0 0 0-.195.602v.188z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'question-mark-circle': {
    "body": "<path d=\"M15 8A7 7 0 1 0 1 8a7 7 0 0 0 14 0m1 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.778 6.362v.278h1.224v-.278c0-.551.448-.972.998-.972s.998.421.998.974c.004.45-.218.681-.61 1.052l-.059.056a4.337 4.337 0 0 0-.569.611c-.247.339-.385.708-.385 1.096V9.2h1.25v-.021c0-.139.024-.241.122-.377.1-.137.262-.289.434-.451l.049-.046c.348-.33.997-.944.992-1.944A2.228 2.228 0 0 0 8 4.14a2.225 2.225 0 0 0-2.222 2.222zM8.9 11.025a.876.876 0 1 1-1.751-.001.876.876 0 0 1 1.751.001\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'reddit': {
    "body": "<g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0\" fill=\"#FF4500\"/><path d=\"M13.286 7.958a1.167 1.167 0 0 0-1.975-.839c-.798-.575-1.897-.947-3.12-.99l.531-2.5 1.736.369a.831.831 0 0 0 1.663-.04.83.83 0 1 0-1.577-.368l-1.94-.412a.208.208 0 0 0-.247.16l-.593 2.79c-1.242.035-2.358.407-3.166.989a1.167 1.167 0 1 0-1.284 1.905 2.298 2.298 0 0 0-.028.353c0 1.795 2.09 3.25 4.667 3.25s4.667-1.455 4.667-3.25c0-.118-.01-.235-.028-.35.409-.182.694-.59.694-1.067z\" fill=\"#FFF\"/><path d=\"M9.934 10.994c-.568.568-1.658.612-1.979.612-.32 0-1.41-.044-1.978-.612a.216.216 0 0 1 .305-.306c.359.359 1.126.486 1.673.486.548 0 1.315-.127 1.674-.486a.216.216 0 0 1 .305.306zm-.146-1.369a.834.834 0 0 1 0-1.667.834.834 0 0 1 0 1.667zm-4.5-.833a.834.834 0 0 1 1.666 0 .834.834 0 0 1-1.666 0z\" fill=\"#FF4500\"/></g>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'refresh': {
    "body": "<path d=\"M14 8l-1-5.5-1.288 1.788a5.25 5.25 0 1 0 0 7.424l-1.486-1.486A3.137 3.137 0 0 1 8 11.15 3.153 3.153 0 0 1 4.85 8 3.153 3.153 0 0 1 8 4.85c.868 0 1.656.353 2.226.924L8.5 7 14 8z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'replace': {
    "body": "<path d=\"M5 11h9V2H5v9zm6-7l1 1-2.5 2.5L11 9H7V5l1.5 1.5L11 4zM2 5h2v7h7v2H2V5z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'reply': {
    "body": "<path d=\"M7.5 5.5V3L2 7l5.5 4V8.5H10c1.453 0 3.781 1.734 1.141 4.547l.531.547S14 12.281 14 9.75c0-2.531-2-4.25-4-4.25H7.5z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'retweet': {
    "body": "<path d=\"M13 7.5h2l-3 4-3-4h2v-2H7.5L6 3.5h7v4zm-8 3h3.5l1.5 2H3v-4H1l3-4 3 4H5v2z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'ring': {
    "body": "<path d=\"M8 14A6 6 0 1 1 8 2a6 6 0 0 1 0 12zm0-3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'share': {
    "body": "<path d=\"M8.04 4.404L5.128 6.347a2 2 0 1 0 0 3.305l2.914 1.943a2 2 0 1 0 .832-1.248L5.959 8.405a2.01 2.01 0 0 0 0-.81l2.914-1.942a2 2 0 1 0-.832-1.248z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'star': {
    "body": "<path d=\"M8 1.5L6.5 6 2 6.084l3.476 2.869L3.999 13.5 8 10.786l4 2.714-1.476-4.547 3.475-2.869L9.499 6z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'sun': {
    "body": "<path fill-rule=\"evenodd\" d=\"M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM7.375 3.5V1h1.25v2.5h-1.25zm-1.084.29l-1.083.625-1.25-2.165 1.083-.625 1.25 2.165zM4.415 5.209L3.79 6.291l-2.165-1.25.625-1.082 2.165 1.25zM1 8.625v-1.25h2.5v1.25H1zm2.79 1.084l.625 1.082-2.165 1.25-.625-1.082 2.165-1.25zm1.418 1.876l1.083.625-1.25 2.165-1.083-.625 1.25-2.165zM7.375 15v-2.5h1.25V15h-1.25zm2.333-2.79l1.083-.625 1.25 2.165-1.083.625-1.25-2.165zm1.876-1.419l.625-1.082 2.165 1.25-.625 1.082-2.165-1.25zm.916-2.166v-1.25H15v1.25h-2.5zm-.29-2.334l-.626-1.082 2.165-1.25.625 1.082-2.165 1.25zM10.79 4.415L9.708 3.79l1.25-2.165 1.083.625-1.25 2.165z\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'tag': {
    "body": "<path d=\"M6.5 5.501a.997.997 0 0 1-.999 1 1 1 0 1 1 1-1M3.499 2.5a.997.997 0 0 0-.999 1v4.204c0 .364 0 .762.375 1.137l5.433 5.435c.391.39 1.025.39 1.416 0L12 12l2.275-2.276a1 1 0 0 0 0-1.414L8.842 2.875C8.466 2.5 8.069 2.5 7.703 2.5H3.5z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'tick': {
    "body": "<path d=\"M3.25 8.25L6 11l6.75-6.75\" fill-rule=\"nonzero\" stroke=\"currentColor\" stroke-width=\"2.1\" fill=\"none\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'trash': {
    "body": "<path d=\"M4 4.5h8l-.447 8.501a1.06 1.06 0 0 1-1.056.999H5.503a1.066 1.066 0 0 1-1.056-.999L4 4.5zM3.5 3h9v1h-9V3zM7 2h2v1H7V2z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'triangle-down': {
    "body": "<path d=\"M3 4l5.07 8L13 4z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'triangle-left': {
    "body": "<path d=\"M11 3L3 8.07 11 13z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'triangle-right': {
    "body": "<path d=\"M5 13l8-5.07L5 3z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'triangle-up': {
    "body": "<path d=\"M13 12L7.93 4 3 12z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'twitter': {
    "body": "<path d=\"M0 13.526a6.586 6.586 0 0 0 4.86-1.36 3.285 3.285 0 0 1-3.067-2.28c.201.04.407.06.618.06.3 0 .693-.04.968-.115C1.878 9.529.85 8.203.85 6.613c0 .204.846.352 1.384.369C1.352 6.394.721 5.389.721 4.25c0-.601.136-1.166.418-1.65a9.29 9.29 0 0 0 6.754 3.429 3.287 3.287 0 0 1-.092-.747 3.28 3.28 0 0 1 5.674-2.246 6.554 6.554 0 0 0 2.084-.797 3.298 3.298 0 0 1-1.444 1.817A6.56 6.56 0 0 0 16 3.538a6.673 6.673 0 0 1-1.638 1.7c.007.14.01.281.01.424C14.371 10 11.07 15 5.031 15A9.301 9.301 0 0 1 0 13.526z\" fill=\"#1DA1F2\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'unlock': {
    "body": "<path d=\"M6.5 7V4c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5v1H11V4a3 3 0 1 0-6 0v3H3.5v7h9V7h-6z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'warning': {
    "body": "<path d=\"M6.25 2h3.5l-.5 8.25h-2.5L6.25 2zm.375 11c0-.759.617-1.375 1.375-1.375s1.375.616 1.375 1.375c0 .758-.617 1.375-1.375 1.375A1.377 1.377 0 0 1 6.625 13z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  },
  'warning-circle': {
    "body": "<path d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0zm-6.1 3.025a.876.876 0 1 1-1.751-.001.876.876 0 0 1 1.751.001zM6.9 4h2.2l-.2 5.2H7.1L6.9 4z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>",
    "height": "16",
    "viewBox": "0 0 16 16",
    "width": "16"
  }
};

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          inline = _props.inline,
          name = _props.name,
          size = _props.size,
          spaceLeft = _props.spaceLeft,
          spaceRight = _props.spaceRight,
          rest = _objectWithoutProperties(_props, ['className', 'inline', 'name', 'size', 'spaceLeft', 'spaceRight']);

      var style = { width: size, height: size };
      var classes = classnames(className, 'ax-icon', 'ax-icon--' + name, (_classnames = {
        'ax-icon--inline': inline
      }, _defineProperty(_classnames, 'ax-icon--space-left-' + spaceLeft, spaceLeft), _defineProperty(_classnames, 'ax-icon--space-right-' + spaceRight, spaceRight), _classnames));

      if (!ICON_NAME_MAP[name]) {
        return null;
      }

      var _ICON_NAME_MAP$name = ICON_NAME_MAP[name],
          body = _ICON_NAME_MAP$name.body,
          viewBox = _ICON_NAME_MAP$name.viewBox;


      return React.createElement(Base, _extends({}, rest, {
        Component: 'svg',
        className: classes,
        dangerouslySetInnerHTML: { __html: body },
        style: style,
        viewBox: viewBox }));
    }
  }]);

  return Icon;
}(Component);

Icon.defaultProps = {
  size: '1rem'
};
export default Icon;