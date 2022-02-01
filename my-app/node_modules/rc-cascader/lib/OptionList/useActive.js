"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var React = _interopRequireWildcard(require("react"));

var _context = _interopRequireDefault(require("../context"));

var _rcSelect = require("rc-select");

/**
 * Control the active open options path.
 */
var _default = function _default() {
  var _useBaseProps = (0, _rcSelect.useBaseProps)(),
      multiple = _useBaseProps.multiple,
      open = _useBaseProps.open;

  var _React$useContext = React.useContext(_context.default),
      values = _React$useContext.values; // Record current dropdown active options
  // This also control the open status


  var _React$useState = React.useState([]),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      activeValueCells = _React$useState2[0],
      setActiveValueCells = _React$useState2[1];

  React.useEffect(function () {
    if (open && !multiple) {
      var firstValueCells = values[0];
      setActiveValueCells(firstValueCells || []);
    }
  },
  /* eslint-disable react-hooks/exhaustive-deps */
  [open]);
  return [activeValueCells, setActiveValueCells];
};

exports.default = _default;