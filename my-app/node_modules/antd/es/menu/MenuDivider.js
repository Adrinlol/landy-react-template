import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

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
import { Divider } from 'rc-menu';
import { ConfigContext } from '../config-provider';

var MenuDivider = function MenuDivider(_a) {
  var customizePrefixCls = _a.prefixCls,
      className = _a.className,
      dashed = _a.dashed,
      restProps = __rest(_a, ["prefixCls", "className", "dashed"]);

  var _React$useContext = React.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('menu', customizePrefixCls);
  var classString = classNames(_defineProperty({}, "".concat(prefixCls, "-item-divider-dashed"), !!dashed), className);
  return /*#__PURE__*/React.createElement(Divider, _extends({
    className: classString
  }, restProps));
};

export default MenuDivider;