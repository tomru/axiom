import designAnimations from '../../src/design-patterns/animations/_vars';
import designColors from '../../src/design-patterns/colors/_vars';
import designLayout from '../../src/design-patterns/layout/_vars';
import designSchemes from '../../src/design-patterns/schemes/_vars';
import designSpacing from '../../src/design-patterns/spacing/_vars';

import componentDialog from '../../src/components/dialog/_vars';
import componentGrid from '../../src/components/grid/_vars';
import componentLogo from '../../src/components/logo/_vars';
import componentTypography from '../../src/components/typography/_vars';

module.exports = {
  ...designAnimations,
  ...designColors,
  ...designLayout,
  ...designSchemes,
  ...designSpacing,

  ...componentDialog,
  ...componentGrid,
  ...componentLogo,
  ...componentTypography,

  zIndexDialog: 900,
};
