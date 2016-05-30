import React, { Component } from 'react';
import { Card, CardContent , CardTitle } from 'bw-axiom/react';
import { Heading, List, ListItem, Paragraph, Strong } from 'bw-axiom/react';
import CardTabset from 'style-guide/components/CodeSnippet/CodeTabset';
import CodeSnippet from 'style-guide/components/CodeSnippet/CodeSnippet';
import { PROP_TYPES_SETS } from 'bw-axiom/react/utils/prop-types';

class Text extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardTitle title="Emphasize important words in short help texts" />
          <CardContent>
            <Paragraph>Make <Strong>important</Strong> words in help texts <Strong>bold</Strong> so users can skim through them more easily. You can use the utility classes for this. Try to highlight the words that embody the message best.</Paragraph>

            <CardTabset>
              <CodeSnippet language="jsx">{ `<Strong>...</Strong>` }</CodeSnippet>
              <CodeSnippet language="html"><Strong>...</Strong></CodeSnippet>
            </CardTabset>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Full stops" />
          <CardContent>
            <Paragraph>We have a simple policy. If it is a sentence, it has full stop. Titles, incomplete sentences, bullet lists or enumerations don't have a full stop.</Paragraph>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Casing Conventions" />
          <CardContent>
            <Paragraph>Title Casing - not only the first word is capitalized but all (except ‘small’ words like “and”, “to”, “for” or “the”). e.g.: “<Strong>C</Strong>reate <Strong>N</Strong>ew <Strong>P</Strong>roject”.</Paragraph>

            <Paragraph>Title Casing should be used in:</Paragraph>

            <List>
              <ListItem>Utility bar / window titles</ListItem>
              <ListItem>Menu entries</ListItem>
              <ListItem>Tab titles</ListItem>
              <ListItem>HTML header title</ListItem>
              <ListItem>Main navigation links</ListItem>
              <ListItem>Buttons</ListItem>
            </List>

            <Paragraph>Sentence casing - just like a sentence: first word capitalized. e.g.: “<Strong>G</Strong>et an email when there's a sudden increase in discussion[...]”.</Paragraph>

            <Paragraph>Sentence casing should be used for:</Paragraph>

            <List>
              <ListItem>Placeholder text in input fields</ListItem>
              <ListItem>Form labels (next to or above text inputs, checkboxes etc.)</ListItem>
              <ListItem>‘activity’ links, e.g. “Create one”, “Collapse list”</ListItem>
              <ListItem>Messages of all sorts (“Please wait…” or longer stuff)</ListItem>
              <ListItem>Entries in (filter) drop downs</ListItem>
              <ListItem>Help texts</ListItem>
            </List>

            <CardTabset>
              <CodeSnippet language="jsx">{ `${
                PROP_TYPES_SETS.text.textCase.oneOf
                  .map((textCase) => `
                    // ${textCase}
                    <Heading textCase={${textCase}}>...</Heading>
                    <Paragraph textCase={${textCase}}>...</Paragraph>
                    <Card textCase={${textCase}}>...</Card>
                  `)
                  .join('')
              }` }</CodeSnippet>
              <CodeSnippet language="html">{
                PROP_TYPES_SETS.text.textCase.oneOf
                  .map((textCase) => [
                    `<!-- ${textCase} -->`,
                    <Heading level={ 4 } textCase={ textCase }>...</Heading>,
                    <Paragraph textCase={ textCase }>...</Paragraph>,
                    <Card textCase={ textCase }>...</Card>,
                  ])
              }</CodeSnippet>
            </CardTabset>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default {
  id: 'text',
  path: 'text',
  group: 'writing-and-voice',
  components: [{
    Component: Strong,
  }],
  Example: Text,
};
