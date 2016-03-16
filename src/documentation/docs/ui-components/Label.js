import React, { Component } from 'react';
import { breakpoints, colorPalette, colorAliases } from 'sass-vars';
import CodeSnippet from 'documentation/components/CodeSnippet';
import CodeTabset from 'documentation/components/CodeTabset';
import DemoBox from 'documentation/components/DemoBox';
import { Card, CardContent, CardTitle } from 'axiom/react';
import { Label, LabelGroup } from 'axiom/react';
import { Tabset, Tab } from 'axiom/react';

export default class LabelDocs extends Component {
  static imports = {
    sass: `@import 'axiom/sass/components/label';`,
    jsx: `import { Label, LabelGroup } from 'axiom/react';`,
  };

  static meta = {
    description: 'Labels provide a passive way to highlight very short sections of information.',
  };

  render() {
    return (
      <div>
        <Card>
          <CardTitle title="Colored Labels" />
          <CardContent>
            <h5>Palette Colors</h5>
            <LabelGroup>
              {colorPalette.map((colors) => {
                return colors.map(({ name }, bIndex) => {
                  return (
                    <Label key={bIndex} color={name}>{name}</Label>
                  );
                });
              })}
            </LabelGroup>

            <h5>UI Colors</h5>
            {colorAliases.map(({heading, colors}) => {
              return [
                <p key="heading">{heading}</p>,
                <LabelGroup key="buttons">
                  {colors.map((group) => {
                    return group.map(({name}, cIndex) => {
                      return (
                        <Label key={cIndex} color={name}>{name}</Label>
                      );
                    });
                  })}
                </LabelGroup>,
              ];
            })}

            <h5>Primary</h5>
            <LabelGroup>
              <Label color="primary">Primary</Label>
            </LabelGroup>

            <CodeTabset>
              <CodeSnippet language="html">
                <Label color="[COLOR_ID]" />
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <Label color="[COLOR_ID]" />
              `}</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Label sizes" />
          <CardContent>
            <LabelGroup>
              <Label color="primary" size="sm">Small</Label>
              <Label color="primary">Regular</Label>
              <Label color="primary" size="lg">Large</Label>
            </LabelGroup>

            <CodeTabset>
              <CodeSnippet language="html">
                <Label size="sm" />
                <Label />
                <Label size="lg" />
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <Label size="sm" />
                <Label />
                <Label size="lg" />
              `}</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Full width Labels" />
          <CardContent>
            <LabelGroup>
              <Label color="primary" full={true}>Always full width</Label>
              {breakpoints.map(({id}) => {
                return (
                  <Label color="primary" full={id} key={id}>
                    Full width &lt; {id}
                  </Label>
                );
              })}
            </LabelGroup>

            <CodeTabset>
              <CodeSnippet language="html">
                <Label full={true} />
                {breakpoints.map(({id}) => <Label full={id} key={id} />)}
              </CodeSnippet>
              <CodeSnippet language="jsx">{
                breakpoints.reduce(
                  (prev, {id}) => `${prev}<Label full="${id}" key="${id}" />`,
                  '<Label full={true} />'
                )
              }</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Label with an Icon" />
          <CardContent>
            <LabelGroup>
              <Label color="red" icon="trash" size="sm">Small</Label>
              <Label color="yellow" icon="warning">Regular</Label>
              <Label color="green" icon="check" size="lg">Large</Label>
            </LabelGroup>

            <CodeTabset>
              <CodeSnippet language="html">
                <Label icon="..." />
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <Label icon="..." />
              `}</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>
      </div>
    );
  }
}
