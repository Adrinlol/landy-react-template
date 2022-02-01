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

var _rcMenu = _interopRequireWildcard(require("rc-menu"));

var _classnames = _interopRequireDefault(require("classnames"));

var _omit = _interopRequireDefault(require("rc-util/lib/omit"));

var _EllipsisOutlined = _interopRequireDefault(require("@ant-design/icons/EllipsisOutlined"));

var _memoizeOne = _interopRequireDefault(require("memoize-one"));

var _SubMenu = _interopRequireDefault(require("./SubMenu"));

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

var _configProvider = require("../config-provider");

var _devWarning = _interopRequireDefault(require("../_util/devWarning"));

var _Sider = require("../layout/Sider");

var _motion = _interopRequireDefault(require("../_util/motion"));

var _reactNode = require("../_util/reactNode");

var _MenuContext = _interopRequireDefault(require("./MenuContext"));

var _MenuDivider = _interopRequireDefault(require("./MenuDivider"));

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

var InternalMenu = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(InternalMenu, _React$Component);

  var _super = (0, _createSuper2["default"])(InternalMenu);

  function InternalMenu(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, InternalMenu);
    _this = _super.call(this, props);

    _this.renderMenu = function (_ref) {
      var getPopupContainer = _ref.getPopupContainer,
          getPrefixCls = _ref.getPrefixCls,
          direction = _ref.direction;
      var rootPrefixCls = getPrefixCls();

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          className = _a.className,
          theme = _a.theme,
          expandIcon = _a.expandIcon,
          _internalDisableMenuItemTitleTooltip = _a._internalDisableMenuItemTitleTooltip,
          restProps = __rest(_a, ["prefixCls", "className", "theme", "expandIcon", "_internalDisableMenuItemTitleTooltip"]);

      var passedProps = (0, _omit["default"])(restProps, ['siderCollapsed', 'collapsedWidth']);

      var inlineCollapsed = _this.getInlineCollapsed();

      var defaultMotions = {
        horizontal: {
          motionName: "".concat(rootPrefixCls, "-slide-up")
        },
        inline: _motion["default"],
        other: {
          motionName: "".concat(rootPrefixCls, "-zoom-big")
        }
      };
      var prefixCls = getPrefixCls('menu', customizePrefixCls);
      var menuClassName = (0, _classnames["default"])("".concat(prefixCls, "-").concat(theme), className); // TODO: refactor menu with function component

      var contextValue = (0, _memoizeOne["default"])(function (cls, collapsed, the, dir, disableMenuItemTitleTooltip) {
        return {
          prefixCls: cls,
          inlineCollapsed: collapsed || false,
          antdMenuTheme: the,
          direction: dir,
          firstLevel: true,
          disableMenuItemTitleTooltip: disableMenuItemTitleTooltip
        };
      })(prefixCls, inlineCollapsed, theme, direction, _internalDisableMenuItemTitleTooltip);
      return /*#__PURE__*/React.createElement(_MenuContext["default"].Provider, {
        value: contextValue
      }, /*#__PURE__*/React.createElement(_rcMenu["default"], (0, _extends2["default"])({
        getPopupContainer: getPopupContainer,
        overflowedIndicator: /*#__PURE__*/React.createElement(_EllipsisOutlined["default"], null),
        overflowedIndicatorPopupClassName: "".concat(prefixCls, "-").concat(theme)
      }, passedProps, {
        inlineCollapsed: inlineCollapsed,
        className: menuClassName,
        prefixCls: prefixCls,
        direction: direction,
        defaultMotions: defaultMotions,
        expandIcon: (0, _reactNode.cloneElement)(expandIcon, {
          className: "".concat(prefixCls, "-submenu-expand-icon")
        })
      })));
    };

    (0, _devWarning["default"])(!('inlineCollapsed' in props && props.mode !== 'inline'), 'Menu', '`inlineCollapsed` should only be used when `mode` is inline.');
    (0, _devWarning["default"])(!(props.siderCollapsed !== undefined && 'inlineCollapsed' in props), 'Menu', '`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.');
    return _this;
  }

  (0, _createClass2["default"])(InternalMenu, [{
    key: "getInlineCollapsed",
    value: function getInlineCollapsed() {
      var _this$props = this.props,
          inlineCollapsed = _this$props.inlineCollapsed,
          siderCollapsed = _this$props.siderCollapsed;

      if (siderCollapsed !== undefined) {
        return siderCollapsed;
      }

      return inlineCollapsed;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderMenu);
    }
  }]);
  return InternalMenu;
}(React.Component);

InternalMenu.defaultProps = {
  theme: 'light' // or dark

}; // We should keep this as ref-able

var Menu = /*#__PURE__*/function (_React$Component2) {
  (0, _inherits2["default"])(Menu, _React$Component2);

  var _super2 = (0, _createSuper2["default"])(Menu);

  function Menu() {
    (0, _classCallCheck2["default"])(this, Menu);
    return _super2.apply(this, arguments);
  }

  (0, _createClass2["default"])(Menu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement(_Sider.SiderContext.Consumer, null, function (context) {
        return /*#__PURE__*/React.createElement(InternalMenu, (0, _extends2["default"])({}, _this2.props, context));
      });
    }
  }]);
  return Menu;
}(React.Component);

Menu.Divider = _MenuDivider["default"];
Menu.Item = _MenuItem["default"];
Menu.SubMenu = _SubMenu["default"];
Menu.ItemGroup = _rcMenu.ItemGroup;
var _default = Menu;
exports["default"] = _default;