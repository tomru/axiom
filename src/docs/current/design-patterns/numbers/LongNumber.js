import React, { Component } from 'react';
import { Grid, GridCell } from 'axiom/react';
import { TextInput } from 'axiom/react';
import { Heading, Paragraph } from 'axiom/react';
import { longNumber } from 'axiom/common/formatting-numbers';
import CodeTabset from 'style-guide/components/CodeSnippet/CodeTabset';
import CodeSnippet from 'style-guide/components/CodeSnippet/CodeSnippet';

export default class LongNumber extends Component {
  componentWillMount() {
    this.setState({
      number: 123456789,
      precision: 2,
    });
  }

  updateNumber(event) {
    this.setState({ number: parseFloat(event.target.value, 10) });
  }

  updatePrecision(event) {
    this.setState({ precision: parseInt(event.target.value, 10) });
  }

  render() {
    const { number, precision } = this.state;

    return (
      <div>
        <Grid>
          <GridCell>
            <Heading level={ 5 }>Number to format</Heading>
            <TextInput
                defaultValue={ number }
                onChange={ ::this.updateNumber } />
            <Heading level={ 5 }>Precision (decimals)</Heading>
            <TextInput
                defaultValue={ precision }
                onChange={ ::this.updatePrecision } />
          </GridCell>

          <GridCell>
            <Heading level={ 5 }>Formatted number</Heading>
            <Paragraph>{ longNumber(number, precision) }</Paragraph>
          </GridCell>
        </Grid>

        <CodeTabset>
          <CodeSnippet language="js">{ `
            longNumber(Number [, Number]);
          ` }</CodeSnippet>
        </CodeTabset>
      </div>
    );
  }
}
