import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

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
import RcInputNumber from 'rc-input-number';
import UpOutlined from "@ant-design/icons/es/icons/UpOutlined";
import DownOutlined from "@ant-design/icons/es/icons/DownOutlined";
import { ConfigContext } from '../config-provider';
import SizeContext from '../config-provider/SizeContext';
import { cloneElement } from '../_util/reactNode';
var InputNumber = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;

  var _React$useContext = React.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var size = React.useContext(SizeContext);

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      focused = _React$useState2[0],
      setFocus = _React$useState2[1];

  var inputRef = React.useRef(null);
  React.useImperativeHandle(ref, function () {
    return inputRef.current;
  });

  var className = props.className,
      customizeSize = props.size,
      customizePrefixCls = props.prefixCls,
      addonBefore = props.addonBefore,
      addonAfter = props.addonAfter,
      prefix = props.prefix,
      _props$bordered = props.bordered,
      bordered = _props$bordered === void 0 ? true : _props$bordered,
      readOnly = props.readOnly,
      others = __rest(props, ["className", "size", "prefixCls", "addonBefore", "addonAfter", "prefix", "bordered", "readOnly"]);

  var prefixCls = getPrefixCls('input-number', customizePrefixCls);
  var upIcon = /*#__PURE__*/React.createElement(UpOutlined, {
    className: "".concat(prefixCls, "-handler-up-inner")
  });
  var downIcon = /*#__PURE__*/React.createElement(DownOutlined, {
    className: "".concat(prefixCls, "-handler-down-inner")
  });
  var mergeSize = customizeSize || size;
  var inputNumberClass = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-lg"), mergeSize === 'large'), _defineProperty(_classNames, "".concat(prefixCls, "-sm"), mergeSize === 'small'), _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _defineProperty(_classNames, "".concat(prefixCls, "-readonly"), readOnly), _defineProperty(_classNames, "".concat(prefixCls, "-borderless"), !bordered), _classNames), className);
  var element = /*#__PURE__*/React.createElement(RcInputNumber, _extends({
    ref: inputRef,
    className: inputNumberClass,
    upHandler: upIcon,
    downHandler: downIcon,
    prefixCls: prefixCls,
    readOnly: readOnly
  }, others));

  if (prefix != null) {
    var _classNames2;

    var affixWrapperCls = classNames("".concat(prefixCls, "-affix-wrapper"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-affix-wrapper-focused"), focused), _defineProperty(_classNames2, "".concat(prefixCls, "-affix-wrapper-disabled"), props.disabled), _defineProperty(_classNames2, "".concat(prefixCls, "-affix-wrapper-sm"), size === 'small'), _defineProperty(_classNames2, "".concat(prefixCls, "-affix-wrapper-lg"), size === 'large'), _defineProperty(_classNames2, "".concat(prefixCls, "-affix-wrapper-rtl"), direction === 'rtl'), _defineProperty(_classNames2, "".concat(prefixCls, "-affix-wrapper-readonly"), readOnly), _defineProperty(_classNames2, "".concat(prefixCls, "-affix-wrapper-borderless"), !bordered), _defineProperty(_classNames2, "".concat(className), !(addonBefore || addonAfter) && className), _classNames2));
    element = /*#__PURE__*/React.createElement("div", {
      className: affixWrapperCls,
      style: props.style,
      onMouseUp: function onMouseUp() {
        return inputRef.current.focus();
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-prefix")
    }, prefix), cloneElement(element, {
      style: null,
      value: props.value,
      onFocus: function onFocus(event) {
        var _a;

        setFocus(true);
        (_a = props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, event);
      },
      onBlur: function onBlur(event) {
        var _a;

        setFocus(false);
        (_a = props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, event);
      }
    }));
  }

  if (addonBefore != null || addonAfter != null) {
    var _classNames4;

    var wrapperClassName = "".concat(prefixCls, "-group");
    var addonClassName = "".concat(wrapperClassName, "-addon");
    var addonBeforeNode = addonBefore ? /*#__PURE__*/React.createElement("div", {
      className: addonClassName
    }, addonBefore) : null;
    var addonAfterNode = addonAfter ? /*#__PURE__*/React.createElement("div", {
      className: addonClassName
    }, addonAfter) : null;
    var mergedWrapperClassName = classNames("".concat(prefixCls, "-wrapper"), wrapperClassName, _defineProperty({}, "".concat(wrapperClassName, "-rtl"), direction === 'rtl'));
    var mergedGroupClassName = classNames("".concat(prefixCls, "-group-wrapper"), (_classNames4 = {}, _defineProperty(_classNames4, "".concat(prefixCls, "-group-wrapper-sm"), size === 'small'), _defineProperty(_classNames4, "".concat(prefixCls, "-group-wrapper-lg"), size === 'large'), _defineProperty(_classNames4, "".concat(prefixCls, "-group-wrapper-rtl"), direction === 'rtl'), _classNames4), className);
    element = /*#__PURE__*/React.createElement("div", {
      className: mergedGroupClassName,
      style: props.style
    }, /*#__PURE__*/React.createElement("div", {
      className: mergedWrapperClassName
    }, addonBeforeNode, cloneElement(element, {
      style: null
    }), addonAfterNode));
  }

  return element;
});
export default InputNumber;