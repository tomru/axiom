import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';
import LayoutNavListItem from './LayoutNavListItem';

export class LayoutNavList extends Component {
  static propTypes = {
    className: { string: true },
    items: { array: true, isRequired: true },
    onItemClick: { func: true },
  };

  render() {
    const {
      className,
      items = [],
      isOpen = false,
      isActive = false,
      onItemClick,
    } = this.props;

    const classes = classnames(className,
      'ax-layout-nav__list', {
        'ax-layout-nav__list--open': isOpen || isActive,
      }
    );

    return (
      <ul className={classes}>
        {items.filter(({hidden}) => !hidden).map((item, index) =>
          <LayoutNavListItem item={item} key={index} onClick={onItemClick} />
        )}
      </ul>
    );
  }
}

export default enhance(
  LayoutNavList,
  addDisplayName('LayoutNavList'),
  addPropTypes('global'),
  addClassName('global'),
);
