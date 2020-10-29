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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Generated by CoffeeScript 2.4.1
var FileField,
    boundMethodCheck = function boundMethodCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new Error('Bound instance method accessed before binding');
  }
};

var _default = FileField = function () {
  var FileField =
  /*#__PURE__*/
  function (_Component) {
    _inherits(FileField, _Component);

    function FileField() {
      var _this;

      _classCallCheck(this, FileField);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FileField).apply(this, arguments));
      _this._onchange = _this._onchange.bind(_assertThisInitialized(_this));
      _this.click = _this.click.bind(_assertThisInitialized(_this));
      _this.attrs = _this.attrs.bind(_assertThisInitialized(_this));
      _this.classes = _this.classes.bind(_assertThisInitialized(_this));
      _this.render = _this.render.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(FileField, [{
      key: "_onchange",
      value: function _onchange(ev) {
        var file, filelist, files, i, len;
        boundMethodCheck(this, FileField);
        filelist = ev.target.files;
        files = null;

        if (this.multi) {
          if (filelist.length === 1) {
            files = [filelist[0]];
          } else if (filelist.length > 1) {
            files = [];

            for (i = 0, len = filelist.length; i < len; i++) {
              file = filelist[i];
              files.push(file);
            }
          }
        } else {
          if (filelist.length === 1) {
            files = filelist[0];
          }
        }

        this.attribute.value(files);

        if (this.onchange) {
          return this.onchange();
        }
      }
    }, {
      key: "click",
      value: function click(vnode) {
        boundMethodCheck(this, FileField);
        return function (ev) {
          return document.querySelector('.field.file_field input').click();
        };
      }
    }, {
      key: "attrs",
      value: function attrs() {
        var attrs;
        boundMethodCheck(this, FileField);
        attrs = {
          onchange: this._onchange
        };

        if (this.multi) {
          attrs.multiple = true;
        }

        return attrs;
      }
    }, {
      key: "classes",
      value: function classes() {
        boundMethodCheck(this, FileField);

        if (this.attribute.errors().length > 0) {
          return 'err';
        } else {
          return '';
        }
      }
    }, {
      key: "render",
      value: function render(vnode) {
        boundMethodCheck(this, FileField);
        return (0, _mithril.m)(".field.file_field.".concat(this.handle), {
          "class": this.classes()
        }, this.label ? (0, _mithril.m)('label', this.label) : void 0, this.button_label ? (0, _mithril.m)('.upload.button.bttn', {
          onclick: this.click(vnode)
        }, this.button_label) : void 0, (0, _mithril.m)("input[type='file']", this.attrs()));
      }
    }]);

    return FileField;
  }(_component.Component);

  ;
  FileField.prototype.expects = {
    attribute: true,
    handle: true,
    label: {
      allow_nil: true
    },
    button_label: {
      allow_nil: true
    },
    multi: {
      allow_nil: true
    },
    onchange: {
      allow_nil: true
    }
  };
  return FileField;
}.call(void 0);

exports["default"] = _default;