// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"dist/library/jsts.min.js":[function(require,module,exports) {
var define;
function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * JSTS. See https://github.com/bjornharrtell/jsts
 * https://github.com/bjornharrtell/jsts/blob/master/LICENSE_EDLv1.txt
 * https://github.com/bjornharrtell/jsts/blob/master/LICENSE_EPLv1.txt
 * https://github.com/bjornharrtell/jsts/blob/master/LICENSE_LICENSE_ES6_COLLECTIONS.txt
 * @license
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).jsts = {});
}(this, function (t) {
  "use strict";

  var e =
  /*#__PURE__*/
  function () {
    function e() {
      _classCallCheck(this, e);

      e.constructor_.apply(this, arguments);
    }

    _createClass(e, [{
      key: "getClass",
      value: function getClass() {
        return e;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "equalsWithTolerance",
      value: function equalsWithTolerance(t, e, n) {
        return Math.abs(t - e) <= n;
      }
    }]);

    return e;
  }();

  function n(t) {
    this.message = t;
  }

  function s(t, e) {
    this.low = 0 | e, this.high = 0 | t;
  }

  function i() {}

  function r() {}

  function o() {}

  function l() {}

  function a() {}

  function c(t) {
    this.name = "RuntimeException", this.message = t, this.stack = new Error().stack, Error.call(this, t);
  }

  e.constructor_ = function () {}, s.toBinaryString = function (t) {
    var e,
        n = "";

    for (e = 2147483648; e > 0; e >>>= 1) {
      n += (t.high & e) === e ? "1" : "0";
    }

    for (e = 2147483648; e > 0; e >>>= 1) {
      n += (t.low & e) === e ? "1" : "0";
    }

    return n;
  }, i.isNaN = function (t) {
    return Number.isNaN(t);
  }, i.isInfinite = function (t) {
    return !Number.isFinite(t);
  }, i.MAX_VALUE = Number.MAX_VALUE, "function" == typeof Float64Array && "function" == typeof Int32Array ? function () {
    var t = new Float64Array(1),
        e = new Int32Array(t.buffer);
    i.doubleToLongBits = function (n) {
      t[0] = n;
      var i = 0 | e[0],
          r = 0 | e[1];
      return 2146435072 == (2146435072 & r) && 0 != (1048575 & r) && 0 !== i && (i = 0, r = 2146959360), new s(r, i);
    }, i.longBitsToDouble = function (n) {
      return e[0] = n.low, e[1] = n.high, t[0];
    };
  }() : function () {
    var t = Math.log2,
        e = Math.floor,
        n = Math.pow,
        r = function () {
      for (var _s2 = 53; _s2 > 0; _s2--) {
        var _i2 = n(2, _s2) - 1;

        if (e(t(_i2)) + 1 === _s2) return _i2;
      }

      return 0;
    }();

    i.doubleToLongBits = function (i) {
      var o, l, a, c, h, u, g, d, _;

      if (i < 0 || 1 / i === Number.NEGATIVE_INFINITY ? (u = 1 << 31, i = -i) : u = 0, 0 === i) return new s(d = u, _ = 0);
      if (i === 1 / 0) return new s(d = 2146435072 | u, _ = 0);
      if (i != i) return new s(d = 2146959360, _ = 0);
      if (c = 0, _ = 0, (o = e(i)) > 1) if (o <= r) (c = e(t(o))) <= 20 ? (_ = 0, d = o << 20 - c & 1048575) : (_ = o % (l = n(2, a = c - 20)) << 32 - a, d = o / l & 1048575);else for (a = o, _ = 0; 0 !== (a = e(l = a / 2));) {
        c++, _ >>>= 1, _ |= (1 & d) << 31, d >>>= 1, l !== a && (d |= 524288);
      }
      if (g = c + 1023, h = 0 === o, o = i - o, c < 52 && 0 !== o) for (a = 0;;) {
        if ((l = 2 * o) >= 1 ? (o = l - 1, h ? (g--, h = !1) : (a <<= 1, a |= 1, c++)) : (o = l, h ? 0 == --g && (c++, h = !1) : (a <<= 1, c++)), 20 === c) d |= a, a = 0;else if (52 === c) {
          _ |= a;
          break;
        }

        if (1 === l) {
          c < 20 ? d |= a << 20 - c : c < 52 && (_ |= a << 52 - c);
          break;
        }
      }
      return d |= g << 20, new s(d |= u, _);
    }, i.longBitsToDouble = function (t) {
      var e, s, i, r, o;
      var l = t.high,
          a = t.low;

      for (i = l & 1 << 31 ? -1 : 1, r = ((2146435072 & l) >> 20) - 1023, o = 0, s = 1 << 19, e = 1; e <= 20; e++) {
        l & s && (o += n(2, -e)), s >>>= 1;
      }

      for (s = 1 << 31, e = 21; e <= 52; e++) {
        a & s && (o += n(2, -e)), s >>>= 1;
      }

      if (-1023 === r) {
        if (0 === o) return 0 * i;
        r = -1022;
      } else {
        if (1024 === r) return 0 === o ? i / 0 : NaN;
        o += 1;
      }

      return i * o * n(2, r);
    };
  }(), c.prototype = Object.create(Error.prototype), c.prototype.constructor = Error;

  var h =
  /*#__PURE__*/
  function (_c) {
    _inherits(h, _c);

    function h() {
      var _this;

      _classCallCheck(this, h);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(h).call(this)), h.constructor_.apply(_assertThisInitialized(_this), arguments);
      return _this;
    }

    _createClass(h, [{
      key: "getClass",
      value: function getClass() {
        return h;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return h;
  }(c);

  h.constructor_ = function () {
    if (0 === arguments.length) c.constructor_.call(this);else if (1 === arguments.length) {
      var _t2 = arguments[0];
      c.constructor_.call(this, _t2);
    }
  };

  var u =
  /*#__PURE__*/
  function () {
    function u() {
      _classCallCheck(this, u);

      u.constructor_.apply(this, arguments);
    }

    _createClass(u, [{
      key: "getClass",
      value: function getClass() {
        return u;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "shouldNeverReachHere",
      value: function shouldNeverReachHere() {
        if (0 === arguments.length) u.shouldNeverReachHere(null);else if (1 === arguments.length) {
          var _t3 = arguments[0];
          throw new h("Should never reach here" + (null !== _t3 ? ": " + _t3 : ""));
        }
      }
    }, {
      key: "isTrue",
      value: function isTrue() {
        if (1 === arguments.length) {
          var _t4 = arguments[0];
          u.isTrue(_t4, null);
        } else if (2 === arguments.length) {
          var _t5 = arguments[0],
              _e2 = arguments[1];
          if (!_t5) throw null === _e2 ? new h() : new h(_e2);
        }
      }
    }, {
      key: "equals",
      value: function equals() {
        if (2 === arguments.length) {
          var _t6 = arguments[0],
              _e3 = arguments[1];
          u.equals(_t6, _e3, null);
        } else if (3 === arguments.length) {
          var _t7 = arguments[0],
              _e4 = arguments[1],
              _n2 = arguments[2];
          if (!_e4.equals(_t7)) throw new h("Expected " + _t7 + " but encountered " + _e4 + (null !== _n2 ? ": " + _n2 : ""));
        }
      }
    }]);

    return u;
  }();

  u.constructor_ = function () {};

  var g =
  /*#__PURE__*/
  function () {
    function g() {
      _classCallCheck(this, g);

      g.constructor_.apply(this, arguments);
    }

    _createClass(g, [{
      key: "setOrdinate",
      value: function setOrdinate(t, e) {
        switch (t) {
          case g.X:
            this.x = e;
            break;

          case g.Y:
            this.y = e;
            break;

          case g.Z:
            this.z = e;
            break;

          default:
            throw new n("Invalid ordinate index: " + t);
        }
      }
    }, {
      key: "equals2D",
      value: function equals2D() {
        if (1 === arguments.length) {
          var _t8 = arguments[0];
          return this.x === _t8.x && this.y === _t8.y;
        }

        if (2 === arguments.length) {
          var _t9 = arguments[0],
              _n3 = arguments[1];
          return !!e.equalsWithTolerance(this.x, _t9.x, _n3) && !!e.equalsWithTolerance(this.y, _t9.y, _n3);
        }
      }
    }, {
      key: "getOrdinate",
      value: function getOrdinate(t) {
        switch (t) {
          case g.X:
            return this.x;

          case g.Y:
            return this.y;

          case g.Z:
            return this.z;
        }

        throw new n("Invalid ordinate index: " + t);
      }
    }, {
      key: "equals3D",
      value: function equals3D(t) {
        return this.x === t.x && this.y === t.y && (this.z === t.z || i.isNaN(this.z) && i.isNaN(t.z));
      }
    }, {
      key: "equals",
      value: function equals(t) {
        return t instanceof g && this.equals2D(t);
      }
    }, {
      key: "equalInZ",
      value: function equalInZ(t, n) {
        return e.equalsWithTolerance(this.z, t.z, n);
      }
    }, {
      key: "compareTo",
      value: function compareTo(t) {
        var e = t;
        return this.x < e.x ? -1 : this.x > e.x ? 1 : this.y < e.y ? -1 : this.y > e.y ? 1 : 0;
      }
    }, {
      key: "clone",
      value: function clone() {
        try {
          return null;
        } catch (t) {
          if (t instanceof CloneNotSupportedException) return u.shouldNeverReachHere("this shouldn't happen because this class is Cloneable"), null;
          throw t;
        }
      }
    }, {
      key: "copy",
      value: function copy() {
        return new g(this);
      }
    }, {
      key: "toString",
      value: function toString() {
        return "(" + this.x + ", " + this.y + ", " + this.z + ")";
      }
    }, {
      key: "distance3D",
      value: function distance3D(t) {
        var e = this.x - t.x,
            n = this.y - t.y,
            s = this.z - t.z;
        return Math.sqrt(e * e + n * n + s * s);
      }
    }, {
      key: "distance",
      value: function distance(t) {
        var e = this.x - t.x,
            n = this.y - t.y;
        return Math.sqrt(e * e + n * n);
      }
    }, {
      key: "hashCode",
      value: function hashCode() {
        var t = 17;
        return t = 37 * (t = 37 * t + g.hashCode(this.x)) + g.hashCode(this.y);
      }
    }, {
      key: "setCoordinate",
      value: function setCoordinate(t) {
        this.x = t.x, this.y = t.y, this.z = t.z;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return g;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [r, o, a];
      }
    }], [{
      key: "hashCode",
      value: function hashCode() {
        if (1 === arguments.length && "number" == typeof arguments[0]) {
          var _t10 = arguments[0],
              _e5 = i.doubleToLongBits(_t10);

          return Math.trunc(_e5 ^ _e5 >>> 32);
        }
      }
    }]);

    return g;
  }();

  var d =
  /*#__PURE__*/
  function () {
    function d() {
      _classCallCheck(this, d);

      d.constructor_.apply(this, arguments);
    }

    _createClass(d, [{
      key: "compare",
      value: function compare(t, e) {
        var n = t,
            s = e,
            i = d.compare(n.x, s.x);
        if (0 !== i) return i;
        var r = d.compare(n.y, s.y);
        return 0 !== r ? r : this._dimensionsToTest <= 2 ? 0 : d.compare(n.z, s.z);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return d;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [l];
      }
    }], [{
      key: "compare",
      value: function compare(t, e) {
        return t < e ? -1 : t > e ? 1 : i.isNaN(t) ? i.isNaN(e) ? 0 : -1 : i.isNaN(e) ? 1 : 0;
      }
    }]);

    return d;
  }();

  function _(t, e) {
    return t.interfaces_ && t.interfaces_.indexOf(e) > -1;
  }

  function f() {}

  function p(t) {
    this.message = t || "";
  }

  function m() {}

  function y(t) {
    this.message = t || "";
  }

  function x() {
    this.array_ = [], arguments[0] instanceof f && this.addAll(arguments[0]);
  }

  d.constructor_ = function () {
    if (this._dimensionsToTest = 2, 0 === arguments.length) d.constructor_.call(this, 2);else if (1 === arguments.length) {
      var _t11 = arguments[0];
      if (2 !== _t11 && 3 !== _t11) throw new n("only 2 or 3 dimensions may be specified");
      this._dimensionsToTest = _t11;
    }
  }, g.DimensionalComparator = d, g.constructor_ = function () {
    if (this.x = null, this.y = null, this.z = null, 0 === arguments.length) g.constructor_.call(this, 0, 0);else if (1 === arguments.length) {
      var _t12 = arguments[0];
      g.constructor_.call(this, _t12.x, _t12.y, _t12.z);
    } else if (2 === arguments.length) {
      var _t13 = arguments[0],
          _e6 = arguments[1];
      g.constructor_.call(this, _t13, _e6, g.NULL_ORDINATE);
    } else if (3 === arguments.length) {
      var _t14 = arguments[0],
          _e7 = arguments[1],
          _n4 = arguments[2];
      this.x = _t14, this.y = _e7, this.z = _n4;
    }
  }, g.serialVersionUID = 0x5cbf2c235c7e5800, g.NULL_ORDINATE = i.NaN, g.X = 0, g.Y = 1, g.Z = 2, f.prototype.add = function () {}, f.prototype.addAll = function () {}, f.prototype.isEmpty = function () {}, f.prototype.iterator = function () {}, f.prototype.size = function () {}, f.prototype.toArray = function () {}, f.prototype.remove = function () {}, p.prototype = new Error(), p.prototype.name = "IndexOutOfBoundsException", m.prototype = Object.create(f.prototype), m.prototype.constructor = m, m.prototype.get = function () {}, m.prototype.set = function () {}, m.prototype.isEmpty = function () {}, y.prototype = new Error(), y.prototype.name = "NoSuchElementException", x.prototype = Object.create(m.prototype), x.prototype.constructor = x, x.prototype.ensureCapacity = function () {}, x.prototype.interfaces_ = [m, f], x.prototype.add = function (t) {
    return 1 === arguments.length ? this.array_.push(t) : this.array_.splice(arguments[0], 0, arguments[1]), !0;
  }, x.prototype.clear = function () {
    this.array_ = [];
  }, x.prototype.addAll = function (t) {
    for (var _e8 = t.iterator(); _e8.hasNext();) {
      this.add(_e8.next());
    }

    return !0;
  }, x.prototype.set = function (t, e) {
    var n = this.array_[t];
    return this.array_[t] = e, n;
  }, x.prototype.iterator = function () {
    return new E(this);
  }, x.prototype.get = function (t) {
    if (t < 0 || t >= this.size()) throw new p();
    return this.array_[t];
  }, x.prototype.isEmpty = function () {
    return 0 === this.array_.length;
  }, x.prototype.size = function () {
    return this.array_.length;
  }, x.prototype.toArray = function () {
    var t = [];

    for (var _e9 = 0, _n5 = this.array_.length; _e9 < _n5; _e9++) {
      t.push(this.array_[_e9]);
    }

    return t;
  }, x.prototype.remove = function (t) {
    var e = !1;

    for (var _n6 = 0, _s3 = this.array_.length; _n6 < _s3; _n6++) {
      if (this.array_[_n6] === t) {
        this.array_.splice(_n6, 1), e = !0;
        break;
      }
    }

    return e;
  }, x.prototype.removeAll = function (t) {
    for (var _e10 = t.iterator(); _e10.hasNext();) {
      this.remove(_e10.next());
    }

    return !0;
  };

  var E = function E(t) {
    this.arrayList_ = t, this.position_ = 0;
  };

  E.prototype.next = function () {
    if (this.position_ === this.arrayList_.size()) throw new y();
    return this.arrayList_.get(this.position_++);
  }, E.prototype.hasNext = function () {
    return this.position_ < this.arrayList_.size();
  }, E.prototype.set = function (t) {
    return this.arrayList_.set(this.position_ - 1, t);
  }, E.prototype.remove = function () {
    this.arrayList_.remove(this.arrayList_.get(this.position_));
  };

  var I =
  /*#__PURE__*/
  function (_x) {
    _inherits(I, _x);

    function I() {
      var _this2;

      _classCallCheck(this, I);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(I).call(this)), I.constructor_.apply(_assertThisInitialized(_this2), arguments);
      return _this2;
    }

    _createClass(I, [{
      key: "getCoordinate",
      value: function getCoordinate(t) {
        return this.get(t);
      }
    }, {
      key: "addAll",
      value: function addAll() {
        if (2 === arguments.length && "boolean" == typeof arguments[1] && _(arguments[0], f)) {
          var _t15 = arguments[0],
              _e11 = arguments[1];

          var _n7 = !1;

          for (var _s4 = _t15.iterator(); _s4.hasNext();) {
            this.add(_s4.next(), _e11), _n7 = !0;
          }

          return _n7;
        }

        return _get(_getPrototypeOf(I.prototype), "addAll", this).apply(this, arguments);
      }
    }, {
      key: "clone",
      value: function clone() {
        var t = _get(_getPrototypeOf(I.prototype), "clone", this).call(this);

        for (var _e12 = 0; _e12 < this.size(); _e12++) {
          t.add(_e12, this.get(_e12).clone());
        }

        return t;
      }
    }, {
      key: "toCoordinateArray",
      value: function toCoordinateArray() {
        return this.toArray(I.coordArrayType);
      }
    }, {
      key: "add",
      value: function add() {
        if (1 === arguments.length) {
          var _t16 = arguments[0];

          _get(_getPrototypeOf(I.prototype), "add", this).call(this, _t16);
        } else if (2 === arguments.length) {
          if (arguments[0] instanceof Array && "boolean" == typeof arguments[1]) {
            var _t17 = arguments[0],
                _e13 = arguments[1];
            return this.add(_t17, _e13, !0), !0;
          }

          if (arguments[0] instanceof g && "boolean" == typeof arguments[1]) {
            var _t18 = arguments[0];

            if (!arguments[1] && this.size() >= 1) {
              if (this.get(this.size() - 1).equals2D(_t18)) return null;
            }

            _get(_getPrototypeOf(I.prototype), "add", this).call(this, _t18);
          } else if (arguments[0] instanceof Object && "boolean" == typeof arguments[1]) {
            var _t19 = arguments[0],
                _e14 = arguments[1];
            return this.add(_t19, _e14), !0;
          }
        } else if (3 === arguments.length) {
          if ("boolean" == typeof arguments[2] && arguments[0] instanceof Array && "boolean" == typeof arguments[1]) {
            var _t20 = arguments[0],
                _e15 = arguments[1];
            if (arguments[2]) for (var _n8 = 0; _n8 < _t20.length; _n8++) {
              this.add(_t20[_n8], _e15);
            } else for (var _n9 = _t20.length - 1; _n9 >= 0; _n9--) {
              this.add(_t20[_n9], _e15);
            }
            return !0;
          }

          if ("boolean" == typeof arguments[2] && Number.isInteger(arguments[0]) && arguments[1] instanceof g) {
            var _t21 = arguments[0],
                _e16 = arguments[1];

            if (!arguments[2]) {
              var _n10 = this.size();

              if (_n10 > 0) {
                if (_t21 > 0) {
                  if (this.get(_t21 - 1).equals2D(_e16)) return null;
                }

                if (_t21 < _n10) {
                  if (this.get(_t21).equals2D(_e16)) return null;
                }
              }
            }

            _get(_getPrototypeOf(I.prototype), "add", this).call(this, _t21, _e16);
          }
        } else if (4 === arguments.length) {
          var _t22 = arguments[0],
              _e17 = arguments[1],
              _n11 = arguments[2],
              _s5 = arguments[3];
          var _i3 = 1;
          _n11 > _s5 && (_i3 = -1);

          for (var _r2 = _n11; _r2 !== _s5; _r2 += _i3) {
            this.add(_t22[_r2], _e17);
          }

          return !0;
        }
      }
    }, {
      key: "closeRing",
      value: function closeRing() {
        this.size() > 0 && this.add(new g(this.get(0)), !1);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return I;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return I;
  }(x);

  I.constructor_ = function () {
    if (0 === arguments.length) ;else if (1 === arguments.length) {
      var _t23 = arguments[0];
      this.ensureCapacity(_t23.length), this.add(_t23, !0);
    } else if (2 === arguments.length) {
      var _t24 = arguments[0],
          _e18 = arguments[1];
      this.ensureCapacity(_t24.length), this.add(_t24, _e18);
    }
  }, I.coordArrayType = new Array(0).fill(null);

  var N =
  /*#__PURE__*/
  function () {
    function N() {
      _classCallCheck(this, N);

      N.constructor_.apply(this, arguments);
    }

    _createClass(N, [{
      key: "getArea",
      value: function getArea() {
        return this.getWidth() * this.getHeight();
      }
    }, {
      key: "equals",
      value: function equals(t) {
        if (!(t instanceof N)) return !1;
        var e = t;
        return this.isNull() ? e.isNull() : this._maxx === e.getMaxX() && this._maxy === e.getMaxY() && this._minx === e.getMinX() && this._miny === e.getMinY();
      }
    }, {
      key: "intersection",
      value: function intersection(t) {
        if (this.isNull() || t.isNull() || !this.intersects(t)) return new N();
        var e = this._minx > t._minx ? this._minx : t._minx,
            n = this._miny > t._miny ? this._miny : t._miny,
            s = this._maxx < t._maxx ? this._maxx : t._maxx,
            i = this._maxy < t._maxy ? this._maxy : t._maxy;
        return new N(e, s, n, i);
      }
    }, {
      key: "isNull",
      value: function isNull() {
        return this._maxx < this._minx;
      }
    }, {
      key: "getMaxX",
      value: function getMaxX() {
        return this._maxx;
      }
    }, {
      key: "covers",
      value: function covers() {
        if (1 === arguments.length) {
          if (arguments[0] instanceof g) {
            var _t25 = arguments[0];
            return this.covers(_t25.x, _t25.y);
          }

          if (arguments[0] instanceof N) {
            var _t26 = arguments[0];
            return !this.isNull() && !_t26.isNull() && _t26.getMinX() >= this._minx && _t26.getMaxX() <= this._maxx && _t26.getMinY() >= this._miny && _t26.getMaxY() <= this._maxy;
          }
        } else if (2 === arguments.length) {
          var _t27 = arguments[0],
              _e19 = arguments[1];
          return !this.isNull() && _t27 >= this._minx && _t27 <= this._maxx && _e19 >= this._miny && _e19 <= this._maxy;
        }
      }
    }, {
      key: "intersects",
      value: function intersects() {
        if (1 === arguments.length) {
          if (arguments[0] instanceof N) {
            var _t28 = arguments[0];
            return !this.isNull() && !_t28.isNull() && !(_t28._minx > this._maxx || _t28._maxx < this._minx || _t28._miny > this._maxy || _t28._maxy < this._miny);
          }

          if (arguments[0] instanceof g) {
            var _t29 = arguments[0];
            return this.intersects(_t29.x, _t29.y);
          }
        } else if (2 === arguments.length) {
          if (arguments[0] instanceof g && arguments[1] instanceof g) {
            var _t30 = arguments[0],
                _e20 = arguments[1];
            return !this.isNull() && !((_t30.x < _e20.x ? _t30.x : _e20.x) > this._maxx) && !((_t30.x > _e20.x ? _t30.x : _e20.x) < this._minx) && !((_t30.y < _e20.y ? _t30.y : _e20.y) > this._maxy) && !((_t30.y > _e20.y ? _t30.y : _e20.y) < this._miny);
          }

          if ("number" == typeof arguments[0] && "number" == typeof arguments[1]) {
            var _t31 = arguments[0],
                _e21 = arguments[1];
            return !this.isNull() && !(_t31 > this._maxx || _t31 < this._minx || _e21 > this._maxy || _e21 < this._miny);
          }
        }
      }
    }, {
      key: "getMinY",
      value: function getMinY() {
        return this._miny;
      }
    }, {
      key: "getMinX",
      value: function getMinX() {
        return this._minx;
      }
    }, {
      key: "expandToInclude",
      value: function expandToInclude() {
        if (1 === arguments.length) {
          if (arguments[0] instanceof g) {
            var _t32 = arguments[0];
            this.expandToInclude(_t32.x, _t32.y);
          } else if (arguments[0] instanceof N) {
            var _t33 = arguments[0];
            if (_t33.isNull()) return null;
            this.isNull() ? (this._minx = _t33.getMinX(), this._maxx = _t33.getMaxX(), this._miny = _t33.getMinY(), this._maxy = _t33.getMaxY()) : (_t33._minx < this._minx && (this._minx = _t33._minx), _t33._maxx > this._maxx && (this._maxx = _t33._maxx), _t33._miny < this._miny && (this._miny = _t33._miny), _t33._maxy > this._maxy && (this._maxy = _t33._maxy));
          }
        } else if (2 === arguments.length) {
          var _t34 = arguments[0],
              _e22 = arguments[1];
          this.isNull() ? (this._minx = _t34, this._maxx = _t34, this._miny = _e22, this._maxy = _e22) : (_t34 < this._minx && (this._minx = _t34), _t34 > this._maxx && (this._maxx = _t34), _e22 < this._miny && (this._miny = _e22), _e22 > this._maxy && (this._maxy = _e22));
        }
      }
    }, {
      key: "minExtent",
      value: function minExtent() {
        if (this.isNull()) return 0;
        var t = this.getWidth(),
            e = this.getHeight();
        return t < e ? t : e;
      }
    }, {
      key: "getWidth",
      value: function getWidth() {
        return this.isNull() ? 0 : this._maxx - this._minx;
      }
    }, {
      key: "compareTo",
      value: function compareTo(t) {
        var e = t;
        return this.isNull() ? e.isNull() ? 0 : -1 : e.isNull() ? 1 : this._minx < e._minx ? -1 : this._minx > e._minx ? 1 : this._miny < e._miny ? -1 : this._miny > e._miny ? 1 : this._maxx < e._maxx ? -1 : this._maxx > e._maxx ? 1 : this._maxy < e._maxy ? -1 : this._maxy > e._maxy ? 1 : 0;
      }
    }, {
      key: "translate",
      value: function translate(t, e) {
        if (this.isNull()) return null;
        this.init(this.getMinX() + t, this.getMaxX() + t, this.getMinY() + e, this.getMaxY() + e);
      }
    }, {
      key: "toString",
      value: function toString() {
        return "Env[" + this._minx + " : " + this._maxx + ", " + this._miny + " : " + this._maxy + "]";
      }
    }, {
      key: "setToNull",
      value: function setToNull() {
        this._minx = 0, this._maxx = -1, this._miny = 0, this._maxy = -1;
      }
    }, {
      key: "getHeight",
      value: function getHeight() {
        return this.isNull() ? 0 : this._maxy - this._miny;
      }
    }, {
      key: "maxExtent",
      value: function maxExtent() {
        if (this.isNull()) return 0;
        var t = this.getWidth(),
            e = this.getHeight();
        return t > e ? t : e;
      }
    }, {
      key: "expandBy",
      value: function expandBy() {
        if (1 === arguments.length) {
          var _t35 = arguments[0];
          this.expandBy(_t35, _t35);
        } else if (2 === arguments.length) {
          var _t36 = arguments[0],
              _e23 = arguments[1];
          if (this.isNull()) return null;
          this._minx -= _t36, this._maxx += _t36, this._miny -= _e23, this._maxy += _e23, (this._minx > this._maxx || this._miny > this._maxy) && this.setToNull();
        }
      }
    }, {
      key: "contains",
      value: function contains() {
        if (1 === arguments.length) {
          if (arguments[0] instanceof N) {
            var _t37 = arguments[0];
            return this.covers(_t37);
          }

          if (arguments[0] instanceof g) {
            var _t38 = arguments[0];
            return this.covers(_t38);
          }
        } else if (2 === arguments.length) {
          var _t39 = arguments[0],
              _e24 = arguments[1];
          return this.covers(_t39, _e24);
        }
      }
    }, {
      key: "centre",
      value: function centre() {
        return this.isNull() ? null : new g((this.getMinX() + this.getMaxX()) / 2, (this.getMinY() + this.getMaxY()) / 2);
      }
    }, {
      key: "init",
      value: function init() {
        if (0 === arguments.length) this.setToNull();else if (1 === arguments.length) {
          if (arguments[0] instanceof g) {
            var _t40 = arguments[0];
            this.init(_t40.x, _t40.x, _t40.y, _t40.y);
          } else if (arguments[0] instanceof N) {
            var _t41 = arguments[0];
            this._minx = _t41._minx, this._maxx = _t41._maxx, this._miny = _t41._miny, this._maxy = _t41._maxy;
          }
        } else if (2 === arguments.length) {
          var _t42 = arguments[0],
              _e25 = arguments[1];
          this.init(_t42.x, _e25.x, _t42.y, _e25.y);
        } else if (4 === arguments.length) {
          var _t43 = arguments[0],
              _e26 = arguments[1],
              _n12 = arguments[2],
              _s6 = arguments[3];
          _t43 < _e26 ? (this._minx = _t43, this._maxx = _e26) : (this._minx = _e26, this._maxx = _t43), _n12 < _s6 ? (this._miny = _n12, this._maxy = _s6) : (this._miny = _s6, this._maxy = _n12);
        }
      }
    }, {
      key: "getMaxY",
      value: function getMaxY() {
        return this._maxy;
      }
    }, {
      key: "distance",
      value: function distance(t) {
        if (this.intersects(t)) return 0;
        var e = 0;
        this._maxx < t._minx ? e = t._minx - this._maxx : this._minx > t._maxx && (e = this._minx - t._maxx);
        var n = 0;
        return this._maxy < t._miny ? n = t._miny - this._maxy : this._miny > t._maxy && (n = this._miny - t._maxy), 0 === e ? n : 0 === n ? e : Math.sqrt(e * e + n * n);
      }
    }, {
      key: "hashCode",
      value: function hashCode() {
        var t = 17;
        return t = 37 * (t = 37 * (t = 37 * (t = 37 * t + g.hashCode(this._minx)) + g.hashCode(this._maxx)) + g.hashCode(this._miny)) + g.hashCode(this._maxy);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return N;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [r, a];
      }
    }], [{
      key: "intersects",
      value: function intersects() {
        if (3 === arguments.length) {
          var _t44 = arguments[0],
              _e27 = arguments[1],
              _n13 = arguments[2];
          return _n13.x >= (_t44.x < _e27.x ? _t44.x : _e27.x) && _n13.x <= (_t44.x > _e27.x ? _t44.x : _e27.x) && _n13.y >= (_t44.y < _e27.y ? _t44.y : _e27.y) && _n13.y <= (_t44.y > _e27.y ? _t44.y : _e27.y);
        }

        if (4 === arguments.length) {
          var _t45 = arguments[0],
              _e28 = arguments[1],
              _n14 = arguments[2],
              _s7 = arguments[3];

          var _i4 = Math.min(_n14.x, _s7.x),
              _r3 = Math.max(_n14.x, _s7.x),
              _o2 = Math.min(_t45.x, _e28.x),
              _l = Math.max(_t45.x, _e28.x);

          return !(_o2 > _r3) && !(_l < _i4) && (_i4 = Math.min(_n14.y, _s7.y), _r3 = Math.max(_n14.y, _s7.y), _o2 = Math.min(_t45.y, _e28.y), _l = Math.max(_t45.y, _e28.y), !(_o2 > _r3) && !(_l < _i4));
        }
      }
    }]);

    return N;
  }();

  function C() {}

  N.constructor_ = function () {
    if (this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, 0 === arguments.length) this.init();else if (1 === arguments.length) {
      if (arguments[0] instanceof g) {
        var _t46 = arguments[0];
        this.init(_t46.x, _t46.x, _t46.y, _t46.y);
      } else if (arguments[0] instanceof N) {
        var _t47 = arguments[0];
        this.init(_t47);
      }
    } else if (2 === arguments.length) {
      var _t48 = arguments[0],
          _e29 = arguments[1];
      this.init(_t48.x, _e29.x, _t48.y, _e29.y);
    } else if (4 === arguments.length) {
      var _t49 = arguments[0],
          _e30 = arguments[1],
          _n15 = arguments[2],
          _s8 = arguments[3];
      this.init(_t49, _e30, _n15, _s8);
    }
  }, N.serialVersionUID = 0x51845cd552189800;

  var S =
  /*#__PURE__*/
  function (_C) {
    _inherits(S, _C);

    function S() {
      var _this3;

      _classCallCheck(this, S);

      _this3 = _possibleConstructorReturn(this, _getPrototypeOf(S).call(this)), S.constructor_.apply(_assertThisInitialized(_this3), arguments);
      return _this3;
    }

    _createClass(S, [{
      key: "getClass",
      value: function getClass() {
        return S;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return S;
  }(C);

  function w(t) {
    this.str = t;
  }

  function L(t) {
    this.value = t;
  }

  function T() {}

  S.constructor_ = function () {
    C.constructor_.call(this, "Projective point not representable on the Cartesian plane.");
  }, w.prototype.append = function (t) {
    this.str += t;
  }, w.prototype.setCharAt = function (t, e) {
    this.str = this.str.substr(0, t) + e + this.str.substr(t + 1);
  }, w.prototype.toString = function (t) {
    return this.str;
  }, L.prototype.intValue = function () {
    return this.value;
  }, L.prototype.compareTo = function (t) {
    return this.value < t ? -1 : this.value > t ? 1 : 0;
  }, L.isNaN = function (t) {
    return Number.isNaN(t);
  }, T.isWhitespace = function (t) {
    return t <= 32 && t >= 0 || 127 === t;
  }, T.toUpperCase = function (t) {
    return t.toUpperCase();
  };

  var R =
  /*#__PURE__*/
  function () {
    function R() {
      _classCallCheck(this, R);

      R.constructor_.apply(this, arguments);
    }

    _createClass(R, [{
      key: "le",
      value: function le(t) {
        return this._hi < t._hi || this._hi === t._hi && this._lo <= t._lo;
      }
    }, {
      key: "extractSignificantDigits",
      value: function extractSignificantDigits(t, e) {
        var n = this.abs(),
            s = R.magnitude(n._hi);
        var i = R.TEN.pow(s);
        (n = n.divide(i)).gt(R.TEN) ? (n = n.divide(R.TEN), s += 1) : n.lt(R.ONE) && (n = n.multiply(R.TEN), s -= 1);
        var r = s + 1,
            o = new w(),
            l = R.MAX_PRINT_DIGITS - 1;

        for (var _e31 = 0; _e31 <= l; _e31++) {
          t && _e31 === r && o.append(".");

          var _s9 = Math.trunc(n._hi);

          if (_s9 < 0) break;

          var _i5 = !1,
              _a = 0;

          _s9 > 9 ? (_i5 = !0, _a = "9") : _a = "0" + _s9, o.append(_a), n = n.subtract(R.valueOf(_s9)).multiply(R.TEN), _i5 && n.selfAdd(R.TEN);

          var _c2 = !0;

          var _h = R.magnitude(n._hi);

          if (_h < 0 && Math.abs(_h) >= l - _e31 && (_c2 = !1), !_c2) break;
        }

        return e[0] = s, o.toString();
      }
    }, {
      key: "sqr",
      value: function sqr() {
        return this.multiply(this);
      }
    }, {
      key: "doubleValue",
      value: function doubleValue() {
        return this._hi + this._lo;
      }
    }, {
      key: "subtract",
      value: function subtract() {
        if (arguments[0] instanceof R) {
          var _t50 = arguments[0];
          return this.add(_t50.negate());
        }

        if ("number" == typeof arguments[0]) {
          var _t51 = arguments[0];
          return this.add(-_t51);
        }
      }
    }, {
      key: "equals",
      value: function equals() {
        if (1 === arguments.length && arguments[0] instanceof R) {
          var _t52 = arguments[0];
          return this._hi === _t52._hi && this._lo === _t52._lo;
        }
      }
    }, {
      key: "isZero",
      value: function isZero() {
        return 0 === this._hi && 0 === this._lo;
      }
    }, {
      key: "selfSubtract",
      value: function selfSubtract() {
        if (arguments[0] instanceof R) {
          var _t53 = arguments[0];
          return this.isNaN() ? this : this.selfAdd(-_t53._hi, -_t53._lo);
        }

        if ("number" == typeof arguments[0]) {
          var _t54 = arguments[0];
          return this.isNaN() ? this : this.selfAdd(-_t54, 0);
        }
      }
    }, {
      key: "getSpecialNumberString",
      value: function getSpecialNumberString() {
        return this.isZero() ? "0.0" : this.isNaN() ? "NaN " : null;
      }
    }, {
      key: "min",
      value: function min(t) {
        return this.le(t) ? this : t;
      }
    }, {
      key: "selfDivide",
      value: function selfDivide() {
        if (1 === arguments.length) {
          if (arguments[0] instanceof R) {
            var _t55 = arguments[0];
            return this.selfDivide(_t55._hi, _t55._lo);
          }

          if ("number" == typeof arguments[0]) {
            var _t56 = arguments[0];
            return this.selfDivide(_t56, 0);
          }
        } else if (2 === arguments.length) {
          var _t57 = arguments[0],
              _e32 = arguments[1];
          var _n16 = null,
              _s10 = null,
              _i6 = null,
              _r4 = null,
              _o3 = null,
              _l2 = null,
              _a2 = null,
              _c3 = null;
          return _o3 = this._hi / _t57, _n16 = (_l2 = R.SPLIT * _o3) - _o3, _c3 = R.SPLIT * _t57, _c3 = (_n16 = _l2 - _n16) * (_i6 = _c3 - (_i6 = _c3 - _t57)) - (_a2 = _o3 * _t57) + _n16 * (_r4 = _t57 - _i6) + (_s10 = _o3 - _n16) * _i6 + _s10 * _r4, _c3 = _o3 + (_l2 = (this._hi - _a2 - _c3 + this._lo - _o3 * _e32) / _t57), this._hi = _c3, this._lo = _o3 - _c3 + _l2, this;
        }
      }
    }, {
      key: "dump",
      value: function dump() {
        return "DD<" + this._hi + ", " + this._lo + ">";
      }
    }, {
      key: "divide",
      value: function divide() {
        if (arguments[0] instanceof R) {
          var _t58 = arguments[0];
          var _e33 = null,
              _n17 = null,
              _s11 = null,
              _i7 = null,
              _r5 = null,
              _o4 = null,
              _l3 = null,
              _a3 = null;
          return _r5 = this._hi / _t58._hi, _e33 = (_o4 = R.SPLIT * _r5) - _r5, _a3 = R.SPLIT * _t58._hi, _n17 = _r5 - (_e33 = _o4 - _e33), _s11 = _a3 - _t58._hi, _l3 = _r5 * _t58._hi, _a3 = _e33 * (_s11 = _a3 - _s11) - _l3 + _e33 * (_i7 = _t58._hi - _s11) + _n17 * _s11 + _n17 * _i7, _o4 = (this._hi - _l3 - _a3 + this._lo - _r5 * _t58._lo) / _t58._hi, new R(_a3 = _r5 + _o4, _r5 - _a3 + _o4);
        }

        if ("number" == typeof arguments[0]) {
          var _t59 = arguments[0];
          return i.isNaN(_t59) ? R.createNaN() : R.copy(this).selfDivide(_t59, 0);
        }
      }
    }, {
      key: "ge",
      value: function ge(t) {
        return this._hi > t._hi || this._hi === t._hi && this._lo >= t._lo;
      }
    }, {
      key: "pow",
      value: function pow(t) {
        if (0 === t) return R.valueOf(1);
        var e = new R(this),
            n = R.valueOf(1),
            s = Math.abs(t);
        if (s > 1) for (; s > 0;) {
          s % 2 == 1 && n.selfMultiply(e), (s /= 2) > 0 && (e = e.sqr());
        } else n = e;
        return t < 0 ? n.reciprocal() : n;
      }
    }, {
      key: "ceil",
      value: function ceil() {
        if (this.isNaN()) return R.NaN;
        var t = Math.ceil(this._hi);
        var e = 0;
        return t === this._hi && (e = Math.ceil(this._lo)), new R(t, e);
      }
    }, {
      key: "compareTo",
      value: function compareTo(t) {
        var e = t;
        return this._hi < e._hi ? -1 : this._hi > e._hi ? 1 : this._lo < e._lo ? -1 : this._lo > e._lo ? 1 : 0;
      }
    }, {
      key: "rint",
      value: function rint() {
        if (this.isNaN()) return this;
        return this.add(.5).floor();
      }
    }, {
      key: "setValue",
      value: function setValue() {
        if (arguments[0] instanceof R) {
          var _t60 = arguments[0];
          return this.init(_t60), this;
        }

        if ("number" == typeof arguments[0]) {
          var _t61 = arguments[0];
          return this.init(_t61), this;
        }
      }
    }, {
      key: "max",
      value: function max(t) {
        return this.ge(t) ? this : t;
      }
    }, {
      key: "sqrt",
      value: function sqrt() {
        if (this.isZero()) return R.valueOf(0);
        if (this.isNegative()) return R.NaN;
        var t = 1 / Math.sqrt(this._hi),
            e = this._hi * t,
            n = R.valueOf(e),
            s = this.subtract(n.sqr())._hi * (.5 * t);
        return n.add(s);
      }
    }, {
      key: "selfAdd",
      value: function selfAdd() {
        if (1 === arguments.length) {
          if (arguments[0] instanceof R) {
            var _t62 = arguments[0];
            return this.selfAdd(_t62._hi, _t62._lo);
          }

          if ("number" == typeof arguments[0]) {
            var _t63 = arguments[0];
            var _e34 = null,
                _n18 = null,
                _s12 = null,
                _i8 = null,
                _r6 = null,
                _o5 = null;
            return _i8 = (_s12 = this._hi + _t63) - (_r6 = _s12 - this._hi), _n18 = (_o5 = (_i8 = _t63 - _r6 + (this._hi - _i8)) + this._lo) + (_s12 - (_e34 = _s12 + _o5)), this._hi = _e34 + _n18, this._lo = _n18 + (_e34 - this._hi), this;
          }
        } else if (2 === arguments.length) {
          var _t64 = arguments[0],
              _e35 = arguments[1];
          var _n19 = null,
              _s13 = null,
              _i9 = null,
              _r7 = null,
              _o6 = null,
              _l4 = null,
              _a4 = null,
              _c4 = null;
          _o6 = this._hi + _t64, _i9 = this._lo + _e35, _a4 = _o6 - this._hi, _c4 = _i9 - this._lo, _l4 = _o6 - _a4, _r7 = _i9 - _c4, _l4 = _t64 - _a4 + (this._hi - _l4), _r7 = _e35 - _c4 + (this._lo - _r7);

          var _h2 = (_n19 = _o6 + (_a4 = _l4 + _i9)) + (_a4 = _r7 + (_s13 = _a4 + (_o6 - _n19))),
              _u = _a4 + (_n19 - _h2);

          return this._hi = _h2, this._lo = _u, this;
        }
      }
    }, {
      key: "selfMultiply",
      value: function selfMultiply() {
        if (1 === arguments.length) {
          if (arguments[0] instanceof R) {
            var _t65 = arguments[0];
            return this.selfMultiply(_t65._hi, _t65._lo);
          }

          if ("number" == typeof arguments[0]) {
            var _t66 = arguments[0];
            return this.selfMultiply(_t66, 0);
          }
        } else if (2 === arguments.length) {
          var _t67 = arguments[0],
              _e36 = arguments[1];
          var _n20 = null,
              _s14 = null,
              _i10 = null,
              _r8 = null,
              _o7 = null,
              _l5 = null;
          _n20 = (_o7 = R.SPLIT * this._hi) - this._hi, _l5 = R.SPLIT * _t67, _n20 = _o7 - _n20, _s14 = this._hi - _n20, _i10 = _l5 - _t67;

          var _a5 = (_o7 = this._hi * _t67) + (_l5 = _n20 * (_i10 = _l5 - _i10) - _o7 + _n20 * (_r8 = _t67 - _i10) + _s14 * _i10 + _s14 * _r8 + (this._hi * _e36 + this._lo * _t67)),
              _c5 = _l5 + (_n20 = _o7 - _a5);

          return this._hi = _a5, this._lo = _c5, this;
        }
      }
    }, {
      key: "selfSqr",
      value: function selfSqr() {
        return this.selfMultiply(this);
      }
    }, {
      key: "floor",
      value: function floor() {
        if (this.isNaN()) return R.NaN;
        var t = Math.floor(this._hi);
        var e = 0;
        return t === this._hi && (e = Math.floor(this._lo)), new R(t, e);
      }
    }, {
      key: "negate",
      value: function negate() {
        return this.isNaN() ? this : new R(-this._hi, -this._lo);
      }
    }, {
      key: "clone",
      value: function clone() {
        try {
          return null;
        } catch (t) {
          if (t instanceof CloneNotSupportedException) return null;
          throw t;
        }
      }
    }, {
      key: "multiply",
      value: function multiply() {
        if (arguments[0] instanceof R) {
          var _t68 = arguments[0];
          return _t68.isNaN() ? R.createNaN() : R.copy(this).selfMultiply(_t68);
        }

        if ("number" == typeof arguments[0]) {
          var _t69 = arguments[0];
          return i.isNaN(_t69) ? R.createNaN() : R.copy(this).selfMultiply(_t69, 0);
        }
      }
    }, {
      key: "isNaN",
      value: function isNaN() {
        return i.isNaN(this._hi);
      }
    }, {
      key: "intValue",
      value: function intValue() {
        return Math.trunc(this._hi);
      }
    }, {
      key: "toString",
      value: function toString() {
        var t = R.magnitude(this._hi);
        return t >= -3 && t <= 20 ? this.toStandardNotation() : this.toSciNotation();
      }
    }, {
      key: "toStandardNotation",
      value: function toStandardNotation() {
        var t = this.getSpecialNumberString();
        if (null !== t) return t;
        var e = new Array(1).fill(null),
            n = this.extractSignificantDigits(!0, e),
            s = e[0] + 1;
        var i = n;
        if ("." === n.charAt(0)) i = "0" + n;else if (s < 0) i = "0." + R.stringOfChar("0", -s) + n;else if (-1 === n.indexOf(".")) {
          var _t70 = s - n.length;

          i = n + R.stringOfChar("0", _t70) + ".0";
        }
        return this.isNegative() ? "-" + i : i;
      }
    }, {
      key: "reciprocal",
      value: function reciprocal() {
        var t = null,
            e = null,
            n = null,
            s = null,
            i = null,
            r = null,
            o = null,
            l = null;
        e = (i = 1 / this._hi) - (t = (r = R.SPLIT * i) - (t = r - i)), n = (l = R.SPLIT * this._hi) - this._hi;
        var a = i + (r = (1 - (o = i * this._hi) - (l = t * (n = l - n) - o + t * (s = this._hi - n) + e * n + e * s) - i * this._lo) / this._hi);
        return new R(a, i - a + r);
      }
    }, {
      key: "toSciNotation",
      value: function toSciNotation() {
        if (this.isZero()) return R.SCI_NOT_ZERO;
        var t = this.getSpecialNumberString();
        if (null !== t) return t;
        var e = new Array(1).fill(null),
            n = this.extractSignificantDigits(!1, e),
            s = R.SCI_NOT_EXPONENT_CHAR + e[0];
        if ("0" === n.charAt(0)) throw new IllegalStateException("Found leading zero: " + n);
        var i = "";
        n.length > 1 && (i = n.substring(1));
        var r = n.charAt(0) + "." + i;
        return this.isNegative() ? "-" + r + s : r + s;
      }
    }, {
      key: "abs",
      value: function abs() {
        return this.isNaN() ? R.NaN : this.isNegative() ? this.negate() : new R(this);
      }
    }, {
      key: "isPositive",
      value: function isPositive() {
        return this._hi > 0 || 0 === this._hi && this._lo > 0;
      }
    }, {
      key: "lt",
      value: function lt(t) {
        return this._hi < t._hi || this._hi === t._hi && this._lo < t._lo;
      }
    }, {
      key: "add",
      value: function add() {
        if (arguments[0] instanceof R) {
          var _t71 = arguments[0];
          return R.copy(this).selfAdd(_t71);
        }

        if ("number" == typeof arguments[0]) {
          var _t72 = arguments[0];
          return R.copy(this).selfAdd(_t72);
        }
      }
    }, {
      key: "init",
      value: function init() {
        if (1 === arguments.length) {
          if ("number" == typeof arguments[0]) {
            var _t73 = arguments[0];
            this._hi = _t73, this._lo = 0;
          } else if (arguments[0] instanceof R) {
            var _t74 = arguments[0];
            this._hi = _t74._hi, this._lo = _t74._lo;
          }
        } else if (2 === arguments.length) {
          var _t75 = arguments[0],
              _e37 = arguments[1];
          this._hi = _t75, this._lo = _e37;
        }
      }
    }, {
      key: "gt",
      value: function gt(t) {
        return this._hi > t._hi || this._hi === t._hi && this._lo > t._lo;
      }
    }, {
      key: "isNegative",
      value: function isNegative() {
        return this._hi < 0 || 0 === this._hi && this._lo < 0;
      }
    }, {
      key: "trunc",
      value: function trunc() {
        return this.isNaN() ? R.NaN : this.isPositive() ? this.floor() : this.ceil();
      }
    }, {
      key: "signum",
      value: function signum() {
        return this._hi > 0 ? 1 : this._hi < 0 ? -1 : this._lo > 0 ? 1 : this._lo < 0 ? -1 : 0;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return R;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [a, r, o];
      }
    }], [{
      key: "sqr",
      value: function sqr(t) {
        return R.valueOf(t).selfMultiply(t);
      }
    }, {
      key: "valueOf",
      value: function valueOf() {
        if ("string" == typeof arguments[0]) {
          var _t76 = arguments[0];
          return R.parse(_t76);
        }

        if ("number" == typeof arguments[0]) {
          var _t77 = arguments[0];
          return new R(_t77);
        }
      }
    }, {
      key: "sqrt",
      value: function sqrt(t) {
        return R.valueOf(t).sqrt();
      }
    }, {
      key: "parse",
      value: function parse(t) {
        var e = 0;
        var n = t.length;

        for (; T.isWhitespace(t.charAt(e));) {
          e++;
        }

        var s = !1;

        if (e < n) {
          var _n21 = t.charAt(e);

          "-" !== _n21 && "+" !== _n21 || (e++, "-" === _n21 && (s = !0));
        }

        var i = new R();
        var r = 0,
            o = 0,
            l = 0;

        for (; !(e >= n);) {
          var _n22 = t.charAt(e);

          if (e++, T.isDigit(_n22)) {
            var _t78 = _n22 - "0";

            i.selfMultiply(R.TEN), i.selfAdd(_t78), r++;
          } else {
            if ("." !== _n22) {
              if ("e" === _n22 || "E" === _n22) {
                var _n23 = t.substring(e);

                try {
                  l = L.parseInt(_n23);
                } catch (e) {
                  throw e instanceof NumberFormatException ? new NumberFormatException("Invalid exponent " + _n23 + " in string " + t) : e;
                }

                break;
              }

              throw new NumberFormatException("Unexpected character '" + _n22 + "' at position " + e + " in string " + t);
            }

            o = r;
          }
        }

        var a = i;
        var c = r - o - l;
        if (0 === c) a = i;else if (c > 0) {
          var _t79 = R.TEN.pow(c);

          a = i.divide(_t79);
        } else if (c < 0) {
          var _t80 = R.TEN.pow(-c);

          a = i.multiply(_t80);
        }
        return s ? a.negate() : a;
      }
    }, {
      key: "createNaN",
      value: function createNaN() {
        return new R(i.NaN, i.NaN);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return new R(t);
      }
    }, {
      key: "magnitude",
      value: function magnitude(t) {
        var e = Math.abs(t),
            n = Math.log(e) / Math.log(10);
        var s = Math.trunc(Math.floor(n));
        return 10 * Math.pow(10, s) <= e && (s += 1), s;
      }
    }, {
      key: "stringOfChar",
      value: function stringOfChar(t, e) {
        var n = new w();

        for (var _s15 = 0; _s15 < e; _s15++) {
          n.append(t);
        }

        return n.toString();
      }
    }]);

    return R;
  }();

  R.constructor_ = function () {
    if (this._hi = 0, this._lo = 0, 0 === arguments.length) this.init(0);else if (1 === arguments.length) {
      if ("number" == typeof arguments[0]) {
        var _t81 = arguments[0];
        this.init(_t81);
      } else if (arguments[0] instanceof R) {
        var _t82 = arguments[0];
        this.init(_t82);
      } else if ("string" == typeof arguments[0]) {
        var _t83 = arguments[0];
        R.constructor_.call(this, R.parse(_t83));
      }
    } else if (2 === arguments.length) {
      var _t84 = arguments[0],
          _e38 = arguments[1];
      this.init(_t84, _e38);
    }
  }, R.PI = new R(3.141592653589793, 12246467991473532e-32), R.TWO_PI = new R(6.283185307179586, 24492935982947064e-32), R.PI_2 = new R(1.5707963267948966, 6123233995736766e-32), R.E = new R(2.718281828459045, 14456468917292502e-32), R.NaN = new R(i.NaN, i.NaN), R.EPS = 123259516440783e-46, R.SPLIT = 134217729, R.MAX_PRINT_DIGITS = 32, R.TEN = R.valueOf(10), R.ONE = R.valueOf(1), R.SCI_NOT_EXPONENT_CHAR = "E", R.SCI_NOT_ZERO = "0.0E0";

  var P =
  /*#__PURE__*/
  function () {
    function P() {
      _classCallCheck(this, P);

      P.constructor_.apply(this, arguments);
    }

    _createClass(P, [{
      key: "getClass",
      value: function getClass() {
        return P;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "orientationIndex",
      value: function orientationIndex(t, e, n) {
        var s = P.orientationIndexFilter(t, e, n);
        if (s <= 1) return s;
        var i = R.valueOf(e.x).selfAdd(-t.x),
            r = R.valueOf(e.y).selfAdd(-t.y),
            o = R.valueOf(n.x).selfAdd(-e.x),
            l = R.valueOf(n.y).selfAdd(-e.y);
        return i.selfMultiply(l).selfSubtract(r.selfMultiply(o)).signum();
      }
    }, {
      key: "signOfDet2x2",
      value: function signOfDet2x2() {
        if (arguments[3] instanceof R && arguments[2] instanceof R && arguments[0] instanceof R && arguments[1] instanceof R) {
          var _t85 = arguments[0],
              _e39 = arguments[1],
              _n24 = arguments[2],
              _s16 = arguments[3];
          return _t85.multiply(_s16).selfSubtract(_e39.multiply(_n24)).signum();
        }

        if ("number" == typeof arguments[3] && "number" == typeof arguments[2] && "number" == typeof arguments[0] && "number" == typeof arguments[1]) {
          var _t86 = arguments[0],
              _e40 = arguments[1],
              _n25 = arguments[2],
              _s17 = arguments[3],
              _i11 = R.valueOf(_t86),
              _r9 = R.valueOf(_e40),
              _o8 = R.valueOf(_n25),
              _l6 = R.valueOf(_s17);

          return _i11.multiply(_l6).selfSubtract(_r9.multiply(_o8)).signum();
        }
      }
    }, {
      key: "intersection",
      value: function intersection(t, e, n, s) {
        var i = R.valueOf(s.y).selfSubtract(n.y).selfMultiply(R.valueOf(e.x).selfSubtract(t.x)),
            r = R.valueOf(s.x).selfSubtract(n.x).selfMultiply(R.valueOf(e.y).selfSubtract(t.y)),
            o = i.subtract(r),
            l = R.valueOf(s.x).selfSubtract(n.x).selfMultiply(R.valueOf(t.y).selfSubtract(n.y)),
            a = R.valueOf(s.y).selfSubtract(n.y).selfMultiply(R.valueOf(t.x).selfSubtract(n.x)),
            c = l.subtract(a).selfDivide(o).doubleValue(),
            h = R.valueOf(t.x).selfAdd(R.valueOf(e.x).selfSubtract(t.x).selfMultiply(c)).doubleValue(),
            u = R.valueOf(e.x).selfSubtract(t.x).selfMultiply(R.valueOf(t.y).selfSubtract(n.y)),
            d = R.valueOf(e.y).selfSubtract(t.y).selfMultiply(R.valueOf(t.x).selfSubtract(n.x)),
            _ = u.subtract(d).selfDivide(o).doubleValue(),
            f = R.valueOf(n.y).selfAdd(R.valueOf(s.y).selfSubtract(n.y).selfMultiply(_)).doubleValue();

        return new g(h, f);
      }
    }, {
      key: "orientationIndexFilter",
      value: function orientationIndexFilter(t, e, n) {
        var s = null;
        var i = (t.x - n.x) * (e.y - n.y),
            r = (t.y - n.y) * (e.x - n.x),
            o = i - r;

        if (i > 0) {
          if (r <= 0) return P.signum(o);
          s = i + r;
        } else {
          if (!(i < 0)) return P.signum(o);
          if (r >= 0) return P.signum(o);
          s = -i - r;
        }

        var l = P.DP_SAFE_EPSILON * s;
        return o >= l || -o >= l ? P.signum(o) : 2;
      }
    }, {
      key: "signum",
      value: function signum(t) {
        return t > 0 ? 1 : t < 0 ? -1 : 0;
      }
    }]);

    return P;
  }();

  P.constructor_ = function () {}, P.DP_SAFE_EPSILON = 1e-15;

  var v =
  /*#__PURE__*/
  function () {
    function v() {
      _classCallCheck(this, v);

      v.constructor_.apply(this, arguments);
    }

    _createClass(v, [{
      key: "getClass",
      value: function getClass() {
        return v;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "index",
      value: function index(t, e, n) {
        return P.orientationIndex(t, e, n);
      }
    }, {
      key: "isCCW",
      value: function isCCW(t) {
        var e = t.length - 1;
        if (e < 3) throw new n("Ring has fewer than 4 points, so orientation cannot be determined");
        var s = t[0],
            i = 0;

        for (var _n26 = 1; _n26 <= e; _n26++) {
          var _e41 = t[_n26];
          _e41.y > s.y && (s = _e41, i = _n26);
        }

        var r = i;

        do {
          (r -= 1) < 0 && (r = e);
        } while (t[r].equals2D(s) && r !== i);

        var o = i;

        do {
          o = (o + 1) % e;
        } while (t[o].equals2D(s) && o !== i);

        var l = t[r],
            a = t[o];
        if (l.equals2D(s) || a.equals2D(s) || l.equals2D(a)) return !1;
        var c = v.index(l, s, a);
        var h = null;
        return h = 0 === c ? l.x > a.x : c > 0;
      }
    }]);

    return v;
  }();

  function O() {}

  v.constructor_ = function () {}, v.CLOCKWISE = -1, v.RIGHT = v.CLOCKWISE, v.COUNTERCLOCKWISE = 1, v.LEFT = v.COUNTERCLOCKWISE, v.COLLINEAR = 0, v.STRAIGHT = v.COLLINEAR, O.arraycopy = function (t, e, n, s, i) {
    var r = 0;

    for (var _o9 = e; _o9 < e + i; _o9++) {
      n[s + r] = t[_o9], r++;
    }
  }, O.getProperty = function (t) {
    return {
      "line.separator": "\n"
    }[t];
  };

  var b =
  /*#__PURE__*/
  function () {
    function b() {
      _classCallCheck(this, b);

      b.constructor_.apply(this, arguments);
    }

    _createClass(b, [{
      key: "getY",
      value: function getY() {
        var t = this.y / this.w;
        if (i.isNaN(t) || i.isInfinite(t)) throw new S();
        return t;
      }
    }, {
      key: "getX",
      value: function getX() {
        var t = this.x / this.w;
        if (i.isNaN(t) || i.isInfinite(t)) throw new S();
        return t;
      }
    }, {
      key: "getCoordinate",
      value: function getCoordinate() {
        var t = new g();
        return t.x = this.getX(), t.y = this.getY(), t;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return b;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "intersection",
      value: function intersection(t, e, n, s) {
        var r = t.y - e.y,
            o = e.x - t.x,
            l = t.x * e.y - e.x * t.y,
            a = n.y - s.y,
            c = s.x - n.x,
            h = n.x * s.y - s.x * n.y,
            u = r * c - a * o,
            d = (o * h - c * l) / u,
            _ = (a * l - r * h) / u;

        if (i.isNaN(d) || i.isInfinite(d) || i.isNaN(_) || i.isInfinite(_)) throw new S();
        return new g(d, _);
      }
    }]);

    return b;
  }();

  b.constructor_ = function () {
    if (this.x = null, this.y = null, this.w = null, 0 === arguments.length) this.x = 0, this.y = 0, this.w = 1;else if (1 === arguments.length) {
      var _t87 = arguments[0];
      this.x = _t87.x, this.y = _t87.y, this.w = 1;
    } else if (2 === arguments.length) {
      if ("number" == typeof arguments[0] && "number" == typeof arguments[1]) {
        var _t88 = arguments[0],
            _e42 = arguments[1];
        this.x = _t88, this.y = _e42, this.w = 1;
      } else if (arguments[0] instanceof b && arguments[1] instanceof b) {
        var _t89 = arguments[0],
            _e43 = arguments[1];
        this.x = _t89.y * _e43.w - _e43.y * _t89.w, this.y = _e43.x * _t89.w - _t89.x * _e43.w, this.w = _t89.x * _e43.y - _e43.x * _t89.y;
      } else if (arguments[0] instanceof g && arguments[1] instanceof g) {
        var _t90 = arguments[0],
            _e44 = arguments[1];
        this.x = _t90.y - _e44.y, this.y = _e44.x - _t90.x, this.w = _t90.x * _e44.y - _e44.x * _t90.y;
      }
    } else if (3 === arguments.length) {
      var _t91 = arguments[0],
          _e45 = arguments[1],
          _n27 = arguments[2];
      this.x = _t91, this.y = _e45, this.w = _n27;
    } else if (4 === arguments.length) {
      var _t92 = arguments[0],
          _e46 = arguments[1],
          _n28 = arguments[2],
          _s18 = arguments[3],
          _i12 = _t92.y - _e46.y,
          _r10 = _e46.x - _t92.x,
          _o10 = _t92.x * _e46.y - _e46.x * _t92.y,
          _l7 = _n28.y - _s18.y,
          _a6 = _s18.x - _n28.x,
          _c6 = _n28.x * _s18.y - _s18.x * _n28.y;

      this.x = _r10 * _c6 - _a6 * _o10, this.y = _l7 * _o10 - _i12 * _c6, this.w = _i12 * _a6 - _l7 * _r10;
    }
  };

  var M =
  /*#__PURE__*/
  function () {
    function M() {
      _classCallCheck(this, M);

      M.constructor_.apply(this, arguments);
    }

    _createClass(M, [{
      key: "getClass",
      value: function getClass() {
        return M;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "log10",
      value: function log10(t) {
        var e = Math.log(t);
        return i.isInfinite(e) ? e : i.isNaN(e) ? e : e / M.LOG_10;
      }
    }, {
      key: "min",
      value: function min(t, e, n, s) {
        var i = t;
        return e < i && (i = e), n < i && (i = n), s < i && (i = s), i;
      }
    }, {
      key: "clamp",
      value: function clamp() {
        if ("number" == typeof arguments[2] && "number" == typeof arguments[0] && "number" == typeof arguments[1]) {
          var _t93 = arguments[0],
              _e47 = arguments[1],
              _n29 = arguments[2];
          return _t93 < _e47 ? _e47 : _t93 > _n29 ? _n29 : _t93;
        }

        if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
          var _t94 = arguments[0],
              _e48 = arguments[1],
              _n30 = arguments[2];
          return _t94 < _e48 ? _e48 : _t94 > _n30 ? _n30 : _t94;
        }
      }
    }, {
      key: "wrap",
      value: function wrap(t, e) {
        return t < 0 ? e - -t % e : t % e;
      }
    }, {
      key: "max",
      value: function max() {
        if (3 === arguments.length) {
          var _t95 = arguments[0],
              _e49 = arguments[1],
              _n31 = arguments[2];
          var _s19 = _t95;
          return _e49 > _s19 && (_s19 = _e49), _n31 > _s19 && (_s19 = _n31), _s19;
        }

        if (4 === arguments.length) {
          var _t96 = arguments[0],
              _e50 = arguments[1],
              _n32 = arguments[2],
              _s20 = arguments[3];
          var _i13 = _t96;
          return _e50 > _i13 && (_i13 = _e50), _n32 > _i13 && (_i13 = _n32), _s20 > _i13 && (_i13 = _s20), _i13;
        }
      }
    }, {
      key: "average",
      value: function average(t, e) {
        return (t + e) / 2;
      }
    }]);

    return M;
  }();

  M.constructor_ = function () {}, M.LOG_10 = Math.log(10);

  var A =
  /*#__PURE__*/
  function () {
    function A() {
      _classCallCheck(this, A);

      A.constructor_.apply(this, arguments);
    }

    _createClass(A, [{
      key: "getClass",
      value: function getClass() {
        return A;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "segmentToSegment",
      value: function segmentToSegment(t, e, n, s) {
        if (t.equals(e)) return A.pointToSegment(t, n, s);
        if (n.equals(s)) return A.pointToSegment(s, t, e);
        var i = !1;

        if (N.intersects(t, e, n, s)) {
          var _r11 = (e.x - t.x) * (s.y - n.y) - (e.y - t.y) * (s.x - n.x);

          if (0 === _r11) i = !0;else {
            var _o11 = (t.y - n.y) * (s.x - n.x) - (t.x - n.x) * (s.y - n.y),
                _l8 = ((t.y - n.y) * (e.x - t.x) - (t.x - n.x) * (e.y - t.y)) / _r11,
                _a7 = _o11 / _r11;

            (_a7 < 0 || _a7 > 1 || _l8 < 0 || _l8 > 1) && (i = !0);
          }
        } else i = !0;

        return i ? M.min(A.pointToSegment(t, n, s), A.pointToSegment(e, n, s), A.pointToSegment(n, t, e), A.pointToSegment(s, t, e)) : 0;
      }
    }, {
      key: "pointToSegment",
      value: function pointToSegment(t, e, n) {
        if (e.x === n.x && e.y === n.y) return t.distance(e);
        var s = (n.x - e.x) * (n.x - e.x) + (n.y - e.y) * (n.y - e.y),
            i = ((t.x - e.x) * (n.x - e.x) + (t.y - e.y) * (n.y - e.y)) / s;
        if (i <= 0) return t.distance(e);
        if (i >= 1) return t.distance(n);
        var r = ((e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)) / s;
        return Math.abs(r) * Math.sqrt(s);
      }
    }, {
      key: "pointToLinePerpendicular",
      value: function pointToLinePerpendicular(t, e, n) {
        var s = (n.x - e.x) * (n.x - e.x) + (n.y - e.y) * (n.y - e.y),
            i = ((e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)) / s;
        return Math.abs(i) * Math.sqrt(s);
      }
    }, {
      key: "pointToSegmentString",
      value: function pointToSegmentString(t, e) {
        if (0 === e.length) throw new n("Line array must contain at least one vertex");
        var s = t.distance(e[0]);

        for (var _n33 = 0; _n33 < e.length - 1; _n33++) {
          var _i14 = A.pointToSegment(t, e[_n33], e[_n33 + 1]);

          _i14 < s && (s = _i14);
        }

        return s;
      }
    }]);

    return A;
  }();

  A.constructor_ = function () {};

  var D =
  /*#__PURE__*/
  function () {
    function D() {
      _classCallCheck(this, D);

      D.constructor_.apply(this, arguments);
    }

    _createClass(D, [{
      key: "setOrdinate",
      value: function setOrdinate(t, e, n) {}
    }, {
      key: "size",
      value: function size() {}
    }, {
      key: "getOrdinate",
      value: function getOrdinate(t, e) {}
    }, {
      key: "getCoordinate",
      value: function getCoordinate() {}
    }, {
      key: "getCoordinateCopy",
      value: function getCoordinateCopy(t) {}
    }, {
      key: "getDimension",
      value: function getDimension() {}
    }, {
      key: "getX",
      value: function getX(t) {}
    }, {
      key: "expandEnvelope",
      value: function expandEnvelope(t) {}
    }, {
      key: "copy",
      value: function copy() {}
    }, {
      key: "getY",
      value: function getY(t) {}
    }, {
      key: "toCoordinateArray",
      value: function toCoordinateArray() {}
    }, {
      key: "getClass",
      value: function getClass() {
        return D;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [o];
      }
    }]);

    return D;
  }();

  D.constructor_ = function () {}, D.X = 0, D.Y = 1, D.Z = 2, D.M = 3;

  var F =
  /*#__PURE__*/
  function () {
    function F() {
      _classCallCheck(this, F);

      F.constructor_.apply(this, arguments);
    }

    _createClass(F, [{
      key: "create",
      value: function create() {
        1 === arguments.length && (arguments[0] instanceof Array || _(arguments[0], D));
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return F;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return F;
  }();

  F.constructor_ = function () {};

  var G =
  /*#__PURE__*/
  function () {
    function G() {
      _classCallCheck(this, G);

      G.constructor_.apply(this, arguments);
    }

    _createClass(G, [{
      key: "filter",
      value: function filter(t) {}
    }, {
      key: "getClass",
      value: function getClass() {
        return G;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return G;
  }();

  G.constructor_ = function () {};

  var q =
  /*#__PURE__*/
  function () {
    function q() {
      _classCallCheck(this, q);

      q.constructor_.apply(this, arguments);
    }

    _createClass(q, [{
      key: "isGeometryCollection",
      value: function isGeometryCollection() {
        return this.getTypeCode() === q.TYPECODE_GEOMETRYCOLLECTION;
      }
    }, {
      key: "getFactory",
      value: function getFactory() {
        return this._factory;
      }
    }, {
      key: "getGeometryN",
      value: function getGeometryN(t) {
        return this;
      }
    }, {
      key: "getArea",
      value: function getArea() {
        return 0;
      }
    }, {
      key: "isRectangle",
      value: function isRectangle() {
        return !1;
      }
    }, {
      key: "equals",
      value: function equals() {
        if (arguments[0] instanceof q) {
          var _t97 = arguments[0];
          return null !== _t97 && this.equalsTopo(_t97);
        }

        if (arguments[0] instanceof Object) {
          var _t98 = arguments[0];
          if (!(_t98 instanceof q)) return !1;
          var _e51 = _t98;
          return this.equalsExact(_e51);
        }
      }
    }, {
      key: "equalsExact",
      value: function equalsExact(t) {
        return this === t || this.equalsExact(t, 0);
      }
    }, {
      key: "geometryChanged",
      value: function geometryChanged() {
        this.apply(q.geometryChangedFilter);
      }
    }, {
      key: "geometryChangedAction",
      value: function geometryChangedAction() {
        this._envelope = null;
      }
    }, {
      key: "equalsNorm",
      value: function equalsNorm(t) {
        return null !== t && this.norm().equalsExact(t.norm());
      }
    }, {
      key: "getLength",
      value: function getLength() {
        return 0;
      }
    }, {
      key: "getNumGeometries",
      value: function getNumGeometries() {
        return 1;
      }
    }, {
      key: "compareTo",
      value: function compareTo() {
        var t;

        if (1 === arguments.length) {
          var _e52 = arguments[0];
          return t = _e52, this.getTypeCode() !== t.getTypeCode() ? this.getTypeCode() - t.getTypeCode() : this.isEmpty() && t.isEmpty() ? 0 : this.isEmpty() ? -1 : t.isEmpty() ? 1 : this.compareToSameClass(_e52);
        }

        if (2 === arguments.length) {
          var _e53 = arguments[0],
              _n34 = arguments[1];
          return t = _e53, this.getTypeCode() !== t.getTypeCode() ? this.getTypeCode() - t.getTypeCode() : this.isEmpty() && t.isEmpty() ? 0 : this.isEmpty() ? -1 : t.isEmpty() ? 1 : this.compareToSameClass(_e53, _n34);
        }
      }
    }, {
      key: "getUserData",
      value: function getUserData() {
        return this._userData;
      }
    }, {
      key: "getSRID",
      value: function getSRID() {
        return this._SRID;
      }
    }, {
      key: "getEnvelope",
      value: function getEnvelope() {
        return this.getFactory().toGeometry(this.getEnvelopeInternal());
      }
    }, {
      key: "checkNotGeometryCollection",
      value: function checkNotGeometryCollection(t) {
        if (t.getTypeCode() === q.TYPECODE_GEOMETRYCOLLECTION) throw new n("This method does not support GeometryCollection arguments");
      }
    }, {
      key: "equal",
      value: function equal(t, e, n) {
        return 0 === n ? t.equals(e) : t.distance(e) <= n;
      }
    }, {
      key: "norm",
      value: function norm() {
        var t = this.copy();
        return t.normalize(), t;
      }
    }, {
      key: "getPrecisionModel",
      value: function getPrecisionModel() {
        return this._factory.getPrecisionModel();
      }
    }, {
      key: "getEnvelopeInternal",
      value: function getEnvelopeInternal() {
        return null === this._envelope && (this._envelope = this.computeEnvelopeInternal()), new N(this._envelope);
      }
    }, {
      key: "setSRID",
      value: function setSRID(t) {
        this._SRID = t;
      }
    }, {
      key: "setUserData",
      value: function setUserData(t) {
        this._userData = t;
      }
    }, {
      key: "compare",
      value: function compare(t, e) {
        var n = t.iterator(),
            s = e.iterator();

        for (; n.hasNext() && s.hasNext();) {
          var _t99 = n.next(),
              _e54 = s.next(),
              _i15 = _t99.compareTo(_e54);

          if (0 !== _i15) return _i15;
        }

        return n.hasNext() ? 1 : s.hasNext() ? -1 : 0;
      }
    }, {
      key: "hashCode",
      value: function hashCode() {
        return this.getEnvelopeInternal().hashCode();
      }
    }, {
      key: "isGeometryCollectionOrDerived",
      value: function isGeometryCollectionOrDerived() {
        return this.getTypeCode() === q.TYPECODE_GEOMETRYCOLLECTION || this.getTypeCode() === q.TYPECODE_MULTIPOINT || this.getTypeCode() === q.TYPECODE_MULTILINESTRING || this.getTypeCode() === q.TYPECODE_MULTIPOLYGON;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return q;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [o, r, a];
      }
    }], [{
      key: "hasNonEmptyElements",
      value: function hasNonEmptyElements(t) {
        for (var _e55 = 0; _e55 < t.length; _e55++) {
          if (!t[_e55].isEmpty()) return !0;
        }

        return !1;
      }
    }, {
      key: "hasNullElements",
      value: function hasNullElements(t) {
        for (var _e56 = 0; _e56 < t.length; _e56++) {
          if (null === t[_e56]) return !0;
        }

        return !1;
      }
    }]);

    return q;
  }();

  q.constructor_ = function (t) {
    t && (this._envelope = null, this._userData = null, this._factory = t, this._SRID = t.getSRID());
  }, q.serialVersionUID = 0x799ea46522854c00, q.TYPECODE_POINT = 0, q.TYPECODE_MULTIPOINT = 1, q.TYPECODE_LINESTRING = 2, q.TYPECODE_LINEARRING = 3, q.TYPECODE_MULTILINESTRING = 4, q.TYPECODE_POLYGON = 5, q.TYPECODE_MULTIPOLYGON = 6, q.TYPECODE_GEOMETRYCOLLECTION = 7, q.TYPENAME_POINT = "Point", q.TYPENAME_MULTIPOINT = "MultiPoint", q.TYPENAME_LINESTRING = "LineString", q.TYPENAME_LINEARRING = "LinearRing", q.TYPENAME_MULTILINESTRING = "MultiLineString", q.TYPENAME_POLYGON = "Polygon", q.TYPENAME_MULTIPOLYGON = "MultiPolygon", q.TYPENAME_GEOMETRYCOLLECTION = "GeometryCollection", q.geometryChangedFilter = {
    get interfaces_() {
      return [G];
    },

    filter: function filter(t) {
      t.geometryChangedAction();
    }
  };

  var B =
  /*#__PURE__*/
  function () {
    function B() {
      _classCallCheck(this, B);

      B.constructor_.apply(this, arguments);
    }

    _createClass(B, [{
      key: "filter",
      value: function filter(t) {}
    }, {
      key: "getClass",
      value: function getClass() {
        return B;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return B;
  }();

  B.constructor_ = function () {};

  var V =
  /*#__PURE__*/
  function () {
    function V() {
      _classCallCheck(this, V);

      V.constructor_.apply(this, arguments);
    }

    _createClass(V, [{
      key: "isInBoundary",
      value: function isInBoundary(t) {}
    }, {
      key: "getClass",
      value: function getClass() {
        return V;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return V;
  }();

  var z =
  /*#__PURE__*/
  function () {
    function z() {
      _classCallCheck(this, z);

      z.constructor_.apply(this, arguments);
    }

    _createClass(z, [{
      key: "isInBoundary",
      value: function isInBoundary(t) {
        return t % 2 == 1;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return z;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [V];
      }
    }]);

    return z;
  }();

  z.constructor_ = function () {};

  var Y =
  /*#__PURE__*/
  function () {
    function Y() {
      _classCallCheck(this, Y);

      Y.constructor_.apply(this, arguments);
    }

    _createClass(Y, [{
      key: "isInBoundary",
      value: function isInBoundary(t) {
        return t > 0;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Y;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [V];
      }
    }]);

    return Y;
  }();

  Y.constructor_ = function () {};

  var U =
  /*#__PURE__*/
  function () {
    function U() {
      _classCallCheck(this, U);

      U.constructor_.apply(this, arguments);
    }

    _createClass(U, [{
      key: "isInBoundary",
      value: function isInBoundary(t) {
        return t > 1;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return U;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [V];
      }
    }]);

    return U;
  }();

  U.constructor_ = function () {};

  var k =
  /*#__PURE__*/
  function () {
    function k() {
      _classCallCheck(this, k);

      k.constructor_.apply(this, arguments);
    }

    _createClass(k, [{
      key: "isInBoundary",
      value: function isInBoundary(t) {
        return 1 === t;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return k;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [V];
      }
    }]);

    return k;
  }();

  k.constructor_ = function () {}, V.Mod2BoundaryNodeRule = z, V.EndPointBoundaryNodeRule = Y, V.MultiValentEndPointBoundaryNodeRule = U, V.MonoValentEndPointBoundaryNodeRule = k, V.constructor_ = function () {}, V.MOD2_BOUNDARY_RULE = new z(), V.ENDPOINT_BOUNDARY_RULE = new Y(), V.MULTIVALENT_ENDPOINT_BOUNDARY_RULE = new U(), V.MONOVALENT_ENDPOINT_BOUNDARY_RULE = new k(), V.OGC_SFS_BOUNDARY_RULE = V.MOD2_BOUNDARY_RULE;

  var X =
  /*#__PURE__*/
  function () {
    function X() {
      _classCallCheck(this, X);

      X.constructor_.apply(this, arguments);
    }

    _createClass(X, [{
      key: "getClass",
      value: function getClass() {
        return X;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "isRing",
      value: function isRing(t) {
        return !(t.length < 4) && !!t[0].equals2D(t[t.length - 1]);
      }
    }, {
      key: "ptNotInList",
      value: function ptNotInList(t, e) {
        for (var _n35 = 0; _n35 < t.length; _n35++) {
          var _s21 = t[_n35];
          if (X.indexOf(_s21, e) < 0) return _s21;
        }

        return null;
      }
    }, {
      key: "scroll",
      value: function scroll(t, e) {
        var n = X.indexOf(e, t);
        if (n < 0) return null;
        var s = new Array(t.length).fill(null);
        O.arraycopy(t, n, s, 0, t.length - n), O.arraycopy(t, 0, s, t.length - n, n), O.arraycopy(s, 0, t, 0, t.length);
      }
    }, {
      key: "equals",
      value: function equals() {
        if (2 === arguments.length) {
          var _t100 = arguments[0],
              _e57 = arguments[1];
          if (_t100 === _e57) return !0;
          if (null === _t100 || null === _e57) return !1;
          if (_t100.length !== _e57.length) return !1;

          for (var _n36 = 0; _n36 < _t100.length; _n36++) {
            if (!_t100[_n36].equals(_e57[_n36])) return !1;
          }

          return !0;
        }

        if (3 === arguments.length) {
          var _t101 = arguments[0],
              _e58 = arguments[1],
              _n37 = arguments[2];
          if (_t101 === _e58) return !0;
          if (null === _t101 || null === _e58) return !1;
          if (_t101.length !== _e58.length) return !1;

          for (var _s22 = 0; _s22 < _t101.length; _s22++) {
            if (0 !== _n37.compare(_t101[_s22], _e58[_s22])) return !1;
          }

          return !0;
        }
      }
    }, {
      key: "intersection",
      value: function intersection(t, e) {
        var n = new I();

        for (var _s23 = 0; _s23 < t.length; _s23++) {
          e.intersects(t[_s23]) && n.add(t[_s23], !0);
        }

        return n.toCoordinateArray();
      }
    }, {
      key: "hasRepeatedPoints",
      value: function hasRepeatedPoints(t) {
        for (var _e59 = 1; _e59 < t.length; _e59++) {
          if (t[_e59 - 1].equals(t[_e59])) return !0;
        }

        return !1;
      }
    }, {
      key: "removeRepeatedPoints",
      value: function removeRepeatedPoints(t) {
        if (!X.hasRepeatedPoints(t)) return t;
        return new I(t, !1).toCoordinateArray();
      }
    }, {
      key: "reverse",
      value: function reverse(t) {
        var e = t.length - 1,
            n = Math.trunc(e / 2);

        for (var _s24 = 0; _s24 <= n; _s24++) {
          var _n38 = t[_s24];
          t[_s24] = t[e - _s24], t[e - _s24] = _n38;
        }
      }
    }, {
      key: "removeNull",
      value: function removeNull(t) {
        var e = 0;

        for (var _n39 = 0; _n39 < t.length; _n39++) {
          null !== t[_n39] && e++;
        }

        var n = new Array(e).fill(null);
        if (0 === e) return n;
        var s = 0;

        for (var _e60 = 0; _e60 < t.length; _e60++) {
          null !== t[_e60] && (n[s++] = t[_e60]);
        }

        return n;
      }
    }, {
      key: "copyDeep",
      value: function copyDeep() {
        if (1 === arguments.length) {
          var _t102 = arguments[0],
              _e61 = new Array(_t102.length).fill(null);

          for (var _n40 = 0; _n40 < _t102.length; _n40++) {
            _e61[_n40] = new g(_t102[_n40]);
          }

          return _e61;
        }

        if (5 === arguments.length) {
          var _t103 = arguments[0],
              _e62 = arguments[1],
              _n41 = arguments[2],
              _s25 = arguments[3],
              _i16 = arguments[4];

          for (var _r12 = 0; _r12 < _i16; _r12++) {
            _n41[_s25 + _r12] = new g(_t103[_e62 + _r12]);
          }
        }
      }
    }, {
      key: "isEqualReversed",
      value: function isEqualReversed(t, e) {
        for (var _n42 = 0; _n42 < t.length; _n42++) {
          var _s26 = t[_n42],
              _i17 = e[t.length - _n42 - 1];
          if (0 !== _s26.compareTo(_i17)) return !1;
        }

        return !0;
      }
    }, {
      key: "envelope",
      value: function envelope(t) {
        var e = new N();

        for (var _n43 = 0; _n43 < t.length; _n43++) {
          e.expandToInclude(t[_n43]);
        }

        return e;
      }
    }, {
      key: "toCoordinateArray",
      value: function toCoordinateArray(t) {
        return t.toArray(X.coordArrayType);
      }
    }, {
      key: "atLeastNCoordinatesOrNothing",
      value: function atLeastNCoordinatesOrNothing(t, e) {
        return e.length >= t ? e : [];
      }
    }, {
      key: "indexOf",
      value: function indexOf(t, e) {
        for (var _n44 = 0; _n44 < e.length; _n44++) {
          if (t.equals(e[_n44])) return _n44;
        }

        return -1;
      }
    }, {
      key: "increasingDirection",
      value: function increasingDirection(t) {
        for (var _e63 = 0; _e63 < Math.trunc(t.length / 2); _e63++) {
          var _n45 = t.length - 1 - _e63,
              _s27 = t[_e63].compareTo(t[_n45]);

          if (0 !== _s27) return _s27;
        }

        return 1;
      }
    }, {
      key: "compare",
      value: function compare(t, e) {
        var n = 0;

        for (; n < t.length && n < e.length;) {
          var _s28 = t[n].compareTo(e[n]);

          if (0 !== _s28) return _s28;
          n++;
        }

        return n < e.length ? -1 : n < t.length ? 1 : 0;
      }
    }, {
      key: "minCoordinate",
      value: function minCoordinate(t) {
        var e = null;

        for (var _n46 = 0; _n46 < t.length; _n46++) {
          (null === e || e.compareTo(t[_n46]) > 0) && (e = t[_n46]);
        }

        return e;
      }
    }, {
      key: "extract",
      value: function extract(t, e, n) {
        e = M.clamp(e, 0, t.length);
        var s = (n = M.clamp(n, -1, t.length)) - e + 1;
        n < 0 && (s = 0), e >= t.length && (s = 0), n < e && (s = 0);
        var i = new Array(s).fill(null);
        if (0 === s) return i;
        var r = 0;

        for (var _s29 = e; _s29 <= n; _s29++) {
          i[r++] = t[_s29];
        }

        return i;
      }
    }]);

    return X;
  }();

  var H =
  /*#__PURE__*/
  function () {
    function H() {
      _classCallCheck(this, H);

      H.constructor_.apply(this, arguments);
    }

    _createClass(H, [{
      key: "compare",
      value: function compare(t, e) {
        var n = t,
            s = e;
        return X.compare(n, s);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return H;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [l];
      }
    }]);

    return H;
  }();

  H.constructor_ = function () {};

  var W =
  /*#__PURE__*/
  function () {
    function W() {
      _classCallCheck(this, W);

      W.constructor_.apply(this, arguments);
    }

    _createClass(W, [{
      key: "compare",
      value: function compare(t, e) {
        var n = t,
            s = e;
        if (n.length < s.length) return -1;
        if (n.length > s.length) return 1;
        if (0 === n.length) return 0;
        var i = X.compare(n, s);
        return X.isEqualReversed(n, s) ? 0 : i;
      }
    }, {
      key: "OLDcompare",
      value: function OLDcompare(t, e) {
        var n = t,
            s = e;
        if (n.length < s.length) return -1;
        if (n.length > s.length) return 1;
        if (0 === n.length) return 0;
        var i = X.increasingDirection(n),
            r = X.increasingDirection(s);
        var o = i > 0 ? 0 : n.length - 1,
            l = r > 0 ? 0 : n.length - 1;

        for (var _t104 = 0; _t104 < n.length; _t104++) {
          var _t105 = n[o].compareTo(s[l]);

          if (0 !== _t105) return _t105;
          o += i, l += r;
        }

        return 0;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return W;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [l];
      }
    }]);

    return W;
  }();

  function j() {}

  function K() {}

  function Z(t) {
    this.message = t || "";
  }

  function Q() {}

  function J() {
    this.array_ = [], arguments[0] instanceof f && this.addAll(arguments[0]);
  }

  W.constructor_ = function () {}, X.ForwardComparator = H, X.BidirectionalComparator = W, X.constructor_ = function () {}, X.coordArrayType = new Array(0).fill(null), j.prototype.get = function () {}, j.prototype.put = function () {}, j.prototype.size = function () {}, j.prototype.values = function () {}, j.prototype.entrySet = function () {}, K.prototype = new j(), Z.prototype = new Error(), Z.prototype.name = "OperationNotSupported", Q.prototype = new f(), Q.prototype.contains = function () {}, J.prototype = new Q(), J.prototype.contains = function (t) {
    for (var _e64 = 0, _n47 = this.array_.length; _e64 < _n47; _e64++) {
      if (this.array_[_e64] === t) return !0;
    }

    return !1;
  }, J.prototype.add = function (t) {
    return !this.contains(t) && (this.array_.push(t), !0);
  }, J.prototype.addAll = function (t) {
    for (var _e65 = t.iterator(); _e65.hasNext();) {
      this.add(_e65.next());
    }

    return !0;
  }, J.prototype.remove = function (t) {
    throw new Z();
  }, J.prototype.size = function () {
    return this.array_.length;
  }, J.prototype.isEmpty = function () {
    return 0 === this.array_.length;
  }, J.prototype.toArray = function () {
    var t = [];

    for (var _e66 = 0, _n48 = this.array_.length; _e66 < _n48; _e66++) {
      t.push(this.array_[_e66]);
    }

    return t;
  }, J.prototype.iterator = function () {
    return new $(this);
  };

  var $ = function $(t) {
    this.hashSet_ = t, this.position_ = 0;
  };

  $.prototype.next = function () {
    if (this.position_ === this.hashSet_.size()) throw new y();
    return this.hashSet_.array_[this.position_++];
  }, $.prototype.hasNext = function () {
    return this.position_ < this.hashSet_.size();
  }, $.prototype.remove = function () {
    throw new Z();
  };
  var tt = 0;

  function et(t) {
    return null == t ? tt : t.color;
  }

  function nt(t) {
    return null == t ? null : t.parent;
  }

  function st(t, e) {
    null !== t && (t.color = e);
  }

  function it(t) {
    return null == t ? null : t.left;
  }

  function rt(t) {
    return null == t ? null : t.right;
  }

  function ot() {
    this.root_ = null, this.size_ = 0;
  }

  ot.prototype = new K(), ot.prototype.get = function (t) {
    for (var e = this.root_; null !== e;) {
      var n = t.compareTo(e.key);
      if (n < 0) e = e.left;else {
        if (!(n > 0)) return e.value;
        e = e.right;
      }
    }

    return null;
  }, ot.prototype.put = function (t, e) {
    if (null === this.root_) return this.root_ = {
      key: t,
      value: e,
      left: null,
      right: null,
      parent: null,
      color: tt,
      getValue: function getValue() {
        return this.value;
      },
      getKey: function getKey() {
        return this.key;
      }
    }, this.size_ = 1, null;
    var n,
        s,
        i = this.root_;

    do {
      if (n = i, (s = t.compareTo(i.key)) < 0) i = i.left;else {
        if (!(s > 0)) {
          var r = i.value;
          return i.value = e, r;
        }

        i = i.right;
      }
    } while (null !== i);

    var o = {
      key: t,
      left: null,
      right: null,
      value: e,
      parent: n,
      color: tt,
      getValue: function getValue() {
        return this.value;
      },
      getKey: function getKey() {
        return this.key;
      }
    };
    return s < 0 ? n.left = o : n.right = o, this.fixAfterInsertion(o), this.size_++, null;
  }, ot.prototype.fixAfterInsertion = function (t) {
    var e;

    for (t.color = 1; null != t && t !== this.root_ && 1 === t.parent.color;) {
      nt(t) === it(nt(nt(t))) ? 1 === et(e = rt(nt(nt(t)))) ? (st(nt(t), tt), st(e, tt), st(nt(nt(t)), 1), t = nt(nt(t))) : (t === rt(nt(t)) && (t = nt(t), this.rotateLeft(t)), st(nt(t), tt), st(nt(nt(t)), 1), this.rotateRight(nt(nt(t)))) : 1 === et(e = it(nt(nt(t)))) ? (st(nt(t), tt), st(e, tt), st(nt(nt(t)), 1), t = nt(nt(t))) : (t === it(nt(t)) && (t = nt(t), this.rotateRight(t)), st(nt(t), tt), st(nt(nt(t)), 1), this.rotateLeft(nt(nt(t))));
    }

    this.root_.color = tt;
  }, ot.prototype.values = function () {
    var t = new x(),
        e = this.getFirstEntry();
    if (null !== e) for (t.add(e.value); null !== (e = ot.successor(e));) {
      t.add(e.value);
    }
    return t;
  }, ot.prototype.entrySet = function () {
    var t = new J(),
        e = this.getFirstEntry();
    if (null !== e) for (t.add(e); null !== (e = ot.successor(e));) {
      t.add(e);
    }
    return t;
  }, ot.prototype.rotateLeft = function (t) {
    if (null != t) {
      var e = t.right;
      t.right = e.left, null != e.left && (e.left.parent = t), e.parent = t.parent, null == t.parent ? this.root_ = e : t.parent.left === t ? t.parent.left = e : t.parent.right = e, e.left = t, t.parent = e;
    }
  }, ot.prototype.rotateRight = function (t) {
    if (null != t) {
      var e = t.left;
      t.left = e.right, null != e.right && (e.right.parent = t), e.parent = t.parent, null == t.parent ? this.root_ = e : t.parent.right === t ? t.parent.right = e : t.parent.left = e, e.right = t, t.parent = e;
    }
  }, ot.prototype.getFirstEntry = function () {
    var t = this.root_;
    if (null != t) for (; null != t.left;) {
      t = t.left;
    }
    return t;
  }, ot.successor = function (t) {
    var e;
    if (null === t) return null;

    if (null !== t.right) {
      for (e = t.right; null !== e.left;) {
        e = e.left;
      }

      return e;
    }

    e = t.parent;

    for (var n = t; null !== e && n === e.right;) {
      n = e, e = e.parent;
    }

    return e;
  }, ot.prototype.size = function () {
    return this.size_;
  }, ot.prototype.containsKey = function (t) {
    for (var e = this.root_; null !== e;) {
      var n = t.compareTo(e.key);
      if (n < 0) e = e.left;else {
        if (!(n > 0)) return !0;
        e = e.right;
      }
    }

    return !1;
  };

  var lt =
  /*#__PURE__*/
  function () {
    function lt() {
      _classCallCheck(this, lt);

      lt.constructor_.apply(this, arguments);
    }

    _createClass(lt, [{
      key: "getClass",
      value: function getClass() {
        return lt;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return lt;
  }();

  function at() {}

  function ct() {
    this.array_ = [], arguments[0] instanceof f && this.addAll(arguments[0]);
  }

  lt.constructor_ = function () {}, at.prototype = new Q(), ct.prototype = new at(), ct.prototype.contains = function (t) {
    for (var _e67 = 0, _n49 = this.array_.length; _e67 < _n49; _e67++) {
      if (0 === this.array_[_e67].compareTo(t)) return !0;
    }

    return !1;
  }, ct.prototype.add = function (t) {
    if (this.contains(t)) return !1;

    for (var _e68 = 0, _n50 = this.array_.length; _e68 < _n50; _e68++) {
      if (1 === this.array_[_e68].compareTo(t)) return this.array_.splice(_e68, 0, t), !0;
    }

    return this.array_.push(t), !0;
  }, ct.prototype.addAll = function (t) {
    for (var _e69 = t.iterator(); _e69.hasNext();) {
      this.add(_e69.next());
    }

    return !0;
  }, ct.prototype.remove = function (t) {
    throw new Z();
  }, ct.prototype.size = function () {
    return this.array_.length;
  }, ct.prototype.isEmpty = function () {
    return 0 === this.array_.length;
  }, ct.prototype.toArray = function () {
    var t = [];

    for (var _e70 = 0, _n51 = this.array_.length; _e70 < _n51; _e70++) {
      t.push(this.array_[_e70]);
    }

    return t;
  }, ct.prototype.iterator = function () {
    return new ht(this);
  };

  var ht = function ht(t) {
    this.treeSet_ = t, this.position_ = 0;
  };

  function ut() {}

  ht.prototype.next = function () {
    if (this.position_ === this.treeSet_.size()) throw new y();
    return this.treeSet_.array_[this.position_++];
  }, ht.prototype.hasNext = function () {
    return this.position_ < this.treeSet_.size();
  }, ht.prototype.remove = function () {
    throw new Z();
  }, ut.sort = function () {
    var t = arguments[0];
    var e, n, s, i;
    if (1 === arguments.length) i = function i(t, e) {
      return t.compareTo(e);
    }, t.sort(i);else if (2 === arguments.length) s = arguments[1], i = function i(t, e) {
      return s.compare(t, e);
    }, t.sort(i);else if (3 === arguments.length) {
      (n = t.slice(arguments[1], arguments[2])).sort();

      var _s30 = t.slice(0, arguments[1]).concat(n, t.slice(arguments[2], t.length));

      for (t.splice(0, t.length), e = 0; e < _s30.length; e++) {
        t.push(_s30[e]);
      }
    } else if (4 === arguments.length) {
      n = t.slice(arguments[1], arguments[2]), s = arguments[3], i = function i(t, e) {
        return s.compare(t, e);
      }, n.sort(i);

      var _r13 = t.slice(0, arguments[1]).concat(n, t.slice(arguments[2], t.length));

      for (t.splice(0, t.length), e = 0; e < _r13.length; e++) {
        t.push(_r13[e]);
      }
    }
  }, ut.asList = function (t) {
    var e = new x();

    for (var _n52 = 0, _s31 = t.length; _n52 < _s31; _n52++) {
      e.add(t[_n52]);
    }

    return e;
  };

  var gt =
  /*#__PURE__*/
  function () {
    function gt() {
      _classCallCheck(this, gt);

      gt.constructor_.apply(this, arguments);
    }

    _createClass(gt, [{
      key: "getClass",
      value: function getClass() {
        return gt;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "toDimensionSymbol",
      value: function toDimensionSymbol(t) {
        switch (t) {
          case gt.FALSE:
            return gt.SYM_FALSE;

          case gt.TRUE:
            return gt.SYM_TRUE;

          case gt.DONTCARE:
            return gt.SYM_DONTCARE;

          case gt.P:
            return gt.SYM_P;

          case gt.L:
            return gt.SYM_L;

          case gt.A:
            return gt.SYM_A;
        }

        throw new n("Unknown dimension value: " + t);
      }
    }, {
      key: "toDimensionValue",
      value: function toDimensionValue(t) {
        switch (T.toUpperCase(t)) {
          case gt.SYM_FALSE:
            return gt.FALSE;

          case gt.SYM_TRUE:
            return gt.TRUE;

          case gt.SYM_DONTCARE:
            return gt.DONTCARE;

          case gt.SYM_P:
            return gt.P;

          case gt.SYM_L:
            return gt.L;

          case gt.SYM_A:
            return gt.A;
        }

        throw new n("Unknown dimension symbol: " + t);
      }
    }]);

    return gt;
  }();

  gt.constructor_ = function () {}, gt.P = 0, gt.L = 1, gt.A = 2, gt.FALSE = -1, gt.TRUE = -2, gt.DONTCARE = -3, gt.SYM_FALSE = "F", gt.SYM_TRUE = "T", gt.SYM_DONTCARE = "*", gt.SYM_P = "0", gt.SYM_L = "1", gt.SYM_A = "2";

  var dt =
  /*#__PURE__*/
  function () {
    function dt() {
      _classCallCheck(this, dt);

      dt.constructor_.apply(this, arguments);
    }

    _createClass(dt, [{
      key: "filter",
      value: function filter(t) {}
    }, {
      key: "getClass",
      value: function getClass() {
        return dt;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return dt;
  }();

  dt.constructor_ = function () {};

  var _t =
  /*#__PURE__*/
  function () {
    function _t() {
      _classCallCheck(this, _t);

      _t.constructor_.apply(this, arguments);
    }

    _createClass(_t, [{
      key: "filter",
      value: function filter(t, e) {}
    }, {
      key: "isDone",
      value: function isDone() {}
    }, {
      key: "isGeometryChanged",
      value: function isGeometryChanged() {}
    }, {
      key: "getClass",
      value: function getClass() {
        return _t;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return _t;
  }();

  _t.constructor_ = function () {};

  var ft =
  /*#__PURE__*/
  function (_q) {
    _inherits(ft, _q);

    function ft() {
      var _this4;

      _classCallCheck(this, ft);

      _this4 = _possibleConstructorReturn(this, _getPrototypeOf(ft).call(this)), ft.constructor_.apply(_assertThisInitialized(_this4), arguments);
      return _this4;
    }

    _createClass(ft, [{
      key: "computeEnvelopeInternal",
      value: function computeEnvelopeInternal() {
        var t = new N();

        for (var _e71 = 0; _e71 < this._geometries.length; _e71++) {
          t.expandToInclude(this._geometries[_e71].getEnvelopeInternal());
        }

        return t;
      }
    }, {
      key: "getGeometryN",
      value: function getGeometryN(t) {
        return this._geometries[t];
      }
    }, {
      key: "getCoordinates",
      value: function getCoordinates() {
        var t = new Array(this.getNumPoints()).fill(null);
        var e = -1;

        for (var _n53 = 0; _n53 < this._geometries.length; _n53++) {
          var _s32 = this._geometries[_n53].getCoordinates();

          for (var _n54 = 0; _n54 < _s32.length; _n54++) {
            t[++e] = _s32[_n54];
          }
        }

        return t;
      }
    }, {
      key: "getArea",
      value: function getArea() {
        var t = 0;

        for (var _e72 = 0; _e72 < this._geometries.length; _e72++) {
          t += this._geometries[_e72].getArea();
        }

        return t;
      }
    }, {
      key: "equalsExact",
      value: function equalsExact() {
        if (2 === arguments.length && "number" == typeof arguments[1] && arguments[0] instanceof q) {
          var _t106 = arguments[0],
              _e73 = arguments[1];
          if (!this.isEquivalentClass(_t106)) return !1;
          var _n55 = _t106;
          if (this._geometries.length !== _n55._geometries.length) return !1;

          for (var _t107 = 0; _t107 < this._geometries.length; _t107++) {
            if (!this._geometries[_t107].equalsExact(_n55._geometries[_t107], _e73)) return !1;
          }

          return !0;
        }

        return _get(_getPrototypeOf(ft.prototype), "equalsExact", this).apply(this, arguments);
      }
    }, {
      key: "normalize",
      value: function normalize() {
        for (var _t108 = 0; _t108 < this._geometries.length; _t108++) {
          this._geometries[_t108].normalize();
        }

        ut.sort(this._geometries);
      }
    }, {
      key: "getCoordinate",
      value: function getCoordinate() {
        return this.isEmpty() ? null : this._geometries[0].getCoordinate();
      }
    }, {
      key: "getBoundaryDimension",
      value: function getBoundaryDimension() {
        var t = gt.FALSE;

        for (var _e74 = 0; _e74 < this._geometries.length; _e74++) {
          t = Math.max(t, this._geometries[_e74].getBoundaryDimension());
        }

        return t;
      }
    }, {
      key: "getTypeCode",
      value: function getTypeCode() {
        return q.TYPECODE_GEOMETRYCOLLECTION;
      }
    }, {
      key: "getDimension",
      value: function getDimension() {
        var t = gt.FALSE;

        for (var _e75 = 0; _e75 < this._geometries.length; _e75++) {
          t = Math.max(t, this._geometries[_e75].getDimension());
        }

        return t;
      }
    }, {
      key: "getLength",
      value: function getLength() {
        var t = 0;

        for (var _e76 = 0; _e76 < this._geometries.length; _e76++) {
          t += this._geometries[_e76].getLength();
        }

        return t;
      }
    }, {
      key: "getNumPoints",
      value: function getNumPoints() {
        var t = 0;

        for (var _e77 = 0; _e77 < this._geometries.length; _e77++) {
          t += this._geometries[_e77].getNumPoints();
        }

        return t;
      }
    }, {
      key: "getNumGeometries",
      value: function getNumGeometries() {
        return this._geometries.length;
      }
    }, {
      key: "reverse",
      value: function reverse() {
        var t = this._geometries.length,
            e = new Array(t).fill(null);

        for (var _t109 = 0; _t109 < this._geometries.length; _t109++) {
          e[_t109] = this._geometries[_t109].reverse();
        }

        return this.getFactory().createGeometryCollection(e);
      }
    }, {
      key: "compareToSameClass",
      value: function compareToSameClass() {
        if (1 === arguments.length) {
          var _t110 = arguments[0],
              _e78 = new ct(ut.asList(this._geometries)),
              _n56 = new ct(ut.asList(_t110._geometries));

          return this.compare(_e78, _n56);
        }

        if (2 === arguments.length) {
          var _t111 = arguments[0],
              _e79 = arguments[1],
              _n57 = _t111,
              _s33 = this.getNumGeometries(),
              _i18 = _n57.getNumGeometries();

          var _r14 = 0;

          for (; _r14 < _s33 && _r14 < _i18;) {
            var _t112 = this.getGeometryN(_r14),
                _s34 = _n57.getGeometryN(_r14),
                _i19 = _t112.compareToSameClass(_s34, _e79);

            if (0 !== _i19) return _i19;
            _r14++;
          }

          return _r14 < _s33 ? 1 : _r14 < _i18 ? -1 : 0;
        }
      }
    }, {
      key: "apply",
      value: function apply() {
        if (_(arguments[0], B)) {
          var _t113 = arguments[0];

          for (var _e80 = 0; _e80 < this._geometries.length; _e80++) {
            this._geometries[_e80].apply(_t113);
          }
        } else if (_(arguments[0], _t)) {
          var _t114 = arguments[0];
          if (0 === this._geometries.length) return null;

          for (var _e81 = 0; _e81 < this._geometries.length && (this._geometries[_e81].apply(_t114), !_t114.isDone()); _e81++) {
            ;
          }

          _t114.isGeometryChanged() && this.geometryChanged();
        } else if (_(arguments[0], dt)) {
          var _t115 = arguments[0];

          _t115.filter(this);

          for (var _e82 = 0; _e82 < this._geometries.length; _e82++) {
            this._geometries[_e82].apply(_t115);
          }
        } else if (_(arguments[0], G)) {
          var _t116 = arguments[0];

          _t116.filter(this);

          for (var _e83 = 0; _e83 < this._geometries.length; _e83++) {
            this._geometries[_e83].apply(_t116);
          }
        }
      }
    }, {
      key: "getBoundary",
      value: function getBoundary() {
        return this.checkNotGeometryCollection(this), u.shouldNeverReachHere(), null;
      }
    }, {
      key: "getGeometryType",
      value: function getGeometryType() {
        return q.TYPENAME_GEOMETRYCOLLECTION;
      }
    }, {
      key: "copy",
      value: function copy() {
        var t = new Array(this._geometries.length).fill(null);

        for (var _e84 = 0; _e84 < t.length; _e84++) {
          t[_e84] = this._geometries[_e84].copy();
        }

        return new ft(t, this._factory);
      }
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        for (var _t117 = 0; _t117 < this._geometries.length; _t117++) {
          if (!this._geometries[_t117].isEmpty()) return !1;
        }

        return !0;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return ft;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return ft;
  }(q);

  ft.constructor_ = function () {
    if (this._geometries = null, 0 === arguments.length) ;else if (2 === arguments.length) {
      var _t118 = arguments[0];
      var _e85 = arguments[1];
      if (q.constructor_.call(this, _e85), null === _t118 && (_t118 = []), q.hasNullElements(_t118)) throw new n("geometries must not contain null elements");
      this._geometries = _t118;
    }
  }, ft.serialVersionUID = -0x4f07bcb1f857d800;

  var pt =
  /*#__PURE__*/
  function (_ft) {
    _inherits(pt, _ft);

    function pt() {
      var _this5;

      _classCallCheck(this, pt);

      _this5 = _possibleConstructorReturn(this, _getPrototypeOf(pt).call(this)), pt.constructor_.apply(_assertThisInitialized(_this5), arguments);
      return _this5;
    }

    _createClass(pt, [{
      key: "equalsExact",
      value: function equalsExact() {
        if (2 === arguments.length && "number" == typeof arguments[1] && arguments[0] instanceof q) {
          var _t119 = arguments[0],
              _e86 = arguments[1];
          return !!this.isEquivalentClass(_t119) && _get(_getPrototypeOf(pt.prototype), "equalsExact", this).call(this, _t119, _e86);
        }

        return _get(_getPrototypeOf(pt.prototype), "equalsExact", this).apply(this, arguments);
      }
    }, {
      key: "getBoundaryDimension",
      value: function getBoundaryDimension() {
        return this.isClosed() ? gt.FALSE : 0;
      }
    }, {
      key: "isClosed",
      value: function isClosed() {
        if (this.isEmpty()) return !1;

        for (var _t120 = 0; _t120 < this._geometries.length; _t120++) {
          if (!this._geometries[_t120].isClosed()) return !1;
        }

        return !0;
      }
    }, {
      key: "getTypeCode",
      value: function getTypeCode() {
        return q.TYPECODE_MULTILINESTRING;
      }
    }, {
      key: "getDimension",
      value: function getDimension() {
        return 1;
      }
    }, {
      key: "reverse",
      value: function reverse() {
        var t = this._geometries.length,
            e = new Array(t).fill(null);

        for (var _n58 = 0; _n58 < this._geometries.length; _n58++) {
          e[t - 1 - _n58] = this._geometries[_n58].reverse();
        }

        return this.getFactory().createMultiLineString(e);
      }
    }, {
      key: "getBoundary",
      value: function getBoundary() {
        return new mt(this).getBoundary();
      }
    }, {
      key: "getGeometryType",
      value: function getGeometryType() {
        return q.TYPENAME_MULTILINESTRING;
      }
    }, {
      key: "copy",
      value: function copy() {
        var t = new Array(this._geometries.length).fill(null);

        for (var _e87 = 0; _e87 < t.length; _e87++) {
          t[_e87] = this._geometries[_e87].copy();
        }

        return new pt(t, this._factory);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return pt;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [lt];
      }
    }]);

    return pt;
  }(ft);

  pt.constructor_ = function () {
    var t = arguments[0],
        e = arguments[1];
    ft.constructor_.call(this, t, e);
  }, pt.serialVersionUID = 0x7155d2ab4afa8000;

  var mt =
  /*#__PURE__*/
  function () {
    function mt() {
      _classCallCheck(this, mt);

      mt.constructor_.apply(this, arguments);
    }

    _createClass(mt, [{
      key: "boundaryMultiLineString",
      value: function boundaryMultiLineString(t) {
        if (this._geom.isEmpty()) return this.getEmptyMultiPoint();
        var e = this.computeBoundaryCoordinates(t);
        return 1 === e.length ? this._geomFact.createPoint(e[0]) : this._geomFact.createMultiPointFromCoords(e);
      }
    }, {
      key: "getBoundary",
      value: function getBoundary() {
        return this._geom instanceof Rt ? this.boundaryLineString(this._geom) : this._geom instanceof pt ? this.boundaryMultiLineString(this._geom) : this._geom.getBoundary();
      }
    }, {
      key: "boundaryLineString",
      value: function boundaryLineString(t) {
        if (this._geom.isEmpty()) return this.getEmptyMultiPoint();

        if (t.isClosed()) {
          return this._bnRule.isInBoundary(2) ? t.getStartPoint() : this._geomFact.createMultiPoint();
        }

        return this._geomFact.createMultiPoint([t.getStartPoint(), t.getEndPoint()]);
      }
    }, {
      key: "getEmptyMultiPoint",
      value: function getEmptyMultiPoint() {
        return this._geomFact.createMultiPoint();
      }
    }, {
      key: "computeBoundaryCoordinates",
      value: function computeBoundaryCoordinates(t) {
        var e = new x();
        this._endpointMap = new ot();

        for (var _e88 = 0; _e88 < t.getNumGeometries(); _e88++) {
          var _n59 = t.getGeometryN(_e88);

          0 !== _n59.getNumPoints() && (this.addEndpoint(_n59.getCoordinateN(0)), this.addEndpoint(_n59.getCoordinateN(_n59.getNumPoints() - 1)));
        }

        for (var _t121 = this._endpointMap.entrySet().iterator(); _t121.hasNext();) {
          var _n60 = _t121.next(),
              _s35 = _n60.getValue().count;

          this._bnRule.isInBoundary(_s35) && e.add(_n60.getKey());
        }

        return X.toCoordinateArray(e);
      }
    }, {
      key: "addEndpoint",
      value: function addEndpoint(t) {
        var e = this._endpointMap.get(t);

        null === e && (e = new yt(), this._endpointMap.put(t, e)), e.count++;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return mt;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "getBoundary",
      value: function getBoundary() {
        if (1 === arguments.length) {
          var _t122 = arguments[0];
          return new mt(_t122).getBoundary();
        }

        if (2 === arguments.length) {
          var _t123 = arguments[0],
              _e89 = arguments[1];
          return new mt(_t123, _e89).getBoundary();
        }
      }
    }]);

    return mt;
  }();

  mt.constructor_ = function () {
    if (this._geom = null, this._geomFact = null, this._bnRule = null, this._endpointMap = null, 1 === arguments.length) {
      var _t124 = arguments[0];
      mt.constructor_.call(this, _t124, V.MOD2_BOUNDARY_RULE);
    } else if (2 === arguments.length) {
      var _t125 = arguments[0],
          _e90 = arguments[1];
      this._geom = _t125, this._geomFact = _t125.getFactory(), this._bnRule = _e90;
    }
  };

  var yt =
  /*#__PURE__*/
  function () {
    function yt() {
      _classCallCheck(this, yt);

      yt.constructor_.apply(this, arguments);
    }

    _createClass(yt, [{
      key: "getClass",
      value: function getClass() {
        return yt;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return yt;
  }();

  yt.constructor_ = function () {
    this.count = null;
  };

  var xt =
  /*#__PURE__*/
  function () {
    function xt() {
      _classCallCheck(this, xt);

      xt.constructor_.apply(this, arguments);
    }

    _createClass(xt, [{
      key: "getClass",
      value: function getClass() {
        return xt;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "ofLine",
      value: function ofLine(t) {
        var e = t.size();
        if (e <= 1) return 0;
        var n = 0;
        var s = new g();
        t.getCoordinate(0, s);
        var i = s.x,
            r = s.y;

        for (var _o12 = 1; _o12 < e; _o12++) {
          t.getCoordinate(_o12, s);

          var _e91 = s.x,
              _l9 = s.y,
              _a8 = _e91 - i,
              _c7 = _l9 - r;

          n += Math.sqrt(_a8 * _a8 + _c7 * _c7), i = _e91, r = _l9;
        }

        return n;
      }
    }]);

    return xt;
  }();

  function Et() {}

  function It() {}

  function Nt() {}

  function Ct() {}

  function St() {}

  xt.constructor_ = function () {};

  var wt =
  /*#__PURE__*/
  function () {
    function wt() {
      _classCallCheck(this, wt);

      wt.constructor_.apply(this, arguments);
    }

    _createClass(wt, [{
      key: "getClass",
      value: function getClass() {
        return wt;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "chars",
      value: function chars(t, e) {
        var n = new Array(e).fill(null);

        for (var _s36 = 0; _s36 < e; _s36++) {
          n[_s36] = t;
        }

        return new String(n);
      }
    }, {
      key: "getStackTrace",
      value: function getStackTrace() {
        if (1 === arguments.length) {
          var _t126 = arguments[0],
              _e92 = new Nt(),
              _n61 = new Et(_e92);

          return _t126.printStackTrace(_n61), _e92.toString();
        }

        if (2 === arguments.length) {
          var _t127 = arguments[0],
              _e93 = arguments[1];
          var _n62 = "";

          var _s37 = new St(new It(wt.getStackTrace(_t127)));

          for (var _t128 = 0; _t128 < _e93; _t128++) {
            try {
              _n62 += _s37.readLine() + wt.NEWLINE;
            } catch (t) {
              if (!(t instanceof Ct)) throw t;
              u.shouldNeverReachHere();
            }
          }

          return _n62;
        }
      }
    }, {
      key: "split",
      value: function split(t, e) {
        var n = e.length,
            s = new x();
        var i = "" + t,
            r = i.indexOf(e);

        for (; r >= 0;) {
          var _t129 = i.substring(0, r);

          s.add(_t129), r = (i = i.substring(r + n)).indexOf(e);
        }

        i.length > 0 && s.add(i);
        var o = new Array(s.size()).fill(null);

        for (var _t130 = 0; _t130 < o.length; _t130++) {
          o[_t130] = s.get(_t130);
        }

        return o;
      }
    }, {
      key: "toString",
      value: function toString() {
        if (1 === arguments.length && "number" == typeof arguments[0]) {
          var _t131 = arguments[0];
          return wt.SIMPLE_ORDINATE_FORMAT.format(_t131);
        }
      }
    }, {
      key: "spaces",
      value: function spaces(t) {
        return wt.chars(" ", t);
      }
    }]);

    return wt;
  }();

  function Lt(t) {
    this.str = t;
  }

  wt.constructor_ = function () {}, wt.NEWLINE = O.getProperty("line.separator"), wt.SIMPLE_ORDINATE_FORMAT = new function () {}("0.#"), Lt.prototype.append = function (t) {
    this.str += t;
  }, Lt.prototype.setCharAt = function (t, e) {
    this.str = this.str.substr(0, t) + e + this.str.substr(t + 1);
  }, Lt.prototype.toString = function (t) {
    return this.str;
  };

  var Tt =
  /*#__PURE__*/
  function () {
    function Tt() {
      _classCallCheck(this, Tt);

      Tt.constructor_.apply(this, arguments);
    }

    _createClass(Tt, [{
      key: "getClass",
      value: function getClass() {
        return Tt;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "copyCoord",
      value: function copyCoord(t, e, n, s) {
        var i = Math.min(t.getDimension(), n.getDimension());

        for (var _r15 = 0; _r15 < i; _r15++) {
          n.setOrdinate(s, _r15, t.getOrdinate(e, _r15));
        }
      }
    }, {
      key: "isRing",
      value: function isRing(t) {
        var e = t.size();
        return 0 === e || !(e <= 3) && t.getOrdinate(0, D.X) === t.getOrdinate(e - 1, D.X) && t.getOrdinate(0, D.Y) === t.getOrdinate(e - 1, D.Y);
      }
    }, {
      key: "isEqual",
      value: function isEqual(t, e) {
        var n = t.size();
        if (n !== e.size()) return !1;
        var s = Math.min(t.getDimension(), e.getDimension());

        for (var _r16 = 0; _r16 < n; _r16++) {
          for (var _n63 = 0; _n63 < s; _n63++) {
            var _s38 = t.getOrdinate(_r16, _n63),
                _o13 = e.getOrdinate(_r16, _n63);

            if (t.getOrdinate(_r16, _n63) !== e.getOrdinate(_r16, _n63) && (!i.isNaN(_s38) || !i.isNaN(_o13))) return !1;
          }
        }

        return !0;
      }
    }, {
      key: "extend",
      value: function extend(t, e, n) {
        var s = t.create(n, e.getDimension()),
            i = e.size();
        if (Tt.copy(e, 0, s, 0, i), i > 0) for (var _t132 = i; _t132 < n; _t132++) {
          Tt.copy(e, i - 1, s, _t132, 1);
        }
        return s;
      }
    }, {
      key: "reverse",
      value: function reverse(t) {
        var e = t.size() - 1,
            n = Math.trunc(e / 2);

        for (var _s39 = 0; _s39 <= n; _s39++) {
          Tt.swap(t, _s39, e - _s39);
        }
      }
    }, {
      key: "swap",
      value: function swap(t, e, n) {
        if (e === n) return null;

        for (var _s40 = 0; _s40 < t.getDimension(); _s40++) {
          var _i20 = t.getOrdinate(e, _s40);

          t.setOrdinate(e, _s40, t.getOrdinate(n, _s40)), t.setOrdinate(n, _s40, _i20);
        }
      }
    }, {
      key: "copy",
      value: function copy(t, e, n, s, i) {
        for (var _r17 = 0; _r17 < i; _r17++) {
          Tt.copyCoord(t, e + _r17, n, s + _r17);
        }
      }
    }, {
      key: "toString",
      value: function toString() {
        if (1 === arguments.length && _(arguments[0], D)) {
          var _t133 = arguments[0],
              _e94 = _t133.size();

          if (0 === _e94) return "()";

          var _n64 = _t133.getDimension(),
              _s41 = new Lt();

          _s41.append("(");

          for (var _i21 = 0; _i21 < _e94; _i21++) {
            _i21 > 0 && _s41.append(" ");

            for (var _e95 = 0; _e95 < _n64; _e95++) {
              _e95 > 0 && _s41.append(","), _s41.append(wt.toString(_t133.getOrdinate(_i21, _e95)));
            }
          }

          return _s41.append(")"), _s41.toString();
        }
      }
    }, {
      key: "ensureValidRing",
      value: function ensureValidRing(t, e) {
        var n = e.size();
        return 0 === n ? e : n <= 3 ? Tt.createClosedRing(t, e, 4) : e.getOrdinate(0, D.X) === e.getOrdinate(n - 1, D.X) && e.getOrdinate(0, D.Y) === e.getOrdinate(n - 1, D.Y) ? e : Tt.createClosedRing(t, e, n + 1);
      }
    }, {
      key: "createClosedRing",
      value: function createClosedRing(t, e, n) {
        var s = t.create(n, e.getDimension()),
            i = e.size();
        Tt.copy(e, 0, s, 0, i);

        for (var _t134 = i; _t134 < n; _t134++) {
          Tt.copy(e, 0, s, _t134, 1);
        }

        return s;
      }
    }]);

    return Tt;
  }();

  Tt.constructor_ = function () {};

  var Rt =
  /*#__PURE__*/
  function (_q2) {
    _inherits(Rt, _q2);

    function Rt() {
      var _this6;

      _classCallCheck(this, Rt);

      _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Rt).call(this)), Rt.constructor_.apply(_assertThisInitialized(_this6), arguments);
      return _this6;
    }

    _createClass(Rt, [{
      key: "computeEnvelopeInternal",
      value: function computeEnvelopeInternal() {
        return this.isEmpty() ? new N() : this._points.expandEnvelope(new N());
      }
    }, {
      key: "isRing",
      value: function isRing() {
        return this.isClosed() && this.isSimple();
      }
    }, {
      key: "getCoordinates",
      value: function getCoordinates() {
        return this._points.toCoordinateArray();
      }
    }, {
      key: "equalsExact",
      value: function equalsExact() {
        if (2 === arguments.length && "number" == typeof arguments[1] && arguments[0] instanceof q) {
          var _t135 = arguments[0],
              _e96 = arguments[1];
          if (!this.isEquivalentClass(_t135)) return !1;
          var _n65 = _t135;
          if (this._points.size() !== _n65._points.size()) return !1;

          for (var _t136 = 0; _t136 < this._points.size(); _t136++) {
            if (!this.equal(this._points.getCoordinate(_t136), _n65._points.getCoordinate(_t136), _e96)) return !1;
          }

          return !0;
        }

        return _get(_getPrototypeOf(Rt.prototype), "equalsExact", this).apply(this, arguments);
      }
    }, {
      key: "normalize",
      value: function normalize() {
        for (var _t137 = 0; _t137 < Math.trunc(this._points.size() / 2); _t137++) {
          var _e97 = this._points.size() - 1 - _t137;

          if (!this._points.getCoordinate(_t137).equals(this._points.getCoordinate(_e97))) {
            if (this._points.getCoordinate(_t137).compareTo(this._points.getCoordinate(_e97)) > 0) {
              var _t138 = this._points.copy();

              Tt.reverse(_t138), this._points = _t138;
            }

            return null;
          }
        }
      }
    }, {
      key: "getCoordinate",
      value: function getCoordinate() {
        return this.isEmpty() ? null : this._points.getCoordinate(0);
      }
    }, {
      key: "getBoundaryDimension",
      value: function getBoundaryDimension() {
        return this.isClosed() ? gt.FALSE : 0;
      }
    }, {
      key: "isClosed",
      value: function isClosed() {
        return !this.isEmpty() && this.getCoordinateN(0).equals2D(this.getCoordinateN(this.getNumPoints() - 1));
      }
    }, {
      key: "getEndPoint",
      value: function getEndPoint() {
        return this.isEmpty() ? null : this.getPointN(this.getNumPoints() - 1);
      }
    }, {
      key: "getTypeCode",
      value: function getTypeCode() {
        return q.TYPECODE_LINESTRING;
      }
    }, {
      key: "getDimension",
      value: function getDimension() {
        return 1;
      }
    }, {
      key: "getLength",
      value: function getLength() {
        return xt.ofLine(this._points);
      }
    }, {
      key: "getNumPoints",
      value: function getNumPoints() {
        return this._points.size();
      }
    }, {
      key: "reverse",
      value: function reverse() {
        var t = this._points.copy();

        return Tt.reverse(t), this.getFactory().createLineString(t);
      }
    }, {
      key: "compareToSameClass",
      value: function compareToSameClass() {
        if (1 === arguments.length) {
          var _t139 = arguments[0];
          var _e98 = 0,
              _n66 = 0;

          for (; _e98 < this._points.size() && _n66 < _t139._points.size();) {
            var _s42 = this._points.getCoordinate(_e98).compareTo(_t139._points.getCoordinate(_n66));

            if (0 !== _s42) return _s42;
            _e98++, _n66++;
          }

          return _e98 < this._points.size() ? 1 : _n66 < _t139._points.size() ? -1 : 0;
        }

        if (2 === arguments.length) {
          var _t140 = arguments[0];
          return arguments[1].compare(this._points, _t140._points);
        }
      }
    }, {
      key: "apply",
      value: function apply() {
        if (_(arguments[0], B)) {
          var _t141 = arguments[0];

          for (var _e99 = 0; _e99 < this._points.size(); _e99++) {
            _t141.filter(this._points.getCoordinate(_e99));
          }
        } else if (_(arguments[0], _t)) {
          var _t142 = arguments[0];
          if (0 === this._points.size()) return null;

          for (var _e100 = 0; _e100 < this._points.size() && (_t142.filter(this._points, _e100), !_t142.isDone()); _e100++) {
            ;
          }

          _t142.isGeometryChanged() && this.geometryChanged();
        } else if (_(arguments[0], dt)) {
          arguments[0].filter(this);
        } else if (_(arguments[0], G)) {
          arguments[0].filter(this);
        }
      }
    }, {
      key: "getBoundary",
      value: function getBoundary() {
        return new mt(this).getBoundary();
      }
    }, {
      key: "isEquivalentClass",
      value: function isEquivalentClass(t) {
        return t instanceof Rt;
      }
    }, {
      key: "getCoordinateN",
      value: function getCoordinateN(t) {
        return this._points.getCoordinate(t);
      }
    }, {
      key: "getGeometryType",
      value: function getGeometryType() {
        return q.TYPENAME_LINESTRING;
      }
    }, {
      key: "copy",
      value: function copy() {
        return new Rt(this._points.copy(), this._factory);
      }
    }, {
      key: "getCoordinateSequence",
      value: function getCoordinateSequence() {
        return this._points;
      }
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        return 0 === this._points.size();
      }
    }, {
      key: "init",
      value: function init(t) {
        if (null === t && (t = this.getFactory().getCoordinateSequenceFactory().create([])), 1 === t.size()) throw new n("Invalid number of points in LineString (found " + t.size() + " - must be 0 or >= 2)");
        this._points = t;
      }
    }, {
      key: "isCoordinate",
      value: function isCoordinate(t) {
        for (var _e101 = 0; _e101 < this._points.size(); _e101++) {
          if (this._points.getCoordinate(_e101).equals(t)) return !0;
        }

        return !1;
      }
    }, {
      key: "getStartPoint",
      value: function getStartPoint() {
        return this.isEmpty() ? null : this.getPointN(0);
      }
    }, {
      key: "getPointN",
      value: function getPointN(t) {
        return this.getFactory().createPoint(this._points.getCoordinate(t));
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Rt;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [lt];
      }
    }]);

    return Rt;
  }(q);

  Rt.constructor_ = function () {
    if (this._points = null, 0 === arguments.length) ;else if (2 === arguments.length) {
      var _t143 = arguments[0],
          _e102 = arguments[1];
      q.constructor_.call(this, _e102), this.init(_t143);
    }
  }, Rt.serialVersionUID = 0x2b2b51ba435c8e00;

  var Pt =
  /*#__PURE__*/
  function () {
    function Pt() {
      _classCallCheck(this, Pt);

      Pt.constructor_.apply(this, arguments);
    }

    _createClass(Pt, [{
      key: "getClass",
      value: function getClass() {
        return Pt;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Pt;
  }();

  Pt.constructor_ = function () {};

  var vt =
  /*#__PURE__*/
  function (_q3) {
    _inherits(vt, _q3);

    function vt() {
      var _this7;

      _classCallCheck(this, vt);

      _this7 = _possibleConstructorReturn(this, _getPrototypeOf(vt).call(this)), vt.constructor_.apply(_assertThisInitialized(_this7), arguments);
      return _this7;
    }

    _createClass(vt, [{
      key: "computeEnvelopeInternal",
      value: function computeEnvelopeInternal() {
        if (this.isEmpty()) return new N();
        var t = new N();
        return t.expandToInclude(this._coordinates.getX(0), this._coordinates.getY(0)), t;
      }
    }, {
      key: "getCoordinates",
      value: function getCoordinates() {
        return this.isEmpty() ? [] : [this.getCoordinate()];
      }
    }, {
      key: "equalsExact",
      value: function equalsExact() {
        if (2 === arguments.length && "number" == typeof arguments[1] && arguments[0] instanceof q) {
          var _t144 = arguments[0],
              _e103 = arguments[1];
          return !!this.isEquivalentClass(_t144) && (!(!this.isEmpty() || !_t144.isEmpty()) || this.isEmpty() === _t144.isEmpty() && this.equal(_t144.getCoordinate(), this.getCoordinate(), _e103));
        }

        return _get(_getPrototypeOf(vt.prototype), "equalsExact", this).apply(this, arguments);
      }
    }, {
      key: "normalize",
      value: function normalize() {}
    }, {
      key: "getCoordinate",
      value: function getCoordinate() {
        return 0 !== this._coordinates.size() ? this._coordinates.getCoordinate(0) : null;
      }
    }, {
      key: "getBoundaryDimension",
      value: function getBoundaryDimension() {
        return gt.FALSE;
      }
    }, {
      key: "getTypeCode",
      value: function getTypeCode() {
        return q.TYPECODE_POINT;
      }
    }, {
      key: "getDimension",
      value: function getDimension() {
        return 0;
      }
    }, {
      key: "getNumPoints",
      value: function getNumPoints() {
        return this.isEmpty() ? 0 : 1;
      }
    }, {
      key: "reverse",
      value: function reverse() {
        return this.copy();
      }
    }, {
      key: "getX",
      value: function getX() {
        if (null === this.getCoordinate()) throw new IllegalStateException("getX called on empty Point");
        return this.getCoordinate().x;
      }
    }, {
      key: "compareToSameClass",
      value: function compareToSameClass() {
        if (1 === arguments.length) {
          var _t145 = arguments[0];
          return this.getCoordinate().compareTo(_t145.getCoordinate());
        }

        if (2 === arguments.length) {
          var _t146 = arguments[0];
          return arguments[1].compare(this._coordinates, _t146._coordinates);
        }
      }
    }, {
      key: "apply",
      value: function apply() {
        if (_(arguments[0], B)) {
          var _t147 = arguments[0];
          if (this.isEmpty()) return null;

          _t147.filter(this.getCoordinate());
        } else if (_(arguments[0], _t)) {
          var _t148 = arguments[0];
          if (this.isEmpty()) return null;
          _t148.filter(this._coordinates, 0), _t148.isGeometryChanged() && this.geometryChanged();
        } else if (_(arguments[0], dt)) {
          arguments[0].filter(this);
        } else if (_(arguments[0], G)) {
          arguments[0].filter(this);
        }
      }
    }, {
      key: "getBoundary",
      value: function getBoundary() {
        return this.getFactory().createGeometryCollection();
      }
    }, {
      key: "getGeometryType",
      value: function getGeometryType() {
        return q.TYPENAME_POINT;
      }
    }, {
      key: "copy",
      value: function copy() {
        return new vt(this._coordinates.copy(), this._factory);
      }
    }, {
      key: "getCoordinateSequence",
      value: function getCoordinateSequence() {
        return this._coordinates;
      }
    }, {
      key: "getY",
      value: function getY() {
        if (null === this.getCoordinate()) throw new IllegalStateException("getY called on empty Point");
        return this.getCoordinate().y;
      }
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        return 0 === this._coordinates.size();
      }
    }, {
      key: "init",
      value: function init(t) {
        null === t && (t = this.getFactory().getCoordinateSequenceFactory().create([])), u.isTrue(t.size() <= 1), this._coordinates = t;
      }
    }, {
      key: "isSimple",
      value: function isSimple() {
        return !0;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return vt;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [Pt];
      }
    }]);

    return vt;
  }(q);

  vt.constructor_ = function () {
    this._coordinates = null;
    var t = arguments[0],
        e = arguments[1];
    q.constructor_.call(this, e), this.init(t);
  }, vt.serialVersionUID = 0x44077bad161cbc00;

  var Ot =
  /*#__PURE__*/
  function () {
    function Ot() {
      _classCallCheck(this, Ot);

      Ot.constructor_.apply(this, arguments);
    }

    _createClass(Ot, [{
      key: "getClass",
      value: function getClass() {
        return Ot;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "ofRing",
      value: function ofRing() {
        if (arguments[0] instanceof Array) {
          var _t149 = arguments[0];
          return Math.abs(Ot.ofRingSigned(_t149));
        }

        if (_(arguments[0], D)) {
          var _t150 = arguments[0];
          return Math.abs(Ot.ofRingSigned(_t150));
        }
      }
    }, {
      key: "ofRingSigned",
      value: function ofRingSigned() {
        if (arguments[0] instanceof Array) {
          var _t151 = arguments[0];
          if (_t151.length < 3) return 0;
          var _e104 = 0;
          var _n67 = _t151[0].x;

          for (var _s43 = 1; _s43 < _t151.length - 1; _s43++) {
            var _i22 = _t151[_s43].x - _n67,
                _r18 = _t151[_s43 + 1].y;

            _e104 += _i22 * (_t151[_s43 - 1].y - _r18);
          }

          return _e104 / 2;
        }

        if (_(arguments[0], D)) {
          var _t152 = arguments[0],
              _e105 = _t152.size();

          if (_e105 < 3) return 0;

          var _n68 = new g(),
              _s44 = new g(),
              _i23 = new g();

          _t152.getCoordinate(0, _s44), _t152.getCoordinate(1, _i23);
          var _r19 = _s44.x;
          _i23.x -= _r19;
          var _o14 = 0;

          for (var _l10 = 1; _l10 < _e105 - 1; _l10++) {
            _n68.y = _s44.y, _s44.x = _i23.x, _s44.y = _i23.y, _t152.getCoordinate(_l10 + 1, _i23), _i23.x -= _r19, _o14 += _s44.x * (_n68.y - _i23.y);
          }

          return _o14 / 2;
        }
      }
    }]);

    return Ot;
  }();

  Ot.constructor_ = function () {};

  var bt =
  /*#__PURE__*/
  function () {
    function bt() {
      _classCallCheck(this, bt);

      bt.constructor_.apply(this, arguments);
    }

    _createClass(bt, [{
      key: "getClass",
      value: function getClass() {
        return bt;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return bt;
  }();

  bt.constructor_ = function () {};

  var Mt =
  /*#__PURE__*/
  function (_q4) {
    _inherits(Mt, _q4);

    function Mt() {
      var _this8;

      _classCallCheck(this, Mt);

      _this8 = _possibleConstructorReturn(this, _getPrototypeOf(Mt).call(this)), Mt.constructor_.apply(_assertThisInitialized(_this8), arguments);
      return _this8;
    }

    _createClass(Mt, [{
      key: "computeEnvelopeInternal",
      value: function computeEnvelopeInternal() {
        return this._shell.getEnvelopeInternal();
      }
    }, {
      key: "getCoordinates",
      value: function getCoordinates() {
        if (this.isEmpty()) return [];
        var t = new Array(this.getNumPoints()).fill(null);
        var e = -1;

        var n = this._shell.getCoordinates();

        for (var _s45 = 0; _s45 < n.length; _s45++) {
          t[++e] = n[_s45];
        }

        for (var _n69 = 0; _n69 < this._holes.length; _n69++) {
          var _s46 = this._holes[_n69].getCoordinates();

          for (var _n70 = 0; _n70 < _s46.length; _n70++) {
            t[++e] = _s46[_n70];
          }
        }

        return t;
      }
    }, {
      key: "getArea",
      value: function getArea() {
        var t = 0;
        t += Ot.ofRing(this._shell.getCoordinateSequence());

        for (var _e106 = 0; _e106 < this._holes.length; _e106++) {
          t -= Ot.ofRing(this._holes[_e106].getCoordinateSequence());
        }

        return t;
      }
    }, {
      key: "isRectangle",
      value: function isRectangle() {
        if (0 !== this.getNumInteriorRing()) return !1;
        if (null === this._shell) return !1;
        if (5 !== this._shell.getNumPoints()) return !1;

        var t = this._shell.getCoordinateSequence(),
            e = this.getEnvelopeInternal();

        for (var _n71 = 0; _n71 < 5; _n71++) {
          var _s47 = t.getX(_n71);

          if (_s47 !== e.getMinX() && _s47 !== e.getMaxX()) return !1;

          var _i24 = t.getY(_n71);

          if (_i24 !== e.getMinY() && _i24 !== e.getMaxY()) return !1;
        }

        var n = t.getX(0),
            s = t.getY(0);

        for (var _e107 = 1; _e107 <= 4; _e107++) {
          var _i25 = t.getX(_e107),
              _r20 = t.getY(_e107);

          if (_i25 !== n === (_r20 !== s)) return !1;
          n = _i25, s = _r20;
        }

        return !0;
      }
    }, {
      key: "equalsExact",
      value: function equalsExact() {
        if (2 === arguments.length && "number" == typeof arguments[1] && arguments[0] instanceof q) {
          var _t153 = arguments[0],
              _e108 = arguments[1];
          if (!this.isEquivalentClass(_t153)) return !1;
          var _n72 = _t153,
              _s48 = this._shell,
              _i26 = _n72._shell;
          if (!_s48.equalsExact(_i26, _e108)) return !1;
          if (this._holes.length !== _n72._holes.length) return !1;

          for (var _t154 = 0; _t154 < this._holes.length; _t154++) {
            if (!this._holes[_t154].equalsExact(_n72._holes[_t154], _e108)) return !1;
          }

          return !0;
        }

        return _get(_getPrototypeOf(Mt.prototype), "equalsExact", this).apply(this, arguments);
      }
    }, {
      key: "normalize",
      value: function normalize() {
        if (0 === arguments.length) {
          this.normalize(this._shell, !0);

          for (var _t155 = 0; _t155 < this._holes.length; _t155++) {
            this.normalize(this._holes[_t155], !1);
          }

          ut.sort(this._holes);
        } else if (2 === arguments.length) {
          var _t156 = arguments[0],
              _e109 = arguments[1];
          if (_t156.isEmpty()) return null;

          var _n73 = new Array(_t156.getCoordinates().length - 1).fill(null);

          O.arraycopy(_t156.getCoordinates(), 0, _n73, 0, _n73.length);

          var _s49 = X.minCoordinate(_t156.getCoordinates());

          X.scroll(_n73, _s49), O.arraycopy(_n73, 0, _t156.getCoordinates(), 0, _n73.length), _t156.getCoordinates()[_n73.length] = _n73[0], v.isCCW(_t156.getCoordinates()) === _e109 && X.reverse(_t156.getCoordinates());
        }
      }
    }, {
      key: "getCoordinate",
      value: function getCoordinate() {
        return this._shell.getCoordinate();
      }
    }, {
      key: "getNumInteriorRing",
      value: function getNumInteriorRing() {
        return this._holes.length;
      }
    }, {
      key: "getBoundaryDimension",
      value: function getBoundaryDimension() {
        return 1;
      }
    }, {
      key: "getTypeCode",
      value: function getTypeCode() {
        return q.TYPECODE_POLYGON;
      }
    }, {
      key: "getDimension",
      value: function getDimension() {
        return 2;
      }
    }, {
      key: "getLength",
      value: function getLength() {
        var t = 0;
        t += this._shell.getLength();

        for (var _e110 = 0; _e110 < this._holes.length; _e110++) {
          t += this._holes[_e110].getLength();
        }

        return t;
      }
    }, {
      key: "getNumPoints",
      value: function getNumPoints() {
        var t = this._shell.getNumPoints();

        for (var _e111 = 0; _e111 < this._holes.length; _e111++) {
          t += this._holes[_e111].getNumPoints();
        }

        return t;
      }
    }, {
      key: "reverse",
      value: function reverse() {
        var t = this.copy();
        t._shell = this._shell.copy().reverse(), t._holes = new Array(this._holes.length).fill(null);

        for (var _e112 = 0; _e112 < this._holes.length; _e112++) {
          t._holes[_e112] = this._holes[_e112].copy().reverse();
        }

        return t;
      }
    }, {
      key: "convexHull",
      value: function convexHull() {
        return this.getExteriorRing().convexHull();
      }
    }, {
      key: "compareToSameClass",
      value: function compareToSameClass() {
        if (1 === arguments.length) {
          var _t157 = arguments[0],
              _e113 = this._shell,
              _n74 = _t157._shell;
          return _e113.compareToSameClass(_n74);
        }

        if (2 === arguments.length) {
          var _t158 = arguments[0],
              _e114 = arguments[1],
              _n75 = _t158,
              _s50 = this._shell,
              _i27 = _n75._shell,
              _r21 = _s50.compareToSameClass(_i27, _e114);

          if (0 !== _r21) return _r21;

          var _o15 = this.getNumInteriorRing(),
              _l11 = _n75.getNumInteriorRing();

          var _a9 = 0;

          for (; _a9 < _o15 && _a9 < _l11;) {
            var _t159 = this.getInteriorRingN(_a9),
                _s51 = _n75.getInteriorRingN(_a9),
                _i28 = _t159.compareToSameClass(_s51, _e114);

            if (0 !== _i28) return _i28;
            _a9++;
          }

          return _a9 < _o15 ? 1 : _a9 < _l11 ? -1 : 0;
        }
      }
    }, {
      key: "apply",
      value: function apply() {
        if (_(arguments[0], B)) {
          var _t160 = arguments[0];

          this._shell.apply(_t160);

          for (var _e115 = 0; _e115 < this._holes.length; _e115++) {
            this._holes[_e115].apply(_t160);
          }
        } else if (_(arguments[0], _t)) {
          var _t161 = arguments[0];
          if (this._shell.apply(_t161), !_t161.isDone()) for (var _e116 = 0; _e116 < this._holes.length && (this._holes[_e116].apply(_t161), !_t161.isDone()); _e116++) {
            ;
          }
          _t161.isGeometryChanged() && this.geometryChanged();
        } else if (_(arguments[0], dt)) {
          arguments[0].filter(this);
        } else if (_(arguments[0], G)) {
          var _t162 = arguments[0];
          _t162.filter(this), this._shell.apply(_t162);

          for (var _e117 = 0; _e117 < this._holes.length; _e117++) {
            this._holes[_e117].apply(_t162);
          }
        }
      }
    }, {
      key: "getBoundary",
      value: function getBoundary() {
        if (this.isEmpty()) return this.getFactory().createMultiLineString();
        var t = new Array(this._holes.length + 1).fill(null);
        t[0] = this._shell;

        for (var _e118 = 0; _e118 < this._holes.length; _e118++) {
          t[_e118 + 1] = this._holes[_e118];
        }

        return t.length <= 1 ? this.getFactory().createLinearRing(t[0].getCoordinateSequence()) : this.getFactory().createMultiLineString(t);
      }
    }, {
      key: "getGeometryType",
      value: function getGeometryType() {
        return q.TYPENAME_POLYGON;
      }
    }, {
      key: "copy",
      value: function copy() {
        var t = this._shell.copy(),
            e = new Array(this._holes.length).fill(null);

        for (var _t163 = 0; _t163 < this._holes.length; _t163++) {
          e[_t163] = this._holes[_t163].copy();
        }

        return new Mt(t, e, this._factory);
      }
    }, {
      key: "getExteriorRing",
      value: function getExteriorRing() {
        return this._shell;
      }
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        return this._shell.isEmpty();
      }
    }, {
      key: "getInteriorRingN",
      value: function getInteriorRingN(t) {
        return this._holes[t];
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Mt;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [bt];
      }
    }]);

    return Mt;
  }(q);

  Mt.constructor_ = function () {
    this._shell = null, this._holes = null;
    var t = arguments[0],
        e = arguments[1];
    var s = arguments[2];
    if (q.constructor_.call(this, s), null === t && (t = this.getFactory().createLinearRing()), null === e && (e = []), q.hasNullElements(e)) throw new n("holes must not contain null elements");
    if (t.isEmpty() && q.hasNonEmptyElements(e)) throw new n("shell is empty but holes are not");
    this._shell = t, this._holes = e;
  }, Mt.serialVersionUID = -0x307ffefd8dc97200;

  var At =
  /*#__PURE__*/
  function (_ft2) {
    _inherits(At, _ft2);

    function At() {
      var _this9;

      _classCallCheck(this, At);

      _this9 = _possibleConstructorReturn(this, _getPrototypeOf(At).call(this)), At.constructor_.apply(_assertThisInitialized(_this9), arguments);
      return _this9;
    }

    _createClass(At, [{
      key: "isValid",
      value: function isValid() {
        return !0;
      }
    }, {
      key: "equalsExact",
      value: function equalsExact() {
        if (2 === arguments.length && "number" == typeof arguments[1] && arguments[0] instanceof q) {
          var _t164 = arguments[0],
              _e119 = arguments[1];
          return !!this.isEquivalentClass(_t164) && _get(_getPrototypeOf(At.prototype), "equalsExact", this).call(this, _t164, _e119);
        }

        return _get(_getPrototypeOf(At.prototype), "equalsExact", this).apply(this, arguments);
      }
    }, {
      key: "getCoordinate",
      value: function getCoordinate() {
        if (1 === arguments.length && Number.isInteger(arguments[0])) {
          var _t165 = arguments[0];
          return this._geometries[_t165].getCoordinate();
        }

        return _get(_getPrototypeOf(At.prototype), "getCoordinate", this).apply(this, arguments);
      }
    }, {
      key: "getBoundaryDimension",
      value: function getBoundaryDimension() {
        return gt.FALSE;
      }
    }, {
      key: "getTypeCode",
      value: function getTypeCode() {
        return q.TYPECODE_MULTIPOINT;
      }
    }, {
      key: "getDimension",
      value: function getDimension() {
        return 0;
      }
    }, {
      key: "getBoundary",
      value: function getBoundary() {
        return this.getFactory().createGeometryCollection();
      }
    }, {
      key: "getGeometryType",
      value: function getGeometryType() {
        return q.TYPENAME_MULTIPOINT;
      }
    }, {
      key: "copy",
      value: function copy() {
        var t = new Array(this._geometries.length).fill(null);

        for (var _e120 = 0; _e120 < t.length; _e120++) {
          t[_e120] = this._geometries[_e120].copy();
        }

        return new At(t, this._factory);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return At;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [Pt];
      }
    }]);

    return At;
  }(ft);

  At.constructor_ = function () {
    var t = arguments[0],
        e = arguments[1];
    ft.constructor_.call(this, t, e);
  }, At.serialVersionUID = -0x6fb1ed4162e0fc00;

  var Dt =
  /*#__PURE__*/
  function (_Rt) {
    _inherits(Dt, _Rt);

    function Dt() {
      var _this10;

      _classCallCheck(this, Dt);

      _this10 = _possibleConstructorReturn(this, _getPrototypeOf(Dt).call(this)), Dt.constructor_.apply(_assertThisInitialized(_this10), arguments);
      return _this10;
    }

    _createClass(Dt, [{
      key: "getBoundaryDimension",
      value: function getBoundaryDimension() {
        return gt.FALSE;
      }
    }, {
      key: "isClosed",
      value: function isClosed() {
        return !!this.isEmpty() || _get(_getPrototypeOf(Dt.prototype), "isClosed", this).call(this);
      }
    }, {
      key: "getTypeCode",
      value: function getTypeCode() {
        return q.TYPECODE_LINEARRING;
      }
    }, {
      key: "reverse",
      value: function reverse() {
        var t = this._points.copy();

        return Tt.reverse(t), this.getFactory().createLinearRing(t);
      }
    }, {
      key: "validateConstruction",
      value: function validateConstruction() {
        if (!this.isEmpty() && !_get(_getPrototypeOf(Dt.prototype), "isClosed", this).call(this)) throw new n("Points of LinearRing do not form a closed linestring");
        if (this.getCoordinateSequence().size() >= 1 && this.getCoordinateSequence().size() < Dt.MINIMUM_VALID_SIZE) throw new n("Invalid number of points in LinearRing (found " + this.getCoordinateSequence().size() + " - must be 0 or >= 4)");
      }
    }, {
      key: "getGeometryType",
      value: function getGeometryType() {
        return q.TYPENAME_LINEARRING;
      }
    }, {
      key: "copy",
      value: function copy() {
        return new Dt(this._points.copy(), this._factory);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Dt;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Dt;
  }(Rt);

  Dt.constructor_ = function () {
    if (arguments[0] instanceof Array && arguments[1] instanceof Wt) {
      var _t166 = arguments[0],
          _e121 = arguments[1];
      Dt.constructor_.call(this, _e121.getCoordinateSequenceFactory().create(_t166), _e121);
    } else if (_(arguments[0], D) && arguments[1] instanceof Wt) {
      var _t167 = arguments[0],
          _e122 = arguments[1];
      Rt.constructor_.call(this, _t167, _e122), this.validateConstruction();
    }
  }, Dt.MINIMUM_VALID_SIZE = 4, Dt.serialVersionUID = -0x3b229e262367a600;

  var Ft =
  /*#__PURE__*/
  function (_ft3) {
    _inherits(Ft, _ft3);

    function Ft() {
      var _this11;

      _classCallCheck(this, Ft);

      _this11 = _possibleConstructorReturn(this, _getPrototypeOf(Ft).call(this)), Ft.constructor_.apply(_assertThisInitialized(_this11), arguments);
      return _this11;
    }

    _createClass(Ft, [{
      key: "equalsExact",
      value: function equalsExact() {
        if (2 === arguments.length && "number" == typeof arguments[1] && arguments[0] instanceof q) {
          var _t168 = arguments[0],
              _e123 = arguments[1];
          return !!this.isEquivalentClass(_t168) && _get(_getPrototypeOf(Ft.prototype), "equalsExact", this).call(this, _t168, _e123);
        }

        return _get(_getPrototypeOf(Ft.prototype), "equalsExact", this).apply(this, arguments);
      }
    }, {
      key: "getBoundaryDimension",
      value: function getBoundaryDimension() {
        return 1;
      }
    }, {
      key: "getTypeCode",
      value: function getTypeCode() {
        return q.TYPECODE_MULTIPOLYGON;
      }
    }, {
      key: "getDimension",
      value: function getDimension() {
        return 2;
      }
    }, {
      key: "reverse",
      value: function reverse() {
        var t = this._geometries.length,
            e = new Array(t).fill(null);

        for (var _t169 = 0; _t169 < this._geometries.length; _t169++) {
          e[_t169] = this._geometries[_t169].reverse();
        }

        return this.getFactory().createMultiPolygon(e);
      }
    }, {
      key: "getBoundary",
      value: function getBoundary() {
        if (this.isEmpty()) return this.getFactory().createMultiLineString();
        var t = new x();

        for (var _e124 = 0; _e124 < this._geometries.length; _e124++) {
          var _n76 = this._geometries[_e124].getBoundary();

          for (var _e125 = 0; _e125 < _n76.getNumGeometries(); _e125++) {
            t.add(_n76.getGeometryN(_e125));
          }
        }

        var e = new Array(t.size()).fill(null);
        return this.getFactory().createMultiLineString(t.toArray(e));
      }
    }, {
      key: "getGeometryType",
      value: function getGeometryType() {
        return q.TYPENAME_MULTIPOLYGON;
      }
    }, {
      key: "copy",
      value: function copy() {
        var t = new Array(this._geometries.length).fill(null);

        for (var _e126 = 0; _e126 < t.length; _e126++) {
          t[_e126] = this._geometries[_e126].copy();
        }

        return new Ft(t, this._factory);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Ft;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [bt];
      }
    }]);

    return Ft;
  }(ft);

  Ft.constructor_ = function () {
    var t = arguments[0],
        e = arguments[1];
    ft.constructor_.call(this, t, e);
  }, Ft.serialVersionUID = -0x7a5aa1369171980;

  var Gt =
  /*#__PURE__*/
  function () {
    function Gt() {
      _classCallCheck(this, Gt);

      Gt.constructor_.apply(this, arguments);
    }

    _createClass(Gt, [{
      key: "setCopyUserData",
      value: function setCopyUserData(t) {
        this._isUserDataCopied = t;
      }
    }, {
      key: "edit",
      value: function edit(t, e) {
        if (null === t) return null;
        var n = this.editInternal(t, e);
        return this._isUserDataCopied && n.setUserData(t.getUserData()), n;
      }
    }, {
      key: "editInternal",
      value: function editInternal(t, e) {
        return null === this._factory && (this._factory = t.getFactory()), t instanceof ft ? this.editGeometryCollection(t, e) : t instanceof Mt ? this.editPolygon(t, e) : t instanceof vt ? e.edit(t, this._factory) : t instanceof Rt ? e.edit(t, this._factory) : (u.shouldNeverReachHere("Unsupported Geometry class: " + t.getClass().getName()), null);
      }
    }, {
      key: "editGeometryCollection",
      value: function editGeometryCollection(t, e) {
        var n = e.edit(t, this._factory),
            s = new x();

        for (var _t170 = 0; _t170 < n.getNumGeometries(); _t170++) {
          var _i29 = this.edit(n.getGeometryN(_t170), e);

          null === _i29 || _i29.isEmpty() || s.add(_i29);
        }

        return n.getClass() === At ? this._factory.createMultiPoint(s.toArray([])) : n.getClass() === pt ? this._factory.createMultiLineString(s.toArray([])) : n.getClass() === Ft ? this._factory.createMultiPolygon(s.toArray([])) : this._factory.createGeometryCollection(s.toArray([]));
      }
    }, {
      key: "editPolygon",
      value: function editPolygon(t, e) {
        var n = e.edit(t, this._factory);
        if (null === n && (n = this._factory.createPolygon()), n.isEmpty()) return n;
        var s = this.edit(n.getExteriorRing(), e);
        if (null === s || s.isEmpty()) return this._factory.createPolygon();
        var i = new x();

        for (var _t171 = 0; _t171 < n.getNumInteriorRing(); _t171++) {
          var _s52 = this.edit(n.getInteriorRingN(_t171), e);

          null === _s52 || _s52.isEmpty() || i.add(_s52);
        }

        return this._factory.createPolygon(s, i.toArray([]));
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Gt;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Gt;
  }();

  function qt() {}

  Gt.GeometryEditorOperation = qt;

  var Bt =
  /*#__PURE__*/
  function () {
    function Bt() {
      _classCallCheck(this, Bt);

      Bt.constructor_.apply(this, arguments);
    }

    _createClass(Bt, [{
      key: "edit",
      value: function edit(t, e) {
        return t;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Bt;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [qt];
      }
    }]);

    return Bt;
  }();

  Bt.constructor_ = function () {};

  var Vt =
  /*#__PURE__*/
  function () {
    function Vt() {
      _classCallCheck(this, Vt);

      Vt.constructor_.apply(this, arguments);
    }

    _createClass(Vt, [{
      key: "edit",
      value: function edit(t, e) {
        var n = this.edit(t.getCoordinates(), t);
        return t instanceof Dt ? null === n ? e.createLinearRing() : e.createLinearRing(n) : t instanceof Rt ? null === n ? e.createLineString() : e.createLineString(n) : t instanceof vt ? null === n || 0 === n.length ? e.createPoint() : e.createPoint(n[0]) : t;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Vt;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [qt];
      }
    }]);

    return Vt;
  }();

  Vt.constructor_ = function () {};

  var zt =
  /*#__PURE__*/
  function () {
    function zt() {
      _classCallCheck(this, zt);

      zt.constructor_.apply(this, arguments);
    }

    _createClass(zt, [{
      key: "edit",
      value: function edit(t, e) {
        return t instanceof Dt ? e.createLinearRing(this.edit(t.getCoordinateSequence(), t)) : t instanceof Rt ? e.createLineString(this.edit(t.getCoordinateSequence(), t)) : t instanceof vt ? e.createPoint(this.edit(t.getCoordinateSequence(), t)) : t;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return zt;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [qt];
      }
    }]);

    return zt;
  }();

  zt.constructor_ = function () {}, Gt.NoOpGeometryOperation = Bt, Gt.CoordinateOperation = Vt, Gt.CoordinateSequenceOperation = zt, Gt.constructor_ = function () {
    if (this._factory = null, this._isUserDataCopied = !1, 0 === arguments.length) ;else if (1 === arguments.length) {
      var _t172 = arguments[0];
      this._factory = _t172;
    }
  };

  var Yt =
  /*#__PURE__*/
  function () {
    function Yt() {
      _classCallCheck(this, Yt);

      Yt.constructor_.apply(this, arguments);
    }

    _createClass(Yt, [{
      key: "setOrdinate",
      value: function setOrdinate(t, e, s) {
        switch (e) {
          case D.X:
            this._coordinates[t].x = s;
            break;

          case D.Y:
            this._coordinates[t].y = s;
            break;

          case D.Z:
            this._coordinates[t].z = s;
            break;

          default:
            throw new n("invalid ordinateIndex");
        }
      }
    }, {
      key: "size",
      value: function size() {
        return this._coordinates.length;
      }
    }, {
      key: "getOrdinate",
      value: function getOrdinate(t, e) {
        switch (e) {
          case D.X:
            return this._coordinates[t].x;

          case D.Y:
            return this._coordinates[t].y;

          case D.Z:
            return this._coordinates[t].z;
        }

        return i.NaN;
      }
    }, {
      key: "getCoordinate",
      value: function getCoordinate() {
        if (1 === arguments.length) {
          var _t173 = arguments[0];
          return this._coordinates[_t173];
        }

        if (2 === arguments.length) {
          var _t174 = arguments[0],
              _e127 = arguments[1];
          _e127.x = this._coordinates[_t174].x, _e127.y = this._coordinates[_t174].y, _e127.z = this._coordinates[_t174].z;
        }
      }
    }, {
      key: "getCoordinateCopy",
      value: function getCoordinateCopy(t) {
        return new g(this._coordinates[t]);
      }
    }, {
      key: "getDimension",
      value: function getDimension() {
        return this._dimension;
      }
    }, {
      key: "getX",
      value: function getX(t) {
        return this._coordinates[t].x;
      }
    }, {
      key: "expandEnvelope",
      value: function expandEnvelope(t) {
        for (var _e128 = 0; _e128 < this._coordinates.length; _e128++) {
          t.expandToInclude(this._coordinates[_e128]);
        }

        return t;
      }
    }, {
      key: "copy",
      value: function copy() {
        var t = new Array(this.size()).fill(null);

        for (var _e129 = 0; _e129 < this._coordinates.length; _e129++) {
          t[_e129] = this._coordinates[_e129].copy();
        }

        return new Yt(t, this._dimension);
      }
    }, {
      key: "toString",
      value: function toString() {
        if (this._coordinates.length > 0) {
          var _t175 = new Lt(17 * this._coordinates.length);

          _t175.append("("), _t175.append(this._coordinates[0]);

          for (var _e130 = 1; _e130 < this._coordinates.length; _e130++) {
            _t175.append(", "), _t175.append(this._coordinates[_e130]);
          }

          return _t175.append(")"), _t175.toString();
        }

        return "()";
      }
    }, {
      key: "getY",
      value: function getY(t) {
        return this._coordinates[t].y;
      }
    }, {
      key: "toCoordinateArray",
      value: function toCoordinateArray() {
        return this._coordinates;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Yt;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [D, a];
      }
    }]);

    return Yt;
  }();

  Yt.constructor_ = function () {
    if (this._dimension = 3, this._coordinates = null, 1 === arguments.length) {
      if (arguments[0] instanceof Array) {
        var _t176 = arguments[0];
        Yt.constructor_.call(this, _t176, 3);
      } else if (Number.isInteger(arguments[0])) {
        var _t177 = arguments[0];
        this._coordinates = new Array(_t177).fill(null);

        for (var _e131 = 0; _e131 < _t177; _e131++) {
          this._coordinates[_e131] = new g();
        }
      } else if (_(arguments[0], D)) {
        var _t178 = arguments[0];
        if (null === _t178) return this._coordinates = new Array(0).fill(null), null;
        this._dimension = _t178.getDimension(), this._coordinates = new Array(_t178.size()).fill(null);

        for (var _e132 = 0; _e132 < this._coordinates.length; _e132++) {
          this._coordinates[_e132] = _t178.getCoordinateCopy(_e132);
        }
      }
    } else if (2 === arguments.length) if (arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
      var _t179 = arguments[0],
          _e133 = arguments[1];
      this._coordinates = _t179, this._dimension = _e133, null === _t179 && (this._coordinates = new Array(0).fill(null));
    } else if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
      var _t180 = arguments[0],
          _e134 = arguments[1];
      this._coordinates = new Array(_t180).fill(null), this._dimension = _e134;

      for (var _e135 = 0; _e135 < _t180; _e135++) {
        this._coordinates[_e135] = new g();
      }
    }
  }, Yt.serialVersionUID = -0xcb44a778db18e00;

  var Ut =
  /*#__PURE__*/
  function () {
    function Ut() {
      _classCallCheck(this, Ut);

      Ut.constructor_.apply(this, arguments);
    }

    _createClass(Ut, [{
      key: "readResolve",
      value: function readResolve() {
        return Ut.instance();
      }
    }, {
      key: "create",
      value: function create() {
        if (1 === arguments.length) {
          if (arguments[0] instanceof Array) {
            var _t181 = arguments[0];
            return new Yt(_t181);
          }

          if (_(arguments[0], D)) {
            var _t182 = arguments[0];
            return new Yt(_t182);
          }
        } else if (2 === arguments.length) {
          var _t183 = arguments[0];
          var _e136 = arguments[1];
          return _e136 > 3 && (_e136 = 3), _e136 < 2 ? new Yt(_t183) : new Yt(_t183, _e136);
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Ut;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [F, a];
      }
    }], [{
      key: "instance",
      value: function instance() {
        return Ut.instanceObject;
      }
    }]);

    return Ut;
  }();

  function kt() {
    this.map_ = new Map();
  }

  Ut.constructor_ = function () {}, Ut.serialVersionUID = -0x38e49fa6cf6f2e00, Ut.instanceObject = new Ut(), kt.prototype = new j(), kt.prototype.get = function (t) {
    return this.map_.get(t) || null;
  }, kt.prototype.put = function (t, e) {
    return this.map_.set(t, e), e;
  }, kt.prototype.values = function () {
    var t = new x(),
        e = this.map_.values();
    var n = e.next();

    for (; !n.done;) {
      t.add(n.value), n = e.next();
    }

    return t;
  }, kt.prototype.entrySet = function () {
    var t = new J();
    return this.map_.entries().forEach(function (e) {
      return t.add(e);
    }), t;
  }, kt.prototype.size = function () {
    return this.map_.size();
  };

  var Xt =
  /*#__PURE__*/
  function () {
    function Xt() {
      _classCallCheck(this, Xt);

      Xt.constructor_.apply(this, arguments);
    }

    _createClass(Xt, [{
      key: "equals",
      value: function equals(t) {
        if (!(t instanceof Xt)) return !1;
        var e = t;
        return this._modelType === e._modelType && this._scale === e._scale;
      }
    }, {
      key: "compareTo",
      value: function compareTo(t) {
        var e = t,
            n = this.getMaximumSignificantDigits(),
            s = e.getMaximumSignificantDigits();
        return new L(n).compareTo(new L(s));
      }
    }, {
      key: "getScale",
      value: function getScale() {
        return this._scale;
      }
    }, {
      key: "isFloating",
      value: function isFloating() {
        return this._modelType === Xt.FLOATING || this._modelType === Xt.FLOATING_SINGLE;
      }
    }, {
      key: "getType",
      value: function getType() {
        return this._modelType;
      }
    }, {
      key: "toString",
      value: function toString() {
        var t = "UNKNOWN";
        return this._modelType === Xt.FLOATING ? t = "Floating" : this._modelType === Xt.FLOATING_SINGLE ? t = "Floating-Single" : this._modelType === Xt.FIXED && (t = "Fixed (Scale=" + this.getScale() + ")"), t;
      }
    }, {
      key: "makePrecise",
      value: function makePrecise() {
        if ("number" == typeof arguments[0]) {
          var _t184 = arguments[0];
          if (i.isNaN(_t184)) return _t184;

          if (this._modelType === Xt.FLOATING_SINGLE) {
            return _t184;
          }

          return this._modelType === Xt.FIXED ? Math.round(_t184 * this._scale) / this._scale : _t184;
        }

        if (arguments[0] instanceof g) {
          var _t185 = arguments[0];
          if (this._modelType === Xt.FLOATING) return null;
          _t185.x = this.makePrecise(_t185.x), _t185.y = this.makePrecise(_t185.y);
        }
      }
    }, {
      key: "getMaximumSignificantDigits",
      value: function getMaximumSignificantDigits() {
        var t = 16;
        return this._modelType === Xt.FLOATING ? t = 16 : this._modelType === Xt.FLOATING_SINGLE ? t = 6 : this._modelType === Xt.FIXED && (t = 1 + Math.trunc(Math.ceil(Math.log(this.getScale()) / Math.log(10)))), t;
      }
    }, {
      key: "setScale",
      value: function setScale(t) {
        this._scale = Math.abs(t);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Xt;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [a, r];
      }
    }], [{
      key: "mostPrecise",
      value: function mostPrecise(t, e) {
        return t.compareTo(e) >= 0 ? t : e;
      }
    }]);

    return Xt;
  }();

  var Ht =
  /*#__PURE__*/
  function () {
    function Ht() {
      _classCallCheck(this, Ht);

      Ht.constructor_.apply(this, arguments);
    }

    _createClass(Ht, [{
      key: "readResolve",
      value: function readResolve() {
        return Ht.nameToTypeMap.get(this._name);
      }
    }, {
      key: "toString",
      value: function toString() {
        return this._name;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Ht;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [a];
      }
    }]);

    return Ht;
  }();

  Ht.constructor_ = function () {
    this._name = null;
    var t = arguments[0];
    this._name = t, Ht.nameToTypeMap.put(t, this);
  }, Ht.serialVersionUID = -552860263173159e4, Ht.nameToTypeMap = new kt(), Xt.Type = Ht, Xt.constructor_ = function () {
    if (this._modelType = null, this._scale = null, 0 === arguments.length) this._modelType = Xt.FLOATING;else if (1 === arguments.length) if (arguments[0] instanceof Ht) {
      var _t186 = arguments[0];
      this._modelType = _t186, _t186 === Xt.FIXED && this.setScale(1);
    } else if ("number" == typeof arguments[0]) {
      var _t187 = arguments[0];
      this._modelType = Xt.FIXED, this.setScale(_t187);
    } else if (arguments[0] instanceof Xt) {
      var _t188 = arguments[0];
      this._modelType = _t188._modelType, this._scale = _t188._scale;
    }
  }, Xt.serialVersionUID = 0x6bee6404e9a25c00, Xt.FIXED = new Ht("FIXED"), Xt.FLOATING = new Ht("FLOATING"), Xt.FLOATING_SINGLE = new Ht("FLOATING SINGLE"), Xt.maximumPreciseValue = 9007199254740992;

  var Wt =
  /*#__PURE__*/
  function () {
    function Wt() {
      _classCallCheck(this, Wt);

      Wt.constructor_.apply(this, arguments);
    }

    _createClass(Wt, [{
      key: "toGeometry",
      value: function toGeometry(t) {
        return t.isNull() ? this.createPoint() : t.getMinX() === t.getMaxX() && t.getMinY() === t.getMaxY() ? this.createPoint(new g(t.getMinX(), t.getMinY())) : t.getMinX() === t.getMaxX() || t.getMinY() === t.getMaxY() ? this.createLineString([new g(t.getMinX(), t.getMinY()), new g(t.getMaxX(), t.getMaxY())]) : this.createPolygon(this.createLinearRing([new g(t.getMinX(), t.getMinY()), new g(t.getMinX(), t.getMaxY()), new g(t.getMaxX(), t.getMaxY()), new g(t.getMaxX(), t.getMinY()), new g(t.getMinX(), t.getMinY())]), null);
      }
    }, {
      key: "createLineString",
      value: function createLineString() {
        if (0 === arguments.length) return this.createLineString(this.getCoordinateSequenceFactory().create([]));

        if (1 === arguments.length) {
          if (arguments[0] instanceof Array) {
            var _t189 = arguments[0];
            return this.createLineString(null !== _t189 ? this.getCoordinateSequenceFactory().create(_t189) : null);
          }

          if (_(arguments[0], D)) {
            var _t190 = arguments[0];
            return new Rt(_t190, this);
          }
        }
      }
    }, {
      key: "createMultiLineString",
      value: function createMultiLineString() {
        if (0 === arguments.length) return new pt(null, this);

        if (1 === arguments.length) {
          var _t191 = arguments[0];
          return new pt(_t191, this);
        }
      }
    }, {
      key: "buildGeometry",
      value: function buildGeometry(t) {
        var e = null,
            n = !1,
            s = !1;

        for (var _i30 = t.iterator(); _i30.hasNext();) {
          var _t192 = _i30.next(),
              _r22 = _t192.getClass();

          null === e && (e = _r22), _r22 !== e && (n = !0), _t192 instanceof ft && (s = !0);
        }

        if (null === e) return this.createGeometryCollection();
        if (n || s) return this.createGeometryCollection(Wt.toGeometryArray(t));
        var i = t.iterator().next();

        if (t.size() > 1) {
          if (i instanceof Mt) return this.createMultiPolygon(Wt.toPolygonArray(t));
          if (i instanceof Rt) return this.createMultiLineString(Wt.toLineStringArray(t));
          if (i instanceof vt) return this.createMultiPoint(Wt.toPointArray(t));
          u.shouldNeverReachHere("Unhandled class: " + i.getClass().getName());
        }

        return i;
      }
    }, {
      key: "createMultiPointFromCoords",
      value: function createMultiPointFromCoords(t) {
        return this.createMultiPoint(null !== t ? this.getCoordinateSequenceFactory().create(t) : null);
      }
    }, {
      key: "createPoint",
      value: function createPoint() {
        if (0 === arguments.length) return this.createPoint(this.getCoordinateSequenceFactory().create([]));

        if (1 === arguments.length) {
          if (arguments[0] instanceof g) {
            var _t193 = arguments[0];
            return this.createPoint(null !== _t193 ? this.getCoordinateSequenceFactory().create([_t193]) : null);
          }

          if (_(arguments[0], D)) {
            var _t194 = arguments[0];
            return new vt(_t194, this);
          }
        }
      }
    }, {
      key: "getCoordinateSequenceFactory",
      value: function getCoordinateSequenceFactory() {
        return this._coordinateSequenceFactory;
      }
    }, {
      key: "createPolygon",
      value: function createPolygon() {
        if (0 === arguments.length) return this.createPolygon(null, null);

        if (1 === arguments.length) {
          if (_(arguments[0], D)) {
            var _t195 = arguments[0];
            return this.createPolygon(this.createLinearRing(_t195));
          }

          if (arguments[0] instanceof Array) {
            var _t196 = arguments[0];
            return this.createPolygon(this.createLinearRing(_t196));
          }

          if (arguments[0] instanceof Dt) {
            var _t197 = arguments[0];
            return this.createPolygon(_t197, null);
          }
        } else if (2 === arguments.length) {
          var _t198 = arguments[0],
              _e137 = arguments[1];
          return new Mt(_t198, _e137, this);
        }
      }
    }, {
      key: "getSRID",
      value: function getSRID() {
        return this._SRID;
      }
    }, {
      key: "createGeometryCollection",
      value: function createGeometryCollection() {
        if (0 === arguments.length) return new ft(null, this);

        if (1 === arguments.length) {
          var _t199 = arguments[0];
          return new ft(_t199, this);
        }
      }
    }, {
      key: "createGeometry",
      value: function createGeometry(t) {
        return new Gt(this).edit(t, new jt(this._coordinateSequenceFactory));
      }
    }, {
      key: "getPrecisionModel",
      value: function getPrecisionModel() {
        return this._precisionModel;
      }
    }, {
      key: "createLinearRing",
      value: function createLinearRing() {
        if (0 === arguments.length) return this.createLinearRing(this.getCoordinateSequenceFactory().create([]));

        if (1 === arguments.length) {
          if (arguments[0] instanceof Array) {
            var _t200 = arguments[0];
            return this.createLinearRing(null !== _t200 ? this.getCoordinateSequenceFactory().create(_t200) : null);
          }

          if (_(arguments[0], D)) {
            var _t201 = arguments[0];
            return new Dt(_t201, this);
          }
        }
      }
    }, {
      key: "createMultiPolygon",
      value: function createMultiPolygon() {
        if (0 === arguments.length) return new Ft(null, this);

        if (1 === arguments.length) {
          var _t202 = arguments[0];
          return new Ft(_t202, this);
        }
      }
    }, {
      key: "createMultiPoint",
      value: function createMultiPoint() {
        if (0 === arguments.length) return new At(null, this);

        if (1 === arguments.length) {
          if (arguments[0] instanceof Array) {
            var _t203 = arguments[0];
            return new At(_t203, this);
          }

          if (_(arguments[0], D)) {
            var _t204 = arguments[0];
            if (null === _t204) return this.createMultiPoint(new Array(0).fill(null));

            var _e138 = new Array(_t204.size()).fill(null);

            for (var _n77 = 0; _n77 < _t204.size(); _n77++) {
              var _s53 = this.getCoordinateSequenceFactory().create(1, _t204.getDimension());

              Tt.copy(_t204, _n77, _s53, 0, 1), _e138[_n77] = this.createPoint(_s53);
            }

            return this.createMultiPoint(_e138);
          }
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Wt;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [a];
      }
    }], [{
      key: "toMultiPolygonArray",
      value: function toMultiPolygonArray(t) {
        var e = new Array(t.size()).fill(null);
        return t.toArray(e);
      }
    }, {
      key: "toGeometryArray",
      value: function toGeometryArray(t) {
        if (null === t) return null;
        var e = new Array(t.size()).fill(null);
        return t.toArray(e);
      }
    }, {
      key: "getDefaultCoordinateSequenceFactory",
      value: function getDefaultCoordinateSequenceFactory() {
        return Ut.instance();
      }
    }, {
      key: "toMultiLineStringArray",
      value: function toMultiLineStringArray(t) {
        var e = new Array(t.size()).fill(null);
        return t.toArray(e);
      }
    }, {
      key: "toLineStringArray",
      value: function toLineStringArray(t) {
        var e = new Array(t.size()).fill(null);
        return t.toArray(e);
      }
    }, {
      key: "toMultiPointArray",
      value: function toMultiPointArray(t) {
        var e = new Array(t.size()).fill(null);
        return t.toArray(e);
      }
    }, {
      key: "toLinearRingArray",
      value: function toLinearRingArray(t) {
        var e = new Array(t.size()).fill(null);
        return t.toArray(e);
      }
    }, {
      key: "toPointArray",
      value: function toPointArray(t) {
        var e = new Array(t.size()).fill(null);
        return t.toArray(e);
      }
    }, {
      key: "toPolygonArray",
      value: function toPolygonArray(t) {
        var e = new Array(t.size()).fill(null);
        return t.toArray(e);
      }
    }, {
      key: "createPointFromInternalCoord",
      value: function createPointFromInternalCoord(t, e) {
        return e.getPrecisionModel().makePrecise(t), e.getFactory().createPoint(t);
      }
    }]);

    return Wt;
  }();

  var jt =
  /*#__PURE__*/
  function (_Gt$CoordinateSequenc) {
    _inherits(jt, _Gt$CoordinateSequenc);

    function jt() {
      var _this12;

      _classCallCheck(this, jt);

      _this12 = _possibleConstructorReturn(this, _getPrototypeOf(jt).call(this)), jt.constructor_.apply(_assertThisInitialized(_this12), arguments);
      return _this12;
    }

    _createClass(jt, [{
      key: "edit",
      value: function edit() {
        if (2 === arguments.length && arguments[1] instanceof q && _(arguments[0], D)) {
          var _t205 = arguments[0];
          return this.coordinateSequenceFactory.create(_t205);
        }

        return _get(_getPrototypeOf(jt.prototype), "edit", this).apply(this, arguments);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return jt;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return jt;
  }(Gt.CoordinateSequenceOperation);

  jt.constructor_ = function () {
    this.coordinateSequenceFactory = null;
    var t = arguments[0];
    this.coordinateSequenceFactory = t;
  }, Wt.CloneOp = jt, Wt.constructor_ = function () {
    if (this._precisionModel = null, this._coordinateSequenceFactory = null, this._SRID = null, 0 === arguments.length) Wt.constructor_.call(this, new Xt(), 0);else if (1 === arguments.length) {
      if (_(arguments[0], F)) {
        var _t206 = arguments[0];
        Wt.constructor_.call(this, new Xt(), 0, _t206);
      } else if (arguments[0] instanceof Xt) {
        var _t207 = arguments[0];
        Wt.constructor_.call(this, _t207, 0, Wt.getDefaultCoordinateSequenceFactory());
      }
    } else if (2 === arguments.length) {
      var _t208 = arguments[0],
          _e139 = arguments[1];
      Wt.constructor_.call(this, _t208, _e139, Wt.getDefaultCoordinateSequenceFactory());
    } else if (3 === arguments.length) {
      var _t209 = arguments[0],
          _e140 = arguments[1],
          _n78 = arguments[2];
      this._precisionModel = _t209, this._coordinateSequenceFactory = _n78, this._SRID = _e140;
    }
  }, Wt.serialVersionUID = -0x5ea75f2051eeb400;
  var Kt = {
    typeStr: /^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/,
    emptyTypeStr: /^\s*(\w+)\s*EMPTY\s*$/,
    spaces: /\s+/,
    parenComma: /\)\s*,\s*\(/,
    doubleParenComma: /\)\s*\)\s*,\s*\(\s*\(/,
    trimParens: /^\s*\(?(.*?)\)?\s*$/
  };

  var Zt =
  /*#__PURE__*/
  function () {
    function Zt(t) {
      _classCallCheck(this, Zt);

      this.geometryFactory = t || new Wt(), this.precisionModel = this.geometryFactory.getPrecisionModel();
    }

    _createClass(Zt, [{
      key: "read",
      value: function read(t) {
        var e, n, s;
        t = t.replace(/[\n\r]/g, " ");
        var i = Kt.typeStr.exec(t);
        if (-1 !== t.search("EMPTY") && ((i = Kt.emptyTypeStr.exec(t))[2] = void 0), i && (n = i[1].toLowerCase(), s = i[2], Jt[n] && (e = Jt[n].call(this, s))), void 0 === e) throw new Error("Could not parse WKT " + t);
        return e;
      }
    }, {
      key: "write",
      value: function write(t) {
        return this.extractGeometry(t);
      }
    }, {
      key: "extractGeometry",
      value: function extractGeometry(t) {
        var e = t.getGeometryType().toLowerCase();
        if (!Qt[e]) return null;
        var n = e.toUpperCase();
        return t.isEmpty() ? n + " EMPTY" : n + "(" + Qt[e].call(this, t) + ")";
      }
    }]);

    return Zt;
  }();

  var Qt = {
    coordinate: function coordinate(t) {
      return this.precisionModel.makePrecise(t), t.x + " " + t.y;
    },
    point: function point(t) {
      return Qt.coordinate.call(this, t._coordinates._coordinates[0]);
    },
    multipoint: function multipoint(t) {
      var e = [];

      for (var _n79 = 0, _s54 = t._geometries.length; _n79 < _s54; ++_n79) {
        e.push("(" + Qt.point.call(this, t._geometries[_n79]) + ")");
      }

      return e.join(",");
    },
    linestring: function linestring(t) {
      var e = [];

      for (var _n80 = 0, _s55 = t._points._coordinates.length; _n80 < _s55; ++_n80) {
        e.push(Qt.coordinate.call(this, t._points._coordinates[_n80]));
      }

      return e.join(",");
    },
    linearring: function linearring(t) {
      var e = [];

      for (var _n81 = 0, _s56 = t._points._coordinates.length; _n81 < _s56; ++_n81) {
        e.push(Qt.coordinate.call(this, t._points._coordinates[_n81]));
      }

      return e.join(",");
    },
    multilinestring: function multilinestring(t) {
      var e = [];

      for (var _n82 = 0, _s57 = t._geometries.length; _n82 < _s57; ++_n82) {
        e.push("(" + Qt.linestring.call(this, t._geometries[_n82]) + ")");
      }

      return e.join(",");
    },
    polygon: function polygon(t) {
      var e = [];
      e.push("(" + Qt.linestring.call(this, t._shell) + ")");

      for (var _n83 = 0, _s58 = t._holes.length; _n83 < _s58; ++_n83) {
        e.push("(" + Qt.linestring.call(this, t._holes[_n83]) + ")");
      }

      return e.join(",");
    },
    multipolygon: function multipolygon(t) {
      var e = [];

      for (var _n84 = 0, _s59 = t._geometries.length; _n84 < _s59; ++_n84) {
        e.push("(" + Qt.polygon.call(this, t._geometries[_n84]) + ")");
      }

      return e.join(",");
    },
    geometrycollection: function geometrycollection(t) {
      var e = [];

      for (var _n85 = 0, _s60 = t._geometries.length; _n85 < _s60; ++_n85) {
        e.push(this.extractGeometry(t._geometries[_n85]));
      }

      return e.join(",");
    }
  },
      Jt = {
    coord: function coord(t) {
      var e = t.trim().split(Kt.spaces),
          n = new g(Number.parseFloat(e[0]), Number.parseFloat(e[1]));
      return this.precisionModel.makePrecise(n), n;
    },
    point: function point(t) {
      return void 0 === t ? this.geometryFactory.createPoint() : this.geometryFactory.createPoint(Jt.coord.call(this, t));
    },
    multipoint: function multipoint(t) {
      if (void 0 === t) return this.geometryFactory.createMultiPoint();
      var e,
          n = t.trim().split(","),
          s = [];

      for (var _t210 = 0, _i31 = n.length; _t210 < _i31; ++_t210) {
        e = n[_t210].replace(Kt.trimParens, "$1"), s.push(Jt.point.call(this, e));
      }

      return this.geometryFactory.createMultiPoint(s);
    },
    linestring: function linestring(t) {
      if (void 0 === t) return this.geometryFactory.createLineString();
      var e = t.trim().split(","),
          n = [];

      for (var _t211 = 0, _s61 = e.length; _t211 < _s61; ++_t211) {
        n.push(Jt.coord.call(this, e[_t211]));
      }

      return this.geometryFactory.createLineString(n);
    },
    linearring: function linearring(t) {
      if (void 0 === t) return this.geometryFactory.createLinearRing();
      var e = t.trim().split(","),
          n = [];

      for (var _t212 = 0, _s62 = e.length; _t212 < _s62; ++_t212) {
        n.push(Jt.coord.call(this, e[_t212]));
      }

      return this.geometryFactory.createLinearRing(n);
    },
    multilinestring: function multilinestring(t) {
      if (void 0 === t) return this.geometryFactory.createMultiLineString();
      var e,
          n = t.trim().split(Kt.parenComma),
          s = [];

      for (var _t213 = 0, _i32 = n.length; _t213 < _i32; ++_t213) {
        e = n[_t213].replace(Kt.trimParens, "$1"), s.push(Jt.linestring.call(this, e));
      }

      return this.geometryFactory.createMultiLineString(s);
    },
    polygon: function polygon(t) {
      if (void 0 === t) return this.geometryFactory.createPolygon();
      var e,
          n,
          s,
          i,
          r = t.trim().split(Kt.parenComma),
          o = [];

      for (var _t214 = 0, _l12 = r.length; _t214 < _l12; ++_t214) {
        e = r[_t214].replace(Kt.trimParens, "$1"), n = Jt.linestring.call(this, e), s = this.geometryFactory.createLinearRing(n._points), 0 === _t214 ? i = s : o.push(s);
      }

      return this.geometryFactory.createPolygon(i, o);
    },
    multipolygon: function multipolygon(t) {
      if (void 0 === t) return this.geometryFactory.createMultiPolygon();
      var e,
          n = t.trim().split(Kt.doubleParenComma),
          s = [];

      for (var _t215 = 0, _i33 = n.length; _t215 < _i33; ++_t215) {
        e = n[_t215].replace(Kt.trimParens, "$1"), s.push(Jt.polygon.call(this, e));
      }

      return this.geometryFactory.createMultiPolygon(s);
    },
    geometrycollection: function geometrycollection(t) {
      if (void 0 === t) return this.geometryFactory.createGeometryCollection();
      var e = (t = t.replace(/,\s*([A-Za-z])/g, "|$1")).trim().split("|"),
          n = [];

      for (var _t216 = 0, _s63 = e.length; _t216 < _s63; ++_t216) {
        n.push(this.read(e[_t216]));
      }

      return this.geometryFactory.createGeometryCollection(n);
    }
  };

  var $t =
  /*#__PURE__*/
  function () {
    function $t(t) {
      _classCallCheck(this, $t);

      this.parser = new Zt(t);
    }

    _createClass($t, [{
      key: "write",
      value: function write(t) {
        return this.parser.write(t);
      }
    }], [{
      key: "toLineString",
      value: function toLineString(t, e) {
        if (2 !== arguments.length) throw new Error("Not implemented");
        return "LINESTRING ( " + t.x + " " + t.y + ", " + e.x + " " + e.y + " )";
      }
    }]);

    return $t;
  }();

  var te =
  /*#__PURE__*/
  function () {
    function te() {
      _classCallCheck(this, te);

      te.constructor_.apply(this, arguments);
    }

    _createClass(te, [{
      key: "getIndexAlongSegment",
      value: function getIndexAlongSegment(t, e) {
        return this.computeIntLineIndex(), this._intLineIndex[t][e];
      }
    }, {
      key: "getTopologySummary",
      value: function getTopologySummary() {
        var t = new Lt();
        return this.isEndPoint() && t.append(" endpoint"), this._isProper && t.append(" proper"), this.isCollinear() && t.append(" collinear"), t.toString();
      }
    }, {
      key: "computeIntersection",
      value: function computeIntersection(t, e, n, s) {
        this._inputLines[0][0] = t, this._inputLines[0][1] = e, this._inputLines[1][0] = n, this._inputLines[1][1] = s, this._result = this.computeIntersect(t, e, n, s);
      }
    }, {
      key: "getIntersectionNum",
      value: function getIntersectionNum() {
        return this._result;
      }
    }, {
      key: "computeIntLineIndex",
      value: function computeIntLineIndex() {
        if (0 === arguments.length) null === this._intLineIndex && (this._intLineIndex = Array(2).fill().map(function () {
          return Array(2);
        }), this.computeIntLineIndex(0), this.computeIntLineIndex(1));else if (1 === arguments.length) {
          var _t217 = arguments[0];
          this.getEdgeDistance(_t217, 0) > this.getEdgeDistance(_t217, 1) ? (this._intLineIndex[_t217][0] = 0, this._intLineIndex[_t217][1] = 1) : (this._intLineIndex[_t217][0] = 1, this._intLineIndex[_t217][1] = 0);
        }
      }
    }, {
      key: "isProper",
      value: function isProper() {
        return this.hasIntersection() && this._isProper;
      }
    }, {
      key: "setPrecisionModel",
      value: function setPrecisionModel(t) {
        this._precisionModel = t;
      }
    }, {
      key: "isInteriorIntersection",
      value: function isInteriorIntersection() {
        if (0 === arguments.length) return !!this.isInteriorIntersection(0) || !!this.isInteriorIntersection(1);

        if (1 === arguments.length) {
          var _t218 = arguments[0];

          for (var _e141 = 0; _e141 < this._result; _e141++) {
            if (!this._intPt[_e141].equals2D(this._inputLines[_t218][0]) && !this._intPt[_e141].equals2D(this._inputLines[_t218][1])) return !0;
          }

          return !1;
        }
      }
    }, {
      key: "getIntersection",
      value: function getIntersection(t) {
        return this._intPt[t];
      }
    }, {
      key: "isEndPoint",
      value: function isEndPoint() {
        return this.hasIntersection() && !this._isProper;
      }
    }, {
      key: "hasIntersection",
      value: function hasIntersection() {
        return this._result !== te.NO_INTERSECTION;
      }
    }, {
      key: "getEdgeDistance",
      value: function getEdgeDistance(t, e) {
        return te.computeEdgeDistance(this._intPt[e], this._inputLines[t][0], this._inputLines[t][1]);
      }
    }, {
      key: "isCollinear",
      value: function isCollinear() {
        return this._result === te.COLLINEAR_INTERSECTION;
      }
    }, {
      key: "toString",
      value: function toString() {
        return $t.toLineString(this._inputLines[0][0], this._inputLines[0][1]) + " - " + $t.toLineString(this._inputLines[1][0], this._inputLines[1][1]) + this.getTopologySummary();
      }
    }, {
      key: "getEndpoint",
      value: function getEndpoint(t, e) {
        return this._inputLines[t][e];
      }
    }, {
      key: "isIntersection",
      value: function isIntersection(t) {
        for (var _e142 = 0; _e142 < this._result; _e142++) {
          if (this._intPt[_e142].equals2D(t)) return !0;
        }

        return !1;
      }
    }, {
      key: "getIntersectionAlongSegment",
      value: function getIntersectionAlongSegment(t, e) {
        return this.computeIntLineIndex(), this._intPt[this._intLineIndex[t][e]];
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return te;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "computeEdgeDistance",
      value: function computeEdgeDistance(t, e, n) {
        var s = Math.abs(n.x - e.x),
            i = Math.abs(n.y - e.y);
        var r = -1;
        if (t.equals(e)) r = 0;else if (t.equals(n)) r = s > i ? s : i;else {
          var _n86 = Math.abs(t.x - e.x),
              _o16 = Math.abs(t.y - e.y);

          0 !== (r = s > i ? _n86 : _o16) || t.equals(e) || (r = Math.max(_n86, _o16));
        }
        return u.isTrue(!(0 === r && !t.equals(e)), "Bad distance calculation"), r;
      }
    }, {
      key: "nonRobustComputeEdgeDistance",
      value: function nonRobustComputeEdgeDistance(t, e, n) {
        var s = t.x - e.x,
            i = t.y - e.y,
            r = Math.sqrt(s * s + i * i);
        return u.isTrue(!(0 === r && !t.equals(e)), "Invalid distance calculation"), r;
      }
    }]);

    return te;
  }();

  te.constructor_ = function () {
    this._result = null, this._inputLines = Array(2).fill().map(function () {
      return Array(2);
    }), this._intPt = new Array(2).fill(null), this._intLineIndex = null, this._isProper = null, this._pa = null, this._pb = null, this._precisionModel = null, this._intPt[0] = new g(), this._intPt[1] = new g(), this._pa = this._intPt[0], this._pb = this._intPt[1], this._result = 0;
  }, te.DONT_INTERSECT = 0, te.DO_INTERSECT = 1, te.COLLINEAR = 2, te.NO_INTERSECTION = 0, te.POINT_INTERSECTION = 1, te.COLLINEAR_INTERSECTION = 2;

  var ee =
  /*#__PURE__*/
  function (_te) {
    _inherits(ee, _te);

    function ee() {
      var _this13;

      _classCallCheck(this, ee);

      _this13 = _possibleConstructorReturn(this, _getPrototypeOf(ee).call(this)), ee.constructor_.apply(_assertThisInitialized(_this13), arguments);
      return _this13;
    }

    _createClass(ee, [{
      key: "isInSegmentEnvelopes",
      value: function isInSegmentEnvelopes(t) {
        var e = new N(this._inputLines[0][0], this._inputLines[0][1]),
            n = new N(this._inputLines[1][0], this._inputLines[1][1]);
        return e.contains(t) && n.contains(t);
      }
    }, {
      key: "computeIntersection",
      value: function computeIntersection() {
        if (3 !== arguments.length) return _get(_getPrototypeOf(ee.prototype), "computeIntersection", this).apply(this, arguments);
        {
          var _t219 = arguments[0],
              _e143 = arguments[1],
              _n87 = arguments[2];
          if (this._isProper = !1, N.intersects(_e143, _n87, _t219) && 0 === v.index(_e143, _n87, _t219) && 0 === v.index(_n87, _e143, _t219)) return this._isProper = !0, (_t219.equals(_e143) || _t219.equals(_n87)) && (this._isProper = !1), this._result = te.POINT_INTERSECTION, null;
          this._result = te.NO_INTERSECTION;
        }
      }
    }, {
      key: "normalizeToMinimum",
      value: function normalizeToMinimum(t, e, n, s, i) {
        i.x = this.smallestInAbsValue(t.x, e.x, n.x, s.x), i.y = this.smallestInAbsValue(t.y, e.y, n.y, s.y), t.x -= i.x, t.y -= i.y, e.x -= i.x, e.y -= i.y, n.x -= i.x, n.y -= i.y, s.x -= i.x, s.y -= i.y;
      }
    }, {
      key: "safeHCoordinateIntersection",
      value: function safeHCoordinateIntersection(t, e, n, s) {
        var i = null;

        try {
          i = b.intersection(t, e, n, s);
        } catch (r) {
          if (!(r instanceof S)) throw r;
          i = ee.nearestEndpoint(t, e, n, s);
        }

        return i;
      }
    }, {
      key: "intersection",
      value: function intersection(t, e, n, s) {
        var i = this.intersectionWithNormalization(t, e, n, s);
        return this.isInSegmentEnvelopes(i) || (i = new g(ee.nearestEndpoint(t, e, n, s))), null !== this._precisionModel && this._precisionModel.makePrecise(i), i;
      }
    }, {
      key: "smallestInAbsValue",
      value: function smallestInAbsValue(t, e, n, s) {
        var i = t,
            r = Math.abs(i);
        return Math.abs(e) < r && (i = e, r = Math.abs(e)), Math.abs(n) < r && (i = n, r = Math.abs(n)), Math.abs(s) < r && (i = s), i;
      }
    }, {
      key: "checkDD",
      value: function checkDD(t, e, n, s, i) {
        var r = P.intersection(t, e, n, s),
            o = this.isInSegmentEnvelopes(r);
        O.out.println("DD in env = " + o + "  --------------------- " + r), i.distance(r) > 1e-4 && O.out.println("Distance = " + i.distance(r));
      }
    }, {
      key: "intersectionWithNormalization",
      value: function intersectionWithNormalization(t, e, n, s) {
        var i = new g(t),
            r = new g(e),
            o = new g(n),
            l = new g(s),
            a = new g();
        this.normalizeToEnvCentre(i, r, o, l, a);
        var c = this.safeHCoordinateIntersection(i, r, o, l);
        return c.x += a.x, c.y += a.y, c;
      }
    }, {
      key: "computeCollinearIntersection",
      value: function computeCollinearIntersection(t, e, n, s) {
        var i = N.intersects(t, e, n),
            r = N.intersects(t, e, s),
            o = N.intersects(n, s, t),
            l = N.intersects(n, s, e);
        return i && r ? (this._intPt[0] = n, this._intPt[1] = s, te.COLLINEAR_INTERSECTION) : o && l ? (this._intPt[0] = t, this._intPt[1] = e, te.COLLINEAR_INTERSECTION) : i && o ? (this._intPt[0] = n, this._intPt[1] = t, !n.equals(t) || r || l ? te.COLLINEAR_INTERSECTION : te.POINT_INTERSECTION) : i && l ? (this._intPt[0] = n, this._intPt[1] = e, !n.equals(e) || r || o ? te.COLLINEAR_INTERSECTION : te.POINT_INTERSECTION) : r && o ? (this._intPt[0] = s, this._intPt[1] = t, !s.equals(t) || i || l ? te.COLLINEAR_INTERSECTION : te.POINT_INTERSECTION) : r && l ? (this._intPt[0] = s, this._intPt[1] = e, !s.equals(e) || i || o ? te.COLLINEAR_INTERSECTION : te.POINT_INTERSECTION) : te.NO_INTERSECTION;
      }
    }, {
      key: "normalizeToEnvCentre",
      value: function normalizeToEnvCentre(t, e, n, s, i) {
        var r = t.x < e.x ? t.x : e.x,
            o = t.y < e.y ? t.y : e.y,
            l = t.x > e.x ? t.x : e.x,
            a = t.y > e.y ? t.y : e.y,
            c = n.x < s.x ? n.x : s.x,
            h = n.y < s.y ? n.y : s.y,
            u = n.x > s.x ? n.x : s.x,
            g = n.y > s.y ? n.y : s.y,
            d = ((r > c ? r : c) + (l < u ? l : u)) / 2,
            _ = ((o > h ? o : h) + (a < g ? a : g)) / 2;

        i.x = d, i.y = _, t.x -= i.x, t.y -= i.y, e.x -= i.x, e.y -= i.y, n.x -= i.x, n.y -= i.y, s.x -= i.x, s.y -= i.y;
      }
    }, {
      key: "computeIntersect",
      value: function computeIntersect(t, e, n, s) {
        if (this._isProper = !1, !N.intersects(t, e, n, s)) return te.NO_INTERSECTION;
        var i = v.index(t, e, n),
            r = v.index(t, e, s);
        if (i > 0 && r > 0 || i < 0 && r < 0) return te.NO_INTERSECTION;
        var o = v.index(n, s, t),
            l = v.index(n, s, e);
        return o > 0 && l > 0 || o < 0 && l < 0 ? te.NO_INTERSECTION : 0 === i && 0 === r && 0 === o && 0 === l ? this.computeCollinearIntersection(t, e, n, s) : (0 === i || 0 === r || 0 === o || 0 === l ? (this._isProper = !1, t.equals2D(n) || t.equals2D(s) ? this._intPt[0] = t : e.equals2D(n) || e.equals2D(s) ? this._intPt[0] = e : 0 === i ? this._intPt[0] = new g(n) : 0 === r ? this._intPt[0] = new g(s) : 0 === o ? this._intPt[0] = new g(t) : 0 === l && (this._intPt[0] = new g(e))) : (this._isProper = !0, this._intPt[0] = this.intersection(t, e, n, s)), te.POINT_INTERSECTION);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return ee;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "nearestEndpoint",
      value: function nearestEndpoint(t, e, n, s) {
        var i = t,
            r = A.pointToSegment(t, n, s),
            o = A.pointToSegment(e, n, s);
        return o < r && (r = o, i = e), (o = A.pointToSegment(n, t, e)) < r && (r = o, i = n), (o = A.pointToSegment(s, t, e)) < r && (r = o, i = s), i;
      }
    }]);

    return ee;
  }(te);

  ee.constructor_ = function () {};

  var ne =
  /*#__PURE__*/
  function () {
    function ne() {
      _classCallCheck(this, ne);

      ne.constructor_.apply(this, arguments);
    }

    _createClass(ne, [{
      key: "minX",
      value: function minX() {
        return Math.min(this.p0.x, this.p1.x);
      }
    }, {
      key: "orientationIndex",
      value: function orientationIndex() {
        if (arguments[0] instanceof ne) {
          var _t220 = arguments[0],
              _e144 = v.index(this.p0, this.p1, _t220.p0),
              _n88 = v.index(this.p0, this.p1, _t220.p1);

          return _e144 >= 0 && _n88 >= 0 ? Math.max(_e144, _n88) : _e144 <= 0 && _n88 <= 0 ? Math.max(_e144, _n88) : 0;
        }

        if (arguments[0] instanceof g) {
          var _t221 = arguments[0];
          return v.index(this.p0, this.p1, _t221);
        }
      }
    }, {
      key: "toGeometry",
      value: function toGeometry(t) {
        return t.createLineString([this.p0, this.p1]);
      }
    }, {
      key: "isVertical",
      value: function isVertical() {
        return this.p0.x === this.p1.x;
      }
    }, {
      key: "equals",
      value: function equals(t) {
        if (!(t instanceof ne)) return !1;
        var e = t;
        return this.p0.equals(e.p0) && this.p1.equals(e.p1);
      }
    }, {
      key: "intersection",
      value: function intersection(t) {
        var e = new ee();
        return e.computeIntersection(this.p0, this.p1, t.p0, t.p1), e.hasIntersection() ? e.getIntersection(0) : null;
      }
    }, {
      key: "project",
      value: function project() {
        if (arguments[0] instanceof g) {
          var _t222 = arguments[0];
          if (_t222.equals(this.p0) || _t222.equals(this.p1)) return new g(_t222);

          var _e145 = this.projectionFactor(_t222),
              _n89 = new g();

          return _n89.x = this.p0.x + _e145 * (this.p1.x - this.p0.x), _n89.y = this.p0.y + _e145 * (this.p1.y - this.p0.y), _n89;
        }

        if (arguments[0] instanceof ne) {
          var _t223 = arguments[0],
              _e146 = this.projectionFactor(_t223.p0),
              _n90 = this.projectionFactor(_t223.p1);

          if (_e146 >= 1 && _n90 >= 1) return null;
          if (_e146 <= 0 && _n90 <= 0) return null;

          var _s64 = this.project(_t223.p0);

          _e146 < 0 && (_s64 = this.p0), _e146 > 1 && (_s64 = this.p1);

          var _i34 = this.project(_t223.p1);

          return _n90 < 0 && (_i34 = this.p0), _n90 > 1 && (_i34 = this.p1), new ne(_s64, _i34);
        }
      }
    }, {
      key: "normalize",
      value: function normalize() {
        this.p1.compareTo(this.p0) < 0 && this.reverse();
      }
    }, {
      key: "angle",
      value: function angle() {
        return Math.atan2(this.p1.y - this.p0.y, this.p1.x - this.p0.x);
      }
    }, {
      key: "getCoordinate",
      value: function getCoordinate(t) {
        return 0 === t ? this.p0 : this.p1;
      }
    }, {
      key: "distancePerpendicular",
      value: function distancePerpendicular(t) {
        return A.pointToLinePerpendicular(t, this.p0, this.p1);
      }
    }, {
      key: "minY",
      value: function minY() {
        return Math.min(this.p0.y, this.p1.y);
      }
    }, {
      key: "midPoint",
      value: function midPoint() {
        return ne.midPoint(this.p0, this.p1);
      }
    }, {
      key: "projectionFactor",
      value: function projectionFactor(t) {
        if (t.equals(this.p0)) return 0;
        if (t.equals(this.p1)) return 1;
        var e = this.p1.x - this.p0.x,
            n = this.p1.y - this.p0.y,
            s = e * e + n * n;
        return s <= 0 ? i.NaN : ((t.x - this.p0.x) * e + (t.y - this.p0.y) * n) / s;
      }
    }, {
      key: "closestPoints",
      value: function closestPoints(t) {
        var e = this.intersection(t);
        if (null !== e) return [e, e];
        var n = new Array(2).fill(null);
        var s = i.MAX_VALUE,
            r = null;
        var o = this.closestPoint(t.p0);
        s = o.distance(t.p0), n[0] = o, n[1] = t.p0;
        var l = this.closestPoint(t.p1);
        (r = l.distance(t.p1)) < s && (s = r, n[0] = l, n[1] = t.p1);
        var a = t.closestPoint(this.p0);
        (r = a.distance(this.p0)) < s && (s = r, n[0] = this.p0, n[1] = a);
        var c = t.closestPoint(this.p1);
        return (r = c.distance(this.p1)) < s && (s = r, n[0] = this.p1, n[1] = c), n;
      }
    }, {
      key: "closestPoint",
      value: function closestPoint(t) {
        var e = this.projectionFactor(t);
        return e > 0 && e < 1 ? this.project(t) : this.p0.distance(t) < this.p1.distance(t) ? this.p0 : this.p1;
      }
    }, {
      key: "maxX",
      value: function maxX() {
        return Math.max(this.p0.x, this.p1.x);
      }
    }, {
      key: "getLength",
      value: function getLength() {
        return this.p0.distance(this.p1);
      }
    }, {
      key: "compareTo",
      value: function compareTo(t) {
        var e = t,
            n = this.p0.compareTo(e.p0);
        return 0 !== n ? n : this.p1.compareTo(e.p1);
      }
    }, {
      key: "reverse",
      value: function reverse() {
        var t = this.p0;
        this.p0 = this.p1, this.p1 = t;
      }
    }, {
      key: "equalsTopo",
      value: function equalsTopo(t) {
        return this.p0.equals(t.p0) && this.p1.equals(t.p1) || this.p0.equals(t.p1) && this.p1.equals(t.p0);
      }
    }, {
      key: "lineIntersection",
      value: function lineIntersection(t) {
        try {
          return b.intersection(this.p0, this.p1, t.p0, t.p1);
        } catch (t) {
          if (!(t instanceof S)) throw t;
        }

        return null;
      }
    }, {
      key: "maxY",
      value: function maxY() {
        return Math.max(this.p0.y, this.p1.y);
      }
    }, {
      key: "pointAlongOffset",
      value: function pointAlongOffset(t, e) {
        var n = this.p0.x + t * (this.p1.x - this.p0.x),
            s = this.p0.y + t * (this.p1.y - this.p0.y),
            i = this.p1.x - this.p0.x,
            r = this.p1.y - this.p0.y,
            o = Math.sqrt(i * i + r * r);
        var l = 0,
            a = 0;

        if (0 !== e) {
          if (o <= 0) throw new IllegalStateException("Cannot compute offset from zero-length line segment");
          l = e * i / o, a = e * r / o;
        }

        return new g(n - a, s + l);
      }
    }, {
      key: "setCoordinates",
      value: function setCoordinates() {
        if (1 === arguments.length) {
          var _t224 = arguments[0];
          this.setCoordinates(_t224.p0, _t224.p1);
        } else if (2 === arguments.length) {
          var _t225 = arguments[0],
              _e147 = arguments[1];
          this.p0.x = _t225.x, this.p0.y = _t225.y, this.p1.x = _e147.x, this.p1.y = _e147.y;
        }
      }
    }, {
      key: "segmentFraction",
      value: function segmentFraction(t) {
        var e = this.projectionFactor(t);
        return e < 0 ? e = 0 : (e > 1 || i.isNaN(e)) && (e = 1), e;
      }
    }, {
      key: "toString",
      value: function toString() {
        return "LINESTRING( " + this.p0.x + " " + this.p0.y + ", " + this.p1.x + " " + this.p1.y + ")";
      }
    }, {
      key: "isHorizontal",
      value: function isHorizontal() {
        return this.p0.y === this.p1.y;
      }
    }, {
      key: "distance",
      value: function distance() {
        if (arguments[0] instanceof ne) {
          var _t226 = arguments[0];
          return A.segmentToSegment(this.p0, this.p1, _t226.p0, _t226.p1);
        }

        if (arguments[0] instanceof g) {
          var _t227 = arguments[0];
          return A.pointToSegment(_t227, this.p0, this.p1);
        }
      }
    }, {
      key: "pointAlong",
      value: function pointAlong(t) {
        var e = new g();
        return e.x = this.p0.x + t * (this.p1.x - this.p0.x), e.y = this.p0.y + t * (this.p1.y - this.p0.y), e;
      }
    }, {
      key: "hashCode",
      value: function hashCode() {
        var t = java.lang.Double.doubleToLongBits(this.p0.x);
        t ^= 31 * java.lang.Double.doubleToLongBits(this.p0.y);
        var e = Math.trunc(t) ^ Math.trunc(t >> 32);
        var n = java.lang.Double.doubleToLongBits(this.p1.x);
        return n ^= 31 * java.lang.Double.doubleToLongBits(this.p1.y), e ^ (Math.trunc(n) ^ Math.trunc(n >> 32));
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return ne;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [r, a];
      }
    }], [{
      key: "midPoint",
      value: function midPoint(t, e) {
        return new g((t.x + e.x) / 2, (t.y + e.y) / 2);
      }
    }]);

    return ne;
  }();

  ne.constructor_ = function () {
    if (this.p0 = null, this.p1 = null, 0 === arguments.length) ne.constructor_.call(this, new g(), new g());else if (1 === arguments.length) {
      var _t228 = arguments[0];
      ne.constructor_.call(this, _t228.p0, _t228.p1);
    } else if (2 === arguments.length) {
      var _t229 = arguments[0],
          _e148 = arguments[1];
      this.p0 = _t229, this.p1 = _e148;
    } else if (4 === arguments.length) {
      var _t230 = arguments[0],
          _e149 = arguments[1],
          _n91 = arguments[2],
          _s65 = arguments[3];
      ne.constructor_.call(this, new g(_t230, _e149), new g(_n91, _s65));
    }
  }, ne.serialVersionUID = 0x2d2172135f411c00;

  var se =
  /*#__PURE__*/
  function () {
    function se() {
      _classCallCheck(this, se);

      se.constructor_.apply(this, arguments);
    }

    _createClass(se, [{
      key: "getClass",
      value: function getClass() {
        return se;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "toLocationSymbol",
      value: function toLocationSymbol(t) {
        switch (t) {
          case se.EXTERIOR:
            return "e";

          case se.BOUNDARY:
            return "b";

          case se.INTERIOR:
            return "i";

          case se.NONE:
            return "-";
        }

        throw new n("Unknown location value: " + t);
      }
    }]);

    return se;
  }();

  se.constructor_ = function () {}, se.INTERIOR = 0, se.BOUNDARY = 1, se.EXTERIOR = 2, se.NONE = -1;

  var ie =
  /*#__PURE__*/
  function () {
    function ie() {
      _classCallCheck(this, ie);

      ie.constructor_.apply(this, arguments);
    }

    _createClass(ie, [{
      key: "isIntersects",
      value: function isIntersects() {
        return !this.isDisjoint();
      }
    }, {
      key: "isCovers",
      value: function isCovers() {
        return (ie.isTrue(this._matrix[se.INTERIOR][se.INTERIOR]) || ie.isTrue(this._matrix[se.INTERIOR][se.BOUNDARY]) || ie.isTrue(this._matrix[se.BOUNDARY][se.INTERIOR]) || ie.isTrue(this._matrix[se.BOUNDARY][se.BOUNDARY])) && this._matrix[se.EXTERIOR][se.INTERIOR] === gt.FALSE && this._matrix[se.EXTERIOR][se.BOUNDARY] === gt.FALSE;
      }
    }, {
      key: "isCoveredBy",
      value: function isCoveredBy() {
        return (ie.isTrue(this._matrix[se.INTERIOR][se.INTERIOR]) || ie.isTrue(this._matrix[se.INTERIOR][se.BOUNDARY]) || ie.isTrue(this._matrix[se.BOUNDARY][se.INTERIOR]) || ie.isTrue(this._matrix[se.BOUNDARY][se.BOUNDARY])) && this._matrix[se.INTERIOR][se.EXTERIOR] === gt.FALSE && this._matrix[se.BOUNDARY][se.EXTERIOR] === gt.FALSE;
      }
    }, {
      key: "set",
      value: function set() {
        if (1 === arguments.length) {
          var _t231 = arguments[0];

          for (var _e150 = 0; _e150 < _t231.length; _e150++) {
            var _n92 = Math.trunc(_e150 / 3),
                _s66 = _e150 % 3;

            this._matrix[_n92][_s66] = gt.toDimensionValue(_t231.charAt(_e150));
          }
        } else if (3 === arguments.length) {
          var _t232 = arguments[0],
              _e151 = arguments[1],
              _n93 = arguments[2];
          this._matrix[_t232][_e151] = _n93;
        }
      }
    }, {
      key: "isContains",
      value: function isContains() {
        return ie.isTrue(this._matrix[se.INTERIOR][se.INTERIOR]) && this._matrix[se.EXTERIOR][se.INTERIOR] === gt.FALSE && this._matrix[se.EXTERIOR][se.BOUNDARY] === gt.FALSE;
      }
    }, {
      key: "setAtLeast",
      value: function setAtLeast() {
        if (1 === arguments.length) {
          var _t233 = arguments[0];

          for (var _e152 = 0; _e152 < _t233.length; _e152++) {
            var _n94 = Math.trunc(_e152 / 3),
                _s67 = _e152 % 3;

            this.setAtLeast(_n94, _s67, gt.toDimensionValue(_t233.charAt(_e152)));
          }
        } else if (3 === arguments.length) {
          var _t234 = arguments[0],
              _e153 = arguments[1],
              _n95 = arguments[2];
          this._matrix[_t234][_e153] < _n95 && (this._matrix[_t234][_e153] = _n95);
        }
      }
    }, {
      key: "setAtLeastIfValid",
      value: function setAtLeastIfValid(t, e, n) {
        t >= 0 && e >= 0 && this.setAtLeast(t, e, n);
      }
    }, {
      key: "isWithin",
      value: function isWithin() {
        return ie.isTrue(this._matrix[se.INTERIOR][se.INTERIOR]) && this._matrix[se.INTERIOR][se.EXTERIOR] === gt.FALSE && this._matrix[se.BOUNDARY][se.EXTERIOR] === gt.FALSE;
      }
    }, {
      key: "isTouches",
      value: function isTouches(t, e) {
        return t > e ? this.isTouches(e, t) : (t === gt.A && e === gt.A || t === gt.L && e === gt.L || t === gt.L && e === gt.A || t === gt.P && e === gt.A || t === gt.P && e === gt.L) && this._matrix[se.INTERIOR][se.INTERIOR] === gt.FALSE && (ie.isTrue(this._matrix[se.INTERIOR][se.BOUNDARY]) || ie.isTrue(this._matrix[se.BOUNDARY][se.INTERIOR]) || ie.isTrue(this._matrix[se.BOUNDARY][se.BOUNDARY]));
      }
    }, {
      key: "isOverlaps",
      value: function isOverlaps(t, e) {
        return t === gt.P && e === gt.P || t === gt.A && e === gt.A ? ie.isTrue(this._matrix[se.INTERIOR][se.INTERIOR]) && ie.isTrue(this._matrix[se.INTERIOR][se.EXTERIOR]) && ie.isTrue(this._matrix[se.EXTERIOR][se.INTERIOR]) : t === gt.L && e === gt.L && 1 === this._matrix[se.INTERIOR][se.INTERIOR] && ie.isTrue(this._matrix[se.INTERIOR][se.EXTERIOR]) && ie.isTrue(this._matrix[se.EXTERIOR][se.INTERIOR]);
      }
    }, {
      key: "isEquals",
      value: function isEquals(t, e) {
        return t === e && ie.isTrue(this._matrix[se.INTERIOR][se.INTERIOR]) && this._matrix[se.INTERIOR][se.EXTERIOR] === gt.FALSE && this._matrix[se.BOUNDARY][se.EXTERIOR] === gt.FALSE && this._matrix[se.EXTERIOR][se.INTERIOR] === gt.FALSE && this._matrix[se.EXTERIOR][se.BOUNDARY] === gt.FALSE;
      }
    }, {
      key: "toString",
      value: function toString() {
        var t = new Lt("123456789");

        for (var _e154 = 0; _e154 < 3; _e154++) {
          for (var _n96 = 0; _n96 < 3; _n96++) {
            t.setCharAt(3 * _e154 + _n96, gt.toDimensionSymbol(this._matrix[_e154][_n96]));
          }
        }

        return t.toString();
      }
    }, {
      key: "setAll",
      value: function setAll(t) {
        for (var _e155 = 0; _e155 < 3; _e155++) {
          for (var _n97 = 0; _n97 < 3; _n97++) {
            this._matrix[_e155][_n97] = t;
          }
        }
      }
    }, {
      key: "get",
      value: function get(t, e) {
        return this._matrix[t][e];
      }
    }, {
      key: "transpose",
      value: function transpose() {
        var t = this._matrix[1][0];
        return this._matrix[1][0] = this._matrix[0][1], this._matrix[0][1] = t, t = this._matrix[2][0], this._matrix[2][0] = this._matrix[0][2], this._matrix[0][2] = t, t = this._matrix[2][1], this._matrix[2][1] = this._matrix[1][2], this._matrix[1][2] = t, this;
      }
    }, {
      key: "matches",
      value: function matches(t) {
        if (9 !== t.length) throw new n("Should be length 9: " + t);

        for (var _e156 = 0; _e156 < 3; _e156++) {
          for (var _n98 = 0; _n98 < 3; _n98++) {
            if (!ie.matches(this._matrix[_e156][_n98], t.charAt(3 * _e156 + _n98))) return !1;
          }
        }

        return !0;
      }
    }, {
      key: "add",
      value: function add(t) {
        for (var _e157 = 0; _e157 < 3; _e157++) {
          for (var _n99 = 0; _n99 < 3; _n99++) {
            this.setAtLeast(_e157, _n99, t.get(_e157, _n99));
          }
        }
      }
    }, {
      key: "isDisjoint",
      value: function isDisjoint() {
        return this._matrix[se.INTERIOR][se.INTERIOR] === gt.FALSE && this._matrix[se.INTERIOR][se.BOUNDARY] === gt.FALSE && this._matrix[se.BOUNDARY][se.INTERIOR] === gt.FALSE && this._matrix[se.BOUNDARY][se.BOUNDARY] === gt.FALSE;
      }
    }, {
      key: "isCrosses",
      value: function isCrosses(t, e) {
        return t === gt.P && e === gt.L || t === gt.P && e === gt.A || t === gt.L && e === gt.A ? ie.isTrue(this._matrix[se.INTERIOR][se.INTERIOR]) && ie.isTrue(this._matrix[se.INTERIOR][se.EXTERIOR]) : t === gt.L && e === gt.P || t === gt.A && e === gt.P || t === gt.A && e === gt.L ? ie.isTrue(this._matrix[se.INTERIOR][se.INTERIOR]) && ie.isTrue(this._matrix[se.EXTERIOR][se.INTERIOR]) : t === gt.L && e === gt.L && 0 === this._matrix[se.INTERIOR][se.INTERIOR];
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return ie;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [o];
      }
    }], [{
      key: "matches",
      value: function matches() {
        if (Number.isInteger(arguments[0]) && "string" == typeof arguments[1]) {
          var _t235 = arguments[0],
              _e158 = arguments[1];
          return _e158 === gt.SYM_DONTCARE || _e158 === gt.SYM_TRUE && (_t235 >= 0 || _t235 === gt.TRUE) || _e158 === gt.SYM_FALSE && _t235 === gt.FALSE || _e158 === gt.SYM_P && _t235 === gt.P || _e158 === gt.SYM_L && _t235 === gt.L || _e158 === gt.SYM_A && _t235 === gt.A;
        }

        if ("string" == typeof arguments[0] && "string" == typeof arguments[1]) {
          var _t236 = arguments[0],
              _e159 = arguments[1];
          return new ie(_t236).matches(_e159);
        }
      }
    }, {
      key: "isTrue",
      value: function isTrue(t) {
        return t >= 0 || t === gt.TRUE;
      }
    }]);

    return ie;
  }();

  ie.constructor_ = function () {
    if (this._matrix = null, 0 === arguments.length) this._matrix = Array(3).fill().map(function () {
      return Array(3);
    }), this.setAll(gt.FALSE);else if (1 === arguments.length) if ("string" == typeof arguments[0]) {
      var _t237 = arguments[0];
      ie.constructor_.call(this), this.set(_t237);
    } else if (arguments[0] instanceof ie) {
      var _t238 = arguments[0];
      ie.constructor_.call(this), this._matrix[se.INTERIOR][se.INTERIOR] = _t238._matrix[se.INTERIOR][se.INTERIOR], this._matrix[se.INTERIOR][se.BOUNDARY] = _t238._matrix[se.INTERIOR][se.BOUNDARY], this._matrix[se.INTERIOR][se.EXTERIOR] = _t238._matrix[se.INTERIOR][se.EXTERIOR], this._matrix[se.BOUNDARY][se.INTERIOR] = _t238._matrix[se.BOUNDARY][se.INTERIOR], this._matrix[se.BOUNDARY][se.BOUNDARY] = _t238._matrix[se.BOUNDARY][se.BOUNDARY], this._matrix[se.BOUNDARY][se.EXTERIOR] = _t238._matrix[se.BOUNDARY][se.EXTERIOR], this._matrix[se.EXTERIOR][se.INTERIOR] = _t238._matrix[se.EXTERIOR][se.INTERIOR], this._matrix[se.EXTERIOR][se.BOUNDARY] = _t238._matrix[se.EXTERIOR][se.BOUNDARY], this._matrix[se.EXTERIOR][se.EXTERIOR] = _t238._matrix[se.EXTERIOR][se.EXTERIOR];
    }
  };

  var re =
  /*#__PURE__*/
  function () {
    function re() {
      _classCallCheck(this, re);

      re.constructor_.apply(this, arguments);
    }

    _createClass(re, [{
      key: "getClass",
      value: function getClass() {
        return re;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "toDegrees",
      value: function toDegrees(t) {
        return 180 * t / Math.PI;
      }
    }, {
      key: "normalize",
      value: function normalize(t) {
        for (; t > Math.PI;) {
          t -= re.PI_TIMES_2;
        }

        for (; t <= -Math.PI;) {
          t += re.PI_TIMES_2;
        }

        return t;
      }
    }, {
      key: "angle",
      value: function angle() {
        if (1 === arguments.length) {
          var _t239 = arguments[0];
          return Math.atan2(_t239.y, _t239.x);
        }

        if (2 === arguments.length) {
          var _t240 = arguments[0],
              _e160 = arguments[1],
              _n100 = _e160.x - _t240.x,
              _s68 = _e160.y - _t240.y;

          return Math.atan2(_s68, _n100);
        }
      }
    }, {
      key: "isAcute",
      value: function isAcute(t, e, n) {
        var s = t.x - e.x,
            i = t.y - e.y;
        return s * (n.x - e.x) + i * (n.y - e.y) > 0;
      }
    }, {
      key: "isObtuse",
      value: function isObtuse(t, e, n) {
        var s = t.x - e.x,
            i = t.y - e.y;
        return s * (n.x - e.x) + i * (n.y - e.y) < 0;
      }
    }, {
      key: "interiorAngle",
      value: function interiorAngle(t, e, n) {
        var s = re.angle(e, t),
            i = re.angle(e, n);
        return Math.abs(i - s);
      }
    }, {
      key: "normalizePositive",
      value: function normalizePositive(t) {
        if (t < 0) {
          for (; t < 0;) {
            t += re.PI_TIMES_2;
          }

          t >= re.PI_TIMES_2 && (t = 0);
        } else {
          for (; t >= re.PI_TIMES_2;) {
            t -= re.PI_TIMES_2;
          }

          t < 0 && (t = 0);
        }

        return t;
      }
    }, {
      key: "angleBetween",
      value: function angleBetween(t, e, n) {
        var s = re.angle(e, t),
            i = re.angle(e, n);
        return re.diff(s, i);
      }
    }, {
      key: "diff",
      value: function diff(t, e) {
        var n = null;
        return (n = t < e ? e - t : t - e) > Math.PI && (n = 2 * Math.PI - n), n;
      }
    }, {
      key: "toRadians",
      value: function toRadians(t) {
        return t * Math.PI / 180;
      }
    }, {
      key: "getTurn",
      value: function getTurn(t, e) {
        var n = Math.sin(e - t);
        return n > 0 ? re.COUNTERCLOCKWISE : n < 0 ? re.CLOCKWISE : re.NONE;
      }
    }, {
      key: "angleBetweenOriented",
      value: function angleBetweenOriented(t, e, n) {
        var s = re.angle(e, t),
            i = re.angle(e, n) - s;
        return i <= -Math.PI ? i + re.PI_TIMES_2 : i > Math.PI ? i - re.PI_TIMES_2 : i;
      }
    }]);

    return re;
  }();

  re.constructor_ = function () {}, re.PI_TIMES_2 = 2 * Math.PI, re.PI_OVER_2 = Math.PI / 2, re.PI_OVER_4 = Math.PI / 4, re.COUNTERCLOCKWISE = v.COUNTERCLOCKWISE, re.CLOCKWISE = v.CLOCKWISE, re.NONE = v.COLLINEAR;

  var oe =
  /*#__PURE__*/
  function () {
    function oe() {
      _classCallCheck(this, oe);

      oe.constructor_.apply(this, arguments);
    }

    _createClass(oe, [{
      key: "area",
      value: function area() {
        return oe.area(this.p0, this.p1, this.p2);
      }
    }, {
      key: "signedArea",
      value: function signedArea() {
        return oe.signedArea(this.p0, this.p1, this.p2);
      }
    }, {
      key: "interpolateZ",
      value: function interpolateZ(t) {
        if (null === t) throw new n("Supplied point is null.");
        return oe.interpolateZ(t, this.p0, this.p1, this.p2);
      }
    }, {
      key: "longestSideLength",
      value: function longestSideLength() {
        return oe.longestSideLength(this.p0, this.p1, this.p2);
      }
    }, {
      key: "isAcute",
      value: function isAcute() {
        return oe.isAcute(this.p0, this.p1, this.p2);
      }
    }, {
      key: "circumcentre",
      value: function circumcentre() {
        return oe.circumcentre(this.p0, this.p1, this.p2);
      }
    }, {
      key: "area3D",
      value: function area3D() {
        return oe.area3D(this.p0, this.p1, this.p2);
      }
    }, {
      key: "centroid",
      value: function centroid() {
        return oe.centroid(this.p0, this.p1, this.p2);
      }
    }, {
      key: "inCentre",
      value: function inCentre() {
        return oe.inCentre(this.p0, this.p1, this.p2);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return oe;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "area",
      value: function area(t, e, n) {
        return Math.abs(((n.x - t.x) * (e.y - t.y) - (e.x - t.x) * (n.y - t.y)) / 2);
      }
    }, {
      key: "signedArea",
      value: function signedArea(t, e, n) {
        return ((n.x - t.x) * (e.y - t.y) - (e.x - t.x) * (n.y - t.y)) / 2;
      }
    }, {
      key: "det",
      value: function det(t, e, n, s) {
        return t * s - e * n;
      }
    }, {
      key: "interpolateZ",
      value: function interpolateZ(t, e, n, s) {
        var i = e.x,
            r = e.y,
            o = n.x - i,
            l = s.x - i,
            a = n.y - r,
            c = s.y - r,
            h = o * c - l * a,
            u = t.x - i,
            g = t.y - r,
            d = (c * u - l * g) / h,
            _ = (-a * u + o * g) / h;

        return e.z + d * (n.z - e.z) + _ * (s.z - e.z);
      }
    }, {
      key: "longestSideLength",
      value: function longestSideLength(t, e, n) {
        var s = t.distance(e),
            i = e.distance(n),
            r = n.distance(t);
        var o = s;
        return i > o && (o = i), r > o && (o = r), o;
      }
    }, {
      key: "isAcute",
      value: function isAcute(t, e, n) {
        return !!re.isAcute(t, e, n) && !!re.isAcute(e, n, t) && !!re.isAcute(n, t, e);
      }
    }, {
      key: "circumcentre",
      value: function circumcentre(t, e, n) {
        var s = n.x,
            i = n.y,
            r = t.x - s,
            o = t.y - i,
            l = e.x - s,
            a = e.y - i,
            c = 2 * oe.det(r, o, l, a),
            h = oe.det(o, r * r + o * o, a, l * l + a * a),
            u = oe.det(r, r * r + o * o, l, l * l + a * a);
        return new g(s - h / c, i + u / c);
      }
    }, {
      key: "perpendicularBisector",
      value: function perpendicularBisector(t, e) {
        var n = e.x - t.x,
            s = e.y - t.y,
            i = new b(t.x + n / 2, t.y + s / 2, 1),
            r = new b(t.x - s + n / 2, t.y + n + s / 2, 1);
        return new b(i, r);
      }
    }, {
      key: "angleBisector",
      value: function angleBisector(t, e, n) {
        var s = e.distance(t),
            i = s / (s + e.distance(n)),
            r = n.x - t.x,
            o = n.y - t.y;
        return new g(t.x + i * r, t.y + i * o);
      }
    }, {
      key: "area3D",
      value: function area3D(t, e, n) {
        var s = e.x - t.x,
            i = e.y - t.y,
            r = e.z - t.z,
            o = n.x - t.x,
            l = n.y - t.y,
            a = n.z - t.z,
            c = i * a - r * l,
            h = r * o - s * a,
            u = s * l - i * o,
            g = c * c + h * h + u * u;
        return Math.sqrt(g) / 2;
      }
    }, {
      key: "centroid",
      value: function centroid(t, e, n) {
        var s = (t.x + e.x + n.x) / 3,
            i = (t.y + e.y + n.y) / 3;
        return new g(s, i);
      }
    }, {
      key: "inCentre",
      value: function inCentre(t, e, n) {
        var s = e.distance(n),
            i = t.distance(n),
            r = t.distance(e),
            o = s + i + r,
            l = (s * t.x + i * e.x + r * n.x) / o,
            a = (s * t.y + i * e.y + r * n.y) / o;
        return new g(l, a);
      }
    }]);

    return oe;
  }();

  oe.constructor_ = function () {
    this.p0 = null, this.p1 = null, this.p2 = null;
    var t = arguments[0],
        e = arguments[1],
        n = arguments[2];
    this.p0 = t, this.p1 = e, this.p2 = n;
  };

  var le =
  /*#__PURE__*/
  function (_C2) {
    _inherits(le, _C2);

    function le() {
      var _this14;

      _classCallCheck(this, le);

      _this14 = _possibleConstructorReturn(this, _getPrototypeOf(le).call(this)), le.constructor_.apply(_assertThisInitialized(_this14), arguments);
      return _this14;
    }

    _createClass(le, [{
      key: "getClass",
      value: function getClass() {
        return le;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return le;
  }(C);

  le.constructor_ = function () {
    if (0 === arguments.length) C.constructor_.call(this);else if (1 === arguments.length) {
      var _t241 = arguments[0];
      C.constructor_.call(this, _t241);
    }
  };

  var ae =
  /*#__PURE__*/
  function () {
    function ae() {
      _classCallCheck(this, ae);

      ae.constructor_.apply(this, arguments);
    }

    _createClass(ae, [{
      key: "setToReflectionBasic",
      value: function setToReflectionBasic(t, e, s, i) {
        if (t === s && e === i) throw new n("Reflection line points must be distinct");
        var r = s - t,
            o = i - e,
            l = Math.sqrt(r * r + o * o),
            a = o / l,
            c = r / l,
            h = 2 * a * c,
            u = c * c - a * a;
        return this._m00 = u, this._m01 = h, this._m02 = 0, this._m10 = h, this._m11 = -u, this._m12 = 0, this;
      }
    }, {
      key: "getInverse",
      value: function getInverse() {
        var t = this.getDeterminant();
        if (0 === t) throw new le("Transformation is non-invertible");
        var e = this._m11 / t,
            n = -this._m10 / t,
            s = -this._m01 / t,
            i = this._m00 / t,
            r = (this._m01 * this._m12 - this._m02 * this._m11) / t,
            o = (-this._m00 * this._m12 + this._m10 * this._m02) / t;
        return new ae(e, s, r, n, i, o);
      }
    }, {
      key: "compose",
      value: function compose(t) {
        var e = t._m00 * this._m00 + t._m01 * this._m10,
            n = t._m00 * this._m01 + t._m01 * this._m11,
            s = t._m00 * this._m02 + t._m01 * this._m12 + t._m02,
            i = t._m10 * this._m00 + t._m11 * this._m10,
            r = t._m10 * this._m01 + t._m11 * this._m11,
            o = t._m10 * this._m02 + t._m11 * this._m12 + t._m12;
        return this._m00 = e, this._m01 = n, this._m02 = s, this._m10 = i, this._m11 = r, this._m12 = o, this;
      }
    }, {
      key: "equals",
      value: function equals(t) {
        if (null === t) return !1;
        if (!(t instanceof ae)) return !1;
        var e = t;
        return this._m00 === e._m00 && this._m01 === e._m01 && this._m02 === e._m02 && this._m10 === e._m10 && this._m11 === e._m11 && this._m12 === e._m12;
      }
    }, {
      key: "setToScale",
      value: function setToScale(t, e) {
        return this._m00 = t, this._m01 = 0, this._m02 = 0, this._m10 = 0, this._m11 = e, this._m12 = 0, this;
      }
    }, {
      key: "isIdentity",
      value: function isIdentity() {
        return 1 === this._m00 && 0 === this._m01 && 0 === this._m02 && 0 === this._m10 && 1 === this._m11 && 0 === this._m12;
      }
    }, {
      key: "scale",
      value: function scale(t, e) {
        return this.compose(ae.scaleInstance(t, e)), this;
      }
    }, {
      key: "setToIdentity",
      value: function setToIdentity() {
        return this._m00 = 1, this._m01 = 0, this._m02 = 0, this._m10 = 0, this._m11 = 1, this._m12 = 0, this;
      }
    }, {
      key: "isGeometryChanged",
      value: function isGeometryChanged() {
        return !0;
      }
    }, {
      key: "setTransformation",
      value: function setTransformation() {
        if (1 === arguments.length) {
          var _t242 = arguments[0];
          return this._m00 = _t242._m00, this._m01 = _t242._m01, this._m02 = _t242._m02, this._m10 = _t242._m10, this._m11 = _t242._m11, this._m12 = _t242._m12, this;
        }

        if (6 === arguments.length) {
          var _t243 = arguments[0],
              _e161 = arguments[1],
              _n101 = arguments[2],
              _s69 = arguments[3],
              _i35 = arguments[4],
              _r23 = arguments[5];
          return this._m00 = _t243, this._m01 = _e161, this._m02 = _n101, this._m10 = _s69, this._m11 = _i35, this._m12 = _r23, this;
        }
      }
    }, {
      key: "setToRotation",
      value: function setToRotation() {
        if (1 === arguments.length) {
          var _t244 = arguments[0];
          return this.setToRotation(Math.sin(_t244), Math.cos(_t244)), this;
        }

        if (2 === arguments.length) {
          var _t245 = arguments[0],
              _e162 = arguments[1];
          return this._m00 = _e162, this._m01 = -_t245, this._m02 = 0, this._m10 = _t245, this._m11 = _e162, this._m12 = 0, this;
        }

        if (3 === arguments.length) {
          var _t246 = arguments[0],
              _e163 = arguments[1],
              _n102 = arguments[2];
          return this.setToRotation(Math.sin(_t246), Math.cos(_t246), _e163, _n102), this;
        }

        if (4 === arguments.length) {
          var _t247 = arguments[0],
              _e164 = arguments[1],
              _n103 = arguments[2],
              _s70 = arguments[3];
          return this._m00 = _e164, this._m01 = -_t247, this._m02 = _n103 - _n103 * _e164 + _s70 * _t247, this._m10 = _t247, this._m11 = _e164, this._m12 = _s70 - _n103 * _t247 - _s70 * _e164, this;
        }
      }
    }, {
      key: "getMatrixEntries",
      value: function getMatrixEntries() {
        return [this._m00, this._m01, this._m02, this._m10, this._m11, this._m12];
      }
    }, {
      key: "filter",
      value: function filter(t, e) {
        this.transform(t, e);
      }
    }, {
      key: "rotate",
      value: function rotate() {
        if (1 === arguments.length) {
          var _t248 = arguments[0];
          return this.compose(ae.rotationInstance(_t248)), this;
        }

        if (2 === arguments.length) {
          var _t249 = arguments[0],
              _e165 = arguments[1];
          return this.compose(ae.rotationInstance(_t249, _e165)), this;
        }

        if (3 === arguments.length) {
          var _t250 = arguments[0],
              _e166 = arguments[1],
              _n104 = arguments[2];
          return this.compose(ae.rotationInstance(_t250, _e166, _n104)), this;
        }

        if (4 === arguments.length) {
          var _t251 = arguments[0],
              _e167 = arguments[1];
          return this.compose(ae.rotationInstance(_t251, _e167)), this;
        }
      }
    }, {
      key: "getDeterminant",
      value: function getDeterminant() {
        return this._m00 * this._m11 - this._m01 * this._m10;
      }
    }, {
      key: "composeBefore",
      value: function composeBefore(t) {
        var e = this._m00 * t._m00 + this._m01 * t._m10,
            n = this._m00 * t._m01 + this._m01 * t._m11,
            s = this._m00 * t._m02 + this._m01 * t._m12 + this._m02,
            i = this._m10 * t._m00 + this._m11 * t._m10,
            r = this._m10 * t._m01 + this._m11 * t._m11,
            o = this._m10 * t._m02 + this._m11 * t._m12 + this._m12;
        return this._m00 = e, this._m01 = n, this._m02 = s, this._m10 = i, this._m11 = r, this._m12 = o, this;
      }
    }, {
      key: "setToShear",
      value: function setToShear(t, e) {
        return this._m00 = 1, this._m01 = t, this._m02 = 0, this._m10 = e, this._m11 = 1, this._m12 = 0, this;
      }
    }, {
      key: "isDone",
      value: function isDone() {
        return !1;
      }
    }, {
      key: "clone",
      value: function clone() {
        try {
          return null;
        } catch (t) {
          if (!(t instanceof C)) throw t;
          u.shouldNeverReachHere();
        }

        return null;
      }
    }, {
      key: "translate",
      value: function translate(t, e) {
        return this.compose(ae.translationInstance(t, e)), this;
      }
    }, {
      key: "setToReflection",
      value: function setToReflection() {
        if (2 === arguments.length) {
          var _t252 = arguments[0],
              _e168 = arguments[1];
          if (0 === _t252 && 0 === _e168) throw new n("Reflection vector must be non-zero");
          if (_t252 === _e168) return this._m00 = 0, this._m01 = 1, this._m02 = 0, this._m10 = 1, this._m11 = 0, this._m12 = 0, this;

          var _s71 = Math.sqrt(_t252 * _t252 + _e168 * _e168),
              _i36 = _e168 / _s71,
              _r24 = _t252 / _s71;

          return this.rotate(-_i36, _r24), this.scale(1, -1), this.rotate(_i36, _r24), this;
        }

        if (4 === arguments.length) {
          var _t253 = arguments[0],
              _e169 = arguments[1],
              _s72 = arguments[2],
              _i37 = arguments[3];
          if (_t253 === _s72 && _e169 === _i37) throw new n("Reflection line points must be distinct");
          this.setToTranslation(-_t253, -_e169);

          var _r25 = _s72 - _t253,
              _o17 = _i37 - _e169,
              _l13 = Math.sqrt(_r25 * _r25 + _o17 * _o17),
              _a10 = _o17 / _l13,
              _c8 = _r25 / _l13;

          return this.rotate(-_a10, _c8), this.scale(1, -1), this.rotate(_a10, _c8), this.translate(_t253, _e169), this;
        }
      }
    }, {
      key: "toString",
      value: function toString() {
        return "AffineTransformation[[" + this._m00 + ", " + this._m01 + ", " + this._m02 + "], [" + this._m10 + ", " + this._m11 + ", " + this._m12 + "]]";
      }
    }, {
      key: "setToTranslation",
      value: function setToTranslation(t, e) {
        return this._m00 = 1, this._m01 = 0, this._m02 = t, this._m10 = 0, this._m11 = 1, this._m12 = e, this;
      }
    }, {
      key: "shear",
      value: function shear(t, e) {
        return this.compose(ae.shearInstance(t, e)), this;
      }
    }, {
      key: "transform",
      value: function transform() {
        if (1 === arguments.length) {
          var _t254 = arguments[0].copy();

          return _t254.apply(this), _t254;
        }

        if (2 === arguments.length) {
          if (arguments[0] instanceof g && arguments[1] instanceof g) {
            var _t255 = arguments[0],
                _e170 = arguments[1],
                _n105 = this._m00 * _t255.x + this._m01 * _t255.y + this._m02,
                _s73 = this._m10 * _t255.x + this._m11 * _t255.y + this._m12;

            return _e170.x = _n105, _e170.y = _s73, _e170;
          }

          if (_(arguments[0], D) && Number.isInteger(arguments[1])) {
            var _t256 = arguments[0],
                _e171 = arguments[1],
                _n106 = this._m00 * _t256.getOrdinate(_e171, 0) + this._m01 * _t256.getOrdinate(_e171, 1) + this._m02,
                _s74 = this._m10 * _t256.getOrdinate(_e171, 0) + this._m11 * _t256.getOrdinate(_e171, 1) + this._m12;

            _t256.setOrdinate(_e171, 0, _n106), _t256.setOrdinate(_e171, 1, _s74);
          }
        }
      }
    }, {
      key: "reflect",
      value: function reflect() {
        if (2 === arguments.length) {
          var _t257 = arguments[0],
              _e172 = arguments[1];
          return this.compose(ae.reflectionInstance(_t257, _e172)), this;
        }

        if (4 === arguments.length) {
          var _t258 = arguments[0],
              _e173 = arguments[1],
              _n107 = arguments[2],
              _s75 = arguments[3];
          return this.compose(ae.reflectionInstance(_t258, _e173, _n107, _s75)), this;
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return ae;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [o, _t];
      }
    }], [{
      key: "translationInstance",
      value: function translationInstance(t, e) {
        var n = new ae();
        return n.setToTranslation(t, e), n;
      }
    }, {
      key: "shearInstance",
      value: function shearInstance(t, e) {
        var n = new ae();
        return n.setToShear(t, e), n;
      }
    }, {
      key: "reflectionInstance",
      value: function reflectionInstance() {
        if (2 === arguments.length) {
          var _t259 = arguments[0],
              _e174 = arguments[1],
              _n108 = new ae();

          return _n108.setToReflection(_t259, _e174), _n108;
        }

        if (4 === arguments.length) {
          var _t260 = arguments[0],
              _e175 = arguments[1],
              _n109 = arguments[2],
              _s76 = arguments[3],
              _i38 = new ae();

          return _i38.setToReflection(_t260, _e175, _n109, _s76), _i38;
        }
      }
    }, {
      key: "rotationInstance",
      value: function rotationInstance() {
        if (1 === arguments.length) {
          var _t261 = arguments[0];
          return ae.rotationInstance(Math.sin(_t261), Math.cos(_t261));
        }

        if (2 === arguments.length) {
          var _t262 = arguments[0],
              _e176 = arguments[1],
              _n110 = new ae();

          return _n110.setToRotation(_t262, _e176), _n110;
        }

        if (3 === arguments.length) {
          var _t263 = arguments[0],
              _e177 = arguments[1],
              _n111 = arguments[2];
          return ae.rotationInstance(Math.sin(_t263), Math.cos(_t263), _e177, _n111);
        }

        if (4 === arguments.length) {
          var _t264 = arguments[0],
              _e178 = arguments[1],
              _n112 = arguments[2],
              _s77 = arguments[3],
              _i39 = new ae();

          return _i39.setToRotation(_t264, _e178, _n112, _s77), _i39;
        }
      }
    }, {
      key: "scaleInstance",
      value: function scaleInstance() {
        if (2 === arguments.length) {
          var _t265 = arguments[0],
              _e179 = arguments[1],
              _n113 = new ae();

          return _n113.setToScale(_t265, _e179), _n113;
        }

        if (4 === arguments.length) {
          var _t266 = arguments[0],
              _e180 = arguments[1],
              _n114 = arguments[2],
              _s78 = arguments[3],
              _i40 = new ae();

          return _i40.translate(-_n114, -_s78), _i40.scale(_t266, _e180), _i40.translate(_n114, _s78), _i40;
        }
      }
    }]);

    return ae;
  }();

  ae.constructor_ = function () {
    if (this._m00 = null, this._m01 = null, this._m02 = null, this._m10 = null, this._m11 = null, this._m12 = null, 0 === arguments.length) this.setToIdentity();else if (1 === arguments.length) {
      if (arguments[0] instanceof Array) {
        var _t267 = arguments[0];
        this._m00 = _t267[0], this._m01 = _t267[1], this._m02 = _t267[2], this._m10 = _t267[3], this._m11 = _t267[4], this._m12 = _t267[5];
      } else if (arguments[0] instanceof ae) {
        var _t268 = arguments[0];
        this.setTransformation(_t268);
      }
    } else if (6 === arguments.length && "number" == typeof arguments[5] && "number" == typeof arguments[4] && "number" == typeof arguments[3] && "number" == typeof arguments[2] && "number" == typeof arguments[0] && "number" == typeof arguments[1]) {
      var _t269 = arguments[0],
          _e181 = arguments[1],
          _n115 = arguments[2],
          _s79 = arguments[3],
          _i41 = arguments[4],
          _r26 = arguments[5];
      this.setTransformation(_t269, _e181, _n115, _s79, _i41, _r26);
    }
  };

  var ce =
  /*#__PURE__*/
  function () {
    function ce() {
      _classCallCheck(this, ce);

      ce.constructor_.apply(this, arguments);
    }

    _createClass(ce, [{
      key: "getClass",
      value: function getClass() {
        return ce;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "solve",
      value: function solve(t, e) {
        var s = e.length;
        if (t.length !== s || t[0].length !== s) throw new n("Matrix A is incorrectly sized");

        for (var _n116 = 0; _n116 < s; _n116++) {
          var _i42 = _n116;

          for (var _e182 = _n116 + 1; _e182 < s; _e182++) {
            Math.abs(t[_e182][_n116]) > Math.abs(t[_i42][_n116]) && (_i42 = _e182);
          }

          if (0 === t[_i42][_n116]) return null;
          ce.swapRows(t, _n116, _i42), ce.swapRows(e, _n116, _i42);

          for (var _i43 = _n116 + 1; _i43 < s; _i43++) {
            var _r27 = t[_i43][_n116] / t[_n116][_n116];

            for (var _e183 = s - 1; _e183 >= _n116; _e183--) {
              t[_i43][_e183] -= t[_n116][_e183] * _r27;
            }

            e[_i43] -= e[_n116] * _r27;
          }
        }

        var i = new Array(s).fill(null);

        for (var _n117 = s - 1; _n117 >= 0; _n117--) {
          var _r28 = 0;

          for (var _e184 = _n117 + 1; _e184 < s; _e184++) {
            _r28 += t[_n117][_e184] * i[_e184];
          }

          i[_n117] = (e[_n117] - _r28) / t[_n117][_n117];
        }

        return i;
      }
    }, {
      key: "swapRows",
      value: function swapRows() {
        if (Number.isInteger(arguments[2]) && arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
          var _t270 = arguments[0],
              _e185 = arguments[1],
              _n118 = arguments[2];
          if (_e185 === _n118) return null;

          for (var _s80 = 0; _s80 < _t270[0].length; _s80++) {
            var _i44 = _t270[_e185][_s80];
            _t270[_e185][_s80] = _t270[_n118][_s80], _t270[_n118][_s80] = _i44;
          }
        } else if (Number.isInteger(arguments[2]) && arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
          var _t271 = arguments[0],
              _e186 = arguments[1],
              _n119 = arguments[2];
          if (_e186 === _n119) return null;
          var _s81 = _t271[_e186];
          _t271[_e186] = _t271[_n119], _t271[_n119] = _s81;
        }
      }
    }]);

    return ce;
  }();

  ce.constructor_ = function () {};

  var he =
  /*#__PURE__*/
  function () {
    function he() {
      _classCallCheck(this, he);

      he.constructor_.apply(this, arguments);
    }

    _createClass(he, [{
      key: "solve",
      value: function solve(t) {
        var e = [[this._src0.x, this._src0.y, 1], [this._src1.x, this._src1.y, 1], [this._src2.x, this._src2.y, 1]];
        return ce.solve(e, t);
      }
    }, {
      key: "compute",
      value: function compute() {
        var t = [this._dest0.x, this._dest1.x, this._dest2.x],
            e = this.solve(t);
        if (null === e) return !1;
        this._m00 = e[0], this._m01 = e[1], this._m02 = e[2];
        var n = [this._dest0.y, this._dest1.y, this._dest2.y],
            s = this.solve(n);
        return null !== s && (this._m10 = s[0], this._m11 = s[1], this._m12 = s[2], !0);
      }
    }, {
      key: "getTransformation",
      value: function getTransformation() {
        return this.compute() ? new ae(this._m00, this._m01, this._m02, this._m10, this._m11, this._m12) : null;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return he;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return he;
  }();

  he.constructor_ = function () {
    this._src0 = null, this._src1 = null, this._src2 = null, this._dest0 = null, this._dest1 = null, this._dest2 = null, this._m00 = null, this._m01 = null, this._m02 = null, this._m10 = null, this._m11 = null, this._m12 = null;
    var t = arguments[0],
        e = arguments[1],
        n = arguments[2],
        s = arguments[3],
        i = arguments[4],
        r = arguments[5];
    this._src0 = t, this._src1 = e, this._src2 = n, this._dest0 = s, this._dest1 = i, this._dest2 = r;
  };

  var ue =
  /*#__PURE__*/
  function () {
    function ue() {
      _classCallCheck(this, ue);

      ue.constructor_.apply(this, arguments);
    }

    _createClass(ue, [{
      key: "getClass",
      value: function getClass() {
        return ue;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "createFromBaseLines",
      value: function createFromBaseLines(t, e, n, s) {
        var i = new g(t.x + s.x - n.x, t.y + s.y - n.y),
            r = re.angleBetweenOriented(e, t, i),
            o = e.distance(t),
            l = s.distance(n);
        if (0 === o) return new ae();
        var a = l / o,
            c = ae.translationInstance(-t.x, -t.y);
        return c.rotate(r), c.scale(a, a), c.translate(n.x, n.y), c;
      }
    }, {
      key: "createFromControlVectors",
      value: function createFromControlVectors() {
        if (2 === arguments.length) {
          if (arguments[0] instanceof g && arguments[1] instanceof g) {
            var _t272 = arguments[0],
                _e187 = arguments[1],
                _n120 = _e187.x - _t272.x,
                _s82 = _e187.y - _t272.y;

            return ae.translationInstance(_n120, _s82);
          }

          if (arguments[0] instanceof Array && arguments[1] instanceof Array) {
            var _t273 = arguments[0],
                _e188 = arguments[1];
            if (_t273.length !== _e188.length) throw new n("Src and Dest arrays are not the same length");
            if (_t273.length <= 0) throw new n("Too few control points");
            if (_t273.length > 3) throw new n("Too many control points");
            return 1 === _t273.length ? ue.createFromControlVectors(_t273[0], _e188[0]) : 2 === _t273.length ? ue.createFromControlVectors(_t273[0], _t273[1], _e188[0], _e188[1]) : ue.createFromControlVectors(_t273[0], _t273[1], _t273[2], _e188[0], _e188[1], _e188[2]);
          }
        } else {
          if (4 === arguments.length) {
            var _t274 = arguments[0],
                _e189 = arguments[1],
                _n121 = arguments[2],
                _s83 = arguments[3],
                _i45 = new g(_s83.x - _n121.x, _s83.y - _n121.y),
                _r29 = re.angleBetweenOriented(_e189, _t274, _i45),
                _o18 = _e189.distance(_t274),
                _l14 = _s83.distance(_n121);

            if (0 === _o18) return null;

            var _a11 = _l14 / _o18,
                _c9 = ae.translationInstance(-_t274.x, -_t274.y);

            return _c9.rotate(_r29), _c9.scale(_a11, _a11), _c9.translate(_n121.x, _n121.y), _c9;
          }

          if (6 === arguments.length) {
            var _t275 = arguments[0],
                _e190 = arguments[1],
                _n122 = arguments[2],
                _s84 = arguments[3],
                _i46 = arguments[4],
                _r30 = arguments[5];
            return new he(_t275, _e190, _n122, _s84, _i46, _r30).getTransformation();
          }
        }
      }
    }]);

    return ue;
  }();

  ue.constructor_ = function () {};

  var ge =
  /*#__PURE__*/
  function () {
    function ge() {
      _classCallCheck(this, ge);

      ge.constructor_.apply(this, arguments);
    }

    _createClass(ge, [{
      key: "filter",
      value: function filter(t) {
        (t instanceof Rt || t instanceof vt) && this._coords.add(t.getCoordinate());
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return ge;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [G];
      }
    }], [{
      key: "getCoordinates",
      value: function getCoordinates(t) {
        var e = new x();
        return t.apply(new ge(e)), e;
      }
    }]);

    return ge;
  }();

  ge.constructor_ = function () {
    this._coords = null;
    var t = arguments[0];
    this._coords = t;
  };

  var de =
  /*#__PURE__*/
  function () {
    function de() {
      _classCallCheck(this, de);

      de.constructor_.apply(this, arguments);
    }

    _createClass(de, [{
      key: "map",
      value: function map(t) {
        var e = new x();

        for (var _n123 = 0; _n123 < t.getNumGeometries(); _n123++) {
          var _s85 = this._mapOp.map(t.getGeometryN(_n123));

          _s85.isEmpty() || e.add(_s85);
        }

        return t.getFactory().createGeometryCollection(Wt.toGeometryArray(e));
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return de;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "map",
      value: function map(t, e) {
        return new de(e).map(t);
      }
    }]);

    return de;
  }();

  de.constructor_ = function () {
    this._mapOp = null;
    var t = arguments[0];
    this._mapOp = t;
  };

  var _e =
  /*#__PURE__*/
  function () {
    function _e() {
      _classCallCheck(this, _e);

      _e.constructor_.apply(this, arguments);
    }

    _createClass(_e, [{
      key: "extractElements",
      value: function extractElements(t, e) {
        if (null === t) return null;

        for (var _n124 = 0; _n124 < t.getNumGeometries(); _n124++) {
          var _s86 = t.getGeometryN(_n124);

          this._skipEmpty && _s86.isEmpty() || e.add(_s86);
        }
      }
    }, {
      key: "combine",
      value: function combine() {
        var t = new x();

        for (var _e191 = this._inputGeoms.iterator(); _e191.hasNext();) {
          var _n125 = _e191.next();

          this.extractElements(_n125, t);
        }

        return 0 === t.size() ? null !== this._geomFactory ? this._geomFactory.createGeometryCollection() : null : this._geomFactory.buildGeometry(t);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return _e;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "combine",
      value: function combine() {
        if (1 === arguments.length) {
          var _t276 = arguments[0];
          return new _e(_t276).combine();
        }

        if (2 === arguments.length) {
          var _t277 = arguments[0],
              _e192 = arguments[1];
          return new _e(_e.createList(_t277, _e192)).combine();
        }

        if (3 === arguments.length) {
          var _t278 = arguments[0],
              _e193 = arguments[1],
              _n126 = arguments[2];
          return new _e(_e.createList(_t278, _e193, _n126)).combine();
        }
      }
    }, {
      key: "extractFactory",
      value: function extractFactory(t) {
        return t.isEmpty() ? null : t.iterator().next().getFactory();
      }
    }, {
      key: "createList",
      value: function createList() {
        if (2 === arguments.length) {
          var _t279 = arguments[0],
              _e194 = arguments[1],
              _n127 = new x();

          return _n127.add(_t279), _n127.add(_e194), _n127;
        }

        if (3 === arguments.length) {
          var _t280 = arguments[0],
              _e195 = arguments[1],
              _n128 = arguments[2],
              _s87 = new x();

          return _s87.add(_t280), _s87.add(_e195), _s87.add(_n128), _s87;
        }
      }
    }]);

    return _e;
  }();

  _e.constructor_ = function () {
    this._geomFactory = null, this._skipEmpty = !1, this._inputGeoms = null;
    var t = arguments[0];
    this._geomFactory = _e.extractFactory(t), this._inputGeoms = t;
  };

  var fe =
  /*#__PURE__*/
  function () {
    function fe() {
      _classCallCheck(this, fe);

      fe.constructor_.apply(this, arguments);
    }

    _createClass(fe, [{
      key: "filter",
      value: function filter(t) {
        (null === this._geometryType || fe.isOfType(t, this._geometryType)) && this._comps.add(t);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return fe;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [dt];
      }
    }], [{
      key: "isOfType",
      value: function isOfType(t, e) {
        return t.getGeometryType() === e || e === q.TYPENAME_LINESTRING && t.getGeometryType() === q.TYPENAME_LINEARRING;
      }
    }, {
      key: "extract",
      value: function extract() {
        if (2 === arguments.length) {
          var _t281 = arguments[0],
              _e196 = arguments[1];
          return fe.extract(_t281, _e196, new x());
        }

        if (3 === arguments.length) {
          if (_(arguments[2], m) && arguments[0] instanceof q && "string" == typeof arguments[1]) {
            var _t282 = arguments[0],
                _e197 = arguments[1],
                _n129 = arguments[2];
            return _t282.getGeometryType() === _e197 ? _n129.add(_t282) : _t282 instanceof ft && _t282.apply(new fe(_e197, _n129)), _n129;
          }

          if (_(arguments[2], m) && arguments[0] instanceof q && arguments[1] instanceof Class) {
            var _t283 = arguments[0],
                _e198 = arguments[1],
                _n130 = arguments[2];
            return fe.extract(_t283, fe.toGeometryType(_e198), _n130);
          }
        }
      }
    }]);

    return fe;
  }();

  fe.constructor_ = function () {
    this._geometryType = null, this._comps = null;
    var t = arguments[0],
        e = arguments[1];
    this._geometryType = t, this._comps = e;
  };

  var pe =
  /*#__PURE__*/
  function () {
    function pe() {
      _classCallCheck(this, pe);

      pe.constructor_.apply(this, arguments);
    }

    _createClass(pe, [{
      key: "map",
      value: function map(t) {}
    }, {
      key: "getClass",
      value: function getClass() {
        return pe;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return pe;
  }();

  pe.constructor_ = function () {};

  var me =
  /*#__PURE__*/
  function () {
    function me() {
      _classCallCheck(this, me);

      me.constructor_.apply(this, arguments);
    }

    _createClass(me, [{
      key: "getClass",
      value: function getClass() {
        return me;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "map",
      value: function map() {
        if (arguments[0] instanceof q && _(arguments[1], pe)) {
          var _t284 = arguments[0],
              _e199 = arguments[1],
              _n131 = new x();

          for (var _s88 = 0; _s88 < _t284.getNumGeometries(); _s88++) {
            var _i47 = _e199.map(_t284.getGeometryN(_s88));

            null !== _i47 && _n131.add(_i47);
          }

          return _t284.getFactory().buildGeometry(_n131);
        }

        if (_(arguments[0], f) && _(arguments[1], pe)) {
          var _t285 = arguments[0],
              _e200 = arguments[1],
              _n132 = new x();

          for (var _s89 = _t285.iterator(); _s89.hasNext();) {
            var _t286 = _s89.next(),
                _i48 = _e200.map(_t286);

            null !== _i48 && _n132.add(_i48);
          }

          return _n132;
        }
      }
    }]);

    return me;
  }();

  me.constructor_ = function () {};

  var ye =
  /*#__PURE__*/
  function () {
    function ye() {
      _classCallCheck(this, ye);

      ye.constructor_.apply(this, arguments);
    }

    _createClass(ye, [{
      key: "transformPoint",
      value: function transformPoint(t, e) {
        return this._factory.createPoint(this.transformCoordinates(t.getCoordinateSequence(), t));
      }
    }, {
      key: "transformPolygon",
      value: function transformPolygon(t, e) {
        var n = !0;
        var s = this.transformLinearRing(t.getExteriorRing(), t);
        null !== s && s instanceof Dt && !s.isEmpty() || (n = !1);
        var i = new x();

        for (var _e201 = 0; _e201 < t.getNumInteriorRing(); _e201++) {
          var _s90 = this.transformLinearRing(t.getInteriorRingN(_e201), t);

          null === _s90 || _s90.isEmpty() || (_s90 instanceof Dt || (n = !1), i.add(_s90));
        }

        if (n) return this._factory.createPolygon(s, i.toArray([]));
        {
          var _t287 = new x();

          return null !== s && _t287.add(s), _t287.addAll(i), this._factory.buildGeometry(_t287);
        }
      }
    }, {
      key: "createCoordinateSequence",
      value: function createCoordinateSequence(t) {
        return this._factory.getCoordinateSequenceFactory().create(t);
      }
    }, {
      key: "getInputGeometry",
      value: function getInputGeometry() {
        return this._inputGeom;
      }
    }, {
      key: "transformMultiLineString",
      value: function transformMultiLineString(t, e) {
        var n = new x();

        for (var _e202 = 0; _e202 < t.getNumGeometries(); _e202++) {
          var _s91 = this.transformLineString(t.getGeometryN(_e202), t);

          null !== _s91 && (_s91.isEmpty() || n.add(_s91));
        }

        return this._factory.buildGeometry(n);
      }
    }, {
      key: "transformCoordinates",
      value: function transformCoordinates(t, e) {
        return this.copy(t);
      }
    }, {
      key: "transformLineString",
      value: function transformLineString(t, e) {
        return this._factory.createLineString(this.transformCoordinates(t.getCoordinateSequence(), t));
      }
    }, {
      key: "transformMultiPoint",
      value: function transformMultiPoint(t, e) {
        var n = new x();

        for (var _e203 = 0; _e203 < t.getNumGeometries(); _e203++) {
          var _s92 = this.transformPoint(t.getGeometryN(_e203), t);

          null !== _s92 && (_s92.isEmpty() || n.add(_s92));
        }

        return this._factory.buildGeometry(n);
      }
    }, {
      key: "transformMultiPolygon",
      value: function transformMultiPolygon(t, e) {
        var n = new x();

        for (var _e204 = 0; _e204 < t.getNumGeometries(); _e204++) {
          var _s93 = this.transformPolygon(t.getGeometryN(_e204), t);

          null !== _s93 && (_s93.isEmpty() || n.add(_s93));
        }

        return this._factory.buildGeometry(n);
      }
    }, {
      key: "copy",
      value: function copy(t) {
        return t.copy();
      }
    }, {
      key: "transformGeometryCollection",
      value: function transformGeometryCollection(t, e) {
        var n = new x();

        for (var _e205 = 0; _e205 < t.getNumGeometries(); _e205++) {
          var _s94 = this.transform(t.getGeometryN(_e205));

          null !== _s94 && (this._pruneEmptyGeometry && _s94.isEmpty() || n.add(_s94));
        }

        return this._preserveGeometryCollectionType ? this._factory.createGeometryCollection(Wt.toGeometryArray(n)) : this._factory.buildGeometry(n);
      }
    }, {
      key: "transform",
      value: function transform(t) {
        if (this._inputGeom = t, this._factory = t.getFactory(), t instanceof vt) return this.transformPoint(t, null);
        if (t instanceof At) return this.transformMultiPoint(t, null);
        if (t instanceof Dt) return this.transformLinearRing(t, null);
        if (t instanceof Rt) return this.transformLineString(t, null);
        if (t instanceof pt) return this.transformMultiLineString(t, null);
        if (t instanceof Mt) return this.transformPolygon(t, null);
        if (t instanceof Ft) return this.transformMultiPolygon(t, null);
        if (t instanceof ft) return this.transformGeometryCollection(t, null);
        throw new n("Unknown Geometry subtype: " + t.getClass().getName());
      }
    }, {
      key: "transformLinearRing",
      value: function transformLinearRing(t, e) {
        var n = this.transformCoordinates(t.getCoordinateSequence(), t);
        if (null === n) return this._factory.createLinearRing(null);
        var s = n.size();
        return s > 0 && s < 4 && !this._preserveType ? this._factory.createLineString(n) : this._factory.createLinearRing(n);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return ye;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return ye;
  }();

  ye.constructor_ = function () {
    this._inputGeom = null, this._factory = null, this._pruneEmptyGeometry = !0, this._preserveGeometryCollectionType = !0, this._preserveCollections = !1, this._preserveType = !1;
  };

  var xe =
  /*#__PURE__*/
  function () {
    function xe() {
      _classCallCheck(this, xe);

      xe.constructor_.apply(this, arguments);
    }

    _createClass(xe, [{
      key: "filter",
      value: function filter(t) {
        t instanceof Rt && this._comps.add(t);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return xe;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [dt];
      }
    }], [{
      key: "getGeometry",
      value: function getGeometry(t) {
        return t.getFactory().buildGeometry(xe.getLines(t));
      }
    }, {
      key: "getLines",
      value: function getLines() {
        if (1 === arguments.length) {
          var _t288 = arguments[0];
          return xe.getLines(_t288, new x());
        }

        if (2 === arguments.length) {
          var _t289 = arguments[0],
              _e206 = arguments[1];
          return _t289 instanceof Rt ? _e206.add(_t289) : _t289 instanceof ft && _t289.apply(new xe(_e206)), _e206;
        }
      }
    }]);

    return xe;
  }();

  xe.constructor_ = function () {
    this._comps = null;
    var t = arguments[0];
    this._comps = t;
  };

  var Ee =
  /*#__PURE__*/
  function () {
    function Ee() {
      _classCallCheck(this, Ee);

      Ee.constructor_.apply(this, arguments);
    }

    _createClass(Ee, [{
      key: "filter",
      value: function filter(t) {
        if (this._isForcedToLineString && t instanceof Dt) {
          var _e207 = t.getFactory().createLineString(t.getCoordinateSequence());

          return this._lines.add(_e207), null;
        }

        t instanceof Rt && this._lines.add(t);
      }
    }, {
      key: "setForceToLineString",
      value: function setForceToLineString(t) {
        this._isForcedToLineString = t;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Ee;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [G];
      }
    }], [{
      key: "getGeometry",
      value: function getGeometry() {
        if (1 === arguments.length) {
          var _t290 = arguments[0];
          return _t290.getFactory().buildGeometry(Ee.getLines(_t290));
        }

        if (2 === arguments.length) {
          var _t291 = arguments[0],
              _e208 = arguments[1];
          return _t291.getFactory().buildGeometry(Ee.getLines(_t291, _e208));
        }
      }
    }, {
      key: "getLines",
      value: function getLines() {
        if (1 === arguments.length) {
          var _t292 = arguments[0];
          return Ee.getLines(_t292, !1);
        }

        if (2 === arguments.length) {
          if (_(arguments[0], f) && _(arguments[1], f)) {
            var _t293 = arguments[0],
                _e209 = arguments[1];

            for (var _n133 = _t293.iterator(); _n133.hasNext();) {
              var _t294 = _n133.next();

              Ee.getLines(_t294, _e209);
            }

            return _e209;
          }

          if (arguments[0] instanceof q && "boolean" == typeof arguments[1]) {
            var _t295 = arguments[0],
                _e210 = arguments[1],
                _n134 = new x();

            return _t295.apply(new Ee(_n134, _e210)), _n134;
          }

          if (arguments[0] instanceof q && _(arguments[1], f)) {
            var _t296 = arguments[0],
                _e211 = arguments[1];
            return _t296 instanceof Rt ? _e211.add(_t296) : _t296.apply(new Ee(_e211)), _e211;
          }
        } else if (3 === arguments.length) {
          if ("boolean" == typeof arguments[2] && _(arguments[0], f) && _(arguments[1], f)) {
            var _t297 = arguments[0],
                _e212 = arguments[1],
                _n135 = arguments[2];

            for (var _s95 = _t297.iterator(); _s95.hasNext();) {
              var _t298 = _s95.next();

              Ee.getLines(_t298, _e212, _n135);
            }

            return _e212;
          }

          if ("boolean" == typeof arguments[2] && arguments[0] instanceof q && _(arguments[1], f)) {
            var _t299 = arguments[0],
                _e213 = arguments[1],
                _n136 = arguments[2];
            return _t299.apply(new Ee(_e213, _n136)), _e213;
          }
        }
      }
    }]);

    return Ee;
  }();

  Ee.constructor_ = function () {
    if (this._lines = null, this._isForcedToLineString = !1, 1 === arguments.length) {
      var _t300 = arguments[0];
      this._lines = _t300;
    } else if (2 === arguments.length) {
      var _t301 = arguments[0],
          _e214 = arguments[1];
      this._lines = _t301, this._isForcedToLineString = _e214;
    }
  };

  var Ie = {
    reverseOrder: function reverseOrder() {
      return {
        compare: function compare(t, e) {
          return e.compareTo(t);
        }
      };
    },
    min: function min(t) {
      return Ie.sort(t), t.get(0);
    },
    sort: function sort(t, e) {
      var n = t.toArray();
      e ? ut.sort(n, e) : ut.sort(n);
      var s = t.iterator();

      for (var _t302 = 0, _e215 = n.length; _t302 < _e215; _t302++) {
        s.next(), s.set(n[_t302]);
      }
    },
    singletonList: function singletonList(t) {
      var e = new x();
      return e.add(t), e;
    }
  };

  var Ne =
  /*#__PURE__*/
  function () {
    function Ne() {
      _classCallCheck(this, Ne);

      Ne.constructor_.apply(this, arguments);
    }

    _createClass(Ne, [{
      key: "filter",
      value: function filter(t) {
        t instanceof vt && this._pts.add(t);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Ne;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [dt];
      }
    }], [{
      key: "getPoints",
      value: function getPoints() {
        if (1 === arguments.length) {
          var _t303 = arguments[0];
          return _t303 instanceof vt ? Ie.singletonList(_t303) : Ne.getPoints(_t303, new x());
        }

        if (2 === arguments.length) {
          var _t304 = arguments[0],
              _e216 = arguments[1];
          return _t304 instanceof vt ? _e216.add(_t304) : _t304 instanceof ft && _t304.apply(new Ne(_e216)), _e216;
        }
      }
    }]);

    return Ne;
  }();

  Ne.constructor_ = function () {
    this._pts = null;
    var t = arguments[0];
    this._pts = t;
  };

  var Ce =
  /*#__PURE__*/
  function () {
    function Ce() {
      _classCallCheck(this, Ce);

      Ce.constructor_.apply(this, arguments);
    }

    _createClass(Ce, [{
      key: "filter",
      value: function filter(t) {
        t instanceof Mt && this._comps.add(t);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Ce;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [dt];
      }
    }], [{
      key: "getPolygons",
      value: function getPolygons() {
        if (1 === arguments.length) {
          var _t305 = arguments[0];
          return Ce.getPolygons(_t305, new x());
        }

        if (2 === arguments.length) {
          var _t306 = arguments[0],
              _e217 = arguments[1];
          return _t306 instanceof Mt ? _e217.add(_t306) : _t306 instanceof ft && _t306.apply(new Ce(_e217)), _e217;
        }
      }
    }]);

    return Ce;
  }();

  Ce.constructor_ = function () {
    this._comps = null;
    var t = arguments[0];
    this._comps = t;
  };

  var Se =
  /*#__PURE__*/
  function () {
    function Se() {
      _classCallCheck(this, Se);

      Se.constructor_.apply(this, arguments);
    }

    _createClass(Se, [{
      key: "applyTo",
      value: function applyTo(t) {
        for (var _e218 = 0; _e218 < t.getNumGeometries() && !this._isDone; _e218++) {
          var _n137 = t.getGeometryN(_e218);

          if (_n137 instanceof ft) this.applyTo(_n137);else if (this.visit(_n137), this.isDone()) return this._isDone = !0, null;
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Se;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Se;
  }();

  Se.constructor_ = function () {
    this._isDone = !1;
  };

  var we =
  /*#__PURE__*/
  function () {
    function we() {
      _classCallCheck(this, we);

      we.constructor_.apply(this, arguments);
    }

    _createClass(we, [{
      key: "createSupercircle",
      value: function createSupercircle(t) {
        var e = 1 / t,
            n = this._dim.getMinSize() / 2,
            s = this._dim.getCentre(),
            i = Math.pow(n, t),
            r = n,
            o = Math.pow(i / 2, e),
            l = Math.trunc(this._nPts / 8),
            a = new Array(8 * l + 1).fill(null),
            c = o / l;

        for (var _n138 = 0; _n138 <= l; _n138++) {
          var _o19 = 0,
              _h3 = r;

          if (0 !== _n138) {
            _o19 = c * _n138;

            var _s96 = Math.pow(_o19, t);

            _h3 = Math.pow(i - _s96, e);
          }

          a[_n138] = this.coordTrans(_o19, _h3, s), a[2 * l - _n138] = this.coordTrans(_h3, _o19, s), a[2 * l + _n138] = this.coordTrans(_h3, -_o19, s), a[4 * l - _n138] = this.coordTrans(_o19, -_h3, s), a[4 * l + _n138] = this.coordTrans(-_o19, -_h3, s), a[6 * l - _n138] = this.coordTrans(-_h3, -_o19, s), a[6 * l + _n138] = this.coordTrans(-_h3, _o19, s), a[8 * l - _n138] = this.coordTrans(-_o19, _h3, s);
        }

        a[a.length - 1] = new g(a[0]);

        var h = this._geomFact.createLinearRing(a),
            u = this._geomFact.createPolygon(h);

        return this.rotate(u);
      }
    }, {
      key: "setNumPoints",
      value: function setNumPoints(t) {
        this._nPts = t;
      }
    }, {
      key: "setBase",
      value: function setBase(t) {
        this._dim.setBase(t);
      }
    }, {
      key: "setRotation",
      value: function setRotation(t) {
        this._rotationAngle = t;
      }
    }, {
      key: "setWidth",
      value: function setWidth(t) {
        this._dim.setWidth(t);
      }
    }, {
      key: "createEllipse",
      value: function createEllipse() {
        var t = this._dim.getEnvelope(),
            e = t.getWidth() / 2,
            n = t.getHeight() / 2,
            s = t.getMinX() + e,
            i = t.getMinY() + n,
            r = new Array(this._nPts + 1).fill(null);

        var o = 0;

        for (var _t307 = 0; _t307 < this._nPts; _t307++) {
          var _l15 = _t307 * (2 * Math.PI / this._nPts),
              _a12 = e * Math.cos(_l15) + s,
              _c10 = n * Math.sin(_l15) + i;

          r[o++] = this.coord(_a12, _c10);
        }

        r[o] = new g(r[0]);

        var l = this._geomFact.createLinearRing(r),
            a = this._geomFact.createPolygon(l);

        return this.rotate(a);
      }
    }, {
      key: "coordTrans",
      value: function coordTrans(t, e, n) {
        return this.coord(t + n.x, e + n.y);
      }
    }, {
      key: "createSquircle",
      value: function createSquircle() {
        return this.createSupercircle(4);
      }
    }, {
      key: "setEnvelope",
      value: function setEnvelope(t) {
        this._dim.setEnvelope(t);
      }
    }, {
      key: "setCentre",
      value: function setCentre(t) {
        this._dim.setCentre(t);
      }
    }, {
      key: "createArc",
      value: function createArc(t, e) {
        var n = this._dim.getEnvelope(),
            s = n.getWidth() / 2,
            i = n.getHeight() / 2,
            r = n.getMinX() + s,
            o = n.getMinY() + i;

        var l = e;
        (l <= 0 || l > 2 * Math.PI) && (l = 2 * Math.PI);
        var a = l / (this._nPts - 1),
            c = new Array(this._nPts).fill(null);
        var h = 0;

        for (var _e219 = 0; _e219 < this._nPts; _e219++) {
          var _n139 = t + _e219 * a,
              _l16 = s * Math.cos(_n139) + r,
              _u2 = i * Math.sin(_n139) + o;

          c[h++] = this.coord(_l16, _u2);
        }

        var u = this._geomFact.createLineString(c);

        return this.rotate(u);
      }
    }, {
      key: "rotate",
      value: function rotate(t) {
        if (0 !== this._rotationAngle) {
          var _e220 = ae.rotationInstance(this._rotationAngle, this._dim.getCentre().x, this._dim.getCentre().y);

          t.apply(_e220);
        }

        return t;
      }
    }, {
      key: "coord",
      value: function coord(t, e) {
        var n = new g(t, e);
        return this._precModel.makePrecise(n), n;
      }
    }, {
      key: "createArcPolygon",
      value: function createArcPolygon(t, e) {
        var n = this._dim.getEnvelope(),
            s = n.getWidth() / 2,
            i = n.getHeight() / 2,
            r = n.getMinX() + s,
            o = n.getMinY() + i;

        var l = e;
        (l <= 0 || l > 2 * Math.PI) && (l = 2 * Math.PI);
        var a = l / (this._nPts - 1),
            c = new Array(this._nPts + 2).fill(null);
        var h = 0;
        c[h++] = this.coord(r, o);

        for (var _e221 = 0; _e221 < this._nPts; _e221++) {
          var _n140 = t + a * _e221,
              _l17 = s * Math.cos(_n140) + r,
              _u3 = i * Math.sin(_n140) + o;

          c[h++] = this.coord(_l17, _u3);
        }

        c[h++] = this.coord(r, o);

        var u = this._geomFact.createLinearRing(c),
            g = this._geomFact.createPolygon(u);

        return this.rotate(g);
      }
    }, {
      key: "createRectangle",
      value: function createRectangle() {
        var t = null,
            e = 0,
            n = Math.trunc(this._nPts / 4);
        n < 1 && (n = 1);

        var s = this._dim.getEnvelope().getWidth() / n,
            i = this._dim.getEnvelope().getHeight() / n,
            r = new Array(4 * n + 1).fill(null),
            o = this._dim.getEnvelope();

        for (t = 0; t < n; t++) {
          var _n141 = o.getMinX() + t * s,
              _i49 = o.getMinY();

          r[e++] = this.coord(_n141, _i49);
        }

        for (t = 0; t < n; t++) {
          var _n142 = o.getMaxX(),
              _s97 = o.getMinY() + t * i;

          r[e++] = this.coord(_n142, _s97);
        }

        for (t = 0; t < n; t++) {
          var _n143 = o.getMaxX() - t * s,
              _i50 = o.getMaxY();

          r[e++] = this.coord(_n143, _i50);
        }

        for (t = 0; t < n; t++) {
          var _n144 = o.getMinX(),
              _s98 = o.getMaxY() - t * i;

          r[e++] = this.coord(_n144, _s98);
        }

        r[e++] = new g(r[0]);

        var l = this._geomFact.createLinearRing(r),
            a = this._geomFact.createPolygon(l);

        return this.rotate(a);
      }
    }, {
      key: "createCircle",
      value: function createCircle() {
        return this.createEllipse();
      }
    }, {
      key: "setHeight",
      value: function setHeight(t) {
        this._dim.setHeight(t);
      }
    }, {
      key: "setSize",
      value: function setSize(t) {
        this._dim.setSize(t);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return we;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return we;
  }();

  var Le =
  /*#__PURE__*/
  function () {
    function Le() {
      _classCallCheck(this, Le);

      Le.constructor_.apply(this, arguments);
    }

    _createClass(Le, [{
      key: "setBase",
      value: function setBase(t) {
        this.base = t;
      }
    }, {
      key: "setWidth",
      value: function setWidth(t) {
        this.width = t;
      }
    }, {
      key: "getBase",
      value: function getBase() {
        return this.base;
      }
    }, {
      key: "getWidth",
      value: function getWidth() {
        return this.width;
      }
    }, {
      key: "setEnvelope",
      value: function setEnvelope(t) {
        this.width = t.getWidth(), this.height = t.getHeight(), this.base = new g(t.getMinX(), t.getMinY()), this.centre = new g(t.centre());
      }
    }, {
      key: "setCentre",
      value: function setCentre(t) {
        this.centre = t;
      }
    }, {
      key: "getMinSize",
      value: function getMinSize() {
        return Math.min(this.width, this.height);
      }
    }, {
      key: "getEnvelope",
      value: function getEnvelope() {
        return null !== this.base ? new N(this.base.x, this.base.x + this.width, this.base.y, this.base.y + this.height) : null !== this.centre ? new N(this.centre.x - this.width / 2, this.centre.x + this.width / 2, this.centre.y - this.height / 2, this.centre.y + this.height / 2) : new N(0, this.width, 0, this.height);
      }
    }, {
      key: "getCentre",
      value: function getCentre() {
        return null === this.centre && (this.centre = new g(this.base.x + this.width / 2, this.base.y + this.height / 2)), this.centre;
      }
    }, {
      key: "getHeight",
      value: function getHeight() {
        return this.height;
      }
    }, {
      key: "setHeight",
      value: function setHeight(t) {
        this.height = t;
      }
    }, {
      key: "setSize",
      value: function setSize(t) {
        this.height = t, this.width = t;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Le;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Le;
  }();

  Le.constructor_ = function () {
    this.base = null, this.centre = null, this.width = null, this.height = null;
  }, we.Dimensions = Le, we.constructor_ = function () {
    if (this._geomFact = null, this._precModel = null, this._dim = new Le(), this._nPts = 100, this._rotationAngle = 0, 0 === arguments.length) we.constructor_.call(this, new Wt());else if (1 === arguments.length) {
      var _t308 = arguments[0];
      this._geomFact = _t308, this._precModel = _t308.getPrecisionModel();
    }
  };

  var Te =
  /*#__PURE__*/
  function (_we) {
    _inherits(Te, _we);

    function Te() {
      var _this15;

      _classCallCheck(this, Te);

      _this15 = _possibleConstructorReturn(this, _getPrototypeOf(Te).call(this)), Te.constructor_.apply(_assertThisInitialized(_this15), arguments);
      return _this15;
    }

    _createClass(Te, [{
      key: "setNumArms",
      value: function setNumArms(t) {
        this._numArms = t;
      }
    }, {
      key: "setArmLengthRatio",
      value: function setArmLengthRatio(t) {
        this._armLengthRatio = t;
      }
    }, {
      key: "createSineStar",
      value: function createSineStar() {
        var t = this._dim.getEnvelope(),
            e = t.getWidth() / 2;

        var n = this._armLengthRatio;
        n < 0 && (n = 0), n > 1 && (n = 1);
        var s = n * e,
            i = (1 - n) * e,
            r = t.getMinX() + e,
            o = t.getMinY() + e,
            l = new Array(this._nPts + 1).fill(null);
        var a = 0;

        for (var _t309 = 0; _t309 < this._nPts; _t309++) {
          var _e222 = _t309 / this._nPts * this._numArms,
              _n145 = _e222 - Math.floor(_e222),
              _c11 = 2 * Math.PI * _n145,
              _h4 = i + s * ((Math.cos(_c11) + 1) / 2),
              _u4 = _t309 * (2 * Math.PI / this._nPts),
              _g = _h4 * Math.cos(_u4) + r,
              _d = _h4 * Math.sin(_u4) + o;

          l[a++] = this.coord(_g, _d);
        }

        l[a] = new g(l[0]);

        var c = this._geomFact.createLinearRing(l);

        return this._geomFact.createPolygon(c);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Te;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Te;
  }(we);

  Te.constructor_ = function () {
    if (this._numArms = 8, this._armLengthRatio = .5, 0 === arguments.length) we.constructor_.call(this);else if (1 === arguments.length) {
      var _t310 = arguments[0];
      we.constructor_.call(this, _t310);
    }
  };

  var Re = Object.freeze({
    AffineTransformation: ae,
    AffineTransformationBuilder: he,
    AffineTransformationFactory: ue,
    ComponentCoordinateExtracter: ge,
    GeometryCollectionMapper: de,
    GeometryCombiner: _e,
    GeometryEditor: Gt,
    GeometryExtracter: fe,
    GeometryMapper: me,
    GeometryTransformer: ye,
    LineStringExtracter: xe,
    LinearComponentExtracter: Ee,
    MapOp: pe,
    PointExtracter: Ne,
    PolygonExtracter: Ce,
    ShortCircuitedGeometryVisitor: Se,
    SineStarFactory: Te
  }),
      Pe = Object.freeze({
    Coordinate: g,
    CoordinateList: I,
    Envelope: N,
    LineSegment: ne,
    GeometryFactory: Wt,
    Geometry: q,
    Point: vt,
    LineString: Rt,
    LinearRing: Dt,
    Polygon: Mt,
    GeometryCollection: ft,
    MultiPoint: At,
    MultiLineString: pt,
    MultiPolygon: Ft,
    Dimension: gt,
    IntersectionMatrix: ie,
    PrecisionModel: Xt,
    Location: se,
    Triangle: oe,
    util: Re
  });

  var ve =
  /*#__PURE__*/
  function () {
    function ve() {
      _classCallCheck(this, ve);

      ve.constructor_.apply(this, arguments);
    }

    _createClass(ve, [{
      key: "getCoordinates",
      value: function getCoordinates() {
        return this._pt;
      }
    }, {
      key: "getCoordinate",
      value: function getCoordinate(t) {
        return this._pt[t];
      }
    }, {
      key: "setMinimum",
      value: function setMinimum() {
        if (1 === arguments.length) {
          var _t311 = arguments[0];
          this.setMinimum(_t311._pt[0], _t311._pt[1]);
        } else if (2 === arguments.length) {
          var _t312 = arguments[0],
              _e223 = arguments[1];
          if (this._isNull) return this.initialize(_t312, _e223), null;

          var _n146 = _t312.distance(_e223);

          _n146 < this._distance && this.initialize(_t312, _e223, _n146);
        }
      }
    }, {
      key: "initialize",
      value: function initialize() {
        if (0 === arguments.length) this._isNull = !0;else if (2 === arguments.length) {
          var _t313 = arguments[0],
              _e224 = arguments[1];
          this._pt[0].setCoordinate(_t313), this._pt[1].setCoordinate(_e224), this._distance = _t313.distance(_e224), this._isNull = !1;
        } else if (3 === arguments.length) {
          var _t314 = arguments[0],
              _e225 = arguments[1],
              _n147 = arguments[2];
          this._pt[0].setCoordinate(_t314), this._pt[1].setCoordinate(_e225), this._distance = _n147, this._isNull = !1;
        }
      }
    }, {
      key: "toString",
      value: function toString() {
        return $t.toLineString(this._pt[0], this._pt[1]);
      }
    }, {
      key: "getDistance",
      value: function getDistance() {
        return this._distance;
      }
    }, {
      key: "setMaximum",
      value: function setMaximum() {
        if (1 === arguments.length) {
          var _t315 = arguments[0];
          this.setMaximum(_t315._pt[0], _t315._pt[1]);
        } else if (2 === arguments.length) {
          var _t316 = arguments[0],
              _e226 = arguments[1];
          if (this._isNull) return this.initialize(_t316, _e226), null;

          var _n148 = _t316.distance(_e226);

          _n148 > this._distance && this.initialize(_t316, _e226, _n148);
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return ve;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return ve;
  }();

  ve.constructor_ = function () {
    this._pt = [new g(), new g()], this._distance = i.NaN, this._isNull = !0;
  };

  var Oe =
  /*#__PURE__*/
  function () {
    function Oe() {
      _classCallCheck(this, Oe);

      Oe.constructor_.apply(this, arguments);
    }

    _createClass(Oe, [{
      key: "getClass",
      value: function getClass() {
        return Oe;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "computeDistance",
      value: function computeDistance() {
        if (arguments[2] instanceof ve && arguments[0] instanceof Rt && arguments[1] instanceof g) {
          var _t317 = arguments[0],
              _e227 = arguments[1],
              _n149 = arguments[2],
              _s99 = new ne(),
              _i51 = _t317.getCoordinates();

          for (var _t318 = 0; _t318 < _i51.length - 1; _t318++) {
            _s99.setCoordinates(_i51[_t318], _i51[_t318 + 1]);

            var _r31 = _s99.closestPoint(_e227);

            _n149.setMinimum(_r31, _e227);
          }
        } else if (arguments[2] instanceof ve && arguments[0] instanceof Mt && arguments[1] instanceof g) {
          var _t319 = arguments[0],
              _e228 = arguments[1],
              _n150 = arguments[2];
          Oe.computeDistance(_t319.getExteriorRing(), _e228, _n150);

          for (var _s100 = 0; _s100 < _t319.getNumInteriorRing(); _s100++) {
            Oe.computeDistance(_t319.getInteriorRingN(_s100), _e228, _n150);
          }
        } else if (arguments[2] instanceof ve && arguments[0] instanceof q && arguments[1] instanceof g) {
          var _t320 = arguments[0],
              _e229 = arguments[1],
              _n151 = arguments[2];
          if (_t320 instanceof Rt) Oe.computeDistance(_t320, _e229, _n151);else if (_t320 instanceof Mt) Oe.computeDistance(_t320, _e229, _n151);else if (_t320 instanceof ft) {
            var _s101 = _t320;

            for (var _t321 = 0; _t321 < _s101.getNumGeometries(); _t321++) {
              var _i52 = _s101.getGeometryN(_t321);

              Oe.computeDistance(_i52, _e229, _n151);
            }
          } else _n151.setMinimum(_t320.getCoordinate(), _e229);
        } else if (arguments[2] instanceof ve && arguments[0] instanceof ne && arguments[1] instanceof g) {
          var _t322 = arguments[0],
              _e230 = arguments[1],
              _n152 = arguments[2],
              _s102 = _t322.closestPoint(_e230);

          _n152.setMinimum(_s102, _e230);
        }
      }
    }]);

    return Oe;
  }();

  Oe.constructor_ = function () {};

  var be =
  /*#__PURE__*/
  function () {
    function be() {
      _classCallCheck(this, be);

      be.constructor_.apply(this, arguments);
    }

    _createClass(be, [{
      key: "getCoordinates",
      value: function getCoordinates() {
        return this._ptDist.getCoordinates();
      }
    }, {
      key: "setDensifyFraction",
      value: function setDensifyFraction(t) {
        if (t > 1 || t <= 0) throw new n("Fraction is not in range (0.0 - 1.0]");
        this._densifyFrac = t;
      }
    }, {
      key: "compute",
      value: function compute(t, e) {
        this.computeOrientedDistance(t, e, this._ptDist), this.computeOrientedDistance(e, t, this._ptDist);
      }
    }, {
      key: "distance",
      value: function distance() {
        return this.compute(this._g0, this._g1), this._ptDist.getDistance();
      }
    }, {
      key: "computeOrientedDistance",
      value: function computeOrientedDistance(t, e, n) {
        var s = new Me(e);

        if (t.apply(s), n.setMaximum(s.getMaxPointDistance()), this._densifyFrac > 0) {
          var _s103 = new Ae(e, this._densifyFrac);

          t.apply(_s103), n.setMaximum(_s103.getMaxPointDistance());
        }
      }
    }, {
      key: "orientedDistance",
      value: function orientedDistance() {
        return this.computeOrientedDistance(this._g0, this._g1, this._ptDist), this._ptDist.getDistance();
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return be;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "distance",
      value: function distance() {
        if (2 === arguments.length) {
          var _t323 = arguments[0],
              _e231 = arguments[1];
          return new be(_t323, _e231).distance();
        }

        if (3 === arguments.length) {
          var _t324 = arguments[0],
              _e232 = arguments[1],
              _n153 = arguments[2],
              _s104 = new be(_t324, _e232);

          return _s104.setDensifyFraction(_n153), _s104.distance();
        }
      }
    }]);

    return be;
  }();

  var Me =
  /*#__PURE__*/
  function () {
    function Me() {
      _classCallCheck(this, Me);

      Me.constructor_.apply(this, arguments);
    }

    _createClass(Me, [{
      key: "filter",
      value: function filter(t) {
        this._minPtDist.initialize(), Oe.computeDistance(this._geom, t, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist);
      }
    }, {
      key: "getMaxPointDistance",
      value: function getMaxPointDistance() {
        return this._maxPtDist;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Me;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [B];
      }
    }]);

    return Me;
  }();

  Me.constructor_ = function () {
    this._maxPtDist = new ve(), this._minPtDist = new ve(), this._euclideanDist = new Oe(), this._geom = null;
    var t = arguments[0];
    this._geom = t;
  };

  var Ae =
  /*#__PURE__*/
  function () {
    function Ae() {
      _classCallCheck(this, Ae);

      Ae.constructor_.apply(this, arguments);
    }

    _createClass(Ae, [{
      key: "filter",
      value: function filter(t, e) {
        if (0 === e) return null;
        var n = t.getCoordinate(e - 1),
            s = t.getCoordinate(e),
            i = (s.x - n.x) / this._numSubSegs,
            r = (s.y - n.y) / this._numSubSegs;

        for (var _t325 = 0; _t325 < this._numSubSegs; _t325++) {
          var _e233 = n.x + _t325 * i,
              _s105 = n.y + _t325 * r,
              _o20 = new g(_e233, _s105);

          this._minPtDist.initialize(), Oe.computeDistance(this._geom, _o20, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist);
        }
      }
    }, {
      key: "isDone",
      value: function isDone() {
        return !1;
      }
    }, {
      key: "isGeometryChanged",
      value: function isGeometryChanged() {
        return !1;
      }
    }, {
      key: "getMaxPointDistance",
      value: function getMaxPointDistance() {
        return this._maxPtDist;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Ae;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [_t];
      }
    }]);

    return Ae;
  }();

  Ae.constructor_ = function () {
    this._maxPtDist = new ve(), this._minPtDist = new ve(), this._geom = null, this._numSubSegs = 0;
    var t = arguments[0],
        e = arguments[1];
    this._geom = t, this._numSubSegs = Math.trunc(Math.round(1 / e));
  }, be.MaxPointDistanceFilter = Me, be.MaxDensifiedByFractionDistanceFilter = Ae, be.constructor_ = function () {
    this._g0 = null, this._g1 = null, this._ptDist = new ve(), this._densifyFrac = 0;
    var t = arguments[0],
        e = arguments[1];
    this._g0 = t, this._g1 = e;
  };
  var De = Object.freeze({
    DiscreteHausdorffDistance: be,
    DistanceToPoint: Oe,
    PointPairDistance: ve
  });

  var Fe =
  /*#__PURE__*/
  function () {
    function Fe() {
      _classCallCheck(this, Fe);

      Fe.constructor_.apply(this, arguments);
    }

    _createClass(Fe, [{
      key: "visitItem",
      value: function visitItem(t) {}
    }, {
      key: "getClass",
      value: function getClass() {
        return Fe;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Fe;
  }();

  Fe.constructor_ = function () {};

  var Ge =
  /*#__PURE__*/
  function () {
    function Ge() {
      _classCallCheck(this, Ge);

      Ge.constructor_.apply(this, arguments);
    }

    _createClass(Ge, [{
      key: "locate",
      value: function locate(t) {}
    }, {
      key: "getClass",
      value: function getClass() {
        return Ge;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Ge;
  }();

  Ge.constructor_ = function () {};

  var qe =
  /*#__PURE__*/
  function () {
    function qe() {
      _classCallCheck(this, qe);

      qe.constructor_.apply(this, arguments);
    }

    _createClass(qe, [{
      key: "getMin",
      value: function getMin() {
        return this._min;
      }
    }, {
      key: "intersects",
      value: function intersects(t, e) {
        return !(this._min > e || this._max < t);
      }
    }, {
      key: "getMax",
      value: function getMax() {
        return this._max;
      }
    }, {
      key: "toString",
      value: function toString() {
        return $t.toLineString(new g(this._min, 0), new g(this._max, 0));
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return qe;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return qe;
  }();

  var Be =
  /*#__PURE__*/
  function () {
    function Be() {
      _classCallCheck(this, Be);

      Be.constructor_.apply(this, arguments);
    }

    _createClass(Be, [{
      key: "compare",
      value: function compare(t, e) {
        var n = t,
            s = e,
            i = (n._min + n._max) / 2,
            r = (s._min + s._max) / 2;
        return i < r ? -1 : i > r ? 1 : 0;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Be;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [l];
      }
    }]);

    return Be;
  }();

  Be.constructor_ = function () {}, qe.NodeComparator = Be, qe.constructor_ = function () {
    this._min = i.POSITIVE_INFINITY, this._max = i.NEGATIVE_INFINITY;
  };

  var Ve =
  /*#__PURE__*/
  function (_qe) {
    _inherits(Ve, _qe);

    function Ve() {
      var _this16;

      _classCallCheck(this, Ve);

      _this16 = _possibleConstructorReturn(this, _getPrototypeOf(Ve).call(this)), Ve.constructor_.apply(_assertThisInitialized(_this16), arguments);
      return _this16;
    }

    _createClass(Ve, [{
      key: "query",
      value: function query(t, e, n) {
        if (!this.intersects(t, e)) return null;
        n.visitItem(this._item);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Ve;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Ve;
  }(qe);

  Ve.constructor_ = function () {
    this._item = null;
    var t = arguments[0],
        e = arguments[1],
        n = arguments[2];
    this._min = t, this._max = e, this._item = n;
  };

  var ze =
  /*#__PURE__*/
  function (_qe2) {
    _inherits(ze, _qe2);

    function ze() {
      var _this17;

      _classCallCheck(this, ze);

      _this17 = _possibleConstructorReturn(this, _getPrototypeOf(ze).call(this)), ze.constructor_.apply(_assertThisInitialized(_this17), arguments);
      return _this17;
    }

    _createClass(ze, [{
      key: "buildExtent",
      value: function buildExtent(t, e) {
        this._min = Math.min(t._min, e._min), this._max = Math.max(t._max, e._max);
      }
    }, {
      key: "query",
      value: function query(t, e, n) {
        if (!this.intersects(t, e)) return null;
        null !== this._node1 && this._node1.query(t, e, n), null !== this._node2 && this._node2.query(t, e, n);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return ze;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return ze;
  }(qe);

  ze.constructor_ = function () {
    this._node1 = null, this._node2 = null;
    var t = arguments[0],
        e = arguments[1];
    this._node1 = t, this._node2 = e, this.buildExtent(this._node1, this._node2);
  };

  var Ye =
  /*#__PURE__*/
  function () {
    function Ye() {
      _classCallCheck(this, Ye);

      Ye.constructor_.apply(this, arguments);
    }

    _createClass(Ye, [{
      key: "buildTree",
      value: function buildTree() {
        Ie.sort(this._leaves, new qe.NodeComparator());
        var t = this._leaves,
            e = null,
            n = new x();

        for (;;) {
          if (this.buildLevel(t, n), 1 === n.size()) return n.get(0);
          e = t, t = n, n = e;
        }
      }
    }, {
      key: "insert",
      value: function insert(t, e, n) {
        if (null !== this._root) throw new IllegalStateException("Index cannot be added to once it has been queried");

        this._leaves.add(new Ve(t, e, n));
      }
    }, {
      key: "query",
      value: function query(t, e, n) {
        this.init(), this._root.query(t, e, n);
      }
    }, {
      key: "buildRoot",
      value: function buildRoot() {
        if (null !== this._root) return null;
        this._root = this.buildTree();
      }
    }, {
      key: "printNode",
      value: function printNode(t) {
        O.out.println($t.toLineString(new g(t._min, this._level), new g(t._max, this._level)));
      }
    }, {
      key: "init",
      value: function init() {
        if (null !== this._root) return null;
        this.buildRoot();
      }
    }, {
      key: "buildLevel",
      value: function buildLevel(t, e) {
        this._level++, e.clear();

        for (var _n154 = 0; _n154 < t.size(); _n154 += 2) {
          var _s106 = t.get(_n154);

          if (null === (_n154 + 1 < t.size() ? t.get(_n154) : null)) e.add(_s106);else {
            var _s107 = new ze(t.get(_n154), t.get(_n154 + 1));

            e.add(_s107);
          }
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Ye;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Ye;
  }();

  Ye.constructor_ = function () {
    this._leaves = new x(), this._root = null, this._level = 0;
  };

  var Ue =
  /*#__PURE__*/
  function () {
    function Ue() {
      _classCallCheck(this, Ue);

      Ue.constructor_.apply(this, arguments);
    }

    _createClass(Ue, [{
      key: "visitItem",
      value: function visitItem(t) {
        this._items.add(t);
      }
    }, {
      key: "getItems",
      value: function getItems() {
        return this._items;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Ue;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [Fe];
      }
    }]);

    return Ue;
  }();

  Ue.constructor_ = function () {
    this._items = new x();
  };

  var ke =
  /*#__PURE__*/
  function () {
    function ke() {
      _classCallCheck(this, ke);

      ke.constructor_.apply(this, arguments);
    }

    _createClass(ke, [{
      key: "countSegment",
      value: function countSegment(t, e) {
        if (t.x < this._p.x && e.x < this._p.x) return null;
        if (this._p.x === e.x && this._p.y === e.y) return this._isPointOnSegment = !0, null;

        if (t.y === this._p.y && e.y === this._p.y) {
          var _n155 = t.x,
              _s108 = e.x;
          return _n155 > _s108 && (_n155 = e.x, _s108 = t.x), this._p.x >= _n155 && this._p.x <= _s108 && (this._isPointOnSegment = !0), null;
        }

        if (t.y > this._p.y && e.y <= this._p.y || e.y > this._p.y && t.y <= this._p.y) {
          var _n156 = v.index(t, e, this._p);

          if (_n156 === v.COLLINEAR) return this._isPointOnSegment = !0, null;
          e.y < t.y && (_n156 = -_n156), _n156 === v.LEFT && this._crossingCount++;
        }
      }
    }, {
      key: "isPointInPolygon",
      value: function isPointInPolygon() {
        return this.getLocation() !== se.EXTERIOR;
      }
    }, {
      key: "getLocation",
      value: function getLocation() {
        return this._isPointOnSegment ? se.BOUNDARY : this._crossingCount % 2 == 1 ? se.INTERIOR : se.EXTERIOR;
      }
    }, {
      key: "isOnSegment",
      value: function isOnSegment() {
        return this._isPointOnSegment;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return ke;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "locatePointInRing",
      value: function locatePointInRing() {
        if (arguments[0] instanceof g && _(arguments[1], D)) {
          var _t326 = arguments[0],
              _e234 = arguments[1],
              _n157 = new ke(_t326),
              _s109 = new g(),
              _i53 = new g();

          for (var _t327 = 1; _t327 < _e234.size(); _t327++) {
            if (_e234.getCoordinate(_t327, _s109), _e234.getCoordinate(_t327 - 1, _i53), _n157.countSegment(_s109, _i53), _n157.isOnSegment()) return _n157.getLocation();
          }

          return _n157.getLocation();
        }

        if (arguments[0] instanceof g && arguments[1] instanceof Array) {
          var _t328 = arguments[0],
              _e235 = arguments[1],
              _n158 = new ke(_t328);

          for (var _t329 = 1; _t329 < _e235.length; _t329++) {
            var _s110 = _e235[_t329],
                _i54 = _e235[_t329 - 1];
            if (_n158.countSegment(_s110, _i54), _n158.isOnSegment()) return _n158.getLocation();
          }

          return _n158.getLocation();
        }
      }
    }]);

    return ke;
  }();

  ke.constructor_ = function () {
    this._p = null, this._crossingCount = 0, this._isPointOnSegment = !1;
    var t = arguments[0];
    this._p = t;
  };

  var Xe =
  /*#__PURE__*/
  function () {
    function Xe() {
      _classCallCheck(this, Xe);

      Xe.constructor_.apply(this, arguments);
    }

    _createClass(Xe, [{
      key: "locate",
      value: function locate(t) {
        var e = new ke(t),
            n = new He(e);
        return this._index.query(t.y, t.y, n), e.getLocation();
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Xe;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [Ge];
      }
    }]);

    return Xe;
  }();

  var He =
  /*#__PURE__*/
  function () {
    function He() {
      _classCallCheck(this, He);

      He.constructor_.apply(this, arguments);
    }

    _createClass(He, [{
      key: "visitItem",
      value: function visitItem(t) {
        var e = t;

        this._counter.countSegment(e.getCoordinate(0), e.getCoordinate(1));
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return He;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [Fe];
      }
    }]);

    return He;
  }();

  He.constructor_ = function () {
    this._counter = null;
    var t = arguments[0];
    this._counter = t;
  };

  var We =
  /*#__PURE__*/
  function () {
    function We() {
      _classCallCheck(this, We);

      We.constructor_.apply(this, arguments);
    }

    _createClass(We, [{
      key: "init",
      value: function init(t) {
        for (var _e236 = Ee.getLines(t).iterator(); _e236.hasNext();) {
          var _t330 = _e236.next().getCoordinates();

          this.addLine(_t330);
        }
      }
    }, {
      key: "addLine",
      value: function addLine(t) {
        for (var _e237 = 1; _e237 < t.length; _e237++) {
          var _n159 = new ne(t[_e237 - 1], t[_e237]),
              _s111 = Math.min(_n159.p0.y, _n159.p1.y),
              _i55 = Math.max(_n159.p0.y, _n159.p1.y);

          this._index.insert(_s111, _i55, _n159);
        }
      }
    }, {
      key: "query",
      value: function query() {
        if (2 === arguments.length) {
          var _t331 = arguments[0],
              _e238 = arguments[1],
              _n160 = new Ue();

          return this._index.query(_t331, _e238, _n160), _n160.getItems();
        }

        if (3 === arguments.length) {
          var _t332 = arguments[0],
              _e239 = arguments[1],
              _n161 = arguments[2];

          this._index.query(_t332, _e239, _n161);
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return We;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return We;
  }();

  We.constructor_ = function () {
    this._index = new Ye();
    var t = arguments[0];
    this.init(t);
  }, Xe.SegmentVisitor = He, Xe.IntervalIndexedGeometry = We, Xe.constructor_ = function () {
    this._index = null;
    var t = arguments[0];
    if (!(_(t, bt) || t instanceof Dt)) throw new n("Argument must be Polygonal or LinearRing");
    this._index = new We(t);
  };

  var je =
  /*#__PURE__*/
  function () {
    function je() {
      _classCallCheck(this, je);

      je.constructor_.apply(this, arguments);
    }

    _createClass(je, [{
      key: "getClass",
      value: function getClass() {
        return je;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "isOnLine",
      value: function isOnLine() {
        if (arguments[0] instanceof g && _(arguments[1], D)) {
          var _t333 = arguments[0],
              _e240 = arguments[1],
              _n162 = new ee(),
              _s112 = new g(),
              _i56 = new g(),
              _r32 = _e240.size();

          for (var _o21 = 1; _o21 < _r32; _o21++) {
            if (_e240.getCoordinate(_o21 - 1, _s112), _e240.getCoordinate(_o21, _i56), _n162.computeIntersection(_t333, _s112, _i56), _n162.hasIntersection()) return !0;
          }

          return !1;
        }

        if (arguments[0] instanceof g && arguments[1] instanceof Array) {
          var _t334 = arguments[0],
              _e241 = arguments[1],
              _n163 = new ee();

          for (var _s113 = 1; _s113 < _e241.length; _s113++) {
            var _i57 = _e241[_s113 - 1],
                _r33 = _e241[_s113];
            if (_n163.computeIntersection(_t334, _i57, _r33), _n163.hasIntersection()) return !0;
          }

          return !1;
        }
      }
    }, {
      key: "locateInRing",
      value: function locateInRing(t, e) {
        return ke.locatePointInRing(t, e);
      }
    }, {
      key: "isInRing",
      value: function isInRing(t, e) {
        return je.locateInRing(t, e) !== se.EXTERIOR;
      }
    }]);

    return je;
  }();

  function Ke() {}

  je.constructor_ = function () {}, Ke.prototype.hasNext = function () {}, Ke.prototype.next = function () {}, Ke.prototype.remove = function () {};

  var Ze =
  /*#__PURE__*/
  function () {
    function Ze() {
      _classCallCheck(this, Ze);

      Ze.constructor_.apply(this, arguments);
    }

    _createClass(Ze, [{
      key: "next",
      value: function next() {
        if (this._atStart) return this._atStart = !1, Ze.isAtomic(this._parent) && this._index++, this._parent;

        if (null !== this._subcollectionIterator) {
          if (this._subcollectionIterator.hasNext()) return this._subcollectionIterator.next();
          this._subcollectionIterator = null;
        }

        if (this._index >= this._max) throw new y();

        var t = this._parent.getGeometryN(this._index++);

        return t instanceof ft ? (this._subcollectionIterator = new Ze(t), this._subcollectionIterator.next()) : t;
      }
    }, {
      key: "remove",
      value: function remove() {
        throw new UnsupportedOperationException(this.getClass().getName());
      }
    }, {
      key: "hasNext",
      value: function hasNext() {
        if (this._atStart) return !0;

        if (null !== this._subcollectionIterator) {
          if (this._subcollectionIterator.hasNext()) return !0;
          this._subcollectionIterator = null;
        }

        return !(this._index >= this._max);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Ze;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [Ke];
      }
    }], [{
      key: "isAtomic",
      value: function isAtomic(t) {
        return !(t instanceof ft);
      }
    }]);

    return Ze;
  }();

  Ze.constructor_ = function () {
    this._parent = null, this._atStart = null, this._max = null, this._index = null, this._subcollectionIterator = null;
    var t = arguments[0];
    this._parent = t, this._atStart = !0, this._index = 0, this._max = t.getNumGeometries();
  };

  var Qe =
  /*#__PURE__*/
  function () {
    function Qe() {
      _classCallCheck(this, Qe);

      Qe.constructor_.apply(this, arguments);
    }

    _createClass(Qe, [{
      key: "locate",
      value: function locate(t) {
        return Qe.locate(t, this._geom);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Qe;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [Ge];
      }
    }], [{
      key: "locatePointInPolygon",
      value: function locatePointInPolygon(t, e) {
        if (e.isEmpty()) return se.EXTERIOR;
        var n = e.getExteriorRing(),
            s = Qe.locatePointInRing(t, n);
        if (s !== se.INTERIOR) return s;

        for (var _n164 = 0; _n164 < e.getNumInteriorRing(); _n164++) {
          var _s114 = e.getInteriorRingN(_n164),
              _i58 = Qe.locatePointInRing(t, _s114);

          if (_i58 === se.BOUNDARY) return se.BOUNDARY;
          if (_i58 === se.INTERIOR) return se.EXTERIOR;
        }

        return se.INTERIOR;
      }
    }, {
      key: "locatePointInRing",
      value: function locatePointInRing(t, e) {
        return e.getEnvelopeInternal().intersects(t) ? je.locateInRing(t, e.getCoordinates()) : se.EXTERIOR;
      }
    }, {
      key: "containsPointInPolygon",
      value: function containsPointInPolygon(t, e) {
        return se.EXTERIOR !== Qe.locatePointInPolygon(t, e);
      }
    }, {
      key: "locateInGeometry",
      value: function locateInGeometry(t, e) {
        if (e instanceof Mt) return Qe.locatePointInPolygon(t, e);

        if (e instanceof ft) {
          var _n165 = new Ze(e);

          for (; _n165.hasNext();) {
            var _s115 = _n165.next();

            if (_s115 !== e) {
              var _e242 = Qe.locateInGeometry(t, _s115);

              if (_e242 !== se.EXTERIOR) return _e242;
            }
          }
        }

        return se.EXTERIOR;
      }
    }, {
      key: "locate",
      value: function locate(t, e) {
        return e.isEmpty() ? se.EXTERIOR : Qe.locateInGeometry(t, e);
      }
    }]);

    return Qe;
  }();

  Qe.constructor_ = function () {
    this._geom = null;
    var t = arguments[0];
    this._geom = t;
  };

  var Je = Object.freeze({
    IndexedPointInAreaLocator: Xe,
    PointOnGeometryLocator: Ge,
    SimplePointInAreaLocator: Qe
  });

  var $e =
  /*#__PURE__*/
  function () {
    function $e() {
      _classCallCheck(this, $e);

      $e.constructor_.apply(this, arguments);
    }

    _createClass($e, [{
      key: "measure",
      value: function measure(t, e) {}
    }, {
      key: "getClass",
      value: function getClass() {
        return $e;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return $e;
  }();

  $e.constructor_ = function () {};

  var tn =
  /*#__PURE__*/
  function () {
    function tn() {
      _classCallCheck(this, tn);

      tn.constructor_.apply(this, arguments);
    }

    _createClass(tn, [{
      key: "measure",
      value: function measure(t, e) {
        return t.intersection(e).getArea() / t.union(e).getArea();
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return tn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [$e];
      }
    }]);

    return tn;
  }();

  tn.constructor_ = function () {};

  var en =
  /*#__PURE__*/
  function () {
    function en() {
      _classCallCheck(this, en);

      en.constructor_.apply(this, arguments);
    }

    _createClass(en, [{
      key: "measure",
      value: function measure(t, e) {
        var n = be.distance(t, e, en.DENSIFY_FRACTION),
            s = new N(t.getEnvelopeInternal());
        return s.expandToInclude(e.getEnvelopeInternal()), 1 - n / en.diagonalSize(s);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return en;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [$e];
      }
    }], [{
      key: "diagonalSize",
      value: function diagonalSize(t) {
        if (t.isNull()) return 0;
        var e = t.getWidth(),
            n = t.getHeight();
        return Math.sqrt(e * e + n * n);
      }
    }]);

    return en;
  }();

  en.constructor_ = function () {}, en.DENSIFY_FRACTION = .25;

  var nn =
  /*#__PURE__*/
  function () {
    function nn() {
      _classCallCheck(this, nn);

      nn.constructor_.apply(this, arguments);
    }

    _createClass(nn, [{
      key: "getClass",
      value: function getClass() {
        return nn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "combine",
      value: function combine(t, e) {
        return Math.min(t, e);
      }
    }]);

    return nn;
  }();

  nn.constructor_ = function () {};

  var sn = Object.freeze({
    AreaSimilarityMeasure: tn,
    HausdorffSimilarityMeasure: en,
    SimilarityMeasure: $e,
    SimilarityMeasureCombiner: nn
  });

  var rn =
  /*#__PURE__*/
  function () {
    function rn() {
      _classCallCheck(this, rn);

      rn.constructor_.apply(this, arguments);
    }

    _createClass(rn, [{
      key: "setAreaBasePoint",
      value: function setAreaBasePoint(t) {
        this._areaBasePt = t;
      }
    }, {
      key: "addPoint",
      value: function addPoint(t) {
        this._ptCount += 1, this._ptCentSum.x += t.x, this._ptCentSum.y += t.y;
      }
    }, {
      key: "addLineSegments",
      value: function addLineSegments(t) {
        var e = 0;

        for (var _n166 = 0; _n166 < t.length - 1; _n166++) {
          var _s116 = t[_n166].distance(t[_n166 + 1]);

          if (0 === _s116) continue;
          e += _s116;

          var _i59 = (t[_n166].x + t[_n166 + 1].x) / 2;

          this._lineCentSum.x += _s116 * _i59;

          var _r34 = (t[_n166].y + t[_n166 + 1].y) / 2;

          this._lineCentSum.y += _s116 * _r34;
        }

        this._totalLength += e, 0 === e && t.length > 0 && this.addPoint(t[0]);
      }
    }, {
      key: "addHole",
      value: function addHole(t) {
        var e = v.isCCW(t);

        for (var _n167 = 0; _n167 < t.length - 1; _n167++) {
          this.addTriangle(this._areaBasePt, t[_n167], t[_n167 + 1], e);
        }

        this.addLineSegments(t);
      }
    }, {
      key: "getCentroid",
      value: function getCentroid() {
        var t = new g();
        if (Math.abs(this._areasum2) > 0) t.x = this._cg3.x / 3 / this._areasum2, t.y = this._cg3.y / 3 / this._areasum2;else if (this._totalLength > 0) t.x = this._lineCentSum.x / this._totalLength, t.y = this._lineCentSum.y / this._totalLength;else {
          if (!(this._ptCount > 0)) return null;
          t.x = this._ptCentSum.x / this._ptCount, t.y = this._ptCentSum.y / this._ptCount;
        }
        return t;
      }
    }, {
      key: "addShell",
      value: function addShell(t) {
        t.length > 0 && this.setAreaBasePoint(t[0]);
        var e = !v.isCCW(t);

        for (var _n168 = 0; _n168 < t.length - 1; _n168++) {
          this.addTriangle(this._areaBasePt, t[_n168], t[_n168 + 1], e);
        }

        this.addLineSegments(t);
      }
    }, {
      key: "addTriangle",
      value: function addTriangle(t, e, n, s) {
        var i = s ? 1 : -1;
        rn.centroid3(t, e, n, this._triangleCent3);
        var r = rn.area2(t, e, n);
        this._cg3.x += i * r * this._triangleCent3.x, this._cg3.y += i * r * this._triangleCent3.y, this._areasum2 += i * r;
      }
    }, {
      key: "add",
      value: function add() {
        if (arguments[0] instanceof Mt) {
          var _t335 = arguments[0];
          this.addShell(_t335.getExteriorRing().getCoordinates());

          for (var _e243 = 0; _e243 < _t335.getNumInteriorRing(); _e243++) {
            this.addHole(_t335.getInteriorRingN(_e243).getCoordinates());
          }
        } else if (arguments[0] instanceof q) {
          var _t336 = arguments[0];
          if (_t336.isEmpty()) return null;
          if (_t336 instanceof vt) this.addPoint(_t336.getCoordinate());else if (_t336 instanceof Rt) this.addLineSegments(_t336.getCoordinates());else if (_t336 instanceof Mt) {
            var _e244 = _t336;
            this.add(_e244);
          } else if (_t336 instanceof ft) {
            var _e245 = _t336;

            for (var _t337 = 0; _t337 < _e245.getNumGeometries(); _t337++) {
              this.add(_e245.getGeometryN(_t337));
            }
          }
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return rn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "area2",
      value: function area2(t, e, n) {
        return (e.x - t.x) * (n.y - t.y) - (n.x - t.x) * (e.y - t.y);
      }
    }, {
      key: "centroid3",
      value: function centroid3(t, e, n, s) {
        return s.x = t.x + e.x + n.x, s.y = t.y + e.y + n.y, null;
      }
    }, {
      key: "getCentroid",
      value: function getCentroid(t) {
        return new rn(t).getCentroid();
      }
    }]);

    return rn;
  }();

  function on(t) {
    this.message = t || "";
  }

  function ln() {
    this.array_ = [];
  }

  rn.constructor_ = function () {
    this._areaBasePt = null, this._triangleCent3 = new g(), this._areasum2 = 0, this._cg3 = new g(), this._lineCentSum = new g(), this._totalLength = 0, this._ptCount = 0, this._ptCentSum = new g();
    var t = arguments[0];
    this._areaBasePt = null, this.add(t);
  }, on.prototype = new Error(), on.prototype.name = "EmptyStackException", ln.prototype = new m(), ln.prototype.add = function (t) {
    return this.array_.push(t), !0;
  }, ln.prototype.get = function (t) {
    if (t < 0 || t >= this.size()) throw new p();
    return this.array_[t];
  }, ln.prototype.push = function (t) {
    return this.array_.push(t), t;
  }, ln.prototype.pop = function (t) {
    if (0 === this.array_.length) throw new on();
    return this.array_.pop();
  }, ln.prototype.peek = function () {
    if (0 === this.array_.length) throw new on();
    return this.array_[this.array_.length - 1];
  }, ln.prototype.empty = function () {
    return 0 === this.array_.length;
  }, ln.prototype.isEmpty = function () {
    return this.empty();
  }, ln.prototype.search = function (t) {
    return this.array_.indexOf(t);
  }, ln.prototype.size = function () {
    return this.array_.length;
  }, ln.prototype.toArray = function () {
    for (var t = [], e = 0, n = this.array_.length; e < n; e++) {
      t.push(this.array_[e]);
    }

    return t;
  };

  var an =
  /*#__PURE__*/
  function () {
    function an() {
      _classCallCheck(this, an);

      an.constructor_.apply(this, arguments);
    }

    _createClass(an, [{
      key: "filter",
      value: function filter(t) {
        this.treeSet.contains(t) || (this.list.add(t), this.treeSet.add(t));
      }
    }, {
      key: "getCoordinates",
      value: function getCoordinates() {
        var t = new Array(this.list.size()).fill(null);
        return this.list.toArray(t);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return an;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [B];
      }
    }], [{
      key: "filterCoordinates",
      value: function filterCoordinates(t) {
        var e = new an();

        for (var _n169 = 0; _n169 < t.length; _n169++) {
          e.filter(t[_n169]);
        }

        return e.getCoordinates();
      }
    }]);

    return an;
  }();

  an.constructor_ = function () {
    this.treeSet = new ct(), this.list = new x();
  };

  var cn =
  /*#__PURE__*/
  function () {
    function cn() {
      _classCallCheck(this, cn);

      cn.constructor_.apply(this, arguments);
    }

    _createClass(cn, [{
      key: "preSort",
      value: function preSort(t) {
        var e = null;

        for (var _n170 = 1; _n170 < t.length; _n170++) {
          (t[_n170].y < t[0].y || t[_n170].y === t[0].y && t[_n170].x < t[0].x) && (e = t[0], t[0] = t[_n170], t[_n170] = e);
        }

        return ut.sort(t, 1, t.length, new hn(t[0])), t;
      }
    }, {
      key: "computeOctRing",
      value: function computeOctRing(t) {
        var e = this.computeOctPts(t),
            n = new I();
        return n.add(e, !1), n.size() < 3 ? null : (n.closeRing(), n.toCoordinateArray());
      }
    }, {
      key: "lineOrPolygon",
      value: function lineOrPolygon(t) {
        if (3 === (t = this.cleanRing(t)).length) return this._geomFactory.createLineString([t[0], t[1]]);

        var e = this._geomFactory.createLinearRing(t);

        return this._geomFactory.createPolygon(e);
      }
    }, {
      key: "cleanRing",
      value: function cleanRing(t) {
        u.equals(t[0], t[t.length - 1]);
        var e = new x();
        var n = null;

        for (var _s117 = 0; _s117 <= t.length - 2; _s117++) {
          var _i60 = t[_s117],
              _r35 = t[_s117 + 1];
          _i60.equals(_r35) || null !== n && this.isBetween(n, _i60, _r35) || (e.add(_i60), n = _i60);
        }

        e.add(t[t.length - 1]);
        var s = new Array(e.size()).fill(null);
        return e.toArray(s);
      }
    }, {
      key: "isBetween",
      value: function isBetween(t, e, n) {
        if (0 !== v.index(t, e, n)) return !1;

        if (t.x !== n.x) {
          if (t.x <= e.x && e.x <= n.x) return !0;
          if (n.x <= e.x && e.x <= t.x) return !0;
        }

        if (t.y !== n.y) {
          if (t.y <= e.y && e.y <= n.y) return !0;
          if (n.y <= e.y && e.y <= t.y) return !0;
        }

        return !1;
      }
    }, {
      key: "reduce",
      value: function reduce(t) {
        var e = this.computeOctRing(t);
        if (null === e) return t;
        var n = new ct();

        for (var _t338 = 0; _t338 < e.length; _t338++) {
          n.add(e[_t338]);
        }

        for (var _s118 = 0; _s118 < t.length; _s118++) {
          je.isInRing(t[_s118], e) || n.add(t[_s118]);
        }

        var s = X.toCoordinateArray(n);
        return s.length < 3 ? this.padArray3(s) : s;
      }
    }, {
      key: "getConvexHull",
      value: function getConvexHull() {
        if (0 === this._inputPts.length) return this._geomFactory.createGeometryCollection();
        if (1 === this._inputPts.length) return this._geomFactory.createPoint(this._inputPts[0]);
        if (2 === this._inputPts.length) return this._geomFactory.createLineString(this._inputPts);
        var t = this._inputPts;
        this._inputPts.length > 50 && (t = this.reduce(this._inputPts));
        var e = this.preSort(t),
            n = this.grahamScan(e),
            s = this.toCoordinateArray(n);
        return this.lineOrPolygon(s);
      }
    }, {
      key: "padArray3",
      value: function padArray3(t) {
        var e = new Array(3).fill(null);

        for (var _n171 = 0; _n171 < e.length; _n171++) {
          _n171 < t.length ? e[_n171] = t[_n171] : e[_n171] = t[0];
        }

        return e;
      }
    }, {
      key: "computeOctPts",
      value: function computeOctPts(t) {
        var e = new Array(8).fill(null);

        for (var _n172 = 0; _n172 < e.length; _n172++) {
          e[_n172] = t[0];
        }

        for (var _n173 = 1; _n173 < t.length; _n173++) {
          t[_n173].x < e[0].x && (e[0] = t[_n173]), t[_n173].x - t[_n173].y < e[1].x - e[1].y && (e[1] = t[_n173]), t[_n173].y > e[2].y && (e[2] = t[_n173]), t[_n173].x + t[_n173].y > e[3].x + e[3].y && (e[3] = t[_n173]), t[_n173].x > e[4].x && (e[4] = t[_n173]), t[_n173].x - t[_n173].y > e[5].x - e[5].y && (e[5] = t[_n173]), t[_n173].y < e[6].y && (e[6] = t[_n173]), t[_n173].x + t[_n173].y < e[7].x + e[7].y && (e[7] = t[_n173]);
        }

        return e;
      }
    }, {
      key: "toCoordinateArray",
      value: function toCoordinateArray(t) {
        var e = new Array(t.size()).fill(null);

        for (var _n174 = 0; _n174 < t.size(); _n174++) {
          var _s119 = t.get(_n174);

          e[_n174] = _s119;
        }

        return e;
      }
    }, {
      key: "grahamScan",
      value: function grahamScan(t) {
        var e = null;
        var n = new ln();
        n.push(t[0]), n.push(t[1]), n.push(t[2]);

        for (var _s120 = 3; _s120 < t.length; _s120++) {
          for (e = n.pop(); !n.empty() && v.index(n.peek(), e, t[_s120]) > 0;) {
            e = n.pop();
          }

          n.push(e), n.push(t[_s120]);
        }

        return n.push(t[0]), n;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return cn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "extractCoordinates",
      value: function extractCoordinates(t) {
        var e = new an();
        return t.apply(e), e.getCoordinates();
      }
    }]);

    return cn;
  }();

  var hn =
  /*#__PURE__*/
  function () {
    function hn() {
      _classCallCheck(this, hn);

      hn.constructor_.apply(this, arguments);
    }

    _createClass(hn, [{
      key: "compare",
      value: function compare(t, e) {
        var n = t,
            s = e;
        return hn.polarCompare(this._origin, n, s);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return hn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [l];
      }
    }], [{
      key: "polarCompare",
      value: function polarCompare(t, e, n) {
        var s = e.x - t.x,
            i = e.y - t.y,
            r = n.x - t.x,
            o = n.y - t.y,
            l = v.index(t, e, n);
        if (l === v.COUNTERCLOCKWISE) return 1;
        if (l === v.CLOCKWISE) return -1;
        var a = s * s + i * i,
            c = r * r + o * o;
        return a < c ? -1 : a > c ? 1 : 0;
      }
    }]);

    return hn;
  }();

  hn.constructor_ = function () {
    this._origin = null;
    var t = arguments[0];
    this._origin = t;
  }, cn.RadialComparator = hn, cn.constructor_ = function () {
    if (this._geomFactory = null, this._inputPts = null, 1 === arguments.length) {
      var _t339 = arguments[0];
      cn.constructor_.call(this, cn.extractCoordinates(_t339), _t339.getFactory());
    } else if (2 === arguments.length) {
      var _t340 = arguments[0],
          _e246 = arguments[1];
      this._inputPts = an.filterCoordinates(_t340), this._geomFactory = _e246;
    }
  };

  var un =
  /*#__PURE__*/
  function () {
    function un() {
      _classCallCheck(this, un);

      un.constructor_.apply(this, arguments);
    }

    _createClass(un, [{
      key: "addPolygon",
      value: function addPolygon(t) {
        if (t.isEmpty()) return null;
        var e = null,
            n = null;
        var s = this.horizontalBisector(t);
        if (0 === s.getLength()) n = 0, e = s.getCoordinate();else {
          var _i61 = s.intersection(t),
              _r36 = this.widestGeometry(_i61);

          n = _r36.getEnvelopeInternal().getWidth(), e = un.centre(_r36.getEnvelopeInternal());
        }
        (null === this._interiorPoint || n > this._maxWidth) && (this._interiorPoint = e, this._maxWidth = n);
      }
    }, {
      key: "getInteriorPoint",
      value: function getInteriorPoint() {
        return this._interiorPoint;
      }
    }, {
      key: "widestGeometry",
      value: function widestGeometry() {
        if (arguments[0] instanceof ft) {
          var _t341 = arguments[0];
          if (_t341.isEmpty()) return _t341;

          var _e247 = _t341.getGeometryN(0);

          for (var _n175 = 1; _n175 < _t341.getNumGeometries(); _n175++) {
            _t341.getGeometryN(_n175).getEnvelopeInternal().getWidth() > _e247.getEnvelopeInternal().getWidth() && (_e247 = _t341.getGeometryN(_n175));
          }

          return _e247;
        }

        if (arguments[0] instanceof q) {
          var _t342 = arguments[0];
          return _t342 instanceof ft ? this.widestGeometry(_t342) : _t342;
        }
      }
    }, {
      key: "horizontalBisector",
      value: function horizontalBisector(t) {
        var e = t.getEnvelopeInternal(),
            n = gn.getBisectorY(t);
        return this._factory.createLineString([new g(e.getMinX(), n), new g(e.getMaxX(), n)]);
      }
    }, {
      key: "add",
      value: function add(t) {
        if (t instanceof Mt) this.addPolygon(t);else if (t instanceof ft) {
          var _e248 = t;

          for (var _t343 = 0; _t343 < _e248.getNumGeometries(); _t343++) {
            this.add(_e248.getGeometryN(_t343));
          }
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return un;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "centre",
      value: function centre(t) {
        return new g(un.avg(t.getMinX(), t.getMaxX()), un.avg(t.getMinY(), t.getMaxY()));
      }
    }, {
      key: "avg",
      value: function avg(t, e) {
        return (t + e) / 2;
      }
    }]);

    return un;
  }();

  var gn =
  /*#__PURE__*/
  function () {
    function gn() {
      _classCallCheck(this, gn);

      gn.constructor_.apply(this, arguments);
    }

    _createClass(gn, [{
      key: "updateInterval",
      value: function updateInterval(t) {
        t <= this._centreY ? t > this._loY && (this._loY = t) : t > this._centreY && t < this._hiY && (this._hiY = t);
      }
    }, {
      key: "getBisectorY",
      value: function getBisectorY() {
        this.process(this._poly.getExteriorRing());

        for (var _t344 = 0; _t344 < this._poly.getNumInteriorRing(); _t344++) {
          this.process(this._poly.getInteriorRingN(_t344));
        }

        return un.avg(this._hiY, this._loY);
      }
    }, {
      key: "process",
      value: function process(t) {
        var e = t.getCoordinateSequence();

        for (var _t345 = 0; _t345 < e.size(); _t345++) {
          var _n176 = e.getY(_t345);

          this.updateInterval(_n176);
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return gn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "getBisectorY",
      value: function getBisectorY(t) {
        return new gn(t).getBisectorY();
      }
    }]);

    return gn;
  }();

  gn.constructor_ = function () {
    this._poly = null, this._centreY = null, this._hiY = i.MAX_VALUE, this._loY = -i.MAX_VALUE;
    var t = arguments[0];
    this._poly = t, this._hiY = t.getEnvelopeInternal().getMaxY(), this._loY = t.getEnvelopeInternal().getMinY(), this._centreY = un.avg(this._loY, this._hiY);
  }, un.SafeBisectorFinder = gn, un.constructor_ = function () {
    this._factory = null, this._interiorPoint = null, this._maxWidth = 0;
    var t = arguments[0];
    this._factory = t.getFactory(), this.add(t);
  };

  var dn =
  /*#__PURE__*/
  function () {
    function dn() {
      _classCallCheck(this, dn);

      dn.constructor_.apply(this, arguments);
    }

    _createClass(dn, [{
      key: "addEndpoints",
      value: function addEndpoints() {
        if (arguments[0] instanceof q) {
          var _t346 = arguments[0];
          if (_t346 instanceof Rt) this.addEndpoints(_t346.getCoordinates());else if (_t346 instanceof ft) {
            var _e249 = _t346;

            for (var _t347 = 0; _t347 < _e249.getNumGeometries(); _t347++) {
              this.addEndpoints(_e249.getGeometryN(_t347));
            }
          }
        } else if (arguments[0] instanceof Array) {
          var _t348 = arguments[0];
          this.add(_t348[0]), this.add(_t348[_t348.length - 1]);
        }
      }
    }, {
      key: "getInteriorPoint",
      value: function getInteriorPoint() {
        return this._interiorPoint;
      }
    }, {
      key: "addInterior",
      value: function addInterior() {
        if (arguments[0] instanceof q) {
          var _t349 = arguments[0];
          if (_t349 instanceof Rt) this.addInterior(_t349.getCoordinates());else if (_t349 instanceof ft) {
            var _e250 = _t349;

            for (var _t350 = 0; _t350 < _e250.getNumGeometries(); _t350++) {
              this.addInterior(_e250.getGeometryN(_t350));
            }
          }
        } else if (arguments[0] instanceof Array) {
          var _t351 = arguments[0];

          for (var _e251 = 1; _e251 < _t351.length - 1; _e251++) {
            this.add(_t351[_e251]);
          }
        }
      }
    }, {
      key: "add",
      value: function add(t) {
        var e = t.distance(this._centroid);
        e < this._minDistance && (this._interiorPoint = new g(t), this._minDistance = e);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return dn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return dn;
  }();

  dn.constructor_ = function () {
    this._centroid = null, this._minDistance = i.MAX_VALUE, this._interiorPoint = null;
    var t = arguments[0];
    this._centroid = t.getCentroid().getCoordinate(), this.addInterior(t), null === this._interiorPoint && this.addEndpoints(t);
  };

  var _n =
  /*#__PURE__*/
  function () {
    function _n() {
      _classCallCheck(this, _n);

      _n.constructor_.apply(this, arguments);
    }

    _createClass(_n, [{
      key: "getInteriorPoint",
      value: function getInteriorPoint() {
        return this._interiorPoint;
      }
    }, {
      key: "add",
      value: function add() {
        if (arguments[0] instanceof q) {
          var _t352 = arguments[0];
          if (_t352 instanceof vt) this.add(_t352.getCoordinate());else if (_t352 instanceof ft) {
            var _e252 = _t352;

            for (var _t353 = 0; _t353 < _e252.getNumGeometries(); _t353++) {
              this.add(_e252.getGeometryN(_t353));
            }
          }
        } else if (arguments[0] instanceof g) {
          var _t354 = arguments[0],
              _e253 = _t354.distance(this._centroid);

          _e253 < this._minDistance && (this._interiorPoint = new g(_t354), this._minDistance = _e253);
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return _n;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return _n;
  }();

  _n.constructor_ = function () {
    this._centroid = null, this._minDistance = i.MAX_VALUE, this._interiorPoint = null;
    var t = arguments[0];
    this._centroid = t.getCentroid().getCoordinate(), this.add(t);
  };

  var fn =
  /*#__PURE__*/
  function () {
    function fn() {
      _classCallCheck(this, fn);

      fn.constructor_.apply(this, arguments);
    }

    _createClass(fn, [{
      key: "locateInPolygonRing",
      value: function locateInPolygonRing(t, e) {
        return e.getEnvelopeInternal().intersects(t) ? je.locateInRing(t, e.getCoordinates()) : se.EXTERIOR;
      }
    }, {
      key: "intersects",
      value: function intersects(t, e) {
        return this.locate(t, e) !== se.EXTERIOR;
      }
    }, {
      key: "updateLocationInfo",
      value: function updateLocationInfo(t) {
        t === se.INTERIOR && (this._isIn = !0), t === se.BOUNDARY && this._numBoundaries++;
      }
    }, {
      key: "computeLocation",
      value: function computeLocation(t, e) {
        if (e instanceof vt && this.updateLocationInfo(this.locateOnPoint(t, e)), e instanceof Rt) this.updateLocationInfo(this.locateOnLineString(t, e));else if (e instanceof Mt) this.updateLocationInfo(this.locateInPolygon(t, e));else if (e instanceof pt) {
          var _n177 = e;

          for (var _e254 = 0; _e254 < _n177.getNumGeometries(); _e254++) {
            var _s121 = _n177.getGeometryN(_e254);

            this.updateLocationInfo(this.locateOnLineString(t, _s121));
          }
        } else if (e instanceof Ft) {
          var _n178 = e;

          for (var _e255 = 0; _e255 < _n178.getNumGeometries(); _e255++) {
            var _s122 = _n178.getGeometryN(_e255);

            this.updateLocationInfo(this.locateInPolygon(t, _s122));
          }
        } else if (e instanceof ft) {
          var _n179 = new Ze(e);

          for (; _n179.hasNext();) {
            var _s123 = _n179.next();

            _s123 !== e && this.computeLocation(t, _s123);
          }
        }
      }
    }, {
      key: "locateOnPoint",
      value: function locateOnPoint(t, e) {
        return e.getCoordinate().equals2D(t) ? se.INTERIOR : se.EXTERIOR;
      }
    }, {
      key: "locateOnLineString",
      value: function locateOnLineString(t, e) {
        if (!e.getEnvelopeInternal().intersects(t)) return se.EXTERIOR;
        var n = e.getCoordinateSequence();
        return e.isClosed() || !t.equals(n.getCoordinate(0)) && !t.equals(n.getCoordinate(n.size() - 1)) ? je.isOnLine(t, n) ? se.INTERIOR : se.EXTERIOR : se.BOUNDARY;
      }
    }, {
      key: "locateInPolygon",
      value: function locateInPolygon(t, e) {
        if (e.isEmpty()) return se.EXTERIOR;
        var n = e.getExteriorRing(),
            s = this.locateInPolygonRing(t, n);
        if (s === se.EXTERIOR) return se.EXTERIOR;
        if (s === se.BOUNDARY) return se.BOUNDARY;

        for (var _n180 = 0; _n180 < e.getNumInteriorRing(); _n180++) {
          var _s124 = e.getInteriorRingN(_n180),
              _i62 = this.locateInPolygonRing(t, _s124);

          if (_i62 === se.INTERIOR) return se.EXTERIOR;
          if (_i62 === se.BOUNDARY) return se.BOUNDARY;
        }

        return se.INTERIOR;
      }
    }, {
      key: "locate",
      value: function locate(t, e) {
        return e.isEmpty() ? se.EXTERIOR : e instanceof Rt ? this.locateOnLineString(t, e) : e instanceof Mt ? this.locateInPolygon(t, e) : (this._isIn = !1, this._numBoundaries = 0, this.computeLocation(t, e), this._boundaryRule.isInBoundary(this._numBoundaries) ? se.BOUNDARY : this._numBoundaries > 0 || this._isIn ? se.INTERIOR : se.EXTERIOR);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return fn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return fn;
  }();

  fn.constructor_ = function () {
    if (this._boundaryRule = V.OGC_SFS_BOUNDARY_RULE, this._isIn = null, this._numBoundaries = null, 0 === arguments.length) ;else if (1 === arguments.length) {
      var _t355 = arguments[0];
      if (null === _t355) throw new n("Rule must be non-null");
      this._boundaryRule = _t355;
    }
  };

  var pn =
  /*#__PURE__*/
  function () {
    function pn() {
      _classCallCheck(this, pn);

      pn.constructor_.apply(this, arguments);
    }

    _createClass(pn, [{
      key: "getRadius",
      value: function getRadius() {
        return this.compute(), this._radius;
      }
    }, {
      key: "getDiameter",
      value: function getDiameter() {
        switch (this.compute(), this._extremalPts.length) {
          case 0:
            return this._input.getFactory().createLineString();

          case 1:
            return this._input.getFactory().createPoint(this._centre);
        }

        var t = this._extremalPts[0],
            e = this._extremalPts[1];
        return this._input.getFactory().createLineString([t, e]);
      }
    }, {
      key: "getExtremalPoints",
      value: function getExtremalPoints() {
        return this.compute(), this._extremalPts;
      }
    }, {
      key: "computeCirclePoints",
      value: function computeCirclePoints() {
        if (this._input.isEmpty()) return this._extremalPts = new Array(0).fill(null), null;

        if (1 === this._input.getNumPoints()) {
          var _t356 = this._input.getCoordinates();

          return this._extremalPts = [new g(_t356[0])], null;
        }

        var t = this._input.convexHull().getCoordinates();

        var e = t;
        if (t[0].equals2D(t[t.length - 1]) && (e = new Array(t.length - 1).fill(null), X.copyDeep(t, 0, e, 0, t.length - 1)), e.length <= 2) return this._extremalPts = X.copyDeep(e), null;
        var n = pn.lowestPoint(e),
            s = pn.pointWitMinAngleWithX(e, n);

        for (var _t357 = 0; _t357 < e.length; _t357++) {
          var _t358 = pn.pointWithMinAngleWithSegment(e, n, s);

          if (re.isObtuse(n, _t358, s)) return this._extremalPts = [new g(n), new g(s)], null;
          if (re.isObtuse(_t358, n, s)) n = _t358;else {
            if (!re.isObtuse(_t358, s, n)) return this._extremalPts = [new g(n), new g(s), new g(_t358)], null;
            s = _t358;
          }
        }

        u.shouldNeverReachHere("Logic failure in Minimum Bounding Circle algorithm!");
      }
    }, {
      key: "compute",
      value: function compute() {
        if (null !== this._extremalPts) return null;
        this.computeCirclePoints(), this.computeCentre(), null !== this._centre && (this._radius = this._centre.distance(this._extremalPts[0]));
      }
    }, {
      key: "getFarthestPoints",
      value: function getFarthestPoints() {
        switch (this.compute(), this._extremalPts.length) {
          case 0:
            return this._input.getFactory().createLineString();

          case 1:
            return this._input.getFactory().createPoint(this._centre);
        }

        var t = this._extremalPts[0],
            e = this._extremalPts[this._extremalPts.length - 1];
        return this._input.getFactory().createLineString([t, e]);
      }
    }, {
      key: "getCircle",
      value: function getCircle() {
        if (this.compute(), null === this._centre) return this._input.getFactory().createPolygon();

        var t = this._input.getFactory().createPoint(this._centre);

        return 0 === this._radius ? t : t.buffer(this._radius);
      }
    }, {
      key: "getCentre",
      value: function getCentre() {
        return this.compute(), this._centre;
      }
    }, {
      key: "computeCentre",
      value: function computeCentre() {
        switch (this._extremalPts.length) {
          case 0:
            this._centre = null;
            break;

          case 1:
            this._centre = this._extremalPts[0];
            break;

          case 2:
            this._centre = new g((this._extremalPts[0].x + this._extremalPts[1].x) / 2, (this._extremalPts[0].y + this._extremalPts[1].y) / 2);
            break;

          case 3:
            this._centre = oe.circumcentre(this._extremalPts[0], this._extremalPts[1], this._extremalPts[2]);
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return pn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "pointWitMinAngleWithX",
      value: function pointWitMinAngleWithX(t, e) {
        var n = i.MAX_VALUE,
            s = null;

        for (var _i63 = 0; _i63 < t.length; _i63++) {
          var _r37 = t[_i63];
          if (_r37 === e) continue;

          var _o22 = _r37.x - e.x;

          var _l18 = _r37.y - e.y;

          _l18 < 0 && (_l18 = -_l18);

          var _a13 = _l18 / Math.sqrt(_o22 * _o22 + _l18 * _l18);

          _a13 < n && (n = _a13, s = _r37);
        }

        return s;
      }
    }, {
      key: "lowestPoint",
      value: function lowestPoint(t) {
        var e = t[0];

        for (var _n181 = 1; _n181 < t.length; _n181++) {
          t[_n181].y < e.y && (e = t[_n181]);
        }

        return e;
      }
    }, {
      key: "pointWithMinAngleWithSegment",
      value: function pointWithMinAngleWithSegment(t, e, n) {
        var s = i.MAX_VALUE,
            r = null;

        for (var _i64 = 0; _i64 < t.length; _i64++) {
          var _o23 = t[_i64];
          if (_o23 === e) continue;
          if (_o23 === n) continue;

          var _l19 = re.angleBetween(e, _o23, n);

          _l19 < s && (s = _l19, r = _o23);
        }

        return r;
      }
    }]);

    return pn;
  }();

  pn.constructor_ = function () {
    this._input = null, this._extremalPts = null, this._centre = null, this._radius = 0;
    var t = arguments[0];
    this._input = t;
  };

  var mn =
  /*#__PURE__*/
  function () {
    function mn() {
      _classCallCheck(this, mn);

      mn.constructor_.apply(this, arguments);
    }

    _createClass(mn, [{
      key: "getWidthCoordinate",
      value: function getWidthCoordinate() {
        return this.computeMinimumDiameter(), this._minWidthPt;
      }
    }, {
      key: "getSupportingSegment",
      value: function getSupportingSegment() {
        return this.computeMinimumDiameter(), this._inputGeom.getFactory().createLineString([this._minBaseSeg.p0, this._minBaseSeg.p1]);
      }
    }, {
      key: "getDiameter",
      value: function getDiameter() {
        if (this.computeMinimumDiameter(), null === this._minWidthPt) return this._inputGeom.getFactory().createLineString();

        var t = this._minBaseSeg.project(this._minWidthPt);

        return this._inputGeom.getFactory().createLineString([t, this._minWidthPt]);
      }
    }, {
      key: "computeWidthConvex",
      value: function computeWidthConvex(t) {
        this._convexHullPts = t instanceof Mt ? t.getExteriorRing().getCoordinates() : t.getCoordinates(), 0 === this._convexHullPts.length ? (this._minWidth = 0, this._minWidthPt = null, this._minBaseSeg = null) : 1 === this._convexHullPts.length ? (this._minWidth = 0, this._minWidthPt = this._convexHullPts[0], this._minBaseSeg.p0 = this._convexHullPts[0], this._minBaseSeg.p1 = this._convexHullPts[0]) : 2 === this._convexHullPts.length || 3 === this._convexHullPts.length ? (this._minWidth = 0, this._minWidthPt = this._convexHullPts[0], this._minBaseSeg.p0 = this._convexHullPts[0], this._minBaseSeg.p1 = this._convexHullPts[1]) : this.computeConvexRingMinDiameter(this._convexHullPts);
      }
    }, {
      key: "computeConvexRingMinDiameter",
      value: function computeConvexRingMinDiameter(t) {
        this._minWidth = i.MAX_VALUE;
        var e = 1;
        var n = new ne();

        for (var _s125 = 0; _s125 < t.length - 1; _s125++) {
          n.p0 = t[_s125], n.p1 = t[_s125 + 1], e = this.findMaxPerpDistance(t, n, e);
        }
      }
    }, {
      key: "computeMinimumDiameter",
      value: function computeMinimumDiameter() {
        if (null !== this._minWidthPt) return null;
        if (this._isConvex) this.computeWidthConvex(this._inputGeom);else {
          var _t359 = new cn(this._inputGeom).getConvexHull();

          this.computeWidthConvex(_t359);
        }
      }
    }, {
      key: "getLength",
      value: function getLength() {
        return this.computeMinimumDiameter(), this._minWidth;
      }
    }, {
      key: "findMaxPerpDistance",
      value: function findMaxPerpDistance(t, e, n) {
        var s = e.distancePerpendicular(t[n]),
            i = s,
            r = n,
            o = r;

        for (; i >= s;) {
          s = i, r = o, o = mn.nextIndex(t, r), i = e.distancePerpendicular(t[o]);
        }

        return s < this._minWidth && (this._minPtIndex = r, this._minWidth = s, this._minWidthPt = t[this._minPtIndex], this._minBaseSeg = new ne(e)), r;
      }
    }, {
      key: "getMinimumRectangle",
      value: function getMinimumRectangle() {
        if (this.computeMinimumDiameter(), 0 === this._minWidth) return this._minBaseSeg.p0.equals2D(this._minBaseSeg.p1) ? this._inputGeom.getFactory().createPoint(this._minBaseSeg.p0) : this._minBaseSeg.toGeometry(this._inputGeom.getFactory());
        var t = this._minBaseSeg.p1.x - this._minBaseSeg.p0.x,
            e = this._minBaseSeg.p1.y - this._minBaseSeg.p0.y;
        var n = i.MAX_VALUE,
            s = -i.MAX_VALUE,
            r = i.MAX_VALUE,
            o = -i.MAX_VALUE;

        for (var _i65 = 0; _i65 < this._convexHullPts.length; _i65++) {
          var _l20 = mn.computeC(t, e, this._convexHullPts[_i65]);

          _l20 > s && (s = _l20), _l20 < n && (n = _l20);

          var _a14 = mn.computeC(-e, t, this._convexHullPts[_i65]);

          _a14 > o && (o = _a14), _a14 < r && (r = _a14);
        }

        var l = mn.computeSegmentForLine(-t, -e, o),
            a = mn.computeSegmentForLine(-t, -e, r),
            c = mn.computeSegmentForLine(-e, t, s),
            h = mn.computeSegmentForLine(-e, t, n),
            u = c.lineIntersection(l),
            g = h.lineIntersection(l),
            d = h.lineIntersection(a),
            _ = c.lineIntersection(a),
            f = this._inputGeom.getFactory().createLinearRing([u, g, d, _, u]);

        return this._inputGeom.getFactory().createPolygon(f);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return mn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "nextIndex",
      value: function nextIndex(t, e) {
        return ++e >= t.length && (e = 0), e;
      }
    }, {
      key: "computeC",
      value: function computeC(t, e, n) {
        return t * n.y - e * n.x;
      }
    }, {
      key: "getMinimumDiameter",
      value: function getMinimumDiameter(t) {
        return new mn(t).getDiameter();
      }
    }, {
      key: "getMinimumRectangle",
      value: function getMinimumRectangle(t) {
        return new mn(t).getMinimumRectangle();
      }
    }, {
      key: "computeSegmentForLine",
      value: function computeSegmentForLine(t, e, n) {
        var s = null,
            i = null;
        return Math.abs(e) > Math.abs(t) ? (s = new g(0, n / e), i = new g(1, n / e - t / e)) : (s = new g(n / t, 0), i = new g(n / t - e / t, 1)), new ne(s, i);
      }
    }]);

    return mn;
  }();

  mn.constructor_ = function () {
    if (this._inputGeom = null, this._isConvex = null, this._convexHullPts = null, this._minBaseSeg = new ne(), this._minWidthPt = null, this._minPtIndex = null, this._minWidth = 0, 1 === arguments.length) {
      var _t360 = arguments[0];
      mn.constructor_.call(this, _t360, !1);
    } else if (2 === arguments.length) {
      var _t361 = arguments[0],
          _e256 = arguments[1];
      this._inputGeom = _t361, this._isConvex = _e256;
    }
  };

  var yn = Object.freeze({
    distance: De,
    locate: Je,
    match: sn,
    Angle: re,
    Area: Ot,
    Centroid: rn,
    ConvexHull: cn,
    Distance: A,
    InteriorPointArea: un,
    InteriorPointLine: dn,
    InteriorPointPoint: _n,
    Length: xt,
    Orientation: v,
    PointLocation: je,
    PointLocator: fn,
    RobustLineIntersector: ee,
    MinimumBoundingCircle: pn,
    MinimumDiameter: mn
  });

  var xn =
  /*#__PURE__*/
  function () {
    function xn() {
      _classCallCheck(this, xn);

      xn.constructor_.apply(this, arguments);
    }

    _createClass(xn, [{
      key: "getResultGeometry",
      value: function getResultGeometry() {
        return new En(this._distanceTolerance).transform(this._inputGeom);
      }
    }, {
      key: "setDistanceTolerance",
      value: function setDistanceTolerance(t) {
        if (t <= 0) throw new n("Tolerance must be positive");
        this._distanceTolerance = t;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return xn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "densifyPoints",
      value: function densifyPoints(t, e, n) {
        var s = new ne(),
            i = new I();

        for (var _r38 = 0; _r38 < t.length - 1; _r38++) {
          s.p0 = t[_r38], s.p1 = t[_r38 + 1], i.add(s.p0, !1);

          var _o24 = s.getLength(),
              _l21 = Math.trunc(_o24 / e) + 1;

          if (_l21 > 1) {
            var _t362 = _o24 / _l21;

            for (var _e257 = 1; _e257 < _l21; _e257++) {
              var _r39 = _e257 * _t362 / _o24,
                  _l22 = s.pointAlong(_r39);

              n.makePrecise(_l22), i.add(_l22, !1);
            }
          }
        }

        return i.add(t[t.length - 1], !1), i.toCoordinateArray();
      }
    }, {
      key: "densify",
      value: function densify(t, e) {
        var n = new xn(t);
        return n.setDistanceTolerance(e), n.getResultGeometry();
      }
    }]);

    return xn;
  }();

  var En =
  /*#__PURE__*/
  function (_ye) {
    _inherits(En, _ye);

    function En() {
      var _this18;

      _classCallCheck(this, En);

      _this18 = _possibleConstructorReturn(this, _getPrototypeOf(En).call(this)), En.constructor_.apply(_assertThisInitialized(_this18), arguments);
      return _this18;
    }

    _createClass(En, [{
      key: "transformMultiPolygon",
      value: function transformMultiPolygon(t, e) {
        var n = _get(_getPrototypeOf(En.prototype), "transformMultiPolygon", this).call(this, t, e);

        return this.createValidArea(n);
      }
    }, {
      key: "transformPolygon",
      value: function transformPolygon(t, e) {
        var n = _get(_getPrototypeOf(En.prototype), "transformPolygon", this).call(this, t, e);

        return e instanceof Ft ? n : this.createValidArea(n);
      }
    }, {
      key: "transformCoordinates",
      value: function transformCoordinates(t, e) {
        var n = t.toCoordinateArray();
        var s = xn.densifyPoints(n, this.distanceTolerance, e.getPrecisionModel());
        return e instanceof Rt && 1 === s.length && (s = new Array(0).fill(null)), this._factory.getCoordinateSequenceFactory().create(s);
      }
    }, {
      key: "createValidArea",
      value: function createValidArea(t) {
        return t.buffer(0);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return En;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return En;
  }(ye);

  En.constructor_ = function () {
    this.distanceTolerance = null;
    var t = arguments[0];
    this.distanceTolerance = t;
  }, xn.DensifyTransformer = En, xn.constructor_ = function () {
    this._inputGeom = null, this._distanceTolerance = null;
    var t = arguments[0];
    this._inputGeom = t;
  };
  var In = Object.freeze({
    Densifier: xn
  });

  var Nn =
  /*#__PURE__*/
  function () {
    function Nn() {
      _classCallCheck(this, Nn);

      Nn.constructor_.apply(this, arguments);
    }

    _createClass(Nn, [{
      key: "getClass",
      value: function getClass() {
        return Nn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "isNorthern",
      value: function isNorthern(t) {
        return t === Nn.NE || t === Nn.NW;
      }
    }, {
      key: "isOpposite",
      value: function isOpposite(t, e) {
        if (t === e) return !1;
        return 2 === (t - e + 4) % 4;
      }
    }, {
      key: "commonHalfPlane",
      value: function commonHalfPlane(t, e) {
        if (t === e) return t;
        if (2 === (t - e + 4) % 4) return -1;
        var n = t < e ? t : e;
        return 0 === n && 3 === (t > e ? t : e) ? 3 : n;
      }
    }, {
      key: "isInHalfPlane",
      value: function isInHalfPlane(t, e) {
        return e === Nn.SE ? t === Nn.SE || t === Nn.SW : t === e || t === e + 1;
      }
    }, {
      key: "quadrant",
      value: function quadrant() {
        if ("number" == typeof arguments[0] && "number" == typeof arguments[1]) {
          var _t363 = arguments[0],
              _e258 = arguments[1];
          if (0 === _t363 && 0 === _e258) throw new n("Cannot compute the quadrant for point ( " + _t363 + ", " + _e258 + " )");
          return _t363 >= 0 ? _e258 >= 0 ? Nn.NE : Nn.SE : _e258 >= 0 ? Nn.NW : Nn.SW;
        }

        if (arguments[0] instanceof g && arguments[1] instanceof g) {
          var _t364 = arguments[0],
              _e259 = arguments[1];
          if (_e259.x === _t364.x && _e259.y === _t364.y) throw new n("Cannot compute the quadrant for two identical points " + _t364);
          return _e259.x >= _t364.x ? _e259.y >= _t364.y ? Nn.NE : Nn.SE : _e259.y >= _t364.y ? Nn.NW : Nn.SW;
        }
      }
    }]);

    return Nn;
  }();

  Nn.constructor_ = function () {}, Nn.NE = 0, Nn.NW = 1, Nn.SW = 2, Nn.SE = 3;

  var Cn =
  /*#__PURE__*/
  function () {
    function Cn() {
      _classCallCheck(this, Cn);

      Cn.constructor_.apply(this, arguments);
    }

    _createClass(Cn, [{
      key: "find",
      value: function find(t) {
        var e = this;

        do {
          if (null === e) return null;
          if (e.dest().equals2D(t)) return e;
          e = e.oNext();
        } while (e !== this);

        return null;
      }
    }, {
      key: "dest",
      value: function dest() {
        return this._sym._orig;
      }
    }, {
      key: "oNext",
      value: function oNext() {
        return this._sym._next;
      }
    }, {
      key: "insert",
      value: function insert(t) {
        if (this.oNext() === this) return this.insertAfter(t), null;
        var e = this.compareTo(t);
        var n = this;

        do {
          var _s126 = n.oNext();

          if (_s126.compareTo(t) !== e || _s126 === this) return n.insertAfter(t), null;
          n = _s126;
        } while (n !== this);

        u.shouldNeverReachHere();
      }
    }, {
      key: "insertAfter",
      value: function insertAfter(t) {
        u.equals(this._orig, t.orig());
        var e = this.oNext();
        this._sym.setNext(t), t.sym().setNext(e);
      }
    }, {
      key: "degree",
      value: function degree() {
        var t = 0,
            e = this;

        do {
          t++, e = e.oNext();
        } while (e !== this);

        return t;
      }
    }, {
      key: "equals",
      value: function equals() {
        if (2 === arguments.length && arguments[1] instanceof g && arguments[0] instanceof g) {
          var _t365 = arguments[0],
              _e260 = arguments[1];
          return this._orig.equals2D(_t365) && this._sym._orig.equals(_e260);
        }
      }
    }, {
      key: "deltaY",
      value: function deltaY() {
        return this._sym._orig.y - this._orig.y;
      }
    }, {
      key: "sym",
      value: function sym() {
        return this._sym;
      }
    }, {
      key: "prev",
      value: function prev() {
        return this._sym.next()._sym;
      }
    }, {
      key: "compareAngularDirection",
      value: function compareAngularDirection(t) {
        var e = this.deltaX(),
            n = this.deltaY(),
            s = t.deltaX(),
            i = t.deltaY();
        if (e === s && n === i) return 0;
        var r = Nn.quadrant(e, n),
            o = Nn.quadrant(s, i);
        return r > o ? 1 : r < o ? -1 : v.index(t._orig, t.dest(), this.dest());
      }
    }, {
      key: "prevNode",
      value: function prevNode() {
        var t = this;

        for (; 2 === t.degree();) {
          if ((t = t.prev()) === this) return null;
        }

        return t;
      }
    }, {
      key: "compareTo",
      value: function compareTo(t) {
        var e = t;
        return this.compareAngularDirection(e);
      }
    }, {
      key: "next",
      value: function next() {
        return this._next;
      }
    }, {
      key: "setSym",
      value: function setSym(t) {
        this._sym = t;
      }
    }, {
      key: "orig",
      value: function orig() {
        return this._orig;
      }
    }, {
      key: "toString",
      value: function toString() {
        return "HE(" + this._orig.x + " " + this._orig.y + ", " + this._sym._orig.x + " " + this._sym._orig.y + ")";
      }
    }, {
      key: "setNext",
      value: function setNext(t) {
        this._next = t;
      }
    }, {
      key: "init",
      value: function init(t) {
        this.setSym(t), t.setSym(this), this.setNext(t), t.setNext(this);
      }
    }, {
      key: "deltaX",
      value: function deltaX() {
        return this._sym._orig.x - this._orig.x;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Cn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "init",
      value: function init(t, e) {
        if (null !== t._sym || null !== e._sym || null !== t._next || null !== e._next) throw new IllegalStateException("Edges are already initialized");
        return t.init(e), t;
      }
    }, {
      key: "create",
      value: function create(t, e) {
        var n = new Cn(t),
            s = new Cn(e);
        return n.init(s), n;
      }
    }]);

    return Cn;
  }();

  Cn.constructor_ = function () {
    this._orig = null, this._sym = null, this._next = null;
    var t = arguments[0];
    this._orig = t;
  };

  var Sn =
  /*#__PURE__*/
  function (_Cn) {
    _inherits(Sn, _Cn);

    function Sn() {
      var _this19;

      _classCallCheck(this, Sn);

      _this19 = _possibleConstructorReturn(this, _getPrototypeOf(Sn).call(this)), Sn.constructor_.apply(_assertThisInitialized(_this19), arguments);
      return _this19;
    }

    _createClass(Sn, [{
      key: "mark",
      value: function mark() {
        this._isMarked = !0;
      }
    }, {
      key: "setMark",
      value: function setMark(t) {
        this._isMarked = t;
      }
    }, {
      key: "isMarked",
      value: function isMarked() {
        return this._isMarked;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Sn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "setMarkBoth",
      value: function setMarkBoth(t, e) {
        t.setMark(e), t.sym().setMark(e);
      }
    }, {
      key: "isMarked",
      value: function isMarked(t) {
        return t.isMarked();
      }
    }, {
      key: "setMark",
      value: function setMark(t, e) {
        t.setMark(e);
      }
    }, {
      key: "markBoth",
      value: function markBoth(t) {
        t.mark(), t.sym().mark();
      }
    }, {
      key: "mark",
      value: function mark(t) {
        t.mark();
      }
    }]);

    return Sn;
  }(Cn);

  Sn.constructor_ = function () {
    this._isMarked = !1;
    var t = arguments[0];
    Cn.constructor_.call(this, t);
  };

  var wn =
  /*#__PURE__*/
  function () {
    function wn() {
      _classCallCheck(this, wn);

      wn.constructor_.apply(this, arguments);
    }

    _createClass(wn, [{
      key: "insert",
      value: function insert(t, e, n) {
        var s = this.create(t, e);
        null !== n ? n.insert(s) : this._vertexMap.put(t, s);

        var i = this._vertexMap.get(e);

        return null !== i ? i.insert(s.sym()) : this._vertexMap.put(e, s.sym()), s;
      }
    }, {
      key: "create",
      value: function create(t, e) {
        var n = this.createEdge(t),
            s = this.createEdge(e);
        return Cn.init(n, s), n;
      }
    }, {
      key: "createEdge",
      value: function createEdge(t) {
        return new Cn(t);
      }
    }, {
      key: "addEdge",
      value: function addEdge(t, e) {
        if (!wn.isValidEdge(t, e)) return null;

        var n = this._vertexMap.get(t);

        var s = null;
        if (null !== n && (s = n.find(e)), null !== s) return s;
        return this.insert(t, e, n);
      }
    }, {
      key: "getVertexEdges",
      value: function getVertexEdges() {
        return this._vertexMap.values();
      }
    }, {
      key: "findEdge",
      value: function findEdge(t, e) {
        var n = this._vertexMap.get(t);

        return null === n ? null : n.find(e);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return wn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "isValidEdge",
      value: function isValidEdge(t, e) {
        return 0 !== e.compareTo(t);
      }
    }]);

    return wn;
  }();

  wn.constructor_ = function () {
    this._vertexMap = new kt();
  };

  var Ln =
  /*#__PURE__*/
  function (_Sn) {
    _inherits(Ln, _Sn);

    function Ln() {
      var _this20;

      _classCallCheck(this, Ln);

      _this20 = _possibleConstructorReturn(this, _getPrototypeOf(Ln).call(this)), Ln.constructor_.apply(_assertThisInitialized(_this20), arguments);
      return _this20;
    }

    _createClass(Ln, [{
      key: "setStart",
      value: function setStart() {
        this._isStart = !0;
      }
    }, {
      key: "isStart",
      value: function isStart() {
        return this._isStart;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Ln;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Ln;
  }(Sn);

  Ln.constructor_ = function () {
    this._isStart = !1;
    var t = arguments[0];
    Sn.constructor_.call(this, t);
  };

  var Tn =
  /*#__PURE__*/
  function (_wn) {
    _inherits(Tn, _wn);

    function Tn() {
      var _this21;

      _classCallCheck(this, Tn);

      _this21 = _possibleConstructorReturn(this, _getPrototypeOf(Tn).call(this)), Tn.constructor_.apply(_assertThisInitialized(_this21), arguments);
      return _this21;
    }

    _createClass(Tn, [{
      key: "createEdge",
      value: function createEdge(t) {
        return new Ln(t);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Tn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Tn;
  }(wn);

  Tn.constructor_ = function () {};

  var Rn =
  /*#__PURE__*/
  function () {
    function Rn() {
      _classCallCheck(this, Rn);

      Rn.constructor_.apply(this, arguments);
    }

    _createClass(Rn, [{
      key: "addLine",
      value: function addLine(t) {
        this._lines.add(this._factory.createLineString(t.toCoordinateArray()));
      }
    }, {
      key: "updateRingStartEdge",
      value: function updateRingStartEdge(t) {
        return t.isStart() || (t = t.sym()).isStart() ? null === this._ringStartEdge ? (this._ringStartEdge = t, null) : void (t.orig().compareTo(this._ringStartEdge.orig()) < 0 && (this._ringStartEdge = t)) : null;
      }
    }, {
      key: "getResult",
      value: function getResult() {
        return null === this._result && this.computeResult(), this._result;
      }
    }, {
      key: "process",
      value: function process(t) {
        var e = t.prevNode();
        null === e && (e = t), this.stackEdges(e), this.buildLines();
      }
    }, {
      key: "buildRing",
      value: function buildRing(t) {
        var e = new I();
        var n = t;

        for (e.add(n.orig().copy(), !1); 2 === n.sym().degree();) {
          var _s127 = n.next();

          if (_s127 === t) break;
          e.add(_s127.orig().copy(), !1), n = _s127;
        }

        e.add(n.dest().copy(), !1), this.addLine(e);
      }
    }, {
      key: "buildLine",
      value: function buildLine(t) {
        var e = new I();
        var n = t;

        for (this._ringStartEdge = null, Sn.markBoth(n), e.add(n.orig().copy(), !1); 2 === n.sym().degree();) {
          this.updateRingStartEdge(n);

          var _s128 = n.next();

          if (_s128 === t) return this.buildRing(this._ringStartEdge), null;
          e.add(_s128.orig().copy(), !1), n = _s128, Sn.markBoth(n);
        }

        e.add(n.dest().clone(), !1), this.stackEdges(n.sym()), this.addLine(e);
      }
    }, {
      key: "stackEdges",
      value: function stackEdges(t) {
        var e = t;

        do {
          Sn.isMarked(e) || this._nodeEdgeStack.add(e), e = e.oNext();
        } while (e !== t);
      }
    }, {
      key: "computeResult",
      value: function computeResult() {
        for (var _t366 = this._graph.getVertexEdges().iterator(); _t366.hasNext();) {
          var _e261 = _t366.next();

          Sn.isMarked(_e261) || this.process(_e261);
        }

        this._result = this._factory.buildGeometry(this._lines);
      }
    }, {
      key: "buildLines",
      value: function buildLines() {
        for (; !this._nodeEdgeStack.empty();) {
          var _t367 = this._nodeEdgeStack.pop();

          Sn.isMarked(_t367) || this.buildLine(_t367);
        }
      }
    }, {
      key: "add",
      value: function add() {
        if (arguments[0] instanceof q) {
          arguments[0].apply(new (
          /*#__PURE__*/
          function () {
            function _class() {
              _classCallCheck(this, _class);
            }

            _createClass(_class, [{
              key: "filter",
              value: function filter(t) {
                t instanceof Rt && this.add(t);
              }
            }, {
              key: "interfaces_",
              get: function get() {
                return [G];
              }
            }]);

            return _class;
          }())());
        } else if (_(arguments[0], f)) {
          for (var _t368 = arguments[0].iterator(); _t368.hasNext();) {
            var _e262 = _t368.next();

            this.add(_e262);
          }
        } else if (arguments[0] instanceof Rt) {
          var _t369 = arguments[0];
          null === this._factory && (this._factory = _t369.getFactory());

          var _e263 = _t369.getCoordinateSequence();

          var _n182 = !1;

          for (var _t370 = 1; _t370 < _e263.size(); _t370++) {
            var _s129 = this._graph.addEdge(_e263.getCoordinate(_t370 - 1), _e263.getCoordinate(_t370));

            null !== _s129 && (_n182 || (_s129.setStart(), _n182 = !0));
          }
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Rn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "dissolve",
      value: function dissolve(t) {
        var e = new Rn();
        return e.add(t), e.getResult();
      }
    }]);

    return Rn;
  }();

  Rn.constructor_ = function () {
    this._result = null, this._factory = null, this._graph = null, this._lines = new x(), this._nodeEdgeStack = new ln(), this._ringStartEdge = null, this._graph = new Tn();
  };

  var Pn = Object.freeze({
    LineDissolver: Rn
  });

  var vn =
  /*#__PURE__*/
  function () {
    function vn() {
      _classCallCheck(this, vn);

      vn.constructor_.apply(this, arguments);
    }

    _createClass(vn, [{
      key: "getClass",
      value: function getClass() {
        return vn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "opposite",
      value: function opposite(t) {
        return t === vn.LEFT ? vn.RIGHT : t === vn.RIGHT ? vn.LEFT : t;
      }
    }]);

    return vn;
  }();

  vn.constructor_ = function () {}, vn.ON = 0, vn.LEFT = 1, vn.RIGHT = 2;

  var On =
  /*#__PURE__*/
  function () {
    function On() {
      _classCallCheck(this, On);

      On.constructor_.apply(this, arguments);
    }

    _createClass(On, [{
      key: "computeIntersections",
      value: function computeIntersections(t, e) {
        this.mce.computeIntersectsForChain(this.chainIndex, t.mce, t.chainIndex, e);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return On;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return On;
  }();

  On.constructor_ = function () {
    this.mce = null, this.chainIndex = null;
    var t = arguments[0],
        e = arguments[1];
    this.mce = t, this.chainIndex = e;
  };

  var bn =
  /*#__PURE__*/
  function () {
    function bn() {
      _classCallCheck(this, bn);

      bn.constructor_.apply(this, arguments);
    }

    _createClass(bn, [{
      key: "isDelete",
      value: function isDelete() {
        return this._eventType === bn.DELETE;
      }
    }, {
      key: "setDeleteEventIndex",
      value: function setDeleteEventIndex(t) {
        this._deleteEventIndex = t;
      }
    }, {
      key: "getObject",
      value: function getObject() {
        return this._obj;
      }
    }, {
      key: "compareTo",
      value: function compareTo(t) {
        var e = t;
        return this._xValue < e._xValue ? -1 : this._xValue > e._xValue ? 1 : this._eventType < e._eventType ? -1 : this._eventType > e._eventType ? 1 : 0;
      }
    }, {
      key: "getInsertEvent",
      value: function getInsertEvent() {
        return this._insertEvent;
      }
    }, {
      key: "isInsert",
      value: function isInsert() {
        return this._eventType === bn.INSERT;
      }
    }, {
      key: "isSameLabel",
      value: function isSameLabel(t) {
        return null !== this._label && this._label === t._label;
      }
    }, {
      key: "getDeleteEventIndex",
      value: function getDeleteEventIndex() {
        return this._deleteEventIndex;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return bn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [r];
      }
    }]);

    return bn;
  }();

  bn.constructor_ = function () {
    if (this._label = null, this._xValue = null, this._eventType = null, this._insertEvent = null, this._deleteEventIndex = null, this._obj = null, 2 === arguments.length) {
      var _t371 = arguments[0],
          _e264 = arguments[1];
      this._eventType = bn.DELETE, this._xValue = _t371, this._insertEvent = _e264;
    } else if (3 === arguments.length) {
      var _t372 = arguments[0],
          _e265 = arguments[1],
          _n183 = arguments[2];
      this._eventType = bn.INSERT, this._label = _t372, this._xValue = _e265, this._obj = _n183;
    }
  }, bn.INSERT = 1, bn.DELETE = 2;

  var Mn =
  /*#__PURE__*/
  function () {
    function Mn() {
      _classCallCheck(this, Mn);

      Mn.constructor_.apply(this, arguments);
    }

    _createClass(Mn, [{
      key: "getClass",
      value: function getClass() {
        return Mn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Mn;
  }();

  Mn.constructor_ = function () {};

  var An =
  /*#__PURE__*/
  function () {
    function An() {
      _classCallCheck(this, An);

      An.constructor_.apply(this, arguments);
    }

    _createClass(An, [{
      key: "isTrivialIntersection",
      value: function isTrivialIntersection(t, e, n, s) {
        if (t === n && 1 === this._li.getIntersectionNum()) {
          if (An.isAdjacentSegments(e, s)) return !0;

          if (t.isClosed()) {
            var _n184 = t.getNumPoints() - 1;

            if (0 === e && s === _n184 || 0 === s && e === _n184) return !0;
          }
        }

        return !1;
      }
    }, {
      key: "getProperIntersectionPoint",
      value: function getProperIntersectionPoint() {
        return this._properIntersectionPoint;
      }
    }, {
      key: "setIsDoneIfProperInt",
      value: function setIsDoneIfProperInt(t) {
        this._isDoneWhenProperInt = t;
      }
    }, {
      key: "hasProperInteriorIntersection",
      value: function hasProperInteriorIntersection() {
        return this._hasProperInterior;
      }
    }, {
      key: "isBoundaryPointInternal",
      value: function isBoundaryPointInternal(t, e) {
        for (var _n185 = e.iterator(); _n185.hasNext();) {
          var _e266 = _n185.next().getCoordinate();

          if (t.isIntersection(_e266)) return !0;
        }

        return !1;
      }
    }, {
      key: "hasProperIntersection",
      value: function hasProperIntersection() {
        return this._hasProper;
      }
    }, {
      key: "hasIntersection",
      value: function hasIntersection() {
        return this._hasIntersection;
      }
    }, {
      key: "isDone",
      value: function isDone() {
        return this._isDone;
      }
    }, {
      key: "isBoundaryPoint",
      value: function isBoundaryPoint(t, e) {
        return null !== e && (!!this.isBoundaryPointInternal(t, e[0]) || !!this.isBoundaryPointInternal(t, e[1]));
      }
    }, {
      key: "setBoundaryNodes",
      value: function setBoundaryNodes(t, e) {
        this._bdyNodes = new Array(2).fill(null), this._bdyNodes[0] = t, this._bdyNodes[1] = e;
      }
    }, {
      key: "addIntersections",
      value: function addIntersections(t, e, n, s) {
        if (t === n && e === s) return null;
        this.numTests++;
        var i = t.getCoordinates()[e],
            r = t.getCoordinates()[e + 1],
            o = n.getCoordinates()[s],
            l = n.getCoordinates()[s + 1];
        this._li.computeIntersection(i, r, o, l), this._li.hasIntersection() && (this._recordIsolated && (t.setIsolated(!1), n.setIsolated(!1)), this._numIntersections++, this.isTrivialIntersection(t, e, n, s) || (this._hasIntersection = !0, !this._includeProper && this._li.isProper() || (t.addIntersections(this._li, e, 0), n.addIntersections(this._li, s, 1)), this._li.isProper() && (this._properIntersectionPoint = this._li.getIntersection(0).copy(), this._hasProper = !0, this._isDoneWhenProperInt && (this._isDone = !0), this.isBoundaryPoint(this._li, this._bdyNodes) || (this._hasProperInterior = !0))));
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return An;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "isAdjacentSegments",
      value: function isAdjacentSegments(t, e) {
        return 1 === Math.abs(t - e);
      }
    }]);

    return An;
  }();

  An.constructor_ = function () {
    this._hasIntersection = !1, this._hasProper = !1, this._hasProperInterior = !1, this._properIntersectionPoint = null, this._li = null, this._includeProper = null, this._recordIsolated = null, this._isSelfIntersection = null, this._numIntersections = 0, this.numTests = 0, this._bdyNodes = null, this._isDone = !1, this._isDoneWhenProperInt = !1;
    var t = arguments[0],
        e = arguments[1],
        n = arguments[2];
    this._li = t, this._includeProper = e, this._recordIsolated = n;
  };

  var Dn =
  /*#__PURE__*/
  function (_Mn) {
    _inherits(Dn, _Mn);

    function Dn() {
      var _this22;

      _classCallCheck(this, Dn);

      _this22 = _possibleConstructorReturn(this, _getPrototypeOf(Dn).call(this)), Dn.constructor_.apply(_assertThisInitialized(_this22), arguments);
      return _this22;
    }

    _createClass(Dn, [{
      key: "prepareEvents",
      value: function prepareEvents() {
        Ie.sort(this.events);

        for (var _t373 = 0; _t373 < this.events.size(); _t373++) {
          var _e267 = this.events.get(_t373);

          _e267.isDelete() && _e267.getInsertEvent().setDeleteEventIndex(_t373);
        }
      }
    }, {
      key: "computeIntersections",
      value: function computeIntersections() {
        if (1 === arguments.length) {
          var _t374 = arguments[0];
          this.nOverlaps = 0, this.prepareEvents();

          for (var _e268 = 0; _e268 < this.events.size(); _e268++) {
            var _n186 = this.events.get(_e268);

            if (_n186.isInsert() && this.processOverlaps(_e268, _n186.getDeleteEventIndex(), _n186, _t374), _t374.isDone()) break;
          }
        } else if (3 === arguments.length) if (arguments[2] instanceof An && _(arguments[0], m) && _(arguments[1], m)) {
          var _t375 = arguments[0],
              _e269 = arguments[1],
              _n187 = arguments[2];
          this.addEdges(_t375, _t375), this.addEdges(_e269, _e269), this.computeIntersections(_n187);
        } else if ("boolean" == typeof arguments[2] && _(arguments[0], m) && arguments[1] instanceof An) {
          var _t376 = arguments[0],
              _e270 = arguments[1];
          arguments[2] ? this.addEdges(_t376, null) : this.addEdges(_t376), this.computeIntersections(_e270);
        }
      }
    }, {
      key: "addEdge",
      value: function addEdge(t, e) {
        var n = t.getMonotoneChainEdge(),
            s = n.getStartIndexes();

        for (var _t377 = 0; _t377 < s.length - 1; _t377++) {
          var _s130 = new On(n, _t377),
              _i66 = new bn(e, n.getMinX(_t377), _s130);

          this.events.add(_i66), this.events.add(new bn(n.getMaxX(_t377), _i66));
        }
      }
    }, {
      key: "processOverlaps",
      value: function processOverlaps(t, e, n, s) {
        var i = n.getObject();

        for (var _r40 = t; _r40 < e; _r40++) {
          var _t378 = this.events.get(_r40);

          if (_t378.isInsert()) {
            var _e271 = _t378.getObject();

            n.isSameLabel(_t378) || (i.computeIntersections(_e271, s), this.nOverlaps++);
          }
        }
      }
    }, {
      key: "addEdges",
      value: function addEdges() {
        if (1 === arguments.length) {
          for (var _t379 = arguments[0].iterator(); _t379.hasNext();) {
            var _e272 = _t379.next();

            this.addEdge(_e272, _e272);
          }
        } else if (2 === arguments.length) {
          var _t380 = arguments[0],
              _e273 = arguments[1];

          for (var _n188 = _t380.iterator(); _n188.hasNext();) {
            var _t381 = _n188.next();

            this.addEdge(_t381, _e273);
          }
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Dn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Dn;
  }(Mn);

  Dn.constructor_ = function () {
    this.events = new x(), this.nOverlaps = null;
  };

  var Fn =
  /*#__PURE__*/
  function () {
    function Fn() {
      _classCallCheck(this, Fn);

      Fn.constructor_.apply(this, arguments);
    }

    _createClass(Fn, [{
      key: "setAllLocations",
      value: function setAllLocations(t) {
        for (var _e274 = 0; _e274 < this.location.length; _e274++) {
          this.location[_e274] = t;
        }
      }
    }, {
      key: "isNull",
      value: function isNull() {
        for (var _t382 = 0; _t382 < this.location.length; _t382++) {
          if (this.location[_t382] !== se.NONE) return !1;
        }

        return !0;
      }
    }, {
      key: "setAllLocationsIfNull",
      value: function setAllLocationsIfNull(t) {
        for (var _e275 = 0; _e275 < this.location.length; _e275++) {
          this.location[_e275] === se.NONE && (this.location[_e275] = t);
        }
      }
    }, {
      key: "isLine",
      value: function isLine() {
        return 1 === this.location.length;
      }
    }, {
      key: "merge",
      value: function merge(t) {
        if (t.location.length > this.location.length) {
          var _t383 = new Array(3).fill(null);

          _t383[vn.ON] = this.location[vn.ON], _t383[vn.LEFT] = se.NONE, _t383[vn.RIGHT] = se.NONE, this.location = _t383;
        }

        for (var _e276 = 0; _e276 < this.location.length; _e276++) {
          this.location[_e276] === se.NONE && _e276 < t.location.length && (this.location[_e276] = t.location[_e276]);
        }
      }
    }, {
      key: "getLocations",
      value: function getLocations() {
        return this.location;
      }
    }, {
      key: "flip",
      value: function flip() {
        if (this.location.length <= 1) return null;
        var t = this.location[vn.LEFT];
        this.location[vn.LEFT] = this.location[vn.RIGHT], this.location[vn.RIGHT] = t;
      }
    }, {
      key: "toString",
      value: function toString() {
        var t = new w();
        return this.location.length > 1 && t.append(se.toLocationSymbol(this.location[vn.LEFT])), t.append(se.toLocationSymbol(this.location[vn.ON])), this.location.length > 1 && t.append(se.toLocationSymbol(this.location[vn.RIGHT])), t.toString();
      }
    }, {
      key: "setLocations",
      value: function setLocations(t, e, n) {
        this.location[vn.ON] = t, this.location[vn.LEFT] = e, this.location[vn.RIGHT] = n;
      }
    }, {
      key: "get",
      value: function get(t) {
        return t < this.location.length ? this.location[t] : se.NONE;
      }
    }, {
      key: "isArea",
      value: function isArea() {
        return this.location.length > 1;
      }
    }, {
      key: "isAnyNull",
      value: function isAnyNull() {
        for (var _t384 = 0; _t384 < this.location.length; _t384++) {
          if (this.location[_t384] === se.NONE) return !0;
        }

        return !1;
      }
    }, {
      key: "setLocation",
      value: function setLocation() {
        if (1 === arguments.length) {
          var _t385 = arguments[0];
          this.setLocation(vn.ON, _t385);
        } else if (2 === arguments.length) {
          var _t386 = arguments[0],
              _e277 = arguments[1];
          this.location[_t386] = _e277;
        }
      }
    }, {
      key: "init",
      value: function init(t) {
        this.location = new Array(t).fill(null), this.setAllLocations(se.NONE);
      }
    }, {
      key: "isEqualOnSide",
      value: function isEqualOnSide(t, e) {
        return this.location[e] === t.location[e];
      }
    }, {
      key: "allPositionsEqual",
      value: function allPositionsEqual(t) {
        for (var _e278 = 0; _e278 < this.location.length; _e278++) {
          if (this.location[_e278] !== t) return !1;
        }

        return !0;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Fn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Fn;
  }();

  Fn.constructor_ = function () {
    if (this.location = null, 1 === arguments.length) {
      if (arguments[0] instanceof Array) {
        var _t387 = arguments[0];
        this.init(_t387.length);
      } else if (Number.isInteger(arguments[0])) {
        var _t388 = arguments[0];
        this.init(1), this.location[vn.ON] = _t388;
      } else if (arguments[0] instanceof Fn) {
        var _t389 = arguments[0];
        if (this.init(_t389.location.length), null !== _t389) for (var _e279 = 0; _e279 < this.location.length; _e279++) {
          this.location[_e279] = _t389.location[_e279];
        }
      }
    } else if (3 === arguments.length) {
      var _t390 = arguments[0],
          _e280 = arguments[1],
          _n189 = arguments[2];
      this.init(3), this.location[vn.ON] = _t390, this.location[vn.LEFT] = _e280, this.location[vn.RIGHT] = _n189;
    }
  };

  var Gn =
  /*#__PURE__*/
  function () {
    function Gn() {
      _classCallCheck(this, Gn);

      Gn.constructor_.apply(this, arguments);
    }

    _createClass(Gn, [{
      key: "getGeometryCount",
      value: function getGeometryCount() {
        var t = 0;
        return this.elt[0].isNull() || t++, this.elt[1].isNull() || t++, t;
      }
    }, {
      key: "setAllLocations",
      value: function setAllLocations(t, e) {
        this.elt[t].setAllLocations(e);
      }
    }, {
      key: "isNull",
      value: function isNull(t) {
        return this.elt[t].isNull();
      }
    }, {
      key: "setAllLocationsIfNull",
      value: function setAllLocationsIfNull() {
        if (1 === arguments.length) {
          var _t391 = arguments[0];
          this.setAllLocationsIfNull(0, _t391), this.setAllLocationsIfNull(1, _t391);
        } else if (2 === arguments.length) {
          var _t392 = arguments[0],
              _e281 = arguments[1];

          this.elt[_t392].setAllLocationsIfNull(_e281);
        }
      }
    }, {
      key: "isLine",
      value: function isLine(t) {
        return this.elt[t].isLine();
      }
    }, {
      key: "merge",
      value: function merge(t) {
        for (var _e282 = 0; _e282 < 2; _e282++) {
          null === this.elt[_e282] && null !== t.elt[_e282] ? this.elt[_e282] = new Fn(t.elt[_e282]) : this.elt[_e282].merge(t.elt[_e282]);
        }
      }
    }, {
      key: "flip",
      value: function flip() {
        this.elt[0].flip(), this.elt[1].flip();
      }
    }, {
      key: "getLocation",
      value: function getLocation() {
        if (1 === arguments.length) {
          var _t393 = arguments[0];
          return this.elt[_t393].get(vn.ON);
        }

        if (2 === arguments.length) {
          var _t394 = arguments[0],
              _e283 = arguments[1];
          return this.elt[_t394].get(_e283);
        }
      }
    }, {
      key: "toString",
      value: function toString() {
        var t = new w();
        return null !== this.elt[0] && (t.append("A:"), t.append(this.elt[0].toString())), null !== this.elt[1] && (t.append(" B:"), t.append(this.elt[1].toString())), t.toString();
      }
    }, {
      key: "isArea",
      value: function isArea() {
        if (0 === arguments.length) return this.elt[0].isArea() || this.elt[1].isArea();

        if (1 === arguments.length) {
          var _t395 = arguments[0];
          return this.elt[_t395].isArea();
        }
      }
    }, {
      key: "isAnyNull",
      value: function isAnyNull(t) {
        return this.elt[t].isAnyNull();
      }
    }, {
      key: "setLocation",
      value: function setLocation() {
        if (2 === arguments.length) {
          var _t396 = arguments[0],
              _e284 = arguments[1];

          this.elt[_t396].setLocation(vn.ON, _e284);
        } else if (3 === arguments.length) {
          var _t397 = arguments[0],
              _e285 = arguments[1],
              _n190 = arguments[2];

          this.elt[_t397].setLocation(_e285, _n190);
        }
      }
    }, {
      key: "isEqualOnSide",
      value: function isEqualOnSide(t, e) {
        return this.elt[0].isEqualOnSide(t.elt[0], e) && this.elt[1].isEqualOnSide(t.elt[1], e);
      }
    }, {
      key: "allPositionsEqual",
      value: function allPositionsEqual(t, e) {
        return this.elt[t].allPositionsEqual(e);
      }
    }, {
      key: "toLine",
      value: function toLine(t) {
        this.elt[t].isArea() && (this.elt[t] = new Fn(this.elt[t].location[0]));
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Gn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "toLineLabel",
      value: function toLineLabel(t) {
        var e = new Gn(se.NONE);

        for (var _n191 = 0; _n191 < 2; _n191++) {
          e.setLocation(_n191, t.getLocation(_n191));
        }

        return e;
      }
    }]);

    return Gn;
  }();

  Gn.constructor_ = function () {
    if (this.elt = new Array(2).fill(null), 1 === arguments.length) {
      if (Number.isInteger(arguments[0])) {
        var _t398 = arguments[0];
        this.elt[0] = new Fn(_t398), this.elt[1] = new Fn(_t398);
      } else if (arguments[0] instanceof Gn) {
        var _t399 = arguments[0];
        this.elt[0] = new Fn(_t399.elt[0]), this.elt[1] = new Fn(_t399.elt[1]);
      }
    } else if (2 === arguments.length) {
      var _t400 = arguments[0],
          _e286 = arguments[1];
      this.elt[0] = new Fn(se.NONE), this.elt[1] = new Fn(se.NONE), this.elt[_t400].setLocation(_e286);
    } else if (3 === arguments.length) {
      var _t401 = arguments[0],
          _e287 = arguments[1],
          _n192 = arguments[2];
      this.elt[0] = new Fn(_t401, _e287, _n192), this.elt[1] = new Fn(_t401, _e287, _n192);
    } else if (4 === arguments.length) {
      var _t402 = arguments[0],
          _e288 = arguments[1],
          _n193 = arguments[2],
          _s131 = arguments[3];
      this.elt[0] = new Fn(se.NONE, se.NONE, se.NONE), this.elt[1] = new Fn(se.NONE, se.NONE, se.NONE), this.elt[_t402].setLocations(_e288, _n193, _s131);
    }
  };

  var qn =
  /*#__PURE__*/
  function () {
    function qn() {
      _classCallCheck(this, qn);

      qn.constructor_.apply(this, arguments);
    }

    _createClass(qn, [{
      key: "getSegmentIndex",
      value: function getSegmentIndex() {
        return this.segmentIndex;
      }
    }, {
      key: "getCoordinate",
      value: function getCoordinate() {
        return this.coord;
      }
    }, {
      key: "print",
      value: function print(t) {
        t.print(this.coord), t.print(" seg # = " + this.segmentIndex), t.println(" dist = " + this.dist);
      }
    }, {
      key: "compareTo",
      value: function compareTo(t) {
        var e = t;
        return this.compare(e.segmentIndex, e.dist);
      }
    }, {
      key: "isEndPoint",
      value: function isEndPoint(t) {
        return 0 === this.segmentIndex && 0 === this.dist || this.segmentIndex === t;
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.coord + " seg # = " + this.segmentIndex + " dist = " + this.dist;
      }
    }, {
      key: "getDistance",
      value: function getDistance() {
        return this.dist;
      }
    }, {
      key: "compare",
      value: function compare(t, e) {
        return this.segmentIndex < t ? -1 : this.segmentIndex > t ? 1 : this.dist < e ? -1 : this.dist > e ? 1 : 0;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return qn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [r];
      }
    }]);

    return qn;
  }();

  qn.constructor_ = function () {
    this.coord = null, this.segmentIndex = null, this.dist = null;
    var t = arguments[0],
        e = arguments[1],
        n = arguments[2];
    this.coord = new g(t), this.segmentIndex = e, this.dist = n;
  };

  var Bn =
  /*#__PURE__*/
  function () {
    function Bn() {
      _classCallCheck(this, Bn);

      Bn.constructor_.apply(this, arguments);
    }

    _createClass(Bn, [{
      key: "print",
      value: function print(t) {
        t.println("Intersections:");

        for (var _e289 = this.iterator(); _e289.hasNext();) {
          _e289.next().print(t);
        }
      }
    }, {
      key: "iterator",
      value: function iterator() {
        return this._nodeMap.values().iterator();
      }
    }, {
      key: "addSplitEdges",
      value: function addSplitEdges(t) {
        this.addEndpoints();
        var e = this.iterator();
        var n = e.next();

        for (; e.hasNext();) {
          var _s132 = e.next(),
              _i67 = this.createSplitEdge(n, _s132);

          t.add(_i67), n = _s132;
        }
      }
    }, {
      key: "addEndpoints",
      value: function addEndpoints() {
        var t = this.edge.pts.length - 1;
        this.add(this.edge.pts[0], 0, 0), this.add(this.edge.pts[t], t, 0);
      }
    }, {
      key: "createSplitEdge",
      value: function createSplitEdge(t, e) {
        var n = e.segmentIndex - t.segmentIndex + 2;
        var s = this.edge.pts[e.segmentIndex],
            i = e.dist > 0 || !e.coord.equals2D(s);
        i || n--;
        var r = new Array(n).fill(null);
        var o = 0;
        r[o++] = new g(t.coord);

        for (var _n194 = t.segmentIndex + 1; _n194 <= e.segmentIndex; _n194++) {
          r[o++] = this.edge.pts[_n194];
        }

        return i && (r[o] = e.coord), new kn(r, new Gn(this.edge._label));
      }
    }, {
      key: "add",
      value: function add(t, e, n) {
        var s = new qn(t, e, n),
            i = this._nodeMap.get(s);

        return null !== i ? i : (this._nodeMap.put(s, s), s);
      }
    }, {
      key: "isIntersection",
      value: function isIntersection(t) {
        for (var _e290 = this.iterator(); _e290.hasNext();) {
          if (_e290.next().coord.equals(t)) return !0;
        }

        return !1;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Bn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Bn;
  }();

  Bn.constructor_ = function () {
    this._nodeMap = new ot(), this.edge = null;
    var t = arguments[0];
    this.edge = t;
  };

  var Vn =
  /*#__PURE__*/
  function () {
    function Vn() {
      _classCallCheck(this, Vn);

      Vn.constructor_.apply(this, arguments);
    }

    _createClass(Vn, [{
      key: "getChainStartIndices",
      value: function getChainStartIndices(t) {
        var e = 0;
        var n = new x();
        n.add(new L(e));

        do {
          var _s133 = this.findChainEnd(t, e);

          n.add(new L(_s133)), e = _s133;
        } while (e < t.length - 1);

        return Vn.toIntArray(n);
      }
    }, {
      key: "findChainEnd",
      value: function findChainEnd(t, e) {
        var n = Nn.quadrant(t[e], t[e + 1]);
        var s = e + 1;

        for (; s < t.length;) {
          if (Nn.quadrant(t[s - 1], t[s]) !== n) break;
          s++;
        }

        return s - 1;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Vn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "toIntArray",
      value: function toIntArray(t) {
        var e = new Array(t.size()).fill(null);

        for (var _n195 = 0; _n195 < e.length; _n195++) {
          e[_n195] = t.get(_n195).intValue();
        }

        return e;
      }
    }]);

    return Vn;
  }();

  Vn.constructor_ = function () {};

  var zn =
  /*#__PURE__*/
  function () {
    function zn() {
      _classCallCheck(this, zn);

      zn.constructor_.apply(this, arguments);
    }

    _createClass(zn, [{
      key: "getCoordinates",
      value: function getCoordinates() {
        return this.pts;
      }
    }, {
      key: "getMaxX",
      value: function getMaxX(t) {
        var e = this.pts[this.startIndex[t]].x,
            n = this.pts[this.startIndex[t + 1]].x;
        return e > n ? e : n;
      }
    }, {
      key: "getMinX",
      value: function getMinX(t) {
        var e = this.pts[this.startIndex[t]].x,
            n = this.pts[this.startIndex[t + 1]].x;
        return e < n ? e : n;
      }
    }, {
      key: "computeIntersectsForChain",
      value: function computeIntersectsForChain() {
        if (4 === arguments.length) {
          var _t403 = arguments[0],
              _e291 = arguments[1],
              _n196 = arguments[2],
              _s134 = arguments[3];
          this.computeIntersectsForChain(this.startIndex[_t403], this.startIndex[_t403 + 1], _e291, _e291.startIndex[_n196], _e291.startIndex[_n196 + 1], _s134);
        } else if (6 === arguments.length) {
          var _t404 = arguments[0],
              _e292 = arguments[1],
              _n197 = arguments[2],
              _s135 = arguments[3],
              _i68 = arguments[4],
              _r41 = arguments[5];
          if (_e292 - _t404 == 1 && _i68 - _s135 == 1) return _r41.addIntersections(this.e, _t404, _n197.e, _s135), null;
          if (!this.overlaps(_t404, _e292, _n197, _s135, _i68)) return null;

          var _o25 = Math.trunc((_t404 + _e292) / 2),
              _l23 = Math.trunc((_s135 + _i68) / 2);

          _t404 < _o25 && (_s135 < _l23 && this.computeIntersectsForChain(_t404, _o25, _n197, _s135, _l23, _r41), _l23 < _i68 && this.computeIntersectsForChain(_t404, _o25, _n197, _l23, _i68, _r41)), _o25 < _e292 && (_s135 < _l23 && this.computeIntersectsForChain(_o25, _e292, _n197, _s135, _l23, _r41), _l23 < _i68 && this.computeIntersectsForChain(_o25, _e292, _n197, _l23, _i68, _r41));
        }
      }
    }, {
      key: "overlaps",
      value: function overlaps(t, e, n, s, i) {
        return N.intersects(this.pts[t], this.pts[e], n.pts[s], n.pts[i]);
      }
    }, {
      key: "getStartIndexes",
      value: function getStartIndexes() {
        return this.startIndex;
      }
    }, {
      key: "computeIntersects",
      value: function computeIntersects(t, e) {
        for (var _n198 = 0; _n198 < this.startIndex.length - 1; _n198++) {
          for (var _s136 = 0; _s136 < t.startIndex.length - 1; _s136++) {
            this.computeIntersectsForChain(_n198, t, _s136, e);
          }
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return zn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return zn;
  }();

  zn.constructor_ = function () {
    this.e = null, this.pts = null, this.startIndex = null;
    var t = arguments[0];
    this.e = t, this.pts = t.getCoordinates();
    var e = new Vn();
    this.startIndex = e.getChainStartIndices(this.pts);
  };

  var Yn =
  /*#__PURE__*/
  function () {
    function Yn() {
      _classCallCheck(this, Yn);

      Yn.constructor_.apply(this, arguments);
    }

    _createClass(Yn, [{
      key: "getDepth",
      value: function getDepth(t, e) {
        return this._depth[t][e];
      }
    }, {
      key: "setDepth",
      value: function setDepth(t, e, n) {
        this._depth[t][e] = n;
      }
    }, {
      key: "isNull",
      value: function isNull() {
        if (0 === arguments.length) {
          for (var _t405 = 0; _t405 < 2; _t405++) {
            for (var _e293 = 0; _e293 < 3; _e293++) {
              if (this._depth[_t405][_e293] !== Yn.NULL_VALUE) return !1;
            }
          }

          return !0;
        }

        if (1 === arguments.length) {
          var _t406 = arguments[0];
          return this._depth[_t406][1] === Yn.NULL_VALUE;
        }

        if (2 === arguments.length) {
          var _t407 = arguments[0],
              _e294 = arguments[1];
          return this._depth[_t407][_e294] === Yn.NULL_VALUE;
        }
      }
    }, {
      key: "normalize",
      value: function normalize() {
        for (var _t408 = 0; _t408 < 2; _t408++) {
          if (!this.isNull(_t408)) {
            var _e295 = this._depth[_t408][1];
            this._depth[_t408][2] < _e295 && (_e295 = this._depth[_t408][2]), _e295 < 0 && (_e295 = 0);

            for (var _n199 = 1; _n199 < 3; _n199++) {
              var _s137 = 0;
              this._depth[_t408][_n199] > _e295 && (_s137 = 1), this._depth[_t408][_n199] = _s137;
            }
          }
        }
      }
    }, {
      key: "getDelta",
      value: function getDelta(t) {
        return this._depth[t][vn.RIGHT] - this._depth[t][vn.LEFT];
      }
    }, {
      key: "getLocation",
      value: function getLocation(t, e) {
        return this._depth[t][e] <= 0 ? se.EXTERIOR : se.INTERIOR;
      }
    }, {
      key: "toString",
      value: function toString() {
        return "A: " + this._depth[0][1] + "," + this._depth[0][2] + " B: " + this._depth[1][1] + "," + this._depth[1][2];
      }
    }, {
      key: "add",
      value: function add() {
        if (1 === arguments.length) {
          var _t409 = arguments[0];

          for (var _e296 = 0; _e296 < 2; _e296++) {
            for (var _n200 = 1; _n200 < 3; _n200++) {
              var _s138 = _t409.getLocation(_e296, _n200);

              _s138 !== se.EXTERIOR && _s138 !== se.INTERIOR || (this.isNull(_e296, _n200) ? this._depth[_e296][_n200] = Yn.depthAtLocation(_s138) : this._depth[_e296][_n200] += Yn.depthAtLocation(_s138));
            }
          }
        } else if (3 === arguments.length) {
          var _t410 = arguments[0],
              _e297 = arguments[1];
          arguments[2] === se.INTERIOR && this._depth[_t410][_e297]++;
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Yn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "depthAtLocation",
      value: function depthAtLocation(t) {
        return t === se.EXTERIOR ? 0 : t === se.INTERIOR ? 1 : Yn.NULL_VALUE;
      }
    }]);

    return Yn;
  }();

  Yn.constructor_ = function () {
    this._depth = Array(2).fill().map(function () {
      return Array(3);
    });

    for (var _t411 = 0; _t411 < 2; _t411++) {
      for (var _e298 = 0; _e298 < 3; _e298++) {
        this._depth[_t411][_e298] = Yn.NULL_VALUE;
      }
    }
  }, Yn.NULL_VALUE = -1;

  var Un =
  /*#__PURE__*/
  function () {
    function Un() {
      _classCallCheck(this, Un);

      Un.constructor_.apply(this, arguments);
    }

    _createClass(Un, [{
      key: "setVisited",
      value: function setVisited(t) {
        this._isVisited = t;
      }
    }, {
      key: "setInResult",
      value: function setInResult(t) {
        this._isInResult = t;
      }
    }, {
      key: "isCovered",
      value: function isCovered() {
        return this._isCovered;
      }
    }, {
      key: "isCoveredSet",
      value: function isCoveredSet() {
        return this._isCoveredSet;
      }
    }, {
      key: "setLabel",
      value: function setLabel(t) {
        this._label = t;
      }
    }, {
      key: "getLabel",
      value: function getLabel() {
        return this._label;
      }
    }, {
      key: "setCovered",
      value: function setCovered(t) {
        this._isCovered = t, this._isCoveredSet = !0;
      }
    }, {
      key: "updateIM",
      value: function updateIM(t) {
        u.isTrue(this._label.getGeometryCount() >= 2, "found partial label"), this.computeIM(t);
      }
    }, {
      key: "isInResult",
      value: function isInResult() {
        return this._isInResult;
      }
    }, {
      key: "isVisited",
      value: function isVisited() {
        return this._isVisited;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Un;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Un;
  }();

  Un.constructor_ = function () {
    if (this._label = null, this._isInResult = !1, this._isCovered = !1, this._isCoveredSet = !1, this._isVisited = !1, 0 === arguments.length) ;else if (1 === arguments.length) {
      var _t412 = arguments[0];
      this._label = _t412;
    }
  };

  var kn =
  /*#__PURE__*/
  function (_Un) {
    _inherits(kn, _Un);

    function kn() {
      var _this23;

      _classCallCheck(this, kn);

      _this23 = _possibleConstructorReturn(this, _getPrototypeOf(kn).call(this)), kn.constructor_.apply(_assertThisInitialized(_this23), arguments);
      return _this23;
    }

    _createClass(kn, [{
      key: "getDepth",
      value: function getDepth() {
        return this._depth;
      }
    }, {
      key: "getCollapsedEdge",
      value: function getCollapsedEdge() {
        var t = new Array(2).fill(null);
        return t[0] = this.pts[0], t[1] = this.pts[1], new kn(t, Gn.toLineLabel(this._label));
      }
    }, {
      key: "isIsolated",
      value: function isIsolated() {
        return this._isIsolated;
      }
    }, {
      key: "getCoordinates",
      value: function getCoordinates() {
        return this.pts;
      }
    }, {
      key: "setIsolated",
      value: function setIsolated(t) {
        this._isIsolated = t;
      }
    }, {
      key: "setName",
      value: function setName(t) {
        this._name = t;
      }
    }, {
      key: "equals",
      value: function equals(t) {
        if (!(t instanceof kn)) return !1;
        var e = t;
        if (this.pts.length !== e.pts.length) return !1;
        var n = !0,
            s = !0,
            i = this.pts.length;

        for (var _t413 = 0; _t413 < this.pts.length; _t413++) {
          if (this.pts[_t413].equals2D(e.pts[_t413]) || (n = !1), this.pts[_t413].equals2D(e.pts[--i]) || (s = !1), !n && !s) return !1;
        }

        return !0;
      }
    }, {
      key: "getCoordinate",
      value: function getCoordinate() {
        if (0 === arguments.length) return this.pts.length > 0 ? this.pts[0] : null;

        if (1 === arguments.length) {
          var _t414 = arguments[0];
          return this.pts[_t414];
        }
      }
    }, {
      key: "print",
      value: function print(t) {
        t.print("edge " + this._name + ": "), t.print("LINESTRING (");

        for (var _e299 = 0; _e299 < this.pts.length; _e299++) {
          _e299 > 0 && t.print(","), t.print(this.pts[_e299].x + " " + this.pts[_e299].y);
        }

        t.print(")  " + this._label + " " + this._depthDelta);
      }
    }, {
      key: "computeIM",
      value: function computeIM(t) {
        kn.updateIM(this._label, t);
      }
    }, {
      key: "isCollapsed",
      value: function isCollapsed() {
        return !!this._label.isArea() && 3 === this.pts.length && !!this.pts[0].equals(this.pts[2]);
      }
    }, {
      key: "isClosed",
      value: function isClosed() {
        return this.pts[0].equals(this.pts[this.pts.length - 1]);
      }
    }, {
      key: "getMaximumSegmentIndex",
      value: function getMaximumSegmentIndex() {
        return this.pts.length - 1;
      }
    }, {
      key: "getDepthDelta",
      value: function getDepthDelta() {
        return this._depthDelta;
      }
    }, {
      key: "getNumPoints",
      value: function getNumPoints() {
        return this.pts.length;
      }
    }, {
      key: "printReverse",
      value: function printReverse(t) {
        t.print("edge " + this._name + ": ");

        for (var _e300 = this.pts.length - 1; _e300 >= 0; _e300--) {
          t.print(this.pts[_e300] + " ");
        }

        t.println("");
      }
    }, {
      key: "getMonotoneChainEdge",
      value: function getMonotoneChainEdge() {
        return null === this._mce && (this._mce = new zn(this)), this._mce;
      }
    }, {
      key: "getEnvelope",
      value: function getEnvelope() {
        if (null === this._env) {
          this._env = new N();

          for (var _t415 = 0; _t415 < this.pts.length; _t415++) {
            this._env.expandToInclude(this.pts[_t415]);
          }
        }

        return this._env;
      }
    }, {
      key: "addIntersection",
      value: function addIntersection(t, e, n, s) {
        var i = new g(t.getIntersection(s));
        var r = e,
            o = t.getEdgeDistance(n, s);
        var l = r + 1;

        if (l < this.pts.length) {
          var _t416 = this.pts[l];
          i.equals2D(_t416) && (r = l, o = 0);
        }

        this.eiList.add(i, r, o);
      }
    }, {
      key: "toString",
      value: function toString() {
        var t = new Lt();
        t.append("edge " + this._name + ": "), t.append("LINESTRING (");

        for (var _e301 = 0; _e301 < this.pts.length; _e301++) {
          _e301 > 0 && t.append(","), t.append(this.pts[_e301].x + " " + this.pts[_e301].y);
        }

        return t.append(")  " + this._label + " " + this._depthDelta), t.toString();
      }
    }, {
      key: "isPointwiseEqual",
      value: function isPointwiseEqual(t) {
        if (this.pts.length !== t.pts.length) return !1;

        for (var _e302 = 0; _e302 < this.pts.length; _e302++) {
          if (!this.pts[_e302].equals2D(t.pts[_e302])) return !1;
        }

        return !0;
      }
    }, {
      key: "setDepthDelta",
      value: function setDepthDelta(t) {
        this._depthDelta = t;
      }
    }, {
      key: "getEdgeIntersectionList",
      value: function getEdgeIntersectionList() {
        return this.eiList;
      }
    }, {
      key: "addIntersections",
      value: function addIntersections(t, e, n) {
        for (var _s139 = 0; _s139 < t.getIntersectionNum(); _s139++) {
          this.addIntersection(t, e, n, _s139);
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return kn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "updateIM",
      value: function updateIM() {
        if (!(2 === arguments.length && arguments[1] instanceof ie && arguments[0] instanceof Gn)) return _get(_getPrototypeOf(kn), "updateIM", this).apply(this, arguments);
        {
          var _t417 = arguments[0],
              _e303 = arguments[1];
          _e303.setAtLeastIfValid(_t417.getLocation(0, vn.ON), _t417.getLocation(1, vn.ON), 1), _t417.isArea() && (_e303.setAtLeastIfValid(_t417.getLocation(0, vn.LEFT), _t417.getLocation(1, vn.LEFT), 2), _e303.setAtLeastIfValid(_t417.getLocation(0, vn.RIGHT), _t417.getLocation(1, vn.RIGHT), 2));
        }
      }
    }]);

    return kn;
  }(Un);

  kn.constructor_ = function () {
    if (this.pts = null, this._env = null, this.eiList = new Bn(this), this._name = null, this._mce = null, this._isIsolated = !0, this._depth = new Yn(), this._depthDelta = 0, 1 === arguments.length) {
      var _t418 = arguments[0];
      kn.constructor_.call(this, _t418, null);
    } else if (2 === arguments.length) {
      var _t419 = arguments[0],
          _e304 = arguments[1];
      this.pts = _t419, this._label = _e304;
    }
  };

  var Xn =
  /*#__PURE__*/
  function (_Un2) {
    _inherits(Xn, _Un2);

    function Xn() {
      var _this24;

      _classCallCheck(this, Xn);

      _this24 = _possibleConstructorReturn(this, _getPrototypeOf(Xn).call(this)), Xn.constructor_.apply(_assertThisInitialized(_this24), arguments);
      return _this24;
    }

    _createClass(Xn, [{
      key: "isIncidentEdgeInResult",
      value: function isIncidentEdgeInResult() {
        for (var _t420 = this.getEdges().getEdges().iterator(); _t420.hasNext();) {
          if (_t420.next().getEdge().isInResult()) return !0;
        }

        return !1;
      }
    }, {
      key: "isIsolated",
      value: function isIsolated() {
        return 1 === this._label.getGeometryCount();
      }
    }, {
      key: "getCoordinate",
      value: function getCoordinate() {
        return this._coord;
      }
    }, {
      key: "print",
      value: function print(t) {
        t.println("node " + this._coord + " lbl: " + this._label);
      }
    }, {
      key: "computeIM",
      value: function computeIM(t) {}
    }, {
      key: "computeMergedLocation",
      value: function computeMergedLocation(t, e) {
        var n = se.NONE;

        if (n = this._label.getLocation(e), !t.isNull(e)) {
          var _s140 = t.getLocation(e);

          n !== se.BOUNDARY && (n = _s140);
        }

        return n;
      }
    }, {
      key: "setLabel",
      value: function setLabel() {
        if (2 !== arguments.length || !Number.isInteger(arguments[1]) || !Number.isInteger(arguments[0])) return _get(_getPrototypeOf(Xn.prototype), "setLabel", this).apply(this, arguments);
        {
          var _t421 = arguments[0],
              _e305 = arguments[1];
          null === this._label ? this._label = new Gn(_t421, _e305) : this._label.setLocation(_t421, _e305);
        }
      }
    }, {
      key: "getEdges",
      value: function getEdges() {
        return this._edges;
      }
    }, {
      key: "mergeLabel",
      value: function mergeLabel() {
        if (arguments[0] instanceof Xn) {
          var _t422 = arguments[0];
          this.mergeLabel(_t422._label);
        } else if (arguments[0] instanceof Gn) {
          var _t423 = arguments[0];

          for (var _e306 = 0; _e306 < 2; _e306++) {
            var _n201 = this.computeMergedLocation(_t423, _e306);

            this._label.getLocation(_e306) === se.NONE && this._label.setLocation(_e306, _n201);
          }
        }
      }
    }, {
      key: "add",
      value: function add(t) {
        this._edges.insert(t), t.setNode(this);
      }
    }, {
      key: "setLabelBoundary",
      value: function setLabelBoundary(t) {
        if (null === this._label) return null;
        var e = se.NONE;
        null !== this._label && (e = this._label.getLocation(t));
        var n = null;

        switch (e) {
          case se.BOUNDARY:
            n = se.INTERIOR;
            break;

          case se.INTERIOR:
          default:
            n = se.BOUNDARY;
        }

        this._label.setLocation(t, n);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Xn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Xn;
  }(Un);

  Xn.constructor_ = function () {
    this._coord = null, this._edges = null;
    var t = arguments[0],
        e = arguments[1];
    this._coord = t, this._edges = e, this._label = new Gn(0, se.NONE);
  };

  var Hn =
  /*#__PURE__*/
  function () {
    function Hn() {
      _classCallCheck(this, Hn);

      Hn.constructor_.apply(this, arguments);
    }

    _createClass(Hn, [{
      key: "find",
      value: function find(t) {
        return this.nodeMap.get(t);
      }
    }, {
      key: "addNode",
      value: function addNode() {
        if (arguments[0] instanceof g) {
          var _t424 = arguments[0];

          var _e307 = this.nodeMap.get(_t424);

          return null === _e307 && (_e307 = this.nodeFact.createNode(_t424), this.nodeMap.put(_t424, _e307)), _e307;
        }

        if (arguments[0] instanceof Xn) {
          var _t425 = arguments[0],
              _e308 = this.nodeMap.get(_t425.getCoordinate());

          return null === _e308 ? (this.nodeMap.put(_t425.getCoordinate(), _t425), _t425) : (_e308.mergeLabel(_t425), _e308);
        }
      }
    }, {
      key: "print",
      value: function print(t) {
        for (var _e309 = this.iterator(); _e309.hasNext();) {
          _e309.next().print(t);
        }
      }
    }, {
      key: "iterator",
      value: function iterator() {
        return this.nodeMap.values().iterator();
      }
    }, {
      key: "values",
      value: function values() {
        return this.nodeMap.values();
      }
    }, {
      key: "getBoundaryNodes",
      value: function getBoundaryNodes(t) {
        var e = new x();

        for (var _n202 = this.iterator(); _n202.hasNext();) {
          var _s141 = _n202.next();

          _s141.getLabel().getLocation(t) === se.BOUNDARY && e.add(_s141);
        }

        return e;
      }
    }, {
      key: "add",
      value: function add(t) {
        var e = t.getCoordinate();
        this.addNode(e).add(t);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Hn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Hn;
  }();

  Hn.constructor_ = function () {
    this.nodeMap = new ot(), this.nodeFact = null;
    var t = arguments[0];
    this.nodeFact = t;
  };

  var Wn =
  /*#__PURE__*/
  function () {
    function Wn() {
      _classCallCheck(this, Wn);

      Wn.constructor_.apply(this, arguments);
    }

    _createClass(Wn, [{
      key: "compareDirection",
      value: function compareDirection(t) {
        return this._dx === t._dx && this._dy === t._dy ? 0 : this._quadrant > t._quadrant ? 1 : this._quadrant < t._quadrant ? -1 : v.index(t._p0, t._p1, this._p1);
      }
    }, {
      key: "getDy",
      value: function getDy() {
        return this._dy;
      }
    }, {
      key: "getCoordinate",
      value: function getCoordinate() {
        return this._p0;
      }
    }, {
      key: "setNode",
      value: function setNode(t) {
        this._node = t;
      }
    }, {
      key: "print",
      value: function print(t) {
        var e = Math.atan2(this._dy, this._dx),
            n = this.getClass().getName(),
            s = n.lastIndexOf("."),
            i = n.substring(s + 1);
        t.print("  " + i + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + e + "   " + this._label);
      }
    }, {
      key: "compareTo",
      value: function compareTo(t) {
        var e = t;
        return this.compareDirection(e);
      }
    }, {
      key: "getDirectedCoordinate",
      value: function getDirectedCoordinate() {
        return this._p1;
      }
    }, {
      key: "getDx",
      value: function getDx() {
        return this._dx;
      }
    }, {
      key: "getLabel",
      value: function getLabel() {
        return this._label;
      }
    }, {
      key: "getEdge",
      value: function getEdge() {
        return this._edge;
      }
    }, {
      key: "getQuadrant",
      value: function getQuadrant() {
        return this._quadrant;
      }
    }, {
      key: "getNode",
      value: function getNode() {
        return this._node;
      }
    }, {
      key: "toString",
      value: function toString() {
        var t = Math.atan2(this._dy, this._dx),
            e = this.getClass().getName(),
            n = e.lastIndexOf(".");
        return "  " + e.substring(n + 1) + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + t + "   " + this._label;
      }
    }, {
      key: "computeLabel",
      value: function computeLabel(t) {}
    }, {
      key: "init",
      value: function init(t, e) {
        this._p0 = t, this._p1 = e, this._dx = e.x - t.x, this._dy = e.y - t.y, this._quadrant = Nn.quadrant(this._dx, this._dy), u.isTrue(!(0 === this._dx && 0 === this._dy), "EdgeEnd with identical endpoints found");
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Wn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [r];
      }
    }]);

    return Wn;
  }();

  Wn.constructor_ = function () {
    if (this._edge = null, this._label = null, this._node = null, this._p0 = null, this._p1 = null, this._dx = null, this._dy = null, this._quadrant = null, 1 === arguments.length) {
      var _t426 = arguments[0];
      this._edge = _t426;
    } else if (3 === arguments.length) {
      var _t427 = arguments[0],
          _e310 = arguments[1],
          _n203 = arguments[2];
      Wn.constructor_.call(this, _t427, _e310, _n203, null);
    } else if (4 === arguments.length) {
      var _t428 = arguments[0],
          _e311 = arguments[1],
          _n204 = arguments[2],
          _s142 = arguments[3];
      Wn.constructor_.call(this, _t428), this.init(_e311, _n204), this._label = _s142;
    }
  };

  var jn =
  /*#__PURE__*/
  function (_c12) {
    _inherits(jn, _c12);

    function jn() {
      var _this25;

      _classCallCheck(this, jn);

      if (1 === arguments.length) {
        var _t429 = arguments[0];
        _this25 = _possibleConstructorReturn(this, _getPrototypeOf(jn).call(this, _t429)), c.call(_assertThisInitialized(_this25), _t429);
      } else {
        if (2 !== arguments.length) throw Error();
        {
          var _t430 = arguments[0],
              _e312 = arguments[1];
          _this25 = _possibleConstructorReturn(this, _getPrototypeOf(jn).call(this, jn.msgWithCoord(_t430, _e312))), _this25.name = "TopologyException", _this25.pt = new g(_e312);
        }
      }

      return _possibleConstructorReturn(_this25);
    }

    _createClass(jn, [{
      key: "getCoordinate",
      value: function getCoordinate() {
        return this.pt;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return jn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "msgWithCoord",
      value: function msgWithCoord(t, e) {
        return null !== e ? t + " [ " + e + " ]" : t;
      }
    }]);

    return jn;
  }(c);

  var Kn =
  /*#__PURE__*/
  function (_Wn) {
    _inherits(Kn, _Wn);

    function Kn() {
      var _this26;

      _classCallCheck(this, Kn);

      _this26 = _possibleConstructorReturn(this, _getPrototypeOf(Kn).call(this)), Kn.constructor_.apply(_assertThisInitialized(_this26), arguments);
      return _this26;
    }

    _createClass(Kn, [{
      key: "getNextMin",
      value: function getNextMin() {
        return this._nextMin;
      }
    }, {
      key: "getDepth",
      value: function getDepth(t) {
        return this._depth[t];
      }
    }, {
      key: "setVisited",
      value: function setVisited(t) {
        this._isVisited = t;
      }
    }, {
      key: "computeDirectedLabel",
      value: function computeDirectedLabel() {
        this._label = new Gn(this._edge.getLabel()), this._isForward || this._label.flip();
      }
    }, {
      key: "getNext",
      value: function getNext() {
        return this._next;
      }
    }, {
      key: "setDepth",
      value: function setDepth(t, e) {
        if (-999 !== this._depth[t] && this._depth[t] !== e) throw new jn("assigned depths do not match", this.getCoordinate());
        this._depth[t] = e;
      }
    }, {
      key: "isInteriorAreaEdge",
      value: function isInteriorAreaEdge() {
        var t = !0;

        for (var _e313 = 0; _e313 < 2; _e313++) {
          this._label.isArea(_e313) && this._label.getLocation(_e313, vn.LEFT) === se.INTERIOR && this._label.getLocation(_e313, vn.RIGHT) === se.INTERIOR || (t = !1);
        }

        return t;
      }
    }, {
      key: "setNextMin",
      value: function setNextMin(t) {
        this._nextMin = t;
      }
    }, {
      key: "print",
      value: function print(t) {
        _get(_getPrototypeOf(Kn.prototype), "print", this).call(this, t), t.print(" " + this._depth[vn.LEFT] + "/" + this._depth[vn.RIGHT]), t.print(" (" + this.getDepthDelta() + ")"), this._isInResult && t.print(" inResult");
      }
    }, {
      key: "setMinEdgeRing",
      value: function setMinEdgeRing(t) {
        this._minEdgeRing = t;
      }
    }, {
      key: "isLineEdge",
      value: function isLineEdge() {
        var t = this._label.isLine(0) || this._label.isLine(1),
            e = !this._label.isArea(0) || this._label.allPositionsEqual(0, se.EXTERIOR),
            n = !this._label.isArea(1) || this._label.allPositionsEqual(1, se.EXTERIOR);

        return t && e && n;
      }
    }, {
      key: "setEdgeRing",
      value: function setEdgeRing(t) {
        this._edgeRing = t;
      }
    }, {
      key: "getMinEdgeRing",
      value: function getMinEdgeRing() {
        return this._minEdgeRing;
      }
    }, {
      key: "getDepthDelta",
      value: function getDepthDelta() {
        var t = this._edge.getDepthDelta();

        return this._isForward || (t = -t), t;
      }
    }, {
      key: "setInResult",
      value: function setInResult(t) {
        this._isInResult = t;
      }
    }, {
      key: "getSym",
      value: function getSym() {
        return this._sym;
      }
    }, {
      key: "isForward",
      value: function isForward() {
        return this._isForward;
      }
    }, {
      key: "getEdge",
      value: function getEdge() {
        return this._edge;
      }
    }, {
      key: "printEdge",
      value: function printEdge(t) {
        this.print(t), t.print(" "), this._isForward ? this._edge.print(t) : this._edge.printReverse(t);
      }
    }, {
      key: "setSym",
      value: function setSym(t) {
        this._sym = t;
      }
    }, {
      key: "setVisitedEdge",
      value: function setVisitedEdge(t) {
        this.setVisited(t), this._sym.setVisited(t);
      }
    }, {
      key: "setEdgeDepths",
      value: function setEdgeDepths(t, e) {
        var n = this.getEdge().getDepthDelta();
        this._isForward || (n = -n);
        var s = 1;
        t === vn.LEFT && (s = -1);
        var i = vn.opposite(t),
            r = e + n * s;
        this.setDepth(t, e), this.setDepth(i, r);
      }
    }, {
      key: "getEdgeRing",
      value: function getEdgeRing() {
        return this._edgeRing;
      }
    }, {
      key: "isInResult",
      value: function isInResult() {
        return this._isInResult;
      }
    }, {
      key: "setNext",
      value: function setNext(t) {
        this._next = t;
      }
    }, {
      key: "isVisited",
      value: function isVisited() {
        return this._isVisited;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Kn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "depthFactor",
      value: function depthFactor(t, e) {
        return t === se.EXTERIOR && e === se.INTERIOR ? 1 : t === se.INTERIOR && e === se.EXTERIOR ? -1 : 0;
      }
    }]);

    return Kn;
  }(Wn);

  Kn.constructor_ = function () {
    this._isForward = null, this._isInResult = !1, this._isVisited = !1, this._sym = null, this._next = null, this._nextMin = null, this._edgeRing = null, this._minEdgeRing = null, this._depth = [0, -999, -999];
    var t = arguments[0],
        e = arguments[1];
    if (Wn.constructor_.call(this, t), this._isForward = e, e) this.init(t.getCoordinate(0), t.getCoordinate(1));else {
      var _e314 = t.getNumPoints() - 1;

      this.init(t.getCoordinate(_e314), t.getCoordinate(_e314 - 1));
    }
    this.computeDirectedLabel();
  };

  var Zn =
  /*#__PURE__*/
  function () {
    function Zn() {
      _classCallCheck(this, Zn);

      Zn.constructor_.apply(this, arguments);
    }

    _createClass(Zn, [{
      key: "createNode",
      value: function createNode(t) {
        return new Xn(t, null);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Zn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Zn;
  }();

  Zn.constructor_ = function () {};

  var Qn =
  /*#__PURE__*/
  function () {
    function Qn() {
      _classCallCheck(this, Qn);

      Qn.constructor_.apply(this, arguments);
    }

    _createClass(Qn, [{
      key: "printEdges",
      value: function printEdges(t) {
        t.println("Edges:");

        for (var _e315 = 0; _e315 < this._edges.size(); _e315++) {
          t.println("edge " + _e315 + ":");

          var _n205 = this._edges.get(_e315);

          _n205.print(t), _n205.eiList.print(t);
        }
      }
    }, {
      key: "find",
      value: function find(t) {
        return this._nodes.find(t);
      }
    }, {
      key: "addNode",
      value: function addNode() {
        if (arguments[0] instanceof Xn) {
          var _t431 = arguments[0];
          return this._nodes.addNode(_t431);
        }

        if (arguments[0] instanceof g) {
          var _t432 = arguments[0];
          return this._nodes.addNode(_t432);
        }
      }
    }, {
      key: "getNodeIterator",
      value: function getNodeIterator() {
        return this._nodes.iterator();
      }
    }, {
      key: "linkResultDirectedEdges",
      value: function linkResultDirectedEdges() {
        for (var _t433 = this._nodes.iterator(); _t433.hasNext();) {
          _t433.next().getEdges().linkResultDirectedEdges();
        }
      }
    }, {
      key: "debugPrintln",
      value: function debugPrintln(t) {
        O.out.println(t);
      }
    }, {
      key: "isBoundaryNode",
      value: function isBoundaryNode(t, e) {
        var n = this._nodes.find(e);

        if (null === n) return !1;
        var s = n.getLabel();
        return null !== s && s.getLocation(t) === se.BOUNDARY;
      }
    }, {
      key: "linkAllDirectedEdges",
      value: function linkAllDirectedEdges() {
        for (var _t434 = this._nodes.iterator(); _t434.hasNext();) {
          _t434.next().getEdges().linkAllDirectedEdges();
        }
      }
    }, {
      key: "matchInSameDirection",
      value: function matchInSameDirection(t, e, n, s) {
        return !!t.equals(n) && v.index(t, e, s) === v.COLLINEAR && Nn.quadrant(t, e) === Nn.quadrant(n, s);
      }
    }, {
      key: "getEdgeEnds",
      value: function getEdgeEnds() {
        return this._edgeEndList;
      }
    }, {
      key: "debugPrint",
      value: function debugPrint(t) {
        O.out.print(t);
      }
    }, {
      key: "getEdgeIterator",
      value: function getEdgeIterator() {
        return this._edges.iterator();
      }
    }, {
      key: "findEdgeInSameDirection",
      value: function findEdgeInSameDirection(t, e) {
        for (var _n206 = 0; _n206 < this._edges.size(); _n206++) {
          var _s143 = this._edges.get(_n206),
              _i69 = _s143.getCoordinates();

          if (this.matchInSameDirection(t, e, _i69[0], _i69[1])) return _s143;
          if (this.matchInSameDirection(t, e, _i69[_i69.length - 1], _i69[_i69.length - 2])) return _s143;
        }

        return null;
      }
    }, {
      key: "insertEdge",
      value: function insertEdge(t) {
        this._edges.add(t);
      }
    }, {
      key: "findEdgeEnd",
      value: function findEdgeEnd(t) {
        for (var _e316 = this.getEdgeEnds().iterator(); _e316.hasNext();) {
          var _n207 = _e316.next();

          if (_n207.getEdge() === t) return _n207;
        }

        return null;
      }
    }, {
      key: "addEdges",
      value: function addEdges(t) {
        for (var _e317 = t.iterator(); _e317.hasNext();) {
          var _t435 = _e317.next();

          this._edges.add(_t435);

          var _n208 = new Kn(_t435, !0),
              _s144 = new Kn(_t435, !1);

          _n208.setSym(_s144), _s144.setSym(_n208), this.add(_n208), this.add(_s144);
        }
      }
    }, {
      key: "add",
      value: function add(t) {
        this._nodes.add(t), this._edgeEndList.add(t);
      }
    }, {
      key: "getNodes",
      value: function getNodes() {
        return this._nodes.values();
      }
    }, {
      key: "findEdge",
      value: function findEdge(t, e) {
        for (var _n209 = 0; _n209 < this._edges.size(); _n209++) {
          var _s145 = this._edges.get(_n209),
              _i70 = _s145.getCoordinates();

          if (t.equals(_i70[0]) && e.equals(_i70[1])) return _s145;
        }

        return null;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Qn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "linkResultDirectedEdges",
      value: function linkResultDirectedEdges(t) {
        for (var _e318 = t.iterator(); _e318.hasNext();) {
          _e318.next().getEdges().linkResultDirectedEdges();
        }
      }
    }]);

    return Qn;
  }();

  Qn.constructor_ = function () {
    if (this._edges = new x(), this._nodes = null, this._edgeEndList = new x(), 0 === arguments.length) this._nodes = new Hn(new Zn());else if (1 === arguments.length) {
      var _t436 = arguments[0];
      this._nodes = new Hn(_t436);
    }
  };

  var Jn =
  /*#__PURE__*/
  function (_Qn) {
    _inherits(Jn, _Qn);

    function Jn() {
      var _this27;

      _classCallCheck(this, Jn);

      _this27 = _possibleConstructorReturn(this, _getPrototypeOf(Jn).call(this)), Jn.constructor_.apply(_assertThisInitialized(_this27), arguments);
      return _this27;
    }

    _createClass(Jn, [{
      key: "insertBoundaryPoint",
      value: function insertBoundaryPoint(t, e) {
        var n = this._nodes.addNode(e).getLabel();

        var s = 1,
            i = se.NONE;
        (i = n.getLocation(t, vn.ON)) === se.BOUNDARY && s++;
        var r = Jn.determineBoundary(this._boundaryNodeRule, s);
        n.setLocation(t, r);
      }
    }, {
      key: "computeSelfNodes",
      value: function computeSelfNodes() {
        if (2 === arguments.length) {
          var _t437 = arguments[0],
              _e319 = arguments[1];
          return this.computeSelfNodes(_t437, _e319, !1);
        }

        if (3 === arguments.length) {
          var _t438 = arguments[0],
              _e320 = arguments[1],
              _n210 = arguments[2],
              _s146 = new An(_t438, !0, !1);

          _s146.setIsDoneIfProperInt(_n210);

          var _i71 = this.createEdgeSetIntersector(),
              _r42 = this._parentGeom instanceof Dt || this._parentGeom instanceof Mt || this._parentGeom instanceof Ft,
              _o26 = _e320 || !_r42;

          return _i71.computeIntersections(this._edges, _s146, _o26), this.addSelfIntersectionNodes(this._argIndex), _s146;
        }
      }
    }, {
      key: "computeSplitEdges",
      value: function computeSplitEdges(t) {
        for (var _e321 = this._edges.iterator(); _e321.hasNext();) {
          _e321.next().eiList.addSplitEdges(t);
        }
      }
    }, {
      key: "computeEdgeIntersections",
      value: function computeEdgeIntersections(t, e, n) {
        var s = new An(e, n, !0);
        return s.setBoundaryNodes(this.getBoundaryNodes(), t.getBoundaryNodes()), this.createEdgeSetIntersector().computeIntersections(this._edges, t._edges, s), s;
      }
    }, {
      key: "getGeometry",
      value: function getGeometry() {
        return this._parentGeom;
      }
    }, {
      key: "getBoundaryNodeRule",
      value: function getBoundaryNodeRule() {
        return this._boundaryNodeRule;
      }
    }, {
      key: "hasTooFewPoints",
      value: function hasTooFewPoints() {
        return this._hasTooFewPoints;
      }
    }, {
      key: "addPoint",
      value: function addPoint() {
        if (arguments[0] instanceof vt) {
          var _t439 = arguments[0].getCoordinate();

          this.insertPoint(this._argIndex, _t439, se.INTERIOR);
        } else if (arguments[0] instanceof g) {
          var _t440 = arguments[0];
          this.insertPoint(this._argIndex, _t440, se.INTERIOR);
        }
      }
    }, {
      key: "addPolygon",
      value: function addPolygon(t) {
        this.addPolygonRing(t.getExteriorRing(), se.EXTERIOR, se.INTERIOR);

        for (var _e322 = 0; _e322 < t.getNumInteriorRing(); _e322++) {
          var _n211 = t.getInteriorRingN(_e322);

          this.addPolygonRing(_n211, se.INTERIOR, se.EXTERIOR);
        }
      }
    }, {
      key: "addEdge",
      value: function addEdge(t) {
        this.insertEdge(t);
        var e = t.getCoordinates();
        this.insertPoint(this._argIndex, e[0], se.BOUNDARY), this.insertPoint(this._argIndex, e[e.length - 1], se.BOUNDARY);
      }
    }, {
      key: "addLineString",
      value: function addLineString(t) {
        var e = X.removeRepeatedPoints(t.getCoordinates());
        if (e.length < 2) return this._hasTooFewPoints = !0, this._invalidPoint = e[0], null;
        var n = new kn(e, new Gn(this._argIndex, se.INTERIOR));
        this._lineEdgeMap.put(t, n), this.insertEdge(n), u.isTrue(e.length >= 2, "found LineString with single point"), this.insertBoundaryPoint(this._argIndex, e[0]), this.insertBoundaryPoint(this._argIndex, e[e.length - 1]);
      }
    }, {
      key: "getInvalidPoint",
      value: function getInvalidPoint() {
        return this._invalidPoint;
      }
    }, {
      key: "getBoundaryPoints",
      value: function getBoundaryPoints() {
        var t = this.getBoundaryNodes(),
            e = new Array(t.size()).fill(null);
        var n = 0;

        for (var _s147 = t.iterator(); _s147.hasNext();) {
          var _t441 = _s147.next();

          e[n++] = _t441.getCoordinate().copy();
        }

        return e;
      }
    }, {
      key: "getBoundaryNodes",
      value: function getBoundaryNodes() {
        return null === this._boundaryNodes && (this._boundaryNodes = this._nodes.getBoundaryNodes(this._argIndex)), this._boundaryNodes;
      }
    }, {
      key: "addSelfIntersectionNode",
      value: function addSelfIntersectionNode(t, e, n) {
        if (this.isBoundaryNode(t, e)) return null;
        n === se.BOUNDARY && this._useBoundaryDeterminationRule ? this.insertBoundaryPoint(t, e) : this.insertPoint(t, e, n);
      }
    }, {
      key: "addPolygonRing",
      value: function addPolygonRing(t, e, n) {
        if (t.isEmpty()) return null;
        var s = X.removeRepeatedPoints(t.getCoordinates());
        if (s.length < 4) return this._hasTooFewPoints = !0, this._invalidPoint = s[0], null;
        var i = e,
            r = n;
        v.isCCW(s) && (i = n, r = e);
        var o = new kn(s, new Gn(this._argIndex, se.BOUNDARY, i, r));
        this._lineEdgeMap.put(t, o), this.insertEdge(o), this.insertPoint(this._argIndex, s[0], se.BOUNDARY);
      }
    }, {
      key: "insertPoint",
      value: function insertPoint(t, e, n) {
        var s = this._nodes.addNode(e),
            i = s.getLabel();

        null === i ? s._label = new Gn(t, n) : i.setLocation(t, n);
      }
    }, {
      key: "createEdgeSetIntersector",
      value: function createEdgeSetIntersector() {
        return new Dn();
      }
    }, {
      key: "addSelfIntersectionNodes",
      value: function addSelfIntersectionNodes(t) {
        for (var _e323 = this._edges.iterator(); _e323.hasNext();) {
          var _n212 = _e323.next(),
              _s148 = _n212.getLabel().getLocation(t);

          for (var _e324 = _n212.eiList.iterator(); _e324.hasNext();) {
            var _n213 = _e324.next();

            this.addSelfIntersectionNode(t, _n213.coord, _s148);
          }
        }
      }
    }, {
      key: "add",
      value: function add() {
        if (!(1 === arguments.length && arguments[0] instanceof q)) return _get(_getPrototypeOf(Jn.prototype), "add", this).apply(this, arguments);
        {
          var _t442 = arguments[0];
          if (_t442.isEmpty()) return null;
          if (_t442 instanceof Ft && (this._useBoundaryDeterminationRule = !1), _t442 instanceof Mt) this.addPolygon(_t442);else if (_t442 instanceof Rt) this.addLineString(_t442);else if (_t442 instanceof vt) this.addPoint(_t442);else if (_t442 instanceof At) this.addCollection(_t442);else if (_t442 instanceof pt) this.addCollection(_t442);else if (_t442 instanceof Ft) this.addCollection(_t442);else {
            if (!(_t442 instanceof ft)) throw new UnsupportedOperationException(_t442.getClass().getName());
            this.addCollection(_t442);
          }
        }
      }
    }, {
      key: "addCollection",
      value: function addCollection(t) {
        for (var _e325 = 0; _e325 < t.getNumGeometries(); _e325++) {
          var _n214 = t.getGeometryN(_e325);

          this.add(_n214);
        }
      }
    }, {
      key: "locate",
      value: function locate(t) {
        return _(this._parentGeom, bt) && this._parentGeom.getNumGeometries() > 50 ? (null === this._areaPtLocator && (this._areaPtLocator = new Xe(this._parentGeom)), this._areaPtLocator.locate(t)) : this._ptLocator.locate(t, this._parentGeom);
      }
    }, {
      key: "findEdge",
      value: function findEdge() {
        if (1 === arguments.length && arguments[0] instanceof Rt) {
          var _t443 = arguments[0];
          return this._lineEdgeMap.get(_t443);
        }

        return _get(_getPrototypeOf(Jn.prototype), "findEdge", this).apply(this, arguments);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Jn;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "determineBoundary",
      value: function determineBoundary(t, e) {
        return t.isInBoundary(e) ? se.BOUNDARY : se.INTERIOR;
      }
    }]);

    return Jn;
  }(Qn);

  Jn.constructor_ = function () {
    if (this._parentGeom = null, this._lineEdgeMap = new kt(), this._boundaryNodeRule = null, this._useBoundaryDeterminationRule = !0, this._argIndex = null, this._boundaryNodes = null, this._hasTooFewPoints = !1, this._invalidPoint = null, this._areaPtLocator = null, this._ptLocator = new fn(), 2 === arguments.length) {
      var _t444 = arguments[0],
          _e326 = arguments[1];
      Jn.constructor_.call(this, _t444, _e326, V.OGC_SFS_BOUNDARY_RULE);
    } else if (3 === arguments.length) {
      var _t445 = arguments[0],
          _e327 = arguments[1],
          _n215 = arguments[2];
      this._argIndex = _t445, this._parentGeom = _e327, this._boundaryNodeRule = _n215, null !== _e327 && this.add(_e327);
    }
  };

  var $n = Object.freeze({
    GeometryGraph: Jn
  });

  var ts =
  /*#__PURE__*/
  function () {
    function ts() {
      _classCallCheck(this, ts);

      ts.constructor_.apply(this, arguments);
    }

    _createClass(ts, [{
      key: "visit",
      value: function visit(t) {}
    }, {
      key: "getClass",
      value: function getClass() {
        return ts;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return ts;
  }();

  ts.constructor_ = function () {};

  var es =
  /*#__PURE__*/
  function () {
    function es() {
      _classCallCheck(this, es);

      es.constructor_.apply(this, arguments);
    }

    _createClass(es, [{
      key: "isRepeated",
      value: function isRepeated() {
        return this._count > 1;
      }
    }, {
      key: "getRight",
      value: function getRight() {
        return this._right;
      }
    }, {
      key: "getCoordinate",
      value: function getCoordinate() {
        return this._p;
      }
    }, {
      key: "setLeft",
      value: function setLeft(t) {
        this._left = t;
      }
    }, {
      key: "getX",
      value: function getX() {
        return this._p.x;
      }
    }, {
      key: "getData",
      value: function getData() {
        return this._data;
      }
    }, {
      key: "getCount",
      value: function getCount() {
        return this._count;
      }
    }, {
      key: "getLeft",
      value: function getLeft() {
        return this._left;
      }
    }, {
      key: "getY",
      value: function getY() {
        return this._p.y;
      }
    }, {
      key: "increment",
      value: function increment() {
        this._count = this._count + 1;
      }
    }, {
      key: "setRight",
      value: function setRight(t) {
        this._right = t;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return es;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return es;
  }();

  es.constructor_ = function () {
    if (this._p = null, this._data = null, this._left = null, this._right = null, this._count = null, 2 === arguments.length) {
      var _t446 = arguments[0],
          _e328 = arguments[1];
      this._p = new g(_t446), this._left = null, this._right = null, this._count = 1, this._data = _e328;
    } else if (3 === arguments.length) {
      var _t447 = arguments[0],
          _e329 = arguments[1],
          _n216 = arguments[2];
      this._p = new g(_t447, _e329), this._left = null, this._right = null, this._count = 1, this._data = _n216;
    }
  };

  var ns =
  /*#__PURE__*/
  function () {
    function ns() {
      _classCallCheck(this, ns);

      ns.constructor_.apply(this, arguments);
    }

    _createClass(ns, [{
      key: "insert",
      value: function insert() {
        if (1 === arguments.length) {
          var _t448 = arguments[0];
          return this.insert(_t448, null);
        }

        if (2 === arguments.length) {
          var _t449 = arguments[0],
              _e330 = arguments[1];
          if (null === this._root) return this._root = new es(_t449, _e330), this._root;

          if (this._tolerance > 0) {
            var _e331 = this.findBestMatchNode(_t449);

            if (null !== _e331) return _e331.increment(), _e331;
          }

          return this.insertExact(_t449, _e330);
        }
      }
    }, {
      key: "query",
      value: function query() {
        if (1 === arguments.length) {
          var _t450 = arguments[0],
              _e332 = new x();

          return this.query(_t450, _e332), _e332;
        }

        if (2 === arguments.length) if (arguments[0] instanceof N && _(arguments[1], m)) {
          var _t451 = arguments[0],
              _e333 = arguments[1];
          this.queryNode(this._root, _t451, !0, new (
          /*#__PURE__*/
          function () {
            function _class2() {
              _classCallCheck(this, _class2);
            }

            _createClass(_class2, [{
              key: "visit",
              value: function visit(t) {
                _e333.add(t);
              }
            }, {
              key: "interfaces_",
              get: function get() {
                return [ts];
              }
            }]);

            return _class2;
          }())());
        } else if (arguments[0] instanceof N && _(arguments[1], ts)) {
          var _t452 = arguments[0],
              _e334 = arguments[1];
          this.queryNode(this._root, _t452, !0, _e334);
        }
      }
    }, {
      key: "queryNode",
      value: function queryNode(t, e, n, s) {
        if (null === t) return null;
        var i = null,
            r = null,
            o = null;
        n ? (i = e.getMinX(), r = e.getMaxX(), o = t.getX()) : (i = e.getMinY(), r = e.getMaxY(), o = t.getY());
        var l = o <= r;
        i < o && this.queryNode(t.getLeft(), e, !n, s), e.contains(t.getCoordinate()) && s.visit(t), l && this.queryNode(t.getRight(), e, !n, s);
      }
    }, {
      key: "findBestMatchNode",
      value: function findBestMatchNode(t) {
        var e = new ss(t, this._tolerance);
        return this.query(e.queryEnvelope(), e), e.getNode();
      }
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        return null === this._root;
      }
    }, {
      key: "insertExact",
      value: function insertExact(t, e) {
        var n = this._root,
            s = this._root,
            i = !0,
            r = !0;

        for (; null !== n;) {
          if (null !== n) {
            if (t.distance(n.getCoordinate()) <= this._tolerance) return n.increment(), n;
          }

          r = i ? t.x < n.getX() : t.y < n.getY(), s = n, n = r ? n.getLeft() : n.getRight(), i = !i;
        }

        this._numberOfNodes = this._numberOfNodes + 1;
        var o = new es(t, e);
        return r ? s.setLeft(o) : s.setRight(o), o;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return ns;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "toCoordinates",
      value: function toCoordinates() {
        if (1 === arguments.length) {
          var _t453 = arguments[0];
          return ns.toCoordinates(_t453, !1);
        }

        if (2 === arguments.length) {
          var _t454 = arguments[0],
              _e335 = arguments[1],
              _n217 = new I();

          for (var _s149 = _t454.iterator(); _s149.hasNext();) {
            var _t455 = _s149.next(),
                _i72 = _e335 ? _t455.getCount() : 1;

            for (var _e336 = 0; _e336 < _i72; _e336++) {
              _n217.add(_t455.getCoordinate(), !0);
            }
          }

          return _n217.toCoordinateArray();
        }
      }
    }]);

    return ns;
  }();

  var ss =
  /*#__PURE__*/
  function () {
    function ss() {
      _classCallCheck(this, ss);

      ss.constructor_.apply(this, arguments);
    }

    _createClass(ss, [{
      key: "visit",
      value: function visit(t) {
        var e = this._p.distance(t.getCoordinate());

        if (!(e <= this._tolerance)) return null;
        var n = !1;
        (null === this._matchNode || e < this._matchDist || null !== this._matchNode && e === this._matchDist && t.getCoordinate().compareTo(this._matchNode.getCoordinate()) < 1) && (n = !0), n && (this._matchNode = t, this._matchDist = e);
      }
    }, {
      key: "queryEnvelope",
      value: function queryEnvelope() {
        var t = new N(this._p);
        return t.expandBy(this._tolerance), t;
      }
    }, {
      key: "getNode",
      value: function getNode() {
        return this._matchNode;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return ss;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [ts];
      }
    }]);

    return ss;
  }();

  ss.constructor_ = function () {
    this._tolerance = null, this._matchNode = null, this._matchDist = 0, this._p = null;
    var t = arguments[0],
        e = arguments[1];
    this._p = t, this._tolerance = e;
  }, ns.BestMatchVisitor = ss, ns.constructor_ = function () {
    if (this._root = null, this._numberOfNodes = null, this._tolerance = null, 0 === arguments.length) ns.constructor_.call(this, 0);else if (1 === arguments.length) {
      var _t456 = arguments[0];
      this._tolerance = _t456;
    }
  };
  var is = Object.freeze({
    KdTree: ns
  });

  var rs =
  /*#__PURE__*/
  function () {
    function rs() {
      _classCallCheck(this, rs);

      rs.constructor_.apply(this, arguments);
    }

    _createClass(rs, [{
      key: "hasChildren",
      value: function hasChildren() {
        for (var _t457 = 0; _t457 < 4; _t457++) {
          if (null !== this._subnode[_t457]) return !0;
        }

        return !1;
      }
    }, {
      key: "isPrunable",
      value: function isPrunable() {
        return !(this.hasChildren() || this.hasItems());
      }
    }, {
      key: "addAllItems",
      value: function addAllItems(t) {
        t.addAll(this._items);

        for (var _e337 = 0; _e337 < 4; _e337++) {
          null !== this._subnode[_e337] && this._subnode[_e337].addAllItems(t);
        }

        return t;
      }
    }, {
      key: "getNodeCount",
      value: function getNodeCount() {
        var t = 0;

        for (var _e338 = 0; _e338 < 4; _e338++) {
          null !== this._subnode[_e338] && (t += this._subnode[_e338].size());
        }

        return t + 1;
      }
    }, {
      key: "size",
      value: function size() {
        var t = 0;

        for (var _e339 = 0; _e339 < 4; _e339++) {
          null !== this._subnode[_e339] && (t += this._subnode[_e339].size());
        }

        return t + this._items.size();
      }
    }, {
      key: "addAllItemsFromOverlapping",
      value: function addAllItemsFromOverlapping(t, e) {
        if (!this.isSearchMatch(t)) return null;
        e.addAll(this._items);

        for (var _n218 = 0; _n218 < 4; _n218++) {
          null !== this._subnode[_n218] && this._subnode[_n218].addAllItemsFromOverlapping(t, e);
        }
      }
    }, {
      key: "visitItems",
      value: function visitItems(t, e) {
        for (var _t458 = this._items.iterator(); _t458.hasNext();) {
          e.visitItem(_t458.next());
        }
      }
    }, {
      key: "hasItems",
      value: function hasItems() {
        return !this._items.isEmpty();
      }
    }, {
      key: "remove",
      value: function remove(t, e) {
        if (!this.isSearchMatch(t)) return !1;
        var n = !1;

        for (var _s150 = 0; _s150 < 4; _s150++) {
          if (null !== this._subnode[_s150] && (n = this._subnode[_s150].remove(t, e))) {
            this._subnode[_s150].isPrunable() && (this._subnode[_s150] = null);
            break;
          }
        }

        return n || (n = this._items.remove(e));
      }
    }, {
      key: "visit",
      value: function visit(t, e) {
        if (!this.isSearchMatch(t)) return null;
        this.visitItems(t, e);

        for (var _n219 = 0; _n219 < 4; _n219++) {
          null !== this._subnode[_n219] && this._subnode[_n219].visit(t, e);
        }
      }
    }, {
      key: "getItems",
      value: function getItems() {
        return this._items;
      }
    }, {
      key: "depth",
      value: function depth() {
        var t = 0;

        for (var _e340 = 0; _e340 < 4; _e340++) {
          if (null !== this._subnode[_e340]) {
            var _n220 = this._subnode[_e340].depth();

            _n220 > t && (t = _n220);
          }
        }

        return t + 1;
      }
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        var t = !0;

        if (this._items.isEmpty()) {
          for (var _e341 = 0; _e341 < 4; _e341++) {
            if (null !== this._subnode[_e341] && !this._subnode[_e341].isEmpty()) {
              t = !1;
              break;
            }
          }
        } else t = !1;

        return t;
      }
    }, {
      key: "add",
      value: function add(t) {
        this._items.add(t);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return rs;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [a];
      }
    }], [{
      key: "getSubnodeIndex",
      value: function getSubnodeIndex(t, e, n) {
        var s = -1;
        return t.getMinX() >= e && (t.getMinY() >= n && (s = 3), t.getMaxY() <= n && (s = 1)), t.getMaxX() <= e && (t.getMinY() >= n && (s = 2), t.getMaxY() <= n && (s = 0)), s;
      }
    }]);

    return rs;
  }();

  function os() {}

  rs.constructor_ = function () {
    this._items = new x(), this._subnode = new Array(4).fill(null);
  }, os.exponent = function (t) {
    return function (t, e) {
      var n, s, i, r;
      var o = {
        32: {
          d: 127,
          c: 128,
          b: 0,
          a: 0
        },
        64: {
          d: 32752,
          c: 0,
          b: 0,
          a: 0
        }
      },
          l = {
        32: 8,
        64: 11
      }[t];
      r || (n = e < 0 || 1 / e < 0, isFinite(e) || (r = o[t], n && (r.d += 1 << t / 4 - 1), s = Math.pow(2, l) - 1, i = 0));

      if (!r) {
        for (s = {
          32: 127,
          64: 1023
        }[t], i = Math.abs(e); i >= 2;) {
          s++, i /= 2;
        }

        for (; i < 1 && s > 0;) {
          s--, i *= 2;
        }

        s <= 0 && (i /= 2), 32 === t && s > 254 && (r = {
          d: n ? 255 : 127,
          c: 128,
          b: 0,
          a: 0
        }, s = Math.pow(2, l) - 1, i = 0);
      }

      return s;
    }(64, t) - 1023;
  }, os.powerOf2 = function (t) {
    return Math.pow(2, t);
  };

  var ls =
  /*#__PURE__*/
  function () {
    function ls() {
      _classCallCheck(this, ls);

      ls.constructor_.apply(this, arguments);
    }

    _createClass(ls, [{
      key: "getLevel",
      value: function getLevel() {
        return this._level;
      }
    }, {
      key: "computeKey",
      value: function computeKey() {
        if (1 === arguments.length) {
          var _t459 = arguments[0];

          for (this._level = ls.computeQuadLevel(_t459), this._env = new N(), this.computeKey(this._level, _t459); !this._env.contains(_t459);) {
            this._level += 1, this.computeKey(this._level, _t459);
          }
        } else if (2 === arguments.length) {
          var _t460 = arguments[0],
              _e342 = arguments[1],
              _n221 = os.powerOf2(_t460);

          this._pt.x = Math.floor(_e342.getMinX() / _n221) * _n221, this._pt.y = Math.floor(_e342.getMinY() / _n221) * _n221, this._env.init(this._pt.x, this._pt.x + _n221, this._pt.y, this._pt.y + _n221);
        }
      }
    }, {
      key: "getEnvelope",
      value: function getEnvelope() {
        return this._env;
      }
    }, {
      key: "getCentre",
      value: function getCentre() {
        return new g((this._env.getMinX() + this._env.getMaxX()) / 2, (this._env.getMinY() + this._env.getMaxY()) / 2);
      }
    }, {
      key: "getPoint",
      value: function getPoint() {
        return this._pt;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return ls;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "computeQuadLevel",
      value: function computeQuadLevel(t) {
        var e = t.getWidth(),
            n = t.getHeight(),
            s = e > n ? e : n;
        return os.exponent(s) + 1;
      }
    }]);

    return ls;
  }();

  ls.constructor_ = function () {
    this._pt = new g(), this._level = 0, this._env = null;
    var t = arguments[0];
    this.computeKey(t);
  };

  var as =
  /*#__PURE__*/
  function (_rs) {
    _inherits(as, _rs);

    function as() {
      var _this28;

      _classCallCheck(this, as);

      _this28 = _possibleConstructorReturn(this, _getPrototypeOf(as).call(this)), as.constructor_.apply(_assertThisInitialized(_this28), arguments);
      return _this28;
    }

    _createClass(as, [{
      key: "find",
      value: function find(t) {
        var e = rs.getSubnodeIndex(t, this._centrex, this._centrey);
        if (-1 === e) return this;

        if (null !== this._subnode[e]) {
          return this._subnode[e].find(t);
        }

        return this;
      }
    }, {
      key: "isSearchMatch",
      value: function isSearchMatch(t) {
        return null !== t && this._env.intersects(t);
      }
    }, {
      key: "getSubnode",
      value: function getSubnode(t) {
        return null === this._subnode[t] && (this._subnode[t] = this.createSubnode(t)), this._subnode[t];
      }
    }, {
      key: "getEnvelope",
      value: function getEnvelope() {
        return this._env;
      }
    }, {
      key: "getNode",
      value: function getNode(t) {
        var e = rs.getSubnodeIndex(t, this._centrex, this._centrey);

        if (-1 !== e) {
          return this.getSubnode(e).getNode(t);
        }

        return this;
      }
    }, {
      key: "createSubnode",
      value: function createSubnode(t) {
        var e = 0,
            n = 0,
            s = 0,
            i = 0;

        switch (t) {
          case 0:
            e = this._env.getMinX(), n = this._centrex, s = this._env.getMinY(), i = this._centrey;
            break;

          case 1:
            e = this._centrex, n = this._env.getMaxX(), s = this._env.getMinY(), i = this._centrey;
            break;

          case 2:
            e = this._env.getMinX(), n = this._centrex, s = this._centrey, i = this._env.getMaxY();
            break;

          case 3:
            e = this._centrex, n = this._env.getMaxX(), s = this._centrey, i = this._env.getMaxY();
        }

        var r = new N(e, n, s, i);
        return new as(r, this._level - 1);
      }
    }, {
      key: "insertNode",
      value: function insertNode(t) {
        u.isTrue(null === this._env || this._env.contains(t._env));
        var e = rs.getSubnodeIndex(t._env, this._centrex, this._centrey);
        if (t._level === this._level - 1) this._subnode[e] = t;else {
          var _n222 = this.createSubnode(e);

          _n222.insertNode(t), this._subnode[e] = _n222;
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return as;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "createNode",
      value: function createNode(t) {
        var e = new ls(t);
        return new as(e.getEnvelope(), e.getLevel());
      }
    }, {
      key: "createExpanded",
      value: function createExpanded(t, e) {
        var n = new N(e);
        null !== t && n.expandToInclude(t._env);
        var s = as.createNode(n);
        return null !== t && s.insertNode(t), s;
      }
    }]);

    return as;
  }(rs);

  as.constructor_ = function () {
    this._env = null, this._centrex = null, this._centrey = null, this._level = null;
    var t = arguments[0],
        e = arguments[1];
    this._env = t, this._level = e, this._centrex = (t.getMinX() + t.getMaxX()) / 2, this._centrey = (t.getMinY() + t.getMaxY()) / 2;
  };

  var cs =
  /*#__PURE__*/
  function () {
    function cs() {
      _classCallCheck(this, cs);

      cs.constructor_.apply(this, arguments);
    }

    _createClass(cs, [{
      key: "getClass",
      value: function getClass() {
        return cs;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "isZeroWidth",
      value: function isZeroWidth(t, e) {
        var n = e - t;
        if (0 === n) return !0;
        var s = n / Math.max(Math.abs(t), Math.abs(e));
        return os.exponent(s) <= cs.MIN_BINARY_EXPONENT;
      }
    }]);

    return cs;
  }();

  cs.constructor_ = function () {}, cs.MIN_BINARY_EXPONENT = -50;

  var hs =
  /*#__PURE__*/
  function (_rs2) {
    _inherits(hs, _rs2);

    function hs() {
      var _this29;

      _classCallCheck(this, hs);

      _this29 = _possibleConstructorReturn(this, _getPrototypeOf(hs).call(this)), hs.constructor_.apply(_assertThisInitialized(_this29), arguments);
      return _this29;
    }

    _createClass(hs, [{
      key: "insert",
      value: function insert(t, e) {
        var n = rs.getSubnodeIndex(t, hs.origin.x, hs.origin.y);
        if (-1 === n) return this.add(e), null;
        var s = this._subnode[n];

        if (null === s || !s.getEnvelope().contains(t)) {
          var _e343 = as.createExpanded(s, t);

          this._subnode[n] = _e343;
        }

        this.insertContained(this._subnode[n], t, e);
      }
    }, {
      key: "isSearchMatch",
      value: function isSearchMatch(t) {
        return !0;
      }
    }, {
      key: "insertContained",
      value: function insertContained(t, e, n) {
        u.isTrue(t.getEnvelope().contains(e));
        var s = cs.isZeroWidth(e.getMinX(), e.getMaxX()),
            i = cs.isZeroWidth(e.getMinY(), e.getMaxY());
        var r = null;
        (r = s || i ? t.find(e) : t.getNode(e)).add(n);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return hs;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return hs;
  }(rs);

  hs.constructor_ = function () {}, hs.origin = new g(0, 0);

  var us =
  /*#__PURE__*/
  function () {
    function us() {
      _classCallCheck(this, us);

      us.constructor_.apply(this, arguments);
    }

    _createClass(us, [{
      key: "insert",
      value: function insert(t, e) {}
    }, {
      key: "remove",
      value: function remove(t, e) {}
    }, {
      key: "query",
      value: function query() {}
    }, {
      key: "getClass",
      value: function getClass() {
        return us;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return us;
  }();

  us.constructor_ = function () {};

  var gs =
  /*#__PURE__*/
  function () {
    function gs() {
      _classCallCheck(this, gs);

      gs.constructor_.apply(this, arguments);
    }

    _createClass(gs, [{
      key: "size",
      value: function size() {
        return null !== this._root ? this._root.size() : 0;
      }
    }, {
      key: "insert",
      value: function insert(t, e) {
        this.collectStats(t);
        var n = gs.ensureExtent(t, this._minExtent);

        this._root.insert(n, e);
      }
    }, {
      key: "query",
      value: function query() {
        if (1 === arguments.length) {
          var _t461 = arguments[0],
              _e344 = new Ue();

          return this.query(_t461, _e344), _e344.getItems();
        }

        if (2 === arguments.length) {
          var _t462 = arguments[0],
              _e345 = arguments[1];

          this._root.visit(_t462, _e345);
        }
      }
    }, {
      key: "queryAll",
      value: function queryAll() {
        var t = new x();
        return this._root.addAllItems(t), t;
      }
    }, {
      key: "remove",
      value: function remove(t, e) {
        var n = gs.ensureExtent(t, this._minExtent);
        return this._root.remove(n, e);
      }
    }, {
      key: "collectStats",
      value: function collectStats(t) {
        var e = t.getWidth();
        e < this._minExtent && e > 0 && (this._minExtent = e);
        var n = t.getHeight();
        n < this._minExtent && n > 0 && (this._minExtent = n);
      }
    }, {
      key: "depth",
      value: function depth() {
        return null !== this._root ? this._root.depth() : 0;
      }
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        return null === this._root || this._root.isEmpty();
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return gs;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [us, a];
      }
    }], [{
      key: "ensureExtent",
      value: function ensureExtent(t, e) {
        var n = t.getMinX(),
            s = t.getMaxX(),
            i = t.getMinY(),
            r = t.getMaxY();
        return n !== s && i !== r ? t : (n === s && (s = (n -= e / 2) + e / 2), i === r && (r = (i -= e / 2) + e / 2), new N(n, s, i, r));
      }
    }]);

    return gs;
  }();

  gs.constructor_ = function () {
    this._root = null, this._minExtent = 1, this._root = new hs();
  }, gs.serialVersionUID = -0x678b60c967a25400;
  var ds = Object.freeze({
    Quadtree: gs
  });

  var _s =
  /*#__PURE__*/
  function () {
    function _s() {
      _classCallCheck(this, _s);

      _s.constructor_.apply(this, arguments);
    }

    _createClass(_s, [{
      key: "getBounds",
      value: function getBounds() {}
    }, {
      key: "getClass",
      value: function getClass() {
        return _s;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return _s;
  }();

  _s.constructor_ = function () {};

  var fs =
  /*#__PURE__*/
  function () {
    function fs() {
      _classCallCheck(this, fs);

      fs.constructor_.apply(this, arguments);
    }

    _createClass(fs, [{
      key: "getItem",
      value: function getItem() {
        return this._item;
      }
    }, {
      key: "getBounds",
      value: function getBounds() {
        return this._bounds;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return fs;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [_s, a];
      }
    }]);

    return fs;
  }();

  fs.constructor_ = function () {
    this._bounds = null, this._item = null;
    var t = arguments[0],
        e = arguments[1];
    this._bounds = t, this._item = e;
  };

  var ps =
  /*#__PURE__*/
  function () {
    function ps() {
      _classCallCheck(this, ps);

      ps.constructor_.apply(this, arguments);
    }

    _createClass(ps, [{
      key: "poll",
      value: function poll() {
        if (this.isEmpty()) return null;

        var t = this._items.get(1);

        return this._items.set(1, this._items.get(this._size)), this._size -= 1, this.reorder(1), t;
      }
    }, {
      key: "size",
      value: function size() {
        return this._size;
      }
    }, {
      key: "reorder",
      value: function reorder(t) {
        var e = null;

        var n = this._items.get(t);

        for (; 2 * t <= this._size && ((e = 2 * t) !== this._size && this._items.get(e + 1).compareTo(this._items.get(e)) < 0 && e++, this._items.get(e).compareTo(n) < 0); t = e) {
          this._items.set(t, this._items.get(e));
        }

        this._items.set(t, n);
      }
    }, {
      key: "clear",
      value: function clear() {
        this._size = 0, this._items.clear();
      }
    }, {
      key: "peek",
      value: function peek() {
        if (this.isEmpty()) return null;
        return this._items.get(1);
      }
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        return 0 === this._size;
      }
    }, {
      key: "add",
      value: function add(t) {
        this._items.add(null), this._size += 1;
        var e = this._size;

        for (this._items.set(0, t); t.compareTo(this._items.get(Math.trunc(e / 2))) < 0; e /= 2) {
          this._items.set(e, this._items.get(Math.trunc(e / 2)));
        }

        this._items.set(e, t);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return ps;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return ps;
  }();

  ps.constructor_ = function () {
    this._size = null, this._items = null, this._size = 0, this._items = new x(), this._items.add(null);
  };

  var ms =
  /*#__PURE__*/
  function () {
    function ms() {
      _classCallCheck(this, ms);

      ms.constructor_.apply(this, arguments);
    }

    _createClass(ms, [{
      key: "getLevel",
      value: function getLevel() {
        return this._level;
      }
    }, {
      key: "size",
      value: function size() {
        return this._childBoundables.size();
      }
    }, {
      key: "getChildBoundables",
      value: function getChildBoundables() {
        return this._childBoundables;
      }
    }, {
      key: "addChildBoundable",
      value: function addChildBoundable(t) {
        u.isTrue(null === this._bounds), this._childBoundables.add(t);
      }
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        return this._childBoundables.isEmpty();
      }
    }, {
      key: "getBounds",
      value: function getBounds() {
        return null === this._bounds && (this._bounds = this.computeBounds()), this._bounds;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return ms;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [_s, a];
      }
    }]);

    return ms;
  }();

  ms.constructor_ = function () {
    if (this._childBoundables = new x(), this._bounds = null, this._level = null, 0 === arguments.length) ;else if (1 === arguments.length) {
      var _t463 = arguments[0];
      this._level = _t463;
    }
  }, ms.serialVersionUID = 0x5a1e55ec41369800;

  var ys =
  /*#__PURE__*/
  function () {
    function ys() {
      _classCallCheck(this, ys);

      ys.constructor_.apply(this, arguments);
    }

    _createClass(ys, [{
      key: "expandToQueue",
      value: function expandToQueue(t, e) {
        var s = ys.isComposite(this._boundable1),
            i = ys.isComposite(this._boundable2);
        if (s && i) return ys.area(this._boundable1) > ys.area(this._boundable2) ? (this.expand(this._boundable1, this._boundable2, t, e), null) : (this.expand(this._boundable2, this._boundable1, t, e), null);
        if (s) return this.expand(this._boundable1, this._boundable2, t, e), null;
        if (i) return this.expand(this._boundable2, this._boundable1, t, e), null;
        throw new n("neither boundable is composite");
      }
    }, {
      key: "isLeaves",
      value: function isLeaves() {
        return !(ys.isComposite(this._boundable1) || ys.isComposite(this._boundable2));
      }
    }, {
      key: "compareTo",
      value: function compareTo(t) {
        var e = t;
        return this._distance < e._distance ? -1 : this._distance > e._distance ? 1 : 0;
      }
    }, {
      key: "expand",
      value: function expand(t, e, n, s) {
        for (var _i73 = t.getChildBoundables().iterator(); _i73.hasNext();) {
          var _t464 = _i73.next(),
              _r43 = new ys(_t464, e, this._itemDistance);

          _r43.getDistance() < s && n.add(_r43);
        }
      }
    }, {
      key: "getBoundable",
      value: function getBoundable(t) {
        return 0 === t ? this._boundable1 : this._boundable2;
      }
    }, {
      key: "getDistance",
      value: function getDistance() {
        return this._distance;
      }
    }, {
      key: "distance",
      value: function distance() {
        return this.isLeaves() ? this._itemDistance.distance(this._boundable1, this._boundable2) : this._boundable1.getBounds().distance(this._boundable2.getBounds());
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return ys;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [r];
      }
    }], [{
      key: "area",
      value: function area(t) {
        return t.getBounds().getArea();
      }
    }, {
      key: "isComposite",
      value: function isComposite(t) {
        return t instanceof ms;
      }
    }]);

    return ys;
  }();

  ys.constructor_ = function () {
    this._boundable1 = null, this._boundable2 = null, this._distance = null, this._itemDistance = null;
    var t = arguments[0],
        e = arguments[1],
        n = arguments[2];
    this._boundable1 = t, this._boundable2 = e, this._itemDistance = n, this._distance = this.distance();
  };

  var xs =
  /*#__PURE__*/
  function () {
    function xs() {
      _classCallCheck(this, xs);

      xs.constructor_.apply(this, arguments);
    }

    _createClass(xs, [{
      key: "queryInternal",
      value: function queryInternal() {
        if (_(arguments[2], Fe) && arguments[0] instanceof Object && arguments[1] instanceof ms) {
          var _t465 = arguments[0],
              _e346 = arguments[1],
              _n223 = arguments[2],
              _s151 = _e346.getChildBoundables();

          for (var _e347 = 0; _e347 < _s151.size(); _e347++) {
            var _i74 = _s151.get(_e347);

            this.getIntersectsOp().intersects(_i74.getBounds(), _t465) && (_i74 instanceof ms ? this.queryInternal(_t465, _i74, _n223) : _i74 instanceof fs ? _n223.visitItem(_i74.getItem()) : u.shouldNeverReachHere());
          }
        } else if (_(arguments[2], m) && arguments[0] instanceof Object && arguments[1] instanceof ms) {
          var _t466 = arguments[0],
              _e348 = arguments[1],
              _n224 = arguments[2],
              _s152 = _e348.getChildBoundables();

          for (var _e349 = 0; _e349 < _s152.size(); _e349++) {
            var _i75 = _s152.get(_e349);

            this.getIntersectsOp().intersects(_i75.getBounds(), _t466) && (_i75 instanceof ms ? this.queryInternal(_t466, _i75, _n224) : _i75 instanceof fs ? _n224.add(_i75.getItem()) : u.shouldNeverReachHere());
          }
        }
      }
    }, {
      key: "getNodeCapacity",
      value: function getNodeCapacity() {
        return this._nodeCapacity;
      }
    }, {
      key: "lastNode",
      value: function lastNode(t) {
        return t.get(t.size() - 1);
      }
    }, {
      key: "size",
      value: function size() {
        if (0 === arguments.length) return this.isEmpty() ? 0 : (this.build(), this.size(this._root));

        if (1 === arguments.length) {
          var _t467 = 0;

          for (var _e350 = arguments[0].getChildBoundables().iterator(); _e350.hasNext();) {
            var _n225 = _e350.next();

            _n225 instanceof ms ? _t467 += this.size(_n225) : _n225 instanceof fs && (_t467 += 1);
          }

          return _t467;
        }
      }
    }, {
      key: "removeItem",
      value: function removeItem(t, e) {
        var n = null;

        for (var _s153 = t.getChildBoundables().iterator(); _s153.hasNext();) {
          var _t468 = _s153.next();

          _t468 instanceof fs && _t468.getItem() === e && (n = _t468);
        }

        return null !== n && (t.getChildBoundables().remove(n), !0);
      }
    }, {
      key: "itemsTree",
      value: function itemsTree() {
        if (0 === arguments.length) {
          this.build();

          var _t469 = this.itemsTree(this._root);

          return null === _t469 ? new x() : _t469;
        }

        if (1 === arguments.length) {
          var _t470 = arguments[0],
              _e351 = new x();

          for (var _n226 = _t470.getChildBoundables().iterator(); _n226.hasNext();) {
            var _t471 = _n226.next();

            if (_t471 instanceof ms) {
              var _n227 = this.itemsTree(_t471);

              null !== _n227 && _e351.add(_n227);
            } else _t471 instanceof fs ? _e351.add(_t471.getItem()) : u.shouldNeverReachHere();
          }

          return _e351.size() <= 0 ? null : _e351;
        }
      }
    }, {
      key: "insert",
      value: function insert(t, e) {
        u.isTrue(!this._built, "Cannot insert items into an STR packed R-tree after it has been built."), this._itemBoundables.add(new fs(t, e));
      }
    }, {
      key: "boundablesAtLevel",
      value: function boundablesAtLevel() {
        if (1 === arguments.length) {
          var _t472 = arguments[0],
              _e352 = new x();

          return this.boundablesAtLevel(_t472, this._root, _e352), _e352;
        }

        if (3 === arguments.length) {
          var _t473 = arguments[0],
              _e353 = arguments[1],
              _n228 = arguments[2];
          if (u.isTrue(_t473 > -2), _e353.getLevel() === _t473) return _n228.add(_e353), null;

          for (var _s154 = _e353.getChildBoundables().iterator(); _s154.hasNext();) {
            var _e354 = _s154.next();

            _e354 instanceof ms ? this.boundablesAtLevel(_t473, _e354, _n228) : (u.isTrue(_e354 instanceof fs), -1 === _t473 && _n228.add(_e354));
          }

          return null;
        }
      }
    }, {
      key: "query",
      value: function query() {
        if (1 === arguments.length) {
          var _t474 = arguments[0];
          this.build();

          var _e355 = new x();

          return this.isEmpty() ? _e355 : (this.getIntersectsOp().intersects(this._root.getBounds(), _t474) && this.queryInternal(_t474, this._root, _e355), _e355);
        }

        if (2 === arguments.length) {
          var _t475 = arguments[0],
              _e356 = arguments[1];
          if (this.build(), this.isEmpty()) return null;
          this.getIntersectsOp().intersects(this._root.getBounds(), _t475) && this.queryInternal(_t475, this._root, _e356);
        }
      }
    }, {
      key: "build",
      value: function build() {
        if (this._built) return null;
        this._root = this._itemBoundables.isEmpty() ? this.createNode(0) : this.createHigherLevels(this._itemBoundables, -1), this._itemBoundables = null, this._built = !0;
      }
    }, {
      key: "getRoot",
      value: function getRoot() {
        return this.build(), this._root;
      }
    }, {
      key: "remove",
      value: function remove() {
        if (2 === arguments.length) {
          var _t476 = arguments[0],
              _e357 = arguments[1];
          return this.build(), !!this.getIntersectsOp().intersects(this._root.getBounds(), _t476) && this.remove(_t476, this._root, _e357);
        }

        if (3 === arguments.length) {
          var _t477 = arguments[0],
              _e358 = arguments[1],
              _n229 = arguments[2];

          var _s155 = this.removeItem(_e358, _n229);

          if (_s155) return !0;
          var _i76 = null;

          for (var _r44 = _e358.getChildBoundables().iterator(); _r44.hasNext();) {
            var _e359 = _r44.next();

            if (this.getIntersectsOp().intersects(_e359.getBounds(), _t477) && _e359 instanceof ms && (_s155 = this.remove(_t477, _e359, _n229))) {
              _i76 = _e359;
              break;
            }
          }

          return null !== _i76 && _i76.getChildBoundables().isEmpty() && _e358.getChildBoundables().remove(_i76), _s155;
        }
      }
    }, {
      key: "createHigherLevels",
      value: function createHigherLevels(t, e) {
        u.isTrue(!t.isEmpty());
        var n = this.createParentBoundables(t, e + 1);
        return 1 === n.size() ? n.get(0) : this.createHigherLevels(n, e + 1);
      }
    }, {
      key: "depth",
      value: function depth() {
        if (0 === arguments.length) return this.isEmpty() ? 0 : (this.build(), this.depth(this._root));

        if (1 === arguments.length) {
          var _t478 = 0;

          for (var _e360 = arguments[0].getChildBoundables().iterator(); _e360.hasNext();) {
            var _n230 = _e360.next();

            if (_n230 instanceof ms) {
              var _e361 = this.depth(_n230);

              _e361 > _t478 && (_t478 = _e361);
            }
          }

          return _t478 + 1;
        }
      }
    }, {
      key: "createParentBoundables",
      value: function createParentBoundables(t, e) {
        u.isTrue(!t.isEmpty());
        var n = new x();
        n.add(this.createNode(e));
        var s = new x(t);
        Ie.sort(s, this.getComparator());

        for (var _t479 = s.iterator(); _t479.hasNext();) {
          var _s156 = _t479.next();

          this.lastNode(n).getChildBoundables().size() === this.getNodeCapacity() && n.add(this.createNode(e)), this.lastNode(n).addChildBoundable(_s156);
        }

        return n;
      }
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        return this._built ? this._root.isEmpty() : this._itemBoundables.isEmpty();
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return xs;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [a];
      }
    }], [{
      key: "compareDoubles",
      value: function compareDoubles(t, e) {
        return t > e ? 1 : t < e ? -1 : 0;
      }
    }]);

    return xs;
  }();

  xs.IntersectsOp = function () {}, xs.constructor_ = function () {
    if (this._root = null, this._built = !1, this._itemBoundables = new x(), this._nodeCapacity = null, 0 === arguments.length) xs.constructor_.call(this, xs.DEFAULT_NODE_CAPACITY);else if (1 === arguments.length) {
      var _t480 = arguments[0];
      u.isTrue(_t480 > 1, "Node capacity must be greater than 1"), this._nodeCapacity = _t480;
    }
  }, xs.serialVersionUID = -0x35ef64c82d4c5400, xs.DEFAULT_NODE_CAPACITY = 10;

  var Es =
  /*#__PURE__*/
  function () {
    function Es() {
      _classCallCheck(this, Es);

      Es.constructor_.apply(this, arguments);
    }

    _createClass(Es, [{
      key: "distance",
      value: function distance(t, e) {}
    }, {
      key: "getClass",
      value: function getClass() {
        return Es;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Es;
  }();

  Es.constructor_ = function () {};

  var Is =
  /*#__PURE__*/
  function (_xs) {
    _inherits(Is, _xs);

    function Is() {
      var _this30;

      _classCallCheck(this, Is);

      _this30 = _possibleConstructorReturn(this, _getPrototypeOf(Is).call(this)), Is.constructor_.apply(_assertThisInitialized(_this30), arguments);
      return _this30;
    }

    _createClass(Is, [{
      key: "createParentBoundablesFromVerticalSlices",
      value: function createParentBoundablesFromVerticalSlices(t, e) {
        u.isTrue(t.length > 0);
        var n = new x();

        for (var _s157 = 0; _s157 < t.length; _s157++) {
          n.addAll(this.createParentBoundablesFromVerticalSlice(t[_s157], e));
        }

        return n;
      }
    }, {
      key: "createNode",
      value: function createNode(t) {
        return new Ns(t);
      }
    }, {
      key: "size",
      value: function size() {
        return 0 === arguments.length ? _get(_getPrototypeOf(Is.prototype), "size", this).call(this) : _get(_getPrototypeOf(Is.prototype), "size", this).apply(this, arguments);
      }
    }, {
      key: "insert",
      value: function insert() {
        if (!(2 === arguments.length && arguments[1] instanceof Object && arguments[0] instanceof N)) return _get(_getPrototypeOf(Is.prototype), "insert", this).apply(this, arguments);
        {
          var _t481 = arguments[0],
              _e362 = arguments[1];
          if (_t481.isNull()) return null;

          _get(_getPrototypeOf(Is.prototype), "insert", this).call(this, _t481, _e362);
        }
      }
    }, {
      key: "getIntersectsOp",
      value: function getIntersectsOp() {
        return Is.intersectsOp;
      }
    }, {
      key: "verticalSlices",
      value: function verticalSlices(t, e) {
        var n = Math.trunc(Math.ceil(t.size() / e)),
            s = new Array(e).fill(null),
            i = t.iterator();

        for (var _t482 = 0; _t482 < e; _t482++) {
          s[_t482] = new x();
          var _e363 = 0;

          for (; i.hasNext() && _e363 < n;) {
            var _n231 = i.next();

            s[_t482].add(_n231), _e363++;
          }
        }

        return s;
      }
    }, {
      key: "query",
      value: function query() {
        if (1 === arguments.length) {
          var _t483 = arguments[0];
          return _get(_getPrototypeOf(Is.prototype), "query", this).call(this, _t483);
        }

        if (2 === arguments.length) {
          var _t484 = arguments[0],
              _e364 = arguments[1];

          _get(_getPrototypeOf(Is.prototype), "query", this).call(this, _t484, _e364);
        }
      }
    }, {
      key: "getComparator",
      value: function getComparator() {
        return Is.yComparator;
      }
    }, {
      key: "createParentBoundablesFromVerticalSlice",
      value: function createParentBoundablesFromVerticalSlice(t, e) {
        return _get(_getPrototypeOf(Is.prototype), "createParentBoundables", this).call(this, t, e);
      }
    }, {
      key: "remove",
      value: function remove() {
        if (2 === arguments.length && arguments[1] instanceof Object && arguments[0] instanceof N) {
          var _t485 = arguments[0],
              _e365 = arguments[1];
          return _get(_getPrototypeOf(Is.prototype), "remove", this).call(this, _t485, _e365);
        }

        return _get(_getPrototypeOf(Is.prototype), "remove", this).apply(this, arguments);
      }
    }, {
      key: "depth",
      value: function depth() {
        return 0 === arguments.length ? _get(_getPrototypeOf(Is.prototype), "depth", this).call(this) : _get(_getPrototypeOf(Is.prototype), "depth", this).apply(this, arguments);
      }
    }, {
      key: "createParentBoundables",
      value: function createParentBoundables(t, e) {
        u.isTrue(!t.isEmpty());
        var n = Math.trunc(Math.ceil(t.size() / this.getNodeCapacity())),
            s = new x(t);
        Ie.sort(s, Is.xComparator);
        var i = this.verticalSlices(s, Math.trunc(Math.ceil(Math.sqrt(n))));
        return this.createParentBoundablesFromVerticalSlices(i, e);
      }
    }, {
      key: "nearestNeighbour",
      value: function nearestNeighbour() {
        if (1 === arguments.length) {
          if (_(arguments[0], Es)) {
            var _t486 = arguments[0],
                _e366 = new ys(this.getRoot(), this.getRoot(), _t486);

            return this.nearestNeighbour(_e366);
          }

          if (arguments[0] instanceof ys) {
            var _t487 = arguments[0];
            return this.nearestNeighbour(_t487, i.POSITIVE_INFINITY);
          }
        } else if (2 === arguments.length) {
          if (arguments[0] instanceof Is && _(arguments[1], Es)) {
            var _t488 = arguments[0],
                _e367 = arguments[1],
                _n232 = new ys(this.getRoot(), _t488.getRoot(), _e367);

            return this.nearestNeighbour(_n232);
          }

          if (arguments[0] instanceof ys && "number" == typeof arguments[1]) {
            var _t489 = arguments[0];
            var _e368 = arguments[1],
                _n233 = null;

            var _s158 = new ps();

            for (_s158.add(_t489); !_s158.isEmpty() && _e368 > 0;) {
              var _t490 = _s158.poll(),
                  _i77 = _t490.getDistance();

              if (_i77 >= _e368) break;
              _t490.isLeaves() ? (_e368 = _i77, _n233 = _t490) : _t490.expandToQueue(_s158, _e368);
            }

            return [_n233.getBoundable(0).getItem(), _n233.getBoundable(1).getItem()];
          }

          if (arguments[0] instanceof ys && Number.isInteger(arguments[1])) {
            var _t491 = arguments[0],
                _e369 = arguments[1];
            return this.nearestNeighbour(_t491, i.POSITIVE_INFINITY, _e369);
          }
        } else if (3 === arguments.length) {
          if (_(arguments[2], Es) && arguments[0] instanceof N && arguments[1] instanceof Object) {
            var _t492 = arguments[0],
                _e370 = arguments[1],
                _n234 = arguments[2],
                _s159 = new fs(_t492, _e370),
                _i78 = new ys(this.getRoot(), _s159, _n234);

            return this.nearestNeighbour(_i78)[0];
          }

          if (Number.isInteger(arguments[2]) && arguments[0] instanceof ys && "number" == typeof arguments[1]) {
            var _t493 = arguments[0],
                _e371 = arguments[1],
                _n235 = arguments[2];
            var _s160 = _e371;

            var _i79 = new ps();

            _i79.add(_t493);

            var _r45 = new ps();

            for (; !_i79.isEmpty() && _s160 >= 0;) {
              var _t494 = _i79.poll(),
                  _e372 = _t494.getDistance();

              if (_e372 >= _s160) break;
              if (_t494.isLeaves()) {
                if (_r45.size() < _n235) _r45.add(_t494);else {
                  _r45.peek().getDistance() > _e372 && (_r45.poll(), _r45.add(_t494)), _s160 = _r45.peek().getDistance();
                }
              } else _t494.expandToQueue(_i79, _s160);
            }

            return Is.getItems(_r45);
          }
        } else if (4 === arguments.length) {
          var _t495 = arguments[0],
              _e373 = arguments[1],
              _n236 = arguments[2],
              _s161 = arguments[3],
              _i80 = new fs(_t495, _e373),
              _r46 = new ys(this.getRoot(), _i80, _n236);

          return this.nearestNeighbour(_r46, _s161);
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Is;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [us, a];
      }
    }], [{
      key: "centreX",
      value: function centreX(t) {
        return Is.avg(t.getMinX(), t.getMaxX());
      }
    }, {
      key: "avg",
      value: function avg(t, e) {
        return (t + e) / 2;
      }
    }, {
      key: "getItems",
      value: function getItems(t) {
        var e = new Array(t.size()).fill(null);
        var n = 0;

        for (; !t.isEmpty();) {
          var _s162 = t.poll();

          e[n] = _s162.getBoundable(0).getItem(), n++;
        }

        return e;
      }
    }, {
      key: "centreY",
      value: function centreY(t) {
        return Is.avg(t.getMinY(), t.getMaxY());
      }
    }]);

    return Is;
  }(xs);

  var Ns =
  /*#__PURE__*/
  function (_ms) {
    _inherits(Ns, _ms);

    function Ns() {
      var _this31;

      _classCallCheck(this, Ns);

      _this31 = _possibleConstructorReturn(this, _getPrototypeOf(Ns).call(this)), Ns.constructor_.apply(_assertThisInitialized(_this31), arguments);
      return _this31;
    }

    _createClass(Ns, [{
      key: "computeBounds",
      value: function computeBounds() {
        var t = null;

        for (var _e374 = this.getChildBoundables().iterator(); _e374.hasNext();) {
          var _n237 = _e374.next();

          null === t ? t = new N(_n237.getBounds()) : t.expandToInclude(_n237.getBounds());
        }

        return t;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Ns;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Ns;
  }(ms);

  Ns.constructor_ = function () {
    var t = arguments[0];
    ms.constructor_.call(this, t);
  }, Is.STRtreeNode = Ns, Is.constructor_ = function () {
    if (0 === arguments.length) Is.constructor_.call(this, Is.DEFAULT_NODE_CAPACITY);else if (1 === arguments.length) {
      var _t496 = arguments[0];
      xs.constructor_.call(this, _t496);
    }
  }, Is.serialVersionUID = 0x39920f7d5f261e0, Is.xComparator = new (
  /*#__PURE__*/
  function () {
    function _class3() {
      _classCallCheck(this, _class3);
    }

    _createClass(_class3, [{
      key: "compare",
      value: function compare(t, e) {
        return xs.compareDoubles(Is.centreX(t.getBounds()), Is.centreX(e.getBounds()));
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [l];
      }
    }]);

    return _class3;
  }())(), Is.yComparator = new (
  /*#__PURE__*/
  function () {
    function _class4() {
      _classCallCheck(this, _class4);
    }

    _createClass(_class4, [{
      key: "compare",
      value: function compare(t, e) {
        return xs.compareDoubles(Is.centreY(t.getBounds()), Is.centreY(e.getBounds()));
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [l];
      }
    }]);

    return _class4;
  }())(), Is.intersectsOp = new (
  /*#__PURE__*/
  function () {
    function _class5() {
      _classCallCheck(this, _class5);
    }

    _createClass(_class5, [{
      key: "intersects",
      value: function intersects(t, e) {
        return t.intersects(e);
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [IntersectsOp];
      }
    }]);

    return _class5;
  }())(), Is.DEFAULT_NODE_CAPACITY = 10;
  var Cs = Object.freeze({
    STRtree: Is
  }),
      Ss = Object.freeze({
    kdtree: is,
    quadtree: ds,
    strtree: Cs
  });
  var ws = ["Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon"];

  var Ls =
  /*#__PURE__*/
  function () {
    function Ls(t) {
      _classCallCheck(this, Ls);

      this.geometryFactory = t || new Wt();
    }

    _createClass(Ls, [{
      key: "read",
      value: function read(t) {
        var e;
        var n = (e = "string" == typeof t ? JSON.parse(t) : t).type;
        if (!Ts[n]) throw new Error("Unknown GeoJSON type: " + e.type);
        return -1 !== ws.indexOf(n) ? Ts[n].call(this, e.coordinates) : "GeometryCollection" === n ? Ts[n].call(this, e.geometries) : Ts[n].call(this, e);
      }
    }, {
      key: "write",
      value: function write(t) {
        var e = t.getGeometryType();
        if (!Rs[e]) throw new Error("Geometry is not supported");
        return Rs[e].call(this, t);
      }
    }]);

    return Ls;
  }();

  var Ts = {
    Feature: function Feature(t) {
      var e = {};

      for (var _n238 in t) {
        e[_n238] = t[_n238];
      }

      if (t.geometry) {
        var _n239 = t.geometry.type;
        if (!Ts[_n239]) throw new Error("Unknown GeoJSON type: " + t.type);
        e.geometry = this.read(t.geometry);
      }

      return t.bbox && (e.bbox = Ts.bbox.call(this, t.bbox)), e;
    },
    FeatureCollection: function FeatureCollection(t) {
      var e = {};

      if (t.features) {
        e.features = [];

        for (var _n240 = 0; _n240 < t.features.length; ++_n240) {
          e.features.push(this.read(t.features[_n240]));
        }
      }

      return t.bbox && (e.bbox = this.parse.bbox.call(this, t.bbox)), e;
    },
    coordinates: function coordinates(t) {
      var e = [];

      for (var _n241 = 0; _n241 < t.length; ++_n241) {
        var _s163 = t[_n241];
        e.push(new g(_s163[0], _s163[1]));
      }

      return e;
    },
    bbox: function bbox(t) {
      return this.geometryFactory.createLinearRing([new g(t[0], t[1]), new g(t[2], t[1]), new g(t[2], t[3]), new g(t[0], t[3]), new g(t[0], t[1])]);
    },
    Point: function Point(t) {
      var e = new g(t[0], t[1]);
      return this.geometryFactory.createPoint(e);
    },
    MultiPoint: function MultiPoint(t) {
      var e = [];

      for (var _n242 = 0; _n242 < t.length; ++_n242) {
        e.push(Ts.Point.call(this, t[_n242]));
      }

      return this.geometryFactory.createMultiPoint(e);
    },
    LineString: function LineString(t) {
      var e = Ts.coordinates.call(this, t);
      return this.geometryFactory.createLineString(e);
    },
    MultiLineString: function MultiLineString(t) {
      var e = [];

      for (var _n243 = 0; _n243 < t.length; ++_n243) {
        e.push(Ts.LineString.call(this, t[_n243]));
      }

      return this.geometryFactory.createMultiLineString(e);
    },
    Polygon: function Polygon(t) {
      var e = Ts.coordinates.call(this, t[0]),
          n = this.geometryFactory.createLinearRing(e),
          s = [];

      for (var _e375 = 1; _e375 < t.length; ++_e375) {
        var _n244 = t[_e375],
            _i81 = Ts.coordinates.call(this, _n244),
            _r47 = this.geometryFactory.createLinearRing(_i81);

        s.push(_r47);
      }

      return this.geometryFactory.createPolygon(n, s);
    },
    MultiPolygon: function MultiPolygon(t) {
      var e = [];

      for (var _n245 = 0; _n245 < t.length; ++_n245) {
        var _s164 = t[_n245];
        e.push(Ts.Polygon.call(this, _s164));
      }

      return this.geometryFactory.createMultiPolygon(e);
    },
    GeometryCollection: function GeometryCollection(t) {
      var e = [];

      for (var _n246 = 0; _n246 < t.length; ++_n246) {
        var _s165 = t[_n246];
        e.push(this.read(_s165));
      }

      return this.geometryFactory.createGeometryCollection(e);
    }
  },
      Rs = {
    coordinate: function coordinate(t) {
      return [t.x, t.y];
    },
    Point: function Point(t) {
      return {
        type: "Point",
        coordinates: Rs.coordinate.call(this, t.getCoordinate())
      };
    },
    MultiPoint: function MultiPoint(t) {
      var e = [];

      for (var _n247 = 0; _n247 < t._geometries.length; ++_n247) {
        var _s166 = t._geometries[_n247],
            _i82 = Rs.Point.call(this, _s166);

        e.push(_i82.coordinates);
      }

      return {
        type: "MultiPoint",
        coordinates: e
      };
    },
    LineString: function LineString(t) {
      var e = [],
          n = t.getCoordinates();

      for (var _t497 = 0; _t497 < n.length; ++_t497) {
        var _s167 = n[_t497];
        e.push(Rs.coordinate.call(this, _s167));
      }

      return {
        type: "LineString",
        coordinates: e
      };
    },
    MultiLineString: function MultiLineString(t) {
      var e = [];

      for (var _n248 = 0; _n248 < t._geometries.length; ++_n248) {
        var _s168 = t._geometries[_n248],
            _i83 = Rs.LineString.call(this, _s168);

        e.push(_i83.coordinates);
      }

      return {
        type: "MultiLineString",
        coordinates: e
      };
    },
    Polygon: function Polygon(t) {
      var e = [],
          n = Rs.LineString.call(this, t._shell);
      e.push(n.coordinates);

      for (var _n249 = 0; _n249 < t._holes.length; ++_n249) {
        var _s169 = t._holes[_n249],
            _i84 = Rs.LineString.call(this, _s169);

        e.push(_i84.coordinates);
      }

      return {
        type: "Polygon",
        coordinates: e
      };
    },
    MultiPolygon: function MultiPolygon(t) {
      var e = [];

      for (var _n250 = 0; _n250 < t._geometries.length; ++_n250) {
        var _s170 = t._geometries[_n250],
            _i85 = Rs.Polygon.call(this, _s170);

        e.push(_i85.coordinates);
      }

      return {
        type: "MultiPolygon",
        coordinates: e
      };
    },
    GeometryCollection: function GeometryCollection(t) {
      var e = [];

      for (var _n251 = 0; _n251 < t._geometries.length; ++_n251) {
        var _s171 = t._geometries[_n251],
            _i86 = _s171.getGeometryType();

        e.push(Rs[_i86].call(this, _s171));
      }

      return {
        type: "GeometryCollection",
        geometries: e
      };
    }
  };

  function Ps(t) {
    return [t.x, t.y];
  }

  var vs = Object.freeze({
    GeoJSONReader:
    /*#__PURE__*/
    function () {
      function GeoJSONReader(t) {
        _classCallCheck(this, GeoJSONReader);

        this.parser = new Ls(t || new Wt());
      }

      _createClass(GeoJSONReader, [{
        key: "read",
        value: function read(t) {
          return this.parser.read(t);
        }
      }]);

      return GeoJSONReader;
    }(),
    GeoJSONWriter:
    /*#__PURE__*/
    function () {
      function GeoJSONWriter() {
        _classCallCheck(this, GeoJSONWriter);

        this.parser = new Ls(this.geometryFactory);
      }

      _createClass(GeoJSONWriter, [{
        key: "write",
        value: function write(t) {
          return this.parser.write(t);
        }
      }]);

      return GeoJSONWriter;
    }(),
    OL3Parser:
    /*#__PURE__*/
    function () {
      function OL3Parser(t, e) {
        _classCallCheck(this, OL3Parser);

        this.geometryFactory = t || new Wt(), this.ol = e || "undefined" != typeof ol && ol;
      }

      _createClass(OL3Parser, [{
        key: "inject",
        value: function inject(t, e, n, s, i, r, o, l) {
          this.ol = {
            geom: {
              Point: t,
              LineString: e,
              LinearRing: n,
              Polygon: s,
              MultiPoint: i,
              MultiLineString: r,
              MultiPolygon: o,
              GeometryCollection: l
            }
          };
        }
      }, {
        key: "read",
        value: function read(t) {
          var e = this.ol;
          return t instanceof e.geom.Point ? this.convertFromPoint(t) : t instanceof e.geom.LineString ? this.convertFromLineString(t) : t instanceof e.geom.LinearRing ? this.convertFromLinearRing(t) : t instanceof e.geom.Polygon ? this.convertFromPolygon(t) : t instanceof e.geom.MultiPoint ? this.convertFromMultiPoint(t) : t instanceof e.geom.MultiLineString ? this.convertFromMultiLineString(t) : t instanceof e.geom.MultiPolygon ? this.convertFromMultiPolygon(t) : t instanceof e.geom.GeometryCollection ? this.convertFromCollection(t) : void 0;
        }
      }, {
        key: "convertFromPoint",
        value: function convertFromPoint(t) {
          var e = t.getCoordinates();
          return this.geometryFactory.createPoint(new g(e[0], e[1]));
        }
      }, {
        key: "convertFromLineString",
        value: function convertFromLineString(t) {
          return this.geometryFactory.createLineString(t.getCoordinates().map(function (t) {
            return new g(t[0], t[1]);
          }));
        }
      }, {
        key: "convertFromLinearRing",
        value: function convertFromLinearRing(t) {
          return this.geometryFactory.createLinearRing(t.getCoordinates().map(function (t) {
            return new g(t[0], t[1]);
          }));
        }
      }, {
        key: "convertFromPolygon",
        value: function convertFromPolygon(t) {
          var e = t.getLinearRings();
          var n = null;
          var s = [];

          for (var _t498 = 0; _t498 < e.length; _t498++) {
            var _i87 = this.convertFromLinearRing(e[_t498]);

            0 === _t498 ? n = _i87 : s.push(_i87);
          }

          return this.geometryFactory.createPolygon(n, s);
        }
      }, {
        key: "convertFromMultiPoint",
        value: function convertFromMultiPoint(t) {
          var e = t.getPoints().map(function (t) {
            return this.convertFromPoint(t);
          }, this);
          return this.geometryFactory.createMultiPoint(e);
        }
      }, {
        key: "convertFromMultiLineString",
        value: function convertFromMultiLineString(t) {
          var e = t.getLineStrings().map(function (t) {
            return this.convertFromLineString(t);
          }, this);
          return this.geometryFactory.createMultiLineString(e);
        }
      }, {
        key: "convertFromMultiPolygon",
        value: function convertFromMultiPolygon(t) {
          var e = t.getPolygons().map(function (t) {
            return this.convertFromPolygon(t);
          }, this);
          return this.geometryFactory.createMultiPolygon(e);
        }
      }, {
        key: "convertFromCollection",
        value: function convertFromCollection(t) {
          var e = t.getGeometries().map(function (t) {
            return this.read(t);
          }, this);
          return this.geometryFactory.createGeometryCollection(e);
        }
      }, {
        key: "write",
        value: function write(t) {
          return "Point" === t.getGeometryType() ? this.convertToPoint(t.getCoordinate()) : "LineString" === t.getGeometryType() ? this.convertToLineString(t) : "LinearRing" === t.getGeometryType() ? this.convertToLinearRing(t) : "Polygon" === t.getGeometryType() ? this.convertToPolygon(t) : "MultiPoint" === t.getGeometryType() ? this.convertToMultiPoint(t) : "MultiLineString" === t.getGeometryType() ? this.convertToMultiLineString(t) : "MultiPolygon" === t.getGeometryType() ? this.convertToMultiPolygon(t) : "GeometryCollection" === t.getGeometryType() ? this.convertToCollection(t) : void 0;
        }
      }, {
        key: "convertToPoint",
        value: function convertToPoint(t) {
          return new this.ol.geom.Point([t.x, t.y]);
        }
      }, {
        key: "convertToLineString",
        value: function convertToLineString(t) {
          var e = t._points._coordinates.map(Ps);

          return new this.ol.geom.LineString(e);
        }
      }, {
        key: "convertToLinearRing",
        value: function convertToLinearRing(t) {
          var e = t._points._coordinates.map(Ps);

          return new this.ol.geom.LinearRing(e);
        }
      }, {
        key: "convertToPolygon",
        value: function convertToPolygon(t) {
          var e = [t._shell._points._coordinates.map(Ps)];

          for (var _n252 = 0; _n252 < t._holes.length; _n252++) {
            e.push(t._holes[_n252]._points._coordinates.map(Ps));
          }

          return new this.ol.geom.Polygon(e);
        }
      }, {
        key: "convertToMultiPoint",
        value: function convertToMultiPoint(t) {
          return new this.ol.geom.MultiPoint(t.getCoordinates().map(Ps));
        }
      }, {
        key: "convertToMultiLineString",
        value: function convertToMultiLineString(t) {
          var e = [];

          for (var _n253 = 0; _n253 < t._geometries.length; _n253++) {
            e.push(this.convertToLineString(t._geometries[_n253]).getCoordinates());
          }

          return new this.ol.geom.MultiLineString(e);
        }
      }, {
        key: "convertToMultiPolygon",
        value: function convertToMultiPolygon(t) {
          var e = [];

          for (var _n254 = 0; _n254 < t._geometries.length; _n254++) {
            e.push(this.convertToPolygon(t._geometries[_n254]).getCoordinates());
          }

          return new this.ol.geom.MultiPolygon(e);
        }
      }, {
        key: "convertToCollection",
        value: function convertToCollection(t) {
          var e = [];

          for (var _n255 = 0; _n255 < t._geometries.length; _n255++) {
            var _s172 = t._geometries[_n255];
            e.push(this.write(_s172));
          }

          return new this.ol.geom.GeometryCollection(e);
        }
      }]);

      return OL3Parser;
    }(),
    WKTReader:
    /*#__PURE__*/
    function () {
      function WKTReader(t) {
        _classCallCheck(this, WKTReader);

        this.parser = new Zt(t || new Wt());
      }

      _createClass(WKTReader, [{
        key: "read",
        value: function read(t) {
          return this.parser.read(t);
        }
      }]);

      return WKTReader;
    }(),
    WKTWriter: $t
  });

  var Os =
  /*#__PURE__*/
  function () {
    function Os() {
      _classCallCheck(this, Os);

      Os.constructor_.apply(this, arguments);
    }

    _createClass(Os, [{
      key: "getClass",
      value: function getClass() {
        return Os;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "relativeSign",
      value: function relativeSign(t, e) {
        return t < e ? -1 : t > e ? 1 : 0;
      }
    }, {
      key: "compare",
      value: function compare(t, e, n) {
        if (e.equals2D(n)) return 0;
        var s = Os.relativeSign(e.x, n.x),
            i = Os.relativeSign(e.y, n.y);

        switch (t) {
          case 0:
            return Os.compareValue(s, i);

          case 1:
            return Os.compareValue(i, s);

          case 2:
            return Os.compareValue(i, -s);

          case 3:
            return Os.compareValue(-s, i);

          case 4:
            return Os.compareValue(-s, -i);

          case 5:
            return Os.compareValue(-i, -s);

          case 6:
            return Os.compareValue(-i, s);

          case 7:
            return Os.compareValue(s, -i);
        }

        return u.shouldNeverReachHere("invalid octant value"), 0;
      }
    }, {
      key: "compareValue",
      value: function compareValue(t, e) {
        return t < 0 ? -1 : t > 0 ? 1 : e < 0 ? -1 : e > 0 ? 1 : 0;
      }
    }]);

    return Os;
  }();

  Os.constructor_ = function () {};

  var bs =
  /*#__PURE__*/
  function () {
    function bs() {
      _classCallCheck(this, bs);

      bs.constructor_.apply(this, arguments);
    }

    _createClass(bs, [{
      key: "getCoordinate",
      value: function getCoordinate() {
        return this.coord;
      }
    }, {
      key: "print",
      value: function print(t) {
        t.print(this.coord), t.print(" seg # = " + this.segmentIndex);
      }
    }, {
      key: "compareTo",
      value: function compareTo(t) {
        var e = t;
        return this.segmentIndex < e.segmentIndex ? -1 : this.segmentIndex > e.segmentIndex ? 1 : this.coord.equals2D(e.coord) ? 0 : Os.compare(this._segmentOctant, this.coord, e.coord);
      }
    }, {
      key: "isEndPoint",
      value: function isEndPoint(t) {
        return 0 === this.segmentIndex && !this._isInterior || this.segmentIndex === t;
      }
    }, {
      key: "isInterior",
      value: function isInterior() {
        return this._isInterior;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return bs;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [r];
      }
    }]);

    return bs;
  }();

  bs.constructor_ = function () {
    this._segString = null, this.coord = null, this.segmentIndex = null, this._segmentOctant = null, this._isInterior = null;
    var t = arguments[0],
        e = arguments[1],
        n = arguments[2],
        s = arguments[3];
    this._segString = t, this.coord = new g(e), this.segmentIndex = n, this._segmentOctant = s, this._isInterior = !e.equals2D(t.getCoordinate(n));
  };

  var Ms =
  /*#__PURE__*/
  function () {
    function Ms() {
      _classCallCheck(this, Ms);

      Ms.constructor_.apply(this, arguments);
    }

    _createClass(Ms, [{
      key: "getSplitCoordinates",
      value: function getSplitCoordinates() {
        var t = new I();
        this.addEndpoints();
        var e = this.iterator();
        var n = e.next();

        for (; e.hasNext();) {
          var _s173 = e.next();

          this.addEdgeCoordinates(n, _s173, t), n = _s173;
        }

        return t.toCoordinateArray();
      }
    }, {
      key: "addCollapsedNodes",
      value: function addCollapsedNodes() {
        var t = new x();
        this.findCollapsesFromInsertedNodes(t), this.findCollapsesFromExistingVertices(t);

        for (var _e376 = t.iterator(); _e376.hasNext();) {
          var _t499 = _e376.next().intValue();

          this.add(this._edge.getCoordinate(_t499), _t499);
        }
      }
    }, {
      key: "print",
      value: function print(t) {
        t.println("Intersections:");

        for (var _e377 = this.iterator(); _e377.hasNext();) {
          _e377.next().print(t);
        }
      }
    }, {
      key: "findCollapsesFromExistingVertices",
      value: function findCollapsesFromExistingVertices(t) {
        for (var _e378 = 0; _e378 < this._edge.size() - 2; _e378++) {
          var _n256 = this._edge.getCoordinate(_e378),
              _s174 = (this._edge.getCoordinate(_e378 + 1), this._edge.getCoordinate(_e378 + 2));

          _n256.equals2D(_s174) && t.add(new L(_e378 + 1));
        }
      }
    }, {
      key: "addEdgeCoordinates",
      value: function addEdgeCoordinates(t, e, n) {
        e.segmentIndex, t.segmentIndex;

        var s = this._edge.getCoordinate(e.segmentIndex),
            i = e.isInterior() || !e.coord.equals2D(s);

        n.add(new g(t.coord), !1);

        for (var _s175 = t.segmentIndex + 1; _s175 <= e.segmentIndex; _s175++) {
          n.add(this._edge.getCoordinate(_s175));
        }

        i && n.add(new g(e.coord));
      }
    }, {
      key: "iterator",
      value: function iterator() {
        return this._nodeMap.values().iterator();
      }
    }, {
      key: "addSplitEdges",
      value: function addSplitEdges(t) {
        this.addEndpoints(), this.addCollapsedNodes();
        var e = this.iterator();
        var n = e.next();

        for (; e.hasNext();) {
          var _s176 = e.next(),
              _i88 = this.createSplitEdge(n, _s176);

          t.add(_i88), n = _s176;
        }
      }
    }, {
      key: "findCollapseIndex",
      value: function findCollapseIndex(t, e, n) {
        if (!t.coord.equals2D(e.coord)) return !1;
        var s = e.segmentIndex - t.segmentIndex;
        return e.isInterior() || s--, 1 === s && (n[0] = t.segmentIndex + 1, !0);
      }
    }, {
      key: "findCollapsesFromInsertedNodes",
      value: function findCollapsesFromInsertedNodes(t) {
        var e = new Array(1).fill(null),
            n = this.iterator();
        var s = n.next();

        for (; n.hasNext();) {
          var _i89 = n.next();

          this.findCollapseIndex(s, _i89, e) && t.add(new L(e[0])), s = _i89;
        }
      }
    }, {
      key: "getEdge",
      value: function getEdge() {
        return this._edge;
      }
    }, {
      key: "addEndpoints",
      value: function addEndpoints() {
        var t = this._edge.size() - 1;
        this.add(this._edge.getCoordinate(0), 0), this.add(this._edge.getCoordinate(t), t);
      }
    }, {
      key: "createSplitEdge",
      value: function createSplitEdge(t, e) {
        var n = e.segmentIndex - t.segmentIndex + 2;

        var s = this._edge.getCoordinate(e.segmentIndex),
            i = e.isInterior() || !e.coord.equals2D(s);

        i || n--;
        var r = new Array(n).fill(null);
        var o = 0;
        r[o++] = new g(t.coord);

        for (var _n257 = t.segmentIndex + 1; _n257 <= e.segmentIndex; _n257++) {
          r[o++] = this._edge.getCoordinate(_n257);
        }

        return i && (r[o] = new g(e.coord)), new Gs(r, this._edge.getData());
      }
    }, {
      key: "add",
      value: function add(t, e) {
        var n = new bs(this._edge, t, e, this._edge.getSegmentOctant(e)),
            s = this._nodeMap.get(n);

        return null !== s ? (u.isTrue(s.coord.equals2D(t), "Found equal nodes with different coordinates"), s) : (this._nodeMap.put(n, n), n);
      }
    }, {
      key: "checkSplitEdgesCorrectness",
      value: function checkSplitEdgesCorrectness(t) {
        var e = this._edge.getCoordinates(),
            n = t.get(0).getCoordinate(0);

        if (!n.equals2D(e[0])) throw new c("bad split edge start point at " + n);
        var s = t.get(t.size() - 1).getCoordinates(),
            i = s[s.length - 1];
        if (!i.equals2D(e[e.length - 1])) throw new c("bad split edge end point at " + i);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Ms;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Ms;
  }();

  Ms.constructor_ = function () {
    this._nodeMap = new ot(), this._edge = null;
    var t = arguments[0];
    this._edge = t;
  };

  var As =
  /*#__PURE__*/
  function () {
    function As() {
      _classCallCheck(this, As);

      As.constructor_.apply(this, arguments);
    }

    _createClass(As, [{
      key: "getClass",
      value: function getClass() {
        return As;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "octant",
      value: function octant() {
        if ("number" == typeof arguments[0] && "number" == typeof arguments[1]) {
          var _t500 = arguments[0],
              _e379 = arguments[1];
          if (0 === _t500 && 0 === _e379) throw new n("Cannot compute the octant for point ( " + _t500 + ", " + _e379 + " )");

          var _s177 = Math.abs(_t500),
              _i90 = Math.abs(_e379);

          return _t500 >= 0 ? _e379 >= 0 ? _s177 >= _i90 ? 0 : 1 : _s177 >= _i90 ? 7 : 6 : _e379 >= 0 ? _s177 >= _i90 ? 3 : 2 : _s177 >= _i90 ? 4 : 5;
        }

        if (arguments[0] instanceof g && arguments[1] instanceof g) {
          var _t501 = arguments[0],
              _e380 = arguments[1],
              _s178 = _e380.x - _t501.x,
              _i91 = _e380.y - _t501.y;

          if (0 === _s178 && 0 === _i91) throw new n("Cannot compute the octant for two identical points " + _t501);
          return As.octant(_s178, _i91);
        }
      }
    }]);

    return As;
  }();

  As.constructor_ = function () {};

  var Ds =
  /*#__PURE__*/
  function () {
    function Ds() {
      _classCallCheck(this, Ds);

      Ds.constructor_.apply(this, arguments);
    }

    _createClass(Ds, [{
      key: "getCoordinates",
      value: function getCoordinates() {}
    }, {
      key: "size",
      value: function size() {}
    }, {
      key: "getCoordinate",
      value: function getCoordinate(t) {}
    }, {
      key: "isClosed",
      value: function isClosed() {}
    }, {
      key: "setData",
      value: function setData(t) {}
    }, {
      key: "getData",
      value: function getData() {}
    }, {
      key: "getClass",
      value: function getClass() {
        return Ds;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Ds;
  }();

  Ds.constructor_ = function () {};

  var Fs =
  /*#__PURE__*/
  function () {
    function Fs() {
      _classCallCheck(this, Fs);

      Fs.constructor_.apply(this, arguments);
    }

    _createClass(Fs, [{
      key: "addIntersection",
      value: function addIntersection(t, e) {}
    }, {
      key: "getClass",
      value: function getClass() {
        return Fs;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [Ds];
      }
    }]);

    return Fs;
  }();

  Fs.constructor_ = function () {};

  var Gs =
  /*#__PURE__*/
  function () {
    function Gs() {
      _classCallCheck(this, Gs);

      Gs.constructor_.apply(this, arguments);
    }

    _createClass(Gs, [{
      key: "getCoordinates",
      value: function getCoordinates() {
        return this._pts;
      }
    }, {
      key: "size",
      value: function size() {
        return this._pts.length;
      }
    }, {
      key: "getCoordinate",
      value: function getCoordinate(t) {
        return this._pts[t];
      }
    }, {
      key: "isClosed",
      value: function isClosed() {
        return this._pts[0].equals(this._pts[this._pts.length - 1]);
      }
    }, {
      key: "getSegmentOctant",
      value: function getSegmentOctant(t) {
        return t === this._pts.length - 1 ? -1 : this.safeOctant(this.getCoordinate(t), this.getCoordinate(t + 1));
      }
    }, {
      key: "setData",
      value: function setData(t) {
        this._data = t;
      }
    }, {
      key: "safeOctant",
      value: function safeOctant(t, e) {
        return t.equals2D(e) ? 0 : As.octant(t, e);
      }
    }, {
      key: "getData",
      value: function getData() {
        return this._data;
      }
    }, {
      key: "addIntersection",
      value: function addIntersection() {
        if (2 === arguments.length) {
          var _t502 = arguments[0],
              _e381 = arguments[1];
          this.addIntersectionNode(_t502, _e381);
        } else if (4 === arguments.length) {
          var _t503 = arguments[0],
              _e382 = arguments[1],
              _n258 = arguments[3],
              _s179 = new g(_t503.getIntersection(_n258));

          this.addIntersection(_s179, _e382);
        }
      }
    }, {
      key: "toString",
      value: function toString() {
        return $t.toLineString(new Yt(this._pts));
      }
    }, {
      key: "getNodeList",
      value: function getNodeList() {
        return this._nodeList;
      }
    }, {
      key: "addIntersectionNode",
      value: function addIntersectionNode(t, e) {
        var n = e;
        var s = n + 1;

        if (s < this._pts.length) {
          var _e383 = this._pts[s];
          t.equals2D(_e383) && (n = s);
        }

        return this._nodeList.add(t, n);
      }
    }, {
      key: "addIntersections",
      value: function addIntersections(t, e, n) {
        for (var _s180 = 0; _s180 < t.getIntersectionNum(); _s180++) {
          this.addIntersection(t, e, n, _s180);
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Gs;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [Fs];
      }
    }], [{
      key: "getNodedSubstrings",
      value: function getNodedSubstrings() {
        if (1 === arguments.length) {
          var _t504 = arguments[0],
              _e384 = new x();

          return Gs.getNodedSubstrings(_t504, _e384), _e384;
        }

        if (2 === arguments.length) {
          var _t505 = arguments[0],
              _e385 = arguments[1];

          for (var _n259 = _t505.iterator(); _n259.hasNext();) {
            _n259.next().getNodeList().addSplitEdges(_e385);
          }
        }
      }
    }]);

    return Gs;
  }();

  Gs.constructor_ = function () {
    this._nodeList = new Ms(this), this._pts = null, this._data = null;
    var t = arguments[0],
        e = arguments[1];
    this._pts = t, this._data = e;
  };

  var qs =
  /*#__PURE__*/
  function () {
    function qs() {
      _classCallCheck(this, qs);

      qs.constructor_.apply(this, arguments);
    }

    _createClass(qs, [{
      key: "overlap",
      value: function overlap() {
        if (2 === arguments.length) ;else if (4 === arguments.length) {
          var _t506 = arguments[0],
              _e386 = arguments[1],
              _n260 = arguments[2],
              _s181 = arguments[3];
          _t506.getLineSegment(_e386, this._overlapSeg1), _n260.getLineSegment(_s181, this._overlapSeg2), this.overlap(this._overlapSeg1, this._overlapSeg2);
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return qs;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return qs;
  }();

  qs.constructor_ = function () {
    this._overlapSeg1 = new ne(), this._overlapSeg2 = new ne();
  };

  var Bs =
  /*#__PURE__*/
  function () {
    function Bs() {
      _classCallCheck(this, Bs);

      Bs.constructor_.apply(this, arguments);
    }

    _createClass(Bs, [{
      key: "getLineSegment",
      value: function getLineSegment(t, e) {
        e.p0 = this._pts[t], e.p1 = this._pts[t + 1];
      }
    }, {
      key: "computeSelect",
      value: function computeSelect(t, e, n, s) {
        var i = this._pts[e],
            r = this._pts[n];
        if (n - e == 1) return s.select(this, e), null;
        if (!t.intersects(i, r)) return null;
        var o = Math.trunc((e + n) / 2);
        e < o && this.computeSelect(t, e, o, s), o < n && this.computeSelect(t, o, n, s);
      }
    }, {
      key: "getCoordinates",
      value: function getCoordinates() {
        var t = new Array(this._end - this._start + 1).fill(null);
        var e = 0;

        for (var _n261 = this._start; _n261 <= this._end; _n261++) {
          t[e++] = this._pts[_n261];
        }

        return t;
      }
    }, {
      key: "computeOverlaps",
      value: function computeOverlaps() {
        if (2 === arguments.length) {
          var _t507 = arguments[0],
              _e387 = arguments[1];
          this.computeOverlaps(this._start, this._end, _t507, _t507._start, _t507._end, _e387);
        } else if (6 === arguments.length) {
          var _t508 = arguments[0],
              _e388 = arguments[1],
              _n262 = arguments[2],
              _s182 = arguments[3],
              _i92 = arguments[4],
              _r48 = arguments[5];
          if (_e388 - _t508 == 1 && _i92 - _s182 == 1) return _r48.overlap(this, _t508, _n262, _s182), null;
          if (!this.overlaps(_t508, _e388, _n262, _s182, _i92)) return null;

          var _o27 = Math.trunc((_t508 + _e388) / 2),
              _l24 = Math.trunc((_s182 + _i92) / 2);

          _t508 < _o27 && (_s182 < _l24 && this.computeOverlaps(_t508, _o27, _n262, _s182, _l24, _r48), _l24 < _i92 && this.computeOverlaps(_t508, _o27, _n262, _l24, _i92, _r48)), _o27 < _e388 && (_s182 < _l24 && this.computeOverlaps(_o27, _e388, _n262, _s182, _l24, _r48), _l24 < _i92 && this.computeOverlaps(_o27, _e388, _n262, _l24, _i92, _r48));
        }
      }
    }, {
      key: "setId",
      value: function setId(t) {
        this._id = t;
      }
    }, {
      key: "select",
      value: function select(t, e) {
        this.computeSelect(t, this._start, this._end, e);
      }
    }, {
      key: "getEnvelope",
      value: function getEnvelope() {
        if (null === this._env) {
          var _t509 = this._pts[this._start],
              _e389 = this._pts[this._end];
          this._env = new N(_t509, _e389);
        }

        return this._env;
      }
    }, {
      key: "overlaps",
      value: function overlaps(t, e, n, s, i) {
        return N.intersects(this._pts[t], this._pts[e], n._pts[s], n._pts[i]);
      }
    }, {
      key: "getEndIndex",
      value: function getEndIndex() {
        return this._end;
      }
    }, {
      key: "getStartIndex",
      value: function getStartIndex() {
        return this._start;
      }
    }, {
      key: "getContext",
      value: function getContext() {
        return this._context;
      }
    }, {
      key: "getId",
      value: function getId() {
        return this._id;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Bs;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Bs;
  }();

  Bs.constructor_ = function () {
    this._pts = null, this._start = null, this._end = null, this._env = null, this._context = null, this._id = null;
    var t = arguments[0],
        e = arguments[1],
        n = arguments[2],
        s = arguments[3];
    this._pts = t, this._start = e, this._end = n, this._context = s;
  };

  var Vs =
  /*#__PURE__*/
  function () {
    function Vs() {
      _classCallCheck(this, Vs);

      Vs.constructor_.apply(this, arguments);
    }

    _createClass(Vs, [{
      key: "getClass",
      value: function getClass() {
        return Vs;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "getChainStartIndices",
      value: function getChainStartIndices(t) {
        var e = 0;
        var n = new x();
        n.add(new L(e));

        do {
          var _s183 = Vs.findChainEnd(t, e);

          n.add(new L(_s183)), e = _s183;
        } while (e < t.length - 1);

        return Vs.toIntArray(n);
      }
    }, {
      key: "findChainEnd",
      value: function findChainEnd(t, e) {
        var n = e;

        for (; n < t.length - 1 && t[n].equals2D(t[n + 1]);) {
          n++;
        }

        if (n >= t.length - 1) return t.length - 1;
        var s = Nn.quadrant(t[n], t[n + 1]);
        var i = e + 1;

        for (; i < t.length;) {
          if (!t[i - 1].equals2D(t[i])) {
            if (Nn.quadrant(t[i - 1], t[i]) !== s) break;
          }

          i++;
        }

        return i - 1;
      }
    }, {
      key: "getChains",
      value: function getChains() {
        if (1 === arguments.length) {
          var _t510 = arguments[0];
          return Vs.getChains(_t510, null);
        }

        if (2 === arguments.length) {
          var _t511 = arguments[0],
              _e390 = arguments[1],
              _n263 = new x(),
              _s184 = Vs.getChainStartIndices(_t511);

          for (var _i93 = 0; _i93 < _s184.length - 1; _i93++) {
            var _r49 = new Bs(_t511, _s184[_i93], _s184[_i93 + 1], _e390);

            _n263.add(_r49);
          }

          return _n263;
        }
      }
    }, {
      key: "toIntArray",
      value: function toIntArray(t) {
        var e = new Array(t.size()).fill(null);

        for (var _n264 = 0; _n264 < e.length; _n264++) {
          e[_n264] = t.get(_n264).intValue();
        }

        return e;
      }
    }]);

    return Vs;
  }();

  Vs.constructor_ = function () {};

  var zs =
  /*#__PURE__*/
  function () {
    function zs() {
      _classCallCheck(this, zs);

      zs.constructor_.apply(this, arguments);
    }

    _createClass(zs, [{
      key: "computeNodes",
      value: function computeNodes(t) {}
    }, {
      key: "getNodedSubstrings",
      value: function getNodedSubstrings() {}
    }, {
      key: "getClass",
      value: function getClass() {
        return zs;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return zs;
  }();

  zs.constructor_ = function () {};

  var Ys =
  /*#__PURE__*/
  function () {
    function Ys() {
      _classCallCheck(this, Ys);

      Ys.constructor_.apply(this, arguments);
    }

    _createClass(Ys, [{
      key: "setSegmentIntersector",
      value: function setSegmentIntersector(t) {
        this._segInt = t;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Ys;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [zs];
      }
    }]);

    return Ys;
  }();

  Ys.constructor_ = function () {
    if (this._segInt = null, 0 === arguments.length) ;else if (1 === arguments.length) {
      var _t512 = arguments[0];
      this.setSegmentIntersector(_t512);
    }
  };

  var Us =
  /*#__PURE__*/
  function (_Ys) {
    _inherits(Us, _Ys);

    function Us() {
      var _this32;

      _classCallCheck(this, Us);

      _this32 = _possibleConstructorReturn(this, _getPrototypeOf(Us).call(this)), Us.constructor_.apply(_assertThisInitialized(_this32), arguments);
      return _this32;
    }

    _createClass(Us, [{
      key: "getMonotoneChains",
      value: function getMonotoneChains() {
        return this._monoChains;
      }
    }, {
      key: "getNodedSubstrings",
      value: function getNodedSubstrings() {
        return Gs.getNodedSubstrings(this._nodedSegStrings);
      }
    }, {
      key: "getIndex",
      value: function getIndex() {
        return this._index;
      }
    }, {
      key: "add",
      value: function add(t) {
        for (var _e391 = Vs.getChains(t.getCoordinates(), t).iterator(); _e391.hasNext();) {
          var _t513 = _e391.next();

          _t513.setId(this._idCounter++), this._index.insert(_t513.getEnvelope(), _t513), this._monoChains.add(_t513);
        }
      }
    }, {
      key: "computeNodes",
      value: function computeNodes(t) {
        this._nodedSegStrings = t;

        for (var _e392 = t.iterator(); _e392.hasNext();) {
          this.add(_e392.next());
        }

        this.intersectChains();
      }
    }, {
      key: "intersectChains",
      value: function intersectChains() {
        var t = new ks(this._segInt);

        for (var _e393 = this._monoChains.iterator(); _e393.hasNext();) {
          var _n265 = _e393.next();

          for (var _e394 = this._index.query(_n265.getEnvelope()).iterator(); _e394.hasNext();) {
            var _s185 = _e394.next();

            if (_s185.getId() > _n265.getId() && (_n265.computeOverlaps(_s185, t), this._nOverlaps++), this._segInt.isDone()) return null;
          }
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Us;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Us;
  }(Ys);

  var ks =
  /*#__PURE__*/
  function (_qs) {
    _inherits(ks, _qs);

    function ks() {
      var _this33;

      _classCallCheck(this, ks);

      _this33 = _possibleConstructorReturn(this, _getPrototypeOf(ks).call(this)), ks.constructor_.apply(_assertThisInitialized(_this33), arguments);
      return _this33;
    }

    _createClass(ks, [{
      key: "overlap",
      value: function overlap() {
        if (4 !== arguments.length) return _get(_getPrototypeOf(ks.prototype), "overlap", this).apply(this, arguments);
        {
          var _t514 = arguments[0],
              _e395 = arguments[1],
              _n266 = arguments[2],
              _s186 = arguments[3],
              _i94 = _t514.getContext(),
              _r50 = _n266.getContext();

          this._si.processIntersections(_i94, _e395, _r50, _s186);
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return ks;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return ks;
  }(qs);

  ks.constructor_ = function () {
    this._si = null;
    var t = arguments[0];
    this._si = t;
  }, Us.SegmentOverlapAction = ks, Us.constructor_ = function () {
    if (this._monoChains = new x(), this._index = new Is(), this._idCounter = 0, this._nodedSegStrings = null, this._nOverlaps = 0, 0 === arguments.length) ;else if (1 === arguments.length) {
      var _t515 = arguments[0];
      Ys.constructor_.call(this, _t515);
    }
  };

  var Xs =
  /*#__PURE__*/
  function () {
    function Xs() {
      _classCallCheck(this, Xs);

      Xs.constructor_.apply(this, arguments);
    }

    _createClass(Xs, [{
      key: "rescale",
      value: function rescale() {
        if (_(arguments[0], f)) {
          for (var _t516 = arguments[0].iterator(); _t516.hasNext();) {
            var _e396 = _t516.next();

            this.rescale(_e396.getCoordinates());
          }
        } else if (arguments[0] instanceof Array) {
          var _t517 = arguments[0];
          var _e397 = null,
              _n267 = null;
          2 === _t517.length && (_e397 = new g(_t517[0]), _n267 = new g(_t517[1]));

          for (var _e398 = 0; _e398 < _t517.length; _e398++) {
            _t517[_e398].x = _t517[_e398].x / this._scaleFactor + this._offsetX, _t517[_e398].y = _t517[_e398].y / this._scaleFactor + this._offsetY;
          }

          2 === _t517.length && _t517[0].equals2D(_t517[1]) && O.out.println(_t517);
        }
      }
    }, {
      key: "scale",
      value: function scale() {
        if (_(arguments[0], f)) {
          var _t518 = arguments[0],
              _e399 = new x(_t518.size());

          for (var _n268 = _t518.iterator(); _n268.hasNext();) {
            var _t519 = _n268.next();

            _e399.add(new Gs(this.scale(_t519.getCoordinates()), _t519.getData()));
          }

          return _e399;
        }

        if (arguments[0] instanceof Array) {
          var _t520 = arguments[0],
              _e400 = new Array(_t520.length).fill(null);

          for (var _n269 = 0; _n269 < _t520.length; _n269++) {
            _e400[_n269] = new g(Math.round((_t520[_n269].x - this._offsetX) * this._scaleFactor), Math.round((_t520[_n269].y - this._offsetY) * this._scaleFactor), _t520[_n269].z);
          }

          return X.removeRepeatedPoints(_e400);
        }
      }
    }, {
      key: "isIntegerPrecision",
      value: function isIntegerPrecision() {
        return 1 === this._scaleFactor;
      }
    }, {
      key: "getNodedSubstrings",
      value: function getNodedSubstrings() {
        var t = this._noder.getNodedSubstrings();

        return this._isScaled && this.rescale(t), t;
      }
    }, {
      key: "computeNodes",
      value: function computeNodes(t) {
        var e = t;
        this._isScaled && (e = this.scale(t)), this._noder.computeNodes(e);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Xs;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [zs];
      }
    }]);

    return Xs;
  }();

  Xs.constructor_ = function () {
    if (this._noder = null, this._scaleFactor = null, this._offsetX = null, this._offsetY = null, this._isScaled = !1, 2 === arguments.length) {
      var _t521 = arguments[0],
          _e401 = arguments[1];
      Xs.constructor_.call(this, _t521, _e401, 0, 0);
    } else if (4 === arguments.length) {
      var _t522 = arguments[0],
          _e402 = arguments[1];
      this._noder = _t522, this._scaleFactor = _e402, this._isScaled = !this.isIntegerPrecision();
    }
  };

  var Hs = Object.freeze({
    MCIndexNoder: Us,
    ScaledNoder: Xs,
    SegmentString: Ds
  });

  var Ws =
  /*#__PURE__*/
  function () {
    function Ws() {
      _classCallCheck(this, Ws);

      Ws.constructor_.apply(this, arguments);
    }

    _createClass(Ws, [{
      key: "isSimpleMultiPoint",
      value: function isSimpleMultiPoint(t) {
        if (t.isEmpty()) return !0;
        var e = new ct();

        for (var _n270 = 0; _n270 < t.getNumGeometries(); _n270++) {
          var _s187 = t.getGeometryN(_n270).getCoordinate();

          if (e.contains(_s187)) return this._nonSimpleLocation = _s187, !1;
          e.add(_s187);
        }

        return !0;
      }
    }, {
      key: "isSimplePolygonal",
      value: function isSimplePolygonal(t) {
        for (var _e403 = Ee.getLines(t).iterator(); _e403.hasNext();) {
          var _t523 = _e403.next();

          if (!this.isSimpleLinearGeometry(_t523)) return !1;
        }

        return !0;
      }
    }, {
      key: "hasClosedEndpointIntersection",
      value: function hasClosedEndpointIntersection(t) {
        var e = new ot();

        for (var _n271 = t.getEdgeIterator(); _n271.hasNext();) {
          var _t524 = _n271.next(),
              _s188 = (_t524.getMaximumSegmentIndex(), _t524.isClosed()),
              _i95 = _t524.getCoordinate(0);

          this.addEndpoint(e, _i95, _s188);

          var _r51 = _t524.getCoordinate(_t524.getNumPoints() - 1);

          this.addEndpoint(e, _r51, _s188);
        }

        for (var _t525 = e.values().iterator(); _t525.hasNext();) {
          var _e404 = _t525.next();

          if (_e404.isClosed && 2 !== _e404.degree) return this._nonSimpleLocation = _e404.getCoordinate(), !0;
        }

        return !1;
      }
    }, {
      key: "getNonSimpleLocation",
      value: function getNonSimpleLocation() {
        return this._nonSimpleLocation;
      }
    }, {
      key: "isSimpleLinearGeometry",
      value: function isSimpleLinearGeometry(t) {
        if (t.isEmpty()) return !0;
        var e = new Jn(0, t),
            n = new ee(),
            s = e.computeSelfNodes(n, !0);
        return !s.hasIntersection() || (s.hasProperIntersection() ? (this._nonSimpleLocation = s.getProperIntersectionPoint(), !1) : !this.hasNonEndpointIntersection(e) && (!this._isClosedEndpointsInInterior || !this.hasClosedEndpointIntersection(e)));
      }
    }, {
      key: "hasNonEndpointIntersection",
      value: function hasNonEndpointIntersection(t) {
        for (var _e405 = t.getEdgeIterator(); _e405.hasNext();) {
          var _t526 = _e405.next(),
              _n272 = _t526.getMaximumSegmentIndex();

          for (var _e406 = _t526.getEdgeIntersectionList().iterator(); _e406.hasNext();) {
            var _t527 = _e406.next();

            if (!_t527.isEndPoint(_n272)) return this._nonSimpleLocation = _t527.getCoordinate(), !0;
          }
        }

        return !1;
      }
    }, {
      key: "addEndpoint",
      value: function addEndpoint(t, e, n) {
        var s = t.get(e);
        null === s && (s = new js(e), t.put(e, s)), s.addEndpoint(n);
      }
    }, {
      key: "computeSimple",
      value: function computeSimple(t) {
        return this._nonSimpleLocation = null, !!t.isEmpty() || (t instanceof Rt ? this.isSimpleLinearGeometry(t) : t instanceof pt ? this.isSimpleLinearGeometry(t) : t instanceof At ? this.isSimpleMultiPoint(t) : _(t, bt) ? this.isSimplePolygonal(t) : !(t instanceof ft) || this.isSimpleGeometryCollection(t));
      }
    }, {
      key: "isSimple",
      value: function isSimple() {
        return this._nonSimpleLocation = null, this.computeSimple(this._inputGeom);
      }
    }, {
      key: "isSimpleGeometryCollection",
      value: function isSimpleGeometryCollection(t) {
        for (var _e407 = 0; _e407 < t.getNumGeometries(); _e407++) {
          var _n273 = t.getGeometryN(_e407);

          if (!this.computeSimple(_n273)) return !1;
        }

        return !0;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Ws;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "isSimple",
      value: function isSimple() {
        if (1 === arguments.length) {
          var _t528 = arguments[0];
          return new Ws(_t528).isSimple();
        }

        if (2 === arguments.length) {
          var _t529 = arguments[0],
              _e408 = arguments[1];
          return new Ws(_t529, _e408).isSimple();
        }
      }
    }]);

    return Ws;
  }();

  var js =
  /*#__PURE__*/
  function () {
    function js() {
      _classCallCheck(this, js);

      js.constructor_.apply(this, arguments);
    }

    _createClass(js, [{
      key: "addEndpoint",
      value: function addEndpoint(t) {
        this.degree++, this.isClosed |= t;
      }
    }, {
      key: "getCoordinate",
      value: function getCoordinate() {
        return this.pt;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return js;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return js;
  }();

  js.constructor_ = function () {
    this.pt = null, this.isClosed = null, this.degree = null;
    var t = arguments[0];
    this.pt = t, this.isClosed = !1, this.degree = 0;
  }, Ws.EndpointInfo = js, Ws.constructor_ = function () {
    if (this._inputGeom = null, this._isClosedEndpointsInInterior = !0, this._nonSimpleLocation = null, 1 === arguments.length) {
      var _t530 = arguments[0];
      this._inputGeom = _t530;
    } else if (2 === arguments.length) {
      var _t531 = arguments[0],
          _e409 = arguments[1];
      this._inputGeom = _t531, this._isClosedEndpointsInInterior = !_e409.isInBoundary(2);
    }
  };

  var Ks =
  /*#__PURE__*/
  function () {
    function Ks() {
      _classCallCheck(this, Ks);

      Ks.constructor_.apply(this, arguments);
    }

    _createClass(Ks, [{
      key: "getEndCapStyle",
      value: function getEndCapStyle() {
        return this._endCapStyle;
      }
    }, {
      key: "isSingleSided",
      value: function isSingleSided() {
        return this._isSingleSided;
      }
    }, {
      key: "setQuadrantSegments",
      value: function setQuadrantSegments(t) {
        this._quadrantSegments = t, 0 === this._quadrantSegments && (this._joinStyle = Ks.JOIN_BEVEL), this._quadrantSegments < 0 && (this._joinStyle = Ks.JOIN_MITRE, this._mitreLimit = Math.abs(this._quadrantSegments)), t <= 0 && (this._quadrantSegments = 1), this._joinStyle !== Ks.JOIN_ROUND && (this._quadrantSegments = Ks.DEFAULT_QUADRANT_SEGMENTS);
      }
    }, {
      key: "getJoinStyle",
      value: function getJoinStyle() {
        return this._joinStyle;
      }
    }, {
      key: "setJoinStyle",
      value: function setJoinStyle(t) {
        this._joinStyle = t;
      }
    }, {
      key: "setSimplifyFactor",
      value: function setSimplifyFactor(t) {
        this._simplifyFactor = t < 0 ? 0 : t;
      }
    }, {
      key: "getSimplifyFactor",
      value: function getSimplifyFactor() {
        return this._simplifyFactor;
      }
    }, {
      key: "getQuadrantSegments",
      value: function getQuadrantSegments() {
        return this._quadrantSegments;
      }
    }, {
      key: "setEndCapStyle",
      value: function setEndCapStyle(t) {
        this._endCapStyle = t;
      }
    }, {
      key: "getMitreLimit",
      value: function getMitreLimit() {
        return this._mitreLimit;
      }
    }, {
      key: "setMitreLimit",
      value: function setMitreLimit(t) {
        this._mitreLimit = t;
      }
    }, {
      key: "setSingleSided",
      value: function setSingleSided(t) {
        this._isSingleSided = t;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Ks;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "bufferDistanceError",
      value: function bufferDistanceError(t) {
        var e = Math.PI / 2 / t;
        return 1 - Math.cos(e / 2);
      }
    }]);

    return Ks;
  }();

  Ks.constructor_ = function () {
    if (this._quadrantSegments = Ks.DEFAULT_QUADRANT_SEGMENTS, this._endCapStyle = Ks.CAP_ROUND, this._joinStyle = Ks.JOIN_ROUND, this._mitreLimit = Ks.DEFAULT_MITRE_LIMIT, this._isSingleSided = !1, this._simplifyFactor = Ks.DEFAULT_SIMPLIFY_FACTOR, 0 === arguments.length) ;else if (1 === arguments.length) {
      var _t532 = arguments[0];
      this.setQuadrantSegments(_t532);
    } else if (2 === arguments.length) {
      var _t533 = arguments[0],
          _e410 = arguments[1];
      this.setQuadrantSegments(_t533), this.setEndCapStyle(_e410);
    } else if (4 === arguments.length) {
      var _t534 = arguments[0],
          _e411 = arguments[1],
          _n274 = arguments[2],
          _s189 = arguments[3];
      this.setQuadrantSegments(_t534), this.setEndCapStyle(_e411), this.setJoinStyle(_n274), this.setMitreLimit(_s189);
    }
  }, Ks.CAP_ROUND = 1, Ks.CAP_FLAT = 2, Ks.CAP_SQUARE = 3, Ks.JOIN_ROUND = 1, Ks.JOIN_MITRE = 2, Ks.JOIN_BEVEL = 3, Ks.DEFAULT_QUADRANT_SEGMENTS = 8, Ks.DEFAULT_MITRE_LIMIT = 5, Ks.DEFAULT_SIMPLIFY_FACTOR = .01;

  var Zs =
  /*#__PURE__*/
  function () {
    function Zs() {
      _classCallCheck(this, Zs);

      Zs.constructor_.apply(this, arguments);
    }

    _createClass(Zs, [{
      key: "getCoordinate",
      value: function getCoordinate() {
        return this._minCoord;
      }
    }, {
      key: "getRightmostSide",
      value: function getRightmostSide(t, e) {
        var n = this.getRightmostSideOfSegment(t, e);
        return n < 0 && (n = this.getRightmostSideOfSegment(t, e - 1)), n < 0 && (this._minCoord = null, this.checkForRightmostCoordinate(t)), n;
      }
    }, {
      key: "findRightmostEdgeAtVertex",
      value: function findRightmostEdgeAtVertex() {
        var t = this._minDe.getEdge().getCoordinates();

        u.isTrue(this._minIndex > 0 && this._minIndex < t.length, "rightmost point expected to be interior vertex of edge");
        var e = t[this._minIndex - 1],
            n = t[this._minIndex + 1],
            s = v.index(this._minCoord, n, e);
        var i = !1;
        e.y < this._minCoord.y && n.y < this._minCoord.y && s === v.COUNTERCLOCKWISE ? i = !0 : e.y > this._minCoord.y && n.y > this._minCoord.y && s === v.CLOCKWISE && (i = !0), i && (this._minIndex = this._minIndex - 1);
      }
    }, {
      key: "getRightmostSideOfSegment",
      value: function getRightmostSideOfSegment(t, e) {
        var n = t.getEdge().getCoordinates();
        if (e < 0 || e + 1 >= n.length) return -1;
        if (n[e].y === n[e + 1].y) return -1;
        var s = vn.LEFT;
        return n[e].y < n[e + 1].y && (s = vn.RIGHT), s;
      }
    }, {
      key: "getEdge",
      value: function getEdge() {
        return this._orientedDe;
      }
    }, {
      key: "checkForRightmostCoordinate",
      value: function checkForRightmostCoordinate(t) {
        var e = t.getEdge().getCoordinates();

        for (var _n275 = 0; _n275 < e.length - 1; _n275++) {
          (null === this._minCoord || e[_n275].x > this._minCoord.x) && (this._minDe = t, this._minIndex = _n275, this._minCoord = e[_n275]);
        }
      }
    }, {
      key: "findRightmostEdgeAtNode",
      value: function findRightmostEdgeAtNode() {
        var t = this._minDe.getNode().getEdges();

        this._minDe = t.getRightmostEdge(), this._minDe.isForward() || (this._minDe = this._minDe.getSym(), this._minIndex = this._minDe.getEdge().getCoordinates().length - 1);
      }
    }, {
      key: "findEdge",
      value: function findEdge(t) {
        for (var _e412 = t.iterator(); _e412.hasNext();) {
          var _t535 = _e412.next();

          _t535.isForward() && this.checkForRightmostCoordinate(_t535);
        }

        u.isTrue(0 !== this._minIndex || this._minCoord.equals(this._minDe.getCoordinate()), "inconsistency in rightmost processing"), 0 === this._minIndex ? this.findRightmostEdgeAtNode() : this.findRightmostEdgeAtVertex(), this._orientedDe = this._minDe, this.getRightmostSide(this._minDe, this._minIndex) === vn.LEFT && (this._orientedDe = this._minDe.getSym());
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Zs;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Zs;
  }();

  function Qs() {
    this.array_ = [];
  }

  Zs.constructor_ = function () {
    this._minIndex = -1, this._minCoord = null, this._minDe = null, this._orientedDe = null;
  }, Qs.prototype.addLast = function (t) {
    this.array_.push(t);
  }, Qs.prototype.removeFirst = function () {
    return this.array_.shift();
  }, Qs.prototype.isEmpty = function () {
    return 0 === this.array_.length;
  };

  var Js =
  /*#__PURE__*/
  function () {
    function Js() {
      _classCallCheck(this, Js);

      Js.constructor_.apply(this, arguments);
    }

    _createClass(Js, [{
      key: "clearVisitedEdges",
      value: function clearVisitedEdges() {
        for (var _t536 = this._dirEdgeList.iterator(); _t536.hasNext();) {
          _t536.next().setVisited(!1);
        }
      }
    }, {
      key: "getRightmostCoordinate",
      value: function getRightmostCoordinate() {
        return this._rightMostCoord;
      }
    }, {
      key: "computeNodeDepth",
      value: function computeNodeDepth(t) {
        var e = null;

        for (var _n276 = t.getEdges().iterator(); _n276.hasNext();) {
          var _t537 = _n276.next();

          if (_t537.isVisited() || _t537.getSym().isVisited()) {
            e = _t537;
            break;
          }
        }

        if (null === e) throw new jn("unable to find edge to compute depths at " + t.getCoordinate());
        t.getEdges().computeDepths(e);

        for (var _e413 = t.getEdges().iterator(); _e413.hasNext();) {
          var _t538 = _e413.next();

          _t538.setVisited(!0), this.copySymDepths(_t538);
        }
      }
    }, {
      key: "computeDepth",
      value: function computeDepth(t) {
        this.clearVisitedEdges();

        var e = this._finder.getEdge();

        e.getNode(), e.getLabel();
        e.setEdgeDepths(vn.RIGHT, t), this.copySymDepths(e), this.computeDepths(e);
      }
    }, {
      key: "create",
      value: function create(t) {
        this.addReachable(t), this._finder.findEdge(this._dirEdgeList), this._rightMostCoord = this._finder.getCoordinate();
      }
    }, {
      key: "findResultEdges",
      value: function findResultEdges() {
        for (var _t539 = this._dirEdgeList.iterator(); _t539.hasNext();) {
          var _e414 = _t539.next();

          _e414.getDepth(vn.RIGHT) >= 1 && _e414.getDepth(vn.LEFT) <= 0 && !_e414.isInteriorAreaEdge() && _e414.setInResult(!0);
        }
      }
    }, {
      key: "computeDepths",
      value: function computeDepths(t) {
        var e = new J(),
            n = new Qs(),
            s = t.getNode();

        for (n.addLast(s), e.add(s), t.setVisited(!0); !n.isEmpty();) {
          var _t540 = n.removeFirst();

          e.add(_t540), this.computeNodeDepth(_t540);

          for (var _s190 = _t540.getEdges().iterator(); _s190.hasNext();) {
            var _t541 = _s190.next().getSym();

            if (_t541.isVisited()) continue;

            var _i96 = _t541.getNode();

            e.contains(_i96) || (n.addLast(_i96), e.add(_i96));
          }
        }
      }
    }, {
      key: "compareTo",
      value: function compareTo(t) {
        var e = t;
        return this._rightMostCoord.x < e._rightMostCoord.x ? -1 : this._rightMostCoord.x > e._rightMostCoord.x ? 1 : 0;
      }
    }, {
      key: "getEnvelope",
      value: function getEnvelope() {
        if (null === this._env) {
          var _t542 = new N();

          for (var _e415 = this._dirEdgeList.iterator(); _e415.hasNext();) {
            var _n277 = _e415.next().getEdge().getCoordinates();

            for (var _e416 = 0; _e416 < _n277.length - 1; _e416++) {
              _t542.expandToInclude(_n277[_e416]);
            }
          }

          this._env = _t542;
        }

        return this._env;
      }
    }, {
      key: "addReachable",
      value: function addReachable(t) {
        var e = new ln();

        for (e.add(t); !e.empty();) {
          var _t543 = e.pop();

          this.add(_t543, e);
        }
      }
    }, {
      key: "copySymDepths",
      value: function copySymDepths(t) {
        var e = t.getSym();
        e.setDepth(vn.LEFT, t.getDepth(vn.RIGHT)), e.setDepth(vn.RIGHT, t.getDepth(vn.LEFT));
      }
    }, {
      key: "add",
      value: function add(t, e) {
        t.setVisited(!0), this._nodes.add(t);

        for (var _n278 = t.getEdges().iterator(); _n278.hasNext();) {
          var _t544 = _n278.next();

          this._dirEdgeList.add(_t544);

          var _s191 = _t544.getSym().getNode();

          _s191.isVisited() || e.push(_s191);
        }
      }
    }, {
      key: "getNodes",
      value: function getNodes() {
        return this._nodes;
      }
    }, {
      key: "getDirectedEdges",
      value: function getDirectedEdges() {
        return this._dirEdgeList;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Js;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [r];
      }
    }]);

    return Js;
  }();

  Js.constructor_ = function () {
    this._finder = null, this._dirEdgeList = new x(), this._nodes = new x(), this._rightMostCoord = null, this._env = null, this._finder = new Zs();
  };

  var $s =
  /*#__PURE__*/
  function () {
    function $s() {
      _classCallCheck(this, $s);

      $s.constructor_.apply(this, arguments);
    }

    _createClass($s, [{
      key: "computeRing",
      value: function computeRing() {
        if (null !== this._ring) return null;
        var t = new Array(this._pts.size()).fill(null);

        for (var _e417 = 0; _e417 < this._pts.size(); _e417++) {
          t[_e417] = this._pts.get(_e417);
        }

        this._ring = this._geometryFactory.createLinearRing(t), this._isHole = v.isCCW(this._ring.getCoordinates());
      }
    }, {
      key: "isIsolated",
      value: function isIsolated() {
        return 1 === this._label.getGeometryCount();
      }
    }, {
      key: "computePoints",
      value: function computePoints(t) {
        this._startDe = t;
        var e = t,
            n = !0;

        do {
          if (null === e) throw new jn("Found null DirectedEdge");
          if (e.getEdgeRing() === this) throw new jn("Directed Edge visited twice during ring-building at " + e.getCoordinate());

          this._edges.add(e);

          var _t545 = e.getLabel();

          u.isTrue(_t545.isArea()), this.mergeLabel(_t545), this.addPoints(e.getEdge(), e.isForward(), n), n = !1, this.setEdgeRing(e, this), e = this.getNext(e);
        } while (e !== this._startDe);
      }
    }, {
      key: "getLinearRing",
      value: function getLinearRing() {
        return this._ring;
      }
    }, {
      key: "getCoordinate",
      value: function getCoordinate(t) {
        return this._pts.get(t);
      }
    }, {
      key: "computeMaxNodeDegree",
      value: function computeMaxNodeDegree() {
        this._maxNodeDegree = 0;
        var t = this._startDe;

        do {
          var _e418 = t.getNode().getEdges().getOutgoingDegree(this);

          _e418 > this._maxNodeDegree && (this._maxNodeDegree = _e418), t = this.getNext(t);
        } while (t !== this._startDe);

        this._maxNodeDegree *= 2;
      }
    }, {
      key: "addPoints",
      value: function addPoints(t, e, n) {
        var s = t.getCoordinates();

        if (e) {
          var _t546 = 1;
          n && (_t546 = 0);

          for (var _e419 = _t546; _e419 < s.length; _e419++) {
            this._pts.add(s[_e419]);
          }
        } else {
          var _t547 = s.length - 2;

          n && (_t547 = s.length - 1);

          for (var _e420 = _t547; _e420 >= 0; _e420--) {
            this._pts.add(s[_e420]);
          }
        }
      }
    }, {
      key: "isHole",
      value: function isHole() {
        return this._isHole;
      }
    }, {
      key: "setInResult",
      value: function setInResult() {
        var t = this._startDe;

        do {
          t.getEdge().setInResult(!0), t = t.getNext();
        } while (t !== this._startDe);
      }
    }, {
      key: "containsPoint",
      value: function containsPoint(t) {
        var e = this.getLinearRing();
        if (!e.getEnvelopeInternal().contains(t)) return !1;
        if (!je.isInRing(t, e.getCoordinates())) return !1;

        for (var _e421 = this._holes.iterator(); _e421.hasNext();) {
          if (_e421.next().containsPoint(t)) return !1;
        }

        return !0;
      }
    }, {
      key: "addHole",
      value: function addHole(t) {
        this._holes.add(t);
      }
    }, {
      key: "isShell",
      value: function isShell() {
        return null === this._shell;
      }
    }, {
      key: "getLabel",
      value: function getLabel() {
        return this._label;
      }
    }, {
      key: "getEdges",
      value: function getEdges() {
        return this._edges;
      }
    }, {
      key: "getMaxNodeDegree",
      value: function getMaxNodeDegree() {
        return this._maxNodeDegree < 0 && this.computeMaxNodeDegree(), this._maxNodeDegree;
      }
    }, {
      key: "getShell",
      value: function getShell() {
        return this._shell;
      }
    }, {
      key: "mergeLabel",
      value: function mergeLabel() {
        if (1 === arguments.length) {
          var _t548 = arguments[0];
          this.mergeLabel(_t548, 0), this.mergeLabel(_t548, 1);
        } else if (2 === arguments.length) {
          var _t549 = arguments[0],
              _e422 = arguments[1],
              _n279 = _t549.getLocation(_e422, vn.RIGHT);

          if (_n279 === se.NONE) return null;
          if (this._label.getLocation(_e422) === se.NONE) return this._label.setLocation(_e422, _n279), null;
        }
      }
    }, {
      key: "setShell",
      value: function setShell(t) {
        this._shell = t, null !== t && t.addHole(this);
      }
    }, {
      key: "toPolygon",
      value: function toPolygon(t) {
        var e = new Array(this._holes.size()).fill(null);

        for (var _t550 = 0; _t550 < this._holes.size(); _t550++) {
          e[_t550] = this._holes.get(_t550).getLinearRing();
        }

        return t.createPolygon(this.getLinearRing(), e);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return $s;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return $s;
  }();

  $s.constructor_ = function () {
    if (this._startDe = null, this._maxNodeDegree = -1, this._edges = new x(), this._pts = new x(), this._label = new Gn(se.NONE), this._ring = null, this._isHole = null, this._shell = null, this._holes = new x(), this._geometryFactory = null, 0 === arguments.length) ;else if (2 === arguments.length) {
      var _t551 = arguments[0],
          _e423 = arguments[1];
      this._geometryFactory = _e423, this.computePoints(_t551), this.computeRing();
    }
  };

  var ti =
  /*#__PURE__*/
  function (_$s) {
    _inherits(ti, _$s);

    function ti() {
      var _this34;

      _classCallCheck(this, ti);

      _this34 = _possibleConstructorReturn(this, _getPrototypeOf(ti).call(this)), ti.constructor_.apply(_assertThisInitialized(_this34), arguments);
      return _this34;
    }

    _createClass(ti, [{
      key: "setEdgeRing",
      value: function setEdgeRing(t, e) {
        t.setMinEdgeRing(e);
      }
    }, {
      key: "getNext",
      value: function getNext(t) {
        return t.getNextMin();
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return ti;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return ti;
  }($s);

  ti.constructor_ = function () {
    var t = arguments[0],
        e = arguments[1];
    $s.constructor_.call(this, t, e);
  };

  var ei =
  /*#__PURE__*/
  function (_$s2) {
    _inherits(ei, _$s2);

    function ei() {
      var _this35;

      _classCallCheck(this, ei);

      _this35 = _possibleConstructorReturn(this, _getPrototypeOf(ei).call(this)), ei.constructor_.apply(_assertThisInitialized(_this35), arguments);
      return _this35;
    }

    _createClass(ei, [{
      key: "buildMinimalRings",
      value: function buildMinimalRings() {
        var t = new x();
        var e = this._startDe;

        do {
          if (null === e.getMinEdgeRing()) {
            var _n280 = new ti(e, this._geometryFactory);

            t.add(_n280);
          }

          e = e.getNext();
        } while (e !== this._startDe);

        return t;
      }
    }, {
      key: "setEdgeRing",
      value: function setEdgeRing(t, e) {
        t.setEdgeRing(e);
      }
    }, {
      key: "linkDirectedEdgesForMinimalEdgeRings",
      value: function linkDirectedEdgesForMinimalEdgeRings() {
        var t = this._startDe;

        do {
          t.getNode().getEdges().linkMinimalDirectedEdges(this), t = t.getNext();
        } while (t !== this._startDe);
      }
    }, {
      key: "getNext",
      value: function getNext(t) {
        return t.getNext();
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return ei;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return ei;
  }($s);

  ei.constructor_ = function () {
    var t = arguments[0],
        e = arguments[1];
    $s.constructor_.call(this, t, e);
  };

  var ni =
  /*#__PURE__*/
  function () {
    function ni() {
      _classCallCheck(this, ni);

      ni.constructor_.apply(this, arguments);
    }

    _createClass(ni, [{
      key: "sortShellsAndHoles",
      value: function sortShellsAndHoles(t, e, n) {
        for (var _s192 = t.iterator(); _s192.hasNext();) {
          var _t552 = _s192.next();

          _t552.isHole() ? n.add(_t552) : e.add(_t552);
        }
      }
    }, {
      key: "computePolygons",
      value: function computePolygons(t) {
        var e = new x();

        for (var _n281 = t.iterator(); _n281.hasNext();) {
          var _t553 = _n281.next().toPolygon(this._geometryFactory);

          e.add(_t553);
        }

        return e;
      }
    }, {
      key: "placeFreeHoles",
      value: function placeFreeHoles(t, e) {
        for (var _n282 = e.iterator(); _n282.hasNext();) {
          var _e424 = _n282.next();

          if (null === _e424.getShell()) {
            var _n283 = this.findEdgeRingContaining(_e424, t);

            if (null === _n283) throw new jn("unable to assign hole to a shell", _e424.getCoordinate(0));

            _e424.setShell(_n283);
          }
        }
      }
    }, {
      key: "buildMinimalEdgeRings",
      value: function buildMinimalEdgeRings(t, e, n) {
        var s = new x();

        for (var _i97 = t.iterator(); _i97.hasNext();) {
          var _t554 = _i97.next();

          if (_t554.getMaxNodeDegree() > 2) {
            _t554.linkDirectedEdgesForMinimalEdgeRings();

            var _s193 = _t554.buildMinimalRings(),
                _i98 = this.findShell(_s193);

            null !== _i98 ? (this.placePolygonHoles(_i98, _s193), e.add(_i98)) : n.addAll(_s193);
          } else s.add(_t554);
        }

        return s;
      }
    }, {
      key: "containsPoint",
      value: function containsPoint(t) {
        for (var _e425 = this._shellList.iterator(); _e425.hasNext();) {
          if (_e425.next().containsPoint(t)) return !0;
        }

        return !1;
      }
    }, {
      key: "buildMaximalEdgeRings",
      value: function buildMaximalEdgeRings(t) {
        var e = new x();

        for (var _n284 = t.iterator(); _n284.hasNext();) {
          var _t555 = _n284.next();

          if (_t555.isInResult() && _t555.getLabel().isArea() && null === _t555.getEdgeRing()) {
            var _n285 = new ei(_t555, this._geometryFactory);

            e.add(_n285), _n285.setInResult();
          }
        }

        return e;
      }
    }, {
      key: "placePolygonHoles",
      value: function placePolygonHoles(t, e) {
        for (var _n286 = e.iterator(); _n286.hasNext();) {
          var _e426 = _n286.next();

          _e426.isHole() && _e426.setShell(t);
        }
      }
    }, {
      key: "getPolygons",
      value: function getPolygons() {
        return this.computePolygons(this._shellList);
      }
    }, {
      key: "findEdgeRingContaining",
      value: function findEdgeRingContaining(t, e) {
        var n = t.getLinearRing(),
            s = n.getEnvelopeInternal(),
            i = n.getCoordinateN(0);
        var r = null,
            o = null;

        for (var _t556 = e.iterator(); _t556.hasNext();) {
          var _e427 = _t556.next(),
              _n287 = _e427.getLinearRing(),
              _l25 = _n287.getEnvelopeInternal();

          null !== r && (o = r.getLinearRing().getEnvelopeInternal());

          var _a15 = !1;

          _l25.contains(s) && je.isInRing(i, _n287.getCoordinates()) && (_a15 = !0), _a15 && (null === r || o.contains(_l25)) && (r = _e427);
        }

        return r;
      }
    }, {
      key: "findShell",
      value: function findShell(t) {
        var e = 0,
            n = null;

        for (var _s194 = t.iterator(); _s194.hasNext();) {
          var _t557 = _s194.next();

          _t557.isHole() || (n = _t557, e++);
        }

        return u.isTrue(e <= 1, "found two shells in MinimalEdgeRing list"), n;
      }
    }, {
      key: "add",
      value: function add() {
        if (1 === arguments.length) {
          var _t558 = arguments[0];
          this.add(_t558.getEdgeEnds(), _t558.getNodes());
        } else if (2 === arguments.length) {
          var _t559 = arguments[0],
              _e428 = arguments[1];
          Qn.linkResultDirectedEdges(_e428);

          var _n288 = this.buildMaximalEdgeRings(_t559),
              _s195 = new x(),
              _i99 = this.buildMinimalEdgeRings(_n288, this._shellList, _s195);

          this.sortShellsAndHoles(_i99, this._shellList, _s195), this.placeFreeHoles(this._shellList, _s195);
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return ni;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return ni;
  }();

  ni.constructor_ = function () {
    this._geometryFactory = null, this._shellList = new x();
    var t = arguments[0];
    this._geometryFactory = t;
  };

  var si =
  /*#__PURE__*/
  function () {
    function si() {
      _classCallCheck(this, si);

      si.constructor_.apply(this, arguments);
    }

    _createClass(si, [{
      key: "isDeletable",
      value: function isDeletable(t, e, n, s) {
        var i = this._inputLine[t],
            r = this._inputLine[e],
            o = this._inputLine[n];
        return !!this.isConcave(i, r, o) && !!this.isShallow(i, r, o, s) && this.isShallowSampled(i, r, t, n, s);
      }
    }, {
      key: "deleteShallowConcavities",
      value: function deleteShallowConcavities() {
        var t = 1;
        this._inputLine.length;
        var e = this.findNextNonDeletedIndex(t),
            n = this.findNextNonDeletedIndex(e),
            s = !1;

        for (; n < this._inputLine.length;) {
          var _i100 = !1;

          this.isDeletable(t, e, n, this._distanceTol) && (this._isDeleted[e] = si.DELETE, _i100 = !0, s = !0), t = _i100 ? n : e, e = this.findNextNonDeletedIndex(t), n = this.findNextNonDeletedIndex(e);
        }

        return s;
      }
    }, {
      key: "isShallowConcavity",
      value: function isShallowConcavity(t, e, n, s) {
        return v.index(t, e, n) === this._angleOrientation && A.pointToSegment(e, t, n) < s;
      }
    }, {
      key: "isShallowSampled",
      value: function isShallowSampled(t, e, n, s, i) {
        var r = Math.trunc((s - n) / si.NUM_PTS_TO_CHECK);
        r <= 0 && (r = 1);

        for (var _o28 = n; _o28 < s; _o28 += r) {
          if (!this.isShallow(t, e, this._inputLine[_o28], i)) return !1;
        }

        return !0;
      }
    }, {
      key: "isConcave",
      value: function isConcave(t, e, n) {
        return v.index(t, e, n) === this._angleOrientation;
      }
    }, {
      key: "simplify",
      value: function simplify(t) {
        this._distanceTol = Math.abs(t), t < 0 && (this._angleOrientation = v.CLOCKWISE), this._isDeleted = new Array(this._inputLine.length).fill(null);
        var e = !1;

        do {
          e = this.deleteShallowConcavities();
        } while (e);

        return this.collapseLine();
      }
    }, {
      key: "findNextNonDeletedIndex",
      value: function findNextNonDeletedIndex(t) {
        var e = t + 1;

        for (; e < this._inputLine.length && this._isDeleted[e] === si.DELETE;) {
          e++;
        }

        return e;
      }
    }, {
      key: "isShallow",
      value: function isShallow(t, e, n, s) {
        return A.pointToSegment(e, t, n) < s;
      }
    }, {
      key: "collapseLine",
      value: function collapseLine() {
        var t = new I();

        for (var _e429 = 0; _e429 < this._inputLine.length; _e429++) {
          this._isDeleted[_e429] !== si.DELETE && t.add(this._inputLine[_e429]);
        }

        return t.toCoordinateArray();
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return si;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "simplify",
      value: function simplify(t, e) {
        return new si(t).simplify(e);
      }
    }]);

    return si;
  }();

  si.constructor_ = function () {
    this._inputLine = null, this._distanceTol = null, this._isDeleted = null, this._angleOrientation = v.COUNTERCLOCKWISE;
    var t = arguments[0];
    this._inputLine = t;
  }, si.INIT = 0, si.DELETE = 1, si.KEEP = 1, si.NUM_PTS_TO_CHECK = 10;

  var ii =
  /*#__PURE__*/
  function () {
    function ii() {
      _classCallCheck(this, ii);

      ii.constructor_.apply(this, arguments);
    }

    _createClass(ii, [{
      key: "getCoordinates",
      value: function getCoordinates() {
        return this._ptList.toArray(ii.COORDINATE_ARRAY_TYPE);
      }
    }, {
      key: "setPrecisionModel",
      value: function setPrecisionModel(t) {
        this._precisionModel = t;
      }
    }, {
      key: "addPt",
      value: function addPt(t) {
        var e = new g(t);
        if (this._precisionModel.makePrecise(e), this.isRedundant(e)) return null;

        this._ptList.add(e);
      }
    }, {
      key: "reverse",
      value: function reverse() {}
    }, {
      key: "addPts",
      value: function addPts(t, e) {
        if (e) for (var _e430 = 0; _e430 < t.length; _e430++) {
          this.addPt(t[_e430]);
        } else for (var _e431 = t.length - 1; _e431 >= 0; _e431--) {
          this.addPt(t[_e431]);
        }
      }
    }, {
      key: "isRedundant",
      value: function isRedundant(t) {
        if (this._ptList.size() < 1) return !1;

        var e = this._ptList.get(this._ptList.size() - 1);

        return t.distance(e) < this._minimimVertexDistance;
      }
    }, {
      key: "toString",
      value: function toString() {
        return new Wt().createLineString(this.getCoordinates()).toString();
      }
    }, {
      key: "closeRing",
      value: function closeRing() {
        if (this._ptList.size() < 1) return null;

        var t = new g(this._ptList.get(0)),
            e = this._ptList.get(this._ptList.size() - 1);

        var n = null;
        if (this._ptList.size() >= 2 && this._ptList.get(this._ptList.size() - 2), t.equals(e)) return null;

        this._ptList.add(t);
      }
    }, {
      key: "setMinimumVertexDistance",
      value: function setMinimumVertexDistance(t) {
        this._minimimVertexDistance = t;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return ii;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return ii;
  }();

  ii.constructor_ = function () {
    this._ptList = null, this._precisionModel = null, this._minimimVertexDistance = 0, this._ptList = new x();
  }, ii.COORDINATE_ARRAY_TYPE = new Array(0).fill(null);

  var ri =
  /*#__PURE__*/
  function () {
    function ri() {
      _classCallCheck(this, ri);

      ri.constructor_.apply(this, arguments);
    }

    _createClass(ri, [{
      key: "addNextSegment",
      value: function addNextSegment(t, e) {
        if (this._s0 = this._s1, this._s1 = this._s2, this._s2 = t, this._seg0.setCoordinates(this._s0, this._s1), this.computeOffsetSegment(this._seg0, this._side, this._distance, this._offset0), this._seg1.setCoordinates(this._s1, this._s2), this.computeOffsetSegment(this._seg1, this._side, this._distance, this._offset1), this._s1.equals(this._s2)) return null;
        var n = v.index(this._s0, this._s1, this._s2),
            s = n === v.CLOCKWISE && this._side === vn.LEFT || n === v.COUNTERCLOCKWISE && this._side === vn.RIGHT;
        0 === n ? this.addCollinear(e) : s ? this.addOutsideTurn(n, e) : this.addInsideTurn(n, e);
      }
    }, {
      key: "addLineEndCap",
      value: function addLineEndCap(t, e) {
        var n = new ne(t, e),
            s = new ne();
        this.computeOffsetSegment(n, vn.LEFT, this._distance, s);
        var i = new ne();
        this.computeOffsetSegment(n, vn.RIGHT, this._distance, i);
        var r = e.x - t.x,
            o = e.y - t.y,
            l = Math.atan2(o, r);

        switch (this._bufParams.getEndCapStyle()) {
          case Ks.CAP_ROUND:
            this._segList.addPt(s.p1), this.addDirectedFillet(e, l + Math.PI / 2, l - Math.PI / 2, v.CLOCKWISE, this._distance), this._segList.addPt(i.p1);
            break;

          case Ks.CAP_FLAT:
            this._segList.addPt(s.p1), this._segList.addPt(i.p1);
            break;

          case Ks.CAP_SQUARE:
            var _t560 = new g();

            _t560.x = Math.abs(this._distance) * Math.cos(l), _t560.y = Math.abs(this._distance) * Math.sin(l);

            var _n289 = new g(s.p1.x + _t560.x, s.p1.y + _t560.y),
                _r52 = new g(i.p1.x + _t560.x, i.p1.y + _t560.y);

            this._segList.addPt(_n289), this._segList.addPt(_r52);
        }
      }
    }, {
      key: "getCoordinates",
      value: function getCoordinates() {
        return this._segList.getCoordinates();
      }
    }, {
      key: "addMitreJoin",
      value: function addMitreJoin(t, e, n, s) {
        var i = !0,
            r = null;

        try {
          r = b.intersection(e.p0, e.p1, n.p0, n.p1), (s <= 0 ? 1 : r.distance(t) / Math.abs(s)) > this._bufParams.getMitreLimit() && (i = !1);
        } catch (t) {
          if (!(t instanceof S)) throw t;
          r = new g(0, 0), i = !1;
        }

        i ? this._segList.addPt(r) : this.addLimitedMitreJoin(e, n, s, this._bufParams.getMitreLimit());
      }
    }, {
      key: "addOutsideTurn",
      value: function addOutsideTurn(t, e) {
        if (this._offset0.p1.distance(this._offset1.p0) < this._distance * ri.OFFSET_SEGMENT_SEPARATION_FACTOR) return this._segList.addPt(this._offset0.p1), null;
        this._bufParams.getJoinStyle() === Ks.JOIN_MITRE ? this.addMitreJoin(this._s1, this._offset0, this._offset1, this._distance) : this._bufParams.getJoinStyle() === Ks.JOIN_BEVEL ? this.addBevelJoin(this._offset0, this._offset1) : (e && this._segList.addPt(this._offset0.p1), this.addCornerFillet(this._s1, this._offset0.p1, this._offset1.p0, t, this._distance), this._segList.addPt(this._offset1.p0));
      }
    }, {
      key: "createSquare",
      value: function createSquare(t) {
        this._segList.addPt(new g(t.x + this._distance, t.y + this._distance)), this._segList.addPt(new g(t.x + this._distance, t.y - this._distance)), this._segList.addPt(new g(t.x - this._distance, t.y - this._distance)), this._segList.addPt(new g(t.x - this._distance, t.y + this._distance)), this._segList.closeRing();
      }
    }, {
      key: "addSegments",
      value: function addSegments(t, e) {
        this._segList.addPts(t, e);
      }
    }, {
      key: "addFirstSegment",
      value: function addFirstSegment() {
        this._segList.addPt(this._offset1.p0);
      }
    }, {
      key: "addCornerFillet",
      value: function addCornerFillet(t, e, n, s, i) {
        var r = e.x - t.x,
            o = e.y - t.y;
        var l = Math.atan2(o, r);
        var a = n.x - t.x,
            c = n.y - t.y,
            h = Math.atan2(c, a);
        s === v.CLOCKWISE ? l <= h && (l += 2 * Math.PI) : l >= h && (l -= 2 * Math.PI), this._segList.addPt(e), this.addDirectedFillet(t, l, h, s, i), this._segList.addPt(n);
      }
    }, {
      key: "addLastSegment",
      value: function addLastSegment() {
        this._segList.addPt(this._offset1.p1);
      }
    }, {
      key: "initSideSegments",
      value: function initSideSegments(t, e, n) {
        this._s1 = t, this._s2 = e, this._side = n, this._seg1.setCoordinates(t, e), this.computeOffsetSegment(this._seg1, n, this._distance, this._offset1);
      }
    }, {
      key: "addLimitedMitreJoin",
      value: function addLimitedMitreJoin(t, e, n, s) {
        var i = this._seg0.p1,
            r = re.angle(i, this._seg0.p0),
            o = (re.angle(i, this._seg1.p1), re.angleBetweenOriented(this._seg0.p0, i, this._seg1.p1) / 2),
            l = re.normalize(r + o),
            a = re.normalize(l + Math.PI),
            c = s * n,
            h = n - c * Math.abs(Math.sin(o)),
            u = i.x + c * Math.cos(a),
            d = i.y + c * Math.sin(a),
            _ = new g(u, d),
            f = new ne(i, _),
            p = f.pointAlongOffset(1, h),
            m = f.pointAlongOffset(1, -h);

        this._side === vn.LEFT ? (this._segList.addPt(p), this._segList.addPt(m)) : (this._segList.addPt(m), this._segList.addPt(p));
      }
    }, {
      key: "addDirectedFillet",
      value: function addDirectedFillet(t, e, n, s, i) {
        var r = s === v.CLOCKWISE ? -1 : 1,
            o = Math.abs(e - n),
            l = Math.trunc(o / this._filletAngleQuantum + .5);
        if (l < 1) return null;
        var a = null,
            c = null;
        a = 0, c = o / l;
        var h = 0;
        var u = new g();

        for (; h < o;) {
          var _n290 = e + r * h;

          u.x = t.x + i * Math.cos(_n290), u.y = t.y + i * Math.sin(_n290), this._segList.addPt(u), h += c;
        }
      }
    }, {
      key: "computeOffsetSegment",
      value: function computeOffsetSegment(t, e, n, s) {
        var i = e === vn.LEFT ? 1 : -1,
            r = t.p1.x - t.p0.x,
            o = t.p1.y - t.p0.y,
            l = Math.sqrt(r * r + o * o),
            a = i * n * r / l,
            c = i * n * o / l;
        s.p0.x = t.p0.x - c, s.p0.y = t.p0.y + a, s.p1.x = t.p1.x - c, s.p1.y = t.p1.y + a;
      }
    }, {
      key: "addInsideTurn",
      value: function addInsideTurn(t, e) {
        if (this._li.computeIntersection(this._offset0.p0, this._offset0.p1, this._offset1.p0, this._offset1.p1), this._li.hasIntersection()) this._segList.addPt(this._li.getIntersection(0));else if (this._hasNarrowConcaveAngle = !0, this._offset0.p1.distance(this._offset1.p0) < this._distance * ri.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR) this._segList.addPt(this._offset0.p1);else {
          if (this._segList.addPt(this._offset0.p1), this._closingSegLengthFactor > 0) {
            var _t561 = new g((this._closingSegLengthFactor * this._offset0.p1.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset0.p1.y + this._s1.y) / (this._closingSegLengthFactor + 1));

            this._segList.addPt(_t561);

            var _e432 = new g((this._closingSegLengthFactor * this._offset1.p0.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset1.p0.y + this._s1.y) / (this._closingSegLengthFactor + 1));

            this._segList.addPt(_e432);
          } else this._segList.addPt(this._s1);

          this._segList.addPt(this._offset1.p0);
        }
      }
    }, {
      key: "createCircle",
      value: function createCircle(t) {
        var e = new g(t.x + this._distance, t.y);
        this._segList.addPt(e), this.addDirectedFillet(t, 0, 2 * Math.PI, -1, this._distance), this._segList.closeRing();
      }
    }, {
      key: "addBevelJoin",
      value: function addBevelJoin(t, e) {
        this._segList.addPt(t.p1), this._segList.addPt(e.p0);
      }
    }, {
      key: "init",
      value: function init(t) {
        this._distance = t, this._maxCurveSegmentError = t * (1 - Math.cos(this._filletAngleQuantum / 2)), this._segList = new ii(), this._segList.setPrecisionModel(this._precisionModel), this._segList.setMinimumVertexDistance(t * ri.CURVE_VERTEX_SNAP_DISTANCE_FACTOR);
      }
    }, {
      key: "addCollinear",
      value: function addCollinear(t) {
        this._li.computeIntersection(this._s0, this._s1, this._s1, this._s2), this._li.getIntersectionNum() >= 2 && (this._bufParams.getJoinStyle() === Ks.JOIN_BEVEL || this._bufParams.getJoinStyle() === Ks.JOIN_MITRE ? (t && this._segList.addPt(this._offset0.p1), this._segList.addPt(this._offset1.p0)) : this.addCornerFillet(this._s1, this._offset0.p1, this._offset1.p0, v.CLOCKWISE, this._distance));
      }
    }, {
      key: "closeRing",
      value: function closeRing() {
        this._segList.closeRing();
      }
    }, {
      key: "hasNarrowConcaveAngle",
      value: function hasNarrowConcaveAngle() {
        return this._hasNarrowConcaveAngle;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return ri;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return ri;
  }();

  ri.constructor_ = function () {
    this._maxCurveSegmentError = 0, this._filletAngleQuantum = null, this._closingSegLengthFactor = 1, this._segList = null, this._distance = 0, this._precisionModel = null, this._bufParams = null, this._li = null, this._s0 = null, this._s1 = null, this._s2 = null, this._seg0 = new ne(), this._seg1 = new ne(), this._offset0 = new ne(), this._offset1 = new ne(), this._side = 0, this._hasNarrowConcaveAngle = !1;
    var t = arguments[0],
        e = arguments[1],
        n = arguments[2];
    this._precisionModel = t, this._bufParams = e, this._li = new ee(), this._filletAngleQuantum = Math.PI / 2 / e.getQuadrantSegments(), e.getQuadrantSegments() >= 8 && e.getJoinStyle() === Ks.JOIN_ROUND && (this._closingSegLengthFactor = ri.MAX_CLOSING_SEG_LEN_FACTOR), this.init(n);
  }, ri.OFFSET_SEGMENT_SEPARATION_FACTOR = .001, ri.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR = .001, ri.CURVE_VERTEX_SNAP_DISTANCE_FACTOR = 1e-6, ri.MAX_CLOSING_SEG_LEN_FACTOR = 80;

  var oi =
  /*#__PURE__*/
  function () {
    function oi() {
      _classCallCheck(this, oi);

      oi.constructor_.apply(this, arguments);
    }

    _createClass(oi, [{
      key: "getOffsetCurve",
      value: function getOffsetCurve(t, e) {
        if (this._distance = e, 0 === e) return null;
        var n = e < 0,
            s = Math.abs(e),
            i = this.getSegGen(s);
        t.length <= 1 ? this.computePointCurve(t[0], i) : this.computeOffsetCurve(t, n, i);
        var r = i.getCoordinates();
        return n && X.reverse(r), r;
      }
    }, {
      key: "computeSingleSidedBufferCurve",
      value: function computeSingleSidedBufferCurve(t, e, n) {
        var s = this.simplifyTolerance(this._distance);

        if (e) {
          n.addSegments(t, !0);

          var _e433 = si.simplify(t, -s),
              _i101 = _e433.length - 1;

          n.initSideSegments(_e433[_i101], _e433[_i101 - 1], vn.LEFT), n.addFirstSegment();

          for (var _t562 = _i101 - 2; _t562 >= 0; _t562--) {
            n.addNextSegment(_e433[_t562], !0);
          }
        } else {
          n.addSegments(t, !1);

          var _e434 = si.simplify(t, s),
              _i102 = _e434.length - 1;

          n.initSideSegments(_e434[0], _e434[1], vn.LEFT), n.addFirstSegment();

          for (var _t563 = 2; _t563 <= _i102; _t563++) {
            n.addNextSegment(_e434[_t563], !0);
          }
        }

        n.addLastSegment(), n.closeRing();
      }
    }, {
      key: "computeRingBufferCurve",
      value: function computeRingBufferCurve(t, e, n) {
        var s = this.simplifyTolerance(this._distance);
        e === vn.RIGHT && (s = -s);
        var i = si.simplify(t, s),
            r = i.length - 1;
        n.initSideSegments(i[r - 1], i[0], e);

        for (var _t564 = 1; _t564 <= r; _t564++) {
          var _e435 = 1 !== _t564;

          n.addNextSegment(i[_t564], _e435);
        }

        n.closeRing();
      }
    }, {
      key: "computeLineBufferCurve",
      value: function computeLineBufferCurve(t, e) {
        var n = this.simplifyTolerance(this._distance),
            s = si.simplify(t, n),
            i = s.length - 1;
        e.initSideSegments(s[0], s[1], vn.LEFT);

        for (var _t565 = 2; _t565 <= i; _t565++) {
          e.addNextSegment(s[_t565], !0);
        }

        e.addLastSegment(), e.addLineEndCap(s[i - 1], s[i]);
        var r = si.simplify(t, -n),
            o = r.length - 1;
        e.initSideSegments(r[o], r[o - 1], vn.LEFT);

        for (var _t566 = o - 2; _t566 >= 0; _t566--) {
          e.addNextSegment(r[_t566], !0);
        }

        e.addLastSegment(), e.addLineEndCap(r[1], r[0]), e.closeRing();
      }
    }, {
      key: "computePointCurve",
      value: function computePointCurve(t, e) {
        switch (this._bufParams.getEndCapStyle()) {
          case Ks.CAP_ROUND:
            e.createCircle(t);
            break;

          case Ks.CAP_SQUARE:
            e.createSquare(t);
        }
      }
    }, {
      key: "getLineCurve",
      value: function getLineCurve(t, e) {
        if (this._distance = e, e < 0 && !this._bufParams.isSingleSided()) return null;
        if (0 === e) return null;
        var n = Math.abs(e),
            s = this.getSegGen(n);
        if (t.length <= 1) this.computePointCurve(t[0], s);else if (this._bufParams.isSingleSided()) {
          var _n291 = e < 0;

          this.computeSingleSidedBufferCurve(t, _n291, s);
        } else this.computeLineBufferCurve(t, s);
        return s.getCoordinates();
      }
    }, {
      key: "getBufferParameters",
      value: function getBufferParameters() {
        return this._bufParams;
      }
    }, {
      key: "simplifyTolerance",
      value: function simplifyTolerance(t) {
        return t * this._bufParams.getSimplifyFactor();
      }
    }, {
      key: "getRingCurve",
      value: function getRingCurve(t, e, n) {
        if (this._distance = n, t.length <= 2) return this.getLineCurve(t, n);
        if (0 === n) return oi.copyCoordinates(t);
        var s = this.getSegGen(n);
        return this.computeRingBufferCurve(t, e, s), s.getCoordinates();
      }
    }, {
      key: "computeOffsetCurve",
      value: function computeOffsetCurve(t, e, n) {
        var s = this.simplifyTolerance(this._distance);

        if (e) {
          var _e436 = si.simplify(t, -s),
              _i103 = _e436.length - 1;

          n.initSideSegments(_e436[_i103], _e436[_i103 - 1], vn.LEFT), n.addFirstSegment();

          for (var _t567 = _i103 - 2; _t567 >= 0; _t567--) {
            n.addNextSegment(_e436[_t567], !0);
          }
        } else {
          var _e437 = si.simplify(t, s),
              _i104 = _e437.length - 1;

          n.initSideSegments(_e437[0], _e437[1], vn.LEFT), n.addFirstSegment();

          for (var _t568 = 2; _t568 <= _i104; _t568++) {
            n.addNextSegment(_e437[_t568], !0);
          }
        }

        n.addLastSegment();
      }
    }, {
      key: "getSegGen",
      value: function getSegGen(t) {
        return new ri(this._precisionModel, this._bufParams, t);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return oi;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "copyCoordinates",
      value: function copyCoordinates(t) {
        var e = new Array(t.length).fill(null);

        for (var _n292 = 0; _n292 < e.length; _n292++) {
          e[_n292] = new g(t[_n292]);
        }

        return e;
      }
    }]);

    return oi;
  }();

  oi.constructor_ = function () {
    this._distance = 0, this._precisionModel = null, this._bufParams = null;
    var t = arguments[0],
        e = arguments[1];
    this._precisionModel = t, this._bufParams = e;
  };

  var li =
  /*#__PURE__*/
  function () {
    function li() {
      _classCallCheck(this, li);

      li.constructor_.apply(this, arguments);
    }

    _createClass(li, [{
      key: "findStabbedSegments",
      value: function findStabbedSegments() {
        if (1 === arguments.length) {
          var _t569 = arguments[0],
              _e438 = new x();

          for (var _n293 = this._subgraphs.iterator(); _n293.hasNext();) {
            var _s196 = _n293.next(),
                _i105 = _s196.getEnvelope();

            _t569.y < _i105.getMinY() || _t569.y > _i105.getMaxY() || this.findStabbedSegments(_t569, _s196.getDirectedEdges(), _e438);
          }

          return _e438;
        }

        if (3 === arguments.length) if (_(arguments[2], m) && arguments[0] instanceof g && arguments[1] instanceof Kn) {
          var _t570 = arguments[0],
              _e439 = arguments[1],
              _n294 = arguments[2],
              _s197 = _e439.getEdge().getCoordinates();

          for (var _i106 = 0; _i106 < _s197.length - 1; _i106++) {
            if (this._seg.p0 = _s197[_i106], this._seg.p1 = _s197[_i106 + 1], this._seg.p0.y > this._seg.p1.y && this._seg.reverse(), Math.max(this._seg.p0.x, this._seg.p1.x) < _t570.x) continue;
            if (this._seg.isHorizontal()) continue;
            if (_t570.y < this._seg.p0.y || _t570.y > this._seg.p1.y) continue;
            if (v.index(this._seg.p0, this._seg.p1, _t570) === v.RIGHT) continue;

            var _r53 = _e439.getDepth(vn.LEFT);

            this._seg.p0.equals(_s197[_i106]) || (_r53 = _e439.getDepth(vn.RIGHT));

            var _o29 = new ai(this._seg, _r53);

            _n294.add(_o29);
          }
        } else if (_(arguments[2], m) && arguments[0] instanceof g && _(arguments[1], m)) {
          var _t571 = arguments[0],
              _e440 = arguments[1],
              _n295 = arguments[2];

          for (var _s198 = _e440.iterator(); _s198.hasNext();) {
            var _e441 = _s198.next();

            _e441.isForward() && this.findStabbedSegments(_t571, _e441, _n295);
          }
        }
      }
    }, {
      key: "getDepth",
      value: function getDepth(t) {
        var e = this.findStabbedSegments(t);
        return 0 === e.size() ? 0 : Ie.min(e)._leftDepth;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return li;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return li;
  }();

  var ai =
  /*#__PURE__*/
  function () {
    function ai() {
      _classCallCheck(this, ai);

      ai.constructor_.apply(this, arguments);
    }

    _createClass(ai, [{
      key: "compareTo",
      value: function compareTo(t) {
        var e = t;
        if (this._upwardSeg.minX() >= e._upwardSeg.maxX()) return 1;
        if (this._upwardSeg.maxX() <= e._upwardSeg.minX()) return -1;

        var n = this._upwardSeg.orientationIndex(e._upwardSeg);

        return 0 !== n ? n : 0 !== (n = -1 * e._upwardSeg.orientationIndex(this._upwardSeg)) ? n : this._upwardSeg.compareTo(e._upwardSeg);
      }
    }, {
      key: "compareX",
      value: function compareX(t, e) {
        var n = t.p0.compareTo(e.p0);
        return 0 !== n ? n : t.p1.compareTo(e.p1);
      }
    }, {
      key: "toString",
      value: function toString() {
        return this._upwardSeg.toString();
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return ai;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [r];
      }
    }]);

    return ai;
  }();

  ai.constructor_ = function () {
    this._upwardSeg = null, this._leftDepth = null;
    var t = arguments[0],
        e = arguments[1];
    this._upwardSeg = new ne(t), this._leftDepth = e;
  }, li.DepthSegment = ai, li.constructor_ = function () {
    this._subgraphs = null, this._seg = new ne();
    var t = arguments[0];
    this._subgraphs = t;
  };

  var ci =
  /*#__PURE__*/
  function () {
    function ci() {
      _classCallCheck(this, ci);

      ci.constructor_.apply(this, arguments);
    }

    _createClass(ci, [{
      key: "addPoint",
      value: function addPoint(t) {
        if (this._distance <= 0) return null;

        var e = t.getCoordinates(),
            n = this._curveBuilder.getLineCurve(e, this._distance);

        this.addCurve(n, se.EXTERIOR, se.INTERIOR);
      }
    }, {
      key: "addPolygon",
      value: function addPolygon(t) {
        var e = this._distance,
            n = vn.LEFT;
        this._distance < 0 && (e = -this._distance, n = vn.RIGHT);
        var s = t.getExteriorRing(),
            i = X.removeRepeatedPoints(s.getCoordinates());
        if (this._distance < 0 && this.isErodedCompletely(s, this._distance)) return null;
        if (this._distance <= 0 && i.length < 3) return null;
        this.addPolygonRing(i, e, n, se.EXTERIOR, se.INTERIOR);

        for (var _s199 = 0; _s199 < t.getNumInteriorRing(); _s199++) {
          var _i107 = t.getInteriorRingN(_s199),
              _r54 = X.removeRepeatedPoints(_i107.getCoordinates());

          this._distance > 0 && this.isErodedCompletely(_i107, -this._distance) || this.addPolygonRing(_r54, e, vn.opposite(n), se.INTERIOR, se.EXTERIOR);
        }
      }
    }, {
      key: "isTriangleErodedCompletely",
      value: function isTriangleErodedCompletely(t, e) {
        var n = new oe(t[0], t[1], t[2]),
            s = n.inCentre();
        return A.pointToSegment(s, n.p0, n.p1) < Math.abs(e);
      }
    }, {
      key: "addLineString",
      value: function addLineString(t) {
        if (this._distance <= 0 && !this._curveBuilder.getBufferParameters().isSingleSided()) return null;

        var e = X.removeRepeatedPoints(t.getCoordinates()),
            n = this._curveBuilder.getLineCurve(e, this._distance);

        this.addCurve(n, se.EXTERIOR, se.INTERIOR);
      }
    }, {
      key: "addCurve",
      value: function addCurve(t, e, n) {
        if (null === t || t.length < 2) return null;
        var s = new Gs(t, new Gn(0, se.BOUNDARY, e, n));

        this._curveList.add(s);
      }
    }, {
      key: "getCurves",
      value: function getCurves() {
        return this.add(this._inputGeom), this._curveList;
      }
    }, {
      key: "addPolygonRing",
      value: function addPolygonRing(t, e, n, s, i) {
        if (0 === e && t.length < Dt.MINIMUM_VALID_SIZE) return null;
        var r = s,
            o = i;
        t.length >= Dt.MINIMUM_VALID_SIZE && v.isCCW(t) && (r = i, o = s, n = vn.opposite(n));

        var l = this._curveBuilder.getRingCurve(t, n, e);

        this.addCurve(l, r, o);
      }
    }, {
      key: "add",
      value: function add(t) {
        if (t.isEmpty()) return null;
        if (t instanceof Mt) this.addPolygon(t);else if (t instanceof Rt) this.addLineString(t);else if (t instanceof vt) this.addPoint(t);else if (t instanceof At) this.addCollection(t);else if (t instanceof pt) this.addCollection(t);else if (t instanceof Ft) this.addCollection(t);else {
          if (!(t instanceof ft)) throw new UnsupportedOperationException(t.getClass().getName());
          this.addCollection(t);
        }
      }
    }, {
      key: "isErodedCompletely",
      value: function isErodedCompletely(t, e) {
        var n = t.getCoordinates();
        if (n.length < 4) return e < 0;
        if (4 === n.length) return this.isTriangleErodedCompletely(n, e);
        var s = t.getEnvelopeInternal(),
            i = Math.min(s.getHeight(), s.getWidth());
        return e < 0 && 2 * Math.abs(e) > i;
      }
    }, {
      key: "addCollection",
      value: function addCollection(t) {
        for (var _e442 = 0; _e442 < t.getNumGeometries(); _e442++) {
          var _n296 = t.getGeometryN(_e442);

          this.add(_n296);
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return ci;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return ci;
  }();

  ci.constructor_ = function () {
    this._inputGeom = null, this._distance = null, this._curveBuilder = null, this._curveList = new x();
    var t = arguments[0],
        e = arguments[1],
        n = arguments[2];
    this._inputGeom = t, this._distance = e, this._curveBuilder = n;
  };

  var hi =
  /*#__PURE__*/
  function () {
    function hi() {
      _classCallCheck(this, hi);

      hi.constructor_.apply(this, arguments);
    }

    _createClass(hi, [{
      key: "getNextCW",
      value: function getNextCW(t) {
        this.getEdges();

        var e = this._edgeList.indexOf(t);

        var n = e - 1;
        return 0 === e && (n = this._edgeList.size() - 1), this._edgeList.get(n);
      }
    }, {
      key: "propagateSideLabels",
      value: function propagateSideLabels(t) {
        var e = se.NONE;

        for (var _n297 = this.iterator(); _n297.hasNext();) {
          var _s200 = _n297.next().getLabel();

          _s200.isArea(t) && _s200.getLocation(t, vn.LEFT) !== se.NONE && (e = _s200.getLocation(t, vn.LEFT));
        }

        if (e === se.NONE) return null;
        var n = e;

        for (var _e443 = this.iterator(); _e443.hasNext();) {
          var _s201 = _e443.next(),
              _i108 = _s201.getLabel();

          if (_i108.getLocation(t, vn.ON) === se.NONE && _i108.setLocation(t, vn.ON, n), _i108.isArea(t)) {
            var _e444 = _i108.getLocation(t, vn.LEFT),
                _r55 = _i108.getLocation(t, vn.RIGHT);

            if (_r55 !== se.NONE) {
              if (_r55 !== n) throw new jn("side location conflict", _s201.getCoordinate());
              _e444 === se.NONE && u.shouldNeverReachHere("found single null side (at " + _s201.getCoordinate() + ")"), n = _e444;
            } else u.isTrue(_i108.getLocation(t, vn.LEFT) === se.NONE, "found single null side"), _i108.setLocation(t, vn.RIGHT, n), _i108.setLocation(t, vn.LEFT, n);
          }
        }
      }
    }, {
      key: "getCoordinate",
      value: function getCoordinate() {
        var t = this.iterator();
        return t.hasNext() ? t.next().getCoordinate() : null;
      }
    }, {
      key: "print",
      value: function print(t) {
        O.out.println("EdgeEndStar:   " + this.getCoordinate());

        for (var _e445 = this.iterator(); _e445.hasNext();) {
          _e445.next().print(t);
        }
      }
    }, {
      key: "isAreaLabelsConsistent",
      value: function isAreaLabelsConsistent(t) {
        return this.computeEdgeEndLabels(t.getBoundaryNodeRule()), this.checkAreaLabelsConsistent(0);
      }
    }, {
      key: "checkAreaLabelsConsistent",
      value: function checkAreaLabelsConsistent(t) {
        var e = this.getEdges();
        if (e.size() <= 0) return !0;
        var n = e.size() - 1,
            s = e.get(n).getLabel().getLocation(t, vn.LEFT);
        u.isTrue(s !== se.NONE, "Found unlabelled area edge");
        var i = s;

        for (var _e446 = this.iterator(); _e446.hasNext();) {
          var _n298 = _e446.next().getLabel();

          u.isTrue(_n298.isArea(t), "Found non-area edge");

          var _s202 = _n298.getLocation(t, vn.LEFT),
              _r56 = _n298.getLocation(t, vn.RIGHT);

          if (_s202 === _r56) return !1;
          if (_r56 !== i) return !1;
          i = _s202;
        }

        return !0;
      }
    }, {
      key: "findIndex",
      value: function findIndex(t) {
        this.iterator();

        for (var _e447 = 0; _e447 < this._edgeList.size(); _e447++) {
          if (this._edgeList.get(_e447) === t) return _e447;
        }

        return -1;
      }
    }, {
      key: "iterator",
      value: function iterator() {
        return this.getEdges().iterator();
      }
    }, {
      key: "getEdges",
      value: function getEdges() {
        return null === this._edgeList && (this._edgeList = new x(this._edgeMap.values())), this._edgeList;
      }
    }, {
      key: "getLocation",
      value: function getLocation(t, e, n) {
        return this._ptInAreaLocation[t] === se.NONE && (this._ptInAreaLocation[t] = Qe.locate(e, n[t].getGeometry())), this._ptInAreaLocation[t];
      }
    }, {
      key: "toString",
      value: function toString() {
        var t = new w();
        t.append("EdgeEndStar:   " + this.getCoordinate()), t.append("\n");

        for (var _e448 = this.iterator(); _e448.hasNext();) {
          var _n299 = _e448.next();

          t.append(_n299), t.append("\n");
        }

        return t.toString();
      }
    }, {
      key: "computeEdgeEndLabels",
      value: function computeEdgeEndLabels(t) {
        for (var _e449 = this.iterator(); _e449.hasNext();) {
          _e449.next().computeLabel(t);
        }
      }
    }, {
      key: "computeLabelling",
      value: function computeLabelling(t) {
        this.computeEdgeEndLabels(t[0].getBoundaryNodeRule()), this.propagateSideLabels(0), this.propagateSideLabels(1);
        var e = [!1, !1];

        for (var _t572 = this.iterator(); _t572.hasNext();) {
          var _n300 = _t572.next().getLabel();

          for (var _t573 = 0; _t573 < 2; _t573++) {
            _n300.isLine(_t573) && _n300.getLocation(_t573) === se.BOUNDARY && (e[_t573] = !0);
          }
        }

        for (var _n301 = this.iterator(); _n301.hasNext();) {
          var _s203 = _n301.next(),
              _i109 = _s203.getLabel();

          for (var _n302 = 0; _n302 < 2; _n302++) {
            if (_i109.isAnyNull(_n302)) {
              var _r57 = se.NONE;
              if (e[_n302]) _r57 = se.EXTERIOR;else {
                var _e450 = _s203.getCoordinate();

                _r57 = this.getLocation(_n302, _e450, t);
              }

              _i109.setAllLocationsIfNull(_n302, _r57);
            }
          }
        }
      }
    }, {
      key: "getDegree",
      value: function getDegree() {
        return this._edgeMap.size();
      }
    }, {
      key: "insertEdgeEnd",
      value: function insertEdgeEnd(t, e) {
        this._edgeMap.put(t, e), this._edgeList = null;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return hi;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return hi;
  }();

  hi.constructor_ = function () {
    this._edgeMap = new ot(), this._edgeList = null, this._ptInAreaLocation = [se.NONE, se.NONE];
  };

  var ui =
  /*#__PURE__*/
  function (_hi) {
    _inherits(ui, _hi);

    function ui() {
      var _this36;

      _classCallCheck(this, ui);

      _this36 = _possibleConstructorReturn(this, _getPrototypeOf(ui).call(this)), ui.constructor_.apply(_assertThisInitialized(_this36), arguments);
      return _this36;
    }

    _createClass(ui, [{
      key: "linkResultDirectedEdges",
      value: function linkResultDirectedEdges() {
        this.getResultAreaEdges();
        var t = null,
            e = null,
            n = this._SCANNING_FOR_INCOMING;

        for (var _s204 = 0; _s204 < this._resultAreaEdgeList.size(); _s204++) {
          var _i110 = this._resultAreaEdgeList.get(_s204),
              _r58 = _i110.getSym();

          if (_i110.getLabel().isArea()) switch (null === t && _i110.isInResult() && (t = _i110), n) {
            case this._SCANNING_FOR_INCOMING:
              if (!_r58.isInResult()) continue;
              e = _r58, n = this._LINKING_TO_OUTGOING;
              break;

            case this._LINKING_TO_OUTGOING:
              if (!_i110.isInResult()) continue;
              e.setNext(_i110), n = this._SCANNING_FOR_INCOMING;
          }
        }

        if (n === this._LINKING_TO_OUTGOING) {
          if (null === t) throw new jn("no outgoing dirEdge found", this.getCoordinate());
          u.isTrue(t.isInResult(), "unable to link last incoming dirEdge"), e.setNext(t);
        }
      }
    }, {
      key: "insert",
      value: function insert(t) {
        var e = t;
        this.insertEdgeEnd(e, e);
      }
    }, {
      key: "getRightmostEdge",
      value: function getRightmostEdge() {
        var t = this.getEdges(),
            e = t.size();
        if (e < 1) return null;
        var n = t.get(0);
        if (1 === e) return n;
        var s = t.get(e - 1),
            i = n.getQuadrant(),
            r = s.getQuadrant();
        return Nn.isNorthern(i) && Nn.isNorthern(r) ? n : Nn.isNorthern(i) || Nn.isNorthern(r) ? 0 !== n.getDy() ? n : 0 !== s.getDy() ? s : (u.shouldNeverReachHere("found two horizontal edges incident on node"), null) : s;
      }
    }, {
      key: "print",
      value: function print(t) {
        O.out.println("DirectedEdgeStar: " + this.getCoordinate());

        for (var _e451 = this.iterator(); _e451.hasNext();) {
          var _n303 = _e451.next();

          t.print("out "), _n303.print(t), t.println(), t.print("in "), _n303.getSym().print(t), t.println();
        }
      }
    }, {
      key: "getResultAreaEdges",
      value: function getResultAreaEdges() {
        if (null !== this._resultAreaEdgeList) return this._resultAreaEdgeList;
        this._resultAreaEdgeList = new x();

        for (var _t574 = this.iterator(); _t574.hasNext();) {
          var _e452 = _t574.next();

          (_e452.isInResult() || _e452.getSym().isInResult()) && this._resultAreaEdgeList.add(_e452);
        }

        return this._resultAreaEdgeList;
      }
    }, {
      key: "updateLabelling",
      value: function updateLabelling(t) {
        for (var _e453 = this.iterator(); _e453.hasNext();) {
          var _n304 = _e453.next().getLabel();

          _n304.setAllLocationsIfNull(0, t.getLocation(0)), _n304.setAllLocationsIfNull(1, t.getLocation(1));
        }
      }
    }, {
      key: "linkAllDirectedEdges",
      value: function linkAllDirectedEdges() {
        this.getEdges();
        var t = null,
            e = null;

        for (var _n305 = this._edgeList.size() - 1; _n305 >= 0; _n305--) {
          var _s205 = this._edgeList.get(_n305),
              _i111 = _s205.getSym();

          null === e && (e = _i111), null !== t && _i111.setNext(t), t = _s205;
        }

        e.setNext(t);
      }
    }, {
      key: "computeDepths",
      value: function computeDepths() {
        if (1 === arguments.length) {
          var _t575 = arguments[0],
              _e454 = this.findIndex(_t575),
              _n306 = _t575.getDepth(vn.LEFT),
              _s206 = _t575.getDepth(vn.RIGHT),
              _i112 = this.computeDepths(_e454 + 1, this._edgeList.size(), _n306);

          if (this.computeDepths(0, _e454, _i112) !== _s206) throw new jn("depth mismatch at " + _t575.getCoordinate());
        } else if (3 === arguments.length) {
          var _t576 = arguments[0],
              _e455 = arguments[1];
          var _n307 = arguments[2];

          for (var _s207 = _t576; _s207 < _e455; _s207++) {
            var _t577 = this._edgeList.get(_s207);

            _t577.setEdgeDepths(vn.RIGHT, _n307), _n307 = _t577.getDepth(vn.LEFT);
          }

          return _n307;
        }
      }
    }, {
      key: "mergeSymLabels",
      value: function mergeSymLabels() {
        for (var _t578 = this.iterator(); _t578.hasNext();) {
          var _e456 = _t578.next();

          _e456.getLabel().merge(_e456.getSym().getLabel());
        }
      }
    }, {
      key: "linkMinimalDirectedEdges",
      value: function linkMinimalDirectedEdges(t) {
        var e = null,
            n = null,
            s = this._SCANNING_FOR_INCOMING;

        for (var _i113 = this._resultAreaEdgeList.size() - 1; _i113 >= 0; _i113--) {
          var _r59 = this._resultAreaEdgeList.get(_i113),
              _o30 = _r59.getSym();

          switch (null === e && _r59.getEdgeRing() === t && (e = _r59), s) {
            case this._SCANNING_FOR_INCOMING:
              if (_o30.getEdgeRing() !== t) continue;
              n = _o30, s = this._LINKING_TO_OUTGOING;
              break;

            case this._LINKING_TO_OUTGOING:
              if (_r59.getEdgeRing() !== t) continue;
              n.setNextMin(_r59), s = this._SCANNING_FOR_INCOMING;
          }
        }

        s === this._LINKING_TO_OUTGOING && (u.isTrue(null !== e, "found null for first outgoing dirEdge"), u.isTrue(e.getEdgeRing() === t, "unable to link last incoming dirEdge"), n.setNextMin(e));
      }
    }, {
      key: "getOutgoingDegree",
      value: function getOutgoingDegree() {
        if (0 === arguments.length) {
          var _t579 = 0;

          for (var _e457 = this.iterator(); _e457.hasNext();) {
            _e457.next().isInResult() && _t579++;
          }

          return _t579;
        }

        if (1 === arguments.length) {
          var _t580 = arguments[0];
          var _e458 = 0;

          for (var _n308 = this.iterator(); _n308.hasNext();) {
            _n308.next().getEdgeRing() === _t580 && _e458++;
          }

          return _e458;
        }
      }
    }, {
      key: "getLabel",
      value: function getLabel() {
        return this._label;
      }
    }, {
      key: "findCoveredLineEdges",
      value: function findCoveredLineEdges() {
        var t = se.NONE;

        for (var _e459 = this.iterator(); _e459.hasNext();) {
          var _n309 = _e459.next(),
              _s208 = _n309.getSym();

          if (!_n309.isLineEdge()) {
            if (_n309.isInResult()) {
              t = se.INTERIOR;
              break;
            }

            if (_s208.isInResult()) {
              t = se.EXTERIOR;
              break;
            }
          }
        }

        if (t === se.NONE) return null;
        var e = t;

        for (var _t581 = this.iterator(); _t581.hasNext();) {
          var _n310 = _t581.next(),
              _s209 = _n310.getSym();

          _n310.isLineEdge() ? _n310.getEdge().setCovered(e === se.INTERIOR) : (_n310.isInResult() && (e = se.EXTERIOR), _s209.isInResult() && (e = se.INTERIOR));
        }
      }
    }, {
      key: "computeLabelling",
      value: function computeLabelling(t) {
        _get(_getPrototypeOf(ui.prototype), "computeLabelling", this).call(this, t), this._label = new Gn(se.NONE);

        for (var _t582 = this.iterator(); _t582.hasNext();) {
          var _e460 = _t582.next().getEdge().getLabel();

          for (var _t583 = 0; _t583 < 2; _t583++) {
            var _n311 = _e460.getLocation(_t583);

            _n311 !== se.INTERIOR && _n311 !== se.BOUNDARY || this._label.setLocation(_t583, se.INTERIOR);
          }
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return ui;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return ui;
  }(hi);

  ui.constructor_ = function () {
    this._resultAreaEdgeList = null, this._label = null, this._SCANNING_FOR_INCOMING = 1, this._LINKING_TO_OUTGOING = 2;
  };

  var gi =
  /*#__PURE__*/
  function (_Zn) {
    _inherits(gi, _Zn);

    function gi() {
      var _this37;

      _classCallCheck(this, gi);

      _this37 = _possibleConstructorReturn(this, _getPrototypeOf(gi).call(this)), gi.constructor_.apply(_assertThisInitialized(_this37), arguments);
      return _this37;
    }

    _createClass(gi, [{
      key: "createNode",
      value: function createNode(t) {
        return new Xn(t, new ui());
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return gi;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return gi;
  }(Zn);

  gi.constructor_ = function () {};

  var di =
  /*#__PURE__*/
  function () {
    function di() {
      _classCallCheck(this, di);

      di.constructor_.apply(this, arguments);
    }

    _createClass(di, [{
      key: "compareTo",
      value: function compareTo(t) {
        var e = t;
        return di.compareOriented(this._pts, this._orientation, e._pts, e._orientation);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return di;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [r];
      }
    }], [{
      key: "orientation",
      value: function orientation(t) {
        return 1 === X.increasingDirection(t);
      }
    }, {
      key: "compareOriented",
      value: function compareOriented(t, e, n, s) {
        var i = e ? 1 : -1,
            r = s ? 1 : -1,
            o = e ? t.length : -1,
            l = s ? n.length : -1;
        var a = e ? 0 : t.length - 1,
            c = s ? 0 : n.length - 1;

        for (;;) {
          var _e461 = t[a].compareTo(n[c]);

          if (0 !== _e461) return _e461;

          var _s210 = (a += i) === o,
              _h5 = (c += r) === l;

          if (_s210 && !_h5) return -1;
          if (!_s210 && _h5) return 1;
          if (_s210 && _h5) return 0;
        }
      }
    }]);

    return di;
  }();

  di.constructor_ = function () {
    this._pts = null, this._orientation = null;
    var t = arguments[0];
    this._pts = t, this._orientation = di.orientation(t);
  };

  var _i =
  /*#__PURE__*/
  function () {
    function _i() {
      _classCallCheck(this, _i);

      _i.constructor_.apply(this, arguments);
    }

    _createClass(_i, [{
      key: "print",
      value: function print(t) {
        t.print("MULTILINESTRING ( ");

        for (var _e462 = 0; _e462 < this._edges.size(); _e462++) {
          var _n312 = this._edges.get(_e462);

          _e462 > 0 && t.print(","), t.print("(");

          var _s211 = _n312.getCoordinates();

          for (var _e463 = 0; _e463 < _s211.length; _e463++) {
            _e463 > 0 && t.print(","), t.print(_s211[_e463].x + " " + _s211[_e463].y);
          }

          t.println(")");
        }

        t.print(")  ");
      }
    }, {
      key: "addAll",
      value: function addAll(t) {
        for (var _e464 = t.iterator(); _e464.hasNext();) {
          this.add(_e464.next());
        }
      }
    }, {
      key: "findEdgeIndex",
      value: function findEdgeIndex(t) {
        for (var _e465 = 0; _e465 < this._edges.size(); _e465++) {
          if (this._edges.get(_e465).equals(t)) return _e465;
        }

        return -1;
      }
    }, {
      key: "iterator",
      value: function iterator() {
        return this._edges.iterator();
      }
    }, {
      key: "getEdges",
      value: function getEdges() {
        return this._edges;
      }
    }, {
      key: "get",
      value: function get(t) {
        return this._edges.get(t);
      }
    }, {
      key: "findEqualEdge",
      value: function findEqualEdge(t) {
        var e = new di(t.getCoordinates());
        return this._ocaMap.get(e);
      }
    }, {
      key: "add",
      value: function add(t) {
        this._edges.add(t);

        var e = new di(t.getCoordinates());

        this._ocaMap.put(e, t);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return _i;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return _i;
  }();

  _i.constructor_ = function () {
    this._edges = new x(), this._ocaMap = new ot();
  };

  var fi =
  /*#__PURE__*/
  function () {
    function fi() {
      _classCallCheck(this, fi);

      fi.constructor_.apply(this, arguments);
    }

    _createClass(fi, [{
      key: "processIntersections",
      value: function processIntersections(t, e, n, s) {}
    }, {
      key: "isDone",
      value: function isDone() {}
    }, {
      key: "getClass",
      value: function getClass() {
        return fi;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return fi;
  }();

  fi.constructor_ = function () {};

  var pi =
  /*#__PURE__*/
  function () {
    function pi() {
      _classCallCheck(this, pi);

      pi.constructor_.apply(this, arguments);
    }

    _createClass(pi, [{
      key: "isTrivialIntersection",
      value: function isTrivialIntersection(t, e, n, s) {
        if (t === n && 1 === this._li.getIntersectionNum()) {
          if (pi.isAdjacentSegments(e, s)) return !0;

          if (t.isClosed()) {
            var _n313 = t.size() - 1;

            if (0 === e && s === _n313 || 0 === s && e === _n313) return !0;
          }
        }

        return !1;
      }
    }, {
      key: "getProperIntersectionPoint",
      value: function getProperIntersectionPoint() {
        return this._properIntersectionPoint;
      }
    }, {
      key: "hasProperInteriorIntersection",
      value: function hasProperInteriorIntersection() {
        return this._hasProperInterior;
      }
    }, {
      key: "getLineIntersector",
      value: function getLineIntersector() {
        return this._li;
      }
    }, {
      key: "hasProperIntersection",
      value: function hasProperIntersection() {
        return this._hasProper;
      }
    }, {
      key: "processIntersections",
      value: function processIntersections(t, e, n, s) {
        if (t === n && e === s) return null;
        this.numTests++;
        var i = t.getCoordinates()[e],
            r = t.getCoordinates()[e + 1],
            o = n.getCoordinates()[s],
            l = n.getCoordinates()[s + 1];
        this._li.computeIntersection(i, r, o, l), this._li.hasIntersection() && (this.numIntersections++, this._li.isInteriorIntersection() && (this.numInteriorIntersections++, this._hasInterior = !0), this.isTrivialIntersection(t, e, n, s) || (this._hasIntersection = !0, t.addIntersections(this._li, e, 0), n.addIntersections(this._li, s, 1), this._li.isProper() && (this.numProperIntersections++, this._hasProper = !0, this._hasProperInterior = !0)));
      }
    }, {
      key: "hasIntersection",
      value: function hasIntersection() {
        return this._hasIntersection;
      }
    }, {
      key: "isDone",
      value: function isDone() {
        return !1;
      }
    }, {
      key: "hasInteriorIntersection",
      value: function hasInteriorIntersection() {
        return this._hasInterior;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return pi;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [fi];
      }
    }], [{
      key: "isAdjacentSegments",
      value: function isAdjacentSegments(t, e) {
        return 1 === Math.abs(t - e);
      }
    }]);

    return pi;
  }();

  pi.constructor_ = function () {
    this._hasIntersection = !1, this._hasProper = !1, this._hasProperInterior = !1, this._hasInterior = !1, this._properIntersectionPoint = null, this._li = null, this._isSelfIntersection = null, this.numIntersections = 0, this.numInteriorIntersections = 0, this.numProperIntersections = 0, this.numTests = 0;
    var t = arguments[0];
    this._li = t;
  };

  var mi =
  /*#__PURE__*/
  function () {
    function mi() {
      _classCallCheck(this, mi);

      mi.constructor_.apply(this, arguments);
    }

    _createClass(mi, [{
      key: "setWorkingPrecisionModel",
      value: function setWorkingPrecisionModel(t) {
        this._workingPrecisionModel = t;
      }
    }, {
      key: "insertUniqueEdge",
      value: function insertUniqueEdge(t) {
        var e = this._edgeList.findEqualEdge(t);

        if (null !== e) {
          var _n314 = e.getLabel();

          var _s212 = t.getLabel();

          e.isPointwiseEqual(t) || (_s212 = new Gn(t.getLabel())).flip(), _n314.merge(_s212);

          var _i114 = mi.depthDelta(_s212),
              _r60 = e.getDepthDelta() + _i114;

          e.setDepthDelta(_r60);
        } else this._edgeList.add(t), t.setDepthDelta(mi.depthDelta(t.getLabel()));
      }
    }, {
      key: "buildSubgraphs",
      value: function buildSubgraphs(t, e) {
        var n = new x();

        for (var _s213 = t.iterator(); _s213.hasNext();) {
          var _t584 = _s213.next(),
              _i115 = _t584.getRightmostCoordinate(),
              _r61 = new li(n).getDepth(_i115);

          _t584.computeDepth(_r61), _t584.findResultEdges(), n.add(_t584), e.add(_t584.getDirectedEdges(), _t584.getNodes());
        }
      }
    }, {
      key: "createSubgraphs",
      value: function createSubgraphs(t) {
        var e = new x();

        for (var _n315 = t.getNodes().iterator(); _n315.hasNext();) {
          var _t585 = _n315.next();

          if (!_t585.isVisited()) {
            var _n316 = new Js();

            _n316.create(_t585), e.add(_n316);
          }
        }

        return Ie.sort(e, Ie.reverseOrder()), e;
      }
    }, {
      key: "createEmptyResultGeometry",
      value: function createEmptyResultGeometry() {
        return this._geomFact.createPolygon();
      }
    }, {
      key: "getNoder",
      value: function getNoder(t) {
        if (null !== this._workingNoder) return this._workingNoder;
        var e = new Us(),
            n = new ee();
        return n.setPrecisionModel(t), e.setSegmentIntersector(new pi(n)), e;
      }
    }, {
      key: "buffer",
      value: function buffer(t, e) {
        var n = this._workingPrecisionModel;
        null === n && (n = t.getPrecisionModel()), this._geomFact = t.getFactory();
        var s = new oi(n, this._bufParams),
            i = new ci(t, e, s).getCurves();
        if (i.size() <= 0) return this.createEmptyResultGeometry();
        this.computeNodedEdges(i, n), this._graph = new Qn(new gi()), this._graph.addEdges(this._edgeList.getEdges());
        var r = this.createSubgraphs(this._graph),
            o = new ni(this._geomFact);
        this.buildSubgraphs(r, o);
        var l = o.getPolygons();
        return l.size() <= 0 ? this.createEmptyResultGeometry() : this._geomFact.buildGeometry(l);
      }
    }, {
      key: "computeNodedEdges",
      value: function computeNodedEdges(t, e) {
        var n = this.getNoder(e);
        n.computeNodes(t);

        for (var _t586 = n.getNodedSubstrings().iterator(); _t586.hasNext();) {
          var _e466 = _t586.next(),
              _n317 = _e466.getCoordinates();

          if (2 === _n317.length && _n317[0].equals2D(_n317[1])) continue;

          var _s214 = _e466.getData(),
              _i116 = new kn(_e466.getCoordinates(), new Gn(_s214));

          this.insertUniqueEdge(_i116);
        }
      }
    }, {
      key: "setNoder",
      value: function setNoder(t) {
        this._workingNoder = t;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return mi;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "depthDelta",
      value: function depthDelta(t) {
        var e = t.getLocation(0, vn.LEFT),
            n = t.getLocation(0, vn.RIGHT);
        return e === se.INTERIOR && n === se.EXTERIOR ? 1 : e === se.EXTERIOR && n === se.INTERIOR ? -1 : 0;
      }
    }, {
      key: "convertSegStrings",
      value: function convertSegStrings(t) {
        var e = new Wt(),
            n = new x();

        for (; t.hasNext();) {
          var _s215 = t.next(),
              _i117 = e.createLineString(_s215.getCoordinates());

          n.add(_i117);
        }

        return e.buildGeometry(n);
      }
    }]);

    return mi;
  }();

  mi.constructor_ = function () {
    this._bufParams = null, this._workingPrecisionModel = null, this._workingNoder = null, this._geomFact = null, this._graph = null, this._edgeList = new _i();
    var t = arguments[0];
    this._bufParams = t;
  };

  var yi =
  /*#__PURE__*/
  function () {
    function yi() {
      _classCallCheck(this, yi);

      yi.constructor_.apply(this, arguments);
    }

    _createClass(yi, [{
      key: "checkEndPtVertexIntersections",
      value: function checkEndPtVertexIntersections() {
        if (0 === arguments.length) for (var _t587 = this._segStrings.iterator(); _t587.hasNext();) {
          var _e467 = _t587.next().getCoordinates();

          this.checkEndPtVertexIntersections(_e467[0], this._segStrings), this.checkEndPtVertexIntersections(_e467[_e467.length - 1], this._segStrings);
        } else if (2 === arguments.length) {
          var _t588 = arguments[0];

          for (var _e468 = arguments[1].iterator(); _e468.hasNext();) {
            var _n318 = _e468.next().getCoordinates();

            for (var _e469 = 1; _e469 < _n318.length - 1; _e469++) {
              if (_n318[_e469].equals(_t588)) throw new c("found endpt/interior pt intersection at index " + _e469 + " :pt " + _t588);
            }
          }
        }
      }
    }, {
      key: "checkInteriorIntersections",
      value: function checkInteriorIntersections() {
        if (0 === arguments.length) for (var _t589 = this._segStrings.iterator(); _t589.hasNext();) {
          var _e470 = _t589.next();

          for (var _t590 = this._segStrings.iterator(); _t590.hasNext();) {
            var _n319 = _t590.next();

            this.checkInteriorIntersections(_e470, _n319);
          }
        } else if (2 === arguments.length) {
          var _t591 = arguments[0],
              _e471 = arguments[1],
              _n320 = _t591.getCoordinates(),
              _s216 = _e471.getCoordinates();

          for (var _i118 = 0; _i118 < _n320.length - 1; _i118++) {
            for (var _n321 = 0; _n321 < _s216.length - 1; _n321++) {
              this.checkInteriorIntersections(_t591, _i118, _e471, _n321);
            }
          }
        } else if (4 === arguments.length) {
          var _t592 = arguments[0],
              _e472 = arguments[1],
              _n322 = arguments[2],
              _s217 = arguments[3];
          if (_t592 === _n322 && _e472 === _s217) return null;

          var _i119 = _t592.getCoordinates()[_e472],
              _r62 = _t592.getCoordinates()[_e472 + 1],
              _o31 = _n322.getCoordinates()[_s217],
              _l26 = _n322.getCoordinates()[_s217 + 1];

          if (this._li.computeIntersection(_i119, _r62, _o31, _l26), this._li.hasIntersection() && (this._li.isProper() || this.hasInteriorIntersection(this._li, _i119, _r62) || this.hasInteriorIntersection(this._li, _o31, _l26))) throw new c("found non-noded intersection at " + _i119 + "-" + _r62 + " and " + _o31 + "-" + _l26);
        }
      }
    }, {
      key: "checkValid",
      value: function checkValid() {
        this.checkEndPtVertexIntersections(), this.checkInteriorIntersections(), this.checkCollapses();
      }
    }, {
      key: "checkCollapses",
      value: function checkCollapses() {
        if (0 === arguments.length) for (var _t593 = this._segStrings.iterator(); _t593.hasNext();) {
          var _e473 = _t593.next();

          this.checkCollapses(_e473);
        } else if (1 === arguments.length) {
          var _t594 = arguments[0].getCoordinates();

          for (var _e474 = 0; _e474 < _t594.length - 2; _e474++) {
            this.checkCollapse(_t594[_e474], _t594[_e474 + 1], _t594[_e474 + 2]);
          }
        }
      }
    }, {
      key: "hasInteriorIntersection",
      value: function hasInteriorIntersection(t, e, n) {
        for (var _s218 = 0; _s218 < t.getIntersectionNum(); _s218++) {
          var _i120 = t.getIntersection(_s218);

          if (!_i120.equals(e) && !_i120.equals(n)) return !0;
        }

        return !1;
      }
    }, {
      key: "checkCollapse",
      value: function checkCollapse(t, e, n) {
        if (t.equals(n)) throw new c("found non-noded collapse at " + yi.fact.createLineString([t, e, n]));
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return yi;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return yi;
  }();

  yi.constructor_ = function () {
    this._li = new ee(), this._segStrings = null;
    var t = arguments[0];
    this._segStrings = t;
  }, yi.fact = new Wt();

  var xi =
  /*#__PURE__*/
  function () {
    function xi() {
      _classCallCheck(this, xi);

      xi.constructor_.apply(this, arguments);
    }

    _createClass(xi, [{
      key: "intersectsScaled",
      value: function intersectsScaled(t, e) {
        var n = Math.min(t.x, e.x),
            s = Math.max(t.x, e.x),
            i = Math.min(t.y, e.y),
            r = Math.max(t.y, e.y),
            o = this._maxx < n || this._minx > s || this._maxy < i || this._miny > r;
        if (o) return !1;
        var l = this.intersectsToleranceSquare(t, e);
        return u.isTrue(!(o && l), "Found bad envelope test"), l;
      }
    }, {
      key: "initCorners",
      value: function initCorners(t) {
        this._minx = t.x - .5, this._maxx = t.x + .5, this._miny = t.y - .5, this._maxy = t.y + .5, this._corner[0] = new g(this._maxx, this._maxy), this._corner[1] = new g(this._minx, this._maxy), this._corner[2] = new g(this._minx, this._miny), this._corner[3] = new g(this._maxx, this._miny);
      }
    }, {
      key: "intersects",
      value: function intersects(t, e) {
        return 1 === this._scaleFactor ? this.intersectsScaled(t, e) : (this.copyScaled(t, this._p0Scaled), this.copyScaled(e, this._p1Scaled), this.intersectsScaled(this._p0Scaled, this._p1Scaled));
      }
    }, {
      key: "scale",
      value: function scale(t) {
        return Math.round(t * this._scaleFactor);
      }
    }, {
      key: "getCoordinate",
      value: function getCoordinate() {
        return this._originalPt;
      }
    }, {
      key: "copyScaled",
      value: function copyScaled(t, e) {
        e.x = this.scale(t.x), e.y = this.scale(t.y);
      }
    }, {
      key: "getSafeEnvelope",
      value: function getSafeEnvelope() {
        if (null === this._safeEnv) {
          var _t595 = xi.SAFE_ENV_EXPANSION_FACTOR / this._scaleFactor;

          this._safeEnv = new N(this._originalPt.x - _t595, this._originalPt.x + _t595, this._originalPt.y - _t595, this._originalPt.y + _t595);
        }

        return this._safeEnv;
      }
    }, {
      key: "intersectsPixelClosure",
      value: function intersectsPixelClosure(t, e) {
        return this._li.computeIntersection(t, e, this._corner[0], this._corner[1]), !!this._li.hasIntersection() || (this._li.computeIntersection(t, e, this._corner[1], this._corner[2]), !!this._li.hasIntersection() || (this._li.computeIntersection(t, e, this._corner[2], this._corner[3]), !!this._li.hasIntersection() || (this._li.computeIntersection(t, e, this._corner[3], this._corner[0]), !!this._li.hasIntersection())));
      }
    }, {
      key: "intersectsToleranceSquare",
      value: function intersectsToleranceSquare(t, e) {
        var n = !1,
            s = !1;
        return this._li.computeIntersection(t, e, this._corner[0], this._corner[1]), !!this._li.isProper() || (this._li.computeIntersection(t, e, this._corner[1], this._corner[2]), !!this._li.isProper() || (this._li.hasIntersection() && (n = !0), this._li.computeIntersection(t, e, this._corner[2], this._corner[3]), !!this._li.isProper() || (this._li.hasIntersection() && (s = !0), this._li.computeIntersection(t, e, this._corner[3], this._corner[0]), !!this._li.isProper() || !(!n || !s) || !!t.equals(this._pt) || !!e.equals(this._pt))));
      }
    }, {
      key: "addSnappedNode",
      value: function addSnappedNode(t, e) {
        var n = t.getCoordinate(e),
            s = t.getCoordinate(e + 1);
        return !!this.intersects(n, s) && (t.addIntersection(this.getCoordinate(), e), !0);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return xi;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return xi;
  }();

  xi.constructor_ = function () {
    this._li = null, this._pt = null, this._originalPt = null, this._ptScaled = null, this._p0Scaled = null, this._p1Scaled = null, this._scaleFactor = null, this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, this._corner = new Array(4).fill(null), this._safeEnv = null;
    var t = arguments[0],
        e = arguments[1],
        s = arguments[2];
    if (this._originalPt = t, this._pt = t, this._scaleFactor = e, this._li = s, e <= 0) throw new n("Scale factor must be non-zero");
    1 !== e && (this._pt = new g(this.scale(t.x), this.scale(t.y)), this._p0Scaled = new g(), this._p1Scaled = new g()), this.initCorners(this._pt);
  }, xi.SAFE_ENV_EXPANSION_FACTOR = .75;

  var Ei =
  /*#__PURE__*/
  function () {
    function Ei() {
      _classCallCheck(this, Ei);

      Ei.constructor_.apply(this, arguments);
    }

    _createClass(Ei, [{
      key: "select",
      value: function select() {
        if (1 === arguments.length) ;else if (2 === arguments.length) {
          var _t596 = arguments[0],
              _e475 = arguments[1];
          _t596.getLineSegment(_e475, this.selectedSegment), this.select(this.selectedSegment);
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Ei;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Ei;
  }();

  Ei.constructor_ = function () {
    this.selectedSegment = new ne();
  };

  var Ii =
  /*#__PURE__*/
  function () {
    function Ii() {
      _classCallCheck(this, Ii);

      Ii.constructor_.apply(this, arguments);
    }

    _createClass(Ii, [{
      key: "snap",
      value: function snap() {
        if (1 === arguments.length) {
          var _t597 = arguments[0];
          return this.snap(_t597, null, -1);
        }

        if (3 === arguments.length) {
          var _t598 = arguments[0],
              _e476 = arguments[1],
              _n323 = arguments[2],
              _s219 = _t598.getSafeEnvelope(),
              _i121 = new Ni(_t598, _e476, _n323);

          return this._index.query(_s219, new (
          /*#__PURE__*/
          function () {
            function _class6() {
              _classCallCheck(this, _class6);
            }

            _createClass(_class6, [{
              key: "visitItem",
              value: function visitItem(t) {
                t.select(_s219, _i121);
              }
            }, {
              key: "interfaces_",
              get: function get() {
                return [Fe];
              }
            }]);

            return _class6;
          }())()), _i121.isNodeAdded();
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Ii;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Ii;
  }();

  var Ni =
  /*#__PURE__*/
  function (_Ei) {
    _inherits(Ni, _Ei);

    function Ni() {
      var _this38;

      _classCallCheck(this, Ni);

      _this38 = _possibleConstructorReturn(this, _getPrototypeOf(Ni).call(this)), Ni.constructor_.apply(_assertThisInitialized(_this38), arguments);
      return _this38;
    }

    _createClass(Ni, [{
      key: "isNodeAdded",
      value: function isNodeAdded() {
        return this._isNodeAdded;
      }
    }, {
      key: "select",
      value: function select() {
        if (!(2 === arguments.length && Number.isInteger(arguments[1]) && arguments[0] instanceof Bs)) return _get(_getPrototypeOf(Ni.prototype), "select", this).apply(this, arguments);
        {
          var _t599 = arguments[0],
              _e477 = arguments[1],
              _n324 = _t599.getContext();

          if (null !== this._parentEdge && _n324 === this._parentEdge && _e477 === this._hotPixelVertexIndex) return null;
          this._isNodeAdded = this._hotPixel.addSnappedNode(_n324, _e477);
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Ni;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Ni;
  }(Ei);

  Ni.constructor_ = function () {
    this._hotPixel = null, this._parentEdge = null, this._hotPixelVertexIndex = null, this._isNodeAdded = !1;
    var t = arguments[0],
        e = arguments[1],
        n = arguments[2];
    this._hotPixel = t, this._parentEdge = e, this._hotPixelVertexIndex = n;
  }, Ii.HotPixelSnapAction = Ni, Ii.constructor_ = function () {
    this._index = null;
    var t = arguments[0];
    this._index = t;
  };

  var Ci =
  /*#__PURE__*/
  function () {
    function Ci() {
      _classCallCheck(this, Ci);

      Ci.constructor_.apply(this, arguments);
    }

    _createClass(Ci, [{
      key: "processIntersections",
      value: function processIntersections(t, e, n, s) {
        if (t === n && e === s) return null;
        var i = t.getCoordinates()[e],
            r = t.getCoordinates()[e + 1],
            o = n.getCoordinates()[s],
            l = n.getCoordinates()[s + 1];

        if (this._li.computeIntersection(i, r, o, l), this._li.hasIntersection() && this._li.isInteriorIntersection()) {
          for (var _t600 = 0; _t600 < this._li.getIntersectionNum(); _t600++) {
            this._interiorIntersections.add(this._li.getIntersection(_t600));
          }

          t.addIntersections(this._li, e, 0), n.addIntersections(this._li, s, 1);
        }
      }
    }, {
      key: "isDone",
      value: function isDone() {
        return !1;
      }
    }, {
      key: "getInteriorIntersections",
      value: function getInteriorIntersections() {
        return this._interiorIntersections;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Ci;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [fi];
      }
    }]);

    return Ci;
  }();

  Ci.constructor_ = function () {
    this._li = null, this._interiorIntersections = null;
    var t = arguments[0];
    this._li = t, this._interiorIntersections = new x();
  };

  var Si =
  /*#__PURE__*/
  function () {
    function Si() {
      _classCallCheck(this, Si);

      Si.constructor_.apply(this, arguments);
    }

    _createClass(Si, [{
      key: "checkCorrectness",
      value: function checkCorrectness(t) {
        var e = Gs.getNodedSubstrings(t),
            n = new yi(e);

        try {
          n.checkValid();
        } catch (t) {
          if (!(t instanceof C)) throw t;
          t.printStackTrace();
        }
      }
    }, {
      key: "getNodedSubstrings",
      value: function getNodedSubstrings() {
        return Gs.getNodedSubstrings(this._nodedSegStrings);
      }
    }, {
      key: "snapRound",
      value: function snapRound(t, e) {
        var n = this.findInteriorIntersections(t, e);
        this.computeIntersectionSnaps(n), this.computeVertexSnaps(t);
      }
    }, {
      key: "findInteriorIntersections",
      value: function findInteriorIntersections(t, e) {
        var n = new Ci(e);
        return this._noder.setSegmentIntersector(n), this._noder.computeNodes(t), n.getInteriorIntersections();
      }
    }, {
      key: "computeVertexSnaps",
      value: function computeVertexSnaps() {
        if (_(arguments[0], f)) {
          for (var _t601 = arguments[0].iterator(); _t601.hasNext();) {
            var _e478 = _t601.next();

            this.computeVertexSnaps(_e478);
          }
        } else if (arguments[0] instanceof Gs) {
          var _t602 = arguments[0],
              _e479 = _t602.getCoordinates();

          for (var _n325 = 0; _n325 < _e479.length; _n325++) {
            var _s220 = new xi(_e479[_n325], this._scaleFactor, this._li);

            this._pointSnapper.snap(_s220, _t602, _n325) && _t602.addIntersection(_e479[_n325], _n325);
          }
        }
      }
    }, {
      key: "computeNodes",
      value: function computeNodes(t) {
        this._nodedSegStrings = t, this._noder = new Us(), this._pointSnapper = new Ii(this._noder.getIndex()), this.snapRound(t, this._li);
      }
    }, {
      key: "computeIntersectionSnaps",
      value: function computeIntersectionSnaps(t) {
        for (var _e480 = t.iterator(); _e480.hasNext();) {
          var _t603 = _e480.next(),
              _n326 = new xi(_t603, this._scaleFactor, this._li);

          this._pointSnapper.snap(_n326);
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Si;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [zs];
      }
    }]);

    return Si;
  }();

  Si.constructor_ = function () {
    this._pm = null, this._li = null, this._scaleFactor = null, this._noder = null, this._pointSnapper = null, this._nodedSegStrings = null;
    var t = arguments[0];
    this._pm = t, this._li = new ee(), this._li.setPrecisionModel(t), this._scaleFactor = t.getScale();
  };

  var wi =
  /*#__PURE__*/
  function () {
    function wi() {
      _classCallCheck(this, wi);

      wi.constructor_.apply(this, arguments);
    }

    _createClass(wi, [{
      key: "bufferFixedPrecision",
      value: function bufferFixedPrecision(t) {
        var e = new Xs(new Si(new Xt(1)), t.getScale()),
            n = new mi(this._bufParams);
        n.setWorkingPrecisionModel(t), n.setNoder(e), this._resultGeometry = n.buffer(this._argGeom, this._distance);
      }
    }, {
      key: "bufferReducedPrecision",
      value: function bufferReducedPrecision() {
        if (0 === arguments.length) {
          for (var _t604 = wi.MAX_PRECISION_DIGITS; _t604 >= 0; _t604--) {
            try {
              this.bufferReducedPrecision(_t604);
            } catch (t) {
              if (!(t instanceof jn)) throw t;
              this._saveException = t;
            }

            if (null !== this._resultGeometry) return null;
          }

          throw this._saveException;
        }

        if (1 === arguments.length) {
          var _t605 = arguments[0],
              _e481 = wi.precisionScaleFactor(this._argGeom, this._distance, _t605),
              _n327 = new Xt(_e481);

          this.bufferFixedPrecision(_n327);
        }
      }
    }, {
      key: "computeGeometry",
      value: function computeGeometry() {
        if (this.bufferOriginalPrecision(), null !== this._resultGeometry) return null;

        var t = this._argGeom.getFactory().getPrecisionModel();

        t.getType() === Xt.FIXED ? this.bufferFixedPrecision(t) : this.bufferReducedPrecision();
      }
    }, {
      key: "setQuadrantSegments",
      value: function setQuadrantSegments(t) {
        this._bufParams.setQuadrantSegments(t);
      }
    }, {
      key: "bufferOriginalPrecision",
      value: function bufferOriginalPrecision() {
        try {
          var _t606 = new mi(this._bufParams);

          this._resultGeometry = _t606.buffer(this._argGeom, this._distance);
        } catch (t) {
          if (!(t instanceof c)) throw t;
          this._saveException = t;
        }
      }
    }, {
      key: "getResultGeometry",
      value: function getResultGeometry(t) {
        return this._distance = t, this.computeGeometry(), this._resultGeometry;
      }
    }, {
      key: "setEndCapStyle",
      value: function setEndCapStyle(t) {
        this._bufParams.setEndCapStyle(t);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return wi;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "bufferOp",
      value: function bufferOp() {
        if (2 === arguments.length) {
          var _t607 = arguments[0],
              _e482 = arguments[1];
          return new wi(_t607).getResultGeometry(_e482);
        }

        if (3 === arguments.length) {
          if (Number.isInteger(arguments[2]) && arguments[0] instanceof q && "number" == typeof arguments[1]) {
            var _t608 = arguments[0],
                _e483 = arguments[1],
                _n328 = arguments[2],
                _s221 = new wi(_t608);

            return _s221.setQuadrantSegments(_n328), _s221.getResultGeometry(_e483);
          }

          if (arguments[2] instanceof Ks && arguments[0] instanceof q && "number" == typeof arguments[1]) {
            var _t609 = arguments[0],
                _e484 = arguments[1],
                _n329 = arguments[2];
            return new wi(_t609, _n329).getResultGeometry(_e484);
          }
        } else if (4 === arguments.length) {
          var _t610 = arguments[0],
              _e485 = arguments[1],
              _n330 = arguments[2],
              _s222 = arguments[3],
              _i122 = new wi(_t610);

          return _i122.setQuadrantSegments(_n330), _i122.setEndCapStyle(_s222), _i122.getResultGeometry(_e485);
        }
      }
    }, {
      key: "precisionScaleFactor",
      value: function precisionScaleFactor(t, e, n) {
        var s = t.getEnvelopeInternal(),
            i = M.max(Math.abs(s.getMaxX()), Math.abs(s.getMaxY()), Math.abs(s.getMinX()), Math.abs(s.getMinY())) + 2 * (e > 0 ? e : 0),
            r = n - Math.trunc(Math.log(i) / Math.log(10) + 1);
        return Math.pow(10, r);
      }
    }]);

    return wi;
  }();

  wi.constructor_ = function () {
    if (this._argGeom = null, this._distance = null, this._bufParams = new Ks(), this._resultGeometry = null, this._saveException = null, 1 === arguments.length) {
      var _t611 = arguments[0];
      this._argGeom = _t611;
    } else if (2 === arguments.length) {
      var _t612 = arguments[0],
          _e486 = arguments[1];
      this._argGeom = _t612, this._bufParams = _e486;
    }
  }, wi.CAP_ROUND = Ks.CAP_ROUND, wi.CAP_BUTT = Ks.CAP_FLAT, wi.CAP_FLAT = Ks.CAP_FLAT, wi.CAP_SQUARE = Ks.CAP_SQUARE, wi.MAX_PRECISION_DIGITS = 12;
  var Li = Object.freeze({
    BufferOp: wi,
    BufferParameters: Ks
  });

  var Ti =
  /*#__PURE__*/
  function () {
    function Ti() {
      _classCallCheck(this, Ti);

      Ti.constructor_.apply(this, arguments);
    }

    _createClass(Ti, [{
      key: "isInsideArea",
      value: function isInsideArea() {
        return this._segIndex === Ti.INSIDE_AREA;
      }
    }, {
      key: "getCoordinate",
      value: function getCoordinate() {
        return this._pt;
      }
    }, {
      key: "getGeometryComponent",
      value: function getGeometryComponent() {
        return this._component;
      }
    }, {
      key: "getSegmentIndex",
      value: function getSegmentIndex() {
        return this._segIndex;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Ti;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Ti;
  }();

  Ti.constructor_ = function () {
    if (this._component = null, this._segIndex = null, this._pt = null, 2 === arguments.length) {
      var _t613 = arguments[0],
          _e487 = arguments[1];
      Ti.constructor_.call(this, _t613, Ti.INSIDE_AREA, _e487);
    } else if (3 === arguments.length) {
      var _t614 = arguments[0],
          _e488 = arguments[1],
          _n331 = arguments[2];
      this._component = _t614, this._segIndex = _e488, this._pt = _n331;
    }
  }, Ti.INSIDE_AREA = -1;

  var Ri =
  /*#__PURE__*/
  function () {
    function Ri() {
      _classCallCheck(this, Ri);

      Ri.constructor_.apply(this, arguments);
    }

    _createClass(Ri, [{
      key: "filter",
      value: function filter(t) {
        (t instanceof vt || t instanceof Rt || t instanceof Mt) && this._locations.add(new Ti(t, 0, t.getCoordinate()));
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Ri;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [dt];
      }
    }], [{
      key: "getLocations",
      value: function getLocations(t) {
        var e = new x();
        return t.apply(new Ri(e)), e;
      }
    }]);

    return Ri;
  }();

  Ri.constructor_ = function () {
    this._locations = null;
    var t = arguments[0];
    this._locations = t;
  };

  var Pi =
  /*#__PURE__*/
  function () {
    function Pi() {
      _classCallCheck(this, Pi);

      Pi.constructor_.apply(this, arguments);
    }

    _createClass(Pi, [{
      key: "computeContainmentDistance",
      value: function computeContainmentDistance() {
        if (0 === arguments.length) {
          var _t615 = new Array(2).fill(null);

          if (this.computeContainmentDistance(0, _t615), this._minDistance <= this._terminateDistance) return null;
          this.computeContainmentDistance(1, _t615);
        } else if (2 === arguments.length) {
          var _t616 = arguments[0],
              _e489 = arguments[1],
              _n332 = this._geom[_t616];
          if (_n332.getDimension() < 2) return null;

          var _s223 = 1 - _t616,
              _i123 = Ce.getPolygons(_n332);

          if (_i123.size() > 0) {
            var _n333 = Ri.getLocations(this._geom[_s223]);

            if (this.computeContainmentDistance(_n333, _i123, _e489), this._minDistance <= this._terminateDistance) return this._minDistanceLocation[_s223] = _e489[0], this._minDistanceLocation[_t616] = _e489[1], null;
          }
        } else if (3 === arguments.length) if (arguments[2] instanceof Array && _(arguments[0], m) && _(arguments[1], m)) {
          var _t617 = arguments[0],
              _e490 = arguments[1],
              _n334 = arguments[2];

          for (var _s224 = 0; _s224 < _t617.size(); _s224++) {
            var _i124 = _t617.get(_s224);

            for (var _t618 = 0; _t618 < _e490.size(); _t618++) {
              if (this.computeContainmentDistance(_i124, _e490.get(_t618), _n334), this._minDistance <= this._terminateDistance) return null;
            }
          }
        } else if (arguments[2] instanceof Array && arguments[0] instanceof Ti && arguments[1] instanceof Mt) {
          var _t619 = arguments[0],
              _e491 = arguments[1],
              _n335 = arguments[2],
              _s225 = _t619.getCoordinate();

          if (se.EXTERIOR !== this._ptLocator.locate(_s225, _e491)) return this._minDistance = 0, _n335[0] = _t619, _n335[1] = new Ti(_e491, _s225), null;
        }
      }
    }, {
      key: "computeMinDistanceLinesPoints",
      value: function computeMinDistanceLinesPoints(t, e, n) {
        for (var _s226 = 0; _s226 < t.size(); _s226++) {
          var _i125 = t.get(_s226);

          for (var _t620 = 0; _t620 < e.size(); _t620++) {
            var _s227 = e.get(_t620);

            if (this.computeMinDistance(_i125, _s227, n), this._minDistance <= this._terminateDistance) return null;
          }
        }
      }
    }, {
      key: "computeFacetDistance",
      value: function computeFacetDistance() {
        var t = new Array(2).fill(null),
            e = Ee.getLines(this._geom[0]),
            n = Ee.getLines(this._geom[1]),
            s = Ne.getPoints(this._geom[0]),
            i = Ne.getPoints(this._geom[1]);
        return this.computeMinDistanceLines(e, n, t), this.updateMinDistance(t, !1), this._minDistance <= this._terminateDistance ? null : (t[0] = null, t[1] = null, this.computeMinDistanceLinesPoints(e, i, t), this.updateMinDistance(t, !1), this._minDistance <= this._terminateDistance ? null : (t[0] = null, t[1] = null, this.computeMinDistanceLinesPoints(n, s, t), this.updateMinDistance(t, !0), this._minDistance <= this._terminateDistance ? null : (t[0] = null, t[1] = null, this.computeMinDistancePoints(s, i, t), void this.updateMinDistance(t, !1))));
      }
    }, {
      key: "nearestLocations",
      value: function nearestLocations() {
        return this.computeMinDistance(), this._minDistanceLocation;
      }
    }, {
      key: "updateMinDistance",
      value: function updateMinDistance(t, e) {
        if (null === t[0]) return null;
        e ? (this._minDistanceLocation[0] = t[1], this._minDistanceLocation[1] = t[0]) : (this._minDistanceLocation[0] = t[0], this._minDistanceLocation[1] = t[1]);
      }
    }, {
      key: "nearestPoints",
      value: function nearestPoints() {
        return this.computeMinDistance(), [this._minDistanceLocation[0].getCoordinate(), this._minDistanceLocation[1].getCoordinate()];
      }
    }, {
      key: "computeMinDistance",
      value: function computeMinDistance() {
        if (0 === arguments.length) {
          if (null !== this._minDistanceLocation) return null;
          if (this._minDistanceLocation = new Array(2).fill(null), this.computeContainmentDistance(), this._minDistance <= this._terminateDistance) return null;
          this.computeFacetDistance();
        } else if (3 === arguments.length) if (arguments[2] instanceof Array && arguments[0] instanceof Rt && arguments[1] instanceof vt) {
          var _t621 = arguments[0],
              _e492 = arguments[1],
              _n336 = arguments[2];
          if (_t621.getEnvelopeInternal().distance(_e492.getEnvelopeInternal()) > this._minDistance) return null;

          var _s228 = _t621.getCoordinates(),
              _i126 = _e492.getCoordinate();

          for (var _r63 = 0; _r63 < _s228.length - 1; _r63++) {
            var _o32 = A.pointToSegment(_i126, _s228[_r63], _s228[_r63 + 1]);

            if (_o32 < this._minDistance) {
              this._minDistance = _o32;

              var _l27 = new ne(_s228[_r63], _s228[_r63 + 1]).closestPoint(_i126);

              _n336[0] = new Ti(_t621, _r63, _l27), _n336[1] = new Ti(_e492, 0, _i126);
            }

            if (this._minDistance <= this._terminateDistance) return null;
          }
        } else if (arguments[2] instanceof Array && arguments[0] instanceof Rt && arguments[1] instanceof Rt) {
          var _t622 = arguments[0],
              _e493 = arguments[1],
              _n337 = arguments[2];
          if (_t622.getEnvelopeInternal().distance(_e493.getEnvelopeInternal()) > this._minDistance) return null;

          var _s229 = _t622.getCoordinates(),
              _i127 = _e493.getCoordinates();

          for (var _r64 = 0; _r64 < _s229.length - 1; _r64++) {
            for (var _o33 = 0; _o33 < _i127.length - 1; _o33++) {
              var _l28 = A.segmentToSegment(_s229[_r64], _s229[_r64 + 1], _i127[_o33], _i127[_o33 + 1]);

              if (_l28 < this._minDistance) {
                this._minDistance = _l28;

                var _a16 = new ne(_s229[_r64], _s229[_r64 + 1]),
                    _c13 = new ne(_i127[_o33], _i127[_o33 + 1]),
                    _h6 = _a16.closestPoints(_c13);

                _n337[0] = new Ti(_t622, _r64, _h6[0]), _n337[1] = new Ti(_e493, _o33, _h6[1]);
              }

              if (this._minDistance <= this._terminateDistance) return null;
            }
          }
        }
      }
    }, {
      key: "computeMinDistancePoints",
      value: function computeMinDistancePoints(t, e, n) {
        for (var _s230 = 0; _s230 < t.size(); _s230++) {
          var _i128 = t.get(_s230);

          for (var _t623 = 0; _t623 < e.size(); _t623++) {
            var _s231 = e.get(_t623),
                _r65 = _i128.getCoordinate().distance(_s231.getCoordinate());

            if (_r65 < this._minDistance && (this._minDistance = _r65, n[0] = new Ti(_i128, 0, _i128.getCoordinate()), n[1] = new Ti(_s231, 0, _s231.getCoordinate())), this._minDistance <= this._terminateDistance) return null;
          }
        }
      }
    }, {
      key: "distance",
      value: function distance() {
        if (null === this._geom[0] || null === this._geom[1]) throw new n("null geometries are not supported");
        return this._geom[0].isEmpty() || this._geom[1].isEmpty() ? 0 : (this.computeMinDistance(), this._minDistance);
      }
    }, {
      key: "computeMinDistanceLines",
      value: function computeMinDistanceLines(t, e, n) {
        for (var _s232 = 0; _s232 < t.size(); _s232++) {
          var _i129 = t.get(_s232);

          for (var _t624 = 0; _t624 < e.size(); _t624++) {
            var _s233 = e.get(_t624);

            if (this.computeMinDistance(_i129, _s233, n), this._minDistance <= this._terminateDistance) return null;
          }
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Pi;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "distance",
      value: function distance(t, e) {
        return new Pi(t, e).distance();
      }
    }, {
      key: "isWithinDistance",
      value: function isWithinDistance(t, e, n) {
        return !(t.getEnvelopeInternal().distance(e.getEnvelopeInternal()) > n) && new Pi(t, e, n).distance() <= n;
      }
    }, {
      key: "nearestPoints",
      value: function nearestPoints(t, e) {
        return new Pi(t, e).nearestPoints();
      }
    }]);

    return Pi;
  }();

  Pi.constructor_ = function () {
    if (this._geom = null, this._terminateDistance = 0, this._ptLocator = new fn(), this._minDistanceLocation = null, this._minDistance = i.MAX_VALUE, 2 === arguments.length) {
      var _t625 = arguments[0],
          _e494 = arguments[1];
      Pi.constructor_.call(this, _t625, _e494, 0);
    } else if (3 === arguments.length) {
      var _t626 = arguments[0],
          _e495 = arguments[1],
          _n338 = arguments[2];
      this._geom = new Array(2).fill(null), this._geom[0] = _t626, this._geom[1] = _e495, this._terminateDistance = _n338;
    }
  };

  var vi = Object.freeze({
    DistanceOp: Pi
  });

  var Oi =
  /*#__PURE__*/
  function () {
    function Oi() {
      _classCallCheck(this, Oi);

      Oi.constructor_.apply(this, arguments);
    }

    _createClass(Oi, [{
      key: "getCoordinates",
      value: function getCoordinates() {
        if (null === this._coordinates) {
          var _t627 = 0,
              _e496 = 0;

          var _n339 = new I();

          for (var _s234 = this._directedEdges.iterator(); _s234.hasNext();) {
            var _i130 = _s234.next();

            _i130.getEdgeDirection() ? _t627++ : _e496++, _n339.add(_i130.getEdge().getLine().getCoordinates(), !1, _i130.getEdgeDirection());
          }

          this._coordinates = _n339.toCoordinateArray(), _e496 > _t627 && X.reverse(this._coordinates);
        }

        return this._coordinates;
      }
    }, {
      key: "toLineString",
      value: function toLineString() {
        return this._factory.createLineString(this.getCoordinates());
      }
    }, {
      key: "add",
      value: function add(t) {
        this._directedEdges.add(t);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Oi;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Oi;
  }();

  Oi.constructor_ = function () {
    this._factory = null, this._directedEdges = new x(), this._coordinates = null;
    var t = arguments[0];
    this._factory = t;
  };

  var bi =
  /*#__PURE__*/
  function () {
    function bi() {
      _classCallCheck(this, bi);

      bi.constructor_.apply(this, arguments);
    }

    _createClass(bi, [{
      key: "setVisited",
      value: function setVisited(t) {
        this._isVisited = t;
      }
    }, {
      key: "isMarked",
      value: function isMarked() {
        return this._isMarked;
      }
    }, {
      key: "setData",
      value: function setData(t) {
        this._data = t;
      }
    }, {
      key: "getData",
      value: function getData() {
        return this._data;
      }
    }, {
      key: "setMarked",
      value: function setMarked(t) {
        this._isMarked = t;
      }
    }, {
      key: "getContext",
      value: function getContext() {
        return this._data;
      }
    }, {
      key: "isVisited",
      value: function isVisited() {
        return this._isVisited;
      }
    }, {
      key: "setContext",
      value: function setContext(t) {
        this._data = t;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return bi;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "getComponentWithVisitedState",
      value: function getComponentWithVisitedState(t, e) {
        for (; t.hasNext();) {
          var _n340 = t.next();

          if (_n340.isVisited() === e) return _n340;
        }

        return null;
      }
    }, {
      key: "setVisited",
      value: function setVisited(t, e) {
        for (; t.hasNext();) {
          t.next().setVisited(e);
        }
      }
    }, {
      key: "setMarked",
      value: function setMarked(t, e) {
        for (; t.hasNext();) {
          t.next().setMarked(e);
        }
      }
    }]);

    return bi;
  }();

  bi.constructor_ = function () {
    this._isMarked = !1, this._isVisited = !1, this._data = null;
  };

  var Mi =
  /*#__PURE__*/
  function (_bi) {
    _inherits(Mi, _bi);

    function Mi() {
      var _this39;

      _classCallCheck(this, Mi);

      _this39 = _possibleConstructorReturn(this, _getPrototypeOf(Mi).call(this)), Mi.constructor_.apply(_assertThisInitialized(_this39), arguments);
      return _this39;
    }

    _createClass(Mi, [{
      key: "isRemoved",
      value: function isRemoved() {
        return null === this._parentEdge;
      }
    }, {
      key: "compareDirection",
      value: function compareDirection(t) {
        return this._quadrant > t._quadrant ? 1 : this._quadrant < t._quadrant ? -1 : v.index(t._p0, t._p1, this._p1);
      }
    }, {
      key: "getCoordinate",
      value: function getCoordinate() {
        return this._from.getCoordinate();
      }
    }, {
      key: "print",
      value: function print(t) {
        var e = this.getClass().getName(),
            n = e.lastIndexOf("."),
            s = e.substring(n + 1);
        t.print("  " + s + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + this._angle);
      }
    }, {
      key: "getDirectionPt",
      value: function getDirectionPt() {
        return this._p1;
      }
    }, {
      key: "getAngle",
      value: function getAngle() {
        return this._angle;
      }
    }, {
      key: "compareTo",
      value: function compareTo(t) {
        var e = t;
        return this.compareDirection(e);
      }
    }, {
      key: "getFromNode",
      value: function getFromNode() {
        return this._from;
      }
    }, {
      key: "getSym",
      value: function getSym() {
        return this._sym;
      }
    }, {
      key: "setEdge",
      value: function setEdge(t) {
        this._parentEdge = t;
      }
    }, {
      key: "remove",
      value: function remove() {
        this._sym = null, this._parentEdge = null;
      }
    }, {
      key: "getEdge",
      value: function getEdge() {
        return this._parentEdge;
      }
    }, {
      key: "getQuadrant",
      value: function getQuadrant() {
        return this._quadrant;
      }
    }, {
      key: "setSym",
      value: function setSym(t) {
        this._sym = t;
      }
    }, {
      key: "getToNode",
      value: function getToNode() {
        return this._to;
      }
    }, {
      key: "getEdgeDirection",
      value: function getEdgeDirection() {
        return this._edgeDirection;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Mi;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [r];
      }
    }], [{
      key: "toEdges",
      value: function toEdges(t) {
        var e = new x();

        for (var _n341 = t.iterator(); _n341.hasNext();) {
          e.add(_n341.next()._parentEdge);
        }

        return e;
      }
    }]);

    return Mi;
  }(bi);

  Mi.constructor_ = function () {
    if (this._parentEdge = null, this._from = null, this._to = null, this._p0 = null, this._p1 = null, this._sym = null, this._edgeDirection = null, this._quadrant = null, this._angle = null, 0 === arguments.length) ;else if (4 === arguments.length) {
      var _t628 = arguments[0],
          _e497 = arguments[1],
          _n342 = arguments[2],
          _s235 = arguments[3];
      this._from = _t628, this._to = _e497, this._edgeDirection = _s235, this._p0 = _t628.getCoordinate(), this._p1 = _n342;

      var _i131 = this._p1.x - this._p0.x,
          _r66 = this._p1.y - this._p0.y;

      this._quadrant = Nn.quadrant(_i131, _r66), this._angle = Math.atan2(_r66, _i131);
    }
  };

  var Ai =
  /*#__PURE__*/
  function (_Mi) {
    _inherits(Ai, _Mi);

    function Ai() {
      var _this40;

      _classCallCheck(this, Ai);

      _this40 = _possibleConstructorReturn(this, _getPrototypeOf(Ai).call(this)), Ai.constructor_.apply(_assertThisInitialized(_this40), arguments);
      return _this40;
    }

    _createClass(Ai, [{
      key: "getNext",
      value: function getNext() {
        return 2 !== this.getToNode().getDegree() ? null : this.getToNode().getOutEdges().getEdges().get(0) === this.getSym() ? this.getToNode().getOutEdges().getEdges().get(1) : (u.isTrue(this.getToNode().getOutEdges().getEdges().get(1) === this.getSym()), this.getToNode().getOutEdges().getEdges().get(0));
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Ai;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Ai;
  }(Mi);

  Ai.constructor_ = function () {
    var t = arguments[0],
        e = arguments[1],
        n = arguments[2],
        s = arguments[3];
    Mi.constructor_.call(this, t, e, n, s);
  };

  var Di =
  /*#__PURE__*/
  function (_bi2) {
    _inherits(Di, _bi2);

    function Di() {
      var _this41;

      _classCallCheck(this, Di);

      _this41 = _possibleConstructorReturn(this, _getPrototypeOf(Di).call(this)), Di.constructor_.apply(_assertThisInitialized(_this41), arguments);
      return _this41;
    }

    _createClass(Di, [{
      key: "isRemoved",
      value: function isRemoved() {
        return null === this._dirEdge;
      }
    }, {
      key: "setDirectedEdges",
      value: function setDirectedEdges(t, e) {
        this._dirEdge = [t, e], t.setEdge(this), e.setEdge(this), t.setSym(e), e.setSym(t), t.getFromNode().addOutEdge(t), e.getFromNode().addOutEdge(e);
      }
    }, {
      key: "getDirEdge",
      value: function getDirEdge() {
        if (Number.isInteger(arguments[0])) {
          var _t629 = arguments[0];
          return this._dirEdge[_t629];
        }

        if (arguments[0] instanceof Gi) {
          var _t630 = arguments[0];
          return this._dirEdge[0].getFromNode() === _t630 ? this._dirEdge[0] : this._dirEdge[1].getFromNode() === _t630 ? this._dirEdge[1] : null;
        }
      }
    }, {
      key: "remove",
      value: function remove() {
        this._dirEdge = null;
      }
    }, {
      key: "getOppositeNode",
      value: function getOppositeNode(t) {
        return this._dirEdge[0].getFromNode() === t ? this._dirEdge[0].getToNode() : this._dirEdge[1].getFromNode() === t ? this._dirEdge[1].getToNode() : null;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Di;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Di;
  }(bi);

  Di.constructor_ = function () {
    if (this._dirEdge = null, 0 === arguments.length) ;else if (2 === arguments.length) {
      var _t631 = arguments[0],
          _e498 = arguments[1];
      this.setDirectedEdges(_t631, _e498);
    }
  };

  var Fi =
  /*#__PURE__*/
  function () {
    function Fi() {
      _classCallCheck(this, Fi);

      Fi.constructor_.apply(this, arguments);
    }

    _createClass(Fi, [{
      key: "getNextEdge",
      value: function getNextEdge(t) {
        var e = this.getIndex(t);
        return this._outEdges.get(this.getIndex(e + 1));
      }
    }, {
      key: "getCoordinate",
      value: function getCoordinate() {
        var t = this.iterator();
        return t.hasNext() ? t.next().getCoordinate() : null;
      }
    }, {
      key: "iterator",
      value: function iterator() {
        return this.sortEdges(), this._outEdges.iterator();
      }
    }, {
      key: "sortEdges",
      value: function sortEdges() {
        this._sorted || (Ie.sort(this._outEdges), this._sorted = !0);
      }
    }, {
      key: "remove",
      value: function remove(t) {
        this._outEdges.remove(t);
      }
    }, {
      key: "getEdges",
      value: function getEdges() {
        return this.sortEdges(), this._outEdges;
      }
    }, {
      key: "getNextCWEdge",
      value: function getNextCWEdge(t) {
        var e = this.getIndex(t);
        return this._outEdges.get(this.getIndex(e - 1));
      }
    }, {
      key: "getIndex",
      value: function getIndex() {
        if (arguments[0] instanceof Di) {
          var _t632 = arguments[0];
          this.sortEdges();

          for (var _e499 = 0; _e499 < this._outEdges.size(); _e499++) {
            if (this._outEdges.get(_e499).getEdge() === _t632) return _e499;
          }

          return -1;
        }

        if (arguments[0] instanceof Mi) {
          var _t633 = arguments[0];
          this.sortEdges();

          for (var _e500 = 0; _e500 < this._outEdges.size(); _e500++) {
            if (this._outEdges.get(_e500) === _t633) return _e500;
          }

          return -1;
        }

        if (Number.isInteger(arguments[0])) {
          var _t634 = arguments[0] % this._outEdges.size();

          return _t634 < 0 && (_t634 += this._outEdges.size()), _t634;
        }
      }
    }, {
      key: "add",
      value: function add(t) {
        this._outEdges.add(t), this._sorted = !1;
      }
    }, {
      key: "getDegree",
      value: function getDegree() {
        return this._outEdges.size();
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Fi;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Fi;
  }();

  Fi.constructor_ = function () {
    this._outEdges = new x(), this._sorted = !1;
  };

  var Gi =
  /*#__PURE__*/
  function (_bi3) {
    _inherits(Gi, _bi3);

    function Gi() {
      var _this42;

      _classCallCheck(this, Gi);

      _this42 = _possibleConstructorReturn(this, _getPrototypeOf(Gi).call(this)), Gi.constructor_.apply(_assertThisInitialized(_this42), arguments);
      return _this42;
    }

    _createClass(Gi, [{
      key: "isRemoved",
      value: function isRemoved() {
        return null === this._pt;
      }
    }, {
      key: "addOutEdge",
      value: function addOutEdge(t) {
        this._deStar.add(t);
      }
    }, {
      key: "getCoordinate",
      value: function getCoordinate() {
        return this._pt;
      }
    }, {
      key: "getOutEdges",
      value: function getOutEdges() {
        return this._deStar;
      }
    }, {
      key: "remove",
      value: function remove() {
        if (0 === arguments.length) this._pt = null;else if (1 === arguments.length) {
          var _t635 = arguments[0];

          this._deStar.remove(_t635);
        }
      }
    }, {
      key: "getIndex",
      value: function getIndex(t) {
        return this._deStar.getIndex(t);
      }
    }, {
      key: "getDegree",
      value: function getDegree() {
        return this._deStar.getDegree();
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Gi;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "getEdgesBetween",
      value: function getEdgesBetween(t, e) {
        var n = new J(Mi.toEdges(t.getOutEdges().getEdges())),
            s = Mi.toEdges(e.getOutEdges().getEdges());
        return n.retainAll(s), n;
      }
    }]);

    return Gi;
  }(bi);

  Gi.constructor_ = function () {
    if (this._pt = null, this._deStar = null, 1 === arguments.length) {
      var _t636 = arguments[0];
      Gi.constructor_.call(this, _t636, new Fi());
    } else if (2 === arguments.length) {
      var _t637 = arguments[0],
          _e501 = arguments[1];
      this._pt = _t637, this._deStar = _e501;
    }
  };

  var qi =
  /*#__PURE__*/
  function (_Di) {
    _inherits(qi, _Di);

    function qi() {
      var _this43;

      _classCallCheck(this, qi);

      _this43 = _possibleConstructorReturn(this, _getPrototypeOf(qi).call(this)), qi.constructor_.apply(_assertThisInitialized(_this43), arguments);
      return _this43;
    }

    _createClass(qi, [{
      key: "getLine",
      value: function getLine() {
        return this._line;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return qi;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return qi;
  }(Di);

  qi.constructor_ = function () {
    this._line = null;
    var t = arguments[0];
    this._line = t;
  };

  var Bi =
  /*#__PURE__*/
  function () {
    function Bi() {
      _classCallCheck(this, Bi);

      Bi.constructor_.apply(this, arguments);
    }

    _createClass(Bi, [{
      key: "find",
      value: function find(t) {
        return this._nodeMap.get(t);
      }
    }, {
      key: "iterator",
      value: function iterator() {
        return this._nodeMap.values().iterator();
      }
    }, {
      key: "remove",
      value: function remove(t) {
        return this._nodeMap.remove(t);
      }
    }, {
      key: "values",
      value: function values() {
        return this._nodeMap.values();
      }
    }, {
      key: "add",
      value: function add(t) {
        return this._nodeMap.put(t.getCoordinate(), t), t;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Bi;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Bi;
  }();

  Bi.constructor_ = function () {
    this._nodeMap = new ot();
  };

  var Vi =
  /*#__PURE__*/
  function () {
    function Vi() {
      _classCallCheck(this, Vi);

      Vi.constructor_.apply(this, arguments);
    }

    _createClass(Vi, [{
      key: "findNodesOfDegree",
      value: function findNodesOfDegree(t) {
        var e = new x();

        for (var _n343 = this.nodeIterator(); _n343.hasNext();) {
          var _s236 = _n343.next();

          _s236.getDegree() === t && e.add(_s236);
        }

        return e;
      }
    }, {
      key: "dirEdgeIterator",
      value: function dirEdgeIterator() {
        return this._dirEdges.iterator();
      }
    }, {
      key: "edgeIterator",
      value: function edgeIterator() {
        return this._edges.iterator();
      }
    }, {
      key: "remove",
      value: function remove() {
        if (arguments[0] instanceof Di) {
          var _t638 = arguments[0];
          this.remove(_t638.getDirEdge(0)), this.remove(_t638.getDirEdge(1)), this._edges.remove(_t638), _t638.remove();
        } else if (arguments[0] instanceof Mi) {
          var _t639 = arguments[0],
              _e502 = _t639.getSym();

          null !== _e502 && _e502.setSym(null), _t639.getFromNode().remove(_t639), _t639.remove(), this._dirEdges.remove(_t639);
        } else if (arguments[0] instanceof Gi) {
          var _t640 = arguments[0];

          for (var _e503 = _t640.getOutEdges().getEdges().iterator(); _e503.hasNext();) {
            var _t641 = _e503.next(),
                _n344 = _t641.getSym();

            null !== _n344 && this.remove(_n344), this._dirEdges.remove(_t641);

            var _s237 = _t641.getEdge();

            null !== _s237 && this._edges.remove(_s237);
          }

          this._nodeMap.remove(_t640.getCoordinate()), _t640.remove();
        }
      }
    }, {
      key: "findNode",
      value: function findNode(t) {
        return this._nodeMap.find(t);
      }
    }, {
      key: "getEdges",
      value: function getEdges() {
        return this._edges;
      }
    }, {
      key: "nodeIterator",
      value: function nodeIterator() {
        return this._nodeMap.iterator();
      }
    }, {
      key: "contains",
      value: function contains() {
        if (arguments[0] instanceof Di) {
          var _t642 = arguments[0];
          return this._edges.contains(_t642);
        }

        if (arguments[0] instanceof Mi) {
          var _t643 = arguments[0];
          return this._dirEdges.contains(_t643);
        }
      }
    }, {
      key: "add",
      value: function add() {
        if (arguments[0] instanceof Gi) {
          var _t644 = arguments[0];

          this._nodeMap.add(_t644);
        } else if (arguments[0] instanceof Di) {
          var _t645 = arguments[0];
          this._edges.add(_t645), this.add(_t645.getDirEdge(0)), this.add(_t645.getDirEdge(1));
        } else if (arguments[0] instanceof Mi) {
          var _t646 = arguments[0];

          this._dirEdges.add(_t646);
        }
      }
    }, {
      key: "getNodes",
      value: function getNodes() {
        return this._nodeMap.values();
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Vi;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Vi;
  }();

  Vi.constructor_ = function () {
    this._edges = new J(), this._dirEdges = new J(), this._nodeMap = new Bi();
  };

  var zi =
  /*#__PURE__*/
  function (_Vi) {
    _inherits(zi, _Vi);

    function zi() {
      var _this44;

      _classCallCheck(this, zi);

      _this44 = _possibleConstructorReturn(this, _getPrototypeOf(zi).call(this)), zi.constructor_.apply(_assertThisInitialized(_this44), arguments);
      return _this44;
    }

    _createClass(zi, [{
      key: "addEdge",
      value: function addEdge(t) {
        if (t.isEmpty()) return null;
        var e = X.removeRepeatedPoints(t.getCoordinates());
        if (e.length <= 1) return null;
        var n = e[0],
            s = e[e.length - 1],
            i = this.getNode(n),
            r = this.getNode(s),
            o = new Ai(i, r, e[1], !0),
            l = new Ai(r, i, e[e.length - 2], !1),
            a = new qi(t);
        a.setDirectedEdges(o, l), this.add(a);
      }
    }, {
      key: "getNode",
      value: function getNode(t) {
        var e = this.findNode(t);
        return null === e && (e = new Gi(t), this.add(e)), e;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return zi;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return zi;
  }(Vi);

  zi.constructor_ = function () {};

  var Yi =
  /*#__PURE__*/
  function () {
    function Yi() {
      _classCallCheck(this, Yi);

      Yi.constructor_.apply(this, arguments);
    }

    _createClass(Yi, [{
      key: "buildEdgeStringsForUnprocessedNodes",
      value: function buildEdgeStringsForUnprocessedNodes() {
        for (var _t647 = this._graph.getNodes().iterator(); _t647.hasNext();) {
          var _e504 = _t647.next();

          _e504.isMarked() || (u.isTrue(2 === _e504.getDegree()), this.buildEdgeStringsStartingAt(_e504), _e504.setMarked(!0));
        }
      }
    }, {
      key: "buildEdgeStringsForNonDegree2Nodes",
      value: function buildEdgeStringsForNonDegree2Nodes() {
        for (var _t648 = this._graph.getNodes().iterator(); _t648.hasNext();) {
          var _e505 = _t648.next();

          2 !== _e505.getDegree() && (this.buildEdgeStringsStartingAt(_e505), _e505.setMarked(!0));
        }
      }
    }, {
      key: "buildEdgeStringsForObviousStartNodes",
      value: function buildEdgeStringsForObviousStartNodes() {
        this.buildEdgeStringsForNonDegree2Nodes();
      }
    }, {
      key: "getMergedLineStrings",
      value: function getMergedLineStrings() {
        return this.merge(), this._mergedLineStrings;
      }
    }, {
      key: "buildEdgeStringsStartingAt",
      value: function buildEdgeStringsStartingAt(t) {
        for (var _e506 = t.getOutEdges().iterator(); _e506.hasNext();) {
          var _t649 = _e506.next();

          _t649.getEdge().isMarked() || this._edgeStrings.add(this.buildEdgeStringStartingWith(_t649));
        }
      }
    }, {
      key: "merge",
      value: function merge() {
        if (null !== this._mergedLineStrings) return null;
        bi.setMarked(this._graph.nodeIterator(), !1), bi.setMarked(this._graph.edgeIterator(), !1), this._edgeStrings = new x(), this.buildEdgeStringsForObviousStartNodes(), this.buildEdgeStringsForIsolatedLoops(), this._mergedLineStrings = new x();

        for (var _t650 = this._edgeStrings.iterator(); _t650.hasNext();) {
          var _e507 = _t650.next();

          this._mergedLineStrings.add(_e507.toLineString());
        }
      }
    }, {
      key: "addLineString",
      value: function addLineString(t) {
        null === this._factory && (this._factory = t.getFactory()), this._graph.addEdge(t);
      }
    }, {
      key: "buildEdgeStringStartingWith",
      value: function buildEdgeStringStartingWith(t) {
        var e = new Oi(this._factory);
        var n = t;

        do {
          e.add(n), n.getEdge().setMarked(!0), n = n.getNext();
        } while (null !== n && n !== t);

        return e;
      }
    }, {
      key: "add",
      value: function add() {
        if (arguments[0] instanceof q) {
          var _t651 = arguments[0];

          for (var _e508 = 0; _e508 < _t651.getNumGeometries(); _e508++) {
            var _n345 = _t651.getGeometryN(_e508);

            _n345 instanceof Rt && this.addLineString(_n345);
          }
        } else if (_(arguments[0], f)) {
          var _t652 = arguments[0];
          this._mergedLineStrings = null;

          for (var _e509 = _t652.iterator(); _e509.hasNext();) {
            var _t653 = _e509.next();

            this.add(_t653);
          }
        }
      }
    }, {
      key: "buildEdgeStringsForIsolatedLoops",
      value: function buildEdgeStringsForIsolatedLoops() {
        this.buildEdgeStringsForUnprocessedNodes();
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Yi;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Yi;
  }();

  Yi.constructor_ = function () {
    this._graph = new zi(), this._mergedLineStrings = null, this._factory = null, this._edgeStrings = null;
  };

  var Ui = Object.freeze({
    LineMerger: Yi
  });

  var ki =
  /*#__PURE__*/
  function () {
    function ki() {
      _classCallCheck(this, ki);

      ki.constructor_.apply(this, arguments);
    }

    _createClass(ki, [{
      key: "snapVertices",
      value: function snapVertices(t, e) {
        var n = this._isClosed ? t.size() - 1 : t.size();

        for (var _s238 = 0; _s238 < n; _s238++) {
          var _n346 = t.get(_s238),
              _i132 = this.findSnapForVertex(_n346, e);

          null !== _i132 && (t.set(_s238, new g(_i132)), 0 === _s238 && this._isClosed && t.set(t.size() - 1, new g(_i132)));
        }
      }
    }, {
      key: "findSnapForVertex",
      value: function findSnapForVertex(t, e) {
        for (var _n347 = 0; _n347 < e.length; _n347++) {
          if (t.equals2D(e[_n347])) return null;
          if (t.distance(e[_n347]) < this._snapTolerance) return e[_n347];
        }

        return null;
      }
    }, {
      key: "snapTo",
      value: function snapTo(t) {
        var e = new I(this._srcPts);
        return this.snapVertices(e, t), this.snapSegments(e, t), e.toCoordinateArray();
      }
    }, {
      key: "snapSegments",
      value: function snapSegments(t, e) {
        if (0 === e.length) return null;
        var n = e.length;
        e[0].equals2D(e[e.length - 1]) && (n = e.length - 1);

        for (var _s239 = 0; _s239 < n; _s239++) {
          var _n348 = e[_s239],
              _i133 = this.findSegmentIndexToSnap(_n348, t);

          _i133 >= 0 && t.add(_i133 + 1, new g(_n348), !1);
        }
      }
    }, {
      key: "findSegmentIndexToSnap",
      value: function findSegmentIndexToSnap(t, e) {
        var n = i.MAX_VALUE,
            s = -1;

        for (var _i134 = 0; _i134 < e.size() - 1; _i134++) {
          if (this._seg.p0 = e.get(_i134), this._seg.p1 = e.get(_i134 + 1), this._seg.p0.equals2D(t) || this._seg.p1.equals2D(t)) {
            if (this._allowSnappingToSourceVertices) continue;
            return -1;
          }

          var _r67 = this._seg.distance(t);

          _r67 < this._snapTolerance && _r67 < n && (n = _r67, s = _i134);
        }

        return s;
      }
    }, {
      key: "setAllowSnappingToSourceVertices",
      value: function setAllowSnappingToSourceVertices(t) {
        this._allowSnappingToSourceVertices = t;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return ki;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "isClosed",
      value: function isClosed(t) {
        return !(t.length <= 1) && t[0].equals2D(t[t.length - 1]);
      }
    }]);

    return ki;
  }();

  ki.constructor_ = function () {
    if (this._snapTolerance = 0, this._srcPts = null, this._seg = new ne(), this._allowSnappingToSourceVertices = !1, this._isClosed = !1, arguments[0] instanceof Rt && "number" == typeof arguments[1]) {
      var _t654 = arguments[0],
          _e510 = arguments[1];
      ki.constructor_.call(this, _t654.getCoordinates(), _e510);
    } else if (arguments[0] instanceof Array && "number" == typeof arguments[1]) {
      var _t655 = arguments[0],
          _e511 = arguments[1];
      this._srcPts = _t655, this._isClosed = ki.isClosed(_t655), this._snapTolerance = _e511;
    }
  };

  var Xi =
  /*#__PURE__*/
  function () {
    function Xi() {
      _classCallCheck(this, Xi);

      Xi.constructor_.apply(this, arguments);
    }

    _createClass(Xi, [{
      key: "snapTo",
      value: function snapTo(t, e) {
        var n = this.extractTargetCoordinates(t);
        return new Hi(e, n).transform(this._srcGeom);
      }
    }, {
      key: "snapToSelf",
      value: function snapToSelf(t, e) {
        var n = this.extractTargetCoordinates(this._srcGeom),
            s = new Hi(t, n, !0).transform(this._srcGeom);
        var i = s;
        return e && _(i, bt) && (i = s.buffer(0)), i;
      }
    }, {
      key: "computeSnapTolerance",
      value: function computeSnapTolerance(t) {
        return this.computeMinimumSegmentLength(t) / 10;
      }
    }, {
      key: "extractTargetCoordinates",
      value: function extractTargetCoordinates(t) {
        var e = new ct(),
            n = t.getCoordinates();

        for (var _t656 = 0; _t656 < n.length; _t656++) {
          e.add(n[_t656]);
        }

        return e.toArray(new Array(0).fill(null));
      }
    }, {
      key: "computeMinimumSegmentLength",
      value: function computeMinimumSegmentLength(t) {
        var e = i.MAX_VALUE;

        for (var _n349 = 0; _n349 < t.length - 1; _n349++) {
          var _s240 = t[_n349].distance(t[_n349 + 1]);

          _s240 < e && (e = _s240);
        }

        return e;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Xi;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "snap",
      value: function snap(t, e, n) {
        var s = new Array(2).fill(null),
            i = new Xi(t);
        s[0] = i.snapTo(e, n);
        var r = new Xi(e);
        return s[1] = r.snapTo(s[0], n), s;
      }
    }, {
      key: "computeOverlaySnapTolerance",
      value: function computeOverlaySnapTolerance() {
        if (1 === arguments.length) {
          var _t657 = arguments[0];

          var _e512 = Xi.computeSizeBasedSnapTolerance(_t657);

          var _n350 = _t657.getPrecisionModel();

          if (_n350.getType() === Xt.FIXED) {
            var _t658 = 1 / _n350.getScale() * 2 / 1.415;

            _t658 > _e512 && (_e512 = _t658);
          }

          return _e512;
        }

        if (2 === arguments.length) {
          var _t659 = arguments[0],
              _e513 = arguments[1];
          return Math.min(Xi.computeOverlaySnapTolerance(_t659), Xi.computeOverlaySnapTolerance(_e513));
        }
      }
    }, {
      key: "computeSizeBasedSnapTolerance",
      value: function computeSizeBasedSnapTolerance(t) {
        var e = t.getEnvelopeInternal();
        return Math.min(e.getHeight(), e.getWidth()) * Xi.SNAP_PRECISION_FACTOR;
      }
    }, {
      key: "snapToSelf",
      value: function snapToSelf(t, e, n) {
        return new Xi(t).snapToSelf(e, n);
      }
    }]);

    return Xi;
  }();

  Xi.constructor_ = function () {
    this._srcGeom = null;
    var t = arguments[0];
    this._srcGeom = t;
  }, Xi.SNAP_PRECISION_FACTOR = 1e-9;

  var Hi =
  /*#__PURE__*/
  function (_ye2) {
    _inherits(Hi, _ye2);

    function Hi() {
      var _this45;

      _classCallCheck(this, Hi);

      _this45 = _possibleConstructorReturn(this, _getPrototypeOf(Hi).call(this)), Hi.constructor_.apply(_assertThisInitialized(_this45), arguments);
      return _this45;
    }

    _createClass(Hi, [{
      key: "snapLine",
      value: function snapLine(t, e) {
        var n = new ki(t, this._snapTolerance);
        return n.setAllowSnappingToSourceVertices(this._isSelfSnap), n.snapTo(e);
      }
    }, {
      key: "transformCoordinates",
      value: function transformCoordinates(t, e) {
        var n = t.toCoordinateArray(),
            s = this.snapLine(n, this._snapPts);
        return this._factory.getCoordinateSequenceFactory().create(s);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Hi;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Hi;
  }(ye);

  Hi.constructor_ = function () {
    if (this._snapTolerance = null, this._snapPts = null, this._isSelfSnap = !1, 2 === arguments.length) {
      var _t660 = arguments[0],
          _e514 = arguments[1];
      this._snapTolerance = _t660, this._snapPts = _e514;
    } else if (3 === arguments.length) {
      var _t661 = arguments[0],
          _e515 = arguments[1],
          _n351 = arguments[2];
      this._snapTolerance = _t661, this._snapPts = _e515, this._isSelfSnap = _n351;
    }
  };

  var Wi = Object.freeze({
    GeometrySnapper: Xi,
    LineStringSnapper: ki
  });

  var ji =
  /*#__PURE__*/
  function () {
    function ji() {
      _classCallCheck(this, ji);

      ji.constructor_.apply(this, arguments);
    }

    _createClass(ji, [{
      key: "getCoordinates",
      value: function getCoordinates() {
        return this._pts;
      }
    }, {
      key: "size",
      value: function size() {
        return this._pts.length;
      }
    }, {
      key: "getCoordinate",
      value: function getCoordinate(t) {
        return this._pts[t];
      }
    }, {
      key: "isClosed",
      value: function isClosed() {
        return this._pts[0].equals(this._pts[this._pts.length - 1]);
      }
    }, {
      key: "getSegmentOctant",
      value: function getSegmentOctant(t) {
        return t === this._pts.length - 1 ? -1 : As.octant(this.getCoordinate(t), this.getCoordinate(t + 1));
      }
    }, {
      key: "setData",
      value: function setData(t) {
        this._data = t;
      }
    }, {
      key: "getData",
      value: function getData() {
        return this._data;
      }
    }, {
      key: "toString",
      value: function toString() {
        return $t.toLineString(new Yt(this._pts));
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return ji;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [Ds];
      }
    }]);

    return ji;
  }();

  ji.constructor_ = function () {
    this._pts = null, this._data = null;
    var t = arguments[0],
        e = arguments[1];
    this._pts = t, this._data = e;
  };

  var Ki =
  /*#__PURE__*/
  function () {
    function Ki() {
      _classCallCheck(this, Ki);

      Ki.constructor_.apply(this, arguments);
    }

    _createClass(Ki, [{
      key: "getInteriorIntersection",
      value: function getInteriorIntersection() {
        return this._interiorIntersection;
      }
    }, {
      key: "setCheckEndSegmentsOnly",
      value: function setCheckEndSegmentsOnly(t) {
        this._isCheckEndSegmentsOnly = t;
      }
    }, {
      key: "getIntersectionSegments",
      value: function getIntersectionSegments() {
        return this._intSegments;
      }
    }, {
      key: "count",
      value: function count() {
        return this._intersectionCount;
      }
    }, {
      key: "getIntersections",
      value: function getIntersections() {
        return this._intersections;
      }
    }, {
      key: "setFindAllIntersections",
      value: function setFindAllIntersections(t) {
        this._findAllIntersections = t;
      }
    }, {
      key: "setKeepIntersections",
      value: function setKeepIntersections(t) {
        this._keepIntersections = t;
      }
    }, {
      key: "processIntersections",
      value: function processIntersections(t, e, n, s) {
        if (!this._findAllIntersections && this.hasIntersection()) return null;
        if (t === n && e === s) return null;

        if (this._isCheckEndSegmentsOnly) {
          if (!(this.isEndSegment(t, e) || this.isEndSegment(n, s))) return null;
        }

        var i = t.getCoordinates()[e],
            r = t.getCoordinates()[e + 1],
            o = n.getCoordinates()[s],
            l = n.getCoordinates()[s + 1];
        this._li.computeIntersection(i, r, o, l), this._li.hasIntersection() && this._li.isInteriorIntersection() && (this._intSegments = new Array(4).fill(null), this._intSegments[0] = i, this._intSegments[1] = r, this._intSegments[2] = o, this._intSegments[3] = l, this._interiorIntersection = this._li.getIntersection(0), this._keepIntersections && this._intersections.add(this._interiorIntersection), this._intersectionCount++);
      }
    }, {
      key: "isEndSegment",
      value: function isEndSegment(t, e) {
        return 0 === e || e >= t.size() - 2;
      }
    }, {
      key: "hasIntersection",
      value: function hasIntersection() {
        return null !== this._interiorIntersection;
      }
    }, {
      key: "isDone",
      value: function isDone() {
        return !this._findAllIntersections && null !== this._interiorIntersection;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Ki;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [fi];
      }
    }], [{
      key: "createAllIntersectionsFinder",
      value: function createAllIntersectionsFinder(t) {
        var e = new Ki(t);
        return e.setFindAllIntersections(!0), e;
      }
    }, {
      key: "createAnyIntersectionFinder",
      value: function createAnyIntersectionFinder(t) {
        return new Ki(t);
      }
    }, {
      key: "createIntersectionCounter",
      value: function createIntersectionCounter(t) {
        var e = new Ki(t);
        return e.setFindAllIntersections(!0), e.setKeepIntersections(!1), e;
      }
    }]);

    return Ki;
  }();

  Ki.constructor_ = function () {
    this._findAllIntersections = !1, this._isCheckEndSegmentsOnly = !1, this._li = null, this._interiorIntersection = null, this._intSegments = null, this._intersections = new x(), this._intersectionCount = 0, this._keepIntersections = !0;
    var t = arguments[0];
    this._li = t, this._interiorIntersection = null;
  };

  var Zi =
  /*#__PURE__*/
  function () {
    function Zi() {
      _classCallCheck(this, Zi);

      Zi.constructor_.apply(this, arguments);
    }

    _createClass(Zi, [{
      key: "execute",
      value: function execute() {
        if (null !== this._segInt) return null;
        this.checkInteriorIntersections();
      }
    }, {
      key: "getIntersections",
      value: function getIntersections() {
        return this._segInt.getIntersections();
      }
    }, {
      key: "isValid",
      value: function isValid() {
        return this.execute(), this._isValid;
      }
    }, {
      key: "setFindAllIntersections",
      value: function setFindAllIntersections(t) {
        this._findAllIntersections = t;
      }
    }, {
      key: "checkInteriorIntersections",
      value: function checkInteriorIntersections() {
        this._isValid = !0, this._segInt = new Ki(this._li), this._segInt.setFindAllIntersections(this._findAllIntersections);
        var t = new Us();
        if (t.setSegmentIntersector(this._segInt), t.computeNodes(this._segStrings), this._segInt.hasIntersection()) return this._isValid = !1, null;
      }
    }, {
      key: "checkValid",
      value: function checkValid() {
        if (this.execute(), !this._isValid) throw new jn(this.getErrorMessage(), this._segInt.getInteriorIntersection());
      }
    }, {
      key: "getErrorMessage",
      value: function getErrorMessage() {
        if (this._isValid) return "no intersections found";

        var t = this._segInt.getIntersectionSegments();

        return "found non-noded intersection between " + $t.toLineString(t[0], t[1]) + " and " + $t.toLineString(t[2], t[3]);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Zi;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "computeIntersections",
      value: function computeIntersections(t) {
        var e = new Zi(t);
        return e.setFindAllIntersections(!0), e.isValid(), e.getIntersections();
      }
    }]);

    return Zi;
  }();

  Zi.constructor_ = function () {
    this._li = new ee(), this._segStrings = null, this._findAllIntersections = !1, this._segInt = null, this._isValid = !0;
    var t = arguments[0];
    this._segStrings = t;
  };

  var Qi =
  /*#__PURE__*/
  function () {
    function Qi() {
      _classCallCheck(this, Qi);

      Qi.constructor_.apply(this, arguments);
    }

    _createClass(Qi, [{
      key: "checkValid",
      value: function checkValid() {
        this._nv.checkValid();
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Qi;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "toSegmentStrings",
      value: function toSegmentStrings(t) {
        var e = new x();

        for (var _n352 = t.iterator(); _n352.hasNext();) {
          var _t662 = _n352.next();

          e.add(new ji(_t662.getCoordinates(), _t662));
        }

        return e;
      }
    }, {
      key: "checkValid",
      value: function checkValid(t) {
        new Qi(t).checkValid();
      }
    }]);

    return Qi;
  }();

  Qi.constructor_ = function () {
    this._nv = null;
    var t = arguments[0];
    this._nv = new Zi(Qi.toSegmentStrings(t));
  };

  var Ji =
  /*#__PURE__*/
  function () {
    function Ji() {
      _classCallCheck(this, Ji);

      Ji.constructor_.apply(this, arguments);
    }

    _createClass(Ji, [{
      key: "collectLines",
      value: function collectLines(t) {
        for (var _e516 = this._op.getGraph().getEdgeEnds().iterator(); _e516.hasNext();) {
          var _n353 = _e516.next();

          this.collectLineEdge(_n353, t, this._lineEdgesList), this.collectBoundaryTouchEdge(_n353, t, this._lineEdgesList);
        }
      }
    }, {
      key: "labelIsolatedLine",
      value: function labelIsolatedLine(t, e) {
        var n = this._ptLocator.locate(t.getCoordinate(), this._op.getArgGeometry(e));

        t.getLabel().setLocation(e, n);
      }
    }, {
      key: "build",
      value: function build(t) {
        return this.findCoveredLineEdges(), this.collectLines(t), this.buildLines(t), this._resultLineList;
      }
    }, {
      key: "collectLineEdge",
      value: function collectLineEdge(t, e, n) {
        var s = t.getLabel(),
            i = t.getEdge();
        t.isLineEdge() && (t.isVisited() || !lr.isResultOfOp(s, e) || i.isCovered() || (n.add(i), t.setVisitedEdge(!0)));
      }
    }, {
      key: "findCoveredLineEdges",
      value: function findCoveredLineEdges() {
        for (var _t663 = this._op.getGraph().getNodes().iterator(); _t663.hasNext();) {
          _t663.next().getEdges().findCoveredLineEdges();
        }

        for (var _t664 = this._op.getGraph().getEdgeEnds().iterator(); _t664.hasNext();) {
          var _e517 = _t664.next(),
              _n354 = _e517.getEdge();

          if (_e517.isLineEdge() && !_n354.isCoveredSet()) {
            var _t665 = this._op.isCoveredByA(_e517.getCoordinate());

            _n354.setCovered(_t665);
          }
        }
      }
    }, {
      key: "labelIsolatedLines",
      value: function labelIsolatedLines(t) {
        for (var _e518 = t.iterator(); _e518.hasNext();) {
          var _t666 = _e518.next(),
              _n355 = _t666.getLabel();

          _t666.isIsolated() && (_n355.isNull(0) ? this.labelIsolatedLine(_t666, 0) : this.labelIsolatedLine(_t666, 1));
        }
      }
    }, {
      key: "buildLines",
      value: function buildLines(t) {
        for (var _t667 = this._lineEdgesList.iterator(); _t667.hasNext();) {
          var _e519 = _t667.next(),
              _n356 = (_e519.getLabel(), this._geometryFactory.createLineString(_e519.getCoordinates()));

          this._resultLineList.add(_n356), _e519.setInResult(!0);
        }
      }
    }, {
      key: "collectBoundaryTouchEdge",
      value: function collectBoundaryTouchEdge(t, e, n) {
        var s = t.getLabel();
        return t.isLineEdge() ? null : t.isVisited() ? null : t.isInteriorAreaEdge() ? null : t.getEdge().isInResult() ? null : (u.isTrue(!(t.isInResult() || t.getSym().isInResult()) || !t.getEdge().isInResult()), void (lr.isResultOfOp(s, e) && e === lr.INTERSECTION && (n.add(t.getEdge()), t.setVisitedEdge(!0))));
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Ji;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Ji;
  }();

  Ji.constructor_ = function () {
    this._op = null, this._geometryFactory = null, this._ptLocator = null, this._lineEdgesList = new x(), this._resultLineList = new x();
    var t = arguments[0],
        e = arguments[1],
        n = arguments[2];
    this._op = t, this._geometryFactory = e, this._ptLocator = n;
  };

  var $i =
  /*#__PURE__*/
  function () {
    function $i() {
      _classCallCheck(this, $i);

      $i.constructor_.apply(this, arguments);
    }

    _createClass($i, [{
      key: "filterCoveredNodeToPoint",
      value: function filterCoveredNodeToPoint(t) {
        var e = t.getCoordinate();

        if (!this._op.isCoveredByLA(e)) {
          var _t668 = this._geometryFactory.createPoint(e);

          this._resultPointList.add(_t668);
        }
      }
    }, {
      key: "extractNonCoveredResultNodes",
      value: function extractNonCoveredResultNodes(t) {
        for (var _e520 = this._op.getGraph().getNodes().iterator(); _e520.hasNext();) {
          var _n357 = _e520.next();

          if (!_n357.isInResult() && !_n357.isIncidentEdgeInResult() && (0 === _n357.getEdges().getDegree() || t === lr.INTERSECTION)) {
            var _e521 = _n357.getLabel();

            lr.isResultOfOp(_e521, t) && this.filterCoveredNodeToPoint(_n357);
          }
        }
      }
    }, {
      key: "build",
      value: function build(t) {
        return this.extractNonCoveredResultNodes(t), this._resultPointList;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return $i;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return $i;
  }();

  $i.constructor_ = function () {
    this._op = null, this._geometryFactory = null, this._resultPointList = new x();
    var t = arguments[0],
        e = arguments[1];
    this._op = t, this._geometryFactory = e;
  };

  var tr =
  /*#__PURE__*/
  function () {
    function tr() {
      _classCallCheck(this, tr);

      this._isFirst = !0, this._commonMantissaBitsCount = 53, this._commonBits = new s(), this._commonSignExp = null;
    }

    _createClass(tr, [{
      key: "getCommon",
      value: function getCommon() {
        return i.longBitsToDouble(this._commonBits);
      }
    }, {
      key: "add",
      value: function add(t) {
        var e = i.doubleToLongBits(t);
        return this._isFirst ? (this._commonBits = e, this._commonSignExp = tr.signExpBits(this._commonBits), this._isFirst = !1, null) : tr.signExpBits(e) !== this._commonSignExp ? (this._commonBits.high = 0, this._commonBits.low = 0, null) : (this._commonMantissaBitsCount = tr.numCommonMostSigMantissaBits(this._commonBits, e), void (this._commonBits = tr.zeroLowerBits(this._commonBits, 64 - (12 + this._commonMantissaBitsCount))));
      }
    }, {
      key: "toString",
      value: function toString() {
        if (1 === arguments.length) {
          var _t669 = arguments[0],
              _e522 = i.longBitsToDouble(_t669),
              _n358 = "0000000000000000000000000000000000000000000000000000000000000000" + s.toBinaryString(_t669),
              _r68 = _n358.substring(_n358.length - 64);

          return _r68.substring(0, 1) + "  " + _r68.substring(1, 12) + "(exp) " + _r68.substring(12) + " [ " + _e522 + " ]";
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return tr;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "getBit",
      value: function getBit(t, e) {
        var n = 1 << e % 32;
        return e < 32 ? 0 != (t.low & n) ? 1 : 0 : 0 != (t.high & n) ? 1 : 0;
      }
    }, {
      key: "signExpBits",
      value: function signExpBits(t) {
        return t.high >>> 20;
      }
    }, {
      key: "zeroLowerBits",
      value: function zeroLowerBits(t, e) {
        var n = "low";

        if (e > 32 && (t.low = 0, e %= 32, n = "high"), e > 0) {
          var _s241 = e < 32 ? ~((1 << e) - 1) : 0;

          t[n] &= _s241;
        }

        return t;
      }
    }, {
      key: "numCommonMostSigMantissaBits",
      value: function numCommonMostSigMantissaBits(t, e) {
        var n = 0;

        for (var _s242 = 52; _s242 >= 0; _s242--) {
          if (tr.getBit(t, _s242) !== tr.getBit(e, _s242)) return n;
          n++;
        }

        return 52;
      }
    }]);

    return tr;
  }();

  var er =
  /*#__PURE__*/
  function () {
    function er() {
      _classCallCheck(this, er);

      er.constructor_.apply(this, arguments);
    }

    _createClass(er, [{
      key: "addCommonBits",
      value: function addCommonBits(t) {
        var e = new sr(this._commonCoord);
        t.apply(e), t.geometryChanged();
      }
    }, {
      key: "removeCommonBits",
      value: function removeCommonBits(t) {
        if (0 === this._commonCoord.x && 0 === this._commonCoord.y) return t;
        var e = new g(this._commonCoord);
        e.x = -e.x, e.y = -e.y;
        var n = new sr(e);
        return t.apply(n), t.geometryChanged(), t;
      }
    }, {
      key: "getCommonCoordinate",
      value: function getCommonCoordinate() {
        return this._commonCoord;
      }
    }, {
      key: "add",
      value: function add(t) {
        t.apply(this._ccFilter), this._commonCoord = this._ccFilter.getCommonCoordinate();
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return er;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return er;
  }();

  var nr =
  /*#__PURE__*/
  function () {
    function nr() {
      _classCallCheck(this, nr);

      nr.constructor_.apply(this, arguments);
    }

    _createClass(nr, [{
      key: "filter",
      value: function filter(t) {
        this._commonBitsX.add(t.x), this._commonBitsY.add(t.y);
      }
    }, {
      key: "getCommonCoordinate",
      value: function getCommonCoordinate() {
        return new g(this._commonBitsX.getCommon(), this._commonBitsY.getCommon());
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return nr;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [B];
      }
    }]);

    return nr;
  }();

  nr.constructor_ = function () {
    this._commonBitsX = new tr(), this._commonBitsY = new tr();
  };

  var sr =
  /*#__PURE__*/
  function () {
    function sr() {
      _classCallCheck(this, sr);

      sr.constructor_.apply(this, arguments);
    }

    _createClass(sr, [{
      key: "filter",
      value: function filter(t, e) {
        var n = t.getOrdinate(e, 0) + this.trans.x,
            s = t.getOrdinate(e, 1) + this.trans.y;
        t.setOrdinate(e, 0, n), t.setOrdinate(e, 1, s);
      }
    }, {
      key: "isDone",
      value: function isDone() {
        return !1;
      }
    }, {
      key: "isGeometryChanged",
      value: function isGeometryChanged() {
        return !0;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return sr;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [_t];
      }
    }]);

    return sr;
  }();

  sr.constructor_ = function () {
    this.trans = null;
    var t = arguments[0];
    this.trans = t;
  }, er.CommonCoordinateFilter = nr, er.Translater = sr, er.constructor_ = function () {
    this._commonCoord = null, this._ccFilter = new nr();
  };

  var ir =
  /*#__PURE__*/
  function () {
    function ir() {
      _classCallCheck(this, ir);

      ir.constructor_.apply(this, arguments);
    }

    _createClass(ir, [{
      key: "selfSnap",
      value: function selfSnap(t) {
        return new Xi(t).snapTo(t, this._snapTolerance);
      }
    }, {
      key: "removeCommonBits",
      value: function removeCommonBits(t) {
        this._cbr = new er(), this._cbr.add(t[0]), this._cbr.add(t[1]);
        var e = new Array(2).fill(null);
        return e[0] = this._cbr.removeCommonBits(t[0].copy()), e[1] = this._cbr.removeCommonBits(t[1].copy()), e;
      }
    }, {
      key: "prepareResult",
      value: function prepareResult(t) {
        return this._cbr.addCommonBits(t), t;
      }
    }, {
      key: "getResultGeometry",
      value: function getResultGeometry(t) {
        var e = this.snap(this._geom),
            n = lr.overlayOp(e[0], e[1], t);
        return this.prepareResult(n);
      }
    }, {
      key: "checkValid",
      value: function checkValid(t) {
        t.isValid() || O.out.println("Snapped geometry is invalid");
      }
    }, {
      key: "computeSnapTolerance",
      value: function computeSnapTolerance() {
        this._snapTolerance = Xi.computeOverlaySnapTolerance(this._geom[0], this._geom[1]);
      }
    }, {
      key: "snap",
      value: function snap(t) {
        var e = this.removeCommonBits(t);
        return Xi.snap(e[0], e[1], this._snapTolerance);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return ir;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "overlayOp",
      value: function overlayOp(t, e, n) {
        return new ir(t, e).getResultGeometry(n);
      }
    }, {
      key: "union",
      value: function union(t, e) {
        return ir.overlayOp(t, e, lr.UNION);
      }
    }, {
      key: "intersection",
      value: function intersection(t, e) {
        return ir.overlayOp(t, e, lr.INTERSECTION);
      }
    }, {
      key: "symDifference",
      value: function symDifference(t, e) {
        return ir.overlayOp(t, e, lr.SYMDIFFERENCE);
      }
    }, {
      key: "difference",
      value: function difference(t, e) {
        return ir.overlayOp(t, e, lr.DIFFERENCE);
      }
    }]);

    return ir;
  }();

  ir.constructor_ = function () {
    this._geom = new Array(2).fill(null), this._snapTolerance = null, this._cbr = null;
    var t = arguments[0],
        e = arguments[1];
    this._geom[0] = t, this._geom[1] = e, this.computeSnapTolerance();
  };

  var rr =
  /*#__PURE__*/
  function () {
    function rr() {
      _classCallCheck(this, rr);

      rr.constructor_.apply(this, arguments);
    }

    _createClass(rr, [{
      key: "getResultGeometry",
      value: function getResultGeometry(t) {
        var e = null,
            n = !1,
            s = null;

        try {
          e = lr.overlayOp(this._geom[0], this._geom[1], t), !0 && (n = !0);
        } catch (t) {
          if (!(t instanceof c)) throw t;
          s = t;
        }

        if (!n) try {
          e = ir.overlayOp(this._geom[0], this._geom[1], t);
        } catch (t) {
          throw t instanceof c ? s : t;
        }
        return e;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return rr;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "overlayOp",
      value: function overlayOp(t, e, n) {
        return new rr(t, e).getResultGeometry(n);
      }
    }, {
      key: "union",
      value: function union(t, e) {
        return rr.overlayOp(t, e, lr.UNION);
      }
    }, {
      key: "intersection",
      value: function intersection(t, e) {
        return rr.overlayOp(t, e, lr.INTERSECTION);
      }
    }, {
      key: "symDifference",
      value: function symDifference(t, e) {
        return rr.overlayOp(t, e, lr.SYMDIFFERENCE);
      }
    }, {
      key: "difference",
      value: function difference(t, e) {
        return rr.overlayOp(t, e, lr.DIFFERENCE);
      }
    }]);

    return rr;
  }();

  rr.constructor_ = function () {
    this._geom = new Array(2).fill(null);
    var t = arguments[0],
        e = arguments[1];
    this._geom[0] = t, this._geom[1] = e;
  };

  var or =
  /*#__PURE__*/
  function () {
    function or() {
      _classCallCheck(this, or);

      or.constructor_.apply(this, arguments);
    }

    _createClass(or, [{
      key: "getArgGeometry",
      value: function getArgGeometry(t) {
        return this._arg[t].getGeometry();
      }
    }, {
      key: "setComputationPrecision",
      value: function setComputationPrecision(t) {
        this._resultPrecisionModel = t, this._li.setPrecisionModel(this._resultPrecisionModel);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return or;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return or;
  }();

  or.constructor_ = function () {
    if (this._li = new ee(), this._resultPrecisionModel = null, this._arg = null, 1 === arguments.length) {
      var _t670 = arguments[0];
      this.setComputationPrecision(_t670.getPrecisionModel()), this._arg = new Array(1).fill(null), this._arg[0] = new Jn(0, _t670);
    } else if (2 === arguments.length) {
      var _t671 = arguments[0],
          _e523 = arguments[1];
      or.constructor_.call(this, _t671, _e523, V.OGC_SFS_BOUNDARY_RULE);
    } else if (3 === arguments.length) {
      var _t672 = arguments[0],
          _e524 = arguments[1],
          _n359 = arguments[2];
      _t672.getPrecisionModel().compareTo(_e524.getPrecisionModel()) >= 0 ? this.setComputationPrecision(_t672.getPrecisionModel()) : this.setComputationPrecision(_e524.getPrecisionModel()), this._arg = new Array(2).fill(null), this._arg[0] = new Jn(0, _t672, _n359), this._arg[1] = new Jn(1, _e524, _n359);
    }
  };

  var lr =
  /*#__PURE__*/
  function (_or) {
    _inherits(lr, _or);

    function lr() {
      var _this46;

      _classCallCheck(this, lr);

      _this46 = _possibleConstructorReturn(this, _getPrototypeOf(lr).call(this)), lr.constructor_.apply(_assertThisInitialized(_this46), arguments);
      return _this46;
    }

    _createClass(lr, [{
      key: "insertUniqueEdge",
      value: function insertUniqueEdge(t) {
        var e = this._edgeList.findEqualEdge(t);

        if (null !== e) {
          var _n360 = e.getLabel();

          var _s243 = t.getLabel();

          e.isPointwiseEqual(t) || (_s243 = new Gn(t.getLabel())).flip();

          var _i135 = e.getDepth();

          _i135.isNull() && _i135.add(_n360), _i135.add(_s243), _n360.merge(_s243);
        } else this._edgeList.add(t);
      }
    }, {
      key: "getGraph",
      value: function getGraph() {
        return this._graph;
      }
    }, {
      key: "cancelDuplicateResultEdges",
      value: function cancelDuplicateResultEdges() {
        for (var _t673 = this._graph.getEdgeEnds().iterator(); _t673.hasNext();) {
          var _e525 = _t673.next(),
              _n361 = _e525.getSym();

          _e525.isInResult() && _n361.isInResult() && (_e525.setInResult(!1), _n361.setInResult(!1));
        }
      }
    }, {
      key: "isCoveredByLA",
      value: function isCoveredByLA(t) {
        return !!this.isCovered(t, this._resultLineList) || !!this.isCovered(t, this._resultPolyList);
      }
    }, {
      key: "computeGeometry",
      value: function computeGeometry(t, e, n, s) {
        var i = new x();
        return i.addAll(t), i.addAll(e), i.addAll(n), i.isEmpty() ? lr.createEmptyResult(s, this._arg[0].getGeometry(), this._arg[1].getGeometry(), this._geomFact) : this._geomFact.buildGeometry(i);
      }
    }, {
      key: "mergeSymLabels",
      value: function mergeSymLabels() {
        for (var _t674 = this._graph.getNodes().iterator(); _t674.hasNext();) {
          _t674.next().getEdges().mergeSymLabels();
        }
      }
    }, {
      key: "isCovered",
      value: function isCovered(t, e) {
        for (var _n362 = e.iterator(); _n362.hasNext();) {
          var _e526 = _n362.next();

          if (this._ptLocator.locate(t, _e526) !== se.EXTERIOR) return !0;
        }

        return !1;
      }
    }, {
      key: "replaceCollapsedEdges",
      value: function replaceCollapsedEdges() {
        var t = new x();

        for (var _e527 = this._edgeList.iterator(); _e527.hasNext();) {
          var _n363 = _e527.next();

          _n363.isCollapsed() && (_e527.remove(), t.add(_n363.getCollapsedEdge()));
        }

        this._edgeList.addAll(t);
      }
    }, {
      key: "updateNodeLabelling",
      value: function updateNodeLabelling() {
        for (var _t675 = this._graph.getNodes().iterator(); _t675.hasNext();) {
          var _e528 = _t675.next(),
              _n364 = _e528.getEdges().getLabel();

          _e528.getLabel().merge(_n364);
        }
      }
    }, {
      key: "getResultGeometry",
      value: function getResultGeometry(t) {
        return this.computeOverlay(t), this._resultGeom;
      }
    }, {
      key: "insertUniqueEdges",
      value: function insertUniqueEdges(t) {
        for (var _e529 = t.iterator(); _e529.hasNext();) {
          var _t676 = _e529.next();

          this.insertUniqueEdge(_t676);
        }
      }
    }, {
      key: "computeOverlay",
      value: function computeOverlay(t) {
        this.copyPoints(0), this.copyPoints(1), this._arg[0].computeSelfNodes(this._li, !1), this._arg[1].computeSelfNodes(this._li, !1), this._arg[0].computeEdgeIntersections(this._arg[1], this._li, !0);
        var e = new x();
        this._arg[0].computeSplitEdges(e), this._arg[1].computeSplitEdges(e), this.insertUniqueEdges(e), this.computeLabelsFromDepths(), this.replaceCollapsedEdges(), Qi.checkValid(this._edgeList.getEdges()), this._graph.addEdges(this._edgeList.getEdges()), this.computeLabelling(), this.labelIncompleteNodes(), this.findResultAreaEdges(t), this.cancelDuplicateResultEdges();
        var n = new ni(this._geomFact);
        n.add(this._graph), this._resultPolyList = n.getPolygons();
        var s = new Ji(this, this._geomFact, this._ptLocator);
        this._resultLineList = s.build(t);
        var i = new $i(this, this._geomFact, this._ptLocator);
        this._resultPointList = i.build(t), this._resultGeom = this.computeGeometry(this._resultPointList, this._resultLineList, this._resultPolyList, t);
      }
    }, {
      key: "labelIncompleteNode",
      value: function labelIncompleteNode(t, e) {
        var n = this._ptLocator.locate(t.getCoordinate(), this._arg[e].getGeometry());

        t.getLabel().setLocation(e, n);
      }
    }, {
      key: "copyPoints",
      value: function copyPoints(t) {
        for (var _e530 = this._arg[t].getNodeIterator(); _e530.hasNext();) {
          var _n365 = _e530.next();

          this._graph.addNode(_n365.getCoordinate()).setLabel(t, _n365.getLabel().getLocation(t));
        }
      }
    }, {
      key: "findResultAreaEdges",
      value: function findResultAreaEdges(t) {
        for (var _e531 = this._graph.getEdgeEnds().iterator(); _e531.hasNext();) {
          var _n366 = _e531.next(),
              _s244 = _n366.getLabel();

          _s244.isArea() && !_n366.isInteriorAreaEdge() && lr.isResultOfOp(_s244.getLocation(0, vn.RIGHT), _s244.getLocation(1, vn.RIGHT), t) && _n366.setInResult(!0);
        }
      }
    }, {
      key: "computeLabelsFromDepths",
      value: function computeLabelsFromDepths() {
        for (var _t677 = this._edgeList.iterator(); _t677.hasNext();) {
          var _e532 = _t677.next(),
              _n367 = _e532.getLabel(),
              _s245 = _e532.getDepth();

          if (!_s245.isNull()) {
            _s245.normalize();

            for (var _t678 = 0; _t678 < 2; _t678++) {
              _n367.isNull(_t678) || !_n367.isArea() || _s245.isNull(_t678) || (0 === _s245.getDelta(_t678) ? _n367.toLine(_t678) : (u.isTrue(!_s245.isNull(_t678, vn.LEFT), "depth of LEFT side has not been initialized"), _n367.setLocation(_t678, vn.LEFT, _s245.getLocation(_t678, vn.LEFT)), u.isTrue(!_s245.isNull(_t678, vn.RIGHT), "depth of RIGHT side has not been initialized"), _n367.setLocation(_t678, vn.RIGHT, _s245.getLocation(_t678, vn.RIGHT))));
            }
          }
        }
      }
    }, {
      key: "computeLabelling",
      value: function computeLabelling() {
        for (var _t679 = this._graph.getNodes().iterator(); _t679.hasNext();) {
          _t679.next().getEdges().computeLabelling(this._arg);
        }

        this.mergeSymLabels(), this.updateNodeLabelling();
      }
    }, {
      key: "labelIncompleteNodes",
      value: function labelIncompleteNodes() {
        for (var _t680 = this._graph.getNodes().iterator(); _t680.hasNext();) {
          var _e533 = _t680.next(),
              _n368 = _e533.getLabel();

          _e533.isIsolated() && (_n368.isNull(0) ? this.labelIncompleteNode(_e533, 0) : this.labelIncompleteNode(_e533, 1)), _e533.getEdges().updateLabelling(_n368);
        }
      }
    }, {
      key: "isCoveredByA",
      value: function isCoveredByA(t) {
        return !!this.isCovered(t, this._resultPolyList);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return lr;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "overlayOp",
      value: function overlayOp(t, e, n) {
        return new lr(t, e).getResultGeometry(n);
      }
    }, {
      key: "union",
      value: function union(t, e) {
        if (t.isEmpty() || e.isEmpty()) {
          if (t.isEmpty() && e.isEmpty()) return lr.createEmptyResult(lr.UNION, t, e, t.getFactory());
          if (t.isEmpty()) return e.copy();
          if (e.isEmpty()) return t.copy();
        }

        if (t.isGeometryCollection() || e.isGeometryCollection()) throw new n("This method does not support GeometryCollection arguments");
        return rr.overlayOp(t, e, lr.UNION);
      }
    }, {
      key: "intersection",
      value: function intersection(t, e) {
        if (t.isEmpty() || e.isEmpty()) return lr.createEmptyResult(lr.INTERSECTION, t, e, t.getFactory());

        if (t.isGeometryCollection()) {
          var _n369 = e;
          return de.map(t, new (
          /*#__PURE__*/
          function () {
            function _class7() {
              _classCallCheck(this, _class7);
            }

            _createClass(_class7, [{
              key: "map",
              value: function map(t) {
                return lr.intersection(t, _n369);
              }
            }, {
              key: "interfaces_",
              get: function get() {
                return [pe];
              }
            }]);

            return _class7;
          }())());
        }

        return rr.overlayOp(t, e, lr.INTERSECTION);
      }
    }, {
      key: "symDifference",
      value: function symDifference(t, e) {
        if (t.isEmpty() || e.isEmpty()) {
          if (t.isEmpty() && e.isEmpty()) return lr.createEmptyResult(lr.SYMDIFFERENCE, t, e, t.getFactory());
          if (t.isEmpty()) return e.copy();
          if (e.isEmpty()) return t.copy();
        }

        if (t.isGeometryCollection() || e.isGeometryCollection()) throw new n("This method does not support GeometryCollection arguments");
        return rr.overlayOp(t, e, lr.SYMDIFFERENCE);
      }
    }, {
      key: "resultDimension",
      value: function resultDimension(t, e, n) {
        var s = e.getDimension(),
            i = n.getDimension();
        var r = -1;

        switch (t) {
          case lr.INTERSECTION:
            r = Math.min(s, i);
            break;

          case lr.UNION:
            r = Math.max(s, i);
            break;

          case lr.DIFFERENCE:
            r = s;
            break;

          case lr.SYMDIFFERENCE:
            r = Math.max(s, i);
        }

        return r;
      }
    }, {
      key: "createEmptyResult",
      value: function createEmptyResult(t, e, n, s) {
        var i = null;

        switch (lr.resultDimension(t, e, n)) {
          case -1:
            i = s.createGeometryCollection();
            break;

          case 0:
            i = s.createPoint();
            break;

          case 1:
            i = s.createLineString();
            break;

          case 2:
            i = s.createPolygon();
        }

        return i;
      }
    }, {
      key: "difference",
      value: function difference(t, e) {
        if (t.isEmpty()) return lr.createEmptyResult(lr.DIFFERENCE, t, e, t.getFactory());
        if (e.isEmpty()) return t.copy();
        if (t.isGeometryCollection() || e.isGeometryCollection()) throw new n("This method does not support GeometryCollection arguments");
        return rr.overlayOp(t, e, lr.DIFFERENCE);
      }
    }, {
      key: "isResultOfOp",
      value: function isResultOfOp() {
        if (2 === arguments.length) {
          var _t681 = arguments[0],
              _e534 = arguments[1],
              _n370 = _t681.getLocation(0),
              _s246 = _t681.getLocation(1);

          return lr.isResultOfOp(_n370, _s246, _e534);
        }

        if (3 === arguments.length) {
          var _t682 = arguments[0],
              _e535 = arguments[1];
          var _n371 = arguments[2];

          switch (_t682 === se.BOUNDARY && (_t682 = se.INTERIOR), _e535 === se.BOUNDARY && (_e535 = se.INTERIOR), _n371) {
            case lr.INTERSECTION:
              return _t682 === se.INTERIOR && _e535 === se.INTERIOR;

            case lr.UNION:
              return _t682 === se.INTERIOR || _e535 === se.INTERIOR;

            case lr.DIFFERENCE:
              return _t682 === se.INTERIOR && _e535 !== se.INTERIOR;

            case lr.SYMDIFFERENCE:
              return _t682 === se.INTERIOR && _e535 !== se.INTERIOR || _t682 !== se.INTERIOR && _e535 === se.INTERIOR;
          }

          return !1;
        }
      }
    }]);

    return lr;
  }(or);

  lr.constructor_ = function () {
    this._ptLocator = new fn(), this._geomFact = null, this._resultGeom = null, this._graph = null, this._edgeList = new _i(), this._resultPolyList = new x(), this._resultLineList = new x(), this._resultPointList = new x();
    var t = arguments[0],
        e = arguments[1];
    or.constructor_.call(this, t, e), this._graph = new Qn(new gi()), this._geomFact = t.getFactory();
  }, lr.INTERSECTION = 1, lr.UNION = 2, lr.DIFFERENCE = 3, lr.SYMDIFFERENCE = 4;
  var ar = Object.freeze({
    snap: Wi,
    OverlayOp: lr
  });

  var cr =
  /*#__PURE__*/
  function (_Mi2) {
    _inherits(cr, _Mi2);

    function cr() {
      var _this47;

      _classCallCheck(this, cr);

      _this47 = _possibleConstructorReturn(this, _getPrototypeOf(cr).call(this)), cr.constructor_.apply(_assertThisInitialized(_this47), arguments);
      return _this47;
    }

    _createClass(cr, [{
      key: "getNext",
      value: function getNext() {
        return this._next;
      }
    }, {
      key: "isInRing",
      value: function isInRing() {
        return null !== this._edgeRing;
      }
    }, {
      key: "setRing",
      value: function setRing(t) {
        this._edgeRing = t;
      }
    }, {
      key: "setLabel",
      value: function setLabel(t) {
        this._label = t;
      }
    }, {
      key: "getLabel",
      value: function getLabel() {
        return this._label;
      }
    }, {
      key: "setNext",
      value: function setNext(t) {
        this._next = t;
      }
    }, {
      key: "getRing",
      value: function getRing() {
        return this._edgeRing;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return cr;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return cr;
  }(Mi);

  cr.constructor_ = function () {
    this._edgeRing = null, this._next = null, this._label = -1;
    var t = arguments[0],
        e = arguments[1],
        n = arguments[2],
        s = arguments[3];
    Mi.constructor_.call(this, t, e, n, s);
  };

  var hr =
  /*#__PURE__*/
  function (_Di2) {
    _inherits(hr, _Di2);

    function hr() {
      var _this48;

      _classCallCheck(this, hr);

      _this48 = _possibleConstructorReturn(this, _getPrototypeOf(hr).call(this)), hr.constructor_.apply(_assertThisInitialized(_this48), arguments);
      return _this48;
    }

    _createClass(hr, [{
      key: "getLine",
      value: function getLine() {
        return this._line;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return hr;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return hr;
  }(Di);

  hr.constructor_ = function () {
    this._line = null;
    var t = arguments[0];
    this._line = t;
  };

  var ur =
  /*#__PURE__*/
  function () {
    function ur() {
      _classCallCheck(this, ur);

      ur.constructor_.apply(this, arguments);
    }

    _createClass(ur, [{
      key: "visitInteriorRing",
      value: function visitInteriorRing(t, e) {
        var n = t.getCoordinates(),
            s = n[0],
            i = ur.findDifferentPoint(n, s),
            r = e.findEdgeInSameDirection(s, i),
            o = e.findEdgeEnd(r);
        var l = null;
        o.getLabel().getLocation(0, vn.RIGHT) === se.INTERIOR ? l = o : o.getSym().getLabel().getLocation(0, vn.RIGHT) === se.INTERIOR && (l = o.getSym()), u.isTrue(null !== l, "unable to find dirEdge with Interior on RHS"), this.visitLinkedDirectedEdges(l);
      }
    }, {
      key: "visitShellInteriors",
      value: function visitShellInteriors(t, e) {
        if (t instanceof Mt) {
          var _n372 = t;
          this.visitInteriorRing(_n372.getExteriorRing(), e);
        }

        if (t instanceof Ft) {
          var _n373 = t;

          for (var _t683 = 0; _t683 < _n373.getNumGeometries(); _t683++) {
            var _s247 = _n373.getGeometryN(_t683);

            this.visitInteriorRing(_s247.getExteriorRing(), e);
          }
        }
      }
    }, {
      key: "getCoordinate",
      value: function getCoordinate() {
        return this._disconnectedRingcoord;
      }
    }, {
      key: "setInteriorEdgesInResult",
      value: function setInteriorEdgesInResult(t) {
        for (var _e536 = t.getEdgeEnds().iterator(); _e536.hasNext();) {
          var _t684 = _e536.next();

          _t684.getLabel().getLocation(0, vn.RIGHT) === se.INTERIOR && _t684.setInResult(!0);
        }
      }
    }, {
      key: "visitLinkedDirectedEdges",
      value: function visitLinkedDirectedEdges(t) {
        var e = t;
        var n = t;

        do {
          u.isTrue(null !== n, "found null Directed Edge"), n.setVisited(!0), n = n.getNext();
        } while (n !== e);
      }
    }, {
      key: "buildEdgeRings",
      value: function buildEdgeRings(t) {
        var e = new x();

        for (var _n374 = t.iterator(); _n374.hasNext();) {
          var _t685 = _n374.next();

          if (_t685.isInResult() && null === _t685.getEdgeRing()) {
            var _n375 = new ei(_t685, this._geometryFactory);

            _n375.linkDirectedEdgesForMinimalEdgeRings();

            var _s248 = _n375.buildMinimalRings();

            e.addAll(_s248);
          }
        }

        return e;
      }
    }, {
      key: "hasUnvisitedShellEdge",
      value: function hasUnvisitedShellEdge(t) {
        for (var _e537 = 0; _e537 < t.size(); _e537++) {
          var _n376 = t.get(_e537);

          if (_n376.isHole()) continue;

          var _s249 = _n376.getEdges();

          var _i136 = _s249.get(0);

          if (_i136.getLabel().getLocation(0, vn.RIGHT) === se.INTERIOR) for (var _t686 = 0; _t686 < _s249.size(); _t686++) {
            if (!(_i136 = _s249.get(_t686)).isVisited()) return this._disconnectedRingcoord = _i136.getCoordinate(), !0;
          }
        }

        return !1;
      }
    }, {
      key: "isInteriorsConnected",
      value: function isInteriorsConnected() {
        var t = new x();

        this._geomGraph.computeSplitEdges(t);

        var e = new Qn(new gi());
        e.addEdges(t), this.setInteriorEdgesInResult(e), e.linkResultDirectedEdges();
        var n = this.buildEdgeRings(e.getEdgeEnds());
        return this.visitShellInteriors(this._geomGraph.getGeometry(), e), !this.hasUnvisitedShellEdge(n);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return ur;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "findDifferentPoint",
      value: function findDifferentPoint(t, e) {
        for (var _n377 = 0; _n377 < t.length; _n377++) {
          if (!t[_n377].equals(e)) return t[_n377];
        }

        return null;
      }
    }]);

    return ur;
  }();

  ur.constructor_ = function () {
    this._geometryFactory = new Wt(), this._geomGraph = null, this._disconnectedRingcoord = null;
    var t = arguments[0];
    this._geomGraph = t;
  };

  var gr =
  /*#__PURE__*/
  function () {
    function gr() {
      _classCallCheck(this, gr);

      gr.constructor_.apply(this, arguments);
    }

    _createClass(gr, [{
      key: "createEdgeEndForNext",
      value: function createEdgeEndForNext(t, e, n, s) {
        var i = n.segmentIndex + 1;
        if (i >= t.getNumPoints() && null === s) return null;
        var r = t.getCoordinate(i);
        null !== s && s.segmentIndex === n.segmentIndex && (r = s.coord);
        var o = new Wn(t, n.coord, r, new Gn(t.getLabel()));
        e.add(o);
      }
    }, {
      key: "createEdgeEndForPrev",
      value: function createEdgeEndForPrev(t, e, n, s) {
        var i = n.segmentIndex;

        if (0 === n.dist) {
          if (0 === i) return null;
          i--;
        }

        var r = t.getCoordinate(i);
        null !== s && s.segmentIndex >= i && (r = s.coord);
        var o = new Gn(t.getLabel());
        o.flip();
        var l = new Wn(t, n.coord, r, o);
        e.add(l);
      }
    }, {
      key: "computeEdgeEnds",
      value: function computeEdgeEnds() {
        if (1 === arguments.length) {
          var _t687 = arguments[0],
              _e538 = new x();

          for (var _n378 = _t687; _n378.hasNext();) {
            var _t688 = _n378.next();

            this.computeEdgeEnds(_t688, _e538);
          }

          return _e538;
        }

        if (2 === arguments.length) {
          var _t689 = arguments[0],
              _e539 = arguments[1],
              _n379 = _t689.getEdgeIntersectionList();

          _n379.addEndpoints();

          var _s250 = _n379.iterator();

          var _i137 = null,
              _r69 = null;
          if (!_s250.hasNext()) return null;

          var _o34 = _s250.next();

          do {
            _i137 = _r69, _r69 = _o34, _o34 = null, _s250.hasNext() && (_o34 = _s250.next()), null !== _r69 && (this.createEdgeEndForPrev(_t689, _e539, _r69, _i137), this.createEdgeEndForNext(_t689, _e539, _r69, _o34));
          } while (null !== _r69);
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return gr;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return gr;
  }();

  gr.constructor_ = function () {};

  var dr =
  /*#__PURE__*/
  function (_Wn2) {
    _inherits(dr, _Wn2);

    function dr() {
      var _this49;

      _classCallCheck(this, dr);

      _this49 = _possibleConstructorReturn(this, _getPrototypeOf(dr).call(this)), dr.constructor_.apply(_assertThisInitialized(_this49), arguments);
      return _this49;
    }

    _createClass(dr, [{
      key: "insert",
      value: function insert(t) {
        this._edgeEnds.add(t);
      }
    }, {
      key: "print",
      value: function print(t) {
        t.println("EdgeEndBundle--\x3e Label: " + this._label);

        for (var _e540 = this.iterator(); _e540.hasNext();) {
          _e540.next().print(t), t.println();
        }
      }
    }, {
      key: "iterator",
      value: function iterator() {
        return this._edgeEnds.iterator();
      }
    }, {
      key: "getEdgeEnds",
      value: function getEdgeEnds() {
        return this._edgeEnds;
      }
    }, {
      key: "computeLabelOn",
      value: function computeLabelOn(t, e) {
        var n = 0,
            s = !1;

        for (var _e541 = this.iterator(); _e541.hasNext();) {
          var _i138 = _e541.next().getLabel().getLocation(t);

          _i138 === se.BOUNDARY && n++, _i138 === se.INTERIOR && (s = !0);
        }

        var i = se.NONE;
        s && (i = se.INTERIOR), n > 0 && (i = Jn.determineBoundary(e, n)), this._label.setLocation(t, i);
      }
    }, {
      key: "computeLabelSide",
      value: function computeLabelSide(t, e) {
        for (var _n380 = this.iterator(); _n380.hasNext();) {
          var _s251 = _n380.next();

          if (_s251.getLabel().isArea()) {
            var _n381 = _s251.getLabel().getLocation(t, e);

            if (_n381 === se.INTERIOR) return this._label.setLocation(t, e, se.INTERIOR), null;
            _n381 === se.EXTERIOR && this._label.setLocation(t, e, se.EXTERIOR);
          }
        }
      }
    }, {
      key: "getLabel",
      value: function getLabel() {
        return this._label;
      }
    }, {
      key: "computeLabelSides",
      value: function computeLabelSides(t) {
        this.computeLabelSide(t, vn.LEFT), this.computeLabelSide(t, vn.RIGHT);
      }
    }, {
      key: "updateIM",
      value: function updateIM(t) {
        kn.updateIM(this._label, t);
      }
    }, {
      key: "computeLabel",
      value: function computeLabel(t) {
        var e = !1;

        for (var _t690 = this.iterator(); _t690.hasNext();) {
          _t690.next().getLabel().isArea() && (e = !0);
        }

        this._label = e ? new Gn(se.NONE, se.NONE, se.NONE) : new Gn(se.NONE);

        for (var _n382 = 0; _n382 < 2; _n382++) {
          this.computeLabelOn(_n382, t), e && this.computeLabelSides(_n382);
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return dr;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return dr;
  }(Wn);

  dr.constructor_ = function () {
    if (this._edgeEnds = new x(), 1 === arguments.length) {
      var _t691 = arguments[0];
      dr.constructor_.call(this, null, _t691);
    } else if (2 === arguments.length) {
      var _t692 = arguments[1];
      Wn.constructor_.call(this, _t692.getEdge(), _t692.getCoordinate(), _t692.getDirectedCoordinate(), new Gn(_t692.getLabel())), this.insert(_t692);
    }
  };

  var _r =
  /*#__PURE__*/
  function (_hi2) {
    _inherits(_r, _hi2);

    function _r() {
      var _this50;

      _classCallCheck(this, _r);

      _this50 = _possibleConstructorReturn(this, _getPrototypeOf(_r).call(this)), _r.constructor_.apply(_assertThisInitialized(_this50), arguments);
      return _this50;
    }

    _createClass(_r, [{
      key: "updateIM",
      value: function updateIM(t) {
        for (var _e542 = this.iterator(); _e542.hasNext();) {
          _e542.next().updateIM(t);
        }
      }
    }, {
      key: "insert",
      value: function insert(t) {
        var e = this._edgeMap.get(t);

        null === e ? (e = new dr(t), this.insertEdgeEnd(t, e)) : e.insert(t);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return _r;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return _r;
  }(hi);

  _r.constructor_ = function () {};

  var fr =
  /*#__PURE__*/
  function (_Xn) {
    _inherits(fr, _Xn);

    function fr() {
      var _this51;

      _classCallCheck(this, fr);

      _this51 = _possibleConstructorReturn(this, _getPrototypeOf(fr).call(this)), fr.constructor_.apply(_assertThisInitialized(_this51), arguments);
      return _this51;
    }

    _createClass(fr, [{
      key: "updateIMFromEdges",
      value: function updateIMFromEdges(t) {
        this._edges.updateIM(t);
      }
    }, {
      key: "computeIM",
      value: function computeIM(t) {
        t.setAtLeastIfValid(this._label.getLocation(0), this._label.getLocation(1), 0);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return fr;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return fr;
  }(Xn);

  fr.constructor_ = function () {
    var t = arguments[0],
        e = arguments[1];
    Xn.constructor_.call(this, t, e);
  };

  var pr =
  /*#__PURE__*/
  function (_Zn2) {
    _inherits(pr, _Zn2);

    function pr() {
      var _this52;

      _classCallCheck(this, pr);

      _this52 = _possibleConstructorReturn(this, _getPrototypeOf(pr).call(this)), pr.constructor_.apply(_assertThisInitialized(_this52), arguments);
      return _this52;
    }

    _createClass(pr, [{
      key: "createNode",
      value: function createNode(t) {
        return new fr(t, new _r());
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return pr;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return pr;
  }(Zn);

  pr.constructor_ = function () {};

  var mr =
  /*#__PURE__*/
  function () {
    function mr() {
      _classCallCheck(this, mr);

      mr.constructor_.apply(this, arguments);
    }

    _createClass(mr, [{
      key: "insertEdgeEnds",
      value: function insertEdgeEnds(t) {
        for (var _e543 = t.iterator(); _e543.hasNext();) {
          var _t693 = _e543.next();

          this._nodes.add(_t693);
        }
      }
    }, {
      key: "getNodeIterator",
      value: function getNodeIterator() {
        return this._nodes.iterator();
      }
    }, {
      key: "copyNodesAndLabels",
      value: function copyNodesAndLabels(t, e) {
        for (var _n383 = t.getNodeIterator(); _n383.hasNext();) {
          var _t694 = _n383.next();

          this._nodes.addNode(_t694.getCoordinate()).setLabel(e, _t694.getLabel().getLocation(e));
        }
      }
    }, {
      key: "build",
      value: function build(t) {
        this.computeIntersectionNodes(t, 0), this.copyNodesAndLabels(t, 0);
        var e = new gr().computeEdgeEnds(t.getEdgeIterator());
        this.insertEdgeEnds(e);
      }
    }, {
      key: "computeIntersectionNodes",
      value: function computeIntersectionNodes(t, e) {
        for (var _n384 = t.getEdgeIterator(); _n384.hasNext();) {
          var _t695 = _n384.next(),
              _s252 = _t695.getLabel().getLocation(e);

          for (var _n385 = _t695.getEdgeIntersectionList().iterator(); _n385.hasNext();) {
            var _t696 = _n385.next(),
                _i139 = this._nodes.addNode(_t696.coord);

            _s252 === se.BOUNDARY ? _i139.setLabelBoundary(e) : _i139.getLabel().isNull(e) && _i139.setLabel(e, se.INTERIOR);
          }
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return mr;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return mr;
  }();

  mr.constructor_ = function () {
    this._nodes = new Hn(new pr());
  };

  var yr =
  /*#__PURE__*/
  function () {
    function yr() {
      _classCallCheck(this, yr);

      yr.constructor_.apply(this, arguments);
    }

    _createClass(yr, [{
      key: "isNodeEdgeAreaLabelsConsistent",
      value: function isNodeEdgeAreaLabelsConsistent() {
        for (var _t697 = this._nodeGraph.getNodeIterator(); _t697.hasNext();) {
          var _e544 = _t697.next();

          if (!_e544.getEdges().isAreaLabelsConsistent(this._geomGraph)) return this._invalidPoint = _e544.getCoordinate().copy(), !1;
        }

        return !0;
      }
    }, {
      key: "getInvalidPoint",
      value: function getInvalidPoint() {
        return this._invalidPoint;
      }
    }, {
      key: "hasDuplicateRings",
      value: function hasDuplicateRings() {
        for (var _t698 = this._nodeGraph.getNodeIterator(); _t698.hasNext();) {
          for (var _e545 = _t698.next().getEdges().iterator(); _e545.hasNext();) {
            var _t699 = _e545.next();

            if (_t699.getEdgeEnds().size() > 1) return this._invalidPoint = _t699.getEdge().getCoordinate(0), !0;
          }
        }

        return !1;
      }
    }, {
      key: "isNodeConsistentArea",
      value: function isNodeConsistentArea() {
        var t = this._geomGraph.computeSelfNodes(this._li, !0, !0);

        return t.hasProperIntersection() ? (this._invalidPoint = t.getProperIntersectionPoint(), !1) : (this._nodeGraph.build(this._geomGraph), this.isNodeEdgeAreaLabelsConsistent());
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return yr;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return yr;
  }();

  yr.constructor_ = function () {
    this._li = new ee(), this._geomGraph = null, this._nodeGraph = new mr(), this._invalidPoint = null;
    var t = arguments[0];
    this._geomGraph = t;
  };

  var xr =
  /*#__PURE__*/
  function () {
    function xr() {
      _classCallCheck(this, xr);

      xr.constructor_.apply(this, arguments);
    }

    _createClass(xr, [{
      key: "buildIndex",
      value: function buildIndex() {
        this._index = new Is();

        for (var _t700 = 0; _t700 < this._rings.size(); _t700++) {
          var _e546 = this._rings.get(_t700),
              _n386 = _e546.getEnvelopeInternal();

          this._index.insert(_n386, _e546);
        }
      }
    }, {
      key: "getNestedPoint",
      value: function getNestedPoint() {
        return this._nestedPt;
      }
    }, {
      key: "isNonNested",
      value: function isNonNested() {
        this.buildIndex();

        for (var _t701 = 0; _t701 < this._rings.size(); _t701++) {
          var _e547 = this._rings.get(_t701),
              _n387 = _e547.getCoordinates(),
              _s253 = this._index.query(_e547.getEnvelopeInternal());

          for (var _t702 = 0; _t702 < _s253.size(); _t702++) {
            var _i140 = _s253.get(_t702),
                _r70 = _i140.getCoordinates();

            if (_e547 === _i140) continue;
            if (!_e547.getEnvelopeInternal().intersects(_i140.getEnvelopeInternal())) continue;

            var _o35 = Ir.findPtNotNode(_n387, _i140, this._graph);

            if (null !== _o35 && je.isInRing(_o35, _r70)) return this._nestedPt = _o35, !1;
          }
        }

        return !0;
      }
    }, {
      key: "add",
      value: function add(t) {
        this._rings.add(t), this._totalEnv.expandToInclude(t.getEnvelopeInternal());
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return xr;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return xr;
  }();

  xr.constructor_ = function () {
    this._graph = null, this._rings = new x(), this._totalEnv = new N(), this._index = null, this._nestedPt = null;
    var t = arguments[0];
    this._graph = t;
  };

  var Er =
  /*#__PURE__*/
  function () {
    function Er() {
      _classCallCheck(this, Er);

      Er.constructor_.apply(this, arguments);
    }

    _createClass(Er, [{
      key: "getErrorType",
      value: function getErrorType() {
        return this._errorType;
      }
    }, {
      key: "getMessage",
      value: function getMessage() {
        return Er.errMsg[this._errorType];
      }
    }, {
      key: "getCoordinate",
      value: function getCoordinate() {
        return this._pt;
      }
    }, {
      key: "toString",
      value: function toString() {
        var t = "";
        return null !== this._pt && (t = " at or near point " + this._pt), this.getMessage() + t;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Er;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Er;
  }();

  Er.constructor_ = function () {
    if (this._errorType = null, this._pt = null, 1 === arguments.length) {
      var _t703 = arguments[0];
      Er.constructor_.call(this, _t703, null);
    } else if (2 === arguments.length) {
      var _t704 = arguments[0],
          _e548 = arguments[1];
      this._errorType = _t704, null !== _e548 && (this._pt = _e548.copy());
    }
  }, Er.ERROR = 0, Er.REPEATED_POINT = 1, Er.HOLE_OUTSIDE_SHELL = 2, Er.NESTED_HOLES = 3, Er.DISCONNECTED_INTERIOR = 4, Er.SELF_INTERSECTION = 5, Er.RING_SELF_INTERSECTION = 6, Er.NESTED_SHELLS = 7, Er.DUPLICATE_RINGS = 8, Er.TOO_FEW_POINTS = 9, Er.INVALID_COORDINATE = 10, Er.RING_NOT_CLOSED = 11, Er.errMsg = ["Topology Validation Error", "Repeated Point", "Hole lies outside shell", "Holes are nested", "Interior is disconnected", "Self-intersection", "Ring Self-intersection", "Nested shells", "Duplicate Rings", "Too few distinct points in geometry component", "Invalid Coordinate", "Ring is not closed"];

  var Ir =
  /*#__PURE__*/
  function () {
    function Ir() {
      _classCallCheck(this, Ir);

      Ir.constructor_.apply(this, arguments);
    }

    _createClass(Ir, [{
      key: "checkInvalidCoordinates",
      value: function checkInvalidCoordinates() {
        if (arguments[0] instanceof Array) {
          var _t705 = arguments[0];

          for (var _e549 = 0; _e549 < _t705.length; _e549++) {
            if (!Ir.isValid(_t705[_e549])) return this._validErr = new Er(Er.INVALID_COORDINATE, _t705[_e549]), null;
          }
        } else if (arguments[0] instanceof Mt) {
          var _t706 = arguments[0];
          if (this.checkInvalidCoordinates(_t706.getExteriorRing().getCoordinates()), null !== this._validErr) return null;

          for (var _e550 = 0; _e550 < _t706.getNumInteriorRing(); _e550++) {
            if (this.checkInvalidCoordinates(_t706.getInteriorRingN(_e550).getCoordinates()), null !== this._validErr) return null;
          }
        }
      }
    }, {
      key: "checkHolesNotNested",
      value: function checkHolesNotNested(t, e) {
        var n = new xr(e);

        for (var _e551 = 0; _e551 < t.getNumInteriorRing(); _e551++) {
          var _s254 = t.getInteriorRingN(_e551);

          n.add(_s254);
        }

        n.isNonNested() || (this._validErr = new Er(Er.NESTED_HOLES, n.getNestedPoint()));
      }
    }, {
      key: "checkConsistentArea",
      value: function checkConsistentArea(t) {
        var e = new yr(t);
        if (!e.isNodeConsistentArea()) return this._validErr = new Er(Er.SELF_INTERSECTION, e.getInvalidPoint()), null;
        e.hasDuplicateRings() && (this._validErr = new Er(Er.DUPLICATE_RINGS, e.getInvalidPoint()));
      }
    }, {
      key: "isValid",
      value: function isValid() {
        return this.checkValid(this._parentGeometry), null === this._validErr;
      }
    }, {
      key: "checkShellInsideHole",
      value: function checkShellInsideHole(t, e, n) {
        var s = t.getCoordinates(),
            i = e.getCoordinates(),
            r = Ir.findPtNotNode(s, e, n);

        if (null !== r) {
          if (!je.isInRing(r, i)) return r;
        }

        var o = Ir.findPtNotNode(i, t, n);

        if (null !== o) {
          return je.isInRing(o, s) ? o : null;
        }

        return u.shouldNeverReachHere("points in shell and hole appear to be equal"), null;
      }
    }, {
      key: "checkNoSelfIntersectingRings",
      value: function checkNoSelfIntersectingRings(t) {
        for (var _e552 = t.getEdgeIterator(); _e552.hasNext();) {
          var _t707 = _e552.next();

          if (this.checkNoSelfIntersectingRing(_t707.getEdgeIntersectionList()), null !== this._validErr) return null;
        }
      }
    }, {
      key: "checkConnectedInteriors",
      value: function checkConnectedInteriors(t) {
        var e = new ur(t);
        e.isInteriorsConnected() || (this._validErr = new Er(Er.DISCONNECTED_INTERIOR, e.getCoordinate()));
      }
    }, {
      key: "checkNoSelfIntersectingRing",
      value: function checkNoSelfIntersectingRing(t) {
        var e = new ct();
        var n = !0;

        for (var _s255 = t.iterator(); _s255.hasNext();) {
          var _t708 = _s255.next();

          if (n) n = !1;else {
            if (e.contains(_t708.coord)) return this._validErr = new Er(Er.RING_SELF_INTERSECTION, _t708.coord), null;
            e.add(_t708.coord);
          }
        }
      }
    }, {
      key: "checkHolesInShell",
      value: function checkHolesInShell(t, e) {
        var n = t.getExteriorRing(),
            s = new Xe(n);

        for (var _i141 = 0; _i141 < t.getNumInteriorRing(); _i141++) {
          var _r71 = t.getInteriorRingN(_i141),
              _o36 = Ir.findPtNotNode(_r71.getCoordinates(), n, e);

          if (null === _o36) return null;
          if (se.EXTERIOR === s.locate(_o36)) return this._validErr = new Er(Er.HOLE_OUTSIDE_SHELL, _o36), null;
        }
      }
    }, {
      key: "checkTooFewPoints",
      value: function checkTooFewPoints(t) {
        if (t.hasTooFewPoints()) return this._validErr = new Er(Er.TOO_FEW_POINTS, t.getInvalidPoint()), null;
      }
    }, {
      key: "getValidationError",
      value: function getValidationError() {
        return this.checkValid(this._parentGeometry), this._validErr;
      }
    }, {
      key: "checkValid",
      value: function checkValid() {
        if (arguments[0] instanceof vt) {
          var _t709 = arguments[0];
          this.checkInvalidCoordinates(_t709.getCoordinates());
        } else if (arguments[0] instanceof At) {
          var _t710 = arguments[0];
          this.checkInvalidCoordinates(_t710.getCoordinates());
        } else if (arguments[0] instanceof Dt) {
          var _t711 = arguments[0];
          if (this.checkInvalidCoordinates(_t711.getCoordinates()), null !== this._validErr) return null;
          if (this.checkClosedRing(_t711), null !== this._validErr) return null;

          var _e553 = new Jn(0, _t711);

          if (this.checkTooFewPoints(_e553), null !== this._validErr) return null;

          var _n388 = new ee();

          _e553.computeSelfNodes(_n388, !0, !0), this.checkNoSelfIntersectingRings(_e553);
        } else if (arguments[0] instanceof Rt) {
          var _t712 = arguments[0];
          if (this.checkInvalidCoordinates(_t712.getCoordinates()), null !== this._validErr) return null;

          var _e554 = new Jn(0, _t712);

          this.checkTooFewPoints(_e554);
        } else if (arguments[0] instanceof Mt) {
          var _t713 = arguments[0];
          if (this.checkInvalidCoordinates(_t713), null !== this._validErr) return null;
          if (this.checkClosedRings(_t713), null !== this._validErr) return null;

          var _e555 = new Jn(0, _t713);

          if (this.checkTooFewPoints(_e555), null !== this._validErr) return null;
          if (this.checkConsistentArea(_e555), null !== this._validErr) return null;
          if (!this._isSelfTouchingRingFormingHoleValid && (this.checkNoSelfIntersectingRings(_e555), null !== this._validErr)) return null;
          if (this.checkHolesInShell(_t713, _e555), null !== this._validErr) return null;
          if (this.checkHolesNotNested(_t713, _e555), null !== this._validErr) return null;
          this.checkConnectedInteriors(_e555);
        } else if (arguments[0] instanceof Ft) {
          var _t714 = arguments[0];

          for (var _e557 = 0; _e557 < _t714.getNumGeometries(); _e557++) {
            var _n389 = _t714.getGeometryN(_e557);

            if (this.checkInvalidCoordinates(_n389), null !== this._validErr) return null;
            if (this.checkClosedRings(_n389), null !== this._validErr) return null;
          }

          var _e556 = new Jn(0, _t714);

          if (this.checkTooFewPoints(_e556), null !== this._validErr) return null;
          if (this.checkConsistentArea(_e556), null !== this._validErr) return null;
          if (!this._isSelfTouchingRingFormingHoleValid && (this.checkNoSelfIntersectingRings(_e556), null !== this._validErr)) return null;

          for (var _n390 = 0; _n390 < _t714.getNumGeometries(); _n390++) {
            var _s256 = _t714.getGeometryN(_n390);

            if (this.checkHolesInShell(_s256, _e556), null !== this._validErr) return null;
          }

          for (var _n391 = 0; _n391 < _t714.getNumGeometries(); _n391++) {
            var _s257 = _t714.getGeometryN(_n391);

            if (this.checkHolesNotNested(_s257, _e556), null !== this._validErr) return null;
          }

          if (this.checkShellsNotNested(_t714, _e556), null !== this._validErr) return null;
          this.checkConnectedInteriors(_e556);
        } else if (arguments[0] instanceof ft) {
          var _t715 = arguments[0];

          for (var _e558 = 0; _e558 < _t715.getNumGeometries(); _e558++) {
            var _n392 = _t715.getGeometryN(_e558);

            if (this.checkValid(_n392), null !== this._validErr) return null;
          }
        } else if (arguments[0] instanceof q) {
          var _t716 = arguments[0];
          if (this._validErr = null, _t716.isEmpty()) return null;
          if (_t716 instanceof vt) this.checkValid(_t716);else if (_t716 instanceof At) this.checkValid(_t716);else if (_t716 instanceof Dt) this.checkValid(_t716);else if (_t716 instanceof Rt) this.checkValid(_t716);else if (_t716 instanceof Mt) this.checkValid(_t716);else if (_t716 instanceof Ft) this.checkValid(_t716);else {
            if (!(_t716 instanceof ft)) throw new UnsupportedOperationException(_t716.getClass().getName());
            this.checkValid(_t716);
          }
        }
      }
    }, {
      key: "setSelfTouchingRingFormingHoleValid",
      value: function setSelfTouchingRingFormingHoleValid(t) {
        this._isSelfTouchingRingFormingHoleValid = t;
      }
    }, {
      key: "checkShellNotNested",
      value: function checkShellNotNested(t, e, n) {
        var s = t.getCoordinates(),
            i = e.getExteriorRing(),
            r = i.getCoordinates(),
            o = Ir.findPtNotNode(s, i, n);
        if (null === o) return null;
        if (!je.isInRing(o, r)) return null;
        if (e.getNumInteriorRing() <= 0) return this._validErr = new Er(Er.NESTED_SHELLS, o), null;
        var l = null;

        for (var _s258 = 0; _s258 < e.getNumInteriorRing(); _s258++) {
          var _i142 = e.getInteriorRingN(_s258);

          if (null === (l = this.checkShellInsideHole(t, _i142, n))) return null;
        }

        this._validErr = new Er(Er.NESTED_SHELLS, l);
      }
    }, {
      key: "checkClosedRings",
      value: function checkClosedRings(t) {
        if (this.checkClosedRing(t.getExteriorRing()), null !== this._validErr) return null;

        for (var _e559 = 0; _e559 < t.getNumInteriorRing(); _e559++) {
          if (this.checkClosedRing(t.getInteriorRingN(_e559)), null !== this._validErr) return null;
        }
      }
    }, {
      key: "checkClosedRing",
      value: function checkClosedRing(t) {
        if (!t.isClosed()) {
          var _e560 = null;
          t.getNumPoints() >= 1 && (_e560 = t.getCoordinateN(0)), this._validErr = new Er(Er.RING_NOT_CLOSED, _e560);
        }
      }
    }, {
      key: "checkShellsNotNested",
      value: function checkShellsNotNested(t, e) {
        for (var _n393 = 0; _n393 < t.getNumGeometries(); _n393++) {
          var _s259 = t.getGeometryN(_n393).getExteriorRing();

          for (var _i143 = 0; _i143 < t.getNumGeometries(); _i143++) {
            if (_n393 === _i143) continue;

            var _r72 = t.getGeometryN(_i143);

            if (this.checkShellNotNested(_s259, _r72, e), null !== this._validErr) return null;
          }
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Ir;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "findPtNotNode",
      value: function findPtNotNode(t, e, n) {
        var s = n.findEdge(e).getEdgeIntersectionList();

        for (var _e561 = 0; _e561 < t.length; _e561++) {
          var _n394 = t[_e561];
          if (!s.isIntersection(_n394)) return _n394;
        }

        return null;
      }
    }, {
      key: "isValid",
      value: function isValid() {
        if (arguments[0] instanceof q) {
          var _t717 = arguments[0];
          return new Ir(_t717).isValid();
        }

        if (arguments[0] instanceof g) {
          var _t718 = arguments[0];
          return !i.isNaN(_t718.x) && !i.isInfinite(_t718.x) && !i.isNaN(_t718.y) && !i.isInfinite(_t718.y);
        }
      }
    }]);

    return Ir;
  }();

  Ir.constructor_ = function () {
    this._parentGeometry = null, this._isSelfTouchingRingFormingHoleValid = !1, this._validErr = null;
    var t = arguments[0];
    this._parentGeometry = t;
  };

  var Nr =
  /*#__PURE__*/
  function () {
    function Nr() {
      _classCallCheck(this, Nr);

      Nr.constructor_.apply(this, arguments);
    }

    _createClass(Nr, [{
      key: "isIncluded",
      value: function isIncluded() {
        return this._isIncluded;
      }
    }, {
      key: "getCoordinates",
      value: function getCoordinates() {
        if (null === this._ringPts) {
          var _t719 = new I();

          for (var _e562 = this._deList.iterator(); _e562.hasNext();) {
            var _n395 = _e562.next(),
                _s260 = _n395.getEdge();

            Nr.addEdge(_s260.getLine().getCoordinates(), _n395.getEdgeDirection(), _t719);
          }

          this._ringPts = _t719.toCoordinateArray();
        }

        return this._ringPts;
      }
    }, {
      key: "isIncludedSet",
      value: function isIncludedSet() {
        return this._isIncludedSet;
      }
    }, {
      key: "isValid",
      value: function isValid() {
        return this.getCoordinates(), !(this._ringPts.length <= 3) && (this.getRing(), Ir.isValid(this._ring));
      }
    }, {
      key: "build",
      value: function build(t) {
        var e = t;

        do {
          this.add(e), e.setRing(this), e = e.getNext(), u.isTrue(null !== e, "found null DE in ring"), u.isTrue(e === t || !e.isInRing(), "found DE already in ring");
        } while (e !== t);
      }
    }, {
      key: "isOuterHole",
      value: function isOuterHole() {
        return !!this._isHole && !this.hasShell();
      }
    }, {
      key: "getPolygon",
      value: function getPolygon() {
        var t = null;

        if (null !== this._holes) {
          t = new Array(this._holes.size()).fill(null);

          for (var _e563 = 0; _e563 < this._holes.size(); _e563++) {
            t[_e563] = this._holes.get(_e563);
          }
        }

        return this._factory.createPolygon(this._ring, t);
      }
    }, {
      key: "isHole",
      value: function isHole() {
        return this._isHole;
      }
    }, {
      key: "isProcessed",
      value: function isProcessed() {
        return this._isProcessed;
      }
    }, {
      key: "addHole",
      value: function addHole() {
        if (arguments[0] instanceof Dt) {
          var _t720 = arguments[0];
          null === this._holes && (this._holes = new x()), this._holes.add(_t720);
        } else if (arguments[0] instanceof Nr) {
          var _t721 = arguments[0];

          _t721.setShell(this);

          var _e564 = _t721.getRing();

          null === this._holes && (this._holes = new x()), this._holes.add(_e564);
        }
      }
    }, {
      key: "setIncluded",
      value: function setIncluded(t) {
        this._isIncluded = t, this._isIncludedSet = !0;
      }
    }, {
      key: "getOuterHole",
      value: function getOuterHole() {
        if (this.isHole()) return null;

        for (var _t722 = 0; _t722 < this._deList.size(); _t722++) {
          var _e565 = this._deList.get(_t722).getSym().getRing();

          if (_e565.isOuterHole()) return _e565;
        }

        return null;
      }
    }, {
      key: "computeHole",
      value: function computeHole() {
        var t = this.getRing();
        this._isHole = v.isCCW(t.getCoordinates());
      }
    }, {
      key: "hasShell",
      value: function hasShell() {
        return null !== this._shell;
      }
    }, {
      key: "isOuterShell",
      value: function isOuterShell() {
        return null !== this.getOuterHole();
      }
    }, {
      key: "getLineString",
      value: function getLineString() {
        return this.getCoordinates(), this._factory.createLineString(this._ringPts);
      }
    }, {
      key: "toString",
      value: function toString() {
        return $t.toLineString(new Yt(this.getCoordinates()));
      }
    }, {
      key: "getShell",
      value: function getShell() {
        return this.isHole() ? this._shell : this;
      }
    }, {
      key: "add",
      value: function add(t) {
        this._deList.add(t);
      }
    }, {
      key: "getRing",
      value: function getRing() {
        if (null !== this._ring) return this._ring;
        this.getCoordinates(), this._ringPts.length < 3 && O.out.println(this._ringPts);

        try {
          this._ring = this._factory.createLinearRing(this._ringPts);
        } catch (t) {
          if (!(t instanceof C)) throw t;
          O.out.println(this._ringPts);
        }

        return this._ring;
      }
    }, {
      key: "updateIncluded",
      value: function updateIncluded() {
        if (this.isHole()) return null;

        for (var _t723 = 0; _t723 < this._deList.size(); _t723++) {
          var _e566 = this._deList.get(_t723).getSym().getRing().getShell();

          if (null !== _e566 && _e566.isIncludedSet()) return this.setIncluded(!_e566.isIncluded()), null;
        }
      }
    }, {
      key: "setShell",
      value: function setShell(t) {
        this._shell = t;
      }
    }, {
      key: "setProcessed",
      value: function setProcessed(t) {
        this._isProcessed = t;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Nr;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "findDirEdgesInRing",
      value: function findDirEdgesInRing(t) {
        var e = t;
        var n = new x();

        do {
          n.add(e), e = e.getNext(), u.isTrue(null !== e, "found null DE in ring"), u.isTrue(e === t || !e.isInRing(), "found DE already in ring");
        } while (e !== t);

        return n;
      }
    }, {
      key: "addEdge",
      value: function addEdge(t, e, n) {
        if (e) for (var _e567 = 0; _e567 < t.length; _e567++) {
          n.add(t[_e567], !1);
        } else for (var _e568 = t.length - 1; _e568 >= 0; _e568--) {
          n.add(t[_e568], !1);
        }
      }
    }, {
      key: "findEdgeRingContaining",
      value: function findEdgeRingContaining(t, e) {
        var n = t.getRing(),
            s = n.getEnvelopeInternal();
        var i = n.getCoordinateN(0),
            r = null,
            o = null;

        for (var _t724 = e.iterator(); _t724.hasNext();) {
          var _e569 = _t724.next(),
              _l29 = _e569.getRing(),
              _a17 = _l29.getEnvelopeInternal();

          if (_a17.equals(s)) continue;
          if (!_a17.contains(s)) continue;
          i = X.ptNotInList(n.getCoordinates(), _l29.getCoordinates());

          var _c14 = !1;

          je.isInRing(i, _l29.getCoordinates()) && (_c14 = !0), _c14 && (null === r || o.contains(_a17)) && (o = (r = _e569).getRing().getEnvelopeInternal());
        }

        return r;
      }
    }]);

    return Nr;
  }();

  var Cr =
  /*#__PURE__*/
  function () {
    function Cr() {
      _classCallCheck(this, Cr);

      Cr.constructor_.apply(this, arguments);
    }

    _createClass(Cr, [{
      key: "compare",
      value: function compare(t, e) {
        var n = e;
        return t.getRing().getEnvelope().compareTo(n.getRing().getEnvelope());
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Cr;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [l];
      }
    }]);

    return Cr;
  }();

  Cr.constructor_ = function () {}, Nr.EnvelopeComparator = Cr, Nr.constructor_ = function () {
    this._factory = null, this._deList = new x(), this._lowestEdge = null, this._ring = null, this._ringPts = null, this._holes = null, this._shell = null, this._isHole = null, this._isProcessed = !1, this._isIncludedSet = !1, this._isIncluded = !1;
    var t = arguments[0];
    this._factory = t;
  };

  var Sr =
  /*#__PURE__*/
  function (_Vi2) {
    _inherits(Sr, _Vi2);

    function Sr() {
      var _this53;

      _classCallCheck(this, Sr);

      _this53 = _possibleConstructorReturn(this, _getPrototypeOf(Sr).call(this)), Sr.constructor_.apply(_assertThisInitialized(_this53), arguments);
      return _this53;
    }

    _createClass(Sr, [{
      key: "findEdgeRing",
      value: function findEdgeRing(t) {
        var e = new Nr(this._factory);
        return e.build(t), e;
      }
    }, {
      key: "computeDepthParity",
      value: function computeDepthParity() {
        if (0 === arguments.length) for (;;) {
          return null;
        }
      }
    }, {
      key: "computeNextCWEdges",
      value: function computeNextCWEdges() {
        for (var _t725 = this.nodeIterator(); _t725.hasNext();) {
          var _e570 = _t725.next();

          Sr.computeNextCWEdges(_e570);
        }
      }
    }, {
      key: "addEdge",
      value: function addEdge(t) {
        if (t.isEmpty()) return null;
        var e = X.removeRepeatedPoints(t.getCoordinates());
        if (e.length < 2) return null;
        var n = e[0],
            s = e[e.length - 1],
            i = this.getNode(n),
            r = this.getNode(s),
            o = new cr(i, r, e[1], !0),
            l = new cr(r, i, e[e.length - 2], !1),
            a = new hr(t);
        a.setDirectedEdges(o, l), this.add(a);
      }
    }, {
      key: "deleteCutEdges",
      value: function deleteCutEdges() {
        this.computeNextCWEdges(), Sr.findLabeledEdgeRings(this._dirEdges);
        var t = new x();

        for (var _e571 = this._dirEdges.iterator(); _e571.hasNext();) {
          var _n396 = _e571.next();

          if (_n396.isMarked()) continue;

          var _s261 = _n396.getSym();

          if (_n396.getLabel() === _s261.getLabel()) {
            _n396.setMarked(!0), _s261.setMarked(!0);

            var _e572 = _n396.getEdge();

            t.add(_e572.getLine());
          }
        }

        return t;
      }
    }, {
      key: "getEdgeRings",
      value: function getEdgeRings() {
        this.computeNextCWEdges(), Sr.label(this._dirEdges, -1);
        var t = Sr.findLabeledEdgeRings(this._dirEdges);
        this.convertMaximalToMinimalEdgeRings(t);
        var e = new x();

        for (var _t726 = this._dirEdges.iterator(); _t726.hasNext();) {
          var _n397 = _t726.next();

          if (_n397.isMarked()) continue;
          if (_n397.isInRing()) continue;

          var _s262 = this.findEdgeRing(_n397);

          e.add(_s262);
        }

        return e;
      }
    }, {
      key: "getNode",
      value: function getNode(t) {
        var e = this.findNode(t);
        return null === e && (e = new Gi(t), this.add(e)), e;
      }
    }, {
      key: "convertMaximalToMinimalEdgeRings",
      value: function convertMaximalToMinimalEdgeRings(t) {
        for (var _e573 = t.iterator(); _e573.hasNext();) {
          var _t727 = _e573.next(),
              _n398 = _t727.getLabel(),
              _s263 = Sr.findIntersectionNodes(_t727, _n398);

          if (null !== _s263) for (var _t728 = _s263.iterator(); _t728.hasNext();) {
            var _e574 = _t728.next();

            Sr.computeNextCCWEdges(_e574, _n398);
          }
        }
      }
    }, {
      key: "deleteDangles",
      value: function deleteDangles() {
        var t = this.findNodesOfDegree(1),
            e = new J(),
            n = new ln();

        for (var _e575 = t.iterator(); _e575.hasNext();) {
          n.push(_e575.next());
        }

        for (; !n.isEmpty();) {
          var _t729 = n.pop();

          Sr.deleteAllEdges(_t729);

          for (var _s264 = _t729.getOutEdges().getEdges().iterator(); _s264.hasNext();) {
            var _t730 = _s264.next();

            _t730.setMarked(!0);

            var _i144 = _t730.getSym();

            null !== _i144 && _i144.setMarked(!0);

            var _r73 = _t730.getEdge();

            e.add(_r73.getLine());

            var _o37 = _t730.getToNode();

            1 === Sr.getDegreeNonDeleted(_o37) && n.push(_o37);
          }
        }

        return e;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Sr;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "findLabeledEdgeRings",
      value: function findLabeledEdgeRings(t) {
        var e = new x();
        var n = 1;

        for (var _s265 = t.iterator(); _s265.hasNext();) {
          var _t731 = _s265.next();

          if (_t731.isMarked()) continue;
          if (_t731.getLabel() >= 0) continue;
          e.add(_t731);

          var _i145 = Nr.findDirEdgesInRing(_t731);

          Sr.label(_i145, n), n++;
        }

        return e;
      }
    }, {
      key: "getDegreeNonDeleted",
      value: function getDegreeNonDeleted(t) {
        var e = 0;

        for (var _n399 = t.getOutEdges().getEdges().iterator(); _n399.hasNext();) {
          _n399.next().isMarked() || e++;
        }

        return e;
      }
    }, {
      key: "deleteAllEdges",
      value: function deleteAllEdges(t) {
        for (var _e576 = t.getOutEdges().getEdges().iterator(); _e576.hasNext();) {
          var _t732 = _e576.next();

          _t732.setMarked(!0);

          var _n400 = _t732.getSym();

          null !== _n400 && _n400.setMarked(!0);
        }
      }
    }, {
      key: "label",
      value: function label(t, e) {
        for (var _n401 = t.iterator(); _n401.hasNext();) {
          _n401.next().setLabel(e);
        }
      }
    }, {
      key: "computeNextCWEdges",
      value: function computeNextCWEdges(t) {
        var e = null,
            n = null;

        for (var _s266 = t.getOutEdges().getEdges().iterator(); _s266.hasNext();) {
          var _t733 = _s266.next();

          if (!_t733.isMarked()) {
            if (null === e && (e = _t733), null !== n) {
              n.getSym().setNext(_t733);
            }

            n = _t733;
          }
        }

        if (null !== n) {
          n.getSym().setNext(e);
        }
      }
    }, {
      key: "computeNextCCWEdges",
      value: function computeNextCCWEdges(t, e) {
        var n = null,
            s = null;
        var i = t.getOutEdges().getEdges();

        for (var _t734 = i.size() - 1; _t734 >= 0; _t734--) {
          var _r74 = i.get(_t734),
              _o38 = _r74.getSym();

          var _l30 = null;
          _r74.getLabel() === e && (_l30 = _r74);
          var _a18 = null;
          _o38.getLabel() === e && (_a18 = _o38), null === _l30 && null === _a18 || (null !== _a18 && (s = _a18), null !== _l30 && (null !== s && (s.setNext(_l30), s = null), null === n && (n = _l30)));
        }

        null !== s && (u.isTrue(null !== n), s.setNext(n));
      }
    }, {
      key: "getDegree",
      value: function getDegree(t, e) {
        var n = 0;

        for (var _s267 = t.getOutEdges().getEdges().iterator(); _s267.hasNext();) {
          _s267.next().getLabel() === e && n++;
        }

        return n;
      }
    }, {
      key: "findIntersectionNodes",
      value: function findIntersectionNodes(t, e) {
        var n = t,
            s = null;

        do {
          var _i146 = n.getFromNode();

          Sr.getDegree(_i146, e) > 1 && (null === s && (s = new x()), s.add(_i146)), n = n.getNext(), u.isTrue(null !== n, "found null DE in ring"), u.isTrue(n === t || !n.isInRing(), "found DE already in ring");
        } while (n !== t);

        return s;
      }
    }]);

    return Sr;
  }(Vi);

  Sr.constructor_ = function () {
    this._factory = null;
    var t = arguments[0];
    this._factory = t;
  };

  var wr =
  /*#__PURE__*/
  function () {
    function wr() {
      _classCallCheck(this, wr);

      wr.constructor_.apply(this, arguments);
    }

    _createClass(wr, [{
      key: "getGeometry",
      value: function getGeometry() {
        return null === this._geomFactory && (this._geomFactory = new Wt()), this.polygonize(), this._extractOnlyPolygonal ? this._geomFactory.buildGeometry(this._polyList) : this._geomFactory.createGeometryCollection(Wt.toGeometryArray(this._polyList));
      }
    }, {
      key: "getInvalidRingLines",
      value: function getInvalidRingLines() {
        return this.polygonize(), this._invalidRingLines;
      }
    }, {
      key: "findValidRings",
      value: function findValidRings(t, e, n) {
        for (var _s268 = t.iterator(); _s268.hasNext();) {
          var _t735 = _s268.next();

          _t735.isValid() ? e.add(_t735) : n.add(_t735.getLineString());
        }
      }
    }, {
      key: "polygonize",
      value: function polygonize() {
        if (null !== this._polyList) return null;
        if (this._polyList = new x(), null === this._graph) return null;
        this._dangles = this._graph.deleteDangles(), this._cutEdges = this._graph.deleteCutEdges();

        var t = this._graph.getEdgeRings();

        var e = new x();
        this._invalidRingLines = new x(), this._isCheckingRingsValid ? this.findValidRings(t, e, this._invalidRingLines) : e = t, this.findShellsAndHoles(e), wr.assignHolesToShells(this._holeList, this._shellList), Ie.sort(this._shellList, new Nr.EnvelopeComparator());
        var n = !0;
        this._extractOnlyPolygonal && (wr.findDisjointShells(this._shellList), n = !1), this._polyList = wr.extractPolygons(this._shellList, n);
      }
    }, {
      key: "getDangles",
      value: function getDangles() {
        return this.polygonize(), this._dangles;
      }
    }, {
      key: "getCutEdges",
      value: function getCutEdges() {
        return this.polygonize(), this._cutEdges;
      }
    }, {
      key: "getPolygons",
      value: function getPolygons() {
        return this.polygonize(), this._polyList;
      }
    }, {
      key: "add",
      value: function add() {
        if (_(arguments[0], f)) {
          for (var _t736 = arguments[0].iterator(); _t736.hasNext();) {
            var _e577 = _t736.next();

            this.add(_e577);
          }
        } else if (arguments[0] instanceof Rt) {
          var _t737 = arguments[0];
          this._geomFactory = _t737.getFactory(), null === this._graph && (this._graph = new Sr(this._geomFactory)), this._graph.addEdge(_t737);
        } else if (arguments[0] instanceof q) {
          arguments[0].apply(this._lineStringAdder);
        }
      }
    }, {
      key: "setCheckRingsValid",
      value: function setCheckRingsValid(t) {
        this._isCheckingRingsValid = t;
      }
    }, {
      key: "findShellsAndHoles",
      value: function findShellsAndHoles(t) {
        this._holeList = new x(), this._shellList = new x();

        for (var _e578 = t.iterator(); _e578.hasNext();) {
          var _t738 = _e578.next();

          _t738.computeHole(), _t738.isHole() ? this._holeList.add(_t738) : this._shellList.add(_t738);
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return wr;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "findOuterShells",
      value: function findOuterShells(t) {
        for (var _e579 = t.iterator(); _e579.hasNext();) {
          var _t739 = _e579.next(),
              _n402 = _t739.getOuterHole();

          null === _n402 || _n402.isProcessed() || (_t739.setIncluded(!0), _n402.setProcessed(!0));
        }
      }
    }, {
      key: "extractPolygons",
      value: function extractPolygons(t, e) {
        var n = new x();

        for (var _s269 = t.iterator(); _s269.hasNext();) {
          var _t740 = _s269.next();

          (e || _t740.isIncluded()) && n.add(_t740.getPolygon());
        }

        return n;
      }
    }, {
      key: "assignHolesToShells",
      value: function assignHolesToShells(t, e) {
        for (var _n403 = t.iterator(); _n403.hasNext();) {
          var _t741 = _n403.next();

          wr.assignHoleToShell(_t741, e);
        }
      }
    }, {
      key: "assignHoleToShell",
      value: function assignHoleToShell(t, e) {
        var n = Nr.findEdgeRingContaining(t, e);
        null !== n && n.addHole(t);
      }
    }, {
      key: "findDisjointShells",
      value: function findDisjointShells(t) {
        wr.findOuterShells(t);
        var e = null;

        do {
          e = !1;

          for (var _n404 = t.iterator(); _n404.hasNext();) {
            var _t742 = _n404.next();

            _t742.isIncludedSet() || (_t742.updateIncluded(), _t742.isIncludedSet() || (e = !0));
          }
        } while (e);
      }
    }]);

    return wr;
  }();

  var Lr =
  /*#__PURE__*/
  function () {
    function Lr() {
      _classCallCheck(this, Lr);

      Lr.constructor_.apply(this, arguments);
    }

    _createClass(Lr, [{
      key: "filter",
      value: function filter(t) {
        t instanceof Rt && this.p.add(t);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Lr;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [G];
      }
    }]);

    return Lr;
  }();

  Lr.constructor_ = function () {
    this.p = null;
    var t = arguments[0];
    this.p = t;
  }, wr.LineStringAdder = Lr, wr.constructor_ = function () {
    if (this._lineStringAdder = new Lr(this), this._graph = null, this._dangles = new x(), this._cutEdges = new x(), this._invalidRingLines = new x(), this._holeList = null, this._shellList = null, this._polyList = null, this._isCheckingRingsValid = !0, this._extractOnlyPolygonal = null, this._geomFactory = null, 0 === arguments.length) wr.constructor_.call(this, !1);else if (1 === arguments.length) {
      var _t743 = arguments[0];
      this._extractOnlyPolygonal = _t743;
    }
  };
  var Tr = Object.freeze({
    Polygonizer: wr
  });

  var Rr =
  /*#__PURE__*/
  function () {
    function Rr() {
      _classCallCheck(this, Rr);

      Rr.constructor_.apply(this, arguments);
    }

    _createClass(Rr, [{
      key: "insertEdgeEnds",
      value: function insertEdgeEnds(t) {
        for (var _e580 = t.iterator(); _e580.hasNext();) {
          var _t744 = _e580.next();

          this._nodes.add(_t744);
        }
      }
    }, {
      key: "computeProperIntersectionIM",
      value: function computeProperIntersectionIM(t, e) {
        var n = this._arg[0].getGeometry().getDimension(),
            s = this._arg[1].getGeometry().getDimension(),
            i = t.hasProperIntersection(),
            r = t.hasProperInteriorIntersection();

        2 === n && 2 === s ? i && e.setAtLeast("212101212") : 2 === n && 1 === s ? (i && e.setAtLeast("FFF0FFFF2"), r && e.setAtLeast("1FFFFF1FF")) : 1 === n && 2 === s ? (i && e.setAtLeast("F0FFFFFF2"), r && e.setAtLeast("1F1FFFFFF")) : 1 === n && 1 === s && r && e.setAtLeast("0FFFFFFFF");
      }
    }, {
      key: "labelIsolatedEdges",
      value: function labelIsolatedEdges(t, e) {
        for (var _n405 = this._arg[t].getEdgeIterator(); _n405.hasNext();) {
          var _t745 = _n405.next();

          _t745.isIsolated() && (this.labelIsolatedEdge(_t745, e, this._arg[e].getGeometry()), this._isolatedEdges.add(_t745));
        }
      }
    }, {
      key: "labelIsolatedEdge",
      value: function labelIsolatedEdge(t, e, n) {
        if (n.getDimension() > 0) {
          var _s270 = this._ptLocator.locate(t.getCoordinate(), n);

          t.getLabel().setAllLocations(e, _s270);
        } else t.getLabel().setAllLocations(e, se.EXTERIOR);
      }
    }, {
      key: "computeIM",
      value: function computeIM() {
        var t = new ie();
        if (t.set(se.EXTERIOR, se.EXTERIOR, 2), !this._arg[0].getGeometry().getEnvelopeInternal().intersects(this._arg[1].getGeometry().getEnvelopeInternal())) return this.computeDisjointIM(t), t;
        this._arg[0].computeSelfNodes(this._li, !1), this._arg[1].computeSelfNodes(this._li, !1);

        var e = this._arg[0].computeEdgeIntersections(this._arg[1], this._li, !1);

        this.computeIntersectionNodes(0), this.computeIntersectionNodes(1), this.copyNodesAndLabels(0), this.copyNodesAndLabels(1), this.labelIsolatedNodes(), this.computeProperIntersectionIM(e, t);
        var n = new gr(),
            s = n.computeEdgeEnds(this._arg[0].getEdgeIterator());
        this.insertEdgeEnds(s);
        var i = n.computeEdgeEnds(this._arg[1].getEdgeIterator());
        return this.insertEdgeEnds(i), this.labelNodeEdges(), this.labelIsolatedEdges(0, 1), this.labelIsolatedEdges(1, 0), this.updateIM(t), t;
      }
    }, {
      key: "labelNodeEdges",
      value: function labelNodeEdges() {
        for (var _t746 = this._nodes.iterator(); _t746.hasNext();) {
          _t746.next().getEdges().computeLabelling(this._arg);
        }
      }
    }, {
      key: "copyNodesAndLabels",
      value: function copyNodesAndLabels(t) {
        for (var _e581 = this._arg[t].getNodeIterator(); _e581.hasNext();) {
          var _n406 = _e581.next();

          this._nodes.addNode(_n406.getCoordinate()).setLabel(t, _n406.getLabel().getLocation(t));
        }
      }
    }, {
      key: "labelIntersectionNodes",
      value: function labelIntersectionNodes(t) {
        for (var _e582 = this._arg[t].getEdgeIterator(); _e582.hasNext();) {
          var _n407 = _e582.next(),
              _s271 = _n407.getLabel().getLocation(t);

          for (var _e583 = _n407.getEdgeIntersectionList().iterator(); _e583.hasNext();) {
            var _n408 = _e583.next(),
                _i147 = this._nodes.find(_n408.coord);

            _i147.getLabel().isNull(t) && (_s271 === se.BOUNDARY ? _i147.setLabelBoundary(t) : _i147.setLabel(t, se.INTERIOR));
          }
        }
      }
    }, {
      key: "labelIsolatedNode",
      value: function labelIsolatedNode(t, e) {
        var n = this._ptLocator.locate(t.getCoordinate(), this._arg[e].getGeometry());

        t.getLabel().setAllLocations(e, n);
      }
    }, {
      key: "computeIntersectionNodes",
      value: function computeIntersectionNodes(t) {
        for (var _e584 = this._arg[t].getEdgeIterator(); _e584.hasNext();) {
          var _n409 = _e584.next(),
              _s272 = _n409.getLabel().getLocation(t);

          for (var _e585 = _n409.getEdgeIntersectionList().iterator(); _e585.hasNext();) {
            var _n410 = _e585.next(),
                _i148 = this._nodes.addNode(_n410.coord);

            _s272 === se.BOUNDARY ? _i148.setLabelBoundary(t) : _i148.getLabel().isNull(t) && _i148.setLabel(t, se.INTERIOR);
          }
        }
      }
    }, {
      key: "labelIsolatedNodes",
      value: function labelIsolatedNodes() {
        for (var _t747 = this._nodes.iterator(); _t747.hasNext();) {
          var _e586 = _t747.next(),
              _n411 = _e586.getLabel();

          u.isTrue(_n411.getGeometryCount() > 0, "node with empty label found"), _e586.isIsolated() && (_n411.isNull(0) ? this.labelIsolatedNode(_e586, 0) : this.labelIsolatedNode(_e586, 1));
        }
      }
    }, {
      key: "updateIM",
      value: function updateIM(t) {
        for (var _e587 = this._isolatedEdges.iterator(); _e587.hasNext();) {
          _e587.next().updateIM(t);
        }

        for (var _e588 = this._nodes.iterator(); _e588.hasNext();) {
          var _n412 = _e588.next();

          _n412.updateIM(t), _n412.updateIMFromEdges(t);
        }
      }
    }, {
      key: "computeDisjointIM",
      value: function computeDisjointIM(t) {
        var e = this._arg[0].getGeometry();

        e.isEmpty() || (t.set(se.INTERIOR, se.EXTERIOR, e.getDimension()), t.set(se.BOUNDARY, se.EXTERIOR, e.getBoundaryDimension()));

        var n = this._arg[1].getGeometry();

        n.isEmpty() || (t.set(se.EXTERIOR, se.INTERIOR, n.getDimension()), t.set(se.EXTERIOR, se.BOUNDARY, n.getBoundaryDimension()));
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Rr;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Rr;
  }();

  Rr.constructor_ = function () {
    this._li = new ee(), this._ptLocator = new fn(), this._arg = null, this._nodes = new Hn(new pr()), this._im = null, this._isolatedEdges = new x(), this._invalidPoint = null;
    var t = arguments[0];
    this._arg = t;
  };

  var Pr =
  /*#__PURE__*/
  function () {
    function Pr() {
      _classCallCheck(this, Pr);

      Pr.constructor_.apply(this, arguments);
    }

    _createClass(Pr, [{
      key: "isContainedInBoundary",
      value: function isContainedInBoundary(t) {
        if (t instanceof Mt) return !1;
        if (t instanceof vt) return this.isPointContainedInBoundary(t);
        if (t instanceof Rt) return this.isLineStringContainedInBoundary(t);

        for (var _e589 = 0; _e589 < t.getNumGeometries(); _e589++) {
          var _n413 = t.getGeometryN(_e589);

          if (!this.isContainedInBoundary(_n413)) return !1;
        }

        return !0;
      }
    }, {
      key: "isLineSegmentContainedInBoundary",
      value: function isLineSegmentContainedInBoundary(t, e) {
        if (t.equals(e)) return this.isPointContainedInBoundary(t);

        if (t.x === e.x) {
          if (t.x === this._rectEnv.getMinX() || t.x === this._rectEnv.getMaxX()) return !0;
        } else if (t.y === e.y && (t.y === this._rectEnv.getMinY() || t.y === this._rectEnv.getMaxY())) return !0;

        return !1;
      }
    }, {
      key: "isLineStringContainedInBoundary",
      value: function isLineStringContainedInBoundary(t) {
        var e = t.getCoordinateSequence(),
            n = new g(),
            s = new g();

        for (var _t748 = 0; _t748 < e.size() - 1; _t748++) {
          if (e.getCoordinate(_t748, n), e.getCoordinate(_t748 + 1, s), !this.isLineSegmentContainedInBoundary(n, s)) return !1;
        }

        return !0;
      }
    }, {
      key: "isPointContainedInBoundary",
      value: function isPointContainedInBoundary() {
        if (arguments[0] instanceof vt) {
          var _t749 = arguments[0];
          return this.isPointContainedInBoundary(_t749.getCoordinate());
        }

        if (arguments[0] instanceof g) {
          var _t750 = arguments[0];
          return _t750.x === this._rectEnv.getMinX() || _t750.x === this._rectEnv.getMaxX() || _t750.y === this._rectEnv.getMinY() || _t750.y === this._rectEnv.getMaxY();
        }
      }
    }, {
      key: "contains",
      value: function contains(t) {
        return !!this._rectEnv.contains(t.getEnvelopeInternal()) && !this.isContainedInBoundary(t);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Pr;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "contains",
      value: function contains(t, e) {
        return new Pr(t).contains(e);
      }
    }]);

    return Pr;
  }();

  Pr.constructor_ = function () {
    this._rectEnv = null;
    var t = arguments[0];
    this._rectEnv = t.getEnvelopeInternal();
  };

  var vr =
  /*#__PURE__*/
  function () {
    function vr() {
      _classCallCheck(this, vr);

      vr.constructor_.apply(this, arguments);
    }

    _createClass(vr, [{
      key: "intersects",
      value: function intersects(t, e) {
        var n = new N(t, e);
        if (!this._rectEnv.intersects(n)) return !1;
        if (this._rectEnv.intersects(t)) return !0;
        if (this._rectEnv.intersects(e)) return !0;

        if (t.compareTo(e) > 0) {
          var _n414 = t;
          t = e, e = _n414;
        }

        var s = !1;
        return e.y > t.y && (s = !0), s ? this._li.computeIntersection(t, e, this._diagDown0, this._diagDown1) : this._li.computeIntersection(t, e, this._diagUp0, this._diagUp1), !!this._li.hasIntersection();
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return vr;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return vr;
  }();

  vr.constructor_ = function () {
    this._li = new ee(), this._rectEnv = null, this._diagUp0 = null, this._diagUp1 = null, this._diagDown0 = null, this._diagDown1 = null;
    var t = arguments[0];
    this._rectEnv = t, this._diagUp0 = new g(t.getMinX(), t.getMinY()), this._diagUp1 = new g(t.getMaxX(), t.getMaxY()), this._diagDown0 = new g(t.getMinX(), t.getMaxY()), this._diagDown1 = new g(t.getMaxX(), t.getMinY());
  };

  var Or =
  /*#__PURE__*/
  function () {
    function Or() {
      _classCallCheck(this, Or);

      Or.constructor_.apply(this, arguments);
    }

    _createClass(Or, [{
      key: "intersects",
      value: function intersects(t) {
        if (!this._rectEnv.intersects(t.getEnvelopeInternal())) return !1;
        var e = new br(this._rectEnv);
        if (e.applyTo(t), e.intersects()) return !0;
        var n = new Mr(this._rectangle);
        if (n.applyTo(t), n.containsPoint()) return !0;
        var s = new Ar(this._rectangle);
        return s.applyTo(t), !!s.intersects();
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Or;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "intersects",
      value: function intersects(t, e) {
        return new Or(t).intersects(e);
      }
    }]);

    return Or;
  }();

  Or.constructor_ = function () {
    this._rectangle = null, this._rectEnv = null;
    var t = arguments[0];
    this._rectangle = t, this._rectEnv = t.getEnvelopeInternal();
  };

  var br =
  /*#__PURE__*/
  function (_Se) {
    _inherits(br, _Se);

    function br() {
      var _this54;

      _classCallCheck(this, br);

      _this54 = _possibleConstructorReturn(this, _getPrototypeOf(br).call(this)), br.constructor_.apply(_assertThisInitialized(_this54), arguments);
      return _this54;
    }

    _createClass(br, [{
      key: "isDone",
      value: function isDone() {
        return !0 === this._intersects;
      }
    }, {
      key: "visit",
      value: function visit(t) {
        var e = t.getEnvelopeInternal();
        return this._rectEnv.intersects(e) ? this._rectEnv.contains(e) ? (this._intersects = !0, null) : e.getMinX() >= this._rectEnv.getMinX() && e.getMaxX() <= this._rectEnv.getMaxX() ? (this._intersects = !0, null) : e.getMinY() >= this._rectEnv.getMinY() && e.getMaxY() <= this._rectEnv.getMaxY() ? (this._intersects = !0, null) : void 0 : null;
      }
    }, {
      key: "intersects",
      value: function intersects() {
        return this._intersects;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return br;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return br;
  }(Se);

  br.constructor_ = function () {
    this._rectEnv = null, this._intersects = !1;
    var t = arguments[0];
    this._rectEnv = t;
  };

  var Mr =
  /*#__PURE__*/
  function (_Se2) {
    _inherits(Mr, _Se2);

    function Mr() {
      var _this55;

      _classCallCheck(this, Mr);

      _this55 = _possibleConstructorReturn(this, _getPrototypeOf(Mr).call(this)), Mr.constructor_.apply(_assertThisInitialized(_this55), arguments);
      return _this55;
    }

    _createClass(Mr, [{
      key: "isDone",
      value: function isDone() {
        return !0 === this._containsPoint;
      }
    }, {
      key: "visit",
      value: function visit(t) {
        if (!(t instanceof Mt)) return null;
        var e = t.getEnvelopeInternal();
        if (!this._rectEnv.intersects(e)) return null;
        var n = new g();

        for (var _s273 = 0; _s273 < 4; _s273++) {
          if (this._rectSeq.getCoordinate(_s273, n), e.contains(n) && Qe.containsPointInPolygon(n, t)) return this._containsPoint = !0, null;
        }
      }
    }, {
      key: "containsPoint",
      value: function containsPoint() {
        return this._containsPoint;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Mr;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Mr;
  }(Se);

  Mr.constructor_ = function () {
    this._rectSeq = null, this._rectEnv = null, this._containsPoint = !1;
    var t = arguments[0];
    this._rectSeq = t.getExteriorRing().getCoordinateSequence(), this._rectEnv = t.getEnvelopeInternal();
  };

  var Ar =
  /*#__PURE__*/
  function (_Se3) {
    _inherits(Ar, _Se3);

    function Ar() {
      var _this56;

      _classCallCheck(this, Ar);

      _this56 = _possibleConstructorReturn(this, _getPrototypeOf(Ar).call(this)), Ar.constructor_.apply(_assertThisInitialized(_this56), arguments);
      return _this56;
    }

    _createClass(Ar, [{
      key: "intersects",
      value: function intersects() {
        return this._hasIntersection;
      }
    }, {
      key: "isDone",
      value: function isDone() {
        return !0 === this._hasIntersection;
      }
    }, {
      key: "visit",
      value: function visit(t) {
        var e = t.getEnvelopeInternal();
        if (!this._rectEnv.intersects(e)) return null;
        var n = Ee.getLines(t);
        this.checkIntersectionWithLineStrings(n);
      }
    }, {
      key: "checkIntersectionWithLineStrings",
      value: function checkIntersectionWithLineStrings(t) {
        for (var _e590 = t.iterator(); _e590.hasNext();) {
          var _t751 = _e590.next();

          if (this.checkIntersectionWithSegments(_t751), this._hasIntersection) return null;
        }
      }
    }, {
      key: "checkIntersectionWithSegments",
      value: function checkIntersectionWithSegments(t) {
        var e = t.getCoordinateSequence();

        for (var _t752 = 1; _t752 < e.size(); _t752++) {
          if (e.getCoordinate(_t752 - 1, this._p0), e.getCoordinate(_t752, this._p1), this._rectIntersector.intersects(this._p0, this._p1)) return this._hasIntersection = !0, null;
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Ar;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Ar;
  }(Se);

  Ar.constructor_ = function () {
    this._rectEnv = null, this._rectIntersector = null, this._hasIntersection = !1, this._p0 = new g(), this._p1 = new g();
    var t = arguments[0];
    this._rectEnv = t.getEnvelopeInternal(), this._rectIntersector = new vr(this._rectEnv);
  };

  var Dr =
  /*#__PURE__*/
  function (_or2) {
    _inherits(Dr, _or2);

    function Dr() {
      var _this57;

      _classCallCheck(this, Dr);

      _this57 = _possibleConstructorReturn(this, _getPrototypeOf(Dr).call(this)), Dr.constructor_.apply(_assertThisInitialized(_this57), arguments);
      return _this57;
    }

    _createClass(Dr, [{
      key: "getIntersectionMatrix",
      value: function getIntersectionMatrix() {
        return this._relate.computeIM();
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Dr;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "covers",
      value: function covers(t, e) {
        return !(2 === e.getDimension() && t.getDimension() < 2) && !(1 === e.getDimension() && t.getDimension() < 1 && e.getLength() > 0) && !!t.getEnvelopeInternal().covers(e.getEnvelopeInternal()) && (!!t.isRectangle() || new Dr(t, e).getIntersectionMatrix().isCovers());
      }
    }, {
      key: "intersects",
      value: function intersects(t, e) {
        if (!t.getEnvelopeInternal().intersects(e.getEnvelopeInternal())) return !1;
        if (t.isRectangle()) return Or.intersects(t, e);
        if (e.isRectangle()) return Or.intersects(e, t);

        if (t.isGeometryCollection() || e.isGeometryCollection()) {
          for (var _n415 = 0; _n415 < t.getNumGeometries(); _n415++) {
            for (var _s274 = 0; _s274 < e.getNumGeometries(); _s274++) {
              if (t.getGeometryN(_n415).intersects(e.getGeometryN(_s274))) return !0;
            }
          }

          return !1;
        }

        return new Dr(t, e).getIntersectionMatrix().isIntersects();
      }
    }, {
      key: "touches",
      value: function touches(t, e) {
        return !!t.getEnvelopeInternal().intersects(e.getEnvelopeInternal()) && new Dr(t, e).getIntersectionMatrix().isTouches(t.getDimension(), e.getDimension());
      }
    }, {
      key: "equalsTopo",
      value: function equalsTopo(t, e) {
        return !!t.getEnvelopeInternal().equals(e.getEnvelopeInternal()) && Dr.relate(t, e).isEquals(t.getDimension(), e.getDimension());
      }
    }, {
      key: "relate",
      value: function relate() {
        if (2 === arguments.length) {
          var _t753 = arguments[0],
              _e591 = arguments[1];
          return new Dr(_t753, _e591).getIntersectionMatrix();
        }

        if (3 === arguments.length) {
          var _t754 = arguments[0],
              _e592 = arguments[1],
              _n416 = arguments[2];
          return new Dr(_t754, _e592, _n416).getIntersectionMatrix();
        }
      }
    }, {
      key: "overlaps",
      value: function overlaps(t, e) {
        return !!t.getEnvelopeInternal().intersects(e.getEnvelopeInternal()) && new Dr(t, e).getIntersectionMatrix().isOverlaps(t.getDimension(), e.getDimension());
      }
    }, {
      key: "crosses",
      value: function crosses(t, e) {
        return !!t.getEnvelopeInternal().intersects(e.getEnvelopeInternal()) && new Dr(t, e).getIntersectionMatrix().isCrosses(t.getDimension(), e.getDimension());
      }
    }, {
      key: "contains",
      value: function contains(t, e) {
        return !(2 === e.getDimension() && t.getDimension() < 2) && !(1 === e.getDimension() && t.getDimension() < 1 && e.getLength() > 0) && !!t.getEnvelopeInternal().contains(e.getEnvelopeInternal()) && (t.isRectangle() ? Pr.contains(t, e) : new Dr(t, e).getIntersectionMatrix().isContains());
      }
    }]);

    return Dr;
  }(or);

  Dr.constructor_ = function () {
    if (this._relate = null, 2 === arguments.length) {
      var _t755 = arguments[0],
          _e593 = arguments[1];
      or.constructor_.call(this, _t755, _e593), this._relate = new Rr(this._arg);
    } else if (3 === arguments.length) {
      var _t756 = arguments[0],
          _e594 = arguments[1],
          _n417 = arguments[2];
      or.constructor_.call(this, _t756, _e594, _n417), this._relate = new Rr(this._arg);
    }
  };

  var Fr = Object.freeze({
    RelateOp: Dr
  });

  var Gr =
  /*#__PURE__*/
  function () {
    function Gr() {
      _classCallCheck(this, Gr);

      Gr.constructor_.apply(this, arguments);
    }

    _createClass(Gr, [{
      key: "union",
      value: function union() {
        var t = new fn(),
            e = new ct();

        for (var _n418 = 0; _n418 < this._pointGeom.getNumGeometries(); _n418++) {
          var _s275 = this._pointGeom.getGeometryN(_n418).getCoordinate();

          t.locate(_s275, this._otherGeom) === se.EXTERIOR && e.add(_s275);
        }

        if (0 === e.size()) return this._otherGeom;
        var n = null;
        var s = X.toCoordinateArray(e);
        return n = 1 === s.length ? this._geomFact.createPoint(s[0]) : this._geomFact.createMultiPointFromCoords(s), _e.combine(n, this._otherGeom);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Gr;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "union",
      value: function union(t, e) {
        return new Gr(t, e).union();
      }
    }]);

    return Gr;
  }();

  Gr.constructor_ = function () {
    this._pointGeom = null, this._otherGeom = null, this._geomFact = null;
    var t = arguments[0],
        e = arguments[1];
    this._pointGeom = t, this._otherGeom = e, this._geomFact = e.getFactory();
  };

  var qr =
  /*#__PURE__*/
  function () {
    function qr() {
      _classCallCheck(this, qr);

      qr.constructor_.apply(this, arguments);
    }

    _createClass(qr, [{
      key: "reduceToGeometries",
      value: function reduceToGeometries(t) {
        var e = new x();

        for (var _n419 = t.iterator(); _n419.hasNext();) {
          var _t757 = _n419.next();

          var _s276 = null;
          _(_t757, m) ? _s276 = this.unionTree(_t757) : _t757 instanceof q && (_s276 = _t757), e.add(_s276);
        }

        return e;
      }
    }, {
      key: "extractByEnvelope",
      value: function extractByEnvelope(t, e, n) {
        var s = new x();

        for (var _i149 = 0; _i149 < e.getNumGeometries(); _i149++) {
          var _r75 = e.getGeometryN(_i149);

          _r75.getEnvelopeInternal().intersects(t) ? s.add(_r75) : n.add(_r75);
        }

        return this._geomFactory.buildGeometry(s);
      }
    }, {
      key: "unionOptimized",
      value: function unionOptimized(t, e) {
        var n = t.getEnvelopeInternal(),
            s = e.getEnvelopeInternal();

        if (!n.intersects(s)) {
          return _e.combine(t, e);
        }

        if (t.getNumGeometries() <= 1 && e.getNumGeometries() <= 1) return this.unionActual(t, e);
        var i = n.intersection(s);
        return this.unionUsingEnvelopeIntersection(t, e, i);
      }
    }, {
      key: "union",
      value: function union() {
        if (null === this._inputPolys) throw new IllegalStateException("union() method cannot be called twice");
        if (this._inputPolys.isEmpty()) return null;
        this._geomFactory = this._inputPolys.iterator().next().getFactory();
        var t = new Is(qr.STRTREE_NODE_CAPACITY);

        for (var _e595 = this._inputPolys.iterator(); _e595.hasNext();) {
          var _n420 = _e595.next();

          t.insert(_n420.getEnvelopeInternal(), _n420);
        }

        this._inputPolys = null;
        var e = t.itemsTree();
        return this.unionTree(e);
      }
    }, {
      key: "binaryUnion",
      value: function binaryUnion() {
        if (1 === arguments.length) {
          var _t758 = arguments[0];
          return this.binaryUnion(_t758, 0, _t758.size());
        }

        if (3 === arguments.length) {
          var _t759 = arguments[0],
              _e596 = arguments[1],
              _n421 = arguments[2];

          if (_n421 - _e596 <= 1) {
            var _n422 = qr.getGeometry(_t759, _e596);

            return this.unionSafe(_n422, null);
          }

          if (_n421 - _e596 == 2) return this.unionSafe(qr.getGeometry(_t759, _e596), qr.getGeometry(_t759, _e596 + 1));
          {
            var _s277 = Math.trunc((_n421 + _e596) / 2),
                _i150 = this.binaryUnion(_t759, _e596, _s277),
                _r76 = this.binaryUnion(_t759, _s277, _n421);

            return this.unionSafe(_i150, _r76);
          }
        }
      }
    }, {
      key: "repeatedUnion",
      value: function repeatedUnion(t) {
        var e = null;

        for (var _n423 = t.iterator(); _n423.hasNext();) {
          var _t760 = _n423.next();

          e = null === e ? _t760.copy() : e.union(_t760);
        }

        return e;
      }
    }, {
      key: "unionSafe",
      value: function unionSafe(t, e) {
        return null === t && null === e ? null : null === t ? e.copy() : null === e ? t.copy() : this.unionOptimized(t, e);
      }
    }, {
      key: "unionActual",
      value: function unionActual(t, e) {
        return qr.restrictToPolygons(t.union(e));
      }
    }, {
      key: "unionTree",
      value: function unionTree(t) {
        var e = this.reduceToGeometries(t);
        return this.binaryUnion(e);
      }
    }, {
      key: "unionUsingEnvelopeIntersection",
      value: function unionUsingEnvelopeIntersection(t, e, n) {
        var s = new x(),
            i = this.extractByEnvelope(n, t, s),
            r = this.extractByEnvelope(n, e, s),
            o = this.unionActual(i, r);
        return s.add(o), _e.combine(s);
      }
    }, {
      key: "bufferUnion",
      value: function bufferUnion() {
        if (1 === arguments.length) {
          var _t761 = arguments[0];
          return _t761.get(0).getFactory().buildGeometry(_t761).buffer(0);
        }

        if (2 === arguments.length) {
          var _t762 = arguments[0],
              _e597 = arguments[1];
          return _t762.getFactory().createGeometryCollection([_t762, _e597]).buffer(0);
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return qr;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "restrictToPolygons",
      value: function restrictToPolygons(t) {
        if (_(t, bt)) return t;
        var e = Ce.getPolygons(t);
        return 1 === e.size() ? e.get(0) : t.getFactory().createMultiPolygon(Wt.toPolygonArray(e));
      }
    }, {
      key: "getGeometry",
      value: function getGeometry(t, e) {
        return e >= t.size() ? null : t.get(e);
      }
    }, {
      key: "union",
      value: function union(t) {
        return new qr(t).union();
      }
    }]);

    return qr;
  }();

  qr.constructor_ = function () {
    this._inputPolys = null, this._geomFactory = null;
    var t = arguments[0];
    this._inputPolys = t, null === this._inputPolys && (this._inputPolys = new x());
  }, qr.STRTREE_NODE_CAPACITY = 4;

  var Br =
  /*#__PURE__*/
  function () {
    function Br() {
      _classCallCheck(this, Br);

      Br.constructor_.apply(this, arguments);
    }

    _createClass(Br, [{
      key: "unionNoOpt",
      value: function unionNoOpt(t) {
        var e = this._geomFact.createPoint();

        return rr.overlayOp(t, e, lr.UNION);
      }
    }, {
      key: "unionWithNull",
      value: function unionWithNull(t, e) {
        return null === t && null === e ? null : null === e ? t : null === t ? e : t.union(e);
      }
    }, {
      key: "extract",
      value: function extract() {
        if (_(arguments[0], f)) {
          for (var _t763 = arguments[0].iterator(); _t763.hasNext();) {
            var _e598 = _t763.next();

            this.extract(_e598);
          }
        } else if (arguments[0] instanceof q) {
          var _t764 = arguments[0];
          null === this._geomFact && (this._geomFact = _t764.getFactory()), fe.extract(_t764, q.TYPENAME_POLYGON, this._polygons), fe.extract(_t764, q.TYPENAME_LINESTRING, this._lines), fe.extract(_t764, q.TYPENAME_POINT, this._points);
        }
      }
    }, {
      key: "union",
      value: function union() {
        if (null === this._geomFact) return null;
        var t = null;

        if (this._points.size() > 0) {
          var _e599 = this._geomFact.buildGeometry(this._points);

          t = this.unionNoOpt(_e599);
        }

        var e = null;

        if (this._lines.size() > 0) {
          var _t765 = this._geomFact.buildGeometry(this._lines);

          e = this.unionNoOpt(_t765);
        }

        var n = null;
        this._polygons.size() > 0 && (n = qr.union(this._polygons));
        var s = this.unionWithNull(e, n);
        var i = null;
        return null === (i = null === t ? s : null === s ? t : Gr.union(t, s)) ? this._geomFact.createGeometryCollection() : i;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Br;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "union",
      value: function union() {
        if (1 === arguments.length) {
          if (_(arguments[0], f)) {
            var _t766 = arguments[0];
            return new Br(_t766).union();
          }

          if (arguments[0] instanceof q) {
            var _t767 = arguments[0];
            return new Br(_t767).union();
          }
        } else if (2 === arguments.length) {
          var _t768 = arguments[0],
              _e600 = arguments[1];
          return new Br(_t768, _e600).union();
        }
      }
    }]);

    return Br;
  }();

  Br.constructor_ = function () {
    if (this._polygons = new x(), this._lines = new x(), this._points = new x(), this._geomFact = null, 1 === arguments.length) {
      if (_(arguments[0], f)) {
        var _t769 = arguments[0];
        this.extract(_t769);
      } else if (arguments[0] instanceof q) {
        var _t770 = arguments[0];
        this.extract(_t770);
      }
    } else if (2 === arguments.length) {
      var _t771 = arguments[0],
          _e601 = arguments[1];
      this._geomFact = _e601, this.extract(_t771);
    }
  };

  var Vr = Object.freeze({
    UnaryUnionOp: Br
  }),
      zr = Object.freeze({
    IsValidOp: Ir,
    ConsistentAreaTester: yr
  }),
      Yr = Object.freeze({
    BoundaryOp: mt,
    IsSimpleOp: Ws,
    buffer: Li,
    distance: vi,
    linemerge: Ui,
    overlay: ar,
    polygonize: Tr,
    relate: Fr,
    union: Vr,
    valid: zr
  });

  var Ur =
  /*#__PURE__*/
  function (_Gt$CoordinateOperati) {
    _inherits(Ur, _Gt$CoordinateOperati);

    function Ur() {
      var _this58;

      _classCallCheck(this, Ur);

      _this58 = _possibleConstructorReturn(this, _getPrototypeOf(Ur).call(this)), Ur.constructor_.apply(_assertThisInitialized(_this58), arguments);
      return _this58;
    }

    _createClass(Ur, [{
      key: "edit",
      value: function edit() {
        if (2 === arguments.length && arguments[1] instanceof q && arguments[0] instanceof Array) {
          var _t772 = arguments[0],
              _e602 = arguments[1];
          if (0 === _t772.length) return null;

          var _n424 = new Array(_t772.length).fill(null);

          for (var _e603 = 0; _e603 < _t772.length; _e603++) {
            var _s279 = new g(_t772[_e603]);

            this._targetPM.makePrecise(_s279), _n424[_e603] = _s279;
          }

          var _s278 = new I(_n424, !1).toCoordinateArray();

          var _i151 = 0;
          _e602 instanceof Rt && (_i151 = 2), _e602 instanceof Dt && (_i151 = 4);
          var _r77 = _n424;
          return this._removeCollapsed && (_r77 = null), _s278.length < _i151 ? _r77 : _s278;
        }

        return _get(_getPrototypeOf(Ur.prototype), "edit", this).apply(this, arguments);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Ur;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Ur;
  }(Gt.CoordinateOperation);

  Ur.constructor_ = function () {
    this._targetPM = null, this._removeCollapsed = !0;
    var t = arguments[0],
        e = arguments[1];
    this._targetPM = t, this._removeCollapsed = e;
  };

  var kr =
  /*#__PURE__*/
  function () {
    function kr() {
      _classCallCheck(this, kr);

      kr.constructor_.apply(this, arguments);
    }

    _createClass(kr, [{
      key: "fixPolygonalTopology",
      value: function fixPolygonalTopology(t) {
        var e = t;
        this._changePrecisionModel || (e = this.changePM(t, this._targetPM));
        var n = wi.bufferOp(e, 0);
        var s = n;
        return this._changePrecisionModel || (s = t.getFactory().createGeometry(n)), s;
      }
    }, {
      key: "reducePointwise",
      value: function reducePointwise(t) {
        var e = null;

        if (this._changePrecisionModel) {
          var _n425 = this.createFactory(t.getFactory(), this._targetPM);

          e = new Gt(_n425);
        } else e = new Gt();

        var n = this._removeCollapsed;
        return t.getDimension() >= 2 && (n = !0), e.edit(t, new Ur(this._targetPM, n));
      }
    }, {
      key: "changePM",
      value: function changePM(t, e) {
        return this.createEditor(t.getFactory(), e).edit(t, new Gt.NoOpGeometryOperation());
      }
    }, {
      key: "setRemoveCollapsedComponents",
      value: function setRemoveCollapsedComponents(t) {
        this._removeCollapsed = t;
      }
    }, {
      key: "createFactory",
      value: function createFactory(t, e) {
        return new Wt(e, t.getSRID(), t.getCoordinateSequenceFactory());
      }
    }, {
      key: "setChangePrecisionModel",
      value: function setChangePrecisionModel(t) {
        this._changePrecisionModel = t;
      }
    }, {
      key: "reduce",
      value: function reduce(t) {
        var e = this.reducePointwise(t);
        return this._isPointwise ? e : _(e, bt) ? Ir.isValid(e) ? e : this.fixPolygonalTopology(e) : e;
      }
    }, {
      key: "setPointwise",
      value: function setPointwise(t) {
        this._isPointwise = t;
      }
    }, {
      key: "createEditor",
      value: function createEditor(t, e) {
        if (t.getPrecisionModel() === e) return new Gt();
        var n = this.createFactory(t, e);
        return new Gt(n);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return kr;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "reduce",
      value: function reduce(t, e) {
        return new kr(e).reduce(t);
      }
    }, {
      key: "reducePointwise",
      value: function reducePointwise(t, e) {
        var n = new kr(e);
        return n.setPointwise(!0), n.reduce(t);
      }
    }]);

    return kr;
  }();

  kr.constructor_ = function () {
    this._targetPM = null, this._removeCollapsed = !0, this._changePrecisionModel = !1, this._isPointwise = !1;
    var t = arguments[0];
    this._targetPM = t;
  };

  var Xr = Object.freeze({
    GeometryPrecisionReducer: kr
  });

  var Hr =
  /*#__PURE__*/
  function () {
    function Hr() {
      _classCallCheck(this, Hr);

      Hr.constructor_.apply(this, arguments);
    }

    _createClass(Hr, [{
      key: "simplifySection",
      value: function simplifySection(t, e) {
        if (t + 1 === e) return null;
        this._seg.p0 = this._pts[t], this._seg.p1 = this._pts[e];
        var n = -1,
            s = t;

        for (var _i152 = t + 1; _i152 < e; _i152++) {
          var _t773 = this._seg.distance(this._pts[_i152]);

          _t773 > n && (n = _t773, s = _i152);
        }

        if (n <= this._distanceTolerance) for (var _n426 = t + 1; _n426 < e; _n426++) {
          this._usePt[_n426] = !1;
        } else this.simplifySection(t, s), this.simplifySection(s, e);
      }
    }, {
      key: "setDistanceTolerance",
      value: function setDistanceTolerance(t) {
        this._distanceTolerance = t;
      }
    }, {
      key: "simplify",
      value: function simplify() {
        this._usePt = new Array(this._pts.length).fill(null);

        for (var _t774 = 0; _t774 < this._pts.length; _t774++) {
          this._usePt[_t774] = !0;
        }

        this.simplifySection(0, this._pts.length - 1);
        var t = new I();

        for (var _e604 = 0; _e604 < this._pts.length; _e604++) {
          this._usePt[_e604] && t.add(new g(this._pts[_e604]));
        }

        return t.toCoordinateArray();
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Hr;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "simplify",
      value: function simplify(t, e) {
        var n = new Hr(t);
        return n.setDistanceTolerance(e), n.simplify();
      }
    }]);

    return Hr;
  }();

  Hr.constructor_ = function () {
    this._pts = null, this._usePt = null, this._distanceTolerance = null, this._seg = new ne();
    var t = arguments[0];
    this._pts = t;
  };

  var Wr =
  /*#__PURE__*/
  function () {
    function Wr() {
      _classCallCheck(this, Wr);

      Wr.constructor_.apply(this, arguments);
    }

    _createClass(Wr, [{
      key: "setEnsureValid",
      value: function setEnsureValid(t) {
        this._isEnsureValidTopology = t;
      }
    }, {
      key: "getResultGeometry",
      value: function getResultGeometry() {
        return this._inputGeom.isEmpty() ? this._inputGeom.copy() : new jr(this._isEnsureValidTopology, this._distanceTolerance).transform(this._inputGeom);
      }
    }, {
      key: "setDistanceTolerance",
      value: function setDistanceTolerance(t) {
        if (t < 0) throw new n("Tolerance must be non-negative");
        this._distanceTolerance = t;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Wr;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "simplify",
      value: function simplify(t, e) {
        var n = new Wr(t);
        return n.setDistanceTolerance(e), n.getResultGeometry();
      }
    }]);

    return Wr;
  }();

  var jr =
  /*#__PURE__*/
  function (_ye3) {
    _inherits(jr, _ye3);

    function jr() {
      var _this59;

      _classCallCheck(this, jr);

      _this59 = _possibleConstructorReturn(this, _getPrototypeOf(jr).call(this)), jr.constructor_.apply(_assertThisInitialized(_this59), arguments);
      return _this59;
    }

    _createClass(jr, [{
      key: "transformPolygon",
      value: function transformPolygon(t, e) {
        if (t.isEmpty()) return null;

        var n = _get(_getPrototypeOf(jr.prototype), "transformPolygon", this).call(this, t, e);

        return e instanceof Ft ? n : this.createValidArea(n);
      }
    }, {
      key: "createValidArea",
      value: function createValidArea(t) {
        return this._isEnsureValidTopology ? t.buffer(0) : t;
      }
    }, {
      key: "transformCoordinates",
      value: function transformCoordinates(t, e) {
        var n = t.toCoordinateArray();
        var s = null;
        return s = 0 === n.length ? new Array(0).fill(null) : Hr.simplify(n, this._distanceTolerance), this._factory.getCoordinateSequenceFactory().create(s);
      }
    }, {
      key: "transformMultiPolygon",
      value: function transformMultiPolygon(t, e) {
        var n = _get(_getPrototypeOf(jr.prototype), "transformMultiPolygon", this).call(this, t, e);

        return this.createValidArea(n);
      }
    }, {
      key: "transformLinearRing",
      value: function transformLinearRing(t, e) {
        var n = e instanceof Mt,
            s = _get(_getPrototypeOf(jr.prototype), "transformLinearRing", this).call(this, t, e);

        return !n || s instanceof Dt ? s : null;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return jr;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return jr;
  }(ye);

  jr.constructor_ = function () {
    this._isEnsureValidTopology = !0, this._distanceTolerance = null;
    var t = arguments[0],
        e = arguments[1];
    this._isEnsureValidTopology = t, this._distanceTolerance = e;
  }, Wr.DPTransformer = jr, Wr.constructor_ = function () {
    this._inputGeom = null, this._distanceTolerance = null, this._isEnsureValidTopology = !0;
    var t = arguments[0];
    this._inputGeom = t;
  };

  var Kr =
  /*#__PURE__*/
  function (_ne) {
    _inherits(Kr, _ne);

    function Kr() {
      var _this60;

      _classCallCheck(this, Kr);

      _this60 = _possibleConstructorReturn(this, _getPrototypeOf(Kr).call(this)), Kr.constructor_.apply(_assertThisInitialized(_this60), arguments);
      return _this60;
    }

    _createClass(Kr, [{
      key: "getIndex",
      value: function getIndex() {
        return this._index;
      }
    }, {
      key: "getParent",
      value: function getParent() {
        return this._parent;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Kr;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Kr;
  }(ne);

  Kr.constructor_ = function () {
    if (this._parent = null, this._index = null, 2 === arguments.length) {
      var _t775 = arguments[0],
          _e605 = arguments[1];
      Kr.constructor_.call(this, _t775, _e605, null, -1);
    } else if (4 === arguments.length) {
      var _t776 = arguments[0],
          _e606 = arguments[1],
          _n427 = arguments[2],
          _s280 = arguments[3];
      ne.constructor_.call(this, _t776, _e606), this._parent = _n427, this._index = _s280;
    }
  };

  var Zr =
  /*#__PURE__*/
  function () {
    function Zr() {
      _classCallCheck(this, Zr);

      Zr.constructor_.apply(this, arguments);
    }

    _createClass(Zr, [{
      key: "addToResult",
      value: function addToResult(t) {
        this._resultSegs.add(t);
      }
    }, {
      key: "asLineString",
      value: function asLineString() {
        return this._parentLine.getFactory().createLineString(Zr.extractCoordinates(this._resultSegs));
      }
    }, {
      key: "getResultSize",
      value: function getResultSize() {
        var t = this._resultSegs.size();

        return 0 === t ? 0 : t + 1;
      }
    }, {
      key: "getParent",
      value: function getParent() {
        return this._parentLine;
      }
    }, {
      key: "getSegment",
      value: function getSegment(t) {
        return this._segs[t];
      }
    }, {
      key: "getParentCoordinates",
      value: function getParentCoordinates() {
        return this._parentLine.getCoordinates();
      }
    }, {
      key: "getMinimumSize",
      value: function getMinimumSize() {
        return this._minimumSize;
      }
    }, {
      key: "asLinearRing",
      value: function asLinearRing() {
        return this._parentLine.getFactory().createLinearRing(Zr.extractCoordinates(this._resultSegs));
      }
    }, {
      key: "getSegments",
      value: function getSegments() {
        return this._segs;
      }
    }, {
      key: "init",
      value: function init() {
        var t = this._parentLine.getCoordinates();

        this._segs = new Array(t.length - 1).fill(null);

        for (var _e607 = 0; _e607 < t.length - 1; _e607++) {
          var _n428 = new Kr(t[_e607], t[_e607 + 1], this._parentLine, _e607);

          this._segs[_e607] = _n428;
        }
      }
    }, {
      key: "getResultCoordinates",
      value: function getResultCoordinates() {
        return Zr.extractCoordinates(this._resultSegs);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Zr;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "extractCoordinates",
      value: function extractCoordinates(t) {
        var e = new Array(t.size() + 1).fill(null);
        var n = null;

        for (var _s281 = 0; _s281 < t.size(); _s281++) {
          n = t.get(_s281), e[_s281] = n.p0;
        }

        return e[e.length - 1] = n.p1, e;
      }
    }]);

    return Zr;
  }();

  Zr.constructor_ = function () {
    if (this._parentLine = null, this._segs = null, this._resultSegs = new x(), this._minimumSize = null, 1 === arguments.length) {
      var _t777 = arguments[0];
      Zr.constructor_.call(this, _t777, 2);
    } else if (2 === arguments.length) {
      var _t778 = arguments[0],
          _e608 = arguments[1];
      this._parentLine = _t778, this._minimumSize = _e608, this.init();
    }
  };

  var Qr =
  /*#__PURE__*/
  function () {
    function Qr() {
      _classCallCheck(this, Qr);

      Qr.constructor_.apply(this, arguments);
    }

    _createClass(Qr, [{
      key: "remove",
      value: function remove(t) {
        this._index.remove(new N(t.p0, t.p1), t);
      }
    }, {
      key: "add",
      value: function add() {
        if (arguments[0] instanceof Zr) {
          var _t779 = arguments[0].getSegments();

          for (var _e609 = 0; _e609 < _t779.length; _e609++) {
            var _n429 = _t779[_e609];
            this.add(_n429);
          }
        } else if (arguments[0] instanceof ne) {
          var _t780 = arguments[0];

          this._index.insert(new N(_t780.p0, _t780.p1), _t780);
        }
      }
    }, {
      key: "query",
      value: function query(t) {
        var e = new N(t.p0, t.p1),
            n = new Jr(t);
        return this._index.query(e, n), n.getItems();
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Qr;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Qr;
  }();

  Qr.constructor_ = function () {
    this._index = new gs();
  };

  var Jr =
  /*#__PURE__*/
  function () {
    function Jr() {
      _classCallCheck(this, Jr);

      Jr.constructor_.apply(this, arguments);
    }

    _createClass(Jr, [{
      key: "visitItem",
      value: function visitItem(t) {
        var e = t;
        N.intersects(e.p0, e.p1, this._querySeg.p0, this._querySeg.p1) && this._items.add(t);
      }
    }, {
      key: "getItems",
      value: function getItems() {
        return this._items;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Jr;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [Fe];
      }
    }]);

    return Jr;
  }();

  Jr.constructor_ = function () {
    this._querySeg = null, this._items = new x();
    var t = arguments[0];
    this._querySeg = t;
  };

  var $r =
  /*#__PURE__*/
  function () {
    function $r() {
      _classCallCheck(this, $r);

      $r.constructor_.apply(this, arguments);
    }

    _createClass($r, [{
      key: "flatten",
      value: function flatten(t, e) {
        var n = this._linePts[t],
            s = this._linePts[e],
            i = new ne(n, s);
        return this.remove(this._line, t, e), this._outputIndex.add(i), i;
      }
    }, {
      key: "hasBadIntersection",
      value: function hasBadIntersection(t, e, n) {
        return !!this.hasBadOutputIntersection(n) || !!this.hasBadInputIntersection(t, e, n);
      }
    }, {
      key: "setDistanceTolerance",
      value: function setDistanceTolerance(t) {
        this._distanceTolerance = t;
      }
    }, {
      key: "simplifySection",
      value: function simplifySection(t, e, n) {
        n += 1;
        var s = new Array(2).fill(null);

        if (t + 1 === e) {
          var _e610 = this._line.getSegment(t);

          return this._line.addToResult(_e610), null;
        }

        var i = !0;

        if (this._line.getResultSize() < this._line.getMinimumSize()) {
          n + 1 < this._line.getMinimumSize() && (i = !1);
        }

        var r = new Array(1).fill(null),
            o = this.findFurthestPoint(this._linePts, t, e, r);
        r[0] > this._distanceTolerance && (i = !1);
        var l = new ne();

        if (l.p0 = this._linePts[t], l.p1 = this._linePts[e], s[0] = t, s[1] = e, this.hasBadIntersection(this._line, s, l) && (i = !1), i) {
          var _n430 = this.flatten(t, e);

          return this._line.addToResult(_n430), null;
        }

        this.simplifySection(t, o, n), this.simplifySection(o, e, n);
      }
    }, {
      key: "hasBadOutputIntersection",
      value: function hasBadOutputIntersection(t) {
        for (var _e611 = this._outputIndex.query(t).iterator(); _e611.hasNext();) {
          var _n431 = _e611.next();

          if (this.hasInteriorIntersection(_n431, t)) return !0;
        }

        return !1;
      }
    }, {
      key: "findFurthestPoint",
      value: function findFurthestPoint(t, e, n, s) {
        var i = new ne();
        i.p0 = t[e], i.p1 = t[n];
        var r = -1,
            o = e;

        for (var _s282 = e + 1; _s282 < n; _s282++) {
          var _e612 = t[_s282],
              _n432 = i.distance(_e612);

          _n432 > r && (r = _n432, o = _s282);
        }

        return s[0] = r, o;
      }
    }, {
      key: "simplify",
      value: function simplify(t) {
        this._line = t, this._linePts = t.getParentCoordinates(), this.simplifySection(0, this._linePts.length - 1, 0);
      }
    }, {
      key: "remove",
      value: function remove(t, e, n) {
        for (var _s283 = e; _s283 < n; _s283++) {
          var _e613 = t.getSegment(_s283);

          this._inputIndex.remove(_e613);
        }
      }
    }, {
      key: "hasInteriorIntersection",
      value: function hasInteriorIntersection(t, e) {
        return this._li.computeIntersection(t.p0, t.p1, e.p0, e.p1), this._li.isInteriorIntersection();
      }
    }, {
      key: "hasBadInputIntersection",
      value: function hasBadInputIntersection(t, e, n) {
        for (var _s284 = this._inputIndex.query(n).iterator(); _s284.hasNext();) {
          var _i153 = _s284.next();

          if (this.hasInteriorIntersection(_i153, n)) {
            if ($r.isInLineSection(t, e, _i153)) continue;
            return !0;
          }
        }

        return !1;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return $r;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "isInLineSection",
      value: function isInLineSection(t, e, n) {
        if (n.getParent() !== t.getParent()) return !1;
        var s = n.getIndex();
        return s >= e[0] && s < e[1];
      }
    }]);

    return $r;
  }();

  $r.constructor_ = function () {
    this._li = new ee(), this._inputIndex = new Qr(), this._outputIndex = new Qr(), this._line = null, this._linePts = null, this._distanceTolerance = 0;
    var t = arguments[0],
        e = arguments[1];
    this._inputIndex = t, this._outputIndex = e;
  };

  var to =
  /*#__PURE__*/
  function () {
    function to() {
      _classCallCheck(this, to);

      to.constructor_.apply(this, arguments);
    }

    _createClass(to, [{
      key: "setDistanceTolerance",
      value: function setDistanceTolerance(t) {
        this._distanceTolerance = t;
      }
    }, {
      key: "simplify",
      value: function simplify(t) {
        for (var _e614 = t.iterator(); _e614.hasNext();) {
          this._inputIndex.add(_e614.next());
        }

        for (var _e615 = t.iterator(); _e615.hasNext();) {
          var _t781 = new $r(this._inputIndex, this._outputIndex);

          _t781.setDistanceTolerance(this._distanceTolerance), _t781.simplify(_e615.next());
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return to;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return to;
  }();

  to.constructor_ = function () {
    this._inputIndex = new Qr(), this._outputIndex = new Qr(), this._distanceTolerance = 0;
  };

  var eo =
  /*#__PURE__*/
  function () {
    function eo() {
      _classCallCheck(this, eo);

      eo.constructor_.apply(this, arguments);
    }

    _createClass(eo, [{
      key: "getResultGeometry",
      value: function getResultGeometry() {
        if (this._inputGeom.isEmpty()) return this._inputGeom.copy();
        return this._linestringMap = new kt(), this._inputGeom.apply(new so(this)), this._lineSimplifier.simplify(this._linestringMap.values()), new no(this._linestringMap).transform(this._inputGeom);
      }
    }, {
      key: "setDistanceTolerance",
      value: function setDistanceTolerance(t) {
        if (t < 0) throw new n("Tolerance must be non-negative");

        this._lineSimplifier.setDistanceTolerance(t);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return eo;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "simplify",
      value: function simplify(t, e) {
        var n = new eo(t);
        return n.setDistanceTolerance(e), n.getResultGeometry();
      }
    }]);

    return eo;
  }();

  var no =
  /*#__PURE__*/
  function (_ye4) {
    _inherits(no, _ye4);

    function no() {
      var _this61;

      _classCallCheck(this, no);

      _this61 = _possibleConstructorReturn(this, _getPrototypeOf(no).call(this)), no.constructor_.apply(_assertThisInitialized(_this61), arguments);
      return _this61;
    }

    _createClass(no, [{
      key: "transformCoordinates",
      value: function transformCoordinates(t, e) {
        if (0 === t.size()) return null;

        if (e instanceof Rt) {
          var _t782 = this._linestringMap.get(e);

          return this.createCoordinateSequence(_t782.getResultCoordinates());
        }

        return _get(_getPrototypeOf(no.prototype), "transformCoordinates", this).call(this, t, e);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return no;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return no;
  }(ye);

  no.constructor_ = function () {
    this._linestringMap = null;
    var t = arguments[0];
    this._linestringMap = t;
  };

  var so =
  /*#__PURE__*/
  function () {
    function so() {
      _classCallCheck(this, so);

      so.constructor_.apply(this, arguments);
    }

    _createClass(so, [{
      key: "filter",
      value: function filter(t) {
        if (t instanceof Rt) {
          var _e616 = t;
          if (_e616.isEmpty()) return null;

          var _n433 = _e616.isClosed() ? 4 : 2,
              _s285 = new Zr(_e616, _n433);

          this.tps._linestringMap.put(_e616, _s285);
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return so;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [G];
      }
    }]);

    return so;
  }();

  so.constructor_ = function () {
    this.tps = null;
    var t = arguments[0];
    this.tps = t;
  }, eo.LineStringTransformer = no, eo.LineStringMapBuilderFilter = so, eo.constructor_ = function () {
    this._inputGeom = null, this._lineSimplifier = new to(), this._linestringMap = null;
    var t = arguments[0];
    this._inputGeom = t;
  };

  var io =
  /*#__PURE__*/
  function () {
    function io() {
      _classCallCheck(this, io);

      io.constructor_.apply(this, arguments);
    }

    _createClass(io, [{
      key: "simplifyVertex",
      value: function simplifyVertex(t) {
        var e = t,
            n = e.getArea(),
            s = null;

        for (; null !== e;) {
          var _t783 = e.getArea();

          _t783 < n && (n = _t783, s = e), e = e._next;
        }

        return null !== s && n < this._tolerance && s.remove(), t.isLive() ? n : -1;
      }
    }, {
      key: "simplify",
      value: function simplify() {
        var t = ro.buildLine(this._pts);
        var e = this._tolerance;

        do {
          e = this.simplifyVertex(t);
        } while (e < this._tolerance);

        var n = t.getCoordinates();
        return n.length < 2 ? [n[0], new g(n[0])] : n;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return io;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "simplify",
      value: function simplify(t, e) {
        return new io(t, e).simplify();
      }
    }]);

    return io;
  }();

  var ro =
  /*#__PURE__*/
  function () {
    function ro() {
      _classCallCheck(this, ro);

      ro.constructor_.apply(this, arguments);
    }

    _createClass(ro, [{
      key: "getCoordinates",
      value: function getCoordinates() {
        var t = new I();
        var e = this;

        do {
          t.add(e._pt, !1), e = e._next;
        } while (null !== e);

        return t.toCoordinateArray();
      }
    }, {
      key: "getArea",
      value: function getArea() {
        return this._area;
      }
    }, {
      key: "updateArea",
      value: function updateArea() {
        if (null === this._prev || null === this._next) return this._area = ro.MAX_AREA, null;
        this._area = Math.abs(oe.area(this._prev._pt, this._pt, this._next._pt));
      }
    }, {
      key: "remove",
      value: function remove() {
        var t = this._prev,
            e = this._next;
        var n = null;
        return null !== this._prev && (this._prev.setNext(e), this._prev.updateArea(), n = this._prev), null !== this._next && (this._next.setPrev(t), this._next.updateArea(), null === n && (n = this._next)), this._isLive = !1, n;
      }
    }, {
      key: "isLive",
      value: function isLive() {
        return this._isLive;
      }
    }, {
      key: "setPrev",
      value: function setPrev(t) {
        this._prev = t;
      }
    }, {
      key: "setNext",
      value: function setNext(t) {
        this._next = t;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return ro;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "buildLine",
      value: function buildLine(t) {
        var e = null,
            n = null;

        for (var _s286 = 0; _s286 < t.length; _s286++) {
          var _i154 = new ro(t[_s286]);

          null === e && (e = _i154), _i154.setPrev(n), null !== n && (n.setNext(_i154), n.updateArea()), n = _i154;
        }

        return e;
      }
    }]);

    return ro;
  }();

  ro.constructor_ = function () {
    this._pt = null, this._prev = null, this._next = null, this._area = ro.MAX_AREA, this._isLive = !0;
    var t = arguments[0];
    this._pt = t;
  }, ro.MAX_AREA = i.MAX_VALUE, io.VWVertex = ro, io.constructor_ = function () {
    this._pts = null, this._tolerance = null;
    var t = arguments[0],
        e = arguments[1];
    this._pts = t, this._tolerance = e * e;
  };

  var oo =
  /*#__PURE__*/
  function () {
    function oo() {
      _classCallCheck(this, oo);

      oo.constructor_.apply(this, arguments);
    }

    _createClass(oo, [{
      key: "setEnsureValid",
      value: function setEnsureValid(t) {
        this._isEnsureValidTopology = t;
      }
    }, {
      key: "getResultGeometry",
      value: function getResultGeometry() {
        return this._inputGeom.isEmpty() ? this._inputGeom.copy() : new lo(this._isEnsureValidTopology, this._distanceTolerance).transform(this._inputGeom);
      }
    }, {
      key: "setDistanceTolerance",
      value: function setDistanceTolerance(t) {
        if (t < 0) throw new n("Tolerance must be non-negative");
        this._distanceTolerance = t;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return oo;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "simplify",
      value: function simplify(t, e) {
        var n = new oo(t);
        return n.setDistanceTolerance(e), n.getResultGeometry();
      }
    }]);

    return oo;
  }();

  var lo =
  /*#__PURE__*/
  function (_ye5) {
    _inherits(lo, _ye5);

    function lo() {
      var _this62;

      _classCallCheck(this, lo);

      _this62 = _possibleConstructorReturn(this, _getPrototypeOf(lo).call(this)), lo.constructor_.apply(_assertThisInitialized(_this62), arguments);
      return _this62;
    }

    _createClass(lo, [{
      key: "transformPolygon",
      value: function transformPolygon(t, e) {
        if (t.isEmpty()) return null;

        var n = _get(_getPrototypeOf(lo.prototype), "transformPolygon", this).call(this, t, e);

        return e instanceof Ft ? n : this.createValidArea(n);
      }
    }, {
      key: "createValidArea",
      value: function createValidArea(t) {
        return this._isEnsureValidTopology ? t.buffer(0) : t;
      }
    }, {
      key: "transformCoordinates",
      value: function transformCoordinates(t, e) {
        var n = t.toCoordinateArray();
        var s = null;
        return s = 0 === n.length ? new Array(0).fill(null) : io.simplify(n, this._distanceTolerance), this._factory.getCoordinateSequenceFactory().create(s);
      }
    }, {
      key: "transformMultiPolygon",
      value: function transformMultiPolygon(t, e) {
        var n = _get(_getPrototypeOf(lo.prototype), "transformMultiPolygon", this).call(this, t, e);

        return this.createValidArea(n);
      }
    }, {
      key: "transformLinearRing",
      value: function transformLinearRing(t, e) {
        var n = e instanceof Mt,
            s = _get(_getPrototypeOf(lo.prototype), "transformLinearRing", this).call(this, t, e);

        return !n || s instanceof Dt ? s : null;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return lo;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return lo;
  }(ye);

  lo.constructor_ = function () {
    this._isEnsureValidTopology = !0, this._distanceTolerance = null;
    var t = arguments[0],
        e = arguments[1];
    this._isEnsureValidTopology = t, this._distanceTolerance = e;
  }, oo.VWTransformer = lo, oo.constructor_ = function () {
    this._inputGeom = null, this._distanceTolerance = null, this._isEnsureValidTopology = !0;
    var t = arguments[0];
    this._inputGeom = t;
  };
  var ao = Object.freeze({
    DouglasPeuckerSimplifier: Wr,
    TopologyPreservingSimplifier: eo,
    VWSimplifier: oo
  });

  var co =
  /*#__PURE__*/
  function () {
    function co() {
      _classCallCheck(this, co);

      co.constructor_.apply(this, arguments);
    }

    _createClass(co, [{
      key: "splitAt",
      value: function splitAt() {
        if (1 === arguments.length) {
          var _t784 = arguments[0],
              _e617 = this._minimumLen / this._segLen;

          if (_t784.distance(this._seg.p0) < this._minimumLen) return this._splitPt = this._seg.pointAlong(_e617), null;
          if (_t784.distance(this._seg.p1) < this._minimumLen) return this._splitPt = co.pointAlongReverse(this._seg, _e617), null;
          this._splitPt = _t784;
        } else if (2 === arguments.length) {
          var _t785 = arguments[0],
              _e618 = arguments[1],
              _n434 = this.getConstrainedLength(_t785) / this._segLen;

          _e618.equals2D(this._seg.p0) ? this._splitPt = this._seg.pointAlong(_n434) : this._splitPt = co.pointAlongReverse(this._seg, _n434);
        }
      }
    }, {
      key: "setMinimumLength",
      value: function setMinimumLength(t) {
        this._minimumLen = t;
      }
    }, {
      key: "getConstrainedLength",
      value: function getConstrainedLength(t) {
        return t < this._minimumLen ? this._minimumLen : t;
      }
    }, {
      key: "getSplitPoint",
      value: function getSplitPoint() {
        return this._splitPt;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return co;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "pointAlongReverse",
      value: function pointAlongReverse(t, e) {
        var n = new g();
        return n.x = t.p1.x - e * (t.p1.x - t.p0.x), n.y = t.p1.y - e * (t.p1.y - t.p0.y), n;
      }
    }]);

    return co;
  }();

  co.constructor_ = function () {
    this._seg = null, this._segLen = null, this._splitPt = null, this._minimumLen = 0;
    var t = arguments[0];
    this._seg = t, this._segLen = t.getLength();
  };

  var ho =
  /*#__PURE__*/
  function () {
    function ho() {
      _classCallCheck(this, ho);

      ho.constructor_.apply(this, arguments);
    }

    _createClass(ho, [{
      key: "findSplitPoint",
      value: function findSplitPoint(t, e) {}
    }, {
      key: "getClass",
      value: function getClass() {
        return ho;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return ho;
  }();

  ho.constructor_ = function () {};

  var uo =
  /*#__PURE__*/
  function () {
    function uo() {
      _classCallCheck(this, uo);

      uo.constructor_.apply(this, arguments);
    }

    _createClass(uo, [{
      key: "findSplitPoint",
      value: function findSplitPoint(t, e) {
        var n = t.getLineSegment(),
            s = n.getLength() / 2,
            i = new co(n),
            r = uo.projectedSplitPoint(t, e);
        var o = 2 * r.distance(e) * .8;
        return o > s && (o = s), i.setMinimumLength(o), i.splitAt(r), i.getSplitPoint();
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return uo;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [ho];
      }
    }], [{
      key: "projectedSplitPoint",
      value: function projectedSplitPoint(t, e) {
        return t.getLineSegment().project(e);
      }
    }]);

    return uo;
  }();

  uo.constructor_ = function () {};

  var go =
  /*#__PURE__*/
  function () {
    function go() {
      _classCallCheck(this, go);

      go.constructor_.apply(this, arguments);
    }

    _createClass(go, [{
      key: "getClass",
      value: function getClass() {
        return go;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "triArea",
      value: function triArea(t, e, n) {
        return (e.x - t.x) * (n.y - t.y) - (e.y - t.y) * (n.x - t.x);
      }
    }, {
      key: "isInCircleDDNormalized",
      value: function isInCircleDDNormalized(t, e, n, s) {
        var i = R.valueOf(t.x).selfSubtract(s.x),
            r = R.valueOf(t.y).selfSubtract(s.y),
            o = R.valueOf(e.x).selfSubtract(s.x),
            l = R.valueOf(e.y).selfSubtract(s.y),
            a = R.valueOf(n.x).selfSubtract(s.x),
            c = R.valueOf(n.y).selfSubtract(s.y),
            h = i.multiply(l).selfSubtract(o.multiply(r)),
            u = o.multiply(c).selfSubtract(a.multiply(l)),
            g = a.multiply(r).selfSubtract(i.multiply(c)),
            d = i.multiply(i).selfAdd(r.multiply(r)),
            _ = o.multiply(o).selfAdd(l.multiply(l)),
            f = a.multiply(a).selfAdd(c.multiply(c));

        return d.selfMultiply(u).selfAdd(_.selfMultiply(g)).selfAdd(f.selfMultiply(h)).doubleValue() > 0;
      }
    }, {
      key: "checkRobustInCircle",
      value: function checkRobustInCircle(t, e, n, s) {
        var i = go.isInCircleNonRobust(t, e, n, s),
            r = go.isInCircleDDSlow(t, e, n, s),
            o = go.isInCircleCC(t, e, n, s),
            l = oe.circumcentre(t, e, n);
        O.out.println("p radius diff a = " + Math.abs(s.distance(l) - t.distance(l)) / t.distance(l)), i === r && i === o || (O.out.println("inCircle robustness failure (double result = " + i + ", DD result = " + r + ", CC result = " + o + ")"), O.out.println($t.toLineString(new Yt([t, e, n, s]))), O.out.println("Circumcentre = " + $t.toPoint(l) + " radius = " + t.distance(l)), O.out.println("p radius diff a = " + Math.abs(s.distance(l) / t.distance(l) - 1)), O.out.println("p radius diff b = " + Math.abs(s.distance(l) / e.distance(l) - 1)), O.out.println("p radius diff c = " + Math.abs(s.distance(l) / n.distance(l) - 1)), O.out.println());
      }
    }, {
      key: "isInCircleDDFast",
      value: function isInCircleDDFast(t, e, n, s) {
        var i = R.sqr(t.x).selfAdd(R.sqr(t.y)).selfMultiply(go.triAreaDDFast(e, n, s)),
            r = R.sqr(e.x).selfAdd(R.sqr(e.y)).selfMultiply(go.triAreaDDFast(t, n, s)),
            o = R.sqr(n.x).selfAdd(R.sqr(n.y)).selfMultiply(go.triAreaDDFast(t, e, s)),
            l = R.sqr(s.x).selfAdd(R.sqr(s.y)).selfMultiply(go.triAreaDDFast(t, e, n));
        return i.selfSubtract(r).selfAdd(o).selfSubtract(l).doubleValue() > 0;
      }
    }, {
      key: "isInCircleCC",
      value: function isInCircleCC(t, e, n, s) {
        var i = oe.circumcentre(t, e, n),
            r = t.distance(i);
        return s.distance(i) - r <= 0;
      }
    }, {
      key: "isInCircleNormalized",
      value: function isInCircleNormalized(t, e, n, s) {
        var i = t.x - s.x,
            r = t.y - s.y,
            o = e.x - s.x,
            l = e.y - s.y,
            a = n.x - s.x,
            c = n.y - s.y;
        return (i * i + r * r) * (o * c - a * l) + (o * o + l * l) * (a * r - i * c) + (a * a + c * c) * (i * l - o * r) > 0;
      }
    }, {
      key: "isInCircleDDSlow",
      value: function isInCircleDDSlow(t, e, n, s) {
        var i = R.valueOf(s.x),
            r = R.valueOf(s.y),
            o = R.valueOf(t.x),
            l = R.valueOf(t.y),
            a = R.valueOf(e.x),
            c = R.valueOf(e.y),
            h = R.valueOf(n.x),
            u = R.valueOf(n.y),
            g = o.multiply(o).add(l.multiply(l)).multiply(go.triAreaDDSlow(a, c, h, u, i, r)),
            d = a.multiply(a).add(c.multiply(c)).multiply(go.triAreaDDSlow(o, l, h, u, i, r)),
            _ = h.multiply(h).add(u.multiply(u)).multiply(go.triAreaDDSlow(o, l, a, c, i, r)),
            f = i.multiply(i).add(r.multiply(r)).multiply(go.triAreaDDSlow(o, l, a, c, h, u));

        return g.subtract(d).add(_).subtract(f).doubleValue() > 0;
      }
    }, {
      key: "isInCircleNonRobust",
      value: function isInCircleNonRobust(t, e, n, s) {
        return (t.x * t.x + t.y * t.y) * go.triArea(e, n, s) - (e.x * e.x + e.y * e.y) * go.triArea(t, n, s) + (n.x * n.x + n.y * n.y) * go.triArea(t, e, s) - (s.x * s.x + s.y * s.y) * go.triArea(t, e, n) > 0;
      }
    }, {
      key: "isInCircleRobust",
      value: function isInCircleRobust(t, e, n, s) {
        return go.isInCircleNormalized(t, e, n, s);
      }
    }, {
      key: "triAreaDDSlow",
      value: function triAreaDDSlow(t, e, n, s, i, r) {
        return n.subtract(t).multiply(r.subtract(e)).subtract(s.subtract(e).multiply(i.subtract(t)));
      }
    }, {
      key: "triAreaDDFast",
      value: function triAreaDDFast(t, e, n) {
        var s = R.valueOf(e.x).selfSubtract(t.x).selfMultiply(R.valueOf(n.y).selfSubtract(t.y)),
            i = R.valueOf(e.y).selfSubtract(t.y).selfMultiply(R.valueOf(n.x).selfSubtract(t.x));
        return s.selfSubtract(i);
      }
    }]);

    return go;
  }();

  go.constructor_ = function () {};

  var _o =
  /*#__PURE__*/
  function () {
    function _o() {
      _classCallCheck(this, _o);

      _o.constructor_.apply(this, arguments);
    }

    _createClass(_o, [{
      key: "circleCenter",
      value: function circleCenter(t, e) {
        var n = new _o(this.getX(), this.getY()),
            s = this.bisector(n, t),
            i = this.bisector(t, e),
            r = new b(s, i);
        var o = null;

        try {
          o = new _o(r.getX(), r.getY());
        } catch (s) {
          if (!(s instanceof S)) throw s;
          O.err.println("a: " + n + "  b: " + t + "  c: " + e), O.err.println(s);
        }

        return o;
      }
    }, {
      key: "dot",
      value: function dot(t) {
        return this._p.x * t.getX() + this._p.y * t.getY();
      }
    }, {
      key: "magn",
      value: function magn() {
        return Math.sqrt(this._p.x * this._p.x + this._p.y * this._p.y);
      }
    }, {
      key: "getZ",
      value: function getZ() {
        return this._p.z;
      }
    }, {
      key: "bisector",
      value: function bisector(t, e) {
        var n = e.getX() - t.getX(),
            s = e.getY() - t.getY(),
            i = new b(t.getX() + n / 2, t.getY() + s / 2, 1),
            r = new b(t.getX() - s + n / 2, t.getY() + n + s / 2, 1);
        return new b(i, r);
      }
    }, {
      key: "equals",
      value: function equals() {
        if (1 === arguments.length) {
          var _t786 = arguments[0];
          return this._p.x === _t786.getX() && this._p.y === _t786.getY();
        }

        if (2 === arguments.length) {
          var _t787 = arguments[0],
              _e619 = arguments[1];
          return this._p.distance(_t787.getCoordinate()) < _e619;
        }
      }
    }, {
      key: "getCoordinate",
      value: function getCoordinate() {
        return this._p;
      }
    }, {
      key: "isInCircle",
      value: function isInCircle(t, e, n) {
        return go.isInCircleRobust(t._p, e._p, n._p, this._p);
      }
    }, {
      key: "interpolateZValue",
      value: function interpolateZValue(t, e, n) {
        var s = t.getX(),
            i = t.getY(),
            r = e.getX() - s,
            o = n.getX() - s,
            l = e.getY() - i,
            a = n.getY() - i,
            c = r * a - o * l,
            h = this.getX() - s,
            u = this.getY() - i,
            g = (a * h - o * u) / c,
            d = (-l * h + r * u) / c;
        return t.getZ() + g * (e.getZ() - t.getZ()) + d * (n.getZ() - t.getZ());
      }
    }, {
      key: "midPoint",
      value: function midPoint(t) {
        var e = (this._p.x + t.getX()) / 2,
            n = (this._p.y + t.getY()) / 2,
            s = (this._p.z + t.getZ()) / 2;
        return new _o(e, n, s);
      }
    }, {
      key: "rightOf",
      value: function rightOf(t) {
        return this.isCCW(t.dest(), t.orig());
      }
    }, {
      key: "isCCW",
      value: function isCCW(t, e) {
        return (t._p.x - this._p.x) * (e._p.y - this._p.y) - (t._p.y - this._p.y) * (e._p.x - this._p.x) > 0;
      }
    }, {
      key: "getX",
      value: function getX() {
        return this._p.x;
      }
    }, {
      key: "crossProduct",
      value: function crossProduct(t) {
        return this._p.x * t.getY() - this._p.y * t.getX();
      }
    }, {
      key: "setZ",
      value: function setZ(t) {
        this._p.z = t;
      }
    }, {
      key: "times",
      value: function times(t) {
        return new _o(t * this._p.x, t * this._p.y);
      }
    }, {
      key: "cross",
      value: function cross() {
        return new _o(this._p.y, -this._p.x);
      }
    }, {
      key: "leftOf",
      value: function leftOf(t) {
        return this.isCCW(t.orig(), t.dest());
      }
    }, {
      key: "toString",
      value: function toString() {
        return "POINT (" + this._p.x + " " + this._p.y + ")";
      }
    }, {
      key: "sub",
      value: function sub(t) {
        return new _o(this._p.x - t.getX(), this._p.y - t.getY());
      }
    }, {
      key: "getY",
      value: function getY() {
        return this._p.y;
      }
    }, {
      key: "classify",
      value: function classify(t, e) {
        var n = e.sub(t),
            s = this.sub(t),
            i = n.crossProduct(s);
        return i > 0 ? _o.LEFT : i < 0 ? _o.RIGHT : n.getX() * s.getX() < 0 || n.getY() * s.getY() < 0 ? _o.BEHIND : n.magn() < s.magn() ? _o.BEYOND : t.equals(this) ? _o.ORIGIN : e.equals(this) ? _o.DESTINATION : _o.BETWEEN;
      }
    }, {
      key: "sum",
      value: function sum(t) {
        return new _o(this._p.x + t.getX(), this._p.y + t.getY());
      }
    }, {
      key: "distance",
      value: function distance(t, e) {
        return Math.sqrt(Math.pow(e.getX() - t.getX(), 2) + Math.pow(e.getY() - t.getY(), 2));
      }
    }, {
      key: "circumRadiusRatio",
      value: function circumRadiusRatio(t, e) {
        var n = this.circleCenter(t, e),
            s = this.distance(n, t);
        var i = this.distance(this, t),
            r = this.distance(t, e);
        return r < i && (i = r), (r = this.distance(e, this)) < i && (i = r), s / i;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return _o;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "interpolateZ",
      value: function interpolateZ() {
        if (3 === arguments.length) {
          var _t788 = arguments[0],
              _e620 = arguments[1],
              _n435 = arguments[2],
              _s287 = _e620.distance(_n435),
              _i155 = _t788.distance(_e620),
              _r78 = _n435.z - _e620.z;

          return _e620.z + _r78 * (_i155 / _s287);
        }

        if (4 === arguments.length) {
          var _t789 = arguments[0],
              _e621 = arguments[1],
              _n436 = arguments[2],
              _s288 = arguments[3],
              _i156 = _e621.x,
              _r79 = _e621.y,
              _o39 = _n436.x - _i156,
              _l31 = _s288.x - _i156,
              _a19 = _n436.y - _r79,
              _c15 = _s288.y - _r79,
              _h7 = _o39 * _c15 - _l31 * _a19,
              _u5 = _t789.x - _i156,
              _g2 = _t789.y - _r79,
              _d2 = (_c15 * _u5 - _l31 * _g2) / _h7,
              _2 = (-_a19 * _u5 + _o39 * _g2) / _h7;

          return _e621.z + _d2 * (_n436.z - _e621.z) + _2 * (_s288.z - _e621.z);
        }
      }
    }]);

    return _o;
  }();

  _o.constructor_ = function () {
    if (this._p = null, 1 === arguments.length) {
      var _t790 = arguments[0];
      this._p = new g(_t790);
    } else if (2 === arguments.length) {
      var _t791 = arguments[0],
          _e622 = arguments[1];
      this._p = new g(_t791, _e622);
    } else if (3 === arguments.length) {
      var _t792 = arguments[0],
          _e623 = arguments[1],
          _n437 = arguments[2];
      this._p = new g(_t792, _e623, _n437);
    }
  }, _o.LEFT = 0, _o.RIGHT = 1, _o.BEYOND = 2, _o.BEHIND = 3, _o.BETWEEN = 4, _o.ORIGIN = 5, _o.DESTINATION = 6;

  var fo =
  /*#__PURE__*/
  function (_o40) {
    _inherits(fo, _o40);

    function fo() {
      var _this63;

      _classCallCheck(this, fo);

      _this63 = _possibleConstructorReturn(this, _getPrototypeOf(fo).call(this)), fo.constructor_.apply(_assertThisInitialized(_this63), arguments);
      return _this63;
    }

    _createClass(fo, [{
      key: "getConstraint",
      value: function getConstraint() {
        return this._constraint;
      }
    }, {
      key: "setOnConstraint",
      value: function setOnConstraint(t) {
        this._isOnConstraint = t;
      }
    }, {
      key: "merge",
      value: function merge(t) {
        t._isOnConstraint && (this._isOnConstraint = !0, this._constraint = t._constraint);
      }
    }, {
      key: "isOnConstraint",
      value: function isOnConstraint() {
        return this._isOnConstraint;
      }
    }, {
      key: "setConstraint",
      value: function setConstraint(t) {
        this._isOnConstraint = !0, this._constraint = t;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return fo;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return fo;
  }(_o);

  fo.constructor_ = function () {
    this._isOnConstraint = null, this._constraint = null;
    var t = arguments[0];

    _o.constructor_.call(this, t);
  };

  var po =
  /*#__PURE__*/
  function () {
    function po() {
      _classCallCheck(this, po);

      po.constructor_.apply(this, arguments);
    }

    _createClass(po, [{
      key: "equalsNonOriented",
      value: function equalsNonOriented(t) {
        return !!this.equalsOriented(t) || !!this.equalsOriented(t.sym());
      }
    }, {
      key: "toLineSegment",
      value: function toLineSegment() {
        return new ne(this._vertex.getCoordinate(), this.dest().getCoordinate());
      }
    }, {
      key: "dest",
      value: function dest() {
        return this.sym().orig();
      }
    }, {
      key: "oNext",
      value: function oNext() {
        return this._next;
      }
    }, {
      key: "equalsOriented",
      value: function equalsOriented(t) {
        return !(!this.orig().getCoordinate().equals2D(t.orig().getCoordinate()) || !this.dest().getCoordinate().equals2D(t.dest().getCoordinate()));
      }
    }, {
      key: "dNext",
      value: function dNext() {
        return this.sym().oNext().sym();
      }
    }, {
      key: "lPrev",
      value: function lPrev() {
        return this._next.sym();
      }
    }, {
      key: "rPrev",
      value: function rPrev() {
        return this.sym().oNext();
      }
    }, {
      key: "rot",
      value: function rot() {
        return this._rot;
      }
    }, {
      key: "oPrev",
      value: function oPrev() {
        return this._rot._next._rot;
      }
    }, {
      key: "sym",
      value: function sym() {
        return this._rot._rot;
      }
    }, {
      key: "setOrig",
      value: function setOrig(t) {
        this._vertex = t;
      }
    }, {
      key: "lNext",
      value: function lNext() {
        return this.invRot().oNext().rot();
      }
    }, {
      key: "getLength",
      value: function getLength() {
        return this.orig().getCoordinate().distance(this.dest().getCoordinate());
      }
    }, {
      key: "invRot",
      value: function invRot() {
        return this._rot.sym();
      }
    }, {
      key: "setDest",
      value: function setDest(t) {
        this.sym().setOrig(t);
      }
    }, {
      key: "setData",
      value: function setData(t) {
        this._data = t;
      }
    }, {
      key: "getData",
      value: function getData() {
        return this._data;
      }
    }, {
      key: "delete",
      value: function _delete() {
        this._rot = null;
      }
    }, {
      key: "orig",
      value: function orig() {
        return this._vertex;
      }
    }, {
      key: "rNext",
      value: function rNext() {
        return this._rot._next.invRot();
      }
    }, {
      key: "toString",
      value: function toString() {
        var t = this._vertex.getCoordinate(),
            e = this.dest().getCoordinate();

        return $t.toLineString(t, e);
      }
    }, {
      key: "isLive",
      value: function isLive() {
        return null !== this._rot;
      }
    }, {
      key: "getPrimary",
      value: function getPrimary() {
        return this.orig().getCoordinate().compareTo(this.dest().getCoordinate()) <= 0 ? this : this.sym();
      }
    }, {
      key: "dPrev",
      value: function dPrev() {
        return this.invRot().oNext().invRot();
      }
    }, {
      key: "setNext",
      value: function setNext(t) {
        this._next = t;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return po;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "makeEdge",
      value: function makeEdge(t, e) {
        var n = new po(),
            s = new po(),
            i = new po(),
            r = new po();
        n._rot = s, s._rot = i, i._rot = r, r._rot = n, n.setNext(n), s.setNext(r), i.setNext(i), r.setNext(s);
        var o = n;
        return o.setOrig(t), o.setDest(e), o;
      }
    }, {
      key: "swap",
      value: function swap(t) {
        var e = t.oPrev(),
            n = t.sym().oPrev();
        po.splice(t, e), po.splice(t.sym(), n), po.splice(t, e.lNext()), po.splice(t.sym(), n.lNext()), t.setOrig(e.dest()), t.setDest(n.dest());
      }
    }, {
      key: "splice",
      value: function splice(t, e) {
        var n = t.oNext().rot(),
            s = e.oNext().rot(),
            i = e.oNext(),
            r = t.oNext(),
            o = s.oNext(),
            l = n.oNext();
        t.setNext(i), e.setNext(r), n.setNext(o), s.setNext(l);
      }
    }, {
      key: "connect",
      value: function connect(t, e) {
        var n = po.makeEdge(t.dest(), e.orig());
        return po.splice(n, t.lNext()), po.splice(n.sym(), e), n;
      }
    }]);

    return po;
  }();

  po.constructor_ = function () {
    this._rot = null, this._vertex = null, this._next = null, this._data = null;
  };

  var mo =
  /*#__PURE__*/
  function () {
    function mo() {
      _classCallCheck(this, mo);

      mo.constructor_.apply(this, arguments);
    }

    _createClass(mo, [{
      key: "insertSite",
      value: function insertSite(t) {
        var e = this._subdiv.locate(t);

        if (this._subdiv.isVertexOfEdge(e, t)) return e;
        this._subdiv.isOnEdge(e, t.getCoordinate()) && (e = e.oPrev(), this._subdiv.delete(e.oNext()));

        var n = this._subdiv.makeEdge(e.orig(), t);

        po.splice(n, e);
        var s = n;

        do {
          e = (n = this._subdiv.connect(e, n.sym())).oPrev();
        } while (e.lNext() !== s);

        for (;;) {
          var _i157 = e.oPrev();

          if (_i157.dest().rightOf(e) && t.isInCircle(e.orig(), _i157.dest(), e.dest())) po.swap(e), e = e.oPrev();else {
            if (e.oNext() === s) return n;
            e = e.oNext().lPrev();
          }
        }
      }
    }, {
      key: "insertSites",
      value: function insertSites(t) {
        for (var _e624 = t.iterator(); _e624.hasNext();) {
          var _t793 = _e624.next();

          this.insertSite(_t793);
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return mo;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return mo;
  }();

  mo.constructor_ = function () {
    this._subdiv = null, this._isUsingTolerance = !1;
    var t = arguments[0];
    this._subdiv = t, this._isUsingTolerance = t.getTolerance() > 0;
  };

  var yo =
  /*#__PURE__*/
  function () {
    function yo() {
      _classCallCheck(this, yo);

      yo.constructor_.apply(this, arguments);
    }

    _createClass(yo, [{
      key: "locate",
      value: function locate(t) {}
    }, {
      key: "getClass",
      value: function getClass() {
        return yo;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return yo;
  }();

  yo.constructor_ = function () {};

  var xo =
  /*#__PURE__*/
  function () {
    function xo() {
      _classCallCheck(this, xo);

      xo.constructor_.apply(this, arguments);
    }

    _createClass(xo, [{
      key: "init",
      value: function init() {
        this._lastEdge = this.findEdge();
      }
    }, {
      key: "locate",
      value: function locate(t) {
        this._lastEdge.isLive() || this.init();

        var e = this._subdiv.locateFromEdge(t, this._lastEdge);

        return this._lastEdge = e, e;
      }
    }, {
      key: "findEdge",
      value: function findEdge() {
        return this._subdiv.getEdges().iterator().next();
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return xo;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [yo];
      }
    }]);

    return xo;
  }();

  xo.constructor_ = function () {
    this._subdiv = null, this._lastEdge = null;
    var t = arguments[0];
    this._subdiv = t, this.init();
  };

  var Eo =
  /*#__PURE__*/
  function (_c16) {
    _inherits(Eo, _c16);

    function Eo() {
      var _this64;

      _classCallCheck(this, Eo);

      _this64 = _possibleConstructorReturn(this, _getPrototypeOf(Eo).call(this)), Eo.constructor_.apply(_assertThisInitialized(_this64), arguments);
      return _this64;
    }

    _createClass(Eo, [{
      key: "getSegment",
      value: function getSegment() {
        return this._seg;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Eo;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "msgWithSpatial",
      value: function msgWithSpatial(t, e) {
        return null !== e ? t + " [ " + e + " ]" : t;
      }
    }]);

    return Eo;
  }(c);

  Eo.constructor_ = function () {
    if (this._seg = null, 1 === arguments.length) {
      if ("string" == typeof arguments[0]) {
        var _t794 = arguments[0];
        c.constructor_.call(this, _t794);
      } else if (arguments[0] instanceof ne) {
        var _t795 = arguments[0];
        c.constructor_.call(this, "Locate failed to converge (at edge: " + _t795 + ").  Possible causes include invalid Subdivision topology or very close sites"), this._seg = new ne(_t795);
      }
    } else if (2 === arguments.length) {
      var _t796 = arguments[0],
          _e625 = arguments[1];
      c.constructor_.call(this, Eo.msgWithSpatial(_t796, _e625)), this._seg = new ne(_e625);
    }
  };

  var Io =
  /*#__PURE__*/
  function () {
    function Io() {
      _classCallCheck(this, Io);

      Io.constructor_.apply(this, arguments);
    }

    _createClass(Io, [{
      key: "visit",
      value: function visit(t) {}
    }, {
      key: "getClass",
      value: function getClass() {
        return Io;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Io;
  }();

  Io.constructor_ = function () {};

  var No =
  /*#__PURE__*/
  function () {
    function No() {
      _classCallCheck(this, No);

      No.constructor_.apply(this, arguments);
    }

    _createClass(No, [{
      key: "getTriangleVertices",
      value: function getTriangleVertices(t) {
        var e = new wo();
        return this.visitTriangles(e, t), e.getTriangleVertices();
      }
    }, {
      key: "isFrameVertex",
      value: function isFrameVertex(t) {
        return !!t.equals(this._frameVertex[0]) || !!t.equals(this._frameVertex[1]) || !!t.equals(this._frameVertex[2]);
      }
    }, {
      key: "isVertexOfEdge",
      value: function isVertexOfEdge(t, e) {
        return !(!e.equals(t.orig(), this._tolerance) && !e.equals(t.dest(), this._tolerance));
      }
    }, {
      key: "connect",
      value: function connect(t, e) {
        var n = po.connect(t, e);
        return this._quadEdges.add(n), n;
      }
    }, {
      key: "getVoronoiCellPolygon",
      value: function getVoronoiCellPolygon(t, e) {
        var n = new x(),
            s = t;

        do {
          var _e626 = t.rot().orig().getCoordinate();

          n.add(_e626), t = t.oPrev();
        } while (t !== s);

        var i = new I();
        i.addAll(n, !1), i.closeRing(), i.size() < 4 && (O.out.println(i), i.add(i.get(i.size() - 1), !0));
        var r = i.toCoordinateArray(),
            o = e.createPolygon(e.createLinearRing(r)),
            l = s.orig();
        return o.setUserData(l.getCoordinate()), o;
      }
    }, {
      key: "setLocator",
      value: function setLocator(t) {
        this._locator = t;
      }
    }, {
      key: "initSubdiv",
      value: function initSubdiv() {
        var t = this.makeEdge(this._frameVertex[0], this._frameVertex[1]),
            e = this.makeEdge(this._frameVertex[1], this._frameVertex[2]);
        po.splice(t.sym(), e);
        var n = this.makeEdge(this._frameVertex[2], this._frameVertex[0]);
        return po.splice(e.sym(), n), po.splice(n.sym(), t), t;
      }
    }, {
      key: "isFrameBorderEdge",
      value: function isFrameBorderEdge(t) {
        var e = new Array(3).fill(null);
        No.getTriangleEdges(t, e);
        var n = new Array(3).fill(null);
        No.getTriangleEdges(t.sym(), n);
        var s = t.lNext().dest();
        if (this.isFrameVertex(s)) return !0;
        var i = t.sym().lNext().dest();
        return !!this.isFrameVertex(i);
      }
    }, {
      key: "makeEdge",
      value: function makeEdge(t, e) {
        var n = po.makeEdge(t, e);
        return this._quadEdges.add(n), n;
      }
    }, {
      key: "visitTriangles",
      value: function visitTriangles(t, e) {
        this._visitedKey++;
        var n = new ln();
        n.push(this._startingEdge);
        var s = new J();

        for (; !n.empty();) {
          var _i158 = n.pop();

          if (!s.contains(_i158)) {
            var _r80 = this.fetchTriangleToVisit(_i158, n, e, s);

            null !== _r80 && t.visit(_r80);
          }
        }
      }
    }, {
      key: "isFrameEdge",
      value: function isFrameEdge(t) {
        return !(!this.isFrameVertex(t.orig()) && !this.isFrameVertex(t.dest()));
      }
    }, {
      key: "isOnEdge",
      value: function isOnEdge(t, e) {
        return this._seg.setCoordinates(t.orig().getCoordinate(), t.dest().getCoordinate()), this._seg.distance(e) < this._edgeCoincidenceTolerance;
      }
    }, {
      key: "getEnvelope",
      value: function getEnvelope() {
        return new N(this._frameEnv);
      }
    }, {
      key: "createFrame",
      value: function createFrame(t) {
        var e = t.getWidth(),
            n = t.getHeight();
        var s = 0;
        s = e > n ? 10 * e : 10 * n, this._frameVertex[0] = new _o((t.getMaxX() + t.getMinX()) / 2, t.getMaxY() + s), this._frameVertex[1] = new _o(t.getMinX() - s, t.getMinY() - s), this._frameVertex[2] = new _o(t.getMaxX() + s, t.getMinY() - s), this._frameEnv = new N(this._frameVertex[0].getCoordinate(), this._frameVertex[1].getCoordinate()), this._frameEnv.expandToInclude(this._frameVertex[2].getCoordinate());
      }
    }, {
      key: "getTriangleCoordinates",
      value: function getTriangleCoordinates(t) {
        var e = new Lo();
        return this.visitTriangles(e, t), e.getTriangles();
      }
    }, {
      key: "getVertices",
      value: function getVertices(t) {
        var e = new J();

        for (var _n438 = this._quadEdges.iterator(); _n438.hasNext();) {
          var _s289 = _n438.next(),
              _i159 = _s289.orig();

          !t && this.isFrameVertex(_i159) || e.add(_i159);

          var _r81 = _s289.dest();

          !t && this.isFrameVertex(_r81) || e.add(_r81);
        }

        return e;
      }
    }, {
      key: "fetchTriangleToVisit",
      value: function fetchTriangleToVisit(t, e, n, s) {
        var i = t,
            r = 0,
            o = !1;

        do {
          this._triEdges[r] = i, this.isFrameEdge(i) && (o = !0);

          var _t797 = i.sym();

          s.contains(_t797) || e.push(_t797), s.add(i), r++, i = i.lNext();
        } while (i !== t);

        return o && !n ? null : this._triEdges;
      }
    }, {
      key: "getEdges",
      value: function getEdges() {
        if (0 === arguments.length) return this._quadEdges;

        if (1 === arguments.length) {
          var _t798 = arguments[0],
              _e627 = this.getPrimaryEdges(!1),
              _n439 = new Array(_e627.size()).fill(null);

          var _s290 = 0;

          for (var _i160 = _e627.iterator(); _i160.hasNext();) {
            var _e628 = _i160.next();

            _n439[_s290++] = _t798.createLineString([_e628.orig().getCoordinate(), _e628.dest().getCoordinate()]);
          }

          return _t798.createMultiLineString(_n439);
        }
      }
    }, {
      key: "getVertexUniqueEdges",
      value: function getVertexUniqueEdges(t) {
        var e = new x(),
            n = new J();

        for (var _s291 = this._quadEdges.iterator(); _s291.hasNext();) {
          var _i161 = _s291.next(),
              _r82 = _i161.orig();

          n.contains(_r82) || (n.add(_r82), !t && this.isFrameVertex(_r82) || e.add(_i161));

          var _o41 = _i161.sym(),
              _l32 = _o41.orig();

          n.contains(_l32) || (n.add(_l32), !t && this.isFrameVertex(_l32) || e.add(_o41));
        }

        return e;
      }
    }, {
      key: "getTriangleEdges",
      value: function getTriangleEdges(t) {
        var e = new So();
        return this.visitTriangles(e, t), e.getTriangleEdges();
      }
    }, {
      key: "getPrimaryEdges",
      value: function getPrimaryEdges(t) {
        this._visitedKey++;
        var e = new x(),
            n = new ln();
        n.push(this._startingEdge);
        var s = new J();

        for (; !n.empty();) {
          var _i162 = n.pop();

          if (!s.contains(_i162)) {
            var _r83 = _i162.getPrimary();

            !t && this.isFrameEdge(_r83) || e.add(_r83), n.push(_i162.oNext()), n.push(_i162.sym().oNext()), s.add(_i162), s.add(_i162.sym());
          }
        }

        return e;
      }
    }, {
      key: "delete",
      value: function _delete(t) {
        po.splice(t, t.oPrev()), po.splice(t.sym(), t.sym().oPrev());
        var e = t.sym(),
            n = t.rot(),
            s = t.rot().sym();
        this._quadEdges.remove(t), this._quadEdges.remove(e), this._quadEdges.remove(n), this._quadEdges.remove(s), t.delete(), e.delete(), n.delete(), s.delete();
      }
    }, {
      key: "locateFromEdge",
      value: function locateFromEdge(t, e) {
        var n = 0;

        var s = this._quadEdges.size();

        var i = e;

        for (;;) {
          if (++n > s) throw new Eo(i.toLineSegment());
          if (t.equals(i.orig()) || t.equals(i.dest())) break;
          if (t.rightOf(i)) i = i.sym();else if (t.rightOf(i.oNext())) {
            if (t.rightOf(i.dPrev())) break;
            i = i.dPrev();
          } else i = i.oNext();
        }

        return i;
      }
    }, {
      key: "getTolerance",
      value: function getTolerance() {
        return this._tolerance;
      }
    }, {
      key: "getVoronoiCellPolygons",
      value: function getVoronoiCellPolygons(t) {
        this.visitTriangles(new Co(), !0);
        var e = new x();

        for (var _n440 = this.getVertexUniqueEdges(!1).iterator(); _n440.hasNext();) {
          var _s292 = _n440.next();

          e.add(this.getVoronoiCellPolygon(_s292, t));
        }

        return e;
      }
    }, {
      key: "getVoronoiDiagram",
      value: function getVoronoiDiagram(t) {
        var e = this.getVoronoiCellPolygons(t);
        return t.createGeometryCollection(Wt.toGeometryArray(e));
      }
    }, {
      key: "getTriangles",
      value: function getTriangles(t) {
        var e = this.getTriangleCoordinates(!1),
            n = new Array(e.size()).fill(null);
        var s = 0;

        for (var _i163 = e.iterator(); _i163.hasNext();) {
          var _e629 = _i163.next();

          n[s++] = t.createPolygon(t.createLinearRing(_e629));
        }

        return t.createGeometryCollection(n);
      }
    }, {
      key: "insertSite",
      value: function insertSite(t) {
        var e = this.locate(t);
        if (t.equals(e.orig(), this._tolerance) || t.equals(e.dest(), this._tolerance)) return e;
        var n = this.makeEdge(e.orig(), t);
        po.splice(n, e);
        var s = n;

        do {
          e = (n = this.connect(e, n.sym())).oPrev();
        } while (e.lNext() !== s);

        return s;
      }
    }, {
      key: "locate",
      value: function locate() {
        if (1 === arguments.length) {
          if (arguments[0] instanceof _o) {
            var _t799 = arguments[0];
            return this._locator.locate(_t799);
          }

          if (arguments[0] instanceof g) {
            var _t800 = arguments[0];
            return this._locator.locate(new _o(_t800));
          }
        } else if (2 === arguments.length) {
          var _t801 = arguments[0],
              _e630 = arguments[1],
              _n441 = this._locator.locate(new _o(_t801));

          if (null === _n441) return null;
          var _s293 = _n441;
          _n441.dest().getCoordinate().equals2D(_t801) && (_s293 = _n441.sym());
          var _i164 = _s293;

          do {
            if (_i164.dest().getCoordinate().equals2D(_e630)) return _i164;
            _i164 = _i164.oNext();
          } while (_i164 !== _s293);

          return null;
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return No;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "getTriangleEdges",
      value: function getTriangleEdges(t, e) {
        if (e[0] = t, e[1] = e[0].lNext(), e[2] = e[1].lNext(), e[2].lNext() !== e[0]) throw new n("Edges do not form a triangle");
      }
    }]);

    return No;
  }();

  var Co =
  /*#__PURE__*/
  function () {
    function Co() {
      _classCallCheck(this, Co);

      Co.constructor_.apply(this, arguments);
    }

    _createClass(Co, [{
      key: "visit",
      value: function visit(t) {
        var e = t[0].orig().getCoordinate(),
            n = t[1].orig().getCoordinate(),
            s = t[2].orig().getCoordinate(),
            i = oe.circumcentre(e, n, s),
            r = new _o(i);

        for (var _e631 = 0; _e631 < 3; _e631++) {
          t[_e631].rot().setOrig(r);
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Co;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [Io];
      }
    }]);

    return Co;
  }();

  Co.constructor_ = function () {};

  var So =
  /*#__PURE__*/
  function () {
    function So() {
      _classCallCheck(this, So);

      So.constructor_.apply(this, arguments);
    }

    _createClass(So, [{
      key: "getTriangleEdges",
      value: function getTriangleEdges() {
        return this._triList;
      }
    }, {
      key: "visit",
      value: function visit(t) {
        this._triList.add(t);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return So;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [Io];
      }
    }]);

    return So;
  }();

  So.constructor_ = function () {
    this._triList = new x();
  };

  var wo =
  /*#__PURE__*/
  function () {
    function wo() {
      _classCallCheck(this, wo);

      wo.constructor_.apply(this, arguments);
    }

    _createClass(wo, [{
      key: "visit",
      value: function visit(t) {
        this._triList.add([t[0].orig(), t[1].orig(), t[2].orig()]);
      }
    }, {
      key: "getTriangleVertices",
      value: function getTriangleVertices() {
        return this._triList;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return wo;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [Io];
      }
    }]);

    return wo;
  }();

  wo.constructor_ = function () {
    this._triList = new x();
  };

  var Lo =
  /*#__PURE__*/
  function () {
    function Lo() {
      _classCallCheck(this, Lo);

      Lo.constructor_.apply(this, arguments);
    }

    _createClass(Lo, [{
      key: "checkTriangleSize",
      value: function checkTriangleSize(t) {
        var e = "";
        t.length >= 2 ? e = $t.toLineString(t[0], t[1]) : t.length >= 1 && (e = $t.toPoint(t[0]));
      }
    }, {
      key: "visit",
      value: function visit(t) {
        this._coordList.clear();

        for (var _e632 = 0; _e632 < 3; _e632++) {
          var _n442 = t[_e632].orig();

          this._coordList.add(_n442.getCoordinate());
        }

        if (this._coordList.size() > 0) {
          this._coordList.closeRing();

          var _t802 = this._coordList.toCoordinateArray();

          if (4 !== _t802.length) return null;

          this._triCoords.add(_t802);
        }
      }
    }, {
      key: "getTriangles",
      value: function getTriangles() {
        return this._triCoords;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Lo;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [Io];
      }
    }]);

    return Lo;
  }();

  Lo.constructor_ = function () {
    this._coordList = new I(), this._triCoords = new x();
  }, No.TriangleCircumcentreVisitor = Co, No.TriangleEdgesListVisitor = So, No.TriangleVertexListVisitor = wo, No.TriangleCoordinatesVisitor = Lo, No.constructor_ = function () {
    this._visitedKey = 0, this._quadEdges = new x(), this._startingEdge = null, this._tolerance = null, this._edgeCoincidenceTolerance = null, this._frameVertex = new Array(3).fill(null), this._frameEnv = null, this._locator = null, this._seg = new ne(), this._triEdges = new Array(3).fill(null);
    var t = arguments[0],
        e = arguments[1];
    this._tolerance = e, this._edgeCoincidenceTolerance = e / No.EDGE_COINCIDENCE_TOL_FACTOR, this.createFrame(t), this._startingEdge = this.initSubdiv(), this._locator = new xo(this);
  }, No.EDGE_COINCIDENCE_TOL_FACTOR = 1e3;

  var To =
  /*#__PURE__*/
  function () {
    function To() {
      _classCallCheck(this, To);

      To.constructor_.apply(this, arguments);
    }

    _createClass(To, [{
      key: "getLineSegment",
      value: function getLineSegment() {
        return this._ls;
      }
    }, {
      key: "getEndZ",
      value: function getEndZ() {
        return this._ls.getCoordinate(1).z;
      }
    }, {
      key: "getStartZ",
      value: function getStartZ() {
        return this._ls.getCoordinate(0).z;
      }
    }, {
      key: "intersection",
      value: function intersection(t) {
        return this._ls.intersection(t.getLineSegment());
      }
    }, {
      key: "getStart",
      value: function getStart() {
        return this._ls.getCoordinate(0);
      }
    }, {
      key: "getEnd",
      value: function getEnd() {
        return this._ls.getCoordinate(1);
      }
    }, {
      key: "getEndY",
      value: function getEndY() {
        return this._ls.getCoordinate(1).y;
      }
    }, {
      key: "getStartX",
      value: function getStartX() {
        return this._ls.getCoordinate(0).x;
      }
    }, {
      key: "equalsTopo",
      value: function equalsTopo(t) {
        return this._ls.equalsTopo(t.getLineSegment());
      }
    }, {
      key: "getStartY",
      value: function getStartY() {
        return this._ls.getCoordinate(0).y;
      }
    }, {
      key: "setData",
      value: function setData(t) {
        this._data = t;
      }
    }, {
      key: "getData",
      value: function getData() {
        return this._data;
      }
    }, {
      key: "getEndX",
      value: function getEndX() {
        return this._ls.getCoordinate(1).x;
      }
    }, {
      key: "toString",
      value: function toString() {
        return this._ls.toString();
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return To;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return To;
  }();

  To.constructor_ = function () {
    if (this._ls = null, this._data = null, 2 === arguments.length) {
      var _t803 = arguments[0],
          _e633 = arguments[1];
      this._ls = new ne(_t803, _e633);
    } else if (3 === arguments.length) {
      var _t804 = arguments[0],
          _e634 = arguments[1],
          _n443 = arguments[2];
      this._ls = new ne(_t804, _e634), this._data = _n443;
    } else if (6 === arguments.length) {
      var _t805 = arguments[0],
          _e635 = arguments[1],
          _n444 = arguments[2],
          _s294 = arguments[3],
          _i165 = arguments[4],
          _r84 = arguments[5];
      To.constructor_.call(this, new g(_t805, _e635, _n444), new g(_s294, _i165, _r84));
    } else if (7 === arguments.length) {
      var _t806 = arguments[0],
          _e636 = arguments[1],
          _n445 = arguments[2],
          _s295 = arguments[3],
          _i166 = arguments[4],
          _r85 = arguments[5],
          _o42 = arguments[6];
      To.constructor_.call(this, new g(_t806, _e636, _n445), new g(_s295, _i166, _r85), _o42);
    }
  };

  var Ro =
  /*#__PURE__*/
  function () {
    function Ro() {
      _classCallCheck(this, Ro);

      Ro.constructor_.apply(this, arguments);
    }

    _createClass(Ro, [{
      key: "getInitialVertices",
      value: function getInitialVertices() {
        return this._initialVertices;
      }
    }, {
      key: "getKDT",
      value: function getKDT() {
        return this._kdt;
      }
    }, {
      key: "enforceConstraints",
      value: function enforceConstraints() {
        this.addConstraintVertices();
        var t = 0,
            e = 0;

        do {
          e = this.enforceGabriel(this._segments), t++;
        } while (e > 0 && t < Ro.MAX_SPLIT_ITER);
      }
    }, {
      key: "insertSites",
      value: function insertSites(t) {
        for (var _e637 = t.iterator(); _e637.hasNext();) {
          var _t807 = _e637.next();

          this.insertSite(_t807);
        }
      }
    }, {
      key: "getVertexFactory",
      value: function getVertexFactory() {
        return this._vertexFactory;
      }
    }, {
      key: "getPointArray",
      value: function getPointArray() {
        var t = new Array(this._initialVertices.size() + this._segVertices.size()).fill(null);
        var e = 0;

        for (var _n446 = this._initialVertices.iterator(); _n446.hasNext();) {
          var _s296 = _n446.next();

          t[e++] = _s296.getCoordinate();
        }

        for (var _n447 = this._segVertices.iterator(); _n447.hasNext();) {
          var _s297 = _n447.next();

          t[e++] = _s297.getCoordinate();
        }

        return t;
      }
    }, {
      key: "setConstraints",
      value: function setConstraints(t, e) {
        this._segments = t, this._segVertices = e;
      }
    }, {
      key: "computeConvexHull",
      value: function computeConvexHull() {
        var t = new Wt(),
            e = this.getPointArray(),
            n = new cn(e, t);
        this._convexHull = n.getConvexHull();
      }
    }, {
      key: "addConstraintVertices",
      value: function addConstraintVertices() {
        this.computeConvexHull(), this.insertSites(this._segVertices);
      }
    }, {
      key: "findNonGabrielPoint",
      value: function findNonGabrielPoint(t) {
        var e = t.getStart(),
            n = t.getEnd(),
            s = new g((e.x + n.x) / 2, (e.y + n.y) / 2),
            r = e.distance(s),
            o = new N(s);
        o.expandBy(r);

        var l = this._kdt.query(o);

        var a = null,
            c = i.MAX_VALUE;

        for (var _t808 = l.iterator(); _t808.hasNext();) {
          var _i167 = _t808.next().getCoordinate();

          if (_i167.equals2D(e) || _i167.equals2D(n)) continue;

          var _o43 = s.distance(_i167);

          if (_o43 < r) {
            var _t809 = _o43;
            (null === a || _t809 < c) && (a = _i167, c = _t809);
          }
        }

        return a;
      }
    }, {
      key: "getConstraintSegments",
      value: function getConstraintSegments() {
        return this._segments;
      }
    }, {
      key: "setSplitPointFinder",
      value: function setSplitPointFinder(t) {
        this._splitFinder = t;
      }
    }, {
      key: "getConvexHull",
      value: function getConvexHull() {
        return this._convexHull;
      }
    }, {
      key: "getTolerance",
      value: function getTolerance() {
        return this._tolerance;
      }
    }, {
      key: "enforceGabriel",
      value: function enforceGabriel(t) {
        var e = new x();
        var n = 0;
        var s = new x();

        for (var _i168 = t.iterator(); _i168.hasNext();) {
          var _t810 = _i168.next(),
              _r86 = this.findNonGabrielPoint(_t810);

          if (null === _r86) continue;
          this._splitPt = this._splitFinder.findSplitPoint(_t810, _r86);

          var _o44 = this.createVertex(this._splitPt, _t810);

          this.insertSite(_o44).getCoordinate().equals2D(this._splitPt);

          var _l33 = new To(_t810.getStartX(), _t810.getStartY(), _t810.getStartZ(), _o44.getX(), _o44.getY(), _o44.getZ(), _t810.getData()),
              _a20 = new To(_o44.getX(), _o44.getY(), _o44.getZ(), _t810.getEndX(), _t810.getEndY(), _t810.getEndZ(), _t810.getData());

          e.add(_l33), e.add(_a20), s.add(_t810), n += 1;
        }

        return t.removeAll(s), t.addAll(e), n;
      }
    }, {
      key: "createVertex",
      value: function createVertex() {
        if (1 === arguments.length) {
          var _t811 = arguments[0];
          var _e638 = null;
          return _e638 = null !== this._vertexFactory ? this._vertexFactory.createVertex(_t811, null) : new fo(_t811);
        }

        if (2 === arguments.length) {
          var _t812 = arguments[0],
              _e639 = arguments[1];
          var _n448 = null;
          return (_n448 = null !== this._vertexFactory ? this._vertexFactory.createVertex(_t812, _e639) : new fo(_t812)).setOnConstraint(!0), _n448;
        }
      }
    }, {
      key: "getSubdivision",
      value: function getSubdivision() {
        return this._subdiv;
      }
    }, {
      key: "computeBoundingBox",
      value: function computeBoundingBox() {
        var t = Ro.computeVertexEnvelope(this._initialVertices),
            e = Ro.computeVertexEnvelope(this._segVertices),
            n = new N(t);
        n.expandToInclude(e);
        var s = .2 * n.getWidth(),
            i = .2 * n.getHeight(),
            r = Math.max(s, i);
        this._computeAreaEnv = new N(n), this._computeAreaEnv.expandBy(r);
      }
    }, {
      key: "setVertexFactory",
      value: function setVertexFactory(t) {
        this._vertexFactory = t;
      }
    }, {
      key: "formInitialDelaunay",
      value: function formInitialDelaunay() {
        this.computeBoundingBox(), this._subdiv = new No(this._computeAreaEnv, this._tolerance), this._subdiv.setLocator(new xo(this._subdiv)), this._incDel = new mo(this._subdiv), this.insertSites(this._initialVertices);
      }
    }, {
      key: "insertSite",
      value: function insertSite() {
        if (arguments[0] instanceof fo) {
          var _t813 = arguments[0],
              _e640 = this._kdt.insert(_t813.getCoordinate(), _t813);

          if (_e640.isRepeated()) {
            var _n449 = _e640.getData();

            return _n449.merge(_t813), _n449;
          }

          return this._incDel.insertSite(_t813), _t813;
        }

        if (arguments[0] instanceof g) {
          var _t814 = arguments[0];
          this.insertSite(this.createVertex(_t814));
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Ro;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "computeVertexEnvelope",
      value: function computeVertexEnvelope(t) {
        var e = new N();

        for (var _n450 = t.iterator(); _n450.hasNext();) {
          var _t815 = _n450.next();

          e.expandToInclude(_t815.getCoordinate());
        }

        return e;
      }
    }]);

    return Ro;
  }();

  Ro.constructor_ = function () {
    this._initialVertices = null, this._segVertices = null, this._segments = new x(), this._subdiv = null, this._incDel = null, this._convexHull = null, this._splitFinder = new uo(), this._kdt = null, this._vertexFactory = null, this._computeAreaEnv = null, this._splitPt = null, this._tolerance = null;
    var t = arguments[0],
        e = arguments[1];
    this._initialVertices = new x(t), this._tolerance = e, this._kdt = new ns(e);
  }, Ro.MAX_SPLIT_ITER = 99;

  var Po =
  /*#__PURE__*/
  function () {
    function Po() {
      _classCallCheck(this, Po);

      Po.constructor_.apply(this, arguments);
    }

    _createClass(Po, [{
      key: "create",
      value: function create() {
        if (null !== this._subdiv) return null;
        var t = Po.envelope(this._siteCoords),
            e = Po.toVertices(this._siteCoords);
        this._subdiv = new No(t, this._tolerance), new mo(this._subdiv).insertSites(e);
      }
    }, {
      key: "setTolerance",
      value: function setTolerance(t) {
        this._tolerance = t;
      }
    }, {
      key: "setSites",
      value: function setSites() {
        if (arguments[0] instanceof q) {
          var _t816 = arguments[0];
          this._siteCoords = Po.extractUniqueCoordinates(_t816);
        } else if (_(arguments[0], f)) {
          var _t817 = arguments[0];
          this._siteCoords = Po.unique(X.toCoordinateArray(_t817));
        }
      }
    }, {
      key: "getEdges",
      value: function getEdges(t) {
        return this.create(), this._subdiv.getEdges(t);
      }
    }, {
      key: "getSubdivision",
      value: function getSubdivision() {
        return this.create(), this._subdiv;
      }
    }, {
      key: "getTriangles",
      value: function getTriangles(t) {
        return this.create(), this._subdiv.getTriangles(t);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Po;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "extractUniqueCoordinates",
      value: function extractUniqueCoordinates(t) {
        if (null === t) return new I();
        var e = t.getCoordinates();
        return Po.unique(e);
      }
    }, {
      key: "envelope",
      value: function envelope(t) {
        var e = new N();

        for (var _n451 = t.iterator(); _n451.hasNext();) {
          var _t818 = _n451.next();

          e.expandToInclude(_t818);
        }

        return e;
      }
    }, {
      key: "unique",
      value: function unique(t) {
        var e = X.copyDeep(t);
        return ut.sort(e), new I(e, !1);
      }
    }, {
      key: "toVertices",
      value: function toVertices(t) {
        var e = new x();

        for (var _n452 = t.iterator(); _n452.hasNext();) {
          var _t819 = _n452.next();

          e.add(new _o(_t819));
        }

        return e;
      }
    }]);

    return Po;
  }();

  Po.constructor_ = function () {
    this._siteCoords = null, this._tolerance = 0, this._subdiv = null;
  };

  var vo =
  /*#__PURE__*/
  function () {
    function vo() {
      _classCallCheck(this, vo);

      vo.constructor_.apply(this, arguments);
    }

    _createClass(vo, [{
      key: "createSiteVertices",
      value: function createSiteVertices(t) {
        var e = new x();

        for (var _n453 = t.iterator(); _n453.hasNext();) {
          var _t820 = _n453.next();

          this._constraintVertexMap.containsKey(_t820) || e.add(new fo(_t820));
        }

        return e;
      }
    }, {
      key: "create",
      value: function create() {
        if (null !== this._subdiv) return null;
        var t = Po.envelope(this._siteCoords);
        var e = new x();
        null !== this._constraintLines && (t.expandToInclude(this._constraintLines.getEnvelopeInternal()), this.createVertices(this._constraintLines), e = vo.createConstraintSegments(this._constraintLines));
        var n = this.createSiteVertices(this._siteCoords),
            s = new Ro(n, this._tolerance);
        s.setConstraints(e, new x(this._constraintVertexMap.values())), s.formInitialDelaunay(), s.enforceConstraints(), this._subdiv = s.getSubdivision();
      }
    }, {
      key: "setTolerance",
      value: function setTolerance(t) {
        this._tolerance = t;
      }
    }, {
      key: "setConstraints",
      value: function setConstraints(t) {
        this._constraintLines = t;
      }
    }, {
      key: "setSites",
      value: function setSites(t) {
        this._siteCoords = Po.extractUniqueCoordinates(t);
      }
    }, {
      key: "getEdges",
      value: function getEdges(t) {
        return this.create(), this._subdiv.getEdges(t);
      }
    }, {
      key: "getSubdivision",
      value: function getSubdivision() {
        return this.create(), this._subdiv;
      }
    }, {
      key: "getTriangles",
      value: function getTriangles(t) {
        return this.create(), this._subdiv.getTriangles(t);
      }
    }, {
      key: "createVertices",
      value: function createVertices(t) {
        var e = t.getCoordinates();

        for (var _t821 = 0; _t821 < e.length; _t821++) {
          var _n454 = new fo(e[_t821]);

          this._constraintVertexMap.put(e[_t821], _n454);
        }
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return vo;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "createConstraintSegments",
      value: function createConstraintSegments() {
        if (1 === arguments.length) {
          var _t822 = arguments[0],
              _e641 = Ee.getLines(_t822),
              _n455 = new x();

          for (var _t823 = _e641.iterator(); _t823.hasNext();) {
            var _e642 = _t823.next();

            vo.createConstraintSegments(_e642, _n455);
          }

          return _n455;
        }

        if (2 === arguments.length) {
          var _t824 = arguments[0],
              _e643 = arguments[1],
              _n456 = _t824.getCoordinates();

          for (var _t825 = 1; _t825 < _n456.length; _t825++) {
            _e643.add(new To(_n456[_t825 - 1], _n456[_t825]));
          }
        }
      }
    }]);

    return vo;
  }();

  vo.constructor_ = function () {
    this._siteCoords = null, this._constraintLines = null, this._tolerance = 0, this._subdiv = null, this._constraintVertexMap = new ot();
  };

  var Oo =
  /*#__PURE__*/
  function () {
    function Oo() {
      _classCallCheck(this, Oo);

      Oo.constructor_.apply(this, arguments);
    }

    _createClass(Oo, [{
      key: "create",
      value: function create() {
        if (null !== this._subdiv) return null;
        var t = Po.envelope(this._siteCoords);
        this._diagramEnv = t;
        var e = Math.max(this._diagramEnv.getWidth(), this._diagramEnv.getHeight());
        this._diagramEnv.expandBy(e), null !== this._clipEnv && this._diagramEnv.expandToInclude(this._clipEnv);
        var n = Po.toVertices(this._siteCoords);
        this._subdiv = new No(t, this._tolerance), new mo(this._subdiv).insertSites(n);
      }
    }, {
      key: "getDiagram",
      value: function getDiagram(t) {
        this.create();

        var e = this._subdiv.getVoronoiDiagram(t);

        return Oo.clipGeometryCollection(e, this._diagramEnv);
      }
    }, {
      key: "setTolerance",
      value: function setTolerance(t) {
        this._tolerance = t;
      }
    }, {
      key: "setSites",
      value: function setSites() {
        if (arguments[0] instanceof q) {
          var _t826 = arguments[0];
          this._siteCoords = Po.extractUniqueCoordinates(_t826);
        } else if (_(arguments[0], f)) {
          var _t827 = arguments[0];
          this._siteCoords = Po.unique(X.toCoordinateArray(_t827));
        }
      }
    }, {
      key: "setClipEnvelope",
      value: function setClipEnvelope(t) {
        this._clipEnv = t;
      }
    }, {
      key: "getSubdivision",
      value: function getSubdivision() {
        return this.create(), this._subdiv;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Oo;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "clipGeometryCollection",
      value: function clipGeometryCollection(t, e) {
        var n = t.getFactory().toGeometry(e),
            s = new x();

        for (var _i169 = 0; _i169 < t.getNumGeometries(); _i169++) {
          var _r87 = t.getGeometryN(_i169);

          var _o45 = null;
          e.contains(_r87.getEnvelopeInternal()) ? _o45 = _r87 : e.intersects(_r87.getEnvelopeInternal()) && (_o45 = n.intersection(_r87)).setUserData(_r87.getUserData()), null === _o45 || _o45.isEmpty() || s.add(_o45);
        }

        return t.getFactory().createGeometryCollection(Wt.toGeometryArray(s));
      }
    }]);

    return Oo;
  }();

  Oo.constructor_ = function () {
    this._siteCoords = null, this._tolerance = 0, this._subdiv = null, this._clipEnv = null, this._diagramEnv = null;
  };

  var bo = Object.freeze({
    Vertex: _o
  }),
      Mo = Object.freeze({
    ConformingDelaunayTriangulationBuilder: vo,
    DelaunayTriangulationBuilder: Po,
    VoronoiDiagramBuilder: Oo,
    quadedge: bo
  });

  var Ao =
  /*#__PURE__*/
  function () {
    function Ao() {
      _classCallCheck(this, Ao);

      Ao.constructor_.apply(this, arguments);
    }

    _createClass(Ao, [{
      key: "getSegmentIndex",
      value: function getSegmentIndex() {
        return this._segmentIndex;
      }
    }, {
      key: "getComponentIndex",
      value: function getComponentIndex() {
        return this._componentIndex;
      }
    }, {
      key: "isEndpoint",
      value: function isEndpoint(t) {
        var e = t.getGeometryN(this._componentIndex).getNumPoints() - 1;
        return this._segmentIndex >= e || this._segmentIndex === e && this._segmentFraction >= 1;
      }
    }, {
      key: "isValid",
      value: function isValid(t) {
        if (this._componentIndex < 0 || this._componentIndex >= t.getNumGeometries()) return !1;
        var e = t.getGeometryN(this._componentIndex);
        return !(this._segmentIndex < 0 || this._segmentIndex > e.getNumPoints()) && (this._segmentIndex !== e.getNumPoints() || 0 === this._segmentFraction) && !(this._segmentFraction < 0 || this._segmentFraction > 1);
      }
    }, {
      key: "normalize",
      value: function normalize() {
        this._segmentFraction < 0 && (this._segmentFraction = 0), this._segmentFraction > 1 && (this._segmentFraction = 1), this._componentIndex < 0 && (this._componentIndex = 0, this._segmentIndex = 0, this._segmentFraction = 0), this._segmentIndex < 0 && (this._segmentIndex = 0, this._segmentFraction = 0), 1 === this._segmentFraction && (this._segmentFraction = 0, this._segmentIndex += 1);
      }
    }, {
      key: "toLowest",
      value: function toLowest(t) {
        var e = t.getGeometryN(this._componentIndex).getNumPoints() - 1;
        return this._segmentIndex < e ? this : new Ao(this._componentIndex, e, 1, !1);
      }
    }, {
      key: "getCoordinate",
      value: function getCoordinate(t) {
        var e = t.getGeometryN(this._componentIndex),
            n = e.getCoordinateN(this._segmentIndex);
        if (this._segmentIndex >= e.getNumPoints() - 1) return n;
        var s = e.getCoordinateN(this._segmentIndex + 1);
        return Ao.pointAlongSegmentByFraction(n, s, this._segmentFraction);
      }
    }, {
      key: "getSegmentFraction",
      value: function getSegmentFraction() {
        return this._segmentFraction;
      }
    }, {
      key: "getSegment",
      value: function getSegment(t) {
        var e = t.getGeometryN(this._componentIndex),
            n = e.getCoordinateN(this._segmentIndex);

        if (this._segmentIndex >= e.getNumPoints() - 1) {
          var _t828 = e.getCoordinateN(e.getNumPoints() - 2);

          return new ne(_t828, n);
        }

        var s = e.getCoordinateN(this._segmentIndex + 1);
        return new ne(n, s);
      }
    }, {
      key: "clamp",
      value: function clamp(t) {
        if (this._componentIndex >= t.getNumGeometries()) return this.setToEnd(t), null;

        if (this._segmentIndex >= t.getNumPoints()) {
          var _e644 = t.getGeometryN(this._componentIndex);

          this._segmentIndex = _e644.getNumPoints() - 1, this._segmentFraction = 1;
        }
      }
    }, {
      key: "setToEnd",
      value: function setToEnd(t) {
        this._componentIndex = t.getNumGeometries() - 1;
        var e = t.getGeometryN(this._componentIndex);
        this._segmentIndex = e.getNumPoints() - 1, this._segmentFraction = 1;
      }
    }, {
      key: "compareTo",
      value: function compareTo(t) {
        var e = t;
        return this._componentIndex < e._componentIndex ? -1 : this._componentIndex > e._componentIndex ? 1 : this._segmentIndex < e._segmentIndex ? -1 : this._segmentIndex > e._segmentIndex ? 1 : this._segmentFraction < e._segmentFraction ? -1 : this._segmentFraction > e._segmentFraction ? 1 : 0;
      }
    }, {
      key: "copy",
      value: function copy() {
        return new Ao(this._componentIndex, this._segmentIndex, this._segmentFraction);
      }
    }, {
      key: "toString",
      value: function toString() {
        return "LinearLoc[" + this._componentIndex + ", " + this._segmentIndex + ", " + this._segmentFraction + "]";
      }
    }, {
      key: "isOnSameSegment",
      value: function isOnSameSegment(t) {
        return this._componentIndex === t._componentIndex && (this._segmentIndex === t._segmentIndex || t._segmentIndex - this._segmentIndex == 1 && 0 === t._segmentFraction || this._segmentIndex - t._segmentIndex == 1 && 0 === this._segmentFraction);
      }
    }, {
      key: "snapToVertex",
      value: function snapToVertex(t, e) {
        if (this._segmentFraction <= 0 || this._segmentFraction >= 1) return null;
        var n = this.getSegmentLength(t),
            s = this._segmentFraction * n,
            i = n - s;
        s <= i && s < e ? this._segmentFraction = 0 : i <= s && i < e && (this._segmentFraction = 1);
      }
    }, {
      key: "compareLocationValues",
      value: function compareLocationValues(t, e, n) {
        return this._componentIndex < t ? -1 : this._componentIndex > t ? 1 : this._segmentIndex < e ? -1 : this._segmentIndex > e ? 1 : this._segmentFraction < n ? -1 : this._segmentFraction > n ? 1 : 0;
      }
    }, {
      key: "getSegmentLength",
      value: function getSegmentLength(t) {
        var e = t.getGeometryN(this._componentIndex);
        var n = this._segmentIndex;
        this._segmentIndex >= e.getNumPoints() - 1 && (n = e.getNumPoints() - 2);
        var s = e.getCoordinateN(n),
            i = e.getCoordinateN(n + 1);
        return s.distance(i);
      }
    }, {
      key: "isVertex",
      value: function isVertex() {
        return this._segmentFraction <= 0 || this._segmentFraction >= 1;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Ao;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [r];
      }
    }], [{
      key: "getEndLocation",
      value: function getEndLocation(t) {
        var e = new Ao();
        return e.setToEnd(t), e;
      }
    }, {
      key: "pointAlongSegmentByFraction",
      value: function pointAlongSegmentByFraction(t, e, n) {
        if (n <= 0) return t;
        if (n >= 1) return e;
        var s = (e.x - t.x) * n + t.x,
            i = (e.y - t.y) * n + t.y,
            r = (e.z - t.z) * n + t.z;
        return new g(s, i, r);
      }
    }, {
      key: "compareLocationValues",
      value: function compareLocationValues(t, e, n, s, i, r) {
        return t < s ? -1 : t > s ? 1 : e < i ? -1 : e > i ? 1 : n < r ? -1 : n > r ? 1 : 0;
      }
    }]);

    return Ao;
  }();

  Ao.constructor_ = function () {
    if (this._componentIndex = 0, this._segmentIndex = 0, this._segmentFraction = 0, 0 === arguments.length) ;else if (1 === arguments.length) {
      var _t829 = arguments[0];
      this._componentIndex = _t829._componentIndex, this._segmentIndex = _t829._segmentIndex, this._segmentFraction = _t829._segmentFraction;
    } else if (2 === arguments.length) {
      var _t830 = arguments[0],
          _e645 = arguments[1];
      Ao.constructor_.call(this, 0, _t830, _e645);
    } else if (3 === arguments.length) {
      var _t831 = arguments[0],
          _e646 = arguments[1],
          _n457 = arguments[2];
      this._componentIndex = _t831, this._segmentIndex = _e646, this._segmentFraction = _n457, this.normalize();
    } else if (4 === arguments.length) {
      var _t832 = arguments[0],
          _e647 = arguments[1],
          _n458 = arguments[2],
          _s298 = arguments[3];
      this._componentIndex = _t832, this._segmentIndex = _e647, this._segmentFraction = _n458, _s298 && this.normalize();
    }
  };

  var Do =
  /*#__PURE__*/
  function () {
    function Do() {
      _classCallCheck(this, Do);

      Do.constructor_.apply(this, arguments);
    }

    _createClass(Do, [{
      key: "getComponentIndex",
      value: function getComponentIndex() {
        return this._componentIndex;
      }
    }, {
      key: "getLine",
      value: function getLine() {
        return this._currentLine;
      }
    }, {
      key: "getVertexIndex",
      value: function getVertexIndex() {
        return this._vertexIndex;
      }
    }, {
      key: "getSegmentEnd",
      value: function getSegmentEnd() {
        return this._vertexIndex < this.getLine().getNumPoints() - 1 ? this._currentLine.getCoordinateN(this._vertexIndex + 1) : null;
      }
    }, {
      key: "next",
      value: function next() {
        if (!this.hasNext()) return null;
        this._vertexIndex++, this._vertexIndex >= this._currentLine.getNumPoints() && (this._componentIndex++, this.loadCurrentLine(), this._vertexIndex = 0);
      }
    }, {
      key: "loadCurrentLine",
      value: function loadCurrentLine() {
        if (this._componentIndex >= this._numLines) return this._currentLine = null, null;
        this._currentLine = this._linearGeom.getGeometryN(this._componentIndex);
      }
    }, {
      key: "getSegmentStart",
      value: function getSegmentStart() {
        return this._currentLine.getCoordinateN(this._vertexIndex);
      }
    }, {
      key: "isEndOfLine",
      value: function isEndOfLine() {
        return !(this._componentIndex >= this._numLines) && !(this._vertexIndex < this._currentLine.getNumPoints() - 1);
      }
    }, {
      key: "hasNext",
      value: function hasNext() {
        return !(this._componentIndex >= this._numLines) && !(this._componentIndex === this._numLines - 1 && this._vertexIndex >= this._currentLine.getNumPoints());
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Do;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "segmentEndVertexIndex",
      value: function segmentEndVertexIndex(t) {
        return t.getSegmentFraction() > 0 ? t.getSegmentIndex() + 1 : t.getSegmentIndex();
      }
    }]);

    return Do;
  }();

  Do.constructor_ = function () {
    if (this._linearGeom = null, this._numLines = null, this._currentLine = null, this._componentIndex = 0, this._vertexIndex = 0, 1 === arguments.length) {
      var _t833 = arguments[0];
      Do.constructor_.call(this, _t833, 0, 0);
    } else if (2 === arguments.length) {
      var _t834 = arguments[0],
          _e648 = arguments[1];
      Do.constructor_.call(this, _t834, _e648.getComponentIndex(), Do.segmentEndVertexIndex(_e648));
    } else if (3 === arguments.length) {
      var _t835 = arguments[0],
          _e649 = arguments[1],
          _s299 = arguments[2];
      if (!_(_t835, lt)) throw new n("Lineal geometry is required");
      this._linearGeom = _t835, this._numLines = _t835.getNumGeometries(), this._componentIndex = _e649, this._vertexIndex = _s299, this.loadCurrentLine();
    }
  };

  var Fo =
  /*#__PURE__*/
  function () {
    function Fo() {
      _classCallCheck(this, Fo);

      Fo.constructor_.apply(this, arguments);
    }

    _createClass(Fo, [{
      key: "indexOf",
      value: function indexOf(t) {
        return this.indexOfFromStart(t, null);
      }
    }, {
      key: "indexOfFromStart",
      value: function indexOfFromStart(t, e) {
        var n = i.MAX_VALUE,
            s = 0,
            r = 0,
            o = -1;
        var l = new ne();

        for (var _i170 = new Do(this._linearGeom); _i170.hasNext(); _i170.next()) {
          if (!_i170.isEndOfLine()) {
            l.p0 = _i170.getSegmentStart(), l.p1 = _i170.getSegmentEnd();

            var _a21 = l.distance(t),
                _c17 = l.segmentFraction(t),
                _h8 = _i170.getComponentIndex(),
                _u6 = _i170.getVertexIndex();

            _a21 < n && (null === e || e.compareLocationValues(_h8, _u6, _c17) < 0) && (s = _h8, r = _u6, o = _c17, n = _a21);
          }
        }

        return n === i.MAX_VALUE ? new Ao(e) : new Ao(s, r, o);
      }
    }, {
      key: "indexOfAfter",
      value: function indexOfAfter(t, e) {
        if (null === e) return this.indexOf(t);
        var n = Ao.getEndLocation(this._linearGeom);
        if (n.compareTo(e) <= 0) return n;
        var s = this.indexOfFromStart(t, e);
        return u.isTrue(s.compareTo(e) >= 0, "computed location is before specified minimum location"), s;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Fo;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "indexOf",
      value: function indexOf(t, e) {
        return new Fo(t).indexOf(e);
      }
    }, {
      key: "indexOfAfter",
      value: function indexOfAfter(t, e, n) {
        return new Fo(t).indexOfAfter(e, n);
      }
    }]);

    return Fo;
  }();

  Fo.constructor_ = function () {
    this._linearGeom = null;
    var t = arguments[0];
    this._linearGeom = t;
  };

  var Go =
  /*#__PURE__*/
  function () {
    function Go() {
      _classCallCheck(this, Go);

      Go.constructor_.apply(this, arguments);
    }

    _createClass(Go, [{
      key: "indicesOf",
      value: function indicesOf(t) {
        var e = t.getGeometryN(0).getCoordinateN(0),
            n = t.getGeometryN(t.getNumGeometries() - 1),
            s = n.getCoordinateN(n.getNumPoints() - 1),
            i = new Fo(this._linearGeom),
            r = new Array(2).fill(null);
        return r[0] = i.indexOf(e), 0 === t.getLength() ? r[1] = r[0].copy() : r[1] = i.indexOfAfter(s, r[0]), r;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Go;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "indicesOf",
      value: function indicesOf(t, e) {
        return new Go(t).indicesOf(e);
      }
    }]);

    return Go;
  }();

  Go.constructor_ = function () {
    this._linearGeom = null;
    var t = arguments[0];
    this._linearGeom = t;
  };

  var qo =
  /*#__PURE__*/
  function () {
    function qo() {
      _classCallCheck(this, qo);

      qo.constructor_.apply(this, arguments);
    }

    _createClass(qo, [{
      key: "getGeometry",
      value: function getGeometry() {
        return this.endLine(), this._geomFact.buildGeometry(this._lines);
      }
    }, {
      key: "getLastCoordinate",
      value: function getLastCoordinate() {
        return this._lastPt;
      }
    }, {
      key: "endLine",
      value: function endLine() {
        if (null === this._coordList) return null;
        if (this._ignoreInvalidLines && this._coordList.size() < 2) return this._coordList = null, null;

        var t = this._coordList.toCoordinateArray();

        var e = t;
        this._fixInvalidLines && (e = this.validCoordinateSequence(t)), this._coordList = null;
        var s = null;

        try {
          s = this._geomFact.createLineString(e);
        } catch (t) {
          if (!(t instanceof n)) throw t;
          if (!this._ignoreInvalidLines) throw t;
        }

        null !== s && this._lines.add(s);
      }
    }, {
      key: "setFixInvalidLines",
      value: function setFixInvalidLines(t) {
        this._fixInvalidLines = t;
      }
    }, {
      key: "add",
      value: function add() {
        if (1 === arguments.length) {
          var _t836 = arguments[0];
          this.add(_t836, !0);
        } else if (2 === arguments.length) {
          var _t837 = arguments[0],
              _e650 = arguments[1];
          null === this._coordList && (this._coordList = new I()), this._coordList.add(_t837, _e650), this._lastPt = _t837;
        }
      }
    }, {
      key: "setIgnoreInvalidLines",
      value: function setIgnoreInvalidLines(t) {
        this._ignoreInvalidLines = t;
      }
    }, {
      key: "validCoordinateSequence",
      value: function validCoordinateSequence(t) {
        if (t.length >= 2) return t;
        return [t[0], t[0]];
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return qo;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return qo;
  }();

  qo.constructor_ = function () {
    this._geomFact = null, this._lines = new x(), this._coordList = null, this._ignoreInvalidLines = !1, this._fixInvalidLines = !1, this._lastPt = null;
    var t = arguments[0];
    this._geomFact = t;
  };

  var Bo =
  /*#__PURE__*/
  function () {
    function Bo() {
      _classCallCheck(this, Bo);

      Bo.constructor_.apply(this, arguments);
    }

    _createClass(Bo, [{
      key: "computeLinear",
      value: function computeLinear(t, e) {
        var n = new qo(this._line.getFactory());
        n.setFixInvalidLines(!0), t.isVertex() || n.add(t.getCoordinate(this._line));

        for (var _s300 = new Do(this._line, t); _s300.hasNext() && !(e.compareLocationValues(_s300.getComponentIndex(), _s300.getVertexIndex(), 0) < 0); _s300.next()) {
          var _t838 = _s300.getSegmentStart();

          n.add(_t838), _s300.isEndOfLine() && n.endLine();
        }

        return e.isVertex() || n.add(e.getCoordinate(this._line)), n.getGeometry();
      }
    }, {
      key: "computeLine",
      value: function computeLine(t, e) {
        var n = this._line.getCoordinates(),
            s = new I();

        var i = t.getSegmentIndex();
        t.getSegmentFraction() > 0 && (i += 1);
        var r = e.getSegmentIndex();
        1 === e.getSegmentFraction() && (r += 1), r >= n.length && (r = n.length - 1), t.isVertex() || s.add(t.getCoordinate(this._line));

        for (var _t839 = i; _t839 <= r; _t839++) {
          s.add(n[_t839]);
        }

        e.isVertex() || s.add(e.getCoordinate(this._line)), s.size() <= 0 && s.add(t.getCoordinate(this._line));
        var o = s.toCoordinateArray();
        return o.length <= 1 && (o = [o[0], o[0]]), this._line.getFactory().createLineString(o);
      }
    }, {
      key: "extract",
      value: function extract(t, e) {
        return e.compareTo(t) < 0 ? this.reverse(this.computeLinear(e, t)) : this.computeLinear(t, e);
      }
    }, {
      key: "reverse",
      value: function reverse(t) {
        return t instanceof Rt ? t.reverse() : t instanceof pt ? t.reverse() : (u.shouldNeverReachHere("non-linear geometry encountered"), null);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Bo;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "extract",
      value: function extract(t, e, n) {
        return new Bo(t).extract(e, n);
      }
    }]);

    return Bo;
  }();

  Bo.constructor_ = function () {
    this._line = null;
    var t = arguments[0];
    this._line = t;
  };

  var Vo =
  /*#__PURE__*/
  function () {
    function Vo() {
      _classCallCheck(this, Vo);

      Vo.constructor_.apply(this, arguments);
    }

    _createClass(Vo, [{
      key: "clampIndex",
      value: function clampIndex(t) {
        var e = t.copy();
        return e.clamp(this._linearGeom), e;
      }
    }, {
      key: "project",
      value: function project(t) {
        return Fo.indexOf(this._linearGeom, t);
      }
    }, {
      key: "checkGeometryType",
      value: function checkGeometryType() {
        if (!(this._linearGeom instanceof Rt || this._linearGeom instanceof pt)) throw new n("Input geometry must be linear");
      }
    }, {
      key: "extractPoint",
      value: function extractPoint() {
        if (1 === arguments.length) {
          return arguments[0].getCoordinate(this._linearGeom);
        }

        if (2 === arguments.length) {
          var _t840 = arguments[0],
              _e651 = arguments[1],
              _n459 = _t840.toLowest(this._linearGeom);

          return _n459.getSegment(this._linearGeom).pointAlongOffset(_n459.getSegmentFraction(), _e651);
        }
      }
    }, {
      key: "isValidIndex",
      value: function isValidIndex(t) {
        return t.isValid(this._linearGeom);
      }
    }, {
      key: "getEndIndex",
      value: function getEndIndex() {
        return Ao.getEndLocation(this._linearGeom);
      }
    }, {
      key: "getStartIndex",
      value: function getStartIndex() {
        return new Ao();
      }
    }, {
      key: "indexOfAfter",
      value: function indexOfAfter(t, e) {
        return Fo.indexOfAfter(this._linearGeom, t, e);
      }
    }, {
      key: "extractLine",
      value: function extractLine(t, e) {
        return Bo.extract(this._linearGeom, t, e);
      }
    }, {
      key: "indexOf",
      value: function indexOf(t) {
        return Fo.indexOf(this._linearGeom, t);
      }
    }, {
      key: "indicesOf",
      value: function indicesOf(t) {
        return Go.indicesOf(this._linearGeom, t);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Vo;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Vo;
  }();

  Vo.constructor_ = function () {
    this._linearGeom = null;
    var t = arguments[0];
    this._linearGeom = t, this.checkGeometryType();
  };

  var zo =
  /*#__PURE__*/
  function () {
    function zo() {
      _classCallCheck(this, zo);

      zo.constructor_.apply(this, arguments);
    }

    _createClass(zo, [{
      key: "indexOf",
      value: function indexOf(t) {
        return this.indexOfFromStart(t, -1);
      }
    }, {
      key: "indexOfFromStart",
      value: function indexOfFromStart(t, e) {
        var n = i.MAX_VALUE,
            s = e,
            r = 0;
        var o = new ne(),
            l = new Do(this._linearGeom);

        for (; l.hasNext();) {
          if (!l.isEndOfLine()) {
            o.p0 = l.getSegmentStart(), o.p1 = l.getSegmentEnd();

            var _i171 = o.distance(t),
                _a22 = this.segmentNearestMeasure(o, t, r);

            _i171 < n && _a22 > e && (s = _a22, n = _i171), r += o.getLength();
          }

          l.next();
        }

        return s;
      }
    }, {
      key: "indexOfAfter",
      value: function indexOfAfter(t, e) {
        if (e < 0) return this.indexOf(t);

        var n = this._linearGeom.getLength();

        if (n < e) return n;
        var s = this.indexOfFromStart(t, e);
        return u.isTrue(s >= e, "computed index is before specified minimum index"), s;
      }
    }, {
      key: "segmentNearestMeasure",
      value: function segmentNearestMeasure(t, e, n) {
        var s = t.projectionFactor(e);
        return s <= 0 ? n : s <= 1 ? n + s * t.getLength() : n + t.getLength();
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return zo;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "indexOf",
      value: function indexOf(t, e) {
        return new zo(t).indexOf(e);
      }
    }, {
      key: "indexOfAfter",
      value: function indexOfAfter(t, e, n) {
        return new zo(t).indexOfAfter(e, n);
      }
    }]);

    return zo;
  }();

  zo.constructor_ = function () {
    this._linearGeom = null;
    var t = arguments[0];
    this._linearGeom = t;
  };

  var Yo =
  /*#__PURE__*/
  function () {
    function Yo() {
      _classCallCheck(this, Yo);

      Yo.constructor_.apply(this, arguments);
    }

    _createClass(Yo, [{
      key: "getLength",
      value: function getLength(t) {
        var e = 0;
        var n = new Do(this._linearGeom);

        for (; n.hasNext();) {
          if (!n.isEndOfLine()) {
            var _s301 = n.getSegmentStart(),
                _i172 = n.getSegmentEnd().distance(_s301);

            if (t.getComponentIndex() === n.getComponentIndex() && t.getSegmentIndex() === n.getVertexIndex()) return e + _i172 * t.getSegmentFraction();
            e += _i172;
          }

          n.next();
        }

        return e;
      }
    }, {
      key: "resolveHigher",
      value: function resolveHigher(t) {
        if (!t.isEndpoint(this._linearGeom)) return t;
        var e = t.getComponentIndex();
        if (e >= this._linearGeom.getNumGeometries() - 1) return t;

        do {
          e++;
        } while (e < this._linearGeom.getNumGeometries() - 1 && 0 === this._linearGeom.getGeometryN(e).getLength());

        return new Ao(e, 0, 0);
      }
    }, {
      key: "getLocation",
      value: function getLocation() {
        if (1 === arguments.length) {
          var _t841 = arguments[0];
          return this.getLocation(_t841, !0);
        }

        if (2 === arguments.length) {
          var _t842 = arguments[0],
              _e652 = arguments[1];
          var _n460 = _t842;

          if (_t842 < 0) {
            _n460 = this._linearGeom.getLength() + _t842;
          }

          var _s302 = this.getLocationForward(_n460);

          return _e652 ? _s302 : this.resolveHigher(_s302);
        }
      }
    }, {
      key: "getLocationForward",
      value: function getLocationForward(t) {
        if (t <= 0) return new Ao();
        var e = 0;
        var n = new Do(this._linearGeom);

        for (; n.hasNext();) {
          if (n.isEndOfLine()) {
            if (e === t) {
              var _t843 = n.getComponentIndex(),
                  _e653 = n.getVertexIndex();

              return new Ao(_t843, _e653, 0);
            }
          } else {
            var _s303 = n.getSegmentStart(),
                _i173 = n.getSegmentEnd().distance(_s303);

            if (e + _i173 > t) {
              var _s304 = (t - e) / _i173,
                  _r88 = n.getComponentIndex(),
                  _o46 = n.getVertexIndex();

              return new Ao(_r88, _o46, _s304);
            }

            e += _i173;
          }

          n.next();
        }

        return Ao.getEndLocation(this._linearGeom);
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Yo;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "getLength",
      value: function getLength(t, e) {
        return new Yo(t).getLength(e);
      }
    }, {
      key: "getLocation",
      value: function getLocation() {
        if (2 === arguments.length) {
          var _t844 = arguments[0],
              _e654 = arguments[1];
          return new Yo(_t844).getLocation(_e654);
        }

        if (3 === arguments.length) {
          var _t845 = arguments[0],
              _e655 = arguments[1],
              _n461 = arguments[2];
          return new Yo(_t845).getLocation(_e655, _n461);
        }
      }
    }]);

    return Yo;
  }();

  Yo.constructor_ = function () {
    this._linearGeom = null;
    var t = arguments[0];
    this._linearGeom = t;
  };

  var Uo =
  /*#__PURE__*/
  function () {
    function Uo() {
      _classCallCheck(this, Uo);

      Uo.constructor_.apply(this, arguments);
    }

    _createClass(Uo, [{
      key: "clampIndex",
      value: function clampIndex(t) {
        var e = this.positiveIndex(t),
            n = this.getStartIndex();
        if (e < n) return n;
        var s = this.getEndIndex();
        return e > s ? s : e;
      }
    }, {
      key: "locationOf",
      value: function locationOf() {
        if (1 === arguments.length) {
          var _t846 = arguments[0];
          return Yo.getLocation(this._linearGeom, _t846);
        }

        if (2 === arguments.length) {
          var _t847 = arguments[0],
              _e656 = arguments[1];
          return Yo.getLocation(this._linearGeom, _t847, _e656);
        }
      }
    }, {
      key: "project",
      value: function project(t) {
        return zo.indexOf(this._linearGeom, t);
      }
    }, {
      key: "positiveIndex",
      value: function positiveIndex(t) {
        return t >= 0 ? t : this._linearGeom.getLength() + t;
      }
    }, {
      key: "extractPoint",
      value: function extractPoint() {
        if (1 === arguments.length) {
          var _t848 = arguments[0];
          return Yo.getLocation(this._linearGeom, _t848).getCoordinate(this._linearGeom);
        }

        if (2 === arguments.length) {
          var _t849 = arguments[0],
              _e657 = arguments[1],
              _n462 = Yo.getLocation(this._linearGeom, _t849).toLowest(this._linearGeom);

          return _n462.getSegment(this._linearGeom).pointAlongOffset(_n462.getSegmentFraction(), _e657);
        }
      }
    }, {
      key: "isValidIndex",
      value: function isValidIndex(t) {
        return t >= this.getStartIndex() && t <= this.getEndIndex();
      }
    }, {
      key: "getEndIndex",
      value: function getEndIndex() {
        return this._linearGeom.getLength();
      }
    }, {
      key: "getStartIndex",
      value: function getStartIndex() {
        return 0;
      }
    }, {
      key: "indexOfAfter",
      value: function indexOfAfter(t, e) {
        return zo.indexOfAfter(this._linearGeom, t, e);
      }
    }, {
      key: "extractLine",
      value: function extractLine(t, e) {
        new Vo(this._linearGeom);
        var n = this.clampIndex(t),
            s = this.clampIndex(e),
            i = n === s,
            r = this.locationOf(n, i),
            o = this.locationOf(s);
        return Bo.extract(this._linearGeom, r, o);
      }
    }, {
      key: "indexOf",
      value: function indexOf(t) {
        return zo.indexOf(this._linearGeom, t);
      }
    }, {
      key: "indicesOf",
      value: function indicesOf(t) {
        var e = Go.indicesOf(this._linearGeom, t);
        return [Yo.getLength(this._linearGeom, e[0]), Yo.getLength(this._linearGeom, e[1])];
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Uo;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Uo;
  }();

  Uo.constructor_ = function () {
    this._linearGeom = null;
    var t = arguments[0];
    this._linearGeom = t;
  };

  var ko = Object.freeze({
    LengthIndexedLine: Uo,
    LengthLocationMap: Yo,
    LinearGeometryBuilder: qo,
    LinearIterator: Do,
    LinearLocation: Ao,
    LocationIndexedLine: Vo
  });

  var Xo =
  /*#__PURE__*/
  function () {
    function Xo() {
      _classCallCheck(this, Xo);

      Xo.constructor_.apply(this, arguments);
    }

    _createClass(Xo, [{
      key: "getClass",
      value: function getClass() {
        return Xo;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "transform",
      value: function transform(t, e) {
        var n = new x();

        for (var _s305 = t.iterator(); _s305.hasNext();) {
          n.add(e.execute(_s305.next()));
        }

        return n;
      }
    }, {
      key: "select",
      value: function select(t, e) {
        var n = new x();

        for (var _s306 = t.iterator(); _s306.hasNext();) {
          var _t850 = _s306.next();

          Boolean.TRUE.equals(e.execute(_t850)) && n.add(_t850);
        }

        return n;
      }
    }, {
      key: "apply",
      value: function apply(t, e) {
        for (var _n463 = t.iterator(); _n463.hasNext();) {
          e.execute(_n463.next());
        }
      }
    }]);

    return Xo;
  }();

  Xo.Function = function () {}, Xo.constructor_ = function () {};

  var Ho =
  /*#__PURE__*/
  function () {
    function Ho() {
      _classCallCheck(this, Ho);

      Ho.constructor_.apply(this, arguments);
    }

    _createClass(Ho, [{
      key: "filter",
      value: function filter(t) {
        this.pts[this.n++] = t;
      }
    }, {
      key: "getCoordinates",
      value: function getCoordinates() {
        return this.pts;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Ho;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [B];
      }
    }]);

    return Ho;
  }();

  Ho.constructor_ = function () {
    this.pts = null, this.n = 0;
    var t = arguments[0];
    this.pts = new Array(t).fill(null);
  };

  var Wo =
  /*#__PURE__*/
  function () {
    function Wo() {
      _classCallCheck(this, Wo);

      Wo.constructor_.apply(this, arguments);
    }

    _createClass(Wo, [{
      key: "filter",
      value: function filter(t) {
        this._n++;
      }
    }, {
      key: "getCount",
      value: function getCount() {
        return this._n;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Wo;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [B];
      }
    }]);

    return Wo;
  }();

  Wo.constructor_ = function () {
    this._n = 0;
  };

  var jo =
  /*#__PURE__*/
  function () {
    function jo() {
      _classCallCheck(this, jo);

      jo.constructor_.apply(this, arguments);
    }

    _createClass(jo, [{
      key: "count",
      value: function count(t) {
        var e = this._counts.get(t);

        return null === e ? 0 : e.count();
      }
    }, {
      key: "add",
      value: function add(t) {
        var e = this._counts.get(t);

        null === e ? this._counts.put(t, new Ko(1)) : e.increment();
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return jo;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return jo;
  }();

  var Ko =
  /*#__PURE__*/
  function () {
    function Ko() {
      _classCallCheck(this, Ko);

      Ko.constructor_.apply(this, arguments);
    }

    _createClass(Ko, [{
      key: "count",
      value: function count() {
        return this.count;
      }
    }, {
      key: "increment",
      value: function increment() {
        this.count++;
      }
    }, {
      key: "getClass",
      value: function getClass() {
        return Ko;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }]);

    return Ko;
  }();

  Ko.constructor_ = function () {
    if (this.count = 0, 0 === arguments.length) ;else if (1 === arguments.length) {
      var _t851 = arguments[0];
      this.count = _t851;
    }
  }, jo.Counter = Ko, jo.constructor_ = function () {
    this._counts = new kt();
  };
  var Zo = Object.freeze({
    CollectionUtil: Xo,
    CoordinateArrayFilter: Ho,
    CoordinateCountFilter: Wo,
    GeometricShapeFactory: we,
    NumberUtil: e,
    ObjectCounter: jo,
    PriorityQueue: ps,
    StringUtil: wt,
    UniqueCoordinateArrayFilter: an
  });

  var Qo =
  /*#__PURE__*/
  function () {
    function Qo() {
      _classCallCheck(this, Qo);
    }

    _createClass(Qo, [{
      key: "getClass",
      value: function getClass() {
        return Qo;
      }
    }, {
      key: "interfaces_",
      get: function get() {
        return [];
      }
    }], [{
      key: "union",
      value: function union(t, e) {
        if (t.isEmpty() || e.isEmpty()) {
          if (t.isEmpty() && e.isEmpty()) return lr.createEmptyResult(lr.UNION, t, e, t.getFactory());
          if (t.isEmpty()) return e.copy();
          if (e.isEmpty()) return t.copy();
        }

        return t.checkNotGeometryCollection(t), t.checkNotGeometryCollection(e), rr.overlayOp(t, e, lr.UNION);
      }
    }]);

    return Qo;
  }();

  q.prototype.equalsTopo = function (t) {
    return !!this.getEnvelopeInternal().equals(t.getEnvelopeInternal()) && Dr.relate(this, t).isEquals(this.getDimension(), t.getDimension());
  }, q.prototype.union = function () {
    if (0 === arguments.length) return Br.union(this);

    if (1 === arguments.length) {
      var _t852 = arguments[0];
      return Qo.union(this, _t852);
    }
  }, q.prototype.isValid = function () {
    return Ir.isValid(this);
  }, q.prototype.intersection = function (t) {
    return lr.intersection(this, t);
  }, q.prototype.covers = function (t) {
    return Dr.covers(this, t);
  }, q.prototype.coveredBy = function (t) {
    return Dr.covers(t, this);
  }, q.prototype.touches = function (t) {
    return Dr.touches(this, t);
  }, q.prototype.intersects = function (t) {
    return Dr.intersects(this, t);
  }, q.prototype.within = function (t) {
    return Dr.contains(t, this);
  }, q.prototype.overlaps = function (t) {
    return Dr.overlaps(this, t);
  }, q.prototype.disjoint = function (t) {
    return Dr.disjoint(this, t);
  }, q.prototype.crosses = function (t) {
    return Dr.crosses(this, t);
  }, q.prototype.buffer = function () {
    if (1 === arguments.length) {
      var _t853 = arguments[0];
      return wi.bufferOp(this, _t853);
    }

    if (2 === arguments.length) {
      var _t854 = arguments[0],
          _e658 = arguments[1];
      return wi.bufferOp(this, _t854, _e658);
    }

    if (3 === arguments.length) {
      var _t855 = arguments[0],
          _e659 = arguments[1],
          _n464 = arguments[2];
      return wi.bufferOp(this, _t855, _e659, _n464);
    }
  }, q.prototype.convexHull = function () {
    return new cn(this).getConvexHull();
  }, q.prototype.relate = function () {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) {
      e[n] = arguments[n];
    }

    if (1 === arguments.length) {
      var _t856 = arguments[0];
      return Dr.relate(this, _t856);
    }

    if (2 === arguments.length) {
      var _t857 = arguments[0],
          _e660 = arguments[1];
      return Dr.relate(this, _t857).matches(_e660);
    }
  }, q.prototype.getCentroid = function () {
    if (this.isEmpty()) return this._factory.createPoint();
    var t = rn.getCentroid(this);
    return this.createPointFromInternalCoord(t, this);
  }, q.prototype.getInteriorPoint = function () {
    if (this.isEmpty()) return this._factory.createPoint();
    var t = null;
    var e = this.getDimension(),
        n = (t = 0 === e ? new _n(this) : 1 === e ? new dn(this) : new un(this)).getInteriorPoint();
    return this.createPointFromInternalCoord(n, this);
  }, q.prototype.symDifference = function (t) {
    return lr.symDifference(this, t);
  }, q.prototype.createPointFromInternalCoord = function (t, e) {
    return e.getPrecisionModel().makePrecise(t), e.getFactory().createPoint(t);
  }, q.prototype.toText = function () {
    return new $t().write(this);
  }, q.prototype.toString = function () {
    this.toText();
  }, q.prototype.contains = function (t) {
    return Dr.contains(this, t);
  }, q.prototype.difference = function (t) {
    return lr.difference(this, t);
  }, q.prototype.isSimple = function () {
    return new Ws(this).isSimple();
  }, q.prototype.isWithinDistance = function (t, e) {
    return !(this.getEnvelopeInternal().distance(t.getEnvelopeInternal()) > e) && Pi.isWithinDistance(this, t, e);
  }, q.prototype.distance = function (t) {
    return Pi.distance(this, t);
  }, q.prototype.isEquivalentClass = function (t) {
    return this.getClass() === t.getClass();
  };
  t.algorithm = yn, t.densify = In, t.dissolve = Pn, t.geom = Pe, t.geomgraph = $n, t.index = Ss, t.io = vs, t.linearref = ko, t.noding = Hs, t.operation = Yr, t.precision = Xr, t.simplify = ao, t.triangulate = Mo, t.util = Zo, t.version = "2.0.8 (3ea000e)", Object.defineProperty(t, "__esModule", {
    value: !0
  });
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59057" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","dist/library/jsts.min.js"], null)
//# sourceMappingURL=/jsts.min.979a9146.js.map