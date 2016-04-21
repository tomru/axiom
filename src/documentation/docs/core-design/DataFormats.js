import React, { Component } from 'react';
import CodeTabset from 'documentation/components/CodeTabset';
import CodeSnippet from 'documentation/components/CodeSnippet';
import { Card, CardTitle, CardContent } from 'axiom/react';
import { Heading } from 'axiom/react';
import { formatNumber, formatDateShort, formatDateMedium, formatDateLong } from 'axiom/common/format-utils';

export default class DataFormatsDocs extends Component {
  static imports = {
    js: `import { formatNumber, formatDateShort, formatDateMedium, formatDateLong } from 'axiom/common/format-utils';`
  };

  static meta = {
    description: 'A selection of utility functions for keeping data formats consistent to the Brandwatch convention.',
  };

  render() {
    return (
      <div>
        <Card>
          <CardTitle title="Numbers" />
          <CardContent>
            <Heading level={5}>{formatNumber(71029384)}</Heading>

            <CodeSnippet language="js">
              formatNumber(Number);
            </CodeSnippet>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Dates" />
          <CardContent>
            <Heading level={5}>Short date</Heading>
            <p>{formatDateShort(new Date())}</p>

            <CodeSnippet language="js">
              formatDateShort(Date);
            </CodeSnippet>

            <Heading level={5}>Medium date</Heading>
            <p>{formatDateMedium(new Date())}</p>

            <CodeSnippet language="js">
              formatDateMedium(Date);
            </CodeSnippet>

            <Heading level={5}>Long date</Heading>
            <p>{formatDateLong(new Date())}</p>

            <CodeSnippet language="js">
              formatDateLong(Date);
            </CodeSnippet>
          </CardContent>
        </Card>
      </div>
    );
  }
}
