(function() {window.PARSELY = window.PARSELY || {}; window.PARSELY.version = "2.0.1-dev.1"; window.PARSELY.majorVersion = 2; window.PARSELY.hotfixName = "hotfix-test-hash-7"; window.PARSELY.flavor = "conversions-engagedtime-metadata-slots-spa-video-debug"; window.PARSELY.__template_track_ips = true; window.PARSELY.__template_heartbeat_should_honor_autotrack = undefined; window.PARSELY.__template_limit_et_sample_len = false; window.PARSELY.__template_apikey = "parsely.com"; window.PARSELY.__template_is_first_party = true; window.PARSELY.__template_pixelhost = "fpa-events.parse.ly"; window.PARSELY.__template_customizations = {"customer":{"apikey":"parsely.com"},"conversions":[]}; })();

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

window.PARSELY = window.PARSELY || {};

(function () {
  var MAX_MESSAGE_COUNT = 100;

  var internal = function internal() {
    return function (arg0) {
      if (this === window || typeof this === "undefined") {
        // don't allow accidental call
        return;
      }

      if (this.msgs.length >= MAX_MESSAGE_COUNT) {
        this.msgs = this.msgs.slice(0, MAX_MESSAGE_COUNT);
      } // store in internal array for inspection later


      this.msgs.push(arg0);
    };
  };

  PARSELY.console = {
    msgs: [],
    log: internal(),
    dir: internal()
  };
})();

(function () {
  var console = PARSELY.console;
  var htmlSite;

  try {
    htmlSite = document.getElementById("parsely-cfg").getAttribute('data-parsely-site');
  } catch (err) {
    htmlSite = null;
  }

  var apikey = PARSELY.site || htmlSite || PARSELY.__template_apikey || "missing.parsely.com",
      scheme = document.location.protocol + '//',
      // Amazon ELB supports our certificate by forwarding HTTPS on to Node.JS (config) and Nginx (pixel)
  // So, we don't need separate hosts between HTTP and HTTPS
  pixelhost = PARSELY.pixelhost || PARSELY.__template_pixelhost || 'p1.parsely.com',
      pixelprefix = scheme + pixelhost;

  PARSELY.pInit = function (config) {
    if (config.error !== undefined) {
      console.log("Unable to load static configuration");
      return;
    }

    console.log("Static configuration loaded");

    if (_typeof(PARSELY.config) === 'object') {
      for (var key in PARSELY.config) {
        if (PARSELY.config.hasOwnProperty(key)) {
          config[key] = PARSELY.config[key];
        }
      }
    }

    PARSELY.config = config;
    PARSELY.urls = {
      "static": null,
      // unused
      "config": null,
      // unused
      "pixel": pixelprefix
    };
    PARSELY._sync = true;
    PARSELY.is_first_party = PARSELY.__template_is_first_party || false;
  };

  console.log("Loading configuration statically");
  /*
   * Client-side hacks to skip config.parsely.com.
   */
  // instead of JSONP call to PARSELY.pInit, we just call it!

  var stubConfig = {
    "apikey": apikey,
    "uuid": null,
    "network_uuid": null,
    "apikey_uuid": null,
    "settings": {
      "debug": false,
      "widget": false,
      "tracker": true,
      "test": window._parselyIsTest || false
    },
    "bundle": null,
    "customizations": PARSELY.__template_customizations || null,
    "track_ip_addresses": PARSELY.__template_track_ips || true,
    "heartbeat_should_honor_autotrack": PARSELY.__template_heartbeat_should_honor_autotrack || false,
    "limit_et_sample_len": PARSELY.__template_limit_et_sample_len || false,
    "is_remote_config": false
  }; // "client-side config server" call

  PARSELY.pInit(stubConfig);
})(); //  json2.js - https://github.com/douglascrockford/JSON-js/tree/03157639c7a7cddd2e9f032537f346f1a87c0f6d
//  2017-06-12
//  Public Domain.
//  NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
//  USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
//  NOT CONTROL.
//  This file creates a global JSON object containing two methods: stringify
//  and parse. This file provides the ES5 JSON capability to ES3 systems.
//  If a project might run on IE8 or earlier, then this file should be included.
//  This file does nothing on ES5 systems.
//      JSON.stringify(value, replacer, space)
//          value       any JavaScript value, usually an object or array.
//          replacer    an optional parameter that determines how object
//                      values are stringified for objects. It can be a
//                      function or an array of strings.
//          space       an optional parameter that specifies the indentation
//                      of nested structures. If it is omitted, the text will
//                      be packed without extra whitespace. If it is a number,
//                      it will specify the number of spaces to indent at each
//                      level. If it is a string (such as "\t" or "&nbsp;"),
//                      it contains the characters used to indent at each level.
//          This method produces a JSON text from a JavaScript value.
//          When an object value is found, if the object contains a toJSON
//          method, its toJSON method will be called and the result will be
//          stringified. A toJSON method does not serialize: it returns the
//          value represented by the name/value pair that should be serialized,
//          or undefined if nothing should be serialized. The toJSON method
//          will be passed the key associated with the value, and this will be
//          bound to the value.
//          For example, this would serialize Dates as ISO strings.
//              Date.prototype.toJSON = function (key) {
//                  function f(n) {
//                      // Format integers to have at least two digits.
//                      return (n < 10)
//                          ? "0" + n
//                          : n;
//                  }
//                  return this.getUTCFullYear()   + "-" +
//                       f(this.getUTCMonth() + 1) + "-" +
//                       f(this.getUTCDate())      + "T" +
//                       f(this.getUTCHours())     + ":" +
//                       f(this.getUTCMinutes())   + ":" +
//                       f(this.getUTCSeconds())   + "Z";
//              };
//          You can provide an optional replacer method. It will be passed the
//          key and value of each member, with this bound to the containing
//          object. The value that is returned from your method will be
//          serialized. If your method returns undefined, then the member will
//          be excluded from the serialization.
//          If the replacer parameter is an array of strings, then it will be
//          used to select the members to be serialized. It filters the results
//          such that only members with keys listed in the replacer array are
//          stringified.
//          Values that do not have JSON representations, such as undefined or
//          functions, will not be serialized. Such values in objects will be
//          dropped; in arrays they will be replaced with null. You can use
//          a replacer function to replace those with JSON values.
//          JSON.stringify(undefined) returns undefined.
//          The optional space parameter produces a stringification of the
//          value that is filled with line breaks and indentation to make it
//          easier to read.
//          If the space parameter is a non-empty string, then that string will
//          be used for indentation. If the space parameter is a number, then
//          the indentation will be that many spaces.
//          Example:
//          text = JSON.stringify(["e", {pluribus: "unum"}]);
//          // text is '["e",{"pluribus":"unum"}]'
//          text = JSON.stringify(["e", {pluribus: "unum"}], null, "\t");
//          // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'
//          text = JSON.stringify([new Date()], function (key, value) {
//              return this[key] instanceof Date
//                  ? "Date(" + this[key] + ")"
//                  : value;
//          });
//          // text is '["Date(---current time---)"]'
//      JSON.parse(text, reviver)
//          This method parses a JSON text to produce an object or array.
//          It can throw a SyntaxError exception.
//
//          The optional reviver parameter is a function that can filter and
//          transform the results. It receives each of the keys and values,
//          and its return value is used instead of the original value.
//          If it returns what it received, then the structure is not modified.
//          If it returns undefined then the member is deleted.
//
//          Example:
//
//          // Parse the text. Values that look like ISO date strings will
//          // be converted to Date objects.
//
//          myData = json_parse(text, function (key, value) {
//              var a;
//              if (typeof value === "string") {
//                  a =
///^d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
//                  if (a) {
//                      return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
//                          +a[5], +a[6]));
//                  }
//              }
//              return value;
//          });
//
//  This is a reference implementation. You are free to copy, modify, or
//  redistribute.
//
//  Parsely note: this file was manually created using json2.js as a base and including the function from
//  json_parse_state.js instead of the eval-based JSON.parse function.

/*jslint
    for, this
*/

/*property
    JSON, apply, call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf, PARSELY
*/
// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.


if ((typeof JSON === "undefined" ? "undefined" : _typeof(JSON)) !== "object") {
  JSON = {};
}

(function () {
  "use strict";

  if (!window.PARSELY) {
    window.PARSELY = {};
  }

  var root = window.PARSELY;

  if (!root.JSON) {
    root.JSON = window.JSON || {};
  }

  var rx_one = /^[\],:{}\s]*$/;
  var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
  var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
  var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
  var rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
  var rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

  function f(n) {
    // Format integers to have at least two digits.
    return n < 10 ? "0" + n : n;
  }

  function this_value() {
    return this.valueOf();
  }

  if (typeof Date.prototype.toJSON !== "function") {
    Date.prototype.toJSON = function () {
      return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
    };

    Boolean.prototype.toJSON = this_value;
    Number.prototype.toJSON = this_value;
    String.prototype.toJSON = this_value;
  }

  var gap;
  var indent;
  var meta;
  var rep;

  function quote(string) {
    // If the string contains no control characters, no quote characters, and no
    // backslash characters, then we can safely slap some quotes around it.
    // Otherwise we must also replace the offending characters with safe escape
    // sequences.
    rx_escapable.lastIndex = 0;
    return rx_escapable.test(string) ? "\"" + string.replace(rx_escapable, function (a) {
      var c = meta[a];
      return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
    }) + "\"" : "\"" + string + "\"";
  }

  function str(key, holder) {
    // Produce a string from holder[key].
    var i; // The loop counter.

    var k; // The member key.

    var v; // The member value.

    var length;
    var mind = gap;
    var partial;
    var value = holder[key]; // If the value has a toJSON method, call it to obtain a replacement value.

    if (value && _typeof(value) === "object" && typeof value.toJSON === "function") {
      value = value.toJSON(key);
    } // If we were called with a replacer function, then call the replacer to
    // obtain a replacement value.


    if (typeof rep === "function") {
      value = rep.call(holder, key, value);
    } // What happens next depends on the value's type.


    switch (_typeof(value)) {
      case "string":
        return quote(value);

      case "number":
        // JSON numbers must be finite. Encode non-finite numbers as null.
        return isFinite(value) ? String(value) : "null";

      case "boolean":
      case "null":
        // If the value is a boolean or null, convert it to a string. Note:
        // typeof null does not produce "null". The case is included here in
        // the remote chance that this gets fixed someday.
        return String(value);
      // If the type is "object", we might be dealing with an object or an array or
      // null.

      case "object":
        // Due to a specification blunder in ECMAScript, typeof null is "object",
        // so watch out for that case.
        if (!value) {
          return "null";
        } // Make an array to hold the partial results of stringifying this object value.


        gap += indent;
        partial = []; // Is the value an array?

        if (Object.prototype.toString.apply(value) === "[object Array]") {
          // The value is an array. Stringify every element. Use null as a placeholder
          // for non-JSON values.
          length = value.length;

          for (i = 0; i < length; i += 1) {
            partial[i] = str(i, value) || "null";
          } // Join all of the elements together, separated with commas, and wrap them in
          // brackets.


          v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
          gap = mind;
          return v;
        } // If the replacer is an array, use it to select the members to be stringified.


        if (rep && _typeof(rep) === "object") {
          length = rep.length;

          for (i = 0; i < length; i += 1) {
            if (typeof rep[i] === "string") {
              k = rep[i];
              v = str(k, value);

              if (v) {
                partial.push(quote(k) + (gap ? ": " : ":") + v);
              }
            }
          }
        } else {
          // Otherwise, iterate through all of the keys in the object.
          for (k in value) {
            if (Object.prototype.hasOwnProperty.call(value, k)) {
              v = str(k, value);

              if (v) {
                partial.push(quote(k) + (gap ? ": " : ":") + v);
              }
            }
          }
        } // Join all of the member texts together, separated with commas,
        // and wrap them in braces.


        v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
        gap = mind;
        return v;
    }
  } // If the JSON object does not yet have a stringify method, give it one.


  if (typeof JSON.stringify !== "function") {
    meta = {
      // table of character substitutions
      "\b": "\\b",
      "\t": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      "\"": "\\\"",
      "\\": "\\\\"
    };

    JSON.stringify = function (value, replacer, space) {
      // The stringify method takes a value and an optional replacer, and an optional
      // space parameter, and returns a JSON text. The replacer can be a function
      // that can replace values, or an array of strings that will select the keys.
      // A default replacer method can be provided. Use of the space parameter can
      // produce text that is more easily readable.
      var i;
      gap = "";
      indent = ""; // If the space parameter is a number, make an indent string containing that
      // many spaces.

      if (typeof space === "number") {
        for (i = 0; i < space; i += 1) {
          indent += " ";
        } // If the space parameter is a string, it will be used as the indent string.

      } else if (typeof space === "string") {
        indent = space;
      } // If there is a replacer, it must be a function or an array.
      // Otherwise, throw an error.


      rep = replacer;

      if (replacer && typeof replacer !== "function" && (_typeof(replacer) !== "object" || typeof replacer.length !== "number")) {
        throw new Error("JSON.stringify");
      } // Make a fake root object containing our value under the key of "".
      // Return the result of stringifying the value.


      return str("", {
        "": value
      });
    };
  } // If the JSON object does not yet have a parse method, give it one.


  if (typeof JSON.parse !== "function") {
    JSON.parse = function () {
      "use strict"; // This function creates a JSON parse function that uses a state machine rather
      // than the dangerous eval function to parse a JSON text.

      var state; // The state of the parser, one of
      // 'go'         The starting state
      // 'ok'         The final, accepting state
      // 'firstokey'  Ready for the first key of the object or
      //              the closing of an empty object
      // 'okey'       Ready for the next key of the object
      // 'colon'      Ready for the colon
      // 'ovalue'     Ready for the value half of a key/value pair
      // 'ocomma'     Ready for a comma or closing }
      // 'firstavalue' Ready for the first value of an array or
      //              an empty array
      // 'avalue'     Ready for the next value of an array
      // 'acomma'     Ready for a comma or closing ]

      var stack; // The stack, for controlling nesting.

      var container; // The current container object or array

      var key; // The current key

      var value; // The current value

      var escapes = {
        // Escapement translation table
        "\\": "\\",
        "\"": "\"",
        "/": "/",
        "t": "\t",
        "n": "\n",
        "r": "\r",
        "f": "\f",
        "b": "\b"
      };
      var string = {
        // The actions for string tokens
        go: function go() {
          state = "ok";
        },
        firstokey: function firstokey() {
          key = value;
          state = "colon";
        },
        okey: function okey() {
          key = value;
          state = "colon";
        },
        ovalue: function ovalue() {
          state = "ocomma";
        },
        firstavalue: function firstavalue() {
          state = "acomma";
        },
        avalue: function avalue() {
          state = "acomma";
        }
      };
      var number = {
        // The actions for number tokens
        go: function go() {
          state = "ok";
        },
        ovalue: function ovalue() {
          state = "ocomma";
        },
        firstavalue: function firstavalue() {
          state = "acomma";
        },
        avalue: function avalue() {
          state = "acomma";
        }
      };
      var action = {
        // The action table describes the behavior of the machine. It contains an
        // object for each token. Each object contains a method that is called when
        // a token is matched in a state. An object will lack a method for illegal
        // states.
        "{": {
          go: function go() {
            stack.push({
              state: "ok"
            });
            container = {};
            state = "firstokey";
          },
          ovalue: function ovalue() {
            stack.push({
              container: container,
              state: "ocomma",
              key: key
            });
            container = {};
            state = "firstokey";
          },
          firstavalue: function firstavalue() {
            stack.push({
              container: container,
              state: "acomma"
            });
            container = {};
            state = "firstokey";
          },
          avalue: function avalue() {
            stack.push({
              container: container,
              state: "acomma"
            });
            container = {};
            state = "firstokey";
          }
        },
        "}": {
          firstokey: function firstokey() {
            var pop = stack.pop();
            value = container;
            container = pop.container;
            key = pop.key;
            state = pop.state;
          },
          ocomma: function ocomma() {
            var pop = stack.pop();
            container[key] = value;
            value = container;
            container = pop.container;
            key = pop.key;
            state = pop.state;
          }
        },
        "[": {
          go: function go() {
            stack.push({
              state: "ok"
            });
            container = [];
            state = "firstavalue";
          },
          ovalue: function ovalue() {
            stack.push({
              container: container,
              state: "ocomma",
              key: key
            });
            container = [];
            state = "firstavalue";
          },
          firstavalue: function firstavalue() {
            stack.push({
              container: container,
              state: "acomma"
            });
            container = [];
            state = "firstavalue";
          },
          avalue: function avalue() {
            stack.push({
              container: container,
              state: "acomma"
            });
            container = [];
            state = "firstavalue";
          }
        },
        "]": {
          firstavalue: function firstavalue() {
            var pop = stack.pop();
            value = container;
            container = pop.container;
            key = pop.key;
            state = pop.state;
          },
          acomma: function acomma() {
            var pop = stack.pop();
            container.push(value);
            value = container;
            container = pop.container;
            key = pop.key;
            state = pop.state;
          }
        },
        ":": {
          colon: function colon() {
            if (Object.hasOwnProperty.call(container, key)) {
              throw new SyntaxError("Duplicate key '" + key + "\"");
            }

            state = "ovalue";
          }
        },
        ",": {
          ocomma: function ocomma() {
            container[key] = value;
            state = "okey";
          },
          acomma: function acomma() {
            container.push(value);
            state = "avalue";
          }
        },
        "true": {
          go: function go() {
            value = true;
            state = "ok";
          },
          ovalue: function ovalue() {
            value = true;
            state = "ocomma";
          },
          firstavalue: function firstavalue() {
            value = true;
            state = "acomma";
          },
          avalue: function avalue() {
            value = true;
            state = "acomma";
          }
        },
        "false": {
          go: function go() {
            value = false;
            state = "ok";
          },
          ovalue: function ovalue() {
            value = false;
            state = "ocomma";
          },
          firstavalue: function firstavalue() {
            value = false;
            state = "acomma";
          },
          avalue: function avalue() {
            value = false;
            state = "acomma";
          }
        },
        "null": {
          go: function go() {
            value = null;
            state = "ok";
          },
          ovalue: function ovalue() {
            value = null;
            state = "ocomma";
          },
          firstavalue: function firstavalue() {
            value = null;
            state = "acomma";
          },
          avalue: function avalue() {
            value = null;
            state = "acomma";
          }
        }
      };

      function(){}

      return function (source, reviver) {
        // A regular expression is used to extract tokens from the JSON text.
        // The extraction process is cautious.
        var result;
        var tx = /^[\u0020\t\n\r]*(?:([,:\[\]{}]|true|false|null)|(-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)|"((?:[^\r\n\t\\\"]|\\(?:["\\\/trnfb]|u[0-9a-fA-F]{4}))*)")/; // Set the starting state.

        state = "go"; // The stack records the container, key, and state for each object or array
        // that contains another object or array while processing nested structures.

        stack = []; // If any error occurs, we will catch it and ultimately throw a syntax error.

        try {
          // For each token...
          while (true) {
            result = tx.exec(source);

            if (!result) {
              break;
            } // result is the result array from matching the tokenizing regular expression.
            //  result[0] contains everything that matched, including any initial whitespace.
            //  result[1] contains any punctuation that was matched, or true, false, or null.
            //  result[2] contains a matched number, still in string form.
            //  result[3] contains a matched string, without quotes but with escapement.


            if (result[1]) {
              // Token: Execute the action for this state and token.
              action[result[1]][state]();
            } else if (result[2]) {
              // Number token: Convert the number string into a number value and execute
              // the action for this state and number.
              value = +result[2];
              number[state]();
            } else {
              // String token: Replace the escapement sequences and execute the action for
              // this state and string.
              value = debackslashify(result[3]);
              string[state]();
            } // Remove the token from the string. The loop will continue as long as there
            // are tokens. This is a slow process, but it allows the use of ^ matching,
            // which assures that no illegal tokens slip through.


            source = source.slice(result[0].length);
          } // If we find a state/token combination that is illegal, then the action will
          // cause an error. We handle the error by simply changing the state.

        } catch (e) {
          state = e;
        } // The parsing is finished. If we are not in the final "ok" state, or if the
        // remaining source contains anything except whitespace, then we did not have
        //a well-formed JSON text.


        if (state !== "ok" || /[^\u0020\t\n\r]/.test(source)) {
          throw state instanceof SyntaxError ? state : new SyntaxError("JSON");
        } // If there is a reviver function, we recursively walk the new structure,
        // passing each name/value pair to the reviver function for possible
        // transformation, starting with a temporary root object that holds the current
        // value in an empty key. If there is not a reviver function, we simply return
        // that value.


        return typeof reviver === "function" ? function walk(holder, key) {
          var k;
          var v;
          var val = holder[key];

          if (val && _typeof(val) === "object") {
            for (k in value) {
              if (Object.prototype.hasOwnProperty.call(val, k)) {
                v = walk(val, k);

                if (v !== undefined) {
                  val[k] = v;
                } else {
                  delete val[k];
                }
              }
            }
          }

          return reviver.call(holder, key, val);
        }({
          "": value
        }, "") : value;
      };
    }();
  }
})();
/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
// Inspired by base2 and Prototype


(function () {
  if (!this.PARSELY) {
    this.PARSELY = {};
  }

  var root = this.PARSELY;
  var initializing = false,
      fnTest = /xyz/.test(function () {
    xyz;
  }) ? /\b_super\b/ : /.*/; // The base Class implementation (does nothing)

  root.Class = function () {}; // Create a new Class that inherits from this class


  root.Class.extend = function (prop) {
    var _super = this.prototype; // Instantiate a base class (but only create the instance,
    // don't run the init constructor)

    initializing = true;
    var prototype = new this();
    initializing = false; // Copy the properties over onto the new prototype

    for (var name in prop) {
      // Check if we're overwriting an existing function
      prototype[name] = typeof prop[name] == "function" && typeof _super[name] == "function" && fnTest.test(prop[name]) ? function (name, fn) {
        return function () {
          var tmp = this._super; // Add a new ._super() method that is the same method
          // but on the super-class

          this._super = _super[name]; // The method only need to be bound temporarily, so we
          // remove it when we're done executing

          var ret = fn.apply(this, arguments);
          this._super = tmp;
          return ret;
        };
      }(name, prop[name]) : prop[name];
    } // The dummy class constructor


    function Class() {
      // All construction is actually done in the init method
      if (!initializing && this.init) this.init.apply(this, arguments);
    } // Populate our constructed prototype object


    Class.prototype = prototype; // Enforce the constructor to be what we expect

    Class.constructor = Class; // And make this class extendable

    Class.extend = arguments.callee;
    return Class;
  };
})();

(function (global, factory) {
  if (typeof PARSELY === "undefined") {
    PARSELY = {};
  }

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    // For CommonJS and CommonJS-like environments where a proper window is present,
    // execute the factory and get jQuery
    // For environments that do not inherently posses a window with a document
    // (such as Node.js), expose a jQuery-making factory as module.exports
    // This accentuates the need for the creation of a real window
    // e.g. var jQuery = require("jquery")(window);
    // See ticket #14549 for more info
    module.exports = global.document ? factory(global, true) : function (w) {
      if (!w.document) {
        throw new Error("jQuery requires a window with a document");
      }

      return factory(w);
    }; // we can simply pass true here as "noGlobal" because the only thing this controls is whether or not window.$
    // gets set on line 1451. Since we don't care about that and are namespacing the jQuery object that gets returned,
    // we can just do true here (and we know the window has a DOM, since no error got thrown above).

    PARSELY.$ = PARSELY.jQuery = factory(global, true);
  } else {
    PARSELY.$ = PARSELY.jQuery = factory(global, false);
  } // Pass this if window is not defined yet

})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
  var deletedIds = [];
  var _slice = deletedIds.slice;
  var concat = deletedIds.concat;
  var push = deletedIds.push;
  var indexOf = deletedIds.indexOf;
  var class2type = {};
  var toString = class2type.toString;
  var hasOwn = class2type.hasOwnProperty;
  var support = {};

  var version = "1.11.1 -deprecated,-css,-css/addGetHookIf,-css/curCSS,-css/defaultDisplay,-css/hiddenVisibleSelectors,-css/support,-css/swap,-css/var/cssExpand,-css/var/isHidden,-css/var/rmargin,-css/var/rnumnonpx,-effects,-effects/Tween,-effects/animatedSelector,-effects/support,-dimensions,-offset,-ajax,-ajax/jsonp,-ajax/load,-ajax/parseJSON,-ajax/parseXML,-ajax/script,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl",
      // Define a local copy of jQuery
  jQuery = function jQuery(selector, context) {
    // The jQuery object is actually just the init constructor 'enhanced'
    // Need init if jQuery is called (just allow error to be thrown if not included)
    return new jQuery.fn.init(selector, context);
  },
      // Support: Android<4.1, IE<9
  // Make sure we trim BOM and NBSP
  rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      // Matches dashed string for camelizing
  rmsPrefix = /^-ms-/,
      rdashAlpha = /-([\da-z])/gi,
      // Used by jQuery.camelCase as callback to replace()
  fcamelCase = function fcamelCase(all, letter) {
    return letter.toUpperCase();
  };

  jQuery.fn = jQuery.prototype = {
    // The current version of jQuery being used
    jquery: version,
    constructor: jQuery,
    // Start with an empty selector
    selector: "",
    // The default length of a jQuery object is 0
    length: 0,
    toArray: function toArray() {
      return _slice.call(this);
    },
    // Get the Nth element in the matched element set OR
    // Get the whole matched element set as a clean array
    get: function get(num) {
      return num != null ? // Return just the one element from the set
      num < 0 ? this[num + this.length] : this[num] : // Return all the elements in a clean array
      _slice.call(this);
    },
    // Take an array of elements and push it onto the stack
    // (returning the new matched element set)
    pushStack: function pushStack(elems) {
      // Build a new jQuery matched element set
      var ret = jQuery.merge(this.constructor(), elems); // Add the old object onto the stack (as a reference)

      ret.prevObject = this;
      ret.context = this.context; // Return the newly-formed element set

      return ret;
    },
    // Execute a callback for every element in the matched set.
    // (You can seed the arguments with an array of args, but this is
    // only used internally.)
    each: function each(callback, args) {
      return jQuery.each(this, callback, args);
    },
    map: function map(callback) {
      return this.pushStack(jQuery.map(this, function (elem, i) {
        return callback.call(elem, i, elem);
      }));
    },
    slice: function slice() {
      return this.pushStack(_slice.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(i) {
      var len = this.length,
          j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor(null);
    },
    // For internal use only.
    // Behaves like an Array's method, not like a jQuery method.
    push: push,
    sort: deletedIds.sort,
    splice: deletedIds.splice
  };

  jQuery.extend = jQuery.fn.extend = function () {
    var src,
        copyIsArray,
        copy,
        name,
        options,
        clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false; // Handle a deep copy situation

    if (typeof target === "boolean") {
      deep = target; // skip the boolean and the target

      target = arguments[i] || {};
      i++;
    } // Handle case when target is a string or something (possible in deep copy)


    if (_typeof(target) !== "object" && !jQuery.isFunction(target)) {
      target = {};
    } // extend jQuery itself if only one argument is passed


    if (i === length) {
      target = this;
      i--;
    }

    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
        // Extend the base object
        for (name in options) {
          src = target[name];
          copy = options[name]; // Prevent never-ending loop

          if (target === copy) {
            continue;
          } // Recurse if we're merging plain objects or arrays


          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && jQuery.isArray(src) ? src : [];
            } else {
              clone = src && jQuery.isPlainObject(src) ? src : {};
            } // Never move original objects, clone them


            target[name] = jQuery.extend(deep, clone, copy); // Don't bring in undefined values
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    } // Return the modified object


    return target;
  };

  jQuery.extend({
    // Unique for each copy of jQuery on the page
    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
    // Assume jQuery is ready without the ready module
    isReady: true,
    error: function error(msg) {
      throw new Error(msg);
    },
    noop: function noop() {},
    // See test/unit/core.js for details concerning isFunction.
    // Since version 1.3, DOM methods and functions like alert
    // aren't supported. They return false on IE (#2968).
    isFunction: function isFunction(obj) {
      return jQuery.type(obj) === "function";
    },
    isArray: Array.isArray || function (obj) {
      return jQuery.type(obj) === "array";
    },
    isWindow: function isWindow(obj) {
      /* jshint eqeqeq: false */
      return obj != null && obj == obj.window;
    },
    isNumeric: function isNumeric(obj) {
      // parseFloat NaNs numeric-cast false positives (null|true|false|"")
      // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
      // subtraction forces infinities to NaN
      return !jQuery.isArray(obj) && obj - parseFloat(obj) >= 0;
    },
    isEmptyObject: function isEmptyObject(obj) {
      var name;

      for (name in obj) {
        return false;
      }

      return true;
    },
    isPlainObject: function isPlainObject(obj) {
      var key; // Must be an Object.
      // Because of IE, we also have to check the presence of the constructor property.
      // Make sure that DOM nodes and window objects don't pass through, as well

      if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
        return false;
      }

      try {
        // Not own constructor property must be Object
        if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
          return false;
        }
      } catch (e) {
        // IE8,9 Will throw exceptions on certain host objects #9897
        return false;
      } // Support: IE<9
      // Handle iteration over inherited properties before own properties.


      if (support.ownLast) {
        for (key in obj) {
          return hasOwn.call(obj, key);
        }
      } // Own properties are enumerated firstly, so to speed up,
      // if last one is own, then all properties are own.


      for (key in obj) {}

      return key === undefined || hasOwn.call(obj, key);
    },
    type: function type(obj) {
      if (obj == null) {
        return obj + "";
      }

      return _typeof(obj) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : _typeof(obj);
    },
    // Convert dashed to camelCase; used by the css and data modules
    // Microsoft forgot to hump their vendor prefix (#9572)
    camelCase: function camelCase(string) {
      return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    },
    nodeName: function nodeName(elem, name) {
      return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    },
    // args is for internal usage only
    each: function each(obj, callback, args) {
      var value,
          i = 0,
          length = obj.length,
          isArray = isArraylike(obj);

      if (args) {
        if (isArray) {
          for (; i < length; i++) {
            value = callback.apply(obj[i], args);

            if (value === false) {
              break;
            }
          }
        } else {
          for (i in obj) {
            value = callback.apply(obj[i], args);

            if (value === false) {
              break;
            }
          }
        } // A special, fast, case for the most common use of each

      } else {
        if (isArray) {
          for (; i < length; i++) {
            value = callback.call(obj[i], i, obj[i]);

            if (value === false) {
              break;
            }
          }
        } else {
          for (i in obj) {
            value = callback.call(obj[i], i, obj[i]);

            if (value === false) {
              break;
            }
          }
        }
      }

      return obj;
    },
    // Support: Android<4.1, IE<9
    trim: function trim(text) {
      return text == null ? "" : (text + "").replace(rtrim, "");
    },
    // results is for internal usage only
    makeArray: function makeArray(arr, results) {
      var ret = results || [];

      if (arr != null) {
        if (isArraylike(Object(arr))) {
          jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
        } else {
          push.call(ret, arr);
        }
      }

      return ret;
    },
    guid: 1,
    now: function now() {
      return +new Date();
    },
    // jQuery.support is not used in Core but other projects attach their
    // properties to it so it needs to exist.
    support: support
  }); // Populate the class2type map

  jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });

  function isArraylike(obj) {
    var length = obj.length,
        type = jQuery.type(obj);

    if (type === "function" || jQuery.isWindow(obj)) {
      return false;
    }

    if (obj.nodeType === 1 && length) {
      return true;
    }

    return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
  }

  var rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
  var risSimple = /^.[^:#\[\.,]*$/; // A central reference to the root jQuery(document)

  var rootjQuery,
      // Use the correct document accordingly with window argument (sandbox)
  document = window.document,
      // A simple way to check for HTML strings
  // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
  // Strict HTML recognition (#11290: must start with <)
  rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      init = jQuery.fn.init = function (selector, context) {
    var match, elem; // HANDLE: $(""), $(null), $(undefined), $(false)

    if (!selector) {
      return this;
    } // Handle HTML strings


    if (typeof selector === "string") {
      if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
        // Assume that strings that start and end with <> are HTML and skip the regex check
        match = [null, selector, null];
      } else {
        match = rquickExpr.exec(selector);
      } // Match html or make sure no context is specified for #id


      if (match && (match[1] || !context)) {
        // HANDLE: $(html) -> $(array)
        if (match[1]) {
          context = context instanceof jQuery ? context[0] : context; // scripts is true for back-compat
          // Intentionally let the error be thrown if parseHTML is not present

          jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)); // HANDLE: $(html, props)

          if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
            for (match in context) {
              // Properties of context are called as methods if possible
              if (jQuery.isFunction(this[match])) {
                this[match](context[match]); // ...and otherwise set as attributes
              } else {
                this.attr(match, context[match]);
              }
            }
          }

          return this; // HANDLE: $(#id)
        } else {
          elem = document.getElementById(match[2]); // Check parentNode to catch when Blackberry 4.6 returns
          // nodes that are no longer in the document #6963

          if (elem && elem.parentNode) {
            // Otherwise, we inject the element directly into the jQuery object
            this.length = 1;
            this[0] = elem;
          }

          this.context = document;
          this.selector = selector;
          return this;
        }
      } // HANDLE: $(DOMElement)

    } else if (selector.nodeType) {
      this.context = this[0] = selector;
      this.length = 1;
      return this; // HANDLE: $(function)
      // Shortcut for document ready
    } else if (jQuery.isFunction(selector)) {
      return typeof rootjQuery.ready !== "undefined" ? rootjQuery.ready(selector) : // Execute immediately if ready is not present
      selector(jQuery);
    }

    if (selector.selector !== undefined) {
      this.selector = selector.selector;
      this.context = selector.context;
    }

    return jQuery.makeArray(selector, this);
  }; // Give the init function the jQuery prototype for later instantiation


  init.prototype = jQuery.fn; // Initialize central reference

  rootjQuery = jQuery(document);
  var rnotwhite = /\S+/g;
  var strundefined = typeof undefined === "undefined" ? "undefined" : _typeof(undefined); // Support: IE<9
  // Iteration over object's inherited properties before its own

  var i;

  for (i in jQuery(support)) {
    break;
  }

  support.ownLast = i !== "0";
  /**
   * Determines whether an object can have data
   */

  jQuery.acceptData = function (elem) {
    var noData = jQuery.noData[(elem.nodeName + " ").toLowerCase()],
        nodeType = +elem.nodeType || 1; // Do not set data on non-element DOM nodes because it will not be cleared (#8335).

    return nodeType !== 1 && nodeType !== 9 ? false : // Nodes accept data unless otherwise specified; rejection can be conditional
    !noData || noData !== true && elem.getAttribute("classid") === noData;
  };

  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      rmultiDash = /([A-Z])/g; // checks a cache object for emptiness

  function isEmptyDataObject(obj) {
    var name;

    for (name in obj) {
      // if the public data object is empty, the private is still empty
      if (name === "data" && jQuery.isEmptyObject(obj[name])) {
        continue;
      }

      if (name !== "toJSON") {
        return false;
      }
    }

    return true;
  }

  function internalData(elem, name, data, pvt
  /* Internal Use Only */
  ) {
    if (!jQuery.acceptData(elem)) {
      return;
    }

    var ret,
        thisCache,
        internalKey = jQuery.expando,
        // We have to handle DOM nodes and JS objects differently because IE6-7
    // can't GC object references properly across the DOM-JS boundary
    isNode = elem.nodeType,
        // Only DOM nodes need the global jQuery cache; JS object data is
    // attached directly to the object so GC can occur automatically
    cache = isNode ? jQuery.cache : elem,
        // Only defining an ID for JS objects if its cache already exists allows
    // the code to shortcut on the same path as a DOM node with no cache
    id = isNode ? elem[internalKey] : elem[internalKey] && internalKey; // Avoid doing any more work than we need to when trying to get data on an
    // object that has no data at all

    if ((!id || !cache[id] || !pvt && !cache[id].data) && data === undefined && typeof name === "string") {
      return;
    }

    if (!id) {
      // Only DOM nodes need a new unique ID for each element since their data
      // ends up in the global cache
      if (isNode) {
        id = elem[internalKey] = deletedIds.pop() || jQuery.guid++;
      } else {
        id = internalKey;
      }
    }

    if (!cache[id]) {
      // Avoid exposing jQuery metadata on plain JS objects when the object
      // is serialized using JSON.stringify
      cache[id] = isNode ? {} : {
        toJSON: jQuery.noop
      };
    } // An object can be passed to jQuery.data instead of a key/value pair; this gets
    // shallow copied over onto the existing cache


    if (_typeof(name) === "object" || typeof name === "function") {
      if (pvt) {
        cache[id] = jQuery.extend(cache[id], name);
      } else {
        cache[id].data = jQuery.extend(cache[id].data, name);
      }
    }

    thisCache = cache[id]; // jQuery data() is stored in a separate object inside the object's internal data
    // cache in order to avoid key collisions between internal data and user-defined
    // data.

    if (!pvt) {
      if (!thisCache.data) {
        thisCache.data = {};
      }

      thisCache = thisCache.data;
    }

    if (data !== undefined) {
      thisCache[jQuery.camelCase(name)] = data;
    } // Check for both converted-to-camel and non-converted data property names
    // If a data property was specified


    if (typeof name === "string") {
      // First Try to find as-is property data
      ret = thisCache[name]; // Test for null|undefined property data

      if (ret == null) {
        // Try to find the camelCased property
        ret = thisCache[jQuery.camelCase(name)];
      }
    } else {
      ret = thisCache;
    }

    return ret;
  }

  jQuery.extend({
    cache: {},
    // The following elements (space-suffixed to avoid Object.prototype collisions)
    // throw uncatchable exceptions if you attempt to set expando properties
    noData: {
      "applet ": true,
      "embed ": true,
      // ...but Flash objects (which have this classid) *can* handle expandos
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function hasData(elem) {
      elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
      return !!elem && !isEmptyDataObject(elem);
    },
    data: function data(elem, name, _data) {
      return internalData(elem, name, _data);
    },
    // For internal use only.
    _data: function _data(elem, name, data) {
      return internalData(elem, name, data, true);
    }
  });
  var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  var rcheckableType = /^(?:checkbox|radio)$/i;

  (function () {
    var i,
        eventName,
        div = document.createElement("div"); // Support: IE<9 (lack submit/change bubble), Firefox 23+ (lack focusin event)

    for (i in {
      submit: true,
      change: true,
      focusin: true
    }) {
      eventName = "on" + i;

      if (!(support[i + "Bubbles"] = eventName in window)) {
        // Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
        div.setAttribute(eventName, "t");
        support[i + "Bubbles"] = div.attributes[eventName].expando === false;
      }
    } // Null elements to avoid leaks in IE.


    div = null;
  })();

  var rformElems = /^(?:input|select|textarea)$/i,
      rkeyEvent = /^key/,
      rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
      rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
      rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

  function returnTrue() {
    return true;
  }

  function returnFalse() {
    return false;
  }

  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (err) {}
  }
  /*
   * Helper functions for managing events -- not part of the public interface.
   * Props to Dean Edwards' addEvent library for many of the ideas.
   */


  jQuery.event = {
    global: {},
    add: function add(elem, types, handler, data, selector) {
      var tmp,
          events,
          t,
          handleObjIn,
          special,
          eventHandle,
          handleObj,
          handlers,
          type,
          namespaces,
          origType,
          elemData = jQuery._data(elem); // Don't attach events to noData or text/comment nodes (but allow plain objects)


      if (!elemData) {
        return;
      } // Caller can pass in an object of custom data in lieu of the handler


      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      } // Make sure that the handler has a unique ID, used to find/remove it later


      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      } // Init the element's event structure and main handler, if this is the first


      if (!(events = elemData.events)) {
        events = elemData.events = {};
      }

      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function (e) {
          // Discard the second event of a jQuery.event.trigger() and
          // when an event is called after a page has unloaded
          return _typeof(jQuery) !== strundefined && (!e || jQuery.event.triggered !== e.type) ? jQuery.event.dispatch.apply(eventHandle.elem, arguments) : undefined;
        }; // Add elem as a property of the handle fn to prevent a memory leak with IE non-native events


        eventHandle.elem = elem;
      } // Handle multiple events separated by a space


      types = (types || "").match(rnotwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // There *must* be a type, no attaching namespace-only handlers

        if (!type) {
          continue;
        } // If event changes its type, use the special event handlers for the changed type


        special = jQuery.event.special[type] || {}; // If selector defined, determine special event api type, otherwise given type

        type = (selector ? special.delegateType : special.bindType) || type; // Update special based on newly reset type

        special = jQuery.event.special[type] || {}; // handleObj is passed to all event handlers

        handleObj = jQuery.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn); // Init the event handler queue if we're the first

        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0; // Only use addEventListener/attachEvent if the special events handler returns false

          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            // Bind the global event handler to the element
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle, false);
            } else if (elem.attachEvent) {
              elem.attachEvent("on" + type, eventHandle);
            }
          }
        }

        if (special.add) {
          special.add.call(elem, handleObj);

          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        } // Add to the element's handler list, delegates in front


        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        } // Keep track of which events have ever been used, for event optimization


        jQuery.event.global[type] = true;
      } // Nullify elem to prevent memory leaks in IE


      elem = null;
    },
    trigger: function trigger(event, data, elem, onlyHandlers) {
      var handle,
          ontype,
          cur,
          bubbleType,
          special,
          tmp,
          i,
          eventPath = [elem || document],
          type = hasOwn.call(event, "type") ? event.type : event,
          namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      cur = tmp = elem = elem || document; // Don't do events on text and comment nodes

      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      } // focus/blur morphs to focusin/out; ensure we're not firing them right now


      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }

      if (type.indexOf(".") >= 0) {
        // Namespaced trigger; create a regexp to match event type in handle()
        namespaces = type.split(".");
        type = namespaces.shift();
        namespaces.sort();
      }

      ontype = type.indexOf(":") < 0 && "on" + type; // Caller can pass in a jQuery.Event object, Object, or just an event type string

      event = event[jQuery.expando] ? event : new jQuery.Event(type, _typeof(event) === "object" && event); // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)

      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = namespaces.join(".");
      event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null; // Clean up the event in case it is being reused

      event.result = undefined;

      if (!event.target) {
        event.target = elem;
      } // Clone any incoming data and prepend the event, creating the handler arg list


      data = data == null ? [event] : jQuery.makeArray(data, [event]); // Allow special events to draw outside the lines

      special = jQuery.event.special[type] || {};

      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      } // Determine event propagation path in advance, per W3C events spec (#9951)
      // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)


      if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
        bubbleType = special.delegateType || type;

        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }

        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        } // Only add window if we got to document (e.g., not plain obj or detached DOM)


        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      } // Fire handlers on the event path


      i = 0;

      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
        event.type = i > 1 ? bubbleType : special.bindType || type; // jQuery handler

        handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle");

        if (handle) {
          handle.apply(cur, data);
        } // Native handler


        handle = ontype && cur[ontype];

        if (handle && handle.apply && jQuery.acceptData(cur)) {
          event.result = handle.apply(cur, data);

          if (event.result === false) {
            event.preventDefault();
          }
        }
      }

      event.type = type; // If nobody prevented the default action, do it now

      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && jQuery.acceptData(elem)) {
          // Call a native DOM method on the target with the same name name as the event.
          // Can't use an .isFunction() check here because IE6/7 fails that test.
          // Don't do default actions on window, that's where global variables be (#6170)
          if (ontype && elem[type] && !jQuery.isWindow(elem)) {
            // Don't re-trigger an onFOO event when we call its FOO() method
            tmp = elem[ontype];

            if (tmp) {
              elem[ontype] = null;
            } // Prevent re-triggering of the same event, since we already bubbled it above


            jQuery.event.triggered = type;

            try {
              elem[type]();
            } catch (e) {// IE<9 dies on focus/blur to hidden element (#1486,#12518)
              // only reproducible on winXP IE8 native, not IE9 in IE8 mode
            }

            jQuery.event.triggered = undefined;

            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }

      return event.result;
    },
    dispatch: function dispatch(event) {
      // Make a writable jQuery.Event from the native event object
      event = jQuery.event.fix(event);

      var i,
          ret,
          handleObj,
          matched,
          j,
          handlerQueue = [],
          args = _slice.call(arguments),
          handlers = (jQuery._data(this, "events") || {})[event.type] || [],
          special = jQuery.event.special[event.type] || {}; // Use the fix-ed jQuery.Event rather than the (read-only) native event


      args[0] = event;
      event.delegateTarget = this; // Call the preDispatch hook for the mapped type, and let it bail if desired

      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      } // Determine handlers


      handlerQueue = jQuery.event.handlers.call(this, event, handlers); // Run delegates first; they may want to stop propagation beneath us

      i = 0;

      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;

        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
          // Triggered event must either 1) have no namespace, or
          // 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
          if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      } // Call the postDispatch hook for the mapped type


      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }

      return event.result;
    },
    handlers: function handlers(event, _handlers) {
      var sel,
          handleObj,
          matches,
          i,
          handlerQueue = [],
          delegateCount = _handlers.delegateCount,
          cur = event.target; // Find delegate handlers
      // Black-hole SVG <use> instance trees (#13180)
      // Avoid non-left-click bubbling in Firefox (#3861)

      if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {
        /* jshint eqeqeq: false */
        for (; cur != this; cur = cur.parentNode || this) {
          /* jshint eqeqeq: true */
          // Don't check non-elements (#13208)
          // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
          if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
            matches = [];

            for (i = 0; i < delegateCount; i++) {
              handleObj = _handlers[i]; // Don't conflict with Object.prototype properties (#13203)

              sel = handleObj.selector + " ";

              if (matches[sel] === undefined) {
                matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [cur]).length;
              }

              if (matches[sel]) {
                matches.push(handleObj);
              }
            }

            if (matches.length) {
              handlerQueue.push({
                elem: cur,
                handlers: matches
              });
            }
          }
        }
      } // Add the remaining (directly-bound) handlers


      if (delegateCount < _handlers.length) {
        handlerQueue.push({
          elem: this,
          handlers: _handlers.slice(delegateCount)
        });
      }

      return handlerQueue;
    },
    fix: function fix(event) {
      if (event[jQuery.expando]) {
        return event;
      } // Create a writable copy of the event object and normalize some properties


      var i,
          prop,
          copy,
          type = event.type,
          originalEvent = event,
          fixHook = this.fixHooks[type];

      if (!fixHook) {
        this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
      }

      copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
      event = new jQuery.Event(originalEvent);
      i = copy.length;

      while (i--) {
        prop = copy[i];
        event[prop] = originalEvent[prop];
      } // Support: IE<9
      // Fix target property (#1925)


      if (!event.target) {
        event.target = originalEvent.srcElement || document;
      } // Support: Chrome 23+, Safari?
      // Target should not be a text node (#504, #13143)


      if (event.target.nodeType === 3) {
        event.target = event.target.parentNode;
      } // Support: IE<9
      // For mouse/key events, metaKey==false if it's undefined (#3368, #11328)


      event.metaKey = !!event.metaKey;
      return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
    },
    // Includes some event props shared by KeyEvent and MouseEvent
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    special: {
      load: {
        // Prevent triggered image.load events from bubbling to window.load
        noBubble: true
      },
      focus: {
        // Fire native event if possible so blur/focus sequence is correct
        trigger: function trigger() {
          if (this !== safeActiveElement() && this.focus) {
            try {
              this.focus();
              return false;
            } catch (e) {// Support: IE<9
              // If we error on focus to hidden element (#1486, #12518),
              // let .trigger() run the handlers
            }
          }
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function trigger() {
          if (this === safeActiveElement() && this.blur) {
            this.blur();
            return false;
          }
        },
        delegateType: "focusout"
      }
    }
  };

  jQuery.Event = function (src, props) {
    // Allow instantiation without the 'new' keyword
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    } // Event object


    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type; // Events bubbling up the document may have been marked as prevented
      // by a handler lower down the tree; reflect the correct value.

      this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && // Support: IE < 9, Android < 4.0
      src.returnValue === false ? returnTrue : returnFalse; // Event type
    } else {
      this.type = src;
    } // Put explicitly provided properties onto the event object


    if (props) {
      jQuery.extend(this, props);
    } // Create a timestamp if incoming event doesn't have one


    this.timeStamp = src && src.timeStamp || jQuery.now(); // Mark it as fixed

    this[jQuery.expando] = true;
  }; // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
  // http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html


  jQuery.Event.prototype = {
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;

      if (!e) {
        return;
      } // If stopPropagation exists, run it on the original event


      if (e.stopPropagation) {
        e.stopPropagation();
      } // Support: IE
      // Set the cancelBubble property of the original event to true


      e.cancelBubble = true;
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;

      if (e && e.stopImmediatePropagation) {
        e.stopImmediatePropagation();
      }

      this.stopPropagation();
    }
  }; // Create mouseenter/leave events using mouseover/out and event-time checks

  jQuery.fn.extend({
    on: function on(types, selector, data, fn,
    /*INTERNAL*/
    one) {
      var type, origFn; // Types can be a map of types/handlers

      if (_typeof(types) === "object") {
        // ( types-Object, selector, data )
        if (typeof selector !== "string") {
          // ( types-Object, data )
          data = data || selector;
          selector = undefined;
        }

        for (type in types) {
          this.on(type, selector, data, types[type], one);
        }

        return this;
      }

      if (data == null && fn == null) {
        // ( types, fn )
        fn = selector;
        data = selector = undefined;
      } else if (fn == null) {
        if (typeof selector === "string") {
          // ( types, selector, fn )
          fn = data;
          data = undefined;
        } else {
          // ( types, data, fn )
          fn = data;
          data = selector;
          selector = undefined;
        }
      }

      if (fn === false) {
        fn = returnFalse;
      } else if (!fn) {
        return this;
      }

      if (one === 1) {
        origFn = fn;

        fn = function fn(event) {
          // Can use an empty set, since event contains the info
          jQuery().off(event);
          return origFn.apply(this, arguments);
        }; // Use same guid so caller can remove using origFn


        fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
      }

      return this.each(function () {
        jQuery.event.add(this, types, fn, data, selector);
      });
    },
    trigger: function trigger(type, data) {
      return this.each(function () {
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function triggerHandler(type, data) {
      var elem = this[0];

      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    }
  });
  var nodeHook,
      boolHook,
      ruseDefault = /^(?:checked|selected)$/i,
      getSetAttribute = support.getSetAttribute,
      getSetInput = support.input;
  var rfocusable = /^(?:input|select|textarea|button|object)$/i,
      rclickable = /^(?:a|area)$/i;
  var rclass = /[\t\r\n\f]/g; // Return jQuery for attributes-only inclusion

  jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function (i, name) {
    // Handle event binding
    jQuery.fn[name] = function (data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  });
  var r20 = /%20/g,
      rbracket = /\[\]$/,
      rCRLF = /\r?\n/g,
      rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
      rsubmittable = /^(?:input|select|textarea|keygen)/i;

  function buildParams(prefix, obj, traditional, add) {
    var name;

    if (jQuery.isArray(obj)) {
      // Serialize array item.
      jQuery.each(obj, function (i, v) {
        if (traditional || rbracket.test(prefix)) {
          // Treat each array item as a scalar.
          add(prefix, v);
        } else {
          // Item is non-scalar (array or object), encode its numeric index.
          buildParams(prefix + "[" + (_typeof(v) === "object" ? i : "") + "]", v, traditional, add);
        }
      });
    } else if (!traditional && jQuery.type(obj) === "object") {
      // Serialize object item.
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {
      // Serialize scalar item.
      add(prefix, obj);
    }
  } // Serialize an array of form elements or a set of
  // key/values into a query string


  jQuery.param = function (a, traditional) {
    var prefix,
        s = [],
        add = function add(key, value) {
      // If value is a function, invoke it and return its value
      value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
      s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
    }; // Set traditional to true for jQuery <= 1.3.2 behavior.


    if (traditional === undefined) {
      traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
    } // If an array was passed in, assume that it is an array of form elements.


    if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
      // Serialize the form elements
      jQuery.each(a, function () {
        add(this.name, this.value);
      });
    } else {
      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it), otherwise encode params recursively.
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    } // Return the resulting serialization


    return s.join("&").replace(r20, "+");
  };

  var // Map over jQuery in case of overwrite
  _jQuery = window.jQuery,
      // Map over the $ in case of overwrite
  _$ = window.$;

  jQuery.noConflict = function (deep) {
    if (window.$ === jQuery) {
      window.$ = _$;
    }

    if (deep && window.jQuery === jQuery) {
      window.jQuery = _jQuery;
    }

    return jQuery;
  }; // Expose jQuery and $ identifiers, even in
  // AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
  // and CommonJS for browser emulators (#13566)


  if (_typeof(noGlobal) === strundefined) {
    window.jQuery = window.$ = jQuery;
  }

  return jQuery;
});
/*! lifecycle.es5.js v0.1.2  https://github.com/GoogleChromeLabs/page-lifecycle */

/* jshint ignore:start */


if (typeof window.PARSELY === "undefined") {
  window.PARSELY = {};
}

!function (e, t) {
  e._lifecycle = t();
}(window.PARSELY, function () {
  "use strict";

  var e = void 0;

  try {
    new EventTarget(), e = !1;
  } catch (t) {
    e = !1;
  }

  var t = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
  },
      n = function n(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  },
      i = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }

    return function (t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t;
    };
  }(),
      r = function r(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + _typeof(t));
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  },
      a = function a(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != _typeof(t) && "function" != typeof t ? e : t;
  },
      s = function () {
    function e() {
      n(this, e), this._registry = {};
    }

    return i(e, [{
      key: "addEventListener",
      value: function value(e, t) {
        this._getRegistry(e).push(t);
      }
    }, {
      key: "removeEventListener",
      value: function value(e, t) {
        var n = this._getRegistry(e),
            i = n.indexOf(t);

        i > -1 && n.splice(i, 1);
      }
    }, {
      key: "dispatchEvent",
      value: function value(e) {
        return e.target = this, Object.freeze(e), this._getRegistry(e.type).forEach(function (t) {
          return t(e);
        }), !0;
      }
    }, {
      key: "_getRegistry",
      value: function value(e) {
        return this._registry[e] = this._registry[e] || [];
      }
    }]), e;
  }(),
      o = e ? EventTarget : s,
      u = e ? Event : function e(t) {
    n(this, e), this.type = t;
  },
      f = function(){}(),
      c = "active",
      h = "passive",
      d = "hidden",
      l = "frozen",
      p = "terminated",
      v = "object" === ("undefined" == typeof safari ? "undefined" : t(safari)) && safari.pushNotification,
      y = ["focus", "blur", "visibilitychange", "freeze", "resume", "pageshow", "onpageshow" in self ? "pagehide" : "unload"],
      g = function g(e) {
    return e.preventDefault(), e.returnValue = "Are you sure?";
  },
      _ = [[c, h, d, p], [c, h, d, l], [d, h, c], [l, d], [l, c], [l, h]].map(function(){}),
      b = function b() {
    return document.visibilityState === d ? d : document.hasFocus() ? c : h;
  };

  return new (function (e) {
    function(){}

    return r(t, o), i(t, [{
      key: "addUnsavedChanges",
      value: function value(e) {
        !this._unsavedChanges.indexOf(e) > -1 && (0 === this._unsavedChanges.length && addEventListener("beforeunload", g), this._unsavedChanges.push(e));
      }
    }, {
      key: "removeUnsavedChanges",
      value: function value(e) {
        var t = this._unsavedChanges.indexOf(e);

        t > -1 && (this._unsavedChanges.splice(t, 1), 0 === this._unsavedChanges.length && removeEventListener("beforeunload", g));
      }
    }, {
      key: "_dispatchChangesIfNeeded",
      value: function value(e, t) {
        if (t !== this._state) for (var n = function(){}(this._state, t), i = 0; i < n.length - 1; ++i) {
          var r = n[i],
              a = n[i + 1];
          this._state = a, this.dispatchEvent(new f("statechange", {
            oldState: r,
            newState: a,
            originalEvent: e
          }));
        }
      }
    }, {
      key: "_handleEvents",
      value: function value(e) {
        switch (v && clearTimeout(this._safariBeforeUnloadTimeout), e.type) {
          case "pageshow":
          case "resume":
            this._dispatchChangesIfNeeded(e, b());

            break;

          case "focus":
            this._dispatchChangesIfNeeded(e, c);

            break;

          case "blur":
            this._state === c && this._dispatchChangesIfNeeded(e, b());
            break;

          case "pagehide":
          case "unload":
            this._dispatchChangesIfNeeded(e, e.persisted ? l : p);

            break;

          case "visibilitychange":
            this._state !== l && this._state !== p && this._dispatchChangesIfNeeded(e, b());
            break;

          case "freeze":
            this._dispatchChangesIfNeeded(e, l);

        }
      }
    }, {
      key: "state",
      get: function get() {
        return this._state;
      }
    }, {
      key: "pageWasDiscarded",
      get: function get() {
        return document.wasDiscarded || !1;
      }
    }]), t;
  }())();
});
/* jshint ignore:end */

/**
 * Utility functions
 */

(function () {
  this.PARSELY = this.PARSELY || {};
  var root = this.PARSELY,
      util;
  root.util = {};
  util = root.util;
  /**
   * The actual alias we use is a little bit tricky.  In theory, we always
   * want window.top, but it's possible that some third-party site (let's say
   * Google) offers a version of the page in an iFrame.  Now we have a
   * scenario where we have the publisher's content in an iFrame.  If the
   * publisher has our JS in the page, then we should just use window.  If
   * our JS is in an iFrame, we should use window.parent. We have to be
   * careful that we have access to window.top or window.parent and resort
   * to window as a fallback.
   *
   * @returns {Window} A safe window object to use.
   */

  util.getWindow = function () {
    if (root.getWindow && typeof root.getWindow === "function") {
      return root.getWindow();
    }

    try {
      window.top.document.cookie; // jshint ignore:line

      return window.top;
    } catch (ex1) {
      // We didn't have access to window.top, try window.parent
      try {
        window.parent.document.cookie; // jshint ignore:line

        return window.parent;
      } catch (ex2) {
        // We didn't have access to window.top or window.parent, fallback
        // to window
        return window; // fallback
      }
    }
  };
  /*
   * Set a function attribute on `window` without clobbering an existing attribute
   * with the same name
   */


  util.windowSetFunction = function (attrName, callback) {
    var windowAlias = util.getWindow();
    var existingCallback = windowAlias[attrName];

    windowAlias[attrName] = function () {
      callback();

      if (typeof existingCallback === "function") {
        existingCallback();
      }
    };
  };
  /**
   * Cross-browser safe way to add an event listener to the window (or
   * document for IE).
   */


  util.windowAddEventListener = function (evt, callback) {
    // take advantage of passive event listeners in Chrome 51+
    // explanation: https://github.com/Parsely/time-engaged/pull/4/files/3820123e17a630383ad1847d6c578c60a62ff311#r69626677
    var supportsPassive = false;

    try {
      addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function get() {
          supportsPassive = true;
        }
      }));
    } catch (e) {}

    var optionsOrCapture = false;

    if (supportsPassive) {
      optionsOrCapture = {
        passive: true,
        capture: false
      };
    }

    if (typeof window.addEventListener !== 'undefined') {
      return window.addEventListener(evt, callback, optionsOrCapture);
    } else if (typeof document.attachEvent !== 'undefined') {
      return document.attachEvent("on" + evt, callback);
    }

    return false;
  };
  /**
   * Cross-browser safe way to add an event listener to an object.
   * @param  {Object}   obj        object to add the listener to
   * @param  {String}   evt        the event type to listen for (e.g. "click")
   * @param  {Function} callback   callback function after event is triggered
   * @param  {Boolean}  useCapture see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
   * @return {Object}              the result of addEventListener/attachEvent
   */


  util.objAddEventListener = function (obj, evt, callback, useCapture) {
    useCapture = typeof useCapture === 'undefined' ? false : useCapture;

    if (typeof obj.addEventListener !== 'undefined') {
      return obj.addEventListener(evt, callback, useCapture);
    } else if (typeof obj.attachEvent !== 'undefined') {
      return obj.attachEvent('on' + evt, callback);
    }

    return false;
  };

  util.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  /**
   * Determine which url to use for a given event
   * @returns {String}
   */


  util.getEventUrl = function () {
    var eventUrl; // allow direct url specification, or defer to previous requests

    if (root.config.eventUrl) {
      eventUrl = root.config.eventUrl;
    } else if (root.lastRequest) {
      eventUrl = root.lastRequest.url;
    } else {
      eventUrl = util.getWindow().location.href;
    }

    return eventUrl;
  };

  util.isSafari = function () {
    return navigator.vendor && navigator.vendor.indexOf('Apple') > -1 && navigator.userAgent && navigator.userAgent.indexOf('CriOS') === -1 && navigator.userAgent.indexOf('FxiOS') === -1;
  };

  util.isFirefox = function () {
    return typeof InstallTrigger !== 'undefined';
  };

  util.isIE = function () {
    return navigator.userAgent && navigator.userAgent.indexOf('MSIE') > -1 && navigator.userAgent.indexOf('Trident/') > -1;
  };
  /**
   * Get access to window.crypto via util.getWindow
   * This exists for ease of testing.
   * @returns {Object}
   */


  util.getWindowCrypto = function () {
    var windowAlias = util.getWindow();

    if (windowAlias) {
      return windowAlias.crypto;
    }
  };
  /**
   * Generate a UUID with or without access to window.crypo
   * NOTE: It's not safe to use Math.random() to generate UUIDs in the browser
   * see: https://v8.dev/blog/math-random
   * If window has access to crypto module then use it to generate UUID
   * https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
   * @param  {String}   prefix        An optional prefix to add to the UUID
   * @returns {String}
   */


  util.makeUUID = function () {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var windowCrytpo = util.getWindowCrypto();

    if (windowCrytpo) {
      return prefix + ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
        return (c ^ windowCrytpo.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
      });
    } else {
      return prefix + 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/x/g, function () {
        var v = Math.random() * 16 | 0;
        return v.toString(16);
      });
    }
  };
  /**
   * JS implementation of Java's String.hashCode method
   * simple, non-cryptographic hashing function with known collisions
   * https://stackoverflow.com/a/65239086
   * Java implementation: https://hg.openjdk.java.net/jdk8/jdk8/jdk/file/687fd7c7986d/src/share/classes/java/lang/String.java#l1439
   *
   * Python implementation (https://gist.github.com/hanleybrand/5224673):
   *
   * # hex value operations limit Python ints to signed 32 bit values, which define ints in Java
   * def string_hash_code(str):
   *     hash = 0
   *     for char in str:
   *         hash = (31 * hash + ord(char)) & 0xFFFFFFFF
   *     return ((hash + 0x80000000) & 0xFFFFFFFF) - 0x80000000
   *
   * @param {String} str the string to hash
   * @returns {int}
   */


  util.stringHashCode = function (str) {
    var hash = 0;

    if (!util.isIE()) {
      for (var i = 0; i < str.length; ++i) {
        hash = Math.imul(31, hash) + str.charCodeAt(i);
      }
    } else {
      for (var j = 0; j < str.length; ++j) {
        hash = (hash << 5) - hash + str.charCodeAt(j);
      }
    }

    return hash | 0; // bitwise OR with 0 casts to 32-bit integer
  };

  util.now = function () {
    if (typeof performance !== "undefined" && typeof performance.now === "function") {
      return Math.round(performance.timing.navigationStart + performance.now());
    } else {
      return new Date().getTime();
    }
  };
})();
/**
 * Cookies.js - 1.1.0
 * Adapted from https://github.com/ScottHamper/Cookies
 */


(function (root) {
  'use strict';

  var factory = function factory(window) {
    var Cookies = function Cookies(key, value, options) {
      return arguments.length === 1 ? Cookies.get(key) : Cookies.set(key, value, options);
    }; // Allows for setter injection in unit tests


    Cookies._document = window.document; // Used to ensure cookie keys do not collide with
    // built-in `Object` properties

    Cookies._cacheKeyPrefix = 'cookey.'; // Hurr hurr, :)

    Cookies._maxExpireDate = new Date('Fri, 31 Dec 9999 23:59:59 UTC');
    Cookies.defaults = {
      path: '/',
      secure: false
    };

    Cookies.get = function (key) {
      Cookies._renewCache();

      return Cookies._cache[Cookies._cacheKeyPrefix + key];
    };

    Cookies.getJSON = function(){};

    Cookies.set = function (key, value, options) {
      options = Cookies._getExtendedOptions(options);
      options.expires = Cookies._getExpiresDate(value === undefined ? -1 : options.expires);

      try {
        Cookies._document.cookie = Cookies._generateCookieString(key, value, options);
      } catch (err) {
        root.console.log(err);
      }

      return Cookies;
    };

    Cookies.setJSON = function (key, value, options) {
      Cookies.set(key, root.JSON.stringify(value), options);
      return Cookies;
    };

    Cookies.extendExpiry = function (key, expires) {
      var value = Cookies.get(key);

      if (value === undefined) {
        return false; // nothing to do
      }

      Cookies.set(key, value, expires);
    };

    Cookies.expire = function (key, options) {
      if (key.constructor === Array) {
        for (var i = 0; i < key.length; i++) {
          Cookies.set(key[i], undefined, options);
        }
      } else {
        return Cookies.set(key, undefined, options);
      }
    };

    Cookies._getExtendedOptions = function (options) {
      return {
        path: options && options.path || Cookies.defaults.path,
        domain: options && options.domain || Cookies.defaults.domain,
        expires: options && options.expires || Cookies.defaults.expires,
        secure: options && options.secure !== undefined ? options.secure : Cookies.defaults.secure
      };
    };

    Cookies._isValidDate = function (date) {
      return Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime());
    };

    Cookies._getExpiresDate = function (expires, now) {
      now = now || new Date();

      if (typeof expires === 'number') {
        expires = expires === Infinity ? Cookies._maxExpireDate : new Date(now.getTime() + expires * 1000);
      } else if (typeof expires === 'string') {
        expires = new Date(expires);
      }

      if (expires && !Cookies._isValidDate(expires)) {
        throw new Error('`expires` parameter cannot be converted to a valid Date instance');
      }

      return expires;
    };

    Cookies._generateCookieString = function (key, value, options) {
      key = key.replace(/[^#$&+\^`|]/g, encodeURIComponent);
      key = key.replace(/\(/g, '%28').replace(/\)/g, '%29');
      value = (value + '').replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent);
      options = options || {};
      var domain = options.domain || root.cookieDomain || Cookies._autoCookieDomain;
      var cookieString = key + '=' + value;
      cookieString += options.path ? ';path=' + options.path : '';
      cookieString += domain ? ';domain=' + domain : '';
      cookieString += options.expires ? ';expires=' + options.expires.toUTCString() : '';
      cookieString += options.secure ? ';secure' : '';
      return cookieString;
    };

    Cookies._getCacheFromString = function (documentCookie) {
      var cookieCache = {};
      var cookiesArray = documentCookie ? documentCookie.split('; ') : [];

      for (var i = 0; i < cookiesArray.length; i++) {
        var cookieKvp = Cookies._getKeyValuePairFromCookieString(cookiesArray[i]);

        if (cookieKvp != null) {
          var cacheKey = Cookies._cacheKeyPrefix + cookieKvp.key;

          if (cookieCache[cacheKey] === undefined) {
            cookieCache[cacheKey] = cookieKvp.value;
          }
        }
      }

      return cookieCache;
    };

    Cookies._getKeyValuePairFromCookieString = function (cookieString) {
      // "=" is a valid character in a cookie value according to RFC6265, so cannot `split('=')`
      var separatorIndex = cookieString.indexOf('='); // IE omits the "=" when the cookie value is an empty string

      separatorIndex = separatorIndex < 0 ? cookieString.length : separatorIndex;
      var cookieKey = cookieString.substr(0, separatorIndex),
          cookieValue = cookieString.substr(separatorIndex + 1);

      try {
        cookieKey = decodeURIComponent(cookieKey);
        cookieValue = decodeURIComponent(cookieValue);
      } catch (e) {
        return null;
      }

      return {
        key: cookieKey,
        value: cookieValue
      };
    };

    Cookies._renewCache = function () {
      try {
        if (Cookies._cachedDocumentCookie !== Cookies._document.cookie) {
          Cookies._cache = Cookies._getCacheFromString(Cookies._document.cookie);
          Cookies._cachedDocumentCookie = Cookies._document.cookie;
        }
      } catch (err) {
        root.console.log(err);
      }
    };

    Cookies._isValidDomain = function (domain) {
      var testKey = "cookies.js_dtest",
          areEnabled = Cookies.set(testKey, 1, {
        "domain": domain
      }).get(testKey) === '1';
      Cookies.expire(testKey, {
        "domain": domain
      });
      return areEnabled;
    };
    /**
     * Automatically determine the top level domain to use for all cookies.
     * Adding actual TLD detection would add a lot of weight for Javascript
     * so instead we take a novel approach described in https://developers.google.com/analytics/devguides/collection/analyticsjs/domains#auto.
     * Assuming the user is viewing www.example.co.uk, we try to create a
     * dummy cookie with the following domains:
     * - "co.uk"
     * - "example.co.uk"
     *
     * example.co.uk is the first domain that successfully allows us to set
     * a cookie so this is assumed to be the highest top level domain that
     * we can use.
     */


    Cookies._getAutoCookieDomain = function () {
      var windowAlias = root.util.getWindow(),
          hostname = windowAlias.location.hostname; // Check to see if we are dealing with an IPv4 address

      if (!isNaN(parseInt(hostname.replace(".", ""), 10))) {
        // Even if we have an IP address, early Opera versions seem to
        // have a bug so we still have to try and set a cookie to see
        return Cookies._isValidDomain(hostname) ? hostname : null;
      }

      var parts = hostname.split("."); // If we have something like "localhost", bailout early

      if (parts.length === 1) {
        return hostname;
      }

      var cookieDomain;

      for (var i = 2; i <= parts.length; i++) {
        var candidateDomain = parts.slice(-i).join(".");

        if (Cookies._isValidDomain(candidateDomain)) {
          cookieDomain = candidateDomain;
          break;
        }
      }

      return cookieDomain || hostname;
    };

    Cookies._autoCookieDomain = Cookies._getAutoCookieDomain();
    return Cookies;
  };

  root.Cookies = factory(root.util.getWindow());
})(this.PARSELY);

(function (root) {
  'use strict';

  var LocalStorage_ = function LocalStorage_() {};

  LocalStorage_.prototype = function () {
    var LocalStorage = function LocalStorage(key, value, options) {
      return arguments.length === 1 ? LocalStorage.get(key) : LocalStorage.set(key, value, options);
    };

    LocalStorage._keyPrefix = 'pStore-';
    LocalStorage._delimiter = '|^'; // unlikely to appear in stored values

    try {
      LocalStorage._store = root.util.getWindow().localStorage;
    } catch (e) {
      LocalStorage._store = undefined;
    }

    LocalStorage._baseDomain = null;
    LocalStorage._quotaErrors = ["NS_ERROR_DOM_QUOTA_REACHED", "QUOTA_EXCEEDED_ERR", "QuotaExceededError", "W3CException_DOM_QUOTA_EXCEEDED_ERR"];

    LocalStorage.get = function (key) {
      LocalStorage._migrateCookie(key);

      var stored = LocalStorage._store[LocalStorage._keyPrefix + key];

      if (typeof stored === "undefined") {
        return undefined;
      }

      try {
        stored = LocalStorage._deserialize(stored);
      } catch (err) {
        console.log("Error deserializing stored data for key " + key);
        LocalStorage.expire(key);
        return undefined;
      } // mimic cookie expiration behavior


      if (typeof stored.expires !== "undefined") {
        var expires = parseInt(stored.expires, 10);

        if (!isNaN(expires) && root.util.now() > expires) {
          LocalStorage.expire(key);
          return undefined;
        }
      }

      return stored.value;
    };

    LocalStorage.getJSON = function (key) {
      var value = LocalStorage.get(key);
      return typeof value === "undefined" ? value : root.JSON.parse(value);
    };

    LocalStorage.set = function (key, value, options) {
      var storeKey = LocalStorage._keyPrefix + key;

      if (typeof value === "undefined") {
        delete LocalStorage._store[storeKey];
        return LocalStorage;
      }

      options = root.Cookies._getExtendedOptions(options);

      var expires = root.Cookies._getExpiresDate(options.expires),
          toStore;

      if (typeof expires !== "undefined") {
        expires = expires.getTime();
      }

      try {
        toStore = LocalStorage._serialize({
          value: value,
          expires: expires
        });
      } catch (err) {
        console.log("Error serializing stored data for key " + key);
        return LocalStorage;
      }

      try {
        LocalStorage._store[storeKey] = toStore;
      } catch (err) {
        console.log("Error storing data for key " + storeKey + " in localStorage");

        if (LocalStorage._quotaErrors.indexOf(err.name) !== -1) {
          console.log("quota exceeded");
        }
      }

      return LocalStorage;
    };

    LocalStorage.setJSON = function (key, value, options) {
      LocalStorage.set(key, root.JSON.stringify(value), options);
      return LocalStorage;
    };

    LocalStorage.extendExpiry = function (key, expires) {
      var value = LocalStorage.get(key);

      if (typeof value === "undefined") {
        return false;
      }

      LocalStorage.set(key, value, expires);
    };

    LocalStorage.expire = function (key, options) {
      return LocalStorage.set(key, undefined, options);
    };

    LocalStorage._serialize = function (obj) {
      return obj.value + LocalStorage._delimiter + obj.expires;
    };

    LocalStorage._deserialize = function (value) {
      var parts = value.split(LocalStorage._delimiter);
      var deserialized = {
        value: parts[0]
      };

      if (parts.length > 1) {
        deserialized.expires = parts[1];
      }

      return deserialized;
    };
    /*
     * If there is stored cookie with name `key`, store its value in localStorage
     * and delete the cookie
     */


    LocalStorage._migrateCookie = function (key) {
      var storedCookie = root.Cookies.get(key);
      root.Cookies.expire(key);

      if (typeof storedCookie !== "undefined") {
        var expires = root.ParselyStorage.defaults[key],
            options = {};

        if (typeof expires !== "undefined") {
          options.expires = expires;
        }

        LocalStorage.set(key, storedCookie, options);
      }
    };

    return {
      constructor: LocalStorage,
      get: LocalStorage.get,
      getJSON: LocalStorage.getJSON,
      set: LocalStorage.set,
      setJSON: LocalStorage.setJSON,
      extendExpiry: LocalStorage.extendExpiry,
      expire: LocalStorage.expire
    };
  }();

  var ParselyStorage_ = function ParselyStorage_() {};

  ParselyStorage_.prototype = function () {
    var ParselyStorage = function ParselyStorage(key, value, options) {
      return arguments.length === 1 ? ParselyStorage.get(key) : ParselyStorage.set(key, value, options);
    };

    var LocalStorage = new LocalStorage_();

    var supportsLocalStorage = function supportsLocalStorage() {
      var mod = LocalStorage._keyPrefix;

      try {
        root.util.getWindow().localStorage.setItem(mod, mod);
        root.util.getWindow().localStorage.removeItem(mod);
        return true;
      } catch (e) {
        return false;
      }
    };

    var shouldUseLocalStorage = function shouldUseLocalStorage() {
      var isAmp = false;
      var visitorInfo = root.Cookies.get("_parsely_visitor");

      if (typeof visitorInfo !== "undefined") {
        // simple check to avoid a heavy json parse
        if (visitorInfo.charAt(0) !== '{') {
          isAmp = true;
        }
      }

      if (root.util.isSafari()) {
        return true;
      }

      return root.use_localstorage === true && !isAmp;
    };

    var _impl = supportsLocalStorage() && shouldUseLocalStorage() ? LocalStorage : root.Cookies;

    return {
      supportsCookies: "cookie" in document && (document.cookie.length > 0 || (document.cookie = "test").indexOf.call(document.cookie, "test") > -1),
      get: _impl.get,
      getJSON: _impl.getJSON,
      set: _impl.set,
      setJSON: _impl.setJSON,
      extendExpiry: _impl.extendExpiry,
      expire: _impl.expire,
      defaults: {
        "visitor": {
          key: "_parsely_visitor",
          expires: 60 * 60 * 24 * 365 / 12 * 13,
          // 13 months
          secure: false
        },
        "session": {
          key: "_parsely_session",
          expires: 60 * 30,
          // 30 minutes
          secure: false
        }
      }
    };
  }();

  root.ParselyStorage = new ParselyStorage_();
})(this.PARSELY);

(function () {
  var root = this.PARSELY,
      Class = root.Class,
      ParselyStorage = root.ParselyStorage,
      console = root.console,
      JSON = root.JSON,
      LEGACY_COOKIE_NAME = "parsely_uuid",
      // where we used to store visitor ID
  REQUIRED_KEYS = ["id"],
      OPTOUT_UUID = "OPTOUT";
  var VisitorManager = Class.extend({
    init: function init() {
      this.visitorCookieName = root.visitorCookieName || ParselyStorage.defaults.visitor.key;
      this.visitorCookieTimeoutSecs = root.visitorCookieTimeoutSecs || ParselyStorage.defaults.visitor.expires;
      this.visitorCookieSecure = root.visitorCookieSecure || ParselyStorage.defaults.visitor.secure;
      this.legacyVisitorCookieName = root.legacyVisitorCookieName || LEGACY_COOKIE_NAME;
    },

    /**
     * Fetch visitor information from the appropriate cookie. For visitor
     * ID, will first try to fetch from LEGACY_COOKIE_NAME, then fall back
     * to using UUID-4 returned from config server.
     * @return {[object]} Visitor info object which contains the following
     *                    params:
     *                    - id (required): visitor ID
     *                    - session_count (optional): number of sessions the visitor
     *                                                has had (0 if this is the first
     *                                                session). Requires session
     *                                                module.
     *                    - last_session_ts (optional) Unix timestamp (milliseconds)
     *                                                 of last session this visitor
     *                                                 had (0 if this is the first
     *                                                 session). Requires Session
     *                                                 module.
     */
    getVisitorInfo: function getVisitorInfo(shouldExtendExisting) {
      shouldExtendExisting = shouldExtendExisting || false;
      var visitorInfo = ParselyStorage.get(this.visitorCookieName);

      if (typeof visitorInfo === "undefined") {
        var visitorId = ParselyStorage.get(this.legacyVisitorCookieName);
        var configId = root.config.apikey_uuid || root.config.uuid;

        if (root.optout_disabled_cookies !== false && typeof visitorId === "undefined" && ParselyStorage.supportsCookies === false) {
          visitorId = OPTOUT_UUID;
          console.log('Setting visitor ID to OPTOUT');
        }

        if (typeof visitorId === "undefined" && configId !== null) {
          visitorId = configId;
          console.log('No existing visitor ID found, using UUID from config: ' + visitorId);
        } else {
          console.log('Using existing value for visitor ID: ' + visitorId);
        }

        visitorInfo = this.initVisitor(visitorId); // Get rid of legacy parsely_uuid cookie if it exists

        ParselyStorage.expire(LEGACY_COOKIE_NAME);
      } else {
        // In the event that a publisher is hosting AMP pages, a user
        // with no cookies loads an AMP page first, then any non-AMP
        // page, the visitorCookieName cookie will not be a JSON object
        // but rather a string like
        // "if_cz5dyvTKxrE96YIXklXaIltWsbMH49bl4QwjI7oW2VFl4QAhpeFgJyvXyjYIj"
        // we need to convert this to our visitorInfo object for later use
        var wasJSON = false;

        try {
          visitorInfo = JSON.parse(visitorInfo);
          wasJSON = true;
        } catch (err) {
          console.log('Unable to JSON parse visitorInfo "' + visitorInfo + '", assuming ampid.'); // Initialize a new visitorInfo, but maintain the old ID.
          // Session information goes back to 0 which, although
          // technically inaccurate, is better than making a bogus assumption

          visitorInfo = this.initVisitor(visitorInfo);
        }

        if (wasJSON) {
          if (shouldExtendExisting) {
            this.extendVisitorExpiry();
          }
        }
      } // Legacy support for root.config.parsely_site_uuid


      root.config.parsely_site_uuid = visitorInfo.id;
      return visitorInfo;
    },
    initVisitor: function initVisitor(visitorId) {
      return this.setVisitorInfo({
        "id": visitorId,
        "session_count": 0,
        "last_session_ts": 0
      });
    },
    setVisitorInfo: function setVisitorInfo(visitorInfo) {
      for (var i = 0; i < REQUIRED_KEYS.length; i++) {
        var key = REQUIRED_KEYS[i];

        if (typeof visitorInfo[key] === "undefined" || visitorInfo[key] === null) {
          return false;
        }
      }

      ParselyStorage.setJSON(this.visitorCookieName, visitorInfo, {
        expires: this.visitorCookieTimeoutSecs,
        secure: this.visitorCookieSecure
      });
      return visitorInfo;
    },
    extendVisitorExpiry: function extendVisitorExpiry() {
      ParselyStorage.extendExpiry(this.visitorCookieName, {
        expires: this.visitorCookieTimeoutSecs,
        secure: this.visitorCookieSecure
      });
    }
  });
  root.visitorManager = new VisitorManager();
})();

(function () {
  var root = this.PARSELY,
      util = root.util,
      Class = root.Class,
      ParselyStorage = root.ParselyStorage,
      console = root.console,
      visitorManager = root.visitorManager;
  var SessionManager = Class.extend({
    /**
     * Initializes a SessionManager object and therefore sessions to be
     * ready for use.  Ensures that the Parse.ly visitor cookie exists and
     * also initializes a Parse.ly session / session cookie.
     */
    init: function init() {
      this.windowAlias = util.getWindow();
      this.documentAlias = this.windowAlias.document; // Config variable setup, users can override the session cookie
      // names, but not the timeouts unless they go to undocumented
      // PARSELY.sessionManager object. We leave this for us so that we
      // can modify during unit tests

      this.sessionCookieName = root.sessionCookieName || ParselyStorage.defaults.session.key;
      this.sessionCookieTimeoutSecs = ParselyStorage.defaults.session.expires;
      this.sessionCookieSecure = root.sessionCookieSecure || ParselyStorage.defaults.session.secure;
      console.log("Initializing session."); // Ensure the session is started, but don't yet extend an existing
      // session, a pixel firing will take care of that

      this.getSession(false);
    },

    /**
     * Return the current session information
     * @param  {boolean} shouldExtendExisting indicates whether existing
     *                                        sessions should be extended.
     *                                        Basically a short form to
     *                                        prevent subsequent calls to
     *                                        extendSessionExpiry.
     * @return {Object} Session object which contains the following parms:
     *                  - sid: session ID == session_count
     *                  - surl: initial URL of the session
     *                  - sref: initial referrer of the session
     *                  - sts: Unix timestamp (milliseconds) of when the session was
     *                         created
     *                  - slts: Unix timestamp (milliseconds) of the last session the
     *                          user had, 0 if this is the user's first session
     */
    getSession: function getSession(shouldExtendExisting) {
      shouldExtendExisting = shouldExtendExisting || false;
      var visitorInfo = visitorManager.getVisitorInfo();
      var session = ParselyStorage.getJSON(this.sessionCookieName);

      if (typeof session === "undefined") {
        var session_count, last_session_ts;

        if (visitorInfo === false) {
          session_count = 1;
          last_session_ts = 0;
        } else {
          // New session, increment our count
          visitorInfo.session_count++;
          session_count = visitorInfo.session_count;
          last_session_ts = visitorInfo.last_session_ts;
        }

        var now = new Date(),
            url = util.getEventUrl(),
            ref = root.lastRequest ? root.lastRequest.urlref : this.documentAlias.referrer;
        session = {
          "sid": session_count,
          "surl": url,
          "sref": ref,
          "sts": now.getTime(),
          "slts": last_session_ts
        };
        console.log("Session expired/never existed, creating new " + "session with " + this.sessionCookieTimeoutSecs + "s timeout: " + root.JSON.stringify(session));
        ParselyStorage.setJSON(this.sessionCookieName, session, {
          expires: this.sessionCookieTimeoutSecs,
          secure: this.sessionCookieSecure
        }); // Update the visitor cookie

        visitorInfo.last_session_ts = session.sts;
        visitorManager.setVisitorInfo(visitorInfo);
      } else {
        if (shouldExtendExisting) {
          this.extendSessionExpiry();
        }
      }

      return session;
    },

    /**
     * Extend the current session expiry by an additional
     * this.sessionCookieTimeoutSecs
     */
    extendSessionExpiry: function extendSessionExpiry() {
      ParselyStorage.extendExpiry(this.sessionCookieName, {
        expires: this.sessionCookieTimeoutSecs,
        secure: this.sessionCookieSecure
      });
    }
  });
  root.sessionManager = new SessionManager();
})();

(function () {
  var root = this.PARSELY,
      Class = root.Class,
      util = root.util,
      JSON = root.JSON,
      $ = root.$,
      windowAlias = util.getWindow(),
      documentAlias = windowAlias.document;

  if (!('querySelector' in documentAlias && 'querySelectorAll' in documentAlias)) {
    // unsupported browser, disable
    root.enablePixelMetadata = false;
    return;
  }

  var chars = ['\x00', '\x01', '\x02', '\x03', '\x04', '\x05', '\x06', '\x07', '\x08', '\x0a', '\x0b', '\x0c', '\x0d', '\x0e', '\x0f', '\x10', '\x11', '\x12', '\x13', '\x14', '\x15', '\x16', '\x17', '\x18', '\x19', '\x1a', '\x1b', '\x1c', '\x1d', '\x1e', '\x1f'],
      htmlChars = ['&#0000;', '&#0001;', '&#0002;', '&#0003;', '&#0004;', '&#0005;', '&#0006;', '&#0007;', '&#0008;', '&#000a;', '&#000b;', '&#000c;', '&#000d;', '&#000e;', '&#000f;', '&#0010;', '&#0011;', '&#0012;', '&#0013;', '&#0014;', '&#0015;', '&#0016;', '&#0017;', '&#0018;', '&#0019;', '&#001a;', '&#001b;', '&#001c;', '&#001d;', '&#001e;', '&#001f;'],
      allowedPostTypes = [// when updating please update this file as well
  // https://github.com/Parsely/engineering/blob/master/crawl/parsely_scrapers/standards.py#L22-L24
  "newsarticle", "article", "techarticle", "reportagenewsarticle", "blogpost", "blogposting", "liveblogposting", "report", "review", "opinionnewsarticle", "analysisnewsarticle", "backgroundnewsarticle", "reviewnewsarticle", "creativework"],
      allowedIndexTypes = ["webpage"],
      allAllowedTypes = [].concat(allowedPostTypes, allowedIndexTypes),
      convertHTMLEntities = function convertHTMLEntities(text) {
    /* This converts &#34; into their character equivalents */
    var parser = new DOMParser();
    var doc = parser.parseFromString(text, 'text/html');
    return doc.body.textContent;
  },
      cleanAndParseEmbeddedJSON = function cleanAndParseEmbeddedJSON(text, returnList) {
    /*
        This does some cleanup of text and then tries to parse text as
        JSON. If returnList is true it will wrap the result in a list
        if it is not already a list.
    */
    var failRetval = returnList === true ? [] : {};
    var data = null; // Remove extra whitespace before doing CDATA check

    var rawJSON = $.trim(text);
    var endIdx; // Possible for pubs to define ld+json block using CDATA, so we strip
    // also possible for pubs to use lists, make sure this doesn't blow away the brackets on normal lists

    if (rawJSON.indexOf('//<![CDATA[') === 0) {
      rawJSON = rawJSON.substr(11);
      endIdx = rawJSON.length - 5;

      if (rawJSON.indexOf('//]]>') === endIdx) {
        rawJSON = rawJSON.substr(0, endIdx);
      }
    } else if (rawJSON.indexOf('/*<![CDATA[*/') === 0) {
      rawJSON = rawJSON.substr(13);
      endIdx = rawJSON.length - 7;

      if (rawJSON.indexOf('/*]]>*/') === endIdx) {
        rawJSON = rawJSON.substr(0, endIdx);
      }
    }

    rawJSON = rawJSON.replace(/,\s*(?=[\]|}])/g, '');
    $.each(chars, function (idx, individualCharacter) {
      rawJSON = rawJSON.replace(new RegExp(individualCharacter, "g"), '');
    });
    $.each(htmlChars, function (idx, individualCharacter) {
      rawJSON = rawJSON.replace(new RegExp(individualCharacter, "g"), '');
    }); // remove newlines

    rawJSON = rawJSON.replace(/\n/g, ''); // tabs to spaces

    rawJSON = rawJSON.replace(/\t/g, ' '); // tabs to spaces

    rawJSON = rawJSON.replace(/&#0009;/g, ' '); // remove extra slashes from crazy \xXX and \uDDDD escape sequences

    rawJSON = rawJSON.replace(/\\+((\\x[0-9a-fA-F]{2})|(\\u[0-9a-fA-F]{4}))/g, '$1'); // JSON.parse handles a lot of the things crawl had to explicitly handle.

    try {
      data = JSON.parse(rawJSON);
    } catch (err) {
      PARSELY.console.log('Error parsing JSON metadata: ' + err);
      return failRetval;
    }

    if (data instanceof Array) {
      // some publishers send arrays, Google
      return data;
    }

    if (data instanceof Object) {
      // some publishers send single objects
      if (returnList === true) {
        return [data];
      }

      return data;
    } // not a list or a single object


    return failRetval;
  },
      cleanHTMLControlSeq = function cleanHTMLControlSeq(txt) {
    /* This strips txt of any html-encoded control sequences */
    if (!(typeof txt === 'string' || txt instanceof String) || txt.length === 0) {
      return txt;
    }

    $.each(htmlChars, function (idx, character) {
      txt = txt.replace(new RegExp(character, "g"), '');
    });
    return txt;
  },
      cleanField = function cleanField(val) {
    /*
        This recursively zaps or replaces invalid entities in keys or
        values of an array, an object, or an array of objects.
    */
    if (val instanceof Array) {
      return $.each(val, function (idx, f) {
        return cleanField(f);
      });
    }

    if (val instanceof Object) {
      var retVal = {};

      for (var k in val) {
        retVal[cleanField(k)] = cleanField(val[k]);
      }

      return retVal;
    }

    if (val == null) {
      val = '';
    } else {
      val = val.toString();
      val = cleanHTMLControlSeq(val);
      val = convertHTMLEntities(val);
    }

    return val;
  },
      parselyGetMeta = function parselyGetMeta(key) {
    /*
        Given a key return the value of content attribute for the first
        metatag with a name or property attribute matching `parsely-{key}`
    */
    var metatags = documentAlias.querySelectorAll('meta[name="parsely-' + key + '"], meta[property="parsely-' + key + '"]');
    var content = null;
    $.each(metatags, function (idx, metatag) {
      if (content !== null) {
        return false;
      }

      if ('content' in metatag && metatag['content'] !== '') {
        content = cleanAndParseEmbeddedJSON(metatag['content'], false);
      }
    });
    return content;
  },
      parselyPubMeta = function parselyPubMeta() {
    /*
        If valid, return the `<meta name="parsely-metadata" content="...">`
        for the spider
    */
    var metadata = parselyGetMeta('metadata');

    if (metadata === null || metadata.length > 2000) {
      return null;
    }

    return metadata;
  };

  var Metadata = function Metadata() {};

  Metadata.prototype = function () {
    var MetadataParser = Class.extend({
      extractPageDescription: function extractPageDescription() {
        /* Placeholder, should be implemented in subclasses */
        throw Error('Not Implemented');
      },
      getMetadata: function getMetadata(pageDescription) {
        /*
            Get <meta parsely-metadata> html tags, do some formatting
            and merge with pageDescription data. Returns new metadata.
        */
        var tags = [];

        if (pageDescription.hasOwnProperty('tags')) {
          tags = pageDescription.tags;
          delete pageDescription.tags;

          if (typeof tags === 'string' || tags instanceof String) {
            tags = [tags];
          }
        } // we should prefer <meta parsely-metadata> tag for pubs that are currently using it
        // to not break anything


        var customMetadata = parselyPubMeta();

        if (customMetadata === null && pageDescription.hasOwnProperty('metadata')) {
          customMetadata = pageDescription['metadata'];
        }

        if (customMetadata !== null && !(typeof customMetadata === 'string' || tags instanceof String)) {
          // convering it to string to keep consistent output with parsely-metadata
          customMetadata = JSON.stringify(customMetadata);
        }

        var section = pageDescription.section || null;
        delete pageDescription.section;
        var metadata = {
          'metadata': customMetadata,
          'section': section
        };
        var filteredTags = [];
        $.each(tags, function (idx, tag) {
          if (tag !== null && tag.length > 0 && tag !== '') {
            filteredTags.push(tag);
          }
        });

        if (filteredTags.length > 0) {
          metadata['tags'] = filteredTags;
        }

        var filteredMetadata = {};
        $.each(metadata, function (key, value) {
          if (value !== null) {
            filteredMetadata[key] = value;
          }
        });

        if ($.isEmptyObject(filteredMetadata)) {
          filteredMetadata = null;
        }

        return filteredMetadata;
      },
      extract: function extract() {
        /*
            The entry point for each parser. It gets the pageDescription
            from the subclass. Cleans all the k/v pairs. Parses out the
            pubdate. Gets the metadata. Normalizes the author field into
            an array. Determines the page type and returns the result.
        */
        var pageDescription,
            author,
            sanitizedPageDescription = {},
            pageTypes = [];

        try {
          pageDescription = this.extractPageDescription();
        } catch (err) {
          PARSELY.console.log('Failed to extract page description: ' + err);
          return {};
        }

        if ($.isEmptyObject(pageDescription) || pageDescription === null) {
          return {};
        }

        $.each(pageDescription, function (key, value) {
          sanitizedPageDescription[cleanField(key)] = cleanField(value);
        });
        var metas = this.getMetadata(sanitizedPageDescription);

        if (metas !== null) {
          sanitizedPageDescription['metadata'] = metas;
        }

        if (sanitizedPageDescription.hasOwnProperty('author') && !sanitizedPageDescription.hasOwnProperty('authors')) {
          author = sanitizedPageDescription['author'];
          sanitizedPageDescription['authors'] = author instanceof Array ? author : [author];
          delete sanitizedPageDescription['author'];
        }

        if (sanitizedPageDescription.hasOwnProperty('type')) {
          pageTypes = sanitizedPageDescription.type instanceof Array ? sanitizedPageDescription.type : [sanitizedPageDescription.type];
        }

        var postPageTypes = [];
        var indexPageTypes = [];
        $.each(pageTypes, function (idx, pageType) {
          var lowerPageType = pageType.toLowerCase();

          if (allowedPostTypes.indexOf(lowerPageType) !== -1) {
            postPageTypes.push(lowerPageType);
          } else if (allowedIndexTypes.indexOf(lowerPageType) !== -1) {
            indexPageTypes.push(lowerPageType);
          }
        });

        if (postPageTypes.length > 0) {
          sanitizedPageDescription['type'] = 'post';
        } else if (indexPageTypes.length > 0) {
          sanitizedPageDescription['type'] = 'index';
        }

        return sanitizedPageDescription;
      }
    });
    var ParselyPageParser = MetadataParser.extend({
      extractPageDescription: function extractPageDescription() {
        /*
            Gets metadata from <meta name="parsely-page"> or
            <meta property="parsely-page">
        */
        return parselyGetMeta('page');
      }
    });
    var JSONLDParser = MetadataParser.extend({
      extractPageDescription: function extractPageDescription() {
        /*
            Gets metadata from <script type="application/ld+json">
        */
        var metadata = {
          'authors': []
        },
            validTags = {},
            fieldMapping = {
          '@type': 'type',
          'headline': 'title',
          'url': 'link',
          'thumbnailUrl': 'image_url',
          'dateCreated': 'pub_date',
          'datePublished': 'pub_date',
          'articleSection': 'section',
          'creator': 'authors',
          'contributor': 'authors',
          'author': 'authors',
          'keywords': 'tags',
          'articleId': 'post_id',
          'metadata': 'metadata',
          'isBasedOn': 'network_canonical',
          'identifier': 'network_id'
        };

        var parseAuthors = function parseAuthors(authorValues, listOfAuthors) {
          /*
              Author fields can be strings, objects, lists of objects
              Normalize to return a list
          */
          if (authorValues instanceof Array !== true) {
            authorValues = [authorValues];
          }

          $.each(authorValues, function (idx, value) {
            var nested_value = null;

            if (value instanceof Object === true) {
              if (value.hasOwnProperty('@type') && value['@type'] === 'Person' || value.hasOwnProperty('type') && value['type'] === 'Person') {
                nested_value = value['name'] || null;

                if (nested_value instanceof Object) {
                  nested_value = nested_value['name'] || null;
                }

                nested_value = [nested_value];
              }
            } else {
              if (typeof value === 'string' || value instanceof String) {
                nested_value = [value];
              } else if (value instanceof Array) {
                nested_value = value;
              }
            }

            if (nested_value !== null) {
              $.each(nested_value, function (idx, author) {
                if (listOfAuthors.indexOf(author) === -1 && author !== null) {
                  listOfAuthors.push(author);
                }
              });
            }
          });
          return listOfAuthors;
        };

        $.each(documentAlias.querySelectorAll('script[type="application/ld+json"]'), function (idx, ldTag) {
          var parsed = cleanAndParseEmbeddedJSON(ldTag.innerHTML, true); // second parameter forces list ret

          $.each(parsed, function (idx, entry) {
            // to prioritize NewsArticle over the other types for backwards compatibility, need
            // to loop through all of them first to make sure that we have them
            var entryTypes = '';

            if (entry.hasOwnProperty('@type')) {
              entryTypes = entry['@type'];
            }

            if (entryTypes instanceof Array !== true) {
              entryTypes = [entryTypes];
            }

            var formattedEntryTypes = [];
            $.each(entryTypes, function (idx, entryType) {
              formattedEntryTypes.push(entryType.toLowerCase());
            });
            $.each(formattedEntryTypes, function (idx, entryType) {
              if (allAllowedTypes.indexOf(entryType) !== -1) {
                validTags[entryType] = entry;
              }
            });
          });
        });
        var jsonLD;
        $.each(allAllowedTypes, function (idx, allowedType) {
          jsonLD = validTags[allowedType];

          if (jsonLD !== undefined) {
            return false;
          }
        });

        if (jsonLD === undefined) {
          return {};
        } // prefer datePublished to dateCreated — pop off dateCreated if both exist


        if (jsonLD.hasOwnProperty('datePublished') && jsonLD.hasOwnProperty('dateCreated')) {
          delete jsonLD.dateCreated;
        }

        $.each(jsonLD, function (key, value) {
          key = fieldMapping.hasOwnProperty(key) ? fieldMapping[key] : key;

          if (key === 'authors') {
            // creator, author, and contributor converge
            metadata['authors'] = parseAuthors(value, metadata['authors']);
          } else if (key === '@context') {
            return true;
          } else {
            // it's not an author so just assign it
            metadata[key] = value;
          }
        });
        return metadata;
      }
    });
    var AmpUrlParser = MetadataParser.extend({
      extractPageDescription: function extractPageDescription() {
        try {
          return {
            'amphtmlurl': documentAlias.querySelector('link[rel=amphtml]').href
          };
        } catch (err) {
          return {};
        }
      }
    });
    var ParselyMetaTagParser = MetadataParser.extend({
      extractPageDescription: function extractPageDescription() {
        /*
            Parser for data stored using meta tags.
             Example:
            <meta name="parsely-title" content="Zipf's Law of the Internet: Explaining Online Behavior" />
            <meta name="parsely-link" content="http://wwwbeta.parsely.com/docs/_static/examples/metatags.html" />
         */
        var fields = ['type', 'link', 'image_url', 'title', 'pub_date', 'section', 'author', 'tags', 'post_id', 'network_id', 'network_canonical'],
            tags,
            metas = {};
        $.each(fields, function (idx, field) {
          var selector = 'meta[name="parsely-' + field.replace('_', '-') + '"]';
          var elements = documentAlias.querySelectorAll(selector);
          $.each(elements, function (idx, element) {
            if (element.content !== undefined && element['content'] !== '') {
              var content = element['content'];

              if (field === 'tags') {
                if (!metas.hasOwnProperty('tags')) {
                  metas['tags'] = [];
                }

                tags = content.split(',');

                for (var i = 0; i < tags.length; i++) {
                  metas['tags'].push(tags[i].trim());
                }
              } else if (field === 'author') {
                if (!metas.hasOwnProperty('authors')) {
                  metas['authors'] = [];
                }

                metas['authors'].push(content);
              } else {
                metas[field] = content;
              }
            }
          });
        });
        return metas;
      }
    });
    var CanonicalURLParser = MetadataParser.extend({
      extractPageDescription: function extractPageDescription() {
        try {
          return {
            "link": documentAlias.querySelector("link[rel=canonical]").href
          };
        } catch (err) {
          return {};
        }
      }
    });
    var FallbackTitleParser = MetadataParser.extend({
      extractPageDescription: function extractPageDescription() {
        var fallbackMetaTag;

        try {
          fallbackMetaTag = documentAlias.querySelector("meta[name='title']") || documentAlias.querySelector("meta[property='og:title']") || // unlike crawl, we skip checking for Wordpress-specific title tags
          documentAlias.querySelector("meta[name='dc.title']");
          return {
            "title": fallbackMetaTag.content
          };
        } catch (err) {
          // always return a title value, even if it's just an empty string
          return {
            "title": documentAlias.title || ""
          };
        }
      }
    });

    var getParselyMetas = function getParselyMetas(includeFallbacks) {
      /*
          Entrypoint for getting metadata.  Creates instances of all
          parsers and extract each type of metadata. Combine them. Move
          values around until it matches the expected format.
      */
      if (includeFallbacks === undefined) {
        includeFallbacks = true;
      }

      var finalMetas = {};
      var JSONLDParserInstance = new JSONLDParser(),
          ParselyMetaTagParserInstance = new ParselyMetaTagParser(),
          ParselyPageParserInstance = new ParselyPageParser(),
          AmpUrlParserInstance = new AmpUrlParser(),
          CanonicalURLParserInstance = new CanonicalURLParser(); // order matters here - later parsers will overwrite values of earlier ones

      var listOfExtractFunctions = [JSONLDParserInstance.extract.bind(JSONLDParserInstance), ParselyMetaTagParserInstance.extract.bind(ParselyMetaTagParserInstance), ParselyPageParserInstance.extract.bind(ParselyPageParserInstance), AmpUrlParserInstance.extract.bind(AmpUrlParserInstance), CanonicalURLParserInstance.extract.bind(CanonicalURLParserInstance)];

      if (includeFallbacks) {
        var FallbackTitleParserInstance = new FallbackTitleParser();
        listOfExtractFunctions.unshift(FallbackTitleParserInstance.extract.bind(FallbackTitleParserInstance));
      }

      $.each(listOfExtractFunctions, function (idx, extractFunc) {
        var parselyMetas = extractFunc();

        if (parselyMetas !== null) {
          // this is needed because we use metadata to mean both section / tag and custom metadata
          // this edge case only happens where custom_metadata is being used in addition to JSON-LD
          // since JSONLDParser gets the custom metadata already via the same function, just strip
          if (parselyMetas.hasOwnProperty('metadata') && parselyMetas.metadata.hasOwnProperty('metadata') && finalMetas.hasOwnProperty('metadata')) {
            finalMetas['metadata']['metadata'] = parselyMetas['metadata']['metadata'];
            delete parselyMetas['metadata']['metadata'];

            if ($.isEmptyObject(parselyMetas['metadata'])) {
              delete parselyMetas['metadata'];
            }
          } // delete empty keys


          for (var key in parselyMetas) {
            if (parselyMetas.hasOwnProperty(key)) {
              if (parselyMetas[key] === null || parselyMetas[key] === '') {
                delete parselyMetas[key];
              }
            }
          }

          $.extend(finalMetas, parselyMetas);
        }
      });

      if (finalMetas.hasOwnProperty('metadata')) {
        // pull everything up out of metadata that does not already exist
        $.each(finalMetas.metadata, function (key, value) {
          if (!finalMetas.hasOwnProperty(key)) {
            finalMetas[key] = value;
            delete finalMetas.metadata[key];
          }
        });

        if ($.isEmptyObject(finalMetas.metadata)) {
          delete finalMetas.metadata;
        } else {
          finalMetas['pub_metadata'] = finalMetas.metadata;
          delete finalMetas.metadata;
        }
      }

      if (finalMetas.hasOwnProperty('type')) {
        finalMetas['page_type'] = finalMetas['type'];
        delete finalMetas.type;
      }

      if (finalMetas['title'] !== undefined) {
        finalMetas['title'] = finalMetas['title'].trim();
      }

      if (includeFallbacks) {
        // we should always send a title
        if (finalMetas['title'] === undefined) {
          finalMetas['title'] = "";
        } // make a best effort not to send an empty 'link'


        if (finalMetas['link'] === undefined) {
          finalMetas['link'] = windowAlias.location.href || documentAlias.location.href;
        }
      }

      return finalMetas;
    };

    return {
      constructor: Metadata,
      get: function get(includeFallbacks) {
        return getParselyMetas(includeFallbacks);
      },
      getHash: function getHash(metadata) {
        // Stringifies values from known keys in defined order
        var metaKeys = ['authors', 'section', 'tags', 'title'];
        var metaValuesString = '';
        $.each(metaKeys, function (idx, metaKey) {
          // sort meta values for consistency
          var metaValue = Array.isArray(metadata[metaKey]) ? metadata[metaKey].sort() : metadata[metaKey];
          metaValuesString = metaValuesString.concat(String(metaValue));
        });
        return util.stringHashCode(metaValuesString);
      }
    };
  }();

  root.metadata = new Metadata();
})();

(function metas() {
  var root = this.PARSELY,
      util = root.util,
      JSON = root.JSON,
      $ = root.$,
      windowAlias = util.getWindow(),
      documentAlias = windowAlias.document;

  PARSELY.getLdJsonMetas = function () {
    var scripts = documentAlias.getElementsByTagName('script');

    for (var i = 0; i < scripts.length; i++) {
      var script = scripts[i];

      if (script.getAttribute('type') === 'application/ld+json') {
        var ldJson;

        try {
          ldJson = JSON.parse(script.innerHTML);
        } catch (err) {
          return null;
        }

        var pageType = ldJson['@type'] === 'NewsArticle' ? 'post' : 'sectionpage';
        return {
          'type': pageType,
          'title': ldJson.headline,
          'link': ldJson.url,
          'image_url': ldJson.thumbnailUrl,
          'pub_date': ldJson.dateCreated,
          'section': ldJson.articleSection,
          'authors': ldJson.creator,
          'tags': ldJson.keywords
        };
      }
    }

    return null;
  };

  PARSELY.getRepeatedMetaMetas = function () {
    var metas = {};
    var metaTags = documentAlias.getElementsByTagName('meta');
    var parselyMetaMapping = {
      'parsely-title': 'title',
      'parsely-link': 'link',
      'parsely-image-url': 'image_url',
      'parsely-type': 'type',
      'parsely-post-id': 'post_id',
      'parsely-pub-date': 'pub_date',
      'parsely-section': 'section',
      'parsely-author': 'authors',
      'parsely-tags': 'tags'
    };

    for (var i = 0; i < metaTags.length; i++) {
      var meta = metaTags[i];
      var parselyMeta = parselyMetaMapping[meta.getAttribute('name')];

      if (typeof parselyMeta === 'undefined') {
        continue;
      }

      var content = meta.getAttribute('content');

      if (parselyMeta === 'authors') {
        if (typeof metas[parselyMeta] === 'undefined') {
          metas[parselyMeta] = [content];
        } else {
          metas[parselyMeta].push(content);
        }
      } else {
        metas[parselyMeta] = parselyMeta === 'tags' ? content.split(',') : content;
      }
    }

    if ($.isEmptyObject(metas)) {
      return null;
    }

    return metas;
  };

  PARSELY.getParselyPageMetas = function () {
    var metaTags = documentAlias.getElementsByTagName('meta');

    for (var i = 0; i < metaTags.length; i++) {
      var meta = metaTags[i];

      if (meta.getAttribute('name') !== 'parsely-page') {
        continue;
      }

      var parselyPage = meta.getAttribute('value') || meta.getAttribute('content');

      try {
        return JSON.parse(parselyPage);
      } catch (err) {
        return null;
      }
    }

    return null;
  };

  PARSELY.getMetas = function () {
    return this.getRepeatedMetaMetas() || this.getParselyPageMetas() || this.getLdJsonMetas();
  };
})();

(function slots() {
  var root = this.PARSELY,
      util = root.util,
      ParselyStorage = root.ParselyStorage,
      parselySlotAttr = 'data-parsely-slot';
  root.slots = root.slots || {}; // don't track slots for non-supported browsers (IE<7)

  if (!document.querySelector) {
    root.console('Slot tracking not supported on this browser');
    return;
  }

  root.slots.discoverSlots = function () {
    root.slots.hasParselySlots = !!document.querySelector('[' + parselySlotAttr + ']');
    root.slots.discoveryTime = util.now();
  };

  root.slots.discoverSlots();

  root.slots.reset = function () {
    root.slots.discoverSlots();
  };

  function getElementXY(element) {
    var x = 0,
        y = 0;

    while (element) {
      x += element.offsetLeft;
      y += element.offsetTop;
      element = element.offsetParent;
    }

    return [x, y];
  }

  var ELEMENT_NODE = 1;

  function getElementXPath(element) {
    var xpathAttr = root.slots.hasParselySlots ? parselySlotAttr : 'id';

    if (element.getAttribute(xpathAttr) !== null) {
      return '//*[@' + xpathAttr + '="' + element.getAttribute(xpathAttr) + '"]';
    }

    if (element === document.body) {
      return '//' + element.tagName.toLowerCase();
    }

    var ix = 0;
    var siblings = element.parentNode ? element.parentNode.childNodes : [];

    for (var i = 0; i < siblings.length; i++) {
      var sibling = siblings[i];

      if (sibling === element) {
        return getElementXPath(element.parentNode) + '/' + element.tagName.toLowerCase() + '[' + (ix + 1) + ']';
      }

      if (sibling.nodeType === ELEMENT_NODE && sibling.tagName === element.tagName) {
        ix++;
      }
    }
  }

  function isBogusLink(url) {
    if (!url || url.indexOf('#') === 0 || url.indexOf('javascript') === 0) {
      return true;
    } // Old IE converts relative URLs to absolute (even though it shouldn't)
    // so we try to check for checks for same url or url with an anchor


    var winHref = window.location.href;

    if (url === winHref || url.indexOf(winHref + '#') === 0) {
      return true;
    }

    return false;
  }

  function findParentAnchor(node, options) {
    options = options || {};
    var maxHeight = options.maxHeight || 5;

    function finder(node, currentHeight) {
      if (node === document || currentHeight >= maxHeight || !node) {
        return null;
      }

      if (node.nodeName === 'A') {
        return node;
      }

      return finder(node.parentNode, currentHeight + 1);
    }

    return finder(node, 0);
  }

  function getHref(anchor) {
    var specifiedHref = anchor.getAttribute('parsely-target');
    return specifiedHref || anchor.href;
  }

  function handleDocumentOnClick(event) {
    var element = event.target ? event.target : event.srcElement,
        anchor = findParentAnchor(element);

    if (anchor === null) {
      return true;
    }

    var attrHref = anchor.getAttribute('href');

    if (!isBogusLink(attrHref)) {
      var coords = getElementXY(anchor);
      var slotXpath = getElementXPath(anchor);
      var slotInfo = {
        'url': root.util.getEventUrl(),
        'x': coords[0],
        'y': coords[1],
        'xpath': slotXpath,
        'href': getHref(anchor)
      };
      ParselyStorage.setJSON('_parsely_slot_click', slotInfo);
    }
  }

  util.objAddEventListener(document.body, 'click', handleDocumentOnClick);
})();

(function (root) {
  'use strict';

  var $ = root.$,
      SAMPLE_RATE = 100,
      MAX_TIME_BETWEEN_HEARTBEATS = 60 * 60 * 1000;

  var factory = function factory(window) {
    var Sampler = {}; // Lock variable for the setInterval call - this module ensures it only happens
    // once

    Sampler._hasStartedSampling = false; // Internal registry for sample information

    Sampler._accumulators = {};
    Sampler._baseHeartbeatInterval = 60 * 2.5 * 1000; // 2.5 minutes

    Sampler._jitterRange = 5000;
    Sampler._jitterFloor = 0 - Sampler._jitterRange / 2;

    if ($.isNumeric(root.secondsBetweenHeartbeats)) {
      var baseSeconds = Sampler._baseHeartbeatInterval / 1000,
          allowedToDecrease = root.secondsBetweenHeartbeats < baseSeconds && window._parselyIsTest === true;

      if (root.secondsBetweenHeartbeats > baseSeconds || allowedToDecrease) {
        Sampler._baseHeartbeatInterval = root.secondsBetweenHeartbeats * 1000;
      }
    }
    /*
     * Add a sampling function to the registry
     *
     * The sampler maintains a registry mapping keys to sampler functions and
     * heartbeat functions. Every few milliseconds, the sampler function for each key
     * is called. If this function returns true, the accumulator for that key is
     * incremented by the appropriate time step. Every few seconds, the heartbeat
     * function for each key is run if that key's accumulator for the time window
     * is greater than zero.
     *
     * @param {string} key The key by which to identify this sampling function
     *                     in the registry
     * @param {function} sampleFn A function to run every SAMPLE_RATE ms that
                                  returns a boolean indicating whether the sampler
                                  for `key` should increment its accumulator. For
                                  example, engaged time tracking's sampleFn would
                                  return a boolean indicating whether or not the
                                  client is currently engaged.
     * @param {function} heartbeatFn A function to run every
                                     `_baseHeartbeatInterval ms if any
                                     time has been accumulated by the sampler. This
                                     function should accept the number of seconds
                                     accumulated after rounding.
     */


    Sampler.trackKey = function (key, sampleFn, heartbeatFn) {
      // to account for the option to not sample allow undefined or a sample function
      if (typeof sampleFn !== 'undefined' && typeof sampleFn !== 'function' || typeof heartbeatFn === 'undefined') {
        return;
      }

      if (!Sampler._accumulators.hasOwnProperty(key)) {
        var interval = Sampler._baseHeartbeatInterval;
        Sampler._accumulators[key] = {
          "ms": 0,
          "totalMs": 0,
          "firstSampleTime": root.util.now(),
          "lastSampleTime": root.util.now(),
          "lastActiveSampleTime": undefined,
          "sampleFn": sampleFn,
          "heartbeatFn": heartbeatFn,
          "heartbeatInterval": interval,
          "heartbeatTimer": undefined,
          "baseHeartbeatInterval": interval
        };
      }

      if (Sampler._hasStartedSampling === false) {
        window.setInterval(Sampler._sample, SAMPLE_RATE);
        Sampler._hasStartedSampling = true;
      }

      Sampler._setHeartbeatTimeout(key);
    };

    Sampler._setHeartbeatTimeout = function (key) {
      var accumulator = Sampler._accumulators[key];

      if (typeof accumulator.heartbeatTimer !== "undefined") {
        Sampler._unsetHeartbeatTimeout(key);
      }

      var sendHeartbeat = function sendHeartbeat() {
        Sampler.sendHeartbeat(key);
      };

      var jitterAmount = Math.random() * Sampler._jitterRange + Sampler._jitterFloor;

      var jitteredInterval = accumulator.heartbeatInterval + jitterAmount;
      accumulator.heartbeatTimer = window.setTimeout(sendHeartbeat, jitteredInterval);
    };

    Sampler._unsetHeartbeatTimeout = function (key) {
      var accumulator = Sampler._accumulators[key];
      window.clearTimeout(accumulator.heartbeatTimer);
      accumulator.heartbeatTimer = undefined;
    };

    Sampler._backoff = function (trackedData, totalTrackedMs) {
      totalTrackedMs = typeof totalTrackedMs === "undefined" ? root.util.now() - trackedData.firstSampleTime : totalTrackedMs;
      var totalTrackedSeconds = totalTrackedMs / 1000,
          offsetMatchingBaseInterval = 35,
          backoffProportion = 0.3,
          totalWithOffset = totalTrackedSeconds + offsetMatchingBaseInterval,
          newInterval = totalWithOffset * backoffProportion,
          clampedNewInterval = Math.min(MAX_TIME_BETWEEN_HEARTBEATS, newInterval);
      trackedData.heartbeatInterval = clampedNewInterval * 1000;
    };

    Sampler.dropKey = function (key) {
      delete Sampler._accumulators[key];
    };
    /*
     * Root sampler function
     *
     * Runs every SAMPLE_RATE ms and increments each key's accumulator
     *
     * @param {int} currentTime The current time as given by util.now().
     * @param {int} lastSampleTime The time of the last sample as given by
     *                             util.now().
     */


    Sampler._sample = function (currentTime, lastSampleTime) {
      currentTime = typeof currentTime === 'undefined' ? root.util.now() : currentTime;

      var trackedData, shouldCountSample, increment, _lastSampleTime, timeSinceLastActiveSample, sampleWasActive, incrementIsValid;

      for (var trackedKey in Sampler._accumulators) {
        trackedData = Sampler._accumulators[trackedKey];
        _lastSampleTime = typeof lastSampleTime === 'undefined' ? trackedData.lastSampleTime : lastSampleTime;
        increment = currentTime - _lastSampleTime; // if sampleFn is undefined bypass sample function

        sampleWasActive = typeof trackedData.sampleFn === 'undefined' ? true : trackedData.sampleFn(currentTime);
        shouldCountSample = sampleWasActive;

        if (root.config.limit_et_sample_len) {
          incrementIsValid = increment > 0 && increment < SAMPLE_RATE * 2;
          shouldCountSample = shouldCountSample && incrementIsValid;
        }

        trackedData.ms += shouldCountSample ? increment : 0;
        trackedData.totalMs += shouldCountSample ? increment : 0;
        trackedData.lastSampleTime = currentTime;

        if (shouldCountSample) {
          timeSinceLastActiveSample = currentTime - trackedData.lastActiveSampleTime; // this condition denotes a key that's been tracked for long enough
          // to start backing off *and* has been negative since before the
          // last time it would have sent a heartbeat - eg a video that
          // just became unpaused

          if (timeSinceLastActiveSample > trackedData.baseHeartbeatInterval) {
            // reset timeout to its value pre-backoff
            trackedData.heartbeatInterval = trackedData.baseHeartbeatInterval;

            Sampler._setHeartbeatTimeout(trackedKey);
          }

          trackedData.lastActiveSampleTime = currentTime;
        }
      }
    };
    /*
     * Send a heartbeat for the given key
     *
     * @param {string} trackedKey The key for which to send the heartbeat
     * @param {int} incSecs_ The number of seconds of accumulated time for each
     *                       key. This should be used only for testing.
     */


    Sampler.sendHeartbeat = function (trackedKey, incSecs_, totalSamplingMs, isDuringUnload) {
      var trackedData = Sampler._accumulators[trackedKey];

      if (typeof trackedData === "undefined") {
        return;
      }

      var incSecs = typeof incSecs_ === 'undefined' ? trackedData.ms / 1000 : incSecs_;
      var roundedSecs = Math.round(incSecs);

      if (roundedSecs > 0 && roundedSecs <= MAX_TIME_BETWEEN_HEARTBEATS / 1000) {
        trackedData.heartbeatFn(roundedSecs, undefined, trackedData.totalMs, isDuringUnload);
      }

      trackedData.ms = 0;

      if (!isDuringUnload) {
        Sampler._backoff(trackedData, totalSamplingMs);
      }

      Sampler._setHeartbeatTimeout(trackedKey);
    };
    /*
     * Send heartbeats for all accumulators with accumulated time
     *
     * @param {int} incSecs_ The number of seconds of accumulated time for each
     *                       key. This should be used only for testing.
     */


    Sampler._sendHeartbeats = function (incSecs_, totalSamplingMs) {
      for (var trackedKey in Sampler._accumulators) {
        Sampler.sendHeartbeat(trackedKey, incSecs_, totalSamplingMs, true);
      }
    };

    Sampler._setUnloadListeners = function () {
      // Make a best attempt to fire a heartbeat before the browser is closed
      root._lifecycle.addEventListener('statechange', function handleVisibilityChange(event) {
        if (event.newState.toLowerCase() === "hidden") {
          Sampler._sendHeartbeats();
        }
      });
    };

    Sampler._setUnloadListeners();

    return Sampler;
  };

  root.Sampler = factory(root.util.getWindow());
})(this.PARSELY);
/*
  PARSE.LY ENGAGED TIME TRACKING
 */


(function () {
  var root = this.PARSELY,
      settings = root.config.settings,
      Sampler = root.Sampler,
      $ = root.$,
      util = root.util; // Allow publishers to disable engaged time pings all together

  if (typeof root.enableHeartbeats === "boolean" && !root.enableHeartbeats) {
    return;
  }

  var MIN_ACTIVE_TIMEOUT = 1,
      // 1 sec
  MAX_ACTIVE_TIMEOUT = 60,
      // 60 secs
  EVENT_NAMES = ["focus", "mousedown", "mouseup", "mousemove", "scroll", "keyup", "keydown"],
      VISIBLE_STATES = ["active", "passive"];
  var activeTimeout = 5; // default, 5 seconds

  if ($.isNumeric(root.activeTimeout) && root.activeTimeout >= MIN_ACTIVE_TIMEOUT && root.activeTimeout <= MAX_ACTIVE_TIMEOUT) {
    activeTimeout = root.activeTimeout;
  }

  var now = util.now();
  root.engagedTime = root.engagedTime || {}; // keep track of how recently we saw the last event

  root._lastEventTime = now; // externally visible indicator of engaged status

  root.isEngaged = true; // externally visible indicator of interacting status

  root.isInteracting = true; // maintain a focused property that indicates whether the document has focus

  root.focused = true; // externally visible indicator of whether a video is being tracked and is playing

  root.videoPlaying = false;
  root.ENGAGED_TIME_SAMPLER_KEY = "engagedTime"; // Counts used for testing only

  if (settings.test === true) {
    root._handleEngagementActivityCalls = 0;
  } // for facebook instant articles we don't need to know if focused


  if (root.fbInstantArticles !== true) {
    root._lifecycle.addEventListener("statechange", function handleVisibilityChange(event) {
      var newState = event.newState.toLowerCase();

      if (VISIBLE_STATES.indexOf(newState) !== -1) {
        root.focused = true;
      } else {
        root.focused = false;
      }
    });
  } // trigger the activity timeout with any of EVENT_NAMES


  var handleEngagementActivity = function handleEngagementActivity() {
    root._lastEventTime = util.now();

    if (settings.test === true) {
      root._handleEngagementActivityCalls++;
    }
  };

  if (root.fbInstantArticles !== true) {
    $.each(EVENT_NAMES, function (i, eventName) {
      util.windowAddEventListener(eventName, handleEngagementActivity);
    });
  } else {
    // for facebook instant articles don't rely on events to prove engagement
    setInterval(handleEngagementActivity, activeTimeout * 1000);
  } // Utility function to expose private members to unit tests


  root.engagedTime.getParams = function () {
    return {
      minActiveTimeout: MIN_ACTIVE_TIMEOUT,
      maxActiveTimeout: MAX_ACTIVE_TIMEOUT,
      activeTimeout: activeTimeout
    };
  };

  root.engagedTime.sample = function (currentTime, lastEventTime, videoPlaying, focused) {
    // Allows us to override for unit testing
    currentTime = typeof currentTime === 'undefined' ? util.now() : currentTime;
    lastEventTime = typeof lastEventTime === 'undefined' ? root._lastEventTime : lastEventTime;
    videoPlaying = typeof videoPlaying === 'undefined' ? root.videoPlaying : videoPlaying;
    focused = typeof focused === 'undefined' ? root.focused : focused;
    root.isInteracting = currentTime - lastEventTime < activeTimeout * 1000;
    root.isEngaged = root.isInteracting && focused || videoPlaying;
    return root.isEngaged;
  };

  root.engagedTime.sendHeartbeat = function (roundedSecs, enableHeartbeats, totalMs, isDuringUnload) {
    // Allows us to override for unit testing
    roundedSecs = typeof roundedSecs === 'undefined' ? 0 : roundedSecs;
    enableHeartbeats = typeof enableHeartbeats === 'undefined' ? root.enableHeartbeats : enableHeartbeats;
    isDuringUnload = typeof isDuringUnload === 'undefined' ? false : isDuringUnload;
    var heartbeatsEnabled = typeof enableHeartbeats === 'undefined' || enableHeartbeats === true;

    if (heartbeatsEnabled && (root.config.heartbeat_should_honor_autotrack !== true || root.autotrack)) {
      if (typeof PARSELY.beacon !== "undefined" && typeof PARSELY.beacon.pixel !== "undefined" && typeof PARSELY.beacon.pixel.beacon === "function") {
        PARSELY.beacon.pixel.beacon({
          date: new Date().toString(),
          action: "heartbeat",
          inc: roundedSecs,
          tt: totalMs,
          url: util.getEventUrl(),
          urlref: root.lastRequest ? root.lastRequest.urlref : util.getWindow().document.referrer
        }, undefined, isDuringUnload);

        if ($.isFunction(root.onHeartbeat)) {
          root.onHeartbeat(roundedSecs);
        }
      } else {
        console.warn("PARSELY.beacon.pixel.beacon was called with action='heartbeat' while PARSELY.beacon was undefined.");
      }
    }
  };

  root.engagedTime.startTracking = function () {
    var sampleFn = root.fbInstantArticles === true ? undefined : root.engagedTime.sample;
    Sampler.trackKey(root.ENGAGED_TIME_SAMPLER_KEY, sampleFn, root.engagedTime.sendHeartbeat);
  };

  root.engagedTime.stopTracking = function () {
    Sampler.dropKey(root.ENGAGED_TIME_SAMPLER_KEY);
  };

  root.engagedTime.initNewPage = function () {
    root.engagedTime.stopTracking();
    root.engagedTime.startTracking();
  };

  root.engagedTime.startTracking();
})();
/*
  PARSE.LY VIDEO TRACKING
 */


(function () {
  var root = this.PARSELY;
  root.videoPlaying = false;
  root.video = root.video || {};
  root.video.trackedVideos = {};
  root.video._subscribedElements = [];
  root.video.skipRegex = new RegExp('data\:video\/\\w+;base64,.+');

  if (window._parselyIsTest) {
    root.video._embedMap = {};
  }
  /*
   * Get the current value to send as `url` on pixel requests
   *
   * @param {string} vId The ID of the video for which to fetch the URL
   */


  var _getHostURL = function _getHostURL(vId) {
    var curURL = root.video.trackedVideos[vId].urlOverride;

    if (typeof curURL === "undefined") {
      curURL = root.util.getEventUrl();
    }

    return curURL;
  };
  /*
   * Set root.videoPlaying if there is at least one tracked video currently playing
   */


  var _setVideoPlayingFlag = function _setVideoPlayingFlag() {
    var playing = false;

    for (var vId in root.video.trackedVideos) {
      if (root.video.trackedVideos[vId].isPlaying) {
        playing = true;
        break;
      }
    }

    root.videoPlaying = playing;
  };
  /*
   * Create a function that, when called, sends a vheartbeat for the given vId
   *
   * @param {string} vId The ID of the video for which heartbeats should be sent
   */


  var _buildHeartbeatFunction = function _buildHeartbeatFunction(vId) {
    return function (roundedSecs, enableHeartbeats, totalMs, isDuringUnload) {
      roundedSecs = typeof roundedSecs === 'undefined' ? 0 : roundedSecs;
      enableHeartbeats = typeof enableHeartbeats === 'undefined' ? root.enableHeartbeats : enableHeartbeats;
      isDuringUnload = typeof isDuringUnload === 'undefined' ? false : isDuringUnload;

      if (typeof enableHeartbeats === 'undefined' || enableHeartbeats === true) {
        var curVideo = root.video.trackedVideos[vId],
            windowAlias = root.util.getWindow(),
            beaconData = {
          date: new Date().toString(),
          action: "vheartbeat",
          inc: roundedSecs,
          url: _getHostURL(vId),
          metadata: root.JSON.stringify(curVideo.metadata),
          tt: totalMs,
          urlref: root.lastRequest ? root.lastRequest.urlref : windowAlias.document.referrer
        };

        if (typeof PARSELY.beacon !== "undefined" && typeof PARSELY.beacon.pixel !== "undefined" && typeof PARSELY.beacon.pixel.beacon === "function") {
          PARSELY.beacon.pixel.beacon(beaconData, undefined, isDuringUnload);

          if (root.$.isFunction(root.onHeartbeat)) {
            root.onHeartbeat(roundedSecs);
          }

          curVideo._heartbeatsSent += 1;
        } else {
          console.warn("PARSELY.beacon.pixel.beacon was called with action='vheartbeat' while PARSELY.beacon was undefined.");
        }
      }
    };
  };
  /*
   * Begin tracking all supported video embeds on the current page.
   *
   * Called on an interval to handle late-added video elements
   */


  var _detectVideos = function _detectVideos() {
    var strategy,
        searchElements,
        elem,
        subscribed,
        // use the containing frame window here - we want to search only the frame
    // in which the tracker has loaded for videos
    _window = window;

    for (var i = 0; i < root.video._strategies.length; i++) {
      strategy = root.video._strategies[i];

      for (var k = 0; k < strategy.searchTags.length; k++) {
        searchElements = _window.document.getElementsByTagName(strategy.searchTags[k]);

        for (var l = 0; l < searchElements.length; l++) {
          elem = searchElements[l];

          if (root.video._subscribedElements.indexOf(elem) === -1 && strategy.verify(elem)) {
            // make sure every embed we care about has an ID
            if (!elem.id) {
              elem.setAttribute("id", strategy.platform + "-" + root.util.getRandomInt(0, 9999999));
            }

            subscribed = strategy.subscribe(elem);

            if (subscribed !== false) {
              if (typeof strategy._subscribedElements === "undefined") {
                strategy._subscribedElements = [];
              }

              strategy._subscribedElements.push(elem);

              root.video._subscribedElements.push(elem);
            }
          }
        }
      }
    }
  };

  root.video.detectVideos = function () {
    return _detectVideos();
  };
  /*
   * Set up internal data storage for a given video ID
   *
   * When called for an existing vId, metadata and other internal fields are updated
   * with the arguments. When called for a new vId, the internal video data object is
   * created and sampling starts.
   *
   * @param vId {string} The unique string identifying this video
   * @param metadata {object} An object containing key-value pairs of the metadata to
   *                          send with events for the tracked video.
   * @param urlOverride {string} The value the url field on the pixel should have when
   *                             events for this video are sent
   */


  var _updateVideoData = function _updateVideoData(vId, metadata, urlOverride) {
    if (typeof metadata === "undefined") {
      metadata = {};
    }

    if (!metadata.hasOwnProperty('link')) {
      metadata.link = vId;
    } // is this video ID already tracked?


    if (root.video.trackedVideos[vId]) {
      // update metadata
      for (var k in metadata) {
        if (metadata.hasOwnProperty(k)) {
          root.video.trackedVideos[vId].metadata[k] = metadata[k];
        }
      } // update url overrides


      if (typeof urlOverride !== "undefined") {
        root.video.trackedVideos[vId].urlOverride = urlOverride;
      }
    } else {
      root.video.trackedVideos[vId] = {
        'id': vId,
        'isPlaying': false,
        // sampled for vheartbeat events
        'hasStartedPlaying': false,
        // set once on first play, locks videostart
        'metadata': metadata,
        'urlOverride': urlOverride,
        '_heartbeatsSent': 0 // used in tests to verify heartbeat count

      };
    } // this function noops on already-sampled keys, so it's safe to call
    // unconditionally here


    root.Sampler.trackKey(vId, function () {
      return root.video.trackedVideos[vId].isPlaying;
    }, _buildHeartbeatFunction(vId));
    return root.video.trackedVideos[vId];
  };
  /*
   * Store a reference to a player API object for use in integration tests
   *
   * @param playerId {string} The ID of the HTML element corresponding to the API
   *                          object
   * @param player {object} The root object of the video API corresponding to the
   *                        player ID
   */


  root.video._storeApiRoot = function (playerId, player) {
    if (window._parselyIsTest && !root.video._embedMap.hasOwnProperty(playerId)) {
      root.video._embedMap[playerId] = player;
    }
  };
  /*
   * Register a play event for the given video ID
   */


  root.video.trackPlay = function (vId, metadata, urlOverride) {
    var stringVId;

    if (typeof vId === "undefined") {
      return;
    }

    stringVId = vId + '';

    if (stringVId.match(root.video.skipRegex) !== null) {
      PARSELY.console.log('Found data-uri video, not subscribing');
      return;
    }

    metadata = typeof metadata === "undefined" ? {} : metadata;

    var curVideo = _updateVideoData(vId, metadata, urlOverride);

    var windowAlias = root.util.getWindow();

    if (!curVideo.hasStartedPlaying) {
      curVideo.hasStartedPlaying = true;

      if (typeof PARSELY.beacon !== "undefined" && typeof PARSELY.beacon.pixel !== "undefined" && typeof PARSELY.beacon.pixel.beacon === "function") {
        PARSELY.beacon.pixel.beacon({
          date: new Date().toString(),
          action: "videostart",
          url: _getHostURL(vId),
          metadata: root.JSON.stringify(curVideo.metadata),
          urlref: root.lastRequest ? root.lastRequest.urlref : windowAlias.document.referrer
        });
      } else {
        console.warn("PARSELY.beacon.pixel.beacon was called with action='videostart' while PARSELY.beacon was undefined.");
      }
    }

    curVideo.isPlaying = true;

    _setVideoPlayingFlag();
  };
  /*
   * Register a pause event for the given video ID
   */


  root.video.trackPause = function (vId, metadata, urlOverride) {
    if (typeof vId === "undefined") {
      root.console.log("no video id provided; trackPause event failed");
      return;
    }

    var curVideo = _updateVideoData(vId, metadata, urlOverride);

    curVideo.isPlaying = false;

    _setVideoPlayingFlag();
  };
  /*
   * Pause tracking for all currently tracked videos
   */


  root.video.trackPauseAll = function () {
    for (var vId in root.video.trackedVideos) {
      root.video.trackPause(vId);
    }
  };
  /*
   * Reset a video's hasStartedPlaying flag to allow another videostart to be fired
   */


  root.video.reset = function (vId) {
    if (!root.video.trackedVideos.hasOwnProperty(vId)) {
      root.console.log("no video id provided; reset failed");
      return;
    }

    var curVideo = root.video.trackedVideos[vId];
    curVideo.hasStartedPlaying = false;
    curVideo.isPlaying = false;
    root.Sampler.sendHeartbeat(vId);
    root.Sampler.dropKey(vId);

    _setVideoPlayingFlag();
  };
  /*
   * Stop tracking all videos and return the video tracker to its default state
   */


  root.video.clear = function () {
    var toDelete = [],
        i;

    for (var vId in root.video.trackedVideos) {
      root.video.reset(vId);
      toDelete.push(vId);
    }

    for (i = 0; i < toDelete.length; i++) {
      delete root.video.trackedVideos[toDelete[i]];
    }

    root.video._subscribedElements = [];

    root.video._buildStrategiesList();

    var strategy;

    for (i = 0; i < root.video._strategies.length; i++) {
      strategy = root.video._strategies[i];
      delete strategy._subscribedElements;
    }
  };

  root.video.addStrategy = function (strategy) {
    for (var i = 0; i < root.video._strategies.length; i++) {
      if (root.video._strategies[i].platform === strategy.platform) {
        root.console.log("Strategy '" + strategy.platform + "' already registered");
        return;
      }
    }

    root.video._strategies.unshift(strategy);

    if (root.video.hasOwnProperty('autotrack') && root.video.autotrack === false) {
      return;
    }

    _detectVideos(false);
  }; // allow onPlay and onPause to be overridden by client code


  if (typeof root.video.onPlay === "undefined") {
    root.video.onPlay = function (player, vId, metadata) {
      root.video.trackPlay(vId, metadata);
    };
  }

  if (typeof root.video.onPause === "undefined") {
    root.video.onPause = function (player, vId) {
      root.video.trackPause(vId);
    };
  }
  /* SUPPORTED VIDEO STRATEGIES */


  root.video.PLATFORM_MEDIAELEMENTJS = "mediaelementjs"; // http://www.mediaelementjs.com/
  // Requires video element to have title attribute defined
  // Requires mediaelement js include

  var strategy_mediaelementjs = {
    platform: root.video.PLATFORM_MEDIAELEMENTJS,
    searchTags: ["VIDEO", "IFRAME"],
    verify: function verify(elem) {
      return elem.className.indexOf("mejs__player") !== -1;
    },
    subscribe: function subscribe(elem) {
      if (typeof window.MediaElement !== "function") {
        root.console.log("Detected mediaelement.js embed but" + "window.MediaElement is not accesible.");
        return false;
      }

      var onPlay = function onPlay(player) {
        var metadata = {
          duration: Math.round(player.duration * 1000),
          image_url: elem.poster,
          title: elem.title ? elem.title : player.currentSrc,
          video_platform: root.video.PLATFORM_MEDIAELEMENTJS
        };
        root.video.onPlay(player, player.currentSrc, metadata);
      };

      var onPause = function onPause(player, ended) {
        root.video.onPause(player, player.currentSrc);

        if (ended === true) {
          root.video.reset(player.currentSrc);
        }
      };

      new window.MediaElement(elem.id, {
        success: function success(player) {
          root.video._storeApiRoot(elem.id, player);

          player.addEventListener("loadedmetadata", function () {
            player.addEventListener("play", function () {
              onPlay(player);
            });
            player.addEventListener("pause", function () {
              onPause(player);
            });
            player.addEventListener("ended", function () {
              onPause(player, true);
            });
            root.console.log("Subscribed to mediaelementjs embed with ID '" + elem.id + "'");
          });
        }
      });
    }
  };
  root.video.PLATFORM_VIDEOJS = "videojs"; // http://docs.videojs.com/Player.html
  // requires video element to have title defined
  // requires video.js js include

  var strategy_videojs = {
    platform: root.video.PLATFORM_VIDEOJS,
    searchTags: ["VIDEO"],
    verify: function verify(elem) {
      return elem.className.indexOf("vjs-tech") !== -1 || elem.className.indexOf("video-js") !== -1;
    },
    subscribe: function subscribe(elem) {
      if (typeof window.videojs !== "function") {
        root.console.log("Detected video.js embed but window.videojs is" + " not accesible.");
        return false;
      }

      var onPlay = function onPlay(player) {
        var metadata = {
          duration: Math.round(player.duration() * 1000),
          image_url: player.poster_,
          title: elem.title ? elem.title : player.currentSrc(),
          video_platform: root.video.PLATFORM_VIDEOJS
        };
        root.video.onPlay(player, player.currentSrc(), metadata);
      };

      var onPause = function onPause(player, ended) {
        root.video.onPause(player, player.currentSrc());

        if (ended === true) {
          root.video.reset(player.currentSrc());
        }
      };

      var setListeners = function setListeners(player) {
        root.console.log("videojs: Attempting to set listeners");

        root.video._storeApiRoot(elem.id, player);

        player.on("play", function () {
          onPlay(player);
        });
        player.on("pause", function () {
          onPause(player);
        });
        player.on("ended", function () {
          onPause(player, true);
        }); // catch (auto)play that happened before this function was called

        if (player.paused() === false) {
          onPlay(player);
        }

        root.console.log("videojs: Subscribed to videojs embed with ID '" + elem.id + "'");
      };

      var player;

      if (typeof window.videojs.getPlayer !== "undefined") {
        root.console.log("videojs: Using getPlayer() to attach to player"); // getPlayer finds a player instance without creating it if not exists.
        // the recommended way to attach to players for event capture

        player = window.videojs.getPlayer(elem.id);
      } else {
        root.console.log("videojs: Using videojs() to attach to player"); // videojs() finds an existing player instance and creates it if it doesn't exist.
        // this call is only present for backward compatbility with older parsely integrations

        player = window.videojs(elem.id);
      }

      if (typeof player !== "undefined") {
        if (window.isNaN(player.duration())) {
          root.console.log("videojs: Setting loadedmetadata listener"); // this case happens when this code runs before loadedmetadata has fired

          player.on("loadedmetadata", function () {
            setListeners(player);
          });
        } else {
          root.console.log("videojs: Player metadata already loaded"); // set listeners in the case where loadedmetadata has already fired

          setListeners(player);
        }
      }
    }
  };
  root.video.PLATFORM_THEPLATFORM = "theplatform"; // https://docs.theplatform.com/help/player-component-communication#PDKcomponentcommunication-Eventsequence

  var strategy_theplatform = {
    platform: root.video.PLATFORM_THEPLATFORM,
    searchTags: ["IFRAME"],
    verify: function verify(elem) {
      return elem.src.indexOf("player.theplatform.com") !== -1;
    },
    subscribe: function subscribe(elem) {
      if (_typeof(window.$pdk) !== "object") {
        root.console.log("Detected ThePlatform embed but window.$pdk is" + " not accesible.");
        return false;
      }

      root.video._storeApiRoot(elem.id, window.$pdk);

      window.$pdk.controller.addEventListener("OnReleaseStart", function (releaseEvent) {
        var metadata = {
          duration: releaseEvent.data.release.duration,
          image_url: releaseEvent.data.release.defaultThumbnailUrl,
          title: releaseEvent.data.release.title,
          author: releaseEvent.data.release.author,
          pub_date_tmsp: releaseEvent.data.release.pubDate / 1000,
          video_platform: root.video.PLATFORM_THEPLATFORM
        };
        root.video.onPlay(window.$pdk, releaseEvent.data.release.guid, metadata);
      });
      window.$pdk.controller.addEventListener("OnMediaPause", function(){});
      window.$pdk.controller.addEventListener("OnMediaEnd", function (mediaEvent) {
        root.video.onPause(window.$pdk, mediaEvent.data.clip.baseClip.guid);
        root.video.reset(mediaEvent.data.clip.baseClip.guid);
      });
      root.console.log("Subscribed to ThePlatform embed with ID '" + elem.id + "'");
    }
  };
  root.video.PLATFORM_VIMEO = "vimeo"; // https://github.com/vimeo/player.js/blob/master/README.md

  var strategy_vimeo = {
    platform: root.video.PLATFORM_VIMEO,
    searchTags: ["IFRAME"],
    verify: function verify(elem) {
      return elem.src.indexOf("player.vimeo.com") !== -1;
    },
    subscribe: function subscribe(elem) {
      if (_typeof(window.Vimeo) !== "object") {
        root.console.log("Detected Vimeo embed but window.Vimeo is" + " not accesible.");
        return false;
      }

      var player = new window.Vimeo.Player(elem);

      root.video._storeApiRoot(elem.id, player);

      player.on('play', function (playData) {
        player.getVideoId().then(function (id) {
          player.getVideoTitle().then(function (title) {
            var metadata = {
              title: title,
              // round to nearest second since vimeo's api is inconsistent
              // wrt duration
              duration: Math.round(playData.duration) * 1000,
              video_platform: root.video.PLATFORM_VIMEO
            };
            root.video.onPlay(player, "" + id, metadata);
          });
        });
      });
      player.on('pause', function(){});
      player.on('ended', function () {
        player.getVideoId().then(function (id) {
          root.video.onPause(player, "" + id);
          root.video.reset("" + id);
        });
      });
      root.console.log("Subscribed to Vimeo embed with ID '" + elem.id + "'");
    }
  };
  root.video.PLATFORM_JWPLAYER = "jwplayer"; // https://support.jwplayer.com/customer/portal/articles/2067711-jw6-javascript-api-quickstart
  // iframe embeds do not support the JS api
  // https://developer.jwplayer.com/jw-platform/reference/v1/urls/players.html

  var strategy_jwplayer = {
    platform: root.video.PLATFORM_JWPLAYER,
    searchTags: ["DIV"],
    verify: function verify(elem) {
      return elem.className.indexOf("jwplayer") !== -1 && elem.className.indexOf("jw-") !== -1;
    },
    subscribe: function subscribe(elem) {
      if (typeof window.jwplayer !== "function") {
        root.console.log("Detected JWPlayer embed but window.jwplayer is" + " not accesible.");
        return false;
      }

      var player = window.jwplayer(elem.id);

      root.video._storeApiRoot(elem.id, player);

      var onPlay = function onPlay() {
        var curVideo = player.getPlaylistItem(),
            duration;

        if (typeof curVideo.duration === "undefined") {
          duration = player.getDuration() * 1000;
        } else {
          duration = curVideo.duration * 1000;
        }

        var image_url = curVideo.image;

        if (typeof image_url !== "undefined" && image_url.indexOf("http") !== 0 && image_url.indexOf("//") === 0) {
          image_url = "http:" + image_url;
        }

        var metadata = {
          duration: duration,
          image_url: image_url,
          title: curVideo.title,
          pub_date_tmsp: curVideo.pubdate,
          video_platform: root.video.PLATFORM_JWPLAYER
        };

        if (typeof curVideo.tags !== "undefined" && curVideo.tags.length > 0) {
          metadata.tags = curVideo.tags.split(",");
        }

        if (typeof metadata.pub_date_tmsp !== "undefined" && Number.isInteger(metadata.pub_date_tmsp)) {
          metadata.pub_date_tmsp *= 1000;
        }

        if (curVideo.hasOwnProperty("author")) {
          metadata.author = curVideo.author;
        }

        if (curVideo.hasOwnProperty("section")) {
          metadata.section = curVideo.section;
        }

        root.video.onPlay(player, curVideo.mediaid, metadata);
      };

      var onPause = function onPause() {
        root.video.onPause(player, player.getPlaylistItem().mediaid);
      };

      var onEnd = function onEnd() {
        root.video.onPause(player, player.getPlaylistItem().mediaid);
        root.video.reset(player.getPlaylistItem().mediaid);
      };

      player.on("play", onPlay);
      player.on("pause", onPause);
      player.on("complete", onEnd);
      root.console.log("Subscribed to JWPlayer embed with ID '" + elem.id + "'");
    }
  };
  root.video.PLATFORM_KALTURA = "kaltura"; // https://knowledge.kaltura.com/javascript-api-kaltura-media-players
  // Embed must include externalInterfaceDisabled=false qsarg
  // There are a few Kaltura embed types that are not fully supported

  var strategy_kaltura = {
    platform: root.video.PLATFORM_KALTURA,
    searchTags: ["OBJECT", "IFRAME"],
    verify: function verify(elem) {
      return elem.type === "application/x-shockwave-flash" && (typeof elem.data !== "undefined" && elem.data.indexOf("cdnapi.kaltura.com") !== -1 || typeof elem.src !== "undefined" && elem.src.indexOf("cdnapi.kaltura.com") !== -1 || typeof elem.id !== "undefined" && elem.id.indexOf("kaltura-player") !== -1);
    },
    subscribe: function subscribe(elem) {
      var PLAY_CALLBACK_NAME = "parselyKalturaOnPlay" + elem.id;
      var PAUSE_CALLBACK_NAME = "parselyKalturaOnPause" + elem.id;
      var END_CALLBACK_NAME = "parselyKalturaOnEnd" + elem.id;
      root.util.windowSetFunction(PLAY_CALLBACK_NAME, function () {
        var player = document.getElementById(elem.id);
        var metadata = {
          duration: player.evaluate("{mediaProxy.entry.duration}") * 1000,
          image_url: player.evaluate("{mediaProxy.entry.thumbnailUrl}"),
          title: player.evaluate("{mediaProxy.entry.name}"),
          pub_date_tmsp: player.evaluate("{mediaProxy.entry.createdAt}"),
          tags: player.evaluate("{mediaProxy.entry.tags}"),
          video_platform: root.video.PLATFORM_KALTURA
        };
        var section = player.evaluate("{mediaProxy.entry.categories}");

        if (section) {
          metadata.section = section[0];
        }

        root.video.onPlay(player, player.evaluate("{mediaProxy.entry.id}"), metadata);
      });
      root.util.windowSetFunction(PAUSE_CALLBACK_NAME, function(){}