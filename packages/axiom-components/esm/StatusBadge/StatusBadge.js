import _default from '@brandwatch/axiom-components/dist/Base/Base';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './StatusBadge.css';

var BADGE_MAP = {
  alpha: {
    "body": "<g fill=\"none\" fill-rule=\"evenodd\"><rect width=\"37\" height=\"12\" fill=\"#3B79CC\" rx=\"2\"/><path fill=\"#FFF\" d=\"M10.105 9H8.77l-.531-1.382H5.805L5.303 9H4l2.37-6.084h1.299L10.105 9zM7.843 6.593l-.838-2.258-.822 2.258h1.66zM10.79 9V2.965h1.229v5.01h3.054V9H10.79zm5.159 0V2.916h1.971c.747 0 1.234.03 1.461.09.349.092.64.29.876.596.235.306.353.701.353 1.185 0 .374-.068.688-.204.942a1.668 1.668 0 0 1-.516.6 1.78 1.78 0 0 1-.637.289c-.294.058-.718.087-1.274.087h-.802V9H15.95zm1.228-5.055V5.67h.673c.484 0 .808-.031.971-.095a.807.807 0 0 0 .384-.299.818.818 0 0 0 .139-.473.786.786 0 0 0-.195-.548.85.85 0 0 0-.494-.27c-.147-.027-.441-.041-.884-.041h-.594zM21.623 9V2.916h1.228V5.31h2.407V2.916h1.229V9h-1.229V6.34h-2.407V9h-1.228zm11.62 0h-1.336l-.531-1.382h-2.432L28.442 9h-1.304l2.37-6.084h1.3L33.243 9zm-2.261-2.407l-.839-2.258-.821 2.258h1.66z\"/></g>",
    "height": "12",
    "viewBox": "0 0 37 12",
    "width": "37"
  },
  beta: {
    "body": "<g fill=\"none\" fill-rule=\"evenodd\"><rect width=\"31\" height=\"12\" fill=\"#3B79CC\" rx=\"2\"/><path fill=\"#FFF\" d=\"M4.623 2.916h2.432c.481 0 .84.02 1.077.06.236.04.448.124.635.25.186.128.342.298.467.51.124.21.186.448.186.711 0 .285-.076.546-.23.784a1.428 1.428 0 0 1-.625.536c.371.108.656.292.855.552.2.26.3.566.3.917 0 .277-.065.546-.194.807-.128.262-.304.47-.527.627a1.74 1.74 0 0 1-.824.288c-.204.023-.698.036-1.481.042H4.623V2.916zM5.85 3.928v1.407h.805c.479 0 .776-.007.893-.02a.812.812 0 0 0 .496-.218c.12-.12.18-.28.18-.476a.668.668 0 0 0-.156-.458c-.103-.118-.258-.19-.462-.214-.122-.014-.472-.02-1.05-.02H5.85zm0 2.42v1.627h1.137c.443 0 .724-.013.843-.037a.761.761 0 0 0 .446-.243c.115-.129.172-.301.172-.517a.794.794 0 0 0-.133-.465.75.75 0 0 0-.384-.278c-.167-.058-.53-.087-1.089-.087h-.992zM10.757 9V2.916h4.511v1.029h-3.283v1.349h3.055v1.025h-3.055v1.656h3.4V9h-4.628zm7.039 0V3.945H15.99v-1.03h4.836v1.03h-1.802V9h-1.228zm9.31 0h-1.337l-.531-1.382h-2.433L22.303 9H21l2.37-6.084h1.299L27.105 9zm-2.263-2.407l-.838-2.258-.822 2.258h1.66z\"/></g>",
    "height": "12",
    "viewBox": "0 0 31 12",
    "width": "31"
  },
  internal: {
    "body": "<g fill=\"none\" fill-rule=\"evenodd\"><rect width=\"51\" height=\"12\" fill=\"#F98A39\" rx=\"2\"/><text fill=\"#FFF\" font-family=\"Arial-BoldMT, Arial\" font-size=\"8.5\" font-weight=\"bold\"><tspan x=\"4\" y=\"9\">INTERNAL</tspan></text></g>",
    "height": "12",
    "viewBox": "0 0 51 12",
    "width": "51"
  },
  new: {
    "body": "<g fill=\"none\" fill-rule=\"evenodd\"><rect width=\"28\" height=\"12\" fill=\"#80BE4C\" rx=\"2\"/><path fill=\"#FFF\" d=\"M4.63 9V2.916h1.196l2.49 4.063V2.916h1.142V9H8.225L5.772 5.032V9H4.631zm6.127 0V2.916h4.511v1.029h-3.283v1.349h3.055v1.025h-3.055v1.656h3.4V9h-4.628zm6.533 0l-1.453-6.084h1.257l.918 4.179 1.112-4.18h1.461l1.067 4.25.933-4.25h1.237L22.345 9h-1.303L19.83 4.451 18.622 9H17.29z\"/></g>",
    "height": "12",
    "viewBox": "0 0 28 12",
    "width": "28"
  },
  prototype: {
    "body": "<g fill=\"none\" fill-rule=\"evenodd\"><rect width=\"60\" height=\"12\" fill=\"#9C73B2\" rx=\"2\"/><path fill=\"#FFF\" d=\"M4.618 9V2.916H6.59c.747 0 1.234.03 1.46.09.35.092.641.29.877.596.235.306.352.701.352 1.185 0 .374-.067.688-.203.942a1.668 1.668 0 0 1-.517.6 1.78 1.78 0 0 1-.637.289c-.293.058-.718.087-1.274.087h-.801V9H4.618zm1.229-5.055V5.67h.672c.485 0 .808-.031.971-.095a.807.807 0 0 0 .384-.299.818.818 0 0 0 .14-.473.786.786 0 0 0-.196-.548.85.85 0 0 0-.494-.27c-.146-.027-.44-.041-.884-.041h-.593zM10.292 9V2.916h2.586c.65 0 1.122.054 1.417.163.295.11.53.304.708.584.177.28.265.599.265.958 0 .457-.134.834-.402 1.131-.269.298-.67.485-1.204.563.266.155.485.325.658.51.173.186.406.515.7.988L15.761 9h-1.469l-.888-1.324c-.316-.473-.531-.771-.648-.894a.943.943 0 0 0-.37-.254c-.13-.045-.335-.068-.617-.068h-.25V9h-1.228zm1.229-3.511h.908c.59 0 .958-.025 1.104-.075a.662.662 0 0 0 .345-.257.792.792 0 0 0 .124-.457.73.73 0 0 0-.163-.496.752.752 0 0 0-.463-.238c-.1-.014-.399-.021-.897-.021h-.958v1.544zm4.656.506c0-.62.093-1.14.278-1.56.139-.31.328-.588.567-.835.24-.246.501-.429.786-.548.38-.16.817-.24 1.312-.24.896 0 1.614.278 2.152.834.538.556.807 1.33.807 2.32 0 .982-.267 1.75-.8 2.306-.535.554-1.249.832-2.143.832-.904 0-1.624-.276-2.158-.828-.534-.552-.8-1.312-.8-2.28zm1.266-.041c0 .689.16 1.21.477 1.566.319.356.723.534 1.212.534.49 0 .892-.177 1.206-.53.314-.352.471-.881.471-1.587 0-.697-.153-1.217-.459-1.56-.305-.344-.711-.515-1.218-.515-.506 0-.914.173-1.224.52-.31.348-.465.872-.465 1.572zM24.407 9V3.945h-1.805v-1.03h4.835v1.03h-1.801V9h-1.229zm3.574-3.005c0-.62.093-1.14.278-1.56.138-.31.327-.588.567-.835.239-.246.501-.429.786-.548.38-.16.816-.24 1.312-.24.896 0 1.613.278 2.152.834.538.556.807 1.33.807 2.32 0 .982-.267 1.75-.801 2.306-.534.554-1.248.832-2.142.832-.905 0-1.624-.276-2.158-.828-.534-.552-.801-1.312-.801-2.28zm1.266-.041c0 .689.159 1.21.477 1.566.318.356.722.534 1.212.534s.892-.177 1.206-.53c.314-.352.47-.881.47-1.587 0-.697-.152-1.217-.458-1.56-.306-.344-.712-.515-1.218-.515s-.914.173-1.224.52c-.31.348-.465.872-.465 1.572zM36.21 9V3.945h-1.805v-1.03h4.835v1.03H37.44V9H36.21zm5.42 0V6.44l-2.228-3.524h1.44l1.432 2.407 1.403-2.407h1.415l-2.237 3.532V9h-1.224zm4.072 0V2.916h1.972c.747 0 1.234.03 1.46.09.35.092.641.29.876.596s.353.701.353 1.185c0 .374-.068.688-.203.942a1.668 1.668 0 0 1-.517.6 1.78 1.78 0 0 1-.637.289c-.293.058-.718.087-1.274.087h-.801V9h-1.229zm1.229-5.055V5.67h.672c.484 0 .808-.031.971-.095a.807.807 0 0 0 .384-.299.818.818 0 0 0 .14-.473.786.786 0 0 0-.196-.548.85.85 0 0 0-.494-.27c-.146-.027-.441-.041-.884-.041h-.593zM51.372 9V2.916h4.512v1.029h-3.283v1.349h3.055v1.025H52.6v1.656h3.4V9h-4.628z\"/></g>",
    "height": "12",
    "viewBox": "0 0 60 12",
    "width": "60"
  }
};

var StatusBadge = function (_Component) {
  _inherits(StatusBadge, _Component);

  function StatusBadge() {
    _classCallCheck(this, StatusBadge);

    return _possibleConstructorReturn(this, (StatusBadge.__proto__ || Object.getPrototypeOf(StatusBadge)).apply(this, arguments));
  }

  _createClass(StatusBadge, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          status = _props.status,
          rest = _objectWithoutProperties(_props, ['status']);

      var _BADGE_MAP$status = BADGE_MAP[status],
          body = _BADGE_MAP$status.body,
          height = _BADGE_MAP$status.height,
          viewBox = _BADGE_MAP$status.viewBox,
          width = _BADGE_MAP$status.width;


      return React.createElement(_default, _extends({}, rest, {
        Component: 'svg',
        className: 'ax-status-badge',
        dangerouslySetInnerHTML: { __html: body },
        height: height,
        viewBox: viewBox,
        width: width }));
    }
  }]);

  return StatusBadge;
}(Component);

export default StatusBadge;