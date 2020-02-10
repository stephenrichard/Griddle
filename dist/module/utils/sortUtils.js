"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultSort = defaultSort;
exports.setSortProperties = setSortProperties;
exports.getSortIconProps = getSortIconProps;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Sorts the given data by the specified column
 * @parameter {array<object>} data - The data to sort
 * @parameter {string} column - the name of the column to sort
 * @parameter {boolean optional} sortAscending - whether or not to sort this column in ascending order
 *
 * TODO: Needs tests!
 */
function defaultSort(data, column) {
  var sortAscending = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return data.sort(function (original, newRecord) {
    var columnKey = column.split('.');
    var originalValue = original.hasIn(columnKey) && original.getIn(columnKey).toLowerCase() || '';
    var newRecordValue = newRecord.hasIn(columnKey) && newRecord.getIn(columnKey).toLowerCase() || ''; //TODO: This is about the most cheezy sorting check ever.
    //Make it better

    if (originalValue === newRecordValue) {
      return 0;
    } else if (originalValue > newRecordValue) {
      return sortAscending ? 1 : -1;
    } else {
      return sortAscending ? -1 : 1;
    }
  });
}

function setSortProperties(_ref) {
  var setSortColumn = _ref.setSortColumn,
      sortProperty = _ref.sortProperty,
      columnId = _ref.columnId;
  return function () {
    if (sortProperty === null) {
      setSortColumn({
        id: columnId,
        sortAscending: true
      });
      return;
    }

    var newSortProperty = _objectSpread({}, sortProperty, {
      sortAscending: !sortProperty.sortAscending
    });

    setSortColumn(newSortProperty);
  };
}

function getSortIconProps(props) {
  var sortProperty = props.sortProperty,
      sortAscendingIcon = props.sortAscendingIcon,
      sortDescendingIcon = props.sortDescendingIcon;
  var sortAscendingClassName = props.sortAscendingClassName,
      sortDescendingClassName = props.sortDescendingClassName;

  if (sortProperty) {
    return sortProperty.sortAscending ? {
      icon: sortAscendingIcon,
      iconClassName: sortAscendingClassName
    } : {
      icon: sortDescendingIcon,
      iconClassName: sortDescendingClassName
    };
  } // return null so we don't render anything if no sortProperty


  return null;
}