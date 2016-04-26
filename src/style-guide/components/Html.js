import React, {Component, PropTypes} from 'react';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import * as config from '../../../config';

export default class Html extends Component {
  static propTypes = {
    children: PropTypes.any,
    store: PropTypes.object,
  };

  render() {
    const { store, children } = this.props;

    return (
      <html lang="en-us">
        <head>
          <title>Brandwatch | Axiom</title>
          <base href="/" />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/*<link rel="shortcut icon" href="/favicon.ico" />*/}
          { __PRODUCTION__ && <link rel="stylesheet" href={`/${config.output.folderName}/${config.output.styleGuide.clientProdCSSFilename}`} /> }
        </head>

        <body className="ax-layout__body">
          <div id="react-root" className="ax-layout__container" dangerouslySetInnerHTML={{__html: renderToString(children)}}></div>
          <script dangerouslySetInnerHTML={{__html: `window.__data=${serialize(store.getState())};`}} />
          { __DEVELOPMENT__ && <aside id="dev-tools" /> }
          { __DEVELOPMENT__ && <script src={`http://${config.webpack.devServerHostname}:${config.webpack.devServerPort}/${config.output.folderName}/${config.output.styleGuide.clientDevJSFilename}`}></script> }
          { __PRODUCTION__ && <script src={`/${config.output.folderName}/${config.output.styleGuide.clientProdJSFilename}`}></script> }
        </body>
      </html>
    );
  }
}
