import React, { Component } from 'react';
import { Grid, GridCell } from 'axiom/react';
import DocLayer from 'style-guide/components/DocRendering/DocLayer';

export default class DocLayerGrid extends Component {
  render() {
    const { layer } = this.props;

    return (
      <Grid {...layer.props}>
        {layer.children.map((childLayer, index) =>
          <GridCell {...childLayer.props} key={index}>
            <DocLayer layer={childLayer} />
          </GridCell>
        )}
      </Grid>
    );
  }
}
