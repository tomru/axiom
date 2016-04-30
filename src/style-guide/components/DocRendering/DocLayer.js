import React, { Component, PropTypes } from 'react';
import { BlockContainer, Button } from 'axiom/react';
import { Heading } from 'axiom/react';
import DocLayerCard from 'style-guide/components/DocRendering/DocLayerCard';
import DocLayerGrid from 'style-guide/components/DocRendering/DocLayerGrid';
import DocLayerTabset from 'style-guide/components/DocRendering/DocLayerTabset';
import DocLayerCode from 'style-guide/components/DocRendering/DocLayerCode';

const renderMap = {
  card: DocLayerCard,
  grid: DocLayerGrid,
  tabset: DocLayerTabset,
};

function renderComponentTree(layer, key) {
  if (typeof layer === 'string') {
    return layer;
  }

  const { Component, props, demoProps } = layer;

  return (
    <Component {...props} {...demoProps} key={key}>
      {renderChildren(layer)}
    </Component>
  );
}

function renderChildren({children}) {
  if (Array.isArray(children)) {
    return children.map((child, index) => renderComponentTree(child, index))
  }

  if (typeof children === 'string') {
    return children;
  }
}

export default class DocLayer extends Component {
  static propTypes = {
    layer: PropTypes.object.isRequired,
    topLevel: PropTypes.bool,
  };

  render() {
    const {topLevel = false, layer} = this.props;

    if (typeof layer === 'string') {
      return layer;
    }

    const {
      type,
      children = [],
      snippetLocation,
      demoRender = true,
      Component,
      Container = !Component && BlockContainer,
      PredefinedContainer = renderMap[topLevel ? 'card' : type],
    } = layer;

    if (!demoRender) {
      if (snippetLocation) {
        return <DocLayerCode layer={layer}></DocLayerCode>;
      }
    }

    if (PredefinedContainer) {
      return (
        <PredefinedContainer layer={layer}>
          {do {
            if (snippetLocation) {
              <DocLayerCode layer={layer}></DocLayerCode>;
            }
          }}
        </PredefinedContainer>
      );
    }

    if (Container) {
      return (
        <Container {...layer.props}>
          {do {
            if (layer.title) {
              <Heading level={5}>{layer.title}</Heading>
            }
          }}
          {children.map((child, index) => <DocLayer layer={child} key={index} />)}
          {do {
            if (snippetLocation) {
              <DocLayerCode layer={layer}></DocLayerCode>;
            }
          }}
        </Container>
      );
    }

    if (Component) {
      return renderComponentTree(layer);
    }
  }
}
