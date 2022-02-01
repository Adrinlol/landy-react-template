import * as React from 'react';
import Cell from '../Cell';
import TableContext from '../context/TableContext';
import ExpandedRowContext from '../context/ExpandedRowContext';

function ExpandedRow(_ref) {
  var prefixCls = _ref.prefixCls,
      children = _ref.children,
      Component = _ref.component,
      cellComponent = _ref.cellComponent,
      className = _ref.className,
      expanded = _ref.expanded,
      colSpan = _ref.colSpan,
      isEmpty = _ref.isEmpty;

  var _React$useContext = React.useContext(TableContext),
      scrollbarSize = _React$useContext.scrollbarSize;

  var _React$useContext2 = React.useContext(ExpandedRowContext),
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
    }, /*#__PURE__*/React.createElement(Cell, {
      component: cellComponent,
      prefixCls: prefixCls,
      colSpan: colSpan
    }, contentNode));
  }, [children, Component, className, expanded, colSpan, isEmpty, scrollbarSize, componentWidth, fixColumn, fixHeader, horizonScroll]);
}

export default ExpandedRow;