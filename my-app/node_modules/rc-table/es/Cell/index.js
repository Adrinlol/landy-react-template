import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _typeof from "@babel/runtime/helpers/esm/typeof";
var _excluded = ["colSpan", "rowSpan", "style", "className"];
import * as React from 'react';
import classNames from 'classnames';
import shallowEqual from 'shallowequal';
import { supportRef } from "rc-util/es/ref";
import { getPathValue, validateValue } from '../utils/valueUtil';
import StickyContext from '../context/StickyContext';
import HoverContext from '../context/HoverContext';
import warning from "rc-util/es/warning";
/** Check if cell is in hover range */

function inHoverRange(cellStartRow, cellRowSpan, startRow, endRow) {
  var cellEndRow = cellStartRow + cellRowSpan - 1;
  return cellStartRow <= endRow && cellEndRow >= startRow;
}

function isRenderCell(data) {
  return data && _typeof(data) === 'object' && !Array.isArray(data) && ! /*#__PURE__*/React.isValidElement(data);
}

function isRefComponent(component) {
  // String tag component also support ref
  if (typeof component === 'string') {
    return true;
  }

  return supportRef(component);
}

function Cell(_ref, ref) {
  var _ref3, _ref4, _classNames;

  var prefixCls = _ref.prefixCls,
      className = _ref.className,
      record = _ref.record,
      index = _ref.index,
      renderIndex = _ref.renderIndex,
      dataIndex = _ref.dataIndex,
      render = _ref.render,
      children = _ref.children,
      _ref$component = _ref.component,
      Component = _ref$component === void 0 ? 'td' : _ref$component,
      colSpan = _ref.colSpan,
      rowSpan = _ref.rowSpan,
      fixLeft = _ref.fixLeft,
      fixRight = _ref.fixRight,
      firstFixLeft = _ref.firstFixLeft,
      lastFixLeft = _ref.lastFixLeft,
      firstFixRight = _ref.firstFixRight,
      lastFixRight = _ref.lastFixRight,
      appendNode = _ref.appendNode,
      _ref$additionalProps = _ref.additionalProps,
      additionalProps = _ref$additionalProps === void 0 ? {} : _ref$additionalProps,
      ellipsis = _ref.ellipsis,
      align = _ref.align,
      rowType = _ref.rowType,
      isSticky = _ref.isSticky,
      hovering = _ref.hovering,
      onHover = _ref.onHover;
  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var supportSticky = React.useContext(StickyContext); // ==================== Child Node ====================

  var cellProps;
  var childNode;

  if (validateValue(children)) {
    childNode = children;
  } else {
    var value = getPathValue(record, dataIndex); // Customize render node

    childNode = value;

    if (render) {
      var renderData = render(value, record, renderIndex);

      if (isRenderCell(renderData)) {
        if (process.env.NODE_ENV !== 'production') {
          warning(false, '`columns.render` return cell props is deprecated with perf issue, please use `onCell` instead.');
        }

        childNode = renderData.children;
        cellProps = renderData.props;
      } else {
        childNode = renderData;
      }
    }
  } // Not crash if final `childNode` is not validate ReactNode


  if (_typeof(childNode) === 'object' && !Array.isArray(childNode) && ! /*#__PURE__*/React.isValidElement(childNode)) {
    childNode = null;
  }

  if (ellipsis && (lastFixLeft || firstFixRight)) {
    childNode = /*#__PURE__*/React.createElement("span", {
      className: "".concat(cellPrefixCls, "-content")
    }, childNode);
  }

  var _ref2 = cellProps || {},
      cellColSpan = _ref2.colSpan,
      cellRowSpan = _ref2.rowSpan,
      cellStyle = _ref2.style,
      cellClassName = _ref2.className,
      restCellProps = _objectWithoutProperties(_ref2, _excluded);

  var mergedColSpan = (_ref3 = cellColSpan !== undefined ? cellColSpan : colSpan) !== null && _ref3 !== void 0 ? _ref3 : 1;
  var mergedRowSpan = (_ref4 = cellRowSpan !== undefined ? cellRowSpan : rowSpan) !== null && _ref4 !== void 0 ? _ref4 : 1;

  if (mergedColSpan === 0 || mergedRowSpan === 0) {
    return null;
  } // ====================== Fixed =======================


  var fixedStyle = {};
  var isFixLeft = typeof fixLeft === 'number' && supportSticky;
  var isFixRight = typeof fixRight === 'number' && supportSticky;

  if (isFixLeft) {
    fixedStyle.position = 'sticky';
    fixedStyle.left = fixLeft;
  }

  if (isFixRight) {
    fixedStyle.position = 'sticky';
    fixedStyle.right = fixRight;
  } // ====================== Align =======================


  var alignStyle = {};

  if (align) {
    alignStyle.textAlign = align;
  } // ====================== Hover =======================


  var onMouseEnter = function onMouseEnter(event) {
    var _additionalProps$onMo;

    if (record) {
      onHover(index, index + mergedRowSpan - 1);
    }

    additionalProps === null || additionalProps === void 0 ? void 0 : (_additionalProps$onMo = additionalProps.onMouseEnter) === null || _additionalProps$onMo === void 0 ? void 0 : _additionalProps$onMo.call(additionalProps, event);
  };

  var onMouseLeave = function onMouseLeave(event) {
    var _additionalProps$onMo2;

    if (record) {
      onHover(-1, -1);
    }

    additionalProps === null || additionalProps === void 0 ? void 0 : (_additionalProps$onMo2 = additionalProps.onMouseLeave) === null || _additionalProps$onMo2 === void 0 ? void 0 : _additionalProps$onMo2.call(additionalProps, event);
  }; // ====================== Render ======================


  var title;
  var ellipsisConfig = ellipsis === true ? {
    showTitle: true
  } : ellipsis;

  if (ellipsisConfig && (ellipsisConfig.showTitle || rowType === 'header')) {
    if (typeof childNode === 'string' || typeof childNode === 'number') {
      title = childNode.toString();
    } else if ( /*#__PURE__*/React.isValidElement(childNode) && typeof childNode.props.children === 'string') {
      title = childNode.props.children;
    }
  }

  var componentProps = _objectSpread(_objectSpread(_objectSpread({
    title: title
  }, restCellProps), additionalProps), {}, {
    colSpan: mergedColSpan !== 1 ? mergedColSpan : null,
    rowSpan: mergedRowSpan !== 1 ? mergedRowSpan : null,
    className: classNames(cellPrefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(cellPrefixCls, "-fix-left"), isFixLeft && supportSticky), _defineProperty(_classNames, "".concat(cellPrefixCls, "-fix-left-first"), firstFixLeft && supportSticky), _defineProperty(_classNames, "".concat(cellPrefixCls, "-fix-left-last"), lastFixLeft && supportSticky), _defineProperty(_classNames, "".concat(cellPrefixCls, "-fix-right"), isFixRight && supportSticky), _defineProperty(_classNames, "".concat(cellPrefixCls, "-fix-right-first"), firstFixRight && supportSticky), _defineProperty(_classNames, "".concat(cellPrefixCls, "-fix-right-last"), lastFixRight && supportSticky), _defineProperty(_classNames, "".concat(cellPrefixCls, "-ellipsis"), ellipsis), _defineProperty(_classNames, "".concat(cellPrefixCls, "-with-append"), appendNode), _defineProperty(_classNames, "".concat(cellPrefixCls, "-fix-sticky"), (isFixLeft || isFixRight) && isSticky && supportSticky), _defineProperty(_classNames, "".concat(cellPrefixCls, "-row-hover"), !cellProps && hovering), _classNames), additionalProps.className, cellClassName),
    style: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, additionalProps.style), alignStyle), fixedStyle), cellStyle),
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    ref: isRefComponent(Component) ? ref : null
  });

  return /*#__PURE__*/React.createElement(Component, componentProps, appendNode, childNode);
}

var RefCell = /*#__PURE__*/React.forwardRef(Cell);
RefCell.displayName = 'Cell';
var comparePropList = ['expanded', 'className', 'hovering'];
var MemoCell = /*#__PURE__*/React.memo(RefCell, function (prev, next) {
  if (next.shouldCellUpdate) {
    return (// Additional handle of expanded logic
      comparePropList.every(function (propName) {
        return prev[propName] === next[propName];
      }) && // User control update logic
      !next.shouldCellUpdate(next.record, prev.record)
    );
  }

  return shallowEqual(prev, next);
});
/** Inject hover data here, we still wish MemoCell keep simple `shouldCellUpdate` logic */

var WrappedCell = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _React$useContext = React.useContext(HoverContext),
      onHover = _React$useContext.onHover,
      startRow = _React$useContext.startRow,
      endRow = _React$useContext.endRow;

  var index = props.index,
      _props$additionalProp = props.additionalProps,
      additionalProps = _props$additionalProp === void 0 ? {} : _props$additionalProp,
      colSpan = props.colSpan,
      rowSpan = props.rowSpan;
  var cellColSpan = additionalProps.colSpan,
      cellRowSpan = additionalProps.rowSpan;
  var mergedColSpan = colSpan !== null && colSpan !== void 0 ? colSpan : cellColSpan;
  var mergedRowSpan = rowSpan !== null && rowSpan !== void 0 ? rowSpan : cellRowSpan;
  var hovering = inHoverRange(index, mergedRowSpan || 1, startRow, endRow);
  return /*#__PURE__*/React.createElement(MemoCell, _extends({}, props, {
    colSpan: mergedColSpan,
    rowSpan: mergedRowSpan,
    hovering: hovering,
    ref: ref,
    onHover: onHover
  }));
});
WrappedCell.displayName = 'WrappedCell';
export default WrappedCell;