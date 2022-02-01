"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertChildrenToColumns = convertChildrenToColumns;
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _warning = _interopRequireDefault(require("rc-util/lib/warning"));

var _toArray = _interopRequireDefault(require("rc-util/lib/Children/toArray"));

var _legacyUtil = require("../utils/legacyUtil");

var _constant = require("../constant");

var _excluded = ["children"],
    _excluded2 = ["fixed"];

function convertChildrenToColumns(children) {
  return (0, _toArray.default)(children).filter(function (node) {
    return /*#__PURE__*/React.isValidElement(node);
  }).map(function (_ref) {
    var key = _ref.key,
        props = _ref.props;
    var nodeChildren = props.children,
        restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
    var column = (0, _objectSpread2.default)({
      key: key
    }, restProps);

    if (nodeChildren) {
      column.children = convertChildrenToColumns(nodeChildren);
    }

    return column;
  });
}

function flatColumns(columns) {
  return columns.reduce(function (list, column) {
    var fixed = column.fixed; // Convert `fixed='true'` to `fixed='left'` instead

    var parsedFixed = fixed === true ? 'left' : fixed;
    var subColumns = column.children;

    if (subColumns && subColumns.length > 0) {
      return [].concat((0, _toConsumableArray2.default)(list), (0, _toConsumableArray2.default)(flatColumns(subColumns).map(function (subColum) {
        return (0, _objectSpread2.default)({
          fixed: parsedFixed
        }, subColum);
      })));
    }

    return [].concat((0, _toConsumableArray2.default)(list), [(0, _objectSpread2.default)((0, _objectSpread2.default)({}, column), {}, {
      fixed: parsedFixed
    })]);
  }, []);
}

function warningFixed(flattenColumns) {
  var allFixLeft = true;

  for (var i = 0; i < flattenColumns.length; i += 1) {
    var col = flattenColumns[i];

    if (allFixLeft && col.fixed !== 'left') {
      allFixLeft = false;
    } else if (!allFixLeft && col.fixed === 'left') {
      (0, _warning.default)(false, "Index ".concat(i - 1, " of `columns` missing `fixed='left'` prop."));
      break;
    }
  }

  var allFixRight = true;

  for (var _i = flattenColumns.length - 1; _i >= 0; _i -= 1) {
    var _col = flattenColumns[_i];

    if (allFixRight && _col.fixed !== 'right') {
      allFixRight = false;
    } else if (!allFixRight && _col.fixed === 'right') {
      (0, _warning.default)(false, "Index ".concat(_i + 1, " of `columns` missing `fixed='right'` prop."));
      break;
    }
  }
}

function revertForRtl(columns) {
  return columns.map(function (column) {
    var fixed = column.fixed,
        restProps = (0, _objectWithoutProperties2.default)(column, _excluded2); // Convert `fixed='left'` to `fixed='right'` instead

    var parsedFixed = fixed;

    if (fixed === 'left') {
      parsedFixed = 'right';
    } else if (fixed === 'right') {
      parsedFixed = 'left';
    }

    return (0, _objectSpread2.default)({
      fixed: parsedFixed
    }, restProps);
  });
}
/**
 * Parse `columns` & `children` into `columns`.
 */


function useColumns(_ref2, transformColumns) {
  var prefixCls = _ref2.prefixCls,
      columns = _ref2.columns,
      children = _ref2.children,
      expandable = _ref2.expandable,
      expandedKeys = _ref2.expandedKeys,
      getRowKey = _ref2.getRowKey,
      onTriggerExpand = _ref2.onTriggerExpand,
      expandIcon = _ref2.expandIcon,
      rowExpandable = _ref2.rowExpandable,
      expandIconColumnIndex = _ref2.expandIconColumnIndex,
      direction = _ref2.direction,
      expandRowByClick = _ref2.expandRowByClick,
      columnWidth = _ref2.columnWidth,
      fixed = _ref2.fixed;
  var baseColumns = React.useMemo(function () {
    return columns || convertChildrenToColumns(children);
  }, [columns, children]); // ========================== Expand ==========================

  var withExpandColumns = React.useMemo(function () {
    if (expandable) {
      var _expandColumn;

      var cloneColumns = baseColumns.slice(); // >>> Warning if use `expandIconColumnIndex`

      if (process.env.NODE_ENV !== 'production' && expandIconColumnIndex >= 0) {
        (0, _warning.default)(false, '`expandIconColumnIndex` is deprecated. Please use `Table.EXPAND_COLUMN` in `columns` instead.');
      } // >>> Insert expand column if not exist


      if (!cloneColumns.includes(_constant.EXPAND_COLUMN)) {
        var expandColIndex = expandIconColumnIndex || 0;

        if (expandColIndex >= 0) {
          cloneColumns.splice(expandColIndex, 0, _constant.EXPAND_COLUMN);
        }
      } // >>> Deduplicate additional expand column


      if (process.env.NODE_ENV !== 'production' && cloneColumns.filter(function (c) {
        return c === _constant.EXPAND_COLUMN;
      }).length > 1) {
        (0, _warning.default)(false, 'There exist more than one `EXPAND_COLUMN` in `columns`.');
      }

      var expandColumnIndex = cloneColumns.indexOf(_constant.EXPAND_COLUMN);
      cloneColumns = cloneColumns.filter(function (column, index) {
        return column !== _constant.EXPAND_COLUMN || index === expandColumnIndex;
      }); // >>> Check if expand column need to fixed

      var prevColumn = baseColumns[expandColumnIndex];
      var fixedColumn;

      if ((fixed === 'left' || fixed) && !expandIconColumnIndex) {
        fixedColumn = 'left';
      } else if ((fixed === 'right' || fixed) && expandIconColumnIndex === baseColumns.length) {
        fixedColumn = 'right';
      } else {
        fixedColumn = prevColumn ? prevColumn.fixed : null;
      } // >>> Create expandable column


      var expandColumn = (_expandColumn = {}, (0, _defineProperty2.default)(_expandColumn, _legacyUtil.INTERNAL_COL_DEFINE, {
        className: "".concat(prefixCls, "-expand-icon-col"),
        columnType: 'EXPAND_COLUMN'
      }), (0, _defineProperty2.default)(_expandColumn, "title", ''), (0, _defineProperty2.default)(_expandColumn, "fixed", fixedColumn), (0, _defineProperty2.default)(_expandColumn, "className", "".concat(prefixCls, "-row-expand-icon-cell")), (0, _defineProperty2.default)(_expandColumn, "width", columnWidth), (0, _defineProperty2.default)(_expandColumn, "render", function render(_, record, index) {
        var rowKey = getRowKey(record, index);
        var expanded = expandedKeys.has(rowKey);
        var recordExpandable = rowExpandable ? rowExpandable(record) : true;
        var icon = expandIcon({
          prefixCls: prefixCls,
          expanded: expanded,
          expandable: recordExpandable,
          record: record,
          onExpand: onTriggerExpand
        });

        if (expandRowByClick) {
          return /*#__PURE__*/React.createElement("span", {
            onClick: function onClick(e) {
              return e.stopPropagation();
            }
          }, icon);
        }

        return icon;
      }), _expandColumn);
      return cloneColumns.map(function (col) {
        return col === _constant.EXPAND_COLUMN ? expandColumn : col;
      });
    }

    if (process.env.NODE_ENV !== 'production' && baseColumns.includes(_constant.EXPAND_COLUMN)) {
      (0, _warning.default)(false, '`expandable` is not config but there exist `EXPAND_COLUMN` in `columns`.');
    }

    return baseColumns.filter(function (col) {
      return col !== _constant.EXPAND_COLUMN;
    });
  }, [expandable, baseColumns, getRowKey, expandedKeys, expandIcon, direction]); // ========================= Transform ========================

  var mergedColumns = React.useMemo(function () {
    var finalColumns = withExpandColumns;

    if (transformColumns) {
      finalColumns = transformColumns(finalColumns);
    } // Always provides at least one column for table display


    if (!finalColumns.length) {
      finalColumns = [{
        render: function render() {
          return null;
        }
      }];
    }

    return finalColumns;
  }, [transformColumns, withExpandColumns, direction]); // ========================== Flatten =========================

  var flattenColumns = React.useMemo(function () {
    if (direction === 'rtl') {
      return revertForRtl(flatColumns(mergedColumns));
    }

    return flatColumns(mergedColumns);
  }, [mergedColumns, direction]); // Only check out of production since it's waste for each render

  if (process.env.NODE_ENV !== 'production') {
    warningFixed(flattenColumns);
  }

  return [mergedColumns, flattenColumns];
}

var _default = useColumns;
exports.default = _default;