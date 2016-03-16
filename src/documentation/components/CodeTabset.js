import React, { Component } from 'react';
import { Tabset, Tab } from 'axiom/react';

export default class CodeTabset extends Component {
  render() {
    const {children} = this.props;
    const codeSnippets = Array.isArray(children) ? children : [children];
    const tabOrder = [ 'jsx', 'api', 'sass', 'js', 'html' ];
    const titleMap = {
      html: 'Raw HTML',
      jsx: 'React',
      js: 'JS',
      sass: 'Sass',
      api: 'Component API',
    };

    return (
      <Tabset>
        {codeSnippets
          .sort((a, b) => tabOrder.indexOf(a.props.language) - tabOrder.indexOf(b.props.language))
          .map((snippet, index) =>
            <Tab title={titleMap[snippet.props.language]} key={index}>
              {snippet}
            </Tab>
          )
        }
      </Tabset>
    );
  }
}
