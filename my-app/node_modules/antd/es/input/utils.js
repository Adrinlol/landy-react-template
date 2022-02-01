import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import classNames from 'classnames';
export function getInputClassName(prefixCls, bordered, size, disabled, direction) {
  var _classNames;

  return classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _defineProperty(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _defineProperty(_classNames, "".concat(prefixCls, "-borderless"), !bordered), _classNames));
}
export function hasPrefixSuffix(props) {
  return !!(props.prefix || props.suffix || props.allowClear);
}