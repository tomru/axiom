import _default7 from '@brandwatch/axiom-components/dist/Typography/Link';
import _default6 from '@brandwatch/axiom-components/dist/Grid/Grid';
import _default5 from '@brandwatch/axiom-components/dist/Typography/Strong';
import _default4 from '@brandwatch/axiom-components/dist/Grid/GridCell';
import _default3 from '@brandwatch/axiom-components/dist/Icon/Icon';
import _default2 from '@brandwatch/axiom-components/dist/Reveal/Reveal';
import _default from '@brandwatch/axiom-components/dist/Typography/Small';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component, Children } from 'react';
import classnames from 'classnames';

var ChartTableRows = function (_Component) {
  _inherits(ChartTableRows, _Component);

  function ChartTableRows(props) {
    _classCallCheck(this, ChartTableRows);

    var _this = _possibleConstructorReturn(this, (ChartTableRows.__proto__ || Object.getPrototypeOf(ChartTableRows)).call(this, props));

    _this.state = {
      collapsed: true
    };

    _this.toggleReveal = function () {
      _this.setState({ collapsed: !_this.state.collapsed });
    };
    return _this;
  }

  _createClass(ChartTableRows, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          collapsedVisibleRowCount = _props.collapsedVisibleRowCount,
          expandButtonSuffix = _props.expandButtonSuffix,
          labelColumnWidth = _props.labelColumnWidth,
          space = _props.space,
          xAxisLabels = _props.xAxisLabels,
          zoomTo = _props.zoomTo,
          rest = _objectWithoutProperties(_props, ['children', 'collapsedVisibleRowCount', 'expandButtonSuffix', 'labelColumnWidth', 'space', 'xAxisLabels', 'zoomTo']);

      var collapsed = this.state.collapsed;

      var collapsible = collapsedVisibleRowCount !== undefined && children.length > collapsedVisibleRowCount;

      var zoomWidth = 'calc(' + labelColumnWidth + ' +\n      ((100% - ' + labelColumnWidth + ') / 100) * (' + 100 * (100 / zoomTo) + ')\n    )';

      var classes = classnames('ax-chart-table__rows-container', 'ax-chart-table__rows-container--space-' + space);

      return React.createElement(
        'div',
        _extends({}, rest, { className: classes }),
        React.createElement(
          'div',
          { className: 'ax-chart-table__grid-container', style: { width: zoomWidth } },
          React.createElement(
            'div',
            { className: 'ax-chart-table__grid', style: { left: labelColumnWidth } },
            xAxisLabels.map(function (label, index) {
              return React.createElement(
                'div',
                {
                  className: 'ax-chart-table__grid-line',
                  key: label,
                  style: { left: index * (100 / (xAxisLabels.length - 1)) + '%' } },
                React.createElement(
                  'span',
                  { className: 'ax-chart-table__xAxis-label' },
                  React.createElement(
                    _default,
                    { textBreak: 'none', textColor: 'subtle' },
                    label
                  )
                )
              );
            })
          ),
          collapsible ? Children.toArray(children).slice(0, collapsedVisibleRowCount) : children,
          collapsible && React.createElement(
            _default2,
            { visible: !collapsed },
            Children.toArray(children).slice(collapsedVisibleRowCount)
          )
        ),
        React.createElement(
          'div',
          {
            className: 'ax-chart-table__collapse',
            style: { visibility: collapsible ? 'visible' : 'hidden' } },
          React.createElement(
            _default7,
            { onClick: this.toggleReveal, style: 'subtle' },
            React.createElement(
              _default6,
              { gutters: 'tiny', responsive: false, verticalAlign: 'middle' },
              React.createElement(
                _default4,
                { shrink: true },
                React.createElement(_default3, { name: 'box-' + (collapsed ? 'expand' : 'collapse') })
              ),
              React.createElement(
                _default4,
                { shrink: true },
                React.createElement(
                  _default5,
                  null,
                  collapsed ? 'See All ' + children.length + ' ' + expandButtonSuffix : 'Collapse'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ChartTableRows;
}(Component);

ChartTableRows.defaultProps = {
  expandButtonSuffix: 'Items',
  space: 'x2',
  zoomTo: 100
};
export default ChartTableRows;