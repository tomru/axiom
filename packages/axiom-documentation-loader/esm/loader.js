function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reactDocgen = require('react-docgen');
var isPlainObject = require('lodash.isplainobject');

function castValue(value) {
  if (Array.isArray(value)) {
    return value.map(normaliseValue);
  } else if (isPlainObject(value)) {
    return normaliseValue(value);
  }

  var evaldValue = eval(value);

  if (typeof evaldValue === 'function') {
    return evaldValue.name;
  }

  return evaldValue;
}

function normaliseValue(prop) {
  return prop && Object.assign({}, prop, {
    value: castValue(prop.value)
  });
}

function flattenValues(_ref) {
  var value = _ref.value;
  var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (Array.isArray(value)) {
    value.forEach(function (value) {
      return flattenValues(value, values);
    });
  } else if (isPlainObject(value)) {
    flattenValues(value, values);
  } else if (value !== undefined) {
    values.push(value);
  }

  return values;
}

function extractProps(_ref2) {
  var displayName = _ref2.displayName,
      _ref2$props = _ref2.props,
      props = _ref2$props === undefined ? {} : _ref2$props;

  return {
    name: displayName,
    props: Object.keys(props).filter(function (prop) {
      return props[prop].description !== 'SKIP';
    }).reduce(function (eProps, prop) {
      return Object.assign({}, eProps, _defineProperty({}, prop, Object.assign(props[prop], {
        defaultValue: normaliseValue(props[prop].defaultValue),
        type: normaliseValue(props[prop].type),
        values: flattenValues(normaliseValue(props[prop].type))
      })));
    }, {})
  };
}

module.exports = function (source) {
  var value = {};

  this.cacheable && this.cacheable();

  try {
    value = extractProps(reactDocgen.parse(source));
  } catch (error) {
    /* eslint-disable no-console */
    console.error(error);
  }

  return 'module.exports = ' + JSON.stringify(value, undefined, 2);
};