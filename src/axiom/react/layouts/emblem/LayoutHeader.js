import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';

export class LayoutHeader extends Component {
  render() {
    const { className, children } = this.props;
    const classes = classnames(className, 'ax-layout__header');

    return (
      <header className={classes}>
        { children }
      </header>
    );
  }
}

export default enhance(LayoutHeader)(
  addPropTypes('global'),
  addClassName('global'),
);
