import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardContent } from 'bw-axiom/react';
import { Billboard } from 'bw-axiom/react';
import { Grid, GridCell } from 'bw-axiom/react';
import { Heading } from 'bw-axiom/react';
import { LayoutContent } from 'bw-axiom/react/layouts/established';
import { render2 } from 'style-guide/utils/markdown-to-remarkable';
import { pathToMarkdownRoute, getMarkdownContentFunction } from 'style-guide//utils/markdown-document';

export class Doc extends Component {
  static propTypes = {
    location: PropTypes.shape({
      query: PropTypes.object.isRequired,
    }).isRequired,
    routeParams: PropTypes.shape({
      splat: PropTypes.array.isRequired,
    }).isRequired,
  };

  render() {
    const {
      routeParams,
      location: { pathname, query },
    } = this.props;

    const markdownRoute = pathToMarkdownRoute(pathname);
    const markdownContentFunction = getMarkdownContentFunction(markdownRoute);
    const renderedContent = render2(markdownContentFunction, routeParams, query);

    return (
      <div>
        <Billboard color="blue-grey" image="/assets/axiom-bg.jpg" overlay={ true }>
          <LayoutContent>
            <Card transparent={ true }>
              <CardContent>
                <Grid vAlign="bottom">
                  <GridCell>
                    <Heading level={ 4 } textCase="capital">{ markdownRoute[markdownRoute.length - 1] }</Heading>
                    <Heading level={ 2 } textCase="capital">{ markdownRoute.slice(0, -1).join(' / ') }</Heading>
                  </GridCell>
                </Grid>
              </CardContent>
            </Card>
          </LayoutContent>
        </Billboard>

        <LayoutContent>
          { renderedContent }
        </LayoutContent>
      </div>
    );
  }
}


function select() {
  return {};
}

export default connect(select)(Doc);
