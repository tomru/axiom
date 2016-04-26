import { formatNumber, formatDateShort, formatDateMedium, formatDateLong } from 'axiom/common/format-utils';
import { Paragraph } from 'axiom/react';
import { ColorSwatch } from 'style-guide/components/ColorSwatch';

export default {
  id: 'data-formats',
  path: 'data-formats',
  group: 'core-design',
  examples: () => [{
    title: 'Number formatting',
    snippetLocation: true,
    snippetContent: true,
    children: [{
      title: formatNumber(71029384),
      code: {
        js: 'formatNumber(Number);',
      },
    }],
  }, {
    title: 'Date formatting',
    snippetLocation: true,
    snippetContent: true,
    children: [{
      title: 'Short date',
      children: [{
        Component: Paragraph,
        children: formatDateShort(new Date()),
      }],
      code: {
        js: 'formatDateShort(Date);',
      },
    }, {
      title: 'Medium date',
      children: [{
        Component: Paragraph,
        children: formatDateMedium(new Date()),
      }],
      code: {
        js: 'formatDateMedium(Date);',
      },
    }, {
      title: 'Long date',
      children: [{
        Component: Paragraph,
        children: formatDateLong(new Date()),
      }],
      code: {
        js: 'formatDateLong(Date);',
      },
    }],
  }],
};
