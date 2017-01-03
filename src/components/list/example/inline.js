import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { List, ListItem } from 'bw-axiom';

export default class TypeExample extends Component {
  render() {
    return (
      <Example name="Inline">
        <Snippet>
          <List inline={ true }>
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
          </List>
        </Snippet>
      </Example>
    );
  }
}
