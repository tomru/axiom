import React, { Component } from 'react';
import { Duration, DateTime } from 'luxon';
import { Button, ButtonIcon, DatePicker, Grid, GridCell, TextInput, TextInputIcon } from '@brandwatch/axiom-components';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';
import { mediumDate } from '@brandwatch/axiom-formatting';

const rangeSelections = [
  {
    label: 'Today',
    range: 'P1D',
  },
  {
    label: '7D',
    range: 'P7D',
  },
  {
    label: '14D',
    range: 'P14D',
  },
  {
    label: '1M',
    range: 'P1M',
  },
  {
    label: '2M',
    range: 'P2M',
  },
];


export default class Documentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      dateEnd: '',
      dateStart: '',
    };
  }

  handleSelect({ date, dateEnd, dateStart, range }) {
    if (range) {
      const end = DateTime.local().endOf('day');
      dateEnd = end.toJSDate(),
      dateStart = end.minus(Duration.fromISO(range)).plus(1, 'microsecond').toJSDate();
    }

    this.setState({
      date,
      dateEnd,
      dateStart,
      range,
    });
  }

  render() {
    const { date, dateEnd, dateStart, range } = this.state;
    const value = dateStart
    ? `${mediumDate(dateStart)} ${dateEnd ? `- ${mediumDate(dateEnd)}` : ''}`
    : (date && mediumDate(date));

    return (
      <DocumentationContent>
        <Grid>
          <GridCell>
            <DocumentationShowCase centered>
              <DatePicker
                  onSelect={ (setValue, getValue, { date, dateStart, dateEnd, range }) => {
                    this.handleSelect({ date, dateEnd, dateStart, range });
                  } }
                  rangeSelect
                  rangeSelections={ rangeSelections }
                  selectedDate={ date }
                  selectedEndDate={ dateEnd }
                  selectedRange={ range }
                  selectedStartDate={ dateStart }>
                <Button>
                  Show Date Picker <ButtonIcon name="chevron-down" />
                </Button>
              </DatePicker>
            </DocumentationShowCase>
          </GridCell>

          <GridCell>
            <DocumentationShowCase centered>
              <DatePicker
                  onSelect={ (setValue, getValue, { date, dateStart, dateEnd, range }) => {
                    this.handleSelect({ date, dateEnd, dateStart, range });
                  } }
                  rangeSelect
                  rangeSelections={ rangeSelections }
                  selectedDate={ date }
                  selectedEndDate={ dateEnd }
                  selectedRange={ range }
                  selectedStartDate={ dateStart }
                  view="double">
                <TextInput
                    placeholder="Select a date"
                    readOnly
                    value={ value }>
                  <TextInputIcon align="right" name="chevron-down" />
                </TextInput>
              </DatePicker>
            </DocumentationShowCase>
          </GridCell>
        </Grid>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/DatePicker/DatePicker'),
        ] } />
      </DocumentationContent>
    );
  }
}
