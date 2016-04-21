import React, { Component } from 'react';
import CodeSnippet from 'documentation/components/CodeSnippet';
import CodeTabset from 'documentation/components/CodeTabset';
import { Button } from 'axiom/react';
import { Card, CardContent, CardTitle} from 'axiom/react';
import { Form, CheckBox, RadioButton, TextArea, TextInput } from 'axiom/react';
import { Grid, GridCell } from 'axiom/react';
import { Heading } from 'axiom/react';

export default class FormDocs extends Component {
  static imports = {
    sass: `@import 'axiom/sass/components/form';`,
    jsx: `import { Form, CheckBox, RadioButton, TextArea, TextInput} from 'axiom/react';`,
  };

  static meta = {
    description: 'Forms and form components - Text inputs, text areas, check boxes, radio buttons etc...',
  };

  render() {
    return (
      <div>
        <Card>
          <CardTitle title="Text inputs" />
          <CardContent>
            <Grid>
              <GridCell>
                <Heading level={5}>Standard text input</Heading>
                <TextInput placeholder="Standard input..." />
              </GridCell>

              <GridCell>
                <Heading level={5}>Disabled text input</Heading>
                <TextInput placeholder="Disabled input..." disabled={true} />
              </GridCell>
            </Grid>

            <Grid>
              <GridCell>
                <Heading level={5}>Success validation</Heading>
                <TextInput placeholder="Valid input..." valid={true} />
              </GridCell>

              <GridCell>
                <Heading level={5}>Failed validation</Heading>
                <TextInput placeholder="Invalid input..." invalid={true} />
              </GridCell>
            </Grid>

            <CodeTabset>
              <CodeSnippet language="html">
                <TextInput placeholder="..."/>
                <TextInput disabled={true} />
                <TextInput valid={true} />
                <TextInput invalid={true} />
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <TextInput placeholder="..." />
                <TextInput disabled={Boolean} />
                <TextInput valid={Boolean} />
                <TextInput invalid={Boolean} />
              `}</CodeSnippet>
            </CodeTabset>

            <Heading level={5}>Text input with an icon</Heading>
            <TextInput placeholder="Icon input..." icon="calendar" />

            <Heading level={5}>Text input with a button</Heading>
            <TextInput placeholder="Button input...">
              <Button color="primary">Submit</Button>
            </TextInput>

            <Heading level={5}>Text input with an icon and button</Heading>
            <TextInput placeholder="Icon & Button input..." icon="calendar">
              <Button color="primary">Submit</Button>
            </TextInput>

            <CodeTabset>
              <CodeSnippet language="html">
                <TextInput icon="...">
                  <Button color="...">...</Button>
                </TextInput>
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <TextInput icon="...">
                  <Button />
                </TextInput>
              `}</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Text area" />
          <CardContent>
            <TextArea placeholder="Text area placeholder..." />

            <CodeTabset>
              <CodeSnippet language="html">
                <TextArea placeholder="..." />
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <TextArea placeholder="..." />
              `}</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Radio buttons and Check boxes" />
          <CardContent>
            <CheckBox defaultChecked={false}>Unchecked check box</CheckBox>
            <CheckBox defaultChecked={true}>Checked check box</CheckBox>
            <CheckBox defaultChecked={false} disabled={true}>Disabled chec box</CheckBox>

            <RadioButton defaultChecked={false}>Unchecked radio button</RadioButton>
            <RadioButton defaultChecked={true}>Checked radio button</RadioButton>
            <RadioButton defaultChecked={false} disabled={true}>Disabled radio button</RadioButton>

            <CodeTabset>
              <CodeSnippet language="html">
                <CheckBox defaultChecked={true} disabled={true}>Text here</CheckBox>
                <RadioButton defaultChecked={true} disabled={true}>Text here</RadioButton>
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <CheckBox checked={true} disabled={true}>
                  Text here
                </CheckBox>
                <RadioButton checked={true} disabled={true}>
                  Text here
                </RadioButton>
              `}</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>
      </div>
    );
  }
}
