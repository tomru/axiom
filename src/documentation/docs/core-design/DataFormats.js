import React, { Component } from 'react';
import CodeTabset from 'documentation/components/CodeTabset';
import CodeSnippet from 'documentation/components/CodeSnippet';
import { Card, CardTitle, CardContent } from 'axiom/react';
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
            <h5>{formatNumber(71029384)}</h5>

            <CodeSnippet language="js">
              formatNumber(Number);
            </CodeSnippet>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Dates" />
          <CardContent>
            <h5>Short date</h5>
            <p>{formatDateShort(new Date())}</p>

            <CodeSnippet language="js">
              formatDateShort(Date);
            </CodeSnippet>

            <h5>Medium date</h5>
            <p>{formatDateMedium(new Date())}</p>

            <CodeSnippet language="js">
              formatDateMedium(Date);
            </CodeSnippet>

            <h5>Long date</h5>
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
