import * as React from 'react';
import ResizeObserver from 'rc-resize-observer';
import MeasureCell from './MeasureCell';
import raf from "rc-util/es/raf";
export default function MeasureRow(_ref) {
  var prefixCls = _ref.prefixCls,
      columnsKey = _ref.columnsKey,
      onColumnResize = _ref.onColumnResize;
  // delay state update while resize continuously, e.g. window resize
  var resizedColumnsRef = React.useRef(new Map());
  var rafIdRef = React.useRef(null);

  var delayOnColumnResize = function delayOnColumnResize() {
    if (rafIdRef.current === null) {
      rafIdRef.current = raf(function () {
        resizedColumnsRef.current.forEach(function (width, columnKey) {
          onColumnResize(columnKey, width);
        });
        resizedColumnsRef.current.clear();
        rafIdRef.current = null;
      }, 2);
    }
  };

  React.useEffect(function () {
    return function () {
      raf.cancel(rafIdRef.current);
    };
  }, []);
  return /*#__PURE__*/React.createElement("tr", {
    "aria-hidden": "true",
    className: "".concat(prefixCls, "-measure-row"),
    style: {
      height: 0,
      fontSize: 0
    }
  }, /*#__PURE__*/React.createElement(ResizeObserver.Collection, {
    onBatchResize: function onBatchResize(infoList) {
      infoList.forEach(function (_ref2) {
        var columnKey = _ref2.data,
            size = _ref2.size;
        resizedColumnsRef.current.set(columnKey, size.offsetWidth);
      });
      delayOnColumnResize();
    }
  }, columnsKey.map(function (columnKey) {
    return /*#__PURE__*/React.createElement(MeasureCell, {
      key: columnKey,
      columnKey: columnKey,
      onColumnResize: onColumnResize
    });
  })));
}