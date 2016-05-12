export function extractComponents({ components = [] }) {
  function extract({ children = [], Component }, extracted = []) {
    if (!extracted.includes(Component)) {
      extracted.push(Component);
    }

    children.forEach((child) => extract(child, extracted));

    return extracted;
  }

  return components.reduce((acc, Component) => {
    extract(Component, acc);
    return acc;
  }, []);
}

export function extractSnippetLayers(layer, children = []) {
  if (layer.snippetContent) {
    if (layer.title) {
      children.push({ comment: layer.title });
    }

    if (Array.isArray(layer.children)) {
      layer.children.forEach((child) => {
        if (typeof child !== 'string') {
          children.push(child);
        }
      });
    }
  } else if (Array.isArray(layer.children)) {
    layer.children.forEach((child) => extractSnippetLayers(child, children));
  }

  return children;
}
