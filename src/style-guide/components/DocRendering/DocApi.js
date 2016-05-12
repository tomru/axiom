import React, { Component, PropTypes } from 'react';
import { Card, CardTitle, CardList, CardListItem } from 'axiom/react';
import { Grid, GridCell } from 'axiom/react';
import { LabelGroup, Label } from 'axiom/react';
import { Heading } from 'axiom/react';
import DocApiPropType from 'style-guide/components/DocRendering/DocApiPropType';

export default class DocApi extends Component {
  static propTypes = {
    apiDoc: PropTypes.shape({
      name: PropTypes.string.isRequired,
      propTypes: PropTypes.object.isRequired,
    }).isRequired,
  };

  render()  {
    const { apiDoc: { name, propTypes } } = this.props;

    return (
      <Card>
        <CardTitle title={ name } />
        <CardList>
          { Object.keys(propTypes).sort().map((key) =>
            <CardListItem>
              <Grid vAlign="middle">
                <GridCell>
                  <Heading key="heading" level={ 5 }>{ key }</Heading>
                </GridCell>

                <GridCell shrink={ true }>
                  <LabelGroup key="labels">
                    { do {
                      if (propTypes[key].default) {
                        <Label color="green" size="sm">
                          Defaults: { propTypes[key].default }
                        </Label>
                      }
                    } }
                    { do {
                      if (propTypes[key].isRequired) {
                        <Label color="red" size="sm">Required</Label>
                      } else {
                        <Label color="blue" size="sm">Optional</Label>
                      }
                    } }
                  </LabelGroup>
                </GridCell>
              </Grid>

              <pre className="dm-doc-api__pre">
                <DocApiPropType propType={ propTypes[key] } />
              </pre>
            </CardListItem>
          ) }
        </CardList>
      </Card>
    );
  }
}

