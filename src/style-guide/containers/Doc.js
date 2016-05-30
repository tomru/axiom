import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardContent } from 'bw-axiom/react';
import { Billboard } from 'bw-axiom/react';
import { Grid, GridCell } from 'bw-axiom/react';
import { Heading } from 'bw-axiom/react';
import { LayoutContent } from 'bw-axiom/react/layouts/established';
import DocApiDialogTrigger from 'style-guide/components/DocApi/DocApiDialogTrigger';
import { getParentNames } from 'style-guide/utils/navigation';
import { renderApiDocs } from 'style-guide/utils/rendering/rendering-api';
import { renderImports } from 'style-guide/utils/rendering/rendering-imports';

export class Doc extends Component {
  static propTypes = {
    children: PropTypes.node,
    navigationState: PropTypes.shape({
      activeVersion: PropTypes.string.isRequired,
      versions: PropTypes.object.isRequired,
    }).isRequired,
    route: PropTypes.shape({
      doc: PropTypes.object.isRequired,
      navItem: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    const {
      children,
      navigationState: {
        activeVersion,
        versions,
      },
      route: {
        doc,
        navItem,
      },
    } = this.props;

    const apiDocs = renderApiDocs(doc);
    const importDocs = renderImports(doc);

    return (
      <div>
        <Billboard color="blue-grey" image="/assets/axiom-bg.jpg" overlay={ true }>
          <LayoutContent>
            <Card transparent={ true }>
              <CardContent>
                <Grid vAlign="bottom">
                  <GridCell>
                    <Heading level={ 4 }>{
                      getParentNames(versions[activeVersion], navItem)
                        .slice(-1)
                        .reverse()
                        .join(' / ')
                    }</Heading>
                    <Heading level={ 2 }>{ navItem.name }</Heading>
                  </GridCell>

                  {
                    do {
                      if (apiDocs.length) {
                        <GridCell shrink={ true }>
                          <DocApiDialogTrigger
                              apiDocs={ apiDocs }
                              importDocs={ importDocs }
                              title={ navItem.name } />
                        </GridCell>
                      }
                    }
                  }
                </Grid>
              </CardContent>
            </Card>
          </LayoutContent>
        </Billboard>

        { children }
      </div>
    );
  }
}


function select(state) {
  return {
    navigationState: state.navigation,
  };
}

export default connect(select)(Doc);
