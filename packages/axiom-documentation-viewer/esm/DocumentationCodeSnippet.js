import _default from '@brandwatch/axiom-components/dist/Base/Base';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Prism from 'prismjs';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { html as beautifyHtml } from 'js-beautify';

import 'prismjs/components/prism-json';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-scss';
import './DocumentationCodeSnippet.css';

var DocumentationCodeSnippet = function (_Component) {
  _inherits(DocumentationCodeSnippet, _Component);

  function DocumentationCodeSnippet() {
    _classCallCheck(this, DocumentationCodeSnippet);

    return _possibleConstructorReturn(this, (DocumentationCodeSnippet.__proto__ || Object.getPrototypeOf(DocumentationCodeSnippet)).apply(this, arguments));
  }

  _createClass(DocumentationCodeSnippet, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;

      var code = Prism.highlight(beautifyHtml(children, {
        indent_size: 2,
        preserve_newlines: true,
        unformatted: []
      }), Prism.languages.jsx);

      return React.createElement(
        _default,
        { Component: 'pre', className: 'language-jsx', space: 'x6', theme: 'night' },
        React.createElement('code', {
          className: 'language-jsx',
          dangerouslySetInnerHTML: { __html: code } })
      );
    }
  }]);

  return DocumentationCodeSnippet;
}(Component);

export default DocumentationCodeSnippet;