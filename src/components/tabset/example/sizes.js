import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Tabset, Tab } from 'bw-axiom';

export default class TabSetExample extends Component {
  render() {
    return (
      <Example name="Sizes">
        <Snippet>
          <Tabset size="small">
            <Tab title="Lorem ipsum"></Tab>
            <Tab title="Nunc eu massa ligula"></Tab>
            <Tab disabled={ true } title="I'm Disabled!"></Tab>
          </Tabset>

          <Tabset size="large">
            <Tab title="Lorem ipsum"></Tab>
            <Tab title="Nunc eu massa ligula"></Tab>
            <Tab disabled={ true } title="I'm Disabled!"></Tab>
          </Tabset>
        </Snippet>
      </Example>
    );
  }
}
