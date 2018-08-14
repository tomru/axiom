var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './EditableLine.css';

var EditableLine = function (_Component) {
  _inherits(EditableLine, _Component);

  function EditableLine(props) {
    _classCallCheck(this, EditableLine);

    var _this = _possibleConstructorReturn(this, (EditableLine.__proto__ || Object.getPrototypeOf(EditableLine)).call(this, props));

    _this.state = {
      value: props.value
    };
    return _this;
  }

  _createClass(EditableLine, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ value: nextProps.value });
    }
  }, {
    key: 'handleOnBlur',
    value: function handleOnBlur(event) {
      if (this.state.value !== this.props.value) {
        this.props.onChange(this.state.value);
      }

      if (this.props.onBlur) {
        this.props.onBlur(event);
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: 'handleOnKeyDown',
    value: function handleOnKeyDown(event) {
      var _this2 = this;

      switch (event.key) {
        case 'Enter':
          event.preventDefault();
          this.input.blur();
          break;
        case 'Escape':
          this.setState({ value: this.props.value }, function () {
            return _this2.input.blur();
          });
          break;
      }

      if (this.props.onKeyDown) {
        this.props.onKeyDown(event);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var value = this.state.value;

      var _props = this.props,
          placeholder = _props.placeholder,
          rest = _objectWithoutProperties(_props, ['placeholder']);

      return React.createElement(
        'div',
        { className: 'ax-editable-line' },
        React.createElement('input', _extends({}, rest, {
          className: 'ax-editable-line__input',
          onBlur: function onBlur(event) {
            return _this3.handleOnBlur(event);
          },
          onChange: function onChange(event) {
            return _this3.handleChange(event);
          },
          onKeyDown: function onKeyDown(event) {
            return _this3.handleOnKeyDown(event);
          },
          placeholder: placeholder,
          ref: function ref(el) {
            return _this3.input = el;
          },
          value: value })),
        React.createElement(
          'div',
          { className: 'ax-editable-line__structure' },
          value || placeholder || ' '
        )
      );
    }
  }]);

  return EditableLine;
}(Component);

export default EditableLine;