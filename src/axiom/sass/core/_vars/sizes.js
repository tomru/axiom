export const spacingXs = '3px';
export const spacingSm = '7px';
export const spacingBase = '15px';
export const spacingLg = '30px';
export const spacingXl = '45px';
export const spacingXxl = '60px';

export const layoutWidthSm = '768px';
export const layoutWidthMd = '992px';
export const layoutWidthLg = '1200px';

export const borderWidthSm = '1px';
export const borderWidthBase = '2px';
export const borderWidthLg = '3px';

export const borderRadiusSm = '2px;'
export const borderRadiusBase = '3px';
export const borderRadiusLg = '5px';
export const borderRadiusXl = '10px';

export default {
  spacingXs,
  spacingSm,
  spacingBase,
  spacingLg,
  spacingXl,
  spacingXxl,

  layoutWidthSm,
  layoutWidthMd,
  layoutWidthLg,
  layoutChangePoint: layoutWidthSm,

  breakpoints: [
    { id: 'sm', width: layoutWidthSm },
    { id: 'md', width: layoutWidthMd },
    { id: 'lg', width: layoutWidthLg },
  ],

  borderWidthSm,
  borderWidthBase,
  borderWidthLg,

  borderRadiusSm,
  borderRadiusBase,
  borderRadiusLg,
  borderRadiusXl,

  pagePaddingV: spacingLg,
  pagePaddingH: spacingLg,

  containerPaddingVSm: spacingBase,
  containerPaddingVBase: spacingLg,
  containerPaddingVLg: spacingXl,

  containerPaddingHSm: spacingBase,
  containerPaddingHBase: spacingLg,
  containerPaddingHLg: spacingXl,

  containerMarginVSm: spacingBase,
  containerMarginVBase: spacingLg,
  containerMarginVLg: spacingXl,

  containerMarginHSm: spacingBase,
  containerMarginHBase: spacingLg,
  containerMarginHLg: spacingXl,

  componentPaddingVSm: spacingXs,
  componentPaddingVBase: spacingSm,
  componentPaddingVLg: spacingBase,

  componentPaddingHSm: spacingSm,
  componentPaddingHBase: spacingBase,
  componentPaddingHLg: spacingLg,

  componentMarginVSm: spacingSm,
  componentMarginVBase: spacingBase,
  componentMarginVLg: spacingLg,

  componentMarginHSm: spacingSm,
  componentMarginHBase: spacingBase,
  componentMarginHLg: spacingLg,

  componentBorderWidthBase: borderWidthSm,
  componentBorderWidthLg: borderWidthBase,
};
