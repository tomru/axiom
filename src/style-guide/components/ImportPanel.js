import React, { PropTypes, Component } from 'react';
import CodeTabset from './CodeTabset';
import CodeSnippet from './CodeSnippet';

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
