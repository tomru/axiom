import React, { Component } from 'react';
import Grid from '../Grid/Grid';
import GridCell from '../Grid/GridCell';

export default class CardTitle extends Component {
  render() {
    const {title, children} = this.props;

    return (
      <div className="ax-card__title">
        <Grid vAlign="middle">
          <GridCell>
            <h4>{title}</h4>
          </GridCell>

          {do {
            if (children) {
              <GridCell shrink={true}>
                {children}
              </GridCell>
            }
          }}
        </Grid>
      </div>
    );
  }
}
