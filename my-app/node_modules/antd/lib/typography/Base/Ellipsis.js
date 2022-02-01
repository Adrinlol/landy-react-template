"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var React = _interopRequireWildcard(require("react"));

var _toArray = _interopRequireDefault(require("rc-util/lib/Children/toArray"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function cuttable(node) {
  var type = (0, _typeof2["default"])(node);
  return type === 'string' || type === 'number';
}

function getNodesLen(nodeList) {
  var totalLen = 0;
  nodeList.forEach(function (node) {
    if (cuttable(node)) {
      totalLen += String(node).length;
    } else {
      totalLen += 1;
    }
  });
  return totalLen;
}

function sliceNodes(nodeList, len) {
  var currLen = 0;
  var currentNodeList = [];

  for (var i = 0; i < nodeList.length; i += 1) {
    // Match to return
    if (currLen === len) {
      return currentNodeList;
    }

    var node = nodeList[i];
    var canCut = cuttable(node);
    var nodeLen = canCut ? String(node).length : 1;
    var nextLen = currLen + nodeLen; // Exceed but current not which means we need cut this
    // This will not happen on validate ReactElement

    if (nextLen > len) {
      var restLen = len - currLen;
      currentNodeList.push(String(node).slice(0, restLen));
      return currentNodeList;
    }

    currentNodeList.push(node);
    currLen = nextLen;
  }

  return nodeList;
}

var NONE = 0;
var PREPARE = 1;
var WALKING = 2;
var DONE_WITH_ELLIPSIS = 3;
var DONE_WITHOUT_ELLIPSIS = 4;

var Ellipsis = function Ellipsis(_ref) {
  var enabledMeasure = _ref.enabledMeasure,
      children = _ref.children,
      text = _ref.text,
      width = _ref.width,
      rows = _ref.rows,
      onEllipsis = _ref.onEllipsis;

  var _React$useState = React.useState([0, 0, 0]),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      cutLength = _React$useState2[0],
      setCutLength = _React$useState2[1];

  var _React$useState3 = React.useState(NONE),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
      walkingState = _React$useState4[0],
      setWalkingState = _React$useState4[1];

  var _cutLength = (0, _slicedToArray2["default"])(cutLength, 3),
      startLen = _cutLength[0],
      midLen = _cutLength[1],
      endLen = _cutLength[2];

  var _React$useState5 = React.useState(0),
      _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
      singleRowHeight = _React$useState6[0],
      setSingleRowHeight = _React$useState6[1];

  var singleRowRef = React.useRef(null);
  var midRowRef = React.useRef(null);
  var nodeList = React.useMemo(function () {
    return (0, _toArray["default"])(text);
  }, [text]);
  var totalLen = React.useMemo(function () {
    return getNodesLen(nodeList);
  }, [nodeList]);
  var mergedChildren = React.useMemo(function () {
    if (!enabledMeasure || walkingState !== DONE_WITH_ELLIPSIS) {
      return children(nodeList, false);
    }

    return children(sliceNodes(nodeList, midLen), midLen < totalLen);
  }, [enabledMeasure, walkingState, children, nodeList, midLen, totalLen]); // ======================== Walk ========================

  React.useLayoutEffect(function () {
    if (enabledMeasure && width && totalLen) {
      setWalkingState(PREPARE);
      setCutLength([0, Math.ceil(totalLen / 2), totalLen]);
    }
  }, [enabledMeasure, width, text, totalLen, rows]);
  React.useLayoutEffect(function () {
    var _a;

    if (walkingState === PREPARE) {
      setSingleRowHeight(((_a = singleRowRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0);
    }
  }, [walkingState]);
  React.useLayoutEffect(function () {
    var _a, _b;

    if (singleRowHeight) {
      if (walkingState === PREPARE) {
        // Ignore if position is enough
        var midHeight = ((_a = midRowRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
        var maxHeight = rows * singleRowHeight;

        if (midHeight <= maxHeight) {
          setWalkingState(DONE_WITHOUT_ELLIPSIS);
          onEllipsis(false);
        } else {
          setWalkingState(WALKING);
        }
      } else if (walkingState === WALKING) {
        if (startLen !== endLen) {
          var _midHeight = ((_b = midRowRef.current) === null || _b === void 0 ? void 0 : _b.offsetHeight) || 0;

          var _maxHeight = rows * singleRowHeight;

          var nextStartLen = startLen;
          var nextEndLen = endLen; // We reach the last round

          if (startLen === endLen - 1) {
            nextEndLen = startLen;
          } else if (_midHeight <= _maxHeight) {
            nextStartLen = midLen;
          } else {
            nextEndLen = midLen;
          }

          var nextMidLen = Math.ceil((nextStartLen + nextEndLen) / 2);
          setCutLength([nextStartLen, nextMidLen, nextEndLen]);
        } else {
          setWalkingState(DONE_WITH_ELLIPSIS);
          onEllipsis(true);
        }
      }
    }
  }, [walkingState, startLen, endLen, rows, singleRowHeight]); // ======================= Render =======================

  var measureStyle = {
    width: width,
    whiteSpace: 'normal',
    margin: 0,
    padding: 0
  };

  var renderMeasure = function renderMeasure(content, ref, style) {
    return /*#__PURE__*/React.createElement("span", {
      "aria-hidden": true,
      ref: ref,
      style: (0, _extends2["default"])({
        position: 'fixed',
        display: 'block',
        left: 0,
        top: 0,
        zIndex: -9999,
        visibility: 'hidden',
        pointerEvents: 'none'
      }, style)
    }, content);
  };

  var renderMeasureSlice = function renderMeasureSlice(len, ref) {
    var sliceNodeList = sliceNodes(nodeList, len);
    return renderMeasure(children(sliceNodeList, true), ref, measureStyle);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, mergedChildren, enabledMeasure && walkingState !== DONE_WITH_ELLIPSIS && walkingState !== DONE_WITHOUT_ELLIPSIS && /*#__PURE__*/React.createElement(React.Fragment, null, renderMeasure('lg', singleRowRef, {
    width: 9999
  }), walkingState === PREPARE ? renderMeasure(children(nodeList, false), midRowRef, measureStyle) : renderMeasureSlice(midLen, midRowRef)));
};

if (process.env.NODE_ENV !== 'production') {
  Ellipsis.displayName = 'Ellipsis';
}

var _default = Ellipsis;
exports["default"] = _default;