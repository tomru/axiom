import { isReactElement } from 'style-guide/utils/react-elements';

const PROP_EXCLUDE_LIST = ['children'];

function renderProps(props, withoutProps) {
  const propsToExclude = withoutProps.concat(PROP_EXCLUDE_LIST);

  return Object.keys(props).reduce((acc, prop) => {
    if (!propsToExclude.includes(prop)) {
      const value = typeof props[prop] === 'string'
        ? `"${props[prop]}"`
        : `{ ${props[prop]} }`;

      return `${acc} ${prop}=${value}`;
    }

    return acc;
  }, '');
}

export default function reactElementToJsxString(element, withoutProps = []) {
  if (Array.isArray(element)) {
    return element.reduce((string, element) => {
      return string += reactElementToJsxString(element, withoutProps);
    }, '');
  }

  if (!isReactElement(element)) {
    return element;
  }

  const { props, props: { children }, type: { __ax_displayName } } = element;
  let jsxString = `<${__ax_displayName} ${renderProps(props, withoutProps)}`;

  if (children) {
    jsxString += '>';
    jsxString += reactElementToJsxString(children, withoutProps);
    jsxString += `</${__ax_displayName}>`;
  } else {
    jsxString += ' />';
  }

  return jsxString;
}
