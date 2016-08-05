import React, { Component, PropTypes } from 'react';
import { prepareSnippet } from 'style-guide/utils/code-formatting';

if (__CLIENT__) {
  require('prismjs/themes/prism.css');
}

export default class CodeSnippet extends Component {
  static propTypes = {
    children: PropTypes.any,
    language: PropTypes.string.isRequired,
  };

  render() {
    const { children, language } = this.props;
    const { className, code } = prepareSnippet(children, language);

    return (
      <pre className={ className }>
        <code
            className={ className }
            dangerouslySetInnerHTML={ { __html: code } } />
      </pre>
    );
  }
}
