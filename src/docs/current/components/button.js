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
    children: [{
      title: 'Palette Colors',
      snippetLocation: true,
      snippetContent: true,
      children: [{
        Component: ButtonGroup,
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
            snippetContent: true,
            children: [{
              Component: ButtonGroup,
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
          Component: ButtonGroup,
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
      Component: ButtonGroup,
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
    snippetLocation: true,
    children: [{
      Component: ButtonGroup,
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
    snippetLocation: true,
    children: [{
      Component: ButtonGroup,
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
    snippetLocation: true,
    children: [{
      Component: ButtonGroup,
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
    snippetLocation: true,
    children: [{
      Component: ButtonGroup,
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
  }, {
    title: 'Button Group',
    snippetLocation: true,
    snippetContent: true,
    description: 'Button Group handles spacing buttons that may overflow to a new line. All buttons should be wrapped inside a button group.',
    children: [{
      Component: ButtonGroup,
      children: [{
        Component: Button,
        children: 'A Button',
      }, {
        Component: Button,
        children: 'A Button',
      }, {
        Component: Button,
        children: 'A Button',
      }],
    }],
  }, {
    title: 'Button Group - Joined',
    snippetLocation: true,
    snippetContent: true,
    description: 'Button Group handles spacing buttons that may overflow to a new line. All buttons should be wrapped inside a button group.',
    children: [{
      Component: ButtonGroup,
      props: {
        joined: true,
      },
      children: [{
        Component: Button,
        children: [{
          Component: Icon,
          props: { name: 'pencil' },
        }],
      }, {
        Component: Button,
        children: 'Button',
      }, {
        Component: Button,
        children: [{
          Component: Icon,
          props: { name: 'floppy-o' },
        }],
      }],
    }, {
      Component: ButtonGroup,
      props: {
        joined: true,
      },
      children: [{
        Component: Button,
        props: {
          outlined: true,
          size: 'lg',
        },
        children: [{
          Component: Icon,
          props: {
            name: 'pencil',
            size: 'lg',
          },
        }],
      }, {
        Component: Button,
        props: {
          outlined: true,
          size: 'lg',
        },
        children: [{
          Component: Icon,
          props: {
            name: 'trash',
            size: 'lg',
          },
        }],
      }, {
        Component: Button,
        props: {
          outlined: true,
          size: 'lg',
        },
        children: [{
          Component: Icon,
          props: {
            name: 'floppy-o',
            size: 'lg',
          },
        }],
      }],
    }],
  }],
};
