import { statuses } from 'docs';
import { Avatar } from 'axiom/react';

export default {
  id: 'avatar',
  path: 'avatar',
  group: 'components',
  imports: {
    sass: ['components/avatar'],
  },
  components: [{
    Component: Avatar,
  }],
  examples: () => [{
    title: 'Sized avatars',
    status: statuses.BETA,
    snippetLocation: true,
    children: [{
      type: 'grid',
      props: { vAlign: 'bottom' },
      children: Avatar.__ax_propTypes.size.oneOf.map((size) => {
        return {
          props: { shrink: true },
          snippetContent: true,
          children: [{
            Component: Avatar,
            props: {
              src: '/assets/avatar.png',
              size: size,
            },
          }],
        };
      }),
    }],
  }],
};
