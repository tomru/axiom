import React, { Component } from 'react';
import CodeTabset from 'documentation/components/CodeTabset';
import CodeSnippet from 'documentation/components/CodeSnippet';
import { Card, CardTitle, CardContent } from 'axiom/react';
import { Heading, Italic, Link, List, ListItem, Paragraph, Strong, Weak } from 'axiom/react';

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
            <Heading level={1}>h1. <Strong>Strong</Strong> Standard <Weak>Weak</Weak></Heading>
            <Heading level={2}>h2. <Strong>Strong</Strong> Standard <Weak>Weak</Weak></Heading>
            <Heading level={3}>h3. <Strong>Strong</Strong> Standard <Weak>Weak</Weak></Heading>
            <Heading level={4}>h4. <Strong>Strong</Strong> Standard <Weak>Weak</Weak></Heading>
            <Heading level={5}>h5. <Strong>Strong</Strong> Standard <Weak>Weak</Weak></Heading>
            <Paragraph>p. <Strong>Strong</Strong> Standard <Weak>Weak</Weak></Paragraph>
            <Paragraph><small>small. <Strong>Strong</Strong> Standard <Weak>Weak</Weak></small></Paragraph>

            <CodeTabset>
              <CodeSnippet language="html">
                <Heading level={1} />
                <Heading level={2} />
                <Heading level={3} />
                <Heading level={4} />
                <Heading level={5} />
                <Paragraph />
                <small />
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <Heading level={1} />
                <Heading level={2} />
                <Heading level={3} />
                <Heading level={4} />
                <Heading level={5} />
                <Paragraph />
                <small />
              `}</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Links" />
          <CardContent>
            <Heading level={1}>Lorem ipsum dolor sit amet, <Link>consectetur</Link> adipiscing
                elit. Donec tempus ut felis vitae hendrerit.</Heading>

            <Paragraph>
              Lorem ipsum dolor sit amet, <Link>consectetur</Link> adipiscing elit. Donec tempus ut felis vitae hendrerit.
            </Paragraph>

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
            <Paragraph>This text is <Strong>Bold</Strong></Paragraph>
            <Paragraph>This text is <Italic>Italicized</Italic></Paragraph>
            <Paragraph>This text is <u>Underlined</u></Paragraph>
            <Paragraph>This text is <del>Strike Through</del></Paragraph>

            <CodeTabset>
              <CodeSnippet language="html">
                <Strong />
                <Italic />
                <u />
                <del />
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <Strong />
                <Italic />
                <u />
                <del />
              `}</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Alignment modifiers" />
          <CardContent>
            <Paragraph textLeft={true}>This text is left aligned.</Paragraph>
            <Paragraph textCenter={true}>This text is center aligned.</Paragraph>
            <Paragraph textRight={true}>This text is right aligned.</Paragraph>

            <CodeTabset>
              <CodeSnippet language="html">
                <Paragraph textLeft={true} />
                <Paragraph textCenter={true} />
                <Paragraph textRight={true} />
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <Paragraph textLeft={true} />
                <Paragraph textCenter={true} />
                <Paragraph textRight={true} />
              `}</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Case modifiers" />
          <CardContent>
            <Paragraph textCase="upper">Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Donec tempus ut felis vitae hendrerit.</Paragraph>
            <Paragraph textCase="capital">Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Donec tempus ut felis vitae hendrerit.</Paragraph>
            <Paragraph textCase="lower">Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Donec tempus ut felis vitae hendrerit.</Paragraph>

            <CodeTabset>
              <CodeSnippet language="html">
                <Paragraph textCase="upper" />
                <Paragraph textCase="capital" />
                <Paragraph textCase="lower" />
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <Paragraph textCase="upper" />
                <Paragraph textCase="capital" />
                <Paragraph textCase="lower" />
              `}</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Lists" />
          <CardContent>
            <Heading level={5}>Ordered List</Heading>
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

            <Heading level={5}>Unordered List</Heading>
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

            <Heading level={5}>Inline list</Heading>
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
