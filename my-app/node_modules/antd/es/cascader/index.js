import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import * as React from 'react';
import classNames from 'classnames';
import RcCascader from 'rc-cascader';
import omit from "rc-util/es/omit";
import RightOutlined from "@ant-design/icons/es/icons/RightOutlined";
import LoadingOutlined from "@ant-design/icons/es/icons/LoadingOutlined";
import LeftOutlined from "@ant-design/icons/es/icons/LeftOutlined";
import devWarning from '../_util/devWarning';
import { ConfigContext } from '../config-provider';
import SizeContext from '../config-provider/SizeContext';
import getIcons from '../select/utils/iconUtil';
import { getTransitionName } from '../_util/motion';

function highlightKeyword(str, lowerKeyword, prefixCls) {
  var cells = str.toLowerCase().split(lowerKeyword).reduce(function (list, cur, index) {
    return index === 0 ? [cur] : [].concat(_toConsumableArray(list), [lowerKeyword, cur]);
  }, []);
  var fillCells = [];
  var start = 0;
  cells.forEach(function (cell, index) {
    var end = start + cell.length;
    var originWorld = str.slice(start, end);
    start = end;

    if (index % 2 === 1) {
      originWorld =
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      React.createElement("span", {
        className: "".concat(prefixCls, "-menu-item-keyword"),
        key: "seperator-".concat(index)
      }, originWorld);
    }

    fillCells.push(originWorld);
  });
  return fillCells;
}

var defaultSearchRender = function defaultSearchRender(inputValue, path, prefixCls, fieldNames) {
  var optionList = []; // We do lower here to save perf

  var lower = inputValue.toLowerCase();
  path.forEach(function (node, index) {
    if (index !== 0) {
      optionList.push(' / ');
    }

    var label = node[fieldNames.label];

    var type = _typeof(label);

    if (type === 'string' || type === 'number') {
      label = highlightKeyword(String(label), lower, prefixCls);
    }

    optionList.push(label);
  });
  return optionList;
};

var Cascader = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames2;

  var customizePrefixCls = props.prefixCls,
      customizeSize = props.size,
      className = props.className,
      multiple = props.multiple,
      _props$bordered = props.bordered,
      bordered = _props$bordered === void 0 ? true : _props$bordered,
      transitionName = props.transitionName,
      _props$choiceTransiti = props.choiceTransitionName,
      choiceTransitionName = _props$choiceTransiti === void 0 ? '' : _props$choiceTransiti,
      popupClassName = props.popupClassName,
      dropdownClassName = props.dropdownClassName,
      expandIcon = props.expandIcon,
      showSearch = props.showSearch,
      _props$allowClear = props.allowClear,
      allowClear = _props$allowClear === void 0 ? true : _props$allowClear,
      notFoundContent = props.notFoundContent,
      direction = props.direction,
      getPopupContainer = props.getPopupContainer,
      rest = __rest(props, ["prefixCls", "size", "className", "multiple", "bordered", "transitionName", "choiceTransitionName", "popupClassName", "dropdownClassName", "expandIcon", "showSearch", "allowClear", "notFoundContent", "direction", "getPopupContainer"]);

  var restProps = omit(rest, ['suffixIcon']);

  var _React$useContext = React.useContext(ConfigContext),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      renderEmpty = _React$useContext.renderEmpty,
      rootDirection = _React$useContext.direction;

  var mergedDirection = direction || rootDirection;
  var isRtl = mergedDirection === 'rtl'; // =================== Warning =====================

  if (process.env.NODE_ENV !== 'production') {
    devWarning(popupClassName === undefined, 'Cascader', '`popupClassName` is deprecated. Please use `dropdownClassName` instead.');
    devWarning(!multiple || !props.displayRender, 'Cascader', '`displayRender` not work on `multiple`. Please use `tagRender` instead.');
  } // =================== No Found ====================


  var mergedNotFoundContent = notFoundContent || renderEmpty('Cascader'); // ==================== Prefix =====================

  var rootPrefixCls = getPrefixCls();
  var prefixCls = getPrefixCls('select', customizePrefixCls);
  var cascaderPrefixCls = getPrefixCls('cascader', customizePrefixCls); // =================== Dropdown ====================

  var mergedDropdownClassName = classNames(dropdownClassName || popupClassName, "".concat(cascaderPrefixCls, "-dropdown"), _defineProperty({}, "".concat(cascaderPrefixCls, "-dropdown-rtl"), mergedDirection === 'rtl')); // ==================== Search =====================

  var mergedShowSearch = React.useMemo(function () {
    if (!showSearch) {
      return showSearch;
    }

    var searchConfig = {
      render: defaultSearchRender
    };

    if (_typeof(showSearch) === 'object') {
      searchConfig = _extends(_extends({}, searchConfig), showSearch);
    }

    return searchConfig;
  }, [showSearch]); // ===================== Size ======================

  var size = React.useContext(SizeContext);
  var mergedSize = customizeSize || size; // ===================== Icon ======================

  var mergedExpandIcon = expandIcon;

  if (!expandIcon) {
    mergedExpandIcon = isRtl ? /*#__PURE__*/React.createElement(LeftOutlined, null) : /*#__PURE__*/React.createElement(RightOutlined, null);
  }

  var loadingIcon = /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-menu-item-loading-icon")
  }, /*#__PURE__*/React.createElement(LoadingOutlined, {
    spin: true
  })); // =================== Multiple ====================

  var checkable = React.useMemo(function () {
    return multiple ? /*#__PURE__*/React.createElement("span", {
      className: "".concat(cascaderPrefixCls, "-checkbox-inner")
    }) : false;
  }, [multiple]); // ===================== Icons =====================

  var _getIcons = getIcons(_extends(_extends({}, props), {
    multiple: multiple,
    prefixCls: prefixCls
  })),
      suffixIcon = _getIcons.suffixIcon,
      removeIcon = _getIcons.removeIcon,
      clearIcon = _getIcons.clearIcon; // ==================== Render =====================


  return /*#__PURE__*/React.createElement(RcCascader, _extends({
    prefixCls: prefixCls,
    className: classNames(!customizePrefixCls && cascaderPrefixCls, (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-lg"), mergedSize === 'large'), _defineProperty(_classNames2, "".concat(prefixCls, "-sm"), mergedSize === 'small'), _defineProperty(_classNames2, "".concat(prefixCls, "-rtl"), isRtl), _defineProperty(_classNames2, "".concat(prefixCls, "-borderless"), !bordered), _classNames2), className)
  }, restProps, {
    direction: mergedDirection,
    notFoundContent: mergedNotFoundContent,
    allowClear: allowClear,
    showSearch: mergedShowSearch,
    expandIcon: mergedExpandIcon,
    inputIcon: suffixIcon,
    removeIcon: removeIcon,
    clearIcon: clearIcon,
    loadingIcon: loadingIcon,
    checkable: checkable,
    dropdownClassName: mergedDropdownClassName,
    dropdownPrefixCls: customizePrefixCls || cascaderPrefixCls,
    choiceTransitionName: getTransitionName(rootPrefixCls, '', choiceTransitionName),
    transitionName: getTransitionName(rootPrefixCls, 'slide-up', transitionName),
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    ref: ref
  }));
});
Cascader.displayName = 'Cascader';
export default Cascader;