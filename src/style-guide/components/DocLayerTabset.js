import React, { Component } from 'react';
import { Tabset, Tab } from 'axiom/react';
import DocLayer from 'style-guide/components/DocLayer';

export default class DocLayerGrid extends Component {
  render() {
    const { layer, title } = this.props;

    return (
      <Tabset {...layer.props}>
        {layer.children.map((childLayer, index) =>
          <Tab {...childLayer.props} key={index}>
            <DocLayer layer={childLayer} />
          </Tab>
        )}
      </Tabset>
    );
  }
}
