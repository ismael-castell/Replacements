$(function(){

    var setLHPageName = function(){
       this.lhComp =  $('.lite-header');

    };

    setLHPageName.prototype.init =function(){

        if(this.lhComp.length){

			var buParam = this.getParam('BU');

			this.setPageName(buParam.trim().toLowerCase());

        }

    };



    /*To get URL parameter value*/
    setLHPageName.prototype.getParam = function(param) {
        var url_string = window.location.href; //window.location.href
        var url = new URL(url_string);
        var paramVal = url.searchParams.get(param);
        paramVal = (paramVal!=null && paramVal!=undefined) ? paramVal : '' ;
        return paramVal ;
    };

	setLHPageName.prototype.setPageName = function(buParam) {

        var pagePrefix = 'dp:';

		switch(true){

            case buParam == 'safety': 
                 pagePrefix = 'dp-sf-ppe:' ;
                 break;
            case buParam == 'pbs' || buParam.indexOf('performance-building-solutions')>-1 : 
                 pagePrefix = 'dpbs:' ;
               	 break;
            case buParam == 'nnb' || buParam.indexOf('nutrition_and_biosciences')>-1: 
                 pagePrefix = 'dpnb:' ;
                 break;
            case buParam == 'mobility-materials': 
                 pagePrefix = 'dpti:' ;
                 break;
            case buParam =='eni' || buParam.indexOf('electronics-and-imaging')>-1: 
				         pagePrefix = '' ;
                 break;
            case buParam.indexOf('water')>-1:
				         pagePrefix = 'dpws:' ;
                 break;
            case buParam == 'ppe' || buParam.indexOf('personal-protective-equipment')>-1:
				         pagePrefix = 'dp-sf-ppe:' ;
                 break;

        }

         if(digitalData.page.pageName.indexOf(':')>-1){
             var pageName =  digitalData.page.pageName.split(':')[1];
             digitalData.page.pageName = pagePrefix+pageName;
         }

    };

    var lhPageObj = new setLHPageName();
	lhPageObj.init();

});

$(document).ready(function() {

     var params=new URLSearchParams(window.location.search);


 $("#sfinder").click(function(){

     if(params.has('BU')){

           var buparam=params.get('BU');

        var test=$("#sfinder").attr("href").replace(/.html/,"");



         if((buparam.toLowerCase() == "transportation_and_industrial" || buparam.toLowerCase() == "tni") && ((window.location.href.toLowerCase()).indexOf('tagid=dupont:brands/molykote')>-1)){
				var finalparam=test+"/results.html?BU=molykote";
         }else{

             if(buparam.toLowerCase() == "corporate"){
				var finalparam=test+"/results.html";
             }else{
				var finalparam=test+"/results.html?BU="+buparam;
             }

         }



         $("#sfinder").attr("href",finalparam);

          


     }

  });
  
 $("#rcenter").click(function(){
       
     if(params.has('BU')){

         var buparam=params.get('BU');
         var bpm=params.get('BU');
         var samp=$("#rcenter").attr('href');

         if((bpm.toLowerCase())=="molykote" && (window.location.href.indexOf('/solution-finder/results')>-1)){
             var finaltest=samp+"?BU=transportation_and_industrial&tagId=dupont:brands/molykote";
         }else{
			var finaltest=samp+"?BU="+bpm;
         }

         $("#rcenter").attr("href",finaltest);


    }
     else{
		var samp=$("#rcenter").attr('href');
        var finaltest=samp+"?BU=corporate";
        $("#rcenter").attr("href",finaltest);
     }

    });

    if (!$(".lite-header--logo").data("bu-details").bulink)
    {
        $(".navigation-item").each(function() {
            if ($(this).text() == $(".lite-header--logo").data("bu-details").buname)
            $(this).hide();
        })
    }
});


// mobile navigation //
(function() {
    if (!document.getElementsByClassName('lite-header')[0]) {
        return
    }

    var dupontNavigationTools = document.getElementsByClassName('lite-header');


    var t_sel = function(selector) {
        return document.querySelector(selector);
    };

    var t_navigationEl = t_sel('.lite-header'),
        t_hamburger = t_sel('.lite-header .hamburger'),
        t_backbutton = t_sel('.lite-header .back'),
        t_menuholder = t_sel('.lite-header .lite-header--items'),
        t_rootmenu = t_sel('.lite-header .lite-header--items-top'),
        t_rootbottom = t_sel('.lite-header .lite-header--items-bottom'),
        t_logo = t_sel('.lite-header .lite-header--logo'),
		t_navigationItem = t_sel('.lite-header .navigation-item-contain > .delay-1') ;

    // helper. vanilla js for .parents('selector');
    var t_getClosest = function(elem, selector) {

        // Element.matches() polyfill
        if (!Element.prototype.matches) {
            Element.prototype.matches =
                Element.prototype.matchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector ||
                Element.prototype.oMatchesSelector ||
                Element.prototype.webkitMatchesSelector ||
                function(s) {
                    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                        i = matches.length;
                    while (--i >= 0 && matches.item(i) !== this) {}
                    return i > -1;
                };
        }

        // Get the closest matching element
        for (; elem && elem !== document; elem = elem.parentNode) {
            if (elem.matches(selector)) return elem;
        }
        return null;

    };

    // toggle mobile nav
    var t_toggleNavigation = function(ev) {

        if (t_navigationEl.classList.contains('open')) {
            t_navigationEl.classList.remove('open');
            t_hamburger.classList.remove('open');
            t_clearNavigation();
        } else {
            t_navigationEl.classList.add('open');
            t_hamburger.classList.add('open');
        }

    };

    var t_clearClosedSubmenus = function(index) {
        Array.from(document.querySelectorAll('.subnav-list[data-level]')).forEach(function(item) {
            var c = item.getAttribute('data-level');
            if (c > index) {
                item.parentElement.removeChild(item);
            }
        });
    }

    // clean up nav
    var t_clearNavigation = function() {
        t_navigationEl.classList.remove('open');
        t_rootbottom.classList.remove('out');
        t_rootmenu.classList.remove('outleft');
        t_backbutton.setAttribute('data-level', 0);
        t_menuholder.style.height = '';
        Array.from(document.querySelectorAll('.subnav-list')).forEach(function(item) {
            item.remove();
        });

        t_sel('.hamburger > input').checked = false;
    };

    var t_closeSubNav = function(ev) {
        levelToCLose = t_backbutton.getAttribute('data-level');
        levelToOpen = ((levelToCLose - 1) > 0) ? (levelToCLose - 1) : 0;
        var elToClose = document.querySelector('.subnav-list-' + levelToCLose);
        var elToOpen = (levelToOpen > 0) ? document.querySelector('.subnav-list-' + levelToOpen) : t_rootmenu;

        // close current menu
        elToClose.classList.add('outright');

        // open next
        elToOpen.classList.remove('outleft');

        t_backbutton.setAttribute('data-level', (levelToCLose - 1));

        if (levelToOpen === 0) {
            t_menuholder.style.height = '';
            t_rootbottom.classList.remove('out');
        } else {
            t_menuholder.style.height = (elToOpen.clientHeight + 100) + 'px';
        }
    };

    var t_openSubNav = function(subnavEl) {
        var existinglists = document.querySelectorAll('.lite-header .subnav-list'),
            existinglistslen = existinglists.length || 0,
            nextlevel = (existinglistslen + 1);


        t_backbutton.setAttribute('data-level', nextlevel);

        // // close/disable any existing sub navs that are on the screen
        if (existinglistslen > 0) {
            Array.from(existinglists).forEach(function(item) {
                item.classList.add('outleft');
            });
        }

        // build the sub nav
        var t_subnavitems = subnavEl.children,
            t_subnavitemslen = t_subnavitems.length,
            t_subnavitemsmulti = (t_subnavitemslen > 1) ? true : false;

        var t_listItems = t_getSubnavItems(t_subnavitems);

        var t_sublist = document.createElement('ul');
        t_sublist.classList.add('subnav-list');
        t_sublist.classList.add('subnav-list-' + nextlevel);
        t_sublist.classList.add('outright');
        t_sublist.setAttribute('data-level', nextlevel);
        t_sublist.style.visibility = 'hidden';

        t_sublist.innerHTML = t_listItems.join('');

        t_menuholder.appendChild(t_sublist, t_subnavitemsmulti);

        t_sublist.style.visibility = 'visible';
        setTimeout(function() {
            t_menuholder.style.height = (t_sublist.clientHeight + 100) + 'px';
            t_sublist.classList.remove('outright');
        }, 100);
    };

    var t_getSubnavItems = function(navs, ismulti) {
        var arr = [];
        Array.from(navs).forEach(function(item) {
            var items = Array.from(item.children);
            items.forEach(function(li) {
                if (li.nodeName.toLowerCase() === 'li') {
                    if (ismulti) {
                        arr.push(li.innerHTML);
                    } else {
                        arr.push('<li>' + li.innerHTML + '</li>');
                    }
                }
            });
        });

        return arr;
    };

    // nav item clicks
    var t_navItemClick = function(el, event) {
        var subnav = el.parentElement.getElementsByClassName('nav-sub-items');
        var hassubnav = (subnav) ? subnav.length : 0;
        if (hassubnav > 0) {

            var isRootMenu = (t_getClosest(el, '.lite-header--items-top')) ? true : false;
            var menuLevelClicked = 0;

            if (!isRootMenu) {
                var parentMenu = t_getClosest(el, '.subnav-list');
                if (parentMenu) {
                    menuLevelClicked = parentMenu.getAttribute('data-level');
                }
            }

            // dispose of higher level submenus before opening a nav
            t_clearClosedSubmenus(menuLevelClicked);

            t_rootmenu.classList.add('outleft');
            t_rootbottom.classList.add('out');

            t_openSubNav(subnav[0]);
            event.preventDefault();
        }
    };


    // event listeners
    t_hamburger.addEventListener('click', t_toggleNavigation);
    t_backbutton.addEventListener('click', t_closeSubNav);
    t_navigationEl.addEventListener('click', function(ev) {
        if (t_navigationEl.classList.contains('open')) {
            var el = ev.target;
            if (el.classList.contains('navigation-item') || el.classList.contains('navigation-item-sm')) {
                t_navItemClick(el, ev);
            }
        }
    });



    var t_setlogoLink = function(data){

        if(data.bulink!=undefined && data.bulink!='' && data.bulink!='/'){

           if(data.bulink.indexOf('html')<0 && data.bulink.indexOf('.com')<0){

				data.bulink = data.bulink + '.html';

          }
        }
         else{
				data.bulink = '#';
            }
        if(t_navigationItem){

        t_navigationItem.setAttribute("href", data.bulink);
        t_navigationItem.innerHTML = data.buname!=undefined ? data.buname : '';
        }
    }; 

    var t_setCountryList = function(){
        var conDDEl = t_sel('.global-logo .country-dd');
        t_setContryDDPos(conDDEl);
        $(window).resize(function(){
			t_setContryDDPos(conDDEl);
        });

        if(conDDEl){
            var conDD = conDDEl.querySelectorAll('a');
            var currPage = window.location.href;
            var matchedCountryTitle = '';
            var currPagePath = window.location.pathname;
            if(currPagePath.startsWith('/fr/')){
				currPagePath = "/"+(currPagePath.split('/fr/'))[1];
            }
            if(currPagePath.startsWith('/nl/')){
				currPagePath = "/"+(currPagePath.split('/nl/'))[1];
            }
            if(currPagePath.startsWith('/en/')){
				currPagePath = "/"+(currPagePath.split('/en/'))[1];
            }

            if(conDD.length<=6){
                $(t_sel('.global-logo .country-dd')).addClass('colm-1');
            }
            /*if(conDD.length>32){
                $(t_sel('.global-logo .country-dd')).addClass('colm-5');
            }
            else if(conDD.length>24){
                $(t_sel('.global-logo .country-dd')).addClass('colm-4');
            }
            else if(conDD.length>16){
                $(t_sel('.global-logo .country-dd')).addClass('colm-3');
            }
            else if(conDD.length>8){
                $(t_sel('.global-logo .country-dd')).addClass('colm-2');
            } */

            $.each(conDD, function(i,v){

                if(currPage.indexOf($(v).attr('href'))>-1){
                    matchedCountryTitle = $(v).text();
                }
				var href = $(v).attr('href');
                if(href.lastIndexOf('/') == href.length-1){
					href = href.substr(0,href.length-1);
                }

                $(v).attr('href',href+currPagePath+window.location.search);
            });
            if(!matchedCountryTitle && conDD.length>0){
                //matchedCountryTitle = $(conDD[0]).text();
               // matchedCountryTitle = "Select a country";
            }
            if(matchedCountryTitle){
            $(t_sel('.global-logo .con-title')).text(matchedCountryTitle);
            }
    
            $(t_sel('.global-logo')).on('click',function(){
                $(t_sel('.global-logo .country-dd')).toggle();
            });
        }else{

             $(t_sel('.global-logo')).hide();
        }
    };

    var t_setContryDDPos = function(conDDEl){
        if(conDDEl){
		var ddwidth = t_logo.offsetWidth;
        if($(t_sel('.global-logo')).siblings('.nav-user-icon').length > 0){
			conDDEl.style.left = -ddwidth+90+"px";
        }else{
			conDDEl.style.left = -ddwidth+50+"px";
        }

        }

    };

	if(dupontNavigationTools.length>0){
		var buParam = t_logo.getAttribute('data-bu-details');
		t_setlogoLink(JSON.parse(buParam));
        t_setCountryList();

	};
	

    // nav cleanup to handle if browser was resized while nav open
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 1024) {
            t_clearNavigation();
        }
    });

})();

// mobile navigation //
(function () {

    //Product Finder Link Changes
    var currentPageURL = window.location.href,
        domainName = window.location.host,
        targetURL = "",
        countryFlag = false;
    
    if (digitalData.page.pageLocation == "France" || digitalData.page.pageLocation == "China" || digitalData.page.pageLocation == "Germany" || digitalData.page.pageLocation == "Spain") {
        countryFlag = true;
    }
    
    if (currentPageURL.indexOf("resource-center.html") >= 0 && currentPageURL.toLowerCase().indexOf("bu=water") >= 0 && countryFlag) {
        if (currentPageURL.indexOf("/content/dupont/") >= 0) {
            switch (digitalData.page.pageLocation) {
                case "France":
                    targetURL = currentPageURL.replace('/emea/fr/fr/', '/amer/us/en/');
                    break;
                case "China":
                    targetURL = currentPageURL.replace('/apac/cn/zh/', '/amer/us/en/');
                    break;
                case "Germany":
                    targetURL = currentPageURL.replace('/emea/de/de/', '/amer/us/en/');
                    break;
                case "Spain":
                    targetURL = currentPageURL.replace('/emea/es/es/', '/amer/us/en/');
                    break;
                default:
            }
        } else if (currentPageURL.indexOf(".pp.") >= 0) {
            targetURL = currentPageURL.replace(domainName, 'www.pp.dupont.com');
        } else {
            targetURL = currentPageURL.replace(domainName, 'www.dupont.com');
        }
        targetURL = targetURL.replace('/resource-center.html', '/solution-finder/results.html');
    
        $("a#sfinder").on("click", function (e) {
            if (targetURL) {
                e.preventDefault();
                window.location.href = targetURL;
            }
        });
    
        setTimeout(function () {
            if (targetURL) {
                $("a#sfinder").attr("href", targetURL);
            }
        }, 1000);
    }

  if (!document.getElementsByClassName('component-navigation')[0]) {
    return
  }

  var dupontNavigation = document.getElementsByClassName('component-navigation')[0];


  var _sel = function (selector) {
    return document.querySelector(selector);
  };

  var navigationEl = _sel('.component-navigation'),
    hamburger = _sel('.component-navigation .hamburger'),
    backbutton = _sel('.component-navigation .back'),
    menuholder = _sel('.component-navigation .component-navigation--items'),
    rootmenu = _sel('.component-navigation .component-navigation--items-top'),
    rootbottom = _sel('.component-navigation .component-navigation--items-bottom'),
    usermobicon = _sel('.component-navigation #userMobileIcon');

  // helper. vanilla js for .parents('selector');
  var getClosest = function (elem, selector) {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) { }
          return i > -1;
        };
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;

  };

  // toggle mobile nav
  var toggleNavigation = function (ev) {
    if (navigationEl.classList.contains('open')) {
      navigationEl.classList.remove('open');
      hamburger.classList.remove('open');
      usermobicon.style.display = "block";
      clearNavigation();
    } else {
      navigationEl.classList.add('open');
      hamburger.classList.add('open');
      usermobicon.style.display = "none";
    }

  };

  var clearClosedSubmenus = function (index) {
    Array.from(document.querySelectorAll('.subnav-list[data-level]')).forEach(function (item) {
      var c = item.getAttribute('data-level');
      if (c > index) {
        item.parentElement.removeChild(item);
      }
    });
  }

  // clean up nav
  var clearNavigation = function () {
    navigationEl.classList.remove('open');
    rootbottom.classList.remove('out');
    rootmenu.classList.remove('outleft');
    backbutton.setAttribute('data-level', 0);
    menuholder.style.height = '';
    Array.from(document.querySelectorAll('.subnav-list')).forEach(function (item) {
      item.remove();
    });

    _sel('.hamburger > input').checked = false;
  };

  var closeSubNav = function (ev) {
    levelToCLose = backbutton.getAttribute('data-level');
    levelToOpen = ((levelToCLose - 1) > 0) ? (levelToCLose - 1) : 0;
    var elToClose = document.querySelector('.subnav-list-' + levelToCLose);
    var elToOpen = (levelToOpen > 0) ? document.querySelector('.subnav-list-' + levelToOpen) : rootmenu;

    // close current menu
    elToClose.classList.add('outright');

    // open next
    elToOpen.classList.remove('outleft');

    backbutton.setAttribute('data-level', (levelToCLose - 1));

    if (levelToOpen === 0) {
      menuholder.style.height = '';
      rootbottom.classList.remove('out');
    } else {
      menuholder.style.height = (elToOpen.clientHeight + 100) + 'px';
    }
  };

  var openSubNav = function (subnavEl) {
    var existinglists = document.querySelectorAll('.component-navigation .subnav-list'),
      existinglistslen = existinglists.length || 0,
      nextlevel = (existinglistslen + 1);


    backbutton.setAttribute('data-level', nextlevel);

    // // close/disable any existing sub navs that are on the screen
    if (existinglistslen > 0) {
      Array.from(existinglists).forEach(function (item) {
        item.classList.add('outleft');
      });
    }

    // build the sub nav
    var subnavitems = subnavEl.children,
      subnavitemslen = subnavitems.length,
      subnavitemsmulti = (subnavitemslen > 1) ? true : false;

    var listItems = getSubnavItems(subnavitems);

    var sublist = document.createElement('ul');
    sublist.classList.add('subnav-list');
    sublist.classList.add('subnav-list-' + nextlevel);
    sublist.classList.add('outright');
    sublist.setAttribute('data-level', nextlevel);
    sublist.style.visibility = 'hidden';

    sublist.innerHTML = listItems.join('');

    menuholder.appendChild(sublist, subnavitemsmulti);

    sublist.style.visibility = 'visible';
    setTimeout(function () {
      menuholder.style.height = (sublist.clientHeight + 100) + 'px';
      sublist.classList.remove('outright');
    }, 100);
  };

  var getSubnavItems = function (navs, ismulti) {
    var arr = [];
    Array.from(navs).forEach(function (item) {
      var items = Array.from(item.children);
      items.forEach(function (li) {
        if (li.nodeName.toLowerCase() === 'li') {
          if (ismulti) {
            arr.push(li.innerHTML);
          } else {
            arr.push('<li>' + li.innerHTML + '</li>');
          }
        }
      });
    });

    return arr;
  };

  // nav item clicks
  var navItemClick = function (el, event) {
    var subnav = el.parentElement.getElementsByClassName('nav-sub-items');
    var hassubnav = (subnav) ? subnav.length : 0;
    if (hassubnav > 0) {

      var isRootMenu = (getClosest(el, '.component-navigation--items-top')) ? true : false;
      var menuLevelClicked = 0;

      if (!isRootMenu) {
        var parentMenu = getClosest(el, '.subnav-list');
        if (parentMenu) {
          menuLevelClicked = parentMenu.getAttribute('data-level');
        }
      }

      // dispose of higher level submenus before opening a nav
      clearClosedSubmenus(menuLevelClicked);

      rootmenu.classList.add('outleft');
      rootbottom.classList.add('out');

      openSubNav(subnav[0]);
      event.preventDefault();
    }
  };


  // event listeners
  hamburger.addEventListener('click', toggleNavigation);
  backbutton.addEventListener('click', closeSubNav);
  navigationEl.addEventListener('click', function (ev) {
    if (navigationEl.classList.contains('open')) {
      var el = ev.target;
      if (el.classList.contains('navigation-item') || el.classList.contains('navigation-item-sm')) {
        navItemClick(el, ev);
      }
    }
  });


  // nav cleanup to handle if browser was resized while nav open
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 1024) {
      clearNavigation();
    }
  });


   


})();

$(function() {
    $('footer h4.footer-accordion').on('click', function() {
        var $plus = $(this).find('span.fas');
        if ($plus.hasClass('fa-plus')) {
            $(this).parent().find('.accordion-closed').addClass('accordion-open');
            $plus.removeClass('fa-plus').addClass('fa-minus');
        } else {
            $(this).parent().find('.accordion-closed').removeClass('accordion-open');
            $plus.removeClass('fa-minus').addClass('fa-plus');
        }
    });
});
$(document).ready(function () {
    $.getJSON('/content/dam/dupont/global/content-fragments/copyrightfragment/jcr:content/data/master.json', function(data, status) {
        if(data){
        //var text = JSON.parse(JSON.stringify(dataa));
			var country= digitalData.page.pageLocation.split(" ").join("").toLowerCase();
            var language= digitalData.page.pageLanguage.toLowerCase();
			var copytext= data[country+language];
			$(".copyrightinfo").html(copytext);

        }
    });
});
$(function() {

    /*Solution finder search component*/
    var solutionFinderSearchComponent = function() {
        this.cmpSolFinderSearch = $($('.cmp-solFinderSearch')[0]);
        if (this.cmpSolFinderSearch.length > 0) {
            this.viewByContainer = this.cmpSolFinderSearch.find('#view-by-container');
            this.searchInput = this.cmpSolFinderSearch.find('#search-input');
            this.brandsList = (JSON.parse(this.viewByContainer.attr('data-brands-list'))).sort(this.sortByName);
            this.productsList = (JSON.parse(this.viewByContainer.attr('data-prod-list'))).sort(this.sortByName);
            this.fsList = JSON.parse(this.viewByContainer.attr('data-fs-list'));
            this.searchResultPage = this.viewByContainer.attr('data-searchResult-page');
            this.optionsList = this.cmpSolFinderSearch.find('.filter-body');
            this.viewAllProdLink = this.cmpSolFinderSearch.find('.viewAllProds');
            this.searchInputClearBtn = this.cmpSolFinderSearch.find('#clean-search');
			this.uiAutoComplete=null;
        }



    };


    /*To intiate execution*/
    solutionFinderSearchComponent.prototype.init = function() {
        if (this.cmpSolFinderSearch.length > 0) {
            this.removeData();
            this.bindEvents();
            this.initAutocomplete();
			this.replaceBlankSpaces();

        }


    };
	
	/*To replace blank spaces*/
    solutionFinderSearchComponent.prototype.replaceBlankSpaces = function() {


		$.each(this.viewByContainer.find('a') , function(ind, val){
			var linkPath = ($(val).attr('href')).replace(/%20/g, "-");
				$(val).attr('href', linkPath);

        });

        $.each(this.optionsList.find('.tab-pane') , function(ind, val){
			var id = ($(val).attr('id')).replace(/\s/g, "-");
				$(val).attr('id', id);

        });

    };


    /*To remove daa from html attributes*/
    solutionFinderSearchComponent.prototype.removeData = function() {

        this.viewByContainer.removeAttr('data-brands-list');
        this.viewByContainer.removeAttr('data-prod-list');
        this.viewByContainer.removeAttr('data-fs-list');
		this.viewByContainer.removeAttr('data-searchResult-page');

    };

    /*To bind event on handlers*/
    solutionFinderSearchComponent.prototype.bindEvents = function() {

        this.searchInput.keyup($.proxy(this.searchInputChangeEventHandler, this));
        this.viewAllProdLink.on('click', $.proxy(this.viewAllprodLinkClickHandler, this));
        this.optionsList.find('label').on('click', $.proxy(this.industryOrProdLineNameClickHandler, this));
        this.searchInputClearBtn.on('click', $.proxy(this.clearBtnClickHandler, this));
        this.searchInput.focus($.proxy(this.searchInputFocusIn, this));
        this.searchInput.focusout($.proxy(this.searchInputFocusOut, this));



    };


    /*To handle click on clear button. Empty search input box and hide clear button*/
    solutionFinderSearchComponent.prototype.clearBtnClickHandler = function(event) {
        this.uiAutoComplete.hide();
        this.searchInput.val('');
        this.searchInputClearBtn.css('visibility', 'hidden');
    };

    /*To handle click on product line name.*/
    solutionFinderSearchComponent.prototype.industryOrProdLineNameClickHandler = function(event) {
        //var type = ($(event.currentTarget).attr('data-value').split(':')[1]).split('/')[0];

        this.goToSearchResult(undefined, undefined, $(event.currentTarget).attr('data-value'));

    };

    /*To handle click event on view all product link click.*/
    solutionFinderSearchComponent.prototype.viewAllprodLinkClickHandler = function(event) {
        this.goToSearchResult();


    };


    /*To handle change event on search input.*/
    solutionFinderSearchComponent.prototype.searchInputChangeEventHandler = function(event) {


        if (event.keyCode == 13) {
            if (this.searchInput.val() != '') {
                this.goToSearchResult('searchtext', this.searchInput.val());
            }
            this.closeAutocompleteMenu();
        } else if (this.searchInput.val() == '') {
            this.searchInputClearBtn.css('visibility', 'hidden');
        } else {
            this.searchInputClearBtn.css('visibility', 'visible');
        }


    };
	
	 /* To sort array by name */
    solutionFinderSearchComponent.prototype.sortByName = function(a,b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    };

    /*To handle search input focus in event*/
    solutionFinderSearchComponent.prototype.searchInputFocusIn = function(event) {
        var self = this;
        this.searchInput.parent().parent().addClass('focused');

        if (this.searchInput.val() == '') {
            var showCounter = 1000;
            if (window.innerWidth <= 576) {
                showCounter = 10;
                self.searchInput.parent().parent().addClass('mobile-view');
                window.scrollTo(0, self.searchInput.parent().offset().top - 20);
            };
            setTimeout(function() {
                if(self.fsList.length>0){
					self.showFeaturedSearchesList();
                }

            }, showCounter);

        }



    };


     /*To show featured searches list*/
    solutionFinderSearchComponent.prototype.showFeaturedSearchesList = function(event) {
        var self = this;
        this.uiAutoComplete.html('');
        $("<li class='ui-menu-item option-type'>")
            .append(Granite.I18n.get("featured-searches"))
            .appendTo(this.uiAutoComplete);
        this.uiAutoComplete.css({
            'left': self.searchInput.parent().parent().offset().left,
            'top': self.searchInput.parent().parent().offset().top + self.searchInput.parent().parent().outerHeight()
        });
        this.uiAutoComplete.width(self.searchInput.parent().parent().outerWidth() - 40);
    
    
        $.each(self.fsList, function(ind, val) {
    
            $("<li class='ui-menu-item fs'>")
                .attr("data-value", val.value)
                .attr("data-type", 'fs')
                .append("<a style='display:block; width:100%;' href=" + val.value + ">" + val.title + "</a>")
                .appendTo(self.uiAutoComplete);
        });
    
        this.uiAutoComplete.show();
    
    };

    /*To handle search input focus out event*/
    solutionFinderSearchComponent.prototype.searchInputFocusOut = function(event) {
        var self = this;
        setTimeout(function() {
            self.searchInput.parent().parent().removeClass('focused');
        }, 100);

        if (window.innerWidth<= 576) {
            setTimeout(function() {
                self.searchInput.parent().parent().removeClass('mobile-view');
            }, 200)
            window.scrollTo(0, 0);
        }

    };


    /*To combine brand and products tags data into one final list for type ahead search*/
    solutionFinderSearchComponent.prototype.combineDataSource = function() {

        var finalDataSource = [];

        for (var i = 0; i < this.brandsList.length; i++) {
            var item = this.brandsList[i];

            finalDataSource.push({
                label: item.name,
                value: item.id,
                type: 'Brand'
            })
        }
        for (var j = 0; j < this.productsList.length; j++) {

            var item = this.productsList[j];
            finalDataSource.push({
                label: item.name,
                value: item.id,
                type: 'Product'
            })
        }

        return finalDataSource;
    };

    /*To intiate autocomplete and handle all autocomplete functionalities */
    solutionFinderSearchComponent.prototype.initAutocomplete = function() {
        var self = this;
        var combinedDataSource = this.combineDataSource();

        this.searchInput.autocomplete({
            source: combinedDataSource,

            minLength: 3,

            select: function(event, ui) {
		if(!(($(event.currentTarget).hasClass('fs')) || ($(event.currentTarget).children().hasClass('fs')))){
			event.preventDefault();
                }
		self.searchInput.val(ui.item.label);
                self.goToSearchResult(undefined, ui.item.label);

            },

            position: {
                of: self.searchInput.parent().parent()
            }



        });
		
		this.uiAutoComplete=$('.ui-autocomplete');
		this.uiAutoComplete.addClass('sol-finder-search');

        $.ui.autocomplete.prototype._renderItem = function(ul, item) {


            return $("<li>")
                .attr("data-value", item.value)
                .attr("data-type", item.type)
                .append(item.label)
                .appendTo(ul);
        };


        $.ui.autocomplete.prototype._renderMenu = function(ul, items) {
            var that = this;

            $.each(items, function(index, item) {
                that._renderItemData(ul, item);
            });

            $('<li data-value="Product" class="option-type">'+Granite.I18n.get("product")+'</li>').insertBefore($(ul).find("[data-type='Product']")[0]);
            $('<li data-value="Industry" class="option-type">'+Granite.I18n.get("brand")+'</li>').insertBefore($(ul).find("[data-type='Brand']")[0]);
            self.highlightWord($(ul), self.searchInput.val())

        };

        $.ui.autocomplete.prototype._resizeMenu = function() {
            this.menu.element.outerWidth(self.searchInput.parent().parent().outerWidth());
        };


        $(document).on('touchend', function(event) {
            if (window.innerWidth <= 576) {

                if (self.uiAutoComplete.is(':visible')) {

                    var target = $(event.target);
                    if ((target.attr('id') == 'search-input') || (target.parent().hasClass('ui-autocomplete')) || (target.attr('id') == 'clean-search') || (target.parent().attr('id') == 'clean-search') || (target.attr('id') == 'cancel-search')) {

                        return true;
                    } else {

                        if (self.searchInput.is(':focus')) {
                            if (self.uiAutoComplete.find('.fs').length > 0) {
                                self.searchInput.blur();
                                self.uiAutoComplete.show();
                            } else {

                                self.searchInput.blur();
                                self.uiAutoComplete.show();

                                return false;
                            }
                        }
                    }

                } else if (self.searchInput.is(':focus')) {
                    self.searchInput.blur();
                }


            }

        });


    };

    /*To close autocomplete menu*/
    solutionFinderSearchComponent.prototype.closeAutocompleteMenu = function() {

        this.uiAutoComplete.hide();
        this.searchInput.parent().removeClass('focused');
        this.searchInput.parent().parent().removeClass('mobile-view');
    };

    /*To higlight matching text in autocomplte menu in bold characters*/
    solutionFinderSearchComponent.prototype.highlightWord = function(searchBlock, searchWord) {

        var text = searchWord;
        var searchTextElements = searchBlock.find('li');

        if (text) {
            $.each(searchTextElements, function(ind, val) {
                var pattern = new RegExp("(" + text + ")", "gi");
                var searchTxt = $(val).html();
                var seachTextCopy = searchTxt.toLowerCase();
                var text1 = searchTxt.substr(seachTextCopy.indexOf(text.toLowerCase()), text.length);
                var new_text = searchTxt.replace(pattern, "<span style='font-weight:bold;'>" + text1 + "</span>");
                $(val).html(new_text);

            });


        }
    };

   /*To pass search parameters to searchresult page*/
    solutionFinderSearchComponent.prototype.goToSearchResult = function(searchParameter, searchText, tagId) {
		var url = this.searchResultPage + '.html' ;
        if (searchText) {
             url = url +'?searchtext=' + searchText.trim();

			
        } 
        else if(tagId)
			{
				
				url=url+'?tagId='+tagId;
			}

		window.open(url,"_self");
		

    };



    let solutionFinderSearchCmpObj = new solutionFinderSearchComponent();

    /*initiate execution*/
    solutionFinderSearchCmpObj.init();


});

/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
!function(factory){"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],factory):factory("undefined"!=typeof module&&module.exports?require("jquery"):jQuery)}(function($){"use strict";function init(options){return!options||void 0!==options.allowPageScroll||void 0===options.swipe&&void 0===options.swipeStatus||(options.allowPageScroll=NONE),void 0!==options.click&&void 0===options.tap&&(options.tap=options.click),options||(options={}),options=$.extend({},$.fn.swipe.defaults,options),this.each(function(){var $this=$(this),plugin=$this.data(PLUGIN_NS);plugin||(plugin=new TouchSwipe(this,options),$this.data(PLUGIN_NS,plugin))})}function TouchSwipe(element,options){function touchStart(jqEvent){if(!(getTouchInProgress()||$(jqEvent.target).closest(options.excludedElements,$element).length>0)){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent;if(!event.pointerType||"mouse"!=event.pointerType||0!=options.fallbackToMouseEvents){var ret,touches=event.touches,evt=touches?touches[0]:event;return phase=PHASE_START,touches?fingerCount=touches.length:options.preventDefaultEvents!==!1&&jqEvent.preventDefault(),distance=0,direction=null,currentDirection=null,pinchDirection=null,duration=0,startTouchesDistance=0,endTouchesDistance=0,pinchZoom=1,pinchDistance=0,maximumsMap=createMaximumsData(),cancelMultiFingerRelease(),createFingerData(0,evt),!touches||fingerCount===options.fingers||options.fingers===ALL_FINGERS||hasPinches()?(startTime=getTimeStamp(),2==fingerCount&&(createFingerData(1,touches[1]),startTouchesDistance=endTouchesDistance=calculateTouchesDistance(fingerData[0].start,fingerData[1].start)),(options.swipeStatus||options.pinchStatus)&&(ret=triggerHandler(event,phase))):ret=!1,ret===!1?(phase=PHASE_CANCEL,triggerHandler(event,phase),ret):(options.hold&&(holdTimeout=setTimeout($.proxy(function(){$element.trigger("hold",[event.target]),options.hold&&(ret=options.hold.call($element,event,event.target))},this),options.longTapThreshold)),setTouchInProgress(!0),null)}}}function touchMove(jqEvent){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent;if(phase!==PHASE_END&&phase!==PHASE_CANCEL&&!inMultiFingerRelease()){var ret,touches=event.touches,evt=touches?touches[0]:event,currentFinger=updateFingerData(evt);if(endTime=getTimeStamp(),touches&&(fingerCount=touches.length),options.hold&&clearTimeout(holdTimeout),phase=PHASE_MOVE,2==fingerCount&&(0==startTouchesDistance?(createFingerData(1,touches[1]),startTouchesDistance=endTouchesDistance=calculateTouchesDistance(fingerData[0].start,fingerData[1].start)):(updateFingerData(touches[1]),endTouchesDistance=calculateTouchesDistance(fingerData[0].end,fingerData[1].end),pinchDirection=calculatePinchDirection(fingerData[0].end,fingerData[1].end)),pinchZoom=calculatePinchZoom(startTouchesDistance,endTouchesDistance),pinchDistance=Math.abs(startTouchesDistance-endTouchesDistance)),fingerCount===options.fingers||options.fingers===ALL_FINGERS||!touches||hasPinches()){if(direction=calculateDirection(currentFinger.start,currentFinger.end),currentDirection=calculateDirection(currentFinger.last,currentFinger.end),validateDefaultEvent(jqEvent,currentDirection),distance=calculateDistance(currentFinger.start,currentFinger.end),duration=calculateDuration(),setMaxDistance(direction,distance),ret=triggerHandler(event,phase),!options.triggerOnTouchEnd||options.triggerOnTouchLeave){var inBounds=!0;if(options.triggerOnTouchLeave){var bounds=getbounds(this);inBounds=isInBounds(currentFinger.end,bounds)}!options.triggerOnTouchEnd&&inBounds?phase=getNextPhase(PHASE_MOVE):options.triggerOnTouchLeave&&!inBounds&&(phase=getNextPhase(PHASE_END)),phase!=PHASE_CANCEL&&phase!=PHASE_END||triggerHandler(event,phase)}}else phase=PHASE_CANCEL,triggerHandler(event,phase);ret===!1&&(phase=PHASE_CANCEL,triggerHandler(event,phase))}}function touchEnd(jqEvent){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent,touches=event.touches;if(touches){if(touches.length&&!inMultiFingerRelease())return startMultiFingerRelease(event),!0;if(touches.length&&inMultiFingerRelease())return!0}return inMultiFingerRelease()&&(fingerCount=fingerCountAtRelease),endTime=getTimeStamp(),duration=calculateDuration(),didSwipeBackToCancel()||!validateSwipeDistance()?(phase=PHASE_CANCEL,triggerHandler(event,phase)):options.triggerOnTouchEnd||options.triggerOnTouchEnd===!1&&phase===PHASE_MOVE?(options.preventDefaultEvents!==!1&&jqEvent.preventDefault(),phase=PHASE_END,triggerHandler(event,phase)):!options.triggerOnTouchEnd&&hasTap()?(phase=PHASE_END,triggerHandlerForGesture(event,phase,TAP)):phase===PHASE_MOVE&&(phase=PHASE_CANCEL,triggerHandler(event,phase)),setTouchInProgress(!1),null}function touchCancel(){fingerCount=0,endTime=0,startTime=0,startTouchesDistance=0,endTouchesDistance=0,pinchZoom=1,cancelMultiFingerRelease(),setTouchInProgress(!1)}function touchLeave(jqEvent){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent;options.triggerOnTouchLeave&&(phase=getNextPhase(PHASE_END),triggerHandler(event,phase))}function removeListeners(){$element.unbind(START_EV,touchStart),$element.unbind(CANCEL_EV,touchCancel),$element.unbind(MOVE_EV,touchMove),$element.unbind(END_EV,touchEnd),LEAVE_EV&&$element.unbind(LEAVE_EV,touchLeave),setTouchInProgress(!1)}function getNextPhase(currentPhase){var nextPhase=currentPhase,validTime=validateSwipeTime(),validDistance=validateSwipeDistance(),didCancel=didSwipeBackToCancel();return!validTime||didCancel?nextPhase=PHASE_CANCEL:!validDistance||currentPhase!=PHASE_MOVE||options.triggerOnTouchEnd&&!options.triggerOnTouchLeave?!validDistance&&currentPhase==PHASE_END&&options.triggerOnTouchLeave&&(nextPhase=PHASE_CANCEL):nextPhase=PHASE_END,nextPhase}function triggerHandler(event,phase){var ret,touches=event.touches;return(didSwipe()||hasSwipes())&&(ret=triggerHandlerForGesture(event,phase,SWIPE)),(didPinch()||hasPinches())&&ret!==!1&&(ret=triggerHandlerForGesture(event,phase,PINCH)),didDoubleTap()&&ret!==!1?ret=triggerHandlerForGesture(event,phase,DOUBLE_TAP):didLongTap()&&ret!==!1?ret=triggerHandlerForGesture(event,phase,LONG_TAP):didTap()&&ret!==!1&&(ret=triggerHandlerForGesture(event,phase,TAP)),phase===PHASE_CANCEL&&touchCancel(event),phase===PHASE_END&&(touches?touches.length||touchCancel(event):touchCancel(event)),ret}function triggerHandlerForGesture(event,phase,gesture){var ret;if(gesture==SWIPE){if($element.trigger("swipeStatus",[phase,direction||null,distance||0,duration||0,fingerCount,fingerData,currentDirection]),options.swipeStatus&&(ret=options.swipeStatus.call($element,event,phase,direction||null,distance||0,duration||0,fingerCount,fingerData,currentDirection),ret===!1))return!1;if(phase==PHASE_END&&validateSwipe()){if(clearTimeout(singleTapTimeout),clearTimeout(holdTimeout),$element.trigger("swipe",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipe&&(ret=options.swipe.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection),ret===!1))return!1;switch(direction){case LEFT:$element.trigger("swipeLeft",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeLeft&&(ret=options.swipeLeft.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection));break;case RIGHT:$element.trigger("swipeRight",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeRight&&(ret=options.swipeRight.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection));break;case UP:$element.trigger("swipeUp",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeUp&&(ret=options.swipeUp.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection));break;case DOWN:$element.trigger("swipeDown",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeDown&&(ret=options.swipeDown.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection))}}}if(gesture==PINCH){if($element.trigger("pinchStatus",[phase,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData]),options.pinchStatus&&(ret=options.pinchStatus.call($element,event,phase,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData),ret===!1))return!1;if(phase==PHASE_END&&validatePinch())switch(pinchDirection){case IN:$element.trigger("pinchIn",[pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData]),options.pinchIn&&(ret=options.pinchIn.call($element,event,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData));break;case OUT:$element.trigger("pinchOut",[pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData]),options.pinchOut&&(ret=options.pinchOut.call($element,event,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData))}}return gesture==TAP?phase!==PHASE_CANCEL&&phase!==PHASE_END||(clearTimeout(singleTapTimeout),clearTimeout(holdTimeout),hasDoubleTap()&&!inDoubleTap()?(doubleTapStartTime=getTimeStamp(),singleTapTimeout=setTimeout($.proxy(function(){doubleTapStartTime=null,$element.trigger("tap",[event.target]),options.tap&&(ret=options.tap.call($element,event,event.target))},this),options.doubleTapThreshold)):(doubleTapStartTime=null,$element.trigger("tap",[event.target]),options.tap&&(ret=options.tap.call($element,event,event.target)))):gesture==DOUBLE_TAP?phase!==PHASE_CANCEL&&phase!==PHASE_END||(clearTimeout(singleTapTimeout),clearTimeout(holdTimeout),doubleTapStartTime=null,$element.trigger("doubletap",[event.target]),options.doubleTap&&(ret=options.doubleTap.call($element,event,event.target))):gesture==LONG_TAP&&(phase!==PHASE_CANCEL&&phase!==PHASE_END||(clearTimeout(singleTapTimeout),doubleTapStartTime=null,$element.trigger("longtap",[event.target]),options.longTap&&(ret=options.longTap.call($element,event,event.target)))),ret}function validateSwipeDistance(){var valid=!0;return null!==options.threshold&&(valid=distance>=options.threshold),valid}function didSwipeBackToCancel(){var cancelled=!1;return null!==options.cancelThreshold&&null!==direction&&(cancelled=getMaxDistance(direction)-distance>=options.cancelThreshold),cancelled}function validatePinchDistance(){return null!==options.pinchThreshold?pinchDistance>=options.pinchThreshold:!0}function validateSwipeTime(){var result;return result=options.maxTimeThreshold?!(duration>=options.maxTimeThreshold):!0}function validateDefaultEvent(jqEvent,direction){if(options.preventDefaultEvents!==!1)if(options.allowPageScroll===NONE)jqEvent.preventDefault();else{var auto=options.allowPageScroll===AUTO;switch(direction){case LEFT:(options.swipeLeft&&auto||!auto&&options.allowPageScroll!=HORIZONTAL)&&jqEvent.preventDefault();break;case RIGHT:(options.swipeRight&&auto||!auto&&options.allowPageScroll!=HORIZONTAL)&&jqEvent.preventDefault();break;case UP:(options.swipeUp&&auto||!auto&&options.allowPageScroll!=VERTICAL)&&jqEvent.preventDefault();break;case DOWN:(options.swipeDown&&auto||!auto&&options.allowPageScroll!=VERTICAL)&&jqEvent.preventDefault();break;case NONE:}}}function validatePinch(){var hasCorrectFingerCount=validateFingers(),hasEndPoint=validateEndPoint(),hasCorrectDistance=validatePinchDistance();return hasCorrectFingerCount&&hasEndPoint&&hasCorrectDistance}function hasPinches(){return!!(options.pinchStatus||options.pinchIn||options.pinchOut)}function didPinch(){return!(!validatePinch()||!hasPinches())}function validateSwipe(){var hasValidTime=validateSwipeTime(),hasValidDistance=validateSwipeDistance(),hasCorrectFingerCount=validateFingers(),hasEndPoint=validateEndPoint(),didCancel=didSwipeBackToCancel(),valid=!didCancel&&hasEndPoint&&hasCorrectFingerCount&&hasValidDistance&&hasValidTime;return valid}function hasSwipes(){return!!(options.swipe||options.swipeStatus||options.swipeLeft||options.swipeRight||options.swipeUp||options.swipeDown)}function didSwipe(){return!(!validateSwipe()||!hasSwipes())}function validateFingers(){return fingerCount===options.fingers||options.fingers===ALL_FINGERS||!SUPPORTS_TOUCH}function validateEndPoint(){return 0!==fingerData[0].end.x}function hasTap(){return!!options.tap}function hasDoubleTap(){return!!options.doubleTap}function hasLongTap(){return!!options.longTap}function validateDoubleTap(){if(null==doubleTapStartTime)return!1;var now=getTimeStamp();return hasDoubleTap()&&now-doubleTapStartTime<=options.doubleTapThreshold}function inDoubleTap(){return validateDoubleTap()}function validateTap(){return(1===fingerCount||!SUPPORTS_TOUCH)&&(isNaN(distance)||distance<options.threshold)}function validateLongTap(){return duration>options.longTapThreshold&&DOUBLE_TAP_THRESHOLD>distance}function didTap(){return!(!validateTap()||!hasTap())}function didDoubleTap(){return!(!validateDoubleTap()||!hasDoubleTap())}function didLongTap(){return!(!validateLongTap()||!hasLongTap())}function startMultiFingerRelease(event){previousTouchEndTime=getTimeStamp(),fingerCountAtRelease=event.touches.length+1}function cancelMultiFingerRelease(){previousTouchEndTime=0,fingerCountAtRelease=0}function inMultiFingerRelease(){var withinThreshold=!1;if(previousTouchEndTime){var diff=getTimeStamp()-previousTouchEndTime;diff<=options.fingerReleaseThreshold&&(withinThreshold=!0)}return withinThreshold}function getTouchInProgress(){return!($element.data(PLUGIN_NS+"_intouch")!==!0)}function setTouchInProgress(val){$element&&(val===!0?($element.bind(MOVE_EV,touchMove),$element.bind(END_EV,touchEnd),LEAVE_EV&&$element.bind(LEAVE_EV,touchLeave)):($element.unbind(MOVE_EV,touchMove,!1),$element.unbind(END_EV,touchEnd,!1),LEAVE_EV&&$element.unbind(LEAVE_EV,touchLeave,!1)),$element.data(PLUGIN_NS+"_intouch",val===!0))}function createFingerData(id,evt){var f={start:{x:0,y:0},last:{x:0,y:0},end:{x:0,y:0}};return f.start.x=f.last.x=f.end.x=evt.pageX||evt.clientX,f.start.y=f.last.y=f.end.y=evt.pageY||evt.clientY,fingerData[id]=f,f}function updateFingerData(evt){var id=void 0!==evt.identifier?evt.identifier:0,f=getFingerData(id);return null===f&&(f=createFingerData(id,evt)),f.last.x=f.end.x,f.last.y=f.end.y,f.end.x=evt.pageX||evt.clientX,f.end.y=evt.pageY||evt.clientY,f}function getFingerData(id){return fingerData[id]||null}function setMaxDistance(direction,distance){direction!=NONE&&(distance=Math.max(distance,getMaxDistance(direction)),maximumsMap[direction].distance=distance)}function getMaxDistance(direction){return maximumsMap[direction]?maximumsMap[direction].distance:void 0}function createMaximumsData(){var maxData={};return maxData[LEFT]=createMaximumVO(LEFT),maxData[RIGHT]=createMaximumVO(RIGHT),maxData[UP]=createMaximumVO(UP),maxData[DOWN]=createMaximumVO(DOWN),maxData}function createMaximumVO(dir){return{direction:dir,distance:0}}function calculateDuration(){return endTime-startTime}function calculateTouchesDistance(startPoint,endPoint){var diffX=Math.abs(startPoint.x-endPoint.x),diffY=Math.abs(startPoint.y-endPoint.y);return Math.round(Math.sqrt(diffX*diffX+diffY*diffY))}function calculatePinchZoom(startDistance,endDistance){var percent=endDistance/startDistance*1;return percent.toFixed(2)}function calculatePinchDirection(){return 1>pinchZoom?OUT:IN}function calculateDistance(startPoint,endPoint){return Math.round(Math.sqrt(Math.pow(endPoint.x-startPoint.x,2)+Math.pow(endPoint.y-startPoint.y,2)))}function calculateAngle(startPoint,endPoint){var x=startPoint.x-endPoint.x,y=endPoint.y-startPoint.y,r=Math.atan2(y,x),angle=Math.round(180*r/Math.PI);return 0>angle&&(angle=360-Math.abs(angle)),angle}function calculateDirection(startPoint,endPoint){if(comparePoints(startPoint,endPoint))return NONE;var angle=calculateAngle(startPoint,endPoint);return 45>=angle&&angle>=0?LEFT:360>=angle&&angle>=315?LEFT:angle>=135&&225>=angle?RIGHT:angle>45&&135>angle?DOWN:UP}function getTimeStamp(){var now=new Date;return now.getTime()}function getbounds(el){el=$(el);var offset=el.offset(),bounds={left:offset.left,right:offset.left+el.outerWidth(),top:offset.top,bottom:offset.top+el.outerHeight()};return bounds}function isInBounds(point,bounds){return point.x>bounds.left&&point.x<bounds.right&&point.y>bounds.top&&point.y<bounds.bottom}function comparePoints(pointA,pointB){return pointA.x==pointB.x&&pointA.y==pointB.y}var options=$.extend({},options),useTouchEvents=SUPPORTS_TOUCH||SUPPORTS_POINTER||!options.fallbackToMouseEvents,START_EV=useTouchEvents?SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerDown":"pointerdown":"touchstart":"mousedown",MOVE_EV=useTouchEvents?SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerMove":"pointermove":"touchmove":"mousemove",END_EV=useTouchEvents?SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerUp":"pointerup":"touchend":"mouseup",LEAVE_EV=useTouchEvents?SUPPORTS_POINTER?"mouseleave":null:"mouseleave",CANCEL_EV=SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerCancel":"pointercancel":"touchcancel",distance=0,direction=null,currentDirection=null,duration=0,startTouchesDistance=0,endTouchesDistance=0,pinchZoom=1,pinchDistance=0,pinchDirection=0,maximumsMap=null,$element=$(element),phase="start",fingerCount=0,fingerData={},startTime=0,endTime=0,previousTouchEndTime=0,fingerCountAtRelease=0,doubleTapStartTime=0,singleTapTimeout=null,holdTimeout=null;try{$element.bind(START_EV,touchStart),$element.bind(CANCEL_EV,touchCancel)}catch(e){$.error("events not supported "+START_EV+","+CANCEL_EV+" on jQuery.swipe")}this.enable=function(){return this.disable(),$element.bind(START_EV,touchStart),$element.bind(CANCEL_EV,touchCancel),$element},this.disable=function(){return removeListeners(),$element},this.destroy=function(){removeListeners(),$element.data(PLUGIN_NS,null),$element=null},this.option=function(property,value){if("object"==typeof property)options=$.extend(options,property);else if(void 0!==options[property]){if(void 0===value)return options[property];options[property]=value}else{if(!property)return options;$.error("Option "+property+" does not exist on jQuery.swipe.options")}return null}}var VERSION="1.6.18",LEFT="left",RIGHT="right",UP="up",DOWN="down",IN="in",OUT="out",NONE="none",AUTO="auto",SWIPE="swipe",PINCH="pinch",TAP="tap",DOUBLE_TAP="doubletap",LONG_TAP="longtap",HORIZONTAL="horizontal",VERTICAL="vertical",ALL_FINGERS="all",DOUBLE_TAP_THRESHOLD=10,PHASE_START="start",PHASE_MOVE="move",PHASE_END="end",PHASE_CANCEL="cancel",SUPPORTS_TOUCH="ontouchstart"in window,SUPPORTS_POINTER_IE10=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled&&!SUPPORTS_TOUCH,SUPPORTS_POINTER=(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&!SUPPORTS_TOUCH,PLUGIN_NS="TouchSwipe",defaults={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:!0,triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:".noSwipe",preventDefaultEvents:!0};$.fn.swipe=function(method){var $this=$(this),plugin=$this.data(PLUGIN_NS);if(plugin&&"string"==typeof method){if(plugin[method])return plugin[method].apply(plugin,Array.prototype.slice.call(arguments,1));$.error("Method "+method+" does not exist on jQuery.swipe")}else if(plugin&&"object"==typeof method)plugin.option.apply(plugin,arguments);else if(!(plugin||"object"!=typeof method&&method))return init.apply(this,arguments);return $this},$.fn.swipe.version=VERSION,$.fn.swipe.defaults=defaults,$.fn.swipe.phases={PHASE_START:PHASE_START,PHASE_MOVE:PHASE_MOVE,PHASE_END:PHASE_END,PHASE_CANCEL:PHASE_CANCEL},$.fn.swipe.directions={LEFT:LEFT,RIGHT:RIGHT,UP:UP,DOWN:DOWN,IN:IN,OUT:OUT},$.fn.swipe.pageScroll={NONE:NONE,HORIZONTAL:HORIZONTAL,VERTICAL:VERTICAL,AUTO:AUTO},$.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:ALL_FINGERS}});
var stopWords= ["a", "a's", "able", "about", "above", "according", "accordingly", "across", "actually", "after", "afterwards", "again", "against", "ain't", "all", "allow", "allows", "almost", "alone", "along", "already", "also", "although", "always", "am", "among", "amongst", "an", "and", "another", "any", "anybody", "anyhow", "anyone", "anything", "anyway", "anyways", "anywhere", "apart", "appear", "appreciate", "appropriate", "are", "aren't", "around", "as", "aside", "ask", "asking", "associated", "at", "available", "away", "awfully", "b", "be", "became", "because", "become", "becomes", "becoming", "been", "before", "beforehand", "behind", "being", "believe", "below", "beside", "besides", "best", "better", "between", "beyond", "both", "brief", "but", "by", "c", "c'mon", "c's", "came", "can", "can't", "cannot", "cant", "cause", "causes", "certain", "certainly", "changes", "clearly", "co", "com", "come", "comes", "concerning", "consequently", "consider", "considering", "contain", "containing", "contains", "corresponding", "could", "couldn't", "course", "currently", "d", "definitely", "described", "despite", "did", "didn't", "different", "do", "does", "doesn't", "doing", "don't", "done", "down", "downwards", "during", "e", "each", "edu", "eg", "eight", "either", "else", "elsewhere", "enough", "entirely", "especially", "et", "etc", "even", "ever", "every", "everybody", "everyone", "everything", "everywhere", "ex", "exactly", "example", "except", "f", "far", "few", "fifth", "first", "five", "followed", "following", "follows", "for", "former", "formerly", "forth", "four", "from", "further", "furthermore", "g", "get", "gets", "getting", "given", "gives", "go", "goes", "going", "gone", "got", "gotten", "greetings", "h", "had", "hadn't", "happens", "hardly", "has", "hasn't", "have", "haven't", "having", "he", "he's", "hello", "help", "hence", "her", "here", "here's", "hereafter", "hereby", "herein", "hereupon", "hers", "herself", "hi", "him", "himself", "his", "hither", "hopefully", "how", "howbeit", "however", "i", "i'd", "i'll", "i'm", "i've", "ie", "if", "ignored", "immediate", "in", "inasmuch", "inc", "indeed", "indicate", "indicated", "indicates", "inner", "insofar", "instead", "into", "inward", "is", "isn't", "it", "it'd", "it'll", "it's", "its", "itself", "j", "just", "k", "keep", "keeps", "kept", "know", "known", "knows", "l", "last", "lately", "later", "latter", "latterly", "least", "less", "lest", "let", "let's", "like", "liked", "likely", "little", "look", "looking", "looks", "ltd", "m", "mainly", "many", "may", "maybe", "me", "mean", "meanwhile", "merely", "might", "more", "moreover", "most", "mostly", "much", "must", "my", "myself", "n", "name", "namely", "nd", "near", "nearly", "necessary", "need", "needs", "neither", "never", "nevertheless", "new", "next", "nine", "no", "nobody", "non", "none", "noone", "nor", "normally", "not", "nothing", "novel", "now", "nowhere", "o", "obviously", "of", "off", "often", "oh", "ok", "okay", "old", "on", "once", "one", "ones", "only", "onto", "or", "other", "others", "otherwise", "ought", "our", "ours", "ourselves", "out", "outside", "over", "overall", "own", "p", "particular", "particularly", "per", "perhaps", "placed", "please", "plus", "possible", "presumably", "probably", "provides", "q", "que", "quite", "qv", "r", "rather", "rd", "re", "really", "reasonably", "regarding", "regardless", "regards", "relatively", "respectively", "right", "s", "said", "same", "saw", "say", "saying", "says", "second", "secondly", "see", "seeing", "seem", "seemed", "seeming", "seems", "seen", "self", "selves", "sensible", "sent", "serious", "seriously", "seven", "several", "shall", "she", "should", "shouldn't", "since", "six", "so", "some", "somebody", "somehow", "someone", "something", "sometime", "sometimes", "somewhat", "somewhere", "soon", "sorry", "specified", "specify", "specifying", "still", "sub", "such", "sup", "sure", "t", "t's", "take", "taken", "tell", "tends", "th", "than", "thank", "thanks", "thanx", "that", "that's", "thats", "the", "their", "theirs", "them", "themselves", "then", "thence", "there", "there's", "thereafter", "thereby", "therefore", "therein", "theres", "thereupon", "these", "they", "they'd", "they'll", "they're", "they've", "think", "third", "this", "thorough", "thoroughly", "those", "though", "three", "through", "throughout", "thru", "thus", "to", "together", "too", "took", "toward", "towards", "tried", "tries", "truly", "try", "trying", "twice", "two", "u", "un", "under", "unfortunately", "unless", "unlikely", "until", "unto", "up", "upon", "us", "use", "used", "useful", "uses", "using", "usually", "uucp", "v", "value", "various", "very", "via", "viz", "vs", "w", "want", "wants", "was", "wasn't", "way", "we", "we'd", "we'll", "we're", "we've", "welcome", "well", "went", "were", "weren't", "what", "what's", "whatever", "when", "whence", "whenever", "where", "where's", "whereafter", "whereas", "whereby", "wherein", "whereupon", "wherever", "whether", "which", "while", "whither", "who", "who's", "whoever", "whole", "whom", "whose", "why", "will", "willing", "wish", "with", "within", "without", "won't", "wonder", "would", "wouldn't", "x", "y", "yes", "yet", "you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves", "z", "zero", "product", "products"] ;
var stopChars= ["&", ",", "@", "#", "!", "~", "$", "`", "%", "^", "*","(", ")", "-", "_", "+", "=", "|", ">", "<", "?", "/", ".", ";", ":", "{", "}" ] ;


// Stem value

function stemmer(value) {
	// Standard suffix manipulations.
var step2list = {
  ational: 'ate',
  tional: 'tion',
  enci: 'ence',
  anci: 'ance',
  izer: 'ize',
  bli: 'ble',
  alli: 'al',
  entli: 'ent',
  eli: 'e',
  ousli: 'ous',
  ization: 'ize',
  ation: 'ate',
  ator: 'ate',
  alism: 'al',
  iveness: 'ive',
  fulness: 'ful',
  ousness: 'ous',
  aliti: 'al',
  iviti: 'ive',
  biliti: 'ble',
  logi: 'log'
}

var step3list = {
  icate: 'ic',
  ative: '',
  alize: 'al',
  iciti: 'ic',
  ical: 'ic',
  ful: '',
  ness: ''
}

// Consonant-vowel sequences.
var consonant = '[^aeiou]'
var vowel = '[aeiouy]'
var consonants = '(' + consonant + '[^aeiouy]*)'
var vowels = '(' + vowel + '[aeiou]*)'

var gt0 = new RegExp('^' + consonants + '?' + vowels + consonants)
var eq1 = new RegExp(
  '^' + consonants + '?' + vowels + consonants + vowels + '?$'
)
var gt1 = new RegExp('^' + consonants + '?(' + vowels + consonants + '){2,}')
var vowelInStem = new RegExp('^' + consonants + '?' + vowel)
var consonantLike = new RegExp('^' + consonants + vowel + '[^aeiouwxy]$')

// Exception expressions.
var sfxLl = /ll$/
var sfxE = /^(.+?)e$/
var sfxY = /^(.+?)y$/
var sfxIon = /^(.+?(s|t))(ion)$/
var sfxEdOrIng = /^(.+?)(ed|ing)$/
var sfxAtOrBlOrIz = /(at|bl|iz)$/
var sfxEED = /^(.+?)eed$/
var sfxS = /^.+?[^s]s$/
var sfxSsesOrIes = /^.+?(ss|i)es$/
var sfxMultiConsonantLike = /([^aeiouylsz])\1$/
var step2 = new RegExp( '^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$');
var step3 = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/ 
var step4 = new RegExp('^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$');
var firstCharacterWasLowerCaseY ;
var match ;

  value = String(value).toLowerCase()

  // Exit early.
  if (value.length < 3) {
    return value
  }

  // Detect initial `y`, make sure it never matches.
  if (
    value.charCodeAt(0) === 121 // Lowercase Y
  ) {
    firstCharacterWasLowerCaseY = true
    value = 'Y' + value.substr(1)
  }

  // Step 1a.
  if (sfxSsesOrIes.test(value)) {
    // Remove last two characters.
    value = value.substr(0, value.length - 2)
  } else if (sfxS.test(value)) {
    // Remove last character.
    value = value.substr(0, value.length - 1)
  }

  // Step 1b.
  if ((match = sfxEED.exec(value))) {
    if (gt0.test(match[1])) {
      // Remove last character.
      value = value.substr(0, value.length - 1)
    }
  } else if ((match = sfxEdOrIng.exec(value)) && vowelInStem.test(match[1])) {
    value = match[1]

    if (sfxAtOrBlOrIz.test(value)) {
      // Append `e`.
      value += 'e'
    } else if (sfxMultiConsonantLike.test(value)) {
      // Remove last character.
      value = value.substr(0, value.length - 1)
    } else if (consonantLike.test(value)) {
      // Append `e`.
      value += 'e'
    }
  }

  // Step 1c.
/*  if ((match = sfxY.exec(value)) && vowelInStem.test(match[1])) {
    // Remove suffixing `y` and append `i`.
    value = match[1] + 'i'
  }*/

  // Step 2.
  if ((match = step2.exec(value)) && gt0.test(match[1])) {
    value = match[1] + step2list[match[2]]
  }

  // Step 3.
  if ((match = step3.exec(value)) && gt0.test(match[1])) {
    value = match[1] + step3list[match[2]]
  }

  // Step 4.
  if ((match = step4.exec(value))) {
    if (gt1.test(match[1])) {
      value = match[1]
    }
  } else if ((match = sfxIon.exec(value)) && gt1.test(match[1])) {
    value = match[1]
  }

  // Step 5.
 /* if (
    (match = sfxE.exec(value)) &&
    (gt1.test(match[1]) ||
      (eq1.test(match[1]) && !consonantLike.test(match[1])))
  ) {
    value = match[1]
  }*/

  if (sfxLl.test(value) && gt1.test(value)) {
    value = value.substr(0, value.length - 1)
  }

  // Turn initial `Y` back to `y`.
  if (firstCharacterWasLowerCaseY) {
    value = 'y' + value.substr(1)
  }

  return value
}

$(function() {


    $(".filter-btn").on("click", function(){
    $(".filter-box").addClass("open");
  });
 /* $("#sort-by-select").on("click", function(){
    $(".sort-container").toggleClass("open");
    $("#sort-by-select").toggleClass("open");
  });*/
  $("#clean-search").on("click",function(){
      $("#search-input").val("");
  });
    if ($(".filter-body").length < 1) {
        return;
    }

    var breakpointColSm = 576;

    function isMobile() {
        return $(window).width() < breakpointColSm;
    }
    $(".filter-body").swipe({
        swipeLeft: function(event, direction, distance, duration, fingerCount) {
            if (!isMobile()) {
                return;
            }
            var left = $('.filter-nav .nav-tab > a.active').parent().next('li').position().left;
            var margin = $('.filter-nav .nav-tab > a.active').parent().next('li').css('margin-left');
            margin = margin ? parseInt(margin.replace('px', '')) : 0;
            left = left + margin;
            $('ul.nav').css({
                left: -left + 'px'
            });
            $('.filter-nav .nav-tab > a.active').parent().next('li').find('a').trigger('click');
        },
        swipeRight: function(event, direction, distance, duration, fingerCount) {
            if (!isMobile()) {
                return;
            }
            var left = $('.filter-nav .nav-tab > a.active').parent().prev('li').position().left;
            var margin = $('.filter-nav .nav-tab > a.active').parent().prev('li').css('margin-left');
            margin = margin ? parseInt(margin.replace('px', '')) : 0;
            left = left + margin;
            $('ul.nav').css({
                left: -left + 'px'
            });
            $('.filter-nav .nav-tab > a.active').parent().prev('li').find('a').trigger('click');
        }
    });

    function checkActive() {
        if (!isMobile()) {
            $('ul.nav').css({
                left: '0px'
            });
            return;
        }
        var left = $('.filter-nav .nav-tab > a.active').parent().position().left;
        var margin = $('.filter-nav .nav-tab > a.active').parent().css('margin-left');
        margin = margin ? parseInt(margin.replace('px', '')) : 0;
        left = left + margin;
        $('ul.nav').css({
            left: -left + 'px'
        });
    }
    $(window).resize(function() {
        return checkActive();
    });
    $(document).ready(function() {
        return checkActive();
    });
    $(document).on("click touchend", ".close-filter, .nav-tab>a.active>span", function() {
        $(".filter-box").toggleClass("open");
        
    })
});

$(function() {

    /*Solution finder results component*/
    var sfResultsComponent = function() {

        this.sfResultsComp = $($('.cmp-sol-finder-result')[0]);

        if (this.sfResultsComp.length > 0) {

            this.tagIDWithTitlesList = JSON.parse(sfDataObj.tagIDWithTitles);
            this.buData = JSON.parse(sfDataObj.buData);
            this.facetsList = this.buData.bufacets;
            this.propertiesList = this.buData.propsList;
            this.prodPages = (JSON.parse(sfDataObj.allPagesData)).sort(this.sortByTitle);
            this.hideFilters = sfDataObj.hideFilters;
            this.closeFilters = sfDataObj.closeFilters;
            this.comparePagePath = this.buData.comparePage;
            this.theme = this.buData.theme;
            this.showProps = this.buData.showProps;
            this.searchInput = this.sfResultsComp.find('#search-box');
            this.searchInputClearBtn = this.sfResultsComp.find('.clear-search-btn');
            this.resultsContainer = this.sfResultsComp.find('.results-container .lp-content');
            this.facetsContainer = this.sfResultsComp.find('.filter-accordion-sf');
            this.paginationContainer = this.sfResultsComp.find('.pagination-container');
            this.fromResultsCountContainer = this.sfResultsComp.find('.lower-limit');
            this.toResultsCountContainer = this.sfResultsComp.find('.upper-limit');
            this.totalResultsCountContainer = this.sfResultsComp.find('.total-results, .total-results-count');
            this.el = this.sfResultsComp.find('.outerWrapper');
            this.selectedFiltersArr = [];
            this.resultPageSize = 15;
            this.mobileModeOn = 0;
            this.compareProductsList = [];
            this.searchResultsArr = [];
            this.searchText = '';
            this.accordionSelectResult = '';
            this.comparableKeysList = [];
            this.arrowClickCount = 0;
            this.sortType = 'alphanumeric';
            this.animationStarted = 0;

            if (window.innerWidth < 1024) {
                this.mobileModeOn = 1;
            }

            sfDataObj = undefined;
           // delete sfDataObj;

        }

    };

    /*To bind events with handlers*/

    sfResultsComponent.prototype.bindEvents = function() {

        this.searchInput.keyup($.proxy(this.searchInputChangeEventHandler, this));
        this.searchInputClearBtn.on('click', $.proxy(this.clearBtnClickHandler, this));
        this.sfResultsComp.on('click', '.filter-category', $.proxy(this.facetCategoryClickHandler, this));
        this.sfResultsComp.on('click', '.filter-row', $.proxy(this.facetClickHandler, this));
        this.sfResultsComp.on('click', '.save-btn', $.proxy(this.saveFilterClickHandler, this));
        this.sfResultsComp.on('click', '.close-filter', $.proxy(this.closeFilterClickHandler, this));
        this.sfResultsComp.on('click', '.clear-btn, .clear-filter, .clear-filtrs span', $.proxy(this.clearFilterClickHandler, this));
        this.sfResultsComp.on('click', '.results-count', $.proxy(this.filterBtnClickHandler, this));
        this.sfResultsComp.on('click', '.prod-ckbox', $.proxy(this.compareCheckBoxClickHandler, this));
        this.sfResultsComp.on('click', '.cmpr-btn.enabled', $.proxy(this.compareBtnClickHandler, this));
        this.sfResultsComp.on('click', '.clear-selections span', $.proxy(this.clearSelectionsClickHandler, this));
        this.sfResultsComp.on('click', '.arrow-icons span', $.proxy(this.propsArrowIconClickHandler, this));
        this.sfResultsComp.on('click', '.rp-header .fas', $.proxy(this.sortingArrowsClickHandler, this));
        this.sfResultsComp.on('click', '.pagination-container span', $.proxy(this.paginationClickHandler, this));
        this.sfResultsComp.on('click', '.view-icons .fas', $.proxy(this.viewIconsClickHandler, this));

    };



    /*To intiate component execution*/
    sfResultsComponent.prototype.init = function() {
        if (this.sfResultsComp.length > 0) {
            var self = this;
            var searchText = this.getParam('searchtext');
            var filters = this.getParam('tagId');

            this.bindEvents();

            this.createACDataAndComparableKeysList();

            if(!this.hideFilters){
            this.prepareFacetsList(this.prodPages, this.facetsList);
            }else{
              this.sfResultsComp.find('.filters-section').hide();
			  this.sfResultsComp.find('.btns-container').hide();
              this.sfResultsComp.find('.results-section').addClass('col-12');
            }

            this.setView();
            this.setCompareElements();

            if (searchText) {

                this.searchInput.val(searchText);
                this.searchHandler(searchText);

            } else {

                this.searchHandler('');

            }


            this.initAutocomplete();

            if (filters != null && filters != undefined && filters != '') {
                var tagIDs = [];
                var self = this;

                if (filters.indexOf(';') > -1) {
                    tagIDs = filters.split(';');
                } else {
                    tagIDs[0] = filters;
                }

                $.each(tagIDs, function(i, v) {
                        if (v.trim() != '') {
                            var tagValue = v.toLowerCase();
                            var filter = self.sfResultsComp.find("[data-attr-value='" + tagValue + ";']");
                            if (!filter.hasClass('facet-disabled')) {
                                var filterCatEl = $(filter.parent().siblings('.filter-category')[0]);

                                if (filterCatEl.parent().hasClass('collapsed')) {

                                    filterCatEl.trigger('click');

                                }

                                filter.trigger('click');
                            }

                        }
                    }

                );

                if (this.mobileModeOn) {

                    this.sfResultsComp.find('.save-btn').click();
                }

            } else {

                if(!this.closeFilters){
                $(this.sfResultsComp.find('.filter-category')[0]).click();
                }
            }
        }

        if (this.comparePagePath) {

            this.scrollTrack();
        }

    };


    /*To set the view based on showProperties configuration*/
    sfResultsComponent.prototype.setView = function() {

        if (this.showProps == "true") {
            this.sfResultsComp.find('.btn-container .col-7').show();
        } else {
            this.sfResultsComp.find('#listOrder').trigger('click');
            this.sfResultsComp.find('.btn-container .col-5').addClass('col-12');

        }

    };

    /*To show or hide compare elements based on compare page path configuration*/
    sfResultsComponent.prototype.setCompareElements = function() {

        if (this.comparePagePath) {
            this.sfResultsComp.find('.lp-header').css('visibility', 'visible');
            //this.sfResultsComp.find('.cmpr-btn').show();
        } else {
            this.sfResultsComp.find('.btn-container').addClass('m-t-0');
            if (this.showProps != "true") {
                this.sfResultsComp.find('.btn-container').addClass('m-b-20');

            }
        }

    };


    /*To handle event on search input change*/
    sfResultsComponent.prototype.searchInputChangeEventHandler = function(evnt) {

        if (event.keyCode == 13) {
            if (this.searchInput.val().length > 2) {
                this.uiAutoComplete.hide();
                this.searchHandler();
            }

        }
    };

    /*To handle event on properties view icons click*/
    sfResultsComponent.prototype.viewIconsClickHandler = function(evnt) {
        var el = $(evnt.currentTarget);
        this.sfResultsComp.find('.view-icons .fas').removeClass('active');
        $(el).addClass('active');

        if ($(el).attr('id') == "blockOrder") {

            this.sfResultsComp.find('.results-container .right-panel').removeClass('hide');
            this.sfResultsComp.find('.results-container .left-panel').removeClass('grid-view');
            this.sfResultsComp.find('.arrow-icons').removeClass('disabled');
        } else {
            this.sfResultsComp.find('.results-container .right-panel').addClass('hide');
            this.sfResultsComp.find('.results-container .left-panel').addClass('grid-view');
            this.sfResultsComp.find('.arrow-icons').addClass('disabled');
        }

    };


    /*To handle event on properties sorting arrrow icons click*/
    sfResultsComponent.prototype.sortingArrowsClickHandler = function(evnt) {

        var el = $(evnt.currentTarget);
        this.colKey = $(el).parent().attr('data-col-key');
        this.sortType = $(el).parent().attr('data-key-type');

        if (el.hasClass('fa-chevron-down')) {
            this.sfResultsComp.find('.rp-header .fas').removeClass(['fa-chevron-up', 'up', 'down']).addClass('fa-chevron-down');
            el.removeClass(['fa-chevron-down', 'down']).addClass(['fa-chevron-up', 'up']);

        } else if (el.hasClass('fa-chevron-up')) {
            el.removeClass(['fa-chevron-up', 'up']).addClass('fa-chevron-down');
            this.sfResultsComp.find('.rp-header .fas').removeClass(['fa-chevron-up', 'up', 'down']).addClass('fa-chevron-down');
            el.addClass('down');

        }

        this.showResults(this.paginationArr);

    };



    /*To handle event on  left right properties arrrow icons click*/
    sfResultsComponent.prototype.propsArrowIconClickHandler = function(evnt) {
        var self = this;
        if (self.animationStarted == 0) {
            var el = $(evnt.currentTarget);
            var colWidth = $(this.sfResultsComp.find('.rp-header .col-3')[0]).outerWidth();
            var panelLeft = $(this.sfResultsComp.find('.rp-header')).position().left;
            self.animationStarted = 1;

            if (el.hasClass('fa-chevron-left')) {
                this.arrowClickCount--;
                if (this.arrowClickCount == 0) {
                    $(el).addClass('inactive');
                }
                $(this.sfResultsComp.find('.fa-chevron-right')).removeClass('inactive');
                $(this.sfResultsComp.find('.rp-header, .rp-content')).animate({
                    left: panelLeft + colWidth + "px"
                }, 200, 'linear', function() {
                    self.animationStarted = 0;
                });
            } else if (el.hasClass('fa-chevron-right')) {
                this.arrowClickCount++;
                if (this.arrowClickCount + 4 == $(this.sfResultsComp.find('.rp-header')).children().length) {
                    $(el).addClass('inactive');
                }
                $(this.sfResultsComp.find('.fa-chevron-left')).removeClass('inactive');
                $(this.sfResultsComp.find('.rp-header, .rp-content')).animate({
                    left: panelLeft - colWidth + "px"
                }, 200, 'linear', function() {
                    self.animationStarted = 0;
                });
            }
        }

    };

    /*To handle event on  clear selection link click*/
    sfResultsComponent.prototype.clearSelectionsClickHandler = function(evnt) {

        this.compareProductsList = [];
        $(this.sfResultsComp.find('.prod-ckbox.slctd-product')).removeClass('slctd-product');
        $(this.sfResultsComp.find('.cmpr-btn')).removeClass('enabled');
    };

    /*To handle event on compare button click*/
    sfResultsComponent.prototype.compareBtnClickHandler = function(evnt) {
        var self = this;
        if (this.comparePagePath) {
            var queryString = '';
            var selectedProducts = this.sfResultsComp.find('.prod-ckbox.slctd-product');
            $.each(selectedProducts, function(i, v) {
                var prodPath = $(v).parent().find('.prod-title').attr('href');
                if (prodPath) {
                    var prodPageName = (prodPath.substr(prodPath.lastIndexOf('/') + 1, prodPath.length - 1)).split('.html')[0];
                    queryString += prodPageName;
                    if (i < (selectedProducts.length - 1)) {
                        queryString += ';';
                    }
                }
            });

            window.open(this.comparePagePath + ".html?products=" + queryString, "_blank");

        }

    };

    /*To handle event on compare product checkbox click*/
    sfResultsComponent.prototype.compareCheckBoxClickHandler = function(evnt) {
        var el = $(evnt.currentTarget);
        var prodPath = $(el).parent().find('.prod-title').attr('href');
        if (prodPath) {
            var prodPageName = (prodPath.substr(prodPath.lastIndexOf('/') + 1, prodPath.length - 1)).split('.html')[0];
        }
        if ($(el).hasClass('slctd-product')) {
            $(el).removeClass('slctd-product');
            if (prodPageName) {
                var ind = this.compareProductsList.indexOf(prodPageName);
                this.compareProductsList.splice(ind, 1);
            }

        } else {
            if ($(this.sfResultsComp.find('.slctd-product')).length < 6) {
                $(el).addClass('slctd-product');
                if (prodPageName) {
                    this.compareProductsList.push(prodPageName);
                }

            }

        }

        if ($(this.sfResultsComp.find('.slctd-product')).length > 1) {
            $(this.sfResultsComp.find('.cmpr-btn')).addClass('enabled');
        } else {
            $(this.sfResultsComp.find('.cmpr-btn')).removeClass('enabled');
        }

    };


    /*To handle event on search input clear button click*/
    sfResultsComponent.prototype.clearBtnClickHandler = function(evnt) {

        if (this.searchInput.val() != '') {
            this.searchText = '';
            this.accordionSelectResult = '';
            this.searchInput.val('');
            this.clearFilterClickHandler();
            this.resetPropertiesSortIcons();
            this.showResults(this.prodPages.sort(this.sortByTitle));
            this.prepareFacetsList(this.prodPages, this.facetsList);
            $(this.sfResultsComp.find(".filter-category")[0]).click();
        }
    };


    /*To handle event on clear filter link click*/
    sfResultsComponent.prototype.clearFilterClickHandler = function(evnt) {

        this.sfResultsComp.find('.filter-checkbox').removeClass('selected');
        this.sfResultsComp.find('.filter-label').removeClass('slctd');
        this.selectedFiltersArr = [];
        var searchResults = [];

        if (this.searchText) {

            if (this.accordionSelectResult) {

                searchResults = this.accordionSelectResult;

            } else {

                //searchResults = this.findSearchResults(this.searchText.toLowerCase(), this.prodPages);
                searchResults = this.searchResultsArr;
            }


        } else {

            searchResults = this.prodPages;

        }

        this.filteredResultsArr = searchResults;
        this.showResults(searchResults);
        this.closeFilterClickHandler();


    };

    /*To handle event on close filter icon click*/
    sfResultsComponent.prototype.closeFilterClickHandler = function() {

        var self = this;

        var selectedFilterCBs = this.sfResultsComp.find('.filter-checkbox.selected');

        var tempFiltersArr = [];


        $.each(selectedFilterCBs, function(x, y) {

                var tagId = $(y).parent().attr('data-attr-value');

                tempFiltersArr.push(tagId);

                if (!self.selectedFiltersArr.includes(tagId)) {

                    $(y).removeClass('selected');
                    $(y).siblings('.filter-label').removeClass('slctd');
                }


            }

        );

        $.each(self.selectedFiltersArr, function(i, v) {

                if (!tempFiltersArr.includes(v)) {

                    self.sfResultsComp.find("[data-attr-value='" + v + "']").find('.filter-checkbox').addClass('selected');
                    self.sfResultsComp.find("[data-attr-value='" + v + "']").find('.filter-checkbox').siblings('.filter-label').addClass('slctd');
                }

            }

        );

        if (this.mobileModeOn) {

            this.sfResultsComp.find('.filters-section, .filter-bg').hide();
            this.updateFilters(this.paginationArr);

        }



    };

    /*To handle event on close filter icon click*/
    sfResultsComponent.prototype.saveFilterClickHandler = function(evnt) {

        var self = this;

        var selectedFilterCBs = this.sfResultsComp.find('.filter-checkbox.selected');

        this.selectedFiltersArr = [];

        $.each(selectedFilterCBs, function(x, y) {

                self.selectedFiltersArr.push($(y).parent().attr('data-attr-value'));
            }

        );

        var searchResults = [];

        if (this.searchText) {

            if (this.accordionSelectResult) {

                searchResults = this.accordionSelectResult;


            } else {

                //searchResults = this.findSearchResults(this.searchText.toLowerCase(), this.prodPages);
                searchResults = this.searchResultsArr;
            }


        } else {

            searchResults = this.prodPages;
        }

        if (searchResults.length > 0) {

            if (this.selectedFiltersArr.length > 0) {

                this.getFilteredResults(searchResults, this.selectedFiltersArr);

                if (this.filteredResultsArr.length < 1) {

                    this.noResultFound();
                } else {
                    this.showResults(this.filteredResultsArr);

                }
            } else {
                this.filteredResultsArr = searchResults;
                this.showResults(searchResults);
            }

        } else {

            this.noResultFound();
        }

        this.closeFilterClickHandler();

    };


    /*To handle event on filter button click*/
    sfResultsComponent.prototype.filterBtnClickHandler = function(evnt) {

        var filterEL = this.sfResultsComp.find('.filters-section');
        var filterBg = this.sfResultsComp.find('.filter-bg');

        if (filterEL.is(':visible')) {

            filterEL.hide();
            filterBg.hide();
        } else {

            filterEL.show();
            filterBg.show();
        }

    };

    /*To handle event on facet category click*/
    sfResultsComponent.prototype.facetCategoryClickHandler = function(evnt) {

        var el = $(evnt.currentTarget);

        el.parent().toggleClass('collapsed');


    };

    /*To handle event on facet click*/
    sfResultsComponent.prototype.facetClickHandler = function(evnt) {

        var el = $(evnt.currentTarget);

        if (el.find('.filter-checkbox').hasClass('selected')) {

            el.find('.filter-checkbox').removeClass('selected');
            el.find('.filter-label').removeClass('slctd');
            var itemIndex = this.selectedFiltersArr.indexOf(el.attr('data-attr-value'));

            if (!this.mobileModeOn) {
                if (itemIndex > -1) {
                    this.selectedFiltersArr.splice(itemIndex, 1);
                }
            }


        } else {

            el.find('.filter-checkbox').addClass('selected');
            el.find('.filter-label').addClass('slctd');

            if (!this.mobileModeOn) {
                this.selectedFiltersArr.push(el.attr('data-attr-value'));
            }

        }

        if (!this.mobileModeOn) {

            var searchResults = [];

            if (this.searchText) {

                if (this.accordionSelectResult) {

                    searchResults = this.accordionSelectResult;

                } else {

                    //searchResults = this.findSearchResults(this.searchText.toLowerCase(), this.prodPages);
                    searchResults = this.searchResultsArr;
                }


            } else {

                searchResults = this.prodPages;
            }

            if (searchResults.length > 0) {

                if (this.selectedFiltersArr.length > 0) {

                    this.getFilteredResults(searchResults, this.selectedFiltersArr);

                    if (this.filteredResultsArr.length < 1) {

                        this.noResultFound();
                    } else {
                        this.showResults(this.filteredResultsArr);

                    }

                } else {
                    this.filteredResultsArr = searchResults;
                    this.showResults(searchResults);
                }

            } else {

                this.noResultFound();

            }
        } else {

            var selectedFacetEls = this.sfResultsComp.find('.filter-checkbox.selected');
            var selFacetsList = [];
            var filetredList = [];
            var searchResults = [];
            if (this.accordionSelectResult) {
                searchResults = this.accordionSelectResult;
            } else {
                searchResults = this.searchResultsArr;
            }
            $.each(selectedFacetEls, function(i, v) {
                selFacetsList.push($(v).parent().attr('data-attr-value'));
            });
            for (var x = 0; x < searchResults.length; x++) {
                var tagsString = (JSON.stringify(searchResults[x].tags)).toLowerCase();
                var found = true;
                for (var y = 0; y < selFacetsList.length; y++) {
                    if (tagsString.indexOf(selFacetsList[y]) < 0) {
                        found = false;
                        break;
                    }
                }
                if (found) {
                    filetredList.push(searchResults[x]);
                }

            }
            this.updateFilters(filetredList);
        }

    };

    /*To reste property sort icons to default state*/
    sfResultsComponent.prototype.resetPropertiesSortIcons = function() {

        this.sfResultsComp.find('.rp-header .fas.down').removeClass('down');
        this.sfResultsComp.find('.rp-header .fas.up').removeClass(['up', 'fa-chevron-up']).addClass('fa-chevron-down');

    };


    /*To make first letter in capital case for all the words*/
    sfResultsComponent.prototype.toUpperCase = function(str) {
        var splitStr = str.split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }

        return splitStr.join(' ');
    };

    /*To get URL parameter value*/
    sfResultsComponent.prototype.getParam = function(param) {
        var url_string = window.location.href; //window.location.href
        var url = new URL(url_string);
        var paramVal = url.searchParams.get(param);
        paramVal = (paramVal != null && paramVal != undefined) ? paramVal : '';
        return paramVal;
    };

    /*To remove special characters from text*/
    sfResultsComponent.prototype.removeSpecialChars = function(text) {

        var text1 = text.replace(/™/g, "");
        var text2 = text1.replace(/®/g, "");
        var text3 = text2.replace(/%20/g, " ");

        return text3;

    };

    /*To sort table data based on the selected attribute in ascending order*/
    sfResultsComponent.prototype.sortResultsAsc = function(a, b) {
        var key = this.colKey;
        var propsA = JSON.parse(a.comparableProps);
        var propsB = JSON.parse(b.comparableProps);

        if (this.sortType == "numeric") {
            propsA[key] = (propsA[key] != "null" && propsA[key] != null && propsA[key] != undefined) ? propsA[key] : 0;
            propsB[key] = (propsB[key] != "null" && propsB[key] != null && propsB[key] != undefined) ? propsB[key] : 0;
            return propsA[key] - propsB[key];
        } else {
            propsA[key] = (propsA[key] != "null" && propsA[key] != null && propsA[key] != undefined) ? propsA[key] : '';
            propsB[key] = (propsB[key] != "null" && propsB[key] != null && propsB[key] != undefined) ? propsB[key] : '';
            var itemA = (propsA[key]).trim().toUpperCase(); // ignore upper and lowercase
            var itemB = (propsB[key]).trim().toUpperCase(); // ignore upper and lowercase

            if (itemA < itemB) {
                return -1;
            }

            if (itemA > itemB) {
                return 1;
            }

            return 0;
        }
    };

    /*To sort table data based on the selected attribute in descending order*/
    sfResultsComponent.prototype.sortResultsDsc = function(a, b) {
        var key = this.colKey;
        var propsA = JSON.parse(a.comparableProps);
        var propsB = JSON.parse(b.comparableProps);

        if (this.sortType == "numeric") {
            propsA[key] = (propsA[key] != "null" && propsA[key] != null && propsA[key] != undefined) ? propsA[key] : 0;
            propsB[key] = (propsB[key] != "null" && propsB[key] != null && propsB[key] != undefined) ? propsB[key] : 0;
            return propsB[key] - propsA[key];
        } else {
            propsA[key] = (propsA[key] != "null" && propsA[key] != null && propsA[key] != undefined) ? propsA[key] : '';
            propsB[key] = (propsB[key] != "null" && propsB[key] != null && propsB[key] != undefined) ? propsB[key] : '';
            var itemA = (propsA[key]).trim().toUpperCase(); // ignore upper and lowercase
            var itemB = (propsB[key]).trim().toUpperCase(); // ignore upper and lowercase

            if (itemA > itemB) {
                return -1;
            }

            if (itemA < itemB) {
                return 1;
            }

            return 0;
        }

    };



    // To sort array by title
    sfResultsComponent.prototype.sortByTitle = function(a, b) {
        var titleA = a.title.trim().toUpperCase(); // ignore upper and lowercase
        var titleB = b.title.trim().toUpperCase(); // ignore upper and lowercase

        if (titleA < titleB) {
            return -1;
        }

        if (titleA > titleB) {
            return 1;
        }

        // names must be equal
        return 0;
    };


    /*To create keywords list for type ahead search*/
    sfResultsComponent.prototype.createACDataAndComparableKeysList = function() {

        this.acDataList = [];


        for (var x = 0; x < this.prodPages.length; x++) {

            var title = $('<div></div>').html(this.prodPages[x].title.trim()).text();
            var keywords = (this.prodPages[x].keywords != "null") ? this.prodPages[x].keywords : "";
            // var description = $('<div></div>').html(this.prodPages[x].description.trim()).text();

            this.acDataList.push({
                    label: title,
                    value: title + " " + this.removeSpecialChars(title) + " " + this.prodPages[x].tags + " " + keywords,
                    quesRT: this.prodPages[x].title
                }

            )

            if ((this.propertiesList.length == 0) && (this.showProps == "true")) {

                if ((this.prodPages[x]).comparableProps) {
                    var propsObj = JSON.parse((this.prodPages[x]).comparableProps);
                    for (var key in propsObj) {

                        if (this.comparableKeysList.indexOf(key) < 0) {

                            this.comparableKeysList.push(key);
                        }
                    }
                }
            }
        }

        if ((this.propertiesList.length > 0) && (this.showProps == "true")) {

            for (var i = 0; i < this.propertiesList.length; i++) {
                if (this.comparableKeysList.indexOf(key) < 0) {
                    this.comparableKeysList.push(this.propertiesList[i].key);
                }
            }
        }

        if (this.comparableKeysList.length > 3) {
            this.sfResultsComp.find('.arrow-icons').show();
        } else {
            this.sfResultsComp.find('.arrow-icons').hide();
        }


    };



    /*To return a filtered list as a source to auto complete based on the search text*/
    sfResultsComponent.prototype.getFilteredList = function(searchText) {


        var matchingResultsArr = this.acDataList.filter(function(item) {
                return item.value.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
            }

        );


        return (matchingResultsArr).sort(this.sortByLabel);

    };



    /*To initiate and handle autocomplete search functionality */
    sfResultsComponent.prototype.initAutocomplete = function() {
        var self = this;

        this.searchInput.autocomplete({
                source: function(request, response) {
                        response(($.map(self.getFilteredList(request.term), function(el) {
                                return el;
                            }

                        )).slice(0, 500));

                    }

                    ,
                minLength: 3,
                select: function(event, ui) {

                        var label = ui.item.label;

                        event.preventDefault();

                        self.searchInput.val(label);

                        var item = [self.prodPages.filter(function(item) {
                                return item.title.toLowerCase().indexOf(ui.item.quesRT.toLowerCase()) !== -1;
                            }

                        )[0]];

                        self.searchHandler(undefined, item);
                    }

                    ,
                open: function(event, ui) {

                        if (window.innerWidth < self.mobileBreakPoint) {

                            var menuTop = self.uiAutoComplete.position().top;
                            self.uiAutoComplete.css('top', menuTop + 10);
                        }

                        self.searchInput.parent().addClass('focused');


                    }

                    ,

                position: {
                    of: self.searchInput
                }



            }

        );

        this.uiAutoComplete = $('.ui-autocomplete');
        this.uiAutoComplete.addClass('mk-prod-search');

        $.ui.autocomplete.prototype._renderItem = function(ul, item) {


            return $("<li>").attr("data-quesRT", item.quesRT).append(item.label).appendTo(ul);
        };

        $.ui.autocomplete.prototype._resizeMenu = function() {
            this.menu.element.outerWidth(self.searchInput.outerWidth());

        };

    };



    sfResultsComponent.prototype.paginationClickHandler = function() {

        if (this.currentresultCount < this.paginationArr.length) {
            var currentScrollTop = $(window).scrollTop();
            window.scrollTo(0, currentScrollTop);
            if ((this.currentresultCount + this.resultPageSize) < this.paginationArr.length) {
                this.pagination(this.paginationArr, this.currentresultCount, this.currentresultCount + this.resultPageSize);

            } else {
                this.pagination(this.paginationArr, this.currentresultCount, this.paginationArr.length);
            }


        }

    };


    sfResultsComponent.prototype.searchHandler = function(sText, sResults) {

        var searchText = sText ? sText : this.searchInput.val().trim();

        this.searchText = searchText;

        if (sResults) {

            var searchResults = sResults;
            this.accordionSelectResult = sResults;
            digitalData.pageInfo.onsiteSearchTerm = this.searchInput.val().trim();

        } else {

            var searchResults = this.findSearchResults(searchText.toLowerCase(), this.prodPages.sort(this.sortByTitle));
            this.accordionSelectResult = '';
            digitalData.pageInfo.onsiteSearchTerm = searchText;
        }
        this.resetPropertiesSortIcons();
        this.clearFilters();
        this.compareProductsList = [];
        this.showResults(searchResults);

        digitalData.pageInfo.onsiteSearchResults = searchResults.length;
        _satellite.track("Success_Search");


    };

    /*To handle pagination*/
    sfResultsComponent.prototype.pagination = function(searchResults, startResultCount, toResultCount) {

        var resultsSet = searchResults.slice(startResultCount, toResultCount);
        this.toResultsCountContainer.html(toResultCount);
        this.currentresultCount = toResultCount;
        this.totalResultsCountContainer.html(searchResults.length);

        if ((toResultCount == searchResults.length) || (searchResults.length <= this.resultPageSize)) {
            this.paginationContainer.css('visibility', 'hidden');
        } else {
            this.paginationContainer.css('visibility', 'visible');
        }

        this.renderResults(resultsSet);

    };


    sfResultsComponent.prototype.noResultFound = function() {

        this.sfResultsComp.find('.no-result-found').show();
        this.sfResultsComp.find('.results-container').hide();
        this.sfResultsComp.find('.results-count-container').hide();
        this.sfResultsComp.find('.pagination-container').hide();

    };

    sfResultsComponent.prototype.showResults = function(searchResults) {
        this.resultsContainer.html('');
        this.sfResultsComp.find('.rp-content').html('');
        this.paginationArr = searchResults;

        if (searchResults.length == 0) {

            this.noResultFound();

        } else {
            if (this.sfResultsComp.find('.rp-header .fas.down').length > 0) {

                this.paginationArr.sort($.proxy(this.sortResultsDsc, this));

            } else if (this.sfResultsComp.find('.rp-header .fas.up').length > 0) {

                this.paginationArr.sort($.proxy(this.sortResultsAsc, this));

            }


            if (searchResults.length > this.resultPageSize) {
                this.pagination(searchResults, 0, this.resultPageSize);

            } else {

                this.pagination(searchResults, 0, searchResults.length);
            }

            this.sfResultsComp.find('.no-result-found').hide();
            this.sfResultsComp.find('.results-container').show();
            this.sfResultsComp.find('.results-count-container').show();
            this.sfResultsComp.find('.pagination-container').show();

        }
        this.updateFilters(searchResults);

    };


    /*To update filters*/
    sfResultsComponent.prototype.clearFilters = function(searchResults) {

        this.sfResultsComp.find('.filter-checkbox').removeClass('selected');
        this.sfResultsComp.find('.filter-label').removeClass('slctd');
        this.sfResultsComp.find('.filter-checkbox').parent().removeClass('facet-disabled');
        this.selectedFiltersArr = [];
    };

    /*To update filters*/
    sfResultsComponent.prototype.updateFilters = function(searchResults) {

        var self = this;
        var filterEls = [];

        this.sfResultsComp.find('.filter-checkbox').parent().addClass('facet-disabled');

        for (var i = 0; i < searchResults.length; i++) {
            var tags = searchResults[i].tags;

            if (tags != undefined) {
                for (var j = 0; j < tags.length; j++) {
                    var tag = tags[j].split('/');
                    var tagName = tag[0] + '/' + tag[1];
                    var el = 'div[data-attr-value="' + tagName.toLowerCase() + '"]';

                    if ((filterEls.indexOf(el) < 0)) {
                        filterEls.push(el);
                    }

                }
            }

        }

        $(filterEls.toString()).removeClass('facet-disabled');

    }


    /*To create tokens form the search text and remove stop words and characters*/
    sfResultsComponent.prototype.tokenizeAndRemoveStopWords = function(sentence) {
        var tokens = sentence.split(' ');
        var actualTokens = [];

        $.each(tokens, function(i, v) {
                if (v.trim().length > 0) {

                    if ((stopWords.indexOf((v.trim()).toLowerCase()) < 0) && (stopChars.indexOf(v.trim()) < 0) && ((v.trim().length > 2))) {
                        //if ((stopWords.indexOf((v.trim()).toLowerCase()) < 0) && (stopChars.indexOf(v.trim()) < 0)) {
                        actualTokens.push(v.trim());
                    }
                }
            }

        );
        return actualTokens;
    };

    /*To find matching results with the search word*/
    sfResultsComponent.prototype.findSearchResults = function(searchText, prodDataList) {

        var self = this;

        this.searchResultsArr = [];

        if ((searchText).indexOf(' ') > -1) {

            var searchTokens = this.tokenizeAndRemoveStopWords(searchText);

        } else {

            var searchTokens = [searchText];
        }

        for (var i = 0; i < prodDataList.length; i++) {

            var faqText = (prodDataList[i].title + " " + prodDataList[i].description + " " + prodDataList[i].keywords + " "+ JSON.stringify(prodDataList[i].tags)).toLowerCase();

            $.each(searchTokens, function(ind, val) {

                    if (faqText.indexOf(val) > -1) {
                        self.searchResultsArr.push(prodDataList[i]);
                        return false;
                    }
                }

            );

        }

        if (searchTokens.length <= 15) {
            this.searchResultsArr = this.sortSearchResults(this.searchResultsArr, searchTokens);
        }


        return this.searchResultsArr;


    };


    /*To sort search results based on the search tokens presence*/
    sfResultsComponent.prototype.sortSearchResults = function(searchResults, tokens) {

        var combinations = (this.createWordsCombinations(tokens)).reverse();
        var sortedResultsArr = [];
        var resultsArr = [];
        var allWordsMatchArr = [];
        var searchText = this.searchInput.val().trim().toLowerCase();


        if (combinations.length > 0) {

            $.each(combinations, function(i, val) {

                for (var j = 0; j < searchResults.length; j++) {
                    var found = true;

                    for (var k = 0; k < val.length; k++) {

                        if (((searchResults[j].title.toLowerCase()).indexOf(val[k].toLowerCase()) < 0)) {
                            found = false;
                        }


                    }


                    if (!(resultsArr.includes(searchResults[j]) || allWordsMatchArr.includes(searchResults[j]))) {

                        if (found) {

                            if (((searchResults[j].title.toLowerCase()).indexOf(searchText) > -1)) {

                                allWordsMatchArr.push(searchResults[j]);

                            } else {

                                resultsArr.push(searchResults[j]);
                            }


                        }


                    }

                }

                if (i == 20) {
                    return false;
                }

            });

            for (var x = 0; x < searchResults.length; x++) {

                if (!allWordsMatchArr.includes(searchResults[x])) {

                    if (!resultsArr.includes(searchResults[x])) {
                        resultsArr.push(searchResults[x]);
                    }

                }

            }

            ;

            sortedResultsArr = allWordsMatchArr.concat(resultsArr);


        } else {

            sortedResultsArr = searchResults;
        }


        return sortedResultsArr;

    };


    /*To create token combinations*/
    sfResultsComponent.prototype.createWordsCombinations = function(tokens) {

        var result = [];

        var loop = function(start, depth, prefix) {

            for (var i = start; i >= 0; i--) {
                var next = [];

                next.push(tokens[i]);

                for (var j = 0; j < prefix.length; j++) {

                    next.push(prefix[j]);
                }

                if (depth < tokens.length - 1) loop(i - 1, depth + 1, next);
                else result.push(next);
            }
        }

        for (var i = tokens.length - 1; i >= 0; i--) {
            loop(tokens.length - 1, i, '');
        }


        return result;



    };

    /*To create facets on page*/
    sfResultsComponent.prototype.prepareFacets = function(facetsObj) {

        var facetsList = '';

        for (var key in facetsObj) {
            var filtersArr = [];
            var options = '';

            facetsList += '<li class="collapsed"><div class="filter-category"><span class="label">' + key + '</span><span class="acc-icon"></span></div><div class="filters-container">';

            for (var x = 0; x < facetsObj[key].length; x++) {

                var tagObj = $.grep(this.tagIDWithTitlesList, function(obj) {
                        return obj.id == (facetsObj[key][x]);
                    }

                )[0];

                if (tagObj) {

                    if (tagObj.name) {

                        filtersArr.push([facetsObj[key][x].toLowerCase(), tagObj.name]);
                    }
                }

            }

            ;

            filtersArr.sort(function(a, b) {
                    a = a[1].toLowerCase();
                    b = b[1].toLowerCase();
                    if (a == b) return 0;
                    return a < b ? -1 : 1;
                }

            );


            for (var j = 0; j < filtersArr.length; j++) {

                options += '<div class="filter-row" data-attr-value = ' + filtersArr[j][0] + '><div class="fas filter-checkbox"></div><div class="filter-label">' + filtersArr[j][1] + '</div></div>';

            }

            facetsList += options + '</div></li>';

        }

        facetsList = facetsList;

        this.facetsContainer.html(facetsList);


    };


    /*To replace white spaces in a string with _*/
    sfResultsComponent.prototype.replaceWhiteSpaces = function(text) {
        return text.replace(/\s/g, "_");
    };

    /*To prepare facets list from the tags available in search results */
    sfResultsComponent.prototype.prepareFacetsList = function(pagesData, facetsList) {
        var facetsListObj = {};
        var allowedFacets = ['business_unit', 'corporate_category', 'pcg', 'brands', 'industry', 'industry-segment', 'uses_and_applications', 'type', 'solutions'];
        var facetMapping = {
            'business_unit': 'Business Unit',
            'corporate_category': 'Product Lines',
            'pcg': 'Technologies And Solutions',
            'brands': 'Brands',
            'industry': 'Industries',
            'industry-segment': 'Industry Segments',
            'uses_and_applications': 'Applications',
            'type': 'Type',
            'solutions': 'Solutions',

        }

        if (facetsList != undefined && facetsList.length > 0) {
            for (var k = 0; k < facetsList.length; k++) {
                var tagName = (facetsList[k].tag.split(':')[1]).toLowerCase();

                if (!allowedFacets.includes(tagName)) {
                    allowedFacets.push(tagName);
                }

                facetMapping[tagName] = facetsList[k].label;
            }
        }



        for (var i = 0; i < pagesData.length; i++) {

            for (var j = 0; j < pagesData[i].tags.length; j++) {

                var tagVal = pagesData[i].tags[j].split('/');
                var tagType = tagVal[0].split(':')[1] != undefined ? tagVal[0].split(':')[1].toLowerCase() : '';
                var tagHead = facetMapping[tagType];

                if (allowedFacets.includes(tagType)) {

                    if (tagVal[1]) {

                        var tagVal1 = tagVal[0] + '/' + tagVal[1];

                        if (!facetsListObj.hasOwnProperty(tagHead)) {
                            facetsListObj[tagHead] = [];

                        }

                        if (facetsListObj[tagHead].indexOf(tagVal1) == -1) {

                            facetsListObj[tagHead].push(tagVal1)
                        }

                    }

                }
            }


        }

        if (facetsList != undefined && facetsList.length > 0) {
            var rearrangedObj = {};

            for (var l = 0; l < facetsList.length; l++) {
                if (facetsListObj[facetsList[l].label] != undefined && facetsListObj[facetsList[l].label].length > 0) {
                    rearrangedObj[facetsList[l].label] = facetsListObj[facetsList[l].label];
                }
            }
        } else {
            var rearrangedObj = facetsListObj;
        }


        this.prepareFacets(rearrangedObj);

    };



    /*To get filtered results*/
    sfResultsComponent.prototype.getFilteredResults = function(resultsArr, filtersArr) {

        this.filteredResultsArr = [];

        filtersArr.sort(function(a, b) {
            return b.length - a.length;
        });


        for (var j = 0; j < resultsArr.length; j++) {

            var tagFoundArr = [];
            for (var k = 0; k < resultsArr[j].tags.length; k++) {


                for (var i = 0; i < filtersArr.length; i++) {

                    var tag = (filtersArr[i]).toLowerCase();

                    if ((resultsArr[j].tags[k].toLowerCase()) == tag) {
                        if (!tagFoundArr.includes(tag)) {
                            tagFoundArr.push(tag);
                        }

                        break;

                    }

                }

            }


            if (tagFoundArr.length >= filtersArr.length) {

                if (filtersArr.length > 0) {

                    if (!this.filteredResultsArr.includes(resultsArr[j])) {

                        this.filteredResultsArr.push(resultsArr[j]);

                    }

                } else {
                    this.filteredResultsArr = [];
                }

            }


        }

        return this.filteredResultsArr.sort(this.sortByTitle);

    };


    /*To prepare results html from the pages data and render it*/
    sfResultsComponent.prototype.renderResults = function(pagesData) {

        var prodhtml = '';
        var propshtml = '';

        var self = this;

        if ((this.sfResultsComp.find('.rp-header').children().length == 0) && (this.showProps == "true")) {

            var propsHeaderHtml = '';

            if (this.propertiesList.length > 0) {

                $.each(this.propertiesList, function(x, y) {
                    propsHeaderHtml += '<div class="col-3" title="'+y.label+'" data-col-key="' + y.key + '" data-key-type="' + y.type + '"><span>' + y.label + '</span><span class="fas fa-chevron-down"></span></div>';
                });

            } else {

                $.each(this.comparableKeysList, function(x, y) {
                    propsHeaderHtml += '<div class="col-3" title="'+y.label+'" data-col-key="' + y + '" data-key-type="alphanumeric"><span>' + self.toUpperCase(y) + '</span><span class="fas fa-chevron-down"></span></div>';
                });
            }

            this.sfResultsComp.find('.rp-header').html(propsHeaderHtml);
        }

        $.each(pagesData, function(i, v) {

            var cmprClass = "";
            var propsClass = "";

            v.description = v.description != "null" ? v.description : "";

            if (self.comparePagePath) {
                cmprClass = "show-compr";
            }
            if (self.showProps == "true") {
                propsClass = "show-props";
            }

            prodhtml += '<div class="prod-item ' + cmprClass + ' ' + propsClass + '"><div class="prod-ckbox fas"></div><div class="text-wrap"><a class="prod-title" href="' + v.path + '.html">' + v.title + '</a><div class="prod-desc">' + v.description + '</div></div></div>';



            if ((v.comparableProps) && (self.showProps == "true")) {

                propshtml += '<div class="row">';
                var propsObj = JSON.parse(v.comparableProps);

                for (var k = 0; k < self.comparableKeysList.length; k++) {
                    var key = self.comparableKeysList[k];
                    if (propsObj[key] == undefined || propsObj[key] == null || propsObj[key] == "null") {
                        propsObj[key] = '-';
                    }
                    propshtml += '<div class="col-3" title="'+propsObj[key]+'"><span>' + propsObj[key] + '</span></div>';
                }
                propshtml += '</div>';
            }


        });

        this.resultsContainer.append(prodhtml);

        if (this.compareProductsList.length > 0) {
            $.each(this.sfResultsComp.find('.prod-title'), function(l, m) {
                for (var i = 0; i < self.compareProductsList.length; i++) {
                    if ($(m).attr('href').indexOf(self.compareProductsList[i] + ".html") > -1) {
                        $(m).parent().siblings('.prod-ckbox').addClass('slctd-product');
                    }
                }
            });
        }

        if (this.sfResultsComp.find('.prod-ckbox.slctd-product').length > 1) {
            this.sfResultsComp.find('.cmpr-btn').addClass('enabled');
        } else {
            this.sfResultsComp.find('.cmpr-btn').removeClass('enabled');
        }

        this.sfResultsComp.find('.rp-content').append(propshtml);


    };


    sfResultsComponent.prototype.scrollTrack = function() {

        var self = this;
        var comprBtn = $(this.sfResultsComp.find('.cmpr-btn')[0]);
        var btnRight = (window.innerWidth - this.sfResultsComp.find('.outerWrapper').width())/2 ;

        if(btnRight-120 > 1){
        comprBtn.css('right',btnRight-120);
        }

        $(window).scroll(function() {
                if (comprBtn.hasClass('enabled') && !self.mobileModeOn) {
                    self.showHideComareBtn(comprBtn);
                }

            }

        )
    };

    sfResultsComponent.prototype.showHideComareBtn = function(comprBtn) {

        var scrollTop = $(window).scrollTop();
        var sbHeight = window.innerHeight * (window.innerHeight / document.body.offsetHeight);
        var elScrollTop = this.sfResultsComp.offset().top;
        var elHeight = this.sfResultsComp.parent().height();

        if(((scrollTop)>=(elScrollTop+50-window.innerHeight)) && ((scrollTop)<=(elScrollTop+elHeight-100))){
				if (comprBtn.hasClass('hidden')) {
                    comprBtn.removeClass('hidden');
                }
        }else if (!comprBtn.hasClass('hidden')) {
                comprBtn.addClass('hidden');
            }
    };



    var sfResultsCompObj = new sfResultsComponent();

    sfResultsCompObj.init();

     $(document).on("click", ".cmp-sol-finder-result a.prod-title", function() {
        digitalData.pageInfo.onsiteSearchclickurl = $(this).attr("href");
		digitalData.pageInfo.clickedlinkname = $(this).text();
		_satellite.track("sol-finder-result-click");
    });

});

/*
Copyright (c) 2008, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.net/yui/license.txt
version: 2.6.0
*/
if(typeof YAHOO=="undefined"||!YAHOO){var YAHOO={};}YAHOO.namespace=function(){var A=arguments,E=null,C,B,D;for(C=0;C<A.length;C=C+1){D=A[C].split(".");E=YAHOO;for(B=(D[0]=="YAHOO")?1:0;B<D.length;B=B+1){E[D[B]]=E[D[B]]||{};E=E[D[B]];}}return E;};YAHOO.log=function(D,A,C){var B=YAHOO.widget.Logger;if(B&&B.log){return B.log(D,A,C);}else{return false;}};YAHOO.register=function(A,E,D){var I=YAHOO.env.modules;if(!I[A]){I[A]={versions:[],builds:[]};}var B=I[A],H=D.version,G=D.build,F=YAHOO.env.listeners;B.name=A;B.version=H;B.build=G;B.versions.push(H);B.builds.push(G);B.mainClass=E;for(var C=0;C<F.length;C=C+1){F[C](B);}if(E){E.VERSION=H;E.BUILD=G;}else{YAHOO.log("mainClass is undefined for module "+A,"warn");}};YAHOO.env=YAHOO.env||{modules:[],listeners:[]};YAHOO.env.getVersion=function(A){return YAHOO.env.modules[A]||null;};YAHOO.env.ua=function(){var C={ie:0,opera:0,gecko:0,webkit:0,mobile:null,air:0};var B=navigator.userAgent,A;if((/KHTML/).test(B)){C.webkit=1;}A=B.match(/AppleWebKit\/([^\s]*)/);if(A&&A[1]){C.webkit=parseFloat(A[1]);if(/ Mobile\//.test(B)){C.mobile="Apple";}else{A=B.match(/NokiaN[^\/]*/);if(A){C.mobile=A[0];}}A=B.match(/AdobeAIR\/([^\s]*)/);if(A){C.air=A[0];}}if(!C.webkit){A=B.match(/Opera[\s\/]([^\s]*)/);if(A&&A[1]){C.opera=parseFloat(A[1]);A=B.match(/Opera Mini[^;]*/);if(A){C.mobile=A[0];}}else{A=B.match(/MSIE\s([^;]*)/);if(A&&A[1]){C.ie=parseFloat(A[1]);}else{A=B.match(/Gecko\/([^\s]*)/);if(A){C.gecko=1;A=B.match(/rv:([^\s\)]*)/);if(A&&A[1]){C.gecko=parseFloat(A[1]);}}}}}return C;}();(function(){YAHOO.namespace("util","widget","example");if("undefined"!==typeof YAHOO_config){var B=YAHOO_config.listener,A=YAHOO.env.listeners,D=true,C;if(B){for(C=0;C<A.length;C=C+1){if(A[C]==B){D=false;break;}}if(D){A.push(B);}}}})();YAHOO.lang=YAHOO.lang||{};(function(){var A=YAHOO.lang,C=["toString","valueOf"],B={isArray:function(D){if(D){return A.isNumber(D.length)&&A.isFunction(D.splice);}return false;},isBoolean:function(D){return typeof D==="boolean";},isFunction:function(D){return typeof D==="function";},isNull:function(D){return D===null;},isNumber:function(D){return typeof D==="number"&&isFinite(D);},isObject:function(D){return(D&&(typeof D==="object"||A.isFunction(D)))||false;},isString:function(D){return typeof D==="string";},isUndefined:function(D){return typeof D==="undefined";},_IEEnumFix:(YAHOO.env.ua.ie)?function(F,E){for(var D=0;D<C.length;D=D+1){var H=C[D],G=E[H];if(A.isFunction(G)&&G!=Object.prototype[H]){F[H]=G;}}}:function(){},extend:function(H,I,G){if(!I||!H){throw new Error("extend failed, please check that "+"all dependencies are included.");}var E=function(){};E.prototype=I.prototype;H.prototype=new E();H.prototype.constructor=H;H.superclass=I.prototype;if(I.prototype.constructor==Object.prototype.constructor){I.prototype.constructor=I;}if(G){for(var D in G){if(A.hasOwnProperty(G,D)){H.prototype[D]=G[D];}}A._IEEnumFix(H.prototype,G);}},augmentObject:function(H,G){if(!G||!H){throw new Error("Absorb failed, verify dependencies.");}var D=arguments,F,I,E=D[2];if(E&&E!==true){for(F=2;F<D.length;F=F+1){H[D[F]]=G[D[F]];}}else{for(I in G){if(E||!(I in H)){H[I]=G[I];}}A._IEEnumFix(H,G);}},augmentProto:function(G,F){if(!F||!G){throw new Error("Augment failed, verify dependencies.");}var D=[G.prototype,F.prototype];for(var E=2;E<arguments.length;E=E+1){D.push(arguments[E]);}A.augmentObject.apply(this,D);},dump:function(D,I){var F,H,K=[],L="{...}",E="f(){...}",J=", ",G=" => ";if(!A.isObject(D)){return D+"";}else{if(D instanceof Date||("nodeType" in D&&"tagName" in D)){return D;}else{if(A.isFunction(D)){return E;}}}I=(A.isNumber(I))?I:3;if(A.isArray(D)){K.push("[");for(F=0,H=D.length;F<H;F=F+1){if(A.isObject(D[F])){K.push((I>0)?A.dump(D[F],I-1):L);}else{K.push(D[F]);}K.push(J);}if(K.length>1){K.pop();}K.push("]");}else{K.push("{");for(F in D){if(A.hasOwnProperty(D,F)){K.push(F+G);if(A.isObject(D[F])){K.push((I>0)?A.dump(D[F],I-1):L);}else{K.push(D[F]);}K.push(J);}}if(K.length>1){K.pop();}K.push("}");}return K.join("");},substitute:function(S,E,L){var I,H,G,O,P,R,N=[],F,J="dump",M=" ",D="{",Q="}";for(;;){I=S.lastIndexOf(D);if(I<0){break;}H=S.indexOf(Q,I);if(I+1>=H){break;}F=S.substring(I+1,H);O=F;R=null;G=O.indexOf(M);if(G>-1){R=O.substring(G+1);O=O.substring(0,G);}P=E[O];if(L){P=L(O,P,R);}if(A.isObject(P)){if(A.isArray(P)){P=A.dump(P,parseInt(R,10));}else{R=R||"";var K=R.indexOf(J);if(K>-1){R=R.substring(4);}if(P.toString===Object.prototype.toString||K>-1){P=A.dump(P,parseInt(R,10));}else{P=P.toString();}}}else{if(!A.isString(P)&&!A.isNumber(P)){P="~-"+N.length+"-~";N[N.length]=F;}}S=S.substring(0,I)+P+S.substring(H+1);}for(I=N.length-1;I>=0;I=I-1){S=S.replace(new RegExp("~-"+I+"-~"),"{"+N[I]+"}","g");}return S;},trim:function(D){try{return D.replace(/^\s+|\s+$/g,"");}catch(E){return D;}},merge:function(){var G={},E=arguments;for(var F=0,D=E.length;F<D;F=F+1){A.augmentObject(G,E[F],true);}return G;},later:function(K,E,L,G,H){K=K||0;E=E||{};var F=L,J=G,I,D;if(A.isString(L)){F=E[L];}if(!F){throw new TypeError("method undefined");}if(!A.isArray(J)){J=[G];}I=function(){F.apply(E,J);};D=(H)?setInterval(I,K):setTimeout(I,K);return{interval:H,cancel:function(){if(this.interval){clearInterval(D);}else{clearTimeout(D);}}};},isValue:function(D){return(A.isObject(D)||A.isString(D)||A.isNumber(D)||A.isBoolean(D));}};A.hasOwnProperty=(Object.prototype.hasOwnProperty)?function(D,E){return D&&D.hasOwnProperty(E);}:function(D,E){return !A.isUndefined(D[E])&&D.constructor.prototype[E]!==D[E];};B.augmentObject(A,B,true);YAHOO.util.Lang=A;A.augment=A.augmentProto;YAHOO.augment=A.augmentProto;YAHOO.extend=A.extend;})();YAHOO.register("yahoo",YAHOO,{version:"2.6.0",build:"1321"});YAHOO.util.Get=function(){var M={},L=0,R=0,E=false,N=YAHOO.env.ua,S=YAHOO.lang;var J=function(W,T,X){var U=X||window,Y=U.document,Z=Y.createElement(W);for(var V in T){if(T[V]&&YAHOO.lang.hasOwnProperty(T,V)){Z.setAttribute(V,T[V]);}}return Z;};var I=function(T,U,W){var V=W||"utf-8";return J("link",{"id":"yui__dyn_"+(R++),"type":"text/css","charset":V,"rel":"stylesheet","href":T},U);
};var P=function(T,U,W){var V=W||"utf-8";return J("script",{"id":"yui__dyn_"+(R++),"type":"text/javascript","charset":V,"src":T},U);};var A=function(T,U){return{tId:T.tId,win:T.win,data:T.data,nodes:T.nodes,msg:U,purge:function(){D(this.tId);}};};var B=function(T,W){var U=M[W],V=(S.isString(T))?U.win.document.getElementById(T):T;if(!V){Q(W,"target node not found: "+T);}return V;};var Q=function(W,V){var T=M[W];if(T.onFailure){var U=T.scope||T.win;T.onFailure.call(U,A(T,V));}};var C=function(W){var T=M[W];T.finished=true;if(T.aborted){var V="transaction "+W+" was aborted";Q(W,V);return ;}if(T.onSuccess){var U=T.scope||T.win;T.onSuccess.call(U,A(T));}};var O=function(V){var T=M[V];if(T.onTimeout){var U=T.context||T;T.onTimeout.call(U,A(T));}};var G=function(V,Z){var U=M[V];if(U.timer){U.timer.cancel();}if(U.aborted){var X="transaction "+V+" was aborted";Q(V,X);return ;}if(Z){U.url.shift();if(U.varName){U.varName.shift();}}else{U.url=(S.isString(U.url))?[U.url]:U.url;if(U.varName){U.varName=(S.isString(U.varName))?[U.varName]:U.varName;}}var c=U.win,b=c.document,a=b.getElementsByTagName("head")[0],W;if(U.url.length===0){if(U.type==="script"&&N.webkit&&N.webkit<420&&!U.finalpass&&!U.varName){var Y=P(null,U.win,U.charset);Y.innerHTML='YAHOO.util.Get._finalize("'+V+'");';U.nodes.push(Y);a.appendChild(Y);}else{C(V);}return ;}var T=U.url[0];if(!T){U.url.shift();return G(V);}if(U.timeout){U.timer=S.later(U.timeout,U,O,V);}if(U.type==="script"){W=P(T,c,U.charset);}else{W=I(T,c,U.charset);}F(U.type,W,V,T,c,U.url.length);U.nodes.push(W);if(U.insertBefore){var e=B(U.insertBefore,V);if(e){e.parentNode.insertBefore(W,e);}}else{a.appendChild(W);}if((N.webkit||N.gecko)&&U.type==="css"){G(V,T);}};var K=function(){if(E){return ;}E=true;for(var T in M){var U=M[T];if(U.autopurge&&U.finished){D(U.tId);delete M[T];}}E=false;};var D=function(a){var X=M[a];if(X){var Z=X.nodes,T=Z.length,Y=X.win.document,W=Y.getElementsByTagName("head")[0];if(X.insertBefore){var V=B(X.insertBefore,a);if(V){W=V.parentNode;}}for(var U=0;U<T;U=U+1){W.removeChild(Z[U]);}X.nodes=[];}};var H=function(U,T,V){var X="q"+(L++);V=V||{};if(L%YAHOO.util.Get.PURGE_THRESH===0){K();}M[X]=S.merge(V,{tId:X,type:U,url:T,finished:false,aborted:false,nodes:[]});var W=M[X];W.win=W.win||window;W.scope=W.scope||W.win;W.autopurge=("autopurge" in W)?W.autopurge:(U==="script")?true:false;S.later(0,W,G,X);return{tId:X};};var F=function(c,X,W,U,Y,Z,b){var a=b||G;if(N.ie){X.onreadystatechange=function(){var d=this.readyState;if("loaded"===d||"complete"===d){X.onreadystatechange=null;a(W,U);}};}else{if(N.webkit){if(c==="script"){if(N.webkit>=420){X.addEventListener("load",function(){a(W,U);});}else{var T=M[W];if(T.varName){var V=YAHOO.util.Get.POLL_FREQ;T.maxattempts=YAHOO.util.Get.TIMEOUT/V;T.attempts=0;T._cache=T.varName[0].split(".");T.timer=S.later(V,T,function(j){var f=this._cache,e=f.length,d=this.win,g;for(g=0;g<e;g=g+1){d=d[f[g]];if(!d){this.attempts++;if(this.attempts++>this.maxattempts){var h="Over retry limit, giving up";T.timer.cancel();Q(W,h);}else{}return ;}}T.timer.cancel();a(W,U);},null,true);}else{S.later(YAHOO.util.Get.POLL_FREQ,null,a,[W,U]);}}}}else{X.onload=function(){a(W,U);};}}};return{POLL_FREQ:10,PURGE_THRESH:20,TIMEOUT:2000,_finalize:function(T){S.later(0,null,C,T);},abort:function(U){var V=(S.isString(U))?U:U.tId;var T=M[V];if(T){T.aborted=true;}},script:function(T,U){return H("script",T,U);},css:function(T,U){return H("css",T,U);}};}();YAHOO.register("get",YAHOO.util.Get,{version:"2.6.0",build:"1321"});(function(){var Y=YAHOO,util=Y.util,lang=Y.lang,env=Y.env,PROV="_provides",SUPER="_supersedes",REQ="expanded",AFTER="_after";var YUI={dupsAllowed:{"yahoo":true,"get":true},info:{"root":"2.6.0/build/","base":"http://yui.yahooapis.com/2.6.0/build/","comboBase":"http://yui.yahooapis.com/combo?","skin":{"defaultSkin":"sam","base":"assets/skins/","path":"skin.css","after":["reset","fonts","grids","base"],"rollup":3},dupsAllowed:["yahoo","get"],"moduleInfo":{"animation":{"type":"js","path":"animation/animation-min.js","requires":["dom","event"]},"autocomplete":{"type":"js","path":"autocomplete/autocomplete-min.js","requires":["dom","event","datasource"],"optional":["connection","animation"],"skinnable":true},"base":{"type":"css","path":"base/base-min.css","after":["reset","fonts","grids"]},"button":{"type":"js","path":"button/button-min.js","requires":["element"],"optional":["menu"],"skinnable":true},"calendar":{"type":"js","path":"calendar/calendar-min.js","requires":["event","dom"],"skinnable":true},"carousel":{"type":"js","path":"carousel/carousel-beta-min.js","requires":["element"],"optional":["animation"],"skinnable":true},"charts":{"type":"js","path":"charts/charts-experimental-min.js","requires":["element","json","datasource"]},"colorpicker":{"type":"js","path":"colorpicker/colorpicker-min.js","requires":["slider","element"],"optional":["animation"],"skinnable":true},"connection":{"type":"js","path":"connection/connection-min.js","requires":["event"]},"container":{"type":"js","path":"container/container-min.js","requires":["dom","event"],"optional":["dragdrop","animation","connection"],"supersedes":["containercore"],"skinnable":true},"containercore":{"type":"js","path":"container/container_core-min.js","requires":["dom","event"],"pkg":"container"},"cookie":{"type":"js","path":"cookie/cookie-min.js","requires":["yahoo"]},"datasource":{"type":"js","path":"datasource/datasource-min.js","requires":["event"],"optional":["connection"]},"datatable":{"type":"js","path":"datatable/datatable-min.js","requires":["element","datasource"],"optional":["calendar","dragdrop","paginator"],"skinnable":true},"dom":{"type":"js","path":"dom/dom-min.js","requires":["yahoo"]},"dragdrop":{"type":"js","path":"dragdrop/dragdrop-min.js","requires":["dom","event"]},"editor":{"type":"js","path":"editor/editor-min.js","requires":["menu","element","button"],"optional":["animation","dragdrop"],"supersedes":["simpleeditor"],"skinnable":true},"element":{"type":"js","path":"element/element-beta-min.js","requires":["dom","event"]},"event":{"type":"js","path":"event/event-min.js","requires":["yahoo"]},"fonts":{"type":"css","path":"fonts/fonts-min.css"},"get":{"type":"js","path":"get/get-min.js","requires":["yahoo"]},"grids":{"type":"css","path":"grids/grids-min.css","requires":["fonts"],"optional":["reset"]},"history":{"type":"js","path":"history/history-min.js","requires":["event"]},"imagecropper":{"type":"js","path":"imagecropper/imagecropper-beta-min.js","requires":["dom","event","dragdrop","element","resize"],"skinnable":true},"imageloader":{"type":"js","path":"imageloader/imageloader-min.js","requires":["event","dom"]},"json":{"type":"js","path":"json/json-min.js","requires":["yahoo"]},"layout":{"type":"js","path":"layout/layout-min.js","requires":["dom","event","element"],"optional":["animation","dragdrop","resize","selector"],"skinnable":true},"logger":{"type":"js","path":"logger/logger-min.js","requires":["event","dom"],"optional":["dragdrop"],"skinnable":true},"menu":{"type":"js","path":"menu/menu-min.js","requires":["containercore"],"skinnable":true},"paginator":{"type":"js","path":"paginator/paginator-min.js","requires":["element"],"skinnable":true},"profiler":{"type":"js","path":"profiler/profiler-min.js","requires":["yahoo"]},"profilerviewer":{"type":"js","path":"profilerviewer/profilerviewer-beta-min.js","requires":["profiler","yuiloader","element"],"skinnable":true},"reset":{"type":"css","path":"reset/reset-min.css"},"reset-fonts-grids":{"type":"css","path":"reset-fonts-grids/reset-fonts-grids.css","supersedes":["reset","fonts","grids","reset-fonts"],"rollup":4},"reset-fonts":{"type":"css","path":"reset-fonts/reset-fonts.css","supersedes":["reset","fonts"],"rollup":2},"resize":{"type":"js","path":"resize/resize-min.js","requires":["dom","event","dragdrop","element"],"optional":["animation"],"skinnable":true},"selector":{"type":"js","path":"selector/selector-beta-min.js","requires":["yahoo","dom"]},"simpleeditor":{"type":"js","path":"editor/simpleeditor-min.js","requires":["element"],"optional":["containercore","menu","button","animation","dragdrop"],"skinnable":true,"pkg":"editor"},"slider":{"type":"js","path":"slider/slider-min.js","requires":["dragdrop"],"optional":["animation"],"skinnable":true},"tabview":{"type":"js","path":"tabview/tabview-min.js","requires":["element"],"optional":["connection"],"skinnable":true},"treeview":{"type":"js","path":"treeview/treeview-min.js","requires":["event","dom"],"skinnable":true},"uploader":{"type":"js","path":"uploader/uploader-experimental.js","requires":["element"]},"utilities":{"type":"js","path":"utilities/utilities.js","supersedes":["yahoo","event","dragdrop","animation","dom","connection","element","yahoo-dom-event","get","yuiloader","yuiloader-dom-event"],"rollup":8},"yahoo":{"type":"js","path":"yahoo/yahoo-min.js"},"yahoo-dom-event":{"type":"js","path":"yahoo-dom-event/yahoo-dom-event.js","supersedes":["yahoo","event","dom"],"rollup":3},"yuiloader":{"type":"js","path":"yuiloader/yuiloader-min.js","supersedes":["yahoo","get"]},"yuiloader-dom-event":{"type":"js","path":"yuiloader-dom-event/yuiloader-dom-event.js","supersedes":["yahoo","dom","event","get","yuiloader","yahoo-dom-event"],"rollup":5},"yuitest":{"type":"js","path":"yuitest/yuitest-min.js","requires":["logger"],"skinnable":true}}},ObjectUtil:{appendArray:function(o,a){if(a){for(var i=0;
i<a.length;i=i+1){o[a[i]]=true;}}},keys:function(o,ordered){var a=[],i;for(i in o){if(lang.hasOwnProperty(o,i)){a.push(i);}}return a;}},ArrayUtil:{appendArray:function(a1,a2){Array.prototype.push.apply(a1,a2);},indexOf:function(a,val){for(var i=0;i<a.length;i=i+1){if(a[i]===val){return i;}}return -1;},toObject:function(a){var o={};for(var i=0;i<a.length;i=i+1){o[a[i]]=true;}return o;},uniq:function(a){return YUI.ObjectUtil.keys(YUI.ArrayUtil.toObject(a));}}};YAHOO.util.YUILoader=function(o){this._internalCallback=null;this._useYahooListener=false;this.onSuccess=null;this.onFailure=Y.log;this.onProgress=null;this.onTimeout=null;this.scope=this;this.data=null;this.insertBefore=null;this.charset=null;this.varName=null;this.base=YUI.info.base;this.comboBase=YUI.info.comboBase;this.combine=false;this.root=YUI.info.root;this.timeout=0;this.ignore=null;this.force=null;this.allowRollup=true;this.filter=null;this.required={};this.moduleInfo=lang.merge(YUI.info.moduleInfo);this.rollups=null;this.loadOptional=false;this.sorted=[];this.loaded={};this.dirty=true;this.inserted={};var self=this;env.listeners.push(function(m){if(self._useYahooListener){self.loadNext(m.name);}});this.skin=lang.merge(YUI.info.skin);this._config(o);};Y.util.YUILoader.prototype={FILTERS:{RAW:{"searchExp":"-min\\.js","replaceStr":".js"},DEBUG:{"searchExp":"-min\\.js","replaceStr":"-debug.js"}},SKIN_PREFIX:"skin-",_config:function(o){if(o){for(var i in o){if(lang.hasOwnProperty(o,i)){if(i=="require"){this.require(o[i]);}else{this[i]=o[i];}}}}var f=this.filter;if(lang.isString(f)){f=f.toUpperCase();if(f==="DEBUG"){this.require("logger");}if(!Y.widget.LogWriter){Y.widget.LogWriter=function(){return Y;};}this.filter=this.FILTERS[f];}},addModule:function(o){if(!o||!o.name||!o.type||(!o.path&&!o.fullpath)){return false;}o.ext=("ext" in o)?o.ext:true;o.requires=o.requires||[];this.moduleInfo[o.name]=o;this.dirty=true;return true;},require:function(what){var a=(typeof what==="string")?arguments:what;this.dirty=true;YUI.ObjectUtil.appendArray(this.required,a);},_addSkin:function(skin,mod){var name=this.formatSkin(skin),info=this.moduleInfo,sinf=this.skin,ext=info[mod]&&info[mod].ext;if(!info[name]){this.addModule({"name":name,"type":"css","path":sinf.base+skin+"/"+sinf.path,"after":sinf.after,"rollup":sinf.rollup,"ext":ext});}if(mod){name=this.formatSkin(skin,mod);if(!info[name]){var mdef=info[mod],pkg=mdef.pkg||mod;this.addModule({"name":name,"type":"css","after":sinf.after,"path":pkg+"/"+sinf.base+skin+"/"+mod+".css","ext":ext});}}return name;},getRequires:function(mod){if(!mod){return[];}if(!this.dirty&&mod.expanded){return mod.expanded;}mod.requires=mod.requires||[];var i,d=[],r=mod.requires,o=mod.optional,info=this.moduleInfo,m;for(i=0;i<r.length;i=i+1){d.push(r[i]);m=info[r[i]];YUI.ArrayUtil.appendArray(d,this.getRequires(m));}if(o&&this.loadOptional){for(i=0;i<o.length;i=i+1){d.push(o[i]);YUI.ArrayUtil.appendArray(d,this.getRequires(info[o[i]]));}}mod.expanded=YUI.ArrayUtil.uniq(d);return mod.expanded;},getProvides:function(name,notMe){var addMe=!(notMe),ckey=(addMe)?PROV:SUPER,m=this.moduleInfo[name],o={};if(!m){return o;}if(m[ckey]){return m[ckey];}var s=m.supersedes,done={},me=this;var add=function(mm){if(!done[mm]){done[mm]=true;lang.augmentObject(o,me.getProvides(mm));}};if(s){for(var i=0;i<s.length;i=i+1){add(s[i]);}}m[SUPER]=o;m[PROV]=lang.merge(o);m[PROV][name]=true;return m[ckey];},calculate:function(o){if(o||this.dirty){this._config(o);this._setup();this._explode();if(this.allowRollup){this._rollup();}this._reduce();this._sort();this.dirty=false;}},_setup:function(){var info=this.moduleInfo,name,i,j;for(name in info){if(lang.hasOwnProperty(info,name)){var m=info[name];if(m&&m.skinnable){var o=this.skin.overrides,smod;if(o&&o[name]){for(i=0;i<o[name].length;i=i+1){smod=this._addSkin(o[name][i],name);}}else{smod=this._addSkin(this.skin.defaultSkin,name);}m.requires.push(smod);}}}var l=lang.merge(this.inserted);if(!this._sandbox){l=lang.merge(l,env.modules);}if(this.ignore){YUI.ObjectUtil.appendArray(l,this.ignore);}if(this.force){for(i=0;i<this.force.length;i=i+1){if(this.force[i] in l){delete l[this.force[i]];}}}for(j in l){if(lang.hasOwnProperty(l,j)){lang.augmentObject(l,this.getProvides(j));}}this.loaded=l;},_explode:function(){var r=this.required,i,mod;for(i in r){if(lang.hasOwnProperty(r,i)){mod=this.moduleInfo[i];if(mod){var req=this.getRequires(mod);if(req){YUI.ObjectUtil.appendArray(r,req);}}}}},_skin:function(){},formatSkin:function(skin,mod){var s=this.SKIN_PREFIX+skin;if(mod){s=s+"-"+mod;}return s;},parseSkin:function(mod){if(mod.indexOf(this.SKIN_PREFIX)===0){var a=mod.split("-");return{skin:a[1],module:a[2]};}return null;},_rollup:function(){var i,j,m,s,rollups={},r=this.required,roll,info=this.moduleInfo;if(this.dirty||!this.rollups){for(i in info){if(lang.hasOwnProperty(info,i)){m=info[i];if(m&&m.rollup){rollups[i]=m;}}}this.rollups=rollups;}for(;;){var rolled=false;for(i in rollups){if(!r[i]&&!this.loaded[i]){m=info[i];s=m.supersedes;roll=false;if(!m.rollup){continue;}var skin=(m.ext)?false:this.parseSkin(i),c=0;if(skin){for(j in r){if(lang.hasOwnProperty(r,j)){if(i!==j&&this.parseSkin(j)){c++;roll=(c>=m.rollup);if(roll){break;}}}}}else{for(j=0;j<s.length;j=j+1){if(this.loaded[s[j]]&&(!YUI.dupsAllowed[s[j]])){roll=false;break;}else{if(r[s[j]]){c++;roll=(c>=m.rollup);if(roll){break;}}}}}if(roll){r[i]=true;rolled=true;this.getRequires(m);}}}if(!rolled){break;}}},_reduce:function(){var i,j,s,m,r=this.required;for(i in r){if(i in this.loaded){delete r[i];}else{var skinDef=this.parseSkin(i);if(skinDef){if(!skinDef.module){var skin_pre=this.SKIN_PREFIX+skinDef.skin;for(j in r){if(lang.hasOwnProperty(r,j)){m=this.moduleInfo[j];var ext=m&&m.ext;if(!ext&&j!==i&&j.indexOf(skin_pre)>-1){delete r[j];}}}}}else{m=this.moduleInfo[i];s=m&&m.supersedes;if(s){for(j=0;j<s.length;j=j+1){if(s[j] in r){delete r[s[j]];}}}}}}},_onFailure:function(msg){YAHOO.log("Failure","info","loader");var f=this.onFailure;if(f){f.call(this.scope,{msg:"failure: "+msg,data:this.data,success:false});
}},_onTimeout:function(){YAHOO.log("Timeout","info","loader");var f=this.onTimeout;if(f){f.call(this.scope,{msg:"timeout",data:this.data,success:false});}},_sort:function(){var s=[],info=this.moduleInfo,loaded=this.loaded,checkOptional=!this.loadOptional,me=this;var requires=function(aa,bb){var mm=info[aa];if(loaded[bb]||!mm){return false;}var ii,rr=mm.expanded,after=mm.after,other=info[bb],optional=mm.optional;if(rr&&YUI.ArrayUtil.indexOf(rr,bb)>-1){return true;}if(after&&YUI.ArrayUtil.indexOf(after,bb)>-1){return true;}if(checkOptional&&optional&&YUI.ArrayUtil.indexOf(optional,bb)>-1){return true;}var ss=info[bb]&&info[bb].supersedes;if(ss){for(ii=0;ii<ss.length;ii=ii+1){if(requires(aa,ss[ii])){return true;}}}if(mm.ext&&mm.type=="css"&&!other.ext&&other.type=="css"){return true;}return false;};for(var i in this.required){if(lang.hasOwnProperty(this.required,i)){s.push(i);}}var p=0;for(;;){var l=s.length,a,b,j,k,moved=false;for(j=p;j<l;j=j+1){a=s[j];for(k=j+1;k<l;k=k+1){if(requires(a,s[k])){b=s.splice(k,1);s.splice(j,0,b[0]);moved=true;break;}}if(moved){break;}else{p=p+1;}}if(!moved){break;}}this.sorted=s;},toString:function(){var o={type:"YUILoader",base:this.base,filter:this.filter,required:this.required,loaded:this.loaded,inserted:this.inserted};lang.dump(o,1);},_combine:function(){this._combining=[];var self=this,s=this.sorted,len=s.length,js=this.comboBase,css=this.comboBase,target,startLen=js.length,i,m,type=this.loadType;YAHOO.log("type "+type);for(i=0;i<len;i=i+1){m=this.moduleInfo[s[i]];if(m&&!m.ext&&(!type||type===m.type)){target=this.root+m.path;target+="&";if(m.type=="js"){js+=target;}else{css+=target;}this._combining.push(s[i]);}}if(this._combining.length){YAHOO.log("Attempting to combine: "+this._combining,"info","loader");var callback=function(o){var c=this._combining,len=c.length,i,m;for(i=0;i<len;i=i+1){this.inserted[c[i]]=true;}this.loadNext(o.data);},loadScript=function(){if(js.length>startLen){YAHOO.util.Get.script(self._filter(js),{data:self._loading,onSuccess:callback,onFailure:self._onFailure,onTimeout:self._onTimeout,insertBefore:self.insertBefore,charset:self.charset,timeout:self.timeout,scope:self});}};if(css.length>startLen){YAHOO.util.Get.css(this._filter(css),{data:this._loading,onSuccess:loadScript,onFailure:this._onFailure,onTimeout:this._onTimeout,insertBefore:this.insertBefore,charset:this.charset,timeout:this.timeout,scope:self});}else{loadScript();}return ;}else{this.loadNext(this._loading);}},insert:function(o,type){this.calculate(o);this._loading=true;this.loadType=type;if(this.combine){return this._combine();}if(!type){var self=this;this._internalCallback=function(){self._internalCallback=null;self.insert(null,"js");};this.insert(null,"css");return ;}this.loadNext();},sandbox:function(o,type){this._config(o);if(!this.onSuccess){throw new Error("You must supply an onSuccess handler for your sandbox");}this._sandbox=true;var self=this;if(!type||type!=="js"){this._internalCallback=function(){self._internalCallback=null;self.sandbox(null,"js");};this.insert(null,"css");return ;}if(!util.Connect){var ld=new YAHOO.util.YUILoader();ld.insert({base:this.base,filter:this.filter,require:"connection",insertBefore:this.insertBefore,charset:this.charset,onSuccess:function(){this.sandbox(null,"js");},scope:this},"js");return ;}this._scriptText=[];this._loadCount=0;this._stopCount=this.sorted.length;this._xhr=[];this.calculate();var s=this.sorted,l=s.length,i,m,url;for(i=0;i<l;i=i+1){m=this.moduleInfo[s[i]];if(!m){this._onFailure("undefined module "+m);for(var j=0;j<this._xhr.length;j=j+1){this._xhr[j].abort();}return ;}if(m.type!=="js"){this._loadCount++;continue;}url=m.fullpath;url=(url)?this._filter(url):this._url(m.path);var xhrData={success:function(o){var idx=o.argument[0],name=o.argument[2];this._scriptText[idx]=o.responseText;if(this.onProgress){this.onProgress.call(this.scope,{name:name,scriptText:o.responseText,xhrResponse:o,data:this.data});}this._loadCount++;if(this._loadCount>=this._stopCount){var v=this.varName||"YAHOO";var t="(function() {\n";var b="\nreturn "+v+";\n})();";var ref=eval(t+this._scriptText.join("\n")+b);this._pushEvents(ref);if(ref){this.onSuccess.call(this.scope,{reference:ref,data:this.data});}else{this._onFailure.call(this.varName+" reference failure");}}},failure:function(o){this.onFailure.call(this.scope,{msg:"XHR failure",xhrResponse:o,data:this.data});},scope:this,argument:[i,url,s[i]]};this._xhr.push(util.Connect.asyncRequest("GET",url,xhrData));}},loadNext:function(mname){if(!this._loading){return ;}if(mname){if(mname!==this._loading){return ;}this.inserted[mname]=true;if(this.onProgress){this.onProgress.call(this.scope,{name:mname,data:this.data});}}var s=this.sorted,len=s.length,i,m;for(i=0;i<len;i=i+1){if(s[i] in this.inserted){continue;}if(s[i]===this._loading){return ;}m=this.moduleInfo[s[i]];if(!m){this.onFailure.call(this.scope,{msg:"undefined module "+m,data:this.data});return ;}if(!this.loadType||this.loadType===m.type){this._loading=s[i];var fn=(m.type==="css")?util.Get.css:util.Get.script,url=m.fullpath,self=this,c=function(o){self.loadNext(o.data);};url=(url)?this._filter(url):this._url(m.path);if(env.ua.webkit&&env.ua.webkit<420&&m.type==="js"&&!m.varName){c=null;this._useYahooListener=true;}fn(url,{data:s[i],onSuccess:c,onFailure:this._onFailure,onTimeout:this._onTimeout,insertBefore:this.insertBefore,charset:this.charset,timeout:this.timeout,varName:m.varName,scope:self});return ;}}this._loading=null;if(this._internalCallback){var f=this._internalCallback;this._internalCallback=null;f.call(this);}else{if(this.onSuccess){this._pushEvents();this.onSuccess.call(this.scope,{data:this.data});}}},_pushEvents:function(ref){var r=ref||YAHOO;if(r.util&&r.util.Event){r.util.Event._load();}},_filter:function(str){var f=this.filter;return(f)?str.replace(new RegExp(f.searchExp),f.replaceStr):str;},_url:function(path){var u=this.base||"",f=this.filter;u=u+path;return this._filter(u);}};})();(function(){var B=YAHOO.util,F=YAHOO.lang,L,J,K={},G={},N=window.document;YAHOO.env._id_counter=YAHOO.env._id_counter||0;var C=YAHOO.env.ua.opera,M=YAHOO.env.ua.webkit,A=YAHOO.env.ua.gecko,H=YAHOO.env.ua.ie;var E={HYPHEN:/(-[a-z])/i,ROOT_TAG:/^body|html$/i,OP_SCROLL:/^(?:inline|table-row)$/i};var O=function(Q){if(!E.HYPHEN.test(Q)){return Q;}if(K[Q]){return K[Q];}var R=Q;while(E.HYPHEN.exec(R)){R=R.replace(RegExp.$1,RegExp.$1.substr(1).toUpperCase());}K[Q]=R;return R;};var P=function(R){var Q=G[R];if(!Q){Q=new RegExp("(?:^|\\s+)"+R+"(?:\\s+|$)");G[R]=Q;}return Q;};if(N.defaultView&&N.defaultView.getComputedStyle){L=function(Q,T){var S=null;if(T=="float"){T="cssFloat";}var R=Q.ownerDocument.defaultView.getComputedStyle(Q,"");if(R){S=R[O(T)];}return Q.style[T]||S;};}else{if(N.documentElement.currentStyle&&H){L=function(Q,S){switch(O(S)){case"opacity":var U=100;try{U=Q.filters["DXImageTransform.Microsoft.Alpha"].opacity;}catch(T){try{U=Q.filters("alpha").opacity;}catch(T){}}return U/100;case"float":S="styleFloat";default:var R=Q.currentStyle?Q.currentStyle[S]:null;return(Q.style[S]||R);}};}else{L=function(Q,R){return Q.style[R];};}}if(H){J=function(Q,R,S){switch(R){case"opacity":if(F.isString(Q.style.filter)){Q.style.filter="alpha(opacity="+S*100+")";if(!Q.currentStyle||!Q.currentStyle.hasLayout){Q.style.zoom=1;}}break;case"float":R="styleFloat";default:Q.style[R]=S;}};}else{J=function(Q,R,S){if(R=="float"){R="cssFloat";}Q.style[R]=S;};}var D=function(Q,R){return Q&&Q.nodeType==1&&(!R||R(Q));};YAHOO.util.Dom={get:function(S){if(S){if(S.nodeType||S.item){return S;}if(typeof S==="string"){return N.getElementById(S);}if("length" in S){var T=[];for(var R=0,Q=S.length;R<Q;++R){T[T.length]=B.Dom.get(S[R]);}return T;}return S;}return null;},getStyle:function(Q,S){S=O(S);var R=function(T){return L(T,S);};return B.Dom.batch(Q,R,B.Dom,true);},setStyle:function(Q,S,T){S=O(S);var R=function(U){J(U,S,T);};B.Dom.batch(Q,R,B.Dom,true);},getXY:function(Q){var R=function(S){if((S.parentNode===null||S.offsetParent===null||this.getStyle(S,"display")=="none")&&S!=S.ownerDocument.body){return false;}return I(S);};return B.Dom.batch(Q,R,B.Dom,true);},getX:function(Q){var R=function(S){return B.Dom.getXY(S)[0];};return B.Dom.batch(Q,R,B.Dom,true);},getY:function(Q){var R=function(S){return B.Dom.getXY(S)[1];};return B.Dom.batch(Q,R,B.Dom,true);},setXY:function(Q,T,S){var R=function(W){var V=this.getStyle(W,"position");if(V=="static"){this.setStyle(W,"position","relative");V="relative";}var Y=this.getXY(W);if(Y===false){return false;}var X=[parseInt(this.getStyle(W,"left"),10),parseInt(this.getStyle(W,"top"),10)];if(isNaN(X[0])){X[0]=(V=="relative")?0:W.offsetLeft;}if(isNaN(X[1])){X[1]=(V=="relative")?0:W.offsetTop;}if(T[0]!==null){W.style.left=T[0]-Y[0]+X[0]+"px";}if(T[1]!==null){W.style.top=T[1]-Y[1]+X[1]+"px";}if(!S){var U=this.getXY(W);if((T[0]!==null&&U[0]!=T[0])||(T[1]!==null&&U[1]!=T[1])){this.setXY(W,T,true);}}};B.Dom.batch(Q,R,B.Dom,true);},setX:function(R,Q){B.Dom.setXY(R,[Q,null]);},setY:function(Q,R){B.Dom.setXY(Q,[null,R]);},getRegion:function(Q){var R=function(S){if((S.parentNode===null||S.offsetParent===null||this.getStyle(S,"display")=="none")&&S!=S.ownerDocument.body){return false;}var T=B.Region.getRegion(S);return T;};return B.Dom.batch(Q,R,B.Dom,true);},getClientWidth:function(){return B.Dom.getViewportWidth();},getClientHeight:function(){return B.Dom.getViewportHeight();},getElementsByClassName:function(U,Y,V,W){U=F.trim(U);Y=Y||"*";V=(V)?B.Dom.get(V):null||N;if(!V){return[];}var R=[],Q=V.getElementsByTagName(Y),X=P(U);for(var S=0,T=Q.length;S<T;++S){if(X.test(Q[S].className)){R[R.length]=Q[S];if(W){W.call(Q[S],Q[S]);}}}return R;},hasClass:function(S,R){var Q=P(R);var T=function(U){return Q.test(U.className);};return B.Dom.batch(S,T,B.Dom,true);},addClass:function(R,Q){var S=function(T){if(this.hasClass(T,Q)){return false;}T.className=F.trim([T.className,Q].join(" "));return true;};return B.Dom.batch(R,S,B.Dom,true);},removeClass:function(S,R){var Q=P(R);var T=function(W){var V=false,X=W.className;if(R&&X&&this.hasClass(W,R)){W.className=X.replace(Q," ");if(this.hasClass(W,R)){this.removeClass(W,R);}W.className=F.trim(W.className);if(W.className===""){var U=(W.hasAttribute)?"class":"className";W.removeAttribute(U);}V=true;}return V;};return B.Dom.batch(S,T,B.Dom,true);},replaceClass:function(T,R,Q){if(!Q||R===Q){return false;}var S=P(R);var U=function(V){if(!this.hasClass(V,R)){this.addClass(V,Q);return true;}V.className=V.className.replace(S," "+Q+" ");if(this.hasClass(V,R)){this.removeClass(V,R);}V.className=F.trim(V.className);return true;};return B.Dom.batch(T,U,B.Dom,true);},generateId:function(Q,S){S=S||"yui-gen";var R=function(T){if(T&&T.id){return T.id;}var U=S+YAHOO.env._id_counter++;if(T){T.id=U;}return U;};return B.Dom.batch(Q,R,B.Dom,true)||R.apply(B.Dom,arguments);},isAncestor:function(R,S){R=B.Dom.get(R);S=B.Dom.get(S);var Q=false;if((R&&S)&&(R.nodeType&&S.nodeType)){if(R.contains&&R!==S){Q=R.contains(S);}else{if(R.compareDocumentPosition){Q=!!(R.compareDocumentPosition(S)&16);}}}else{}return Q;},inDocument:function(Q){return this.isAncestor(N.documentElement,Q);},getElementsBy:function(X,R,S,U){R=R||"*";S=(S)?B.Dom.get(S):null||N;if(!S){return[];}var T=[],W=S.getElementsByTagName(R);for(var V=0,Q=W.length;V<Q;++V){if(X(W[V])){T[T.length]=W[V];if(U){U(W[V]);}}}return T;},batch:function(U,X,W,S){U=(U&&(U.tagName||U.item))?U:B.Dom.get(U);if(!U||!X){return false;}var T=(S)?W:window;if(U.tagName||U.length===undefined){return X.call(T,U,W);}var V=[];for(var R=0,Q=U.length;R<Q;++R){V[V.length]=X.call(T,U[R],W);}return V;},getDocumentHeight:function(){var R=(N.compatMode!="CSS1Compat")?N.body.scrollHeight:N.documentElement.scrollHeight;var Q=Math.max(R,B.Dom.getViewportHeight());return Q;},getDocumentWidth:function(){var R=(N.compatMode!="CSS1Compat")?N.body.scrollWidth:N.documentElement.scrollWidth;var Q=Math.max(R,B.Dom.getViewportWidth());return Q;},getViewportHeight:function(){var Q=self.innerHeight;
var R=N.compatMode;if((R||H)&&!C){Q=(R=="CSS1Compat")?N.documentElement.clientHeight:N.body.clientHeight;}return Q;},getViewportWidth:function(){var Q=self.innerWidth;var R=N.compatMode;if(R||H){Q=(R=="CSS1Compat")?N.documentElement.clientWidth:N.body.clientWidth;}return Q;},getAncestorBy:function(Q,R){while((Q=Q.parentNode)){if(D(Q,R)){return Q;}}return null;},getAncestorByClassName:function(R,Q){R=B.Dom.get(R);if(!R){return null;}var S=function(T){return B.Dom.hasClass(T,Q);};return B.Dom.getAncestorBy(R,S);},getAncestorByTagName:function(R,Q){R=B.Dom.get(R);if(!R){return null;}var S=function(T){return T.tagName&&T.tagName.toUpperCase()==Q.toUpperCase();};return B.Dom.getAncestorBy(R,S);},getPreviousSiblingBy:function(Q,R){while(Q){Q=Q.previousSibling;if(D(Q,R)){return Q;}}return null;},getPreviousSibling:function(Q){Q=B.Dom.get(Q);if(!Q){return null;}return B.Dom.getPreviousSiblingBy(Q);},getNextSiblingBy:function(Q,R){while(Q){Q=Q.nextSibling;if(D(Q,R)){return Q;}}return null;},getNextSibling:function(Q){Q=B.Dom.get(Q);if(!Q){return null;}return B.Dom.getNextSiblingBy(Q);},getFirstChildBy:function(Q,S){var R=(D(Q.firstChild,S))?Q.firstChild:null;return R||B.Dom.getNextSiblingBy(Q.firstChild,S);},getFirstChild:function(Q,R){Q=B.Dom.get(Q);if(!Q){return null;}return B.Dom.getFirstChildBy(Q);},getLastChildBy:function(Q,S){if(!Q){return null;}var R=(D(Q.lastChild,S))?Q.lastChild:null;return R||B.Dom.getPreviousSiblingBy(Q.lastChild,S);},getLastChild:function(){}