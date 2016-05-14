import { Icon } from 'axiom/react';
import { iconList } from './utils';

export default {
  id: 'icon',
  path: 'icon',
  group: 'components',
  hidden: true,
  searchable: false,
  components: [{
    Component: Icon,
  }],
  imports: {
    sass: ['components/icon'],
  },
  examples: (routeParams, { iconId }) => {
    if (!iconId) {
      return [];
    }

    const { name: iconName } = iconList.find(({ id }) => id === iconId);

    return [{
      title: `Icon - ${iconName}`,
      snippetLocation: true,
      snippetContent: true,
      children: [{
        Component: Icon,
        props: {
          name: iconId,
        },
        demoProps: {
          size: '5x',
        },
      }],
    }, {
      title: 'Icon sizes',
      snippetLocation: true,
      children: [{
        type: 'grid',
        props: {
          vAlign: 'middle',
        },
        children: ['5x', '4x', '3x', '2x', 'lg'].map((size) => {
          return {
            snippetContent: true,
            props: {
              shrink: true,
            },
            children: [{
              Component: Icon,
              props: {
                name: iconId,
                size: size,
              },
            }],
          };
        }),
      }],
    }];
  },
};
