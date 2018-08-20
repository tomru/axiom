import React, { Component } from 'react';
import { Text } from '@brandwatch/axiom-components';

export default class ChartLabel extends Component {
  render() {
    return (
      <div className="ax-chart-layout__x-label">
        <Text { ...this.props } className="ax-chart-layout__x-label-inner" textColor="subtle" textSize="small" />
      </div>
    );
  }
}
