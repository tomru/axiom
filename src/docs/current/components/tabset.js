import { Tabset, Tab } from 'axiom/react';

export default {
  id: 'tabset',
  path: 'tabset',
  group: 'components',
  components: [{
    Component: Tabset,
    children: [{
      Component: Tab,
    }],
  }],
  sass: [
    '/components/tabset'
  ],
  examples: () => [{
    title: 'Standard',
    snippetLocation: true,
    snippetContent: true,
    children: [{
      Component: Tabset,
      children: [{
        Component: Tab,
        children: 'Tab 1 content',
        props: {
          title: 'Tab 1',
          demoContent: true,
        },
      }, {
        Component: Tab,
        children: 'Tab 2 content',
        props: {
          title: 'Tab 2',
          demoContent: true,
        },
      }],
    }],
  }],
};
