"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SummaryContext = exports.FooterComponents = void 0;

var React = _interopRequireWildcard(require("react"));

var _TableContext = _interopRequireDefault(require("../context/TableContext"));

var _Summary = _interopRequireDefault(require("./Summary"));

var SummaryContext = /*#__PURE__*/React.createContext({});
exports.SummaryContext = SummaryContext;

function Footer(_ref) {
  var children = _ref.children,
      stickyOffsets = _ref.stickyOffsets,
      flattenColumns = _ref.flattenColumns;
  var tableContext = React.useContext(_TableContext.default);
  var prefixCls = tableContext.prefixCls;
  var lastColumnIndex = flattenColumns.length - 1;
  var scrollColumn = flattenColumns[lastColumnIndex];
  var summaryContext = React.useMemo(function () {
    return {
      stickyOffsets: stickyOffsets,
      flattenColumns: flattenColumns,
      scrollColumnIndex: (scrollColumn === null || scrollColumn === void 0 ? void 0 : scrollColumn.scrollbar) ? lastColumnIndex : null
    };
  }, [scrollColumn, flattenColumns, lastColumnIndex, stickyOffsets]);
  return /*#__PURE__*/React.createElement(SummaryContext.Provider, {
    value: summaryContext
  }, /*#__PURE__*/React.createElement("tfoot", {
    className: "".concat(prefixCls, "-summary")
  }, children));
}

var _default = Footer;
exports.default = _default;
var FooterComponents = _Summary.default;
exports.FooterComponents = FooterComponents;