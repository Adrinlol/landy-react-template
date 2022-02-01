"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _rcFieldForm = require("rc-field-form");

var _ref2 = require("rc-util/lib/ref");

var _omit = _interopRequireDefault(require("rc-util/lib/omit"));

var _row = _interopRequireDefault(require("../grid/row"));

var _configProvider = require("../config-provider");

var _type = require("../_util/type");

var _devWarning = _interopRequireDefault(require("../_util/devWarning"));

var _FormItemLabel = _interopRequireDefault(require("./FormItemLabel"));

var _FormItemInput = _interopRequireDefault(require("./FormItemInput"));

var _context = require("./context");

var _util = require("./util");

var _reactNode = require("../_util/reactNode");

var _useFrameState3 = _interopRequireDefault(require("./hooks/useFrameState"));

var _useDebounce = _interopRequireDefault(require("./hooks/useDebounce"));

var _useItemRef = _interopRequireDefault(require("./hooks/useItemRef"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var NAME_SPLIT = '__SPLIT__';
var ValidateStatuses = (0, _type.tuple)('success', 'warning', 'error', 'validating', '');
var MemoInput = /*#__PURE__*/React.memo(function (_ref) {
  var children = _ref.children;
  return children;
}, function (prev, next) {
  return prev.value === next.value && prev.update === next.update;
});

function hasValidName(name) {
  if (name === null) {
    (0, _devWarning["default"])(false, 'Form.Item', '`null` is passed as `name` property');
  }

  return !(name === undefined || name === null);
}

function genEmptyMeta() {
  return {
    errors: [],
    warnings: [],
    touched: false,
    validating: false,
    name: []
  };
}

function FormItem(props) {
  var name = props.name,
      noStyle = props.noStyle,
      dependencies = props.dependencies,
      customizePrefixCls = props.prefixCls,
      style = props.style,
      className = props.className,
      shouldUpdate = props.shouldUpdate,
      hasFeedback = props.hasFeedback,
      help = props.help,
      rules = props.rules,
      validateStatus = props.validateStatus,
      children = props.children,
      required = props.required,
      label = props.label,
      messageVariables = props.messageVariables,
      _props$trigger = props.trigger,
      trigger = _props$trigger === void 0 ? 'onChange' : _props$trigger,
      validateTrigger = props.validateTrigger,
      hidden = props.hidden,
      restProps = __rest(props, ["name", "noStyle", "dependencies", "prefixCls", "style", "className", "shouldUpdate", "hasFeedback", "help", "rules", "validateStatus", "children", "required", "label", "messageVariables", "trigger", "validateTrigger", "hidden"]);

  var _useContext = (0, React.useContext)(_configProvider.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var _useContext2 = (0, React.useContext)(_context.FormContext),
      formName = _useContext2.name,
      requiredMark = _useContext2.requiredMark;

  var isRenderProps = typeof children === 'function';
  var notifyParentMetaChange = (0, React.useContext)(_context.NoStyleItemContext);

  var _useContext3 = (0, React.useContext)(_rcFieldForm.FieldContext),
      contextValidateTrigger = _useContext3.validateTrigger;

  var mergedValidateTrigger = validateTrigger !== undefined ? validateTrigger : contextValidateTrigger;
  var hasName = hasValidName(name);
  var prefixCls = getPrefixCls('form', customizePrefixCls); // ========================= MISC =========================
  // Get `noStyle` required info

  var listContext = React.useContext(_rcFieldForm.ListContext);
  var fieldKeyPathRef = React.useRef(); // ======================== Errors ========================
  // >>>>> Collect sub field errors

  var _useFrameState = (0, _useFrameState3["default"])({}),
      _useFrameState2 = (0, _slicedToArray2["default"])(_useFrameState, 2),
      subFieldErrors = _useFrameState2[0],
      setSubFieldErrors = _useFrameState2[1]; // >>>>> Current field errors


  var _React$useState = React.useState(function () {
    return genEmptyMeta();
  }),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      meta = _React$useState2[0],
      setMeta = _React$useState2[1];

  var onMetaChange = function onMetaChange(nextMeta) {
    // This keyInfo is not correct when field is removed
    // Since origin keyManager no longer keep the origin key anymore
    // Which means we need cache origin one and reuse when removed
    var keyInfo = listContext === null || listContext === void 0 ? void 0 : listContext.getKey(nextMeta.name); // Destroy will reset all the meta

    setMeta(nextMeta.destroy ? genEmptyMeta() : nextMeta); // Bump to parent since noStyle

    if (noStyle && notifyParentMetaChange) {
      var namePath = nextMeta.name;

      if (!nextMeta.destroy) {
        if (keyInfo !== undefined) {
          var _keyInfo = (0, _slicedToArray2["default"])(keyInfo, 2),
              fieldKey = _keyInfo[0],
              restPath = _keyInfo[1];

          namePath = [fieldKey].concat((0, _toConsumableArray2["default"])(restPath));
          fieldKeyPathRef.current = namePath;
        }
      } else {
        // Use origin cache data
        namePath = fieldKeyPathRef.current || namePath;
      }

      notifyParentMetaChange(nextMeta, namePath);
    }
  }; // >>>>> Collect noStyle Field error to the top FormItem


  var onSubItemMetaChange = function onSubItemMetaChange(subMeta, uniqueKeys) {
    // Only `noStyle` sub item will trigger
    setSubFieldErrors(function (prevSubFieldErrors) {
      var clone = (0, _extends2["default"])({}, prevSubFieldErrors); // name: ['user', 1] + key: [4] = ['user', 4]

      var mergedNamePath = [].concat((0, _toConsumableArray2["default"])(subMeta.name.slice(0, -1)), (0, _toConsumableArray2["default"])(uniqueKeys));
      var mergedNameKey = mergedNamePath.join(NAME_SPLIT);

      if (subMeta.destroy) {
        // Remove
        delete clone[mergedNameKey];
      } else {
        // Update
        clone[mergedNameKey] = subMeta;
      }

      return clone;
    });
  }; // >>>>> Get merged errors


  var _React$useMemo = React.useMemo(function () {
    var errorList = (0, _toConsumableArray2["default"])(meta.errors);
    var warningList = (0, _toConsumableArray2["default"])(meta.warnings);
    Object.values(subFieldErrors).forEach(function (subFieldError) {
      errorList.push.apply(errorList, (0, _toConsumableArray2["default"])(subFieldError.errors || []));
      warningList.push.apply(warningList, (0, _toConsumableArray2["default"])(subFieldError.warnings || []));
    });
    return [errorList, warningList];
  }, [subFieldErrors, meta.errors, meta.warnings]),
      _React$useMemo2 = (0, _slicedToArray2["default"])(_React$useMemo, 2),
      mergedErrors = _React$useMemo2[0],
      mergedWarnings = _React$useMemo2[1];

  var debounceErrors = (0, _useDebounce["default"])(mergedErrors);
  var debounceWarnings = (0, _useDebounce["default"])(mergedWarnings); // ===================== Children Ref =====================

  var getItemRef = (0, _useItemRef["default"])(); // ======================== Render ========================

  function renderLayout(baseChildren, fieldId, isRequired) {
    var _itemClassName;

    if (noStyle && !hidden) {
      return baseChildren;
    } // ======================== Status ========================


    var mergedValidateStatus = '';

    if (validateStatus !== undefined) {
      mergedValidateStatus = validateStatus;
    } else if (meta === null || meta === void 0 ? void 0 : meta.validating) {
      mergedValidateStatus = 'validating';
    } else if (debounceErrors.length) {
      mergedValidateStatus = 'error';
    } else if (debounceWarnings.length) {
      mergedValidateStatus = 'warning';
    } else if (meta === null || meta === void 0 ? void 0 : meta.touched) {
      mergedValidateStatus = 'success';
    }

    var itemClassName = (_itemClassName = {}, (0, _defineProperty2["default"])(_itemClassName, "".concat(prefixCls, "-item"), true), (0, _defineProperty2["default"])(_itemClassName, "".concat(prefixCls, "-item-with-help"), help !== undefined && help !== null || debounceErrors.length || debounceWarnings.length), (0, _defineProperty2["default"])(_itemClassName, "".concat(className), !!className), (0, _defineProperty2["default"])(_itemClassName, "".concat(prefixCls, "-item-has-feedback"), mergedValidateStatus && hasFeedback), (0, _defineProperty2["default"])(_itemClassName, "".concat(prefixCls, "-item-has-success"), mergedValidateStatus === 'success'), (0, _defineProperty2["default"])(_itemClassName, "".concat(prefixCls, "-item-has-warning"), mergedValidateStatus === 'warning'), (0, _defineProperty2["default"])(_itemClassName, "".concat(prefixCls, "-item-has-error"), mergedValidateStatus === 'error'), (0, _defineProperty2["default"])(_itemClassName, "".concat(prefixCls, "-item-is-validating"), mergedValidateStatus === 'validating'), (0, _defineProperty2["default"])(_itemClassName, "".concat(prefixCls, "-item-hidden"), hidden), _itemClassName); // ======================= Children =======================

    return /*#__PURE__*/React.createElement(_row["default"], (0, _extends2["default"])({
      className: (0, _classnames["default"])(itemClassName),
      style: style,
      key: "row"
    }, (0, _omit["default"])(restProps, ['colon', 'extra', 'fieldKey', 'getValueFromEvent', 'getValueProps', 'htmlFor', 'id', 'initialValue', 'isListField', 'labelAlign', 'labelWrap', 'labelCol', 'normalize', 'preserve', 'tooltip', 'validateFirst', 'valuePropName', 'wrapperCol', '_internalItemRender'])), /*#__PURE__*/React.createElement(_FormItemLabel["default"], (0, _extends2["default"])({
      htmlFor: fieldId,
      required: isRequired,
      requiredMark: requiredMark
    }, props, {
      prefixCls: prefixCls
    })), /*#__PURE__*/React.createElement(_FormItemInput["default"], (0, _extends2["default"])({}, props, meta, {
      errors: debounceErrors,
      warnings: debounceWarnings,
      prefixCls: prefixCls,
      status: mergedValidateStatus,
      validateStatus: mergedValidateStatus,
      help: help
    }), /*#__PURE__*/React.createElement(_context.NoStyleItemContext.Provider, {
      value: onSubItemMetaChange
    }, baseChildren)));
  }

  if (!hasName && !isRenderProps && !dependencies) {
    return renderLayout(children);
  }

  var variables = {};

  if (typeof label === 'string') {
    variables.label = label;
  } else if (name) {
    variables.label = String(name);
  }

  if (messageVariables) {
    variables = (0, _extends2["default"])((0, _extends2["default"])({}, variables), messageVariables);
  } // >>>>> With Field


  return /*#__PURE__*/React.createElement(_rcFieldForm.Field, (0, _extends2["default"])({}, props, {
    messageVariables: variables,
    trigger: trigger,
    validateTrigger: mergedValidateTrigger,
    onMetaChange: onMetaChange
  }), function (control, renderMeta, context) {
    var mergedName = (0, _util.toArray)(name).length && renderMeta ? renderMeta.name : [];
    var fieldId = (0, _util.getFieldId)(mergedName, formName);
    var isRequired = required !== undefined ? required : !!(rules && rules.some(function (rule) {
      if (rule && (0, _typeof2["default"])(rule) === 'object' && rule.required && !rule.warningOnly) {
        return true;
      }

      if (typeof rule === 'function') {
        var ruleEntity = rule(context);
        return ruleEntity && ruleEntity.required && !ruleEntity.warningOnly;
      }

      return false;
    })); // ======================= Children =======================

    var mergedControl = (0, _extends2["default"])({}, control);
    var childNode = null;
    (0, _devWarning["default"])(!(shouldUpdate && dependencies), 'Form.Item', "`shouldUpdate` and `dependencies` shouldn't be used together. See https://ant.design/components/form/#dependencies.");

    if (Array.isArray(children) && hasName) {
      (0, _devWarning["default"])(false, 'Form.Item', '`children` is array of render props cannot have `name`.');
      childNode = children;
    } else if (isRenderProps && (!(shouldUpdate || dependencies) || hasName)) {
      (0, _devWarning["default"])(!!(shouldUpdate || dependencies), 'Form.Item', '`children` of render props only work with `shouldUpdate` or `dependencies`.');
      (0, _devWarning["default"])(!hasName, 'Form.Item', "Do not use `name` with `children` of render props since it's not a field.");
    } else if (dependencies && !isRenderProps && !hasName) {
      (0, _devWarning["default"])(false, 'Form.Item', 'Must set `name` or use render props when `dependencies` is set.');
    } else if ((0, _reactNode.isValidElement)(children)) {
      (0, _devWarning["default"])(children.props.defaultValue === undefined, 'Form.Item', '`defaultValue` will not work on controlled Field. You should use `initialValues` of Form instead.');
      var childProps = (0, _extends2["default"])((0, _extends2["default"])({}, children.props), mergedControl);

      if (!childProps.id) {
        childProps.id = fieldId;
      }

      if ((0, _ref2.supportRef)(children)) {
        childProps.ref = getItemRef(mergedName, children);
      } // We should keep user origin event handler


      var triggers = new Set([].concat((0, _toConsumableArray2["default"])((0, _util.toArray)(trigger)), (0, _toConsumableArray2["default"])((0, _util.toArray)(mergedValidateTrigger))));
      triggers.forEach(function (eventName) {
        childProps[eventName] = function () {
          var _a2, _c2;

          var _a, _b, _c;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          (_a = mergedControl[eventName]) === null || _a === void 0 ? void 0 : (_a2 = _a).call.apply(_a2, [mergedControl].concat(args));
          (_c = (_b = children.props)[eventName]) === null || _c === void 0 ? void 0 : (_c2 = _c).call.apply(_c2, [_b].concat(args));
        };
      });
      childNode = /*#__PURE__*/React.createElement(MemoInput, {
        value: mergedControl[props.valuePropName || 'value'],
        update: children
      }, (0, _reactNode.cloneElement)(children, childProps));
    } else if (isRenderProps && (shouldUpdate || dependencies) && !hasName) {
      childNode = children(context);
    } else {
      (0, _devWarning["default"])(!mergedName.length, 'Form.Item', '`name` is only used for validate React element. If you are using Form.Item as layout display, please remove `name` instead.');
      childNode = children;
    }

    return renderLayout(childNode, fieldId, isRequired);
  });
}

var _default = FormItem;
exports["default"] = _default;