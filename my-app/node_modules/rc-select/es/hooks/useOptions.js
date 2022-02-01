import * as React from 'react';
import { convertChildrenToData } from '../utils/legacyUtil';
/**
 * Parse `children` to `options` if `options` is not provided.
 * Then flatten the `options`.
 */

export default function useOptions(options, children, fieldNames) {
  return React.useMemo(function () {
    var mergedOptions = options;
    var childrenAsData = !options;

    if (childrenAsData) {
      mergedOptions = convertChildrenToData(children);
    }

    var valueOptions = new Map();
    var labelOptions = new Map();

    function dig(optionList) {
      var isChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // for loop to speed up collection speed
      for (var i = 0; i < optionList.length; i += 1) {
        var option = optionList[i];

        if (!option[fieldNames.options] || isChildren) {
          valueOptions.set(option[fieldNames.value], option);
          labelOptions.set(option[fieldNames.label], option);
        } else {
          dig(option[fieldNames.options], true);
        }
      }
    }

    dig(mergedOptions);
    return {
      options: mergedOptions,
      valueOptions: valueOptions,
      labelOptions: labelOptions
    };
  }, [options, children, fieldNames]);
}