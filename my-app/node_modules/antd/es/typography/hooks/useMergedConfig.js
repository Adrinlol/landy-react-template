import _typeof from "@babel/runtime/helpers/esm/typeof";
import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
export default function useMergedConfig(propConfig, templateConfig) {
  return React.useMemo(function () {
    var support = !!propConfig;
    return [support, _extends(_extends({}, templateConfig), support && _typeof(propConfig) === 'object' ? propConfig : null)];
  }, [propConfig]);
}