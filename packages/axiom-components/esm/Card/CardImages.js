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
import CardImage from './CardImage';

var CardImages = function (_Component) {
  _inherits(CardImages, _Component);

  function CardImages() {
    _classCallCheck(this, CardImages);

    return _possibleConstructorReturn(this, (CardImages.__proto__ || Object.getPrototypeOf(CardImages)).apply(this, arguments));
  }

  _createClass(CardImages, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          ratios = _props.ratios,
          srcs = _props.srcs,
          rest = _objectWithoutProperties(_props, ['ratios', 'srcs']);

      var ratio = ratios[srcs.length - 1];
      var style = { paddingBottom: ratio };
      var classes = classnames('ax-card__images', 'ax-card__images--' + srcs.length, {
        'ax-card__images--ratio': ratio
      });

      return React.createElement(
        Base,
        _extends({}, rest, { className: classes, style: style }),
        ratio ? React.createElement(
          'div',
          { className: 'ax-card__images-grid' },
          srcs.map(function (src, index) {
            return React.createElement('div', {
              className: 'ax-card__images-grid-item',
              key: index,
              style: { backgroundImage: 'url(' + src + ')' } });
          })
        ) : React.createElement(CardImage, { src: srcs[0] })
      );
    }
  }]);

  return CardImages;
}(Component);

CardImages.defaultProps = {
  ratios: [null, '50%', '75%', '100%']
};
export default CardImages;