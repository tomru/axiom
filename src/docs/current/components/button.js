import { statuses } from 'docs';
import { colorPalette, colorAliases } from 'axiom/sass';
import { Button, ButtonGroup, Icon } from 'axiom/react';

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
  imports: {
    sass: ['components/button'],
  },
  examples: () => [{
    title: 'Colored Buttons',
    status: statuses.BETA,
    children: [{
      title: 'Palette Colors',
      snippetLocation: true,
      children: [{
        snippetContent: true,
        Container: ButtonGroup,
        children: colorPalette.reduce((acc, colors) => {
          colors.forEach(({ name }) => {
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
      }],
    }, {
      title: 'UI Colors',
      snippetLocation: true,
      children: [
        ...colorAliases.map(({ heading, colors }) => {
          return {
            title: heading,
            children: [{
              Container: ButtonGroup,
              snippetContent: true,
              children: colors.reduce((acc, colors) => {
                colors.forEach(({ name }) => {
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
            }],
          };
        }),
        {
          title: 'Scheme Primary',
          Container: ButtonGroup,
          snippetContent: true,
          children: [{
            Component: Button,
            children: 'Scheme Primary',
            demoContent: true,
            props: {
              color: 'primary',
            },
          }],
        },
      ],
    }],
  }, {
    title: 'Outlined',
    children: [{
      Container: ButtonGroup,
      children: colorPalette.reduce((acc, colors) => {
        colors.forEach(({ name }) => {
          acc.push({
            Component: Button,
            demoContent: true,
            children: name,
            props: {
              outlined: true,
            },
            demoProps: {
              color: name,
            },
          });
        });

        return acc;
      }, []),
    }, {
      snippetLocation: true,
      snippetContent: true,
      demoRender: false,
      children: [{
        Component: Button,
        props: {
          outlined: true,
        },
      }],
    }],
  }, {
    title: 'Sizes',
    status: statuses.STABLE,
    snippetLocation: true,
    children: [{
      Container: ButtonGroup,
      snippetContent: true,
      children: Button.__ax_propTypes.size.oneOf.map((size) => {
        return {
          Component: Button,
          props: {
            size: size,
          },
          demoContent: true,
          children: `Button (${size.toUpperCase()})`,
        };
      }),
    }],
  }, {
    title: 'Circular',
    status: statuses.STABLE,
    snippetLocation: true,
    children: [{
      Container: ButtonGroup,
      snippetContent: true,
      children: [
        ...Button.__ax_propTypes.size.oneOf.map((size) => {
          return {
            Component: Button,
            props: {
              size: size,
              circular: true,
            },
            demoContent: true,
            children: [{
              Component: Icon,
              props: {
                name: 'bolt',
              },
            }],
          };
        }),
        ...Button.__ax_propTypes.size.oneOf.map((size) => {
          return {
            Component: Button,
            props: {
              size: size,
              circular: true,
              outlined: true,
            },
            demoContent: true,
            children: [{
              Component: Icon,
              props: {
                name: 'bolt',
              },
            }],
          };
        }),
      ],
    }],
  }, {
    title: 'Full width',
    status: statuses.EXPERIMENTAL,
    snippetLocation: true,
    children: [{
      Container: ButtonGroup,
      snippetContent: true,
      children: Button.__ax_propTypes.full.oneOf.map((at) => {
        return {
          Component: Button,
          demoContent: true,
          children: at === true ? 'Always full width' : `Full width < ${at}`,
          props: {
            full: at,
          },
        };
      }),
    }],
  }, {
    title: 'Button with an Icon',
    status: statuses.NEEDS_REVISION,
    snippetLocation: true,
    children: [{
      Container: ButtonGroup,
      snippetContent: true,
      children: [{
        Component: Button,
        demoProps: {
          color: 'red',
          size: 'sm',
        },
        children: [
          'Small',
          {
            Component: Icon,
            props: {
              name: 'trash',
            },
          },
        ],
      }, {
        Component: Button,
        demoProps: {
          color: 'yellow',
        },
        children: [
          'Regular',
          {
            Component: Icon,
            props: {
              name: 'warning',
            },
          },
        ],
      }, {
        Component: Button,
        demoProps: {
          color: 'green',
          size: 'lg',
        },
        children: [
          'Large',
          {
            Component: Icon,
            props: {
              name: 'check',
            },
          },
        ],
      }],
    }],
  }],
};
