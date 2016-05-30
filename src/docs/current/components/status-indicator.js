import { StatusIndicator } from 'bw-axiom/react';
import { colorPalette, colorAliases } from 'bw-axiom/sass';

export default {
  id: 'status-indicator',
  path: 'status-indicator',
  group: 'components',
  imports: {
    sass: ['components/status-indicator'],
  },
  components: [{
    Component: StatusIndicator,
  }],
  examples: () => [{
    title: 'Colored Status Indicators',
    children: [{
      title: 'Palette Colors',
      snippetLocation: true,
      snippetContent: true,
      children: colorPalette.reduce((acc, colors) => {
        colors.forEach(({ name }) => {
          acc.push({
            Component: StatusIndicator,
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
      children: [
        ...colorAliases.map(({ heading, colors }) => {
          return {
            title: heading,
            snippetContent: true,
            children: colors.reduce((acc, colors) => {
              colors.forEach(({ name }) => {
                acc.push({
                  Component: StatusIndicator,
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
        {
          title: 'Scheme Primary',
          snippetContent: true,
          children: [{
            Component: StatusIndicator,
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
    title: 'Sizes',
    snippetLocation: true,
    snippetContent: true,
    children: StatusIndicator.__ax_propTypes.size.oneOf.map((size) => {
      return {
        Component: StatusIndicator,
        props: {
          size: size,
        },
        demoContent: true,
        children: `Status Indicator (${size.toUpperCase()})`,
      };
    }),
  }],
};
