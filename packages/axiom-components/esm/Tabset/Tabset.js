import _default from '@brandwatch/axiom-utils/dist/isComponent';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component, Children, cloneElement } from 'react';
import omit from 'lodash.omit';

import Base from '../Base/Base';
import Tabs from './Tabs';
import { TabRef } from './Tab';

var Tabset = function (_Component) {
  _inherits(Tabset, _Component);

  function Tabset(props) {
    _classCallCheck(this, Tabset);

    var _this = _possibleConstructorReturn(this, (Tabset.__proto__ || Object.getPrototypeOf(Tabset)).call(this, props));

    _this.state = {
      activeTabIndex: props.activeTabIndex || 0
    };
    return _this;
  }

  _createClass(Tabset, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.children.length !== this.props.children.length) {
        this.setState({ activeTabIndex: 0 });
      }
    }
  }, {
    key: 'activateTab',
    value: function activateTab() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var onClick = arguments[1];

      this.setState({
        activeTabIndex: index
      });

      if (onClick) {
        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        onClick.apply(undefined, args);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          size = _props.size,
          space = _props.space,
          rest = _objectWithoutProperties(_props, ['children', 'size', 'space']);

      var activeTabIndex = this.state.activeTabIndex;

      var arrayChildren = Children.toArray(children);
      var activeTabContent = arrayChildren[activeTabIndex] ? arrayChildren[activeTabIndex].props.children : null;

      var tabs = arrayChildren.filter(function (child) {
        return _default(child, TabRef);
      }).map(function (child, index) {
        return cloneElement(child, {
          active: index === activeTabIndex,
          onClick: function onClick() {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            return _this2.activateTab.apply(_this2, [index, child.props.onClick].concat(args));
          }
        });
      });

      return React.createElement(
        Base,
        omit(rest, ['activeTabIndex']),
        React.createElement(
          Tabs,
          { size: size },
          tabs
        ),
        React.createElement(
          Base,
          { space: space },
          activeTabContent
        )
      );
    }
  }]);

  return Tabset;
}(Component);

Tabset.defaultProps = {
  size: 'medium',
  space: 'x6'
};
export default Tabset;