"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useUUID;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var React = _interopRequireWildcard(require("react"));

var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));

var uniquePrefix = Math.random().toFixed(5).toString().slice(2);
var internalId = 0;

function useUUID(id) {
  var _useMergedState = (0, _useMergedState3.default)(id, {
    value: id
  }),
      _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
      uuid = _useMergedState2[0],
      setUUID = _useMergedState2[1];

  React.useEffect(function () {
    internalId += 1;
    var newId = process.env.NODE_ENV === 'test' ? 'test' : "".concat(uniquePrefix, "-").concat(internalId);
    setUUID("rc-menu-uuid-".concat(newId));
  }, []);
  return uuid;
}