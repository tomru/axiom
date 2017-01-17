import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Grid, GridCell, IconLink, Heading  } from 'bw-axiom/';

if (__INCLUDE_CSS__) {
  require('./LayoutHeader.scss');
}

export default class LayoutHeader extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static contextTypes = {
    toggleSidebar: PropTypes.func,
  };

  render() {
    const { className, children } = this.props;
    const { toggleSidebar } = this.context;
    const classes = classnames(className, 'dm-layout__header');

    return (
      <header className={ classes }>
        <Grid responsive={ false } vAlign="middle">
          <GridCell>
            <Heading style="title">{ children }</Heading>
          </GridCell>

          <GridCell shrink={ true } visibleUntil="small">
            <IconLink name="ellipsis" onClick={ toggleSidebar } />
          </GridCell>
        </Grid>
      </header>
    );
  }
}
