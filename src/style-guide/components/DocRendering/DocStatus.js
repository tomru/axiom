import React, { Component, PropTypes } from 'react';
import { LabelGroup, Label } from 'bw-axiom/react';
import { statuses } from 'docs';

export default class DocStatus extends Component {
  static propTypes = {
    status: PropTypes.string.isRequired,
  };

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
        <Label color={ statusColors[status] } size="sm" textCase="upper">
          { statusText[status] }
        </Label>
      </LabelGroup>
    );
  }
}
