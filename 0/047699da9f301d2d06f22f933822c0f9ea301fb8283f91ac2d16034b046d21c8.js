/* eslint-disable no-undef */

/**
 * @typedef {object} FetchEvent
 * @property {Request} request - The Request the browser intends to make
 * @property {function(Response| PromiseLike<Response>): void} respondWith - Prevent default fetch
 * handling and provide custom response
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Fetchevent
 */

/**
 * @typedef {object} WorkerLocation
 * @property {string} host - Host part of the worker's location
 * @property {function(): string} toString - Serialized URL for the worker's location
 * @property {string} origin - Worker's origin
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WorkerLocation
 */

/**
 * @typedef {object} ServiceWorkerGlobalScope
 * @property {function(...(string | URL)): void} importScripts - Imports scripts into worker's scope
 * @property {WorkerLocation} location -  WorkerLocation associated with the worker
 * @property {function(string, Function): void} addEventListener -  Registers an event handler
 * @property {function(): Promise<void>} skipWaiting - Force waiting service worker to become active
 * @see https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope
 */

/**
 * @typedef {object & ServiceWorkerGlobalScope} GujWorkerGlobalScope
 * @property {import("@guj-digital/webpush-notifications").GujWebPushSw} [GujWebPushSw] - Webpush
 */

/** @type {GujWorkerGlobalScope} */
