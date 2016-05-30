import React, { Component } from 'react';
import { Paragraph, Strong } from 'bw-axiom/react';
import { longDate, longDateWithTime, longDateWithTimezone } from 'bw-axiom/common/formatting-dates';
import CodeTabset from 'style-guide/components/CodeSnippet/CodeTabset';
import CodeSnippet from 'style-guide/components/CodeSnippet/CodeSnippet';

export default class LongDate extends Component {
  render() {
    return (
      <div>
        <Paragraph>
          <Strong>Without time:</Strong> { longDate(new Date) }
        </Paragraph>
        <Paragraph>
          <Strong>With time:</Strong> { longDateWithTime(new Date) }
        </Paragraph>
        <Paragraph>
          <Strong>With timezone:</Strong> { longDateWithTimezone(new Date) }
        </Paragraph>
        <CodeTabset>
          <CodeSnippet language="js">{ `
            longDate(Date);
            longDateWithTime(Date);
            longDateWithTimezone(Date);
          ` }</CodeSnippet>
        </CodeTabset>
      </div>
    );
  }
}
