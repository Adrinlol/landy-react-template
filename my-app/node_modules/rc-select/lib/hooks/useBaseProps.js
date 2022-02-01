"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseSelectContext = void 0;
exports.default = useBaseProps;

var React = _interopRequireWildcard(require("react"));

/**
 * BaseSelect provide some parsed data into context.
 * You can use this hooks to get them.
 */
var BaseSelectContext = /*#__PURE__*/React.createContext(null);
exports.BaseSelectContext = BaseSelectContext;

function useBaseProps() {
  return React.useContext(BaseSelectContext);
}