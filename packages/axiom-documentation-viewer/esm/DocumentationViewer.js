import _default6 from '@brandwatch/axiom-components/dist/List/List';
import _default5 from '@brandwatch/axiom-components/dist/Typography/Heading';
import _default4 from '@brandwatch/axiom-components/dist/List/ListItem';
import _default3 from '@brandwatch/axiom-components/dist/Typography/Link';
import _default2 from '@brandwatch/axiom-components/dist/Icon/Icon';
import _default from '@brandwatch/axiom-components/dist/Base/Base';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { Switch, Redirect, Route } from 'react-router';
import classnames from 'classnames';

import DocumentationMenu from './DocumentationMenu';
import DocumentationMenuItem from './DocumentationMenuItem';
import './DocumentationViewer.css';

var DocumentationViewer = function (_Component) {
  _inherits(DocumentationViewer, _Component);

  function DocumentationViewer(props) {
    _classCallCheck(this, DocumentationViewer);

    var _this = _possibleConstructorReturn(this, (DocumentationViewer.__proto__ || Object.getPrototypeOf(DocumentationViewer)).call(this, props));

    _this.state = {
      isSidebarOpen: false
    };
    return _this;
  }

  _createClass(DocumentationViewer, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var isSidebarOpen = this.state.isSidebarOpen;

      var _props = this.props,
          Landing = _props.Landing,
          config = _props.config,
          path = _props.path,
          rest = _objectWithoutProperties(_props, ['Landing', 'config', 'path']);

      var classes = classnames('ax-documentation-viewer', {
        'ax-documentation-viewer--sidebar-open': isSidebarOpen
      });

      return React.createElement(
        _default,
        _extends({}, rest, { className: classes }),
        React.createElement(
          _default,
          { className: 'ax-documentation-viewer__sidebar' },
          React.createElement(
            DocumentationMenu,
            null,
            config.map(function (_ref) {
              var id = _ref.id,
                  name = _ref.name;
              return React.createElement(Route, { children: function children(_ref2) {
                  var match = _ref2.match;
                  return React.createElement(
                    DocumentationMenuItem,
                    {
                      active: !!match,
                      onClick: function onClick() {
                        return _this2.setState({ isSidebarOpen: false });
                      },
                      to: path + '/' + id },
                    name
                  );
                }, key: id, path: path + '/' + id });
            })
          )
        ),
        React.createElement(
          _default,
          { className: 'ax-documentation-viewer__body' },
          React.createElement(
            Switch,
            null,
            Landing && React.createElement(Route, { component: Landing, exact: true, path: path }),
            config.map(function (_ref3) {
              var id = _ref3.id,
                  name = _ref3.name,
                  Component = _ref3.Component;
              return React.createElement(Route, { key: id, path: path + '/' + id, render: function render() {
                  return React.createElement(
                    Fragment,
                    null,
                    React.createElement(
                      _default,
                      { space: 'x8' },
                      React.createElement(
                        _default6,
                        { style: 'inline', visibleUntil: 'medium' },
                        React.createElement(
                          _default4,
                          null,
                          React.createElement(
                            _default3,
                            {
                              onClick: function onClick() {
                                return _this2.setState({ isSidebarOpen: true });
                              },
                              style: 'body' },
                            React.createElement(_default2, {
                              name: 'hamburger',
                              size: '1.75rem' })
                          )
                        ),
                        React.createElement(
                          _default4,
                          null,
                          React.createElement(
                            _default5,
                            {
                              textSize: 'display1',
                              textStrong: true },
                            name
                          )
                        )
                      ),
                      React.createElement(
                        _default5,
                        {
                          hiddenUntil: 'medium',
                          textSize: 'display1',
                          textStrong: true },
                        name
                      )
                    ),
                    React.createElement(Component, null)
                  );
                } });
            }),
            !Landing && config[0] && React.createElement(Redirect, { to: path + '/' + config[0].id })
          )
        ),
        React.createElement(_default, {
          className: 'ax-documentation-viewer__mask',
          onClick: function onClick() {
            return _this2.setState({ isSidebarOpen: false });
          } })
      );
    }
  }]);

  return DocumentationViewer;
}(Component);

DocumentationViewer.defaultProps = {
  path: ''
};
export default DocumentationViewer;