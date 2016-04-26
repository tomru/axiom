import { breakpoints, colorPalette, colorAliases } from 'axiom/sass';
import { Button, ButtonGroup } from 'axiom/react';

export default {
  id: 'button',
  path: 'button',
  group: 'components',
  components: [{
    Component: ButtonGroup,
    children: [{
      Component: Button,
    }],
  }],

  sass: [
    '/components/button'
  ],
  examples: () => [{
    title: 'Colored Buttons',
    children: [{
      title: 'Palette Colors',
      snippetLocation: true,
      snippetContent: true,
      Container: ButtonGroup,
      children: colorPalette.reduce((acc, colors) => {
        colors.forEach(({name}) => {
          acc.push({
            Component: Button,
            demoContent: true,
            children: name,
            props: {
              color: name,
            },
          });
        });

        return acc;
      }, []),
    }, {
      title: 'UI Colors',
      snippetLocation: true,
      children: colorAliases.map(({heading, colors}) => {
        return {
          title: heading,
          Container: ButtonGroup,
          snippetContent: true,
          children: colors.reduce((acc, colors) => {
            colors.forEach(({name}) => {
              acc.push({
                Component: Button,
                children: name,
                demoContent: true,
                props: {
                  color: name,
                },
              });
            });

            return acc;
          }, []),
        };
      }),
    }],
  }, {
    title: 'Sizes',
    snippetLocation: true,
    children: [{
      Container: ButtonGroup,
      snippetContent: true,
      children: ['sm', '', 'lg'].map((size) => {
        return {
          Component: Button,
          props: {
            size: size,
          },
          demoProps: {
            color: 'primary',
          },
          demoContent: true,
          children: `Button (${size.toUpperCase()})`,
        };
      }),
    }],
  }, {
    title: 'Full width',
    snippetLocation: true,
    children: [{
      Container: ButtonGroup,
      snippetContent: true,
      children: [{
        Component: Button,
        demoContent: true,
        children: 'Always full width',
        demoProps: {
          color: 'primary',
        },
        props: {
          full: true,
        },
      },
      ...breakpoints.map(({id}) => {
        return {
          Component: Button,
          demoContent: true,
          children: `Full width < ${id}`,
          demoProps: {
            color: 'primary',
          },
          props: {
            full: id,
          },
        };
      })],
    }]
  }, {
    title: 'Button with an Icon',
    snippetLocation: true,
    children: [{
      Container: ButtonGroup,
      snippetContent: true,
      children: [{
        Component: Button,
        children: 'Small',
        demoContent: true,
        demoProps: {
          color: 'red',
          size: 'sm',
        },
        props: {
          icon: 'trash',
        },
      }, {
        Component: Button,
        children: 'Regular',
        demoContent: true,
        demoProps: {
          color: 'yellow',
        },
        props: {
          icon: 'warning',
        },
      }, {
        Component: Button,
        children: 'Large',
        demoContent: true,
        demoProps: {
          color: 'green',
          size: 'lg',
        },
        props: {
          icon: 'check',
        },
      }],
    }],
  }],
};
