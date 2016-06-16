import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-scss';
import { BASH, SCSS, HTML, JSX, JS } from 'style-guide/constants/CodeLanguages';
import {
  prepareBashSnippet,
  prepareSassSnippet,
  prepareHTMLSnippet,
  prepareJSXSnippet,
  prepareJSSnippet,
} from 'style-guide/utils/code-formatting';

if (__CLIENT__) {
  require('prismjs/themes/prism.css');
}

const prepareMap = {
  [BASH]: prepareBashSnippet,
  [SCSS]: prepareSassSnippet,
  [HTML]: prepareHTMLSnippet,
  [JSX]: prepareJSXSnippet,
  [JS]: prepareJSSnippet,
};

export default class CodeSnippet extends Component {
  static propTypes = {
    children: PropTypes.any,
    language: PropTypes.string.isRequired,
  };

  componentDidMount() {
    this.highlightElement();
  }

  componentDidUpdate() {
    this.highlightElement();
  }

  highlightElement() {
    Prism.highlightElement(this.refs.code);
  }

  render() {
    const { children, language } = this.props;
    const classes = classnames({
      'language-bash': language === BASH,
      'language-markup': language === HTML,
      'language-javascript': language === JS,
      'language-jsx': language === JSX,
      'language-scss': language === SCSS,
    });

    return (
      <pre>
        <code
            className={ classes }
            dangerouslySetInnerHTML={ { __html: prepareMap[language](children) } }
            ref="code" />
      </pre>
    );
  }
}
