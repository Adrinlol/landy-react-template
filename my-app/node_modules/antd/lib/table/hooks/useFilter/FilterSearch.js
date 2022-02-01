"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _SearchOutlined = _interopRequireDefault(require("@ant-design/icons/SearchOutlined"));

var _input = _interopRequireDefault(require("../../../input"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
  }, /*#__PURE__*/React.createElement(_input["default"], {
    prefix: /*#__PURE__*/React.createElement(_SearchOutlined["default"], null),
    placeholder: locale.filterSearchPlaceholder,
    onChange: onChange,
    value: value // for skip min-width of input
    ,
    htmlSize: 1,
    className: "".concat(tablePrefixCls, "-filter-dropdown-search-input")
  }));
};

var _default = FilterSearch;
exports["default"] = _default;