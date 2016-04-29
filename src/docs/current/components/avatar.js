import { statuses } from '../../';
import { Avatar } from 'axiom/react';

export default {
  id: 'avatar',
  path: 'avatar',
  group: 'components',
  sass: ['/components/avatar'],
  components: [{
    Component: Avatar,
  }],
  examples: () => [{
    title: 'Sized avatars',
    status: statuses.STABLE,
    snippetLocation: true,
    children: [{
      type: 'grid',
      props: { vAlign: 'bottom' },
      children: [{
        props: { shrink: true },
        snippetContent: true,
        children: [{
          Component: Avatar,
          props: {
            src: '/assets/avatar.png',
            size: 'sm',
          },
        }],
      }, {
        props: { shrink: true },
        snippetContent: true,
        children: [{
          Component: Avatar,
          props: {
            src: '/assets/avatar.png',
            size: 'md',
          },
        }],
      }, {
        props: { shrink: true },
        snippetContent: true,
        children: [{
          Component: Avatar,
          props: {
            src: '/assets/avatar.png',
            size: 'lg',
          },
        }],
      }],
    }],
  }],
};
