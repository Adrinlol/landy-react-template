"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = confirm;
exports.modalGlobalConfig = modalGlobalConfig;
exports.withConfirm = withConfirm;
exports.withError = withError;
exports.withInfo = withInfo;
exports.withSuccess = withSuccess;
exports.withWarn = withWarn;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var ReactDOM = _interopRequireWildcard(require("react-dom"));

var _InfoCircleOutlined = _interopRequireDefault(require("@ant-design/icons/InfoCircleOutlined"));

var _CheckCircleOutlined = _interopRequireDefault(require("@ant-design/icons/CheckCircleOutlined"));

var _CloseCircleOutlined = _interopRequireDefault(require("@ant-design/icons/CloseCircleOutlined"));

var _ExclamationCircleOutlined = _interopRequireDefault(require("@ant-design/icons/ExclamationCircleOutlined"));

var _locale = require("./locale");

var _ConfirmDialog = _interopRequireDefault(require("./ConfirmDialog"));

var _configProvider = require("../config-provider");

var _devWarning = _interopRequireDefault(require("../_util/devWarning"));

var _destroyFns = _interopRequireDefault(require("./destroyFns"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var defaultRootPrefixCls = '';

function getRootPrefixCls() {
  return defaultRootPrefixCls;
}

function confirm(config) {
  var container = document.createDocumentFragment(); // eslint-disable-next-line @typescript-eslint/no-use-before-define

  var currentConfig = (0, _extends2["default"])((0, _extends2["default"])({}, config), {
    close: close,
    visible: true
  });

  function destroy() {
    ReactDOM.unmountComponentAtNode(container);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var triggerCancel = args.some(function (param) {
      return param && param.triggerCancel;
    });

    if (config.onCancel && triggerCancel) {
      config.onCancel.apply(config, args);
    }

    for (var i = 0; i < _destroyFns["default"].length; i++) {
      var fn = _destroyFns["default"][i]; // eslint-disable-next-line @typescript-eslint/no-use-before-define

      if (fn === close) {
        _destroyFns["default"].splice(i, 1);

        break;
      }
    }
  }

  function render(_a) {
    var okText = _a.okText,
        cancelText = _a.cancelText,
        customizePrefixCls = _a.prefixCls,
        props = __rest(_a, ["okText", "cancelText", "prefixCls"]);
    /**
     * https://github.com/ant-design/ant-design/issues/23623
     *
     * Sync render blocks React event. Let's make this async.
     */


    setTimeout(function () {
      var runtimeLocale = (0, _locale.getConfirmLocale)();

      var _globalConfig = (0, _configProvider.globalConfig)(),
          getPrefixCls = _globalConfig.getPrefixCls,
          getIconPrefixCls = _globalConfig.getIconPrefixCls; // because Modal.config  set rootPrefixCls, which is different from other components


      var rootPrefixCls = getPrefixCls(undefined, getRootPrefixCls());
      var prefixCls = customizePrefixCls || "".concat(rootPrefixCls, "-modal");
      var iconPrefixCls = getIconPrefixCls();
      ReactDOM.render( /*#__PURE__*/React.createElement(_ConfirmDialog["default"], (0, _extends2["default"])({}, props, {
        prefixCls: prefixCls,
        rootPrefixCls: rootPrefixCls,
        iconPrefixCls: iconPrefixCls,
        okText: okText || (props.okCancel ? runtimeLocale.okText : runtimeLocale.justOkText),
        cancelText: cancelText || runtimeLocale.cancelText
      })), container);
    });
  }

  function close() {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    currentConfig = (0, _extends2["default"])((0, _extends2["default"])({}, currentConfig), {
      visible: false,
      afterClose: function afterClose() {
        if (typeof config.afterClose === 'function') {
          config.afterClose();
        }

        destroy.apply(_this, args);
      }
    });
    render(currentConfig);
  }

  function update(configUpdate) {
    if (typeof configUpdate === 'function') {
      currentConfig = configUpdate(currentConfig);
    } else {
      currentConfig = (0, _extends2["default"])((0, _extends2["default"])({}, currentConfig), configUpdate);
    }

    render(currentConfig);
  }

  render(currentConfig);

  _destroyFns["default"].push(close);

  return {
    destroy: close,
    update: update
  };
}

function withWarn(props) {
  return (0, _extends2["default"])((0, _extends2["default"])({
    icon: /*#__PURE__*/React.createElement(_ExclamationCircleOutlined["default"], null),
    okCancel: false
  }, props), {
    type: 'warning'
  });
}

function withInfo(props) {
  return (0, _extends2["default"])((0, _extends2["default"])({
    icon: /*#__PURE__*/React.createElement(_InfoCircleOutlined["default"], null),
    okCancel: false
  }, props), {
    type: 'info'
  });
}

function withSuccess(props) {
  return (0, _extends2["default"])((0, _extends2["default"])({
    icon: /*#__PURE__*/React.createElement(_CheckCircleOutlined["default"], null),
    okCancel: false
  }, props), {
    type: 'success'
  });
}

function withError(props) {
  return (0, _extends2["default"])((0, _extends2["default"])({
    icon: /*#__PURE__*/React.createElement(_CloseCircleOutlined["default"], null),
    okCancel: false
  }, props), {
    type: 'error'
  });
}

function withConfirm(props) {
  return (0, _extends2["default"])((0, _extends2["default"])({
    icon: /*#__PURE__*/React.createElement(_ExclamationCircleOutlined["default"], null),
    okCancel: true
  }, props), {
    type: 'confirm'
  });
}

function modalGlobalConfig(_ref) {
  var rootPrefixCls = _ref.rootPrefixCls;
  (0, _devWarning["default"])(false, 'Modal', 'Modal.config is deprecated. Please use ConfigProvider.config instead.');
  defaultRootPrefixCls = rootPrefixCls;
}