import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import DropdownSource from '../Dropdown/DropdownSource';
import DropdownTarget from '../Dropdown/DropdownTarget';
import DatePickerContext from './DatePickerContext';

export default class DatePicker extends Component {
  static propTypes = {
    /** The element to position the DatePicker around */
    children: PropTypes.node.isRequired,
    /** A lower limit to the earliest date that can be selected */
    earliestSelectableDate: PropTypes.instanceOf(Date),
    /**
     * The date that should be initially shown to the user. When a selected date
     * or range is given, this supersedes this property. Defaults to 'today'.
     */
    initialDate: PropTypes.instanceOf(Date),
    /** An upper limit to the latest date that can be selected */
    latestSelectableDate: PropTypes.instanceOf(Date),
    /** Callback for when the apply button has been clicked */
    onApply: PropTypes.func,
    /** Callback for when the cancel button has been clicked */
    onCancel: PropTypes.func,
    /** Callback for when a date or range has been selected */
    onSelect: PropTypes.func.isRequired,
    /** Ranges Quick Selections. Default is Today, 7D, 14D, 1M, 2M */
    rangeQuickSelections: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      days: PropTypes.number,
      month: PropTypes.number,
    })),
    /** Whether a date range can be selected */
    rangeSelect: PropTypes.bool,
    /** A single date that appears selected */
    selectedDate: PropTypes.instanceOf(Date),
    /** The date selected at the end of the range */
    selectedEndDate: PropTypes.instanceOf(Date),
    /** The date selected at the start of the range */
    selectedStartDate: PropTypes.instanceOf(Date),
    /** Configuration for a single date picker view or two pickers side by side */
    view: PropTypes.oneOf(['single', 'double']),
  };

  static defaultProps = {
    view: 'single',
    rangeSelect: false,
    rangeQuickSelections: [
      {
        label: 'Today',
        days: 0,
      },
      {
        label: '7D',
        days: 7,
      },
      {
        label: '14D',
        days: 14,
      },
      {
        label: '1M',
        months: 1,
      },
      {
        label: '2M',
        months: 2,
      },
    ],
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Dropdown>
        <DropdownTarget>
          { children }
        </DropdownTarget>

        <DropdownSource maxHeight="auto" width="auto">
          <DatePickerContext { ...rest } />
        </DropdownSource>
      </Dropdown>
    );
  }
}
