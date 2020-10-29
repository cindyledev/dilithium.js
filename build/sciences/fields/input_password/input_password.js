"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mithril = require("mithril");

var _component = require("./../../../operations/component/component.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Generated by CoffeeScript 2.4.1
var InputPassword,
    boundMethodCheck = function boundMethodCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new Error('Bound instance method accessed before binding');
  }
};

var _default = InputPassword =
/*#__PURE__*/
function (_Component) {
  _inherits(InputPassword, _Component);

  function InputPassword() {
    var _this;

    _classCallCheck(this, InputPassword);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputPassword).apply(this, arguments));
    _this.onkeyup = _this.onkeyup.bind(_assertThisInitialized(_this));
    _this.attrs = _this.attrs.bind(_assertThisInitialized(_this));
    _this.classes = _this.classes.bind(_assertThisInitialized(_this));
    _this.view = _this.view.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(InputPassword, [{
    key: "oninit",
    value: function oninit(vnode) {
      _get(_getPrototypeOf(InputPassword.prototype), "oninit", this).call(this, vnode);

      this.attribute = vnode.attrs.attribute;
      this.handle = vnode.attrs.handle;
      return this.placeholder = vnode.attrs.placeholder;
    }
  }, {
    key: "onkeyup",
    value: function onkeyup(ev) {
      boundMethodCheck(this, InputPassword);
      return this.attribute.value(ev.target.value);
    }
  }, {
    key: "attrs",
    value: function attrs() {
      var attrs;
      boundMethodCheck(this, InputPassword);
      attrs = {
        onkeyup: this.onkeyup,
        value: this.attribute.value()
      };

      if (this.placeholder) {
        attrs.placeholder = this.placeholder;
      }

      return attrs;
    }
  }, {
    key: "classes",
    value: function classes() {
      boundMethodCheck(this, InputPassword);

      if (this.attribute.errors().length > 0) {
        return 'err';
      } else {
        return '';
      }
    }
  }, {
    key: "view",
    value: function view(vnode) {
      boundMethodCheck(this, InputPassword);
      return (0, _mithril.m)(".field.password_field.".concat(this.handle), {
        "class": this.classes()
      }, this.label ? (0, _mithril.m)('label', this.label) : void 0, (0, _mithril.m)("input[type='password']", this.attrs()));
    }
  }]);

  return InputPassword;
}(_component.Component);

exports["default"] = _default;