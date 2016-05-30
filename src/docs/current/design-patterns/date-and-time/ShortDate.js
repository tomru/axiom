import React, { Component } from 'react';
import { Paragraph, Strong } from 'bw-axiom/react';
import { shortDate, shortDateWithTime } from 'bw-axiom/common/formatting-dates';
import CodeTabset from 'style-guide/components/CodeSnippet/CodeTabset';
import CodeSnippet from 'style-guide/components/CodeSnippet/CodeSnippet';

export default class ShortDate extends Component {
  render() {
    return (
      <div>
        <Paragraph>
          <Strong>Without time:</Strong> { shortDate(new Date) }
        </Paragraph>
        <Paragraph>
          <Strong>With time:</Strong> { shortDateWithTime(new Date) }
        </Paragraph>
        <CodeTabset>
          <CodeSnippet language="js">{ `
            shortDate(Date);
            shortDateWithTime(Date);
          ` }</CodeSnippet>
        </CodeTabset>
      </div>
    );
  }
}
