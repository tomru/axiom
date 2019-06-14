export const rgb2hex = ({ r, g, b }) => `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

export const hex2rgb = hex => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (!result) {
    return null;
  }

  const [r, g, b] = result.slice(1);
  return {
    r: parseInt(r, 16),
    g: parseInt(g, 16),
    b: parseInt(b, 16),
  };
};

