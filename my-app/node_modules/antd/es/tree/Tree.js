import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import HolderOutlined from "@ant-design/icons/es/icons/HolderOutlined";
import RcTree, { TreeNode } from 'rc-tree';
import classNames from 'classnames';
import DirectoryTree from './DirectoryTree';
import { ConfigContext } from '../config-provider';
import collapseMotion from '../_util/motion';
import renderSwitcherIcon from './utils/iconUtil';
import dropIndicatorRender from './utils/dropIndicator';
var Tree = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;

  var _React$useContext = React.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction,
      virtual = _React$useContext.virtual;

  var customizePrefixCls = props.prefixCls,
      className = props.className,
      showIcon = props.showIcon,
      showLine = props.showLine,
      _switcherIcon = props.switcherIcon,
      blockNode = props.blockNode,
      children = props.children,
      checkable = props.checkable,
      selectable = props.selectable,
      draggable = props.draggable;
  var prefixCls = getPrefixCls('tree', customizePrefixCls);

  var newProps = _extends(_extends({}, props), {
    showLine: Boolean(showLine),
    dropIndicatorRender: dropIndicatorRender
  });

  var draggableConfig = React.useMemo(function () {
    if (!draggable) {
      return false;
    }

    var mergedDraggable = {};

    switch (_typeof(draggable)) {
      case 'function':
        mergedDraggable.nodeDraggable = draggable;
        break;

      case 'object':
        mergedDraggable = _extends({}, draggable);
        break;

      default: // Do nothing

    }

    if (mergedDraggable.icon !== false) {
      mergedDraggable.icon = mergedDraggable.icon || /*#__PURE__*/React.createElement(HolderOutlined, null);
    }

    return mergedDraggable;
  }, [draggable]);
  return /*#__PURE__*/React.createElement(RcTree, _extends({
    itemHeight: 20,
    ref: ref,
    virtual: virtual
  }, newProps, {
    prefixCls: prefixCls,
    className: classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-icon-hide"), !showIcon), _defineProperty(_classNames, "".concat(prefixCls, "-block-node"), blockNode), _defineProperty(_classNames, "".concat(prefixCls, "-unselectable"), !selectable), _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className),
    direction: direction,
    checkable: checkable ? /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-checkbox-inner")
    }) : checkable,
    selectable: selectable,
    switcherIcon: function switcherIcon(nodeProps) {
      return renderSwitcherIcon(prefixCls, _switcherIcon, showLine, nodeProps);
    },
    draggable: draggableConfig
  }), children);
});
Tree.TreeNode = TreeNode;
Tree.DirectoryTree = DirectoryTree;
Tree.defaultProps = {
  checkable: false,
  selectable: true,
  showIcon: false,
  motion: _extends(_extends({}, collapseMotion), {
    motionAppear: false
  }),
  blockNode: false
};
export default Tree;