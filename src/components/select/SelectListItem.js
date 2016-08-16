import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

if (__INCLUDE_CSS__) {
  require('./SelectListItem.scss');
}

export default class SelectListItem extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isActive: PropTypes.bool,
    isSelectable: PropTypes.bool,
    isSelected: PropTypes.bool,
  }

  render() {
    const { children, isActive, isSelectable, isSelected, ...rest } = this.props;
    const classes = classnames('ax-select__list-item', {
      'ax-select__list-item--active': isActive,
      'ax-select__list-item--selectable': isSelectable,
      'ax-select__list-item--selected': isSelected,
    });

    return (
      <li { ...rest } className={ classes }>
        { children }
      </li>
    );
  }
}
