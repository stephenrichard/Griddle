"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _griddleConnect = require("../../../utils/griddleConnect");

var _compose = _interopRequireDefault(require("recompose/compose"));

var _mapProps = _interopRequireDefault(require("recompose/mapProps"));

var _getContext = _interopRequireDefault(require("recompose/getContext"));

var _localSelectors = require("../selectors/localSelectors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ComposedTableBodyContainer = function ComposedTableBodyContainer(OriginalComponent) {
  return (0, _compose["default"])((0, _getContext["default"])({
    components: _propTypes["default"].object,
    selectors: _propTypes["default"].object
  }), (0, _mapProps["default"])(function (props) {
    return _objectSpread({
      Row: props.components.Row,
      visibleRowIdsSelector: props.selectors.visibleRowIdsSelector
    }, props);
  }), (0, _griddleConnect.connect)(function (state, props) {
    return {
      visibleRowIds: props.visibleRowIdsSelector(state),
      className: (0, _localSelectors.classNamesForComponentSelector)(state, 'TableBody'),
      style: (0, _localSelectors.stylesForComponentSelector)(state, 'TableBody')
    };
  }) // withHandlers({
  //   Row: props => props.components.Row
  // })
  )(function (_ref) {
    var Row = _ref.Row,
        visibleRowIds = _ref.visibleRowIds,
        style = _ref.style,
        className = _ref.className;
    return _react["default"].createElement(OriginalComponent, {
      rowIds: visibleRowIds,
      Row: Row,
      style: style,
      className: className
    });
  });
};

var _default = ComposedTableBodyContainer;
exports["default"] = _default;