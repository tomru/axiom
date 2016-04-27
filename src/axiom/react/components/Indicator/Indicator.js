import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';

export class Indicator extends Component {
  render() {
    const { className, children } = this.props;
    const classes = classnames(className, 'ax-indicator__container');

    return (
      <div {...this.props} className={classes}>
        <div className="ax-indicator" />
        {children}
      </div>
    );
  }
}

export default enhance(
  Indicator,
  addDisplayName('Indicator'),
  addPropTypes('global'),
  addClassName('global'),
);
