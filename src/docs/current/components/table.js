import { formatNumber } from 'axiom/common/format-utils';
import { Table, Thead, Tbody, Tr, Th, Td } from 'axiom/react';

const randomNumber = () => ~~(Math.random() * 10 * 100000);

const demoHeaders = [
  { name: 'Lorem', isNumber: false },
  { name: 'Ipsum', isNumber: true },
  { name: 'Dolar', isNumber: true, sorting: 1 },
  { name: 'Sit Amet', isNumber: true, sorting: -1 },
];
const demoRows = [
  ['Consectetur adipiscing elit', randomNumber(), randomNumber(), randomNumber()],
  ['Fusce auctor dapibus', randomNumber(), randomNumber(), randomNumber()],
  ['Duis feugiat condimentum velit', randomNumber(), randomNumber(), randomNumber()],
  ['Velit campore', randomNumber(), randomNumber(), randomNumber()],
];

const demoTableContent = [{
  Component: Thead,
  children: [{
    Component: Tr,
    children: demoHeaders.map(({name, isNumber, sorting}) => {
      return {
        Component: Th,
        children: name,
        props: {
          isNumber: isNumber,
          sorting: sorting,
        },
      };
    }),
  }],
}, {
  Component: Tbody,
  children: demoRows.map((cells) => {
    return {
      Component: Tr,
      children: cells.map((cell, cIndex) => {
        return {
          Component: Td,
          children: demoHeaders[cIndex].isNumber ? formatNumber(cell) : cell,
          props: {
            isNumber: demoHeaders[cIndex].isNumber,
          },
        };
      }),
    };
  }),
}];

export default {
  id: 'table',
  path: 'table',
  group: 'components',
  components: [{
    Component: Table,
    children: [{
      Component: Thead,
      children: [{
        Component: Tr,
        children: [{
          Component: Th,
        }],
      }]
    }, {
      Component: Tbody,
      children: [{
        Component: Tr,
        children: [{
          Component: Td,
        }],
      }],
    }],
  }],
  imports: {
    sass: ['components/table'],
  },
  examples: () => [{
    title: 'Standard table',
    snippetLocation: true,
    snippetContent: true,
    children: [{
      Component: Table,
      children: demoTableContent,
      demoContent: true,
    }],
  }, {
    title: 'Stripy table',
    snippetLocation: true,
    snippetContent: true,
    children: [{
      Component: Table,
      children: demoTableContent,
      demoContent: true,
      props: {
        striped: true,
      }
    }],
  }, {
    title: 'Bordered table',
    snippetLocation: true,
    children: [{
      title: 'Horizontal borders',
      snippetContent: true,
      children: [{
        Component: Table,
        children: demoTableContent,
        demoContent: true,
        props: {
          borders: 'h',
        },
        demoProps: {
          striped: true,
        },
      }],
    }, {
      title: 'Vertical borders',
      snippetContent: true,
      children: [{
        Component: Table,
        children: demoTableContent,
        demoContent: true,
        props: {
          borders: 'v',
        },
        demoProps: {
          striped: true,
        },
      }],
    }, {
      title: 'Horizontal and Vertical borders',
      snippetContent: true,
      children: [{
        Component: Table,
        children: demoTableContent,
        demoContent: true,
        props: {
          borders: true,
        },
        demoProps: {
          striped: true,
        },
      }],
    }],
  }, {
    title: 'Sortable tables',
    snippetLocation: true,
    snippetContent: true,
    children: [{
      Component: Table,
      children: demoTableContent,
      demoContent: true,
      props: {
        sortable: true,
      },
      demoProps: {
        borders: true,
        striped: true,
      },
    }],
  }],
};
