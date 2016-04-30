import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';

export class LayoutContent extends Component {
  render() {
    const { children, className } = this.props;
    const classes = classnames(className, 'ax-layout__content');

    return (
      <div className={classes}>
        {children}
      </div>
    );
  }
}

export default enhance(LayoutContent)(
  addDisplayName('LayoutContent'),
  addPropTypes('global'),
  addClassName('global'),
);

