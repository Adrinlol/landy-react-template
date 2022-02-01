import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import * as React from 'react';
import classNames from 'classnames';
import isEqual from 'lodash/isEqual';
import FilterFilled from "@ant-design/icons/es/icons/FilterFilled";
import Button from '../../../button';
import Menu from '../../../menu';
import Tree from '../../../tree';
import Checkbox from '../../../checkbox';
import Radio from '../../../radio';
import Dropdown from '../../../dropdown';
import Empty from '../../../empty';
import FilterDropdownMenuWrapper from './FilterWrapper';
import FilterSearch from './FilterSearch';
import { flattenKeys } from '.';
import useSyncState from '../../../_util/hooks/useSyncState';
import { ConfigContext } from '../../../config-provider/context';

function hasSubMenu(filters) {
  return filters.some(function (_ref) {
    var children = _ref.children;
    return children;
  });
}

function searchValueMatched(searchValue, text) {
  if (typeof text === 'string' || typeof text === 'number') {
    return text === null || text === void 0 ? void 0 : text.toString().toLowerCase().includes(searchValue.trim().toLowerCase());
  }

  return false;
}

function renderFilterItems(_ref2) {
  var filters = _ref2.filters,
      prefixCls = _ref2.prefixCls,
      filteredKeys = _ref2.filteredKeys,
      filterMultiple = _ref2.filterMultiple,
      searchValue = _ref2.searchValue;
  return filters.map(function (filter, index) {
    var key = String(filter.value);

    if (filter.children) {
      return /*#__PURE__*/React.createElement(Menu.SubMenu, {
        key: key || index,
        title: filter.text,
        popupClassName: "".concat(prefixCls, "-dropdown-submenu")
      }, renderFilterItems({
        filters: filter.children,
        prefixCls: prefixCls,
        filteredKeys: filteredKeys,
        filterMultiple: filterMultiple,
        searchValue: searchValue
      }));
    }

    var Component = filterMultiple ? Checkbox : Radio;
    var item = /*#__PURE__*/React.createElement(Menu.Item, {
      key: filter.value !== undefined ? key : index
    }, /*#__PURE__*/React.createElement(Component, {
      checked: filteredKeys.includes(key)
    }), /*#__PURE__*/React.createElement("span", null, filter.text));

    if (searchValue.trim()) {
      return searchValueMatched(searchValue, filter.text) ? item : undefined;
    }

    return item;
  });
}

function FilterDropdown(props) {
  var _a;

  var tablePrefixCls = props.tablePrefixCls,
      prefixCls = props.prefixCls,
      column = props.column,
      dropdownPrefixCls = props.dropdownPrefixCls,
      columnKey = props.columnKey,
      filterMultiple = props.filterMultiple,
      _props$filterMode = props.filterMode,
      filterMode = _props$filterMode === void 0 ? 'menu' : _props$filterMode,
      _props$filterSearch = props.filterSearch,
      filterSearch = _props$filterSearch === void 0 ? false : _props$filterSearch,
      filterState = props.filterState,
      triggerFilter = props.triggerFilter,
      locale = props.locale,
      children = props.children,
      getPopupContainer = props.getPopupContainer;
  var filterDropdownVisible = column.filterDropdownVisible,
      onFilterDropdownVisibleChange = column.onFilterDropdownVisibleChange;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      visible = _React$useState2[0],
      setVisible = _React$useState2[1];

  var filtered = !!(filterState && (((_a = filterState.filteredKeys) === null || _a === void 0 ? void 0 : _a.length) || filterState.forceFiltered));

  var triggerVisible = function triggerVisible(newVisible) {
    setVisible(newVisible);
    onFilterDropdownVisibleChange === null || onFilterDropdownVisibleChange === void 0 ? void 0 : onFilterDropdownVisibleChange(newVisible);
  };

  var mergedVisible = typeof filterDropdownVisible === 'boolean' ? filterDropdownVisible : visible; // ===================== Select Keys =====================

  var propFilteredKeys = filterState === null || filterState === void 0 ? void 0 : filterState.filteredKeys;

  var _useSyncState = useSyncState(propFilteredKeys || []),
      _useSyncState2 = _slicedToArray(_useSyncState, 2),
      getFilteredKeysSync = _useSyncState2[0],
      setFilteredKeysSync = _useSyncState2[1];

  var onSelectKeys = function onSelectKeys(_ref3) {
    var selectedKeys = _ref3.selectedKeys;
    setFilteredKeysSync(selectedKeys);
  };

  var onCheck = function onCheck(keys, _ref4) {
    var node = _ref4.node,
        checked = _ref4.checked;

    if (!filterMultiple) {
      onSelectKeys({
        selectedKeys: checked && node.key ? [node.key] : []
      });
    } else {
      onSelectKeys({
        selectedKeys: keys
      });
    }
  };

  React.useEffect(function () {
    if (!visible) {
      return;
    }

    onSelectKeys({
      selectedKeys: propFilteredKeys || []
    });
  }, [propFilteredKeys]); // ====================== Open Keys ======================

  var _React$useState3 = React.useState([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      openKeys = _React$useState4[0],
      setOpenKeys = _React$useState4[1];

  var openRef = React.useRef();

  var onOpenChange = function onOpenChange(keys) {
    openRef.current = window.setTimeout(function () {
      setOpenKeys(keys);
    });
  };

  var onMenuClick = function onMenuClick() {
    window.clearTimeout(openRef.current);
  };

  React.useEffect(function () {
    return function () {
      window.clearTimeout(openRef.current);
    };
  }, []); // search in tree mode column filter

  var _React$useState5 = React.useState(''),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      searchValue = _React$useState6[0],
      setSearchValue = _React$useState6[1];

  var onSearch = function onSearch(e) {
    var value = e.target.value;
    setSearchValue(value);
  }; // clear search value after close filter dropdown


  React.useEffect(function () {
    if (!visible) {
      setSearchValue('');
    }
  }, [visible]); // ======================= Submit ========================

  var internalTriggerFilter = function internalTriggerFilter(keys) {
    var mergedKeys = keys && keys.length ? keys : null;

    if (mergedKeys === null && (!filterState || !filterState.filteredKeys)) {
      return null;
    }

    if (isEqual(mergedKeys, filterState === null || filterState === void 0 ? void 0 : filterState.filteredKeys)) {
      return null;
    }

    triggerFilter({
      column: column,
      key: columnKey,
      filteredKeys: mergedKeys
    });
  };

  var onConfirm = function onConfirm() {
    triggerVisible(false);
    internalTriggerFilter(getFilteredKeysSync());
  };

  var onReset = function onReset() {
    setSearchValue('');
    setFilteredKeysSync([]);
  };

  var doFilter = function doFilter() {
    var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      closeDropdown: true
    },
        closeDropdown = _ref5.closeDropdown;

    if (closeDropdown) {
      triggerVisible(false);
    }

    internalTriggerFilter(getFilteredKeysSync());
  };

  var onVisibleChange = function onVisibleChange(newVisible) {
    if (newVisible && propFilteredKeys !== undefined) {
      // Sync filteredKeys on appear in controlled mode (propFilteredKeys !== undefiend)
      setFilteredKeysSync(propFilteredKeys || []);
    }

    triggerVisible(newVisible); // Default will filter when closed

    if (!newVisible && !column.filterDropdown) {
      onConfirm();
    }
  }; // ======================== Style ========================


  var dropdownMenuClass = classNames(_defineProperty({}, "".concat(dropdownPrefixCls, "-menu-without-submenu"), !hasSubMenu(column.filters || [])));

  var onCheckAll = function onCheckAll(e) {
    if (e.target.checked) {
      var allFilterKeys = flattenKeys(column === null || column === void 0 ? void 0 : column.filters).map(function (key) {
        return String(key);
      });
      setFilteredKeysSync(allFilterKeys);
    } else {
      setFilteredKeysSync([]);
    }
  };

  var getTreeData = function getTreeData(_ref6) {
    var filters = _ref6.filters;
    return (filters || []).map(function (filter, index) {
      var key = String(filter.value);
      var item = {
        title: filter.text,
        key: filter.value !== undefined ? key : index
      };

      if (filter.children) {
        item.children = getTreeData({
          filters: filter.children
        });
      }

      return item;
    });
  };

  var dropdownContent;

  if (typeof column.filterDropdown === 'function') {
    dropdownContent = column.filterDropdown({
      prefixCls: "".concat(dropdownPrefixCls, "-custom"),
      setSelectedKeys: function setSelectedKeys(selectedKeys) {
        return onSelectKeys({
          selectedKeys: selectedKeys
        });
      },
      selectedKeys: getFilteredKeysSync(),
      confirm: doFilter,
      clearFilters: onReset,
      filters: column.filters,
      visible: mergedVisible
    });
  } else if (column.filterDropdown) {
    dropdownContent = column.filterDropdown;
  } else {
    var selectedKeys = getFilteredKeysSync() || [];

    var getFilterComponent = function getFilterComponent() {
      if ((column.filters || []).length === 0) {
        return /*#__PURE__*/React.createElement(Empty, {
          image: Empty.PRESENTED_IMAGE_SIMPLE,
          description: locale.filterEmptyText,
          imageStyle: {
            height: 24
          },
          style: {
            margin: 0,
            padding: '16px 0'
          }
        });
      }

      if (filterMode === 'tree') {
        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FilterSearch, {
          filterSearch: filterSearch,
          value: searchValue,
          onChange: onSearch,
          tablePrefixCls: tablePrefixCls,
          locale: locale
        }), /*#__PURE__*/React.createElement("div", {
          className: "".concat(tablePrefixCls, "-filter-dropdown-tree")
        }, filterMultiple ? /*#__PURE__*/React.createElement(Checkbox, {
          className: "".concat(tablePrefixCls, "-filter-dropdown-checkall"),
          onChange: onCheckAll
        }, locale.filterCheckall) : null, /*#__PURE__*/React.createElement(Tree, {
          checkable: true,
          selectable: false,
          blockNode: true,
          multiple: filterMultiple,
          checkStrictly: !filterMultiple,
          className: "".concat(dropdownPrefixCls, "-menu"),
          onCheck: onCheck,
          checkedKeys: selectedKeys,
          selectedKeys: selectedKeys,
          showIcon: false,
          treeData: getTreeData({
            filters: column.filters
          }),
          autoExpandParent: true,
          defaultExpandAll: true,
          filterTreeNode: searchValue.trim() ? function (node) {
            return searchValueMatched(searchValue, node.title);
          } : undefined
        })));
      }

      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FilterSearch, {
        filterSearch: filterSearch,
        value: searchValue,
        onChange: onSearch,
        tablePrefixCls: tablePrefixCls,
        locale: locale
      }), /*#__PURE__*/React.createElement(Menu, {
        multiple: filterMultiple,
        prefixCls: "".concat(dropdownPrefixCls, "-menu"),
        className: dropdownMenuClass,
        onClick: onMenuClick,
        onSelect: onSelectKeys,
        onDeselect: onSelectKeys,
        selectedKeys: selectedKeys,
        getPopupContainer: getPopupContainer,
        openKeys: openKeys,
        onOpenChange: onOpenChange
      }, renderFilterItems({
        filters: column.filters || [],
        prefixCls: prefixCls,
        filteredKeys: getFilteredKeysSync(),
        filterMultiple: filterMultiple,
        searchValue: searchValue
      })));
    };

    dropdownContent = /*#__PURE__*/React.createElement(React.Fragment, null, getFilterComponent(), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-dropdown-btns")
    }, /*#__PURE__*/React.createElement(Button, {
      type: "link",
      size: "small",
      disabled: selectedKeys.length === 0,
      onClick: onReset
    }, locale.filterReset), /*#__PURE__*/React.createElement(Button, {
      type: "primary",
      size: "small",
      onClick: onConfirm
    }, locale.filterConfirm)));
  }

  var menu = /*#__PURE__*/React.createElement(FilterDropdownMenuWrapper, {
    className: "".concat(prefixCls, "-dropdown")
  }, dropdownContent);
  var filterIcon;

  if (typeof column.filterIcon === 'function') {
    filterIcon = column.filterIcon(filtered);
  } else if (column.filterIcon) {
    filterIcon = column.filterIcon;
  } else {
    filterIcon = /*#__PURE__*/React.createElement(FilterFilled, null);
  }

  var _React$useContext = React.useContext(ConfigContext),
      direction = _React$useContext.direction;

  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-column")
  }, /*#__PURE__*/React.createElement("span", {
    className: "".concat(tablePrefixCls, "-column-title")
  }, children), /*#__PURE__*/React.createElement(Dropdown, {
    overlay: menu,
    trigger: ['click'],
    visible: mergedVisible,
    onVisibleChange: onVisibleChange,
    getPopupContainer: getPopupContainer,
    placement: direction === 'rtl' ? 'bottomLeft' : 'bottomRight'
  }, /*#__PURE__*/React.createElement("span", {
    role: "button",
    tabIndex: -1,
    className: classNames("".concat(prefixCls, "-trigger"), {
      active: filtered
    }),
    onClick: function onClick(e) {
      e.stopPropagation();
    }
  }, filterIcon)));
}

export default FilterDropdown;