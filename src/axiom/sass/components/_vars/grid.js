import vars from '../../core/vars';

export default {
  gridChangePoint: vars.layoutWidthSm,
  gridGutters: [
    { id: 'xs', size: vars.spacingXs },
    { id: 'sm', size: vars.spacingSm },
    { id: 'base', size: vars.spacingBase, default: true },
    { id: 'lg', size: vars.spacingLg },
    { id: 'xl', size: vars.spacingXl },
    { id: 'xxl', size: vars.spacingXxl },
  ],
};
