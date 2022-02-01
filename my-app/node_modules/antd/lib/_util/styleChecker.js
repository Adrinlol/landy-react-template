"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectFlexGapSupported = exports.canUseDocElement = void 0;
Object.defineProperty(exports, "isStyleSupport", {
  enumerable: true,
  get: function get() {
    return _styleChecker.isStyleSupport;
  }
});

var _canUseDom = _interopRequireDefault(require("rc-util/lib/Dom/canUseDom"));

var _styleChecker = require("rc-util/lib/Dom/styleChecker");

var canUseDocElement = function canUseDocElement() {
  return (0, _canUseDom["default"])() && window.document.documentElement;
};

exports.canUseDocElement = canUseDocElement;
var flexGapSupported;

var detectFlexGapSupported = function detectFlexGapSupported() {
  if (!canUseDocElement()) {
    return false;
  }

  if (flexGapSupported !== undefined) {
    return flexGapSupported;
  } // create flex container with row-gap set


  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px'; // create two, elements inside it

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div')); // append to the DOM (needed to obtain scrollHeight)

  document.body.appendChild(flex);
  flexGapSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap

  document.body.removeChild(flex);
  return flexGapSupported;
};

exports.detectFlexGapSupported = detectFlexGapSupported;