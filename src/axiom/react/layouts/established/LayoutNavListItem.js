import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Link from '../../components/Typography/Link';
import LayoutNavList from './LayoutNavList';

export default class LayoutNavListItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    item: PropTypes.object.isRequired,
    onItemClick: PropTypes.func,
  };

  render() {
    const {
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

    const classes = classnames('ax-layout-nav__list-item', {
      'ax-layout-nav__list-item--open': hasChildren && isOpen,
      'ax-layout-nav__list-item--active': isActive,
      'ax-layout-nav__list-item--has-submenu': hasChildren,
    });

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
