"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _sr_RS = _interopRequireDefault(require("rc-picker/lib/locale/sr_RS"));

var _sr_RS2 = _interopRequireDefault(require("../../time-picker/locale/sr_RS"));

// Merge into a locale object
var locale = {
  lang: (0, _extends2["default"])({
    placeholder: 'Izaberi datum',
    yearPlaceholder: 'Izaberi godinu',
    quarterPlaceholder: 'Izaberi tromesečje',
    monthPlaceholder: 'Izaberi mesec',
    weekPlaceholder: 'Izaberi sedmicu',
    rangePlaceholder: ['Datum početka', 'Datum završetka'],
    rangeYearPlaceholder: ['Godina početka', 'Godina završetka'],
    rangeMonthPlaceholder: ['Mesec početka', 'Mesec završetka'],
    rangeWeekPlaceholder: ['Sedmica početka', 'Sedmica završetka']
  }, _sr_RS["default"]),
  timePickerLocale: (0, _extends2["default"])({}, _sr_RS2["default"])
}; // All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

var _default = locale;
exports["default"] = _default;