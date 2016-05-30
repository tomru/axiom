import React, { Component } from 'react';
import { Paragraph, Strong } from 'bw-axiom/react';
import { mediumDate, mediumDateWithTime } from 'bw-axiom/common/formatting-dates';
import CodeTabset from 'style-guide/components/CodeSnippet/CodeTabset';
import CodeSnippet from 'style-guide/components/CodeSnippet/CodeSnippet';

export default class MediumDate extends Component {
  render() {
    return (
      <div>
        <Paragraph>
          <Strong>Without time:</Strong> { mediumDate(new Date) }
        </Paragraph>
        <Paragraph>
          <Strong>With time:</Strong> { mediumDateWithTime(new Date) }
        </Paragraph>
        <CodeTabset>
          <CodeSnippet language="js">{ `
            mediumDate(Date);
            mediumDateWithTime(Date);
          ` }</CodeSnippet>
        </CodeTabset>
      </div>
    );
  }
}
