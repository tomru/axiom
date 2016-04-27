import { getModuleComponents } from './docs-examples';

export function getApiDocs(components) {
  if (!components || !components.length) return;

  console.log(
    getModuleComponents(components)
      .map(({__ax_displayName, __ax_propTypes, __ax_propTypesSet}) => {
        return {
          name: __ax_displayName,
          propTypes: __ax_propTypes,
          inheritedPropTypes: __ax_propTypesSet,
        };
      })
  );
}
