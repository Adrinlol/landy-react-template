import _createClass from "@babel/runtime/helpers/esm/createClass";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";

var UnreachableException = /*#__PURE__*/_createClass(function UnreachableException(value) {
  _classCallCheck(this, UnreachableException);

  this.error = new Error("unreachable case: ".concat(JSON.stringify(value)));
});

export { UnreachableException as default };