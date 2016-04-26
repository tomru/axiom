import { Icon } from 'axiom/react';
import { iconList, iconCategories } from 'style-guide/utils/icons';
import IconGrid from 'style-guide/components/IconGrid';

export default {
  id: 'icons',
  path: 'icons',
  group: 'components',
  components: [{
    Component: Icon,
  }],

  sass: [
    '/components/icon'
  ],
  examples: () => Object.keys(iconCategories).map((category) => {
    return {
      title: category,
      children: [{
        Component: IconGrid,
        props: {
          icons: iconCategories[category],
        },
      }],
    };
  }),
};
