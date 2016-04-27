import { Avatar } from 'axiom/react';

export default {
  id: 'avatar',
  path: 'avatar',
  group: 'components',
  components: [{
    Component: Avatar,
  }],
  sass: [
    '/components/avatar'
  ],
  examples: () => [{
    title: 'Sized avatars',
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
