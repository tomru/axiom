import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import SelectListItem from '../select/SelectListItem';

if (__INCLUDE_CSS__) {
  require('./SelectList.scss');
}

export default class SelectList extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
    maxHeight: PropTypes.number.isRequired,
    scrollToActiveIndex: PropTypes.bool.isRequired,
    onItemClick: PropTypes.func.isRequired,
    onItemHover: PropTypes.func.isRequired,
  };

  render() {
    const { isOpen, items, maxHeight, onItemClick, onItemHover, scrollToActiveIndex } = this.props;
    const style = { maxHeight };
    const classes = classnames('ax-select__list', {
      'ax-select__list--open': isOpen,
    });

    return (
      <ul className={ classes } style={ style }>

        { items.map((item, index) =>
          <SelectListItem
              index={ index }
              item={ item }
              key={ index }
              onClick={ onItemClick }
              onHover={ onItemHover }
              scrollToActiveIndex={ scrollToActiveIndex } />
        ) }

      </ul>
    );
  }
}
