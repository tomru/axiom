import React, { Component, PropTypes } from 'react';
import CodeSnippet from 'style-guide/components/CodeSnippet/CodeSnippet';
import CodeTabset from 'style-guide/components/CodeSnippet/CodeTabset';
import { renderSnippets } from 'style-guide/utils/rendering/rendering-snippets';

export default class DocLayerCode extends Component {
  render()  {
    const { layer } = this.props;
    const snippets = renderSnippets(layer);

    return (
      <CodeTabset>
        {Object.keys(snippets)
          .filter((key) => snippets[key].length)
          .map((key, index) =>
            <CodeSnippet language={key} key={index}>
              {snippets[key]}
            </CodeSnippet>
          )
        }
      </CodeTabset>
    );
  }
}

