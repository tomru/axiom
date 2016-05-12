import React, { Component, PropTypes } from 'react';
import { Card, CardContent, CardTitle } from 'axiom/react';
import DocLayer from 'style-guide/components/DocRendering/DocLayer';
import DocStatus from 'style-guide/components/DocRendering/DocStatus';

export default class DocLayerCard extends Component {
  static propTypes = {
    children: PropTypes.node,
    layer: PropTypes.shape({
      title: PropTypes.string,
      status: PropTypes.status,
      children: PropTypes.array.isRequired,
    }).isRequired,
  };

  render() {
    const {
      children,
      layer: {
        children: layerChildren,
        status,
        title,
      },
    } = this.props;

    return (
      <Card>
        { do {
          if (title) {
            <CardTitle title={ title }>
              { do {
                if (status) {
                  <DocStatus status={ status } />
                }
              } }
            </CardTitle>
          }
        } }

        <CardContent>
          { layerChildren.map((child, index) =>
            <DocLayer key={ index } layer={ child } />
          ) }
          { children }
        </CardContent>
      </Card>
    );
  }
}
