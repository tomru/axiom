import React, { Component, PropTypes } from 'react';
import { Card, CardTitle, CardList, CardListItem } from 'axiom/react';
import { Grid, GridCell } from 'axiom/react';
import { LabelGroup, Label } from 'axiom/react';
import { Heading, Paragraph, Strong } from 'axiom/react';
import DocApiPropType from 'style-guide/components/DocRendering/DocApiPropType';

export default class DocApi extends Component {
  render()  {
    const { apiDoc } = this.props;

    return (
      <Card>
        <CardTitle title={apiDoc.name} />
        <CardList>
          {Object.keys(apiDoc.propTypes).sort().map((key) =>
            <CardListItem>
              <Grid vAlign="middle">
                <GridCell>
                  <Heading level={5} key="heading">{key}</Heading>
                </GridCell>

                <GridCell shrink={true}>
                  <LabelGroup key="labels">
                    {do {
                      if (apiDoc.propTypes[key].default) {
                        <Label color="green" size="sm">
                          Defaults: {apiDoc.propTypes[key].default}
                        </Label>
                      }
                    }}
                    {do {
                      if (apiDoc.propTypes[key].isRequired) {
                        <Label color="red" size="sm">Required</Label>
                      } else {
                        <Label color="blue" size="sm">Optional</Label>
                      }
                    }}
                  </LabelGroup>
                </GridCell>
              </Grid>

              <pre className="dm-doc-api__pre">
                <DocApiPropType propType={apiDoc.propTypes[key]} />
              </pre>
            </CardListItem>
          )}
        </CardList>
      </Card>
    );
  }
}

