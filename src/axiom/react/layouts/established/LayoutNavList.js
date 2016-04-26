import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import LayoutNavListItem from './LayoutNavListItem';

export default class LayoutNavList extends Component {
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array.isRequired,
    onItemClick: PropTypes.func,
  };

  render() {
    const {
      items = [],
      isOpen = false,
      isActive = false,
      onItemClick,
    } = this.props;

    const classes = classnames('ax-layout-nav__list', {
      'ax-layout-nav__list--open': isOpen || isActive,
    });

    return (
      <ul className={classes}>
        {items.filter(({hidden}) => !hidden).map((item, index) =>
          <LayoutNavListItem item={item} key={index} onClick={onItemClick} />
        )}
      </ul>
    );
  }
}
