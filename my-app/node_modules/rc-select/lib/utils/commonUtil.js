"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isClient = exports.isBrowserClient = void 0;
exports.toArray = toArray;

function toArray(value) {
  if (Array.isArray(value)) {
    return value;
  }

  return value !== undefined ? [value] : [];
}

var isClient = typeof window !== 'undefined' && window.document && window.document.documentElement;
/** Is client side and not jsdom */

exports.isClient = isClient;
var isBrowserClient = process.env.NODE_ENV !== 'test' && isClient;
exports.isBrowserClient = isBrowserClient;