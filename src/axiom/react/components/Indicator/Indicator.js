import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../../utils/components';

export class Indicator extends Component {
  render() {
    const { className } = this.props;
    const classes = classnames(className, 'ax-indicator__container');

    return (
      <div {...this.props} className={ classes }>
        <div className="ax-indicator" />
      </div>
    );
  }
}

export default enhance(Indicator)(
  addPropTypes('global'),
  addClassName('global'),
);
