import React, { Component } from 'react';
import CodeTabset from 'documentation/components/CodeTabset';
import CodeSnippet from 'documentation/components/CodeSnippet';
import { Card, CardTitle, CardContent } from 'axiom/react';
import { Link, List, ListItem } from 'axiom/react';

export default class TypographyDocs extends Component {
  static imports = {
    sass: `@import 'axiom/sass/components/typography';`,
    jsx: `import { Link, List, ListItem } from 'axiom/react';`,
  };

  static meta = {
    description: 'Letters, characters, words - everything you need to get your point across.',
  }

  render() {
    return (
      <div>
        <Card>
          <CardTitle title="Sizing" />
          <CardContent>
            <h1>h1. <strong>Strong</strong> Standard <span className="ax-text--weak">Weak</span></h1>
            <h2>h2. <strong>Strong</strong> Standard <span className="ax-text--weak">Weak</span></h2>
            <h3>h3. <strong>Strong</strong> Standard <span className="ax-text--weak">Weak</span></h3>
            <h4>h4. <strong>Strong</strong> Standard <span className="ax-text--weak">Weak</span></h4>
            <h5>h5. <strong>Strong</strong> Standard <span className="ax-text--weak">Weak</span></h5>
            <p>p. <strong>Strong</strong> Standard <span className="ax-text--weak">Weak</span></p>
            <p><small>small. <strong>Strong</strong> Standard <span className="ax-text--weak">Weak</span></small></p>

            <CodeSnippet language="html">
              <h1 />
              <h2 />
              <h3 />
              <h4 />
              <h5 />
              <p />
              <small />
            </CodeSnippet>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Links" />
          <CardContent>
            <h1>Lorem ipsum dolor sit amet, <Link>consectetur</Link> adipiscing
                elit. Donec tempus ut felis vitae hendrerit.</h1>

            <p>Lorem ipsum dolor sit amet, <Link>consectetur</Link> adipiscing
               elit. Donec tempus ut felis vitae hendrerit.</p>

            <CodeTabset>
              <CodeSnippet language="html">
                <Link>...</Link>
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <Link />
              `}</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Decoration and style modifiers" />
          <CardContent>
            <p>This text is <strong>Bold</strong></p>
            <p>This text is <em>Italicized</em></p>
            <p>This text is <u>Underlined</u></p>
            <p>This text is <del>Strike Through</del></p>

            <CodeSnippet language="html">
              <strong />
              <em />
              <u />
              <del />
            </CodeSnippet>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Alignment modifiers" />
          <CardContent>
            <p className="ax-text--left">This text is left aligned.</p>
            <p className="ax-text--center">This text is center aligned.</p>
            <p className="ax-text--right">This text is right aligned.</p>

            <CodeSnippet language="html">
              <p className="ax-text--left" />
              <p className="ax-text--center" />
              <p className="ax-text--right" />
            </CodeSnippet>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Case modifiers" />
          <CardContent>
            <p className="ax-text--uppercase">Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Donec tempus ut felis vitae hendrerit.</p>
            <p className="ax-text--capitalize">Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Donec tempus ut felis vitae hendrerit.</p>
            <p className="ax-text--lowercase">Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Donec tempus ut felis vitae hendrerit.</p>

            <CodeSnippet language="html">
              <p className="ax-text--uppercase" />
              <p className="ax-text--capitalize" />
              <p className="ax-text--lowercase" />
            </CodeSnippet>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Lists" />
          <CardContent>
            <h5>Ordered List</h5>
            <List ordered={true}>
              <ListItem>Lorem ipsum dolor sit amet</ListItem>
              <ListItem>Consectetur adipiscing elit</ListItem>
              <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </List>

            <CodeTabset>
              <CodeSnippet language="html">
                <List ordered={true}>
                  <ListItem />
                </List>
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <List ordered={true}>
                  <ListItem />
                </List>
              `}</CodeSnippet>
            </CodeTabset>

            <h5>Unordered List</h5>
            <List ordered={false}>
              <ListItem>Lorem ipsum dolor sit amet</ListItem>
              <ListItem>Consectetur adipiscing elit</ListItem>
              <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </List>

            <CodeTabset>
              <CodeSnippet language="html">
                <List ordered={false}>
                  <ListItem />
                </List>
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <List ordered={false}>
                  <ListItem />
                </List>
              `}</CodeSnippet>
            </CodeTabset>

            <h5>Inline list</h5>
            <List inline={true}>
              <ListItem>Lorem ipsum dolor sit amet</ListItem>
              <ListItem>Consectetur adipiscing elit</ListItem>
              <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>Facilisis in pretium nisl aliquet</ListItem>
              <ListItem>Faucibus porta lacus fringilla vel</ListItem>
              <ListItem>Aenean sit amet erat nunc</ListItem>
              <ListItem>Eget porttitor lorem</ListItem>
            </List>

            <CodeTabset>
              <CodeSnippet language="html">
                <List inline={true}>
                  <ListItem />
                </List>
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <List inline={true}>
                  <ListItem />
                </List>
              `}</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>
      </div>
    );
  }
}
