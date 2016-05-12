import React, { PropTypes, Component } from 'react';
import CodeTabset from 'style-guide/components/CodeSnippet/CodeTabset';
import CodeSnippet from 'style-guide/components/CodeSnippet/CodeSnippet';
import { renderImports } from 'style-guide/utils/rendering/rendering-imports';

export default class DocImports extends Component {
  render() {
    const { doc } = this.props;
    const importDocs = renderImports(doc);

    return (
      <CodeTabset>
        {Object.keys(importDocs)
          .filter((key) => importDocs[key])
          .map((key, index) =>
            <CodeSnippet language={key} key={index}>
              {importDocs[key]}
            </CodeSnippet>
          )
        }
      </CodeTabset>
    );
  }
}
