import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import LayoutNavList from './LayoutNavList';

export default class LayoutNav extends Component {
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array.isRequired,
    onItemClick: PropTypes.func,
  };

  render() {
    const {
      className,
      items,
      onItemClick = () => {},
    } = this.props;

    return (
      <nav className={classnames(className, 'ax-layout-nav')}>
        <LayoutNavList items={items} onItemClick={onItemClick} />
      </nav>
    );
  }
}
