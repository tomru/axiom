import React, { Component, PropTypes } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import classnames from 'classnames';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-scss';
import {
  prepareBashSnippet,
  prepareSassSnippet,
  prepareHTMLSnippet,
  prepareJSXSnippet,
  prepareJSSnippet,
  prepareAPISnippet,
} from 'style-guide/utils/markup';

if (__CLIENT__) {
  require('prismjs/themes/prism.css');
}

const prepareMap = {
  bash: prepareBashSnippet,
  sass: prepareSassSnippet,
  html: prepareHTMLSnippet,
  jsx: prepareJSXSnippet,
  js: prepareJSSnippet,
  api: prepareAPISnippet,
};

export default class CodeSnippet extends Component {
  static propTypes = {
    children: PropTypes.any,
    language: PropTypes.string.isRequired,
  };

  componentWillMount() {
    this.setCode(this.props);
  }

  componentDidMount() {
    this.highlightElement();
  }

  componentWillReceiveProps(nextProps) {
    this.setCode(nextProps);
  }

  componentDidUpdate() {
    this.highlightElement();
  }

  getStaticMarkup(element, markup = '') {
    if (!element) {
      return markup;
    }

    if (typeof element === 'string') {
      return element;
    }

    if (Array.isArray(element)) {
      return element.reduce((prev, child) => {
        return `${prev}${this.getStaticMarkup(child)}`;
      }, markup);
    }

    return renderToStaticMarkup(element);
  }

  setCode({children}) {
    if (__CLIENT__) {
      const code = this.getStaticMarkup(children);

      if (code) {
        this.setState({code});
      }
    }
  }

  highlightElement() {
    const {language} = this.props;

    if (this.state && this.state.code) {
      this.refs.code.innerHTML = prepareMap[language](this.state.code);
      Prism.highlightElement(this.refs.code);
    }
  }

  render() {
    const {language} = this.props;
    const classes = classnames({
      'language-bash': language === 'bash',
      'language-markup': language === 'html',
      'language-javascript': language === 'js' || language === 'api',
      'language-jsx': language === 'jsx',
      'language-scss': language === 'sass',
    });

    return (
      <pre>
        <code className={classes} ref="code" />
      </pre>
    );
  }
}
