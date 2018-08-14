var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import atIds from '@brandwatch/axiom-automation-testing/ids';
import Icon from '../Icon/Icon';
import PaginationButtonGroup from './PaginationButtonGroup';
import PaginationButton from './PaginationButton';
import { isLargerThanRange, isWithinStartRange, isWithinEndRange, getDisplayRange } from './utils';

var Pagination = function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination() {
    _classCallCheck(this, Pagination);

    return _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).apply(this, arguments));
  }

  _createClass(Pagination, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          currentPage = _props.currentPage,
          displayRange = _props.displayRange,
          onPageChange = _props.onPageChange,
          totalPages = _props.totalPages,
          rest = _objectWithoutProperties(_props, ['currentPage', 'displayRange', 'onPageChange', 'totalPages']);

      var showPrevious = isLargerThanRange(displayRange, totalPages) && !isWithinStartRange(currentPage, displayRange);
      var showNext = isLargerThanRange(displayRange, totalPages) && !isWithinEndRange(currentPage, displayRange, totalPages);

      return React.createElement(
        PaginationButtonGroup,
        rest,
        React.createElement(
          PaginationButton,
          {
            'data-ax-at': atIds.Pagination.previous,
            disabled: currentPage === 1,
            onClick: onPageChange,
            page: currentPage - 1,
            shape: 'circle' },
          React.createElement(Icon, { name: 'chevron-left' })
        ),
        showPrevious && [React.createElement(
          PaginationButton,
          {
            'data-ax-at': atIds.Pagination.first,
            key: 'page-first',
            onClick: onPageChange,
            page: 1 },
          '1'
        ), React.createElement(
          PaginationButton,
          {
            disabled: true,
            key: 'page-first-ellipsis',
            shape: 'circle' },
          React.createElement(Icon, { name: 'ellipsis' })
        )],
        Boolean(displayRange) && getDisplayRange(currentPage, displayRange, totalPages).map(function (n) {
          return React.createElement(
            PaginationButton,
            {
              active: currentPage === n,
              key: n,
              onClick: onPageChange,
              page: n },
            n
          );
        }),
        showNext && [React.createElement(
          PaginationButton,
          {
            disabled: true,
            key: 'page-last-ellipsis',
            shape: 'circle' },
          React.createElement(Icon, { name: 'ellipsis' })
        ), React.createElement(
          PaginationButton,
          {
            'data-ax-at': atIds.Pagination.last,
            key: 'page-last',
            onClick: onPageChange,
            page: totalPages },
          totalPages
        )],
        React.createElement(
          PaginationButton,
          {
            'data-ax-at': atIds.Pagination.next,
            disabled: currentPage === totalPages,
            onClick: onPageChange,
            page: currentPage + 1,
            shape: 'circle' },
          React.createElement(Icon, { name: 'chevron-right' })
        )
      );
    }
  }]);

  return Pagination;
}(Component);

Pagination.defaultProps = {
  displayRange: 5
};
export default Pagination;