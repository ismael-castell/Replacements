self.window.trackingSDK.define(['exports'],function(exports){'use strict';/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}/**
 * A specific version of Queue copied from reqest-queue package so as to
 * further remove the dependency from request-queue. So we can well control
 * the storage strategy within tracker.
 */
var Queue = /** @class */ (function () {
    function Queue(storage, storageKey) {
        this.storage = storage;
        this.storageKey = storageKey;
    }
    Queue.prototype.get = function () {
        return this.storage.get(this.storageKey) || [];
    };
    Queue.prototype.set = function (data) {
        data = data || [];
        return this.storage.set(this.storageKey, data);
    };
    Queue.prototype.enqueue = function (obj) {
        var queue = this.get();
        queue.push(obj);
        this.set(queue);
    };
    Queue.prototype.batchDequeue = function (size) {
        var queue = this.get();
        var slice = queue.slice(0, size);
        var newQueue = queue.slice(size);
        this.set(newQueue);
        return slice;
    };
    Queue.prototype.putBackBatchToQueue = function (data) {
        return this.set(data.concat(this.get()));
    };
    return Queue;
}());
/**
 * copy from v3 legacy storage
 * uses memory to cache event data.
 */
var MemoStorage = /** @class */ (function () {
    function MemoStorage() {
        var _this = this;
        this.backStore = {};
        this.storage = {
            get: function (key) {
                return _this.backStore[key];
            },
            set: function (key, value) {
                _this.backStore[key] = value;
                return true;
            },
        };
        this.queue = new Queue(this.storage, MemoStorage.QUEUE_STORAGE_KEY);
    }
    MemoStorage.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // console.log('init memo storage');
                return [2 /*return*/, void 0];
            });
        });
    };
    MemoStorage.prototype.addEvent = function (data) {
        this.queue.enqueue(data);
        return Promise.resolve();
    };
    MemoStorage.prototype.getEvents = function (limit) {
        var data = limit === -1 ? this.queue.get() : this.queue.batchDequeue(limit);
        return Promise.resolve({ data: data });
    };
    MemoStorage.prototype.resetEvents = function (_, data) {
        this.queue.putBackBatchToQueue(data);
        return Promise.resolve();
    };
    MemoStorage.prototype.removeEvents = function (_) {
        // memo storage already remove event when get events
        return Promise.resolve();
    };
    MemoStorage.prototype.getSession = function (flag, func) {
        var seqKey = MemoStorage.SESSION_STORAGE_KEY + '::' + flag;
        var session = this.storage.get(MemoStorage.SESSION_STORAGE_KEY);
        var sequenceId = this.storage.get(seqKey);
        session =
            session && 'sessionId' in session && typeof sequenceId === 'number' && 'timestamp' in session
                ? {
                    sequenceId: sequenceId,
                    timestamp: session.timestamp,
                    sessionId: session.sessionId,
                }
                : void 0; // clear legacy data
        session = func(session);
        this.storage.set(MemoStorage.SESSION_STORAGE_KEY, { sessionId: session.sessionId, timestamp: session.timestamp });
        this.storage.set(seqKey, session.sequenceId);
        return Promise.resolve(session);
    };
    MemoStorage.prototype.getCurrentSessionId = function () {
        var session = this.storage.get(MemoStorage.SESSION_STORAGE_KEY);
        var sessionId = session && 'sessionId' in session ? session.sessionId : void 0;
        return Promise.resolve(sessionId);
    };
    MemoStorage.prototype.removeExpiredEvents = function () {
        // console.log('call removeExpiredEvents in memo cache');
        return Promise.resolve();
    };
    MemoStorage.QUEUE_STORAGE_KEY = 'bi-tracking::events';
    MemoStorage.SESSION_STORAGE_KEY = 'bi-tracking::session';
    MemoStorage.CHECK_STORAGE_KEY = 'bi-tracking::check';
    return MemoStorage;
}());// https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
// https://stackoverflow.com/questions/40593260/should-i-open-an-idbdatabase-each-time-or-keep-one-instance-open
// https://stackoverflow.com/questions/13972385/invalidstateerror-while-opening-indexeddb-in-firefox
var IndexedDBStorage = /** @class */ (function () {
    function IndexedDBStorage(version) {
        if (version === void 0) { version = 4; }
        this.DATABASE_VERSION = 4;
        this.DATABASE_VERSION = version;
    }
    // Check the initialization status of opening indexedDB. Any rejection can suggest
    // inavailbility of indexedDB, and should fallback to localstorage.
    IndexedDBStorage.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var db;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openDB(IndexedDBStorage.DATABASE_NAME, this.DATABASE_VERSION)];
                    case 1:
                        db = _a.sent();
                        this.idb = db;
                        return [2 /*return*/];
                }
            });
        });
    };
    // $FlowFixMe
    IndexedDBStorage.prototype.upgrade = function (db, event) {
        if (event.oldVersion < this.DATABASE_VERSION) {
            // remove all of the old event
            if (db.objectStoreNames.contains(IndexedDBStorage.OBJECT_STORE_EVENTS)) {
                db.deleteObjectStore(IndexedDBStorage.OBJECT_STORE_EVENTS);
            }
            if (
            // $FlowFixMe
            db.objectStoreNames.contains(IndexedDBStorage.OBJECT_STORE_EVENTS_V1)) {
                db.deleteObjectStore(IndexedDBStorage.OBJECT_STORE_EVENTS_V1);
            }
            if (
            // $FlowFixMe
            db.objectStoreNames.contains(IndexedDBStorage.OBJECT_STORE_SESSIONS_V1)) {
                db.deleteObjectStore(IndexedDBStorage.OBJECT_STORE_SESSIONS_V1);
            }
        }
        if (
        // $FlowFixMe
        !db.objectStoreNames.contains(IndexedDBStorage.OBJECT_STORE_EVENTS)) {
            var eventStore = db.createObjectStore(IndexedDBStorage.OBJECT_STORE_EVENTS, {
                autoIncrement: true,
            });
            eventStore.createIndex(IndexedDBStorage.INDEX_EVENTS_FETCHED, IndexedDBStorage.INDEX_EVENTS_FETCHED, {
                unique: false,
            });
            eventStore.createIndex(IndexedDBStorage.INDEX_EVENT_TIMESTAMP, IndexedDBStorage.INDEX_EVENT_TIMESTAMP, {
                unique: false,
            });
        }
        if (
        // $FlowFixMe
        !db.objectStoreNames.contains(IndexedDBStorage.OBJECT_STORE_SESSIONS)) {
            db.createObjectStore(IndexedDBStorage.OBJECT_STORE_SESSIONS);
        }
    };
    IndexedDBStorage.prototype.openDB = function (dbname, version) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var request = self.window.indexedDB.open(dbname, version);
            request.onblocked = function () {
                console.warn('[IndexedDBStorage] Upgrade is blocked since connection to old version exists.');
            };
            request.onerror = function (event) {
                try {
                    event.preventDefault();
                    // eslint-disable-next-line no-empty
                }
                catch (e) { }
                reject(event);
            };
            request.onsuccess = function () {
                var db = request.result;
                if (!db.objectStoreNames.contains(IndexedDBStorage.OBJECT_STORE_EVENTS) ||
                    !db.objectStoreNames.contains(IndexedDBStorage.OBJECT_STORE_SESSIONS)) {
                    // I decided not to recreate ObjectStore since it's risky to create
                    // Store in a onsuccess handler.
                    reject('Required ObjectStore cannot be found.');
                }
                else {
                    db.onerror = function (ev) {
                        console.warn('[IndexedDBStorage]', ev.errorCode);
                    };
                    db.onversionchange = function () {
                        db.close();
                        console.warn('[IndexedDBStorage] A new version of indexedDB is ready.');
                    };
                    resolve(db);
                }
            };
            // Legacy Chrome has a bug that won't trigger onupgradeneeded, we just
            // fallback to localstorage.
            request.onupgradeneeded = function (event) {
                var db = request.result;
                try {
                    _this.upgrade(db, event);
                }
                catch (e) {
                    reject(e);
                }
            };
        });
    };
    IndexedDBStorage.prototype.addEvent = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var transaction = _this.idb.transaction(IndexedDBStorage.OBJECT_STORE_EVENTS, 'readwrite');
            transaction.oncomplete = function () {
                resolve();
            };
            transaction.onerror = function (event) {
                reject(event);
            };
            transaction.onabort = function (event) {
                reject(event);
            };
            transaction.objectStore(IndexedDBStorage.OBJECT_STORE_EVENTS).add({
                data: JSON.stringify(data),
                timestamp: Date.now(),
                fetched: 'f',
            });
        });
    };
    /**
     *
     * @param limit set -1 to get all of the event
     * @returns
     */
    IndexedDBStorage.prototype.getEvents = function (limit) {
        var _this = this;
        // just get data, not remove them
        var keys = [];
        var data = [];
        return new Promise(function (resolve, reject) {
            var transaction = _this.idb.transaction(IndexedDBStorage.OBJECT_STORE_EVENTS, 'readwrite');
            transaction.oncomplete = function () {
                resolve({ keys: keys, data: data });
            };
            transaction.onerror = function (event) {
                reject(event);
            };
            transaction.onabort = function (event) {
                reject(event);
            };
            // Only get events that are not being processed so as to avoid
            // duplicate sending issue.
            // $FlowFixMe
            var keyrange = IDBKeyRange.only('f');
            var request = transaction
                .objectStore(IndexedDBStorage.OBJECT_STORE_EVENTS)
                .index(IndexedDBStorage.INDEX_EVENTS_FETCHED)
                .openCursor(keyrange);
            request.onsuccess = function () {
                var cursor = request.result;
                if (cursor) {
                    keys.push(cursor.primaryKey);
                    data.push(JSON.parse(cursor.value.data));
                    cursor.update(__assign(__assign({}, cursor.value), { fetched: 't' }));
                    if (limit === -1 || limit-- > 1) {
                        cursor.continue();
                    }
                }
            };
        });
    };
    IndexedDBStorage.prototype.resetEvents = function (keys) {
        var _this = this;
        if (!keys || keys.length <= 0) {
            return Promise.resolve();
        }
        return new Promise(function (resolve, reject) {
            var transaction = _this.idb.transaction(IndexedDBStorage.OBJECT_STORE_EVENTS, 'readwrite');
            transaction.oncomplete = function () {
                resolve();
            };
            transaction.onerror = function (event) {
                reject(event);
            };
            transaction.onabort = function (event) {
                reject(event);
            };
            var keyrange = IDBKeyRange.bound(keys[0], keys[keys.length - 1]);
            var request = transaction.objectStore(IndexedDBStorage.OBJECT_STORE_EVENTS).openCursor(keyrange);
            request.onsuccess = function () {
                var cursor = request.result;
                if (cursor) {
                    cursor.update(__assign(__assign({}, cursor.value), { fetched: 'f' }));
                    cursor.continue();
                }
            };
        });
    };
    IndexedDBStorage.prototype.removeEvents = function (keys) {
        var _this = this;
        if (!keys || keys.length <= 0) {
            return Promise.resolve();
        }
        return new Promise(function (resolve, reject) {
            var transaction = _this.idb.transaction(IndexedDBStorage.OBJECT_STORE_EVENTS, 'readwrite');
            transaction.oncomplete = function () {
                resolve();
            };
            transaction.onerror = function (event) {
                reject(event);
            };
            transaction.onabort = function (event) {
                reject(event);
            };
            // $FlowFixMe
            var keyrange = IDBKeyRange.bound(keys[0], keys[keys.length - 1]);
            transaction.objectStore(IndexedDBStorage.OBJECT_STORE_EVENTS).delete(keyrange);
        });
    };
    IndexedDBStorage.prototype.getSession = function (flag, fn) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var session;
            var seqKey = IndexedDBStorage.KEY_SESSION + '::' + flag;
            var transaction = _this.idb.transaction(IndexedDBStorage.OBJECT_STORE_SESSIONS, 'readwrite');
            transaction.oncomplete = function () {
                resolve(session);
            };
            transaction.onerror = function (event) {
                reject(event);
            };
            transaction.onabort = function (event) {
                reject(event);
            };
            var store = transaction.objectStore(IndexedDBStorage.OBJECT_STORE_SESSIONS);
            Promise.all([
                new Promise(function (res, rej) {
                    var sessionReq = store.get(IndexedDBStorage.KEY_SESSION);
                    sessionReq.onsuccess = function () { return res(sessionReq.result); };
                    sessionReq.onerror = function () { return rej(); };
                }),
                new Promise(function (res, rej) {
                    var seqReq = store.get(seqKey);
                    seqReq.onsuccess = function () { return res(seqReq.result); };
                    seqReq.onerror = function () { return rej(); };
                }),
            ]).then(function (_a) {
                var rawSession = _a[0], sequenceId = _a[1];
                if (rawSession && typeof sequenceId === 'number') {
                    session = fn(__assign(__assign({}, rawSession), { sequenceId: sequenceId }));
                }
                else {
                    session = fn();
                }
                store.put({ sessionId: session.sessionId, timestamp: session.timestamp }, IndexedDBStorage.KEY_SESSION);
                store.put(session.sequenceId, seqKey);
            });
        });
    };
    IndexedDBStorage.prototype.getCurrentSessionId = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var session;
            var transaction = _this.idb.transaction(IndexedDBStorage.OBJECT_STORE_SESSIONS, 'readwrite');
            transaction.oncomplete = function () {
                resolve(session === null || session === void 0 ? void 0 : session.sessionId);
            };
            transaction.onerror = function (event) {
                reject(event);
            };
            transaction.onabort = function (event) {
                reject(event);
            };
            var store = transaction.objectStore(IndexedDBStorage.OBJECT_STORE_SESSIONS);
            var request = store.get(IndexedDBStorage.KEY_SESSION);
            request.onsuccess = function () {
                session = request.result;
            };
        });
    };
    /**
     * Events are cached locally with retention policy set as 3 days. And data
     * will be removed when they are expired before they get a chance to be sent.
     */
    IndexedDBStorage.prototype.removeExpiredEvents = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var transaction = _this.idb.transaction(IndexedDBStorage.OBJECT_STORE_EVENTS, 'readwrite');
            transaction.oncomplete = function () {
                resolve();
            };
            transaction.onerror = function (event) {
                reject(event);
            };
            transaction.onabort = function (event) {
                reject(event);
            };
            // $FlowFixMe
            var keyrange = IDBKeyRange.upperBound(Date.now() - IndexedDBStorage.RETENTION);
            var request = transaction
                .objectStore(IndexedDBStorage.OBJECT_STORE_EVENTS)
                .index(IndexedDBStorage.INDEX_EVENT_TIMESTAMP)
                .openCursor(keyrange);
            request.onsuccess = function () {
                var cursor = request.result;
                if (cursor) {
                    cursor.delete();
                    cursor.continue();
                }
            };
        });
    };
    IndexedDBStorage.DATABASE_NAME = 'data-tracking';
    IndexedDBStorage.OBJECT_STORE_EVENTS_V1 = 'events';
    IndexedDBStorage.OBJECT_STORE_EVENTS = 'events_v2';
    IndexedDBStorage.OBJECT_STORE_SESSIONS_V1 = 'sessions';
    IndexedDBStorage.OBJECT_STORE_SESSIONS = 'session_v2';
    IndexedDBStorage.INDEX_EVENTS_FETCHED = 'fetched';
    IndexedDBStorage.INDEX_EVENT_TIMESTAMP = 'timestamp';
    IndexedDBStorage.KEY_SESSION = 'current_session';
    IndexedDBStorage.RETENTION = 172800000; // 2 days
    return IndexedDBStorage;
}());// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function(){}