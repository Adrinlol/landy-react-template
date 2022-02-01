"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

var React = _interopRequireWildcard(require("react"));

var _Statistic = _interopRequireDefault(require("./Statistic"));

var _utils = require("./utils");

var _reactNode = require("../_util/reactNode");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var REFRESH_INTERVAL = 1000 / 30;

function getTime(value) {
  return new Date(value).getTime();
}

var Countdown = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Countdown, _React$Component);

  var _super = (0, _createSuper2["default"])(Countdown);

  function Countdown() {
    var _this;

    (0, _classCallCheck2["default"])(this, Countdown);
    _this = _super.apply(this, arguments);

    _this.syncTimer = function () {
      var value = _this.props.value;
      var timestamp = getTime(value);

      if (timestamp >= Date.now()) {
        _this.startTimer();
      } else {
        _this.stopTimer();
      }
    };

    _this.startTimer = function () {
      if (_this.countdownId) return;
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          value = _this$props.value;
      var timestamp = getTime(value);
      _this.countdownId = window.setInterval(function () {
        _this.forceUpdate();

        if (onChange && timestamp > Date.now()) {
          onChange(timestamp - Date.now());
        }
      }, REFRESH_INTERVAL);
    };

    _this.stopTimer = function () {
      var _this$props2 = _this.props,
          onFinish = _this$props2.onFinish,
          value = _this$props2.value;

      if (_this.countdownId) {
        clearInterval(_this.countdownId);
        _this.countdownId = undefined;
        var timestamp = getTime(value);

        if (onFinish && timestamp < Date.now()) {
          onFinish();
        }
      }
    };

    _this.formatCountdown = function (value, config) {
      var format = _this.props.format;
      return (0, _utils.formatCountdown)(value, (0, _extends2["default"])((0, _extends2["default"])({}, config), {
        format: format
      }));
    }; // Countdown do not need display the timestamp
    // eslint-disable-next-line class-methods-use-this


    _this.valueRender = function (node) {
      return (0, _reactNode.cloneElement)(node, {
        title: undefined
      });
    };

    return _this;
  }

  (0, _createClass2["default"])(Countdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.syncTimer();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.syncTimer();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopTimer();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_Statistic["default"], (0, _extends2["default"])({
        valueRender: this.valueRender
      }, this.props, {
        formatter: this.formatCountdown
      }));
    }
  }]);
  return Countdown;
}(React.Component);

Countdown.defaultProps = {
  format: 'HH:mm:ss'
};
var _default = Countdown;
exports["default"] = _default;