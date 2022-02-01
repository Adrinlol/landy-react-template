import Menu, { MenuProps } from './Menu';
import MenuItem, { MenuItemProps } from './MenuItem';
import SubMenu, { SubMenuProps } from './SubMenu';
import MenuItemGroup, { MenuItemGroupProps } from './MenuItemGroup';
import { useFullPath as useOriginFullPath } from './context/PathContext';
import Divider from './Divider';
/** @private Only used for antd internal. Do not use in your production. */
declare const useFullPath: typeof useOriginFullPath;
export { SubMenu, MenuItem as Item, MenuItem, MenuItemGroup, MenuItemGroup as ItemGroup, Divider, MenuProps, SubMenuProps, MenuItemProps, MenuItemGroupProps, useFullPath, };
declare type MenuType = typeof Menu & {
    Item: typeof MenuItem;
    SubMenu: typeof SubMenu;
    ItemGroup: typeof MenuItemGroup;
    Divider: typeof Divider;
};
declare const ExportMenu: MenuType;
export default ExportMenu;
