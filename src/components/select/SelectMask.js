import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

if (__INCLUDE_CSS__) {
  require('./SelectMask.scss');
}

export default class SelectMask extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
  }

  render() {
    const { isOpen, ...rest } = this.props;
    const classes = classnames('ax-select__mask', {
      'ax-select__mask--open': isOpen,
    });

    return (
      <div { ...rest } className={ classes } />
    );
  }
}
