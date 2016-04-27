import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';
import { Grid, GridCell, Icon, Link } from '../../';

export class LayoutHeader extends Component {
  static contextTypes = {
    toggleSidebar: PropTypes.func,
  };

  render() {
    const { className, children } = this.props;
    const { toggleSidebar } = this.context;
    const classes = classnames(className, 'ax-layout__header');

    return (
      <header className={classes}>
        <Grid responsive={false} vAlign="middle">
          <GridCell visibleUntil="sm">
            <h3>{children}</h3>
          </GridCell>

          <GridCell hiddenUntil="sm">
            <h2>{children}</h2>
          </GridCell>

          <GridCell visibleUntil="sm" shrink={true}>
            <Link onClick={toggleSidebar}
                  inheritColor={true}
                  noDecoration={true}>
              <Icon size="lg" name="bars" />
            </Link>
          </GridCell>
        </Grid>
      </header>
    );
  }
}

export default enhance(
  LayoutHeader,
  addDisplayName('LayoutHeader'),
  addPropTypes('global'),
  addClassName('global'),
);
