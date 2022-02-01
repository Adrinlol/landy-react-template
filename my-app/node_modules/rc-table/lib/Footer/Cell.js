"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SummaryCell;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _ = require(".");

var _Cell = _interopRequireDefault(require("../Cell"));

var _TableContext = _interopRequireDefault(require("../context/TableContext"));

var _fixUtil = require("../utils/fixUtil");

function SummaryCell(_ref) {
  var className = _ref.className,
      index = _ref.index,
      children = _ref.children,
      _ref$colSpan = _ref.colSpan,
      colSpan = _ref$colSpan === void 0 ? 1 : _ref$colSpan,
      rowSpan = _ref.rowSpan,
      align = _ref.align;

  var _React$useContext = React.useContext(_TableContext.default),
      prefixCls = _React$useContext.prefixCls,
      direction = _React$useContext.direction;

  var _React$useContext2 = React.useContext(_.SummaryContext),
      scrollColumnIndex = _React$useContext2.scrollColumnIndex,
      stickyOffsets = _React$useContext2.stickyOffsets,
      flattenColumns = _React$useContext2.flattenColumns;

  var lastIndex = index + colSpan - 1;
  var mergedColSpan = lastIndex + 1 === scrollColumnIndex ? colSpan + 1 : colSpan;
  var fixedInfo = (0, _fixUtil.getCellFixedInfo)(index, index + mergedColSpan - 1, flattenColumns, stickyOffsets, direction);
  return /*#__PURE__*/React.createElement(_Cell.default, (0, _extends2.default)({
    className: className,
    index: index,
    component: "td",
    prefixCls: prefixCls,
    record: null,
    dataIndex: null,
    align: align,
    colSpan: mergedColSpan,
    rowSpan: rowSpan,
    render: function render() {
      return children;
    }
  }, fixedInfo));
}