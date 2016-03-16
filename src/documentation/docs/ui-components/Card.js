import React, { Component } from 'react';
import CodeSnippet from 'documentation/components/CodeSnippet';
import CodeTabset from 'documentation/components/CodeTabset';
import { Button, ButtonGroup } from 'axiom/react';
import { Card, CardContent, CardTitle } from 'axiom/react';
import { Grid, GridCell } from 'axiom/react';
import { Icon } from 'axiom/react';

export default class CardDocs extends Component {
  static imports = {
    sass: `@import 'axiom/sass/components/card';`,
    jsx: `import { Card, CardTitle, CardContent } from 'axiom/react';`,
  };

  static meta = {
    description: 'The main container that gives content alignment and statement.'
  };

  render() {
    return (
      <div>
        <Card>
          <CardTitle title="Standard card"/>
          <CardContent>
            <p>This is a standrd Card with a title.</p>

            <CodeTabset>
              <CodeSnippet language="html">
                <Card>
                  <CardTitle title="..." />
                  <CardContent>
                    ...
                  </CardContent>
                </Card>
              </CodeSnippet>

              <CodeSnippet language="jsx">{`
                <Card>
                  <CardTitle title="..." />
                  <CardContent>
                    ...
                  </CardContent>
                </Card>
              `}</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Card with actions">
            <ButtonGroup>
              <Button color="primary">Action</Button>
              <Button color="red">
                <Icon name="trash" />
              </Button>
              <Button color="green">
                <Icon name="check" />
              </Button>
            </ButtonGroup>
          </CardTitle>

          <CardContent>
            <CodeTabset>
              <CodeSnippet language="html">
                <Card>
                  <CardTitle title="...">
                    ... Actions
                  </CardTitle>
                </Card>
              </CodeSnippet>

              <CodeSnippet language="jsx">{`
                <Card>
                  <CardTitle title="...">
                    ... Actions
                  </CardTitle>
                </Card>
              `}</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>
      </div>
    );
  }
}
