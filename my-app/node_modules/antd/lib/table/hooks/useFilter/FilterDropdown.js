"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _FilterFilled = _interopRequireDefault(require("@ant-design/icons/FilterFilled"));

var _button = _interopRequireDefault(require("../../../button"));

var _menu = _interopRequireDefault(require("../../../menu"));

var _tree = _interopRequireDefault(require("../../../tree"));

var _checkbox = _interopRequireDefault(require("../../../checkbox"));

var _radio = _interopRequireDefault(require("../../../radio"));

var _dropdown = _interopRequireDefault(require("../../../dropdown"));

var _empty = _interopRequireDefault(require("../../../empty"));

var _FilterWrapper = _interopRequireDefault(require("./FilterWrapper"));

var _FilterSearch = _interopRequireDefault(require("./FilterSearch"));

var _ = require(".");

var _useSyncState3 = _interopRequireDefault(require("../../../_util/hooks/useSyncState"));

var _context = require("../../../config-provider/context");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
      return /*#__PURE__*/React.createElement(_menu["default"].SubMenu, {
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

    var Component = filterMultiple ? _checkbox["default"] : _radio["default"];
    var item = /*#__PURE__*/React.createElement(_menu["default"].Item, {
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
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      visible = _React$useState2[0],
      setVisible = _React$useState2[1];

  var filtered = !!(filterState && (((_a = filterState.filteredKeys) === null || _a === void 0 ? void 0 : _a.length) || filterState.forceFiltered));

  var triggerVisible = function triggerVisible(newVisible) {
    setVisible(newVisible);
    onFilterDropdownVisibleChange === null || onFilterDropdownVisibleChange === void 0 ? void 0 : onFilterDropdownVisibleChange(newVisible);
  };

  var mergedVisible = typeof filterDropdownVisible === 'boolean' ? filterDropdownVisible : visible; // ===================== Select Keys =====================

  var propFilteredKeys = filterState === null || filterState === void 0 ? void 0 : filterState.filteredKeys;

  var _useSyncState = (0, _useSyncState3["default"])(propFilteredKeys || []),
      _useSyncState2 = (0, _slicedToArray2["default"])(_useSyncState, 2),
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
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
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
      _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
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

    if ((0, _isEqual["default"])(mergedKeys, filterState === null || filterState === void 0 ? void 0 : filterState.filteredKeys)) {
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


  var dropdownMenuClass = (0, _classnames["default"])((0, _defineProperty2["default"])({}, "".concat(dropdownPrefixCls, "-menu-without-submenu"), !hasSubMenu(column.filters || [])));

  var onCheckAll = function onCheckAll(e) {
    if (e.target.checked) {
      var allFilterKeys = (0, _.flattenKeys)(column === null || column === void 0 ? void 0 : column.filters).map(function (key) {
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
        return /*#__PURE__*/React.createElement(_empty["default"], {
          image: _empty["default"].PRESENTED_IMAGE_SIMPLE,
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
        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_FilterSearch["default"], {
          filterSearch: filterSearch,
          value: searchValue,
          onChange: onSearch,
          tablePrefixCls: tablePrefixCls,
          locale: locale
        }), /*#__PURE__*/React.createElement("div", {
          className: "".concat(tablePrefixCls, "-filter-dropdown-tree")
        }, filterMultiple ? /*#__PURE__*/React.createElement(_checkbox["default"], {
          className: "".concat(tablePrefixCls, "-filter-dropdown-checkall"),
          onChange: onCheckAll
        }, locale.filterCheckall) : null, /*#__PURE__*/React.createElement(_tree["default"], {
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

      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_FilterSearch["default"], {
        filterSearch: filterSearch,
        value: searchValue,
        onChange: onSearch,
        tablePrefixCls: tablePrefixCls,
        locale: locale
      }), /*#__PURE__*/React.createElement(_menu["default"], {
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
    }, /*#__PURE__*/React.createElement(_button["default"], {
      type: "link",
      size: "small",
      disabled: selectedKeys.length === 0,
      onClick: onReset
    }, locale.filterReset), /*#__PURE__*/React.createElement(_button["default"], {
      type: "primary",
      size: "small",
      onClick: onConfirm
    }, locale.filterConfirm)));
  }

  var menu = /*#__PURE__*/React.createElement(_FilterWrapper["default"], {
    className: "".concat(prefixCls, "-dropdown")
  }, dropdownContent);
  var filterIcon;

  if (typeof column.filterIcon === 'function') {
    filterIcon = column.filterIcon(filtered);
  } else if (column.filterIcon) {
    filterIcon = column.filterIcon;
  } else {
    filterIcon = /*#__PURE__*/React.createElement(_FilterFilled["default"], null);
  }

  var _React$useContext = React.useContext(_context.ConfigContext),
      direction = _React$useContext.direction;

  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-column")
  }, /*#__PURE__*/React.createElement("span", {
    className: "".concat(tablePrefixCls, "-column-title")
  }, children), /*#__PURE__*/React.createElement(_dropdown["default"], {
    overlay: menu,
    trigger: ['click'],
    visible: mergedVisible,
    onVisibleChange: onVisibleChange,
    getPopupContainer: getPopupContainer,
    placement: direction === 'rtl' ? 'bottomLeft' : 'bottomRight'
  }, /*#__PURE__*/React.createElement("span", {
    role: "button",
    tabIndex: -1,
    className: (0, _classnames["default"])("".concat(prefixCls, "-trigger"), {
      active: filtered
    }),
    onClick: function onClick(e) {
      e.stopPropagation();
    }
  }, filterIcon)));
}

var _default = FilterDropdown;
exports["default"] = _default;