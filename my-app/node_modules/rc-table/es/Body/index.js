import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import * as React from 'react';
import TableContext from '../context/TableContext';
import ExpandedRow from './ExpandedRow';
import BodyContext from '../context/BodyContext';
import { getColumnsKey } from '../utils/valueUtil';
import ResizeContext from '../context/ResizeContext';
import BodyRow from './BodyRow';
import useFlattenRecords from '../hooks/useFlattenRecords';
import HoverContext from '../context/HoverContext';
import MeasureRow from './MeasureRow';

function Body(_ref) {
  var data = _ref.data,
      getRowKey = _ref.getRowKey,
      measureColumnWidth = _ref.measureColumnWidth,
      expandedKeys = _ref.expandedKeys,
      onRow = _ref.onRow,
      rowExpandable = _ref.rowExpandable,
      emptyNode = _ref.emptyNode,
      childrenColumnName = _ref.childrenColumnName;

  var _React$useContext = React.useContext(ResizeContext),
      onColumnResize = _React$useContext.onColumnResize;

  var _React$useContext2 = React.useContext(TableContext),
      prefixCls = _React$useContext2.prefixCls,
      getComponent = _React$useContext2.getComponent;

  var _React$useContext3 = React.useContext(BodyContext),
      flattenColumns = _React$useContext3.flattenColumns;

  var flattenData = useFlattenRecords(data, childrenColumnName, expandedKeys, getRowKey); // ====================== Hover =======================

  var _React$useState = React.useState(-1),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      startRow = _React$useState2[0],
      setStartRow = _React$useState2[1];

  var _React$useState3 = React.useState(-1),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      endRow = _React$useState4[0],
      setEndRow = _React$useState4[1];

  var onHover = React.useCallback(function (start, end) {
    setStartRow(start);
    setEndRow(end);
  }, []);
  var hoverContext = React.useMemo(function () {
    return {
      startRow: startRow,
      endRow: endRow,
      onHover: onHover
    };
  }, [onHover, startRow, endRow]); // ====================== Render ======================

  var bodyNode = React.useMemo(function () {
    var WrapperComponent = getComponent(['body', 'wrapper'], 'tbody');
    var trComponent = getComponent(['body', 'row'], 'tr');
    var tdComponent = getComponent(['body', 'cell'], 'td');
    var rows;

    if (data.length) {
      rows = flattenData.map(function (item, idx) {
        var record = item.record,
            indent = item.indent,
            renderIndex = item.index;
        var key = getRowKey(record, idx);
        return /*#__PURE__*/React.createElement(BodyRow, {
          key: key,
          rowKey: key,
          record: record,
          recordKey: key,
          index: idx,
          renderIndex: renderIndex,
          rowComponent: trComponent,
          cellComponent: tdComponent,
          expandedKeys: expandedKeys,
          onRow: onRow,
          getRowKey: getRowKey,
          rowExpandable: rowExpandable,
          childrenColumnName: childrenColumnName,
          indent: indent
        });
      });
    } else {
      rows = /*#__PURE__*/React.createElement(ExpandedRow, {
        expanded: true,
        className: "".concat(prefixCls, "-placeholder"),
        prefixCls: prefixCls,
        component: trComponent,
        cellComponent: tdComponent,
        colSpan: flattenColumns.length,
        isEmpty: true
      }, emptyNode);
    }

    var columnsKey = getColumnsKey(flattenColumns);
    return /*#__PURE__*/React.createElement(WrapperComponent, {
      className: "".concat(prefixCls, "-tbody")
    }, measureColumnWidth && /*#__PURE__*/React.createElement(MeasureRow, {
      prefixCls: prefixCls,
      columnsKey: columnsKey,
      onColumnResize: onColumnResize
    }), rows);
  }, [data, prefixCls, onRow, measureColumnWidth, expandedKeys, getRowKey, getComponent, emptyNode, flattenColumns, childrenColumnName, onColumnResize, rowExpandable, flattenData]);
  return /*#__PURE__*/React.createElement(HoverContext.Provider, {
    value: hoverContext
  }, bodyNode);
}

var MemoBody = /*#__PURE__*/React.memo(Body);
MemoBody.displayName = 'Body';
export default MemoBody;