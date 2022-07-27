/*
Brian Katz, Cardinal Path - Google Analytics Government Wide Site Usage Measurement
* v0.1 121011 : First Test Version
* v1.0 121012 : Added Cookie Synchronizing and filtered out Outbound tracking of cross- and sub-domain links
* v1.1 121015 : Changed cross-domain to use setAllowAnchor and fixed problem with some links
* v1.2 121015-2 : Added incoming cross-domain tracking to default _gaq tracker by adding _setAllowLinker and _setAllowAnchor
* v1.3 121015-3 : All Cross-domain Tracking removed
* v1.4 121015-4 : Multiple Search parameters and XDT links tracked as events
* v1.5 121122 : Change to sub-domain level visits (cookies). _DOMReady delays tracking so goes last. ECereto Review. JSHinted
*/

