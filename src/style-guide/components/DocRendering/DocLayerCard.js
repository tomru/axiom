import React, { Component } from 'react';
import { Card, CardContent, CardTitle } from 'axiom/react';
import DocLayer from 'style-guide/components/DocRendering/DocLayer';
import DocStatus from 'style-guide/components/DocRendering/DocStatus';

export default class DocLayerCard extends Component {
  render() {
    const { Component, layer, children } = this.props;
    const hasTitleContent = layer.container && layer.container.title && layer.container.title.children;

    return (
      <Card>
        {do {
          if (layer.title) {
            <CardTitle title={layer.title}>
              {do {
                if (layer.status) {
                  <DocStatus status={layer.status} />
                }
              }}
            </CardTitle>
          }
        }}

        <CardContent>
          {layer.children.map((child, index) =>
            <DocLayer
              Component={Component}
              layer={child}
              key={index} />
          )}
          {children}
        </CardContent>
      </Card>
    );
  }
}
