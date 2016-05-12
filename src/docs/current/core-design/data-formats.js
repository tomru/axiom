import { formatNumber, formatDateShort, formatDateMedium, formatDateLong } from 'axiom/common/format-utils';
import { Paragraph } from 'axiom/react';

export default {
  id: 'data-formats',
  path: 'data-formats',
  group: 'core-design',
  imports: {
    js: [
      'formatNumber',
      'formatDateShort',
      'formatDateMedium',
      'formatDateLong',
    ],
  },
  examples: () => [{
    title: 'Number formatting',
    snippetLocation: true,
    children: [{
      snippetContent: true,
      children: [{
        title: formatNumber(71029384),
        code: {
          js: 'formatNumber(Number);',
        },
      }],
    }],
  }, {
    title: 'Date formatting',
    snippetLocation: true,
    children: [{
      title: 'Short date',
      snippetContent: true,
      children: [{
        Component: Paragraph,
        children: formatDateShort(new Date()),
        code: {
          js: 'formatDateShort(Date);',
        },
      }],
    }, {
      title: 'Medium date',
      snippetContent: true,
      children: [{
        Component: Paragraph,
        children: formatDateMedium(new Date()),
        code: {
          js: 'formatDateMedium(Date);',
        },
      }],
    }, {
      title: 'Long date',
      snippetContent: true,
      children: [{
        Component: Paragraph,
        children: formatDateLong(new Date()),
        code: {
          js: 'formatDateLong(Date);',
        },
      }],
    }],
  }],
};
