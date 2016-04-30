import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';
import LayoutContent from './LayoutContent';

export class LayoutNav extends Component {
  render() {
    const { children, className } = this.props;
    const classes = classnames(className, 'ax-layout__nav-container');

    return (
      <div className={classes}>
        <LayoutContent>
          <div className="ax-layout__nav">
            { children }
          </div>
        </LayoutContent>
      </div>
    );
  }
}

export default enhance(LayoutNav)(
  addDisplayName('LayoutNav'),
  addPropTypes('global'),
  addClassName('global'),
);
