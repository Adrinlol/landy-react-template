"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var React = _interopRequireWildcard(require("react"));

var _MinusCircleTwoTone = _interopRequireDefault(require("@ant-design/icons-svg/lib/asn/MinusCircleTwoTone"));

var _AntdIcon = _interopRequireDefault(require("../components/AntdIcon"));

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var MinusCircleTwoTone = function MinusCircleTwoTone(props, ref) {
  return /*#__PURE__*/React.createElement(_AntdIcon.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
    ref: ref,
    icon: _MinusCircleTwoTone.default
  }));
};

MinusCircleTwoTone.displayName = 'MinusCircleTwoTone';

var _default = /*#__PURE__*/React.forwardRef(MinusCircleTwoTone);

exports.default = _default;