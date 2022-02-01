import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import * as React from 'react';
export default function useDebounce(value) {
  var _React$useState = React.useState(value),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      cacheValue = _React$useState2[0],
      setCacheValue = _React$useState2[1];

  React.useEffect(function () {
    var timeout = setTimeout(function () {
      setCacheValue(value);
    }, value.length ? 0 : 10);
    return function () {
      clearTimeout(timeout);
    };
  }, [value]);
  return cacheValue;
}