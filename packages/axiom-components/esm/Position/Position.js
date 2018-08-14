import _default from '@brandwatch/axiom-utils/dist/findComponent';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import popperJS from 'popper.js';
import omit from 'lodash.omit';
import classnames from 'classnames';

import Portal from '../Portal/Portal';
import { PositionSourceRef } from './PositionSource';
import { PositionTargetRef } from './PositionTarget';
import { placementToPosition, positionToPlacement, getPlacementFlipOrder } from './_utils';
import './Position.css';

/* eslint-disable react/no-find-dom-node */

var Position = function (_Component) {
  _inherits(Position, _Component);

  function Position(props) {
    _classCallCheck(this, Position);

    var _this = _possibleConstructorReturn(this, (Position.__proto__ || Object.getPrototypeOf(Position)).call(this, props));

    _this.handleOnCreate = _this.handleOnCreate.bind(_this);
    _this.handleOnUpdate = _this.handleOnUpdate.bind(_this);
    _this.state = {
      placement: positionToPlacement(props.position, props.offset)
    };
    return _this;
  }

  _createClass(Position, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this._content) {
        this._popper = this.createPopper();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _props = this.props,
          enabled = _props.enabled,
          isVisible = _props.isVisible,
          position = _props.position,
          offset = _props.offset;


      if (enabled && isVisible) {
        if (!this._popper) {
          this._popper = this.createPopper();
        } else {
          this._popper.options.placement = positionToPlacement(position, offset);
          this._popper.update();
        }
      } else if (this._popper) {
        this.destroyPopper();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.destroyPopper();
    }
  }, {
    key: 'createPopper',
    value: function createPopper() {
      var _props2 = this.props,
          boundariesElement = _props2.boundariesElement,
          flip = _props2.flip,
          showArrow = _props2.showArrow;
      var placement = this.state.placement;


      return new popperJS(this._target, this._content, {
        onCreate: this.handleOnCreate,
        onUpdate: this.handleOnUpdate,
        placement: placement,
        modifiers: {
          arrow: {
            enabled: showArrow,
            element: this._arrow
          },
          flip: {
            behavior: getPlacementFlipOrder(placement, flip)
          },
          inner: {
            enabled: false
          },
          offset: {
            enabled: false
          },
          preventOverflow: {
            boundariesElement: boundariesElement
          }
        }
      });
    }
  }, {
    key: 'destroyPopper',
    value: function destroyPopper() {
      if (this._popper) {
        this._popper.destroy();
      }

      delete this._popper;
      delete this._arrow;
      delete this._content;

      var placement = positionToPlacement(this.props.position, this.props.offset);
      if (placement !== this.state.placement) {
        this.setState({ placement: placement });
      }
    }
  }, {
    key: 'handleOnCreate',
    value: function handleOnCreate(popper) {
      var onPositionChange = this.props.onPositionChange;


      this.handleOnUpdate(popper);

      if (onPositionChange) {
        onPositionChange(popper.placement);
      }
    }
  }, {
    key: 'handleOnUpdate',
    value: function handleOnUpdate(_ref) {
      var placement = _ref.placement;
      var onPositionChange = this.props.onPositionChange;
      var statePlacement = this.state.placement;


      if (statePlacement !== placement) {
        this.setState({ placement: placement });

        if (onPositionChange) {
          onPositionChange(placement);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props3 = this.props,
          children = _props3.children,
          enabled = _props3.enabled,
          isVisible = _props3.isVisible,
          onMaskClick = _props3.onMaskClick,
          showArrow = _props3.showArrow,
          rest = _objectWithoutProperties(_props3, ['children', 'enabled', 'isVisible', 'onMaskClick', 'showArrow']);

      var placement = this.state.placement;

      var _placementToPosition = placementToPosition(placement),
          _placementToPosition2 = _slicedToArray(_placementToPosition, 1),
          position = _placementToPosition2[0];

      var classes = classnames('ax-position', {
        'ax-position--arrow': showArrow
      });

      var props = omit(rest, ['flip', 'offset', 'position', 'onPositionChange']);

      return [cloneElement(_default(children, PositionTargetRef), {
        ref: function ref(target) {
          return _this2._target = ReactDOM.findDOMNode(target);
        }
      }), enabled && isVisible ? React.createElement(
        Portal,
        _extends({}, props, { key: 'portal' }),
        React.createElement(
          'div',
          null,
          onMaskClick && React.createElement('div', { className: 'ax-position__mask', onClick: onMaskClick }),
          React.createElement(
            'div',
            { className: classes, ref: function ref(el) {
                return _this2._content = el;
              } },
            cloneElement(_default(children, PositionSourceRef), {
              arrowRef: showArrow ? function (arrow) {
                return _this2._arrow = ReactDOM.findDOMNode(arrow);
              } : undefined,
              position: position
            })
          )
        )
      ) : null];
    }
  }]);

  return Position;
}(Component);

Position.defaultProps = {
  boundariesElement: 'viewport',
  enabled: true,
  flip: 'clockwise',
  offset: 'middle',
  position: 'top',
  showArrow: false
};
export default Position;