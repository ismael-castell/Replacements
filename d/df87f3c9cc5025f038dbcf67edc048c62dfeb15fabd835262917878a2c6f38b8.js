
var TatariXandrManager = /** @class */ (function () {
    function TatariXandrManager(xandrID, xandrGroups) {
        this.cookieTime = 30 * 24 * 60 * 60 * 1000; // 30 days
        this.cookieName = 'tatari-xandr-group';
        this.groups = 1; // Total number of test groups
        this.group = 1; // Selected test group
        this.xandrID = xandrID;
        // this is a xandr generated snippet
        // @ts-ignore
        // tslint:disable-next-line
        !function (e, i) { if (!e.pixie) {
            var n = e.pixie = function(){}