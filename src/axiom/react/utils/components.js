import React, { Children } from 'react';
import { mergeClassNameSets } from './class-name';
import { mergePropTypeSets, mapToPropTypes } from './prop-types';

export function findComponent(components, Component) {
  return Children.toArray(components).find(({type}) => type === Component);
}

export function findComponents(components, Component) {
  return Children.toArray(components).filter(({type}) => type === Component);
}

export function enhance(Component) {
  return (...transforms) => {
    return transforms.reduce((result, transform) => {
      return transform(result);
    }, Component);
  };
}

export function addDisplayName(name) {
  return (Component) => {
    Component.__ax_displayName = name;
    return Component;
  };
}

export function addPropTypes(...propSets) {
  return (Component) => {
    Component.__ax_propTypes = Component.propTypes;
    Component.__ax_propTypesSet = mergePropTypeSets(propSets);
    Component.propTypes = mapToPropTypes({
      ...Component.__ax_propTypes,
      ...Component.__ax_propTypesSet,
    });

    return Component;
  }
}

export function addClassName(...classNameSets) {
  return (Component) => {
    class Wrapped extends Component {
      render() {
        return <Component {...this.props}
          ref="original"
          className={mergeClassNameSets(this.props, classNameSets)} />
      }
    }

    for (let staticProp in Component) {
      Wrapped[staticProp] = Component[staticProp];
    }

    return Wrapped;
  };
}
