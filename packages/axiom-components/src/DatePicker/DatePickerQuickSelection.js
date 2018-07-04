import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './DatePickerQuickSelection.css';

export default class DatePickerQuickSelection extends Component {
  static propTypes = {
    onRangeQuickSelection: PropTypes.func.isRequired,
    rangeQuickSelections: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      days: PropTypes.number,
      month: PropTypes.number,
    })).isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      onRangeQuickSelection,
      rangeQuickSelections,
    } = this.props;

    return (
      <div className="ax-date-quick-selection">
        { rangeQuickSelections.map(({ label, days, months }) =>
          <button
              className="ax-date-quick-selection__item"
              key={ label }
              onClick={ () => onRangeQuickSelection({ days, months }) }>
            { label }
          </button>
        ) }
      </div>
    );
  }
}
