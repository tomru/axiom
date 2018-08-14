import _default9 from '@brandwatch/axiom-components/dist/Base/Base';
import _default8 from '@brandwatch/axiom-components/dist/Table/Table';
import _default7 from '@brandwatch/axiom-components/dist/Table/TableBody';
import _default6 from '@brandwatch/axiom-components/dist/Table/TableRow';
import _default5 from '@brandwatch/axiom-components/dist/Table/TableCell';
import _default4 from '@brandwatch/axiom-components/dist/Typography/Paragraph';
import _default3 from '@brandwatch/axiom-components/dist/Table/TableHeader';
import _default2 from '@brandwatch/axiom-components/dist/Table/TableHeaderLabel';
import _default from '@brandwatch/axiom-components/dist/Typography/Heading';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';

import DocumentationApiRow from './DocumentationApiRow';

var DocumentationApi = function (_Component) {
  _inherits(DocumentationApi, _Component);

  function DocumentationApi() {
    _classCallCheck(this, DocumentationApi);

    return _possibleConstructorReturn(this, (DocumentationApi.__proto__ || Object.getPrototypeOf(DocumentationApi)).apply(this, arguments));
  }

  _createClass(DocumentationApi, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.context.registerPropTypes(this.props.components);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var nextComponents = _ref.components;

      if (this.props.components !== nextComponents) {
        this.context.registerPropTypes(this.props.components);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var components = this.props.components;


      return React.createElement(
        Fragment,
        null,
        components.map(function (_ref2) {
          var name = _ref2.name,
              props = _ref2.props;
          return React.createElement(
            _default9,
            { key: name, space: 'x8' },
            React.createElement(
              _default,
              { textSize: 'headtitle', textStrong: true },
              name
            ),
            React.createElement(
              _default8,
              { space: 'x2' },
              !!Object.keys(props).length && React.createElement(
                _default3,
                null,
                React.createElement(
                  _default2,
                  { sortDirection: 'ascending' },
                  'Property'
                ),
                React.createElement(
                  _default2,
                  null,
                  'Type'
                ),
                React.createElement(
                  _default2,
                  null,
                  'Default'
                ),
                React.createElement(
                  _default2,
                  null,
                  'Control'
                ),
                React.createElement(_default2, { shrink: true, sortable: false })
              ),
              React.createElement(
                _default7,
                null,
                !Object.keys(props).length && React.createElement(
                  _default6,
                  null,
                  React.createElement(
                    _default5,
                    { colSpan: 5 },
                    React.createElement(
                      _default4,
                      { textCenter: true },
                      'There are no configurable props for this component'
                    )
                  )
                ),
                Object.keys(props).map(function (prop) {
                  return React.createElement(DocumentationApiRow, _extends({}, props[prop], {
                    component: name,
                    key: prop,
                    name: prop }));
                })
              )
            )
          );
        })
      );
    }
  }]);

  return DocumentationApi;
}(Component);

DocumentationApi.contextTypes = {
  registerPropTypes: PropTypes.func.isRequired
};
export default DocumentationApi;