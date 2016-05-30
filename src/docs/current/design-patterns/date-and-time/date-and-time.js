import * as format from 'bw-axiom/common/formatting-dates';
import ShortDate from './ShortDate';
import MediumDate from './MediumDate';
import LongDate from './LongDate';

export default {
  id: 'date-and-time',
  path: 'date-and-time',
  group: 'design-patterns',
  imports: {
    js: Object.keys(format),
  },
  examples: () => [{
    title: 'Short Date',
    children: [{
      Component: ShortDate,
    }],
  }, {
    title: 'Medium Date',
    children: [{
      Component: MediumDate,
    }],
  }, {
    title: 'Long Date',
    children: [{
      Component: LongDate,
    }],
  }],
};
