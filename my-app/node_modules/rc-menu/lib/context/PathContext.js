"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PathUserContext = exports.PathTrackerContext = exports.PathRegisterContext = void 0;
exports.useFullPath = useFullPath;
exports.useMeasure = useMeasure;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var React = _interopRequireWildcard(require("react"));

var EmptyList = [];
var PathRegisterContext = /*#__PURE__*/React.createContext(null);
exports.PathRegisterContext = PathRegisterContext;

function useMeasure() {
  return React.useContext(PathRegisterContext);
} // ========================= Path Tracker ==========================


var PathTrackerContext = /*#__PURE__*/React.createContext(EmptyList);
exports.PathTrackerContext = PathTrackerContext;

function useFullPath(eventKey) {
  var parentKeyPath = React.useContext(PathTrackerContext);
  return React.useMemo(function () {
    return eventKey !== undefined ? [].concat((0, _toConsumableArray2.default)(parentKeyPath), [eventKey]) : parentKeyPath;
  }, [parentKeyPath, eventKey]);
}

var PathUserContext = /*#__PURE__*/React.createContext(null);
exports.PathUserContext = PathUserContext;