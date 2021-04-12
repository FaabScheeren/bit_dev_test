"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./style.scss");

var _ArrowRight = _interopRequireDefault(require("../../atoms/icons/ArrowRight"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
    className: "btn ".concat(props.classes),
    onClick: function onClick(e) {
      return alert('This is amazing');
    },
    children: [props.text, /*#__PURE__*/(0, _jsxRuntime.jsx)(_ArrowRight.default, {})]
  });
}

var _default = Button;
exports.default = _default;

//# sourceMappingURL=Button.js.map