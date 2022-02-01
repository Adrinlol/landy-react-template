import * as React from 'react';
import TableContext from '../context/TableContext';
import Summary from './Summary';
export var SummaryContext = /*#__PURE__*/React.createContext({});

function Footer(_ref) {
  var children = _ref.children,
      stickyOffsets = _ref.stickyOffsets,
      flattenColumns = _ref.flattenColumns;
  var tableContext = React.useContext(TableContext);
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

export default Footer;
export var FooterComponents = Summary;