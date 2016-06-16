import { isReactElements } from 'style-guide/utils/react-elements';
import buildReactElement from './build-react-element';
import buildRenderElement from './build-render-element';
import buildSnippet from './build-snippet';
import renderMarkdown from './render-markdown';
import restructure from './restructure';

export function render2(content, routeParams, queryParams) {
  return restructure(
    content(routeParams, queryParams)
      .map((e) => typeof e === 'function' ? buildReactElement(e, routeParams, queryParams) : e)
      .reduce((o, e) => [...o, ...isReactElements(e) ? [buildRenderElement(e), ...buildSnippet(e)] : [e]], [])
      .reduce(renderMarkdown(), [])
  );
}
