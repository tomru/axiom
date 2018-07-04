import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import './DatePickerRangeSelection.css';

export default class DatePickerRangeSelection extends Component {
  static propTypes = {
    onRangeSelection: PropTypes.func.isRequired,
    rangeSelections: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      range: PropTypes.string.isRequired,
    })).isRequired,
    selectedRange: PropTypes.string,
  };

  render() {
    const {
      onRangeSelection,
      rangeSelections,
      selectedRange,
    } = this.props;

    return (
      <div className="ax-date-range-selection">
        { rangeSelections.map(({ label, range }) => {
          const classes = classnames('ax-date-range-selection__item', {
            'ax-date-range-selection__item--active': range === selectedRange,
          });

          return (
            <button
                className={ classes }
                key={ label }
                onClick={ () => onRangeSelection(range) }>
              { label }
            </button>
          );
        }) }
      </div>
    );
  }
}
