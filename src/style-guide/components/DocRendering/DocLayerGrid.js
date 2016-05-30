import React, { Component, PropTypes } from 'react';
import { Grid, GridCell } from 'bw-axiom/react';
import DocLayer from 'style-guide/components/DocRendering/DocLayer';

export default class DocLayerGrid extends Component {
  static propTypes = {
    layer: PropTypes.object.isRequired,
  };

  render() {
    const { layer } = this.props;

    return (
      <Grid {...layer.props}>
        { layer.children.map((childLayer, index) =>
          <GridCell {...childLayer.props} key={ index }>
            <DocLayer layer={ childLayer } />
          </GridCell>
        ) }
      </Grid>
    );
  }
}
