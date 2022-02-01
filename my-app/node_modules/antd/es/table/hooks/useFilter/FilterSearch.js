import * as React from 'react';
import SearchOutlined from "@ant-design/icons/es/icons/SearchOutlined";
import Input from '../../../input';

var FilterSearch = function FilterSearch(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      filterSearch = _ref.filterSearch,
      tablePrefixCls = _ref.tablePrefixCls,
      locale = _ref.locale;

  if (!filterSearch) {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(tablePrefixCls, "-filter-dropdown-search")
  }, /*#__PURE__*/React.createElement(Input, {
    prefix: /*#__PURE__*/React.createElement(SearchOutlined, null),
    placeholder: locale.filterSearchPlaceholder,
    onChange: onChange,
    value: value // for skip min-width of input
    ,
    htmlSize: 1,
    className: "".concat(tablePrefixCls, "-filter-dropdown-search-input")
  }));
};

export default FilterSearch;