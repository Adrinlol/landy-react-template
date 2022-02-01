"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var React = _interopRequireWildcard(require("react"));

var _legacyUtil = require("../utils/legacyUtil");

var _default = function _default(treeData, searchValue, _ref) {
  var treeNodeFilterProp = _ref.treeNodeFilterProp,
      filterTreeNode = _ref.filterTreeNode,
      fieldNames = _ref.fieldNames;
  var fieldChildren = fieldNames.children;
  return React.useMemo(function () {
    if (!searchValue || filterTreeNode === false) {
      return treeData;
    }

    var filterOptionFunc;

    if (typeof filterTreeNode === 'function') {
      filterOptionFunc = filterTreeNode;
    } else {
      var upperStr = searchValue.toUpperCase();

      filterOptionFunc = function filterOptionFunc(_, dataNode) {
        var value = dataNode[treeNodeFilterProp];
        return String(value).toUpperCase().includes(upperStr);
      };
    }

    function dig(list) {
      var keepAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return list.map(function (dataNode) {
        var children = dataNode[fieldChildren];
        var match = keepAll || filterOptionFunc(searchValue, (0, _legacyUtil.fillLegacyProps)(dataNode));
        var childList = dig(children || [], match);

        if (match || childList.length) {
          return (0, _objectSpread3.default)((0, _objectSpread3.default)({}, dataNode), {}, (0, _defineProperty2.default)({}, fieldChildren, childList));
        }

        return null;
      }).filter(function (node) {
        return node;
      });
    }

    return dig(treeData);
  }, [treeData, searchValue, fieldChildren, treeNodeFilterProp, filterTreeNode]);
};

exports.default = _default;