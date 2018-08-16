import React, { Component, Fragment } from 'react';

import DatePickerHeaderControl from './DatePickerHeaderControl';
import DatePickerViewMonth from './DatePickerViewMonth';

export default class DatePickerContext extends Component {


  render() {
    const { activeDate, earliestSelectableDate, latestSelectableDate, onNext, onPrevious, onSelect, rangeSelect, selectedDate, selectedEndDate, selectedStartDate } = this.props;

    return (
      <Fragment>
        <DatePickerHeaderControl
            date={ activeDate }
            earliestSelectableDate={ earliestSelectableDate }
            latestSelectableDate={ latestSelectableDate }
            onNext={ onNext }
            onPrevious={ onPrevious } />
        <DatePickerViewMonth
            date={ activeDate }
            earliestSelectableDate={ earliestSelectableDate }
            latestSelectableDate={ latestSelectableDate }
            onSelect={ onSelect }
            rangeSelect={ rangeSelect }
            selectedDate={ !rangeSelect ? selectedDate : undefined }
            selectedEndDate={ rangeSelect ? endDate : undefined }
            selectedStartDate={ rangeSelect ? startDate : undefined } />
      </Fragment>
    );
  }

}
