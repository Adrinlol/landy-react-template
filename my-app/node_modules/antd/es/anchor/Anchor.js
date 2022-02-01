import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _createSuper from "@babel/runtime/helpers/esm/createSuper";
import * as React from 'react';
import classNames from 'classnames';
import memoizeOne from 'memoize-one';
import addEventListener from "rc-util/es/Dom/addEventListener";
import Affix from '../affix';
import { ConfigContext } from '../config-provider';
import scrollTo from '../_util/scrollTo';
import getScroll from '../_util/getScroll';
import AnchorContext from './context';

function getDefaultContainer() {
  return window;
}

function getOffsetTop(element, container) {
  if (!element.getClientRects().length) {
    return 0;
  }

  var rect = element.getBoundingClientRect();

  if (rect.width || rect.height) {
    if (container === window) {
      container = element.ownerDocument.documentElement;
      return rect.top - container.clientTop;
    }

    return rect.top - container.getBoundingClientRect().top;
  }

  return rect.top;
}

var sharpMatcherRegx = /#([\S ]+)$/;

var Anchor = /*#__PURE__*/function (_React$Component) {
  _inherits(Anchor, _React$Component);

  var _super = _createSuper(Anchor);

  function Anchor() {
    var _this;

    _classCallCheck(this, Anchor);

    _this = _super.apply(this, arguments);
    _this.state = {
      activeLink: null
    };
    _this.wrapperRef = /*#__PURE__*/React.createRef();
    _this.links = []; // Context

    _this.registerLink = function (link) {
      if (!_this.links.includes(link)) {
        _this.links.push(link);
      }
    };

    _this.unregisterLink = function (link) {
      var index = _this.links.indexOf(link);

      if (index !== -1) {
        _this.links.splice(index, 1);
      }
    };

    _this.getContainer = function () {
      var getTargetContainer = _this.context.getTargetContainer;
      var getContainer = _this.props.getContainer;
      var getFunc = getContainer || getTargetContainer || getDefaultContainer;
      return getFunc();
    };

    _this.handleScrollTo = function (link) {
      var _this$props = _this.props,
          offsetTop = _this$props.offsetTop,
          targetOffset = _this$props.targetOffset;

      _this.setCurrentActiveLink(link);

      var container = _this.getContainer();

      var scrollTop = getScroll(container, true);
      var sharpLinkMatch = sharpMatcherRegx.exec(link);

      if (!sharpLinkMatch) {
        return;
      }

      var targetElement = document.getElementById(sharpLinkMatch[1]);

      if (!targetElement) {
        return;
      }

      var eleOffsetTop = getOffsetTop(targetElement, container);
      var y = scrollTop + eleOffsetTop;
      y -= targetOffset !== undefined ? targetOffset : offsetTop || 0;
      _this.animating = true;
      scrollTo(y, {
        callback: function callback() {
          _this.animating = false;
        },
        getContainer: _this.getContainer
      });
    };

    _this.saveInkNode = function (node) {
      _this.inkNode = node;
    };

    _this.setCurrentActiveLink = function (link) {
      var activeLink = _this.state.activeLink;
      var _this$props2 = _this.props,
          onChange = _this$props2.onChange,
          getCurrentAnchor = _this$props2.getCurrentAnchor;

      if (activeLink === link) {
        return;
      } // https://github.com/ant-design/ant-design/issues/30584


      _this.setState({
        activeLink: typeof getCurrentAnchor === 'function' ? getCurrentAnchor() : link
      });

      onChange === null || onChange === void 0 ? void 0 : onChange(link);
    };

    _this.handleScroll = function () {
      if (_this.animating) {
        return;
      }

      var _this$props3 = _this.props,
          offsetTop = _this$props3.offsetTop,
          bounds = _this$props3.bounds,
          targetOffset = _this$props3.targetOffset;

      var currentActiveLink = _this.getCurrentAnchor(targetOffset !== undefined ? targetOffset : offsetTop || 0, bounds);

      _this.setCurrentActiveLink(currentActiveLink);
    };

    _this.updateInk = function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
          prefixCls = _assertThisInitialize.prefixCls,
          wrapperRef = _assertThisInitialize.wrapperRef;

      var anchorNode = wrapperRef.current;
      var linkNode = anchorNode === null || anchorNode === void 0 ? void 0 : anchorNode.getElementsByClassName("".concat(prefixCls, "-link-title-active"))[0];

      if (linkNode) {
        _this.inkNode.style.top = "".concat(linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5, "px");
      }
    };

    _this.getMemoizedContextValue = memoizeOne(function (link, onClickFn) {
      return {
        registerLink: _this.registerLink,
        unregisterLink: _this.unregisterLink,
        scrollTo: _this.handleScrollTo,
        activeLink: link,
        onClick: onClickFn
      };
    });
    return _this;
  }

  _createClass(Anchor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollContainer = this.getContainer();
      this.scrollEvent = addEventListener(this.scrollContainer, 'scroll', this.handleScroll);
      this.handleScroll();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.scrollEvent) {
        var currentContainer = this.getContainer();

        if (this.scrollContainer !== currentContainer) {
          this.scrollContainer = currentContainer;
          this.scrollEvent.remove();
          this.scrollEvent = addEventListener(this.scrollContainer, 'scroll', this.handleScroll);
          this.handleScroll();
        }
      }

      this.updateInk();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.scrollEvent) {
        this.scrollEvent.remove();
      }
    }
  }, {
    key: "getCurrentAnchor",
    value: function getCurrentAnchor() {
      var offsetTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var bounds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
      var linkSections = [];
      var container = this.getContainer();
      this.links.forEach(function (link) {
        var sharpLinkMatch = sharpMatcherRegx.exec(link.toString());

        if (!sharpLinkMatch) {
          return;
        }

        var target = document.getElementById(sharpLinkMatch[1]);

        if (target) {
          var top = getOffsetTop(target, container);

          if (top < offsetTop + bounds) {
            linkSections.push({
              link: link,
              top: top
            });
          }
        }
      });

      if (linkSections.length) {
        var maxSection = linkSections.reduce(function (prev, curr) {
          return curr.top > prev.top ? curr : prev;
        });
        return maxSection.link;
      }

      return '';
    }
  }, {
    key: "render",
    value: function render() {
      var _this$context = this.context,
          getPrefixCls = _this$context.getPrefixCls,
          direction = _this$context.direction;
      var _this$props4 = this.props,
          customizePrefixCls = _this$props4.prefixCls,
          _this$props4$classNam = _this$props4.className,
          className = _this$props4$classNam === void 0 ? '' : _this$props4$classNam,
          style = _this$props4.style,
          offsetTop = _this$props4.offsetTop,
          affix = _this$props4.affix,
          showInkInFixed = _this$props4.showInkInFixed,
          children = _this$props4.children,
          onClick = _this$props4.onClick;
      var activeLink = this.state.activeLink;
      var prefixCls = getPrefixCls('anchor', customizePrefixCls); // To support old version react.
      // Have to add prefixCls on the instance.
      // https://github.com/facebook/react/issues/12397

      this.prefixCls = prefixCls;
      var inkClass = classNames("".concat(prefixCls, "-ink-ball"), {
        visible: activeLink
      });
      var wrapperClass = classNames("".concat(prefixCls, "-wrapper"), _defineProperty({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
      var anchorClass = classNames(prefixCls, _defineProperty({}, "".concat(prefixCls, "-fixed"), !affix && !showInkInFixed));

      var wrapperStyle = _extends({
        maxHeight: offsetTop ? "calc(100vh - ".concat(offsetTop, "px)") : '100vh'
      }, style);

      var anchorContent = /*#__PURE__*/React.createElement("div", {
        ref: this.wrapperRef,
        className: wrapperClass,
        style: wrapperStyle
      }, /*#__PURE__*/React.createElement("div", {
        className: anchorClass
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-ink")
      }, /*#__PURE__*/React.createElement("span", {
        className: inkClass,
        ref: this.saveInkNode
      })), children));
      var contextValue = this.getMemoizedContextValue(activeLink, onClick);
      return /*#__PURE__*/React.createElement(AnchorContext.Provider, {
        value: contextValue
      }, !affix ? anchorContent : /*#__PURE__*/React.createElement(Affix, {
        offsetTop: offsetTop,
        target: this.getContainer
      }, anchorContent));
    }
  }]);

  return Anchor;
}(React.Component);

export { Anchor as default };
Anchor.defaultProps = {
  affix: true,
  showInkInFixed: false
};
Anchor.contextType = ConfigContext;