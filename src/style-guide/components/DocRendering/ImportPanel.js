import React, { PropTypes, Component } from 'react';
import CodeTabset from 'style-guide/components/CodeSnippet/CodeTabset';
import CodeSnippet from 'style-guide/components/CodeSnippet/CodeSnippet';

export default class ImportPanel extends Component {
  render() {
    const {
      content,
      importPanelState,
      importPanelActions,
    } = this.props;

    return (
      <CodeTabset>
        {Object.keys(content).filter((key) => content[key]).map((key, index) =>
          <CodeSnippet language={key} key={index}>
            {content[key]}
          </CodeSnippet>
        )}
      </CodeTabset>
    );
  }
}
