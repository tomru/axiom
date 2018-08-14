export default (function (html) {
  if (typeof window === 'undefined') return;

  var SVG_ELEMENT_ID = 'AxiomSvgDefs';
  var svgContainer = document.getElementById(SVG_ELEMENT_ID);

  if (!svgContainer) {
    svgContainer = document.createElement('div');
    svgContainer.setAttribute('id', SVG_ELEMENT_ID);
    svgContainer.setAttribute('style', 'height: 0px;');
    svgContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="0" width="0"></svg>';
    document.body.appendChild(svgContainer);
  }

  var tempSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  tempSvg.innerHTML = html.trim();

  if (tempSvg.firstChild && !document.getElementById(tempSvg.firstChild.getAttribute('id'))) {
    svgContainer.querySelector('svg').appendChild(tempSvg.firstChild);
  }
});