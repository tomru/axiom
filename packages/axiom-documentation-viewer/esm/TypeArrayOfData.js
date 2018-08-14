import _default7 from '@brandwatch/axiom-components/dist/Dialog/Dialog';
import _default6 from '@brandwatch/axiom-components/dist/Dialog/DialogFooter';
import _default5 from '@brandwatch/axiom-components/dist/Dialog/DialogBody';
import _default4 from '@brandwatch/axiom-components/dist/Dialog/DialogHeader';
import _default3 from '@brandwatch/axiom-components/dist/Typography/Heading';
import _default2 from '@brandwatch/axiom-components/dist/Button/ButtonGroup';
import _default from '@brandwatch/axiom-components/dist/Button/Button';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Editor from './Editor';

var TypeArrayOf = function (_Component) {
  _inherits(TypeArrayOf, _Component);

  function TypeArrayOf(props) {
    _classCallCheck(this, TypeArrayOf);

    var _this = _possibleConstructorReturn(this, (TypeArrayOf.__proto__ || Object.getPrototypeOf(TypeArrayOf)).call(this, props));

    _this.state = {
      content: JSON.stringify(props.value, null, 2),
      isOpen: false
    };
    return _this;
  }

  _createClass(TypeArrayOf, [{
    key: 'open',
    value: function open() {
      this.setState({ isOpen: true });
    }
  }, {
    key: 'close',
    value: function close() {
      this.setState({ isOpen: false });
    }
  }, {
    key: 'update',
    value: function update() {
      var setValue = this.props.setValue;
      var content = this.state.content;


      this.close();

      if (content) {
        try {
          setValue(JSON.parse(content));
        } catch (e) {
          /* eslint-disable no-console */
          console.error(e);
          /* eslint-enable no-console */
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          content = _state.content,
          isOpen = _state.isOpen;


      return [React.createElement(
        _default2,
        { key: 'button' },
        React.createElement(
          _default,
          {
            onClick: function onClick() {
              return _this2.open();
            },
            size: 'small',
            style: 'secondary' },
          'Open Editor'
        )
      ), React.createElement(
        _default7,
        {
          contentLabel: 'Editor',
          isOpen: isOpen,
          key: 'dialog',
          onRequestClose: function onRequestClose() {
            return _this2.close();
          },
          size: 'medium' },
        React.createElement(
          _default4,
          null,
          React.createElement(
            _default3,
            { textSize: 'headtitle' },
            'Editor'
          )
        ),
        React.createElement(
          _default5,
          null,
          React.createElement(Editor, {
            initialValue: content,
            onChange: function onChange(_ref) {
              var content = _ref.content;
              return _this2.setState({ content: content });
            } })
        ),
        React.createElement(
          _default6,
          null,
          React.createElement(
            _default2,
            { textRight: true },
            React.createElement(
              _default,
              {
                onClick: function onClick() {
                  return _this2.close();
                },
                style: 'secondary' },
              'Cancel'
            ),
            React.createElement(
              _default,
              { onClick: function onClick() {
                  return _this2.update();
                } },
              'Update'
            )
          )
        )
      )];
    }
  }]);

  return TypeArrayOf;
}(Component);

TypeArrayOf.defaultProps = {
  value: []
};
export default TypeArrayOf;