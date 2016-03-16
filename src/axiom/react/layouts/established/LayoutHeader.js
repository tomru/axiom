import React, { PropTypes, Component } from 'react';
import { Grid, GridCell, Icon, Link } from '../../';

export default class LayoutHeader extends Component {
  static contextTypes = {
    toggleSidebar: PropTypes.func,
  };

  render() {
    const { children } = this.props;
    const { toggleSidebar } = this.context;

    return (
      <header className="ax-layout__header">
        <Grid responsive={false} vAlign="middle">
          <GridCell className="ax-visible-until--sm">
            <h3>{children}</h3>
          </GridCell>

          <GridCell className="ax-hidden-until--sm">
            <h2>{children}</h2>
          </GridCell>

          <GridCell className="ax-visible-until--sm" shrink={true}>
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
