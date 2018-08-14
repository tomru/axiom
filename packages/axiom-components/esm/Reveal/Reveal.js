var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import classnames from 'classnames';
import Base from '../Base/Base';
import './Reveal.css';

var Reveal = function (_Component) {
  _inherits(Reveal, _Component);

  function Reveal(props) {
    _classCallCheck(this, Reveal);

    var _this = _possibleConstructorReturn(this, (Reveal.__proto__ || Object.getPrototypeOf(Reveal)).call(this, props));

    _this.state = {
      height: 0,
      overflow: 'hidden'
    };
    return _this;
  }

  _createClass(Reveal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var visible = this.props.visible;


      this.el.addEventListener('transitionend', function () {
        if (_this2.props.visible) {
          _this2.afterReveal();
        }
      });

      if (visible) {
        this.reveal();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var visible = this.props.visible;
      var willBeVisible = nextProps.visible;


      if (visible && !willBeVisible) {
        this.conceal();
      } else if (!visible && willBeVisible) {
        this.reveal();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.cancelAnimationFrame(this._frameId);
    }
  }, {
    key: 'conceal',
    value: function conceal() {
      var _this3 = this;

      this.setState({ overflow: 'hidden' });
      this._frameId = window.requestAnimationFrame(function () {
        _this3.setState({ height: _this3.inner.offsetHeight });
        _this3._frameId = window.requestAnimationFrame(function () {
          _this3.setState({ height: 0, opacity: 0 });
        });
      });
    }
  }, {
    key: 'reveal',
    value: function reveal() {
      this.setState({
        height: this.inner.offsetHeight,
        opacity: 1
      });
    }
  }, {
    key: 'afterReveal',
    value: function afterReveal() {
      this.setState({
        height: undefined,
        overflow: undefined
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _state = this.state,
          height = _state.height,
          opacity = _state.opacity,
          overflow = _state.overflow;

      var _props = this.props,
          children = _props.children,
          space = _props.space,
          visible = _props.visible,
          rest = _objectWithoutProperties(_props, ['children', 'space', 'visible']);

      var style = { height: height, opacity: opacity, overflow: overflow };
      var innerStyle = { overflow: overflow };
      var classes = classnames('ax-reveal', {
        'ax-reveal--visible': visible
      });

      /* eslint-disable react/no-find-dom-node */
      return React.createElement(
        Base,
        _extends({}, rest, {
          className: classes,
          ref: function ref(el) {
            return _this4.el = findDOMNode(el);
          },
          space: visible ? space : 'x0',
          style: style }),
        React.createElement(
          'div',
          {
            className: 'ax-reveal__inner',
            ref: function ref(el) {
              return _this4.inner = el;
            },
            style: innerStyle },
          children
        )
      );
      /* eslint-enable react/no-find-dom-node */
    }
  }]);

  return Reveal;
}(Component);

export default Reveal;