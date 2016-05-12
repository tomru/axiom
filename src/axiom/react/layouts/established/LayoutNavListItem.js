import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../../utils/components';
import Link from '../../components/Typography/Link';
import LayoutNavList from './LayoutNavList';

export class LayoutNavListItem extends Component {
  static propTypes = {
    className: { string: true },
    item: { object: true, isRequired: true },
    onClick: { func: true },
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
      return () => onClick(item);
    }

    const classes = classnames(className,
      'ax-layout-nav__list-item', {
        'ax-layout-nav__list-item--open': hasChildren && isOpen,
        'ax-layout-nav__list-item--active': isActive,
        'ax-layout-nav__list-item--has-submenu': hasChildren,
      }
    );

    return (
      <li className={ classes }>
        <Link
            className="ax-layout-nav__link"
            onClick={ createOnItemClickHandler() }
            supressStyle={ true }
            to={ to }>{ name }</Link>

        { do {
          if (hasChildren) {
            <LayoutNavList
                isOpen={ isOpen }
                items={ children.filter(({ name }) => name) }
                onItemClick={ onClick } />
          }
        } }
      </li>
    );
  }
}

export default enhance(LayoutNavListItem)(
  addPropTypes('global'),
  addClassName('global'),
);
