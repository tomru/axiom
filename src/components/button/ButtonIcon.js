import React, { Component, PropTypes } from 'react';
import { Icon } from 'bw-axiom';

export default class ButtonIcon extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  render () {
    const { name, size } = this.props;
    const sizeMap = {
      'small': 12,
      'medium': 12,
      'large': 16,
    };

    return (
      <span className="ax-button__icon">
        <Icon name={ name } size={ sizeMap[size] } />
      </span>
    );
  }
}
