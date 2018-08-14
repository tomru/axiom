var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Editor.css';

var brace = void 0;

if (typeof window !== 'undefined') {
  brace = require('brace');
  require('brace/mode/javascript');
  brace.define('ace/theme/dm', function (require, exports) {
    exports.isDark = false;
    exports.cssClass = 'ace-dm';
  });
}

var Editor = function (_Component) {
  _inherits(Editor, _Component);

  function Editor() {
    _classCallCheck(this, Editor);

    return _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).apply(this, arguments));
  }

  _createClass(Editor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          initialValue = _props.initialValue,
          onChange = _props.onChange;


      this.ide = brace.edit(this.el);
      this.ide.setShowPrintMargin(false);
      this.ide.setShowFoldWidgets(false);
      this.ide.setHighlightActiveLine(false);
      this.ide.$blockScrolling = Infinity;
      this.ide.getSession().setMode('ace/mode/javascript');
      this.ide.setTheme('ace/theme/dm');
      this.ide.session.setUseWrapMode(true);
      this.ide.session.setOptions({
        tabSize: 2,
        useSoftTabs: true
      });

      this.ide.setValue(initialValue, 1);
      this.ide.on('change', function () {
        return onChange({ content: _this2.ide.getValue() });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React.createElement('div', {
        className: 'dm-editor',
        ref: function ref(el) {
          return _this3.el = el;
        } });
    }
  }]);

  return Editor;
}(Component);

export default Editor;