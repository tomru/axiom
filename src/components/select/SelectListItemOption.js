import React, { Component, PropTypes } from 'react';
import SelectListItem from './SelectListItem';

const STICK_TO_TOP = true;
const STICK_TO_BOTTOM = false;

export default class SelectListItemOption extends Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    item: PropTypes.shape({
      displayValue: PropTypes.string.isRequired,
      isActive: PropTypes.bool.isRequired,
      isSelected: PropTypes.bool.isRequired,
    }).isRequired,
    scrollToActiveIndex: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    onHover: PropTypes.func.isRequired,
  }

  componentDidUpdate() {
    const { item: { isActive }, scrollToActiveIndex }  = this.props;


    if (!isActive || !scrollToActiveIndex) return;

    const { item } = this.refs;
    const { offsetTop, clientHeight } = item;
    const { parentNode: { scrollTop, clientHeight: parentClientHeight } } = item;

    if (offsetTop + clientHeight > scrollTop + parentClientHeight) {
      item.scrollIntoView(STICK_TO_BOTTOM);
    } else if (offsetTop < scrollTop) {
      item.scrollIntoView(STICK_TO_TOP);
    }
  }

  handleOnClick(event) {
    const { item, onClick } = this.props;
    event.stopPropagation();
    onClick(item);
  }

  handleOnMouseEnter() {
    const { index, onHover } = this.props;
    onHover(index, false);
  }

  render() {
    const { item } = this.props;
    const { displayValue, isActive, isSelected } = item;

    return (
      <SelectListItem
          isActive={ isActive }
          isSelectable={ true }
          isSelected={ isSelected }
          onClick={ ::this.handleOnClick }
          onMouseEnter={ ::this.handleOnMouseEnter }
          ref="item">
        { displayValue }
      </SelectListItem>
    );
  }
}
