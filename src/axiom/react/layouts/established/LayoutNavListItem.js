import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';
import Link from '../../components/Typography/Link';
import LayoutNavList from './LayoutNavList';

export class LayoutNavListItem extends Component {
  static propTypes = {
    className: { string: true },
    item: { object: true, isRequired: true },
    onItemClick: { func: true },
  };

  render() {
    const {
      className,
      onClick,
      item,
      item: {
        to,
        name,
        children,
        hasChildren,
        isOpen,
        isActive,
      },
    } = this.props;

    function createOnItemClickHandler() {
      return (event) => {
        onClick(item);
      };
    }

    const classes = classnames(className,
      'ax-layout-nav__list-item', {
        'ax-layout-nav__list-item--open': hasChildren && isOpen,
        'ax-layout-nav__list-item--active': isActive,
        'ax-layout-nav__list-item--has-submenu': hasChildren,
      }
    );

    return (
      <li className={classes}>
        <Link
          className="ax-layout-nav__link"
          to={to}
          supressStyle={true}
          onClick={createOnItemClickHandler()}>{name}</Link>

        {do {
          if (hasChildren) {
            <LayoutNavList
              isOpen={isOpen}
              items={children.filter(({name}) => name)}
              onItemClick={onClick} />
          }
        }}
      </li>
    );
  }
}

export default enhance(
  LayoutNavListItem,
  addDisplayName('LayoutNavListItem'),
  addPropTypes('global'),
  addClassName('global'),
);
