"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var React = _interopRequireWildcard(require("react"));

var _DownCircleTwoTone = _interopRequireDefault(require("@ant-design/icons-svg/lib/asn/DownCircleTwoTone"));

var _AntdIcon = _interopRequireDefault(require("../components/AntdIcon"));

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var DownCircleTwoTone = function DownCircleTwoTone(props, ref) {
  return /*#__PURE__*/React.createElement(_AntdIcon.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
    ref: ref,
    icon: _DownCircleTwoTone.default
  }));
};

DownCircleTwoTone.displayName = 'DownCircleTwoTone';

var _default = /*#__PURE__*/React.forwardRef(DownCircleTwoTone);

exports.default = _default;