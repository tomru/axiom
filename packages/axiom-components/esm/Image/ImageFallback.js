var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import { Component } from 'react';

var cancelable = function cancelable(fn) {
  var cancelled = void 0;

  var wrapped = function wrapped() {
    if (!cancelled) {
      return fn.apply(undefined, arguments);
    }
  };

  wrapped.cancel = function () {
    return cancelled = true;
  };

  return wrapped;
};

var ImageFallback = function (_Component) {
  _inherits(ImageFallback, _Component);

  function ImageFallback(props) {
    _classCallCheck(this, ImageFallback);

    var _this = _possibleConstructorReturn(this, (ImageFallback.__proto__ || Object.getPrototypeOf(ImageFallback)).call(this, props));

    _this.state = {
      useFallback: false
    };
    return _this;
  }

  _createClass(ImageFallback, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          fallback = _props.fallback,
          src = _props.src,
          onError = _props.onError,
          onLoad = _props.onLoad;


      if (src !== undefined && fallback !== undefined) {
        this.image = new window.Image();
        this.image.src = src;
        this.image.onload = cancelable(function () {
          _this2.setState(function (_ref) {
            var useFallback = _ref.useFallback;
            return useFallback && { useFallback: false };
          });
          if (onLoad) onLoad.apply(undefined, arguments);
        });

        this.image.onerror = cancelable(function () {
          _this2.setState(function (_ref2) {
            var useFallback = _ref2.useFallback;
            return !useFallback && { useFallback: true };
          });
          if (onError) onError.apply(undefined, arguments);
        });
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      if (this.image && nextProps.src !== this.props.src) {
        this.image.src = nextProps.src;
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.image) {
        this.image.onload.cancel();
        this.image.onerror.cancel();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          fallback = _props2.fallback,
          src = _props2.src;
      var useFallback = this.state.useFallback;


      if ((!src || useFallback) && fallback) {
        return fallback;
      }

      return children;
    }
  }]);

  return ImageFallback;
}(Component);

export default ImageFallback;