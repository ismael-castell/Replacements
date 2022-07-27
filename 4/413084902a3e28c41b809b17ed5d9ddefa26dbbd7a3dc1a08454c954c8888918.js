/* global self, caches, workbox, importScripts */
// version: SW-DSKTP-13

/* IMPORTANT NOTE *
 *
 * Please note that any changes made in this desktop service worker may affect the Gringotts account pages.
 *
 * This is because both the Gringotts pages and the Take-2 pages are both hosted under the same WWW domain.
 * The service worker will continue to function even when the user (unknowingly) switches projects by navigating to the mobile account pages.
 * Note that desktop account pages may eventually be in the Gringotts project as well.
 *
 * Right now we are only cacheing fonts and assets in this service worker file, which is perfectly fine for the Gringotts application.
 *
 * We just don't want to ever cache SNAPI responses, as they may contain PII.
 */

