/* Copyright 2017 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("pdfjs-dist/build/pdf.worker", [], factory);
	else if(typeof exports === 'object')
		exports["pdfjs-dist/build/pdf.worker"] = factory();
	else
		root["pdfjs-dist/build/pdf.worker"] = root.pdfjsDistBuildPdfWorker = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __w_pdfjs_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __w_pdfjs_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__w_pdfjs_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__w_pdfjs_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__w_pdfjs_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__w_pdfjs_require__.d = function(exports, name, getter) {
/******/ 		if(!__w_pdfjs_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__w_pdfjs_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__w_pdfjs_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__w_pdfjs_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__w_pdfjs_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __w_pdfjs_require__(__w_pdfjs_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unreachable = exports.warn = exports.utf8StringToString = exports.stringToUTF8String = exports.stringToPDFString = exports.stringToBytes = exports.string32 = exports.shadow = exports.setVerbosityLevel = exports.ReadableStream = exports.removeNullCharacters = exports.readUint32 = exports.readUint16 = exports.readInt8 = exports.log2 = exports.loadJpegStream = exports.isEvalSupported = exports.isLittleEndian = exports.createValidAbsoluteUrl = exports.isSameOrigin = exports.isNodeJS = exports.isSpace = exports.isString = exports.isNum = exports.isInt = exports.isEmptyObj = exports.isBool = exports.isArrayBuffer = exports.isArray = exports.info = exports.globalScope = exports.getVerbosityLevel = exports.getLookupTableFactory = exports.deprecated = exports.createObjectURL = exports.createPromiseCapability = exports.createBlob = exports.bytesToString = exports.assert = exports.arraysToBytes = exports.arrayByteLength = exports.FormatError = exports.XRefParseException = exports.Util = exports.UnknownErrorException = exports.UnexpectedResponseException = exports.TextRenderingMode = exports.StreamType = exports.StatTimer = exports.PasswordResponses = exports.PasswordException = exports.PageViewport = exports.NotImplementedException = exports.NativeImageDecoding = exports.MissingPDFException = exports.MissingDataException = exports.MessageHandler = exports.InvalidPDFException = exports.AbortException = exports.CMapCompressionType = exports.ImageKind = exports.FontType = exports.AnnotationType = exports.AnnotationFlag = exports.AnnotationFieldFlag = exports.AnnotationBorderStyleType = exports.UNSUPPORTED_FEATURES = exports.VERBOSITY_LEVELS = exports.OPS = exports.IDENTITY_MATRIX = exports.FONT_IDENTITY_MATRIX = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

__w_pdfjs_require__(36);

var _streams_polyfill = __w_pdfjs_require__(37);

var globalScope = typeof window !== 'undefined' && window.Math === Math ? window : typeof global !== 'undefined' && global.Math === Math ? global : typeof self !== 'undefined' && self.Math === Math ? self : undefined;
var FONT_IDENTITY_MATRIX = [0.001, 0, 0, 0.001, 0, 0];
var NativeImageDecoding = {
  NONE: 'none',
  DECODE: 'decode',
  DISPLAY: 'display'
};
var TextRenderingMode = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_ADD_TO_PATH: 4,
  STROKE_ADD_TO_PATH: 5,
  FILL_STROKE_ADD_TO_PATH: 6,
  ADD_TO_PATH: 7,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
};
var ImageKind = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
};
var AnnotationType = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26
};
var AnnotationFlag = {
  INVISIBLE: 0x01,
  HIDDEN: 0x02,
  PRINT: 0x04,
  NOZOOM: 0x08,
  NOROTATE: 0x10,
  NOVIEW: 0x20,
  READONLY: 0x40,
  LOCKED: 0x80,
  TOGGLENOVIEW: 0x100,
  LOCKEDCONTENTS: 0x200
};
var AnnotationFieldFlag = {
  READONLY: 0x0000001,
  REQUIRED: 0x0000002,
  NOEXPORT: 0x0000004,
  MULTILINE: 0x0001000,
  PASSWORD: 0x0002000,
  NOTOGGLETOOFF: 0x0004000,
  RADIO: 0x0008000,
  PUSHBUTTON: 0x0010000,
  COMBO: 0x0020000,
  EDIT: 0x0040000,
  SORT: 0x0080000,
  FILESELECT: 0x0100000,
  MULTISELECT: 0x0200000,
  DONOTSPELLCHECK: 0x0400000,
  DONOTSCROLL: 0x0800000,
  COMB: 0x1000000,
  RICHTEXT: 0x2000000,
  RADIOSINUNISON: 0x2000000,
  COMMITONSELCHANGE: 0x4000000
};
var AnnotationBorderStyleType = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
};
var StreamType = {
  UNKNOWN: 0,
  FLATE: 1,
  LZW: 2,
  DCT: 3,
  JPX: 4,
  JBIG: 5,
  A85: 6,
  AHX: 7,
  CCF: 8,
  RL: 9
};
var FontType = {
  UNKNOWN: 0,
  TYPE1: 1,
  TYPE1C: 2,
  CIDFONTTYPE0: 3,
  CIDFONTTYPE0C: 4,
  TRUETYPE: 5,
  CIDFONTTYPE2: 6,
  TYPE3: 7,
  OPENTYPE: 8,
  TYPE0: 9,
  MMTYPE1: 10
};
var VERBOSITY_LEVELS = {
  errors: 0,
  warnings: 1,
  infos: 5
};
var CMapCompressionType = {
  NONE: 0,
  BINARY: 1,
  STREAM: 2
};
var OPS = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotations: 78,
  endAnnotations: 79,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintJpegXObject: 82,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91
};
var verbosity = VERBOSITY_LEVELS.warnings;
function setVerbosityLevel(level) {
  verbosity = level;
}
function getVerbosityLevel() {
  return verbosity;
}
function info(msg) {
  if (verbosity >= VERBOSITY_LEVELS.infos) {
    console.log('Info: ' + msg);
  }
}
function warn(msg) {
  if (verbosity >= VERBOSITY_LEVELS.warnings) {
    console.log('Warning: ' + msg);
  }
}
function deprecated(details) {
  console.log('Deprecated API usage: ' + details);
}
function unreachable(msg) {
  throw new Error(msg);
}
function assert(cond, msg) {
  if (!cond) {
    unreachable(msg);
  }
}
var UNSUPPORTED_FEATURES = {
  unknown: 'unknown',
  forms: 'forms',
  javaScript: 'javaScript',
  smask: 'smask',
  shadingPattern: 'shadingPattern',
  font: 'font'
};
function isSameOrigin(baseUrl, otherUrl) {
  try {
    var base = new URL(baseUrl);
    if (!base.origin || base.origin === 'null') {
      return false;
    }
  } catch (e) {
    return false;
  }
  var other = new URL(otherUrl, base);
  return base.origin === other.origin;
}
function isValidProtocol(url) {
  if (!url) {
    return false;
  }
  switch (url.protocol) {
    case 'http:':
    case 'https:':
    case 'ftp:':
    case 'mailto:':
    case 'tel:':
      return true;
    default:
      return false;
  }
}
function createValidAbsoluteUrl(url, baseUrl) {
  if (!url) {
    return null;
  }
  try {
    var absoluteUrl = baseUrl ? new URL(url, baseUrl) : new URL(url);
    if (isValidProtocol(absoluteUrl)) {
      return absoluteUrl;
    }
  } catch (ex) {}
  return null;
}
function shadow(obj, prop, value) {
  Object.defineProperty(obj, prop, {
    value: value,
    enumerable: true,
    configurable: true,
    writable: false
  });
  return value;
}
function getLookupTableFactory(initializer) {
  var lookup;
  return function () {
    if (initializer) {
      lookup = Object.create(null);
      initializer(lookup);
      initializer = null;
    }
    return lookup;
  };
}
var PasswordResponses = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
var PasswordException = function PasswordExceptionClosure() {
  function PasswordException(msg, code) {
    this.name = 'PasswordException';
    this.message = msg;
    this.code = code;
  }
  PasswordException.prototype = new Error();
  PasswordException.constructor = PasswordException;
  return PasswordException;
}();
var UnknownErrorException = function UnknownErrorExceptionClosure() {
  function UnknownErrorException(msg, details) {
    this.name = 'UnknownErrorException';
    this.message = msg;
    this.details = details;
  }
  UnknownErrorException.prototype = new Error();
  UnknownErrorException.constructor = UnknownErrorException;
  return UnknownErrorException;
}();
var InvalidPDFException = function InvalidPDFExceptionClosure() {
  function InvalidPDFException(msg) {
    this.name = 'InvalidPDFException';
    this.message = msg;
  }
  InvalidPDFException.prototype = new Error();
  InvalidPDFException.constructor = InvalidPDFException;
  return InvalidPDFException;
}();
var MissingPDFException = function MissingPDFExceptionClosure() {
  function MissingPDFException(msg) {
    this.name = 'MissingPDFException';
    this.message = msg;
  }
  MissingPDFException.prototype = new Error();
  MissingPDFException.constructor = MissingPDFException;
  return MissingPDFException;
}();
var UnexpectedResponseException = function UnexpectedResponseExceptionClosure() {
  function UnexpectedResponseException(msg, status) {
    this.name = 'UnexpectedResponseException';
    this.message = msg;
    this.status = status;
  }
  UnexpectedResponseException.prototype = new Error();
  UnexpectedResponseException.constructor = UnexpectedResponseException;
  return UnexpectedResponseException;
}();
var NotImplementedException = function NotImplementedExceptionClosure() {
  function NotImplementedException(msg) {
    this.message = msg;
  }
  NotImplementedException.prototype = new Error();
  NotImplementedException.prototype.name = 'NotImplementedException';
  NotImplementedException.constructor = NotImplementedException;
  return NotImplementedException;
}();
var MissingDataException = function MissingDataExceptionClosure() {
  function MissingDataException(begin, end) {
    this.begin = begin;
    this.end = end;
    this.message = 'Missing data [' + begin + ', ' + end + ')';
  }
  MissingDataException.prototype = new Error();
  MissingDataException.prototype.name = 'MissingDataException';
  MissingDataException.constructor = MissingDataException;
  return MissingDataException;
}();
var XRefParseException = function XRefParseExceptionClosure() {
  function XRefParseException(msg) {
    this.message = msg;
  }
  XRefParseException.prototype = new Error();
  XRefParseException.prototype.name = 'XRefParseException';
  XRefParseException.constructor = XRefParseException;
  return XRefParseException;
}();
var FormatError = function FormatErrorClosure() {
  function FormatError(msg) {
    this.message = msg;
  }
  FormatError.prototype = new Error();
  FormatError.prototype.name = 'FormatError';
  FormatError.constructor = FormatError;
  return FormatError;
}();
var AbortException = function AbortExceptionClosure() {
  function AbortException(msg) {
    this.name = 'AbortException';
    this.message = msg;
  }
  AbortException.prototype = new Error();
  AbortException.constructor = AbortException;
  return AbortException;
}();
var NullCharactersRegExp = /\x00/g;
function removeNullCharacters(str) {
  if (typeof str !== 'string') {
    warn('The argument for removeNullCharacters must be a string.');
    return str;
  }
  return str.replace(NullCharactersRegExp, '');
}
function bytesToString(bytes) {
  assert(bytes !== null && (typeof bytes === 'undefined' ? 'undefined' : _typeof(bytes)) === 'object' && bytes.length !== undefined, 'Invalid argument for bytesToString');
  var length = bytes.length;
  var MAX_ARGUMENT_COUNT = 8192;
  if (length < MAX_ARGUMENT_COUNT) {
    return String.fromCharCode.apply(null, bytes);
  }
  var strBuf = [];
  for (var i = 0; i < length; i += MAX_ARGUMENT_COUNT) {
    var chunkEnd = Math.min(i + MAX_ARGUMENT_COUNT, length);
    var chunk = bytes.subarray(i, chunkEnd);
    strBuf.push(String.fromCharCode.apply(null, chunk));
  }
  return strBuf.join('');
}
function stringToBytes(str) {
  assert(typeof str === 'string', 'Invalid argument for stringToBytes');
  var length = str.length;
  var bytes = new Uint8Array(length);
  for (var i = 0; i < length; ++i) {
    bytes[i] = str.charCodeAt(i) & 0xFF;
  }
  return bytes;
}
function arrayByteLength(arr) {
  if (arr.length !== undefined) {
    return arr.length;
  }
  assert(arr.byteLength !== undefined);
  return arr.byteLength;
}
function arraysToBytes(arr) {
  if (arr.length === 1 && arr[0] instanceof Uint8Array) {
    return arr[0];
  }
  var resultLength = 0;
  var i,
      ii = arr.length;
  var item, itemLength;
  for (i = 0; i < ii; i++) {
    item = arr[i];
    itemLength = arrayByteLength(item);
    resultLength += itemLength;
  }
  var pos = 0;
  var data = new Uint8Array(resultLength);
  for (i = 0; i < ii; i++) {
    item = arr[i];
    if (!(item instanceof Uint8Array)) {
      if (typeof item === 'string') {
        item = stringToBytes(item);
      } else {
        item = new Uint8Array(item);
      }
    }
    itemLength = item.byteLength;
    data.set(item, pos);
    pos += itemLength;
  }
  return data;
}
function string32(value) {
  return String.fromCharCode(value >> 24 & 0xff, value >> 16 & 0xff, value >> 8 & 0xff, value & 0xff);
}
function log2(x) {
  var n = 1,
      i = 0;
  while (x > n) {
    n <<= 1;
    i++;
  }
  return i;
}
function readInt8(data, start) {
  return data[start] << 24 >> 24;
}
function readUint16(data, offset) {
  return data[offset] << 8 | data[offset + 1];
}
function readUint32(data, offset) {
  return (data[offset] << 24 | data[offset + 1] << 16 | data[offset + 2] << 8 | data[offset + 3]) >>> 0;
}
function isLittleEndian() {
  var buffer8 = new Uint8Array(4);
  buffer8[0] = 1;
  var view32 = new Uint32Array(buffer8.buffer, 0, 1);
  return view32[0] === 1;
}
function isEvalSupported() {
  try {
    new Function('');
    return true;
  } catch (e) {
    return false;
  }
}
var IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];
var Util = function UtilClosure() {
  function Util() {}
  var rgbBuf = ['rgb(', 0, ',', 0, ',', 0, ')'];
  Util.makeCssRgb = function Util_makeCssRgb(r, g, b) {
    rgbBuf[1] = r;
    rgbBuf[3] = g;
    rgbBuf[5] = b;
    return rgbBuf.join('');
  };
  Util.transform = function Util_transform(m1, m2) {
    return [m1[0] * m2[0] + m1[2] * m2[1], m1[1] * m2[0] + m1[3] * m2[1], m1[0] * m2[2] + m1[2] * m2[3], m1[1] * m2[2] + m1[3] * m2[3], m1[0] * m2[4] + m1[2] * m2[5] + m1[4], m1[1] * m2[4] + m1[3] * m2[5] + m1[5]];
  };
  Util.applyTransform = function Util_applyTransform(p, m) {
    var xt = p[0] * m[0] + p[1] * m[2] + m[4];
    var yt = p[0] * m[1] + p[1] * m[3] + m[5];
    return [xt, yt];
  };
  Util.applyInverseTransform = function Util_applyInverseTransform(p, m) {
    var d = m[0] * m[3] - m[1] * m[2];
    var xt = (p[0] * m[3] - p[1] * m[2] + m[2] * m[5] - m[4] * m[3]) / d;
    var yt = (-p[0] * m[1] + p[1] * m[0] + m[4] * m[1] - m[5] * m[0]) / d;
    return [xt, yt];
  };
  Util.getAxialAlignedBoundingBox = function Util_getAxialAlignedBoundingBox(r, m) {
    var p1 = Util.applyTransform(r, m);
    var p2 = Util.applyTransform(r.slice(2, 4), m);
    var p3 = Util.applyTransform([r[0], r[3]], m);
    var p4 = Util.applyTransform([r[2], r[1]], m);
    return [Math.min(p1[0], p2[0], p3[0], p4[0]), Math.min(p1[1], p2[1], p3[1], p4[1]), Math.max(p1[0], p2[0], p3[0], p4[0]), Math.max(p1[1], p2[1], p3[1], p4[1])];
  };
  Util.inverseTransform = function Util_inverseTransform(m) {
    var d = m[0] * m[3] - m[1] * m[2];
    return [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d, (m[2] * m[5] - m[4] * m[3]) / d, (m[4] * m[1] - m[5] * m[0]) / d];
  };
  Util.apply3dTransform = function Util_apply3dTransform(m, v) {
    return [m[0] * v[0] + m[1] * v[1] + m[2] * v[2], m[3] * v[0] + m[4] * v[1] + m[5] * v[2], m[6] * v[0] + m[7] * v[1] + m[8] * v[2]];
  };
  Util.singularValueDecompose2dScale = function Util_singularValueDecompose2dScale(m) {
    var transpose = [m[0], m[2], m[1], m[3]];
    var a = m[0] * transpose[0] + m[1] * transpose[2];
    var b = m[0] * transpose[1] + m[1] * transpose[3];
    var c = m[2] * transpose[0] + m[3] * transpose[2];
    var d = m[2] * transpose[1] + m[3] * transpose[3];
    var first = (a + d) / 2;
    var second = Math.sqrt((a + d) * (a + d) - 4 * (a * d - c * b)) / 2;
    var sx = first + second || 1;
    var sy = first - second || 1;
    return [Math.sqrt(sx), Math.sqrt(sy)];
  };
  Util.normalizeRect = function Util_normalizeRect(rect) {
    var r = rect.slice(0);
    if (rect[0] > rect[2]) {
      r[0] = rect[2];
      r[2] = rect[0];
    }
    if (rect[1] > rect[3]) {
      r[1] = rect[3];
      r[3] = rect[1];
    }
    return r;
  };
  Util.intersect = function Util_intersect(rect1, rect2) {
    function compare(a, b) {
      return a - b;
    }
    var orderedX = [rect1[0], rect1[2], rect2[0], rect2[2]].sort(compare),
        orderedY = [rect1[1], rect1[3], rect2[1], rect2[3]].sort(compare),
        result = [];
    rect1 = Util.normalizeRect(rect1);
    rect2 = Util.normalizeRect(rect2);
    if (orderedX[0] === rect1[0] && orderedX[1] === rect2[0] || orderedX[0] === rect2[0] && orderedX[1] === rect1[0]) {
      result[0] = orderedX[1];
      result[2] = orderedX[2];
    } else {
      return false;
    }
    if (orderedY[0] === rect1[1] && orderedY[1] === rect2[1] || orderedY[0] === rect2[1] && orderedY[1] === rect1[1]) {
      result[1] = orderedY[1];
      result[3] = orderedY[2];
    } else {
      return false;
    }
    return result;
  };
  Util.sign = function Util_sign(num) {
    return num < 0 ? -1 : 1;
  };
  var ROMAN_NUMBER_MAP = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  Util.toRoman = function Util_toRoman(number, lowerCase) {
    assert(isInt(number) && number > 0, 'The number should be a positive integer.');
    var pos,
        romanBuf = [];
    while (number >= 1000) {
      number -= 1000;
      romanBuf.push('M');
    }
    pos = number / 100 | 0;
    number %= 100;
    romanBuf.push(ROMAN_NUMBER_MAP[pos]);
    pos = number / 10 | 0;
    number %= 10;
    romanBuf.push(ROMAN_NUMBER_MAP[10 + pos]);
    romanBuf.push(ROMAN_NUMBER_MAP[20 + number]);
    var romanStr = romanBuf.join('');
    return lowerCase ? romanStr.toLowerCase() : romanStr;
  };
  Util.appendToArray = function Util_appendToArray(arr1, arr2) {
    Array.prototype.push.apply(arr1, arr2);
  };
  Util.prependToArray = function Util_prependToArray(arr1, arr2) {
    Array.prototype.unshift.apply(arr1, arr2);
  };
  Util.extendObj = function extendObj(obj1, obj2) {
    for (var key in obj2) {
      obj1[key] = obj2[key];
    }
  };
  Util.getInheritableProperty = function Util_getInheritableProperty(dict, name, getArray) {
    while (dict && !dict.has(name)) {
      dict = dict.get('Parent');
    }
    if (!dict) {
      return null;
    }
    return getArray ? dict.getArray(name) : dict.get(name);
  };
  Util.inherit = function Util_inherit(sub, base, prototype) {
    sub.prototype = Object.create(base.prototype);
    sub.prototype.constructor = sub;
    for (var prop in prototype) {
      sub.prototype[prop] = prototype[prop];
    }
  };
  Util.loadScript = function Util_loadScript(src, callback) {
    var script = document.createElement('script');
    var loaded = false;
    script.setAttribute('src', src);
    if (callback) {
      script.onload = function () {
        if (!loaded) {
          callback();
        }
        loaded = true;
      };
    }
    document.getElementsByTagName('head')[0].appendChild(script);
  };
  return Util;
}();
var PageViewport = function PageViewportClosure() {
  function PageViewport(viewBox, scale, rotation, offsetX, offsetY, dontFlip) {
    this.viewBox = viewBox;
    this.scale = scale;
    this.rotation = rotation;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    var centerX = (viewBox[2] + viewBox[0]) / 2;
    var centerY = (viewBox[3] + viewBox[1]) / 2;
    var rotateA, rotateB, rotateC, rotateD;
    rotation = rotation % 360;
    rotation = rotation < 0 ? rotation + 360 : rotation;
    switch (rotation) {
      case 180:
        rotateA = -1;
        rotateB = 0;
        rotateC = 0;
        rotateD = 1;
        break;
      case 90:
        rotateA = 0;
        rotateB = 1;
        rotateC = 1;
        rotateD = 0;
        break;
      case 270:
        rotateA = 0;
        rotateB = -1;
        rotateC = -1;
        rotateD = 0;
        break;
      default:
        rotateA = 1;
        rotateB = 0;
        rotateC = 0;
        rotateD = -1;
        break;
    }
    if (dontFlip) {
      rotateC = -rotateC;
      rotateD = -rotateD;
    }
    var offsetCanvasX, offsetCanvasY;
    var width, height;
    if (rotateA === 0) {
      offsetCanvasX = Math.abs(centerY - viewBox[1]) * scale + offsetX;
      offsetCanvasY = Math.abs(centerX - viewBox[0]) * scale + offsetY;
      width = Math.abs(viewBox[3] - viewBox[1]) * scale;
      height = Math.abs(viewBox[2] - viewBox[0]) * scale;
    } else {
      offsetCanvasX = Math.abs(centerX - viewBox[0]) * scale + offsetX;
      offsetCanvasY = Math.abs(centerY - viewBox[1]) * scale + offsetY;
      width = Math.abs(viewBox[2] - viewBox[0]) * scale;
      height = Math.abs(viewBox[3] - viewBox[1]) * scale;
    }
    this.transform = [rotateA * scale, rotateB * scale, rotateC * scale, rotateD * scale, offsetCanvasX - rotateA * scale * centerX - rotateC * scale * centerY, offsetCanvasY - rotateB * scale * centerX - rotateD * scale * centerY];
    this.width = width;
    this.height = height;
    this.fontScale = scale;
  }
  PageViewport.prototype = {
    clone: function PageViewPort_clone(args) {
      args = args || {};
      var scale = 'scale' in args ? args.scale : this.scale;
      var rotation = 'rotation' in args ? args.rotation : this.rotation;
      return new PageViewport(this.viewBox.slice(), scale, rotation, this.offsetX, this.offsetY, args.dontFlip);
    },
    convertToViewportPoint: function PageViewport_convertToViewportPoint(x, y) {
      return Util.applyTransform([x, y], this.transform);
    },
    convertToViewportRectangle: function PageViewport_convertToViewportRectangle(rect) {
      var tl = Util.applyTransform([rect[0], rect[1]], this.transform);
      var br = Util.applyTransform([rect[2], rect[3]], this.transform);
      return [tl[0], tl[1], br[0], br[1]];
    },
    convertToPdfPoint: function PageViewport_convertToPdfPoint(x, y) {
      return Util.applyInverseTransform([x, y], this.transform);
    }
  };
  return PageViewport;
}();
var PDFStringTranslateTable = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2D8, 0x2C7, 0x2C6, 0x2D9, 0x2DD, 0x2DB, 0x2DA, 0x2DC, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2022, 0x2020, 0x2021, 0x2026, 0x2014, 0x2013, 0x192, 0x2044, 0x2039, 0x203A, 0x2212, 0x2030, 0x201E, 0x201C, 0x201D, 0x2018, 0x2019, 0x201A, 0x2122, 0xFB01, 0xFB02, 0x141, 0x152, 0x160, 0x178, 0x17D, 0x131, 0x142, 0x153, 0x161, 0x17E, 0, 0x20AC];
function stringToPDFString(str) {
  var i,
      n = str.length,
      strBuf = [];
  if (str[0] === '\xFE' && str[1] === '\xFF') {
    for (i = 2; i < n; i += 2) {
      strBuf.push(String.fromCharCode(str.charCodeAt(i) << 8 | str.charCodeAt(i + 1)));
    }
  } else {
    for (i = 0; i < n; ++i) {
      var code = PDFStringTranslateTable[str.charCodeAt(i)];
      strBuf.push(code ? String.fromCharCode(code) : str.charAt(i));
    }
  }
  return strBuf.join('');
}
function stringToUTF8String(str) {
  return decodeURIComponent(escape(str));
}
function utf8StringToString(str) {
  return unescape(encodeURIComponent(str));
}
function isEmptyObj(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}
function isBool(v) {
  return typeof v === 'boolean';
}
function isInt(v) {
  return typeof v === 'number' && (v | 0) === v;
}
function isNum(v) {
  return typeof v === 'number';
}
function isString(v) {
  return typeof v === 'string';
}
function isArray(v) {
  return v instanceof Array;
}
function isArrayBuffer(v) {
  return (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' && v !== null && v.byteLength !== undefined;
}
function isSpace(ch) {
  return ch === 0x20 || ch === 0x09 || ch === 0x0D || ch === 0x0A;
}
function isNodeJS() {
  return (typeof process === 'undefined' ? 'undefined' : _typeof(process)) === 'object' && process + '' === '[object process]';
}
function createPromiseCapability() {
  var capability = {};
  capability.promise = new Promise(function (resolve, reject) {
    capability.resolve = resolve;
    capability.reject = reject;
  });
  return capability;
}
var StatTimer = function StatTimerClosure() {
  function rpad(str, pad, length) {
    while (str.length < length) {
      str += pad;
    }
    return str;
  }
  function StatTimer() {
    this.started = Object.create(null);
    this.times = [];
    this.enabled = true;
  }
  StatTimer.prototype = {
    time: function StatTimer_time(name) {
      if (!this.enabled) {
        return;
      }
      if (name in this.started) {
        warn('Timer is already running for ' + name);
      }
      this.started[name] = Date.now();
    },
    timeEnd: function StatTimer_timeEnd(name) {
      if (!this.enabled) {
        return;
      }
      if (!(name in this.started)) {
        warn('Timer has not been started for ' + name);
      }
      this.times.push({
        'name': name,
        'start': this.started[name],
        'end': Date.now()
      });
      delete this.started[name];
    },
    toString: function StatTimer_toString() {
      var i, ii;
      var times = this.times;
      var out = '';
      var longest = 0;
      for (i = 0, ii = times.length; i < ii; ++i) {
        var name = times[i]['name'];
        if (name.length > longest) {
          longest = name.length;
        }
      }
      for (i = 0, ii = times.length; i < ii; ++i) {
        var span = times[i];
        var duration = span.end - span.start;
        out += rpad(span['name'], ' ', longest) + ' ' + duration + 'ms\n';
      }
      return out;
    }
  };
  return StatTimer;
}();
var createBlob = function createBlob(data, contentType) {
  if (typeof Blob !== 'undefined') {
    return new Blob([data], { type: contentType });
  }
  throw new Error('The "Blob" constructor is not supported.');
};
var createObjectURL = function createObjectURLClosure() {
  var digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  return function createObjectURL(data, contentType) {
    var forceDataSchema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (!forceDataSchema && URL.createObjectURL) {
      var blob = createBlob(data, contentType);
      return URL.createObjectURL(blob);
    }
    var buffer = 'data:' + contentType + ';base64,';
    for (var i = 0, ii = data.length; i < ii; i += 3) {
      var b1 = data[i] & 0xFF;
      var b2 = data[i + 1] & 0xFF;
      var b3 = data[i + 2] & 0xFF;
      var d1 = b1 >> 2,
          d2 = (b1 & 3) << 4 | b2 >> 4;
      var d3 = i + 1 < ii ? (b2 & 0xF) << 2 | b3 >> 6 : 64;
      var d4 = i + 2 < ii ? b3 & 0x3F : 64;
      buffer += digits[d1] + digits[d2] + digits[d3] + digits[d4];
    }
    return buffer;
  };
}();
function resolveCall(fn, args) {
  var thisArg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (!fn) {
    return Promise.resolve(undefined);
  }
  return new Promise(function (resolve, reject) {
    resolve(fn.apply(thisArg, args));
  });
}
function wrapReason(reason) {
  if ((typeof reason === 'undefined' ? 'undefined' : _typeof(reason)) !== 'object') {
    return reason;
  }
  switch (reason.name) {
    case 'AbortException':
      return new AbortException(reason.message);
    case 'MissingPDFException':
      return new MissingPDFException(reason.message);
    case 'UnexpectedResponseException':
      return new UnexpectedResponseException(reason.message, reason.status);
    default:
      return new UnknownErrorException(reason.message, reason.details);
  }
}
function resolveOrReject(capability, success, reason) {
  if (success) {
    capability.resolve();
  } else {
    capability.reject(reason);
  }
}
function finalize(promise) {
  return Promise.resolve(promise).catch(function () {});
}
function MessageHandler(sourceName, targetName, comObj) {
  var _this = this;

  this.sourceName = sourceName;
  this.targetName = targetName;
  this.comObj = comObj;
  this.callbackId = 1;
  this.streamId = 1;
  this.postMessageTransfers = true;
  this.streamSinks = Object.create(null);
  this.streamControllers = Object.create(null);
  var callbacksCapabilities = this.callbacksCapabilities = Object.create(null);
  var ah = this.actionHandler = Object.create(null);
  this._onComObjOnMessage = function (event) {
    var data = event.data;
    if (data.targetName !== _this.sourceName) {
      return;
    }
    if (data.stream) {
      _this._processStreamMessage(data);
    } else if (data.isReply) {
      var callbackId = data.callbackId;
      if (data.callbackId in callbacksCapabilities) {
        var callback = callbacksCapabilities[callbackId];
        delete callbacksCapabilities[callbackId];
        if ('error' in data) {
          callback.reject(wrapReason(data.error));
        } else {
          callback.resolve(data.data);
        }
      } else {
        throw new Error('Cannot resolve callback ' + callbackId);
      }
    } else if (data.action in ah) {
      var action = ah[data.action];
      if (data.callbackId) {
        var _sourceName = _this.sourceName;
        var _targetName = data.sourceName;
        Promise.resolve().then(function () {
          return action[0].call(action[1], data.data);
        }).then(function (result) {
          comObj.postMessage({
            sourceName: _sourceName,
            targetName: _targetName,
            isReply: true,
            callbackId: data.callbackId,
            data: result
          });
        }, function (reason) {
          if (reason instanceof Error) {
            reason = reason + '';
          }
          comObj.postMessage({
            sourceName: _sourceName,
            targetName: _targetName,
            isReply: true,
            callbackId: data.callbackId,
            error: reason
          });
        });
      } else if (data.streamId) {
        _this._createStreamSink(data);
      } else {
        action[0].call(action[1], data.data);
      }
    } else {
      throw new Error('Unknown action from worker: ' + data.action);
    }
  };
  comObj.addEventListener('message', this._onComObjOnMessage);
}
MessageHandler.prototype = {
  on: function on(actionName, handler, scope) {
    var ah = this.actionHandler;
    if (ah[actionName]) {
      throw new Error('There is already an actionName called "' + actionName + '"');
    }
    ah[actionName] = [handler, scope];
  },
  send: function send(actionName, data, transfers) {
    var message = {
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: actionName,
      data: data
    };
    this.postMessage(message, transfers);
  },
  sendWithPromise: function sendWithPromise(actionName, data, transfers) {
    var callbackId = this.callbackId++;
    var message = {
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: actionName,
      data: data,
      callbackId: callbackId
    };
    var capability = createPromiseCapability();
    this.callbacksCapabilities[callbackId] = capability;
    try {
      this.postMessage(message, transfers);
    } catch (e) {
      capability.reject(e);
    }
    return capability.promise;
  },
  sendWithStream: function sendWithStream(actionName, data, queueingStrategy, transfers) {
    var _this2 = this;

    var streamId = this.streamId++;
    var sourceName = this.sourceName;
    var targetName = this.targetName;
    return new _streams_polyfill.ReadableStream({
      start: function start(controller) {
        var startCapability = createPromiseCapability();
        _this2.streamControllers[streamId] = {
          controller: controller,
          startCall: startCapability,
          isClosed: false
        };
        _this2.postMessage({
          sourceName: sourceName,
          targetName: targetName,
          action: actionName,
          streamId: streamId,
          data: data,
          desiredSize: controller.desiredSize
        });
        return startCapability.promise;
      },
      pull: function pull(controller) {
        var pullCapability = createPromiseCapability();
        _this2.streamControllers[streamId].pullCall = pullCapability;
        _this2.postMessage({
          sourceName: sourceName,
          targetName: targetName,
          stream: 'pull',
          streamId: streamId,
          desiredSize: controller.desiredSize
        });
        return pullCapability.promise;
      },
      cancel: function cancel(reason) {
        var cancelCapability = createPromiseCapability();
        _this2.streamControllers[streamId].cancelCall = cancelCapability;
        _this2.streamControllers[streamId].isClosed = true;
        _this2.postMessage({
          sourceName: sourceName,
          targetName: targetName,
          stream: 'cancel',
          reason: reason,
          streamId: streamId
        });
        return cancelCapability.promise;
      }
    }, queueingStrategy);
  },
  _createStreamSink: function _createStreamSink(data) {
    var _this3 = this;

    var self = this;
    var action = this.actionHandler[data.action];
    var streamId = data.streamId;
    var desiredSize = data.desiredSize;
    var sourceName = this.sourceName;
    var targetName = data.sourceName;
    var capability = createPromiseCapability();
    var sendStreamRequest = function sendStreamRequest(_ref) {
      var stream = _ref.stream,
          chunk = _ref.chunk,
          transfers = _ref.transfers,
          success = _ref.success,
          reason = _ref.reason;

      _this3.postMessage({
        sourceName: sourceName,
        targetName: targetName,
        stream: stream,
        streamId: streamId,
        chunk: chunk,
        success: success,
        reason: reason
      }, transfers);
    };
    var streamSink = {
      enqueue: function enqueue(chunk) {
        var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var transfers = arguments[2];

        if (this.isCancelled) {
          return;
        }
        var lastDesiredSize = this.desiredSize;
        this.desiredSize -= size;
        if (lastDesiredSize > 0 && this.desiredSize <= 0) {
          this.sinkCapability = createPromiseCapability();
          this.ready = this.sinkCapability.promise;
        }
        sendStreamRequest({
          stream: 'enqueue',
          chunk: chunk,
          transfers: transfers
        });
      },
      close: function close() {
        if (this.isCancelled) {
          return;
        }
        sendStreamRequest({ stream: 'close' });
        delete self.streamSinks[streamId];
      },
      error: function error(reason) {
        if (this.isCancelled) {
          return;
        }
        this.isCancelled = true;
        sendStreamRequest({
          stream: 'error',
          reason: reason
        });
      },

      sinkCapability: capability,
      onPull: null,
      onCancel: null,
      isCancelled: false,
      desiredSize: desiredSize,
      ready: null
    };
    streamSink.sinkCapability.resolve();
    streamSink.ready = streamSink.sinkCapability.promise;
    this.streamSinks[streamId] = streamSink;
    resolveCall(action[0], [data.data, streamSink], action[1]).then(function () {
      sendStreamRequest({
        stream: 'start_complete',
        success: true
      });
    }, function (reason) {
      sendStreamRequest({
        stream: 'start_complete',
        success: false,
        reason: reason
      });
    });
  },
  _processStreamMessage: function _processStreamMessage(data) {
    var _this4 = this;

    var sourceName = this.sourceName;
    var targetName = data.sourceName;
    var streamId = data.streamId;
    var sendStreamResponse = function sendStreamResponse(_ref2) {
      var stream = _ref2.stream,
          success = _ref2.success,
          reason = _ref2.reason;

      _this4.comObj.postMessage({
        sourceName: sourceName,
        targetName: targetName,
        stream: stream,
        success: success,
        streamId: streamId,
        reason: reason
      });
    };
    var deleteStreamController = function deleteStreamController() {
      Promise.all([_this4.streamControllers[data.streamId].startCall, _this4.streamControllers[data.streamId].pullCall, _this4.streamControllers[data.streamId].cancelCall].map(function (capability) {
        return capability && finalize(capability.promise);
      })).then(function () {
        delete _this4.streamControllers[data.streamId];
      });
    };
    switch (data.stream) {
      case 'start_complete':
        resolveOrReject(this.streamControllers[data.streamId].startCall, data.success, wrapReason(data.reason));
        break;
      case 'pull_complete':
        resolveOrReject(this.streamControllers[data.streamId].pullCall, data.success, wrapReason(data.reason));
        break;
      case 'pull':
        if (!this.streamSinks[data.streamId]) {
          sendStreamResponse({
            stream: 'pull_complete',
            success: true
          });
          break;
        }
        if (this.streamSinks[data.streamId].desiredSize <= 0 && data.desiredSize > 0) {
          this.streamSinks[data.streamId].sinkCapability.resolve();
        }
        this.streamSinks[data.streamId].desiredSize = data.desiredSize;
        resolveCall(this.streamSinks[data.streamId].onPull).then(function () {
          sendStreamResponse({
            stream: 'pull_complete',
            success: true
          });
        }, function (reason) {
          sendStreamResponse({
            stream: 'pull_complete',
            success: false,
            reason: reason
          });
        });
        break;
      case 'enqueue':
        assert(this.streamControllers[data.streamId], 'enqueue should have stream controller');
        if (!this.streamControllers[data.streamId].isClosed) {
          this.streamControllers[data.streamId].controller.enqueue(data.chunk);
        }
        break;
      case 'close':
        assert(this.streamControllers[data.streamId], 'close should have stream controller');
        if (this.streamControllers[data.streamId].isClosed) {
          break;
        }
        this.streamControllers[data.streamId].isClosed = true;
        this.streamControllers[data.streamId].controller.close();
        deleteStreamController();
        break;
      case 'error':
        assert(this.streamControllers[data.streamId], 'error should have stream controller');
        this.streamControllers[data.streamId].controller.error(wrapReason(data.reason));
        deleteStreamController();
        break;
      case 'cancel_complete':
        resolveOrReject(this.streamControllers[data.streamId].cancelCall, data.success, wrapReason(data.reason));
        deleteStreamController();
        break;
      case 'cancel':
        if (!this.streamSinks[data.streamId]) {
          break;
        }
        resolveCall(this.streamSinks[data.streamId].onCancel, [wrapReason(data.reason)]).then(function () {
          sendStreamResponse({
            stream: 'cancel_complete',
            success: true
          });
        }, function (reason) {
          sendStreamResponse({
            stream: 'cancel_complete',
            success: false,
            reason: reason
          });
        });
        this.streamSinks[data.streamId].sinkCapability.reject(wrapReason(data.reason));
        this.streamSinks[data.streamId].isCancelled = true;
        delete this.streamSinks[data.streamId];
        break;
      default:
        throw new Error('Unexpected stream case');
    }
  },
  postMessage: function postMessage(message, transfers) {
    if (transfers && this.postMessageTransfers) {
      this.comObj.postMessage(message, transfers);
    } else {
      this.comObj.postMessage(message);
    }
  },
  destroy: function destroy() {
    this.comObj.removeEventListener('message', this._onComObjOnMessage);
  }
};
function loadJpegStream(id, imageUrl, objs) {
  var img = new Image();
  img.onload = function loadJpegStream_onloadClosure() {
    objs.resolve(id, img);
  };
  img.onerror = function loadJpegStream_onerrorClosure() {
    objs.resolve(id, null);
    warn('Error during JPEG image loading');
  };
  img.src = imageUrl;
}
exports.FONT_IDENTITY_MATRIX = FONT_IDENTITY_MATRIX;
exports.IDENTITY_MATRIX = IDENTITY_MATRIX;
exports.OPS = OPS;
exports.VERBOSITY_LEVELS = VERBOSITY_LEVELS;
exports.UNSUPPORTED_FEATURES = UNSUPPORTED_FEATURES;
exports.AnnotationBorderStyleType = AnnotationBorderStyleType;
exports.AnnotationFieldFlag = AnnotationFieldFlag;
exports.AnnotationFlag = AnnotationFlag;
exports.AnnotationType = AnnotationType;
exports.FontType = FontType;
exports.ImageKind = ImageKind;
exports.CMapCompressionType = CMapCompressionType;
exports.AbortException = AbortException;
exports.InvalidPDFException = InvalidPDFException;
exports.MessageHandler = MessageHandler;
exports.MissingDataException = MissingDataException;
exports.MissingPDFException = MissingPDFException;
exports.NativeImageDecoding = NativeImageDecoding;
exports.NotImplementedException = NotImplementedException;
exports.PageViewport = PageViewport;
exports.PasswordException = PasswordException;
exports.PasswordResponses = PasswordResponses;
exports.StatTimer = StatTimer;
exports.StreamType = StreamType;
exports.TextRenderingMode = TextRenderingMode;
exports.UnexpectedResponseException = UnexpectedResponseException;
exports.UnknownErrorException = UnknownErrorException;
exports.Util = Util;
exports.XRefParseException = XRefParseException;
exports.FormatError = FormatError;
exports.arrayByteLength = arrayByteLength;
exports.arraysToBytes = arraysToBytes;
exports.assert = assert;
exports.bytesToString = bytesToString;
exports.createBlob = createBlob;
exports.createPromiseCapability = createPromiseCapability;
exports.createObjectURL = createObjectURL;
exports.deprecated = deprecated;
exports.getLookupTableFactory = getLookupTableFactory;
exports.getVerbosityLevel = getVerbosityLevel;
exports.globalScope = globalScope;
exports.info = info;
exports.isArray = isArray;
exports.isArrayBuffer = isArrayBuffer;
exports.isBool = isBool;
exports.isEmptyObj = isEmptyObj;
exports.isInt = isInt;
exports.isNum = isNum;
exports.isString = isString;
exports.isSpace = isSpace;
exports.isNodeJS = isNodeJS;
exports.isSameOrigin = isSameOrigin;
exports.createValidAbsoluteUrl = createValidAbsoluteUrl;
exports.isLittleEndian = isLittleEndian;
exports.isEvalSupported = isEvalSupported;
exports.loadJpegStream = loadJpegStream;
exports.log2 = log2;
exports.readInt8 = readInt8;
exports.readUint16 = readUint16;
exports.readUint32 = readUint32;
exports.removeNullCharacters = removeNullCharacters;
exports.ReadableStream = _streams_polyfill.ReadableStream;
exports.setVerbosityLevel = setVerbosityLevel;
exports.shadow = shadow;
exports.string32 = string32;
exports.stringToBytes = stringToBytes;
exports.stringToPDFString = stringToPDFString;
exports.stringToUTF8String = stringToUTF8String;
exports.utf8StringToString = utf8StringToString;
exports.warn = warn;
exports.unreachable = unreachable;

/***/ }),
/* 1 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isStream = exports.isRefsEqual = exports.isRef = exports.isName = exports.isDict = exports.isCmd = exports.isEOF = exports.RefSetCache = exports.RefSet = exports.Ref = exports.Name = exports.Dict = exports.Cmd = exports.EOF = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _util = __w_pdfjs_require__(0);

var EOF = {};
var Name = function NameClosure() {
  function Name(name) {
    this.name = name;
  }
  Name.prototype = {};
  var nameCache = Object.create(null);
  Name.get = function Name_get(name) {
    var nameValue = nameCache[name];
    return nameValue ? nameValue : nameCache[name] = new Name(name);
  };
  return Name;
}();
var Cmd = function CmdClosure() {
  function Cmd(cmd) {
    this.cmd = cmd;
  }
  Cmd.prototype = {};
  var cmdCache = Object.create(null);
  Cmd.get = function Cmd_get(cmd) {
    var cmdValue = cmdCache[cmd];
    return cmdValue ? cmdValue : cmdCache[cmd] = new Cmd(cmd);
  };
  return Cmd;
}();
var Dict = function DictClosure() {
  var nonSerializable = function nonSerializableClosure() {
    return nonSerializable;
  };
  function Dict(xref) {
    this._map = Object.create(null);
    this.xref = xref;
    this.objId = null;
    this.suppressEncryption = false;
    this.__nonSerializable__ = nonSerializable;
  }
  Dict.prototype = {
    assignXref: function Dict_assignXref(newXref) {
      this.xref = newXref;
    },
    get: function Dict_get(key1, key2, key3) {
      var value;
      var xref = this.xref,
          suppressEncryption = this.suppressEncryption;
      if (typeof (value = this._map[key1]) !== 'undefined' || key1 in this._map || typeof key2 === 'undefined') {
        return xref ? xref.fetchIfRef(value, suppressEncryption) : value;
      }
      if (typeof (value = this._map[key2]) !== 'undefined' || key2 in this._map || typeof key3 === 'undefined') {
        return xref ? xref.fetchIfRef(value, suppressEncryption) : value;
      }
      value = this._map[key3] || null;
      return xref ? xref.fetchIfRef(value, suppressEncryption) : value;
    },
    getAsync: function Dict_getAsync(key1, key2, key3) {
      var value;
      var xref = this.xref,
          suppressEncryption = this.suppressEncryption;
      if (typeof (value = this._map[key1]) !== 'undefined' || key1 in this._map || typeof key2 === 'undefined') {
        if (xref) {
          return xref.fetchIfRefAsync(value, suppressEncryption);
        }
        return Promise.resolve(value);
      }
      if (typeof (value = this._map[key2]) !== 'undefined' || key2 in this._map || typeof key3 === 'undefined') {
        if (xref) {
          return xref.fetchIfRefAsync(value, suppressEncryption);
        }
        return Promise.resolve(value);
      }
      value = this._map[key3] || null;
      if (xref) {
        return xref.fetchIfRefAsync(value, suppressEncryption);
      }
      return Promise.resolve(value);
    },
    getArray: function Dict_getArray(key1, key2, key3) {
      var value = this.get(key1, key2, key3);
      var xref = this.xref,
          suppressEncryption = this.suppressEncryption;
      if (!(0, _util.isArray)(value) || !xref) {
        return value;
      }
      value = value.slice();
      for (var i = 0, ii = value.length; i < ii; i++) {
        if (!isRef(value[i])) {
          continue;
        }
        value[i] = xref.fetch(value[i], suppressEncryption);
      }
      return value;
    },
    getRaw: function Dict_getRaw(key) {
      return this._map[key];
    },
    getKeys: function Dict_getKeys() {
      return Object.keys(this._map);
    },
    set: function Dict_set(key, value) {
      this._map[key] = value;
    },
    has: function Dict_has(key) {
      return key in this._map;
    },
    forEach: function Dict_forEach(callback) {
      for (var key in this._map) {
        callback(key, this.get(key));
      }
    }
  };
  Dict.empty = new Dict(null);
  Dict.merge = function (xref, dictArray) {
    var mergedDict = new Dict(xref);
    for (var i = 0, ii = dictArray.length; i < ii; i++) {
      var dict = dictArray[i];
      if (!isDict(dict)) {
        continue;
      }
      for (var keyName in dict._map) {
        if (mergedDict._map[keyName] !== undefined) {
          continue;
        }
        mergedDict._map[keyName] = dict._map[keyName];
      }
    }
    return mergedDict;
  };
  return Dict;
}();
var Ref = function RefClosure() {
  function Ref(num, gen) {
    this.num = num;
    this.gen = gen;
  }
  Ref.prototype = {
    toString: function Ref_toString() {
      var str = this.num + 'R';
      if (this.gen !== 0) {
        str += this.gen;
      }
      return str;
    }
  };
  return Ref;
}();
var RefSet = function RefSetClosure() {
  function RefSet() {
    this.dict = Object.create(null);
  }
  RefSet.prototype = {
    has: function RefSet_has(ref) {
      return ref.toString() in this.dict;
    },
    put: function RefSet_put(ref) {
      this.dict[ref.toString()] = true;
    },
    remove: function RefSet_remove(ref) {
      delete this.dict[ref.toString()];
    }
  };
  return RefSet;
}();
var RefSetCache = function RefSetCacheClosure() {
  function RefSetCache() {
    this.dict = Object.create(null);
  }
  RefSetCache.prototype = {
    get: function RefSetCache_get(ref) {
      return this.dict[ref.toString()];
    },
    has: function RefSetCache_has(ref) {
      return ref.toString() in this.dict;
    },
    put: function RefSetCache_put(ref, obj) {
      this.dict[ref.toString()] = obj;
    },
    putAlias: function RefSetCache_putAlias(ref, aliasRef) {
      this.dict[ref.toString()] = this.get(aliasRef);
    },
    forEach: function RefSetCache_forEach(fn, thisArg) {
      for (var i in this.dict) {
        fn.call(thisArg, this.dict[i]);
      }
    },
    clear: function RefSetCache_clear() {
      this.dict = Object.create(null);
    }
  };
  return RefSetCache;
}();
function isEOF(v) {
  return v === EOF;
}
function isName(v, name) {
  return v instanceof Name && (name === undefined || v.name === name);
}
function isCmd(v, cmd) {
  return v instanceof Cmd && (cmd === undefined || v.cmd === cmd);
}
function isDict(v, type) {
  return v instanceof Dict && (type === undefined || isName(v.get('Type'), type));
}
function isRef(v) {
  return v instanceof Ref;
}
function isRefsEqual(v1, v2) {
  return v1.num === v2.num && v1.gen === v2.gen;
}
function isStream(v) {
  return (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' && v !== null && v.getBytes !== undefined;
}
exports.EOF = EOF;
exports.Cmd = Cmd;
exports.Dict = Dict;
exports.Name = Name;
exports.Ref = Ref;
exports.RefSet = RefSet;
exports.RefSetCache = RefSetCache;
exports.isEOF = isEOF;
exports.isCmd = isCmd;
exports.isDict = isDict;
exports.isName = isName;
exports.isRef = isRef;
exports.isRefsEqual = isRefsEqual;
exports.isStream = isStream;

/***/ }),
/* 2 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LZWStream = exports.StringStream = exports.StreamsSequenceStream = exports.Stream = exports.RunLengthStream = exports.PredictorStream = exports.NullStream = exports.JpxStream = exports.JpegStream = exports.Jbig2Stream = exports.FlateStream = exports.DecodeStream = exports.DecryptStream = exports.CCITTFaxStream = exports.AsciiHexStream = exports.Ascii85Stream = undefined;

var _util = __w_pdfjs_require__(0);

var _primitives = __w_pdfjs_require__(1);

var _jbig = __w_pdfjs_require__(27);

var _jpg = __w_pdfjs_require__(28);

var _jpx = __w_pdfjs_require__(14);

var Stream = function StreamClosure() {
  function Stream(arrayBuffer, start, length, dict) {
    this.bytes = arrayBuffer instanceof Uint8Array ? arrayBuffer : new Uint8Array(arrayBuffer);
    this.start = start || 0;
    this.pos = this.start;
    this.end = start + length || this.bytes.length;
    this.dict = dict;
  }
  Stream.prototype = {
    get length() {
      return this.end - this.start;
    },
    get isEmpty() {
      return this.length === 0;
    },
    getByte: function Stream_getByte() {
      if (this.pos >= this.end) {
        return -1;
      }
      return this.bytes[this.pos++];
    },
    getUint16: function Stream_getUint16() {
      var b0 = this.getByte();
      var b1 = this.getByte();
      if (b0 === -1 || b1 === -1) {
        return -1;
      }
      return (b0 << 8) + b1;
    },
    getInt32: function Stream_getInt32() {
      var b0 = this.getByte();
      var b1 = this.getByte();
      var b2 = this.getByte();
      var b3 = this.getByte();
      return (b0 << 24) + (b1 << 16) + (b2 << 8) + b3;
    },
    getBytes: function Stream_getBytes(length) {
      var bytes = this.bytes;
      var pos = this.pos;
      var strEnd = this.end;
      if (!length) {
        return bytes.subarray(pos, strEnd);
      }
      var end = pos + length;
      if (end > strEnd) {
        end = strEnd;
      }
      this.pos = end;
      return bytes.subarray(pos, end);
    },
    peekByte: function Stream_peekByte() {
      var peekedByte = this.getByte();
      this.pos--;
      return peekedByte;
    },
    peekBytes: function Stream_peekBytes(length) {
      var bytes = this.getBytes(length);
      this.pos -= bytes.length;
      return bytes;
    },
    skip: function Stream_skip(n) {
      if (!n) {
        n = 1;
      }
      this.pos += n;
    },
    reset: function Stream_reset() {
      this.pos = this.start;
    },
    moveStart: function Stream_moveStart() {
      this.start = this.pos;
    },
    makeSubStream: function Stream_makeSubStream(start, length, dict) {
      return new Stream(this.bytes.buffer, start, length, dict);
    }
  };
  return Stream;
}();
var StringStream = function StringStreamClosure() {
  function StringStream(str) {
    var length = str.length;
    var bytes = new Uint8Array(length);
    for (var n = 0; n < length; ++n) {
      bytes[n] = str.charCodeAt(n);
    }
    Stream.call(this, bytes);
  }
  StringStream.prototype = Stream.prototype;
  return StringStream;
}();
var DecodeStream = function DecodeStreamClosure() {
  var emptyBuffer = new Uint8Array(0);
  function DecodeStream(maybeMinBufferLength) {
    this.pos = 0;
    this.bufferLength = 0;
    this.eof = false;
    this.buffer = emptyBuffer;
    this.minBufferLength = 512;
    if (maybeMinBufferLength) {
      while (this.minBufferLength < maybeMinBufferLength) {
        this.minBufferLength *= 2;
      }
    }
  }
  DecodeStream.prototype = {
    get isEmpty() {
      while (!this.eof && this.bufferLength === 0) {
        this.readBlock();
      }
      return this.bufferLength === 0;
    },
    ensureBuffer: function DecodeStream_ensureBuffer(requested) {
      var buffer = this.buffer;
      if (requested <= buffer.byteLength) {
        return buffer;
      }
      var size = this.minBufferLength;
      while (size < requested) {
        size *= 2;
      }
      var buffer2 = new Uint8Array(size);
      buffer2.set(buffer);
      return this.buffer = buffer2;
    },
    getByte: function DecodeStream_getByte() {
      var pos = this.pos;
      while (this.bufferLength <= pos) {
        if (this.eof) {
          return -1;
        }
        this.readBlock();
      }
      return this.buffer[this.pos++];
    },
    getUint16: function DecodeStream_getUint16() {
      var b0 = this.getByte();
      var b1 = this.getByte();
      if (b0 === -1 || b1 === -1) {
        return -1;
      }
      return (b0 << 8) + b1;
    },
    getInt32: function DecodeStream_getInt32() {
      var b0 = this.getByte();
      var b1 = this.getByte();
      var b2 = this.getByte();
      var b3 = this.getByte();
      return (b0 << 24) + (b1 << 16) + (b2 << 8) + b3;
    },
    getBytes: function DecodeStream_getBytes(length) {
      var end,
          pos = this.pos;
      if (length) {
        this.ensureBuffer(pos + length);
        end = pos + length;
        while (!this.eof && this.bufferLength < end) {
          this.readBlock();
        }
        var bufEnd = this.bufferLength;
        if (end > bufEnd) {
          end = bufEnd;
        }
      } else {
        while (!this.eof) {
          this.readBlock();
        }
        end = this.bufferLength;
      }
      this.pos = end;
      return this.buffer.subarray(pos, end);
    },
    peekByte: function DecodeStream_peekByte() {
      var peekedByte = this.getByte();
      this.pos--;
      return peekedByte;
    },
    peekBytes: function DecodeStream_peekBytes(length) {
      var bytes = this.getBytes(length);
      this.pos -= bytes.length;
      return bytes;
    },
    makeSubStream: function DecodeStream_makeSubStream(start, length, dict) {
      var end = start + length;
      while (this.bufferLength <= end && !this.eof) {
        this.readBlock();
      }
      return new Stream(this.buffer, start, length, dict);
    },
    skip: function DecodeStream_skip(n) {
      if (!n) {
        n = 1;
      }
      this.pos += n;
    },
    reset: function DecodeStream_reset() {
      this.pos = 0;
    },
    getBaseStreams: function DecodeStream_getBaseStreams() {
      if (this.str && this.str.getBaseStreams) {
        return this.str.getBaseStreams();
      }
      return [];
    }
  };
  return DecodeStream;
}();
var StreamsSequenceStream = function StreamsSequenceStreamClosure() {
  function StreamsSequenceStream(streams) {
    this.streams = streams;
    DecodeStream.call(this, null);
  }
  StreamsSequenceStream.prototype = Object.create(DecodeStream.prototype);
  StreamsSequenceStream.prototype.readBlock = function streamSequenceStreamReadBlock() {
    var streams = this.streams;
    if (streams.length === 0) {
      this.eof = true;
      return;
    }
    var stream = streams.shift();
    var chunk = stream.getBytes();
    var bufferLength = this.bufferLength;
    var newLength = bufferLength + chunk.length;
    var buffer = this.ensureBuffer(newLength);
    buffer.set(chunk, bufferLength);
    this.bufferLength = newLength;
  };
  StreamsSequenceStream.prototype.getBaseStreams = function StreamsSequenceStream_getBaseStreams() {
    var baseStreams = [];
    for (var i = 0, ii = this.streams.length; i < ii; i++) {
      var stream = this.streams[i];
      if (stream.getBaseStreams) {
        _util.Util.appendToArray(baseStreams, stream.getBaseStreams());
      }
    }
    return baseStreams;
  };
  return StreamsSequenceStream;
}();
var FlateStream = function FlateStreamClosure() {
  var codeLenCodeMap = new Int32Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  var lengthDecode = new Int32Array([0x00003, 0x00004, 0x00005, 0x00006, 0x00007, 0x00008, 0x00009, 0x0000a, 0x1000b, 0x1000d, 0x1000f, 0x10011, 0x20013, 0x20017, 0x2001b, 0x2001f, 0x30023, 0x3002b, 0x30033, 0x3003b, 0x40043, 0x40053, 0x40063, 0x40073, 0x50083, 0x500a3, 0x500c3, 0x500e3, 0x00102, 0x00102, 0x00102]);
  var distDecode = new Int32Array([0x00001, 0x00002, 0x00003, 0x00004, 0x10005, 0x10007, 0x20009, 0x2000d, 0x30011, 0x30019, 0x40021, 0x40031, 0x50041, 0x50061, 0x60081, 0x600c1, 0x70101, 0x70181, 0x80201, 0x80301, 0x90401, 0x90601, 0xa0801, 0xa0c01, 0xb1001, 0xb1801, 0xc2001, 0xc3001, 0xd4001, 0xd6001]);
  var fixedLitCodeTab = [new Int32Array([0x70100, 0x80050, 0x80010, 0x80118, 0x70110, 0x80070, 0x80030, 0x900c0, 0x70108, 0x80060, 0x80020, 0x900a0, 0x80000, 0x80080, 0x80040, 0x900e0, 0x70104, 0x80058, 0x80018, 0x90090, 0x70114, 0x80078, 0x80038, 0x900d0, 0x7010c, 0x80068, 0x80028, 0x900b0, 0x80008, 0x80088, 0x80048, 0x900f0, 0x70102, 0x80054, 0x80014, 0x8011c, 0x70112, 0x80074, 0x80034, 0x900c8, 0x7010a, 0x80064, 0x80024, 0x900a8, 0x80004, 0x80084, 0x80044, 0x900e8, 0x70106, 0x8005c, 0x8001c, 0x90098, 0x70116, 0x8007c, 0x8003c, 0x900d8, 0x7010e, 0x8006c, 0x8002c, 0x900b8, 0x8000c, 0x8008c, 0x8004c, 0x900f8, 0x70101, 0x80052, 0x80012, 0x8011a, 0x70111, 0x80072, 0x80032, 0x900c4, 0x70109, 0x80062, 0x80022, 0x900a4, 0x80002, 0x80082, 0x80042, 0x900e4, 0x70105, 0x8005a, 0x8001a, 0x90094, 0x70115, 0x8007a, 0x8003a, 0x900d4, 0x7010d, 0x8006a, 0x8002a, 0x900b4, 0x8000a, 0x8008a, 0x8004a, 0x900f4, 0x70103, 0x80056, 0x80016, 0x8011e, 0x70113, 0x80076, 0x80036, 0x900cc, 0x7010b, 0x80066, 0x80026, 0x900ac, 0x80006, 0x80086, 0x80046, 0x900ec, 0x70107, 0x8005e, 0x8001e, 0x9009c, 0x70117, 0x8007e, 0x8003e, 0x900dc, 0x7010f, 0x8006e, 0x8002e, 0x900bc, 0x8000e, 0x8008e, 0x8004e, 0x900fc, 0x70100, 0x80051, 0x80011, 0x80119, 0x70110, 0x80071, 0x80031, 0x900c2, 0x70108, 0x80061, 0x80021, 0x900a2, 0x80001, 0x80081, 0x80041, 0x900e2, 0x70104, 0x80059, 0x80019, 0x90092, 0x70114, 0x80079, 0x80039, 0x900d2, 0x7010c, 0x80069, 0x80029, 0x900b2, 0x80009, 0x80089, 0x80049, 0x900f2, 0x70102, 0x80055, 0x80015, 0x8011d, 0x70112, 0x80075, 0x80035, 0x900ca, 0x7010a, 0x80065, 0x80025, 0x900aa, 0x80005, 0x80085, 0x80045, 0x900ea, 0x70106, 0x8005d, 0x8001d, 0x9009a, 0x70116, 0x8007d, 0x8003d, 0x900da, 0x7010e, 0x8006d, 0x8002d, 0x900ba, 0x8000d, 0x8008d, 0x8004d, 0x900fa, 0x70101, 0x80053, 0x80013, 0x8011b, 0x70111, 0x80073, 0x80033, 0x900c6, 0x70109, 0x80063, 0x80023, 0x900a6, 0x80003, 0x80083, 0x80043, 0x900e6, 0x70105, 0x8005b, 0x8001b, 0x90096, 0x70115, 0x8007b, 0x8003b, 0x900d6, 0x7010d, 0x8006b, 0x8002b, 0x900b6, 0x8000b, 0x8008b, 0x8004b, 0x900f6, 0x70103, 0x80057, 0x80017, 0x8011f, 0x70113, 0x80077, 0x80037, 0x900ce, 0x7010b, 0x80067, 0x80027, 0x900ae, 0x80007, 0x80087, 0x80047, 0x900ee, 0x70107, 0x8005f, 0x8001f, 0x9009e, 0x70117, 0x8007f, 0x8003f, 0x900de, 0x7010f, 0x8006f, 0x8002f, 0x900be, 0x8000f, 0x8008f, 0x8004f, 0x900fe, 0x70100, 0x80050, 0x80010, 0x80118, 0x70110, 0x80070, 0x80030, 0x900c1, 0x70108, 0x80060, 0x80020, 0x900a1, 0x80000, 0x80080, 0x80040, 0x900e1, 0x70104, 0x80058, 0x80018, 0x90091, 0x70114, 0x80078, 0x80038, 0x900d1, 0x7010c, 0x80068, 0x80028, 0x900b1, 0x80008, 0x80088, 0x80048, 0x900f1, 0x70102, 0x80054, 0x80014, 0x8011c, 0x70112, 0x80074, 0x80034, 0x900c9, 0x7010a, 0x80064, 0x80024, 0x900a9, 0x80004, 0x80084, 0x80044, 0x900e9, 0x70106, 0x8005c, 0x8001c, 0x90099, 0x70116, 0x8007c, 0x8003c, 0x900d9, 0x7010e, 0x8006c, 0x8002c, 0x900b9, 0x8000c, 0x8008c, 0x8004c, 0x900f9, 0x70101, 0x80052, 0x80012, 0x8011a, 0x70111, 0x80072, 0x80032, 0x900c5, 0x70109, 0x80062, 0x80022, 0x900a5, 0x80002, 0x80082, 0x80042, 0x900e5, 0x70105, 0x8005a, 0x8001a, 0x90095, 0x70115, 0x8007a, 0x8003a, 0x900d5, 0x7010d, 0x8006a, 0x8002a, 0x900b5, 0x8000a, 0x8008a, 0x8004a, 0x900f5, 0x70103, 0x80056, 0x80016, 0x8011e, 0x70113, 0x80076, 0x80036, 0x900cd, 0x7010b, 0x80066, 0x80026, 0x900ad, 0x80006, 0x80086, 0x80046, 0x900ed, 0x70107, 0x8005e, 0x8001e, 0x9009d, 0x70117, 0x8007e, 0x8003e, 0x900dd, 0x7010f, 0x8006e, 0x8002e, 0x900bd, 0x8000e, 0x8008e, 0x8004e, 0x900fd, 0x70100, 0x80051, 0x80011, 0x80119, 0x70110, 0x80071, 0x80031, 0x900c3, 0x70108, 0x80061, 0x80021, 0x900a3, 0x80001, 0x80081, 0x80041, 0x900e3, 0x70104, 0x80059, 0x80019, 0x90093, 0x70114, 0x80079, 0x80039, 0x900d3, 0x7010c, 0x80069, 0x80029, 0x900b3, 0x80009, 0x80089, 0x80049, 0x900f3, 0x70102, 0x80055, 0x80015, 0x8011d, 0x70112, 0x80075, 0x80035, 0x900cb, 0x7010a, 0x80065, 0x80025, 0x900ab, 0x80005, 0x80085, 0x80045, 0x900eb, 0x70106, 0x8005d, 0x8001d, 0x9009b, 0x70116, 0x8007d, 0x8003d, 0x900db, 0x7010e, 0x8006d, 0x8002d, 0x900bb, 0x8000d, 0x8008d, 0x8004d, 0x900fb, 0x70101, 0x80053, 0x80013, 0x8011b, 0x70111, 0x80073, 0x80033, 0x900c7, 0x70109, 0x80063, 0x80023, 0x900a7, 0x80003, 0x80083, 0x80043, 0x900e7, 0x70105, 0x8005b, 0x8001b, 0x90097, 0x70115, 0x8007b, 0x8003b, 0x900d7, 0x7010d, 0x8006b, 0x8002b, 0x900b7, 0x8000b, 0x8008b, 0x8004b, 0x900f7, 0x70103, 0x80057, 0x80017, 0x8011f, 0x70113, 0x80077, 0x80037, 0x900cf, 0x7010b, 0x80067, 0x80027, 0x900af, 0x80007, 0x80087, 0x80047, 0x900ef, 0x70107, 0x8005f, 0x8001f, 0x9009f, 0x70117, 0x8007f, 0x8003f, 0x900df, 0x7010f, 0x8006f, 0x8002f, 0x900bf, 0x8000f, 0x8008f, 0x8004f, 0x900ff]), 9];
  var fixedDistCodeTab = [new Int32Array([0x50000, 0x50010, 0x50008, 0x50018, 0x50004, 0x50014, 0x5000c, 0x5001c, 0x50002, 0x50012, 0x5000a, 0x5001a, 0x50006, 0x50016, 0x5000e, 0x00000, 0x50001, 0x50011, 0x50009, 0x50019, 0x50005, 0x50015, 0x5000d, 0x5001d, 0x50003, 0x50013, 0x5000b, 0x5001b, 0x50007, 0x50017, 0x5000f, 0x00000]), 5];
  function FlateStream(str, maybeLength) {
    this.str = str;
    this.dict = str.dict;
    var cmf = str.getByte();
    var flg = str.getByte();
    if (cmf === -1 || flg === -1) {
      throw new _util.FormatError('Invalid header in flate stream: ' + cmf + ', ' + flg);
    }
    if ((cmf & 0x0f) !== 0x08) {
      throw new _util.FormatError('Unknown compression method in flate stream: ' + cmf + ', ' + flg);
    }
    if (((cmf << 8) + flg) % 31 !== 0) {
      throw new _util.FormatError('Bad FCHECK in flate stream: ' + cmf + ', ' + flg);
    }
    if (flg & 0x20) {
      throw new _util.FormatError('FDICT bit set in flate stream: ' + cmf + ', ' + flg);
    }
    this.codeSize = 0;
    this.codeBuf = 0;
    DecodeStream.call(this, maybeLength);
  }
  FlateStream.prototype = Object.create(DecodeStream.prototype);
  FlateStream.prototype.getBits = function FlateStream_getBits(bits) {
    var str = this.str;
    var codeSize = this.codeSize;
    var codeBuf = this.codeBuf;
    var b;
    while (codeSize < bits) {
      if ((b = str.getByte()) === -1) {
        throw new _util.FormatError('Bad encoding in flate stream');
      }
      codeBuf |= b << codeSize;
      codeSize += 8;
    }
    b = codeBuf & (1 << bits) - 1;
    this.codeBuf = codeBuf >> bits;
    this.codeSize = codeSize -= bits;
    return b;
  };
  FlateStream.prototype.getCode = function FlateStream_getCode(table) {
    var str = this.str;
    var codes = table[0];
    var maxLen = table[1];
    var codeSize = this.codeSize;
    var codeBuf = this.codeBuf;
    var b;
    while (codeSize < maxLen) {
      if ((b = str.getByte()) === -1) {
        break;
      }
      codeBuf |= b << codeSize;
      codeSize += 8;
    }
    var code = codes[codeBuf & (1 << maxLen) - 1];
    var codeLen = code >> 16;
    var codeVal = code & 0xffff;
    if (codeLen < 1 || codeSize < codeLen) {
      throw new _util.FormatError('Bad encoding in flate stream');
    }
    this.codeBuf = codeBuf >> codeLen;
    this.codeSize = codeSize - codeLen;
    return codeVal;
  };
  FlateStream.prototype.generateHuffmanTable = function flateStreamGenerateHuffmanTable(lengths) {
    var n = lengths.length;
    var maxLen = 0;
    var i;
    for (i = 0; i < n; ++i) {
      if (lengths[i] > maxLen) {
        maxLen = lengths[i];
      }
    }
    var size = 1 << maxLen;
    var codes = new Int32Array(size);
    for (var len = 1, code = 0, skip = 2; len <= maxLen; ++len, code <<= 1, skip <<= 1) {
      for (var val = 0; val < n; ++val) {
        if (lengths[val] === len) {
          var code2 = 0;
          var t = code;
          for (i = 0; i < len; ++i) {
            code2 = code2 << 1 | t & 1;
            t >>= 1;
          }
          for (i = code2; i < size; i += skip) {
            codes[i] = len << 16 | val;
          }
          ++code;
        }
      }
    }
    return [codes, maxLen];
  };
  FlateStream.prototype.readBlock = function FlateStream_readBlock() {
    var buffer, len;
    var str = this.str;
    var hdr = this.getBits(3);
    if (hdr & 1) {
      this.eof = true;
    }
    hdr >>= 1;
    if (hdr === 0) {
      var b;
      if ((b = str.getByte()) === -1) {
        throw new _util.FormatError('Bad block header in flate stream');
      }
      var blockLen = b;
      if ((b = str.getByte()) === -1) {
        throw new _util.FormatError('Bad block header in flate stream');
      }
      blockLen |= b << 8;
      if ((b = str.getByte()) === -1) {
        throw new _util.FormatError('Bad block header in flate stream');
      }
      var check = b;
      if ((b = str.getByte()) === -1) {
        throw new _util.FormatError('Bad block header in flate stream');
      }
      check |= b << 8;
      if (check !== (~blockLen & 0xffff) && (blockLen !== 0 || check !== 0)) {
        throw new _util.FormatError('Bad uncompressed block length in flate stream');
      }
      this.codeBuf = 0;
      this.codeSize = 0;
      var bufferLength = this.bufferLength;
      buffer = this.ensureBuffer(bufferLength + blockLen);
      var end = bufferLength + blockLen;
      this.bufferLength = end;
      if (blockLen === 0) {
        if (str.peekByte() === -1) {
          this.eof = true;
        }
      } else {
        for (var n = bufferLength; n < end; ++n) {
          if ((b = str.getByte()) === -1) {
            this.eof = true;
            break;
          }
          buffer[n] = b;
        }
      }
      return;
    }
    var litCodeTable;
    var distCodeTable;
    if (hdr === 1) {
      litCodeTable = fixedLitCodeTab;
      distCodeTable = fixedDistCodeTab;
    } else if (hdr === 2) {
      var numLitCodes = this.getBits(5) + 257;
      var numDistCodes = this.getBits(5) + 1;
      var numCodeLenCodes = this.getBits(4) + 4;
      var codeLenCodeLengths = new Uint8Array(codeLenCodeMap.length);
      var i;
      for (i = 0; i < numCodeLenCodes; ++i) {
        codeLenCodeLengths[codeLenCodeMap[i]] = this.getBits(3);
      }
      var codeLenCodeTab = this.generateHuffmanTable(codeLenCodeLengths);
      len = 0;
      i = 0;
      var codes = numLitCodes + numDistCodes;
      var codeLengths = new Uint8Array(codes);
      var bitsLength, bitsOffset, what;
      while (i < codes) {
        var code = this.getCode(codeLenCodeTab);
        if (code === 16) {
          bitsLength = 2;
          bitsOffset = 3;
          what = len;
        } else if (code === 17) {
          bitsLength = 3;
          bitsOffset = 3;
          what = len = 0;
        } else if (code === 18) {
          bitsLength = 7;
          bitsOffset = 11;
          what = len = 0;
        } else {
          codeLengths[i++] = len = code;
          continue;
        }
        var repeatLength = this.getBits(bitsLength) + bitsOffset;
        while (repeatLength-- > 0) {
          codeLengths[i++] = what;
        }
      }
      litCodeTable = this.generateHuffmanTable(codeLengths.subarray(0, numLitCodes));
      distCodeTable = this.generateHuffmanTable(codeLengths.subarray(numLitCodes, codes));
    } else {
      throw new _util.FormatError('Unknown block type in flate stream');
    }
    buffer = this.buffer;
    var limit = buffer ? buffer.length : 0;
    var pos = this.bufferLength;
    while (true) {
      var code1 = this.getCode(litCodeTable);
      if (code1 < 256) {
        if (pos + 1 >= limit) {
          buffer = this.ensureBuffer(pos + 1);
          limit = buffer.length;
        }
        buffer[pos++] = code1;
        continue;
      }
      if (code1 === 256) {
        this.bufferLength = pos;
        return;
      }
      code1 -= 257;
      code1 = lengthDecode[code1];
      var code2 = code1 >> 16;
      if (code2 > 0) {
        code2 = this.getBits(code2);
      }
      len = (code1 & 0xffff) + code2;
      code1 = this.getCode(distCodeTable);
      code1 = distDecode[code1];
      code2 = code1 >> 16;
      if (code2 > 0) {
        code2 = this.getBits(code2);
      }
      var dist = (code1 & 0xffff) + code2;
      if (pos + len >= limit) {
        buffer = this.ensureBuffer(pos + len);
        limit = buffer.length;
      }
      for (var k = 0; k < len; ++k, ++pos) {
        buffer[pos] = buffer[pos - dist];
      }
    }
  };
  return FlateStream;
}();
var PredictorStream = function PredictorStreamClosure() {
  function PredictorStream(str, maybeLength, params) {
    if (!(0, _primitives.isDict)(params)) {
      return str;
    }
    var predictor = this.predictor = params.get('Predictor') || 1;
    if (predictor <= 1) {
      return str;
    }
    if (predictor !== 2 && (predictor < 10 || predictor > 15)) {
      throw new _util.FormatError('Unsupported predictor: ' + predictor);
    }
    if (predictor === 2) {
      this.readBlock = this.readBlockTiff;
    } else {
      this.readBlock = this.readBlockPng;
    }
    this.str = str;
    this.dict = str.dict;
    var colors = this.colors = params.get('Colors') || 1;
    var bits = this.bits = params.get('BitsPerComponent') || 8;
    var columns = this.columns = params.get('Columns') || 1;
    this.pixBytes = colors * bits + 7 >> 3;
    this.rowBytes = columns * colors * bits + 7 >> 3;
    DecodeStream.call(this, maybeLength);
    return this;
  }
  PredictorStream.prototype = Object.create(DecodeStream.prototype);
  PredictorStream.prototype.readBlockTiff = function predictorStreamReadBlockTiff() {
    var rowBytes = this.rowBytes;
    var bufferLength = this.bufferLength;
    var buffer = this.ensureBuffer(bufferLength + rowBytes);
    var bits = this.bits;
    var colors = this.colors;
    var rawBytes = this.str.getBytes(rowBytes);
    this.eof = !rawBytes.length;
    if (this.eof) {
      return;
    }
    var inbuf = 0,
        outbuf = 0;
    var inbits = 0,
        outbits = 0;
    var pos = bufferLength;
    var i;
    if (bits === 1 && colors === 1) {
      for (i = 0; i < rowBytes; ++i) {
        var c = rawBytes[i] ^ inbuf;
        c ^= c >> 1;
        c ^= c >> 2;
        c ^= c >> 4;
        inbuf = (c & 1) << 7;
        buffer[pos++] = c;
      }
    } else if (bits === 8) {
      for (i = 0; i < colors; ++i) {
        buffer[pos++] = rawBytes[i];
      }
      for (; i < rowBytes; ++i) {
        buffer[pos] = buffer[pos - colors] + rawBytes[i];
        pos++;
      }
    } else {
      var compArray = new Uint8Array(colors + 1);
      var bitMask = (1 << bits) - 1;
      var j = 0,
          k = bufferLength;
      var columns = this.columns;
      for (i = 0; i < columns; ++i) {
        for (var kk = 0; kk < colors; ++kk) {
          if (inbits < bits) {
            inbuf = inbuf << 8 | rawBytes[j++] & 0xFF;
            inbits += 8;
          }
          compArray[kk] = compArray[kk] + (inbuf >> inbits - bits) & bitMask;
          inbits -= bits;
          outbuf = outbuf << bits | compArray[kk];
          outbits += bits;
          if (outbits >= 8) {
            buffer[k++] = outbuf >> outbits - 8 & 0xFF;
            outbits -= 8;
          }
        }
      }
      if (outbits > 0) {
        buffer[k++] = (outbuf << 8 - outbits) + (inbuf & (1 << 8 - outbits) - 1);
      }
    }
    this.bufferLength += rowBytes;
  };
  PredictorStream.prototype.readBlockPng = function predictorStreamReadBlockPng() {
    var rowBytes = this.rowBytes;
    var pixBytes = this.pixBytes;
    var predictor = this.str.getByte();
    var rawBytes = this.str.getBytes(rowBytes);
    this.eof = !rawBytes.length;
    if (this.eof) {
      return;
    }
    var bufferLength = this.bufferLength;
    var buffer = this.ensureBuffer(bufferLength + rowBytes);
    var prevRow = buffer.subarray(bufferLength - rowBytes, bufferLength);
    if (prevRow.length === 0) {
      prevRow = new Uint8Array(rowBytes);
    }
    var i,
        j = bufferLength,
        up,
        c;
    switch (predictor) {
      case 0:
        for (i = 0; i < rowBytes; ++i) {
          buffer[j++] = rawBytes[i];
        }
        break;
      case 1:
        for (i = 0; i < pixBytes; ++i) {
          buffer[j++] = rawBytes[i];
        }
        for (; i < rowBytes; ++i) {
          buffer[j] = buffer[j - pixBytes] + rawBytes[i] & 0xFF;
          j++;
        }
        break;
      case 2:
        for (i = 0; i < rowBytes; ++i) {
          buffer[j++] = prevRow[i] + rawBytes[i] & 0xFF;
        }
        break;
      case 3:
        for (i = 0; i < pixBytes; ++i) {
          buffer[j++] = (prevRow[i] >> 1) + rawBytes[i];
        }
        for (; i < rowBytes; ++i) {
          buffer[j] = (prevRow[i] + buffer[j - pixBytes] >> 1) + rawBytes[i] & 0xFF;
          j++;
        }
        break;
      case 4:
        for (i = 0; i < pixBytes; ++i) {
          up = prevRow[i];
          c = rawBytes[i];
          buffer[j++] = up + c;
        }
        for (; i < rowBytes; ++i) {
          up = prevRow[i];
          var upLeft = prevRow[i - pixBytes];
          var left = buffer[j - pixBytes];
          var p = left + up - upLeft;
          var pa = p - left;
          if (pa < 0) {
            pa = -pa;
          }
          var pb = p - up;
          if (pb < 0) {
            pb = -pb;
          }
          var pc = p - upLeft;
          if (pc < 0) {
            pc = -pc;
          }
          c = rawBytes[i];
          if (pa <= pb && pa <= pc) {
            buffer[j++] = left + c;
          } else if (pb <= pc) {
            buffer[j++] = up + c;
          } else {
            buffer[j++] = upLeft + c;
          }
        }
        break;
      default:
        throw new _util.FormatError('Unsupported predictor: ' + predictor);
    }
    this.bufferLength += rowBytes;
  };
  return PredictorStream;
}();
var JpegStream = function JpegStreamClosure() {
  function JpegStream(stream, maybeLength, dict, params) {
    var ch;
    while ((ch = stream.getByte()) !== -1) {
      if (ch === 0xFF) {
        stream.skip(-1);
        break;
      }
    }
    this.stream = stream;
    this.maybeLength = maybeLength;
    this.dict = dict;
    this.params = params;
    DecodeStream.call(this, maybeLength);
  }
  JpegStream.prototype = Object.create(DecodeStream.prototype);
  Object.defineProperty(JpegStream.prototype, 'bytes', {
    get: function JpegStream_bytes() {
      return (0, _util.shadow)(this, 'bytes', this.stream.getBytes(this.maybeLength));
    },
    configurable: true
  });
  JpegStream.prototype.ensureBuffer = function JpegStream_ensureBuffer(req) {
    if (this.bufferLength) {
      return;
    }
    var jpegImage = new _jpg.JpegImage();
    var decodeArr = this.dict.getArray('Decode', 'D');
    if (this.forceRGB && (0, _util.isArray)(decodeArr)) {
      var bitsPerComponent = this.dict.get('BitsPerComponent') || 8;
      var decodeArrLength = decodeArr.length;
      var transform = new Int32Array(decodeArrLength);
      var transformNeeded = false;
      var maxValue = (1 << bitsPerComponent) - 1;
      for (var i = 0; i < decodeArrLength; i += 2) {
        transform[i] = (decodeArr[i + 1] - decodeArr[i]) * 256 | 0;
        transform[i + 1] = decodeArr[i] * maxValue | 0;
        if (transform[i] !== 256 || transform[i + 1] !== 0) {
          transformNeeded = true;
        }
      }
      if (transformNeeded) {
        jpegImage.decodeTransform = transform;
      }
    }
    if ((0, _primitives.isDict)(this.params)) {
      var colorTransform = this.params.get('ColorTransform');
      if ((0, _util.isInt)(colorTransform)) {
        jpegImage.colorTransform = colorTransform;
      }
    }
    jpegImage.parse(this.bytes);
    var data = jpegImage.getData(this.drawWidth, this.drawHeight, this.forceRGB);
    this.buffer = data;
    this.bufferLength = data.length;
    this.eof = true;
  };
  JpegStream.prototype.getBytes = function JpegStream_getBytes(length) {
    this.ensureBuffer();
    return this.buffer;
  };
  JpegStream.prototype.getIR = function JpegStream_getIR(forceDataSchema) {
    return (0, _util.createObjectURL)(this.bytes, 'image/jpeg', forceDataSchema);
  };
  return JpegStream;
}();
var JpxStream = function JpxStreamClosure() {
  function JpxStream(stream, maybeLength, dict, params) {
    this.stream = stream;
    this.maybeLength = maybeLength;
    this.dict = dict;
    this.params = params;
    DecodeStream.call(this, maybeLength);
  }
  JpxStream.prototype = Object.create(DecodeStream.prototype);
  Object.defineProperty(JpxStream.prototype, 'bytes', {
    get: function JpxStream_bytes() {
      return (0, _util.shadow)(this, 'bytes', this.stream.getBytes(this.maybeLength));
    },
    configurable: true
  });
  JpxStream.prototype.ensureBuffer = function JpxStream_ensureBuffer(req) {
    if (this.bufferLength) {
      return;
    }
    var jpxImage = new _jpx.JpxImage();
    jpxImage.parse(this.bytes);
    var width = jpxImage.width;
    var height = jpxImage.height;
    var componentsCount = jpxImage.componentsCount;
    var tileCount = jpxImage.tiles.length;
    if (tileCount === 1) {
      this.buffer = jpxImage.tiles[0].items;
    } else {
      var data = new Uint8Array(width * height * componentsCount);
      for (var k = 0; k < tileCount; k++) {
        var tileComponents = jpxImage.tiles[k];
        var tileWidth = tileComponents.width;
        var tileHeight = tileComponents.height;
        var tileLeft = tileComponents.left;
        var tileTop = tileComponents.top;
        var src = tileComponents.items;
        var srcPosition = 0;
        var dataPosition = (width * tileTop + tileLeft) * componentsCount;
        var imgRowSize = width * componentsCount;
        var tileRowSize = tileWidth * componentsCount;
        for (var j = 0; j < tileHeight; j++) {
          var rowBytes = src.subarray(srcPosition, srcPosition + tileRowSize);
          data.set(rowBytes, dataPosition);
          srcPosition += tileRowSize;
          dataPosition += imgRowSize;
        }
      }
      this.buffer = data;
    }
    this.bufferLength = this.buffer.length;
    this.eof = true;
  };
  return JpxStream;
}();
var Jbig2Stream = function Jbig2StreamClosure() {
  function Jbig2Stream(stream, maybeLength, dict, params) {
    this.stream = stream;
    this.maybeLength = maybeLength;
    this.dict = dict;
    this.params = params;
    DecodeStream.call(this, maybeLength);
  }
  Jbig2Stream.prototype = Object.create(DecodeStream.prototype);
  Object.defineProperty(Jbig2Stream.prototype, 'bytes', {
    get: function Jbig2Stream_bytes() {
      return (0, _util.shadow)(this, 'bytes', this.stream.getBytes(this.maybeLength));
    },
    configurable: true
  });
  Jbig2Stream.prototype.ensureBuffer = function Jbig2Stream_ensureBuffer(req) {
    if (this.bufferLength) {
      return;
    }
    var jbig2Image = new _jbig.Jbig2Image();
    var chunks = [];
    if ((0, _primitives.isDict)(this.params)) {
      var globalsStream = this.params.get('JBIG2Globals');
      if ((0, _primitives.isStream)(globalsStream)) {
        var globals = globalsStream.getBytes();
        chunks.push({
          data: globals,
          start: 0,
          end: globals.length
        });
      }
    }
    chunks.push({
      data: this.bytes,
      start: 0,
      end: this.bytes.length
    });
    var data = jbig2Image.parseChunks(chunks);
    var dataLength = data.length;
    for (var i = 0; i < dataLength; i++) {
      data[i] ^= 0xFF;
    }
    this.buffer = data;
    this.bufferLength = dataLength;
    this.eof = true;
  };
  return Jbig2Stream;
}();
var DecryptStream = function DecryptStreamClosure() {
  function DecryptStream(str, maybeLength, decrypt) {
    this.str = str;
    this.dict = str.dict;
    this.decrypt = decrypt;
    this.nextChunk = null;
    this.initialized = false;
    DecodeStream.call(this, maybeLength);
  }
  var chunkSize = 512;
  DecryptStream.prototype = Object.create(DecodeStream.prototype);
  DecryptStream.prototype.readBlock = function DecryptStream_readBlock() {
    var chunk;
    if (this.initialized) {
      chunk = this.nextChunk;
    } else {
      chunk = this.str.getBytes(chunkSize);
      this.initialized = true;
    }
    if (!chunk || chunk.length === 0) {
      this.eof = true;
      return;
    }
    this.nextChunk = this.str.getBytes(chunkSize);
    var hasMoreData = this.nextChunk && this.nextChunk.length > 0;
    var decrypt = this.decrypt;
    chunk = decrypt(chunk, !hasMoreData);
    var bufferLength = this.bufferLength;
    var i,
        n = chunk.length;
    var buffer = this.ensureBuffer(bufferLength + n);
    for (i = 0; i < n; i++) {
      buffer[bufferLength++] = chunk[i];
    }
    this.bufferLength = bufferLength;
  };
  return DecryptStream;
}();
var Ascii85Stream = function Ascii85StreamClosure() {
  function Ascii85Stream(str, maybeLength) {
    this.str = str;
    this.dict = str.dict;
    this.input = new Uint8Array(5);
    if (maybeLength) {
      maybeLength = 0.8 * maybeLength;
    }
    DecodeStream.call(this, maybeLength);
  }
  Ascii85Stream.prototype = Object.create(DecodeStream.prototype);
  Ascii85Stream.prototype.readBlock = function Ascii85Stream_readBlock() {
    var TILDA_CHAR = 0x7E;
    var Z_LOWER_CHAR = 0x7A;
    var EOF = -1;
    var str = this.str;
    var c = str.getByte();
    while ((0, _util.isSpace)(c)) {
      c = str.getByte();
    }
    if (c === EOF || c === TILDA_CHAR) {
      this.eof = true;
      return;
    }
    var bufferLength = this.bufferLength,
        buffer;
    var i;
    if (c === Z_LOWER_CHAR) {
      buffer = this.ensureBuffer(bufferLength + 4);
      for (i = 0; i < 4; ++i) {
        buffer[bufferLength + i] = 0;
      }
      this.bufferLength += 4;
    } else {
      var input = this.input;
      input[0] = c;
      for (i = 1; i < 5; ++i) {
        c = str.getByte();
        while ((0, _util.isSpace)(c)) {
          c = str.getByte();
        }
        input[i] = c;
        if (c === EOF || c === TILDA_CHAR) {
          break;
        }
      }
      buffer = this.ensureBuffer(bufferLength + i - 1);
      this.bufferLength += i - 1;
      if (i < 5) {
        for (; i < 5; ++i) {
          input[i] = 0x21 + 84;
        }
        this.eof = true;
      }
      var t = 0;
      for (i = 0; i < 5; ++i) {
        t = t * 85 + (input[i] - 0x21);
      }
      for (i = 3; i >= 0; --i) {
        buffer[bufferLength + i] = t & 0xFF;
        t >>= 8;
      }
    }
  };
  return Ascii85Stream;
}();
var AsciiHexStream = function AsciiHexStreamClosure() {
  function AsciiHexStream(str, maybeLength) {
    this.str = str;
    this.dict = str.dict;
    this.firstDigit = -1;
    if (maybeLength) {
      maybeLength = 0.5 * maybeLength;
    }
    DecodeStream.call(this, maybeLength);
  }
  AsciiHexStream.prototype = Object.create(DecodeStream.prototype);
  AsciiHexStream.prototype.readBlock = function AsciiHexStream_readBlock() {
    var UPSTREAM_BLOCK_SIZE = 8000;
    var bytes = this.str.getBytes(UPSTREAM_BLOCK_SIZE);
    if (!bytes.length) {
      this.eof = true;
      return;
    }
    var maxDecodeLength = bytes.length + 1 >> 1;
    var buffer = this.ensureBuffer(this.bufferLength + maxDecodeLength);
    var bufferLength = this.bufferLength;
    var firstDigit = this.firstDigit;
    for (var i = 0, ii = bytes.length; i < ii; i++) {
      var ch = bytes[i],
          digit;
      if (ch >= 0x30 && ch <= 0x39) {
        digit = ch & 0x0F;
      } else if (ch >= 0x41 && ch <= 0x46 || ch >= 0x61 && ch <= 0x66) {
        digit = (ch & 0x0F) + 9;
      } else if (ch === 0x3E) {
        this.eof = true;
        break;
      } else {
        continue;
      }
      if (firstDigit < 0) {
        firstDigit = digit;
      } else {
        buffer[bufferLength++] = firstDigit << 4 | digit;
        firstDigit = -1;
      }
    }
    if (firstDigit >= 0 && this.eof) {
      buffer[bufferLength++] = firstDigit << 4;
      firstDigit = -1;
    }
    this.firstDigit = firstDigit;
    this.bufferLength = bufferLength;
  };
  return AsciiHexStream;
}();
var RunLengthStream = function RunLengthStreamClosure() {
  function RunLengthStream(str, maybeLength) {
    this.str = str;
    this.dict = str.dict;
    DecodeStream.call(this, maybeLength);
  }
  RunLengthStream.prototype = Object.create(DecodeStream.prototype);
  RunLengthStream.prototype.readBlock = function RunLengthStream_readBlock() {
    var repeatHeader = this.str.getBytes(2);
    if (!repeatHeader || repeatHeader.length < 2 || repeatHeader[0] === 128) {
      this.eof = true;
      return;
    }
    var buffer;
    var bufferLength = this.bufferLength;
    var n = repeatHeader[0];
    if (n < 128) {
      buffer = this.ensureBuffer(bufferLength + n + 1);
      buffer[bufferLength++] = repeatHeader[1];
      if (n > 0) {
        var source = this.str.getBytes(n);
        buffer.set(source, bufferLength);
        bufferLength += n;
      }
    } else {
      n = 257 - n;
      var b = repeatHeader[1];
      buffer = this.ensureBuffer(bufferLength + n + 1);
      for (var i = 0; i < n; i++) {
        buffer[bufferLength++] = b;
      }
    }
    this.bufferLength = bufferLength;
  };
  return RunLengthStream;
}();
var CCITTFaxStream = function CCITTFaxStreamClosure() {
  var ccittEOL = -2;
  var ccittEOF = -1;
  var twoDimPass = 0;
  var twoDimHoriz = 1;
  var twoDimVert0 = 2;
  var twoDimVertR1 = 3;
  var twoDimVertL1 = 4;
  var twoDimVertR2 = 5;
  var twoDimVertL2 = 6;
  var twoDimVertR3 = 7;
  var twoDimVertL3 = 8;
  var twoDimTable = [[-1, -1], [-1, -1], [7, twoDimVertL3], [7, twoDimVertR3], [6, twoDimVertL2], [6, twoDimVertL2], [6, twoDimVertR2], [6, twoDimVertR2], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0]];
  var whiteTable1 = [[-1, -1], [12, ccittEOL], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [11, 1792], [11, 1792], [12, 1984], [12, 2048], [12, 2112], [12, 2176], [12, 2240], [12, 2304], [11, 1856], [11, 1856], [11, 1920], [11, 1920], [12, 2368], [12, 2432], [12, 2496], [12, 2560]];
  var whiteTable2 = [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [8, 29], [8, 29], [8, 30], [8, 30], [8, 45], [8, 45], [8, 46], [8, 46], [7, 22], [7, 22], [7, 22], [7, 22], [7, 23], [7, 23], [7, 23], [7, 23], [8, 47], [8, 47], [8, 48], [8, 48], [6, 13], [6, 13], [6, 13], [6, 13], [6, 13], [6, 13], [6, 13], [6, 13], [7, 20], [7, 20], [7, 20], [7, 20], [8, 33], [8, 33], [8, 34], [8, 34], [8, 35], [8, 35], [8, 36], [8, 36], [8, 37], [8, 37], [8, 38], [8, 38], [7, 19], [7, 19], [7, 19], [7, 19], [8, 31], [8, 31], [8, 32], [8, 32], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 12], [6, 12], [6, 12], [6, 12], [6, 12], [6, 12], [6, 12], [6, 12], [8, 53], [8, 53], [8, 54], [8, 54], [7, 26], [7, 26], [7, 26], [7, 26], [8, 39], [8, 39], [8, 40], [8, 40], [8, 41], [8, 41], [8, 42], [8, 42], [8, 43], [8, 43], [8, 44], [8, 44], [7, 21], [7, 21], [7, 21], [7, 21], [7, 28], [7, 28], [7, 28], [7, 28], [8, 61], [8, 61], [8, 62], [8, 62], [8, 63], [8, 63], [8, 0], [8, 0], [8, 320], [8, 320], [8, 384], [8, 384], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [7, 27], [7, 27], [7, 27], [7, 27], [8, 59], [8, 59], [8, 60], [8, 60], [9, 1472], [9, 1536], [9, 1600], [9, 1728], [7, 18], [7, 18], [7, 18], [7, 18], [7, 24], [7, 24], [7, 24], [7, 24], [8, 49], [8, 49], [8, 50], [8, 50], [8, 51], [8, 51], [8, 52], [8, 52], [7, 25], [7, 25], [7, 25], [7, 25], [8, 55], [8, 55], [8, 56], [8, 56], [8, 57], [8, 57], [8, 58], [8, 58], [6, 192], [6, 192], [6, 192], [6, 192], [6, 192], [6, 192], [6, 192], [6, 192], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [8, 448], [8, 448], [8, 512], [8, 512], [9, 704], [9, 768], [8, 640], [8, 640], [8, 576], [8, 576], [9, 832], [9, 896], [9, 960], [9, 1024], [9, 1088], [9, 1152], [9, 1216], [9, 1280], [9, 1344], [9, 1408], [7, 256], [7, 256], [7, 256], [7, 256], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [6, 16], [6, 16], [6, 16], [6, 16], [6, 16], [6, 16], [6, 16], [6, 16], [6, 17], [6, 17], [6, 17], [6, 17], [6, 17], [6, 17], [6, 17], [6, 17], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [6, 14], [6, 14], [6, 14], [6, 14], [6, 14], [6, 14], [6, 14], [6, 14], [6, 15], [6, 15], [6, 15], [6, 15], [6, 15], [6, 15], [6, 15], [6, 15], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7]];
  var blackTable1 = [[-1, -1], [-1, -1], [12, ccittEOL], [12, ccittEOL], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [11, 1792], [11, 1792], [11, 1792], [11, 1792], [12, 1984], [12, 1984], [12, 2048], [12, 2048], [12, 2112], [12, 2112], [12, 2176], [12, 2176], [12, 2240], [12, 2240], [12, 2304], [12, 2304], [11, 1856], [11, 1856], [11, 1856], [11, 1856], [11, 1920], [11, 1920], [11, 1920], [11, 1920], [12, 2368], [12, 2368], [12, 2432], [12, 2432], [12, 2496], [12, 2496], [12, 2560], [12, 2560], [10, 18], [10, 18], [10, 18], [10, 18], [10, 18], [10, 18], [10, 18], [10, 18], [12, 52], [12, 52], [13, 640], [13, 704], [13, 768], [13, 832], [12, 55], [12, 55], [12, 56], [12, 56], [13, 1280], [13, 1344], [13, 1408], [13, 1472], [12, 59], [12, 59], [12, 60], [12, 60], [13, 1536], [13, 1600], [11, 24], [11, 24], [11, 24], [11, 24], [11, 25], [11, 25], [11, 25], [11, 25], [13, 1664], [13, 1728], [12, 320], [12, 320], [12, 384], [12, 384], [12, 448], [12, 448], [13, 512], [13, 576], [12, 53], [12, 53], [12, 54], [12, 54], [13, 896], [13, 960], [13, 1024], [13, 1088], [13, 1152], [13, 1216], [10, 64], [10, 64], [10, 64], [10, 64], [10, 64], [10, 64], [10, 64], [10, 64]];
  var blackTable2 = [[8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [11, 23], [11, 23], [12, 50], [12, 51], [12, 44], [12, 45], [12, 46], [12, 47], [12, 57], [12, 58], [12, 61], [12, 256], [10, 16], [10, 16], [10, 16], [10, 16], [10, 17], [10, 17], [10, 17], [10, 17], [12, 48], [12, 49], [12, 62], [12, 63], [12, 30], [12, 31], [12, 32], [12, 33], [12, 40], [12, 41], [11, 22], [11, 22], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [9, 15], [9, 15], [9, 15], [9, 15], [9, 15], [9, 15], [9, 15], [9, 15], [12, 128], [12, 192], [12, 26], [12, 27], [12, 28], [12, 29], [11, 19], [11, 19], [11, 20], [11, 20], [12, 34], [12, 35], [12, 36], [12, 37], [12, 38], [12, 39], [11, 21], [11, 21], [12, 42], [12, 43], [10, 0], [10, 0], [10, 0], [10, 0], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12]];
  var blackTable3 = [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [6, 9], [6, 8], [5, 7], [5, 7], [4, 6], [4, 6], [4, 6], [4, 6], [4, 5], [4, 5], [4, 5], [4, 5], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2]];
  function CCITTFaxStream(str, maybeLength, params) {
    this.str = str;
    this.dict = str.dict;
    params = params || _primitives.Dict.empty;
    this.encoding = params.get('K') || 0;
    this.eoline = params.get('EndOfLine') || false;
    this.byteAlign = params.get('EncodedByteAlign') || false;
    this.columns = params.get('Columns') || 1728;
    this.rows = params.get('Rows') || 0;
    var eoblock = params.get('EndOfBlock');
    if (eoblock === null || eoblock === undefined) {
      eoblock = true;
    }
    this.eoblock = eoblock;
    this.black = params.get('BlackIs1') || false;
    this.codingLine = new Uint32Array(this.columns + 1);
    this.refLine = new Uint32Array(this.columns + 2);
    this.codingLine[0] = this.columns;
    this.codingPos = 0;
    this.row = 0;
    this.nextLine2D = this.encoding < 0;
    this.inputBits = 0;
    this.inputBuf = 0;
    this.outputBits = 0;
    var code1;
    while ((code1 = this.lookBits(12)) === 0) {
      this.eatBits(1);
    }
    if (code1 === 1) {
      this.eatBits(12);
    }
    if (this.encoding > 0) {
      this.nextLine2D = !this.lookBits(1);
      this.eatBits(1);
    }
    DecodeStream.call(this, maybeLength);
  }
  CCITTFaxStream.prototype = Object.create(DecodeStream.prototype);
  CCITTFaxStream.prototype.readBlock = function CCITTFaxStream_readBlock() {
    while (!this.eof) {
      var c = this.lookChar();
      this.ensureBuffer(this.bufferLength + 1);
      this.buffer[this.bufferLength++] = c;
    }
  };
  CCITTFaxStream.prototype.addPixels = function ccittFaxStreamAddPixels(a1, blackPixels) {
    var codingLine = this.codingLine;
    var codingPos = this.codingPos;
    if (a1 > codingLine[codingPos]) {
      if (a1 > this.columns) {
        (0, _util.info)('row is wrong length');
        this.err = true;
        a1 = this.columns;
      }
      if (codingPos & 1 ^ blackPixels) {
        ++codingPos;
      }
      codingLine[codingPos] = a1;
    }
    this.codingPos = codingPos;
  };
  CCITTFaxStream.prototype.addPixelsNeg = function ccittFaxStreamAddPixelsNeg(a1, blackPixels) {
    var codingLine = this.codingLine;
    var codingPos = this.codingPos;
    if (a1 > codingLine[codingPos]) {
      if (a1 > this.columns) {
        (0, _util.info)('row is wrong length');
        this.err = true;
        a1 = this.columns;
      }
      if (codingPos & 1 ^ blackPixels) {
        ++codingPos;
      }
      codingLine[codingPos] = a1;
    } else if (a1 < codingLine[codingPos]) {
      if (a1 < 0) {
        (0, _util.info)('invalid code');
        this.err = true;
        a1 = 0;
      }
      while (codingPos > 0 && a1 < codingLine[codingPos - 1]) {
        --codingPos;
      }
      codingLine[codingPos] = a1;
    }
    this.codingPos = codingPos;
  };
  CCITTFaxStream.prototype.lookChar = function CCITTFaxStream_lookChar() {
    var refLine = this.refLine;
    var codingLine = this.codingLine;
    var columns = this.columns;
    var refPos, blackPixels, bits, i;
    if (this.outputBits === 0) {
      if (this.eof) {
        return null;
      }
      this.err = false;
      var code1, code2, code3;
      if (this.nextLine2D) {
        for (i = 0; codingLine[i] < columns; ++i) {
          refLine[i] = codingLine[i];
        }
        refLine[i++] = columns;
        refLine[i] = columns;
        codingLine[0] = 0;
        this.codingPos = 0;
        refPos = 0;
        blackPixels = 0;
        while (codingLine[this.codingPos] < columns) {
          code1 = this.getTwoDimCode();
          switch (code1) {
            case twoDimPass:
              this.addPixels(refLine[refPos + 1], blackPixels);
              if (refLine[refPos + 1] < columns) {
                refPos += 2;
              }
              break;
            case twoDimHoriz:
              code1 = code2 = 0;
              if (blackPixels) {
                do {
                  code1 += code3 = this.getBlackCode();
                } while (code3 >= 64);
                do {
                  code2 += code3 = this.getWhiteCode();
                } while (code3 >= 64);
              } else {
                do {
                  code1 += code3 = this.getWhiteCode();
                } while (code3 >= 64);
                do {
                  code2 += code3 = this.getBlackCode();
                } while (code3 >= 64);
              }
              this.addPixels(codingLine[this.codingPos] + code1, blackPixels);
              if (codingLine[this.codingPos] < columns) {
                this.addPixels(codingLine[this.codingPos] + code2, blackPixels ^ 1);
              }
              while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                refPos += 2;
              }
              break;
            case twoDimVertR3:
              this.addPixels(refLine[refPos] + 3, blackPixels);
              blackPixels ^= 1;
              if (codingLine[this.codingPos] < columns) {
                ++refPos;
                while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                  refPos += 2;
                }
              }
              break;
            case twoDimVertR2:
              this.addPixels(refLine[refPos] + 2, blackPixels);
              blackPixels ^= 1;
              if (codingLine[this.codingPos] < columns) {
                ++refPos;
                while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                  refPos += 2;
                }
              }
              break;
            case twoDimVertR1:
              this.addPixels(refLine[refPos] + 1, blackPixels);
              blackPixels ^= 1;
              if (codingLine[this.codingPos] < columns) {
                ++refPos;
                while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                  refPos += 2;
                }
              }
              break;
            case twoDimVert0:
              this.addPixels(refLine[refPos], blackPixels);
              blackPixels ^= 1;
              if (codingLine[this.codingPos] < columns) {
                ++refPos;
                while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                  refPos += 2;
                }
              }
              break;
            case twoDimVertL3:
              this.addPixelsNeg(refLine[refPos] - 3, blackPixels);
              blackPixels ^= 1;
              if (codingLine[this.codingPos] < columns) {
                if (refPos > 0) {
                  --refPos;
                } else {
                  ++refPos;
                }
                while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                  refPos += 2;
                }
              }
              break;
            case twoDimVertL2:
              this.addPixelsNeg(refLine[refPos] - 2, blackPixels);
              blackPixels ^= 1;
              if (codingLine[this.codingPos] < columns) {
                if (refPos > 0) {
                  --refPos;
                } else {
                  ++refPos;
                }
                while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                  refPos += 2;
                }
              }
              break;
            case twoDimVertL1:
              this.addPixelsNeg(refLine[refPos] - 1, blackPixels);
              blackPixels ^= 1;
              if (codingLine[this.codingPos] < columns) {
                if (refPos > 0) {
                  --refPos;
                } else {
                  ++refPos;
                }
                while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                  refPos += 2;
                }
              }
              break;
            case ccittEOF:
              this.addPixels(columns, 0);
              this.eof = true;
              break;
            default:
              (0, _util.info)('bad 2d code');
              this.addPixels(columns, 0);
              this.err = true;
          }
        }
      } else {
        codingLine[0] = 0;
        this.codingPos = 0;
        blackPixels = 0;
        while (codingLine[this.codingPos] < columns) {
          code1 = 0;
          if (blackPixels) {
            do {
              code1 += code3 = this.getBlackCode();
            } while (code3 >= 64);
          } else {
            do {
              code1 += code3 = this.getWhiteCode();
            } while (code3 >= 64);
          }
          this.addPixels(codingLine[this.codingPos] + code1, blackPixels);
          blackPixels ^= 1;
        }
      }
      var gotEOL = false;
      if (this.byteAlign) {
        this.inputBits &= ~7;
      }
      if (!this.eoblock && this.row === this.rows - 1) {
        this.eof = true;
      } else {
        code1 = this.lookBits(12);
        if (this.eoline) {
          while (code1 !== ccittEOF && code1 !== 1) {
            this.eatBits(1);
            code1 = this.lookBits(12);
          }
        } else {
          while (code1 === 0) {
            this.eatBits(1);
            code1 = this.lookBits(12);
          }
        }
        if (code1 === 1) {
          this.eatBits(12);
          gotEOL = true;
        } else if (code1 === ccittEOF) {
          this.eof = true;
        }
      }
      if (!this.eof && this.encoding > 0) {
        this.nextLine2D = !this.lookBits(1);
        this.eatBits(1);
      }
      if (this.eoblock && gotEOL && this.byteAlign) {
        code1 = this.lookBits(12);
        if (code1 === 1) {
          this.eatBits(12);
          if (this.encoding > 0) {
            this.lookBits(1);
            this.eatBits(1);
          }
          if (this.encoding >= 0) {
            for (i = 0; i < 4; ++i) {
              code1 = this.lookBits(12);
              if (code1 !== 1) {
                (0, _util.info)('bad rtc code: ' + code1);
              }
              this.eatBits(12);
              if (this.encoding > 0) {
                this.lookBits(1);
                this.eatBits(1);
              }
            }
          }
          this.eof = true;
        }
      } else if (this.err && this.eoline) {
        while (true) {
          code1 = this.lookBits(13);
          if (code1 === ccittEOF) {
            this.eof = true;
            return null;
          }
          if (code1 >> 1 === 1) {
            break;
          }
          this.eatBits(1);
        }
        this.eatBits(12);
        if (this.encoding > 0) {
          this.eatBits(1);
          this.nextLine2D = !(code1 & 1);
        }
      }
      if (codingLine[0] > 0) {
        this.outputBits = codingLine[this.codingPos = 0];
      } else {
        this.outputBits = codingLine[this.codingPos = 1];
      }
      this.row++;
    }
    var c;
    if (this.outputBits >= 8) {
      c = this.codingPos & 1 ? 0 : 0xFF;
      this.outputBits -= 8;
      if (this.outputBits === 0 && codingLine[this.codingPos] < columns) {
        this.codingPos++;
        this.outputBits = codingLine[this.codingPos] - codingLine[this.codingPos - 1];
      }
    } else {
      bits = 8;
      c = 0;
      do {
        if (this.outputBits > bits) {
          c <<= bits;
          if (!(this.codingPos & 1)) {
            c |= 0xFF >> 8 - bits;
          }
          this.outputBits -= bits;
          bits = 0;
        } else {
          c <<= this.outputBits;
          if (!(this.codingPos & 1)) {
            c |= 0xFF >> 8 - this.outputBits;
          }
          bits -= this.outputBits;
          this.outputBits = 0;
          if (codingLine[this.codingPos] < columns) {
            this.codingPos++;
            this.outputBits = codingLine[this.codingPos] - codingLine[this.codingPos - 1];
          } else if (bits > 0) {
            c <<= bits;
            bits = 0;
          }
        }
      } while (bits);
    }
    if (this.black) {
      c ^= 0xFF;
    }
    return c;
  };
  CCITTFaxStream.prototype.findTableCode = function ccittFaxStreamFindTableCode(start, end, table, limit) {
    var limitValue = limit || 0;
    for (var i = start; i <= end; ++i) {
      var code = this.lookBits(i);
      if (code === ccittEOF) {
        return [true, 1, false];
      }
      if (i < end) {
        code <<= end - i;
      }
      if (!limitValue || code >= limitValue) {
        var p = table[code - limitValue];
        if (p[0] === i) {
          this.eatBits(i);
          return [true, p[1], true];
        }
      }
    }
    return [false, 0, false];
  };
  CCITTFaxStream.prototype.getTwoDimCode = function ccittFaxStreamGetTwoDimCode() {
    var code = 0;
    var p;
    if (this.eoblock) {
      code = this.lookBits(7);
      p = twoDimTable[code];
      if (p && p[0] > 0) {
        this.eatBits(p[0]);
        return p[1];
      }
    } else {
      var result = this.findTableCode(1, 7, twoDimTable);
      if (result[0] && result[2]) {
        return result[1];
      }
    }
    (0, _util.info)('Bad two dim code');
    return ccittEOF;
  };
  CCITTFaxStream.prototype.getWhiteCode = function ccittFaxStreamGetWhiteCode() {
    var code = 0;
    var p;
    if (this.eoblock) {
      code = this.lookBits(12);
      if (code === ccittEOF) {
        return 1;
      }
      if (code >> 5 === 0) {
        p = whiteTable1[code];
      } else {
        p = whiteTable2[code >> 3];
      }
      if (p[0] > 0) {
        this.eatBits(p[0]);
        return p[1];
      }
    } else {
      var result = this.findTableCode(1, 9, whiteTable2);
      if (result[0]) {
        return result[1];
      }
      result = this.findTableCode(11, 12, whiteTable1);
      if (result[0]) {
        return result[1];
      }
    }
    (0, _util.info)('bad white code');
    this.eatBits(1);
    return 1;
  };
  CCITTFaxStream.prototype.getBlackCode = function ccittFaxStreamGetBlackCode() {
    var code, p;
    if (this.eoblock) {
      code = this.lookBits(13);
      if (code === ccittEOF) {
        return 1;
      }
      if (code >> 7 === 0) {
        p = blackTable1[code];
      } else if (code >> 9 === 0 && code >> 7 !== 0) {
        p = blackTable2[(code >> 1) - 64];
      } else {
        p = blackTable3[code >> 7];
      }
      if (p[0] > 0) {
        this.eatBits(p[0]);
        return p[1];
      }
    } else {
      var result = this.findTableCode(2, 6, blackTable3);
      if (result[0]) {
        return result[1];
      }
      result = this.findTableCode(7, 12, blackTable2, 64);
      if (result[0]) {
        return result[1];
      }
      result = this.findTableCode(10, 13, blackTable1);
      if (result[0]) {
        return result[1];
      }
    }
    (0, _util.info)('bad black code');
    this.eatBits(1);
    return 1;
  };
  CCITTFaxStream.prototype.lookBits = function CCITTFaxStream_lookBits(n) {
    var c;
    while (this.inputBits < n) {
      if ((c = this.str.getByte()) === -1) {
        if (this.inputBits === 0) {
          return ccittEOF;
        }
        return this.inputBuf << n - this.inputBits & 0xFFFF >> 16 - n;
      }
      this.inputBuf = this.inputBuf << 8 | c;
      this.inputBits += 8;
    }
    return this.inputBuf >> this.inputBits - n & 0xFFFF >> 16 - n;
  };
  CCITTFaxStream.prototype.eatBits = function CCITTFaxStream_eatBits(n) {
    if ((this.inputBits -= n) < 0) {
      this.inputBits = 0;
    }
  };
  return CCITTFaxStream;
}();
var LZWStream = function LZWStreamClosure() {
  function LZWStream(str, maybeLength, earlyChange) {
    this.str = str;
    this.dict = str.dict;
    this.cachedData = 0;
    this.bitsCached = 0;
    var maxLzwDictionarySize = 4096;
    var lzwState = {
      earlyChange: earlyChange,
      codeLength: 9,
      nextCode: 258,
      dictionaryValues: new Uint8Array(maxLzwDictionarySize),
      dictionaryLengths: new Uint16Array(maxLzwDictionarySize),
      dictionaryPrevCodes: new Uint16Array(maxLzwDictionarySize),
      currentSequence: new Uint8Array(maxLzwDictionarySize),
      currentSequenceLength: 0
    };
    for (var i = 0; i < 256; ++i) {
      lzwState.dictionaryValues[i] = i;
      lzwState.dictionaryLengths[i] = 1;
    }
    this.lzwState = lzwState;
    DecodeStream.call(this, maybeLength);
  }
  LZWStream.prototype = Object.create(DecodeStream.prototype);
  LZWStream.prototype.readBits = function LZWStream_readBits(n) {
    var bitsCached = this.bitsCached;
    var cachedData = this.cachedData;
    while (bitsCached < n) {
      var c = this.str.getByte();
      if (c === -1) {
        this.eof = true;
        return null;
      }
      cachedData = cachedData << 8 | c;
      bitsCached += 8;
    }
    this.bitsCached = bitsCached -= n;
    this.cachedData = cachedData;
    this.lastCode = null;
    return cachedData >>> bitsCached & (1 << n) - 1;
  };
  LZWStream.prototype.readBlock = function LZWStream_readBlock() {
    var blockSize = 512;
    var estimatedDecodedSize = blockSize * 2,
        decodedSizeDelta = blockSize;
    var i, j, q;
    var lzwState = this.lzwState;
    if (!lzwState) {
      return;
    }
    var earlyChange = lzwState.earlyChange;
    var nextCode = lzwState.nextCode;
    var dictionaryValues = lzwState.dictionaryValues;
    var dictionaryLengths = lzwState.dictionaryLengths;
    var dictionaryPrevCodes = lzwState.dictionaryPrevCodes;
    var codeLength = lzwState.codeLength;
    var prevCode = lzwState.prevCode;
    var currentSequence = lzwState.currentSequence;
    var currentSequenceLength = lzwState.currentSequenceLength;
    var decodedLength = 0;
    var currentBufferLength = this.bufferLength;
    var buffer = this.ensureBuffer(this.bufferLength + estimatedDecodedSize);
    for (i = 0; i < blockSize; i++) {
      var code = this.readBits(codeLength);
      var hasPrev = currentSequenceLength > 0;
      if (code < 256) {
        currentSequence[0] = code;
        currentSequenceLength = 1;
      } else if (code >= 258) {
        if (code < nextCode) {
          currentSequenceLength = dictionaryLengths[code];
          for (j = currentSequenceLength - 1, q = code; j >= 0; j--) {
            currentSequence[j] = dictionaryValues[q];
            q = dictionaryPrevCodes[q];
          }
        } else {
          currentSequence[currentSequenceLength++] = currentSequence[0];
        }
      } else if (code === 256) {
        codeLength = 9;
        nextCode = 258;
        currentSequenceLength = 0;
        continue;
      } else {
        this.eof = true;
        delete this.lzwState;
        break;
      }
      if (hasPrev) {
        dictionaryPrevCodes[nextCode] = prevCode;
        dictionaryLengths[nextCode] = dictionaryLengths[prevCode] + 1;
        dictionaryValues[nextCode] = currentSequence[0];
        nextCode++;
        codeLength = nextCode + earlyChange & nextCode + earlyChange - 1 ? codeLength : Math.min(Math.log(nextCode + earlyChange) / 0.6931471805599453 + 1, 12) | 0;
      }
      prevCode = code;
      decodedLength += currentSequenceLength;
      if (estimatedDecodedSize < decodedLength) {
        do {
          estimatedDecodedSize += decodedSizeDelta;
        } while (estimatedDecodedSize < decodedLength);
        buffer = this.ensureBuffer(this.bufferLength + estimatedDecodedSize);
      }
      for (j = 0; j < currentSequenceLength; j++) {
        buffer[currentBufferLength++] = currentSequence[j];
      }
    }
    lzwState.nextCode = nextCode;
    lzwState.codeLength = codeLength;
    lzwState.prevCode = prevCode;
    lzwState.currentSequenceLength = currentSequenceLength;
    this.bufferLength = currentBufferLength;
  };
  return LZWStream;
}();
var NullStream = function NullStreamClosure() {
  function NullStream() {
    Stream.call(this, new Uint8Array(0));
  }
  NullStream.prototype = Stream.prototype;
  return NullStream;
}();
exports.Ascii85Stream = Ascii85Stream;
exports.AsciiHexStream = AsciiHexStream;
exports.CCITTFaxStream = CCITTFaxStream;
exports.DecryptStream = DecryptStream;
exports.DecodeStream = DecodeStream;
exports.FlateStream = FlateStream;
exports.Jbig2Stream = Jbig2Stream;
exports.JpegStream = JpegStream;
exports.JpxStream = JpxStream;
exports.NullStream = NullStream;
exports.PredictorStream = PredictorStream;
exports.RunLengthStream = RunLengthStream;
exports.Stream = Stream;
exports.StreamsSequenceStream = StreamsSequenceStream;
exports.StringStream = StringStream;
exports.LZWStream = LZWStream;

/***/ }),
/* 3 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorSpace = undefined;

var _util = __w_pdfjs_require__(0);

var _primitives = __w_pdfjs_require__(1);

var _function = __w_pdfjs_require__(7);

var ColorSpace = function ColorSpaceClosure() {
  function resizeRgbImage(src, bpc, w1, h1, w2, h2, alpha01, dest) {
    var COMPONENTS = 3;
    alpha01 = alpha01 !== 1 ? 0 : alpha01;
    var xRatio = w1 / w2;
    var yRatio = h1 / h2;
    var i,
        j,
        py,
        newIndex = 0,
        oldIndex;
    var xScaled = new Uint16Array(w2);
    var w1Scanline = w1 * COMPONENTS;
    for (i = 0; i < w2; i++) {
      xScaled[i] = Math.floor(i * xRatio) * COMPONENTS;
    }
    for (i = 0; i < h2; i++) {
      py = Math.floor(i * yRatio) * w1Scanline;
      for (j = 0; j < w2; j++) {
        oldIndex = py + xScaled[j];
        dest[newIndex++] = src[oldIndex++];
        dest[newIndex++] = src[oldIndex++];
        dest[newIndex++] = src[oldIndex++];
        newIndex += alpha01;
      }
    }
  }
  function ColorSpace() {
    throw new Error('should not call ColorSpace constructor');
  }
  ColorSpace.prototype = {
    getRgb: function ColorSpace_getRgb(src, srcOffset) {
      var rgb = new Uint8Array(3);
      this.getRgbItem(src, srcOffset, rgb, 0);
      return rgb;
    },
    getRgbItem: function ColorSpace_getRgbItem(src, srcOffset, dest, destOffset) {
      throw new Error('Should not call ColorSpace.getRgbItem');
    },
    getRgbBuffer: function ColorSpace_getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
      throw new Error('Should not call ColorSpace.getRgbBuffer');
    },
    getOutputLength: function ColorSpace_getOutputLength(inputLength, alpha01) {
      throw new Error('Should not call ColorSpace.getOutputLength');
    },
    isPassthrough: function ColorSpace_isPassthrough(bits) {
      return false;
    },
    fillRgb: function ColorSpace_fillRgb(dest, originalWidth, originalHeight, width, height, actualHeight, bpc, comps, alpha01) {
      var count = originalWidth * originalHeight;
      var rgbBuf = null;
      var numComponentColors = 1 << bpc;
      var needsResizing = originalHeight !== height || originalWidth !== width;
      var i, ii;
      if (this.isPassthrough(bpc)) {
        rgbBuf = comps;
      } else if (this.numComps === 1 && count > numComponentColors && this.name !== 'DeviceGray' && this.name !== 'DeviceRGB') {
        var allColors = bpc <= 8 ? new Uint8Array(numComponentColors) : new Uint16Array(numComponentColors);
        var key;
        for (i = 0; i < numComponentColors; i++) {
          allColors[i] = i;
        }
        var colorMap = new Uint8Array(numComponentColors * 3);
        this.getRgbBuffer(allColors, 0, numComponentColors, colorMap, 0, bpc, 0);
        var destPos, rgbPos;
        if (!needsResizing) {
          destPos = 0;
          for (i = 0; i < count; ++i) {
            key = comps[i] * 3;
            dest[destPos++] = colorMap[key];
            dest[destPos++] = colorMap[key + 1];
            dest[destPos++] = colorMap[key + 2];
            destPos += alpha01;
          }
        } else {
          rgbBuf = new Uint8Array(count * 3);
          rgbPos = 0;
          for (i = 0; i < count; ++i) {
            key = comps[i] * 3;
            rgbBuf[rgbPos++] = colorMap[key];
            rgbBuf[rgbPos++] = colorMap[key + 1];
            rgbBuf[rgbPos++] = colorMap[key + 2];
          }
        }
      } else {
        if (!needsResizing) {
          this.getRgbBuffer(comps, 0, width * actualHeight, dest, 0, bpc, alpha01);
        } else {
          rgbBuf = new Uint8Array(count * 3);
          this.getRgbBuffer(comps, 0, count, rgbBuf, 0, bpc, 0);
        }
      }
      if (rgbBuf) {
        if (needsResizing) {
          resizeRgbImage(rgbBuf, bpc, originalWidth, originalHeight, width, height, alpha01, dest);
        } else {
          rgbPos = 0;
          destPos = 0;
          for (i = 0, ii = width * actualHeight; i < ii; i++) {
            dest[destPos++] = rgbBuf[rgbPos++];
            dest[destPos++] = rgbBuf[rgbPos++];
            dest[destPos++] = rgbBuf[rgbPos++];
            destPos += alpha01;
          }
        }
      }
    },
    usesZeroToOneRange: true
  };
  ColorSpace.parse = function ColorSpace_parse(cs, xref, res) {
    var IR = ColorSpace.parseToIR(cs, xref, res);
    if (IR instanceof AlternateCS) {
      return IR;
    }
    return ColorSpace.fromIR(IR);
  };
  ColorSpace.fromIR = function ColorSpace_fromIR(IR) {
    var name = (0, _util.isArray)(IR) ? IR[0] : IR;
    var whitePoint, blackPoint, gamma;
    switch (name) {
      case 'DeviceGrayCS':
        return this.singletons.gray;
      case 'DeviceRgbCS':
        return this.singletons.rgb;
      case 'DeviceCmykCS':
        return this.singletons.cmyk;
      case 'CalGrayCS':
        whitePoint = IR[1];
        blackPoint = IR[2];
        gamma = IR[3];
        return new CalGrayCS(whitePoint, blackPoint, gamma);
      case 'CalRGBCS':
        whitePoint = IR[1];
        blackPoint = IR[2];
        gamma = IR[3];
        var matrix = IR[4];
        return new CalRGBCS(whitePoint, blackPoint, gamma, matrix);
      case 'PatternCS':
        var basePatternCS = IR[1];
        if (basePatternCS) {
          basePatternCS = ColorSpace.fromIR(basePatternCS);
        }
        return new PatternCS(basePatternCS);
      case 'IndexedCS':
        var baseIndexedCS = IR[1];
        var hiVal = IR[2];
        var lookup = IR[3];
        return new IndexedCS(ColorSpace.fromIR(baseIndexedCS), hiVal, lookup);
      case 'AlternateCS':
        var numComps = IR[1];
        var alt = IR[2];
        var tintFnIR = IR[3];
        return new AlternateCS(numComps, ColorSpace.fromIR(alt), _function.PDFFunction.fromIR(tintFnIR));
      case 'LabCS':
        whitePoint = IR[1];
        blackPoint = IR[2];
        var range = IR[3];
        return new LabCS(whitePoint, blackPoint, range);
      default:
        throw new _util.FormatError('Unknown colorspace name: ' + name);
    }
  };
  ColorSpace.parseToIR = function ColorSpace_parseToIR(cs, xref, res) {
    if ((0, _primitives.isName)(cs)) {
      var colorSpaces = res.get('ColorSpace');
      if ((0, _primitives.isDict)(colorSpaces)) {
        var refcs = colorSpaces.get(cs.name);
        if (refcs) {
          cs = refcs;
        }
      }
    }
    cs = xref.fetchIfRef(cs);
    if ((0, _primitives.isName)(cs)) {
      switch (cs.name) {
        case 'DeviceGray':
        case 'G':
          return 'DeviceGrayCS';
        case 'DeviceRGB':
        case 'RGB':
          return 'DeviceRgbCS';
        case 'DeviceCMYK':
        case 'CMYK':
          return 'DeviceCmykCS';
        case 'Pattern':
          return ['PatternCS', null];
        default:
          throw new _util.FormatError('unrecognized colorspace ' + cs.name);
      }
    }
    if ((0, _util.isArray)(cs)) {
      var mode = xref.fetchIfRef(cs[0]).name;
      var numComps, params, alt, whitePoint, blackPoint, gamma;
      switch (mode) {
        case 'DeviceGray':
        case 'G':
          return 'DeviceGrayCS';
        case 'DeviceRGB':
        case 'RGB':
          return 'DeviceRgbCS';
        case 'DeviceCMYK':
        case 'CMYK':
          return 'DeviceCmykCS';
        case 'CalGray':
          params = xref.fetchIfRef(cs[1]);
          whitePoint = params.getArray('WhitePoint');
          blackPoint = params.getArray('BlackPoint');
          gamma = params.get('Gamma');
          return ['CalGrayCS', whitePoint, blackPoint, gamma];
        case 'CalRGB':
          params = xref.fetchIfRef(cs[1]);
          whitePoint = params.getArray('WhitePoint');
          blackPoint = params.getArray('BlackPoint');
          gamma = params.getArray('Gamma');
          var matrix = params.getArray('Matrix');
          return ['CalRGBCS', whitePoint, blackPoint, gamma, matrix];
        case 'ICCBased':
          var stream = xref.fetchIfRef(cs[1]);
          var dict = stream.dict;
          numComps = dict.get('N');
          alt = dict.get('Alternate');
          if (alt) {
            var altIR = ColorSpace.parseToIR(alt, xref, res);
            var altCS = ColorSpace.fromIR(altIR);
            if (altCS.numComps === numComps) {
              return altIR;
            }
            (0, _util.warn)('ICCBased color space: Ignoring incorrect /Alternate entry.');
          }
          if (numComps === 1) {
            return 'DeviceGrayCS';
          } else if (numComps === 3) {
            return 'DeviceRgbCS';
          } else if (numComps === 4) {
            return 'DeviceCmykCS';
          }
          break;
        case 'Pattern':
          var basePatternCS = cs[1] || null;
          if (basePatternCS) {
            basePatternCS = ColorSpace.parseToIR(basePatternCS, xref, res);
          }
          return ['PatternCS', basePatternCS];
        case 'Indexed':
        case 'I':
          var baseIndexedCS = ColorSpace.parseToIR(cs[1], xref, res);
          var hiVal = xref.fetchIfRef(cs[2]) + 1;
          var lookup = xref.fetchIfRef(cs[3]);
          if ((0, _primitives.isStream)(lookup)) {
            lookup = lookup.getBytes();
          }
          return ['IndexedCS', baseIndexedCS, hiVal, lookup];
        case 'Separation':
        case 'DeviceN':
          var name = xref.fetchIfRef(cs[1]);
          numComps = (0, _util.isArray)(name) ? name.length : 1;
          alt = ColorSpace.parseToIR(cs[2], xref, res);
          var tintFnIR = _function.PDFFunction.getIR(xref, xref.fetchIfRef(cs[3]));
          return ['AlternateCS', numComps, alt, tintFnIR];
        case 'Lab':
          params = xref.fetchIfRef(cs[1]);
          whitePoint = params.getArray('WhitePoint');
          blackPoint = params.getArray('BlackPoint');
          var range = params.getArray('Range');
          return ['LabCS', whitePoint, blackPoint, range];
        default:
          throw new _util.FormatError('unimplemented color space object "' + mode + '"');
      }
    }
    throw new _util.FormatError('unrecognized color space object: "' + cs + '"');
  };
  ColorSpace.isDefaultDecode = function ColorSpace_isDefaultDecode(decode, n) {
    if (!(0, _util.isArray)(decode)) {
      return true;
    }
    if (n * 2 !== decode.length) {
      (0, _util.warn)('The decode map is not the correct length');
      return true;
    }
    for (var i = 0, ii = decode.length; i < ii; i += 2) {
      if (decode[i] !== 0 || decode[i + 1] !== 1) {
        return false;
      }
    }
    return true;
  };
  ColorSpace.singletons = {
    get gray() {
      return (0, _util.shadow)(this, 'gray', new DeviceGrayCS());
    },
    get rgb() {
      return (0, _util.shadow)(this, 'rgb', new DeviceRgbCS());
    },
    get cmyk() {
      return (0, _util.shadow)(this, 'cmyk', new DeviceCmykCS());
    }
  };
  return ColorSpace;
}();
var AlternateCS = function AlternateCSClosure() {
  function AlternateCS(numComps, base, tintFn) {
    this.name = 'Alternate';
    this.numComps = numComps;
    this.defaultColor = new Float32Array(numComps);
    for (var i = 0; i < numComps; ++i) {
      this.defaultColor[i] = 1;
    }
    this.base = base;
    this.tintFn = tintFn;
    this.tmpBuf = new Float32Array(base.numComps);
  }
  AlternateCS.prototype = {
    getRgb: ColorSpace.prototype.getRgb,
    getRgbItem: function AlternateCS_getRgbItem(src, srcOffset, dest, destOffset) {
      var tmpBuf = this.tmpBuf;
      this.tintFn(src, srcOffset, tmpBuf, 0);
      this.base.getRgbItem(tmpBuf, 0, dest, destOffset);
    },
    getRgbBuffer: function AlternateCS_getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
      var tintFn = this.tintFn;
      var base = this.base;
      var scale = 1 / ((1 << bits) - 1);
      var baseNumComps = base.numComps;
      var usesZeroToOneRange = base.usesZeroToOneRange;
      var isPassthrough = (base.isPassthrough(8) || !usesZeroToOneRange) && alpha01 === 0;
      var pos = isPassthrough ? destOffset : 0;
      var baseBuf = isPassthrough ? dest : new Uint8Array(baseNumComps * count);
      var numComps = this.numComps;
      var scaled = new Float32Array(numComps);
      var tinted = new Float32Array(baseNumComps);
      var i, j;
      for (i = 0; i < count; i++) {
        for (j = 0; j < numComps; j++) {
          scaled[j] = src[srcOffset++] * scale;
        }
        tintFn(scaled, 0, tinted, 0);
        if (usesZeroToOneRange) {
          for (j = 0; j < baseNumComps; j++) {
            baseBuf[pos++] = tinted[j] * 255;
          }
        } else {
          base.getRgbItem(tinted, 0, baseBuf, pos);
          pos += baseNumComps;
        }
      }
      if (!isPassthrough) {
        base.getRgbBuffer(baseBuf, 0, count, dest, destOffset, 8, alpha01);
      }
    },
    getOutputLength: function AlternateCS_getOutputLength(inputLength, alpha01) {
      return this.base.getOutputLength(inputLength * this.base.numComps / this.numComps, alpha01);
    },
    isPassthrough: ColorSpace.prototype.isPassthrough,
    fillRgb: ColorSpace.prototype.fillRgb,
    isDefaultDecode: function AlternateCS_isDefaultDecode(decodeMap) {
      return ColorSpace.isDefaultDecode(decodeMap, this.numComps);
    },
    usesZeroToOneRange: true
  };
  return AlternateCS;
}();
var PatternCS = function PatternCSClosure() {
  function PatternCS(baseCS) {
    this.name = 'Pattern';
    this.base = baseCS;
  }
  PatternCS.prototype = {};
  return PatternCS;
}();
var IndexedCS = function IndexedCSClosure() {
  function IndexedCS(base, highVal, lookup) {
    this.name = 'Indexed';
    this.numComps = 1;
    this.defaultColor = new Uint8Array(this.numComps);
    this.base = base;
    this.highVal = highVal;
    var baseNumComps = base.numComps;
    var length = baseNumComps * highVal;
    if ((0, _primitives.isStream)(lookup)) {
      this.lookup = new Uint8Array(length);
      var bytes = lookup.getBytes(length);
      this.lookup.set(bytes);
    } else if ((0, _util.isString)(lookup)) {
      this.lookup = new Uint8Array(length);
      for (var i = 0; i < length; ++i) {
        this.lookup[i] = lookup.charCodeAt(i);
      }
    } else if (lookup instanceof Uint8Array || lookup instanceof Array) {
      this.lookup = lookup;
    } else {
      throw new _util.FormatError('Unrecognized lookup table: ' + lookup);
    }
  }
  IndexedCS.prototype = {
    getRgb: ColorSpace.prototype.getRgb,
    getRgbItem: function IndexedCS_getRgbItem(src, srcOffset, dest, destOffset) {
      var numComps = this.base.numComps;
      var start = src[srcOffset] * numComps;
      this.base.getRgbBuffer(this.lookup, start, 1, dest, destOffset, 8, 0);
    },
    getRgbBuffer: function IndexedCS_getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
      var base = this.base;
      var numComps = base.numComps;
      var outputDelta = base.getOutputLength(numComps, alpha01);
      var lookup = this.lookup;
      for (var i = 0; i < count; ++i) {
        var lookupPos = src[srcOffset++] * numComps;
        base.getRgbBuffer(lookup, lookupPos, 1, dest, destOffset, 8, alpha01);
        destOffset += outputDelta;
      }
    },
    getOutputLength: function IndexedCS_getOutputLength(inputLength, alpha01) {
      return this.base.getOutputLength(inputLength * this.base.numComps, alpha01);
    },
    isPassthrough: ColorSpace.prototype.isPassthrough,
    fillRgb: ColorSpace.prototype.fillRgb,
    isDefaultDecode: function IndexedCS_isDefaultDecode(decodeMap) {
      return true;
    },
    usesZeroToOneRange: true
  };
  return IndexedCS;
}();
var DeviceGrayCS = function DeviceGrayCSClosure() {
  function DeviceGrayCS() {
    this.name = 'DeviceGray';
    this.numComps = 1;
    this.defaultColor = new Float32Array(this.numComps);
  }
  DeviceGrayCS.prototype = {
    getRgb: ColorSpace.prototype.getRgb,
    getRgbItem: function DeviceGrayCS_getRgbItem(src, srcOffset, dest, destOffset) {
      var c = src[srcOffset] * 255 | 0;
      c = c < 0 ? 0 : c > 255 ? 255 : c;
      dest[destOffset] = dest[destOffset + 1] = dest[destOffset + 2] = c;
    },
    getRgbBuffer: function DeviceGrayCS_getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
      var scale = 255 / ((1 << bits) - 1);
      var j = srcOffset,
          q = destOffset;
      for (var i = 0; i < count; ++i) {
        var c = scale * src[j++] | 0;
        dest[q++] = c;
        dest[q++] = c;
        dest[q++] = c;
        q += alpha01;
      }
    },
    getOutputLength: function DeviceGrayCS_getOutputLength(inputLength, alpha01) {
      return inputLength * (3 + alpha01);
    },
    isPassthrough: ColorSpace.prototype.isPassthrough,
    fillRgb: ColorSpace.prototype.fillRgb,
    isDefaultDecode: function DeviceGrayCS_isDefaultDecode(decodeMap) {
      return ColorSpace.isDefaultDecode(decodeMap, this.numComps);
    },
    usesZeroToOneRange: true
  };
  return DeviceGrayCS;
}();
var DeviceRgbCS = function DeviceRgbCSClosure() {
  function DeviceRgbCS() {
    this.name = 'DeviceRGB';
    this.numComps = 3;
    this.defaultColor = new Float32Array(this.numComps);
  }
  DeviceRgbCS.prototype = {
    getRgb: ColorSpace.prototype.getRgb,
    getRgbItem: function DeviceRgbCS_getRgbItem(src, srcOffset, dest, destOffset) {
      var r = src[srcOffset] * 255 | 0;
      var g = src[srcOffset + 1] * 255 | 0;
      var b = src[srcOffset + 2] * 255 | 0;
      dest[destOffset] = r < 0 ? 0 : r > 255 ? 255 : r;
      dest[destOffset + 1] = g < 0 ? 0 : g > 255 ? 255 : g;
      dest[destOffset + 2] = b < 0 ? 0 : b > 255 ? 255 : b;
    },
    getRgbBuffer: function DeviceRgbCS_getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
      if (bits === 8 && alpha01 === 0) {
        dest.set(src.subarray(srcOffset, srcOffset + count * 3), destOffset);
        return;
      }
      var scale = 255 / ((1 << bits) - 1);
      var j = srcOffset,
          q = destOffset;
      for (var i = 0; i < count; ++i) {
        dest[q++] = scale * src[j++] | 0;
        dest[q++] = scale * src[j++] | 0;
        dest[q++] = scale * src[j++] | 0;
        q += alpha01;
      }
    },
    getOutputLength: function DeviceRgbCS_getOutputLength(inputLength, alpha01) {
      return inputLength * (3 + alpha01) / 3 | 0;
    },
    isPassthrough: function DeviceRgbCS_isPassthrough(bits) {
      return bits === 8;
    },
    fillRgb: ColorSpace.prototype.fillRgb,
    isDefaultDecode: function DeviceRgbCS_isDefaultDecode(decodeMap) {
      return ColorSpace.isDefaultDecode(decodeMap, this.numComps);
    },
    usesZeroToOneRange: true
  };
  return DeviceRgbCS;
}();
var DeviceCmykCS = function DeviceCmykCSClosure() {
  function convertToRgb(src, srcOffset, srcScale, dest, destOffset) {
    var c = src[srcOffset + 0] * srcScale;
    var m = src[srcOffset + 1] * srcScale;
    var y = src[srcOffset + 2] * srcScale;
    var k = src[srcOffset + 3] * srcScale;
    var r = c * (-4.387332384609988 * c + 54.48615194189176 * m + 18.82290502165302 * y + 212.25662451639585 * k + -285.2331026137004) + m * (1.7149763477362134 * m - 5.6096736904047315 * y + -17.873870861415444 * k - 5.497006427196366) + y * (-2.5217340131683033 * y - 21.248923337353073 * k + 17.5119270841813) + k * (-21.86122147463605 * k - 189.48180835922747) + 255 | 0;
    var g = c * (8.841041422036149 * c + 60.118027045597366 * m + 6.871425592049007 * y + 31.159100130055922 * k + -79.2970844816548) + m * (-15.310361306967817 * m + 17.575251261109482 * y + 131.35250912493976 * k - 190.9453302588951) + y * (4.444339102852739 * y + 9.8632861493405 * k - 24.86741582555878) + k * (-20.737325471181034 * k - 187.80453709719578) + 255 | 0;
    var b = c * (0.8842522430003296 * c + 8.078677503112928 * m + 30.89978309703729 * y - 0.23883238689178934 * k + -14.183576799673286) + m * (10.49593273432072 * m + 63.02378494754052 * y + 50.606957656360734 * k - 112.23884253719248) + y * (0.03296041114873217 * y + 115.60384449646641 * k + -193.58209356861505) + k * (-22.33816807309886 * k - 180.12613974708367) + 255 | 0;
    dest[destOffset] = r > 255 ? 255 : r < 0 ? 0 : r;
    dest[destOffset + 1] = g > 255 ? 255 : g < 0 ? 0 : g;
    dest[destOffset + 2] = b > 255 ? 255 : b < 0 ? 0 : b;
  }
  function DeviceCmykCS() {
    this.name = 'DeviceCMYK';
    this.numComps = 4;
    this.defaultColor = new Float32Array(this.numComps);
    this.defaultColor[3] = 1;
  }
  DeviceCmykCS.prototype = {
    getRgb: ColorSpace.prototype.getRgb,
    getRgbItem: function DeviceCmykCS_getRgbItem(src, srcOffset, dest, destOffset) {
      convertToRgb(src, srcOffset, 1, dest, destOffset);
    },
    getRgbBuffer: function DeviceCmykCS_getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
      var scale = 1 / ((1 << bits) - 1);
      for (var i = 0; i < count; i++) {
        convertToRgb(src, srcOffset, scale, dest, destOffset);
        srcOffset += 4;
        destOffset += 3 + alpha01;
      }
    },
    getOutputLength: function DeviceCmykCS_getOutputLength(inputLength, alpha01) {
      return inputLength / 4 * (3 + alpha01) | 0;
    },
    isPassthrough: ColorSpace.prototype.isPassthrough,
    fillRgb: ColorSpace.prototype.fillRgb,
    isDefaultDecode: function DeviceCmykCS_isDefaultDecode(decodeMap) {
      return ColorSpace.isDefaultDecode(decodeMap, this.numComps);
    },
    usesZeroToOneRange: true
  };
  return DeviceCmykCS;
}();
var CalGrayCS = function CalGrayCSClosure() {
  function CalGrayCS(whitePoint, blackPoint, gamma) {
    this.name = 'CalGray';
    this.numComps = 1;
    this.defaultColor = new Float32Array(this.numComps);
    if (!whitePoint) {
      throw new _util.FormatError('WhitePoint missing - required for color space CalGray');
    }
    blackPoint = blackPoint || [0, 0, 0];
    gamma = gamma || 1;
    this.XW = whitePoint[0];
    this.YW = whitePoint[1];
    this.ZW = whitePoint[2];
    this.XB = blackPoint[0];
    this.YB = blackPoint[1];
    this.ZB = blackPoint[2];
    this.G = gamma;
    if (this.XW < 0 || this.ZW < 0 || this.YW !== 1) {
      throw new _util.FormatError('Invalid WhitePoint components for ' + this.name + ', no fallback available');
    }
    if (this.XB < 0 || this.YB < 0 || this.ZB < 0) {
      (0, _util.info)('Invalid BlackPoint for ' + this.name + ', falling back to default');
      this.XB = this.YB = this.ZB = 0;
    }
    if (this.XB !== 0 || this.YB !== 0 || this.ZB !== 0) {
      (0, _util.warn)(this.name + ', BlackPoint: XB: ' + this.XB + ', YB: ' + this.YB + ', ZB: ' + this.ZB + ', only default values are supported.');
    }
    if (this.G < 1) {
      (0, _util.info)('Invalid Gamma: ' + this.G + ' for ' + this.name + ', falling back to default');
      this.G = 1;
    }
  }
  function convertToRgb(cs, src, srcOffset, dest, destOffset, scale) {
    var A = src[srcOffset] * scale;
    var AG = Math.pow(A, cs.G);
    var L = cs.YW * AG;
    var val = Math.max(295.8 * Math.pow(L, 0.333333333333333333) - 40.8, 0) | 0;
    dest[destOffset] = val;
    dest[destOffset + 1] = val;
    dest[destOffset + 2] = val;
  }
  CalGrayCS.prototype = {
    getRgb: ColorSpace.prototype.getRgb,
    getRgbItem: function CalGrayCS_getRgbItem(src, srcOffset, dest, destOffset) {
      convertToRgb(this, src, srcOffset, dest, destOffset, 1);
    },
    getRgbBuffer: function CalGrayCS_getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
      var scale = 1 / ((1 << bits) - 1);
      for (var i = 0; i < count; ++i) {
        convertToRgb(this, src, srcOffset, dest, destOffset, scale);
        srcOffset += 1;
        destOffset += 3 + alpha01;
      }
    },
    getOutputLength: function CalGrayCS_getOutputLength(inputLength, alpha01) {
      return inputLength * (3 + alpha01);
    },
    isPassthrough: ColorSpace.prototype.isPassthrough,
    fillRgb: ColorSpace.prototype.fillRgb,
    isDefaultDecode: function CalGrayCS_isDefaultDecode(decodeMap) {
      return ColorSpace.isDefaultDecode(decodeMap, this.numComps);
    },
    usesZeroToOneRange: true
  };
  return CalGrayCS;
}();
var CalRGBCS = function CalRGBCSClosure() {
  var BRADFORD_SCALE_MATRIX = new Float32Array([0.8951, 0.2664, -0.1614, -0.7502, 1.7135, 0.0367, 0.0389, -0.0685, 1.0296]);
  var BRADFORD_SCALE_INVERSE_MATRIX = new Float32Array([0.9869929, -0.1470543, 0.1599627, 0.4323053, 0.5183603, 0.0492912, -0.0085287, 0.0400428, 0.9684867]);
  var SRGB_D65_XYZ_TO_RGB_MATRIX = new Float32Array([3.2404542, -1.5371385, -0.4985314, -0.9692660, 1.8760108, 0.0415560, 0.0556434, -0.2040259, 1.0572252]);
  var FLAT_WHITEPOINT_MATRIX = new Float32Array([1, 1, 1]);
  var tempNormalizeMatrix = new Float32Array(3);
  var tempConvertMatrix1 = new Float32Array(3);
  var tempConvertMatrix2 = new Float32Array(3);
  var DECODE_L_CONSTANT = Math.pow((8 + 16) / 116, 3) / 8.0;
  function CalRGBCS(whitePoint, blackPoint, gamma, matrix) {
    this.name = 'CalRGB';
    this.numComps = 3;
    this.defaultColor = new Float32Array(this.numComps);
    if (!whitePoint) {
      throw new _util.FormatError('WhitePoint missing - required for color space CalRGB');
    }
    blackPoint = blackPoint || new Float32Array(3);
    gamma = gamma || new Float32Array([1, 1, 1]);
    matrix = matrix || new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    var XW = whitePoint[0];
    var YW = whitePoint[1];
    var ZW = whitePoint[2];
    this.whitePoint = whitePoint;
    var XB = blackPoint[0];
    var YB = blackPoint[1];
    var ZB = blackPoint[2];
    this.blackPoint = blackPoint;
    this.GR = gamma[0];
    this.GG = gamma[1];
    this.GB = gamma[2];
    this.MXA = matrix[0];
    this.MYA = matrix[1];
    this.MZA = matrix[2];
    this.MXB = matrix[3];
    this.MYB = matrix[4];
    this.MZB = matrix[5];
    this.MXC = matrix[6];
    this.MYC = matrix[7];
    this.MZC = matrix[8];
    if (XW < 0 || ZW < 0 || YW !== 1) {
      throw new _util.FormatError('Invalid WhitePoint components for ' + this.name + ', no fallback available');
    }
    if (XB < 0 || YB < 0 || ZB < 0) {
      (0, _util.info)('Invalid BlackPoint for ' + this.name + ' [' + XB + ', ' + YB + ', ' + ZB + '], falling back to default');
      this.blackPoint = new Float32Array(3);
    }
    if (this.GR < 0 || this.GG < 0 || this.GB < 0) {
      (0, _util.info)('Invalid Gamma [' + this.GR + ', ' + this.GG + ', ' + this.GB + '] for ' + this.name + ', falling back to default');
      this.GR = this.GG = this.GB = 1;
    }
    if (this.MXA < 0 || this.MYA < 0 || this.MZA < 0 || this.MXB < 0 || this.MYB < 0 || this.MZB < 0 || this.MXC < 0 || this.MYC < 0 || this.MZC < 0) {
      (0, _util.info)('Invalid Matrix for ' + this.name + ' [' + this.MXA + ', ' + this.MYA + ', ' + this.MZA + this.MXB + ', ' + this.MYB + ', ' + this.MZB + this.MXC + ', ' + this.MYC + ', ' + this.MZC + '], falling back to default');
      this.MXA = this.MYB = this.MZC = 1;
      this.MXB = this.MYA = this.MZA = this.MXC = this.MYC = this.MZB = 0;
    }
  }
  function matrixProduct(a, b, result) {
    result[0] = a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    result[1] = a[3] * b[0] + a[4] * b[1] + a[5] * b[2];
    result[2] = a[6] * b[0] + a[7] * b[1] + a[8] * b[2];
  }
  function convertToFlat(sourceWhitePoint, LMS, result) {
    result[0] = LMS[0] * 1 / sourceWhitePoint[0];
    result[1] = LMS[1] * 1 / sourceWhitePoint[1];
    result[2] = LMS[2] * 1 / sourceWhitePoint[2];
  }
  function convertToD65(sourceWhitePoint, LMS, result) {
    var D65X = 0.95047;
    var D65Y = 1;
    var D65Z = 1.08883;
    result[0] = LMS[0] * D65X / sourceWhitePoint[0];
    result[1] = LMS[1] * D65Y / sourceWhitePoint[1];
    result[2] = LMS[2] * D65Z / sourceWhitePoint[2];
  }
  function sRGBTransferFunction(color) {
    if (color <= 0.0031308) {
      return adjustToRange(0, 1, 12.92 * color);
    }
    return adjustToRange(0, 1, (1 + 0.055) * Math.pow(color, 1 / 2.4) - 0.055);
  }
  function adjustToRange(min, max, value) {
    return Math.max(min, Math.min(max, value));
  }
  function decodeL(L) {
    if (L < 0) {
      return -decodeL(-L);
    }
    if (L > 8.0) {
      return Math.pow((L + 16) / 116, 3);
    }
    return L * DECODE_L_CONSTANT;
  }
  function compensateBlackPoint(sourceBlackPoint, XYZ_Flat, result) {
    if (sourceBlackPoint[0] === 0 && sourceBlackPoint[1] === 0 && sourceBlackPoint[2] === 0) {
      result[0] = XYZ_Flat[0];
      result[1] = XYZ_Flat[1];
      result[2] = XYZ_Flat[2];
      return;
    }
    var zeroDecodeL = decodeL(0);
    var X_DST = zeroDecodeL;
    var X_SRC = decodeL(sourceBlackPoint[0]);
    var Y_DST = zeroDecodeL;
    var Y_SRC = decodeL(sourceBlackPoint[1]);
    var Z_DST = zeroDecodeL;
    var Z_SRC = decodeL(sourceBlackPoint[2]);
    var X_Scale = (1 - X_DST) / (1 - X_SRC);
    var X_Offset = 1 - X_Scale;
    var Y_Scale = (1 - Y_DST) / (1 - Y_SRC);
    var Y_Offset = 1 - Y_Scale;
    var Z_Scale = (1 - Z_DST) / (1 - Z_SRC);
    var Z_Offset = 1 - Z_Scale;
    result[0] = XYZ_Flat[0] * X_Scale + X_Offset;
    result[1] = XYZ_Flat[1] * Y_Scale + Y_Offset;
    result[2] = XYZ_Flat[2] * Z_Scale + Z_Offset;
  }
  function normalizeWhitePointToFlat(sourceWhitePoint, XYZ_In, result) {
    if (sourceWhitePoint[0] === 1 && sourceWhitePoint[2] === 1) {
      result[0] = XYZ_In[0];
      result[1] = XYZ_In[1];
      result[2] = XYZ_In[2];
      return;
    }
    var LMS = result;
    matrixProduct(BRADFORD_SCALE_MATRIX, XYZ_In, LMS);
    var LMS_Flat = tempNormalizeMatrix;
    convertToFlat(sourceWhitePoint, LMS, LMS_Flat);
    matrixProduct(BRADFORD_SCALE_INVERSE_MATRIX, LMS_Flat, result);
  }
  function normalizeWhitePointToD65(sourceWhitePoint, XYZ_In, result) {
    var LMS = result;
    matrixProduct(BRADFORD_SCALE_MATRIX, XYZ_In, LMS);
    var LMS_D65 = tempNormalizeMatrix;
    convertToD65(sourceWhitePoint, LMS, LMS_D65);
    matrixProduct(BRADFORD_SCALE_INVERSE_MATRIX, LMS_D65, result);
  }
  function convertToRgb(cs, src, srcOffset, dest, destOffset, scale) {
    var A = adjustToRange(0, 1, src[srcOffset] * scale);
    var B = adjustToRange(0, 1, src[srcOffset + 1] * scale);
    var C = adjustToRange(0, 1, src[srcOffset + 2] * scale);
    var AGR = Math.pow(A, cs.GR);
    var BGG = Math.pow(B, cs.GG);
    var CGB = Math.pow(C, cs.GB);
    var X = cs.MXA * AGR + cs.MXB * BGG + cs.MXC * CGB;
    var Y = cs.MYA * AGR + cs.MYB * BGG + cs.MYC * CGB;
    var Z = cs.MZA * AGR + cs.MZB * BGG + cs.MZC * CGB;
    var XYZ = tempConvertMatrix1;
    XYZ[0] = X;
    XYZ[1] = Y;
    XYZ[2] = Z;
    var XYZ_Flat = tempConvertMatrix2;
    normalizeWhitePointToFlat(cs.whitePoint, XYZ, XYZ_Flat);
    var XYZ_Black = tempConvertMatrix1;
    compensateBlackPoint(cs.blackPoint, XYZ_Flat, XYZ_Black);
    var XYZ_D65 = tempConvertMatrix2;
    normalizeWhitePointToD65(FLAT_WHITEPOINT_MATRIX, XYZ_Black, XYZ_D65);
    var SRGB = tempConvertMatrix1;
    matrixProduct(SRGB_D65_XYZ_TO_RGB_MATRIX, XYZ_D65, SRGB);
    var sR = sRGBTransferFunction(SRGB[0]);
    var sG = sRGBTransferFunction(SRGB[1]);
    var sB = sRGBTransferFunction(SRGB[2]);
    dest[destOffset] = Math.round(sR * 255);
    dest[destOffset + 1] = Math.round(sG * 255);
    dest[destOffset + 2] = Math.round(sB * 255);
  }
  CalRGBCS.prototype = {
    getRgb: ColorSpace.prototype.getRgb,
    getRgbItem: function CalRGBCS_getRgbItem(src, srcOffset, dest, destOffset) {
      convertToRgb(this, src, srcOffset, dest, destOffset, 1);
    },
    getRgbBuffer: function CalRGBCS_getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
      var scale = 1 / ((1 << bits) - 1);
      for (var i = 0; i < count; ++i) {
        convertToRgb(this, src, srcOffset, dest, destOffset, scale);
        srcOffset += 3;
        destOffset += 3 + alpha01;
      }
    },
    getOutputLength: function CalRGBCS_getOutputLength(inputLength, alpha01) {
      return inputLength * (3 + alpha01) / 3 | 0;
    },
    isPassthrough: ColorSpace.prototype.isPassthrough,
    fillRgb: ColorSpace.prototype.fillRgb,
    isDefaultDecode: function CalRGBCS_isDefaultDecode(decodeMap) {
      return ColorSpace.isDefaultDecode(decodeMap, this.numComps);
    },
    usesZeroToOneRange: true
  };
  return CalRGBCS;
}();
var LabCS = function LabCSClosure() {
  function LabCS(whitePoint, blackPoint, range) {
    this.name = 'Lab';
    this.numComps = 3;
    this.defaultColor = new Float32Array(this.numComps);
    if (!whitePoint) {
      throw new _util.FormatError('WhitePoint missing - required for color space Lab');
    }
    blackPoint = blackPoint || [0, 0, 0];
    range = range || [-100, 100, -100, 100];
    this.XW = whitePoint[0];
    this.YW = whitePoint[1];
    this.ZW = whitePoint[2];
    this.amin = range[0];
    this.amax = range[1];
    this.bmin = range[2];
    this.bmax = range[3];
    this.XB = blackPoint[0];
    this.YB = blackPoint[1];
    this.ZB = blackPoint[2];
    if (this.XW < 0 || this.ZW < 0 || this.YW !== 1) {
      throw new _util.FormatError('Invalid WhitePoint components, no fallback available');
    }
    if (this.XB < 0 || this.YB < 0 || this.ZB < 0) {
      (0, _util.info)('Invalid BlackPoint, falling back to default');
      this.XB = this.YB = this.ZB = 0;
    }
    if (this.amin > this.amax || this.bmin > this.bmax) {
      (0, _util.info)('Invalid Range, falling back to defaults');
      this.amin = -100;
      this.amax = 100;
      this.bmin = -100;
      this.bmax = 100;
    }
  }
  function fn_g(x) {
    var result;
    if (x >= 6 / 29) {
      result = x * x * x;
    } else {
      result = 108 / 841 * (x - 4 / 29);
    }
    return result;
  }
  function decode(value, high1, low2, high2) {
    return low2 + value * (high2 - low2) / high1;
  }
  function convertToRgb(cs, src, srcOffset, maxVal, dest, destOffset) {
    var Ls = src[srcOffset];
    var as = src[srcOffset + 1];
    var bs = src[srcOffset + 2];
    if (maxVal !== false) {
      Ls = decode(Ls, maxVal, 0, 100);
      as = decode(as, maxVal, cs.amin, cs.amax);
      bs = decode(bs, maxVal, cs.bmin, cs.bmax);
    }
    as = as > cs.amax ? cs.amax : as < cs.amin ? cs.amin : as;
    bs = bs > cs.bmax ? cs.bmax : bs < cs.bmin ? cs.bmin : bs;
    var M = (Ls + 16) / 116;
    var L = M + as / 500;
    var N = M - bs / 200;
    var X = cs.XW * fn_g(L);
    var Y = cs.YW * fn_g(M);
    var Z = cs.ZW * fn_g(N);
    var r, g, b;
    if (cs.ZW < 1) {
      r = X * 3.1339 + Y * -1.6170 + Z * -0.4906;
      g = X * -0.9785 + Y * 1.9160 + Z * 0.0333;
      b = X * 0.0720 + Y * -0.2290 + Z * 1.4057;
    } else {
      r = X * 3.2406 + Y * -1.5372 + Z * -0.4986;
      g = X * -0.9689 + Y * 1.8758 + Z * 0.0415;
      b = X * 0.0557 + Y * -0.2040 + Z * 1.0570;
    }
    dest[destOffset] = r <= 0 ? 0 : r >= 1 ? 255 : Math.sqrt(r) * 255 | 0;
    dest[destOffset + 1] = g <= 0 ? 0 : g >= 1 ? 255 : Math.sqrt(g) * 255 | 0;
    dest[destOffset + 2] = b <= 0 ? 0 : b >= 1 ? 255 : Math.sqrt(b) * 255 | 0;
  }
  LabCS.prototype = {
    getRgb: ColorSpace.prototype.getRgb,
    getRgbItem: function LabCS_getRgbItem(src, srcOffset, dest, destOffset) {
      convertToRgb(this, src, srcOffset, false, dest, destOffset);
    },
    getRgbBuffer: function LabCS_getRgbBuffer(src, srcOffset, count, dest, destOffset, bits, alpha01) {
      var maxVal = (1 << bits) - 1;
      for (var i = 0; i < count; i++) {
        convertToRgb(this, src, srcOffset, maxVal, dest, destOffset);
        srcOffset += 3;
        destOffset += 3 + alpha01;
      }
    },
    getOutputLength: function LabCS_getOutputLength(inputLength, alpha01) {
      return inputLength * (3 + alpha01) / 3 | 0;
    },
    isPassthrough: ColorSpace.prototype.isPassthrough,
    fillRgb: ColorSpace.prototype.fillRgb,
    isDefaultDecode: function LabCS_isDefaultDecode(decodeMap) {
      return true;
    },
    usesZeroToOneRange: false
  };
  return LabCS;
}();
exports.ColorSpace = ColorSpace;

/***/ }),
/* 4 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ExpertEncoding = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'space', 'exclamsmall', 'Hungarumlautsmall', '', 'dollaroldstyle', 'dollarsuperior', 'ampersandsmall', 'Acutesmall', 'parenleftsuperior', 'parenrightsuperior', 'twodotenleader', 'onedotenleader', 'comma', 'hyphen', 'period', 'fraction', 'zerooldstyle', 'oneoldstyle', 'twooldstyle', 'threeoldstyle', 'fouroldstyle', 'fiveoldstyle', 'sixoldstyle', 'sevenoldstyle', 'eightoldstyle', 'nineoldstyle', 'colon', 'semicolon', 'commasuperior', 'threequartersemdash', 'periodsuperior', 'questionsmall', '', 'asuperior', 'bsuperior', 'centsuperior', 'dsuperior', 'esuperior', '', '', '', 'isuperior', '', '', 'lsuperior', 'msuperior', 'nsuperior', 'osuperior', '', '', 'rsuperior', 'ssuperior', 'tsuperior', '', 'ff', 'fi', 'fl', 'ffi', 'ffl', 'parenleftinferior', '', 'parenrightinferior', 'Circumflexsmall', 'hyphensuperior', 'Gravesmall', 'Asmall', 'Bsmall', 'Csmall', 'Dsmall', 'Esmall', 'Fsmall', 'Gsmall', 'Hsmall', 'Ismall', 'Jsmall', 'Ksmall', 'Lsmall', 'Msmall', 'Nsmall', 'Osmall', 'Psmall', 'Qsmall', 'Rsmall', 'Ssmall', 'Tsmall', 'Usmall', 'Vsmall', 'Wsmall', 'Xsmall', 'Ysmall', 'Zsmall', 'colonmonetary', 'onefitted', 'rupiah', 'Tildesmall', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'exclamdownsmall', 'centoldstyle', 'Lslashsmall', '', '', 'Scaronsmall', 'Zcaronsmall', 'Dieresissmall', 'Brevesmall', 'Caronsmall', '', 'Dotaccentsmall', '', '', 'Macronsmall', '', '', 'figuredash', 'hypheninferior', '', '', 'Ogoneksmall', 'Ringsmall', 'Cedillasmall', '', '', '', 'onequarter', 'onehalf', 'threequarters', 'questiondownsmall', 'oneeighth', 'threeeighths', 'fiveeighths', 'seveneighths', 'onethird', 'twothirds', '', '', 'zerosuperior', 'onesuperior', 'twosuperior', 'threesuperior', 'foursuperior', 'fivesuperior', 'sixsuperior', 'sevensuperior', 'eightsuperior', 'ninesuperior', 'zeroinferior', 'oneinferior', 'twoinferior', 'threeinferior', 'fourinferior', 'fiveinferior', 'sixinferior', 'seveninferior', 'eightinferior', 'nineinferior', 'centinferior', 'dollarinferior', 'periodinferior', 'commainferior', 'Agravesmall', 'Aacutesmall', 'Acircumflexsmall', 'Atildesmall', 'Adieresissmall', 'Aringsmall', 'AEsmall', 'Ccedillasmall', 'Egravesmall', 'Eacutesmall', 'Ecircumflexsmall', 'Edieresissmall', 'Igravesmall', 'Iacutesmall', 'Icircumflexsmall', 'Idieresissmall', 'Ethsmall', 'Ntildesmall', 'Ogravesmall', 'Oacutesmall', 'Ocircumflexsmall', 'Otildesmall', 'Odieresissmall', 'OEsmall', 'Oslashsmall', 'Ugravesmall', 'Uacutesmall', 'Ucircumflexsmall', 'Udieresissmall', 'Yacutesmall', 'Thornsmall', 'Ydieresissmall'];
var MacExpertEncoding = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'space', 'exclamsmall', 'Hungarumlautsmall', 'centoldstyle', 'dollaroldstyle', 'dollarsuperior', 'ampersandsmall', 'Acutesmall', 'parenleftsuperior', 'parenrightsuperior', 'twodotenleader', 'onedotenleader', 'comma', 'hyphen', 'period', 'fraction', 'zerooldstyle', 'oneoldstyle', 'twooldstyle', 'threeoldstyle', 'fouroldstyle', 'fiveoldstyle', 'sixoldstyle', 'sevenoldstyle', 'eightoldstyle', 'nineoldstyle', 'colon', 'semicolon', '', 'threequartersemdash', '', 'questionsmall', '', '', '', '', 'Ethsmall', '', '', 'onequarter', 'onehalf', 'threequarters', 'oneeighth', 'threeeighths', 'fiveeighths', 'seveneighths', 'onethird', 'twothirds', '', '', '', '', '', '', 'ff', 'fi', 'fl', 'ffi', 'ffl', 'parenleftinferior', '', 'parenrightinferior', 'Circumflexsmall', 'hypheninferior', 'Gravesmall', 'Asmall', 'Bsmall', 'Csmall', 'Dsmall', 'Esmall', 'Fsmall', 'Gsmall', 'Hsmall', 'Ismall', 'Jsmall', 'Ksmall', 'Lsmall', 'Msmall', 'Nsmall', 'Osmall', 'Psmall', 'Qsmall', 'Rsmall', 'Ssmall', 'Tsmall', 'Usmall', 'Vsmall', 'Wsmall', 'Xsmall', 'Ysmall', 'Zsmall', 'colonmonetary', 'onefitted', 'rupiah', 'Tildesmall', '', '', 'asuperior', 'centsuperior', '', '', '', '', 'Aacutesmall', 'Agravesmall', 'Acircumflexsmall', 'Adieresissmall', 'Atildesmall', 'Aringsmall', 'Ccedillasmall', 'Eacutesmall', 'Egravesmall', 'Ecircumflexsmall', 'Edieresissmall', 'Iacutesmall', 'Igravesmall', 'Icircumflexsmall', 'Idieresissmall', 'Ntildesmall', 'Oacutesmall', 'Ogravesmall', 'Ocircumflexsmall', 'Odieresissmall', 'Otildesmall', 'Uacutesmall', 'Ugravesmall', 'Ucircumflexsmall', 'Udieresissmall', '', 'eightsuperior', 'fourinferior', 'threeinferior', 'sixinferior', 'eightinferior', 'seveninferior', 'Scaronsmall', '', 'centinferior', 'twoinferior', '', 'Dieresissmall', '', 'Caronsmall', 'osuperior', 'fiveinferior', '', 'commainferior', 'periodinferior', 'Yacutesmall', '', 'dollarinferior', '', 'Thornsmall', '', 'nineinferior', 'zeroinferior', 'Zcaronsmall', 'AEsmall', 'Oslashsmall', 'questiondownsmall', 'oneinferior', 'Lslashsmall', '', '', '', '', '', '', 'Cedillasmall', '', '', '', '', '', 'OEsmall', 'figuredash', 'hyphensuperior', '', '', '', '', 'exclamdownsmall', '', 'Ydieresissmall', '', 'onesuperior', 'twosuperior', 'threesuperior', 'foursuperior', 'fivesuperior', 'sixsuperior', 'sevensuperior', 'ninesuperior', 'zerosuperior', '', 'esuperior', 'rsuperior', 'tsuperior', '', '', 'isuperior', 'ssuperior', 'dsuperior', '', '', '', '', '', 'lsuperior', 'Ogoneksmall', 'Brevesmall', 'Macronsmall', 'bsuperior', 'nsuperior', 'msuperior', 'commasuperior', 'periodsuperior', 'Dotaccentsmall', 'Ringsmall'];
var MacRomanEncoding = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'space', 'exclam', 'quotedbl', 'numbersign', 'dollar', 'percent', 'ampersand', 'quotesingle', 'parenleft', 'parenright', 'asterisk', 'plus', 'comma', 'hyphen', 'period', 'slash', 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'colon', 'semicolon', 'less', 'equal', 'greater', 'question', 'at', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'bracketleft', 'backslash', 'bracketright', 'asciicircum', 'underscore', 'grave', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'braceleft', 'bar', 'braceright', 'asciitilde', '', 'Adieresis', 'Aring', 'Ccedilla', 'Eacute', 'Ntilde', 'Odieresis', 'Udieresis', 'aacute', 'agrave', 'acircumflex', 'adieresis', 'atilde', 'aring', 'ccedilla', 'eacute', 'egrave', 'ecircumflex', 'edieresis', 'iacute', 'igrave', 'icircumflex', 'idieresis', 'ntilde', 'oacute', 'ograve', 'ocircumflex', 'odieresis', 'otilde', 'uacute', 'ugrave', 'ucircumflex', 'udieresis', 'dagger', 'degree', 'cent', 'sterling', 'section', 'bullet', 'paragraph', 'germandbls', 'registered', 'copyright', 'trademark', 'acute', 'dieresis', 'notequal', 'AE', 'Oslash', 'infinity', 'plusminus', 'lessequal', 'greaterequal', 'yen', 'mu', 'partialdiff', 'summation', 'product', 'pi', 'integral', 'ordfeminine', 'ordmasculine', 'Omega', 'ae', 'oslash', 'questiondown', 'exclamdown', 'logicalnot', 'radical', 'florin', 'approxequal', 'Delta', 'guillemotleft', 'guillemotright', 'ellipsis', 'space', 'Agrave', 'Atilde', 'Otilde', 'OE', 'oe', 'endash', 'emdash', 'quotedblleft', 'quotedblright', 'quoteleft', 'quoteright', 'divide', 'lozenge', 'ydieresis', 'Ydieresis', 'fraction', 'currency', 'guilsinglleft', 'guilsinglright', 'fi', 'fl', 'daggerdbl', 'periodcentered', 'quotesinglbase', 'quotedblbase', 'perthousand', 'Acircumflex', 'Ecircumflex', 'Aacute', 'Edieresis', 'Egrave', 'Iacute', 'Icircumflex', 'Idieresis', 'Igrave', 'Oacute', 'Ocircumflex', 'apple', 'Ograve', 'Uacute', 'Ucircumflex', 'Ugrave', 'dotlessi', 'circumflex', 'tilde', 'macron', 'breve', 'dotaccent', 'ring', 'cedilla', 'hungarumlaut', 'ogonek', 'caron'];
var StandardEncoding = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'space', 'exclam', 'quotedbl', 'numbersign', 'dollar', 'percent', 'ampersand', 'quoteright', 'parenleft', 'parenright', 'asterisk', 'plus', 'comma', 'hyphen', 'period', 'slash', 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'colon', 'semicolon', 'less', 'equal', 'greater', 'question', 'at', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'bracketleft', 'backslash', 'bracketright', 'asciicircum', 'underscore', 'quoteleft', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'braceleft', 'bar', 'braceright', 'asciitilde', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'exclamdown', 'cent', 'sterling', 'fraction', 'yen', 'florin', 'section', 'currency', 'quotesingle', 'quotedblleft', 'guillemotleft', 'guilsinglleft', 'guilsinglright', 'fi', 'fl', '', 'endash', 'dagger', 'daggerdbl', 'periodcentered', '', 'paragraph', 'bullet', 'quotesinglbase', 'quotedblbase', 'quotedblright', 'guillemotright', 'ellipsis', 'perthousand', '', 'questiondown', '', 'grave', 'acute', 'circumflex', 'tilde', 'macron', 'breve', 'dotaccent', 'dieresis', '', 'ring', 'cedilla', '', 'hungarumlaut', 'ogonek', 'caron', 'emdash', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'AE', '', 'ordfeminine', '', '', '', '', 'Lslash', 'Oslash', 'OE', 'ordmasculine', '', '', '', '', '', 'ae', '', '', '', 'dotlessi', '', '', 'lslash', 'oslash', 'oe', 'germandbls'];
var WinAnsiEncoding = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'space', 'exclam', 'quotedbl', 'numbersign', 'dollar', 'percent', 'ampersand', 'quotesingle', 'parenleft', 'parenright', 'asterisk', 'plus', 'comma', 'hyphen', 'period', 'slash', 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'colon', 'semicolon', 'less', 'equal', 'greater', 'question', 'at', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'bracketleft', 'backslash', 'bracketright', 'asciicircum', 'underscore', 'grave', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'braceleft', 'bar', 'braceright', 'asciitilde', 'bullet', 'Euro', 'bullet', 'quotesinglbase', 'florin', 'quotedblbase', 'ellipsis', 'dagger', 'daggerdbl', 'circumflex', 'perthousand', 'Scaron', 'guilsinglleft', 'OE', 'bullet', 'Zcaron', 'bullet', 'bullet', 'quoteleft', 'quoteright', 'quotedblleft', 'quotedblright', 'bullet', 'endash', 'emdash', 'tilde', 'trademark', 'scaron', 'guilsinglright', 'oe', 'bullet', 'zcaron', 'Ydieresis', 'space', 'exclamdown', 'cent', 'sterling', 'currency', 'yen', 'brokenbar', 'section', 'dieresis', 'copyright', 'ordfeminine', 'guillemotleft', 'logicalnot', 'hyphen', 'registered', 'macron', 'degree', 'plusminus', 'twosuperior', 'threesuperior', 'acute', 'mu', 'paragraph', 'periodcentered', 'cedilla', 'onesuperior', 'ordmasculine', 'guillemotright', 'onequarter', 'onehalf', 'threequarters', 'questiondown', 'Agrave', 'Aacute', 'Acircumflex', 'Atilde', 'Adieresis', 'Aring', 'AE', 'Ccedilla', 'Egrave', 'Eacute', 'Ecircumflex', 'Edieresis', 'Igrave', 'Iacute', 'Icircumflex', 'Idieresis', 'Eth', 'Ntilde', 'Ograve', 'Oacute', 'Ocircumflex', 'Otilde', 'Odieresis', 'multiply', 'Oslash', 'Ugrave', 'Uacute', 'Ucircumflex', 'Udieresis', 'Yacute', 'Thorn', 'germandbls', 'agrave', 'aacute', 'acircumflex', 'atilde', 'adieresis', 'aring', 'ae', 'ccedilla', 'egrave', 'eacute', 'ecircumflex', 'edieresis', 'igrave', 'iacute', 'icircumflex', 'idieresis', 'eth', 'ntilde', 'ograve', 'oacute', 'ocircumflex', 'otilde', 'odieresis', 'divide', 'oslash', 'ugrave', 'uacute', 'ucircumflex', 'udieresis', 'yacute', 'thorn', 'ydieresis'];
var SymbolSetEncoding = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'space', 'exclam', 'universal', 'numbersign', 'existential', 'percent', 'ampersand', 'suchthat', 'parenleft', 'parenright', 'asteriskmath', 'plus', 'comma', 'minus', 'period', 'slash', 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'colon', 'semicolon', 'less', 'equal', 'greater', 'question', 'congruent', 'Alpha', 'Beta', 'Chi', 'Delta', 'Epsilon', 'Phi', 'Gamma', 'Eta', 'Iota', 'theta1', 'Kappa', 'Lambda', 'Mu', 'Nu', 'Omicron', 'Pi', 'Theta', 'Rho', 'Sigma', 'Tau', 'Upsilon', 'sigma1', 'Omega', 'Xi', 'Psi', 'Zeta', 'bracketleft', 'therefore', 'bracketright', 'perpendicular', 'underscore', 'radicalex', 'alpha', 'beta', 'chi', 'delta', 'epsilon', 'phi', 'gamma', 'eta', 'iota', 'phi1', 'kappa', 'lambda', 'mu', 'nu', 'omicron', 'pi', 'theta', 'rho', 'sigma', 'tau', 'upsilon', 'omega1', 'omega', 'xi', 'psi', 'zeta', 'braceleft', 'bar', 'braceright', 'similar', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Euro', 'Upsilon1', 'minute', 'lessequal', 'fraction', 'infinity', 'florin', 'club', 'diamond', 'heart', 'spade', 'arrowboth', 'arrowleft', 'arrowup', 'arrowright', 'arrowdown', 'degree', 'plusminus', 'second', 'greaterequal', 'multiply', 'proportional', 'partialdiff', 'bullet', 'divide', 'notequal', 'equivalence', 'approxequal', 'ellipsis', 'arrowvertex', 'arrowhorizex', 'carriagereturn', 'aleph', 'Ifraktur', 'Rfraktur', 'weierstrass', 'circlemultiply', 'circleplus', 'emptyset', 'intersection', 'union', 'propersuperset', 'reflexsuperset', 'notsubset', 'propersubset', 'reflexsubset', 'element', 'notelement', 'angle', 'gradient', 'registerserif', 'copyrightserif', 'trademarkserif', 'product', 'radical', 'dotmath', 'logicalnot', 'logicaland', 'logicalor', 'arrowdblboth', 'arrowdblleft', 'arrowdblup', 'arrowdblright', 'arrowdbldown', 'lozenge', 'angleleft', 'registersans', 'copyrightsans', 'trademarksans', 'summation', 'parenlefttp', 'parenleftex', 'parenleftbt', 'bracketlefttp', 'bracketleftex', 'bracketleftbt', 'bracelefttp', 'braceleftmid', 'braceleftbt', 'braceex', '', 'angleright', 'integral', 'integraltp', 'integralex', 'integralbt', 'parenrighttp', 'parenrightex', 'parenrightbt', 'bracketrighttp', 'bracketrightex', 'bracketrightbt', 'bracerighttp', 'bracerightmid', 'bracerightbt'];
var ZapfDingbatsEncoding = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'space', 'a1', 'a2', 'a202', 'a3', 'a4', 'a5', 'a119', 'a118', 'a117', 'a11', 'a12', 'a13', 'a14', 'a15', 'a16', 'a105', 'a17', 'a18', 'a19', 'a20', 'a21', 'a22', 'a23', 'a24', 'a25', 'a26', 'a27', 'a28', 'a6', 'a7', 'a8', 'a9', 'a10', 'a29', 'a30', 'a31', 'a32', 'a33', 'a34', 'a35', 'a36', 'a37', 'a38', 'a39', 'a40', 'a41', 'a42', 'a43', 'a44', 'a45', 'a46', 'a47', 'a48', 'a49', 'a50', 'a51', 'a52', 'a53', 'a54', 'a55', 'a56', 'a57', 'a58', 'a59', 'a60', 'a61', 'a62', 'a63', 'a64', 'a65', 'a66', 'a67', 'a68', 'a69', 'a70', 'a71', 'a72', 'a73', 'a74', 'a203', 'a75', 'a204', 'a76', 'a77', 'a78', 'a79', 'a81', 'a82', 'a83', 'a84', 'a97', 'a98', 'a99', 'a100', '', 'a89', 'a90', 'a93', 'a94', 'a91', 'a92', 'a205', 'a85', 'a206', 'a86', 'a87', 'a88', 'a95', 'a96', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'a101', 'a102', 'a103', 'a104', 'a106', 'a107', 'a108', 'a112', 'a111', 'a110', 'a109', 'a120', 'a121', 'a122', 'a123', 'a124', 'a125', 'a126', 'a127', 'a128', 'a129', 'a130', 'a131', 'a132', 'a133', 'a134', 'a135', 'a136', 'a137', 'a138', 'a139', 'a140', 'a141', 'a142', 'a143', 'a144', 'a145', 'a146', 'a147', 'a148', 'a149', 'a150', 'a151', 'a152', 'a153', 'a154', 'a155', 'a156', 'a157', 'a158', 'a159', 'a160', 'a161', 'a163', 'a164', 'a196', 'a165', 'a192', 'a166', 'a167', 'a168', 'a169', 'a170', 'a171', 'a172', 'a173', 'a162', 'a174', 'a175', 'a176', 'a177', 'a178', 'a179', 'a193', 'a180', 'a199', 'a181', 'a200', 'a182', '', 'a201', 'a183', 'a184', 'a197', 'a185', 'a194', 'a198', 'a186', 'a195', 'a187', 'a188', 'a189', 'a190', 'a191'];
function getEncoding(encodingName) {
  switch (encodingName) {
    case 'WinAnsiEncoding':
      return WinAnsiEncoding;
    case 'StandardEncoding':
      return StandardEncoding;
    case 'MacRomanEncoding':
      return MacRomanEncoding;
    case 'SymbolSetEncoding':
      return SymbolSetEncoding;
    case 'ZapfDingbatsEncoding':
      return ZapfDingbatsEncoding;
    case 'ExpertEncoding':
      return ExpertEncoding;
    case 'MacExpertEncoding':
      return MacExpertEncoding;
    default:
      return null;
  }
}
exports.WinAnsiEncoding = WinAnsiEncoding;
exports.StandardEncoding = StandardEncoding;
exports.MacRomanEncoding = MacRomanEncoding;
exports.SymbolSetEncoding = SymbolSetEncoding;
exports.ZapfDingbatsEncoding = ZapfDingbatsEncoding;
exports.ExpertEncoding = ExpertEncoding;
exports.getEncoding = getEncoding;

/***/ }),
/* 5 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Parser = exports.Linearization = exports.Lexer = undefined;

var _stream = __w_pdfjs_require__(2);

var _util = __w_pdfjs_require__(0);

var _primitives = __w_pdfjs_require__(1);

var MAX_LENGTH_TO_CACHE = 1000;
var Parser = function ParserClosure() {
  function Parser(lexer, allowStreams, xref, recoveryMode) {
    this.lexer = lexer;
    this.allowStreams = allowStreams;
    this.xref = xref;
    this.recoveryMode = recoveryMode || false;
    this.imageCache = Object.create(null);
    this.refill();
  }
  Parser.prototype = {
    refill: function Parser_refill() {
      this.buf1 = this.lexer.getObj();
      this.buf2 = this.lexer.getObj();
    },
    shift: function Parser_shift() {
      if ((0, _primitives.isCmd)(this.buf2, 'ID')) {
        this.buf1 = this.buf2;
        this.buf2 = null;
      } else {
        this.buf1 = this.buf2;
        this.buf2 = this.lexer.getObj();
      }
    },
    tryShift: function Parser_tryShift() {
      try {
        this.shift();
        return true;
      } catch (e) {
        if (e instanceof _util.MissingDataException) {
          throw e;
        }
        return false;
      }
    },
    getObj: function Parser_getObj(cipherTransform) {
      var buf1 = this.buf1;
      this.shift();
      if (buf1 instanceof _primitives.Cmd) {
        switch (buf1.cmd) {
          case 'BI':
            return this.makeInlineImage(cipherTransform);
          case '[':
            var array = [];
            while (!(0, _primitives.isCmd)(this.buf1, ']') && !(0, _primitives.isEOF)(this.buf1)) {
              array.push(this.getObj(cipherTransform));
            }
            if ((0, _primitives.isEOF)(this.buf1)) {
              if (!this.recoveryMode) {
                throw new _util.FormatError('End of file inside array');
              }
              return array;
            }
            this.shift();
            return array;
          case '<<':
            var dict = new _primitives.Dict(this.xref);
            while (!(0, _primitives.isCmd)(this.buf1, '>>') && !(0, _primitives.isEOF)(this.buf1)) {
              if (!(0, _primitives.isName)(this.buf1)) {
                (0, _util.info)('Malformed dictionary: key must be a name object');
                this.shift();
                continue;
              }
              var key = this.buf1.name;
              this.shift();
              if ((0, _primitives.isEOF)(this.buf1)) {
                break;
              }
              dict.set(key, this.getObj(cipherTransform));
            }
            if ((0, _primitives.isEOF)(this.buf1)) {
              if (!this.recoveryMode) {
                throw new _util.FormatError('End of file inside dictionary');
              }
              return dict;
            }
            if ((0, _primitives.isCmd)(this.buf2, 'stream')) {
              return this.allowStreams ? this.makeStream(dict, cipherTransform) : dict;
            }
            this.shift();
            return dict;
          default:
            return buf1;
        }
      }
      if ((0, _util.isInt)(buf1)) {
        var num = buf1;
        if ((0, _util.isInt)(this.buf1) && (0, _primitives.isCmd)(this.buf2, 'R')) {
          var ref = new _primitives.Ref(num, this.buf1);
          this.shift();
          this.shift();
          return ref;
        }
        return num;
      }
      if ((0, _util.isString)(buf1)) {
        var str = buf1;
        if (cipherTransform) {
          str = cipherTransform.decryptString(str);
        }
        return str;
      }
      return buf1;
    },
    findDefaultInlineStreamEnd: function Parser_findDefaultInlineStreamEnd(stream) {
      var E = 0x45,
          I = 0x49,
          SPACE = 0x20,
          LF = 0xA,
          CR = 0xD;
      var startPos = stream.pos,
          state = 0,
          ch,
          i,
          n,
          followingBytes;
      while ((ch = stream.getByte()) !== -1) {
        if (state === 0) {
          state = ch === E ? 1 : 0;
        } else if (state === 1) {
          state = ch === I ? 2 : 0;
        } else {
          (0, _util.assert)(state === 2);
          if (ch === SPACE || ch === LF || ch === CR) {
            n = 5;
            followingBytes = stream.peekBytes(n);
            for (i = 0; i < n; i++) {
              ch = followingBytes[i];
              if (ch !== LF && ch !== CR && (ch < SPACE || ch > 0x7F)) {
                state = 0;
                break;
              }
            }
            if (state === 2) {
              break;
            }
          } else {
            state = 0;
          }
        }
      }
      return stream.pos - 4 - startPos;
    },
    findDCTDecodeInlineStreamEnd: function Parser_findDCTDecodeInlineStreamEnd(stream) {
      var startPos = stream.pos,
          foundEOI = false,
          b,
          markerLength,
          length;
      while ((b = stream.getByte()) !== -1) {
        if (b !== 0xFF) {
          continue;
        }
        switch (stream.getByte()) {
          case 0x00:
            break;
          case 0xFF:
            stream.skip(-1);
            break;
          case 0xD9:
            foundEOI = true;
            break;
          case 0xC0:
          case 0xC1:
          case 0xC2:
          case 0xC3:
          case 0xC5:
          case 0xC6:
          case 0xC7:
          case 0xC9:
          case 0xCA:
          case 0xCB:
          case 0xCD:
          case 0xCE:
          case 0xCF:
          case 0xC4:
          case 0xCC:
          case 0xDA:
          case 0xDB:
          case 0xDC:
          case 0xDD:
          case 0xDE:
          case 0xDF:
          case 0xE0:
          case 0xE1:
          case 0xE2:
          case 0xE3:
          case 0xE4:
          case 0xE5:
          case 0xE6:
          case 0xE7:
          case 0xE8:
          case 0xE9:
          case 0xEA:
          case 0xEB:
          case 0xEC:
          case 0xED:
          case 0xEE:
          case 0xEF:
          case 0xFE:
            markerLength = stream.getUint16();
            if (markerLength > 2) {
              stream.skip(markerLength - 2);
            } else {
              stream.skip(-2);
            }
            break;
        }
        if (foundEOI) {
          break;
        }
      }
      length = stream.pos - startPos;
      if (b === -1) {
        (0, _util.warn)('Inline DCTDecode image stream: ' + 'EOI marker not found, searching for /EI/ instead.');
        stream.skip(-length);
        return this.findDefaultInlineStreamEnd(stream);
      }
      this.inlineStreamSkipEI(stream);
      return length;
    },
    findASCII85DecodeInlineStreamEnd: function Parser_findASCII85DecodeInlineStreamEnd(stream) {
      var TILDE = 0x7E,
          GT = 0x3E;
      var startPos = stream.pos,
          ch,
          length;
      while ((ch = stream.getByte()) !== -1) {
        if (ch === TILDE && stream.peekByte() === GT) {
          stream.skip();
          break;
        }
      }
      length = stream.pos - startPos;
      if (ch === -1) {
        (0, _util.warn)('Inline ASCII85Decode image stream: ' + 'EOD marker not found, searching for /EI/ instead.');
        stream.skip(-length);
        return this.findDefaultInlineStreamEnd(stream);
      }
      this.inlineStreamSkipEI(stream);
      return length;
    },
    findASCIIHexDecodeInlineStreamEnd: function Parser_findASCIIHexDecodeInlineStreamEnd(stream) {
      var GT = 0x3E;
      var startPos = stream.pos,
          ch,
          length;
      while ((ch = stream.getByte()) !== -1) {
        if (ch === GT) {
          break;
        }
      }
      length = stream.pos - startPos;
      if (ch === -1) {
        (0, _util.warn)('Inline ASCIIHexDecode image stream: ' + 'EOD marker not found, searching for /EI/ instead.');
        stream.skip(-length);
        return this.findDefaultInlineStreamEnd(stream);
      }
      this.inlineStreamSkipEI(stream);
      return length;
    },
    inlineStreamSkipEI: function Parser_inlineStreamSkipEI(stream) {
      var E = 0x45,
          I = 0x49;
      var state = 0,
          ch;
      while ((ch = stream.getByte()) !== -1) {
        if (state === 0) {
          state = ch === E ? 1 : 0;
        } else if (state === 1) {
          state = ch === I ? 2 : 0;
        } else if (state === 2) {
          break;
        }
      }
    },
    makeInlineImage: function Parser_makeInlineImage(cipherTransform) {
      var lexer = this.lexer;
      var stream = lexer.stream;
      var dict = new _primitives.Dict(this.xref);
      while (!(0, _primitives.isCmd)(this.buf1, 'ID') && !(0, _primitives.isEOF)(this.buf1)) {
        if (!(0, _primitives.isName)(this.buf1)) {
          throw new _util.FormatError('Dictionary key must be a name object');
        }
        var key = this.buf1.name;
        this.shift();
        if ((0, _primitives.isEOF)(this.buf1)) {
          break;
        }
        dict.set(key, this.getObj(cipherTransform));
      }
      var filter = dict.get('Filter', 'F'),
          filterName;
      if ((0, _primitives.isName)(filter)) {
        filterName = filter.name;
      } else if ((0, _util.isArray)(filter)) {
        var filterZero = this.xref.fetchIfRef(filter[0]);
        if ((0, _primitives.isName)(filterZero)) {
          filterName = filterZero.name;
        }
      }
      var startPos = stream.pos,
          length,
          i,
          ii;
      if (filterName === 'DCTDecode' || filterName === 'DCT') {
        length = this.findDCTDecodeInlineStreamEnd(stream);
      } else if (filterName === 'ASCII85Decode' || filterName === 'A85') {
        length = this.findASCII85DecodeInlineStreamEnd(stream);
      } else if (filterName === 'ASCIIHexDecode' || filterName === 'AHx') {
        length = this.findASCIIHexDecodeInlineStreamEnd(stream);
      } else {
        length = this.findDefaultInlineStreamEnd(stream);
      }
      var imageStream = stream.makeSubStream(startPos, length, dict);
      var adler32;
      if (length < MAX_LENGTH_TO_CACHE) {
        var imageBytes = imageStream.getBytes();
        imageStream.reset();
        var a = 1;
        var b = 0;
        for (i = 0, ii = imageBytes.length; i < ii; ++i) {
          a += imageBytes[i] & 0xff;
          b += a;
        }
        adler32 = b % 65521 << 16 | a % 65521;
        if (this.imageCache.adler32 === adler32) {
          this.buf2 = _primitives.Cmd.get('EI');
          this.shift();
          this.imageCache[adler32].reset();
          return this.imageCache[adler32];
        }
      }
      if (cipherTransform) {
        imageStream = cipherTransform.createStream(imageStream, length);
      }
      imageStream = this.filter(imageStream, dict, length);
      imageStream.dict = dict;
      if (adler32 !== undefined) {
        imageStream.cacheKey = 'inline_' + length + '_' + adler32;
        this.imageCache[adler32] = imageStream;
      }
      this.buf2 = _primitives.Cmd.get('EI');
      this.shift();
      return imageStream;
    },
    makeStream: function Parser_makeStream(dict, cipherTransform) {
      var lexer = this.lexer;
      var stream = lexer.stream;
      lexer.skipToNextLine();
      var pos = stream.pos - 1;
      var length = dict.get('Length');
      if (!(0, _util.isInt)(length)) {
        (0, _util.info)('Bad ' + length + ' attribute in stream');
        length = 0;
      }
      stream.pos = pos + length;
      lexer.nextChar();
      if (this.tryShift() && (0, _primitives.isCmd)(this.buf2, 'endstream')) {
        this.shift();
      } else {
        stream.pos = pos;
        var SCAN_BLOCK_SIZE = 2048;
        var ENDSTREAM_SIGNATURE_LENGTH = 9;
        var ENDSTREAM_SIGNATURE = [0x65, 0x6E, 0x64, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6D];
        var skipped = 0,
            found = false,
            i,
            j;
        while (stream.pos < stream.end) {
          var scanBytes = stream.peekBytes(SCAN_BLOCK_SIZE);
          var scanLength = scanBytes.length - ENDSTREAM_SIGNATURE_LENGTH;
          if (scanLength <= 0) {
            break;
          }
          found = false;
          i = 0;
          while (i < scanLength) {
            j = 0;
            while (j < ENDSTREAM_SIGNATURE_LENGTH && scanBytes[i + j] === ENDSTREAM_SIGNATURE[j]) {
              j++;
            }
            if (j >= ENDSTREAM_SIGNATURE_LENGTH) {
              found = true;
              break;
            }
            i++;
          }
          if (found) {
            skipped += i;
            stream.pos += i;
            break;
          }
          skipped += scanLength;
          stream.pos += scanLength;
        }
        if (!found) {
          throw new _util.FormatError('Missing endstream');
        }
        length = skipped;
        lexer.nextChar();
        this.shift();
        this.shift();
      }
      this.shift();
      stream = stream.makeSubStream(pos, length, dict);
      if (cipherTransform) {
        stream = cipherTransform.createStream(stream, length);
      }
      stream = this.filter(stream, dict, length);
      stream.dict = dict;
      return stream;
    },
    filter: function Parser_filter(stream, dict, length) {
      var filter = dict.get('Filter', 'F');
      var params = dict.get('DecodeParms', 'DP');
      if ((0, _primitives.isName)(filter)) {
        if ((0, _util.isArray)(params)) {
          params = this.xref.fetchIfRef(params[0]);
        }
        return this.makeFilter(stream, filter.name, length, params);
      }
      var maybeLength = length;
      if ((0, _util.isArray)(filter)) {
        var filterArray = filter;
        var paramsArray = params;
        for (var i = 0, ii = filterArray.length; i < ii; ++i) {
          filter = this.xref.fetchIfRef(filterArray[i]);
          if (!(0, _primitives.isName)(filter)) {
            throw new _util.FormatError('Bad filter name: ' + filter);
          }
          params = null;
          if ((0, _util.isArray)(paramsArray) && i in paramsArray) {
            params = this.xref.fetchIfRef(paramsArray[i]);
          }
          stream = this.makeFilter(stream, filter.name, maybeLength, params);
          maybeLength = null;
        }
      }
      return stream;
    },
    makeFilter: function Parser_makeFilter(stream, name, maybeLength, params) {
      if (maybeLength === 0) {
        (0, _util.warn)('Empty "' + name + '" stream.');
        return new _stream.NullStream(stream);
      }
      try {
        var xrefStreamStats = this.xref.stats.streamTypes;
        if (name === 'FlateDecode' || name === 'Fl') {
          xrefStreamStats[_util.StreamType.FLATE] = true;
          if (params) {
            return new _stream.PredictorStream(new _stream.FlateStream(stream, maybeLength), maybeLength, params);
          }
          return new _stream.FlateStream(stream, maybeLength);
        }
        if (name === 'LZWDecode' || name === 'LZW') {
          xrefStreamStats[_util.StreamType.LZW] = true;
          var earlyChange = 1;
          if (params) {
            if (params.has('EarlyChange')) {
              earlyChange = params.get('EarlyChange');
            }
            return new _stream.PredictorStream(new _stream.LZWStream(stream, maybeLength, earlyChange), maybeLength, params);
          }
          return new _stream.LZWStream(stream, maybeLength, earlyChange);
        }
        if (name === 'DCTDecode' || name === 'DCT') {
          xrefStreamStats[_util.StreamType.DCT] = true;
          return new _stream.JpegStream(stream, maybeLength, stream.dict, params);
        }
        if (name === 'JPXDecode' || name === 'JPX') {
          xrefStreamStats[_util.StreamType.JPX] = true;
          return new _stream.JpxStream(stream, maybeLength, stream.dict, params);
        }
        if (name === 'ASCII85Decode' || name === 'A85') {
          xrefStreamStats[_util.StreamType.A85] = true;
          return new _stream.Ascii85Stream(stream, maybeLength);
        }
        if (name === 'ASCIIHexDecode' || name === 'AHx') {
          xrefStreamStats[_util.StreamType.AHX] = true;
          return new _stream.AsciiHexStream(stream, maybeLength);
        }
        if (name === 'CCITTFaxDecode' || name === 'CCF') {
          xrefStreamStats[_util.StreamType.CCF] = true;
          return new _stream.CCITTFaxStream(stream, maybeLength, params);
        }
        if (name === 'RunLengthDecode' || name === 'RL') {
          xrefStreamStats[_util.StreamType.RL] = true;
          return new _stream.RunLengthStream(stream, maybeLength);
        }
        if (name === 'JBIG2Decode') {
          xrefStreamStats[_util.StreamType.JBIG] = true;
          return new _stream.Jbig2Stream(stream, maybeLength, stream.dict, params);
        }
        (0, _util.warn)('filter "' + name + '" not supported yet');
        return stream;
      } catch (ex) {
        if (ex instanceof _util.MissingDataException) {
          throw ex;
        }
        (0, _util.warn)('Invalid stream: \"' + ex + '\"');
        return new _stream.NullStream(stream);
      }
    }
  };
  return Parser;
}();
var Lexer = function LexerClosure() {
  function Lexer(stream, knownCommands) {
    this.stream = stream;
    this.nextChar();
    this.strBuf = [];
    this.knownCommands = knownCommands;
  }
  var specialChars = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  function toHexDigit(ch) {
    if (ch >= 0x30 && ch <= 0x39) {
      return ch & 0x0F;
    }
    if (ch >= 0x41 && ch <= 0x46 || ch >= 0x61 && ch <= 0x66) {
      return (ch & 0x0F) + 9;
    }
    return -1;
  }
  Lexer.prototype = {
    nextChar: function Lexer_nextChar() {
      return this.currentChar = this.stream.getByte();
    },
    peekChar: function Lexer_peekChar() {
      return this.stream.peekByte();
    },
    getNumber: function Lexer_getNumber() {
      var ch = this.currentChar;
      var eNotation = false;
      var divideBy = 0;
      var sign = 1;
      if (ch === 0x2D) {
        sign = -1;
        ch = this.nextChar();
        if (ch === 0x2D) {
          ch = this.nextChar();
        }
      } else if (ch === 0x2B) {
        ch = this.nextChar();
      }
      if (ch === 0x2E) {
        divideBy = 10;
        ch = this.nextChar();
      }
      if (ch === 0x0A || ch === 0x0D) {
        do {
          ch = this.nextChar();
        } while (ch === 0x0A || ch === 0x0D);
      }
      if (ch < 0x30 || ch > 0x39) {
        throw new _util.FormatError('Invalid number: ' + String.fromCharCode(ch) + ' (charCode ' + ch + ')');
      }
      var baseValue = ch - 0x30;
      var powerValue = 0;
      var powerValueSign = 1;
      while ((ch = this.nextChar()) >= 0) {
        if (0x30 <= ch && ch <= 0x39) {
          var currentDigit = ch - 0x30;
          if (eNotation) {
            powerValue = powerValue * 10 + currentDigit;
          } else {
            if (divideBy !== 0) {
              divideBy *= 10;
            }
            baseValue = baseValue * 10 + currentDigit;
          }
        } else if (ch === 0x2E) {
          if (divideBy === 0) {
            divideBy = 1;
          } else {
            break;
          }
        } else if (ch === 0x2D) {
          (0, _util.warn)('Badly formatted number');
        } else if (ch === 0x45 || ch === 0x65) {
          ch = this.peekChar();
          if (ch === 0x2B || ch === 0x2D) {
            powerValueSign = ch === 0x2D ? -1 : 1;
            this.nextChar();
          } else if (ch < 0x30 || ch > 0x39) {
            break;
          }
          eNotation = true;
        } else {
          break;
        }
      }
      if (divideBy !== 0) {
        baseValue /= divideBy;
      }
      if (eNotation) {
        baseValue *= Math.pow(10, powerValueSign * powerValue);
      }
      return sign * baseValue;
    },
    getString: function Lexer_getString() {
      var numParen = 1;
      var done = false;
      var strBuf = this.strBuf;
      strBuf.length = 0;
      var ch = this.nextChar();
      while (true) {
        var charBuffered = false;
        switch (ch | 0) {
          case -1:
            (0, _util.warn)('Unterminated string');
            done = true;
            break;
          case 0x28:
            ++numParen;
            strBuf.push('(');
            break;
          case 0x29:
            if (--numParen === 0) {
              this.nextChar();
              done = true;
            } else {
              strBuf.push(')');
            }
            break;
          case 0x5C:
            ch = this.nextChar();
            switch (ch) {
              case -1:
                (0, _util.warn)('Unterminated string');
                done = true;
                break;
              case 0x6E:
                strBuf.push('\n');
                break;
              case 0x72:
                strBuf.push('\r');
                break;
              case 0x74:
                strBuf.push('\t');
                break;
              case 0x62:
                strBuf.push('\b');
                break;
              case 0x66:
                strBuf.push('\f');
                break;
              case 0x5C:
              case 0x28:
              case 0x29:
                strBuf.push(String.fromCharCode(ch));
                break;
              case 0x30:
              case 0x31:
              case 0x32:
              case 0x33:
              case 0x34:
              case 0x35:
              case 0x36:
              case 0x37:
                var x = ch & 0x0F;
                ch = this.nextChar();
                charBuffered = true;
                if (ch >= 0x30 && ch <= 0x37) {
                  x = (x << 3) + (ch & 0x0F);
                  ch = this.nextChar();
                  if (ch >= 0x30 && ch <= 0x37) {
                    charBuffered = false;
                    x = (x << 3) + (ch & 0x0F);
                  }
                }
                strBuf.push(String.fromCharCode(x));
                break;
              case 0x0D:
                if (this.peekChar() === 0x0A) {
                  this.nextChar();
                }
                break;
              case 0x0A:
                break;
              default:
                strBuf.push(String.fromCharCode(ch));
                break;
            }
            break;
          default:
            strBuf.push(String.fromCharCode(ch));
            break;
        }
        if (done) {
          break;
        }
        if (!charBuffered) {
          ch = this.nextChar();
        }
      }
      return strBuf.join('');
    },
    getName: function Lexer_getName() {
      var ch, previousCh;
      var strBuf = this.strBuf;
      strBuf.length = 0;
      while ((ch = this.nextChar()) >= 0 && !specialChars[ch]) {
        if (ch === 0x23) {
          ch = this.nextChar();
          if (specialChars[ch]) {
            (0, _util.warn)('Lexer_getName: ' + 'NUMBER SIGN (#) should be followed by a hexadecimal number.');
            strBuf.push('#');
            break;
          }
          var x = toHexDigit(ch);
          if (x !== -1) {
            previousCh = ch;
            ch = this.nextChar();
            var x2 = toHexDigit(ch);
            if (x2 === -1) {
              (0, _util.warn)('Lexer_getName: Illegal digit (' + String.fromCharCode(ch) + ') in hexadecimal number.');
              strBuf.push('#', String.fromCharCode(previousCh));
              if (specialChars[ch]) {
                break;
              }
              strBuf.push(String.fromCharCode(ch));
              continue;
            }
            strBuf.push(String.fromCharCode(x << 4 | x2));
          } else {
            strBuf.push('#', String.fromCharCode(ch));
          }
        } else {
          strBuf.push(String.fromCharCode(ch));
        }
      }
      if (strBuf.length > 127) {
        (0, _util.warn)('name token is longer than allowed by the spec: ' + strBuf.length);
      }
      return _primitives.Name.get(strBuf.join(''));
    },
    getHexString: function Lexer_getHexString() {
      var strBuf = this.strBuf;
      strBuf.length = 0;
      var ch = this.currentChar;
      var isFirstHex = true;
      var firstDigit;
      var secondDigit;
      while (true) {
        if (ch < 0) {
          (0, _util.warn)('Unterminated hex string');
          break;
        } else if (ch === 0x3E) {
          this.nextChar();
          break;
        } else if (specialChars[ch] === 1) {
          ch = this.nextChar();
          continue;
        } else {
          if (isFirstHex) {
            firstDigit = toHexDigit(ch);
            if (firstDigit === -1) {
              (0, _util.warn)('Ignoring invalid character "' + ch + '" in hex string');
              ch = this.nextChar();
              continue;
            }
          } else {
            secondDigit = toHexDigit(ch);
            if (secondDigit === -1) {
              (0, _util.warn)('Ignoring invalid character "' + ch + '" in hex string');
              ch = this.nextChar();
              continue;
            }
            strBuf.push(String.fromCharCode(firstDigit << 4 | secondDigit));
          }
          isFirstHex = !isFirstHex;
          ch = this.nextChar();
        }
      }
      return strBuf.join('');
    },
    getObj: function Lexer_getObj() {
      var comment = false;
      var ch = this.currentChar;
      while (true) {
        if (ch < 0) {
          return _primitives.EOF;
        }
        if (comment) {
          if (ch === 0x0A || ch === 0x0D) {
            comment = false;
          }
        } else if (ch === 0x25) {
          comment = true;
        } else if (specialChars[ch] !== 1) {
          break;
        }
        ch = this.nextChar();
      }
      switch (ch | 0) {
        case 0x30:
        case 0x31:
        case 0x32:
        case 0x33:
        case 0x34:
        case 0x35:
        case 0x36:
        case 0x37:
        case 0x38:
        case 0x39:
        case 0x2B:
        case 0x2D:
        case 0x2E:
          return this.getNumber();
        case 0x28:
          return this.getString();
        case 0x2F:
          return this.getName();
        case 0x5B:
          this.nextChar();
          return _primitives.Cmd.get('[');
        case 0x5D:
          this.nextChar();
          return _primitives.Cmd.get(']');
        case 0x3C:
          ch = this.nextChar();
          if (ch === 0x3C) {
            this.nextChar();
            return _primitives.Cmd.get('<<');
          }
          return this.getHexString();
        case 0x3E:
          ch = this.nextChar();
          if (ch === 0x3E) {
            this.nextChar();
            return _primitives.Cmd.get('>>');
          }
          return _primitives.Cmd.get('>');
        case 0x7B:
          this.nextChar();
          return _primitives.Cmd.get('{');
        case 0x7D:
          this.nextChar();
          return _primitives.Cmd.get('}');
        case 0x29:
          this.nextChar();
          throw new _util.FormatError('Illegal character: ' + ch);
      }
      var str = String.fromCharCode(ch);
      var knownCommands = this.knownCommands;
      var knownCommandFound = knownCommands && knownCommands[str] !== undefined;
      while ((ch = this.nextChar()) >= 0 && !specialChars[ch]) {
        var possibleCommand = str + String.fromCharCode(ch);
        if (knownCommandFound && knownCommands[possibleCommand] === undefined) {
          break;
        }
        if (str.length === 128) {
          throw new _util.FormatError('Command token too long: ' + str.length);
        }
        str = possibleCommand;
        knownCommandFound = knownCommands && knownCommands[str] !== undefined;
      }
      if (str === 'true') {
        return true;
      }
      if (str === 'false') {
        return false;
      }
      if (str === 'null') {
        return null;
      }
      return _primitives.Cmd.get(str);
    },
    skipToNextLine: function Lexer_skipToNextLine() {
      var ch = this.currentChar;
      while (ch >= 0) {
        if (ch === 0x0D) {
          ch = this.nextChar();
          if (ch === 0x0A) {
            this.nextChar();
          }
          break;
        } else if (ch === 0x0A) {
          this.nextChar();
          break;
        }
        ch = this.nextChar();
      }
    }
  };
  return Lexer;
}();
var Linearization = {
  create: function LinearizationCreate(stream) {
    function getInt(name, allowZeroValue) {
      var obj = linDict.get(name);
      if ((0, _util.isInt)(obj) && (allowZeroValue ? obj >= 0 : obj > 0)) {
        return obj;
      }
      throw new Error('The "' + name + '" parameter in the linearization ' + 'dictionary is invalid.');
    }
    function getHints() {
      var hints = linDict.get('H'),
          hintsLength,
          item;
      if ((0, _util.isArray)(hints) && ((hintsLength = hints.length) === 2 || hintsLength === 4)) {
        for (var index = 0; index < hintsLength; index++) {
          if (!((0, _util.isInt)(item = hints[index]) && item > 0)) {
            throw new Error('Hint (' + index + ') in the linearization dictionary is invalid.');
          }
        }
        return hints;
      }
      throw new Error('Hint array in the linearization dictionary is invalid.');
    }
    var parser = new Parser(new Lexer(stream), false, null);
    var obj1 = parser.getObj();
    var obj2 = parser.getObj();
    var obj3 = parser.getObj();
    var linDict = parser.getObj();
    var obj, length;
    if (!((0, _util.isInt)(obj1) && (0, _util.isInt)(obj2) && (0, _primitives.isCmd)(obj3, 'obj') && (0, _primitives.isDict)(linDict) && (0, _util.isNum)(obj = linDict.get('Linearized')) && obj > 0)) {
      return null;
    } else if ((length = getInt('L')) !== stream.length) {
      throw new Error('The "L" parameter in the linearization dictionary ' + 'does not equal the stream length.');
    }
    return {
      length: length,
      hints: getHints(),
      objectNumberFirst: getInt('O'),
      endFirst: getInt('E'),
      numPages: getInt('N'),
      mainXRefEntriesOffset: getInt('T'),
      pageFirst: linDict.has('P') ? getInt('P', true) : 0
    };
  }
};
exports.Lexer = Lexer;
exports.Linearization = Linearization;
exports.Parser = Parser;

/***/ }),
/* 6 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var getLookupTableFactory = __w_pdfjs_require__(0).getLookupTableFactory;
var getGlyphsUnicode = getLookupTableFactory(function (t) {
 t['A'] = 0x0041;
 t['AE'] = 0x00C6;
 t['AEacute'] = 0x01FC;
 t['AEmacron'] = 0x01E2;
 t['AEsmall'] = 0xF7E6;
 t['Aacute'] = 0x00C1;
 t['Aacutesmall'] = 0xF7E1;
 t['Abreve'] = 0x0102;
 t['Abreveacute'] = 0x1EAE;
 t['Abrevecyrillic'] = 0x04D0;
 t['Abrevedotbelow'] = 0x1EB6;
 t['Abrevegrave'] = 0x1EB0;
 t['Abrevehookabove'] = 0x1EB2;
 t['Abrevetilde'] = 0x1EB4;
 t['Acaron'] = 0x01CD;
 t['Acircle'] = 0x24B6;
 t['Acircumflex'] = 0x00C2;
 t['Acircumflexacute'] = 0x1EA4;
 t['Acircumflexdotbelow'] = 0x1EAC;
 t['Acircumflexgrave'] = 0x1EA6;
 t['Acircumflexhookabove'] = 0x1EA8;
 t['Acircumflexsmall'] = 0xF7E2;
 t['Acircumflextilde'] = 0x1EAA;
 t['Acute'] = 0xF6C9;
 t['Acutesmall'] = 0xF7B4;
 t['Acyrillic'] = 0x0410;
 t['Adblgrave'] = 0x0200;
 t['Adieresis'] = 0x00C4;
 t['Adieresiscyrillic'] = 0x04D2;
 t['Adieresismacron'] = 0x01DE;
 t['Adieresissmall'] = 0xF7E4;
 t['Adotbelow'] = 0x1EA0;
 t['Adotmacron'] = 0x01E0;
 t['Agrave'] = 0x00C0;
 t['Agravesmall'] = 0xF7E0;
 t['Ahookabove'] = 0x1EA2;
 t['Aiecyrillic'] = 0x04D4;
 t['Ainvertedbreve'] = 0x0202;
 t['Alpha'] = 0x0391;
 t['Alphatonos'] = 0x0386;
 t['Amacron'] = 0x0100;
 t['Amonospace'] = 0xFF21;
 t['Aogonek'] = 0x0104;
 t['Aring'] = 0x00C5;
 t['Aringacute'] = 0x01FA;
 t['Aringbelow'] = 0x1E00;
 t['Aringsmall'] = 0xF7E5;
 t['Asmall'] = 0xF761;
 t['Atilde'] = 0x00C3;
 t['Atildesmall'] = 0xF7E3;
 t['Aybarmenian'] = 0x0531;
 t['B'] = 0x0042;
 t['Bcircle'] = 0x24B7;
 t['Bdotaccent'] = 0x1E02;
 t['Bdotbelow'] = 0x1E04;
 t['Becyrillic'] = 0x0411;
 t['Benarmenian'] = 0x0532;
 t['Beta'] = 0x0392;
 t['Bhook'] = 0x0181;
 t['Blinebelow'] = 0x1E06;
 t['Bmonospace'] = 0xFF22;
 t['Brevesmall'] = 0xF6F4;
 t['Bsmall'] = 0xF762;
 t['Btopbar'] = 0x0182;
 t['C'] = 0x0043;
 t['Caarmenian'] = 0x053E;
 t['Cacute'] = 0x0106;
 t['Caron'] = 0xF6CA;
 t['Caronsmall'] = 0xF6F5;
 t['Ccaron'] = 0x010C;
 t['Ccedilla'] = 0x00C7;
 t['Ccedillaacute'] = 0x1E08;
 t['Ccedillasmall'] = 0xF7E7;
 t['Ccircle'] = 0x24B8;
 t['Ccircumflex'] = 0x0108;
 t['Cdot'] = 0x010A;
 t['Cdotaccent'] = 0x010A;
 t['Cedillasmall'] = 0xF7B8;
 t['Chaarmenian'] = 0x0549;
 t['Cheabkhasiancyrillic'] = 0x04BC;
 t['Checyrillic'] = 0x0427;
 t['Chedescenderabkhasiancyrillic'] = 0x04BE;
 t['Chedescendercyrillic'] = 0x04B6;
 t['Chedieresiscyrillic'] = 0x04F4;
 t['Cheharmenian'] = 0x0543;
 t['Chekhakassiancyrillic'] = 0x04CB;
 t['Cheverticalstrokecyrillic'] = 0x04B8;
 t['Chi'] = 0x03A7;
 t['Chook'] = 0x0187;
 t['Circumflexsmall'] = 0xF6F6;
 t['Cmonospace'] = 0xFF23;
 t['Coarmenian'] = 0x0551;
 t['Csmall'] = 0xF763;
 t['D'] = 0x0044;
 t['DZ'] = 0x01F1;
 t['DZcaron'] = 0x01C4;
 t['Daarmenian'] = 0x0534;
 t['Dafrican'] = 0x0189;
 t['Dcaron'] = 0x010E;
 t['Dcedilla'] = 0x1E10;
 t['Dcircle'] = 0x24B9;
 t['Dcircumflexbelow'] = 0x1E12;
 t['Dcroat'] = 0x0110;
 t['Ddotaccent'] = 0x1E0A;
 t['Ddotbelow'] = 0x1E0C;
 t['Decyrillic'] = 0x0414;
 t['Deicoptic'] = 0x03EE;
 t['Delta'] = 0x2206;
 t['Deltagreek'] = 0x0394;
 t['Dhook'] = 0x018A;
 t['Dieresis'] = 0xF6CB;
 t['DieresisAcute'] = 0xF6CC;
 t['DieresisGrave'] = 0xF6CD;
 t['Dieresissmall'] = 0xF7A8;
 t['Digammagreek'] = 0x03DC;
 t['Djecyrillic'] = 0x0402;
 t['Dlinebelow'] = 0x1E0E;
 t['Dmonospace'] = 0xFF24;
 t['Dotaccentsmall'] = 0xF6F7;
 t['Dslash'] = 0x0110;
 t['Dsmall'] = 0xF764;
 t['Dtopbar'] = 0x018B;
 t['Dz'] = 0x01F2;
 t['Dzcaron'] = 0x01C5;
 t['Dzeabkhasiancyrillic'] = 0x04E0;
 t['Dzecyrillic'] = 0x0405;
 t['Dzhecyrillic'] = 0x040F;
 t['E'] = 0x0045;
 t['Eacute'] = 0x00C9;
 t['Eacutesmall'] = 0xF7E9;
 t['Ebreve'] = 0x0114;
 t['Ecaron'] = 0x011A;
 t['Ecedillabreve'] = 0x1E1C;
 t['Echarmenian'] = 0x0535;
 t['Ecircle'] = 0x24BA;
 t['Ecircumflex'] = 0x00CA;
 t['Ecircumflexacute'] = 0x1EBE;
 t['Ecircumflexbelow'] = 0x1E18;
 t['Ecircumflexdotbelow'] = 0x1EC6;
 t['Ecircumflexgrave'] = 0x1EC0;
 t['Ecircumflexhookabove'] = 0x1EC2;
 t['Ecircumflexsmall'] = 0xF7EA;
 t['Ecircumflextilde'] = 0x1EC4;
 t['Ecyrillic'] = 0x0404;
 t['Edblgrave'] = 0x0204;
 t['Edieresis'] = 0x00CB;
 t['Edieresissmall'] = 0xF7EB;
 t['Edot'] = 0x0116;
 t['Edotaccent'] = 0x0116;
 t['Edotbelow'] = 0x1EB8;
 t['Efcyrillic'] = 0x0424;
 t['Egrave'] = 0x00C8;
 t['Egravesmall'] = 0xF7E8;
 t['Eharmenian'] = 0x0537;
 t['Ehookabove'] = 0x1EBA;
 t['Eightroman'] = 0x2167;
 t['Einvertedbreve'] = 0x0206;
 t['Eiotifiedcyrillic'] = 0x0464;
 t['Elcyrillic'] = 0x041B;
 t['Elevenroman'] = 0x216A;
 t['Emacron'] = 0x0112;
 t['Emacronacute'] = 0x1E16;
 t['Emacrongrave'] = 0x1E14;
 t['Emcyrillic'] = 0x041C;
 t['Emonospace'] = 0xFF25;
 t['Encyrillic'] = 0x041D;
 t['Endescendercyrillic'] = 0x04A2;
 t['Eng'] = 0x014A;
 t['Enghecyrillic'] = 0x04A4;
 t['Enhookcyrillic'] = 0x04C7;
 t['Eogonek'] = 0x0118;
 t['Eopen'] = 0x0190;
 t['Epsilon'] = 0x0395;
 t['Epsilontonos'] = 0x0388;
 t['Ercyrillic'] = 0x0420;
 t['Ereversed'] = 0x018E;
 t['Ereversedcyrillic'] = 0x042D;
 t['Escyrillic'] = 0x0421;
 t['Esdescendercyrillic'] = 0x04AA;
 t['Esh'] = 0x01A9;
 t['Esmall'] = 0xF765;
 t['Eta'] = 0x0397;
 t['Etarmenian'] = 0x0538;
 t['Etatonos'] = 0x0389;
 t['Eth'] = 0x00D0;
 t['Ethsmall'] = 0xF7F0;
 t['Etilde'] = 0x1EBC;
 t['Etildebelow'] = 0x1E1A;
 t['Euro'] = 0x20AC;
 t['Ezh'] = 0x01B7;
 t['Ezhcaron'] = 0x01EE;
 t['Ezhreversed'] = 0x01B8;
 t['F'] = 0x0046;
 t['Fcircle'] = 0x24BB;
 t['Fdotaccent'] = 0x1E1E;
 t['Feharmenian'] = 0x0556;
 t['Feicoptic'] = 0x03E4;
 t['Fhook'] = 0x0191;
 t['Fitacyrillic'] = 0x0472;
 t['Fiveroman'] = 0x2164;
 t['Fmonospace'] = 0xFF26;
 t['Fourroman'] = 0x2163;
 t['Fsmall'] = 0xF766;
 t['G'] = 0x0047;
 t['GBsquare'] = 0x3387;
 t['Gacute'] = 0x01F4;
 t['Gamma'] = 0x0393;
 t['Gammaafrican'] = 0x0194;
 t['Gangiacoptic'] = 0x03EA;
 t['Gbreve'] = 0x011E;
 t['Gcaron'] = 0x01E6;
 t['Gcedilla'] = 0x0122;
 t['Gcircle'] = 0x24BC;
 t['Gcircumflex'] = 0x011C;
 t['Gcommaaccent'] = 0x0122;
 t['Gdot'] = 0x0120;
 t['Gdotaccent'] = 0x0120;
 t['Gecyrillic'] = 0x0413;
 t['Ghadarmenian'] = 0x0542;
 t['Ghemiddlehookcyrillic'] = 0x0494;
 t['Ghestrokecyrillic'] = 0x0492;
 t['Gheupturncyrillic'] = 0x0490;
 t['Ghook'] = 0x0193;
 t['Gimarmenian'] = 0x0533;
 t['Gjecyrillic'] = 0x0403;
 t['Gmacron'] = 0x1E20;
 t['Gmonospace'] = 0xFF27;
 t['Grave'] = 0xF6CE;
 t['Gravesmall'] = 0xF760;
 t['Gsmall'] = 0xF767;
 t['Gsmallhook'] = 0x029B;
 t['Gstroke'] = 0x01E4;
 t['H'] = 0x0048;
 t['H18533'] = 0x25CF;
 t['H18543'] = 0x25AA;
 t['H18551'] = 0x25AB;
 t['H22073'] = 0x25A1;
 t['HPsquare'] = 0x33CB;
 t['Haabkhasiancyrillic'] = 0x04A8;
 t['Hadescendercyrillic'] = 0x04B2;
 t['Hardsigncyrillic'] = 0x042A;
 t['Hbar'] = 0x0126;
 t['Hbrevebelow'] = 0x1E2A;
 t['Hcedilla'] = 0x1E28;
 t['Hcircle'] = 0x24BD;
 t['Hcircumflex'] = 0x0124;
 t['Hdieresis'] = 0x1E26;
 t['Hdotaccent'] = 0x1E22;
 t['Hdotbelow'] = 0x1E24;
 t['Hmonospace'] = 0xFF28;
 t['Hoarmenian'] = 0x0540;
 t['Horicoptic'] = 0x03E8;
 t['Hsmall'] = 0xF768;
 t['Hungarumlaut'] = 0xF6CF;
 t['Hungarumlautsmall'] = 0xF6F8;
 t['Hzsquare'] = 0x3390;
 t['I'] = 0x0049;
 t['IAcyrillic'] = 0x042F;
 t['IJ'] = 0x0132;
 t['IUcyrillic'] = 0x042E;
 t['Iacute'] = 0x00CD;
 t['Iacutesmall'] = 0xF7ED;
 t['Ibreve'] = 0x012C;
 t['Icaron'] = 0x01CF;
 t['Icircle'] = 0x24BE;
 t['Icircumflex'] = 0x00CE;
 t['Icircumflexsmall'] = 0xF7EE;
 t['Icyrillic'] = 0x0406;
 t['Idblgrave'] = 0x0208;
 t['Idieresis'] = 0x00CF;
 t['Idieresisacute'] = 0x1E2E;
 t['Idieresiscyrillic'] = 0x04E4;
 t['Idieresissmall'] = 0xF7EF;
 t['Idot'] = 0x0130;
 t['Idotaccent'] = 0x0130;
 t['Idotbelow'] = 0x1ECA;
 t['Iebrevecyrillic'] = 0x04D6;
 t['Iecyrillic'] = 0x0415;
 t['Ifraktur'] = 0x2111;
 t['Igrave'] = 0x00CC;
 t['Igravesmall'] = 0xF7EC;
 t['Ihookabove'] = 0x1EC8;
 t['Iicyrillic'] = 0x0418;
 t['Iinvertedbreve'] = 0x020A;
 t['Iishortcyrillic'] = 0x0419;
 t['Imacron'] = 0x012A;
 t['Imacroncyrillic'] = 0x04E2;
 t['Imonospace'] = 0xFF29;
 t['Iniarmenian'] = 0x053B;
 t['Iocyrillic'] = 0x0401;
 t['Iogonek'] = 0x012E;
 t['Iota'] = 0x0399;
 t['Iotaafrican'] = 0x0196;
 t['Iotadieresis'] = 0x03AA;
 t['Iotatonos'] = 0x038A;
 t['Ismall'] = 0xF769;
 t['Istroke'] = 0x0197;
 t['Itilde'] = 0x0128;
 t['Itildebelow'] = 0x1E2C;
 t['Izhitsacyrillic'] = 0x0474;
 t['Izhitsadblgravecyrillic'] = 0x0476;
 t['J'] = 0x004A;
 t['Jaarmenian'] = 0x0541;
 t['Jcircle'] = 0x24BF;
 t['Jcircumflex'] = 0x0134;
 t['Jecyrillic'] = 0x0408;
 t['Jheharmenian'] = 0x054B;
 t['Jmonospace'] = 0xFF2A;
 t['Jsmall'] = 0xF76A;
 t['K'] = 0x004B;
 t['KBsquare'] = 0x3385;
 t['KKsquare'] = 0x33CD;
 t['Kabashkircyrillic'] = 0x04A0;
 t['Kacute'] = 0x1E30;
 t['Kacyrillic'] = 0x041A;
 t['Kadescendercyrillic'] = 0x049A;
 t['Kahookcyrillic'] = 0x04C3;
 t['Kappa'] = 0x039A;
 t['Kastrokecyrillic'] = 0x049E;
 t['Kaverticalstrokecyrillic'] = 0x049C;
 t['Kcaron'] = 0x01E8;
 t['Kcedilla'] = 0x0136;
 t['Kcircle'] = 0x24C0;
 t['Kcommaaccent'] = 0x0136;
 t['Kdotbelow'] = 0x1E32;
 t['Keharmenian'] = 0x0554;
 t['Kenarmenian'] = 0x053F;
 t['Khacyrillic'] = 0x0425;
 t['Kheicoptic'] = 0x03E6;
 t['Khook'] = 0x0198;
 t['Kjecyrillic'] = 0x040C;
 t['Klinebelow'] = 0x1E34;
 t['Kmonospace'] = 0xFF2B;
 t['Koppacyrillic'] = 0x0480;
 t['Koppagreek'] = 0x03DE;
 t['Ksicyrillic'] = 0x046E;
 t['Ksmall'] = 0xF76B;
 t['L'] = 0x004C;
 t['LJ'] = 0x01C7;
 t['LL'] = 0xF6BF;
 t['Lacute'] = 0x0139;
 t['Lambda'] = 0x039B;
 t['Lcaron'] = 0x013D;
 t['Lcedilla'] = 0x013B;
 t['Lcircle'] = 0x24C1;
 t['Lcircumflexbelow'] = 0x1E3C;
 t['Lcommaaccent'] = 0x013B;
 t['Ldot'] = 0x013F;
 t['Ldotaccent'] = 0x013F;
 t['Ldotbelow'] = 0x1E36;
 t['Ldotbelowmacron'] = 0x1E38;
 t['Liwnarmenian'] = 0x053C;
 t['Lj'] = 0x01C8;
 t['Ljecyrillic'] = 0x0409;
 t['Llinebelow'] = 0x1E3A;
 t['Lmonospace'] = 0xFF2C;
 t['Lslash'] = 0x0141;
 t['Lslashsmall'] = 0xF6F9;
 t['Lsmall'] = 0xF76C;
 t['M'] = 0x004D;
 t['MBsquare'] = 0x3386;
 t['Macron'] = 0xF6D0;
 t['Macronsmall'] = 0xF7AF;
 t['Macute'] = 0x1E3E;
 t['Mcircle'] = 0x24C2;
 t['Mdotaccent'] = 0x1E40;
 t['Mdotbelow'] = 0x1E42;
 t['Menarmenian'] = 0x0544;
 t['Mmonospace'] = 0xFF2D;
 t['Msmall'] = 0xF76D;
 t['Mturned'] = 0x019C;
 t['Mu'] = 0x039C;
 t['N'] = 0x004E;
 t['NJ'] = 0x01CA;
 t['Nacute'] = 0x0143;
 t['Ncaron'] = 0x0147;
 t['Ncedilla'] = 0x0145;
 t['Ncircle'] = 0x24C3;
 t['Ncircumflexbelow'] = 0x1E4A;
 t['Ncommaaccent'] = 0x0145;
 t['Ndotaccent'] = 0x1E44;
 t['Ndotbelow'] = 0x1E46;
 t['Nhookleft'] = 0x019D;
 t['Nineroman'] = 0x2168;
 t['Nj'] = 0x01CB;
 t['Njecyrillic'] = 0x040A;
 t['Nlinebelow'] = 0x1E48;
 t['Nmonospace'] = 0xFF2E;
 t['Nowarmenian'] = 0x0546;
 t['Nsmall'] = 0xF76E;
 t['Ntilde'] = 0x00D1;
 t['Ntildesmall'] = 0xF7F1;
 t['Nu'] = 0x039D;
 t['O'] = 0x004F;
 t['OE'] = 0x0152;
 t['OEsmall'] = 0xF6FA;
 t['Oacute'] = 0x00D3;
 t['Oacutesmall'] = 0xF7F3;
 t['Obarredcyrillic'] = 0x04E8;
 t['Obarreddieresiscyrillic'] = 0x04EA;
 t['Obreve'] = 0x014E;
 t['Ocaron'] = 0x01D1;
 t['Ocenteredtilde'] = 0x019F;
 t['Ocircle'] = 0x24C4;
 t['Ocircumflex'] = 0x00D4;
 t['Ocircumflexacute'] = 0x1ED0;
 t['Ocircumflexdotbelow'] = 0x1ED8;
 t['Ocircumflexgrave'] = 0x1ED2;
 t['Ocircumflexhookabove'] = 0x1ED4;
 t['Ocircumflexsmall'] = 0xF7F4;
 t['Ocircumflextilde'] = 0x1ED6;
 t['Ocyrillic'] = 0x041E;
 t['Odblacute'] = 0x0150;
 t['Odblgrave'] = 0x020C;
 t['Odieresis'] = 0x00D6;
 t['Odieresiscyrillic'] = 0x04E6;
 t['Odieresissmall'] = 0xF7F6;
 t['Odotbelow'] = 0x1ECC;
 t['Ogoneksmall'] = 0xF6FB;
 t['Ograve'] = 0x00D2;
 t['Ogravesmall'] = 0xF7F2;
 t['Oharmenian'] = 0x0555;
 t['Ohm'] = 0x2126;
 t['Ohookabove'] = 0x1ECE;
 t['Ohorn'] = 0x01A0;
 t['Ohornacute'] = 0x1EDA;
 t['Ohorndotbelow'] = 0x1EE2;
 t['Ohorngrave'] = 0x1EDC;
 t['Ohornhookabove'] = 0x1EDE;
 t['Ohorntilde'] = 0x1EE0;
 t['Ohungarumlaut'] = 0x0150;
 t['Oi'] = 0x01A2;
 t['Oinvertedbreve'] = 0x020E;
 t['Omacron'] = 0x014C;
 t['Omacronacute'] = 0x1E52;
 t['Omacrongrave'] = 0x1E50;
 t['Omega'] = 0x2126;
 t['Omegacyrillic'] = 0x0460;
 t['Omegagreek'] = 0x03A9;
 t['Omegaroundcyrillic'] = 0x047A;
 t['Omegatitlocyrillic'] = 0x047C;
 t['Omegatonos'] = 0x038F;
 t['Omicron'] = 0x039F;
 t['Omicrontonos'] = 0x038C;
 t['Omonospace'] = 0xFF2F;
 t['Oneroman'] = 0x2160;
 t['Oogonek'] = 0x01EA;
 t['Oogonekmacron'] = 0x01EC;
 t['Oopen'] = 0x0186;
 t['Oslash'] = 0x00D8;
 t['Oslashacute'] = 0x01FE;
 t['Oslashsmall'] = 0xF7F8;
 t['Osmall'] = 0xF76F;
 t['Ostrokeacute'] = 0x01FE;
 t['Otcyrillic'] = 0x047E;
 t['Otilde'] = 0x00D5;
 t['Otildeacute'] = 0x1E4C;
 t['Otildedieresis'] = 0x1E4E;
 t['Otildesmall'] = 0xF7F5;
 t['P'] = 0x0050;
 t['Pacute'] = 0x1E54;
 t['Pcircle'] = 0x24C5;
 t['Pdotaccent'] = 0x1E56;
 t['Pecyrillic'] = 0x041F;
 t['Peharmenian'] = 0x054A;
 t['Pemiddlehookcyrillic'] = 0x04A6;
 t['Phi'] = 0x03A6;
 t['Phook'] = 0x01A4;
 t['Pi'] = 0x03A0;
 t['Piwrarmenian'] = 0x0553;
 t['Pmonospace'] = 0xFF30;
 t['Psi'] = 0x03A8;
 t['Psicyrillic'] = 0x0470;
 t['Psmall'] = 0xF770;
 t['Q'] = 0x0051;
 t['Qcircle'] = 0x24C6;
 t['Qmonospace'] = 0xFF31;
 t['Qsmall'] = 0xF771;
 t['R'] = 0x0052;
 t['Raarmenian'] = 0x054C;
 t['Racute'] = 0x0154;
 t['Rcaron'] = 0x0158;
 t['Rcedilla'] = 0x0156;
 t['Rcircle'] = 0x24C7;
 t['Rcommaaccent'] = 0x0156;
 t['Rdblgrave'] = 0x0210;
 t['Rdotaccent'] = 0x1E58;
 t['Rdotbelow'] = 0x1E5A;
 t['Rdotbelowmacron'] = 0x1E5C;
 t['Reharmenian'] = 0x0550;
 t['Rfraktur'] = 0x211C;
 t['Rho'] = 0x03A1;
 t['Ringsmall'] = 0xF6FC;
 t['Rinvertedbreve'] = 0x0212;
 t['Rlinebelow'] = 0x1E5E;
 t['Rmonospace'] = 0xFF32;
 t['Rsmall'] = 0xF772;
 t['Rsmallinverted'] = 0x0281;
 t['Rsmallinvertedsuperior'] = 0x02B6;
 t['S'] = 0x0053;
 t['SF010000'] = 0x250C;
 t['SF020000'] = 0x2514;
 t['SF030000'] = 0x2510;
 t['SF040000'] = 0x2518;
 t['SF050000'] = 0x253C;
 t['SF060000'] = 0x252C;
 t['SF070000'] = 0x2534;
 t['SF080000'] = 0x251C;
 t['SF090000'] = 0x2524;
 t['SF100000'] = 0x2500;
 t['SF110000'] = 0x2502;
 t['SF190000'] = 0x2561;
 t['SF200000'] = 0x2562;
 t['SF210000'] = 0x2556;
 t['SF220000'] = 0x2555;
 t['SF230000'] = 0x2563;
 t['SF240000'] = 0x2551;
 t['SF250000'] = 0x2557;
 t['SF260000'] = 0x255D;
 t['SF270000'] = 0x255C;
 t['SF280000'] = 0x255B;
 t['SF360000'] = 0x255E;
 t['SF370000'] = 0x255F;
 t['SF380000'] = 0x255A;
 t['SF390000'] = 0x2554;
 t['SF400000'] = 0x2569;
 t['SF410000'] = 0x2566;
 t['SF420000'] = 0x2560;
 t['SF430000'] = 0x2550;
 t['SF440000'] = 0x256C;
 t['SF450000'] = 0x2567;
 t['SF460000'] = 0x2568;
 t['SF470000'] = 0x2564;
 t['SF480000'] = 0x2565;
 t['SF490000'] = 0x2559;
 t['SF500000'] = 0x2558;
 t['SF510000'] = 0x2552;
 t['SF520000'] = 0x2553;
 t['SF530000'] = 0x256B;
 t['SF540000'] = 0x256A;
 t['Sacute'] = 0x015A;
 t['Sacutedotaccent'] = 0x1E64;
 t['Sampigreek'] = 0x03E0;
 t['Scaron'] = 0x0160;
 t['Scarondotaccent'] = 0x1E66;
 t['Scaronsmall'] = 0xF6FD;
 t['Scedilla'] = 0x015E;
 t['Schwa'] = 0x018F;
 t['Schwacyrillic'] = 0x04D8;
 t['Schwadieresiscyrillic'] = 0x04DA;
 t['Scircle'] = 0x24C8;
 t['Scircumflex'] = 0x015C;
 t['Scommaaccent'] = 0x0218;
 t['Sdotaccent'] = 0x1E60;
 t['Sdotbelow'] = 0x1E62;
 t['Sdotbelowdotaccent'] = 0x1E68;
 t['Seharmenian'] = 0x054D;
 t['Sevenroman'] = 0x2166;
 t['Shaarmenian'] = 0x0547;
 t['Shacyrillic'] = 0x0428;
 t['Shchacyrillic'] = 0x0429;
 t['Sheicoptic'] = 0x03E2;
 t['Shhacyrillic'] = 0x04BA;
 t['Shimacoptic'] = 0x03EC;
 t['Sigma'] = 0x03A3;
 t['Sixroman'] = 0x2165;
 t['Smonospace'] = 0xFF33;
 t['Softsigncyrillic'] = 0x042C;
 t['Ssmall'] = 0xF773;
 t['Stigmagreek'] = 0x03DA;
 t['T'] = 0x0054;
 t['Tau'] = 0x03A4;
 t['Tbar'] = 0x0166;
 t['Tcaron'] = 0x0164;
 t['Tcedilla'] = 0x0162;
 t['Tcircle'] = 0x24C9;
 t['Tcircumflexbelow'] = 0x1E70;
 t['Tcommaaccent'] = 0x0162;
 t['Tdotaccent'] = 0x1E6A;
 t['Tdotbelow'] = 0x1E6C;
 t['Tecyrillic'] = 0x0422;
 t['Tedescendercyrillic'] = 0x04AC;
 t['Tenroman'] = 0x2169;
 t['Tetsecyrillic'] = 0x04B4;
 t['Theta'] = 0x0398;
 t['Thook'] = 0x01AC;
 t['Thorn'] = 0x00DE;
 t['Thornsmall'] = 0xF7FE;
 t['Threeroman'] = 0x2162;
 t['Tildesmall'] = 0xF6FE;
 t['Tiwnarmenian'] = 0x054F;
 t['Tlinebelow'] = 0x1E6E;
 t['Tmonospace'] = 0xFF34;
 t['Toarmenian'] = 0x0539;
 t['Tonefive'] = 0x01BC;
 t['Tonesix'] = 0x0184;
 t['Tonetwo'] = 0x01A7;
 t['Tretroflexhook'] = 0x01AE;
 t['Tsecyrillic'] = 0x0426;
 t['Tshecyrillic'] = 0x040B;
 t['Tsmall'] = 0xF774;
 t['Twelveroman'] = 0x216B;
 t['Tworoman'] = 0x2161;
 t['U'] = 0x0055;
 t['Uacute'] = 0x00DA;
 t['Uacutesmall'] = 0xF7FA;
 t['Ubreve'] = 0x016C;
 t['Ucaron'] = 0x01D3;
 t['Ucircle'] = 0x24CA;
 t['Ucircumflex'] = 0x00DB;
 t['Ucircumflexbelow'] = 0x1E76;
 t['Ucircumflexsmall'] = 0xF7FB;
 t['Ucyrillic'] = 0x0423;
 t['Udblacute'] = 0x0170;
 t['Udblgrave'] = 0x0214;
 t['Udieresis'] = 0x00DC;
 t['Udieresisacute'] = 0x01D7;
 t['Udieresisbelow'] = 0x1E72;
 t['Udieresiscaron'] = 0x01D9;
 t['Udieresiscyrillic'] = 0x04F0;
 t['Udieresisgrave'] = 0x01DB;
 t['Udieresismacron'] = 0x01D5;
 t['Udieresissmall'] = 0xF7FC;
 t['Udotbelow'] = 0x1EE4;
 t['Ugrave'] = 0x00D9;
 t['Ugravesmall'] = 0xF7F9;
 t['Uhookabove'] = 0x1EE6;
 t['Uhorn'] = 0x01AF;
 t['Uhornacute'] = 0x1EE8;
 t['Uhorndotbelow'] = 0x1EF0;
 t['Uhorngrave'] = 0x1EEA;
 t['Uhornhookabove'] = 0x1EEC;
 t['Uhorntilde'] = 0x1EEE;
 t['Uhungarumlaut'] = 0x0170;
 t['Uhungarumlautcyrillic'] = 0x04F2;
 t['Uinvertedbreve'] = 0x0216;
 t['Ukcyrillic'] = 0x0478;
 t['Umacron'] = 0x016A;
 t['Umacroncyrillic'] = 0x04EE;
 t['Umacrondieresis'] = 0x1E7A;
 t['Umonospace'] = 0xFF35;
 t['Uogonek'] = 0x0172;
 t['Upsilon'] = 0x03A5;
 t['Upsilon1'] = 0x03D2;
 t['Upsilonacutehooksymbolgreek'] = 0x03D3;
 t['Upsilonafrican'] = 0x01B1;
 t['Upsilondieresis'] = 0x03AB;
 t['Upsilondieresishooksymbolgreek'] = 0x03D4;
 t['Upsilonhooksymbol'] = 0x03D2;
 t['Upsilontonos'] = 0x038E;
 t['Uring'] = 0x016E;
 t['Ushortcyrillic'] = 0x040E;
 t['Usmall'] = 0xF775;
 t['Ustraightcyrillic'] = 0x04AE;
 t['Ustraightstrokecyrillic'] = 0x04B0;
 t['Utilde'] = 0x0168;
 t['Utildeacute'] = 0x1E78;
 t['Utildebelow'] = 0x1E74;
 t['V'] = 0x0056;
 t['Vcircle'] = 0x24CB;
 t['Vdotbelow'] = 0x1E7E;
 t['Vecyrillic'] = 0x0412;
 t['Vewarmenian'] = 0x054E;
 t['Vhook'] = 0x01B2;
 t['Vmonospace'] = 0xFF36;
 t['Voarmenian'] = 0x0548;
 t['Vsmall'] = 0xF776;
 t['Vtilde'] = 0x1E7C;
 t['W'] = 0x0057;
 t['Wacute'] = 0x1E82;
 t['Wcircle'] = 0x24CC;
 t['Wcircumflex'] = 0x0174;
 t['Wdieresis'] = 0x1E84;
 t['Wdotaccent'] = 0x1E86;
 t['Wdotbelow'] = 0x1E88;
 t['Wgrave'] = 0x1E80;
 t['Wmonospace'] = 0xFF37;
 t['Wsmall'] = 0xF777;
 t['X'] = 0x0058;
 t['Xcircle'] = 0x24CD;
 t['Xdieresis'] = 0x1E8C;
 t['Xdotaccent'] = 0x1E8A;
 t['Xeharmenian'] = 0x053D;
 t['Xi'] = 0x039E;
 t['Xmonospace'] = 0xFF38;
 t['Xsmall'] = 0xF778;
 t['Y'] = 0x0059;
 t['Yacute'] = 0x00DD;
 t['Yacutesmall'] = 0xF7FD;
 t['Yatcyrillic'] = 0x0462;
 t['Ycircle'] = 0x24CE;
 t['Ycircumflex'] = 0x0176;
 t['Ydieresis'] = 0x0178;
 t['Ydieresissmall'] = 0xF7FF;
 t['Ydotaccent'] = 0x1E8E;
 t['Ydotbelow'] = 0x1EF4;
 t['Yericyrillic'] = 0x042B;
 t['Yerudieresiscyrillic'] = 0x04F8;
 t['Ygrave'] = 0x1EF2;
 t['Yhook'] = 0x01B3;
 t['Yhookabove'] = 0x1EF6;
 t['Yiarmenian'] = 0x0545;
 t['Yicyrillic'] = 0x0407;
 t['Yiwnarmenian'] = 0x0552;
 t['Ymonospace'] = 0xFF39;
 t['Ysmall'] = 0xF779;
 t['Ytilde'] = 0x1EF8;
 t['Yusbigcyrillic'] = 0x046A;
 t['Yusbigiotifiedcyrillic'] = 0x046C;
 t['Yuslittlecyrillic'] = 0x0466;
 t['Yuslittleiotifiedcyrillic'] = 0x0468;
 t['Z'] = 0x005A;
 t['Zaarmenian'] = 0x0536;
 t['Zacute'] = 0x0179;
 t['Zcaron'] = 0x017D;
 t['Zcaronsmall'] = 0xF6FF;
 t['Zcircle'] = 0x24CF;
 t['Zcircumflex'] = 0x1E90;
 t['Zdot'] = 0x017B;
 t['Zdotaccent'] = 0x017B;
 t['Zdotbelow'] = 0x1E92;
 t['Zecyrillic'] = 0x0417;
 t['Zedescendercyrillic'] = 0x0498;
 t['Zedieresiscyrillic'] = 0x04DE;
 t['Zeta'] = 0x0396;
 t['Zhearmenian'] = 0x053A;
 t['Zhebrevecyrillic'] = 0x04C1;
 t['Zhecyrillic'] = 0x0416;
 t['Zhedescendercyrillic'] = 0x0496;
 t['Zhedieresiscyrillic'] = 0x04DC;
 t['Zlinebelow'] = 0x1E94;
 t['Zmonospace'] = 0xFF3A;
 t['Zsmall'] = 0xF77A;
 t['Zstroke'] = 0x01B5;
 t['a'] = 0x0061;
 t['aabengali'] = 0x0986;
 t['aacute'] = 0x00E1;
 t['aadeva'] = 0x0906;
 t['aagujarati'] = 0x0A86;
 t['aagurmukhi'] = 0x0A06;
 t['aamatragurmukhi'] = 0x0A3E;
 t['aarusquare'] = 0x3303;
 t['aavowelsignbengali'] = 0x09BE;
 t['aavowelsigndeva'] = 0x093E;
 t['aavowelsigngujarati'] = 0x0ABE;
 t['abbreviationmarkarmenian'] = 0x055F;
 t['abbreviationsigndeva'] = 0x0970;
 t['abengali'] = 0x0985;
 t['abopomofo'] = 0x311A;
 t['abreve'] = 0x0103;
 t['abreveacute'] = 0x1EAF;
 t['abrevecyrillic'] = 0x04D1;
 t['abrevedotbelow'] = 0x1EB7;
 t['abrevegrave'] = 0x1EB1;
 t['abrevehookabove'] = 0x1EB3;
 t['abrevetilde'] = 0x1EB5;
 t['acaron'] = 0x01CE;
 t['acircle'] = 0x24D0;
 t['acircumflex'] = 0x00E2;
 t['acircumflexacute'] = 0x1EA5;
 t['acircumflexdotbelow'] = 0x1EAD;
 t['acircumflexgrave'] = 0x1EA7;
 t['acircumflexhookabove'] = 0x1EA9;
 t['acircumflextilde'] = 0x1EAB;
 t['acute'] = 0x00B4;
 t['acutebelowcmb'] = 0x0317;
 t['acutecmb'] = 0x0301;
 t['acutecomb'] = 0x0301;
 t['acutedeva'] = 0x0954;
 t['acutelowmod'] = 0x02CF;
 t['acutetonecmb'] = 0x0341;
 t['acyrillic'] = 0x0430;
 t['adblgrave'] = 0x0201;
 t['addakgurmukhi'] = 0x0A71;
 t['adeva'] = 0x0905;
 t['adieresis'] = 0x00E4;
 t['adieresiscyrillic'] = 0x04D3;
 t['adieresismacron'] = 0x01DF;
 t['adotbelow'] = 0x1EA1;
 t['adotmacron'] = 0x01E1;
 t['ae'] = 0x00E6;
 t['aeacute'] = 0x01FD;
 t['aekorean'] = 0x3150;
 t['aemacron'] = 0x01E3;
 t['afii00208'] = 0x2015;
 t['afii08941'] = 0x20A4;
 t['afii10017'] = 0x0410;
 t['afii10018'] = 0x0411;
 t['afii10019'] = 0x0412;
 t['afii10020'] = 0x0413;
 t['afii10021'] = 0x0414;
 t['afii10022'] = 0x0415;
 t['afii10023'] = 0x0401;
 t['afii10024'] = 0x0416;
 t['afii10025'] = 0x0417;
 t['afii10026'] = 0x0418;
 t['afii10027'] = 0x0419;
 t['afii10028'] = 0x041A;
 t['afii10029'] = 0x041B;
 t['afii10030'] = 0x041C;
 t['afii10031'] = 0x041D;
 t['afii10032'] = 0x041E;
 t['afii10033'] = 0x041F;
 t['afii10034'] = 0x0420;
 t['afii10035'] = 0x0421;
 t['afii10036'] = 0x0422;
 t['afii10037'] = 0x0423;
 t['afii10038'] = 0x0424;
 t['afii10039'] = 0x0425;
 t['afii10040'] = 0x0426;
 t['afii10041'] = 0x0427;
 t['afii10042'] = 0x0428;
 t['afii10043'] = 0x0429;
 t['afii10044'] = 0x042A;
 t['afii10045'] = 0x042B;
 t['afii10046'] = 0x042C;
 t['afii10047'] = 0x042D;
 t['afii10048'] = 0x042E;
 t['afii10049'] = 0x042F;
 t['afii10050'] = 0x0490;
 t['afii10051'] = 0x0402;
 t['afii10052'] = 0x0403;
 t['afii10053'] = 0x0404;
 t['afii10054'] = 0x0405;
 t['afii10055'] = 0x0406;
 t['afii10056'] = 0x0407;
 t['afii10057'] = 0x0408;
 t['afii10058'] = 0x0409;
 t['afii10059'] = 0x040A;
 t['afii10060'] = 0x040B;
 t['afii10061'] = 0x040C;
 t['afii10062'] = 0x040E;
 t['afii10063'] = 0xF6C4;
 t['afii10064'] = 0xF6C5;
 t['afii10065'] = 0x0430;
 t['afii10066'] = 0x0431;
 t['afii10067'] = 0x0432;
 t['afii10068'] = 0x0433;
 t['afii10069'] = 0x0434;
 t['afii10070'] = 0x0435;
 t['afii10071'] = 0x0451;
 t['afii10072'] = 0x0436;
 t['afii10073'] = 0x0437;
 t['afii10074'] = 0x0438;
 t['afii10075'] = 0x0439;
 t['afii10076'] = 0x043A;
 t['afii10077'] = 0x043B;
 t['afii10078'] = 0x043C;
 t['afii10079'] = 0x043D;
 t['afii10080'] = 0x043E;
 t['afii10081'] = 0x043F;
 t['afii10082'] = 0x0440;
 t['afii10083'] = 0x0441;
 t['afii10084'] = 0x0442;
 t['afii10085'] = 0x0443;
 t['afii10086'] = 0x0444;
 t['afii10087'] = 0x0445;
 t['afii10088'] = 0x0446;
 t['afii10089'] = 0x0447;
 t['afii10090'] = 0x0448;
 t['afii10091'] = 0x0449;
 t['afii10092'] = 0x044A;
 t['afii10093'] = 0x044B;
 t['afii10094'] = 0x044C;
 t['afii10095'] = 0x044D;
 t['afii10096'] = 0x044E;
 t['afii10097'] = 0x044F;
 t['afii10098'] = 0x0491;
 t['afii10099'] = 0x0452;
 t['afii10100'] = 0x0453;
 t['afii10101'] = 0x0454;
 t['afii10102'] = 0x0455;
 t['afii10103'] = 0x0456;
 t['afii10104'] = 0x0457;
 t['afii10105'] = 0x0458;
 t['afii10106'] = 0x0459;
 t['afii10107'] = 0x045A;
 t['afii10108'] = 0x045B;
 t['afii10109'] = 0x045C;
 t['afii10110'] = 0x045E;
 t['afii10145'] = 0x040F;
 t['afii10146'] = 0x0462;
 t['afii10147'] = 0x0472;
 t['afii10148'] = 0x0474;
 t['afii10192'] = 0xF6C6;
 t['afii10193'] = 0x045F;
 t['afii10194'] = 0x0463;
 t['afii10195'] = 0x0473;
 t['afii10196'] = 0x0475;
 t['afii10831'] = 0xF6C7;
 t['afii10832'] = 0xF6C8;
 t['afii10846'] = 0x04D9;
 t['afii299'] = 0x200E;
 t['afii300'] = 0x200F;
 t['afii301'] = 0x200D;
 t['afii57381'] = 0x066A;
 t['afii57388'] = 0x060C;
 t['afii57392'] = 0x0660;
 t['afii57393'] = 0x0661;
 t['afii57394'] = 0x0662;
 t['afii57395'] = 0x0663;
 t['afii57396'] = 0x0664;
 t['afii57397'] = 0x0665;
 t['afii57398'] = 0x0666;
 t['afii57399'] = 0x0667;
 t['afii57400'] = 0x0668;
 t['afii57401'] = 0x0669;
 t['afii57403'] = 0x061B;
 t['afii57407'] = 0x061F;
 t['afii57409'] = 0x0621;
 t['afii57410'] = 0x0622;
 t['afii57411'] = 0x0623;
 t['afii57412'] = 0x0624;
 t['afii57413'] = 0x0625;
 t['afii57414'] = 0x0626;
 t['afii57415'] = 0x0627;
 t['afii57416'] = 0x0628;
 t['afii57417'] = 0x0629;
 t['afii57418'] = 0x062A;
 t['afii57419'] = 0x062B;
 t['afii57420'] = 0x062C;
 t['afii57421'] = 0x062D;
 t['afii57422'] = 0x062E;
 t['afii57423'] = 0x062F;
 t['afii57424'] = 0x0630;
 t['afii57425'] = 0x0631;
 t['afii57426'] = 0x0632;
 t['afii57427'] = 0x0633;
 t['afii57428'] = 0x0634;
 t['afii57429'] = 0x0635;
 t['afii57430'] = 0x0636;
 t['afii57431'] = 0x0637;
 t['afii57432'] = 0x0638;
 t['afii57433'] = 0x0639;
 t['afii57434'] = 0x063A;
 t['afii57440'] = 0x0640;
 t['afii57441'] = 0x0641;
 t['afii57442'] = 0x0642;
 t['afii57443'] = 0x0643;
 t['afii57444'] = 0x0644;
 t['afii57445'] = 0x0645;
 t['afii57446'] = 0x0646;
 t['afii57448'] = 0x0648;
 t['afii57449'] = 0x0649;
 t['afii57450'] = 0x064A;
 t['afii57451'] = 0x064B;
 t['afii57452'] = 0x064C;
 t['afii57453'] = 0x064D;
 t['afii57454'] = 0x064E;
 t['afii57455'] = 0x064F;
 t['afii57456'] = 0x0650;
 t['afii57457'] = 0x0651;
 t['afii57458'] = 0x0652;
 t['afii57470'] = 0x0647;
 t['afii57505'] = 0x06A4;
 t['afii57506'] = 0x067E;
 t['afii57507'] = 0x0686;
 t['afii57508'] = 0x0698;
 t['afii57509'] = 0x06AF;
 t['afii57511'] = 0x0679;
 t['afii57512'] = 0x0688;
 t['afii57513'] = 0x0691;
 t['afii57514'] = 0x06BA;
 t['afii57519'] = 0x06D2;
 t['afii57534'] = 0x06D5;
 t['afii57636'] = 0x20AA;
 t['afii57645'] = 0x05BE;
 t['afii57658'] = 0x05C3;
 t['afii57664'] = 0x05D0;
 t['afii57665'] = 0x05D1;
 t['afii57666'] = 0x05D2;
 t['afii57667'] = 0x05D3;
 t['afii57668'] = 0x05D4;
 t['afii57669'] = 0x05D5;
 t['afii57670'] = 0x05D6;
 t['afii57671'] = 0x05D7;
 t['afii57672'] = 0x05D8;
 t['afii57673'] = 0x05D9;
 t['afii57674'] = 0x05DA;
 t['afii57675'] = 0x05DB;
 t['afii57676'] = 0x05DC;
 t['afii57677'] = 0x05DD;
 t['afii57678'] = 0x05DE;
 t['afii57679'] = 0x05DF;
 t['afii57680'] = 0x05E0;
 t['afii57681'] = 0x05E1;
 t['afii57682'] = 0x05E2;
 t['afii57683'] = 0x05E3;
 t['afii57684'] = 0x05E4;
 t['afii57685'] = 0x05E5;
 t['afii57686'] = 0x05E6;
 t['afii57687'] = 0x05E7;
 t['afii57688'] = 0x05E8;
 t['afii57689'] = 0x05E9;
 t['afii57690'] = 0x05EA;
 t['afii57694'] = 0xFB2A;
 t['afii57695'] = 0xFB2B;
 t['afii57700'] = 0xFB4B;
 t['afii57705'] = 0xFB1F;
 t['afii57716'] = 0x05F0;
 t['afii57717'] = 0x05F1;
 t['afii57718'] = 0x05F2;
 t['afii57723'] = 0xFB35;
 t['afii57793'] = 0x05B4;
 t['afii57794'] = 0x05B5;
 t['afii57795'] = 0x05B6;
 t['afii57796'] = 0x05BB;
 t['afii57797'] = 0x05B8;
 t['afii57798'] = 0x05B7;
 t['afii57799'] = 0x05B0;
 t['afii57800'] = 0x05B2;
 t['afii57801'] = 0x05B1;
 t['afii57802'] = 0x05B3;
 t['afii57803'] = 0x05C2;
 t['afii57804'] = 0x05C1;
 t['afii57806'] = 0x05B9;
 t['afii57807'] = 0x05BC;
 t['afii57839'] = 0x05BD;
 t['afii57841'] = 0x05BF;
 t['afii57842'] = 0x05C0;
 t['afii57929'] = 0x02BC;
 t['afii61248'] = 0x2105;
 t['afii61289'] = 0x2113;
 t['afii61352'] = 0x2116;
 t['afii61573'] = 0x202C;
 t['afii61574'] = 0x202D;
 t['afii61575'] = 0x202E;
 t['afii61664'] = 0x200C;
 t['afii63167'] = 0x066D;
 t['afii64937'] = 0x02BD;
 t['agrave'] = 0x00E0;
 t['agujarati'] = 0x0A85;
 t['agurmukhi'] = 0x0A05;
 t['ahiragana'] = 0x3042;
 t['ahookabove'] = 0x1EA3;
 t['aibengali'] = 0x0990;
 t['aibopomofo'] = 0x311E;
 t['aideva'] = 0x0910;
 t['aiecyrillic'] = 0x04D5;
 t['aigujarati'] = 0x0A90;
 t['aigurmukhi'] = 0x0A10;
 t['aimatragurmukhi'] = 0x0A48;
 t['ainarabic'] = 0x0639;
 t['ainfinalarabic'] = 0xFECA;
 t['aininitialarabic'] = 0xFECB;
 t['ainmedialarabic'] = 0xFECC;
 t['ainvertedbreve'] = 0x0203;
 t['aivowelsignbengali'] = 0x09C8;
 t['aivowelsigndeva'] = 0x0948;
 t['aivowelsigngujarati'] = 0x0AC8;
 t['akatakana'] = 0x30A2;
 t['akatakanahalfwidth'] = 0xFF71;
 t['akorean'] = 0x314F;
 t['alef'] = 0x05D0;
 t['alefarabic'] = 0x0627;
 t['alefdageshhebrew'] = 0xFB30;
 t['aleffinalarabic'] = 0xFE8E;
 t['alefhamzaabovearabic'] = 0x0623;
 t['alefhamzaabovefinalarabic'] = 0xFE84;
 t['alefhamzabelowarabic'] = 0x0625;
 t['alefhamzabelowfinalarabic'] = 0xFE88;
 t['alefhebrew'] = 0x05D0;
 t['aleflamedhebrew'] = 0xFB4F;
 t['alefmaddaabovearabic'] = 0x0622;
 t['alefmaddaabovefinalarabic'] = 0xFE82;
 t['alefmaksuraarabic'] = 0x0649;
 t['alefmaksurafinalarabic'] = 0xFEF0;
 t['alefmaksurainitialarabic'] = 0xFEF3;
 t['alefmaksuramedialarabic'] = 0xFEF4;
 t['alefpatahhebrew'] = 0xFB2E;
 t['alefqamatshebrew'] = 0xFB2F;
 t['aleph'] = 0x2135;
 t['allequal'] = 0x224C;
 t['alpha'] = 0x03B1;
 t['alphatonos'] = 0x03AC;
 t['amacron'] = 0x0101;
 t['amonospace'] = 0xFF41;
 t['ampersand'] = 0x0026;
 t['ampersandmonospace'] = 0xFF06;
 t['ampersandsmall'] = 0xF726;
 t['amsquare'] = 0x33C2;
 t['anbopomofo'] = 0x3122;
 t['angbopomofo'] = 0x3124;
 t['angbracketleft'] = 0x3008;
 t['angbracketright'] = 0x3009;
 t['angkhankhuthai'] = 0x0E5A;
 t['angle'] = 0x2220;
 t['anglebracketleft'] = 0x3008;
 t['anglebracketleftvertical'] = 0xFE3F;
 t['anglebracketright'] = 0x3009;
 t['anglebracketrightvertical'] = 0xFE40;
 t['angleleft'] = 0x2329;
 t['angleright'] = 0x232A;
 t['angstrom'] = 0x212B;
 t['anoteleia'] = 0x0387;
 t['anudattadeva'] = 0x0952;
 t['anusvarabengali'] = 0x0982;
 t['anusvaradeva'] = 0x0902;
 t['anusvaragujarati'] = 0x0A82;
 t['aogonek'] = 0x0105;
 t['apaatosquare'] = 0x3300;
 t['aparen'] = 0x249C;
 t['apostrophearmenian'] = 0x055A;
 t['apostrophemod'] = 0x02BC;
 t['apple'] = 0xF8FF;
 t['approaches'] = 0x2250;
 t['approxequal'] = 0x2248;
 t['approxequalorimage'] = 0x2252;
 t['approximatelyequal'] = 0x2245;
 t['araeaekorean'] = 0x318E;
 t['araeakorean'] = 0x318D;
 t['arc'] = 0x2312;
 t['arighthalfring'] = 0x1E9A;
 t['aring'] = 0x00E5;
 t['aringacute'] = 0x01FB;
 t['aringbelow'] = 0x1E01;
 t['arrowboth'] = 0x2194;
 t['arrowdashdown'] = 0x21E3;
 t['arrowdashleft'] = 0x21E0;
 t['arrowdashright'] = 0x21E2;
 t['arrowdashup'] = 0x21E1;
 t['arrowdblboth'] = 0x21D4;
 t['arrowdbldown'] = 0x21D3;
 t['arrowdblleft'] = 0x21D0;
 t['arrowdblright'] = 0x21D2;
 t['arrowdblup'] = 0x21D1;
 t['arrowdown'] = 0x2193;
 t['arrowdownleft'] = 0x2199;
 t['arrowdownright'] = 0x2198;
 t['arrowdownwhite'] = 0x21E9;
 t['arrowheaddownmod'] = 0x02C5;
 t['arrowheadleftmod'] = 0x02C2;
 t['arrowheadrightmod'] = 0x02C3;
 t['arrowheadupmod'] = 0x02C4;
 t['arrowhorizex'] = 0xF8E7;
 t['arrowleft'] = 0x2190;
 t['arrowleftdbl'] = 0x21D0;
 t['arrowleftdblstroke'] = 0x21CD;
 t['arrowleftoverright'] = 0x21C6;
 t['arrowleftwhite'] = 0x21E6;
 t['arrowright'] = 0x2192;
 t['arrowrightdblstroke'] = 0x21CF;
 t['arrowrightheavy'] = 0x279E;
 t['arrowrightoverleft'] = 0x21C4;
 t['arrowrightwhite'] = 0x21E8;
 t['arrowtableft'] = 0x21E4;
 t['arrowtabright'] = 0x21E5;
 t['arrowup'] = 0x2191;
 t['arrowupdn'] = 0x2195;
 t['arrowupdnbse'] = 0x21A8;
 t['arrowupdownbase'] = 0x21A8;
 t['arrowupleft'] = 0x2196;
 t['arrowupleftofdown'] = 0x21C5;
 t['arrowupright'] = 0x2197;
 t['arrowupwhite'] = 0x21E7;
 t['arrowvertex'] = 0xF8E6;
 t['asciicircum'] = 0x005E;
 t['asciicircummonospace'] = 0xFF3E;
 t['asciitilde'] = 0x007E;
 t['asciitildemonospace'] = 0xFF5E;
 t['ascript'] = 0x0251;
 t['ascriptturned'] = 0x0252;
 t['asmallhiragana'] = 0x3041;
 t['asmallkatakana'] = 0x30A1;
 t['asmallkatakanahalfwidth'] = 0xFF67;
 t['asterisk'] = 0x002A;
 t['asteriskaltonearabic'] = 0x066D;
 t['asteriskarabic'] = 0x066D;
 t['asteriskmath'] = 0x2217;
 t['asteriskmonospace'] = 0xFF0A;
 t['asterisksmall'] = 0xFE61;
 t['asterism'] = 0x2042;
 t['asuperior'] = 0xF6E9;
 t['asymptoticallyequal'] = 0x2243;
 t['at'] = 0x0040;
 t['atilde'] = 0x00E3;
 t['atmonospace'] = 0xFF20;
 t['atsmall'] = 0xFE6B;
 t['aturned'] = 0x0250;
 t['aubengali'] = 0x0994;
 t['aubopomofo'] = 0x3120;
 t['audeva'] = 0x0914;
 t['augujarati'] = 0x0A94;
 t['augurmukhi'] = 0x0A14;
 t['aulengthmarkbengali'] = 0x09D7;
 t['aumatragurmukhi'] = 0x0A4C;
 t['auvowelsignbengali'] = 0x09CC;
 t['auvowelsigndeva'] = 0x094C;
 t['auvowelsigngujarati'] = 0x0ACC;
 t['avagrahadeva'] = 0x093D;
 t['aybarmenian'] = 0x0561;
 t['ayin'] = 0x05E2;
 t['ayinaltonehebrew'] = 0xFB20;
 t['ayinhebrew'] = 0x05E2;
 t['b'] = 0x0062;
 t['babengali'] = 0x09AC;
 t['backslash'] = 0x005C;
 t['backslashmonospace'] = 0xFF3C;
 t['badeva'] = 0x092C;
 t['bagujarati'] = 0x0AAC;
 t['bagurmukhi'] = 0x0A2C;
 t['bahiragana'] = 0x3070;
 t['bahtthai'] = 0x0E3F;
 t['bakatakana'] = 0x30D0;
 t['bar'] = 0x007C;
 t['barmonospace'] = 0xFF5C;
 t['bbopomofo'] = 0x3105;
 t['bcircle'] = 0x24D1;
 t['bdotaccent'] = 0x1E03;
 t['bdotbelow'] = 0x1E05;
 t['beamedsixteenthnotes'] = 0x266C;
 t['because'] = 0x2235;
 t['becyrillic'] = 0x0431;
 t['beharabic'] = 0x0628;
 t['behfinalarabic'] = 0xFE90;
 t['behinitialarabic'] = 0xFE91;
 t['behiragana'] = 0x3079;
 t['behmedialarabic'] = 0xFE92;
 t['behmeeminitialarabic'] = 0xFC9F;
 t['behmeemisolatedarabic'] = 0xFC08;
 t['behnoonfinalarabic'] = 0xFC6D;
 t['bekatakana'] = 0x30D9;
 t['benarmenian'] = 0x0562;
 t['bet'] = 0x05D1;
 t['beta'] = 0x03B2;
 t['betasymbolgreek'] = 0x03D0;
 t['betdagesh'] = 0xFB31;
 t['betdageshhebrew'] = 0xFB31;
 t['bethebrew'] = 0x05D1;
 t['betrafehebrew'] = 0xFB4C;
 t['bhabengali'] = 0x09AD;
 t['bhadeva'] = 0x092D;
 t['bhagujarati'] = 0x0AAD;
 t['bhagurmukhi'] = 0x0A2D;
 t['bhook'] = 0x0253;
 t['bihiragana'] = 0x3073;
 t['bikatakana'] = 0x30D3;
 t['bilabialclick'] = 0x0298;
 t['bindigurmukhi'] = 0x0A02;
 t['birusquare'] = 0x3331;
 t['blackcircle'] = 0x25CF;
 t['blackdiamond'] = 0x25C6;
 t['blackdownpointingtriangle'] = 0x25BC;
 t['blackleftpointingpointer'] = 0x25C4;
 t['blackleftpointingtriangle'] = 0x25C0;
 t['blacklenticularbracketleft'] = 0x3010;
 t['blacklenticularbracketleftvertical'] = 0xFE3B;
 t['blacklenticularbracketright'] = 0x3011;
 t['blacklenticularbracketrightvertical'] = 0xFE3C;
 t['blacklowerlefttriangle'] = 0x25E3;
 t['blacklowerrighttriangle'] = 0x25E2;
 t['blackrectangle'] = 0x25AC;
 t['blackrightpointingpointer'] = 0x25BA;
 t['blackrightpointingtriangle'] = 0x25B6;
 t['blacksmallsquare'] = 0x25AA;
 t['blacksmilingface'] = 0x263B;
 t['blacksquare'] = 0x25A0;
 t['blackstar'] = 0x2605;
 t['blackupperlefttriangle'] = 0x25E4;
 t['blackupperrighttriangle'] = 0x25E5;
 t['blackuppointingsmalltriangle'] = 0x25B4;
 t['blackuppointingtriangle'] = 0x25B2;
 t['blank'] = 0x2423;
 t['blinebelow'] = 0x1E07;
 t['block'] = 0x2588;
 t['bmonospace'] = 0xFF42;
 t['bobaimaithai'] = 0x0E1A;
 t['bohiragana'] = 0x307C;
 t['bokatakana'] = 0x30DC;
 t['bparen'] = 0x249D;
 t['bqsquare'] = 0x33C3;
 t['braceex'] = 0xF8F4;
 t['braceleft'] = 0x007B;
 t['braceleftbt'] = 0xF8F3;
 t['braceleftmid'] = 0xF8F2;
 t['braceleftmonospace'] = 0xFF5B;
 t['braceleftsmall'] = 0xFE5B;
 t['bracelefttp'] = 0xF8F1;
 t['braceleftvertical'] = 0xFE37;
 t['braceright'] = 0x007D;
 t['bracerightbt'] = 0xF8FE;
 t['bracerightmid'] = 0xF8FD;
 t['bracerightmonospace'] = 0xFF5D;
 t['bracerightsmall'] = 0xFE5C;
 t['bracerighttp'] = 0xF8FC;
 t['bracerightvertical'] = 0xFE38;
 t['bracketleft'] = 0x005B;
 t['bracketleftbt'] = 0xF8F0;
 t['bracketleftex'] = 0xF8EF;
 t['bracketleftmonospace'] = 0xFF3B;
 t['bracketlefttp'] = 0xF8EE;
 t['bracketright'] = 0x005D;
 t['bracketrightbt'] = 0xF8FB;
 t['bracketrightex'] = 0xF8FA;
 t['bracketrightmonospace'] = 0xFF3D;
 t['bracketrighttp'] = 0xF8F9;
 t['breve'] = 0x02D8;
 t['brevebelowcmb'] = 0x032E;
 t['brevecmb'] = 0x0306;
 t['breveinvertedbelowcmb'] = 0x032F;
 t['breveinvertedcmb'] = 0x0311;
 t['breveinverteddoublecmb'] = 0x0361;
 t['bridgebelowcmb'] = 0x032A;
 t['bridgeinvertedbelowcmb'] = 0x033A;
 t['brokenbar'] = 0x00A6;
 t['bstroke'] = 0x0180;
 t['bsuperior'] = 0xF6EA;
 t['btopbar'] = 0x0183;
 t['buhiragana'] = 0x3076;
 t['bukatakana'] = 0x30D6;
 t['bullet'] = 0x2022;
 t['bulletinverse'] = 0x25D8;
 t['bulletoperator'] = 0x2219;
 t['bullseye'] = 0x25CE;
 t['c'] = 0x0063;
 t['caarmenian'] = 0x056E;
 t['cabengali'] = 0x099A;
 t['cacute'] = 0x0107;
 t['cadeva'] = 0x091A;
 t['cagujarati'] = 0x0A9A;
 t['cagurmukhi'] = 0x0A1A;
 t['calsquare'] = 0x3388;
 t['candrabindubengali'] = 0x0981;
 t['candrabinducmb'] = 0x0310;
 t['candrabindudeva'] = 0x0901;
 t['candrabindugujarati'] = 0x0A81;
 t['capslock'] = 0x21EA;
 t['careof'] = 0x2105;
 t['caron'] = 0x02C7;
 t['caronbelowcmb'] = 0x032C;
 t['caroncmb'] = 0x030C;
 t['carriagereturn'] = 0x21B5;
 t['cbopomofo'] = 0x3118;
 t['ccaron'] = 0x010D;
 t['ccedilla'] = 0x00E7;
 t['ccedillaacute'] = 0x1E09;
 t['ccircle'] = 0x24D2;
 t['ccircumflex'] = 0x0109;
 t['ccurl'] = 0x0255;
 t['cdot'] = 0x010B;
 t['cdotaccent'] = 0x010B;
 t['cdsquare'] = 0x33C5;
 t['cedilla'] = 0x00B8;
 t['cedillacmb'] = 0x0327;
 t['cent'] = 0x00A2;
 t['centigrade'] = 0x2103;
 t['centinferior'] = 0xF6DF;
 t['centmonospace'] = 0xFFE0;
 t['centoldstyle'] = 0xF7A2;
 t['centsuperior'] = 0xF6E0;
 t['chaarmenian'] = 0x0579;
 t['chabengali'] = 0x099B;
 t['chadeva'] = 0x091B;
 t['chagujarati'] = 0x0A9B;
 t['chagurmukhi'] = 0x0A1B;
 t['chbopomofo'] = 0x3114;
 t['cheabkhasiancyrillic'] = 0x04BD;
 t['checkmark'] = 0x2713;
 t['checyrillic'] = 0x0447;
 t['chedescenderabkhasiancyrillic'] = 0x04BF;
 t['chedescendercyrillic'] = 0x04B7;
 t['chedieresiscyrillic'] = 0x04F5;
 t['cheharmenian'] = 0x0573;
 t['chekhakassiancyrillic'] = 0x04CC;
 t['cheverticalstrokecyrillic'] = 0x04B9;
 t['chi'] = 0x03C7;
 t['chieuchacirclekorean'] = 0x3277;
 t['chieuchaparenkorean'] = 0x3217;
 t['chieuchcirclekorean'] = 0x3269;
 t['chieuchkorean'] = 0x314A;
 t['chieuchparenkorean'] = 0x3209;
 t['chochangthai'] = 0x0E0A;
 t['chochanthai'] = 0x0E08;
 t['chochingthai'] = 0x0E09;
 t['chochoethai'] = 0x0E0C;
 t['chook'] = 0x0188;
 t['cieucacirclekorean'] = 0x3276;
 t['cieucaparenkorean'] = 0x3216;
 t['cieuccirclekorean'] = 0x3268;
 t['cieuckorean'] = 0x3148;
 t['cieucparenkorean'] = 0x3208;
 t['cieucuparenkorean'] = 0x321C;
 t['circle'] = 0x25CB;
 t['circlecopyrt'] = 0x00A9;
 t['circlemultiply'] = 0x2297;
 t['circleot'] = 0x2299;
 t['circleplus'] = 0x2295;
 t['circlepostalmark'] = 0x3036;
 t['circlewithlefthalfblack'] = 0x25D0;
 t['circlewithrighthalfblack'] = 0x25D1;
 t['circumflex'] = 0x02C6;
 t['circumflexbelowcmb'] = 0x032D;
 t['circumflexcmb'] = 0x0302;
 t['clear'] = 0x2327;
 t['clickalveolar'] = 0x01C2;
 t['clickdental'] = 0x01C0;
 t['clicklateral'] = 0x01C1;
 t['clickretroflex'] = 0x01C3;
 t['club'] = 0x2663;
 t['clubsuitblack'] = 0x2663;
 t['clubsuitwhite'] = 0x2667;
 t['cmcubedsquare'] = 0x33A4;
 t['cmonospace'] = 0xFF43;
 t['cmsquaredsquare'] = 0x33A0;
 t['coarmenian'] = 0x0581;
 t['colon'] = 0x003A;
 t['colonmonetary'] = 0x20A1;
 t['colonmonospace'] = 0xFF1A;
 t['colonsign'] = 0x20A1;
 t['colonsmall'] = 0xFE55;
 t['colontriangularhalfmod'] = 0x02D1;
 t['colontriangularmod'] = 0x02D0;
 t['comma'] = 0x002C;
 t['commaabovecmb'] = 0x0313;
 t['commaaboverightcmb'] = 0x0315;
 t['commaaccent'] = 0xF6C3;
 t['commaarabic'] = 0x060C;
 t['commaarmenian'] = 0x055D;
 t['commainferior'] = 0xF6E1;
 t['commamonospace'] = 0xFF0C;
 t['commareversedabovecmb'] = 0x0314;
 t['commareversedmod'] = 0x02BD;
 t['commasmall'] = 0xFE50;
 t['commasuperior'] = 0xF6E2;
 t['commaturnedabovecmb'] = 0x0312;
 t['commaturnedmod'] = 0x02BB;
 t['compass'] = 0x263C;
 t['congruent'] = 0x2245;
 t['contourintegral'] = 0x222E;
 t['control'] = 0x2303;
 t['controlACK'] = 0x0006;
 t['controlBEL'] = 0x0007;
 t['controlBS'] = 0x0008;
 t['controlCAN'] = 0x0018;
 t['controlCR'] = 0x000D;
 t['controlDC1'] = 0x0011;
 t['controlDC2'] = 0x0012;
 t['controlDC3'] = 0x0013;
 t['controlDC4'] = 0x0014;
 t['controlDEL'] = 0x007F;
 t['controlDLE'] = 0x0010;
 t['controlEM'] = 0x0019;
 t['controlENQ'] = 0x0005;
 t['controlEOT'] = 0x0004;
 t['controlESC'] = 0x001B;
 t['controlETB'] = 0x0017;
 t['controlETX'] = 0x0003;
 t['controlFF'] = 0x000C;
 t['controlFS'] = 0x001C;
 t['controlGS'] = 0x001D;
 t['controlHT'] = 0x0009;
 t['controlLF'] = 0x000A;
 t['controlNAK'] = 0x0015;
 t['controlNULL'] = 0x0000;
 t['controlRS'] = 0x001E;
 t['controlSI'] = 0x000F;
 t['controlSO'] = 0x000E;
 t['controlSOT'] = 0x0002;
 t['controlSTX'] = 0x0001;
 t['controlSUB'] = 0x001A;
 t['controlSYN'] = 0x0016;
 t['controlUS'] = 0x001F;
 t['controlVT'] = 0x000B;
 t['copyright'] = 0x00A9;
 t['copyrightsans'] = 0xF8E9;
 t['copyrightserif'] = 0xF6D9;
 t['cornerbracketleft'] = 0x300C;
 t['cornerbracketlefthalfwidth'] = 0xFF62;
 t['cornerbracketleftvertical'] = 0xFE41;
 t['cornerbracketright'] = 0x300D;
 t['cornerbracketrighthalfwidth'] = 0xFF63;
 t['cornerbracketrightvertical'] = 0xFE42;
 t['corporationsquare'] = 0x337F;
 t['cosquare'] = 0x33C7;
 t['coverkgsquare'] = 0x33C6;
 t['cparen'] = 0x249E;
 t['cruzeiro'] = 0x20A2;
 t['cstretched'] = 0x0297;
 t['curlyand'] = 0x22CF;
 t['curlyor'] = 0x22CE;
 t['currency'] = 0x00A4;
 t['cyrBreve'] = 0xF6D1;
 t['cyrFlex'] = 0xF6D2;
 t['cyrbreve'] = 0xF6D4;
 t['cyrflex'] = 0xF6D5;
 t['d'] = 0x0064;
 t['daarmenian'] = 0x0564;
 t['dabengali'] = 0x09A6;
 t['dadarabic'] = 0x0636;
 t['dadeva'] = 0x0926;
 t['dadfinalarabic'] = 0xFEBE;
 t['dadinitialarabic'] = 0xFEBF;
 t['dadmedialarabic'] = 0xFEC0;
 t['dagesh'] = 0x05BC;
 t['dageshhebrew'] = 0x05BC;
 t['dagger'] = 0x2020;
 t['daggerdbl'] = 0x2021;
 t['dagujarati'] = 0x0AA6;
 t['dagurmukhi'] = 0x0A26;
 t['dahiragana'] = 0x3060;
 t['dakatakana'] = 0x30C0;
 t['dalarabic'] = 0x062F;
 t['dalet'] = 0x05D3;
 t['daletdagesh'] = 0xFB33;
 t['daletdageshhebrew'] = 0xFB33;
 t['dalethebrew'] = 0x05D3;
 t['dalfinalarabic'] = 0xFEAA;
 t['dammaarabic'] = 0x064F;
 t['dammalowarabic'] = 0x064F;
 t['dammatanaltonearabic'] = 0x064C;
 t['dammatanarabic'] = 0x064C;
 t['danda'] = 0x0964;
 t['dargahebrew'] = 0x05A7;
 t['dargalefthebrew'] = 0x05A7;
 t['dasiapneumatacyrilliccmb'] = 0x0485;
 t['dblGrave'] = 0xF6D3;
 t['dblanglebracketleft'] = 0x300A;
 t['dblanglebracketleftvertical'] = 0xFE3D;
 t['dblanglebracketright'] = 0x300B;
 t['dblanglebracketrightvertical'] = 0xFE3E;
 t['dblarchinvertedbelowcmb'] = 0x032B;
 t['dblarrowleft'] = 0x21D4;
 t['dblarrowright'] = 0x21D2;
 t['dbldanda'] = 0x0965;
 t['dblgrave'] = 0xF6D6;
 t['dblgravecmb'] = 0x030F;
 t['dblintegral'] = 0x222C;
 t['dbllowline'] = 0x2017;
 t['dbllowlinecmb'] = 0x0333;
 t['dbloverlinecmb'] = 0x033F;
 t['dblprimemod'] = 0x02BA;
 t['dblverticalbar'] = 0x2016;
 t['dblverticallineabovecmb'] = 0x030E;
 t['dbopomofo'] = 0x3109;
 t['dbsquare'] = 0x33C8;
 t['dcaron'] = 0x010F;
 t['dcedilla'] = 0x1E11;
 t['dcircle'] = 0x24D3;
 t['dcircumflexbelow'] = 0x1E13;
 t['dcroat'] = 0x0111;
 t['ddabengali'] = 0x09A1;
 t['ddadeva'] = 0x0921;
 t['ddagujarati'] = 0x0AA1;
 t['ddagurmukhi'] = 0x0A21;
 t['ddalarabic'] = 0x0688;
 t['ddalfinalarabic'] = 0xFB89;
 t['dddhadeva'] = 0x095C;
 t['ddhabengali'] = 0x09A2;
 t['ddhadeva'] = 0x0922;
 t['ddhagujarati'] = 0x0AA2;
 t['ddhagurmukhi'] = 0x0A22;
 t['ddotaccent'] = 0x1E0B;
 t['ddotbelow'] = 0x1E0D;
 t['decimalseparatorarabic'] = 0x066B;
 t['decimalseparatorpersian'] = 0x066B;
 t['decyrillic'] = 0x0434;
 t['degree'] = 0x00B0;
 t['dehihebrew'] = 0x05AD;
 t['dehiragana'] = 0x3067;
 t['deicoptic'] = 0x03EF;
 t['dekatakana'] = 0x30C7;
 t['deleteleft'] = 0x232B;
 t['deleteright'] = 0x2326;
 t['delta'] = 0x03B4;
 t['deltaturned'] = 0x018D;
 t['denominatorminusonenumeratorbengali'] = 0x09F8;
 t['dezh'] = 0x02A4;
 t['dhabengali'] = 0x09A7;
 t['dhadeva'] = 0x0927;
 t['dhagujarati'] = 0x0AA7;
 t['dhagurmukhi'] = 0x0A27;
 t['dhook'] = 0x0257;
 t['dialytikatonos'] = 0x0385;
 t['dialytikatonoscmb'] = 0x0344;
 t['diamond'] = 0x2666;
 t['diamondsuitwhite'] = 0x2662;
 t['dieresis'] = 0x00A8;
 t['dieresisacute'] = 0xF6D7;
 t['dieresisbelowcmb'] = 0x0324;
 t['dieresiscmb'] = 0x0308;
 t['dieresisgrave'] = 0xF6D8;
 t['dieresistonos'] = 0x0385;
 t['dihiragana'] = 0x3062;
 t['dikatakana'] = 0x30C2;
 t['dittomark'] = 0x3003;
 t['divide'] = 0x00F7;
 t['divides'] = 0x2223;
 t['divisionslash'] = 0x2215;
 t['djecyrillic'] = 0x0452;
 t['dkshade'] = 0x2593;
 t['dlinebelow'] = 0x1E0F;
 t['dlsquare'] = 0x3397;
 t['dmacron'] = 0x0111;
 t['dmonospace'] = 0xFF44;
 t['dnblock'] = 0x2584;
 t['dochadathai'] = 0x0E0E;
 t['dodekthai'] = 0x0E14;
 t['dohiragana'] = 0x3069;
 t['dokatakana'] = 0x30C9;
 t['dollar'] = 0x0024;
 t['dollarinferior'] = 0xF6E3;
 t['dollarmonospace'] = 0xFF04;
 t['dollaroldstyle'] = 0xF724;
 t['dollarsmall'] = 0xFE69;
 t['dollarsuperior'] = 0xF6E4;
 t['dong'] = 0x20AB;
 t['dorusquare'] = 0x3326;
 t['dotaccent'] = 0x02D9;
 t['dotaccentcmb'] = 0x0307;
 t['dotbelowcmb'] = 0x0323;
 t['dotbelowcomb'] = 0x0323;
 t['dotkatakana'] = 0x30FB;
 t['dotlessi'] = 0x0131;
 t['dotlessj'] = 0xF6BE;
 t['dotlessjstrokehook'] = 0x0284;
 t['dotmath'] = 0x22C5;
 t['dottedcircle'] = 0x25CC;
 t['doubleyodpatah'] = 0xFB1F;
 t['doubleyodpatahhebrew'] = 0xFB1F;
 t['downtackbelowcmb'] = 0x031E;
 t['downtackmod'] = 0x02D5;
 t['dparen'] = 0x249F;
 t['dsuperior'] = 0xF6EB;
 t['dtail'] = 0x0256;
 t['dtopbar'] = 0x018C;
 t['duhiragana'] = 0x3065;
 t['dukatakana'] = 0x30C5;
 t['dz'] = 0x01F3;
 t['dzaltone'] = 0x02A3;
 t['dzcaron'] = 0x01C6;
 t['dzcurl'] = 0x02A5;
 t['dzeabkhasiancyrillic'] = 0x04E1;
 t['dzecyrillic'] = 0x0455;
 t['dzhecyrillic'] = 0x045F;
 t['e'] = 0x0065;
 t['eacute'] = 0x00E9;
 t['earth'] = 0x2641;
 t['ebengali'] = 0x098F;
 t['ebopomofo'] = 0x311C;
 t['ebreve'] = 0x0115;
 t['ecandradeva'] = 0x090D;
 t['ecandragujarati'] = 0x0A8D;
 t['ecandravowelsigndeva'] = 0x0945;
 t['ecandravowelsigngujarati'] = 0x0AC5;
 t['ecaron'] = 0x011B;
 t['ecedillabreve'] = 0x1E1D;
 t['echarmenian'] = 0x0565;
 t['echyiwnarmenian'] = 0x0587;
 t['ecircle'] = 0x24D4;
 t['ecircumflex'] = 0x00EA;
 t['ecircumflexacute'] = 0x1EBF;
 t['ecircumflexbelow'] = 0x1E19;
 t['ecircumflexdotbelow'] = 0x1EC7;
 t['ecircumflexgrave'] = 0x1EC1;
 t['ecircumflexhookabove'] = 0x1EC3;
 t['ecircumflextilde'] = 0x1EC5;
 t['ecyrillic'] = 0x0454;
 t['edblgrave'] = 0x0205;
 t['edeva'] = 0x090F;
 t['edieresis'] = 0x00EB;
 t['edot'] = 0x0117;
 t['edotaccent'] = 0x0117;
 t['edotbelow'] = 0x1EB9;
 t['eegurmukhi'] = 0x0A0F;
 t['eematragurmukhi'] = 0x0A47;
 t['efcyrillic'] = 0x0444;
 t['egrave'] = 0x00E8;
 t['egujarati'] = 0x0A8F;
 t['eharmenian'] = 0x0567;
 t['ehbopomofo'] = 0x311D;
 t['ehiragana'] = 0x3048;
 t['ehookabove'] = 0x1EBB;
 t['eibopomofo'] = 0x311F;
 t['eight'] = 0x0038;
 t['eightarabic'] = 0x0668;
 t['eightbengali'] = 0x09EE;
 t['eightcircle'] = 0x2467;
 t['eightcircleinversesansserif'] = 0x2791;
 t['eightdeva'] = 0x096E;
 t['eighteencircle'] = 0x2471;
 t['eighteenparen'] = 0x2485;
 t['eighteenperiod'] = 0x2499;
 t['eightgujarati'] = 0x0AEE;
 t['eightgurmukhi'] = 0x0A6E;
 t['eighthackarabic'] = 0x0668;
 t['eighthangzhou'] = 0x3028;
 t['eighthnotebeamed'] = 0x266B;
 t['eightideographicparen'] = 0x3227;
 t['eightinferior'] = 0x2088;
 t['eightmonospace'] = 0xFF18;
 t['eightoldstyle'] = 0xF738;
 t['eightparen'] = 0x247B;
 t['eightperiod'] = 0x248F;
 t['eightpersian'] = 0x06F8;
 t['eightroman'] = 0x2177;
 t['eightsuperior'] = 0x2078;
 t['eightthai'] = 0x0E58;
 t['einvertedbreve'] = 0x0207;
 t['eiotifiedcyrillic'] = 0x0465;
 t['ekatakana'] = 0x30A8;
 t['ekatakanahalfwidth'] = 0xFF74;
 t['ekonkargurmukhi'] = 0x0A74;
 t['ekorean'] = 0x3154;
 t['elcyrillic'] = 0x043B;
 t['element'] = 0x2208;
 t['elevencircle'] = 0x246A;
 t['elevenparen'] = 0x247E;
 t['elevenperiod'] = 0x2492;
 t['elevenroman'] = 0x217A;
 t['ellipsis'] = 0x2026;
 t['ellipsisvertical'] = 0x22EE;
 t['emacron'] = 0x0113;
 t['emacronacute'] = 0x1E17;
 t['emacrongrave'] = 0x1E15;
 t['emcyrillic'] = 0x043C;
 t['emdash'] = 0x2014;
 t['emdashvertical'] = 0xFE31;
 t['emonospace'] = 0xFF45;
 t['emphasismarkarmenian'] = 0x055B;
 t['emptyset'] = 0x2205;
 t['enbopomofo'] = 0x3123;
 t['encyrillic'] = 0x043D;
 t['endash'] = 0x2013;
 t['endashvertical'] = 0xFE32;
 t['endescendercyrillic'] = 0x04A3;
 t['eng'] = 0x014B;
 t['engbopomofo'] = 0x3125;
 t['enghecyrillic'] = 0x04A5;
 t['enhookcyrillic'] = 0x04C8;
 t['enspace'] = 0x2002;
 t['eogonek'] = 0x0119;
 t['eokorean'] = 0x3153;
 t['eopen'] = 0x025B;
 t['eopenclosed'] = 0x029A;
 t['eopenreversed'] = 0x025C;
 t['eopenreversedclosed'] = 0x025E;
 t['eopenreversedhook'] = 0x025D;
 t['eparen'] = 0x24A0;
 t['epsilon'] = 0x03B5;
 t['epsilontonos'] = 0x03AD;
 t['equal'] = 0x003D;
 t['equalmonospace'] = 0xFF1D;
 t['equalsmall'] = 0xFE66;
 t['equalsuperior'] = 0x207C;
 t['equivalence'] = 0x2261;
 t['erbopomofo'] = 0x3126;
 t['ercyrillic'] = 0x0440;
 t['ereversed'] = 0x0258;
 t['ereversedcyrillic'] = 0x044D;
 t['escyrillic'] = 0x0441;
 t['esdescendercyrillic'] = 0x04AB;
 t['esh'] = 0x0283;
 t['eshcurl'] = 0x0286;
 t['eshortdeva'] = 0x090E;
 t['eshortvowelsigndeva'] = 0x0946;
 t['eshreversedloop'] = 0x01AA;
 t['eshsquatreversed'] = 0x0285;
 t['esmallhiragana'] = 0x3047;
 t['esmallkatakana'] = 0x30A7;
 t['esmallkatakanahalfwidth'] = 0xFF6A;
 t['estimated'] = 0x212E;
 t['esuperior'] = 0xF6EC;
 t['eta'] = 0x03B7;
 t['etarmenian'] = 0x0568;
 t['etatonos'] = 0x03AE;
 t['eth'] = 0x00F0;
 t['etilde'] = 0x1EBD;
 t['etildebelow'] = 0x1E1B;
 t['etnahtafoukhhebrew'] = 0x0591;
 t['etnahtafoukhlefthebrew'] = 0x0591;
 t['etnahtahebrew'] = 0x0591;
 t['etnahtalefthebrew'] = 0x0591;
 t['eturned'] = 0x01DD;
 t['eukorean'] = 0x3161;
 t['euro'] = 0x20AC;
 t['evowelsignbengali'] = 0x09C7;
 t['evowelsigndeva'] = 0x0947;
 t['evowelsigngujarati'] = 0x0AC7;
 t['exclam'] = 0x0021;
 t['exclamarmenian'] = 0x055C;
 t['exclamdbl'] = 0x203C;
 t['exclamdown'] = 0x00A1;
 t['exclamdownsmall'] = 0xF7A1;
 t['exclammonospace'] = 0xFF01;
 t['exclamsmall'] = 0xF721;
 t['existential'] = 0x2203;
 t['ezh'] = 0x0292;
 t['ezhcaron'] = 0x01EF;
 t['ezhcurl'] = 0x0293;
 t['ezhreversed'] = 0x01B9;
 t['ezhtail'] = 0x01BA;
 t['f'] = 0x0066;
 t['fadeva'] = 0x095E;
 t['fagurmukhi'] = 0x0A5E;
 t['fahrenheit'] = 0x2109;
 t['fathaarabic'] = 0x064E;
 t['fathalowarabic'] = 0x064E;
 t['fathatanarabic'] = 0x064B;
 t['fbopomofo'] = 0x3108;
 t['fcircle'] = 0x24D5;
 t['fdotaccent'] = 0x1E1F;
 t['feharabic'] = 0x0641;
 t['feharmenian'] = 0x0586;
 t['fehfinalarabic'] = 0xFED2;
 t['fehinitialarabic'] = 0xFED3;
 t['fehmedialarabic'] = 0xFED4;
 t['feicoptic'] = 0x03E5;
 t['female'] = 0x2640;
 t['ff'] = 0xFB00;
 t['ffi'] = 0xFB03;
 t['ffl'] = 0xFB04;
 t['fi'] = 0xFB01;
 t['fifteencircle'] = 0x246E;
 t['fifteenparen'] = 0x2482;
 t['fifteenperiod'] = 0x2496;
 t['figuredash'] = 0x2012;
 t['filledbox'] = 0x25A0;
 t['filledrect'] = 0x25AC;
 t['finalkaf'] = 0x05DA;
 t['finalkafdagesh'] = 0xFB3A;
 t['finalkafdageshhebrew'] = 0xFB3A;
 t['finalkafhebrew'] = 0x05DA;
 t['finalmem'] = 0x05DD;
 t['finalmemhebrew'] = 0x05DD;
 t['finalnun'] = 0x05DF;
 t['finalnunhebrew'] = 0x05DF;
 t['finalpe'] = 0x05E3;
 t['finalpehebrew'] = 0x05E3;
 t['finaltsadi'] = 0x05E5;
 t['finaltsadihebrew'] = 0x05E5;
 t['firsttonechinese'] = 0x02C9;
 t['fisheye'] = 0x25C9;
 t['fitacyrillic'] = 0x0473;
 t['five'] = 0x0035;
 t['fivearabic'] = 0x0665;
 t['fivebengali'] = 0x09EB;
 t['fivecircle'] = 0x2464;
 t['fivecircleinversesansserif'] = 0x278E;
 t['fivedeva'] = 0x096B;
 t['fiveeighths'] = 0x215D;
 t['fivegujarati'] = 0x0AEB;
 t['fivegurmukhi'] = 0x0A6B;
 t['fivehackarabic'] = 0x0665;
 t['fivehangzhou'] = 0x3025;
 t['fiveideographicparen'] = 0x3224;
 t['fiveinferior'] = 0x2085;
 t['fivemonospace'] = 0xFF15;
 t['fiveoldstyle'] = 0xF735;
 t['fiveparen'] = 0x2478;
 t['fiveperiod'] = 0x248C;
 t['fivepersian'] = 0x06F5;
 t['fiveroman'] = 0x2174;
 t['fivesuperior'] = 0x2075;
 t['fivethai'] = 0x0E55;
 t['fl'] = 0xFB02;
 t['florin'] = 0x0192;
 t['fmonospace'] = 0xFF46;
 t['fmsquare'] = 0x3399;
 t['fofanthai'] = 0x0E1F;
 t['fofathai'] = 0x0E1D;
 t['fongmanthai'] = 0x0E4F;
 t['forall'] = 0x2200;
 t['four'] = 0x0034;
 t['fourarabic'] = 0x0664;
 t['fourbengali'] = 0x09EA;
 t['fourcircle'] = 0x2463;
 t['fourcircleinversesansserif'] = 0x278D;
 t['fourdeva'] = 0x096A;
 t['fourgujarati'] = 0x0AEA;
 t['fourgurmukhi'] = 0x0A6A;
 t['fourhackarabic'] = 0x0664;
 t['fourhangzhou'] = 0x3024;
 t['fourideographicparen'] = 0x3223;
 t['fourinferior'] = 0x2084;
 t['fourmonospace'] = 0xFF14;
 t['fournumeratorbengali'] = 0x09F7;
 t['fouroldstyle'] = 0xF734;
 t['fourparen'] = 0x2477;
 t['fourperiod'] = 0x248B;
 t['fourpersian'] = 0x06F4;
 t['fourroman'] = 0x2173;
 t['foursuperior'] = 0x2074;
 t['fourteencircle'] = 0x246D;
 t['fourteenparen'] = 0x2481;
 t['fourteenperiod'] = 0x2495;
 t['fourthai'] = 0x0E54;
 t['fourthtonechinese'] = 0x02CB;
 t['fparen'] = 0x24A1;
 t['fraction'] = 0x2044;
 t['franc'] = 0x20A3;
 t['g'] = 0x0067;
 t['gabengali'] = 0x0997;
 t['gacute'] = 0x01F5;
 t['gadeva'] = 0x0917;
 t['gafarabic'] = 0x06AF;
 t['gaffinalarabic'] = 0xFB93;
 t['gafinitialarabic'] = 0xFB94;
 t['gafmedialarabic'] = 0xFB95;
 t['gagujarati'] = 0x0A97;
 t['gagurmukhi'] = 0x0A17;
 t['gahiragana'] = 0x304C;
 t['gakatakana'] = 0x30AC;
 t['gamma'] = 0x03B3;
 t['gammalatinsmall'] = 0x0263;
 t['gammasuperior'] = 0x02E0;
 t['gangiacoptic'] = 0x03EB;
 t['gbopomofo'] = 0x310D;
 t['gbreve'] = 0x011F;
 t['gcaron'] = 0x01E7;
 t['gcedilla'] = 0x0123;
 t['gcircle'] = 0x24D6;
 t['gcircumflex'] = 0x011D;
 t['gcommaaccent'] = 0x0123;
 t['gdot'] = 0x0121;
 t['gdotaccent'] = 0x0121;
 t['gecyrillic'] = 0x0433;
 t['gehiragana'] = 0x3052;
 t['gekatakana'] = 0x30B2;
 t['geometricallyequal'] = 0x2251;
 t['gereshaccenthebrew'] = 0x059C;
 t['gereshhebrew'] = 0x05F3;
 t['gereshmuqdamhebrew'] = 0x059D;
 t['germandbls'] = 0x00DF;
 t['gershayimaccenthebrew'] = 0x059E;
 t['gershayimhebrew'] = 0x05F4;
 t['getamark'] = 0x3013;
 t['ghabengali'] = 0x0998;
 t['ghadarmenian'] = 0x0572;
 t['ghadeva'] = 0x0918;
 t['ghagujarati'] = 0x0A98;
 t['ghagurmukhi'] = 0x0A18;
 t['ghainarabic'] = 0x063A;
 t['ghainfinalarabic'] = 0xFECE;
 t['ghaininitialarabic'] = 0xFECF;
 t['ghainmedialarabic'] = 0xFED0;
 t['ghemiddlehookcyrillic'] = 0x0495;
 t['ghestrokecyrillic'] = 0x0493;
 t['gheupturncyrillic'] = 0x0491;
 t['ghhadeva'] = 0x095A;
 t['ghhagurmukhi'] = 0x0A5A;
 t['ghook'] = 0x0260;
 t['ghzsquare'] = 0x3393;
 t['gihiragana'] = 0x304E;
 t['gikatakana'] = 0x30AE;
 t['gimarmenian'] = 0x0563;
 t['gimel'] = 0x05D2;
 t['gimeldagesh'] = 0xFB32;
 t['gimeldageshhebrew'] = 0xFB32;
 t['gimelhebrew'] = 0x05D2;
 t['gjecyrillic'] = 0x0453;
 t['glottalinvertedstroke'] = 0x01BE;
 t['glottalstop'] = 0x0294;
 t['glottalstopinverted'] = 0x0296;
 t['glottalstopmod'] = 0x02C0;
 t['glottalstopreversed'] = 0x0295;
 t['glottalstopreversedmod'] = 0x02C1;
 t['glottalstopreversedsuperior'] = 0x02E4;
 t['glottalstopstroke'] = 0x02A1;
 t['glottalstopstrokereversed'] = 0x02A2;
 t['gmacron'] = 0x1E21;
 t['gmonospace'] = 0xFF47;
 t['gohiragana'] = 0x3054;
 t['gokatakana'] = 0x30B4;
 t['gparen'] = 0x24A2;
 t['gpasquare'] = 0x33AC;
 t['gradient'] = 0x2207;
 t['grave'] = 0x0060;
 t['gravebelowcmb'] = 0x0316;
 t['gravecmb'] = 0x0300;
 t['gravecomb'] = 0x0300;
 t['gravedeva'] = 0x0953;
 t['gravelowmod'] = 0x02CE;
 t['gravemonospace'] = 0xFF40;
 t['gravetonecmb'] = 0x0340;
 t['greater'] = 0x003E;
 t['greaterequal'] = 0x2265;
 t['greaterequalorless'] = 0x22DB;
 t['greatermonospace'] = 0xFF1E;
 t['greaterorequivalent'] = 0x2273;
 t['greaterorless'] = 0x2277;
 t['greateroverequal'] = 0x2267;
 t['greatersmall'] = 0xFE65;
 t['gscript'] = 0x0261;
 t['gstroke'] = 0x01E5;
 t['guhiragana'] = 0x3050;
 t['guillemotleft'] = 0x00AB;
 t['guillemotright'] = 0x00BB;
 t['guilsinglleft'] = 0x2039;
 t['guilsinglright'] = 0x203A;
 t['gukatakana'] = 0x30B0;
 t['guramusquare'] = 0x3318;
 t['gysquare'] = 0x33C9;
 t['h'] = 0x0068;
 t['haabkhasiancyrillic'] = 0x04A9;
 t['haaltonearabic'] = 0x06C1;
 t['habengali'] = 0x09B9;
 t['hadescendercyrillic'] = 0x04B3;
 t['hadeva'] = 0x0939;
 t['hagujarati'] = 0x0AB9;
 t['hagurmukhi'] = 0x0A39;
 t['haharabic'] = 0x062D;
 t['hahfinalarabic'] = 0xFEA2;
 t['hahinitialarabic'] = 0xFEA3;
 t['hahiragana'] = 0x306F;
 t['hahmedialarabic'] = 0xFEA4;
 t['haitusquare'] = 0x332A;
 t['hakatakana'] = 0x30CF;
 t['hakatakanahalfwidth'] = 0xFF8A;
 t['halantgurmukhi'] = 0x0A4D;
 t['hamzaarabic'] = 0x0621;
 t['hamzalowarabic'] = 0x0621;
 t['hangulfiller'] = 0x3164;
 t['hardsigncyrillic'] = 0x044A;
 t['harpoonleftbarbup'] = 0x21BC;
 t['harpoonrightbarbup'] = 0x21C0;
 t['hasquare'] = 0x33CA;
 t['hatafpatah'] = 0x05B2;
 t['hatafpatah16'] = 0x05B2;
 t['hatafpatah23'] = 0x05B2;
 t['hatafpatah2f'] = 0x05B2;
 t['hatafpatahhebrew'] = 0x05B2;
 t['hatafpatahnarrowhebrew'] = 0x05B2;
 t['hatafpatahquarterhebrew'] = 0x05B2;
 t['hatafpatahwidehebrew'] = 0x05B2;
 t['hatafqamats'] = 0x05B3;
 t['hatafqamats1b'] = 0x05B3;
 t['hatafqamats28'] = 0x05B3;
 t['hatafqamats34'] = 0x05B3;
 t['hatafqamatshebrew'] = 0x05B3;
 t['hatafqamatsnarrowhebrew'] = 0x05B3;
 t['hatafqamatsquarterhebrew'] = 0x05B3;
 t['hatafqamatswidehebrew'] = 0x05B3;
 t['hatafsegol'] = 0x05B1;
 t['hatafsegol17'] = 0x05B1;
 t['hatafsegol24'] = 0x05B1;
 t['hatafsegol30'] = 0x05B1;
 t['hatafsegolhebrew'] = 0x05B1;
 t['hatafsegolnarrowhebrew'] = 0x05B1;
 t['hatafsegolquarterhebrew'] = 0x05B1;
 t['hatafsegolwidehebrew'] = 0x05B1;
 t['hbar'] = 0x0127;
 t['hbopomofo'] = 0x310F;
 t['hbrevebelow'] = 0x1E2B;
 t['hcedilla'] = 0x1E29;
 t['hcircle'] = 0x24D7;
 t['hcircumflex'] = 0x0125;
 t['hdieresis'] = 0x1E27;
 t['hdotaccent'] = 0x1E23;
 t['hdotbelow'] = 0x1E25;
 t['he'] = 0x05D4;
 t['heart'] = 0x2665;
 t['heartsuitblack'] = 0x2665;
 t['heartsuitwhite'] = 0x2661;
 t['hedagesh'] = 0xFB34;
 t['hedageshhebrew'] = 0xFB34;
 t['hehaltonearabic'] = 0x06C1;
 t['heharabic'] = 0x0647;
 t['hehebrew'] = 0x05D4;
 t['hehfinalaltonearabic'] = 0xFBA7;
 t['hehfinalalttwoarabic'] = 0xFEEA;
 t['hehfinalarabic'] = 0xFEEA;
 t['hehhamzaabovefinalarabic'] = 0xFBA5;
 t['hehhamzaaboveisolatedarabic'] = 0xFBA4;
 t['hehinitialaltonearabic'] = 0xFBA8;
 t['hehinitialarabic'] = 0xFEEB;
 t['hehiragana'] = 0x3078;
 t['hehmedialaltonearabic'] = 0xFBA9;
 t['hehmedialarabic'] = 0xFEEC;
 t['heiseierasquare'] = 0x337B;
 t['hekatakana'] = 0x30D8;
 t['hekatakanahalfwidth'] = 0xFF8D;
 t['hekutaarusquare'] = 0x3336;
 t['henghook'] = 0x0267;
 t['herutusquare'] = 0x3339;
 t['het'] = 0x05D7;
 t['hethebrew'] = 0x05D7;
 t['hhook'] = 0x0266;
 t['hhooksuperior'] = 0x02B1;
 t['hieuhacirclekorean'] = 0x327B;
 t['hieuhaparenkorean'] = 0x321B;
 t['hieuhcirclekorean'] = 0x326D;
 t['hieuhkorean'] = 0x314E;
 t['hieuhparenkorean'] = 0x320D;
 t['hihiragana'] = 0x3072;
 t['hikatakana'] = 0x30D2;
 t['hikatakanahalfwidth'] = 0xFF8B;
 t['hiriq'] = 0x05B4;
 t['hiriq14'] = 0x05B4;
 t['hiriq21'] = 0x05B4;
 t['hiriq2d'] = 0x05B4;
 t['hiriqhebrew'] = 0x05B4;
 t['hiriqnarrowhebrew'] = 0x05B4;
 t['hiriqquarterhebrew'] = 0x05B4;
 t['hiriqwidehebrew'] = 0x05B4;
 t['hlinebelow'] = 0x1E96;
 t['hmonospace'] = 0xFF48;
 t['hoarmenian'] = 0x0570;
 t['hohipthai'] = 0x0E2B;
 t['hohiragana'] = 0x307B;
 t['hokatakana'] = 0x30DB;
 t['hokatakanahalfwidth'] = 0xFF8E;
 t['holam'] = 0x05B9;
 t['holam19'] = 0x05B9;
 t['holam26'] = 0x05B9;
 t['holam32'] = 0x05B9;
 t['holamhebrew'] = 0x05B9;
 t['holamnarrowhebrew'] = 0x05B9;
 t['holamquarterhebrew'] = 0x05B9;
 t['holamwidehebrew'] = 0x05B9;
 t['honokhukthai'] = 0x0E2E;
 t['hookabovecomb'] = 0x0309;
 t['hookcmb'] = 0x0309;
 t['hookpalatalizedbelowcmb'] = 0x0321;
 t['hookretroflexbelowcmb'] = 0x0322;
 t['hoonsquare'] = 0x3342;
 t['horicoptic'] = 0x03E9;
 t['horizontalbar'] = 0x2015;
 t['horncmb'] = 0x031B;
 t['hotsprings'] = 0x2668;
 t['house'] = 0x2302;
 t['hparen'] = 0x24A3;
 t['hsuperior'] = 0x02B0;
 t['hturned'] = 0x0265;
 t['huhiragana'] = 0x3075;
 t['huiitosquare'] = 0x3333;
 t['hukatakana'] = 0x30D5;
 t['hukatakanahalfwidth'] = 0xFF8C;
 t['hungarumlaut'] = 0x02DD;
 t['hungarumlautcmb'] = 0x030B;
 t['hv'] = 0x0195;
 t['hyphen'] = 0x002D;
 t['hypheninferior'] = 0xF6E5;
 t['hyphenmonospace'] = 0xFF0D;
 t['hyphensmall'] = 0xFE63;
 t['hyphensuperior'] = 0xF6E6;
 t['hyphentwo'] = 0x2010;
 t['i'] = 0x0069;
 t['iacute'] = 0x00ED;
 t['iacyrillic'] = 0x044F;
 t['ibengali'] = 0x0987;
 t['ibopomofo'] = 0x3127;
 t['ibreve'] = 0x012D;
 t['icaron'] = 0x01D0;
 t['icircle'] = 0x24D8;
 t['icircumflex'] = 0x00EE;
 t['icyrillic'] = 0x0456;
 t['idblgrave'] = 0x0209;
 t['ideographearthcircle'] = 0x328F;
 t['ideographfirecircle'] = 0x328B;
 t['ideographicallianceparen'] = 0x323F;
 t['ideographiccallparen'] = 0x323A;
 t['ideographiccentrecircle'] = 0x32A5;
 t['ideographicclose'] = 0x3006;
 t['ideographiccomma'] = 0x3001;
 t['ideographiccommaleft'] = 0xFF64;
 t['ideographiccongratulationparen'] = 0x3237;
 t['ideographiccorrectcircle'] = 0x32A3;
 t['ideographicearthparen'] = 0x322F;
 t['ideographicenterpriseparen'] = 0x323D;
 t['ideographicexcellentcircle'] = 0x329D;
 t['ideographicfestivalparen'] = 0x3240;
 t['ideographicfinancialcircle'] = 0x3296;
 t['ideographicfinancialparen'] = 0x3236;
 t['ideographicfireparen'] = 0x322B;
 t['ideographichaveparen'] = 0x3232;
 t['ideographichighcircle'] = 0x32A4;
 t['ideographiciterationmark'] = 0x3005;
 t['ideographiclaborcircle'] = 0x3298;
 t['ideographiclaborparen'] = 0x3238;
 t['ideographicleftcircle'] = 0x32A7;
 t['ideographiclowcircle'] = 0x32A6;
 t['ideographicmedicinecircle'] = 0x32A9;
 t['ideographicmetalparen'] = 0x322E;
 t['ideographicmoonparen'] = 0x322A;
 t['ideographicnameparen'] = 0x3234;
 t['ideographicperiod'] = 0x3002;
 t['ideographicprintcircle'] = 0x329E;
 t['ideographicreachparen'] = 0x3243;
 t['ideographicrepresentparen'] = 0x3239;
 t['ideographicresourceparen'] = 0x323E;
 t['ideographicrightcircle'] = 0x32A8;
 t['ideographicsecretcircle'] = 0x3299;
 t['ideographicselfparen'] = 0x3242;
 t['ideographicsocietyparen'] = 0x3233;
 t['ideographicspace'] = 0x3000;
 t['ideographicspecialparen'] = 0x3235;
 t['ideographicstockparen'] = 0x3231;
 t['ideographicstudyparen'] = 0x323B;
 t['ideographicsunparen'] = 0x3230;
 t['ideographicsuperviseparen'] = 0x323C;
 t['ideographicwaterparen'] = 0x322C;
 t['ideographicwoodparen'] = 0x322D;
 t['ideographiczero'] = 0x3007;
 t['ideographmetalcircle'] = 0x328E;
 t['ideographmooncircle'] = 0x328A;
 t['ideographnamecircle'] = 0x3294;
 t['ideographsuncircle'] = 0x3290;
 t['ideographwatercircle'] = 0x328C;
 t['ideographwoodcircle'] = 0x328D;
 t['ideva'] = 0x0907;
 t['idieresis'] = 0x00EF;
 t['idieresisacute'] = 0x1E2F;
 t['idieresiscyrillic'] = 0x04E5;
 t['idotbelow'] = 0x1ECB;
 t['iebrevecyrillic'] = 0x04D7;
 t['iecyrillic'] = 0x0435;
 t['ieungacirclekorean'] = 0x3275;
 t['ieungaparenkorean'] = 0x3215;
 t['ieungcirclekorean'] = 0x3267;
 t['ieungkorean'] = 0x3147;
 t['ieungparenkorean'] = 0x3207;
 t['igrave'] = 0x00EC;
 t['igujarati'] = 0x0A87;
 t['igurmukhi'] = 0x0A07;
 t['ihiragana'] = 0x3044;
 t['ihookabove'] = 0x1EC9;
 t['iibengali'] = 0x0988;
 t['iicyrillic'] = 0x0438;
 t['iideva'] = 0x0908;
 t['iigujarati'] = 0x0A88;
 t['iigurmukhi'] = 0x0A08;
 t['iimatragurmukhi'] = 0x0A40;
 t['iinvertedbreve'] = 0x020B;
 t['iishortcyrillic'] = 0x0439;
 t['iivowelsignbengali'] = 0x09C0;
 t['iivowelsigndeva'] = 0x0940;
 t['iivowelsigngujarati'] = 0x0AC0;
 t['ij'] = 0x0133;
 t['ikatakana'] = 0x30A4;
 t['ikatakanahalfwidth'] = 0xFF72;
 t['ikorean'] = 0x3163;
 t['ilde'] = 0x02DC;
 t['iluyhebrew'] = 0x05AC;
 t['imacron'] = 0x012B;
 t['imacroncyrillic'] = 0x04E3;
 t['imageorapproximatelyequal'] = 0x2253;
 t['imatragurmukhi'] = 0x0A3F;
 t['imonospace'] = 0xFF49;
 t['increment'] = 0x2206;
 t['infinity'] = 0x221E;
 t['iniarmenian'] = 0x056B;
 t['integral'] = 0x222B;
 t['integralbottom'] = 0x2321;
 t['integralbt'] = 0x2321;
 t['integralex'] = 0xF8F5;
 t['integraltop'] = 0x2320;
 t['integraltp'] = 0x2320;
 t['intersection'] = 0x2229;
 t['intisquare'] = 0x3305;
 t['invbullet'] = 0x25D8;
 t['invcircle'] = 0x25D9;
 t['invsmileface'] = 0x263B;
 t['iocyrillic'] = 0x0451;
 t['iogonek'] = 0x012F;
 t['iota'] = 0x03B9;
 t['iotadieresis'] = 0x03CA;
 t['iotadieresistonos'] = 0x0390;
 t['iotalatin'] = 0x0269;
 t['iotatonos'] = 0x03AF;
 t['iparen'] = 0x24A4;
 t['irigurmukhi'] = 0x0A72;
 t['ismallhiragana'] = 0x3043;
 t['ismallkatakana'] = 0x30A3;
 t['ismallkatakanahalfwidth'] = 0xFF68;
 t['issharbengali'] = 0x09FA;
 t['istroke'] = 0x0268;
 t['isuperior'] = 0xF6ED;
 t['iterationhiragana'] = 0x309D;
 t['iterationkatakana'] = 0x30FD;
 t['itilde'] = 0x0129;
 t['itildebelow'] = 0x1E2D;
 t['iubopomofo'] = 0x3129;
 t['iucyrillic'] = 0x044E;
 t['ivowelsignbengali'] = 0x09BF;
 t['ivowelsigndeva'] = 0x093F;
 t['ivowelsigngujarati'] = 0x0ABF;
 t['izhitsacyrillic'] = 0x0475;
 t['izhitsadblgravecyrillic'] = 0x0477;
 t['j'] = 0x006A;
 t['jaarmenian'] = 0x0571;
 t['jabengali'] = 0x099C;
 t['jadeva'] = 0x091C;
 t['jagujarati'] = 0x0A9C;
 t['jagurmukhi'] = 0x0A1C;
 t['jbopomofo'] = 0x3110;
 t['jcaron'] = 0x01F0;
 t['jcircle'] = 0x24D9;
 t['jcircumflex'] = 0x0135;
 t['jcrossedtail'] = 0x029D;
 t['jdotlessstroke'] = 0x025F;
 t['jecyrillic'] = 0x0458;
 t['jeemarabic'] = 0x062C;
 t['jeemfinalarabic'] = 0xFE9E;
 t['jeeminitialarabic'] = 0xFE9F;
 t['jeemmedialarabic'] = 0xFEA0;
 t['jeharabic'] = 0x0698;
 t['jehfinalarabic'] = 0xFB8B;
 t['jhabengali'] = 0x099D;
 t['jhadeva'] = 0x091D;
 t['jhagujarati'] = 0x0A9D;
 t['jhagurmukhi'] = 0x0A1D;
 t['jheharmenian'] = 0x057B;
 t['jis'] = 0x3004;
 t['jmonospace'] = 0xFF4A;
 t['jparen'] = 0x24A5;
 t['jsuperior'] = 0x02B2;
 t['k'] = 0x006B;
 t['kabashkircyrillic'] = 0x04A1;
 t['kabengali'] = 0x0995;
 t['kacute'] = 0x1E31;
 t['kacyrillic'] = 0x043A;
 t['kadescendercyrillic'] = 0x049B;
 t['kadeva'] = 0x0915;
 t['kaf'] = 0x05DB;
 t['kafarabic'] = 0x0643;
 t['kafdagesh'] = 0xFB3B;
 t['kafdageshhebrew'] = 0xFB3B;
 t['kaffinalarabic'] = 0xFEDA;
 t['kafhebrew'] = 0x05DB;
 t['kafinitialarabic'] = 0xFEDB;
 t['kafmedialarabic'] = 0xFEDC;
 t['kafrafehebrew'] = 0xFB4D;
 t['kagujarati'] = 0x0A95;
 t['kagurmukhi'] = 0x0A15;
 t['kahiragana'] = 0x304B;
 t['kahookcyrillic'] = 0x04C4;
 t['kakatakana'] = 0x30AB;
 t['kakatakanahalfwidth'] = 0xFF76;
 t['kappa'] = 0x03BA;
 t['kappasymbolgreek'] = 0x03F0;
 t['kapyeounmieumkorean'] = 0x3171;
 t['kapyeounphieuphkorean'] = 0x3184;
 t['kapyeounpieupkorean'] = 0x3178;
 t['kapyeounssangpieupkorean'] = 0x3179;
 t['karoriisquare'] = 0x330D;
 t['kashidaautoarabic'] = 0x0640;
 t['kashidaautonosidebearingarabic'] = 0x0640;
 t['kasmallkatakana'] = 0x30F5;
 t['kasquare'] = 0x3384;
 t['kasraarabic'] = 0x0650;
 t['kasratanarabic'] = 0x064D;
 t['kastrokecyrillic'] = 0x049F;
 t['katahiraprolongmarkhalfwidth'] = 0xFF70;
 t['kaverticalstrokecyrillic'] = 0x049D;
 t['kbopomofo'] = 0x310E;
 t['kcalsquare'] = 0x3389;
 t['kcaron'] = 0x01E9;
 t['kcedilla'] = 0x0137;
 t['kcircle'] = 0x24DA;
 t['kcommaaccent'] = 0x0137;
 t['kdotbelow'] = 0x1E33;
 t['keharmenian'] = 0x0584;
 t['kehiragana'] = 0x3051;
 t['kekatakana'] = 0x30B1;
 t['kekatakanahalfwidth'] = 0xFF79;
 t['kenarmenian'] = 0x056F;
 t['kesmallkatakana'] = 0x30F6;
 t['kgreenlandic'] = 0x0138;
 t['khabengali'] = 0x0996;
 t['khacyrillic'] = 0x0445;
 t['khadeva'] = 0x0916;
 t['khagujarati'] = 0x0A96;
 t['khagurmukhi'] = 0x0A16;
 t['khaharabic'] = 0x062E;
 t['khahfinalarabic'] = 0xFEA6;
 t['khahinitialarabic'] = 0xFEA7;
 t['khahmedialarabic'] = 0xFEA8;
 t['kheicoptic'] = 0x03E7;
 t['khhadeva'] = 0x0959;
 t['khhagurmukhi'] = 0x0A59;
 t['khieukhacirclekorean'] = 0x3278;
 t['khieukhaparenkorean'] = 0x3218;
 t['khieukhcirclekorean'] = 0x326A;
 t['khieukhkorean'] = 0x314B;
 t['khieukhparenkorean'] = 0x320A;
 t['khokhaithai'] = 0x0E02;
 t['khokhonthai'] = 0x0E05;
 t['khokhuatthai'] = 0x0E03;
 t['khokhwaithai'] = 0x0E04;
 t['khomutthai'] = 0x0E5B;
 t['khook'] = 0x0199;
 t['khorakhangthai'] = 0x0E06;
 t['khzsquare'] = 0x3391;
 t['kihiragana'] = 0x304D;
 t['kikatakana'] = 0x30AD;
 t['kikatakanahalfwidth'] = 0xFF77;
 t['kiroguramusquare'] = 0x3315;
 t['kiromeetorusquare'] = 0x3316;
 t['kirosquare'] = 0x3314;
 t['kiyeokacirclekorean'] = 0x326E;
 t['kiyeokaparenkorean'] = 0x320E;
 t['kiyeokcirclekorean'] = 0x3260;
 t['kiyeokkorean'] = 0x3131;
 t['kiyeokparenkorean'] = 0x3200;
 t['kiyeoksioskorean'] = 0x3133;
 t['kjecyrillic'] = 0x045C;
 t['klinebelow'] = 0x1E35;
 t['klsquare'] = 0x3398;
 t['kmcubedsquare'] = 0x33A6;
 t['kmonospace'] = 0xFF4B;
 t['kmsquaredsquare'] = 0x33A2;
 t['kohiragana'] = 0x3053;
 t['kohmsquare'] = 0x33C0;
 t['kokaithai'] = 0x0E01;
 t['kokatakana'] = 0x30B3;
 t['kokatakanahalfwidth'] = 0xFF7A;
 t['kooposquare'] = 0x331E;
 t['koppacyrillic'] = 0x0481;
 t['koreanstandardsymbol'] = 0x327F;
 t['koroniscmb'] = 0x0343;
 t['kparen'] = 0x24A6;
 t['kpasquare'] = 0x33AA;
 t['ksicyrillic'] = 0x046F;
 t['ktsquare'] = 0x33CF;
 t['kturned'] = 0x029E;
 t['kuhiragana'] = 0x304F;
 t['kukatakana'] = 0x30AF;
 t['kukatakanahalfwidth'] = 0xFF78;
 t['kvsquare'] = 0x33B8;
 t['kwsquare'] = 0x33BE;
 t['l'] = 0x006C;
 t['labengali'] = 0x09B2;
 t['lacute'] = 0x013A;
 t['ladeva'] = 0x0932;
 t['lagujarati'] = 0x0AB2;
 t['lagurmukhi'] = 0x0A32;
 t['lakkhangyaothai'] = 0x0E45;
 t['lamaleffinalarabic'] = 0xFEFC;
 t['lamalefhamzaabovefinalarabic'] = 0xFEF8;
 t['lamalefhamzaaboveisolatedarabic'] = 0xFEF7;
 t['lamalefhamzabelowfinalarabic'] = 0xFEFA;
 t['lamalefhamzabelowisolatedarabic'] = 0xFEF9;
 t['lamalefisolatedarabic'] = 0xFEFB;
 t['lamalefmaddaabovefinalarabic'] = 0xFEF6;
 t['lamalefmaddaaboveisolatedarabic'] = 0xFEF5;
 t['lamarabic'] = 0x0644;
 t['lambda'] = 0x03BB;
 t['lambdastroke'] = 0x019B;
 t['lamed'] = 0x05DC;
 t['lameddagesh'] = 0xFB3C;
 t['lameddageshhebrew'] = 0xFB3C;
 t['lamedhebrew'] = 0x05DC;
 t['lamfinalarabic'] = 0xFEDE;
 t['lamhahinitialarabic'] = 0xFCCA;
 t['laminitialarabic'] = 0xFEDF;
 t['lamjeeminitialarabic'] = 0xFCC9;
 t['lamkhahinitialarabic'] = 0xFCCB;
 t['lamlamhehisolatedarabic'] = 0xFDF2;
 t['lammedialarabic'] = 0xFEE0;
 t['lammeemhahinitialarabic'] = 0xFD88;
 t['lammeeminitialarabic'] = 0xFCCC;
 t['largecircle'] = 0x25EF;
 t['lbar'] = 0x019A;
 t['lbelt'] = 0x026C;
 t['lbopomofo'] = 0x310C;
 t['lcaron'] = 0x013E;
 t['lcedilla'] = 0x013C;
 t['lcircle'] = 0x24DB;
 t['lcircumflexbelow'] = 0x1E3D;
 t['lcommaaccent'] = 0x013C;
 t['ldot'] = 0x0140;
 t['ldotaccent'] = 0x0140;
 t['ldotbelow'] = 0x1E37;
 t['ldotbelowmacron'] = 0x1E39;
 t['leftangleabovecmb'] = 0x031A;
 t['lefttackbelowcmb'] = 0x0318;
 t['less'] = 0x003C;
 t['lessequal'] = 0x2264;
 t['lessequalorgreater'] = 0x22DA;
 t['lessmonospace'] = 0xFF1C;
 t['lessorequivalent'] = 0x2272;
 t['lessorgreater'] = 0x2276;
 t['lessoverequal'] = 0x2266;
 t['lesssmall'] = 0xFE64;
 t['lezh'] = 0x026E;
 t['lfblock'] = 0x258C;
 t['lhookretroflex'] = 0x026D;
 t['lira'] = 0x20A4;
 t['liwnarmenian'] = 0x056C;
 t['lj'] = 0x01C9;
 t['ljecyrillic'] = 0x0459;
 t['ll'] = 0xF6C0;
 t['lladeva'] = 0x0933;
 t['llagujarati'] = 0x0AB3;
 t['llinebelow'] = 0x1E3B;
 t['llladeva'] = 0x0934;
 t['llvocalicbengali'] = 0x09E1;
 t['llvocalicdeva'] = 0x0961;
 t['llvocalicvowelsignbengali'] = 0x09E3;
 t['llvocalicvowelsigndeva'] = 0x0963;
 t['lmiddletilde'] = 0x026B;
 t['lmonospace'] = 0xFF4C;
 t['lmsquare'] = 0x33D0;
 t['lochulathai'] = 0x0E2C;
 t['logicaland'] = 0x2227;
 t['logicalnot'] = 0x00AC;
 t['logicalnotreversed'] = 0x2310;
 t['logicalor'] = 0x2228;
 t['lolingthai'] = 0x0E25;
 t['longs'] = 0x017F;
 t['lowlinecenterline'] = 0xFE4E;
 t['lowlinecmb'] = 0x0332;
 t['lowlinedashed'] = 0xFE4D;
 t['lozenge'] = 0x25CA;
 t['lparen'] = 0x24A7;
 t['lslash'] = 0x0142;
 t['lsquare'] = 0x2113;
 t['lsuperior'] = 0xF6EE;
 t['ltshade'] = 0x2591;
 t['luthai'] = 0x0E26;
 t['lvocalicbengali'] = 0x098C;
 t['lvocalicdeva'] = 0x090C;
 t['lvocalicvowelsignbengali'] = 0x09E2;
 t['lvocalicvowelsigndeva'] = 0x0962;
 t['lxsquare'] = 0x33D3;
 t['m'] = 0x006D;
 t['mabengali'] = 0x09AE;
 t['macron'] = 0x00AF;
 t['macronbelowcmb'] = 0x0331;
 t['macroncmb'] = 0x0304;
 t['macronlowmod'] = 0x02CD;
 t['macronmonospace'] = 0xFFE3;
 t['macute'] = 0x1E3F;
 t['madeva'] = 0x092E;
 t['magujarati'] = 0x0AAE;
 t['magurmukhi'] = 0x0A2E;
 t['mahapakhhebrew'] = 0x05A4;
 t['mahapakhlefthebrew'] = 0x05A4;
 t['mahiragana'] = 0x307E;
 t['maichattawalowleftthai'] = 0xF895;
 t['maichattawalowrightthai'] = 0xF894;
 t['maichattawathai'] = 0x0E4B;
 t['maichattawaupperleftthai'] = 0xF893;
 t['maieklowleftthai'] = 0xF88C;
 t['maieklowrightthai'] = 0xF88B;
 t['maiekthai'] = 0x0E48;
 t['maiekupperleftthai'] = 0xF88A;
 t['maihanakatleftthai'] = 0xF884;
 t['maihanakatthai'] = 0x0E31;
 t['maitaikhuleftthai'] = 0xF889;
 t['maitaikhuthai'] = 0x0E47;
 t['maitholowleftthai'] = 0xF88F;
 t['maitholowrightthai'] = 0xF88E;
 t['maithothai'] = 0x0E49;
 t['maithoupperleftthai'] = 0xF88D;
 t['maitrilowleftthai'] = 0xF892;
 t['maitrilowrightthai'] = 0xF891;
 t['maitrithai'] = 0x0E4A;
 t['maitriupperleftthai'] = 0xF890;
 t['maiyamokthai'] = 0x0E46;
 t['makatakana'] = 0x30DE;
 t['makatakanahalfwidth'] = 0xFF8F;
 t['male'] = 0x2642;
 t['mansyonsquare'] = 0x3347;
 t['maqafhebrew'] = 0x05BE;
 t['mars'] = 0x2642;
 t['masoracirclehebrew'] = 0x05AF;
 t['masquare'] = 0x3383;
 t['mbopomofo'] = 0x3107;
 t['mbsquare'] = 0x33D4;
 t['mcircle'] = 0x24DC;
 t['mcubedsquare'] = 0x33A5;
 t['mdotaccent'] = 0x1E41;
 t['mdotbelow'] = 0x1E43;
 t['meemarabic'] = 0x0645;
 t['meemfinalarabic'] = 0xFEE2;
 t['meeminitialarabic'] = 0xFEE3;
 t['meemmedialarabic'] = 0xFEE4;
 t['meemmeeminitialarabic'] = 0xFCD1;
 t['meemmeemisolatedarabic'] = 0xFC48;
 t['meetorusquare'] = 0x334D;
 t['mehiragana'] = 0x3081;
 t['meizierasquare'] = 0x337E;
 t['mekatakana'] = 0x30E1;
 t['mekatakanahalfwidth'] = 0xFF92;
 t['mem'] = 0x05DE;
 t['memdagesh'] = 0xFB3E;
 t['memdageshhebrew'] = 0xFB3E;
 t['memhebrew'] = 0x05DE;
 t['menarmenian'] = 0x0574;
 t['merkhahebrew'] = 0x05A5;
 t['merkhakefulahebrew'] = 0x05A6;
 t['merkhakefulalefthebrew'] = 0x05A6;
 t['merkhalefthebrew'] = 0x05A5;
 t['mhook'] = 0x0271;
 t['mhzsquare'] = 0x3392;
 t['middledotkatakanahalfwidth'] = 0xFF65;
 t['middot'] = 0x00B7;
 t['mieumacirclekorean'] = 0x3272;
 t['mieumaparenkorean'] = 0x3212;
 t['mieumcirclekorean'] = 0x3264;
 t['mieumkorean'] = 0x3141;
 t['mieumpansioskorean'] = 0x3170;
 t['mieumparenkorean'] = 0x3204;
 t['mieumpieupkorean'] = 0x316E;
 t['mieumsioskorean'] = 0x316F;
 t['mihiragana'] = 0x307F;
 t['mikatakana'] = 0x30DF;
 t['mikatakanahalfwidth'] = 0xFF90;
 t['minus'] = 0x2212;
 t['minusbelowcmb'] = 0x0320;
 t['minuscircle'] = 0x2296;
 t['minusmod'] = 0x02D7;
 t['minusplus'] = 0x2213;
 t['minute'] = 0x2032;
 t['miribaarusquare'] = 0x334A;
 t['mirisquare'] = 0x3349;
 t['mlonglegturned'] = 0x0270;
 t['mlsquare'] = 0x3396;
 t['mmcubedsquare'] = 0x33A3;
 t['mmonospace'] = 0xFF4D;
 t['mmsquaredsquare'] = 0x339F;
 t['mohiragana'] = 0x3082;
 t['mohmsquare'] = 0x33C1;
 t['mokatakana'] = 0x30E2;
 t['mokatakanahalfwidth'] = 0xFF93;
 t['molsquare'] = 0x33D6;
 t['momathai'] = 0x0E21;
 t['moverssquare'] = 0x33A7;
 t['moverssquaredsquare'] = 0x33A8;
 t['mparen'] = 0x24A8;
 t['mpasquare'] = 0x33AB;
 t['mssquare'] = 0x33B3;
 t['msuperior'] = 0xF6EF;
 t['mturned'] = 0x026F;
 t['mu'] = 0x00B5;
 t['mu1'] = 0x00B5;
 t['muasquare'] = 0x3382;
 t['muchgreater'] = 0x226B;
 t['muchless'] = 0x226A;
 t['mufsquare'] = 0x338C;
 t['mugreek'] = 0x03BC;
 t['mugsquare'] = 0x338D;
 t['muhiragana'] = 0x3080;
 t['mukatakana'] = 0x30E0;
 t['mukatakanahalfwidth'] = 0xFF91;
 t['mulsquare'] = 0x3395;
 t['multiply'] = 0x00D7;
 t['mumsquare'] = 0x339B;
 t['munahhebrew'] = 0x05A3;
 t['munahlefthebrew'] = 0x05A3;
 t['musicalnote'] = 0x266A;
 t['musicalnotedbl'] = 0x266B;
 t['musicflatsign'] = 0x266D;
 t['musicsharpsign'] = 0x266F;
 t['mussquare'] = 0x33B2;
 t['muvsquare'] = 0x33B6;
 t['muwsquare'] = 0x33BC;
 t['mvmegasquare'] = 0x33B9;
 t['mvsquare'] = 0x33B7;
 t['mwmegasquare'] = 0x33BF;
 t['mwsquare'] = 0x33BD;
 t['n'] = 0x006E;
 t['nabengali'] = 0x09A8;
 t['nabla'] = 0x2207;
 t['nacute'] = 0x0144;
 t['nadeva'] = 0x0928;
 t['nagujarati'] = 0x0AA8;
 t['nagurmukhi'] = 0x0A28;
 t['nahiragana'] = 0x306A;
 t['nakatakana'] = 0x30CA;
 t['nakatakanahalfwidth'] = 0xFF85;
 t['napostrophe'] = 0x0149;
 t['nasquare'] = 0x3381;
 t['nbopomofo'] = 0x310B;
 t['nbspace'] = 0x00A0;
 t['ncaron'] = 0x0148;
 t['ncedilla'] = 0x0146;
 t['ncircle'] = 0x24DD;
 t['ncircumflexbelow'] = 0x1E4B;
 t['ncommaaccent'] = 0x0146;
 t['ndotaccent'] = 0x1E45;
 t['ndotbelow'] = 0x1E47;
 t['nehiragana'] = 0x306D;
 t['nekatakana'] = 0x30CD;
 t['nekatakanahalfwidth'] = 0xFF88;
 t['newsheqelsign'] = 0x20AA;
 t['nfsquare'] = 0x338B;
 t['ngabengali'] = 0x0999;
 t['ngadeva'] = 0x0919;
 t['ngagujarati'] = 0x0A99;
 t['ngagurmukhi'] = 0x0A19;
 t['ngonguthai'] = 0x0E07;
 t['nhiragana'] = 0x3093;
 t['nhookleft'] = 0x0272;
 t['nhookretroflex'] = 0x0273;
 t['nieunacirclekorean'] = 0x326F;
 t['nieunaparenkorean'] = 0x320F;
 t['nieuncieuckorean'] = 0x3135;
 t['nieuncirclekorean'] = 0x3261;
 t['nieunhieuhkorean'] = 0x3136;
 t['nieunkorean'] = 0x3134;
 t['nieunpansioskorean'] = 0x3168;
 t['nieunparenkorean'] = 0x3201;
 t['nieunsioskorean'] = 0x3167;
 t['nieuntikeutkorean'] = 0x3166;
 t['nihiragana'] = 0x306B;
 t['nikatakana'] = 0x30CB;
 t['nikatakanahalfwidth'] = 0xFF86;
 t['nikhahitleftthai'] = 0xF899;
 t['nikhahitthai'] = 0x0E4D;
 t['nine'] = 0x0039;
 t['ninearabic'] = 0x0669;
 t['ninebengali'] = 0x09EF;
 t['ninecircle'] = 0x2468;
 t['ninecircleinversesansserif'] = 0x2792;
 t['ninedeva'] = 0x096F;
 t['ninegujarati'] = 0x0AEF;
 t['ninegurmukhi'] = 0x0A6F;
 t['ninehackarabic'] = 0x0669;
 t['ninehangzhou'] = 0x3029;
 t['nineideographicparen'] = 0x3228;
 t['nineinferior'] = 0x2089;
 t['ninemonospace'] = 0xFF19;
 t['nineoldstyle'] = 0xF739;
 t['nineparen'] = 0x247C;
 t['nineperiod'] = 0x2490;
 t['ninepersian'] = 0x06F9;
 t['nineroman'] = 0x2178;
 t['ninesuperior'] = 0x2079;
 t['nineteencircle'] = 0x2472;
 t['nineteenparen'] = 0x2486;
 t['nineteenperiod'] = 0x249A;
 t['ninethai'] = 0x0E59;
 t['nj'] = 0x01CC;
 t['njecyrillic'] = 0x045A;
 t['nkatakana'] = 0x30F3;
 t['nkatakanahalfwidth'] = 0xFF9D;
 t['nlegrightlong'] = 0x019E;
 t['nlinebelow'] = 0x1E49;
 t['nmonospace'] = 0xFF4E;
 t['nmsquare'] = 0x339A;
 t['nnabengali'] = 0x09A3;
 t['nnadeva'] = 0x0923;
 t['nnagujarati'] = 0x0AA3;
 t['nnagurmukhi'] = 0x0A23;
 t['nnnadeva'] = 0x0929;
 t['nohiragana'] = 0x306E;
 t['nokatakana'] = 0x30CE;
 t['nokatakanahalfwidth'] = 0xFF89;
 t['nonbreakingspace'] = 0x00A0;
 t['nonenthai'] = 0x0E13;
 t['nonuthai'] = 0x0E19;
 t['noonarabic'] = 0x0646;
 t['noonfinalarabic'] = 0xFEE6;
 t['noonghunnaarabic'] = 0x06BA;
 t['noonghunnafinalarabic'] = 0xFB9F;
 t['nooninitialarabic'] = 0xFEE7;
 t['noonjeeminitialarabic'] = 0xFCD2;
 t['noonjeemisolatedarabic'] = 0xFC4B;
 t['noonmedialarabic'] = 0xFEE8;
 t['noonmeeminitialarabic'] = 0xFCD5;
 t['noonmeemisolatedarabic'] = 0xFC4E;
 t['noonnoonfinalarabic'] = 0xFC8D;
 t['notcontains'] = 0x220C;
 t['notelement'] = 0x2209;
 t['notelementof'] = 0x2209;
 t['notequal'] = 0x2260;
 t['notgreater'] = 0x226F;
 t['notgreaternorequal'] = 0x2271;
 t['notgreaternorless'] = 0x2279;
 t['notidentical'] = 0x2262;
 t['notless'] = 0x226E;
 t['notlessnorequal'] = 0x2270;
 t['notparallel'] = 0x2226;
 t['notprecedes'] = 0x2280;
 t['notsubset'] = 0x2284;
 t['notsucceeds'] = 0x2281;
 t['notsuperset'] = 0x2285;
 t['nowarmenian'] = 0x0576;
 t['nparen'] = 0x24A9;
 t['nssquare'] = 0x33B1;
 t['nsuperior'] = 0x207F;
 t['ntilde'] = 0x00F1;
 t['nu'] = 0x03BD;
 t['nuhiragana'] = 0x306C;
 t['nukatakana'] = 0x30CC;
 t['nukatakanahalfwidth'] = 0xFF87;
 t['nuktabengali'] = 0x09BC;
 t['nuktadeva'] = 0x093C;
 t['nuktagujarati'] = 0x0ABC;
 t['nuktagurmukhi'] = 0x0A3C;
 t['numbersign'] = 0x0023;
 t['numbersignmonospace'] = 0xFF03;
 t['numbersignsmall'] = 0xFE5F;
 t['numeralsigngreek'] = 0x0374;
 t['numeralsignlowergreek'] = 0x0375;
 t['numero'] = 0x2116;
 t['nun'] = 0x05E0;
 t['nundagesh'] = 0xFB40;
 t['nundageshhebrew'] = 0xFB40;
 t['nunhebrew'] = 0x05E0;
 t['nvsquare'] = 0x33B5;
 t['nwsquare'] = 0x33BB;
 t['nyabengali'] = 0x099E;
 t['nyadeva'] = 0x091E;
 t['nyagujarati'] = 0x0A9E;
 t['nyagurmukhi'] = 0x0A1E;
 t['o'] = 0x006F;
 t['oacute'] = 0x00F3;
 t['oangthai'] = 0x0E2D;
 t['obarred'] = 0x0275;
 t['obarredcyrillic'] = 0x04E9;
 t['obarreddieresiscyrillic'] = 0x04EB;
 t['obengali'] = 0x0993;
 t['obopomofo'] = 0x311B;
 t['obreve'] = 0x014F;
 t['ocandradeva'] = 0x0911;
 t['ocandragujarati'] = 0x0A91;
 t['ocandravowelsigndeva'] = 0x0949;
 t['ocandravowelsigngujarati'] = 0x0AC9;
 t['ocaron'] = 0x01D2;
 t['ocircle'] = 0x24DE;
 t['ocircumflex'] = 0x00F4;
 t['ocircumflexacute'] = 0x1ED1;
 t['ocircumflexdotbelow'] = 0x1ED9;
 t['ocircumflexgrave'] = 0x1ED3;
 t['ocircumflexhookabove'] = 0x1ED5;
 t['ocircumflextilde'] = 0x1ED7;
 t['ocyrillic'] = 0x043E;
 t['odblacute'] = 0x0151;
 t['odblgrave'] = 0x020D;
 t['odeva'] = 0x0913;
 t['odieresis'] = 0x00F6;
 t['odieresiscyrillic'] = 0x04E7;
 t['odotbelow'] = 0x1ECD;
 t['oe'] = 0x0153;
 t['oekorean'] = 0x315A;
 t['ogonek'] = 0x02DB;
 t['ogonekcmb'] = 0x0328;
 t['ograve'] = 0x00F2;
 t['ogujarati'] = 0x0A93;
 t['oharmenian'] = 0x0585;
 t['ohiragana'] = 0x304A;
 t['ohookabove'] = 0x1ECF;
 t['ohorn'] = 0x01A1;
 t['ohornacute'] = 0x1EDB;
 t['ohorndotbelow'] = 0x1EE3;
 t['ohorngrave'] = 0x1EDD;
 t['ohornhookabove'] = 0x1EDF;
 t['ohorntilde'] = 0x1EE1;
 t['ohungarumlaut'] = 0x0151;
 t['oi'] = 0x01A3;
 t['oinvertedbreve'] = 0x020F;
 t['okatakana'] = 0x30AA;
 t['okatakanahalfwidth'] = 0xFF75;
 t['okorean'] = 0x3157;
 t['olehebrew'] = 0x05AB;
 t['omacron'] = 0x014D;
 t['omacronacute'] = 0x1E53;
 t['omacrongrave'] = 0x1E51;
 t['omdeva'] = 0x0950;
 t['omega'] = 0x03C9;
 t['omega1'] = 0x03D6;
 t['omegacyrillic'] = 0x0461;
 t['omegalatinclosed'] = 0x0277;
 t['omegaroundcyrillic'] = 0x047B;
 t['omegatitlocyrillic'] = 0x047D;
 t['omegatonos'] = 0x03CE;
 t['omgujarati'] = 0x0AD0;
 t['omicron'] = 0x03BF;
 t['omicrontonos'] = 0x03CC;
 t['omonospace'] = 0xFF4F;
 t['one'] = 0x0031;
 t['onearabic'] = 0x0661;
 t['onebengali'] = 0x09E7;
 t['onecircle'] = 0x2460;
 t['onecircleinversesansserif'] = 0x278A;
 t['onedeva'] = 0x0967;
 t['onedotenleader'] = 0x2024;
 t['oneeighth'] = 0x215B;
 t['onefitted'] = 0xF6DC;
 t['onegujarati'] = 0x0AE7;
 t['onegurmukhi'] = 0x0A67;
 t['onehackarabic'] = 0x0661;
 t['onehalf'] = 0x00BD;
 t['onehangzhou'] = 0x3021;
 t['oneideographicparen'] = 0x3220;
 t['oneinferior'] = 0x2081;
 t['onemonospace'] = 0xFF11;
 t['onenumeratorbengali'] = 0x09F4;
 t['oneoldstyle'] = 0xF731;
 t['oneparen'] = 0x2474;
 t['oneperiod'] = 0x2488;
 t['onepersian'] = 0x06F1;
 t['onequarter'] = 0x00BC;
 t['oneroman'] = 0x2170;
 t['onesuperior'] = 0x00B9;
 t['onethai'] = 0x0E51;
 t['onethird'] = 0x2153;
 t['oogonek'] = 0x01EB;
 t['oogonekmacron'] = 0x01ED;
 t['oogurmukhi'] = 0x0A13;
 t['oomatragurmukhi'] = 0x0A4B;
 t['oopen'] = 0x0254;
 t['oparen'] = 0x24AA;
 t['openbullet'] = 0x25E6;
 t['option'] = 0x2325;
 t['ordfeminine'] = 0x00AA;
 t['ordmasculine'] = 0x00BA;
 t['orthogonal'] = 0x221F;
 t['oshortdeva'] = 0x0912;
 t['oshortvowelsigndeva'] = 0x094A;
 t['oslash'] = 0x00F8;
 t['oslashacute'] = 0x01FF;
 t['osmallhiragana'] = 0x3049;
 t['osmallkatakana'] = 0x30A9;
 t['osmallkatakanahalfwidth'] = 0xFF6B;
 t['ostrokeacute'] = 0x01FF;
 t['osuperior'] = 0xF6F0;
 t['otcyrillic'] = 0x047F;
 t['otilde'] = 0x00F5;
 t['otildeacute'] = 0x1E4D;
 t['otildedieresis'] = 0x1E4F;
 t['oubopomofo'] = 0x3121;
 t['overline'] = 0x203E;
 t['overlinecenterline'] = 0xFE4A;
 t['overlinecmb'] = 0x0305;
 t['overlinedashed'] = 0xFE49;
 t['overlinedblwavy'] = 0xFE4C;
 t['overlinewavy'] = 0xFE4B;
 t['overscore'] = 0x00AF;
 t['ovowelsignbengali'] = 0x09CB;
 t['ovowelsigndeva'] = 0x094B;
 t['ovowelsigngujarati'] = 0x0ACB;
 t['p'] = 0x0070;
 t['paampssquare'] = 0x3380;
 t['paasentosquare'] = 0x332B;
 t['pabengali'] = 0x09AA;
 t['pacute'] = 0x1E55;
 t['padeva'] = 0x092A;
 t['pagedown'] = 0x21DF;
 t['pageup'] = 0x21DE;
 t['pagujarati'] = 0x0AAA;
 t['pagurmukhi'] = 0x0A2A;
 t['pahiragana'] = 0x3071;
 t['paiyannoithai'] = 0x0E2F;
 t['pakatakana'] = 0x30D1;
 t['palatalizationcyrilliccmb'] = 0x0484;
 t['palochkacyrillic'] = 0x04C0;
 t['pansioskorean'] = 0x317F;
 t['paragraph'] = 0x00B6;
 t['parallel'] = 0x2225;
 t['parenleft'] = 0x0028;
 t['parenleftaltonearabic'] = 0xFD3E;
 t['parenleftbt'] = 0xF8ED;
 t['parenleftex'] = 0xF8EC;
 t['parenleftinferior'] = 0x208D;
 t['parenleftmonospace'] = 0xFF08;
 t['parenleftsmall'] = 0xFE59;
 t['parenleftsuperior'] = 0x207D;
 t['parenlefttp'] = 0xF8EB;
 t['parenleftvertical'] = 0xFE35;
 t['parenright'] = 0x0029;
 t['parenrightaltonearabic'] = 0xFD3F;
 t['parenrightbt'] = 0xF8F8;
 t['parenrightex'] = 0xF8F7;
 t['parenrightinferior'] = 0x208E;
 t['parenrightmonospace'] = 0xFF09;
 t['parenrightsmall'] = 0xFE5A;
 t['parenrightsuperior'] = 0x207E;
 t['parenrighttp'] = 0xF8F6;
 t['parenrightvertical'] = 0xFE36;
 t['partialdiff'] = 0x2202;
 t['paseqhebrew'] = 0x05C0;
 t['pashtahebrew'] = 0x0599;
 t['pasquare'] = 0x33A9;
 t['patah'] = 0x05B7;
 t['patah11'] = 0x05B7;
 t['patah1d'] = 0x05B7;
 t['patah2a'] = 0x05B7;
 t['patahhebrew'] = 0x05B7;
 t['patahnarrowhebrew'] = 0x05B7;
 t['patahquarterhebrew'] = 0x05B7;
 t['patahwidehebrew'] = 0x05B7;
 t['pazerhebrew'] = 0x05A1;
 t['pbopomofo'] = 0x3106;
 t['pcircle'] = 0x24DF;
 t['pdotaccent'] = 0x1E57;
 t['pe'] = 0x05E4;
 t['pecyrillic'] = 0x043F;
 t['pedagesh'] = 0xFB44;
 t['pedageshhebrew'] = 0xFB44;
 t['peezisquare'] = 0x333B;
 t['pefinaldageshhebrew'] = 0xFB43;
 t['peharabic'] = 0x067E;
 t['peharmenian'] = 0x057A;
 t['pehebrew'] = 0x05E4;
 t['pehfinalarabic'] = 0xFB57;
 t['pehinitialarabic'] = 0xFB58;
 t['pehiragana'] = 0x307A;
 t['pehmedialarabic'] = 0xFB59;
 t['pekatakana'] = 0x30DA;
 t['pemiddlehookcyrillic'] = 0x04A7;
 t['perafehebrew'] = 0xFB4E;
 t['percent'] = 0x0025;
 t['percentarabic'] = 0x066A;
 t['percentmonospace'] = 0xFF05;
 t['percentsmall'] = 0xFE6A;
 t['period'] = 0x002E;
 t['periodarmenian'] = 0x0589;
 t['periodcentered'] = 0x00B7;
 t['periodhalfwidth'] = 0xFF61;
 t['periodinferior'] = 0xF6E7;
 t['periodmonospace'] = 0xFF0E;
 t['periodsmall'] = 0xFE52;
 t['periodsuperior'] = 0xF6E8;
 t['perispomenigreekcmb'] = 0x0342;
 t['perpendicular'] = 0x22A5;
 t['perthousand'] = 0x2030;
 t['peseta'] = 0x20A7;
 t['pfsquare'] = 0x338A;
 t['phabengali'] = 0x09AB;
 t['phadeva'] = 0x092B;
 t['phagujarati'] = 0x0AAB;
 t['phagurmukhi'] = 0x0A2B;
 t['phi'] = 0x03C6;
 t['phi1'] = 0x03D5;
 t['phieuphacirclekorean'] = 0x327A;
 t['phieuphaparenkorean'] = 0x321A;
 t['phieuphcirclekorean'] = 0x326C;
 t['phieuphkorean'] = 0x314D;
 t['phieuphparenkorean'] = 0x320C;
 t['philatin'] = 0x0278;
 t['phinthuthai'] = 0x0E3A;
 t['phisymbolgreek'] = 0x03D5;
 t['phook'] = 0x01A5;
 t['phophanthai'] = 0x0E1E;
 t['phophungthai'] = 0x0E1C;
 t['phosamphaothai'] = 0x0E20;
 t['pi'] = 0x03C0;
 t['pieupacirclekorean'] = 0x3273;
 t['pieupaparenkorean'] = 0x3213;
 t['pieupcieuckorean'] = 0x3176;
 t['pieupcirclekorean'] = 0x3265;
 t['pieupkiyeokkorean'] = 0x3172;
 t['pieupkorean'] = 0x3142;
 t['pieupparenkorean'] = 0x3205;
 t['pieupsioskiyeokkorean'] = 0x3174;
 t['pieupsioskorean'] = 0x3144;
 t['pieupsiostikeutkorean'] = 0x3175;
 t['pieupthieuthkorean'] = 0x3177;
 t['pieuptikeutkorean'] = 0x3173;
 t['pihiragana'] = 0x3074;
 t['pikatakana'] = 0x30D4;
 t['pisymbolgreek'] = 0x03D6;
 t['piwrarmenian'] = 0x0583;
 t['plus'] = 0x002B;
 t['plusbelowcmb'] = 0x031F;
 t['pluscircle'] = 0x2295;
 t['plusminus'] = 0x00B1;
 t['plusmod'] = 0x02D6;
 t['plusmonospace'] = 0xFF0B;
 t['plussmall'] = 0xFE62;
 t['plussuperior'] = 0x207A;
 t['pmonospace'] = 0xFF50;
 t['pmsquare'] = 0x33D8;
 t['pohiragana'] = 0x307D;
 t['pointingindexdownwhite'] = 0x261F;
 t['pointingindexleftwhite'] = 0x261C;
 t['pointingindexrightwhite'] = 0x261E;
 t['pointingindexupwhite'] = 0x261D;
 t['pokatakana'] = 0x30DD;
 t['poplathai'] = 0x0E1B;
 t['postalmark'] = 0x3012;
 t['postalmarkface'] = 0x3020;
 t['pparen'] = 0x24AB;
 t['precedes'] = 0x227A;
 t['prescription'] = 0x211E;
 t['primemod'] = 0x02B9;
 t['primereversed'] = 0x2035;
 t['product'] = 0x220F;
 t['projective'] = 0x2305;
 t['prolongedkana'] = 0x30FC;
 t['propellor'] = 0x2318;
 t['propersubset'] = 0x2282;
 t['propersuperset'] = 0x2283;
 t['proportion'] = 0x2237;
 t['proportional'] = 0x221D;
 t['psi'] = 0x03C8;
 t['psicyrillic'] = 0x0471;
 t['psilipneumatacyrilliccmb'] = 0x0486;
 t['pssquare'] = 0x33B0;
 t['puhiragana'] = 0x3077;
 t['pukatakana'] = 0x30D7;
 t['pvsquare'] = 0x33B4;
 t['pwsquare'] = 0x33BA;
 t['q'] = 0x0071;
 t['qadeva'] = 0x0958;
 t['qadmahebrew'] = 0x05A8;
 t['qafarabic'] = 0x0642;
 t['qaffinalarabic'] = 0xFED6;
 t['qafinitialarabic'] = 0xFED7;
 t['qafmedialarabic'] = 0xFED8;
 t['qamats'] = 0x05B8;
 t['qamats10'] = 0x05B8;
 t['qamats1a'] = 0x05B8;
 t['qamats1c'] = 0x05B8;
 t['qamats27'] = 0x05B8;
 t['qamats29'] = 0x05B8;
 t['qamats33'] = 0x05B8;
 t['qamatsde'] = 0x05B8;
 t['qamatshebrew'] = 0x05B8;
 t['qamatsnarrowhebrew'] = 0x05B8;
 t['qamatsqatanhebrew'] = 0x05B8;
 t['qamatsqatannarrowhebrew'] = 0x05B8;
 t['qamatsqatanquarterhebrew'] = 0x05B8;
 t['qamatsqatanwidehebrew'] = 0x05B8;
 t['qamatsquarterhebrew'] = 0x05B8;
 t['qamatswidehebrew'] = 0x05B8;
 t['qarneyparahebrew'] = 0x059F;
 t['qbopomofo'] = 0x3111;
 t['qcircle'] = 0x24E0;
 t['qhook'] = 0x02A0;
 t['qmonospace'] = 0xFF51;
 t['qof'] = 0x05E7;
 t['qofdagesh'] = 0xFB47;
 t['qofdageshhebrew'] = 0xFB47;
 t['qofhebrew'] = 0x05E7;
 t['qparen'] = 0x24AC;
 t['quarternote'] = 0x2669;
 t['qubuts'] = 0x05BB;
 t['qubuts18'] = 0x05BB;
 t['qubuts25'] = 0x05BB;
 t['qubuts31'] = 0x05BB;
 t['qubutshebrew'] = 0x05BB;
 t['qubutsnarrowhebrew'] = 0x05BB;
 t['qubutsquarterhebrew'] = 0x05BB;
 t['qubutswidehebrew'] = 0x05BB;
 t['question'] = 0x003F;
 t['questionarabic'] = 0x061F;
 t['questionarmenian'] = 0x055E;
 t['questiondown'] = 0x00BF;
 t['questiondownsmall'] = 0xF7BF;
 t['questiongreek'] = 0x037E;
 t['questionmonospace'] = 0xFF1F;
 t['questionsmall'] = 0xF73F;
 t['quotedbl'] = 0x0022;
 t['quotedblbase'] = 0x201E;
 t['quotedblleft'] = 0x201C;
 t['quotedblmonospace'] = 0xFF02;
 t['quotedblprime'] = 0x301E;
 t['quotedblprimereversed'] = 0x301D;
 t['quotedblright'] = 0x201D;
 t['quoteleft'] = 0x2018;
 t['quoteleftreversed'] = 0x201B;
 t['quotereversed'] = 0x201B;
 t['quoteright'] = 0x2019;
 t['quoterightn'] = 0x0149;
 t['quotesinglbase'] = 0x201A;
 t['quotesingle'] = 0x0027;
 t['quotesinglemonospace'] = 0xFF07;
 t['r'] = 0x0072;
 t['raarmenian'] = 0x057C;
 t['rabengali'] = 0x09B0;
 t['racute'] = 0x0155;
 t['radeva'] = 0x0930;
 t['radical'] = 0x221A;
 t['radicalex'] = 0xF8E5;
 t['radoverssquare'] = 0x33AE;
 t['radoverssquaredsquare'] = 0x33AF;
 t['radsquare'] = 0x33AD;
 t['rafe'] = 0x05BF;
 t['rafehebrew'] = 0x05BF;
 t['ragujarati'] = 0x0AB0;
 t['ragurmukhi'] = 0x0A30;
 t['rahiragana'] = 0x3089;
 t['rakatakana'] = 0x30E9;
 t['rakatakanahalfwidth'] = 0xFF97;
 t['ralowerdiagonalbengali'] = 0x09F1;
 t['ramiddlediagonalbengali'] = 0x09F0;
 t['ramshorn'] = 0x0264;
 t['ratio'] = 0x2236;
 t['rbopomofo'] = 0x3116;
 t['rcaron'] = 0x0159;
 t['rcedilla'] = 0x0157;
 t['rcircle'] = 0x24E1;
 t['rcommaaccent'] = 0x0157;
 t['rdblgrave'] = 0x0211;
 t['rdotaccent'] = 0x1E59;
 t['rdotbelow'] = 0x1E5B;
 t['rdotbelowmacron'] = 0x1E5D;
 t['referencemark'] = 0x203B;
 t['reflexsubset'] = 0x2286;
 t['reflexsuperset'] = 0x2287;
 t['registered'] = 0x00AE;
 t['registersans'] = 0xF8E8;
 t['registerserif'] = 0xF6DA;
 t['reharabic'] = 0x0631;
 t['reharmenian'] = 0x0580;
 t['rehfinalarabic'] = 0xFEAE;
 t['rehiragana'] = 0x308C;
 t['rekatakana'] = 0x30EC;
 t['rekatakanahalfwidth'] = 0xFF9A;
 t['resh'] = 0x05E8;
 t['reshdageshhebrew'] = 0xFB48;
 t['reshhebrew'] = 0x05E8;
 t['reversedtilde'] = 0x223D;
 t['reviahebrew'] = 0x0597;
 t['reviamugrashhebrew'] = 0x0597;
 t['revlogicalnot'] = 0x2310;
 t['rfishhook'] = 0x027E;
 t['rfishhookreversed'] = 0x027F;
 t['rhabengali'] = 0x09DD;
 t['rhadeva'] = 0x095D;
 t['rho'] = 0x03C1;
 t['rhook'] = 0x027D;
 t['rhookturned'] = 0x027B;
 t['rhookturnedsuperior'] = 0x02B5;
 t['rhosymbolgreek'] = 0x03F1;
 t['rhotichookmod'] = 0x02DE;
 t['rieulacirclekorean'] = 0x3271;
 t['rieulaparenkorean'] = 0x3211;
 t['rieulcirclekorean'] = 0x3263;
 t['rieulhieuhkorean'] = 0x3140;
 t['rieulkiyeokkorean'] = 0x313A;
 t['rieulkiyeoksioskorean'] = 0x3169;
 t['rieulkorean'] = 0x3139;
 t['rieulmieumkorean'] = 0x313B;
 t['rieulpansioskorean'] = 0x316C;
 t['rieulparenkorean'] = 0x3203;
 t['rieulphieuphkorean'] = 0x313F;
 t['rieulpieupkorean'] = 0x313C;
 t['rieulpieupsioskorean'] = 0x316B;
 t['rieulsioskorean'] = 0x313D;
 t['rieulthieuthkorean'] = 0x313E;
 t['rieultikeutkorean'] = 0x316A;
 t['rieulyeorinhieuhkorean'] = 0x316D;
 t['rightangle'] = 0x221F;
 t['righttackbelowcmb'] = 0x0319;
 t['righttriangle'] = 0x22BF;
 t['rihiragana'] = 0x308A;
 t['rikatakana'] = 0x30EA;
 t['rikatakanahalfwidth'] = 0xFF98;
 t['ring'] = 0x02DA;
 t['ringbelowcmb'] = 0x0325;
 t['ringcmb'] = 0x030A;
 t['ringhalfleft'] = 0x02BF;
 t['ringhalfleftarmenian'] = 0x0559;
 t['ringhalfleftbelowcmb'] = 0x031C;
 t['ringhalfleftcentered'] = 0x02D3;
 t['ringhalfright'] = 0x02BE;
 t['ringhalfrightbelowcmb'] = 0x0339;
 t['ringhalfrightcentered'] = 0x02D2;
 t['rinvertedbreve'] = 0x0213;
 t['rittorusquare'] = 0x3351;
 t['rlinebelow'] = 0x1E5F;
 t['rlongleg'] = 0x027C;
 t['rlonglegturned'] = 0x027A;
 t['rmonospace'] = 0xFF52;
 t['rohiragana'] = 0x308D;
 t['rokatakana'] = 0x30ED;
 t['rokatakanahalfwidth'] = 0xFF9B;
 t['roruathai'] = 0x0E23;
 t['rparen'] = 0x24AD;
 t['rrabengali'] = 0x09DC;
 t['rradeva'] = 0x0931;
 t['rragurmukhi'] = 0x0A5C;
 t['rreharabic'] = 0x0691;
 t['rrehfinalarabic'] = 0xFB8D;
 t['rrvocalicbengali'] = 0x09E0;
 t['rrvocalicdeva'] = 0x0960;
 t['rrvocalicgujarati'] = 0x0AE0;
 t['rrvocalicvowelsignbengali'] = 0x09C4;
 t['rrvocalicvowelsigndeva'] = 0x0944;
 t['rrvocalicvowelsigngujarati'] = 0x0AC4;
 t['rsuperior'] = 0xF6F1;
 t['rtblock'] = 0x2590;
 t['rturned'] = 0x0279;
 t['rturnedsuperior'] = 0x02B4;
 t['ruhiragana'] = 0x308B;
 t['rukatakana'] = 0x30EB;
 t['rukatakanahalfwidth'] = 0xFF99;
 t['rupeemarkbengali'] = 0x09F2;
 t['rupeesignbengali'] = 0x09F3;
 t['rupiah'] = 0xF6DD;
 t['ruthai'] = 0x0E24;
 t['rvocalicbengali'] = 0x098B;
 t['rvocalicdeva'] = 0x090B;
 t['rvocalicgujarati'] = 0x0A8B;
 t['rvocalicvowelsignbengali'] = 0x09C3;
 t['rvocalicvowelsigndeva'] = 0x0943;
 t['rvocalicvowelsigngujarati'] = 0x0AC3;
 t['s'] = 0x0073;
 t['sabengali'] = 0x09B8;
 t['sacute'] = 0x015B;
 t['sacutedotaccent'] = 0x1E65;
 t['sadarabic'] = 0x0635;
 t['sadeva'] = 0x0938;
 t['sadfinalarabic'] = 0xFEBA;
 t['sadinitialarabic'] = 0xFEBB;
 t['sadmedialarabic'] = 0xFEBC;
 t['sagujarati'] = 0x0AB8;
 t['sagurmukhi'] = 0x0A38;
 t['sahiragana'] = 0x3055;
 t['sakatakana'] = 0x30B5;
 t['sakatakanahalfwidth'] = 0xFF7B;
 t['sallallahoualayhewasallamarabic'] = 0xFDFA;
 t['samekh'] = 0x05E1;
 t['samekhdagesh'] = 0xFB41;
 t['samekhdageshhebrew'] = 0xFB41;
 t['samekhhebrew'] = 0x05E1;
 t['saraaathai'] = 0x0E32;
 t['saraaethai'] = 0x0E41;
 t['saraaimaimalaithai'] = 0x0E44;
 t['saraaimaimuanthai'] = 0x0E43;
 t['saraamthai'] = 0x0E33;
 t['saraathai'] = 0x0E30;
 t['saraethai'] = 0x0E40;
 t['saraiileftthai'] = 0xF886;
 t['saraiithai'] = 0x0E35;
 t['saraileftthai'] = 0xF885;
 t['saraithai'] = 0x0E34;
 t['saraothai'] = 0x0E42;
 t['saraueeleftthai'] = 0xF888;
 t['saraueethai'] = 0x0E37;
 t['saraueleftthai'] = 0xF887;
 t['sarauethai'] = 0x0E36;
 t['sarauthai'] = 0x0E38;
 t['sarauuthai'] = 0x0E39;
 t['sbopomofo'] = 0x3119;
 t['scaron'] = 0x0161;
 t['scarondotaccent'] = 0x1E67;
 t['scedilla'] = 0x015F;
 t['schwa'] = 0x0259;
 t['schwacyrillic'] = 0x04D9;
 t['schwadieresiscyrillic'] = 0x04DB;
 t['schwahook'] = 0x025A;
 t['scircle'] = 0x24E2;
 t['scircumflex'] = 0x015D;
 t['scommaaccent'] = 0x0219;
 t['sdotaccent'] = 0x1E61;
 t['sdotbelow'] = 0x1E63;
 t['sdotbelowdotaccent'] = 0x1E69;
 t['seagullbelowcmb'] = 0x033C;
 t['second'] = 0x2033;
 t['secondtonechinese'] = 0x02CA;
 t['section'] = 0x00A7;
 t['seenarabic'] = 0x0633;
 t['seenfinalarabic'] = 0xFEB2;
 t['seeninitialarabic'] = 0xFEB3;
 t['seenmedialarabic'] = 0xFEB4;
 t['segol'] = 0x05B6;
 t['segol13'] = 0x05B6;
 t['segol1f'] = 0x05B6;
 t['segol2c'] = 0x05B6;
 t['segolhebrew'] = 0x05B6;
 t['segolnarrowhebrew'] = 0x05B6;
 t['segolquarterhebrew'] = 0x05B6;
 t['segoltahebrew'] = 0x0592;
 t['segolwidehebrew'] = 0x05B6;
 t['seharmenian'] = 0x057D;
 t['sehiragana'] = 0x305B;
 t['sekatakana'] = 0x30BB;
 t['sekatakanahalfwidth'] = 0xFF7E;
 t['semicolon'] = 0x003B;
 t['semicolonarabic'] = 0x061B;
 t['semicolonmonospace'] = 0xFF1B;
 t['semicolonsmall'] = 0xFE54;
 t['semivoicedmarkkana'] = 0x309C;
 t['semivoicedmarkkanahalfwidth'] = 0xFF9F;
 t['sentisquare'] = 0x3322;
 t['sentosquare'] = 0x3323;
 t['seven'] = 0x0037;
 t['sevenarabic'] = 0x0667;
 t['sevenbengali'] = 0x09ED;
 t['sevencircle'] = 0x2466;
 t['sevencircleinversesansserif'] = 0x2790;
 t['sevendeva'] = 0x096D;
 t['seveneighths'] = 0x215E;
 t['sevengujarati'] = 0x0AED;
 t['sevengurmukhi'] = 0x0A6D;
 t['sevenhackarabic'] = 0x0667;
 t['sevenhangzhou'] = 0x3027;
 t['sevenideographicparen'] = 0x3226;
 t['seveninferior'] = 0x2087;
 t['sevenmonospace'] = 0xFF17;
 t['sevenoldstyle'] = 0xF737;
 t['sevenparen'] = 0x247A;
 t['sevenperiod'] = 0x248E;
 t['sevenpersian'] = 0x06F7;
 t['sevenroman'] = 0x2176;
 t['sevensuperior'] = 0x2077;
 t['seventeencircle'] = 0x2470;
 t['seventeenparen'] = 0x2484;
 t['seventeenperiod'] = 0x2498;
 t['seventhai'] = 0x0E57;
 t['sfthyphen'] = 0x00AD;
 t['shaarmenian'] = 0x0577;
 t['shabengali'] = 0x09B6;
 t['shacyrillic'] = 0x0448;
 t['shaddaarabic'] = 0x0651;
 t['shaddadammaarabic'] = 0xFC61;
 t['shaddadammatanarabic'] = 0xFC5E;
 t['shaddafathaarabic'] = 0xFC60;
 t['shaddakasraarabic'] = 0xFC62;
 t['shaddakasratanarabic'] = 0xFC5F;
 t['shade'] = 0x2592;
 t['shadedark'] = 0x2593;
 t['shadelight'] = 0x2591;
 t['shademedium'] = 0x2592;
 t['shadeva'] = 0x0936;
 t['shagujarati'] = 0x0AB6;
 t['shagurmukhi'] = 0x0A36;
 t['shalshelethebrew'] = 0x0593;
 t['shbopomofo'] = 0x3115;
 t['shchacyrillic'] = 0x0449;
 t['sheenarabic'] = 0x0634;
 t['sheenfinalarabic'] = 0xFEB6;
 t['sheeninitialarabic'] = 0xFEB7;
 t['sheenmedialarabic'] = 0xFEB8;
 t['sheicoptic'] = 0x03E3;
 t['sheqel'] = 0x20AA;
 t['sheqelhebrew'] = 0x20AA;
 t['sheva'] = 0x05B0;
 t['sheva115'] = 0x05B0;
 t['sheva15'] = 0x05B0;
 t['sheva22'] = 0x05B0;
 t['sheva2e'] = 0x05B0;
 t['shevahebrew'] = 0x05B0;
 t['shevanarrowhebrew'] = 0x05B0;
 t['shevaquarterhebrew'] = 0x05B0;
 t['shevawidehebrew'] = 0x05B0;
 t['shhacyrillic'] = 0x04BB;
 t['shimacoptic'] = 0x03ED;
 t['shin'] = 0x05E9;
 t['shindagesh'] = 0xFB49;
 t['shindageshhebrew'] = 0xFB49;
 t['shindageshshindot'] = 0xFB2C;
 t['shindageshshindothebrew'] = 0xFB2C;
 t['shindageshsindot'] = 0xFB2D;
 t['shindageshsindothebrew'] = 0xFB2D;
 t['shindothebrew'] = 0x05C1;
 t['shinhebrew'] = 0x05E9;
 t['shinshindot'] = 0xFB2A;
 t['shinshindothebrew'] = 0xFB2A;
 t['shinsindot'] = 0xFB2B;
 t['shinsindothebrew'] = 0xFB2B;
 t['shook'] = 0x0282;
 t['sigma'] = 0x03C3;
 t['sigma1'] = 0x03C2;
 t['sigmafinal'] = 0x03C2;
 t['sigmalunatesymbolgreek'] = 0x03F2;
 t['sihiragana'] = 0x3057;
 t['sikatakana'] = 0x30B7;
 t['sikatakanahalfwidth'] = 0xFF7C;
 t['siluqhebrew'] = 0x05BD;
 t['siluqlefthebrew'] = 0x05BD;
 t['similar'] = 0x223C;
 t['sindothebrew'] = 0x05C2;
 t['siosacirclekorean'] = 0x3274;
 t['siosaparenkorean'] = 0x3214;
 t['sioscieuckorean'] = 0x317E;
 t['sioscirclekorean'] = 0x3266;
 t['sioskiyeokkorean'] = 0x317A;
 t['sioskorean'] = 0x3145;
 t['siosnieunkorean'] = 0x317B;
 t['siosparenkorean'] = 0x3206;
 t['siospieupkorean'] = 0x317D;
 t['siostikeutkorean'] = 0x317C;
 t['six'] = 0x0036;
 t['sixarabic'] = 0x0666;
 t['sixbengali'] = 0x09EC;
 t['sixcircle'] = 0x2465;
 t['sixcircleinversesansserif'] = 0x278F;
 t['sixdeva'] = 0x096C;
 t['sixgujarati'] = 0x0AEC;
 t['sixgurmukhi'] = 0x0A6C;
 t['sixhackarabic'] = 0x0666;
 t['sixhangzhou'] = 0x3026;
 t['sixideographicparen'] = 0x3225;
 t['sixinferior'] = 0x2086;
 t['sixmonospace'] = 0xFF16;
 t['sixoldstyle'] = 0xF736;
 t['sixparen'] = 0x2479;
 t['sixperiod'] = 0x248D;
 t['sixpersian'] = 0x06F6;
 t['sixroman'] = 0x2175;
 t['sixsuperior'] = 0x2076;
 t['sixteencircle'] = 0x246F;
 t['sixteencurrencydenominatorbengali'] = 0x09F9;
 t['sixteenparen'] = 0x2483;
 t['sixteenperiod'] = 0x2497;
 t['sixthai'] = 0x0E56;
 t['slash'] = 0x002F;
 t['slashmonospace'] = 0xFF0F;
 t['slong'] = 0x017F;
 t['slongdotaccent'] = 0x1E9B;
 t['smileface'] = 0x263A;
 t['smonospace'] = 0xFF53;
 t['sofpasuqhebrew'] = 0x05C3;
 t['softhyphen'] = 0x00AD;
 t['softsigncyrillic'] = 0x044C;
 t['sohiragana'] = 0x305D;
 t['sokatakana'] = 0x30BD;
 t['sokatakanahalfwidth'] = 0xFF7F;
 t['soliduslongoverlaycmb'] = 0x0338;
 t['solidusshortoverlaycmb'] = 0x0337;
 t['sorusithai'] = 0x0E29;
 t['sosalathai'] = 0x0E28;
 t['sosothai'] = 0x0E0B;
 t['sosuathai'] = 0x0E2A;
 t['space'] = 0x0020;
 t['spacehackarabic'] = 0x0020;
 t['spade'] = 0x2660;
 t['spadesuitblack'] = 0x2660;
 t['spadesuitwhite'] = 0x2664;
 t['sparen'] = 0x24AE;
 t['squarebelowcmb'] = 0x033B;
 t['squarecc'] = 0x33C4;
 t['squarecm'] = 0x339D;
 t['squarediagonalcrosshatchfill'] = 0x25A9;
 t['squarehorizontalfill'] = 0x25A4;
 t['squarekg'] = 0x338F;
 t['squarekm'] = 0x339E;
 t['squarekmcapital'] = 0x33CE;
 t['squareln'] = 0x33D1;
 t['squarelog'] = 0x33D2;
 t['squaremg'] = 0x338E;
 t['squaremil'] = 0x33D5;
 t['squaremm'] = 0x339C;
 t['squaremsquared'] = 0x33A1;
 t['squareorthogonalcrosshatchfill'] = 0x25A6;
 t['squareupperlefttolowerrightfill'] = 0x25A7;
 t['squareupperrighttolowerleftfill'] = 0x25A8;
 t['squareverticalfill'] = 0x25A5;
 t['squarewhitewithsmallblack'] = 0x25A3;
 t['srsquare'] = 0x33DB;
 t['ssabengali'] = 0x09B7;
 t['ssadeva'] = 0x0937;
 t['ssagujarati'] = 0x0AB7;
 t['ssangcieuckorean'] = 0x3149;
 t['ssanghieuhkorean'] = 0x3185;
 t['ssangieungkorean'] = 0x3180;
 t['ssangkiyeokkorean'] = 0x3132;
 t['ssangnieunkorean'] = 0x3165;
 t['ssangpieupkorean'] = 0x3143;
 t['ssangsioskorean'] = 0x3146;
 t['ssangtikeutkorean'] = 0x3138;
 t['ssuperior'] = 0xF6F2;
 t['sterling'] = 0x00A3;
 t['sterlingmonospace'] = 0xFFE1;
 t['strokelongoverlaycmb'] = 0x0336;
 t['strokeshortoverlaycmb'] = 0x0335;
 t['subset'] = 0x2282;
 t['subsetnotequal'] = 0x228A;
 t['subsetorequal'] = 0x2286;
 t['succeeds'] = 0x227B;
 t['suchthat'] = 0x220B;
 t['suhiragana'] = 0x3059;
 t['sukatakana'] = 0x30B9;
 t['sukatakanahalfwidth'] = 0xFF7D;
 t['sukunarabic'] = 0x0652;
 t['summation'] = 0x2211;
 t['sun'] = 0x263C;
 t['superset'] = 0x2283;
 t['supersetnotequal'] = 0x228B;
 t['supersetorequal'] = 0x2287;
 t['svsquare'] = 0x33DC;
 t['syouwaerasquare'] = 0x337C;
 t['t'] = 0x0074;
 t['tabengali'] = 0x09A4;
 t['tackdown'] = 0x22A4;
 t['tackleft'] = 0x22A3;
 t['tadeva'] = 0x0924;
 t['tagujarati'] = 0x0AA4;
 t['tagurmukhi'] = 0x0A24;
 t['taharabic'] = 0x0637;
 t['tahfinalarabic'] = 0xFEC2;
 t['tahinitialarabic'] = 0xFEC3;
 t['tahiragana'] = 0x305F;
 t['tahmedialarabic'] = 0xFEC4;
 t['taisyouerasquare'] = 0x337D;
 t['takatakana'] = 0x30BF;
 t['takatakanahalfwidth'] = 0xFF80;
 t['tatweelarabic'] = 0x0640;
 t['tau'] = 0x03C4;
 t['tav'] = 0x05EA;
 t['tavdages'] = 0xFB4A;
 t['tavdagesh'] = 0xFB4A;
 t['tavdageshhebrew'] = 0xFB4A;
 t['tavhebrew'] = 0x05EA;
 t['tbar'] = 0x0167;
 t['tbopomofo'] = 0x310A;
 t['tcaron'] = 0x0165;
 t['tccurl'] = 0x02A8;
 t['tcedilla'] = 0x0163;
 t['tcheharabic'] = 0x0686;
 t['tchehfinalarabic'] = 0xFB7B;
 t['tchehinitialarabic'] = 0xFB7C;
 t['tchehmedialarabic'] = 0xFB7D;
 t['tcircle'] = 0x24E3;
 t['tcircumflexbelow'] = 0x1E71;
 t['tcommaaccent'] = 0x0163;
 t['tdieresis'] = 0x1E97;
 t['tdotaccent'] = 0x1E6B;
 t['tdotbelow'] = 0x1E6D;
 t['tecyrillic'] = 0x0442;
 t['tedescendercyrillic'] = 0x04AD;
 t['teharabic'] = 0x062A;
 t['tehfinalarabic'] = 0xFE96;
 t['tehhahinitialarabic'] = 0xFCA2;
 t['tehhahisolatedarabic'] = 0xFC0C;
 t['tehinitialarabic'] = 0xFE97;
 t['tehiragana'] = 0x3066;
 t['tehjeeminitialarabic'] = 0xFCA1;
 t['tehjeemisolatedarabic'] = 0xFC0B;
 t['tehmarbutaarabic'] = 0x0629;
 t['tehmarbutafinalarabic'] = 0xFE94;
 t['tehmedialarabic'] = 0xFE98;
 t['tehmeeminitialarabic'] = 0xFCA4;
 t['tehmeemisolatedarabic'] = 0xFC0E;
 t['tehnoonfinalarabic'] = 0xFC73;
 t['tekatakana'] = 0x30C6;
 t['tekatakanahalfwidth'] = 0xFF83;
 t['telephone'] = 0x2121;
 t['telephoneblack'] = 0x260E;
 t['telishagedolahebrew'] = 0x05A0;
 t['telishaqetanahebrew'] = 0x05A9;
 t['tencircle'] = 0x2469;
 t['tenideographicparen'] = 0x3229;
 t['tenparen'] = 0x247D;
 t['tenperiod'] = 0x2491;
 t['tenroman'] = 0x2179;
 t['tesh'] = 0x02A7;
 t['tet'] = 0x05D8;
 t['tetdagesh'] = 0xFB38;
 t['tetdageshhebrew'] = 0xFB38;
 t['tethebrew'] = 0x05D8;
 t['tetsecyrillic'] = 0x04B5;
 t['tevirhebrew'] = 0x059B;
 t['tevirlefthebrew'] = 0x059B;
 t['thabengali'] = 0x09A5;
 t['thadeva'] = 0x0925;
 t['thagujarati'] = 0x0AA5;
 t['thagurmukhi'] = 0x0A25;
 t['thalarabic'] = 0x0630;
 t['thalfinalarabic'] = 0xFEAC;
 t['thanthakhatlowleftthai'] = 0xF898;
 t['thanthakhatlowrightthai'] = 0xF897;
 t['thanthakhatthai'] = 0x0E4C;
 t['thanthakhatupperleftthai'] = 0xF896;
 t['theharabic'] = 0x062B;
 t['thehfinalarabic'] = 0xFE9A;
 t['thehinitialarabic'] = 0xFE9B;
 t['thehmedialarabic'] = 0xFE9C;
 t['thereexists'] = 0x2203;
 t['therefore'] = 0x2234;
 t['theta'] = 0x03B8;
 t['theta1'] = 0x03D1;
 t['thetasymbolgreek'] = 0x03D1;
 t['thieuthacirclekorean'] = 0x3279;
 t['thieuthaparenkorean'] = 0x3219;
 t['thieuthcirclekorean'] = 0x326B;
 t['thieuthkorean'] = 0x314C;
 t['thieuthparenkorean'] = 0x320B;
 t['thirteencircle'] = 0x246C;
 t['thirteenparen'] = 0x2480;
 t['thirteenperiod'] = 0x2494;
 t['thonangmonthothai'] = 0x0E11;
 t['thook'] = 0x01AD;
 t['thophuthaothai'] = 0x0E12;
 t['thorn'] = 0x00FE;
 t['thothahanthai'] = 0x0E17;
 t['thothanthai'] = 0x0E10;
 t['thothongthai'] = 0x0E18;
 t['thothungthai'] = 0x0E16;
 t['thousandcyrillic'] = 0x0482;
 t['thousandsseparatorarabic'] = 0x066C;
 t['thousandsseparatorpersian'] = 0x066C;
 t['three'] = 0x0033;
 t['threearabic'] = 0x0663;
 t['threebengali'] = 0x09E9;
 t['threecircle'] = 0x2462;
 t['threecircleinversesansserif'] = 0x278C;
 t['threedeva'] = 0x0969;
 t['threeeighths'] = 0x215C;
 t['threegujarati'] = 0x0AE9;
 t['threegurmukhi'] = 0x0A69;
 t['threehackarabic'] = 0x0663;
 t['threehangzhou'] = 0x3023;
 t['threeideographicparen'] = 0x3222;
 t['threeinferior'] = 0x2083;
 t['threemonospace'] = 0xFF13;
 t['threenumeratorbengali'] = 0x09F6;
 t['threeoldstyle'] = 0xF733;
 t['threeparen'] = 0x2476;
 t['threeperiod'] = 0x248A;
 t['threepersian'] = 0x06F3;
 t['threequarters'] = 0x00BE;
 t['threequartersemdash'] = 0xF6DE;
 t['threeroman'] = 0x2172;
 t['threesuperior'] = 0x00B3;
 t['threethai'] = 0x0E53;
 t['thzsquare'] = 0x3394;
 t['tihiragana'] = 0x3061;
 t['tikatakana'] = 0x30C1;
 t['tikatakanahalfwidth'] = 0xFF81;
 t['tikeutacirclekorean'] = 0x3270;
 t['tikeutaparenkorean'] = 0x3210;
 t['tikeutcirclekorean'] = 0x3262;
 t['tikeutkorean'] = 0x3137;
 t['tikeutparenkorean'] = 0x3202;
 t['tilde'] = 0x02DC;
 t['tildebelowcmb'] = 0x0330;
 t['tildecmb'] = 0x0303;
 t['tildecomb'] = 0x0303;
 t['tildedoublecmb'] = 0x0360;
 t['tildeoperator'] = 0x223C;
 t['tildeoverlaycmb'] = 0x0334;
 t['tildeverticalcmb'] = 0x033E;
 t['timescircle'] = 0x2297;
 t['tipehahebrew'] = 0x0596;
 t['tipehalefthebrew'] = 0x0596;
 t['tippigurmukhi'] = 0x0A70;
 t['titlocyrilliccmb'] = 0x0483;
 t['tiwnarmenian'] = 0x057F;
 t['tlinebelow'] = 0x1E6F;
 t['tmonospace'] = 0xFF54;
 t['toarmenian'] = 0x0569;
 t['tohiragana'] = 0x3068;
 t['tokatakana'] = 0x30C8;
 t['tokatakanahalfwidth'] = 0xFF84;
 t['tonebarextrahighmod'] = 0x02E5;
 t['tonebarextralowmod'] = 0x02E9;
 t['tonebarhighmod'] = 0x02E6;
 t['tonebarlowmod'] = 0x02E8;
 t['tonebarmidmod'] = 0x02E7;
 t['tonefive'] = 0x01BD;
 t['tonesix'] = 0x0185;
 t['tonetwo'] = 0x01A8;
 t['tonos'] = 0x0384;
 t['tonsquare'] = 0x3327;
 t['topatakthai'] = 0x0E0F;
 t['tortoiseshellbracketleft'] = 0x3014;
 t['tortoiseshellbracketleftsmall'] = 0xFE5D;
 t['tortoiseshellbracketleftvertical'] = 0xFE39;
 t['tortoiseshellbracketright'] = 0x3015;
 t['tortoiseshellbracketrightsmall'] = 0xFE5E;
 t['tortoiseshellbracketrightvertical'] = 0xFE3A;
 t['totaothai'] = 0x0E15;
 t['tpalatalhook'] = 0x01AB;
 t['tparen'] = 0x24AF;
 t['trademark'] = 0x2122;
 t['trademarksans'] = 0xF8EA;
 t['trademarkserif'] = 0xF6DB;
 t['tretroflexhook'] = 0x0288;
 t['triagdn'] = 0x25BC;
 t['triaglf'] = 0x25C4;
 t['triagrt'] = 0x25BA;
 t['triagup'] = 0x25B2;
 t['ts'] = 0x02A6;
 t['tsadi'] = 0x05E6;
 t['tsadidagesh'] = 0xFB46;
 t['tsadidageshhebrew'] = 0xFB46;
 t['tsadihebrew'] = 0x05E6;
 t['tsecyrillic'] = 0x0446;
 t['tsere'] = 0x05B5;
 t['tsere12'] = 0x05B5;
 t['tsere1e'] = 0x05B5;
 t['tsere2b'] = 0x05B5;
 t['tserehebrew'] = 0x05B5;
 t['tserenarrowhebrew'] = 0x05B5;
 t['tserequarterhebrew'] = 0x05B5;
 t['tserewidehebrew'] = 0x05B5;
 t['tshecyrillic'] = 0x045B;
 t['tsuperior'] = 0xF6F3;
 t['ttabengali'] = 0x099F;
 t['ttadeva'] = 0x091F;
 t['ttagujarati'] = 0x0A9F;
 t['ttagurmukhi'] = 0x0A1F;
 t['tteharabic'] = 0x0679;
 t['ttehfinalarabic'] = 0xFB67;
 t['ttehinitialarabic'] = 0xFB68;
 t['ttehmedialarabic'] = 0xFB69;
 t['tthabengali'] = 0x09A0;
 t['tthadeva'] = 0x0920;
 t['tthagujarati'] = 0x0AA0;
 t['tthagurmukhi'] = 0x0A20;
 t['tturned'] = 0x0287;
 t['tuhiragana'] = 0x3064;
 t['tukatakana'] = 0x30C4;
 t['tukatakanahalfwidth'] = 0xFF82;
 t['tusmallhiragana'] = 0x3063;
 t['tusmallkatakana'] = 0x30C3;
 t['tusmallkatakanahalfwidth'] = 0xFF6F;
 t['twelvecircle'] = 0x246B;
 t['twelveparen'] = 0x247F;
 t['twelveperiod'] = 0x2493;
 t['twelveroman'] = 0x217B;
 t['twentycircle'] = 0x2473;
 t['twentyhangzhou'] = 0x5344;
 t['twentyparen'] = 0x2487;
 t['twentyperiod'] = 0x249B;
 t['two'] = 0x0032;
 t['twoarabic'] = 0x0662;
 t['twobengali'] = 0x09E8;
 t['twocircle'] = 0x2461;
 t['twocircleinversesansserif'] = 0x278B;
 t['twodeva'] = 0x0968;
 t['twodotenleader'] = 0x2025;
 t['twodotleader'] = 0x2025;
 t['twodotleadervertical'] = 0xFE30;
 t['twogujarati'] = 0x0AE8;
 t['twogurmukhi'] = 0x0A68;
 t['twohackarabic'] = 0x0662;
 t['twohangzhou'] = 0x3022;
 t['twoideographicparen'] = 0x3221;
 t['twoinferior'] = 0x2082;
 t['twomonospace'] = 0xFF12;
 t['twonumeratorbengali'] = 0x09F5;
 t['twooldstyle'] = 0xF732;
 t['twoparen'] = 0x2475;
 t['twoperiod'] = 0x2489;
 t['twopersian'] = 0x06F2;
 t['tworoman'] = 0x2171;
 t['twostroke'] = 0x01BB;
 t['twosuperior'] = 0x00B2;
 t['twothai'] = 0x0E52;
 t['twothirds'] = 0x2154;
 t['u'] = 0x0075;
 t['uacute'] = 0x00FA;
 t['ubar'] = 0x0289;
 t['ubengali'] = 0x0989;
 t['ubopomofo'] = 0x3128;
 t['ubreve'] = 0x016D;
 t['ucaron'] = 0x01D4;
 t['ucircle'] = 0x24E4;
 t['ucircumflex'] = 0x00FB;
 t['ucircumflexbelow'] = 0x1E77;
 t['ucyrillic'] = 0x0443;
 t['udattadeva'] = 0x0951;
 t['udblacute'] = 0x0171;
 t['udblgrave'] = 0x0215;
 t['udeva'] = 0x0909;
 t['udieresis'] = 0x00FC;
 t['udieresisacute'] = 0x01D8;
 t['udieresisbelow'] = 0x1E73;
 t['udieresiscaron'] = 0x01DA;
 t['udieresiscyrillic'] = 0x04F1;
 t['udieresisgrave'] = 0x01DC;
 t['udieresismacron'] = 0x01D6;
 t['udotbelow'] = 0x1EE5;
 t['ugrave'] = 0x00F9;
 t['ugujarati'] = 0x0A89;
 t['ugurmukhi'] = 0x0A09;
 t['uhiragana'] = 0x3046;
 t['uhookabove'] = 0x1EE7;
 t['uhorn'] = 0x01B0;
 t['uhornacute'] = 0x1EE9;
 t['uhorndotbelow'] = 0x1EF1;
 t['uhorngrave'] = 0x1EEB;
 t['uhornhookabove'] = 0x1EED;
 t['uhorntilde'] = 0x1EEF;
 t['uhungarumlaut'] = 0x0171;
 t['uhungarumlautcyrillic'] = 0x04F3;
 t['uinvertedbreve'] = 0x0217;
 t['ukatakana'] = 0x30A6;
 t['ukatakanahalfwidth'] = 0xFF73;
 t['ukcyrillic'] = 0x0479;
 t['ukorean'] = 0x315C;
 t['umacron'] = 0x016B;
 t['umacroncyrillic'] = 0x04EF;
 t['umacrondieresis'] = 0x1E7B;
 t['umatragurmukhi'] = 0x0A41;
 t['umonospace'] = 0xFF55;
 t['underscore'] = 0x005F;
 t['underscoredbl'] = 0x2017;
 t['underscoremonospace'] = 0xFF3F;
 t['underscorevertical'] = 0xFE33;
 t['underscorewavy'] = 0xFE4F;
 t['union'] = 0x222A;
 t['universal'] = 0x2200;
 t['uogonek'] = 0x0173;
 t['uparen'] = 0x24B0;
 t['upblock'] = 0x2580;
 t['upperdothebrew'] = 0x05C4;
 t['upsilon'] = 0x03C5;
 t['upsilondieresis'] = 0x03CB;
 t['upsilondieresistonos'] = 0x03B0;
 t['upsilonlatin'] = 0x028A;
 t['upsilontonos'] = 0x03CD;
 t['uptackbelowcmb'] = 0x031D;
 t['uptackmod'] = 0x02D4;
 t['uragurmukhi'] = 0x0A73;
 t['uring'] = 0x016F;
 t['ushortcyrillic'] = 0x045E;
 t['usmallhiragana'] = 0x3045;
 t['usmallkatakana'] = 0x30A5;
 t['usmallkatakanahalfwidth'] = 0xFF69;
 t['ustraightcyrillic'] = 0x04AF;
 t['ustraightstrokecyrillic'] = 0x04B1;
 t['utilde'] = 0x0169;
 t['utildeacute'] = 0x1E79;
 t['utildebelow'] = 0x1E75;
 t['uubengali'] = 0x098A;
 t['uudeva'] = 0x090A;
 t['uugujarati'] = 0x0A8A;
 t['uugurmukhi'] = 0x0A0A;
 t['uumatragurmukhi'] = 0x0A42;
 t['uuvowelsignbengali'] = 0x09C2;
 t['uuvowelsigndeva'] = 0x0942;
 t['uuvowelsigngujarati'] = 0x0AC2;
 t['uvowelsignbengali'] = 0x09C1;
 t['uvowelsigndeva'] = 0x0941;
 t['uvowelsigngujarati'] = 0x0AC1;
 t['v'] = 0x0076;
 t['vadeva'] = 0x0935;
 t['vagujarati'] = 0x0AB5;
 t['vagurmukhi'] = 0x0A35;
 t['vakatakana'] = 0x30F7;
 t['vav'] = 0x05D5;
 t['vavdagesh'] = 0xFB35;
 t['vavdagesh65'] = 0xFB35;
 t['vavdageshhebrew'] = 0xFB35;
 t['vavhebrew'] = 0x05D5;
 t['vavholam'] = 0xFB4B;
 t['vavholamhebrew'] = 0xFB4B;
 t['vavvavhebrew'] = 0x05F0;
 t['vavyodhebrew'] = 0x05F1;
 t['vcircle'] = 0x24E5;
 t['vdotbelow'] = 0x1E7F;
 t['vecyrillic'] = 0x0432;
 t['veharabic'] = 0x06A4;
 t['vehfinalarabic'] = 0xFB6B;
 t['vehinitialarabic'] = 0xFB6C;
 t['vehmedialarabic'] = 0xFB6D;
 t['vekatakana'] = 0x30F9;
 t['venus'] = 0x2640;
 t['verticalbar'] = 0x007C;
 t['verticallineabovecmb'] = 0x030D;
 t['verticallinebelowcmb'] = 0x0329;
 t['verticallinelowmod'] = 0x02CC;
 t['verticallinemod'] = 0x02C8;
 t['vewarmenian'] = 0x057E;
 t['vhook'] = 0x028B;
 t['vikatakana'] = 0x30F8;
 t['viramabengali'] = 0x09CD;
 t['viramadeva'] = 0x094D;
 t['viramagujarati'] = 0x0ACD;
 t['visargabengali'] = 0x0983;
 t['visargadeva'] = 0x0903;
 t['visargagujarati'] = 0x0A83;
 t['vmonospace'] = 0xFF56;
 t['voarmenian'] = 0x0578;
 t['voicediterationhiragana'] = 0x309E;
 t['voicediterationkatakana'] = 0x30FE;
 t['voicedmarkkana'] = 0x309B;
 t['voicedmarkkanahalfwidth'] = 0xFF9E;
 t['vokatakana'] = 0x30FA;
 t['vparen'] = 0x24B1;
 t['vtilde'] = 0x1E7D;
 t['vturned'] = 0x028C;
 t['vuhiragana'] = 0x3094;
 t['vukatakana'] = 0x30F4;
 t['w'] = 0x0077;
 t['wacute'] = 0x1E83;
 t['waekorean'] = 0x3159;
 t['wahiragana'] = 0x308F;
 t['wakatakana'] = 0x30EF;
 t['wakatakanahalfwidth'] = 0xFF9C;
 t['wakorean'] = 0x3158;
 t['wasmallhiragana'] = 0x308E;
 t['wasmallkatakana'] = 0x30EE;
 t['wattosquare'] = 0x3357;
 t['wavedash'] = 0x301C;
 t['wavyunderscorevertical'] = 0xFE34;
 t['wawarabic'] = 0x0648;
 t['wawfinalarabic'] = 0xFEEE;
 t['wawhamzaabovearabic'] = 0x0624;
 t['wawhamzaabovefinalarabic'] = 0xFE86;
 t['wbsquare'] = 0x33DD;
 t['wcircle'] = 0x24E6;
 t['wcircumflex'] = 0x0175;
 t['wdieresis'] = 0x1E85;
 t['wdotaccent'] = 0x1E87;
 t['wdotbelow'] = 0x1E89;
 t['wehiragana'] = 0x3091;
 t['weierstrass'] = 0x2118;
 t['wekatakana'] = 0x30F1;
 t['wekorean'] = 0x315E;
 t['weokorean'] = 0x315D;
 t['wgrave'] = 0x1E81;
 t['whitebullet'] = 0x25E6;
 t['whitecircle'] = 0x25CB;
 t['whitecircleinverse'] = 0x25D9;
 t['whitecornerbracketleft'] = 0x300E;
 t['whitecornerbracketleftvertical'] = 0xFE43;
 t['whitecornerbracketright'] = 0x300F;
 t['whitecornerbracketrightvertical'] = 0xFE44;
 t['whitediamond'] = 0x25C7;
 t['whitediamondcontainingblacksmalldiamond'] = 0x25C8;
 t['whitedownpointingsmalltriangle'] = 0x25BF;
 t['whitedownpointingtriangle'] = 0x25BD;
 t['whiteleftpointingsmalltriangle'] = 0x25C3;
 t['whiteleftpointingtriangle'] = 0x25C1;
 t['whitelenticularbracketleft'] = 0x3016;
 t['whitelenticularbracketright'] = 0x3017;
 t['whiterightpointingsmalltriangle'] = 0x25B9;
 t['whiterightpointingtriangle'] = 0x25B7;
 t['whitesmallsquare'] = 0x25AB;
 t['whitesmilingface'] = 0x263A;
 t['whitesquare'] = 0x25A1;
 t['whitestar'] = 0x2606;
 t['whitetelephone'] = 0x260F;
 t['whitetortoiseshellbracketleft'] = 0x3018;
 t['whitetortoiseshellbracketright'] = 0x3019;
 t['whiteuppointingsmalltriangle'] = 0x25B5;
 t['whiteuppointingtriangle'] = 0x25B3;
 t['wihiragana'] = 0x3090;
 t['wikatakana'] = 0x30F0;
 t['wikorean'] = 0x315F;
 t['wmonospace'] = 0xFF57;
 t['wohiragana'] = 0x3092;
 t['wokatakana'] = 0x30F2;
 t['wokatakanahalfwidth'] = 0xFF66;
 t['won'] = 0x20A9;
 t['wonmonospace'] = 0xFFE6;
 t['wowaenthai'] = 0x0E27;
 t['wparen'] = 0x24B2;
 t['wring'] = 0x1E98;
 t['wsuperior'] = 0x02B7;
 t['wturned'] = 0x028D;
 t['wynn'] = 0x01BF;
 t['x'] = 0x0078;
 t['xabovecmb'] = 0x033D;
 t['xbopomofo'] = 0x3112;
 t['xcircle'] = 0x24E7;
 t['xdieresis'] = 0x1E8D;
 t['xdotaccent'] = 0x1E8B;
 t['xeharmenian'] = 0x056D;
 t['xi'] = 0x03BE;
 t['xmonospace'] = 0xFF58;
 t['xparen'] = 0x24B3;
 t['xsuperior'] = 0x02E3;
 t['y'] = 0x0079;
 t['yaadosquare'] = 0x334E;
 t['yabengali'] = 0x09AF;
 t['yacute'] = 0x00FD;
 t['yadeva'] = 0x092F;
 t['yaekorean'] = 0x3152;
 t['yagujarati'] = 0x0AAF;
 t['yagurmukhi'] = 0x0A2F;
 t['yahiragana'] = 0x3084;
 t['yakatakana'] = 0x30E4;
 t['yakatakanahalfwidth'] = 0xFF94;
 t['yakorean'] = 0x3151;
 t['yamakkanthai'] = 0x0E4E;
 t['yasmallhiragana'] = 0x3083;
 t['yasmallkatakana'] = 0x30E3;
 t['yasmallkatakanahalfwidth'] = 0xFF6C;
 t['yatcyrillic'] = 0x0463;
 t['ycircle'] = 0x24E8;
 t['ycircumflex'] = 0x0177;
 t['ydieresis'] = 0x00FF;
 t['ydotaccent'] = 0x1E8F;
 t['ydotbelow'] = 0x1EF5;
 t['yeharabic'] = 0x064A;
 t['yehbarreearabic'] = 0x06D2;
 t['yehbarreefinalarabic'] = 0xFBAF;
 t['yehfinalarabic'] = 0xFEF2;
 t['yehhamzaabovearabic'] = 0x0626;
 t['yehhamzaabovefinalarabic'] = 0xFE8A;
 t['yehhamzaaboveinitialarabic'] = 0xFE8B;
 t['yehhamzaabovemedialarabic'] = 0xFE8C;
 t['yehinitialarabic'] = 0xFEF3;
 t['yehmedialarabic'] = 0xFEF4;
 t['yehmeeminitialarabic'] = 0xFCDD;
 t['yehmeemisolatedarabic'] = 0xFC58;
 t['yehnoonfinalarabic'] = 0xFC94;
 t['yehthreedotsbelowarabic'] = 0x06D1;
 t['yekorean'] = 0x3156;
 t['yen'] = 0x00A5;
 t['yenmonospace'] = 0xFFE5;
 t['yeokorean'] = 0x3155;
 t['yeorinhieuhkorean'] = 0x3186;
 t['yerahbenyomohebrew'] = 0x05AA;
 t['yerahbenyomolefthebrew'] = 0x05AA;
 t['yericyrillic'] = 0x044B;
 t['yerudieresiscyrillic'] = 0x04F9;
 t['yesieungkorean'] = 0x3181;
 t['yesieungpansioskorean'] = 0x3183;
 t['yesieungsioskorean'] = 0x3182;
 t['yetivhebrew'] = 0x059A;
 t['ygrave'] = 0x1EF3;
 t['yhook'] = 0x01B4;
 t['yhookabove'] = 0x1EF7;
 t['yiarmenian'] = 0x0575;
 t['yicyrillic'] = 0x0457;
 t['yikorean'] = 0x3162;
 t['yinyang'] = 0x262F;
 t['yiwnarmenian'] = 0x0582;
 t['ymonospace'] = 0xFF59;
 t['yod'] = 0x05D9;
 t['yoddagesh'] = 0xFB39;
 t['yoddageshhebrew'] = 0xFB39;
 t['yodhebrew'] = 0x05D9;
 t['yodyodhebrew'] = 0x05F2;
 t['yodyodpatahhebrew'] = 0xFB1F;
 t['yohiragana'] = 0x3088;
 t['yoikorean'] = 0x3189;
 t['yokatakana'] = 0x30E8;
 t['yokatakanahalfwidth'] = 0xFF96;
 t['yokorean'] = 0x315B;
 t['yosmallhiragana'] = 0x3087;
 t['yosmallkatakana'] = 0x30E7;
 t['yosmallkatakanahalfwidth'] = 0xFF6E;
 t['yotgreek'] = 0x03F3;
 t['yoyaekorean'] = 0x3188;
 t['yoyakorean'] = 0x3187;
 t['yoyakthai'] = 0x0E22;
 t['yoyingthai'] = 0x0E0D;
 t['yparen'] = 0x24B4;
 t['ypogegrammeni'] = 0x037A;
 t['ypogegrammenigreekcmb'] = 0x0345;
 t['yr'] = 0x01A6;
 t['yring'] = 0x1E99;
 t['ysuperior'] = 0x02B8;
 t['ytilde'] = 0x1EF9;
 t['yturned'] = 0x028E;
 t['yuhiragana'] = 0x3086;
 t['yuikorean'] = 0x318C;
 t['yukatakana'] = 0x30E6;
 t['yukatakanahalfwidth'] = 0xFF95;
 t['yukorean'] = 0x3160;
 t['yusbigcyrillic'] = 0x046B;
 t['yusbigiotifiedcyrillic'] = 0x046D;
 t['yuslittlecyrillic'] = 0x0467;
 t['yuslittleiotifiedcyrillic'] = 0x0469;
 t['yusmallhiragana'] = 0x3085;
 t['yusmallkatakana'] = 0x30E5;
 t['yusmallkatakanahalfwidth'] = 0xFF6D;
 t['yuyekorean'] = 0x318B;
 t['yuyeokorean'] = 0x318A;
 t['yyabengali'] = 0x09DF;
 t['yyadeva'] = 0x095F;
 t['z'] = 0x007A;
 t['zaarmenian'] = 0x0566;
 t['zacute'] = 0x017A;
 t['zadeva'] = 0x095B;
 t['zagurmukhi'] = 0x0A5B;
 t['zaharabic'] = 0x0638;
 t['zahfinalarabic'] = 0xFEC6;
 t['zahinitialarabic'] = 0xFEC7;
 t['zahiragana'] = 0x3056;
 t['zahmedialarabic'] = 0xFEC8;
 t['zainarabic'] = 0x0632;
 t['zainfinalarabic'] = 0xFEB0;
 t['zakatakana'] = 0x30B6;
 t['zaqefgadolhebrew'] = 0x0595;
 t['zaqefqatanhebrew'] = 0x0594;
 t['zarqahebrew'] = 0x0598;
 t['zayin'] = 0x05D6;
 t['zayindagesh'] = 0xFB36;
 t['zayindageshhebrew'] = 0xFB36;
 t['zayinhebrew'] = 0x05D6;
 t['zbopomofo'] = 0x3117;
 t['zcaron'] = 0x017E;
 t['zcircle'] = 0x24E9;
 t['zcircumflex'] = 0x1E91;
 t['zcurl'] = 0x0291;
 t['zdot'] = 0x017C;
 t['zdotaccent'] = 0x017C;
 t['zdotbelow'] = 0x1E93;
 t['zecyrillic'] = 0x0437;
 t['zedescendercyrillic'] = 0x0499;
 t['zedieresiscyrillic'] = 0x04DF;
 t['zehiragana'] = 0x305C;
 t['zekatakana'] = 0x30BC;
 t['zero'] = 0x0030;
 t['zeroarabic'] = 0x0660;
 t['zerobengali'] = 0x09E6;
 t['zerodeva'] = 0x0966;
 t['zerogujarati'] = 0x0AE6;
 t['zerogurmukhi'] = 0x0A66;
 t['zerohackarabic'] = 0x0660;
 t['zeroinferior'] = 0x2080;
 t['zeromonospace'] = 0xFF10;
 t['zerooldstyle'] = 0xF730;
 t['zeropersian'] = 0x06F0;
 t['zerosuperior'] = 0x2070;
 t['zerothai'] = 0x0E50;
 t['zerowidthjoiner'] = 0xFEFF;
 t['zerowidthnonjoiner'] = 0x200C;
 t['zerowidthspace'] = 0x200B;
 t['zeta'] = 0x03B6;
 t['zhbopomofo'] = 0x3113;
 t['zhearmenian'] = 0x056A;
 t['zhebrevecyrillic'] = 0x04C2;
 t['zhecyrillic'] = 0x0436;
 t['zhedescendercyrillic'] = 0x0497;
 t['zhedieresiscyrillic'] = 0x04DD;
 t['zihiragana'] = 0x3058;
 t['zikatakana'] = 0x30B8;
 t['zinorhebrew'] = 0x05AE;
 t['zlinebelow'] = 0x1E95;
 t['zmonospace'] = 0xFF5A;
 t['zohiragana'] = 0x305E;
 t['zokatakana'] = 0x30BE;
 t['zparen'] = 0x24B5;
 t['zretroflexhook'] = 0x0290;
 t['zstroke'] = 0x01B6;
 t['zuhiragana'] = 0x305A;
 t['zukatakana'] = 0x30BA;
 t['.notdef'] = 0x0000;
 t['angbracketleftbig'] = 0x2329;
 t['angbracketleftBig'] = 0x2329;
 t['angbracketleftbigg'] = 0x2329;
 t['angbracketleftBigg'] = 0x2329;
 t['angbracketrightBig'] = 0x232A;
 t['angbracketrightbig'] = 0x232A;
 t['angbracketrightBigg'] = 0x232A;
 t['angbracketrightbigg'] = 0x232A;
 t['arrowhookleft'] = 0x21AA;
 t['arrowhookright'] = 0x21A9;
 t['arrowlefttophalf'] = 0x21BC;
 t['arrowleftbothalf'] = 0x21BD;
 t['arrownortheast'] = 0x2197;
 t['arrownorthwest'] = 0x2196;
 t['arrowrighttophalf'] = 0x21C0;
 t['arrowrightbothalf'] = 0x21C1;
 t['arrowsoutheast'] = 0x2198;
 t['arrowsouthwest'] = 0x2199;
 t['backslashbig'] = 0x2216;
 t['backslashBig'] = 0x2216;
 t['backslashBigg'] = 0x2216;
 t['backslashbigg'] = 0x2216;
 t['bardbl'] = 0x2016;
 t['bracehtipdownleft'] = 0xFE37;
 t['bracehtipdownright'] = 0xFE37;
 t['bracehtipupleft'] = 0xFE38;
 t['bracehtipupright'] = 0xFE38;
 t['braceleftBig'] = 0x007B;
 t['braceleftbig'] = 0x007B;
 t['braceleftbigg'] = 0x007B;
 t['braceleftBigg'] = 0x007B;
 t['bracerightBig'] = 0x007D;
 t['bracerightbig'] = 0x007D;
 t['bracerightbigg'] = 0x007D;
 t['bracerightBigg'] = 0x007D;
 t['bracketleftbig'] = 0x005B;
 t['bracketleftBig'] = 0x005B;
 t['bracketleftbigg'] = 0x005B;
 t['bracketleftBigg'] = 0x005B;
 t['bracketrightBig'] = 0x005D;
 t['bracketrightbig'] = 0x005D;
 t['bracketrightbigg'] = 0x005D;
 t['bracketrightBigg'] = 0x005D;
 t['ceilingleftbig'] = 0x2308;
 t['ceilingleftBig'] = 0x2308;
 t['ceilingleftBigg'] = 0x2308;
 t['ceilingleftbigg'] = 0x2308;
 t['ceilingrightbig'] = 0x2309;
 t['ceilingrightBig'] = 0x2309;
 t['ceilingrightbigg'] = 0x2309;
 t['ceilingrightBigg'] = 0x2309;
 t['circledotdisplay'] = 0x2299;
 t['circledottext'] = 0x2299;
 t['circlemultiplydisplay'] = 0x2297;
 t['circlemultiplytext'] = 0x2297;
 t['circleplusdisplay'] = 0x2295;
 t['circleplustext'] = 0x2295;
 t['contintegraldisplay'] = 0x222E;
 t['contintegraltext'] = 0x222E;
 t['coproductdisplay'] = 0x2210;
 t['coproducttext'] = 0x2210;
 t['floorleftBig'] = 0x230A;
 t['floorleftbig'] = 0x230A;
 t['floorleftbigg'] = 0x230A;
 t['floorleftBigg'] = 0x230A;
 t['floorrightbig'] = 0x230B;
 t['floorrightBig'] = 0x230B;
 t['floorrightBigg'] = 0x230B;
 t['floorrightbigg'] = 0x230B;
 t['hatwide'] = 0x0302;
 t['hatwider'] = 0x0302;
 t['hatwidest'] = 0x0302;
 t['intercal'] = 0x1D40;
 t['integraldisplay'] = 0x222B;
 t['integraltext'] = 0x222B;
 t['intersectiondisplay'] = 0x22C2;
 t['intersectiontext'] = 0x22C2;
 t['logicalanddisplay'] = 0x2227;
 t['logicalandtext'] = 0x2227;
 t['logicalordisplay'] = 0x2228;
 t['logicalortext'] = 0x2228;
 t['parenleftBig'] = 0x0028;
 t['parenleftbig'] = 0x0028;
 t['parenleftBigg'] = 0x0028;
 t['parenleftbigg'] = 0x0028;
 t['parenrightBig'] = 0x0029;
 t['parenrightbig'] = 0x0029;
 t['parenrightBigg'] = 0x0029;
 t['parenrightbigg'] = 0x0029;
 t['prime'] = 0x2032;
 t['productdisplay'] = 0x220F;
 t['producttext'] = 0x220F;
 t['radicalbig'] = 0x221A;
 t['radicalBig'] = 0x221A;
 t['radicalBigg'] = 0x221A;
 t['radicalbigg'] = 0x221A;
 t['radicalbt'] = 0x221A;
 t['radicaltp'] = 0x221A;
 t['radicalvertex'] = 0x221A;
 t['slashbig'] = 0x002F;
 t['slashBig'] = 0x002F;
 t['slashBigg'] = 0x002F;
 t['slashbigg'] = 0x002F;
 t['summationdisplay'] = 0x2211;
 t['summationtext'] = 0x2211;
 t['tildewide'] = 0x02DC;
 t['tildewider'] = 0x02DC;
 t['tildewidest'] = 0x02DC;
 t['uniondisplay'] = 0x22C3;
 t['unionmultidisplay'] = 0x228E;
 t['unionmultitext'] = 0x228E;
 t['unionsqdisplay'] = 0x2294;
 t['unionsqtext'] = 0x2294;
 t['uniontext'] = 0x22C3;
 t['vextenddouble'] = 0x2225;
 t['vextendsingle'] = 0x2223;
});
var getDingbatsGlyphsUnicode = getLookupTableFactory(function (t) {
 t['space'] = 0x0020;
 t['a1'] = 0x2701;
 t['a2'] = 0x2702;
 t['a202'] = 0x2703;
 t['a3'] = 0x2704;
 t['a4'] = 0x260E;
 t['a5'] = 0x2706;
 t['a119'] = 0x2707;
 t['a118'] = 0x2708;
 t['a117'] = 0x2709;
 t['a11'] = 0x261B;
 t['a12'] = 0x261E;
 t['a13'] = 0x270C;
 t['a14'] = 0x270D;
 t['a15'] = 0x270E;
 t['a16'] = 0x270F;
 t['a105'] = 0x2710;
 t['a17'] = 0x2711;
 t['a18'] = 0x2712;
 t['a19'] = 0x2713;
 t['a20'] = 0x2714;
 t['a21'] = 0x2715;
 t['a22'] = 0x2716;
 t['a23'] = 0x2717;
 t['a24'] = 0x2718;
 t['a25'] = 0x2719;
 t['a26'] = 0x271A;
 t['a27'] = 0x271B;
 t['a28'] = 0x271C;
 t['a6'] = 0x271D;
 t['a7'] = 0x271E;
 t['a8'] = 0x271F;
 t['a9'] = 0x2720;
 t['a10'] = 0x2721;
 t['a29'] = 0x2722;
 t['a30'] = 0x2723;
 t['a31'] = 0x2724;
 t['a32'] = 0x2725;
 t['a33'] = 0x2726;
 t['a34'] = 0x2727;
 t['a35'] = 0x2605;
 t['a36'] = 0x2729;
 t['a37'] = 0x272A;
 t['a38'] = 0x272B;
 t['a39'] = 0x272C;
 t['a40'] = 0x272D;
 t['a41'] = 0x272E;
 t['a42'] = 0x272F;
 t['a43'] = 0x2730;
 t['a44'] = 0x2731;
 t['a45'] = 0x2732;
 t['a46'] = 0x2733;
 t['a47'] = 0x2734;
 t['a48'] = 0x2735;
 t['a49'] = 0x2736;
 t['a50'] = 0x2737;
 t['a51'] = 0x2738;
 t['a52'] = 0x2739;
 t['a53'] = 0x273A;
 t['a54'] = 0x273B;
 t['a55'] = 0x273C;
 t['a56'] = 0x273D;
 t['a57'] = 0x273E;
 t['a58'] = 0x273F;
 t['a59'] = 0x2740;
 t['a60'] = 0x2741;
 t['a61'] = 0x2742;
 t['a62'] = 0x2743;
 t['a63'] = 0x2744;
 t['a64'] = 0x2745;
 t['a65'] = 0x2746;
 t['a66'] = 0x2747;
 t['a67'] = 0x2748;
 t['a68'] = 0x2749;
 t['a69'] = 0x274A;
 t['a70'] = 0x274B;
 t['a71'] = 0x25CF;
 t['a72'] = 0x274D;
 t['a73'] = 0x25A0;
 t['a74'] = 0x274F;
 t['a203'] = 0x2750;
 t['a75'] = 0x2751;
 t['a204'] = 0x2752;
 t['a76'] = 0x25B2;
 t['a77'] = 0x25BC;
 t['a78'] = 0x25C6;
 t['a79'] = 0x2756;
 t['a81'] = 0x25D7;
 t['a82'] = 0x2758;
 t['a83'] = 0x2759;
 t['a84'] = 0x275A;
 t['a97'] = 0x275B;
 t['a98'] = 0x275C;
 t['a99'] = 0x275D;
 t['a100'] = 0x275E;
 t['a101'] = 0x2761;
 t['a102'] = 0x2762;
 t['a103'] = 0x2763;
 t['a104'] = 0x2764;
 t['a106'] = 0x2765;
 t['a107'] = 0x2766;
 t['a108'] = 0x2767;
 t['a112'] = 0x2663;
 t['a111'] = 0x2666;
 t['a110'] = 0x2665;
 t['a109'] = 0x2660;
 t['a120'] = 0x2460;
 t['a121'] = 0x2461;
 t['a122'] = 0x2462;
 t['a123'] = 0x2463;
 t['a124'] = 0x2464;
 t['a125'] = 0x2465;
 t['a126'] = 0x2466;
 t['a127'] = 0x2467;
 t['a128'] = 0x2468;
 t['a129'] = 0x2469;
 t['a130'] = 0x2776;
 t['a131'] = 0x2777;
 t['a132'] = 0x2778;
 t['a133'] = 0x2779;
 t['a134'] = 0x277A;
 t['a135'] = 0x277B;
 t['a136'] = 0x277C;
 t['a137'] = 0x277D;
 t['a138'] = 0x277E;
 t['a139'] = 0x277F;
 t['a140'] = 0x2780;
 t['a141'] = 0x2781;
 t['a142'] = 0x2782;
 t['a143'] = 0x2783;
 t['a144'] = 0x2784;
 t['a145'] = 0x2785;
 t['a146'] = 0x2786;
 t['a147'] = 0x2787;
 t['a148'] = 0x2788;
 t['a149'] = 0x2789;
 t['a150'] = 0x278A;
 t['a151'] = 0x278B;
 t['a152'] = 0x278C;
 t['a153'] = 0x278D;
 t['a154'] = 0x278E;
 t['a155'] = 0x278F;
 t['a156'] = 0x2790;
 t['a157'] = 0x2791;
 t['a158'] = 0x2792;
 t['a159'] = 0x2793;
 t['a160'] = 0x2794;
 t['a161'] = 0x2192;
 t['a163'] = 0x2194;
 t['a164'] = 0x2195;
 t['a196'] = 0x2798;
 t['a165'] = 0x2799;
 t['a192'] = 0x279A;
 t['a166'] = 0x279B;
 t['a167'] = 0x279C;
 t['a168'] = 0x279D;
 t['a169'] = 0x279E;
 t['a170'] = 0x279F;
 t['a171'] = 0x27A0;
 t['a172'] = 0x27A1;
 t['a173'] = 0x27A2;
 t['a162'] = 0x27A3;
 t['a174'] = 0x27A4;
 t['a175'] = 0x27A5;
 t['a176'] = 0x27A6;
 t['a177'] = 0x27A7;
 t['a178'] = 0x27A8;
 t['a179'] = 0x27A9;
 t['a193'] = 0x27AA;
 t['a180'] = 0x27AB;
 t['a199'] = 0x27AC;
 t['a181'] = 0x27AD;
 t['a200'] = 0x27AE;
 t['a182'] = 0x27AF;
 t['a201'] = 0x27B1;
 t['a183'] = 0x27B2;
 t['a184'] = 0x27B3;
 t['a197'] = 0x27B4;
 t['a185'] = 0x27B5;
 t['a194'] = 0x27B6;
 t['a198'] = 0x27B7;
 t['a186'] = 0x27B8;
 t['a195'] = 0x27B9;
 t['a187'] = 0x27BA;
 t['a188'] = 0x27BB;
 t['a189'] = 0x27BC;
 t['a190'] = 0x27BD;
 t['a191'] = 0x27BE;
 t['a89'] = 0x2768;
 t['a90'] = 0x2769;
 t['a93'] = 0x276A;
 t['a94'] = 0x276B;
 t['a91'] = 0x276C;
 t['a92'] = 0x276D;
 t['a205'] = 0x276E;
 t['a85'] = 0x276F;
 t['a206'] = 0x2770;
 t['a86'] = 0x2771;
 t['a87'] = 0x2772;
 t['a88'] = 0x2773;
 t['a95'] = 0x2774;
 t['a96'] = 0x2775;
 t['.notdef'] = 0x0000;
});
exports.getGlyphsUnicode = getGlyphsUnicode;
exports.getDingbatsGlyphsUnicode = getDingbatsGlyphsUnicode;

/***/ }),
/* 7 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostScriptCompiler = exports.PostScriptEvaluator = exports.PDFFunction = exports.isPDFFunction = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _util = __w_pdfjs_require__(0);

var _primitives = __w_pdfjs_require__(1);

var _ps_parser = __w_pdfjs_require__(33);

var PDFFunction = function PDFFunctionClosure() {
  var CONSTRUCT_SAMPLED = 0;
  var CONSTRUCT_INTERPOLATED = 2;
  var CONSTRUCT_STICHED = 3;
  var CONSTRUCT_POSTSCRIPT = 4;
  return {
    getSampleArray: function PDFFunction_getSampleArray(size, outputSize, bps, str) {
      var i, ii;
      var length = 1;
      for (i = 0, ii = size.length; i < ii; i++) {
        length *= size[i];
      }
      length *= outputSize;
      var array = new Array(length);
      var codeSize = 0;
      var codeBuf = 0;
      var sampleMul = 1.0 / (Math.pow(2.0, bps) - 1);
      var strBytes = str.getBytes((length * bps + 7) / 8);
      var strIdx = 0;
      for (i = 0; i < length; i++) {
        while (codeSize < bps) {
          codeBuf <<= 8;
          codeBuf |= strBytes[strIdx++];
          codeSize += 8;
        }
        codeSize -= bps;
        array[i] = (codeBuf >> codeSize) * sampleMul;
        codeBuf &= (1 << codeSize) - 1;
      }
      return array;
    },
    getIR: function PDFFunction_getIR(xref, fn) {
      var dict = fn.dict;
      if (!dict) {
        dict = fn;
      }
      var types = [this.constructSampled, null, this.constructInterpolated, this.constructStiched, this.constructPostScript];
      var typeNum = dict.get('FunctionType');
      var typeFn = types[typeNum];
      if (!typeFn) {
        throw new _util.FormatError('Unknown type of function');
      }
      return typeFn.call(this, fn, dict, xref);
    },
    fromIR: function PDFFunction_fromIR(IR) {
      var type = IR[0];
      switch (type) {
        case CONSTRUCT_SAMPLED:
          return this.constructSampledFromIR(IR);
        case CONSTRUCT_INTERPOLATED:
          return this.constructInterpolatedFromIR(IR);
        case CONSTRUCT_STICHED:
          return this.constructStichedFromIR(IR);
        default:
          return this.constructPostScriptFromIR(IR);
      }
    },
    parse: function PDFFunction_parse(xref, fn) {
      var IR = this.getIR(xref, fn);
      return this.fromIR(IR);
    },
    parseArray: function PDFFunction_parseArray(xref, fnObj) {
      if (!(0, _util.isArray)(fnObj)) {
        return this.parse(xref, fnObj);
      }
      var fnArray = [];
      for (var j = 0, jj = fnObj.length; j < jj; j++) {
        var obj = xref.fetchIfRef(fnObj[j]);
        fnArray.push(PDFFunction.parse(xref, obj));
      }
      return function (src, srcOffset, dest, destOffset) {
        for (var i = 0, ii = fnArray.length; i < ii; i++) {
          fnArray[i](src, srcOffset, dest, destOffset + i);
        }
      };
    },
    constructSampled: function PDFFunction_constructSampled(str, dict) {
      function toMultiArray(arr) {
        var inputLength = arr.length;
        var out = [];
        var index = 0;
        for (var i = 0; i < inputLength; i += 2) {
          out[index] = [arr[i], arr[i + 1]];
          ++index;
        }
        return out;
      }
      var domain = dict.getArray('Domain');
      var range = dict.getArray('Range');
      if (!domain || !range) {
        throw new _util.FormatError('No domain or range');
      }
      var inputSize = domain.length / 2;
      var outputSize = range.length / 2;
      domain = toMultiArray(domain);
      range = toMultiArray(range);
      var size = dict.get('Size');
      var bps = dict.get('BitsPerSample');
      var order = dict.get('Order') || 1;
      if (order !== 1) {
        (0, _util.info)('No support for cubic spline interpolation: ' + order);
      }
      var encode = dict.getArray('Encode');
      if (!encode) {
        encode = [];
        for (var i = 0; i < inputSize; ++i) {
          encode.push(0);
          encode.push(size[i] - 1);
        }
      }
      encode = toMultiArray(encode);
      var decode = dict.getArray('Decode');
      if (!decode) {
        decode = range;
      } else {
        decode = toMultiArray(decode);
      }
      var samples = this.getSampleArray(size, outputSize, bps, str);
      return [CONSTRUCT_SAMPLED, inputSize, domain, encode, decode, samples, size, outputSize, Math.pow(2, bps) - 1, range];
    },
    constructSampledFromIR: function PDFFunction_constructSampledFromIR(IR) {
      function interpolate(x, xmin, xmax, ymin, ymax) {
        return ymin + (x - xmin) * ((ymax - ymin) / (xmax - xmin));
      }
      return function constructSampledFromIRResult(src, srcOffset, dest, destOffset) {
        var m = IR[1];
        var domain = IR[2];
        var encode = IR[3];
        var decode = IR[4];
        var samples = IR[5];
        var size = IR[6];
        var n = IR[7];
        var range = IR[9];
        var cubeVertices = 1 << m;
        var cubeN = new Float64Array(cubeVertices);
        var cubeVertex = new Uint32Array(cubeVertices);
        var i, j;
        for (j = 0; j < cubeVertices; j++) {
          cubeN[j] = 1;
        }
        var k = n,
            pos = 1;
        for (i = 0; i < m; ++i) {
          var domain_2i = domain[i][0];
          var domain_2i_1 = domain[i][1];
          var xi = Math.min(Math.max(src[srcOffset + i], domain_2i), domain_2i_1);
          var e = interpolate(xi, domain_2i, domain_2i_1, encode[i][0], encode[i][1]);
          var size_i = size[i];
          e = Math.min(Math.max(e, 0), size_i - 1);
          var e0 = e < size_i - 1 ? Math.floor(e) : e - 1;
          var n0 = e0 + 1 - e;
          var n1 = e - e0;
          var offset0 = e0 * k;
          var offset1 = offset0 + k;
          for (j = 0; j < cubeVertices; j++) {
            if (j & pos) {
              cubeN[j] *= n1;
              cubeVertex[j] += offset1;
            } else {
              cubeN[j] *= n0;
              cubeVertex[j] += offset0;
            }
          }
          k *= size_i;
          pos <<= 1;
        }
        for (j = 0; j < n; ++j) {
          var rj = 0;
          for (i = 0; i < cubeVertices; i++) {
            rj += samples[cubeVertex[i] + j] * cubeN[i];
          }
          rj = interpolate(rj, 0, 1, decode[j][0], decode[j][1]);
          dest[destOffset + j] = Math.min(Math.max(rj, range[j][0]), range[j][1]);
        }
      };
    },
    constructInterpolated: function PDFFunction_constructInterpolated(str, dict) {
      var c0 = dict.getArray('C0') || [0];
      var c1 = dict.getArray('C1') || [1];
      var n = dict.get('N');
      if (!(0, _util.isArray)(c0) || !(0, _util.isArray)(c1)) {
        throw new _util.FormatError('Illegal dictionary for interpolated function');
      }
      var length = c0.length;
      var diff = [];
      for (var i = 0; i < length; ++i) {
        diff.push(c1[i] - c0[i]);
      }
      return [CONSTRUCT_INTERPOLATED, c0, diff, n];
    },
    constructInterpolatedFromIR: function PDFFunction_constructInterpolatedFromIR(IR) {
      var c0 = IR[1];
      var diff = IR[2];
      var n = IR[3];
      var length = diff.length;
      return function constructInterpolatedFromIRResult(src, srcOffset, dest, destOffset) {
        var x = n === 1 ? src[srcOffset] : Math.pow(src[srcOffset], n);
        for (var j = 0; j < length; ++j) {
          dest[destOffset + j] = c0[j] + x * diff[j];
        }
      };
    },
    constructStiched: function PDFFunction_constructStiched(fn, dict, xref) {
      var domain = dict.getArray('Domain');
      if (!domain) {
        throw new _util.FormatError('No domain');
      }
      var inputSize = domain.length / 2;
      if (inputSize !== 1) {
        throw new _util.FormatError('Bad domain for stiched function');
      }
      var fnRefs = dict.get('Functions');
      var fns = [];
      for (var i = 0, ii = fnRefs.length; i < ii; ++i) {
        fns.push(PDFFunction.getIR(xref, xref.fetchIfRef(fnRefs[i])));
      }
      var bounds = dict.getArray('Bounds');
      var encode = dict.getArray('Encode');
      return [CONSTRUCT_STICHED, domain, bounds, encode, fns];
    },
    constructStichedFromIR: function PDFFunction_constructStichedFromIR(IR) {
      var domain = IR[1];
      var bounds = IR[2];
      var encode = IR[3];
      var fnsIR = IR[4];
      var fns = [];
      var tmpBuf = new Float32Array(1);
      for (var i = 0, ii = fnsIR.length; i < ii; i++) {
        fns.push(PDFFunction.fromIR(fnsIR[i]));
      }
      return function constructStichedFromIRResult(src, srcOffset, dest, destOffset) {
        var clip = function constructStichedFromIRClip(v, min, max) {
          if (v > max) {
            v = max;
          } else if (v < min) {
            v = min;
          }
          return v;
        };
        var v = clip(src[srcOffset], domain[0], domain[1]);
        for (var i = 0, ii = bounds.length; i < ii; ++i) {
          if (v < bounds[i]) {
            break;
          }
        }
        var dmin = domain[0];
        if (i > 0) {
          dmin = bounds[i - 1];
        }
        var dmax = domain[1];
        if (i < bounds.length) {
          dmax = bounds[i];
        }
        var rmin = encode[2 * i];
        var rmax = encode[2 * i + 1];
        tmpBuf[0] = dmin === dmax ? rmin : rmin + (v - dmin) * (rmax - rmin) / (dmax - dmin);
        fns[i](tmpBuf, 0, dest, destOffset);
      };
    },
    constructPostScript: function PDFFunction_constructPostScript(fn, dict, xref) {
      var domain = dict.getArray('Domain');
      var range = dict.getArray('Range');
      if (!domain) {
        throw new _util.FormatError('No domain.');
      }
      if (!range) {
        throw new _util.FormatError('No range.');
      }
      var lexer = new _ps_parser.PostScriptLexer(fn);
      var parser = new _ps_parser.PostScriptParser(lexer);
      var code = parser.parse();
      return [CONSTRUCT_POSTSCRIPT, domain, range, code];
    },
    constructPostScriptFromIR: function PDFFunction_constructPostScriptFromIR(IR) {
      var domain = IR[1];
      var range = IR[2];
      var code = IR[3];
      var compiled = new PostScriptCompiler().compile(code, domain, range);
      if (compiled) {
        return new Function('src', 'srcOffset', 'dest', 'destOffset', compiled);
      }
      (0, _util.info)('Unable to compile PS function');
      var numOutputs = range.length >> 1;
      var numInputs = domain.length >> 1;
      var evaluator = new PostScriptEvaluator(code);
      var cache = Object.create(null);
      var MAX_CACHE_SIZE = 2048 * 4;
      var cache_available = MAX_CACHE_SIZE;
      var tmpBuf = new Float32Array(numInputs);
      return function constructPostScriptFromIRResult(src, srcOffset, dest, destOffset) {
        var i, value;
        var key = '';
        var input = tmpBuf;
        for (i = 0; i < numInputs; i++) {
          value = src[srcOffset + i];
          input[i] = value;
          key += value + '_';
        }
        var cachedValue = cache[key];
        if (cachedValue !== undefined) {
          dest.set(cachedValue, destOffset);
          return;
        }
        var output = new Float32Array(numOutputs);
        var stack = evaluator.execute(input);
        var stackIndex = stack.length - numOutputs;
        for (i = 0; i < numOutputs; i++) {
          value = stack[stackIndex + i];
          var bound = range[i * 2];
          if (value < bound) {
            value = bound;
          } else {
            bound = range[i * 2 + 1];
            if (value > bound) {
              value = bound;
            }
          }
          output[i] = value;
        }
        if (cache_available > 0) {
          cache_available--;
          cache[key] = output;
        }
        dest.set(output, destOffset);
      };
    }
  };
}();
function isPDFFunction(v) {
  var fnDict;
  if ((typeof v === 'undefined' ? 'undefined' : _typeof(v)) !== 'object') {
    return false;
  } else if ((0, _primitives.isDict)(v)) {
    fnDict = v;
  } else if ((0, _primitives.isStream)(v)) {
    fnDict = v.dict;
  } else {
    return false;
  }
  return fnDict.has('FunctionType');
}
var PostScriptStack = function PostScriptStackClosure() {
  var MAX_STACK_SIZE = 100;
  function PostScriptStack(initialStack) {
    this.stack = !initialStack ? [] : Array.prototype.slice.call(initialStack, 0);
  }
  PostScriptStack.prototype = {
    push: function PostScriptStack_push(value) {
      if (this.stack.length >= MAX_STACK_SIZE) {
        throw new Error('PostScript function stack overflow.');
      }
      this.stack.push(value);
    },
    pop: function PostScriptStack_pop() {
      if (this.stack.length <= 0) {
        throw new Error('PostScript function stack underflow.');
      }
      return this.stack.pop();
    },
    copy: function PostScriptStack_copy(n) {
      if (this.stack.length + n >= MAX_STACK_SIZE) {
        throw new Error('PostScript function stack overflow.');
      }
      var stack = this.stack;
      for (var i = stack.length - n, j = n - 1; j >= 0; j--, i++) {
        stack.push(stack[i]);
      }
    },
    index: function PostScriptStack_index(n) {
      this.push(this.stack[this.stack.length - n - 1]);
    },
    roll: function PostScriptStack_roll(n, p) {
      var stack = this.stack;
      var l = stack.length - n;
      var r = stack.length - 1,
          c = l + (p - Math.floor(p / n) * n),
          i,
          j,
          t;
      for (i = l, j = r; i < j; i++, j--) {
        t = stack[i];
        stack[i] = stack[j];
        stack[j] = t;
      }
      for (i = l, j = c - 1; i < j; i++, j--) {
        t = stack[i];
        stack[i] = stack[j];
        stack[j] = t;
      }
      for (i = c, j = r; i < j; i++, j--) {
        t = stack[i];
        stack[i] = stack[j];
        stack[j] = t;
      }
    }
  };
  return PostScriptStack;
}();
var PostScriptEvaluator = function PostScriptEvaluatorClosure() {
  function PostScriptEvaluator(operators) {
    this.operators = operators;
  }
  PostScriptEvaluator.prototype = {
    execute: function PostScriptEvaluator_execute(initialStack) {
      var stack = new PostScriptStack(initialStack);
      var counter = 0;
      var operators = this.operators;
      var length = operators.length;
      var operator, a, b;
      while (counter < length) {
        operator = operators[counter++];
        if (typeof operator === 'number') {
          stack.push(operator);
          continue;
        }
        switch (operator) {
          case 'jz':
            b = stack.pop();
            a = stack.pop();
            if (!a) {
              counter = b;
            }
            break;
          case 'j':
            a = stack.pop();
            counter = a;
            break;
          case 'abs':
            a = stack.pop();
            stack.push(Math.abs(a));
            break;
          case 'add':
            b = stack.pop();
            a = stack.pop();
            stack.push(a + b);
            break;
          case 'and':
            b = stack.pop();
            a = stack.pop();
            if ((0, _util.isBool)(a) && (0, _util.isBool)(b)) {
              stack.push(a && b);
            } else {
              stack.push(a & b);
            }
            break;
          case 'atan':
            a = stack.pop();
            stack.push(Math.atan(a));
            break;
          case 'bitshift':
            b = stack.pop();
            a = stack.pop();
            if (a > 0) {
              stack.push(a << b);
            } else {
              stack.push(a >> b);
            }
            break;
          case 'ceiling':
            a = stack.pop();
            stack.push(Math.ceil(a));
            break;
          case 'copy':
            a = stack.pop();
            stack.copy(a);
            break;
          case 'cos':
            a = stack.pop();
            stack.push(Math.cos(a));
            break;
          case 'cvi':
            a = stack.pop() | 0;
            stack.push(a);
            break;
          case 'cvr':
            break;
          case 'div':
            b = stack.pop();
            a = stack.pop();
            stack.push(a / b);
            break;
          case 'dup':
            stack.copy(1);
            break;
          case 'eq':
            b = stack.pop();
            a = stack.pop();
            stack.push(a === b);
            break;
          case 'exch':
            stack.roll(2, 1);
            break;
          case 'exp':
            b = stack.pop();
            a = stack.pop();
            stack.push(Math.pow(a, b));
            break;
          case 'false':
            stack.push(false);
            break;
          case 'floor':
            a = stack.pop();
            stack.push(Math.floor(a));
            break;
          case 'ge':
            b = stack.pop();
            a = stack.pop();
            stack.push(a >= b);
            break;
          case 'gt':
            b = stack.pop();
            a = stack.pop();
            stack.push(a > b);
            break;
          case 'idiv':
            b = stack.pop();
            a = stack.pop();
            stack.push(a / b | 0);
            break;
          case 'index':
            a = stack.pop();
            stack.index(a);
            break;
          case 'le':
            b = stack.pop();
            a = stack.pop();
            stack.push(a <= b);
            break;
          case 'ln':
            a = stack.pop();
            stack.push(Math.log(a));
            break;
          case 'log':
            a = stack.pop();
            stack.push(Math.log(a) / Math.LN10);
            break;
          case 'lt':
            b = stack.pop();
            a = stack.pop();
            stack.push(a < b);
            break;
          case 'mod':
            b = stack.pop();
            a = stack.pop();
            stack.push(a % b);
            break;
          case 'mul':
            b = stack.pop();
            a = stack.pop();
            stack.push(a * b);
            break;
          case 'ne':
            b = stack.pop();
            a = stack.pop();
            stack.push(a !== b);
            break;
          case 'neg':
            a = stack.pop();
            stack.push(-a);
            break;
          case 'not':
            a = stack.pop();
            if ((0, _util.isBool)(a)) {
              stack.push(!a);
            } else {
              stack.push(~a);
            }
            break;
          case 'or':
            b = stack.pop();
            a = stack.pop();
            if ((0, _util.isBool)(a) && (0, _util.isBool)(b)) {
              stack.push(a || b);
            } else {
              stack.push(a | b);
            }
            break;
          case 'pop':
            stack.pop();
            break;
          case 'roll':
            b = stack.pop();
            a = stack.pop();
            stack.roll(a, b);
            break;
          case 'round':
            a = stack.pop();
            stack.push(Math.round(a));
            break;
          case 'sin':
            a = stack.pop();
            stack.push(Math.sin(a));
            break;
          case 'sqrt':
            a = stack.pop();
            stack.push(Math.sqrt(a));
            break;
          case 'sub':
            b = stack.pop();
            a = stack.pop();
            stack.push(a - b);
            break;
          case 'true':
            stack.push(true);
            break;
          case 'truncate':
            a = stack.pop();
            a = a < 0 ? Math.ceil(a) : Math.floor(a);
            stack.push(a);
            break;
          case 'xor':
            b = stack.pop();
            a = stack.pop();
            if ((0, _util.isBool)(a) && (0, _util.isBool)(b)) {
              stack.push(a !== b);
            } else {
              stack.push(a ^ b);
            }
            break;
          default:
            throw new _util.FormatError('Unknown operator ' + operator);
        }
      }
      return stack.stack;
    }
  };
  return PostScriptEvaluator;
}();
var PostScriptCompiler = function PostScriptCompilerClosure() {
  function AstNode(type) {
    this.type = type;
  }
  AstNode.prototype.visit = function (visitor) {
    throw new Error('abstract method');
  };
  function AstArgument(index, min, max) {
    AstNode.call(this, 'args');
    this.index = index;
    this.min = min;
    this.max = max;
  }
  AstArgument.prototype = Object.create(AstNode.prototype);
  AstArgument.prototype.visit = function (visitor) {
    visitor.visitArgument(this);
  };
  function AstLiteral(number) {
    AstNode.call(this, 'literal');
    this.number = number;
    this.min = number;
    this.max = number;
  }
  AstLiteral.prototype = Object.create(AstNode.prototype);
  AstLiteral.prototype.visit = function (visitor) {
    visitor.visitLiteral(this);
  };
  function AstBinaryOperation(op, arg1, arg2, min, max) {
    AstNode.call(this, 'binary');
    this.op = op;
    this.arg1 = arg1;
    this.arg2 = arg2;
    this.min = min;
    this.max = max;
  }
  AstBinaryOperation.prototype = Object.create(AstNode.prototype);
  AstBinaryOperation.prototype.visit = function (visitor) {
    visitor.visitBinaryOperation(this);
  };
  function AstMin(arg, max) {
    AstNode.call(this, 'max');
    this.arg = arg;
    this.min = arg.min;
    this.max = max;
  }
  AstMin.prototype = Object.create(AstNode.prototype);
  AstMin.prototype.visit = function (visitor) {
    visitor.visitMin(this);
  };
  function AstVariable(index, min, max) {
    AstNode.call(this, 'var');
    this.index = index;
    this.min = min;
    this.max = max;
  }
  AstVariable.prototype = Object.create(AstNode.prototype);
  AstVariable.prototype.visit = function (visitor) {
    visitor.visitVariable(this);
  };
  function AstVariableDefinition(variable, arg) {
    AstNode.call(this, 'definition');
    this.variable = variable;
    this.arg = arg;
  }
  AstVariableDefinition.prototype = Object.create(AstNode.prototype);
  AstVariableDefinition.prototype.visit = function (visitor) {
    visitor.visitVariableDefinition(this);
  };
  function ExpressionBuilderVisitor() {
    this.parts = [];
  }
  ExpressionBuilderVisitor.prototype = {
    visitArgument: function visitArgument(arg) {
      this.parts.push('Math.max(', arg.min, ', Math.min(', arg.max, ', src[srcOffset + ', arg.index, ']))');
    },
    visitVariable: function visitVariable(variable) {
      this.parts.push('v', variable.index);
    },
    visitLiteral: function visitLiteral(literal) {
      this.parts.push(literal.number);
    },
    visitBinaryOperation: function visitBinaryOperation(operation) {
      this.parts.push('(');
      operation.arg1.visit(this);
      this.parts.push(' ', operation.op, ' ');
      operation.arg2.visit(this);
      this.parts.push(')');
    },
    visitVariableDefinition: function visitVariableDefinition(definition) {
      this.parts.push('var ');
      definition.variable.visit(this);
      this.parts.push(' = ');
      definition.arg.visit(this);
      this.parts.push(';');
    },
    visitMin: function visitMin(max) {
      this.parts.push('Math.min(');
      max.arg.visit(this);
      this.parts.push(', ', max.max, ')');
    },
    toString: function toString() {
      return this.parts.join('');
    }
  };
  function buildAddOperation(num1, num2) {
    if (num2.type === 'literal' && num2.number === 0) {
      return num1;
    }
    if (num1.type === 'literal' && num1.number === 0) {
      return num2;
    }
    if (num2.type === 'literal' && num1.type === 'literal') {
      return new AstLiteral(num1.number + num2.number);
    }
    return new AstBinaryOperation('+', num1, num2, num1.min + num2.min, num1.max + num2.max);
  }
  function buildMulOperation(num1, num2) {
    if (num2.type === 'literal') {
      if (num2.number === 0) {
        return new AstLiteral(0);
      } else if (num2.number === 1) {
        return num1;
      } else if (num1.type === 'literal') {
        return new AstLiteral(num1.number * num2.number);
      }
    }
    if (num1.type === 'literal') {
      if (num1.number === 0) {
        return new AstLiteral(0);
      } else if (num1.number === 1) {
        return num2;
      }
    }
    var min = Math.min(num1.min * num2.min, num1.min * num2.max, num1.max * num2.min, num1.max * num2.max);
    var max = Math.max(num1.min * num2.min, num1.min * num2.max, num1.max * num2.min, num1.max * num2.max);
    return new AstBinaryOperation('*', num1, num2, min, max);
  }
  function buildSubOperation(num1, num2) {
    if (num2.type === 'literal') {
      if (num2.number === 0) {
        return num1;
      } else if (num1.type === 'literal') {
        return new AstLiteral(num1.number - num2.number);
      }
    }
    if (num2.type === 'binary' && num2.op === '-' && num1.type === 'literal' && num1.number === 1 && num2.arg1.type === 'literal' && num2.arg1.number === 1) {
      return num2.arg2;
    }
    return new AstBinaryOperation('-', num1, num2, num1.min - num2.max, num1.max - num2.min);
  }
  function buildMinOperation(num1, max) {
    if (num1.min >= max) {
      return new AstLiteral(max);
    } else if (num1.max <= max) {
      return num1;
    }
    return new AstMin(num1, max);
  }
  function PostScriptCompiler() {}
  PostScriptCompiler.prototype = {
    compile: function PostScriptCompiler_compile(code, domain, range) {
      var stack = [];
      var i, ii;
      var instructions = [];
      var inputSize = domain.length >> 1,
          outputSize = range.length >> 1;
      var lastRegister = 0;
      var n, j;
      var num1, num2, ast1, ast2, tmpVar, item;
      for (i = 0; i < inputSize; i++) {
        stack.push(new AstArgument(i, domain[i * 2], domain[i * 2 + 1]));
      }
      for (i = 0, ii = code.length; i < ii; i++) {
        item = code[i];
        if (typeof item === 'number') {
          stack.push(new AstLiteral(item));
          continue;
        }
        switch (item) {
          case 'add':
            if (stack.length < 2) {
              return null;
            }
            num2 = stack.pop();
            num1 = stack.pop();
            stack.push(buildAddOperation(num1, num2));
            break;
          case 'cvr':
            if (stack.length < 1) {
              return null;
            }
            break;
          case 'mul':
            if (stack.length < 2) {
              return null;
            }
            num2 = stack.pop();
            num1 = stack.pop();
            stack.push(buildMulOperation(num1, num2));
            break;
          case 'sub':
            if (stack.length < 2) {
              return null;
            }
            num2 = stack.pop();
            num1 = stack.pop();
            stack.push(buildSubOperation(num1, num2));
            break;
          case 'exch':
            if (stack.length < 2) {
              return null;
            }
            ast1 = stack.pop();
            ast2 = stack.pop();
            stack.push(ast1, ast2);
            break;
          case 'pop':
            if (stack.length < 1) {
              return null;
            }
            stack.pop();
            break;
          case 'index':
            if (stack.length < 1) {
              return null;
            }
            num1 = stack.pop();
            if (num1.type !== 'literal') {
              return null;
            }
            n = num1.number;
            if (n < 0 || (n | 0) !== n || stack.length < n) {
              return null;
            }
            ast1 = stack[stack.length - n - 1];
            if (ast1.type === 'literal' || ast1.type === 'var') {
              stack.push(ast1);
              break;
            }
            tmpVar = new AstVariable(lastRegister++, ast1.min, ast1.max);
            stack[stack.length - n - 1] = tmpVar;
            stack.push(tmpVar);
            instructions.push(new AstVariableDefinition(tmpVar, ast1));
            break;
          case 'dup':
            if (stack.length < 1) {
              return null;
            }
            if (typeof code[i + 1] === 'number' && code[i + 2] === 'gt' && code[i + 3] === i + 7 && code[i + 4] === 'jz' && code[i + 5] === 'pop' && code[i + 6] === code[i + 1]) {
              num1 = stack.pop();
              stack.push(buildMinOperation(num1, code[i + 1]));
              i += 6;
              break;
            }
            ast1 = stack[stack.length - 1];
            if (ast1.type === 'literal' || ast1.type === 'var') {
              stack.push(ast1);
              break;
            }
            tmpVar = new AstVariable(lastRegister++, ast1.min, ast1.max);
            stack[stack.length - 1] = tmpVar;
            stack.push(tmpVar);
            instructions.push(new AstVariableDefinition(tmpVar, ast1));
            break;
          case 'roll':
            if (stack.length < 2) {
              return null;
            }
            num2 = stack.pop();
            num1 = stack.pop();
            if (num2.type !== 'literal' || num1.type !== 'literal') {
              return null;
            }
            j = num2.number;
            n = num1.number;
            if (n <= 0 || (n | 0) !== n || (j | 0) !== j || stack.length < n) {
              return null;
            }
            j = (j % n + n) % n;
            if (j === 0) {
              break;
            }
            Array.prototype.push.apply(stack, stack.splice(stack.length - n, n - j));
            break;
          default:
            return null;
        }
      }
      if (stack.length !== outputSize) {
        return null;
      }
      var result = [];
      instructions.forEach(function (instruction) {
        var statementBuilder = new ExpressionBuilderVisitor();
        instruction.visit(statementBuilder);
        result.push(statementBuilder.toString());
      });
      stack.forEach(function (expr, i) {
        var statementBuilder = new ExpressionBuilderVisitor();
        expr.visit(statementBuilder);
        var min = range[i * 2],
            max = range[i * 2 + 1];
        var out = [statementBuilder.toString()];
        if (min > expr.min) {
          out.unshift('Math.max(', min, ', ');
          out.push(')');
        }
        if (max < expr.max) {
          out.unshift('Math.min(', max, ', ');
          out.push(')');
        }
        out.unshift('dest[destOffset + ', i, '] = ');
        out.push(';');
        result.push(out.join(''));
      });
      return result.join('\n');
    }
  };
  return PostScriptCompiler;
}();
exports.isPDFFunction = isPDFFunction;
exports.PDFFunction = PDFFunction;
exports.PostScriptEvaluator = PostScriptEvaluator;
exports.PostScriptCompiler = PostScriptCompiler;

/***/ }),
/* 8 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var getLookupTableFactory = __w_pdfjs_require__(0).getLookupTableFactory;
var getSpecialPUASymbols = getLookupTableFactory(function (t) {
 t[63721] = 0x00A9;
 t[63193] = 0x00A9;
 t[63720] = 0x00AE;
 t[63194] = 0x00AE;
 t[63722] = 0x2122;
 t[63195] = 0x2122;
 t[63729] = 0x23A7;
 t[63730] = 0x23A8;
 t[63731] = 0x23A9;
 t[63740] = 0x23AB;
 t[63741] = 0x23AC;
 t[63742] = 0x23AD;
 t[63726] = 0x23A1;
 t[63727] = 0x23A2;
 t[63728] = 0x23A3;
 t[63737] = 0x23A4;
 t[63738] = 0x23A5;
 t[63739] = 0x23A6;
 t[63723] = 0x239B;
 t[63724] = 0x239C;
 t[63725] = 0x239D;
 t[63734] = 0x239E;
 t[63735] = 0x239F;
 t[63736] = 0x23A0;
});
function mapSpecialUnicodeValues(code) {
 if (code >= 0xFFF0 && code <= 0xFFFF) {
  return 0;
 } else if (code >= 0xF600 && code <= 0xF8FF) {
  return getSpecialPUASymbols()[code] || code;
 }
 return code;
}
function getUnicodeForGlyph(name, glyphsUnicodeMap) {
 var unicode = glyphsUnicodeMap[name];
 if (unicode !== undefined) {
  return unicode;
 }
 if (!name) {
  return -1;
 }
 if (name[0] === 'u') {
  var nameLen = name.length, hexStr;
  if (nameLen === 7 && name[1] === 'n' && name[2] === 'i') {
   hexStr = name.substr(3);
  } else if (nameLen >= 5 && nameLen <= 7) {
   hexStr = name.substr(1);
  } else {
   return -1;
  }
  if (hexStr === hexStr.toUpperCase()) {
   unicode = parseInt(hexStr, 16);
   if (unicode >= 0) {
    return unicode;
   }
  }
 }
 return -1;
}
var UnicodeRanges = [
 {
  'begin': 0x0000,
  'end': 0x007F
 },
 {
  'begin': 0x0080,
  'end': 0x00FF
 },
 {
  'begin': 0x0100,
  'end': 0x017F
 },
 {
  'begin': 0x0180,
  'end': 0x024F
 },
 {
  'begin': 0x0250,
  'end': 0x02AF
 },
 {
  'begin': 0x02B0,
  'end': 0x02FF
 },
 {
  'begin': 0x0300,
  'end': 0x036F
 },
 {
  'begin': 0x0370,
  'end': 0x03FF
 },
 {
  'begin': 0x2C80,
  'end': 0x2CFF
 },
 {
  'begin': 0x0400,
  'end': 0x04FF
 },
 {
  'begin': 0x0530,
  'end': 0x058F
 },
 {
  'begin': 0x0590,
  'end': 0x05FF
 },
 {
  'begin': 0xA500,
  'end': 0xA63F
 },
 {
  'begin': 0x0600,
  'end': 0x06FF
 },
 {
  'begin': 0x07C0,
  'end': 0x07FF
 },
 {
  'begin': 0x0900,
  'end': 0x097F
 },
 {
  'begin': 0x0980,
  'end': 0x09FF
 },
 {
  'begin': 0x0A00,
  'end': 0x0A7F
 },
 {
  'begin': 0x0A80,
  'end': 0x0AFF
 },
 {
  'begin': 0x0B00,
  'end': 0x0B7F
 },
 {
  'begin': 0x0B80,
  'end': 0x0BFF
 },
 {
  'begin': 0x0C00,
  'end': 0x0C7F
 },
 {
  'begin': 0x0C80,
  'end': 0x0CFF
 },
 {
  'begin': 0x0D00,
  'end': 0x0D7F
 },
 {
  'begin': 0x0E00,
  'end': 0x0E7F
 },
 {
  'begin': 0x0E80,
  'end': 0x0EFF
 },
 {
  'begin': 0x10A0,
  'end': 0x10FF
 },
 {
  'begin': 0x1B00,
  'end': 0x1B7F
 },
 {
  'begin': 0x1100,
  'end': 0x11FF
 },
 {
  'begin': 0x1E00,
  'end': 0x1EFF
 },
 {
  'begin': 0x1F00,
  'end': 0x1FFF
 },
 {
  'begin': 0x2000,
  'end': 0x206F
 },
 {
  'begin': 0x2070,
  'end': 0x209F
 },
 {
  'begin': 0x20A0,
  'end': 0x20CF
 },
 {
  'begin': 0x20D0,
  'end': 0x20FF
 },
 {
  'begin': 0x2100,
  'end': 0x214F
 },
 {
  'begin': 0x2150,
  'end': 0x218F
 },
 {
  'begin': 0x2190,
  'end': 0x21FF
 },
 {
  'begin': 0x2200,
  'end': 0x22FF
 },
 {
  'begin': 0x2300,
  'end': 0x23FF
 },
 {
  'begin': 0x2400,
  'end': 0x243F
 },
 {
  'begin': 0x2440,
  'end': 0x245F
 },
 {
  'begin': 0x2460,
  'end': 0x24FF
 },
 {
  'begin': 0x2500,
  'end': 0x257F
 },
 {
  'begin': 0x2580,
  'end': 0x259F
 },
 {
  'begin': 0x25A0,
  'end': 0x25FF
 },
 {
  'begin': 0x2600,
  'end': 0x26FF
 },
 {
  'begin': 0x2700,
  'end': 0x27BF
 },
 {
  'begin': 0x3000,
  'end': 0x303F
 },
 {
  'begin': 0x3040,
  'end': 0x309F
 },
 {
  'begin': 0x30A0,
  'end': 0x30FF
 },
 {
  'begin': 0x3100,
  'end': 0x312F
 },
 {
  'begin': 0x3130,
  'end': 0x318F
 },
 {
  'begin': 0xA840,
  'end': 0xA87F
 },
 {
  'begin': 0x3200,
  'end': 0x32FF
 },
 {
  'begin': 0x3300,
  'end': 0x33FF
 },
 {
  'begin': 0xAC00,
  'end': 0xD7AF
 },
 {
  'begin': 0xD800,
  'end': 0xDFFF
 },
 {
  'begin': 0x10900,
  'end': 0x1091F
 },
 {
  'begin': 0x4E00,
  'end': 0x9FFF
 },
 {
  'begin': 0xE000,
  'end': 0xF8FF
 },
 {
  'begin': 0x31C0,
  'end': 0x31EF
 },
 {
  'begin': 0xFB00,
  'end': 0xFB4F
 },
 {
  'begin': 0xFB50,
  'end': 0xFDFF
 },
 {
  'begin': 0xFE20,
  'end': 0xFE2F
 },
 {
  'begin': 0xFE10,
  'end': 0xFE1F
 },
 {
  'begin': 0xFE50,
  'end': 0xFE6F
 },
 {
  'begin': 0xFE70,
  'end': 0xFEFF
 },
 {
  'begin': 0xFF00,
  'end': 0xFFEF
 },
 {
  'begin': 0xFFF0,
  'end': 0xFFFF
 },
 {
  'begin': 0x0F00,
  'end': 0x0FFF
 },
 {
  'begin': 0x0700,
  'end': 0x074F
 },
 {
  'begin': 0x0780,
  'end': 0x07BF
 },
 {
  'begin': 0x0D80,
  'end': 0x0DFF
 },
 {
  'begin': 0x1000,
  'end': 0x109F
 },
 {
  'begin': 0x1200,
  'end': 0x137F
 },
 {
  'begin': 0x13A0,
  'end': 0x13FF
 },
 {
  'begin': 0x1400,
  'end': 0x167F
 },
 {
  'begin': 0x1680,
  'end': 0x169F
 },
 {
  'begin': 0x16A0,
  'end': 0x16FF
 },
 {
  'begin': 0x1780,
  'end': 0x17FF
 },
 {
  'begin': 0x1800,
  'end': 0x18AF
 },
 {
  'begin': 0x2800,
  'end': 0x28FF
 },
 {
  'begin': 0xA000,
  'end': 0xA48F
 },
 {
  'begin': 0x1700,
  'end': 0x171F
 },
 {
  'begin': 0x10300,
  'end': 0x1032F
 },
 {
  'begin': 0x10330,
  'end': 0x1034F
 },
 {
  'begin': 0x10400,
  'end': 0x1044F
 },
 {
  'begin': 0x1D000,
  'end': 0x1D0FF
 },
 {
  'begin': 0x1D400,
  'end': 0x1D7FF
 },
 {
  'begin': 0xFF000,
  'end': 0xFFFFD
 },
 {
  'begin': 0xFE00,
  'end': 0xFE0F
 },
 {
  'begin': 0xE0000,
  'end': 0xE007F
 },
 {
  'begin': 0x1900,
  'end': 0x194F
 },
 {
  'begin': 0x1950,
  'end': 0x197F
 },
 {
  'begin': 0x1980,
  'end': 0x19DF
 },
 {
  'begin': 0x1A00,
  'end': 0x1A1F
 },
 {
  'begin': 0x2C00,
  'end': 0x2C5F
 },
 {
  'begin': 0x2D30,
  'end': 0x2D7F
 },
 {
  'begin': 0x4DC0,
  'end': 0x4DFF
 },
 {
  'begin': 0xA800,
  'end': 0xA82F
 },
 {
  'begin': 0x10000,
  'end': 0x1007F
 },
 {
  'begin': 0x10140,
  'end': 0x1018F
 },
 {
  'begin': 0x10380,
  'end': 0x1039F
 },
 {
  'begin': 0x103A0,
  'end': 0x103DF
 },
 {
  'begin': 0x10450,
  'end': 0x1047F
 },
 {
  'begin': 0x10480,
  'end': 0x104AF
 },
 {
  'begin': 0x10800,
  'end': 0x1083F
 },
 {
  'begin': 0x10A00,
  'end': 0x10A5F
 },
 {
  'begin': 0x1D300,
  'end': 0x1D35F
 },
 {
  'begin': 0x12000,
  'end': 0x123FF
 },
 {
  'begin': 0x1D360,
  'end': 0x1D37F
 },
 {
  'begin': 0x1B80,
  'end': 0x1BBF
 },
 {
  'begin': 0x1C00,
  'end': 0x1C4F
 },
 {
  'begin': 0x1C50,
  'end': 0x1C7F
 },
 {
  'begin': 0xA880,
  'end': 0xA8DF
 },
 {
  'begin': 0xA900,
  'end': 0xA92F
 },
 {
  'begin': 0xA930,
  'end': 0xA95F
 },
 {
  'begin': 0xAA00,
  'end': 0xAA5F
 },
 {
  'begin': 0x10190,
  'end': 0x101CF
 },
 {
  'begin': 0x101D0,
  'end': 0x101FF
 },
 {
  'begin': 0x102A0,
  'end': 0x102DF
 },
 {
  'begin': 0x1F030,
  'end': 0x1F09F
 }
];
function getUnicodeRangeFor(value) {
 for (var i = 0, ii = UnicodeRanges.length; i < ii; i++) {
  var range = UnicodeRanges[i];
  if (value >= range.begin && value < range.end) {
   return i;
  }
 }
 return -1;
}
function isRTLRangeFor(value) {
 var range = UnicodeRanges[13];
 if (value >= range.begin && value < range.end) {
  return true;
 }
 range = UnicodeRanges[11];
 if (value >= range.begin && value < range.end) {
  return true;
 }
 return false;
}
var getNormalizedUnicodes = getLookupTableFactory(function (t) {
 t['\u00A8'] = '\u0020\u0308';
 t['\u00AF'] = '\u0020\u0304';
 t['\u00B4'] = '\u0020\u0301';
 t['\u00B5'] = '\u03BC';
 t['\u00B8'] = '\u0020\u0327';
 t['\u0132'] = '\u0049\u004A';
 t['\u0133'] = '\u0069\u006A';
 t['\u013F'] = '\u004C\u00B7';
 t['\u0140'] = '\u006C\u00B7';
 t['\u0149'] = '\u02BC\u006E';
 t['\u017F'] = '\u0073';
 t['\u01C4'] = '\u0044\u017D';
 t['\u01C5'] = '\u0044\u017E';
 t['\u01C6'] = '\u0064\u017E';
 t['\u01C7'] = '\u004C\u004A';
 t['\u01C8'] = '\u004C\u006A';
 t['\u01C9'] = '\u006C\u006A';
 t['\u01CA'] = '\u004E\u004A';
 t['\u01CB'] = '\u004E\u006A';
 t['\u01CC'] = '\u006E\u006A';
 t['\u01F1'] = '\u0044\u005A';
 t['\u01F2'] = '\u0044\u007A';
 t['\u01F3'] = '\u0064\u007A';
 t['\u02D8'] = '\u0020\u0306';
 t['\u02D9'] = '\u0020\u0307';
 t['\u02DA'] = '\u0020\u030A';
 t['\u02DB'] = '\u0020\u0328';
 t['\u02DC'] = '\u0020\u0303';
 t['\u02DD'] = '\u0020\u030B';
 t['\u037A'] = '\u0020\u0345';
 t['\u0384'] = '\u0020\u0301';
 t['\u03D0'] = '\u03B2';
 t['\u03D1'] = '\u03B8';
 t['\u03D2'] = '\u03A5';
 t['\u03D5'] = '\u03C6';
 t['\u03D6'] = '\u03C0';
 t['\u03F0'] = '\u03BA';
 t['\u03F1'] = '\u03C1';
 t['\u03F2'] = '\u03C2';
 t['\u03F4'] = '\u0398';
 t['\u03F5'] = '\u03B5';
 t['\u03F9'] = '\u03A3';
 t['\u0587'] = '\u0565\u0582';
 t['\u0675'] = '\u0627\u0674';
 t['\u0676'] = '\u0648\u0674';
 t['\u0677'] = '\u06C7\u0674';
 t['\u0678'] = '\u064A\u0674';
 t['\u0E33'] = '\u0E4D\u0E32';
 t['\u0EB3'] = '\u0ECD\u0EB2';
 t['\u0EDC'] = '\u0EAB\u0E99';
 t['\u0EDD'] = '\u0EAB\u0EA1';
 t['\u0F77'] = '\u0FB2\u0F81';
 t['\u0F79'] = '\u0FB3\u0F81';
 t['\u1E9A'] = '\u0061\u02BE';
 t['\u1FBD'] = '\u0020\u0313';
 t['\u1FBF'] = '\u0020\u0313';
 t['\u1FC0'] = '\u0020\u0342';
 t['\u1FFE'] = '\u0020\u0314';
 t['\u2002'] = '\u0020';
 t['\u2003'] = '\u0020';
 t['\u2004'] = '\u0020';
 t['\u2005'] = '\u0020';
 t['\u2006'] = '\u0020';
 t['\u2008'] = '\u0020';
 t['\u2009'] = '\u0020';
 t['\u200A'] = '\u0020';
 t['\u2017'] = '\u0020\u0333';
 t['\u2024'] = '\u002E';
 t['\u2025'] = '\u002E\u002E';
 t['\u2026'] = '\u002E\u002E\u002E';
 t['\u2033'] = '\u2032\u2032';
 t['\u2034'] = '\u2032\u2032\u2032';
 t['\u2036'] = '\u2035\u2035';
 t['\u2037'] = '\u2035\u2035\u2035';
 t['\u203C'] = '\u0021\u0021';
 t['\u203E'] = '\u0020\u0305';
 t['\u2047'] = '\u003F\u003F';
 t['\u2048'] = '\u003F\u0021';
 t['\u2049'] = '\u0021\u003F';
 t['\u2057'] = '\u2032\u2032\u2032\u2032';
 t['\u205F'] = '\u0020';
 t['\u20A8'] = '\u0052\u0073';
 t['\u2100'] = '\u0061\u002F\u0063';
 t['\u2101'] = '\u0061\u002F\u0073';
 t['\u2103'] = '\u00B0\u0043';
 t['\u2105'] = '\u0063\u002F\u006F';
 t['\u2106'] = '\u0063\u002F\u0075';
 t['\u2107'] = '\u0190';
 t['\u2109'] = '\u00B0\u0046';
 t['\u2116'] = '\u004E\u006F';
 t['\u2121'] = '\u0054\u0045\u004C';
 t['\u2135'] = '\u05D0';
 t['\u2136'] = '\u05D1';
 t['\u2137'] = '\u05D2';
 t['\u2138'] = '\u05D3';
 t['\u213B'] = '\u0046\u0041\u0058';
 t['\u2160'] = '\u0049';
 t['\u2161'] = '\u0049\u0049';
 t['\u2162'] = '\u0049\u0049\u0049';
 t['\u2163'] = '\u0049\u0056';
 t['\u2164'] = '\u0056';
 t['\u2165'] = '\u0056\u0049';
 t['\u2166'] = '\u0056\u0049\u0049';
 t['\u2167'] = '\u0056\u0049\u0049\u0049';
 t['\u2168'] = '\u0049\u0058';
 t['\u2169'] = '\u0058';
 t['\u216A'] = '\u0058\u0049';
 t['\u216B'] = '\u0058\u0049\u0049';
 t['\u216C'] = '\u004C';
 t['\u216D'] = '\u0043';
 t['\u216E'] = '\u0044';
 t['\u216F'] = '\u004D';
 t['\u2170'] = '\u0069';
 t['\u2171'] = '\u0069\u0069';
 t['\u2172'] = '\u0069\u0069\u0069';
 t['\u2173'] = '\u0069\u0076';
 t['\u2174'] = '\u0076';
 t['\u2175'] = '\u0076\u0069';
 t['\u2176'] = '\u0076\u0069\u0069';
 t['\u2177'] = '\u0076\u0069\u0069\u0069';
 t['\u2178'] = '\u0069\u0078';
 t['\u2179'] = '\u0078';
 t['\u217A'] = '\u0078\u0069';
 t['\u217B'] = '\u0078\u0069\u0069';
 t['\u217C'] = '\u006C';
 t['\u217D'] = '\u0063';
 t['\u217E'] = '\u0064';
 t['\u217F'] = '\u006D';
 t['\u222C'] = '\u222B\u222B';
 t['\u222D'] = '\u222B\u222B\u222B';
 t['\u222F'] = '\u222E\u222E';
 t['\u2230'] = '\u222E\u222E\u222E';
 t['\u2474'] = '\u0028\u0031\u0029';
 t['\u2475'] = '\u0028\u0032\u0029';
 t['\u2476'] = '\u0028\u0033\u0029';
 t['\u2477'] = '\u0028\u0034\u0029';
 t['\u2478'] = '\u0028\u0035\u0029';
 t['\u2479'] = '\u0028\u0036\u0029';
 t['\u247A'] = '\u0028\u0037\u0029';
 t['\u247B'] = '\u0028\u0038\u0029';
 t['\u247C'] = '\u0028\u0039\u0029';
 t['\u247D'] = '\u0028\u0031\u0030\u0029';
 t['\u247E'] = '\u0028\u0031\u0031\u0029';
 t['\u247F'] = '\u0028\u0031\u0032\u0029';
 t['\u2480'] = '\u0028\u0031\u0033\u0029';
 t['\u2481'] = '\u0028\u0031\u0034\u0029';
 t['\u2482'] = '\u0028\u0031\u0035\u0029';
 t['\u2483'] = '\u0028\u0031\u0036\u0029';
 t['\u2484'] = '\u0028\u0031\u0037\u0029';
 t['\u2485'] = '\u0028\u0031\u0038\u0029';
 t['\u2486'] = '\u0028\u0031\u0039\u0029';
 t['\u2487'] = '\u0028\u0032\u0030\u0029';
 t['\u2488'] = '\u0031\u002E';
 t['\u2489'] = '\u0032\u002E';
 t['\u248A'] = '\u0033\u002E';
 t['\u248B'] = '\u0034\u002E';
 t['\u248C'] = '\u0035\u002E';
 t['\u248D'] = '\u0036\u002E';
 t['\u248E'] = '\u0037\u002E';
 t['\u248F'] = '\u0038\u002E';
 t['\u2490'] = '\u0039\u002E';
 t['\u2491'] = '\u0031\u0030\u002E';
 t['\u2492'] = '\u0031\u0031\u002E';
 t['\u2493'] = '\u0031\u0032\u002E';
 t['\u2494'] = '\u0031\u0033\u002E';
 t['\u2495'] = '\u0031\u0034\u002E';
 t['\u2496'] = '\u0031\u0035\u002E';
 t['\u2497'] = '\u0031\u0036\u002E';
 t['\u2498'] = '\u0031\u0037\u002E';
 t['\u2499'] = '\u0031\u0038\u002E';
 t['\u249A'] = '\u0031\u0039\u002E';
 t['\u249B'] = '\u0032\u0030\u002E';
 t['\u249C'] = '\u0028\u0061\u0029';
 t['\u249D'] = '\u0028\u0062\u0029';
 t['\u249E'] = '\u0028\u0063\u0029';
 t['\u249F'] = '\u0028\u0064\u0029';
 t['\u24A0'] = '\u0028\u0065\u0029';
 t['\u24A1'] = '\u0028\u0066\u0029';
 t['\u24A2'] = '\u0028\u0067\u0029';
 t['\u24A3'] = '\u0028\u0068\u0029';
 t['\u24A4'] = '\u0028\u0069\u0029';
 t['\u24A5'] = '\u0028\u006A\u0029';
 t['\u24A6'] = '\u0028\u006B\u0029';
 t['\u24A7'] = '\u0028\u006C\u0029';
 t['\u24A8'] = '\u0028\u006D\u0029';
 t['\u24A9'] = '\u0028\u006E\u0029';
 t['\u24AA'] = '\u0028\u006F\u0029';
 t['\u24AB'] = '\u0028\u0070\u0029';
 t['\u24AC'] = '\u0028\u0071\u0029';
 t['\u24AD'] = '\u0028\u0072\u0029';
 t['\u24AE'] = '\u0028\u0073\u0029';
 t['\u24AF'] = '\u0028\u0074\u0029';
 t['\u24B0'] = '\u0028\u0075\u0029';
 t['\u24B1'] = '\u0028\u0076\u0029';
 t['\u24B2'] = '\u0028\u0077\u0029';
 t['\u24B3'] = '\u0028\u0078\u0029';
 t['\u24B4'] = '\u0028\u0079\u0029';
 t['\u24B5'] = '\u0028\u007A\u0029';
 t['\u2A0C'] = '\u222B\u222B\u222B\u222B';
 t['\u2A74'] = '\u003A\u003A\u003D';
 t['\u2A75'] = '\u003D\u003D';
 t['\u2A76'] = '\u003D\u003D\u003D';
 t['\u2E9F'] = '\u6BCD';
 t['\u2EF3'] = '\u9F9F';
 t['\u2F00'] = '\u4E00';
 t['\u2F01'] = '\u4E28';
 t['\u2F02'] = '\u4E36';
 t['\u2F03'] = '\u4E3F';
 t['\u2F04'] = '\u4E59';
 t['\u2F05'] = '\u4E85';
 t['\u2F06'] = '\u4E8C';
 t['\u2F07'] = '\u4EA0';
 t['\u2F08'] = '\u4EBA';
 t['\u2F09'] = '\u513F';
 t['\u2F0A'] = '\u5165';
 t['\u2F0B'] = '\u516B';
 t['\u2F0C'] = '\u5182';
 t['\u2F0D'] = '\u5196';
 t['\u2F0E'] = '\u51AB';
 t['\u2F0F'] = '\u51E0';
 t['\u2F10'] = '\u51F5';
 t['\u2F11'] = '\u5200';
 t['\u2F12'] = '\u529B';
 t['\u2F13'] = '\u52F9';
 t['\u2F14'] = '\u5315';
 t['\u2F15'] = '\u531A';
 t['\u2F16'] = '\u5338';
 t['\u2F17'] = '\u5341';
 t['\u2F18'] = '\u535C';
 t['\u2F19'] = '\u5369';
 t['\u2F1A'] = '\u5382';
 t['\u2F1B'] = '\u53B6';
 t['\u2F1C'] = '\u53C8';
 t['\u2F1D'] = '\u53E3';
 t['\u2F1E'] = '\u56D7';
 t['\u2F1F'] = '\u571F';
 t['\u2F20'] = '\u58EB';
 t['\u2F21'] = '\u5902';
 t['\u2F22'] = '\u590A';
 t['\u2F23'] = '\u5915';
 t['\u2F24'] = '\u5927';
 t['\u2F25'] = '\u5973';
 t['\u2F26'] = '\u5B50';
 t['\u2F27'] = '\u5B80';
 t['\u2F28'] = '\u5BF8';
 t['\u2F29'] = '\u5C0F';
 t['\u2F2A'] = '\u5C22';
 t['\u2F2B'] = '\u5C38';
 t['\u2F2C'] = '\u5C6E';
 t['\u2F2D'] = '\u5C71';
 t['\u2F2E'] = '\u5DDB';
 t['\u2F2F'] = '\u5DE5';
 t['\u2F30'] = '\u5DF1';
 t['\u2F31'] = '\u5DFE';
 t['\u2F32'] = '\u5E72';
 t['\u2F33'] = '\u5E7A';
 t['\u2F34'] = '\u5E7F';
 t['\u2F35'] = '\u5EF4';
 t['\u2F36'] = '\u5EFE';
 t['\u2F37'] = '\u5F0B';
 t['\u2F38'] = '\u5F13';
 t['\u2F39'] = '\u5F50';
 t['\u2F3A'] = '\u5F61';
 t['\u2F3B'] = '\u5F73';
 t['\u2F3C'] = '\u5FC3';
 t['\u2F3D'] = '\u6208';
 t['\u2F3E'] = '\u6236';
 t['\u2F3F'] = '\u624B';
 t['\u2F40'] = '\u652F';
 t['\u2F41'] = '\u6534';
 t['\u2F42'] = '\u6587';
 t['\u2F43'] = '\u6597';
 t['\u2F44'] = '\u65A4';
 t['\u2F45'] = '\u65B9';
 t['\u2F46'] = '\u65E0';
 t['\u2F47'] = '\u65E5';
 t['\u2F48'] = '\u66F0';
 t['\u2F49'] = '\u6708';
 t['\u2F4A'] = '\u6728';
 t['\u2F4B'] = '\u6B20';
 t['\u2F4C'] = '\u6B62';
 t['\u2F4D'] = '\u6B79';
 t['\u2F4E'] = '\u6BB3';
 t['\u2F4F'] = '\u6BCB';
 t['\u2F50'] = '\u6BD4';
 t['\u2F51'] = '\u6BDB';
 t['\u2F52'] = '\u6C0F';
 t['\u2F53'] = '\u6C14';
 t['\u2F54'] = '\u6C34';
 t['\u2F55'] = '\u706B';
 t['\u2F56'] = '\u722A';
 t['\u2F57'] = '\u7236';
 t['\u2F58'] = '\u723B';
 t['\u2F59'] = '\u723F';
 t['\u2F5A'] = '\u7247';
 t['\u2F5B'] = '\u7259';
 t['\u2F5C'] = '\u725B';
 t['\u2F5D'] = '\u72AC';
 t['\u2F5E'] = '\u7384';
 t['\u2F5F'] = '\u7389';
 t['\u2F60'] = '\u74DC';
 t['\u2F61'] = '\u74E6';
 t['\u2F62'] = '\u7518';
 t['\u2F63'] = '\u751F';
 t['\u2F64'] = '\u7528';
 t['\u2F65'] = '\u7530';
 t['\u2F66'] = '\u758B';
 t['\u2F67'] = '\u7592';
 t['\u2F68'] = '\u7676';
 t['\u2F69'] = '\u767D';
 t['\u2F6A'] = '\u76AE';
 t['\u2F6B'] = '\u76BF';
 t['\u2F6C'] = '\u76EE';
 t['\u2F6D'] = '\u77DB';
 t['\u2F6E'] = '\u77E2';
 t['\u2F6F'] = '\u77F3';
 t['\u2F70'] = '\u793A';
 t['\u2F71'] = '\u79B8';
 t['\u2F72'] = '\u79BE';
 t['\u2F73'] = '\u7A74';
 t['\u2F74'] = '\u7ACB';
 t['\u2F75'] = '\u7AF9';
 t['\u2F76'] = '\u7C73';
 t['\u2F77'] = '\u7CF8';
 t['\u2F78'] = '\u7F36';
 t['\u2F79'] = '\u7F51';
 t['\u2F7A'] = '\u7F8A';
 t['\u2F7B'] = '\u7FBD';
 t['\u2F7C'] = '\u8001';
 t['\u2F7D'] = '\u800C';
 t['\u2F7E'] = '\u8012';
 t['\u2F7F'] = '\u8033';
 t['\u2F80'] = '\u807F';
 t['\u2F81'] = '\u8089';
 t['\u2F82'] = '\u81E3';
 t['\u2F83'] = '\u81EA';
 t['\u2F84'] = '\u81F3';
 t['\u2F85'] = '\u81FC';
 t['\u2F86'] = '\u820C';
 t['\u2F87'] = '\u821B';
 t['\u2F88'] = '\u821F';
 t['\u2F89'] = '\u826E';
 t['\u2F8A'] = '\u8272';
 t['\u2F8B'] = '\u8278';
 t['\u2F8C'] = '\u864D';
 t['\u2F8D'] = '\u866B';
 t['\u2F8E'] = '\u8840';
 t['\u2F8F'] = '\u884C';
 t['\u2F90'] = '\u8863';
 t['\u2F91'] = '\u897E';
 t['\u2F92'] = '\u898B';
 t['\u2F93'] = '\u89D2';
 t['\u2F94'] = '\u8A00';
 t['\u2F95'] = '\u8C37';
 t['\u2F96'] = '\u8C46';
 t['\u2F97'] = '\u8C55';
 t['\u2F98'] = '\u8C78';
 t['\u2F99'] = '\u8C9D';
 t['\u2F9A'] = '\u8D64';
 t['\u2F9B'] = '\u8D70';
 t['\u2F9C'] = '\u8DB3';
 t['\u2F9D'] = '\u8EAB';
 t['\u2F9E'] = '\u8ECA';
 t['\u2F9F'] = '\u8F9B';
 t['\u2FA0'] = '\u8FB0';
 t['\u2FA1'] = '\u8FB5';
 t['\u2FA2'] = '\u9091';
 t['\u2FA3'] = '\u9149';
 t['\u2FA4'] = '\u91C6';
 t['\u2FA5'] = '\u91CC';
 t['\u2FA6'] = '\u91D1';
 t['\u2FA7'] = '\u9577';
 t['\u2FA8'] = '\u9580';
 t['\u2FA9'] = '\u961C';
 t['\u2FAA'] = '\u96B6';
 t['\u2FAB'] = '\u96B9';
 t['\u2FAC'] = '\u96E8';
 t['\u2FAD'] = '\u9751';
 t['\u2FAE'] = '\u975E';
 t['\u2FAF'] = '\u9762';
 t['\u2FB0'] = '\u9769';
 t['\u2FB1'] = '\u97CB';
 t['\u2FB2'] = '\u97ED';
 t['\u2FB3'] = '\u97F3';
 t['\u2FB4'] = '\u9801';
 t['\u2FB5'] = '\u98A8';
 t['\u2FB6'] = '\u98DB';
 t['\u2FB7'] = '\u98DF';
 t['\u2FB8'] = '\u9996';
 t['\u2FB9'] = '\u9999';
 t['\u2FBA'] = '\u99AC';
 t['\u2FBB'] = '\u9AA8';
 t['\u2FBC'] = '\u9AD8';
 t['\u2FBD'] = '\u9ADF';
 t['\u2FBE'] = '\u9B25';
 t['\u2FBF'] = '\u9B2F';
 t['\u2FC0'] = '\u9B32';
 t['\u2FC1'] = '\u9B3C';
 t['\u2FC2'] = '\u9B5A';
 t['\u2FC3'] = '\u9CE5';
 t['\u2FC4'] = '\u9E75';
 t['\u2FC5'] = '\u9E7F';
 t['\u2FC6'] = '\u9EA5';
 t['\u2FC7'] = '\u9EBB';
 t['\u2FC8'] = '\u9EC3';
 t['\u2FC9'] = '\u9ECD';
 t['\u2FCA'] = '\u9ED1';
 t['\u2FCB'] = '\u9EF9';
 t['\u2FCC'] = '\u9EFD';
 t['\u2FCD'] = '\u9F0E';
 t['\u2FCE'] = '\u9F13';
 t['\u2FCF'] = '\u9F20';
 t['\u2FD0'] = '\u9F3B';
 t['\u2FD1'] = '\u9F4A';
 t['\u2FD2'] = '\u9F52';
 t['\u2FD3'] = '\u9F8D';
 t['\u2FD4'] = '\u9F9C';
 t['\u2FD5'] = '\u9FA0';
 t['\u3036'] = '\u3012';
 t['\u3038'] = '\u5341';
 t['\u3039'] = '\u5344';
 t['\u303A'] = '\u5345';
 t['\u309B'] = '\u0020\u3099';
 t['\u309C'] = '\u0020\u309A';
 t['\u3131'] = '\u1100';
 t['\u3132'] = '\u1101';
 t['\u3133'] = '\u11AA';
 t['\u3134'] = '\u1102';
 t['\u3135'] = '\u11AC';
 t['\u3136'] = '\u11AD';
 t['\u3137'] = '\u1103';
 t['\u3138'] = '\u1104';
 t['\u3139'] = '\u1105';
 t['\u313A'] = '\u11B0';
 t['\u313B'] = '\u11B1';
 t['\u313C'] = '\u11B2';
 t['\u313D'] = '\u11B3';
 t['\u313E'] = '\u11B4';
 t['\u313F'] = '\u11B5';
 t['\u3140'] = '\u111A';
 t['\u3141'] = '\u1106';
 t['\u3142'] = '\u1107';
 t['\u3143'] = '\u1108';
 t['\u3144'] = '\u1121';
 t['\u3145'] = '\u1109';
 t['\u3146'] = '\u110A';
 t['\u3147'] = '\u110B';
 t['\u3148'] = '\u110C';
 t['\u3149'] = '\u110D';
 t['\u314A'] = '\u110E';
 t['\u314B'] = '\u110F';
 t['\u314C'] = '\u1110';
 t['\u314D'] = '\u1111';
 t['\u314E'] = '\u1112';
 t['\u314F'] = '\u1161';
 t['\u3150'] = '\u1162';
 t['\u3151'] = '\u1163';
 t['\u3152'] = '\u1164';
 t['\u3153'] = '\u1165';
 t['\u3154'] = '\u1166';
 t['\u3155'] = '\u1167';
 t['\u3156'] = '\u1168';
 t['\u3157'] = '\u1169';
 t['\u3158'] = '\u116A';
 t['\u3159'] = '\u116B';
 t['\u315A'] = '\u116C';
 t['\u315B'] = '\u116D';
 t['\u315C'] = '\u116E';
 t['\u315D'] = '\u116F';
 t['\u315E'] = '\u1170';
 t['\u315F'] = '\u1171';
 t['\u3160'] = '\u1172';
 t['\u3161'] = '\u1173';
 t['\u3162'] = '\u1174';
 t['\u3163'] = '\u1175';
 t['\u3164'] = '\u1160';
 t['\u3165'] = '\u1114';
 t['\u3166'] = '\u1115';
 t['\u3167'] = '\u11C7';
 t['\u3168'] = '\u11C8';
 t['\u3169'] = '\u11CC';
 t['\u316A'] = '\u11CE';
 t['\u316B'] = '\u11D3';
 t['\u316C'] = '\u11D7';
 t['\u316D'] = '\u11D9';
 t['\u316E'] = '\u111C';
 t['\u316F'] = '\u11DD';
 t['\u3170'] = '\u11DF';
 t['\u3171'] = '\u111D';
 t['\u3172'] = '\u111E';
 t['\u3173'] = '\u1120';
 t['\u3174'] = '\u1122';
 t['\u3175'] = '\u1123';
 t['\u3176'] = '\u1127';
 t['\u3177'] = '\u1129';
 t['\u3178'] = '\u112B';
 t['\u3179'] = '\u112C';
 t['\u317A'] = '\u112D';
 t['\u317B'] = '\u112E';
 t['\u317C'] = '\u112F';
 t['\u317D'] = '\u1132';
 t['\u317E'] = '\u1136';
 t['\u317F'] = '\u1140';
 t['\u3180'] = '\u1147';
 t['\u3181'] = '\u114C';
 t['\u3182'] = '\u11F1';
 t['\u3183'] = '\u11F2';
 t['\u3184'] = '\u1157';
 t['\u3185'] = '\u1158';
 t['\u3186'] = '\u1159';
 t['\u3187'] = '\u1184';
 t['\u3188'] = '\u1185';
 t['\u3189'] = '\u1188';
 t['\u318A'] = '\u1191';
 t['\u318B'] = '\u1192';
 t['\u318C'] = '\u1194';
 t['\u318D'] = '\u119E';
 t['\u318E'] = '\u11A1';
 t['\u3200'] = '\u0028\u1100\u0029';
 t['\u3201'] = '\u0028\u1102\u0029';
 t['\u3202'] = '\u0028\u1103\u0029';
 t['\u3203'] = '\u0028\u1105\u0029';
 t['\u3204'] = '\u0028\u1106\u0029';
 t['\u3205'] = '\u0028\u1107\u0029';
 t['\u3206'] = '\u0028\u1109\u0029';
 t['\u3207'] = '\u0028\u110B\u0029';
 t['\u3208'] = '\u0028\u110C\u0029';
 t['\u3209'] = '\u0028\u110E\u0029';
 t['\u320A'] = '\u0028\u110F\u0029';
 t['\u320B'] = '\u0028\u1110\u0029';
 t['\u320C'] = '\u0028\u1111\u0029';
 t['\u320D'] = '\u0028\u1112\u0029';
 t['\u320E'] = '\u0028\u1100\u1161\u0029';
 t['\u320F'] = '\u0028\u1102\u1161\u0029';
 t['\u3210'] = '\u0028\u1103\u1161\u0029';
 t['\u3211'] = '\u0028\u1105\u1161\u0029';
 t['\u3212'] = '\u0028\u1106\u1161\u0029';
 t['\u3213'] = '\u0028\u1107\u1161\u0029';
 t['\u3214'] = '\u0028\u1109\u1161\u0029';
 t['\u3215'] = '\u0028\u110B\u1161\u0029';
 t['\u3216'] = '\u0028\u110C\u1161\u0029';
 t['\u3217'] = '\u0028\u110E\u1161\u0029';
 t['\u3218'] = '\u0028\u110F\u1161\u0029';
 t['\u3219'] = '\u0028\u1110\u1161\u0029';
 t['\u321A'] = '\u0028\u1111\u1161\u0029';
 t['\u321B'] = '\u0028\u1112\u1161\u0029';
 t['\u321C'] = '\u0028\u110C\u116E\u0029';
 t['\u321D'] = '\u0028\u110B\u1169\u110C\u1165\u11AB\u0029';
 t['\u321E'] = '\u0028\u110B\u1169\u1112\u116E\u0029';
 t['\u3220'] = '\u0028\u4E00\u0029';
 t['\u3221'] = '\u0028\u4E8C\u0029';
 t['\u3222'] = '\u0028\u4E09\u0029';
 t['\u3223'] = '\u0028\u56DB\u0029';
 t['\u3224'] = '\u0028\u4E94\u0029';
 t['\u3225'] = '\u0028\u516D\u0029';
 t['\u3226'] = '\u0028\u4E03\u0029';
 t['\u3227'] = '\u0028\u516B\u0029';
 t['\u3228'] = '\u0028\u4E5D\u0029';
 t['\u3229'] = '\u0028\u5341\u0029';
 t['\u322A'] = '\u0028\u6708\u0029';
 t['\u322B'] = '\u0028\u706B\u0029';
 t['\u322C'] = '\u0028\u6C34\u0029';
 t['\u322D'] = '\u0028\u6728\u0029';
 t['\u322E'] = '\u0028\u91D1\u0029';
 t['\u322F'] = '\u0028\u571F\u0029';
 t['\u3230'] = '\u0028\u65E5\u0029';
 t['\u3231'] = '\u0028\u682A\u0029';
 t['\u3232'] = '\u0028\u6709\u0029';
 t['\u3233'] = '\u0028\u793E\u0029';
 t['\u3234'] = '\u0028\u540D\u0029';
 t['\u3235'] = '\u0028\u7279\u0029';
 t['\u3236'] = '\u0028\u8CA1\u0029';
 t['\u3237'] = '\u0028\u795D\u0029';
 t['\u3238'] = '\u0028\u52B4\u0029';
 t['\u3239'] = '\u0028\u4EE3\u0029';
 t['\u323A'] = '\u0028\u547C\u0029';
 t['\u323B'] = '\u0028\u5B66\u0029';
 t['\u323C'] = '\u0028\u76E3\u0029';
 t['\u323D'] = '\u0028\u4F01\u0029';
 t['\u323E'] = '\u0028\u8CC7\u0029';
 t['\u323F'] = '\u0028\u5354\u0029';
 t['\u3240'] = '\u0028\u796D\u0029';
 t['\u3241'] = '\u0028\u4F11\u0029';
 t['\u3242'] = '\u0028\u81EA\u0029';
 t['\u3243'] = '\u0028\u81F3\u0029';
 t['\u32C0'] = '\u0031\u6708';
 t['\u32C1'] = '\u0032\u6708';
 t['\u32C2'] = '\u0033\u6708';
 t['\u32C3'] = '\u0034\u6708';
 t['\u32C4'] = '\u0035\u6708';
 t['\u32C5'] = '\u0036\u6708';
 t['\u32C6'] = '\u0037\u6708';
 t['\u32C7'] = '\u0038\u6708';
 t['\u32C8'] = '\u0039\u6708';
 t['\u32C9'] = '\u0031\u0030\u6708';
 t['\u32CA'] = '\u0031\u0031\u6708';
 t['\u32CB'] = '\u0031\u0032\u6708';
 t['\u3358'] = '\u0030\u70B9';
 t['\u3359'] = '\u0031\u70B9';
 t['\u335A'] = '\u0032\u70B9';
 t['\u335B'] = '\u0033\u70B9';
 t['\u335C'] = '\u0034\u70B9';
 t['\u335D'] = '\u0035\u70B9';
 t['\u335E'] = '\u0036\u70B9';
 t['\u335F'] = '\u0037\u70B9';
 t['\u3360'] = '\u0038\u70B9';
 t['\u3361'] = '\u0039\u70B9';
 t['\u3362'] = '\u0031\u0030\u70B9';
 t['\u3363'] = '\u0031\u0031\u70B9';
 t['\u3364'] = '\u0031\u0032\u70B9';
 t['\u3365'] = '\u0031\u0033\u70B9';
 t['\u3366'] = '\u0031\u0034\u70B9';
 t['\u3367'] = '\u0031\u0035\u70B9';
 t['\u3368'] = '\u0031\u0036\u70B9';
 t['\u3369'] = '\u0031\u0037\u70B9';
 t['\u336A'] = '\u0031\u0038\u70B9';
 t['\u336B'] = '\u0031\u0039\u70B9';
 t['\u336C'] = '\u0032\u0030\u70B9';
 t['\u336D'] = '\u0032\u0031\u70B9';
 t['\u336E'] = '\u0032\u0032\u70B9';
 t['\u336F'] = '\u0032\u0033\u70B9';
 t['\u3370'] = '\u0032\u0034\u70B9';
 t['\u33E0'] = '\u0031\u65E5';
 t['\u33E1'] = '\u0032\u65E5';
 t['\u33E2'] = '\u0033\u65E5';
 t['\u33E3'] = '\u0034\u65E5';
 t['\u33E4'] = '\u0035\u65E5';
 t['\u33E5'] = '\u0036\u65E5';
 t['\u33E6'] = '\u0037\u65E5';
 t['\u33E7'] = '\u0038\u65E5';
 t['\u33E8'] = '\u0039\u65E5';
 t['\u33E9'] = '\u0031\u0030\u65E5';
 t['\u33EA'] = '\u0031\u0031\u65E5';
 t['\u33EB'] = '\u0031\u0032\u65E5';
 t['\u33EC'] = '\u0031\u0033\u65E5';
 t['\u33ED'] = '\u0031\u0034\u65E5';
 t['\u33EE'] = '\u0031\u0035\u65E5';
 t['\u33EF'] = '\u0031\u0036\u65E5';
 t['\u33F0'] = '\u0031\u0037\u65E5';
 t['\u33F1'] = '\u0031\u0038\u65E5';
 t['\u33F2'] = '\u0031\u0039\u65E5';
 t['\u33F3'] = '\u0032\u0030\u65E5';
 t['\u33F4'] = '\u0032\u0031\u65E5';
 t['\u33F5'] = '\u0032\u0032\u65E5';
 t['\u33F6'] = '\u0032\u0033\u65E5';
 t['\u33F7'] = '\u0032\u0034\u65E5';
 t['\u33F8'] = '\u0032\u0035\u65E5';
 t['\u33F9'] = '\u0032\u0036\u65E5';
 t['\u33FA'] = '\u0032\u0037\u65E5';
 t['\u33FB'] = '\u0032\u0038\u65E5';
 t['\u33FC'] = '\u0032\u0039\u65E5';
 t['\u33FD'] = '\u0033\u0030\u65E5';
 t['\u33FE'] = '\u0033\u0031\u65E5';
 t['\uFB00'] = '\u0066\u0066';
 t['\uFB01'] = '\u0066\u0069';
 t['\uFB02'] = '\u0066\u006C';
 t['\uFB03'] = '\u0066\u0066\u0069';
 t['\uFB04'] = '\u0066\u0066\u006C';
 t['\uFB05'] = '\u017F\u0074';
 t['\uFB06'] = '\u0073\u0074';
 t['\uFB13'] = '\u0574\u0576';
 t['\uFB14'] = '\u0574\u0565';
 t['\uFB15'] = '\u0574\u056B';
 t['\uFB16'] = '\u057E\u0576';
 t['\uFB17'] = '\u0574\u056D';
 t['\uFB4F'] = '\u05D0\u05DC';
 t['\uFB50'] = '\u0671';
 t['\uFB51'] = '\u0671';
 t['\uFB52'] = '\u067B';
 t['\uFB53'] = '\u067B';
 t['\uFB54'] = '\u067B';
 t['\uFB55'] = '\u067B';
 t['\uFB56'] = '\u067E';
 t['\uFB57'] = '\u067E';
 t['\uFB58'] = '\u067E';
 t['\uFB59'] = '\u067E';
 t['\uFB5A'] = '\u0680';
 t['\uFB5B'] = '\u0680';
 t['\uFB5C'] = '\u0680';
 t['\uFB5D'] = '\u0680';
 t['\uFB5E'] = '\u067A';
 t['\uFB5F'] = '\u067A';
 t['\uFB60'] = '\u067A';
 t['\uFB61'] = '\u067A';
 t['\uFB62'] = '\u067F';
 t['\uFB63'] = '\u067F';
 t['\uFB64'] = '\u067F';
 t['\uFB65'] = '\u067F';
 t['\uFB66'] = '\u0679';
 t['\uFB67'] = '\u0679';
 t['\uFB68'] = '\u0679';
 t['\uFB69'] = '\u0679';
 t['\uFB6A'] = '\u06A4';
 t['\uFB6B'] = '\u06A4';
 t['\uFB6C'] = '\u06A4';
 t['\uFB6D'] = '\u06A4';
 t['\uFB6E'] = '\u06A6';
 t['\uFB6F'] = '\u06A6';
 t['\uFB70'] = '\u06A6';
 t['\uFB71'] = '\u06A6';
 t['\uFB72'] = '\u0684';
 t['\uFB73'] = '\u0684';
 t['\uFB74'] = '\u0684';
 t['\uFB75'] = '\u0684';
 t['\uFB76'] = '\u0683';
 t['\uFB77'] = '\u0683';
 t['\uFB78'] = '\u0683';
 t['\uFB79'] = '\u0683';
 t['\uFB7A'] = '\u0686';
 t['\uFB7B'] = '\u0686';
 t['\uFB7C'] = '\u0686';
 t['\uFB7D'] = '\u0686';
 t['\uFB7E'] = '\u0687';
 t['\uFB7F'] = '\u0687';
 t['\uFB80'] = '\u0687';
 t['\uFB81'] = '\u0687';
 t['\uFB82'] = '\u068D';
 t['\uFB83'] = '\u068D';
 t['\uFB84'] = '\u068C';
 t['\uFB85'] = '\u068C';
 t['\uFB86'] = '\u068E';
 t['\uFB87'] = '\u068E';
 t['\uFB88'] = '\u0688';
 t['\uFB89'] = '\u0688';
 t['\uFB8A'] = '\u0698';
 t['\uFB8B'] = '\u0698';
 t['\uFB8C'] = '\u0691';
 t['\uFB8D'] = '\u0691';
 t['\uFB8E'] = '\u06A9';
 t['\uFB8F'] = '\u06A9';
 t['\uFB90'] = '\u06A9';
 t['\uFB91'] = '\u06A9';
 t['\uFB92'] = '\u06AF';
 t['\uFB93'] = '\u06AF';
 t['\uFB94'] = '\u06AF';
 t['\uFB95'] = '\u06AF';
 t['\uFB96'] = '\u06B3';
 t['\uFB97'] = '\u06B3';
 t['\uFB98'] = '\u06B3';
 t['\uFB99'] = '\u06B3';
 t['\uFB9A'] = '\u06B1';
 t['\uFB9B'] = '\u06B1';
 t['\uFB9C'] = '\u06B1';
 t['\uFB9D'] = '\u06B1';
 t['\uFB9E'] = '\u06BA';
 t['\uFB9F'] = '\u06BA';
 t['\uFBA0'] = '\u06BB';
 t['\uFBA1'] = '\u06BB';
 t['\uFBA2'] = '\u06BB';
 t['\uFBA3'] = '\u06BB';
 t['\uFBA4'] = '\u06C0';
 t['\uFBA5'] = '\u06C0';
 t['\uFBA6'] = '\u06C1';
 t['\uFBA7'] = '\u06C1';
 t['\uFBA8'] = '\u06C1';
 t['\uFBA9'] = '\u06C1';
 t['\uFBAA'] = '\u06BE';
 t['\uFBAB'] = '\u06BE';
 t['\uFBAC'] = '\u06BE';
 t['\uFBAD'] = '\u06BE';
 t['\uFBAE'] = '\u06D2';
 t['\uFBAF'] = '\u06D2';
 t['\uFBB0'] = '\u06D3';
 t['\uFBB1'] = '\u06D3';
 t['\uFBD3'] = '\u06AD';
 t['\uFBD4'] = '\u06AD';
 t['\uFBD5'] = '\u06AD';
 t['\uFBD6'] = '\u06AD';
 t['\uFBD7'] = '\u06C7';
 t['\uFBD8'] = '\u06C7';
 t['\uFBD9'] = '\u06C6';
 t['\uFBDA'] = '\u06C6';
 t['\uFBDB'] = '\u06C8';
 t['\uFBDC'] = '\u06C8';
 t['\uFBDD'] = '\u0677';
 t['\uFBDE'] = '\u06CB';
 t['\uFBDF'] = '\u06CB';
 t['\uFBE0'] = '\u06C5';
 t['\uFBE1'] = '\u06C5';
 t['\uFBE2'] = '\u06C9';
 t['\uFBE3'] = '\u06C9';
 t['\uFBE4'] = '\u06D0';
 t['\uFBE5'] = '\u06D0';
 t['\uFBE6'] = '\u06D0';
 t['\uFBE7'] = '\u06D0';
 t['\uFBE8'] = '\u0649';
 t['\uFBE9'] = '\u0649';
 t['\uFBEA'] = '\u0626\u0627';
 t['\uFBEB'] = '\u0626\u0627';
 t['\uFBEC'] = '\u0626\u06D5';
 t['\uFBED'] = '\u0626\u06D5';
 t['\uFBEE'] = '\u0626\u0648';
 t['\uFBEF'] = '\u0626\u0648';
 t['\uFBF0'] = '\u0626\u06C7';
 t['\uFBF1'] = '\u0626\u06C7';
 t['\uFBF2'] = '\u0626\u06C6';
 t['\uFBF3'] = '\u0626\u06C6';
 t['\uFBF4'] = '\u0626\u06C8';
 t['\uFBF5'] = '\u0626\u06C8';
 t['\uFBF6'] = '\u0626\u06D0';
 t['\uFBF7'] = '\u0626\u06D0';
 t['\uFBF8'] = '\u0626\u06D0';
 t['\uFBF9'] = '\u0626\u0649';
 t['\uFBFA'] = '\u0626\u0649';
 t['\uFBFB'] = '\u0626\u0649';
 t['\uFBFC'] = '\u06CC';
 t['\uFBFD'] = '\u06CC';
 t['\uFBFE'] = '\u06CC';
 t['\uFBFF'] = '\u06CC';
 t['\uFC00'] = '\u0626\u062C';
 t['\uFC01'] = '\u0626\u062D';
 t['\uFC02'] = '\u0626\u0645';
 t['\uFC03'] = '\u0626\u0649';
 t['\uFC04'] = '\u0626\u064A';
 t['\uFC05'] = '\u0628\u062C';
 t['\uFC06'] = '\u0628\u062D';
 t['\uFC07'] = '\u0628\u062E';
 t['\uFC08'] = '\u0628\u0645';
 t['\uFC09'] = '\u0628\u0649';
 t['\uFC0A'] = '\u0628\u064A';
 t['\uFC0B'] = '\u062A\u062C';
 t['\uFC0C'] = '\u062A\u062D';
 t['\uFC0D'] = '\u062A\u062E';
 t['\uFC0E'] = '\u062A\u0645';
 t['\uFC0F'] = '\u062A\u0649';
 t['\uFC10'] = '\u062A\u064A';
 t['\uFC11'] = '\u062B\u062C';
 t['\uFC12'] = '\u062B\u0645';
 t['\uFC13'] = '\u062B\u0649';
 t['\uFC14'] = '\u062B\u064A';
 t['\uFC15'] = '\u062C\u062D';
 t['\uFC16'] = '\u062C\u0645';
 t['\uFC17'] = '\u062D\u062C';
 t['\uFC18'] = '\u062D\u0645';
 t['\uFC19'] = '\u062E\u062C';
 t['\uFC1A'] = '\u062E\u062D';
 t['\uFC1B'] = '\u062E\u0645';
 t['\uFC1C'] = '\u0633\u062C';
 t['\uFC1D'] = '\u0633\u062D';
 t['\uFC1E'] = '\u0633\u062E';
 t['\uFC1F'] = '\u0633\u0645';
 t['\uFC20'] = '\u0635\u062D';
 t['\uFC21'] = '\u0635\u0645';
 t['\uFC22'] = '\u0636\u062C';
 t['\uFC23'] = '\u0636\u062D';
 t['\uFC24'] = '\u0636\u062E';
 t['\uFC25'] = '\u0636\u0645';
 t['\uFC26'] = '\u0637\u062D';
 t['\uFC27'] = '\u0637\u0645';
 t['\uFC28'] = '\u0638\u0645';
 t['\uFC29'] = '\u0639\u062C';
 t['\uFC2A'] = '\u0639\u0645';
 t['\uFC2B'] = '\u063A\u062C';
 t['\uFC2C'] = '\u063A\u0645';
 t['\uFC2D'] = '\u0641\u062C';
 t['\uFC2E'] = '\u0641\u062D';
 t['\uFC2F'] = '\u0641\u062E';
 t['\uFC30'] = '\u0641\u0645';
 t['\uFC31'] = '\u0641\u0649';
 t['\uFC32'] = '\u0641\u064A';
 t['\uFC33'] = '\u0642\u062D';
 t['\uFC34'] = '\u0642\u0645';
 t['\uFC35'] = '\u0642\u0649';
 t['\uFC36'] = '\u0642\u064A';
 t['\uFC37'] = '\u0643\u0627';
 t['\uFC38'] = '\u0643\u062C';
 t['\uFC39'] = '\u0643\u062D';
 t['\uFC3A'] = '\u0643\u062E';
 t['\uFC3B'] = '\u0643\u0644';
 t['\uFC3C'] = '\u0643\u0645';
 t['\uFC3D'] = '\u0643\u0649';
 t['\uFC3E'] = '\u0643\u064A';
 t['\uFC3F'] = '\u0644\u062C';
 t['\uFC40'] = '\u0644\u062D';
 t['\uFC41'] = '\u0644\u062E';
 t['\uFC42'] = '\u0644\u0645';
 t['\uFC43'] = '\u0644\u0649';
 t['\uFC44'] = '\u0644\u064A';
 t['\uFC45'] = '\u0645\u062C';
 t['\uFC46'] = '\u0645\u062D';
 t['\uFC47'] = '\u0645\u062E';
 t['\uFC48'] = '\u0645\u0645';
 t['\uFC49'] = '\u0645\u0649';
 t['\uFC4A'] = '\u0645\u064A';
 t['\uFC4B'] = '\u0646\u062C';
 t['\uFC4C'] = '\u0646\u062D';
 t['\uFC4D'] = '\u0646\u062E';
 t['\uFC4E'] = '\u0646\u0645';
 t['\uFC4F'] = '\u0646\u0649';
 t['\uFC50'] = '\u0646\u064A';
 t['\uFC51'] = '\u0647\u062C';
 t['\uFC52'] = '\u0647\u0645';
 t['\uFC53'] = '\u0647\u0649';
 t['\uFC54'] = '\u0647\u064A';
 t['\uFC55'] = '\u064A\u062C';
 t['\uFC56'] = '\u064A\u062D';
 t['\uFC57'] = '\u064A\u062E';
 t['\uFC58'] = '\u064A\u0645';
 t['\uFC59'] = '\u064A\u0649';
 t['\uFC5A'] = '\u064A\u064A';
 t['\uFC5B'] = '\u0630\u0670';
 t['\uFC5C'] = '\u0631\u0670';
 t['\uFC5D'] = '\u0649\u0670';
 t['\uFC5E'] = '\u0020\u064C\u0651';
 t['\uFC5F'] = '\u0020\u064D\u0651';
 t['\uFC60'] = '\u0020\u064E\u0651';
 t['\uFC61'] = '\u0020\u064F\u0651';
 t['\uFC62'] = '\u0020\u0650\u0651';
 t['\uFC63'] = '\u0020\u0651\u0670';
 t['\uFC64'] = '\u0626\u0631';
 t['\uFC65'] = '\u0626\u0632';
 t['\uFC66'] = '\u0626\u0645';
 t['\uFC67'] = '\u0626\u0646';
 t['\uFC68'] = '\u0626\u0649';
 t['\uFC69'] = '\u0626\u064A';
 t['\uFC6A'] = '\u0628\u0631';
 t['\uFC6B'] = '\u0628\u0632';
 t['\uFC6C'] = '\u0628\u0645';
 t['\uFC6D'] = '\u0628\u0646';
 t['\uFC6E'] = '\u0628\u0649';
 t['\uFC6F'] = '\u0628\u064A';
 t['\uFC70'] = '\u062A\u0631';
 t['\uFC71'] = '\u062A\u0632';
 t['\uFC72'] = '\u062A\u0645';
 t['\uFC73'] = '\u062A\u0646';
 t['\uFC74'] = '\u062A\u0649';
 t['\uFC75'] = '\u062A\u064A';
 t['\uFC76'] = '\u062B\u0631';
 t['\uFC77'] = '\u062B\u0632';
 t['\uFC78'] = '\u062B\u0645';
 t['\uFC79'] = '\u062B\u0646';
 t['\uFC7A'] = '\u062B\u0649';
 t['\uFC7B'] = '\u062B\u064A';
 t['\uFC7C'] = '\u0641\u0649';
 t['\uFC7D'] = '\u0641\u064A';
 t['\uFC7E'] = '\u0642\u0649';
 t['\uFC7F'] = '\u0642\u064A';
 t['\uFC80'] = '\u0643\u0627';
 t['\uFC81'] = '\u0643\u0644';
 t['\uFC82'] = '\u0643\u0645';
 t['\uFC83'] = '\u0643\u0649';
 t['\uFC84'] = '\u0643\u064A';
 t['\uFC85'] = '\u0644\u0645';
 t['\uFC86'] = '\u0644\u0649';
 t['\uFC87'] = '\u0644\u064A';
 t['\uFC88'] = '\u0645\u0627';
 t['\uFC89'] = '\u0645\u0645';
 t['\uFC8A'] = '\u0646\u0631';
 t['\uFC8B'] = '\u0646\u0632';
 t['\uFC8C'] = '\u0646\u0645';
 t['\uFC8D'] = '\u0646\u0646';
 t['\uFC8E'] = '\u0646\u0649';
 t['\uFC8F'] = '\u0646\u064A';
 t['\uFC90'] = '\u0649\u0670';
 t['\uFC91'] = '\u064A\u0631';
 t['\uFC92'] = '\u064A\u0632';
 t['\uFC93'] = '\u064A\u0645';
 t['\uFC94'] = '\u064A\u0646';
 t['\uFC95'] = '\u064A\u0649';
 t['\uFC96'] = '\u064A\u064A';
 t['\uFC97'] = '\u0626\u062C';
 t['\uFC98'] = '\u0626\u062D';
 t['\uFC99'] = '\u0626\u062E';
 t['\uFC9A'] = '\u0626\u0645';
 t['\uFC9B'] = '\u0626\u0647';
 t['\uFC9C'] = '\u0628\u062C';
 t['\uFC9D'] = '\u0628\u062D';
 t['\uFC9E'] = '\u0628\u062E';
 t['\uFC9F'] = '\u0628\u0645';
 t['\uFCA0'] = '\u0628\u0647';
 t['\uFCA1'] = '\u062A\u062C';
 t['\uFCA2'] = '\u062A\u062D';
 t['\uFCA3'] = '\u062A\u062E';
 t['\uFCA4'] = '\u062A\u0645';
 t['\uFCA5'] = '\u062A\u0647';
 t['\uFCA6'] = '\u062B\u0645';
 t['\uFCA7'] = '\u062C\u062D';
 t['\uFCA8'] = '\u062C\u0645';
 t['\uFCA9'] = '\u062D\u062C';
 t['\uFCAA'] = '\u062D\u0645';
 t['\uFCAB'] = '\u062E\u062C';
 t['\uFCAC'] = '\u062E\u0645';
 t['\uFCAD'] = '\u0633\u062C';
 t['\uFCAE'] = '\u0633\u062D';
 t['\uFCAF'] = '\u0633\u062E';
 t['\uFCB0'] = '\u0633\u0645';
 t['\uFCB1'] = '\u0635\u062D';
 t['\uFCB2'] = '\u0635\u062E';
 t['\uFCB3'] = '\u0635\u0645';
 t['\uFCB4'] = '\u0636\u062C';
 t['\uFCB5'] = '\u0636\u062D';
 t['\uFCB6'] = '\u0636\u062E';
 t['\uFCB7'] = '\u0636\u0645';
 t['\uFCB8'] = '\u0637\u062D';
 t['\uFCB9'] = '\u0638\u0645';
 t['\uFCBA'] = '\u0639\u062C';
 t['\uFCBB'] = '\u0639\u0645';
 t['\uFCBC'] = '\u063A\u062C';
 t['\uFCBD'] = '\u063A\u0645';
 t['\uFCBE'] = '\u0641\u062C';
 t['\uFCBF'] = '\u0641\u062D';
 t['\uFCC0'] = '\u0641\u062E';
 t['\uFCC1'] = '\u0641\u0645';
 t['\uFCC2'] = '\u0642\u062D';
 t['\uFCC3'] = '\u0642\u0645';
 t['\uFCC4'] = '\u0643\u062C';
 t['\uFCC5'] = '\u0643\u062D';
 t['\uFCC6'] = '\u0643\u062E';
 t['\uFCC7'] = '\u0643\u0644';
 t['\uFCC8'] = '\u0643\u0645';
 t['\uFCC9'] = '\u0644\u062C';
 t['\uFCCA'] = '\u0644\u062D';
 t['\uFCCB'] = '\u0644\u062E';
 t['\uFCCC'] = '\u0644\u0645';
 t['\uFCCD'] = '\u0644\u0647';
 t['\uFCCE'] = '\u0645\u062C';
 t['\uFCCF'] = '\u0645\u062D';
 t['\uFCD0'] = '\u0645\u062E';
 t['\uFCD1'] = '\u0645\u0645';
 t['\uFCD2'] = '\u0646\u062C';
 t['\uFCD3'] = '\u0646\u062D';
 t['\uFCD4'] = '\u0646\u062E';
 t['\uFCD5'] = '\u0646\u0645';
 t['\uFCD6'] = '\u0646\u0647';
 t['\uFCD7'] = '\u0647\u062C';
 t['\uFCD8'] = '\u0647\u0645';
 t['\uFCD9'] = '\u0647\u0670';
 t['\uFCDA'] = '\u064A\u062C';
 t['\uFCDB'] = '\u064A\u062D';
 t['\uFCDC'] = '\u064A\u062E';
 t['\uFCDD'] = '\u064A\u0645';
 t['\uFCDE'] = '\u064A\u0647';
 t['\uFCDF'] = '\u0626\u0645';
 t['\uFCE0'] = '\u0626\u0647';
 t['\uFCE1'] = '\u0628\u0645';
 t['\uFCE2'] = '\u0628\u0647';
 t['\uFCE3'] = '\u062A\u0645';
 t['\uFCE4'] = '\u062A\u0647';
 t['\uFCE5'] = '\u062B\u0645';
 t['\uFCE6'] = '\u062B\u0647';
 t['\uFCE7'] = '\u0633\u0645';
 t['\uFCE8'] = '\u0633\u0647';
 t['\uFCE9'] = '\u0634\u0645';
 t['\uFCEA'] = '\u0634\u0647';
 t['\uFCEB'] = '\u0643\u0644';
 t['\uFCEC'] = '\u0643\u0645';
 t['\uFCED'] = '\u0644\u0645';
 t['\uFCEE'] = '\u0646\u0645';
 t['\uFCEF'] = '\u0646\u0647';
 t['\uFCF0'] = '\u064A\u0645';
 t['\uFCF1'] = '\u064A\u0647';
 t['\uFCF2'] = '\u0640\u064E\u0651';
 t['\uFCF3'] = '\u0640\u064F\u0651';
 t['\uFCF4'] = '\u0640\u0650\u0651';
 t['\uFCF5'] = '\u0637\u0649';
 t['\uFCF6'] = '\u0637\u064A';
 t['\uFCF7'] = '\u0639\u0649';
 t['\uFCF8'] = '\u0639\u064A';
 t['\uFCF9'] = '\u063A\u0649';
 t['\uFCFA'] = '\u063A\u064A';
 t['\uFCFB'] = '\u0633\u0649';
 t['\uFCFC'] = '\u0633\u064A';
 t['\uFCFD'] = '\u0634\u0649';
 t['\uFCFE'] = '\u0634\u064A';
 t['\uFCFF'] = '\u062D\u0649';
 t['\uFD00'] = '\u062D\u064A';
 t['\uFD01'] = '\u062C\u0649';
 t['\uFD02'] = '\u062C\u064A';
 t['\uFD03'] = '\u062E\u0649';
 t['\uFD04'] = '\u062E\u064A';
 t['\uFD05'] = '\u0635\u0649';
 t['\uFD06'] = '\u0635\u064A';
 t['\uFD07'] = '\u0636\u0649';
 t['\uFD08'] = '\u0636\u064A';
 t['\uFD09'] = '\u0634\u062C';
 t['\uFD0A'] = '\u0634\u062D';
 t['\uFD0B'] = '\u0634\u062E';
 t['\uFD0C'] = '\u0634\u0645';
 t['\uFD0D'] = '\u0634\u0631';
 t['\uFD0E'] = '\u0633\u0631';
 t['\uFD0F'] = '\u0635\u0631';
 t['\uFD10'] = '\u0636\u0631';
 t['\uFD11'] = '\u0637\u0649';
 t['\uFD12'] = '\u0637\u064A';
 t['\uFD13'] = '\u0639\u0649';
 t['\uFD14'] = '\u0639\u064A';
 t['\uFD15'] = '\u063A\u0649';
 t['\uFD16'] = '\u063A\u064A';
 t['\uFD17'] = '\u0633\u0649';
 t['\uFD18'] = '\u0633\u064A';
 t['\uFD19'] = '\u0634\u0649';
 t['\uFD1A'] = '\u0634\u064A';
 t['\uFD1B'] = '\u062D\u0649';
 t['\uFD1C'] = '\u062D\u064A';
 t['\uFD1D'] = '\u062C\u0649';
 t['\uFD1E'] = '\u062C\u064A';
 t['\uFD1F'] = '\u062E\u0649';
 t['\uFD20'] = '\u062E\u064A';
 t['\uFD21'] = '\u0635\u0649';
 t['\uFD22'] = '\u0635\u064A';
 t['\uFD23'] = '\u0636\u0649';
 t['\uFD24'] = '\u0636\u064A';
 t['\uFD25'] = '\u0634\u062C';
 t['\uFD26'] = '\u0634\u062D';
 t['\uFD27'] = '\u0634\u062E';
 t['\uFD28'] = '\u0634\u0645';
 t['\uFD29'] = '\u0634\u0631';
 t['\uFD2A'] = '\u0633\u0631';
 t['\uFD2B'] = '\u0635\u0631';
 t['\uFD2C'] = '\u0636\u0631';
 t['\uFD2D'] = '\u0634\u062C';
 t['\uFD2E'] = '\u0634\u062D';
 t['\uFD2F'] = '\u0634\u062E';
 t['\uFD30'] = '\u0634\u0645';
 t['\uFD31'] = '\u0633\u0647';
 t['\uFD32'] = '\u0634\u0647';
 t['\uFD33'] = '\u0637\u0645';
 t['\uFD34'] = '\u0633\u062C';
 t['\uFD35'] = '\u0633\u062D';
 t['\uFD36'] = '\u0633\u062E';
 t['\uFD37'] = '\u0634\u062C';
 t['\uFD38'] = '\u0634\u062D';
 t['\uFD39'] = '\u0634\u062E';
 t['\uFD3A'] = '\u0637\u0645';
 t['\uFD3B'] = '\u0638\u0645';
 t['\uFD3C'] = '\u0627\u064B';
 t['\uFD3D'] = '\u0627\u064B';
 t['\uFD50'] = '\u062A\u062C\u0645';
 t['\uFD51'] = '\u062A\u062D\u062C';
 t['\uFD52'] = '\u062A\u062D\u062C';
 t['\uFD53'] = '\u062A\u062D\u0645';
 t['\uFD54'] = '\u062A\u062E\u0645';
 t['\uFD55'] = '\u062A\u0645\u062C';
 t['\uFD56'] = '\u062A\u0645\u062D';
 t['\uFD57'] = '\u062A\u0645\u062E';
 t['\uFD58'] = '\u062C\u0645\u062D';
 t['\uFD59'] = '\u062C\u0645\u062D';
 t['\uFD5A'] = '\u062D\u0645\u064A';
 t['\uFD5B'] = '\u062D\u0645\u0649';
 t['\uFD5C'] = '\u0633\u062D\u062C';
 t['\uFD5D'] = '\u0633\u062C\u062D';
 t['\uFD5E'] = '\u0633\u062C\u0649';
 t['\uFD5F'] = '\u0633\u0645\u062D';
 t['\uFD60'] = '\u0633\u0645\u062D';
 t['\uFD61'] = '\u0633\u0645\u062C';
 t['\uFD62'] = '\u0633\u0645\u0645';
 t['\uFD63'] = '\u0633\u0645\u0645';
 t['\uFD64'] = '\u0635\u062D\u062D';
 t['\uFD65'] = '\u0635\u062D\u062D';
 t['\uFD66'] = '\u0635\u0645\u0645';
 t['\uFD67'] = '\u0634\u062D\u0645';
 t['\uFD68'] = '\u0634\u062D\u0645';
 t['\uFD69'] = '\u0634\u062C\u064A';
 t['\uFD6A'] = '\u0634\u0645\u062E';
 t['\uFD6B'] = '\u0634\u0645\u062E';
 t['\uFD6C'] = '\u0634\u0645\u0645';
 t['\uFD6D'] = '\u0634\u0645\u0645';
 t['\uFD6E'] = '\u0636\u062D\u0649';
 t['\uFD6F'] = '\u0636\u062E\u0645';
 t['\uFD70'] = '\u0636\u062E\u0645';
 t['\uFD71'] = '\u0637\u0645\u062D';
 t['\uFD72'] = '\u0637\u0645\u062D';
 t['\uFD73'] = '\u0637\u0645\u0645';
 t['\uFD74'] = '\u0637\u0645\u064A';
 t['\uFD75'] = '\u0639\u062C\u0645';
 t['\uFD76'] = '\u0639\u0645\u0645';
 t['\uFD77'] = '\u0639\u0645\u0645';
 t['\uFD78'] = '\u0639\u0645\u0649';
 t['\uFD79'] = '\u063A\u0645\u0645';
 t['\uFD7A'] = '\u063A\u0645\u064A';
 t['\uFD7B'] = '\u063A\u0645\u0649';
 t['\uFD7C'] = '\u0641\u062E\u0645';
 t['\uFD7D'] = '\u0641\u062E\u0645';
 t['\uFD7E'] = '\u0642\u0645\u062D';
 t['\uFD7F'] = '\u0642\u0645\u0645';
 t['\uFD80'] = '\u0644\u062D\u0645';
 t['\uFD81'] = '\u0644\u062D\u064A';
 t['\uFD82'] = '\u0644\u062D\u0649';
 t['\uFD83'] = '\u0644\u062C\u062C';
 t['\uFD84'] = '\u0644\u062C\u062C';
 t['\uFD85'] = '\u0644\u062E\u0645';
 t['\uFD86'] = '\u0644\u062E\u0645';
 t['\uFD87'] = '\u0644\u0645\u062D';
 t['\uFD88'] = '\u0644\u0645\u062D';
 t['\uFD89'] = '\u0645\u062D\u062C';
 t['\uFD8A'] = '\u0645\u062D\u0645';
 t['\uFD8B'] = '\u0645\u062D\u064A';
 t['\uFD8C'] = '\u0645\u062C\u062D';
 t['\uFD8D'] = '\u0645\u062C\u0645';
 t['\uFD8E'] = '\u0645\u062E\u062C';
 t['\uFD8F'] = '\u0645\u062E\u0645';
 t['\uFD92'] = '\u0645\u062C\u062E';
 t['\uFD93'] = '\u0647\u0645\u062C';
 t['\uFD94'] = '\u0647\u0645\u0645';
 t['\uFD95'] = '\u0646\u062D\u0645';
 t['\uFD96'] = '\u0646\u062D\u0649';
 t['\uFD97'] = '\u0646\u062C\u0645';
 t['\uFD98'] = '\u0646\u062C\u0645';
 t['\uFD99'] = '\u0646\u062C\u0649';
 t['\uFD9A'] = '\u0646\u0645\u064A';
 t['\uFD9B'] = '\u0646\u0645\u0649';
 t['\uFD9C'] = '\u064A\u0645\u0645';
 t['\uFD9D'] = '\u064A\u0645\u0645';
 t['\uFD9E'] = '\u0628\u062E\u064A';
 t['\uFD9F'] = '\u062A\u062C\u064A';
 t['\uFDA0'] = '\u062A\u062C\u0649';
 t['\uFDA1'] = '\u062A\u062E\u064A';
 t['\uFDA2'] = '\u062A\u062E\u0649';
 t['\uFDA3'] = '\u062A\u0645\u064A';
 t['\uFDA4'] = '\u062A\u0645\u0649';
 t['\uFDA5'] = '\u062C\u0645\u064A';
 t['\uFDA6'] = '\u062C\u062D\u0649';
 t['\uFDA7'] = '\u062C\u0645\u0649';
 t['\uFDA8'] = '\u0633\u062E\u0649';
 t['\uFDA9'] = '\u0635\u062D\u064A';
 t['\uFDAA'] = '\u0634\u062D\u064A';
 t['\uFDAB'] = '\u0636\u062D\u064A';
 t['\uFDAC'] = '\u0644\u062C\u064A';
 t['\uFDAD'] = '\u0644\u0645\u064A';
 t['\uFDAE'] = '\u064A\u062D\u064A';
 t['\uFDAF'] = '\u064A\u062C\u064A';
 t['\uFDB0'] = '\u064A\u0645\u064A';
 t['\uFDB1'] = '\u0645\u0645\u064A';
 t['\uFDB2'] = '\u0642\u0645\u064A';
 t['\uFDB3'] = '\u0646\u062D\u064A';
 t['\uFDB4'] = '\u0642\u0645\u062D';
 t['\uFDB5'] = '\u0644\u062D\u0645';
 t['\uFDB6'] = '\u0639\u0645\u064A';
 t['\uFDB7'] = '\u0643\u0645\u064A';
 t['\uFDB8'] = '\u0646\u062C\u062D';
 t['\uFDB9'] = '\u0645\u062E\u064A';
 t['\uFDBA'] = '\u0644\u062C\u0645';
 t['\uFDBB'] = '\u0643\u0645\u0645';
 t['\uFDBC'] = '\u0644\u062C\u0645';
 t['\uFDBD'] = '\u0646\u062C\u062D';
 t['\uFDBE'] = '\u062C\u062D\u064A';
 t['\uFDBF'] = '\u062D\u062C\u064A';
 t['\uFDC0'] = '\u0645\u062C\u064A';
 t['\uFDC1'] = '\u0641\u0645\u064A';
 t['\uFDC2'] = '\u0628\u062D\u064A';
 t['\uFDC3'] = '\u0643\u0645\u0645';
 t['\uFDC4'] = '\u0639\u062C\u0645';
 t['\uFDC5'] = '\u0635\u0645\u0645';
 t['\uFDC6'] = '\u0633\u062E\u064A';
 t['\uFDC7'] = '\u0646\u062C\u064A';
 t['\uFE49'] = '\u203E';
 t['\uFE4A'] = '\u203E';
 t['\uFE4B'] = '\u203E';
 t['\uFE4C'] = '\u203E';
 t['\uFE4D'] = '\u005F';
 t['\uFE4E'] = '\u005F';
 t['\uFE4F'] = '\u005F';
 t['\uFE80'] = '\u0621';
 t['\uFE81'] = '\u0622';
 t['\uFE82'] = '\u0622';
 t['\uFE83'] = '\u0623';
 t['\uFE84'] = '\u0623';
 t['\uFE85'] = '\u0624';
 t['\uFE86'] = '\u0624';
 t['\uFE87'] = '\u0625';
 t['\uFE88'] = '\u0625';
 t['\uFE89'] = '\u0626';
 t['\uFE8A'] = '\u0626';
 t['\uFE8B'] = '\u0626';
 t['\uFE8C'] = '\u0626';
 t['\uFE8D'] = '\u0627';
 t['\uFE8E'] = '\u0627';
 t['\uFE8F'] = '\u0628';
 t['\uFE90'] = '\u0628';
 t['\uFE91'] = '\u0628';
 t['\uFE92'] = '\u0628';
 t['\uFE93'] = '\u0629';
 t['\uFE94'] = '\u0629';
 t['\uFE95'] = '\u062A';
 t['\uFE96'] = '\u062A';
 t['\uFE97'] = '\u062A';
 t['\uFE98'] = '\u062A';
 t['\uFE99'] = '\u062B';
 t['\uFE9A'] = '\u062B';
 t['\uFE9B'] = '\u062B';
 t['\uFE9C'] = '\u062B';
 t['\uFE9D'] = '\u062C';
 t['\uFE9E'] = '\u062C';
 t['\uFE9F'] = '\u062C';
 t['\uFEA0'] = '\u062C';
 t['\uFEA1'] = '\u062D';
 t['\uFEA2'] = '\u062D';
 t['\uFEA3'] = '\u062D';
 t['\uFEA4'] = '\u062D';
 t['\uFEA5'] = '\u062E';
 t['\uFEA6'] = '\u062E';
 t['\uFEA7'] = '\u062E';
 t['\uFEA8'] = '\u062E';
 t['\uFEA9'] = '\u062F';
 t['\uFEAA'] = '\u062F';
 t['\uFEAB'] = '\u0630';
 t['\uFEAC'] = '\u0630';
 t['\uFEAD'] = '\u0631';
 t['\uFEAE'] = '\u0631';
 t['\uFEAF'] = '\u0632';
 t['\uFEB0'] = '\u0632';
 t['\uFEB1'] = '\u0633';
 t['\uFEB2'] = '\u0633';
 t['\uFEB3'] = '\u0633';
 t['\uFEB4'] = '\u0633';
 t['\uFEB5'] = '\u0634';
 t['\uFEB6'] = '\u0634';
 t['\uFEB7'] = '\u0634';
 t['\uFEB8'] = '\u0634';
 t['\uFEB9'] = '\u0635';
 t['\uFEBA'] = '\u0635';
 t['\uFEBB'] = '\u0635';
 t['\uFEBC'] = '\u0635';
 t['\uFEBD'] = '\u0636';
 t['\uFEBE'] = '\u0636';
 t['\uFEBF'] = '\u0636';
 t['\uFEC0'] = '\u0636';
 t['\uFEC1'] = '\u0637';
 t['\uFEC2'] = '\u0637';
 t['\uFEC3'] = '\u0637';
 t['\uFEC4'] = '\u0637';
 t['\uFEC5'] = '\u0638';
 t['\uFEC6'] = '\u0638';
 t['\uFEC7'] = '\u0638';
 t['\uFEC8'] = '\u0638';
 t['\uFEC9'] = '\u0639';
 t['\uFECA'] = '\u0639';
 t['\uFECB'] = '\u0639';
 t['\uFECC'] = '\u0639';
 t['\uFECD'] = '\u063A';
 t['\uFECE'] = '\u063A';
 t['\uFECF'] = '\u063A';
 t['\uFED0'] = '\u063A';
 t['\uFED1'] = '\u0641';
 t['\uFED2'] = '\u0641';
 t['\uFED3'] = '\u0641';
 t['\uFED4'] = '\u0641';
 t['\uFED5'] = '\u0642';
 t['\uFED6'] = '\u0642';
 t['\uFED7'] = '\u0642';
 t['\uFED8'] = '\u0642';
 t['\uFED9'] = '\u0643';
 t['\uFEDA'] = '\u0643';
 t['\uFEDB'] = '\u0643';
 t['\uFEDC'] = '\u0643';
 t['\uFEDD'] = '\u0644';
 t['\uFEDE'] = '\u0644';
 t['\uFEDF'] = '\u0644';
 t['\uFEE0'] = '\u0644';
 t['\uFEE1'] = '\u0645';
 t['\uFEE2'] = '\u0645';
 t['\uFEE3'] = '\u0645';
 t['\uFEE4'] = '\u0645';
 t['\uFEE5'] = '\u0646';
 t['\uFEE6'] = '\u0646';
 t['\uFEE7'] = '\u0646';
 t['\uFEE8'] = '\u0646';
 t['\uFEE9'] = '\u0647';
 t['\uFEEA'] = '\u0647';
 t['\uFEEB'] = '\u0647';
 t['\uFEEC'] = '\u0647';
 t['\uFEED'] = '\u0648';
 t['\uFEEE'] = '\u0648';
 t['\uFEEF'] = '\u0649';
 t['\uFEF0'] = '\u0649';
 t['\uFEF1'] = '\u064A';
 t['\uFEF2'] = '\u064A';
 t['\uFEF3'] = '\u064A';
 t['\uFEF4'] = '\u064A';
 t['\uFEF5'] = '\u0644\u0622';
 t['\uFEF6'] = '\u0644\u0622';
 t['\uFEF7'] = '\u0644\u0623';
 t['\uFEF8'] = '\u0644\u0623';
 t['\uFEF9'] = '\u0644\u0625';
 t['\uFEFA'] = '\u0644\u0625';
 t['\uFEFB'] = '\u0644\u0627';
 t['\uFEFC'] = '\u0644\u0627';
});
function reverseIfRtl(chars) {
 var charsLength = chars.length;
 if (charsLength <= 1 || !isRTLRangeFor(chars.charCodeAt(0))) {
  return chars;
 }
 var s = '';
 for (var ii = charsLength - 1; ii >= 0; ii--) {
  s += chars[ii];
 }
 return s;
}
exports.mapSpecialUnicodeValues = mapSpecialUnicodeValues;
exports.reverseIfRtl = reverseIfRtl;
exports.getUnicodeRangeFor = getUnicodeRangeFor;
exports.getNormalizedUnicodes = getNormalizedUnicodes;
exports.getUnicodeForGlyph = getUnicodeForGlyph;

/***/ }),
/* 9 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ArithmeticDecoder = function ArithmeticDecoderClosure() {
  var QeTable = [{
    qe: 0x5601,
    nmps: 1,
    nlps: 1,
    switchFlag: 1
  }, {
    qe: 0x3401,
    nmps: 2,
    nlps: 6,
    switchFlag: 0
  }, {
    qe: 0x1801,
    nmps: 3,
    nlps: 9,
    switchFlag: 0
  }, {
    qe: 0x0AC1,
    nmps: 4,
    nlps: 12,
    switchFlag: 0
  }, {
    qe: 0x0521,
    nmps: 5,
    nlps: 29,
    switchFlag: 0
  }, {
    qe: 0x0221,
    nmps: 38,
    nlps: 33,
    switchFlag: 0
  }, {
    qe: 0x5601,
    nmps: 7,
    nlps: 6,
    switchFlag: 1
  }, {
    qe: 0x5401,
    nmps: 8,
    nlps: 14,
    switchFlag: 0
  }, {
    qe: 0x4801,
    nmps: 9,
    nlps: 14,
    switchFlag: 0
  }, {
    qe: 0x3801,
    nmps: 10,
    nlps: 14,
    switchFlag: 0
  }, {
    qe: 0x3001,
    nmps: 11,
    nlps: 17,
    switchFlag: 0
  }, {
    qe: 0x2401,
    nmps: 12,
    nlps: 18,
    switchFlag: 0
  }, {
    qe: 0x1C01,
    nmps: 13,
    nlps: 20,
    switchFlag: 0
  }, {
    qe: 0x1601,
    nmps: 29,
    nlps: 21,
    switchFlag: 0
  }, {
    qe: 0x5601,
    nmps: 15,
    nlps: 14,
    switchFlag: 1
  }, {
    qe: 0x5401,
    nmps: 16,
    nlps: 14,
    switchFlag: 0
  }, {
    qe: 0x5101,
    nmps: 17,
    nlps: 15,
    switchFlag: 0
  }, {
    qe: 0x4801,
    nmps: 18,
    nlps: 16,
    switchFlag: 0
  }, {
    qe: 0x3801,
    nmps: 19,
    nlps: 17,
    switchFlag: 0
  }, {
    qe: 0x3401,
    nmps: 20,
    nlps: 18,
    switchFlag: 0
  }, {
    qe: 0x3001,
    nmps: 21,
    nlps: 19,
    switchFlag: 0
  }, {
    qe: 0x2801,
    nmps: 22,
    nlps: 19,
    switchFlag: 0
  }, {
    qe: 0x2401,
    nmps: 23,
    nlps: 20,
    switchFlag: 0
  }, {
    qe: 0x2201,
    nmps: 24,
    nlps: 21,
    switchFlag: 0
  }, {
    qe: 0x1C01,
    nmps: 25,
    nlps: 22,
    switchFlag: 0
  }, {
    qe: 0x1801,
    nmps: 26,
    nlps: 23,
    switchFlag: 0
  }, {
    qe: 0x1601,
    nmps: 27,
    nlps: 24,
    switchFlag: 0
  }, {
    qe: 0x1401,
    nmps: 28,
    nlps: 25,
    switchFlag: 0
  }, {
    qe: 0x1201,
    nmps: 29,
    nlps: 26,
    switchFlag: 0
  }, {
    qe: 0x1101,
    nmps: 30,
    nlps: 27,
    switchFlag: 0
  }, {
    qe: 0x0AC1,
    nmps: 31,
    nlps: 28,
    switchFlag: 0
  }, {
    qe: 0x09C1,
    nmps: 32,
    nlps: 29,
    switchFlag: 0
  }, {
    qe: 0x08A1,
    nmps: 33,
    nlps: 30,
    switchFlag: 0
  }, {
    qe: 0x0521,
    nmps: 34,
    nlps: 31,
    switchFlag: 0
  }, {
    qe: 0x0441,
    nmps: 35,
    nlps: 32,
    switchFlag: 0
  }, {
    qe: 0x02A1,
    nmps: 36,
    nlps: 33,
    switchFlag: 0
  }, {
    qe: 0x0221,
    nmps: 37,
    nlps: 34,
    switchFlag: 0
  }, {
    qe: 0x0141,
    nmps: 38,
    nlps: 35,
    switchFlag: 0
  }, {
    qe: 0x0111,
    nmps: 39,
    nlps: 36,
    switchFlag: 0
  }, {
    qe: 0x0085,
    nmps: 40,
    nlps: 37,
    switchFlag: 0
  }, {
    qe: 0x0049,
    nmps: 41,
    nlps: 38,
    switchFlag: 0
  }, {
    qe: 0x0025,
    nmps: 42,
    nlps: 39,
    switchFlag: 0
  }, {
    qe: 0x0015,
    nmps: 43,
    nlps: 40,
    switchFlag: 0
  }, {
    qe: 0x0009,
    nmps: 44,
    nlps: 41,
    switchFlag: 0
  }, {
    qe: 0x0005,
    nmps: 45,
    nlps: 42,
    switchFlag: 0
  }, {
    qe: 0x0001,
    nmps: 45,
    nlps: 43,
    switchFlag: 0
  }, {
    qe: 0x5601,
    nmps: 46,
    nlps: 46,
    switchFlag: 0
  }];
  function ArithmeticDecoder(data, start, end) {
    this.data = data;
    this.bp = start;
    this.dataEnd = end;
    this.chigh = data[start];
    this.clow = 0;
    this.byteIn();
    this.chigh = this.chigh << 7 & 0xFFFF | this.clow >> 9 & 0x7F;
    this.clow = this.clow << 7 & 0xFFFF;
    this.ct -= 7;
    this.a = 0x8000;
  }
  ArithmeticDecoder.prototype = {
    byteIn: function ArithmeticDecoder_byteIn() {
      var data = this.data;
      var bp = this.bp;
      if (data[bp] === 0xFF) {
        var b1 = data[bp + 1];
        if (b1 > 0x8F) {
          this.clow += 0xFF00;
          this.ct = 8;
        } else {
          bp++;
          this.clow += data[bp] << 9;
          this.ct = 7;
          this.bp = bp;
        }
      } else {
        bp++;
        this.clow += bp < this.dataEnd ? data[bp] << 8 : 0xFF00;
        this.ct = 8;
        this.bp = bp;
      }
      if (this.clow > 0xFFFF) {
        this.chigh += this.clow >> 16;
        this.clow &= 0xFFFF;
      }
    },
    readBit: function ArithmeticDecoder_readBit(contexts, pos) {
      var cx_index = contexts[pos] >> 1,
          cx_mps = contexts[pos] & 1;
      var qeTableIcx = QeTable[cx_index];
      var qeIcx = qeTableIcx.qe;
      var d;
      var a = this.a - qeIcx;
      if (this.chigh < qeIcx) {
        if (a < qeIcx) {
          a = qeIcx;
          d = cx_mps;
          cx_index = qeTableIcx.nmps;
        } else {
          a = qeIcx;
          d = 1 ^ cx_mps;
          if (qeTableIcx.switchFlag === 1) {
            cx_mps = d;
          }
          cx_index = qeTableIcx.nlps;
        }
      } else {
        this.chigh -= qeIcx;
        if ((a & 0x8000) !== 0) {
          this.a = a;
          return cx_mps;
        }
        if (a < qeIcx) {
          d = 1 ^ cx_mps;
          if (qeTableIcx.switchFlag === 1) {
            cx_mps = d;
          }
          cx_index = qeTableIcx.nlps;
        } else {
          d = cx_mps;
          cx_index = qeTableIcx.nmps;
        }
      }
      do {
        if (this.ct === 0) {
          this.byteIn();
        }
        a <<= 1;
        this.chigh = this.chigh << 1 & 0xFFFF | this.clow >> 15 & 1;
        this.clow = this.clow << 1 & 0xFFFF;
        this.ct--;
      } while ((a & 0x8000) === 0);
      this.a = a;
      contexts[pos] = cx_index << 1 | cx_mps;
      return d;
    }
  };
  return ArithmeticDecoder;
}();
exports.ArithmeticDecoder = ArithmeticDecoder;

/***/ }),
/* 10 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CFFCompiler = exports.CFFPrivateDict = exports.CFFTopDict = exports.CFFCharset = exports.CFFIndex = exports.CFFStrings = exports.CFFHeader = exports.CFF = exports.CFFParser = exports.CFFStandardStrings = undefined;

var _util = __w_pdfjs_require__(0);

var _charsets = __w_pdfjs_require__(21);

var _encodings = __w_pdfjs_require__(4);

var MAX_SUBR_NESTING = 10;
var CFFStandardStrings = ['.notdef', 'space', 'exclam', 'quotedbl', 'numbersign', 'dollar', 'percent', 'ampersand', 'quoteright', 'parenleft', 'parenright', 'asterisk', 'plus', 'comma', 'hyphen', 'period', 'slash', 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'colon', 'semicolon', 'less', 'equal', 'greater', 'question', 'at', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'bracketleft', 'backslash', 'bracketright', 'asciicircum', 'underscore', 'quoteleft', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'braceleft', 'bar', 'braceright', 'asciitilde', 'exclamdown', 'cent', 'sterling', 'fraction', 'yen', 'florin', 'section', 'currency', 'quotesingle', 'quotedblleft', 'guillemotleft', 'guilsinglleft', 'guilsinglright', 'fi', 'fl', 'endash', 'dagger', 'daggerdbl', 'periodcentered', 'paragraph', 'bullet', 'quotesinglbase', 'quotedblbase', 'quotedblright', 'guillemotright', 'ellipsis', 'perthousand', 'questiondown', 'grave', 'acute', 'circumflex', 'tilde', 'macron', 'breve', 'dotaccent', 'dieresis', 'ring', 'cedilla', 'hungarumlaut', 'ogonek', 'caron', 'emdash', 'AE', 'ordfeminine', 'Lslash', 'Oslash', 'OE', 'ordmasculine', 'ae', 'dotlessi', 'lslash', 'oslash', 'oe', 'germandbls', 'onesuperior', 'logicalnot', 'mu', 'trademark', 'Eth', 'onehalf', 'plusminus', 'Thorn', 'onequarter', 'divide', 'brokenbar', 'degree', 'thorn', 'threequarters', 'twosuperior', 'registered', 'minus', 'eth', 'multiply', 'threesuperior', 'copyright', 'Aacute', 'Acircumflex', 'Adieresis', 'Agrave', 'Aring', 'Atilde', 'Ccedilla', 'Eacute', 'Ecircumflex', 'Edieresis', 'Egrave', 'Iacute', 'Icircumflex', 'Idieresis', 'Igrave', 'Ntilde', 'Oacute', 'Ocircumflex', 'Odieresis', 'Ograve', 'Otilde', 'Scaron', 'Uacute', 'Ucircumflex', 'Udieresis', 'Ugrave', 'Yacute', 'Ydieresis', 'Zcaron', 'aacute', 'acircumflex', 'adieresis', 'agrave', 'aring', 'atilde', 'ccedilla', 'eacute', 'ecircumflex', 'edieresis', 'egrave', 'iacute', 'icircumflex', 'idieresis', 'igrave', 'ntilde', 'oacute', 'ocircumflex', 'odieresis', 'ograve', 'otilde', 'scaron', 'uacute', 'ucircumflex', 'udieresis', 'ugrave', 'yacute', 'ydieresis', 'zcaron', 'exclamsmall', 'Hungarumlautsmall', 'dollaroldstyle', 'dollarsuperior', 'ampersandsmall', 'Acutesmall', 'parenleftsuperior', 'parenrightsuperior', 'twodotenleader', 'onedotenleader', 'zerooldstyle', 'oneoldstyle', 'twooldstyle', 'threeoldstyle', 'fouroldstyle', 'fiveoldstyle', 'sixoldstyle', 'sevenoldstyle', 'eightoldstyle', 'nineoldstyle', 'commasuperior', 'threequartersemdash', 'periodsuperior', 'questionsmall', 'asuperior', 'bsuperior', 'centsuperior', 'dsuperior', 'esuperior', 'isuperior', 'lsuperior', 'msuperior', 'nsuperior', 'osuperior', 'rsuperior', 'ssuperior', 'tsuperior', 'ff', 'ffi', 'ffl', 'parenleftinferior', 'parenrightinferior', 'Circumflexsmall', 'hyphensuperior', 'Gravesmall', 'Asmall', 'Bsmall', 'Csmall', 'Dsmall', 'Esmall', 'Fsmall', 'Gsmall', 'Hsmall', 'Ismall', 'Jsmall', 'Ksmall', 'Lsmall', 'Msmall', 'Nsmall', 'Osmall', 'Psmall', 'Qsmall', 'Rsmall', 'Ssmall', 'Tsmall', 'Usmall', 'Vsmall', 'Wsmall', 'Xsmall', 'Ysmall', 'Zsmall', 'colonmonetary', 'onefitted', 'rupiah', 'Tildesmall', 'exclamdownsmall', 'centoldstyle', 'Lslashsmall', 'Scaronsmall', 'Zcaronsmall', 'Dieresissmall', 'Brevesmall', 'Caronsmall', 'Dotaccentsmall', 'Macronsmall', 'figuredash', 'hypheninferior', 'Ogoneksmall', 'Ringsmall', 'Cedillasmall', 'questiondownsmall', 'oneeighth', 'threeeighths', 'fiveeighths', 'seveneighths', 'onethird', 'twothirds', 'zerosuperior', 'foursuperior', 'fivesuperior', 'sixsuperior', 'sevensuperior', 'eightsuperior', 'ninesuperior', 'zeroinferior', 'oneinferior', 'twoinferior', 'threeinferior', 'fourinferior', 'fiveinferior', 'sixinferior', 'seveninferior', 'eightinferior', 'nineinferior', 'centinferior', 'dollarinferior', 'periodinferior', 'commainferior', 'Agravesmall', 'Aacutesmall', 'Acircumflexsmall', 'Atildesmall', 'Adieresissmall', 'Aringsmall', 'AEsmall', 'Ccedillasmall', 'Egravesmall', 'Eacutesmall', 'Ecircumflexsmall', 'Edieresissmall', 'Igravesmall', 'Iacutesmall', 'Icircumflexsmall', 'Idieresissmall', 'Ethsmall', 'Ntildesmall', 'Ogravesmall', 'Oacutesmall', 'Ocircumflexsmall', 'Otildesmall', 'Odieresissmall', 'OEsmall', 'Oslashsmall', 'Ugravesmall', 'Uacutesmall', 'Ucircumflexsmall', 'Udieresissmall', 'Yacutesmall', 'Thornsmall', 'Ydieresissmall', '001.000', '001.001', '001.002', '001.003', 'Black', 'Bold', 'Book', 'Light', 'Medium', 'Regular', 'Roman', 'Semibold'];
var CFFParser = function CFFParserClosure() {
  var CharstringValidationData = [null, {
    id: 'hstem',
    min: 2,
    stackClearing: true,
    stem: true
  }, null, {
    id: 'vstem',
    min: 2,
    stackClearing: true,
    stem: true
  }, {
    id: 'vmoveto',
    min: 1,
    stackClearing: true
  }, {
    id: 'rlineto',
    min: 2,
    resetStack: true
  }, {
    id: 'hlineto',
    min: 1,
    resetStack: true
  }, {
    id: 'vlineto',
    min: 1,
    resetStack: true
  }, {
    id: 'rrcurveto',
    min: 6,
    resetStack: true
  }, null, {
    id: 'callsubr',
    min: 1,
    undefStack: true
  }, {
    id: 'return',
    min: 0,
    undefStack: true
  }, null, null, {
    id: 'endchar',
    min: 0,
    stackClearing: true
  }, null, null, null, {
    id: 'hstemhm',
    min: 2,
    stackClearing: true,
    stem: true
  }, {
    id: 'hintmask',
    min: 0,
    stackClearing: true
  }, {
    id: 'cntrmask',
    min: 0,
    stackClearing: true
  }, {
    id: 'rmoveto',
    min: 2,
    stackClearing: true
  }, {
    id: 'hmoveto',
    min: 1,
    stackClearing: true
  }, {
    id: 'vstemhm',
    min: 2,
    stackClearing: true,
    stem: true
  }, {
    id: 'rcurveline',
    min: 8,
    resetStack: true
  }, {
    id: 'rlinecurve',
    min: 8,
    resetStack: true
  }, {
    id: 'vvcurveto',
    min: 4,
    resetStack: true
  }, {
    id: 'hhcurveto',
    min: 4,
    resetStack: true
  }, null, {
    id: 'callgsubr',
    min: 1,
    undefStack: true
  }, {
    id: 'vhcurveto',
    min: 4,
    resetStack: true
  }, {
    id: 'hvcurveto',
    min: 4,
    resetStack: true
  }];
  var CharstringValidationData12 = [null, null, null, {
    id: 'and',
    min: 2,
    stackDelta: -1
  }, {
    id: 'or',
    min: 2,
    stackDelta: -1
  }, {
    id: 'not',
    min: 1,
    stackDelta: 0
  }, null, null, null, {
    id: 'abs',
    min: 1,
    stackDelta: 0
  }, {
    id: 'add',
    min: 2,
    stackDelta: -1,
    stackFn: function stack_div(stack, index) {
      stack[index - 2] = stack[index - 2] + stack[index - 1];
    }
  }, {
    id: 'sub',
    min: 2,
    stackDelta: -1,
    stackFn: function stack_div(stack, index) {
      stack[index - 2] = stack[index - 2] - stack[index - 1];
    }
  }, {
    id: 'div',
    min: 2,
    stackDelta: -1,
    stackFn: function stack_div(stack, index) {
      stack[index - 2] = stack[index - 2] / stack[index - 1];
    }
  }, null, {
    id: 'neg',
    min: 1,
    stackDelta: 0,
    stackFn: function stack_div(stack, index) {
      stack[index - 1] = -stack[index - 1];
    }
  }, {
    id: 'eq',
    min: 2,
    stackDelta: -1
  }, null, null, {
    id: 'drop',
    min: 1,
    stackDelta: -1
  }, null, {
    id: 'put',
    min: 2,
    stackDelta: -2
  }, {
    id: 'get',
    min: 1,
    stackDelta: 0
  }, {
    id: 'ifelse',
    min: 4,
    stackDelta: -3
  }, {
    id: 'random',
    min: 0,
    stackDelta: 1
  }, {
    id: 'mul',
    min: 2,
    stackDelta: -1,
    stackFn: function stack_div(stack, index) {
      stack[index - 2] = stack[index - 2] * stack[index - 1];
    }
  }, null, {
    id: 'sqrt',
    min: 1,
    stackDelta: 0
  }, {
    id: 'dup',
    min: 1,
    stackDelta: 1
  }, {
    id: 'exch',
    min: 2,
    stackDelta: 0
  }, {
    id: 'index',
    min: 2,
    stackDelta: 0
  }, {
    id: 'roll',
    min: 3,
    stackDelta: -2
  }, null, null, null, {
    id: 'hflex',
    min: 7,
    resetStack: true
  }, {
    id: 'flex',
    min: 13,
    resetStack: true
  }, {
    id: 'hflex1',
    min: 9,
    resetStack: true
  }, {
    id: 'flex1',
    min: 11,
    resetStack: true
  }];
  function CFFParser(file, properties, seacAnalysisEnabled) {
    this.bytes = file.getBytes();
    this.properties = properties;
    this.seacAnalysisEnabled = !!seacAnalysisEnabled;
  }
  CFFParser.prototype = {
    parse: function CFFParser_parse() {
      var properties = this.properties;
      var cff = new CFF();
      this.cff = cff;
      var header = this.parseHeader();
      var nameIndex = this.parseIndex(header.endPos);
      var topDictIndex = this.parseIndex(nameIndex.endPos);
      var stringIndex = this.parseIndex(topDictIndex.endPos);
      var globalSubrIndex = this.parseIndex(stringIndex.endPos);
      var topDictParsed = this.parseDict(topDictIndex.obj.get(0));
      var topDict = this.createDict(CFFTopDict, topDictParsed, cff.strings);
      cff.header = header.obj;
      cff.names = this.parseNameIndex(nameIndex.obj);
      cff.strings = this.parseStringIndex(stringIndex.obj);
      cff.topDict = topDict;
      cff.globalSubrIndex = globalSubrIndex.obj;
      this.parsePrivateDict(cff.topDict);
      cff.isCIDFont = topDict.hasName('ROS');
      var charStringOffset = topDict.getByName('CharStrings');
      var charStringIndex = this.parseIndex(charStringOffset).obj;
      var fontMatrix = topDict.getByName('FontMatrix');
      if (fontMatrix) {
        properties.fontMatrix = fontMatrix;
      }
      var fontBBox = topDict.getByName('FontBBox');
      if (fontBBox) {
        properties.ascent = Math.max(fontBBox[3], fontBBox[1]);
        properties.descent = Math.min(fontBBox[1], fontBBox[3]);
        properties.ascentScaled = true;
      }
      var charset, encoding;
      if (cff.isCIDFont) {
        var fdArrayIndex = this.parseIndex(topDict.getByName('FDArray')).obj;
        for (var i = 0, ii = fdArrayIndex.count; i < ii; ++i) {
          var dictRaw = fdArrayIndex.get(i);
          var fontDict = this.createDict(CFFTopDict, this.parseDict(dictRaw), cff.strings);
          this.parsePrivateDict(fontDict);
          cff.fdArray.push(fontDict);
        }
        encoding = null;
        charset = this.parseCharsets(topDict.getByName('charset'), charStringIndex.count, cff.strings, true);
        cff.fdSelect = this.parseFDSelect(topDict.getByName('FDSelect'), charStringIndex.count);
      } else {
        charset = this.parseCharsets(topDict.getByName('charset'), charStringIndex.count, cff.strings, false);
        encoding = this.parseEncoding(topDict.getByName('Encoding'), properties, cff.strings, charset.charset);
      }
      cff.charset = charset;
      cff.encoding = encoding;
      var charStringsAndSeacs = this.parseCharStrings({
        charStrings: charStringIndex,
        localSubrIndex: topDict.privateDict.subrsIndex,
        globalSubrIndex: globalSubrIndex.obj,
        fdSelect: cff.fdSelect,
        fdArray: cff.fdArray,
        privateDict: topDict.privateDict
      });
      cff.charStrings = charStringsAndSeacs.charStrings;
      cff.seacs = charStringsAndSeacs.seacs;
      cff.widths = charStringsAndSeacs.widths;
      return cff;
    },
    parseHeader: function CFFParser_parseHeader() {
      var bytes = this.bytes;
      var bytesLength = bytes.length;
      var offset = 0;
      while (offset < bytesLength && bytes[offset] !== 1) {
        ++offset;
      }
      if (offset >= bytesLength) {
        throw new _util.FormatError('Invalid CFF header');
      }
      if (offset !== 0) {
        (0, _util.info)('cff data is shifted');
        bytes = bytes.subarray(offset);
        this.bytes = bytes;
      }
      var major = bytes[0];
      var minor = bytes[1];
      var hdrSize = bytes[2];
      var offSize = bytes[3];
      var header = new CFFHeader(major, minor, hdrSize, offSize);
      return {
        obj: header,
        endPos: hdrSize
      };
    },
    parseDict: function CFFParser_parseDict(dict) {
      var pos = 0;
      function parseOperand() {
        var value = dict[pos++];
        if (value === 30) {
          return parseFloatOperand();
        } else if (value === 28) {
          value = dict[pos++];
          value = (value << 24 | dict[pos++] << 16) >> 16;
          return value;
        } else if (value === 29) {
          value = dict[pos++];
          value = value << 8 | dict[pos++];
          value = value << 8 | dict[pos++];
          value = value << 8 | dict[pos++];
          return value;
        } else if (value >= 32 && value <= 246) {
          return value - 139;
        } else if (value >= 247 && value <= 250) {
          return (value - 247) * 256 + dict[pos++] + 108;
        } else if (value >= 251 && value <= 254) {
          return -((value - 251) * 256) - dict[pos++] - 108;
        }
        (0, _util.warn)('CFFParser_parseDict: "' + value + '" is a reserved command.');
        return NaN;
      }
      function parseFloatOperand() {
        var str = '';
        var eof = 15;
        var lookup = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', 'E', 'E-', null, '-'];
        var length = dict.length;
        while (pos < length) {
          var b = dict[pos++];
          var b1 = b >> 4;
          var b2 = b & 15;
          if (b1 === eof) {
            break;
          }
          str += lookup[b1];
          if (b2 === eof) {
            break;
          }
          str += lookup[b2];
        }
        return parseFloat(str);
      }
      var operands = [];
      var entries = [];
      pos = 0;
      var end = dict.length;
      while (pos < end) {
        var b = dict[pos];
        if (b <= 21) {
          if (b === 12) {
            b = b << 8 | dict[++pos];
          }
          entries.push([b, operands]);
          operands = [];
          ++pos;
        } else {
          operands.push(parseOperand());
        }
      }
      return entries;
    },
    parseIndex: function CFFParser_parseIndex(pos) {
      var cffIndex = new CFFIndex();
      var bytes = this.bytes;
      var count = bytes[pos++] << 8 | bytes[pos++];
      var offsets = [];
      var end = pos;
      var i, ii;
      if (count !== 0) {
        var offsetSize = bytes[pos++];
        var startPos = pos + (count + 1) * offsetSize - 1;
        for (i = 0, ii = count + 1; i < ii; ++i) {
          var offset = 0;
          for (var j = 0; j < offsetSize; ++j) {
            offset <<= 8;
            offset += bytes[pos++];
          }
          offsets.push(startPos + offset);
        }
        end = offsets[count];
      }
      for (i = 0, ii = offsets.length - 1; i < ii; ++i) {
        var offsetStart = offsets[i];
        var offsetEnd = offsets[i + 1];
        cffIndex.add(bytes.subarray(offsetStart, offsetEnd));
      }
      return {
        obj: cffIndex,
        endPos: end
      };
    },
    parseNameIndex: function CFFParser_parseNameIndex(index) {
      var names = [];
      for (var i = 0, ii = index.count; i < ii; ++i) {
        var name = index.get(i);
        var length = Math.min(name.length, 127);
        var data = [];
        for (var j = 0; j < length; ++j) {
          var c = name[j];
          if (j === 0 && c === 0) {
            data[j] = c;
            continue;
          }
          if (c < 33 || c > 126 || c === 91 || c === 93 || c === 40 || c === 41 || c === 123 || c === 125 || c === 60 || c === 62 || c === 47 || c === 37 || c === 35) {
            data[j] = 95;
            continue;
          }
          data[j] = c;
        }
        names.push((0, _util.bytesToString)(data));
      }
      return names;
    },
    parseStringIndex: function CFFParser_parseStringIndex(index) {
      var strings = new CFFStrings();
      for (var i = 0, ii = index.count; i < ii; ++i) {
        var data = index.get(i);
        strings.add((0, _util.bytesToString)(data));
      }
      return strings;
    },
    createDict: function CFFParser_createDict(Type, dict, strings) {
      var cffDict = new Type(strings);
      for (var i = 0, ii = dict.length; i < ii; ++i) {
        var pair = dict[i];
        var key = pair[0];
        var value = pair[1];
        cffDict.setByKey(key, value);
      }
      return cffDict;
    },
    parseCharString: function CFFParser_parseCharString(state, data, localSubrIndex, globalSubrIndex) {
      if (!data || state.callDepth > MAX_SUBR_NESTING) {
        return false;
      }
      var stackSize = state.stackSize;
      var stack = state.stack;
      var length = data.length;
      for (var j = 0; j < length;) {
        var value = data[j++];
        var validationCommand = null;
        if (value === 12) {
          var q = data[j++];
          if (q === 0) {
            data[j - 2] = 139;
            data[j - 1] = 22;
            stackSize = 0;
          } else {
            validationCommand = CharstringValidationData12[q];
          }
        } else if (value === 28) {
          stack[stackSize] = (data[j] << 24 | data[j + 1] << 16) >> 16;
          j += 2;
          stackSize++;
        } else if (value === 14) {
          if (stackSize >= 4) {
            stackSize -= 4;
            if (this.seacAnalysisEnabled) {
              state.seac = stack.slice(stackSize, stackSize + 4);
              return false;
            }
          }
          validationCommand = CharstringValidationData[value];
        } else if (value >= 32 && value <= 246) {
          stack[stackSize] = value - 139;
          stackSize++;
        } else if (value >= 247 && value <= 254) {
          stack[stackSize] = value < 251 ? (value - 247 << 8) + data[j] + 108 : -(value - 251 << 8) - data[j] - 108;
          j++;
          stackSize++;
        } else if (value === 255) {
          stack[stackSize] = (data[j] << 24 | data[j + 1] << 16 | data[j + 2] << 8 | data[j + 3]) / 65536;
          j += 4;
          stackSize++;
        } else if (value === 19 || value === 20) {
          state.hints += stackSize >> 1;
          j += state.hints + 7 >> 3;
          stackSize %= 2;
          validationCommand = CharstringValidationData[value];
        } else if (value === 10 || value === 29) {
          var subrsIndex;
          if (value === 10) {
            subrsIndex = localSubrIndex;
          } else {
            subrsIndex = globalSubrIndex;
          }
          if (!subrsIndex) {
            validationCommand = CharstringValidationData[value];
            (0, _util.warn)('Missing subrsIndex for ' + validationCommand.id);
            return false;
          }
          var bias = 32768;
          if (subrsIndex.count < 1240) {
            bias = 107;
          } else if (subrsIndex.count < 33900) {
            bias = 1131;
          }
          var subrNumber = stack[--stackSize] + bias;
          if (subrNumber < 0 || subrNumber >= subrsIndex.count || isNaN(subrNumber)) {
            validationCommand = CharstringValidationData[value];
            (0, _util.warn)('Out of bounds subrIndex for ' + validationCommand.id);
            return false;
          }
          state.stackSize = stackSize;
          state.callDepth++;
          var valid = this.parseCharString(state, subrsIndex.get(subrNumber), localSubrIndex, globalSubrIndex);
          if (!valid) {
            return false;
          }
          state.callDepth--;
          stackSize = state.stackSize;
          continue;
        } else if (value === 11) {
          state.stackSize = stackSize;
          return true;
        } else {
          validationCommand = CharstringValidationData[value];
        }
        if (validationCommand) {
          if (validationCommand.stem) {
            state.hints += stackSize >> 1;
          }
          if ('min' in validationCommand) {
            if (!state.undefStack && stackSize < validationCommand.min) {
              (0, _util.warn)('Not enough parameters for ' + validationCommand.id + '; actual: ' + stackSize + ', expected: ' + validationCommand.min);
              return false;
            }
          }
          if (state.firstStackClearing && validationCommand.stackClearing) {
            state.firstStackClearing = false;
            stackSize -= validationCommand.min;
            if (stackSize >= 2 && validationCommand.stem) {
              stackSize %= 2;
            } else if (stackSize > 1) {
              (0, _util.warn)('Found too many parameters for stack-clearing command');
            }
            if (stackSize > 0 && stack[stackSize - 1] >= 0) {
              state.width = stack[stackSize - 1];
            }
          }
          if ('stackDelta' in validationCommand) {
            if ('stackFn' in validationCommand) {
              validationCommand.stackFn(stack, stackSize);
            }
            stackSize += validationCommand.stackDelta;
          } else if (validationCommand.stackClearing) {
            stackSize = 0;
          } else if (validationCommand.resetStack) {
            stackSize = 0;
            state.undefStack = false;
          } else if (validationCommand.undefStack) {
            stackSize = 0;
            state.undefStack = true;
            state.firstStackClearing = false;
          }
        }
      }
      state.stackSize = stackSize;
      return true;
    },
    parseCharStrings: function parseCharStrings(_ref) {
      var charStrings = _ref.charStrings,
          localSubrIndex = _ref.localSubrIndex,
          globalSubrIndex = _ref.globalSubrIndex,
          fdSelect = _ref.fdSelect,
          fdArray = _ref.fdArray,
          privateDict = _ref.privateDict;

      var seacs = [];
      var widths = [];
      var count = charStrings.count;
      for (var i = 0; i < count; i++) {
        var charstring = charStrings.get(i);
        var state = {
          callDepth: 0,
          stackSize: 0,
          stack: [],
          undefStack: true,
          hints: 0,
          firstStackClearing: true,
          seac: null,
          width: null
        };
        var valid = true;
        var localSubrToUse = null;
        var privateDictToUse = privateDict;
        if (fdSelect && fdArray.length) {
          var fdIndex = fdSelect.getFDIndex(i);
          if (fdIndex === -1) {
            (0, _util.warn)('Glyph index is not in fd select.');
            valid = false;
          }
          if (fdIndex >= fdArray.length) {
            (0, _util.warn)('Invalid fd index for glyph index.');
            valid = false;
          }
          if (valid) {
            privateDictToUse = fdArray[fdIndex].privateDict;
            localSubrToUse = privateDictToUse.subrsIndex;
          }
        } else if (localSubrIndex) {
          localSubrToUse = localSubrIndex;
        }
        if (valid) {
          valid = this.parseCharString(state, charstring, localSubrToUse, globalSubrIndex);
        }
        if (state.width !== null) {
          var nominalWidth = privateDictToUse.getByName('nominalWidthX');
          widths[i] = nominalWidth + state.width;
        } else {
          var defaultWidth = privateDictToUse.getByName('defaultWidthX');
          widths[i] = defaultWidth;
        }
        if (state.seac !== null) {
          seacs[i] = state.seac;
        }
        if (!valid) {
          charStrings.set(i, new Uint8Array([14]));
        }
      }
      return {
        charStrings: charStrings,
        seacs: seacs,
        widths: widths
      };
    },

    emptyPrivateDictionary: function CFFParser_emptyPrivateDictionary(parentDict) {
      var privateDict = this.createDict(CFFPrivateDict, [], parentDict.strings);
      parentDict.setByKey(18, [0, 0]);
      parentDict.privateDict = privateDict;
    },
    parsePrivateDict: function CFFParser_parsePrivateDict(parentDict) {
      if (!parentDict.hasName('Private')) {
        this.emptyPrivateDictionary(parentDict);
        return;
      }
      var privateOffset = parentDict.getByName('Private');
      if (!(0, _util.isArray)(privateOffset) || privateOffset.length !== 2) {
        parentDict.removeByName('Private');
        return;
      }
      var size = privateOffset[0];
      var offset = privateOffset[1];
      if (size === 0 || offset >= this.bytes.length) {
        this.emptyPrivateDictionary(parentDict);
        return;
      }
      var privateDictEnd = offset + size;
      var dictData = this.bytes.subarray(offset, privateDictEnd);
      var dict = this.parseDict(dictData);
      var privateDict = this.createDict(CFFPrivateDict, dict, parentDict.strings);
      parentDict.privateDict = privateDict;
      if (!privateDict.getByName('Subrs')) {
        return;
      }
      var subrsOffset = privateDict.getByName('Subrs');
      var relativeOffset = offset + subrsOffset;
      if (subrsOffset === 0 || relativeOffset >= this.bytes.length) {
        this.emptyPrivateDictionary(parentDict);
        return;
      }
      var subrsIndex = this.parseIndex(relativeOffset);
      privateDict.subrsIndex = subrsIndex.obj;
    },
    parseCharsets: function CFFParser_parseCharsets(pos, length, strings, cid) {
      if (pos === 0) {
        return new CFFCharset(true, CFFCharsetPredefinedTypes.ISO_ADOBE, _charsets.ISOAdobeCharset);
      } else if (pos === 1) {
        return new CFFCharset(true, CFFCharsetPredefinedTypes.EXPERT, _charsets.ExpertCharset);
      } else if (pos === 2) {
        return new CFFCharset(true, CFFCharsetPredefinedTypes.EXPERT_SUBSET, _charsets.ExpertSubsetCharset);
      }
      var bytes = this.bytes;
      var start = pos;
      var format = bytes[pos++];
      var charset = ['.notdef'];
      var id, count, i;
      length -= 1;
      switch (format) {
        case 0:
          for (i = 0; i < length; i++) {
            id = bytes[pos++] << 8 | bytes[pos++];
            charset.push(cid ? id : strings.get(id));
          }
          break;
        case 1:
          while (charset.length <= length) {
            id = bytes[pos++] << 8 | bytes[pos++];
            count = bytes[pos++];
            for (i = 0; i <= count; i++) {
              charset.push(cid ? id++ : strings.get(id++));
            }
          }
          break;
        case 2:
          while (charset.length <= length) {
            id = bytes[pos++] << 8 | bytes[pos++];
            count = bytes[pos++] << 8 | bytes[pos++];
            for (i = 0; i <= count; i++) {
              charset.push(cid ? id++ : strings.get(id++));
            }
          }
          break;
        default:
          throw new _util.FormatError('Unknown charset format');
      }
      var end = pos;
      var raw = bytes.subarray(start, end);
      return new CFFCharset(false, format, charset, raw);
    },
    parseEncoding: function CFFParser_parseEncoding(pos, properties, strings, charset) {
      var encoding = Object.create(null);
      var bytes = this.bytes;
      var predefined = false;
      var format, i, ii;
      var raw = null;
      function readSupplement() {
        var supplementsCount = bytes[pos++];
        for (i = 0; i < supplementsCount; i++) {
          var code = bytes[pos++];
          var sid = (bytes[pos++] << 8) + (bytes[pos++] & 0xff);
          encoding[code] = charset.indexOf(strings.get(sid));
        }
      }
      if (pos === 0 || pos === 1) {
        predefined = true;
        format = pos;
        var baseEncoding = pos ? _encodings.ExpertEncoding : _encodings.StandardEncoding;
        for (i = 0, ii = charset.length; i < ii; i++) {
          var index = baseEncoding.indexOf(charset[i]);
          if (index !== -1) {
            encoding[index] = i;
          }
        }
      } else {
        var dataStart = pos;
        format = bytes[pos++];
        switch (format & 0x7f) {
          case 0:
            var glyphsCount = bytes[pos++];
            for (i = 1; i <= glyphsCount; i++) {
              encoding[bytes[pos++]] = i;
            }
            break;
          case 1:
            var rangesCount = bytes[pos++];
            var gid = 1;
            for (i = 0; i < rangesCount; i++) {
              var start = bytes[pos++];
              var left = bytes[pos++];
              for (var j = start; j <= start + left; j++) {
                encoding[j] = gid++;
              }
            }
            break;
          default:
            throw new _util.FormatError('Unknown encoding format: ' + format + ' in CFF');
        }
        var dataEnd = pos;
        if (format & 0x80) {
          bytes[dataStart] &= 0x7f;
          readSupplement();
        }
        raw = bytes.subarray(dataStart, dataEnd);
      }
      format = format & 0x7f;
      return new CFFEncoding(predefined, format, encoding, raw);
    },
    parseFDSelect: function CFFParser_parseFDSelect(pos, length) {
      var start = pos;
      var bytes = this.bytes;
      var format = bytes[pos++];
      var fdSelect = [],
          rawBytes;
      var i,
          invalidFirstGID = false;
      switch (format) {
        case 0:
          for (i = 0; i < length; ++i) {
            var id = bytes[pos++];
            fdSelect.push(id);
          }
          rawBytes = bytes.subarray(start, pos);
          break;
        case 3:
          var rangesCount = bytes[pos++] << 8 | bytes[pos++];
          for (i = 0; i < rangesCount; ++i) {
            var first = bytes[pos++] << 8 | bytes[pos++];
            if (i === 0 && first !== 0) {
              (0, _util.warn)('parseFDSelect: The first range must have a first GID of 0' + ' -- trying to recover.');
              invalidFirstGID = true;
              first = 0;
            }
            var fdIndex = bytes[pos++];
            var next = bytes[pos] << 8 | bytes[pos + 1];
            for (var j = first; j < next; ++j) {
              fdSelect.push(fdIndex);
            }
          }
          pos += 2;
          rawBytes = bytes.subarray(start, pos);
          if (invalidFirstGID) {
            rawBytes[3] = rawBytes[4] = 0;
          }
          break;
        default:
          throw new _util.FormatError('parseFDSelect: Unknown format "' + format + '".');
      }
      if (fdSelect.length !== length) {
        throw new _util.FormatError('parseFDSelect: Invalid font data.');
      }
      return new CFFFDSelect(fdSelect, rawBytes);
    }
  };
  return CFFParser;
}();
var CFF = function CFFClosure() {
  function CFF() {
    this.header = null;
    this.names = [];
    this.topDict = null;
    this.strings = new CFFStrings();
    this.globalSubrIndex = null;
    this.encoding = null;
    this.charset = null;
    this.charStrings = null;
    this.fdArray = [];
    this.fdSelect = null;
    this.isCIDFont = false;
  }
  return CFF;
}();
var CFFHeader = function CFFHeaderClosure() {
  function CFFHeader(major, minor, hdrSize, offSize) {
    this.major = major;
    this.minor = minor;
    this.hdrSize = hdrSize;
    this.offSize = offSize;
  }
  return CFFHeader;
}();
var CFFStrings = function CFFStringsClosure() {
  function CFFStrings() {
    this.strings = [];
  }
  CFFStrings.prototype = {
    get: function CFFStrings_get(index) {
      if (index >= 0 && index <= 390) {
        return CFFStandardStrings[index];
      }
      if (index - 391 <= this.strings.length) {
        return this.strings[index - 391];
      }
      return CFFStandardStrings[0];
    },
    add: function CFFStrings_add(value) {
      this.strings.push(value);
    },
    get count() {
      return this.strings.length;
    }
  };
  return CFFStrings;
}();
var CFFIndex = function CFFIndexClosure() {
  function CFFIndex() {
    this.objects = [];
    this.length = 0;
  }
  CFFIndex.prototype = {
    add: function CFFIndex_add(data) {
      this.length += data.length;
      this.objects.push(data);
    },
    set: function CFFIndex_set(index, data) {
      this.length += data.length - this.objects[index].length;
      this.objects[index] = data;
    },
    get: function CFFIndex_get(index) {
      return this.objects[index];
    },
    get count() {
      return this.objects.length;
    }
  };
  return CFFIndex;
}();
var CFFDict = function CFFDictClosure() {
  function CFFDict(tables, strings) {
    this.keyToNameMap = tables.keyToNameMap;
    this.nameToKeyMap = tables.nameToKeyMap;
    this.defaults = tables.defaults;
    this.types = tables.types;
    this.opcodes = tables.opcodes;
    this.order = tables.order;
    this.strings = strings;
    this.values = Object.create(null);
  }
  CFFDict.prototype = {
    setByKey: function CFFDict_setByKey(key, value) {
      if (!(key in this.keyToNameMap)) {
        return false;
      }
      var valueLength = value.length;
      if (valueLength === 0) {
        return true;
      }
      for (var i = 0; i < valueLength; i++) {
        if (isNaN(value[i])) {
          (0, _util.warn)('Invalid CFFDict value: "' + value + '" for key "' + key + '".');
          return true;
        }
      }
      var type = this.types[key];
      if (type === 'num' || type === 'sid' || type === 'offset') {
        value = value[0];
      }
      this.values[key] = value;
      return true;
    },
    setByName: function CFFDict_setByName(name, value) {
      if (!(name in this.nameToKeyMap)) {
        throw new _util.FormatError('Invalid dictionary name "' + name + '"');
      }
      this.values[this.nameToKeyMap[name]] = value;
    },
    hasName: function CFFDict_hasName(name) {
      return this.nameToKeyMap[name] in this.values;
    },
    getByName: function CFFDict_getByName(name) {
      if (!(name in this.nameToKeyMap)) {
        throw new _util.FormatError('Invalid dictionary name ' + name + '"');
      }
      var key = this.nameToKeyMap[name];
      if (!(key in this.values)) {
        return this.defaults[key];
      }
      return this.values[key];
    },
    removeByName: function CFFDict_removeByName(name) {
      delete this.values[this.nameToKeyMap[name]];
    }
  };
  CFFDict.createTables = function CFFDict_createTables(layout) {
    var tables = {
      keyToNameMap: {},
      nameToKeyMap: {},
      defaults: {},
      types: {},
      opcodes: {},
      order: []
    };
    for (var i = 0, ii = layout.length; i < ii; ++i) {
      var entry = layout[i];
      var key = (0, _util.isArray)(entry[0]) ? (entry[0][0] << 8) + entry[0][1] : entry[0];
      tables.keyToNameMap[key] = entry[1];
      tables.nameToKeyMap[entry[1]] = key;
      tables.types[key] = entry[2];
      tables.defaults[key] = entry[3];
      tables.opcodes[key] = (0, _util.isArray)(entry[0]) ? entry[0] : [entry[0]];
      tables.order.push(key);
    }
    return tables;
  };
  return CFFDict;
}();
var CFFTopDict = function CFFTopDictClosure() {
  var layout = [[[12, 30], 'ROS', ['sid', 'sid', 'num'], null], [[12, 20], 'SyntheticBase', 'num', null], [0, 'version', 'sid', null], [1, 'Notice', 'sid', null], [[12, 0], 'Copyright', 'sid', null], [2, 'FullName', 'sid', null], [3, 'FamilyName', 'sid', null], [4, 'Weight', 'sid', null], [[12, 1], 'isFixedPitch', 'num', 0], [[12, 2], 'ItalicAngle', 'num', 0], [[12, 3], 'UnderlinePosition', 'num', -100], [[12, 4], 'UnderlineThickness', 'num', 50], [[12, 5], 'PaintType', 'num', 0], [[12, 6], 'CharstringType', 'num', 2], [[12, 7], 'FontMatrix', ['num', 'num', 'num', 'num', 'num', 'num'], [0.001, 0, 0, 0.001, 0, 0]], [13, 'UniqueID', 'num', null], [5, 'FontBBox', ['num', 'num', 'num', 'num'], [0, 0, 0, 0]], [[12, 8], 'StrokeWidth', 'num', 0], [14, 'XUID', 'array', null], [15, 'charset', 'offset', 0], [16, 'Encoding', 'offset', 0], [17, 'CharStrings', 'offset', 0], [18, 'Private', ['offset', 'offset'], null], [[12, 21], 'PostScript', 'sid', null], [[12, 22], 'BaseFontName', 'sid', null], [[12, 23], 'BaseFontBlend', 'delta', null], [[12, 31], 'CIDFontVersion', 'num', 0], [[12, 32], 'CIDFontRevision', 'num', 0], [[12, 33], 'CIDFontType', 'num', 0], [[12, 34], 'CIDCount', 'num', 8720], [[12, 35], 'UIDBase', 'num', null], [[12, 37], 'FDSelect', 'offset', null], [[12, 36], 'FDArray', 'offset', null], [[12, 38], 'FontName', 'sid', null]];
  var tables = null;
  function CFFTopDict(strings) {
    if (tables === null) {
      tables = CFFDict.createTables(layout);
    }
    CFFDict.call(this, tables, strings);
    this.privateDict = null;
  }
  CFFTopDict.prototype = Object.create(CFFDict.prototype);
  return CFFTopDict;
}();
var CFFPrivateDict = function CFFPrivateDictClosure() {
  var layout = [[6, 'BlueValues', 'delta', null], [7, 'OtherBlues', 'delta', null], [8, 'FamilyBlues', 'delta', null], [9, 'FamilyOtherBlues', 'delta', null], [[12, 9], 'BlueScale', 'num', 0.039625], [[12, 10], 'BlueShift', 'num', 7], [[12, 11], 'BlueFuzz', 'num', 1], [10, 'StdHW', 'num', null], [11, 'StdVW', 'num', null], [[12, 12], 'StemSnapH', 'delta', null], [[12, 13], 'StemSnapV', 'delta', null], [[12, 14], 'ForceBold', 'num', 0], [[12, 17], 'LanguageGroup', 'num', 0], [[12, 18], 'ExpansionFactor', 'num', 0.06], [[12, 19], 'initialRandomSeed', 'num', 0], [20, 'defaultWidthX', 'num', 0], [21, 'nominalWidthX', 'num', 0], [19, 'Subrs', 'offset', null]];
  var tables = null;
  function CFFPrivateDict(strings) {
    if (tables === null) {
      tables = CFFDict.createTables(layout);
    }
    CFFDict.call(this, tables, strings);
    this.subrsIndex = null;
  }
  CFFPrivateDict.prototype = Object.create(CFFDict.prototype);
  return CFFPrivateDict;
}();
var CFFCharsetPredefinedTypes = {
  ISO_ADOBE: 0,
  EXPERT: 1,
  EXPERT_SUBSET: 2
};
var CFFCharset = function CFFCharsetClosure() {
  function CFFCharset(predefined, format, charset, raw) {
    this.predefined = predefined;
    this.format = format;
    this.charset = charset;
    this.raw = raw;
  }
  return CFFCharset;
}();
var CFFEncoding = function CFFEncodingClosure() {
  function CFFEncoding(predefined, format, encoding, raw) {
    this.predefined = predefined;
    this.format = format;
    this.encoding = encoding;
    this.raw = raw;
  }
  return CFFEncoding;
}();
var CFFFDSelect = function CFFFDSelectClosure() {
  function CFFFDSelect(fdSelect, raw) {
    this.fdSelect = fdSelect;
    this.raw = raw;
  }
  CFFFDSelect.prototype = {
    getFDIndex: function CFFFDSelect_get(glyphIndex) {
      if (glyphIndex < 0 || glyphIndex >= this.fdSelect.length) {
        return -1;
      }
      return this.fdSelect[glyphIndex];
    }
  };
  return CFFFDSelect;
}();
var CFFOffsetTracker = function CFFOffsetTrackerClosure() {
  function CFFOffsetTracker() {
    this.offsets = Object.create(null);
  }
  CFFOffsetTracker.prototype = {
    isTracking: function CFFOffsetTracker_isTracking(key) {
      return key in this.offsets;
    },
    track: function CFFOffsetTracker_track(key, location) {
      if (key in this.offsets) {
        throw new _util.FormatError('Already tracking location of ' + key);
      }
      this.offsets[key] = location;
    },
    offset: function CFFOffsetTracker_offset(value) {
      for (var key in this.offsets) {
        this.offsets[key] += value;
      }
    },
    setEntryLocation: function CFFOffsetTracker_setEntryLocation(key, values, output) {
      if (!(key in this.offsets)) {
        throw new _util.FormatError('Not tracking location of ' + key);
      }
      var data = output.data;
      var dataOffset = this.offsets[key];
      var size = 5;
      for (var i = 0, ii = values.length; i < ii; ++i) {
        var offset0 = i * size + dataOffset;
        var offset1 = offset0 + 1;
        var offset2 = offset0 + 2;
        var offset3 = offset0 + 3;
        var offset4 = offset0 + 4;
        if (data[offset0] !== 0x1d || data[offset1] !== 0 || data[offset2] !== 0 || data[offset3] !== 0 || data[offset4] !== 0) {
          throw new _util.FormatError('writing to an offset that is not empty');
        }
        var value = values[i];
        data[offset0] = 0x1d;
        data[offset1] = value >> 24 & 0xFF;
        data[offset2] = value >> 16 & 0xFF;
        data[offset3] = value >> 8 & 0xFF;
        data[offset4] = value & 0xFF;
      }
    }
  };
  return CFFOffsetTracker;
}();
var CFFCompiler = function CFFCompilerClosure() {
  function CFFCompiler(cff) {
    this.cff = cff;
  }
  CFFCompiler.prototype = {
    compile: function CFFCompiler_compile() {
      var cff = this.cff;
      var output = {
        data: [],
        length: 0,
        add: function CFFCompiler_add(data) {
          this.data = this.data.concat(data);
          this.length = this.data.length;
        }
      };
      var header = this.compileHeader(cff.header);
      output.add(header);
      var nameIndex = this.compileNameIndex(cff.names);
      output.add(nameIndex);
      if (cff.isCIDFont) {
        if (cff.topDict.hasName('FontMatrix')) {
          var base = cff.topDict.getByName('FontMatrix');
          cff.topDict.removeByName('FontMatrix');
          for (var i = 0, ii = cff.fdArray.length; i < ii; i++) {
            var subDict = cff.fdArray[i];
            var matrix = base.slice(0);
            if (subDict.hasName('FontMatrix')) {
              matrix = _util.Util.transform(matrix, subDict.getByName('FontMatrix'));
            }
            subDict.setByName('FontMatrix', matrix);
          }
        }
      }
      var compiled = this.compileTopDicts([cff.topDict], output.length, cff.isCIDFont);
      output.add(compiled.output);
      var topDictTracker = compiled.trackers[0];
      var stringIndex = this.compileStringIndex(cff.strings.strings);
      output.add(stringIndex);
      var globalSubrIndex = this.compileIndex(cff.globalSubrIndex);
      output.add(globalSubrIndex);
      if (cff.encoding && cff.topDict.hasName('Encoding')) {
        if (cff.encoding.predefined) {
          topDictTracker.setEntryLocation('Encoding', [cff.encoding.format], output);
        } else {
          var encoding = this.compileEncoding(cff.encoding);
          topDictTracker.setEntryLocation('Encoding', [output.length], output);
          output.add(encoding);
        }
      }
      if (cff.charset && cff.topDict.hasName('charset')) {
        if (cff.charset.predefined) {
          topDictTracker.setEntryLocation('charset', [cff.charset.format], output);
        } else {
          var charset = this.compileCharset(cff.charset);
          topDictTracker.setEntryLocation('charset', [output.length], output);
          output.add(charset);
        }
      }
      var charStrings = this.compileCharStrings(cff.charStrings);
      topDictTracker.setEntryLocation('CharStrings', [output.length], output);
      output.add(charStrings);
      if (cff.isCIDFont) {
        topDictTracker.setEntryLocation('FDSelect', [output.length], output);
        var fdSelect = this.compileFDSelect(cff.fdSelect.raw);
        output.add(fdSelect);
        compiled = this.compileTopDicts(cff.fdArray, output.length, true);
        topDictTracker.setEntryLocation('FDArray', [output.length], output);
        output.add(compiled.output);
        var fontDictTrackers = compiled.trackers;
        this.compilePrivateDicts(cff.fdArray, fontDictTrackers, output);
      }
      this.compilePrivateDicts([cff.topDict], [topDictTracker], output);
      output.add([0]);
      return output.data;
    },
    encodeNumber: function CFFCompiler_encodeNumber(value) {
      if (parseFloat(value) === parseInt(value, 10) && !isNaN(value)) {
        return this.encodeInteger(value);
      }
      return this.encodeFloat(value);
    },
    encodeFloat: function CFFCompiler_encodeFloat(num) {
      var value = num.toString();
      var m = /\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(value);
      if (m) {
        var epsilon = parseFloat('1e' + ((m[2] ? +m[2] : 0) + m[1].length));
        value = (Math.round(num * epsilon) / epsilon).toString();
      }
      var nibbles = '';
      var i, ii;
      for (i = 0, ii = value.length; i < ii; ++i) {
        var a = value[i];
        if (a === 'e') {
          nibbles += value[++i] === '-' ? 'c' : 'b';
        } else if (a === '.') {
          nibbles += 'a';
        } else if (a === '-') {
          nibbles += 'e';
        } else {
          nibbles += a;
        }
      }
      nibbles += nibbles.length & 1 ? 'f' : 'ff';
      var out = [30];
      for (i = 0, ii = nibbles.length; i < ii; i += 2) {
        out.push(parseInt(nibbles.substr(i, 2), 16));
      }
      return out;
    },
    encodeInteger: function CFFCompiler_encodeInteger(value) {
      var code;
      if (value >= -107 && value <= 107) {
        code = [value + 139];
      } else if (value >= 108 && value <= 1131) {
        value = value - 108;
        code = [(value >> 8) + 247, value & 0xFF];
      } else if (value >= -1131 && value <= -108) {
        value = -value - 108;
        code = [(value >> 8) + 251, value & 0xFF];
      } else if (value >= -32768 && value <= 32767) {
        code = [0x1c, value >> 8 & 0xFF, value & 0xFF];
      } else {
        code = [0x1d, value >> 24 & 0xFF, value >> 16 & 0xFF, value >> 8 & 0xFF, value & 0xFF];
      }
      return code;
    },
    compileHeader: function CFFCompiler_compileHeader(header) {
      return [header.major, header.minor, header.hdrSize, header.offSize];
    },
    compileNameIndex: function CFFCompiler_compileNameIndex(names) {
      var nameIndex = new CFFIndex();
      for (var i = 0, ii = names.length; i < ii; ++i) {
        nameIndex.add((0, _util.stringToBytes)(names[i]));
      }
      return this.compileIndex(nameIndex);
    },
    compileTopDicts: function CFFCompiler_compileTopDicts(dicts, length, removeCidKeys) {
      var fontDictTrackers = [];
      var fdArrayIndex = new CFFIndex();
      for (var i = 0, ii = dicts.length; i < ii; ++i) {
        var fontDict = dicts[i];
        if (removeCidKeys) {
          fontDict.removeByName('CIDFontVersion');
          fontDict.removeByName('CIDFontRevision');
          fontDict.removeByName('CIDFontType');
          fontDict.removeByName('CIDCount');
          fontDict.removeByName('UIDBase');
        }
        var fontDictTracker = new CFFOffsetTracker();
        var fontDictData = this.compileDict(fontDict, fontDictTracker);
        fontDictTrackers.push(fontDictTracker);
        fdArrayIndex.add(fontDictData);
        fontDictTracker.offset(length);
      }
      fdArrayIndex = this.compileIndex(fdArrayIndex, fontDictTrackers);
      return {
        trackers: fontDictTrackers,
        output: fdArrayIndex
      };
    },
    compilePrivateDicts: function CFFCompiler_compilePrivateDicts(dicts, trackers, output) {
      for (var i = 0, ii = dicts.length; i < ii; ++i) {
        var fontDict = dicts[i];
        var privateDict = fontDict.privateDict;
        if (!privateDict || !fontDict.hasName('Private')) {
          throw new _util.FormatError('There must be a private dictionary.');
        }
        var privateDictTracker = new CFFOffsetTracker();
        var privateDictData = this.compileDict(privateDict, privateDictTracker);
        var outputLength = output.length;
        privateDictTracker.offset(outputLength);
        if (!privateDictData.length) {
          outputLength = 0;
        }
        trackers[i].setEntryLocation('Private', [privateDictData.length, outputLength], output);
        output.add(privateDictData);
        if (privateDict.subrsIndex && privateDict.hasName('Subrs')) {
          var subrs = this.compileIndex(privateDict.subrsIndex);
          privateDictTracker.setEntryLocation('Subrs', [privateDictData.length], output);
          output.add(subrs);
        }
      }
    },
    compileDict: function CFFCompiler_compileDict(dict, offsetTracker) {
      var out = [];
      var order = dict.order;
      for (var i = 0; i < order.length; ++i) {
        var key = order[i];
        if (!(key in dict.values)) {
          continue;
        }
        var values = dict.values[key];
        var types = dict.types[key];
        if (!(0, _util.isArray)(types)) {
          types = [types];
        }
        if (!(0, _util.isArray)(values)) {
          values = [values];
        }
        if (values.length === 0) {
          continue;
        }
        for (var j = 0, jj = types.length; j < jj; ++j) {
          var type = types[j];
          var value = values[j];
          switch (type) {
            case 'num':
            case 'sid':
              out = out.concat(this.encodeNumber(value));
              break;
            case 'offset':
              var name = dict.keyToNameMap[key];
              if (!offsetTracker.isTracking(name)) {
                offsetTracker.track(name, out.length);
              }
              out = out.concat([0x1d, 0, 0, 0, 0]);
              break;
            case 'array':
            case 'delta':
              out = out.concat(this.encodeNumber(value));
              for (var k = 1, kk = values.length; k < kk; ++k) {
                out = out.concat(this.encodeNumber(values[k]));
              }
              break;
            default:
              throw new _util.FormatError('Unknown data type of ' + type);
          }
        }
        out = out.concat(dict.opcodes[key]);
      }
      return out;
    },
    compileStringIndex: function CFFCompiler_compileStringIndex(strings) {
      var stringIndex = new CFFIndex();
      for (var i = 0, ii = strings.length; i < ii; ++i) {
        stringIndex.add((0, _util.stringToBytes)(strings[i]));
      }
      return this.compileIndex(stringIndex);
    },
    compileGlobalSubrIndex: function CFFCompiler_compileGlobalSubrIndex() {
      var globalSubrIndex = this.cff.globalSubrIndex;
      this.out.writeByteArray(this.compileIndex(globalSubrIndex));
    },
    compileCharStrings: function CFFCompiler_compileCharStrings(charStrings) {
      return this.compileIndex(charStrings);
    },
    compileCharset: function CFFCompiler_compileCharset(charset) {
      return this.compileTypedArray(charset.raw);
    },
    compileEncoding: function CFFCompiler_compileEncoding(encoding) {
      return this.compileTypedArray(encoding.raw);
    },
    compileFDSelect: function CFFCompiler_compileFDSelect(fdSelect) {
      return this.compileTypedArray(fdSelect);
    },
    compileTypedArray: function CFFCompiler_compileTypedArray(data) {
      var out = [];
      for (var i = 0, ii = data.length; i < ii; ++i) {
        out[i] = data[i];
      }
      return out;
    },
    compileIndex: function CFFCompiler_compileIndex(index, trackers) {
      trackers = trackers || [];
      var objects = index.objects;
      var count = objects.length;
      if (count === 0) {
        return [0, 0, 0];
      }
      var data = [count >> 8 & 0xFF, count & 0xff];
      var lastOffset = 1,
          i;
      for (i = 0; i < count; ++i) {
        lastOffset += objects[i].length;
      }
      var offsetSize;
      if (lastOffset < 0x100) {
        offsetSize = 1;
      } else if (lastOffset < 0x10000) {
        offsetSize = 2;
      } else if (lastOffset < 0x1000000) {
        offsetSize = 3;
      } else {
        offsetSize = 4;
      }
      data.push(offsetSize);
      var relativeOffset = 1;
      for (i = 0; i < count + 1; i++) {
        if (offsetSize === 1) {
          data.push(relativeOffset & 0xFF);
        } else if (offsetSize === 2) {
          data.push(relativeOffset >> 8 & 0xFF, relativeOffset & 0xFF);
        } else if (offsetSize === 3) {
          data.push(relativeOffset >> 16 & 0xFF, relativeOffset >> 8 & 0xFF, relativeOffset & 0xFF);
        } else {
          data.push(relativeOffset >>> 24 & 0xFF, relativeOffset >> 16 & 0xFF, relativeOffset >> 8 & 0xFF, relativeOffset & 0xFF);
        }
        if (objects[i]) {
          relativeOffset += objects[i].length;
        }
      }
      for (i = 0; i < count; i++) {
        if (trackers[i]) {
          trackers[i].offset(data.length);
        }
        for (var j = 0, jj = objects[i].length; j < jj; j++) {
          data.push(objects[i][j]);
        }
      }
      return data;
    }
  };
  return CFFCompiler;
}();
exports.CFFStandardStrings = CFFStandardStrings;
exports.CFFParser = CFFParser;
exports.CFF = CFF;
exports.CFFHeader = CFFHeader;
exports.CFFStrings = CFFStrings;
exports.CFFIndex = CFFIndex;
exports.CFFCharset = CFFCharset;
exports.CFFTopDict = CFFTopDict;
exports.CFFPrivateDict = CFFPrivateDict;
exports.CFFCompiler = CFFCompiler;

/***/ }),
/* 11 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChunkedStreamManager = exports.ChunkedStream = undefined;

var _util = __w_pdfjs_require__(0);

var ChunkedStream = function ChunkedStreamClosure() {
  function ChunkedStream(length, chunkSize, manager) {
    this.bytes = new Uint8Array(length);
    this.start = 0;
    this.pos = 0;
    this.end = length;
    this.chunkSize = chunkSize;
    this.loadedChunks = [];
    this.numChunksLoaded = 0;
    this.numChunks = Math.ceil(length / chunkSize);
    this.manager = manager;
    this.progressiveDataLength = 0;
    this.lastSuccessfulEnsureByteChunk = -1;
  }
  ChunkedStream.prototype = {
    getMissingChunks: function ChunkedStream_getMissingChunks() {
      var chunks = [];
      for (var chunk = 0, n = this.numChunks; chunk < n; ++chunk) {
        if (!this.loadedChunks[chunk]) {
          chunks.push(chunk);
        }
      }
      return chunks;
    },
    getBaseStreams: function ChunkedStream_getBaseStreams() {
      return [this];
    },
    allChunksLoaded: function ChunkedStream_allChunksLoaded() {
      return this.numChunksLoaded === this.numChunks;
    },
    onReceiveData: function ChunkedStream_onReceiveData(begin, chunk) {
      var end = begin + chunk.byteLength;
      if (begin % this.chunkSize !== 0) {
        throw new Error('Bad begin offset: ' + begin);
      }
      var length = this.bytes.length;
      if (end % this.chunkSize !== 0 && end !== length) {
        throw new Error('Bad end offset: ' + end);
      }
      this.bytes.set(new Uint8Array(chunk), begin);
      var chunkSize = this.chunkSize;
      var beginChunk = Math.floor(begin / chunkSize);
      var endChunk = Math.floor((end - 1) / chunkSize) + 1;
      var curChunk;
      for (curChunk = beginChunk; curChunk < endChunk; ++curChunk) {
        if (!this.loadedChunks[curChunk]) {
          this.loadedChunks[curChunk] = true;
          ++this.numChunksLoaded;
        }
      }
    },
    onReceiveProgressiveData: function ChunkedStream_onReceiveProgressiveData(data) {
      var position = this.progressiveDataLength;
      var beginChunk = Math.floor(position / this.chunkSize);
      this.bytes.set(new Uint8Array(data), position);
      position += data.byteLength;
      this.progressiveDataLength = position;
      var endChunk = position >= this.end ? this.numChunks : Math.floor(position / this.chunkSize);
      var curChunk;
      for (curChunk = beginChunk; curChunk < endChunk; ++curChunk) {
        if (!this.loadedChunks[curChunk]) {
          this.loadedChunks[curChunk] = true;
          ++this.numChunksLoaded;
        }
      }
    },
    ensureByte: function ChunkedStream_ensureByte(pos) {
      var chunk = Math.floor(pos / this.chunkSize);
      if (chunk === this.lastSuccessfulEnsureByteChunk) {
        return;
      }
      if (!this.loadedChunks[chunk]) {
        throw new _util.MissingDataException(pos, pos + 1);
      }
      this.lastSuccessfulEnsureByteChunk = chunk;
    },
    ensureRange: function ChunkedStream_ensureRange(begin, end) {
      if (begin >= end) {
        return;
      }
      if (end <= this.progressiveDataLength) {
        return;
      }
      var chunkSize = this.chunkSize;
      var beginChunk = Math.floor(begin / chunkSize);
      var endChunk = Math.floor((end - 1) / chunkSize) + 1;
      for (var chunk = beginChunk; chunk < endChunk; ++chunk) {
        if (!this.loadedChunks[chunk]) {
          throw new _util.MissingDataException(begin, end);
        }
      }
    },
    nextEmptyChunk: function ChunkedStream_nextEmptyChunk(beginChunk) {
      var chunk,
          numChunks = this.numChunks;
      for (var i = 0; i < numChunks; ++i) {
        chunk = (beginChunk + i) % numChunks;
        if (!this.loadedChunks[chunk]) {
          return chunk;
        }
      }
      return null;
    },
    hasChunk: function ChunkedStream_hasChunk(chunk) {
      return !!this.loadedChunks[chunk];
    },
    get length() {
      return this.end - this.start;
    },
    get isEmpty() {
      return this.length === 0;
    },
    getByte: function ChunkedStream_getByte() {
      var pos = this.pos;
      if (pos >= this.end) {
        return -1;
      }
      this.ensureByte(pos);
      return this.bytes[this.pos++];
    },
    getUint16: function ChunkedStream_getUint16() {
      var b0 = this.getByte();
      var b1 = this.getByte();
      if (b0 === -1 || b1 === -1) {
        return -1;
      }
      return (b0 << 8) + b1;
    },
    getInt32: function ChunkedStream_getInt32() {
      var b0 = this.getByte();
      var b1 = this.getByte();
      var b2 = this.getByte();
      var b3 = this.getByte();
      return (b0 << 24) + (b1 << 16) + (b2 << 8) + b3;
    },
    getBytes: function ChunkedStream_getBytes(length) {
      var bytes = this.bytes;
      var pos = this.pos;
      var strEnd = this.end;
      if (!length) {
        this.ensureRange(pos, strEnd);
        return bytes.subarray(pos, strEnd);
      }
      var end = pos + length;
      if (end > strEnd) {
        end = strEnd;
      }
      this.ensureRange(pos, end);
      this.pos = end;
      return bytes.subarray(pos, end);
    },
    peekByte: function ChunkedStream_peekByte() {
      var peekedByte = this.getByte();
      this.pos--;
      return peekedByte;
    },
    peekBytes: function ChunkedStream_peekBytes(length) {
      var bytes = this.getBytes(length);
      this.pos -= bytes.length;
      return bytes;
    },
    getByteRange: function ChunkedStream_getBytes(begin, end) {
      this.ensureRange(begin, end);
      return this.bytes.subarray(begin, end);
    },
    skip: function ChunkedStream_skip(n) {
      if (!n) {
        n = 1;
      }
      this.pos += n;
    },
    reset: function ChunkedStream_reset() {
      this.pos = this.start;
    },
    moveStart: function ChunkedStream_moveStart() {
      this.start = this.pos;
    },
    makeSubStream: function ChunkedStream_makeSubStream(start, length, dict) {
      this.ensureRange(start, start + length);
      function ChunkedStreamSubstream() {}
      ChunkedStreamSubstream.prototype = Object.create(this);
      ChunkedStreamSubstream.prototype.getMissingChunks = function () {
        var chunkSize = this.chunkSize;
        var beginChunk = Math.floor(this.start / chunkSize);
        var endChunk = Math.floor((this.end - 1) / chunkSize) + 1;
        var missingChunks = [];
        for (var chunk = beginChunk; chunk < endChunk; ++chunk) {
          if (!this.loadedChunks[chunk]) {
            missingChunks.push(chunk);
          }
        }
        return missingChunks;
      };
      var subStream = new ChunkedStreamSubstream();
      subStream.pos = subStream.start = start;
      subStream.end = start + length || this.end;
      subStream.dict = dict;
      return subStream;
    }
  };
  return ChunkedStream;
}();
var ChunkedStreamManager = function ChunkedStreamManagerClosure() {
  function ChunkedStreamManager(pdfNetworkStream, args) {
    var chunkSize = args.rangeChunkSize;
    var length = args.length;
    this.stream = new ChunkedStream(length, chunkSize, this);
    this.length = length;
    this.chunkSize = chunkSize;
    this.pdfNetworkStream = pdfNetworkStream;
    this.url = args.url;
    this.disableAutoFetch = args.disableAutoFetch;
    this.msgHandler = args.msgHandler;
    this.currRequestId = 0;
    this.chunksNeededByRequest = Object.create(null);
    this.requestsByChunk = Object.create(null);
    this.promisesByRequest = Object.create(null);
    this.progressiveDataLength = 0;
    this.aborted = false;
    this._loadedStreamCapability = (0, _util.createPromiseCapability)();
  }
  ChunkedStreamManager.prototype = {
    onLoadedStream: function ChunkedStreamManager_getLoadedStream() {
      return this._loadedStreamCapability.promise;
    },
    sendRequest: function ChunkedStreamManager_sendRequest(begin, end) {
      var _this = this;

      var rangeReader = this.pdfNetworkStream.getRangeReader(begin, end);
      if (!rangeReader.isStreamingSupported) {
        rangeReader.onProgress = this.onProgress.bind(this);
      }
      var chunks = [],
          loaded = 0;
      var manager = this;
      var promise = new Promise(function (resolve, reject) {
        var readChunk = function readChunk(chunk) {
          try {
            if (!chunk.done) {
              var data = chunk.value;
              chunks.push(data);
              loaded += (0, _util.arrayByteLength)(data);
              if (rangeReader.isStreamingSupported) {
                manager.onProgress({ loaded: loaded });
              }
              rangeReader.read().then(readChunk, reject);
              return;
            }
            var chunkData = (0, _util.arraysToBytes)(chunks);
            chunks = null;
            resolve(chunkData);
          } catch (e) {
            reject(e);
          }
        };
        rangeReader.read().then(readChunk, reject);
      });
      promise.then(function (data) {
        if (_this.aborted) {
          return;
        }
        _this.onReceiveData({
          chunk: data,
          begin: begin
        });
      });
    },
    requestAllChunks: function ChunkedStreamManager_requestAllChunks() {
      var missingChunks = this.stream.getMissingChunks();
      this._requestChunks(missingChunks);
      return this._loadedStreamCapability.promise;
    },
    _requestChunks: function ChunkedStreamManager_requestChunks(chunks) {
      var requestId = this.currRequestId++;
      var i, ii;
      var chunksNeeded = Object.create(null);
      this.chunksNeededByRequest[requestId] = chunksNeeded;
      for (i = 0, ii = chunks.length; i < ii; i++) {
        if (!this.stream.hasChunk(chunks[i])) {
          chunksNeeded[chunks[i]] = true;
        }
      }
      if ((0, _util.isEmptyObj)(chunksNeeded)) {
        return Promise.resolve();
      }
      var capability = (0, _util.createPromiseCapability)();
      this.promisesByRequest[requestId] = capability;
      var chunksToRequest = [];
      for (var chunk in chunksNeeded) {
        chunk = chunk | 0;
        if (!(chunk in this.requestsByChunk)) {
          this.requestsByChunk[chunk] = [];
          chunksToRequest.push(chunk);
        }
        this.requestsByChunk[chunk].push(requestId);
      }
      if (!chunksToRequest.length) {
        return capability.promise;
      }
      var groupedChunksToRequest = this.groupChunks(chunksToRequest);
      for (i = 0; i < groupedChunksToRequest.length; ++i) {
        var groupedChunk = groupedChunksToRequest[i];
        var begin = groupedChunk.beginChunk * this.chunkSize;
        var end = Math.min(groupedChunk.endChunk * this.chunkSize, this.length);
        this.sendRequest(begin, end);
      }
      return capability.promise;
    },
    getStream: function ChunkedStreamManager_getStream() {
      return this.stream;
    },
    requestRange: function ChunkedStreamManager_requestRange(begin, end) {
      end = Math.min(end, this.length);
      var beginChunk = this.getBeginChunk(begin);
      var endChunk = this.getEndChunk(end);
      var chunks = [];
      for (var chunk = beginChunk; chunk < endChunk; ++chunk) {
        chunks.push(chunk);
      }
      return this._requestChunks(chunks);
    },
    requestRanges: function ChunkedStreamManager_requestRanges(ranges) {
      ranges = ranges || [];
      var chunksToRequest = [];
      for (var i = 0; i < ranges.length; i++) {
        var beginChunk = this.getBeginChunk(ranges[i].begin);
        var endChunk = this.getEndChunk(ranges[i].end);
        for (var chunk = beginChunk; chunk < endChunk; ++chunk) {
          if (chunksToRequest.indexOf(chunk) < 0) {
            chunksToRequest.push(chunk);
          }
        }
      }
      chunksToRequest.sort(function (a, b) {
        return a - b;
      });
      return this._requestChunks(chunksToRequest);
    },
    groupChunks: function ChunkedStreamManager_groupChunks(chunks) {
      var groupedChunks = [];
      var beginChunk = -1;
      var prevChunk = -1;
      for (var i = 0; i < chunks.length; ++i) {
        var chunk = chunks[i];
        if (beginChunk < 0) {
          beginChunk = chunk;
        }
        if (prevChunk >= 0 && prevChunk + 1 !== chunk) {
          groupedChunks.push({
            beginChunk: beginChunk,
            endChunk: prevChunk + 1
          });
          beginChunk = chunk;
        }
        if (i + 1 === chunks.length) {
          groupedChunks.push({
            beginChunk: beginChunk,
            endChunk: chunk + 1
          });
        }
        prevChunk = chunk;
      }
      return groupedChunks;
    },
    onProgress: function ChunkedStreamManager_onProgress(args) {
      var bytesLoaded = this.stream.numChunksLoaded * this.chunkSize + args.loaded;
      this.msgHandler.send('DocProgress', {
        loaded: bytesLoaded,
        total: this.length
      });
    },
    onReceiveData: function ChunkedStreamManager_onReceiveData(args) {
      var chunk = args.chunk;
      var isProgressive = args.begin === undefined;
      var begin = isProgressive ? this.progressiveDataLength : args.begin;
      var end = begin + chunk.byteLength;
      var beginChunk = Math.floor(begin / this.chunkSize);
      var endChunk = end < this.length ? Math.floor(end / this.chunkSize) : Math.ceil(end / this.chunkSize);
      if (isProgressive) {
        this.stream.onReceiveProgressiveData(chunk);
        this.progressiveDataLength = end;
      } else {
        this.stream.onReceiveData(begin, chunk);
      }
      if (this.stream.allChunksLoaded()) {
        this._loadedStreamCapability.resolve(this.stream);
      }
      var loadedRequests = [];
      var i, requestId;
      for (chunk = beginChunk; chunk < endChunk; ++chunk) {
        var requestIds = this.requestsByChunk[chunk] || [];
        delete this.requestsByChunk[chunk];
        for (i = 0; i < requestIds.length; ++i) {
          requestId = requestIds[i];
          var chunksNeeded = this.chunksNeededByRequest[requestId];
          if (chunk in chunksNeeded) {
            delete chunksNeeded[chunk];
          }
          if (!(0, _util.isEmptyObj)(chunksNeeded)) {
            continue;
          }
          loadedRequests.push(requestId);
        }
      }
      if (!this.disableAutoFetch && (0, _util.isEmptyObj)(this.requestsByChunk)) {
        var nextEmptyChunk;
        if (this.stream.numChunksLoaded === 1) {
          var lastChunk = this.stream.numChunks - 1;
          if (!this.stream.hasChunk(lastChunk)) {
            nextEmptyChunk = lastChunk;
          }
        } else {
          nextEmptyChunk = this.stream.nextEmptyChunk(endChunk);
        }
        if ((0, _util.isInt)(nextEmptyChunk)) {
          this._requestChunks([nextEmptyChunk]);
        }
      }
      for (i = 0; i < loadedRequests.length; ++i) {
        requestId = loadedRequests[i];
        var capability = this.promisesByRequest[requestId];
        delete this.promisesByRequest[requestId];
        capability.resolve();
      }
      this.msgHandler.send('DocProgress', {
        loaded: this.stream.numChunksLoaded * this.chunkSize,
        total: this.length
      });
    },
    onError: function ChunkedStreamManager_onError(err) {
      this._loadedStreamCapability.reject(err);
    },
    getBeginChunk: function ChunkedStreamManager_getBeginChunk(begin) {
      var chunk = Math.floor(begin / this.chunkSize);
      return chunk;
    },
    getEndChunk: function ChunkedStreamManager_getEndChunk(end) {
      var chunk = Math.floor((end - 1) / this.chunkSize) + 1;
      return chunk;
    },
    abort: function ChunkedStreamManager_abort() {
      this.aborted = true;
      if (this.pdfNetworkStream) {
        this.pdfNetworkStream.cancelAllRequests('abort');
      }
      for (var requestId in this.promisesByRequest) {
        var capability = this.promisesByRequest[requestId];
        capability.reject(new Error('Request was aborted'));
      }
    }
  };
  return ChunkedStreamManager;
}();
exports.ChunkedStream = ChunkedStream;
exports.ChunkedStreamManager = ChunkedStreamManager;

/***/ }),
/* 12 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateSHA512 = exports.calculateSHA384 = exports.calculateSHA256 = exports.calculateMD5 = exports.PDF20 = exports.PDF17 = exports.CipherTransformFactory = exports.ARCFourCipher = exports.AES256Cipher = exports.AES128Cipher = undefined;

var _util = __w_pdfjs_require__(0);

var _primitives = __w_pdfjs_require__(1);

var _stream = __w_pdfjs_require__(2);

var ARCFourCipher = function ARCFourCipherClosure() {
  function ARCFourCipher(key) {
    this.a = 0;
    this.b = 0;
    var s = new Uint8Array(256);
    var i,
        j = 0,
        tmp,
        keyLength = key.length;
    for (i = 0; i < 256; ++i) {
      s[i] = i;
    }
    for (i = 0; i < 256; ++i) {
      tmp = s[i];
      j = j + tmp + key[i % keyLength] & 0xFF;
      s[i] = s[j];
      s[j] = tmp;
    }
    this.s = s;
  }
  ARCFourCipher.prototype = {
    encryptBlock: function ARCFourCipher_encryptBlock(data) {
      var i,
          n = data.length,
          tmp,
          tmp2;
      var a = this.a,
          b = this.b,
          s = this.s;
      var output = new Uint8Array(n);
      for (i = 0; i < n; ++i) {
        a = a + 1 & 0xFF;
        tmp = s[a];
        b = b + tmp & 0xFF;
        tmp2 = s[b];
        s[a] = tmp2;
        s[b] = tmp;
        output[i] = data[i] ^ s[tmp + tmp2 & 0xFF];
      }
      this.a = a;
      this.b = b;
      return output;
    }
  };
  ARCFourCipher.prototype.decryptBlock = ARCFourCipher.prototype.encryptBlock;
  return ARCFourCipher;
}();
var calculateMD5 = function calculateMD5Closure() {
  var r = new Uint8Array([7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21]);
  var k = new Int32Array([-680876936, -389564586, 606105819, -1044525330, -176418897, 1200080426, -1473231341, -45705983, 1770035416, -1958414417, -42063, -1990404162, 1804603682, -40341101, -1502002290, 1236535329, -165796510, -1069501632, 643717713, -373897302, -701558691, 38016083, -660478335, -405537848, 568446438, -1019803690, -187363961, 1163531501, -1444681467, -51403784, 1735328473, -1926607734, -378558, -2022574463, 1839030562, -35309556, -1530992060, 1272893353, -155497632, -1094730640, 681279174, -358537222, -722521979, 76029189, -640364487, -421815835, 530742520, -995338651, -198630844, 1126891415, -1416354905, -57434055, 1700485571, -1894986606, -1051523, -2054922799, 1873313359, -30611744, -1560198380, 1309151649, -145523070, -1120210379, 718787259, -343485551]);
  function hash(data, offset, length) {
    var h0 = 1732584193,
        h1 = -271733879,
        h2 = -1732584194,
        h3 = 271733878;
    var paddedLength = length + 72 & ~63;
    var padded = new Uint8Array(paddedLength);
    var i, j, n;
    for (i = 0; i < length; ++i) {
      padded[i] = data[offset++];
    }
    padded[i++] = 0x80;
    n = paddedLength - 8;
    while (i < n) {
      padded[i++] = 0;
    }
    padded[i++] = length << 3 & 0xFF;
    padded[i++] = length >> 5 & 0xFF;
    padded[i++] = length >> 13 & 0xFF;
    padded[i++] = length >> 21 & 0xFF;
    padded[i++] = length >>> 29 & 0xFF;
    padded[i++] = 0;
    padded[i++] = 0;
    padded[i++] = 0;
    var w = new Int32Array(16);
    for (i = 0; i < paddedLength;) {
      for (j = 0; j < 16; ++j, i += 4) {
        w[j] = padded[i] | padded[i + 1] << 8 | padded[i + 2] << 16 | padded[i + 3] << 24;
      }
      var a = h0,
          b = h1,
          c = h2,
          d = h3,
          f,
          g;
      for (j = 0; j < 64; ++j) {
        if (j < 16) {
          f = b & c | ~b & d;
          g = j;
        } else if (j < 32) {
          f = d & b | ~d & c;
          g = 5 * j + 1 & 15;
        } else if (j < 48) {
          f = b ^ c ^ d;
          g = 3 * j + 5 & 15;
        } else {
          f = c ^ (b | ~d);
          g = 7 * j & 15;
        }
        var tmp = d,
            rotateArg = a + f + k[j] + w[g] | 0,
            rotate = r[j];
        d = c;
        c = b;
        b = b + (rotateArg << rotate | rotateArg >>> 32 - rotate) | 0;
        a = tmp;
      }
      h0 = h0 + a | 0;
      h1 = h1 + b | 0;
      h2 = h2 + c | 0;
      h3 = h3 + d | 0;
    }
    return new Uint8Array([h0 & 0xFF, h0 >> 8 & 0xFF, h0 >> 16 & 0xFF, h0 >>> 24 & 0xFF, h1 & 0xFF, h1 >> 8 & 0xFF, h1 >> 16 & 0xFF, h1 >>> 24 & 0xFF, h2 & 0xFF, h2 >> 8 & 0xFF, h2 >> 16 & 0xFF, h2 >>> 24 & 0xFF, h3 & 0xFF, h3 >> 8 & 0xFF, h3 >> 16 & 0xFF, h3 >>> 24 & 0xFF]);
  }
  return hash;
}();
var Word64 = function Word64Closure() {
  function Word64(highInteger, lowInteger) {
    this.high = highInteger | 0;
    this.low = lowInteger | 0;
  }
  Word64.prototype = {
    and: function Word64_and(word) {
      this.high &= word.high;
      this.low &= word.low;
    },
    xor: function Word64_xor(word) {
      this.high ^= word.high;
      this.low ^= word.low;
    },
    or: function Word64_or(word) {
      this.high |= word.high;
      this.low |= word.low;
    },
    shiftRight: function Word64_shiftRight(places) {
      if (places >= 32) {
        this.low = this.high >>> places - 32 | 0;
        this.high = 0;
      } else {
        this.low = this.low >>> places | this.high << 32 - places;
        this.high = this.high >>> places | 0;
      }
    },
    shiftLeft: function Word64_shiftLeft(places) {
      if (places >= 32) {
        this.high = this.low << places - 32;
        this.low = 0;
      } else {
        this.high = this.high << places | this.low >>> 32 - places;
        this.low = this.low << places;
      }
    },
    rotateRight: function Word64_rotateRight(places) {
      var low, high;
      if (places & 32) {
        high = this.low;
        low = this.high;
      } else {
        low = this.low;
        high = this.high;
      }
      places &= 31;
      this.low = low >>> places | high << 32 - places;
      this.high = high >>> places | low << 32 - places;
    },
    not: function Word64_not() {
      this.high = ~this.high;
      this.low = ~this.low;
    },
    add: function Word64_add(word) {
      var lowAdd = (this.low >>> 0) + (word.low >>> 0);
      var highAdd = (this.high >>> 0) + (word.high >>> 0);
      if (lowAdd > 0xFFFFFFFF) {
        highAdd += 1;
      }
      this.low = lowAdd | 0;
      this.high = highAdd | 0;
    },
    copyTo: function Word64_copyTo(bytes, offset) {
      bytes[offset] = this.high >>> 24 & 0xFF;
      bytes[offset + 1] = this.high >> 16 & 0xFF;
      bytes[offset + 2] = this.high >> 8 & 0xFF;
      bytes[offset + 3] = this.high & 0xFF;
      bytes[offset + 4] = this.low >>> 24 & 0xFF;
      bytes[offset + 5] = this.low >> 16 & 0xFF;
      bytes[offset + 6] = this.low >> 8 & 0xFF;
      bytes[offset + 7] = this.low & 0xFF;
    },
    assign: function Word64_assign(word) {
      this.high = word.high;
      this.low = word.low;
    }
  };
  return Word64;
}();
var calculateSHA256 = function calculateSHA256Closure() {
  function rotr(x, n) {
    return x >>> n | x << 32 - n;
  }
  function ch(x, y, z) {
    return x & y ^ ~x & z;
  }
  function maj(x, y, z) {
    return x & y ^ x & z ^ y & z;
  }
  function sigma(x) {
    return rotr(x, 2) ^ rotr(x, 13) ^ rotr(x, 22);
  }
  function sigmaPrime(x) {
    return rotr(x, 6) ^ rotr(x, 11) ^ rotr(x, 25);
  }
  function littleSigma(x) {
    return rotr(x, 7) ^ rotr(x, 18) ^ x >>> 3;
  }
  function littleSigmaPrime(x) {
    return rotr(x, 17) ^ rotr(x, 19) ^ x >>> 10;
  }
  var k = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
  function hash(data, offset, length) {
    var h0 = 0x6a09e667,
        h1 = 0xbb67ae85,
        h2 = 0x3c6ef372,
        h3 = 0xa54ff53a,
        h4 = 0x510e527f,
        h5 = 0x9b05688c,
        h6 = 0x1f83d9ab,
        h7 = 0x5be0cd19;
    var paddedLength = Math.ceil((length + 9) / 64) * 64;
    var padded = new Uint8Array(paddedLength);
    var i, j, n;
    for (i = 0; i < length; ++i) {
      padded[i] = data[offset++];
    }
    padded[i++] = 0x80;
    n = paddedLength - 8;
    while (i < n) {
      padded[i++] = 0;
    }
    padded[i++] = 0;
    padded[i++] = 0;
    padded[i++] = 0;
    padded[i++] = length >>> 29 & 0xFF;
    padded[i++] = length >> 21 & 0xFF;
    padded[i++] = length >> 13 & 0xFF;
    padded[i++] = length >> 5 & 0xFF;
    padded[i++] = length << 3 & 0xFF;
    var w = new Uint32Array(64);
    for (i = 0; i < paddedLength;) {
      for (j = 0; j < 16; ++j) {
        w[j] = padded[i] << 24 | padded[i + 1] << 16 | padded[i + 2] << 8 | padded[i + 3];
        i += 4;
      }
      for (j = 16; j < 64; ++j) {
        w[j] = littleSigmaPrime(w[j - 2]) + w[j - 7] + littleSigma(w[j - 15]) + w[j - 16] | 0;
      }
      var a = h0,
          b = h1,
          c = h2,
          d = h3,
          e = h4,
          f = h5,
          g = h6,
          h = h7,
          t1,
          t2;
      for (j = 0; j < 64; ++j) {
        t1 = h + sigmaPrime(e) + ch(e, f, g) + k[j] + w[j];
        t2 = sigma(a) + maj(a, b, c);
        h = g;
        g = f;
        f = e;
        e = d + t1 | 0;
        d = c;
        c = b;
        b = a;
        a = t1 + t2 | 0;
      }
      h0 = h0 + a | 0;
      h1 = h1 + b | 0;
      h2 = h2 + c | 0;
      h3 = h3 + d | 0;
      h4 = h4 + e | 0;
      h5 = h5 + f | 0;
      h6 = h6 + g | 0;
      h7 = h7 + h | 0;
    }
    return new Uint8Array([h0 >> 24 & 0xFF, h0 >> 16 & 0xFF, h0 >> 8 & 0xFF, h0 & 0xFF, h1 >> 24 & 0xFF, h1 >> 16 & 0xFF, h1 >> 8 & 0xFF, h1 & 0xFF, h2 >> 24 & 0xFF, h2 >> 16 & 0xFF, h2 >> 8 & 0xFF, h2 & 0xFF, h3 >> 24 & 0xFF, h3 >> 16 & 0xFF, h3 >> 8 & 0xFF, h3 & 0xFF, h4 >> 24 & 0xFF, h4 >> 16 & 0xFF, h4 >> 8 & 0xFF, h4 & 0xFF, h5 >> 24 & 0xFF, h5 >> 16 & 0xFF, h5 >> 8 & 0xFF, h5 & 0xFF, h6 >> 24 & 0xFF, h6 >> 16 & 0xFF, h6 >> 8 & 0xFF, h6 & 0xFF, h7 >> 24 & 0xFF, h7 >> 16 & 0xFF, h7 >> 8 & 0xFF, h7 & 0xFF]);
  }
  return hash;
}();
var calculateSHA512 = function calculateSHA512Closure() {
  function ch(result, x, y, z, tmp) {
    result.assign(x);
    result.and(y);
    tmp.assign(x);
    tmp.not();
    tmp.and(z);
    result.xor(tmp);
  }
  function maj(result, x, y, z, tmp) {
    result.assign(x);
    result.and(y);
    tmp.assign(x);
    tmp.and(z);
    result.xor(tmp);
    tmp.assign(y);
    tmp.and(z);
    result.xor(tmp);
  }
  function sigma(result, x, tmp) {
    result.assign(x);
    result.rotateRight(28);
    tmp.assign(x);
    tmp.rotateRight(34);
    result.xor(tmp);
    tmp.assign(x);
    tmp.rotateRight(39);
    result.xor(tmp);
  }
  function sigmaPrime(result, x, tmp) {
    result.assign(x);
    result.rotateRight(14);
    tmp.assign(x);
    tmp.rotateRight(18);
    result.xor(tmp);
    tmp.assign(x);
    tmp.rotateRight(41);
    result.xor(tmp);
  }
  function littleSigma(result, x, tmp) {
    result.assign(x);
    result.rotateRight(1);
    tmp.assign(x);
    tmp.rotateRight(8);
    result.xor(tmp);
    tmp.assign(x);
    tmp.shiftRight(7);
    result.xor(tmp);
  }
  function littleSigmaPrime(result, x, tmp) {
    result.assign(x);
    result.rotateRight(19);
    tmp.assign(x);
    tmp.rotateRight(61);
    result.xor(tmp);
    tmp.assign(x);
    tmp.shiftRight(6);
    result.xor(tmp);
  }
  var k = [new Word64(0x428a2f98, 0xd728ae22), new Word64(0x71374491, 0x23ef65cd), new Word64(0xb5c0fbcf, 0xec4d3b2f), new Word64(0xe9b5dba5, 0x8189dbbc), new Word64(0x3956c25b, 0xf348b538), new Word64(0x59f111f1, 0xb605d019), new Word64(0x923f82a4, 0xaf194f9b), new Word64(0xab1c5ed5, 0xda6d8118), new Word64(0xd807aa98, 0xa3030242), new Word64(0x12835b01, 0x45706fbe), new Word64(0x243185be, 0x4ee4b28c), new Word64(0x550c7dc3, 0xd5ffb4e2), new Word64(0x72be5d74, 0xf27b896f), new Word64(0x80deb1fe, 0x3b1696b1), new Word64(0x9bdc06a7, 0x25c71235), new Word64(0xc19bf174, 0xcf692694), new Word64(0xe49b69c1, 0x9ef14ad2), new Word64(0xefbe4786, 0x384f25e3), new Word64(0x0fc19dc6, 0x8b8cd5b5), new Word64(0x240ca1cc, 0x77ac9c65), new Word64(0x2de92c6f, 0x592b0275), new Word64(0x4a7484aa, 0x6ea6e483), new Word64(0x5cb0a9dc, 0xbd41fbd4), new Word64(0x76f988da, 0x831153b5), new Word64(0x983e5152, 0xee66dfab), new Word64(0xa831c66d, 0x2db43210), new Word64(0xb00327c8, 0x98fb213f), new Word64(0xbf597fc7, 0xbeef0ee4), new Word64(0xc6e00bf3, 0x3da88fc2), new Word64(0xd5a79147, 0x930aa725), new Word64(0x06ca6351, 0xe003826f), new Word64(0x14292967, 0x0a0e6e70), new Word64(0x27b70a85, 0x46d22ffc), new Word64(0x2e1b2138, 0x5c26c926), new Word64(0x4d2c6dfc, 0x5ac42aed), new Word64(0x53380d13, 0x9d95b3df), new Word64(0x650a7354, 0x8baf63de), new Word64(0x766a0abb, 0x3c77b2a8), new Word64(0x81c2c92e, 0x47edaee6), new Word64(0x92722c85, 0x1482353b), new Word64(0xa2bfe8a1, 0x4cf10364), new Word64(0xa81a664b, 0xbc423001), new Word64(0xc24b8b70, 0xd0f89791), new Word64(0xc76c51a3, 0x0654be30), new Word64(0xd192e819, 0xd6ef5218), new Word64(0xd6990624, 0x5565a910), new Word64(0xf40e3585, 0x5771202a), new Word64(0x106aa070, 0x32bbd1b8), new Word64(0x19a4c116, 0xb8d2d0c8), new Word64(0x1e376c08, 0x5141ab53), new Word64(0x2748774c, 0xdf8eeb99), new Word64(0x34b0bcb5, 0xe19b48a8), new Word64(0x391c0cb3, 0xc5c95a63), new Word64(0x4ed8aa4a, 0xe3418acb), new Word64(0x5b9cca4f, 0x7763e373), new Word64(0x682e6ff3, 0xd6b2b8a3), new Word64(0x748f82ee, 0x5defb2fc), new Word64(0x78a5636f, 0x43172f60), new Word64(0x84c87814, 0xa1f0ab72), new Word64(0x8cc70208, 0x1a6439ec), new Word64(0x90befffa, 0x23631e28), new Word64(0xa4506ceb, 0xde82bde9), new Word64(0xbef9a3f7, 0xb2c67915), new Word64(0xc67178f2, 0xe372532b), new Word64(0xca273ece, 0xea26619c), new Word64(0xd186b8c7, 0x21c0c207), new Word64(0xeada7dd6, 0xcde0eb1e), new Word64(0xf57d4f7f, 0xee6ed178), new Word64(0x06f067aa, 0x72176fba), new Word64(0x0a637dc5, 0xa2c898a6), new Word64(0x113f9804, 0xbef90dae), new Word64(0x1b710b35, 0x131c471b), new Word64(0x28db77f5, 0x23047d84), new Word64(0x32caab7b, 0x40c72493), new Word64(0x3c9ebe0a, 0x15c9bebc), new Word64(0x431d67c4, 0x9c100d4c), new Word64(0x4cc5d4be, 0xcb3e42b6), new Word64(0x597f299c, 0xfc657e2a), new Word64(0x5fcb6fab, 0x3ad6faec), new Word64(0x6c44198c, 0x4a475817)];
  function hash(data, offset, length, mode384) {
    mode384 = !!mode384;
    var h0, h1, h2, h3, h4, h5, h6, h7;
    if (!mode384) {
      h0 = new Word64(0x6a09e667, 0xf3bcc908);
      h1 = new Word64(0xbb67ae85, 0x84caa73b);
      h2 = new Word64(0x3c6ef372, 0xfe94f82b);
      h3 = new Word64(0xa54ff53a, 0x5f1d36f1);
      h4 = new Word64(0x510e527f, 0xade682d1);
      h5 = new Word64(0x9b05688c, 0x2b3e6c1f);
      h6 = new Word64(0x1f83d9ab, 0xfb41bd6b);
      h7 = new Word64(0x5be0cd19, 0x137e2179);
    } else {
      h0 = new Word64(0xcbbb9d5d, 0xc1059ed8);
      h1 = new Word64(0x629a292a, 0x367cd507);
      h2 = new Word64(0x9159015a, 0x3070dd17);
      h3 = new Word64(0x152fecd8, 0xf70e5939);
      h4 = new Word64(0x67332667, 0xffc00b31);
      h5 = new Word64(0x8eb44a87, 0x68581511);
      h6 = new Word64(0xdb0c2e0d, 0x64f98fa7);
      h7 = new Word64(0x47b5481d, 0xbefa4fa4);
    }
    var paddedLength = Math.ceil((length + 17) / 128) * 128;
    var padded = new Uint8Array(paddedLength);
    var i, j, n;
    for (i = 0; i < length; ++i) {
      padded[i] = data[offset++];
    }
    padded[i++] = 0x80;
    n = paddedLength - 16;
    while (i < n) {
      padded[i++] = 0;
    }
    padded[i++] = 0;
    padded[i++] = 0;
    padded[i++] = 0;
    padded[i++] = 0;
    padded[i++] = 0;
    padded[i++] = 0;
    padded[i++] = 0;
    padded[i++] = 0;
    padded[i++] = 0;
    padded[i++] = 0;
    padded[i++] = 0;
    padded[i++] = length >>> 29 & 0xFF;
    padded[i++] = length >> 21 & 0xFF;
    padded[i++] = length >> 13 & 0xFF;
    padded[i++] = length >> 5 & 0xFF;
    padded[i++] = length << 3 & 0xFF;
    var w = new Array(80);
    for (i = 0; i < 80; i++) {
      w[i] = new Word64(0, 0);
    }
    var a = new Word64(0, 0),
        b = new Word64(0, 0),
        c = new Word64(0, 0);
    var d = new Word64(0, 0),
        e = new Word64(0, 0),
        f = new Word64(0, 0);
    var g = new Word64(0, 0),
        h = new Word64(0, 0);
    var t1 = new Word64(0, 0),
        t2 = new Word64(0, 0);
    var tmp1 = new Word64(0, 0),
        tmp2 = new Word64(0, 0),
        tmp3;
    for (i = 0; i < paddedLength;) {
      for (j = 0; j < 16; ++j) {
        w[j].high = padded[i] << 24 | padded[i + 1] << 16 | padded[i + 2] << 8 | padded[i + 3];
        w[j].low = padded[i + 4] << 24 | padded[i + 5] << 16 | padded[i + 6] << 8 | padded[i + 7];
        i += 8;
      }
      for (j = 16; j < 80; ++j) {
        tmp3 = w[j];
        littleSigmaPrime(tmp3, w[j - 2], tmp2);
        tmp3.add(w[j - 7]);
        littleSigma(tmp1, w[j - 15], tmp2);
        tmp3.add(tmp1);
        tmp3.add(w[j - 16]);
      }
      a.assign(h0);
      b.assign(h1);
      c.assign(h2);
      d.assign(h3);
      e.assign(h4);
      f.assign(h5);
      g.assign(h6);
      h.assign(h7);
      for (j = 0; j < 80; ++j) {
        t1.assign(h);
        sigmaPrime(tmp1, e, tmp2);
        t1.add(tmp1);
        ch(tmp1, e, f, g, tmp2);
        t1.add(tmp1);
        t1.add(k[j]);
        t1.add(w[j]);
        sigma(t2, a, tmp2);
        maj(tmp1, a, b, c, tmp2);
        t2.add(tmp1);
        tmp3 = h;
        h = g;
        g = f;
        f = e;
        d.add(t1);
        e = d;
        d = c;
        c = b;
        b = a;
        tmp3.assign(t1);
        tmp3.add(t2);
        a = tmp3;
      }
      h0.add(a);
      h1.add(b);
      h2.add(c);
      h3.add(d);
      h4.add(e);
      h5.add(f);
      h6.add(g);
      h7.add(h);
    }
    var result;
    if (!mode384) {
      result = new Uint8Array(64);
      h0.copyTo(result, 0);
      h1.copyTo(result, 8);
      h2.copyTo(result, 16);
      h3.copyTo(result, 24);
      h4.copyTo(result, 32);
      h5.copyTo(result, 40);
      h6.copyTo(result, 48);
      h7.copyTo(result, 56);
    } else {
      result = new Uint8Array(48);
      h0.copyTo(result, 0);
      h1.copyTo(result, 8);
      h2.copyTo(result, 16);
      h3.copyTo(result, 24);
      h4.copyTo(result, 32);
      h5.copyTo(result, 40);
    }
    return result;
  }
  return hash;
}();
var calculateSHA384 = function calculateSHA384Closure() {
  function hash(data, offset, length) {
    return calculateSHA512(data, offset, length, true);
  }
  return hash;
}();
var NullCipher = function NullCipherClosure() {
  function NullCipher() {}
  NullCipher.prototype = {
    decryptBlock: function NullCipher_decryptBlock(data) {
      return data;
    }
  };
  return NullCipher;
}();
var AES128Cipher = function AES128CipherClosure() {
  var rcon = new Uint8Array([0x8d, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36, 0x6c, 0xd8, 0xab, 0x4d, 0x9a, 0x2f, 0x5e, 0xbc, 0x63, 0xc6, 0x97, 0x35, 0x6a, 0xd4, 0xb3, 0x7d, 0xfa, 0xef, 0xc5, 0x91, 0x39, 0x72, 0xe4, 0xd3, 0xbd, 0x61, 0xc2, 0x9f, 0x25, 0x4a, 0x94, 0x33, 0x66, 0xcc, 0x83, 0x1d, 0x3a, 0x74, 0xe8, 0xcb, 0x8d, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36, 0x6c, 0xd8, 0xab, 0x4d, 0x9a, 0x2f, 0x5e, 0xbc, 0x63, 0xc6, 0x97, 0x35, 0x6a, 0xd4, 0xb3, 0x7d, 0xfa, 0xef, 0xc5, 0x91, 0x39, 0x72, 0xe4, 0xd3, 0xbd, 0x61, 0xc2, 0x9f, 0x25, 0x4a, 0x94, 0x33, 0x66, 0xcc, 0x83, 0x1d, 0x3a, 0x74, 0xe8, 0xcb, 0x8d, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36, 0x6c, 0xd8, 0xab, 0x4d, 0x9a, 0x2f, 0x5e, 0xbc, 0x63, 0xc6, 0x97, 0x35, 0x6a, 0xd4, 0xb3, 0x7d, 0xfa, 0xef, 0xc5, 0x91, 0x39, 0x72, 0xe4, 0xd3, 0xbd, 0x61, 0xc2, 0x9f, 0x25, 0x4a, 0x94, 0x33, 0x66, 0xcc, 0x83, 0x1d, 0x3a, 0x74, 0xe8, 0xcb, 0x8d, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36, 0x6c, 0xd8, 0xab, 0x4d, 0x9a, 0x2f, 0x5e, 0xbc, 0x63, 0xc6, 0x97, 0x35, 0x6a, 0xd4, 0xb3, 0x7d, 0xfa, 0xef, 0xc5, 0x91, 0x39, 0x72, 0xe4, 0xd3, 0xbd, 0x61, 0xc2, 0x9f, 0x25, 0x4a, 0x94, 0x33, 0x66, 0xcc, 0x83, 0x1d, 0x3a, 0x74, 0xe8, 0xcb, 0x8d, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36, 0x6c, 0xd8, 0xab, 0x4d, 0x9a, 0x2f, 0x5e, 0xbc, 0x63, 0xc6, 0x97, 0x35, 0x6a, 0xd4, 0xb3, 0x7d, 0xfa, 0xef, 0xc5, 0x91, 0x39, 0x72, 0xe4, 0xd3, 0xbd, 0x61, 0xc2, 0x9f, 0x25, 0x4a, 0x94, 0x33, 0x66, 0xcc, 0x83, 0x1d, 0x3a, 0x74, 0xe8, 0xcb, 0x8d]);
  var s = new Uint8Array([0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5, 0x30, 0x01, 0x67, 0x2b, 0xfe, 0xd7, 0xab, 0x76, 0xca, 0x82, 0xc9, 0x7d, 0xfa, 0x59, 0x47, 0xf0, 0xad, 0xd4, 0xa2, 0xaf, 0x9c, 0xa4, 0x72, 0xc0, 0xb7, 0xfd, 0x93, 0x26, 0x36, 0x3f, 0xf7, 0xcc, 0x34, 0xa5, 0xe5, 0xf1, 0x71, 0xd8, 0x31, 0x15, 0x04, 0xc7, 0x23, 0xc3, 0x18, 0x96, 0x05, 0x9a, 0x07, 0x12, 0x80, 0xe2, 0xeb, 0x27, 0xb2, 0x75, 0x09, 0x83, 0x2c, 0x1a, 0x1b, 0x6e, 0x5a, 0xa0, 0x52, 0x3b, 0xd6, 0xb3, 0x29, 0xe3, 0x2f, 0x84, 0x53, 0xd1, 0x00, 0xed, 0x20, 0xfc, 0xb1, 0x5b, 0x6a, 0xcb, 0xbe, 0x39, 0x4a, 0x4c, 0x58, 0xcf, 0xd0, 0xef, 0xaa, 0xfb, 0x43, 0x4d, 0x33, 0x85, 0x45, 0xf9, 0x02, 0x7f, 0x50, 0x3c, 0x9f, 0xa8, 0x51, 0xa3, 0x40, 0x8f, 0x92, 0x9d, 0x38, 0xf5, 0xbc, 0xb6, 0xda, 0x21, 0x10, 0xff, 0xf3, 0xd2, 0xcd, 0x0c, 0x13, 0xec, 0x5f, 0x97, 0x44, 0x17, 0xc4, 0xa7, 0x7e, 0x3d, 0x64, 0x5d, 0x19, 0x73, 0x60, 0x81, 0x4f, 0xdc, 0x22, 0x2a, 0x90, 0x88, 0x46, 0xee, 0xb8, 0x14, 0xde, 0x5e, 0x0b, 0xdb, 0xe0, 0x32, 0x3a, 0x0a, 0x49, 0x06, 0x24, 0x5c, 0xc2, 0xd3, 0xac, 0x62, 0x91, 0x95, 0xe4, 0x79, 0xe7, 0xc8, 0x37, 0x6d, 0x8d, 0xd5, 0x4e, 0xa9, 0x6c, 0x56, 0xf4, 0xea, 0x65, 0x7a, 0xae, 0x08, 0xba, 0x78, 0x25, 0x2e, 0x1c, 0xa6, 0xb4, 0xc6, 0xe8, 0xdd, 0x74, 0x1f, 0x4b, 0xbd, 0x8b, 0x8a, 0x70, 0x3e, 0xb5, 0x66, 0x48, 0x03, 0xf6, 0x0e, 0x61, 0x35, 0x57, 0xb9, 0x86, 0xc1, 0x1d, 0x9e, 0xe1, 0xf8, 0x98, 0x11, 0x69, 0xd9, 0x8e, 0x94, 0x9b, 0x1e, 0x87, 0xe9, 0xce, 0x55, 0x28, 0xdf, 0x8c, 0xa1, 0x89, 0x0d, 0xbf, 0xe6, 0x42, 0x68, 0x41, 0x99, 0x2d, 0x0f, 0xb0, 0x54, 0xbb, 0x16]);
  var inv_s = new Uint8Array([0x52, 0x09, 0x6a, 0xd5, 0x30, 0x36, 0xa5, 0x38, 0xbf, 0x40, 0xa3, 0x9e, 0x81, 0xf3, 0xd7, 0xfb, 0x7c, 0xe3, 0x39, 0x82, 0x9b, 0x2f, 0xff, 0x87, 0x34, 0x8e, 0x43, 0x44, 0xc4, 0xde, 0xe9, 0xcb, 0x54, 0x7b, 0x94, 0x32, 0xa6, 0xc2, 0x23, 0x3d, 0xee, 0x4c, 0x95, 0x0b, 0x42, 0xfa, 0xc3, 0x4e, 0x08, 0x2e, 0xa1, 0x66, 0x28, 0xd9, 0x24, 0xb2, 0x76, 0x5b, 0xa2, 0x49, 0x6d, 0x8b, 0xd1, 0x25, 0x72, 0xf8, 0xf6, 0x64, 0x86, 0x68, 0x98, 0x16, 0xd4, 0xa4, 0x5c, 0xcc, 0x5d, 0x65, 0xb6, 0x92, 0x6c, 0x70, 0x48, 0x50, 0xfd, 0xed, 0xb9, 0xda, 0x5e, 0x15, 0x46, 0x57, 0xa7, 0x8d, 0x9d, 0x84, 0x90, 0xd8, 0xab, 0x00, 0x8c, 0xbc, 0xd3, 0x0a, 0xf7, 0xe4, 0x58, 0x05, 0xb8, 0xb3, 0x45, 0x06, 0xd0, 0x2c, 0x1e, 0x8f, 0xca, 0x3f, 0x0f, 0x02, 0xc1, 0xaf, 0xbd, 0x03, 0x01, 0x13, 0x8a, 0x6b, 0x3a, 0x91, 0x11, 0x41, 0x4f, 0x67, 0xdc, 0xea, 0x97, 0xf2, 0xcf, 0xce, 0xf0, 0xb4, 0xe6, 0x73, 0x96, 0xac, 0x74, 0x22, 0xe7, 0xad, 0x35, 0x85, 0xe2, 0xf9, 0x37, 0xe8, 0x1c, 0x75, 0xdf, 0x6e, 0x47, 0xf1, 0x1a, 0x71, 0x1d, 0x29, 0xc5, 0x89, 0x6f, 0xb7, 0x62, 0x0e, 0xaa, 0x18, 0xbe, 0x1b, 0xfc, 0x56, 0x3e, 0x4b, 0xc6, 0xd2, 0x79, 0x20, 0x9a, 0xdb, 0xc0, 0xfe, 0x78, 0xcd, 0x5a, 0xf4, 0x1f, 0xdd, 0xa8, 0x33, 0x88, 0x07, 0xc7, 0x31, 0xb1, 0x12, 0x10, 0x59, 0x27, 0x80, 0xec, 0x5f, 0x60, 0x51, 0x7f, 0xa9, 0x19, 0xb5, 0x4a, 0x0d, 0x2d, 0xe5, 0x7a, 0x9f, 0x93, 0xc9, 0x9c, 0xef, 0xa0, 0xe0, 0x3b, 0x4d, 0xae, 0x2a, 0xf5, 0xb0, 0xc8, 0xeb, 0xbb, 0x3c, 0x83, 0x53, 0x99, 0x61, 0x17, 0x2b, 0x04, 0x7e, 0xba, 0x77, 0xd6, 0x26, 0xe1, 0x69, 0x14, 0x63, 0x55, 0x21, 0x0c, 0x7d]);
  var mixCol = new Uint8Array(256);
  for (var i = 0; i < 256; i++) {
    if (i < 128) {
      mixCol[i] = i << 1;
    } else {
      mixCol[i] = i << 1 ^ 0x1b;
    }
  }
  var mix = new Uint32Array([0x00000000, 0x0e090d0b, 0x1c121a16, 0x121b171d, 0x3824342c, 0x362d3927, 0x24362e3a, 0x2a3f2331, 0x70486858, 0x7e416553, 0x6c5a724e, 0x62537f45, 0x486c5c74, 0x4665517f, 0x547e4662, 0x5a774b69, 0xe090d0b0, 0xee99ddbb, 0xfc82caa6, 0xf28bc7ad, 0xd8b4e49c, 0xd6bde997, 0xc4a6fe8a, 0xcaaff381, 0x90d8b8e8, 0x9ed1b5e3, 0x8ccaa2fe, 0x82c3aff5, 0xa8fc8cc4, 0xa6f581cf, 0xb4ee96d2, 0xbae79bd9, 0xdb3bbb7b, 0xd532b670, 0xc729a16d, 0xc920ac66, 0xe31f8f57, 0xed16825c, 0xff0d9541, 0xf104984a, 0xab73d323, 0xa57ade28, 0xb761c935, 0xb968c43e, 0x9357e70f, 0x9d5eea04, 0x8f45fd19, 0x814cf012, 0x3bab6bcb, 0x35a266c0, 0x27b971dd, 0x29b07cd6, 0x038f5fe7, 0x0d8652ec, 0x1f9d45f1, 0x119448fa, 0x4be30393, 0x45ea0e98, 0x57f11985, 0x59f8148e, 0x73c737bf, 0x7dce3ab4, 0x6fd52da9, 0x61dc20a2, 0xad766df6, 0xa37f60fd, 0xb16477e0, 0xbf6d7aeb, 0x955259da, 0x9b5b54d1, 0x894043cc, 0x87494ec7, 0xdd3e05ae, 0xd33708a5, 0xc12c1fb8, 0xcf2512b3, 0xe51a3182, 0xeb133c89, 0xf9082b94, 0xf701269f, 0x4de6bd46, 0x43efb04d, 0x51f4a750, 0x5ffdaa5b, 0x75c2896a, 0x7bcb8461, 0x69d0937c, 0x67d99e77, 0x3daed51e, 0x33a7d815, 0x21bccf08, 0x2fb5c203, 0x058ae132, 0x0b83ec39, 0x1998fb24, 0x1791f62f, 0x764dd68d, 0x7844db86, 0x6a5fcc9b, 0x6456c190, 0x4e69e2a1, 0x4060efaa, 0x527bf8b7, 0x5c72f5bc, 0x0605bed5, 0x080cb3de, 0x1a17a4c3, 0x141ea9c8, 0x3e218af9, 0x302887f2, 0x223390ef, 0x2c3a9de4, 0x96dd063d, 0x98d40b36, 0x8acf1c2b, 0x84c61120, 0xaef93211, 0xa0f03f1a, 0xb2eb2807, 0xbce2250c, 0xe6956e65, 0xe89c636e, 0xfa877473, 0xf48e7978, 0xdeb15a49, 0xd0b85742, 0xc2a3405f, 0xccaa4d54, 0x41ecdaf7, 0x4fe5d7fc, 0x5dfec0e1, 0x53f7cdea, 0x79c8eedb, 0x77c1e3d0, 0x65daf4cd, 0x6bd3f9c6, 0x31a4b2af, 0x3fadbfa4, 0x2db6a8b9, 0x23bfa5b2, 0x09808683, 0x07898b88, 0x15929c95, 0x1b9b919e, 0xa17c0a47, 0xaf75074c, 0xbd6e1051, 0xb3671d5a, 0x99583e6b, 0x97513360, 0x854a247d, 0x8b432976, 0xd134621f, 0xdf3d6f14, 0xcd267809, 0xc32f7502, 0xe9105633, 0xe7195b38, 0xf5024c25, 0xfb0b412e, 0x9ad7618c, 0x94de6c87, 0x86c57b9a, 0x88cc7691, 0xa2f355a0, 0xacfa58ab, 0xbee14fb6, 0xb0e842bd, 0xea9f09d4, 0xe49604df, 0xf68d13c2, 0xf8841ec9, 0xd2bb3df8, 0xdcb230f3, 0xcea927ee, 0xc0a02ae5, 0x7a47b13c, 0x744ebc37, 0x6655ab2a, 0x685ca621, 0x42638510, 0x4c6a881b, 0x5e719f06, 0x5078920d, 0x0a0fd964, 0x0406d46f, 0x161dc372, 0x1814ce79, 0x322bed48, 0x3c22e043, 0x2e39f75e, 0x2030fa55, 0xec9ab701, 0xe293ba0a, 0xf088ad17, 0xfe81a01c, 0xd4be832d, 0xdab78e26, 0xc8ac993b, 0xc6a59430, 0x9cd2df59, 0x92dbd252, 0x80c0c54f, 0x8ec9c844, 0xa4f6eb75, 0xaaffe67e, 0xb8e4f163, 0xb6edfc68, 0x0c0a67b1, 0x02036aba, 0x10187da7, 0x1e1170ac, 0x342e539d, 0x3a275e96, 0x283c498b, 0x26354480, 0x7c420fe9, 0x724b02e2, 0x605015ff, 0x6e5918f4, 0x44663bc5, 0x4a6f36ce, 0x587421d3, 0x567d2cd8, 0x37a10c7a, 0x39a80171, 0x2bb3166c, 0x25ba1b67, 0x0f853856, 0x018c355d, 0x13972240, 0x1d9e2f4b, 0x47e96422, 0x49e06929, 0x5bfb7e34, 0x55f2733f, 0x7fcd500e, 0x71c45d05, 0x63df4a18, 0x6dd64713, 0xd731dcca, 0xd938d1c1, 0xcb23c6dc, 0xc52acbd7, 0xef15e8e6, 0xe11ce5ed, 0xf307f2f0, 0xfd0efffb, 0xa779b492, 0xa970b999, 0xbb6bae84, 0xb562a38f, 0x9f5d80be, 0x91548db5, 0x834f9aa8, 0x8d4697a3]);
  function expandKey128(cipherKey) {
    var b = 176,
        result = new Uint8Array(b);
    result.set(cipherKey);
    for (var j = 16, i = 1; j < b; ++i) {
      var t1 = result[j - 3],
          t2 = result[j - 2],
          t3 = result[j - 1],
          t4 = result[j - 4];
      t1 = s[t1];
      t2 = s[t2];
      t3 = s[t3];
      t4 = s[t4];
      t1 = t1 ^ rcon[i];
      for (var n = 0; n < 4; ++n) {
        result[j] = t1 ^= result[j - 16];
        j++;
        result[j] = t2 ^= result[j - 16];
        j++;
        result[j] = t3 ^= result[j - 16];
        j++;
        result[j] = t4 ^= result[j - 16];
        j++;
      }
    }
    return result;
  }
  function decrypt128(input, key) {
    var state = new Uint8Array(16);
    state.set(input);
    var i, j, k;
    var t, u, v;
    for (j = 0, k = 160; j < 16; ++j, ++k) {
      state[j] ^= key[k];
    }
    for (i = 9; i >= 1; --i) {
      t = state[13];
      state[13] = state[9];
      state[9] = state[5];
      state[5] = state[1];
      state[1] = t;
      t = state[14];
      u = state[10];
      state[14] = state[6];
      state[10] = state[2];
      state[6] = t;
      state[2] = u;
      t = state[15];
      u = state[11];
      v = state[7];
      state[15] = state[3];
      state[11] = t;
      state[7] = u;
      state[3] = v;
      for (j = 0; j < 16; ++j) {
        state[j] = inv_s[state[j]];
      }
      for (j = 0, k = i * 16; j < 16; ++j, ++k) {
        state[j] ^= key[k];
      }
      for (j = 0; j < 16; j += 4) {
        var s0 = mix[state[j]],
            s1 = mix[state[j + 1]],
            s2 = mix[state[j + 2]],
            s3 = mix[state[j + 3]];
        t = s0 ^ s1 >>> 8 ^ s1 << 24 ^ s2 >>> 16 ^ s2 << 16 ^ s3 >>> 24 ^ s3 << 8;
        state[j] = t >>> 24 & 0xFF;
        state[j + 1] = t >> 16 & 0xFF;
        state[j + 2] = t >> 8 & 0xFF;
        state[j + 3] = t & 0xFF;
      }
    }
    t = state[13];
    state[13] = state[9];
    state[9] = state[5];
    state[5] = state[1];
    state[1] = t;
    t = state[14];
    u = state[10];
    state[14] = state[6];
    state[10] = state[2];
    state[6] = t;
    state[2] = u;
    t = state[15];
    u = state[11];
    v = state[7];
    state[15] = state[3];
    state[11] = t;
    state[7] = u;
    state[3] = v;
    for (j = 0; j < 16; ++j) {
      state[j] = inv_s[state[j]];
      state[j] ^= key[j];
    }
    return state;
  }
  function encrypt128(input, key) {
    var t, u, v, k;
    var state = new Uint8Array(16);
    state.set(input);
    for (j = 0; j < 16; ++j) {
      state[j] ^= key[j];
    }
    for (i = 1; i < 10; i++) {
      for (j = 0; j < 16; ++j) {
        state[j] = s[state[j]];
      }
      v = state[1];
      state[1] = state[5];
      state[5] = state[9];
      state[9] = state[13];
      state[13] = v;
      v = state[2];
      u = state[6];
      state[2] = state[10];
      state[6] = state[14];
      state[10] = v;
      state[14] = u;
      v = state[3];
      u = state[7];
      t = state[11];
      state[3] = state[15];
      state[7] = v;
      state[11] = u;
      state[15] = t;
      for (var j = 0; j < 16; j += 4) {
        var s0 = state[j + 0],
            s1 = state[j + 1];
        var s2 = state[j + 2],
            s3 = state[j + 3];
        t = s0 ^ s1 ^ s2 ^ s3;
        state[j + 0] ^= t ^ mixCol[s0 ^ s1];
        state[j + 1] ^= t ^ mixCol[s1 ^ s2];
        state[j + 2] ^= t ^ mixCol[s2 ^ s3];
        state[j + 3] ^= t ^ mixCol[s3 ^ s0];
      }
      for (j = 0, k = i * 16; j < 16; ++j, ++k) {
        state[j] ^= key[k];
      }
    }
    for (j = 0; j < 16; ++j) {
      state[j] = s[state[j]];
    }
    v = state[1];
    state[1] = state[5];
    state[5] = state[9];
    state[9] = state[13];
    state[13] = v;
    v = state[2];
    u = state[6];
    state[2] = state[10];
    state[6] = state[14];
    state[10] = v;
    state[14] = u;
    v = state[3];
    u = state[7];
    t = state[11];
    state[3] = state[15];
    state[7] = v;
    state[11] = u;
    state[15] = t;
    for (j = 0, k = 160; j < 16; ++j, ++k) {
      state[j] ^= key[k];
    }
    return state;
  }
  function AES128Cipher(key) {
    this.key = expandKey128(key);
    this.buffer = new Uint8Array(16);
    this.bufferPosition = 0;
  }
  function decryptBlock2(data, finalize) {
    var i,
        j,
        ii,
        sourceLength = data.length,
        buffer = this.buffer,
        bufferLength = this.bufferPosition,
        result = [],
        iv = this.iv;
    for (i = 0; i < sourceLength; ++i) {
      buffer[bufferLength] = data[i];
      ++bufferLength;
      if (bufferLength < 16) {
        continue;
      }
      var plain = decrypt128(buffer, this.key);
      for (j = 0; j < 16; ++j) {
        plain[j] ^= iv[j];
      }
      iv = buffer;
      result.push(plain);
      buffer = new Uint8Array(16);
      bufferLength = 0;
    }
    this.buffer = buffer;
    this.bufferLength = bufferLength;
    this.iv = iv;
    if (result.length === 0) {
      return new Uint8Array([]);
    }
    var outputLength = 16 * result.length;
    if (finalize) {
      var lastBlock = result[result.length - 1];
      var psLen = lastBlock[15];
      if (psLen <= 16) {
        for (i = 15, ii = 16 - psLen; i >= ii; --i) {
          if (lastBlock[i] !== psLen) {
            psLen = 0;
            break;
          }
        }
        outputLength -= psLen;
        result[result.length - 1] = lastBlock.subarray(0, 16 - psLen);
      }
    }
    var output = new Uint8Array(outputLength);
    for (i = 0, j = 0, ii = result.length; i < ii; ++i, j += 16) {
      output.set(result[i], j);
    }
    return output;
  }
  AES128Cipher.prototype = {
    decryptBlock: function AES128Cipher_decryptBlock(data, finalize) {
      var i,
          sourceLength = data.length;
      var buffer = this.buffer,
          bufferLength = this.bufferPosition;
      for (i = 0; bufferLength < 16 && i < sourceLength; ++i, ++bufferLength) {
        buffer[bufferLength] = data[i];
      }
      if (bufferLength < 16) {
        this.bufferLength = bufferLength;
        return new Uint8Array([]);
      }
      this.iv = buffer;
      this.buffer = new Uint8Array(16);
      this.bufferLength = 0;
      this.decryptBlock = decryptBlock2;
      return this.decryptBlock(data.subarray(16), finalize);
    },
    encrypt: function AES128Cipher_encrypt(data, iv) {
      var i,
          j,
          ii,
          sourceLength = data.length,
          buffer = this.buffer,
          bufferLength = this.bufferPosition,
          result = [];
      if (!iv) {
        iv = new Uint8Array(16);
      }
      for (i = 0; i < sourceLength; ++i) {
        buffer[bufferLength] = data[i];
        ++bufferLength;
        if (bufferLength < 16) {
          continue;
        }
        for (j = 0; j < 16; ++j) {
          buffer[j] ^= iv[j];
        }
        var cipher = encrypt128(buffer, this.key);
        iv = cipher;
        result.push(cipher);
        buffer = new Uint8Array(16);
        bufferLength = 0;
      }
      this.buffer = buffer;
      this.bufferLength = bufferLength;
      this.iv = iv;
      if (result.length === 0) {
        return new Uint8Array([]);
      }
      var outputLength = 16 * result.length;
      var output = new Uint8Array(outputLength);
      for (i = 0, j = 0, ii = result.length; i < ii; ++i, j += 16) {
        output.set(result[i], j);
      }
      return output;
    }
  };
  return AES128Cipher;
}();
var AES256Cipher = function AES256CipherClosure() {
  var s = new Uint8Array([0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5, 0x30, 0x01, 0x67, 0x2b, 0xfe, 0xd7, 0xab, 0x76, 0xca, 0x82, 0xc9, 0x7d, 0xfa, 0x59, 0x47, 0xf0, 0xad, 0xd4, 0xa2, 0xaf, 0x9c, 0xa4, 0x72, 0xc0, 0xb7, 0xfd, 0x93, 0x26, 0x36, 0x3f, 0xf7, 0xcc, 0x34, 0xa5, 0xe5, 0xf1, 0x71, 0xd8, 0x31, 0x15, 0x04, 0xc7, 0x23, 0xc3, 0x18, 0x96, 0x05, 0x9a, 0x07, 0x12, 0x80, 0xe2, 0xeb, 0x27, 0xb2, 0x75, 0x09, 0x83, 0x2c, 0x1a, 0x1b, 0x6e, 0x5a, 0xa0, 0x52, 0x3b, 0xd6, 0xb3, 0x29, 0xe3, 0x2f, 0x84, 0x53, 0xd1, 0x00, 0xed, 0x20, 0xfc, 0xb1, 0x5b, 0x6a, 0xcb, 0xbe, 0x39, 0x4a, 0x4c, 0x58, 0xcf, 0xd0, 0xef, 0xaa, 0xfb, 0x43, 0x4d, 0x33, 0x85, 0x45, 0xf9, 0x02, 0x7f, 0x50, 0x3c, 0x9f, 0xa8, 0x51, 0xa3, 0x40, 0x8f, 0x92, 0x9d, 0x38, 0xf5, 0xbc, 0xb6, 0xda, 0x21, 0x10, 0xff, 0xf3, 0xd2, 0xcd, 0x0c, 0x13, 0xec, 0x5f, 0x97, 0x44, 0x17, 0xc4, 0xa7, 0x7e, 0x3d, 0x64, 0x5d, 0x19, 0x73, 0x60, 0x81, 0x4f, 0xdc, 0x22, 0x2a, 0x90, 0x88, 0x46, 0xee, 0xb8, 0x14, 0xde, 0x5e, 0x0b, 0xdb, 0xe0, 0x32, 0x3a, 0x0a, 0x49, 0x06, 0x24, 0x5c, 0xc2, 0xd3, 0xac, 0x62, 0x91, 0x95, 0xe4, 0x79, 0xe7, 0xc8, 0x37, 0x6d, 0x8d, 0xd5, 0x4e, 0xa9, 0x6c, 0x56, 0xf4, 0xea, 0x65, 0x7a, 0xae, 0x08, 0xba, 0x78, 0x25, 0x2e, 0x1c, 0xa6, 0xb4, 0xc6, 0xe8, 0xdd, 0x74, 0x1f, 0x4b, 0xbd, 0x8b, 0x8a, 0x70, 0x3e, 0xb5, 0x66, 0x48, 0x03, 0xf6, 0x0e, 0x61, 0x35, 0x57, 0xb9, 0x86, 0xc1, 0x1d, 0x9e, 0xe1, 0xf8, 0x98, 0x11, 0x69, 0xd9, 0x8e, 0x94, 0x9b, 0x1e, 0x87, 0xe9, 0xce, 0x55, 0x28, 0xdf, 0x8c, 0xa1, 0x89, 0x0d, 0xbf, 0xe6, 0x42, 0x68, 0x41, 0x99, 0x2d, 0x0f, 0xb0, 0x54, 0xbb, 0x16]);
  var inv_s = new Uint8Array([0x52, 0x09, 0x6a, 0xd5, 0x30, 0x36, 0xa5, 0x38, 0xbf, 0x40, 0xa3, 0x9e, 0x81, 0xf3, 0xd7, 0xfb, 0x7c, 0xe3, 0x39, 0x82, 0x9b, 0x2f, 0xff, 0x87, 0x34, 0x8e, 0x43, 0x44, 0xc4, 0xde, 0xe9, 0xcb, 0x54, 0x7b, 0x94, 0x32, 0xa6, 0xc2, 0x23, 0x3d, 0xee, 0x4c, 0x95, 0x0b, 0x42, 0xfa, 0xc3, 0x4e, 0x08, 0x2e, 0xa1, 0x66, 0x28, 0xd9, 0x24, 0xb2, 0x76, 0x5b, 0xa2, 0x49, 0x6d, 0x8b, 0xd1, 0x25, 0x72, 0xf8, 0xf6, 0x64, 0x86, 0x68, 0x98, 0x16, 0xd4, 0xa4, 0x5c, 0xcc, 0x5d, 0x65, 0xb6, 0x92, 0x6c, 0x70, 0x48, 0x50, 0xfd, 0xed, 0xb9, 0xda, 0x5e, 0x15, 0x46, 0x57, 0xa7, 0x8d, 0x9d, 0x84, 0x90, 0xd8, 0xab, 0x00, 0x8c, 0xbc, 0xd3, 0x0a, 0xf7, 0xe4, 0x58, 0x05, 0xb8, 0xb3, 0x45, 0x06, 0xd0, 0x2c, 0x1e, 0x8f, 0xca, 0x3f, 0x0f, 0x02, 0xc1, 0xaf, 0xbd, 0x03, 0x01, 0x13, 0x8a, 0x6b, 0x3a, 0x91, 0x11, 0x41, 0x4f, 0x67, 0xdc, 0xea, 0x97, 0xf2, 0xcf, 0xce, 0xf0, 0xb4, 0xe6, 0x73, 0x96, 0xac, 0x74, 0x22, 0xe7, 0xad, 0x35, 0x85, 0xe2, 0xf9, 0x37, 0xe8, 0x1c, 0x75, 0xdf, 0x6e, 0x47, 0xf1, 0x1a, 0x71, 0x1d, 0x29, 0xc5, 0x89, 0x6f, 0xb7, 0x62, 0x0e, 0xaa, 0x18, 0xbe, 0x1b, 0xfc, 0x56, 0x3e, 0x4b, 0xc6, 0xd2, 0x79, 0x20, 0x9a, 0xdb, 0xc0, 0xfe, 0x78, 0xcd, 0x5a, 0xf4, 0x1f, 0xdd, 0xa8, 0x33, 0x88, 0x07, 0xc7, 0x31, 0xb1, 0x12, 0x10, 0x59, 0x27, 0x80, 0xec, 0x5f, 0x60, 0x51, 0x7f, 0xa9, 0x19, 0xb5, 0x4a, 0x0d, 0x2d, 0xe5, 0x7a, 0x9f, 0x93, 0xc9, 0x9c, 0xef, 0xa0, 0xe0, 0x3b, 0x4d, 0xae, 0x2a, 0xf5, 0xb0, 0xc8, 0xeb, 0xbb, 0x3c, 0x83, 0x53, 0x99, 0x61, 0x17, 0x2b, 0x04, 0x7e, 0xba, 0x77, 0xd6, 0x26, 0xe1, 0x69, 0x14, 0x63, 0x55, 0x21, 0x0c, 0x7d]);
  var mixCol = new Uint8Array(256);
  for (var i = 0; i < 256; i++) {
    if (i < 128) {
      mixCol[i] = i << 1;
    } else {
      mixCol[i] = i << 1 ^ 0x1b;
    }
  }
  var mix = new Uint32Array([0x00000000, 0x0e090d0b, 0x1c121a16, 0x121b171d, 0x3824342c, 0x362d3927, 0x24362e3a, 0x2a3f2331, 0x70486858, 0x7e416553, 0x6c5a724e, 0x62537f45, 0x486c5c74, 0x4665517f, 0x547e4662, 0x5a774b69, 0xe090d0b0, 0xee99ddbb, 0xfc82caa6, 0xf28bc7ad, 0xd8b4e49c, 0xd6bde997, 0xc4a6fe8a, 0xcaaff381, 0x90d8b8e8, 0x9ed1b5e3, 0x8ccaa2fe, 0x82c3aff5, 0xa8fc8cc4, 0xa6f581cf, 0xb4ee96d2, 0xbae79bd9, 0xdb3bbb7b, 0xd532b670, 0xc729a16d, 0xc920ac66, 0xe31f8f57, 0xed16825c, 0xff0d9541, 0xf104984a, 0xab73d323, 0xa57ade28, 0xb761c935, 0xb968c43e, 0x9357e70f, 0x9d5eea04, 0x8f45fd19, 0x814cf012, 0x3bab6bcb, 0x35a266c0, 0x27b971dd, 0x29b07cd6, 0x038f5fe7, 0x0d8652ec, 0x1f9d45f1, 0x119448fa, 0x4be30393, 0x45ea0e98, 0x57f11985, 0x59f8148e, 0x73c737bf, 0x7dce3ab4, 0x6fd52da9, 0x61dc20a2, 0xad766df6, 0xa37f60fd, 0xb16477e0, 0xbf6d7aeb, 0x955259da, 0x9b5b54d1, 0x894043cc, 0x87494ec7, 0xdd3e05ae, 0xd33708a5, 0xc12c1fb8, 0xcf2512b3, 0xe51a3182, 0xeb133c89, 0xf9082b94, 0xf701269f, 0x4de6bd46, 0x43efb04d, 0x51f4a750, 0x5ffdaa5b, 0x75c2896a, 0x7bcb8461, 0x69d0937c, 0x67d99e77, 0x3daed51e, 0x33a7d815, 0x21bccf08, 0x2fb5c203, 0x058ae132, 0x0b83ec39, 0x1998fb24, 0x1791f62f, 0x764dd68d, 0x7844db86, 0x6a5fcc9b, 0x6456c190, 0x4e69e2a1, 0x4060efaa, 0x527bf8b7, 0x5c72f5bc, 0x0605bed5, 0x080cb3de, 0x1a17a4c3, 0x141ea9c8, 0x3e218af9, 0x302887f2, 0x223390ef, 0x2c3a9de4, 0x96dd063d, 0x98d40b36, 0x8acf1c2b, 0x84c61120, 0xaef93211, 0xa0f03f1a, 0xb2eb2807, 0xbce2250c, 0xe6956e65, 0xe89c636e, 0xfa877473, 0xf48e7978, 0xdeb15a49, 0xd0b85742, 0xc2a3405f, 0xccaa4d54, 0x41ecdaf7, 0x4fe5d7fc, 0x5dfec0e1, 0x53f7cdea, 0x79c8eedb, 0x77c1e3d0, 0x65daf4cd, 0x6bd3f9c6, 0x31a4b2af, 0x3fadbfa4, 0x2db6a8b9, 0x23bfa5b2, 0x09808683, 0x07898b88, 0x15929c95, 0x1b9b919e, 0xa17c0a47, 0xaf75074c, 0xbd6e1051, 0xb3671d5a, 0x99583e6b, 0x97513360, 0x854a247d, 0x8b432976, 0xd134621f, 0xdf3d6f14, 0xcd267809, 0xc32f7502, 0xe9105633, 0xe7195b38, 0xf5024c25, 0xfb0b412e, 0x9ad7618c, 0x94de6c87, 0x86c57b9a, 0x88cc7691, 0xa2f355a0, 0xacfa58ab, 0xbee14fb6, 0xb0e842bd, 0xea9f09d4, 0xe49604df, 0xf68d13c2, 0xf8841ec9, 0xd2bb3df8, 0xdcb230f3, 0xcea927ee, 0xc0a02ae5, 0x7a47b13c, 0x744ebc37, 0x6655ab2a, 0x685ca621, 0x42638510, 0x4c6a881b, 0x5e719f06, 0x5078920d, 0x0a0fd964, 0x0406d46f, 0x161dc372, 0x1814ce79, 0x322bed48, 0x3c22e043, 0x2e39f75e, 0x2030fa55, 0xec9ab701, 0xe293ba0a, 0xf088ad17, 0xfe81a01c, 0xd4be832d, 0xdab78e26, 0xc8ac993b, 0xc6a59430, 0x9cd2df59, 0x92dbd252, 0x80c0c54f, 0x8ec9c844, 0xa4f6eb75, 0xaaffe67e, 0xb8e4f163, 0xb6edfc68, 0x0c0a67b1, 0x02036aba, 0x10187da7, 0x1e1170ac, 0x342e539d, 0x3a275e96, 0x283c498b, 0x26354480, 0x7c420fe9, 0x724b02e2, 0x605015ff, 0x6e5918f4, 0x44663bc5, 0x4a6f36ce, 0x587421d3, 0x567d2cd8, 0x37a10c7a, 0x39a80171, 0x2bb3166c, 0x25ba1b67, 0x0f853856, 0x018c355d, 0x13972240, 0x1d9e2f4b, 0x47e96422, 0x49e06929, 0x5bfb7e34, 0x55f2733f, 0x7fcd500e, 0x71c45d05, 0x63df4a18, 0x6dd64713, 0xd731dcca, 0xd938d1c1, 0xcb23c6dc, 0xc52acbd7, 0xef15e8e6, 0xe11ce5ed, 0xf307f2f0, 0xfd0efffb, 0xa779b492, 0xa970b999, 0xbb6bae84, 0xb562a38f, 0x9f5d80be, 0x91548db5, 0x834f9aa8, 0x8d4697a3]);
  function expandKey256(cipherKey) {
    var b = 240,
        result = new Uint8Array(b);
    var r = 1;
    result.set(cipherKey);
    for (var j = 32, i = 1; j < b; ++i) {
      if (j % 32 === 16) {
        t1 = s[t1];
        t2 = s[t2];
        t3 = s[t3];
        t4 = s[t4];
      } else if (j % 32 === 0) {
        var t1 = result[j - 3],
            t2 = result[j - 2],
            t3 = result[j - 1],
            t4 = result[j - 4];
        t1 = s[t1];
        t2 = s[t2];
        t3 = s[t3];
        t4 = s[t4];
        t1 = t1 ^ r;
        if ((r <<= 1) >= 256) {
          r = (r ^ 0x1b) & 0xFF;
        }
      }
      for (var n = 0; n < 4; ++n) {
        result[j] = t1 ^= result[j - 32];
        j++;
        result[j] = t2 ^= result[j - 32];
        j++;
        result[j] = t3 ^= result[j - 32];
        j++;
        result[j] = t4 ^= result[j - 32];
        j++;
      }
    }
    return result;
  }
  function decrypt256(input, key) {
    var state = new Uint8Array(16);
    state.set(input);
    var i, j, k;
    var t, u, v;
    for (j = 0, k = 224; j < 16; ++j, ++k) {
      state[j] ^= key[k];
    }
    for (i = 13; i >= 1; --i) {
      t = state[13];
      state[13] = state[9];
      state[9] = state[5];
      state[5] = state[1];
      state[1] = t;
      t = state[14];
      u = state[10];
      state[14] = state[6];
      state[10] = state[2];
      state[6] = t;
      state[2] = u;
      t = state[15];
      u = state[11];
      v = state[7];
      state[15] = state[3];
      state[11] = t;
      state[7] = u;
      state[3] = v;
      for (j = 0; j < 16; ++j) {
        state[j] = inv_s[state[j]];
      }
      for (j = 0, k = i * 16; j < 16; ++j, ++k) {
        state[j] ^= key[k];
      }
      for (j = 0; j < 16; j += 4) {
        var s0 = mix[state[j]],
            s1 = mix[state[j + 1]],
            s2 = mix[state[j + 2]],
            s3 = mix[state[j + 3]];
        t = s0 ^ s1 >>> 8 ^ s1 << 24 ^ s2 >>> 16 ^ s2 << 16 ^ s3 >>> 24 ^ s3 << 8;
        state[j] = t >>> 24 & 0xFF;
        state[j + 1] = t >> 16 & 0xFF;
        state[j + 2] = t >> 8 & 0xFF;
        state[j + 3] = t & 0xFF;
      }
    }
    t = state[13];
    state[13] = state[9];
    state[9] = state[5];
    state[5] = state[1];
    state[1] = t;
    t = state[14];
    u = state[10];
    state[14] = state[6];
    state[10] = state[2];
    state[6] = t;
    state[2] = u;
    t = state[15];
    u = state[11];
    v = state[7];
    state[15] = state[3];
    state[11] = t;
    state[7] = u;
    state[3] = v;
    for (j = 0; j < 16; ++j) {
      state[j] = inv_s[state[j]];
      state[j] ^= key[j];
    }
    return state;
  }
  function encrypt256(input, key) {
    var t, u, v, k;
    var state = new Uint8Array(16);
    state.set(input);
    for (j = 0; j < 16; ++j) {
      state[j] ^= key[j];
    }
    for (i = 1; i < 14; i++) {
      for (j = 0; j < 16; ++j) {
        state[j] = s[state[j]];
      }
      v = state[1];
      state[1] = state[5];
      state[5] = state[9];
      state[9] = state[13];
      state[13] = v;
      v = state[2];
      u = state[6];
      state[2] = state[10];
      state[6] = state[14];
      state[10] = v;
      state[14] = u;
      v = state[3];
      u = state[7];
      t = state[11];
      state[3] = state[15];
      state[7] = v;
      state[11] = u;
      state[15] = t;
      for (var j = 0; j < 16; j += 4) {
        var s0 = state[j + 0],
            s1 = state[j + 1];
        var s2 = state[j + 2],
            s3 = state[j + 3];
        t = s0 ^ s1 ^ s2 ^ s3;
        state[j + 0] ^= t ^ mixCol[s0 ^ s1];
        state[j + 1] ^= t ^ mixCol[s1 ^ s2];
        state[j + 2] ^= t ^ mixCol[s2 ^ s3];
        state[j + 3] ^= t ^ mixCol[s3 ^ s0];
      }
      for (j = 0, k = i * 16; j < 16; ++j, ++k) {
        state[j] ^= key[k];
      }
    }
    for (j = 0; j < 16; ++j) {
      state[j] = s[state[j]];
    }
    v = state[1];
    state[1] = state[5];
    state[5] = state[9];
    state[9] = state[13];
    state[13] = v;
    v = state[2];
    u = state[6];
    state[2] = state[10];
    state[6] = state[14];
    state[10] = v;
    state[14] = u;
    v = state[3];
    u = state[7];
    t = state[11];
    state[3] = state[15];
    state[7] = v;
    state[11] = u;
    state[15] = t;
    for (j = 0, k = 224; j < 16; ++j, ++k) {
      state[j] ^= key[k];
    }
    return state;
  }
  function AES256Cipher(key) {
    this.key = expandKey256(key);
    this.buffer = new Uint8Array(16);
    this.bufferPosition = 0;
  }
  function decryptBlock2(data, finalize) {
    var i,
        j,
        ii,
        sourceLength = data.length,
        buffer = this.buffer,
        bufferLength = this.bufferPosition,
        result = [],
        iv = this.iv;
    for (i = 0; i < sourceLength; ++i) {
      buffer[bufferLength] = data[i];
      ++bufferLength;
      if (bufferLength < 16) {
        continue;
      }
      var plain = decrypt256(buffer, this.key);
      for (j = 0; j < 16; ++j) {
        plain[j] ^= iv[j];
      }
      iv = buffer;
      result.push(plain);
      buffer = new Uint8Array(16);
      bufferLength = 0;
    }
    this.buffer = buffer;
    this.bufferLength = bufferLength;
    this.iv = iv;
    if (result.length === 0) {
      return new Uint8Array([]);
    }
    var outputLength = 16 * result.length;
    if (finalize) {
      var lastBlock = result[result.length - 1];
      var psLen = lastBlock[15];
      if (psLen <= 16) {
        for (i = 15, ii = 16 - psLen; i >= ii; --i) {
          if (lastBlock[i] !== psLen) {
            psLen = 0;
            break;
          }
        }
        outputLength -= psLen;
        result[result.length - 1] = lastBlock.subarray(0, 16 - psLen);
      }
    }
    var output = new Uint8Array(outputLength);
    for (i = 0, j = 0, ii = result.length; i < ii; ++i, j += 16) {
      output.set(result[i], j);
    }
    return output;
  }
  AES256Cipher.prototype = {
    decryptBlock: function AES256Cipher_decryptBlock(data, finalize, iv) {
      var i,
          sourceLength = data.length;
      var buffer = this.buffer,
          bufferLength = this.bufferPosition;
      if (iv) {
        this.iv = iv;
      } else {
        for (i = 0; bufferLength < 16 && i < sourceLength; ++i, ++bufferLength) {
          buffer[bufferLength] = data[i];
        }
        if (bufferLength < 16) {
          this.bufferLength = bufferLength;
          return new Uint8Array([]);
        }
        this.iv = buffer;
        data = data.subarray(16);
      }
      this.buffer = new Uint8Array(16);
      this.bufferLength = 0;
      this.decryptBlock = decryptBlock2;
      return this.decryptBlock(data, finalize);
    },
    encrypt: function AES256Cipher_encrypt(data, iv) {
      var i,
          j,
          ii,
          sourceLength = data.length,
          buffer = this.buffer,
          bufferLength = this.bufferPosition,
          result = [];
      if (!iv) {
        iv = new Uint8Array(16);
      }
      for (i = 0; i < sourceLength; ++i) {
        buffer[bufferLength] = data[i];
        ++bufferLength;
        if (bufferLength < 16) {
          continue;
        }
        for (j = 0; j < 16; ++j) {
          buffer[j] ^= iv[j];
        }
        var cipher = encrypt256(buffer, this.key);
        this.iv = cipher;
        result.push(cipher);
        buffer = new Uint8Array(16);
        bufferLength = 0;
      }
      this.buffer = buffer;
      this.bufferLength = bufferLength;
      this.iv = iv;
      if (result.length === 0) {
        return new Uint8Array([]);
      }
      var outputLength = 16 * result.length;
      var output = new Uint8Array(outputLength);
      for (i = 0, j = 0, ii = result.length; i < ii; ++i, j += 16) {
        output.set(result[i], j);
      }
      return output;
    }
  };
  return AES256Cipher;
}();
var PDF17 = function PDF17Closure() {
  function compareByteArrays(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (var i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
  function PDF17() {}
  PDF17.prototype = {
    checkOwnerPassword: function PDF17_checkOwnerPassword(password, ownerValidationSalt, userBytes, ownerPassword) {
      var hashData = new Uint8Array(password.length + 56);
      hashData.set(password, 0);
      hashData.set(ownerValidationSalt, password.length);
      hashData.set(userBytes, password.length + ownerValidationSalt.length);
      var result = calculateSHA256(hashData, 0, hashData.length);
      return compareByteArrays(result, ownerPassword);
    },
    checkUserPassword: function PDF17_checkUserPassword(password, userValidationSalt, userPassword) {
      var hashData = new Uint8Array(password.length + 8);
      hashData.set(password, 0);
      hashData.set(userValidationSalt, password.length);
      var result = calculateSHA256(hashData, 0, hashData.length);
      return compareByteArrays(result, userPassword);
    },
    getOwnerKey: function PDF17_getOwnerKey(password, ownerKeySalt, userBytes, ownerEncryption) {
      var hashData = new Uint8Array(password.length + 56);
      hashData.set(password, 0);
      hashData.set(ownerKeySalt, password.length);
      hashData.set(userBytes, password.length + ownerKeySalt.length);
      var key = calculateSHA256(hashData, 0, hashData.length);
      var cipher = new AES256Cipher(key);
      return cipher.decryptBlock(ownerEncryption, false, new Uint8Array(16));
    },
    getUserKey: function PDF17_getUserKey(password, userKeySalt, userEncryption) {
      var hashData = new Uint8Array(password.length + 8);
      hashData.set(password, 0);
      hashData.set(userKeySalt, password.length);
      var key = calculateSHA256(hashData, 0, hashData.length);
      var cipher = new AES256Cipher(key);
      return cipher.decryptBlock(userEncryption, false, new Uint8Array(16));
    }
  };
  return PDF17;
}();
var PDF20 = function PDF20Closure() {
  function concatArrays(array1, array2) {
    var t = new Uint8Array(array1.length + array2.length);
    t.set(array1, 0);
    t.set(array2, array1.length);
    return t;
  }
  function calculatePDF20Hash(password, input, userBytes) {
    var k = calculateSHA256(input, 0, input.length).subarray(0, 32);
    var e = [0];
    var i = 0;
    while (i < 64 || e[e.length - 1] > i - 32) {
      var arrayLength = password.length + k.length + userBytes.length;
      var k1 = new Uint8Array(arrayLength * 64);
      var array = concatArrays(password, k);
      array = concatArrays(array, userBytes);
      for (var j = 0, pos = 0; j < 64; j++, pos += arrayLength) {
        k1.set(array, pos);
      }
      var cipher = new AES128Cipher(k.subarray(0, 16));
      e = cipher.encrypt(k1, k.subarray(16, 32));
      var remainder = 0;
      for (var z = 0; z < 16; z++) {
        remainder *= 256 % 3;
        remainder %= 3;
        remainder += (e[z] >>> 0) % 3;
        remainder %= 3;
      }
      if (remainder === 0) {
        k = calculateSHA256(e, 0, e.length);
      } else if (remainder === 1) {
        k = calculateSHA384(e, 0, e.length);
      } else if (remainder === 2) {
        k = calculateSHA512(e, 0, e.length);
      }
      i++;
    }
    return k.subarray(0, 32);
  }
  function PDF20() {}
  function compareByteArrays(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (var i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
  PDF20.prototype = {
    hash: function PDF20_hash(password, concatBytes, userBytes) {
      return calculatePDF20Hash(password, concatBytes, userBytes);
    },
    checkOwnerPassword: function PDF20_checkOwnerPassword(password, ownerValidationSalt, userBytes, ownerPassword) {
      var hashData = new Uint8Array(password.length + 56);
      hashData.set(password, 0);
      hashData.set(ownerValidationSalt, password.length);
      hashData.set(userBytes, password.length + ownerValidationSalt.length);
      var result = calculatePDF20Hash(password, hashData, userBytes);
      return compareByteArrays(result, ownerPassword);
    },
    checkUserPassword: function PDF20_checkUserPassword(password, userValidationSalt, userPassword) {
      var hashData = new Uint8Array(password.length + 8);
      hashData.set(password, 0);
      hashData.set(userValidationSalt, password.length);
      var result = calculatePDF20Hash(password, hashData, []);
      return compareByteArrays(result, userPassword);
    },
    getOwnerKey: function PDF20_getOwnerKey(password, ownerKeySalt, userBytes, ownerEncryption) {
      var hashData = new Uint8Array(password.length + 56);
      hashData.set(password, 0);
      hashData.set(ownerKeySalt, password.length);
      hashData.set(userBytes, password.length + ownerKeySalt.length);
      var key = calculatePDF20Hash(password, hashData, userBytes);
      var cipher = new AES256Cipher(key);
      return cipher.decryptBlock(ownerEncryption, false, new Uint8Array(16));
    },
    getUserKey: function PDF20_getUserKey(password, userKeySalt, userEncryption) {
      var hashData = new Uint8Array(password.length + 8);
      hashData.set(password, 0);
      hashData.set(userKeySalt, password.length);
      var key = calculatePDF20Hash(password, hashData, []);
      var cipher = new AES256Cipher(key);
      return cipher.decryptBlock(userEncryption, false, new Uint8Array(16));
    }
  };
  return PDF20;
}();
var CipherTransform = function CipherTransformClosure() {
  function CipherTransform(stringCipherConstructor, streamCipherConstructor) {
    this.StringCipherConstructor = stringCipherConstructor;
    this.StreamCipherConstructor = streamCipherConstructor;
  }
  CipherTransform.prototype = {
    createStream: function CipherTransform_createStream(stream, length) {
      var cipher = new this.StreamCipherConstructor();
      return new _stream.DecryptStream(stream, length, function cipherTransformDecryptStream(data, finalize) {
        return cipher.decryptBlock(data, finalize);
      });
    },
    decryptString: function CipherTransform_decryptString(s) {
      var cipher = new this.StringCipherConstructor();
      var data = (0, _util.stringToBytes)(s);
      data = cipher.decryptBlock(data, true);
      return (0, _util.bytesToString)(data);
    }
  };
  return CipherTransform;
}();
var CipherTransformFactory = function CipherTransformFactoryClosure() {
  var defaultPasswordBytes = new Uint8Array([0x28, 0xBF, 0x4E, 0x5E, 0x4E, 0x75, 0x8A, 0x41, 0x64, 0x00, 0x4E, 0x56, 0xFF, 0xFA, 0x01, 0x08, 0x2E, 0x2E, 0x00, 0xB6, 0xD0, 0x68, 0x3E, 0x80, 0x2F, 0x0C, 0xA9, 0xFE, 0x64, 0x53, 0x69, 0x7A]);
  function createEncryptionKey20(revision, password, ownerPassword, ownerValidationSalt, ownerKeySalt, uBytes, userPassword, userValidationSalt, userKeySalt, ownerEncryption, userEncryption, perms) {
    if (password) {
      var passwordLength = Math.min(127, password.length);
      password = password.subarray(0, passwordLength);
    } else {
      password = [];
    }
    var pdfAlgorithm;
    if (revision === 6) {
      pdfAlgorithm = new PDF20();
    } else {
      pdfAlgorithm = new PDF17();
    }
    if (pdfAlgorithm.checkUserPassword(password, userValidationSalt, userPassword)) {
      return pdfAlgorithm.getUserKey(password, userKeySalt, userEncryption);
    } else if (password.length && pdfAlgorithm.checkOwnerPassword(password, ownerValidationSalt, uBytes, ownerPassword)) {
      return pdfAlgorithm.getOwnerKey(password, ownerKeySalt, uBytes, ownerEncryption);
    }
    return null;
  }
  function prepareKeyData(fileId, password, ownerPassword, userPassword, flags, revision, keyLength, encryptMetadata) {
    var hashDataSize = 40 + ownerPassword.length + fileId.length;
    var hashData = new Uint8Array(hashDataSize),
        i = 0,
        j,
        n;
    if (password) {
      n = Math.min(32, password.length);
      for (; i < n; ++i) {
        hashData[i] = password[i];
      }
    }
    j = 0;
    while (i < 32) {
      hashData[i++] = defaultPasswordBytes[j++];
    }
    for (j = 0, n = ownerPassword.length; j < n; ++j) {
      hashData[i++] = ownerPassword[j];
    }
    hashData[i++] = flags & 0xFF;
    hashData[i++] = flags >> 8 & 0xFF;
    hashData[i++] = flags >> 16 & 0xFF;
    hashData[i++] = flags >>> 24 & 0xFF;
    for (j = 0, n = fileId.length; j < n; ++j) {
      hashData[i++] = fileId[j];
    }
    if (revision >= 4 && !encryptMetadata) {
      hashData[i++] = 0xFF;
      hashData[i++] = 0xFF;
      hashData[i++] = 0xFF;
      hashData[i++] = 0xFF;
    }
    var hash = calculateMD5(hashData, 0, i);
    var keyLengthInBytes = keyLength >> 3;
    if (revision >= 3) {
      for (j = 0; j < 50; ++j) {
        hash = calculateMD5(hash, 0, keyLengthInBytes);
      }
    }
    var encryptionKey = hash.subarray(0, keyLengthInBytes);
    var cipher, checkData;
    if (revision >= 3) {
      for (i = 0; i < 32; ++i) {
        hashData[i] = defaultPasswordBytes[i];
      }
      for (j = 0, n = fileId.length; j < n; ++j) {
        hashData[i++] = fileId[j];
      }
      cipher = new ARCFourCipher(encryptionKey);
      checkData = cipher.encryptBlock(calculateMD5(hashData, 0, i));
      n = encryptionKey.length;
      var derivedKey = new Uint8Array(n),
          k;
      for (j = 1; j <= 19; ++j) {
        for (k = 0; k < n; ++k) {
          derivedKey[k] = encryptionKey[k] ^ j;
        }
        cipher = new ARCFourCipher(derivedKey);
        checkData = cipher.encryptBlock(checkData);
      }
      for (j = 0, n = checkData.length; j < n; ++j) {
        if (userPassword[j] !== checkData[j]) {
          return null;
        }
      }
    } else {
      cipher = new ARCFourCipher(encryptionKey);
      checkData = cipher.encryptBlock(defaultPasswordBytes);
      for (j = 0, n = checkData.length; j < n; ++j) {
        if (userPassword[j] !== checkData[j]) {
          return null;
        }
      }
    }
    return encryptionKey;
  }
  function decodeUserPassword(password, ownerPassword, revision, keyLength) {
    var hashData = new Uint8Array(32),
        i = 0,
        j,
        n;
    n = Math.min(32, password.length);
    for (; i < n; ++i) {
      hashData[i] = password[i];
    }
    j = 0;
    while (i < 32) {
      hashData[i++] = defaultPasswordBytes[j++];
    }
    var hash = calculateMD5(hashData, 0, i);
    var keyLengthInBytes = keyLength >> 3;
    if (revision >= 3) {
      for (j = 0; j < 50; ++j) {
        hash = calculateMD5(hash, 0, hash.length);
      }
    }
    var cipher, userPassword;
    if (revision >= 3) {
      userPassword = ownerPassword;
      var derivedKey = new Uint8Array(keyLengthInBytes),
          k;
      for (j = 19; j >= 0; j--) {
        for (k = 0; k < keyLengthInBytes; ++k) {
          derivedKey[k] = hash[k] ^ j;
        }
        cipher = new ARCFourCipher(derivedKey);
        userPassword = cipher.encryptBlock(userPassword);
      }
    } else {
      cipher = new ARCFourCipher(hash.subarray(0, keyLengthInBytes));
      userPassword = cipher.encryptBlock(ownerPassword);
    }
    return userPassword;
  }
  var identityName = _primitives.Name.get('Identity');
  function CipherTransformFactory(dict, fileId, password) {
    var filter = dict.get('Filter');
    if (!(0, _primitives.isName)(filter, 'Standard')) {
      throw new _util.FormatError('unknown encryption method');
    }
    this.dict = dict;
    var algorithm = dict.get('V');
    if (!(0, _util.isInt)(algorithm) || algorithm !== 1 && algorithm !== 2 && algorithm !== 4 && algorithm !== 5) {
      throw new _util.FormatError('unsupported encryption algorithm');
    }
    this.algorithm = algorithm;
    var keyLength = dict.get('Length');
    if (!keyLength) {
      if (algorithm <= 3) {
        keyLength = 40;
      } else {
        var cfDict = dict.get('CF');
        var streamCryptoName = dict.get('StmF');
        if ((0, _primitives.isDict)(cfDict) && (0, _primitives.isName)(streamCryptoName)) {
          cfDict.suppressEncryption = true;
          var handlerDict = cfDict.get(streamCryptoName.name);
          keyLength = handlerDict && handlerDict.get('Length') || 128;
          if (keyLength < 40) {
            keyLength <<= 3;
          }
        }
      }
    }
    if (!(0, _util.isInt)(keyLength) || keyLength < 40 || keyLength % 8 !== 0) {
      throw new _util.FormatError('invalid key length');
    }
    var ownerPassword = (0, _util.stringToBytes)(dict.get('O')).subarray(0, 32);
    var userPassword = (0, _util.stringToBytes)(dict.get('U')).subarray(0, 32);
    var flags = dict.get('P');
    var revision = dict.get('R');
    var encryptMetadata = (algorithm === 4 || algorithm === 5) && dict.get('EncryptMetadata') !== false;
    this.encryptMetadata = encryptMetadata;
    var fileIdBytes = (0, _util.stringToBytes)(fileId);
    var passwordBytes;
    if (password) {
      if (revision === 6) {
        try {
          password = (0, _util.utf8StringToString)(password);
        } catch (ex) {
          (0, _util.warn)('CipherTransformFactory: ' + 'Unable to convert UTF8 encoded password.');
        }
      }
      passwordBytes = (0, _util.stringToBytes)(password);
    }
    var encryptionKey;
    if (algorithm !== 5) {
      encryptionKey = prepareKeyData(fileIdBytes, passwordBytes, ownerPassword, userPassword, flags, revision, keyLength, encryptMetadata);
    } else {
      var ownerValidationSalt = (0, _util.stringToBytes)(dict.get('O')).subarray(32, 40);
      var ownerKeySalt = (0, _util.stringToBytes)(dict.get('O')).subarray(40, 48);
      var uBytes = (0, _util.stringToBytes)(dict.get('U')).subarray(0, 48);
      var userValidationSalt = (0, _util.stringToBytes)(dict.get('U')).subarray(32, 40);
      var userKeySalt = (0, _util.stringToBytes)(dict.get('U')).subarray(40, 48);
      var ownerEncryption = (0, _util.stringToBytes)(dict.get('OE'));
      var userEncryption = (0, _util.stringToBytes)(dict.get('UE'));
      var perms = (0, _util.stringToBytes)(dict.get('Perms'));
      encryptionKey = createEncryptionKey20(revision, passwordBytes, ownerPassword, ownerValidationSalt, ownerKeySalt, uBytes, userPassword, userValidationSalt, userKeySalt, ownerEncryption, userEncryption, perms);
    }
    if (!encryptionKey && !password) {
      throw new _util.PasswordException('No password given', _util.PasswordResponses.NEED_PASSWORD);
    } else if (!encryptionKey && password) {
      var decodedPassword = decodeUserPassword(passwordBytes, ownerPassword, revision, keyLength);
      encryptionKey = prepareKeyData(fileIdBytes, decodedPassword, ownerPassword, userPassword, flags, revision, keyLength, encryptMetadata);
    }
    if (!encryptionKey) {
      throw new _util.PasswordException('Incorrect Password', _util.PasswordResponses.INCORRECT_PASSWORD);
    }
    this.encryptionKey = encryptionKey;
    if (algorithm >= 4) {
      var cf = dict.get('CF');
      if ((0, _primitives.isDict)(cf)) {
        cf.suppressEncryption = true;
      }
      this.cf = cf;
      this.stmf = dict.get('StmF') || identityName;
      this.strf = dict.get('StrF') || identityName;
      this.eff = dict.get('EFF') || this.stmf;
    }
  }
  function buildObjectKey(num, gen, encryptionKey, isAes) {
    var key = new Uint8Array(encryptionKey.length + 9),
        i,
        n;
    for (i = 0, n = encryptionKey.length; i < n; ++i) {
      key[i] = encryptionKey[i];
    }
    key[i++] = num & 0xFF;
    key[i++] = num >> 8 & 0xFF;
    key[i++] = num >> 16 & 0xFF;
    key[i++] = gen & 0xFF;
    key[i++] = gen >> 8 & 0xFF;
    if (isAes) {
      key[i++] = 0x73;
      key[i++] = 0x41;
      key[i++] = 0x6C;
      key[i++] = 0x54;
    }
    var hash = calculateMD5(key, 0, i);
    return hash.subarray(0, Math.min(encryptionKey.length + 5, 16));
  }
  function buildCipherConstructor(cf, name, num, gen, key) {
    if (!(0, _primitives.isName)(name)) {
      throw new _util.FormatError('Invalid crypt filter name.');
    }
    var cryptFilter = cf.get(name.name);
    var cfm;
    if (cryptFilter !== null && cryptFilter !== undefined) {
      cfm = cryptFilter.get('CFM');
    }
    if (!cfm || cfm.name === 'None') {
      return function cipherTransformFactoryBuildCipherConstructorNone() {
        return new NullCipher();
      };
    }
    if (cfm.name === 'V2') {
      return function cipherTransformFactoryBuildCipherConstructorV2() {
        return new ARCFourCipher(buildObjectKey(num, gen, key, false));
      };
    }
    if (cfm.name === 'AESV2') {
      return function cipherTransformFactoryBuildCipherConstructorAESV2() {
        return new AES128Cipher(buildObjectKey(num, gen, key, true));
      };
    }
    if (cfm.name === 'AESV3') {
      return function cipherTransformFactoryBuildCipherConstructorAESV3() {
        return new AES256Cipher(key);
      };
    }
    throw new _util.FormatError('Unknown crypto method');
  }
  CipherTransformFactory.prototype = {
    createCipherTransform: function CipherTransformFactory_createCipherTransform(num, gen) {
      if (this.algorithm === 4 || this.algorithm === 5) {
        return new CipherTransform(buildCipherConstructor(this.cf, this.stmf, num, gen, this.encryptionKey), buildCipherConstructor(this.cf, this.strf, num, gen, this.encryptionKey));
      }
      var key = buildObjectKey(num, gen, this.encryptionKey, false);
      var cipherConstructor = function buildCipherCipherConstructor() {
        return new ARCFourCipher(key);
      };
      return new CipherTransform(cipherConstructor, cipherConstructor);
    }
  };
  return CipherTransformFactory;
}();
exports.AES128Cipher = AES128Cipher;
exports.AES256Cipher = AES256Cipher;
exports.ARCFourCipher = ARCFourCipher;
exports.CipherTransformFactory = CipherTransformFactory;
exports.PDF17 = PDF17;
exports.PDF20 = PDF20;
exports.calculateMD5 = calculateMD5;
exports.calculateSHA256 = calculateSHA256;
exports.calculateSHA384 = calculateSHA384;
exports.calculateSHA512 = calculateSHA512;

/***/ }),
/* 13 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PartialEvaluator = exports.OperatorList = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _util = __w_pdfjs_require__(0);

var _cmap = __w_pdfjs_require__(22);

var _stream = __w_pdfjs_require__(2);

var _primitives = __w_pdfjs_require__(1);

var _fonts = __w_pdfjs_require__(25);

var _encodings = __w_pdfjs_require__(4);

var _unicode = __w_pdfjs_require__(8);

var _standard_fonts = __w_pdfjs_require__(16);

var _pattern = __w_pdfjs_require__(31);

var _function = __w_pdfjs_require__(7);

var _parser = __w_pdfjs_require__(5);

var _bidi = __w_pdfjs_require__(20);

var _colorspace = __w_pdfjs_require__(3);

var _glyphlist = __w_pdfjs_require__(6);

var _metrics = __w_pdfjs_require__(29);

var _murmurhash = __w_pdfjs_require__(30);

var _image = __w_pdfjs_require__(26);

var PartialEvaluator = function PartialEvaluatorClosure() {
  var DefaultPartialEvaluatorOptions = {
    forceDataSchema: false,
    maxImageSize: -1,
    disableFontFace: false,
    nativeImageDecoderSupport: _util.NativeImageDecoding.DECODE,
    ignoreErrors: false
  };
  function NativeImageDecoder(xref, resources, handler, forceDataSchema) {
    this.xref = xref;
    this.resources = resources;
    this.handler = handler;
    this.forceDataSchema = forceDataSchema;
  }
  NativeImageDecoder.prototype = {
    canDecode: function canDecode(image) {
      return image instanceof _stream.JpegStream && NativeImageDecoder.isDecodable(image, this.xref, this.resources);
    },
    decode: function decode(image) {
      var dict = image.dict;
      var colorSpace = dict.get('ColorSpace', 'CS');
      colorSpace = _colorspace.ColorSpace.parse(colorSpace, this.xref, this.resources);
      var numComps = colorSpace.numComps;
      var decodePromise = this.handler.sendWithPromise('JpegDecode', [image.getIR(this.forceDataSchema), numComps]);
      return decodePromise.then(function (message) {
        var data = message.data;
        return new _stream.Stream(data, 0, data.length, image.dict);
      });
    }
  };
  NativeImageDecoder.isSupported = function NativeImageDecoder_isSupported(image, xref, res) {
    var dict = image.dict;
    if (dict.has('DecodeParms') || dict.has('DP')) {
      return false;
    }
    var cs = _colorspace.ColorSpace.parse(dict.get('ColorSpace', 'CS'), xref, res);
    return (cs.name === 'DeviceGray' || cs.name === 'DeviceRGB') && cs.isDefaultDecode(dict.getArray('Decode', 'D'));
  };
  NativeImageDecoder.isDecodable = function NativeImageDecoder_isDecodable(image, xref, res) {
    var dict = image.dict;
    if (dict.has('DecodeParms') || dict.has('DP')) {
      return false;
    }
    var cs = _colorspace.ColorSpace.parse(dict.get('ColorSpace', 'CS'), xref, res);
    return (cs.numComps === 1 || cs.numComps === 3) && cs.isDefaultDecode(dict.getArray('Decode', 'D'));
  };
  function PartialEvaluator(_ref) {
    var _this = this;

    var pdfManager = _ref.pdfManager,
        xref = _ref.xref,
        handler = _ref.handler,
        pageIndex = _ref.pageIndex,
        idFactory = _ref.idFactory,
        fontCache = _ref.fontCache,
        builtInCMapCache = _ref.builtInCMapCache,
        _ref$options = _ref.options,
        options = _ref$options === undefined ? null : _ref$options;

    this.pdfManager = pdfManager;
    this.xref = xref;
    this.handler = handler;
    this.pageIndex = pageIndex;
    this.idFactory = idFactory;
    this.fontCache = fontCache;
    this.builtInCMapCache = builtInCMapCache;
    this.options = options || DefaultPartialEvaluatorOptions;
    this.fetchBuiltInCMap = function (name) {
      var cachedCMap = _this.builtInCMapCache[name];
      if (cachedCMap) {
        return Promise.resolve(cachedCMap);
      }
      return _this.handler.sendWithPromise('FetchBuiltInCMap', { name: name }).then(function (data) {
        if (data.compressionType !== _util.CMapCompressionType.NONE) {
          _this.builtInCMapCache[name] = data;
        }
        return data;
      });
    };
  }
  var TIME_SLOT_DURATION_MS = 20;
  var CHECK_TIME_EVERY = 100;
  function TimeSlotManager() {
    this.reset();
  }
  TimeSlotManager.prototype = {
    check: function TimeSlotManager_check() {
      if (++this.checked < CHECK_TIME_EVERY) {
        return false;
      }
      this.checked = 0;
      return this.endTime <= Date.now();
    },
    reset: function TimeSlotManager_reset() {
      this.endTime = Date.now() + TIME_SLOT_DURATION_MS;
      this.checked = 0;
    }
  };
  function normalizeBlendMode(value) {
    if (!(0, _primitives.isName)(value)) {
      return 'source-over';
    }
    switch (value.name) {
      case 'Normal':
      case 'Compatible':
        return 'source-over';
      case 'Multiply':
        return 'multiply';
      case 'Screen':
        return 'screen';
      case 'Overlay':
        return 'overlay';
      case 'Darken':
        return 'darken';
      case 'Lighten':
        return 'lighten';
      case 'ColorDodge':
        return 'color-dodge';
      case 'ColorBurn':
        return 'color-burn';
      case 'HardLight':
        return 'hard-light';
      case 'SoftLight':
        return 'soft-light';
      case 'Difference':
        return 'difference';
      case 'Exclusion':
        return 'exclusion';
      case 'Hue':
        return 'hue';
      case 'Saturation':
        return 'saturation';
      case 'Color':
        return 'color';
      case 'Luminosity':
        return 'luminosity';
    }
    (0, _util.warn)('Unsupported blend mode: ' + value.name);
    return 'source-over';
  }
  var deferred = Promise.resolve();
  var TILING_PATTERN = 1,
      SHADING_PATTERN = 2;
  PartialEvaluator.prototype = {
    clone: function clone() {
      var newOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DefaultPartialEvaluatorOptions;

      var newEvaluator = Object.create(this);
      newEvaluator.options = newOptions;
      return newEvaluator;
    },

    hasBlendModes: function PartialEvaluator_hasBlendModes(resources) {
      if (!(0, _primitives.isDict)(resources)) {
        return false;
      }
      var processed = Object.create(null);
      if (resources.objId) {
        processed[resources.objId] = true;
      }
      var nodes = [resources],
          xref = this.xref;
      while (nodes.length) {
        var key, i, ii;
        var node = nodes.shift();
        var graphicStates = node.get('ExtGState');
        if ((0, _primitives.isDict)(graphicStates)) {
          var graphicStatesKeys = graphicStates.getKeys();
          for (i = 0, ii = graphicStatesKeys.length; i < ii; i++) {
            key = graphicStatesKeys[i];
            var graphicState = graphicStates.get(key);
            var bm = graphicState.get('BM');
            if ((0, _primitives.isName)(bm) && bm.name !== 'Normal') {
              return true;
            }
          }
        }
        var xObjects = node.get('XObject');
        if (!(0, _primitives.isDict)(xObjects)) {
          continue;
        }
        var xObjectsKeys = xObjects.getKeys();
        for (i = 0, ii = xObjectsKeys.length; i < ii; i++) {
          key = xObjectsKeys[i];
          var xObject = xObjects.getRaw(key);
          if ((0, _primitives.isRef)(xObject)) {
            if (processed[xObject.toString()]) {
              continue;
            }
            xObject = xref.fetch(xObject);
          }
          if (!(0, _primitives.isStream)(xObject)) {
            continue;
          }
          if (xObject.dict.objId) {
            if (processed[xObject.dict.objId]) {
              continue;
            }
            processed[xObject.dict.objId] = true;
          }
          var xResources = xObject.dict.get('Resources');
          if ((0, _primitives.isDict)(xResources) && (!xResources.objId || !processed[xResources.objId])) {
            nodes.push(xResources);
            if (xResources.objId) {
              processed[xResources.objId] = true;
            }
          }
        }
      }
      return false;
    },
    buildFormXObject: function PartialEvaluator_buildFormXObject(resources, xobj, smask, operatorList, task, initialState) {
      var dict = xobj.dict;
      var matrix = dict.getArray('Matrix');
      var bbox = dict.getArray('BBox');
      var group = dict.get('Group');
      if (group) {
        var groupOptions = {
          matrix: matrix,
          bbox: bbox,
          smask: smask,
          isolated: false,
          knockout: false
        };
        var groupSubtype = group.get('S');
        var colorSpace;
        if ((0, _primitives.isName)(groupSubtype, 'Transparency')) {
          groupOptions.isolated = group.get('I') || false;
          groupOptions.knockout = group.get('K') || false;
          colorSpace = group.has('CS') ? _colorspace.ColorSpace.parse(group.get('CS'), this.xref, resources) : null;
        }
        if (smask && smask.backdrop) {
          colorSpace = colorSpace || _colorspace.ColorSpace.singletons.rgb;
          smask.backdrop = colorSpace.getRgb(smask.backdrop, 0);
        }
        operatorList.addOp(_util.OPS.beginGroup, [groupOptions]);
      }
      operatorList.addOp(_util.OPS.paintFormXObjectBegin, [matrix, bbox]);
      return this.getOperatorList({
        stream: xobj,
        task: task,
        resources: dict.get('Resources') || resources,
        operatorList: operatorList,
        initialState: initialState
      }).then(function () {
        operatorList.addOp(_util.OPS.paintFormXObjectEnd, []);
        if (group) {
          operatorList.addOp(_util.OPS.endGroup, [groupOptions]);
        }
      });
    },
    buildPaintImageXObject: function PartialEvaluator_buildPaintImageXObject(resources, image, inline, operatorList, cacheKey, imageCache) {
      var _this2 = this;

      var dict = image.dict;
      var w = dict.get('Width', 'W');
      var h = dict.get('Height', 'H');
      if (!(w && (0, _util.isNum)(w)) || !(h && (0, _util.isNum)(h))) {
        (0, _util.warn)('Image dimensions are missing, or not numbers.');
        return;
      }
      var maxImageSize = this.options.maxImageSize;
      if (maxImageSize !== -1 && w * h > maxImageSize) {
        (0, _util.warn)('Image exceeded maximum allowed size and was removed.');
        return;
      }
      var imageMask = dict.get('ImageMask', 'IM') || false;
      var imgData, args;
      if (imageMask) {
        var width = dict.get('Width', 'W');
        var height = dict.get('Height', 'H');
        var bitStrideLength = width + 7 >> 3;
        var imgArray = image.getBytes(bitStrideLength * height);
        var decode = dict.getArray('Decode', 'D');
        var inverseDecode = !!decode && decode[0] > 0;
        imgData = _image.PDFImage.createMask(imgArray, width, height, image instanceof _stream.DecodeStream, inverseDecode);
        imgData.cached = true;
        args = [imgData];
        operatorList.addOp(_util.OPS.paintImageMaskXObject, args);
        if (cacheKey) {
          imageCache[cacheKey] = {
            fn: _util.OPS.paintImageMaskXObject,
            args: args
          };
        }
        return;
      }
      var softMask = dict.get('SMask', 'SM') || false;
      var mask = dict.get('Mask') || false;
      var SMALL_IMAGE_DIMENSIONS = 200;
      if (inline && !softMask && !mask && !(image instanceof _stream.JpegStream) && w + h < SMALL_IMAGE_DIMENSIONS) {
        var imageObj = new _image.PDFImage(this.xref, resources, image, inline, null, null);
        imgData = imageObj.createImageData(true);
        operatorList.addOp(_util.OPS.paintInlineImageXObject, [imgData]);
        return;
      }
      var nativeImageDecoderSupport = this.options.nativeImageDecoderSupport;
      var objId = 'img_' + this.idFactory.createObjId();
      operatorList.addDependency(objId);
      args = [objId, w, h];
      if (nativeImageDecoderSupport !== _util.NativeImageDecoding.NONE && !softMask && !mask && image instanceof _stream.JpegStream && NativeImageDecoder.isSupported(image, this.xref, resources)) {
        operatorList.addOp(_util.OPS.paintJpegXObject, args);
        this.handler.send('obj', [objId, this.pageIndex, 'JpegStream', image.getIR(this.options.forceDataSchema)]);
        if (cacheKey) {
          imageCache[cacheKey] = {
            fn: _util.OPS.paintJpegXObject,
            args: args
          };
        }
        return;
      }
      var nativeImageDecoder = null;
      if (nativeImageDecoderSupport === _util.NativeImageDecoding.DECODE && (image instanceof _stream.JpegStream || mask instanceof _stream.JpegStream || softMask instanceof _stream.JpegStream)) {
        nativeImageDecoder = new NativeImageDecoder(this.xref, resources, this.handler, this.options.forceDataSchema);
      }
      _image.PDFImage.buildImage(this.handler, this.xref, resources, image, inline, nativeImageDecoder).then(function (imageObj) {
        var imgData = imageObj.createImageData(false);
        _this2.handler.send('obj', [objId, _this2.pageIndex, 'Image', imgData], [imgData.data.buffer]);
      }).catch(function (reason) {
        (0, _util.warn)('Unable to decode image: ' + reason);
        _this2.handler.send('obj', [objId, _this2.pageIndex, 'Image', null]);
      });
      operatorList.addOp(_util.OPS.paintImageXObject, args);
      if (cacheKey) {
        imageCache[cacheKey] = {
          fn: _util.OPS.paintImageXObject,
          args: args
        };
      }
    },
    handleSMask: function PartialEvaluator_handleSmask(smask, resources, operatorList, task, stateManager) {
      var smaskContent = smask.get('G');
      var smaskOptions = {
        subtype: smask.get('S').name,
        backdrop: smask.get('BC')
      };
      var transferObj = smask.get('TR');
      if ((0, _function.isPDFFunction)(transferObj)) {
        var transferFn = _function.PDFFunction.parse(this.xref, transferObj);
        var transferMap = new Uint8Array(256);
        var tmp = new Float32Array(1);
        for (var i = 0; i < 256; i++) {
          tmp[0] = i / 255;
          transferFn(tmp, 0, tmp, 0);
          transferMap[i] = tmp[0] * 255 | 0;
        }
        smaskOptions.transferMap = transferMap;
      }
      return this.buildFormXObject(resources, smaskContent, smaskOptions, operatorList, task, stateManager.state.clone());
    },
    handleTilingType: function handleTilingType(fn, args, resources, pattern, patternDict, operatorList, task) {
      var _this3 = this;

      var tilingOpList = new OperatorList();
      var resourcesArray = [patternDict.get('Resources'), resources];
      var patternResources = _primitives.Dict.merge(this.xref, resourcesArray);
      return this.getOperatorList({
        stream: pattern,
        task: task,
        resources: patternResources,
        operatorList: tilingOpList
      }).then(function () {
        return (0, _pattern.getTilingPatternIR)({
          fnArray: tilingOpList.fnArray,
          argsArray: tilingOpList.argsArray
        }, patternDict, args);
      }).then(function (tilingPatternIR) {
        operatorList.addDependencies(tilingOpList.dependencies);
        operatorList.addOp(fn, tilingPatternIR);
      }, function (reason) {
        if (_this3.options.ignoreErrors) {
          _this3.handler.send('UnsupportedFeature', { featureId: _util.UNSUPPORTED_FEATURES.unknown });
          (0, _util.warn)('handleTilingType - ignoring pattern: "' + reason + '".');
          return;
        }
        throw reason;
      });
    },

    handleSetFont: function PartialEvaluator_handleSetFont(resources, fontArgs, fontRef, operatorList, task, state) {
      var _this4 = this;

      var fontName;
      if (fontArgs) {
        fontArgs = fontArgs.slice();
        fontName = fontArgs[0].name;
      }
      return this.loadFont(fontName, fontRef, resources).then(function (translated) {
        if (!translated.font.isType3Font) {
          return translated;
        }
        return translated.loadType3Data(_this4, resources, operatorList, task).then(function () {
          return translated;
        }).catch(function (reason) {
          _this4.handler.send('UnsupportedFeature', { featureId: _util.UNSUPPORTED_FEATURES.font });
          return new TranslatedFont('g_font_error', new _fonts.ErrorFont('Type3 font load error: ' + reason), translated.font);
        });
      }).then(function (translated) {
        state.font = translated.font;
        translated.send(_this4.handler);
        return translated.loadedName;
      });
    },
    handleText: function PartialEvaluator_handleText(chars, state) {
      var _this5 = this;

      var font = state.font;
      var glyphs = font.charsToGlyphs(chars);
      var isAddToPathSet = !!(state.textRenderingMode & _util.TextRenderingMode.ADD_TO_PATH_FLAG);
      if (font.data && (isAddToPathSet || this.options.disableFontFace)) {
        var buildPath = function buildPath(fontChar) {
          if (!font.renderer.hasBuiltPath(fontChar)) {
            var path = font.renderer.getPathJs(fontChar);
            _this5.handler.send('commonobj', [font.loadedName + '_path_' + fontChar, 'FontPath', path]);
          }
        };
        for (var i = 0, ii = glyphs.length; i < ii; i++) {
          var glyph = glyphs[i];
          buildPath(glyph.fontChar);
          var accent = glyph.accent;
          if (accent && accent.fontChar) {
            buildPath(accent.fontChar);
          }
        }
      }
      return glyphs;
    },
    setGState: function PartialEvaluator_setGState(resources, gState, operatorList, task, stateManager) {
      var _this6 = this;

      var gStateObj = [];
      var gStateKeys = gState.getKeys();
      var promise = Promise.resolve();

      var _loop = function _loop() {
        var key = gStateKeys[i];
        var value = gState.get(key);
        switch (key) {
          case 'Type':
            break;
          case 'LW':
          case 'LC':
          case 'LJ':
          case 'ML':
          case 'D':
          case 'RI':
          case 'FL':
          case 'CA':
          case 'ca':
            gStateObj.push([key, value]);
            break;
          case 'Font':
            promise = promise.then(function () {
              return _this6.handleSetFont(resources, null, value[0], operatorList, task, stateManager.state).then(function (loadedName) {
                operatorList.addDependency(loadedName);
                gStateObj.push([key, [loadedName, value[1]]]);
              });
            });
            break;
          case 'BM':
            gStateObj.push([key, normalizeBlendMode(value)]);
            break;
          case 'SMask':
            if ((0, _primitives.isName)(value, 'None')) {
              gStateObj.push([key, false]);
              break;
            }
            if ((0, _primitives.isDict)(value)) {
              promise = promise.then(function () {
                return _this6.handleSMask(value, resources, operatorList, task, stateManager);
              });
              gStateObj.push([key, true]);
            } else {
              (0, _util.warn)('Unsupported SMask type');
            }
            break;
          case 'OP':
          case 'op':
          case 'OPM':
          case 'BG':
          case 'BG2':
          case 'UCR':
          case 'UCR2':
          case 'TR':
          case 'TR2':
          case 'HT':
          case 'SM':
          case 'SA':
          case 'AIS':
          case 'TK':
            (0, _util.info)('graphic state operator ' + key);
            break;
          default:
            (0, _util.info)('Unknown graphic state operator ' + key);
            break;
        }
      };

      for (var i = 0, ii = gStateKeys.length; i < ii; i++) {
        _loop();
      }
      return promise.then(function () {
        if (gStateObj.length > 0) {
          operatorList.addOp(_util.OPS.setGState, [gStateObj]);
        }
      });
    },
    loadFont: function PartialEvaluator_loadFont(fontName, font, resources) {
      var _this7 = this;

      function errorFont() {
        return Promise.resolve(new TranslatedFont('g_font_error', new _fonts.ErrorFont('Font ' + fontName + ' is not available'), font));
      }
      var fontRef,
          xref = this.xref;
      if (font) {
        if (!(0, _primitives.isRef)(font)) {
          throw new Error('The "font" object should be a reference.');
        }
        fontRef = font;
      } else {
        var fontRes = resources.get('Font');
        if (fontRes) {
          fontRef = fontRes.getRaw(fontName);
        } else {
          (0, _util.warn)('fontRes not available');
          return errorFont();
        }
      }
      if (!fontRef) {
        (0, _util.warn)('fontRef not available');
        return errorFont();
      }
      if (this.fontCache.has(fontRef)) {
        return this.fontCache.get(fontRef);
      }
      font = xref.fetchIfRef(fontRef);
      if (!(0, _primitives.isDict)(font)) {
        return errorFont();
      }
      if (font.translated) {
        return font.translated;
      }
      var fontCapability = (0, _util.createPromiseCapability)();
      var preEvaluatedFont = this.preEvaluateFont(font);
      var descriptor = preEvaluatedFont.descriptor;
      var fontRefIsRef = (0, _primitives.isRef)(fontRef),
          fontID;
      if (fontRefIsRef) {
        fontID = fontRef.toString();
      }
      if ((0, _primitives.isDict)(descriptor)) {
        if (!descriptor.fontAliases) {
          descriptor.fontAliases = Object.create(null);
        }
        var fontAliases = descriptor.fontAliases;
        var hash = preEvaluatedFont.hash;
        if (fontAliases[hash]) {
          var aliasFontRef = fontAliases[hash].aliasRef;
          if (fontRefIsRef && aliasFontRef && this.fontCache.has(aliasFontRef)) {
            this.fontCache.putAlias(fontRef, aliasFontRef);
            return this.fontCache.get(fontRef);
          }
        } else {
          fontAliases[hash] = { fontID: _fonts.Font.getFontID() };
        }
        if (fontRefIsRef) {
          fontAliases[hash].aliasRef = fontRef;
        }
        fontID = fontAliases[hash].fontID;
      }
      if (fontRefIsRef) {
        this.fontCache.put(fontRef, fontCapability.promise);
      } else {
        if (!fontID) {
          fontID = this.idFactory.createObjId();
        }
        this.fontCache.put('id_' + fontID, fontCapability.promise);
      }
      (0, _util.assert)(fontID, 'The "fontID" must be defined.');
      font.loadedName = 'g_' + this.pdfManager.docId + '_f' + fontID;
      font.translated = fontCapability.promise;
      var translatedPromise;
      try {
        translatedPromise = this.translateFont(preEvaluatedFont);
      } catch (e) {
        translatedPromise = Promise.reject(e);
      }
      translatedPromise.then(function (translatedFont) {
        if (translatedFont.fontType !== undefined) {
          var xrefFontStats = xref.stats.fontTypes;
          xrefFontStats[translatedFont.fontType] = true;
        }
        fontCapability.resolve(new TranslatedFont(font.loadedName, translatedFont, font));
      }).catch(function (reason) {
        _this7.handler.send('UnsupportedFeature', { featureId: _util.UNSUPPORTED_FEATURES.font });
        try {
          var descriptor = preEvaluatedFont.descriptor;
          var fontFile3 = descriptor && descriptor.get('FontFile3');
          var subtype = fontFile3 && fontFile3.get('Subtype');
          var fontType = (0, _fonts.getFontType)(preEvaluatedFont.type, subtype && subtype.name);
          var xrefFontStats = xref.stats.fontTypes;
          xrefFontStats[fontType] = true;
        } catch (ex) {}
        fontCapability.resolve(new TranslatedFont(font.loadedName, new _fonts.ErrorFont(reason instanceof Error ? reason.message : reason), font));
      });
      return fontCapability.promise;
    },
    buildPath: function PartialEvaluator_buildPath(operatorList, fn, args) {
      var lastIndex = operatorList.length - 1;
      if (!args) {
        args = [];
      }
      if (lastIndex < 0 || operatorList.fnArray[lastIndex] !== _util.OPS.constructPath) {
        operatorList.addOp(_util.OPS.constructPath, [[fn], args]);
      } else {
        var opArgs = operatorList.argsArray[lastIndex];
        opArgs[0].push(fn);
        Array.prototype.push.apply(opArgs[1], args);
      }
    },
    handleColorN: function PartialEvaluator_handleColorN(operatorList, fn, args, cs, patterns, resources, task) {
      var patternName = args[args.length - 1];
      var pattern;
      if ((0, _primitives.isName)(patternName) && (pattern = patterns.get(patternName.name))) {
        var dict = (0, _primitives.isStream)(pattern) ? pattern.dict : pattern;
        var typeNum = dict.get('PatternType');
        if (typeNum === TILING_PATTERN) {
          var color = cs.base ? cs.base.getRgb(args, 0) : null;
          return this.handleTilingType(fn, color, resources, pattern, dict, operatorList, task);
        } else if (typeNum === SHADING_PATTERN) {
          var shading = dict.get('Shading');
          var matrix = dict.getArray('Matrix');
          pattern = _pattern.Pattern.parseShading(shading, matrix, this.xref, resources, this.handler);
          operatorList.addOp(fn, pattern.getIR());
          return Promise.resolve();
        }
        return Promise.reject(new Error('Unknown PatternType: ' + typeNum));
      }
      operatorList.addOp(fn, args);
      return Promise.resolve();
    },
    getOperatorList: function getOperatorList(_ref2) {
      var _this8 = this;

      var stream = _ref2.stream,
          task = _ref2.task,
          resources = _ref2.resources,
          operatorList = _ref2.operatorList,
          _ref2$initialState = _ref2.initialState,
          initialState = _ref2$initialState === undefined ? null : _ref2$initialState;

      resources = resources || _primitives.Dict.empty;
      initialState = initialState || new EvalState();
      if (!operatorList) {
        throw new Error('getOperatorList: missing "operatorList" parameter');
      }
      var self = this;
      var xref = this.xref;
      var imageCache = Object.create(null);
      var xobjs = resources.get('XObject') || _primitives.Dict.empty;
      var patterns = resources.get('Pattern') || _primitives.Dict.empty;
      var stateManager = new StateManager(initialState);
      var preprocessor = new EvaluatorPreprocessor(stream, xref, stateManager);
      var timeSlotManager = new TimeSlotManager();
      function closePendingRestoreOPS(argument) {
        for (var i = 0, ii = preprocessor.savedStatesDepth; i < ii; i++) {
          operatorList.addOp(_util.OPS.restore, []);
        }
      }
      return new Promise(function promiseBody(resolve, reject) {
        var next = function next(promise) {
          promise.then(function () {
            try {
              promiseBody(resolve, reject);
            } catch (ex) {
              reject(ex);
            }
          }, reject);
        };
        task.ensureNotTerminated();
        timeSlotManager.reset();
        var stop,
            operation = {},
            i,
            ii,
            cs;
        while (!(stop = timeSlotManager.check())) {
          operation.args = null;
          if (!preprocessor.read(operation)) {
            break;
          }
          var args = operation.args;
          var fn = operation.fn;
          switch (fn | 0) {
            case _util.OPS.paintXObject:
              var name = args[0].name;
              if (!name) {
                (0, _util.warn)('XObject must be referred to by name.');
                continue;
              }
              if (imageCache[name] !== undefined) {
                operatorList.addOp(imageCache[name].fn, imageCache[name].args);
                args = null;
                continue;
              }
              var xobj = xobjs.get(name);
              if (xobj) {
                if (!(0, _primitives.isStream)(xobj)) {
                  throw new _util.FormatError('XObject should be a stream');
                }
                var type = xobj.dict.get('Subtype');
                if (!(0, _primitives.isName)(type)) {
                  throw new _util.FormatError('XObject should have a Name subtype');
                }
                if (type.name === 'Form') {
                  stateManager.save();
                  next(self.buildFormXObject(resources, xobj, null, operatorList, task, stateManager.state.clone()).then(function () {
                    stateManager.restore();
                  }));
                  return;
                } else if (type.name === 'Image') {
                  self.buildPaintImageXObject(resources, xobj, false, operatorList, name, imageCache);
                  args = null;
                  continue;
                } else if (type.name === 'PS') {
                  (0, _util.info)('Ignored XObject subtype PS');
                  continue;
                } else {
                  throw new _util.FormatError('Unhandled XObject subtype ' + type.name);
                }
              }
              break;
            case _util.OPS.setFont:
              var fontSize = args[1];
              next(self.handleSetFont(resources, args, null, operatorList, task, stateManager.state).then(function (loadedName) {
                operatorList.addDependency(loadedName);
                operatorList.addOp(_util.OPS.setFont, [loadedName, fontSize]);
              }));
              return;
            case _util.OPS.endInlineImage:
              var cacheKey = args[0].cacheKey;
              if (cacheKey) {
                var cacheEntry = imageCache[cacheKey];
                if (cacheEntry !== undefined) {
                  operatorList.addOp(cacheEntry.fn, cacheEntry.args);
                  args = null;
                  continue;
                }
              }
              self.buildPaintImageXObject(resources, args[0], true, operatorList, cacheKey, imageCache);
              args = null;
              continue;
            case _util.OPS.showText:
              args[0] = self.handleText(args[0], stateManager.state);
              break;
            case _util.OPS.showSpacedText:
              var arr = args[0];
              var combinedGlyphs = [];
              var arrLength = arr.length;
              var state = stateManager.state;
              for (i = 0; i < arrLength; ++i) {
                var arrItem = arr[i];
                if ((0, _util.isString)(arrItem)) {
                  Array.prototype.push.apply(combinedGlyphs, self.handleText(arrItem, state));
                } else if ((0, _util.isNum)(arrItem)) {
                  combinedGlyphs.push(arrItem);
                }
              }
              args[0] = combinedGlyphs;
              fn = _util.OPS.showText;
              break;
            case _util.OPS.nextLineShowText:
              operatorList.addOp(_util.OPS.nextLine);
              args[0] = self.handleText(args[0], stateManager.state);
              fn = _util.OPS.showText;
              break;
            case _util.OPS.nextLineSetSpacingShowText:
              operatorList.addOp(_util.OPS.nextLine);
              operatorList.addOp(_util.OPS.setWordSpacing, [args.shift()]);
              operatorList.addOp(_util.OPS.setCharSpacing, [args.shift()]);
              args[0] = self.handleText(args[0], stateManager.state);
              fn = _util.OPS.showText;
              break;
            case _util.OPS.setTextRenderingMode:
              stateManager.state.textRenderingMode = args[0];
              break;
            case _util.OPS.setFillColorSpace:
              stateManager.state.fillColorSpace = _colorspace.ColorSpace.parse(args[0], xref, resources);
              continue;
            case _util.OPS.setStrokeColorSpace:
              stateManager.state.strokeColorSpace = _colorspace.ColorSpace.parse(args[0], xref, resources);
              continue;
            case _util.OPS.setFillColor:
              cs = stateManager.state.fillColorSpace;
              args = cs.getRgb(args, 0);
              fn = _util.OPS.setFillRGBColor;
              break;
            case _util.OPS.setStrokeColor:
              cs = stateManager.state.strokeColorSpace;
              args = cs.getRgb(args, 0);
              fn = _util.OPS.setStrokeRGBColor;
              break;
            case _util.OPS.setFillGray:
              stateManager.state.fillColorSpace = _colorspace.ColorSpace.singletons.gray;
              args = _colorspace.ColorSpace.singletons.gray.getRgb(args, 0);
              fn = _util.OPS.setFillRGBColor;
              break;
            case _util.OPS.setStrokeGray:
              stateManager.state.strokeColorSpace = _colorspace.ColorSpace.singletons.gray;
              args = _colorspace.ColorSpace.singletons.gray.getRgb(args, 0);
              fn = _util.OPS.setStrokeRGBColor;
              break;
            case _util.OPS.setFillCMYKColor:
              stateManager.state.fillColorSpace = _colorspace.ColorSpace.singletons.cmyk;
              args = _colorspace.ColorSpace.singletons.cmyk.getRgb(args, 0);
              fn = _util.OPS.setFillRGBColor;
              break;
            case _util.OPS.setStrokeCMYKColor:
              stateManager.state.strokeColorSpace = _colorspace.ColorSpace.singletons.cmyk;
              args = _colorspace.ColorSpace.singletons.cmyk.getRgb(args, 0);
              fn = _util.OPS.setStrokeRGBColor;
              break;
            case _util.OPS.setFillRGBColor:
              stateManager.state.fillColorSpace = _colorspace.ColorSpace.singletons.rgb;
              args = _colorspace.ColorSpace.singletons.rgb.getRgb(args, 0);
              break;
            case _util.OPS.setStrokeRGBColor:
              stateManager.state.strokeColorSpace = _colorspace.ColorSpace.singletons.rgb;
              args = _colorspace.ColorSpace.singletons.rgb.getRgb(args, 0);
              break;
            case _util.OPS.setFillColorN:
              cs = stateManager.state.fillColorSpace;
              if (cs.name === 'Pattern') {
                next(self.handleColorN(operatorList, _util.OPS.setFillColorN, args, cs, patterns, resources, task));
                return;
              }
              args = cs.getRgb(args, 0);
              fn = _util.OPS.setFillRGBColor;
              break;
            case _util.OPS.setStrokeColorN:
              cs = stateManager.state.strokeColorSpace;
              if (cs.name === 'Pattern') {
                next(self.handleColorN(operatorList, _util.OPS.setStrokeColorN, args, cs, patterns, resources, task));
                return;
              }
              args = cs.getRgb(args, 0);
              fn = _util.OPS.setStrokeRGBColor;
              break;
            case _util.OPS.shadingFill:
              var shadingRes = resources.get('Shading');
              if (!shadingRes) {
                throw new _util.FormatError('No shading resource found');
              }
              var shading = shadingRes.get(args[0].name);
              if (!shading) {
                throw new _util.FormatError('No shading object found');
              }
              var shadingFill = _pattern.Pattern.parseShading(shading, null, xref, resources, self.handler);
              var patternIR = shadingFill.getIR();
              args = [patternIR];
              fn = _util.OPS.shadingFill;
              break;
            case _util.OPS.setGState:
              var dictName = args[0];
              var extGState = resources.get('ExtGState');
              if (!(0, _primitives.isDict)(extGState) || !extGState.has(dictName.name)) {
                break;
              }
              var gState = extGState.get(dictName.name);
              next(self.setGState(resources, gState, operatorList, task, stateManager));
              return;
            case _util.OPS.moveTo:
            case _util.OPS.lineTo:
            case _util.OPS.curveTo:
            case _util.OPS.curveTo2:
            case _util.OPS.curveTo3:
            case _util.OPS.closePath:
              self.buildPath(operatorList, fn, args);
              continue;
            case _util.OPS.rectangle:
              self.buildPath(operatorList, fn, args);
              continue;
            case _util.OPS.markPoint:
            case _util.OPS.markPointProps:
            case _util.OPS.beginMarkedContent:
            case _util.OPS.beginMarkedContentProps:
            case _util.OPS.endMarkedContent:
            case _util.OPS.beginCompat:
            case _util.OPS.endCompat:
              continue;
            default:
              if (args !== null) {
                for (i = 0, ii = args.length; i < ii; i++) {
                  if (args[i] instanceof _primitives.Dict) {
                    break;
                  }
                }
                if (i < ii) {
                  (0, _util.warn)('getOperatorList - ignoring operator: ' + fn);
                  continue;
                }
              }
          }
          operatorList.addOp(fn, args);
        }
        if (stop) {
          next(deferred);
          return;
        }
        closePendingRestoreOPS();
        resolve();
      }).catch(function (reason) {
        if (_this8.options.ignoreErrors) {
          _this8.handler.send('UnsupportedFeature', { featureId: _util.UNSUPPORTED_FEATURES.unknown });
          (0, _util.warn)('getOperatorList - ignoring errors during task: ' + task.name);
          closePendingRestoreOPS();
          return;
        }
        throw reason;
      });
    },
    getTextContent: function getTextContent(_ref3) {
      var _this9 = this;

      var stream = _ref3.stream,
          task = _ref3.task,
          resources = _ref3.resources,
          _ref3$stateManager = _ref3.stateManager,
          stateManager = _ref3$stateManager === undefined ? null : _ref3$stateManager,
          _ref3$normalizeWhites = _ref3.normalizeWhitespace,
          normalizeWhitespace = _ref3$normalizeWhites === undefined ? false : _ref3$normalizeWhites,
          _ref3$combineTextItem = _ref3.combineTextItems,
          combineTextItems = _ref3$combineTextItem === undefined ? false : _ref3$combineTextItem,
          sink = _ref3.sink,
          _ref3$seenStyles = _ref3.seenStyles,
          seenStyles = _ref3$seenStyles === undefined ? Object.create(null) : _ref3$seenStyles;

      resources = resources || _primitives.Dict.empty;
      stateManager = stateManager || new StateManager(new TextState());
      var WhitespaceRegexp = /\s/g;
      var textContent = {
        items: [],
        styles: Object.create(null)
      };
      var textContentItem = {
        initialized: false,
        str: [],
        width: 0,
        height: 0,
        vertical: false,
        lastAdvanceWidth: 0,
        lastAdvanceHeight: 0,
        textAdvanceScale: 0,
        spaceWidth: 0,
        fakeSpaceMin: Infinity,
        fakeMultiSpaceMin: Infinity,
        fakeMultiSpaceMax: -0,
        textRunBreakAllowed: false,
        transform: null,
        fontName: null
      };
      var SPACE_FACTOR = 0.3;
      var MULTI_SPACE_FACTOR = 1.5;
      var MULTI_SPACE_FACTOR_MAX = 4;
      var self = this;
      var xref = this.xref;
      var xobjs = null;
      var skipEmptyXObjs = Object.create(null);
      var preprocessor = new EvaluatorPreprocessor(stream, xref, stateManager);
      var textState;
      function ensureTextContentItem() {
        if (textContentItem.initialized) {
          return textContentItem;
        }
        var font = textState.font;
        if (!(font.loadedName in seenStyles)) {
          seenStyles[font.loadedName] = true;
          textContent.styles[font.loadedName] = {
            fontFamily: font.fallbackName,
            ascent: font.ascent,
            descent: font.descent,
            vertical: font.vertical
          };
        }
        textContentItem.fontName = font.loadedName;
        var tsm = [textState.fontSize * textState.textHScale, 0, 0, textState.fontSize, 0, textState.textRise];
        if (font.isType3Font && textState.fontMatrix !== _util.FONT_IDENTITY_MATRIX && textState.fontSize === 1) {
          var glyphHeight = font.bbox[3] - font.bbox[1];
          if (glyphHeight > 0) {
            glyphHeight = glyphHeight * textState.fontMatrix[3];
            tsm[3] *= glyphHeight;
          }
        }
        var trm = _util.Util.transform(textState.ctm, _util.Util.transform(textState.textMatrix, tsm));
        textContentItem.transform = trm;
        if (!font.vertical) {
          textContentItem.width = 0;
          textContentItem.height = Math.sqrt(trm[2] * trm[2] + trm[3] * trm[3]);
          textContentItem.vertical = false;
        } else {
          textContentItem.width = Math.sqrt(trm[0] * trm[0] + trm[1] * trm[1]);
          textContentItem.height = 0;
          textContentItem.vertical = true;
        }
        var a = textState.textLineMatrix[0];
        var b = textState.textLineMatrix[1];
        var scaleLineX = Math.sqrt(a * a + b * b);
        a = textState.ctm[0];
        b = textState.ctm[1];
        var scaleCtmX = Math.sqrt(a * a + b * b);
        textContentItem.textAdvanceScale = scaleCtmX * scaleLineX;
        textContentItem.lastAdvanceWidth = 0;
        textContentItem.lastAdvanceHeight = 0;
        var spaceWidth = font.spaceWidth / 1000 * textState.fontSize;
        if (spaceWidth) {
          textContentItem.spaceWidth = spaceWidth;
          textContentItem.fakeSpaceMin = spaceWidth * SPACE_FACTOR;
          textContentItem.fakeMultiSpaceMin = spaceWidth * MULTI_SPACE_FACTOR;
          textContentItem.fakeMultiSpaceMax = spaceWidth * MULTI_SPACE_FACTOR_MAX;
          textContentItem.textRunBreakAllowed = !font.isMonospace;
        } else {
          textContentItem.spaceWidth = 0;
          textContentItem.fakeSpaceMin = Infinity;
          textContentItem.fakeMultiSpaceMin = Infinity;
          textContentItem.fakeMultiSpaceMax = 0;
          textContentItem.textRunBreakAllowed = false;
        }
        textContentItem.initialized = true;
        return textContentItem;
      }
      function replaceWhitespace(str) {
        var i = 0,
            ii = str.length,
            code;
        while (i < ii && (code = str.charCodeAt(i)) >= 0x20 && code <= 0x7F) {
          i++;
        }
        return i < ii ? str.replace(WhitespaceRegexp, ' ') : str;
      }
      function runBidiTransform(textChunk) {
        var str = textChunk.str.join('');
        var bidiResult = (0, _bidi.bidi)(str, -1, textChunk.vertical);
        return {
          str: normalizeWhitespace ? replaceWhitespace(bidiResult.str) : bidiResult.str,
          dir: bidiResult.dir,
          width: textChunk.width,
          height: textChunk.height,
          transform: textChunk.transform,
          fontName: textChunk.fontName
        };
      }
      function handleSetFont(fontName, fontRef) {
        return self.loadFont(fontName, fontRef, resources).then(function (translated) {
          textState.font = translated.font;
          textState.fontMatrix = translated.font.fontMatrix || _util.FONT_IDENTITY_MATRIX;
        });
      }
      function buildTextContentItem(chars) {
        var font = textState.font;
        var textChunk = ensureTextContentItem();
        var width = 0;
        var height = 0;
        var glyphs = font.charsToGlyphs(chars);
        for (var i = 0; i < glyphs.length; i++) {
          var glyph = glyphs[i];
          var glyphWidth = null;
          if (font.vertical && glyph.vmetric) {
            glyphWidth = glyph.vmetric[0];
          } else {
            glyphWidth = glyph.width;
          }
          var glyphUnicode = glyph.unicode;
          var NormalizedUnicodes = (0, _unicode.getNormalizedUnicodes)();
          if (NormalizedUnicodes[glyphUnicode] !== undefined) {
            glyphUnicode = NormalizedUnicodes[glyphUnicode];
          }
          glyphUnicode = (0, _unicode.reverseIfRtl)(glyphUnicode);
          var charSpacing = textState.charSpacing;
          if (glyph.isSpace) {
            var wordSpacing = textState.wordSpacing;
            charSpacing += wordSpacing;
            if (wordSpacing > 0) {
              addFakeSpaces(wordSpacing, textChunk.str);
            }
          }
          var tx = 0;
          var ty = 0;
          if (!font.vertical) {
            var w0 = glyphWidth * textState.fontMatrix[0];
            tx = (w0 * textState.fontSize + charSpacing) * textState.textHScale;
            width += tx;
          } else {
            var w1 = glyphWidth * textState.fontMatrix[0];
            ty = w1 * textState.fontSize + charSpacing;
            height += ty;
          }
          textState.translateTextMatrix(tx, ty);
          textChunk.str.push(glyphUnicode);
        }
        if (!font.vertical) {
          textChunk.lastAdvanceWidth = width;
          textChunk.width += width;
        } else {
          textChunk.lastAdvanceHeight = height;
          textChunk.height += Math.abs(height);
        }
        return textChunk;
      }
      function addFakeSpaces(width, strBuf) {
        if (width < textContentItem.fakeSpaceMin) {
          return;
        }
        if (width < textContentItem.fakeMultiSpaceMin) {
          strBuf.push(' ');
          return;
        }
        var fakeSpaces = Math.round(width / textContentItem.spaceWidth);
        while (fakeSpaces-- > 0) {
          strBuf.push(' ');
        }
      }
      function flushTextContentItem() {
        if (!textContentItem.initialized) {
          return;
        }
        textContentItem.width *= textContentItem.textAdvanceScale;
        textContentItem.height *= textContentItem.textAdvanceScale;
        textContent.items.push(runBidiTransform(textContentItem));
        textContentItem.initialized = false;
        textContentItem.str.length = 0;
      }
      function enqueueChunk() {
        var length = textContent.items.length;
        if (length > 0) {
          sink.enqueue(textContent, length);
          textContent.items = [];
          textContent.styles = Object.create(null);
        }
      }
      var timeSlotManager = new TimeSlotManager();
      return new Promise(function promiseBody(resolve, reject) {
        var next = function next(promise) {
          enqueueChunk();
          Promise.all([promise, sink.ready]).then(function () {
            try {
              promiseBody(resolve, reject);
            } catch (ex) {
              reject(ex);
            }
          }, reject);
        };
        task.ensureNotTerminated();
        timeSlotManager.reset();
        var stop,
            operation = {},
            args = [];
        while (!(stop = timeSlotManager.check())) {
          args.length = 0;
          operation.args = args;
          if (!preprocessor.read(operation)) {
            break;
          }
          textState = stateManager.state;
          var fn = operation.fn;
          args = operation.args;
          var advance, diff;
          var fontNameArg, fontSizeArg;
          var isSameTextLine;
          var items;
          var offset;
          var j, jj;
          var breakTextRun;
          var name;
          var xobj;
          var type;
          var currentState;
          var xObjStateManager;
          var matrix;
          var dictName;
          var extGState;
          var gState;
          var gStateFont;

          var _ret2 = function () {
            switch (fn | 0) {
              case _util.OPS.setFont:
                fontNameArg = args[0].name;
                fontSizeArg = args[1];

                if (textState.font && fontNameArg === textState.fontName && fontSizeArg === textState.fontSize) {
                  break;
                }
                flushTextContentItem();
                textState.fontName = fontNameArg;
                textState.fontSize = fontSizeArg;
                next(handleSetFont(fontNameArg, null));
                return {
                  v: void 0
                };
              case _util.OPS.setTextRise:
                flushTextContentItem();
                textState.textRise = args[0];
                break;
              case _util.OPS.setHScale:
                flushTextContentItem();
                textState.textHScale = args[0] / 100;
                break;
              case _util.OPS.setLeading:
                flushTextContentItem();
                textState.leading = args[0];
                break;
              case _util.OPS.moveText:
                isSameTextLine = !textState.font ? false : (textState.font.vertical ? args[0] : args[1]) === 0;

                advance = args[0] - args[1];
                if (combineTextItems && isSameTextLine && textContentItem.initialized && advance > 0 && advance <= textContentItem.fakeMultiSpaceMax) {
                  textState.translateTextLineMatrix(args[0], args[1]);
                  textContentItem.width += args[0] - textContentItem.lastAdvanceWidth;
                  textContentItem.height += args[1] - textContentItem.lastAdvanceHeight;
                  diff = args[0] - textContentItem.lastAdvanceWidth - (args[1] - textContentItem.lastAdvanceHeight);
                  addFakeSpaces(diff, textContentItem.str);
                  break;
                }
                flushTextContentItem();
                textState.translateTextLineMatrix(args[0], args[1]);
                textState.textMatrix = textState.textLineMatrix.slice();
                break;
              case _util.OPS.setLeadingMoveText:
                flushTextContentItem();
                textState.leading = -args[1];
                textState.translateTextLineMatrix(args[0], args[1]);
                textState.textMatrix = textState.textLineMatrix.slice();
                break;
              case _util.OPS.nextLine:
                flushTextContentItem();
                textState.carriageReturn();
                break;
              case _util.OPS.setTextMatrix:
                advance = textState.calcTextLineMatrixAdvance(args[0], args[1], args[2], args[3], args[4], args[5]);
                if (combineTextItems && advance !== null && textContentItem.initialized && advance.value > 0 && advance.value <= textContentItem.fakeMultiSpaceMax) {
                  textState.translateTextLineMatrix(advance.width, advance.height);
                  textContentItem.width += advance.width - textContentItem.lastAdvanceWidth;
                  textContentItem.height += advance.height - textContentItem.lastAdvanceHeight;
                  diff = advance.width - textContentItem.lastAdvanceWidth - (advance.height - textContentItem.lastAdvanceHeight);
                  addFakeSpaces(diff, textContentItem.str);
                  break;
                }
                flushTextContentItem();
                textState.setTextMatrix(args[0], args[1], args[2], args[3], args[4], args[5]);
                textState.setTextLineMatrix(args[0], args[1], args[2], args[3], args[4], args[5]);
                break;
              case _util.OPS.setCharSpacing:
                textState.charSpacing = args[0];
                break;
              case _util.OPS.setWordSpacing:
                textState.wordSpacing = args[0];
                break;
              case _util.OPS.beginText:
                flushTextContentItem();
                textState.textMatrix = _util.IDENTITY_MATRIX.slice();
                textState.textLineMatrix = _util.IDENTITY_MATRIX.slice();
                break;
              case _util.OPS.showSpacedText:
                items = args[0];

                for (j = 0, jj = items.length; j < jj; j++) {
                  if (typeof items[j] === 'string') {
                    buildTextContentItem(items[j]);
                  } else if ((0, _util.isNum)(items[j])) {
                    ensureTextContentItem();
                    advance = items[j] * textState.fontSize / 1000;
                    breakTextRun = false;

                    if (textState.font.vertical) {
                      offset = advance;
                      textState.translateTextMatrix(0, offset);
                      breakTextRun = textContentItem.textRunBreakAllowed && advance > textContentItem.fakeMultiSpaceMax;
                      if (!breakTextRun) {
                        textContentItem.height += offset;
                      }
                    } else {
                      advance = -advance;
                      offset = advance * textState.textHScale;
                      textState.translateTextMatrix(offset, 0);
                      breakTextRun = textContentItem.textRunBreakAllowed && advance > textContentItem.fakeMultiSpaceMax;
                      if (!breakTextRun) {
                        textContentItem.width += offset;
                      }
                    }
                    if (breakTextRun) {
                      flushTextContentItem();
                    } else if (advance > 0) {
                      addFakeSpaces(advance, textContentItem.str);
                    }
                  }
                }
                break;
              case _util.OPS.showText:
                buildTextContentItem(args[0]);
                break;
              case _util.OPS.nextLineShowText:
                flushTextContentItem();
                textState.carriageReturn();
                buildTextContentItem(args[0]);
                break;
              case _util.OPS.nextLineSetSpacingShowText:
                flushTextContentItem();
                textState.wordSpacing = args[0];
                textState.charSpacing = args[1];
                textState.carriageReturn();
                buildTextContentItem(args[2]);
                break;
              case _util.OPS.paintXObject:
                flushTextContentItem();
                if (!xobjs) {
                  xobjs = resources.get('XObject') || _primitives.Dict.empty;
                }
                name = args[0].name;

                if (name in skipEmptyXObjs) {
                  break;
                }
                xobj = xobjs.get(name);

                if (!xobj) {
                  break;
                }
                if (!(0, _primitives.isStream)(xobj)) {
                  throw new _util.FormatError('XObject should be a stream');
                }
                type = xobj.dict.get('Subtype');

                if (!(0, _primitives.isName)(type)) {
                  throw new _util.FormatError('XObject should have a Name subtype');
                }
                if (type.name !== 'Form') {
                  skipEmptyXObjs[name] = true;
                  break;
                }
                currentState = stateManager.state.clone();
                xObjStateManager = new StateManager(currentState);
                matrix = xobj.dict.getArray('Matrix');

                if ((0, _util.isArray)(matrix) && matrix.length === 6) {
                  xObjStateManager.transform(matrix);
                }
                enqueueChunk();
                var sinkWrapper = {
                  enqueueInvoked: false,
                  enqueue: function enqueue(chunk, size) {
                    this.enqueueInvoked = true;
                    sink.enqueue(chunk, size);
                  },

                  get desiredSize() {
                    return sink.desiredSize;
                  },
                  get ready() {
                    return sink.ready;
                  }
                };
                next(self.getTextContent({
                  stream: xobj,
                  task: task,
                  resources: xobj.dict.get('Resources') || resources,
                  stateManager: xObjStateManager,
                  normalizeWhitespace: normalizeWhitespace,
                  combineTextItems: combineTextItems,
                  sink: sinkWrapper,
                  seenStyles: seenStyles
                }).then(function () {
                  if (!sinkWrapper.enqueueInvoked) {
                    skipEmptyXObjs[name] = true;
                  }
                }));
                return {
                  v: void 0
                };
              case _util.OPS.setGState:
                flushTextContentItem();
                dictName = args[0];
                extGState = resources.get('ExtGState');

                if (!(0, _primitives.isDict)(extGState) || !(0, _primitives.isName)(dictName)) {
                  break;
                }
                gState = extGState.get(dictName.name);

                if (!(0, _primitives.isDict)(gState)) {
                  break;
                }
                gStateFont = gState.get('Font');

                if (gStateFont) {
                  textState.fontName = null;
                  textState.fontSize = gStateFont[1];
                  next(handleSetFont(null, gStateFont[0]));
                  return {
                    v: void 0
                  };
                }
                break;
            }
          }();

          if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
          if (textContent.items.length >= sink.desiredSize) {
            stop = true;
            break;
          }
        }
        if (stop) {
          next(deferred);
          return;
        }
        flushTextContentItem();
        enqueueChunk();
        resolve();
      }).catch(function (reason) {
        if (reason instanceof _util.AbortException) {
          return;
        }
        if (_this9.options.ignoreErrors) {
          (0, _util.warn)('getTextContent - ignoring errors during task: ' + task.name);
          flushTextContentItem();
          enqueueChunk();
          return;
        }
        throw reason;
      });
    },

    extractDataStructures: function PartialEvaluator_extractDataStructures(dict, baseDict, properties) {
      var _this10 = this;

      var xref = this.xref;
      var toUnicode = dict.get('ToUnicode') || baseDict.get('ToUnicode');
      var toUnicodePromise = toUnicode ? this.readToUnicode(toUnicode) : Promise.resolve(undefined);
      if (properties.composite) {
        var cidSystemInfo = dict.get('CIDSystemInfo');
        if ((0, _primitives.isDict)(cidSystemInfo)) {
          properties.cidSystemInfo = {
            registry: cidSystemInfo.get('Registry'),
            ordering: cidSystemInfo.get('Ordering'),
            supplement: cidSystemInfo.get('Supplement')
          };
        }
        var cidToGidMap = dict.get('CIDToGIDMap');
        if ((0, _primitives.isStream)(cidToGidMap)) {
          properties.cidToGidMap = this.readCidToGidMap(cidToGidMap);
        }
      }
      var differences = [];
      var baseEncodingName = null;
      var encoding;
      if (dict.has('Encoding')) {
        encoding = dict.get('Encoding');
        if ((0, _primitives.isDict)(encoding)) {
          baseEncodingName = encoding.get('BaseEncoding');
          baseEncodingName = (0, _primitives.isName)(baseEncodingName) ? baseEncodingName.name : null;
          if (encoding.has('Differences')) {
            var diffEncoding = encoding.get('Differences');
            var index = 0;
            for (var j = 0, jj = diffEncoding.length; j < jj; j++) {
              var data = xref.fetchIfRef(diffEncoding[j]);
              if ((0, _util.isNum)(data)) {
                index = data;
              } else if ((0, _primitives.isName)(data)) {
                differences[index++] = data.name;
              } else {
                throw new _util.FormatError('Invalid entry in \'Differences\' array: ' + data);
              }
            }
          }
        } else if ((0, _primitives.isName)(encoding)) {
          baseEncodingName = encoding.name;
        } else {
          throw new _util.FormatError('Encoding is not a Name nor a Dict');
        }
        if (baseEncodingName !== 'MacRomanEncoding' && baseEncodingName !== 'MacExpertEncoding' && baseEncodingName !== 'WinAnsiEncoding') {
          baseEncodingName = null;
        }
      }
      if (baseEncodingName) {
        properties.defaultEncoding = (0, _encodings.getEncoding)(baseEncodingName).slice();
      } else {
        var isSymbolicFont = !!(properties.flags & _fonts.FontFlags.Symbolic);
        var isNonsymbolicFont = !!(properties.flags & _fonts.FontFlags.Nonsymbolic);
        encoding = _encodings.StandardEncoding;
        if (properties.type === 'TrueType' && !isNonsymbolicFont) {
          encoding = _encodings.WinAnsiEncoding;
        }
        if (isSymbolicFont) {
          encoding = _encodings.MacRomanEncoding;
          if (!properties.file) {
            if (/Symbol/i.test(properties.name)) {
              encoding = _encodings.SymbolSetEncoding;
            } else if (/Dingbats/i.test(properties.name)) {
              encoding = _encodings.ZapfDingbatsEncoding;
            }
          }
        }
        properties.defaultEncoding = encoding;
      }
      properties.differences = differences;
      properties.baseEncodingName = baseEncodingName;
      properties.hasEncoding = !!baseEncodingName || differences.length > 0;
      properties.dict = dict;
      return toUnicodePromise.then(function (toUnicode) {
        properties.toUnicode = toUnicode;
        return _this10.buildToUnicode(properties);
      }).then(function (toUnicode) {
        properties.toUnicode = toUnicode;
        return properties;
      });
    },
    buildToUnicode: function PartialEvaluator_buildToUnicode(properties) {
      properties.hasIncludedToUnicodeMap = !!properties.toUnicode && properties.toUnicode.length > 0;
      if (properties.hasIncludedToUnicodeMap) {
        return Promise.resolve(properties.toUnicode);
      }
      var toUnicode, charcode, glyphName;
      if (!properties.composite) {
        toUnicode = [];
        var encoding = properties.defaultEncoding.slice();
        var baseEncodingName = properties.baseEncodingName;
        var differences = properties.differences;
        for (charcode in differences) {
          glyphName = differences[charcode];
          if (glyphName === '.notdef') {
            continue;
          }
          encoding[charcode] = glyphName;
        }
        var glyphsUnicodeMap = (0, _glyphlist.getGlyphsUnicode)();
        for (charcode in encoding) {
          glyphName = encoding[charcode];
          if (glyphName === '') {
            continue;
          } else if (glyphsUnicodeMap[glyphName] === undefined) {
            var code = 0;
            switch (glyphName[0]) {
              case 'G':
                if (glyphName.length === 3) {
                  code = parseInt(glyphName.substr(1), 16);
                }
                break;
              case 'g':
                if (glyphName.length === 5) {
                  code = parseInt(glyphName.substr(1), 16);
                }
                break;
              case 'C':
              case 'c':
                if (glyphName.length >= 3) {
                  code = +glyphName.substr(1);
                }
                break;
              default:
                var unicode = (0, _unicode.getUnicodeForGlyph)(glyphName, glyphsUnicodeMap);
                if (unicode !== -1) {
                  code = unicode;
                }
            }
            if (code) {
              if (baseEncodingName && code === +charcode) {
                var baseEncoding = (0, _encodings.getEncoding)(baseEncodingName);
                if (baseEncoding && (glyphName = baseEncoding[charcode])) {
                  toUnicode[charcode] = String.fromCharCode(glyphsUnicodeMap[glyphName]);
                  continue;
                }
              }
              toUnicode[charcode] = String.fromCharCode(code);
            }
            continue;
          }
          toUnicode[charcode] = String.fromCharCode(glyphsUnicodeMap[glyphName]);
        }
        return Promise.resolve(new _fonts.ToUnicodeMap(toUnicode));
      }
      if (properties.composite && (properties.cMap.builtInCMap && !(properties.cMap instanceof _cmap.IdentityCMap) || properties.cidSystemInfo.registry === 'Adobe' && (properties.cidSystemInfo.ordering === 'GB1' || properties.cidSystemInfo.ordering === 'CNS1' || properties.cidSystemInfo.ordering === 'Japan1' || properties.cidSystemInfo.ordering === 'Korea1'))) {
        var registry = properties.cidSystemInfo.registry;
        var ordering = properties.cidSystemInfo.ordering;
        var ucs2CMapName = _primitives.Name.get(registry + '-' + ordering + '-UCS2');
        return _cmap.CMapFactory.create({
          encoding: ucs2CMapName,
          fetchBuiltInCMap: this.fetchBuiltInCMap,
          useCMap: null
        }).then(function (ucs2CMap) {
          var cMap = properties.cMap;
          toUnicode = [];
          cMap.forEach(function (charcode, cid) {
            if (cid > 0xffff) {
              throw new _util.FormatError('Max size of CID is 65,535');
            }
            var ucs2 = ucs2CMap.lookup(cid);
            if (ucs2) {
              toUnicode[charcode] = String.fromCharCode((ucs2.charCodeAt(0) << 8) + ucs2.charCodeAt(1));
            }
          });
          return new _fonts.ToUnicodeMap(toUnicode);
        });
      }
      return Promise.resolve(new _fonts.IdentityToUnicodeMap(properties.firstChar, properties.lastChar));
    },
    readToUnicode: function PartialEvaluator_readToUnicode(toUnicode) {
      var cmapObj = toUnicode;
      if ((0, _primitives.isName)(cmapObj)) {
        return _cmap.CMapFactory.create({
          encoding: cmapObj,
          fetchBuiltInCMap: this.fetchBuiltInCMap,
          useCMap: null
        }).then(function (cmap) {
          if (cmap instanceof _cmap.IdentityCMap) {
            return new _fonts.IdentityToUnicodeMap(0, 0xFFFF);
          }
          return new _fonts.ToUnicodeMap(cmap.getMap());
        });
      } else if ((0, _primitives.isStream)(cmapObj)) {
        return _cmap.CMapFactory.create({
          encoding: cmapObj,
          fetchBuiltInCMap: this.fetchBuiltInCMap,
          useCMap: null
        }).then(function (cmap) {
          if (cmap instanceof _cmap.IdentityCMap) {
            return new _fonts.IdentityToUnicodeMap(0, 0xFFFF);
          }
          var map = new Array(cmap.length);
          cmap.forEach(function (charCode, token) {
            var str = [];
            for (var k = 0; k < token.length; k += 2) {
              var w1 = token.charCodeAt(k) << 8 | token.charCodeAt(k + 1);
              if ((w1 & 0xF800) !== 0xD800) {
                str.push(w1);
                continue;
              }
              k += 2;
              var w2 = token.charCodeAt(k) << 8 | token.charCodeAt(k + 1);
              str.push(((w1 & 0x3ff) << 10) + (w2 & 0x3ff) + 0x10000);
            }
            map[charCode] = String.fromCharCode.apply(String, str);
          });
          return new _fonts.ToUnicodeMap(map);
        });
      }
      return Promise.resolve(null);
    },
    readCidToGidMap: function PartialEvaluator_readCidToGidMap(cidToGidStream) {
      var glyphsData = cidToGidStream.getBytes();
      var result = [];
      for (var j = 0, jj = glyphsData.length; j < jj; j++) {
        var glyphID = glyphsData[j++] << 8 | glyphsData[j];
        if (glyphID === 0) {
          continue;
        }
        var code = j >> 1;
        result[code] = glyphID;
      }
      return result;
    },
    extractWidths: function PartialEvaluator_extractWidths(dict, descriptor, properties) {
      var xref = this.xref;
      var glyphsWidths = [];
      var defaultWidth = 0;
      var glyphsVMetrics = [];
      var defaultVMetrics;
      var i, ii, j, jj, start, code, widths;
      if (properties.composite) {
        defaultWidth = dict.get('DW') || 1000;
        widths = dict.get('W');
        if (widths) {
          for (i = 0, ii = widths.length; i < ii; i++) {
            start = xref.fetchIfRef(widths[i++]);
            code = xref.fetchIfRef(widths[i]);
            if ((0, _util.isArray)(code)) {
              for (j = 0, jj = code.length; j < jj; j++) {
                glyphsWidths[start++] = xref.fetchIfRef(code[j]);
              }
            } else {
              var width = xref.fetchIfRef(widths[++i]);
              for (j = start; j <= code; j++) {
                glyphsWidths[j] = width;
              }
            }
          }
        }
        if (properties.vertical) {
          var vmetrics = dict.getArray('DW2') || [880, -1000];
          defaultVMetrics = [vmetrics[1], defaultWidth * 0.5, vmetrics[0]];
          vmetrics = dict.get('W2');
          if (vmetrics) {
            for (i = 0, ii = vmetrics.length; i < ii; i++) {
              start = xref.fetchIfRef(vmetrics[i++]);
              code = xref.fetchIfRef(vmetrics[i]);
              if ((0, _util.isArray)(code)) {
                for (j = 0, jj = code.length; j < jj; j++) {
                  glyphsVMetrics[start++] = [xref.fetchIfRef(code[j++]), xref.fetchIfRef(code[j++]), xref.fetchIfRef(code[j])];
                }
              } else {
                var vmetric = [xref.fetchIfRef(vmetrics[++i]), xref.fetchIfRef(vmetrics[++i]), xref.fetchIfRef(vmetrics[++i])];
                for (j = start; j <= code; j++) {
                  glyphsVMetrics[j] = vmetric;
                }
              }
            }
          }
        }
      } else {
        var firstChar = properties.firstChar;
        widths = dict.get('Widths');
        if (widths) {
          j = firstChar;
          for (i = 0, ii = widths.length; i < ii; i++) {
            glyphsWidths[j++] = xref.fetchIfRef(widths[i]);
          }
          defaultWidth = parseFloat(descriptor.get('MissingWidth')) || 0;
        } else {
          var baseFontName = dict.get('BaseFont');
          if ((0, _primitives.isName)(baseFontName)) {
            var metrics = this.getBaseFontMetrics(baseFontName.name);
            glyphsWidths = this.buildCharCodeToWidth(metrics.widths, properties);
            defaultWidth = metrics.defaultWidth;
          }
        }
      }
      var isMonospace = true;
      var firstWidth = defaultWidth;
      for (var glyph in glyphsWidths) {
        var glyphWidth = glyphsWidths[glyph];
        if (!glyphWidth) {
          continue;
        }
        if (!firstWidth) {
          firstWidth = glyphWidth;
          continue;
        }
        if (firstWidth !== glyphWidth) {
          isMonospace = false;
          break;
        }
      }
      if (isMonospace) {
        properties.flags |= _fonts.FontFlags.FixedPitch;
      }
      properties.defaultWidth = defaultWidth;
      properties.widths = glyphsWidths;
      properties.defaultVMetrics = defaultVMetrics;
      properties.vmetrics = glyphsVMetrics;
    },
    isSerifFont: function PartialEvaluator_isSerifFont(baseFontName) {
      var fontNameWoStyle = baseFontName.split('-')[0];
      return fontNameWoStyle in (0, _standard_fonts.getSerifFonts)() || fontNameWoStyle.search(/serif/gi) !== -1;
    },
    getBaseFontMetrics: function PartialEvaluator_getBaseFontMetrics(name) {
      var defaultWidth = 0;
      var widths = [];
      var monospace = false;
      var stdFontMap = (0, _standard_fonts.getStdFontMap)();
      var lookupName = stdFontMap[name] || name;
      var Metrics = (0, _metrics.getMetrics)();
      if (!(lookupName in Metrics)) {
        if (this.isSerifFont(name)) {
          lookupName = 'Times-Roman';
        } else {
          lookupName = 'Helvetica';
        }
      }
      var glyphWidths = Metrics[lookupName];
      if ((0, _util.isNum)(glyphWidths)) {
        defaultWidth = glyphWidths;
        monospace = true;
      } else {
        widths = glyphWidths();
      }
      return {
        defaultWidth: defaultWidth,
        monospace: monospace,
        widths: widths
      };
    },
    buildCharCodeToWidth: function PartialEvaluator_bulildCharCodeToWidth(widthsByGlyphName, properties) {
      var widths = Object.create(null);
      var differences = properties.differences;
      var encoding = properties.defaultEncoding;
      for (var charCode = 0; charCode < 256; charCode++) {
        if (charCode in differences && widthsByGlyphName[differences[charCode]]) {
          widths[charCode] = widthsByGlyphName[differences[charCode]];
          continue;
        }
        if (charCode in encoding && widthsByGlyphName[encoding[charCode]]) {
          widths[charCode] = widthsByGlyphName[encoding[charCode]];
          continue;
        }
      }
      return widths;
    },
    preEvaluateFont: function PartialEvaluator_preEvaluateFont(dict) {
      var baseDict = dict;
      var type = dict.get('Subtype');
      if (!(0, _primitives.isName)(type)) {
        throw new _util.FormatError('invalid font Subtype');
      }
      var composite = false;
      var uint8array;
      if (type.name === 'Type0') {
        var df = dict.get('DescendantFonts');
        if (!df) {
          throw new _util.FormatError('Descendant fonts are not specified');
        }
        dict = (0, _util.isArray)(df) ? this.xref.fetchIfRef(df[0]) : df;
        type = dict.get('Subtype');
        if (!(0, _primitives.isName)(type)) {
          throw new _util.FormatError('invalid font Subtype');
        }
        composite = true;
      }
      var descriptor = dict.get('FontDescriptor');
      if (descriptor) {
        var hash = new _murmurhash.MurmurHash3_64();
        var encoding = baseDict.getRaw('Encoding');
        if ((0, _primitives.isName)(encoding)) {
          hash.update(encoding.name);
        } else if ((0, _primitives.isRef)(encoding)) {
          hash.update(encoding.toString());
        } else if ((0, _primitives.isDict)(encoding)) {
          var keys = encoding.getKeys();
          for (var i = 0, ii = keys.length; i < ii; i++) {
            var entry = encoding.getRaw(keys[i]);
            if ((0, _primitives.isName)(entry)) {
              hash.update(entry.name);
            } else if ((0, _primitives.isRef)(entry)) {
              hash.update(entry.toString());
            } else if ((0, _util.isArray)(entry)) {
              var diffLength = entry.length,
                  diffBuf = new Array(diffLength);
              for (var j = 0; j < diffLength; j++) {
                var diffEntry = entry[j];
                if ((0, _primitives.isName)(diffEntry)) {
                  diffBuf[j] = diffEntry.name;
                } else if ((0, _util.isNum)(diffEntry) || (0, _primitives.isRef)(diffEntry)) {
                  diffBuf[j] = diffEntry.toString();
                }
              }
              hash.update(diffBuf.join());
            }
          }
        }
        var toUnicode = dict.get('ToUnicode') || baseDict.get('ToUnicode');
        if ((0, _primitives.isStream)(toUnicode)) {
          var stream = toUnicode.str || toUnicode;
          uint8array = stream.buffer ? new Uint8Array(stream.buffer.buffer, 0, stream.bufferLength) : new Uint8Array(stream.bytes.buffer, stream.start, stream.end - stream.start);
          hash.update(uint8array);
        } else if ((0, _primitives.isName)(toUnicode)) {
          hash.update(toUnicode.name);
        }
        var widths = dict.get('Widths') || baseDict.get('Widths');
        if (widths) {
          uint8array = new Uint8Array(new Uint32Array(widths).buffer);
          hash.update(uint8array);
        }
      }
      return {
        descriptor: descriptor,
        dict: dict,
        baseDict: baseDict,
        composite: composite,
        type: type.name,
        hash: hash ? hash.hexdigest() : ''
      };
    },
    translateFont: function PartialEvaluator_translateFont(preEvaluatedFont) {
      var _this11 = this;

      var baseDict = preEvaluatedFont.baseDict;
      var dict = preEvaluatedFont.dict;
      var composite = preEvaluatedFont.composite;
      var descriptor = preEvaluatedFont.descriptor;
      var type = preEvaluatedFont.type;
      var maxCharIndex = composite ? 0xFFFF : 0xFF;
      var properties;
      if (!descriptor) {
        if (type === 'Type3') {
          descriptor = new _primitives.Dict(null);
          descriptor.set('FontName', _primitives.Name.get(type));
          descriptor.set('FontBBox', dict.getArray('FontBBox'));
        } else {
          var baseFontName = dict.get('BaseFont');
          if (!(0, _primitives.isName)(baseFontName)) {
            throw new _util.FormatError('Base font is not specified');
          }
          baseFontName = baseFontName.name.replace(/[,_]/g, '-');
          var metrics = this.getBaseFontMetrics(baseFontName);
          var fontNameWoStyle = baseFontName.split('-')[0];
          var flags = (this.isSerifFont(fontNameWoStyle) ? _fonts.FontFlags.Serif : 0) | (metrics.monospace ? _fonts.FontFlags.FixedPitch : 0) | ((0, _standard_fonts.getSymbolsFonts)()[fontNameWoStyle] ? _fonts.FontFlags.Symbolic : _fonts.FontFlags.Nonsymbolic);
          properties = {
            type: type,
            name: baseFontName,
            widths: metrics.widths,
            defaultWidth: metrics.defaultWidth,
            flags: flags,
            firstChar: 0,
            lastChar: maxCharIndex
          };
          return this.extractDataStructures(dict, dict, properties).then(function (properties) {
            properties.widths = _this11.buildCharCodeToWidth(metrics.widths, properties);
            return new _fonts.Font(baseFontName, null, properties);
          });
        }
      }
      var firstChar = dict.get('FirstChar') || 0;
      var lastChar = dict.get('LastChar') || maxCharIndex;
      var fontName = descriptor.get('FontName');
      var baseFont = dict.get('BaseFont');
      if ((0, _util.isString)(fontName)) {
        fontName = _primitives.Name.get(fontName);
      }
      if ((0, _util.isString)(baseFont)) {
        baseFont = _primitives.Name.get(baseFont);
      }
      if (type !== 'Type3') {
        var fontNameStr = fontName && fontName.name;
        var baseFontStr = baseFont && baseFont.name;
        if (fontNameStr !== baseFontStr) {
          (0, _util.info)('The FontDescriptor\'s FontName is "' + fontNameStr + '" but should be the same as the Font\'s BaseFont "' + baseFontStr + '"');
          if (fontNameStr && baseFontStr && baseFontStr.indexOf(fontNameStr) === 0) {
            fontName = baseFont;
          }
        }
      }
      fontName = fontName || baseFont;
      if (!(0, _primitives.isName)(fontName)) {
        throw new _util.FormatError('invalid font name');
      }
      var fontFile = descriptor.get('FontFile', 'FontFile2', 'FontFile3');
      if (fontFile) {
        if (fontFile.dict) {
          var subtype = fontFile.dict.get('Subtype');
          if (subtype) {
            subtype = subtype.name;
          }
          var length1 = fontFile.dict.get('Length1');
          var length2 = fontFile.dict.get('Length2');
          var length3 = fontFile.dict.get('Length3');
        }
      }
      properties = {
        type: type,
        name: fontName.name,
        subtype: subtype,
        file: fontFile,
        length1: length1,
        length2: length2,
        length3: length3,
        loadedName: baseDict.loadedName,
        composite: composite,
        wideChars: composite,
        fixedPitch: false,
        fontMatrix: dict.getArray('FontMatrix') || _util.FONT_IDENTITY_MATRIX,
        firstChar: firstChar || 0,
        lastChar: lastChar || maxCharIndex,
        bbox: descriptor.getArray('FontBBox'),
        ascent: descriptor.get('Ascent'),
        descent: descriptor.get('Descent'),
        xHeight: descriptor.get('XHeight'),
        capHeight: descriptor.get('CapHeight'),
        flags: descriptor.get('Flags'),
        italicAngle: descriptor.get('ItalicAngle'),
        isType3Font: false
      };
      var cMapPromise;
      if (composite) {
        var cidEncoding = baseDict.get('Encoding');
        if ((0, _primitives.isName)(cidEncoding)) {
          properties.cidEncoding = cidEncoding.name;
        }
        cMapPromise = _cmap.CMapFactory.create({
          encoding: cidEncoding,
          fetchBuiltInCMap: this.fetchBuiltInCMap,
          useCMap: null
        }).then(function (cMap) {
          properties.cMap = cMap;
          properties.vertical = properties.cMap.vertical;
        });
      } else {
        cMapPromise = Promise.resolve(undefined);
      }
      return cMapPromise.then(function () {
        return _this11.extractDataStructures(dict, baseDict, properties);
      }).then(function (properties) {
        _this11.extractWidths(dict, descriptor, properties);
        if (type === 'Type3') {
          properties.isType3Font = true;
        }
        return new _fonts.Font(fontName.name, fontFile, properties);
      });
    }
  };
  return PartialEvaluator;
}();
var TranslatedFont = function TranslatedFontClosure() {
  function TranslatedFont(loadedName, font, dict) {
    this.loadedName = loadedName;
    this.font = font;
    this.dict = dict;
    this.type3Loaded = null;
    this.sent = false;
  }
  TranslatedFont.prototype = {
    send: function send(handler) {
      if (this.sent) {
        return;
      }
      var fontData = this.font.exportData();
      handler.send('commonobj', [this.loadedName, 'Font', fontData]);
      this.sent = true;
    },
    loadType3Data: function loadType3Data(evaluator, resources, parentOperatorList, task) {
      if (!this.font.isType3Font) {
        throw new Error('Must be a Type3 font.');
      }
      if (this.type3Loaded) {
        return this.type3Loaded;
      }
      var type3Options = Object.create(evaluator.options);
      type3Options.ignoreErrors = false;
      var type3Evaluator = evaluator.clone(type3Options);
      var translatedFont = this.font;
      var loadCharProcsPromise = Promise.resolve();
      var charProcs = this.dict.get('CharProcs');
      var fontResources = this.dict.get('Resources') || resources;
      var charProcKeys = charProcs.getKeys();
      var charProcOperatorList = Object.create(null);

      var _loop2 = function _loop2() {
        var key = charProcKeys[i];
        loadCharProcsPromise = loadCharProcsPromise.then(function () {
          var glyphStream = charProcs.get(key);
          var operatorList = new OperatorList();
          return type3Evaluator.getOperatorList({
            stream: glyphStream,
            task: task,
            resources: fontResources,
            operatorList: operatorList
          }).then(function () {
            charProcOperatorList[key] = operatorList.getIR();
            parentOperatorList.addDependencies(operatorList.dependencies);
          }).catch(function (reason) {
            (0, _util.warn)('Type3 font resource "' + key + '" is not available.');
            var operatorList = new OperatorList();
            charProcOperatorList[key] = operatorList.getIR();
          });
        });
      };

      for (var i = 0, n = charProcKeys.length; i < n; ++i) {
        _loop2();
      }
      this.type3Loaded = loadCharProcsPromise.then(function () {
        translatedFont.charProcOperatorList = charProcOperatorList;
      });
      return this.type3Loaded;
    }
  };
  return TranslatedFont;
}();
var OperatorList = function OperatorListClosure() {
  var CHUNK_SIZE = 1000;
  var CHUNK_SIZE_ABOUT = CHUNK_SIZE - 5;
  function getTransfers(queue) {
    var transfers = [];
    var fnArray = queue.fnArray,
        argsArray = queue.argsArray;
    for (var i = 0, ii = queue.length; i < ii; i++) {
      switch (fnArray[i]) {
        case _util.OPS.paintInlineImageXObject:
        case _util.OPS.paintInlineImageXObjectGroup:
        case _util.OPS.paintImageMaskXObject:
          var arg = argsArray[i][0];
          if (!arg.cached) {
            transfers.push(arg.data.buffer);
          }
          break;
      }
    }
    return transfers;
  }
  function OperatorList(intent, messageHandler, pageIndex) {
    this.messageHandler = messageHandler;
    this.fnArray = [];
    this.argsArray = [];
    this.dependencies = Object.create(null);
    this._totalLength = 0;
    this.pageIndex = pageIndex;
    this.intent = intent;
  }
  OperatorList.prototype = {
    get length() {
      return this.argsArray.length;
    },
    get totalLength() {
      return this._totalLength + this.length;
    },
    addOp: function addOp(fn, args) {
      this.fnArray.push(fn);
      this.argsArray.push(args);
      if (this.messageHandler) {
        if (this.fnArray.length >= CHUNK_SIZE) {
          this.flush();
        } else if (this.fnArray.length >= CHUNK_SIZE_ABOUT && (fn === _util.OPS.restore || fn === _util.OPS.endText)) {
          this.flush();
        }
      }
    },
    addDependency: function addDependency(dependency) {
      if (dependency in this.dependencies) {
        return;
      }
      this.dependencies[dependency] = true;
      this.addOp(_util.OPS.dependency, [dependency]);
    },
    addDependencies: function addDependencies(dependencies) {
      for (var key in dependencies) {
        this.addDependency(key);
      }
    },
    addOpList: function addOpList(opList) {
      _util.Util.extendObj(this.dependencies, opList.dependencies);
      for (var i = 0, ii = opList.length; i < ii; i++) {
        this.addOp(opList.fnArray[i], opList.argsArray[i]);
      }
    },
    getIR: function getIR() {
      return {
        fnArray: this.fnArray,
        argsArray: this.argsArray,
        length: this.length
      };
    },
    flush: function flush(lastChunk) {
      if (this.intent !== 'oplist') {
        new QueueOptimizer().optimize(this);
      }
      var transfers = getTransfers(this);
      var length = this.length;
      this._totalLength += length;
      this.messageHandler.send('RenderPageChunk', {
        operatorList: {
          fnArray: this.fnArray,
          argsArray: this.argsArray,
          lastChunk: lastChunk,
          length: length
        },
        pageIndex: this.pageIndex,
        intent: this.intent
      }, transfers);
      this.dependencies = Object.create(null);
      this.fnArray.length = 0;
      this.argsArray.length = 0;
    }
  };
  return OperatorList;
}();
var StateManager = function StateManagerClosure() {
  function StateManager(initialState) {
    this.state = initialState;
    this.stateStack = [];
  }
  StateManager.prototype = {
    save: function save() {
      var old = this.state;
      this.stateStack.push(this.state);
      this.state = old.clone();
    },
    restore: function restore() {
      var prev = this.stateStack.pop();
      if (prev) {
        this.state = prev;
      }
    },
    transform: function transform(args) {
      this.state.ctm = _util.Util.transform(this.state.ctm, args);
    }
  };
  return StateManager;
}();
var TextState = function TextStateClosure() {
  function TextState() {
    this.ctm = new Float32Array(_util.IDENTITY_MATRIX);
    this.fontName = null;
    this.fontSize = 0;
    this.font = null;
    this.fontMatrix = _util.FONT_IDENTITY_MATRIX;
    this.textMatrix = _util.IDENTITY_MATRIX.slice();
    this.textLineMatrix = _util.IDENTITY_MATRIX.slice();
    this.charSpacing = 0;
    this.wordSpacing = 0;
    this.leading = 0;
    this.textHScale = 1;
    this.textRise = 0;
  }
  TextState.prototype = {
    setTextMatrix: function TextState_setTextMatrix(a, b, c, d, e, f) {
      var m = this.textMatrix;
      m[0] = a;
      m[1] = b;
      m[2] = c;
      m[3] = d;
      m[4] = e;
      m[5] = f;
    },
    setTextLineMatrix: function TextState_setTextMatrix(a, b, c, d, e, f) {
      var m = this.textLineMatrix;
      m[0] = a;
      m[1] = b;
      m[2] = c;
      m[3] = d;
      m[4] = e;
      m[5] = f;
    },
    translateTextMatrix: function TextState_translateTextMatrix(x, y) {
      var m = this.textMatrix;
      m[4] = m[0] * x + m[2] * y + m[4];
      m[5] = m[1] * x + m[3] * y + m[5];
    },
    translateTextLineMatrix: function TextState_translateTextMatrix(x, y) {
      var m = this.textLineMatrix;
      m[4] = m[0] * x + m[2] * y + m[4];
      m[5] = m[1] * x + m[3] * y + m[5];
    },
    calcTextLineMatrixAdvance: function TextState_calcTextLineMatrixAdvance(a, b, c, d, e, f) {
      var font = this.font;
      if (!font) {
        return null;
      }
      var m = this.textLineMatrix;
      if (!(a === m[0] && b === m[1] && c === m[2] && d === m[3])) {
        return null;
      }
      var txDiff = e - m[4],
          tyDiff = f - m[5];
      if (font.vertical && txDiff !== 0 || !font.vertical && tyDiff !== 0) {
        return null;
      }
      var tx,
          ty,
          denominator = a * d - b * c;
      if (font.vertical) {
        tx = -tyDiff * c / denominator;
        ty = tyDiff * a / denominator;
      } else {
        tx = txDiff * d / denominator;
        ty = -txDiff * b / denominator;
      }
      return {
        width: tx,
        height: ty,
        value: font.vertical ? ty : tx
      };
    },
    calcRenderMatrix: function TextState_calcRendeMatrix(ctm) {
      var tsm = [this.fontSize * this.textHScale, 0, 0, this.fontSize, 0, this.textRise];
      return _util.Util.transform(ctm, _util.Util.transform(this.textMatrix, tsm));
    },
    carriageReturn: function TextState_carriageReturn() {
      this.translateTextLineMatrix(0, -this.leading);
      this.textMatrix = this.textLineMatrix.slice();
    },
    clone: function TextState_clone() {
      var clone = Object.create(this);
      clone.textMatrix = this.textMatrix.slice();
      clone.textLineMatrix = this.textLineMatrix.slice();
      clone.fontMatrix = this.fontMatrix.slice();
      return clone;
    }
  };
  return TextState;
}();
var EvalState = function EvalStateClosure() {
  function EvalState() {
    this.ctm = new Float32Array(_util.IDENTITY_MATRIX);
    this.font = null;
    this.textRenderingMode = _util.TextRenderingMode.FILL;
    this.fillColorSpace = _colorspace.ColorSpace.singletons.gray;
    this.strokeColorSpace = _colorspace.ColorSpace.singletons.gray;
  }
  EvalState.prototype = {
    clone: function CanvasExtraState_clone() {
      return Object.create(this);
    }
  };
  return EvalState;
}();
var EvaluatorPreprocessor = function EvaluatorPreprocessorClosure() {
  var getOPMap = (0, _util.getLookupTableFactory)(function (t) {
    t['w'] = {
      id: _util.OPS.setLineWidth,
      numArgs: 1,
      variableArgs: false
    };
    t['J'] = {
      id: _util.OPS.setLineCap,
      numArgs: 1,
      variableArgs: false
    };
    t['j'] = {
      id: _util.OPS.setLineJoin,
      numArgs: 1,
      variableArgs: false
    };
    t['M'] = {
      id: _util.OPS.setMiterLimit,
      numArgs: 1,
      variableArgs: false
    };
    t['d'] = {
      id: _util.OPS.setDash,
      numArgs: 2,
      variableArgs: false
    };
    t['ri'] = {
      id: _util.OPS.setRenderingIntent,
      numArgs: 1,
      variableArgs: false
    };
    t['i'] = {
      id: _util.OPS.setFlatness,
      numArgs: 1,
      variableArgs: false
    };
    t['gs'] = {
      id: _util.OPS.setGState,
      numArgs: 1,
      variableArgs: false
    };
    t['q'] = {
      id: _util.OPS.save,
      numArgs: 0,
      variableArgs: false
    };
    t['Q'] = {
      id: _util.OPS.restore,
      numArgs: 0,
      variableArgs: false
    };
    t['cm'] = {
      id: _util.OPS.transform,
      numArgs: 6,
      variableArgs: false
    };
    t['m'] = {
      id: _util.OPS.moveTo,
      numArgs: 2,
      variableArgs: false
    };
    t['l'] = {
      id: _util.OPS.lineTo,
      numArgs: 2,
      variableArgs: false
    };
    t['c'] = {
      id: _util.OPS.curveTo,
      numArgs: 6,
      variableArgs: false
    };
    t['v'] = {
      id: _util.OPS.curveTo2,
      numArgs: 4,
      variableArgs: false
    };
    t['y'] = {
      id: _util.OPS.curveTo3,
      numArgs: 4,
      variableArgs: false
    };
    t['h'] = {
      id: _util.OPS.closePath,
      numArgs: 0,
      variableArgs: false
    };
    t['re'] = {
      id: _util.OPS.rectangle,
      numArgs: 4,
      variableArgs: false
    };
    t['S'] = {
      id: _util.OPS.stroke,
      numArgs: 0,
      variableArgs: false
    };
    t['s'] = {
      id: _util.OPS.closeStroke,
      numArgs: 0,
      variableArgs: false
    };
    t['f'] = {
      id: _util.OPS.fill,
      numArgs: 0,
      variableArgs: false
    };
    t['F'] = {
      id: _util.OPS.fill,
      numArgs: 0,
      variableArgs: false
    };
    t['f*'] = {
      id: _util.OPS.eoFill,
      numArgs: 0,
      variableArgs: false
    };
    t['B'] = {
      id: _util.OPS.fillStroke,
      numArgs: 0,
      variableArgs: false
    };
    t['B*'] = {
      id: _util.OPS.eoFillStroke,
      numArgs: 0,
      variableArgs: false
    };
    t['b'] = {
      id: _util.OPS.closeFillStroke,
      numArgs: 0,
      variableArgs: false
    };
    t['b*'] = {
      id: _util.OPS.closeEOFillStroke,
      numArgs: 0,
      variableArgs: false
    };
    t['n'] = {
      id: _util.OPS.endPath,
      numArgs: 0,
      variableArgs: false
    };
    t['W'] = {
      id: _util.OPS.clip,
      numArgs: 0,
      variableArgs: false
    };
    t['W*'] = {
      id: _util.OPS.eoClip,
      numArgs: 0,
      variableArgs: false
    };
    t['BT'] = {
      id: _util.OPS.beginText,
      numArgs: 0,
      variableArgs: false
    };
    t['ET'] = {
      id: _util.OPS.endText,
      numArgs: 0,
      variableArgs: false
    };
    t['Tc'] = {
      id: _util.OPS.setCharSpacing,
      numArgs: 1,
      variableArgs: false
    };
    t['Tw'] = {
      id: _util.OPS.setWordSpacing,
      numArgs: 1,
      variableArgs: false
    };
    t['Tz'] = {
      id: _util.OPS.setHScale,
      numArgs: 1,
      variableArgs: false
    };
    t['TL'] = {
      id: _util.OPS.setLeading,
      numArgs: 1,
      variableArgs: false
    };
    t['Tf'] = {
      id: _util.OPS.setFont,
      numArgs: 2,
      variableArgs: false
    };
    t['Tr'] = {
      id: _util.OPS.setTextRenderingMode,
      numArgs: 1,
      variableArgs: false
    };
    t['Ts'] = {
      id: _util.OPS.setTextRise,
      numArgs: 1,
      variableArgs: false
    };
    t['Td'] = {
      id: _util.OPS.moveText,
      numArgs: 2,
      variableArgs: false
    };
    t['TD'] = {
      id: _util.OPS.setLeadingMoveText,
      numArgs: 2,
      variableArgs: false
    };
    t['Tm'] = {
      id: _util.OPS.setTextMatrix,
      numArgs: 6,
      variableArgs: false
    };
    t['T*'] = {
      id: _util.OPS.nextLine,
      numArgs: 0,
      variableArgs: false
    };
    t['Tj'] = {
      id: _util.OPS.showText,
      numArgs: 1,
      variableArgs: false
    };
    t['TJ'] = {
      id: _util.OPS.showSpacedText,
      numArgs: 1,
      variableArgs: false
    };
    t['\''] = {
      id: _util.OPS.nextLineShowText,
      numArgs: 1,
      variableArgs: false
    };
    t['"'] = {
      id: _util.OPS.nextLineSetSpacingShowText,
      numArgs: 3,
      variableArgs: false
    };
    t['d0'] = {
      id: _util.OPS.setCharWidth,
      numArgs: 2,
      variableArgs: false
    };
    t['d1'] = {
      id: _util.OPS.setCharWidthAndBounds,
      numArgs: 6,
      variableArgs: false
    };
    t['CS'] = {
      id: _util.OPS.setStrokeColorSpace,
      numArgs: 1,
      variableArgs: false
    };
    t['cs'] = {
      id: _util.OPS.setFillColorSpace,
      numArgs: 1,
      variableArgs: false
    };
    t['SC'] = {
      id: _util.OPS.setStrokeColor,
      numArgs: 4,
      variableArgs: true
    };
    t['SCN'] = {
      id: _util.OPS.setStrokeColorN,
      numArgs: 33,
      variableArgs: true
    };
    t['sc'] = {
      id: _util.OPS.setFillColor,
      numArgs: 4,
      variableArgs: true
    };
    t['scn'] = {
      id: _util.OPS.setFillColorN,
      numArgs: 33,
      variableArgs: true
    };
    t['G'] = {
      id: _util.OPS.setStrokeGray,
      numArgs: 1,
      variableArgs: false
    };
    t['g'] = {
      id: _util.OPS.setFillGray,
      numArgs: 1,
      variableArgs: false
    };
    t['RG'] = {
      id: _util.OPS.setStrokeRGBColor,
      numArgs: 3,
      variableArgs: false
    };
    t['rg'] = {
      id: _util.OPS.setFillRGBColor,
      numArgs: 3,
      variableArgs: false
    };
    t['K'] = {
      id: _util.OPS.setStrokeCMYKColor,
      numArgs: 4,
      variableArgs: false
    };
    t['k'] = {
      id: _util.OPS.setFillCMYKColor,
      numArgs: 4,
      variableArgs: false
    };
    t['sh'] = {
      id: _util.OPS.shadingFill,
      numArgs: 1,
      variableArgs: false
    };
    t['BI'] = {
      id: _util.OPS.beginInlineImage,
      numArgs: 0,
      variableArgs: false
    };
    t['ID'] = {
      id: _util.OPS.beginImageData,
      numArgs: 0,
      variableArgs: false
    };
    t['EI'] = {
      id: _util.OPS.endInlineImage,
      numArgs: 1,
      variableArgs: false
    };
    t['Do'] = {
      id: _util.OPS.paintXObject,
      numArgs: 1,
      variableArgs: false
    };
    t['MP'] = {
      id: _util.OPS.markPoint,
      numArgs: 1,
      variableArgs: false
    };
    t['DP'] = {
      id: _util.OPS.markPointProps,
      numArgs: 2,
      variableArgs: false
    };
    t['BMC'] = {
      id: _util.OPS.beginMarkedContent,
      numArgs: 1,
      variableArgs: false
    };
    t['BDC'] = {
      id: _util.OPS.beginMarkedContentProps,
      numArgs: 2,
      variableArgs: false
    };
    t['EMC'] = {
      id: _util.OPS.endMarkedContent,
      numArgs: 0,
      variableArgs: false
    };
    t['BX'] = {
      id: _util.OPS.beginCompat,
      numArgs: 0,
      variableArgs: false
    };
    t['EX'] = {
      id: _util.OPS.endCompat,
      numArgs: 0,
      variableArgs: false
    };
    t['BM'] = null;
    t['BD'] = null;
    t['true'] = null;
    t['fa'] = null;
    t['fal'] = null;
    t['fals'] = null;
    t['false'] = null;
    t['nu'] = null;
    t['nul'] = null;
    t['null'] = null;
  });
  function EvaluatorPreprocessor(stream, xref, stateManager) {
    this.opMap = getOPMap();
    this.parser = new _parser.Parser(new _parser.Lexer(stream, this.opMap), false, xref);
    this.stateManager = stateManager;
    this.nonProcessedArgs = [];
  }
  EvaluatorPreprocessor.prototype = {
    get savedStatesDepth() {
      return this.stateManager.stateStack.length;
    },
    read: function EvaluatorPreprocessor_read(operation) {
      var args = operation.args;
      while (true) {
        var obj = this.parser.getObj();
        if ((0, _primitives.isCmd)(obj)) {
          var cmd = obj.cmd;
          var opSpec = this.opMap[cmd];
          if (!opSpec) {
            (0, _util.warn)('Unknown command "' + cmd + '"');
            continue;
          }
          var fn = opSpec.id;
          var numArgs = opSpec.numArgs;
          var argsLength = args !== null ? args.length : 0;
          if (!opSpec.variableArgs) {
            if (argsLength !== numArgs) {
              var nonProcessedArgs = this.nonProcessedArgs;
              while (argsLength > numArgs) {
                nonProcessedArgs.push(args.shift());
                argsLength--;
              }
              while (argsLength < numArgs && nonProcessedArgs.length !== 0) {
                if (args === null) {
                  args = [];
                }
                args.unshift(nonProcessedArgs.pop());
                argsLength++;
              }
            }
            if (argsLength < numArgs) {
              (0, _util.warn)('Skipping command ' + fn + ': expected ' + numArgs + ' args, but received ' + argsLength + ' args.');
              if (args !== null) {
                args.length = 0;
              }
              continue;
            }
          } else if (argsLength > numArgs) {
            (0, _util.info)('Command ' + fn + ': expected [0,' + numArgs + '] args, but received ' + argsLength + ' args.');
          }
          this.preprocessCommand(fn, args);
          operation.fn = fn;
          operation.args = args;
          return true;
        }
        if ((0, _primitives.isEOF)(obj)) {
          return false;
        }
        if (obj !== null) {
          if (args === null) {
            args = [];
          }
          args.push(obj);
          if (args.length > 33) {
            throw new _util.FormatError('Too many arguments');
          }
        }
      }
    },
    preprocessCommand: function EvaluatorPreprocessor_preprocessCommand(fn, args) {
      switch (fn | 0) {
        case _util.OPS.save:
          this.stateManager.save();
          break;
        case _util.OPS.restore:
          this.stateManager.restore();
          break;
        case _util.OPS.transform:
          this.stateManager.transform(args);
          break;
      }
    }
  };
  return EvaluatorPreprocessor;
}();
var QueueOptimizer = function QueueOptimizerClosure() {
  function addState(parentState, pattern, fn) {
    var state = parentState;
    for (var i = 0, ii = pattern.length - 1; i < ii; i++) {
      var item = pattern[i];
      state = state[item] || (state[item] = []);
    }
    state[pattern[pattern.length - 1]] = fn;
  }
  function handlePaintSolidColorImageMask(iFirstSave, count, fnArray, argsArray) {
    var iFirstPIMXO = iFirstSave + 2;
    for (var i = 0; i < count; i++) {
      var arg = argsArray[iFirstPIMXO + 4 * i];
      var imageMask = arg.length === 1 && arg[0];
      if (imageMask && imageMask.width === 1 && imageMask.height === 1 && (!imageMask.data.length || imageMask.data.length === 1 && imageMask.data[0] === 0)) {
        fnArray[iFirstPIMXO + 4 * i] = _util.OPS.paintSolidColorImageMask;
        continue;
      }
      break;
    }
    return count - i;
  }
  var InitialState = [];
  addState(InitialState, [_util.OPS.save, _util.OPS.transform, _util.OPS.paintInlineImageXObject, _util.OPS.restore], function foundInlineImageGroup(context) {
    var MIN_IMAGES_IN_INLINE_IMAGES_BLOCK = 10;
    var MAX_IMAGES_IN_INLINE_IMAGES_BLOCK = 200;
    var MAX_WIDTH = 1000;
    var IMAGE_PADDING = 1;
    var fnArray = context.fnArray,
        argsArray = context.argsArray;
    var curr = context.iCurr;
    var iFirstSave = curr - 3;
    var iFirstTransform = curr - 2;
    var iFirstPIIXO = curr - 1;
    var i = iFirstSave + 4;
    var ii = fnArray.length;
    while (i + 3 < ii) {
      if (fnArray[i] !== _util.OPS.save || fnArray[i + 1] !== _util.OPS.transform || fnArray[i + 2] !== _util.OPS.paintInlineImageXObject || fnArray[i + 3] !== _util.OPS.restore) {
        break;
      }
      i += 4;
    }
    var count = Math.min((i - iFirstSave) / 4, MAX_IMAGES_IN_INLINE_IMAGES_BLOCK);
    if (count < MIN_IMAGES_IN_INLINE_IMAGES_BLOCK) {
      return i;
    }
    var maxX = 0;
    var map = [],
        maxLineHeight = 0;
    var currentX = IMAGE_PADDING,
        currentY = IMAGE_PADDING;
    var q;
    for (q = 0; q < count; q++) {
      var transform = argsArray[iFirstTransform + (q << 2)];
      var img = argsArray[iFirstPIIXO + (q << 2)][0];
      if (currentX + img.width > MAX_WIDTH) {
        maxX = Math.max(maxX, currentX);
        currentY += maxLineHeight + 2 * IMAGE_PADDING;
        currentX = 0;
        maxLineHeight = 0;
      }
      map.push({
        transform: transform,
        x: currentX,
        y: currentY,
        w: img.width,
        h: img.height
      });
      currentX += img.width + 2 * IMAGE_PADDING;
      maxLineHeight = Math.max(maxLineHeight, img.height);
    }
    var imgWidth = Math.max(maxX, currentX) + IMAGE_PADDING;
    var imgHeight = currentY + maxLineHeight + IMAGE_PADDING;
    var imgData = new Uint8Array(imgWidth * imgHeight * 4);
    var imgRowSize = imgWidth << 2;
    for (q = 0; q < count; q++) {
      var data = argsArray[iFirstPIIXO + (q << 2)][0].data;
      var rowSize = map[q].w << 2;
      var dataOffset = 0;
      var offset = map[q].x + map[q].y * imgWidth << 2;
      imgData.set(data.subarray(0, rowSize), offset - imgRowSize);
      for (var k = 0, kk = map[q].h; k < kk; k++) {
        imgData.set(data.subarray(dataOffset, dataOffset + rowSize), offset);
        dataOffset += rowSize;
        offset += imgRowSize;
      }
      imgData.set(data.subarray(dataOffset - rowSize, dataOffset), offset);
      while (offset >= 0) {
        data[offset - 4] = data[offset];
        data[offset - 3] = data[offset + 1];
        data[offset - 2] = data[offset + 2];
        data[offset - 1] = data[offset + 3];
        data[offset + rowSize] = data[offset + rowSize - 4];
        data[offset + rowSize + 1] = data[offset + rowSize - 3];
        data[offset + rowSize + 2] = data[offset + rowSize - 2];
        data[offset + rowSize + 3] = data[offset + rowSize - 1];
        offset -= imgRowSize;
      }
    }
    fnArray.splice(iFirstSave, count * 4, _util.OPS.paintInlineImageXObjectGroup);
    argsArray.splice(iFirstSave, count * 4, [{
      width: imgWidth,
      height: imgHeight,
      kind: _util.ImageKind.RGBA_32BPP,
      data: imgData
    }, map]);
    return iFirstSave + 1;
  });
  addState(InitialState, [_util.OPS.save, _util.OPS.transform, _util.OPS.paintImageMaskXObject, _util.OPS.restore], function foundImageMaskGroup(context) {
    var MIN_IMAGES_IN_MASKS_BLOCK = 10;
    var MAX_IMAGES_IN_MASKS_BLOCK = 100;
    var MAX_SAME_IMAGES_IN_MASKS_BLOCK = 1000;
    var fnArray = context.fnArray,
        argsArray = context.argsArray;
    var curr = context.iCurr;
    var iFirstSave = curr - 3;
    var iFirstTransform = curr - 2;
    var iFirstPIMXO = curr - 1;
    var i = iFirstSave + 4;
    var ii = fnArray.length;
    while (i + 3 < ii) {
      if (fnArray[i] !== _util.OPS.save || fnArray[i + 1] !== _util.OPS.transform || fnArray[i + 2] !== _util.OPS.paintImageMaskXObject || fnArray[i + 3] !== _util.OPS.restore) {
        break;
      }
      i += 4;
    }
    var count = (i - iFirstSave) / 4;
    count = handlePaintSolidColorImageMask(iFirstSave, count, fnArray, argsArray);
    if (count < MIN_IMAGES_IN_MASKS_BLOCK) {
      return i;
    }
    var q;
    var isSameImage = false;
    var iTransform, transformArgs;
    var firstPIMXOArg0 = argsArray[iFirstPIMXO][0];
    if (argsArray[iFirstTransform][1] === 0 && argsArray[iFirstTransform][2] === 0) {
      isSameImage = true;
      var firstTransformArg0 = argsArray[iFirstTransform][0];
      var firstTransformArg3 = argsArray[iFirstTransform][3];
      iTransform = iFirstTransform + 4;
      var iPIMXO = iFirstPIMXO + 4;
      for (q = 1; q < count; q++, iTransform += 4, iPIMXO += 4) {
        transformArgs = argsArray[iTransform];
        if (argsArray[iPIMXO][0] !== firstPIMXOArg0 || transformArgs[0] !== firstTransformArg0 || transformArgs[1] !== 0 || transformArgs[2] !== 0 || transformArgs[3] !== firstTransformArg3) {
          if (q < MIN_IMAGES_IN_MASKS_BLOCK) {
            isSameImage = false;
          } else {
            count = q;
          }
          break;
        }
      }
    }
    if (isSameImage) {
      count = Math.min(count, MAX_SAME_IMAGES_IN_MASKS_BLOCK);
      var positions = new Float32Array(count * 2);
      iTransform = iFirstTransform;
      for (q = 0; q < count; q++, iTransform += 4) {
        transformArgs = argsArray[iTransform];
        positions[q << 1] = transformArgs[4];
        positions[(q << 1) + 1] = transformArgs[5];
      }
      fnArray.splice(iFirstSave, count * 4, _util.OPS.paintImageMaskXObjectRepeat);
      argsArray.splice(iFirstSave, count * 4, [firstPIMXOArg0, firstTransformArg0, firstTransformArg3, positions]);
    } else {
      count = Math.min(count, MAX_IMAGES_IN_MASKS_BLOCK);
      var images = [];
      for (q = 0; q < count; q++) {
        transformArgs = argsArray[iFirstTransform + (q << 2)];
        var maskParams = argsArray[iFirstPIMXO + (q << 2)][0];
        images.push({
          data: maskParams.data,
          width: maskParams.width,
          height: maskParams.height,
          transform: transformArgs
        });
      }
      fnArray.splice(iFirstSave, count * 4, _util.OPS.paintImageMaskXObjectGroup);
      argsArray.splice(iFirstSave, count * 4, [images]);
    }
    return iFirstSave + 1;
  });
  addState(InitialState, [_util.OPS.save, _util.OPS.transform, _util.OPS.paintImageXObject, _util.OPS.restore], function (context) {
    var MIN_IMAGES_IN_BLOCK = 3;
    var MAX_IMAGES_IN_BLOCK = 1000;
    var fnArray = context.fnArray,
        argsArray = context.argsArray;
    var curr = context.iCurr;
    var iFirstSave = curr - 3;
    var iFirstTransform = curr - 2;
    var iFirstPIXO = curr - 1;
    var iFirstRestore = curr;
    if (argsArray[iFirstTransform][1] !== 0 || argsArray[iFirstTransform][2] !== 0) {
      return iFirstRestore + 1;
    }
    var firstPIXOArg0 = argsArray[iFirstPIXO][0];
    var firstTransformArg0 = argsArray[iFirstTransform][0];
    var firstTransformArg3 = argsArray[iFirstTransform][3];
    var i = iFirstSave + 4;
    var ii = fnArray.length;
    while (i + 3 < ii) {
      if (fnArray[i] !== _util.OPS.save || fnArray[i + 1] !== _util.OPS.transform || fnArray[i + 2] !== _util.OPS.paintImageXObject || fnArray[i + 3] !== _util.OPS.restore) {
        break;
      }
      if (argsArray[i + 1][0] !== firstTransformArg0 || argsArray[i + 1][1] !== 0 || argsArray[i + 1][2] !== 0 || argsArray[i + 1][3] !== firstTransformArg3) {
        break;
      }
      if (argsArray[i + 2][0] !== firstPIXOArg0) {
        break;
      }
      i += 4;
    }
    var count = Math.min((i - iFirstSave) / 4, MAX_IMAGES_IN_BLOCK);
    if (count < MIN_IMAGES_IN_BLOCK) {
      return i;
    }
    var positions = new Float32Array(count * 2);
    var iTransform = iFirstTransform;
    for (var q = 0; q < count; q++, iTransform += 4) {
      var transformArgs = argsArray[iTransform];
      positions[q << 1] = transformArgs[4];
      positions[(q << 1) + 1] = transformArgs[5];
    }
    var args = [firstPIXOArg0, firstTransformArg0, firstTransformArg3, positions];
    fnArray.splice(iFirstSave, count * 4, _util.OPS.paintImageXObjectRepeat);
    argsArray.splice(iFirstSave, count * 4, args);
    return iFirstSave + 1;
  });
  addState(InitialState, [_util.OPS.beginText, _util.OPS.setFont, _util.OPS.setTextMatrix, _util.OPS.showText, _util.OPS.endText], function (context) {
    var MIN_CHARS_IN_BLOCK = 3;
    var MAX_CHARS_IN_BLOCK = 1000;
    var fnArray = context.fnArray,
        argsArray = context.argsArray;
    var curr = context.iCurr;
    var iFirstBeginText = curr - 4;
    var iFirstSetFont = curr - 3;
    var iFirstSetTextMatrix = curr - 2;
    var iFirstShowText = curr - 1;
    var iFirstEndText = curr;
    var firstSetFontArg0 = argsArray[iFirstSetFont][0];
    var firstSetFontArg1 = argsArray[iFirstSetFont][1];
    var i = iFirstBeginText + 5;
    var ii = fnArray.length;
    while (i + 4 < ii) {
      if (fnArray[i] !== _util.OPS.beginText || fnArray[i + 1] !== _util.OPS.setFont || fnArray[i + 2] !== _util.OPS.setTextMatrix || fnArray[i + 3] !== _util.OPS.showText || fnArray[i + 4] !== _util.OPS.endText) {
        break;
      }
      if (argsArray[i + 1][0] !== firstSetFontArg0 || argsArray[i + 1][1] !== firstSetFontArg1) {
        break;
      }
      i += 5;
    }
    var count = Math.min((i - iFirstBeginText) / 5, MAX_CHARS_IN_BLOCK);
    if (count < MIN_CHARS_IN_BLOCK) {
      return i;
    }
    var iFirst = iFirstBeginText;
    if (iFirstBeginText >= 4 && fnArray[iFirstBeginText - 4] === fnArray[iFirstSetFont] && fnArray[iFirstBeginText - 3] === fnArray[iFirstSetTextMatrix] && fnArray[iFirstBeginText - 2] === fnArray[iFirstShowText] && fnArray[iFirstBeginText - 1] === fnArray[iFirstEndText] && argsArray[iFirstBeginText - 4][0] === firstSetFontArg0 && argsArray[iFirstBeginText - 4][1] === firstSetFontArg1) {
      count++;
      iFirst -= 5;
    }
    var iEndText = iFirst + 4;
    for (var q = 1; q < count; q++) {
      fnArray.splice(iEndText, 3);
      argsArray.splice(iEndText, 3);
      iEndText += 2;
    }
    return iEndText + 1;
  });
  function QueueOptimizer() {}
  QueueOptimizer.prototype = {
    optimize: function QueueOptimizer_optimize(queue) {
      var fnArray = queue.fnArray,
          argsArray = queue.argsArray;
      var context = {
        iCurr: 0,
        fnArray: fnArray,
        argsArray: argsArray
      };
      var state;
      var i = 0,
          ii = fnArray.length;
      while (i < ii) {
        state = (state || InitialState)[fnArray[i]];
        if (typeof state === 'function') {
          context.iCurr = i;
          i = state(context);
          state = undefined;
          ii = context.fnArray.length;
        } else {
          i++;
        }
      }
    }
  };
  return QueueOptimizer;
}();
exports.OperatorList = OperatorList;
exports.PartialEvaluator = PartialEvaluator;

/***/ }),
/* 14 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JpxImage = undefined;

var _util = __w_pdfjs_require__(0);

var _arithmetic_decoder = __w_pdfjs_require__(9);

var JpxError = function JpxErrorClosure() {
  function JpxError(msg) {
    this.message = 'JPX error: ' + msg;
  }
  JpxError.prototype = new Error();
  JpxError.prototype.name = 'JpxError';
  JpxError.constructor = JpxError;
  return JpxError;
}();
var JpxImage = function JpxImageClosure() {
  var SubbandsGainLog2 = {
    'LL': 0,
    'LH': 1,
    'HL': 1,
    'HH': 2
  };
  function JpxImage() {
    this.failOnCorruptedImage = false;
  }
  JpxImage.prototype = {
    parse: function JpxImage_parse(data) {
      var head = (0, _util.readUint16)(data, 0);
      if (head === 0xFF4F) {
        this.parseCodestream(data, 0, data.length);
        return;
      }
      var position = 0,
          length = data.length;
      while (position < length) {
        var headerSize = 8;
        var lbox = (0, _util.readUint32)(data, position);
        var tbox = (0, _util.readUint32)(data, position + 4);
        position += headerSize;
        if (lbox === 1) {
          lbox = (0, _util.readUint32)(data, position) * 4294967296 + (0, _util.readUint32)(data, position + 4);
          position += 8;
          headerSize += 8;
        }
        if (lbox === 0) {
          lbox = length - position + headerSize;
        }
        if (lbox < headerSize) {
          throw new JpxError('Invalid box field size');
        }
        var dataLength = lbox - headerSize;
        var jumpDataLength = true;
        switch (tbox) {
          case 0x6A703268:
            jumpDataLength = false;
            break;
          case 0x636F6C72:
            var method = data[position];
            if (method === 1) {
              var colorspace = (0, _util.readUint32)(data, position + 3);
              switch (colorspace) {
                case 16:
                case 17:
                case 18:
                  break;
                default:
                  (0, _util.warn)('Unknown colorspace ' + colorspace);
                  break;
              }
            } else if (method === 2) {
              (0, _util.info)('ICC profile not supported');
            }
            break;
          case 0x6A703263:
            this.parseCodestream(data, position, position + dataLength);
            break;
          case 0x6A502020:
            if ((0, _util.readUint32)(data, position) !== 0x0d0a870a) {
              (0, _util.warn)('Invalid JP2 signature');
            }
            break;
          case 0x6A501A1A:
          case 0x66747970:
          case 0x72726571:
          case 0x72657320:
          case 0x69686472:
            break;
          default:
            var headerType = String.fromCharCode(tbox >> 24 & 0xFF, tbox >> 16 & 0xFF, tbox >> 8 & 0xFF, tbox & 0xFF);
            (0, _util.warn)('Unsupported header type ' + tbox + ' (' + headerType + ')');
            break;
        }
        if (jumpDataLength) {
          position += dataLength;
        }
      }
    },
    parseImageProperties: function JpxImage_parseImageProperties(stream) {
      var newByte = stream.getByte();
      while (newByte >= 0) {
        var oldByte = newByte;
        newByte = stream.getByte();
        var code = oldByte << 8 | newByte;
        if (code === 0xFF51) {
          stream.skip(4);
          var Xsiz = stream.getInt32() >>> 0;
          var Ysiz = stream.getInt32() >>> 0;
          var XOsiz = stream.getInt32() >>> 0;
          var YOsiz = stream.getInt32() >>> 0;
          stream.skip(16);
          var Csiz = stream.getUint16();
          this.width = Xsiz - XOsiz;
          this.height = Ysiz - YOsiz;
          this.componentsCount = Csiz;
          this.bitsPerComponent = 8;
          return;
        }
      }
      throw new JpxError('No size marker found in JPX stream');
    },
    parseCodestream: function JpxImage_parseCodestream(data, start, end) {
      var context = {};
      var doNotRecover = false;
      try {
        var position = start;
        while (position + 1 < end) {
          var code = (0, _util.readUint16)(data, position);
          position += 2;
          var length = 0,
              j,
              sqcd,
              spqcds,
              spqcdSize,
              scalarExpounded,
              tile;
          switch (code) {
            case 0xFF4F:
              context.mainHeader = true;
              break;
            case 0xFFD9:
              break;
            case 0xFF51:
              length = (0, _util.readUint16)(data, position);
              var siz = {};
              siz.Xsiz = (0, _util.readUint32)(data, position + 4);
              siz.Ysiz = (0, _util.readUint32)(data, position + 8);
              siz.XOsiz = (0, _util.readUint32)(data, position + 12);
              siz.YOsiz = (0, _util.readUint32)(data, position + 16);
              siz.XTsiz = (0, _util.readUint32)(data, position + 20);
              siz.YTsiz = (0, _util.readUint32)(data, position + 24);
              siz.XTOsiz = (0, _util.readUint32)(data, position + 28);
              siz.YTOsiz = (0, _util.readUint32)(data, position + 32);
              var componentsCount = (0, _util.readUint16)(data, position + 36);
              siz.Csiz = componentsCount;
              var components = [];
              j = position + 38;
              for (var i = 0; i < componentsCount; i++) {
                var component = {
                  precision: (data[j] & 0x7F) + 1,
                  isSigned: !!(data[j] & 0x80),
                  XRsiz: data[j + 1],
                  YRsiz: data[j + 1]
                };
                calculateComponentDimensions(component, siz);
                components.push(component);
              }
              context.SIZ = siz;
              context.components = components;
              calculateTileGrids(context, components);
              context.QCC = [];
              context.COC = [];
              break;
            case 0xFF5C:
              length = (0, _util.readUint16)(data, position);
              var qcd = {};
              j = position + 2;
              sqcd = data[j++];
              switch (sqcd & 0x1F) {
                case 0:
                  spqcdSize = 8;
                  scalarExpounded = true;
                  break;
                case 1:
                  spqcdSize = 16;
                  scalarExpounded = false;
                  break;
                case 2:
                  spqcdSize = 16;
                  scalarExpounded = true;
                  break;
                default:
                  throw new Error('Invalid SQcd value ' + sqcd);
              }
              qcd.noQuantization = spqcdSize === 8;
              qcd.scalarExpounded = scalarExpounded;
              qcd.guardBits = sqcd >> 5;
              spqcds = [];
              while (j < length + position) {
                var spqcd = {};
                if (spqcdSize === 8) {
                  spqcd.epsilon = data[j++] >> 3;
                  spqcd.mu = 0;
                } else {
                  spqcd.epsilon = data[j] >> 3;
                  spqcd.mu = (data[j] & 0x7) << 8 | data[j + 1];
                  j += 2;
                }
                spqcds.push(spqcd);
              }
              qcd.SPqcds = spqcds;
              if (context.mainHeader) {
                context.QCD = qcd;
              } else {
                context.currentTile.QCD = qcd;
                context.currentTile.QCC = [];
              }
              break;
            case 0xFF5D:
              length = (0, _util.readUint16)(data, position);
              var qcc = {};
              j = position + 2;
              var cqcc;
              if (context.SIZ.Csiz < 257) {
                cqcc = data[j++];
              } else {
                cqcc = (0, _util.readUint16)(data, j);
                j += 2;
              }
              sqcd = data[j++];
              switch (sqcd & 0x1F) {
                case 0:
                  spqcdSize = 8;
                  scalarExpounded = true;
                  break;
                case 1:
                  spqcdSize = 16;
                  scalarExpounded = false;
                  break;
                case 2:
                  spqcdSize = 16;
                  scalarExpounded = true;
                  break;
                default:
                  throw new Error('Invalid SQcd value ' + sqcd);
              }
              qcc.noQuantization = spqcdSize === 8;
              qcc.scalarExpounded = scalarExpounded;
              qcc.guardBits = sqcd >> 5;
              spqcds = [];
              while (j < length + position) {
                spqcd = {};
                if (spqcdSize === 8) {
                  spqcd.epsilon = data[j++] >> 3;
                  spqcd.mu = 0;
                } else {
                  spqcd.epsilon = data[j] >> 3;
                  spqcd.mu = (data[j] & 0x7) << 8 | data[j + 1];
                  j += 2;
                }
                spqcds.push(spqcd);
              }
              qcc.SPqcds = spqcds;
              if (context.mainHeader) {
                context.QCC[cqcc] = qcc;
              } else {
                context.currentTile.QCC[cqcc] = qcc;
              }
              break;
            case 0xFF52:
              length = (0, _util.readUint16)(data, position);
              var cod = {};
              j = position + 2;
              var scod = data[j++];
              cod.entropyCoderWithCustomPrecincts = !!(scod & 1);
              cod.sopMarkerUsed = !!(scod & 2);
              cod.ephMarkerUsed = !!(scod & 4);
              cod.progressionOrder = data[j++];
              cod.layersCount = (0, _util.readUint16)(data, j);
              j += 2;
              cod.multipleComponentTransform = data[j++];
              cod.decompositionLevelsCount = data[j++];
              cod.xcb = (data[j++] & 0xF) + 2;
              cod.ycb = (data[j++] & 0xF) + 2;
              var blockStyle = data[j++];
              cod.selectiveArithmeticCodingBypass = !!(blockStyle & 1);
              cod.resetContextProbabilities = !!(blockStyle & 2);
              cod.terminationOnEachCodingPass = !!(blockStyle & 4);
              cod.verticalyStripe = !!(blockStyle & 8);
              cod.predictableTermination = !!(blockStyle & 16);
              cod.segmentationSymbolUsed = !!(blockStyle & 32);
              cod.reversibleTransformation = data[j++];
              if (cod.entropyCoderWithCustomPrecincts) {
                var precinctsSizes = [];
                while (j < length + position) {
                  var precinctsSize = data[j++];
                  precinctsSizes.push({
                    PPx: precinctsSize & 0xF,
                    PPy: precinctsSize >> 4
                  });
                }
                cod.precinctsSizes = precinctsSizes;
              }
              var unsupported = [];
              if (cod.selectiveArithmeticCodingBypass) {
                unsupported.push('selectiveArithmeticCodingBypass');
              }
              if (cod.resetContextProbabilities) {
                unsupported.push('resetContextProbabilities');
              }
              if (cod.terminationOnEachCodingPass) {
                unsupported.push('terminationOnEachCodingPass');
              }
              if (cod.verticalyStripe) {
                unsupported.push('verticalyStripe');
              }
              if (cod.predictableTermination) {
                unsupported.push('predictableTermination');
              }
              if (unsupported.length > 0) {
                doNotRecover = true;
                throw new Error('Unsupported COD options (' + unsupported.join(', ') + ')');
              }
              if (context.mainHeader) {
                context.COD = cod;
              } else {
                context.currentTile.COD = cod;
                context.currentTile.COC = [];
              }
              break;
            case 0xFF90:
              length = (0, _util.readUint16)(data, position);
              tile = {};
              tile.index = (0, _util.readUint16)(data, position + 2);
              tile.length = (0, _util.readUint32)(data, position + 4);
              tile.dataEnd = tile.length + position - 2;
              tile.partIndex = data[position + 8];
              tile.partsCount = data[position + 9];
              context.mainHeader = false;
              if (tile.partIndex === 0) {
                tile.COD = context.COD;
                tile.COC = context.COC.slice(0);
                tile.QCD = context.QCD;
                tile.QCC = context.QCC.slice(0);
              }
              context.currentTile = tile;
              break;
            case 0xFF93:
              tile = context.currentTile;
              if (tile.partIndex === 0) {
                initializeTile(context, tile.index);
                buildPackets(context);
              }
              length = tile.dataEnd - position;
              parseTilePackets(context, data, position, length);
              break;
            case 0xFF55:
            case 0xFF57:
            case 0xFF58:
            case 0xFF64:
              length = (0, _util.readUint16)(data, position);
              break;
            case 0xFF53:
              throw new Error('Codestream code 0xFF53 (COC) is ' + 'not implemented');
            default:
              throw new Error('Unknown codestream code: ' + code.toString(16));
          }
          position += length;
        }
      } catch (e) {
        if (doNotRecover || this.failOnCorruptedImage) {
          throw new JpxError(e.message);
        } else {
          (0, _util.warn)('JPX: Trying to recover from: ' + e.message);
        }
      }
      this.tiles = transformComponents(context);
      this.width = context.SIZ.Xsiz - context.SIZ.XOsiz;
      this.height = context.SIZ.Ysiz - context.SIZ.YOsiz;
      this.componentsCount = context.SIZ.Csiz;
    }
  };
  function calculateComponentDimensions(component, siz) {
    component.x0 = Math.ceil(siz.XOsiz / component.XRsiz);
    component.x1 = Math.ceil(siz.Xsiz / component.XRsiz);
    component.y0 = Math.ceil(siz.YOsiz / component.YRsiz);
    component.y1 = Math.ceil(siz.Ysiz / component.YRsiz);
    component.width = component.x1 - component.x0;
    component.height = component.y1 - component.y0;
  }
  function calculateTileGrids(context, components) {
    var siz = context.SIZ;
    var tile,
        tiles = [];
    var numXtiles = Math.ceil((siz.Xsiz - siz.XTOsiz) / siz.XTsiz);
    var numYtiles = Math.ceil((siz.Ysiz - siz.YTOsiz) / siz.YTsiz);
    for (var q = 0; q < numYtiles; q++) {
      for (var p = 0; p < numXtiles; p++) {
        tile = {};
        tile.tx0 = Math.max(siz.XTOsiz + p * siz.XTsiz, siz.XOsiz);
        tile.ty0 = Math.max(siz.YTOsiz + q * siz.YTsiz, siz.YOsiz);
        tile.tx1 = Math.min(siz.XTOsiz + (p + 1) * siz.XTsiz, siz.Xsiz);
        tile.ty1 = Math.min(siz.YTOsiz + (q + 1) * siz.YTsiz, siz.Ysiz);
        tile.width = tile.tx1 - tile.tx0;
        tile.height = tile.ty1 - tile.ty0;
        tile.components = [];
        tiles.push(tile);
      }
    }
    context.tiles = tiles;
    var componentsCount = siz.Csiz;
    for (var i = 0, ii = componentsCount; i < ii; i++) {
      var component = components[i];
      for (var j = 0, jj = tiles.length; j < jj; j++) {
        var tileComponent = {};
        tile = tiles[j];
        tileComponent.tcx0 = Math.ceil(tile.tx0 / component.XRsiz);
        tileComponent.tcy0 = Math.ceil(tile.ty0 / component.YRsiz);
        tileComponent.tcx1 = Math.ceil(tile.tx1 / component.XRsiz);
        tileComponent.tcy1 = Math.ceil(tile.ty1 / component.YRsiz);
        tileComponent.width = tileComponent.tcx1 - tileComponent.tcx0;
        tileComponent.height = tileComponent.tcy1 - tileComponent.tcy0;
        tile.components[i] = tileComponent;
      }
    }
  }
  function getBlocksDimensions(context, component, r) {
    var codOrCoc = component.codingStyleParameters;
    var result = {};
    if (!codOrCoc.entropyCoderWithCustomPrecincts) {
      result.PPx = 15;
      result.PPy = 15;
    } else {
      result.PPx = codOrCoc.precinctsSizes[r].PPx;
      result.PPy = codOrCoc.precinctsSizes[r].PPy;
    }
    result.xcb_ = r > 0 ? Math.min(codOrCoc.xcb, result.PPx - 1) : Math.min(codOrCoc.xcb, result.PPx);
    result.ycb_ = r > 0 ? Math.min(codOrCoc.ycb, result.PPy - 1) : Math.min(codOrCoc.ycb, result.PPy);
    return result;
  }
  function buildPrecincts(context, resolution, dimensions) {
    var precinctWidth = 1 << dimensions.PPx;
    var precinctHeight = 1 << dimensions.PPy;
    var isZeroRes = resolution.resLevel === 0;
    var precinctWidthInSubband = 1 << dimensions.PPx + (isZeroRes ? 0 : -1);
    var precinctHeightInSubband = 1 << dimensions.PPy + (isZeroRes ? 0 : -1);
    var numprecinctswide = resolution.trx1 > resolution.trx0 ? Math.ceil(resolution.trx1 / precinctWidth) - Math.floor(resolution.trx0 / precinctWidth) : 0;
    var numprecinctshigh = resolution.try1 > resolution.try0 ? Math.ceil(resolution.try1 / precinctHeight) - Math.floor(resolution.try0 / precinctHeight) : 0;
    var numprecincts = numprecinctswide * numprecinctshigh;
    resolution.precinctParameters = {
      precinctWidth: precinctWidth,
      precinctHeight: precinctHeight,
      numprecinctswide: numprecinctswide,
      numprecinctshigh: numprecinctshigh,
      numprecincts: numprecincts,
      precinctWidthInSubband: precinctWidthInSubband,
      precinctHeightInSubband: precinctHeightInSubband
    };
  }
  function buildCodeblocks(context, subband, dimensions) {
    var xcb_ = dimensions.xcb_;
    var ycb_ = dimensions.ycb_;
    var codeblockWidth = 1 << xcb_;
    var codeblockHeight = 1 << ycb_;
    var cbx0 = subband.tbx0 >> xcb_;
    var cby0 = subband.tby0 >> ycb_;
    var cbx1 = subband.tbx1 + codeblockWidth - 1 >> xcb_;
    var cby1 = subband.tby1 + codeblockHeight - 1 >> ycb_;
    var precinctParameters = subband.resolution.precinctParameters;
    var codeblocks = [];
    var precincts = [];
    var i, j, codeblock, precinctNumber;
    for (j = cby0; j < cby1; j++) {
      for (i = cbx0; i < cbx1; i++) {
        codeblock = {
          cbx: i,
          cby: j,
          tbx0: codeblockWidth * i,
          tby0: codeblockHeight * j,
          tbx1: codeblockWidth * (i + 1),
          tby1: codeblockHeight * (j + 1)
        };
        codeblock.tbx0_ = Math.max(subband.tbx0, codeblock.tbx0);
        codeblock.tby0_ = Math.max(subband.tby0, codeblock.tby0);
        codeblock.tbx1_ = Math.min(subband.tbx1, codeblock.tbx1);
        codeblock.tby1_ = Math.min(subband.tby1, codeblock.tby1);
        var pi = Math.floor((codeblock.tbx0_ - subband.tbx0) / precinctParameters.precinctWidthInSubband);
        var pj = Math.floor((codeblock.tby0_ - subband.tby0) / precinctParameters.precinctHeightInSubband);
        precinctNumber = pi + pj * precinctParameters.numprecinctswide;
        codeblock.precinctNumber = precinctNumber;
        codeblock.subbandType = subband.type;
        codeblock.Lblock = 3;
        if (codeblock.tbx1_ <= codeblock.tbx0_ || codeblock.tby1_ <= codeblock.tby0_) {
          continue;
        }
        codeblocks.push(codeblock);
        var precinct = precincts[precinctNumber];
        if (precinct !== undefined) {
          if (i < precinct.cbxMin) {
            precinct.cbxMin = i;
          } else if (i > precinct.cbxMax) {
            precinct.cbxMax = i;
          }
          if (j < precinct.cbyMin) {
            precinct.cbxMin = j;
          } else if (j > precinct.cbyMax) {
            precinct.cbyMax = j;
          }
        } else {
          precincts[precinctNumber] = precinct = {
            cbxMin: i,
            cbyMin: j,
            cbxMax: i,
            cbyMax: j
          };
        }
        codeblock.precinct = precinct;
      }
    }
    subband.codeblockParameters = {
      codeblockWidth: xcb_,
      codeblockHeight: ycb_,
      numcodeblockwide: cbx1 - cbx0 + 1,
      numcodeblockhigh: cby1 - cby0 + 1
    };
    subband.codeblocks = codeblocks;
    subband.precincts = precincts;
  }
  function createPacket(resolution, precinctNumber, layerNumber) {
    var precinctCodeblocks = [];
    var subbands = resolution.subbands;
    for (var i = 0, ii = subbands.length; i < ii; i++) {
      var subband = subbands[i];
      var codeblocks = subband.codeblocks;
      for (var j = 0, jj = codeblocks.length; j < jj; j++) {
        var codeblock = codeblocks[j];
        if (codeblock.precinctNumber !== precinctNumber) {
          continue;
        }
        precinctCodeblocks.push(codeblock);
      }
    }
    return {
      layerNumber: layerNumber,
      codeblocks: precinctCodeblocks
    };
  }
  function LayerResolutionComponentPositionIterator(context) {
    var siz = context.SIZ;
    var tileIndex = context.currentTile.index;
    var tile = context.tiles[tileIndex];
    var layersCount = tile.codingStyleDefaultParameters.layersCount;
    var componentsCount = siz.Csiz;
    var maxDecompositionLevelsCount = 0;
    for (var q = 0; q < componentsCount; q++) {
      maxDecompositionLevelsCount = Math.max(maxDecompositionLevelsCount, tile.components[q].codingStyleParameters.decompositionLevelsCount);
    }
    var l = 0,
        r = 0,
        i = 0,
        k = 0;
    this.nextPacket = function JpxImage_nextPacket() {
      for (; l < layersCount; l++) {
        for (; r <= maxDecompositionLevelsCount; r++) {
          for (; i < componentsCount; i++) {
            var component = tile.components[i];
            if (r > component.codingStyleParameters.decompositionLevelsCount) {
              continue;
            }
            var resolution = component.resolutions[r];
            var numprecincts = resolution.precinctParameters.numprecincts;
            for (; k < numprecincts;) {
              var packet = createPacket(resolution, k, l);
              k++;
              return packet;
            }
            k = 0;
          }
          i = 0;
        }
        r = 0;
      }
      throw new JpxError('Out of packets');
    };
  }
  function ResolutionLayerComponentPositionIterator(context) {
    var siz = context.SIZ;
    var tileIndex = context.currentTile.index;
    var tile = context.tiles[tileIndex];
    var layersCount = tile.codingStyleDefaultParameters.layersCount;
    var componentsCount = siz.Csiz;
    var maxDecompositionLevelsCount = 0;
    for (var q = 0; q < componentsCount; q++) {
      maxDecompositionLevelsCount = Math.max(maxDecompositionLevelsCount, tile.components[q].codingStyleParameters.decompositionLevelsCount);
    }
    var r = 0,
        l = 0,
        i = 0,
        k = 0;
    this.nextPacket = function JpxImage_nextPacket() {
      for (; r <= maxDecompositionLevelsCount; r++) {
        for (; l < layersCount; l++) {
          for (; i < componentsCount; i++) {
            var component = tile.components[i];
            if (r > component.codingStyleParameters.decompositionLevelsCount) {
              continue;
            }
            var resolution = component.resolutions[r];
            var numprecincts = resolution.precinctParameters.numprecincts;
            for (; k < numprecincts;) {
              var packet = createPacket(resolution, k, l);
              k++;
              return packet;
            }
            k = 0;
          }
          i = 0;
        }
        l = 0;
      }
      throw new JpxError('Out of packets');
    };
  }
  function ResolutionPositionComponentLayerIterator(context) {
    var siz = context.SIZ;
    var tileIndex = context.currentTile.index;
    var tile = context.tiles[tileIndex];
    var layersCount = tile.codingStyleDefaultParameters.layersCount;
    var componentsCount = siz.Csiz;
    var l, r, c, p;
    var maxDecompositionLevelsCount = 0;
    for (c = 0; c < componentsCount; c++) {
      var component = tile.components[c];
      maxDecompositionLevelsCount = Math.max(maxDecompositionLevelsCount, component.codingStyleParameters.decompositionLevelsCount);
    }
    var maxNumPrecinctsInLevel = new Int32Array(maxDecompositionLevelsCount + 1);
    for (r = 0; r <= maxDecompositionLevelsCount; ++r) {
      var maxNumPrecincts = 0;
      for (c = 0; c < componentsCount; ++c) {
        var resolutions = tile.components[c].resolutions;
        if (r < resolutions.length) {
          maxNumPrecincts = Math.max(maxNumPrecincts, resolutions[r].precinctParameters.numprecincts);
        }
      }
      maxNumPrecinctsInLevel[r] = maxNumPrecincts;
    }
    l = 0;
    r = 0;
    c = 0;
    p = 0;
    this.nextPacket = function JpxImage_nextPacket() {
      for (; r <= maxDecompositionLevelsCount; r++) {
        for (; p < maxNumPrecinctsInLevel[r]; p++) {
          for (; c < componentsCount; c++) {
            var component = tile.components[c];
            if (r > component.codingStyleParameters.decompositionLevelsCount) {
              continue;
            }
            var resolution = component.resolutions[r];
            var numprecincts = resolution.precinctParameters.numprecincts;
            if (p >= numprecincts) {
              continue;
            }
            for (; l < layersCount;) {
              var packet = createPacket(resolution, p, l);
              l++;
              return packet;
            }
            l = 0;
          }
          c = 0;
        }
        p = 0;
      }
      throw new JpxError('Out of packets');
    };
  }
  function PositionComponentResolutionLayerIterator(context) {
    var siz = context.SIZ;
    var tileIndex = context.currentTile.index;
    var tile = context.tiles[tileIndex];
    var layersCount = tile.codingStyleDefaultParameters.layersCount;
    var componentsCount = siz.Csiz;
    var precinctsSizes = getPrecinctSizesInImageScale(tile);
    var precinctsIterationSizes = precinctsSizes;
    var l = 0,
        r = 0,
        c = 0,
        px = 0,
        py = 0;
    this.nextPacket = function JpxImage_nextPacket() {
      for (; py < precinctsIterationSizes.maxNumHigh; py++) {
        for (; px < precinctsIterationSizes.maxNumWide; px++) {
          for (; c < componentsCount; c++) {
            var component = tile.components[c];
            var decompositionLevelsCount = component.codingStyleParameters.decompositionLevelsCount;
            for (; r <= decompositionLevelsCount; r++) {
              var resolution = component.resolutions[r];
              var sizeInImageScale = precinctsSizes.components[c].resolutions[r];
              var k = getPrecinctIndexIfExist(px, py, sizeInImageScale, precinctsIterationSizes, resolution);
              if (k === null) {
                continue;
              }
              for (; l < layersCount;) {
                var packet = createPacket(resolution, k, l);
                l++;
                return packet;
              }
              l = 0;
            }
            r = 0;
          }
          c = 0;
        }
        px = 0;
      }
      throw new JpxError('Out of packets');
    };
  }
  function ComponentPositionResolutionLayerIterator(context) {
    var siz = context.SIZ;
    var tileIndex = context.currentTile.index;
    var tile = context.tiles[tileIndex];
    var layersCount = tile.codingStyleDefaultParameters.layersCount;
    var componentsCount = siz.Csiz;
    var precinctsSizes = getPrecinctSizesInImageScale(tile);
    var l = 0,
        r = 0,
        c = 0,
        px = 0,
        py = 0;
    this.nextPacket = function JpxImage_nextPacket() {
      for (; c < componentsCount; ++c) {
        var component = tile.components[c];
        var precinctsIterationSizes = precinctsSizes.components[c];
        var decompositionLevelsCount = component.codingStyleParameters.decompositionLevelsCount;
        for (; py < precinctsIterationSizes.maxNumHigh; py++) {
          for (; px < precinctsIterationSizes.maxNumWide; px++) {
            for (; r <= decompositionLevelsCount; r++) {
              var resolution = component.resolutions[r];
              var sizeInImageScale = precinctsIterationSizes.resolutions[r];
              var k = getPrecinctIndexIfExist(px, py, sizeInImageScale, precinctsIterationSizes, resolution);
              if (k === null) {
                continue;
              }
              for (; l < layersCount;) {
                var packet = createPacket(resolution, k, l);
                l++;
                return packet;
              }
              l = 0;
            }
            r = 0;
          }
          px = 0;
        }
        py = 0;
      }
      throw new JpxError('Out of packets');
    };
  }
  function getPrecinctIndexIfExist(pxIndex, pyIndex, sizeInImageScale, precinctIterationSizes, resolution) {
    var posX = pxIndex * precinctIterationSizes.minWidth;
    var posY = pyIndex * precinctIterationSizes.minHeight;
    if (posX % sizeInImageScale.width !== 0 || posY % sizeInImageScale.height !== 0) {
      return null;
    }
    var startPrecinctRowIndex = posY / sizeInImageScale.width * resolution.precinctParameters.numprecinctswide;
    return posX / sizeInImageScale.height + startPrecinctRowIndex;
  }
  function getPrecinctSizesInImageScale(tile) {
    var componentsCount = tile.components.length;
    var minWidth = Number.MAX_VALUE;
    var minHeight = Number.MAX_VALUE;
    var maxNumWide = 0;
    var maxNumHigh = 0;
    var sizePerComponent = new Array(componentsCount);
    for (var c = 0; c < componentsCount; c++) {
      var component = tile.components[c];
      var decompositionLevelsCount = component.codingStyleParameters.decompositionLevelsCount;
      var sizePerResolution = new Array(decompositionLevelsCount + 1);
      var minWidthCurrentComponent = Number.MAX_VALUE;
      var minHeightCurrentComponent = Number.MAX_VALUE;
      var maxNumWideCurrentComponent = 0;
      var maxNumHighCurrentComponent = 0;
      var scale = 1;
      for (var r = decompositionLevelsCount; r >= 0; --r) {
        var resolution = component.resolutions[r];
        var widthCurrentResolution = scale * resolution.precinctParameters.precinctWidth;
        var heightCurrentResolution = scale * resolution.precinctParameters.precinctHeight;
        minWidthCurrentComponent = Math.min(minWidthCurrentComponent, widthCurrentResolution);
        minHeightCurrentComponent = Math.min(minHeightCurrentComponent, heightCurrentResolution);
        maxNumWideCurrentComponent = Math.max(maxNumWideCurrentComponent, resolution.precinctParameters.numprecinctswide);
        maxNumHighCurrentComponent = Math.max(maxNumHighCurrentComponent, resolution.precinctParameters.numprecinctshigh);
        sizePerResolution[r] = {
          width: widthCurrentResolution,
          height: heightCurrentResolution
        };
        scale <<= 1;
      }
      minWidth = Math.min(minWidth, minWidthCurrentComponent);
      minHeight = Math.min(minHeight, minHeightCurrentComponent);
      maxNumWide = Math.max(maxNumWide, maxNumWideCurrentComponent);
      maxNumHigh = Math.max(maxNumHigh, maxNumHighCurrentComponent);
      sizePerComponent[c] = {
        resolutions: sizePerResolution,
        minWidth: minWidthCurrentComponent,
        minHeight: minHeightCurrentComponent,
        maxNumWide: maxNumWideCurrentComponent,
        maxNumHigh: maxNumHighCurrentComponent
      };
    }
    return {
      components: sizePerComponent,
      minWidth: minWidth,
      minHeight: minHeight,
      maxNumWide: maxNumWide,
      maxNumHigh: maxNumHigh
    };
  }
  function buildPackets(context) {
    var siz = context.SIZ;
    var tileIndex = context.currentTile.index;
    var tile = context.tiles[tileIndex];
    var componentsCount = siz.Csiz;
    for (var c = 0; c < componentsCount; c++) {
      var component = tile.components[c];
      var decompositionLevelsCount = component.codingStyleParameters.decompositionLevelsCount;
      var resolutions = [];
      var subbands = [];
      for (var r = 0; r <= decompositionLevelsCount; r++) {
        var blocksDimensions = getBlocksDimensions(context, component, r);
        var resolution = {};
        var scale = 1 << decompositionLevelsCount - r;
        resolution.trx0 = Math.ceil(component.tcx0 / scale);
        resolution.try0 = Math.ceil(component.tcy0 / scale);
        resolution.trx1 = Math.ceil(component.tcx1 / scale);
        resolution.try1 = Math.ceil(component.tcy1 / scale);
        resolution.resLevel = r;
        buildPrecincts(context, resolution, blocksDimensions);
        resolutions.push(resolution);
        var subband;
        if (r === 0) {
          subband = {};
          subband.type = 'LL';
          subband.tbx0 = Math.ceil(component.tcx0 / scale);
          subband.tby0 = Math.ceil(component.tcy0 / scale);
          subband.tbx1 = Math.ceil(component.tcx1 / scale);
          subband.tby1 = Math.ceil(component.tcy1 / scale);
          subband.resolution = resolution;
          buildCodeblocks(context, subband, blocksDimensions);
          subbands.push(subband);
          resolution.subbands = [subband];
        } else {
          var bscale = 1 << decompositionLevelsCount - r + 1;
          var resolutionSubbands = [];
          subband = {};
          subband.type = 'HL';
          subband.tbx0 = Math.ceil(component.tcx0 / bscale - 0.5);
          subband.tby0 = Math.ceil(component.tcy0 / bscale);
          subband.tbx1 = Math.ceil(component.tcx1 / bscale - 0.5);
          subband.tby1 = Math.ceil(component.tcy1 / bscale);
          subband.resolution = resolution;
          buildCodeblocks(context, subband, blocksDimensions);
          subbands.push(subband);
          resolutionSubbands.push(subband);
          subband = {};
          subband.type = 'LH';
          subband.tbx0 = Math.ceil(component.tcx0 / bscale);
          subband.tby0 = Math.ceil(component.tcy0 / bscale - 0.5);
          subband.tbx1 = Math.ceil(component.tcx1 / bscale);
          subband.tby1 = Math.ceil(component.tcy1 / bscale - 0.5);
          subband.resolution = resolution;
          buildCodeblocks(context, subband, blocksDimensions);
          subbands.push(subband);
          resolutionSubbands.push(subband);
          subband = {};
          subband.type = 'HH';
          subband.tbx0 = Math.ceil(component.tcx0 / bscale - 0.5);
          subband.tby0 = Math.ceil(component.tcy0 / bscale - 0.5);
          subband.tbx1 = Math.ceil(component.tcx1 / bscale - 0.5);
          subband.tby1 = Math.ceil(component.tcy1 / bscale - 0.5);
          subband.resolution = resolution;
          buildCodeblocks(context, subband, blocksDimensions);
          subbands.push(subband);
          resolutionSubbands.push(subband);
          resolution.subbands = resolutionSubbands;
        }
      }
      component.resolutions = resolutions;
      component.subbands = subbands;
    }
    var progressionOrder = tile.codingStyleDefaultParameters.progressionOrder;
    switch (progressionOrder) {
      case 0:
        tile.packetsIterator = new LayerResolutionComponentPositionIterator(context);
        break;
      case 1:
        tile.packetsIterator = new ResolutionLayerComponentPositionIterator(context);
        break;
      case 2:
        tile.packetsIterator = new ResolutionPositionComponentLayerIterator(context);
        break;
      case 3:
        tile.packetsIterator = new PositionComponentResolutionLayerIterator(context);
        break;
      case 4:
        tile.packetsIterator = new ComponentPositionResolutionLayerIterator(context);
        break;
      default:
        throw new JpxError('Unsupported progression order ' + progressionOrder);
    }
  }
  function parseTilePackets(context, data, offset, dataLength) {
    var position = 0;
    var buffer,
        bufferSize = 0,
        skipNextBit = false;
    function readBits(count) {
      while (bufferSize < count) {
        var b = data[offset + position];
        position++;
        if (skipNextBit) {
          buffer = buffer << 7 | b;
          bufferSize += 7;
          skipNextBit = false;
        } else {
          buffer = buffer << 8 | b;
          bufferSize += 8;
        }
        if (b === 0xFF) {
          skipNextBit = true;
        }
      }
      bufferSize -= count;
      return buffer >>> bufferSize & (1 << count) - 1;
    }
    function skipMarkerIfEqual(value) {
      if (data[offset + position - 1] === 0xFF && data[offset + position] === value) {
        skipBytes(1);
        return true;
      } else if (data[offset + position] === 0xFF && data[offset + position + 1] === value) {
        skipBytes(2);
        return true;
      }
      return false;
    }
    function skipBytes(count) {
      position += count;
    }
    function alignToByte() {
      bufferSize = 0;
      if (skipNextBit) {
        position++;
        skipNextBit = false;
      }
    }
    function readCodingpasses() {
      if (readBits(1) === 0) {
        return 1;
      }
      if (readBits(1) === 0) {
        return 2;
      }
      var value = readBits(2);
      if (value < 3) {
        return value + 3;
      }
      value = readBits(5);
      if (value < 31) {
        return value + 6;
      }
      value = readBits(7);
      return value + 37;
    }
    var tileIndex = context.currentTile.index;
    var tile = context.tiles[tileIndex];
    var sopMarkerUsed = context.COD.sopMarkerUsed;
    var ephMarkerUsed = context.COD.ephMarkerUsed;
    var packetsIterator = tile.packetsIterator;
    while (position < dataLength) {
      alignToByte();
      if (sopMarkerUsed && skipMarkerIfEqual(0x91)) {
        skipBytes(4);
      }
      var packet = packetsIterator.nextPacket();
      if (!readBits(1)) {
        continue;
      }
      var layerNumber = packet.layerNumber;
      var queue = [],
          codeblock;
      for (var i = 0, ii = packet.codeblocks.length; i < ii; i++) {
        codeblock = packet.codeblocks[i];
        var precinct = codeblock.precinct;
        var codeblockColumn = codeblock.cbx - precinct.cbxMin;
        var codeblockRow = codeblock.cby - precinct.cbyMin;
        var codeblockIncluded = false;
        var firstTimeInclusion = false;
        var valueReady;
        if (codeblock['included'] !== undefined) {
          codeblockIncluded = !!readBits(1);
        } else {
          precinct = codeblock.precinct;
          var inclusionTree, zeroBitPlanesTree;
          if (precinct['inclusionTree'] !== undefined) {
            inclusionTree = precinct.inclusionTree;
          } else {
            var width = precinct.cbxMax - precinct.cbxMin + 1;
            var height = precinct.cbyMax - precinct.cbyMin + 1;
            inclusionTree = new InclusionTree(width, height, layerNumber);
            zeroBitPlanesTree = new TagTree(width, height);
            precinct.inclusionTree = inclusionTree;
            precinct.zeroBitPlanesTree = zeroBitPlanesTree;
          }
          if (inclusionTree.reset(codeblockColumn, codeblockRow, layerNumber)) {
            while (true) {
              if (readBits(1)) {
                valueReady = !inclusionTree.nextLevel();
                if (valueReady) {
                  codeblock.included = true;
                  codeblockIncluded = firstTimeInclusion = true;
                  break;
                }
              } else {
                inclusionTree.incrementValue(layerNumber);
                break;
              }
            }
          }
        }
        if (!codeblockIncluded) {
          continue;
        }
        if (firstTimeInclusion) {
          zeroBitPlanesTree = precinct.zeroBitPlanesTree;
          zeroBitPlanesTree.reset(codeblockColumn, codeblockRow);
          while (true) {
            if (readBits(1)) {
              valueReady = !zeroBitPlanesTree.nextLevel();
              if (valueReady) {
                break;
              }
            } else {
              zeroBitPlanesTree.incrementValue();
            }
          }
          codeblock.zeroBitPlanes = zeroBitPlanesTree.value;
        }
        var codingpasses = readCodingpasses();
        while (readBits(1)) {
          codeblock.Lblock++;
        }
        var codingpassesLog2 = (0, _util.log2)(codingpasses);
        var bits = (codingpasses < 1 << codingpassesLog2 ? codingpassesLog2 - 1 : codingpassesLog2) + codeblock.Lblock;
        var codedDataLength = readBits(bits);
        queue.push({
          codeblock: codeblock,
          codingpasses: codingpasses,
          dataLength: codedDataLength
        });
      }
      alignToByte();
      if (ephMarkerUsed) {
        skipMarkerIfEqual(0x92);
      }
      while (queue.length > 0) {
        var packetItem = queue.shift();
        codeblock = packetItem.codeblock;
        if (codeblock['data'] === undefined) {
          codeblock.data = [];
        }
        codeblock.data.push({
          data: data,
          start: offset + position,
          end: offset + position + packetItem.dataLength,
          codingpasses: packetItem.codingpasses
        });
        position += packetItem.dataLength;
      }
    }
    return position;
  }
  function copyCoefficients(coefficients, levelWidth, levelHeight, subband, delta, mb, reversible, segmentationSymbolUsed) {
    var x0 = subband.tbx0;
    var y0 = subband.tby0;
    var width = subband.tbx1 - subband.tbx0;
    var codeblocks = subband.codeblocks;
    var right = subband.type.charAt(0) === 'H' ? 1 : 0;
    var bottom = subband.type.charAt(1) === 'H' ? levelWidth : 0;
    for (var i = 0, ii = codeblocks.length; i < ii; ++i) {
      var codeblock = codeblocks[i];
      var blockWidth = codeblock.tbx1_ - codeblock.tbx0_;
      var blockHeight = codeblock.tby1_ - codeblock.tby0_;
      if (blockWidth === 0 || blockHeight === 0) {
        continue;
      }
      if (codeblock['data'] === undefined) {
        continue;
      }
      var bitModel, currentCodingpassType;
      bitModel = new BitModel(blockWidth, blockHeight, codeblock.subbandType, codeblock.zeroBitPlanes, mb);
      currentCodingpassType = 2;
      var data = codeblock.data,
          totalLength = 0,
          codingpasses = 0;
      var j, jj, dataItem;
      for (j = 0, jj = data.length; j < jj; j++) {
        dataItem = data[j];
        totalLength += dataItem.end - dataItem.start;
        codingpasses += dataItem.codingpasses;
      }
      var encodedData = new Uint8Array(totalLength);
      var position = 0;
      for (j = 0, jj = data.length; j < jj; j++) {
        dataItem = data[j];
        var chunk = dataItem.data.subarray(dataItem.start, dataItem.end);
        encodedData.set(chunk, position);
        position += chunk.length;
      }
      var decoder = new _arithmetic_decoder.ArithmeticDecoder(encodedData, 0, totalLength);
      bitModel.setDecoder(decoder);
      for (j = 0; j < codingpasses; j++) {
        switch (currentCodingpassType) {
          case 0:
            bitModel.runSignificancePropagationPass();
            break;
          case 1:
            bitModel.runMagnitudeRefinementPass();
            break;
          case 2:
            bitModel.runCleanupPass();
            if (segmentationSymbolUsed) {
              bitModel.checkSegmentationSymbol();
            }
            break;
        }
        currentCodingpassType = (currentCodingpassType + 1) % 3;
      }
      var offset = codeblock.tbx0_ - x0 + (codeblock.tby0_ - y0) * width;
      var sign = bitModel.coefficentsSign;
      var magnitude = bitModel.coefficentsMagnitude;
      var bitsDecoded = bitModel.bitsDecoded;
      var magnitudeCorrection = reversible ? 0 : 0.5;
      var k, n, nb;
      position = 0;
      var interleave = subband.type !== 'LL';
      for (j = 0; j < blockHeight; j++) {
        var row = offset / width | 0;
        var levelOffset = 2 * row * (levelWidth - width) + right + bottom;
        for (k = 0; k < blockWidth; k++) {
          n = magnitude[position];
          if (n !== 0) {
            n = (n + magnitudeCorrection) * delta;
            if (sign[position] !== 0) {
              n = -n;
            }
            nb = bitsDecoded[position];
            var pos = interleave ? levelOffset + (offset << 1) : offset;
            if (reversible && nb >= mb) {
              coefficients[pos] = n;
            } else {
              coefficients[pos] = n * (1 << mb - nb);
            }
          }
          offset++;
          position++;
        }
        offset += width - blockWidth;
      }
    }
  }
  function transformTile(context, tile, c) {
    var component = tile.components[c];
    var codingStyleParameters = component.codingStyleParameters;
    var quantizationParameters = component.quantizationParameters;
    var decompositionLevelsCount = codingStyleParameters.decompositionLevelsCount;
    var spqcds = quantizationParameters.SPqcds;
    var scalarExpounded = quantizationParameters.scalarExpounded;
    var guardBits = quantizationParameters.guardBits;
    var segmentationSymbolUsed = codingStyleParameters.segmentationSymbolUsed;
    var precision = context.components[c].precision;
    var reversible = codingStyleParameters.reversibleTransformation;
    var transform = reversible ? new ReversibleTransform() : new IrreversibleTransform();
    var subbandCoefficients = [];
    var b = 0;
    for (var i = 0; i <= decompositionLevelsCount; i++) {
      var resolution = component.resolutions[i];
      var width = resolution.trx1 - resolution.trx0;
      var height = resolution.try1 - resolution.try0;
      var coefficients = new Float32Array(width * height);
      for (var j = 0, jj = resolution.subbands.length; j < jj; j++) {
        var mu, epsilon;
        if (!scalarExpounded) {
          mu = spqcds[0].mu;
          epsilon = spqcds[0].epsilon + (i > 0 ? 1 - i : 0);
        } else {
          mu = spqcds[b].mu;
          epsilon = spqcds[b].epsilon;
          b++;
        }
        var subband = resolution.subbands[j];
        var gainLog2 = SubbandsGainLog2[subband.type];
        var delta = reversible ? 1 : Math.pow(2, precision + gainLog2 - epsilon) * (1 + mu / 2048);
        var mb = guardBits + epsilon - 1;
        copyCoefficients(coefficients, width, height, subband, delta, mb, reversible, segmentationSymbolUsed);
      }
      subbandCoefficients.push({
        width: width,
        height: height,
        items: coefficients
      });
    }
    var result = transform.calculate(subbandCoefficients, component.tcx0, component.tcy0);
    return {
      left: component.tcx0,
      top: component.tcy0,
      width: result.width,
      height: result.height,
      items: result.items
    };
  }
  function transformComponents(context) {
    var siz = context.SIZ;
    var components = context.components;
    var componentsCount = siz.Csiz;
    var resultImages = [];
    for (var i = 0, ii = context.tiles.length; i < ii; i++) {
      var tile = context.tiles[i];
      var transformedTiles = [];
      var c;
      for (c = 0; c < componentsCount; c++) {
        transformedTiles[c] = transformTile(context, tile, c);
      }
      var tile0 = transformedTiles[0];
      var out = new Uint8Array(tile0.items.length * componentsCount);
      var result = {
        left: tile0.left,
        top: tile0.top,
        width: tile0.width,
        height: tile0.height,
        items: out
      };
      var shift, offset, max, min, maxK;
      var pos = 0,
          j,
          jj,
          y0,
          y1,
          y2,
          r,
          g,
          b,
          k,
          val;
      if (tile.codingStyleDefaultParameters.multipleComponentTransform) {
        var fourComponents = componentsCount === 4;
        var y0items = transformedTiles[0].items;
        var y1items = transformedTiles[1].items;
        var y2items = transformedTiles[2].items;
        var y3items = fourComponents ? transformedTiles[3].items : null;
        shift = components[0].precision - 8;
        offset = (128 << shift) + 0.5;
        max = 255 * (1 << shift);
        maxK = max * 0.5;
        min = -maxK;
        var component0 = tile.components[0];
        var alpha01 = componentsCount - 3;
        jj = y0items.length;
        if (!component0.codingStyleParameters.reversibleTransformation) {
          for (j = 0; j < jj; j++, pos += alpha01) {
            y0 = y0items[j] + offset;
            y1 = y1items[j];
            y2 = y2items[j];
            r = y0 + 1.402 * y2;
            g = y0 - 0.34413 * y1 - 0.71414 * y2;
            b = y0 + 1.772 * y1;
            out[pos++] = r <= 0 ? 0 : r >= max ? 255 : r >> shift;
            out[pos++] = g <= 0 ? 0 : g >= max ? 255 : g >> shift;
            out[pos++] = b <= 0 ? 0 : b >= max ? 255 : b >> shift;
          }
        } else {
          for (j = 0; j < jj; j++, pos += alpha01) {
            y0 = y0items[j] + offset;
            y1 = y1items[j];
            y2 = y2items[j];
            g = y0 - (y2 + y1 >> 2);
            r = g + y2;
            b = g + y1;
            out[pos++] = r <= 0 ? 0 : r >= max ? 255 : r >> shift;
            out[pos++] = g <= 0 ? 0 : g >= max ? 255 : g >> shift;
            out[pos++] = b <= 0 ? 0 : b >= max ? 255 : b >> shift;
          }
        }
        if (fourComponents) {
          for (j = 0, pos = 3; j < jj; j++, pos += 4) {
            k = y3items[j];
            out[pos] = k <= min ? 0 : k >= maxK ? 255 : k + offset >> shift;
          }
        }
      } else {
        for (c = 0; c < componentsCount; c++) {
          var items = transformedTiles[c].items;
          shift = components[c].precision - 8;
          offset = (128 << shift) + 0.5;
          max = 127.5 * (1 << shift);
          min = -max;
          for (pos = c, j = 0, jj = items.length; j < jj; j++) {
            val = items[j];
            out[pos] = val <= min ? 0 : val >= max ? 255 : val + offset >> shift;
            pos += componentsCount;
          }
        }
      }
      resultImages.push(result);
    }
    return resultImages;
  }
  function initializeTile(context, tileIndex) {
    var siz = context.SIZ;
    var componentsCount = siz.Csiz;
    var tile = context.tiles[tileIndex];
    for (var c = 0; c < componentsCount; c++) {
      var component = tile.components[c];
      var qcdOrQcc = context.currentTile.QCC[c] !== undefined ? context.currentTile.QCC[c] : context.currentTile.QCD;
      component.quantizationParameters = qcdOrQcc;
      var codOrCoc = context.currentTile.COC[c] !== undefined ? context.currentTile.COC[c] : context.currentTile.COD;
      component.codingStyleParameters = codOrCoc;
    }
    tile.codingStyleDefaultParameters = context.currentTile.COD;
  }
  var TagTree = function TagTreeClosure() {
    function TagTree(width, height) {
      var levelsLength = (0, _util.log2)(Math.max(width, height)) + 1;
      this.levels = [];
      for (var i = 0; i < levelsLength; i++) {
        var level = {
          width: width,
          height: height,
          items: []
        };
        this.levels.push(level);
        width = Math.ceil(width / 2);
        height = Math.ceil(height / 2);
      }
    }
    TagTree.prototype = {
      reset: function TagTree_reset(i, j) {
        var currentLevel = 0,
            value = 0,
            level;
        while (currentLevel < this.levels.length) {
          level = this.levels[currentLevel];
          var index = i + j * level.width;
          if (level.items[index] !== undefined) {
            value = level.items[index];
            break;
          }
          level.index = index;
          i >>= 1;
          j >>= 1;
          currentLevel++;
        }
        currentLevel--;
        level = this.levels[currentLevel];
        level.items[level.index] = value;
        this.currentLevel = currentLevel;
        delete this.value;
      },
      incrementValue: function TagTree_incrementValue() {
        var level = this.levels[this.currentLevel];
        level.items[level.index]++;
      },
      nextLevel: function TagTree_nextLevel() {
        var currentLevel = this.currentLevel;
        var level = this.levels[currentLevel];
        var value = level.items[level.index];
        currentLevel--;
        if (currentLevel < 0) {
          this.value = value;
          return false;
        }
        this.currentLevel = currentLevel;
        level = this.levels[currentLevel];
        level.items[level.index] = value;
        return true;
      }
    };
    return TagTree;
  }();
  var InclusionTree = function InclusionTreeClosure() {
    function InclusionTree(width, height, defaultValue) {
      var levelsLength = (0, _util.log2)(Math.max(width, height)) + 1;
      this.levels = [];
      for (var i = 0; i < levelsLength; i++) {
        var items = new Uint8Array(width * height);
        for (var j = 0, jj = items.length; j < jj; j++) {
          items[j] = defaultValue;
        }
        var level = {
          width: width,
          height: height,
          items: items
        };
        this.levels.push(level);
        width = Math.ceil(width / 2);
        height = Math.ceil(height / 2);
      }
    }
    InclusionTree.prototype = {
      reset: function InclusionTree_reset(i, j, stopValue) {
        var currentLevel = 0;
        while (currentLevel < this.levels.length) {
          var level = this.levels[currentLevel];
          var index = i + j * level.width;
          level.index = index;
          var value = level.items[index];
          if (value === 0xFF) {
            break;
          }
          if (value > stopValue) {
            this.currentLevel = currentLevel;
            this.propagateValues();
            return false;
          }
          i >>= 1;
          j >>= 1;
          currentLevel++;
        }
        this.currentLevel = currentLevel - 1;
        return true;
      },
      incrementValue: function InclusionTree_incrementValue(stopValue) {
        var level = this.levels[this.currentLevel];
        level.items[level.index] = stopValue + 1;
        this.propagateValues();
      },
      propagateValues: function InclusionTree_propagateValues() {
        var levelIndex = this.currentLevel;
        var level = this.levels[levelIndex];
        var currentValue = level.items[level.index];
        while (--levelIndex >= 0) {
          level = this.levels[levelIndex];
          level.items[level.index] = currentValue;
        }
      },
      nextLevel: function InclusionTree_nextLevel() {
        var currentLevel = this.currentLevel;
        var level = this.levels[currentLevel];
        var value = level.items[level.index];
        level.items[level.index] = 0xFF;
        currentLevel--;
        if (currentLevel < 0) {
          return false;
        }
        this.currentLevel = currentLevel;
        level = this.levels[currentLevel];
        level.items[level.index] = value;
        return true;
      }
    };
    return InclusionTree;
  }();
  var BitModel = function BitModelClosure() {
    var UNIFORM_CONTEXT = 17;
    var RUNLENGTH_CONTEXT = 18;
    var LLAndLHContextsLabel = new Uint8Array([0, 5, 8, 0, 3, 7, 8, 0, 4, 7, 8, 0, 0, 0, 0, 0, 1, 6, 8, 0, 3, 7, 8, 0, 4, 7, 8, 0, 0, 0, 0, 0, 2, 6, 8, 0, 3, 7, 8, 0, 4, 7, 8, 0, 0, 0, 0, 0, 2, 6, 8, 0, 3, 7, 8, 0, 4, 7, 8, 0, 0, 0, 0, 0, 2, 6, 8, 0, 3, 7, 8, 0, 4, 7, 8]);
    var HLContextLabel = new Uint8Array([0, 3, 4, 0, 5, 7, 7, 0, 8, 8, 8, 0, 0, 0, 0, 0, 1, 3, 4, 0, 6, 7, 7, 0, 8, 8, 8, 0, 0, 0, 0, 0, 2, 3, 4, 0, 6, 7, 7, 0, 8, 8, 8, 0, 0, 0, 0, 0, 2, 3, 4, 0, 6, 7, 7, 0, 8, 8, 8, 0, 0, 0, 0, 0, 2, 3, 4, 0, 6, 7, 7, 0, 8, 8, 8]);
    var HHContextLabel = new Uint8Array([0, 1, 2, 0, 1, 2, 2, 0, 2, 2, 2, 0, 0, 0, 0, 0, 3, 4, 5, 0, 4, 5, 5, 0, 5, 5, 5, 0, 0, 0, 0, 0, 6, 7, 7, 0, 7, 7, 7, 0, 7, 7, 7, 0, 0, 0, 0, 0, 8, 8, 8, 0, 8, 8, 8, 0, 8, 8, 8, 0, 0, 0, 0, 0, 8, 8, 8, 0, 8, 8, 8, 0, 8, 8, 8]);
    function BitModel(width, height, subband, zeroBitPlanes, mb) {
      this.width = width;
      this.height = height;
      this.contextLabelTable = subband === 'HH' ? HHContextLabel : subband === 'HL' ? HLContextLabel : LLAndLHContextsLabel;
      var coefficientCount = width * height;
      this.neighborsSignificance = new Uint8Array(coefficientCount);
      this.coefficentsSign = new Uint8Array(coefficientCount);
      this.coefficentsMagnitude = mb > 14 ? new Uint32Array(coefficientCount) : mb > 6 ? new Uint16Array(coefficientCount) : new Uint8Array(coefficientCount);
      this.processingFlags = new Uint8Array(coefficientCount);
      var bitsDecoded = new Uint8Array(coefficientCount);
      if (zeroBitPlanes !== 0) {
        for (var i = 0; i < coefficientCount; i++) {
          bitsDecoded[i] = zeroBitPlanes;
        }
      }
      this.bitsDecoded = bitsDecoded;
      this.reset();
    }
    BitModel.prototype = {
      setDecoder: function BitModel_setDecoder(decoder) {
        this.decoder = decoder;
      },
      reset: function BitModel_reset() {
        this.contexts = new Int8Array(19);
        this.contexts[0] = 4 << 1 | 0;
        this.contexts[UNIFORM_CONTEXT] = 46 << 1 | 0;
        this.contexts[RUNLENGTH_CONTEXT] = 3 << 1 | 0;
      },
      setNeighborsSignificance: function BitModel_setNeighborsSignificance(row, column, index) {
        var neighborsSignificance = this.neighborsSignificance;
        var width = this.width,
            height = this.height;
        var left = column > 0;
        var right = column + 1 < width;
        var i;
        if (row > 0) {
          i = index - width;
          if (left) {
            neighborsSignificance[i - 1] += 0x10;
          }
          if (right) {
            neighborsSignificance[i + 1] += 0x10;
          }
          neighborsSignificance[i] += 0x04;
        }
        if (row + 1 < height) {
          i = index + width;
          if (left) {
            neighborsSignificance[i - 1] += 0x10;
          }
          if (right) {
            neighborsSignificance[i + 1] += 0x10;
          }
          neighborsSignificance[i] += 0x04;
        }
        if (left) {
          neighborsSignificance[index - 1] += 0x01;
        }
        if (right) {
          neighborsSignificance[index + 1] += 0x01;
        }
        neighborsSignificance[index] |= 0x80;
      },
      runSignificancePropagationPass: function BitModel_runSignificancePropagationPass() {
        var decoder = this.decoder;
        var width = this.width,
            height = this.height;
        var coefficentsMagnitude = this.coefficentsMagnitude;
        var coefficentsSign = this.coefficentsSign;
        var neighborsSignificance = this.neighborsSignificance;
        var processingFlags = this.processingFlags;
        var contexts = this.contexts;
        var labels = this.contextLabelTable;
        var bitsDecoded = this.bitsDecoded;
        var processedInverseMask = ~1;
        var processedMask = 1;
        var firstMagnitudeBitMask = 2;
        for (var i0 = 0; i0 < height; i0 += 4) {
          for (var j = 0; j < width; j++) {
            var index = i0 * width + j;
            for (var i1 = 0; i1 < 4; i1++, index += width) {
              var i = i0 + i1;
              if (i >= height) {
                break;
              }
              processingFlags[index] &= processedInverseMask;
              if (coefficentsMagnitude[index] || !neighborsSignificance[index]) {
                continue;
              }
              var contextLabel = labels[neighborsSignificance[index]];
              var decision = decoder.readBit(contexts, contextLabel);
              if (decision) {
                var sign = this.decodeSignBit(i, j, index);
                coefficentsSign[index] = sign;
                coefficentsMagnitude[index] = 1;
                this.setNeighborsSignificance(i, j, index);
                processingFlags[index] |= firstMagnitudeBitMask;
              }
              bitsDecoded[index]++;
              processingFlags[index] |= processedMask;
            }
          }
        }
      },
      decodeSignBit: function BitModel_decodeSignBit(row, column, index) {
        var width = this.width,
            height = this.height;
        var coefficentsMagnitude = this.coefficentsMagnitude;
        var coefficentsSign = this.coefficentsSign;
        var contribution, sign0, sign1, significance1;
        var contextLabel, decoded;
        significance1 = column > 0 && coefficentsMagnitude[index - 1] !== 0;
        if (column + 1 < width && coefficentsMagnitude[index + 1] !== 0) {
          sign1 = coefficentsSign[index + 1];
          if (significance1) {
            sign0 = coefficentsSign[index - 1];
            contribution = 1 - sign1 - sign0;
          } else {
            contribution = 1 - sign1 - sign1;
          }
        } else if (significance1) {
          sign0 = coefficentsSign[index - 1];
          contribution = 1 - sign0 - sign0;
        } else {
          contribution = 0;
        }
        var horizontalContribution = 3 * contribution;
        significance1 = row > 0 && coefficentsMagnitude[index - width] !== 0;
        if (row + 1 < height && coefficentsMagnitude[index + width] !== 0) {
          sign1 = coefficentsSign[index + width];
          if (significance1) {
            sign0 = coefficentsSign[index - width];
            contribution = 1 - sign1 - sign0 + horizontalContribution;
          } else {
            contribution = 1 - sign1 - sign1 + horizontalContribution;
          }
        } else if (significance1) {
          sign0 = coefficentsSign[index - width];
          contribution = 1 - sign0 - sign0 + horizontalContribution;
        } else {
          contribution = horizontalContribution;
        }
        if (contribution >= 0) {
          contextLabel = 9 + contribution;
          decoded = this.decoder.readBit(this.contexts, contextLabel);
        } else {
          contextLabel = 9 - contribution;
          decoded = this.decoder.readBit(this.contexts, contextLabel) ^ 1;
        }
        return decoded;
      },
      runMagnitudeRefinementPass: function BitModel_runMagnitudeRefinementPass() {
        var decoder = this.decoder;
        var width = this.width,
            height = this.height;
        var coefficentsMagnitude = this.coefficentsMagnitude;
        var neighborsSignificance = this.neighborsSignificance;
        var contexts = this.contexts;
        var bitsDecoded = this.bitsDecoded;
        var processingFlags = this.processingFlags;
        var processedMask = 1;
        var firstMagnitudeBitMask = 2;
        var length = width * height;
        var width4 = width * 4;
        for (var index0 = 0, indexNext; index0 < length; index0 = indexNext) {
          indexNext = Math.min(length, index0 + width4);
          for (var j = 0; j < width; j++) {
            for (var index = index0 + j; index < indexNext; index += width) {
              if (!coefficentsMagnitude[index] || (processingFlags[index] & processedMask) !== 0) {
                continue;
              }
              var contextLabel = 16;
              if ((processingFlags[index] & firstMagnitudeBitMask) !== 0) {
                processingFlags[index] ^= firstMagnitudeBitMask;
                var significance = neighborsSignificance[index] & 127;
                contextLabel = significance === 0 ? 15 : 14;
              }
              var bit = decoder.readBit(contexts, contextLabel);
              coefficentsMagnitude[index] = coefficentsMagnitude[index] << 1 | bit;
              bitsDecoded[index]++;
              processingFlags[index] |= processedMask;
            }
          }
        }
      },
      runCleanupPass: function BitModel_runCleanupPass() {
        var decoder = this.decoder;
        var width = this.width,
            height = this.height;
        var neighborsSignificance = this.neighborsSignificance;
        var coefficentsMagnitude = this.coefficentsMagnitude;
        var coefficentsSign = this.coefficentsSign;
        var contexts = this.contexts;
        var labels = this.contextLabelTable;
        var bitsDecoded = this.bitsDecoded;
        var processingFlags = this.processingFlags;
        var processedMask = 1;
        var firstMagnitudeBitMask = 2;
        var oneRowDown = width;
        var twoRowsDown = width * 2;
        var threeRowsDown = width * 3;
        var iNext;
        for (var i0 = 0; i0 < height; i0 = iNext) {
          iNext = Math.min(i0 + 4, height);
          var indexBase = i0 * width;
          var checkAllEmpty = i0 + 3 < height;
          for (var j = 0; j < width; j++) {
            var index0 = indexBase + j;
            var allEmpty = checkAllEmpty && processingFlags[index0] === 0 && processingFlags[index0 + oneRowDown] === 0 && processingFlags[index0 + twoRowsDown] === 0 && processingFlags[index0 + threeRowsDown] === 0 && neighborsSignificance[index0] === 0 && neighborsSignificance[index0 + oneRowDown] === 0 && neighborsSignificance[index0 + twoRowsDown] === 0 && neighborsSignificance[index0 + threeRowsDown] === 0;
            var i1 = 0,
                index = index0;
            var i = i0,
                sign;
            if (allEmpty) {
              var hasSignificantCoefficent = decoder.readBit(contexts, RUNLENGTH_CONTEXT);
              if (!hasSignificantCoefficent) {
                bitsDecoded[index0]++;
                bitsDecoded[index0 + oneRowDown]++;
                bitsDecoded[index0 + twoRowsDown]++;
                bitsDecoded[index0 + threeRowsDown]++;
                continue;
              }
              i1 = decoder.readBit(contexts, UNIFORM_CONTEXT) << 1 | decoder.readBit(contexts, UNIFORM_CONTEXT);
              if (i1 !== 0) {
                i = i0 + i1;
                index += i1 * width;
              }
              sign = this.decodeSignBit(i, j, index);
              coefficentsSign[index] = sign;
              coefficentsMagnitude[index] = 1;
              this.setNeighborsSignificance(i, j, index);
              processingFlags[index] |= firstMagnitudeBitMask;
              index = index0;
              for (var i2 = i0; i2 <= i; i2++, index += width) {
                bitsDecoded[index]++;
              }
              i1++;
            }
            for (i = i0 + i1; i < iNext; i++, index += width) {
              if (coefficentsMagnitude[index] || (processingFlags[index] & processedMask) !== 0) {
                continue;
              }
              var contextLabel = labels[neighborsSignificance[index]];
              var decision = decoder.readBit(contexts, contextLabel);
              if (decision === 1) {
                sign = this.decodeSignBit(i, j, index);
                coefficentsSign[index] = sign;
                coefficentsMagnitude[index] = 1;
                this.setNeighborsSignificance(i, j, index);
                processingFlags[index] |= firstMagnitudeBitMask;
              }
              bitsDecoded[index]++;
            }
          }
        }
      },
      checkSegmentationSymbol: function BitModel_checkSegmentationSymbol() {
        var decoder = this.decoder;
        var contexts = this.contexts;
        var symbol = decoder.readBit(contexts, UNIFORM_CONTEXT) << 3 | decoder.readBit(contexts, UNIFORM_CONTEXT) << 2 | decoder.readBit(contexts, UNIFORM_CONTEXT) << 1 | decoder.readBit(contexts, UNIFORM_CONTEXT);
        if (symbol !== 0xA) {
          throw new JpxError('Invalid segmentation symbol');
        }
      }
    };
    return BitModel;
  }();
  var Transform = function TransformClosure() {
    function Transform() {}
    Transform.prototype.calculate = function transformCalculate(subbands, u0, v0) {
      var ll = subbands[0];
      for (var i = 1, ii = subbands.length; i < ii; i++) {
        ll = this.iterate(ll, subbands[i], u0, v0);
      }
      return ll;
    };
    Transform.prototype.extend = function extend(buffer, offset, size) {
      var i1 = offset - 1,
          j1 = offset + 1;
      var i2 = offset + size - 2,
          j2 = offset + size;
      buffer[i1--] = buffer[j1++];
      buffer[j2++] = buffer[i2--];
      buffer[i1--] = buffer[j1++];
      buffer[j2++] = buffer[i2--];
      buffer[i1--] = buffer[j1++];
      buffer[j2++] = buffer[i2--];
      buffer[i1] = buffer[j1];
      buffer[j2] = buffer[i2];
    };
    Transform.prototype.iterate = function Transform_iterate(ll, hl_lh_hh, u0, v0) {
      var llWidth = ll.width,
          llHeight = ll.height,
          llItems = ll.items;
      var width = hl_lh_hh.width;
      var height = hl_lh_hh.height;
      var items = hl_lh_hh.items;
      var i, j, k, l, u, v;
      for (k = 0, i = 0; i < llHeight; i++) {
        l = i * 2 * width;
        for (j = 0; j < llWidth; j++, k++, l += 2) {
          items[l] = llItems[k];
        }
      }
      llItems = ll.items = null;
      var bufferPadding = 4;
      var rowBuffer = new Float32Array(width + 2 * bufferPadding);
      if (width === 1) {
        if ((u0 & 1) !== 0) {
          for (v = 0, k = 0; v < height; v++, k += width) {
            items[k] *= 0.5;
          }
        }
      } else {
        for (v = 0, k = 0; v < height; v++, k += width) {
          rowBuffer.set(items.subarray(k, k + width), bufferPadding);
          this.extend(rowBuffer, bufferPadding, width);
          this.filter(rowBuffer, bufferPadding, width);
          items.set(rowBuffer.subarray(bufferPadding, bufferPadding + width), k);
        }
      }
      var numBuffers = 16;
      var colBuffers = [];
      for (i = 0; i < numBuffers; i++) {
        colBuffers.push(new Float32Array(height + 2 * bufferPadding));
      }
      var b,
          currentBuffer = 0;
      ll = bufferPadding + height;
      if (height === 1) {
        if ((v0 & 1) !== 0) {
          for (u = 0; u < width; u++) {
            items[u] *= 0.5;
          }
        }
      } else {
        for (u = 0; u < width; u++) {
          if (currentBuffer === 0) {
            numBuffers = Math.min(width - u, numBuffers);
            for (k = u, l = bufferPadding; l < ll; k += width, l++) {
              for (b = 0; b < numBuffers; b++) {
                colBuffers[b][l] = items[k + b];
              }
            }
            currentBuffer = numBuffers;
          }
          currentBuffer--;
          var buffer = colBuffers[currentBuffer];
          this.extend(buffer, bufferPadding, height);
          this.filter(buffer, bufferPadding, height);
          if (currentBuffer === 0) {
            k = u - numBuffers + 1;
            for (l = bufferPadding; l < ll; k += width, l++) {
              for (b = 0; b < numBuffers; b++) {
                items[k + b] = colBuffers[b][l];
              }
            }
          }
        }
      }
      return {
        width: width,
        height: height,
        items: items
      };
    };
    return Transform;
  }();
  var IrreversibleTransform = function IrreversibleTransformClosure() {
    function IrreversibleTransform() {
      Transform.call(this);
    }
    IrreversibleTransform.prototype = Object.create(Transform.prototype);
    IrreversibleTransform.prototype.filter = function irreversibleTransformFilter(x, offset, length) {
      var len = length >> 1;
      offset = offset | 0;
      var j, n, current, next;
      var alpha = -1.586134342059924;
      var beta = -0.052980118572961;
      var gamma = 0.882911075530934;
      var delta = 0.443506852043971;
      var K = 1.230174104914001;
      var K_ = 1 / K;
      j = offset - 3;
      for (n = len + 4; n--; j += 2) {
        x[j] *= K_;
      }
      j = offset - 2;
      current = delta * x[j - 1];
      for (n = len + 3; n--; j += 2) {
        next = delta * x[j + 1];
        x[j] = K * x[j] - current - next;
        if (n--) {
          j += 2;
          current = delta * x[j + 1];
          x[j] = K * x[j] - current - next;
        } else {
          break;
        }
      }
      j = offset - 1;
      current = gamma * x[j - 1];
      for (n = len + 2; n--; j += 2) {
        next = gamma * x[j + 1];
        x[j] -= current + next;
        if (n--) {
          j += 2;
          current = gamma * x[j + 1];
          x[j] -= current + next;
        } else {
          break;
        }
      }
      j = offset;
      current = beta * x[j - 1];
      for (n = len + 1; n--; j += 2) {
        next = beta * x[j + 1];
        x[j] -= current + next;
        if (n--) {
          j += 2;
          current = beta * x[j + 1];
          x[j] -= current + next;
        } else {
          break;
        }
      }
      if (len !== 0) {
        j = offset + 1;
        current = alpha * x[j - 1];
        for (n = len; n--; j += 2) {
          next = alpha * x[j + 1];
          x[j] -= current + next;
          if (n--) {
            j += 2;
            current = alpha * x[j + 1];
            x[j] -= current + next;
          } else {
            break;
          }
        }
      }
    };
    return IrreversibleTransform;
  }();
  var ReversibleTransform = function ReversibleTransformClosure() {
    function ReversibleTransform() {
      Transform.call(this);
    }
    ReversibleTransform.prototype = Object.create(Transform.prototype);
    ReversibleTransform.prototype.filter = function reversibleTransformFilter(x, offset, length) {
      var len = length >> 1;
      offset = offset | 0;
      var j, n;
      for (j = offset, n = len + 1; n--; j += 2) {
        x[j] -= x[j - 1] + x[j + 1] + 2 >> 2;
      }
      for (j = offset + 1, n = len; n--; j += 2) {
        x[j] += x[j - 1] + x[j + 1] >> 1;
      }
    };
    return ReversibleTransform;
  }();
  return JpxImage;
}();
exports.JpxImage = JpxImage;

/***/ }),
/* 15 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileSpec = exports.XRef = exports.ObjectLoader = exports.Catalog = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _util = __w_pdfjs_require__(0);

var _primitives = __w_pdfjs_require__(1);

var _parser = __w_pdfjs_require__(5);

var _chunked_stream = __w_pdfjs_require__(11);

var _crypto = __w_pdfjs_require__(12);

var _colorspace = __w_pdfjs_require__(3);

var Catalog = function CatalogClosure() {
  function Catalog(pdfManager, xref, pageFactory) {
    this.pdfManager = pdfManager;
    this.xref = xref;
    this.catDict = xref.getCatalogObj();
    if (!(0, _primitives.isDict)(this.catDict)) {
      throw new _util.FormatError('catalog object is not a dictionary');
    }
    this.fontCache = new _primitives.RefSetCache();
    this.builtInCMapCache = Object.create(null);
    this.pageKidsCountCache = new _primitives.RefSetCache();
    this.pageFactory = pageFactory;
    this.pagePromises = [];
  }
  Catalog.prototype = {
    get metadata() {
      var streamRef = this.catDict.getRaw('Metadata');
      if (!(0, _primitives.isRef)(streamRef)) {
        return (0, _util.shadow)(this, 'metadata', null);
      }
      var encryptMetadata = !this.xref.encrypt ? false : this.xref.encrypt.encryptMetadata;
      var stream = this.xref.fetch(streamRef, !encryptMetadata);
      var metadata;
      if (stream && (0, _primitives.isDict)(stream.dict)) {
        var type = stream.dict.get('Type');
        var subtype = stream.dict.get('Subtype');
        if ((0, _primitives.isName)(type, 'Metadata') && (0, _primitives.isName)(subtype, 'XML')) {
          try {
            metadata = (0, _util.stringToUTF8String)((0, _util.bytesToString)(stream.getBytes()));
          } catch (e) {
            if (e instanceof _util.MissingDataException) {
              throw e;
            }
            (0, _util.info)('Skipping invalid metadata.');
          }
        }
      }
      return (0, _util.shadow)(this, 'metadata', metadata);
    },
    get toplevelPagesDict() {
      var pagesObj = this.catDict.get('Pages');
      if (!(0, _primitives.isDict)(pagesObj)) {
        throw new _util.FormatError('invalid top-level pages dictionary');
      }
      return (0, _util.shadow)(this, 'toplevelPagesDict', pagesObj);
    },
    get documentOutline() {
      var obj = null;
      try {
        obj = this.readDocumentOutline();
      } catch (ex) {
        if (ex instanceof _util.MissingDataException) {
          throw ex;
        }
        (0, _util.warn)('Unable to read document outline');
      }
      return (0, _util.shadow)(this, 'documentOutline', obj);
    },
    readDocumentOutline: function Catalog_readDocumentOutline() {
      var obj = this.catDict.get('Outlines');
      if (!(0, _primitives.isDict)(obj)) {
        return null;
      }
      obj = obj.getRaw('First');
      if (!(0, _primitives.isRef)(obj)) {
        return null;
      }
      var root = { items: [] };
      var queue = [{
        obj: obj,
        parent: root
      }];
      var processed = new _primitives.RefSet();
      processed.put(obj);
      var xref = this.xref,
          blackColor = new Uint8Array(3);
      while (queue.length > 0) {
        var i = queue.shift();
        var outlineDict = xref.fetchIfRef(i.obj);
        if (outlineDict === null) {
          continue;
        }
        if (!outlineDict.has('Title')) {
          throw new _util.FormatError('Invalid outline item');
        }
        var data = {
          url: null,
          dest: null
        };
        Catalog.parseDestDictionary({
          destDict: outlineDict,
          resultObj: data,
          docBaseUrl: this.pdfManager.docBaseUrl
        });
        var title = outlineDict.get('Title');
        var flags = outlineDict.get('F') || 0;
        var color = outlineDict.getArray('C'),
            rgbColor = blackColor;
        if ((0, _util.isArray)(color) && color.length === 3 && (color[0] !== 0 || color[1] !== 0 || color[2] !== 0)) {
          rgbColor = _colorspace.ColorSpace.singletons.rgb.getRgb(color, 0);
        }
        var outlineItem = {
          dest: data.dest,
          url: data.url,
          unsafeUrl: data.unsafeUrl,
          newWindow: data.newWindow,
          title: (0, _util.stringToPDFString)(title),
          color: rgbColor,
          count: outlineDict.get('Count'),
          bold: !!(flags & 2),
          italic: !!(flags & 1),
          items: []
        };
        i.parent.items.push(outlineItem);
        obj = outlineDict.getRaw('First');
        if ((0, _primitives.isRef)(obj) && !processed.has(obj)) {
          queue.push({
            obj: obj,
            parent: outlineItem
          });
          processed.put(obj);
        }
        obj = outlineDict.getRaw('Next');
        if ((0, _primitives.isRef)(obj) && !processed.has(obj)) {
          queue.push({
            obj: obj,
            parent: i.parent
          });
          processed.put(obj);
        }
      }
      return root.items.length > 0 ? root.items : null;
    },
    get numPages() {
      var obj = this.toplevelPagesDict.get('Count');
      if (!(0, _util.isInt)(obj)) {
        throw new _util.FormatError('page count in top level pages object is not an integer');
      }
      return (0, _util.shadow)(this, 'numPages', obj);
    },
    get destinations() {
      function fetchDestination(dest) {
        return (0, _primitives.isDict)(dest) ? dest.get('D') : dest;
      }
      var xref = this.xref;
      var dests = {},
          nameTreeRef,
          nameDictionaryRef;
      var obj = this.catDict.get('Names');
      if (obj && obj.has('Dests')) {
        nameTreeRef = obj.getRaw('Dests');
      } else if (this.catDict.has('Dests')) {
        nameDictionaryRef = this.catDict.get('Dests');
      }
      if (nameDictionaryRef) {
        obj = nameDictionaryRef;
        obj.forEach(function catalogForEach(key, value) {
          if (!value) {
            return;
          }
          dests[key] = fetchDestination(value);
        });
      }
      if (nameTreeRef) {
        var nameTree = new NameTree(nameTreeRef, xref);
        var names = nameTree.getAll();
        for (var name in names) {
          dests[name] = fetchDestination(names[name]);
        }
      }
      return (0, _util.shadow)(this, 'destinations', dests);
    },
    getDestination: function Catalog_getDestination(destinationId) {
      function fetchDestination(dest) {
        return (0, _primitives.isDict)(dest) ? dest.get('D') : dest;
      }
      var xref = this.xref;
      var dest = null,
          nameTreeRef,
          nameDictionaryRef;
      var obj = this.catDict.get('Names');
      if (obj && obj.has('Dests')) {
        nameTreeRef = obj.getRaw('Dests');
      } else if (this.catDict.has('Dests')) {
        nameDictionaryRef = this.catDict.get('Dests');
      }
      if (nameDictionaryRef) {
        var value = nameDictionaryRef.get(destinationId);
        if (value) {
          dest = fetchDestination(value);
        }
      }
      if (nameTreeRef) {
        var nameTree = new NameTree(nameTreeRef, xref);
        dest = fetchDestination(nameTree.get(destinationId));
      }
      return dest;
    },
    get pageLabels() {
      var obj = null;
      try {
        obj = this.readPageLabels();
      } catch (ex) {
        if (ex instanceof _util.MissingDataException) {
          throw ex;
        }
        (0, _util.warn)('Unable to read page labels.');
      }
      return (0, _util.shadow)(this, 'pageLabels', obj);
    },
    readPageLabels: function Catalog_readPageLabels() {
      var obj = this.catDict.getRaw('PageLabels');
      if (!obj) {
        return null;
      }
      var pageLabels = new Array(this.numPages);
      var style = null;
      var prefix = '';
      var numberTree = new NumberTree(obj, this.xref);
      var nums = numberTree.getAll();
      var currentLabel = '',
          currentIndex = 1;
      for (var i = 0, ii = this.numPages; i < ii; i++) {
        if (i in nums) {
          var labelDict = nums[i];
          if (!(0, _primitives.isDict)(labelDict)) {
            throw new _util.FormatError('The PageLabel is not a dictionary.');
          }
          var type = labelDict.get('Type');
          if (type && !(0, _primitives.isName)(type, 'PageLabel')) {
            throw new _util.FormatError('Invalid type in PageLabel dictionary.');
          }
          var s = labelDict.get('S');
          if (s && !(0, _primitives.isName)(s)) {
            throw new _util.FormatError('Invalid style in PageLabel dictionary.');
          }
          style = s ? s.name : null;
          var p = labelDict.get('P');
          if (p && !(0, _util.isString)(p)) {
            throw new _util.FormatError('Invalid prefix in PageLabel dictionary.');
          }
          prefix = p ? (0, _util.stringToPDFString)(p) : '';
          var st = labelDict.get('St');
          if (st && !((0, _util.isInt)(st) && st >= 1)) {
            throw new _util.FormatError('Invalid start in PageLabel dictionary.');
          }
          currentIndex = st || 1;
        }
        switch (style) {
          case 'D':
            currentLabel = currentIndex;
            break;
          case 'R':
          case 'r':
            currentLabel = _util.Util.toRoman(currentIndex, style === 'r');
            break;
          case 'A':
          case 'a':
            var LIMIT = 26;
            var A_UPPER_CASE = 0x41,
                A_LOWER_CASE = 0x61;
            var baseCharCode = style === 'a' ? A_LOWER_CASE : A_UPPER_CASE;
            var letterIndex = currentIndex - 1;
            var character = String.fromCharCode(baseCharCode + letterIndex % LIMIT);
            var charBuf = [];
            for (var j = 0, jj = letterIndex / LIMIT | 0; j <= jj; j++) {
              charBuf.push(character);
            }
            currentLabel = charBuf.join('');
            break;
          default:
            if (style) {
              throw new _util.FormatError('Invalid style "' + style + '" in PageLabel dictionary.');
            }
        }
        pageLabels[i] = prefix + currentLabel;
        currentLabel = '';
        currentIndex++;
      }
      return pageLabels;
    },
    get pageMode() {
      var obj = this.catDict.get('PageMode');
      var pageMode = 'UseNone';
      if ((0, _primitives.isName)(obj)) {
        switch (obj.name) {
          case 'UseNone':
          case 'UseOutlines':
          case 'UseThumbs':
          case 'FullScreen':
          case 'UseOC':
          case 'UseAttachments':
            pageMode = obj.name;
        }
      }
      return (0, _util.shadow)(this, 'pageMode', pageMode);
    },
    get attachments() {
      var xref = this.xref;
      var attachments = null,
          nameTreeRef;
      var obj = this.catDict.get('Names');
      if (obj) {
        nameTreeRef = obj.getRaw('EmbeddedFiles');
      }
      if (nameTreeRef) {
        var nameTree = new NameTree(nameTreeRef, xref);
        var names = nameTree.getAll();
        for (var name in names) {
          var fs = new FileSpec(names[name], xref);
          if (!attachments) {
            attachments = Object.create(null);
          }
          attachments[(0, _util.stringToPDFString)(name)] = fs.serializable;
        }
      }
      return (0, _util.shadow)(this, 'attachments', attachments);
    },
    get javaScript() {
      var xref = this.xref;
      var obj = this.catDict.get('Names');
      var javaScript = [];
      function appendIfJavaScriptDict(jsDict) {
        var type = jsDict.get('S');
        if (!(0, _primitives.isName)(type, 'JavaScript')) {
          return;
        }
        var js = jsDict.get('JS');
        if ((0, _primitives.isStream)(js)) {
          js = (0, _util.bytesToString)(js.getBytes());
        } else if (!(0, _util.isString)(js)) {
          return;
        }
        javaScript.push((0, _util.stringToPDFString)(js));
      }
      if (obj && obj.has('JavaScript')) {
        var nameTree = new NameTree(obj.getRaw('JavaScript'), xref);
        var names = nameTree.getAll();
        for (var name in names) {
          var jsDict = names[name];
          if ((0, _primitives.isDict)(jsDict)) {
            appendIfJavaScriptDict(jsDict);
          }
        }
      }
      var openactionDict = this.catDict.get('OpenAction');
      if ((0, _primitives.isDict)(openactionDict, 'Action')) {
        var actionType = openactionDict.get('S');
        if ((0, _primitives.isName)(actionType, 'Named')) {
          var action = openactionDict.get('N');
          if ((0, _primitives.isName)(action, 'Print')) {
            javaScript.push('print({});');
          }
        } else {
          appendIfJavaScriptDict(openactionDict);
        }
      }
      return (0, _util.shadow)(this, 'javaScript', javaScript);
    },
    cleanup: function Catalog_cleanup() {
      var _this = this;

      this.pageKidsCountCache.clear();
      var promises = [];
      this.fontCache.forEach(function (promise) {
        promises.push(promise);
      });
      return Promise.all(promises).then(function (translatedFonts) {
        for (var i = 0, ii = translatedFonts.length; i < ii; i++) {
          var font = translatedFonts[i].dict;
          delete font.translated;
        }
        _this.fontCache.clear();
        _this.builtInCMapCache = Object.create(null);
      });
    },
    getPage: function Catalog_getPage(pageIndex) {
      var _this2 = this;

      if (!(pageIndex in this.pagePromises)) {
        this.pagePromises[pageIndex] = this.getPageDict(pageIndex).then(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              dict = _ref2[0],
              ref = _ref2[1];

          return _this2.pageFactory.createPage(pageIndex, dict, ref, _this2.fontCache, _this2.builtInCMapCache);
        });
      }
      return this.pagePromises[pageIndex];
    },
    getPageDict: function Catalog_getPageDict(pageIndex) {
      var capability = (0, _util.createPromiseCapability)();
      var nodesToVisit = [this.catDict.getRaw('Pages')];
      var count,
          currentPageIndex = 0;
      var xref = this.xref,
          pageKidsCountCache = this.pageKidsCountCache;
      function next() {
        while (nodesToVisit.length) {
          var currentNode = nodesToVisit.pop();
          if ((0, _primitives.isRef)(currentNode)) {
            count = pageKidsCountCache.get(currentNode);
            if (count > 0 && currentPageIndex + count < pageIndex) {
              currentPageIndex += count;
              continue;
            }
            xref.fetchAsync(currentNode).then(function (obj) {
              if ((0, _primitives.isDict)(obj, 'Page') || (0, _primitives.isDict)(obj) && !obj.has('Kids')) {
                if (pageIndex === currentPageIndex) {
                  if (currentNode && !pageKidsCountCache.has(currentNode)) {
                    pageKidsCountCache.put(currentNode, 1);
                  }
                  capability.resolve([obj, currentNode]);
                } else {
                  currentPageIndex++;
                  next();
                }
                return;
              }
              nodesToVisit.push(obj);
              next();
            }, capability.reject);
            return;
          }
          if (!(0, _primitives.isDict)(currentNode)) {
            capability.reject(new _util.FormatError('page dictionary kid reference points to wrong type of object'));
            return;
          }
          count = currentNode.get('Count');
          var objId = currentNode.objId;
          if (objId && !pageKidsCountCache.has(objId)) {
            pageKidsCountCache.put(objId, count);
          }
          if (currentPageIndex + count <= pageIndex) {
            currentPageIndex += count;
            continue;
          }
          var kids = currentNode.get('Kids');
          if (!(0, _util.isArray)(kids)) {
            capability.reject(new _util.FormatError('page dictionary kids object is not an array'));
            return;
          }
          for (var last = kids.length - 1; last >= 0; last--) {
            nodesToVisit.push(kids[last]);
          }
        }
        capability.reject(new Error('Page index ' + pageIndex + ' not found.'));
      }
      next();
      return capability.promise;
    },
    getPageIndex: function Catalog_getPageIndex(pageRef) {
      var xref = this.xref;
      function pagesBeforeRef(kidRef) {
        var total = 0;
        var parentRef;
        return xref.fetchAsync(kidRef).then(function (node) {
          if ((0, _primitives.isRefsEqual)(kidRef, pageRef) && !(0, _primitives.isDict)(node, 'Page') && !((0, _primitives.isDict)(node) && !node.has('Type') && node.has('Contents'))) {
            throw new _util.FormatError('The reference does not point to a /Page Dict.');
          }
          if (!node) {
            return null;
          }
          if (!(0, _primitives.isDict)(node)) {
            throw new _util.FormatError('node must be a Dict.');
          }
          parentRef = node.getRaw('Parent');
          return node.getAsync('Parent');
        }).then(function (parent) {
          if (!parent) {
            return null;
          }
          if (!(0, _primitives.isDict)(parent)) {
            throw new _util.FormatError('parent must be a Dict.');
          }
          return parent.getAsync('Kids');
        }).then(function (kids) {
          if (!kids) {
            return null;
          }
          var kidPromises = [];
          var found = false;
          for (var i = 0; i < kids.length; i++) {
            var kid = kids[i];
            if (!(0, _primitives.isRef)(kid)) {
              throw new _util.FormatError('kid must be a Ref.');
            }
            if (kid.num === kidRef.num) {
              found = true;
              break;
            }
            kidPromises.push(xref.fetchAsync(kid).then(function (kid) {
              if (kid.has('Count')) {
                var count = kid.get('Count');
                total += count;
              } else {
                total++;
              }
            }));
          }
          if (!found) {
            throw new _util.FormatError('kid ref not found in parents kids');
          }
          return Promise.all(kidPromises).then(function () {
            return [total, parentRef];
          });
        });
      }
      var total = 0;
      function next(ref) {
        return pagesBeforeRef(ref).then(function (args) {
          if (!args) {
            return total;
          }
          var count = args[0];
          var parentRef = args[1];
          total += count;
          return next(parentRef);
        });
      }
      return next(pageRef);
    }
  };
  Catalog.parseDestDictionary = function Catalog_parseDestDictionary(params) {
    function addDefaultProtocolToUrl(url) {
      if (url.indexOf('www.') === 0) {
        return 'http://' + url;
      }
      return url;
    }
    function tryConvertUrlEncoding(url) {
      try {
        return (0, _util.stringToUTF8String)(url);
      } catch (e) {
        return url;
      }
    }
    var destDict = params.destDict;
    if (!(0, _primitives.isDict)(destDict)) {
      (0, _util.warn)('Catalog_parseDestDictionary: "destDict" must be a dictionary.');
      return;
    }
    var resultObj = params.resultObj;
    if ((typeof resultObj === 'undefined' ? 'undefined' : _typeof(resultObj)) !== 'object') {
      (0, _util.warn)('Catalog_parseDestDictionary: "resultObj" must be an object.');
      return;
    }
    var docBaseUrl = params.docBaseUrl || null;
    var action = destDict.get('A'),
        url,
        dest;
    if ((0, _primitives.isDict)(action)) {
      var linkType = action.get('S').name;
      switch (linkType) {
        case 'URI':
          url = action.get('URI');
          if ((0, _primitives.isName)(url)) {
            url = '/' + url.name;
          } else if ((0, _util.isString)(url)) {
            url = addDefaultProtocolToUrl(url);
          }
          break;
        case 'GoTo':
          dest = action.get('D');
          break;
        case 'Launch':
        case 'GoToR':
          var urlDict = action.get('F');
          if ((0, _primitives.isDict)(urlDict)) {
            url = urlDict.get('F') || null;
          } else if ((0, _util.isString)(urlDict)) {
            url = urlDict;
          }
          var remoteDest = action.get('D');
          if (remoteDest) {
            if ((0, _primitives.isName)(remoteDest)) {
              remoteDest = remoteDest.name;
            }
            if ((0, _util.isString)(url)) {
              var baseUrl = url.split('#')[0];
              if ((0, _util.isString)(remoteDest)) {
                url = baseUrl + '#' + remoteDest;
              } else if ((0, _util.isArray)(remoteDest)) {
                url = baseUrl + '#' + JSON.stringify(remoteDest);
              }
            }
          }
          var newWindow = action.get('NewWindow');
          if ((0, _util.isBool)(newWindow)) {
            resultObj.newWindow = newWindow;
          }
          break;
        case 'Named':
          var namedAction = action.get('N');
          if ((0, _primitives.isName)(namedAction)) {
            resultObj.action = namedAction.name;
          }
          break;
        case 'JavaScript':
          var jsAction = action.get('JS'),
              js;
          if ((0, _primitives.isStream)(jsAction)) {
            js = (0, _util.bytesToString)(jsAction.getBytes());
          } else if ((0, _util.isString)(jsAction)) {
            js = jsAction;
          }
          if (js) {
            var URL_OPEN_METHODS = ['app.launchURL', 'window.open'];
            var regex = new RegExp('^\\s*(' + URL_OPEN_METHODS.join('|').split('.').join('\\.') + ')\\((?:\'|\")([^\'\"]*)(?:\'|\")(?:,\\s*(\\w+)\\)|\\))', 'i');
            var jsUrl = regex.exec((0, _util.stringToPDFString)(js));
            if (jsUrl && jsUrl[2]) {
              url = jsUrl[2];
              if (jsUrl[3] === 'true' && jsUrl[1] === 'app.launchURL') {
                resultObj.newWindow = true;
              }
              break;
            }
          }
        default:
          (0, _util.warn)('Catalog_parseDestDictionary: Unrecognized link type "' + linkType + '".');
          break;
      }
    } else if (destDict.has('Dest')) {
      dest = destDict.get('Dest');
    }
    if ((0, _util.isString)(url)) {
      url = tryConvertUrlEncoding(url);
      var absoluteUrl = (0, _util.createValidAbsoluteUrl)(url, docBaseUrl);
      if (absoluteUrl) {
        resultObj.url = absoluteUrl.href;
      }
      resultObj.unsafeUrl = url;
    }
    if (dest) {
      if ((0, _primitives.isName)(dest)) {
        dest = dest.name;
      }
      if ((0, _util.isString)(dest) || (0, _util.isArray)(dest)) {
        resultObj.dest = dest;
      }
    }
  };
  return Catalog;
}();
var XRef = function XRefClosure() {
  function XRef(stream, pdfManager) {
    this.stream = stream;
    this.pdfManager = pdfManager;
    this.entries = [];
    this.xrefstms = Object.create(null);
    this.cache = [];
    this.stats = {
      streamTypes: [],
      fontTypes: []
    };
  }
  XRef.prototype = {
    setStartXRef: function XRef_setStartXRef(startXRef) {
      this.startXRefQueue = [startXRef];
    },
    parse: function XRef_parse(recoveryMode) {
      var trailerDict;
      if (!recoveryMode) {
        trailerDict = this.readXRef();
      } else {
        (0, _util.warn)('Indexing all PDF objects');
        trailerDict = this.indexObjects();
      }
      trailerDict.assignXref(this);
      this.trailer = trailerDict;
      var encrypt = trailerDict.get('Encrypt');
      if ((0, _primitives.isDict)(encrypt)) {
        var ids = trailerDict.get('ID');
        var fileId = ids && ids.length ? ids[0] : '';
        encrypt.suppressEncryption = true;
        this.encrypt = new _crypto.CipherTransformFactory(encrypt, fileId, this.pdfManager.password);
      }
      if (!(this.root = trailerDict.get('Root'))) {
        throw new _util.FormatError('Invalid root reference');
      }
    },
    processXRefTable: function XRef_processXRefTable(parser) {
      if (!('tableState' in this)) {
        this.tableState = {
          entryNum: 0,
          streamPos: parser.lexer.stream.pos,
          parserBuf1: parser.buf1,
          parserBuf2: parser.buf2
        };
      }
      var obj = this.readXRefTable(parser);
      if (!(0, _primitives.isCmd)(obj, 'trailer')) {
        throw new _util.FormatError('Invalid XRef table: could not find trailer dictionary');
      }
      var dict = parser.getObj();
      if (!(0, _primitives.isDict)(dict) && dict.dict) {
        dict = dict.dict;
      }
      if (!(0, _primitives.isDict)(dict)) {
        throw new _util.FormatError('Invalid XRef table: could not parse trailer dictionary');
      }
      delete this.tableState;
      return dict;
    },
    readXRefTable: function XRef_readXRefTable(parser) {
      var stream = parser.lexer.stream;
      var tableState = this.tableState;
      stream.pos = tableState.streamPos;
      parser.buf1 = tableState.parserBuf1;
      parser.buf2 = tableState.parserBuf2;
      var obj;
      while (true) {
        if (!('firstEntryNum' in tableState) || !('entryCount' in tableState)) {
          if ((0, _primitives.isCmd)(obj = parser.getObj(), 'trailer')) {
            break;
          }
          tableState.firstEntryNum = obj;
          tableState.entryCount = parser.getObj();
        }
        var first = tableState.firstEntryNum;
        var count = tableState.entryCount;
        if (!(0, _util.isInt)(first) || !(0, _util.isInt)(count)) {
          throw new _util.FormatError('Invalid XRef table: wrong types in subsection header');
        }
        for (var i = tableState.entryNum; i < count; i++) {
          tableState.streamPos = stream.pos;
          tableState.entryNum = i;
          tableState.parserBuf1 = parser.buf1;
          tableState.parserBuf2 = parser.buf2;
          var entry = {};
          entry.offset = parser.getObj();
          entry.gen = parser.getObj();
          var type = parser.getObj();
          if ((0, _primitives.isCmd)(type, 'f')) {
            entry.free = true;
          } else if ((0, _primitives.isCmd)(type, 'n')) {
            entry.uncompressed = true;
          }
          if (!(0, _util.isInt)(entry.offset) || !(0, _util.isInt)(entry.gen) || !(entry.free || entry.uncompressed)) {
            throw new _util.FormatError('Invalid entry in XRef subsection: ' + first + ', ' + count);
          }
          if (i === 0 && entry.free && first === 1) {
            first = 0;
          }
          if (!this.entries[i + first]) {
            this.entries[i + first] = entry;
          }
        }
        tableState.entryNum = 0;
        tableState.streamPos = stream.pos;
        tableState.parserBuf1 = parser.buf1;
        tableState.parserBuf2 = parser.buf2;
        delete tableState.firstEntryNum;
        delete tableState.entryCount;
      }
      if (this.entries[0] && !this.entries[0].free) {
        throw new _util.FormatError('Invalid XRef table: unexpected first object');
      }
      return obj;
    },
    processXRefStream: function XRef_processXRefStream(stream) {
      if (!('streamState' in this)) {
        var streamParameters = stream.dict;
        var byteWidths = streamParameters.get('W');
        var range = streamParameters.get('Index');
        if (!range) {
          range = [0, streamParameters.get('Size')];
        }
        this.streamState = {
          entryRanges: range,
          byteWidths: byteWidths,
          entryNum: 0,
          streamPos: stream.pos
        };
      }
      this.readXRefStream(stream);
      delete this.streamState;
      return stream.dict;
    },
    readXRefStream: function XRef_readXRefStream(stream) {
      var i, j;
      var streamState = this.streamState;
      stream.pos = streamState.streamPos;
      var byteWidths = streamState.byteWidths;
      var typeFieldWidth = byteWidths[0];
      var offsetFieldWidth = byteWidths[1];
      var generationFieldWidth = byteWidths[2];
      var entryRanges = streamState.entryRanges;
      while (entryRanges.length > 0) {
        var first = entryRanges[0];
        var n = entryRanges[1];
        if (!(0, _util.isInt)(first) || !(0, _util.isInt)(n)) {
          throw new _util.FormatError('Invalid XRef range fields: ' + first + ', ' + n);
        }
        if (!(0, _util.isInt)(typeFieldWidth) || !(0, _util.isInt)(offsetFieldWidth) || !(0, _util.isInt)(generationFieldWidth)) {
          throw new _util.FormatError('Invalid XRef entry fields length: ' + first + ', ' + n);
        }
        for (i = streamState.entryNum; i < n; ++i) {
          streamState.entryNum = i;
          streamState.streamPos = stream.pos;
          var type = 0,
              offset = 0,
              generation = 0;
          for (j = 0; j < typeFieldWidth; ++j) {
            type = type << 8 | stream.getByte();
          }
          if (typeFieldWidth === 0) {
            type = 1;
          }
          for (j = 0; j < offsetFieldWidth; ++j) {
            offset = offset << 8 | stream.getByte();
          }
          for (j = 0; j < generationFieldWidth; ++j) {
            generation = generation << 8 | stream.getByte();
          }
          var entry = {};
          entry.offset = offset;
          entry.gen = generation;
          switch (type) {
            case 0:
              entry.free = true;
              break;
            case 1:
              entry.uncompressed = true;
              break;
            case 2:
              break;
            default:
              throw new _util.FormatError('Invalid XRef entry type: ' + type);
          }
          if (!this.entries[first + i]) {
            this.entries[first + i] = entry;
          }
        }
        streamState.entryNum = 0;
        streamState.streamPos = stream.pos;
        entryRanges.splice(0, 2);
      }
    },
    indexObjects: function XRef_indexObjects() {
      var TAB = 0x9,
          LF = 0xA,
          CR = 0xD,
          SPACE = 0x20;
      var PERCENT = 0x25,
          LT = 0x3C;
      function readToken(data, offset) {
        var token = '',
            ch = data[offset];
        while (ch !== LF && ch !== CR && ch !== LT) {
          if (++offset >= data.length) {
            break;
          }
          token += String.fromCharCode(ch);
          ch = data[offset];
        }
        return token;
      }
      function skipUntil(data, offset, what) {
        var length = what.length,
            dataLength = data.length;
        var skipped = 0;
        while (offset < dataLength) {
          var i = 0;
          while (i < length && data[offset + i] === what[i]) {
            ++i;
          }
          if (i >= length) {
            break;
          }
          offset++;
          skipped++;
        }
        return skipped;
      }
      var objRegExp = /^(\d+)\s+(\d+)\s+obj\b/;
      var trailerBytes = new Uint8Array([116, 114, 97, 105, 108, 101, 114]);
      var startxrefBytes = new Uint8Array([115, 116, 97, 114, 116, 120, 114, 101, 102]);
      var endobjBytes = new Uint8Array([101, 110, 100, 111, 98, 106]);
      var xrefBytes = new Uint8Array([47, 88, 82, 101, 102]);
      this.entries.length = 0;
      var stream = this.stream;
      stream.pos = 0;
      var buffer = stream.getBytes();
      var position = stream.start,
          length = buffer.length;
      var trailers = [],
          xrefStms = [];
      while (position < length) {
        var ch = buffer[position];
        if (ch === TAB || ch === LF || ch === CR || ch === SPACE) {
          ++position;
          continue;
        }
        if (ch === PERCENT) {
          do {
            ++position;
            if (position >= length) {
              break;
            }
            ch = buffer[position];
          } while (ch !== LF && ch !== CR);
          continue;
        }
        var token = readToken(buffer, position);
        var m;
        if (token.indexOf('xref') === 0 && (token.length === 4 || /\s/.test(token[4]))) {
          position += skipUntil(buffer, position, trailerBytes);
          trailers.push(position);
          position += skipUntil(buffer, position, startxrefBytes);
        } else if (m = objRegExp.exec(token)) {
          if (typeof this.entries[m[1]] === 'undefined') {
            this.entries[m[1]] = {
              offset: position - stream.start,
              gen: m[2] | 0,
              uncompressed: true
            };
          }
          var contentLength = skipUntil(buffer, position, endobjBytes) + 7;
          var content = buffer.subarray(position, position + contentLength);
          var xrefTagOffset = skipUntil(content, 0, xrefBytes);
          if (xrefTagOffset < contentLength && content[xrefTagOffset + 5] < 64) {
            xrefStms.push(position - stream.start);
            this.xrefstms[position - stream.start] = 1;
          }
          position += contentLength;
        } else if (token.indexOf('trailer') === 0 && (token.length === 7 || /\s/.test(token[7]))) {
          trailers.push(position);
          position += skipUntil(buffer, position, startxrefBytes);
        } else {
          position += token.length + 1;
        }
      }
      var i, ii;
      for (i = 0, ii = xrefStms.length; i < ii; ++i) {
        this.startXRefQueue.push(xrefStms[i]);
        this.readXRef(true);
      }
      var dict;
      for (i = 0, ii = trailers.length; i < ii; ++i) {
        stream.pos = trailers[i];
        var parser = new _parser.Parser(new _parser.Lexer(stream), true, this, true);
        var obj = parser.getObj();
        if (!(0, _primitives.isCmd)(obj, 'trailer')) {
          continue;
        }
        dict = parser.getObj();
        if (!(0, _primitives.isDict)(dict)) {
          continue;
        }
        if (dict.has('ID')) {
          return dict;
        }
      }
      if (dict) {
        return dict;
      }
      throw new _util.InvalidPDFException('Invalid PDF structure');
    },
    readXRef: function XRef_readXRef(recoveryMode) {
      var stream = this.stream;
      try {
        while (this.startXRefQueue.length) {
          var startXRef = this.startXRefQueue[0];
          stream.pos = startXRef + stream.start;
          var parser = new _parser.Parser(new _parser.Lexer(stream), true, this);
          var obj = parser.getObj();
          var dict;
          if ((0, _primitives.isCmd)(obj, 'xref')) {
            dict = this.processXRefTable(parser);
            if (!this.topDict) {
              this.topDict = dict;
            }
            obj = dict.get('XRefStm');
            if ((0, _util.isInt)(obj)) {
              var pos = obj;
              if (!(pos in this.xrefstms)) {
                this.xrefstms[pos] = 1;
                this.startXRefQueue.push(pos);
              }
            }
          } else if ((0, _util.isInt)(obj)) {
            if (!(0, _util.isInt)(parser.getObj()) || !(0, _primitives.isCmd)(parser.getObj(), 'obj') || !(0, _primitives.isStream)(obj = parser.getObj())) {
              throw new _util.FormatError('Invalid XRef stream');
            }
            dict = this.processXRefStream(obj);
            if (!this.topDict) {
              this.topDict = dict;
            }
            if (!dict) {
              throw new _util.FormatError('Failed to read XRef stream');
            }
          } else {
            throw new _util.FormatError('Invalid XRef stream header');
          }
          obj = dict.get('Prev');
          if ((0, _util.isInt)(obj)) {
            this.startXRefQueue.push(obj);
          } else if ((0, _primitives.isRef)(obj)) {
            this.startXRefQueue.push(obj.num);
          }
          this.startXRefQueue.shift();
        }
        return this.topDict;
      } catch (e) {
        if (e instanceof _util.MissingDataException) {
          throw e;
        }
        (0, _util.info)('(while reading XRef): ' + e);
      }
      if (recoveryMode) {
        return;
      }
      throw new _util.XRefParseException();
    },
    getEntry: function XRef_getEntry(i) {
      var xrefEntry = this.entries[i];
      if (xrefEntry && !xrefEntry.free && xrefEntry.offset) {
        return xrefEntry;
      }
      return null;
    },
    fetchIfRef: function XRef_fetchIfRef(obj, suppressEncryption) {
      if (!(0, _primitives.isRef)(obj)) {
        return obj;
      }
      return this.fetch(obj, suppressEncryption);
    },
    fetch: function XRef_fetch(ref, suppressEncryption) {
      if (!(0, _primitives.isRef)(ref)) {
        throw new Error('ref object is not a reference');
      }
      var num = ref.num;
      if (num in this.cache) {
        var cacheEntry = this.cache[num];
        if (cacheEntry instanceof _primitives.Dict && !cacheEntry.objId) {
          cacheEntry.objId = ref.toString();
        }
        return cacheEntry;
      }
      var xrefEntry = this.getEntry(num);
      if (xrefEntry === null) {
        return this.cache[num] = null;
      }
      if (xrefEntry.uncompressed) {
        xrefEntry = this.fetchUncompressed(ref, xrefEntry, suppressEncryption);
      } else {
        xrefEntry = this.fetchCompressed(xrefEntry, suppressEncryption);
      }
      if ((0, _primitives.isDict)(xrefEntry)) {
        xrefEntry.objId = ref.toString();
      } else if ((0, _primitives.isStream)(xrefEntry)) {
        xrefEntry.dict.objId = ref.toString();
      }
      return xrefEntry;
    },
    fetchUncompressed: function XRef_fetchUncompressed(ref, xrefEntry, suppressEncryption) {
      var gen = ref.gen;
      var num = ref.num;
      if (xrefEntry.gen !== gen) {
        throw new _util.FormatError('inconsistent generation in XRef');
      }
      var stream = this.stream.makeSubStream(xrefEntry.offset + this.stream.start);
      var parser = new _parser.Parser(new _parser.Lexer(stream), true, this);
      var obj1 = parser.getObj();
      var obj2 = parser.getObj();
      var obj3 = parser.getObj();
      if (!(0, _util.isInt)(obj1) || parseInt(obj1, 10) !== num || !(0, _util.isInt)(obj2) || parseInt(obj2, 10) !== gen || !(0, _primitives.isCmd)(obj3)) {
        throw new _util.FormatError('bad XRef entry');
      }
      if (!(0, _primitives.isCmd)(obj3, 'obj')) {
        if (obj3.cmd.indexOf('obj') === 0) {
          num = parseInt(obj3.cmd.substring(3), 10);
          if (!isNaN(num)) {
            return num;
          }
        }
        throw new _util.FormatError('bad XRef entry');
      }
      if (this.encrypt && !suppressEncryption) {
        xrefEntry = parser.getObj(this.encrypt.createCipherTransform(num, gen));
      } else {
        xrefEntry = parser.getObj();
      }
      if (!(0, _primitives.isStream)(xrefEntry)) {
        this.cache[num] = xrefEntry;
      }
      return xrefEntry;
    },
    fetchCompressed: function XRef_fetchCompressed(xrefEntry, suppressEncryption) {
      var tableOffset = xrefEntry.offset;
      var stream = this.fetch(new _primitives.Ref(tableOffset, 0));
      if (!(0, _primitives.isStream)(stream)) {
        throw new _util.FormatError('bad ObjStm stream');
      }
      var first = stream.dict.get('First');
      var n = stream.dict.get('N');
      if (!(0, _util.isInt)(first) || !(0, _util.isInt)(n)) {
        throw new _util.FormatError('invalid first and n parameters for ObjStm stream');
      }
      var parser = new _parser.Parser(new _parser.Lexer(stream), false, this);
      parser.allowStreams = true;
      var i,
          entries = [],
          num,
          nums = [];
      for (i = 0; i < n; ++i) {
        num = parser.getObj();
        if (!(0, _util.isInt)(num)) {
          throw new _util.FormatError('invalid object number in the ObjStm stream: ' + num);
        }
        nums.push(num);
        var offset = parser.getObj();
        if (!(0, _util.isInt)(offset)) {
          throw new _util.FormatError('invalid object offset in the ObjStm stream: ' + offset);
        }
      }
      for (i = 0; i < n; ++i) {
        entries.push(parser.getObj());
        if ((0, _primitives.isCmd)(parser.buf1, 'endobj')) {
          parser.shift();
        }
        num = nums[i];
        var entry = this.entries[num];
        if (entry && entry.offset === tableOffset && entry.gen === i) {
          this.cache[num] = entries[i];
        }
      }
      xrefEntry = entries[xrefEntry.gen];
      if (xrefEntry === undefined) {
        throw new _util.FormatError('bad XRef entry for compressed object');
      }
      return xrefEntry;
    },
    fetchIfRefAsync: function XRef_fetchIfRefAsync(obj, suppressEncryption) {
      if (!(0, _primitives.isRef)(obj)) {
        return Promise.resolve(obj);
      }
      return this.fetchAsync(obj, suppressEncryption);
    },
    fetchAsync: function XRef_fetchAsync(ref, suppressEncryption) {
      var streamManager = this.stream.manager;
      var xref = this;
      return new Promise(function tryFetch(resolve, reject) {
        try {
          resolve(xref.fetch(ref, suppressEncryption));
        } catch (e) {
          if (e instanceof _util.MissingDataException) {
            streamManager.requestRange(e.begin, e.end).then(function () {
              tryFetch(resolve, reject);
            }, reject);
            return;
          }
          reject(e);
        }
      });
    },
    getCatalogObj: function XRef_getCatalogObj() {
      return this.root;
    }
  };
  return XRef;
}();
var NameOrNumberTree = function NameOrNumberTreeClosure() {
  function NameOrNumberTree(root, xref) {
    throw new Error('Cannot initialize NameOrNumberTree.');
  }
  NameOrNumberTree.prototype = {
    getAll: function NameOrNumberTree_getAll() {
      var dict = Object.create(null);
      if (!this.root) {
        return dict;
      }
      var xref = this.xref;
      var processed = new _primitives.RefSet();
      processed.put(this.root);
      var queue = [this.root];
      while (queue.length > 0) {
        var i, n;
        var obj = xref.fetchIfRef(queue.shift());
        if (!(0, _primitives.isDict)(obj)) {
          continue;
        }
        if (obj.has('Kids')) {
          var kids = obj.get('Kids');
          for (i = 0, n = kids.length; i < n; i++) {
            var kid = kids[i];
            if (processed.has(kid)) {
              throw new _util.FormatError('Duplicate entry in "' + this._type + '" tree.');
            }
            queue.push(kid);
            processed.put(kid);
          }
          continue;
        }
        var entries = obj.get(this._type);
        if ((0, _util.isArray)(entries)) {
          for (i = 0, n = entries.length; i < n; i += 2) {
            dict[xref.fetchIfRef(entries[i])] = xref.fetchIfRef(entries[i + 1]);
          }
        }
      }
      return dict;
    },
    get: function NameOrNumberTree_get(key) {
      if (!this.root) {
        return null;
      }
      var xref = this.xref;
      var kidsOrEntries = xref.fetchIfRef(this.root);
      var loopCount = 0;
      var MAX_LEVELS = 10;
      var l, r, m;
      while (kidsOrEntries.has('Kids')) {
        if (++loopCount > MAX_LEVELS) {
          (0, _util.warn)('Search depth limit reached for "' + this._type + '" tree.');
          return null;
        }
        var kids = kidsOrEntries.get('Kids');
        if (!(0, _util.isArray)(kids)) {
          return null;
        }
        l = 0;
        r = kids.length - 1;
        while (l <= r) {
          m = l + r >> 1;
          var kid = xref.fetchIfRef(kids[m]);
          var limits = kid.get('Limits');
          if (key < xref.fetchIfRef(limits[0])) {
            r = m - 1;
          } else if (key > xref.fetchIfRef(limits[1])) {
            l = m + 1;
          } else {
            kidsOrEntries = xref.fetchIfRef(kids[m]);
            break;
          }
        }
        if (l > r) {
          return null;
        }
      }
      var entries = kidsOrEntries.get(this._type);
      if ((0, _util.isArray)(entries)) {
        l = 0;
        r = entries.length - 2;
        while (l <= r) {
          m = l + r & ~1;
          var currentKey = xref.fetchIfRef(entries[m]);
          if (key < currentKey) {
            r = m - 2;
          } else if (key > currentKey) {
            l = m + 2;
          } else {
            return xref.fetchIfRef(entries[m + 1]);
          }
        }
      }
      return null;
    }
  };
  return NameOrNumberTree;
}();
var NameTree = function NameTreeClosure() {
  function NameTree(root, xref) {
    this.root = root;
    this.xref = xref;
    this._type = 'Names';
  }
  _util.Util.inherit(NameTree, NameOrNumberTree, {});
  return NameTree;
}();
var NumberTree = function NumberTreeClosure() {
  function NumberTree(root, xref) {
    this.root = root;
    this.xref = xref;
    this._type = 'Nums';
  }
  _util.Util.inherit(NumberTree, NameOrNumberTree, {});
  return NumberTree;
}();
var FileSpec = function FileSpecClosure() {
  function FileSpec(root, xref) {
    if (!root || !(0, _primitives.isDict)(root)) {
      return;
    }
    this.xref = xref;
    this.root = root;
    if (root.has('FS')) {
      this.fs = root.get('FS');
    }
    this.description = root.has('Desc') ? (0, _util.stringToPDFString)(root.get('Desc')) : '';
    if (root.has('RF')) {
      (0, _util.warn)('Related file specifications are not supported');
    }
    this.contentAvailable = true;
    if (!root.has('EF')) {
      this.contentAvailable = false;
      (0, _util.warn)('Non-embedded file specifications are not supported');
    }
  }
  function pickPlatformItem(dict) {
    if (dict.has('UF')) {
      return dict.get('UF');
    } else if (dict.has('F')) {
      return dict.get('F');
    } else if (dict.has('Unix')) {
      return dict.get('Unix');
    } else if (dict.has('Mac')) {
      return dict.get('Mac');
    } else if (dict.has('DOS')) {
      return dict.get('DOS');
    }
    return null;
  }
  FileSpec.prototype = {
    get filename() {
      if (!this._filename && this.root) {
        var filename = pickPlatformItem(this.root) || 'unnamed';
        this._filename = (0, _util.stringToPDFString)(filename).replace(/\\\\/g, '\\').replace(/\\\//g, '/').replace(/\\/g, '/');
      }
      return this._filename;
    },
    get content() {
      if (!this.contentAvailable) {
        return null;
      }
      if (!this.contentRef && this.root) {
        this.contentRef = pickPlatformItem(this.root.get('EF'));
      }
      var content = null;
      if (this.contentRef) {
        var xref = this.xref;
        var fileObj = xref.fetchIfRef(this.contentRef);
        if (fileObj && (0, _primitives.isStream)(fileObj)) {
          content = fileObj.getBytes();
        } else {
          (0, _util.warn)('Embedded file specification points to non-existing/invalid ' + 'content');
        }
      } else {
        (0, _util.warn)('Embedded file specification does not have a content');
      }
      return content;
    },
    get serializable() {
      return {
        filename: this.filename,
        content: this.content
      };
    }
  };
  return FileSpec;
}();
var ObjectLoader = function () {
  function mayHaveChildren(value) {
    return (0, _primitives.isRef)(value) || (0, _primitives.isDict)(value) || (0, _util.isArray)(value) || (0, _primitives.isStream)(value);
  }
  function addChildren(node, nodesToVisit) {
    if ((0, _primitives.isDict)(node) || (0, _primitives.isStream)(node)) {
      var dict = (0, _primitives.isDict)(node) ? node : node.dict;
      var dictKeys = dict.getKeys();
      for (var i = 0, ii = dictKeys.length; i < ii; i++) {
        var rawValue = dict.getRaw(dictKeys[i]);
        if (mayHaveChildren(rawValue)) {
          nodesToVisit.push(rawValue);
        }
      }
    } else if ((0, _util.isArray)(node)) {
      for (var _i = 0, _ii = node.length; _i < _ii; _i++) {
        var value = node[_i];
        if (mayHaveChildren(value)) {
          nodesToVisit.push(value);
        }
      }
    }
  }
  function ObjectLoader(dict, keys, xref) {
    this.dict = dict;
    this.keys = keys;
    this.xref = xref;
    this.refSet = null;
    this.capability = null;
  }
  ObjectLoader.prototype = {
    load: function load() {
      this.capability = (0, _util.createPromiseCapability)();
      if (!(this.xref.stream instanceof _chunked_stream.ChunkedStream) || this.xref.stream.getMissingChunks().length === 0) {
        this.capability.resolve();
        return this.capability.promise;
      }
      var keys = this.keys,
          dict = this.dict;

      this.refSet = new _primitives.RefSet();
      var nodesToVisit = [];
      for (var i = 0, ii = keys.length; i < ii; i++) {
        var rawValue = dict.getRaw(keys[i]);
        if (rawValue !== undefined) {
          nodesToVisit.push(rawValue);
        }
      }
      this._walk(nodesToVisit);
      return this.capability.promise;
    },
    _walk: function _walk(nodesToVisit) {
      var _this3 = this;

      var nodesToRevisit = [];
      var pendingRequests = [];
      while (nodesToVisit.length) {
        var currentNode = nodesToVisit.pop();
        if ((0, _primitives.isRef)(currentNode)) {
          if (this.refSet.has(currentNode)) {
            continue;
          }
          try {
            this.refSet.put(currentNode);
            currentNode = this.xref.fetch(currentNode);
          } catch (ex) {
            if (!(ex instanceof _util.MissingDataException)) {
              throw ex;
            }
            nodesToRevisit.push(currentNode);
            pendingRequests.push({
              begin: ex.begin,
              end: ex.end
            });
          }
        }
        if (currentNode && currentNode.getBaseStreams) {
          var baseStreams = currentNode.getBaseStreams();
          var foundMissingData = false;
          for (var i = 0, ii = baseStreams.length; i < ii; i++) {
            var stream = baseStreams[i];
            if (stream.getMissingChunks && stream.getMissingChunks().length) {
              foundMissingData = true;
              pendingRequests.push({
                begin: stream.start,
                end: stream.end
              });
            }
          }
          if (foundMissingData) {
            nodesToRevisit.push(currentNode);
          }
        }
        addChildren(currentNode, nodesToVisit);
      }
      if (pendingRequests.length) {
        this.xref.stream.manager.requestRanges(pendingRequests).then(function () {
          for (var _i2 = 0, _ii2 = nodesToRevisit.length; _i2 < _ii2; _i2++) {
            var node = nodesToRevisit[_i2];
            if ((0, _primitives.isRef)(node)) {
              _this3.refSet.remove(node);
            }
          }
          _this3._walk(nodesToRevisit);
        }, this.capability.reject);
        return;
      }
      this.refSet = null;
      this.capability.resolve();
    }
  };
  return ObjectLoader;
}();
exports.Catalog = Catalog;
exports.ObjectLoader = ObjectLoader;
exports.XRef = XRef;
exports.FileSpec = FileSpec;

/***/ }),
/* 16 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSupplementalGlyphMapForArialBlack = exports.getGlyphMapForStandardFonts = exports.getSymbolsFonts = exports.getSerifFonts = exports.getNonStdFontMap = exports.getStdFontMap = undefined;

var _util = __w_pdfjs_require__(0);

var getStdFontMap = (0, _util.getLookupTableFactory)(function (t) {
  t['ArialNarrow'] = 'Helvetica';
  t['ArialNarrow-Bold'] = 'Helvetica-Bold';
  t['ArialNarrow-BoldItalic'] = 'Helvetica-BoldOblique';
  t['ArialNarrow-Italic'] = 'Helvetica-Oblique';
  t['ArialBlack'] = 'Helvetica';
  t['ArialBlack-Bold'] = 'Helvetica-Bold';
  t['ArialBlack-BoldItalic'] = 'Helvetica-BoldOblique';
  t['ArialBlack-Italic'] = 'Helvetica-Oblique';
  t['Arial-Black'] = 'Helvetica';
  t['Arial-Black-Bold'] = 'Helvetica-Bold';
  t['Arial-Black-BoldItalic'] = 'Helvetica-BoldOblique';
  t['Arial-Black-Italic'] = 'Helvetica-Oblique';
  t['Arial'] = 'Helvetica';
  t['Arial-Bold'] = 'Helvetica-Bold';
  t['Arial-BoldItalic'] = 'Helvetica-BoldOblique';
  t['Arial-Italic'] = 'Helvetica-Oblique';
  t['Arial-BoldItalicMT'] = 'Helvetica-BoldOblique';
  t['Arial-BoldMT'] = 'Helvetica-Bold';
  t['Arial-ItalicMT'] = 'Helvetica-Oblique';
  t['ArialMT'] = 'Helvetica';
  t['Courier-Bold'] = 'Courier-Bold';
  t['Courier-BoldItalic'] = 'Courier-BoldOblique';
  t['Courier-Italic'] = 'Courier-Oblique';
  t['CourierNew'] = 'Courier';
  t['CourierNew-Bold'] = 'Courier-Bold';
  t['CourierNew-BoldItalic'] = 'Courier-BoldOblique';
  t['CourierNew-Italic'] = 'Courier-Oblique';
  t['CourierNewPS-BoldItalicMT'] = 'Courier-BoldOblique';
  t['CourierNewPS-BoldMT'] = 'Courier-Bold';
  t['CourierNewPS-ItalicMT'] = 'Courier-Oblique';
  t['CourierNewPSMT'] = 'Courier';
  t['Helvetica'] = 'Helvetica';
  t['Helvetica-Bold'] = 'Helvetica-Bold';
  t['Helvetica-BoldItalic'] = 'Helvetica-BoldOblique';
  t['Helvetica-BoldOblique'] = 'Helvetica-BoldOblique';
  t['Helvetica-Italic'] = 'Helvetica-Oblique';
  t['Helvetica-Oblique'] = 'Helvetica-Oblique';
  t['SegoeUISymbol'] = 'Helvetica';
  t['Symbol-Bold'] = 'Symbol';
  t['Symbol-BoldItalic'] = 'Symbol';
  t['Symbol-Italic'] = 'Symbol';
  t['TimesNewRoman'] = 'Times-Roman';
  t['TimesNewRoman-Bold'] = 'Times-Bold';
  t['TimesNewRoman-BoldItalic'] = 'Times-BoldItalic';
  t['TimesNewRoman-Italic'] = 'Times-Italic';
  t['TimesNewRomanPS'] = 'Times-Roman';
  t['TimesNewRomanPS-Bold'] = 'Times-Bold';
  t['TimesNewRomanPS-BoldItalic'] = 'Times-BoldItalic';
  t['TimesNewRomanPS-BoldItalicMT'] = 'Times-BoldItalic';
  t['TimesNewRomanPS-BoldMT'] = 'Times-Bold';
  t['TimesNewRomanPS-Italic'] = 'Times-Italic';
  t['TimesNewRomanPS-ItalicMT'] = 'Times-Italic';
  t['TimesNewRomanPSMT'] = 'Times-Roman';
  t['TimesNewRomanPSMT-Bold'] = 'Times-Bold';
  t['TimesNewRomanPSMT-BoldItalic'] = 'Times-BoldItalic';
  t['TimesNewRomanPSMT-Italic'] = 'Times-Italic';
});
var getNonStdFontMap = (0, _util.getLookupTableFactory)(function (t) {
  t['CenturyGothic'] = 'Helvetica';
  t['CenturyGothic-Bold'] = 'Helvetica-Bold';
  t['CenturyGothic-BoldItalic'] = 'Helvetica-BoldOblique';
  t['CenturyGothic-Italic'] = 'Helvetica-Oblique';
  t['ComicSansMS'] = 'Comic Sans MS';
  t['ComicSansMS-Bold'] = 'Comic Sans MS-Bold';
  t['ComicSansMS-BoldItalic'] = 'Comic Sans MS-BoldItalic';
  t['ComicSansMS-Italic'] = 'Comic Sans MS-Italic';
  t['LucidaConsole'] = 'Courier';
  t['LucidaConsole-Bold'] = 'Courier-Bold';
  t['LucidaConsole-BoldItalic'] = 'Courier-BoldOblique';
  t['LucidaConsole-Italic'] = 'Courier-Oblique';
  t['MS-Gothic'] = 'MS Gothic';
  t['MS-Gothic-Bold'] = 'MS Gothic-Bold';
  t['MS-Gothic-BoldItalic'] = 'MS Gothic-BoldItalic';
  t['MS-Gothic-Italic'] = 'MS Gothic-Italic';
  t['MS-Mincho'] = 'MS Mincho';
  t['MS-Mincho-Bold'] = 'MS Mincho-Bold';
  t['MS-Mincho-BoldItalic'] = 'MS Mincho-BoldItalic';
  t['MS-Mincho-Italic'] = 'MS Mincho-Italic';
  t['MS-PGothic'] = 'MS PGothic';
  t['MS-PGothic-Bold'] = 'MS PGothic-Bold';
  t['MS-PGothic-BoldItalic'] = 'MS PGothic-BoldItalic';
  t['MS-PGothic-Italic'] = 'MS PGothic-Italic';
  t['MS-PMincho'] = 'MS PMincho';
  t['MS-PMincho-Bold'] = 'MS PMincho-Bold';
  t['MS-PMincho-BoldItalic'] = 'MS PMincho-BoldItalic';
  t['MS-PMincho-Italic'] = 'MS PMincho-Italic';
  t['NuptialScript'] = 'Times-Italic';
  t['Wingdings'] = 'ZapfDingbats';
});
var getSerifFonts = (0, _util.getLookupTableFactory)(function (t) {
  t['Adobe Jenson'] = true;
  t['Adobe Text'] = true;
  t['Albertus'] = true;
  t['Aldus'] = true;
  t['Alexandria'] = true;
  t['Algerian'] = true;
  t['American Typewriter'] = true;
  t['Antiqua'] = true;
  t['Apex'] = true;
  t['Arno'] = true;
  t['Aster'] = true;
  t['Aurora'] = true;
  t['Baskerville'] = true;
  t['Bell'] = true;
  t['Bembo'] = true;
  t['Bembo Schoolbook'] = true;
  t['Benguiat'] = true;
  t['Berkeley Old Style'] = true;
  t['Bernhard Modern'] = true;
  t['Berthold City'] = true;
  t['Bodoni'] = true;
  t['Bauer Bodoni'] = true;
  t['Book Antiqua'] = true;
  t['Bookman'] = true;
  t['Bordeaux Roman'] = true;
  t['Californian FB'] = true;
  t['Calisto'] = true;
  t['Calvert'] = true;
  t['Capitals'] = true;
  t['Cambria'] = true;
  t['Cartier'] = true;
  t['Caslon'] = true;
  t['Catull'] = true;
  t['Centaur'] = true;
  t['Century Old Style'] = true;
  t['Century Schoolbook'] = true;
  t['Chaparral'] = true;
  t['Charis SIL'] = true;
  t['Cheltenham'] = true;
  t['Cholla Slab'] = true;
  t['Clarendon'] = true;
  t['Clearface'] = true;
  t['Cochin'] = true;
  t['Colonna'] = true;
  t['Computer Modern'] = true;
  t['Concrete Roman'] = true;
  t['Constantia'] = true;
  t['Cooper Black'] = true;
  t['Corona'] = true;
  t['Ecotype'] = true;
  t['Egyptienne'] = true;
  t['Elephant'] = true;
  t['Excelsior'] = true;
  t['Fairfield'] = true;
  t['FF Scala'] = true;
  t['Folkard'] = true;
  t['Footlight'] = true;
  t['FreeSerif'] = true;
  t['Friz Quadrata'] = true;
  t['Garamond'] = true;
  t['Gentium'] = true;
  t['Georgia'] = true;
  t['Gloucester'] = true;
  t['Goudy Old Style'] = true;
  t['Goudy Schoolbook'] = true;
  t['Goudy Pro Font'] = true;
  t['Granjon'] = true;
  t['Guardian Egyptian'] = true;
  t['Heather'] = true;
  t['Hercules'] = true;
  t['High Tower Text'] = true;
  t['Hiroshige'] = true;
  t['Hoefler Text'] = true;
  t['Humana Serif'] = true;
  t['Imprint'] = true;
  t['Ionic No. 5'] = true;
  t['Janson'] = true;
  t['Joanna'] = true;
  t['Korinna'] = true;
  t['Lexicon'] = true;
  t['Liberation Serif'] = true;
  t['Linux Libertine'] = true;
  t['Literaturnaya'] = true;
  t['Lucida'] = true;
  t['Lucida Bright'] = true;
  t['Melior'] = true;
  t['Memphis'] = true;
  t['Miller'] = true;
  t['Minion'] = true;
  t['Modern'] = true;
  t['Mona Lisa'] = true;
  t['Mrs Eaves'] = true;
  t['MS Serif'] = true;
  t['Museo Slab'] = true;
  t['New York'] = true;
  t['Nimbus Roman'] = true;
  t['NPS Rawlinson Roadway'] = true;
  t['NuptialScript'] = true;
  t['Palatino'] = true;
  t['Perpetua'] = true;
  t['Plantin'] = true;
  t['Plantin Schoolbook'] = true;
  t['Playbill'] = true;
  t['Poor Richard'] = true;
  t['Rawlinson Roadway'] = true;
  t['Renault'] = true;
  t['Requiem'] = true;
  t['Rockwell'] = true;
  t['Roman'] = true;
  t['Rotis Serif'] = true;
  t['Sabon'] = true;
  t['Scala'] = true;
  t['Seagull'] = true;
  t['Sistina'] = true;
  t['Souvenir'] = true;
  t['STIX'] = true;
  t['Stone Informal'] = true;
  t['Stone Serif'] = true;
  t['Sylfaen'] = true;
  t['Times'] = true;
  t['Trajan'] = true;
  t['Trinité'] = true;
  t['Trump Mediaeval'] = true;
  t['Utopia'] = true;
  t['Vale Type'] = true;
  t['Bitstream Vera'] = true;
  t['Vera Serif'] = true;
  t['Versailles'] = true;
  t['Wanted'] = true;
  t['Weiss'] = true;
  t['Wide Latin'] = true;
  t['Windsor'] = true;
  t['XITS'] = true;
});
var getSymbolsFonts = (0, _util.getLookupTableFactory)(function (t) {
  t['Dingbats'] = true;
  t['Symbol'] = true;
  t['ZapfDingbats'] = true;
});
var getGlyphMapForStandardFonts = (0, _util.getLookupTableFactory)(function (t) {
  t[2] = 10;
  t[3] = 32;
  t[4] = 33;
  t[5] = 34;
  t[6] = 35;
  t[7] = 36;
  t[8] = 37;
  t[9] = 38;
  t[10] = 39;
  t[11] = 40;
  t[12] = 41;
  t[13] = 42;
  t[14] = 43;
  t[15] = 44;
  t[16] = 45;
  t[17] = 46;
  t[18] = 47;
  t[19] = 48;
  t[20] = 49;
  t[21] = 50;
  t[22] = 51;
  t[23] = 52;
  t[24] = 53;
  t[25] = 54;
  t[26] = 55;
  t[27] = 56;
  t[28] = 57;
  t[29] = 58;
  t[30] = 894;
  t[31] = 60;
  t[32] = 61;
  t[33] = 62;
  t[34] = 63;
  t[35] = 64;
  t[36] = 65;
  t[37] = 66;
  t[38] = 67;
  t[39] = 68;
  t[40] = 69;
  t[41] = 70;
  t[42] = 71;
  t[43] = 72;
  t[44] = 73;
  t[45] = 74;
  t[46] = 75;
  t[47] = 76;
  t[48] = 77;
  t[49] = 78;
  t[50] = 79;
  t[51] = 80;
  t[52] = 81;
  t[53] = 82;
  t[54] = 83;
  t[55] = 84;
  t[56] = 85;
  t[57] = 86;
  t[58] = 87;
  t[59] = 88;
  t[60] = 89;
  t[61] = 90;
  t[62] = 91;
  t[63] = 92;
  t[64] = 93;
  t[65] = 94;
  t[66] = 95;
  t[67] = 96;
  t[68] = 97;
  t[69] = 98;
  t[70] = 99;
  t[71] = 100;
  t[72] = 101;
  t[73] = 102;
  t[74] = 103;
  t[75] = 104;
  t[76] = 105;
  t[77] = 106;
  t[78] = 107;
  t[79] = 108;
  t[80] = 109;
  t[81] = 110;
  t[82] = 111;
  t[83] = 112;
  t[84] = 113;
  t[85] = 114;
  t[86] = 115;
  t[87] = 116;
  t[88] = 117;
  t[89] = 118;
  t[90] = 119;
  t[91] = 120;
  t[92] = 121;
  t[93] = 122;
  t[94] = 123;
  t[95] = 124;
  t[96] = 125;
  t[97] = 126;
  t[98] = 196;
  t[99] = 197;
  t[100] = 199;
  t[101] = 201;
  t[102] = 209;
  t[103] = 214;
  t[104] = 220;
  t[105] = 225;
  t[106] = 224;
  t[107] = 226;
  t[108] = 228;
  t[109] = 227;
  t[110] = 229;
  t[111] = 231;
  t[112] = 233;
  t[113] = 232;
  t[114] = 234;
  t[115] = 235;
  t[116] = 237;
  t[117] = 236;
  t[118] = 238;
  t[119] = 239;
  t[120] = 241;
  t[121] = 243;
  t[122] = 242;
  t[123] = 244;
  t[124] = 246;
  t[125] = 245;
  t[126] = 250;
  t[127] = 249;
  t[128] = 251;
  t[129] = 252;
  t[130] = 8224;
  t[131] = 176;
  t[132] = 162;
  t[133] = 163;
  t[134] = 167;
  t[135] = 8226;
  t[136] = 182;
  t[137] = 223;
  t[138] = 174;
  t[139] = 169;
  t[140] = 8482;
  t[141] = 180;
  t[142] = 168;
  t[143] = 8800;
  t[144] = 198;
  t[145] = 216;
  t[146] = 8734;
  t[147] = 177;
  t[148] = 8804;
  t[149] = 8805;
  t[150] = 165;
  t[151] = 181;
  t[152] = 8706;
  t[153] = 8721;
  t[154] = 8719;
  t[156] = 8747;
  t[157] = 170;
  t[158] = 186;
  t[159] = 8486;
  t[160] = 230;
  t[161] = 248;
  t[162] = 191;
  t[163] = 161;
  t[164] = 172;
  t[165] = 8730;
  t[166] = 402;
  t[167] = 8776;
  t[168] = 8710;
  t[169] = 171;
  t[170] = 187;
  t[171] = 8230;
  t[210] = 218;
  t[223] = 711;
  t[224] = 321;
  t[225] = 322;
  t[227] = 353;
  t[229] = 382;
  t[234] = 253;
  t[252] = 263;
  t[253] = 268;
  t[254] = 269;
  t[258] = 258;
  t[260] = 260;
  t[261] = 261;
  t[265] = 280;
  t[266] = 281;
  t[268] = 283;
  t[269] = 313;
  t[275] = 323;
  t[276] = 324;
  t[278] = 328;
  t[284] = 345;
  t[285] = 346;
  t[286] = 347;
  t[292] = 367;
  t[295] = 377;
  t[296] = 378;
  t[298] = 380;
  t[305] = 963;
  t[306] = 964;
  t[307] = 966;
  t[308] = 8215;
  t[309] = 8252;
  t[310] = 8319;
  t[311] = 8359;
  t[312] = 8592;
  t[313] = 8593;
  t[337] = 9552;
  t[493] = 1039;
  t[494] = 1040;
  t[705] = 1524;
  t[706] = 8362;
  t[710] = 64288;
  t[711] = 64298;
  t[759] = 1617;
  t[761] = 1776;
  t[763] = 1778;
  t[775] = 1652;
  t[777] = 1764;
  t[778] = 1780;
  t[779] = 1781;
  t[780] = 1782;
  t[782] = 771;
  t[783] = 64726;
  t[786] = 8363;
  t[788] = 8532;
  t[790] = 768;
  t[791] = 769;
  t[792] = 768;
  t[795] = 803;
  t[797] = 64336;
  t[798] = 64337;
  t[799] = 64342;
  t[800] = 64343;
  t[801] = 64344;
  t[802] = 64345;
  t[803] = 64362;
  t[804] = 64363;
  t[805] = 64364;
  t[2424] = 7821;
  t[2425] = 7822;
  t[2426] = 7823;
  t[2427] = 7824;
  t[2428] = 7825;
  t[2429] = 7826;
  t[2430] = 7827;
  t[2433] = 7682;
  t[2678] = 8045;
  t[2679] = 8046;
  t[2830] = 1552;
  t[2838] = 686;
  t[2840] = 751;
  t[2842] = 753;
  t[2843] = 754;
  t[2844] = 755;
  t[2846] = 757;
  t[2856] = 767;
  t[2857] = 848;
  t[2858] = 849;
  t[2862] = 853;
  t[2863] = 854;
  t[2864] = 855;
  t[2865] = 861;
  t[2866] = 862;
  t[2906] = 7460;
  t[2908] = 7462;
  t[2909] = 7463;
  t[2910] = 7464;
  t[2912] = 7466;
  t[2913] = 7467;
  t[2914] = 7468;
  t[2916] = 7470;
  t[2917] = 7471;
  t[2918] = 7472;
  t[2920] = 7474;
  t[2921] = 7475;
  t[2922] = 7476;
  t[2924] = 7478;
  t[2925] = 7479;
  t[2926] = 7480;
  t[2928] = 7482;
  t[2929] = 7483;
  t[2930] = 7484;
  t[2932] = 7486;
  t[2933] = 7487;
  t[2934] = 7488;
  t[2936] = 7490;
  t[2937] = 7491;
  t[2938] = 7492;
  t[2940] = 7494;
  t[2941] = 7495;
  t[2942] = 7496;
  t[2944] = 7498;
  t[2946] = 7500;
  t[2948] = 7502;
  t[2950] = 7504;
  t[2951] = 7505;
  t[2952] = 7506;
  t[2954] = 7508;
  t[2955] = 7509;
  t[2956] = 7510;
  t[2958] = 7512;
  t[2959] = 7513;
  t[2960] = 7514;
  t[2962] = 7516;
  t[2963] = 7517;
  t[2964] = 7518;
  t[2966] = 7520;
  t[2967] = 7521;
  t[2968] = 7522;
  t[2970] = 7524;
  t[2971] = 7525;
  t[2972] = 7526;
  t[2974] = 7528;
  t[2975] = 7529;
  t[2976] = 7530;
  t[2978] = 1537;
  t[2979] = 1538;
  t[2980] = 1539;
  t[2982] = 1549;
  t[2983] = 1551;
  t[2984] = 1552;
  t[2986] = 1554;
  t[2987] = 1555;
  t[2988] = 1556;
  t[2990] = 1623;
  t[2991] = 1624;
  t[2995] = 1775;
  t[2999] = 1791;
  t[3002] = 64290;
  t[3003] = 64291;
  t[3004] = 64292;
  t[3006] = 64294;
  t[3007] = 64295;
  t[3008] = 64296;
  t[3011] = 1900;
  t[3014] = 8223;
  t[3015] = 8244;
  t[3017] = 7532;
  t[3018] = 7533;
  t[3019] = 7534;
  t[3075] = 7590;
  t[3076] = 7591;
  t[3079] = 7594;
  t[3080] = 7595;
  t[3083] = 7598;
  t[3084] = 7599;
  t[3087] = 7602;
  t[3088] = 7603;
  t[3091] = 7606;
  t[3092] = 7607;
  t[3095] = 7610;
  t[3096] = 7611;
  t[3099] = 7614;
  t[3100] = 7615;
  t[3103] = 7618;
  t[3104] = 7619;
  t[3107] = 8337;
  t[3108] = 8338;
  t[3116] = 1884;
  t[3119] = 1885;
  t[3120] = 1885;
  t[3123] = 1886;
  t[3124] = 1886;
  t[3127] = 1887;
  t[3128] = 1887;
  t[3131] = 1888;
  t[3132] = 1888;
  t[3135] = 1889;
  t[3136] = 1889;
  t[3139] = 1890;
  t[3140] = 1890;
  t[3143] = 1891;
  t[3144] = 1891;
  t[3147] = 1892;
  t[3148] = 1892;
  t[3153] = 580;
  t[3154] = 581;
  t[3157] = 584;
  t[3158] = 585;
  t[3161] = 588;
  t[3162] = 589;
  t[3165] = 891;
  t[3166] = 892;
  t[3169] = 1274;
  t[3170] = 1275;
  t[3173] = 1278;
  t[3174] = 1279;
  t[3181] = 7622;
  t[3182] = 7623;
  t[3282] = 11799;
  t[3316] = 578;
  t[3379] = 42785;
  t[3393] = 1159;
  t[3416] = 8377;
});
var getSupplementalGlyphMapForArialBlack = (0, _util.getLookupTableFactory)(function (t) {
  t[227] = 322;
  t[264] = 261;
  t[291] = 346;
});
exports.getStdFontMap = getStdFontMap;
exports.getNonStdFontMap = getNonStdFontMap;
exports.getSerifFonts = getSerifFonts;
exports.getSymbolsFonts = getSymbolsFonts;
exports.getGlyphMapForStandardFonts = getGlyphMapForStandardFonts;
exports.getSupplementalGlyphMapForArialBlack = getSupplementalGlyphMapForArialBlack;

/***/ }),
/* 17 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkerMessageHandler = exports.WorkerTask = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _util = __w_pdfjs_require__(0);

var _pdf_manager = __w_pdfjs_require__(32);

var _primitives = __w_pdfjs_require__(1);

var WorkerTask = function WorkerTaskClosure() {
  function WorkerTask(name) {
    this.name = name;
    this.terminated = false;
    this._capability = (0, _util.createPromiseCapability)();
  }
  WorkerTask.prototype = {
    get finished() {
      return this._capability.promise;
    },
    finish: function finish() {
      this._capability.resolve();
    },
    terminate: function terminate() {
      this.terminated = true;
    },
    ensureNotTerminated: function ensureNotTerminated() {
      if (this.terminated) {
        throw new Error('Worker task was terminated');
      }
    }
  };
  return WorkerTask;
}();
;
var PDFWorkerStream = function PDFWorkerStreamClosure() {
  function PDFWorkerStream(msgHandler) {
    this._msgHandler = msgHandler;
    this._contentLength = null;
    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }
  PDFWorkerStream.prototype = {
    getFullReader: function getFullReader() {
      (0, _util.assert)(!this._fullRequestReader);
      this._fullRequestReader = new PDFWorkerStreamReader(this._msgHandler);
      return this._fullRequestReader;
    },
    getRangeReader: function getRangeReader(begin, end) {
      var reader = new PDFWorkerStreamRangeReader(begin, end, this._msgHandler);
      this._rangeRequestReaders.push(reader);
      return reader;
    },
    cancelAllRequests: function cancelAllRequests(reason) {
      if (this._fullRequestReader) {
        this._fullRequestReader.cancel(reason);
      }
      var readers = this._rangeRequestReaders.slice(0);
      readers.forEach(function (reader) {
        reader.cancel(reason);
      });
    }
  };
  function PDFWorkerStreamReader(msgHandler) {
    var _this = this;

    this._msgHandler = msgHandler;
    this._contentLength = null;
    this._isRangeSupported = false;
    this._isStreamingSupported = false;
    var readableStream = this._msgHandler.sendWithStream('GetReader');
    this._reader = readableStream.getReader();
    this._headersReady = this._msgHandler.sendWithPromise('ReaderHeadersReady').then(function (data) {
      _this._isStreamingSupported = data.isStreamingSupported;
      _this._isRangeSupported = data.isRangeSupported;
      _this._contentLength = data.contentLength;
    });
  }
  PDFWorkerStreamReader.prototype = {
    get headersReady() {
      return this._headersReady;
    },
    get contentLength() {
      return this._contentLength;
    },
    get isStreamingSupported() {
      return this._isStreamingSupported;
    },
    get isRangeSupported() {
      return this._isRangeSupported;
    },
    read: function read() {
      return this._reader.read().then(function (_ref) {
        var value = _ref.value,
            done = _ref.done;

        if (done) {
          return {
            value: undefined,
            done: true
          };
        }
        return {
          value: value.buffer,
          done: false
        };
      });
    },
    cancel: function cancel(reason) {
      this._reader.cancel(reason);
    }
  };
  function PDFWorkerStreamRangeReader(begin, end, msgHandler) {
    this._msgHandler = msgHandler;
    this.onProgress = null;
    var readableStream = this._msgHandler.sendWithStream('GetRangeReader', {
      begin: begin,
      end: end
    });
    this._reader = readableStream.getReader();
  }
  PDFWorkerStreamRangeReader.prototype = {
    get isStreamingSupported() {
      return false;
    },
    read: function read() {
      return this._reader.read().then(function (_ref2) {
        var value = _ref2.value,
            done = _ref2.done;

        if (done) {
          return {
            value: undefined,
            done: true
          };
        }
        return {
          value: value.buffer,
          done: false
        };
      });
    },
    cancel: function cancel(reason) {
      this._reader.cancel(reason);
    }
  };
  return PDFWorkerStream;
}();
var WorkerMessageHandler = {
  setup: function setup(handler, port) {
    var testMessageProcessed = false;
    handler.on('test', function wphSetupTest(data) {
      if (testMessageProcessed) {
        return;
      }
      testMessageProcessed = true;
      if (!(data instanceof Uint8Array)) {
        handler.send('test', 'main', false);
        return;
      }
      var supportTransfers = data[0] === 255;
      handler.postMessageTransfers = supportTransfers;
      var xhr = new XMLHttpRequest();
      var responseExists = 'response' in xhr;
      try {
        xhr.responseType;
      } catch (e) {
        responseExists = false;
      }
      if (!responseExists) {
        handler.send('test', false);
        return;
      }
      handler.send('test', {
        supportTypedArray: true,
        supportTransfers: supportTransfers
      });
    });
    handler.on('configure', function wphConfigure(data) {
      (0, _util.setVerbosityLevel)(data.verbosity);
    });
    handler.on('GetDocRequest', function wphSetupDoc(data) {
      return WorkerMessageHandler.createDocumentHandler(data, port);
    });
  },
  createDocumentHandler: function createDocumentHandler(docParams, port) {
    var pdfManager;
    var terminated = false;
    var cancelXHRs = null;
    var WorkerTasks = [];
    var docId = docParams.docId;
    var docBaseUrl = docParams.docBaseUrl;
    var workerHandlerName = docParams.docId + '_worker';
    var handler = new _util.MessageHandler(workerHandlerName, docId, port);
    handler.postMessageTransfers = docParams.postMessageTransfers;
    function ensureNotTerminated() {
      if (terminated) {
        throw new Error('Worker was terminated');
      }
    }
    function startWorkerTask(task) {
      WorkerTasks.push(task);
    }
    function finishWorkerTask(task) {
      task.finish();
      var i = WorkerTasks.indexOf(task);
      WorkerTasks.splice(i, 1);
    }
    function loadDocument(recoveryMode) {
      var loadDocumentCapability = (0, _util.createPromiseCapability)();
      var parseSuccess = function parseSuccess() {
        var numPagesPromise = pdfManager.ensureDoc('numPages');
        var fingerprintPromise = pdfManager.ensureDoc('fingerprint');
        var encryptedPromise = pdfManager.ensureXRef('encrypt');
        Promise.all([numPagesPromise, fingerprintPromise, encryptedPromise]).then(function onDocReady(results) {
          var doc = {
            numPages: results[0],
            fingerprint: results[1],
            encrypted: !!results[2]
          };
          loadDocumentCapability.resolve(doc);
        }, parseFailure);
      };
      var parseFailure = function parseFailure(e) {
        loadDocumentCapability.reject(e);
      };
      pdfManager.ensureDoc('checkHeader', []).then(function () {
        pdfManager.ensureDoc('parseStartXRef', []).then(function () {
          pdfManager.ensureDoc('parse', [recoveryMode]).then(parseSuccess, parseFailure);
        }, parseFailure);
      }, parseFailure);
      return loadDocumentCapability.promise;
    }
    function getPdfManager(data, evaluatorOptions) {
      var pdfManagerCapability = (0, _util.createPromiseCapability)();
      var pdfManager;
      var source = data.source;
      if (source.data) {
        try {
          pdfManager = new _pdf_manager.LocalPdfManager(docId, source.data, source.password, evaluatorOptions, docBaseUrl);
          pdfManagerCapability.resolve(pdfManager);
        } catch (ex) {
          pdfManagerCapability.reject(ex);
        }
        return pdfManagerCapability.promise;
      }
      var pdfStream,
          cachedChunks = [];
      try {
        pdfStream = new PDFWorkerStream(handler);
      } catch (ex) {
        pdfManagerCapability.reject(ex);
        return pdfManagerCapability.promise;
      }
      var fullRequest = pdfStream.getFullReader();
      fullRequest.headersReady.then(function () {
        if (!fullRequest.isRangeSupported) {
          return;
        }
        var disableAutoFetch = source.disableAutoFetch || fullRequest.isStreamingSupported;
        pdfManager = new _pdf_manager.NetworkPdfManager(docId, pdfStream, {
          msgHandler: handler,
          url: source.url,
          password: source.password,
          length: fullRequest.contentLength,
          disableAutoFetch: disableAutoFetch,
          rangeChunkSize: source.rangeChunkSize
        }, evaluatorOptions, docBaseUrl);
        for (var i = 0; i < cachedChunks.length; i++) {
          pdfManager.sendProgressiveData(cachedChunks[i]);
        }
        cachedChunks = [];
        pdfManagerCapability.resolve(pdfManager);
        cancelXHRs = null;
      }).catch(function (reason) {
        pdfManagerCapability.reject(reason);
        cancelXHRs = null;
      });
      var loaded = 0;
      var flushChunks = function flushChunks() {
        var pdfFile = (0, _util.arraysToBytes)(cachedChunks);
        if (source.length && pdfFile.length !== source.length) {
          (0, _util.warn)('reported HTTP length is different from actual');
        }
        try {
          pdfManager = new _pdf_manager.LocalPdfManager(docId, pdfFile, source.password, evaluatorOptions, docBaseUrl);
          pdfManagerCapability.resolve(pdfManager);
        } catch (ex) {
          pdfManagerCapability.reject(ex);
        }
        cachedChunks = [];
      };
      var readPromise = new Promise(function (resolve, reject) {
        var readChunk = function readChunk(chunk) {
          try {
            ensureNotTerminated();
            if (chunk.done) {
              if (!pdfManager) {
                flushChunks();
              }
              cancelXHRs = null;
              return;
            }
            var data = chunk.value;
            loaded += (0, _util.arrayByteLength)(data);
            if (!fullRequest.isStreamingSupported) {
              handler.send('DocProgress', {
                loaded: loaded,
                total: Math.max(loaded, fullRequest.contentLength || 0)
              });
            }
            if (pdfManager) {
              pdfManager.sendProgressiveData(data);
            } else {
              cachedChunks.push(data);
            }
            fullRequest.read().then(readChunk, reject);
          } catch (e) {
            reject(e);
          }
        };
        fullRequest.read().then(readChunk, reject);
      });
      readPromise.catch(function (e) {
        pdfManagerCapability.reject(e);
        cancelXHRs = null;
      });
      cancelXHRs = function cancelXHRs() {
        pdfStream.cancelAllRequests('abort');
      };
      return pdfManagerCapability.promise;
    }
    function setupDoc(data) {
      function onSuccess(doc) {
        ensureNotTerminated();
        handler.send('GetDoc', { pdfInfo: doc });
      }
      function onFailure(e) {
        ensureNotTerminated();
        if (e instanceof _util.PasswordException) {
          var task = new WorkerTask('PasswordException: response ' + e.code);
          startWorkerTask(task);
          handler.sendWithPromise('PasswordRequest', e).then(function (data) {
            finishWorkerTask(task);
            pdfManager.updatePassword(data.password);
            pdfManagerReady();
          }).catch(function (ex) {
            finishWorkerTask(task);
            handler.send('PasswordException', ex);
          }.bind(null, e));
        } else if (e instanceof _util.InvalidPDFException) {
          handler.send('InvalidPDF', e);
        } else if (e instanceof _util.MissingPDFException) {
          handler.send('MissingPDF', e);
        } else if (e instanceof _util.UnexpectedResponseException) {
          handler.send('UnexpectedResponse', e);
        } else {
          handler.send('UnknownError', new _util.UnknownErrorException(e.message, e.toString()));
        }
      }
      function pdfManagerReady() {
        ensureNotTerminated();
        loadDocument(false).then(onSuccess, function loadFailure(ex) {
          ensureNotTerminated();
          if (!(ex instanceof _util.XRefParseException)) {
            onFailure(ex);
            return;
          }
          pdfManager.requestLoadedStream();
          pdfManager.onLoadedStream().then(function () {
            ensureNotTerminated();
            loadDocument(true).then(onSuccess, onFailure);
          });
        }, onFailure);
      }
      ensureNotTerminated();
      var evaluatorOptions = {
        forceDataSchema: data.disableCreateObjectURL,
        maxImageSize: data.maxImageSize === undefined ? -1 : data.maxImageSize,
        disableFontFace: data.disableFontFace,
        nativeImageDecoderSupport: data.nativeImageDecoderSupport,
        ignoreErrors: data.ignoreErrors
      };
      getPdfManager(data, evaluatorOptions).then(function (newPdfManager) {
        if (terminated) {
          newPdfManager.terminate();
          throw new Error('Worker was terminated');
        }
        pdfManager = newPdfManager;
        handler.send('PDFManagerReady', null);
        pdfManager.onLoadedStream().then(function (stream) {
          handler.send('DataLoaded', { length: stream.bytes.byteLength });
        });
      }).then(pdfManagerReady, onFailure);
    }
    handler.on('GetPage', function wphSetupGetPage(data) {
      return pdfManager.getPage(data.pageIndex).then(function (page) {
        var rotatePromise = pdfManager.ensure(page, 'rotate');
        var refPromise = pdfManager.ensure(page, 'ref');
        var userUnitPromise = pdfManager.ensure(page, 'userUnit');
        var viewPromise = pdfManager.ensure(page, 'view');
        return Promise.all([rotatePromise, refPromise, userUnitPromise, viewPromise]).then(function (results) {
          return {
            rotate: results[0],
            ref: results[1],
            userUnit: results[2],
            view: results[3]
          };
        });
      });
    });
    handler.on('GetPageIndex', function wphSetupGetPageIndex(data) {
      var ref = new _primitives.Ref(data.ref.num, data.ref.gen);
      var catalog = pdfManager.pdfDocument.catalog;
      return catalog.getPageIndex(ref);
    });
    handler.on('GetDestinations', function wphSetupGetDestinations(data) {
      return pdfManager.ensureCatalog('destinations');
    });
    handler.on('GetDestination', function wphSetupGetDestination(data) {
      return pdfManager.ensureCatalog('getDestination', [data.id]);
    });
    handler.on('GetPageLabels', function wphSetupGetPageLabels(data) {
      return pdfManager.ensureCatalog('pageLabels');
    });
    handler.on('GetPageMode', function wphSetupGetPageMode(data) {
      return pdfManager.ensureCatalog('pageMode');
    });
    handler.on('GetAttachments', function wphSetupGetAttachments(data) {
      return pdfManager.ensureCatalog('attachments');
    });
    handler.on('GetJavaScript', function wphSetupGetJavaScript(data) {
      return pdfManager.ensureCatalog('javaScript');
    });
    handler.on('GetOutline', function wphSetupGetOutline(data) {
      return pdfManager.ensureCatalog('documentOutline');
    });
    handler.on('GetMetadata', function wphSetupGetMetadata(data) {
      return Promise.all([pdfManager.ensureDoc('documentInfo'), pdfManager.ensureCatalog('metadata')]);
    });
    handler.on('GetData', function wphSetupGetData(data) {
      pdfManager.requestLoadedStream();
      return pdfManager.onLoadedStream().then(function (stream) {
        return stream.bytes;
      });
    });
    handler.on('GetStats', function wphSetupGetStats(data) {
      return pdfManager.pdfDocument.xref.stats;
    });
    handler.on('GetAnnotations', function wphSetupGetAnnotations(data) {
      return pdfManager.getPage(data.pageIndex).then(function (page) {
        return pdfManager.ensure(page, 'getAnnotationsData', [data.intent]);
      });
    });
    handler.on('RenderPageRequest', function wphSetupRenderPage(data) {
      var pageIndex = data.pageIndex;
      pdfManager.getPage(pageIndex).then(function (page) {
        var task = new WorkerTask('RenderPageRequest: page ' + pageIndex);
        startWorkerTask(task);
        var pageNum = pageIndex + 1;
        var start = Date.now();
        page.getOperatorList({
          handler: handler,
          task: task,
          intent: data.intent,
          renderInteractiveForms: data.renderInteractiveForms
        }).then(function (operatorList) {
          finishWorkerTask(task);
          (0, _util.info)('page=' + pageNum + ' - getOperatorList: time=' + (Date.now() - start) + 'ms, len=' + operatorList.totalLength);
        }, function (e) {
          finishWorkerTask(task);
          if (task.terminated) {
            return;
          }
          handler.send('UnsupportedFeature', { featureId: _util.UNSUPPORTED_FEATURES.unknown });
          var minimumStackMessage = 'worker.js: while trying to getPage() and getOperatorList()';
          var wrappedException;
          if (typeof e === 'string') {
            wrappedException = {
              message: e,
              stack: minimumStackMessage
            };
          } else if ((typeof e === 'undefined' ? 'undefined' : _typeof(e)) === 'object') {
            wrappedException = {
              message: e.message || e.toString(),
              stack: e.stack || minimumStackMessage
            };
          } else {
            wrappedException = {
              message: 'Unknown exception type: ' + (typeof e === 'undefined' ? 'undefined' : _typeof(e)),
              stack: minimumStackMessage
            };
          }
          handler.send('PageError', {
            pageNum: pageNum,
            error: wrappedException,
            intent: data.intent
          });
        });
      });
    }, this);
    handler.on('GetTextContent', function wphExtractText(data, sink) {
      var pageIndex = data.pageIndex;
      sink.onPull = function (desiredSize) {};
      sink.onCancel = function (reason) {};
      pdfManager.getPage(pageIndex).then(function (page) {
        var task = new WorkerTask('GetTextContent: page ' + pageIndex);
        startWorkerTask(task);
        var pageNum = pageIndex + 1;
        var start = Date.now();
        page.extractTextContent({
          handler: handler,
          task: task,
          sink: sink,
          normalizeWhitespace: data.normalizeWhitespace,
          combineTextItems: data.combineTextItems
        }).then(function () {
          finishWorkerTask(task);
          (0, _util.info)('text indexing: page=' + pageNum + ' - time=' + (Date.now() - start) + 'ms');
          sink.close();
        }, function (reason) {
          finishWorkerTask(task);
          if (task.terminated) {
            return;
          }
          sink.error(reason);
          throw reason;
        });
      });
    });
    handler.on('Cleanup', function wphCleanup(data) {
      return pdfManager.cleanup();
    });
    handler.on('Terminate', function wphTerminate(data) {
      terminated = true;
      if (pdfManager) {
        pdfManager.terminate();
        pdfManager = null;
      }
      if (cancelXHRs) {
        cancelXHRs();
      }
      var waitOn = [];
      WorkerTasks.forEach(function (task) {
        waitOn.push(task.finished);
        task.terminate();
      });
      return Promise.all(waitOn).then(function () {
        handler.destroy();
        handler = null;
      });
    });
    handler.on('Ready', function wphReady(data) {
      setupDoc(docParams);
      docParams = null;
    });
    return workerHandlerName;
  },
  initializeFromPort: function initializeFromPort(port) {
    var handler = new _util.MessageHandler('worker', 'main', port);
    WorkerMessageHandler.setup(handler, port);
    handler.send('ready', null);
  }
};
function isMessagePort(maybePort) {
  return typeof maybePort.postMessage === 'function' && 'onmessage' in maybePort;
}
if (typeof window === 'undefined' && !(0, _util.isNodeJS)() && typeof self !== 'undefined' && isMessagePort(self)) {
  WorkerMessageHandler.initializeFromPort(self);
}
exports.WorkerTask = WorkerTask;
exports.WorkerMessageHandler = WorkerMessageHandler;

/***/ }),
/* 18 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (e, a) {
  for (var i in a) {
    e[i] = a[i];
  }
})(exports, function (modules) {
  var installedModules = {};
  function __w_pdfjs_require__(moduleId) {
    if (installedModules[moduleId]) return installedModules[moduleId].exports;
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };
    modules[moduleId].call(module.exports, module, module.exports, __w_pdfjs_require__);
    module.l = true;
    return module.exports;
  }
  __w_pdfjs_require__.m = modules;
  __w_pdfjs_require__.c = installedModules;
  __w_pdfjs_require__.i = function (value) {
    return value;
  };
  __w_pdfjs_require__.d = function (exports, name, getter) {
    if (!__w_pdfjs_require__.o(exports, name)) {
      Object.defineProperty(exports, name, {
        configurable: false,
        enumerable: true,
        get: getter
      });
    }
  };
  __w_pdfjs_require__.n = function (module) {
    var getter = module && module.__esModule ? function getDefault() {
      return module['default'];
    } : function getModuleExports() {
      return module;
    };
    __w_pdfjs_require__.d(getter, 'a', getter);
    return getter;
  };
  __w_pdfjs_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  __w_pdfjs_require__.p = "";
  return __w_pdfjs_require__(__w_pdfjs_require__.s = 7);
}([function (module, exports, __w_pdfjs_require__) {
  "use strict";

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function(){}