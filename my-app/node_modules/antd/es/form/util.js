// form item name black list.  in form ,you can use form.id get the form item element.
// use object hasOwnProperty will get better performance if black list is longer.
var formItemNameBlackList = ['parentNode']; // default form item id prefix.

var defaultItemNamePrefixCls = 'form_item';
export function toArray(candidate) {
  if (candidate === undefined || candidate === false) return [];
  return Array.isArray(candidate) ? candidate : [candidate];
}
export function getFieldId(namePath, formName) {
  if (!namePath.length) return undefined;
  var mergedId = namePath.join('_');

  if (formName) {
    return "".concat(formName, "_").concat(mergedId);
  }

  var isIllegalName = formItemNameBlackList.indexOf(mergedId) >= 0;
  return isIllegalName ? "".concat(defaultItemNamePrefixCls, "_").concat(mergedId) : mergedId;
}