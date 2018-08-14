var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import { Component } from 'react';

var getRequiredState = function getRequiredState(_ref) {
  var required = _ref.required,
      value = _ref.value;
  return !required || value !== undefined && value !== null && (typeof value !== 'string' || value.trim() !== '');
};

var getPatternsState = function getPatternsState(_ref2) {
  var patterns = _ref2.patterns,
      value = _ref2.value;
  return Array.isArray(patterns) ? patterns.filter(function (pattern) {
    return pattern instanceof RegExp && !pattern.test(value) || typeof pattern === 'function' && !pattern(value);
  }) : [];
};

var Validation = function (_Component) {
  _inherits(Validation, _Component);

  function Validation(props) {
    _classCallCheck(this, Validation);

    var _this = _possibleConstructorReturn(this, (Validation.__proto__ || Object.getPrototypeOf(Validation)).call(this, props));

    _this._getters = [];
    _this._setters = [];
    _this.getUpdatedValidation = _this.getUpdatedValidation.bind(_this);
    _this.getValidity = _this.getValidity.bind(_this);
    _this.checkPatternMet = _this.checkPatternMet.bind(_this);
    _this.checkRequiredMet = _this.checkRequiredMet.bind(_this);
    _this.registerValidate = _this.registerValidate.bind(_this);
    _this.unregisterValidate = _this.unregisterValidate.bind(_this);
    _this.state = {};
    return _this;
  }

  _createClass(Validation, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        getValidity: this.getValidity,
        checkPatternMet: this.checkPatternMet,
        checkRequiredMet: this.checkRequiredMet,
        registerValidate: this.registerValidate,
        unregisterValidate: this.unregisterValidate
      };
    }
  }, {
    key: 'registerValidate',
    value: function registerValidate(getter, setter) {
      this._getters.push(getter);
      this._setters.push(setter);
      this.setState({
        invalidationIndex: this.getFirstInvalidIndex()
      });

      this.updateIndexes();
    }
  }, {
    key: 'unregisterValidate',
    value: function unregisterValidate(getter, setter) {
      var gIndex = this._getters.indexOf(getter);
      var sIndex = this._setters.indexOf(setter);

      this._getters.splice(gIndex, 1);
      this._setters.splice(sIndex, 1);

      this.updateIndexes();
    }
  }, {
    key: 'updateIndexes',
    value: function updateIndexes() {
      this._setters.forEach(function (setter, index) {
        return setter(index);
      });
    }
  }, {
    key: 'getFirstInvalidIndex',
    value: function getFirstInvalidIndex() {
      if (!this.getOverallRequiredValidity()) return -1;

      var invalidations = this.getAllInvalidations();
      for (var i = 0; i < invalidations.length; i++) {
        if (invalidations[i].length > 0) return i;
      }
      return -1;
    }
  }, {
    key: 'getValidity',
    value: function getValidity(index) {
      var _state = this.state,
          validated = _state.validated,
          invalidationIndex = _state.invalidationIndex;


      if (!validated) {
        return true;
      }

      if (!this.getOverallRequiredValidity()) {
        return this.checkRequiredMet(index);
      }

      if (index !== invalidationIndex) {
        return true;
      }

      return !this.getInvalidations(index).length;
    }
  }, {
    key: 'getErrorMessage',
    value: function getErrorMessage(index) {
      if (!this.getOverallRequiredValidity()) {
        return this.props.requiredError;
      }

      if (index !== -1) {
        var _getters$index = this._getters[index](),
            error = _getters$index.error;

        if (error) return error(this.getInvalidations(index));
      }

      return null;
    }
  }, {
    key: 'getInvalidations',
    value: function getInvalidations(index) {
      return getPatternsState(this._getters[index]());
    }
  }, {
    key: 'getAllInvalidations',
    value: function getAllInvalidations() {
      var _this2 = this;

      return this._getters.map(function (_, index) {
        return _this2.getInvalidations(index);
      });
    }
  }, {
    key: 'getOverallRequiredValidity',
    value: function getOverallRequiredValidity() {
      var _this3 = this;

      return this._getters.every(function (_, index) {
        return _this3.checkRequiredMet(index);
      });
    }
  }, {
    key: 'checkPatternMet',
    value: function checkPatternMet(index, metPattern) {
      return this.getInvalidations(index).indexOf(metPattern) === -1;
    }
  }, {
    key: 'checkRequiredMet',
    value: function checkRequiredMet(index) {
      return getRequiredState(this._getters[index]());
    }
  }, {
    key: 'getUpdatedValidation',
    value: function getUpdatedValidation() {
      var invalidationIndex = this.getFirstInvalidIndex();
      var error = this.getErrorMessage(invalidationIndex);

      this.setState({ invalidationIndex: invalidationIndex, validated: true });

      return error;
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children(this.getUpdatedValidation);
    }
  }]);

  return Validation;
}(Component);

Validation.childContextTypes = {
  getValidity: PropTypes.func.isRequired,
  checkPatternMet: PropTypes.func.isRequired,
  checkRequiredMet: PropTypes.func.isRequired,
  registerValidate: PropTypes.func.isRequired,
  unregisterValidate: PropTypes.func.isRequired
};
export default Validation;