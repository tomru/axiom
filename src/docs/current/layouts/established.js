import { Image } from 'axiom/react';
import { Layout, LayoutHeader, LayoutSidebar, LayoutMain, LayoutNav, LayoutContent, LayoutFooter } from 'axiom/react/layouts/established';

export default {
  id: 'established',
  path: 'established',
  group: 'layouts',
  components: [{
    Component: Layout,
    children: [{
      Component: LayoutHeader,
    }, {
      Component: LayoutSidebar,
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
    sass: [
      'layouts/established',
      'layouts/established-nav',
    ],
  },
  routeRender: {

  },
  examples: () => [{
    children: [{
      Component: Image,
      props: {
        width: '100%',
        src: '/assets/established.svg',
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
          demoContent: true,
          Component: LayoutHeader,
          children: 'Header content',
        }, {
          Component: LayoutSidebar,
          children: [{
            Component: LayoutNav,
            props: {
              items: [],
            },
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
