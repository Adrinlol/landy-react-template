import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import * as React from 'react';
import toArray from "rc-util/es/Children/toArray";

function cuttable(node) {
  var type = _typeof(node);

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
      _React$useState2 = _slicedToArray(_React$useState, 2),
      cutLength = _React$useState2[0],
      setCutLength = _React$useState2[1];

  var _React$useState3 = React.useState(NONE),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      walkingState = _React$useState4[0],
      setWalkingState = _React$useState4[1];

  var _cutLength = _slicedToArray(cutLength, 3),
      startLen = _cutLength[0],
      midLen = _cutLength[1],
      endLen = _cutLength[2];

  var _React$useState5 = React.useState(0),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      singleRowHeight = _React$useState6[0],
      setSingleRowHeight = _React$useState6[1];

  var singleRowRef = React.useRef(null);
  var midRowRef = React.useRef(null);
  var nodeList = React.useMemo(function () {
    return toArray(text);
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
      style: _extends({
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

export default Ellipsis;