import React, { PropTypes, Component } from 'react';
import { Grid, GridCell } from 'axiom/react';
import { Icon } from 'axiom/react';
import { Link, Paragraph } from 'axiom/react';

export default class IconGrid extends Component {
  static propTypes = {
    icons: PropTypes.array.isRequired,
  };

  render() {
    const {icons} = this.props;

    return (
      <Grid>
        {icons.map(({id, name}, index) =>
          <GridCell half="sm" third="md" quarter="lg" key={index}>
            <Link to={`/docs/current/components/icon?iconId=${id}`} inheritColor={true} title={name}>
              <Grid responsive={false}>
                <GridCell shrink={true}>
                  <Icon name={id} fixedWidth={true} />
                </GridCell>

                <GridCell>
                  <Paragraph textEllipsis={true}>{id}</Paragraph>
                </GridCell>
              </Grid>
            </Link>
          </GridCell>
        )}
      </Grid>
    );
  }
};
