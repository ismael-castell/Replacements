OzB.competition = {

    clearFilterOptions: function(elm) {
        var form = jQuery("form[name='competition_filter']");

        form.find('input:radio[name="filter_types"][value="0"]').prop(
                        "checked", "checked").trigger("change");
        form.find('input:radio[name="filter_methods"][value="0"]').prop(
                        "checked", "checked").trigger("change");
        form.find('input:radio[name="filter_reqmts"][value="0"]').prop(
                        "checked", "checked").trigger("change");
        form.find('select[name="location"]').val("");
        form.find('select[name="entry_limit"]').val("");
    },
    initView: function(nid, uid) {
        jQuery('#node' + nid + ' div.foxshot-container span.comp-seen').
            click(function() {
                OzB.competition.markAsSeen(this, nid, uid, 0);
            });
        var span = jQuery('#node' + nid + ' div.foxshot-container span.comp-entered');
        if (span.hasClass('won')) {
            span.click(function() {
                OzB.competition.openWinsMenu(this, nid);
            });
        } else {
            span.click(function() {
                OzB.competition.recordEntry(this, nid, uid, 0);
            });
        }
    },
    markAsSeen: function(elm, nid, uid, val, hide) {
        OzB.call('node_hide', [
            parseInt(nid, 10), parseInt(uid, 10), parseInt(val, 10)], function(data) {
            if (data && data['errmsg']) {
                Tooltip.showHTML('<div class="tooltip">' + data['errmsg'] +
                                 '</div>', 'Cannot Mark Comp as Seen',
                                 elm, 320);
            } else {
                var link = jQuery(elm);
                var foxshot = jQuery('#node' + nid + ' div.foxshot-container');
                if (val) {
                    if (hide) {
                        jQuery('#node' + nid).slideUp();
                    } else {
                        jQuery('<span></span>').addClass('overlay').addClass('comp-seen').attr('title', 'Click to unmark as seen').text('Seen').click(function(){}