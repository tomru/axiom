import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardList, CardListItem } from 'axiom/react';
import { Grid, GridCell } from 'axiom/react';
import { LabelGroup, Label } from 'axiom/react';
import { Heading } from 'axiom/react';
import { LayoutContent } from 'axiom/react/layouts/established';
import DocApiPropType from 'style-guide/components/DocRendering/DocApiPropType';

export class DocApi extends Component {
  static propTypes = {
    route: PropTypes.shape({
      apiData: PropTypes.array.isRequired,
    }).isRequired,
  };

  render()  {
    const {
      route: {
        apiData,
      },
    } = this.props;

    return (
      <LayoutContent>
        { apiData.map((doc) =>
          <Card>
            <CardTitle title={ doc.name } />
            <CardList>
              { Object.keys(doc.propTypes).sort().map((key) =>
                <CardListItem>
                  <Grid vAlign="middle">
                    <GridCell>
                      <Heading key="heading" level={ 5 }>{ key }</Heading>
                    </GridCell>

                    <GridCell shrink={ true }>
                      <LabelGroup key="labels">
                        { do {
                          if (doc.propTypes[key].default) {
                            <Label color="green" size="sm">
                              Defaults: { doc.propTypes[key].default }
                            </Label>
                          }
                        } }
                        { do {
                          if (doc.propTypes[key].isRequired) {
                            <Label color="red" size="sm">Required</Label>
                          } else {
                            <Label color="blue" size="sm">Optional</Label>
                          }
                        } }
                      </LabelGroup>
                    </GridCell>
                  </Grid>

                  <pre className="dm-doc-api__pre">
                    <DocApiPropType propType={ doc.propTypes[key] } />
                  </pre>
                </CardListItem>
              ) }
            </CardList>
          </Card>
        ) }
      </LayoutContent>
    );
  }
}


function select() {
  return {};
}

export default connect(select)(DocApi);
