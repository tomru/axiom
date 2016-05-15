import * as format from 'axiom/common/formatting-numbers';
import ShortNumber from './ShortNumber';
import LongNumber from './LongNumber';

export default {
  id: 'numbers',
  path: 'numbers',
  group: 'design-patterns',
  imports: {
    js: Object.keys(format),
  },
  examples: () => [{
    title: 'Short Number',
    children: [{
      Component: ShortNumber,
    }],
  }, {
    title: 'Long Number',
    children: [{
      Component: LongNumber,
    }],
  }],
};
