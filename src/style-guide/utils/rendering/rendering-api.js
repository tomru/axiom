import { extractComponents } from './extracting';

export function renderApiDocs(doc) {
  return extractComponents(doc)
    .map(({ __ax_displayName, __ax_propTypes, __ax_propTypesSet }) => {
      return {
        name: __ax_displayName,
        propTypes: __ax_propTypes,
        inheritedPropTypes: __ax_propTypesSet,
      };
    });
}
