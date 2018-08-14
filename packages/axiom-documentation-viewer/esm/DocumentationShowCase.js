import _default17 from '@brandwatch/axiom-components/dist/Card/Card';
import _default16 from '@brandwatch/axiom-components/dist/Grid/Grid';
import _default15 from '@brandwatch/axiom-components/dist/Grid/GridCell';
import _default14 from '@brandwatch/axiom-components/dist/List/List';
import _default13 from '@brandwatch/axiom-components/dist/Dropdown/Dropdown';
import _default12 from '@brandwatch/axiom-components/dist/Dropdown/DropdownSource';
import _default11 from '@brandwatch/axiom-components/dist/Dropdown/DropdownContext';
import _default10 from '@brandwatch/axiom-components/dist/Dropdown/DropdownMenu';
import _default9 from '@brandwatch/axiom-components/dist/Dropdown/DropdownMenuItem';
import _default8 from '@brandwatch/axiom-components/dist/Dropdown/DropdownTarget';
import _default7 from '@brandwatch/axiom-components/dist/List/ListItem';
import _default6 from '@brandwatch/axiom-components/dist/Typography/Link';
import _default5 from '@brandwatch/axiom-components/dist/Icon/Icon';
import _default4 from '@brandwatch/axiom-components/dist/AlertBar/AlertBar';
import _default3 from '@brandwatch/axiom-components/dist/Card/CardContent';
import _default2 from '@brandwatch/axiom-components/dist/Cloak/Cloak';
import _default from '@brandwatch/axiom-components/dist/Base/Base';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Children, Component } from 'react';
import reactElementToJsxString from 'react-element-to-jsx-string';

import DocumentationCodeSnippet from './DocumentationCodeSnippet';
import './DocumentationShowCase.css';

var hasCustomPropertySupport = typeof window !== 'undefined' && window.CSS && CSS.supports('color', 'var(--primary)');

var DocumentationShowCase = function (_Component) {
  _inherits(DocumentationShowCase, _Component);

  function DocumentationShowCase(props) {
    _classCallCheck(this, DocumentationShowCase);

    var _this = _possibleConstructorReturn(this, (DocumentationShowCase.__proto__ || Object.getPrototypeOf(DocumentationShowCase)).call(this, props));

    _this.state = {
      isCodeVisisble: false,
      theme: undefined
    };
    return _this;
  }

  _createClass(DocumentationShowCase, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          centered = _props.centered,
          _props$centeredHorizo = _props.centeredHorizontal,
          centeredHorizontal = _props$centeredHorizo === undefined ? centered : _props$centeredHorizo,
          _props$centeredVertic = _props.centeredVertical,
          centeredVertical = _props$centeredVertic === undefined ? centered : _props$centeredVertic,
          children = _props.children,
          configurations = _props.configurations,
          description = _props.description,
          height = _props.height,
          hideCode = _props.hideCode,
          hidePreview = _props.hidePreview,
          minHeight = _props.minHeight,
          onRefresh = _props.onRefresh;
      var _state = this.state,
          isCodeVisisble = _state.isCodeVisisble,
          theme = _state.theme;

      var showCase = this.context.applyComponentProps(children);
      var style = {
        height: height,
        minHeight: !height && minHeight,
        alignItems: centeredHorizontal && 'center',
        justifyContent: centeredVertical && 'center'
      };

      var snippet = void 0;
      var error = void 0;

      if (!hideCode && (hidePreview || isCodeVisisble)) {
        try {
          snippet = (Children.map(showCase, function (child) {
            return reactElementToJsxString(child, {
              showDefaultProps: false,
              filterProps: ['key']
            });
          }) || []).join('\n');
        } catch (e) {
          error = e;
        }
      }

      return React.createElement(
        _default17,
        { border: true, space: 'x8', theme: theme },
        React.createElement(
          _default3,
          { separatorStyle: 'dotted', size: 'large' },
          React.createElement(
            _default,
            { cloak: hidePreview || isCodeVisisble },
            !centeredHorizontal && !centeredVertical ? React.createElement(
              'div',
              { style: style },
              showCase
            ) : React.createElement(
              'div',
              { className: 'ax-documentation-viewer__showcase-container' },
              React.createElement(
                'div',
                { className: 'ax-documentation-viewer__showcase', style: style },
                React.createElement(
                  'div',
                  null,
                  showCase
                )
              )
            )
          ),
          snippet && React.createElement(
            _default2,
            {
              className: 'ax-documentation-viewer__showcase-snippet',
              invisible: !hidePreview && !isCodeVisisble,
              theme: 'night' },
            React.createElement(
              DocumentationCodeSnippet,
              null,
              snippet
            )
          )
        ),
        error && React.createElement(
          _default4,
          { type: 'error' },
          'Failed to render code snippet: ',
          error.toString()
        ),
        description && React.createElement(
          _default3,
          { separatorStyle: 'dotted', textColor: 'subtle' },
          description
        ),
        (!hideCode || configurations) && !error && React.createElement(
          _default3,
          { size: 'small' },
          React.createElement(
            _default16,
            { responsive: false, verticalAlign: 'middle' },
            React.createElement(
              _default15,
              null,
              (onRefresh || configurations || !hidePreview && hasCustomPropertySupport) && React.createElement(
                _default14,
                { style: 'inline' },
                !hidePreview && hasCustomPropertySupport && React.createElement(
                  _default7,
                  null,
                  React.createElement(
                    _default6,
                    {
                      onClick: function onClick() {
                        return _this2.setState({ theme: 'day' });
                      },
                      style: theme === 'day' ? 'normal' : 'subtle' },
                    React.createElement(_default5, { inline: true, name: 'sun' })
                  ),
                  ' / ',
                  React.createElement(
                    _default6,
                    {
                      onClick: function onClick() {
                        return _this2.setState({ theme: 'night' });
                      },
                      style: theme === 'night' ? 'normal' : 'subtle' },
                    React.createElement(_default5, { inline: true, name: 'moon' })
                  )
                ),
                configurations && React.createElement(
                  _default7,
                  null,
                  React.createElement(
                    _default13,
                    { flip: 'mirror', showArrow: true },
                    React.createElement(
                      _default8,
                      null,
                      React.createElement(
                        _default6,
                        { style: 'subtle' },
                        React.createElement(_default5, { name: 'customise' })
                      )
                    ),
                    React.createElement(
                      _default12,
                      null,
                      React.createElement(
                        _default11,
                        null,
                        configurations.map(function (items, index) {
                          return React.createElement(
                            _default10,
                            { key: index },
                            items.map(function (_ref) {
                              var name = _ref.name,
                                  props = _objectWithoutProperties(_ref, ['name']);

                              return React.createElement(
                                _default9,
                                _extends({}, props, { key: name }),
                                name
                              );
                            })
                          );
                        })
                      )
                    )
                  )
                ),
                onRefresh && React.createElement(
                  _default7,
                  null,
                  React.createElement(
                    _default6,
                    { onClick: onRefresh, style: 'subtle' },
                    React.createElement(_default5, { name: 'retweet' })
                  )
                )
              )
            ),
            !hideCode && React.createElement(
              _default15,
              { none: true },
              React.createElement(
                _default6,
                {
                  onClick: function onClick() {
                    return _this2.setState(function (_ref2) {
                      var isCodeVisisble = _ref2.isCodeVisisble;
                      return { isCodeVisisble: !isCodeVisisble };
                    });
                  },
                  textCase: 'upper',
                  textColor: 'subtle',
                  textSize: 'small',
                  textStrong: true },
                isCodeVisisble ? 'Hide' : 'Show',
                ' code'
              )
            )
          )
        )
      );
    }
  }]);

  return DocumentationShowCase;
}(Component);

DocumentationShowCase.contextTypes = {
  applyComponentProps: PropTypes.func.isRequired
};
DocumentationShowCase.defaultProps = {
  minHeight: '12rem'
};
export default DocumentationShowCase;