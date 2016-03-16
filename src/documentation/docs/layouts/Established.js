import React, { Component } from 'react';
import CodeSnippet from 'documentation/components/CodeSnippet';
import CodeTabset from 'documentation/components/CodeTabset';
import { Card, CardContent, CardTitle } from 'axiom/react';
import { Layout, LayoutHeader, LayoutSidebar, LayoutMain, LayoutNav, LayoutContent, LayoutFooter } from 'axiom/react/layouts/established';

export default class EstablishedDocs extends Component {
  static imports = {
    sass: `
      @import 'axiom/sass/layouts/established';
      @import 'axiom/sass/layouts/established-navigation';
    `,
    jsx: `import { Layout, LayoutHeader, LayoutSidebar, LayoutMain, LayoutNav, LayoutContent, LayoutFooter } from 'axiom/react/layouts/established';`,
  };

  static meta = {
    description: 'The Established layout is responsive with a sidebar ... ooooo.'
  };

  render() {
    return (
      <div>
        <img width="100%" src="/assets/established.svg" />

        <Card>
          <CardContent>
            <CodeTabset>
              <CodeSnippet language="html">
                <Layout>
                  <LayoutHeader>
                    // Header content
                  </LayoutHeader>

                  <LayoutSidebar>
                    // Sidebar content
                    <LayoutNav items={[]} />
                  </LayoutSidebar>

                  <LayoutMain>
                    <LayoutContent>
                      // Main page content
                    </LayoutContent>
                  </LayoutMain>

                  <LayoutFooter />
                </Layout>
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <Layout>
                  <LayoutHeader>
                    // Header content
                  </LayoutHeader>

                  <LayoutSidebar>
                    // Sidebar content
                    <LayoutNav items={[]} />
                  </LayoutSidebar>

                  <LayoutMain>
                    <LayoutContent>
                      // Main page content
                    </LayoutContent>
                  </LayoutMain>

                  <LayoutFooter />
                </Layout>
              `}</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>
      </div>
    );
  }
}
