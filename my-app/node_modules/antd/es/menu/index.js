import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _createSuper from "@babel/runtime/helpers/esm/createSuper";

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import * as React from 'react';
import RcMenu, { ItemGroup } from 'rc-menu';
import classNames from 'classnames';
import omit from "rc-util/es/omit";
import EllipsisOutlined from "@ant-design/icons/es/icons/EllipsisOutlined";
import memoize from 'memoize-one';
import SubMenu from './SubMenu';
import Item from './MenuItem';
import { ConfigConsumer } from '../config-provider';
import devWarning from '../_util/devWarning';
import { SiderContext } from '../layout/Sider';
import collapseMotion from '../_util/motion';
import { cloneElement } from '../_util/reactNode';
import MenuContext from './MenuContext';
import MenuDivider from './MenuDivider';

var InternalMenu = /*#__PURE__*/function (_React$Component) {
  _inherits(InternalMenu, _React$Component);

  var _super = _createSuper(InternalMenu);

  function InternalMenu(props) {
    var _this;

    _classCallCheck(this, InternalMenu);

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

      var passedProps = omit(restProps, ['siderCollapsed', 'collapsedWidth']);

      var inlineCollapsed = _this.getInlineCollapsed();

      var defaultMotions = {
        horizontal: {
          motionName: "".concat(rootPrefixCls, "-slide-up")
        },
        inline: collapseMotion,
        other: {
          motionName: "".concat(rootPrefixCls, "-zoom-big")
        }
      };
      var prefixCls = getPrefixCls('menu', customizePrefixCls);
      var menuClassName = classNames("".concat(prefixCls, "-").concat(theme), className); // TODO: refactor menu with function component

      var contextValue = memoize(function (cls, collapsed, the, dir, disableMenuItemTitleTooltip) {
        return {
          prefixCls: cls,
          inlineCollapsed: collapsed || false,
          antdMenuTheme: the,
          direction: dir,
          firstLevel: true,
          disableMenuItemTitleTooltip: disableMenuItemTitleTooltip
        };
      })(prefixCls, inlineCollapsed, theme, direction, _internalDisableMenuItemTitleTooltip);
      return /*#__PURE__*/React.createElement(MenuContext.Provider, {
        value: contextValue
      }, /*#__PURE__*/React.createElement(RcMenu, _extends({
        getPopupContainer: getPopupContainer,
        overflowedIndicator: /*#__PURE__*/React.createElement(EllipsisOutlined, null),
        overflowedIndicatorPopupClassName: "".concat(prefixCls, "-").concat(theme)
      }, passedProps, {
        inlineCollapsed: inlineCollapsed,
        className: menuClassName,
        prefixCls: prefixCls,
        direction: direction,
        defaultMotions: defaultMotions,
        expandIcon: cloneElement(expandIcon, {
          className: "".concat(prefixCls, "-submenu-expand-icon")
        })
      })));
    };

    devWarning(!('inlineCollapsed' in props && props.mode !== 'inline'), 'Menu', '`inlineCollapsed` should only be used when `mode` is inline.');
    devWarning(!(props.siderCollapsed !== undefined && 'inlineCollapsed' in props), 'Menu', '`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.');
    return _this;
  }

  _createClass(InternalMenu, [{
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
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderMenu);
    }
  }]);

  return InternalMenu;
}(React.Component);

InternalMenu.defaultProps = {
  theme: 'light' // or dark

}; // We should keep this as ref-able

var Menu = /*#__PURE__*/function (_React$Component2) {
  _inherits(Menu, _React$Component2);

  var _super2 = _createSuper(Menu);

  function Menu() {
    _classCallCheck(this, Menu);

    return _super2.apply(this, arguments);
  }

  _createClass(Menu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement(SiderContext.Consumer, null, function (context) {
        return /*#__PURE__*/React.createElement(InternalMenu, _extends({}, _this2.props, context));
      });
    }
  }]);

  return Menu;
}(React.Component);

Menu.Divider = MenuDivider;
Menu.Item = Item;
Menu.SubMenu = SubMenu;
Menu.ItemGroup = ItemGroup;
export default Menu;