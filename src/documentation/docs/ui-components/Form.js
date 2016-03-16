import React, { Component } from 'react';
import CodeSnippet from 'documentation/components/CodeSnippet';
import CodeTabset from 'documentation/components/CodeTabset';
import { Button } from 'axiom/react';
import { Card, CardContent, CardTitle} from 'axiom/react';
import { Form, CheckBox, RadioButton, TextArea, TextInput } from 'axiom/react';
import { Grid, GridCell } from 'axiom/react';

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
                <h5>Standard text input</h5>
                <TextInput placeholder="Standard input..." />
              </GridCell>

              <GridCell>
                <h5>Disabled text input</h5>
                <TextInput placeholder="Disabled input..." disabled={true} />
              </GridCell>
            </Grid>

            <Grid>
              <GridCell>
                <h5>Success validation</h5>
                <TextInput placeholder="Valid input..." valid={true} />
              </GridCell>

              <GridCell>
                <h5>Failed validation</h5>
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

            <h5>Text input with an icon</h5>
            <TextInput placeholder="Icon input..." icon="calendar" />

            <h5>Text input with a button</h5>
            <TextInput placeholder="Button input...">
              <Button color="primary">Submit</Button>
            </TextInput>

            <h5>Text input with an icon and button</h5>
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
            <CheckBox checked={false}>Unchecked check box</CheckBox>
            <CheckBox checked={true}>Checked check box</CheckBox>
            <CheckBox disabled={true}>Disabled chec box</CheckBox>

            <RadioButton checked={false}>Unchecked radio button</RadioButton>
            <RadioButton checked={true}>Checked radio button</RadioButton>
            <RadioButton disabled={true}>Disabled radio button</RadioButton>

            <CodeTabset>
              <CodeSnippet language="html">
                <CheckBox checked={true} disabled={true}>Text here</CheckBox>
                <RadioButton checked={true} disabled={true}>Text here</RadioButton>
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
