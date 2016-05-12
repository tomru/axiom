import React, { Component } from 'react';
import { LabelGroup, Label } from 'axiom/react';
import { statuses } from 'docs';

export default class DocStatus extends Component {
  render() {
    const { status } = this.props;
    const statusColors = {
      [statuses.EXPERIMENTAL]: 'red',
      [statuses.BETA]: 'blue',
      [statuses.STABLE]: 'green',
      [statuses.NEEDS_REVISION]: 'yellow',
    };

    const statusText = {
      [statuses.EXPERIMENTAL]: 'Experimental',
      [statuses.BETA]: 'Beta',
      [statuses.STABLE]: 'Stable',
      [statuses.NEEDS_REVISION]: 'Needs Revision',
    };

    return (
      <LabelGroup>
        <Label textCase="upper" color={statusColors[status]} size="sm">
          {statusText[status]}
        </Label>
      </LabelGroup>
    );
  }
}
