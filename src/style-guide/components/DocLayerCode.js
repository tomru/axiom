import React, { Component, PropTypes } from 'react';
import CodeSnippet from 'style-guide/components/CodeSnippet';
import CodeTabset from 'style-guide/components/CodeTabset';
import {
  getLayersHtmlSnippets,
  getLayersJsxSnippets,
  getLayersJsSnippets,
} from 'style-guide/utils/docs-examples';

export default class DocLayerCode extends Component {
  render()  {
    const { layer } = this.props;
    const htmlSnippet = getLayersHtmlSnippets(layer);
    const jsxSnippet = getLayersJsxSnippets(layer);
    const jsSnippet = getLayersJsSnippets(layer);

    return (
      <CodeTabset>
        {do {
          if (htmlSnippet.length) {
            <CodeSnippet language="html">
              {htmlSnippet}
            </CodeSnippet>
          }
        }}
        {do {
          if (jsxSnippet.length) {
            <CodeSnippet language="jsx">
              {jsxSnippet}
            </CodeSnippet>
          }
        }}
        {do {
          if (jsSnippet.length) {
            <CodeSnippet language="js">
              {jsSnippet}
            </CodeSnippet>
          }
        }}
      </CodeTabset>
    );
  }
}

