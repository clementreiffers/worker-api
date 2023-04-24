var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod2) => function __require() {
  return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
  isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
  mod2
));

// node_modules/@neondatabase/serverless/index.js
var require_serverless = __commonJS({
  "node_modules/@neondatabase/serverless/index.js"(exports, module) {
    "use strict";
    var ho = Object.create;
    var We = Object.defineProperty;
    var co = Object.getOwnPropertyDescriptor;
    var lo = Object.getOwnPropertyNames;
    var fo = Object.getPrototypeOf;
    var po = Object.prototype.hasOwnProperty;
    var yo = (r, e2, t) => e2 in r ? We(r, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r[e2] = t;
    var ee = (r, e2) => () => (r && (e2 = r(r = 0)), e2);
    var C = (r, e2) => () => (e2 || r((e2 = { exports: {} }).exports, e2), e2.exports);
    var le = (r, e2) => {
      for (var t in e2)
        We(r, t, { get: e2[t], enumerable: true });
    };
    var xn = (r, e2, t, n) => {
      if (e2 && typeof e2 == "object" || typeof e2 == "function")
        for (let i of lo(e2))
          !po.call(r, i) && i !== t && We(r, i, { get: () => e2[i], enumerable: !(n = co(e2, i)) || n.enumerable });
      return r;
    };
    var Qt = (r, e2, t) => (t = r != null ? ho(fo(r)) : {}, xn(e2 || !r || !r.__esModule ? We(t, "default", { value: r, enumerable: true }) : t, r));
    var j = (r) => xn(We({}, "__esModule", { value: true }), r);
    var S = (r, e2, t) => (yo(r, typeof e2 != "symbol" ? e2 + "" : e2, t), t);
    var bn = C((lt) => {
      "use strict";
      d();
      lt.byteLength = mo;
      lt.toByteArray = So;
      lt.fromByteArray = Eo;
      var me = [], fe = [], wo = typeof Uint8Array < "u" ? Uint8Array : Array, Ht = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      for (Ue = 0, vn = Ht.length; Ue < vn; ++Ue)
        me[Ue] = Ht[Ue], fe[Ht.charCodeAt(Ue)] = Ue;
      var Ue, vn;
      fe["-".charCodeAt(0)] = 62;
      fe["_".charCodeAt(0)] = 63;
      function En(r) {
        var e2 = r.length;
        if (e2 % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var t = r.indexOf("=");
        t === -1 && (t = e2);
        var n = t === e2 ? 0 : 4 - t % 4;
        return [t, n];
      }
      function mo(r) {
        var e2 = En(r), t = e2[0], n = e2[1];
        return (t + n) * 3 / 4 - n;
      }
      function go(r, e2, t) {
        return (e2 + t) * 3 / 4 - t;
      }
      function So(r) {
        var e2, t = En(r), n = t[0], i = t[1], s = new wo(go(r, n, i)), o = 0, a = i > 0 ? n - 4 : n, u;
        for (u = 0; u < a; u += 4)
          e2 = fe[r.charCodeAt(u)] << 18 | fe[r.charCodeAt(u + 1)] << 12 | fe[r.charCodeAt(u + 2)] << 6 | fe[r.charCodeAt(u + 3)], s[o++] = e2 >> 16 & 255, s[o++] = e2 >> 8 & 255, s[o++] = e2 & 255;
        return i === 2 && (e2 = fe[r.charCodeAt(u)] << 2 | fe[r.charCodeAt(u + 1)] >> 4, s[o++] = e2 & 255), i === 1 && (e2 = fe[r.charCodeAt(u)] << 10 | fe[r.charCodeAt(u + 1)] << 4 | fe[r.charCodeAt(u + 2)] >> 2, s[o++] = e2 >> 8 & 255, s[o++] = e2 & 255), s;
      }
      function xo(r) {
        return me[r >> 18 & 63] + me[r >> 12 & 63] + me[r >> 6 & 63] + me[r & 63];
      }
      function vo(r, e2, t) {
        for (var n, i = [], s = e2; s < t; s += 3)
          n = (r[s] << 16 & 16711680) + (r[s + 1] << 8 & 65280) + (r[s + 2] & 255), i.push(xo(n));
        return i.join("");
      }
      function Eo(r) {
        for (var e2, t = r.length, n = t % 3, i = [], s = 16383, o = 0, a = t - n; o < a; o += s)
          i.push(vo(r, o, o + s > a ? a : o + s));
        return n === 1 ? (e2 = r[t - 1], i.push(me[e2 >> 2] + me[e2 << 4 & 63] + "==")) : n === 2 && (e2 = (r[t - 2] << 8) + r[t - 1], i.push(me[e2 >> 10] + me[e2 >> 4 & 63] + me[e2 << 2 & 63] + "=")), i.join("");
      }
    });
    var An = C((jt) => {
      d();
      jt.read = function(r, e2, t, n, i) {
        var s, o, a = i * 8 - n - 1, u = (1 << a) - 1, h = u >> 1, c = -7, f = t ? i - 1 : 0, w = t ? -1 : 1, g = r[e2 + f];
        for (f += w, s = g & (1 << -c) - 1, g >>= -c, c += a; c > 0; s = s * 256 + r[e2 + f], f += w, c -= 8)
          ;
        for (o = s & (1 << -c) - 1, s >>= -c, c += n; c > 0; o = o * 256 + r[e2 + f], f += w, c -= 8)
          ;
        if (s === 0)
          s = 1 - h;
        else {
          if (s === u)
            return o ? NaN : (g ? -1 : 1) * (1 / 0);
          o = o + Math.pow(2, n), s = s - h;
        }
        return (g ? -1 : 1) * o * Math.pow(2, s - n);
      };
      jt.write = function(r, e2, t, n, i, s) {
        var o, a, u, h = s * 8 - i - 1, c = (1 << h) - 1, f = c >> 1, w = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, g = n ? 0 : s - 1, b = n ? 1 : -1, I = e2 < 0 || e2 === 0 && 1 / e2 < 0 ? 1 : 0;
        for (e2 = Math.abs(e2), isNaN(e2) || e2 === 1 / 0 ? (a = isNaN(e2) ? 1 : 0, o = c) : (o = Math.floor(Math.log(e2) / Math.LN2), e2 * (u = Math.pow(2, -o)) < 1 && (o--, u *= 2), o + f >= 1 ? e2 += w / u : e2 += w * Math.pow(2, 1 - f), e2 * u >= 2 && (o++, u /= 2), o + f >= c ? (a = 0, o = c) : o + f >= 1 ? (a = (e2 * u - 1) * Math.pow(2, i), o = o + f) : (a = e2 * Math.pow(2, f - 1) * Math.pow(2, i), o = 0)); i >= 8; r[t + g] = a & 255, g += b, a /= 256, i -= 8)
          ;
        for (o = o << i | a, h += i; h > 0; r[t + g] = o & 255, g += b, o /= 256, h -= 8)
          ;
        r[t + g - b] |= I * 128;
      };
    });
    var Qn = C((ke) => {
      "use strict";
      d();
      var Kt = bn(), Re = An(), _n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
      ke.Buffer = l;
      ke.SlowBuffer = Io;
      ke.INSPECT_MAX_BYTES = 50;
      var ft = 2147483647;
      ke.kMaxLength = ft;
      l.TYPED_ARRAY_SUPPORT = bo();
      !l.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
      function bo() {
        try {
          let r = new Uint8Array(1), e2 = { foo: function() {
            return 42;
          } };
          return Object.setPrototypeOf(e2, Uint8Array.prototype), Object.setPrototypeOf(r, e2), r.foo() === 42;
        } catch {
          return false;
        }
      }
      Object.defineProperty(l.prototype, "parent", { enumerable: true, get: function() {
        if (!!l.isBuffer(this))
          return this.buffer;
      } });
      Object.defineProperty(l.prototype, "offset", { enumerable: true, get: function() {
        if (!!l.isBuffer(this))
          return this.byteOffset;
      } });
      function xe(r) {
        if (r > ft)
          throw new RangeError('The value "' + r + '" is invalid for option "size"');
        let e2 = new Uint8Array(r);
        return Object.setPrototypeOf(e2, l.prototype), e2;
      }
      function l(r, e2, t) {
        if (typeof r == "number") {
          if (typeof e2 == "string")
            throw new TypeError('The "string" argument must be of type string. Received type number');
          return Vt(r);
        }
        return Ln(r, e2, t);
      }
      l.poolSize = 8192;
      function Ln(r, e2, t) {
        if (typeof r == "string")
          return _o(r, e2);
        if (ArrayBuffer.isView(r))
          return Co(r);
        if (r == null)
          throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r);
        if (ge(r, ArrayBuffer) || r && ge(r.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (ge(r, SharedArrayBuffer) || r && ge(r.buffer, SharedArrayBuffer)))
          return Wt(r, e2, t);
        if (typeof r == "number")
          throw new TypeError('The "value" argument must not be of type number. Received type number');
        let n = r.valueOf && r.valueOf();
        if (n != null && n !== r)
          return l.from(n, e2, t);
        let i = Uo(r);
        if (i)
          return i;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof r[Symbol.toPrimitive] == "function")
          return l.from(r[Symbol.toPrimitive]("string"), e2, t);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r);
      }
      l.from = function(r, e2, t) {
        return Ln(r, e2, t);
      };
      Object.setPrototypeOf(l.prototype, Uint8Array.prototype);
      Object.setPrototypeOf(l, Uint8Array);
      function Bn(r) {
        if (typeof r != "number")
          throw new TypeError('"size" argument must be of type number');
        if (r < 0)
          throw new RangeError('The value "' + r + '" is invalid for option "size"');
      }
      function Ao(r, e2, t) {
        return Bn(r), r <= 0 ? xe(r) : e2 !== void 0 ? typeof t == "string" ? xe(r).fill(e2, t) : xe(r).fill(e2) : xe(r);
      }
      l.alloc = function(r, e2, t) {
        return Ao(r, e2, t);
      };
      function Vt(r) {
        return Bn(r), xe(r < 0 ? 0 : zt(r) | 0);
      }
      l.allocUnsafe = function(r) {
        return Vt(r);
      };
      l.allocUnsafeSlow = function(r) {
        return Vt(r);
      };
      function _o(r, e2) {
        if ((typeof e2 != "string" || e2 === "") && (e2 = "utf8"), !l.isEncoding(e2))
          throw new TypeError("Unknown encoding: " + e2);
        let t = Tn(r, e2) | 0, n = xe(t), i = n.write(r, e2);
        return i !== t && (n = n.slice(0, i)), n;
      }
      function $t(r) {
        let e2 = r.length < 0 ? 0 : zt(r.length) | 0, t = xe(e2);
        for (let n = 0; n < e2; n += 1)
          t[n] = r[n] & 255;
        return t;
      }
      function Co(r) {
        if (ge(r, Uint8Array)) {
          let e2 = new Uint8Array(r);
          return Wt(e2.buffer, e2.byteOffset, e2.byteLength);
        }
        return $t(r);
      }
      function Wt(r, e2, t) {
        if (e2 < 0 || r.byteLength < e2)
          throw new RangeError('"offset" is outside of buffer bounds');
        if (r.byteLength < e2 + (t || 0))
          throw new RangeError('"length" is outside of buffer bounds');
        let n;
        return e2 === void 0 && t === void 0 ? n = new Uint8Array(r) : t === void 0 ? n = new Uint8Array(r, e2) : n = new Uint8Array(r, e2, t), Object.setPrototypeOf(n, l.prototype), n;
      }
      function Uo(r) {
        if (l.isBuffer(r)) {
          let e2 = zt(r.length) | 0, t = xe(e2);
          return t.length === 0 || r.copy(t, 0, 0, e2), t;
        }
        if (r.length !== void 0)
          return typeof r.length != "number" || Jt(r.length) ? xe(0) : $t(r);
        if (r.type === "Buffer" && Array.isArray(r.data))
          return $t(r.data);
      }
      function zt(r) {
        if (r >= ft)
          throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + ft.toString(16) + " bytes");
        return r | 0;
      }
      function Io(r) {
        return +r != r && (r = 0), l.alloc(+r);
      }
      l.isBuffer = function(e2) {
        return e2 != null && e2._isBuffer === true && e2 !== l.prototype;
      };
      l.compare = function(e2, t) {
        if (ge(e2, Uint8Array) && (e2 = l.from(e2, e2.offset, e2.byteLength)), ge(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)), !l.isBuffer(e2) || !l.isBuffer(t))
          throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (e2 === t)
          return 0;
        let n = e2.length, i = t.length;
        for (let s = 0, o = Math.min(n, i); s < o; ++s)
          if (e2[s] !== t[s]) {
            n = e2[s], i = t[s];
            break;
          }
        return n < i ? -1 : i < n ? 1 : 0;
      };
      l.isEncoding = function(e2) {
        switch (String(e2).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return true;
          default:
            return false;
        }
      };
      l.concat = function(e2, t) {
        if (!Array.isArray(e2))
          throw new TypeError('"list" argument must be an Array of Buffers');
        if (e2.length === 0)
          return l.alloc(0);
        let n;
        if (t === void 0)
          for (t = 0, n = 0; n < e2.length; ++n)
            t += e2[n].length;
        let i = l.allocUnsafe(t), s = 0;
        for (n = 0; n < e2.length; ++n) {
          let o = e2[n];
          if (ge(o, Uint8Array))
            s + o.length > i.length ? (l.isBuffer(o) || (o = l.from(o)), o.copy(i, s)) : Uint8Array.prototype.set.call(i, o, s);
          else if (l.isBuffer(o))
            o.copy(i, s);
          else
            throw new TypeError('"list" argument must be an Array of Buffers');
          s += o.length;
        }
        return i;
      };
      function Tn(r, e2) {
        if (l.isBuffer(r))
          return r.length;
        if (ArrayBuffer.isView(r) || ge(r, ArrayBuffer))
          return r.byteLength;
        if (typeof r != "string")
          throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof r);
        let t = r.length, n = arguments.length > 2 && arguments[2] === true;
        if (!n && t === 0)
          return 0;
        let i = false;
        for (; ; )
          switch (e2) {
            case "ascii":
            case "latin1":
            case "binary":
              return t;
            case "utf8":
            case "utf-8":
              return Gt(r).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return t * 2;
            case "hex":
              return t >>> 1;
            case "base64":
              return qn(r).length;
            default:
              if (i)
                return n ? -1 : Gt(r).length;
              e2 = ("" + e2).toLowerCase(), i = true;
          }
      }
      l.byteLength = Tn;
      function Lo(r, e2, t) {
        let n = false;
        if ((e2 === void 0 || e2 < 0) && (e2 = 0), e2 > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, e2 >>>= 0, t <= e2))
          return "";
        for (r || (r = "utf8"); ; )
          switch (r) {
            case "hex":
              return Oo(this, e2, t);
            case "utf8":
            case "utf-8":
              return Rn(this, e2, t);
            case "ascii":
              return No(this, e2, t);
            case "latin1":
            case "binary":
              return Do(this, e2, t);
            case "base64":
              return ko(this, e2, t);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return qo(this, e2, t);
            default:
              if (n)
                throw new TypeError("Unknown encoding: " + r);
              r = (r + "").toLowerCase(), n = true;
          }
      }
      l.prototype._isBuffer = true;
      function Ie(r, e2, t) {
        let n = r[e2];
        r[e2] = r[t], r[t] = n;
      }
      l.prototype.swap16 = function() {
        let e2 = this.length;
        if (e2 % 2 !== 0)
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let t = 0; t < e2; t += 2)
          Ie(this, t, t + 1);
        return this;
      };
      l.prototype.swap32 = function() {
        let e2 = this.length;
        if (e2 % 4 !== 0)
          throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let t = 0; t < e2; t += 4)
          Ie(this, t, t + 3), Ie(this, t + 1, t + 2);
        return this;
      };
      l.prototype.swap64 = function() {
        let e2 = this.length;
        if (e2 % 8 !== 0)
          throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let t = 0; t < e2; t += 8)
          Ie(this, t, t + 7), Ie(this, t + 1, t + 6), Ie(this, t + 2, t + 5), Ie(this, t + 3, t + 4);
        return this;
      };
      l.prototype.toString = function() {
        let e2 = this.length;
        return e2 === 0 ? "" : arguments.length === 0 ? Rn(this, 0, e2) : Lo.apply(this, arguments);
      };
      l.prototype.toLocaleString = l.prototype.toString;
      l.prototype.equals = function(e2) {
        if (!l.isBuffer(e2))
          throw new TypeError("Argument must be a Buffer");
        return this === e2 ? true : l.compare(this, e2) === 0;
      };
      l.prototype.inspect = function() {
        let e2 = "", t = ke.INSPECT_MAX_BYTES;
        return e2 = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e2 += " ... "), "<Buffer " + e2 + ">";
      };
      _n && (l.prototype[_n] = l.prototype.inspect);
      l.prototype.compare = function(e2, t, n, i, s) {
        if (ge(e2, Uint8Array) && (e2 = l.from(e2, e2.offset, e2.byteLength)), !l.isBuffer(e2))
          throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e2);
        if (t === void 0 && (t = 0), n === void 0 && (n = e2 ? e2.length : 0), i === void 0 && (i = 0), s === void 0 && (s = this.length), t < 0 || n > e2.length || i < 0 || s > this.length)
          throw new RangeError("out of range index");
        if (i >= s && t >= n)
          return 0;
        if (i >= s)
          return -1;
        if (t >= n)
          return 1;
        if (t >>>= 0, n >>>= 0, i >>>= 0, s >>>= 0, this === e2)
          return 0;
        let o = s - i, a = n - t, u = Math.min(o, a), h = this.slice(i, s), c = e2.slice(t, n);
        for (let f = 0; f < u; ++f)
          if (h[f] !== c[f]) {
            o = h[f], a = c[f];
            break;
          }
        return o < a ? -1 : a < o ? 1 : 0;
      };
      function Pn(r, e2, t, n, i) {
        if (r.length === 0)
          return -1;
        if (typeof t == "string" ? (n = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, Jt(t) && (t = i ? 0 : r.length - 1), t < 0 && (t = r.length + t), t >= r.length) {
          if (i)
            return -1;
          t = r.length - 1;
        } else if (t < 0)
          if (i)
            t = 0;
          else
            return -1;
        if (typeof e2 == "string" && (e2 = l.from(e2, n)), l.isBuffer(e2))
          return e2.length === 0 ? -1 : Cn(r, e2, t, n, i);
        if (typeof e2 == "number")
          return e2 = e2 & 255, typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(r, e2, t) : Uint8Array.prototype.lastIndexOf.call(r, e2, t) : Cn(r, [e2], t, n, i);
        throw new TypeError("val must be string, number or Buffer");
      }
      function Cn(r, e2, t, n, i) {
        let s = 1, o = r.length, a = e2.length;
        if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
          if (r.length < 2 || e2.length < 2)
            return -1;
          s = 2, o /= 2, a /= 2, t /= 2;
        }
        function u(c, f) {
          return s === 1 ? c[f] : c.readUInt16BE(f * s);
        }
        let h;
        if (i) {
          let c = -1;
          for (h = t; h < o; h++)
            if (u(r, h) === u(e2, c === -1 ? 0 : h - c)) {
              if (c === -1 && (c = h), h - c + 1 === a)
                return c * s;
            } else
              c !== -1 && (h -= h - c), c = -1;
        } else
          for (t + a > o && (t = o - a), h = t; h >= 0; h--) {
            let c = true;
            for (let f = 0; f < a; f++)
              if (u(r, h + f) !== u(e2, f)) {
                c = false;
                break;
              }
            if (c)
              return h;
          }
        return -1;
      }
      l.prototype.includes = function(e2, t, n) {
        return this.indexOf(e2, t, n) !== -1;
      };
      l.prototype.indexOf = function(e2, t, n) {
        return Pn(this, e2, t, n, true);
      };
      l.prototype.lastIndexOf = function(e2, t, n) {
        return Pn(this, e2, t, n, false);
      };
      function Bo(r, e2, t, n) {
        t = Number(t) || 0;
        let i = r.length - t;
        n ? (n = Number(n), n > i && (n = i)) : n = i;
        let s = e2.length;
        n > s / 2 && (n = s / 2);
        let o;
        for (o = 0; o < n; ++o) {
          let a = parseInt(e2.substr(o * 2, 2), 16);
          if (Jt(a))
            return o;
          r[t + o] = a;
        }
        return o;
      }
      function To(r, e2, t, n) {
        return dt(Gt(e2, r.length - t), r, t, n);
      }
      function Po(r, e2, t, n) {
        return dt(Ko(e2), r, t, n);
      }
      function Ro(r, e2, t, n) {
        return dt(qn(e2), r, t, n);
      }
      function Mo(r, e2, t, n) {
        return dt($o(e2, r.length - t), r, t, n);
      }
      l.prototype.write = function(e2, t, n, i) {
        if (t === void 0)
          i = "utf8", n = this.length, t = 0;
        else if (n === void 0 && typeof t == "string")
          i = t, n = this.length, t = 0;
        else if (isFinite(t))
          t = t >>> 0, isFinite(n) ? (n = n >>> 0, i === void 0 && (i = "utf8")) : (i = n, n = void 0);
        else
          throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        let s = this.length - t;
        if ((n === void 0 || n > s) && (n = s), e2.length > 0 && (n < 0 || t < 0) || t > this.length)
          throw new RangeError("Attempt to write outside buffer bounds");
        i || (i = "utf8");
        let o = false;
        for (; ; )
          switch (i) {
            case "hex":
              return Bo(this, e2, t, n);
            case "utf8":
            case "utf-8":
              return To(this, e2, t, n);
            case "ascii":
            case "latin1":
            case "binary":
              return Po(this, e2, t, n);
            case "base64":
              return Ro(this, e2, t, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return Mo(this, e2, t, n);
            default:
              if (o)
                throw new TypeError("Unknown encoding: " + i);
              i = ("" + i).toLowerCase(), o = true;
          }
      };
      l.prototype.toJSON = function() {
        return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
      };
      function ko(r, e2, t) {
        return e2 === 0 && t === r.length ? Kt.fromByteArray(r) : Kt.fromByteArray(r.slice(e2, t));
      }
      function Rn(r, e2, t) {
        t = Math.min(r.length, t);
        let n = [], i = e2;
        for (; i < t; ) {
          let s = r[i], o = null, a = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
          if (i + a <= t) {
            let u, h, c, f;
            switch (a) {
              case 1:
                s < 128 && (o = s);
                break;
              case 2:
                u = r[i + 1], (u & 192) === 128 && (f = (s & 31) << 6 | u & 63, f > 127 && (o = f));
                break;
              case 3:
                u = r[i + 1], h = r[i + 2], (u & 192) === 128 && (h & 192) === 128 && (f = (s & 15) << 12 | (u & 63) << 6 | h & 63, f > 2047 && (f < 55296 || f > 57343) && (o = f));
                break;
              case 4:
                u = r[i + 1], h = r[i + 2], c = r[i + 3], (u & 192) === 128 && (h & 192) === 128 && (c & 192) === 128 && (f = (s & 15) << 18 | (u & 63) << 12 | (h & 63) << 6 | c & 63, f > 65535 && f < 1114112 && (o = f));
            }
          }
          o === null ? (o = 65533, a = 1) : o > 65535 && (o -= 65536, n.push(o >>> 10 & 1023 | 55296), o = 56320 | o & 1023), n.push(o), i += a;
        }
        return Fo(n);
      }
      var Un = 4096;
      function Fo(r) {
        let e2 = r.length;
        if (e2 <= Un)
          return String.fromCharCode.apply(String, r);
        let t = "", n = 0;
        for (; n < e2; )
          t += String.fromCharCode.apply(String, r.slice(n, n += Un));
        return t;
      }
      function No(r, e2, t) {
        let n = "";
        t = Math.min(r.length, t);
        for (let i = e2; i < t; ++i)
          n += String.fromCharCode(r[i] & 127);
        return n;
      }
      function Do(r, e2, t) {
        let n = "";
        t = Math.min(r.length, t);
        for (let i = e2; i < t; ++i)
          n += String.fromCharCode(r[i]);
        return n;
      }
      function Oo(r, e2, t) {
        let n = r.length;
        (!e2 || e2 < 0) && (e2 = 0), (!t || t < 0 || t > n) && (t = n);
        let i = "";
        for (let s = e2; s < t; ++s)
          i += Wo[r[s]];
        return i;
      }
      function qo(r, e2, t) {
        let n = r.slice(e2, t), i = "";
        for (let s = 0; s < n.length - 1; s += 2)
          i += String.fromCharCode(n[s] + n[s + 1] * 256);
        return i;
      }
      l.prototype.slice = function(e2, t) {
        let n = this.length;
        e2 = ~~e2, t = t === void 0 ? n : ~~t, e2 < 0 ? (e2 += n, e2 < 0 && (e2 = 0)) : e2 > n && (e2 = n), t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), t < e2 && (t = e2);
        let i = this.subarray(e2, t);
        return Object.setPrototypeOf(i, l.prototype), i;
      };
      function W(r, e2, t) {
        if (r % 1 !== 0 || r < 0)
          throw new RangeError("offset is not uint");
        if (r + e2 > t)
          throw new RangeError("Trying to access beyond buffer length");
      }
      l.prototype.readUintLE = l.prototype.readUIntLE = function(e2, t, n) {
        e2 = e2 >>> 0, t = t >>> 0, n || W(e2, t, this.length);
        let i = this[e2], s = 1, o = 0;
        for (; ++o < t && (s *= 256); )
          i += this[e2 + o] * s;
        return i;
      };
      l.prototype.readUintBE = l.prototype.readUIntBE = function(e2, t, n) {
        e2 = e2 >>> 0, t = t >>> 0, n || W(e2, t, this.length);
        let i = this[e2 + --t], s = 1;
        for (; t > 0 && (s *= 256); )
          i += this[e2 + --t] * s;
        return i;
      };
      l.prototype.readUint8 = l.prototype.readUInt8 = function(e2, t) {
        return e2 = e2 >>> 0, t || W(e2, 1, this.length), this[e2];
      };
      l.prototype.readUint16LE = l.prototype.readUInt16LE = function(e2, t) {
        return e2 = e2 >>> 0, t || W(e2, 2, this.length), this[e2] | this[e2 + 1] << 8;
      };
      l.prototype.readUint16BE = l.prototype.readUInt16BE = function(e2, t) {
        return e2 = e2 >>> 0, t || W(e2, 2, this.length), this[e2] << 8 | this[e2 + 1];
      };
      l.prototype.readUint32LE = l.prototype.readUInt32LE = function(e2, t) {
        return e2 = e2 >>> 0, t || W(e2, 4, this.length), (this[e2] | this[e2 + 1] << 8 | this[e2 + 2] << 16) + this[e2 + 3] * 16777216;
      };
      l.prototype.readUint32BE = l.prototype.readUInt32BE = function(e2, t) {
        return e2 = e2 >>> 0, t || W(e2, 4, this.length), this[e2] * 16777216 + (this[e2 + 1] << 16 | this[e2 + 2] << 8 | this[e2 + 3]);
      };
      l.prototype.readBigUInt64LE = Ee(function(e2) {
        e2 = e2 >>> 0, Me(e2, "offset");
        let t = this[e2], n = this[e2 + 7];
        (t === void 0 || n === void 0) && Ge(e2, this.length - 8);
        let i = t + this[++e2] * 2 ** 8 + this[++e2] * 2 ** 16 + this[++e2] * 2 ** 24, s = this[++e2] + this[++e2] * 2 ** 8 + this[++e2] * 2 ** 16 + n * 2 ** 24;
        return BigInt(i) + (BigInt(s) << BigInt(32));
      });
      l.prototype.readBigUInt64BE = Ee(function(e2) {
        e2 = e2 >>> 0, Me(e2, "offset");
        let t = this[e2], n = this[e2 + 7];
        (t === void 0 || n === void 0) && Ge(e2, this.length - 8);
        let i = t * 2 ** 24 + this[++e2] * 2 ** 16 + this[++e2] * 2 ** 8 + this[++e2], s = this[++e2] * 2 ** 24 + this[++e2] * 2 ** 16 + this[++e2] * 2 ** 8 + n;
        return (BigInt(i) << BigInt(32)) + BigInt(s);
      });
      l.prototype.readIntLE = function(e2, t, n) {
        e2 = e2 >>> 0, t = t >>> 0, n || W(e2, t, this.length);
        let i = this[e2], s = 1, o = 0;
        for (; ++o < t && (s *= 256); )
          i += this[e2 + o] * s;
        return s *= 128, i >= s && (i -= Math.pow(2, 8 * t)), i;
      };
      l.prototype.readIntBE = function(e2, t, n) {
        e2 = e2 >>> 0, t = t >>> 0, n || W(e2, t, this.length);
        let i = t, s = 1, o = this[e2 + --i];
        for (; i > 0 && (s *= 256); )
          o += this[e2 + --i] * s;
        return s *= 128, o >= s && (o -= Math.pow(2, 8 * t)), o;
      };
      l.prototype.readInt8 = function(e2, t) {
        return e2 = e2 >>> 0, t || W(e2, 1, this.length), this[e2] & 128 ? (255 - this[e2] + 1) * -1 : this[e2];
      };
      l.prototype.readInt16LE = function(e2, t) {
        e2 = e2 >>> 0, t || W(e2, 2, this.length);
        let n = this[e2] | this[e2 + 1] << 8;
        return n & 32768 ? n | 4294901760 : n;
      };
      l.prototype.readInt16BE = function(e2, t) {
        e2 = e2 >>> 0, t || W(e2, 2, this.length);
        let n = this[e2 + 1] | this[e2] << 8;
        return n & 32768 ? n | 4294901760 : n;
      };
      l.prototype.readInt32LE = function(e2, t) {
        return e2 = e2 >>> 0, t || W(e2, 4, this.length), this[e2] | this[e2 + 1] << 8 | this[e2 + 2] << 16 | this[e2 + 3] << 24;
      };
      l.prototype.readInt32BE = function(e2, t) {
        return e2 = e2 >>> 0, t || W(e2, 4, this.length), this[e2] << 24 | this[e2 + 1] << 16 | this[e2 + 2] << 8 | this[e2 + 3];
      };
      l.prototype.readBigInt64LE = Ee(function(e2) {
        e2 = e2 >>> 0, Me(e2, "offset");
        let t = this[e2], n = this[e2 + 7];
        (t === void 0 || n === void 0) && Ge(e2, this.length - 8);
        let i = this[e2 + 4] + this[e2 + 5] * 2 ** 8 + this[e2 + 6] * 2 ** 16 + (n << 24);
        return (BigInt(i) << BigInt(32)) + BigInt(t + this[++e2] * 2 ** 8 + this[++e2] * 2 ** 16 + this[++e2] * 2 ** 24);
      });
      l.prototype.readBigInt64BE = Ee(function(e2) {
        e2 = e2 >>> 0, Me(e2, "offset");
        let t = this[e2], n = this[e2 + 7];
        (t === void 0 || n === void 0) && Ge(e2, this.length - 8);
        let i = (t << 24) + this[++e2] * 2 ** 16 + this[++e2] * 2 ** 8 + this[++e2];
        return (BigInt(i) << BigInt(32)) + BigInt(this[++e2] * 2 ** 24 + this[++e2] * 2 ** 16 + this[++e2] * 2 ** 8 + n);
      });
      l.prototype.readFloatLE = function(e2, t) {
        return e2 = e2 >>> 0, t || W(e2, 4, this.length), Re.read(this, e2, true, 23, 4);
      };
      l.prototype.readFloatBE = function(e2, t) {
        return e2 = e2 >>> 0, t || W(e2, 4, this.length), Re.read(this, e2, false, 23, 4);
      };
      l.prototype.readDoubleLE = function(e2, t) {
        return e2 = e2 >>> 0, t || W(e2, 8, this.length), Re.read(this, e2, true, 52, 8);
      };
      l.prototype.readDoubleBE = function(e2, t) {
        return e2 = e2 >>> 0, t || W(e2, 8, this.length), Re.read(this, e2, false, 52, 8);
      };
      function oe(r, e2, t, n, i, s) {
        if (!l.isBuffer(r))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (e2 > i || e2 < s)
          throw new RangeError('"value" argument is out of bounds');
        if (t + n > r.length)
          throw new RangeError("Index out of range");
      }
      l.prototype.writeUintLE = l.prototype.writeUIntLE = function(e2, t, n, i) {
        if (e2 = +e2, t = t >>> 0, n = n >>> 0, !i) {
          let a = Math.pow(2, 8 * n) - 1;
          oe(this, e2, t, n, a, 0);
        }
        let s = 1, o = 0;
        for (this[t] = e2 & 255; ++o < n && (s *= 256); )
          this[t + o] = e2 / s & 255;
        return t + n;
      };
      l.prototype.writeUintBE = l.prototype.writeUIntBE = function(e2, t, n, i) {
        if (e2 = +e2, t = t >>> 0, n = n >>> 0, !i) {
          let a = Math.pow(2, 8 * n) - 1;
          oe(this, e2, t, n, a, 0);
        }
        let s = n - 1, o = 1;
        for (this[t + s] = e2 & 255; --s >= 0 && (o *= 256); )
          this[t + s] = e2 / o & 255;
        return t + n;
      };
      l.prototype.writeUint8 = l.prototype.writeUInt8 = function(e2, t, n) {
        return e2 = +e2, t = t >>> 0, n || oe(this, e2, t, 1, 255, 0), this[t] = e2 & 255, t + 1;
      };
      l.prototype.writeUint16LE = l.prototype.writeUInt16LE = function(e2, t, n) {
        return e2 = +e2, t = t >>> 0, n || oe(this, e2, t, 2, 65535, 0), this[t] = e2 & 255, this[t + 1] = e2 >>> 8, t + 2;
      };
      l.prototype.writeUint16BE = l.prototype.writeUInt16BE = function(e2, t, n) {
        return e2 = +e2, t = t >>> 0, n || oe(this, e2, t, 2, 65535, 0), this[t] = e2 >>> 8, this[t + 1] = e2 & 255, t + 2;
      };
      l.prototype.writeUint32LE = l.prototype.writeUInt32LE = function(e2, t, n) {
        return e2 = +e2, t = t >>> 0, n || oe(this, e2, t, 4, 4294967295, 0), this[t + 3] = e2 >>> 24, this[t + 2] = e2 >>> 16, this[t + 1] = e2 >>> 8, this[t] = e2 & 255, t + 4;
      };
      l.prototype.writeUint32BE = l.prototype.writeUInt32BE = function(e2, t, n) {
        return e2 = +e2, t = t >>> 0, n || oe(this, e2, t, 4, 4294967295, 0), this[t] = e2 >>> 24, this[t + 1] = e2 >>> 16, this[t + 2] = e2 >>> 8, this[t + 3] = e2 & 255, t + 4;
      };
      function Mn(r, e2, t, n, i) {
        On(e2, n, i, r, t, 7);
        let s = Number(e2 & BigInt(4294967295));
        r[t++] = s, s = s >> 8, r[t++] = s, s = s >> 8, r[t++] = s, s = s >> 8, r[t++] = s;
        let o = Number(e2 >> BigInt(32) & BigInt(4294967295));
        return r[t++] = o, o = o >> 8, r[t++] = o, o = o >> 8, r[t++] = o, o = o >> 8, r[t++] = o, t;
      }
      function kn(r, e2, t, n, i) {
        On(e2, n, i, r, t, 7);
        let s = Number(e2 & BigInt(4294967295));
        r[t + 7] = s, s = s >> 8, r[t + 6] = s, s = s >> 8, r[t + 5] = s, s = s >> 8, r[t + 4] = s;
        let o = Number(e2 >> BigInt(32) & BigInt(4294967295));
        return r[t + 3] = o, o = o >> 8, r[t + 2] = o, o = o >> 8, r[t + 1] = o, o = o >> 8, r[t] = o, t + 8;
      }
      l.prototype.writeBigUInt64LE = Ee(function(e2, t = 0) {
        return Mn(this, e2, t, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      l.prototype.writeBigUInt64BE = Ee(function(e2, t = 0) {
        return kn(this, e2, t, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      l.prototype.writeIntLE = function(e2, t, n, i) {
        if (e2 = +e2, t = t >>> 0, !i) {
          let u = Math.pow(2, 8 * n - 1);
          oe(this, e2, t, n, u - 1, -u);
        }
        let s = 0, o = 1, a = 0;
        for (this[t] = e2 & 255; ++s < n && (o *= 256); )
          e2 < 0 && a === 0 && this[t + s - 1] !== 0 && (a = 1), this[t + s] = (e2 / o >> 0) - a & 255;
        return t + n;
      };
      l.prototype.writeIntBE = function(e2, t, n, i) {
        if (e2 = +e2, t = t >>> 0, !i) {
          let u = Math.pow(2, 8 * n - 1);
          oe(this, e2, t, n, u - 1, -u);
        }
        let s = n - 1, o = 1, a = 0;
        for (this[t + s] = e2 & 255; --s >= 0 && (o *= 256); )
          e2 < 0 && a === 0 && this[t + s + 1] !== 0 && (a = 1), this[t + s] = (e2 / o >> 0) - a & 255;
        return t + n;
      };
      l.prototype.writeInt8 = function(e2, t, n) {
        return e2 = +e2, t = t >>> 0, n || oe(this, e2, t, 1, 127, -128), e2 < 0 && (e2 = 255 + e2 + 1), this[t] = e2 & 255, t + 1;
      };
      l.prototype.writeInt16LE = function(e2, t, n) {
        return e2 = +e2, t = t >>> 0, n || oe(this, e2, t, 2, 32767, -32768), this[t] = e2 & 255, this[t + 1] = e2 >>> 8, t + 2;
      };
      l.prototype.writeInt16BE = function(e2, t, n) {
        return e2 = +e2, t = t >>> 0, n || oe(this, e2, t, 2, 32767, -32768), this[t] = e2 >>> 8, this[t + 1] = e2 & 255, t + 2;
      };
      l.prototype.writeInt32LE = function(e2, t, n) {
        return e2 = +e2, t = t >>> 0, n || oe(this, e2, t, 4, 2147483647, -2147483648), this[t] = e2 & 255, this[t + 1] = e2 >>> 8, this[t + 2] = e2 >>> 16, this[t + 3] = e2 >>> 24, t + 4;
      };
      l.prototype.writeInt32BE = function(e2, t, n) {
        return e2 = +e2, t = t >>> 0, n || oe(this, e2, t, 4, 2147483647, -2147483648), e2 < 0 && (e2 = 4294967295 + e2 + 1), this[t] = e2 >>> 24, this[t + 1] = e2 >>> 16, this[t + 2] = e2 >>> 8, this[t + 3] = e2 & 255, t + 4;
      };
      l.prototype.writeBigInt64LE = Ee(function(e2, t = 0) {
        return Mn(this, e2, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      l.prototype.writeBigInt64BE = Ee(function(e2, t = 0) {
        return kn(this, e2, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      function Fn(r, e2, t, n, i, s) {
        if (t + n > r.length)
          throw new RangeError("Index out of range");
        if (t < 0)
          throw new RangeError("Index out of range");
      }
      function Nn(r, e2, t, n, i) {
        return e2 = +e2, t = t >>> 0, i || Fn(r, e2, t, 4, 34028234663852886e22, -34028234663852886e22), Re.write(r, e2, t, n, 23, 4), t + 4;
      }
      l.prototype.writeFloatLE = function(e2, t, n) {
        return Nn(this, e2, t, true, n);
      };
      l.prototype.writeFloatBE = function(e2, t, n) {
        return Nn(this, e2, t, false, n);
      };
      function Dn(r, e2, t, n, i) {
        return e2 = +e2, t = t >>> 0, i || Fn(r, e2, t, 8, 17976931348623157e292, -17976931348623157e292), Re.write(r, e2, t, n, 52, 8), t + 8;
      }
      l.prototype.writeDoubleLE = function(e2, t, n) {
        return Dn(this, e2, t, true, n);
      };
      l.prototype.writeDoubleBE = function(e2, t, n) {
        return Dn(this, e2, t, false, n);
      };
      l.prototype.copy = function(e2, t, n, i) {
        if (!l.isBuffer(e2))
          throw new TypeError("argument should be a Buffer");
        if (n || (n = 0), !i && i !== 0 && (i = this.length), t >= e2.length && (t = e2.length), t || (t = 0), i > 0 && i < n && (i = n), i === n || e2.length === 0 || this.length === 0)
          return 0;
        if (t < 0)
          throw new RangeError("targetStart out of bounds");
        if (n < 0 || n >= this.length)
          throw new RangeError("Index out of range");
        if (i < 0)
          throw new RangeError("sourceEnd out of bounds");
        i > this.length && (i = this.length), e2.length - t < i - n && (i = e2.length - t + n);
        let s = i - n;
        return this === e2 && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, n, i) : Uint8Array.prototype.set.call(e2, this.subarray(n, i), t), s;
      };
      l.prototype.fill = function(e2, t, n, i) {
        if (typeof e2 == "string") {
          if (typeof t == "string" ? (i = t, t = 0, n = this.length) : typeof n == "string" && (i = n, n = this.length), i !== void 0 && typeof i != "string")
            throw new TypeError("encoding must be a string");
          if (typeof i == "string" && !l.isEncoding(i))
            throw new TypeError("Unknown encoding: " + i);
          if (e2.length === 1) {
            let o = e2.charCodeAt(0);
            (i === "utf8" && o < 128 || i === "latin1") && (e2 = o);
          }
        } else
          typeof e2 == "number" ? e2 = e2 & 255 : typeof e2 == "boolean" && (e2 = Number(e2));
        if (t < 0 || this.length < t || this.length < n)
          throw new RangeError("Out of range index");
        if (n <= t)
          return this;
        t = t >>> 0, n = n === void 0 ? this.length : n >>> 0, e2 || (e2 = 0);
        let s;
        if (typeof e2 == "number")
          for (s = t; s < n; ++s)
            this[s] = e2;
        else {
          let o = l.isBuffer(e2) ? e2 : l.from(e2, i), a = o.length;
          if (a === 0)
            throw new TypeError('The value "' + e2 + '" is invalid for argument "value"');
          for (s = 0; s < n - t; ++s)
            this[s + t] = o[s % a];
        }
        return this;
      };
      var Pe = {};
      function Yt(r, e2, t) {
        Pe[r] = class extends t {
          constructor() {
            super(), Object.defineProperty(this, "message", { value: e2.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${r}]`, this.stack, delete this.name;
          }
          get code() {
            return r;
          }
          set code(i) {
            Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: i, writable: true });
          }
          toString() {
            return `${this.name} [${r}]: ${this.message}`;
          }
        };
      }
      Yt("ERR_BUFFER_OUT_OF_BOUNDS", function(r) {
        return r ? `${r} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
      }, RangeError);
      Yt("ERR_INVALID_ARG_TYPE", function(r, e2) {
        return `The "${r}" argument must be of type number. Received type ${typeof e2}`;
      }, TypeError);
      Yt("ERR_OUT_OF_RANGE", function(r, e2, t) {
        let n = `The value of "${r}" is out of range.`, i = t;
        return Number.isInteger(t) && Math.abs(t) > 2 ** 32 ? i = In(String(t)) : typeof t == "bigint" && (i = String(t), (t > BigInt(2) ** BigInt(32) || t < -(BigInt(2) ** BigInt(32))) && (i = In(i)), i += "n"), n += ` It must be ${e2}. Received ${i}`, n;
      }, RangeError);
      function In(r) {
        let e2 = "", t = r.length, n = r[0] === "-" ? 1 : 0;
        for (; t >= n + 4; t -= 3)
          e2 = `_${r.slice(t - 3, t)}${e2}`;
        return `${r.slice(0, t)}${e2}`;
      }
      function Qo(r, e2, t) {
        Me(e2, "offset"), (r[e2] === void 0 || r[e2 + t] === void 0) && Ge(e2, r.length - (t + 1));
      }
      function On(r, e2, t, n, i, s) {
        if (r > t || r < e2) {
          let o = typeof e2 == "bigint" ? "n" : "", a;
          throw s > 3 ? e2 === 0 || e2 === BigInt(0) ? a = `>= 0${o} and < 2${o} ** ${(s + 1) * 8}${o}` : a = `>= -(2${o} ** ${(s + 1) * 8 - 1}${o}) and < 2 ** ${(s + 1) * 8 - 1}${o}` : a = `>= ${e2}${o} and <= ${t}${o}`, new Pe.ERR_OUT_OF_RANGE("value", a, r);
        }
        Qo(n, i, s);
      }
      function Me(r, e2) {
        if (typeof r != "number")
          throw new Pe.ERR_INVALID_ARG_TYPE(e2, "number", r);
      }
      function Ge(r, e2, t) {
        throw Math.floor(r) !== r ? (Me(r, t), new Pe.ERR_OUT_OF_RANGE(t || "offset", "an integer", r)) : e2 < 0 ? new Pe.ERR_BUFFER_OUT_OF_BOUNDS() : new Pe.ERR_OUT_OF_RANGE(t || "offset", `>= ${t ? 1 : 0} and <= ${e2}`, r);
      }
      var Ho = /[^+/0-9A-Za-z-_]/g;
      function jo(r) {
        if (r = r.split("=")[0], r = r.trim().replace(Ho, ""), r.length < 2)
          return "";
        for (; r.length % 4 !== 0; )
          r = r + "=";
        return r;
      }
      function Gt(r, e2) {
        e2 = e2 || 1 / 0;
        let t, n = r.length, i = null, s = [];
        for (let o = 0; o < n; ++o) {
          if (t = r.charCodeAt(o), t > 55295 && t < 57344) {
            if (!i) {
              if (t > 56319) {
                (e2 -= 3) > -1 && s.push(239, 191, 189);
                continue;
              } else if (o + 1 === n) {
                (e2 -= 3) > -1 && s.push(239, 191, 189);
                continue;
              }
              i = t;
              continue;
            }
            if (t < 56320) {
              (e2 -= 3) > -1 && s.push(239, 191, 189), i = t;
              continue;
            }
            t = (i - 55296 << 10 | t - 56320) + 65536;
          } else
            i && (e2 -= 3) > -1 && s.push(239, 191, 189);
          if (i = null, t < 128) {
            if ((e2 -= 1) < 0)
              break;
            s.push(t);
          } else if (t < 2048) {
            if ((e2 -= 2) < 0)
              break;
            s.push(t >> 6 | 192, t & 63 | 128);
          } else if (t < 65536) {
            if ((e2 -= 3) < 0)
              break;
            s.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
          } else if (t < 1114112) {
            if ((e2 -= 4) < 0)
              break;
            s.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
          } else
            throw new Error("Invalid code point");
        }
        return s;
      }
      function Ko(r) {
        let e2 = [];
        for (let t = 0; t < r.length; ++t)
          e2.push(r.charCodeAt(t) & 255);
        return e2;
      }
      function $o(r, e2) {
        let t, n, i, s = [];
        for (let o = 0; o < r.length && !((e2 -= 2) < 0); ++o)
          t = r.charCodeAt(o), n = t >> 8, i = t % 256, s.push(i), s.push(n);
        return s;
      }
      function qn(r) {
        return Kt.toByteArray(jo(r));
      }
      function dt(r, e2, t, n) {
        let i;
        for (i = 0; i < n && !(i + t >= e2.length || i >= r.length); ++i)
          e2[i + t] = r[i];
        return i;
      }
      function ge(r, e2) {
        return r instanceof e2 || r != null && r.constructor != null && r.constructor.name != null && r.constructor.name === e2.name;
      }
      function Jt(r) {
        return r !== r;
      }
      var Wo = function() {
        let r = "0123456789abcdef", e2 = new Array(256);
        for (let t = 0; t < 16; ++t) {
          let n = t * 16;
          for (let i = 0; i < 16; ++i)
            e2[n + i] = r[t] + r[i];
        }
        return e2;
      }();
      function Ee(r) {
        return typeof BigInt > "u" ? Go : r;
      }
      function Go() {
        throw new Error("BigInt not supported");
      }
    });
    var v;
    var E;
    var p;
    var y;
    var m;
    var d = ee(() => {
      "use strict";
      v = globalThis, E = globalThis.setImmediate ?? ((r) => setTimeout(r, 0)), p = typeof globalThis.Buffer == "function" && typeof globalThis.Buffer.allocUnsafe == "function" ? globalThis.Buffer : Qn().Buffer, y = globalThis.process ?? {};
      y.env ?? (y.env = {});
      y.nextTick ?? (y.nextTick = (r) => setTimeout(r, 0));
      m = globalThis.crypto ?? {};
      m.subtle ?? (m.subtle = {});
    });
    var be = C((Tc, Zt) => {
      "use strict";
      d();
      var Fe = typeof Reflect == "object" ? Reflect : null, Hn = Fe && typeof Fe.apply == "function" ? Fe.apply : function(e2, t, n) {
        return Function.prototype.apply.call(e2, t, n);
      }, pt;
      Fe && typeof Fe.ownKeys == "function" ? pt = Fe.ownKeys : Object.getOwnPropertySymbols ? pt = function(e2) {
        return Object.getOwnPropertyNames(e2).concat(Object.getOwnPropertySymbols(e2));
      } : pt = function(e2) {
        return Object.getOwnPropertyNames(e2);
      };
      function Vo(r) {
        console && console.warn && console.warn(r);
      }
      var Kn = Number.isNaN || function(e2) {
        return e2 !== e2;
      };
      function M() {
        M.init.call(this);
      }
      Zt.exports = M;
      Zt.exports.once = Zo;
      M.EventEmitter = M;
      M.prototype._events = void 0;
      M.prototype._eventsCount = 0;
      M.prototype._maxListeners = void 0;
      var jn = 10;
      function yt(r) {
        if (typeof r != "function")
          throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof r);
      }
      Object.defineProperty(M, "defaultMaxListeners", { enumerable: true, get: function() {
        return jn;
      }, set: function(r) {
        if (typeof r != "number" || r < 0 || Kn(r))
          throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + r + ".");
        jn = r;
      } });
      M.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
      };
      M.prototype.setMaxListeners = function(e2) {
        if (typeof e2 != "number" || e2 < 0 || Kn(e2))
          throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e2 + ".");
        return this._maxListeners = e2, this;
      };
      function $n(r) {
        return r._maxListeners === void 0 ? M.defaultMaxListeners : r._maxListeners;
      }
      M.prototype.getMaxListeners = function() {
        return $n(this);
      };
      M.prototype.emit = function(e2) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t.push(arguments[n]);
        var i = e2 === "error", s = this._events;
        if (s !== void 0)
          i = i && s.error === void 0;
        else if (!i)
          return false;
        if (i) {
          var o;
          if (t.length > 0 && (o = t[0]), o instanceof Error)
            throw o;
          var a = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
          throw a.context = o, a;
        }
        var u = s[e2];
        if (u === void 0)
          return false;
        if (typeof u == "function")
          Hn(u, this, t);
        else
          for (var h = u.length, c = Yn(u, h), n = 0; n < h; ++n)
            Hn(c[n], this, t);
        return true;
      };
      function Wn(r, e2, t, n) {
        var i, s, o;
        if (yt(t), s = r._events, s === void 0 ? (s = r._events = /* @__PURE__ */ Object.create(null), r._eventsCount = 0) : (s.newListener !== void 0 && (r.emit("newListener", e2, t.listener ? t.listener : t), s = r._events), o = s[e2]), o === void 0)
          o = s[e2] = t, ++r._eventsCount;
        else if (typeof o == "function" ? o = s[e2] = n ? [t, o] : [o, t] : n ? o.unshift(t) : o.push(t), i = $n(r), i > 0 && o.length > i && !o.warned) {
          o.warned = true;
          var a = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(e2) + " listeners added. Use emitter.setMaxListeners() to increase limit");
          a.name = "MaxListenersExceededWarning", a.emitter = r, a.type = e2, a.count = o.length, Vo(a);
        }
        return r;
      }
      M.prototype.addListener = function(e2, t) {
        return Wn(this, e2, t, false);
      };
      M.prototype.on = M.prototype.addListener;
      M.prototype.prependListener = function(e2, t) {
        return Wn(this, e2, t, true);
      };
      function zo() {
        if (!this.fired)
          return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
      }
      function Gn(r, e2, t) {
        var n = { fired: false, wrapFn: void 0, target: r, type: e2, listener: t }, i = zo.bind(n);
        return i.listener = t, n.wrapFn = i, i;
      }
      M.prototype.once = function(e2, t) {
        return yt(t), this.on(e2, Gn(this, e2, t)), this;
      };
      M.prototype.prependOnceListener = function(e2, t) {
        return yt(t), this.prependListener(e2, Gn(this, e2, t)), this;
      };
      M.prototype.removeListener = function(e2, t) {
        var n, i, s, o, a;
        if (yt(t), i = this._events, i === void 0)
          return this;
        if (n = i[e2], n === void 0)
          return this;
        if (n === t || n.listener === t)
          --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete i[e2], i.removeListener && this.emit("removeListener", e2, n.listener || t));
        else if (typeof n != "function") {
          for (s = -1, o = n.length - 1; o >= 0; o--)
            if (n[o] === t || n[o].listener === t) {
              a = n[o].listener, s = o;
              break;
            }
          if (s < 0)
            return this;
          s === 0 ? n.shift() : Yo(n, s), n.length === 1 && (i[e2] = n[0]), i.removeListener !== void 0 && this.emit("removeListener", e2, a || t);
        }
        return this;
      };
      M.prototype.off = M.prototype.removeListener;
      M.prototype.removeAllListeners = function(e2) {
        var t, n, i;
        if (n = this._events, n === void 0)
          return this;
        if (n.removeListener === void 0)
          return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : n[e2] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete n[e2]), this;
        if (arguments.length === 0) {
          var s = Object.keys(n), o;
          for (i = 0; i < s.length; ++i)
            o = s[i], o !== "removeListener" && this.removeAllListeners(o);
          return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
        }
        if (t = n[e2], typeof t == "function")
          this.removeListener(e2, t);
        else if (t !== void 0)
          for (i = t.length - 1; i >= 0; i--)
            this.removeListener(e2, t[i]);
        return this;
      };
      function Vn(r, e2, t) {
        var n = r._events;
        if (n === void 0)
          return [];
        var i = n[e2];
        return i === void 0 ? [] : typeof i == "function" ? t ? [i.listener || i] : [i] : t ? Jo(i) : Yn(i, i.length);
      }
      M.prototype.listeners = function(e2) {
        return Vn(this, e2, true);
      };
      M.prototype.rawListeners = function(e2) {
        return Vn(this, e2, false);
      };
      M.listenerCount = function(r, e2) {
        return typeof r.listenerCount == "function" ? r.listenerCount(e2) : zn.call(r, e2);
      };
      M.prototype.listenerCount = zn;
      function zn(r) {
        var e2 = this._events;
        if (e2 !== void 0) {
          var t = e2[r];
          if (typeof t == "function")
            return 1;
          if (t !== void 0)
            return t.length;
        }
        return 0;
      }
      M.prototype.eventNames = function() {
        return this._eventsCount > 0 ? pt(this._events) : [];
      };
      function Yn(r, e2) {
        for (var t = new Array(e2), n = 0; n < e2; ++n)
          t[n] = r[n];
        return t;
      }
      function Yo(r, e2) {
        for (; e2 + 1 < r.length; e2++)
          r[e2] = r[e2 + 1];
        r.pop();
      }
      function Jo(r) {
        for (var e2 = new Array(r.length), t = 0; t < e2.length; ++t)
          e2[t] = r[t].listener || r[t];
        return e2;
      }
      function Zo(r, e2) {
        return new Promise(function(t, n) {
          function i(o) {
            r.removeListener(e2, s), n(o);
          }
          function s() {
            typeof r.removeListener == "function" && r.removeListener("error", i), t([].slice.call(arguments));
          }
          Jn(r, e2, s, { once: true }), e2 !== "error" && Xo(r, i, { once: true });
        });
      }
      function Xo(r, e2, t) {
        typeof r.on == "function" && Jn(r, "error", e2, t);
      }
      function Jn(r, e2, t, n) {
        if (typeof r.on == "function")
          n.once ? r.once(e2, t) : r.on(e2, t);
        else if (typeof r.addEventListener == "function")
          r.addEventListener(e2, function i(s) {
            n.once && r.removeEventListener(e2, i), t(s);
          });
        else
          throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof r);
      }
    });
    function Ve(r) {
      let e2 = 1779033703, t = 3144134277, n = 1013904242, i = 2773480762, s = 1359893119, o = 2600822924, a = 528734635, u = 1541459225, h = 0, c = 0, f = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], w = (_, x) => _ >>> x | _ << 32 - x, g = new Uint32Array(64), b = new Uint8Array(64), I = () => {
        for (let U = 0, R = 0; U < 16; U++, R += 4)
          g[U] = b[R] << 24 | b[R + 1] << 16 | b[R + 2] << 8 | b[R + 3];
        for (let U = 16; U < 64; U++) {
          let R = w(g[U - 15], 7) ^ w(g[U - 15], 18) ^ g[U - 15] >>> 3, F = w(g[U - 2], 17) ^ w(g[U - 2], 19) ^ g[U - 2] >>> 10;
          g[U] = g[U - 16] + R + g[U - 7] + F | 0;
        }
        let _ = e2, x = t, K = n, z = i, P = s, J = o, $ = a, ce = u;
        for (let U = 0; U < 64; U++) {
          let R = w(P, 6) ^ w(P, 11) ^ w(P, 25), F = P & J ^ ~P & $, q = ce + R + F + f[U] + g[U] | 0, Q = w(_, 2) ^ w(_, 13) ^ w(_, 22), Z = _ & x ^ _ & K ^ x & K, X = Q + Z | 0;
          ce = $, $ = J, J = P, P = z + q | 0, z = K, K = x, x = _, _ = q + X | 0;
        }
        e2 = e2 + _ | 0, t = t + x | 0, n = n + K | 0, i = i + z | 0, s = s + P | 0, o = o + J | 0, a = a + $ | 0, u = u + ce | 0, c = 0;
      }, B = (_) => {
        typeof _ == "string" && (_ = new TextEncoder().encode(_));
        for (let x = 0; x < _.length; x++)
          b[c++] = _[x], c === 64 && I();
        h += _.length;
      }, k = () => {
        if (b[c++] = 128, c == 64 && I(), c + 8 > 64) {
          for (; c < 64; )
            b[c++] = 0;
          I();
        }
        for (; c < 58; )
          b[c++] = 0;
        let _ = h * 8;
        b[c++] = _ / 1099511627776 & 255, b[c++] = _ / 4294967296 & 255, b[c++] = _ >>> 24, b[c++] = _ >>> 16 & 255, b[c++] = _ >>> 8 & 255, b[c++] = _ & 255, I();
        let x = new Uint8Array(32);
        return x[0] = e2 >>> 24, x[1] = e2 >>> 16 & 255, x[2] = e2 >>> 8 & 255, x[3] = e2 & 255, x[4] = t >>> 24, x[5] = t >>> 16 & 255, x[6] = t >>> 8 & 255, x[7] = t & 255, x[8] = n >>> 24, x[9] = n >>> 16 & 255, x[10] = n >>> 8 & 255, x[11] = n & 255, x[12] = i >>> 24, x[13] = i >>> 16 & 255, x[14] = i >>> 8 & 255, x[15] = i & 255, x[16] = s >>> 24, x[17] = s >>> 16 & 255, x[18] = s >>> 8 & 255, x[19] = s & 255, x[20] = o >>> 24, x[21] = o >>> 16 & 255, x[22] = o >>> 8 & 255, x[23] = o & 255, x[24] = a >>> 24, x[25] = a >>> 16 & 255, x[26] = a >>> 8 & 255, x[27] = a & 255, x[28] = u >>> 24, x[29] = u >>> 16 & 255, x[30] = u >>> 8 & 255, x[31] = u & 255, x;
      };
      return r === void 0 ? { add: B, digest: k } : (B(r), k());
    }
    var Zn = ee(() => {
      "use strict";
      d();
    });
    var Xt = {};
    le(Xt, { createHash: () => ta, createHmac: () => ra, randomBytes: () => ea });
    function ea(r) {
      return m.getRandomValues(p.alloc(r));
    }
    function ta(r) {
      if (r !== "sha256")
        throw new Error("Only sha256 is supported");
      return { update: function(e2) {
        return { digest: function() {
          return p.from(Ve(e2));
        } };
      } };
    }
    function ra(r, e2) {
      if (r !== "sha256")
        throw new Error("Only sha256 is supported");
      return { update: function(t) {
        return { digest: function() {
          typeof e2 == "string" && (e2 = new TextEncoder().encode(e2)), typeof t == "string" && (t = new TextEncoder().encode(t));
          let n = e2.length;
          if (n > 64)
            e2 = Ve(e2);
          else if (n < 64) {
            let u = new Uint8Array(64);
            u.set(e2), e2 = u;
          }
          let i = new Uint8Array(64), s = new Uint8Array(64);
          for (let u = 0; u < 64; u++)
            i[u] = 54 ^ e2[u], s[u] = 92 ^ e2[u];
          let o = new Uint8Array(t.length + 64);
          o.set(i, 0), o.set(t, 64);
          let a = new Uint8Array(64 + 32);
          return a.set(s, 0), a.set(Ve(o), 64), p.from(Ve(a));
        } };
      } };
    }
    var er = ee(() => {
      d();
      Zn();
    });
    var tr = C((Xn) => {
      "use strict";
      d();
      Xn.parse = function(r, e2) {
        return new ze(r, e2).parse();
      };
      var ze = class {
        constructor(e2, t) {
          this.source = e2, this.transform = t || na, this.position = 0, this.entries = [], this.recorded = [], this.dimension = 0;
        }
        isEof() {
          return this.position >= this.source.length;
        }
        nextCharacter() {
          var e2 = this.source[this.position++];
          return e2 === "\\" ? { value: this.source[this.position++], escaped: true } : { value: e2, escaped: false };
        }
        record(e2) {
          this.recorded.push(e2);
        }
        newEntry(e2) {
          var t;
          (this.recorded.length > 0 || e2) && (t = this.recorded.join(""), t === "NULL" && !e2 && (t = null), t !== null && (t = this.transform(t)), this.entries.push(t), this.recorded = []);
        }
        consumeDimensions() {
          if (this.source[0] === "[")
            for (; !this.isEof(); ) {
              var e2 = this.nextCharacter();
              if (e2.value === "=")
                break;
            }
        }
        parse(e2) {
          var t, n, i;
          for (this.consumeDimensions(); !this.isEof(); )
            if (t = this.nextCharacter(), t.value === "{" && !i)
              this.dimension++, this.dimension > 1 && (n = new ze(this.source.substr(this.position - 1), this.transform), this.entries.push(n.parse(true)), this.position += n.position - 2);
            else if (t.value === "}" && !i) {
              if (this.dimension--, !this.dimension && (this.newEntry(), e2))
                return this.entries;
            } else
              t.value === '"' && !t.escaped ? (i && this.newEntry(true), i = !i) : t.value === "," && !i ? this.newEntry() : this.record(t.value);
          if (this.dimension !== 0)
            throw new Error("array dimension not balanced");
          return this.entries;
        }
      };
      function na(r) {
        return r;
      }
    });
    var rr = C((Oc, ei) => {
      d();
      var ia = tr();
      ei.exports = { create: function(r, e2) {
        return { parse: function() {
          return ia.parse(r, e2);
        } };
      } };
    });
    var ni = C((Qc, ri) => {
      "use strict";
      d();
      var sa = /(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/, oa = /^(\d{1,})-(\d{2})-(\d{2})( BC)?$/, aa = /([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/, ua = /^-?infinity$/;
      ri.exports = function(e2) {
        if (ua.test(e2))
          return Number(e2.replace("i", "I"));
        var t = sa.exec(e2);
        if (!t)
          return ha(e2) || null;
        var n = !!t[8], i = parseInt(t[1], 10);
        n && (i = ti(i));
        var s = parseInt(t[2], 10) - 1, o = t[3], a = parseInt(t[4], 10), u = parseInt(t[5], 10), h = parseInt(t[6], 10), c = t[7];
        c = c ? 1e3 * parseFloat(c) : 0;
        var f, w = ca(e2);
        return w != null ? (f = new Date(Date.UTC(i, s, o, a, u, h, c)), nr(i) && f.setUTCFullYear(i), w !== 0 && f.setTime(f.getTime() - w)) : (f = new Date(i, s, o, a, u, h, c), nr(i) && f.setFullYear(i)), f;
      };
      function ha(r) {
        var e2 = oa.exec(r);
        if (!!e2) {
          var t = parseInt(e2[1], 10), n = !!e2[4];
          n && (t = ti(t));
          var i = parseInt(e2[2], 10) - 1, s = e2[3], o = new Date(t, i, s);
          return nr(t) && o.setFullYear(t), o;
        }
      }
      function ca(r) {
        if (r.endsWith("+00"))
          return 0;
        var e2 = aa.exec(r.split(" ")[1]);
        if (!!e2) {
          var t = e2[1];
          if (t === "Z")
            return 0;
          var n = t === "-" ? -1 : 1, i = parseInt(e2[2], 10) * 3600 + parseInt(e2[3] || 0, 10) * 60 + parseInt(e2[4] || 0, 10);
          return i * n * 1e3;
        }
      }
      function ti(r) {
        return -(r - 1);
      }
      function nr(r) {
        return r >= 0 && r < 100;
      }
    });
    var si = C((jc, ii) => {
      d();
      ii.exports = fa;
      var la = Object.prototype.hasOwnProperty;
      function fa(r) {
        for (var e2 = 1; e2 < arguments.length; e2++) {
          var t = arguments[e2];
          for (var n in t)
            la.call(t, n) && (r[n] = t[n]);
        }
        return r;
      }
    });
    var ui = C(($c, ai) => {
      "use strict";
      d();
      var da = si();
      ai.exports = Ne;
      function Ne(r) {
        if (!(this instanceof Ne))
          return new Ne(r);
        da(this, _a(r));
      }
      var pa = ["seconds", "minutes", "hours", "days", "months", "years"];
      Ne.prototype.toPostgres = function() {
        var r = pa.filter(this.hasOwnProperty, this);
        return this.milliseconds && r.indexOf("seconds") < 0 && r.push("seconds"), r.length === 0 ? "0" : r.map(function(e2) {
          var t = this[e2] || 0;
          return e2 === "seconds" && this.milliseconds && (t = (t + this.milliseconds / 1e3).toFixed(6).replace(/\.?0+$/, "")), t + " " + e2;
        }, this).join(" ");
      };
      var ya = { years: "Y", months: "M", days: "D", hours: "H", minutes: "M", seconds: "S" }, wa = ["years", "months", "days"], ma = ["hours", "minutes", "seconds"];
      Ne.prototype.toISOString = Ne.prototype.toISO = function() {
        var r = wa.map(t, this).join(""), e2 = ma.map(t, this).join("");
        return "P" + r + "T" + e2;
        function t(n) {
          var i = this[n] || 0;
          return n === "seconds" && this.milliseconds && (i = (i + this.milliseconds / 1e3).toFixed(6).replace(/0+$/, "")), i + ya[n];
        }
      };
      var ir = "([+-]?\\d+)", ga = ir + "\\s+years?", Sa = ir + "\\s+mons?", xa = ir + "\\s+days?", va = "([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?", Ea = new RegExp([ga, Sa, xa, va].map(function(r) {
        return "(" + r + ")?";
      }).join("\\s*")), oi = { years: 2, months: 4, days: 6, hours: 9, minutes: 10, seconds: 11, milliseconds: 12 }, ba = ["hours", "minutes", "seconds", "milliseconds"];
      function Aa(r) {
        var e2 = r + "000000".slice(r.length);
        return parseInt(e2, 10) / 1e3;
      }
      function _a(r) {
        if (!r)
          return {};
        var e2 = Ea.exec(r), t = e2[8] === "-";
        return Object.keys(oi).reduce(function(n, i) {
          var s = oi[i], o = e2[s];
          return !o || (o = i === "milliseconds" ? Aa(o) : parseInt(o, 10), !o) || (t && ~ba.indexOf(i) && (o *= -1), n[i] = o), n;
        }, {});
      }
    });
    var ci = C((Gc, hi) => {
      "use strict";
      d();
      hi.exports = function(e2) {
        if (/^\\x/.test(e2))
          return new p(e2.substr(2), "hex");
        for (var t = "", n = 0; n < e2.length; )
          if (e2[n] !== "\\")
            t += e2[n], ++n;
          else if (/[0-7]{3}/.test(e2.substr(n + 1, 3)))
            t += String.fromCharCode(parseInt(e2.substr(n + 1, 3), 8)), n += 4;
          else {
            for (var i = 1; n + i < e2.length && e2[n + i] === "\\"; )
              i++;
            for (var s = 0; s < Math.floor(i / 2); ++s)
              t += "\\";
            n += Math.floor(i / 2) * 2;
          }
        return new p(t, "binary");
      };
    });
    var mi = C((zc, wi) => {
      d();
      var Ye = tr(), Je = rr(), wt = ni(), fi = ui(), di = ci();
      function mt(r) {
        return function(t) {
          return t === null ? t : r(t);
        };
      }
      function pi(r) {
        return r === null ? r : r === "TRUE" || r === "t" || r === "true" || r === "y" || r === "yes" || r === "on" || r === "1";
      }
      function Ca(r) {
        return r ? Ye.parse(r, pi) : null;
      }
      function Ua(r) {
        return parseInt(r, 10);
      }
      function sr(r) {
        return r ? Ye.parse(r, mt(Ua)) : null;
      }
      function Ia(r) {
        return r ? Ye.parse(r, mt(function(e2) {
          return yi(e2).trim();
        })) : null;
      }
      var La = function(r) {
        if (!r)
          return null;
        var e2 = Je.create(r, function(t) {
          return t !== null && (t = hr(t)), t;
        });
        return e2.parse();
      }, or = function(r) {
        if (!r)
          return null;
        var e2 = Je.create(r, function(t) {
          return t !== null && (t = parseFloat(t)), t;
        });
        return e2.parse();
      }, de = function(r) {
        if (!r)
          return null;
        var e2 = Je.create(r);
        return e2.parse();
      }, ar = function(r) {
        if (!r)
          return null;
        var e2 = Je.create(r, function(t) {
          return t !== null && (t = wt(t)), t;
        });
        return e2.parse();
      }, Ba = function(r) {
        if (!r)
          return null;
        var e2 = Je.create(r, function(t) {
          return t !== null && (t = fi(t)), t;
        });
        return e2.parse();
      }, Ta = function(r) {
        return r ? Ye.parse(r, mt(di)) : null;
      }, ur = function(r) {
        return parseInt(r, 10);
      }, yi = function(r) {
        var e2 = String(r);
        return /^\d+$/.test(e2) ? e2 : r;
      }, li = function(r) {
        return r ? Ye.parse(r, mt(JSON.parse)) : null;
      }, hr = function(r) {
        return r[0] !== "(" ? null : (r = r.substring(1, r.length - 1).split(","), { x: parseFloat(r[0]), y: parseFloat(r[1]) });
      }, Pa = function(r) {
        if (r[0] !== "<" && r[1] !== "(")
          return null;
        for (var e2 = "(", t = "", n = false, i = 2; i < r.length - 1; i++) {
          if (n || (e2 += r[i]), r[i] === ")") {
            n = true;
            continue;
          } else if (!n)
            continue;
          r[i] !== "," && (t += r[i]);
        }
        var s = hr(e2);
        return s.radius = parseFloat(t), s;
      }, Ra = function(r) {
        r(20, yi), r(21, ur), r(23, ur), r(26, ur), r(700, parseFloat), r(701, parseFloat), r(16, pi), r(1082, wt), r(1114, wt), r(1184, wt), r(600, hr), r(651, de), r(718, Pa), r(1e3, Ca), r(1001, Ta), r(1005, sr), r(1007, sr), r(1028, sr), r(1016, Ia), r(1017, La), r(1021, or), r(1022, or), r(1231, or), r(1014, de), r(1015, de), r(1008, de), r(1009, de), r(1040, de), r(1041, de), r(1115, ar), r(1182, ar), r(1185, ar), r(1186, fi), r(1187, Ba), r(17, di), r(114, JSON.parse.bind(JSON)), r(3802, JSON.parse.bind(JSON)), r(199, li), r(3807, li), r(3907, de), r(2951, de), r(791, de), r(1183, de), r(1270, de);
      };
      wi.exports = { init: Ra };
    });
    var Si = C((Jc, gi) => {
      "use strict";
      d();
      var ae = 1e6;
      function Ma(r) {
        var e2 = r.readInt32BE(0), t = r.readUInt32BE(4), n = "";
        e2 < 0 && (e2 = ~e2 + (t === 0), t = ~t + 1 >>> 0, n = "-");
        var i = "", s, o, a, u, h, c;
        {
          if (s = e2 % ae, e2 = e2 / ae >>> 0, o = 4294967296 * s + t, t = o / ae >>> 0, a = "" + (o - ae * t), t === 0 && e2 === 0)
            return n + a + i;
          for (u = "", h = 6 - a.length, c = 0; c < h; c++)
            u += "0";
          i = u + a + i;
        }
        {
          if (s = e2 % ae, e2 = e2 / ae >>> 0, o = 4294967296 * s + t, t = o / ae >>> 0, a = "" + (o - ae * t), t === 0 && e2 === 0)
            return n + a + i;
          for (u = "", h = 6 - a.length, c = 0; c < h; c++)
            u += "0";
          i = u + a + i;
        }
        {
          if (s = e2 % ae, e2 = e2 / ae >>> 0, o = 4294967296 * s + t, t = o / ae >>> 0, a = "" + (o - ae * t), t === 0 && e2 === 0)
            return n + a + i;
          for (u = "", h = 6 - a.length, c = 0; c < h; c++)
            u += "0";
          i = u + a + i;
        }
        return s = e2 % ae, o = 4294967296 * s + t, a = "" + o % ae, n + a + i;
      }
      gi.exports = Ma;
    });
    var Ai = C((Xc, bi) => {
      d();
      var ka = Si(), D = function(r, e2, t, n, i) {
        t = t || 0, n = n || false, i = i || function(g, b, I) {
          return g * Math.pow(2, I) + b;
        };
        var s = t >> 3, o = function(g) {
          return n ? ~g & 255 : g;
        }, a = 255, u = 8 - t % 8;
        e2 < u && (a = 255 << 8 - e2 & 255, u = e2), t && (a = a >> t % 8);
        var h = 0;
        t % 8 + e2 >= 8 && (h = i(0, o(r[s]) & a, u));
        for (var c = e2 + t >> 3, f = s + 1; f < c; f++)
          h = i(h, o(r[f]), 8);
        var w = (e2 + t) % 8;
        return w > 0 && (h = i(h, o(r[c]) >> 8 - w, w)), h;
      }, Ei = function(r, e2, t) {
        var n = Math.pow(2, t - 1) - 1, i = D(r, 1), s = D(r, t, 1);
        if (s === 0)
          return 0;
        var o = 1, a = function(h, c, f) {
          h === 0 && (h = 1);
          for (var w = 1; w <= f; w++)
            o /= 2, (c & 1 << f - w) > 0 && (h += o);
          return h;
        }, u = D(r, e2, t + 1, false, a);
        return s == Math.pow(2, t + 1) - 1 ? u === 0 ? i === 0 ? 1 / 0 : -1 / 0 : NaN : (i === 0 ? 1 : -1) * Math.pow(2, s - n) * u;
      }, Fa = function(r) {
        return D(r, 1) == 1 ? -1 * (D(r, 15, 1, true) + 1) : D(r, 15, 1);
      }, xi = function(r) {
        return D(r, 1) == 1 ? -1 * (D(r, 31, 1, true) + 1) : D(r, 31, 1);
      }, Na = function(r) {
        return Ei(r, 23, 8);
      }, Da = function(r) {
        return Ei(r, 52, 11);
      }, Oa = function(r) {
        var e2 = D(r, 16, 32);
        if (e2 == 49152)
          return NaN;
        for (var t = Math.pow(1e4, D(r, 16, 16)), n = 0, i = [], s = D(r, 16), o = 0; o < s; o++)
          n += D(r, 16, 64 + 16 * o) * t, t /= 1e4;
        var a = Math.pow(10, D(r, 16, 48));
        return (e2 === 0 ? 1 : -1) * Math.round(n * a) / a;
      }, vi = function(r, e2) {
        var t = D(e2, 1), n = D(e2, 63, 1), i = new Date((t === 0 ? 1 : -1) * n / 1e3 + 9466848e5);
        return r || i.setTime(i.getTime() + i.getTimezoneOffset() * 6e4), i.usec = n % 1e3, i.getMicroSeconds = function() {
          return this.usec;
        }, i.setMicroSeconds = function(s) {
          this.usec = s;
        }, i.getUTCMicroSeconds = function() {
          return this.usec;
        }, i;
      }, Ze = function(r) {
        for (var e2 = D(r, 32), t = D(r, 32, 32), n = D(r, 32, 64), i = 96, s = [], o = 0; o < e2; o++)
          s[o] = D(r, 32, i), i += 32, i += 32;
        var a = function(h) {
          var c = D(r, 32, i);
          if (i += 32, c == 4294967295)
            return null;
          var f;
          if (h == 23 || h == 20)
            return f = D(r, c * 8, i), i += c * 8, f;
          if (h == 25)
            return f = r.toString(this.encoding, i >> 3, (i += c << 3) >> 3), f;
          console.log("ERROR: ElementType not implemented: " + h);
        }, u = function(h, c) {
          var f = [], w;
          if (h.length > 1) {
            var g = h.shift();
            for (w = 0; w < g; w++)
              f[w] = u(h, c);
            h.unshift(g);
          } else
            for (w = 0; w < h[0]; w++)
              f[w] = a(c);
          return f;
        };
        return u(s, n);
      }, qa = function(r) {
        return r.toString("utf8");
      }, Qa = function(r) {
        return r === null ? null : D(r, 8) > 0;
      }, Ha = function(r) {
        r(20, ka), r(21, Fa), r(23, xi), r(26, xi), r(1700, Oa), r(700, Na), r(701, Da), r(16, Qa), r(1114, vi.bind(null, false)), r(1184, vi.bind(null, true)), r(1e3, Ze), r(1007, Ze), r(1016, Ze), r(1008, Ze), r(1009, Ze), r(25, qa);
      };
      bi.exports = { init: Ha };
    });
    var Ci = C((tl, _i) => {
      d();
      _i.exports = { BOOL: 16, BYTEA: 17, CHAR: 18, INT8: 20, INT2: 21, INT4: 23, REGPROC: 24, TEXT: 25, OID: 26, TID: 27, XID: 28, CID: 29, JSON: 114, XML: 142, PG_NODE_TREE: 194, SMGR: 210, PATH: 602, POLYGON: 604, CIDR: 650, FLOAT4: 700, FLOAT8: 701, ABSTIME: 702, RELTIME: 703, TINTERVAL: 704, CIRCLE: 718, MACADDR8: 774, MONEY: 790, MACADDR: 829, INET: 869, ACLITEM: 1033, BPCHAR: 1042, VARCHAR: 1043, DATE: 1082, TIME: 1083, TIMESTAMP: 1114, TIMESTAMPTZ: 1184, INTERVAL: 1186, TIMETZ: 1266, BIT: 1560, VARBIT: 1562, NUMERIC: 1700, REFCURSOR: 1790, REGPROCEDURE: 2202, REGOPER: 2203, REGOPERATOR: 2204, REGCLASS: 2205, REGTYPE: 2206, UUID: 2950, TXID_SNAPSHOT: 2970, PG_LSN: 3220, PG_NDISTINCT: 3361, PG_DEPENDENCIES: 3402, TSVECTOR: 3614, TSQUERY: 3615, GTSVECTOR: 3642, REGCONFIG: 3734, REGDICTIONARY: 3769, JSONB: 3802, REGNAMESPACE: 4089, REGROLE: 4096 };
    });
    var tt = C((et) => {
      d();
      var ja = mi(), Ka = Ai(), $a = rr(), Wa = Ci();
      et.getTypeParser = Ga;
      et.setTypeParser = Va;
      et.arrayParser = $a;
      et.builtins = Wa;
      var Xe = { text: {}, binary: {} };
      function Ui(r) {
        return String(r);
      }
      function Ga(r, e2) {
        return e2 = e2 || "text", Xe[e2] && Xe[e2][r] || Ui;
      }
      function Va(r, e2, t) {
        typeof e2 == "function" && (t = e2, e2 = "text"), Xe[e2][r] = t;
      }
      ja.init(function(r, e2) {
        Xe.text[r] = e2;
      });
      Ka.init(function(r, e2) {
        Xe.binary[r] = e2;
      });
    });
    var rt = C((sl, cr) => {
      "use strict";
      d();
      cr.exports = { host: "localhost", user: y.platform === "win32" ? y.env.USERNAME : y.env.USER, database: void 0, password: null, connectionString: void 0, port: 5432, rows: 0, binary: false, max: 10, idleTimeoutMillis: 3e4, client_encoding: "", ssl: false, application_name: void 0, fallback_application_name: void 0, options: void 0, parseInputDatesAsUTC: false, statement_timeout: false, lock_timeout: false, idle_in_transaction_session_timeout: false, query_timeout: false, connect_timeout: 0, keepalives: 1, keepalives_idle: 0 };
      var De = tt(), za = De.getTypeParser(20, "text"), Ya = De.getTypeParser(1016, "text");
      cr.exports.__defineSetter__("parseInt8", function(r) {
        De.setTypeParser(20, "text", r ? De.getTypeParser(23, "text") : za), De.setTypeParser(1016, "text", r ? De.getTypeParser(1007, "text") : Ya);
      });
    });
    var St = C((al, Li) => {
      "use strict";
      d();
      var Ja = (er(), j(Xt)), Za = rt();
      function Xa(r) {
        var e2 = r.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
        return '"' + e2 + '"';
      }
      function Ii(r) {
        for (var e2 = "{", t = 0; t < r.length; t++)
          t > 0 && (e2 = e2 + ","), r[t] === null || typeof r[t] > "u" ? e2 = e2 + "NULL" : Array.isArray(r[t]) ? e2 = e2 + Ii(r[t]) : r[t] instanceof p ? e2 += "\\\\x" + r[t].toString("hex") : e2 += Xa(gt(r[t]));
        return e2 = e2 + "}", e2;
      }
      var gt = function(r, e2) {
        if (r == null)
          return null;
        if (r instanceof p)
          return r;
        if (ArrayBuffer.isView(r)) {
          var t = p.from(r.buffer, r.byteOffset, r.byteLength);
          return t.length === r.byteLength ? t : t.slice(r.byteOffset, r.byteOffset + r.byteLength);
        }
        return r instanceof Date ? Za.parseInputDatesAsUTC ? ru(r) : tu(r) : Array.isArray(r) ? Ii(r) : typeof r == "object" ? eu(r, e2) : r.toString();
      };
      function eu(r, e2) {
        if (r && typeof r.toPostgres == "function") {
          if (e2 = e2 || [], e2.indexOf(r) !== -1)
            throw new Error('circular reference detected while preparing "' + r + '" for query');
          return e2.push(r), gt(r.toPostgres(gt), e2);
        }
        return JSON.stringify(r);
      }
      function te(r, e2) {
        for (r = "" + r; r.length < e2; )
          r = "0" + r;
        return r;
      }
      function tu(r) {
        var e2 = -r.getTimezoneOffset(), t = r.getFullYear(), n = t < 1;
        n && (t = Math.abs(t) + 1);
        var i = te(t, 4) + "-" + te(r.getMonth() + 1, 2) + "-" + te(r.getDate(), 2) + "T" + te(r.getHours(), 2) + ":" + te(r.getMinutes(), 2) + ":" + te(r.getSeconds(), 2) + "." + te(r.getMilliseconds(), 3);
        return e2 < 0 ? (i += "-", e2 *= -1) : i += "+", i += te(Math.floor(e2 / 60), 2) + ":" + te(e2 % 60, 2), n && (i += " BC"), i;
      }
      function ru(r) {
        var e2 = r.getUTCFullYear(), t = e2 < 1;
        t && (e2 = Math.abs(e2) + 1);
        var n = te(e2, 4) + "-" + te(r.getUTCMonth() + 1, 2) + "-" + te(r.getUTCDate(), 2) + "T" + te(r.getUTCHours(), 2) + ":" + te(r.getUTCMinutes(), 2) + ":" + te(r.getUTCSeconds(), 2) + "." + te(r.getUTCMilliseconds(), 3);
        return n += "+00:00", t && (n += " BC"), n;
      }
      function nu(r, e2, t) {
        return r = typeof r == "string" ? { text: r } : r, e2 && (typeof e2 == "function" ? r.callback = e2 : r.values = e2), t && (r.callback = t), r;
      }
      var lr = function(r) {
        return Ja.createHash("md5").update(r, "utf-8").digest("hex");
      }, iu = function(r, e2, t) {
        var n = lr(e2 + r), i = lr(p.concat([p.from(n), t]));
        return "md5" + i;
      };
      Li.exports = { prepareValue: function(e2) {
        return gt(e2);
      }, normalizeQueryConfig: nu, postgresMd5PasswordHash: iu, md5: lr };
    });
    var Ri = C((hl, Pi) => {
      "use strict";
      d();
      var vt = (er(), j(Xt));
      function su(r) {
        if (r.indexOf("SCRAM-SHA-256") === -1)
          throw new Error("SASL: Only mechanism SCRAM-SHA-256 is currently supported");
        let e2 = vt.randomBytes(18).toString("base64");
        return { mechanism: "SCRAM-SHA-256", clientNonce: e2, response: "n,,n=*,r=" + e2, message: "SASLInitialResponse" };
      }
      function ou(r, e2, t) {
        if (r.message !== "SASLInitialResponse")
          throw new Error("SASL: Last message was not SASLInitialResponse");
        if (typeof e2 != "string")
          throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string");
        if (e2 === "")
          throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a non-empty string");
        if (typeof t != "string")
          throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a string");
        let n = hu(t);
        if (n.nonce.startsWith(r.clientNonce)) {
          if (n.nonce.length === r.clientNonce.length)
            throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce is too short");
        } else
          throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce");
        var i = p.from(n.salt, "base64"), s = vt.pbkdf2Sync(e2, i, n.iteration, 32, "sha256"), o = xt(s, "Client Key"), a = fu(o), u = "n=*,r=" + r.clientNonce, h = "r=" + n.nonce + ",s=" + n.salt + ",i=" + n.iteration, c = "c=biws,r=" + n.nonce, f = u + "," + h + "," + c, w = xt(a, f), g = lu(o, w), b = g.toString("base64"), I = xt(s, "Server Key"), B = xt(I, f);
        r.message = "SASLResponse", r.serverSignature = B.toString("base64"), r.response = c + ",p=" + b;
      }
      function au(r, e2) {
        if (r.message !== "SASLResponse")
          throw new Error("SASL: Last message was not SASLResponse");
        if (typeof e2 != "string")
          throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: serverData must be a string");
        let { serverSignature: t } = cu(e2);
        if (t !== r.serverSignature)
          throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature does not match");
      }
      function uu(r) {
        if (typeof r != "string")
          throw new TypeError("SASL: text must be a string");
        return r.split("").map((e2, t) => r.charCodeAt(t)).every((e2) => e2 >= 33 && e2 <= 43 || e2 >= 45 && e2 <= 126);
      }
      function Bi(r) {
        return /^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(r);
      }
      function Ti(r) {
        if (typeof r != "string")
          throw new TypeError("SASL: attribute pairs text must be a string");
        return new Map(r.split(",").map((e2) => {
          if (!/^.=/.test(e2))
            throw new Error("SASL: Invalid attribute pair entry");
          let t = e2[0], n = e2.substring(2);
          return [t, n];
        }));
      }
      function hu(r) {
        let e2 = Ti(r), t = e2.get("r");
        if (t) {
          if (!uu(t))
            throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce must only contain printable characters");
        } else
          throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing");
        let n = e2.get("s");
        if (n) {
          if (!Bi(n))
            throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt must be base64");
        } else
          throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing");
        let i = e2.get("i");
        if (i) {
          if (!/^[1-9][0-9]*$/.test(i))
            throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: invalid iteration count");
        } else
          throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration missing");
        let s = parseInt(i, 10);
        return { nonce: t, salt: n, iteration: s };
      }
      function cu(r) {
        let t = Ti(r).get("v");
        if (t) {
          if (!Bi(t))
            throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature must be base64");
        } else
          throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature is missing");
        return { serverSignature: t };
      }
      function lu(r, e2) {
        if (!p.isBuffer(r))
          throw new TypeError("first argument must be a Buffer");
        if (!p.isBuffer(e2))
          throw new TypeError("second argument must be a Buffer");
        if (r.length !== e2.length)
          throw new Error("Buffer lengths must match");
        if (r.length === 0)
          throw new Error("Buffers cannot be empty");
        return p.from(r.map((t, n) => r[n] ^ e2[n]));
      }
      function fu(r) {
        return vt.createHash("sha256").update(r).digest();
      }
      function xt(r, e2) {
        return vt.createHmac("sha256", r).update(e2).digest();
      }
      Pi.exports = { startSession: su, continueSession: ou, finalizeSession: au };
    });
    var fr = {};
    le(fr, { join: () => du });
    function du(...r) {
      return r.join("/");
    }
    var dr = ee(() => {
      d();
    });
    var pr = {};
    le(pr, { stat: () => pu });
    function pu(r, e2) {
      e2(new Error("No filesystem"));
    }
    var yr = ee(() => {
      d();
    });
    var wr = {};
    le(wr, { default: () => yu });
    var yu;
    var mr = ee(() => {
      d();
      yu = {};
    });
    var Mi = {};
    le(Mi, { StringDecoder: () => gr });
    var gr;
    var ki = ee(() => {
      d();
      gr = class {
        constructor(e2) {
          this.td = new TextDecoder(e2);
        }
        write(e2) {
          return this.td.decode(e2, { stream: true });
        }
        end(e2) {
          return this.td.decode(e2);
        }
      };
    });
    var Oi = C((yl, Di) => {
      "use strict";
      d();
      var { Transform: wu } = (mr(), j(wr)), { StringDecoder: mu } = (ki(), j(Mi)), Ae = Symbol("last"), Et = Symbol("decoder");
      function gu(r, e2, t) {
        let n;
        if (this.overflow) {
          if (n = this[Et].write(r).split(this.matcher), n.length === 1)
            return t();
          n.shift(), this.overflow = false;
        } else
          this[Ae] += this[Et].write(r), n = this[Ae].split(this.matcher);
        this[Ae] = n.pop();
        for (let i = 0; i < n.length; i++)
          try {
            Ni(this, this.mapper(n[i]));
          } catch (s) {
            return t(s);
          }
        if (this.overflow = this[Ae].length > this.maxLength, this.overflow && !this.skipOverflow) {
          t(new Error("maximum buffer reached"));
          return;
        }
        t();
      }
      function Su(r) {
        if (this[Ae] += this[Et].end(), this[Ae])
          try {
            Ni(this, this.mapper(this[Ae]));
          } catch (e2) {
            return r(e2);
          }
        r();
      }
      function Ni(r, e2) {
        e2 !== void 0 && r.push(e2);
      }
      function Fi(r) {
        return r;
      }
      function xu(r, e2, t) {
        switch (r = r || /\r?\n/, e2 = e2 || Fi, t = t || {}, arguments.length) {
          case 1:
            typeof r == "function" ? (e2 = r, r = /\r?\n/) : typeof r == "object" && !(r instanceof RegExp) && (t = r, r = /\r?\n/);
            break;
          case 2:
            typeof r == "function" ? (t = e2, e2 = r, r = /\r?\n/) : typeof e2 == "object" && (t = e2, e2 = Fi);
        }
        t = Object.assign({}, t), t.autoDestroy = true, t.transform = gu, t.flush = Su, t.readableObjectMode = true;
        let n = new wu(t);
        return n[Ae] = "", n[Et] = new mu("utf8"), n.matcher = r, n.mapper = e2, n.maxLength = t.maxLength, n.skipOverflow = t.skipOverflow || false, n.overflow = false, n._destroy = function(i, s) {
          this._writableState.errorEmitted = false, s(i);
        }, n;
      }
      Di.exports = xu;
    });
    var bt = {};
    le(bt, { default: () => vu });
    var vu;
    var At = ee(() => {
      d();
      vu = {};
    });
    var Hi = C((gl, ve) => {
      "use strict";
      d();
      var qi = (dr(), j(fr)), Eu = (mr(), j(wr)).Stream, bu = Oi(), Qi = (At(), j(bt)), Au = 5432, _t = y.platform === "win32", nt = y.stderr, _u = 56, Cu = 7, Uu = 61440, Iu = 32768;
      function Lu(r) {
        return (r & Uu) == Iu;
      }
      var Oe = ["host", "port", "database", "user", "password"], Sr = Oe.length, Bu = Oe[Sr - 1];
      function xr() {
        var r = nt instanceof Eu && nt.writable === true;
        if (r) {
          var e2 = Array.prototype.slice.call(arguments).concat(`
`);
          nt.write(Qi.format.apply(Qi, e2));
        }
      }
      Object.defineProperty(ve.exports, "isWin", { get: function() {
        return _t;
      }, set: function(r) {
        _t = r;
      } });
      ve.exports.warnTo = function(r) {
        var e2 = nt;
        return nt = r, e2;
      };
      ve.exports.getFileName = function(r) {
        var e2 = r || y.env, t = e2.PGPASSFILE || (_t ? qi.join(e2.APPDATA || "./", "postgresql", "pgpass.conf") : qi.join(e2.HOME || "./", ".pgpass"));
        return t;
      };
      ve.exports.usePgPass = function(r, e2) {
        return Object.prototype.hasOwnProperty.call(y.env, "PGPASSWORD") ? false : _t ? true : (e2 = e2 || "<unkn>", Lu(r.mode) ? r.mode & (_u | Cu) ? (xr('WARNING: password file "%s" has group or world access; permissions should be u=rw (0600) or less', e2), false) : true : (xr('WARNING: password file "%s" is not a plain file', e2), false));
      };
      var Tu = ve.exports.match = function(r, e2) {
        return Oe.slice(0, -1).reduce(function(t, n, i) {
          return i == 1 && Number(r[n] || Au) === Number(e2[n]) ? t && true : t && (e2[n] === "*" || e2[n] === r[n]);
        }, true);
      };
      ve.exports.getPassword = function(r, e2, t) {
        var n, i = e2.pipe(bu());
        function s(u) {
          var h = Pu(u);
          h && Ru(h) && Tu(r, h) && (n = h[Bu], i.end());
        }
        var o = function() {
          e2.destroy(), t(n);
        }, a = function(u) {
          e2.destroy(), xr("WARNING: error on reading file: %s", u), t(void 0);
        };
        e2.on("error", a), i.on("data", s).on("end", o).on("error", a);
      };
      var Pu = ve.exports.parseLine = function(r) {
        if (r.length < 11 || r.match(/^\s+#/))
          return null;
        for (var e2 = "", t = "", n = 0, i = 0, s = 0, o = {}, a = false, u = function(c, f, w) {
          var g = r.substring(f, w);
          Object.hasOwnProperty.call(y.env, "PGPASS_NO_DEESCAPE") || (g = g.replace(/\\([:\\])/g, "$1")), o[Oe[c]] = g;
        }, h = 0; h < r.length - 1; h += 1) {
          if (e2 = r.charAt(h + 1), t = r.charAt(h), a = n == Sr - 1, a) {
            u(n, i);
            break;
          }
          h >= 0 && e2 == ":" && t !== "\\" && (u(n, i, h + 1), i = h + 2, n += 1);
        }
        return o = Object.keys(o).length === Sr ? o : null, o;
      }, Ru = ve.exports.isValidEntry = function(r) {
        for (var e2 = { 0: function(o) {
          return o.length > 0;
        }, 1: function(o) {
          return o === "*" ? true : (o = Number(o), isFinite(o) && o > 0 && o < 9007199254740992 && Math.floor(o) === o);
        }, 2: function(o) {
          return o.length > 0;
        }, 3: function(o) {
          return o.length > 0;
        }, 4: function(o) {
          return o.length > 0;
        } }, t = 0; t < Oe.length; t += 1) {
          var n = e2[t], i = r[Oe[t]] || "", s = n(i);
          if (!s)
            return false;
        }
        return true;
      };
    });
    var Ki = C((vl, vr) => {
      "use strict";
      d();
      var xl = (dr(), j(fr)), ji = (yr(), j(pr)), Ct = Hi();
      vr.exports = function(r, e2) {
        var t = Ct.getFileName();
        ji.stat(t, function(n, i) {
          if (n || !Ct.usePgPass(i, t))
            return e2(void 0);
          var s = ji.createReadStream(t);
          Ct.getPassword(r, s, e2);
        });
      };
      vr.exports.warnTo = Ct.warnTo;
    });
    var Er = C((bl, $i) => {
      "use strict";
      d();
      var Mu = tt();
      function Ut(r) {
        this._types = r || Mu, this.text = {}, this.binary = {};
      }
      Ut.prototype.getOverrides = function(r) {
        switch (r) {
          case "text":
            return this.text;
          case "binary":
            return this.binary;
          default:
            return {};
        }
      };
      Ut.prototype.setTypeParser = function(r, e2, t) {
        typeof e2 == "function" && (t = e2, e2 = "text"), this.getOverrides(e2)[r] = t;
      };
      Ut.prototype.getTypeParser = function(r, e2) {
        return e2 = e2 || "text", this.getOverrides(e2)[r] || this._types.getTypeParser(r, e2);
      };
      $i.exports = Ut;
    });
    var Wi = {};
    le(Wi, { default: () => ku });
    var ku;
    var Gi = ee(() => {
      d();
      ku = {};
    });
    var Vi = {};
    le(Vi, { parse: () => Fu });
    function Fu(r, e2 = false) {
      let { protocol: t } = new URL(r), n = "http:" + r.substring(t.length), { username: i, password: s, hostname: o, port: a, pathname: u, search: h, searchParams: c, hash: f } = new URL(n);
      s = decodeURIComponent(s);
      let w = i + ":" + s, g = e2 ? Object.fromEntries(c.entries()) : h;
      return { href: r, protocol: t, auth: w, username: i, password: s, hostname: o, port: a, pathname: u, search: h, query: g, hash: f };
    }
    var zi = ee(() => {
      d();
    });
    var Ji = C((Ul, Yi) => {
      "use strict";
      d();
      var Nu = (zi(), j(Vi)), br = (yr(), j(pr));
      function Ar(r) {
        if (r.charAt(0) === "/") {
          var t = r.split(" ");
          return { host: t[0], database: t[1] };
        }
        var e2 = Nu.parse(/ |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.test(r) ? encodeURI(r).replace(/\%25(\d\d)/g, "%$1") : r, true), t = e2.query;
        for (var n in t)
          Array.isArray(t[n]) && (t[n] = t[n][t[n].length - 1]);
        var i = (e2.auth || ":").split(":");
        if (t.user = i[0], t.password = i.splice(1).join(":"), t.port = e2.port, e2.protocol == "socket:")
          return t.host = decodeURI(e2.pathname), t.database = e2.query.db, t.client_encoding = e2.query.encoding, t;
        t.host || (t.host = e2.hostname);
        var s = e2.pathname;
        if (!t.host && s && /^%2f/i.test(s)) {
          var o = s.split("/");
          t.host = decodeURIComponent(o[0]), s = o.splice(1).join("/");
        }
        switch (s && s.charAt(0) === "/" && (s = s.slice(1) || null), t.database = s && decodeURI(s), (t.ssl === "true" || t.ssl === "1") && (t.ssl = true), t.ssl === "0" && (t.ssl = false), (t.sslcert || t.sslkey || t.sslrootcert || t.sslmode) && (t.ssl = {}), t.sslcert && (t.ssl.cert = br.readFileSync(t.sslcert).toString()), t.sslkey && (t.ssl.key = br.readFileSync(t.sslkey).toString()), t.sslrootcert && (t.ssl.ca = br.readFileSync(t.sslrootcert).toString()), t.sslmode) {
          case "disable": {
            t.ssl = false;
            break;
          }
          case "prefer":
          case "require":
          case "verify-ca":
          case "verify-full":
            break;
          case "no-verify": {
            t.ssl.rejectUnauthorized = false;
            break;
          }
        }
        return t;
      }
      Yi.exports = Ar;
      Ar.parse = Ar;
    });
    var Cr = C((Ll, es) => {
      "use strict";
      d();
      var Du = (Gi(), j(Wi)), Xi = rt(), Zi = Ji().parse, se = function(r, e2, t) {
        return t === void 0 ? t = y.env["PG" + r.toUpperCase()] : t === false || (t = y.env[t]), e2[r] || t || Xi[r];
      }, Ou = function() {
        switch (y.env.PGSSLMODE) {
          case "disable":
            return false;
          case "prefer":
          case "require":
          case "verify-ca":
          case "verify-full":
            return true;
          case "no-verify":
            return { rejectUnauthorized: false };
        }
        return Xi.ssl;
      }, qe = function(r) {
        return "'" + ("" + r).replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'";
      }, pe = function(r, e2, t) {
        var n = e2[t];
        n != null && r.push(t + "=" + qe(n));
      }, _r = class {
        constructor(e2) {
          e2 = typeof e2 == "string" ? Zi(e2) : e2 || {}, e2.connectionString && (e2 = Object.assign({}, e2, Zi(e2.connectionString))), this.user = se("user", e2), this.database = se("database", e2), this.database === void 0 && (this.database = this.user), this.port = parseInt(se("port", e2), 10), this.host = se("host", e2), Object.defineProperty(this, "password", { configurable: true, enumerable: false, writable: true, value: se("password", e2) }), this.binary = se("binary", e2), this.options = se("options", e2), this.ssl = typeof e2.ssl > "u" ? Ou() : e2.ssl, typeof this.ssl == "string" && this.ssl === "true" && (this.ssl = true), this.ssl === "no-verify" && (this.ssl = { rejectUnauthorized: false }), this.ssl && this.ssl.key && Object.defineProperty(this.ssl, "key", { enumerable: false }), this.client_encoding = se("client_encoding", e2), this.replication = se("replication", e2), this.isDomainSocket = !(this.host || "").indexOf("/"), this.application_name = se("application_name", e2, "PGAPPNAME"), this.fallback_application_name = se("fallback_application_name", e2, false), this.statement_timeout = se("statement_timeout", e2, false), this.lock_timeout = se("lock_timeout", e2, false), this.idle_in_transaction_session_timeout = se("idle_in_transaction_session_timeout", e2, false), this.query_timeout = se("query_timeout", e2, false), e2.connectionTimeoutMillis === void 0 ? this.connect_timeout = y.env.PGCONNECT_TIMEOUT || 0 : this.connect_timeout = Math.floor(e2.connectionTimeoutMillis / 1e3), e2.keepAlive === false ? this.keepalives = 0 : e2.keepAlive === true && (this.keepalives = 1), typeof e2.keepAliveInitialDelayMillis == "number" && (this.keepalives_idle = Math.floor(e2.keepAliveInitialDelayMillis / 1e3));
        }
        getLibpqConnectionString(e2) {
          var t = [];
          pe(t, this, "user"), pe(t, this, "password"), pe(t, this, "port"), pe(t, this, "application_name"), pe(t, this, "fallback_application_name"), pe(t, this, "connect_timeout"), pe(t, this, "options");
          var n = typeof this.ssl == "object" ? this.ssl : this.ssl ? { sslmode: this.ssl } : {};
          if (pe(t, n, "sslmode"), pe(t, n, "sslca"), pe(t, n, "sslkey"), pe(t, n, "sslcert"), pe(t, n, "sslrootcert"), this.database && t.push("dbname=" + qe(this.database)), this.replication && t.push("replication=" + qe(this.replication)), this.host && t.push("host=" + qe(this.host)), this.isDomainSocket)
            return e2(null, t.join(" "));
          this.client_encoding && t.push("client_encoding=" + qe(this.client_encoding)), Du.lookup(this.host, function(i, s) {
            return i ? e2(i, null) : (t.push("hostaddr=" + qe(s)), e2(null, t.join(" ")));
          });
        }
      };
      es.exports = _r;
    });
    var ns = C((Tl, rs) => {
      "use strict";
      d();
      var qu = tt(), ts = /^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/, Ur = class {
        constructor(e2, t) {
          this.command = null, this.rowCount = null, this.oid = null, this.rows = [], this.fields = [], this._parsers = void 0, this._types = t, this.RowCtor = null, this.rowAsArray = e2 === "array", this.rowAsArray && (this.parseRow = this._parseRowAsArray);
        }
        addCommandComplete(e2) {
          var t;
          e2.text ? t = ts.exec(e2.text) : t = ts.exec(e2.command), t && (this.command = t[1], t[3] ? (this.oid = parseInt(t[2], 10), this.rowCount = parseInt(t[3], 10)) : t[2] && (this.rowCount = parseInt(t[2], 10)));
        }
        _parseRowAsArray(e2) {
          for (var t = new Array(e2.length), n = 0, i = e2.length; n < i; n++) {
            var s = e2[n];
            s !== null ? t[n] = this._parsers[n](s) : t[n] = null;
          }
          return t;
        }
        parseRow(e2) {
          for (var t = {}, n = 0, i = e2.length; n < i; n++) {
            var s = e2[n], o = this.fields[n].name;
            s !== null ? t[o] = this._parsers[n](s) : t[o] = null;
          }
          return t;
        }
        addRow(e2) {
          this.rows.push(e2);
        }
        addFields(e2) {
          this.fields = e2, this.fields.length && (this._parsers = new Array(e2.length));
          for (var t = 0; t < e2.length; t++) {
            var n = e2[t];
            this._types ? this._parsers[t] = this._types.getTypeParser(n.dataTypeID, n.format || "text") : this._parsers[t] = qu.getTypeParser(n.dataTypeID, n.format || "text");
          }
        }
      };
      rs.exports = Ur;
    });
    var as = C((Rl, os) => {
      "use strict";
      d();
      var { EventEmitter: Qu } = be(), is = ns(), ss = St(), Ir = class extends Qu {
        constructor(e2, t, n) {
          super(), e2 = ss.normalizeQueryConfig(e2, t, n), this.text = e2.text, this.values = e2.values, this.rows = e2.rows, this.types = e2.types, this.name = e2.name, this.binary = e2.binary, this.portal = e2.portal || "", this.callback = e2.callback, this._rowMode = e2.rowMode, y.domain && e2.callback && (this.callback = y.domain.bind(e2.callback)), this._result = new is(this._rowMode, this.types), this._results = this._result, this.isPreparedStatement = false, this._canceledDueToError = false, this._promise = null;
        }
        requiresPreparation() {
          return this.name || this.rows ? true : !this.text || !this.values ? false : this.values.length > 0;
        }
        _checkForMultirow() {
          this._result.command && (Array.isArray(this._results) || (this._results = [this._result]), this._result = new is(this._rowMode, this.types), this._results.push(this._result));
        }
        handleRowDescription(e2) {
          this._checkForMultirow(), this._result.addFields(e2.fields), this._accumulateRows = this.callback || !this.listeners("row").length;
        }
        handleDataRow(e2) {
          let t;
          if (!this._canceledDueToError) {
            try {
              t = this._result.parseRow(e2.fields);
            } catch (n) {
              this._canceledDueToError = n;
              return;
            }
            this.emit("row", t, this._result), this._accumulateRows && this._result.addRow(t);
          }
        }
        handleCommandComplete(e2, t) {
          this._checkForMultirow(), this._result.addCommandComplete(e2), this.rows && t.sync();
        }
        handleEmptyQuery(e2) {
          this.rows && e2.sync();
        }
        handleError(e2, t) {
          if (this._canceledDueToError && (e2 = this._canceledDueToError, this._canceledDueToError = false), this.callback)
            return this.callback(e2);
          this.emit("error", e2);
        }
        handleReadyForQuery(e2) {
          if (this._canceledDueToError)
            return this.handleError(this._canceledDueToError, e2);
          if (this.callback)
            try {
              this.callback(null, this._results);
            } catch (t) {
              y.nextTick(() => {
                throw t;
              });
            }
          this.emit("end", this._results);
        }
        submit(e2) {
          if (typeof this.text != "string" && typeof this.name != "string")
            return new Error("A query must have either text or a name. Supplying neither is unsupported.");
          let t = e2.parsedStatements[this.name];
          return this.text && t && this.text !== t ? new Error(`Prepared statements must be unique - '${this.name}' was used for a different statement`) : this.values && !Array.isArray(this.values) ? new Error("Query values must be an array") : (this.requiresPreparation() ? this.prepare(e2) : e2.query(this.text), null);
        }
        hasBeenParsed(e2) {
          return this.name && e2.parsedStatements[this.name];
        }
        handlePortalSuspended(e2) {
          this._getRows(e2, this.rows);
        }
        _getRows(e2, t) {
          e2.execute({ portal: this.portal, rows: t }), t ? e2.flush() : e2.sync();
        }
        prepare(e2) {
          this.isPreparedStatement = true, this.hasBeenParsed(e2) || e2.parse({ text: this.text, name: this.name, types: this.types });
          try {
            e2.bind({ portal: this.portal, statement: this.name, values: this.values, binary: this.binary, valueMapper: ss.prepareValue });
          } catch (t) {
            this.handleError(t, e2);
            return;
          }
          e2.describe({ type: "P", name: this.portal || "" }), this._getRows(e2, this.rows);
        }
        handleCopyInResponse(e2) {
          e2.sendCopyFail("No source stream defined");
        }
        handleCopyData(e2, t) {
        }
      };
      os.exports = Ir;
    });
    function ne(...r) {
      if (r.length === 1 && r[0] instanceof Uint8Array)
        return r[0];
      let e2 = r.reduce((i, s) => i + s.length, 0), t = new Uint8Array(e2), n = 0;
      for (let i of r)
        t.set(i, n), n += i.length;
      return t;
    }
    function ot(r, e2) {
      let t = r.length;
      if (t !== e2.length)
        return false;
      for (let n = 0; n < t; n++)
        if (r[n] !== e2[n])
          return false;
      return true;
    }
    function ju(r, e2, t, n = true) {
      let i = new Se(1024);
      i.writeUint8(22, 0), i.writeUint16(769, 0);
      let s = i.writeLengthUint16();
      i.writeUint8(1, 0);
      let o = i.writeLengthUint24();
      i.writeUint16(771, 0), m.getRandomValues(i.subarray(32));
      let a = i.writeLengthUint8(0);
      i.writeBytes(t), a();
      let u = i.writeLengthUint16(0);
      i.writeUint16(4865, 0), u();
      let h = i.writeLengthUint8(0);
      i.writeUint8(0, 0), h();
      let c = i.writeLengthUint16(0);
      if (n) {
        i.writeUint16(0, 0);
        let P = i.writeLengthUint16(0), J = i.writeLengthUint16(0);
        i.writeUint8(0, 0);
        let $ = i.writeLengthUint16(0);
        i.writeUTF8String(r), $(), J(), P();
      }
      i.writeUint16(11, 0);
      let f = i.writeLengthUint16(0), w = i.writeLengthUint8(0);
      i.writeUint8(0, 0), w(), f(), i.writeUint16(10, 0);
      let g = i.writeLengthUint16(0), b = i.writeLengthUint16(0);
      i.writeUint16(23, 0), b(), g(), i.writeUint16(13, 0);
      let I = i.writeLengthUint16(0), B = i.writeLengthUint16(0);
      i.writeUint16(1027, 0), i.writeUint16(2052, 0), B(), I(), i.writeUint16(43, 0);
      let k = i.writeLengthUint16(0), _ = i.writeLengthUint8(0);
      i.writeUint16(772, 0), _(), k(), i.writeUint16(51, 0);
      let x = i.writeLengthUint16(0), K = i.writeLengthUint16(0);
      i.writeUint16(23, 0);
      let z = i.writeLengthUint16(0);
      return i.writeBytes(new Uint8Array(e2)), z(), K(), x(), c(), o(), s(), i;
    }
    function _e(r, e2 = "") {
      return [...r].map((t) => t.toString(16).padStart(2, "0")).join(e2);
    }
    function Ku(r, e2) {
      let t, n, [i] = r.expectLength(r.remaining());
      r.expectUint8(2, 0);
      let [s] = r.expectLengthUint24(0);
      r.expectUint16(771, 0);
      let o = r.readBytes(32);
      if (ot(o, [207, 33, 173, 116, 229, 154, 97, 17, 190, 29, 140, 2, 30, 101, 184, 145, 194, 162, 17, 22, 122, 187, 140, 94, 7, 158, 9, 226, 200, 168, 51, 156]))
        throw new Error("Unexpected HelloRetryRequest");
      r.expectUint8(e2.length, 0), r.expectBytes(e2, 0), r.expectUint16(4865, 0), r.expectUint8(0, 0);
      let [a, u] = r.expectLengthUint16(0);
      for (; u() > 0; ) {
        let h = r.readUint16(0), [c] = r.expectLengthUint16(0);
        if (h === 43)
          r.expectUint16(772, 0), n = true;
        else if (h === 51)
          r.expectUint16(23, 0), r.expectUint16(65), t = r.readBytes(65);
        else
          throw new Error(`Unexpected extension 0x${_e([h])}`);
        c();
      }
      if (a(), s(), i(), n !== true)
        throw new Error("No TLS version provided");
      if (t === void 0)
        throw new Error("No key provided");
      return t;
    }
    async function Rr(r, e2, t = st) {
      let n = await r(5);
      if (n === void 0)
        return;
      if (n.length < 5)
        throw new Error("TLS record header truncated");
      let i = new Se(n), s = i.readUint8();
      if (s < 20 || s > 24)
        throw new Error(`Illegal TLS record type 0x${s.toString(16)}`);
      if (e2 !== void 0 && s !== e2)
        throw new Error(`Unexpected TLS record type 0x${s.toString(16).padStart(2, "0")} (expected 0x${e2.toString(16).padStart(2, "0")})`);
      let o = i.readUint16(0);
      if ([769, 770, 771].indexOf(o) < 0)
        throw new Error(`Unsupported TLS record version 0x${o.toString(16).padStart(4, "0")}`);
      let a = i.readUint16(0);
      if (a > t)
        throw new Error(`Record too long: ${a} bytes`);
      let u = await r(a);
      if (u === void 0 || u.length < a)
        throw new Error("TLS record content truncated");
      return { headerData: n, header: i, type: s, version: o, length: a, content: u };
    }
    async function Mr(r, e2, t) {
      let n = await Rr(r, 23, $u);
      if (n === void 0)
        return;
      let i = new Se(n.content), [s] = i.expectLength(i.remaining());
      i.skip(n.length - 16, 0), i.skip(16, 0), s();
      let o = await e2.process(n.content, 16, n.headerData), a = o.length - 1;
      for (; o[a] === 0; )
        a -= 1;
      if (a < 0)
        throw new Error("Decrypted message has no record type indicator (all zeroes)");
      let u = o[a], h = o.subarray(0, a);
      if (!(u === 21 && h.length === 2 && h[0] === 1 && h[1] === 0)) {
        if (u === 22 && h[0] === 4)
          return Mr(r, e2, t);
        if (t !== void 0 && u !== t)
          throw new Error(`Unexpected TLS record type 0x${u.toString(16).padStart(2, "0")} (expected 0x${t.toString(16).padStart(2, "0")})`);
        return h;
      }
    }
    async function Wu(r, e2, t) {
      let n = ne(r, [t]), i = 5, s = n.length + 16, o = new Se(i + s);
      o.writeUint8(23, 0), o.writeUint16(771, 0), o.writeUint16(s, `${s} bytes follow`);
      let [a] = o.expectLength(s), u = o.array(), h = await e2.process(n, 16, u);
      return o.writeBytes(h.subarray(0, h.length - 16)), o.writeBytes(h.subarray(h.length - 16)), a(), o.array();
    }
    async function hs(r, e2, t) {
      let n = Math.ceil(r.length / st), i = [];
      for (let s = 0; s < n; s++) {
        let o = r.subarray(s * st, (s + 1) * st), a = await Wu(o, e2, t);
        i.push(a);
      }
      return i;
    }
    async function kr(r, e2, t) {
      let n = await L.importKey("raw", r, { name: "HMAC", hash: { name: `SHA-${t}` } }, false, ["sign"]);
      var i = new Uint8Array(await L.sign("HMAC", n, e2));
      return i;
    }
    async function Gu(r, e2, t, n) {
      let i = n >> 3, s = Math.ceil(t / i), o = new Uint8Array(s * i), a = await L.importKey("raw", r, { name: "HMAC", hash: { name: `SHA-${n}` } }, false, ["sign"]), u = new Uint8Array(0);
      for (let h = 0; h < s; h++) {
        let c = ne(u, e2, [h + 1]), f = await L.sign("HMAC", a, c), w = new Uint8Array(f);
        o.set(w, i * h), u = w;
      }
      return o.subarray(0, t);
    }
    async function ie(r, e2, t, n, i) {
      let s = ds.encode(e2), o = ne([(n & 65280) >> 8, n & 255], [cs.length + s.length], cs, s, [t.length], t);
      return Gu(r, o, n, i);
    }
    async function Vu(r, e2, t, n, i) {
      let s = n >> 3, o = new Uint8Array(s), a = await L.importKey("raw", r, { name: "ECDH", namedCurve: "P-256" }, false, []), u = await L.deriveBits({ name: "ECDH", public: a }, e2, 256), h = new Uint8Array(u), c = await L.digest("SHA-256", t), f = new Uint8Array(c), w = await kr(new Uint8Array(1), o, n), g = await L.digest(`SHA-${n}`, new Uint8Array(0)), b = new Uint8Array(g), I = await ie(w, "derived", b, s, n), B = await kr(I, h, n), k = await ie(B, "c hs traffic", f, s, n), _ = await ie(B, "s hs traffic", f, s, n), x = await ie(k, "key", new Uint8Array(0), i, n), K = await ie(_, "key", new Uint8Array(0), i, n), z = await ie(k, "iv", new Uint8Array(0), 12, n), P = await ie(_, "iv", new Uint8Array(0), 12, n);
      return { serverHandshakeKey: K, serverHandshakeIV: P, clientHandshakeKey: x, clientHandshakeIV: z, handshakeSecret: B, clientSecret: k, serverSecret: _ };
    }
    async function zu(r, e2, t, n) {
      let i = t >> 3, s = new Uint8Array(i), o = await L.digest(`SHA-${t}`, new Uint8Array(0)), a = new Uint8Array(o), u = await ie(r, "derived", a, i, t), h = await kr(u, s, t), c = await ie(h, "c ap traffic", e2, i, t), f = await ie(h, "s ap traffic", e2, i, t), w = await ie(c, "key", new Uint8Array(0), n, t), g = await ie(f, "key", new Uint8Array(0), n, t), b = await ie(c, "iv", new Uint8Array(0), 12, t), I = await ie(f, "iv", new Uint8Array(0), 12, t);
      return { serverApplicationKey: g, serverApplicationIV: I, clientApplicationKey: w, clientApplicationIV: b };
    }
    function Lt(r) {
      return r > 64 && r < 91 ? r - 65 : r > 96 && r < 123 ? r - 71 : r > 47 && r < 58 ? r + 4 : r === 43 ? 62 : r === 47 ? 63 : r === 61 ? 64 : void 0;
    }
    function Ju(r) {
      let e2 = r.length, t = 0, n = 0, i = 64, s = 64, o = 64, a = 64, u = new Uint8Array(e2 * 0.75);
      for (; t < e2; )
        i = Lt(r.charCodeAt(t++)), s = Lt(r.charCodeAt(t++)), o = Lt(r.charCodeAt(t++)), a = Lt(r.charCodeAt(t++)), u[n++] = i << 2 | s >> 4, u[n++] = (s & 15) << 4 | o >> 2, u[n++] = (o & 3) << 6 | a;
      let h = s === 64 ? 0 : o === 64 ? 2 : a === 64 ? 1 : 0;
      return u.subarray(0, n - h);
    }
    function nh(r) {
      let { length: e2 } = r;
      if (e2 > 4)
        throw new Error(`Bit string length ${e2} would overflow JS bit operators`);
      let t = 0, n = 0;
      for (let i = r.length - 1; i >= 0; i--)
        t |= r[i] << n, n += 8;
      return t;
    }
    function fs(r, e2) {
      let t = {};
      r.expectUint8(re, 0);
      let [n, i] = r.expectASN1Length(0);
      for (; i() > 0; ) {
        r.expectUint8(Zu, 0);
        let [s] = r.expectASN1Length(0);
        r.expectUint8(re, 0);
        let [o] = r.expectASN1Length(0);
        r.expectUint8(Qe, 0);
        let a = r.readASN1OID(), u = rh[a] ?? a, h = r.readUint8();
        if (h !== Xu && h !== eh)
          throw new Error(`Unexpected item type in certificate ${e2}: 0x${_e([h])}`);
        let [c, f] = r.expectASN1Length(0), w = r.readUTF8String(f());
        if (c(), o(), s(), t[u] !== void 0)
          throw new Error(`Duplicate OID ${u} in certificate ${e2}`);
        t[u] = w;
      }
      return n(), t;
    }
    function ih(r, e2 = 0) {
      let t = [], [n, i] = r.expectASN1Length(0);
      for (; i() > 0; ) {
        let s = r.readUint8(0), [o, a] = r.expectASN1Length(0), u;
        s === (e2 | 2) ? u = r.readUTF8String(a()) : u = r.readBytes(a()), t.push({ name: u, type: s }), o();
      }
      return n(), t;
    }
    function sh(r) {
      let e2 = { "1.2.840.113549.1.1.1": { name: "RSAES-PKCS1-v1_5" }, "1.2.840.113549.1.1.5": { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-1" } }, "1.2.840.113549.1.1.11": { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" } }, "1.2.840.113549.1.1.12": { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-384" } }, "1.2.840.113549.1.1.13": { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-512" } }, "1.2.840.113549.1.1.10": { name: "RSA-PSS" }, "1.2.840.113549.1.1.7": { name: "RSA-OAEP" }, "1.2.840.10045.2.1": { name: "ECDSA", hash: { name: "SHA-1" } }, "1.2.840.10045.4.1": { name: "ECDSA", hash: { name: "SHA-1" } }, "1.2.840.10045.4.3.2": { name: "ECDSA", hash: { name: "SHA-256" } }, "1.2.840.10045.4.3.3": { name: "ECDSA", hash: { name: "SHA-384" } }, "1.2.840.10045.4.3.4": { name: "ECDSA", hash: { name: "SHA-512" } }, "1.3.133.16.840.63.0.2": { name: "ECDH", kdf: "SHA-1" }, "1.3.132.1.11.1": { name: "ECDH", kdf: "SHA-256" }, "1.3.132.1.11.2": { name: "ECDH", kdf: "SHA-384" }, "1.3.132.1.11.3": { name: "ECDH", kdf: "SHA-512" }, "2.16.840.1.101.3.4.1.2": { name: "AES-CBC", length: 128 }, "2.16.840.1.101.3.4.1.22": { name: "AES-CBC", length: 192 }, "2.16.840.1.101.3.4.1.42": { name: "AES-CBC", length: 256 }, "2.16.840.1.101.3.4.1.6": { name: "AES-GCM", length: 128 }, "2.16.840.1.101.3.4.1.26": { name: "AES-GCM", length: 192 }, "2.16.840.1.101.3.4.1.46": { name: "AES-GCM", length: 256 }, "2.16.840.1.101.3.4.1.4": { name: "AES-CFB", length: 128 }, "2.16.840.1.101.3.4.1.24": { name: "AES-CFB", length: 192 }, "2.16.840.1.101.3.4.1.44": { name: "AES-CFB", length: 256 }, "2.16.840.1.101.3.4.1.5": { name: "AES-KW", length: 128 }, "2.16.840.1.101.3.4.1.25": { name: "AES-KW", length: 192 }, "2.16.840.1.101.3.4.1.45": { name: "AES-KW", length: 256 }, "1.2.840.113549.2.7": { name: "HMAC", hash: { name: "SHA-1" } }, "1.2.840.113549.2.9": { name: "HMAC", hash: { name: "SHA-256" } }, "1.2.840.113549.2.10": { name: "HMAC", hash: { name: "SHA-384" } }, "1.2.840.113549.2.11": { name: "HMAC", hash: { name: "SHA-512" } }, "1.2.840.113549.1.9.16.3.5": { name: "DH" }, "1.3.14.3.2.26": { name: "SHA-1" }, "2.16.840.1.101.3.4.2.1": { name: "SHA-256" }, "2.16.840.1.101.3.4.2.2": { name: "SHA-384" }, "2.16.840.1.101.3.4.2.3": { name: "SHA-512" }, "1.2.840.113549.1.5.12": { name: "PBKDF2" }, "1.2.840.10045.3.1.7": { name: "P-256" }, "1.3.132.0.34": { name: "P-384" }, "1.3.132.0.35": { name: "P-521" } }[r];
      if (e2 === void 0)
        throw new Error(`Unsupported algorithm identifier: ${r}`);
      return e2;
    }
    function ps(r, e2 = []) {
      return Object.values(r).forEach((t) => {
        typeof t == "string" ? e2 = [...e2, t] : e2 = ps(t, e2);
      }), e2;
    }
    function oh(r) {
      return ps(r).join(" / ");
    }
    async function ws(r, e2, t, n, i) {
      r.expectUint8(re, 0);
      let [s] = r.expectASN1Length(0);
      r.expectUint8(Tt, 0);
      let [o, a] = r.expectASN1Length(0), u = r.readBytes(a());
      o(), r.expectUint8(Tt, 0);
      let [h, c] = r.expectASN1Length(0), f = r.readBytes(c());
      h(), s();
      let w = (B, k) => B.length > k ? B.subarray(B.length - k) : B.length < k ? ne(new Uint8Array(k - B.length), B) : B, g = n === "P-256" ? 32 : 48, b = ne(w(u, g), w(f, g)), I = await L.importKey("spki", e2, { name: "ECDSA", namedCurve: n }, false, ["verify"]);
      if (await L.verify({ name: "ECDSA", hash: i }, I, b, t) !== true)
        throw new Error("ECDSA-SECP256R1-SHA256 certificate verify failed");
    }
    async function uh(r, e2, t) {
      for (let s of e2)
        ;
      let n = e2[0];
      if (n.subjectAltNameMatchingHost(r) === void 0)
        throw new Error(`No matching subjectAltName for ${r}`);
      if (!n.isValidAtMoment())
        throw new Error("End-user certificate is not valid now");
      if (!n.extKeyUsage?.serverTls)
        throw new Error("End-user certificate has no TLS server extKeyUsage");
      let i = false;
      for (let s of t)
        ;
      for (let s = 0, o = e2.length; s < o; s++) {
        let a = e2[s], u = a.authorityKeyIdentifier;
        if (u === void 0)
          throw new Error("Certificates without an authorityKeyIdentifier are not supported");
        let h = t.find((w) => w.subjectKeyIdentifier !== void 0 && ot(w.subjectKeyIdentifier, u));
        if (h === void 0 && (h = e2[s + 1]), h === void 0)
          throw new Error("Ran out of certificates before reaching trusted root");
        let c = h instanceof Fr;
        if (h.isValidAtMoment() !== true)
          throw new Error("Signing certificate is not valid now");
        if (h.keyUsage?.usages.has("digitalSignature") !== true)
          throw new Error("Signing certificate keyUsage does not include digital signatures");
        if (h.basicConstraints?.ca !== true)
          throw new Error("Signing certificate basicConstraints do not indicate a CA certificate");
        let { pathLength: f } = h.basicConstraints;
        if (f !== void 0 && f < s)
          throw new Error("Exceeded certificate path length");
        if (a.algorithm === "1.2.840.10045.4.3.2" || a.algorithm === "1.2.840.10045.4.3.3") {
          let w = a.algorithm === "1.2.840.10045.4.3.2" ? "SHA-256" : "SHA-384", g = h.publicKey.identifiers, b = g.includes("1.2.840.10045.3.1.7") ? "P-256" : g.includes("1.3.132.0.34") ? "P-384" : void 0;
          if (b === void 0)
            throw new Error("Unsupported signing key curve");
          let I = new Bt(a.signature);
          await ws(I, h.publicKey.all, a.signedData, b, w);
        } else if (a.algorithm === "1.2.840.113549.1.1.11" || a.algorithm === "1.2.840.113549.1.1.12") {
          let w = a.algorithm === "1.2.840.113549.1.1.11" ? "SHA-256" : "SHA-384", g = await L.importKey("spki", h.publicKey.all, { name: "RSASSA-PKCS1-v1_5", hash: w }, false, ["verify"]);
          if (await L.verify({ name: "RSASSA-PKCS1-v1_5" }, g, a.signature, a.signedData) !== true)
            throw new Error("RSASSA_PKCS1-v1_5-SHA256 certificate verify failed");
        } else
          throw new Error("Unsupported signing algorithm");
        if (c) {
          i = true;
          break;
        }
      }
      return i;
    }
    async function ch(r, e2, t, n, i) {
      let s = new Bt(await e2());
      s.expectUint8(8, 0);
      let [o] = s.expectLengthUint24(), [a, u] = s.expectLengthUint16(0);
      for (; u() > 0; ) {
        let T = s.readUint16(0);
        if (T === 0)
          s.expectUint16(0, 0);
        else if (T === 10) {
          let [N, we] = s.expectLengthUint16("groups data");
          s.skip(we(), 0), N();
        } else
          throw new Error(`Unsupported server encrypted extension type 0x${_e([T]).padStart(4, "0")}`);
      }
      a(), o(), s.remaining() === 0 && s.extend(await e2());
      let h = false, c = s.readUint8();
      if (c === 13) {
        h = true;
        let [T] = s.expectLengthUint24("certificate request data");
        s.expectUint8(0, 0);
        let [N, we] = s.expectLengthUint16("certificate request extensions");
        s.skip(we(), 0), N(), T(), s.remaining() === 0 && s.extend(await e2()), c = s.readUint8();
      }
      if (c !== 11)
        throw new Error(`Unexpected handshake message type 0x${_e([c])}`);
      let [f] = s.expectLengthUint24(0);
      s.expectUint8(0, 0);
      let [w, g] = s.expectLengthUint24(0), b = [];
      for (; g() > 0; ) {
        let [T] = s.expectLengthUint24(0), N = new ys(s);
        b.push(N), T();
        let [we, Be] = s.expectLengthUint16(), mn = s.subarray(Be());
        we();
      }
      if (w(), f(), b.length === 0)
        throw new Error("No certificates supplied");
      let I = b[0], B = s.data.subarray(0, s.offset), k = ne(n, B), _ = await L.digest("SHA-256", k), x = new Uint8Array(_), K = ne(hh.encode(" ".repeat(64) + "TLS 1.3, server CertificateVerify"), [0], x);
      s.remaining() === 0 && s.extend(await e2()), s.expectUint8(15, 0);
      let [z] = s.expectLengthUint24(0), P = s.readUint16();
      if (P === 1027) {
        let [T] = s.expectLengthUint16();
        await ws(s, I.publicKey.all, K, "P-256", "SHA-256"), T();
      } else if (P === 2052) {
        let [T, N] = s.expectLengthUint16(), we = s.subarray(N());
        T();
        let Be = await L.importKey("spki", I.publicKey.all, { name: "RSA-PSS", hash: "SHA-256" }, false, ["verify"]);
        if (await L.verify({ name: "RSA-PSS", saltLength: 32 }, Be, we, K) !== true)
          throw new Error("RSA-PSS-RSAE-SHA256 certificate verify failed");
      } else
        throw new Error(`Unsupported certificate verify signature type 0x${_e([P]).padStart(4, "0")}`);
      z();
      let J = s.data.subarray(0, s.offset), $ = ne(n, J), ce = await ie(t, "finished", new Uint8Array(0), 32, 256), U = await L.digest("SHA-256", $), R = await L.importKey("raw", ce, { name: "HMAC", hash: { name: "SHA-256" } }, false, ["sign"]), F = await L.sign("HMAC", R, U), q = new Uint8Array(F);
      s.remaining() === 0 && s.extend(await e2()), s.expectUint8(20, 0);
      let [Q, Z] = s.expectLengthUint24(0), X = s.readBytes(Z());
      if (Q(), s.remaining() !== 0)
        throw new Error("Unexpected extra bytes in server handshake");
      if (ot(X, q) !== true)
        throw new Error("Invalid server verify hash");
      if (!await uh(r, b, i))
        throw new Error("Validated certificate chain did not end in a trusted root");
      return [s.data, h];
    }
    async function ms(r, e2, t, n, i = true, s, o, a) {
      let u = await L.generateKey({ name: "ECDH", namedCurve: "P-256" }, true, ["deriveKey", "deriveBits"]), h = await L.exportKey("raw", u.publicKey), c = new Uint8Array(32);
      m.getRandomValues(c);
      let f = ju(r, h, c, i).array(), w = s ? ne(s, f) : f;
      if (n(w), o) {
        let Y = await t(o.length);
        if (!Y || !ot(Y, o))
          throw new Error("Pre data did not match expectation");
      }
      let g = await Rr(t, 22);
      if (g === void 0)
        throw new Error("Connection closed while awaiting server hello");
      let b = new Se(g.content), I = Ku(b, c), B = await Rr(t, 20);
      if (B === void 0)
        throw new Error("Connection closed awaiting server cipher change");
      let k = new Se(B.content), [_] = k.expectLength(1);
      k.expectUint8(1, 0), _();
      let x = f.subarray(5), K = g.content, z = ne(x, K), P = await Vu(I, u.privateKey, z, 256, 16), J = await L.importKey("raw", P.serverHandshakeKey, { name: "AES-GCM" }, false, ["decrypt"]), $ = new It("decrypt", J, P.serverHandshakeIV), ce = await L.importKey("raw", P.clientHandshakeKey, { name: "AES-GCM" }, false, ["encrypt"]), U = new It("encrypt", ce, P.clientHandshakeIV), R = async () => {
        let Y = await Mr(t, $, 22);
        if (Y === void 0)
          throw new Error("Premature end of encrypted server handshake");
        return Y;
      }, [F, q] = await ch(r, R, P.serverSecret, z, e2), Q = new Se(6);
      Q.writeUint8(20, 0), Q.writeUint16(771, 0);
      let Z = Q.writeLengthUint16();
      Q.writeUint8(1, 0), Z();
      let X = Q.array(), T = new Uint8Array(0);
      if (q) {
        let Y = new Se(8);
        Y.writeUint8(11, 0);
        let Te = Y.writeLengthUint24("client certificate data");
        Y.writeUint8(0, 0), Y.writeUint24(0, 0), Te(), T = Y.array();
      }
      let N = ne(z, F, T), we = await L.digest("SHA-256", N), Be = new Uint8Array(we), mn = await ie(P.clientSecret, "finished", new Uint8Array(0), 32, 256), Xs = await L.importKey("raw", mn, { name: "HMAC", hash: { name: "SHA-256" } }, false, ["sign"]), eo = await L.sign("HMAC", Xs, Be), to = new Uint8Array(eo), ut = new Se(36);
      ut.writeUint8(20, 0);
      let ro = ut.writeLengthUint24(0);
      ut.writeBytes(to), ro();
      let no = ut.array(), gn = await hs(ne(T, no), U, 22), Sn = Be;
      if (T.length > 0) {
        let Y = N.subarray(0, N.length - T.length), Te = await L.digest("SHA-256", Y);
        Sn = new Uint8Array(Te);
      }
      let ht = await zu(P.handshakeSecret, Sn, 256, 16), io = await L.importKey("raw", ht.clientApplicationKey, { name: "AES-GCM" }, false, ["encrypt"]), so = new It("encrypt", io, ht.clientApplicationIV), oo = await L.importKey("raw", ht.serverApplicationKey, { name: "AES-GCM" }, false, ["decrypt"]), ao = new It("decrypt", oo, ht.serverApplicationIV), ct = false;
      return [() => {
        if (!ct) {
          let Y = ne(X, ...gn);
          n(Y), ct = true;
        }
        return Mr(t, ao);
      }, async (Y) => {
        let Te = await hs(Y, so, 23), uo = ct ? ne(...Te) : ne(X, ...gn, ...Te);
        n(uo), ct = true;
      }];
    }
    var Pr;
    var us;
    var Hu;
    var Se;
    var kl;
    var st;
    var $u;
    var L;
    var ds;
    var cs;
    var Yu;
    var It;
    var Bt;
    var Lr;
    var Tt;
    var re;
    var Zu;
    var Qe;
    var Xu;
    var eh;
    var ls;
    var Br;
    var Le;
    var Tr;
    var th;
    var it;
    var rh;
    var ah;
    var ys;
    var Fr;
    var hh;
    var gs;
    var Ss = ee(() => {
      d();
      Pr = "\xB7\xB7 ", us = new TextEncoder(), Hu = new TextDecoder(), Se = class {
        constructor(r) {
          S(this, "offset");
          S(this, "dataView");
          S(this, "data");
          S(this, "comments");
          S(this, "indents");
          S(this, "indent");
          this.offset = 0, this.data = typeof r == "number" ? new Uint8Array(r) : r, this.dataView = new DataView(this.data.buffer, this.data.byteOffset, this.data.byteLength), this.comments = {}, this.indents = {}, this.indent = 0;
        }
        extend(r) {
          let e2 = typeof r == "number" ? new Uint8Array(r) : r;
          this.data = ne(this.data, e2), this.dataView = new DataView(this.data.buffer, this.data.byteOffset, this.data.byteLength);
        }
        remaining() {
          return this.data.length - this.offset;
        }
        subarray(r) {
          return this.data.subarray(this.offset, this.offset += r);
        }
        skip(r, e2) {
          return this.offset += r, e2 && this.comment(e2), this;
        }
        comment(r, e2 = this.offset) {
          throw new Error("No comments should be emitted outside of chatty mode");
        }
        readBytes(r) {
          return this.data.slice(this.offset, this.offset += r);
        }
        readUTF8String(r) {
          let e2 = this.subarray(r);
          return Hu.decode(e2);
        }
        readUTF8StringNullTerminated() {
          let r = this.offset;
          for (; this.data[r] !== 0; )
            r++;
          let e2 = this.readUTF8String(r - this.offset);
          return this.expectUint8(0, "end of string"), e2;
        }
        readUint8(r) {
          let e2 = this.dataView.getUint8(this.offset);
          return this.offset += 1, e2;
        }
        readUint16(r) {
          let e2 = this.dataView.getUint16(this.offset);
          return this.offset += 2, e2;
        }
        readUint24(r) {
          let e2 = this.readUint8(), t = this.readUint16();
          return (e2 << 16) + t;
        }
        readUint32(r) {
          let e2 = this.dataView.getUint32(this.offset);
          return this.offset += 4, e2;
        }
        expectBytes(r, e2) {
          let t = this.readBytes(r.length);
          if (!ot(t, r))
            throw new Error("Unexpected bytes");
        }
        expectUint8(r, e2) {
          let t = this.readUint8();
          if (t !== r)
            throw new Error(`Expected ${r}, got ${t}`);
        }
        expectUint16(r, e2) {
          let t = this.readUint16();
          if (t !== r)
            throw new Error(`Expected ${r}, got ${t}`);
        }
        expectUint24(r, e2) {
          let t = this.readUint24();
          if (t !== r)
            throw new Error(`Expected ${r}, got ${t}`);
        }
        expectUint32(r, e2) {
          let t = this.readUint32();
          if (t !== r)
            throw new Error(`Expected ${r}, got ${t}`);
        }
        expectLength(r, e2 = 1) {
          let t = this.offset, n = t + r;
          if (n > this.data.length)
            throw new Error("Expected length exceeds remaining data length");
          return this.indent += e2, this.indents[t] = this.indent, [() => {
            if (this.indent -= e2, this.indents[this.offset] = this.indent, this.offset !== n)
              throw new Error(`${r} bytes expected but ${this.offset - t} read`);
          }, () => n - this.offset];
        }
        expectLengthUint8(r) {
          let e2 = this.readUint8();
          return this.expectLength(e2);
        }
        expectLengthUint16(r) {
          let e2 = this.readUint16();
          return this.expectLength(e2);
        }
        expectLengthUint24(r) {
          let e2 = this.readUint24();
          return this.expectLength(e2);
        }
        expectLengthUint32(r) {
          let e2 = this.readUint32();
          return this.expectLength(e2);
        }
        expectLengthUint8Incl(r) {
          let e2 = this.readUint8();
          return this.expectLength(e2 - 1);
        }
        expectLengthUint16Incl(r) {
          let e2 = this.readUint16();
          return this.expectLength(e2 - 2);
        }
        expectLengthUint24Incl(r) {
          let e2 = this.readUint24();
          return this.expectLength(e2 - 3);
        }
        expectLengthUint32Incl(r) {
          let e2 = this.readUint32();
          return this.expectLength(e2 - 4);
        }
        writeBytes(r) {
          return this.data.set(r, this.offset), this.offset += r.length, this;
        }
        writeUTF8String(r) {
          let e2 = us.encode(r);
          return this.writeBytes(e2), this;
        }
        writeUTF8StringNullTerminated(r) {
          let e2 = us.encode(r);
          return this.writeBytes(e2), this.writeUint8(0), this;
        }
        writeUint8(r, e2) {
          return this.dataView.setUint8(this.offset, r), this.offset += 1, this;
        }
        writeUint16(r, e2) {
          return this.dataView.setUint16(this.offset, r), this.offset += 2, this;
        }
        writeUint24(r, e2) {
          return this.writeUint8((r & 16711680) >> 16), this.writeUint16(r & 65535, e2), this;
        }
        writeUint32(r, e2) {
          return this.dataView.setUint32(this.offset, r), this.offset += 4, this;
        }
        _writeLengthGeneric(r, e2, t) {
          let n = this.offset;
          this.offset += r;
          let i = this.offset;
          return this.indent += 1, this.indents[i] = this.indent, () => {
            let s = this.offset - (e2 ? n : i);
            if (r === 1)
              this.dataView.setUint8(n, s);
            else if (r === 2)
              this.dataView.setUint16(n, s);
            else if (r === 3)
              this.dataView.setUint8(n, (s & 16711680) >> 16), this.dataView.setUint16(n + 1, s & 65535);
            else if (r === 4)
              this.dataView.setUint32(n, s);
            else
              throw new Error(`Invalid length for length field: ${r}`);
            this.indent -= 1, this.indents[this.offset] = this.indent;
          };
        }
        writeLengthUint8(r) {
          return this._writeLengthGeneric(1, false, r);
        }
        writeLengthUint16(r) {
          return this._writeLengthGeneric(2, false, r);
        }
        writeLengthUint24(r) {
          return this._writeLengthGeneric(3, false, r);
        }
        writeLengthUint32(r) {
          return this._writeLengthGeneric(4, false, r);
        }
        writeLengthUint8Incl(r) {
          return this._writeLengthGeneric(1, true, r);
        }
        writeLengthUint16Incl(r) {
          return this._writeLengthGeneric(2, true, r);
        }
        writeLengthUint24Incl(r) {
          return this._writeLengthGeneric(3, true, r);
        }
        writeLengthUint32Incl(r) {
          return this._writeLengthGeneric(4, true, r);
        }
        array() {
          return this.data.subarray(0, this.offset);
        }
        commentedString(r = false) {
          let e2 = this.indents[0] !== void 0 ? Pr.repeat(this.indents[0]) : "", t = this.indents[0] ?? 0, n = r ? this.data.length : this.offset;
          for (let i = 0; i < n; i++) {
            e2 += this.data[i].toString(16).padStart(2, "0") + " ";
            let s = this.comments[i + 1];
            this.indents[i + 1] !== void 0 && (t = this.indents[i + 1]), s && (e2 += ` ${s}
${Pr.repeat(t)}`);
          }
          return e2;
        }
      };
      kl = new RegExp(`  .+|^(${Pr})+`, "gm"), st = 1 << 14, $u = st + 1 + 255;
      L = m.subtle, ds = new TextEncoder();
      cs = ds.encode("tls13 ");
      Yu = 1 << 30, It = class {
        constructor(r, e2, t) {
          S(this, "mode");
          S(this, "key");
          S(this, "initialIv");
          S(this, "ivLength");
          S(this, "currentIv");
          S(this, "currentIvDataView");
          S(this, "initialIvLast32");
          S(this, "recordsDecrypted", 0);
          this.mode = r, this.key = e2, this.initialIv = t, this.ivLength = t.length, this.currentIv = t.slice(), this.currentIvDataView = new DataView(this.currentIv.buffer, this.currentIv.byteOffset, this.currentIv.byteLength), this.initialIvLast32 = this.currentIvDataView.getUint32(this.ivLength - 4);
        }
        async process(r, e2, t) {
          if (this.recordsDecrypted === Yu)
            throw new Error("Cannot encrypt/decrypt any more records");
          let n = this.initialIvLast32 ^ this.recordsDecrypted;
          this.currentIvDataView.setUint32(this.ivLength - 4, n), this.recordsDecrypted += 1;
          let i = e2 << 3, s = { name: "AES-GCM", iv: this.currentIv, tagLength: i, additionalData: t }, o = await L[this.mode](s, this.key, r);
          return new Uint8Array(o);
        }
      };
      Bt = class extends Se {
        readASN1Length(r) {
          let e2 = this.readUint8();
          if (e2 < 128)
            return e2;
          let t = e2 & 127, n = 0;
          if (t === 1)
            return this.readUint8(n);
          if (t === 2)
            return this.readUint16(n);
          if (t === 3)
            return this.readUint24(n);
          if (t === 4)
            return this.readUint32(n);
          throw new Error(`ASN.1 length fields are only supported up to 4 bytes (this one is ${t} bytes)`);
        }
        expectASN1Length(r) {
          let e2 = this.readASN1Length(r);
          return this.expectLength(e2);
        }
        readASN1OID() {
          let [r, e2] = this.expectASN1Length(0), t = this.readUint8(), n = `${Math.floor(t / 40)}.${t % 40}`;
          for (; e2() > 0; ) {
            let i = 0;
            for (; ; ) {
              let s = this.readUint8();
              if (i <<= 7, i += s & 127, s < 128)
                break;
            }
            n += `.${i}`;
          }
          return r(), n;
        }
        readASN1Boolean() {
          let [r, e2] = this.expectASN1Length(0), t = e2();
          if (t !== 1)
            throw new Error(`Boolean has weird length: ${t}`);
          let n = this.readUint8(), i;
          if (n === 255)
            i = true;
          else if (n === 0)
            i = false;
          else
            throw new Error(`Boolean has weird value: 0x${_e([n])}`);
          return r(), i;
        }
        readASN1UTCTime() {
          let [r, e2] = this.expectASN1Length(0), t = this.readUTF8String(e2()).match(/^(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)Z$/);
          if (!t)
            throw new Error("Unrecognised UTC time format in certificate validity");
          let [, n, i, s, o, a, u] = t, h = parseInt(n, 10), c = h + (h >= 50 ? 1900 : 2e3), f = new Date(`${c}-${i}-${s}T${o}:${a}:${u}Z`);
          return r(), f;
        }
        readASN1BitString() {
          let [r, e2] = this.expectASN1Length(0), t = this.readUint8(0), n = e2(), i = this.readBytes(n);
          if (t > 7)
            throw new Error(`Invalid right pad value: ${t}`);
          if (t > 0) {
            let s = 8 - t;
            for (let o = n - 1; o > 0; o--)
              i[o] = 255 & i[o - 1] << s | i[o] >>> t;
            i[0] = i[0] >>> t;
          }
          return r(), i;
        }
      }, Lr = 1, Tt = 2, re = 48, Zu = 49, Qe = 6, Xu = 19, eh = 12, ls = 23, Br = 5, Le = 4, Tr = 3, th = 163, it = 128, rh = { "2.5.4.6": "C", "2.5.4.10": "O", "2.5.4.11": "OU", "2.5.4.3": "CN", "2.5.4.7": "L", "2.5.4.8": "ST", "2.5.4.12": "T", "2.5.4.42": "GN", "2.5.4.43": "I", "2.5.4.4": "SN", "1.2.840.113549.1.9.1": "E-mail" };
      ah = ["digitalSignature", "nonRepudiation", "keyEncipherment", "dataEncipherment", "keyAgreement", "keyCertSign", "cRLSign", "encipherOnly", "decipherOnly"], ys = class {
        constructor(r) {
          S(this, "serialNumber");
          S(this, "algorithm");
          S(this, "issuer");
          S(this, "validityPeriod");
          S(this, "subject");
          S(this, "publicKey");
          S(this, "signature");
          S(this, "keyUsage");
          S(this, "subjectAltNames");
          S(this, "extKeyUsage");
          S(this, "authorityKeyIdentifier");
          S(this, "subjectKeyIdentifier");
          S(this, "basicConstraints");
          S(this, "signedData");
          let e2 = r instanceof Bt ? r : new Bt(r);
          e2.expectUint8(re, 0);
          let [t] = e2.expectASN1Length(0), n = e2.offset;
          e2.expectUint8(re, 0);
          let [i] = e2.expectASN1Length(0);
          e2.expectBytes([160, 3, 2, 1, 2], 0), e2.expectUint8(Tt, 0);
          let [s, o] = e2.expectASN1Length(0);
          this.serialNumber = e2.subarray(o()), s(), e2.expectUint8(re, 0);
          let [a, u] = e2.expectASN1Length(0);
          e2.expectUint8(Qe, 0), this.algorithm = e2.readASN1OID(), u() > 0 && (e2.expectUint8(Br, 0), e2.expectUint8(0, 0)), a(), this.issuer = fs(e2, "issuer"), e2.expectUint8(re, 0);
          let [h] = e2.expectASN1Length(0);
          e2.expectUint8(ls, 0);
          let c = e2.readASN1UTCTime();
          e2.expectUint8(ls, 0);
          let f = e2.readASN1UTCTime();
          this.validityPeriod = { notBefore: c, notAfter: f }, h(), this.subject = fs(e2, "subject");
          let w = e2.offset;
          e2.expectUint8(re, 0);
          let [g] = e2.expectASN1Length(0);
          e2.expectUint8(re, 0);
          let [b, I] = e2.expectASN1Length(0), B = [];
          for (; I() > 0; ) {
            let $ = e2.readUint8();
            if ($ === Qe) {
              let ce = e2.readASN1OID();
              B.push(ce);
            } else
              $ === Br && e2.expectUint8(0, 0);
          }
          b(), e2.expectUint8(Tr, 0);
          let k = e2.readASN1BitString();
          this.publicKey = { identifiers: B, data: k, all: e2.data.subarray(w, e2.offset) }, g(), e2.expectUint8(th, 0);
          let [_] = e2.expectASN1Length();
          e2.expectUint8(re, 0);
          let [x, K] = e2.expectASN1Length(0);
          for (; K() > 0; ) {
            e2.expectUint8(re, 0);
            let [$, ce] = e2.expectASN1Length();
            e2.expectUint8(Qe, 0);
            let U = e2.readASN1OID();
            if (U === "2.5.29.17") {
              e2.expectUint8(Le, 0);
              let [R] = e2.expectASN1Length(0);
              e2.expectUint8(re, 0);
              let F = ih(e2, it);
              this.subjectAltNames = F.filter((q) => q.type === (2 | it)).map((q) => q.name), R();
            } else if (U === "2.5.29.15") {
              e2.expectUint8(Lr, 0);
              let R = e2.readASN1Boolean();
              e2.expectUint8(Le, 0);
              let [F] = e2.expectASN1Length(0);
              e2.expectUint8(Tr, 0);
              let q = e2.readASN1BitString(), Q = nh(q), Z = new Set(ah.filter((X, T) => Q & 1 << T));
              F(), this.keyUsage = { critical: R, usages: Z };
            } else if (U === "2.5.29.37") {
              this.extKeyUsage = {}, e2.expectUint8(Le, 0);
              let [R] = e2.expectASN1Length(0);
              e2.expectUint8(re, 0);
              let [F, q] = e2.expectASN1Length(0);
              for (; q() > 0; ) {
                e2.expectUint8(Qe, 0);
                let Q = e2.readASN1OID();
                Q === "1.3.6.1.5.5.7.3.1" && (this.extKeyUsage.serverTls = true), Q === "1.3.6.1.5.5.7.3.2" && (this.extKeyUsage.clientTls = true);
              }
              F(), R();
            } else if (U === "2.5.29.35") {
              e2.expectUint8(Le, 0);
              let [R] = e2.expectASN1Length(0);
              e2.expectUint8(re, 0);
              let [F, q] = e2.expectASN1Length(0);
              for (; q() > 0; ) {
                let Q = e2.readUint8();
                if (Q === (it | 0)) {
                  let [Z, X] = e2.expectASN1Length(0);
                  this.authorityKeyIdentifier = e2.readBytes(X()), Z();
                } else if (Q === (it | 1) || Q === (it | 2)) {
                  let [Z, X] = e2.expectASN1Length(0);
                  e2.skip(X(), 0), Z();
                } else
                  throw new Error("Unexpected data type in authorityKeyIdentifier certificate extension");
              }
              F(), R();
            } else if (U === "2.5.29.14") {
              e2.expectUint8(Le, 0);
              let [R] = e2.expectASN1Length(0);
              e2.expectUint8(Le, 0);
              let [F, q] = e2.expectASN1Length(0);
              this.subjectKeyIdentifier = e2.readBytes(q()), F(), R();
            } else if (U === "2.5.29.19") {
              let R, F = e2.readUint8();
              if (F === Lr && (R = e2.readASN1Boolean(), F = e2.readUint8()), F !== Le)
                throw new Error("Unexpected type in certificate basic constraints");
              let [q] = e2.expectASN1Length(0);
              e2.expectUint8(re, 0);
              let [Q, Z] = e2.expectASN1Length(), X;
              Z() > 0 && (e2.expectUint8(Lr, 0), X = e2.readASN1Boolean());
              let T;
              if (Z() > 0) {
                e2.expectUint8(Tt, 0);
                let N = e2.readASN1Length(0);
                if (T = N === 1 ? e2.readUint8() : N === 2 ? e2.readUint16() : N === 3 ? e2.readUint24() : void 0, T === void 0)
                  throw new Error("Too many bytes in max path length in certificate basicConstraints");
              }
              Q(), q(), this.basicConstraints = { critical: R, ca: X, pathLength: T };
            } else
              e2.skip(ce(), 0);
            $();
          }
          x(), _(), i(), this.signedData = e2.data.subarray(n, e2.offset), e2.expectUint8(re, 0);
          let [z, P] = e2.expectASN1Length(0);
          e2.expectUint8(Qe, 0);
          let J = e2.readASN1OID();
          if (P() > 0 && (e2.expectUint8(Br, 0), e2.expectUint8(0, 0)), z(), J !== this.algorithm)
            throw new Error(`Certificate specifies different signature algorithms inside (${this.algorithm}) and out (${J})`);
          e2.expectUint8(Tr, 0), this.signature = e2.readASN1BitString(), t();
        }
        static fromPEM(r) {
          let e2 = "[A-Z0-9 ]+", t = new RegExp(`-{5}BEGIN ${e2}-{5}([a-zA-Z0-9=+\\/\\n\\r]+)-{5}END ${e2}-{5}`, "g"), n = [], i = null;
          for (; i = t.exec(r); ) {
            let s = i[1].replace(/[\r\n]/g, ""), o = Ju(s), a = new this(o);
            n.push(a);
          }
          return n;
        }
        subjectAltNameMatchingHost(r) {
          let e2 = /[.][^.]+[.][^.]+$/;
          return (this.subjectAltNames ?? []).find((t) => {
            let n = t, i = r;
            if (e2.test(r) && e2.test(n) && n.startsWith("*.") && (n = n.slice(1), i = i.slice(i.indexOf("."))), n === i)
              return true;
          });
        }
        isValidAtMoment(r = new Date()) {
          return r >= this.validityPeriod.notBefore && r <= this.validityPeriod.notAfter;
        }
        description() {
          return "subject: " + Object.entries(this.subject).map((r) => r.join("=")).join(", ") + (this.subjectAltNames ? `
subject alt names: ` + this.subjectAltNames.join(", ") : "") + (this.subjectKeyIdentifier ? `
subject key id: ${_e(this.subjectKeyIdentifier, " ")}` : "") + `
issuer: ` + Object.entries(this.issuer).map((r) => r.join("=")).join(", ") + (this.authorityKeyIdentifier ? `
authority key id: ${_e(this.authorityKeyIdentifier, " ")}` : "") + `
validity: ` + this.validityPeriod.notBefore.toISOString() + " \u2013 " + this.validityPeriod.notAfter.toISOString() + ` (${this.isValidAtMoment() ? "currently valid" : "not valid"})` + (this.keyUsage ? `
key usage (${this.keyUsage.critical ? "critical" : "non-critical"}): ` + [...this.keyUsage.usages].join(", ") : "") + (this.extKeyUsage ? `
extended key usage: TLS server \u2014\xA0${this.extKeyUsage.serverTls}, TLS client \u2014\xA0${this.extKeyUsage.clientTls}` : "") + (this.basicConstraints ? `
basic constraints (${this.basicConstraints.critical ? "critical" : "non-critical"}): CA \u2014\xA0${this.basicConstraints.ca}, path length \u2014 ${this.basicConstraints.pathLength}` : "") + `
signature algorithm: ` + oh(sh(this.algorithm));
        }
        toJSON() {
          return { serialNumber: [...this.serialNumber], algorithm: this.algorithm, issuer: this.issuer, validityPeriod: { notBefore: this.validityPeriod.notBefore.toISOString(), notAfter: this.validityPeriod.notAfter.toISOString() }, subject: this.subject, publicKey: { identifiers: this.publicKey.identifiers, data: [...this.publicKey.data], all: [...this.publicKey.all] }, signature: [...this.signature], keyUsage: { critical: this.keyUsage?.critical, usages: [...this.keyUsage?.usages ?? []] }, subjectAltNames: this.subjectAltNames, extKeyUsage: this.extKeyUsage, authorityKeyIdentifier: this.authorityKeyIdentifier && [...this.authorityKeyIdentifier], subjectKeyIdentifier: this.subjectKeyIdentifier && [...this.subjectKeyIdentifier], basicConstraints: this.basicConstraints, signedData: [...this.signedData] };
        }
      }, Fr = class extends ys {
      };
      hh = new TextEncoder();
      gs = class {
        constructor(r) {
          S(this, "queue");
          S(this, "outstandingRequest");
          this.ws = r, this.queue = [], r.addEventListener("message", (e2) => this.enqueue(new Uint8Array(e2.data))), r.addEventListener("close", () => this.dequeue());
        }
        enqueue(r) {
          this.queue.push(r), this.dequeue();
        }
        dequeue() {
          if (this.outstandingRequest === void 0)
            return;
          let { resolve: r, bytes: e2 } = this.outstandingRequest, t = this.bytesInQueue();
          if (t < e2 && this.ws.readyState <= 1)
            return;
          if (e2 = Math.min(e2, t), e2 === 0)
            return r(void 0);
          this.outstandingRequest = void 0;
          let n = this.queue[0], i = n.length;
          if (i === e2)
            return this.queue.shift(), r(n);
          if (i > e2)
            return this.queue[0] = n.subarray(e2), r(n.subarray(0, e2));
          {
            let s = new Uint8Array(e2), o = e2, a = 0;
            for (; o > 0; ) {
              let u = this.queue[0], h = u.length;
              h <= o ? (this.queue.shift(), s.set(u, a), a += h, o -= h) : (this.queue[0] = u.subarray(o), s.set(u.subarray(0, o), a), o -= o, a += o);
            }
            return r(s);
          }
        }
        bytesInQueue() {
          return this.queue.reduce((r, e2) => r + e2.length, 0);
        }
        async read(r) {
          if (this.outstandingRequest !== void 0)
            throw new Error("Can\u2019t read while already awaiting read");
          return new Promise((e2) => {
            this.outstandingRequest = { resolve: e2, bytes: r }, this.dequeue();
          });
        }
      };
    });
    var Nr;
    var xs = ee(() => {
      Nr = `-----BEGIN CERTIFICATE-----
MIIFazCCA1OgAwIBAgIRAIIQz7DSQONZRGPgu2OCiwAwDQYJKoZIhvcNAQELBQAw
TzELMAkGA1UEBhMCVVMxKTAnBgNVBAoTIEludGVybmV0IFNlY3VyaXR5IFJlc2Vh
cmNoIEdyb3VwMRUwEwYDVQQDEwxJU1JHIFJvb3QgWDEwHhcNMTUwNjA0MTEwNDM4
WhcNMzUwNjA0MTEwNDM4WjBPMQswCQYDVQQGEwJVUzEpMCcGA1UEChMgSW50ZXJu
ZXQgU2VjdXJpdHkgUmVzZWFyY2ggR3JvdXAxFTATBgNVBAMTDElTUkcgUm9vdCBY
MTCCAiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoCggIBAK3oJHP0FDfzm54rVygc
h77ct984kIxuPOZXoHj3dcKi/vVqbvYATyjb3miGbESTtrFj/RQSa78f0uoxmyF+
0TM8ukj13Xnfs7j/EvEhmkvBioZxaUpmZmyPfjxwv60pIgbz5MDmgK7iS4+3mX6U
A5/TR5d8mUgjU+g4rk8Kb4Mu0UlXjIB0ttov0DiNewNwIRt18jA8+o+u3dpjq+sW
T8KOEUt+zwvo/7V3LvSye0rgTBIlDHCNAymg4VMk7BPZ7hm/ELNKjD+Jo2FR3qyH
B5T0Y3HsLuJvW5iB4YlcNHlsdu87kGJ55tukmi8mxdAQ4Q7e2RCOFvu396j3x+UC
B5iPNgiV5+I3lg02dZ77DnKxHZu8A/lJBdiB3QW0KtZB6awBdpUKD9jf1b0SHzUv
KBds0pjBqAlkd25HN7rOrFleaJ1/ctaJxQZBKT5ZPt0m9STJEadao0xAH0ahmbWn
OlFuhjuefXKnEgV4We0+UXgVCwOPjdAvBbI+e0ocS3MFEvzG6uBQE3xDk3SzynTn
jh8BCNAw1FtxNrQHusEwMFxIt4I7mKZ9YIqioymCzLq9gwQbooMDQaHWBfEbwrbw
qHyGO0aoSCqI3Haadr8faqU9GY/rOPNk3sgrDQoo//fb4hVC1CLQJ13hef4Y53CI
rU7m2Ys6xt0nUW7/vGT1M0NPAgMBAAGjQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNV
HRMBAf8EBTADAQH/MB0GA1UdDgQWBBR5tFnme7bl5AFzgAiIyBpY9umbbjANBgkq
hkiG9w0BAQsFAAOCAgEAVR9YqbyyqFDQDLHYGmkgJykIrGF1XIpu+ILlaS/V9lZL
ubhzEFnTIZd+50xx+7LSYK05qAvqFyFWhfFQDlnrzuBZ6brJFe+GnY+EgPbk6ZGQ
3BebYhtF8GaV0nxvwuo77x/Py9auJ/GpsMiu/X1+mvoiBOv/2X/qkSsisRcOj/KK
NFtY2PwByVS5uCbMiogziUwthDyC3+6WVwW6LLv3xLfHTjuCvjHIInNzktHCgKQ5
ORAzI4JMPJ+GslWYHb4phowim57iaztXOoJwTdwJx4nLCgdNbOhdjsnvzqvHu7Ur
TkXWStAmzOVyyghqpZXjFaH3pO3JLF+l+/+sKAIuvtd7u+Nxe5AW0wdeRlN8NwdC
jNPElpzVmbUq4JUagEiuTDkHzsxHpFKVK7q4+63SM1N95R1NbdWhscdCb+ZAJzVc
oyi3B43njTOQ5yOf+1CceWxG1bQVs5ZufpsMljq4Ui0/1lvh+wjChP4kqKOJ2qxq
4RgqsahDYVvTH9w7jXbyLeiNdd8XM2w9U/t7y0Ff/9yi0GE44Za4rF2LN9d11TPA
mRGunUHBcnWEvgJBQl9nJEiU0Zsnvgc/ubhPgXRR4Xq37Z0j4r7g1SgEEzwxA57d
emyPxgcYxn/eR44/KJ4EBs+lVDR3veyJm+kXQ99b21/+jh5Xos1AnX5iItreGCc=
-----END CERTIFICATE-----
`;
    });
    var Es = {};
    le(Es, { Socket: () => ue, isIP: () => fh });
    function fh(r) {
      return 0;
    }
    var vs;
    var G;
    var ue;
    var Dr = ee(() => {
      "use strict";
      d();
      vs = Qt(be(), 1);
      Ss();
      xs();
      G = class extends vs.EventEmitter {
        constructor() {
          super(...arguments);
          S(this, "_webSocketConstructor");
          S(this, "_wsProxy");
          S(this, "_coalesceWrites");
          S(this, "_useSecureWebSocket");
          S(this, "_disableSNI");
          S(this, "_pipelineConnect");
          S(this, "_pipelineTLS");
          S(this, "_rootCerts");
          S(this, "connecting", false);
          S(this, "pending", true);
          S(this, "writable", true);
          S(this, "encrypted", false);
          S(this, "authorized", false);
          S(this, "destroyed", false);
          S(this, "ws", null);
          S(this, "writeBuffer");
          S(this, "tlsState", 0);
          S(this, "tlsRead");
          S(this, "tlsWrite");
        }
        get webSocketConstructor() {
          return this._webSocketConstructor ?? G.webSocketConstructor ?? G.defaults.webSocketConstructor;
        }
        set webSocketConstructor(t) {
          this._webSocketConstructor = t;
        }
        get wsProxy() {
          return this._wsProxy ?? G.wsProxy ?? G.defaults.wsProxy;
        }
        set wsProxy(t) {
          this._wsProxy = t;
        }
        get coalesceWrites() {
          return this._coalesceWrites ?? G.coalesceWrites ?? G.defaults.coalesceWrites;
        }
        set coalesceWrites(t) {
          this._coalesceWrites = t;
        }
        get useSecureWebSocket() {
          return this._useSecureWebSocket ?? G.useSecureWebSocket ?? G.defaults.useSecureWebSocket;
        }
        set useSecureWebSocket(t) {
          this._useSecureWebSocket = t;
        }
        get disableSNI() {
          return this._disableSNI ?? G.disableSNI ?? G.defaults.disableSNI;
        }
        set disableSNI(t) {
          this._disableSNI = t;
        }
        get pipelineConnect() {
          return this._pipelineConnect ?? G.pipelineConnect ?? G.defaults.pipelineConnect;
        }
        set pipelineConnect(t) {
          this._pipelineConnect = t;
        }
        get pipelineTLS() {
          return this._pipelineTLS ?? G.pipelineTLS ?? G.defaults.pipelineTLS;
        }
        set pipelineTLS(t) {
          this._pipelineTLS = t;
        }
        get rootCerts() {
          return this._rootCerts ?? G.rootCerts ?? G.defaults.rootCerts;
        }
        set rootCerts(t) {
          this._rootCerts = t;
        }
        wsProxyAddrForHost(t, n) {
          let i = this.wsProxy;
          if (i === void 0) {
            let s = `No WebSocket proxy is configured on the Neon serverless driver for database host "${t}". `, o = "That's the fallback host when none is specified, so perhaps an environment variable (such as DATABASE_URL) is missing? ", a = `If "${t}" is the host you expected, then you'll need to set the 'wsProxy' option on the driver (see: https://github.com/neondatabase/serverless#run-your-own-websocket-proxy).`, u = s + (t === "localhost" ? o : "") + a;
            throw new Error(u);
          }
          return typeof i == "function" ? i(t, n) : `${i}?address=${t}:${n}`;
        }
        setNoDelay() {
          return this;
        }
        setKeepAlive() {
          return this;
        }
        ref() {
          return this;
        }
        unref() {
          return this;
        }
        async connect(t, n, i) {
          this.connecting = true, i && this.once("connect", i);
          let s;
          try {
            s = this.wsProxyAddrForHost(n, typeof t == "string" ? parseInt(t, 10) : t);
          } catch (o) {
            this.emit("error", o), this.emit("close");
            return;
          }
          return this.ws = await new Promise(async (o) => {
            try {
              let u = (this.useSecureWebSocket ? "wss:" : "ws:") + "//" + s, h;
              if (this.webSocketConstructor !== void 0)
                h = new this.webSocketConstructor(u);
              else
                try {
                  h = new WebSocket(u);
                } catch {
                  try {
                    h = new __unstable_WebSocket(u);
                  } catch {
                    let { default: w } = await import(String.fromCharCode(119) + String.fromCharCode(115));
                    h = new w(u);
                  }
                }
              h.addEventListener("open", () => {
                o(h);
              });
            } catch (a) {
              try {
                let h = (this.useSecureWebSocket ? "https:" : "http:") + "//" + s;
                await fetch(h, { headers: { Upgrade: "websocket" } }).then((c) => {
                  let f = c.webSocket;
                  if (f == null)
                    throw a;
                  f.accept(), o(f);
                });
              } catch {
                this.emit("error", new Error("All attempts to open a WebSocket to connect to the database failed. If using Node, please install the `ws` package (or simply use the `pg` package instead).")), this.emit("close");
                return;
              }
            }
          }), this.ws.binaryType = "arraybuffer", this.ws.addEventListener("error", (o) => {
            this.emit("error", o), this.emit("close");
          }), this.ws.addEventListener("close", () => {
            this.emit("close");
          }), this.ws.addEventListener("message", (o) => {
            if (this.tlsState === 0) {
              let a = p.from(o.data);
              this.emit("data", a);
            }
          }), this.connecting = false, this.pending = false, this.emit("connect"), this.emit("ready"), this;
        }
        async startTls(t) {
          this.tlsState = 1;
          let n = Fr.fromPEM(Nr), i = new gs(this.ws), s = i.read.bind(i), o = this.rawWrite.bind(this), [a, u] = await ms(t, n, s, o, !this.disableSNI, void 0, this.pipelineTLS ? new Uint8Array([83]) : void 0);
          this.tlsRead = a, this.tlsWrite = u, this.tlsState = 2, this.encrypted = true, this.authorized = true, this.emit("secureConnection", this), this.tlsReadLoop();
        }
        async tlsReadLoop() {
          for (; ; ) {
            let t = await this.tlsRead();
            if (t === void 0)
              break;
            {
              let n = p.from(t);
              this.emit("data", n);
            }
          }
        }
        rawWrite(t) {
          if (!this.coalesceWrites) {
            this.ws.send(t);
            return;
          }
          if (this.writeBuffer === void 0)
            this.writeBuffer = t, setTimeout(() => {
              this.ws.send(this.writeBuffer), this.writeBuffer = void 0;
            }, 0);
          else {
            let n = new Uint8Array(this.writeBuffer.length + t.length);
            n.set(this.writeBuffer), n.set(t, this.writeBuffer.length), this.writeBuffer = n;
          }
        }
        write(t, n = "utf8", i = (s) => {
        }) {
          return t.length === 0 ? i() : (typeof t == "string" && (t = p.from(t, n)), this.tlsState === 0 ? this.rawWrite(t) : this.tlsState === 1 ? this.once("secureConnection", () => this.write(t, n, i)) : this.tlsWrite(t), true);
        }
        end(t = p.alloc(0), n = "utf8", i) {
          return this.write(t, n, () => {
            this.ws.close(), i && i();
          }), this;
        }
        destroy() {
          return this.destroyed = true, this.end();
        }
      }, ue = G;
      S(ue, "defaults", { webSocketConstructor: void 0, wsProxy: (t) => t + "/v2", useSecureWebSocket: true, coalesceWrites: true, disableSNI: false, pipelineConnect: "password", pipelineTLS: true, rootCerts: Nr }), S(ue, "webSocketConstructor"), S(ue, "wsProxy"), S(ue, "coalesceWrites"), S(ue, "useSecureWebSocket"), S(ue, "disableSNI"), S(ue, "pipelineConnect"), S(ue, "pipelineTLS"), S(ue, "rootCerts");
    });
    var Xr = C((A) => {
      "use strict";
      d();
      Object.defineProperty(A, "__esModule", { value: true });
      A.NoticeMessage = A.DataRowMessage = A.CommandCompleteMessage = A.ReadyForQueryMessage = A.NotificationResponseMessage = A.BackendKeyDataMessage = A.AuthenticationMD5Password = A.ParameterStatusMessage = A.ParameterDescriptionMessage = A.RowDescriptionMessage = A.Field = A.CopyResponse = A.CopyDataMessage = A.DatabaseError = A.copyDone = A.emptyQuery = A.replicationStart = A.portalSuspended = A.noData = A.closeComplete = A.bindComplete = A.parseComplete = void 0;
      A.parseComplete = { name: "parseComplete", length: 5 };
      A.bindComplete = { name: "bindComplete", length: 5 };
      A.closeComplete = { name: "closeComplete", length: 5 };
      A.noData = { name: "noData", length: 5 };
      A.portalSuspended = { name: "portalSuspended", length: 5 };
      A.replicationStart = { name: "replicationStart", length: 4 };
      A.emptyQuery = { name: "emptyQuery", length: 4 };
      A.copyDone = { name: "copyDone", length: 4 };
      var Or = class extends Error {
        constructor(e2, t, n) {
          super(e2), this.length = t, this.name = n;
        }
      };
      A.DatabaseError = Or;
      var qr = class {
        constructor(e2, t) {
          this.length = e2, this.chunk = t, this.name = "copyData";
        }
      };
      A.CopyDataMessage = qr;
      var Qr = class {
        constructor(e2, t, n, i) {
          this.length = e2, this.name = t, this.binary = n, this.columnTypes = new Array(i);
        }
      };
      A.CopyResponse = Qr;
      var Hr = class {
        constructor(e2, t, n, i, s, o, a) {
          this.name = e2, this.tableID = t, this.columnID = n, this.dataTypeID = i, this.dataTypeSize = s, this.dataTypeModifier = o, this.format = a;
        }
      };
      A.Field = Hr;
      var jr = class {
        constructor(e2, t) {
          this.length = e2, this.fieldCount = t, this.name = "rowDescription", this.fields = new Array(this.fieldCount);
        }
      };
      A.RowDescriptionMessage = jr;
      var Kr = class {
        constructor(e2, t) {
          this.length = e2, this.parameterCount = t, this.name = "parameterDescription", this.dataTypeIDs = new Array(this.parameterCount);
        }
      };
      A.ParameterDescriptionMessage = Kr;
      var $r = class {
        constructor(e2, t, n) {
          this.length = e2, this.parameterName = t, this.parameterValue = n, this.name = "parameterStatus";
        }
      };
      A.ParameterStatusMessage = $r;
      var Wr = class {
        constructor(e2, t) {
          this.length = e2, this.salt = t, this.name = "authenticationMD5Password";
        }
      };
      A.AuthenticationMD5Password = Wr;
      var Gr = class {
        constructor(e2, t, n) {
          this.length = e2, this.processID = t, this.secretKey = n, this.name = "backendKeyData";
        }
      };
      A.BackendKeyDataMessage = Gr;
      var Vr = class {
        constructor(e2, t, n, i) {
          this.length = e2, this.processId = t, this.channel = n, this.payload = i, this.name = "notification";
        }
      };
      A.NotificationResponseMessage = Vr;
      var zr = class {
        constructor(e2, t) {
          this.length = e2, this.status = t, this.name = "readyForQuery";
        }
      };
      A.ReadyForQueryMessage = zr;
      var Yr = class {
        constructor(e2, t) {
          this.length = e2, this.text = t, this.name = "commandComplete";
        }
      };
      A.CommandCompleteMessage = Yr;
      var Jr = class {
        constructor(e2, t) {
          this.length = e2, this.fields = t, this.name = "dataRow", this.fieldCount = t.length;
        }
      };
      A.DataRowMessage = Jr;
      var Zr = class {
        constructor(e2, t) {
          this.length = e2, this.message = t, this.name = "notice";
        }
      };
      A.NoticeMessage = Zr;
    });
    var bs = C((Pt) => {
      "use strict";
      d();
      Object.defineProperty(Pt, "__esModule", { value: true });
      Pt.Writer = void 0;
      var en = class {
        constructor(e2 = 256) {
          this.size = e2, this.offset = 5, this.headerPosition = 0, this.buffer = p.allocUnsafe(e2);
        }
        ensure(e2) {
          var t = this.buffer.length - this.offset;
          if (t < e2) {
            var n = this.buffer, i = n.length + (n.length >> 1) + e2;
            this.buffer = p.allocUnsafe(i), n.copy(this.buffer);
          }
        }
        addInt32(e2) {
          return this.ensure(4), this.buffer[this.offset++] = e2 >>> 24 & 255, this.buffer[this.offset++] = e2 >>> 16 & 255, this.buffer[this.offset++] = e2 >>> 8 & 255, this.buffer[this.offset++] = e2 >>> 0 & 255, this;
        }
        addInt16(e2) {
          return this.ensure(2), this.buffer[this.offset++] = e2 >>> 8 & 255, this.buffer[this.offset++] = e2 >>> 0 & 255, this;
        }
        addCString(e2) {
          if (!e2)
            this.ensure(1);
          else {
            var t = p.byteLength(e2);
            this.ensure(t + 1), this.buffer.write(e2, this.offset, "utf-8"), this.offset += t;
          }
          return this.buffer[this.offset++] = 0, this;
        }
        addString(e2 = "") {
          var t = p.byteLength(e2);
          return this.ensure(t), this.buffer.write(e2, this.offset), this.offset += t, this;
        }
        add(e2) {
          return this.ensure(e2.length), e2.copy(this.buffer, this.offset), this.offset += e2.length, this;
        }
        join(e2) {
          if (e2) {
            this.buffer[this.headerPosition] = e2;
            let t = this.offset - (this.headerPosition + 1);
            this.buffer.writeInt32BE(t, this.headerPosition + 1);
          }
          return this.buffer.slice(e2 ? 0 : 5, this.offset);
        }
        flush(e2) {
          var t = this.join(e2);
          return this.offset = 5, this.headerPosition = 0, this.buffer = p.allocUnsafe(this.size), t;
        }
      };
      Pt.Writer = en;
    });
    var _s = C((Mt) => {
      "use strict";
      d();
      Object.defineProperty(Mt, "__esModule", { value: true });
      Mt.serialize = void 0;
      var tn = bs(), O = new tn.Writer(), dh = (r) => {
        O.addInt16(3).addInt16(0);
        for (let n of Object.keys(r))
          O.addCString(n).addCString(r[n]);
        O.addCString("client_encoding").addCString("UTF8");
        var e2 = O.addCString("").flush(), t = e2.length + 4;
        return new tn.Writer().addInt32(t).add(e2).flush();
      }, ph = () => {
        let r = p.allocUnsafe(8);
        return r.writeInt32BE(8, 0), r.writeInt32BE(80877103, 4), r;
      }, yh = (r) => O.addCString(r).flush(112), wh = function(r, e2) {
        return O.addCString(r).addInt32(p.byteLength(e2)).addString(e2), O.flush(112);
      }, mh = function(r) {
        return O.addString(r).flush(112);
      }, gh = (r) => O.addCString(r).flush(81), As = [], Sh = (r) => {
        let e2 = r.name || "";
        e2.length > 63 && (console.error("Warning! Postgres only supports 63 characters for query names."), console.error("You supplied %s (%s)", e2, e2.length), console.error("This can cause conflicts and silent errors executing queries"));
        let t = r.types || As;
        for (var n = t.length, i = O.addCString(e2).addCString(r.text).addInt16(n), s = 0; s < n; s++)
          i.addInt32(t[s]);
        return O.flush(80);
      }, He = new tn.Writer(), xh = function(r, e2) {
        for (let t = 0; t < r.length; t++) {
          let n = e2 ? e2(r[t], t) : r[t];
          n == null ? (O.addInt16(0), He.addInt32(-1)) : n instanceof p ? (O.addInt16(1), He.addInt32(n.length), He.add(n)) : (O.addInt16(0), He.addInt32(p.byteLength(n)), He.addString(n));
        }
      }, vh = (r = {}) => {
        let e2 = r.portal || "", t = r.statement || "", n = r.binary || false, i = r.values || As, s = i.length;
        return O.addCString(e2).addCString(t), O.addInt16(s), xh(i, r.valueMapper), O.addInt16(s), O.add(He.flush()), O.addInt16(n ? 1 : 0), O.flush(66);
      }, Eh = p.from([69, 0, 0, 0, 9, 0, 0, 0, 0, 0]), bh = (r) => {
        if (!r || !r.portal && !r.rows)
          return Eh;
        let e2 = r.portal || "", t = r.rows || 0, n = p.byteLength(e2), i = 4 + n + 1 + 4, s = p.allocUnsafe(1 + i);
        return s[0] = 69, s.writeInt32BE(i, 1), s.write(e2, 5, "utf-8"), s[n + 5] = 0, s.writeUInt32BE(t, s.length - 4), s;
      }, Ah = (r, e2) => {
        let t = p.allocUnsafe(16);
        return t.writeInt32BE(16, 0), t.writeInt16BE(1234, 4), t.writeInt16BE(5678, 6), t.writeInt32BE(r, 8), t.writeInt32BE(e2, 12), t;
      }, rn = (r, e2) => {
        let n = 4 + p.byteLength(e2) + 1, i = p.allocUnsafe(1 + n);
        return i[0] = r, i.writeInt32BE(n, 1), i.write(e2, 5, "utf-8"), i[n] = 0, i;
      }, _h = O.addCString("P").flush(68), Ch = O.addCString("S").flush(68), Uh = (r) => r.name ? rn(68, `${r.type}${r.name || ""}`) : r.type === "P" ? _h : Ch, Ih = (r) => {
        let e2 = `${r.type}${r.name || ""}`;
        return rn(67, e2);
      }, Lh = (r) => O.add(r).flush(100), Bh = (r) => rn(102, r), Rt = (r) => p.from([r, 0, 0, 0, 4]), Th = Rt(72), Ph = Rt(83), Rh = Rt(88), Mh = Rt(99), kh = { startup: dh, password: yh, requestSsl: ph, sendSASLInitialResponseMessage: wh, sendSCRAMClientFinalMessage: mh, query: gh, parse: Sh, bind: vh, execute: bh, describe: Uh, close: Ih, flush: () => Th, sync: () => Ph, end: () => Rh, copyData: Lh, copyDone: () => Mh, copyFail: Bh, cancel: Ah };
      Mt.serialize = kh;
    });
    var Cs = C((kt) => {
      "use strict";
      d();
      Object.defineProperty(kt, "__esModule", { value: true });
      kt.BufferReader = void 0;
      var Fh = p.allocUnsafe(0), nn = class {
        constructor(e2 = 0) {
          this.offset = e2, this.buffer = Fh, this.encoding = "utf-8";
        }
        setBuffer(e2, t) {
          this.offset = e2, this.buffer = t;
        }
        int16() {
          let e2 = this.buffer.readInt16BE(this.offset);
          return this.offset += 2, e2;
        }
        byte() {
          let e2 = this.buffer[this.offset];
          return this.offset++, e2;
        }
        int32() {
          let e2 = this.buffer.readInt32BE(this.offset);
          return this.offset += 4, e2;
        }
        string(e2) {
          let t = this.buffer.toString(this.encoding, this.offset, this.offset + e2);
          return this.offset += e2, t;
        }
        cstring() {
          let e2 = this.offset, t = e2;
          for (; this.buffer[t++] !== 0; )
            ;
          return this.offset = t, this.buffer.toString(this.encoding, e2, t - 1);
        }
        bytes(e2) {
          let t = this.buffer.slice(this.offset, this.offset + e2);
          return this.offset += e2, t;
        }
      };
      kt.BufferReader = nn;
    });
    var Us = {};
    le(Us, { default: () => Nh });
    var Nh;
    var Is = ee(() => {
      d();
      Nh = {};
    });
    var Ts = C((je) => {
      "use strict";
      d();
      var Dh = je && je.__importDefault || function(r) {
        return r && r.__esModule ? r : { default: r };
      };
      Object.defineProperty(je, "__esModule", { value: true });
      je.Parser = void 0;
      var H = Xr(), Oh = Cs(), qh = Dh((Is(), j(Us))), sn = 1, Qh = 4, Ls = sn + Qh, Bs = p.allocUnsafe(0), on = class {
        constructor(e2) {
          if (this.buffer = Bs, this.bufferLength = 0, this.bufferOffset = 0, this.reader = new Oh.BufferReader(), e2?.mode === "binary")
            throw new Error("Binary mode not supported yet");
          this.mode = e2?.mode || "text";
        }
        parse(e2, t) {
          this.mergeBuffer(e2);
          let n = this.bufferOffset + this.bufferLength, i = this.bufferOffset;
          for (; i + Ls <= n; ) {
            let s = this.buffer[i], o = this.buffer.readUInt32BE(i + sn), a = sn + o;
            if (a + i <= n) {
              let u = this.handlePacket(i + Ls, s, o, this.buffer);
              t(u), i += a;
            } else
              break;
          }
          i === n ? (this.buffer = Bs, this.bufferLength = 0, this.bufferOffset = 0) : (this.bufferLength = n - i, this.bufferOffset = i);
        }
        mergeBuffer(e2) {
          if (this.bufferLength > 0) {
            let t = this.bufferLength + e2.byteLength;
            if (t + this.bufferOffset > this.buffer.byteLength) {
              let i;
              if (t <= this.buffer.byteLength && this.bufferOffset >= this.bufferLength)
                i = this.buffer;
              else {
                let s = this.buffer.byteLength * 2;
                for (; t >= s; )
                  s *= 2;
                i = p.allocUnsafe(s);
              }
              this.buffer.copy(i, 0, this.bufferOffset, this.bufferOffset + this.bufferLength), this.buffer = i, this.bufferOffset = 0;
            }
            e2.copy(this.buffer, this.bufferOffset + this.bufferLength), this.bufferLength = t;
          } else
            this.buffer = e2, this.bufferOffset = 0, this.bufferLength = e2.byteLength;
        }
        handlePacket(e2, t, n, i) {
          switch (t) {
            case 50:
              return H.bindComplete;
            case 49:
              return H.parseComplete;
            case 51:
              return H.closeComplete;
            case 110:
              return H.noData;
            case 115:
              return H.portalSuspended;
            case 99:
              return H.copyDone;
            case 87:
              return H.replicationStart;
            case 73:
              return H.emptyQuery;
            case 68:
              return this.parseDataRowMessage(e2, n, i);
            case 67:
              return this.parseCommandCompleteMessage(e2, n, i);
            case 90:
              return this.parseReadyForQueryMessage(e2, n, i);
            case 65:
              return this.parseNotificationMessage(e2, n, i);
            case 82:
              return this.parseAuthenticationResponse(e2, n, i);
            case 83:
              return this.parseParameterStatusMessage(e2, n, i);
            case 75:
              return this.parseBackendKeyData(e2, n, i);
            case 69:
              return this.parseErrorMessage(e2, n, i, "error");
            case 78:
              return this.parseErrorMessage(e2, n, i, "notice");
            case 84:
              return this.parseRowDescriptionMessage(e2, n, i);
            case 116:
              return this.parseParameterDescriptionMessage(e2, n, i);
            case 71:
              return this.parseCopyInMessage(e2, n, i);
            case 72:
              return this.parseCopyOutMessage(e2, n, i);
            case 100:
              return this.parseCopyData(e2, n, i);
            default:
              qh.default.fail(`unknown message code: ${t.toString(16)}`);
          }
        }
        parseReadyForQueryMessage(e2, t, n) {
          this.reader.setBuffer(e2, n);
          let i = this.reader.string(1);
          return new H.ReadyForQueryMessage(t, i);
        }
        parseCommandCompleteMessage(e2, t, n) {
          this.reader.setBuffer(e2, n);
          let i = this.reader.cstring();
          return new H.CommandCompleteMessage(t, i);
        }
        parseCopyData(e2, t, n) {
          let i = n.slice(e2, e2 + (t - 4));
          return new H.CopyDataMessage(t, i);
        }
        parseCopyInMessage(e2, t, n) {
          return this.parseCopyMessage(e2, t, n, "copyInResponse");
        }
        parseCopyOutMessage(e2, t, n) {
          return this.parseCopyMessage(e2, t, n, "copyOutResponse");
        }
        parseCopyMessage(e2, t, n, i) {
          this.reader.setBuffer(e2, n);
          let s = this.reader.byte() !== 0, o = this.reader.int16(), a = new H.CopyResponse(t, i, s, o);
          for (let u = 0; u < o; u++)
            a.columnTypes[u] = this.reader.int16();
          return a;
        }
        parseNotificationMessage(e2, t, n) {
          this.reader.setBuffer(e2, n);
          let i = this.reader.int32(), s = this.reader.cstring(), o = this.reader.cstring();
          return new H.NotificationResponseMessage(t, i, s, o);
        }
        parseRowDescriptionMessage(e2, t, n) {
          this.reader.setBuffer(e2, n);
          let i = this.reader.int16(), s = new H.RowDescriptionMessage(t, i);
          for (let o = 0; o < i; o++)
            s.fields[o] = this.parseField();
          return s;
        }
        parseField() {
          let e2 = this.reader.cstring(), t = this.reader.int32(), n = this.reader.int16(), i = this.reader.int32(), s = this.reader.int16(), o = this.reader.int32(), a = this.reader.int16() === 0 ? "text" : "binary";
          return new H.Field(e2, t, n, i, s, o, a);
        }
        parseParameterDescriptionMessage(e2, t, n) {
          this.reader.setBuffer(e2, n);
          let i = this.reader.int16(), s = new H.ParameterDescriptionMessage(t, i);
          for (let o = 0; o < i; o++)
            s.dataTypeIDs[o] = this.reader.int32();
          return s;
        }
        parseDataRowMessage(e2, t, n) {
          this.reader.setBuffer(e2, n);
          let i = this.reader.int16(), s = new Array(i);
          for (let o = 0; o < i; o++) {
            let a = this.reader.int32();
            s[o] = a === -1 ? null : this.reader.string(a);
          }
          return new H.DataRowMessage(t, s);
        }
        parseParameterStatusMessage(e2, t, n) {
          this.reader.setBuffer(e2, n);
          let i = this.reader.cstring(), s = this.reader.cstring();
          return new H.ParameterStatusMessage(t, i, s);
        }
        parseBackendKeyData(e2, t, n) {
          this.reader.setBuffer(e2, n);
          let i = this.reader.int32(), s = this.reader.int32();
          return new H.BackendKeyDataMessage(t, i, s);
        }
        parseAuthenticationResponse(e2, t, n) {
          this.reader.setBuffer(e2, n);
          let i = this.reader.int32(), s = { name: "authenticationOk", length: t };
          switch (i) {
            case 0:
              break;
            case 3:
              s.length === 8 && (s.name = "authenticationCleartextPassword");
              break;
            case 5:
              if (s.length === 12) {
                s.name = "authenticationMD5Password";
                let a = this.reader.bytes(4);
                return new H.AuthenticationMD5Password(t, a);
              }
              break;
            case 10:
              s.name = "authenticationSASL", s.mechanisms = [];
              let o;
              do
                o = this.reader.cstring(), o && s.mechanisms.push(o);
              while (o);
              break;
            case 11:
              s.name = "authenticationSASLContinue", s.data = this.reader.string(t - 8);
              break;
            case 12:
              s.name = "authenticationSASLFinal", s.data = this.reader.string(t - 8);
              break;
            default:
              throw new Error("Unknown authenticationOk message type " + i);
          }
          return s;
        }
        parseErrorMessage(e2, t, n, i) {
          this.reader.setBuffer(e2, n);
          let s = {}, o = this.reader.string(1);
          for (; o !== "\0"; )
            s[o] = this.reader.cstring(), o = this.reader.string(1);
          let a = s.M, u = i === "notice" ? new H.NoticeMessage(t, a) : new H.DatabaseError(a, t, i);
          return u.severity = s.S, u.code = s.C, u.detail = s.D, u.hint = s.H, u.position = s.P, u.internalPosition = s.p, u.internalQuery = s.q, u.where = s.W, u.schema = s.s, u.table = s.t, u.column = s.c, u.dataType = s.d, u.constraint = s.n, u.file = s.F, u.line = s.L, u.routine = s.R, u;
        }
      };
      je.Parser = on;
    });
    var an = C((Ce) => {
      "use strict";
      d();
      Object.defineProperty(Ce, "__esModule", { value: true });
      Ce.DatabaseError = Ce.serialize = Ce.parse = void 0;
      var Hh = Xr();
      Object.defineProperty(Ce, "DatabaseError", { enumerable: true, get: function() {
        return Hh.DatabaseError;
      } });
      var jh = _s();
      Object.defineProperty(Ce, "serialize", { enumerable: true, get: function() {
        return jh.serialize;
      } });
      var Kh = Ts();
      function $h(r, e2) {
        let t = new Kh.Parser();
        return r.on("data", (n) => t.parse(n, e2)), new Promise((n) => r.on("end", () => n()));
      }
      Ce.parse = $h;
    });
    var Ps = {};
    le(Ps, { connect: () => Wh });
    function Wh(r) {
      let { socket: e2, servername: t } = r;
      return e2.startTls(t), e2;
    }
    var Rs = ee(() => {
      d();
    });
    var hn = C((lf, ks) => {
      "use strict";
      d();
      var Ms = (Dr(), j(Es)), Gh = be().EventEmitter, { parse: Vh, serialize: V } = an(), zh = V.flush(), Yh = V.sync(), Jh = V.end(), un = class extends Gh {
        constructor(e2) {
          super(), e2 = e2 || {}, this.stream = e2.stream || new Ms.Socket(), typeof this.stream == "function" && (this.stream = this.stream(e2)), this._keepAlive = e2.keepAlive, this._keepAliveInitialDelayMillis = e2.keepAliveInitialDelayMillis, this.lastBuffer = false, this.parsedStatements = {}, this.ssl = e2.ssl || false, this._ending = false, this._emitMessage = false;
          var t = this;
          this.on("newListener", function(n) {
            n === "message" && (t._emitMessage = true);
          });
        }
        connect(e2, t) {
          var n = this;
          this._connecting = true, this.stream.setNoDelay(true), this.stream.connect(e2, t), this.stream.once("connect", function() {
            n._keepAlive && n.stream.setKeepAlive(true, n._keepAliveInitialDelayMillis), n.emit("connect");
          });
          let i = function(s) {
            n._ending && (s.code === "ECONNRESET" || s.code === "EPIPE") || n.emit("error", s);
          };
          if (this.stream.on("error", i), this.stream.on("close", function() {
            n.emit("end");
          }), !this.ssl)
            return this.attachListeners(this.stream);
          this.stream.once("data", function(s) {
            var o = s.toString("utf8");
            switch (o) {
              case "S":
                break;
              case "N":
                return n.stream.end(), n.emit("error", new Error("The server does not support SSL connections"));
              default:
                return n.stream.end(), n.emit("error", new Error("There was an error establishing an SSL connection"));
            }
            var a = (Rs(), j(Ps));
            let u = { socket: n.stream };
            n.ssl !== true && (Object.assign(u, n.ssl), "key" in n.ssl && (u.key = n.ssl.key)), Ms.isIP(t) === 0 && (u.servername = t);
            try {
              n.stream = a.connect(u);
            } catch (h) {
              return n.emit("error", h);
            }
            n.attachListeners(n.stream), n.stream.on("error", i), n.emit("sslconnect");
          });
        }
        attachListeners(e2) {
          e2.on("end", () => {
            this.emit("end");
          }), Vh(e2, (t) => {
            var n = t.name === "error" ? "errorMessage" : t.name;
            this._emitMessage && this.emit("message", t), this.emit(n, t);
          });
        }
        requestSsl() {
          this.stream.write(V.requestSsl());
        }
        startup(e2) {
          this.stream.write(V.startup(e2));
        }
        cancel(e2, t) {
          this._send(V.cancel(e2, t));
        }
        password(e2) {
          this._send(V.password(e2));
        }
        sendSASLInitialResponseMessage(e2, t) {
          this._send(V.sendSASLInitialResponseMessage(e2, t));
        }
        sendSCRAMClientFinalMessage(e2) {
          this._send(V.sendSCRAMClientFinalMessage(e2));
        }
        _send(e2) {
          return this.stream.writable ? this.stream.write(e2) : false;
        }
        query(e2) {
          this._send(V.query(e2));
        }
        parse(e2) {
          this._send(V.parse(e2));
        }
        bind(e2) {
          this._send(V.bind(e2));
        }
        execute(e2) {
          this._send(V.execute(e2));
        }
        flush() {
          this.stream.writable && this.stream.write(zh);
        }
        sync() {
          this._ending = true, this._send(Yh);
        }
        ref() {
          this.stream.ref();
        }
        unref() {
          this.stream.unref();
        }
        end() {
          if (this._ending = true, !this._connecting || !this.stream.writable) {
            this.stream.end();
            return;
          }
          return this.stream.write(Jh, () => {
            this.stream.end();
          });
        }
        close(e2) {
          this._send(V.close(e2));
        }
        describe(e2) {
          this._send(V.describe(e2));
        }
        sendCopyFromChunk(e2) {
          this._send(V.copyData(e2));
        }
        endCopyFrom() {
          this._send(V.copyDone());
        }
        sendCopyFail(e2) {
          this._send(V.copyFail(e2));
        }
      };
      ks.exports = un;
    });
    var Ds = C((df, Ns) => {
      "use strict";
      d();
      var Zh = be().EventEmitter, Xh = St(), cn = Ri(), ec = Ki(), tc = Er(), rc = Cr(), Fs = as(), nc = rt(), ic = hn(), Ft = class extends Zh {
        constructor(e2) {
          super(), this.connectionParameters = new rc(e2), this.user = this.connectionParameters.user, this.database = this.connectionParameters.database, this.port = this.connectionParameters.port, this.host = this.connectionParameters.host, Object.defineProperty(this, "password", { configurable: true, enumerable: false, writable: true, value: this.connectionParameters.password }), this.replication = this.connectionParameters.replication;
          var t = e2 || {};
          this._Promise = t.Promise || v.Promise, this._types = new tc(t.types), this._ending = false, this._connecting = false, this._connected = false, this._connectionError = false, this._queryable = true, this.connection = t.connection || new ic({ stream: t.stream, ssl: this.connectionParameters.ssl, keepAlive: t.keepAlive || false, keepAliveInitialDelayMillis: t.keepAliveInitialDelayMillis || 0, encoding: this.connectionParameters.client_encoding || "utf8" }), this.queryQueue = [], this.binary = t.binary || nc.binary, this.processID = null, this.secretKey = null, this.ssl = this.connectionParameters.ssl || false, this.ssl && this.ssl.key && Object.defineProperty(this.ssl, "key", { enumerable: false }), this._connectionTimeoutMillis = t.connectionTimeoutMillis || 0;
        }
        _errorAllQueries(e2) {
          let t = (n) => {
            y.nextTick(() => {
              n.handleError(e2, this.connection);
            });
          };
          this.activeQuery && (t(this.activeQuery), this.activeQuery = null), this.queryQueue.forEach(t), this.queryQueue.length = 0;
        }
        _connect(e2) {
          var t = this, n = this.connection;
          if (this._connectionCallback = e2, this._connecting || this._connected) {
            let i = new Error("Client has already been connected. You cannot reuse a client.");
            y.nextTick(() => {
              e2(i);
            });
            return;
          }
          this._connecting = true, this.connectionTimeoutHandle, this._connectionTimeoutMillis > 0 && (this.connectionTimeoutHandle = setTimeout(() => {
            n._ending = true, n.stream.destroy(new Error("timeout expired"));
          }, this._connectionTimeoutMillis)), this.host && this.host.indexOf("/") === 0 ? n.connect(this.host + "/.s.PGSQL." + this.port) : n.connect(this.port, this.host), n.on("connect", function() {
            t.ssl ? n.requestSsl() : n.startup(t.getStartupConf());
          }), n.on("sslconnect", function() {
            n.startup(t.getStartupConf());
          }), this._attachListeners(n), n.once("end", () => {
            let i = this._ending ? new Error("Connection terminated") : new Error("Connection terminated unexpectedly");
            clearTimeout(this.connectionTimeoutHandle), this._errorAllQueries(i), this._ending || (this._connecting && !this._connectionError ? this._connectionCallback ? this._connectionCallback(i) : this._handleErrorEvent(i) : this._connectionError || this._handleErrorEvent(i)), y.nextTick(() => {
              this.emit("end");
            });
          });
        }
        connect(e2) {
          if (e2) {
            this._connect(e2);
            return;
          }
          return new this._Promise((t, n) => {
            this._connect((i) => {
              i ? n(i) : t();
            });
          });
        }
        _attachListeners(e2) {
          e2.on("authenticationCleartextPassword", this._handleAuthCleartextPassword.bind(this)), e2.on("authenticationMD5Password", this._handleAuthMD5Password.bind(this)), e2.on("authenticationSASL", this._handleAuthSASL.bind(this)), e2.on("authenticationSASLContinue", this._handleAuthSASLContinue.bind(this)), e2.on("authenticationSASLFinal", this._handleAuthSASLFinal.bind(this)), e2.on("backendKeyData", this._handleBackendKeyData.bind(this)), e2.on("error", this._handleErrorEvent.bind(this)), e2.on("errorMessage", this._handleErrorMessage.bind(this)), e2.on("readyForQuery", this._handleReadyForQuery.bind(this)), e2.on("notice", this._handleNotice.bind(this)), e2.on("rowDescription", this._handleRowDescription.bind(this)), e2.on("dataRow", this._handleDataRow.bind(this)), e2.on("portalSuspended", this._handlePortalSuspended.bind(this)), e2.on("emptyQuery", this._handleEmptyQuery.bind(this)), e2.on("commandComplete", this._handleCommandComplete.bind(this)), e2.on("parseComplete", this._handleParseComplete.bind(this)), e2.on("copyInResponse", this._handleCopyInResponse.bind(this)), e2.on("copyData", this._handleCopyData.bind(this)), e2.on("notification", this._handleNotification.bind(this));
        }
        _checkPgPass(e2) {
          let t = this.connection;
          typeof this.password == "function" ? this._Promise.resolve().then(() => this.password()).then((n) => {
            if (n !== void 0) {
              if (typeof n != "string") {
                t.emit("error", new TypeError("Password must be a string"));
                return;
              }
              this.connectionParameters.password = this.password = n;
            } else
              this.connectionParameters.password = this.password = null;
            e2();
          }).catch((n) => {
            t.emit("error", n);
          }) : this.password !== null ? e2() : ec(this.connectionParameters, (n) => {
            n !== void 0 && (this.connectionParameters.password = this.password = n), e2();
          });
        }
        _handleAuthCleartextPassword(e2) {
          this._checkPgPass(() => {
            this.connection.password(this.password);
          });
        }
        _handleAuthMD5Password(e2) {
          this._checkPgPass(() => {
            let t = Xh.postgresMd5PasswordHash(this.user, this.password, e2.salt);
            this.connection.password(t);
          });
        }
        _handleAuthSASL(e2) {
          this._checkPgPass(() => {
            try {
              this.saslSession = cn.startSession(e2.mechanisms), this.connection.sendSASLInitialResponseMessage(this.saslSession.mechanism, this.saslSession.response);
            } catch (t) {
              this.connection.emit("error", t);
            }
          });
        }
        _handleAuthSASLContinue(e2) {
          try {
            cn.continueSession(this.saslSession, this.password, e2.data), this.connection.sendSCRAMClientFinalMessage(this.saslSession.response);
          } catch (t) {
            this.connection.emit("error", t);
          }
        }
        _handleAuthSASLFinal(e2) {
          try {
            cn.finalizeSession(this.saslSession, e2.data), this.saslSession = null;
          } catch (t) {
            this.connection.emit("error", t);
          }
        }
        _handleBackendKeyData(e2) {
          this.processID = e2.processID, this.secretKey = e2.secretKey;
        }
        _handleReadyForQuery(e2) {
          this._connecting && (this._connecting = false, this._connected = true, clearTimeout(this.connectionTimeoutHandle), this._connectionCallback && (this._connectionCallback(null, this), this._connectionCallback = null), this.emit("connect"));
          let { activeQuery: t } = this;
          this.activeQuery = null, this.readyForQuery = true, t && t.handleReadyForQuery(this.connection), this._pulseQueryQueue();
        }
        _handleErrorWhileConnecting(e2) {
          if (!this._connectionError) {
            if (this._connectionError = true, clearTimeout(this.connectionTimeoutHandle), this._connectionCallback)
              return this._connectionCallback(e2);
            this.emit("error", e2);
          }
        }
        _handleErrorEvent(e2) {
          if (this._connecting)
            return this._handleErrorWhileConnecting(e2);
          this._queryable = false, this._errorAllQueries(e2), this.emit("error", e2);
        }
        _handleErrorMessage(e2) {
          if (this._connecting)
            return this._handleErrorWhileConnecting(e2);
          let t = this.activeQuery;
          if (!t) {
            this._handleErrorEvent(e2);
            return;
          }
          this.activeQuery = null, t.handleError(e2, this.connection);
        }
        _handleRowDescription(e2) {
          this.activeQuery.handleRowDescription(e2);
        }
        _handleDataRow(e2) {
          this.activeQuery.handleDataRow(e2);
        }
        _handlePortalSuspended(e2) {
          this.activeQuery.handlePortalSuspended(this.connection);
        }
        _handleEmptyQuery(e2) {
          this.activeQuery.handleEmptyQuery(this.connection);
        }
        _handleCommandComplete(e2) {
          this.activeQuery.handleCommandComplete(e2, this.connection);
        }
        _handleParseComplete(e2) {
          this.activeQuery.name && (this.connection.parsedStatements[this.activeQuery.name] = this.activeQuery.text);
        }
        _handleCopyInResponse(e2) {
          this.activeQuery.handleCopyInResponse(this.connection);
        }
        _handleCopyData(e2) {
          this.activeQuery.handleCopyData(e2, this.connection);
        }
        _handleNotification(e2) {
          this.emit("notification", e2);
        }
        _handleNotice(e2) {
          this.emit("notice", e2);
        }
        getStartupConf() {
          var e2 = this.connectionParameters, t = { user: e2.user, database: e2.database }, n = e2.application_name || e2.fallback_application_name;
          return n && (t.application_name = n), e2.replication && (t.replication = "" + e2.replication), e2.statement_timeout && (t.statement_timeout = String(parseInt(e2.statement_timeout, 10))), e2.lock_timeout && (t.lock_timeout = String(parseInt(e2.lock_timeout, 10))), e2.idle_in_transaction_session_timeout && (t.idle_in_transaction_session_timeout = String(parseInt(e2.idle_in_transaction_session_timeout, 10))), e2.options && (t.options = e2.options), t;
        }
        cancel(e2, t) {
          if (e2.activeQuery === t) {
            var n = this.connection;
            this.host && this.host.indexOf("/") === 0 ? n.connect(this.host + "/.s.PGSQL." + this.port) : n.connect(this.port, this.host), n.on("connect", function() {
              n.cancel(e2.processID, e2.secretKey);
            });
          } else
            e2.queryQueue.indexOf(t) !== -1 && e2.queryQueue.splice(e2.queryQueue.indexOf(t), 1);
        }
        setTypeParser(e2, t, n) {
          return this._types.setTypeParser(e2, t, n);
        }
        getTypeParser(e2, t) {
          return this._types.getTypeParser(e2, t);
        }
        escapeIdentifier(e2) {
          return '"' + e2.replace(/"/g, '""') + '"';
        }
        escapeLiteral(e2) {
          for (var t = false, n = "'", i = 0; i < e2.length; i++) {
            var s = e2[i];
            s === "'" ? n += s + s : s === "\\" ? (n += s + s, t = true) : n += s;
          }
          return n += "'", t === true && (n = " E" + n), n;
        }
        _pulseQueryQueue() {
          if (this.readyForQuery === true)
            if (this.activeQuery = this.queryQueue.shift(), this.activeQuery) {
              this.readyForQuery = false, this.hasExecuted = true;
              let e2 = this.activeQuery.submit(this.connection);
              e2 && y.nextTick(() => {
                this.activeQuery.handleError(e2, this.connection), this.readyForQuery = true, this._pulseQueryQueue();
              });
            } else
              this.hasExecuted && (this.activeQuery = null, this.emit("drain"));
        }
        query(e2, t, n) {
          var i, s, o, a, u;
          if (e2 == null)
            throw new TypeError("Client was passed a null or undefined query");
          return typeof e2.submit == "function" ? (o = e2.query_timeout || this.connectionParameters.query_timeout, s = i = e2, typeof t == "function" && (i.callback = i.callback || t)) : (o = this.connectionParameters.query_timeout, i = new Fs(e2, t, n), i.callback || (s = new this._Promise((h, c) => {
            i.callback = (f, w) => f ? c(f) : h(w);
          }))), o && (u = i.callback, a = setTimeout(() => {
            var h = new Error("Query read timeout");
            y.nextTick(() => {
              i.handleError(h, this.connection);
            }), u(h), i.callback = () => {
            };
            var c = this.queryQueue.indexOf(i);
            c > -1 && this.queryQueue.splice(c, 1), this._pulseQueryQueue();
          }, o), i.callback = (h, c) => {
            clearTimeout(a), u(h, c);
          }), this.binary && !i.binary && (i.binary = true), i._result && !i._result._types && (i._result._types = this._types), this._queryable ? this._ending ? (y.nextTick(() => {
            i.handleError(new Error("Client was closed and is not queryable"), this.connection);
          }), s) : (this.queryQueue.push(i), this._pulseQueryQueue(), s) : (y.nextTick(() => {
            i.handleError(new Error("Client has encountered a connection error and is not queryable"), this.connection);
          }), s);
        }
        ref() {
          this.connection.ref();
        }
        unref() {
          this.connection.unref();
        }
        end(e2) {
          if (this._ending = true, !this.connection._connecting)
            if (e2)
              e2();
            else
              return this._Promise.resolve();
          if (this.activeQuery || !this._queryable ? this.connection.stream.destroy() : this.connection.end(), e2)
            this.connection.once("end", e2);
          else
            return new this._Promise((t) => {
              this.connection.once("end", t);
            });
        }
      };
      Ft.Query = Fs;
      Ns.exports = Ft;
    });
    var Hs = C((yf, Qs) => {
      "use strict";
      d();
      var sc = be().EventEmitter, Os = function() {
      }, qs = (r, e2) => {
        let t = r.findIndex(e2);
        return t === -1 ? void 0 : r.splice(t, 1)[0];
      }, ln = class {
        constructor(e2, t, n) {
          this.client = e2, this.idleListener = t, this.timeoutId = n;
        }
      }, Ke = class {
        constructor(e2) {
          this.callback = e2;
        }
      };
      function oc() {
        throw new Error("Release called on client which has already been released to the pool.");
      }
      function Nt(r, e2) {
        if (e2)
          return { callback: e2, result: void 0 };
        let t, n, i = function(o, a) {
          o ? t(o) : n(a);
        }, s = new r(function(o, a) {
          n = o, t = a;
        });
        return { callback: i, result: s };
      }
      function ac(r, e2) {
        return function t(n) {
          n.client = e2, e2.removeListener("error", t), e2.on("error", () => {
            r.log("additional client error after disconnection due to error", n);
          }), r._remove(e2), r.emit("error", n, e2);
        };
      }
      var fn = class extends sc {
        constructor(e2, t) {
          super(), this.options = Object.assign({}, e2), e2 != null && "password" in e2 && Object.defineProperty(this.options, "password", { configurable: true, enumerable: false, writable: true, value: e2.password }), e2 != null && e2.ssl && e2.ssl.key && Object.defineProperty(this.options.ssl, "key", { enumerable: false }), this.options.max = this.options.max || this.options.poolSize || 10, this.options.maxUses = this.options.maxUses || 1 / 0, this.options.allowExitOnIdle = this.options.allowExitOnIdle || false, this.options.maxLifetimeSeconds = this.options.maxLifetimeSeconds || 0, this.log = this.options.log || function() {
          }, this.Client = this.options.Client || t || Dt().Client, this.Promise = this.options.Promise || v.Promise, typeof this.options.idleTimeoutMillis > "u" && (this.options.idleTimeoutMillis = 1e4), this._clients = [], this._idle = [], this._expired = /* @__PURE__ */ new WeakSet(), this._pendingQueue = [], this._endCallback = void 0, this.ending = false, this.ended = false;
        }
        _isFull() {
          return this._clients.length >= this.options.max;
        }
        _pulseQueue() {
          if (this.log("pulse queue"), this.ended) {
            this.log("pulse queue ended");
            return;
          }
          if (this.ending) {
            this.log("pulse queue on ending"), this._idle.length && this._idle.slice().map((t) => {
              this._remove(t.client);
            }), this._clients.length || (this.ended = true, this._endCallback());
            return;
          }
          if (!this._pendingQueue.length) {
            this.log("no queued requests");
            return;
          }
          if (!this._idle.length && this._isFull())
            return;
          let e2 = this._pendingQueue.shift();
          if (this._idle.length) {
            let t = this._idle.pop();
            clearTimeout(t.timeoutId);
            let n = t.client;
            n.ref && n.ref();
            let i = t.idleListener;
            return this._acquireClient(n, e2, i, false);
          }
          if (!this._isFull())
            return this.newClient(e2);
          throw new Error("unexpected condition");
        }
        _remove(e2) {
          let t = qs(this._idle, (n) => n.client === e2);
          t !== void 0 && clearTimeout(t.timeoutId), this._clients = this._clients.filter((n) => n !== e2), e2.end(), this.emit("remove", e2);
        }
        connect(e2) {
          if (this.ending) {
            let i = new Error("Cannot use a pool after calling end on the pool");
            return e2 ? e2(i) : this.Promise.reject(i);
          }
          let t = Nt(this.Promise, e2), n = t.result;
          if (this._isFull() || this._idle.length) {
            if (this._idle.length && y.nextTick(() => this._pulseQueue()), !this.options.connectionTimeoutMillis)
              return this._pendingQueue.push(new Ke(t.callback)), n;
            let i = (a, u, h) => {
              clearTimeout(o), t.callback(a, u, h);
            }, s = new Ke(i), o = setTimeout(() => {
              qs(this._pendingQueue, (a) => a.callback === i), s.timedOut = true, t.callback(new Error("timeout exceeded when trying to connect"));
            }, this.options.connectionTimeoutMillis);
            return this._pendingQueue.push(s), n;
          }
          return this.newClient(new Ke(t.callback)), n;
        }
        newClient(e2) {
          let t = new this.Client(this.options);
          this._clients.push(t);
          let n = ac(this, t);
          this.log("checking client timeout");
          let i, s = false;
          this.options.connectionTimeoutMillis && (i = setTimeout(() => {
            this.log("ending client due to timeout"), s = true, t.connection ? t.connection.stream.destroy() : t.end();
          }, this.options.connectionTimeoutMillis)), this.log("connecting new client"), t.connect((o) => {
            if (i && clearTimeout(i), t.on("error", n), o)
              this.log("client failed to connect", o), this._clients = this._clients.filter((a) => a !== t), s && (o.message = "Connection terminated due to connection timeout"), this._pulseQueue(), e2.timedOut || e2.callback(o, void 0, Os);
            else {
              if (this.log("new client connected"), this.options.maxLifetimeSeconds !== 0) {
                let a = setTimeout(() => {
                  this.log("ending client due to expired lifetime"), this._expired.add(t), this._idle.findIndex((h) => h.client === t) !== -1 && this._acquireClient(t, new Ke((h, c, f) => f()), n, false);
                }, this.options.maxLifetimeSeconds * 1e3);
                a.unref(), t.once("end", () => clearTimeout(a));
              }
              return this._acquireClient(t, e2, n, true);
            }
          });
        }
        _acquireClient(e2, t, n, i) {
          i && this.emit("connect", e2), this.emit("acquire", e2), e2.release = this._releaseOnce(e2, n), e2.removeListener("error", n), t.timedOut ? i && this.options.verify ? this.options.verify(e2, e2.release) : e2.release() : i && this.options.verify ? this.options.verify(e2, (s) => {
            if (s)
              return e2.release(s), t.callback(s, void 0, Os);
            t.callback(void 0, e2, e2.release);
          }) : t.callback(void 0, e2, e2.release);
        }
        _releaseOnce(e2, t) {
          let n = false;
          return (i) => {
            n && oc(), n = true, this._release(e2, t, i);
          };
        }
        _release(e2, t, n) {
          if (e2.on("error", t), e2._poolUseCount = (e2._poolUseCount || 0) + 1, n || this.ending || !e2._queryable || e2._ending || e2._poolUseCount >= this.options.maxUses) {
            e2._poolUseCount >= this.options.maxUses && this.log("remove expended client"), this._remove(e2), this._pulseQueue();
            return;
          }
          if (this._expired.has(e2)) {
            this.log("remove expired client"), this._expired.delete(e2), this._remove(e2), this._pulseQueue();
            return;
          }
          let s;
          this.options.idleTimeoutMillis && (s = setTimeout(() => {
            this.log("remove idle client"), this._remove(e2);
          }, this.options.idleTimeoutMillis), this.options.allowExitOnIdle && s.unref()), this.options.allowExitOnIdle && e2.unref(), this._idle.push(new ln(e2, t, s)), this._pulseQueue();
        }
        query(e2, t, n) {
          if (typeof e2 == "function") {
            let s = Nt(this.Promise, e2);
            return E(function() {
              return s.callback(new Error("Passing a function as the first parameter to pool.query is not supported"));
            }), s.result;
          }
          typeof t == "function" && (n = t, t = void 0);
          let i = Nt(this.Promise, n);
          return n = i.callback, this.connect((s, o) => {
            if (s)
              return n(s);
            let a = false, u = (h) => {
              a || (a = true, o.release(h), n(h));
            };
            o.once("error", u), this.log("dispatching query");
            try {
              o.query(e2, t, (h, c) => {
                if (this.log("query dispatched"), o.removeListener("error", u), !a)
                  return a = true, o.release(h), h ? n(h) : n(void 0, c);
              });
            } catch (h) {
              return o.release(h), n(h);
            }
          }), i.result;
        }
        end(e2) {
          if (this.log("ending"), this.ending) {
            let n = new Error("Called end on pool more than once");
            return e2 ? e2(n) : this.Promise.reject(n);
          }
          this.ending = true;
          let t = Nt(this.Promise, e2);
          return this._endCallback = t.callback, this._pulseQueue(), t.result;
        }
        get waitingCount() {
          return this._pendingQueue.length;
        }
        get idleCount() {
          return this._idle.length;
        }
        get expiredCount() {
          return this._clients.reduce((e2, t) => e2 + (this._expired.has(t) ? 1 : 0), 0);
        }
        get totalCount() {
          return this._clients.length;
        }
      };
      Qs.exports = fn;
    });
    var js = {};
    le(js, { default: () => uc });
    var uc;
    var Ks = ee(() => {
      d();
      uc = {};
    });
    var Gs = C((gf, Ws) => {
      "use strict";
      d();
      var $s = be().EventEmitter, hc = (At(), j(bt)), dn = St(), $e = Ws.exports = function(r, e2, t) {
        $s.call(this), r = dn.normalizeQueryConfig(r, e2, t), this.text = r.text, this.values = r.values, this.name = r.name, this.callback = r.callback, this.state = "new", this._arrayMode = r.rowMode === "array", this._emitRowEvents = false, this.on("newListener", function(n) {
          n === "row" && (this._emitRowEvents = true);
        }.bind(this));
      };
      hc.inherits($e, $s);
      var cc = { sqlState: "code", statementPosition: "position", messagePrimary: "message", context: "where", schemaName: "schema", tableName: "table", columnName: "column", dataTypeName: "dataType", constraintName: "constraint", sourceFile: "file", sourceLine: "line", sourceFunction: "routine" };
      $e.prototype.handleError = function(r) {
        var e2 = this.native.pq.resultErrorFields();
        if (e2)
          for (var t in e2) {
            var n = cc[t] || t;
            r[n] = e2[t];
          }
        this.callback ? this.callback(r) : this.emit("error", r), this.state = "error";
      };
      $e.prototype.then = function(r, e2) {
        return this._getPromise().then(r, e2);
      };
      $e.prototype.catch = function(r) {
        return this._getPromise().catch(r);
      };
      $e.prototype._getPromise = function() {
        return this._promise ? this._promise : (this._promise = new Promise(function(r, e2) {
          this._once("end", r), this._once("error", e2);
        }.bind(this)), this._promise);
      };
      $e.prototype.submit = function(r) {
        this.state = "running";
        var e2 = this;
        this.native = r.native, r.native.arrayMode = this._arrayMode;
        var t = function(s, o, a) {
          if (r.native.arrayMode = false, E(function() {
            e2.emit("_done");
          }), s)
            return e2.handleError(s);
          e2._emitRowEvents && (a.length > 1 ? o.forEach((u, h) => {
            u.forEach((c) => {
              e2.emit("row", c, a[h]);
            });
          }) : o.forEach(function(u) {
            e2.emit("row", u, a);
          })), e2.state = "end", e2.emit("end", a), e2.callback && e2.callback(null, a);
        };
        if (y.domain && (t = y.domain.bind(t)), this.name) {
          this.name.length > 63 && (console.error("Warning! Postgres only supports 63 characters for query names."), console.error("You supplied %s (%s)", this.name, this.name.length), console.error("This can cause conflicts and silent errors executing queries"));
          var n = (this.values || []).map(dn.prepareValue);
          if (r.namedQueries[this.name]) {
            if (this.text && r.namedQueries[this.name] !== this.text) {
              let s = new Error(`Prepared statements must be unique - '${this.name}' was used for a different statement`);
              return t(s);
            }
            return r.native.execute(this.name, n, t);
          }
          return r.native.prepare(this.name, this.text, n.length, function(s) {
            return s ? t(s) : (r.namedQueries[e2.name] = e2.text, e2.native.execute(e2.name, n, t));
          });
        } else if (this.values) {
          if (!Array.isArray(this.values)) {
            let s = new Error("Query values must be an array");
            return t(s);
          }
          var i = this.values.map(dn.prepareValue);
          r.native.query(this.text, i, t);
        } else
          r.native.query(this.text, t);
      };
    });
    var Js = C((xf, Ys) => {
      "use strict";
      d();
      var lc = (Ks(), j(js)), fc = Er(), Vs = be().EventEmitter, dc = (At(), j(bt)), pc = Cr(), zs = Gs(), he = Ys.exports = function(r) {
        Vs.call(this), r = r || {}, this._Promise = r.Promise || v.Promise, this._types = new fc(r.types), this.native = new lc({ types: this._types }), this._queryQueue = [], this._ending = false, this._connecting = false, this._connected = false, this._queryable = true;
        var e2 = this.connectionParameters = new pc(r);
        this.user = e2.user, Object.defineProperty(this, "password", { configurable: true, enumerable: false, writable: true, value: e2.password }), this.database = e2.database, this.host = e2.host, this.port = e2.port, this.namedQueries = {};
      };
      he.Query = zs;
      dc.inherits(he, Vs);
      he.prototype._errorAllQueries = function(r) {
        let e2 = (t) => {
          y.nextTick(() => {
            t.native = this.native, t.handleError(r);
          });
        };
        this._hasActiveQuery() && (e2(this._activeQuery), this._activeQuery = null), this._queryQueue.forEach(e2), this._queryQueue.length = 0;
      };
      he.prototype._connect = function(r) {
        var e2 = this;
        if (this._connecting) {
          y.nextTick(() => r(new Error("Client has already been connected. You cannot reuse a client.")));
          return;
        }
        this._connecting = true, this.connectionParameters.getLibpqConnectionString(function(t, n) {
          if (t)
            return r(t);
          e2.native.connect(n, function(i) {
            if (i)
              return e2.native.end(), r(i);
            e2._connected = true, e2.native.on("error", function(s) {
              e2._queryable = false, e2._errorAllQueries(s), e2.emit("error", s);
            }), e2.native.on("notification", function(s) {
              e2.emit("notification", { channel: s.relname, payload: s.extra });
            }), e2.emit("connect"), e2._pulseQueryQueue(true), r();
          });
        });
      };
      he.prototype.connect = function(r) {
        if (r) {
          this._connect(r);
          return;
        }
        return new this._Promise((e2, t) => {
          this._connect((n) => {
            n ? t(n) : e2();
          });
        });
      };
      he.prototype.query = function(r, e2, t) {
        var n, i, s, o, a;
        if (r == null)
          throw new TypeError("Client was passed a null or undefined query");
        if (typeof r.submit == "function")
          s = r.query_timeout || this.connectionParameters.query_timeout, i = n = r, typeof e2 == "function" && (r.callback = e2);
        else if (s = this.connectionParameters.query_timeout, n = new zs(r, e2, t), !n.callback) {
          let u, h;
          i = new this._Promise((c, f) => {
            u = c, h = f;
          }), n.callback = (c, f) => c ? h(c) : u(f);
        }
        return s && (a = n.callback, o = setTimeout(() => {
          var u = new Error("Query read timeout");
          y.nextTick(() => {
            n.handleError(u, this.connection);
          }), a(u), n.callback = () => {
          };
          var h = this._queryQueue.indexOf(n);
          h > -1 && this._queryQueue.splice(h, 1), this._pulseQueryQueue();
        }, s), n.callback = (u, h) => {
          clearTimeout(o), a(u, h);
        }), this._queryable ? this._ending ? (n.native = this.native, y.nextTick(() => {
          n.handleError(new Error("Client was closed and is not queryable"));
        }), i) : (this._queryQueue.push(n), this._pulseQueryQueue(), i) : (n.native = this.native, y.nextTick(() => {
          n.handleError(new Error("Client has encountered a connection error and is not queryable"));
        }), i);
      };
      he.prototype.end = function(r) {
        var e2 = this;
        this._ending = true, this._connected || this.once("connect", this.end.bind(this, r));
        var t;
        return r || (t = new this._Promise(function(n, i) {
          r = (s) => s ? i(s) : n();
        })), this.native.end(function() {
          e2._errorAllQueries(new Error("Connection terminated")), y.nextTick(() => {
            e2.emit("end"), r && r();
          });
        }), t;
      };
      he.prototype._hasActiveQuery = function() {
        return this._activeQuery && this._activeQuery.state !== "error" && this._activeQuery.state !== "end";
      };
      he.prototype._pulseQueryQueue = function(r) {
        if (!!this._connected && !this._hasActiveQuery()) {
          var e2 = this._queryQueue.shift();
          if (!e2) {
            r || this.emit("drain");
            return;
          }
          this._activeQuery = e2, e2.submit(this);
          var t = this;
          e2.once("_done", function() {
            t._pulseQueryQueue();
          });
        }
      };
      he.prototype.cancel = function(r) {
        this._activeQuery === r ? this.native.cancel(function() {
        }) : this._queryQueue.indexOf(r) !== -1 && this._queryQueue.splice(this._queryQueue.indexOf(r), 1);
      };
      he.prototype.ref = function() {
      };
      he.prototype.unref = function() {
      };
      he.prototype.setTypeParser = function(r, e2, t) {
        return this._types.setTypeParser(r, e2, t);
      };
      he.prototype.getTypeParser = function(r, e2) {
        return this._types.getTypeParser(r, e2);
      };
    });
    var pn = C((Ef, Zs) => {
      "use strict";
      d();
      Zs.exports = Js();
    });
    var Dt = C((_f, at) => {
      "use strict";
      d();
      var yc = Ds(), wc = rt(), mc = hn(), gc = Hs(), { DatabaseError: Sc } = an(), xc = (r) => class extends gc {
        constructor(t) {
          super(t, r);
        }
      }, yn = function(r) {
        this.defaults = wc, this.Client = r, this.Query = this.Client.Query, this.Pool = xc(this.Client), this._pools = [], this.Connection = mc, this.types = tt(), this.DatabaseError = Sc;
      };
      typeof y.env.NODE_PG_FORCE_NATIVE < "u" ? at.exports = new yn(pn()) : (at.exports = new yn(yc), Object.defineProperty(at.exports, "native", { configurable: true, enumerable: false, get() {
        var r = null;
        try {
          r = new yn(pn());
        } catch (e2) {
          if (e2.code !== "MODULE_NOT_FOUND")
            throw e2;
        }
        return Object.defineProperty(at.exports, "native", { value: r }), r;
      } }));
    });
    var vc = {};
    le(vc, { Client: () => Ot, ClientBase: () => ye.ClientBase, Connection: () => ye.Connection, DatabaseError: () => ye.DatabaseError, Pool: () => wn, Query: () => ye.Query, defaults: () => ye.defaults, neonConfig: () => ue, types: () => ye.types });
    module.exports = j(vc);
    d();
    var qt = Qt(Dt());
    Dr();
    var ye = Qt(Dt());
    var Ot = class extends qt.Client {
      get neonConfig() {
        return this.connection.stream;
      }
      connect(e2) {
        this.ssl && this.neonConfig.useSecureWebSocket && console.warn("SSL is enabled for both Postgres (e.g. ?sslmode=true in the connection string) and the WebSocket tunnel (useSecureWebSocket = true). Double encryption will increase latency and CPU usage. Please disable SSL on the Postgres connection."), this.host === "localhost" && console.warn("The database host is 'localhost', which is the default host when none is set. If that's intentional, please ignore this warning. If not, perhaps an environment variable has not been set, or has not been passed to the library?");
        let t = super.connect(e2), n = this.neonConfig.pipelineTLS && this.ssl, i = this.neonConfig.pipelineConnect === "password";
        if (!n && !this.neonConfig.pipelineConnect)
          return t;
        let s = this.connection;
        if (n && s.on("connect", () => s.stream.emit("data", "S")), i) {
          s.removeAllListeners("authenticationCleartextPassword"), s.removeAllListeners("readyForQuery"), s.once("readyForQuery", () => s.on("readyForQuery", this._handleReadyForQuery.bind(this)));
          let o = this.ssl ? "sslconnect" : "connect";
          s.on(o, () => {
            this._handleAuthCleartextPassword(), this._handleReadyForQuery();
          });
        }
        return t;
      }
      async _handleAuthSASLContinue(e2) {
        let t = this.saslSession, n = this.password, i = e2.data;
        if (t.message !== "SASLInitialResponse" || typeof n != "string" || typeof i != "string")
          throw new Error("SASL: protocol error");
        let s = Object.fromEntries(i.split(",").map((T) => {
          if (!/^.=/.test(T))
            throw new Error("SASL: Invalid attribute pair entry");
          let N = T[0], we = T.substring(2);
          return [N, we];
        })), o = s.r, a = s.s, u = s.i;
        if (!o || !/^[!-+--~]+$/.test(o))
          throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing/unprintable");
        if (!a || !/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(a))
          throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base64");
        if (!u || !/^[1-9][0-9]*$/.test(u))
          throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: missing/invalid iteration count");
        if (!o.startsWith(t.clientNonce))
          throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce");
        if (o.length === t.clientNonce.length)
          throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce is too short");
        let h = parseInt(u, 10), c = p.from(a, "base64"), f = new TextEncoder(), w = f.encode(n), g = await m.subtle.importKey("raw", w, { name: "HMAC", hash: { name: "SHA-256" } }, false, ["sign"]), b = new Uint8Array(await m.subtle.sign("HMAC", g, p.concat([c, p.from([0, 0, 0, 1])]))), I = b;
        for (var B = 0; B < h - 1; B++)
          b = new Uint8Array(await m.subtle.sign("HMAC", g, b)), I = p.from(I.map((T, N) => I[N] ^ b[N]));
        let k = I, _ = await m.subtle.importKey("raw", k, { name: "HMAC", hash: { name: "SHA-256" } }, false, ["sign"]), x = new Uint8Array(await m.subtle.sign("HMAC", _, f.encode("Client Key"))), K = await m.subtle.digest("SHA-256", x), z = "n=*,r=" + t.clientNonce, P = "r=" + o + ",s=" + a + ",i=" + h, J = "c=biws,r=" + o, $ = z + "," + P + "," + J, ce = await m.subtle.importKey("raw", K, { name: "HMAC", hash: { name: "SHA-256" } }, false, ["sign"]);
        var U = new Uint8Array(await m.subtle.sign("HMAC", ce, f.encode($))), R = p.from(x.map((T, N) => x[N] ^ U[N])), F = R.toString("base64");
        let q = await m.subtle.importKey("raw", k, { name: "HMAC", hash: { name: "SHA-256" } }, false, ["sign"]), Q = await m.subtle.sign("HMAC", q, f.encode("Server Key")), Z = await m.subtle.importKey("raw", Q, { name: "HMAC", hash: { name: "SHA-256" } }, false, ["sign"]);
        var X = p.from(await m.subtle.sign("HMAC", Z, f.encode($)));
        t.message = "SASLResponse", t.serverSignature = X.toString("base64"), t.response = J + ",p=" + F, this.connection.sendSCRAMClientFinalMessage(this.saslSession.response);
      }
    };
    var wn = class extends qt.Pool {
      constructor() {
        super(...arguments);
        S(this, "Client", Ot);
      }
    };
  }
});

// node_modules/itty-router/dist/itty-router.mjs
var e = ({ base: e2 = "", routes: r = [] } = {}) => ({ __proto__: new Proxy({}, { get: (a, o, t) => (a2, ...p) => r.push([o.toUpperCase(), RegExp(`^${(e2 + a2).replace(/(\/?)\*/g, "($1.*)?").replace(/(\/$)|((?<=\/)\/)/, "").replace(/(:(\w+)\+)/, "(?<$2>.*)").replace(/:(\w+)(\?)?(\.)?/g, "$2(?<$1>[^/]+)$2$3").replace(/\.(?=[\w(])/, "\\.").replace(/\)\.\?\(([^\[]+)\[\^/g, "?)\\.?($1(?<=\\.)[^\\.")}/*$`), p]) && t }), routes: r, async handle(e3, ...a) {
  let o, t, p = new URL(e3.url), l = e3.query = {};
  for (let [e4, r2] of p.searchParams)
    l[e4] = void 0 === l[e4] ? r2 : [l[e4], r2].flat();
  for (let [l2, s, c] of r)
    if ((l2 === e3.method || "ALL" === l2) && (t = p.pathname.match(s))) {
      e3.params = t.groups || {};
      for (let r2 of c)
        if (void 0 !== (o = await r2(e3.proxy || e3, ...a)))
          return o;
    }
} });

// node_modules/ramda/es/internal/_isPlaceholder.js
function _isPlaceholder(a) {
  return a != null && typeof a === "object" && a["@@functional/placeholder"] === true;
}

// node_modules/ramda/es/internal/_curry1.js
function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}

// node_modules/ramda/es/internal/_curry2.js
function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a) ? f2 : _curry1(function(_b) {
          return fn(a, _b);
        });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function(_a) {
          return fn(_a, b);
        }) : _isPlaceholder(b) ? _curry1(function(_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}

// node_modules/ramda/es/internal/_arity.js
function _arity(n, fn) {
  switch (n) {
    case 0:
      return function() {
        return fn.apply(this, arguments);
      };
    case 1:
      return function(a0) {
        return fn.apply(this, arguments);
      };
    case 2:
      return function(a0, a1) {
        return fn.apply(this, arguments);
      };
    case 3:
      return function(a0, a1, a2) {
        return fn.apply(this, arguments);
      };
    case 4:
      return function(a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };
    case 5:
      return function(a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };
    case 6:
      return function(a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };
    case 7:
      return function(a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };
    case 8:
      return function(a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };
    case 9:
      return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };
    case 10:
      return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };
    default:
      throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
  }
}

// node_modules/ramda/es/internal/_curryN.js
function _curryN(length3, received, fn) {
  return function() {
    var combined = [];
    var argsIdx = 0;
    var left = length3;
    var combinedIdx = 0;
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;
      if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }
      combined[combinedIdx] = result;
      if (!_isPlaceholder(result)) {
        left -= 1;
      }
      combinedIdx += 1;
    }
    return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length3, combined, fn));
  };
}

// node_modules/ramda/es/curryN.js
var curryN = /* @__PURE__ */ _curry2(function curryN2(length3, fn) {
  if (length3 === 1) {
    return _curry1(fn);
  }
  return _arity(length3, _curryN(length3, [], fn));
});
var curryN_default = curryN;

// node_modules/ramda/es/internal/_curry3.js
function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return _isPlaceholder(a) ? f3 : _curry2(function(_b, _c) {
          return fn(a, _b, _c);
        });
      case 2:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function(_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) ? _curry2(function(_b, _c) {
          return fn(a, _b, _c);
        }) : _curry1(function(_c) {
          return fn(a, b, _c);
        });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function(_a, _b) {
          return fn(_a, _b, c);
        }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function(_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function(_b, _c) {
          return fn(a, _b, _c);
        }) : _isPlaceholder(a) ? _curry1(function(_a) {
          return fn(_a, b, c);
        }) : _isPlaceholder(b) ? _curry1(function(_b) {
          return fn(a, _b, c);
        }) : _isPlaceholder(c) ? _curry1(function(_c) {
          return fn(a, b, _c);
        }) : fn(a, b, c);
    }
  };
}

// node_modules/ramda/es/internal/_isArray.js
var isArray_default = Array.isArray || function _isArray(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === "[object Array]";
};

// node_modules/ramda/es/internal/_isTransformer.js
function _isTransformer(obj) {
  return obj != null && typeof obj["@@transducer/step"] === "function";
}

// node_modules/ramda/es/internal/_dispatchable.js
function _dispatchable(methodNames, transducerCreator, fn) {
  return function() {
    if (arguments.length === 0) {
      return fn();
    }
    var obj = arguments[arguments.length - 1];
    if (!isArray_default(obj)) {
      var idx = 0;
      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === "function") {
          return obj[methodNames[idx]].apply(obj, Array.prototype.slice.call(arguments, 0, -1));
        }
        idx += 1;
      }
      if (_isTransformer(obj)) {
        var transducer = transducerCreator.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        return transducer(obj);
      }
    }
    return fn.apply(this, arguments);
  };
}

// node_modules/ramda/es/internal/_xfBase.js
var xfBase_default = {
  init: function() {
    return this.xf["@@transducer/init"]();
  },
  result: function(result) {
    return this.xf["@@transducer/result"](result);
  }
};

// node_modules/ramda/es/internal/_has.js
function _has(prop5, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop5);
}

// node_modules/ramda/es/internal/_isArguments.js
var toString = Object.prototype.toString;
var _isArguments = /* @__PURE__ */ function() {
  return toString.call(arguments) === "[object Arguments]" ? function _isArguments3(x) {
    return toString.call(x) === "[object Arguments]";
  } : function _isArguments3(x) {
    return _has("callee", x);
  };
}();
var isArguments_default = _isArguments;

// node_modules/ramda/es/keys.js
var hasEnumBug = !/* @__PURE__ */ {
  toString: null
}.propertyIsEnumerable("toString");
var nonEnumerableProps = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
var hasArgsEnumBug = /* @__PURE__ */ function() {
  "use strict";
  return arguments.propertyIsEnumerable("length");
}();
var contains = function contains2(list, item) {
  var idx = 0;
  while (idx < list.length) {
    if (list[idx] === item) {
      return true;
    }
    idx += 1;
  }
  return false;
};
var keys = typeof Object.keys === "function" && !hasArgsEnumBug ? /* @__PURE__ */ _curry1(function keys2(obj) {
  return Object(obj) !== obj ? [] : Object.keys(obj);
}) : /* @__PURE__ */ _curry1(function keys3(obj) {
  if (Object(obj) !== obj) {
    return [];
  }
  var prop5, nIdx;
  var ks = [];
  var checkArgsLength = hasArgsEnumBug && isArguments_default(obj);
  for (prop5 in obj) {
    if (_has(prop5, obj) && (!checkArgsLength || prop5 !== "length")) {
      ks[ks.length] = prop5;
    }
  }
  if (hasEnumBug) {
    nIdx = nonEnumerableProps.length - 1;
    while (nIdx >= 0) {
      prop5 = nonEnumerableProps[nIdx];
      if (_has(prop5, obj) && !contains(ks, prop5)) {
        ks[ks.length] = prop5;
      }
      nIdx -= 1;
    }
  }
  return ks;
});
var keys_default = keys;

// node_modules/ramda/es/internal/_map.js
function _map(fn, functor) {
  var idx = 0;
  var len = functor.length;
  var result = Array(len);
  while (idx < len) {
    result[idx] = fn(functor[idx]);
    idx += 1;
  }
  return result;
}

// node_modules/ramda/es/internal/_toISOString.js
var pad = function pad2(n) {
  return (n < 10 ? "0" : "") + n;
};
var _toISOString = typeof Date.prototype.toISOString === "function" ? function _toISOString2(d) {
  return d.toISOString();
} : function _toISOString3(d) {
  return d.getUTCFullYear() + "-" + pad(d.getUTCMonth() + 1) + "-" + pad(d.getUTCDate()) + "T" + pad(d.getUTCHours()) + ":" + pad(d.getUTCMinutes()) + ":" + pad(d.getUTCSeconds()) + "." + (d.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
};

// node_modules/ramda/es/internal/_arrayReduce.js
function _arrayReduce(reducer, acc, list) {
  var index = 0;
  var length3 = list.length;
  while (index < length3) {
    acc = reducer(acc, list[index]);
    index += 1;
  }
  return acc;
}

// node_modules/ramda/es/internal/_filter.js
function _filter(fn, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx];
    }
    idx += 1;
  }
  return result;
}

// node_modules/ramda/es/internal/_isObject.js
function _isObject(x) {
  return Object.prototype.toString.call(x) === "[object Object]";
}

// node_modules/ramda/es/internal/_xfilter.js
var XFilter = /* @__PURE__ */ function() {
  function XFilter2(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFilter2.prototype["@@transducer/init"] = xfBase_default.init;
  XFilter2.prototype["@@transducer/result"] = xfBase_default.result;
  XFilter2.prototype["@@transducer/step"] = function(result, input) {
    return this.f(input) ? this.xf["@@transducer/step"](result, input) : result;
  };
  return XFilter2;
}();
function _xfilter(f) {
  return function(xf) {
    return new XFilter(f, xf);
  };
}

// node_modules/ramda/es/filter.js
var filter = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable(["fantasy-land/filter", "filter"], _xfilter, function(pred, filterable) {
    return _isObject(filterable) ? _arrayReduce(function(acc, key) {
      if (pred(filterable[key])) {
        acc[key] = filterable[key];
      }
      return acc;
    }, {}, keys_default(filterable)) : _filter(pred, filterable);
  })
);
var filter_default = filter;

// node_modules/ramda/es/internal/_xmap.js
var XMap = /* @__PURE__ */ function() {
  function XMap3(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XMap3.prototype["@@transducer/init"] = xfBase_default.init;
  XMap3.prototype["@@transducer/result"] = xfBase_default.result;
  XMap3.prototype["@@transducer/step"] = function(result, input) {
    return this.xf["@@transducer/step"](result, this.f(input));
  };
  return XMap3;
}();
var _xmap = function _xmap2(f) {
  return function(xf) {
    return new XMap(f, xf);
  };
};
var xmap_default = _xmap;

// node_modules/ramda/es/map.js
var map = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable(["fantasy-land/map", "map"], xmap_default, function map2(fn, functor) {
    switch (Object.prototype.toString.call(functor)) {
      case "[object Function]":
        return curryN_default(functor.length, function() {
          return fn.call(this, functor.apply(this, arguments));
        });
      case "[object Object]":
        return _arrayReduce(function(acc, key) {
          acc[key] = fn(functor[key]);
          return acc;
        }, {}, keys_default(functor));
      default:
        return _map(fn, functor);
    }
  })
);
var map_default = map;

// node_modules/ramda/es/internal/_isInteger.js
var isInteger_default = Number.isInteger || function _isInteger(n) {
  return n << 0 === n;
};

// node_modules/ramda/es/internal/_isString.js
function _isString(x) {
  return Object.prototype.toString.call(x) === "[object String]";
}

// node_modules/ramda/es/nth.js
var nth = /* @__PURE__ */ _curry2(function nth2(offset, list) {
  var idx = offset < 0 ? list.length + offset : offset;
  return _isString(list) ? list.charAt(idx) : list[idx];
});
var nth_default = nth;

// node_modules/ramda/es/prop.js
var prop = /* @__PURE__ */ _curry2(function prop2(p, obj) {
  if (obj == null) {
    return;
  }
  return isInteger_default(p) ? nth_default(p, obj) : obj[p];
});
var prop_default = prop;

// node_modules/ramda/es/pluck.js
var pluck = /* @__PURE__ */ _curry2(function pluck2(p, list) {
  return map_default(prop_default(p), list);
});
var pluck_default = pluck;

// node_modules/ramda/es/internal/_isArrayLike.js
var _isArrayLike = /* @__PURE__ */ _curry1(function isArrayLike(x) {
  if (isArray_default(x)) {
    return true;
  }
  if (!x) {
    return false;
  }
  if (typeof x !== "object") {
    return false;
  }
  if (_isString(x)) {
    return false;
  }
  if (x.length === 0) {
    return true;
  }
  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }
  return false;
});
var isArrayLike_default = _isArrayLike;

// node_modules/ramda/es/internal/_createReduce.js
var symIterator = typeof Symbol !== "undefined" ? Symbol.iterator : "@@iterator";
function _createReduce(arrayReduce, methodReduce, iterableReduce) {
  return function _reduce2(xf, acc, list) {
    if (isArrayLike_default(list)) {
      return arrayReduce(xf, acc, list);
    }
    if (list == null) {
      return acc;
    }
    if (typeof list["fantasy-land/reduce"] === "function") {
      return methodReduce(xf, acc, list, "fantasy-land/reduce");
    }
    if (list[symIterator] != null) {
      return iterableReduce(xf, acc, list[symIterator]());
    }
    if (typeof list.next === "function") {
      return iterableReduce(xf, acc, list);
    }
    if (typeof list.reduce === "function") {
      return methodReduce(xf, acc, list, "reduce");
    }
    throw new TypeError("reduce: list must be array or iterable");
  };
}

// node_modules/ramda/es/internal/_xArrayReduce.js
function _xArrayReduce(xf, acc, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    acc = xf["@@transducer/step"](acc, list[idx]);
    if (acc && acc["@@transducer/reduced"]) {
      acc = acc["@@transducer/value"];
      break;
    }
    idx += 1;
  }
  return xf["@@transducer/result"](acc);
}

// node_modules/ramda/es/bind.js
var bind = /* @__PURE__ */ _curry2(function bind2(fn, thisObj) {
  return _arity(fn.length, function() {
    return fn.apply(thisObj, arguments);
  });
});
var bind_default = bind;

// node_modules/ramda/es/internal/_xReduce.js
function _xIterableReduce(xf, acc, iter) {
  var step = iter.next();
  while (!step.done) {
    acc = xf["@@transducer/step"](acc, step.value);
    if (acc && acc["@@transducer/reduced"]) {
      acc = acc["@@transducer/value"];
      break;
    }
    step = iter.next();
  }
  return xf["@@transducer/result"](acc);
}
function _xMethodReduce(xf, acc, obj, methodName) {
  return xf["@@transducer/result"](obj[methodName](bind_default(xf["@@transducer/step"], xf), acc));
}
var _xReduce = /* @__PURE__ */ _createReduce(_xArrayReduce, _xMethodReduce, _xIterableReduce);
var xReduce_default = _xReduce;

// node_modules/ramda/es/internal/_xwrap.js
var XWrap = /* @__PURE__ */ function() {
  function XWrap3(fn) {
    this.f = fn;
  }
  XWrap3.prototype["@@transducer/init"] = function() {
    throw new Error("init not implemented on XWrap");
  };
  XWrap3.prototype["@@transducer/result"] = function(acc) {
    return acc;
  };
  XWrap3.prototype["@@transducer/step"] = function(acc, x) {
    return this.f(acc, x);
  };
  return XWrap3;
}();
function _xwrap(fn) {
  return new XWrap(fn);
}

// node_modules/ramda/es/reduce.js
var reduce = /* @__PURE__ */ _curry3(function(xf, acc, list) {
  return xReduce_default(typeof xf === "function" ? _xwrap(xf) : xf, acc, list);
});
var reduce_default = reduce;

// node_modules/ramda/es/internal/_pipe.js
function _pipe(f, g) {
  return function() {
    return g.call(this, f.apply(this, arguments));
  };
}

// node_modules/ramda/es/internal/_checkForMethod.js
function _checkForMethod(methodname, fn) {
  return function() {
    var length3 = arguments.length;
    if (length3 === 0) {
      return fn();
    }
    var obj = arguments[length3 - 1];
    return isArray_default(obj) || typeof obj[methodname] !== "function" ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length3 - 1));
  };
}

// node_modules/ramda/es/slice.js
var slice = /* @__PURE__ */ _curry3(
  /* @__PURE__ */ _checkForMethod("slice", function slice2(fromIndex, toIndex, list) {
    return Array.prototype.slice.call(list, fromIndex, toIndex);
  })
);
var slice_default = slice;

// node_modules/ramda/es/tail.js
var tail = /* @__PURE__ */ _curry1(
  /* @__PURE__ */ _checkForMethod(
    "tail",
    /* @__PURE__ */ slice_default(1, Infinity)
  )
);
var tail_default = tail;

// node_modules/ramda/es/pipe.js
function pipe() {
  if (arguments.length === 0) {
    throw new Error("pipe requires at least one argument");
  }
  return _arity(arguments[0].length, reduce_default(_pipe, arguments[0], tail_default(arguments)));
}

// node_modules/ramda/es/trim.js
var hasProtoTrim = typeof String.prototype.trim === "function";

// src/App/Response/index.ts
var okResponse = (body) => new Response(body, { status: 200 });
var notFound = () => new Response("Not found", { status: 404 });
var internalError = () => new Response("Internal error", { status: 500 });

// node_modules/@neondatabase/serverless/index.mjs
var import_index = __toESM(require_serverless(), 1);
var Client = import_index.default.Client;
var ClientBase = import_index.default.ClientBase;
var Connection = import_index.default.Connection;
var DatabaseError = import_index.default.DatabaseError;
var Pool = import_index.default.Pool;
var Query = import_index.default.Query;
var defaults = import_index.default.defaults;
var neonConfig = import_index.default.neonConfig;
var types = import_index.default.types;

// src/App/Neon/queries.ts
var querySelectAllNeon = async (client) => client.query("SELECT * FROM artists;");
var queryInsertIntoNeon = (artist) => async (client) => client.query(`insert into artists (name) values ('${artist.name}');`);

// src/App/Neon/index.ts
var _createClient = async (env) => {
  const client = new Client(env.DATABASE_URL);
  await client.connect();
  return client;
};
var getAllArtistsFromNeon = async (env) => _createClient(env).then(querySelectAllNeon).then(prop_default("rows"));
var addArtistToNeon = (env) => async (artist) => _createClient(env).then(queryInsertIntoNeon(artist)).then(JSON.stringify);

// src/App/Artist/index.ts
var addArtist = (env) => async (request) => request.json().then((data) => data).then(addArtistToNeon(env)).then(okResponse).catch(internalError);
var _isArtistSearched = (artistSearched) => (artistName) => artistName.toLowerCase().includes(artistSearched.toLowerCase());
var getArtist = (env) => async (req) => {
  const artistSearched = decodeURIComponent(req.params.artist);
  return getAllArtistsFromNeon(env).then(pipe(
    filter_default((artistStored) => _isArtistSearched(artistSearched)(artistStored.name)),
    JSON.stringify,
    okResponse
  ));
};
var _formalizeArtistsResponse = pipe(
  pluck_default("name"),
  JSON.stringify,
  okResponse
);
var getAllArtists = (env) => async () => getAllArtistsFromNeon(env).then(_formalizeArtistsResponse);

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/internal/_isPlaceholder.js
function _isPlaceholder2(a) {
  return a != null && typeof a === "object" && a["@@functional/placeholder"] === true;
}

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/internal/_curry1.js
function _curry12(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder2(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/internal/_curry2.js
function _curry22(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder2(a) ? f2 : _curry12(function(_b) {
          return fn(a, _b);
        });
      default:
        return _isPlaceholder2(a) && _isPlaceholder2(b) ? f2 : _isPlaceholder2(a) ? _curry12(function(_a) {
          return fn(_a, b);
        }) : _isPlaceholder2(b) ? _curry12(function(_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/add.js
var add = /* @__PURE__ */ _curry22(function add2(a, b) {
  return Number(a) + Number(b);
});
var add_default2 = add;

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/internal/_concat.js
function _concat2(set1, set2) {
  set1 = set1 || [];
  set2 = set2 || [];
  var idx;
  var len1 = set1.length;
  var len2 = set2.length;
  var result = [];
  idx = 0;
  while (idx < len1) {
    result[result.length] = set1[idx];
    idx += 1;
  }
  idx = 0;
  while (idx < len2) {
    result[result.length] = set2[idx];
    idx += 1;
  }
  return result;
}

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/internal/_arity.js
function _arity2(n, fn) {
  switch (n) {
    case 0:
      return function() {
        return fn.apply(this, arguments);
      };
    case 1:
      return function(a0) {
        return fn.apply(this, arguments);
      };
    case 2:
      return function(a0, a1) {
        return fn.apply(this, arguments);
      };
    case 3:
      return function(a0, a1, a2) {
        return fn.apply(this, arguments);
      };
    case 4:
      return function(a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };
    case 5:
      return function(a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };
    case 6:
      return function(a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };
    case 7:
      return function(a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };
    case 8:
      return function(a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };
    case 9:
      return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };
    case 10:
      return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };
    default:
      throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
  }
}

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/internal/_curryN.js
function _curryN2(length3, received, fn) {
  return function() {
    var combined = [];
    var argsIdx = 0;
    var left = length3;
    var combinedIdx = 0;
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;
      if (combinedIdx < received.length && (!_isPlaceholder2(received[combinedIdx]) || argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }
      combined[combinedIdx] = result;
      if (!_isPlaceholder2(result)) {
        left -= 1;
      }
      combinedIdx += 1;
    }
    return left <= 0 ? fn.apply(this, combined) : _arity2(left, _curryN2(length3, combined, fn));
  };
}

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/curryN.js
var curryN3 = /* @__PURE__ */ _curry22(function curryN4(length3, fn) {
  if (length3 === 1) {
    return _curry12(fn);
  }
  return _arity2(length3, _curryN2(length3, [], fn));
});
var curryN_default2 = curryN3;

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/internal/_curry3.js
function _curry32(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return _isPlaceholder2(a) ? f3 : _curry22(function(_b, _c) {
          return fn(a, _b, _c);
        });
      case 2:
        return _isPlaceholder2(a) && _isPlaceholder2(b) ? f3 : _isPlaceholder2(a) ? _curry22(function(_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder2(b) ? _curry22(function(_b, _c) {
          return fn(a, _b, _c);
        }) : _curry12(function(_c) {
          return fn(a, b, _c);
        });
      default:
        return _isPlaceholder2(a) && _isPlaceholder2(b) && _isPlaceholder2(c) ? f3 : _isPlaceholder2(a) && _isPlaceholder2(b) ? _curry22(function(_a, _b) {
          return fn(_a, _b, c);
        }) : _isPlaceholder2(a) && _isPlaceholder2(c) ? _curry22(function(_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder2(b) && _isPlaceholder2(c) ? _curry22(function(_b, _c) {
          return fn(a, _b, _c);
        }) : _isPlaceholder2(a) ? _curry12(function(_a) {
          return fn(_a, b, c);
        }) : _isPlaceholder2(b) ? _curry12(function(_b) {
          return fn(a, _b, c);
        }) : _isPlaceholder2(c) ? _curry12(function(_c) {
          return fn(a, b, _c);
        }) : fn(a, b, c);
    }
  };
}

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/internal/_isArray.js
var isArray_default2 = Array.isArray || function _isArray2(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === "[object Array]";
};

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/internal/_isTransformer.js
function _isTransformer2(obj) {
  return obj != null && typeof obj["@@transducer/step"] === "function";
}

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/internal/_dispatchable.js
function _dispatchable2(methodNames, transducerCreator, fn) {
  return function() {
    if (arguments.length === 0) {
      return fn();
    }
    var obj = arguments[arguments.length - 1];
    if (!isArray_default2(obj)) {
      var idx = 0;
      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === "function") {
          return obj[methodNames[idx]].apply(obj, Array.prototype.slice.call(arguments, 0, -1));
        }
        idx += 1;
      }
      if (_isTransformer2(obj)) {
        var transducer = transducerCreator.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        return transducer(obj);
      }
    }
    return fn.apply(this, arguments);
  };
}

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/internal/_xfBase.js
var xfBase_default2 = {
  init: function() {
    return this.xf["@@transducer/init"]();
  },
  result: function(result) {
    return this.xf["@@transducer/result"](result);
  }
};

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/max.js
var max = /* @__PURE__ */ _curry22(function max2(a, b) {
  return b > a ? b : a;
});
var max_default2 = max;

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/internal/_map.js
function _map2(fn, functor) {
  var idx = 0;
  var len = functor.length;
  var result = Array(len);
  while (idx < len) {
    result[idx] = fn(functor[idx]);
    idx += 1;
  }
  return result;
}

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/internal/_isString.js
function _isString2(x) {
  return Object.prototype.toString.call(x) === "[object String]";
}

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/internal/_isArrayLike.js
var _isArrayLike2 = /* @__PURE__ */ _curry12(function isArrayLike2(x) {
  if (isArray_default2(x)) {
    return true;
  }
  if (!x) {
    return false;
  }
  if (typeof x !== "object") {
    return false;
  }
  if (_isString2(x)) {
    return false;
  }
  if (x.length === 0) {
    return true;
  }
  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }
  return false;
});
var isArrayLike_default2 = _isArrayLike2;

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/internal/_xwrap.js
var XWrap2 = /* @__PURE__ */ function() {
  function XWrap3(fn) {
    this.f = fn;
  }
  XWrap3.prototype["@@transducer/init"] = function() {
    throw new Error("init not implemented on XWrap");
  };
  XWrap3.prototype["@@transducer/result"] = function(acc) {
    return acc;
  };
  XWrap3.prototype["@@transducer/step"] = function(acc, x) {
    return this.f(acc, x);
  };
  return XWrap3;
}();
function _xwrap2(fn) {
  return new XWrap2(fn);
}

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/bind.js
var bind3 = /* @__PURE__ */ _curry22(function bind4(fn, thisObj) {
  return _arity2(fn.length, function() {
    return fn.apply(thisObj, arguments);
  });
});
var bind_default2 = bind3;

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/internal/_reduce.js
function _arrayReduce2(xf, acc, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    acc = xf["@@transducer/step"](acc, list[idx]);
    if (acc && acc["@@transducer/reduced"]) {
      acc = acc["@@transducer/value"];
      break;
    }
    idx += 1;
  }
  return xf["@@transducer/result"](acc);
}
function _iterableReduce(xf, acc, iter) {
  var step = iter.next();
  while (!step.done) {
    acc = xf["@@transducer/step"](acc, step.value);
    if (acc && acc["@@transducer/reduced"]) {
      acc = acc["@@transducer/value"];
      break;
    }
    step = iter.next();
  }
  return xf["@@transducer/result"](acc);
}
function _methodReduce(xf, acc, obj, methodName) {
  return xf["@@transducer/result"](obj[methodName](bind_default2(xf["@@transducer/step"], xf), acc));
}
var symIterator2 = typeof Symbol !== "undefined" ? Symbol.iterator : "@@iterator";
function _reduce(fn, acc, list) {
  if (typeof fn === "function") {
    fn = _xwrap2(fn);
  }
  if (isArrayLike_default2(list)) {
    return _arrayReduce2(fn, acc, list);
  }
  if (typeof list["fantasy-land/reduce"] === "function") {
    return _methodReduce(fn, acc, list, "fantasy-land/reduce");
  }
  if (list[symIterator2] != null) {
    return _iterableReduce(fn, acc, list[symIterator2]());
  }
  if (typeof list.next === "function") {
    return _iterableReduce(fn, acc, list);
  }
  if (typeof list.reduce === "function") {
    return _methodReduce(fn, acc, list, "reduce");
  }
  throw new TypeError("reduce: list must be array or iterable");
}

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/internal/_xmap.js
var XMap2 = /* @__PURE__ */ function() {
  function XMap3(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XMap3.prototype["@@transducer/init"] = xfBase_default2.init;
  XMap3.prototype["@@transducer/result"] = xfBase_default2.result;
  XMap3.prototype["@@transducer/step"] = function(result, input) {
    return this.xf["@@transducer/step"](result, this.f(input));
  };
  return XMap3;
}();
var _xmap3 = /* @__PURE__ */ _curry22(function _xmap4(f, xf) {
  return new XMap2(f, xf);
});
var xmap_default2 = _xmap3;

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/internal/_has.js
function _has2(prop5, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop5);
}

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/internal/_isArguments.js
var toString2 = Object.prototype.toString;
var _isArguments2 = /* @__PURE__ */ function() {
  return toString2.call(arguments) === "[object Arguments]" ? function _isArguments3(x) {
    return toString2.call(x) === "[object Arguments]";
  } : function _isArguments3(x) {
    return _has2("callee", x);
  };
}();
var isArguments_default2 = _isArguments2;

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/keys.js
var hasEnumBug2 = !/* @__PURE__ */ {
  toString: null
}.propertyIsEnumerable("toString");
var nonEnumerableProps2 = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
var hasArgsEnumBug2 = /* @__PURE__ */ function() {
  "use strict";
  return arguments.propertyIsEnumerable("length");
}();
var contains3 = function contains4(list, item) {
  var idx = 0;
  while (idx < list.length) {
    if (list[idx] === item) {
      return true;
    }
    idx += 1;
  }
  return false;
};
var keys4 = typeof Object.keys === "function" && !hasArgsEnumBug2 ? /* @__PURE__ */ _curry12(function keys5(obj) {
  return Object(obj) !== obj ? [] : Object.keys(obj);
}) : /* @__PURE__ */ _curry12(function keys6(obj) {
  if (Object(obj) !== obj) {
    return [];
  }
  var prop5, nIdx;
  var ks = [];
  var checkArgsLength = hasArgsEnumBug2 && isArguments_default2(obj);
  for (prop5 in obj) {
    if (_has2(prop5, obj) && (!checkArgsLength || prop5 !== "length")) {
      ks[ks.length] = prop5;
    }
  }
  if (hasEnumBug2) {
    nIdx = nonEnumerableProps2.length - 1;
    while (nIdx >= 0) {
      prop5 = nonEnumerableProps2[nIdx];
      if (_has2(prop5, obj) && !contains3(ks, prop5)) {
        ks[ks.length] = prop5;
      }
      nIdx -= 1;
    }
  }
  return ks;
});
var keys_default2 = keys4;

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/map.js
var map3 = /* @__PURE__ */ _curry22(
  /* @__PURE__ */ _dispatchable2(["fantasy-land/map", "map"], xmap_default2, function map4(fn, functor) {
    switch (Object.prototype.toString.call(functor)) {
      case "[object Function]":
        return curryN_default2(functor.length, function() {
          return fn.call(this, functor.apply(this, arguments));
        });
      case "[object Object]":
        return _reduce(function(acc, key) {
          acc[key] = fn(functor[key]);
          return acc;
        }, {}, keys_default2(functor));
      default:
        return _map2(fn, functor);
    }
  })
);
var map_default2 = map3;

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/internal/_isInteger.js
var isInteger_default2 = Number.isInteger || function _isInteger2(n) {
  return n << 0 === n;
};

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/nth.js
var nth3 = /* @__PURE__ */ _curry22(function nth4(offset, list) {
  var idx = offset < 0 ? list.length + offset : offset;
  return _isString2(list) ? list.charAt(idx) : list[idx];
});
var nth_default2 = nth3;

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/prop.js
var prop3 = /* @__PURE__ */ _curry22(function prop4(p, obj) {
  if (obj == null) {
    return;
  }
  return isInteger_default2(p) ? nth_default2(p, obj) : obj[p];
});
var prop_default2 = prop3;

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/pluck.js
var pluck3 = /* @__PURE__ */ _curry22(function pluck4(p, list) {
  return map_default2(prop_default2(p), list);
});
var pluck_default2 = pluck3;

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/reduce.js
var reduce2 = /* @__PURE__ */ _curry32(_reduce);
var reduce_default3 = reduce2;

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/append.js
var append = /* @__PURE__ */ _curry22(function append2(el, list) {
  return _concat2(list, [el]);
});
var append_default2 = append;

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/apply.js
var apply = /* @__PURE__ */ _curry22(function apply2(fn, args) {
  return fn.apply(this, args);
});
var apply_default2 = apply;

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/values.js
var values = /* @__PURE__ */ _curry12(function values2(obj) {
  var props = keys_default2(obj);
  var len = props.length;
  var vals = [];
  var idx = 0;
  while (idx < len) {
    vals[idx] = obj[props[idx]];
    idx += 1;
  }
  return vals;
});
var values_default2 = values;

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/applySpec.js
function mapValues(fn, obj) {
  return isArray_default2(obj) ? obj.map(fn) : keys_default2(obj).reduce(function(acc, key) {
    acc[key] = fn(obj[key]);
    return acc;
  }, {});
}
var applySpec = /* @__PURE__ */ _curry12(function applySpec2(spec) {
  spec = mapValues(function(v) {
    return typeof v == "function" ? v : applySpec2(v);
  }, spec);
  return curryN_default2(reduce_default3(max_default2, 0, pluck_default2("length", values_default2(spec))), function() {
    var args = arguments;
    return mapValues(function(f) {
      return apply_default2(f, args);
    }, spec);
  });
});
var applySpec_default2 = applySpec;

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/type.js
var type = /* @__PURE__ */ _curry12(function type2(val) {
  return val === null ? "Null" : val === void 0 ? "Undefined" : Object.prototype.toString.call(val).slice(8, -1);
});
var type_default2 = type;

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/internal/_pipe.js
function _pipe2(f, g) {
  return function() {
    return g.call(this, f.apply(this, arguments));
  };
}

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/internal/_checkForMethod.js
function _checkForMethod2(methodname, fn) {
  return function() {
    var length3 = arguments.length;
    if (length3 === 0) {
      return fn();
    }
    var obj = arguments[length3 - 1];
    return isArray_default2(obj) || typeof obj[methodname] !== "function" ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length3 - 1));
  };
}

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/slice.js
var slice3 = /* @__PURE__ */ _curry32(
  /* @__PURE__ */ _checkForMethod2("slice", function slice4(fromIndex, toIndex, list) {
    return Array.prototype.slice.call(list, fromIndex, toIndex);
  })
);
var slice_default2 = slice3;

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/tail.js
var tail2 = /* @__PURE__ */ _curry12(
  /* @__PURE__ */ _checkForMethod2(
    "tail",
    /* @__PURE__ */ slice_default2(1, Infinity)
  )
);
var tail_default2 = tail2;

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/pipe.js
function pipe2() {
  if (arguments.length === 0) {
    throw new Error("pipe requires at least one argument");
  }
  return _arity2(arguments[0].length, reduce_default3(_pipe2, arguments[0], tail_default2(arguments)));
}

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/internal/_identity.js
function _identity2(x) {
  return x;
}

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/identity.js
var identity = /* @__PURE__ */ _curry12(_identity2);
var identity_default2 = identity;

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/internal/_arrayFromIterator.js
function _arrayFromIterator2(iter) {
  var list = [];
  var next;
  while (!(next = iter.next()).done) {
    list.push(next.value);
  }
  return list;
}

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/internal/_includesWith.js
function _includesWith2(pred, x, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/internal/_functionName.js
function _functionName2(f) {
  var match = String(f).match(/^function (\w*)/);
  return match == null ? "" : match[1];
}

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/internal/_objectIs.js
function _objectIs(a, b) {
  if (a === b) {
    return a !== 0 || 1 / a === 1 / b;
  } else {
    return a !== a && b !== b;
  }
}
var objectIs_default2 = typeof Object.is === "function" ? Object.is : _objectIs;

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/internal/_equals.js
function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
  var a = _arrayFromIterator2(aIterator);
  var b = _arrayFromIterator2(bIterator);
  function eq(_a, _b) {
    return _equals2(_a, _b, stackA.slice(), stackB.slice());
  }
  return !_includesWith2(function(b2, aItem) {
    return !_includesWith2(eq, aItem, b2);
  }, b, a);
}
function _equals2(a, b, stackA, stackB) {
  if (objectIs_default2(a, b)) {
    return true;
  }
  var typeA = type_default2(a);
  if (typeA !== type_default2(b)) {
    return false;
  }
  if (typeof a["fantasy-land/equals"] === "function" || typeof b["fantasy-land/equals"] === "function") {
    return typeof a["fantasy-land/equals"] === "function" && a["fantasy-land/equals"](b) && typeof b["fantasy-land/equals"] === "function" && b["fantasy-land/equals"](a);
  }
  if (typeof a.equals === "function" || typeof b.equals === "function") {
    return typeof a.equals === "function" && a.equals(b) && typeof b.equals === "function" && b.equals(a);
  }
  switch (typeA) {
    case "Arguments":
    case "Array":
    case "Object":
      if (typeof a.constructor === "function" && _functionName2(a.constructor) === "Promise") {
        return a === b;
      }
      break;
    case "Boolean":
    case "Number":
    case "String":
      if (!(typeof a === typeof b && objectIs_default2(a.valueOf(), b.valueOf()))) {
        return false;
      }
      break;
    case "Date":
      if (!objectIs_default2(a.valueOf(), b.valueOf())) {
        return false;
      }
      break;
    case "Error":
      return a.name === b.name && a.message === b.message;
    case "RegExp":
      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
        return false;
      }
      break;
  }
  var idx = stackA.length - 1;
  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }
    idx -= 1;
  }
  switch (typeA) {
    case "Map":
      if (a.size !== b.size) {
        return false;
      }
      return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));
    case "Set":
      if (a.size !== b.size) {
        return false;
      }
      return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));
    case "Arguments":
    case "Array":
    case "Object":
    case "Boolean":
    case "Number":
    case "String":
    case "Date":
    case "Error":
    case "RegExp":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "ArrayBuffer":
      break;
    default:
      return false;
  }
  var keysA = keys_default2(a);
  if (keysA.length !== keys_default2(b).length) {
    return false;
  }
  var extendedStackA = stackA.concat([a]);
  var extendedStackB = stackB.concat([b]);
  idx = keysA.length - 1;
  while (idx >= 0) {
    var key = keysA[idx];
    if (!(_has2(key, b) && _equals2(b[key], a[key], extendedStackA, extendedStackB))) {
      return false;
    }
    idx -= 1;
  }
  return true;
}

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/equals.js
var equals = /* @__PURE__ */ _curry22(function equals2(a, b) {
  return _equals2(a, b, [], []);
});
var equals_default2 = equals;

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/internal/_toISOString.js
var pad3 = function pad4(n) {
  return (n < 10 ? "0" : "") + n;
};
var _toISOString4 = typeof Date.prototype.toISOString === "function" ? function _toISOString5(d) {
  return d.toISOString();
} : function _toISOString6(d) {
  return d.getUTCFullYear() + "-" + pad3(d.getUTCMonth() + 1) + "-" + pad3(d.getUTCDate()) + "T" + pad3(d.getUTCHours()) + ":" + pad3(d.getUTCMinutes()) + ":" + pad3(d.getUTCSeconds()) + "." + (d.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
};

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/converge.js
var converge = /* @__PURE__ */ _curry22(function converge2(after, fns) {
  return curryN_default2(reduce_default3(max_default2, 0, pluck_default2("length", fns)), function() {
    var args = arguments;
    var context = this;
    return after.apply(context, _map2(function(fn) {
      return fn.apply(context, args);
    }, fns));
  });
});
var converge_default2 = converge;

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/divide.js
var divide = /* @__PURE__ */ _curry22(function divide2(a, b) {
  return a / b;
});
var divide_default2 = divide;

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/ifElse.js
var ifElse = /* @__PURE__ */ _curry32(function ifElse2(condition, onTrue, onFalse) {
  return curryN_default2(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
    return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
  });
});
var ifElse_default2 = ifElse;

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/internal/_isNumber.js
function _isNumber2(x) {
  return Object.prototype.toString.call(x) === "[object Number]";
}

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/length.js
var length = /* @__PURE__ */ _curry12(function length2(list) {
  return list != null && _isNumber2(list.length) ? list.length : NaN;
});
var length_default2 = length;

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/sum.js
var sum = /* @__PURE__ */ reduce_default3(add_default2, 0);
var sum_default2 = sum;

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/mean.js
var mean = /* @__PURE__ */ _curry12(function mean2(list) {
  return sum_default2(list) / list.length;
});
var mean_default2 = mean;

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/multiply.js
var multiply = /* @__PURE__ */ _curry22(function multiply2(a, b) {
  return a * b;
});
var multiply_default2 = multiply;

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/times.js
var times = /* @__PURE__ */ _curry22(function times2(fn, n) {
  var len = Number(n);
  var idx = 0;
  var list;
  if (len < 0 || isNaN(len)) {
    throw new RangeError("n must be a non-negative number");
  }
  list = new Array(len);
  while (idx < len) {
    list[idx] = fn(idx);
    idx += 1;
  }
  return list;
});
var times_default2 = times;

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/subtract.js
var subtract = /* @__PURE__ */ _curry22(function subtract2(a, b) {
  return Number(a) - Number(b);
});
var subtract_default2 = subtract;

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/trim.js
var hasProtoTrim2 = typeof String.prototype.trim === "function";

// node_modules/clementreiffers-linear-regression/node_modules/ramda/es/zip.js
var zip = /* @__PURE__ */ _curry22(function zip2(a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);
  while (idx < len) {
    rv[idx] = [a[idx], b[idx]];
    idx += 1;
  }
  return rv;
});
var zip_default2 = zip;

// node_modules/clementreiffers-linear-regression/src/covariance.js
var valueGap_ = (val, mean3) => subtract_default2(val, mean3);
var square_ = (x) => x * x;
var root_ = (x) => x ** (1 / 2);
var productOfValuesGap_ = (x, y) => (index) => multiply_default2(
  valueGap_(nth_default2(index, x), mean_default2(x)),
  valueGap_(nth_default2(index, y), mean_default2(y))
);
var sumOfProductValuesGap_ = (x, y) => sum_default2(times_default2(productOfValuesGap_(x, y), length_default2(x)));
var errorRate_ = (trueAndPred) => subtract_default2(nth_default2(0, trueAndPred), nth_default2(1, trueAndPred));
var squareErrorRate_ = pipe2(errorRate_, square_);
var squareErrorRateArray_ = map_default2(squareErrorRate_);
var cost_ = pipe2(zip_default2, squareErrorRateArray_, mean_default2);
var costFunction = (yTrue, yPred) => cost_(yTrue, yPred);
var covariance = (x, y) => divide_default2(sumOfProductValuesGap_(x, y), length_default2(x));
var variance = (x) => covariance(x, x);
var std = (x) => root_(variance(x));
var pearson = (x, y) => divide_default2(covariance(x, y), multiply_default2(std(x), std(y)));
var score = (x, y) => square_(pearson(x, y));

// node_modules/clementreiffers-linear-regression/src/linear-regression.js
var getA_ = (x, y) => divide_default2(covariance(x, y), variance(x));
var getB_ = (x, y) => (a) => subtract_default2(mean_default2(y), multiply_default2(a, mean_default2(x)));
var getBFromListWithA_ = (x, y) => pipe2(nth_default2(0), getB_(x, y));
var predictNumber_ = (params) => (x) => add_default2(multiply_default2(params.a, x), params.b);
var predictArray_ = (params) => (x) => map_default2(predictNumber_(params))(x);
var isPredictNumber_ = (x) => equals_default2(type_default2(x), "Number");
var predict = (x, params) => computePred_(prop_default2("parameters", params), x);
var computePred_ = (params, x) => ifElse_default2(isPredictNumber_, predictNumber_(params), predictArray_(params))(x);
var computeLightLinearRegression = (x, y) => applySpec_default2({
  parameters: pipe2(
    append_default2(getA_(x, y)),
    converge_default2(append_default2, [getBFromListWithA_(x, y), identity_default2]),
    applySpec_default2({
      a: nth_default2(0),
      b: nth_default2(1)
    })
  )
})([]);
var computeLoudLinearRegression = (x, y) => {
  const lr = computeLightLinearRegression(x, y);
  const yPred = predict(x, lr);
  return {
    ...lr,
    trainData: { x, y },
    trainCurvePredict: yPred,
    statistics: {
      r2: score(x, y),
      cost: costFunction(y, yPred),
      pearson: pearson(x, y)
    }
  };
};
var linearRegression = (x, y, light = false) => light ? computeLightLinearRegression(x, y) : computeLoudLinearRegression(x, y);

// src/index.ts
var router = e();
var helloWorld = () => okResponse("helloworld");
var computeLinearRegression = () => {
  const x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const y = [2, 4, 6, 8, 10, 12, 14, 16, 18];
  const lin = linearRegression(x, y);
  return okResponse(String(predict(10, lin)));
};
var createAndHandleRouter = async (request, env, ctx) => {
  router.get("/helloworld", helloWorld).get("/getArtist/:artist", getArtist(env)).post("/addArtist/", addArtist(env)).get("/getAllArtists", getAllArtists(env)).get("/linear-regression", computeLinearRegression).all("*", notFound);
  return router.handle(request, env, ctx);
};
var src_default = { fetch: createAndHandleRouter };
export {
  src_default as default
};
//# sourceMappingURL=index.js.map
