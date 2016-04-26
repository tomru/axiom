import React, { Component, PropTypes } from 'react';
import { PROP_TYPES_GLOBAL, PROP_TYPES_TEXT, mergeDefaultClassName } from '../../defaults';

export default class Card extends Component {
  static propTypes = {
    ...PROP_TYPES_GLOBAL,
    ...PROP_TYPES_TEXT,
    children: PropTypes.node,
    transparent: PropTypes.bool,
  };

  render() {
    const {
      children,
      transparent,
    } = this.props;

    const className = mergeDefaultClassName(this.props,
      'ax-card', {
        'ax-card--transparent': transparent === true,
      },
    );

    return (
      <div {...this.props} className={className}>
        {children}
      </div>
    );
  }
}
