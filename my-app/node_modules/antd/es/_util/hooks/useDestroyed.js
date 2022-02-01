import * as React from 'react';
export default function useDestroyed() {
  var mountedRef = React.useRef(true);
  React.useEffect(function () {
    return function () {
      mountedRef.current = false;
    };
  }, []);
  return function () {
    return !mountedRef.current;
  };
}