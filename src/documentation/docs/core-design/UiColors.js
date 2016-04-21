import React, { Component } from 'react';
import humanize from 'humanize-string';
import { colorAliases } from 'sass-vars';
import ColorSwatch from 'documentation/components/ColorSwatch';
import { Card, CardContent, CardTitle } from 'axiom/react';
import { Grid, GridCell } from 'axiom/react';
import { Heading } from 'axiom/react';

export default class UiColorsDocs extends Component {
  static imports = {
    sass: `@import "axiom-vars";`,
    js: `import { colorSentimentPositive ... } from 'axiom/sass';`
  };

  static meta = {
    description: 'UI Colors act as meaningful aliases for colors provided by the palette.'
  };

  render() {
    return (
      <div>
        {colorAliases.map(({heading, colors}, aIndex) => {
          return (
            <Card key={aIndex}>
              <CardTitle title={heading} />
              <CardContent>
                {colors.map((group, bIndex) =>
                  <Grid key={bIndex}>
                    {group.map(({name, color}, cIndex) =>
                      <GridCell key={cIndex}>
                        <Heading level={5}>{humanize(name)}</Heading>
                        <ColorSwatch name={name} color={color} />
                      </GridCell>
                    )}
                  </Grid>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    );
  }
}
