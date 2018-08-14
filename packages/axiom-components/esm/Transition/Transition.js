import _default2 from '@brandwatch/axiom-components/dist/Base/Base';
import _default from '@brandwatch/axiom-materials/dist/animations';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './Transition.css';

var Transition = function (_Component) {
  _inherits(Transition, _Component);

  function Transition(props) {
    _classCallCheck(this, Transition);

    var _this = _possibleConstructorReturn(this, (Transition.__proto__ || Object.getPrototypeOf(Transition)).call(this, props));

    _this.previousIndex = props.activeIndex;
    return _this;
  }

  _createClass(Transition, [{
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      if (nextProps.activeIndex !== this.props.activeIndex) {
        this.previousIndex = this.props.activeIndex;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          activeIndex = _props.activeIndex,
          children = _props.children,
          height = _props.height,
          width = _props.width,
          rest = _objectWithoutProperties(_props, ['activeIndex', 'children', 'height', 'width']);

      var directionNext = this.previousIndex < activeIndex;
      var duration = _default.transitionTimeSlow;
      var className = directionNext ? 'ax-animate-next' : 'ax-animate-previous';
      var style = {
        animationDuration: duration + 'ms'
      };

      // https://medium.com/lalilo/dynamic-transitions-with-react-router-and-react-transition-group-69ab795815c9
      var childFactoryCreator = function childFactoryCreator(classNames) {
        return function (child) {
          return React.cloneElement(child, {
            classNames: classNames
          });
        };
      };

      return React.createElement(
        TransitionGroup,
        _extends({
          childFactory: childFactoryCreator(className),
          className: 'ax-transition__wrapper',
          component: _default2,
          style: { height: height, width: width }
        }, rest),
        React.createElement(
          CSSTransition,
          { classNames: className, key: activeIndex, timeout: duration },
          React.createElement(
            'div',
            { className: 'ax-transition__item', style: style },
            children[activeIndex]
          )
        )
      );
    }
  }]);

  return Transition;
}(Component);

export default Transition;