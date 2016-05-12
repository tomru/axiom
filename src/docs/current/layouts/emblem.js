import { Image } from 'axiom/react';
import { Layout, LayoutHeader, LayoutNav, LayoutTitle, LayoutMain, LayoutContent, LayoutFooter } from 'axiom/react/layouts/emblem';

export default {
  id: 'emblem',
  path: 'emblem',
  group: 'layouts',
  components: [{
    Component: Layout,
    children: [{
      Component: LayoutHeader,
      children: [{
        Component: LayoutNav,
      }, {
        Component: LayoutTitle,
      }],
    }, {
      Component: LayoutMain,
      children: [{
        Component: LayoutContent,
      }],
    }, {
      Component: LayoutFooter,
    }],
  }],
  imports: {
    sass: ['layouts/emblem'],
  },
  examples: () => [{
    children: [{
      Component: Image,
      props: {
        width: '100%',
        src: '/assets/emblem.svg',
      },
    }],
  }, {
    children: [{
      snippetLocation: true,
      snippetContent: true,
      demoRender: false,
      children: [{
        Component: Layout,
        children: [{
          Component: LayoutHeader,
          children: [{
            Component: LayoutNav,
            demoContent: true,
            children: 'Nav Content',
          }, {
            Component: LayoutTitle,
            demoContent: true,
            children: 'Title content',
          }],
        }, {
          Component: LayoutMain,
          children: [{
            Component: LayoutContent,
            demoContent: true,
            children: 'Main page content',
          }],
        }, {
          Component: LayoutFooter,
          demoContent: true,
          children: 'Footer content',
        }],
      }],
    }],
  }],
};
