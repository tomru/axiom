import React, { Component } from 'react';
import CodeSnippet from 'documentation/components/CodeSnippet';
import CodeTabset from 'documentation/components/CodeTabset';
import { Avatar } from 'axiom/react';
import { Card, CardContent, CardTitle } from 'axiom/react';
import { Grid, GridCell } from 'axiom/react';

export default class AvatarDocs extends Component {
  static imports = {
    sass: `@import 'axiom/sass/components/avatar';`,
    jsx: `import { Avatar } from 'axiom/react';`,
    api: `const axiom = require('axiom/api');`,
  };

  static meta = {
    description: 'Have a user picture? Then an Avatar is what you need, configurable sizes, borders and shape.'
  };

  render() {
    return (
      <div>
        <Card>
          <CardTitle title="Sized avatars" />
          <CardContent>
            <Grid vAlign="bottom">
              <GridCell shrink={true}>
                <Avatar src="/assets/avatar.png" size="sm" />
              </GridCell>

              <GridCell shrink={true}>
                <Avatar src="/assets/avatar.png" size="md" />
              </GridCell>

              <GridCell shrink={true}>
                <Avatar src="/assets/avatar.png" size="lg" />
              </GridCell>
            </Grid>

            <CodeTabset>
              <CodeSnippet language="html">
                <Avatar src="..." size="sm" />
                <Avatar src="..." size="md" />
                <Avatar src="..." size="lg" />
              </CodeSnippet>

              <CodeSnippet language="jsx">{`
                <Avatar src="..." size="sm" />
                <Avatar src="..." size="md" />
                <Avatar src="..." size="lg" />
              `}</CodeSnippet>

              <CodeSnippet language="api">{`
                axiom('ui/avatar', {
                  src: '...',
                  size: "sm | md | lg"
                });
              `}</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>
      </div>
    );
  }
}
