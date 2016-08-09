import * as spacing from '../../design-patterns/spacing/_vars';

module.exports = {
  billboardSizes: [
    { id: 'sm', paddingV: spacing.containerPaddingVSm },
    { id: 'md', paddingV: spacing.containerPaddingVBase, default: true },
    { id: 'lg', paddingV: spacing.containerPaddingVLg },
  ],
};
