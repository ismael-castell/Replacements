define(["exports","meta"],function(_exports,meta){/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/'use strict';Object.defineProperty(_exports,"__esModule",{value:!0});_exports.$documentWaitDefault=documentWait;_exports.addListener=addListener;_exports.afterNextRender=afterNextRender;_exports.applyCss=applyCss;_exports.applyStyle=applyStyle;_exports.applyStylePlaceHolder=applyStylePlaceHolder;_exports.beforeNextRender=beforeNextRender;_exports.calculateSplices=calculateSplices;_exports.camelToDashCase=camelToDashCase;_exports.createScopeStyle=createScopeStyle;_exports.cssFromModule=cssFromModule;_exports.cssFromModuleImports=cssFromModuleImports;_exports.cssFromModules=cssFromModules;_exports.cssFromTemplate=cssFromTemplate;_exports.dashToCamelCase=dashToCamelCase;_exports.deepTargetFind=deepTargetFind;_exports.detectMixin=_detectMixin;_exports.dumpRegistrations=dumpRegistrations;_exports.elementHasBuiltCss=elementHasBuiltCss;_exports.elementsAreInvalid=elementsAreInvalid;_exports.findMatchingParen=findMatchingParen;_exports.flush$2=flush;_exports.forEachRule=forEachRule;_exports.gatherStyleText=gatherStyleText;_exports.get=_get;_exports.getBuildComment=getBuildComment;_exports.getComputedStyleValue=_getComputedStyleValue;_exports.getCssBuild=getCssBuild;_exports.getIsExtends=getIsExtends;_exports.hideElementsGlobally=hideElementsGlobally;_exports.incrementInstanceCount=incrementInstanceCount;_exports.invalidate=invalidate;_exports.invalidateTemplate=invalidateTemplate;_exports.isAncestor=isAncestor;_exports.isDescendant=isDescendant;_exports.isKeyframesSelector=isKeyframesSelector;_exports.isOptimalCssBuild=isOptimalCssBuild;_exports.isPath=isPath;_exports.isTargetedBuild=isTargetedBuild;_exports.isUnscopedStyle=isUnscopedStyle;_exports.isValid=isValid;_exports.isValidating=isValidating;_exports.matches=matches;_exports.mixinBehaviors=mixinBehaviors;_exports.modelForElement=_modelForElement;_exports.normalize=normalize;_exports.parse=parse;_exports.pathFromUrl=pathFromUrl;_exports.prevent=_prevent;_exports.processUnscopedStyle=processUnscopedStyle;_exports.processVariableAndFallback=processVariableAndFallback;_exports.register=register$1;_exports.register$1=register;_exports.removeCustomPropAssignment=removeCustomPropAssignment;_exports.removeListener=removeListener;_exports.resetMouseCanceller=resetMouseCanceller;_exports.resolveCss=resolveCss;_exports.resolveUrl=_resolveUrl;_exports.root=root;_exports.rulesForStyle=rulesForStyle;_exports.scopeSubtree=_scopeSubtree;_exports.set=_set;_exports.setElementClassRaw=setElementClassRaw;_exports.setTouchAction=setTouchAction;_exports.showHideChildren=showHideChildren;_exports.split=split;_exports.splitSelectorList=splitSelectorList;_exports.startValidating=startValidating;_exports.startValidatingTemplate=startValidatingTemplate;_exports.stringify=stringify;_exports.stylesFromModule=stylesFromModule;_exports.stylesFromModuleImports=stylesFromModuleImports;_exports.stylesFromModules=stylesFromModules;_exports.stylesFromTemplate=stylesFromTemplate;_exports.templateIsValid=templateIsValid;_exports.templateIsValidating=templateIsValidating;_exports.templatize=_templatize;_exports.toCssText=toCssText;_exports.translate=translate;_exports.updateNativeProperties=updateNativeProperties;_exports.VAR_ASSIGN=_exports.Templatizer=_exports.TemplateStamp=_exports.TemplateInstanceBase=_exports.StyleNode=_exports.PropertyEffects=_exports.PropertyAccessors=_exports.PropertiesMixin=_exports.PropertiesChanged=_exports.PolymerElement=_exports.Polymer$1=_exports.Polymer=_exports.OptionalMutableDataBehavior=_exports.OptionalMutableData=_exports.MutableDataBehavior=_exports.MutableData=_exports.MIXIN_MATCH=_exports.MEDIA_MATCH=_exports.LegacyElementMixin=_exports.IS_VAR=_exports.HOST_SUFFIX=_exports.HOST_PREFIX=_exports.GestureEventListeners=_exports.FlattenedNodesObserver=_exports.EventApi=_exports.ElementMixin=_exports.DomRepeat=_exports.DomModule=_exports.DomIf=_exports.DomBind=_exports.DomApi=_exports.DisableUpgradeMixin=_exports.DirMixin=_exports.Debouncer=_exports.CustomStyleProvider=_exports.CustomStyleInterfaceInterface=_exports.CustomStyle=_exports.Class=_exports.Base=_exports.BRACKETED=_exports.ArraySelectorMixin=_exports.ArraySelector=_exports.ANIMATION_MATCH=_exports.$wrap=_exports.$unscopedStyleHandler=_exports.$templatizerBehavior=_exports.$templatize=_exports.$templateStamp=_exports.$templateMapDefault=_exports.$templateMap=_exports.$telemetry=_exports.$styleUtil=_exports.$styleSettings=_exports.$styleGather=_exports.$settings=_exports.$scopeSubtree=_exports.$resolveUrl=_exports.$renderStatus=_exports.$propertyEffects=_exports.$propertyAccessors=_exports.$propertiesMixin=_exports.$propertiesChanged=_exports.$polymerLegacy=_exports.$polymerFn=_exports.$polymerElement=_exports.$polymerDom=_exports.$path=_exports.$mutableDataBehavior=_exports.$mutableData=_exports.$mixin=_exports.$legacyElementMixin=_exports.$htmlTag=_exports.$hideTemplateControls=_exports.$gestures=_exports.$gestureEventListeners=_exports.$flush=_exports.$flattenedNodesObserver=_exports.$elementMixin=_exports.$domRepeat=_exports.$domModule=_exports.$domIf=_exports.$domBind=_exports.$documentWait=_exports.$disableUpgradeMixin=_exports.$dirMixin=_exports.$debounce=_exports.$customStyleInterfaceDefault=_exports.$customStyleInterface$1=_exports.$customStyle=_exports.$cssParse=_exports.$commonUtils=_exports.$commonRegex=_exports.$class=_exports.$caseMap=_exports.$async=_exports.$arraySplice=_exports.$arraySelector=_exports.$applyShimUtils=_exports.$applyShimDefault=_exports.$applyShim$1=void 0;_exports.wrap$1=_exports.wrap=_exports.version$1=_exports.version=_exports.useShadow=_exports.useNativeCustomElements=_exports.useNativeCSSProperties=_exports.useAdoptedStyleSheetsWithBuiltCSS=_exports.updateStyles=_exports.types=_exports.timeOut=_exports.syncInitialRender=_exports.suppressTemplateNotifications=_exports.supportsAdoptingStyleSheets=_exports.strictTemplatePolicy=_exports.setUseAdoptedStyleSheetsWithBuiltCSS=_exports.setSyncInitialRender=_exports.setSuppressTemplateNotifications=_exports.setStrictTemplatePolicy=_exports.setSanitizeDOMValue=_exports.setRootPath=_exports.setRemoveNestedTemplates=_exports.setPassiveTouchGestures=_exports.setOrderedComputed=_exports.setLegacyWarnings=_exports.setLegacyUndefined=_exports.setLegacyOptimizations=_exports.setLegacyNoObservedAttributes=_exports.setFastDomIf=_exports.setCancelSyntheticClickEvents=_exports.setAllowTemplateFromDomModule=_exports.scopingAttribute=_exports.sanitizeDOMValue=_exports.rootPath=_exports.removeNestedTemplates=_exports.remove=_exports.registrations=_exports.recognizers=_exports.passiveTouchGestures=_exports.orderedComputed=_exports.nativeShadow=_exports.nativeCssVariables=_exports.microTask=_exports.matchesSelector=_exports.legacyWarnings=_exports.legacyUndefined=_exports.legacyOptimizations=_exports.legacyNoObservedAttributes=_exports.isDeep=_exports.instanceCount=_exports.idlePeriod=_exports.htmlLiteral=_exports.html$2=_exports.html$1=_exports.html=_exports.getSanitizeDOMValue=_exports.gestures=_exports.flushDebouncers=_exports.flush$1=_exports.flush=_exports.findOriginalTarget=_exports.findObservedAttributesGetter=_exports.fastDomIf=_exports.dom=_exports.disableRuntime=_exports.dedupingMixin=_exports.cssBuild=_exports.cancelSyntheticClickEvents=_exports.builtCSS=_exports.animationFrame=_exports.allowTemplateFromDomModule=_exports.enqueueDebouncer$1=_exports.enqueueDebouncer=_exports.addDebouncer=_exports.add=_exports.VAR_CONSUMED=void 0;meta=babelHelpers.interopRequireWildcard(meta);function _templateObject5_016be350a80611eba0958bc49df464de(){var data=babelHelpers.taggedTemplateLiteral(["\n\n        <style>\n          .ue-c-widget--slider-elmundo-theme {\n            --ue-l-tab-hover-color: #d4d4d4;\n            --ue-l-tab-font-family: 'Roboto Condensed';\n            --ue-c-widget-color-up: #00672e;\n            --ue-c-widget-color-down: #b01911;\n            --ue-c-widget-color-default: transparent;\n            --ue-c-widget-color-main: #c3d5e5;\n            --ue-c-widget-font-main: 'Roboto';\n            --ue-c-widget-carousel-controls-height: 50%;\n            --ue-c-widget-carousel-controls-color: #216087;\n            --ue-c-widget-carousel-controls-svg-color: white;\n            --ue-c-widget-slider-height: 123px;\n            --ue-c-widget-slider-bg-color: #c3d5e5;\n            --ue-c-widget-slider-element-bg-color: white;\n            --ue-c-widget-slider-padding-container: 11px;\n            --ue-c-widget-slider-item-border: transparent;\n            --ue-c-widget-slider-item-bg-color: white;\n            --ue-c-widget-slider-item-bg-color-selected: #c3d5e5;\n            --ue-c-widget-slider-mobile-padding: 1rem;\n            --ue-c-widget-slider-mobile-height: 168px;\n            --ue-c-widget-slider-mobile-select-bg-color: white;\n            --ue-c-widget-slider-mobile-select-radius: 6px;\n            --ue-c-widget-slider-mobile-select-border: transparent;\n            --ue-c-widget-padding-mobile: 0;\n            --ue-c-widget-element-bg-color: white;\n          }\n          .ue-c-widget--slider-elmundo-theme.ue-c-widget--slider-mobile {\n            background-color: var(--ue-c-widget-slider-bg-color, #f0e4d3);\n            height: auto;\n            padding: 1rem\n          }\n          .ue-c-widget {\n            box-sizing: border-box;\n            background-color: var(--ue-c-widget-color-main, #f0e4d3);\n            font-family: var(--ue-c-widget-font-main, \"Heebo\");\n            font-size: 16px;\n            color: var(--ue-c-widget-color-font, #181715);\n            padding: 1.375rem;\n            width: 100%;\n            align-self: flex-start;\n          }\n\n          .ue-c-widget svg {\n            pointer-events: none;\n            flex-shrink: 0;\n            fill: var(--color-section, var(--ue-c-widget-color-default, #305b96));\n          }\n\n          .ue-c-widget input,\n          .ue-c-widget select {\n            width: 100%;\n            border: 1px solid var(--ue-c-widget-color-fourth, #b7b2ac);\n            border-radius: 0;\n            height: var(--ue-c-widget-select-height, 38px);\n            padding: 0 0.5rem;\n            font-size: 0.8rem;\n            box-sizing: border-box;\n            -webkit-appearance: none !important;\n            -moz-appearance: none;\n          }\n\n          .ue-c-widget input:-webkit-autofill {\n            box-shadow: 0 0 0px 1000px white inset;\n            -webkit-box-shadow: 0 0 0px 1000px white inset;\n          }\n\n          \n\n          .ue-c-widget .is50x50 {\n            display: flex;\n          }\n\n          .ue-c-widget .is50x50 > * {\n            width: 50%;\n          }\n\n          .ue-c-widget .is-upsidedown .ue-c-widget--slider-variation-icon::before,\n          .ue-c-widget .is-upsidedown .ue-c-widget__ibex35-variation-icon::before {\n            transform: rotate(180deg);\n          }\n\n          .ue-c-widget .line-clamp_x2 {\n            display: -webkit-box;\n            -webkit-line-clamp: 2;\n            -webkit-box-orient: vertical;\n            overflow: hidden;\n          }\n\n          .ue-c-widget .line-clamp_x3 {\n            display: -webkit-box;\n            -webkit-line-clamp: 3;\n            -webkit-box-orient: vertical;\n            overflow: hidden;\n          }\n\n          .ue-c-widget .line-clamp_x4 {\n            display: -webkit-box;\n            -webkit-line-clamp: 4;\n            -webkit-box-orient: vertical;\n            overflow: hidden;\n          }\n\n          .ue-c-widget--no-padding {\n            padding: 0;\n          }\n\n          .ue-c-widget--full-width {\n            width: 100%;\n          }\n\n          .ue-c-widget--full-width .ue-c-widget__list {\n            flex-wrap: nowrap;\n            justify-content: space-around;\n          }\n\n          .ue-c-widget--opinion.ue-c-widget--full-width .ue-c-widget__article-img {\n            width: 80px;\n            height: 80px;\n          }\n\n          .ue-c-widget--slider {\n            height: var(--ue-c-widget-slider-height, 82px);\n            overflow: hidden;\n            background-color: var(--ue-c-widget-slider-bg-color, #f0e4d3);\n          }\n\n          .ue-c-widget--slider .ue-l-tab__content-container {\n            width: 50%;\n            padding: var(--ue-c-widget-slider-padding-container, 0);\n          }\n\n          .ue-c-widget--slider .ue-c-widget__header-title {\n            width: 100%;\n            font-size: 0.8125rem;\n            padding: 10px 0 3px 12px;\n            color: black;\n          }\n\n          .ue-c-widget--slider .ue-l-tab__content-container {\n            padding-top: 0;\n          }\n\n          .ue-c-widget__body > *:not(:last-child) {\n            margin-bottom: .5rem;\n          }\n\n          .ue-l-tab {\n            width: 100%;\n            display: flex;\n            flex-direction: column;\n          }\n\n          .ue-l-tab.ue-l-tab--horizontal {\n            flex-direction: row;\n            flex-wrap: wrap;\n          }\n\n          .ue-l-tab__content-container {\n            background-color: transparent;\n            display: flex;\n            flex-grow: 1;\n            flex-direction: column;\n          }\n\n          .ue-l-tab__content-container:focus {\n            outline: none;\n          }\n\n          .ue-l-carousel {\n            width: 100%;\n            position: relative;\n          }\n\n          .ue-l-carousel__column {\n            width: 130px;\n          }\n\n          .ue-l-carousel__column:not(:last-child) {\n            margin-right: 2px;\n          }\n\n          .ue-c-widget--slider-element {\n            box-sizing: border-box;\n            padding: 0.7rem;\n            line-height: 1.5;\n            height: 82px;\n            width: 130px;\n            background-color: var(--ue-c-widget-slider-element-bg-color, #e6daca);\n            -webkit-box-shadow: inset 0px 3px 0px 0px var(--ue-c-widget-color-up, #6a9c00);\n            -moz-box-shadow: inset 0px 3px 0px 0px var(--ue-c-widget-color-up, #6a9c00);\n            box-shadow: inset 0px 3px 0px 0px var(--ue-c-widget-color-up, #6a9c00);\n          }\n\n          .ue-c-widget--slider-element:hover {\n              filter: brightness(95%);\n          }\n          \n          .ue-c-widget--slider-element p {\n              margin: 0;\n          }\n          \n          .ue-c-widget--slider-element a {\n              text-decoration: none;\n          }\n\n          .ue-c-widget--slider-element.is-down {\n            -webkit-box-shadow: inset 0px 3px 0px 0px var(--ue-c-widget-color-down, #b53f1b);\n            -moz-box-shadow: inset 0px 3px 0px 0px var(--ue-c-widget-color-down, #b53f1b);\n            box-shadow: inset 0px 3px 0px 0px var(--ue-c-widget-color-down, #b53f1b);\n          }\n\n          .ue-c-widget--slider-element.is-upsidedown .ue-c-widget--slider-variation-icon::before {\n              display: inline-block;\n              transform: rotate(180deg) translateY(2px);\n          }\n\n          .ue-c-widget--slider-headline {\n            text-transform: uppercase;\n            font-size: 15px;\n            font-weight: bold;\n            color: black;\n            text-overflow: ellipsis;\n            white-space: nowrap;\n            overflow: hidden;\n          }\n\n          .ue-c-widget--slider-value {\n            font-size: 14px;\n            font-weight: normal;\n            color: #333;\n            text-overflow: ellipsis;\n            white-space: nowrap;\n            overflow: hidden;\n          }\n\n          .ue-c-widget--slider-variation {\n            font-size: 14px;\n            font-weight: normal;\n            text-overflow: ellipsis;\n            white-space: nowrap;\n            overflow: hidden;\n          }\n            \n          .is-up .ue-c-widget--slider-variation {\n            color: var(--ue-c-widget-color-up, #6a9c00);\n          }\n            \n          .is-down .ue-c-widget--slider-variation {\n            color: var(--ue-c-widget-color-down, #b53f1b);\n          }\n            \n          .is-up .ue-c-widget--slider-variation-icon {\n            color: var(--ue-c-widget-color-up, #6a9c00);\n          }\n\n          .is-up .ue-c-widget--slider-variation-icon::before {\n            content: \"\";\n            color: var(--ue-c-widget-color-up, #6a9c00);\n            display: inline-block;\n            width: 0;\n            height: 0;\n            border-style: solid;\n            border-width: 0 6px 10px 6px;\n            border-color: transparent transparent var(--ue-c-widget-color-up, #6a9c00) transparent;\n          }\n            \n          .is-down .ue-c-widget--slider-variation-icon {\n            color: var(--ue-c-widget-color-down, #b53f1b);\n          }\n            \n          .is-down .ue-c-widget--slider-variation-icon::before {\n            content: \"\";\n            color: var(--ue-c-widget-color-down, #b53f1b);\n            display: inline-block;\n            width: 0;\n            height: 0;\n            border-style: solid;\n            border-width: 10px 6px 0 6px;\n            border-color: var(--ue-c-widget-color-down, #b53f1b) transparent transparent transparent;\n          }\n\n          .hidden-content {\n              position: absolute !important;\n              height: 1px;\n              width: 1px;\n              overflow: hidden;\n              clip: rect(1px, 1px, 1px, 1px);\n              -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);\n                      clip-path: polygon(0 0, 0 0, 0 0, 0 0);\n          }\n\n          .ue-c-widget--slider-mobile {\n              background-color: transparent;\n              height: auto;\n          }\n          \n\n        </style>\n\n          \n        <template is=\"dom-if\" if=\"{{!mobile}}\">\n        <div class$=\" ue-c-widget  ue-c-widget--no-padding  ue-c-widget--full-width  ue-c-widget--slider [[theme]]\">\n            <div class=\"ue-c-widget__body\">\n                <div class=\"ue-l-tab ue-l-tab--horizontal js-ue-slide-tabs\">\n                \n                <ue-carousel-filters filters=\"{{filters}}\" active-urls=\"{{activeUrls}}\" mobile=\"{{mobile}}\" tab-index=\"{{tabIndex}}\" \n                style$=\"[[_getWidth(filters)]]\"></ue-carousel-filters>\n\n                    <section class=\"ue-l-tab__content-container\" id=\"sec1_03\" role=\"tabpanel\" tabindex=\"0\" aria-labelledby=\"tab_one_01\">\n                        \n                        <div class=\"ue-l-carousel js-carousel01\">\n                            <ue-carousel controls=\"{{controls}}\" intersection-width=\"100\" scroll-position=\"[[scrollPosition]]\">\n                                <dom-repeat items=\"{{items}}\" as=\"item\">\n                                    <template>\n                                        <div class=\"ue-l-carousel__column\">\n                                            <div class$=\"ue-c-widget--slider-element [[_getVariationClass(item)]]\">\n                                            <a on-click=\"_onClick\" href=\"{{portal}}[[_setDetailUrl(item)]]\" >\n                                                <p class=\"ue-c-widget--slider-headline\">[[ _getName(item) ]]</p>\n                                                <p class=\"ue-c-widget--slider-value\">[[_getQuote(item)]]</p>\n                                                <p class=\"ue-c-widget--slider-variation \">\n                                                <template is=\"dom-if\" if=\"{{_getVariation(item)}}\">\n                                                    <span class=\"hidden-content\">[[_getTypeVariation(item)]]</span>\n                                                    <span class=\"ue-c-widget--slider-variation-icon\"></span>[[_getVariation(item)]] [[_getPercentage(item)]]%\n                                                </template>\n                                                </p>\n                                            </a>\n                                            </div>\n                                        </div>\n                                    </template>\n                                </dom-repeat>\n                            </ue-carousel>\n                        </div>\n                        \n                    </section>\n\n                    <ue-carousel-advertising advertising=\"{{advertising}}\" link-advertising=\"{{linkAdvertisingDesktop}}\"></ue-carousel-advertising>\n\n                </div>\n            </div>\n        </div>\n\n        </template>\n\n        <template is=\"dom-if\" if=\"{{mobile}}\">\n            <div class$=\"ue-c-widget  ue-c-widget--no-padding  ue-c-widget--full-width  ue-c-widget--slider  ue-c-widget--slider-mobile [[theme]]\">\n                <div class=\"ue-c-widget__body\">\n                    <div class=\"ue-l-tab ue-l-tab--horizontal js-ue-slide-tabs\">\n                        <ue-carousel-filters filters=\"{{filters}}\" active-urls=\"{{activeUrls}}\" mobile=\"{{mobile}}\"></ue-carousel-filters>\n                        \n                        <div class=\"ue-l-carousel js-carousel01\">\n\n                            <ue-carousel controls=\"{{controls}}\">\n                                <dom-repeat items=\"{{items}}\" as=\"item\">\n                                    <template>\n                                        <div class=\"ue-l-carousel__column\">\n                                            <div class$=\"ue-c-widget--slider-element [[_getVariationClass(item)]]\">\n                                            <a on-click=\"_onClick\" href=\"{{portal}}[[_setDetailUrl(item)]]\">\n                                                <p class=\"ue-c-widget--slider-headline\">[[ _getName(item) ]]</p>\n                                                <p class=\"ue-c-widget--slider-value\">[[_getQuote(item)]]</p>\n                                                <p class=\"ue-c-widget--slider-variation \">\n                                                <span class=\"hidden-content\">[[_getTypeVariation(item)]]</span>\n                                                <span class=\"ue-c-widget--slider-variation-icon\"></span>[[_getVariation(item)]] [[_getPercentage(item)]]%\n                                                </p>\n                                            </a>\n                                            </div>\n                                        </div>\n                                    </template>\n                                </dom-repeat>\n                            </ue-carousel>\n                            \n                        </div>\n\n                        <ue-carousel-advertising advertising=\"{{advertising}}\" link-advertising=\"{{linkAdvertisingMobile}}\" mobile=\"{{mobile}}\"></ue-carousel-advertising>\n\n                    </div>\n                </div>\n            </div>\n        </template>\n\n    <iron-ajax id=\"getItems\" handle-as=\"json\" on-response=\"handleResponse\"></iron-ajax>\n\n    "]);_templateObject5_016be350a80611eba0958bc49df464de=function _templateObject5_016be350a80611eba0958bc49df464de(){return data};return data}function _templateObject4_016be350a80611eba0958bc49df464de(){var data=babelHelpers.taggedTemplateLiteral(["\n        <style>\n        .ue-l-tab__list {\n          list-style: none;\n          padding: 0;\n          display: flex;\n          z-index: 2;\n          justify-content: center;\n          margin: 0;\n          border-bottom: 0;\n          font-family: \"Heebo\", sans-serif;\n          box-shadow: none;\n          font-weight: normal;\n          font-size: 0.875rem;\n          line-height: 1rem;\n      }\n\n      .ue-l-tab__list {\n          width: 125px;\n          border: 1px solid #e2d8cb;\n          margin: 0;\n          border-bottom: 0;\n      }\n\n      .ue-l-tab__list {\n          flex-direction: column;\n          margin: 0;\n      }\n\n      .ue-l-tab__list [aria-selected] {\n          color: black;\n          background-color: white;\n          border-left: 4px solid black;\n      }\n\n      .ue-l-tab__list [aria-selected] {\n          position: relative;\n          top: 0;\n          font-weight: bold;\n      }\n\n      .ue-l-tab__list [aria-selected] {\n          border-bottom: 0;\n      }\n\n      .ue-l-tab__item:first-of-type {\n          border-bottom: 1px solid #e2d8cb;\n      }\n\n      .ue-l-tab__item {\n          background-color: #f0e4d3;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          height: 40px;\n      }\n\n      .ue-l-tab__item {\n          width: 100%;\n      }\n\n      .ue-l-tab__item button {\n          border: none;\n          text-decoration: none;\n          font-family: inherit;\n          font-size: 100%;\n          line-height: 1.15;\n          margin: 0;\n          background-color: inherit;\n          box-sizing: border-box;\n          display: inline-block;\n          width: 100%;\n          height: 40px;\n          text-align: center;\n          color: #b7b2ac;\n          padding: 0 0.5rem;\n      }\n\n      .ue-c-widget__select {\n          width: 100%;\n          position: relative;\n      }\n\n      .ue-c-widget input, .ue-c-widget__select select {\n          width: 100%;\n          border: 1px solid #b7b2ac;\n          border-radius: 0;\n          height: 33px;\n          padding: 0 0.5rem;\n          font-size: 0.8rem;\n          box-sizing: border-box;\n          -webkit-appearance: none !important;\n          -moz-appearance: none;\n      }\n\n      .ue-c-widget__select select {\n          background-color: transparent;\n          border: 0;\n          border-bottom: 1px solid #b7b2ac;\n          margin-bottom: .5rem;\n          font-size: 0.9rem;\n          font-family: \"Heebo\", sans-serif;\n          color: #4b4b4b;\n      }\n\n      .ue-c-widget__select .ue-c-widget__select-icon {\n          bottom: auto;\n          top: 16px;\n      }\n\n      .ue-c-widget__select-icon {\n          position: absolute;\n          bottom: 0;\n          transform: translateY(-50%);\n          right: 0.5rem;\n          width: 16px;\n          height: 16px;\n          border: 0;\n          padding: 0;\n          cursor: pointer;\n      }\n\n      .ue-c-widget__select-icon:hover {\n          opacity: 0.6;\n      }\n\n      .ue-c-widget__select svg {\n          width: 100%;\n      }\n      \n      .ue-c-widget svg {\n          pointer-events: none;\n      }\n      \n      .ue-c-widget__select-icon {\n          bottom: auto;\n          top: 16px;\n      }\n      \n      .ue-l-carousel__inner {\n          overflow: scroll;\n      }\n\n        .ue-c-widget__header-title {\n          flex-grow: 1;\n          font-weight: bold;\n          color: var(--color-section, var(--ue-c-widget-color-default, #305b96));\n          padding-top: 3px;\n          text-transform: uppercase;\n        }\n\n        .ue-c-widget__header-title {\n          width: 100%;\n          font-size: 0.8125rem;\n          padding: 10px 0 3px 12px;\n          color: black;\n        }\n        .ue-c-widget__header-title {\n            width: 100%;\n            font-size: 0.8125rem;\n            padding: 10px 0 3px 12px;\n            color: black;\n          }\n        @media (max-width: 41.24em) {\n            .ue-c-widget__header-title {\n\n                padding: var(--ue-c-widget-padding-mobile, 10px 0 3px 12px);\n\n            }\n        }  \n        </style>\n\n        <template is=\"dom-if\" if=\"{{!mobile}}\">\n            <template is=\"dom-if\" if=\"[[_getType(filters.type, 'tab')]]\">\n                <ul class=\"ue-l-tab__list\" role=\"tablist\" id=\"tablist\">\n                    <template is=\"dom-repeat\" items=\"[[filters.items]]\" as=\"item\">\n                        <li class=\"ue-l-tab__item\" role=\"presentation\" value=\"{{index}}\" on-click=\"showTab\">\n                            <button role=\"tab\" id=\"tab_one_01\" aria-selected$=\"[[_isSelected(index)]]\">[[item.name]]</button>\n                        </li>\n                    </template>\n                </ul>\n            </template>\n            <template is=\"dom-if\" if=\"[[_getType(filters.type, 'title')]]\">\n                <span class=\"ue-c-widget__header-title\">[[filters.items.0.name]]</span>\n            </template>\n        </template>\n\n        <template is=\"dom-if\" if=\"{{mobile}}\">\n            <template is=\"dom-if\" if=\"[[_getType(filters.type, 'tab')]]\">\n                <div class=\"ue-c-widget__select\">\n                    <select form=\"widget-form\" id=\"select-slider\" name=\"select-slider\" title=\"select-slider\" value=\"{{selectedFilter::change}}\">\n                        <template is=\"dom-repeat\" items=\"[[filters.items]]\" as=\"item\">\n                            <option value=\"[[item.name]]\">[[item.name]]</option>\n                        </template>\n                    </select>\n                    <div class=\"ue-c-widget__select-icon\">\n                        <svg role=\"img\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"16\" viewBox=\"0 0 16 20\">\n                            <path fill-rule=\"evenodd\" d=\"M0 5l6 6 6-6H0z\"></path>\n                        </svg>\n                    </div>\n                </div>\n            </template>\n            <template is=\"dom-if\" if=\"[[_getType(filters.type, 'title')]]\">\n                <span class=\"ue-c-widget__header-title\">[[filters.items.0.name]]</span>\n            </template>\n        </template>\n    "]);_templateObject4_016be350a80611eba0958bc49df464de=function _templateObject4_016be350a80611eba0958bc49df464de(){return data};return data}function _templateObject3_016be350a80611eba0958bc49df464de(){var data=babelHelpers.taggedTemplateLiteral(["\n\n        <style>\n.ue-l-carousel {\n  width: 100%;\n  position: relative;\n}\n.ue-l-carousel__inner {\n  display: flex;\n  overflow: hidden;\n  scroll-behavior: smooth;\n}\n.ue-l-carousel__column {\n  width: 130px;\n}\n.ue-l-carousel__column:not(:last-child) {\n  margin-right: 2px;\n}\n.ue-l-carousel__controls {\n  position: absolute;\n  cursor: pointer;\n  box-shadow: unset;\n  z-index: 3;\n}\n.ue-l-carousel__controls--prev,\n.ue-l-carousel__controls--next {\n  top: 50%;\n  transform: translateY(-50%);\n  width: 30px;\n  height: var(--ue-c-widget-carousel-controls-height, 100%);\n  transition: .3s;\n  border-radius: 0;\n  border: 0;\n  background-color: var(--ue-c-widget-carousel-controls-color, #f0e4d3);\n  opacity: 0.7;\n  box-sizing: border-box;\n}\n@media (max-width: 41.24em) {\n  .ue-l-carousel__controls--prev,\n  .ue-l-carousel__controls--next {\n    width: 36px;\n    height: 100%;\n    outline: 0;\n  }\n}\n.ue-l-carousel__controls--prev svg,\n.ue-l-carousel__controls--next svg {\n  fill: var(--ue-c-widget-carousel-controls-svg-color, black);\n}\n@media (max-width: 41.24em) {\n  .ue-l-carousel__controls--prev svg,\n  .ue-l-carousel__controls--next svg {\n    display: none;\n  }\n}\n.ue-l-carousel__controls--prev:hover,\n.ue-l-carousel__controls--next:hover {\n  opacity: 1;\n}\n.ue-l-carousel__controls--prev {\n  left: 0;\n}\n.ue-l-carousel__controls--prev .is-arrow-icon {\n  transform: rotate(-180deg);\n}\n@media (max-width: 41.24em) {\n  .ue-l-carousel__controls--prev {\n    background: linear-gradient(to left, rgba(255, 255, 255, 0) 0%, var(--ue-c-widget-carousel-controls-color, #f0e4d3));\n  }\n}\n.ue-l-carousel__controls--next {\n  right: 0;\n}\n@media (max-width: 41.24em) {\n  .ue-l-carousel__controls--next {\n    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, var(--ue-c-widget-carousel-controls-color, #f0e4d3));\n  }\n}\n.ue-l-carousel .ue-c-card:not(:last-child) {\n  margin-bottom: 8px;\n}\n        </style>\n                \n        <ue-carousel-controls-simple controls=\"[[controls]]\" intersection-width=\"[[intersectionWidth]]\"\n          scroll-position=\"[[scrollPosition]]\">\n\n          <div class=\"ue-l-carousel__inner js-carousel01-content\" slot=\"content\" id=\"content\">\n            \n            <slot></slot>\n          \n          </div>\n          \n        </ue-carousel-controls-simple>\n\n      "]);_templateObject3_016be350a80611eba0958bc49df464de=function _templateObject3_016be350a80611eba0958bc49df464de(){return data};return data}function _templateObject2_016be350a80611eba0958bc49df464de(){var data=babelHelpers.taggedTemplateLiteral(["\n        <style>\n.ue-l-carousel__controls {\n  position: absolute;\n  cursor: pointer;\n  box-shadow: unset;\n  z-index: 3;\n}\n.ue-l-carousel__controls--prev,\n.ue-l-carousel__controls--next {\n  top: 50%;\n  transform: translateY(-50%);\n  width: 30px;\n  height: var(--ue-c-widget-carousel-controls-height, 100%);\n  transition: .3s;\n  border-radius: 0;\n  border: 0;\n  background-color: var(--ue-c-widget-carousel-controls-color, #f0e4d3);\n  opacity: 0.7;\n  box-sizing: border-box;\n}\n@media (max-width: 41.24em) {\n  .ue-l-carousel__controls--prev,\n  .ue-l-carousel__controls--next {\n    width: 36px;\n    height: 100%;\n    outline: 0;\n  }\n}\n.ue-l-carousel__controls--prev svg,\n.ue-l-carousel__controls--next svg {\n  fill: var(--ue-c-widget-carousel-controls-svg-color, black);\n}\n@media (max-width: 41.24em) {\n  .ue-l-carousel__controls--prev svg,\n  .ue-l-carousel__controls--next svg {\n    display: none;\n  }\n}\n.ue-l-carousel__controls--prev:hover,\n.ue-l-carousel__controls--next:hover {\n  opacity: 1;\n}\n.ue-l-carousel__controls--prev {\n  left: 0;\n}\n.ue-l-carousel__controls--prev .is-arrow-icon {\n  transform: rotate(-180deg);\n}\n@media (max-width: 41.24em) {\n  .ue-l-carousel__controls--prev {\n    background: linear-gradient(to left, rgba(255, 255, 255, 0) 0%, var(--ue-c-widget-carousel-controls-color, #f0e4d3));\n  }\n}\n.ue-l-carousel__controls--next {\n  right: 0;\n}\n@media (max-width: 41.24em) {\n  .ue-l-carousel__controls--next {\n    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, var(--ue-c-widget-carousel-controls-color, #f0e4d3));\n  }\n}\n.ue-l-carousel .ue-c-card:not(:last-child) {\n  margin-bottom: 8px;\n}\n        \n.hidden-content {\n  position: absolute !important;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip: rect(1px, 1px, 1px, 1px);\n  -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);\n          clip-path: polygon(0 0, 0 0, 0 0, 0 0);\n  background-color: #fff;\n  color: #000;\n}\n\n        </style>\n\n        <template is=\"dom-if\" if=\"[[controls]]\">\n            <button data-offset=\"-1\" class$=\"ue-l-carousel__controls ue-l-carousel__controls--prev js-carousel01-prev \n            [[isValid(showLeftArrow, '', 'hidden-content')]]\" aria-disabled$=\"[[isValid(showLeftArrow, 'false', 'true')]]\" \n            on-click=\"moveSlide\" tabindex=\"0\">\n                <span class=\"hidden-content\">Anterior</span>\n                <svg role=\"img\" focusable=\"false\" class=\"is-arrow-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"6\" height=\"10\" viewBox=\"0 0 6 10\">\n                    <path fill-rule=\"evenodd\" d=\"M0 8.946L3.91 5 0 1.054 1.045 0 6 5l-4.955 5z\"></path>\n                </svg>\n            </button>\n        </template>\n\n        <slot name=\"content\"></slot>\n\n        <template is=\"dom-if\" if=\"[[controls]]\">\n            <button data-offset=\"1\" class$=\"ue-l-carousel__controls ue-l-carousel__controls--next js-carousel01-next \n            [[isValid(showRightArrow, '', 'hidden-content')]]\" aria-disabled$=\"[[isValid(showRightArrow, 'false', 'true')]]\" on-click=\"moveSlide\" tabindex=\"-1\">\n                <span class=\"hidden-content\">Siguiente</span>\n                <svg role=\"img\" focusable=\"false\" class=\"is-arrow-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"6\" height=\"10\" viewBox=\"0 0 6 10\">\n                    <path fill-rule=\"evenodd\" d=\"M0 8.946L3.91 5 0 1.054 1.045 0 6 5l-4.955 5z\"></path>\n                </svg>\n            </button>\n        </template>\n\n    "]);_templateObject2_016be350a80611eba0958bc49df464de=function _templateObject2_016be350a80611eba0958bc49df464de(){return data};return data}function _templateObject_016be350a80611eba0958bc49df464de(){var data=babelHelpers.taggedTemplateLiteral(["\n\n        <style>\n        .ue-c-widget--slider-ad-desktop {\n            line-height: 0;\n            display: block;\n        }\n        .ue-c-widget--slider-ad-mobile {\n            display: flex;\n            justify-content: center;\n        }\n        </style>\n\n        <template is=\"dom-if\" if=\"[[advertising]]\">\n            <a class$=\"[[_getClass()]]\" href=\"\">\n                <img src=\"{{linkAdvertising}}\" alt=\"titulo_enlace\">\n            </a>\n        </template>\n    "]);_templateObject_016be350a80611eba0958bc49df464de=function _templateObject_016be350a80611eba0958bc49df464de(){return data};return data}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){keys.push.apply(keys,Object.getOwnPropertySymbols(object))}if(enumerableOnly)keys=keys.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(source,!0).forEach(function(key){babelHelpers.defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}var nativeShadow=!(window.ShadyDOM&&window.ShadyDOM.inUse);_exports.nativeShadow=nativeShadow;var nativeCssVariables_;/**
                          * @param {(ShadyCSSOptions | ShadyCSSInterface)=} settings
                          */function calcCssVariables(settings){if(settings&&settings.shimcssproperties){nativeCssVariables_=!1}else{// chrome 49 has semi-working css vars, check if box-shadow works
// safari 9.1 has a recalc bug: https://bugs.webkit.org/show_bug.cgi?id=155782
// However, shim css custom properties are only supported with ShadyDOM enabled,
// so fall back on native if we do not detect ShadyDOM
// Edge 15: custom properties used in ::before and ::after will also be used in the parent element
// https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12414257/
nativeCssVariables_=nativeShadow||!!(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)"))}}/** @type {string | undefined} */var cssBuild;_exports.cssBuild=cssBuild;if(window.ShadyCSS&&window.ShadyCSS.cssBuild!==void 0){_exports.cssBuild=cssBuild=window.ShadyCSS.cssBuild}/** @type {boolean} */var disableRuntime=!!(window.ShadyCSS&&window.ShadyCSS.disableRuntime);_exports.disableRuntime=disableRuntime;if(window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0){nativeCssVariables_=window.ShadyCSS.nativeCss}else if(window.ShadyCSS){calcCssVariables(window.ShadyCSS);// reset window variable to let ShadyCSS API take its place
window.ShadyCSS=void 0}else{calcCssVariables(window.WebComponents&&window.WebComponents.flags)}// Hack for type error under new type inference which doesn't like that
// nativeCssVariables is updated in a function and assigns the type
// `function(): ?` instead of `boolean`.
var nativeCssVariables=/** @type {boolean} */nativeCssVariables_;_exports.nativeCssVariables=nativeCssVariables;var styleSettings={nativeShadow:nativeShadow,get cssBuild(){return cssBuild},disableRuntime:disableRuntime,nativeCssVariables:nativeCssVariables};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */ /*
      Extremely simple css parser. Intended to be not more than what we need
      and definitely not necessarily correct =).
      */_exports.$styleSettings=styleSettings;"use strict";/** @unrestricted */var StyleNode=function StyleNode(){babelHelpers.classCallCheck(this,StyleNode);/** @type {number} */this.start=0;/** @type {number} */this.end=0;/** @type {StyleNode} */this.previous=null;/** @type {StyleNode} */this.parent=null;/** @type {Array<StyleNode>} */this.rules=null;/** @type {string} */this.parsedCssText="";/** @type {string} */this.cssText="";/** @type {boolean} */this.atRule=!1;/** @type {number} */this.type=0;/** @type {string} */this.keyframesName="";/** @type {string} */this.selector="";/** @type {string} */this.parsedSelector=""};/**
   * @param {string} text
   * @return {StyleNode}
   */_exports.StyleNode=StyleNode;function parse(text){text=clean(text);return parseCss(lex(text),text)}// remove stuff we don't care about that may hinder parsing
/**
 * @param {string} cssText
 * @return {string}
 */function clean(cssText){return cssText.replace(RX.comments,"").replace(RX.port,"")}// super simple {...} lexer that returns a node tree
/**
 * @param {string} text
 * @return {!StyleNode}
 */function lex(text){var root=new StyleNode;root.start=0;root.end=text.length;for(var n=root,i=0,l=text.length;i<l;i++){if(text[i]===OPEN_BRACE){if(!n.rules){n.rules=[]}var _p=n,previous=_p.rules[_p.rules.length-1]||null;n=new StyleNode;n.start=i+1;n.parent=_p;n.previous=previous;_p.rules.push(n)}else if(text[i]===CLOSE_BRACE){n.end=i+1;n=n.parent||root}}return root}// add selectors/cssText to node tree
/**
 * @param {StyleNode} node
 * @param {string} text
 * @return {!StyleNode}
 */function parseCss(node,text){var t=text.substring(node.start,node.end-1);node.parsedCssText=node.cssText=t.trim();if(node.parent){var ss=node.previous?node.previous.end:node.parent.start;t=text.substring(ss,node.start-1);t=_expandUnicodeEscapes(t);t=t.replace(RX.multipleSpaces," ");// TODO(sorvell): ad hoc; make selector include only after last ;
// helps with mixin syntax
t=t.substring(t.lastIndexOf(";")+1);var s=node.parsedSelector=node.selector=t.trim();node.atRule=0===s.indexOf(AT_START);// note, support a subset of rule types...
if(node.atRule){if(0===s.indexOf(MEDIA_START)){node.type=types.MEDIA_RULE}else if(s.match(RX.keyframesRule)){node.type=types.KEYFRAMES_RULE;node.keyframesName=node.selector.split(RX.multipleSpaces).pop()}}else{if(0===s.indexOf(VAR_START)){node.type=types.MIXIN_RULE}else{node.type=types.STYLE_RULE}}}var r$=node.rules;if(r$){for(var i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){parseCss(r,text)}}return node}/**
   * conversion of sort unicode escapes with spaces like `\33 ` (and longer) into
   * expanded form that doesn't require trailing space `\000033`
   * @param {string} s
   * @return {string}
   */function _expandUnicodeEscapes(s){return s.replace(/\\([0-9a-f]{1,6})\s/gi,function(){var code=arguments[1],repeat=6-code.length;while(repeat--){code="0"+code}return"\\"+code})}/**
   * stringify parsed css.
   * @param {StyleNode} node
   * @param {boolean=} preserveProperties
   * @param {string=} text
   * @return {string}
   */function stringify(node,preserveProperties){var text=2<arguments.length&&arguments[2]!==void 0?arguments[2]:"",cssText="";if(node.cssText||node.rules){var r$=node.rules;if(r$&&!_hasMixinRules(r$)){for(var i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){cssText=stringify(r,preserveProperties,cssText)}}else{cssText=preserveProperties?node.cssText:removeCustomProps(node.cssText);cssText=cssText.trim();if(cssText){cssText="  "+cssText+"\n"}}}// emit rule if there is cssText
if(cssText){if(node.selector){text+=node.selector+" "+OPEN_BRACE+"\n"}text+=cssText;if(node.selector){text+=CLOSE_BRACE+"\n\n"}}return text}/**
   * @param {Array<StyleNode>} rules
   * @return {boolean}
   */function _hasMixinRules(rules){var r=rules[0];return!!r&&!!r.selector&&0===r.selector.indexOf(VAR_START)}/**
   * @param {string} cssText
   * @return {string}
   */function removeCustomProps(cssText){cssText=removeCustomPropAssignment(cssText);return removeCustomPropApply(cssText)}/**
   * @param {string} cssText
   * @return {string}
   */function removeCustomPropAssignment(cssText){return cssText.replace(RX.customProp,"").replace(RX.mixinProp,"")}/**
   * @param {string} cssText
   * @return {string}
   */function removeCustomPropApply(cssText){return cssText.replace(RX.mixinApply,"").replace(RX.varApply,"")}/** @enum {number} */var types={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3};_exports.types=types;var OPEN_BRACE="{",CLOSE_BRACE="}",RX={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},VAR_START="--",MEDIA_START="@media",AT_START="@",cssParse={StyleNode:StyleNode,parse:parse,stringify:stringify,removeCustomPropAssignment:removeCustomPropAssignment,types:types};_exports.$cssParse=cssParse;/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */var VAR_ASSIGN=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi;_exports.VAR_ASSIGN=VAR_ASSIGN;var MIXIN_MATCH=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;_exports.MIXIN_MATCH=MIXIN_MATCH;var VAR_CONSUMED=/(--[\w-]+)\s*([:,;)]|$)/gi;_exports.VAR_CONSUMED=VAR_CONSUMED;var ANIMATION_MATCH=/(animation\s*:)|(animation-name\s*:)/;_exports.ANIMATION_MATCH=ANIMATION_MATCH;var MEDIA_MATCH=/@media\s(.*)/;_exports.MEDIA_MATCH=MEDIA_MATCH;var IS_VAR=/^--/;_exports.IS_VAR=IS_VAR;var BRACKETED=/\{[^}]*\}/g;_exports.BRACKETED=BRACKETED;var HOST_PREFIX="(?:^|[^.#[:])";_exports.HOST_PREFIX=HOST_PREFIX;var HOST_SUFFIX="($|[.:[\\s>+~])";_exports.HOST_SUFFIX=HOST_SUFFIX;var commonRegex={VAR_ASSIGN:VAR_ASSIGN,MIXIN_MATCH:MIXIN_MATCH,VAR_CONSUMED:VAR_CONSUMED,ANIMATION_MATCH:ANIMATION_MATCH,MEDIA_MATCH:MEDIA_MATCH,IS_VAR:IS_VAR,BRACKETED:BRACKETED,HOST_PREFIX:HOST_PREFIX,HOST_SUFFIX:HOST_SUFFIX};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$commonRegex=commonRegex;"use strict";/** @type {!Set<string>} */var styleTextSet=new Set,scopingAttribute="shady-unscoped";_exports.scopingAttribute=scopingAttribute;/**
                                                   * Add a specifically-marked style to the document directly, and only one copy of that style.
                                                   *
                                                   * @param {!HTMLStyleElement} style
                                                   * @return {undefined}
                                                   */function processUnscopedStyle(style){var text=style.textContent;if(!styleTextSet.has(text)){styleTextSet.add(text);var newStyle=document.createElement("style");newStyle.setAttribute("shady-unscoped","");newStyle.textContent=text;document.head.appendChild(newStyle)}}/**
   * Check if a style is supposed to be unscoped
   * @param {!HTMLStyleElement} style
   * @return {boolean} true if the style has the unscoping attribute
   */function isUnscopedStyle(style){return style.hasAttribute(scopingAttribute)}var unscopedStyleHandler={scopingAttribute:scopingAttribute,processUnscopedStyle:processUnscopedStyle,isUnscopedStyle:isUnscopedStyle};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$unscopedStyleHandler=unscopedStyleHandler;"use strict";function toCssText(rules,callback){if(!rules){return""}if("string"===typeof rules){rules=parse(rules)}if(callback){forEachRule(rules,callback)}return stringify(rules,nativeCssVariables)}/**
   * @param {HTMLStyleElement} style
   * @return {StyleNode}
   */function rulesForStyle(style){if(!style.__cssRules&&style.textContent){style.__cssRules=parse(style.textContent)}return style.__cssRules||null}// Tests if a rule is a keyframes selector, which looks almost exactly
// like a normal selector but is not (it has nothing to do with scoping
// for example).
/**
 * @param {StyleNode} rule
 * @return {boolean}
 */function isKeyframesSelector(rule){return!!rule.parent&&rule.parent.type===types.KEYFRAMES_RULE}/**
   * @param {StyleNode} node
   * @param {Function=} styleRuleCallback
   * @param {Function=} keyframesRuleCallback
   * @param {boolean=} onlyActiveRules
   */function forEachRule(node,styleRuleCallback,keyframesRuleCallback,onlyActiveRules){if(!node){return}var skipRules=!1,type=node.type;if(onlyActiveRules){if(type===types.MEDIA_RULE){var matchMedia=node.selector.match(MEDIA_MATCH);if(matchMedia){// if rule is a non matching @media rule, skip subrules
if(!window.matchMedia(matchMedia[1]).matches){skipRules=!0}}}}if(type===types.STYLE_RULE){styleRuleCallback(node)}else if(keyframesRuleCallback&&type===types.KEYFRAMES_RULE){keyframesRuleCallback(node)}else if(type===types.MIXIN_RULE){skipRules=!0}var r$=node.rules;if(r$&&!skipRules){for(var i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){forEachRule(r,styleRuleCallback,keyframesRuleCallback,onlyActiveRules)}}}// add a string of cssText to the document.
/**
 * @param {string} cssText
 * @param {string} moniker
 * @param {Node} target
 * @param {Node} contextNode
 * @return {HTMLStyleElement}
 */function applyCss(cssText,moniker,target,contextNode){var style=createScopeStyle(cssText,moniker);applyStyle(style,target,contextNode);return style}/**
   * @param {string} cssText
   * @param {string} moniker
   * @return {!HTMLStyleElement}
   */function createScopeStyle(cssText,moniker){var style=/** @type {HTMLStyleElement} */document.createElement("style");if(moniker){style.setAttribute("scope",moniker)}style.textContent=cssText;return style}/**
   * Track the position of the last added style for placing placeholders
   * @type {Node}
   */var lastHeadApplyNode=null;// insert a comment node as a styling position placeholder.
/**
 * @param {string} moniker
 * @return {!Comment}
 */function applyStylePlaceHolder(moniker){var placeHolder=document.createComment(" Shady DOM styles for "+moniker+" "),after=lastHeadApplyNode?lastHeadApplyNode.nextSibling:null,scope=document.head;scope.insertBefore(placeHolder,after||scope.firstChild);lastHeadApplyNode=placeHolder;return placeHolder}/**
   * @param {HTMLStyleElement} style
   * @param {?Node} target
   * @param {?Node} contextNode
   */function applyStyle(style,target,contextNode){target=target||document.head;var after=contextNode&&contextNode.nextSibling||target.firstChild;target.insertBefore(style,after);if(!lastHeadApplyNode){lastHeadApplyNode=style}else{// only update lastHeadApplyNode if the new style is inserted after the old lastHeadApplyNode
var position=style.compareDocumentPosition(lastHeadApplyNode);if(position===Node.DOCUMENT_POSITION_PRECEDING){lastHeadApplyNode=style}}}/**
   * @param {string} buildType
   * @return {boolean}
   */function isTargetedBuild(buildType){return nativeShadow?"shadow"===buildType:"shady"===buildType}/**
   * Walk from text[start] matching parens and
   * returns position of the outer end paren
   * @param {string} text
   * @param {number} start
   * @return {number}
   */function findMatchingParen(text,start){for(var level=0,i=start,l=text.length;i<l;i++){if("("===text[i]){level++}else if(")"===text[i]){if(0===--level){return i}}}return-1}/**
   * @param {string} str
   * @param {function(string, string, string, string)} callback
   */function processVariableAndFallback(str,callback){// find 'var('
var start=str.indexOf("var(");if(-1===start){// no var?, everything is prefix
return callback(str,"","","")}//${prefix}var(${inner})${suffix}
var end=findMatchingParen(str,start+3),inner=str.substring(start+4,end),prefix=str.substring(0,start),suffix=processVariableAndFallback(str.substring(end+1),callback),comma=inner.indexOf(",");// value and fallback args should be trimmed to match in property lookup
if(-1===comma){// variable, no fallback
return callback(prefix,inner.trim(),"",suffix)}// var(${value},${fallback})
var value=inner.substring(0,comma).trim(),fallback=inner.substring(comma+1).trim();return callback(prefix,value,fallback,suffix)}/**
   * @param {Element} element
   * @param {string} value
   */function setElementClassRaw(element,value){// use native setAttribute provided by ShadyDOM when setAttribute is patched
if(nativeShadow){element.setAttribute("class",value)}else{window.ShadyDOM.nativeMethods.setAttribute.call(element,"class",value)}}/**
   * @type {function(*):*}
   */var wrap=window.ShadyDOM&&window.ShadyDOM.wrap||function(node){return node};/**
                                                                                         * @param {Element | {is: string, extends: string}} element
                                                                                         * @return {{is: string, typeExtension: string}}
                                                                                         */_exports.wrap$1=wrap;function getIsExtends(element){var localName=element.localName,is="",typeExtension="";/*
                          NOTE: technically, this can be wrong for certain svg elements
                          with `-` in the name like `<font-face>`
                          */if(localName){if(-1<localName.indexOf("-")){is=localName}else{typeExtension=localName;is=element.getAttribute&&element.getAttribute("is")||""}}else{is=/** @type {?} */element.is;typeExtension=/** @type {?} */element.extends}return{is:is,typeExtension:typeExtension}}/**
   * @param {Element|DocumentFragment} element
   * @return {string}
   */function gatherStyleText(element){/** @type {!Array<string>} */for(var styleTextParts=[],styles=/** @type {!NodeList<!HTMLStyleElement>} */element.querySelectorAll("style"),i=0,style;i<styles.length;i++){style=styles[i];if(isUnscopedStyle(style)){if(!nativeShadow){processUnscopedStyle(style);style.parentNode.removeChild(style)}}else{styleTextParts.push(style.textContent);style.parentNode.removeChild(style)}}return styleTextParts.join("").trim()}/**
   * Split a selector separated by commas into an array in a smart way
   * @param {string} selector
   * @return {!Array<string>}
   */function splitSelectorList(selector){for(var parts=[],part="",i=0;0<=i&&i<selector.length;i++){// A selector with parentheses will be one complete part
if("("===selector[i]){// find the matching paren
var end=findMatchingParen(selector,i);// push the paren block into the part
part+=selector.slice(i,end+1);// move the index to after the paren block
i=end}else if(","===selector[i]){parts.push(part);part=""}else{part+=selector[i]}}// catch any pieces after the last comma
if(part){parts.push(part)}return parts}var CSS_BUILD_ATTR="css-build";/**
                                     * Return the polymer-css-build "build type" applied to this element
                                     *
                                     * @param {!HTMLElement} element
                                     * @return {string} Can be "", "shady", or "shadow"
                                     */function getCssBuild(element){if(cssBuild!==void 0){return(/** @type {string} */cssBuild)}if(element.__cssBuild===void 0){// try attribute first, as it is the common case
var attrValue=element.getAttribute(CSS_BUILD_ATTR);if(attrValue){element.__cssBuild=attrValue}else{var buildComment=getBuildComment(element);if(""!==buildComment){// remove build comment so it is not needlessly copied into every element instance
removeBuildComment(element)}element.__cssBuild=buildComment}}return element.__cssBuild||""}/**
   * Check if the given element, either a <template> or <style>, has been processed
   * by polymer-css-build.
   *
   * If so, then we can make a number of optimizations:
   * - polymer-css-build will decompose mixins into individual CSS Custom Properties,
   * so the ApplyShim can be skipped entirely.
   * - Under native ShadowDOM, the style text can just be copied into each instance
   * without modification
   * - If the build is "shady" and ShadyDOM is in use, the styling does not need
   * scoping beyond the shimming of CSS Custom Properties
   *
   * @param {!HTMLElement} element
   * @return {boolean}
   */function elementHasBuiltCss(element){return""!==getCssBuild(element)}/**
   * For templates made with tagged template literals, polymer-css-build will
   * insert a comment of the form `<!--css-build:shadow-->`
   *
   * @param {!HTMLElement} element
   * @return {string}
   */function getBuildComment(element){var buildComment="template"===element.localName?/** @type {!HTMLTemplateElement} */element.content.firstChild:element.firstChild;if(babelHelpers.instanceof(buildComment,Comment)){var commentParts=buildComment.textContent.trim().split(":");if(commentParts[0]===CSS_BUILD_ATTR){return commentParts[1]}}return""}/**
   * Check if the css build status is optimal, and do no unneeded work.
   *
   * @param {string=} cssBuild CSS build status
   * @return {boolean} css build is optimal or not
   */function isOptimalCssBuild(){var cssBuild=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"";// CSS custom property shim always requires work
if(""===cssBuild||!nativeCssVariables){return!1}return nativeShadow?"shadow"===cssBuild:"shady"===cssBuild}/**
   * @param {!HTMLElement} element
   */function removeBuildComment(element){var buildComment="template"===element.localName?/** @type {!HTMLTemplateElement} */element.content.firstChild:element.firstChild;buildComment.parentNode.removeChild(buildComment)}var styleUtil={toCssText:toCssText,rulesForStyle:rulesForStyle,isKeyframesSelector:isKeyframesSelector,forEachRule:forEachRule,applyCss:applyCss,createScopeStyle:createScopeStyle,applyStylePlaceHolder:applyStylePlaceHolder,applyStyle:applyStyle,isTargetedBuild:isTargetedBuild,findMatchingParen:findMatchingParen,processVariableAndFallback:processVariableAndFallback,setElementClassRaw:setElementClassRaw,wrap:wrap,getIsExtends:getIsExtends,gatherStyleText:gatherStyleText,splitSelectorList:splitSelectorList,getCssBuild:getCssBuild,elementHasBuiltCss:elementHasBuiltCss,getBuildComment:getBuildComment,isOptimalCssBuild:isOptimalCssBuild};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$styleUtil=styleUtil;"use strict";function updateNativeProperties(element,properties){// remove previous properties
for(var _p2 in properties){// NOTE: for bc with shim, don't apply null values.
if(null===_p2){element.style.removeProperty(_p2)}else{element.style.setProperty(_p2,properties[_p2])}}}/**
   * @param {Element} element
   * @param {string} property
   * @return {string}
   */function _getComputedStyleValue(element,property){/**
   * @const {string}
   */var value=window.getComputedStyle(element).getPropertyValue(property);if(!value){return""}else{return value.trim()}}/**
   * return true if `cssText` contains a mixin definition or consumption
   * @param {string} cssText
   * @return {boolean}
   */function _detectMixin(cssText){var has=MIXIN_MATCH.test(cssText)||VAR_ASSIGN.test(cssText);// reset state of the regexes
MIXIN_MATCH.lastIndex=0;VAR_ASSIGN.lastIndex=0;return has}var commonUtils={updateNativeProperties:updateNativeProperties,getComputedStyleValue:_getComputedStyleValue,detectMixin:_detectMixin};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */ /*
       * The apply shim simulates the behavior of `@apply` proposed at
       * https://tabatkins.github.io/specs/css-apply-rule/.
       * The approach is to convert a property like this:
       *
       *    --foo: {color: red; background: blue;}
       *
       * to this:
       *
       *    --foo_-_color: red;
       *    --foo_-_background: blue;
       *
       * Then where `@apply --foo` is used, that is converted to:
       *
       *    color: var(--foo_-_color);
       *    background: var(--foo_-_background);
       *
       * This approach generally works but there are some issues and limitations.
       * Consider, for example, that somewhere *between* where `--foo` is set and used,
       * another element sets it to:
       *
       *    --foo: { border: 2px solid red; }
       *
       * We must now ensure that the color and background from the previous setting
       * do not apply. This is accomplished by changing the property set to this:
       *
       *    --foo_-_border: 2px solid red;
       *    --foo_-_color: initial;
       *    --foo_-_background: initial;
       *
       * This works but introduces one new issue.
       * Consider this setup at the point where the `@apply` is used:
       *
       *    background: orange;
       *    `@apply` --foo;
       *
       * In this case the background will be unset (initial) rather than the desired
       * `orange`. We address this by altering the property set to use a fallback
       * value like this:
       *
       *    color: var(--foo_-_color);
       *    background: var(--foo_-_background, orange);
       *    border: var(--foo_-_border);
       *
       * Note that the default is retained in the property set and the `background` is
       * the desired `orange`. This leads us to a limitation.
       *
       * Limitation 1:
      
       * Only properties in the rule where the `@apply`
       * is used are considered as default values.
       * If another rule matches the element and sets `background` with
       * less specificity than the rule in which `@apply` appears,
       * the `background` will not be set.
       *
       * Limitation 2:
       *
       * When using Polymer's `updateStyles` api, new properties may not be set for
       * `@apply` properties.
      
      */_exports.$commonUtils=commonUtils;"use strict";var APPLY_NAME_CLEAN=/;\s*/m,INITIAL_INHERIT=/^\s*(initial)|(inherit)\s*$/,IMPORTANT=/\s*!important/,MIXIN_VAR_SEP="_-_",PropertyEntry,DependantsEntry,MixinMapEntry,MixinMap=/*#__PURE__*/function(){function MixinMap(){babelHelpers.classCallCheck(this,MixinMap);/** @type {!Object<string, !MixinMapEntry>} */this._map={}}/**
     * @param {string} name
     * @param {!PropertyEntry} props
     */babelHelpers.createClass(MixinMap,[{key:"set",value:function set(name,props){name=name.trim();this._map[name]={properties:props,dependants:{}}}/**
     * @param {string} name
     * @return {MixinMapEntry}
     */},{key:"get",value:function get(name){name=name.trim();return this._map[name]||null}}]);return MixinMap}(),invalidCallback=null,ApplyShim=/*#__PURE__*/function(){function ApplyShim(){babelHelpers.classCallCheck(this,ApplyShim);/** @type {?string} */this._currentElement=null;/** @type {HTMLMetaElement} */this._measureElement=null;this._map=new MixinMap}/**
     * return true if `cssText` contains a mixin definition or consumption
     * @param {string} cssText
     * @return {boolean}
     */babelHelpers.createClass(ApplyShim,[{key:"detectMixin",value:function detectMixin(cssText){return _detectMixin(cssText)}/**
     * Gather styles into one style for easier processing
     * @param {!HTMLTemplateElement} template
     * @return {HTMLStyleElement}
     */},{key:"gatherStyles",value:function gatherStyles(template){var styleText=gatherStyleText(template.content);if(styleText){var style=/** @type {!HTMLStyleElement} */document.createElement("style");style.textContent=styleText;template.content.insertBefore(style,template.content.firstChild);return style}return null}/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @return {StyleNode}
     */},{key:"transformTemplate",value:function transformTemplate(template,elementName){if(template._gatheredStyle===void 0){template._gatheredStyle=this.gatherStyles(template)}/** @type {HTMLStyleElement} */var style=template._gatheredStyle;return style?this.transformStyle(style,elementName):null}/**
     * @param {!HTMLStyleElement} style
     * @param {string} elementName
     * @return {StyleNode}
     */},{key:"transformStyle",value:function transformStyle(style){var elementName=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"",ast=rulesForStyle(style);this.transformRules(ast,elementName);style.textContent=toCssText(ast);return ast}/**
     * @param {!HTMLStyleElement} style
     * @return {StyleNode}
     */},{key:"transformCustomStyle",value:function transformCustomStyle(style){var _this=this,ast=rulesForStyle(style);forEachRule(ast,function(rule){if(":root"===rule.selector){rule.selector="html"}_this.transformRule(rule)});style.textContent=toCssText(ast);return ast}/**
     * @param {StyleNode} rules
     * @param {string} elementName
     */},{key:"transformRules",value:function transformRules(rules,elementName){var _this2=this;this._currentElement=elementName;forEachRule(rules,function(r){_this2.transformRule(r)});this._currentElement=null}/**
     * @param {!StyleNode} rule
     */},{key:"transformRule",value:function transformRule(rule){rule.cssText=this.transformCssText(rule.parsedCssText,rule);// :root was only used for variable assignment in property shim,
// but generates invalid selectors with real properties.
// replace with `:host > *`, which serves the same effect
if(":root"===rule.selector){rule.selector=":host > *"}}/**
     * @param {string} cssText
     * @param {!StyleNode} rule
     * @return {string}
     */},{key:"transformCssText",value:function transformCssText(cssText,rule){var _this3=this;// produce variables
cssText=cssText.replace(VAR_ASSIGN,function(matchText,propertyName,valueProperty,valueMixin){return _this3._produceCssProperties(matchText,propertyName,valueProperty,valueMixin,rule)});// consume mixins
return this._consumeCssProperties(cssText,rule)}/**
     * @param {string} property
     * @return {string}
     */},{key:"_getInitialValueForProperty",value:function _getInitialValueForProperty(property){if(!this._measureElement){this._measureElement=/** @type {HTMLMetaElement} */document.createElement("meta");this._measureElement.setAttribute("apply-shim-measure","");this._measureElement.style.all="initial";document.head.appendChild(this._measureElement)}return window.getComputedStyle(this._measureElement).getPropertyValue(property)}/**
     * Walk over all rules before this rule to find fallbacks for mixins
     *
     * @param {!StyleNode} startRule
     * @return {!Object}
     */},{key:"_fallbacksFromPreviousRules",value:function _fallbacksFromPreviousRules(startRule){var _this4=this,topRule=startRule;while(topRule.parent){topRule=topRule.parent}var fallbacks={},seenStartRule=!1;forEachRule(topRule,function(r){// stop when we hit the input rule
seenStartRule=seenStartRule||r===startRule;if(seenStartRule){return}// NOTE: Only matching selectors are "safe" for this fallback processing
// It would be prohibitive to run `matchesSelector()` on each selector,
// so we cheat and only check if the same selector string is used, which
// guarantees things like specificity matching
if(r.selector===startRule.selector){Object.assign(fallbacks,_this4._cssTextToMap(r.parsedCssText))}});return fallbacks}/**
     * replace mixin consumption with variable consumption
     * @param {string} text
     * @param {!StyleNode=} rule
     * @return {string}
     */},{key:"_consumeCssProperties",value:function _consumeCssProperties(text,rule){/** @type {Array} */var m=null;// loop over text until all mixins with defintions have been applied
while(m=MIXIN_MATCH.exec(text)){var matchText=m[0],mixinName=m[1],idx=m.index,applyPos=idx+matchText.indexOf("@apply"),afterApplyPos=idx+matchText.length,textBeforeApply=text.slice(0,applyPos),textAfterApply=text.slice(afterApplyPos),defaults=rule?this._fallbacksFromPreviousRules(rule):{};Object.assign(defaults,this._cssTextToMap(textBeforeApply));var replacement=this._atApplyToCssProperties(mixinName,defaults);// use regex match position to replace mixin, keep linear processing time
text="".concat(textBeforeApply).concat(replacement).concat(textAfterApply);// move regex search to _after_ replacement
MIXIN_MATCH.lastIndex=idx+replacement.length}return text}/**
     * produce variable consumption at the site of mixin consumption
     * `@apply` --foo; -> for all props (${propname}: var(--foo_-_${propname}, ${fallback[propname]}}))
     * Example:
     *  border: var(--foo_-_border); padding: var(--foo_-_padding, 2px)
     *
     * @param {string} mixinName
     * @param {Object} fallbacks
     * @return {string}
     */},{key:"_atApplyToCssProperties",value:function _atApplyToCssProperties(mixinName,fallbacks){mixinName=mixinName.replace(APPLY_NAME_CLEAN,"");var vars=[],mixinEntry=this._map.get(mixinName);// if we depend on a mixin before it is created
// make a sentinel entry in the map to add this element as a dependency for when it is defined.
if(!mixinEntry){this._map.set(mixinName,{});mixinEntry=this._map.get(mixinName)}if(mixinEntry){if(this._currentElement){mixinEntry.dependants[this._currentElement]=!0}var _p3,parts,f,properties=mixinEntry.properties;for(_p3 in properties){f=fallbacks&&fallbacks[_p3];parts=[_p3,": var(",mixinName,MIXIN_VAR_SEP,_p3];if(f){parts.push(",",f.replace(IMPORTANT,""))}parts.push(")");if(IMPORTANT.test(properties[_p3])){parts.push(" !important")}vars.push(parts.join(""))}}return vars.join("; ")}/**
     * @param {string} property
     * @param {string} value
     * @return {string}
     */},{key:"_replaceInitialOrInherit",value:function _replaceInitialOrInherit(property,value){var match=INITIAL_INHERIT.exec(value);if(match){if(match[1]){// initial
// replace `initial` with the concrete initial value for this property
value=this._getInitialValueForProperty(property)}else{// inherit
// with this purposfully illegal value, the variable will be invalid at
// compute time (https://www.w3.org/TR/css-variables/#invalid-at-computed-value-time)
// and for inheriting values, will behave similarly
// we cannot support the same behavior for non inheriting values like 'border'
value="apply-shim-inherit"}}return value}/**
     * "parse" a mixin definition into a map of properties and values
     * cssTextToMap('border: 2px solid black') -> ('border', '2px solid black')
     * @param {string} text
     * @param {boolean=} replaceInitialOrInherit
     * @return {!Object<string, string>}
     */},{key:"_cssTextToMap",value:function _cssTextToMap(text){for(var replaceInitialOrInherit=1<arguments.length&&arguments[1]!==void 0?arguments[1]:!1,props=text.split(";"),property,value,out={},i=0,_p4,sp;i<props.length;i++){_p4=props[i];if(_p4){sp=_p4.split(":");// ignore lines that aren't definitions like @media
if(1<sp.length){property=sp[0].trim();// some properties may have ':' in the value, like data urls
value=sp.slice(1).join(":");if(replaceInitialOrInherit){value=this._replaceInitialOrInherit(property,value)}out[property]=value}}}return out}/**
     * @param {MixinMapEntry} mixinEntry
     */},{key:"_invalidateMixinEntry",value:function _invalidateMixinEntry(mixinEntry){if(!invalidCallback){return}for(var elementName in mixinEntry.dependants){if(elementName!==this._currentElement){invalidCallback(elementName)}}}/**
     * @param {string} matchText
     * @param {string} propertyName
     * @param {?string} valueProperty
     * @param {?string} valueMixin
     * @param {!StyleNode} rule
     * @return {string}
     */},{key:"_produceCssProperties",value:function _produceCssProperties(matchText,propertyName,valueProperty,valueMixin,rule){var _this5=this;// handle case where property value is a mixin
if(valueProperty){// form: --mixin2: var(--mixin1), where --mixin1 is in the map
processVariableAndFallback(valueProperty,function(prefix,value){if(value&&_this5._map.get(value)){valueMixin="@apply ".concat(value,";")}})}if(!valueMixin){return matchText}var mixinAsProperties=this._consumeCssProperties(""+valueMixin,rule),prefix=matchText.slice(0,matchText.indexOf("--")),mixinValues=this._cssTextToMap(mixinAsProperties,!0),combinedProps=mixinValues,mixinEntry=this._map.get(propertyName),oldProps=mixinEntry&&mixinEntry.properties;if(oldProps){// NOTE: since we use mixin, the map of properties is updated here
// and this is what we want.
combinedProps=Object.assign(Object.create(oldProps),mixinValues)}else{this._map.set(propertyName,combinedProps)}var out=[],p,v,needToInvalidate=!1;for(p in combinedProps){v=mixinValues[p];// if property not defined by current mixin, set initial
if(v===void 0){v="initial"}if(oldProps&&!(p in oldProps)){needToInvalidate=!0}out.push("".concat(propertyName).concat(MIXIN_VAR_SEP).concat(p,": ").concat(v))}if(needToInvalidate){this._invalidateMixinEntry(mixinEntry)}if(mixinEntry){mixinEntry.properties=combinedProps}// because the mixinMap is global, the mixin might conflict with
// a different scope's simple variable definition:
// Example:
// some style somewhere:
// --mixin1:{ ... }
// --mixin2: var(--mixin1);
// some other element:
// --mixin1: 10px solid red;
// --foo: var(--mixin1);
// In this case, we leave the original variable definition in place.
if(valueProperty){prefix="".concat(matchText,";").concat(prefix)}return"".concat(prefix).concat(out.join("; "),";")}}]);return ApplyShim}();_exports.$applyShimDefault=ApplyShim;/* exports */ /* eslint-disable no-self-assign */ApplyShim.prototype.detectMixin=ApplyShim.prototype.detectMixin;ApplyShim.prototype.transformStyle=ApplyShim.prototype.transformStyle;ApplyShim.prototype.transformCustomStyle=ApplyShim.prototype.transformCustomStyle;ApplyShim.prototype.transformRules=ApplyShim.prototype.transformRules;ApplyShim.prototype.transformRule=ApplyShim.prototype.transformRule;ApplyShim.prototype.transformTemplate=ApplyShim.prototype.transformTemplate;ApplyShim.prototype._separator=MIXIN_VAR_SEP;/* eslint-enable no-self-assign */Object.defineProperty(ApplyShim.prototype,"invalidCallback",{/** @return {?function(string)} */get:function get(){return invalidCallback},/** @param {?function(string)} cb */set:function set(cb){invalidCallback=cb}});var applyShim={default:ApplyShim};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$applyShim$1=applyShim;"use strict";/**
               * @const {!Object<string, !HTMLTemplateElement>}
               */var templateMap={};_exports.$templateMapDefault=templateMap;var templateMap$1={default:templateMap};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$templateMap=templateMap$1;"use strict";/*
               * Utilities for handling invalidating apply-shim mixins for a given template.
               *
               * The invalidation strategy involves keeping track of the "current" version of a template's mixins, and updating that count when a mixin is invalidated.
               * The template
               */ /** @const {string} */var CURRENT_VERSION="_applyShimCurrentVersion",NEXT_VERSION="_applyShimNextVersion",VALIDATING_VERSION="_applyShimValidatingVersion",promise=Promise.resolve();/** @const {string} */ /**
                                    * @param {string} elementName
                                    */function invalidate(elementName){var template=templateMap[elementName];if(template){invalidateTemplate(template)}}/**
   * This function can be called multiple times to mark a template invalid
   * and signal that the style inside must be regenerated.
   *
   * Use `startValidatingTemplate` to begin an asynchronous validation cycle.
   * During that cycle, call `templateIsValidating` to see if the template must
   * be revalidated
   * @param {HTMLTemplateElement} template
   */function invalidateTemplate(template){// default the current version to 0
template[CURRENT_VERSION]=template[CURRENT_VERSION]||0;// ensure the "validating for" flag exists
template[VALIDATING_VERSION]=template[VALIDATING_VERSION]||0;// increment the next version
template[NEXT_VERSION]=(template[NEXT_VERSION]||0)+1}/**
   * @param {string} elementName
   * @return {boolean}
   */function isValid(elementName){var template=templateMap[elementName];if(template){return templateIsValid(template)}return!0}/**
   * @param {HTMLTemplateElement} template
   * @return {boolean}
   */function templateIsValid(template){return template[CURRENT_VERSION]===template[NEXT_VERSION]}/**
   * @param {string} elementName
   * @return {boolean}
   */function isValidating(elementName){var template=templateMap[elementName];if(template){return templateIsValidating(template)}return!1}/**
   * Returns true if the template is currently invalid and `startValidating` has been called since the last invalidation.
   * If false, the template must be validated.
   * @param {HTMLTemplateElement} template
   * @return {boolean}
   */function templateIsValidating(template){return!templateIsValid(template)&&template[VALIDATING_VERSION]===template[NEXT_VERSION]}/**
   * the template is marked as `validating` for one microtask so that all instances
   * found in the tree crawl of `applyStyle` will update themselves,
   * but the template will only be updated once.
   * @param {string} elementName
  */function startValidating(elementName){var template=templateMap[elementName];startValidatingTemplate(template)}/**
   * Begin an asynchronous invalidation cycle.
   * This should be called after every validation of a template
   *
   * After one microtask, the template will be marked as valid until the next call to `invalidateTemplate`
   * @param {HTMLTemplateElement} template
   */function startValidatingTemplate(template){// remember that the current "next version" is the reason for this validation cycle
template[VALIDATING_VERSION]=template[NEXT_VERSION];// however, there only needs to be one async task to clear the counters
if(!template._validating){template._validating=!0;promise.then(function(){// sync the current version to let future invalidations cause a refresh cycle
template[CURRENT_VERSION]=template[NEXT_VERSION];template._validating=!1})}}/**
   * @return {boolean}
   */function elementsAreInvalid(){for(var elementName in templateMap){var template=templateMap[elementName];if(!templateIsValid(template)){return!0}}return!1}var applyShimUtils={invalidate:invalidate,invalidateTemplate:invalidateTemplate,isValid:isValid,templateIsValid:templateIsValid,isValidating:isValidating,templateIsValidating:templateIsValidating,startValidating:startValidating,startValidatingTemplate:startValidatingTemplate,elementsAreInvalid:elementsAreInvalid};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$applyShimUtils=applyShimUtils;"use strict";/** @type {Promise<void>} */var readyPromise=null,whenReady=window.HTMLImports&&window.HTMLImports.whenReady||null,resolveFn;/** @type {?function(?function())} */ /**
                * @param {?function()} callback
                */function documentWait(callback){requestAnimationFrame(function(){if(whenReady){whenReady(callback)}else{if(!readyPromise){readyPromise=new Promise(function(resolve){resolveFn=resolve});if("complete"===document.readyState){resolveFn()}else{document.addEventListener("readystatechange",function(){if("complete"===document.readyState){resolveFn()}})}}readyPromise.then(function(){callback&&callback()})}})}var documentWait$1={default:documentWait};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$documentWait=documentWait$1;"use strict";var CustomStyleProvider;_exports.CustomStyleProvider=CustomStyleProvider;var SEEN_MARKER="__seenByShadyCSS",CACHED_STYLE="__shadyCSSCachedStyle",transformFn=null,validateFn=null,CustomStyleInterface=/*#__PURE__*/function(){function CustomStyleInterface(){babelHelpers.classCallCheck(this,CustomStyleInterface);/** @type {!Array<!CustomStyleProvider>} */this.customStyles=[];this.enqueued=!1;// NOTE(dfreedm): use quotes here to prevent closure inlining to `function(){}`;
documentWait(function(){if(window.ShadyCSS.flushCustomStyles){window.ShadyCSS.flushCustomStyles()}})}/**
     * Queue a validation for new custom styles to batch style recalculations
     */babelHelpers.createClass(CustomStyleInterface,[{key:"enqueueDocumentValidation",value:function enqueueDocumentValidation(){if(this.enqueued||!validateFn){return}this.enqueued=!0;documentWait(validateFn)}/**
     * @param {!HTMLStyleElement} style
     */},{key:"addCustomStyle",value:function addCustomStyle(style){if(!style[SEEN_MARKER]){style[SEEN_MARKER]=!0;this.customStyles.push(style);this.enqueueDocumentValidation()}}/**
     * @param {!CustomStyleProvider} customStyle
     * @return {HTMLStyleElement}
     */},{key:"getStyleForCustomStyle",value:function getStyleForCustomStyle(customStyle){if(customStyle[CACHED_STYLE]){return customStyle[CACHED_STYLE]}var style;if(customStyle.getStyle){style=customStyle.getStyle()}else{style=customStyle}return style}/**
     * @return {!Array<!CustomStyleProvider>}
     */},{key:"processStyles",value:function processStyles(){for(var cs=this.customStyles,i=0,_customStyle;i<cs.length;i++){_customStyle=cs[i];if(_customStyle[CACHED_STYLE]){continue}var style=this.getStyleForCustomStyle(_customStyle);if(style){// HTMLImports polyfill may have cloned the style into the main document,
// which is referenced with __appliedElement.
var styleToTransform=/** @type {!HTMLStyleElement} */style.__appliedElement||style;if(transformFn){transformFn(styleToTransform)}_customStyle[CACHED_STYLE]=styleToTransform}}return cs}}]);return CustomStyleInterface}();_exports.$customStyleInterfaceDefault=CustomStyleInterface;/* eslint-disable no-self-assign */CustomStyleInterface.prototype.addCustomStyle=CustomStyleInterface.prototype.addCustomStyle;CustomStyleInterface.prototype.getStyleForCustomStyle=CustomStyleInterface.prototype.getStyleForCustomStyle;CustomStyleInterface.prototype.processStyles=CustomStyleInterface.prototype.processStyles;/* eslint-enable no-self-assign */Object.defineProperties(CustomStyleInterface.prototype,{transformCallback:{/** @return {?function(!HTMLStyleElement)} */get:function get(){return transformFn},/** @param {?function(!HTMLStyleElement)} fn */set:function set(fn){transformFn=fn}},validateCallback:{/** @return {?function()} */get:function get(){return validateFn},/**
     * @param {?function()} fn
     * @this {CustomStyleInterface}
     */set:function set(fn){var needsEnqueue=!1;if(!validateFn){needsEnqueue=!0}validateFn=fn;if(needsEnqueue){this.enqueueDocumentValidation()}}}});/** @typedef {{
     * customStyles: !Array<!CustomStyleProvider>,
     * addCustomStyle: function(!CustomStyleProvider),
     * getStyleForCustomStyle: function(!CustomStyleProvider): HTMLStyleElement,
     * findStyles: function(),
     * transformCallback: ?function(!HTMLStyleElement),
     * validateCallback: ?function()
     * }}
     */var CustomStyleInterfaceInterface={};_exports.CustomStyleInterfaceInterface=CustomStyleInterfaceInterface;var customStyleInterface={CustomStyleProvider:CustomStyleProvider,default:CustomStyleInterface,CustomStyleInterfaceInterface:CustomStyleInterfaceInterface};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$customStyleInterface$1=customStyleInterface;"use strict";var applyShim$1=new ApplyShim,ApplyShimInterface=/*#__PURE__*/function(){function ApplyShimInterface(){babelHelpers.classCallCheck(this,ApplyShimInterface);/** @type {?CustomStyleInterfaceInterface} */this.customStyleInterface=null;applyShim$1.invalidCallback=invalidate}babelHelpers.createClass(ApplyShimInterface,[{key:"ensure",value:function ensure(){var _this6=this;if(this.customStyleInterface){return}if(window.ShadyCSS.CustomStyleInterface){this.customStyleInterface=/** @type {!CustomStyleInterfaceInterface} */window.ShadyCSS.CustomStyleInterface;this.customStyleInterface.transformCallback=function(style){applyShim$1.transformCustomStyle(style)};this.customStyleInterface.validateCallback=function(){requestAnimationFrame(function(){if(_this6.customStyleInterface.enqueued){_this6.flushCustomStyles()}})}}}/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     */},{key:"prepareTemplate",value:function prepareTemplate(template,elementName){this.ensure();if(elementHasBuiltCss(template)){return}templateMap[elementName]=template;var ast=applyShim$1.transformTemplate(template,elementName);// save original style ast to use for revalidating instances
template._styleAst=ast}},{key:"flushCustomStyles",value:function flushCustomStyles(){this.ensure();if(!this.customStyleInterface){return}var styles=this.customStyleInterface.processStyles();if(!this.customStyleInterface.enqueued){return}for(var i=0;i<styles.length;i++){var cs=styles[i],style=this.customStyleInterface.getStyleForCustomStyle(cs);if(style){applyShim$1.transformCustomStyle(style)}}this.customStyleInterface.enqueued=!1}/**
     * @param {HTMLElement} element
     * @param {Object=} properties
     */},{key:"styleSubtree",value:function styleSubtree(element,properties){this.ensure();if(properties){updateNativeProperties(element,properties)}if(element.shadowRoot){this.styleElement(element);for(var shadowChildren=/** @type {!ParentNode} */element.shadowRoot.children||element.shadowRoot.childNodes,i=0;i<shadowChildren.length;i++){this.styleSubtree(/** @type {HTMLElement} */shadowChildren[i])}}else{for(var children=element.children||element.childNodes,_i=0;_i<children.length;_i++){this.styleSubtree(/** @type {HTMLElement} */children[_i])}}}/**
     * @param {HTMLElement} element
     */},{key:"styleElement",value:function styleElement(element){this.ensure();var _getIsExtends=getIsExtends(element),is=_getIsExtends.is,template=templateMap[is];if(template&&elementHasBuiltCss(template)){return}if(template&&!templateIsValid(template)){// only revalidate template once
if(!templateIsValidating(template)){this.prepareTemplate(template,is);startValidatingTemplate(template)}// update this element instance
var _root=element.shadowRoot;if(_root){var style=/** @type {HTMLStyleElement} */_root.querySelector("style");if(style){// reuse the template's style ast, it has all the original css text
style.__cssRules=template._styleAst;style.textContent=toCssText(template._styleAst)}}}}/**
     * @param {Object=} properties
     */},{key:"styleDocument",value:function styleDocument(properties){this.ensure();this.styleSubtree(document.body,properties)}}]);return ApplyShimInterface}();if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){var applyShimInterface=new ApplyShimInterface,_CustomStyleInterface=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;/** @suppress {duplicate} */window.ShadyCSS={/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @param {string=} elementExtends
     */prepareTemplate:function prepareTemplate(template,elementName,elementExtends){// eslint-disable-line no-unused-vars
applyShimInterface.flushCustomStyles();applyShimInterface.prepareTemplate(template,elementName)},/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @param {string=} elementExtends
     */prepareTemplateStyles:function prepareTemplateStyles(template,elementName,elementExtends){window.ShadyCSS.prepareTemplate(template,elementName,elementExtends)},/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     */prepareTemplateDom:function prepareTemplateDom(template,elementName){},// eslint-disable-line no-unused-vars
/**
     * @param {!HTMLElement} element
     * @param {Object=} properties
     */styleSubtree:function styleSubtree(element,properties){applyShimInterface.flushCustomStyles();applyShimInterface.styleSubtree(element,properties)},/**
     * @param {!HTMLElement} element
     */styleElement:function styleElement(element){applyShimInterface.flushCustomStyles();applyShimInterface.styleElement(element)},/**
     * @param {Object=} properties
     */styleDocument:function styleDocument(properties){applyShimInterface.flushCustomStyles();applyShimInterface.styleDocument(properties)},/**
     * @param {Element} element
     * @param {string} property
     * @return {string}
     */getComputedStyleValue:function getComputedStyleValue(element,property){return _getComputedStyleValue(element,property)},flushCustomStyles:function flushCustomStyles(){applyShimInterface.flushCustomStyles()},nativeCss:nativeCssVariables,nativeShadow:nativeShadow,cssBuild:cssBuild,disableRuntime:disableRuntime};if(_CustomStyleInterface){window.ShadyCSS.CustomStyleInterface=_CustomStyleInterface}}window.ShadyCSS.ApplyShim=applyShim$1;/**
                                         @license
                                         Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                                         This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
                                         The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
                                         The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
                                         Code distributed by Google as part of the polymer project is also
                                         subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
                                         */ /* eslint-disable no-unused-vars */ /**
                                                                                 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is replaced by the munged name for object[property]
                                                                                 * We cannot alias this function, so we have to use a small shim that has the same behavior when not compiling.
                                                                                 *
                                                                                 * @param {?} prop Property name
                                                                                 * @param {*} obj Reference object
                                                                                 * @return {string} Potentially renamed property name
                                                                                 */window.JSCompiler_renameProperty=function(prop,obj){return prop};/* eslint-enable */var CSS_URL_RX=/(url\()([^)]*)(\))/g,ABS_URL=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,workingURL,resolveDoc;/**
                 * Resolves the given URL against the provided `baseUri'.
                 *
                 * Note that this function performs no resolution for URLs that start
                 * with `/` (absolute URLs) or `#` (hash identifiers).  For general purpose
                 * URL resolution, use `window.URL`.
                 *
                 * @param {string} url Input URL to resolve
                 * @param {?string=} baseURI Base URI to resolve the URL against
                 * @return {string} resolved URL
                 */function _resolveUrl(url,baseURI){if(url&&ABS_URL.test(url)){return url}if("//"===url){return url}// Lazy feature detection.
if(workingURL===void 0){workingURL=!1;try{var u=new URL("b","http://a");u.pathname="c%20d";workingURL="http://a/c%20d"===u.href}catch(e){// silently fail
}}if(!baseURI){baseURI=document.baseURI||window.location.href}if(workingURL){try{return new URL(url,baseURI).href}catch(e){// Bad url or baseURI structure. Do not attempt to resolve.
return url}}// Fallback to creating an anchor into a disconnected document.
if(!resolveDoc){resolveDoc=document.implementation.createHTMLDocument("temp");resolveDoc.base=resolveDoc.createElement("base");resolveDoc.head.appendChild(resolveDoc.base);resolveDoc.anchor=resolveDoc.createElement("a");resolveDoc.body.appendChild(resolveDoc.anchor)}resolveDoc.base.href=baseURI;resolveDoc.anchor.href=url;return resolveDoc.anchor.href||url}/**
   * Resolves any relative URL's in the given CSS text against the provided
   * `ownerDocument`'s `baseURI`.
   *
   * @param {string} cssText CSS text to process
   * @param {string} baseURI Base URI to resolve the URL against
   * @return {string} Processed CSS text with resolved URL's
   */function resolveCss(cssText,baseURI){return cssText.replace(CSS_URL_RX,function(m,pre,url,post){return pre+"'"+_resolveUrl(url.replace(/["']/g,""),baseURI)+"'"+post})}/**
   * Returns a path from a given `url`. The path includes the trailing
   * `/` from the url.
   *
   * @param {string} url Input URL to transform
   * @return {string} resolved path
   */function pathFromUrl(url){return url.substring(0,url.lastIndexOf("/")+1)}var resolveUrl$1={resolveUrl:_resolveUrl,resolveCss:resolveCss,pathFromUrl:pathFromUrl};_exports.$resolveUrl=resolveUrl$1;var useShadow=!window.ShadyDOM||!window.ShadyDOM.inUse;_exports.useShadow=useShadow;var useNativeCSSProperties=!!(!window.ShadyCSS||window.ShadyCSS.nativeCss);_exports.useNativeCSSProperties=useNativeCSSProperties;var useNativeCustomElements=!window.customElements.polyfillWrapFlushCallback;_exports.useNativeCustomElements=useNativeCustomElements;var supportsAdoptingStyleSheets=useShadow&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&// Since spec may change, feature detect exact API we need
function(){try{var sheet=new CSSStyleSheet;sheet.replaceSync("");var host=document.createElement("div");host.attachShadow({mode:"open"});host.shadowRoot.adoptedStyleSheets=[sheet];return host.shadowRoot.adoptedStyleSheets[0]===sheet}catch(e){return!1}}();/**
       * Globally settable property that is automatically assigned to
       * `ElementMixin` instances, useful for binding in templates to
       * make URL's relative to an application's root.  Defaults to the main
       * document URL, but can be overridden by users.  It may be useful to set
       * `rootPath` to provide a stable application mount path when
       * using client side routing.
       */_exports.supportsAdoptingStyleSheets=supportsAdoptingStyleSheets;var rootPath=window.Polymer&&window.Polymer.rootPath||pathFromUrl(document.baseURI||window.location.href);/**
                                                                                                                           * Sets the global rootPath property used by `ElementMixin` and
                                                                                                                           * available via `rootPath`.
                                                                                                                           *
                                                                                                                           * @param {string} path The new root path
                                                                                                                           * @return {void}
                                                                                                                           */_exports.rootPath=rootPath;var setRootPath=function setRootPath(path){_exports.rootPath=rootPath=path};/**
    * A global callback used to sanitize any value before inserting it into the DOM.
    * The callback signature is:
    *
    *  function sanitizeDOMValue(value, name, type, node) { ... }
    *
    * Where:
    *
    * `value` is the value to sanitize.
    * `name` is the name of an attribute or property (for example, href).
    * `type` indicates where the value is being inserted: one of property, attribute, or text.
    * `node` is the node where the value is being inserted.
    *
    * @type {(function(*,string,string,?Node):*)|undefined}
    */_exports.setRootPath=setRootPath;var sanitizeDOMValue=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;/**
                                                                                               * Sets the global sanitizeDOMValue available via this module's exported
                                                                                               * `sanitizeDOMValue` variable.
                                                                                               *
                                                                                               * @param {(function(*,string,string,?Node):*)|undefined} newSanitizeDOMValue the global sanitizeDOMValue callback
                                                                                               * @return {void}
                                                                                               */_exports.sanitizeDOMValue=sanitizeDOMValue;var setSanitizeDOMValue=function setSanitizeDOMValue(newSanitizeDOMValue){_exports.sanitizeDOMValue=sanitizeDOMValue=newSanitizeDOMValue};/**
    * Gets sanitizeDOMValue, for environments that don't well support `export let`.
    *
    * @return {(function(*,string,string,?Node):*)|undefined} sanitizeDOMValue
    */_exports.setSanitizeDOMValue=setSanitizeDOMValue;var getSanitizeDOMValue=function getSanitizeDOMValue(){return sanitizeDOMValue};/**
    * Globally settable property to make Polymer Gestures use passive TouchEvent listeners when recognizing gestures.
    * When set to `true`, gestures made from touch will not be able to prevent scrolling, allowing for smoother
    * scrolling performance.
    * Defaults to `false` for backwards compatibility.
    */_exports.getSanitizeDOMValue=getSanitizeDOMValue;var passiveTouchGestures=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1;/**
                                                                                                      * Sets `passiveTouchGestures` globally for all elements using Polymer Gestures.
                                                                                                      *
                                                                                                      * @param {boolean} usePassive enable or disable passive touch gestures globally
                                                                                                      * @return {void}
                                                                                                      */_exports.passiveTouchGestures=passiveTouchGestures;var setPassiveTouchGestures=function setPassiveTouchGestures(usePassive){_exports.passiveTouchGestures=passiveTouchGestures=usePassive};/**
    * Setting to ensure Polymer template evaluation only occurs based on tempates
    * defined in trusted script.  When true, `<dom-module>` re-registration is
    * disallowed, `<dom-bind>` is disabled, and `<dom-if>`/`<dom-repeat>`
    * templates will only evaluate in the context of a trusted element template.
    */_exports.setPassiveTouchGestures=setPassiveTouchGestures;var strictTemplatePolicy=window.Polymer&&window.Polymer.strictTemplatePolicy||!1;/**
                                                                                                   * Sets `strictTemplatePolicy` globally for all elements
                                                                                                   *
                                                                                                   * @param {boolean} useStrictPolicy enable or disable strict template policy
                                                                                                   *   globally
                                                                                                   * @return {void}
                                                                                                   */_exports.strictTemplatePolicy=strictTemplatePolicy;var setStrictTemplatePolicy=function setStrictTemplatePolicy(useStrictPolicy){_exports.strictTemplatePolicy=strictTemplatePolicy=useStrictPolicy};/**
    * Setting to enable dom-module lookup from Polymer.Element.  By default,
    * templates must be defined in script using the `static get template()`
    * getter and the `html` tag function.  To enable legacy loading of templates
    * via dom-module, set this flag to true.
    */_exports.setStrictTemplatePolicy=setStrictTemplatePolicy;var allowTemplateFromDomModule=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1;/**
                                                                                                               * Sets `lookupTemplateFromDomModule` globally for all elements
                                                                                                               *
                                                                                                               * @param {boolean} allowDomModule enable or disable template lookup
                                                                                                               *   globally
                                                                                                               * @return {void}
                                                                                                               */_exports.allowTemplateFromDomModule=allowTemplateFromDomModule;var setAllowTemplateFromDomModule=function setAllowTemplateFromDomModule(allowDomModule){_exports.allowTemplateFromDomModule=allowTemplateFromDomModule=allowDomModule};/**
    * Setting to skip processing style includes and re-writing urls in css styles.
    * Normally "included" styles are pulled into the element and all urls in styles
    * are re-written to be relative to the containing script url.
    * If no includes or relative urls are used in styles, these steps can be
    * skipped as an optimization.
    */_exports.setAllowTemplateFromDomModule=setAllowTemplateFromDomModule;var legacyOptimizations=window.Polymer&&window.Polymer.legacyOptimizations||!1;/**
                                                                                                 * Sets `legacyOptimizations` globally for all elements to enable optimizations
                                                                                                 * when only legacy based elements are used.
                                                                                                 *
                                                                                                 * @param {boolean} useLegacyOptimizations enable or disable legacy optimizations
                                                                                                 * includes and url rewriting
                                                                                                 * @return {void}
                                                                                                 */_exports.legacyOptimizations=legacyOptimizations;var setLegacyOptimizations=function setLegacyOptimizations(useLegacyOptimizations){_exports.legacyOptimizations=legacyOptimizations=useLegacyOptimizations};/**
    * Setting to add warnings useful when migrating from Polymer 1.x to 2.x.
    */_exports.setLegacyOptimizations=setLegacyOptimizations;var legacyWarnings=window.Polymer&&window.Polymer.legacyWarnings||!1;/**
                                                                                       * Sets `legacyWarnings` globally for all elements to migration warnings.
                                                                                       *
                                                                                       * @param {boolean} useLegacyWarnings enable or disable warnings
                                                                                       * @return {void}
                                                                                       */_exports.legacyWarnings=legacyWarnings;var setLegacyWarnings=function setLegacyWarnings(useLegacyWarnings){_exports.legacyWarnings=legacyWarnings=useLegacyWarnings};/**
    * Setting to perform initial rendering synchronously when running under ShadyDOM.
    * This matches the behavior of Polymer 1.
    */_exports.setLegacyWarnings=setLegacyWarnings;var syncInitialRender=window.Polymer&&window.Polymer.syncInitialRender||!1;/**
                                                                                             * Sets `syncInitialRender` globally for all elements to enable synchronous
                                                                                             * initial rendering.
                                                                                             *
                                                                                             * @param {boolean} useSyncInitialRender enable or disable synchronous initial
                                                                                             * rendering globally.
                                                                                             * @return {void}
                                                                                             */_exports.syncInitialRender=syncInitialRender;var setSyncInitialRender=function setSyncInitialRender(useSyncInitialRender){_exports.syncInitialRender=syncInitialRender=useSyncInitialRender};/**
    * Setting to retain the legacy Polymer 1 behavior for multi-property
    * observers around undefined values. Observers and computed property methods
    * are not called until no argument is undefined.
    */_exports.setSyncInitialRender=setSyncInitialRender;var legacyUndefined=window.Polymer&&window.Polymer.legacyUndefined||!1;/**
                                                                                         * Sets `legacyUndefined` globally for all elements to enable legacy
                                                                                         * multi-property behavior for undefined values.
                                                                                         *
                                                                                         * @param {boolean} useLegacyUndefined enable or disable legacy
                                                                                         * multi-property behavior for undefined.
                                                                                         * @return {void}
                                                                                         */_exports.legacyUndefined=legacyUndefined;var setLegacyUndefined=function setLegacyUndefined(useLegacyUndefined){_exports.legacyUndefined=legacyUndefined=useLegacyUndefined};/**
    * Setting to ensure computed properties are computed in order to ensure
    * re-computation never occurs in a given turn.
    */_exports.setLegacyUndefined=setLegacyUndefined;var orderedComputed=window.Polymer&&window.Polymer.orderedComputed||!1;/**
                                                                                         * Sets `orderedComputed` globally for all elements to enable ordered computed
                                                                                         * property computation.
                                                                                         *
                                                                                         * @param {boolean} useOrderedComputed enable or disable ordered computed effects
                                                                                         * @return {void}
                                                                                         */_exports.orderedComputed=orderedComputed;var setOrderedComputed=function setOrderedComputed(useOrderedComputed){_exports.orderedComputed=orderedComputed=useOrderedComputed};/**
    * Setting to cancel synthetic click events fired by older mobile browsers. Modern browsers
    * no longer fire synthetic click events, and the cancellation behavior can interfere
    * when programmatically clicking on elements.
    */_exports.setOrderedComputed=setOrderedComputed;var cancelSyntheticClickEvents=!0;/**
                                               * Sets `setCancelSyntheticEvents` globally for all elements to cancel synthetic click events.
                                               *
                                               * @param {boolean} useCancelSyntheticClickEvents enable or disable cancelling synthetic
                                               * events
                                               * @return {void}
                                               */_exports.cancelSyntheticClickEvents=cancelSyntheticClickEvents;var setCancelSyntheticClickEvents=function setCancelSyntheticClickEvents(useCancelSyntheticClickEvents){_exports.cancelSyntheticClickEvents=cancelSyntheticClickEvents=useCancelSyntheticClickEvents};/**
    * Setting to remove nested templates inside `dom-if` and `dom-repeat` as
    * part of element template parsing.  This is a performance optimization that
    * eliminates most of the tax of needing two elements due to the loss of
    * type-extended templates as a result of the V1 specification changes.
    */_exports.setCancelSyntheticClickEvents=setCancelSyntheticClickEvents;var removeNestedTemplates=window.Polymer&&window.Polymer.removeNestedTemplates||!1;/**
                                                                                                     * Sets `removeNestedTemplates` globally, to eliminate nested templates
                                                                                                     * inside `dom-if` and `dom-repeat` as part of template parsing.
                                                                                                     *
                                                                                                     * @param {boolean} useRemoveNestedTemplates enable or disable removing nested
                                                                                                     *   templates during parsing
                                                                                                     * @return {void}
                                                                                                     */_exports.removeNestedTemplates=removeNestedTemplates;var setRemoveNestedTemplates=function setRemoveNestedTemplates(useRemoveNestedTemplates){_exports.removeNestedTemplates=removeNestedTemplates=useRemoveNestedTemplates};/**
    * Setting to place `dom-if` elements in a performance-optimized mode that takes
    * advantage of lighter-weight host runtime template stamping to eliminate the
    * need for an intermediate Templatizer `TemplateInstance` to mange the nodes
    * stamped by `dom-if`.  Under this setting, any Templatizer-provided API's
    * such as `modelForElement` will not be available for nodes stamped by
    * `dom-if`.
    */_exports.setRemoveNestedTemplates=setRemoveNestedTemplates;var fastDomIf=window.Polymer&&window.Polymer.fastDomIf||!1;/**
                                                                             * Sets `fastDomIf` globally, to put `dom-if` in a performance-optimized mode.
                                                                             *
                                                                             * @param {boolean} useFastDomIf enable or disable `dom-if` fast-mode
                                                                             * @return {void}
                                                                             */_exports.fastDomIf=fastDomIf;var setFastDomIf=function setFastDomIf(useFastDomIf){_exports.fastDomIf=fastDomIf=useFastDomIf};/**
    * Setting to disable `dom-change` and `rendered-item-count` events from
    * `dom-if` and `dom-repeat`. Users can opt back into `dom-change` events by
    * setting the `notify-dom-change` attribute (`notifyDomChange: true` property)
    * to `dom-if`/`don-repeat` instances.
    */_exports.setFastDomIf=setFastDomIf;var suppressTemplateNotifications=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1;/**
                                                                                                                     * Sets `suppressTemplateNotifications` globally, to disable `dom-change` and
                                                                                                                     * `rendered-item-count` events from `dom-if` and `dom-repeat`.
                                                                                                                     *
                                                                                                                     * @param {boolean} suppress enable or disable `suppressTemplateNotifications`
                                                                                                                     * @return {void}
                                                                                                                     */_exports.suppressTemplateNotifications=suppressTemplateNotifications;var setSuppressTemplateNotifications=function setSuppressTemplateNotifications(suppress){_exports.suppressTemplateNotifications=suppressTemplateNotifications=suppress};/**
    * Setting to disable use of dynamic attributes. This is an optimization
    * to avoid setting `observedAttributes`. Instead attributes are read
    * once at create time and set/removeAttribute are patched.
    */_exports.setSuppressTemplateNotifications=setSuppressTemplateNotifications;var legacyNoObservedAttributes=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1;/**
                                                                                                               * Sets `legacyNoObservedAttributes` globally, to disable `observedAttributes`.
                                                                                                               *
                                                                                                               * @param {boolean} noObservedAttributes enable or disable `legacyNoObservedAttributes`
                                                                                                               * @return {void}
                                                                                                               */_exports.legacyNoObservedAttributes=legacyNoObservedAttributes;var setLegacyNoObservedAttributes=function setLegacyNoObservedAttributes(noObservedAttributes){_exports.legacyNoObservedAttributes=legacyNoObservedAttributes=noObservedAttributes};/**
    * Setting to enable use of `adoptedStyleSheets` for sharing style sheets
    * between component instances' shadow roots, if the app uses built Shady CSS
    * styles.
    */_exports.setLegacyNoObservedAttributes=setLegacyNoObservedAttributes;var useAdoptedStyleSheetsWithBuiltCSS=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
                                                                                                                             * Sets `useAdoptedStyleSheetsWithBuiltCSS` globally.
                                                                                                                             *
                                                                                                                             * @param {boolean} value enable or disable `useAdoptedStyleSheetsWithBuiltCSS`
                                                                                                                             * @return {void}
                                                                                                                             */_exports.useAdoptedStyleSheetsWithBuiltCSS=useAdoptedStyleSheetsWithBuiltCSS;var setUseAdoptedStyleSheetsWithBuiltCSS=function setUseAdoptedStyleSheetsWithBuiltCSS(value){_exports.useAdoptedStyleSheetsWithBuiltCSS=useAdoptedStyleSheetsWithBuiltCSS=value};_exports.setUseAdoptedStyleSheetsWithBuiltCSS=setUseAdoptedStyleSheetsWithBuiltCSS;var settings={useShadow:useShadow,useNativeCSSProperties:useNativeCSSProperties,useNativeCustomElements:useNativeCustomElements,supportsAdoptingStyleSheets:supportsAdoptingStyleSheets,get rootPath(){return rootPath},setRootPath:setRootPath,get sanitizeDOMValue(){return sanitizeDOMValue},setSanitizeDOMValue:setSanitizeDOMValue,getSanitizeDOMValue:getSanitizeDOMValue,get passiveTouchGestures(){return passiveTouchGestures},setPassiveTouchGestures:setPassiveTouchGestures,get strictTemplatePolicy(){return strictTemplatePolicy},setStrictTemplatePolicy:setStrictTemplatePolicy,get allowTemplateFromDomModule(){return allowTemplateFromDomModule},setAllowTemplateFromDomModule:setAllowTemplateFromDomModule,get legacyOptimizations(){return legacyOptimizations},setLegacyOptimizations:setLegacyOptimizations,get legacyWarnings(){return legacyWarnings},setLegacyWarnings:setLegacyWarnings,get syncInitialRender(){return syncInitialRender},setSyncInitialRender:setSyncInitialRender,get legacyUndefined(){return legacyUndefined},setLegacyUndefined:setLegacyUndefined,get orderedComputed(){return orderedComputed},setOrderedComputed:setOrderedComputed,get cancelSyntheticClickEvents(){return cancelSyntheticClickEvents},setCancelSyntheticClickEvents:setCancelSyntheticClickEvents,get removeNestedTemplates(){return removeNestedTemplates},setRemoveNestedTemplates:setRemoveNestedTemplates,get fastDomIf(){return fastDomIf},setFastDomIf:setFastDomIf,get suppressTemplateNotifications(){return suppressTemplateNotifications},setSuppressTemplateNotifications:setSuppressTemplateNotifications,get legacyNoObservedAttributes(){return legacyNoObservedAttributes},setLegacyNoObservedAttributes:setLegacyNoObservedAttributes,get useAdoptedStyleSheetsWithBuiltCSS(){return useAdoptedStyleSheetsWithBuiltCSS},setUseAdoptedStyleSheetsWithBuiltCSS:setUseAdoptedStyleSheetsWithBuiltCSS};_exports.$settings=settings;var dedupeId=0;/**
                   * @constructor
                   * @extends {Function}
                   * @private
                   */function MixinFunction(){}/** @type {(WeakMap | undefined)} */MixinFunction.prototype.__mixinApplications;/** @type {(Object | undefined)} */MixinFunction.prototype.__mixinSet;/* eslint-disable valid-jsdoc */ /**
                                                                      * Wraps an ES6 class expression mixin such that the mixin is only applied
                                                                      * if it has not already been applied its base argument. Also memoizes mixin
                                                                      * applications.
                                                                      *
                                                                      * @template T
                                                                      * @param {T} mixin ES6 class expression mixin to wrap
                                                                      * @return {T}
                                                                      * @suppress {invalidCasts}
                                                                      */var dedupingMixin=function dedupingMixin(mixin){var mixinApplications=/** @type {!MixinFunction} */mixin.__mixinApplications;if(!mixinApplications){mixinApplications=new WeakMap;/** @type {!MixinFunction} */mixin.__mixinApplications=mixinApplications}// maintain a unique id for each mixin
var mixinDedupeId=dedupeId++;function dedupingMixin(base){var baseSet=/** @type {!MixinFunction} */base.__mixinSet;if(baseSet&&baseSet[mixinDedupeId]){return base}var map=mixinApplications,extended=map.get(base);if(!extended){extended=/** @type {!Function} */mixin(base);map.set(base,extended);// copy inherited mixin set from the extended class, or the base class
// NOTE: we avoid use of Set here because some browser (IE11)
// cannot extend a base Set via the constructor.
var mixinSet=Object.create(/** @type {!MixinFunction} */extended.__mixinSet||baseSet||null);mixinSet[mixinDedupeId]=!0;/** @type {!MixinFunction} */extended.__mixinSet=mixinSet}return extended}return dedupingMixin};/* eslint-enable valid-jsdoc */_exports.dedupingMixin=dedupingMixin;var mixin={dedupingMixin:dedupingMixin};_exports.$mixin=mixin;var modules={},lcModules={};/**
                     * Sets a dom-module into the global registry by id.
                     *
                     * @param {string} id dom-module id
                     * @param {DomModule} module dom-module instance
                     * @return {void}
                     */function setModule(id,module){// store id separate from lowercased id so that
// in all cases mixedCase id will stored distinctly
// and lowercase version is a fallback
modules[id]=lcModules[id.toLowerCase()]=module}/**
   * Retrieves a dom-module from the global registry by id.
   *
   * @param {string} id dom-module id
   * @return {DomModule!} dom-module instance
   */function findModule(id){return modules[id]||lcModules[id.toLowerCase()]}function styleOutsideTemplateCheck(inst){if(inst.querySelector("style")){console.warn("dom-module %s has style outside template",inst.id)}}/**
   * The `dom-module` element registers the dom it contains to the name given
   * by the module's id attribute. It provides a unified database of dom
   * accessible via its static `import` API.
   *
   * A key use case of `dom-module` is for providing custom element `<template>`s
   * via HTML imports that are parsed by the native HTML parser, that can be
   * relocated during a bundling pass and still looked up by `id`.
   *
   * Example:
   *
   *     <dom-module id="foo">
   *       <img src="stuff.png">
   *     </dom-module>
   *
   * Then in code in some other location that cannot access the dom-module above
   *
   *     let img = customElements.get('dom-module').import('foo', 'img');
   *
   * @customElement
   * @extends HTMLElement
   * @summary Custom element that provides a registry of relocatable DOM content
   *   by `id` that is agnostic to bundling.
   * @unrestricted
   */var DomModule=/*#__PURE__*/function(_HTMLElement){babelHelpers.inherits(DomModule,_HTMLElement);function DomModule(){babelHelpers.classCallCheck(this,DomModule);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DomModule).apply(this,arguments))}babelHelpers.createClass(DomModule,[{key:"attributeChangedCallback",/* eslint-disable no-unused-vars */ /**
                                         * @param {string} name Name of attribute.
                                         * @param {?string} old Old value of attribute.
                                         * @param {?string} value Current value of attribute.
                                         * @param {?string} namespace Attribute namespace.
                                         * @return {void}
                                         * @override
                                         */value:function attributeChangedCallback(name,old,value,namespace){if(old!==value){this.register()}}/* eslint-enable no-unused-args */ /**
                                        * The absolute URL of the original location of this `dom-module`.
                                        *
                                        * This value will differ from this element's `ownerDocument` in the
                                        * following ways:
                                        * - Takes into account any `assetpath` attribute added during bundling
                                        *   to indicate the original location relative to the bundled location
                                        * - Uses the HTMLImports polyfill's `importForElement` API to ensure
                                        *   the path is relative to the import document's location since
                                        *   `ownerDocument` is not currently polyfilled
                                        */},{key:"register",/**
     * Registers the dom-module at a given id. This method should only be called
     * when a dom-module is imperatively created. For
     * example, `document.createElement('dom-module').register('foo')`.
     * @param {string=} id The id at which to register the dom-module.
     * @return {void}
     */value:function register(id){id=id||this.id;if(id){// Under strictTemplatePolicy, reject and null out any re-registered
// dom-module since it is ambiguous whether first-in or last-in is trusted
if(strictTemplatePolicy&&findModule(id)!==void 0){setModule(id,null);throw new Error("strictTemplatePolicy: dom-module ".concat(id," re-registered"))}this.id=id;setModule(id,this);styleOutsideTemplateCheck(this)}}},{key:"assetpath",get:function get(){// Don't override existing assetpath.
if(!this.__assetpath){// note: assetpath set via an attribute must be relative to this
// element's location; accomodate polyfilled HTMLImports
var owner=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,url=_resolveUrl(this.getAttribute("assetpath")||"",owner.baseURI);this.__assetpath=pathFromUrl(url)}return this.__assetpath}}],[{key:"import",/**
     * Retrieves the element specified by the css `selector` in the module
     * registered by `id`. For example, this.import('foo', 'img');
     * @param {string} id The id of the dom-module in which to search.
     * @param {string=} selector The css selector by which to find the element.
     * @return {Element} Returns the element which matches `selector` in the
     * module registered at the specified `id`.
     *
     * @export
     * @nocollapse Referred to indirectly in style-gather.js
     */value:function _import(id,selector){if(id){var m=findModule(id);if(m&&selector){return m.querySelector(selector)}return m}return null}},{key:"observedAttributes",/** @override */get:function get(){return["id"]}}]);return DomModule}(babelHelpers.wrapNativeSuper(HTMLElement));_exports.DomModule=DomModule;DomModule.prototype.modules=modules;customElements.define("dom-module",DomModule);var domModule={DomModule:DomModule};_exports.$domModule=domModule;var MODULE_STYLE_LINK_SELECTOR="link[rel=import][type~=css]",INCLUDE_ATTR="include",SHADY_UNSCOPED_ATTR="shady-unscoped";/**
                                               * @param {string} moduleId .
                                               * @return {?DomModule} .
                                               */function importModule(moduleId){return(/** @type {?DomModule} */DomModule.import(moduleId))}function styleForImport(importDoc){// NOTE: polyfill affordance.
// under the HTMLImports polyfill, there will be no 'body',
// but the import pseudo-doc can be used directly.
var container=importDoc.body?importDoc.body:importDoc,importCss=resolveCss(container.textContent,importDoc.baseURI),style=document.createElement("style");style.textContent=importCss;return style}/** @typedef {{assetpath: string}} */var templateWithAssetPath;// eslint-disable-line no-unused-vars
/**
 * Returns a list of <style> elements in a space-separated list of `dom-module`s.
 *
 * @function
 * @param {string} moduleIds List of dom-module id's within which to
 * search for css.
 * @return {!Array<!HTMLStyleElement>} Array of contained <style> elements
 */function stylesFromModules(moduleIds){for(var modules=moduleIds.trim().split(/\s+/),styles=[],i=0;i<modules.length;i++){styles.push.apply(styles,babelHelpers.toConsumableArray(stylesFromModule(modules[i])))}return styles}/**
   * Returns a list of <style> elements in a given `dom-module`.
   * Styles in a `dom-module` can come either from `<style>`s within the
   * first `<template>`, or else from one or more
   * `<link rel="import" type="css">` links outside the template.
   *
   * @param {string} moduleId dom-module id to gather styles from
   * @return {!Array<!HTMLStyleElement>} Array of contained styles.
   */function stylesFromModule(moduleId){var m=importModule(moduleId);if(!m){console.warn("Could not find style data in module named",moduleId);return[]}if(m._styles===void 0){var styles=[];// module imports: <link rel="import" type="css">
styles.push.apply(styles,babelHelpers.toConsumableArray(_stylesFromModuleImports(m)));// include css from the first template in the module
var template=/** @type {?HTMLTemplateElement} */m.querySelector("template");if(template){styles.push.apply(styles,babelHelpers.toConsumableArray(stylesFromTemplate(template,/** @type {templateWithAssetPath} */m.assetpath)))}m._styles=styles}return m._styles}/**
   * Returns the `<style>` elements within a given template.
   *
   * @param {!HTMLTemplateElement} template Template to gather styles from
   * @param {string=} baseURI baseURI for style content
   * @return {!Array<!HTMLStyleElement>} Array of styles
   */function stylesFromTemplate(template,baseURI){if(!template._styles){for(var styles=[],e$=template.content.querySelectorAll("style"),i=0;i<e$.length;i++){var e=e$[i],include=e.getAttribute(INCLUDE_ATTR);// support style sharing by allowing styles to "include"
// other dom-modules that contain styling
if(include){styles.push.apply(styles,babelHelpers.toConsumableArray(stylesFromModules(include).filter(function(item,index,self){return self.indexOf(item)===index})))}if(baseURI){e.textContent=resolveCss(e.textContent,/** @type {string} */baseURI)}styles.push(e)}template._styles=styles}return template._styles}/**
   * Returns a list of <style> elements  from stylesheets loaded via `<link rel="import" type="css">` links within the specified `dom-module`.
   *
   * @param {string} moduleId Id of `dom-module` to gather CSS from
   * @return {!Array<!HTMLStyleElement>} Array of contained styles.
   */function stylesFromModuleImports(moduleId){var m=importModule(moduleId);return m?_stylesFromModuleImports(m):[]}/**
   * @param {!HTMLElement} module dom-module element that could contain `<link rel="import" type="css">` styles
   * @return {!Array<!HTMLStyleElement>} Array of contained styles
   */function _stylesFromModuleImports(module){for(var styles=[],p$=module.querySelectorAll(MODULE_STYLE_LINK_SELECTOR),i=0,_p5;i<p$.length;i++){_p5=p$[i];if(_p5.import){var importDoc=_p5.import,unscoped=_p5.hasAttribute(SHADY_UNSCOPED_ATTR);if(unscoped&&!importDoc._unscopedStyle){var style=styleForImport(importDoc);style.setAttribute(SHADY_UNSCOPED_ATTR,"");importDoc._unscopedStyle=style}else if(!importDoc._style){importDoc._style=styleForImport(importDoc)}styles.push(unscoped?importDoc._unscopedStyle:importDoc._style)}}return styles}/**
   *
   * Returns CSS text of styles in a space-separated list of `dom-module`s.
   * Note: This method is deprecated, use `stylesFromModules` instead.
   *
   * @deprecated
   * @param {string} moduleIds List of dom-module id's within which to
   * search for css.
   * @return {string} Concatenated CSS content from specified `dom-module`s
   */function cssFromModules(moduleIds){for(var modules=moduleIds.trim().split(/\s+/),cssText="",i=0;i<modules.length;i++){cssText+=cssFromModule(modules[i])}return cssText}/**
   * Returns CSS text of styles in a given `dom-module`.  CSS in a `dom-module`
   * can come either from `<style>`s within the first `<template>`, or else
   * from one or more `<link rel="import" type="css">` links outside the
   * template.
   *
   * Any `<styles>` processed are removed from their original location.
   * Note: This method is deprecated, use `styleFromModule` instead.
   *
   * @deprecated
   * @param {string} moduleId dom-module id to gather styles from
   * @return {string} Concatenated CSS content from specified `dom-module`
   */function cssFromModule(moduleId){var m=importModule(moduleId);if(m&&m._cssText===void 0){// module imports: <link rel="import" type="css">
var cssText=_cssFromModuleImports(m),t=/** @type {?HTMLTemplateElement} */m.querySelector("template");// include css from the first template in the module
if(t){cssText+=cssFromTemplate(t,/** @type {templateWithAssetPath} */m.assetpath)}m._cssText=cssText||null}if(!m){console.warn("Could not find style data in module named",moduleId)}return m&&m._cssText||""}/**
   * Returns CSS text of `<styles>` within a given template.
   *
   * Any `<styles>` processed are removed from their original location.
   * Note: This method is deprecated, use `styleFromTemplate` instead.
   *
   * @deprecated
   * @param {!HTMLTemplateElement} template Template to gather styles from
   * @param {string} baseURI Base URI to resolve the URL against
   * @return {string} Concatenated CSS content from specified template
   */function cssFromTemplate(template,baseURI){// if element is a template, get content from its .content
for(var cssText="",e$=stylesFromTemplate(template,baseURI),i=0,e;i<e$.length;i++){e=e$[i];if(e.parentNode){e.parentNode.removeChild(e)}cssText+=e.textContent}return cssText}/**
   * Returns CSS text from stylesheets loaded via `<link rel="import" type="css">`
   * links within the specified `dom-module`.
   *
   * Note: This method is deprecated, use `stylesFromModuleImports` instead.
   *
   * @deprecated
   *
   * @param {string} moduleId Id of `dom-module` to gather CSS from
   * @return {string} Concatenated CSS content from links in specified `dom-module`
   */function cssFromModuleImports(moduleId){var m=importModule(moduleId);return m?_cssFromModuleImports(m):""}/**
   * @deprecated
   * @param {!HTMLElement} module dom-module element that could contain `<link rel="import" type="css">` styles
   * @return {string} Concatenated CSS content from links in the dom-module
   */function _cssFromModuleImports(module){for(var cssText="",styles=_stylesFromModuleImports(module),i=0;i<styles.length;i++){cssText+=styles[i].textContent}return cssText}var styleGather={stylesFromModules:stylesFromModules,stylesFromModule:stylesFromModule,stylesFromTemplate:stylesFromTemplate,stylesFromModuleImports:stylesFromModuleImports,cssFromModules:cssFromModules,cssFromModule:cssFromModule,cssFromTemplate:cssFromTemplate,cssFromModuleImports:cssFromModuleImports};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */ /* eslint-disable valid-jsdoc */ /**
                                        * Node wrapper to ensure ShadowDOM safe operation regardless of polyfill
                                        * presence or mode. Note that with the introduction of `ShadyDOM.noPatch`,
                                        * a node wrapper must be used to access ShadowDOM API.
                                        * This is similar to using `Polymer.dom` but relies exclusively
                                        * on the presence of the ShadyDOM polyfill rather than requiring the loading
                                        * of legacy (Polymer.dom) API.
                                        * @type {function(Node):Node}
                                        */_exports.$styleGather=styleGather;var wrap$1=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?function(n){return ShadyDOM.patch(n)}:function(n){return n};_exports.wrap=wrap$1;var wrap$2={wrap:wrap$1};_exports.$wrap=wrap$2;function isPath(path){return 0<=path.indexOf(".")}/**
   * Returns the root property name for the given path.
   *
   * Example:
   *
   * ```
   * root('foo.bar.baz') // 'foo'
   * root('foo')         // 'foo'
   * ```
   *
   * @param {string} path Path string
   * @return {string} Root property name
   */function root(path){var dotIndex=path.indexOf(".");if(-1===dotIndex){return path}return path.slice(0,dotIndex)}/**
   * Given `base` is `foo.bar`, `foo` is an ancestor, `foo.bar` is not
   * Returns true if the given path is an ancestor of the base path.
   *
   * Example:
   *
   * ```
   * isAncestor('foo.bar', 'foo')         // true
   * isAncestor('foo.bar', 'foo.bar')     // false
   * isAncestor('foo.bar', 'foo.bar.baz') // false
   * ```
   *
   * @param {string} base Path string to test against.
   * @param {string} path Path string to test.
   * @return {boolean} True if `path` is an ancestor of `base`.
   */function isAncestor(base,path){//     base.startsWith(path + '.');
return 0===base.indexOf(path+".")}/**
   * Given `base` is `foo.bar`, `foo.bar.baz` is an descendant
   *
   * Example:
   *
   * ```
   * isDescendant('foo.bar', 'foo.bar.baz') // true
   * isDescendant('foo.bar', 'foo.bar')     // false
   * isDescendant('foo.bar', 'foo')         // false
   * ```
   *
   * @param {string} base Path string to test against.
   * @param {string} path Path string to test.
   * @return {boolean} True if `path` is a descendant of `base`.
   */function isDescendant(base,path){//     path.startsWith(base + '.');
return 0===path.indexOf(base+".")}/**
   * Replaces a previous base path with a new base path, preserving the
   * remainder of the path.
   *
   * User must ensure `path` has a prefix of `base`.
   *
   * Example:
   *
   * ```
   * translate('foo.bar', 'zot', 'foo.bar.baz') // 'zot.baz'
   * ```
   *
   * @param {string} base Current base string to remove
   * @param {string} newBase New base string to replace with
   * @param {string} path Path to translate
   * @return {string} Translated string
   */function translate(base,newBase,path){return newBase+path.slice(base.length)}/**
   * @param {string} base Path string to test against
   * @param {string} path Path string to test
   * @return {boolean} True if `path` is equal to `base`
   */function matches(base,path){return base===path||isAncestor(base,path)||isDescendant(base,path)}/**
   * Converts array-based paths to flattened path.  String-based paths
   * are returned as-is.
   *
   * Example:
   *
   * ```
   * normalize(['foo.bar', 0, 'baz'])  // 'foo.bar.0.baz'
   * normalize('foo.bar.0.baz')        // 'foo.bar.0.baz'
   * ```
   *
   * @param {string | !Array<string|number>} path Input path
   * @return {string} Flattened path
   */function normalize(path){if(Array.isArray(path)){for(var parts=[],i=0,args;i<path.length;i++){args=path[i].toString().split(".");for(var j=0;j<args.length;j++){parts.push(args[j])}}return parts.join(".")}else{return path}}/**
   * Splits a path into an array of property names. Accepts either arrays
   * of path parts or strings.
   *
   * Example:
   *
   * ```
   * split(['foo.bar', 0, 'baz'])  // ['foo', 'bar', '0', 'baz']
   * split('foo.bar.0.baz')        // ['foo', 'bar', '0', 'baz']
   * ```
   *
   * @param {string | !Array<string|number>} path Input path
   * @return {!Array<string>} Array of path parts
   * @suppress {checkTypes}
   */function split(path){if(Array.isArray(path)){return normalize(path).split(".")}return path.toString().split(".")}/**
   * Reads a value from a path.  If any sub-property in the path is `undefined`,
   * this method returns `undefined` (will never throw.
   *
   * @param {Object} root Object from which to dereference path from
   * @param {string | !Array<string|number>} path Path to read
   * @param {Object=} info If an object is provided to `info`, the normalized
   *  (flattened) path will be set to `info.path`.
   * @return {*} Value at path, or `undefined` if the path could not be
   *  fully dereferenced.
   */function _get(root,path,info){// Loop over path parts[0..n-1] and dereference
for(var prop=root,parts=split(path),i=0;i<parts.length;i++){if(!prop){return}var part=parts[i];prop=prop[part]}if(info){info.path=parts.join(".")}return prop}/**
   * Sets a value to a path.  If any sub-property in the path is `undefined`,
   * this method will no-op.
   *
   * @param {Object} root Object from which to dereference path from
   * @param {string | !Array<string|number>} path Path to set
   * @param {*} value Value to set to path
   * @return {string | undefined} The normalized version of the input path
   */function _set(root,path,value){var prop=root,parts=split(path),last=parts[parts.length-1];if(1<parts.length){// Loop over path parts[0..n-2] and dereference
for(var i=0,part;i<parts.length-1;i++){part=parts[i];prop=prop[part];if(!prop){return}}// Set value to object at end of path
prop[last]=value}else{// Simple property set
prop[path]=value}return parts.join(".")}/**
   * Returns true if the given string is a structured data path (has dots).
   *
   * This function is deprecated.  Use `isPath` instead.
   *
   * Example:
   *
   * ```
   * isDeep('foo.bar.baz') // true
   * isDeep('foo')         // false
   * ```
   *
   * @deprecated
   * @param {string} path Path string
   * @return {boolean} True if the string contained one or more dots
   */var isDeep=isPath;_exports.isDeep=isDeep;var path={isPath:isPath,root:root,isAncestor:isAncestor,isDescendant:isDescendant,translate:translate,matches:matches,normalize:normalize,split:split,get:_get,set:_set,isDeep:isDeep};_exports.$path=path;var caseMap={},DASH_TO_CAMEL=/-[a-z]/g,CAMEL_TO_DASH=/([A-Z])/g;/**
                                   * @fileoverview Module with utilities for converting between "dash-case" and
                                   * "camelCase" identifiers.
                                   */ /**
                                       * Converts "dash-case" identifier (e.g. `foo-bar-baz`) to "camelCase"
                                       * (e.g. `fooBarBaz`).
                                       *
                                       * @param {string} dash Dash-case identifier
                                       * @return {string} Camel-case representation of the identifier
                                       */function dashToCamelCase(dash){return caseMap[dash]||(caseMap[dash]=0>dash.indexOf("-")?dash:dash.replace(DASH_TO_CAMEL,function(m){return m[1].toUpperCase()}))}/**
   * Converts "camelCase" identifier (e.g. `fooBarBaz`) to "dash-case"
   * (e.g. `foo-bar-baz`).
   *
   * @param {string} camel Camel-case identifier
   * @return {string} Dash-case representation of the identifier
   */function camelToDashCase(camel){return caseMap[camel]||(caseMap[camel]=camel.replace(CAMEL_TO_DASH,"-$1").toLowerCase())}var caseMap$1={dashToCamelCase:dashToCamelCase,camelToDashCase:camelToDashCase};_exports.$caseMap=caseMap$1;var microtaskCurrHandle=0,microtaskLastHandle=0,microtaskCallbacks=[],microtaskNodeContent=0,microtaskScheduled=!1,microtaskNode=document.createTextNode("");new window.MutationObserver(microtaskFlush).observe(microtaskNode,{characterData:!0});function microtaskFlush(){microtaskScheduled=!1;for(var len=microtaskCallbacks.length,i=0,cb;i<len;i++){cb=microtaskCallbacks[i];if(cb){try{cb()}catch(e){setTimeout(function(){throw e})}}}microtaskCallbacks.splice(0,len);microtaskLastHandle+=len}/**
   * Async interface wrapper around `setTimeout`.
   *
   * @namespace
   * @summary Async interface wrapper around `setTimeout`.
   */var timeOut={/**
   * Returns a sub-module with the async interface providing the provided
   * delay.
   *
   * @memberof timeOut
   * @param {number=} delay Time to wait before calling callbacks in ms
   * @return {!AsyncInterface} An async timeout interface
   */after:function after(delay){return{run:function run(fn){return window.setTimeout(fn,delay)},cancel:function cancel(handle){window.clearTimeout(handle)}}},/**
   * Enqueues a function called in the next task.
   *
   * @memberof timeOut
   * @param {!Function} fn Callback to run
   * @param {number=} delay Delay in milliseconds
   * @return {number} Handle used for canceling task
   */run:function run(fn,delay){return window.setTimeout(fn,delay)},/**
   * Cancels a previously enqueued `timeOut` callback.
   *
   * @memberof timeOut
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel:function cancel(handle){window.clearTimeout(handle)}};_exports.timeOut=timeOut;var animationFrame={/**
   * Enqueues a function called at `requestAnimationFrame` timing.
   *
   * @memberof animationFrame
   * @param {function(number):void} fn Callback to run
   * @return {number} Handle used for canceling task
   */run:function run(fn){return window.requestAnimationFrame(fn)},/**
   * Cancels a previously enqueued `animationFrame` callback.
   *
   * @memberof animationFrame
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel:function cancel(handle){window.cancelAnimationFrame(handle)}};_exports.animationFrame=animationFrame;var idlePeriod={/**
   * Enqueues a function called at `requestIdleCallback` timing.
   *
   * @memberof idlePeriod
   * @param {function(!IdleDeadline):void} fn Callback to run
   * @return {number} Handle used for canceling task
   */run:function run(fn){return window.requestIdleCallback?window.requestIdleCallback(fn):window.setTimeout(fn,16)},/**
   * Cancels a previously enqueued `idlePeriod` callback.
   *
   * @memberof idlePeriod
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel:function cancel(handle){window.cancelIdleCallback?window.cancelIdleCallback(handle):window.clearTimeout(handle)}};_exports.idlePeriod=idlePeriod;var microTask={/**
   * Enqueues a function called at microtask timing.
   *
   * @memberof microTask
   * @param {!Function=} callback Callback to run
   * @return {number} Handle used for canceling task
   */run:function run(callback){if(!microtaskScheduled){microtaskScheduled=!0;microtaskNode.textContent=microtaskNodeContent++}microtaskCallbacks.push(callback);return microtaskCurrHandle++},/**
   * Cancels a previously enqueued `microTask` callback.
   *
   * @memberof microTask
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel:function cancel(handle){var idx=handle-microtaskLastHandle;if(0<=idx){if(!microtaskCallbacks[idx]){throw new Error("invalid async handle: "+handle)}microtaskCallbacks[idx]=null}}};_exports.microTask=microTask;var async={timeOut:timeOut,animationFrame:animationFrame,idlePeriod:idlePeriod,microTask:microTask};_exports.$async=async;var microtask=microTask,PropertiesChanged=dedupingMixin(/**
                                                 * @template T
                                                 * @param {function(new:T)} superClass Class to apply mixin to.
                                                 * @return {function(new:T)} superClass with mixin applied.
                                                 */function(superClass){/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_PropertiesChanged}
   * @unrestricted
   */var PropertiesChanged=/*#__PURE__*/function(_superClass){babelHelpers.inherits(PropertiesChanged,_superClass);babelHelpers.createClass(PropertiesChanged,[{key:"_createPropertyAccessor",//eslint-disable-line no-unused-vars
/**
     * Creates a setter/getter pair for the named property with its own
     * local storage.  The getter returns the value in the local storage,
     * and the setter calls `_setProperty`, which updates the local storage
     * for the property and enqueues a `_propertiesChanged` callback.
     *
     * This method may be called on a prototype or an instance.  Calling
     * this method may overwrite a property value that already exists on
     * the prototype/instance by creating the accessor.
     *
     * @param {string} property Name of the property
     * @param {boolean=} readOnly When true, no setter is created; the
     *   protected `_setProperty` function must be used to set the property
     * @return {void}
     * @protected
     * @override
     */value:function _createPropertyAccessor(property,readOnly){this._addPropertyToAttributeMap(property);if(!this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))){this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)}if(!this.__dataHasAccessor[property]){this.__dataHasAccessor[property]=!0;this._definePropertyAccessor(property,readOnly)}}/**
       * Adds the given `property` to a map matching attribute names
       * to property names, using `attributeNameForProperty`. This map is
       * used when deserializing attribute values to properties.
       *
       * @param {string} property Name of the property
       * @override
       */},{key:"_addPropertyToAttributeMap",value:function _addPropertyToAttributeMap(property){if(!this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))){this.__dataAttributes=Object.assign({},this.__dataAttributes)}// This check is technically not correct; it's an optimization that
// assumes that if a _property_ name is already in the map (note this is
// an attr->property map), the property mapped directly to the attribute
// and it has already been mapped.  This would fail if
// `attributeNameForProperty` were overridden such that this was not the
// case.
var attr=this.__dataAttributes[property];if(!attr){attr=this.constructor.attributeNameForProperty(property);this.__dataAttributes[attr]=property}return attr}/**
       * Defines a property accessor for the given property.
       * @param {string} property Name of the property
       * @param {boolean=} readOnly When true, no setter is created
       * @return {void}
       * @override
       */},{key:"_definePropertyAccessor",value:function _definePropertyAccessor(property,readOnly){Object.defineProperty(this,property,{/* eslint-disable valid-jsdoc */ /** @this {PropertiesChanged} */get:function get(){// Inline for perf instead of using `_getProperty`
return this.__data[property]},/** @this {PropertiesChanged} */set:readOnly?function(){}:function(value){// Inline for perf instead of using `_setProperty`
if(this._setPendingProperty(property,value,!0)){this._invalidateProperties()}}/* eslint-enable */})}}],[{key:"createProperties",/**
     * Creates property accessors for the given property names.
     * @param {!Object} props Object whose keys are names of accessors.
     * @return {void}
     * @protected
     * @nocollapse
     */value:function createProperties(props){var proto=this.prototype;for(var prop in props){// don't stomp an existing accessor
if(!(prop in proto)){proto._createPropertyAccessor(prop)}}}/**
       * Returns an attribute name that corresponds to the given property.
       * The attribute name is the lowercased property name. Override to
       * customize this mapping.
       * @param {string} property Property to convert
       * @return {string} Attribute name corresponding to the given property.
       *
       * @protected
       * @nocollapse
       */},{key:"attributeNameForProperty",value:function attributeNameForProperty(property){return property.toLowerCase()}/**
       * Override point to provide a type to which to deserialize a value to
       * a given property.
       * @param {string} name Name of property
       *
       * @protected
       * @nocollapse
       */},{key:"typeForProperty",value:function typeForProperty(name){}}]);function PropertiesChanged(){var _this7;babelHelpers.classCallCheck(this,PropertiesChanged);_this7=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PropertiesChanged).call(this));/** @type {boolean} */_this7.__dataEnabled=!1;_this7.__dataReady=!1;_this7.__dataInvalid=!1;_this7.__data={};_this7.__dataPending=null;_this7.__dataOld=null;_this7.__dataInstanceProps=null;/** @type {number} */ // NOTE: used to track re-entrant calls to `_flushProperties`
_this7.__dataCounter=0;_this7.__serializing=!1;_this7._initializeProperties();return _this7}/**
       * Lifecycle callback called when properties are enabled via
       * `_enableProperties`.
       *
       * Users may override this function to implement behavior that is
       * dependent on the element having its property data initialized, e.g.
       * from defaults (initialized from `constructor`, `_initializeProperties`),
       * `attributeChangedCallback`, or values propagated from host e.g. via
       * bindings.  `super.ready()` must be called to ensure the data system
       * becomes enabled.
       *
       * @return {void}
       * @public
       * @override
       */babelHelpers.createClass(PropertiesChanged,[{key:"ready",value:function ready(){this.__dataReady=!0;this._flushProperties()}/**
       * Initializes the local storage for property accessors.
       *
       * Provided as an override point for performing any setup work prior
       * to initializing the property accessor system.
       *
       * @return {void}
       * @protected
       * @override
       */},{key:"_initializeProperties",value:function _initializeProperties(){// Capture instance properties; these will be set into accessors
// during first flush. Don't set them here, since we want
// these to overwrite defaults/constructor assignments
for(var _p6 in this.__dataHasAccessor){if(this.hasOwnProperty(_p6)){this.__dataInstanceProps=this.__dataInstanceProps||{};this.__dataInstanceProps[_p6]=this[_p6];delete this[_p6]}}}/**
       * Called at ready time with bag of instance properties that overwrote
       * accessors when the element upgraded.
       *
       * The default implementation sets these properties back into the
       * setter at ready time.  This method is provided as an override
       * point for customizing or providing more efficient initialization.
       *
       * @param {Object} props Bag of property values that were overwritten
       *   when creating property accessors.
       * @return {void}
       * @protected
       * @override
       */},{key:"_initializeInstanceProperties",value:function _initializeInstanceProperties(props){Object.assign(this,props)}/**
       * Updates the local storage for a property (via `_setPendingProperty`)
       * and enqueues a `_proeprtiesChanged` callback.
       *
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @return {void}
       * @protected
       * @override
       */},{key:"_setProperty",value:function _setProperty(property,value){if(this._setPendingProperty(property,value)){this._invalidateProperties()}}/**
       * Returns the value for the given property.
       * @param {string} property Name of property
       * @return {*} Value for the given property
       * @protected
       * @override
       */},{key:"_getProperty",value:function _getProperty(property){return this.__data[property]}/* eslint-disable no-unused-vars */ /**
                                           * Updates the local storage for a property, records the previous value,
                                           * and adds it to the set of "pending changes" that will be passed to the
                                           * `_propertiesChanged` callback.  This method does not enqueue the
                                           * `_propertiesChanged` callback.
                                           *
                                           * @param {string} property Name of the property
                                           * @param {*} value Value to set
                                           * @param {boolean=} ext Not used here; affordance for closure
                                           * @return {boolean} Returns true if the property changed
                                           * @protected
                                           * @override
                                           */},{key:"_setPendingProperty",value:function _setPendingProperty(property,value,ext){var old=this.__data[property],changed=this._shouldPropertyChange(property,value,old);if(changed){if(!this.__dataPending){this.__dataPending={};this.__dataOld={}}// Ensure old is captured from the last turn
if(this.__dataOld&&!(property in this.__dataOld)){this.__dataOld[property]=old}this.__data[property]=value;this.__dataPending[property]=value}return changed}/* eslint-enable */ /**
                           * @param {string} property Name of the property
                           * @return {boolean} Returns true if the property is pending.
                           */},{key:"_isPropertyPending",value:function _isPropertyPending(property){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(property))}/**
       * Marks the properties as invalid, and enqueues an async
       * `_propertiesChanged` callback.
       *
       * @return {void}
       * @protected
       * @override
       */},{key:"_invalidateProperties",value:function _invalidateProperties(){var _this8=this;if(!this.__dataInvalid&&this.__dataReady){this.__dataInvalid=!0;microtask.run(function(){if(_this8.__dataInvalid){_this8.__dataInvalid=!1;_this8._flushProperties()}})}}/**
       * Call to enable property accessor processing. Before this method is
       * called accessor values will be set but side effects are
       * queued. When called, any pending side effects occur immediately.
       * For elements, generally `connectedCallback` is a normal spot to do so.
       * It is safe to call this method multiple times as it only turns on
       * property accessors once.
       *
       * @return {void}
       * @protected
       * @override
       */},{key:"_enableProperties",value:function _enableProperties(){if(!this.__dataEnabled){this.__dataEnabled=!0;if(this.__dataInstanceProps){this._initializeInstanceProperties(this.__dataInstanceProps);this.__dataInstanceProps=null}this.ready()}}/**
       * Calls the `_propertiesChanged` callback with the current set of
       * pending changes (and old values recorded when pending changes were
       * set), and resets the pending set of changes. Generally, this method
       * should not be called in user code.
       *
       * @return {void}
       * @protected
       * @override
       */},{key:"_flushProperties",value:function _flushProperties(){this.__dataCounter++;var props=this.__data,changedProps=this.__dataPending,old=this.__dataOld;if(this._shouldPropertiesChange(props,changedProps,old)){this.__dataPending=null;this.__dataOld=null;this._propertiesChanged(props,changedProps,old)}this.__dataCounter--}/**
       * Called in `_flushProperties` to determine if `_propertiesChanged`
       * should be called. The default implementation returns true if
       * properties are pending. Override to customize when
       * `_propertiesChanged` is called.
       * @param {!Object} currentProps Bag of all current accessor values
       * @param {?Object} changedProps Bag of properties changed since the last
       *   call to `_propertiesChanged`
       * @param {?Object} oldProps Bag of previous values for each property
       *   in `changedProps`
       * @return {boolean} true if changedProps is truthy
       * @override
       */},{key:"_shouldPropertiesChange",value:function _shouldPropertiesChange(currentProps,changedProps,oldProps){// eslint-disable-line no-unused-vars
return!!changedProps}/**
       * Callback called when any properties with accessors created via
       * `_createPropertyAccessor` have been set.
       *
       * @param {!Object} currentProps Bag of all current accessor values
       * @param {?Object} changedProps Bag of properties changed since the last
       *   call to `_propertiesChanged`
       * @param {?Object} oldProps Bag of previous values for each property
       *   in `changedProps`
       * @return {void}
       * @protected
       * @override
       */},{key:"_propertiesChanged",value:function _propertiesChanged(currentProps,changedProps,oldProps){}// eslint-disable-line no-unused-vars
/**
     * Method called to determine whether a property value should be
     * considered as a change and cause the `_propertiesChanged` callback
     * to be enqueued.
     *
     * The default implementation returns `true` if a strict equality
     * check fails. The method always returns false for `NaN`.
     *
     * Override this method to e.g. provide stricter checking for
     * Objects/Arrays when using immutable patterns.
     *
     * @param {string} property Property name
     * @param {*} value New property value
     * @param {*} old Previous property value
     * @return {boolean} Whether the property should be considered a change
     *   and enqueue a `_proeprtiesChanged` callback
     * @protected
     * @override
     */},{key:"_shouldPropertyChange",value:function _shouldPropertyChange(property,value,old){return(// Strict equality check
old!==value&&(// This ensures (old==NaN, value==NaN) always returns false
old===old||value===value))}/**
       * Implements native Custom Elements `attributeChangedCallback` to
       * set an attribute value to a property via `_attributeToProperty`.
       *
       * @param {string} name Name of attribute that changed
       * @param {?string} old Old attribute value
       * @param {?string} value New attribute value
       * @param {?string} namespace Attribute namespace.
       * @return {void}
       * @suppress {missingProperties} Super may or may not implement the callback
       * @override
       */},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,old,value,namespace){if(old!==value){this._attributeToProperty(name,value)}if(babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesChanged.prototype),"attributeChangedCallback",this)){babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesChanged.prototype),"attributeChangedCallback",this).call(this,name,old,value,namespace)}}/**
       * Deserializes an attribute to its associated property.
       *
       * This method calls the `_deserializeValue` method to convert the string to
       * a typed value.
       *
       * @param {string} attribute Name of attribute to deserialize.
       * @param {?string} value of the attribute.
       * @param {*=} type type to deserialize to, defaults to the value
       * returned from `typeForProperty`
       * @return {void}
       * @override
       */},{key:"_attributeToProperty",value:function _attributeToProperty(attribute,value,type){if(!this.__serializing){var map=this.__dataAttributes,property=map&&map[attribute]||attribute;this[property]=this._deserializeValue(value,type||this.constructor.typeForProperty(property))}}/**
       * Serializes a property to its associated attribute.
       *
       * @suppress {invalidCasts} Closure can't figure out `this` is an element.
       *
       * @param {string} property Property name to reflect.
       * @param {string=} attribute Attribute name to reflect to.
       * @param {*=} value Property value to refect.
       * @return {void}
       * @override
       */},{key:"_propertyToAttribute",value:function _propertyToAttribute(property,attribute,value){this.__serializing=!0;value=3>arguments.length?this[property]:value;this._valueToNodeAttribute(/** @type {!HTMLElement} */this,value,attribute||this.constructor.attributeNameForProperty(property));this.__serializing=!1}/**
       * Sets a typed value to an HTML attribute on a node.
       *
       * This method calls the `_serializeValue` method to convert the typed
       * value to a string.  If the `_serializeValue` method returns `undefined`,
       * the attribute will be removed (this is the default for boolean
       * type `false`).
       *
       * @param {Element} node Element to set attribute to.
       * @param {*} value Value to serialize.
       * @param {string} attribute Attribute name to serialize to.
       * @return {void}
       * @override
       */},{key:"_valueToNodeAttribute",value:function _valueToNodeAttribute(node,value,attribute){var str=this._serializeValue(value);if("class"===attribute||"name"===attribute||"slot"===attribute){node=/** @type {?Element} */wrap$1(node)}if(str===void 0){node.removeAttribute(attribute)}else{node.setAttribute(attribute,str)}}/**
       * Converts a typed JavaScript value to a string.
       *
       * This method is called when setting JS property values to
       * HTML attributes.  Users may override this method to provide
       * serialization for custom types.
       *
       * @param {*} value Property value to serialize.
       * @return {string | undefined} String serialized from the provided
       * property  value.
       * @override
       */},{key:"_serializeValue",value:function _serializeValue(value){switch(babelHelpers.typeof(value)){case"boolean":return value?"":void 0;default:return null!=value?value.toString():void 0;}}/**
       * Converts a string to a typed JavaScript value.
       *
       * This method is called when reading HTML attribute values to
       * JS properties.  Users may override this method to provide
       * deserialization for custom `type`s. Types for `Boolean`, `String`,
       * and `Number` convert attributes to the expected types.
       *
       * @param {?string} value Value to deserialize.
       * @param {*=} type Type to deserialize the string to.
       * @return {*} Typed value deserialized from the provided string.
       * @override
       */},{key:"_deserializeValue",value:function _deserializeValue(value,type){switch(type){case Boolean:return null!==value;case Number:return+value;default:return value;}}}]);return PropertiesChanged}(superClass);return PropertiesChanged});/**
                              * Element class mixin that provides basic meta-programming for creating one
                              * or more property accessors (getter/setter pair) that enqueue an async
                              * (batched) `_propertiesChanged` callback.
                              *
                              * For basic usage of this mixin, call `MyClass.createProperties(props)`
                              * once at class definition time to create property accessors for properties
                              * named in props, implement `_propertiesChanged` to react as desired to
                              * property changes, and implement `static get observedAttributes()` and
                              * include lowercase versions of any property names that should be set from
                              * attributes. Last, call `this._enableProperties()` in the element's
                              * `connectedCallback` to enable the accessors.
                              *
                              * @mixinFunction
                              * @polymer
                              * @summary Element class mixin for reacting to property changes from
                              *   generated property accessors.
                              * @template T
                              * @param {function(new:T)} superClass Class to apply mixin to.
                              * @return {function(new:T)} superClass with mixin applied.
                              */_exports.PropertiesChanged=PropertiesChanged;var propertiesChanged={PropertiesChanged:PropertiesChanged};// that won't have their values "saved" by `saveAccessorValue`, since
// reading from an HTMLElement accessor from the context of a prototype throws
_exports.$propertiesChanged=propertiesChanged;var nativeProperties={},proto=HTMLElement.prototype;while(proto){for(var props=Object.getOwnPropertyNames(proto),i=0;i<props.length;i++){nativeProperties[props[i]]=!0}proto=Object.getPrototypeOf(proto)}/**
   * Used to save the value of a property that will be overridden with
   * an accessor. If the `model` is a prototype, the values will be saved
   * in `__dataProto`, and it's up to the user (or downstream mixin) to
   * decide how/when to set these values back into the accessors.
   * If `model` is already an instance (it has a `__data` property), then
   * the value will be set as a pending property, meaning the user should
   * call `_invalidateProperties` or `_flushProperties` to take effect
   *
   * @param {Object} model Prototype or instance
   * @param {string} property Name of property
   * @return {void}
   * @private
   */function saveAccessorValue(model,property){// Don't read/store value for any native properties since they could throw
if(!nativeProperties[property]){var value=model[property];if(value!==void 0){if(model.__data){// Adding accessor to instance; update the property
// It is the user's responsibility to call _flushProperties
model._setPendingProperty(property,value)}else{// Adding accessor to proto; save proto's value for instance-time use
if(!model.__dataProto){model.__dataProto={}}else if(!model.hasOwnProperty(JSCompiler_renameProperty("__dataProto",model))){model.__dataProto=Object.create(model.__dataProto)}model.__dataProto[property]=value}}}}/**
   * Element class mixin that provides basic meta-programming for creating one
   * or more property accessors (getter/setter pair) that enqueue an async
   * (batched) `_propertiesChanged` callback.
   *
   * For basic usage of this mixin:
   *
   * -   Declare attributes to observe via the standard `static get
   *     observedAttributes()`. Use `dash-case` attribute names to represent
   *     `camelCase` property names.
   * -   Implement the `_propertiesChanged` callback on the class.
   * -   Call `MyClass.createPropertiesForAttributes()` **once** on the class to
   *     generate property accessors for each observed attribute. This must be
   *     called before the first instance is created, for example, by calling it
   *     before calling `customElements.define`. It can also be called lazily from
   *     the element's `constructor`, as long as it's guarded so that the call is
   *     only made once, when the first instance is created.
   * -   Call `this._enableProperties()` in the element's `connectedCallback` to
   *     enable the accessors.
   *
   * Any `observedAttributes` will automatically be
   * deserialized via `attributeChangedCallback` and set to the associated
   * property using `dash-case`-to-`camelCase` convention.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertiesChanged
   * @summary Element class mixin for reacting to property changes from
   *   generated property accessors.
   * @template T
   * @param {function(new:T)} superClass Class to apply mixin to.
   * @return {function(new:T)} superClass with mixin applied.
   */var PropertyAccessors=dedupingMixin(function(superClass){/**
   * @constructor
   * @implements {Polymer_PropertiesChanged}
   * @unrestricted
   * @private
   */var base=PropertiesChanged(superClass),PropertyAccessors=/*#__PURE__*/function(_base){babelHelpers.inherits(PropertyAccessors,_base);function PropertyAccessors(){babelHelpers.classCallCheck(this,PropertyAccessors);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PropertyAccessors).apply(this,arguments))}babelHelpers.createClass(PropertyAccessors,[{key:"_initializeProperties",/**
       * Overrides PropertiesChanged implementation to initialize values for
       * accessors created for values that already existed on the element
       * prototype.
       *
       * @return {void}
       * @protected
       * @override
       */value:function _initializeProperties(){if(this.__dataProto){this._initializeProtoProperties(this.__dataProto);this.__dataProto=null}babelHelpers.get(babelHelpers.getPrototypeOf(PropertyAccessors.prototype),"_initializeProperties",this).call(this)}/**
       * Called at instance time with bag of properties that were overwritten
       * by accessors on the prototype when accessors were created.
       *
       * The default implementation sets these properties back into the
       * setter at instance time.  This method is provided as an override
       * point for customizing or providing more efficient initialization.
       *
       * @param {Object} props Bag of property values that were overwritten
       *   when creating property accessors.
       * @return {void}
       * @protected
       * @override
       */},{key:"_initializeProtoProperties",value:function _initializeProtoProperties(props){for(var _p7 in props){this._setProperty(_p7,props[_p7])}}/**
       * Ensures the element has the given attribute. If it does not,
       * assigns the given value to the attribute.
       *
       * @suppress {invalidCasts} Closure can't figure out `this` is infact an
       *     element
       *
       * @param {string} attribute Name of attribute to ensure is set.
       * @param {string} value of the attribute.
       * @return {void}
       * @override
       */},{key:"_ensureAttribute",value:function _ensureAttribute(attribute,value){var el=/** @type {!HTMLElement} */this;if(!el.hasAttribute(attribute)){this._valueToNodeAttribute(el,value,attribute)}}/**
       * Overrides PropertiesChanged implemention to serialize objects as JSON.
       *
       * @param {*} value Property value to serialize.
       * @return {string | undefined} String serialized from the provided property
       *     value.
       * @override
       */},{key:"_serializeValue",value:function _serializeValue(value){/* eslint-disable no-fallthrough */switch(babelHelpers.typeof(value)){case"object":if(babelHelpers.instanceof(value,Date)){return value.toString()}else if(value){try{return JSON.stringify(value)}catch(x){return""}}default:return babelHelpers.get(babelHelpers.getPrototypeOf(PropertyAccessors.prototype),"_serializeValue",this).call(this,value);}}/**
       * Converts a string to a typed JavaScript value.
       *
       * This method is called by Polymer when reading HTML attribute values to
       * JS properties.  Users may override this method on Polymer element
       * prototypes to provide deserialization for custom `type`s.  Note,
       * the `type` argument is the value of the `type` field provided in the
       * `properties` configuration object for a given property, and is
       * by convention the constructor for the type to deserialize.
       *
       *
       * @param {?string} value Attribute value to deserialize.
       * @param {*=} type Type to deserialize the string to.
       * @return {*} Typed value deserialized from the provided string.
       * @override
       */},{key:"_deserializeValue",value:function _deserializeValue(value,type){/**
       * @type {*}
       */var outValue;switch(type){case Object:try{outValue=JSON.parse(/** @type {string} */value)}catch(x){// allow non-JSON literals like Strings and Numbers
outValue=value}break;case Array:try{outValue=JSON.parse(/** @type {string} */value)}catch(x){outValue=null;console.warn("Polymer::Attributes: couldn't decode Array as JSON: ".concat(value))}break;case Date:outValue=isNaN(value)?value+"":+value;outValue=new Date(outValue);break;default:outValue=babelHelpers.get(babelHelpers.getPrototypeOf(PropertyAccessors.prototype),"_deserializeValue",this).call(this,value,type);break;}return outValue}/* eslint-enable no-fallthrough */ /**
                                          * Overrides PropertiesChanged implementation to save existing prototype
                                          * property value so that it can be reset.
                                          * @param {string} property Name of the property
                                          * @param {boolean=} readOnly When true, no setter is created
                                          *
                                          * When calling on a prototype, any overwritten values are saved in
                                          * `__dataProto`, and it is up to the subclasser to decide how/when
                                          * to set those properties back into the accessor.  When calling on an
                                          * instance, the overwritten value is set via `_setPendingProperty`,
                                          * and the user should call `_invalidateProperties` or `_flushProperties`
                                          * for the values to take effect.
                                          * @protected
                                          * @return {void}
                                          * @override
                                          */},{key:"_definePropertyAccessor",value:function _definePropertyAccessor(property,readOnly){saveAccessorValue(this,property);babelHelpers.get(babelHelpers.getPrototypeOf(PropertyAccessors.prototype),"_definePropertyAccessor",this).call(this,property,readOnly)}/**
       * Returns true if this library created an accessor for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if an accessor was created
       * @override
       */},{key:"_hasAccessor",value:function(){}