import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';
import Grid from '../Grid/Grid';
import GridCell from '../Grid/GridCell';

export default class CardTitle extends Component {
  static propTypes = {
    title: { string: true },
  };

  render() {
    const { className, title, children } = this.props;
    const classes = classnames(className, 'ax-card__title');

    return (
      <div {...this.props} className={classes}>
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

export default enhance(CardTitle)(
  addDisplayName('CardTitle'),
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
