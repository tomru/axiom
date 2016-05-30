import { LogoVertical, LogoHorizontal } from 'bw-axiom/react';

export default {
  id: 'branding',
  path: 'branding',
  group: 'design-patterns',
  imports: {
    sass: [
      'components/logo',
    ],
  },
  examples: () => {
    return [{
      title: 'Logos',
      children: [{
        title: 'Vertical Logo',
        snippetLocation: true,
        children: [{
          type: 'grid',
          children: LogoVertical.__ax_propTypes.size.oneOf.map((size) => {
            return {
              snippetContent: true,
              props: {
                shrink: true,
              },
              children: [{
                Component: LogoVertical,
                props: { size },
              }],
            };
          }),
        }],
      }, {
        title: 'Horizontal Logo',
        snippetLocation: true,
        children: [{
          children: LogoHorizontal.__ax_propTypes.size.oneOf.map((size) => {
            return {
              snippetContent: true,
              props: {
                shrink: true,
              },
              children: [{
                Component: LogoHorizontal,
                props: { size },
              }],
            };
          }),
        }],
      }],
    }];
  },
};
