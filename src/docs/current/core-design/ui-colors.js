import { colorAliases } from 'axiom/sass';
import ColorSwatch from 'style-guide/components/ColorSwatch/ColorSwatch';

export default {
  id: 'ui-colors',
  path: 'ui-colors',
  group: 'core-design',
  imports: {
    sass: ['core/core'],
  },
  examples: () => colorAliases.map(({ heading, colors }) => {
    return {
      title: heading,
      children: colors.map((group) => {
        return {
          type: 'grid',
          children: group.map(({ name, color }) => {
            return {
              Component: ColorSwatch,
              props: { name, color },
            };
          }),
        };
      }),
    };
  }),
};
