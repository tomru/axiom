import React, { Component } from 'react';
import CodeSnippet from 'documentation/components/CodeSnippet';
import CodeTabset from 'documentation/components/CodeTabset';
import { Layout, LayoutHeader, LayoutNav, LayoutTitle, LayoutMain, LayoutContent, LayoutFooter } from 'axiom/react/layouts/emblem';
import { Card, CardContent, CardTitle } from 'axiom/react';

export default class EmblemDocs extends Component {
  static imports = {
    sass: `@import 'axiom/sass/layouts/emblem';`,
    jsx: `import { Layout, LayoutHeader, LayoutNav, LayoutTitle, LayoutMain, LayoutContent, LayoutFooter } from 'axiom/react/layouts/emblem';`,
  };

  static meta = {
    description: 'The Emblem layout is the iconic Brandwatch layout where the logo hanging proudly from the top of the page.'
  };

  render() {
    return (
      <div>
        <img width="100%" src="/assets/emblem.svg" />

        <Card>
          <CardContent>
            <CodeTabset>
              <CodeSnippet language="html">
                <Layout>
                  <LayoutHeader>
                    <LayoutNav>
                      // Nav Content
                    </LayoutNav>

                    <LayoutTitle>
                      // Title content
                    </LayoutTitle>
                  </LayoutHeader>

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
                    <LayoutNav>
                      // Nav Content
                    </LayoutNav>

                    <LayoutTitle>
                      // Title content
                    </LayoutTitle>
                  </LayoutHeader>

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
