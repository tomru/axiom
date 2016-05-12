import React, { PropTypes, Component } from 'react';
import { Grid, GridCell } from 'axiom/react';
import { Icon } from 'axiom/react';
import { Link, Paragraph } from 'axiom/react';

export default class IconGrid extends Component {
  static propTypes = {
    icons: PropTypes.array.isRequired,
  };

  render() {
    const { icons } = this.props;

    return (
      <Grid>
        { icons.map(({ id, name }, index) =>
          <GridCell half="sm" key={ index } quarter="lg" third="md">
            <Link inheritColor={ true } title={ name } to={ `/docs/current/components/icon?iconId=${id}` }>
              <Grid responsive={ false }>
                <GridCell shrink={ true }>
                  <Icon fixedWidth={ true } name={ id } />
                </GridCell>

                <GridCell>
                  <Paragraph textEllipsis={ true }>{ id }</Paragraph>
                </GridCell>
              </Grid>
            </Link>
          </GridCell>
        ) }
      </Grid>
    );
  }
}
