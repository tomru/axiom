import React, { Component } from 'react';
import { breakpoints, colorPalette, colorAliases } from 'sass-vars';
import CodeSnippet from 'documentation/components/CodeSnippet';
import CodeTabset from 'documentation/components/CodeTabset';
import { Button, ButtonGroup } from 'axiom/react';
import { Card, CardContent, CardTitle } from 'axiom/react';
import { Heading } from 'axiom/react';

export default class ButtonDocs extends Component {
  static imports = {
    sass: `@import 'axiom/sass/components/button';`,
    jsx: `import { Button, ButtonGroup } from 'axiom/react';`,
    api: `const axiom = require('axiom/api');`,
  };

  static meta = {
    description: 'Things that you click to make stuff happen, they come in different colors and sizes.'
  };

  render() {
    return (
      <div>
        <Card>
          <CardTitle title="Colored Buttons" />
          <CardContent>
            <Heading level={5}>Palette Colors</Heading>
            <ButtonGroup>
              {colorPalette.map((colors) => {
                return colors.map(({ name }, bIndex) => {
                  return (
                    <Button key={bIndex} color={name}>{name}</Button>
                  );
                });
              })}
            </ButtonGroup>

            <Heading level={5}>UI Colors</Heading>
            {colorAliases.map(({heading, colors}) => {
              return [
                <p key="heading">{heading}</p>,
                <ButtonGroup key="buttons">
                  {colors.map((group) => {
                    return group.map(({name}, cIndex) => {
                      return (
                        <Button key={cIndex} color={name}>{name}</Button>
                      );
                    });
                  })}
                </ButtonGroup>,
              ];
            })}

            <Heading level={5}>Primary</Heading>
            <ButtonGroup>
              <Button color="primary">Primary</Button>
            </ButtonGroup>

            <CodeTabset>
              <CodeSnippet language="html">
                <Button color="[COLOR_ID]" />
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <Button color="[COLOR_ID]" />
              `}</CodeSnippet>
              <CodeSnippet language="api">{`
                axiom('ui/button', {
                  color: "[COLOR_ID]",
                });
              `}</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Button sizes" />
          <CardContent>
            <ButtonGroup>
              <Button color="primary" size="sm">Small</Button>
              <Button color="primary">Regular</Button>
              <Button color="primary" size="lg">Large</Button>
            </ButtonGroup>

            <CodeTabset>
              <CodeSnippet language="html">
                <Button size="sm" />
                <Button />
                <Button size="lg" />
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <Button size="sm" />
                <Button />
                <Button size="lg" />
              `}</CodeSnippet>
              <CodeSnippet language="api">{`
                axiom('ui/button', {
                  size: "sm | md (undefined) | lg",
                });
              `}</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Full width Buttons" />
          <CardContent>
            <ButtonGroup>
              <Button color="primary" full={true}>Always full width</Button>
              {breakpoints.map(({id}) => {
                return (
                  <Button color="primary" full={id} key={id}>
                    Full width &lt; {id}
                  </Button>
                );
              })}
            </ButtonGroup>

            <CodeTabset>
              <CodeSnippet language="html">
                <Button full={true} />
                {breakpoints.map(({id}) => <Button full={id} key={id} />)}
              </CodeSnippet>
              <CodeSnippet language="jsx">{
                breakpoints.reduce(
                  (prev, {id}) => `${prev}<Button full="${id}" key="${id}" />`,
                  '<Button full={true} />'
                )
              }</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Button with an Icon" />
          <CardContent>
            <ButtonGroup>
              <Button color="red" icon="trash" size="sm">Small</Button>
              <Button color="yellow" icon="warning">Regular</Button>
              <Button color="green" icon="check" size="lg">Large</Button>
            </ButtonGroup>

            <CodeTabset>
              <CodeSnippet language="html">
                <Button icon="..." />
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <Button icon="..." />
              `}</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>
      </div>
    );
  }
}
