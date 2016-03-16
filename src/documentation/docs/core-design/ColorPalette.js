import React, { Component } from 'react';
import { colorPalette } from 'sass-vars';
import ColorSwatch from 'documentation/components/ColorSwatch';
import { Card, CardContent } from 'axiom/react';
import { Grid, GridCell } from 'axiom/react';

export default class ColorPaletteDocs extends Component {
  static imports = {
    sass: `@import "axiom-vars";`,
    js: `import { colorRed ... } from 'axiom/sass';`
  };

  static meta = {
    description: 'The color palette contains every single color that is available to use within the application.',
  }

  render() {
    return (
      <div>
        {colorPalette.map((colors, aIndex) =>
          <Card key={aIndex}>
            <CardContent>
              <Grid>
                {colors.map(({ name, color }, bIndex) =>
                  <GridCell key={bIndex}>
                    <ColorSwatch name={name} color={color} />
                  </GridCell>
                )}
              </Grid>
            </CardContent>
          </Card>
        )}
      </div>
    );
  }
}
