import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../../utils/components';
import Link from '../../components/Typography/Link';
import LayoutNavList from './LayoutNavList';

export class LayoutNavListItem extends Component {
  static propTypes = {
    className: { string: true },
    item: {
      shape: {
        children: { array: true },
        isOpen: { bool: true, isRequired: true  },
        isActive: { bool: true, isRequired: true },
        name: { string: true, isRequired: true },
        to: { string: true },
      },
      isRequired: true,
    },
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
        isOpen,
        isActive,
      },
    } = this.props;

    function createOnItemClickHandler() {
      return () => onClick(item);
    }

    const hasChildren = Array.isArray(children) && children.length;
    const classes = classnames(className,
      'ax-layout--established-nav__list-item', {
        'ax-layout--established-nav__list-item--open': hasChildren && isOpen,
        'ax-layout--established-nav__list-item--active': isActive,
        'ax-layout--established-nav__list-item--has-submenu': hasChildren,
      }
    );

    return (
      <li className={ classes }>
        <Link
            className="ax-layout--established-nav__link"
            onClick={ createOnItemClickHandler() }
            supressStyle={ true }
            to={ to }>{ name }</Link>

        { do {
          if (hasChildren) {
            <LayoutNavList
                isOpen={ isOpen }
                items={ children }
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
