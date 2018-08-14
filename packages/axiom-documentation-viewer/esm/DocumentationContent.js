import _default3 from '@brandwatch/axiom-components/dist/Base/Base';
import _default2 from '@brandwatch/axiom-components/dist/Typography/Heading';
import _default from '@brandwatch/axiom-components/dist/Typography/Paragraph';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Children, Component, cloneElement, isValidElement } from 'react';

var DocumentationContent = function (_Component) {
  _inherits(DocumentationContent, _Component);

  _createClass(DocumentationContent, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        applyComponentProps: this.applyComponentProps.bind(this),
        getPropValue: this.getPropValue.bind(this),
        registerPropTypes: this.registerPropTypes.bind(this),
        setValue: this.setValue.bind(this)
      };
    }
  }]);

  function DocumentationContent(props) {
    _classCallCheck(this, DocumentationContent);

    var _this = _possibleConstructorReturn(this, (DocumentationContent.__proto__ || Object.getPrototypeOf(DocumentationContent)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(DocumentationContent, [{
    key: 'registerPropTypes',
    value: function registerPropTypes(components) {
      this.setState(components.reduce(function (propTypes, _ref) {
        var name = _ref.name,
            props = _ref.props;
        return _extends({}, propTypes, _defineProperty({}, name, props));
      }, {}));
    }
  }, {
    key: 'setValue',
    value: function setValue(componentName, prop, value) {
      this.setState(_defineProperty({}, componentName + '.' + prop, value));
    }
  }, {
    key: 'getPropValue',
    value: function getPropValue(componentName, prop) {
      return this.state[componentName + '.' + prop];
    }
  }, {
    key: 'getComponentProps',
    value: function getComponentProps(componentName) {
      var _this2 = this;

      return Object.keys(this.state).filter(function (key) {
        return key.indexOf(componentName + '.') === 0;
      }).reduce(function (props, key) {
        if (_this2.state[key] !== undefined) {
          var _key$split = key.split('.'),
              _key$split2 = _slicedToArray(_key$split, 2),
              prop = _key$split2[1];

          if (_this2.isComponentPropFunc(componentName, prop)) {
            if (_this2.state[key]) {
              props[prop] = function () {};
            }
          } else {
            props[prop] = _this2.state[key];
          }
        }

        return props;
      }, {});
    }
  }, {
    key: 'isComponentPropFunc',
    value: function isComponentPropFunc(componentName, prop) {
      return this.state[componentName][prop].type.name === 'func';
    }
  }, {
    key: 'interceptFuncProps',
    value: function interceptFuncProps(componentName, props) {
      var _this3 = this;

      var defaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (!this.state[componentName]) {
        return {};
      }

      return Object.keys(props).filter(function (prop) {
        return _this3.state[componentName][prop] && _this3.isComponentPropFunc(componentName, prop) && props[prop] && (!props[prop].prototype || !props[prop].prototype.isReactComponent) && props[prop] !== defaultProps[prop];
      }).reduce(function (nextProps, prop) {
        return _extends({}, nextProps, _defineProperty({}, prop, function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return props[prop].apply(props, [_this3.setValue.bind(_this3), _this3.getPropValue.bind(_this3)].concat(args));
        }));
      }, {});
    }
  }, {
    key: 'applyComponentProps',
    value: function applyComponentProps(component) {
      var _this4 = this;

      if (Array.isArray(component)) {
        return Children.map(component, function (child) {
          return _this4.applyComponentProps(child);
        });
      }

      if (!isValidElement(component) || !component.type) {
        return component;
      }

      var props = _extends({}, this.getComponentProps(component.type.displayName || component.type.name), this.interceptFuncProps(component.type.displayName || component.type.name, component.props, component.type.defaultProps));

      if (component.props.children) {
        props.children = Array.isArray(component.props.children) ? Children.map(component.props.children, function (child) {
          return _this4.applyComponentProps(child);
        }) : this.applyComponentProps(component.props.children);
      }

      return cloneElement(component, props);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          description = _props.description;


      return React.createElement(
        _default3,
        { space: 'x8' },
        description && React.createElement(
          _default,
          null,
          description
        ),
        React.createElement(
          _default2,
          { space: 'x4', textSize: 'headtitle' },
          'Examples'
        ),
        children
      );
    }
  }]);

  return DocumentationContent;
}(Component);

DocumentationContent.childContextTypes = {
  applyComponentProps: PropTypes.func.isRequired,
  getPropValue: PropTypes.func.isRequired,
  registerPropTypes: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired
};
export default DocumentationContent;