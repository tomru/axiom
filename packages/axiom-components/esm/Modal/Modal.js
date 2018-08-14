var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import Portal from '../Portal/Portal';
import './Modal.css';

var bodyOpenClassName = 'ax-modal__body--open';

var enableScrolling = function enableScrolling() {
  document.body.classList.remove(bodyOpenClassName);
};

var disableScrolling = function disableScrolling() {
  document.body.classList.add(bodyOpenClassName);
};

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.handleEscapeKey = _this.handleEscapeKey.bind(_this);
    return _this;
  }

  _createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.isOpen) {
        disableScrolling();
      }
      if (this.props.shouldCloseOnEsc) {
        document.body.addEventListener('keydown', this.handleEscapeKey, false);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      enableScrolling();
      if (this.props.shouldCloseOnEsc) {
        document.body.removeEventListener('keydown', this.handleEscapeKey, false);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.isOpen) {
        disableScrolling();
      } else {
        enableScrolling();
      }

      if (this.props.shouldCloseOnEsc !== prevProps.shouldCloseOnEsc) {
        this.toggleEscapeEventListener();
      }
    }
  }, {
    key: 'toggleEscapeEventListener',
    value: function toggleEscapeEventListener() {
      if (this.props.shouldCloseOnEsc) {
        document.body.addEventListener('keydown', this.handleEscapeKey, false);
      } else {
        document.body.removeEventListener('keydown', this.handleEscapeKey, false);
      }
    }
  }, {
    key: 'handleEscapeKey',
    value: function handleEscapeKey(event) {
      var _props = this.props,
          onOverlayClick = _props.onOverlayClick,
          shouldCloseOnEsc = _props.shouldCloseOnEsc;


      if (event.key === 'Escape' && shouldCloseOnEsc) {
        if (onOverlayClick) {
          onOverlayClick();
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          isOpen = _props2.isOpen,
          overlayShade = _props2.overlayShade,
          overlayTheme = _props2.overlayTheme,
          onOverlayClick = _props2.onOverlayClick,
          padding = _props2.padding;


      var classes = classnames('ax-modal__container', 'ax-modal__container--padding-' + padding, _defineProperty({}, 'ax-modal__container--overlay-' + overlayShade, overlayShade));

      return isOpen ? React.createElement(
        Portal,
        null,
        React.createElement(
          Base,
          { className: classes, theme: overlayTheme },
          onOverlayClick && React.createElement('div', { className: 'ax-modal__mask', onClick: onOverlayClick }),
          React.createElement(
            'div',
            { className: 'ax-modal' },
            children
          )
        )
      ) : null;
    }
  }]);

  return Modal;
}(Component);

Modal.defaultProps = {
  overlayShade: 'shade-2',
  padding: 'x6'
};
export default Modal;