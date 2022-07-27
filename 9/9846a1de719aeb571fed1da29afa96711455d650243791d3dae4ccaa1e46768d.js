$(document).ready(function () {

    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('href');

        $('ul.tabs li').removeClass('active');
        $('.tab-pane').removeClass('active');

        $('ul.tabs li').removeClass('show');
        $('.tab-pane').removeClass('show');

        $(this).addClass('active');
        $(tab_id).addClass('active');

        $(this).addClass('show');
        $(tab_id).addClass('show');
    });

    $('a.accordion').click(function () {
        var tab_id = $(this).parent();
        var opening = !tab_id.hasClass('active');

        // Close all tabs
        var $allTabs = $('#tabcontent a.accordion');

        $allTabs.each(function () {
            var $parent = $(this).parent();
            $parent.removeClass('active show');
        });

        if (opening) {
            tab_id.addClass('active show');
        }
    });

    // close first accordion if small screen
    if (testelement("tab-1")) {
        if (window.innerWidth <= 789) {
            $('#tab-1').removeClass('active');
            $('#tab-1').removeClass('show');
        }
        else {
            //$('#tab-1').addClass('active');
            //$('#tab-1').addClass('show');
        }
    }


    // When the user scrolls the page, execute myFunction 

    //window.addEventListener("scroll", makesticky);
    window.onscroll = function () { makesticky(); };

    window.addEventListener("resize", accordionFix);
    window.addEventListener("resize", checkAbsolute);
    window.addEventListener("resize", makesticky);
    window.addEventListener("DOMContentLoaded", makesticky);
    //document.onload = makesticky;

    // Get the header
    var header = document.getElementById("mainHeader");
    var navbar = document.getElementById("slideout");
    var navbarContent = document.getElementById("slideout_inner");
    var articleNavbar = document.getElementById('article-heading-bar');
    if (articleNavbar) {
        var offset = articleNavbar.offsetTop;
    }
    var homepageNavbar = document.getElementById('homepage-filters');
    if (homepageNavbar) {
        var offset2 = homepageNavbar.offsetTop;
    }
    var slideout = true;
    if (document.getElementById('slideout') === null) {
        slideout = false;
        $('#mainbody').addClass('mainbody-no-slideout');
    }
    makesticky();

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function makesticky() {
        if (slideout) {

            // Get the distance from top of page at which sidebar should become 'sticky'
            var sticky = 0;
            // Include admin header
            if (document.getElementById('adminHeader')) {
                sticky = $('#adminHeader').outerHeight(true);
            }
            // Include cookie consent form
            if (document.getElementById('cookieConsent') && document.getElementById("cookieConsent").style.display != "none") {
                sticky += $('#cookieConsent').outerHeight(true);
            }
            // Include site header
            sticky += $('#userHeader').outerHeight(true) + $('#mainHeader').height();

            if (window.innerWidth <= 1048) {
                if (window.pageYOffset > sticky) {
                    if (navbar.style.position != 'fixed') {
                        setTimeout(() => { navbar.style.transitionDuration = '0.3s'; }, 400);
                        navbar.style.transitionDuration = '0s';
                        navbar.style.top = '0';
                        navbar.style.position = 'fixed';
                        navbar.style.height = '100vh';
                        navbarContent.style.height = '100vh';
                    }
                } else {
                    setTimeout(() => { navbar.style.transitionDuration = '0.3s'; }, 400);
                    navbar.style.transitionDuration = '0s';
                    navbar.style.top = sticky + 'px';
                    navbar.style.position = 'absolute';
                    // Ensure the navbar content stays at the correct height, such that you can
                    // scroll it and still see all the content, even before it becomes 'sticky'
                    navbarContent.style.height = 'calc(100vh - ' + (sticky - window.pageYOffset) + 'px)';
                }
            }
            else {
                if (navbar.style.position === 'absolute')
                    navbar.style.position = 'unset';
            }
        }
        // Article page navbar
        if (document.getElementById('article-heading-bar')) {
            if (window.pageYOffset >= offset) {
                articleNavbar.classList.add('sticky-article-bar');
            } else {
                articleNavbar.classList.remove('sticky-article-bar');
            }
        }
        if (document.getElementById('homepage-filters')) {
            if (window.pageYOffset >= offset2) {
                homepageNavbar.classList.add('sticky-article-bar');
            } else {
                homepageNavbar.classList.remove('sticky-article-bar');
            }
        }
    }

    $('#showblock').on('click', function () {
        event.stopPropagation();

        var $showBlockCheckbox = $(this);

        // delay transition to overflow:hidden if we are retracting the slider
        // js doesn't seem to want to read the overflow-x css so use jQuery
        var $navbar = $(navbar);
        var openClass = 'sidebar-open';

        // Check we are on mobile device by checking viewport
        var isMobile = window.matchMedia("only screen and (max-width: 1048px)").matches;

        if (isMobile && $showBlockCheckbox.prop('disabled') == false) {
            if ($showBlockCheckbox.prop('checked') == false) {
                // No! keep it visible until the transition has finished
                $navbar.css('overflow-x', 'visible');
                setTimeout(() => { $navbar.css('overflow-x', ''); }, 350);
                $showBlockCheckbox.removeClass(openClass);
                fliparrows('right');
            }
            else {
                $showBlockCheckbox.addClass(openClass);
                fliparrows('left');
            }
        }

        // disable checkbox and delay re-enabling to prevent multiple clicks
        $showBlockCheckbox.prop('disabled', true);
        setTimeout(() => { $showBlockCheckbox.prop('disabled', false); }, 500);
    });

    // make whole slideout bar clickable
    $('#slideout, #slideout_tab').on('click', function (e) {
        //e.stopPropagation();
        if (allowEventAtThisPosition(e, 'slideout_inner')) {
            $('#showblock').click();
        }
    });

    // for closing the sidebar if you click outside it
    $('.flexwrapper>div.wrapper').on('click', function (e) {
        // is the slideout open?
        var $showBlockCheckbox = $('#showblock');
        var sidebarOpen = $showBlockCheckbox.prop('checked');

        if (sidebarOpen && allowEventAtThisPosition(e, ['slideout', 'slideout_inner'])) {
            $showBlockCheckbox.click();
        }
    })


    if (document.querySelector("#cookieConsent button[data-cookie-string]")) {
        document.querySelector("#cookieConsent button[data-cookie-string]").addEventListener("click", function (el) {
            document.cookie = el.target.dataset.cookieString;
            document.getElementById("cookieConsent").style.display = "none";
            //document.querySelector("#cookieConsent").classList.
            makesticky();
        }, false);
    }

    function accordionFix() {
        if (testelement("tab-1")) {
            if (window.innerWidth <= 789) {
                $('#tab-1').removeClass('active');
                $('#tab-1').removeClass('show');
            }
            else {
                $('#tab-1').addClass('active');
                $('#tab-1').addClass('show');
            }
        }
    }

    function checkAbsolute() {
        if (window.innerWidth > 1048) {
            if (navbar !== null)
                navbar.style.position = 'unset';
        }
    }


    var $form_modal = $('.cd-user-modal'),
        $form_login = $form_modal.find('#cd-login'),
        $form_signup = $form_modal.find('#cd-signup'),
        $form_forgot_password = $form_modal.find('#cd-reset-password'),
        $form_modal_tab = $('.cd-switcher'),
        $tab_login = $form_modal_tab.children('li').eq(0).children('a'),
        $tab_signup = $form_modal_tab.children('li').eq(1).children('a'),
        $forgot_password_link = $form_login.find('.cd-form-bottom-message a'),
        $back_to_login_link = $form_forgot_password.find('.cd-form-bottom-message a'),
        $main_nav = $('#userNavBar');

    //$loginlink = $('.loginregisterlink');
    //$followtopiclink = $('.followtopiclink');
    //$second_article_register = $('#second-article-register');
    //$second_article_body = $('#second-articlebody');

    // This is in registration.js
    //open modal
    //$loginlink.on('click', function (event) {
    //    if ($(event.target).is($main_nav)) {
    //        // on mobile open the submenu
    //        $(this).children('a').toggleClass('is-visible');
    //    } else {
    //        // on mobile close submenu
    //        $main_nav.children('a').removeClass('is-visible');
    //        //show modal layer
    //        $form_modal.addClass('is-visible');
    //        //show the selected form
    //        $(event.target).is('.cd-signup') ? signup_selected() : login_selected();
    //    }
    //});

    // This is in registration.js
    //$followtopiclink.on('click', function (event) {
    //    if ($(event.target).is($main_nav)) {
    //        // on mobile open the submenu
    //        $(this).children('a').toggleClass('is-visible');
    //    } else {
    //        // on mobile close submenu
    //        $main_nav.children('a').removeClass('is-visible');
    //        //show modal layer
    //        $form_modal.addClass('is-visible');
    //        //show the selected form
    //        $(event.target).is('.cd-signup') ? signup_selected() : login_selected();
    //    }
    //});

    // This is in registration.js
    //$form_signup.on('click', function (e) {
    //    var container1 = $("#region_options");
    //    var container2 = $("#topic_options");
    //    var morelink = $(".moredropdown");
    //    if (!container1.is(e.target) && !morelink.is(e.target)) {
    //        container1.css({
    //            visibility: "hidden"
    //        });
    //    }
    //    if (!container2.is(e.target) && !morelink.is(e.target)) {
    //        container2.css({
    //            visibility: "hidden"
    //        });
    //    }
    //});

    // This is in registration.js
    //$second_article_register.on('click', function (event) {
    //    if ($(event.target).is($main_nav)) {
    //        // on mobile open the submenu
    //        $(this).children('a').toggleClass('is-visible');
    //    } else {
    //        // on mobile close submenu
    //        $main_nav.children('a').removeClass('is-visible');
    //        //show modal layer
    //        $form_modal.addClass('is-visible');
    //        //show the selected form
    //        $(event.target).is('.cd-signup') ? signup_selected() : login_selected();
    //    }
    //});

    //Change email dialog
    $('#email-dialog').on('click', function (e) {
        $form_modal.toggleClass('is-visible');
    });

    //Allow submission only when valid email has been typed
    //$(document).on('keyup', '#change-email-dialog #NewEmail', function () {

    //    isValid = $(this).hasClass('valid');
    //    if (isValid) {
    //        $('#change-email-submit').prop('disabled', false);
    //    } else {
    //        $('#change-email-submit').prop('disabled', true);
    //    }

    //});

    //close modal
    $('.cd-user-modal').on('click', function (event) {
        //if ($(event.target).is($form_modal) || $(event.target).is('.cd-close-form')) {
        //    // allow clicking on background to close the form
        //    $form_modal.removeClass('is-visible');
        //}
    });

    //close modal when clicking the esc keyboard button
    $(document).keyup(function (event) {
        if (event.which === '27') {
            $form_modal.removeClass('is-visible');
            //document.getElementById('registerForm').reset();
        }
    });

    //switch from a tab to another
    $form_modal_tab.on('click', function (event) {
        event.preventDefault();
        $(event.target).is($tab_login) ? login_selected() : signup_selected();
    });

    //hide or show password
    function tog(v) { return v ? 'addClass' : 'removeClass'; }
    $(document).on('input', '.clearable', function () {
        $(this)[tog(this.value)]('x');
    }).on('mousemove', '.x', function (e) {
        $(this)[tog(this.offsetWidth - 30 < e.clientX - this.getBoundingClientRect().left)]('onX');
    }).on('touchstart click', '.onX', function (ev) {
        ev.preventDefault();
        $(this).attr('type', 'text');
    });


    //show forgot-password form
    //$forgot_password_link.on('click', function (event) {
    //    event.preventDefault();
    //    forgot_password_selected();
    //});

    //back to login from the forgot-password form
    $back_to_login_link.on('click', function (event) {
        event.preventDefault();
        login_selected();
    });

    function login_selected() {
        $form_login.addClass('is-selected');
        $form_signup.removeClass('is-selected');
        $form_forgot_password.removeClass('is-selected');
        $tab_login.addClass('selected');
        $tab_signup.removeClass('selected');
    }

    function signup_selected() {
        $form_login.removeClass('is-selected');
        $form_signup.addClass('is-selected');
        $form_forgot_password.removeClass('is-selected');
        $tab_login.removeClass('selected');
        $tab_signup.addClass('selected');
    }

    function(){}