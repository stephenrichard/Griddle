"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GRIDDLE_INITIALIZED = GRIDDLE_INITIALIZED;
exports.GRIDDLE_LOADED_DATA = GRIDDLE_LOADED_DATA;
exports.GRIDDLE_SET_PAGE_SIZE = GRIDDLE_SET_PAGE_SIZE;
exports.GRIDDLE_SET_PAGE = GRIDDLE_SET_PAGE;
exports.GRIDDLE_NEXT_PAGE = GRIDDLE_NEXT_PAGE;
exports.GRIDDLE_PREVIOUS_PAGE = GRIDDLE_PREVIOUS_PAGE;
exports.GRIDDLE_SET_FILTER = GRIDDLE_SET_FILTER;
exports.GRIDDLE_SET_SORT = GRIDDLE_SET_SORT;

var _immutable = _interopRequireDefault(require("immutable"));

var _localSelectors = require("../selectors/localSelectors");

var dataReducers = _interopRequireWildcard(require("../../../reducers//dataReducer"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function GRIDDLE_INITIALIZED(state) {
  return dataReducers.GRIDDLE_INITIALIZED(state);
}
/** Sets the Griddle data
 * @param {Immutable} state - Immutable state object
 * @param {Object} action - the action object to work with
 *
 * This simply wraps dataReducer
 */


function GRIDDLE_LOADED_DATA(state, action) {
  return dataReducers.GRIDDLE_LOADED_DATA(state, action);
}
/** Sets the page size
 * @param {Immutable} state - Immutable state object
 * @param {Object} action - the action object to work with
 *
 * This simply wraps dataReducer
 */


function GRIDDLE_SET_PAGE_SIZE(state, action) {
  return dataReducers.GRIDDLE_SET_PAGE_SIZE(state, action);
}
/** Sets the current page
 * @param {Immutable} state - Immutable state object
 * @param {Object} action - the action object to work with
 *
 * This simply wraps dataReducer
 */


function GRIDDLE_SET_PAGE(state, action) {
  return dataReducers.GRIDDLE_SET_PAGE(state, action);
}

function GRIDDLE_NEXT_PAGE(state, action) {
  var maxPage = (0, _localSelectors.maxPageSelector)(state);
  var currentPage = (0, _localSelectors.currentPageSelector)(state);

  if (currentPage < maxPage) {
    return state.setIn(['pageProperties', 'currentPage'], currentPage + 1);
  }

  return state;
}

function GRIDDLE_PREVIOUS_PAGE(state, action) {
  var currentPage = (0, _localSelectors.currentPageSelector)(state);

  if (currentPage > 0) {
    return state.setIn(['pageProperties', 'currentPage'], currentPage - 1);
  }

  return state;
}
/** Sets the current filter
 * @param {Immutable} state - Immutable state object
 * @param {Object} action - the action object to work with
 *
 */


function GRIDDLE_SET_FILTER(state, action) {
  return state.set('filter', action.filter && _immutable["default"].fromJS(action.filter)).setIn(['pageProperties', 'currentPage'], 1);
}

;
/** Sets the sort options
 * @param {Immutable} state - Immutable state object
 * @param {Object} action - the action object to work with
 *
 * This simply wraps dataReducer
 */

function GRIDDLE_SET_SORT(state, action) {
  return dataReducers.GRIDDLE_SET_SORT(state, action);
}

;