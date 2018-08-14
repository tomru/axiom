var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import { Component } from 'react';

var Validate = function (_Component) {
  _inherits(Validate, _Component);

  function Validate(props) {
    _classCallCheck(this, Validate);

    var _this = _possibleConstructorReturn(this, (Validate.__proto__ || Object.getPrototypeOf(Validate)).call(this, props));

    _this.checkPatternMet = _this.checkPatternMet.bind(_this);
    _this.indexSetter = _this.indexSetter.bind(_this);
    _this.validationGetter = _this.validationGetter.bind(_this);
    _this.state = {
      index: -1
    };
    return _this;
  }

  _createClass(Validate, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (!this.shouldValidate()) return;

      this.context.registerValidate(this.validationGetter, this.indexSetter);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (!this.shouldValidate()) return;

      this.context.unregisterValidate(this.validationGetter, this.indexSetter);
    }
  }, {
    key: 'checkPatternMet',
    value: function checkPatternMet(pattern) {
      return this.context.checkPatternMet(this.state.index, pattern);
    }
  }, {
    key: 'indexSetter',
    value: function indexSetter(index) {
      this.setState({ index: index });
    }
  }, {
    key: 'validationGetter',
    value: function validationGetter() {
      return {
        error: this.props.error,
        patterns: this.props.patterns,
        required: this.props.required,
        value: this.props.value
      };
    }
  }, {
    key: 'shouldValidate',
    value: function shouldValidate() {
      return this.props.patterns || this.props.required;
    }
  }, {
    key: 'render',
    value: function render() {
      var index = this.state.index;
      var children = this.props.children;


      if (index === -1 || !this.shouldValidate()) {
        return children();
      }

      var _context = this.context,
          getValidity = _context.getValidity,
          checkRequiredMet = _context.checkRequiredMet;


      return children(getValidity(index), checkRequiredMet(index), this.checkPatternMet);
    }
  }]);

  return Validate;
}(Component);

Validate.contextTypes = {
  getValidity: PropTypes.func,
  checkPatternMet: PropTypes.func,
  checkRequiredMet: PropTypes.func,
  registerValidate: PropTypes.func,
  unregisterValidate: PropTypes.func
};
export default Validate;