"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IdContext = void 0;
exports.getMenuId = getMenuId;
exports.useMenuId = useMenuId;

var React = _interopRequireWildcard(require("react"));

var IdContext = /*#__PURE__*/React.createContext(null);
exports.IdContext = IdContext;

function getMenuId(uuid, eventKey) {
  if (uuid === undefined) {
    return null;
  }

  return "".concat(uuid, "-").concat(eventKey);
}
/**
 * Get `data-menu-id`
 */


function useMenuId(eventKey) {
  var id = React.useContext(IdContext);
  return getMenuId(id, eventKey);
}