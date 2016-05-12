import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../../utils/components';
import { Grid, GridCell, Icon, Link } from '../../';

export class LayoutHeader extends Component {
  static propTypes = {
    children: { node: true, isRequired: true },
  };

  static contextTypes = {
    toggleSidebar: PropTypes.func,
  };

  render() {
    const { className, children } = this.props;
    const { toggleSidebar } = this.context;
    const classes = classnames(className, 'ax-layout__header');

    return (
      <header className={ classes }>
        <Grid responsive={ false } vAlign="middle">
          <GridCell visibleUntil="sm">
            <h3>{ children }</h3>
          </GridCell>

          <GridCell hiddenUntil="sm">
            <h2>{ children }</h2>
          </GridCell>

          <GridCell shrink={ true } visibleUntil="sm">
            <Link inheritColor={ true } noDecoration={ true } onClick={ toggleSidebar } >
              <Icon name="bars" size="lg" />
            </Link>
          </GridCell>
        </Grid>
      </header>
    );
  }
}

export default enhance(LayoutHeader)(
  addPropTypes('global'),
  addClassName('global'),
);
