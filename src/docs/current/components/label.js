import { breakpoints, colorPalette, colorAliases } from 'axiom/sass';
import { Label, LabelGroup } from 'axiom/react';

export default {
  id: 'label',
  path: 'label',
  group: 'components',
  components: [{
    Component: LabelGroup,
    children: [{
      Component: Label
    }],
  }],
  sass: [
    '/components/label'
  ],
  examples: () => [{
    title: 'Colored Labels',
    children: [{
      title: 'Palette Colors',
      snippetLocation: true,
      snippetContent: true,
      Container: LabelGroup,
      children: colorPalette.reduce((acc, colors) => {
        colors.forEach(({name}) => {
          acc.push({
            Component: Label,
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
          Container: LabelGroup,
          snippetContent: true,
          children: colors.reduce((acc, colors) => {
            colors.forEach(({name}) => {
              acc.push({
                Component: Label,
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
      Container: LabelGroup,
      snippetContent: true,
      children: ['sm', 'md', 'lg'].map((size) => {
        return {
          Component: Label,
          props: {
            size: size,
          },
          demoProps: {
            color: 'primary',
          },
          demoContent: true,
          children: `Label (${size.toUpperCase()})`,
        };
      }),
    }],
  }, {
    title: 'Full width',
    snippetLocation: true,
    children: [{
      Container: LabelGroup,
      snippetContent: true,
      children: [{
        Component: Label,
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
          Component: Label,
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
    title: 'Label with an Icon',
    snippetLocation: true,
    children: [{
      Container: LabelGroup,
      snippetContent: true,
      children: [{
        Component: Label,
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
        Component: Label,
        children: 'Regular',
        demoContent: true,
        demoProps: {
          color: 'yellow',
        },
        props: {
          icon: 'warning',
        },
      }, {
        Component: Label,
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
