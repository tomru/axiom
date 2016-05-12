import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';

export class LayoutMain extends Component {
  render() {
    const { className, children } = this.props;
    const classes = classnames(className, 'ax-layout__main');

    return (
      <main className={classes}>
        { children }
      </main>
    );
  }
}

export default enhance(LayoutMain)(
  addPropTypes('global'),
  addClassName('global'),
);
