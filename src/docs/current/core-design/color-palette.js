import { colorPalette } from 'axiom/sass';
import ColorSwatch from 'style-guide/components/ColorSwatch/ColorSwatch';

export default {
  id: 'color-palette',
  path: 'color-palette',
  group: 'core-design',
  imports: {
    sass: ['core/core'],
  },
  examples: () => colorPalette.map((colors) => {
    return {
      children: [{
        type: 'grid',
        children: colors.map(({ name, color }) => {
          return {
            Component: ColorSwatch,
            props: { name, color },
          };
        }),
      }],
    };
  }),
};
