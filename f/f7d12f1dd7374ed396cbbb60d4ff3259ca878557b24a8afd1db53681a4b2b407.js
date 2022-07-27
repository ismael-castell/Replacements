///////
// gaAddons.js
// @Author Stéphane Hamel - shamel@immeria.net - http://immeria.net
// See http://code.google.com/p/gaddons/people/list for contributors
//
// Google Groups forum: http://groups.google.com/group/gaaddons
// Google Code repository: http://code.google.com/p/gaddons/
//
///////
// License: Version: MPL 1.1
// The contents of this file are subject to the Mozilla Public License Version
// 1.1 (the "License"); you may not use this file except in compliance with
// the License. You may obtain a copy of the License at
// http://www.mozilla.org/MPL/
//
// Software distributed under the License is distributed on an "AS IS" basis,
// WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
// for the specific language governing rights and limitations under the
// License.
//
// Changelog:
// v2.8 - Jan. 9 2010 - Fix link for document download when image inside anchor
// v2.7 - Nov. 10 2009 - Further improvement to outbound links tracking
// v2.6 - Oct. 22 2009 - Fix outbound link sometime showing //
// v2.5 - Jun. 1st 2009 - Make sure to load at "onload", rewritten as an object
// v2.4 - Apr. 21st 2009 - Fix trackPageview() syntax
// v2.3 - Apr. 10th 2009 - Fix logic issues. Add tracking of mailto links. Allow tracker to be named something else than pageTracker
// v2.2 - Mar. 20nd 2009 - Fix issue with tracking download docs on current domain
// v2.1 - Jan. 22nd 2009 - Set bUseEventForOutbout and bUserEventForDownload to toggle use of Events or Page Views
// v2.0 - Jan. 2009 - Use Google Analytics Events to track downloads and external links
// v1.0 - Inspired by the work of Justin Cutroni - Google Analytics Short Cut - http://gashortcut.com/
///////
/*
* @fileoverview Wrapper for gaAddons
*/
