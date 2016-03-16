import React, { Component } from 'react';
import CodeSnippet from 'documentation/components/CodeSnippet';
import CodeTabset from 'documentation/components/CodeTabset';
import { Card, CardContent, CardTitle } from 'axiom/react';
import { Grid, GridCell } from 'axiom/react';
import { Tabset, Tab } from 'axiom/react';

export default class TabsetDocs extends Component {
  static imports = {
    sass: `@import 'axiom/sass/components/tabset';`,
    jsx: `import { Tabset, Tab } from 'axiom/react';`,
  };

  static meta = {
    description: 'Tabs provide a way to show dynamically visible areas of content. Whole page tabs should probably be avoided... just sayin\''
  };

  render() {
    return (
      <div>
        <Card>
          <CardTitle title="Tabs" />
          <CardContent>
            <Tabset>
              <Tab title="Tab 1">
                <p>Tab 1 content</p>
              </Tab>

              <Tab title="Tab 2">
                <p>Tab 2 content</p>
              </Tab>
            </Tabset>

            <CodeTabset>
              <CodeSnippet language="html">
                <Tabset>
                  <Tab title="Tab 1">
                    <p>Tab 1 content</p>
                  </Tab>

                  <Tab title="Tab 2">
                    <p>Tab 2 content</p>
                  </Tab>
                </Tabset>
              </CodeSnippet>

              <CodeSnippet language="jsx">{`
                <Tabset>
                  <Tab title="...">
                    ...
                  </Tab>
                </Tabset>
              `}</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>
      </div>
    );
  }
}
