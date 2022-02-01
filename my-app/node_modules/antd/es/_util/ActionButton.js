import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import * as React from 'react';
import Button from '../button';
import { convertLegacyProps } from '../button/button';
import useDestroyed from './hooks/useDestroyed';

function isThenable(thing) {
  return !!(thing && !!thing.then);
}

var ActionButton = function ActionButton(props) {
  var clickedRef = React.useRef(false);
  var ref = React.useRef();
  var isDestroyed = useDestroyed();

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];

  React.useEffect(function () {
    var timeoutId;

    if (props.autoFocus) {
      var $this = ref.current;
      timeoutId = setTimeout(function () {
        return $this.focus();
      });
    }

    return function () {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  var handlePromiseOnOk = function handlePromiseOnOk(returnValueOfOnOk) {
    var close = props.close;

    if (!isThenable(returnValueOfOnOk)) {
      return;
    }

    setLoading(true);
    returnValueOfOnOk.then(function () {
      if (!isDestroyed()) {
        setLoading(false);
      }

      close.apply(void 0, arguments);
      clickedRef.current = false;
    }, function (e) {
      // Emit error when catch promise reject
      // eslint-disable-next-line no-console
      console.error(e); // See: https://github.com/ant-design/ant-design/issues/6183

      if (!isDestroyed()) {
        setLoading(false);
      }

      clickedRef.current = false;
    });
  };

  var onClick = function onClick(e) {
    var actionFn = props.actionFn,
        close = props.close;

    if (clickedRef.current) {
      return;
    }

    clickedRef.current = true;

    if (!actionFn) {
      close();
      return;
    }

    var returnValueOfOnOk;

    if (props.emitEvent) {
      returnValueOfOnOk = actionFn(e);

      if (props.quitOnNullishReturnValue && !isThenable(returnValueOfOnOk)) {
        clickedRef.current = false;
        close(e);
        return;
      }
    } else if (actionFn.length) {
      returnValueOfOnOk = actionFn(close); // https://github.com/ant-design/ant-design/issues/23358

      clickedRef.current = false;
    } else {
      returnValueOfOnOk = actionFn();

      if (!returnValueOfOnOk) {
        close();
        return;
      }
    }

    handlePromiseOnOk(returnValueOfOnOk);
  };

  var type = props.type,
      children = props.children,
      prefixCls = props.prefixCls,
      buttonProps = props.buttonProps;
  return /*#__PURE__*/React.createElement(Button, _extends({}, convertLegacyProps(type), {
    onClick: onClick,
    loading: loading,
    prefixCls: prefixCls
  }, buttonProps, {
    ref: ref
  }), children);
};

export default ActionButton;