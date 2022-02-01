import * as React from 'react';
import Tooltip from '../../tooltip';

var EllipsisTooltip = function EllipsisTooltip(_ref) {
  var title = _ref.title,
      enabledEllipsis = _ref.enabledEllipsis,
      isEllipsis = _ref.isEllipsis,
      children = _ref.children;

  if (!title || !enabledEllipsis) {
    return children;
  }

  return /*#__PURE__*/React.createElement(Tooltip, {
    title: title,
    visible: isEllipsis ? undefined : false
  }, children);
};

if (process.env.NODE_ENV !== 'production') {
  EllipsisTooltip.displayName = 'EllipsisTooltip';
}

export default EllipsisTooltip;