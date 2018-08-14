import _default from '@brandwatch/axiom-utils/dist/svgDefineOnce';


export default (function () {
  ['subtle', 'white'].forEach(function (color) {
    _default('\n      <linearGradient id="ax-progress-infinite__filter--' + color + '">\n        <stop class="ax-progress-infinite__arc-gradient-stop--' + color + '" offset="0%"></stop>\n        <stop class="ax-progress-infinite__arc-gradient-stop--' + color + '" offset="50%"></stop>\n        <stop class="ax-progress-infinite__arc-gradient-stop--' + color + '" offset="90%"></stop>\n      </linearGradient>\n    ');
  });
});