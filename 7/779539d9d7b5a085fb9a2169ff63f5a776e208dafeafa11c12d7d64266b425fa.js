
$(document).ready(function () {

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
        $loginlink = $('.loginregisterlink');
        $followtopiclink = $('.followtopiclink');
        $second_article_register = $('#second-article-register');
        $second_article_body = $('#second-articlebody');
        $close_registration = $('#cd-close-form-x');
        $page_background = $('#cd-user-modal');
        $loginlinkRegform = $('#loginlinkregform');
        $close_form = $('#finishReg');

    //open modal
    $loginlink.on('click', function (event) {
        showRegistration(event)
    });
    
    $followtopiclink.on('click', function (event) {
        showRegistration(event);
    });

    $second_article_register.on('click', function (event) {
        showRegistration(event)
    });

    $form_signup.on('click', function (e) {
        var container1 = $("#region_options");
        var container2 = $("#topic_options");
        var morelink = $(".moredropdown");

        if (!container1.is(e.target) && !morelink.is(e.target)) {
            container1.css({
                visibility: "hidden"
            });
        }

        if (!container2.is(e.target) && !morelink.is(e.target)) {
            container2.css({
                visibility: "hidden"
            });
        }

    });

    //close modal when clicking the esc keyboard button
    $(document).keyup(function (event) {
        if (event.which === '27') {
            $form_modal.removeClass('is-visible');
            //document.getElementById('registerForm').reset();
        }
    });

    $(document).click(function (event) {
        if ($(event.target).is($loginlink)) {
            $form_modal.addClass('is-visible');
        }
        else if ($(event.target).is($close_registration) || $(event.target).is($close_form)) {
            $form_modal.toggleClass('is-visible');
        }
        //else if ($(event.target).is($page_background)) {
        //    // allow clicking on background to close the form
        //    $form_modal.removeClass('is-visible');
        //}        
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

    

    //back to login from the forgot-password form
    $loginlinkRegform.on('click', function (event) {
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