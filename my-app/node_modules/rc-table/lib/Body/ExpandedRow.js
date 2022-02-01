"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Cell = _interopRequireDefault(require("../Cell"));

var _TableContext = _interopRequireDefault(require("../context/TableContext"));

var _ExpandedRowContext = _interopRequireDefault(require("../context/ExpandedRowContext"));

function ExpandedRow(_ref) {
  var prefixCls = _ref.prefixCls,
      children = _ref.children,
      Component = _ref.component,
      cellComponent = _ref.cellComponent,
      className = _ref.className,
      expanded = _ref.expanded,
      colSpan = _ref.colSpan,
      isEmpty = _ref.isEmpty;

  var _React$useContext = React.useContext(_TableContext.default),
      scrollbarSize = _React$useContext.scrollbarSize;

  var _React$useContext2 = React.useContext(_ExpandedRowContext.default),
      fixHeader = _React$useContext2.fixHeader,
      fixColumn = _React$useContext2.fixColumn,
      componentWidth = _React$useContext2.componentWidth,
      horizonScroll = _React$useContext2.horizonScroll; // Cache render node


  return React.useMemo(function () {
    var contentNode = children;

    if (isEmpty ? horizonScroll : fixColumn) {
      contentNode = /*#__PURE__*/React.createElement("div", {
        style: {
          width: componentWidth - (fixHeader ? scrollbarSize : 0),
          position: 'sticky',
          left: 0,
          overflow: 'hidden'
        },
        className: "".concat(prefixCls, "-expanded-row-fixed")
      }, contentNode);
    }

    return /*#__PURE__*/React.createElement(Component, {
      className: className,
      style: {
        display: expanded ? null : 'none'
      }
    }, /*#__PURE__*/React.createElement(_Cell.default, {
      component: cellComponent,
      prefixCls: prefixCls,
      colSpan: colSpan
    }, contentNode));
  }, [children, Component, className, expanded, colSpan, isEmpty, scrollbarSize, componentWidth, fixColumn, fixHeader, horizonScroll]);
}

var _default = ExpandedRow;
exports.default = _default;