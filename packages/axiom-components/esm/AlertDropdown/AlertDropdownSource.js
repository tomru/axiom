var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import { Component, cloneElement } from 'react';

export var AlertDropdownSourceRef = 'AlertDropdownSource';

var AlertDropdownSource = function (_Component) {
  _inherits(AlertDropdownSource, _Component);

  function AlertDropdownSource(props) {
    _classCallCheck(this, AlertDropdownSource);

    var _this = _possibleConstructorReturn(this, (AlertDropdownSource.__proto__ || Object.getPrototypeOf(AlertDropdownSource)).call(this, props));

    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    return _this;
  }

  _createClass(AlertDropdownSource, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      document.addEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event) {
      var key = event.key;
      var closeDropdown = this.context.closeDropdown;


      if (key === 'Escape') {
        closeDropdown();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['children']);

      return cloneElement(children, rest);
    }
  }]);

  return AlertDropdownSource;
}(Component);

AlertDropdownSource.contextTypes = {
  closeDropdown: PropTypes.func
};
AlertDropdownSource.typeRef = AlertDropdownSourceRef;
export default AlertDropdownSource;