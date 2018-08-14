var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import TextIcon from '../Typography/TextIcon';

var TableHeaderLabel = function (_Component) {
  _inherits(TableHeaderLabel, _Component);

  function TableHeaderLabel() {
    _classCallCheck(this, TableHeaderLabel);

    return _possibleConstructorReturn(this, (TableHeaderLabel.__proto__ || Object.getPrototypeOf(TableHeaderLabel)).apply(this, arguments));
  }

  _createClass(TableHeaderLabel, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          grow = _props.grow,
          onClick = _props.onClick,
          shrink = _props.shrink,
          sortDirection = _props.sortDirection,
          textAlign = _props.textAlign,
          sortable = _props.sortable,
          rest = _objectWithoutProperties(_props, ['children', 'grow', 'onClick', 'shrink', 'sortDirection', 'textAlign', 'sortable']);

      var className = classnames('ax-table__header-label', 'ax-table__header-label--align-' + textAlign, {
        'ax-table__header-label--grow': grow,
        'ax-table__header-label--selected': sortDirection !== undefined,
        'ax-table__header-label--shrink': shrink
      });

      return React.createElement(
        Base,
        _extends({}, rest, { Component: 'th', className: className }),
        React.createElement(
          'button',
          {
            className: 'ax-table__header-button',
            disabled: !onClick,
            onClick: onClick },
          children,
          sortable && React.createElement(TextIcon, {
            cloak: sortDirection === undefined,
            name: sortDirection === 'descending' ? 'triangle-down' : 'triangle-up',
            spaceLeft: textAlign === 'left' ? 'x2' : undefined,
            spaceRight: textAlign === 'right' ? 'x2' : undefined })
        )
      );
    }
  }]);

  return TableHeaderLabel;
}(Component);

TableHeaderLabel.defaultProps = {
  textAlign: 'left',
  sortable: true
};
export default TableHeaderLabel;