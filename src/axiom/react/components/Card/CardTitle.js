import React, { Component, PropTypes } from 'react';
import { defaultPropTypes, mergeDefaultClassName } from '../../defaults';
import Grid from '../Grid/Grid';
import GridCell from '../Grid/GridCell';

export default class CardTitle extends Component {
  static propTypes = {
    ...defaultPropTypes,
    title: PropTypes.string,
  };

  render() {
    const {title, children} = this.props;
    const className = mergeDefaultClassName(this.props, 'ax-card__title');

    return (
      <div {...this.props} className={className}>
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
