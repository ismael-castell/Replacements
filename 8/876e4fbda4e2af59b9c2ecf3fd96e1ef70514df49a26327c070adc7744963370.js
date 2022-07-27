import { r as registerInstance, h, H as Host, g as getElement, c as createEvent, F as Fragment } from './index-daaf0985.js';
import { A as AccordionVariants, C as CtaLinkButtonVariants, B as BreadcrumbVariants, d as CheckboxVariants, e as CourseStateVariants, f as CourseVariants, g as CtaLinkVariants, h as ColorVariant, L as ListStyleVariants, F as FooterLinkItemColor, S as SiteLogoSize, i as FooterVariant, H as HeadingVarians, j as FooterLinkVariants, k as HeadingSectionVariants, l as GeneralListTypes, m as HeroTypeVariant, n as HeroGroupTypeVariant, o as HeroColorVariant, p as HeroSizeVariant, K as KeyHighlightVariants, q as LinkVariants, r as LinkBoxVariants, s as ListItemVariants, M as MenuType, P as PaginationItemVariants, t as PersonCardVariants, u as ProcessFlowBoxVariants } from './utils-966ffdb5.js';
import { j as jsonParserWorker } from './globalScript-9d045b36.js';

const accordionContainerCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{display:block}.hy-accordion-container{width:100%}";

let AccordionContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /*
  * data-allow-toggle
    Allow for each toggle to both open and close individually

  data-allow-multiple
    Allow for multiple accordion sections to be expanded at the same time.
    Assumes data-allow-toggle otherwise you would not be able to close any of the accordions
  */
  render() {
    const classAttributes = ['hy-accordion-container', 'js-hy-accordion'];
    const id = this.accordionid.toLowerCase().replace(/\W/g, '-');
    return (h(Host, null, h("div", { id: id, class: classAttributes.join(' '), "data-allow-multiple": "true", "data-allow-toggle": "true" }, h("slot", null)), h("hy-box", { mb: "1.75, 1.75, 2, 2.5" })));
  }
};
AccordionContainer.style = accordionContainerCss;

const accordionItemCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{display:block}.hy-accordion__item{margin-bottom:12px}.hy-accordion__item__is-open{border:1px solid var(--grayscale-dark)}.hy-accordion__item__is-open .hy-accordion--heading{margin:0 auto}.hy-accordion__item__is-open .hy-accordion--heading .hy-accordion--heading__icon{-webkit-transform:rotateX(180deg);transform:rotateX(180deg)}.hy-accordion__item.mini{margin-bottom:1rem;margin-top:1rem}.hy-accordion__item__is-open.mini{margin-bottom:0;margin-top:0}.hy-accordion__item__is-open.mini .hy-accordion__item--container{border-bottom:1px solid var(--grayscale-medium-dark);border-top:1px solid var(--grayscale-medium-dark);padding-top:16px;padding-bottom:32px;margin-top:-1px;-webkit-transition:padding 0.5s ease-in-out;transition:padding 0.5s ease-in-out}@media (min-width: 30rem){.hy-accordion__item__is-open.mini .hy-accordion__item--container{padding-top:28px;padding-bottom:30px}}@media (min-width: 60rem){.hy-accordion__item__is-open.mini .hy-accordion__item--container{padding-top:32px;padding-bottom:40px}}.hy-accordion__item.hy-accordion__item__is-open.mini{background-color:var(--grayscale-white);border:none;-webkit-box-shadow:0 -10px 10px -10px rgba(0, 49, 70, 0.05);box-shadow:0 -10px 10px -10px rgba(0, 49, 70, 0.05)}.hy-accordion--heading{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;letter-spacing:-0.69px;line-height:28px;margin:0 auto;-webkit-transition:all 0.25s ease-in-out;transition:all 0.25s ease-in-out;width:100%}.hy-accordion--heading .hy-accordion__link{text-decoration:none}.hy-accordion--heading .hy-accordion__link:hover{text-decoration:none}.hy-accordion--heading .hy-accordion__button{font-size:1.125rem;line-height:22px;font-weight:700;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;background-color:var(--grayscale-background-box);border:none;color:var(--brand-main-nearly-black);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;font-family:var(--main-font-family);height:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;letter-spacing:-0.45px;padding:13px 20px 13px 16px;-webkit-transition:all 0.35s ease-in;transition:all 0.35s ease-in;width:100%}.hy-accordion--heading .hy-accordion__button:hover{cursor:pointer}@media (min-width: 30rem){.hy-accordion--heading .hy-accordion__button{padding:1rem 2rem 1rem 1.25rem}}@media (min-width: 1601px){.hy-accordion--heading .hy-accordion__button{font-size:1.25rem;line-height:24px;letter-spacing:-0.5px}}@media (min-width: 75.0625rem){.hy-accordion--heading .hy-accordion__button--large{font-size:1.25rem;line-height:24px;letter-spacing:-0.5px}}@media (min-width: 75.0625rem){.hy-accordion--heading .hy-accordion__button--large .hy-accordion--heading__icon svg{height:20px;width:20px}}.hy-accordion--heading .hy-accordion__button span{text-align:left}.hy-accordion--heading .hy-accordion__button[aria-expanded=true]{background:none;position:relative}.hy-accordion--heading .hy-accordion__button[aria-expanded=true]:after{background-color:var(--grayscale-medium-dark);bottom:0;content:\"\";height:1px;left:16px;position:absolute;right:20px}.hy-accordion--heading .hy-accordion__button *{pointer-events:none}.hy-accordion--heading .hy-accordion--heading__icon{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:22px;margin-right:8px;z-index:0}.hy-accordion--heading .hy-accordion--heading__icon svg{fill:var(--brand-main)}@media (min-width: 30rem){.hy-accordion--heading .hy-accordion--heading__icon svg{height:18px;width:18px}}@media (min-width: 1601px){.hy-accordion--heading .hy-accordion--heading__icon svg{height:20px;width:20px}}.hy-accordion--heading.mini .hy-accordion__button{font-size:1.125rem;line-height:22px;background-color:var(--grayscale-white);color:var(--link-blue);letter-spacing:-0.56px;padding:0}@media (min-width: 30rem){.hy-accordion--heading.mini .hy-accordion__button{font-size:1.375rem;line-height:28px;letter-spacing:-0.69px;padding:0}}.hy-accordion--heading.mini .hy-accordion__button[aria-expanded=true]{color:var(--grayscale-black);margin-bottom:20px}@media (min-width: 30rem){.hy-accordion--heading.mini .hy-accordion__button[aria-expanded=true]{margin-bottom:28px}}@media (min-width: 60rem){.hy-accordion--heading.mini .hy-accordion__button[aria-expanded=true]{margin-bottom:32px}}.hy-accordion--heading.mini .hy-accordion--heading__icon{margin-right:0.5rem;z-index:0}@media (min-width: 30rem){.hy-accordion--heading.mini .hy-accordion--heading__icon{margin-right:10px}}.hy-accordion--heading.mini .hy-accordion--heading__icon svg{fill:var(--brand-main-light);height:14px;width:14px}@media (min-width: 30rem){.hy-accordion--heading.mini .hy-accordion--heading__icon svg{height:16px;width:16px}}.hy-accordion__content{display:block;height:0;padding:0;overflow:hidden;-webkit-transition:all 0.25s ease-in-out;transition:all 0.25s ease-in-out}.hy-accordion__content--inner-wrapper{display:block;padding:16px 12px}@media (min-width: 30rem){.hy-accordion__content--inner-wrapper{padding:15px 16px}}@media (min-width: 60rem){.hy-accordion__content--inner-wrapper{padding:16px}}@media (min-width: 75.0625rem){.hy-accordion__content--inner-wrapper--large{padding:24px 20px}}@media (min-width: 1601px){.hy-accordion__content--inner-wrapper{padding:24px 20px}}.hy-accordion__content--inner-wrapper--mini{padding:0}.hy-accordion__content--inner-wrapper--mini .course-heading h4{padding-top:0 !important}";

let keys$5 = {
  enter: 'Enter',
  tab: 'Tab',
  pageUp: 'PageUp',
  pageDown: 'PageDown',
  arrowUp: 'ArrowUp',
  arrowDown: 'ArrowDown',
  home: 'Home',
  end: 'End', //35
};
let AccordionItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = AccordionVariants.default;
    this.headerstyle = 'common';
    this.showOpen = false;
    this.ready = false;
  }
  componentDidLoad() {
    this.ready = true;
    let hyMainDiv = this.el.closest('.hy-main');
    if (hyMainDiv) {
      if (!hyMainDiv.classList.contains('with-sidebar')) {
        this.headerstyle = 'large';
      }
    }
  }
  componentDidRender() {
    if (window.location.hash) {
      this.expandPanelByAnchor(window.location.hash);
    }
    document.querySelectorAll('.hy-accordion__content').forEach(function (accordion) {
      let showOpen = accordion.classList.contains('open');
      let element = accordion;
      if (showOpen) {
        element.style.display = 'block';
        element.style.height = element.scrollHeight + 'px';
      }
      else {
        element.style.height = 0 + 'px';
        element.style.display = 'none';
      }
    });
  }
  onHashChange() {
    if (window.location.hash) {
      this.expandPanelByAnchor(window.location.hash);
    }
  }
  handleKeyDown(event) {
    const containerId = this.el.parentElement.id;
    let accordion = document.querySelectorAll(`#${containerId}`)[0];
    const triggers = Array.prototype.slice.call(accordion.querySelectorAll('.hy-accordion__button'));
    let target = event.target;
    const key = event.code;
    const ctrlModifier = event.ctrlKey && [keys$5.pageDown, keys$5.pageUp].includes(key); //key.match(/33|34/);
    if (target.classList.contains('hy-accordion__button')) {
      // Up/ Down arrow and Control + Page Up/ Page Down keyboard operations
      if ([keys$5.arrowDown, keys$5.arrowUp].includes(key) || ctrlModifier) {
        const index = triggers.indexOf(target);
        const direction = [keys$5.arrowDown, keys$5.pageDown].includes(key) ? 1 : -1;
        const length = triggers.length;
        const newIndex = (index + length + direction) % length;
        triggers[newIndex].focus();
        event.preventDefault();
      }
      else if ([keys$5.home, keys$5.end].includes(key)) {
        switch (key) {
          // Go to first accordion
          case keys$5.home:
            triggers[0].focus();
            break;
          // Go to last accordion
          case keys$5.end:
            triggers[triggers.length - 1].focus();
            break;
        }
        event.preventDefault();
      }
    }
  }
  handleClick(event) {
    const target = event.target;
    const accordionContainer = this.el.parentElement;
    const allowMultiple = accordionContainer.hasAttribute('data-allow-multiple');
    const allowToggle = allowMultiple ? allowMultiple : accordionContainer.hasAttribute('data-allow-toggle');
    if (target && target.tagName.toLowerCase() === 'button') {
      let targetParent = target.closest('.hy-accordion__item');
      let targetContent = targetParent.getElementsByClassName('hy-accordion__content')[0];
      const isExpanded = target.getAttribute('aria-expanded') === 'true';
      const activeButtonElement = accordionContainer.querySelector('[aria-expanded="true"]');
      if (!allowMultiple && activeButtonElement && activeButtonElement !== target) {
        activeButtonElement.setAttribute('aria-expanded', 'false');
        this.collapseSection(targetContent);
        if (targetParent.classList.contains('hy-accordion__item__is-open')) {
          targetParent.classList.remove('hy-accordion__item__is-open');
        }
        accordionContainer
          .querySelector(`#${activeButtonElement.getAttribute('aria-controls')}`)
          .setAttribute('aria-hidden', 'true');
        if (!allowToggle) {
          activeButtonElement.removeAttribute('aria-disabled');
        }
      }
      if (!isExpanded) {
        this.expandSection(targetContent);
        target.setAttribute('aria-expanded', 'true');
        targetParent.classList.add('hy-accordion__item__is-open');
        accordionContainer
          .querySelector(`#${target.getAttribute('aria-controls')}`)
          .setAttribute('aria-hidden', 'false');
        if (!allowToggle) {
          target.setAttribute('aria-disabled', 'true');
        }
      }
      else if (allowToggle && isExpanded) {
        target.setAttribute('aria-expanded', 'false');
        this.collapseSection(targetContent);
        if (targetParent.classList.contains('hy-accordion__item__is-open')) {
          targetParent.classList.remove('hy-accordion__item__is-open');
        }
        accordionContainer
          .querySelector(`#${target.getAttribute('aria-controls')}`)
          .setAttribute('aria-hidden', 'true');
      }
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }
  expandPanelByAnchor(anchor) {
    setTimeout(() => {
      if (anchor.length > 0) {
        anchor = anchor.substr(1);
        let target = document.querySelectorAll(`[id=${anchor}]`)[0];
        if (target && target.classList.contains('hy-accordion__button')) {
          let targetParent = target.closest('.hy-accordion__item');
          let targetContent = targetParent.querySelectorAll('.hy-accordion__content')[0];
          this.expandSection(targetContent);
          target.setAttribute('aria-expanded', 'true');
          targetParent.classList.add('hy-accordion__item__is-open');
          const targetElementRect = target.getBoundingClientRect();
          window.scrollTo({ top: window.scrollY + targetElementRect.top - 200, behavior: 'smooth' });
          const containerId = targetParent.parentElement.parentElement.id;
          if (containerId.length > 0) {
            let accordion = document.querySelectorAll(`#${containerId}`)[0];
            accordion.querySelector(`#${target.getAttribute('aria-controls')}`).setAttribute('aria-hidden', 'false');
          }
        }
      }
    }, 200);
  }
  collapseSection(element) {
    element.style.height = 0 + 'px';
    element.setAttribute('data-collapsed', 'true');
    setTimeout(() => {
      element.style.display = 'none';
    }, 250);
  }
  expandSection(element) {
    element.style.display = 'block';
    element.style.height = element.scrollHeight + 'px';
    element.setAttribute('data-collapsed', 'false');
  }
  render() {
    const containerId = this.el.parentElement.id;
    if (this.ready && containerId.length > 0) {
      document.querySelectorAll(`#${containerId}`).forEach(function (accordion) {
        if (accordion) {
          accordion.querySelectorAll('.hy-accordion__button').forEach(function (trigger) {
            trigger.addEventListener('focus', function () {
              trigger.classList.add('focus');
            });
            trigger.addEventListener('blur', function () {
              trigger.classList.remove('focus');
            });
          });
        }
      });
    }
    const classIsOpen = this.showOpen ? 'hy-accordion__item__is-open' : '';
    const classContentIsOpen = this.showOpen ? 'open' : '';
    const classAttributes = ['hy-accordion__item', this.variant, classIsOpen].join(' ');
    const classInnerWrapper = ['hy-accordion__item--container', this.variant].join(' ');
    const classHeadingAttributes = ['hy-accordion--heading', this.variant].join(' ');
    const classContentAttributes = [
      'hy-accordion__content',
      `hy-accordion__content--${this.variant}`,
      this.variant,
      classContentIsOpen,
    ].join(' ');
    const classContentInnerWrapper = [
      'hy-accordion__content--inner-wrapper',
      `hy-accordion__content--inner-wrapper--${this.headerstyle}`,
      `hy-accordion__content--inner-wrapper--${this.variant}`,
    ].join(' ');
    const titleAsId = this.accordiontitle.toLowerCase().replace(/\W/g, '-');
    const accordionItemHref = '#' + titleAsId + '--title';
    const ariaExpanded = this.showOpen ? 'true' : 'false';
    const ariaHidden = this.showOpen ? 'false' : 'true';
    const dataCollapsed = this.showOpen ? 'false' : 'true';
    return (h("div", { class: classAttributes }, h("div", { class: classInnerWrapper }, h("div", { class: classHeadingAttributes }, h("a", { href: accordionItemHref, class: "hy-accordion__link", tabindex: "-1" }, h("button", { "aria-expanded": ariaExpanded, "aria-controls": `${titleAsId}--content`, class: `hy-accordion__button hy-accordion__button--${this.headerstyle}`, id: `${titleAsId}--title` }, h("span", { class: "hy-accordion--heading__icon" }, h("hy-icon", { icon: 'hy-icon-caret-down', size: 16 })), h("span", null, this.accordiontitle)))), h("div", { "aria-labelledBy": `${titleAsId}--title`, class: classContentAttributes, id: `${titleAsId}--content`, role: "region", "aria-hidden": ariaHidden, "data-collapsed": dataCollapsed, style: { display: 'none' } }, h("div", { class: classContentInnerWrapper }, h("slot", null))))));
  }
  get el() { return getElement(this); }
};
AccordionItem.style = accordionItemCss;

const adjacentImageTextCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{display:block}.hy-adjacent-image-text{background:var(--grayscale-background-box);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative}@media (min-width: 30rem){.hy-adjacent-image-text{background:transparent}}@media (min-width: 60rem){.hy-adjacent-image-text{background:var(--grayscale-background-box);-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}}.hy-adjacent-image-text__image-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:stretch;-ms-flex-pack:stretch;justify-content:stretch;margin-bottom:0;min-height:10rem;position:relative;padding-bottom:32px}@media (min-width: 30rem){.hy-adjacent-image-text__image-container{padding-bottom:0}}@media (min-width: 60rem){.hy-adjacent-image-text__image-container{-ms-flex-preferred-size:50%;flex-basis:50%;margin:0 calc(var(--gutter-wide) * -1) 0 0;z-index:1}}@media (min-width: 75.0625rem){.hy-adjacent-image-text__image-container{margin:0 calc(var(--gutter-extrawide) * -1) 0 0}}.hy-adjacent-image-text__image-container img{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}@media (min-width: 30rem){.hy-adjacent-image-text__image-container img{max-height:420px;min-height:160px}}@media (min-width: 60rem){.hy-adjacent-image-text__image-container img{max-height:100%}}.hy-adjacent-image-text__text-container{background:var(--grayscale-background-box);border-image:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-border-image:none;-moz-border-image:none;-o-border-image:none}@media (min-width: 30rem){.hy-adjacent-image-text__text-container{border-left:1px solid transparent;border-image:-webkit-gradient(linear, left top, left bottom, from(var(--grayscale-medium-dark)), to(rgba(0, 0, 0, 0))) 1 0 0 100%;border-image:linear-gradient(to bottom, var(--grayscale-medium-dark), rgba(0, 0, 0, 0)) 1 0 0 100%;margin-left:66px;margin-top:-63px;padding-top:38px;position:relative;z-index:98;-moz-border-image:linear-gradient(to bottom, var(--grayscale-medium-dark), rgba(0, 0, 0, 0)) 1 0 0 100%;-o-border-image:linear-gradient(to bottom, var(--grayscale-medium-dark), rgba(0, 0, 0, 0)) 1 0 0 100%}}@media (min-width: 60rem){.hy-adjacent-image-text__text-container{border-image:none;border-left:none;-ms-flex-preferred-size:50%;flex-basis:50%;margin-left:0;margin-top:0;padding-top:0;z-index:0;-webkit-border-image:none;-moz-border-image:none;-o-border-image:none}}.hy-adjacent-image-text__text-container__links-wrapper{padding-left:1rem}@media (min-width: 30rem){.hy-adjacent-image-text__text-container__links-wrapper{padding-left:50px}}@media (min-width: 60rem){.hy-adjacent-image-text__text-container__links-wrapper{margin:0 0 0 14%;padding:0}}.hy-adjacent-image-text__text-container__info-wrapper{padding-left:0;padding-right:0}@media (min-width: 30rem){.hy-adjacent-image-text__text-container__info-wrapper{padding-left:50px}}@media (min-width: 60rem){.hy-adjacent-image-text__text-container__info-wrapper{margin:0 7% 0 14%;padding:0}}.hy-adjacent-image-text__text-container__title{font-size:1.375rem;line-height:28px;font-weight:700;color:var(--brand-main-nearly-black);font-family:var(--main-font-family);letter-spacing:-0.69px;margin-top:32px;padding:0 1rem}@media (min-width: 30rem){.hy-adjacent-image-text__text-container__title{font-size:2rem;line-height:40px;letter-spacing:-1px;margin-top:41px;padding:0}}.hy-adjacent-image-text__text-container__description{font-size:0.9375rem;line-height:22px;font-weight:400;color:var(--grayscale-dark);font-family:var(--main-font-family);margin:20px 0 32px 0;padding:0 1rem}@media (min-width: 30rem){.hy-adjacent-image-text__text-container__description{font-size:1rem;line-height:24px;margin:20px 0 61px 0;padding:0}}@media (min-width: 1601px){.hy-adjacent-image-text__text-container__description{font-size:1.0625rem;line-height:26px;margin-bottom:40px}}@media (min-width: 75.0625rem){.hy-adjacent-image-text__text-container__description__large{font-size:1.0625rem;line-height:26px}}.hy-adjacent-image-text__text-container__link{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;margin-bottom:12px;margin-right:-6px}.hy-adjacent-image-text::after{content:\"\";clear:both}";

let AdjacentImageText = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.headerstyle = 'default';
    this.imageUrl = null;
    this.imageAlt = '';
    this.disableLazy = false;
    this.textDescription = null;
    this.mainUrlIsExternal = false;
    this.mainUrlIsExternal2 = false;
  }
  async componentWillLoad() {
    this._sourceSet = await jsonParserWorker(this.sourceSet);
  }
  componentDidLoad() {
    let hyMainDiv = this.el.closest('.hy-main');
    if (hyMainDiv) {
      if (!hyMainDiv.classList.contains('with-sidebar')) {
        this.headerstyle = 'large';
      }
    }
  }
  render() {
    const classAttributes = ['hy-adjacent-image-text', `hy-adjacent-image-text__${this.headerstyle}`].join(' ');
    const contentClassAttributes = [
      'hy-adjacent-image-text__text-container',
      'hy-adjacent-image-text__text-container--left',
    ].join(' ');
    const imageLeftClassAttributes = ['hy-adjacent-image-text__image-container'].join(' ');
    const aspectRatioWidth = 6;
    const aspectRatioHeight = 4;
    const aspect = (aspectRatioHeight / aspectRatioWidth) * 100;
    const aspectRatio = {
      '--aspectRatio': `${aspect}%`,
    };
    return (h(Host, null, h("div", { class: classAttributes }, h("div", { class: imageLeftClassAttributes, style: aspectRatio }, this._sourceSet ? (h("picture", null, this._sourceSet.map((item) => (h("source", { srcSet: item.src, media: item.media, type: item.type, sizes: item.sizes ? item.sizes : '' }))), h("img", { loading: this.disableLazy ? 'eager' : 'lazy', alt: this.imageAlt, class: "hy-image__image", src: this.imageUrl }))) : (h("img", { loading: this.disableLazy ? 'eager' : 'lazy', alt: this.imageAlt, class: "hy-image__image", src: this.imageUrl }))), h("div", { class: contentClassAttributes }, h("div", { class: "hy-adjacent-image-text__text-container__info-wrapper" }, h("div", { class: "hy-adjacent-image-text__text-container__title" }, this.textTitle), h("p", { class: `hy-adjacent-image-text__text-container__description hy-adjacent-image-text__text-container__description__${this.headerstyle}` }, this.textDescription)), h("div", { class: "hy-adjacent-image-text__text-container__links-wrapper" }, this.mainUrl && (h("div", { class: "hy-adjacent-image-text__text-container__link" }, h("hy-cta-link", { "link-content": this.mainUrlTitle, "sc-label": this.mainUrlAriaLabel, url: this.mainUrl, "is-external": this.mainUrlIsExternal }))), this.mainUrl2 && (h("div", { class: "hy-adjacent-image-text__text-container__link" }, h("hy-cta-link", { "link-content": this.mainUrlTitle2, "sc-label": this.mainUrlAriaLabel2, url: this.mainUrl2, "is-external": this.mainUrlIsExternal2 })))))), h("hy-box", { mb: "1.75, 1.75, 2, 2.5" })));
  }
  get el() { return getElement(this); }
};
AdjacentImageText.style = adjacentImageTextCss;

const hyAnchorLinkListCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{display:block}:host(.hy-anchor-link-list){border:1px solid var(--brand-main);width:100%}@media (min-width: 30rem){:host(.hy-anchor-link-list){margin-bottom:1.75rem}}@media (min-width: 48rem){:host(.hy-anchor-link-list){margin-bottom:1.75rem}}@media (min-width: 60rem){:host(.hy-anchor-link-list){margin-bottom:2rem}}@media (min-width: 1601px){:host(.hy-anchor-link-list){margin-bottom:2.5rem}}:host(.hy-anchor-link-list).is-open{border:1px solid var(--grayscale-dark)}.hy-anchor-link-list__button{border:none;background:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:15px 20px;width:100%}@media (min-width: 48rem){.hy-anchor-link-list__button{padding:18px 20px}}.hy-anchor-link-list__button:hover{cursor:pointer}.hy-anchor-link-list__button.is-open .label-close-icon svg{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.hy-anchor-link-list__button--title{font-size:1.0625rem;line-height:20px;font-weight:700;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--brand-main);font-family:var(--main-font-family);letter-spacing:-0.32px}.hy-anchor-link-list__button--title svg{margin-right:12px}.hy-anchor-link-list__button--label{font-size:1rem;line-height:20px;font-weight:600;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--link-blue);font-family:var(--main-font-family);letter-spacing:-0.3px;text-align:right}.hy-anchor-link-list__button--label svg{margin-left:7px}.hy-anchor-link-list__container{display:none;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:18px 0;margin:0 20px}.hy-anchor-link-list__container.is-open{display:-webkit-box;display:-ms-flexbox;display:flex;border-top:1px solid var(--grayscale-dark)}.hy-anchor-link-list__item{font-size:1rem;line-height:20px;font-weight:600;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--link-blue);font-family:var(--main-font-family);font-size:16px;font-weight:600;letter-spacing:-0.5px;line-height:20px;margin-bottom:16px;text-decoration:none}.hy-anchor-link-list__item:hover{cursor:pointer;text-decoration:underline}.hy-anchor-link-list__item svg{margin-right:12px}";

let HyAnchorLinkList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isOpen = false;
  }
  async componentWillLoad() {
    this._anchorItems = await jsonParserWorker(this.anchorItems);
  }
  handleLinkClick(e) {
    const targetId = e.target.getAttribute('href');
    if (targetId) {
      const targetElement = document.getElementById(targetId.substring(1));
      const targetRect = targetElement.getBoundingClientRect();
      window.scrollTo({ top: window.scrollY + targetRect.top - 100, behavior: 'smooth' });
    }
    e.preventDefault();
    e.stopPropagation();
  }
  render() {
    const classAttributes = ['hy-anchor-link-list'].join(' ');
    const buttonClasses = {
      'hy-anchor-link-list__button': true,
      'is-open': this.isOpen,
    };
    const containerClasses = {
      'hy-anchor-link-list__container': true,
      'is-open': this.isOpen,
    };
    const items = this._anchorItems;
    return (h(Host, { class: classAttributes }, h("button", { "aria-label": this.listTitle, onClick: () => (this.isOpen = !this.isOpen), class: buttonClasses }, h("span", { class: "hy-anchor-link-list__button--title" }, h("hy-icon", { icon: 'hy-icon-bullet-list', size: 18, fill: 'var(--brand-main)' }), this.listTitle), h("span", { class: "hy-anchor-link-list__button--label" }, this.isOpen ? this.closeLabel : this.openLabel, h("hy-icon", { class: "label-close-icon", icon: 'hy-icon-caret-down', size: 16, fill: 'var(--brand-main)' }))), h("div", { "aria-hidden": this.isOpen ? 'false' : 'true', class: containerClasses }, items &&
      items.map((item) => (h("a", { class: "hy-anchor-link-list__item", href: item.url, onClick: this.handleLinkClick }, h("hy-icon", { icon: 'hy-icon-arrow-down', size: 12, fill: 'var(--brand-main)' }), item.title))))));
  }
};
HyAnchorLinkList.style = hyAnchorLinkListCss;

const hyBadgeCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{display:block}span.hy-badge{border-radius:15px;padding:0.25rem 1rem;text-align:center;color:black;font-weight:bold;font-family:var(--main-font-family);font-size:0.6rem}span.hy-badge.primary{background-color:var(--brand-main-light);color:white}span.hy-badge.warn{background-color:var(--additional-red-dark);color:white}span.hy-badge.success{background-color:var(--additional-green-dark);color:white}span.hy-badge.disabled{background-color:var(--grayscale-medium-dark);color:black}";

let HyBadge = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = 'primary';
  }
  render() {
    const classAttributes = ['hy-badge', this.variant];
    return (h(Host, null, h("span", { class: classAttributes.join(' ') }, h("slot", null))));
  }
};
HyBadge.style = hyBadgeCss;

const hyBannerCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{display:block}.hy-banner{background-color:var(--brand-main-light);padding:28px 0 24px 0}@media (min-width: 30rem){.hy-banner{padding:40px 0 32px 0}}@media (min-width: 60rem){.hy-banner{padding:48px 0 40px 0;margin-left:8px;margin-right:8px}}@media (min-width: 75.0625rem){.hy-banner{margin-left:0;margin-right:0}}@media (min-width: 1601px){.hy-banner{padding:64px 32px 48px 32px;margin-left:-20px;margin-right:-20px}}@media (min-width: 1664px){.hy-banner{margin-left:0;margin-right:0}}@media (min-width: 75.0625rem){.hy-banner__large{padding:64px 0 48px 0;margin-left:-20px;margin-right:-20px}}@media (min-width: 1344px){.hy-banner__large{margin-left:0;margin-right:0}}@media (min-width: 60rem){.hy-banner__info-container{margin-left:-8px;margin-right:-8px}}@media (min-width: 1601px){.hy-banner__info-container{margin-left:0;margin-right:0}}.hy-banner__info-container__title{font-size:1.5rem;line-height:24px;color:var(--grayscale-white);font-family:var(--main-font-family);font-weight:600;letter-spacing:-0.8px;margin-bottom:16px;text-transform:uppercase}@media (min-width: 30rem){.hy-banner__info-container__title{font-size:2rem;line-height:32px;letter-spacing:-1.07px;margin-bottom:24px;max-width:92%}}@media (min-width: 75.0625rem){.hy-banner__info-container__title{font-size:2rem;line-height:32px;letter-spacing:-1.07px;margin-bottom:24px;max-width:92%}}@media (min-width: 1601px){.hy-banner__info-container__title{font-size:2.25rem;line-height:36px;letter-spacing:-1.2px;max-width:83%}}@media (min-width: 75.0625rem){.hy-banner__info-container__title__large{font-size:2.25rem;line-height:36px;letter-spacing:-1.2px;max-width:83%}}@media (min-width: 1601px){.hy-banner__info-container__title__large{font-size:2.5rem;line-height:40px;letter-spacing:-1.33px;margin-bottom:32px}}.hy-banner__info-container__description{color:var(--grayscale-white);font-family:var(--main-font-family);font-weight:500;font-size:14px;letter-spacing:-0.7px;line-height:20px;margin-bottom:24px}@media (min-width: 30rem){.hy-banner__info-container__description{font-size:1rem;line-height:24px;letter-spacing:-0.08px;margin-bottom:28px;max-width:92%}}@media (min-width: 60rem){.hy-banner__info-container__description{margin-bottom:32px}}@media (min-width: 1601px){.hy-banner__info-container__description{font-size:1.125rem;line-height:24px;letter-spacing:-0.09px;margin-bottom:36px;max-width:83%}}@media (min-width: 75.0625rem){.hy-banner__info-container__description__large{font-size:1.125rem;line-height:24px;letter-spacing:-0.09px;margin-bottom:36px;max-width:83%}}@media (min-width: 1601px){.hy-banner__info-container__description__large{margin-bottom:44px}}";

let HyBanner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.textDescription = null;
    this.headerstyle = 'common';
    this.isExternal = false;
  }
  componentDidLoad() {
    let hyMainDiv = this.el.closest('.hy-main');
    if (hyMainDiv) {
      if (!hyMainDiv.classList.contains('with-sidebar')) {
        this.headerstyle = 'large';
      }
    }
  }
  render() {
    const hyBannerClass = ['hy-banner', `hy-banner__${this.headerstyle}`, this.headerstyle].join(' ');
    const hyBannerWrapperClass = ['hy-banner__info-container'].join(' ');
    const hyBannerTitle = [
      'hy-banner__info-container__title',
      `hy-banner__info-container__title__${this.headerstyle}`,
      this.headerstyle,
    ].join(' ');
    const hyBannerDescription = [
      'hy-banner__info-container__description',
      `hy-banner__info-container__description__${this.headerstyle}`,
      this.headerstyle,
    ].join(' ');
    const variant = CtaLinkButtonVariants.onBlueBkgd;
    return (h(Host, null, h("hy-box", { pt: "1.25, 1.25, 1.5, 2.5" }), h("div", { class: hyBannerClass }, h("hy-main-content-wrapper", null, h("div", { class: hyBannerWrapperClass }, h("div", { class: hyBannerTitle }, this.textTitle), h("div", { class: hyBannerDescription }, this.textDescription), this.url && (h("div", { class: "hy-banner__info-container__link" }, h("hy-cta-button", { "link-content": this.urlTitle, "sc-label": this.scLabel, url: this.url, "is-external": this.isExternal, variant: variant })))))), h("hy-box", { mb: "1.75, 1.75, 2, 2.5" })));
  }
  get el() { return getElement(this); }
};
HyBanner.style = hyBannerCss;

/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = createStyleElement(this);

      var before;

      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }

      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is a really hot path
        // we check the second character first because having "i"
        // as the second character will happen less often than
        // having "@" as the first character
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools

        sheet.insertRule(rule, // we need to insert @import rules before anything else
        // otherwise there will be an error
        // technically this means that the @import rules will
        // _usually_(not always since there could be multiple style tags)
        // be the first ones in prod and generally later in dev
        // this shouldn't really matter in the real world though
        // @import is generally only used for font faces from google fonts and etc.
        // so while this could be technically correct then it would be slower and larger
        // for a tiny bit of correctness that won't matter in the real world
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();

function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var delimiter = '/*|*/';
var needle = delimiter + '}';

function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}

var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    // property
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              // @import
              Sheet.current.insert(content + ';');
              return '';
            }
          // charcode for l

          case 108:
            {
              // charcode for b
              // this ignores label
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }

        break;
      }
    // selector

    case 2:
      {
        if (ns === 0) return content + delimiter;
        break;
      }
    // at-rule

    case 3:
      {
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            {
              Sheet.current.insert(selectors[0] + content);
              return '';
            }

          default:
            {
              return content + (at === 0 ? delimiter : '');
            }
        }
      }

    case -2:
      {
        content.split(needle).forEach(toSheet);
      }
  }
};

var createCache = function createCache(options) {
  if (options === undefined) options = {};
  var key = options.key || 'css';
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var stylis = new stylis_min(stylisOptions);

  var inserted = {}; // $FlowFixMe

  var container;

  {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });

      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }

  var _insert;

  {
    stylis.use(options.stylisPlugins)(ruleSheet);

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;

      stylis(selector, serialized.styles);

      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  }

  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = memoize(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        }

        break;
      }
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {

      styles += strings[i];
    }
  }


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = murmur2(styles) + identifierName;

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};

var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false ) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      cache.insert("." + className, current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};

function insertWithoutScoping(cache, serialized) {
  if (cache.inserted[serialized.name] === undefined) {
    return cache.insert('', serialized, cache.sheet, true);
  }
}

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var createEmotion = function createEmotion(options) {
  var cache = createCache(options); // $FlowFixMe

  cache.sheet.speedy = function (value) {

    this.isSpeedy = value;
  };

  cache.compat = true;

  var css = function css() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var serialized = serializeStyles(args, cache.registered, undefined);
    insertStyles(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };

  var keyframes = function keyframes() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var serialized = serializeStyles(args, cache.registered);
    var animation = "animation-" + serialized.name;
    insertWithoutScoping(cache, {
      name: serialized.name,
      styles: "@keyframes " + animation + "{" + serialized.styles + "}"
    });
    return animation;
  };

  var injectGlobal = function injectGlobal() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    var serialized = serializeStyles(args, cache.registered);
    insertWithoutScoping(cache, serialized);
  };

  var cx = function cx() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return merge(cache.registered, css, classnames(args));
  };

  return {
    css: css,
    cx: cx,
    injectGlobal: injectGlobal,
    keyframes: keyframes,
    hydrate: function hydrate(ids) {
      ids.forEach(function (key) {
        cache.inserted[key] = true;
      });
    },
    flush: function flush() {
      cache.registered = {};
      cache.inserted = {};
      cache.sheet.flush();
    },
    // $FlowFixMe
    sheet: cache.sheet,
    cache: cache,
    getRegisteredStyles: getRegisteredStyles.bind(null, cache.registered),
    merge: merge.bind(null, cache.registered, css)
  };
};

var classnames = function classnames(args) {
  var cls = '';

  for (var i = 0; i < args.length; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

var _createEmotion = createEmotion(),
    css = _createEmotion.css;

const baselineCss = "div.hy-baseline{display:block}";

const createCss$1 = (value) => {
  return css `
    > * + * {
      margin-top: ${value}rem;
      display: block;
    }
  `;
};
let Baseline = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Top margin to be added to all but first element. Amount of rem:s
     */
    this.margin = 1;
  }
  render() {
    return (h("div", { class: createCss$1(this.margin) }, h("slot", null)));
  }
};
Baseline.style = baselineCss;

const hyBoxCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{display:block}";

/*
Example of using hy-box:
<hy-box mb="1.75, 1.75, 2, 2.5" />
Where mb = margin-bottom,
mobile up to 30rem: 1.75rem (mb[0])
tablet, 30rem - 60rem: 1.75rem (mb[1])
wide, 60rem to 75rem or 60rem to 100.0625rem (depending on hasSidebar) (mb[2])
xlarge, > 100.0625: 2.5rem (mb[3])
* */
const toRemValue = (val) => {
  return typeof val === 'number' ? `${val}rem` : undefined;
};
const breakpoints = ['30rem', '60rem', '75.0625rem', '100.0625rem'];
/*
Default - mobile
mq[0] - tablet
mq[1] - wide, >960px
mq[2] - extrawide, > 1200px
mq[3] - xlarge, >1600px
* */
const mq = breakpoints.map((b) => `@media (min-width: ${b})`);
const createCssClass = ({ hasSidebar, pt, pb, pl, pr, mt, mb, ml, mr, h, bg, width, justify, align }) => {
  const last = width[width.length - 1];
  return css `
    padding-top: ${toRemValue(pt[0])};
    padding-right: ${toRemValue(pr[0])};
    padding-bottom: ${toRemValue(pb[0])};
    padding-left: ${toRemValue(pl[0])};
    margin-top: ${toRemValue(mt[0])};
    margin-right: ${toRemValue(mr[0])};
    margin-bottom: ${toRemValue(mb[0])};
    margin-left: ${toRemValue(ml[0])};
    height: ${toRemValue(h)};
    background-color: ${!!bg ? `var(--${bg})` : 'transparent'};
    width: ${width[0]};
    display: flex;
    justify-content: ${justify || 'flex-start'};
    align-items: ${align || 'flex-start'};

    ${mq[0]} {
      width: ${width[1]};

      padding-top: ${toRemValue(pt[1])};
      padding-right: ${toRemValue(pr[1])};
      padding-bottom: ${toRemValue(pb[1])};
      padding-left: ${toRemValue(pl[1])};

      margin-top: ${toRemValue(mt[1])};
      margin-right: ${toRemValue(mr[1])};
      margin-bottom: ${toRemValue(mb[1])};
      margin-left: ${toRemValue(ml[1])};
    }
    ${mq[1]} {
      width: ${width[2] || last};

      padding-top: ${toRemValue(pt[2])};
      padding-right: ${toRemValue(pr[2])};
      padding-bottom: ${toRemValue(pb[2])};
      padding-left: ${toRemValue(pl[2])};

      margin-top: ${toRemValue(mt[2])};
      margin-right: ${toRemValue(mr[2])};
      margin-bottom: ${toRemValue(mb[2])};
      margin-left: ${toRemValue(ml[2])};
    }
    ${mq[2]} {
      width: ${width[3] || last};

      padding-top: ${hasSidebar ? `${toRemValue(pt[2])}` : `${toRemValue(pt[3])}`};
      padding-right: ${hasSidebar ? `${toRemValue(pr[2])}` : `${toRemValue(pr[3])}`};
      padding-bottom: ${hasSidebar ? `${toRemValue(pb[2])}` : `${toRemValue(pb[3])}`};
      padding-left: ${hasSidebar ? `${toRemValue(pl[2])}` : `${toRemValue(pl[3])}`};

      margin-top: ${hasSidebar ? `${toRemValue(mt[2])}` : `${toRemValue(mt[3])}`};
      margin-right: ${hasSidebar ? `${toRemValue(mr[2])}` : `${toRemValue(mr[3])}`};
      margin-bottom: ${hasSidebar ? `${toRemValue(mb[2])}` : `${toRemValue(mb[3])}`};
      margin-left: ${hasSidebar ? `${toRemValue(ml[2])}` : `${toRemValue(ml[3])}`};
    }
    ${mq[3]} {
      width: ${width[4] || last};

      padding-top: ${toRemValue(pt[3])};
      padding-right: ${toRemValue(pr[3])};
      padding-bottom: ${toRemValue(pb[3])};
      padding-left: ${toRemValue(pl[3])};

      margin-top: ${toRemValue(mt[3])};
      margin-right: ${toRemValue(mr[3])};
      margin-bottom: ${toRemValue(mb[3])};
      margin-left: ${toRemValue(ml[3])};
    }
  `;
};
const toNumArray = (value) => value === null || value === void 0 ? void 0 : value.split(',').map((v) => `${v.trim()}`).map((v) => parseFloat(v));
let HyBox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.headerstyle = 'common';
    /**
     * Value for horisontal alignment (justify-content)
     */
    this.justify = 'flex-start';
    /**
     * value for vertical alignment (align-items)
     */
    this.align = 'baseline';
    /**
     * background color. Must use one of css variable names from color tokens
     */
    this.bg = 'transparent';
    /**
     * Responsive width. Must be a comma separated string of percentage values for breakpoints. First item is the default value.
     */
    this.width = '100';
  }
  componentWillLoad() {
    let hyMainDiv = this.el.closest('.hy-main');
    if (hyMainDiv) {
      if (!hyMainDiv.classList.contains('with-sidebar')) {
        this.headerstyle = 'large';
      }
    }
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    const pt = (_b = (_a = toNumArray(this.pt)) !== null && _a !== void 0 ? _a : toNumArray(this.p)) !== null && _b !== void 0 ? _b : [0];
    const pb = (_d = (_c = toNumArray(this.pb)) !== null && _c !== void 0 ? _c : toNumArray(this.p)) !== null && _d !== void 0 ? _d : [0];
    const pr = (_f = (_e = toNumArray(this.pr)) !== null && _e !== void 0 ? _e : toNumArray(this.p)) !== null && _f !== void 0 ? _f : [0];
    const pl = (_h = (_g = toNumArray(this.pl)) !== null && _g !== void 0 ? _g : toNumArray(this.p)) !== null && _h !== void 0 ? _h : [0];
    const mt = (_k = (_j = toNumArray(this.mt)) !== null && _j !== void 0 ? _j : toNumArray(this.m)) !== null && _k !== void 0 ? _k : [0];
    const mb = (_m = (_l = toNumArray(this.mb)) !== null && _l !== void 0 ? _l : toNumArray(this.m)) !== null && _m !== void 0 ? _m : [0];
    const mr = (_p = (_o = toNumArray(this.mr)) !== null && _o !== void 0 ? _o : toNumArray(this.m)) !== null && _p !== void 0 ? _p : [0];
    const ml = (_r = (_q = toNumArray(this.ml)) !== null && _q !== void 0 ? _q : toNumArray(this.m)) !== null && _r !== void 0 ? _r : [0];
    const hasSidebar = this.headerstyle == 'common';
    return (h(Host, { class: createCssClass({
        hasSidebar,
        pt,
        pl,
        pr,
        pb,
        mt,
        ml,
        mr,
        mb,
        h: this.h,
        bg: this.bg,
        width: this.width.split(',').map((v) => `${v.trim()}%`),
        justify: this.justify,
        align: this.align,
      }) }, h("slot", null)));
  }
  get el() { return getElement(this); }
};
HyBox.style = hyBoxCss;

const hyBoxContainerCss = ":host{display:block}";

let HyBoxContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Should the items wrap to new rows.
     */
    this.wrap = true;
    /**
     * Should the container have a max width of 90rems
     */
    this.maxWidth = true;
  }
  render() {
    return (h(Host, { style: { width: '100%', display: 'flex', flex: '1', justifyContent: 'center' } }, h("div", { class: css `
            display: flex;
            width: 100%;
            flex-wrap: ${this.wrap ? 'wrap' : 'no-wrap'};
            max-width: ${this.maxWidth ? '90rem' : '100%'};
          ` }, h("slot", null))));
  }
};
HyBoxContainer.style = hyBoxContainerCss;

const hyBreadcrumbsCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{display:block}.hy-breadcrumbs{display:inline-block;position:relative;width:auto}.hy-breadcrumbs.is-condensed{width:100%}.hy-breadcrumbs ol{margin:0;padding:0}.hy-breadcrumbs .breadcrumb-container{color:var(--grayscale-dark);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;font-family:var(--main-font-family);list-style-type:none;margin:0;padding:20px 0 16px}@media (min-width: 30rem){.hy-breadcrumbs .breadcrumb-container{padding:24px 0 20px}}@media (min-width: 75.0625rem){.hy-breadcrumbs .breadcrumb-container{padding:32px 0 24px}}.hy-breadcrumbs .breadcrumb-item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.hy-breadcrumbs .breadcrumb-item a{-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--link-blue);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;height:44px;padding-left:6px;padding-right:6px;position:relative;text-decoration:none}.hy-breadcrumbs .breadcrumb-item a.default{font-size:0.875rem;line-height:18px;font-weight:600;letter-spacing:-0.5px}@media (min-width: 75.0625rem){.hy-breadcrumbs .breadcrumb-item a.default{font-size:1rem;line-height:20px}}.hy-breadcrumbs .breadcrumb-item:hover a{color:var(--brand-main);text-decoration:underline}.hy-breadcrumbs .breadcrumb-item:focus{outline:auto}.hy-breadcrumbs .breadcrumb-item.hidden{display:none}.hy-breadcrumbs .breadcrumb-item.home hy-icon.default{margin-bottom:4px}.hy-breadcrumbs .breadcrumb-item.home hy-icon.default svg{fill:var(--brand-main-light);stroke:var(--brand-main-light)}.hy-breadcrumbs .breadcrumb-item.home:hover svg{fill:var(--brand-main) !important;stroke:var(--brand-main) !important}.hy-breadcrumbs .breadcrumb-item.main{min-width:0}.hy-breadcrumbs .breadcrumb-item.main a{display:-webkit-box;display:-ms-flexbox;display:flex}.hy-breadcrumbs .breadcrumb-item__more{display:none;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.hy-breadcrumbs .breadcrumb-item__more.visible{display:-webkit-box;display:-ms-flexbox;display:flex}.hy-breadcrumbs .breadcrumb-item__more .breadcrumb-item-caret:hover{cursor:default}.hy-breadcrumbs .breadcrumb-item-caret svg{fill:var(--grayscale-dark)}.hy-breadcrumbs .breadcrumb-item-dropdown-button{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:transparent;border:0;display:-webkit-box;display:-ms-flexbox;display:flex;height:44px;margin:0;padding-left:6px;padding-right:6px;cursor:pointer}.hy-breadcrumbs .breadcrumb-item-dropdown-button .breadcrumb-item-dropdown-button__content{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:var(--grayscale-white);border-radius:3px;border:2px solid var(--brand-main-light);color:var(--brand-main-light);display:-webkit-box;display:-ms-flexbox;display:flex;height:20px;padding:0 6px;pointer-events:none}.hy-breadcrumbs .breadcrumb-item-dropdown-button .breadcrumb-item-dropdown-button__content>span{position:relative;width:20px;height:10px}.hy-breadcrumbs .breadcrumb-item-dropdown-button .breadcrumb-item-dropdown-button__content>span:after{background-color:var(--grayscale-black);border-radius:50%;-webkit-box-shadow:0 0 0 1px var(--grayscale-black), -6px 0 0 1px var(--grayscale-black), 6px 0 0 1px var(--grayscale-black);box-shadow:0 0 0 1px var(--grayscale-black), -6px 0 0 1px var(--grayscale-black), 6px 0 0 1px var(--grayscale-black);content:\"\";height:2px;left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);width:2px}.hy-breadcrumbs .breadcrumb-item-dropdown-button .breadcrumb-item-dropdown-button__content hy-icon svg{fill:var(--brand-main-light);margin-left:3px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.hy-breadcrumbs .breadcrumb-item-dropdown-button.is-open .breadcrumb-item-dropdown-button__content{background-color:var(--brand-main-light);color:var(--grayscale-white)}.hy-breadcrumbs .breadcrumb-item-dropdown-button.is-open .breadcrumb-item-dropdown-button__content>span:after{background-color:var(--grayscale-white);-webkit-box-shadow:0 0 0 1px var(--grayscale-white), -6px 0 0 1px var(--grayscale-white), 6px 0 0 1px var(--grayscale-white);box-shadow:0 0 0 1px var(--grayscale-white), -6px 0 0 1px var(--grayscale-white), 6px 0 0 1px var(--grayscale-white);width:2px}.hy-breadcrumbs .breadcrumb-item-dropdown-button.is-open hy-icon svg{fill:var(--grayscale-white);-webkit-transform:rotate(270deg);transform:rotate(270deg)}.hy-breadcrumbs .breadcrumb-hidden-items{display:none;list-style:none;visibility:hidden}.hy-breadcrumbs .breadcrumb-hidden-items__is-open{background:var(--grayscale-white);-webkit-box-shadow:0 0 10px 0 rgba(14, 104, 139, 0.2);box-shadow:0 0 10px 0 rgba(14, 104, 139, 0.2);display:block;left:0;padding:16px 0 20px;position:absolute;right:0;top:calc(100% - 11px);visibility:visible;z-index:5}@media (min-width: 30rem){.hy-breadcrumbs .breadcrumb-hidden-items__is-open{left:12px;right:auto}}.hy-breadcrumbs .breadcrumb-hidden-items__is-open a.default{display:-webkit-box;display:-ms-flexbox;display:flex;height:44px;margin:0;width:100%;padding:0 16px}@media (min-width: 30rem){.hy-breadcrumbs .breadcrumb-hidden-items__is-open a.default{padding:0 64px 0 32px}}.hy-breadcrumbs .breadcrumb-item__current{-webkit-box-flex:0;-ms-flex:0 2 auto;flex:0 2 auto;min-width:0}.hy-breadcrumbs .breadcrumb-item__current:hover a{cursor:default;color:var(--grayscale-dark) !important;text-decoration:none !important}.hy-breadcrumbs .breadcrumb-item__current a{color:var(--grayscale-dark);font-family:var(--main-font-family);text-decoration:none;display:block;white-space:nowrap;overflow:hidden;min-height:auto}.hy-breadcrumbs .intermediate{display:-webkit-box;display:-ms-flexbox;display:flex}.hy-breadcrumbs .intermediate.hidden{display:none;visibility:hidden}.hy-breadcrumbs .breadcrumb-item.breadcrumb-item__current a{min-height:0}.hy-breadcrumbs #more,.hy-breadcrumbs .more{display:none;visibility:hidden}.hy-breadcrumbs #more.visible,.hy-breadcrumbs .more.visible{display:-webkit-box;display:-ms-flexbox;display:flex;visibility:visible}.hy-breadcrumbs.large.with-sidebar{display:block;visibility:visible}.hy-breadcrumbs.large.with-sidebar a.large{font-size:1.25rem;line-height:26px;color:var(--grayscale-black);font-weight:700;letter-spacing:-0.6px}@media (min-width: 30rem){.hy-breadcrumbs.large.with-sidebar a.large{font-size:1.625rem;line-height:26px;letter-spacing:-0.8px;font-weight:700}}.hy-breadcrumbs.large.with-sidebar .breadcrumb-item__divider{font-size:1.25rem;line-height:26px}@media (min-width: 30rem){.hy-breadcrumbs.large.with-sidebar .breadcrumb-item__divider{font-size:1.625rem;line-height:26px}}.hy-breadcrumbs.large.with-sidebar .breadcrumb-item-caret svg{fill:var(--grayscale-black)}.hy-breadcrumbs.large.with-sidebar .breadcrumb-container{color:var(--grayscale-black);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;font-family:var(--main-font-family);list-style-type:none;margin:0;min-height:64px;overflow:hidden;padding:0}@media (min-width: 30rem){.hy-breadcrumbs.large.with-sidebar .breadcrumb-container{min-height:84px}}.hy-breadcrumbs.large.with-sidebar .breadcrumb-container .breadcrumb-item.home svg{fill:var(--grayscale-black);height:18px;margin-bottom:4px;stroke:var(--grayscale-black);width:18px}@media (min-width: 30rem){.hy-breadcrumbs.large.with-sidebar .breadcrumb-container .breadcrumb-item.home svg{height:24px;margin-bottom:2px;width:24px}}@media (min-width: 75.0625rem){.hy-breadcrumbs.large.with-sidebar{display:none;visibility:hidden}}";

let breadcrumbsWidth = null;
let HyBreadcrumbs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = BreadcrumbVariants.default;
    this.headerstyle = 'with-sidebar';
    this.menuOpen = false;
  }
  async componentWillLoad() {
    this._dataItems = await jsonParserWorker(this.dataItems);
  }
  componentDidLoad() {
    let hyMainDiv = this.el.closest('.hy-main');
    if (hyMainDiv) {
      if (!hyMainDiv.classList.contains('with-sidebar')) {
        this.headerstyle = 'without-sidebar';
      }
    }
    // Set breadcumbs width + paddings.
    breadcrumbsWidth = this.el.offsetWidth + 64;
    const layoutContentElement = document.getElementsByClassName('layout-content')[0];
    const moreButton = document.querySelectorAll('.breadcrumb-item-dropdown-button')[0];
    if (layoutContentElement) {
      if (breadcrumbsWidth >= layoutContentElement.offsetWidth) {
        moreButton.setAttribute('aria-hidden', 'false');
        this.adjustBreadcrumbsMenuVisibility();
      }
    }
  }
  adjustBreadcrumbsMenuVisibility(showMenu = true) {
    // Show ... and Hide intermediate links
    if (!showMenu) {
      this.closeMoreMenu();
    }
    const crumbContainer = document.querySelectorAll('.hy-breadcrumbs')[0];
    const moreDotsItem = document.querySelectorAll('#more')[0];
    const moreDotsItemWrapper = document.querySelectorAll('.breadcrumb-item__more')[0];
    if (moreDotsItem) {
      if (showMenu) {
        crumbContainer.classList.add('is-condensed');
        moreDotsItem.classList.add('visible');
        moreDotsItemWrapper.classList.add('visible');
      }
      else {
        crumbContainer.classList.remove('is-condensed');
        moreDotsItem.classList.remove('visible');
        moreDotsItemWrapper.classList.remove('visible');
      }
    }
    const intermediateItems = document.querySelectorAll('.intermediate');
    if (intermediateItems) {
      for (let i = 0; i < intermediateItems.length; i++) {
        if (showMenu) {
          intermediateItems[i].classList.add('hidden');
        }
        else {
          intermediateItems[i].classList.remove('hidden');
        }
      }
    }
  }
  HomeItem(url) {
    const homeItemClass = ['hy-icon-wrapper', this.variant].join(' ');
    return (h("li", { class: "breadcrumb-item home" }, h("a", { href: url, class: homeItemClass }, h("hy-icon", { icon: 'hy-icon-home', class: `${this.variant}`, size: 16 })), h("span", { class: "breadcrumb-item__divider" }, "/")));
  }
  BreadcrumbItem(label, url, className = '', withCaret = true) {
    const breadcrumbClass = ['breadcrumb-item', className].join(' ');
    if (url) {
      if (withCaret) {
        return (h("li", { class: breadcrumbClass }, h("a", { href: url, class: `${this.variant}` }, label), h("span", { class: "breadcrumb-item__divider" }, "/")));
      }
      else {
        return (h("li", { class: breadcrumbClass }, h("a", { href: url, class: `${this.variant}` }, label)));
      }
    }
    else {
      return (h("li", { class: `${breadcrumbClass} breadcrumb-item__current` }, h("a", { "aria-current": "page", href: url, class: `${this.variant}` }, label.length > 20 ? `${label.substring(0, 19)}...` : label)));
    }
  }
  BreadcrumbTextItem(label, className = '') {
    const breadcrumbClass = ['breadcrumb-item', className].join(' ');
    return h("li", { class: breadcrumbClass }, label);
  }
  DropdownMenuItem(items) {
    return (h("li", { class: "breadcrumb-item__more" }, h("button", { type: "button", "aria-hidden": "true", "aria-expanded": "false", id: "more", key: "more", class: "breadcrumb-item-dropdown-button", "aria-label": "Open breadcrumb navigation" }, h("span", { class: "breadcrumb-item-dropdown-button__content" }, h("span", null), h("hy-icon", { icon: 'hy-icon-caret-right', class: 'breadcrumb-item-caret__drop breadcrumb-item__more__icon', size: 10 }))), h("ol", { class: "breadcrumb-hidden-items", "aria-hidden": "true" }, items), h("span", { class: "breadcrumb-item__divider" }, "/")));
  }
  adjustHiddenMenuWidth() {
    // set width to the menu area equal to the widest link + paddings
    const moreMenu = document.querySelectorAll('.breadcrumb-hidden-items')[0];
    if (moreMenu) {
      if (document.body.scrollWidth < 480) {
        moreMenu.style.width = '100%';
      }
      else {
        //maxIntermediateLinkWidth
        var maxIntermediateLinkWidth = 0;
        const moreMenuLinks = document.querySelectorAll('.breadcrumb-hidden-items .breadcrumb-item a');
        if (moreMenuLinks) {
          for (let i = 0; i < moreMenuLinks.length; i++) {
            if (maxIntermediateLinkWidth < moreMenuLinks[i].offsetWidth) {
              maxIntermediateLinkWidth = moreMenuLinks[i].offsetWidth;
            }
          }
          maxIntermediateLinkWidth = maxIntermediateLinkWidth + 32 + 64;
        }
        moreMenu.style.width = maxIntermediateLinkWidth.toString().concat('px');
      }
    }
  }
  closeMoreMenu() {
    const moreMenu = document.querySelectorAll('.breadcrumb-hidden-items')[0];
    if (moreMenu) {
      moreMenu.classList.remove('breadcrumb-hidden-items__is-open');
      this.menuOpen = false;
    }
    const moreBreadcrumb = document.querySelectorAll('#more')[0];
    if (moreBreadcrumb) {
      moreBreadcrumb.classList.remove('is-open');
    }
  }
  // When a ... is clicked, show/hide the Menu with hidden breadcrumbs
  clickEventListener(event) {
    if (!event)
      return;
    const target = event.target;
    const moreMenu = document.querySelectorAll('.breadcrumb-hidden-items')[0];
    const moreButton = document.querySelectorAll('.breadcrumb-item-dropdown-button')[0];
    // Trigger if target is button or svg icon
    // TODO: Make this if prettier
    if (target &&
      (target.id === 'more' ||
        ((target.tagName == 'svg' || 'path') &&
          target.closest('hy-icon').classList.contains('breadcrumb-item__more__icon')))) {
      //@todo Show the menu on the right place of the screen
      if (moreMenu) {
        if (this.menuOpen) {
          moreMenu.classList.remove('breadcrumb-hidden-items__is-open');
          moreMenu.setAttribute('aria-hidden', 'true');
          moreButton.classList.remove('is-open');
          moreButton.setAttribute('aria-expanded', 'false');
        }
        else {
          moreMenu.classList.add('breadcrumb-hidden-items__is-open');
          moreButton.classList.add('is-open');
          moreMenu.setAttribute('aria-hidden', 'false');
          moreButton.setAttribute('aria-expanded', 'true');
        }
        this.menuOpen = !this.menuOpen;
      }
    }
    else {
      this.closeMoreMenu();
    }
    event.stopPropagation();
    event.stopImmediatePropagation();
  }
  resizeEventListener(event) {
    if (!event)
      return;
    const breadcrumbsElement = document.querySelectorAll('.hy-breadcrumbs')[0];
    const moreButton = document.querySelectorAll('.breadcrumb-item-dropdown-button')[0];
    if (breadcrumbsElement) {
      if (breadcrumbsWidth + 64 >= document.body.scrollWidth) {
        moreButton.setAttribute('aria-hidden', 'false');
        this.adjustBreadcrumbsMenuVisibility();
      }
      else {
        moreButton.setAttribute('aria-hidden', 'true');
        this.adjustBreadcrumbsMenuVisibility(false);
      }
    }
  }
  render() {
    //@todo Accesibility
    const TOTAL_ITEMS = this._dataItems.length;
    const MAX_ITEMS_TO_SHOW = 3;
    let isMenuNeeded = TOTAL_ITEMS > MAX_ITEMS_TO_SHOW;
    let itemsBreadcrumbs = [];
    let itemsToShowInMenu = [];
    if (this.variant == BreadcrumbVariants.landingLarge) {
      // Landing pages, Large variant
      this._dataItems.map((x, index) => {
        if (index < 2) {
          if (index == 0) {
            itemsBreadcrumbs.push(this.HomeItem(x.url));
          }
          else {
            itemsBreadcrumbs.push(this.BreadcrumbItem(x.text, '', 'main'));
          }
        }
      });
    }
    else {
      // Landing and Content pages, Standard variant
      this._dataItems.map((x, index) => {
        let breadcrumbEl = this.BreadcrumbItem(x.text, x.url, '', false);
        if (isMenuNeeded && index > 0 && index < TOTAL_ITEMS - 1) {
          itemsToShowInMenu.push(h("li", null, breadcrumbEl));
          itemsBreadcrumbs.push(this.BreadcrumbItem(x.text, x.url, 'intermediate'));
          return;
        }
        else {
          if (index == 0) {
            itemsBreadcrumbs.push(this.HomeItem(x.url));
          }
          else {
            itemsBreadcrumbs.push(this.BreadcrumbItem(x.text, x.url, 'main'));
          }
        }
      });
    }
    // Add items to show in breadcrumb popup in correct DOM position.
    itemsBreadcrumbs.splice(1, 0, this.DropdownMenuItem(itemsToShowInMenu));
    const breadcrumbsClass = ['hy-breadcrumbs', this.variant, this.headerstyle].join(' ');
    return (h("nav", { "aria-label": "Breadcrumb", role: "navigation", "aria-labelledby": "system-breadcrumb", class: breadcrumbsClass }, h("ol", { class: "breadcrumb-container" }, itemsBreadcrumbs)));
  }
  get el() { return getElement(this); }
};
HyBreadcrumbs.style = hyBreadcrumbsCss;

const hyCheckboxCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}.hy-checkbox{display:inline-block;position:relative;margin-right:1rem}.hy-checkbox__checkmark{border-color:var(--link-blue);border-style:solid inset solid solid;border-width:2px;height:20px;margin-right:6px;min-width:20px;min-height:20px;position:relative;width:20px}.hy-checkbox__checkmark svg{bottom:0;left:0;position:absolute;visibility:hidden}.hy-checkbox__checkmark::before{background-color:var(--grayscale-white);content:\"\";height:10px;position:absolute;right:0;-webkit-transform:rotate(40deg) translate(6%, -55%);transform:rotate(40deg) translate(6%, -55%);visibility:hidden;width:8px}.hy-checkbox__label{font-size:0.875rem;line-height:20px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--grayscale-black);display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-family:var(--main-font-family);letter-spacing:-0.4px;text-align:left}@media (min-width: 30rem){.hy-checkbox__label{font-size:1rem;line-height:20px}}.hy-checkbox__checkbox{height:100%;margin:0;opacity:0;position:absolute;width:100%;z-index:10}.hy-checkbox__checkbox:checked+label{color:var(--grayscale-black)}.hy-checkbox__checkbox:checked+label .hy-checkbox__checkmark svg,.hy-checkbox__checkbox:checked+label .hy-checkbox__checkmark::before{visibility:visible}.hy-checkbox__checkbox:hover{cursor:pointer}.hy-checkbox__checkbox:hover+label{color:var(--brand-main)}.hy-checkbox__checkbox:focus+label{outline-offset:1px;outline:2px solid var(--link-blue)}.hy-checkbox--button{display:inline-block;margin-right:4px;position:relative}.hy-checkbox--button__label{font-size:0.75rem;line-height:14px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:0.5px solid var(--grayscale-medium-dark);color:var(--link-blue);display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-family:var(--main-font-family);font-weight:600;letter-spacing:-0.3px;padding:12px 15px 12px 13px;z-index:1}@media (min-width: 60rem){.hy-checkbox--button__label{font-size:0.875rem;line-height:18px;letter-spacing:-0.4px;padding:9px 8px 9px 8px}}.hy-checkbox--button__checkmark{position:absolute;right:12px;top:0;bottom:0}@media (min-width: 60rem){.hy-checkbox--button__checkmark{right:10px;bottom:calc(50% + 10px)}}.hy-checkbox--button__checkmark svg{bottom:0;left:0;position:absolute;visibility:hidden}.hy-checkbox--button__label-icon{height:13px;position:absolute;width:12px}@media (min-width: 60rem){.hy-checkbox--button__label-icon{padding:10px;right:-6px;top:calc(50% + 5px)}}.hy-checkbox--button__label-icon svg{background:var(--grayscale-white);height:12px;left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);width:12px}.hy-checkbox--button__checkbox{height:100%;margin:0;opacity:0;position:absolute;width:100%;z-index:10}.hy-checkbox--button__checkbox:checked+label{border:1px solid var(--grayscale-black);color:var(--grayscale-black);padding:12px 15px 12px 13px}@media (min-width: 60rem){.hy-checkbox--button__checkbox:checked+label{border:2px solid var(--grayscale-black);padding:8px 26px 8px 7px}}.hy-checkbox--button__checkbox:checked+label .hy-checkbox--button__checkmark .hy-checkbox--button__label-icon{background:var(--grayscale-white)}.hy-checkbox--button__checkbox:checked+label .hy-checkbox--button__checkmark svg{visibility:visible}.hy-checkbox--button__checkbox:hover{cursor:pointer}.hy-checkbox--button__checkbox:focus+label{outline-offset:1px;outline:1px solid var(--link-blue)}";

let HyCheckbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Checked attribute
     */
    this.checkboxChecked = false;
    /**
     * Variant to deifne what style of checkbox to use
     */
    this.variant = CheckboxVariants.default;
  }
  render() {
    switch (this.variant) {
      case 'button':
        return (h(Host, { class: "hy-checkbox--button" }, h("input", { type: "checkbox", class: "hy-checkbox--button__checkbox", checked: this.checkboxChecked, id: `${this.checkboxId}`, value: `${this.checkboxValue}` }), h("label", { class: "hy-checkbox--button__label", htmlFor: `${this.checkboxId}` }, this.checkboxLabel, h("span", { class: "hy-checkbox--button__checkmark" }, h("hy-icon", { class: "hy-checkbox--button__label-icon", icon: 'hy-icon-done', size: 14, "aria-hidden": "true" })))));
      default:
        return (h(Host, { class: "hy-checkbox" }, h("input", { type: "checkbox", class: "hy-checkbox__checkbox", checked: this.checkboxChecked, id: `${this.checkboxId}`, value: `${this.checkboxValue}` }), h("label", { class: "hy-checkbox__label", htmlFor: `${this.checkboxId}` }, h("span", { class: "hy-checkbox__checkmark" }, h("hy-icon", { class: "hy-checkbox__label-icon", icon: 'hy-icon-done', size: 23, "aria-hidden": "true" })), this.checkboxLabel)));
    }
  }
};
HyCheckbox.style = hyCheckboxCss;

const hyCollaborationCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}.hy-collaboration{border-bottom:1px solid var(--grayscale-dark);padding:32px 0}@media (min-width: 60rem){.hy-collaboration{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;display:grid;grid-template-columns:fit-content(calc(43.75% - 60px)) 1fr;gap:60px}}@media (min-width: 75.0625rem){.hy-collaboration{grid-template-columns:fit-content(calc(43% - 60px)) 1fr;padding:40px 0}}@media (min-width: 87.5rem){.hy-collaboration{grid-template-columns:fit-content(calc(42.5% - 60px)) 1fr}}@media (min-width: 1601px){.hy-collaboration{grid-template-columns:fit-content(calc(41.85% - 60px)) 1fr}}@media (min-width: 1750px){.hy-collaboration{grid-template-columns:fit-content(calc(41% - 60px)) 1fr}}@media (min-width: 120.0625rem){.hy-collaboration{grid-template-columns:fit-content(428px) 1fr}}.hy-collaboration__logo{margin:0 0 32px;padding:0}@media (min-width: 60rem){.hy-collaboration__logo{margin:0}}.hy-collaboration__logo img{max-width:75%;max-height:200px}@media (min-width: 30rem){.hy-collaboration__logo img{max-width:50%}}@media (min-width: 60rem){.hy-collaboration__logo img{max-width:100%;max-height:260px}}.hy-collaboration__description{font-size:0.9375rem;line-height:22px;font-family:var(--main-font-family);margin:0 0 12px}@media (min-width: 30rem){.hy-collaboration__description{font-size:1rem;line-height:24px}}@media (min-width: 75.0625rem){.hy-collaboration__description{font-size:1.0625rem;line-height:26px}}.hy-collaboration__link{font-size:0.9375rem;line-height:22px;font-weight:600;font-family:var(--main-font-family);color:var(--link-blue);display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media (min-width: 30rem){.hy-collaboration__link{font-size:1rem;line-height:24px}}@media (min-width: 75.0625rem){.hy-collaboration__link{font-size:1.0625rem;line-height:26px}}.hy-collaboration__link span{margin-left:4px}.hy-collaboration__link span svg{fill:var(--link-blue)}";

let HyCollaboration = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "hy-collaboration" }, h("figure", { class: "hy-collaboration__logo", role: "complementary" }, h("img", { src: this.imageUrl, alt: this.imageAltText })), h("div", { class: "hy-collaboration__content" }, h("p", { class: "hy-collaboration__description" }, this.textDescription), this.linkUrl && (h("a", { href: this.linkUrl, class: "hy-collaboration__link" }, this.linkTitle, h("span", { "aria-hidden": "true" }, h("hy-icon", { icon: 'hy-icon-arrow-right', size: 10 })))))));
  }
};
HyCollaboration.style = hyCollaborationCss;

const hyContentListCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{display:block}.hy-content-list{display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--main-font-family);-ms-flex-wrap:wrap;flex-wrap:wrap}.hy-content-list--no-result{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.hy-content-list--alert{margin-right:6px}.hy-content-list--alert svg{fill:var(--grayscale-dark)}@media (min-width: 1601px){.hy-content-list--alert svg{height:18px;width:18px}}@media (min-width: 87.5rem){.hy-content-list--alert--large svg{height:18px;width:18px}}.hy-content-list--alert-label{font-family:var(--main-font-family);font-size:0.9375rem;line-height:22px;color:var(--grayscale-dark);font-style:italic;letter-spacing:0}@media (min-width: 30rem){.hy-content-list--alert-label{font-size:1rem;line-height:24px}}@media (min-width: 1601px){.hy-content-list--alert-label{font-size:1.0625rem;line-height:26px}}@media (min-width: 87.5rem){.hy-content-list--alert-label--large{font-size:1.0625rem;line-height:26px}}.hy-content-list.row{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.hy-content-list.grid{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}";

let HyContentList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.linkLabel = 'Go to course page';
    this.noResultLabel = 'No courses scheduled at the moment';
    this.creditsLabel = 'cr';
    this.cancelledLabel = 'Cancelled';
    this.headerstyle = 'common';
    this.courseStateVariant = CourseStateVariants.default;
    this.variant = CourseVariants.default;
    this.courseRealisations = [];
  }
  /**
   * Data for links to be displayed.
   */
  dataWatcher(data) {
    this._dataItems = typeof data === 'string' ? JSON.parse(data) : data;
  }
  componentWillLoad() {
    this.dataWatcher(this.dataItems);
  }
  handleCardClick(id) {
    let card = this.el.shadowRoot.getElementById(id);
    if (card) {
      window.open(card.dataset.location, '_blank');
    }
  }
  async componentDidLoad() {
    let hyMainDiv = this.el.closest('.hy-main');
    if (hyMainDiv) {
      if (!hyMainDiv.classList.contains('with-sidebar')) {
        this.headerstyle = 'large';
      }
    }
  }
  renderItems() {
    let courseRealisations = [];
    if (this._dataItems && this._dataItems.length > 0) {
      this._dataItems.forEach((item) => {
        let courseObject = JSON.parse(JSON.stringify(item));
        const courseListType = courseObject['courseListType'];
        this.variant = courseListType == 'list' ? CourseVariants.row : CourseVariants.grid;
        for (let courseProperty in courseObject) {
          if (courseProperty == 'courseListType')
            continue;
          let courseItem = courseObject[courseProperty];
          let courseCode = courseItem['code'];
          let courseCredits = courseItem['credits'];
          // Course realisations.
          if (courseItem['realisations']) {
            let realisations = JSON.parse(JSON.stringify(courseItem['realisations']));
            for (let realisationProperty in realisations) {
              let realizationItem = realisations[realisationProperty];
              let courseRealisationName = realizationItem['name'];
              let courseRealisationFullName = courseRealisationName + ', ' + courseCredits + ' ' + this.creditsLabel;
              let courseStudyFormat = realizationItem['studyFormat'];
              let courseCancelled = realizationItem['cancelled'];
              let courseStartDate = realizationItem['startDate'];
              let courseEndDate = realizationItem['endDate'];
              let courseEnrollmentLink = realizationItem['enrolmentLink'];
              let courseTeachingLanguage = realizationItem['teachingLanguage'];
              let courseOrganisation = realizationItem['organisation'];
              let courseTags = [];
              if (realizationItem['tags']) {
                let tags = JSON.parse(JSON.stringify(realizationItem['tags']));
                for (let z in tags) {
                  let tagItem = { name: tags[z] };
                  courseTags.push(tagItem);
                }
              }
              let courseTagsJSON = JSON.stringify(courseTags);
              const contentListItemClassAttributes = ['item', this.variant].join(' ');
              courseRealisations.push(h("hy-content-list-item", { id: realisationProperty, class: contentListItemClassAttributes, variant: this.variant, "state-variant": this.courseStateVariant, "course-code": courseCode, "course-name": courseRealisationFullName, "is-cancelled": courseCancelled, "cancelled-label": this.cancelledLabel, "course-credits": courseCredits, "course-tags": courseTagsJSON, "course-start-date": courseStartDate, "course-end-date": courseEndDate, "course-study-format": courseStudyFormat, "course-organisation": courseOrganisation, "course-enrollment-link": courseEnrollmentLink, "course-teaching-language": courseTeachingLanguage, "course-link-label": this.linkLabel, "data-location": courseEnrollmentLink, onClick: () => this.handleCardClick(realisationProperty) }));
            }
          }
        }
      });
    }
    return courseRealisations;
  }
  render() {
    const classAttributes = [this.variant, 'hy-content-list'].join(' ');
    const classAlertAttributes = ['hy-content-list--alert', `hy-content-list--alert--${this.headerstyle}`].join(' ');
    const classAlertLabelAttributes = [
      'hy-content-list--alert-label',
      `hy-content-list--alert-label--${this.headerstyle}`,
    ].join(' ');
    this.courseRealisations = this.renderItems();
    if (this.courseRealisations && this.courseRealisations.length > 0) {
      return (h(Host, null, h("div", { class: classAttributes }, this.courseRealisations)));
    }
    else {
      return (h(Host, null, h("div", { class: classAttributes }, h("div", { class: "hy-content-list--no-result" }, h("span", { class: classAlertAttributes }, h("hy-icon", { icon: 'hy-icon-info', size: 16 })), h("span", { class: classAlertLabelAttributes }, this.noResultLabel)))));
    }
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "dataItems": ["dataWatcher"]
  }; }
};
HyContentList.style = hyContentListCss;

const hyContentListItemCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{background:radial-gradient(circle, #f8f8f8 0%, #f5f5f5 100%);cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;margin-bottom:16px;position:relative}@media (min-width: 30rem){:host{margin-bottom:24px}}:host([variant=row]),:host(.row){max-width:100%;padding:21px 0 60px 12px;width:100%}@media (min-width: 30rem){:host([variant=row]),:host(.row){padding:21px 0 12px 24px}}@media (min-width: 60rem){:host([variant=row]),:host(.row){margin-bottom:16px}}:host(.grid){max-width:100%;padding:21px 0 60px 12px;width:100%}@media (min-width: 30rem){:host(.grid){margin-right:var(--gutter-medium);max-width:calc(((100% - var(--gutter-medium) * 11) / 12) * 6 + var(--gutter-medium) * 5);padding:21px 0 60px 12px;width:calc(((100% - var(--gutter-medium) * 11) / 12) * 6 + var(--gutter-medium) * 5)}}@media (min-width: 60rem){:host(.grid){margin-bottom:27px;margin-right:var(--gutter-wide);max-width:calc(((100% - var(--gutter-wide) * 11) / 12) * 4 + var(--gutter-wide) * 3);width:calc(((100% - var(--gutter-wide) * 11) / 12) * 4 + var(--gutter-wide) * 3)}}@media (min-width: 75.0625rem){:host(.grid){margin-bottom:32px;margin-right:var(--gutter-extrawide);max-width:calc(((100% - var(--gutter-extrawide) * 11) / 12) * 4 + var(--gutter-extrawide) * 3);width:calc(((100% - var(--gutter-extrawide) * 11) / 12) * 4 + var(--gutter-extrawide) * 3)}}@media (min-width: 30rem){:host(.grid:nth-of-type(2n+0)){margin-right:0}}@media (min-width: 60rem){:host(.grid:nth-of-type(2n+0)){margin-right:var(--gutter-wide)}}@media (min-width: 75.0625rem){:host(.grid:nth-of-type(2n+0)){margin-right:var(--gutter-extrawide)}}@media (min-width: 60rem){:host(.grid:nth-of-type(3n+0)){margin-right:0}}.hy-content-list-item{font-family:var(--main-font-family);position:relative;width:100%}.hy-content-list-item a{text-decoration:none}.hy-content-list-item--container{cursor:pointer}.hy-content-list-item--item-name{color:var(--link-blue);font-size:1.25rem;line-height:24px;font-weight:700;letter-spacing:-0.6px;margin-bottom:16px;word-break:break-word}.hy-content-list-item--item-name--past-courses{color:var(--grayscale-dark)}.hy-content-list-item--metadata{font-size:0.875rem;line-height:16px;font-weight:600;color:var(--grayscale-black);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;letter-spacing:-0.44px;line-height:16px;margin-bottom:19px;padding-bottom:0}.hy-content-list-item--metadata--item{padding-bottom:6px}@media (min-width: 30rem){.hy-content-list-item--metadata{padding-bottom:1rem}}@media (min-width: 75.0625rem){.hy-content-list-item--metadata{padding-bottom:0}}.hy-content-list-item--metadata--item:after{content:\"|\";padding:0 8px}.hy-content-list-item--metadata--item--last:after{content:\" \"}.hy-content-list-item .cancelled span{font-size:0.75rem;line-height:12px;font-weight:700;background-color:var(--additional-red-light);color:var(--grayscale-white);letter-spacing:-0.5px;padding:6px 8px;text-transform:uppercase}.hy-content-list-item .cancelled--past-courses span{background-color:var(--grayscale-dark)}.hy-content-list-item .cancelled:not(.mobile){display:none}.hy-content-list-item .cancelled.mobile{bottom:-50px;display:block;margin:0;padding-bottom:12px;position:absolute}@media (min-width: 30rem){.hy-content-list-item .cancelled{margin-right:8px}.hy-content-list-item .cancelled.mobile{display:none}.hy-content-list-item .cancelled:not(.mobile){display:block}}.hy-content-list-item--link{position:absolute;right:-6px}.hy-content-list-item--link a{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;text-decoration:none}.hy-content-list-item--link a .label{font-size:1rem;line-height:16px;font-weight:700;color:var(--link-blue);letter-spacing:-0.5px;line-height:16px;margin-right:8px;text-align:right}.hy-content-list-item--link a .icon-wrapper{background-color:var(--brand-main-light);z-index:10}.hy-content-list-item--link a .icon-wrapper .icon{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);position:relative;overflow:hidden}.hy-content-list-item--link a .icon-wrapper .icon svg{background-color:transparent;-webkit-box-shadow:0 2px 8px 0 rgba(0, 0, 0, 0.1);box-shadow:0 2px 8px 0 rgba(0, 0, 0, 0.1);fill:var(--grayscale-white);padding:10.29px}.hy-content-list-item.row .hy-content-list-item--link{bottom:-60px;padding-bottom:12px}@media (min-width: 30rem){.hy-content-list-item.row .hy-content-list-item--link{bottom:0;padding-bottom:0}}.hy-content-list-item.row .hy-content-list-item--tags{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap}@media (min-width: 60rem){.hy-content-list-item.row .hy-content-list-item--tags{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding-right:200px}}.hy-content-list-item.grid .hy-content-list-item--link{bottom:-60px;padding-bottom:12px}.hy-content-list-item.grid .hy-content-list-item--tags{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap}";

let keys$4 = {
  enter: 'Enter',
};
let HyContentLstItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = CourseVariants.default;
    this.stateVariant = CourseStateVariants.default;
    this.cancelledLabel = 'Cancelled';
    this._dateValue = '';
  }
  async componentWillLoad() {
    this._courseTags = await jsonParserWorker(this.courseTags);
    // Convert to date format: 25.05. - 30.07.2020. Incoming date is in format YYYY-MM-DD
    let startDate = this.courseStartDate ? this.courseStartDate.split(/\-|\s/) : '';
    let endDate = this.courseEndDate ? this.courseEndDate.split(/\-|\s/) : '';
    if (!startDate && endDate) {
      this._dateValue = ` - ${endDate[2]}.${endDate[1]}.${endDate[0]}`;
    }
    else if (startDate && !endDate) {
      this._dateValue = `${startDate[2]}.${startDate[1]}. - `;
    }
    else if (startDate && endDate) {
      this._dateValue = `${startDate[2]}.${startDate[1]}. - ${endDate[2]}.${endDate[1]}.${endDate[0]}`;
    }
  }
  handleKeyDown(event) {
    const key = event.code;
    if (key == keys$4.enter) {
      let card = this.el;
      window.open(card.dataset.location, '_blank', 'noopener');
    }
  }
  render() {
    const classAttributes = [this.variant, 'hy-content-list-item'].join(' ');
    const target = '_blank';
    const ariaLabel = 'Link points outside the current website.';
    const classItemName = [
      'hy-content-list-item--item-name',
      `hy-content-list-item--item-name--${this.stateVariant}`,
    ].join(' ');
    const classItemCancelled = ['cancelled', `cancelled--${this.stateVariant}`].join(' ');
    return [
      h("div", { class: classAttributes, tabindex: "0" }, h("div", { class: classItemName }, this.courseName), h("div", { class: "hy-content-list-item--metadata" }, this.isCancelled && (h("div", { class: classItemCancelled }, h("span", null, this.cancelledLabel))), h("div", { class: "hy-content-list-item--metadata--item hy-content-list-item--metadata--item--first" }, h("span", null, this._dateValue)), this.courseOrganisation
        ? [
          h("div", { class: "hy-content-list-item--metadata--item" }, h("span", null, this.courseStudyFormat)),
          h("div", { class: "hy-content-list-item--metadata--item hy-content-list-item--metadata--item--last" }, h("span", null, this.courseOrganisation)),
        ]
        : [
          h("div", { class: "hy-content-list-item--metadata--item hy-content-list-item--metadata--item--last" }, h("span", null, this.courseStudyFormat)),
        ]), this._courseTags && this._courseTags.length > 0 && (h("div", { class: "hy-content-list-item--tags" }, this._courseTags.map((x) => {
        return h("hy-tag", null, x.name);
      }))), this.isCancelled && (h("div", { class: "cancelled mobile" }, h("span", null, this.cancelledLabel))), h("div", { class: "hy-content-list-item--link" }, h("a", { href: this.courseEnrollmentLink, target: target, "aria-label": ariaLabel, class: "hy-content-list-item--link--link", tabindex: "-1" }, h("span", { class: "label" }, this.courseLinkLabel), h("span", { class: "icon-wrapper" }, h("div", { class: "icon" }, h("hy-icon", { icon: 'hy-icon-arrow-to-right', size: 40 })))))),
    ];
  }
  get el() { return getElement(this); }
};
HyContentLstItem.style = hyContentListItemCss;

const hyCrisisBannerCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{-webkit-box-shadow:inset 0 -20px 20px -20px rgba(14, 104, 139, 0.1);box-shadow:inset 0 -20px 20px -20px rgba(14, 104, 139, 0.1);display:block}.hy-crisis-banner__container{display:-webkit-box;display:-ms-flexbox;display:flex;margin:0 auto;max-width:1216px}.hy-crisis-banner__indicator{background-color:var(--additional-yellow);-ms-flex-negative:0;flex-shrink:0}@media (min-width: 30rem){.hy-crisis-banner__indicator{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}}.hy-crisis-banner__indicator-icon{margin-left:8px;margin-right:8px;margin-top:10px}@media (min-width: 30rem){.hy-crisis-banner__indicator-icon{margin-left:10px;margin-right:10px;margin-top:0}}.hy-crisis-banner__indicator-icon svg{height:22px;width:22px}.hy-crisis-banner__indicator-icon svg circle{fill:var(--grayscale-white)}.hy-crisis-banner__indicator-icon svg path{fill:var(--additional-yellow)}.hy-crisis-banner__content-wrapper{-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding:12px 0 12px 12px}@media (min-width: 30rem){.hy-crisis-banner__content-wrapper{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:14px 0 14px 14px}}@media (min-width: 60rem){.hy-crisis-banner__content-wrapper{padding:20px 0 20px 20px}}@media (min-width: 30rem){.hy-crisis-banner__content{max-width:61.22%;width:100%}}@media (min-width: 60rem){.hy-crisis-banner__content{max-width:65.83%}}@media (min-width: 75.0625rem){.hy-crisis-banner__content{max-width:65.79%}}.hy-crisis-banner__title{font-size:0.875rem;line-height:16px;font-weight:700;color:var(--grayscale-black);font-family:var(--main-font-family);letter-spacing:-0.35px;margin:0 0 2px 0}@media (min-width: 1601px){.hy-crisis-banner__title{font-size:1rem;line-height:18px;letter-spacing:-0.4px}}.hy-crisis-banner__description{font-size:0.75rem;line-height:14px;color:var(--grayscale-dark);font-family:var(--main-font-family);letter-spacing:-0.35px;margin:0}@media (min-width: 30rem){.hy-crisis-banner__description{font-size:0.875rem;line-height:16px}}.hy-crisis-banner__description p{margin-top:0}.hy-crisis-banner__description p:last-of-type{margin-bottom:0}.hy-crisis-banner__link{font-size:0.875rem;line-height:16px;font-weight:600;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--brand-main-light);display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-family:var(--main-font-family);letter-spacing:-0.5px;margin:12px 0 0;overflow:hidden;text-decoration:none}@media (min-width: 30rem){.hy-crisis-banner__link{-ms-flex-negative:0;flex-shrink:0;margin-left:24px;margin-right:32px;margin-top:0;text-align:right}}@media (min-width: 75.0625rem){.hy-crisis-banner__link{margin-left:32px}}@media (min-width: 1601px){.hy-crisis-banner__link{font-size:1rem;line-height:18px}}.hy-crisis-banner__link:hover,.hy-crisis-banner__link:focus{color:var(--brand-main);text-decoration:underline}.hy-crisis-banner__link:hover .hy-crisis-banner__link-icon svg,.hy-crisis-banner__link:focus .hy-crisis-banner__link-icon svg{fill:var(--brand-main)}.hy-crisis-banner__link-icon{margin-left:4px}@media (min-width: 30rem){.hy-crisis-banner__link-icon{margin-left:8px}}@media (min-width: 75.0625rem){.hy-crisis-banner__link-icon{margin-left:12px}}.hy-crisis-banner__link-icon svg{fill:var(--brand-main-light);height:12px;width:12px}@media (min-width: 30rem){.hy-crisis-banner__link-icon svg{height:14px;width:14px}}@media (min-width: 1601px){.hy-crisis-banner__link-icon svg{height:16px;width:16px}}";

let HyCrisisBanner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: "hy-crisis-banner", role: "alert" }, h("div", { class: "hy-crisis-banner__container" }, h("div", { class: "hy-crisis-banner__indicator" }, h("hy-icon", { class: 'hy-crisis-banner__indicator-icon', icon: 'hy-icon-alert' })), h("div", { class: "hy-crisis-banner__content-wrapper" }, h("div", { class: "hy-crisis-banner__content" }, h("h3", { class: "hy-crisis-banner__title" }, this.bannerTitle), this.bannerDescription && (h("div", { class: "hy-crisis-banner__description", innerHTML: this.bannerDescription }))), this.linkUrl && (h("a", { class: "hy-crisis-banner__link", href: this.linkUrl }, this.linkTitle, h("hy-icon", { class: 'hy-crisis-banner__link-icon', icon: 'hy-icon-arrow-to-right' })))))));
  }
};
HyCrisisBanner.style = hyCrisisBannerCss;

const ctaButtonCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{display:block}.hy-cta-button-container{display:-webkit-box;display:-ms-flexbox;display:flex}.hy-cta-button{cursor:pointer;font-family:var(--main-font-family);font-weight:700;position:relative;text-decoration:none}.hy-cta-button.transparent-background,.hy-cta-button.black-background,.hy-cta-button.blue-background,.hy-cta-button.white-background,.hy-cta-button.hero-white,.hy-cta-button.hero-blue,.hy-cta-button.hero-black,.hy-cta-button.dark-blue-background{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;height:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;max-width:328px;padding:13px 16px}.hy-cta-button.transparent-background .text,.hy-cta-button.black-background .text,.hy-cta-button.blue-background .text,.hy-cta-button.white-background .text,.hy-cta-button.hero-white .text,.hy-cta-button.hero-blue .text,.hy-cta-button.hero-black .text,.hy-cta-button.dark-blue-background .text{font-size:1rem;line-height:18px;letter-spacing:-0.3px}.hy-cta-button.transparent-background .link-icon,.hy-cta-button.black-background .link-icon,.hy-cta-button.blue-background .link-icon,.hy-cta-button.white-background .link-icon,.hy-cta-button.hero-white .link-icon,.hy-cta-button.hero-blue .link-icon,.hy-cta-button.hero-black .link-icon,.hy-cta-button.dark-blue-background .link-icon{margin-left:8px}.hy-cta-button.transparent-background .link-icon svg,.hy-cta-button.black-background .link-icon svg,.hy-cta-button.blue-background .link-icon svg,.hy-cta-button.white-background .link-icon svg,.hy-cta-button.hero-white .link-icon svg,.hy-cta-button.hero-blue .link-icon svg,.hy-cta-button.hero-black .link-icon svg,.hy-cta-button.dark-blue-background .link-icon svg{height:16px;width:16px}.hy-cta-button.dark-blue-background{background-color:var(--brand-main-dark);border:4px solid var(--grayscale-white);color:var(--grayscale-white)}.hy-cta-button.dark-blue-background .link-icon svg{background-color:var(--brand-main-dark);fill:var(--grayscale-white)}.hy-cta-button.dark-blue-background .text{color:var(--grayscale-white)}.hy-cta-button.transparent-background{background-color:var(--grayscale-white);border:4px solid var(--grayscale-black);color:var(--grayscale-black)}.hy-cta-button.transparent-background .link-icon svg{background-color:var(--grayscale-white);fill:var(--grayscale-black)}.hy-cta-button.transparent-background .text{color:var(--grayscale-black)}.hy-cta-button.black-background{background-color:var(--grayscale-black);border:4px solid var(--grayscale-white);color:var(--grayscale-white)}.hy-cta-button.black-background .link-icon svg{background-color:var(--grayscale-black);fill:var(--grayscale-white)}.hy-cta-button.black-background .text{color:var(--grayscale-white)}.hy-cta-button.black-background:hover{background-color:var(--brand-main-active)}.hy-cta-button.black-background:hover .link-icon svg{background-color:var(--brand-main-active)}.hy-cta-button.black-background:focus{background-color:var(--brand-main)}.hy-cta-button.black-background:focus .link-icon svg{background-color:var(--brand-main)}.hy-cta-button.blue-background{background-color:var(--brand-main-light);border:4px solid var(--grayscale-white);color:var(--grayscale-white)}.hy-cta-button.blue-background .link-icon svg{background-color:var(--brand-main-light);fill:var(--grayscale-white)}.hy-cta-button.blue-background .text{color:var(--grayscale-white)}.hy-cta-button.blue-background:hover{background-color:var(--brand-main)}.hy-cta-button.blue-background:hover .link-icon svg{background-color:var(--brand-main)}.hy-cta-button.blue-background:focus{background-color:var(--brand-main-active)}.hy-cta-button.blue-background:focus .link-icon svg{background-color:var(--brand-main-active)}.hy-cta-button.white-background{background-color:var(--grayscale-white);border:4px solid var(--brand-main-light);color:var(--brand-main-light)}.hy-cta-button.white-background .link-icon svg{background-color:var(--grayscale-white);fill:var(--brand-main-light)}.hy-cta-button.white-background .text{color:var(--brand-main-light)}.hy-cta-button.white-background:hover{border-color:var(--brand-main)}.hy-cta-button.white-background:hover .text{color:var(--brand-main)}.hy-cta-button.white-background:hover .link-icon svg{fill:var(--brand-main)}.hy-cta-button.white-background:focus{border-color:var(--brand-main-active)}.hy-cta-button.white-background:focus .text{color:var(--brand-main-active)}.hy-cta-button.white-background:focus .link-icon svg{fill:var(--brand-main-active)}.hy-cta-button.hero-white{background-color:var(--brand-main-light);color:var(--grayscale-white)}.hy-cta-button.hero-white .link-icon svg{background-color:var(--brand-main-light);fill:var(--grayscale-white)}.hy-cta-button.hero-white .text{color:var(--grayscale-white)}.hy-cta-button.hero-white:hover{background-color:var(--brand-main)}.hy-cta-button.hero-white:hover .link-icon svg{background-color:var(--brand-main)}.hy-cta-button.hero-white:focus{background-color:var(--brand-main-active)}.hy-cta-button.hero-white:focus .link-icon svg{background-color:var(--brand-main-active)}.hy-cta-button.hero-black{background-color:var(--grayscale-black);border:4px solid var(--grayscale-white);color:var(--grayscale-white)}.hy-cta-button.hero-black .link-icon svg{background-color:var(--grayscale-black);fill:var(--grayscale-white)}.hy-cta-button.hero-black .text{color:var(--grayscale-white)}.hy-cta-button.hero-black:hover{border-color:var(--brand-main-soft)}.hy-cta-button.hero-black:hover .text{color:var(--brand-main-soft)}.hy-cta-button.hero-black:hover .link-icon svg{fill:var(--brand-main-soft)}.hy-cta-button.hero-black:focus{border-color:var(--brand-main-soft)}.hy-cta-button.hero-black:focus .text{color:var(--brand-main-soft)}.hy-cta-button.hero-black:focus .link-icon svg{fill:var(--brand-main-soft)}.hy-cta-button.hero-blue{background-color:var(--brand-main);border:4px solid var(--grayscale-white);color:var(--grayscale-white)}.hy-cta-button.hero-blue .link-icon svg{background-color:var(--brand-main);fill:var(--grayscale-white)}.hy-cta-button.hero-blue .text{color:var(--grayscale-white)}.hy-cta-button.hero-blue:hover{border-color:var(--brand-main-soft)}.hy-cta-button.hero-blue:hover .text{color:var(--brand-main-soft)}.hy-cta-button.hero-blue:hover .link-icon svg{fill:var(--brand-main-soft)}.hy-cta-button.hero-blue:focus{border-color:var(--brand-main-soft)}.hy-cta-button.hero-blue:focus .text{color:var(--brand-main-soft)}.hy-cta-button.hero-blue:focus .link-icon svg{fill:var(--brand-main-soft)}";

let CtaButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = CtaLinkButtonVariants.onBlueBkgd;
    this.linkContent = '';
    this.isExternal = false;
    this.headerstyle = 'common';
  }
  render() {
    const classAttributes = ['hy-cta-button', this.variant, this.headerstyle].join(' ');
    const containerClassAttributes = ['hy-cta-button-container'].join(' ');
    const textClassAttributes = ['text'].join(' ');
    const iconClassAttributes = ['link-icon'].join(' ');
    const target = this.isExternal ? '_blank' : '_self';
    return (h("span", { class: containerClassAttributes }, h("a", { "aria-label": this.scLabel, class: classAttributes, href: this.url, target: target }, h("span", { class: textClassAttributes }, this.linkContent.length === 0 ? h("slot", null) : this.linkContent), h("span", { class: iconClassAttributes }, h("hy-icon", { icon: 'hy-icon-arrow-right', size: 48 })))));
  }
  get el() { return getElement(this); }
};
CtaButton.style = ctaButtonCss;

const ctaLinkCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{display:block}.hy-cta-link{font-weight:600;font-size:1rem;line-height:24px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--brand-main);display:inline-grid;font-family:var(--main-font-family);gap:16px;grid-auto-flow:column;letter-spacing:-0.5px;overflow:hidden;text-decoration:none}.hy-cta-link:hover,.hy-cta-link:focus{text-decoration:underline}.hy-cta-link:hover .hy-cta-link__icon,.hy-cta-link:focus .hy-cta-link__icon{background-color:var(--brand-main)}.hy-cta-link__icon{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:var(--brand-main-light);display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:40px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:40px}.hy-cta-link__icon svg{fill:var(--grayscale-white)}.hy-cta-link__icon--external svg{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}";

let CtaLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = CtaLinkVariants.default;
    this.linkContent = '';
    this.isExternal = false;
  }
  render() {
    const iconClassAttributes = ['hy-cta-link__icon', this.isExternal && 'hy-cta-link__icon--external'].join(' ');
    const target = this.isExternal ? '_blank' : '_self';
    return (h("a", { "aria-label": this.scLabel, href: this.url, target: target, class: `hy-cta-link hy-cta-link--${this.variant}` }, this.variant == CtaLinkVariants.linkList && (h("span", { class: iconClassAttributes }, h("hy-icon", { icon: 'hy-icon-arrow-to-right', size: 24 }))), h("span", null, this.linkContent), this.variant == CtaLinkVariants.default && (h("span", { class: iconClassAttributes }, h("hy-icon", { icon: 'hy-icon-arrow-to-right', size: 24 })))));
  }
  get el() { return getElement(this); }
};
CtaLink.style = ctaLinkCss;

/**
 * A collection of shims that provided minimal
 * support of WeakMap and Map classes.
 *
 * These implementations are not meant to be used outside of
 * ResizeObserver modules as they cover only a limited range
 * of use cases.
 */

/* eslint-disable require-jsdoc */
const hasNativeCollections =
    typeof window.WeakMap === 'function' &&
    typeof window.Map === 'function';

const WeakMap = (() => {
    if (hasNativeCollections) {
        return window.WeakMap;
    }

    function getIndex(arr, key) {
        let result = -1;

        arr.some((entry, index) => {
            let matches = entry[0] === key;

            if (matches) {
                result = index;
            }

            return matches;
        });

        return result;
    }

    return class {
        constructor() {
            this.__entries__ = [];
        }

        get(key) {
            let index = getIndex(this.__entries__, key);

            return this.__entries__[index][1];
        }

        set(key, value) {
            let index = getIndex(this.__entries__, key);

            if (~index) {
                this.__entries__[index][1] = value;
            } else {
                this.__entries__.push([key, value]);
            }
        }

        delete(key) {
            let entries = this.__entries__,
                index = getIndex(entries, key);

            if (~index) {
                entries.splice(index, 1);
            }
        }

        has(key) {
            return !!~getIndex(this.__entries__, key);
        }
    };
})();

const Map = (() => {
    if (hasNativeCollections) {
        return window.Map;
    }

    return class extends WeakMap {
        get size() {
            return this.__entries__.length;
        }

        clear() {
            this.__entries__.splice(0, this.__entries__.length);
        }

        entries() {
            return this.__entries__.slice();
        }

        keys() {
            return this.__entries__.map(entry => entry[0]);
        }

        values() {
            return this.__entries__.map(entry => entry[1]);
        }

        forEach(callback, ctx = null) {
            for (const entry of this.__entries__) {
                callback.call(ctx, entry[1], entry[0]);
            }
        }
    };
})();

/**
 * A shim for performance.now method which falls back
 * to Date.now if the first one is not supported.
 *
 * @returns {Timestamp}
 */
const now = (() => {
    if (
        window.performance &&
        typeof window.performance.now === 'function'
    ) {
        return () => window.performance.now();
    }

    return () => Date.now();
})();

/**
 * A shim for requestAnimationFrame which falls back
 * to setTimeout if the first one is not supported.
 *
 * @returns {Number} Requests' identifier.
 */
const requestAnimFrame = (() => {
    if (
        window.requestAnimationFrame &&
        typeof window.requestAnimationFrame === 'function'
    ) {
        return window.requestAnimationFrame;
    }

    return callback => {
        return setTimeout(() => callback(Date.now()), 1000 / 60);
    };
})();

const mutationsSupported = typeof window.MutationObserver === 'function';

/**
 * Creates a wrapper function which ensures that
 * provided callback will be invoked only once
 * during the specified delay.
 *
 * @param {Function} callback - Function to be invoked.
 * @param {Number} [delay = 0] - Delay after which to invoke callback.
 * @returns {Function}
 */
function debounce(callback, delay = 0) {
    let timeoutID = false;

    return function (...args) {
        if (timeoutID !== false) {
            clearTimeout(timeoutID);
        }

        timeoutID = setTimeout(() => {
            timeoutID = false;

            /* eslint-disable no-invalid-this */
            callback.apply(this, args);

            /* eslint-enable no-invalid-this */
        }, delay);
    };
}

/**
 * Controller class which handles updates of ResizeObserver instances.
 * It's meant to decide when and for how long it's necessary to run updates by listening to the windows
 * "resize" event along with a tracking of DOM mutations (nodes removal, changes of attributes, etc.).
 *
 * Transitions and animations are handled by running a repeatable update cycle either until the dimensions
 * of observed elements are changing or the timeout is reached (default timeout is 50 milliseconds).
 * Timeout value can be manually increased if transitions have a delay.
 *
 * Continuous update cycle will be used automatically in case if MutationObserver is not supported.
 */
class ResizeObserverController {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @param {Number} [idleTimeout = 0] - Idle timeout value.
     * @param {Boolean} [continuousUpdates = false] - Whether to use a continuous update cycle.
     */
    constructor(idleTimeout = 50, continuousUpdates = false) {
        this._idleTimeout = idleTimeout;
        this._isCycleContinuous = continuousUpdates;

        this._cycleStartTime = 0;

        // Indicates whether the update cycle is currently running.
        this._isCycleActive = false;

        // Indicates whether the update of observers is scheduled.
        this._isUpdateScheduled = false;

        // Indicates whether DOM listeners have been added.
        this._listenersEnabled = false;

        // Keeps reference to the instance of MutationObserver.
        this._mutationsObserver = null;

        // A list of connected observers.
        this._observers = [];

        // Fix value of "this" binding for the following methods.
        this.runUpdates = this.runUpdates.bind(this);
        this._resolveScheduled = this._resolveScheduled.bind(this);
        this._onMutation = this._onMutation.bind(this);

        // Function that will be invoked to re-run the
        // update cycle if continuous cycles are enabled.
        this._continuousCycleHandler = debounce(this.runUpdates, 200);
    }

    /**
     * Returns current idle timeout value.
     *
     * @returns {Number}
     */
    get idleTimeout() {
        return this._idleTimeout;
    }

    /**
     * Sets up new idle timeout value.
     *
     * @param {Number} value - New timeout value.
     */
    set idleTimeout(value) {
        this._idleTimeout = value;
    }

    /**
     * Tells whether continuous updates are enabled.
     *
     * @returns {Boolean}
     */
    get continuousUpdates() {
        return this._isCycleContinuous;
    }

    /**
     * Enables or disables continuous updates.
     *
     * @param {Boolean} value - Whether to enable or disable
     *      continuous updates. Note that the value won't be applied
     *      if MutationObserver is not supported.
     */
    set continuousUpdates(value) {
        if (mutationsSupported) {
            this._isCycleContinuous = value;
        }
    }

    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserver} observer - Observer to be added.
     */
    connect(observer) {
        if (!this.isConnected(observer)) {
            this._observers.push(observer);
        }

        // Add listeners if they haven't been added yet.
        if (!this._listenersEnabled) {
            this._addListeners();
        }
    }

    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserver} observer - Observer to be removed.
     */
    disconnect(observer) {
        let observers = this._observers,
            index = observers.indexOf(observer);

        if (~index) {
            observers.splice(index, 1);
        }

        // Remove listeners if controller
        // has no connected observers.
        if (!observers.length && this._listenersEnabled) {
            this._removeListeners();
        }
    }

    /**
     * Tells whether provided observer is connected to controller.
     *
     * @param {ResizeObserver} observer - Observer to be checked.
     * @returns {Boolean}
     */
    isConnected(observer) {
        return !!~this._observers.indexOf(observer);
    }

    /**
     * Updates every observer from observers list and
     * notifies them of queued entries.
     *
     * @private
     * @returns {Boolean} Returns "true" if any observer
     *      has detected changes in dimensions of its' elements.
     */
    _updateObservers() {
        let hasChanges = false;

        for (const observer of this._observers) {
            observer.gatherActive();

            if (observer.hasActive()) {
                hasChanges = true;

                observer.broadcastActive();
            }
        }

        return hasChanges;
    }

    /**
     * Starts the update cycle which will run either
     * until it detects changes in the dimensions of
     * elements or the idle timeout is reached.
     */
    runUpdates() {
        this._cycleStartTime = now();
        this._isCycleActive = true;

        this.scheduleUpdate();
    }

    /**
     * Schedules the update of observers.
     *
     * @private
     */
    scheduleUpdate() {
        if (!this._isUpdateScheduled) {
            this._isUpdateScheduled = true;

            requestAnimFrame(this._resolveScheduled);
        }
    }

    /**
     * Invokes the update of observers. It may re-run the
     * cycle if changes in observers have been detected.
     *
     * @private
     */
    _resolveScheduled() {
        const hasChanges = this._updateObservers();

        this._isUpdateScheduled = false;

        // Do nothing if cycle wasn't started.
        if (!this._isCycleActive) {
            return;
        }

        // Re-start cycle if changes have been detected.
        if (hasChanges) {
            this.runUpdates();
        } else if (this._hasRemainingTime()) {
            this.scheduleUpdate();
        } else {
            this._endUpdates();
        }
    }

    /**
     * Tells whether the update cycle has time remaining.
     *
     * @private
     * @returns {Boolean}
     */
    _hasRemainingTime() {
        const timePassed = now() - this._cycleStartTime;

        return this._idleTimeout - timePassed > 0;
    }

    /**
     * Callback which is invoked when update cycle
     * is finished. It may start a new cycle if continuous
     * updates are enabled.
     *
     * @private
     */
    _endUpdates() {
        this._isCycleActive = false;

        if (this._isCycleContinuous && this._listenersEnabled) {
            this._continuousCycleHandler();
        }
    }

    /**
     * Initializes DOM listeners.
     *
     * @private
     */
    _addListeners() {
        // Do nothing if listeners have been already added.
        if (this._listenersEnabled) {
            return;
        }

        this._listenersEnabled = true;

        // Repeatable cycle is used here because the resize event may
        // lead to continuous changes, e.g. when width or height of an element
        // are controlled by CSS transitions.
        window.addEventListener('resize', this.runUpdates);

        // Fall back to an infinite cycle.
        if (!mutationsSupported) {
            this._isCycleContinuous = true;

            this.runUpdates();
        } else {
            // Subscribe to DOM mutations as they may lead to
            // changes in dimensions of elements.
            this._mutationsObserver = new MutationObserver(this._onMutation);

            this._mutationsObserver.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
    }

    /**
     * Removes DOM listeners.
     *
     * @private
     */
    _removeListeners() {
        // Do nothing if listeners have been already removed.
        if (!this._listenersEnabled) {
            return;
        }

        window.removeEventListener('resize', this.runUpdates);

        if (this._mutationsObserver) {
            this._mutationsObserver.disconnect();
        }

        this._mutationsObserver = null;
        this._listenersEnabled = false;
    }

    /**
     * DOM mutations handler.
     *
     * @private
     * @param {Array<MutationRecord>} entries - An array of mutation records.
     */
    _onMutation(entries) {
        // Check if at least one entry
        // contains attributes changes.
        const attrsChanged = entries.some(entry => {
            return entry.type === 'attributes';
        });

        // It's expected that animations may start only
        // after some attribute changes its' value.
        attrsChanged ?
            this.runUpdates() :
            this.scheduleUpdate();
    }
}

// Placeholder of a content rectangle.
const emptyRect = {
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
};

/**
 * Extracts paddings data from the provided element.
 *
 * @param {Element} target - Element whose paddings to be extracted.
 * @returns {Object} Object that contains
 *      left, top, right and bottom padding values.
 */
function getPaddings(target) {
    const styles = window.getComputedStyle(target);
    const keys = ['top', 'right', 'bottom', 'left'];

    const paddings = {};

    for (const key of keys) {
        const value = styles['padding-' + key].replace('px', '');

        paddings[key] = parseFloat(value);
    }

    return paddings;
}

/**
* Subtracts paddings from provided
* dimensions and creates a content rectangle.
*
* @param {Number} clientWidth - Width including paddings.
* @param {Number} clientHeight - Height including paddings.
* @param {Object} paddings - Paddings data.
* @returns {ClientRect}
*/
function createContentRect(clientWidth, clientHeight, paddings) {
    const top = paddings.top;
    const left = paddings.left;

    const width = clientWidth - (left + paddings.right);
    const height = clientHeight - (top + paddings.bottom);

    return {
        width,
        height,
        top,
        right: width + left,
        bottom: height + top,
        left
    };
}

/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGElement} target - Element whose content
 *      rectangle needs to be calculated.
 * @returns {ClientRect}
 */
function getSVGContentRect(target) {
    const bbox = target.getBBox();

    return createContentRect(bbox.width, bbox.height, emptyRect);
}

/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element whose content
 *      rectangle needs to be calculated.
 * @returns {ClientRect}
 */
function getHTMLElementContentRect(target) {
    const width = target.clientWidth;
    const height = target.clientHeight;

    // It's not necessary to proceed with calculations
    // as it's already known that the rectangle is empty.
    if (!width && !height) {
        return emptyRect;
    }

    return createContentRect(width, height, getPaddings(target));
}

/**
 * Checks whether provided element
 * is an instance of SVGElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {Boolean}
 */
function isSVGElement(target) {
    return target instanceof window.SVGElement;
}

/**
 * Calculates an appropriate content rectangle
 * for provided html or svg element.
 *
 * @param {Element} target - Element whose content rectangle
 *      needs to be calculated.
 * @returns {ClientRect}
 */
function getContentRect(target) {
    return isSVGElement(target) ?
        getSVGContentRect(target) :
        getHTMLElementContentRect(target);
}

/**
 * Class that is responsible for computations of the
 * content rectangle of provided DOM element and
 * for keeping track of its' changes.
 */
class ResizeObservation {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element whose content
     *      rectangle needs to be observed.
     */
    constructor(target) {
        this.target = target;

        // Keeps reference to the last observed content rectangle.
        this._contentRect = emptyRect;

        // Broadcasted width of content rectangle.
        this.broadcastWidth = 0;

        // Broadcasted height of content rectangle.
        this.broadcastHeight = 0;
    }

    /**
     * Updates 'broadcastWidth' and 'broadcastHeight'
     * properties with a data from the corresponding
     * properties of the last observed content rectangle.
     *
     * @returns {ClientRect} Last observed content rectangle.
     */
    broadcastRect() {
        const rect = this._contentRect;

        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;

        return rect;
    }

    /**
     * Updates content rectangle and tells whether its'
     * width or height properties have changed since
     * the last broadcast.
     *
     * @returns {Boolean}
     */
    isActive() {
        const rect = getContentRect(this.target);

        this._contentRect = rect;

        return (
            rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight
        );
    }
}

class ResizeObserverEntry {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {ClientRect} rectData - Data of the elements' content rectangle.
     */
    constructor(target, rectData) {
        const contentRect = {};

        // According to the specification following properties
        // are not writable and in native implementation
        // they are also not enumerable.
        Object.defineProperties(contentRect, {
            width: {value: rectData.width},
            height: {value: rectData.height},
            top: {value: rectData.top},
            right: {value: rectData.right},
            bottom: {value: rectData.bottom},
            left: {value: rectData.left}
        });

        Object.defineProperties(this, {
            target: {value: target},
            contentRect: {value: contentRect}
        });
    }
}

class ResizeObserver$3 {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {Function} callback - Callback function which will be invoked
     *      when one of the observed elements changes its' content rectangle.
     * @param {ResizeObsreverController} controller - Controller instance
     *      which is responsible for the updates of observer.
     * @param {ResizeObserver} publicObserver - Reference
     *      to the public ResizeObserver instance which will be passed
     *      to callback function.
     */
    constructor(callback, controller, publicObserver) {
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }

        // Reference to the callback function.
        this._callback = callback;

        // A registry of ResizeObservation instances.
        this._targets = new Map();

        // A collection of resize observations that have detected
        // changes in dimensions of elements.
        this._activeTargets = [];

        // Reference to associated ResizeObserverController.
        this._controller = controller;

        // Public ResizeObserver instance which will be passed
        // to callback function.
        this._publicObserver = publicObserver;
    }

    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     */
    observe(target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }

        if (!(target instanceof Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }

        const targets = this._targets;

        // Do nothing if element is already being observed.
        if (targets.has(target)) {
            return;
        }

        targets.set(target, new ResizeObservation(target));

        // Add observer to controller
        // if it hasn't been connected yet.
        if (!this._controller.isConnected(this)) {
            this._controller.connect(this);
        }

        // Update observations.
        this._controller.runUpdates();
    }

    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     */
    unobserve(target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }

        if (!(target instanceof Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }

        const targets = this._targets;

        // Do nothing if element is not being observed.
        if (!targets.has(target)) {
            return;
        }

        // Remove element and an associated with
        // it ResizeObsrvation instance from registry.
        targets.delete(target);

        if (!targets.size) {
            this.disconnect();
        }
    }

    /**
     * Stops observing all elements and
     * clears the observations list.
     */
    disconnect() {
        this.clearActive();
        this._targets.clear();

        this._controller.disconnect(this);
    }

    /**
     * Invokes initial callback function with a list
     * of ResizeObserverEntry instances collected from
     * active resize observations.
     */
    broadcastActive() {
        if (!this.hasActive()) {
            return;
        }

        const publicObserver = this._publicObserver;

        const entries = this._activeTargets.map(observation => {
            return new ResizeObserverEntry(
                observation.target,
                observation.broadcastRect()
            );
        });

        this.clearActive();

        this._callback.call(publicObserver, entries, publicObserver);
    }

    /**
     * Clears the collection of pending/active observations.
     */
    clearActive() {
        this._activeTargets.splice(0);
    }

    /**
     * Tells whether the observer has
     * pending observations.
     *
     * @returns {Boolean}
     */
    hasActive() {
        return !!this._activeTargets.length;
    }

    /**
     * Clears an array of previously collected active observations
     * and collects observation instances whose associated element
     * has changes in its' content rectangle.
     */
    gatherActive() {
        this.clearActive();

        const activeTargets = this._activeTargets;

        this._targets.forEach(observation => {
            if (observation.isActive()) {
                activeTargets.push(observation);
            }
        });
    }
}

// Controller which will be assigned to all instances of ResizeObserver.
const controller = new ResizeObserverController();

// Registry of internal observers.
const observers = new WeakMap();

/**
 * ResizeObservers' "Proxy" class which is meant to hide private
 * properties and methods from public instances.
 *
 * Additionally it implements "idleTimeout" and "continuousUpdates" static property
 * accessors to give a control over the behavior of ResizeObserverController
 * instance. Changes made to these properties will affect all future and
 * existing observers.
 */
class ResizeObserver$2 {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {Function} callback - Callback which will
     *      be invoked when dimensions of one of the
     *      observed elements have been changed.
     */
    constructor(callback) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }

        const observer = new ResizeObserver$3(callback, controller, this);

        // Register an internal observer.
        observers.set(this, observer);
    }

    /**
     * Extracts controllers' idle timeout value.
     *
     * @returns {Number}
     */
    static get idleTimeout() {
        return controller.idleTimeout;
    }

    /**
     * Sets up new idle timeout.
     *
     * @param {Number} value - New timeout value.
     */
    static set idleTimeout(value) {
        if (typeof value !== 'number') {
            throw new TypeError('type of "idleTimeout" value must be a number.');
        }

        if (typeof value < 0) {
            throw new TypeError('"idleTimeout" value must be greater than 0.');
        }

        controller.idleTimeout = value;
    }

    /**
     * Tells whether continuous updates are enabled.
     *
     * @returns {Boolean}
     */
    static get continuousUpdates() {
        return controller.continuousUpdates;
    }

    /**
     * Enables or disables continuous updates.
     *
     * @param {Boolean} value - Whether to enable or disable
     *      continuous updates.
     */
    static set continuousUpdates(value) {
        if (typeof value !== 'boolean') {
            throw new TypeError('type of "continuousUpdates" value must be a boolean.');
        }

        controller.continuousUpdates = value;
    }
}

// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(method => {
    ResizeObserver$2.prototype[method] = function () {
        return observers.get(this)[method](...arguments);
    };
});

let ResizeObserver = ResizeObserver$2;

// Export existing implementation if it's available.
if (typeof window.ResizeObserver === 'function') {
    ResizeObserver = window.ResizeObserver;
}

const ResizeObserver$1 = ResizeObserver;

const hyDesktopMenuLinksCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row;flex-flow:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0}.hy-site-header__menu-desktop{height:100%;margin:0 32px}.hy-site-header__menu-desktop.is-group{margin:0}.hy-desktop-menu{display:-webkit-box;display:-ms-flexbox;display:flex;height:100%;list-style:none;margin:0;padding:0;width:100%}.is-dropdown .hy-desktop-menu__item{position:relative}.hy-desktop-menu__button{font-size:0.875rem;line-height:16px;font-weight:700;background-color:transparent;border:none;color:var(--brand-main-nearly-black);cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;font-family:var(--main-font-family);height:100%;letter-spacing:-0.7px;padding:39px 10px 13px;text-transform:uppercase;text-decoration:none;text-align:left;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.is-group .hy-desktop-menu__button{padding:26px 10px;width:auto;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}@media (min-width: 1601px){.hy-desktop-menu__button.is-long br{display:none}}@media (min-width: 1601px){.hy-desktop-menu__button{font-size:1rem;line-height:16px;width:auto;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:26px 10px}}.hy-desktop-menu__button:hover{cursor:pointer}.hy-desktop-menu__button:hover span{color:var(--brand-main)}.hy-desktop-menu__button:hover svg{fill:var(--brand-main)}.hy-desktop-menu__button:focus{outline:solid 2px var(--additional-yellow);outline-offset:2px;color:var(--link-blue)}.hy-desktop-menu__button span{pointer-events:none}.hy-desktop-menu__button hy-icon{pointer-events:none;margin-left:4px}.hy-desktop-menu__button hy-icon svg{height:10px;width:10px}.hy-desktop-menu__button[aria-expanded=true] hy-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.is-panel-open .hy-desktop-menu__button:not([aria-expanded=true]){-webkit-box-shadow:none;box-shadow:none}.is-panel-open .hy-desktop-menu__button:not([aria-expanded=true])::after,.is-panel-open .hy-desktop-menu__button:not([aria-expanded=true])::before{display:none}.hy-desktop-menu__button.is-active-trail,.hy-desktop-menu__button[aria-expanded=true]{-webkit-box-shadow:inset 0 -4px 0 0 var(--grayscale-black);box-shadow:inset 0 -4px 0 0 var(--grayscale-black);position:relative}.hy-desktop-menu__button.is-active-trail::after,.hy-desktop-menu__button.is-active-trail::before,.hy-desktop-menu__button[aria-expanded=true]::after,.hy-desktop-menu__button[aria-expanded=true]::before{background-color:var(--grayscale-white);content:\"\";height:5px;width:16px;position:absolute;bottom:-1px;z-index:1000}.hy-desktop-menu__button.is-active-trail::before,.hy-desktop-menu__button[aria-expanded=true]::before{left:-16px}.hy-desktop-menu__button.is-active-trail::after,.hy-desktop-menu__button[aria-expanded=true]::after{right:-16px}.hy-desktop-menu__panel{background-color:var(--grayscale-white);-webkit-transition:none;transition:none;position:absolute;top:0;z-index:100;display:-webkit-box;display:-ms-flexbox;display:flex}.hy-desktop-menu__panel[aria-hidden=true]{display:none;opacity:0}.hy-desktop-menu__panel:not(.is-dropdown){left:0;right:0;width:100%}.hy-desktop-menu__panel.is-dropdown{border:1px solid var(--grayscale-black);left:-17px;top:100%}.hy-desktop-menu__panel-container{margin:0 auto;padding:40px 24px;max-width:120.0625rem;width:100%;display:grid;grid-template-columns:1fr auto 1fr;justify-items:center;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.is-dropdown .hy-desktop-menu__panel-container{padding:24px 16px 40px}.hy-desktop-menu__panel-menu{-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;grid-column-start:2}.hy-desktop-menu__panel-header{display:inline-grid;gap:8px 16px;grid-template-areas:\"icon link\" \"icon description\";grid-template-columns:auto;grid-template-rows:auto;margin-bottom:32px;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.is-dropdown .hy-desktop-menu__panel-header{margin-bottom:16px}.hy-desktop-menu__panel-header>hy-icon{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:var(--grayscale-black);display:-webkit-box;display:-ms-flexbox;display:flex;grid-area:icon;height:40px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:40px}.hy-desktop-menu__panel-header>hy-icon svg{fill:var(--grayscale-white)}.hy-desktop-menu__panel-header a{font-size:1.5625rem;line-height:32px;font-weight:700;color:var(--brand-main);font-family:var(--main-font-family);grid-area:link;letter-spacing:-0.5px;margin-top:4px;text-decoration:none;width:-webkit-max-content;width:-moz-max-content;width:max-content}.hy-desktop-menu__panel-header a:hover{text-decoration:underline}.hy-desktop-menu__panel-header p{font-size:1.0625rem;line-height:26px;font-weight:400;color:var(--grayscale-black);font-family:var(--main-font-family);grid-area:description;margin:0;width:690px}.hy-desktop-menu__panel-content{padding-left:56px;display:inline-grid;grid-template-columns:400px}.hy-desktop-menu__panel-content.has-shortcuts{grid-template-columns:400px 496px}.is-dropdown .hy-desktop-menu__panel-content{grid-template-columns:310px}.hy-desktop-menu__panel-shortcuts{margin-left:48px;padding-left:48px;border-left:1px solid var(--grayscale-medium)}.hy-desktop-menu__panel-shortcuts>h2{font-size:1.125rem;line-height:24px;font-weight:700;color:var(--grayscale-black);font-family:var(--main-font-family);letter-spacing:-0.36px;margin:0 0 24px}.hy-desktop-menu__panel-links{list-style:none;margin:0;padding:0;display:inline-grid;gap:20px}.hy-desktop-menu__panel-link{font-size:1rem;line-height:24px;font-weight:600;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;color:var(--brand-main);display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-family:var(--main-font-family);letter-spacing:-0.5px;overflow:hidden;text-decoration:none}.hy-desktop-menu__panel-link:hover{text-decoration:underline}.hy-desktop-menu__panel-link hy-icon{margin-right:12px;margin-top:12px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.hy-desktop-menu__panel-link hy-icon svg{fill:var(--grayscale-black)}.hy-desktop-menu__panel-link span hy-icon{display:-webkit-inline-box !important;display:-ms-inline-flexbox !important;display:inline-flex !important;margin-left:6px;margin-right:0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.hy-desktop-menu__panel-link span hy-icon svg{fill:var(--brand-main)}.hy-desktop-menu__panel-close-button{font-size:1rem;line-height:18px;font-weight:700;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:transparent;border:none;color:var(--brand-main);display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-family:var(--main-font-family);letter-spacing:-0.3px;padding:16px;margin-left:auto;margin-right:-8px}.hy-desktop-menu__panel-close-button:hover{cursor:pointer}.hy-desktop-menu__panel-close-button hy-icon{margin-left:8px}.hy-desktop-menu__panel-close-button hy-icon svg{fill:var(--brand-main)}";

let keys$3 = {
  enter: 'Enter',
  tab: 'Tab',
  space: 'Space',
};
let scrollTimeout$2 = null;
let resizeTimeout$1 = null;
let HyDesktopMenuLinks = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.menuDesktopToggled = createEvent(this, "menuDesktopToggled", 7);
    /*
    First level menu links to be displayed on Desktop screens.
    * */
    this.isGroup = false;
    this.isDropdown = false;
    this.firstLevelLinksList = [];
    this.menuLinkItems = [];
    this.hasToolbar = false;
    this.isDesktopMenuOpen = false;
    this.currenOpenMenuId = 0;
    this.isNewMenuIdOnHover = false;
    // private _submenuLeftMargin: number = 32;
    this._headerBorderOffset = 0;
    this._hoverTimer = null;
    this._fadeOutTimer = null;
    this._mouseEnter = null;
    this._mouseLeave = null;
  }
  async componentWillLoad() {
    this._dataDesktopLinks = await jsonParserWorker(this.dataDesktopLinks);
  }
  removeBackdropShadow(size) {
    // Close backdrop shadow if the screen is < 1200px
    if (size < 1200) {
      this.showBackdropShadow();
    }
  }
  showBackdropShadow(state = 'close', top = 0) {
    let hyHeader = this.el.closest('.hy-site-header');
    if (!hyHeader)
      return;
    let hyBackdropDiv = hyHeader.children[0];
    if (hyBackdropDiv && !this.isDropdown) {
      if (state === 'open') {
        const windowHeight = window.outerHeight;
        hyBackdropDiv.style.height = `${windowHeight}px`;
        hyBackdropDiv.style.top = `${top}px`;
        hyBackdropDiv.style.position = 'absolute';
        hyBackdropDiv.classList.add('is-active');
      }
      else {
        hyBackdropDiv.removeAttribute('style');
        hyBackdropDiv.classList.remove('is-active');
      }
    }
  }
  showPanel(id) {
    // Close menu lang menu if it's open
    this.menuDesktopToggled.emit();
    clearTimeout(this._hoverTimer);
    clearTimeout(this._fadeOutTimer);
    // Open desktop menu panel
    this.isDesktopMenuOpen = true;
    const menuItems = this.el.shadowRoot.querySelectorAll(`.hy-desktop-menu__button`);
    const menuPanelItems = this.el.shadowRoot.querySelectorAll('.hy-desktop-menu__panel'); // all panels
    const activeMenuItem = this.el.shadowRoot.querySelector(`.hy-desktop-menu__button[link-id="${id}"]`);
    const activeMenuItemSibling = activeMenuItem.nextElementSibling; // current panel
    // Reset elements by removing the active classes.
    menuItems.forEach((item) => {
      item.setAttribute('aria-expanded', 'false');
    });
    menuPanelItems.forEach((item) => {
      item.setAttribute('aria-hidden', 'true');
      item.style.transition = 'none';
      item.style.opacity = '0';
    });
    // Set active attributes to currently active panel.
    activeMenuItem.setAttribute('aria-expanded', 'true');
    activeMenuItemSibling.style.opacity = '1';
    if (this.hasToolbar) {
      activeMenuItemSibling.classList.add('has-toolbar');
    }
    activeMenuItemSibling.setAttribute('aria-hidden', 'false');
    // Add panels top value automatically with the correct header height
    let topOffset = window.pageYOffset;
    const bodyElementClasses = document.body.classList;
    const headerElement = document.querySelector('hy-site-header');
    const headerShadowRootElement = headerElement.shadowRoot.querySelector('header');
    let headerElementHeight = headerShadowRootElement.offsetHeight + this._headerBorderOffset;
    let headerElementOffset = headerShadowRootElement.offsetTop;
    let panelElementOffset = headerElementHeight + headerElementOffset;
    // Add shadow backdrop
    let rect = activeMenuItemSibling.getBoundingClientRect();
    let backdropOffset = headerElementHeight + headerElementOffset + rect.height;
    let backdropToolbarOffset = backdropOffset - 79;
    if (!this.isDropdown) {
      window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout$2);
        scrollTimeout$2 = setTimeout(() => {
          topOffset = window.pageYOffset;
          if (topOffset === 0) {
            activeMenuItemSibling.style.top = `${panelElementOffset}px`;
          }
          if (headerShadowRootElement.classList.contains('hy-site-header--sticky-active') && topOffset > 0) {
            if (bodyElementClasses.contains('toolbar-horizontal')) {
              activeMenuItemSibling.style.top = `${headerElementHeight}px`;
              if (this.isDesktopMenuOpen) {
                this.showBackdropShadow('open', backdropToolbarOffset);
              }
            }
          }
        }, 250);
      });
    }
    if (!this.isDropdown) {
      if (headerShadowRootElement.classList.contains('hy-site-header--sticky-active') && topOffset > 0) {
        if (bodyElementClasses.contains('toolbar-horizontal')) {
          activeMenuItemSibling.style.top = `${headerElementHeight}px`;
          if (this.isDesktopMenuOpen) {
            this.showBackdropShadow('open', backdropToolbarOffset);
          }
        }
        else {
          activeMenuItemSibling.style.top = `${panelElementOffset}px`;
          this.showBackdropShadow('open', backdropOffset);
        }
      }
      else {
        activeMenuItemSibling.style.top = `${panelElementOffset}px`;
        this.showBackdropShadow('open', backdropOffset);
      }
    }
    if (this.isDropdown) {
      let windowWidth = window.outerWidth;
      const desktopMenuPanelWidth = activeMenuItemSibling.offsetWidth;
      if (windowWidth - activeMenuItem.getBoundingClientRect().left < desktopMenuPanelWidth) {
        activeMenuItemSibling.style.left = `auto`;
        activeMenuItemSibling.style.right = `-17px`;
      }
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout$1);
        resizeTimeout$1 = setTimeout(() => {
          windowWidth = window.outerWidth;
          if (windowWidth - activeMenuItem.getBoundingClientRect().left < desktopMenuPanelWidth) {
            activeMenuItemSibling.style.left = `auto`;
            activeMenuItemSibling.style.right = `-17px`;
          }
          else {
            activeMenuItemSibling.style.left = `-17px`;
            activeMenuItemSibling.style.right = `auto`;
          }
        }, 250);
      });
    }
  }
  closePanel(fadeOut = false) {
    this.isDesktopMenuOpen = false;
    this.isNewMenuIdOnHover = false;
    this.currenOpenMenuId = 0;
    this.showBackdropShadow();
    this.clearPanelItemsStatus(fadeOut);
    clearTimeout(this._hoverTimer);
  }
  clearPanelItemsStatus(fadeOut = false) {
    const menuItems = this.el.shadowRoot.querySelectorAll(`.hy-desktop-menu__button`);
    const menuPanelItems = this.el.shadowRoot.querySelectorAll('.hy-desktop-menu__panel');
    // Reset elements by removing the active classes.
    menuItems.forEach((item) => {
      // item.classList.remove('desktop-menu-link--is-active');
      item.setAttribute('aria-expanded', 'false');
    });
    if (fadeOut) {
      menuPanelItems.forEach((item) => {
        item.style.opacity = '0';
        item.style.transition = 'opacity 1s';
      });
      this._fadeOutTimer = window.requestAnimationFrame(() => {
        menuPanelItems.forEach((item) => {
          // item.classList.remove('hy-desktop-menu-panel--is-active');
          item.setAttribute('aria-hidden', 'true');
        });
      });
    }
    else {
      menuPanelItems.forEach((item) => {
        // item.classList.remove('hy-desktop-menu-panel--is-active');
        item.setAttribute('aria-hidden', 'true');
        item.style.opacity = '0';
        item.style.transition = 'none';
      });
    }
  }
  handleDesktopMenuClose(event) {
    let fadeOut = true;
    this.closePanel(fadeOut);
    event.stopPropagation();
  }
  // CLose the desktop menu panel if user opens the language menu.
  menuLanguageToggled() {
    let fadeOut = true;
    this.closePanel(fadeOut);
  }
  // Close the desktop menu panel if user opens University main menu
  universityMainMenuPanelToggled() {
    let fadeOut = true;
    this.closePanel(fadeOut);
  }
  // Close the desktop menu panel if user opens search panel
  searchPanelToggled() {
    let fadeOut = true;
    this.closePanel(fadeOut);
  }
  // CLose the desktop menu panel if user scrolls Sticky Header till the very top.
  headerScrollUp() {
    let fadeOut = false;
    this.closePanel(fadeOut);
  }
  handleDesktopMenuEnter(event, id) {
    if (this.isDesktopMenuOpen && this._mouseEnter == null) {
      clearTimeout(this._mouseLeave);
      this._mouseLeave = null;
      this._mouseEnter = setTimeout(() => {
        this.isNewMenuIdOnHover = true;
        clearTimeout(this._fadeOutTimer);
        const activeMenuItem = this.el.shadowRoot.querySelector(`.hy-desktop-menu__button[link-id="${id}"]`);
        // Set focus to the button.
        if (activeMenuItem !== null)
          activeMenuItem.focus();
        this.currenOpenMenuId = id;
        this.showPanel(id);
        event.stopPropagation();
      }, 500);
    }
  }
  handleDesktopMenuLeave() {
    clearTimeout(this._mouseEnter);
    this._mouseEnter = null;
  }
  handleWindowClick(event) {
    // Check if event is being fired during pressing a key (event.detail==0 in this case)
    if (event.detail == 0)
      return;
    if (this.isDesktopMenuOpen) {
      this.handleDesktopMenuClose(event);
      event.stopPropagation();
    }
  }
  handleDesktopMenuClick(event, id) {
    // Check if event is being fired during pressing a key (event.detail==0 in this case)
    if (event.detail == 0)
      return;
    event.stopPropagation();
    if (!this.isDesktopMenuOpen) {
      this.currenOpenMenuId = id;
      this.showPanel(id);
    }
    else if (this.isDesktopMenuOpen) {
      this.handleDesktopMenuClose(event);
    }
    if (this.isNewMenuIdOnHover) {
      this.isNewMenuIdOnHover = false;
    }
  }
  handleKeyDown(event, id) {
    event.stopPropagation();
    const key = event.code;
    if ([keys$3.enter, keys$3.space].includes(key)) {
      if (!this.isDesktopMenuOpen) {
        this.currenOpenMenuId = id;
        this.showPanel(id);
      }
      else {
        this.handleDesktopMenuClose(event);
      }
    }
  }
  componentDidLoad() {
    // Set the browser resize observer to gather information about browser width.
    this.ro = new ResizeObserver$1((entries) => {
      for (const entry of entries) {
        this.removeBackdropShadow(entry.contentRect.width);
      }
    });
    this.ro.observe(document.body);
    let hyToolbar = document.querySelectorAll('#toolbar-administration')[0];
    if (hyToolbar) {
      this.hasToolbar = true;
    }
    const links = this._dataDesktopLinks;
    let menuLinkItems = [];
    if (links) {
      links.map(({ menuLinkId: id, shortcuts, items, url, description, toggleOff, label, labelExtra, isExternal, isActive, shortcutsTitle, closeButtonTitle, }) => {
        let target = isExternal ? '_blank' : '_self';
        const isLabelLong = label.split(' ').length >= 3 ? true : false;
        let customizedLabel = [];
        if (isLabelLong && !this.isGroup) {
          customizedLabel = label.split(' ');
          customizedLabel.splice(2, 0, '</br>');
        }
        if (toggleOff) {
          menuLinkItems.push(h("li", { onMouseEnter: (e) => this.handleDesktopMenuClose(e), class: `hy-desktop-menu__item ${isActive === 'true' ? 'is-active-trail' : ''}` }, h("a", { "aria-current": label, href: url, target: target, class: `hy-desktop-menu__button ${isLabelLong && !this.isGroup ? 'is-long' : ''}`, "menu-link-id": id }, labelExtra ? h("span", { class: "label" }, labelExtra) : h("span", { class: "label" }, label))));
        }
        else {
          menuLinkItems.push(h("li", { class: "hy-desktop-menu__item" }, h("button", { tabindex: "0", type: "button", class: `hy-desktop-menu__button ${isActive === 'true' ? 'is-active-trail' : ''} ${isLabelLong && !this.isGroup ? 'is-long' : ''}`, "link-id": id, onClick: (e) => this.handleDesktopMenuClick(e, id), onKeyDown: (e) => this.handleKeyDown(e, id), onMouseEnter: (e) => this.handleDesktopMenuEnter(e, id), onMouseLeave: () => this.handleDesktopMenuLeave(), "aria-expanded": "false" }, h("span", { innerHTML: isLabelLong && !this.isGroup ? customizedLabel.join(' ') : label }), h("hy-icon", { icon: 'hy-icon-caret-down', size: 32 })), h("section", { class: `hy-desktop-menu__panel ${this.isDropdown ? 'is-dropdown' : ''}`, "aria-hidden": "true" }, h("div", { class: "hy-desktop-menu__panel-container" }, h("div", { class: "hy-desktop-menu__panel-menu" }, h("div", { class: "hy-desktop-menu__panel-header" }, h("hy-icon", { icon: 'hy-icon-arrow-right', size: 24 }), h("a", { "aria-current": label, href: url, target: target, "menu-link-id": id }, labelExtra || label), description && !this.isDropdown && h("p", null, description)), h("div", { class: `hy-desktop-menu__panel-content ${shortcuts.length > 0 ? 'has-shortcuts' : ''}` }, h("ul", { class: 'hy-desktop-menu__panel-links hy-desktop-menu__panel-links--menu', "menu-link-id": id }, items.map(({ label, url, isExternal }) => {
            let subitemTarget = isExternal ? '_blank' : '_self';
            return (h("li", { class: "hy-desktop-menu__panel-links-item" }, h("a", { class: "hy-desktop-menu__panel-link", href: url, target: subitemTarget }, h("hy-icon", { icon: 'hy-icon-caret-right', size: 10 }), h("span", null, label, isExternal && h("hy-icon", { icon: 'hy-icon-arrow-right', size: 12 })))));
          })), shortcuts.length > 0 && (h("div", { class: "hy-desktop-menu__panel-shortcuts" }, h("h2", null, shortcutsTitle), h("ul", { class: "hy-desktop-menu__panel-links hy-desktop-menu__panel-links--shortcuts" }, shortcuts.map(({ shortcut_title, shortcut_url, shortcut_is_external, shortcut_aria_label }) => {
            let target = shortcut_is_external ? '_blank' : '_self';
            return (h("li", { class: "hy-desktop-menu__panel-links-item" }, h("a", { "aria-current": shortcut_aria_label, href: shortcut_url, class: "hy-desktop-menu__panel-link", target: target, "aria-label": shortcut_aria_label }, h("hy-icon", { icon: 'hy-icon-caret-right', size: 10 }), h("span", null, shortcut_title, shortcut_is_external && h("hy-icon", { icon: 'hy-icon-arrow-right', size: 12 })))));
          })))))), !this.isDropdown && (h("button", { onClick: (e) => this.handleDesktopMenuClose(e), class: {
              'hy-desktop-menu__panel-close-button': true,
            }, "aria-label": "Close menu" }, h("span", null, closeButtonTitle), h("hy-icon", { icon: 'hy-icon-remove', size: 16 })))))));
        }
      });
    }
    this.menuLinkItems = menuLinkItems;
  }
  render() {
    return (h("nav", { role: 'navigation', class: `hy-site-header__menu-desktop ${this.isGroup ? 'is-group' : ''} ${this.isDropdown ? 'is-dropdown' : ''}` }, h("ul", { class: `hy-desktop-menu ${this.isDesktopMenuOpen ? 'is-panel-open' : ''}` }, this.menuLinkItems)));
  }
  get el() { return getElement(this); }
};
HyDesktopMenuLinks.style = hyDesktopMenuLinksCss;

const hyDropdownCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}.hy-dropdown{display:inline-block;min-width:100%;position:relative}@media (min-width: 30rem){.hy-dropdown{min-width:48.3%}}@media (min-width: 75.0625rem){.hy-dropdown{min-width:23.03%}}.hy-dropdown label.hy-dropdown__button-label{font-size:1rem;line-height:20px;font-weight:700;display:block;font-family:var(--main-font-family);letter-spacing:-0.32px;margin-bottom:8px}.hy-dropdown--single .hy-dropdown__panel{width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:330px;min-width:100%}.hy-dropdown__toggle{font-size:0.875rem;line-height:24px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:var(--grayscale-white);border-radius:0;border:1px solid var(--grayscale-medium-dark);color:var(--link-blue);display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-family:var(--main-font-family);font-weight:600;min-height:40px;height:auto;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;letter-spacing:normal;padding:0 0 0 16px;text-align:left;max-width:280px;width:100%}@media (min-width: 30rem){.hy-dropdown__toggle{font-size:1rem;line-height:24px;min-height:44px}}@media (min-width: 75.0625rem){.hy-dropdown__toggle{min-height:48px}}.hy-dropdown__toggle:hover{border-color:var(--brand-main-light);cursor:pointer}.hy-dropdown__toggle:focus{border-color:var(--brand-main-light);border-style:solid inset solid solid;border-width:2px;outline:0;text-indent:-1px}.hy-dropdown__toggle svg{pointer-events:none}.hy-dropdown__toggle.is-open .hy-dropdown__icon{background-color:var(--brand-main-light);-webkit-transform:rotate(180deg);transform:rotate(180deg)}.hy-dropdown__toggle.is-open .hy-dropdown__icon::before{display:none}.hy-dropdown__toggle.is-open .hy-dropdown__icon svg{fill:var(--grayscale-white)}.hy-dropdown__icon{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-negative:0;flex-shrink:0;height:40px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0 0 0 16px;position:relative;width:40px}.hy-dropdown__icon::before{border-left:0.5px solid var(--grayscale-medium-dark);content:\"\";display:inline-block;height:65%;left:0;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}@media (min-width: 30rem){.hy-dropdown__icon{height:44px;width:44px}}@media (min-width: 75.0625rem){.hy-dropdown__icon{height:48px;width:48px}}.hy-dropdown__icon svg{fill:var(--link-blue)}@media (min-width: 30rem){.hy-dropdown__icon svg{height:16px;width:16px}}.hy-dropdown__panel{background-color:var(--grayscale-white);-webkit-box-shadow:0 10px 20px 0 rgba(0, 49, 70, 0.2);box-shadow:0 10px 20px 0 rgba(0, 49, 70, 0.2);list-style:none;margin:0;padding:6px;position:absolute;width:100%;z-index:11}.hy-dropdown__panel.is-hidden{display:none;visibility:hidden}.hy-dropdown__panel-item{position:relative}.hy-dropdown__panel-item:not(.is-last){margin-bottom:6px}.hy-dropdown__label{font-size:0.875rem;line-height:24px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:var(--grayscale-white);border-radius:0;border:1px solid var(--grayscale-medium-dark);color:var(--link-blue);display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-family:var(--main-font-family);font-weight:600;min-height:40px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;letter-spacing:normal;padding:0 16px;text-align:left;width:100%}@media (min-width: 30rem){.hy-dropdown__label{font-size:1rem;line-height:24px}}.hy-dropdown__label-icon{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:none !important;-ms-flex-negative:0;flex-shrink:0;height:40px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;visibility:hidden;width:40px}.hy-dropdown__checkbox{height:100%;margin:0;opacity:0;position:absolute;width:100%;z-index:10}.hy-dropdown__checkbox:checked+label{border-color:var(--grayscale-black);border-style:solid inset solid solid;border-width:2px;color:var(--grayscale-black);outline:0;text-indent:-1px}.hy-dropdown__checkbox:checked+label .hy-dropdown__label-icon{display:-webkit-inline-box !important;display:-ms-inline-flexbox !important;display:inline-flex !important;visibility:visible}.hy-dropdown__checkbox:hover{cursor:pointer}.hy-dropdown__checkbox:hover+label{border-color:var(--brand-main-light)}.hy-dropdown__checkbox:focus+label{border-color:var(--brand-main-light);border-style:solid inset solid solid;border-width:2px;outline:0;text-indent:-1px}";

let HyDropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.single = false;
    this.dropdownLabel = null;
    this.dropdownId = 'dropdownToggle';
    this.defaultLabel = 'All';
    this.defaultOption = null;
    this.isPanelOpen = false;
    this.isChecked = false;
    this.currentSingle = [{ id: 0, label: this.defaultLabel, value: 0 }];
  }
  async componentWillLoad() {
    this._dropdownOptions = await jsonParserWorker(this.dropdownOptions);
  }
  componentWillUpdate() {
    const items = this.el.querySelectorAll('.hy-dropdown__checkbox');
    if (items) {
      if ([...items].some((item) => item.checked == true)) {
        this.isChecked = true;
      }
      else {
        this.isChecked = false;
      }
    }
  }
  watchPropHandler(newValue, oldValue) {
    if (!this.single)
      return;
    if (newValue !== oldValue) {
      const dropdownPanelCheckboxElements = this.el.getElementsByClassName('hy-dropdown__checkbox');
      Array.from(dropdownPanelCheckboxElements).filter((item) => {
        if (item.id == newValue) {
          item.checked = true;
          this.currentSingle = this._dropdownOptions.filter((option) => option.id == newValue);
          return;
        }
        return null;
      });
    }
  }
  handlePanelToggle() {
    this.isPanelOpen = !this.isPanelOpen;
  }
  handleClick(event) {
    const dropdownToggleButtonElement = this.el.querySelector(`#${this.dropdownId}`);
    const dropdownPanelElement = this.el.querySelector('.hy-dropdown__panel');
    const dropdownPanelCheckboxElements = this.el.querySelectorAll('.hy-dropdown__checkbox');
    const dropdownToggleButtonIconElement = this.el.querySelector('.hy-dropdown__icon');
    const { target } = event;
    const allowedElements = [
      dropdownToggleButtonElement,
      dropdownPanelElement,
      dropdownToggleButtonIconElement,
      ...dropdownPanelCheckboxElements, // Spread ("copy") items to allowedElement array.
    ];
    if (this.isPanelOpen && !allowedElements.includes(target)) {
      this.isPanelOpen = false;
    }
    event.stopPropagation();
  }
  handleSingleClick(event) {
    if (!this.single || !this.isPanelOpen)
      return;
    const dropdownPanelCheckboxElements = this.el.getElementsByClassName('hy-dropdown__checkbox');
    const allowedElements = [...dropdownPanelCheckboxElements];
    const { target } = event;
    if (!allowedElements.includes(target))
      return;
    Array.from(dropdownPanelCheckboxElements).filter((item) => {
      if (item.id == target.id) {
        if (!item.checked) {
          this.currentSingle = [{ id: null, label: this.defaultLabel, value: null }];
          return;
        }
        this.currentSingle = this._dropdownOptions.filter((option) => option.id == target.id);
        return;
      }
      if (item.id !== target.id && item.checked) {
        item.checked = false;
        return;
      }
      return null;
    });
    event.stopPropagation();
  }
  render() {
    const { label: currentLabel, id: currentId, value: currentValue } = this.currentSingle[0];
    const classAttributes = ['hy-dropdown', this.single ? 'hy-dropdown--single' : ''].join(' ');
    if (this.single) {
      return (h(Host, { class: classAttributes }, this.dropdownLabel && (h("label", { class: "hy-dropdown__button-label", htmlFor: this.dropdownId }, this.dropdownLabel)), h("button", { id: this.dropdownId, class: `hy-dropdown__toggle ${this.isPanelOpen ? 'is-open' : ''}`, "aria-expanded": `${this.isPanelOpen || false}`, "aria-haspopup": "true", "aria-controls": "dropdownPanel", onClick: () => this.handlePanelToggle(), "aria-label": `${!this.isPanelOpen ? 'Open' : 'Close'} dropdown`, "data-current-id": currentId, "data-current-value": currentValue, value: currentId }, currentLabel, h("hy-icon", { class: "hy-dropdown__icon", icon: 'hy-icon-caret-down', size: 14, "aria-hidden": "true" })), h("hy-dropdown-panel", { "checkbox-checked": this.isChecked ? 'true' : 'false', "is-hidden": !this.isPanelOpen }, this._dropdownOptions.map(({ id, label, value }, index) => (h("hy-dropdown-panel-item", { "dropdown-item-id": id, "dropdown-item-label": label, "dropdown-item-value": value, "is-last": this._dropdownOptions.length - 1 === index }))))));
    }
    else {
      return (h(Host, { class: classAttributes }, h("button", { id: this.dropdownId, class: `hy-dropdown__toggle ${this.isPanelOpen ? 'is-open' : ''}`, "aria-expanded": `${this.isPanelOpen || false}`, "aria-haspopup": "true", "aria-controls": "dropdownPanel", onClick: () => this.handlePanelToggle(), "aria-label": `${!this.isPanelOpen ? 'Open' : 'Close'} dropdown` }, this.dropdownLabel && this.dropdownLabel, h("hy-icon", { class: "hy-dropdown__icon", icon: 'hy-icon-caret-down', size: 14, "aria-hidden": "true" })), h("hy-dropdown-panel", { "checkbox-checked": this.isChecked ? 'true' : 'false', "is-hidden": !this.isPanelOpen }, this._dropdownOptions.map(({ id, label, value }, index) => (h("hy-dropdown-panel-item", { "dropdown-item-id": id, "dropdown-item-label": label, "dropdown-item-value": value, "is-last": this._dropdownOptions.length - 1 === index }))))));
    }
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "defaultOption": ["watchPropHandler"]
  }; }
};
HyDropdown.style = hyDropdownCss;

let HyDropdownPanel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("ul", { id: "dropdownPanel", class: `hy-dropdown__panel ${this.isHidden ? 'is-hidden' : ''}`, "aria-hidden": `${this.isHidden || false}`, role: "region", "aria-labelledby": "dropdownToggle" }, h("slot", null)));
  }
};

let HyDropdownPanelItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isLast = false;
  }
  render() {
    return (h("li", { class: `hy-dropdown__panel-item ${this.isLast ? 'is-last' : ''}` }, h("input", { type: "checkbox", class: "hy-dropdown__checkbox", id: `${this.dropdownItemId}`, value: `${this.dropdownItemValue}` }), h("label", { class: "hy-dropdown__label", htmlFor: `${this.dropdownItemId}` }, this.dropdownItemLabel, h("hy-icon", { class: "hy-dropdown__label-icon", icon: 'hy-icon-done', size: 14, "aria-hidden": "true" }))));
  }
};

const hyFilterGroupCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}.hy-filter-group{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:16px}.hy-filter-group__listing{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;list-style:none;margin:0;padding:0}.hy-filter-group__label{font-size:0.75rem;line-height:16px;border-radius:2px;color:var(--grayscale-dark);font-family:var(--main-font-family);font-weight:normal;letter-spacing:-0.2px;margin:8px 4px 8px 0;padding:4px 0}@media (min-width: 30rem){.hy-filter-group__label{font-size:0.875rem;line-height:16px;letter-spacing:-0.3px;padding:6px 0}}.hy-filter-group__button{font-size:0.75rem;line-height:16px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:var(--grayscale-background-box);border-radius:2px;border:0;color:var(--grayscale-dark);display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-family:var(--main-font-family);font-weight:normal;letter-spacing:-0.2px;margin:8px 4px;padding:4px 6px}@media (min-width: 30rem){.hy-filter-group__button{font-size:0.875rem;line-height:16px;letter-spacing:-0.3px;padding:6px 8px}}.hy-filter-group__button:hover{cursor:pointer}.hy-filter-group__button-icon{margin-left:6px}@media (min-width: 30rem){.hy-filter-group__button-icon{margin-left:8px}}.hy-filter-group__button-icon svg{pointer-events:none}@media (min-width: 30rem){.hy-filter-group__button-icon svg{height:12px;width:12px}}.hy-filter-group__divider{font-size:0.75rem;line-height:16px;color:var(--grayscale-dark);font-family:var(--main-font-family);margin:4px 6px}@media (min-width: 30rem){.hy-filter-group__divider{font-size:0.875rem;line-height:16px;letter-spacing:-0.3px}}";

let HyFilterGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  arrayDataWatcher(newValue) {
    if (typeof newValue === 'string') {
      this._filterGroupFilters = JSON.parse(newValue);
    }
    else {
      this._filterGroupFilters = newValue;
    }
  }
  componentWillLoad() {
    this.arrayDataWatcher(this.filterGroupFilters);
  }
  // TODO: Finish handleFilterDeselect functionality with real data.
  handleFilterDeselect(id) {
    console.log(id);
  }
  render() {
    return (h(Host, { class: "hy-filter-group" }, h("ul", { class: "hy-filter-group__listing" }, h("li", null, h("h3", { class: "hy-filter-group__label" }, this.filterGroupLabel)), this._filterGroupFilters.map(({ id, label }) => (h("hy-filter-group-item", { "filter-group-item-id": id, "filter-group-item-label": label, onClick: () => this.handleFilterDeselect(id) }))))));
  }
  static get watchers() { return {
    "filterGroupFilters": ["arrayDataWatcher"]
  }; }
};
HyFilterGroup.style = hyFilterGroupCss;

let HyFilterGroupItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("li", { class: "hy-filter-group__filter" }, h("button", { type: "button", class: "hy-filter-group__button", "aria-label": `Deselect ${this.filterGroupItemLabel}` }, this.filterGroupItemLabel, h("hy-icon", { class: "hy-filter-group__button-icon", icon: 'hy-icon-remove', size: 10, "aria-hidden": "true", fill: ColorVariant.grey_dark })), h("slot", null)));
  }
};

const hyFilterListTypeCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{display:block}.hy-filter__list-type{display:none}@media (min-width: 60rem){.hy-filter__list-type{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:var(--main-font-family)}}@media (min-width: 60rem){.hy-filter__list-type span{font-size:0.875rem;line-height:18px;font-weight:600;color:var(--grayscale-black);letter-spacing:-0.5px;text-align:right}}@media (min-width: 1601px){.hy-filter__list-type span{font-size:1rem;line-height:20px}}.hy-filter__list-type__list{background:var(--grayscale-background-box);border:none;margin:0 8px;padding:10px}.hy-filter__list-type__list svg{background-color:var(--grayscale-background-box);fill:var(--brand-main-light)}.hy-filter__list-type__list.is-active{background:white;border:black 1px solid}.hy-filter__list-type__list.is-active svg{background-color:var(--grayscale-white);fill:var(--grayscale-black)}.hy-filter__list-type__list:hover{cursor:pointer}.hy-filter__list-type__grid{background:var(--grayscale-background-box);border:none;padding:10px}.hy-filter__list-type__grid svg{background-color:var(--grayscale-background-box);fill:var(--brand-main-light)}.hy-filter__list-type__grid.is-active{background:white;border:black 1px solid}.hy-filter__list-type__grid.is-active svg{background-color:var(--grayscale-white);fill:var(--grayscale-black)}.hy-filter__list-type__grid:hover{cursor:pointer}";

let HyFilterListType = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "hy-filter__list-type" }, h("span", null, this.filterLabel), h("button", { type: "button", class: {
        'hy-filter-item': true,
        'hy-filter__list-type__list': true,
        'is-active': this.filterValue == ListStyleVariants.list,
      }, "aria-label": `${this.filterLabel}--list` }, h("hy-icon", { class: "hy-filter-group__button-icon", icon: 'hy-icon-list-style-list', size: 16, "aria-hidden": "true" })), h("button", { type: "button", class: {
        'hy-filter-item': true,
        'hy-filter__list-type__grid': true,
        'is-active': this.filterValue == ListStyleVariants.grid,
      }, "aria-label": `${this.filterLabel}--grid` }, h("hy-icon", { class: "hy-filter-group__button-icon", icon: 'hy-icon-list-style-grid', size: 16, "aria-hidden": "true" }))));
  }
};
HyFilterListType.style = hyFilterListTypeCss;

const hyFilterVisibilityToolCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}.hy-filter-visibility-tool{font-size:0.875rem;line-height:20px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:transparent;border:0;color:var(--link-blue);display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-family:var(--main-font-family);font-weight:600;letter-spacing:-0.35px;padding:0;margin-right:1rem}@media (min-width: 30rem){.hy-filter-visibility-tool{font-size:1rem;line-height:20px;letter-spacing:-0.5px}}.hy-filter-visibility-tool:hover{color:var(--brand-main);cursor:pointer}.hy-filter-visibility-tool:hover svg{fill:var(--brand-main)}.hy-filter-visibility-tool:focus{color:var(--brand-main);outline-offset:1px;outline:2px solid var(--brand-main)}.hy-filter-visibility-tool:focus svg{fill:var(--brand-main)}.hy-filter-visibility-tool__icon{-ms-flex-negative:0;flex-shrink:0;margin-right:6px}.hy-filter-visibility-tool__icon svg{fill:var(--link-blue)}@media (min-width: 30rem){.hy-filter-visibility-tool__icon svg{height:16px;width:16px}}";

let HyFilterVisibilityTool = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    switch (this.filterVisibilityToolType) {
      case 'toggle':
        return (h(Host, null, h("hy-filter-visibility-tool-toggle", null)));
      case 'reset':
        return (h(Host, null, h("hy-filter-visibility-tool-reset", null)));
    }
  }
};
HyFilterVisibilityTool.style = hyFilterVisibilityToolCss;

let HyFilterVisibilityToolReset = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("button", { class: "hy-filter-visibility-tool hy-filter-visibility-tool--reset", type: "button" }, h("hy-icon", { class: "hy-filter-visibility-tool__icon", icon: 'hy-icon-remove', size: 14, "aria-hidden": "true" }), "Reset filters"));
  }
};

let HyFilterVisibilityToolToggle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("button", { class: "hy-filter-visibility-tool hy-filter-visibility-tool--show-more", type: "button" }, h("hy-icon", { class: "hy-filter-visibility-tool__icon", icon: 'hy-icon-plus', size: 12, "aria-hidden": "true" }), "Show more filters"), h("button", { class: "hy-filter-visibility-tool hy-filter-visibility-tool--show-less", type: "button" }, h("hy-icon", { class: "hy-filter-visibility-tool__icon", icon: 'hy-icon-minus', size: 12, "aria-hidden": "true" }), "Show less filters")));
  }
};

const hyFooterCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}.hy-footer{display:block}";

let HyFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const classAttributes = ['hy-footer'];
    return (h("footer", { class: classAttributes.join(' ') }, h("slot", null)));
  }
};
HyFooter.style = hyFooterCss;

const hyFooterActionCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}.hy-footer-action{-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-top:1px solid var(--grayscale-medium-dark);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding:8px 16px 16px 16px;place-content:center space-between;width:100%}@media (min-width: 30rem){.hy-footer-action{margin:0 auto;max-width:120.0625rem;padding:16px 24px 16px 24px}}@media (min-width: 60rem){.hy-footer-action{padding:16px 32px 24px 32px}}.hy-footer-action__updated-text{font-size:0.875rem;line-height:24px;color:var(--grayscale-dark);font-family:var(--main-font-family);letter-spacing:0}@media (min-width: 30rem){.hy-footer-action__updated-text{font-size:1rem;line-height:24px}}.hy-footer-action__scroll-up{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.hy-footer-action__scroll-up .hy-footer-action__up-button{background-color:var(--brand-main-light);border:0;-webkit-box-shadow:0 2px 8px 0 rgba(0, 0, 0, 0.05);box-shadow:0 2px 8px 0 rgba(0, 0, 0, 0.05);padding:8px}.hy-footer-action__scroll-up .hy-footer-action__up-button:hover{cursor:pointer}.hy-footer-action__scroll-up label{font-size:1rem;line-height:24px;color:var(--grayscale-dark);font-family:var(--main-font-family);letter-spacing:0;margin-right:8px}.hy-footer-action__scroll-up svg{fill:var(--grayscale-white)}.hy-footer-action__scroll-up:hover label{text-decoration:underline}.hy-footer-action__scroll-up:hover .hy-footer-action__up-button{background-color:var(--brand-main)}";

let HyFooterAction = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  render() {
    const classAttributes = ['hy-footer-action'].join(' ');
    return (h(Host, { class: classAttributes }, h("span", { class: 'hy-footer-action__updated-text' }, this.updatedText), this.upButtonLabel && (h("span", { class: "hy-footer-action__scroll-up" }, h("label", { htmlFor: "scroll-up" }, this.upButtonLabel), h("button", { name: "scroll-up", onClick: () => this.scrollTop(), class: "hy-footer-action__up-button", type: "button" }, h("hy-icon", { class: 'hy-footer-action__up-icon', icon: 'hy-icon-arrow-up', size: 26 }))))));
  }
};
HyFooterAction.style = hyFooterActionCss;

const hyFooterBaseCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}.hy-footer-base--content-container{background-color:var(--grayscale-black);display:block;max-width:100%}.hy-footer-base{background-color:var(--grayscale-black);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;max-height:100%;padding:32px 16px 32px 16px;place-content:center space-between;position:relative;width:100%}@media (min-width: 30rem){.hy-footer-base{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;margin:0 auto;max-width:120.0625rem;padding:32px 24px 32px 24px}}@media (min-width: 60rem){.hy-footer-base{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding:36px 32px 36px 32px}}@media (min-width: 75.0625rem){.hy-footer-base{padding:40px 32px 40px 32px}}.hy-footer-base__left{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:24px}@media (min-width: 30rem){.hy-footer-base__left{-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%}}@media (min-width: 60rem){.hy-footer-base__left{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;width:31.11%}}.hy-footer-base__logo{font-size:1.125rem;line-height:16px;font-family:var(--main-font-family);font-weight:bold;letter-spacing:-0.9px}.hy-footer-base__logo .hy-site-logo__label{min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content}.hy-footer-base__content{font-size:1rem;line-height:24px;color:var(--grayscale-white);font-family:var(--main-font-family);font-weight:600;letter-spacing:-0.1px;margin:32px 0;white-space:pre-line}@media (min-width: 30rem){.hy-footer-base__content{margin:32px 0}}@media (min-width: 60rem){.hy-footer-base__content{margin:42px 0}}@media (min-width: 75.0625rem){.hy-footer-base__content{margin:54px 0}}.hy-footer-base__some{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:64px;z-index:2}@media (min-width: 60rem){.hy-footer-base__some{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:0}}@media (min-width: 75.0625rem){.hy-footer-base__some{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}}.hy-footer-base__some__label{font-size:1rem;line-height:24px;color:var(--grayscale-white);font-family:var(--main-font-family);font-weight:600;letter-spacing:-0.1px;margin-bottom:8px;margin-right:24px}@media (min-width: 60rem){.hy-footer-base__some__label{margin-bottom:8px}}.hy-footer-base__some__items{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.hy-footer-base__some__item{margin-right:24px}.hy-footer-base__some__item :last-child(){margin-right:0}.hy-footer-base__some__item:hover{color:var(--grayscale-medium) !important}.hy-footer-base__some__item:hover svg{fill:var(--grayscale-medium)}.hy-footer-base__some svg{fill:var(--grayscale-white)}.hy-footer-base__right{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;max-height:100%;width:100%}@media (min-width: 30rem){.hy-footer-base__right{margin-bottom:32px;max-height:300px;width:calc(100% + 24px)}}@media (min-width: 60rem){.hy-footer-base__right{max-height:350px;width:65.56%}}.hy-footer-base__copy{font-size:1rem;line-height:24px;bottom:40px;color:var(--grayscale-white);display:inline-block;font-family:var(--main-font-family);font-weight:600;letter-spacing:-0.1px;position:absolute;right:50%;text-align:center;-webkit-transform:translateX(50%);transform:translateX(50%);width:100%}@media (min-width: 30rem){.hy-footer-base__copy{bottom:32px;right:50%;-webkit-transform:translateX(50%);transform:translateX(50%)}}@media (min-width: 60rem){.hy-footer-base__copy{bottom:36px;right:32px;text-align:right;-webkit-transform:none;transform:none}}@media (min-width: 75.0625rem){.hy-footer-base__copy{bottom:40px}}";

let HyFooterBase = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Link item color
     */
    this.color = FooterLinkItemColor.white;
    /**
     * Logo size
     */
    this.size = SiteLogoSize.big;
  }
  async componentWillLoad() {
    this._dataFooterBaseLinks = await jsonParserWorker(this.dataFooterBaseLinks);
    this._dataFooterBaseSome = await jsonParserWorker(this.dataFooterBaseSome);
  }
  render() {
    const logoColor = ColorVariant.white;
    const classAttributes = ['hy-footer-base--content-container'].join(' ');
    const links = this._dataFooterBaseLinks;
    const some = this._dataFooterBaseSome;
    return (h(Host, { class: classAttributes }, h("div", { class: "hy-footer-base" }, h("div", { class: "hy-footer-base__left" }, h("div", { class: "hy-footer-base__logo" }, h("hy-site-logo", { type: FooterVariant.footer, size: 56, color: logoColor, url: this.logoUrl, label: this.logoLabel })), h("div", { class: "hy-footer-base__content" }, h("slot", { name: "content" })), h("div", { class: "hy-footer-base__some" }, h("span", { class: "hy-footer-base__some__label" }, this.someLabel), h("div", { class: "hy-footer-base__some__items" }, some &&
      some.map((s) => {
        return (h("a", { "aria-label": s.label, href: s.url, class: `hy-footer-base__some__item`, title: s.label, target: "_blank" }, h("hy-icon", { icon: `hy-icon-some-${s.type}`, size: 36 })));
      })))), h("div", { class: "hy-footer-base__right" }, links &&
      links.map((link) => {
        return (h("hy-footer-link-item", { label: link.label, url: link.url, color: FooterLinkItemColor.white }));
      }), this.copyrightText && h("span", { class: "hy-footer-base__copy" }, this.copyrightText)))));
  }
};
HyFooterBase.style = hyFooterBaseCss;

const hyFooterInfoCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{display:block}.hy-footer-info{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-height:auto;padding:0 16px 40px 16px;place-content:center space-between}@media (min-width: 30rem){.hy-footer-info{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin:0 auto;max-width:120.0625rem;padding:0 24px 32px 24px}}@media (min-width: 60rem){.hy-footer-info{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding:0 32px 36px 32px}}@media (min-width: 75.0625rem){.hy-footer-info{padding:0 32px 40px 32px}}.hy-footer-info__content{margin-bottom:24px;width:100%}@media (min-width: 30rem){.hy-footer-info__content{margin-bottom:32px;width:100%}}@media (min-width: 60rem){.hy-footer-info__content{width:31.11%}}.hy-footer-info__content .hy-heading{padding-top:0 !important}.hy-footer-info__ingress{font-size:0.9375rem;line-height:20px;font-weight:400;letter-spacing:-0.09px;color:var(--grayscale-black);font-family:var(--main-font-family);padding-bottom:24px}@media (min-width: 60rem){.hy-footer-info__ingress{font-size:1rem;line-height:22px;letter-spacing:-0.1px;padding-bottom:16px}}@media (min-width: 1601px){.hy-footer-info__ingress{font-size:1.0625rem;line-height:26px}}@media (min-width: 75.0625rem){.hy-footer-info__ingress{padding-bottom:24px}}.hy-footer-info__ingress a{font-size:0.875rem;line-height:20px;color:var(--link-blue);font-family:var(--main-font-family);font-weight:600;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}@media (min-width: 30rem){.hy-footer-info__ingress a{font-size:1rem;line-height:24px;letter-spacing:-0.1px}}@media (min-width: 1601px){.hy-footer-info__ingress a{font-size:1.0625rem;line-height:26px}}.hy-footer-info__ingress a:hover{color:var(--brand-main)}.hy-footer-info__ingress a[target=_blank]:after{display:block;content:url(\"data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 30 29' fill='rgb(4,121,165)'> <polygon points='29.207 13.783 14.756 .717 14.055 0 11.402 3.118 10.732 3.835 19.665 11.974 0 11.974 0 17.026 19.756 17.026 11.494 24.447 10.823 25.071 11.402 25.882 13.476 28.189 14.055 29 30 14.594' /> </svg>\");margin-left:3px;-webkit-transform:rotate(315deg);transform:rotate(315deg)}.hy-footer-info__ingress a[target=_blank]:after:hover{content:url(\"data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 30 29' fill='pink'> <polygon points='29.207 13.783 14.756 .717 14.055 0 11.402 3.118 10.732 3.835 19.665 11.974 0 11.974 0 17.026 19.756 17.026 11.494 24.447 10.823 25.071 11.402 25.882 13.476 28.189 14.055 29 30 14.594' /> </svg>\")}.hy-footer-info__ingress a[target=_blank]:hover:after{content:url(\"data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 30 29' fill='rgb(14,104,139)'> <polygon points='29.207 13.783 14.756 .717 14.055 0 11.402 3.118 10.732 3.835 19.665 11.974 0 11.974 0 17.026 19.756 17.026 11.494 24.447 10.823 25.071 11.402 25.882 13.476 28.189 14.055 29 30 14.594' /> </svg>\")}.hy-footer-info__links{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap;max-height:auto;overflow:hidden;width:100%}@media (min-width: 30rem){.hy-footer-info__links{-ms-flex-line-pack:justify;align-content:space-between;max-height:555px;width:100%}}@media (min-width: 60rem){.hy-footer-info__links{max-height:530px;width:65.56%}}@media (min-width: 87.5rem){.hy-footer-info__links{max-height:460px}}@media (min-width: 30rem){.hy-footer-info__links.is-group:not(.luomus){-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;max-height:none}}.hy-footer-info .hy-accordion__content--inner-wrapper{width:100%}.hy-footer-info.luomus{background-color:var(--grayscale-black);color:var(--grayscale-white);padding-top:40px}.hy-footer-info.luomus .hy-footer-info__logo{font-size:1.125rem;line-height:16px;font-family:var(--main-font-family);font-weight:bold;letter-spacing:-0.9px}.hy-footer-info.luomus .hy-footer-info__logo .hy-site-logo__label{min-width:100%;max-width:100%}.hy-footer-info.luomus .hy-footer-info__branding{padding:22px 0 62px}.hy-footer-info.luomus .hy-footer-info__branding a img{height:32px;width:148px}.hy-footer-info.luomus .luomus-footer-content{color:var(--grayscale-white);margin:8px 0}.hy-footer-info.luomus .luomus-footer-content__link{font-size:1.125rem;line-height:24px;font-weight:700;color:var(--grayscale-white);font-family:var(--main-font-family);font-style:normal;letter-spacing:-0.36px;text-decoration:none}.hy-footer-info.luomus .luomus-footer-content__description{font-size:1rem;line-height:22px;font-weight:400;color:var(--grayscale-white);font-family:var(--main-font-family);font-style:normal;letter-spacing:-0.1px;padding-bottom:32px}";

let HyFooterInfo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.linkIsExternal = false;
    this.isLuomusGroup = false;
  }
  async componentWillLoad() {
    this._dataFooterInfoLinks = await jsonParserWorker(this.dataFooterInfoLinks);
    this._dataLuomusFooterContent = await jsonParserWorker(this.luomusFooterContent);
  }
  componentDidLoad() {
    this.ro = new ResizeObserver$1((entries) => {
      for (const entry of entries) {
        this.checkForMobile(entry.contentRect.width);
      }
    });
    this.ro.observe(document.body);
  }
  disconnectedCallback() {
    this.ro.disconnect();
  }
  checkForMobile(size) {
    this.isMobile = size <= 479 ? true : false;
  }
  render() {
    const links = this._dataFooterInfoLinks;
    const luomusFooterContentItems = this._dataLuomusFooterContent;
    const variant = this.isGroup ? FooterLinkVariants.group : FooterLinkVariants.campus;
    const section = this.isGroup ? HeadingSectionVariants.groupFooterInfo : HeadingSectionVariants.defaultFooterInfo;
    const footerLinkItemClass = this.isGroup ? 'group' : 'campus';
    const scLabel = this.linkScLabel && this.linkScLabel.length > 0 ? this.linkScLabel : this.linkText;
    const logoColor = ColorVariant.white;
    const linksColor = this.isLuomusGroup ? FooterLinkItemColor.white : FooterLinkItemColor.black;
    return (h(Host, { class: {
        'hy-footer-info': true,
        luomus: this.isLuomusGroup,
      } }, h("div", { class: {
        'hy-footer-info__content': true,
        'is-group': this.isGroup,
      } }, !this.isLuomusGroup && (h("hy-heading", { heading: HeadingVarians.h2, section: section }, this.textTitle)), this.isLuomusGroup && (h("div", { class: "hy-footer-info__logo" }, h("hy-site-logo", { type: FooterVariant.footer, isGroup: this.isGroup, size: 56, color: logoColor, url: this.logoUrl, label: this.logoLabel }))), this.isLuomusGroup && (h("div", { class: 'hy-footer-info__branding' }, h("a", { href: this.groupLogoUrl }, h("img", { src: this.groupLogoUrl, alt: 'Luomus logo' })))), !this.isLuomusGroup && (h("div", { class: {
        'hy-footer-info__ingress': true,
        'is-group': this.isGroup,
      }, innerHTML: this.textDescription })), !this.isLuomusGroup && this.linkUrl && (h("hy-cta-button", { "link-content": this.linkText, "sc-label": scLabel, "is-external": this.linkIsExternal, url: this.linkUrl, variant: CtaLinkButtonVariants.onWhiteBkgd })), this.isLuomusGroup &&
      luomusFooterContentItems &&
      luomusFooterContentItems.map((item) => {
        return (h("div", { class: "luomus-footer-content" }, h("a", { href: item.url, class: "luomus-footer-content__link" }, item.heading), item.content && h("div", { class: "luomus-footer-content__description", innerHTML: item.content })));
      })), this.isMobile && this.isGroup === false ? (h("div", { class: {
        'hy-footer-info__links': true,
        'is-group': this.isGroup,
        luomus: this.isLuomusGroup,
      } }, h("hy-accordion-container", { accordionid: 'test' }, links &&
      links.map((link) => {
        return (h("hy-accordion-item", { accordiontitle: link.label }, h("hy-footer-link-item", { class: footerLinkItemClass, variant: variant, color: linksColor, label: link.label, url: link.url, "main-link": link.mainlink, items: link.items, isMobile: this.isMobile })));
      })))) : (h("div", { class: {
        'hy-footer-info__links': true,
        'is-group': this.isGroup,
        luomus: this.isLuomusGroup,
      } }, links &&
      links.map((link) => {
        const external_link = link.isExternal === 'external';
        return (h("hy-footer-link-item", { "is-luomus-group": this.isLuomusGroup, class: footerLinkItemClass, variant: variant, color: linksColor, label: link.label, url: link.url, "is-external": external_link, "main-link": link.mainlink, items: link.items, isMobile: this.isMobile }));
      })))));
  }
  get el() { return getElement(this); }
};
HyFooterInfo.style = hyFooterInfoCss;

const hyFooterLinkItemCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{display:block}hy-footer-link-item:not([main-link]){width:100%}@media (min-width: 30rem){hy-footer-link-item:not([main-link]){width:50%}}hy-footer-link-item[main-link]{-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;min-width:200px;width:100%}@media (min-width: 30rem){hy-footer-link-item[main-link]{width:50%}}hy-footer-link-item.group[main-link]:not([is-luomus-group]){-ms-flex-preferred-size:100%;flex-basis:100%;margin-top:1rem}@media (min-width: 30rem){hy-footer-link-item.group[main-link]:not([is-luomus-group]){-ms-flex-preferred-size:50%;flex-basis:50%;margin:0}}.hy-footer-link-item--container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.hy-footer-link-item--container .hy-footer-link-item:last-child{margin-bottom:16px}.hy-footer-link-item{display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--main-font-family);margin-left:0;margin-right:0;position:relative;text-decoration:none}@media (min-width: 30rem){.hy-footer-link-item{margin-left:0;margin-right:24px}}@media (min-width: 60rem){.hy-footer-link-item{margin-left:32px;margin-right:0}}@media (min-width: 1601px){.hy-footer-link-item{margin-left:48px}}.hy-footer-link-item__main{border:0;padding:0;margin-right:-32px}.hy-footer-link-item__main .hy-heading__container>h3.hy-heading{font-size:1.125rem;line-height:22px;letter-spacing:-0.45px;padding:0 0 1px 0 !important}@media (min-width: 30rem){.hy-footer-link-item__main .hy-heading__container>h3.hy-heading{font-size:1.375rem;line-height:28px;letter-spacing:-0.44px}}.hy-footer-link-item__main .hy-heading__container>h3.hy-heading .hy-footer-link-item__link{color:var(--grayscale-black);font-family:var(--main-font-family);text-decoration:none;margin-bottom:12px}.hy-footer-link-item__color-black{font-size:0.875rem;line-height:18px;font-weight:400;border-bottom:1px solid var(--grayscale-black);color:var(--grayscale-black);letter-spacing:-0.5px;padding:16px 20px 14px 0}.hy-footer-link-item__color-black .hy-footer-link-item__icon svg{fill:var(--brand-main-nearly-black);height:12px;margin-right:2px;width:12px}.hy-footer-link-item__color-black .hy-heading__container>h3.hy-headinga.hy-footer-link-item__link:hover{color:var(--brand-main) !important;text-decoration:underline}.hy-footer-link-item__color-black .hy-heading__container>h3.hy-headinga.hy-footer-link-item__link:hover svg{fill:var(--brand-main)}.hy-footer-link-item__color-white{font-size:0.875rem;line-height:18px;font-weight:600;border-bottom:1px solid var(--grayscale-white);color:var(--grayscale-white);letter-spacing:-0.5px;padding:15px 20px 15px 0}.hy-footer-link-item__color-white .hy-footer-link-item__icon svg{fill:var(--grayscale-white)}.hy-footer-link-item__color-white .hy-heading__container>h3.hy-heading .hy-footer-link-item__link:hover{color:var(--grayscale-medium) !important}.hy-footer-link-item__color-white .hy-heading__container>h3.hy-heading .hy-footer-link-item__link:hover svg{fill:var(--grayscale-medium)}.hy-footer-link-item__icon{position:absolute;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}";

let HyFooterLinkItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isExternal = false;
    this.mainLink = false;
    this.color = FooterLinkItemColor.black;
    this.variant = FooterLinkVariants.base;
    this.isLuomusGroup = false;
  }
  render() {
    const containerClassAttributes = [
      'hy-footer-link-item--container',
      `hy-footer-link-item__${this.variant}`,
      this.items && 'hy-footer-link-item__has-children',
    ].join(' ');
    const classAttributes = [
      'hy-footer-link-item',
      this.mainLink && 'hy-footer-link-item__main',
      `hy-footer-link-item__color-${this.color}`,
    ].join(' ');
    const headingClassAttributes = [
      'hy-footer-link-item',
      'hy-footer-link-item__heading',
      this.mainLink && 'hy-footer-link-item__main',
      `hy-footer-link-item__heading__color-${this.color}`,
    ].join(' ');
    const linkClassAttributes = [
      'hy-footer-link-item',
      `hy-footer-link-item__color-${this.color}`,
      this.isLuomusGroup ? `luomus` : '',
    ].join(' ');
    if (this.items) {
      if (this.isMobile && this.variant !== FooterLinkVariants.group) {
        return (h("div", { class: containerClassAttributes }, this.items.map((item) => {
          const target = item.isExternal === 'external' ? '_blank' : '_self';
          return (h("a", { class: linkClassAttributes, href: item.url, target: target, style: { color: this.color } }, item.label, h("hy-icon", { class: 'hy-footer-link-item__icon', icon: 'hy-icon-arrow-right', size: 16 })));
        })));
      }
      else {
        return (h("div", { class: containerClassAttributes }, h("hy-heading", { class: headingClassAttributes, heading: HeadingVarians.h3 }, this.url.length > 0 && (h("a", { class: 'hy-footer-link-item__link', href: this.url, style: { color: this.color } }, this.label)), this.url.length == 0 && h("div", { class: 'hy-footer-link-item__link' }, this.label)), this.items.map((item) => {
          const target = item.isExternal === 'external' ? '_blank' : '_self';
          return (h("a", { class: linkClassAttributes, href: item.url, target: target, style: { color: this.color } }, item.label, h("hy-icon", { class: 'hy-footer-link-item__icon', icon: 'hy-icon-arrow-right', size: 16 })));
        })));
      }
    }
    else {
      const target = this.isExternal ? '_blank' : '_self';
      return (h("a", { class: classAttributes, href: this.url, style: { color: this.color }, target: target }, this.label, h("hy-icon", { class: 'hy-footer-link-item__icon', icon: 'hy-icon-arrow-right', size: 16 })));
    }
  }
};
HyFooterLinkItem.style = hyFooterLinkItemCss;

const hyGeneralListCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{display:block}.hy-general-list{list-style:none;margin:0;padding:0}.hy-general-list--style-grid{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;gap:22px}@media (min-width: 30rem){.hy-general-list--style-grid{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}}@media (min-width: 60rem){.hy-general-list--style-grid{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}}.hy-general-list--style-grid li{background-color:var(--grayscale-background-box);width:100%;height:auto}@media (min-width: 30rem){.hy-general-list--style-grid li{width:calc(100% / 2 - 22px)}}@media (min-width: 60rem){.hy-general-list--style-grid li{width:calc(100% / 3 - 22px)}}.hy-general-list--with-sidebar.hy-general-list--style-grid{gap:22px}@media (min-width: 30rem){.hy-general-list--with-sidebar.hy-general-list--style-grid{gap:24px}}@media (min-width: 30rem){.hy-general-list--with-sidebar.hy-general-list--style-grid li{width:calc(100% / 2 - 24px)}}@media (min-width: 60rem){.hy-general-list--with-sidebar.hy-general-list--style-grid li{width:calc(100% / 3 - 24px)}}";

let HyGeneralList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.type = GeneralListTypes.list;
    this.blank = true;
    this.truncateDescription = true;
    this.truncateLimit = 140;
    this.hasSidebar = false;
  }
  async componentWillLoad() {
    this._dataItems = await jsonParserWorker(this.dataItems);
    const hyMainDiv = this.el.closest('.hy-main');
    if (hyMainDiv) {
      if (hyMainDiv.classList.contains('with-sidebar')) {
        this.hasSidebar = true;
      }
    }
  }
  async watchPropHandler(newValue, oldValue) {
    if (newValue !== oldValue) {
      this._dataItems = await jsonParserWorker(this.dataItems);
    }
  }
  render() {
    const classAttributes = [
      'hy-general-list',
      this.hasSidebar ? 'hy-general-list--with-sidebar' : '',
      `hy-general-list--style-${this.type}`,
    ].join(' ');
    let listData = this._dataItems;
    if (typeof this._dataItems === 'object') {
      listData = Object.values(this._dataItems);
    }
    function truncate(str, n) {
      return str.length > n ? str.substr(0, n - 1) + '...' : str;
    }
    return (h(Host, null, h("ul", { class: classAttributes }, listData &&
      listData.map((item) => (h("li", null, h("hy-general-list-item", { "has-sidebar": this.hasSidebar, target: this.blank, "data-location": item.url, description: this.truncateDescription ? truncate(item.description, this.truncateLimit) : item.description, id: item.id, imageAlt: item.imageAlt, imageUrl: item.imageUrl, "item-title": item.title, label: item.label, "sub-label": item.subLabel, tag: item.tag, date: item.date, type: item.type, url: item.url, "list-style": this.type }))))), h("hy-box", { mb: "1.75, 1.75, 2, 2.5" })));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "dataItems": ["watchPropHandler"]
  }; }
};
HyGeneralList.style = hyGeneralListCss;

const hyGeneralListItemCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{display:block;height:100%}.hy-general-list-item{font-family:var(--main-font-family);margin-bottom:1rem;height:100%}.hy-general-list-item--style-grid .hy-general-list-item__link{height:100%}@media (min-width: 30rem){.hy-general-list-item--style-grid .hy-general-list-item__link{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}.hy-general-list-item--style-grid .hy-general-list-item__image-container{border:1px solid var(--grayscale-light);max-width:100%}@media (max-width: 479px){.hy-general-list-item--style-grid .hy-general-list-item__image-container{display:-webkit-box;display:-ms-flexbox;display:flex}}@media (min-width: 60rem){.hy-general-list-item--style-grid .hy-general-list-item__text-container{padding:12px 12px 32px 12px}}@media (min-width: 75.0625rem){.hy-general-list-item--style-grid .hy-general-list-item__text-container{padding:12px 12px 32px 12px}}.hy-genenral-list-item__meta{font-size:0.75rem;line-height:14px;font-weight:600;color:var(--grayscale-dark);font-family:var(--main-font-family);letter-spacing:-0.1px;text-transform:uppercase;margin:9px 0}.hy-genenral-list-item__meta__date{font-weight:400;margin-left:4px}.hy-general-list-item__link{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative;text-decoration:none}@media (min-width: 30rem){.hy-general-list-item__link{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}}.hy-general-list-item__link:hover{cursor:pointer}.hy-general-list-item__link:hover .hy-general-list-item__type span,.hy-general-list-item__link:focus .hy-general-list-item__type span{background-color:var(--brand-main)}.hy-general-list-item__link:hover .hy-general-list-item__title,.hy-general-list-item__link:focus .hy-general-list-item__title{color:var(--brand-main);text-decoration:underline}.hy-general-list-item__image-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:stretch;-ms-flex-pack:stretch;justify-content:stretch;margin:0;position:relative;width:100%}@media (max-width: 479px){.hy-general-list-item__image-container{display:none}}@media (min-width: 30rem){.hy-general-list-item__image-container{max-width:35.7%}}@media (min-width: 60rem){.hy-general-list-item__image-container{max-width:23.13%}}@media (min-width: 75.0625rem){.hy-general-list-item__image-container{max-width:23.03%}}.hy-general-list-item__image-container:before{content:\"\";display:block;padding-top:var(--aspectRatio)}.hy-general-list-item__image-container img{bottom:0;height:100%;left:0;-o-object-fit:cover;object-fit:cover;position:absolute;right:0;top:0;width:100%}.hy-general-list-item__image{background-color:#ececec;width:100%;height:100%}.hy-general-list-item__type{background-color:var(--grayscale-background-box);padding-top:16px;z-index:10}@media (min-width: 30rem){.hy-general-list-item__type{background-color:transparent;left:-8px;padding-top:0;position:absolute;top:16px}}.hy-general-list-item__type__major{font-size:0.75rem;line-height:14px;font-weight:700;background-color:var(--grayscale-black);color:var(--grayscale-white);letter-spacing:-0.1px;padding:5px 8px;text-transform:uppercase;-ms-flex-item-align:baseline;align-self:baseline;margin-left:-8px}@media (min-width: 30rem){.hy-general-list-item__type__major{margin-left:0}}.hy-general-list-item__type__sub{font-size:0.75rem;line-height:14px;background-color:var(--grayscale-black);color:var(--grayscale-white);font-family:var(--main-font-family);letter-spacing:-0.1px;padding:5px 8px;margin-left:-8px}.hy-general-list-item__text-container{background-color:var(--grayscale-background-box);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding:16px 12px}@media (min-width: 60rem){.hy-general-list-item__text-container{padding:14px 32px 24px 24px}}@media (min-width: 75.0625rem){.hy-general-list-item__text-container{padding:20px 104px 32px 32px}}.hy-general-list-item__title{font-size:1.125rem;line-height:22px;font-weight:700;color:var(--brand-main-nearly-black);letter-spacing:-0.45px;margin-bottom:8px;margin-top:0}@media (min-width: 1601px){.hy-general-list-item__title{font-size:1.25rem;line-height:24px;letter-spacing:-0.5px}}@media (min-width: 75.0625rem){.hy-general-list-item__title__large{font-size:1.25rem;line-height:24px;letter-spacing:-0.5px}}.hy-general-list-item__description{font-size:0.9375rem;line-height:20px;color:var(--grayscale-dark);display:none;letter-spacing:-0.09px;margin:0}@media (min-width: 30rem){.hy-general-list-item__description{font-size:0.875rem;line-height:18px;display:block;letter-spacing:-0.08px}}@media (min-width: 1601px){.hy-general-list-item__description{font-size:0.875rem;line-height:20px}}@media (min-width: 75.0625rem){.hy-general-list-item__description__large{font-size:0.875rem;line-height:20px}}";

let HyGeneralListItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.hasSidebar = true;
    this.imageAlt = '';
    this.imageUrl = null;
    this.disableLazy = false;
    this.subLabel = '';
    this.date = '';
    this.tag = '';
    this.target = true;
  }
  render() {
    const classAttributes = ['hy-general-list-item', `hy-general-list-item--style-${this.listStyle}`].join(' ');
    const contentClassAttributes = ['hy-general-list-item__text-container'].join(' ');
    const imageClassAttributes = ['hy-general-list-item__image-container'].join(' ');
    const sidebarClass = this.hasSidebar ? 'common' : 'large';
    const titleClassAttributes = ['hy-general-list-item__title', `hy-general-list-item__title__${sidebarClass}`].join(' ');
    const descriptionClassAttributes = [
      'hy-general-list-item__description',
      `hy-general-list-item__description__${sidebarClass}`,
    ].join(' ');
    const aspectRatioWidth = 16;
    const aspectRatioHeight = 10;
    const aspect = (aspectRatioHeight / aspectRatioWidth) * 100;
    const aspectRatio = {
      '--aspectRatio': `${aspect}%`,
    };
    return (h("article", { class: classAttributes }, h("a", { class: "hy-general-list-item__link", href: this.url, target: this.target ? '_blank' : '_self' }, this.type && (h("div", { class: "hy-general-list-item__type" }, h("span", { class: "hy-general-list-item__type__major" }, this.label), h("span", { class: "hy-general-list-item__type__sub" }, this.subLabel))), this.imageUrl && (h("figure", { class: imageClassAttributes, style: aspectRatio }, h("img", { loading: this.disableLazy ? 'eager' : 'lazy', alt: this.imageAlt, class: "hy-general-list-item__image", src: this.imageUrl }))), h("div", { class: contentClassAttributes }, (this.tag || this.date) && (h("span", { class: "hy-genenral-list-item__meta" }, this.tag, h("span", { class: "hy-genenral-list-item__meta__date" }, this.tag && '|', " ", this.date))), h("h3", { class: titleClassAttributes }, this.itemTitle), h("p", { class: descriptionClassAttributes }, this.description)))));
  }
  get el() { return getElement(this); }
};
HyGeneralListItem.style = hyGeneralListItemCss;

const defaultHeadingCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{display:block}.hy-heading__container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;width:100%}@media (min-width: 30rem){.hy-heading__container{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}}.hy-heading__container__subsection{padding:2.5rem 0 1.375rem}@media (min-width: 30rem){.hy-heading__container__subsection{padding:4rem 0 2.375rem}}.hy-heading__container h1.hy-heading__default{margin-bottom:12px}@media (min-width: 1601px){.hy-heading__container h1.hy-heading__default{margin-bottom:16px}}@media (min-width: 75.0625rem){.hy-heading__container h1.hy-heading__default__large{margin-bottom:16px}}.hy-heading__container h1.hy-heading__search{margin-bottom:0;padding:16px 0 0}@media (min-width: 30rem){.hy-heading__container h1.hy-heading__search{padding:28px 0 0}}@media (min-width: 60rem){.hy-heading__container h1.hy-heading__search{padding:32px 0 0}}@media (min-width: 75.0625rem){.hy-heading__container h1.hy-heading__search__large{padding:40px 0 0}}.hy-heading__container h2,.hy-heading__container h3,.hy-heading__container h4,.hy-heading__container h5,.hy-heading__container h6{padding:1.5rem 0 1rem}@media (min-width: 30rem){.hy-heading__container h2,.hy-heading__container h3,.hy-heading__container h4,.hy-heading__container h5,.hy-heading__container h6{padding:2rem 0 1rem}}.hy-heading__container.hy-heading__introduction{padding-top:0}.hy-heading__container .hy-heading__courses{padding-top:0}.hy-heading{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;max-width:100%;width:auto}.hy-heading__subsection--divider,.hy-heading__contentsection--divider{-ms-flex-negative:2;flex-shrink:2;overflow:hidden;width:100%}.hy-heading__subsection--divider:after,.hy-heading__contentsection--divider:after{background-color:transparent;border-bottom:6px solid var(--grayscale-dark);content:\" \";display:-webkit-box;display:-ms-flexbox;display:flex;height:2px;width:100%;margin-left:0;margin-bottom:0.5rem;position:relative;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}@media (min-width: 30rem){.hy-heading__subsection--divider:after,.hy-heading__contentsection--divider:after{margin-left:2rem;border-bottom:1px solid var(--grayscale-dark);margin-bottom:1rem}}h2.hy-heading__introduction,h2.hy-heading__landingsection{font-size:1.75rem;line-height:32px;font-weight:700;letter-spacing:-0.7px;text-transform:uppercase}h1.hy-heading__hero{font-size:2rem;line-height:38px;font-weight:700;color:var(--grayscale-black);font-family:var(--main-font-family);letter-spacing:-0.8px;margin-bottom:0}@media (min-width: 1024px){h1.hy-heading__hero{font-size:2.875rem;line-height:54px;letter-spacing:-1.15px}}@media (min-width: 1601px){h1.hy-heading__hero{font-size:3.25rem;line-height:60px;letter-spacing:-1.3px}}@media (min-width: 30rem){.hy-heading__container__common h2.hy-heading__introduction,.hy-heading__container__common h2.hy-heading__landingsection{font-size:2.125rem;line-height:40px;letter-spacing:-0.85px}}@media (min-width: 1601px){.hy-heading__container__common h2.hy-heading__introduction,.hy-heading__container__common h2.hy-heading__landingsection{font-size:2.625rem;line-height:48px;letter-spacing:-1.05px}}.hy-heading__container__common h2.hy-heading__introduction{padding:0 0 12px}@media (min-width: 30rem){.hy-heading__container__common h2.hy-heading__introduction{padding:0 0 1rem}}.hy-heading__container__common h2.hy-heading__landingsection,.hy-heading__container__common h2.hy-heading__contentsection{padding-bottom:24px}@media (min-width: 30rem){.hy-heading__container__common h2.hy-heading__landingsection,.hy-heading__container__common h2.hy-heading__contentsection{padding-bottom:28px}}@media (min-width: 60rem){.hy-heading__container__common h2.hy-heading__landingsection,.hy-heading__container__common h2.hy-heading__contentsection{padding-bottom:32px}}@media (min-width: 75.0625rem){.hy-heading__container__common h2.hy-heading__landingsection,.hy-heading__container__common h2.hy-heading__contentsection{padding-bottom:32px}}@media (min-width: 1601px){.hy-heading__container__common h2.hy-heading__landingsection,.hy-heading__container__common h2.hy-heading__contentsection{padding-bottom:40px}}.hy-heading__container__common h2.hy-heading__group_footer_info{font-size:1.5rem;line-height:28px;font-weight:700;letter-spacing:-0.6px;text-transform:uppercase}@media (min-width: 30rem){.hy-heading__container__common h2.hy-heading__group_footer_info{letter-spacing:-0.8px}}@media (min-width: 1601px){.hy-heading__container__common h2.hy-heading__group_footer_info{font-size:1.625rem;line-height:30px}}.hy-heading__container__common h2.hy-heading__footer_info{font-size:1.75rem;line-height:32px;font-weight:700;letter-spacing:-0.7px;text-transform:uppercase}@media (min-width: 30rem){.hy-heading__container__common h2.hy-heading__footer_info{font-size:2.125rem;line-height:40px;letter-spacing:-0.85px}}@media (min-width: 1601px){.hy-heading__container__common h2.hy-heading__footer_info{font-size:2.625rem;line-height:48px;letter-spacing:-1.05px}}@media (min-width: 30rem){.hy-heading__container__large h2.hy-heading__introduction,.hy-heading__container__large h2.hy-heading__landingsection{font-size:2.125rem;line-height:40px;letter-spacing:-0.85px}}@media (min-width: 75.0625rem){.hy-heading__container__large h2.hy-heading__introduction,.hy-heading__container__large h2.hy-heading__landingsection{font-size:2.625rem;line-height:48px;letter-spacing:-1.05px}}@media (min-width: 75.0625rem){.hy-heading__container__large h2.hy-heading__introduction{padding:0 0 1rem}}@media (min-width: 1601px){.hy-heading__container__large h2.hy-heading__introduction{padding:0 0 20px}}.hy-heading__container__large h2.hy-heading__landingsection,.hy-heading__container__large h2.hy-heading__contentsection{padding-bottom:24px}@media (min-width: 30rem){.hy-heading__container__large h2.hy-heading__landingsection,.hy-heading__container__large h2.hy-heading__contentsection{padding-bottom:28px}}@media (min-width: 60rem){.hy-heading__container__large h2.hy-heading__landingsection,.hy-heading__container__large h2.hy-heading__contentsection{padding-bottom:32px}}@media (min-width: 75.0625rem){.hy-heading__container__large h2.hy-heading__landingsection,.hy-heading__container__large h2.hy-heading__contentsection{padding-bottom:40px}}@media (min-width: 75.0625rem){.hy-heading__container__large h1.hy-heading__landing_minor{font-size:3.25rem;line-height:60px;letter-spacing:-1.3px}}@media (min-width: 75.0625rem){.hy-heading__container__large h1.hy-heading__frontpage,.hy-heading__container__large h1.hy-heading__landing_major{font-size:3.5rem;line-height:64px;letter-spacing:-1.4px}}.hy-heading__container__large h2.hy-heading__group_footer_info{font-size:1.5rem;line-height:28px;font-weight:700;letter-spacing:-0.6px;text-transform:uppercase}@media (min-width: 30rem){.hy-heading__container__large h2.hy-heading__group_footer_info{letter-spacing:-0.8px}}@media (min-width: 75.0625rem){.hy-heading__container__large h2.hy-heading__group_footer_info{font-size:1.625rem;line-height:30px}}.hy-heading__container__large h2.hy-heading__footer_info{font-size:1.75rem;line-height:32px;font-weight:700;letter-spacing:-0.7px;text-transform:uppercase}@media (min-width: 30rem){.hy-heading__container__large h2.hy-heading__footer_info{font-size:2.125rem;line-height:40px;letter-spacing:-0.85px}}@media (min-width: 75.0625rem){.hy-heading__container__large h2.hy-heading__footer_info{font-size:2.625rem;line-height:48px;letter-spacing:-1.05px}}h3.hy-heading__landingsection{font-size:1.625rem;line-height:32px;letter-spacing:-0.8px}@media (min-width: 30rem){h3.hy-heading__landingsection{font-size:2rem;line-height:32px;letter-spacing:-1px}}@media (min-width: 75.0625rem){h3.hy-heading__landingsection{font-size:2.5rem;line-height:48px;letter-spacing:-1.2px}}@media (min-width: 1601px){h3.hy-heading__landingsection{font-size:2.5rem;line-height:48px;letter-spacing:-1.2px}}h1,h2,h3,h4,h5,h6{color:var(--brand-main-nearly-black);font-family:var(--main-font-family);font-weight:700;padding:0;margin:0;width:100%}h1.negative,h2.negative,h3.negative,h4.negative,h5.negative,h6.negative{color:var(--grayscale-white)}h1{font-size:2rem;line-height:38px;letter-spacing:-0.8px;text-transform:uppercase}@media (min-width: 30rem){h1{font-size:2.875rem;line-height:54px;letter-spacing:-1.15px}}@media (min-width: 1601px){h1{font-size:3.25rem;line-height:60px;letter-spacing:-1.3px}}@media (min-width: 75.0625rem){.hy-heading__container__large h1{font-size:3.25rem;line-height:60px;letter-spacing:-1.3px}}h2{font-size:1.625rem;line-height:32px;font-weight:700;letter-spacing:-0.52px}@media (min-width: 30rem){h2{font-size:1.875rem;line-height:36px;letter-spacing:-0.6px}}@media (min-width: 1601px){.hy-heading__container__common h2{font-size:2.125rem;line-height:40px;letter-spacing:-0.68px}}@media (min-width: 75.0625rem){.hy-heading__container__large h2{font-size:2.125rem;line-height:40px;letter-spacing:-0.68px}}h3{font-size:1.375rem;line-height:28px;letter-spacing:-0.7px}@media (min-width: 30rem){h3{font-size:1.625rem;line-height:32px;letter-spacing:-0.8px}}h4{font-size:1.125rem;line-height:24px;letter-spacing:-0.56px}@media (min-width: 30rem){h4{font-size:1.375rem;line-height:28px;letter-spacing:-0.69px}}h5{font-size:1rem;line-height:20px;letter-spacing:-0.5px}@media (min-width: 30rem){h5{font-size:1.125rem;line-height:24px;letter-spacing:-0.56px}}h6{font-size:0.875rem;line-height:16px;letter-spacing:-0.44px}@media (min-width: 30rem){h6{font-size:1rem;line-height:20px;letter-spacing:-0.5px}}";

const wideHeadingFwCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{display:block}.hy-heading__container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;width:100%}@media (min-width: 30rem){.hy-heading__container{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}}.hy-heading__container__subsection{padding:2.5rem 0 1.375rem}@media (min-width: 30rem){.hy-heading__container__subsection{padding:4rem 0 2.375rem}}.hy-heading__container h1.hy-heading__default{margin-bottom:12px}@media (min-width: 1601px){.hy-heading__container h1.hy-heading__default{margin-bottom:16px}}@media (min-width: 75.0625rem){.hy-heading__container h1.hy-heading__default__large{margin-bottom:16px}}.hy-heading__container h1.hy-heading__search{margin-bottom:0;padding:16px 0 0}@media (min-width: 30rem){.hy-heading__container h1.hy-heading__search{padding:28px 0 0}}@media (min-width: 60rem){.hy-heading__container h1.hy-heading__search{padding:32px 0 0}}@media (min-width: 75.0625rem){.hy-heading__container h1.hy-heading__search__large{padding:40px 0 0}}.hy-heading__container h2,.hy-heading__container h3,.hy-heading__container h4,.hy-heading__container h5,.hy-heading__container h6{padding:1.5rem 0 1rem}@media (min-width: 30rem){.hy-heading__container h2,.hy-heading__container h3,.hy-heading__container h4,.hy-heading__container h5,.hy-heading__container h6{padding:2rem 0 1rem}}.hy-heading__container.hy-heading__introduction{padding-top:0}.hy-heading__container .hy-heading__courses{padding-top:0}.hy-heading{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;max-width:100%;width:auto}.hy-heading__subsection--divider,.hy-heading__contentsection--divider{-ms-flex-negative:2;flex-shrink:2;overflow:hidden;width:100%}.hy-heading__subsection--divider:after,.hy-heading__contentsection--divider:after{background-color:transparent;border-bottom:6px solid var(--grayscale-dark);content:\" \";display:-webkit-box;display:-ms-flexbox;display:flex;height:2px;width:100%;margin-left:0;margin-bottom:0.5rem;position:relative;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}@media (min-width: 30rem){.hy-heading__subsection--divider:after,.hy-heading__contentsection--divider:after{margin-left:2rem;border-bottom:1px solid var(--grayscale-dark);margin-bottom:1rem}}h2.hy-heading__introduction,h2.hy-heading__landingsection{font-size:1.75rem;line-height:32px;font-weight:700;letter-spacing:-0.7px;text-transform:uppercase}h1.hy-heading__hero{font-size:2rem;line-height:38px;font-weight:700;color:var(--grayscale-black);font-family:var(--main-font-family);letter-spacing:-0.8px;margin-bottom:0}@media (min-width: 1024px){h1.hy-heading__hero{font-size:2.875rem;line-height:54px;letter-spacing:-1.15px}}@media (min-width: 1601px){h1.hy-heading__hero{font-size:3.25rem;line-height:60px;letter-spacing:-1.3px}}@media (min-width: 30rem){.hy-heading__container__common h2.hy-heading__introduction,.hy-heading__container__common h2.hy-heading__landingsection{font-size:2.125rem;line-height:40px;letter-spacing:-0.85px}}@media (min-width: 1601px){.hy-heading__container__common h2.hy-heading__introduction,.hy-heading__container__common h2.hy-heading__landingsection{font-size:2.625rem;line-height:48px;letter-spacing:-1.05px}}.hy-heading__container__common h2.hy-heading__introduction{padding:0 0 12px}@media (min-width: 30rem){.hy-heading__container__common h2.hy-heading__introduction{padding:0 0 1rem}}.hy-heading__container__common h2.hy-heading__landingsection,.hy-heading__container__common h2.hy-heading__contentsection{padding-bottom:24px}@media (min-width: 30rem){.hy-heading__container__common h2.hy-heading__landingsection,.hy-heading__container__common h2.hy-heading__contentsection{padding-bottom:28px}}@media (min-width: 60rem){.hy-heading__container__common h2.hy-heading__landingsection,.hy-heading__container__common h2.hy-heading__contentsection{padding-bottom:32px}}@media (min-width: 75.0625rem){.hy-heading__container__common h2.hy-heading__landingsection,.hy-heading__container__common h2.hy-heading__contentsection{padding-bottom:32px}}@media (min-width: 1601px){.hy-heading__container__common h2.hy-heading__landingsection,.hy-heading__container__common h2.hy-heading__contentsection{padding-bottom:40px}}.hy-heading__container__common h2.hy-heading__group_footer_info{font-size:1.5rem;line-height:28px;font-weight:700;letter-spacing:-0.6px;text-transform:uppercase}@media (min-width: 30rem){.hy-heading__container__common h2.hy-heading__group_footer_info{letter-spacing:-0.8px}}@media (min-width: 1601px){.hy-heading__container__common h2.hy-heading__group_footer_info{font-size:1.625rem;line-height:30px}}.hy-heading__container__common h2.hy-heading__footer_info{font-size:1.75rem;line-height:32px;font-weight:700;letter-spacing:-0.7px;text-transform:uppercase}@media (min-width: 30rem){.hy-heading__container__common h2.hy-heading__footer_info{font-size:2.125rem;line-height:40px;letter-spacing:-0.85px}}@media (min-width: 1601px){.hy-heading__container__common h2.hy-heading__footer_info{font-size:2.625rem;line-height:48px;letter-spacing:-1.05px}}@media (min-width: 30rem){.hy-heading__container__large h2.hy-heading__introduction,.hy-heading__container__large h2.hy-heading__landingsection{font-size:2.125rem;line-height:40px;letter-spacing:-0.85px}}@media (min-width: 75.0625rem){.hy-heading__container__large h2.hy-heading__introduction,.hy-heading__container__large h2.hy-heading__landingsection{font-size:2.625rem;line-height:48px;letter-spacing:-1.05px}}@media (min-width: 75.0625rem){.hy-heading__container__large h2.hy-heading__introduction{padding:0 0 1rem}}@media (min-width: 1601px){.hy-heading__container__large h2.hy-heading__introduction{padding:0 0 20px}}.hy-heading__container__large h2.hy-heading__landingsection,.hy-heading__container__large h2.hy-heading__contentsection{padding-bottom:24px}@media (min-width: 30rem){.hy-heading__container__large h2.hy-heading__landingsection,.hy-heading__container__large h2.hy-heading__contentsection{padding-bottom:28px}}@media (min-width: 60rem){.hy-heading__container__large h2.hy-heading__landingsection,.hy-heading__container__large h2.hy-heading__contentsection{padding-bottom:32px}}@media (min-width: 75.0625rem){.hy-heading__container__large h2.hy-heading__landingsection,.hy-heading__container__large h2.hy-heading__contentsection{padding-bottom:40px}}@media (min-width: 75.0625rem){.hy-heading__container__large h1.hy-heading__landing_minor{font-size:3.25rem;line-height:60px;letter-spacing:-1.3px}}@media (min-width: 75.0625rem){.hy-heading__container__large h1.hy-heading__frontpage,.hy-heading__container__large h1.hy-heading__landing_major{font-size:3.5rem;line-height:64px;letter-spacing:-1.4px}}.hy-heading__container__large h2.hy-heading__group_footer_info{font-size:1.5rem;line-height:28px;font-weight:700;letter-spacing:-0.6px;text-transform:uppercase}@media (min-width: 30rem){.hy-heading__container__large h2.hy-heading__group_footer_info{letter-spacing:-0.8px}}@media (min-width: 75.0625rem){.hy-heading__container__large h2.hy-heading__group_footer_info{font-size:1.625rem;line-height:30px}}.hy-heading__container__large h2.hy-heading__footer_info{font-size:1.75rem;line-height:32px;font-weight:700;letter-spacing:-0.7px;text-transform:uppercase}@media (min-width: 30rem){.hy-heading__container__large h2.hy-heading__footer_info{font-size:2.125rem;line-height:40px;letter-spacing:-0.85px}}@media (min-width: 75.0625rem){.hy-heading__container__large h2.hy-heading__footer_info{font-size:2.625rem;line-height:48px;letter-spacing:-1.05px}}h3.hy-heading__landingsection{font-size:1.625rem;line-height:32px;letter-spacing:-0.8px}@media (min-width: 30rem){h3.hy-heading__landingsection{font-size:2rem;line-height:32px;letter-spacing:-1px}}@media (min-width: 75.0625rem){h3.hy-heading__landingsection{font-size:2.5rem;line-height:48px;letter-spacing:-1.2px}}@media (min-width: 1601px){h3.hy-heading__landingsection{font-size:2.5rem;line-height:48px;letter-spacing:-1.2px}}h1,h2,h3,h4,h5,h6{color:var(--brand-main-nearly-black);font-family:var(--main-font-family);font-weight:700;padding:0;margin:0;width:100%}h1.negative,h2.negative,h3.negative,h4.negative,h5.negative,h6.negative{color:var(--grayscale-white)}h1{font-size:2rem;line-height:38px;letter-spacing:-0.8px;text-transform:uppercase}@media (min-width: 30rem){h1{font-size:2.875rem;line-height:54px;letter-spacing:-1.15px}}@media (min-width: 1601px){h1{font-size:3.25rem;line-height:60px;letter-spacing:-1.3px}}@media (min-width: 75.0625rem){.hy-heading__container__large h1{font-size:3.25rem;line-height:60px;letter-spacing:-1.3px}}h2{font-size:1.625rem;line-height:32px;font-weight:700;letter-spacing:-0.52px}@media (min-width: 30rem){h2{font-size:1.875rem;line-height:36px;letter-spacing:-0.6px}}@media (min-width: 1601px){.hy-heading__container__common h2{font-size:2.125rem;line-height:40px;letter-spacing:-0.68px}}@media (min-width: 75.0625rem){.hy-heading__container__large h2{font-size:2.125rem;line-height:40px;letter-spacing:-0.68px}}h3{font-size:1.375rem;line-height:28px;letter-spacing:-0.7px}@media (min-width: 30rem){h3{font-size:1.625rem;line-height:32px;letter-spacing:-0.8px}}h4{font-size:1.125rem;line-height:24px;letter-spacing:-0.56px}@media (min-width: 30rem){h4{font-size:1.375rem;line-height:28px;letter-spacing:-0.69px}}h5{font-size:1rem;line-height:20px;letter-spacing:-0.5px}@media (min-width: 30rem){h5{font-size:1.125rem;line-height:24px;letter-spacing:-0.56px}}h6{font-size:0.875rem;line-height:16px;letter-spacing:-0.44px}@media (min-width: 30rem){h6{font-size:1rem;line-height:20px;letter-spacing:-0.5px}}h1{font-size:80px;font-weight:bold;text-transform:uppercase;line-height:1.2}";

let Heading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * @type {*}
     */
    this.heading = HeadingVarians.default;
    this.isSearch = false;
    /**
     * @type {*}
     */
    this.section = HeadingSectionVariants.default;
    this.negative = false;
    this.headerstyle = 'common';
    this.hasChildren = true;
  }
  componentDidLoad() {
    let hyMainDiv = this.el.closest('.hy-main');
    if (hyMainDiv) {
      if (!hyMainDiv.classList.contains('with-sidebar')) {
        this.headerstyle = 'large';
      }
    }
    if (this.el.parentElement.classList.contains('hy-hero__title-container')) {
      this.hasChildren = false;
    }
  }
  render() {
    const headingInVariants = this.heading in HeadingVarians;
    const classAttributes = [
      'hy-heading',
      this.negative ? 'negative' : '',
      this.isSearch ? 'hy-heading__search' : '',
      this.isSearch ? `hy-heading__search__${this.headerstyle}` : '',
      `hy-heading__${this.section}`,
      `hy-heading__${this.headerstyle}`,
      `hy-heading__${this.section}__${this.headerstyle}`,
    ];
    const sectionClassAttributes = [`hy-heading__${this.section}--divider`].join(' ');
    const containerSectionClass = [
      'hy-heading__container',
      `hy-heading__container__${this.section}`,
      `hy-heading__container__${this.headerstyle}`,
    ].join(' ');
    return (h(Host, null, headingInVariants ? ([
      h("div", { class: containerSectionClass }, this.hyphenatedText && !this.hasChildren ? (h(this.heading, { class: classAttributes.join(' '), innerHTML: this.hyphenatedText })) : (h(this.heading, { class: classAttributes.join(' ') }, h("slot", null))), h("span", { class: sectionClassAttributes })),
    ]) : (h("div", { class: containerSectionClass }, this.hyphenatedText && !this.hasChildren ? (h(HeadingVarians.default, { class: classAttributes.join(' ') }, h("span", { innerHTML: this.hyphenatedText }))) : (h(HeadingVarians.default, { class: classAttributes.join(' ') }, h("span", null, h("slot", null)))), h("span", { class: sectionClassAttributes })))));
  }
  get el() { return getElement(this); }
};
Heading.style = {
  default: defaultHeadingCss,
  wide: wideHeadingFwCss
};

const hyHeroCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{display:block}.hy-hero{position:relative;padding-bottom:0}@media (min-width: 60rem){.hy-hero{margin-top:32px}}@media (min-width: 60rem){.hy-hero:not(.has-shortcuts){margin-bottom:32px}}@media (min-width: 75.0625rem){.without-sidebar .hy-hero{max-width:1216px;margin-right:auto;margin-left:auto}}@media (min-width: 75.0625rem){.with-sidebar .hy-hero{padding-left:32px;padding-right:32px}}@media (min-width: 1601px){.with-sidebar .hy-hero{padding-right:0;padding-left:0;max-width:1216px;margin-right:auto;margin-left:auto}}@media (min-width: 60rem){.hy-hero--white{padding-top:40px}}@media (min-width: 60rem){.hy-hero--white:not(.has-shortcuts){padding-bottom:48px}}.hy-hero--white:not(.has-shortcuts):after{width:100%;background-color:var(--grayscale-medium-dark);height:1px;content:\"\";margin:0 auto;display:block}@media (min-width: 60rem){.hy-hero--white:not(.has-shortcuts):after{position:absolute;left:0;right:0;bottom:0}}.hy-hero--white:not(.hy-hero--front_page):after{max-width:1216px}.hy-hero__container{position:relative}@media (min-width: 60rem){.hy-hero__container{display:grid;position:relative}}@media (min-width: 60rem){.hy-hero--small .hy-hero__container{grid-template-columns:60% 1fr}}@media (min-width: 60rem){.hy-hero--large .hy-hero__container{grid-template-columns:repeat(2, 1fr)}}.hy-hero__content-container{padding:24px 1rem 40px;margin:0 auto;width:100%}@media (min-width: 30rem){.hy-hero__content-container{padding:40px 2rem}}@media (min-width: 75.0625rem){.hy-hero__content-container{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;padding:40px 24px}}@media (min-width: 1601px){.hy-hero__content-container{max-width:1216px}}.hy-hero--black .hy-hero__content-container{background-color:var(--grayscale-black)}.hy-hero--blue .hy-hero__content-container{background-color:var(--brand-main)}.hy-hero--white .hy-hero__content-container{background-color:var(--grayscale-white)}@media (min-width: 75.0625rem){.hy-hero--white .hy-hero__content-container{padding:40px 24px 40px 0}}.hy-hero__content{position:relative}h1.hy-hero__title{-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;max-width:100%;width:auto}.hy-hero--blue h1.hy-hero__title{color:var(--grayscale-white) !important}.hy-hero--black h1.hy-hero__title{color:var(--grayscale-white) !important}.hy-hero--white h1.hy-hero__title{color:var(--grayscale-black) !important}h1.hy-hero__title.hy-heading__hero{font-size:2rem;line-height:38px;font-weight:700;color:var(--grayscale-black);font-family:var(--main-font-family);letter-spacing:-0.8px;margin-bottom:0}@media (min-width: 1024px){h1.hy-hero__title.hy-heading__hero{font-size:2.875rem;line-height:54px;letter-spacing:-1.15px}}@media (min-width: 1601px){h1.hy-hero__title.hy-heading__hero{font-size:3.25rem;line-height:60px;letter-spacing:-1.3px}}.hy-hero__description{font-size:1rem;line-height:24px;font-family:var(--main-font-family);margin:16px 0 0 0;padding:0;position:relative}@media (min-width: 1601px){.hy-hero__description{font-size:1.0625rem;line-height:26px}}.hy-hero--black .hy-hero__description{color:var(--grayscale-white)}.hy-hero--blue .hy-hero__description{color:var(--grayscale-white)}.hy-hero--white .hy-hero__description{color:var(--grayscale-black)}.hy-hero__actions{margin-top:24px}.hy-hero__image-container{margin:0;padding:0;position:relative}.hy-hero__image-container figure{margin:0}@media (min-width: 60rem){.hy-hero__image-container{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2;padding:8px 0}}@media (min-width: 60rem){.hy-hero--front_page .hy-hero__image-container{padding:0}}.hy-image__image{display:block;height:100%;min-height:205px;-o-object-fit:contain;object-fit:contain;width:100%}.has-cover .hy-image__image{-o-object-fit:cover;object-fit:cover}@media (min-width: 60rem){.hy-hero.hy-hero--front_page.hy-hero--white{margin-top:0}}@media (min-width: 75.0625rem){.hy-hero.hy-hero--front_page{margin-left:-32px;margin-right:-32px;max-width:none}}.hy-hero.hy-hero--front_page .hy-hero__container{position:relative}@media (min-width: 60rem){.hy-hero.hy-hero--front_page .hy-hero__container{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative}}.hy-hero.hy-hero--front_page .hy-hero__content-container{padding:24px 1rem 40px;margin:0 auto;width:100%}.hy-hero--black .hy-hero.hy-hero--front_page .hy-hero__content-container{background-color:var(--grayscale-black)}.hy-hero--blue .hy-hero.hy-hero--front_page .hy-hero__content-container{background-color:var(--brand-main)}.hy-hero--white .hy-hero.hy-hero--front_page .hy-hero__content-container{background-color:var(--grayscale-white)}@media (min-width: 30rem){.hy-hero.hy-hero--front_page .hy-hero__content-container{padding:24px 2rem 40px}}@media (min-width: 60rem){.hy-hero.hy-hero--front_page .hy-hero__content-container{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;min-height:330px;padding:56px 2rem}}@media (min-width: 1060px){.hy-hero.hy-hero--front_page .hy-hero__content-container{min-height:373px}}@media (min-width: 1160px){.hy-hero.hy-hero--front_page .hy-hero__content-container{min-height:480px}}@media (min-width: 75.0625rem){.hy-hero.hy-hero--front_page .hy-hero__content-container{padding-left:32px;padding-right:8px}}@media (min-width: 1260px){.hy-hero.hy-hero--front_page .hy-hero__content-container{min-height:443px}}@media (min-width: 1280px){.hy-hero.hy-hero--front_page .hy-hero__content-container{max-width:1216px;padding-left:0}}@media (min-width: 1360px){.hy-hero.hy-hero--front_page .hy-hero__content-container{min-height:478px}}@media (min-width: 1460px){.hy-hero.hy-hero--front_page .hy-hero__content-container{min-height:513px}}@media (min-width: 1560px){.hy-hero.hy-hero--front_page .hy-hero__content-container{min-height:548px}}@media (min-width: 1601px){.hy-hero.hy-hero--front_page .hy-hero__content-container{padding-left:0}}@media (min-width: 1660px){.hy-hero.hy-hero--front_page .hy-hero__content-container{min-height:583px}}@media (min-width: 1760px){.hy-hero.hy-hero--front_page .hy-hero__content-container{min-height:619px}}@media (min-width: 1860px){.hy-hero.hy-hero--front_page .hy-hero__content-container{min-height:654px}}@media (min-width: 1920px){.hy-hero.hy-hero--front_page .hy-hero__content-container{min-height:675px}}@media (min-width: 60rem){.hy-hero.hy-hero--front_page.hy-hero--small .hy-hero__image-container{width:40%}}@media (min-width: 60rem){.hy-hero.hy-hero--front_page.hy-hero--small .hy-hero__content{max-width:60%}}@media (min-width: 60rem){.hy-hero.hy-hero--front_page.hy-hero--large .hy-hero__image-container{width:50%}}@media (min-width: 60rem){.hy-hero.hy-hero--front_page.hy-hero--large .hy-hero__content{max-width:50%}}.hy-hero.hy-hero--front_page .hy-hero__image-container{background-position:50% 50%;background-size:cover;background:transparent;margin:0;padding:0;position:relative}.hy-hero.hy-hero--front_page .hy-hero__image-container figure{margin:0}@media (min-width: 60rem){.hy-hero.hy-hero--front_page .hy-hero__image-container{background-color:var(--grayscale-white);bottom:0;-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2;padding:8px 0;position:absolute;right:0;top:0}}.hy-hero.hy-hero--front_page .hy-hero__content{position:relative}@media (min-width: 60rem){.hy-hero.hy-hero--front_page .hy-hero__content{padding-right:24px}}.hy-hero.hy-hero--front_page .hy-image__image{display:block;height:100%;min-height:205px;-o-object-fit:cover;object-fit:cover;width:100%}.hy-hero__spacer-box{display:none}@media (min-width: 60rem){.hy-hero__spacer-box{display:block;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;position:absolute;inset:0}}@media (min-width: 60rem){.hy-hero--small .hy-hero__spacer-box{width:60%}}@media (min-width: 60rem){.hy-hero--large .hy-hero__spacer-box{width:50%}}.hy-hero--black .hy-hero__spacer-box{background-color:var(--grayscale-black)}.hy-hero--blue .hy-hero__spacer-box{background-color:var(--brand-main)}.hy-hero--white .hy-hero__spacer-box{background-color:var(--grayscale-white)}";

let timeout = null;
let delay = 250;
let HyHero = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.heroType = HeroTypeVariant.landing;
    this.heroGroupType = HeroGroupTypeVariant.default;
    this.colorVariant = HeroColorVariant.blue;
    this.sizeVariant = HeroSizeVariant.large;
    this.imageAltText = '';
    this.disableLazy = false;
    this.hasShortcuts = false;
    this.isExternal = false;
  }
  async componentWillLoad() {
    this._sourceSet = await jsonParserWorker(this.sourceSet);
  }
  handleHeroImageObjectFitValue(heroSizeVariant, heroElement) {
    const heroContentContainerElement = heroElement.getElementsByClassName('hy-hero__content-container')[0];
    if (heroSizeVariant === 'small') {
      if (heroContentContainerElement.offsetHeight >= 300) {
        heroElement.classList.add('has-cover');
      }
      else {
        heroElement.classList.remove('has-cover');
      }
    }
    if (heroSizeVariant === 'large') {
      if (heroContentContainerElement.offsetHeight >= 344) {
        heroElement.classList.add('has-cover');
      }
      else {
        heroElement.classList.remove('has-cover');
      }
    }
  }
  render() {
    let variant = CtaLinkButtonVariants.heroWhite;
    let colorVariantValue = this.colorVariant;
    let heroTypeValue = this.heroType;
    if (this.heroType === 'minor_landing') {
      colorVariantValue = HeroColorVariant.white;
      heroTypeValue = HeroTypeVariant.landing;
    }
    if (colorVariantValue === HeroColorVariant.blue) {
      variant = CtaLinkButtonVariants.heroBlue;
    }
    if (colorVariantValue === HeroColorVariant.black) {
      variant = CtaLinkButtonVariants.heroBlack;
    }
    if (!colorVariantValue || colorVariantValue === 'fp_white') {
      colorVariantValue = HeroColorVariant.white;
    }
    const hyHeroClasses = [
      'hy-hero',
      `hy-hero--${heroTypeValue}`,
      `hy-hero--${this.heroGroupType}`,
      `hy-hero--${colorVariantValue}`,
      `hy-hero--${this.sizeVariant}`,
    ];
    const heroTitleClasses = ['hy-hero__title', 'hy-heading__hero'].join(' ');
    // If there is a Shortcuts block after hero, add the class 'shortcuts' to remove underline.
    if (this.hasShortcuts) {
      hyHeroClasses.push('has-shortcuts');
    }
    const aspectRatioWidth = 16;
    const aspectRatioHeight = 10;
    const aspect = (aspectRatioHeight / aspectRatioWidth) * 100;
    const aspectRatio = {
      '--aspectRatio': `${aspect}%`,
    };
    window.onload = () => {
      const heroElement = document.getElementsByClassName('hy-hero')[0];
      this.handleHeroImageObjectFitValue(this.sizeVariant, heroElement);
      window.addEventListener('resize', () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => this.handleHeroImageObjectFitValue(this.sizeVariant, heroElement), delay);
      });
    };
    if (heroTypeValue === 'front_page') {
      return (h(Host, null, h("div", { class: hyHeroClasses.join(' ') }, h("div", { class: `hy-hero__container` }, h("div", { class: `hy-hero__image-container`, style: aspectRatio }, this.image &&
        (this._sourceSet ? (h("picture", null, this._sourceSet.map((item) => (h("source", { srcSet: item.src, media: item.media, type: item.type, sizes: item.sizes ? item.sizes : '' }))), h("img", { loading: this.disableLazy ? 'eager' : 'lazy', alt: this.imageAltText, class: `hy-image__image`, src: this.image }))) : (h("img", { loading: this.disableLazy ? 'eager' : 'lazy', alt: this.imageAltText, class: `hy-image__image`, src: this.image })))), h("div", { class: `hy-hero__spacer-box` }), h("div", { class: `hy-hero__content-container` }, h("div", { class: `hy-hero__content` }, h("div", { class: `hy-hero__title-container` }, h("h1", { innerHTML: this.heading, class: heroTitleClasses })), this.description && h("p", { class: `hy-hero__description` }, this.description), this.url && (h("div", { class: `hy-hero__actions` }, h("hy-cta-button", { "link-content": this.urlTitle, "sc-label": this.scLabel, url: this.url, "is-external": this.isExternal, variant: variant }))))))), h("hy-box", { mb: "2, 2, 1, 1" })));
    }
    return (h(Host, null, h("div", { class: hyHeroClasses.join(' ') }, h("div", { class: `hy-hero__container` }, h("div", { class: `hy-hero__image-container`, style: aspectRatio }, this.image &&
      (this._sourceSet ? (h("picture", null, this._sourceSet.map((item) => (h("source", { srcSet: item.src, media: item.media, type: item.type, sizes: item.sizes ? item.sizes : '' }))), h("img", { loading: this.disableLazy ? 'eager' : 'lazy', alt: this.imageAltText, class: `hy-image__image`, src: this.image }))) : (h("img", { loading: this.disableLazy ? 'eager' : 'lazy', alt: this.imageAltText, class: `hy-image__image`, src: this.image })))), h("div", { class: `hy-hero__content-container` }, h("div", { class: `hy-hero__content` }, h("div", { class: `hy-hero__title-container` }, h("h1", { innerHTML: this.heading, class: heroTitleClasses })), this.description && h("p", { class: `hy-hero__description` }, this.description), this.url && (h("div", { class: `hy-hero__actions` }, h("hy-cta-button", { "link-content": this.urlTitle, "sc-label": this.scLabel, url: this.url, "is-external": this.isExternal, variant: variant }))))))), h("hy-box", { mb: "2, 2, 1, 1" })));
  }
  get el() { return getElement(this); }
};
HyHero.style = hyHeroCss;

function SvgAlert(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 32 32" }, props),
    h("circle", { cx: "16", cy: "16", r: "16" }),
    h("path", { d: "M17.6,18.79H15l-.55-10.5h3.72Zm-3.21,3.67a1.8,1.8,0,0,1,.48-1.36,2,2,0,0,1,1.41-.46,1.94,1.94,0,0,1,1.38.47,1.83,1.83,0,0,1,.49,1.35,1.79,1.79,0,0,1-.5,1.34,1.84,1.84,0,0,1-1.37.49,1.93,1.93,0,0,1-1.4-.48A1.79,1.79,0,0,1,14.39,22.46Z" })));
}

function SvgArrowDown$1(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M513 965l419-475 23-22-100-87-23-23-261 294V6H410v649L171 384l-19-23-26 20-74 67-26 20 461 522z" })));
}

function SvgArrowUp(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M468 32L48 506l-19 23 23 23 77 64 19 23 26-26 239-268v645h161V342l236 271 22 22 123-106-20-26L516 32 497 6z" })));
}

function SvgArchive(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 28 34" }, props),
    h("path", { id: "Shape", d: "M28,8.9H0V34H28ZM24.71,30.76H3.29V12.14H24.71Z" }),
    h("polygon", { id: "Shape-2", points: "20.3 15.66 17.01 15.66 17.01 17.53 10.99 17.53 10.99 15.66 7.7 15.66 7.7 20.76 20.3 20.76 20.3 15.66" }),
    h("rect", { id: "Rectangle-path", x: "3.71", y: "4.45", width: "20.59", height: "3.24" }),
    h("rect", { id: "Rectangle-path-2", x: "5.76", width: "16.47", height: "3.24" })));
}

function SvgBachelor(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M339 784q-9-5-17-9-22-11-46-18-33-10-67-13-41-2-80 8l8 7q10 9 24 17 19 10 41 16 28 7 59 6 37-1 78-14zm-42-39q0-4 1-9 0-11-3-24-4-17-13-34-11-21-30-40-23-22-55-41l2 18q4 22 13 43 11 28 30 49 23 26 55 38zM158 442l-6 6q-7 8-12 19-7 14-8 31-2 20 5 43 8 27 28 56l5-14q6-16 8-35 4-25 0-49-4-30-20-57zm-29 0q5-4 9-9 12-11 22-25 15-20 25-44 13-29 18-61l-16 10q-19 12-33 27-20 21-27 44-9 28 2 58zm26-139q11-2 21-4 26-5 49-14 33-13 54-31 26-22 34-51l-19 3q-23 5-44 13-30 12-53 30-28 23-42 54zm-49 81q6-35-2-65-7-24-22-45-11-15-25-27l-12-8q0 37 7 66 5 24 15 42 8 14 18 24 7 7 15 10zm97-303q-4 6-9 13-11 16-17 34-10 26-9 51 0 31 16 60l8-11q10-14 16-31 9-23 9-49 0-33-14-67zm123 9q-8 4-15 9-18 10-34 24-22 18-37 38-18 25-24 52l23-5q26-8 46-19 29-16 40-37 14-27 1-62zm-181 68q-5 7-9 13-11 16-17 35-10 25-9 50 0 31 16 60l6-10q10-14 16-30 8-24 9-50 0-33-12-68zm100 561q-26-24-65-38-30-11-67-14-26-3-53-1l-21 2q47 29 86 45 33 13 59 18 21 3 37 0 11-2 19-7zm-58-45q3-26-17-50-17-18-49-34-22-11-50-19l-23-6q27 37 55 63 22 20 44 32 15 9 29 12zM0 455q9 29 29 52 16 19 39 34 16 11 34 18l14 6q3-27-14-50-14-19-40-34-19-11-42-20zm106 32q9-23-1-49-9-21-29-42-15-16-34-30l-16-11q-5 34 7 63 9 22 28 40 14 13 31 22zm552 310l-6-7q12-16 16-35 4-14 2-30-2-10-5-20l-4-8q-58 17-58 119l-6 7q-20 12-71 38l-29 13q-20-6-29-13-46-20-81-45 0-37-8-63-14-44-50-56l-3 8q-4 10-5 20-1 16 3 30 5 19 18 35l-3 4q-28-3-63 3-26 5-54 14l-22 8q63 22 114 21 38-2 63-14 23 16 81 48 2 0 4 2l3 1-13 4q-4 0-11 1l-9 2q-3 0-9 2t-10 1h-32v26h35q3 0 10-1t10-2 10-2l12-5q13-6 23-6 2 0 6-2t7-5q1 2 6 4t6 3l13 4q6 2 10 3t11 3 12 2 10 3 9 1h32v-26h-32q-10 0-16-3-3 0-9-1t-11-2l-12-4q2 0 4-1l2-2q58-32 77-48 78 26 175-10 3 2-3 0-97-26-18-5-16-4-30-7-19-4-36-6-20-2-36-1zm3-13q41 13 78 14 31 1 59-6 22-6 41-16 14-8 24-17l8-7q-39-10-80-8-34 3-67 13-24 7-46 18zm142-187q-33 19-56 41-19 19-31 40-9 17-12 34-2 13-2 24l1 9q32-12 55-38 19-21 30-49 9-21 13-43zm39-155q-16 27-20 57-4 24 0 49 2 19 8 35l5 14q20-29 28-56 7-23 5-43-1-17-8-31-5-11-12-19zm-45-139q5 32 18 61 10 24 25 44 10 14 22 25l9 9q11-30 2-58-7-23-27-44-14-15-33-27zM687 203q8 29 34 51 21 18 54 31 23 9 49 14l21 4q-14-31-42-54-23-18-53-30-21-8-44-13zm207 181q3-1 6-3 8-3 15-10 10-10 18-24 10-18 15-42 7-29 7-66l-12 8q-14 12-25 27-15 21-22 45-8 30-2 65zM797 81q-14 34-14 67 0 26 9 49 6 17 16 31l8 11q16-29 16-60 1-25-9-51-6-18-17-34zm-13 132q-7-27-25-52-15-20-37-38-16-14-33-24l-15-9q-13 35 1 62 11 21 40 37 20 11 46 19zm71-55q-13 34-13 67 0 26 8 50 6 16 16 30l8 11q17-28 18-59 0-24-9-50-7-19-18-36zM755 719q3 3 6 5 8 5 19 7 16 3 38 0 26-5 59-18 38-16 84-45l-22-3q-27-2-53 1-37 3-68 14-38 14-63 39zm200-154q-12 3-23 6-28 8-50 19-32 16-48 34-21 24-18 50 5 0 17-4 23-8 49-28 37-29 73-77zm-71 0q7-3 15-6 18-7 34-18 23-15 39-34 20-23 28-52l-20 6q-23 9-42 20-26 15-40 34-17 23-14 50zm10-78l14-6q17-9 31-21 20-18 29-41 13-29 9-64-2 0-18 11-19 14-34 30-21 21-30 42-10 26-1 49z" })));
}

function SvgBulletList(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M0 0h250v250H0V0zm375 62h625v125H375V62zM0 375h250v250H0V375zm375 62h625v125H375V437zM0 750h250v250H0V750zm375 62h625v125H375V812z" })));
}

function SvgCamera(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M32 161v678h936V161H32zm452 549q-57 0-105-29t-77-76-28-105 28-105 77-77 105-28 105 28 77 77 28 105-28 105-77 76-105 29zm290-339q-26 0-45-19t-19-46 19-45 46-19 45 19 19 45-19 46-46 19z" })));
}

function SvgCaretDown(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M503 819l462-532-123-110-339 394-345-394L35 287z" })));
}

function SvgCaretLeft(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M181 503l532 462 110-123-394-339 394-345L713 35z" })));
}

function SvgCaretRight(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M291,35L181,158l394,345L181,842l110,123l532-462L291,35z" })));
}

function SvgDate(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M871 161V65h-97v96H258V65h-97v96H65v97h903v-97h-97zM65 613v355h903V323H65v290zm96 64h194v194H161V677zm452 0v194H419V677h194zm-194-64V419h194v194H419zm452 258H677V677h194v194zm0-258H677V419h194v194zM355 419v194H161V419h194z" })));
}

function SvgDone(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M923 165l-75-62-25-19-20 26-468 558-138-168-20-23-25 20-75 58-25 22 19 26 239 287 22 33 26-33 571-680 19-23z" })));
}

function SvgArrowDown(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 26 18" }, props),
    h("circle", { id: "Oval", fill: "#107EAB", cx: "8.5", cy: "9", r: "2" }),
    h("g", { id: "Icon/arrow/to_right", transform: "translate(10.000000, 0.000000)" },
      h("g", { transform: "translate(9.000000, 9.000000) rotate(270.000000) translate(-9.000000, -9.000000) " },
        h("path", { d: "M15.3739539,2.58885408 L9.05563628,10.0114192 L2.62512723,2.58778423 C2.5650068,2.51838293 2.45894051,2.51196471 2.39075562,2.57360208 L0.0533953737,4.68651506 C-0.0121083665,4.74572874 -0.0181566661,4.84589323 0.039753545,4.91243423 L8.93312424,15.1312497 C8.99867166,15.2065661 9.11651053,15.2061936 9.18157232,15.1304643 L17.9609254,4.91164883 C18.018144,4.84504869 18.011809,4.74545823 17.9466045,4.68651506 L15.6092442,2.57360208 C15.5406475,2.51159238 15.4338255,2.5185168 15.3739539,2.58885408 Z", id: "Path", transform: "translate(9.000000, 8.859375) rotate(-360.000000) translate(-9.000000, -8.859375) " }))),
    h("circle", { id: "Oval-Copy", fill: "#107EAB", cx: "2", cy: "9", r: "2" })));
}

function SvgEditEvent(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M445 787l-268 90 23-280zm132-664l62 48-352 445-61-48zm91 71l61 48-348 445-62-48zm93 71l62 48-352 445-61-48z" })));
}

function SvgEmbed(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1250 1000" }, props),
    h("path", { d: "M813 719l93 93 313-312-313-313-93 94 218 219zM438 281l-94-94L31 500l313 312 94-93-219-219zm247-134l68 18-188 688-68-18z" })));
}

function SvgEuro(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M825.1,752.3c-9.5-8.4-24.2-8.4-32.7,1.1c-49.5,49.5-112.7,75.9-176,75.9 c-92.7,0-181.2-56.9-231.8-150.7h240.2c13.7,0,24.2-10.5,24.2-24.2v-82.2c0-13.7-10.5-24.2-24.2-24.2H342.5 c-2.1-15.8-2.1-31.6-2.1-46.3s1.1-30.5,3.2-47.4h281.3c13.7,0,24.2-10.5,24.2-24.2v-82.2c0-13.7-10.5-24.2-24.2-24.2l-240.2,0 c50.6-92.7,138.1-150.7,231.8-150.7c64.3,0,126.4,27.4,176,76.9c9.5,9.5,24.2,9.5,32.7,1.1l91.7-84.3c5.3-4.2,7.4-10.5,8.4-17.9 c0-6.3-2.1-12.6-6.3-17.9C835.6,46.3,729.2,0,617.5,0C433.1,0,265.6,129.6,199.2,322.4H98c-13.7,0-24.2,10.5-24.2,24.2v82.2 c0,13.7,10.5,24.2,24.2,24.2h73.8c-1.1,16.9-2.1,32.7-2.1,47.4c0,14.7,1.1,30.5,2.1,46.3H98c-13.7,0-24.2,10.5-24.2,24.2v82.2 c0,13.7,10.5,24.2,24.2,24.2h101.2C265.6,870.4,433.1,1000,617.5,1000c111.7,0,219.2-46.3,301.4-130.6c4.2-4.2,7.4-10.5,7.4-17.9 c0-6.3-3.2-12.6-8.4-17.9L825.1,752.3z" })));
}

function SvgEvents(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M871 161V65h-97v96H226V65h-97v96H32v97h936v-97h-97zM32 968h936V323H32v645zm97-549h742v452H129V419zm348 239l-67-68-45 45 125 126 149-226-52-38z" })));
}

function SvgFileText(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M896 224q-33-46-84-98t-98-85Q658 0 625 0H141q-33 0-55 23T63 78v844q0 32 23 55t55 23h718q33 0 56-23t23-55V312q0-32-42-88zm-129-53q41 41 71 79H688V100q37 29 79 71zm108 751q0 6-4 11t-12 4H141q-7 0-11-4t-5-11V78q0-6 5-11t11-5h484v219q0 13 9 22t22 9h219v610zM719 812H281q-13 0-22-9t-9-22 9-22 22-9h438q13 0 22 9t9 22-9 22-22 9zm0-125H281q-13 0-22-9t-9-22 9-22 22-9h438q13 0 22 9t9 22-9 22-22 9zm0-125H281q-13 0-22-9t-9-22 9-22 22-9h438q13 0 22 9t9 22-9 22-22 9z" })));
}

function SvgGlobe(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M500,0C223.9,0,0,223.9,0,500s223.9,500,500,500s500-223.9,500-500S776.1,0,500,0z M833.3,291.7H684.1 C670.4,227.7,650,171.2,625,125C712.9,158,786.1,217,833.3,291.7L833.3,291.7z M875,497c0,36-4.5,70.8-12.2,104.2H708.3 c2.8-33.6,4.2-68.5,4.2-104.2c0-35.7-1.4-70.5-4.2-104.2h154.4C870.5,426.2,875,461,875,497L875,497z M392.9,708.3h208.3 C571.6,844,518.9,916.7,497,916.7C475.1,916.7,422.5,844,392.9,708.3z M380.1,601.2c-3.2-32.4-5.1-67-5.1-104.2 c0-37.2,1.9-71.7,5.1-104.2h239.8c3.2,32.4,5.1,67,5.1,104.2c0,37.2-1.9,71.7-5.1,104.2H380.1z M137.2,392.9h154.4 c-2.8,33.6-4.2,68.5-4.2,104.2c0,35.7,1.4,70.5,4.2,104.2H137.2C129.5,567.8,125,533.1,125,497C125,461,129.5,426.2,137.2,392.9z  M601.2,291.7l-208.3,0C422.5,156,475.1,83.3,497,83.3C518.9,83.3,571.6,156,601.2,291.7z M375,125c-25,46.2-45.4,102.7-59.1,166.7 H166.7C213.9,217.1,287.1,158,375,125L375,125z M315.9,708.3c13.7,63.9,34,120.5,59.1,166.7c-87.9-33-161.1-92-208.3-166.7H315.9z  M625,875c25-46.2,45.4-102.7,59.1-166.7h149.3C786.1,782.9,712.9,842,625,875L625,875z" })));
}

function SvgHamburger(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M903 419H65v162h870V419h-32zm0 258H65v162h870V677h-32zm0-516H65v162h870V161h-32z" })));
}

function SvgHeart(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M968 326q0-110-48-179-36-53-98-78-44-17-87-17-59 0-114 31-41 24-78 65-16 18-43 55l-31-38q-11-14-22-25-14-14-27-26-16-13-32-24-18-12-37-21t-41-13-45-4q-43 0-87 17-62 25-98 78-48 69-48 179 0 131 79 264 61 105 166 204 74 69 152 122l6 7q25 14 30 19l7 4q9 4 15 6h19q20-7 15-5 8-3 9-5t11-8 17-11l7-7q80-54 156-124 106-100 168-204 79-133 79-262z" })));
}

function SvgHeartSupport(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 16 16" }, props),
    h("path", { d: "M1.26234059,1.47444321 C-0.421989103,3.44260781 -0.419570856,6.56432454 1.26234059,8.53342384 L7.39772074,15.7174761 C7.55302345,15.8974257 7.76996687,16 7.99652384,16 C8.22388007,16 8.44082554,15.897419 8.59532694,15.7174761 C10.641492,13.3259819 12.6907721,10.931817 14.7370601,8.5403228 C16.4213898,6.57215821 16.4205701,3.44955129 14.7370601,1.48134218 C13.0535502,-0.486866922 10.2157575,-0.486822413 8.53138685,1.48134218 L7.99982331,2.10029098 L7.46825978,1.47437645 C6.62609494,0.490294152 5.49814655,0 4.36859966,0 C3.23880685,0 2.10442346,0.490360916 1.26234059,1.47444321 Z M6.35964437,3.16815532 L7.43710533,4.37841446 C7.58389377,4.54236759 7.78894356,4.63582365 8.00307984,4.63582365 C8.21797156,4.63582365 8.42302328,4.5423615 8.56905435,4.37841446 L9.64045249,3.18084837 C10.6672219,2.02367291 12.2031147,2.02367291 13.2299229,3.18084837 C14.2566924,4.33802382 14.2566924,6.24360205 13.2299229,7.40077751 C11.4835935,9.3682191 9.74020842,11.3325787 7.99399527,13.3 L2.77007709,7.39449182 C1.74330764,6.23492374 1.74330764,4.32524968 2.77007709,3.16807422 C3.28382985,2.58908096 3.92699415,2.3 4.56785341,2.3 C5.20879014,2.3 5.84589161,2.58918234 6.35964437,3.16815532 Z" })));
}

function SvgHelsinginyliopisto(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M454 874h94v94h-94v-94zm0-840h94v93h-94V34zm378 496q-30-19-38-74-26 3-43-3-27-10-39-42-5-11-11-45t-14-54q-12-31-34-55-32-34-74-49-37-14-78-11 29 19 36 46 6 23-7 41t-35 18-42-12q-9-5-35-26-23-18-41-27-26-11-56-11t-53 14q24 3 41 17 13 11 23 32 3 5 17 39 18 43 69 57-13 8-39 8-29 0-54-14-20-12-44-37t-44-36q-27-16-60-16-16 0-30 4-12 3-18 7 24 4 43 15 23 14 23 33 0 12-7 18t-19 5-23-12q-19-21-43-32-26-13-54-13-14 0-27 4T3 329q34 4 57 27t45 74q14 33 33 50 24 22 63 23 6 0 29-3 20-2 31 0 16 2 26 11t13 22q2 6 4 23 3 15 6 23 9 20 29 30t56 12q-19 16-54 17-32 2-65-9t-49-29q2 46 25 79 25 37 69 50 48 15 112-2 18-5 30-1t19 22q15 41 69 34 48-6 79 5t58 44q5-48-23-87-19-26-53-48-20-12-28-28-5-11-6-26 29 33 82 40 82 12 109 50 1-22-6-41-6-15-19-29-10-10-26-23-19-15-23-18-11-10-13-19 19 13 36 18t36 3q8 0 28-5t30-5q16 0 29 7 14 8 26 28 29-20 68-16 35 3 64 22-12-28-34-48-18-17-44-31-12-7-47-23-28-13-42-22zm-284 17h-94v-93h94v93z" })));
}

function SvgHome(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 56 65" }, props, { stroke: "black", "stroke-width": "1" }),
    h("path", { d: "M29.3106262,0.81816473 L55.3106262,23.6051927 C55.7484916,23.9889485 56,24.5457471 56,25.1313539 L56,62.3034274 C56,63.4192907 55.1045695,64.3238767 54,64.3238767 L2,64.3238767 C0.8954305,64.3238767 0,63.4192907 0,62.3034274 L0,25.1313539 C0,24.5457471 0.251508395,23.9889485 0.6893738,23.6051927 L26.6893738,0.81816473 C27.4413507,0.159114007 28.5586493,0.159114007 29.3106262,0.81816473 Z M28,10.3657587 L8,27.8911356 L8,56.2420796 L48,56.2420796 L48,27.8951765 L28,10.3657587 Z" })));
}

function SvgHyLogo(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M452 0h96v97h-96V0zm0 903h96v97h-96v-97zm380-358q-32-20-38-74-25 3-44-3-28-10-40-42-6-13-12-47t-13-52q-12-32-33-56-33-35-74-50-37-14-78-11 30 19 37 46 6 23-7 41t-36 19-42-12q-8-5-35-27-22-18-40-26-26-12-58-12-25 0-51 13 24 3 40 16 13 12 24 32 3 7 16 39 10 23 27 36t44 22q-13 6-38 6-29 0-55-15-20-11-45-36t-43-36q-28-16-61-16-16 0-29 4t-19 9q23 3 42 14 23 15 23 34 0 11-7 17t-19 5-23-12q-18-20-43-33t-54-12q-13 0-26 3T0 339q34 5 58 28t45 72q15 35 33 51 24 23 64 23 5 0 29-3 20-2 31 0 17 2 27 13 9 8 12 21 2 6 5 23 2 15 6 23 10 21 28 31 21 11 56 11-19 19-54 21-32 2-65-9t-49-28q2 46 25 80 25 37 68 50 49 14 113-4 18-5 30-1t19 24q16 41 71 35 48-5 79 6t59 42q8-81-77-135-15-9-23-19-6-8-9-19l-4-17q16 18 38 28 17 8 43 14 82 10 110 52 2-23-6-42-6-15-19-29-10-10-26-22-19-15-23-18-11-10-13-18 19 12 36 17t38 5q7-1 27-6t31-4q16 0 28 7 15 9 27 29 29-18 68-15 35 3 64 21-12-30-34-52-17-18-44-33-12-7-47-23-28-14-43-24zm-284 36h-96v-97h96v97z" })));
}

function SvgImageGallery(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M728 732q30 0 51-21t21-51V205q0-30-21-51t-51-21H72q-30 0-51 21T0 205v455q0 30 21 51t51 21h656zM72 694q-14 0-24-10t-10-24V205q0-14 10-25t24-10h656q15 0 25 10t10 25v455q0 14-10 24t-25 10H72zm440-224l-112-38-97 87-154 115h570V500l-12-9q-14-14-29-33-20-26-38-60-22-41-38-92-10-31-34 12-16 30-38 94zM278 306q0 35-24 59t-59 25-59-25-24-59 24-59 59-24 59 24 24 59zm517-81q14 0 24 10t10 25v455q0 14-10 24t-24 10H138q-14 0-24-10t-10-24H67q0 30 21 51t50 21h657q30 0 51-21t21-51V260q0-30-21-51t-51-21v37zm133 113q14 0 25 10t10 25v455q0 14-10 24t-25 10H272q-15 0-25-10t-10-24h-37q0 30 21 51t51 21h656q30 0 51-21t21-51V373q0-30-21-51t-51-21v37zm-66-58q14 0 24 10t10 25v455q0 14-10 24t-24 10H205q-14 0-24-10t-10-24h-38q0 30 21 51t51 21h657q29 0 50-21t21-51V315q0-30-21-51t-50-21v37z" })));
}

function SvgInfo(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M500 65q-119 0-220 59-99 57-156 156-59 101-59 220t59 220q57 99 156 156 101 59 220 59t220-59q99-57 156-156 59-101 59-220t-59-220q-57-99-156-156-101-59-220-59zm48 612h-96V419h96v258zm0-290h-96v-97h96v97z" })));
}

function SvgLinkArrowDown(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M516 965l419-475 20-22-23-23-74-64-23-23-261 294V6H413v649L174 384l-19-23-26 20-74 67-26 20 19 26 442 496z" })));
}

function SvgListStyleGrid(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 64 64" }, props),
    h("rect", { id: "Rectangle", x: "-1.77365678e-11", y: "-2.74269496e-13", width: "15.2380952", height: "15.2380952" }),
    h("rect", { id: "Rectangle-Copy-8", x: "-1.77365678e-11", y: "24.3809524", width: "15.2380952", height: "15.2380952" }),
    h("rect", { id: "Rectangle-Copy-11", x: "-1.77365678e-11", y: "48.7619048", width: "15.2380952", height: "15.2380952" }),
    h("rect", { id: "Rectangle-Copy-6", x: "24.3809524", y: "-2.74269496e-13", width: "15.2380952", height: "15.2380952" }),
    h("rect", { id: "Rectangle-Copy-9", x: "24.3809524", y: "24.3809524", width: "15.2380952", height: "15.2380952" }),
    h("rect", { id: "Rectangle-Copy-12", x: "24.3809524", y: "48.7619048", width: "15.2380952", height: "15.2380952" }),
    h("rect", { id: "Rectangle-Copy-7", x: "48.7619048", y: "-2.74269496e-13", width: "15.2380952", height: "15.2380952" }),
    h("rect", { id: "Rectangle-Copy-10", x: "48.7619048", y: "24.3809524", width: "15.2380952", height: "15.2380952" }),
    h("rect", { id: "Rectangle-Copy-13", x: "48.7619048", y: "48.7619048", width: "15.2380952", height: "15.2380952" })));
}

function SvgListStyleList(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 64 64" }, props),
    h("rect", { id: "Rectangle", x: "0", y: "0", width: "64", height: "9.14285714" }),
    h("rect", { id: "Rectangle-Copy-3", x: "0", y: "18.2857143", width: "64", height: "9.14285714" }),
    h("rect", { id: "Rectangle-Copy-4", x: "0", y: "36.5714286", width: "64", height: "9.14285714" }),
    h("rect", { id: "Rectangle-Copy-5", x: "0", y: "54.8571429", width: "64", height: "9.14285714" })));
}

function SvgMail(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M0 129v742h1000V129H0zm500 477l61-51 287 219H152l287-219zm113-93l290-245v464zm193-287h46L500 523 148 226h658zm-709 0zm290 287L97 735V268zM97 774z" })));
}

function SvgMinus(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M903 419H65v162h870V419h-32z" })));
}

function SvgNotification(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M771 677v-64h-36V384q0-59-31-110t-85-82-116-31h45V97h-96v64h38q-61 0-114 31-51 30-81 81t-30 111v229h-36v64h-68v97h678v-97h-68zM419 806h162v65H419v-65z" })));
}

function SvgPhone(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M845 139Q771 67 676 31T477 0Q352 6 243 73 138 138 73 243 6 352 0 477q-5 105 31 199t108 169 165 115 196 40h16v-94h-16q-84 0-159-32t-134-93-87-138-26-162q4-102 58-190 52-86 137-139 89-54 192-58 84-5 162 24t138 88 93 134 32 160q0 55-30 104t-79 73q0-3 2-10t1-10 2-12 1-13q7-23-33-48-30-19-67-29-39-11-59-3-15 7-18 22 0 3-7 23-9 38-13 42-9 0-16-7-13-11-34-32l-33-35-65-65q-16-14-36-35-34-35-32-33-4-4-5-10l-1-6q4-2 20-6l34-10q7-1 10-3 14-4 20-18 8-21 0-60-10-35-29-65-25-39-49-35-9 4-25 4-33 6-49 12l-16 10q-30 20-48 48t-23 65q-7 45 8 91t47 86l81 91 29 32 12 13q31 31 50 48 32 29 67 52-1 0 18 7 21 7 41 11 30 6 57 5h67q80 0 148-41 67-39 106-105 40-69 40-148 0-104-40-198T845 139zM481 542z" })));
}

function SvgPlay(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M958 156q-218-31-458-31T42 156Q0 320 0 500t42 344q218 31 458 31t458-31q42-164 42-344t-42-344zM375 687V312l313 188z" })));
}

function SvgPlus(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M903 419H581V65H419v354H65v162h354v354h162V581h354V419h-32z" })));
}

function SvgRemove(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M616 500l326-329 23-23L852 35 500 384 148 35 35 148l349 352L35 852l113 113 352-349 352 349 113-113-23-23z" })));
}

function SvgRetweet(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M506 877q13 0 21-8t8-21v-83q0-13-8-22t-21-8H290q-12 0-20-8t-9-21V294q0-13 9-21t20-8h81q12 0 16-7t-3-16L216 16q-7-10-17-10t-18 10L10 239q-8 10-5 16t14 6h81q12 0 21 8t8 21v558q0 12 9 21t20 8h348zm-12-758q-13 0-21 8t-8 21v84q0 12 8 20t21 9h216q12 0 21 8t8 21v416q0 13-8 21t-21 8h-81q-12 0-16 7t3 16l165 223q7 9 18 9t17-9l171-223q7-9 4-16t-14-7h-80q-12 0-20-8t-9-21V148q0-12-8-21t-21-8H494z" })));
}

function SvgSearch(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M964.9,864.4l19.5,23.4L871.6,1000L636.9,766.6c-31.4,17.7-64.9,31.3-100.5,40.8s-71.4,14.3-107.6,14.3 c-74.5,0-143.9-18.7-208.1-56.1c-62.2-36-111.7-84.9-148.6-146.8c-37.6-63.9-56.4-133-56.4-207.4S34.4,267.8,72,203.9 C108.9,142,158.5,92.8,220.7,56.1C284.9,18.7,354.4,0,429.3,0s144.4,18.7,208.6,56.1c62.2,36.7,111.4,86,147.6,147.8 c37.6,63.9,56.4,132.9,56.4,206.9c0,44.2-7,87.2-21,129c-14,41.8-34.3,81-61,117.7L964.9,864.4z M421.9,656.2 c44.8,0,86.4-11.2,125-33.6s69-52.9,91.4-91.4s33.6-80.2,33.6-125s-11.2-86.3-33.6-124.5s-52.9-68.7-91.4-91.4s-80.2-34.1-125-34.1 s-86.3,11.4-124.5,34.1s-68.7,53.2-91.4,91.4s-34.1,79.7-34.1,124.5s11.4,86.4,34.1,125s53.2,69,91.4,91.4S377.1,656.2,421.9,656.2 z" })));
}

function SvgSlimHamburgerMenu(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 13 64" }, props),
    h("path", { d: "M12.8,38.4 L12.8,25.6 L0,25.6 L0,38.4 L12.32608,38.4 L12.8,38.4 Z M0,64 L12.8,64 L12.8,51.2 L0,51.2 L0,61.44 L0,64 Z M12.8,12.8 L12.8,0 L0,0 L0,12.8 L12.32608,12.8 L12.8,12.8 Z" })));
}

function SomeFacebook(props) {
  return (h("svg", Object.assign({}, props, { id: "Layer_1", "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 56 56" }),
    h("path", { class: "cls-1", d: "M56,28A28,28,0,1,0,23.62,55.66V36.09h-7.1V28h7.1V21.83c0-7,4.19-10.89,10.58-10.89a43.71,43.71,0,0,1,6.27.54v6.9H36.94c-3.48,0-4.56,2.15-4.56,4.37V28h7.76L38.9,36.09H32.38V55.66A28,28,0,0,0,56,28Z" })));
}

function SomeInstagram(props) {
  return (h("svg", Object.assign({}, props, { id: "Layer_1", "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 56 56" }),
    h("path", { class: "cls-1", d: "M28,0c-7.6,0-8.56,0-11.54.17a20.68,20.68,0,0,0-6.8,1.3,13.74,13.74,0,0,0-5,3.23,13.72,13.72,0,0,0-3.22,5,20.2,20.2,0,0,0-1.31,6.8C0,19.44,0,20.4,0,28s0,8.56.17,11.54a20.68,20.68,0,0,0,1.3,6.8,13.74,13.74,0,0,0,3.23,5,13.74,13.74,0,0,0,5,3.23,20.48,20.48,0,0,0,6.8,1.3C19.44,56,20.4,56,28,56s8.56,0,11.54-.17a20.42,20.42,0,0,0,6.8-1.3,14.3,14.3,0,0,0,8.19-8.19,20.48,20.48,0,0,0,1.3-6.8C56,36.56,56,35.6,56,28s0-8.56-.17-11.54a20.68,20.68,0,0,0-1.3-6.8,13.74,13.74,0,0,0-3.23-5,13.72,13.72,0,0,0-5-3.22A20.2,20.2,0,0,0,39.54.17C36.56,0,35.6,0,28,0Zm0,5c7.48,0,8.36,0,11.31.17a15.46,15.46,0,0,1,5.2,1,8.77,8.77,0,0,1,3.23,2.1,8.62,8.62,0,0,1,2.09,3.22,15.45,15.45,0,0,1,1,5.2c.13,2.95.16,3.84.16,11.31s0,8.36-.16,11.32a15.45,15.45,0,0,1-1,5.2,9.26,9.26,0,0,1-5.31,5.31,15.71,15.71,0,0,1-5.2,1c-3,.13-3.84.16-11.32.16s-8.36,0-11.31-.16a15.71,15.71,0,0,1-5.2-1,8.62,8.62,0,0,1-3.22-2.09,8.77,8.77,0,0,1-2.1-3.23,15.46,15.46,0,0,1-1-5.2C5.07,36.36,5,35.48,5,28s0-8.36.17-11.32a15.38,15.38,0,0,1,1-5.19,8.77,8.77,0,0,1,2.1-3.23,8.62,8.62,0,0,1,3.22-2.09,15.45,15.45,0,0,1,5.2-1C19.64,5.07,20.53,5,28,5" }),
    h("path", { class: "cls-1", d: "M28,37.33A9.34,9.34,0,1,1,37.34,28h0A9.34,9.34,0,0,1,28,37.33Zm0-23.71A14.38,14.38,0,1,0,42.38,28h0A14.38,14.38,0,0,0,28,13.62Z" }),
    h("path", { class: "cls-1", d: "M46.31,13.05A3.36,3.36,0,1,1,43,9.69,3.36,3.36,0,0,1,46.31,13.05Z" })));
}

function SomeTwitter(props) {
  return (h("svg", Object.assign({}, props, { id: "Layer_1", "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 56 56" }),
    h("path", { class: "cls-1", d: "M56,28A28,28,0,1,1,28,0,28,28,0,0,1,56,28ZM22.88,42.77c12.41,0,19.2-10.29,19.2-19.21,0-.3,0-.59,0-.87a13.68,13.68,0,0,0,3.37-3.5,13.43,13.43,0,0,1-3.87,1.06,6.71,6.71,0,0,0,3-3.73,13.42,13.42,0,0,1-4.28,1.63,6.76,6.76,0,0,0-11.68,4.62,6,6,0,0,0,.19,1.54,19.13,19.13,0,0,1-13.92-7,6.79,6.79,0,0,0-.91,3.39,6.72,6.72,0,0,0,3,5.61,6.68,6.68,0,0,1-3.05-.84v.08a6.76,6.76,0,0,0,5.42,6.63,7,7,0,0,1-1.78.23,6.77,6.77,0,0,1-1.28-.12,6.75,6.75,0,0,0,6.3,4.69,13.6,13.6,0,0,1-8.38,2.88,12.21,12.21,0,0,1-1.61-.1,18.74,18.74,0,0,0,10.32,3.06" })));
}

function SvgTwitterLike(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 16 16" }, props),
    h("path", { d: "M1.26234059,1.47444321 C-0.421989103,3.44260781 -0.419570856,6.56432454 1.26234059,8.53342384 L7.39772074,15.7174761 C7.55302345,15.8974257 7.76996687,16 7.99652384,16 C8.22388007,16 8.44082554,15.897419 8.59532694,15.7174761 C10.641492,13.3259819 12.6907721,10.931817 14.7370601,8.5403228 C16.4213898,6.57215821 16.4205701,3.44955129 14.7370601,1.48134218 C13.0535502,-0.486866922 10.2157575,-0.486822413 8.53138685,1.48134218 L7.99982331,2.10029098 L7.46825978,1.47437645 C6.62609494,0.490294152 5.49814655,0 4.36859966,0 C3.23880685,0 2.10442346,0.490360916 1.26234059,1.47444321 Z M6.35964437,3.16815532 L7.43710533,4.37841446 C7.58389377,4.54236759 7.78894356,4.63582365 8.00307984,4.63582365 C8.21797156,4.63582365 8.42302328,4.5423615 8.56905435,4.37841446 L9.64045249,3.18084837 C10.6672219,2.02367291 12.2031147,2.02367291 13.2299229,3.18084837 C14.2566924,4.33802382 14.2566924,6.24360205 13.2299229,7.40077751 C11.4835935,9.3682191 9.74020842,11.3325787 7.99399527,13.3 L2.77007709,7.39449182 C1.74330764,6.23492374 1.74330764,4.32524968 2.77007709,3.16807422 C3.28382985,2.58908096 3.92699415,2.3 4.56785341,2.3 C5.20879014,2.3 5.84589161,2.58918234 6.35964437,3.16815532 Z" })));
}

function SomeYoutube(props) {
  return (h("svg", Object.assign({}, props, { id: "Layer_1", "data-name": "Layer 1", viewBox: "0 0 56 56" }),
    h("path", { class: "cls-3", d: "M52.59,15.56A6.44,6.44,0,0,0,48.05,11C44,9.92,28,9.92,28,9.92S12,9.92,7.94,11a6.44,6.44,0,0,0-4.53,4.56C2.33,19.6,2.33,28,2.33,28s0,8.41,1.08,12.44A6.47,6.47,0,0,0,7.94,45C12,46.08,28,46.08,28,46.08s16,0,20.06-1.07a6.47,6.47,0,0,0,4.53-4.57c1.08-4,1.08-12.44,1.08-12.44s0-8.4-1.08-12.44M22.75,35.63V20.37L36.17,28Z" })));
}

function SomeLinkedin(props) {
  return (h("svg", Object.assign({}, props, { id: "Layer_1", "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 56 56" }),
    h("path", { class: "cls-1", d: "M50.46,0H5.54A5.54,5.54,0,0,0,0,5.54V50.47A5.54,5.54,0,0,0,5.54,56H50.46A5.54,5.54,0,0,0,56,50.47V5.54A5.54,5.54,0,0,0,50.46,0ZM17.24,48.06H8.77V21h8.47Zm-.73-32.13A4.68,4.68,0,0,1,13,17.25h0a4.47,4.47,0,0,1-4.7-4.65A4.48,4.48,0,0,1,9.59,9.27a4.7,4.7,0,0,1,3.46-1.33,4.49,4.49,0,0,1,4.7,4.66A4.42,4.42,0,0,1,16.51,15.93ZM47.74,48.06H39.31V33.56a8.15,8.15,0,0,0-1.06-4.51A3.66,3.66,0,0,0,35,27.44a3.88,3.88,0,0,0-2.67.93,6.3,6.3,0,0,0-1.66,2.35,7,7,0,0,0-.28,2.2V48.06H21.9q0-10.92,0-17.73v-8l0-1.32h8.47v3.85a11.89,11.89,0,0,1,1-1.5,10.54,10.54,0,0,1,1.42-1.42,6.59,6.59,0,0,1,2.26-1.17,8.43,8.43,0,0,1,3-.39,8.85,8.85,0,0,1,7,3.08q2.67,3.09,2.67,9.11Z" })));
}

function SvgUnitsAndFaculties(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M903 774v-32H97v32H65v97h870v-97h-32zm-742-97h97V419h97v258h97V419h96v258h97V419h97v258h97V419h64v-96h-32v-29L500 129 129 294v29H97v96h64v258z" })));
}

function SvgUrl(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M916 416L668 665q-34 33-79 44t-90 0-80-44l-84-84 84-84 84 84q17 17 42 17t42-17l248-249q17-17 17-42t-17-42l-83-83q-17-17-42-17t-42 17l-91 90q-60-37-135-32L584 81q33-34 79-46t91 0 78 46l84 84q33 34 45 80t0 92-45 79zM423 745l-91 90q-17 17-42 17t-42-17l-83-83q-17-17-17-42t17-42l248-249q17-17 42-17t42 17l84 84 84-84-84-84q-34-33-79-45t-91 0-79 45L84 584q-33 33-45 78t0 91 45 79l84 84q33 33 79 45t91 0 78-45l142-142q-73 5-135-29z" })));
}

function SvgVideo(props) {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M419 355l226 145-226 145V355zm81-194q92 0 171 47 77 44 121 121 47 79 47 171t-47 171q-44 77-121 121-79 47-171 47t-171-47q-77-44-121-121-47-79-47-171t47-171q44-77 121-121 79-47 171-47zm0-96q-119 0-220 59-99 57-156 156-59 101-59 220t59 220q57 99 156 156 101 59 220 59t220-59q99-57 156-156 59-101 59-220t-59-220q-57-99-156-156-101-59-220-59z" })));
}

const IconArrowLeft = (props) => {
  return (h("svg", { xmlns: "http://www.w3.org/2000/svg", width: props.width || 30, height: props.height || 29, viewBox: "0 0 30 29", fill: props.fill || 'black' },
    h("polygon", { points: "29.207 13.783 14.756 .717 14.055 0 11.402 3.118 10.732 3.835 19.665 11.974 0 11.974 0 17.026 19.756 17.026 11.494 24.447 10.823 25.071 11.402 25.882 13.476 28.189 14.055 29 30 14.594", transform: "rotate(-180 15 14.5)" })));
};
const IconArrowRight = (props) => {
  return (h("svg", { xmlns: "http://www.w3.org/2000/svg", width: props.width || 30, height: props.height || 29, viewBox: "0 0 30 29", fill: props.fill || 'black' },
    h("polygon", { points: "29.207 13.783 14.756 .717 14.055 0 11.402 3.118 10.732 3.835 19.665 11.974 0 11.974 0 17.026 19.756 17.026 11.494 24.447 10.823 25.071 11.402 25.882 13.476 28.189 14.055 29 30 14.594" })));
};
const IconArrowToRight = (props) => {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 1000" }, props),
    h("path", { d: "M993.6,482.3L518.2,6.4c-4.6-4.6-11-6.9-17.4-6.3c-6.4,0.6-12.3,4-15.9,9.4l-73.5,107.7\n        c-5.9,8.6-4.8,20.2,2.6,27.6l265,265.3H21.7c-12,0-21.7,9.7-21.7,21.7v128.2c0,12,9.7,21.7,21.7,21.7H687L414,855.2\n        c-7.4,7.4-8.5,19-2.6,27.6l73.5,107.7c3.6,5.3,9.5,8.8,15.9,9.4c0.7,0.1,1.3,0.1,2,0.1c5.7,0,11.3-2.3,15.4-6.4l475.4-475.9\n        c4.8-4.8,6.9-11.4,6.2-17.7c0.1-0.8,0.1-1.5,0.1-2.3C1000,491.9,997.7,486.4,993.6,482.3z" })));
};
const IconQuote = (props) => {
  return (h("svg", Object.assign({ viewBox: "0 0 1000 660" }, props),
    h("path", { id: "Quote-icon", d: "M222.8,660C330.3,422.9,407.2,212.5,453.5,29L433.8,0H131.1C104,186.2,60.3,406.2,0,660H222.8z M769.3,660\n\t  C876.8,422.9,953.7,212.5,1000,29l0,0L981.7,0H678.9c-29.7,202-74.7,422-135,660l0,0H769.3z" })));
};

const iconCss = ":host{display:block}";

// TODO: add all icons
const iconNames = {
  'hy-icon-arrow-down': (p) => h(SvgArrowDown$1, Object.assign({}, p)),
  'hy-icon-arrow-left': (p) => h(IconArrowLeft, Object.assign({}, p)),
  'hy-icon-arrow-right': (p) => h(IconArrowRight, Object.assign({}, p)),
  'hy-icon-arrow-to-right': (p) => h(IconArrowToRight, Object.assign({}, p)),
  'hy-icon-alert': (p) => h(SvgAlert, Object.assign({}, p)),
  'hy-icon-archive': (p) => h(SvgArchive, Object.assign({}, p)),
  'hy-icon-arrow-up': (p) => h(SvgArrowUp, Object.assign({}, p)),
  'hy-icon-bachelor': (p) => h(SvgBachelor, Object.assign({}, p)),
  'hy-icon-bullet-list': (p) => h(SvgBulletList, Object.assign({}, p)),
  'hy-icon-camera': (p) => h(SvgCamera, Object.assign({}, p)),
  'hy-icon-caret-down': (p) => h(SvgCaretDown, Object.assign({}, p)),
  'hy-icon-caret-left': (p) => h(SvgCaretLeft, Object.assign({}, p)),
  'hy-icon-caret-right': (p) => h(SvgCaretRight, Object.assign({}, p)),
  'hy-icon-date': (p) => h(SvgDate, Object.assign({}, p)),
  'hy-icon-dot-arrow-right': (p) => h(SvgArrowDown, Object.assign({}, p)),
  'hy-icon-done': (p) => h(SvgDone, Object.assign({}, p)),
  'hy-icon-euro': (p) => h(SvgEuro, Object.assign({}, p)),
  'hy-icon-file-text': (p) => h(SvgFileText, Object.assign({}, p)),
  'hy-icon-heart': (p) => h(SvgHeart, Object.assign({}, p)),
  'hy-icon-heart-support': (p) => h(SvgHeartSupport, Object.assign({}, p)),
  'hy-icon-link': (p) => h(SvgUrl, Object.assign({}, p)),
  'hy-icon-globe': (p) => h(SvgGlobe, Object.assign({}, p)),
  'hy-icon-hamburger': (p) => h(SvgHamburger, Object.assign({}, p)),
  'hy-icon-home': (p) => h(SvgHome, Object.assign({}, p)),
  'hy-icon-helsingin-yliopisto': (p) => h(SvgHelsinginyliopisto, Object.assign({}, p)),
  'hy-icon-email': (p) => h(SvgMail, Object.assign({}, p)),
  'hy-icon-embed': (p) => h(SvgEmbed, Object.assign({}, p)),
  'hy-icon-events': (p) => h(SvgEvents, Object.assign({}, p)),
  'hy-icon-edit-event': (p) => h(SvgEditEvent, Object.assign({}, p)),
  'hy-icon-info': (p) => h(SvgInfo, Object.assign({}, p)),
  'hy-icon-notification': (p) => h(SvgNotification, Object.assign({}, p)),
  'hy-icon-phone': (p) => h(SvgPhone, Object.assign({}, p)),
  'hy-icon-hy-logo': (p) => h(SvgHyLogo, Object.assign({}, p)),
  'hy-icon-image-gallery': (p) => h(SvgImageGallery, Object.assign({}, p)),
  'hy-icon-link-arrow-down': (p) => h(SvgLinkArrowDown, Object.assign({}, p)),
  'hy-icon-list-style-grid': (p) => h(SvgListStyleGrid, Object.assign({}, p)),
  'hy-icon-list-style-list': (p) => h(SvgListStyleList, Object.assign({}, p)),
  'hy-icon-minus': (p) => h(SvgMinus, Object.assign({}, p)),
  'hy-icon-play': (p) => h(SvgPlay, Object.assign({}, p)),
  'hy-icon-plus': (p) => h(SvgPlus, Object.assign({}, p)),
  'hy-icon-quote': (p) => h(IconQuote, Object.assign({}, p)),
  'hy-icon-remove': (p) => h(SvgRemove, Object.assign({}, p)),
  'hy-icon-search': (p) => h(SvgSearch, Object.assign({}, p)),
  'hy-icon-slim-hamburger-menu': (p) => h(SvgSlimHamburgerMenu, Object.assign({}, p)),
  'hy-icon-some-facebook': (p) => h(SomeFacebook, Object.assign({}, p)),
  'hy-icon-some-instagram': (p) => h(SomeInstagram, Object.assign({}, p)),
  'hy-icon-some-linkedin': (p) => h(SomeLinkedin, Object.assign({}, p)),
  'hy-icon-some-twitter': (p) => h(SomeTwitter, Object.assign({}, p)),
  'hy-icon-some-twitter-retweet': (p) => h(SvgRetweet, Object.assign({}, p)),
  'hy-icon-some-twitter-like': (p) => h(SvgTwitterLike, Object.assign({}, p)),
  'hy-icon-some-youtube': (p) => h(SomeYoutube, Object.assign({}, p)),
  'hy-icon-units-and-faculties': (p) => h(SvgUnitsAndFaculties, Object.assign({}, p)),
  'hy-icon-video': (p) => h(SvgVideo, Object.assign({}, p)),
};
let Icon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fill = 'black';
    this.size = 20;
  }
  render() {
    return (h(Host, { "aria-hidden": "true", style: { display: 'flex' } }, iconNames[this.icon]({
      height: this.size,
      width: this.size,
      fill: this.fill,
    })));
  }
};
Icon.style = iconCss;

const imageCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}.hy-image{width:100%}.hy-image__image-container.hy-image--no-aspect img{height:auto;width:auto;max-width:100%}.hy-image__image-container.hy-image--with-aspect{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:stretch;-ms-flex-pack:stretch;justify-content:stretch;margin-bottom:0;min-height:10rem;position:relative}.hy-image__image-container.hy-image--with-aspect:before{content:\"\";display:block;padding-top:var(--aspectRatio)}.hy-image__image-container.hy-image--with-aspect img{bottom:0;height:100%;left:0;-o-object-fit:cover;object-fit:cover;position:absolute;right:0;top:0;width:100%}.hy-two-columns .hy-image__image-container.hy-image--with-aspect img{-o-object-fit:contain;object-fit:contain;-o-object-position:top;object-position:top}.hy-image__caption{color:var(--grayscale-dark);font-family:var(--main-font-family);font-size:12px;letter-spacing:-0.07px;line-height:16px;padding:19px 0}";

let Image = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.imageUrl = null;
    this.imageAlt = null;
    this.disableLazy = false;
    this.caption = null;
    this.aspectRatioWidth = 16;
    this.aspectRatioHeight = 9;
  }
  srcSetWatcher(data) {
    this._sourceSet = typeof data === 'string' ? JSON.parse(data) : data;
  }
  componentWillLoad() {
    this.srcSetWatcher(this.sourceSet);
  }
  render() {
    let aspectRatio = null;
    if (this.aspectRatioWidth !== 0 && this.aspectRatioWidth !== 0) {
      const aspect = (this.aspectRatioHeight / this.aspectRatioWidth) * 100;
      aspectRatio = {
        '--aspectRatio': `${aspect}%`,
      };
    }
    const classAttributes = ['hy-image', this.caption ? 'hy-image--with-caption' : null].join(' ');
    const containerClasses = [
      'hy-image__image-container',
      aspectRatio !== null ? 'hy-image--with-aspect' : 'hy-image--no-aspect',
    ].join(' ');
    return [
      h("div", { class: classAttributes }, h("div", { class: containerClasses, style: aspectRatio !== null ? aspectRatio : '' }, this.imageUrl &&
        (this._sourceSet ? (h("picture", null, this._sourceSet.map(({ src, media, type, sizes }) => (h("source", { srcSet: src, media: media, type: type, sizes: sizes || '' }))), h("img", { loading: this.disableLazy ? 'eager' : 'lazy', alt: this.imageAlt, class: "hy-image__image", src: this.imageUrl }))) : (h("img", { loading: this.disableLazy ? 'eager' : 'lazy', alt: this.imageAlt, class: "hy-image__image", src: this.imageUrl })))), this.caption && h("div", { class: "hy-image__caption" }, this.caption)),
      h("hy-box", { mb: "1.75, 1.75, 2, 2.5" }),
    ];
  }
  static get watchers() { return {
    "sourceSet": ["srcSetWatcher"]
  }; }
};
Image.style = imageCss;

const ingressCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{display:block}p.hy-ingress{font-size:1rem;line-height:24px;color:var(--grayscale-black);font-family:var(--main-font-family);margin:0 0 2rem}@media (min-width: 30rem){p.hy-ingress{font-size:1.125rem;line-height:28px}}@media (min-width: 60rem){p.hy-ingress{margin:0 0 2.25rem}}@media (min-width: 1601px){p.hy-ingress{font-size:1.125rem;line-height:32px;margin:0 0 3rem}}@media (min-width: 75.0625rem){p.hy-ingress__large{font-size:1.125rem;line-height:32px;margin:0 0 3rem}}";

let Ingress = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.headerstyle = 'common';
  }
  componentDidLoad() {
    let hyMainDiv = this.el.closest('.hy-main');
    if (hyMainDiv) {
      if (!hyMainDiv.classList.contains('with-sidebar')) {
        this.headerstyle = 'large';
      }
    }
  }
  render() {
    const classAttributes = ['hy-ingress', `hy-ingress__${this.headerstyle}`].join(' ');
    return (h(Host, null, h("p", { class: classAttributes }, h("slot", null))));
  }
  get el() { return getElement(this); }
};
Ingress.style = ingressCss;

const hyIntroductionCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{display:block}.hy-introduction__content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}@media (min-width: 60rem){.hy-introduction__content.hy-introduction__content--without-image.hy-introduction__content--limit-width{width:calc(50% - 16px)}}.hy-introduction--reversed .hy-introduction__outer-content{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}@media (min-width: 60rem){.hy-introduction--reversed .hy-introduction__outer-content{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}}.hy-introduction--with-bg{width:auto}@media (min-width: 60rem){.hy-introduction--with-bg{padding:0}}.hy-introduction--with-bg__white{background:var(--grayscale-white)}.hy-introduction--with-bg__white .hy-introduction__content--with-image{background:var(--grayscale-white)}.hy-introduction--with-bg__white .hy-introduction__title h2,.hy-introduction--with-bg__white .hy-introduction__description{color:var(--grayscale-black)}.hy-introduction--with-bg__white .hy-introduction__link{background:var(--brand-main-light);color:var(--grayscale-white)}.hy-introduction--with-bg__white .hy-introduction__link__icon svg{fill:var(--grayscale-white)}.hy-introduction--with-bg__white .hy-introduction__link:hover{background:var(--brand-main-active)}.hy-introduction__outer-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}@media (min-width: 60rem){.hy-introduction__outer-content{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding-bottom:0}@supports (gap: 32px){.hy-introduction__outer-content{gap:32px}}}@media (min-width: 1601px){@supports (gap: 48px){.hy-introduction__outer-content{gap:48px}}}.hy-introduction__content--without-image{width:100%}@media (min-width: 60rem){.hy-introduction__content--without-image{width:91.46%}}@media (min-width: 75.0625rem){.hy-introduction__content--without-image{width:82.89%}}@media (min-width: 1601px){.hy-introduction__content--without-image{width:74.2%}}@media (min-width: 60rem){.hy-introduction__content--with-image{margin:0;padding:0;width:50%}}@media (min-width: 60rem){.hy-introduction__title .hy-heading__container{padding-top:0}}.hy-introduction__image{width:100%}@media (min-width: 60rem){.hy-introduction__image{width:50%}@supports not (gap: 32px){.hy-introduction__image{width:calc(50% - 32px)}}}.hy-introduction__image img,.hy-introduction__image .hy-image,.hy-introduction__image .hy-image .hy-image__image-container{height:100% !important}.hy-introduction__description{font-size:0.9375rem;line-height:22px;font-weight:400;color:var(--grayscale-black);font-family:var(--main-font-family);margin-bottom:24px;margin-top:0}@media (min-width: 30rem){.hy-introduction__description{font-size:1rem;line-height:24px}}@media (min-width: 60rem){.hy-introduction__description{margin-bottom:28px}}@media (min-width: 1601px){.hy-introduction__description{font-size:1.0625rem;line-height:26px}}@media (min-width: 75.0625rem){.hy-introduction__description__large{font-size:1.0625rem;line-height:26px;margin-bottom:28px}}.hy-introduction__link{font-size:1rem;line-height:20px;letter-spacing:-0.5px;background-color:var(--brand-main-light);-webkit-box-shadow:0 2px 8px 0 rgba(0, 0, 0, 0.1);box-shadow:0 2px 8px 0 rgba(0, 0, 0, 0.1);-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--grayscale-white);cursor:pointer;display:inline-block;font-family:var(--main-font-family);font-weight:700;height:100%;padding:12px 60px 12px 12px;position:relative;text-decoration:none}@media (min-width: 30rem){.hy-introduction__link{font-size:1rem;line-height:20px;letter-spacing:-0.6px;padding:15px 62px 15px 16px}}@media (min-width: 60rem){.hy-introduction__link{font-size:1.125rem;line-height:20px}}@media (min-width: 75.0625rem){.hy-introduction__link{font-size:1.25rem;line-height:20px;letter-spacing:-0.7px;padding:16px 70px 16px 18px}}.hy-introduction__link__icon{position:absolute;right:16px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.hy-introduction__link__icon svg{fill:var(--grayscale-white)}";

let HyIntroduction = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = null;
    this.reversed = false;
    this.limitContentWidth = false;
    this.textDescription = null;
    this.imageAlt = '';
    this.isExternal = false;
    this.headerstyle = 'common';
  }
  componentDidLoad() {
    let hyMainDiv = this.el.closest('.hy-main');
    if (hyMainDiv) {
      if (!hyMainDiv.classList.contains('with-sidebar')) {
        this.headerstyle = 'large';
      }
    }
  }
  render() {
    const classAttributes = [
      'hy-introduction',
      `hy-introduction__${this.headerstyle}`,
      this.headerstyle,
      this.reversed ? 'hy-introduction--reversed' : '',
      this.variant
        ? `hy-introduction--with-bg hy-introduction--with-bg__${this.variant}`
        : 'hy-introduction--without-bg',
    ].join(' ');
    const classTitle = ['hy-introduction__title', `hy-introduction__title__${this.headerstyle}`].join(' ');
    const classDescription = ['hy-introduction__description', `hy-introduction__description__${this.headerstyle}`].join(' ');
    const contentWrapperClasses = [
      'hy-introduction__content',
      this.reversed ? 'hy-introduction__content--reversed' : '',
      this.imageUrl ? 'hy-introduction__content--with-image' : 'hy-introduction__content--without-image',
      this.limitContentWidth ? 'hy-introduction__content--limit-width' : '',
    ].join(' ');
    const target = this.isExternal ? '_blank' : '_self';
    return (h(Host, null, h("hy-box", { pt: "1.25, 1.25, 1.5, 2.5" }), h("div", { class: classAttributes }, h("hy-main-content-wrapper", null, h("div", { class: "hy-introduction__outer-content" }, h("div", { class: contentWrapperClasses }, h("hy-heading", { class: classTitle, heading: HeadingVarians.h2, section: HeadingSectionVariants.introduction }, this.textTitle), h("p", { class: classDescription }, this.textDescription), this.url && (h("div", { class: "hy-introduction__link__container" }, h("a", { class: "hy-introduction__link", href: this.url, "aria-label": this.scLabel, target: target }, this.urlTitle, h("span", { class: "hy-introduction__link__icon" }, h("hy-icon", { icon: 'hy-icon-arrow-right', size: 24 })))))), this.imageUrl &&
      (this.sourceSet ? (h("div", { class: "hy-introduction__image" }, h("hy-image", { "source-set": this.sourceSet, "image-url": this.imageUrl, aspectRatioWidth: 16, aspectRatioHeight: 10, "image-alt": this.imageAlt }))) : (h("div", { class: "hy-introduction__image" }, h("hy-image", { "image-url": this.imageUrl, aspectRatioWidth: 16, aspectRatioHeight: 10, "image-alt": this.imageAlt }))))))), h("hy-box", { mb: "1.75, 1.75, 2, 2.5" })));
  }
  get el() { return getElement(this); }
};
HyIntroduction.style = hyIntroductionCss;

const hyKeyFigureCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{display:block}.hy-key-figure{display:block;margin-bottom:32px;text-align:center;width:100%}@media (min-width: 30rem){.hy-key-figure{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%}}@media (min-width: 60rem){.hy-key-figure{text-align:left}}.hy-key-figure__title{font-size:2.5rem;line-height:60px;font-weight:700;-webkit-box-decoration-break:clone;box-decoration-break:clone;color:var(--brand-main-light);display:inline;font-family:var(--main-font-family);letter-spacing:-2px;position:relative;z-index:1}@media (min-width: 30rem){.hy-key-figure__title{font-size:2.5rem;line-height:30px}}@media (min-width: 75.0625rem){.hy-key-figure__title{font-size:5rem;line-height:70px}}.hy-key-figure__description{color:var(--grayscale-dark);font-family:var(--main-font-family);font-size:0.875rem;line-height:20px;letter-spacing:0;line-height:20px;margin-top:8px}@media (min-width: 75.0625rem){.hy-key-figure__description{font-size:1.25rem;line-height:20px}}";

let HyKeyFigure = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = KeyHighlightVariants.default;
  }
  render() {
    const classVariant = [this.variant, 'hy-key-figure'].join(' ');
    return (h("div", { class: classVariant }, h("div", { class: "hy-key-figure__title" }, this.heading), h("div", { class: "hy-key-figure__description" }, this.description)));
  }
};
HyKeyFigure.style = hyKeyFigureCss;

const hyKeyFigureGroupCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{display:block}.hy-key-figure-group-container{margin:20px 0 28px 0}@media (min-width: 60rem){.hy-key-figure-group-container{margin:24px 0 32px 0}}@media (min-width: 1601px){.hy-key-figure-group-container{margin:40px 0}}@media (min-width: 75.0625rem){.hy-key-figure-group-container__large{margin:40px 0}}.hy-key-figure-group{display:block;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;max-width:30rem;margin-right:auto;margin-left:auto;width:100%}@media (min-width: 30rem){.hy-key-figure-group{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:100%}}@media (min-width: 60rem){.hy-key-figure-group{-webkit-box-pack:left;-ms-flex-pack:left;justify-content:left}}@media (min-width: 60rem){.hy-key-figure-group.hy-key-figure-group-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}}@media (min-width: 30rem){.hy-key-figure-group .box-2,.hy-key-figure-group .box-3{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:33%;width:33%}}@media (min-width: 30rem){.hy-key-figure-group .box-4{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:49%;width:49%}}@media (min-width: 60rem){.hy-key-figure-group .box-4{max-width:25%;width:25%}}";

let HyKeyFigureGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.headerstyle = 'common';
  }
  async componentWillLoad() {
    this._dataItems = await jsonParserWorker(this.dataItems);
  }
  componentDidLoad() {
    let hyMainDiv = this.el.closest('.hy-main');
    if (hyMainDiv) {
      if (!hyMainDiv.classList.contains('with-sidebar')) {
        this.headerstyle = 'large';
      }
    }
  }
  getBoxClassName(count) {
    let className = 'box';
    if (count % 3 == 0) {
      className = 'box-3';
    }
    else if (count % 4 == 0) {
      className = 'box-4';
    }
    else if (count % 5 == 0) {
      className = 'box-5';
    }
    return className;
  }
  render() {
    /*
    - Logic:
    - 3 items: big
    - 4 items: small
    - 5 items: big
    - 6 items: big
    * */
    const keyFiguresVariant = this._dataItems.length == 4 ? KeyHighlightVariants.small : KeyHighlightVariants.default;
    const classAttributes = [
      keyFiguresVariant,
      'hy-key-figure-group-container',
      `hy-key-figure-group-container__${this.headerstyle}`,
    ].join(' ');
    const classRowAttributes = ['hy-key-figure-group'].join(' ');
    const classRowCenteredAttributes = ['hy-key-figure-group', 'hy-key-figure-group-centered'].join(' ');
    if (this._dataItems.length % 5 == 0) {
      return (h(Host, null, h("div", { class: classAttributes }, h("div", { class: classRowAttributes }, this._dataItems.map((x, index) => {
        if (index < 3) {
          return (h("hy-key-figure", { class: "box-3", variant: keyFiguresVariant, heading: x.heading, description: x.description }));
        }
      })), h("div", { class: classRowCenteredAttributes }, this._dataItems.map((x, index) => {
        if (index >= 3) {
          return (h("hy-key-figure", { class: "box-2", variant: keyFiguresVariant, heading: x.heading, description: x.description }));
        }
      }))), h("hy-box", { mb: "1.75, 1.75, 2, 2.5" })));
    }
    else {
      return (h(Host, null, h("div", { class: classAttributes }, h("div", { class: classRowAttributes }, this._dataItems.map((x) => {
        return (h("hy-key-figure", { class: this.getBoxClassName(this._dataItems.length), variant: keyFiguresVariant, heading: x.heading, description: x.description }));
      }))), h("hy-box", { mb: "1.75, 1.75, 2, 2.5" })));
    }
  }
  get el() { return getElement(this); }
};
HyKeyFigureGroup.style = hyKeyFigureGroupCss;

const hyKeyHighlightCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}.hy-key-highlight{display:block;margin-bottom:20px;width:100%}@media (min-width: 30rem){.hy-key-highlight{width:100%}}.hy-key-highlight__title__container{display:inline-block;position:relative;text-align:center;margin-bottom:1rem}@media (min-width: 30rem){.hy-key-highlight__title__container{text-align:left}}.hy-key-highlight__title__container::after{clear:both}.hy-key-highlight__title{font-weight:700;background-color:var(--brand-main-light);-webkit-box-shadow:-5px 0px 0 0px var(--brand-main-light), 5px 0px 0 0px var(--brand-main-light), 0 0 0 0px var(--brand-main-light);box-shadow:-5px 0px 0 0px var(--brand-main-light), 5px 0px 0 0px var(--brand-main-light), 0 0 0 0px var(--brand-main-light);-webkit-box-decoration-break:clone;box-decoration-break:clone;color:var(--grayscale-white);display:inline;font-family:var(--main-font-family);-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;letter-spacing:-0.75px;padding:0 5px;position:relative;text-transform:uppercase;word-break:break-word}.hy-key-highlight__description{color:var(--grayscale-dark);font-family:var(--main-font-family);letter-spacing:0;margin-top:8px;text-align:center}@media (min-width: 30rem){.hy-key-highlight__description{text-align:left}}.hy-key-highlight.small .hy-key-highlight__title__container{font-size:1.5rem;line-height:29px}.hy-key-highlight.small .hy-key-highlight__description{font-size:0.875rem;line-height:19px}.hy-key-highlight.big .hy-key-highlight__title__container{font-size:1.5rem;line-height:29px}@media (min-width: 30rem){.hy-key-highlight.big .hy-key-highlight__title__container{font-size:2.5rem;line-height:45px}}.hy-key-highlight.big .hy-key-highlight__description{font-size:0.875rem;line-height:20px}@media (min-width: 30rem){.hy-key-highlight.big .hy-key-highlight__description{font-size:1.25rem;line-height:20px}}";

let HyKeyHighlight = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = KeyHighlightVariants.default;
  }
  render() {
    const classVariant = [this.variant, 'hy-key-highlight'].join(' ');
    return (h("div", { class: classVariant }, h("div", { class: "hy-key-highlight__title__container" }, h("div", { class: "hy-key-highlight__title", innerHTML: this.heading })), h("div", { class: "hy-key-highlight__description" }, this.description)));
  }
};
HyKeyHighlight.style = hyKeyHighlightCss;

const hyKeyHighlightGroupCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{display:block}.hy-key-highlight-group-container{overflow:hidden}.hy-key-highlight-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap}@media (min-width: 30rem){.hy-key-highlight-group{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;margin:0 calc(-1 * var(--gutter-medium))}}@media (min-width: 60rem){.hy-key-highlight-group{margin:0 calc(-1 * var(--gutter-wide))}}.hy-key-highlight-group .box,.hy-key-highlight-group .box-4{padding:0 50px 0 20px}@media (min-width: 30rem){.hy-key-highlight-group .box,.hy-key-highlight-group .box-4{padding:0 var(--gutter-medium)}}@media (min-width: 60rem){.hy-key-highlight-group .box,.hy-key-highlight-group .box-4{padding:0 var(--gutter-wide)}}.hy-key-highlight-group .box{width:100%}@media (min-width: 30rem){.hy-key-highlight-group .box{width:33.33%;max-width:33.33%}}.hy-key-highlight-group .box-4{width:100%}@media (min-width: 30rem){.hy-key-highlight-group .box-4{width:50%;max-width:50%}}@media (min-width: 60rem){.hy-key-highlight-group .box-4{width:25%}}";

let HyKeyHighlightGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = KeyHighlightVariants.default;
    this.headerstyle = 'common';
  }
  async componentWillLoad() {
    this._dataItems = await jsonParserWorker(this.dataItems);
  }
  componentDidLoad() {
    let hyMainDiv = this.el.closest('.hy-main');
    if (hyMainDiv) {
      if (!hyMainDiv.classList.contains('with-sidebar')) {
        this.headerstyle = 'large';
      }
    }
  }
  render() {
    const classAttributes = [
      this.variant,
      'hy-key-highlight-group',
      `hy-key-highlight-group__${this.headerstyle}`,
    ].join(' ');
    const dataItemCount = this._dataItems.length;
    const classItem = dataItemCount % 4 == 0 ? 'box-4' : 'box';
    return (h(Host, null, h("div", { class: classAttributes }, this._dataItems.map((x) => {
      return (h("hy-key-highlight", { class: classItem, variant: this.variant, heading: x.heading, description: x.description }));
    }))));
  }
  get el() { return getElement(this); }
};
HyKeyHighlightGroup.style = hyKeyHighlightGroupCss;

const hyLargeProcessFlowCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{display:block}.hy-large-process-flow{max-width:100%;padding-top:8px;width:100%}@media (min-width: 30rem){.hy-large-process-flow{max-width:calc(100% / 8 * 7 + var(--gutter-narrow));padding-top:0}}@media (min-width: 60rem){.hy-large-process-flow{max-width:calc(100% / 12 * 8 + var(--gutter-wide))}}@media (min-width: 75.0625rem){.hy-large-process-flow{max-width:calc(100% / 12 * 8 + var(--gutter-extrawide))}}.hy-large-process-flow h3.hy-heading{font-size:20px}@media (min-width: 30rem){.hy-large-process-flow h3.hy-heading{font-size:32px}}.hy-large-process-flow__first-phase h3.hy-heading{margin-bottom:8px;padding:24px 0 !important}@media (min-width: 30rem){.hy-large-process-flow__first-phase h3.hy-heading{margin-bottom:24px;margin-top:16px}}.hy-large-process-flow__multi-phase-title{position:relative}.hy-large-process-flow__multi-phase-title:after{background-color:var(--grayscale-background-arrow);bottom:0;content:\" \";display:inline-block;height:100%;left:26.5px;position:absolute;width:8px;z-index:-1}@media (min-width: 30rem){.hy-large-process-flow__multi-phase-title:after{left:calc(100% / 8 + var(--gutter-narrow) + 26.5px)}}@media (min-width: 60rem){.hy-large-process-flow__multi-phase-title:after{left:calc(100% / 12 + var(--gutter-wide) + 26.5px)}}@media (min-width: 75.0625rem){.hy-large-process-flow__multi-phase-title:after{left:calc(100% / 12 + var(--gutter-extrawide) + 26.5px)}}.hy-large-process-flow__multi-phase-title h3.hy-heading{background-color:var(--grayscale-white);margin:1.5rem 0 1.5rem;padding:8px 0 !important}@media (min-width: 30rem){.hy-large-process-flow__multi-phase-title h3.hy-heading{margin:48px 0;padding:16px 0 !important}}";

let HyLargeProcessFlow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.headerstyle = 'common';
  }
  async componentWillLoad() {
    this._dataItems = await jsonParserWorker(this.dataItems);
  }
  componentDidLoad() {
    let hyMainDiv = this.el.closest('.hy-main');
    if (hyMainDiv) {
      if (!hyMainDiv.classList.contains('with-sidebar')) {
        this.headerstyle = 'large';
      }
    }
  }
  render() {
    const classAttributes = ['hy-large-process-flow', `hy-large-process-flow__${this.headerstyle}`].join(' ');
    return [
      h("div", { class: classAttributes }, this._dataItems.map((x, index) => {
        let phases = JSON.stringify(x.boxes);
        const headingClasses = index !== 0 ? 'hy-large-process-flow__multi-phase-title' : 'hy-large-process-flow__first-phase';
        return [
          h("hy-heading", { class: headingClasses, heading: HeadingVarians.h3 }, x.phaseTitle),
          h("hy-large-process-flow-phase", { "data-items": phases }),
        ];
      })),
    ];
  }
  get el() { return getElement(this); }
};
HyLargeProcessFlow.style = hyLargeProcessFlowCss;

const hyLargeProcessFlowPhaseCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{display:block}.hy-large-process-flow__phase-container{padding-left:0;position:relative;max-width:100%;width:100%}@media (min-width: 30rem){.hy-large-process-flow__phase-container{padding-left:calc(100% / 8 + var(--gutter-narrow))}}@media (min-width: 60rem){.hy-large-process-flow__phase-container{padding-left:calc(100% / 12 + var(--gutter-wide))}}@media (min-width: 75.0625rem){.hy-large-process-flow__phase-container{padding-left:calc(100% / 12 + var(--gutter-extrawide))}}.hy-large-process-flow__phase-container__phase{position:relative}.hy-large-process-flow__phase-container__phase:after{background-color:var(--grayscale-background-arrow);bottom:0;content:\" \";display:inline-block;height:24px;left:26.5px;position:absolute;width:8px}@media (min-width: 30rem){.hy-large-process-flow__phase-container__phase:after{display:inline-block;height:100%}}.hy-large-process-flow__phase-container__phase:last-child:after{display:none}@media (min-width: 30rem){.hy-large-process-flow__phase-container__phase:last-child:after{display:inline-block}}.hy-large-process-flow__phase-container__phase:last-child .hy-large-process-flow__phase-container__phase__content{top:0;margin-top:-24px}.hy-large-process-flow__phase-container__phase__number{display:grid;place-items:center;position:relative;width:64px;z-index:2}.hy-large-process-flow__phase-container__phase__number__number{background-color:var(--brand-main-light);color:var(--grayscale-white);display:grid;font-family:var(--main-font-family);font-size:2rem;line-height:36px;font-weight:700;height:48px;letter-spacing:0;margin:0;padding:0;place-items:center;position:relative;width:48px}.hy-large-process-flow__phase-container__phase__number__number::after{content:\"\";height:48px;left:-6px;position:absolute;width:48px}@media (min-width: 30rem){.hy-large-process-flow__phase-container__phase__number__number{font-size:2.25rem;line-height:40px;height:64px;width:64px}.hy-large-process-flow__phase-container__phase__number__number::after{content:\"\";height:64px;left:-6px;position:absolute;width:64px}}.hy-large-process-flow__phase-container__phase__content{background-color:var(--grayscale-background-box);margin:0 -56px;padding:48px 0 24px 0;position:relative;top:-24px}@media (min-width: 30rem){.hy-large-process-flow__phase-container__phase__content{margin:0 0 -8px 32px;padding:32px 0;top:-32px}}.hy-large-process-flow__phase-container__phase__content__heading{color:var(--brand-main-nearly-black);font-family:var(--main-font-family);font-size:1.25rem;line-height:30px;font-weight:600;letter-spacing:-0.5px;margin-bottom:24px;padding:0 56px}@media (min-width: 30rem){.hy-large-process-flow__phase-container__phase__content__heading{font-size:1.625rem;line-height:30px;font-weight:700;letter-spacing:-0.65px;padding:0 44px}}.hy-large-process-flow__phase-container__phase__content__description{color:var(--grayscale-dark);font-family:var(--main-font-family);font-size:1rem;line-height:24px;letter-spacing:0;margin-bottom:24px;padding:0 56px}@media (min-width: 30rem){.hy-large-process-flow__phase-container__phase__content__description{padding:0 44px}}.hy-large-process-flow__phase-container__phase__content__links{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-right:0;padding:0 56px}@media (min-width: 30rem){.hy-large-process-flow__phase-container__phase__content__links{margin-right:-6px;padding:0}}.hy-large-process-flow__phase-container__phase__content__links .phase-link{margin-bottom:8px}.hy-large-process-flow__phase-container__phase__content__links .phase-link.last{margin-bottom:0}";

let HyLargeProcessFlowPhase = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  async componentWillLoad() {
    this._dataItems = await jsonParserWorker(this.dataItems);
  }
  render() {
    const classAttributes = ['hy-large-process-flow__phase-container'].join(' ');
    return (h("div", { class: classAttributes }, this._dataItems.map((x, index) => {
      var items;
      if (x.links && x.links.length > 0) {
        let linkItems = x.links;
        let linkItemsCount = x.links.length;
        items = linkItems.map((item, index) => {
          let classLinks = index == linkItemsCount - 1 ? 'phase-link last' : 'phase-link';
          return item ? (h("hy-cta-link", { class: classLinks, "link-content": item.label, "sc-label": item.ariaLabel, "is-external": item.isExternal, url: item.url })) : null;
        });
      }
      return [
        h("div", { class: "hy-large-process-flow__phase-container__phase" }, h("div", { class: "hy-large-process-flow__phase-container__phase__number" }, h("h2", { class: "hy-large-process-flow__phase-container__phase__number__number" }, h("div", { class: "hy-large-process-flow__phase-container__phase__number__title" }, index + 1))), h("div", { class: "hy-large-process-flow__phase-container__phase__content" }, h("div", { class: "hy-large-process-flow__phase-container__phase__content__heading" }, x.heading), h("div", { class: "hy-large-process-flow__phase-container__phase__content__description", innerHTML: x.description }), h("div", { class: "hy-large-process-flow__phase-container__phase__content__links" }, items))),
      ];
    })));
  }
};
HyLargeProcessFlowPhase.style = hyLargeProcessFlowPhaseCss;

const linkCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{display:block}.hy-link{color:var(--brand-main);font-family:var(--main-font-family);font-weight:600;font-size:14px;letter-spacing:-0.47px;margin:theme(\"spacing.8\");line-height:16px;text-decoration:none}.hy-link.within-paragraph{color:var(--brand-main);font-family:var(--main-font-family);font-weight:400;font-size:14px;line-height:20px;text-decoration:underline}";

let Link = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = LinkVariants.default;
    this.linkContent = '';
    this.isExternal = false;
  }
  render() {
    const classAttributes = ['hy-link', this.variant];
    const target = this.isExternal ? '_blank' : '_self';
    return (h(Host, null, h("a", { "aria-label": this.scLabel, class: classAttributes.join(' '), href: this.url, target: target }, this.linkContent)));
  }
};
Link.style = linkCss;

const linkBoxCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{height:100%}.hy-link-box-container{background:var(--grayscale-background-box);position:relative;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:100%;position:relative}.hy-link-box-container:focus-within{outline:auto}.hy-link-box-container:hover{cursor:pointer}.hy-link-box-container:hover .hy-link-box__text-container__title{color:var(--brand-main);text-decoration:underline}.hy-link-box-container:hover .hy-cta-link{text-decoration:underline}.hy-link-box-container:hover .hy-cta-link .hy-cta-link__icon{background-color:var(--brand-main)}.hy-link-box__image-container{margin:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:stretch;-ms-flex-pack:stretch;justify-content:stretch;min-height:10rem;position:relative}.hy-link-box__image-container:before{content:\"\";display:block;padding-top:62.5%;width:100%}.hy-link-box__image-container img{bottom:0;height:100%;left:0;-o-object-fit:cover;object-fit:cover;position:absolute;right:0;top:0;width:100%}.hy-link-box__image-container.is-image-missing svg{position:absolute;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);left:50%;width:85px;height:auto;fill:#d2d2d2}.hy-link-box__text-container{padding:16px}.hy-link-box__text-container__title{font-size:1.3125rem;line-height:28px;font-weight:700;color:var(--brand-main-nearly-black);font-family:var(--main-font-family);letter-spacing:-0.42px;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;word-break:break-word;margin:0 0 16px}@media screen and (min-width: 1024px){.hy-link-box__text-container__title{font-size:1.5625rem;line-height:32px;letter-spacing:-0.5px}}.hy-link-box__text-container__description{font-size:0.9375rem;line-height:22px;color:var(--grayscale-black);font-family:var(--main-font-family);margin:0}@media screen and (min-width: 1024px){.hy-link-box__text-container__description{font-size:1.0625rem;line-height:26px}}.hy-cta-link{font-weight:600;font-size:1rem;line-height:24px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--brand-main);display:inline-grid;font-family:var(--main-font-family);gap:16px;grid-auto-flow:column;letter-spacing:-0.5px;overflow:hidden;text-decoration:none;margin:0 -8px 24px 0;align-self:flex-end}.hy-cta-link span[aria-hidden=true]{position:absolute;inset:0}.hy-cta-link:focus{outline:none}.hy-cta-link__icon{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:var(--brand-main-light);display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:40px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:40px}.hy-cta-link__icon svg{fill:var(--grayscale-white)}.hy-cta-link__icon--external svg{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}";

let LinkBox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = LinkBoxVariants.default;
    this.imageUrl = null;
    this.imageAlt = null;
    this.disableLazy = false;
    this.useSlot = false;
    this.showLogo = false;
    this.textDescription = null;
    this.isExternal = false;
    this.headerstyle = 'common';
  }
  srcSetWatcher(data) {
    this._sourceSet = typeof data === 'string' ? JSON.parse(data) : data;
  }
  componentWillLoad() {
    this.srcSetWatcher(this.sourceSet);
  }
  componentDidLoad() {
    let hyMainDiv = this.el.closest('.hy-main');
    if (hyMainDiv) {
      if (!hyMainDiv.classList.contains('with-sidebar')) {
        this.headerstyle = 'large';
      }
    }
  }
  render() {
    const classContainerAttributes = ['hy-link-box-container'].join(' ');
    const classAttributes = [
      'hy-link-box',
      this.variant,
      `hy-link-box__${this.variant}`,
      this.headerstyle,
      `hy-link-box__${this.headerstyle}`,
      this.imageUrl ? 'hy-link-box--with-image' : null,
    ].join(' ');
    const classTextContainer = ['hy-link-box__text-container', this.imageUrl ? 'hy-link-box--with-image' : null].join(' ');
    const classTitle = [
      'hy-link-box__text-container__title',
      `hy-link-box__text-container__title__${this.variant}`,
      `hy-link-box__text-container__title__${this.headerstyle}`,
      this.imageUrl ? 'hy-link-box__text-container__title__image' : '',
      this.imageUrl ? 'image' : '',
    ].join(' ');
    const classDescription = [
      'hy-link-box__text-container__description',
      `hy-link-box__text-container__description__${this.variant}`,
      `hy-link-box__text-container__description__${this.headerstyle}`,
    ].join(' ');
    const target = this.isExternal ? '_blank' : '_self';
    const aspectRatioWidth = 16;
    const aspectRatioHeight = 10;
    const aspect = (aspectRatioHeight / aspectRatioWidth) * 100;
    const aspectRatio = {
      '--aspectRatio': `${aspect}%`,
    };
    return [
      h("article", { class: classContainerAttributes }, h("div", { class: classAttributes }, this.imageUrl &&
        (this._sourceSet ? (h("figure", { class: "hy-link-box__image-container", style: aspectRatio }, h("picture", null, this._sourceSet.map((item) => (h("source", { srcSet: item.src, media: item.media, type: item.type, sizes: item.sizes ? item.sizes : '' }))), h("img", { loading: this.disableLazy ? 'eager' : 'lazy', "aria-hidden": "true", src: this.imageUrl, alt: this.imageAlt })))) : (h("figure", { class: "hy-link-box__image-container", style: aspectRatio }, h("img", { loading: this.disableLazy ? 'eager' : 'lazy', "aria-hidden": "true", src: this.imageUrl, alt: this.imageAlt })))), !this.imageUrl && this.showLogo && (h("div", { "aria-hidden": "true", class: "hy-link-box__image-container is-image-missing" }, h("hy-icon", { class: { 'hy-site-logo__icon': true }, icon: 'hy-icon-hy-logo' }))), h("div", { class: classTextContainer }, h("h3", { class: classTitle }, this.textTitle), this.textDescription && (h("p", { class: classDescription }, this.textDescription.length >= 141 ? this.textDescription.slice(0, 140) + '...' : this.textDescription)))), h("a", { "aria-label": this.scLabel || `${this.readMoreLabel} - ${this.textTitle}`, title: this.scLabel || `${this.readMoreLabel} - ${this.textTitle}`, href: this.url, target: target, class: `hy-cta-link hy-cta-link--default` }, h("span", { "aria-hidden": "true" }), h("span", null, this.readMoreLabel), h("span", { class: `hy-cta-link__icon ${this.isExternal ? 'hy-cta-link__icon--external' : ''}` }, h("hy-icon", { icon: 'hy-icon-arrow-to-right', size: 24 })))),
    ];
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "sourceSet": ["srcSetWatcher"]
  }; }
};
LinkBox.style = linkBoxCss;

const linkBoxListCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{display:block}.hy-link-box-list{padding:0;margin:0;list-style:none;display:grid;gap:32px 0}@media screen and (min-width: 768px){.hy-link-box-list{grid-template-columns:repeat(2, 1fr);gap:32px 24px}}@media screen and (min-width: 1024px){.hy-link-box-list{grid-template-columns:repeat(3, 1fr)}}@media screen and (min-width: 1920px){.hy-link-box-list{gap:32px}}";

let LinkBoxList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.headerstyle = 'common';
    this.variant = LinkBoxVariants.default;
  }
  async componentWillLoad() {
    this._dataItems = await jsonParserWorker(this.dataItems);
  }
  componentDidLoad() {
    let hyMainDiv = this.el.closest('.hy-main');
    if (hyMainDiv) {
      if (!hyMainDiv.classList.contains('with-sidebar')) {
        this.headerstyle = 'large';
      }
    }
  }
  render() {
    const classAttributes = [
      'hy-link-box-list',
      this.variant,
      `hy-link-box-list__${this.variant}`,
      `hy-link-box-list__${this.headerstyle}`,
    ].join(' ');
    /*
    - Logic:
    - 3 items: big
    - 4 items: small
    - 5 items: big
    - 6 items: big
    - 7 items: small
    - 8 items: small
    - 9 items: big
    * */
    const classItemAttributes = [this.variant, `hy-link-box__${this.variant}`].join(' ');
    return (h(Host, null, h("ul", { class: classAttributes }, this._dataItems.map((x) => {
      return (h("li", null, h("hy-link-box", { class: classItemAttributes, variant: this.variant, "source-set": x.imageSets, "image-url": x.imageUrl, "image-alt": x.imageAlt, "text-title": x.heading, "text-description": x.description, "show-logo": x.showLogo, url: x.boxUrl, "is-external": x.isExternal, "sc-label": x.ariaLabel, "read-more-label": this.readMoreLabel })));
    })), h("hy-box", { mb: "1.75, 1.75, 2, 2.5" })));
  }
  get el() { return getElement(this); }
};
LinkBoxList.style = linkBoxListCss;

const hyLinkListCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{display:block}.hy-link-list{margin-bottom:32px}.hy-link-list__links{display:grid;gap:16px;list-style:none;margin:0;padding:0}@media (min-width: 30rem){.hy-link-list__links--grid{gap:16px 24px;grid-template-columns:repeat(2, 1fr)}}@media (min-width: 60rem){.without-sidebar .hy-link-list__links--grid.col-3{gap:16px 24px;grid-template-columns:repeat(3, 1fr)}}@media (min-width: 75.0625rem){.without-sidebar .hy-link-list__links--grid.col-3{gap:16px 32px}}@media (min-width: 60rem){.without-sidebar .hy-link-list__links--grid.col-4{gap:16px 24px;grid-template-columns:repeat(4, 1fr)}}@media (min-width: 75.0625rem){.without-sidebar .hy-link-list__links--grid.col-4{gap:16px 32px}}@media (min-width: 75.0625rem){.with-sidebar .hy-link-list__links--grid.col-3{gap:16px 24px;grid-template-columns:repeat(3, 1fr)}}@media (min-width: 1601px){.with-sidebar .hy-link-list__links--grid.col-3{gap:16px 32px}}@media (min-width: 75.0625rem){.with-sidebar .hy-link-list__links--grid.col-4{gap:16px 24px;grid-template-columns:repeat(4, 1fr)}}@media (min-width: 1601px){.with-sidebar .hy-link-list__links--grid.col-4{gap:16px 32px}}.hy-link-list__title{font-weight:700;font-family:var(--main-font-family);margin:0 0 32px;color:var(--brand-main-nearly-black)}.is-content-page h2.hy-link-list__title{font-size:1.625rem;line-height:32px;letter-spacing:-0.82px}@media (min-width: 30rem){.is-content-page h2.hy-link-list__title{font-size:1.875rem;line-height:36px;letter-spacing:-0.6px}}@media (min-width: 75.0625rem){.without-sidebar .is-content-page h2.hy-link-list__title{font-size:2.125rem;line-height:40px;letter-spacing:-0.68px}}@media (min-width: 1601px){.with-sidebar .is-content-page h2.hy-link-list__title{font-size:2.125rem;line-height:40px;letter-spacing:-0.68px}}.is-front-page h2.hy-link-list__title,.is-landing-page h2.hy-link-list__title{font-size:1.75rem;line-height:32px;letter-spacing:-0.7px;text-transform:uppercase}@media (min-width: 30rem){.is-front-page h2.hy-link-list__title,.is-landing-page h2.hy-link-list__title{font-size:2.125rem;line-height:40px;letter-spacing:-0.85px}}@media (min-width: 75.0625rem){.without-sidebar .is-front-page h2.hy-link-list__title,.without-sidebar .is-landing-page h2.hy-link-list__title{font-size:2.625rem;line-height:48px;letter-spacing:-1.05px}}@media (min-width: 1601px){.with-sidebar .is-front-page h2.hy-link-list__title,.with-sidebar .is-landing-page h2.hy-link-list__title{font-size:2.625rem;line-height:48px;letter-spacing:-1.05px}}.hy-two-columns h2.hy-link-list__title{font-size:1.125rem;line-height:22px;letter-spacing:-0.45px;margin-bottom:16px;text-transform:none}@media (min-width: 75.0625rem){.without-sidebar .hy-two-columns h2.hy-link-list__title{font-size:1.25rem;line-height:24px;letter-spacing:-0.5px}}@media (min-width: 1601px){.with-sidebar .hy-two-columns h2.hy-link-list__title{font-size:1.25rem;line-height:24px;letter-spacing:-0.5px}}.is-content-page h3.hy-link-list__title{font-size:1.3125rem;line-height:28px;letter-spacing:-0.42px}@media (min-width: 30rem){.is-content-page h3.hy-link-list__title{font-size:1.5625rem;line-height:32px;letter-spacing:-0.5px}}.is-front-page h3.hy-link-list__title,.is-landing-page h3.hy-link-list__title{font-size:1.625rem;line-height:32px;letter-spacing:-0.52px}@media (min-width: 30rem){.is-front-page h3.hy-link-list__title,.is-landing-page h3.hy-link-list__title{font-size:1.875rem;line-height:36px;letter-spacing:-0.6px}}@media (min-width: 75.0625rem){.without-sidebar .is-front-page h3.hy-link-list__title,.without-sidebar .is-landing-page h3.hy-link-list__title{font-size:2.125rem;line-height:40px;letter-spacing:-0.68px}}@media (min-width: 1601px){.with-sidebar .is-front-page h3.hy-link-list__title,.with-sidebar .is-landing-page h3.hy-link-list__title{font-size:2.125rem;line-height:40px;letter-spacing:-0.68px}}.hy-two-columns h3.hy-link-list__title{font-size:1.125rem;line-height:22px;letter-spacing:-0.45px;margin-bottom:16px;text-transform:none}@media (min-width: 75.0625rem){.without-sidebar .hy-two-columns h3.hy-link-list__title{font-size:1.25rem;line-height:24px;letter-spacing:-0.5px}}@media (min-width: 1601px){.with-sidebar .hy-two-columns h3.hy-link-list__title{font-size:1.25rem;line-height:24px;letter-spacing:-0.5px}}";

let HyLinkList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.headerstyle = 'default';
    this.listHeading = '';
    this.headingVariant = 'h2';
  }
  async componentWillLoad() {
    this._dataItems = await jsonParserWorker(this.dataItems);
  }
  componentDidLoad() {
    let hyMainDiv = this.el.closest('.hy-main');
    if (hyMainDiv) {
      if (!hyMainDiv.classList.contains('with-sidebar')) {
        this.headerstyle = 'large';
      }
    }
  }
  render() {
    const linkVariant = CtaLinkVariants.linkList;
    const HeadingVariant = this.headingVariant.toLowerCase();
    let columnType = 'col-3';
    if (this._dataItems.length === 7 || this._dataItems.length % 4 === 0) {
      columnType = 'col-4';
    }
    return [
      h("section", { class: `hy-link-list hy-link-list__${this.headerstyle}` }, this.listHeading.length > 0 && (h(HeadingVariant, { class: 'hy-link-list__title' }, this.listHeading)), h("ul", { class: `hy-link-list__links hy-link-list__links--${this.variation} ${this.variation === 'grid' ? columnType : ''}` }, this._dataItems.map(({ heading, ariaLabel, url, isExternal }) => (h("li", { class: "hy-link-list__links-item" }, h("hy-cta-link", { variant: linkVariant, "link-content": heading, "sc-label": ariaLabel, url: url, "is-external": isExternal })))))),
    ];
  }
  get el() { return getElement(this); }
};
HyLinkList.style = hyLinkListCss;

const hyListItemCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{display:block}.hy-list-item{display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--main-font-family);text-decoration:none}.hy-list-item__default{margin-bottom:28px}@media (min-width: 60rem){.hy-list-item__default{margin-bottom:32px}}.hy-list-item__default__info-container__header{font-size:0.75rem;line-height:14px;color:var(--grayscale-dark);letter-spacing:0;margin-bottom:4px}@media (min-width: 30rem){.hy-list-item__default__info-container__header{font-size:0.875rem;line-height:18px;margin-bottom:2px}}.hy-list-item__default__info-container__title{font-size:1.125rem;line-height:22px;font-weight:700;color:var(--brand-main-light);letter-spacing:-0.56px;margin-bottom:6px}@media (min-width: 30rem){.hy-list-item__default__info-container__title{font-size:1.375rem;line-height:28px;letter-spacing:-0.69px;margin-bottom:10px}}@media (min-width: 1601px){.hy-list-item__default__info-container__title{font-size:1.625rem;line-height:32px;letter-spacing:-0.8px;margin-bottom:8px}}@media (min-width: 75.0625rem){.hy-list-item__default__info-container__title__large{font-size:1.625rem;line-height:32px;letter-spacing:-0.8px;margin-bottom:8px}}.hy-list-item__default__info-container__link-container{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;margin-bottom:6px}@media (min-width: 30rem){.hy-list-item__default__info-container__link-container{margin-bottom:8px}}.hy-list-item__default__info-container__link{font-size:0.75rem;line-height:16px;color:var(--grayscale-dark);letter-spacing:-0.07px;margin-left:4px}@media (min-width: 30rem){.hy-list-item__default__info-container__link{margin-left:5px}}.hy-list-item__default__info-container__link__icon svg{fill:var(--grayscale-dark)}.hy-list-item__default__info-container__description{font-size:0.875rem;line-height:20px;color:var(--grayscale-black);letter-spacing:0}@media (min-width: 30rem){.hy-list-item__default__info-container__description{font-size:1rem;line-height:24px}}.hy-list-item__position{background:radial-gradient(circle, var(--grayscale-light) 0%, var(--grayscale-background-box) 100%);-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}@media (min-width: 30rem){.hy-list-item__position{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}}.hy-list-item__position__info-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:0;padding:12px;position:relative}@media (min-width: 60rem){.hy-list-item__position__info-container{padding:12px 16px}}@media (min-width: 1601px){.hy-list-item__position__info-container{padding:20px 24px}}.hy-list-item__position__info-container__header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;color:var(--brand-main);font-family:var(--main-font-family);font-size:14px;font-weight:600;letter-spacing:-0.2px;line-height:14px;margin-bottom:14px}.hy-list-item__position__info-container__header .icon{margin-right:0.75rem}.hy-list-item__position__info-container__header .icon svg{fill:var(--brand-main)}@media (min-width: 75.0625rem){.hy-list-item__position__info-container__large{padding:20px 24px}}.hy-list-item__position__info-container__data{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.hy-list-item__position__info-container__title{font-size:1.125rem;line-height:20px;font-weight:700;font-family:var(--main-font-family);color:var(--grayscale-black);margin-bottom:12px;letter-spacing:-0.45px;line-height:22px}@media (min-width: 30rem){.hy-list-item__position__info-container__title{letter-spacing:-0.5px}}.hy-list-item__position__info-container__description{font-size:0.875rem;color:var(--grayscale-dark-text);display:none;font-family:var(--main-font-family);letter-spacing:0.8px;margin-bottom:14px;line-height:20px}@media (min-width: 30rem){.hy-list-item__position__info-container__description{display:block}}.hy-list-item__position__info-container__outgoing-link{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;position:relative;padding:0 24px 24px 12px}@media (min-width: 30rem){.hy-list-item__position__info-container__outgoing-link{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0 24px 24px 0}}.hy-list-item__position__info-container__outgoing-link .label{color:var(--link-blue);font-family:var(--main-font-family);font-size:16px;font-weight:600;letter-spacing:-0.3px;line-height:20px}.hy-list-item__position__info-container__outgoing-link .icon{margin-right:4px;margin-bottom:2px}.hy-list-item__position__info-container__outgoing-link .icon svg{fill:var(--link-blue)}.hy-list-item__degree{background:radial-gradient(circle, var(--grayscale-light) 0%, var(--grayscale-background-box) 100%);-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}@media (min-width: 30rem){.hy-list-item__degree{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}}.hy-list-item__degree__image-container{display:block;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1}@media (min-width: 30rem){.hy-list-item__degree__image-container{-webkit-box-flex:0;-ms-flex:0 0 24%;flex:0 0 24%}}.hy-list-item__degree__image-container__image{vertical-align:bottom;max-width:100%;height:100%}.hy-list-item__degree__image-container__image img{-o-object-fit:cover;object-fit:cover;width:100%;height:100%}.hy-list-item__degree__image-container span{font-weight:600;font-size:0.75rem;line-height:14px;background-color:var(--additional-yellow);-webkit-box-shadow:0 2px 8px 0 rgba(0, 0, 0, 0.05);box-shadow:0 2px 8px 0 rgba(0, 0, 0, 0.05);color:var(--grayscale-black);left:-4px;letter-spacing:-0.07px;padding:5px 8px;position:absolute;top:16px;text-transform:uppercase}@media (min-width: 30rem){.hy-list-item__degree__image-container span{left:-8px}}@media (min-width: 60rem){.hy-list-item__degree__image-container span{top:22px}}.hy-list-item__degree__info-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:0;padding:12px;position:relative}@media (min-width: 60rem){.hy-list-item__degree__info-container{padding:12px 16px}}@media (min-width: 1601px){.hy-list-item__degree__info-container{padding:20px 24px}}@media (min-width: 75.0625rem){.hy-list-item__degree__info-container__large{padding:20px 24px}}.hy-list-item__degree__info-container__data{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.hy-list-item__degree__info-container__title{font-size:1.125rem;line-height:22px;font-weight:700;color:var(--link-blue);letter-spacing:-0.54px;margin-bottom:8px}@media (min-width: 60rem){.hy-list-item__degree__info-container__title{font-size:1.125rem;line-height:24px;letter-spacing:-0.5px}}@media (min-width: 1601px){.hy-list-item__degree__info-container__title{font-size:1.25rem;line-height:26px;letter-spacing:-0.6px}}@media (min-width: 75.0625rem){.hy-list-item__degree__info-container__title__large{font-size:1.25rem;line-height:26px;letter-spacing:-0.6px}}.hy-list-item__degree__info-container__description{font-size:0.875rem;line-height:18px;color:var(--grayscale-dark);letter-spacing:0;margin-bottom:16px}@media (min-width: 60rem){.hy-list-item__degree__info-container__description{letter-spacing:-0.2}}@media (min-width: 1601px){.hy-list-item__degree__info-container__description{font-size:1rem;line-height:20px;letter-spacing:-0.25px}}@media (min-width: 75.0625rem){.hy-list-item__degree__info-container__description__large{font-size:1rem;line-height:20px;letter-spacing:-0.25px}}.hy-list-item__degree__info-container__metadata-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-top:16px;width:100%}@media (min-width: 30rem){.hy-list-item__degree__info-container__metadata-wrapper{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}}.hy-list-item__degree__info-container__metadata-wrapper.link-only{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.hy-list-item__degree__info-container__additional-info{width:100%}.hy-list-item__degree__info-container__additional-info__item{font-size:0.75rem;line-height:16px;font-weight:300;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--grayscale-black);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;letter-spacing:-0.2px}@media (min-width: 1601px){.hy-list-item__degree__info-container__additional-info__item{font-size:0.875rem;line-height:16px}}@media (min-width: 75.0625rem){.hy-list-item__degree__info-container__additional-info__item__large{font-size:0.875rem;line-height:16px}}.hy-list-item__degree__info-container__additional-info__item.active::before{content:\" \";-webkit-box-sizing:border-box;box-sizing:border-box;height:14px;width:14px;border:3px solid #ffffff;border-radius:50%;background-color:#f9a21a;left:-7px;position:absolute}@media (min-width: 30rem){.hy-list-item__degree__info-container__additional-info__item.active::before{border:none;height:8px;margin-right:6px;width:8px;left:0;position:relative}}.hy-list-item__degree__info-container__outgoing-link{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;position:relative;width:100%}.hy-list-item__degree__info-container__outgoing-link a{-webkit-box-align:center;-ms-flex-align:center;align-items:center;bottom:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;position:relative;right:-18px;text-decoration:none}@media (min-width: 60rem){.hy-list-item__degree__info-container__outgoing-link a{right:-22px}}@media (min-width: 1601px){.hy-list-item__degree__info-container__outgoing-link a{right:-30px}}.hy-list-item__degree__info-container__outgoing-link a .label{font-size:0.875rem;line-height:16px;font-weight:700;color:var(--link-blue);letter-spacing:-0.5px;margin-right:8px;text-align:right}.hy-list-item__degree__info-container__outgoing-link a .icon-wrapper{background-color:var(--brand-main-light);z-index:10}.hy-list-item__degree__info-container__outgoing-link a .icon-wrapper .icon{position:relative;overflow:hidden}.hy-list-item__degree__info-container__outgoing-link a .icon-wrapper .icon svg{background-color:transparent;-webkit-box-shadow:0 2px 8px 0 rgba(0, 0, 0, 0.1);box-shadow:0 2px 8px 0 rgba(0, 0, 0, 0.1);fill:var(--grayscale-white);padding:6.4px}@media (min-width: 1601px){.hy-list-item__degree__info-container__outgoing-link a .icon-wrapper .icon svg{height:36px;width:36px;padding:7.2px}}@media (min-width: 75.0625rem){.hy-list-item__degree__info-container__outgoing-link__large svg{height:36px;width:36px;padding:7.2px}}.hy-list-item-wrapper{font-family:var(--main-font-family)}.hy-list-item-wrapper__degree{margin-bottom:16px}@media (min-width: 30rem){.hy-list-item-wrapper__degree{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;margin-bottom:24px}}@media (min-width: 60rem){.hy-list-item-wrapper__degree{margin-bottom:28px}}@media (min-width: 1601px){.hy-list-item-wrapper__degree{margin-bottom:32px}}@media (min-width: 75.0625rem){.hy-list-item-wrapper__degree__large{margin-bottom:32px}}.hy-list-item-wrapper__degree__related-info{background:radial-gradient(circle, #f8f8f8 0%, #f5f5f5 100%);margin-top:4px;padding:0 12px 0 16px}@media (min-width: 30rem){.hy-list-item-wrapper__degree__related-info{padding:0 24px 0 16px}}@media (min-width: 60rem){.hy-list-item-wrapper__degree__related-info{margin-top:6px;padding:0 24px 0 24px}}@media (min-width: 1601px){.hy-list-item-wrapper__degree__related-info{margin-top:8px}}@media (min-width: 75.0625rem){.hy-list-item-wrapper__degree__related-info__large{margin-top:8px}}.hy-list-item-wrapper__degree__related-info__heading__link{text-decoration:none}.hy-list-item-wrapper__degree__related-info__heading__button{font-size:0.75rem;line-height:16px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:radial-gradient(circle, #f8f8f8 0%, #f5f5f5 100%);border:none;color:var(--grayscale-black);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;font-family:var(--main-font-family);letter-spacing:-0.2px;height:100%;padding:8px 0;text-align:left;width:100%}@media (min-width: 30rem){.hy-list-item-wrapper__degree__related-info__heading__button{font-size:0.75rem;line-height:20px;padding:14px 0}}@media (min-width: 60rem){.hy-list-item-wrapper__degree__related-info__heading__button{font-size:0.875rem;line-height:20px;letter-spacing:-0.4px;padding:18px 0}}.hy-list-item-wrapper__degree__related-info__heading__button:hover{cursor:pointer}.hy-list-item-wrapper__degree__related-info__heading__button__is-open svg{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.hy-list-item-wrapper__degree__related-info__heading__icon{margin-right:0.5rem;z-index:0}@media (min-width: 60rem){.hy-list-item-wrapper__degree__related-info__heading__icon{margin-right:12px}}.hy-list-item-wrapper__degree__related-info__heading__icon svg{fill:var(--brand-main);height:14px;width:14px}@media (min-width: 60rem){.hy-list-item-wrapper__degree__related-info__heading__icon svg{height:18px;width:18px}}.hy-list-item-wrapper__degree__related-info__content{display:none}.hy-list-item-wrapper__degree__related-info__content__is-open{border-top:1px solid #d2d2d2;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:20px 8px 5px 8px}@media (min-width: 60rem){.hy-list-item-wrapper__degree__related-info__content__is-open{padding:20px 0 14px 0}}.hy-list-item-wrapper__degree__related-info__link{font-size:0.875rem;line-height:16px;font-weight:700;color:var(--link-blue);letter-spacing:-0.4px;margin-bottom:16px;text-decoration:none}";

let keys$2 = {
  enter: 'Enter',
  space: 'Space',
};
let HyListItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isExpandedRelatedContent = false;
    this.variant = ListItemVariants.default;
    this.isExternal = false;
    this.disableLazy = false;
    this.outGoingUrlLabel = 'Go to programme page';
    this.headerstyle = 'common';
    this.truncateDescription = false;
    this.truncateLimit = 140;
    this._imageMinHeight = 0;
    this._imageMinWidth = 0;
  }
  relatedLinksWatcher(newValue) {
    if (typeof newValue === 'string') {
      this._relatedLinks = JSON.parse(newValue);
    }
    else {
      this._relatedLinks = newValue;
    }
  }
  additionalInfoWatcher(newValue) {
    if (typeof newValue === 'string') {
      this._additionalInfo = JSON.parse(newValue);
    }
    else {
      this._additionalInfo = newValue;
    }
  }
  srcSetWatcher(data) {
    this._sourceSet = typeof data === 'string' ? JSON.parse(data) : data;
  }
  expandRelatedInfoPanel(target) {
    let contentSelector = `hy-list-item-wrapper__${this.variant}__related-info__content`;
    let targetButtonClass = 'hy-list-item-wrapper__degree__related-info__heading__button';
    let contentSection = document.querySelectorAll(`[aria-labelledBy="${target.id}"]`)[0];
    if (contentSection) {
      if (!this.isExpandedRelatedContent) {
        contentSection.classList.add(`${contentSelector}__is-open`);
        target.classList.add(`${targetButtonClass}__is-open`);
      }
      else {
        contentSection.classList.remove(`${contentSelector}__is-open`);
        target.classList.remove(`${targetButtonClass}__is-open`);
      }
      this.isExpandedRelatedContent = !this.isExpandedRelatedContent;
    }
  }
  handleKeyDown(event) {
    const key = event.code;
    let target = event.target;
    const targetElement = target.tagName.toLowerCase();
    const possibleTags = [targetElement].some((r) => ['svg', 'path', 'button', 'a'].indexOf(r) >= 0);
    if (target &&
      possibleTags &&
      !target.classList.contains('hy-list-item-wrapper__degree__related-info__link') &&
      [keys$2.enter, keys$2.space].includes(key)) {
      if (targetElement !== 'button') {
        target = target.closest(`.hy-list-item-wrapper__${this.variant}__related-info__heading__button`);
      }
      this.expandRelatedInfoPanel(target);
      event.preventDefault();
    }
  }
  handleClick(event) {
    let target = event.target;
    const targetElement = target.tagName.toLowerCase();
    const possibleTags = [targetElement].some((r) => ['svg', 'path', 'button', 'a'].indexOf(r) >= 0);
    if (target && possibleTags && !target.classList.contains('hy-list-item-wrapper__degree__related-info__link')) {
      if (targetElement !== 'button') {
        target = target.closest(`.hy-list-item-wrapper__${this.variant}__related-info__heading__button`);
      }
      this.expandRelatedInfoPanel(target);
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }
  componentWillLoad() {
    this.relatedLinksWatcher(this.relatedLinks);
    this.additionalInfoWatcher(this.additionalInfo);
    this.srcSetWatcher(this.sourceSet);
  }
  componentDidLoad() {
    let hyMainDiv = this.el.closest('.hy-main');
    if (hyMainDiv) {
      if (!hyMainDiv.classList.contains('with-sidebar')) {
        this.headerstyle = 'large';
      }
    }
    if (this.variant == ListItemVariants.degreeProgramme) {
      const image = document.querySelector('.hy-list-item__degree__image-container__image img');
      if (image) {
        image.addEventListener('load', function () {
          const outputImageAspectRatio = 1;
          const imageHeight = image.naturalHeight;
          const imageWidth = image.naturalWidth;
          const inputImageAspectRatio = imageWidth / imageHeight;
          this._imageMinWidth = imageWidth;
          this._imageMinHeight = imageHeight;
          if (inputImageAspectRatio > outputImageAspectRatio) {
            this._imageMinWidth = imageHeight * outputImageAspectRatio;
          }
          else if (inputImageAspectRatio < outputImageAspectRatio) {
            this._imageMinHeight = imageWidth / outputImageAspectRatio;
          }
        });
      }
    }
  }
  render() {
    const classWrapperAttributes = [
      'hy-list-item-wrapper',
      `hy-list-item-wrapper__${this.variant}`,
      `hy-list-item-wrapper__${this.variant}__${this.headerstyle}`,
    ].join(' ');
    const classAttributes = ['hy-list-item', `hy-list-item__${this.variant}`].join(' ');
    const classInfoContainerAttributes = [
      `hy-list-item__${this.variant}__info-container`,
      `hy-list-item__${this.variant}__info-container__${this.headerstyle}`,
    ].join(' ');
    /*const classInfoContainerDataAttributes = [
      `hy-list-item__${this.variant}__info-container__data`,
      `hy-list-item__${this.variant}__info-container__data__${this.headerstyle}`,
    ].join(' ');*/
    const classInfoContainerHeader = [
      `hy-list-item__${this.variant}__info-container__header`,
      `hy-list-item__${this.variant}__info-container__header__${this.headerstyle}`,
    ].join(' ');
    const classInfoContainerTitle = [
      `hy-list-item__${this.variant}__info-container__title`,
      `hy-list-item__${this.variant}__info-container__title__${this.headerstyle}`,
    ].join(' ');
    const classInfoContainerDescription = [
      `hy-list-item__${this.variant}__info-container__description`,
      `hy-list-item__${this.variant}__info-container__description__${this.headerstyle}`,
    ].join(' ');
    const classInfoContainerLinkContainer = [`hy-list-item__${this.variant}__info-container__link-container`].join(' ');
    const classInfoContainerLinkIcon = [`hy-list-item__${this.variant}__info-container__link__icon`].join(' ');
    const classInfoContainerLink = [`hy-list-item__${this.variant}__info-container__link`].join(' ');
    const target = this.isExternal ? '_blank' : '_self';
    function truncate(str, n) {
      return str.length > n ? str.substr(0, n - 1) + '...' : str;
    }
    switch (this.variant) {
      case ListItemVariants.position: {
        const classInfoContainerOutgoingLink = [
          `hy-list-item__${this.variant}__info-container__outgoing-link`,
          `hy-list-item__${this.variant}__info-container__outgoing-link__${this.headerstyle}`,
        ].join(' ');
        return (h("article", null, h("a", { class: classAttributes, href: this.url, target: target, "aria-label": this.scLabel }, h("div", { class: classInfoContainerAttributes }, h("div", { class: classInfoContainerHeader }, h("div", { class: "icon" }, h("hy-icon", { icon: 'hy-icon-units-and-faculties', size: 18 })), this.itemType), h("div", { class: classInfoContainerTitle }, this.itemTitle), this.itemDescription && (h("div", { class: classInfoContainerDescription, innerHTML: this.truncateDescription
            ? truncate(this.itemDescription, this.truncateLimit)
            : this.itemDescription }))), h("div", { class: classInfoContainerOutgoingLink }, h("span", { class: "icon" }, h("hy-icon", { icon: 'hy-icon-done', size: 14 })), h("span", { class: "label" }, this.outGoingUrlLabel)))));
      }
      case ListItemVariants.degreeProgramme: {
        const classImageContainerAttributes = [`hy-list-item__${this.variant}__image-container`].join(' ');
        const classImageContainerImage = [`hy-list-item__${this.variant}__image-container__image`].join(' ');
        const classInfoContainerAdditionalInfoAttributes = [
          `hy-list-item__${this.variant}__info-container__additional-info`,
          `hy-list-item__${this.variant}__info-container__additional-info__${this.headerstyle}`,
        ].join(' ');
        const withAdditionalInfo = this._additionalInfo && this._additionalInfo.length > 0 ? '' : 'link-only';
        const classMetadataWrapper = [
          `hy-list-item__${this.variant}__info-container__metadata-wrapper`,
          withAdditionalInfo,
        ].join(' ');
        const classContentWrapper = [`hy-list-item__${this.variant}__info-container__content-wrapper`].join(' ');
        const classInfoContainerOutgoingLink = [
          `hy-list-item__${this.variant}__info-container__outgoing-link`,
          `hy-list-item__${this.variant}__info-container__outgoing-link__${this.headerstyle}`,
        ].join(' ');
        const classInfoContainerOutgoingLinkUrl = [
          `hy-list-item__${this.variant}__info-container__outgoing-link__link`,
        ].join(' ');
        const classRelatedInfoContainer = [
          `hy-list-item-wrapper__${this.variant}__related-info`,
          `hy-list-item-wrapper__${this.variant}__related-info__${this.headerstyle}`,
        ].join(' ');
        const classRelatedInfoHeading = [`hy-list-item-wrapper__${this.variant}__related-info__heading`].join(' ');
        const classRelatedInfoHeadingLink = [`hy-list-item-wrapper__${this.variant}__related-info__heading__link`].join(' ');
        const classRelatedInfoHeadingButton = [
          `hy-list-item-wrapper__${this.variant}__related-info__heading__button`,
        ].join(' ');
        const classRelatedInfoHeadingIcon = [`hy-list-item-wrapper__${this.variant}__related-info__heading__icon`].join(' ');
        const classRelatedInfoContent = [`hy-list-item-wrapper__${this.variant}__related-info__content`].join(' ');
        const classRelatedInfoLink = [`hy-list-item-wrapper__${this.variant}__related-info__link`].join(' ');
        const titleAsId = this.relatedLinksBlockTitle && this.relatedLinksBlockTitle.length > 0
          ? `${this.itemTitle}-${this.relatedLinksBlockTitle}`.toLowerCase().replace(/\W/g, '-')
          : '';
        const accordionItemHref = '#' + titleAsId + '--title';
        const relatedLinksCount = this.relatedLinksBlockTitle && this.relatedLinksBlockTitle.length > 0 ? this._relatedLinks.length : '';
        return [
          h("article", { class: classWrapperAttributes }, h("a", { class: classAttributes, href: this.url, target: target, "aria-label": this.scLabel }, h("div", { class: classImageContainerAttributes }, h("div", { class: classImageContainerImage }, this._sourceSet ? (h("picture", null, this._sourceSet.map((item) => (h("source", { srcSet: item.src, media: item.media, type: item.type, sizes: item.sizes ? item.sizes : '' }))), h("img", { loading: this.disableLazy ? 'eager' : 'lazy', "aria-hidden": "true", src: this.itemImageUrl, alt: this.itemImageAlt, style: {
              '--minheight': `${this._imageMinHeight}px`,
              '--minwidth': `${this._imageMinWidth}px`,
            } }))) : (h("img", { loading: this.disableLazy ? 'eager' : 'lazy', "aria-hidden": "true", src: this.itemImageUrl, alt: this.itemImageAlt, style: {
              '--minheight': `${this._imageMinHeight}px`,
              '--minwidth': `${this._imageMinWidth}px`,
            } }))), this.imageLabel && h("span", null, this.imageLabel)), h("div", { class: classInfoContainerAttributes }, h("div", { class: classContentWrapper }, h("div", { class: classInfoContainerTitle }, this.itemTitle), this.itemDescription && (h("div", { class: classInfoContainerDescription, innerHTML: this.itemDescription }))), h("div", { class: classMetadataWrapper }, this._additionalInfo && (h("div", { class: classInfoContainerAdditionalInfoAttributes }, this._additionalInfo.map((x) => {
            let classInfoContainerAdditionalInfoItem = [
              `hy-list-item__${this.variant}__info-container__additional-info__item`,
              `hy-list-item__${this.variant}__info-container__additional-info__item__${this.headerstyle}`,
              `${x.isActive.toString() == 'true' ? 'active' : ''}`,
            ].join(' ');
            return h("div", { class: classInfoContainerAdditionalInfoItem }, x.text);
          }))), h("div", { class: classInfoContainerOutgoingLink }, h("a", { href: this.url, target: target, "aria-label": this.scLabel, class: classInfoContainerOutgoingLinkUrl, tabindex: "-1" }, h("span", { class: "label" }, this.outGoingUrlLabel), h("span", { class: "icon-wrapper" }, h("div", { class: "icon" }, h("hy-icon", { icon: 'hy-icon-arrow-to-right', size: 32 })))))))), this.relatedLinksBlockTitle && (h("div", { class: classRelatedInfoContainer }, h("div", { class: classRelatedInfoHeading }, h("a", { href: accordionItemHref, class: classRelatedInfoHeadingLink, tabindex: "-1" }, h("button", { "aria-expanded": "false", "aria-controls": `${titleAsId}--content`, class: classRelatedInfoHeadingButton, id: `${titleAsId}--title` }, h("span", { class: classRelatedInfoHeadingIcon }, h("hy-icon", { icon: 'hy-icon-caret-down', size: 14 })), this.relatedLinksBlockTitle, " (", relatedLinksCount, ")"))), h("div", { class: classRelatedInfoContent, "aria-labelledBy": `${titleAsId}--title`, id: `${titleAsId}--content`, role: "region", "aria-hidden": "true" }, this._relatedLinks.map((x) => {
            let relatedLinkTarget = x.isExternal ? '_blank' : '_self';
            return (h("a", { class: classRelatedInfoLink, href: x.url, target: target, "aria-label": relatedLinkTarget }, x.label));
          }))))),
        ];
      }
      default: {
        return (h("article", null, h("a", { class: classAttributes, href: this.url, target: target, "aria-label": this.scLabel }, h("div", { class: classInfoContainerAttributes }, h("div", { class: classInfoContainerHeader }, this.itemType), h("div", { class: classInfoContainerTitle }, this.itemTitle), h("div", { class: classInfoContainerLinkContainer }, h("span", { class: classInfoContainerLinkIcon }, h("hy-icon", { icon: 'hy-icon-link', size: 15 })), h("div", { class: classInfoContainerLink }, this.url)), this.itemDescription && (h("div", { class: classInfoContainerDescription, innerHTML: this.itemDescription }))))));
      }
    }
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "relatedLinks": ["relatedLinksWatcher"],
    "additionalInfo": ["additionalInfoWatcher"],
    "sourceSet": ["srcSetWatcher"]
  }; }
};
HyListItem.style = hyListItemCss;

const hyLogoGridCss$1 = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}.hy-logo-grid{padding:78px 0 92px}.hy-logo-grid__title{font-size:1.75rem;line-height:32px;letter-spacing:-0.7px;font-family:var(--main-font-family);margin:0 0 24px;text-transform:uppercase}@media (min-width: 30rem){.hy-logo-grid__title{font-size:2.125rem;line-height:40px;letter-spacing:-0.85px;margin:0 0 32px}}@media (min-width: 1601px){.without-sidebar .hy-logo-grid__title{font-size:2.625rem;line-height:48px;letter-spacing:-1.05px;margin:0 0 40px}}@media (min-width: 75.0625rem){.with-sidebar .hy-logo-grid__title{font-size:2.625rem;line-height:48px;letter-spacing:-1.05px;margin:0 0 40px}}.hy-logo-grid__images{display:grid;gap:24px 36px;grid-template-columns:repeat(2, 1fr);padding:0 8px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}@media (min-width: 30rem){.hy-logo-grid__images{grid-template-columns:repeat(3, 25%);padding:0;gap:28px 0}}@media (min-width: 60rem){.without-sidebar .hy-logo-grid__images{grid-template-columns:repeat(4, 20%);gap:32px 0}}@media (min-width: 75.0625rem){.without-sidebar .hy-logo-grid__images{gap:40px 0}}@media (min-width: 75.0625rem){.with-sidebar .hy-logo-grid__images{grid-template-columns:repeat(4, 20%);gap:32px 0}}@media (min-width: 1601px){.with-sidebar .hy-logo-grid__images{gap:40px 0}}.hy-logo-grid__figure{margin:0;padding:0;position:relative}.hy-logo-grid__figure:after{content:\"\";display:block;padding-bottom:100%}.hy-logo-grid__figure picture{position:absolute;inset:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;display:-webkit-box;display:-ms-flexbox;display:flex}.hy-logo-grid__figure img{max-width:100%;-o-object-fit:scale-down;object-fit:scale-down;height:100%}";

let HyLogoGrid = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const HeadingVariant = this.headingVariant;
    return (h("div", { class: "hy-logo-grid", role: "complementary" }, this.logoGridTitle && h(HeadingVariant, { class: "hy-logo-grid__title" }, this.logoGridTitle), h("div", { class: "hy-logo-grid__images" }, h("slot", null))));
  }
};
HyLogoGrid.style = hyLogoGridCss$1;

const hyLogoGridCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}.hy-logo-grid{padding:78px 0 92px}.hy-logo-grid__title{font-size:1.75rem;line-height:32px;letter-spacing:-0.7px;font-family:var(--main-font-family);margin:0 0 24px;text-transform:uppercase}@media (min-width: 30rem){.hy-logo-grid__title{font-size:2.125rem;line-height:40px;letter-spacing:-0.85px;margin:0 0 32px}}@media (min-width: 1601px){.without-sidebar .hy-logo-grid__title{font-size:2.625rem;line-height:48px;letter-spacing:-1.05px;margin:0 0 40px}}@media (min-width: 75.0625rem){.with-sidebar .hy-logo-grid__title{font-size:2.625rem;line-height:48px;letter-spacing:-1.05px;margin:0 0 40px}}.hy-logo-grid__images{display:grid;gap:24px 36px;grid-template-columns:repeat(2, 1fr);padding:0 8px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}@media (min-width: 30rem){.hy-logo-grid__images{grid-template-columns:repeat(3, 25%);padding:0;gap:28px 0}}@media (min-width: 60rem){.without-sidebar .hy-logo-grid__images{grid-template-columns:repeat(4, 20%);gap:32px 0}}@media (min-width: 75.0625rem){.without-sidebar .hy-logo-grid__images{gap:40px 0}}@media (min-width: 75.0625rem){.with-sidebar .hy-logo-grid__images{grid-template-columns:repeat(4, 20%);gap:32px 0}}@media (min-width: 1601px){.with-sidebar .hy-logo-grid__images{gap:40px 0}}.hy-logo-grid__figure{margin:0;padding:0;position:relative}.hy-logo-grid__figure:after{content:\"\";display:block;padding-bottom:100%}.hy-logo-grid__figure picture{position:absolute;inset:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;display:-webkit-box;display:-ms-flexbox;display:flex}.hy-logo-grid__figure img{max-width:100%;-o-object-fit:scale-down;object-fit:scale-down;height:100%}";

let HyLogoGridItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const parsedImage = JSON.parse(this.image);
    const parsedLink = this.link ? JSON.parse(this.link) : null;
    return parsedImage.map(({ image_sources: sources, image_url: fallback_url, image_alt: alt }) => {
      const parsedSources = JSON.parse(sources);
      const elementContent = (h("figure", { class: "hy-logo-grid__figure" }, parsedSources && (h("picture", null, parsedSources.map(({ src, media, type, sizes }) => (h("source", { srcSet: src, media: media, type: type, sizes: sizes ? sizes : '' }))), h("img", { alt: alt, src: fallback_url }))), !parsedSources && h("img", { alt: alt, src: fallback_url })));
      if (parsedLink) {
        const { url, target } = parsedLink;
        const targetValue = target === '_blank' ? target : '_self';
        return (h("a", { href: url, target: targetValue, class: "hy-logo-grid__link" }, elementContent));
      }
      return elementContent;
    });
  }
};
HyLogoGridItem.style = hyLogoGridCss;

const hyMainCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}.hy-main{display:-webkit-box;display:-ms-flexbox;display:flex;margin:0 auto;max-width:120.0625rem;padding:0;width:100%}.hy-main .layout-content{padding:0;width:100%}.hy-main .layout-user-login-page{padding:0 var(--gutter-medium);width:100%}.hy-main .layout-user-login-page div[id^=block-breadcrumbs]{display:none}.hy-main__common{position:relative}@media (min-width: 30rem){.hy-main__common .layout-content{margin:0 auto;width:100%}}@media (min-width: 75.0625rem){.hy-main__common .layout-content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2;width:80%}}@media (min-width: 1601px){.hy-main__common .layout-content{padding:0 2rem}}.hy-main__common .layout-sidebar-first{display:none}@media (min-width: 75.0625rem){.hy-main__common .layout-sidebar-first{background:-webkit-gradient(linear, right top, left top, from(#f5f5f5), to(#f8f8f8));background:linear-gradient(270deg, #f5f5f5 0%, #f8f8f8 100%);display:block;max-width:320px;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;padding:var(--gutter-extrawide) 13px;width:20%;height:auto}.hy-main__common .layout-sidebar-first.menu-is-open{background:var(--grayscale-white);min-height:100vh;overflow:auto}}.hy-main__large .layout-content{padding:0;width:100%}@media (min-width: 75.0625rem){.hy-main__large .layout-content{padding:0 2rem}}";

let HyMain = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.hasSidebar = false;
  }
  render() {
    const classAttributes = [
      'hy-main',
      this.hasSidebar ? 'with-sidebar' : 'without-sidebar',
      this.hasSidebar ? 'hy-main__common' : 'hy-main__large',
    ].join(' ');
    return (h("div", { class: classAttributes }, h("slot", null)));
  }
};
HyMain.style = hyMainCss;

const hyMainContentWrapperCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{display:block}.with-sidebar .hy-main-content-wrapper{margin:0 auto;max-width:100%;padding:0 1rem;position:relative}@media (min-width: 30rem){.with-sidebar .hy-main-content-wrapper{padding:0 2rem}}@media (min-width: 1601px){.with-sidebar .hy-main-content-wrapper{max-width:1216px;padding:0}}.without-sidebar .hy-main-content-wrapper{margin:0 auto;max-width:100%;padding:0 1rem;position:relative}@media (min-width: 30rem){.without-sidebar .hy-main-content-wrapper{padding:0 2rem}}@media (min-width: 75.0625rem){.without-sidebar .hy-main-content-wrapper{max-width:1216px;padding:0}}";

let HyMainContentWrapper = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const classAttributes = ['hy-main-content-wrapper'].join(' ');
    return (h(Host, null, h("div", { class: classAttributes }, h("slot", null))));
  }
};
HyMainContentWrapper.style = hyMainContentWrapperCss;

const menuCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{margin:0;padding:0}.hy-mobile-menu__header{display:grid;grid-template-columns:1fr auto;padding:12px 16px;gap:16px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.hy-mobile-menu__menu-close-button{font-size:1rem;line-height:18px;font-weight:700;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:transparent;border:none;color:var(--brand-main);display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-family:var(--main-font-family);letter-spacing:-0.3px;padding:16px;margin-left:auto;margin-right:-16px;pointer-events:none;visibility:hidden}.hy-mobile-menu__menu-close-button:hover{cursor:pointer}.hy-mobile-menu__menu-close-button hy-icon{margin-left:8px}.hy-mobile-menu__menu-close-button hy-icon svg{fill:var(--brand-main)}.hy-menu-wrapper--mobile{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;justify-items:stretch;left:0;position:absolute;right:0;top:0;z-index:99}.hy-menu-wrapper--mobile.is-open{z-index:101}.hy-menu-wrapper--desktop{padding:0}.hy-menu-wrapper--sidenav{display:none}.hy-menu-wrapper--sidenav.is-demo{display:block}@media (min-width: 30rem){.hy-menu-wrapper--sidenav{display:block}}.hy-mobile-menu__menu-container{min-height:calc(100vh - 126px);overflow-x:hidden;overflow-y:visible}.hy-menu--mobile{-webkit-overflow-scrolling:touch;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;-webkit-transform:translateX(100%);transform:translateX(100%);-webkit-transition:0.45s;transition:0.45s;width:100%;z-index:100}@media (min-width: 75.0625rem){.hy-menu--mobile:not(.is-demo){min-height:0;-webkit-transform:translateX(0);transform:translateX(0);visibility:visible}}.hy-menu--mobile.is-open{-webkit-transform:translateX(0);transform:translateX(0);-webkit-transition:-webkit-transform 0.3s cubic-bezier(0, 0, 0.3, 1);transition:-webkit-transform 0.3s cubic-bezier(0, 0, 0.3, 1);transition:transform 0.3s cubic-bezier(0, 0, 0.3, 1);transition:transform 0.3s cubic-bezier(0, 0, 0.3, 1), -webkit-transform 0.3s cubic-bezier(0, 0, 0.3, 1)}.hy-menu--mobile.is-open::after{opacity:1;visibility:visible}.hy-menu-breadcrumb-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column}.hy-menu__logo-container{display:inline-block;padding:16px;z-index:100}@media (min-width: 30rem){.hy-menu__logo-container{padding:16px 28px}}.hy-mobile-menu__donate{background-color:var(--grayscale-white);bottom:0;-webkit-box-shadow:rgba(14, 104, 139, 0.2) 0px -20px 20px -20px;box-shadow:rgba(14, 104, 139, 0.2) 0px -20px 20px -20px;position:sticky;z-index:102}.hy-mobile-menu__donate a{font-size:1rem;line-height:16px;font-weight:600;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:var(--grayscale-white);color:var(--grayscale-black);display:block;display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--main-font-family);-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;letter-spacing:-0.4px;padding:20px 0 16px;text-align:center;text-decoration:none}.hy-mobile-menu__donate a:focus{outline:solid 2px var(--additional-yellow)}.hy-mobile-menu__donate a svg{margin-right:5px}.hy-menu__breadcrumbs{display:block;position:relative}.hy-menu__breadcrumbs.is-empty{min-height:35px}";

let breadcrumbTimeout = null;
let addbreadTimeout = null;
let Menu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.menuContainerToggled = createEvent(this, "menuContainerToggled", 7);
    this.isGroup = false;
    this.isDemo = false;
    this.menuIsOpen = true;
    this.menuType = null;
  }
  // Listener for removing a breadcrumb from mobile menu breadcrumbs.
  async removeBreadcrumb(data) {
    clearTimeout(breadcrumbTimeout);
    let breadcrumbs = await jsonParserWorker(this.breadcrumbs);
    breadcrumbTimeout = setTimeout(() => {
      let currentBreadcrumb = breadcrumbs
        .map(function (e) {
        return e.bid;
      })
        .indexOf(data.detail.bid);
      for (let i = currentBreadcrumb, l = this.breadcrumbs.length; i < l; i++) {
        this.menuContainerToggled.emit({
          triggerItem: this.breadcrumbs[i].bid,
          triggerType: 'remove',
        });
      }
      this.breadcrumbs = [];
      this.breadcrumbs = breadcrumbs.slice(0, -1);
      // Reset if home breadcrumb link has been clicked.
      if (currentBreadcrumb === 0) {
        this.breadcrumbs = [];
        // Notify menu-level-container toggle listener about closing all levels.
        let elements = this.el.querySelectorAll('.hy-menu-level-container--mobile');
        elements.forEach((element) => {
          if (!element.classList.contains('hy-menu-level-container--level-0')) {
            this.menuContainerToggled.emit({
              triggerItem: element.getAttribute('trigger-item'),
              triggerType: 'remove',
            });
          }
        });
      }
    }, 100);
  }
  // Listener for adding a breadcrumb to mobile menu breadcrumbs.
  addBreadcrumb(event) {
    clearTimeout(addbreadTimeout);
    addbreadTimeout = setTimeout(() => {
      this.breadcrumbs = [
        ...this.breadcrumbs,
        {
          label: event.detail.label,
          bid: event.detail.bid,
          url: event.detail.url,
        },
      ];
    }, 100);
  }
  async componentWillLoad() {
    this.breadcrumbs = [];
  }
  disconnectedCallback() {
    clearTimeout(breadcrumbTimeout);
    clearTimeout(addbreadTimeout);
  }
  componentWillUpdate() {
    // Pass the menu type and menu-button-submenu-expand attributes to
    // the child menu-level-container component.
    this.el.children[0].setAttribute('menu-type', this.menuType);
    this.el.children[0].setAttribute('menu-button-submenu-expand', this.menuButtonSubmenuExpand);
  }
  componentWillRender() {
    // Set the donate link data.
    if (this.dataMenuDonate) {
      this.donateLink = JSON.parse(this.dataMenuDonate);
    }
    // Set demo value to all children to provide better UI for DS users.
    if (this.isDemo) {
      const items = Array.from(this.el.children);
      items.forEach((item) => {
        item.setAttribute('is-demo', 'true');
      });
    }
  }
  render() {
    if (this.menuType === null)
      return;
    switch (this.menuType) {
      case MenuType.desktop:
        return (h("div", { class: 'hy-wrapper' }, h("nav", { role: 'navigation', class: {
            'hy-menu-wrapper--desktop': true,
            'is-open': this.menuIsOpen,
          } }, h("div", { class: 'hy-menu hy-menu--desktop' }, h("slot", null)))));
      case MenuType.mobile:
        return (h("nav", { "data-is-group": this.isGroup, role: 'navigation', class: "hy-mobile-menu" }, h("section", { class: "hy-mobile-menu__header" }, h("div", { id: 'menu-bc-container', class: {
            'hy-mobile-menu__breadcrumbs': true,
            'is-empty': this.breadcrumbs.length === 0,
          } }, this.breadcrumbs.length ? (h("hy-menu-mobile-breadcrumb", { "label-back": this.menuButtonBreadcrumbReturn, "label-front-page": this.labelFrontPage, label: this.breadcrumbs[this.breadcrumbs.length - 1].label, bid: this.breadcrumbs[this.breadcrumbs.length - 1].bid })) : (h("hy-menu-mobile-breadcrumb", { "label-back": this.menuButtonBreadcrumbReturn, "label-front-page": this.menuButtonBreadcrumbHome, label: this.menuButtonBreadcrumbHome, "is-first": true, "logo-url": this.logoUrl }))), h("button", { class: `hy-mobile-menu__menu-close-button`, "aria-label": "Close menu", disabled: true, "aria-hidden": "true" }, h("span", null, "Close"), h("hy-icon", { icon: 'hy-icon-remove', size: 16 }))), h("section", { class: "hy-mobile-menu__menu-container" }, h("div", { "aria-hidden": `${!this.menuIsOpen}`, class: {
            'hy-menu': true,
            'hy-menu--mobile': true,
            'is-open': this.menuIsOpen,
            'is-demo': this.isDemo,
          } }, h("slot", null))), !this.isGroup && (h("div", { class: 'hy-mobile-menu__donate' }, this.donateLink
          ? this.donateLink.map((i) => (h("a", { href: i.url }, h("hy-icon", { icon: 'hy-icon-heart-support', fill: 'currentColor', size: 16 }), i.label)))
          : ''))));
    }
  }
  get el() { return getElement(this); }
};
Menu.style = menuCss;

const menuItemCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host(.hy-menu-item--mobile){--menu-item-display:flex;display:-webkit-box;display:-ms-flexbox;display:flex;margin-bottom:4px}:host(.hy-menu-item--mobile.hy-menu-item--alternative){border-bottom:0 none;border-top:1px solid black}:host(.hy-menu-item--mobile:last-of-type){border-bottom:0 none}:host(.hy-menu-item--mobile.is-hidden){visibility:hidden !important}:host(.hy-menu-item--mobile.is-hidden):focus{outline:none}:host(.hy-menu-item--sidenav){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;--hy-menu-item-sidenav-display:block}:host(.hy-menu-item--sidenav.is-active){display:block;visibility:visible}:host(.hy-menu-item--sidenav.is-active--child){display:block;visibility:visible}:host(.hy-menu-item--sidenav.in-active-trail){display:block;visibility:visible}:host(.hy-menu-item) a{font-size:1rem;line-height:20px;font-weight:600;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--brand-main);display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--main-font-family);letter-spacing:-0.5px;text-decoration:none;width:100%;padding:12px 16px}:host(.hy-menu-item) a:focus{outline:solid 2px var(--additional-yellow);outline-offset:-2px}:host(.hy-menu-item) a .hy-menu-item__label hy-icon{display:-webkit-inline-box !important;display:-ms-inline-flexbox !important;display:inline-flex !important;margin-left:6px;margin-right:0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}:host(.hy-menu-item) a .hy-menu-item__label hy-icon svg{fill:var(--brand-main)}:host(.hy-menu-item) a.hy-menu-item--mobile.first{font-size:1.3125rem;line-height:28px;font-weight:700;color:var(--brand-main-light);letter-spacing:-0.42px;padding:16px 0 16px 16px}:host(.hy-menu-item) a.hy-menu-item--mobile.is-active{color:var(--grayscale-black);position:relative}:host(.hy-menu-item) a.hy-menu-item--mobile.is-active:before{border-left:3px solid var(--grayscale-black);content:\"\";height:75%;left:10px;position:absolute;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}:host(.hy-menu-item) a.hy-menu-item--mobile.in-active-trail{font-weight:700;color:var(--grayscale-black)}:host(.hy-menu-item) a.hy-menu-item--mobile.in-active-trail:before{border-left-width:3px;height:55%}:host(.hy-menu-item) a.hy-menu-item--mobile.is-heading{font-size:1.3125rem;line-height:28px;font-weight:700;color:var(--brand-main-light);letter-spacing:-0.42px;padding:16px}:host(.hy-menu-item) a.hy-menu-item--mobile.is-heading.is-active,:host(.hy-menu-item) a.hy-menu-item--mobile.is-heading.in-active-trail{font-weight:700;background:transparent;border-bottom:0;color:var(--grayscale-black)}:host(.hy-menu-item) a.hy-menu-item--mobile.is-heading.is-active:before,:host(.hy-menu-item) a.hy-menu-item--mobile.is-heading.in-active-trail:before{border-left-width:3px;height:55%}:host(.hy-menu-item) a.hy-menu-item--mobile>hy-icon{-ms-flex-item-align:start;align-self:flex-start;margin-top:10px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}:host(.hy-menu-item) a.hy-menu-item--mobile hy-icon+.hy-menu-item__label{margin-left:10px}:host(.hy-menu-item) a.is-heading{display:inherit}@media (min-width: 75.0625rem){:host(.hy-menu-item) a.is-heading{display:none}}:host(.hy-menu-item) a.hy-menu-item--sidenav{font-size:1.125rem;line-height:24px;font-weight:700;color:var(--brand-main-light);display:var(--hy-menu-item-sidenav-display);font-family:var(--main-font-family);margin:10px 0;padding:8px 0}:host(.hy-menu-item) a.hy-menu-item--sidenav:focus{outline-offset:4px}:host(.hy-menu-item) a.hy-menu-item--sidenav:hover{color:var(--brand-main-nearly-black)}:host(.hy-menu-item) a.hy-menu-item--sidenav.is-active{color:var(--brand-main-nearly-black);text-decoration:none}:host(.hy-menu-item) a.hy-menu-item--sidenav.is-active .hy-menu-item__label{padding-bottom:0}:host(.hy-menu-item) a.hy-menu-item--sidenav.is-active--heading{font-size:1.625rem;line-height:40px;color:var(--brand-main-nearly-black);text-transform:uppercase}:host(.hy-menu-item) a.hy-menu-item--sidenav.is-active--heading .hy-menu-item__label{border-bottom:4px solid var(--brand-main-nearly-black);padding:0}:host(.hy-menu-item) a.hy-menu-item--sidenav.is-active--heading .hy-menu-item__label__icon{display:none}:host(.hy-menu-item) a.hy-menu-item--sidenav.is-active--child{color:var(--brand-main-light);text-decoration:none}:host(.hy-menu-item) a.hy-menu-item--sidenav .hy-menu-item__label__icon{color:var(--brand-main-light);display:inline-block;padding-left:5px}.is-active :host(.hy-menu-item) a.hy-menu-item--sidenav .hy-menu-item__label__icon{display:none}:host(.hy-menu-item) a.hy-menu-item--sidenav.is-parent{font-size:1rem;line-height:22px;font-weight:600;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--brand-main-light);display:-webkit-box;display:-ms-flexbox;display:flex;text-decoration:none}:host(.hy-menu-item) a.hy-menu-item--sidenav.is-parent:hover{color:var(--brand-main-nearly-black)}:host(.hy-menu-item) a.hy-menu-item--sidenav.is-parent:hover .hy-menu-item__label__icon{color:var(--brand-main-nearly-black)}:host(.hy-menu-item) a.hy-menu-item--sidenav.is-parent .hy-menu-item__label__icon{margin-right:8px}.hy-menu-item__button{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:transparent;border:0;border-bottom:0;border-right:0;border-top:0;cursor:pointer;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0;width:44px;position:relative;-ms-flex-negative:0;flex-shrink:0}.hy-menu-item__button:before{background-color:var(--grayscale-medium);width:1px;height:32px;content:\"\";display:inline-block;-webkit-transform:translateY(-50%);transform:translateY(-50%);top:50%;left:0;position:absolute}.hy-menu-item__button svg{fill:var(--grayscale-black)}";

let MenuItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.addBreadcrumb = createEvent(this, "addBreadcrumb", 7);
    this.menuContainerActiveTrail = createEvent(this, "menuContainerActiveTrail", 7);
    this.menuContainerToggled = createEvent(this, "menuContainerToggled", 7);
    this.routeClicked = createEvent(this, "routeClicked", 7);
    this.inActiveTrail = false;
    this.isActive = false;
    this.isActiveChild = false;
    this.isHeading = false;
    this.isParent = false;
    this.isDemo = false;
    this.isExternal = false;
    //@Prop() depth: number = 0;
    this.menuItemAlternative = false;
    this.menuLinkId = '';
    this.menuType = MenuType.desktop;
    this.menuButtonSubmenuExpand = '';
    this.ariaExpanded = false;
    this.depth = 0;
    this.hasChildren = null;
    this.label = '';
    this.parentAsHeading = '';
    this.parentExpanded = false;
    this.url = '';
  }
  // Listener for submenu expand button. Listener will toggle menu level
  // container and add its parent to breadcrumbs.
  handleClick() {
    this.menuContainerToggled.emit({
      triggerItem: this.menuLinkId,
      triggerType: 'add',
    });
    const currentParent = this.el.parentNode;
    let parentLabel = currentParent.parentElement.getAttribute('label')
      ? currentParent.parentElement.getAttribute('label')
      : this.menuButtonBreadcrumbMain;
    let isMainMenu = parentLabel == this.menuButtonBreadcrumbMain;
    this.addBreadcrumb.emit({
      url: this.url,
      label: parentLabel,
      bid: this.menuLinkId,
      isMainMenu: isMainMenu,
    });
  }
  componentWillLoad() {
    // If is-active class is added by system, add it to menu component as well.
    if (this.el.classList.contains('is-active')) {
      this.isActive = true;
    }
    // Notify breadcrumbs if item is in active trail.
    if (this.inActiveTrail && !this.isActive) {
      const currentParent = this.el.parentNode;
      let parentLabel = currentParent.parentElement.getAttribute('label')
        ? currentParent.parentElement.getAttribute('label')
        : this.menuButtonBreadcrumbMain;
      this.addBreadcrumb.emit({
        url: this.url,
        label: parentLabel,
        bid: this.menuLinkId,
      });
    }
    // If current menu item is active, trigger all parent menuLevelContainer
    // elements in the same active-trail to open the menu.
    if (this.isActive) {
      const getParents = (elem) => {
        let parents = [];
        while (elem.parentNode && elem.parentNode.nodeName.toLowerCase() != 'hy-menu') {
          elem = elem.parentNode;
          parents.push(elem);
        }
        return parents;
      };
      const parents = getParents(this.el);
      parents.forEach((element) => {
        if (element.tagName.toLowerCase() === 'hy-menu-item') {
          this.menuContainerActiveTrail.emit({
            triggerItem: element.getAttribute('menu-link-id'),
          });
        }
      });
    }
    this.hasChildren = this.el.getElementsByTagName('hy-menu-level-container').length >= 1;
  }
  render() {
    switch (this.menuType) {
      case MenuType.desktop:
        return (h(Host, { class: {
            'is-active': this.isActive,
            'hy-menu-item': true,
            'hy-menu-item--alternative': this.menuItemAlternative,
            'hy-menu-item--desktop': true,
            'is-demo': this.isDemo,
          } }, h("a", { "aria-current": this.isHeading.toString(), href: this.url, class: {
            'is-active': this.isActive,
            'in-active-trail': this.inActiveTrail,
            'is-heading': this.isHeading,
            'hy-menu-item--desktop': true,
            'is-demo': this.isDemo,
          } }, this.depth == 1 && (h("span", { class: "hy-menu-item__heading__icon" }, h("hy-icon", { icon: 'hy-icon-arrow-right', size: 40 }))), this.depth == 2 && (h("span", { class: "hy-menu-item__heading__icon" }, h("hy-icon", { icon: 'hy-icon-caret-right', size: 12 }))), h("span", { class: 'hy-menu-item__label' }, this.label)), this.hasChildren && h("slot", null)));
      case MenuType.mobile:
        return (h(Host, { class: {
            'is-active': this.isActive,
            'hy-menu-item': true,
            'hy-menu-item--alternative': this.menuItemAlternative,
            'hy-menu-item--mobile': true,
            'is-demo': this.isDemo,
          } }, h("a", { "aria-current": this.isHeading.toString(), href: this.url, class: {
            'is-active': this.isActive,
            'in-active-trail': this.inActiveTrail,
            'is-heading': this.isHeading,
            'hy-menu-item--mobile': true,
            'is-demo': this.isDemo,
            'is-external': this.isExternal,
            first: this.depth == 1,
          } }, this.depth !== 1 && !this.isHeading && h("hy-icon", { icon: 'hy-icon-caret-right', size: 10 }), h("span", { class: 'hy-menu-item__label' }, this.label, this.isExternal && h("hy-icon", { icon: 'hy-icon-arrow-right', size: 12 }))), this.hasChildren && (h("button", { "aria-haspopup": 'true', "aria-label": `Open submenu for ${this.label}`, onClick: () => this.handleClick(), class: 'hy-menu-item__button' }, h("hy-icon", { icon: 'hy-icon-caret-right', size: 16 }))), this.hasChildren && h("slot", null)));
      case MenuType.sidenav:
        let classAttributes = [
          'hy-menu-item--sidenav',
          this.isDemo ? 'is-demo' : '',
          this.isActive ? 'is-active' : '',
          this.isParent ? 'is-parent' : '',
          this.isActiveChild ? 'is-active--child' : '',
          this.inActiveTrail ? 'in-active-trail' : '',
          this.depth != null ? 'hy-menu-item--level-' + this.depth : '',
          this.isActive && this.hasChildren ? 'is-active--heading' : '',
        ];
        let anchorClassAttributes = [...classAttributes, this.isHeading ? 'is-heading' : ''];
        classAttributes = [...classAttributes, 'hy-menu-item'];
        return (h("li", { class: classAttributes.join(' ') }, h("a", { class: anchorClassAttributes.join(' '), href: this.url }, this.label), this.hasChildren && h("slot", null)));
    }
  }
  get el() { return getElement(this); }
};
MenuItem.style = menuItemCss;

const menuItemSidebarCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}.hy-menu-sidebar--container.sidebar-open .hy-menu-item-sidebar:not(.is-parent):not(.is-parent--sub-level) .hy-menu-item-sidebar__label,.hy-menu-sidebar--container.sidebar-open .hy-menu-item-sidebar:not(.is-parent):not(.is-parent--sub-level) .hy-menu-item__label__icon,.hy-menu-sidepanel--container.sidepanel-open .hy-menu-item-sidebar:not(.is-parent):not(.is-parent--sub-level) .hy-menu-item-sidebar__label,.hy-menu-sidepanel--container.sidepanel-open .hy-menu-item-sidebar:not(.is-parent):not(.is-parent--sub-level) .hy-menu-item__label__icon{background:-webkit-gradient(linear, right top, left top, from(#f5f5f5), to(#f8f8f8));background:linear-gradient(270deg, #f5f5f5 0%, #f8f8f8 100%)}.hy-menu-sidebar--container.sidebar-open .hy-menu-item-sidebar.is-parent .hy-menu-item-sidebar__label,.hy-menu-sidepanel--container.sidepanel-open .hy-menu-item-sidebar.is-parent .hy-menu-item-sidebar__label{background-color:none !important}.hy-menu-sidebar--container.sidebar-open .hy-menu-item-sidebar:not(.is-parent) .hy-menu-item-sidebar__label:hover,.hy-menu-sidepanel--container.sidepanel-open .hy-menu-item-sidebar:not(.is-parent) .hy-menu-item-sidebar__label:hover{background:var(--hover-gray) !important;text-decoration:underline}.hy-menu-sidebar--container.sidebar-open .hy-menu-item-sidebar:not(.is-parent) .hy-menu-item__label__icon:not([aria-expanded=true]):hover,.hy-menu-sidepanel--container.sidepanel-open .hy-menu-item-sidebar:not(.is-parent) .hy-menu-item__label__icon:not([aria-expanded=true]):hover{background:var(--hover-gray) !important;cursor:pointer}.hy-menu-sidebar--container.sidebar-open .hy-menu-item-sidebar:not(.is-parent) .hy-menu-item__label__icon:not([aria-expanded=true]):hover svg,.hy-menu-sidepanel--container.sidepanel-open .hy-menu-item-sidebar:not(.is-parent) .hy-menu-item__label__icon:not([aria-expanded=true]):hover svg{width:22px;height:22px}.hy-menu-sidebar--container.sidebar-open .hy-menu-item-sidebar:not(.is-parent) .hy-menu-item__label__icon[aria-expanded=true]:hover,.hy-menu-sidepanel--container.sidepanel-open .hy-menu-item-sidebar:not(.is-parent) .hy-menu-item__label__icon[aria-expanded=true]:hover{background:var(--brand-main);cursor:pointer;-webkit-transition:all 0.25s ease;transition:all 0.25s ease}.hy-menu-sidebar--container.sidebar-open .hy-menu-item-sidebar:not(.is-parent) .hy-menu-item__label__icon[aria-expanded=true]:hover .hy-menu-item__label__icon__svg,.hy-menu-sidepanel--container.sidepanel-open .hy-menu-item-sidebar:not(.is-parent) .hy-menu-item__label__icon[aria-expanded=true]:hover .hy-menu-item__label__icon__svg{-webkit-transform:rotate(180deg) translateX(2px);transform:rotate(180deg) translateX(2px)}.hy-menu-sidebar--container.sidebar-open .hy-menu-item-sidebar:not(.is-parent) .hy-menu-item__label__icon[aria-expanded=true]:hover svg,.hy-menu-sidepanel--container.sidepanel-open .hy-menu-item-sidebar:not(.is-parent) .hy-menu-item__label__icon[aria-expanded=true]:hover svg{width:22px;height:22px}.hy-menu-sidebar--container:not(.sidebar-open) .hy-menu-item-sidebar:not(.is-parent) .hy-menu-item-sidebar__label:hover{border:1px solid var(--brand-main);margin:-1px;text-decoration:underline}.hy-menu-sidebar--container:not(.sidebar-open) .hy-menu-item-sidebar:not(.is-parent) .hy-menu-item__label__icon:hover{border:1px solid var(--brand-main);margin:-1px;margin-left:7px;text-decoration:underline;cursor:pointer}.hy-menu-sidebar--container:not(.sidebar-open) .hy-menu-item-sidebar:not(.is-parent) .hy-menu-item__label__icon:hover svg{width:22px;height:22px}.hy-menu-item-sidebar{list-style-type:none;margin-bottom:6px;}.hy-menu-item-sidebar--label-container{font-size:0.875rem;line-height:20px;font-weight:600;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--brand-main-light);display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--main-font-family);-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;min-height:48px;padding:0;word-break:break-word}@media (min-width: 1601px){.hy-menu-item-sidebar--label-container{font-size:1rem;line-height:22px}}.hy-menu-item-sidebar:focus{outline-offset:4px}.hy-menu-item-sidebar>.hy-menu-level-container.hy-menu-level-container--sidepanel{display:none}.hy-menu-item-sidebar.hy-menu-item-sidebar--sidepanel.in-active-trail>.hy-menu-item-sidebar--label-container{border:1px solid var(--brand-main-light);text-decoration:none}.hy-menu-item-sidebar.hy-menu-item-sidebar--sidepanel.in-active-trail>.hy-menu-item-sidebar--label-container>.hy-menu-item__label__icon{background-color:var(--brand-main-light);border:none}.hy-menu-item-sidebar.hy-menu-item-sidebar--sidepanel.in-active-trail>.hy-menu-item-sidebar--label-container>.hy-menu-item__label__icon svg{fill:var(--grayscale-white)}.hy-menu-item-sidebar.hy-menu-item-sidebar--sidepanel.in-active-trail>.hy-menu-level-container--sidepanel{display:-webkit-box;display:-ms-flexbox;display:flex}.hy-menu-item-sidebar:not(.is-parent):not(.is-parent--sub-level).is-active-item>.hy-menu-item-sidebar--label-container{background:var(--grayscale-white) !important;text-decoration:none}.hy-menu-item-sidebar:not(.is-parent):not(.is-parent--sub-level).is-active-item>.hy-menu-item-sidebar--label-container>a.hy-menu-item-sidebar__label{border:1px solid var(--brand-main-light);border-right:0}.hy-menu-item-sidebar:not(.is-parent):not(.is-parent--sub-level).is-active-item>.hy-menu-item-sidebar--label-container>.hy-menu-item__label__icon{background:var(--brand-main-light);border:none;margin-left:4px}.hy-menu-item-sidebar:not(.is-parent):not(.is-parent--sub-level).is-active-item>.hy-menu-item-sidebar--label-container>.hy-menu-item__label__icon svg{fill:var(--grayscale-white)}.hy-menu-item-sidebar__label{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:var(--grayscale-white);color:var(--brand-main-light);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;padding:8px 10px 8px 20px;text-decoration:none;width:100%;word-break:break-word}.hy-menu-item-sidebar__label:focus{outline:none;-webkit-box-shadow:0 0 1px 1px rgba(55, 148, 224, 0.5);box-shadow:0 0 1px 1px rgba(55, 148, 224, 0.5);border-radius:none}.hy-menu-item-sidebar .hy-menu-item__label__icon{border-top:0;border-right:0;border-bottom:0;background:var(--grayscale-white);border-left:1px solid var(--brand-main-light);color:var(--brand-main-light);display:inline-block;position:relative;width:61.5px;margin-left:6px;min-height:48px}.hy-menu-item-sidebar .hy-menu-item__label__icon svg{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.hy-menu-item-sidebar .hy-menu-item__label__icon:focus{outline:none;-webkit-box-shadow:0 0 1px 1px rgba(55, 148, 224, 0.5);box-shadow:0 0 1px 1px rgba(55, 148, 224, 0.5);border-radius:none}.hy-menu-item-sidebar.is-parent{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;margin-bottom:10px;max-width:280px;padding-bottom:10px;width:calc(100% - 25px)}.hy-menu-item-sidebar.is-parent .hy-menu-item-sidebar--label-container{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:none;border:none;color:var(--brand-main-light);display:-webkit-box;display:-ms-flexbox;display:flex}.hy-menu-item-sidebar.is-parent .hy-menu-item-sidebar--label-container .hy-menu-item-sidebar__label{font-size:1.625rem;line-height:26px;background-color:transparent !important;font-family:var(--main-font-family);font-weight:bold;letter-spacing:-0.81px;padding:0;text-decoration:none;text-transform:uppercase}.hy-menu-item-sidebar.is-parent:hover span{background:none;border:none;margin:0}.hy-menu-item-sidebar.is-parent:hover a{border:none;color:var(--brand-main) !important;text-decoration:underline;margin:0}.hy-menu-item-sidebar.is-parent:hover .hy-menu-item__parent__icon__svg{fill:var(--brand-main-nearly-black)}.hy-menu-item-sidebar.is-parent .hy-menu-item__parent__icon{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;height:26px}.hy-menu-item-sidebar.is-parent .hy-menu-item__parent__icon__svg svg{fill:var(--brand-main-light)}.hy-menu-item-sidebar.is-parent.is-parent--sub-level{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;background:none;border-bottom:1px solid var(--brand-main-light);display:-webkit-box;display:-ms-flexbox;display:flex;margin-bottom:12px;padding-bottom:18px;position:absolute;-webkit-transform:translateY(calc(-100% - 12px));transform:translateY(calc(-100% - 12px));width:calc(100% - 25px)}.hy-menu-item-sidebar.is-parent.is-parent--sub-level .hy-menu-item-parent__icon{bottom:20px;left:-20px;position:absolute}.hy-menu-item-sidebar.is-parent.is-parent--sub-level *{text-transform:uppercase}.hy-menu-item-sidebar.is-parent.is-parent--sub-level svg{fill:var(--brand-main-light)}.hy-menu-item-sidebar.is-parent.is-parent--sub-level .hy-menu-item-sidebar__label:hover{background:none !important;text-decoration:underline}.hy-menu-item-sidebar.is-parent.is-parent--sub-level>.hy-menu-item-sidebar--label-container{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;margin:0 0 0 0.5rem;padding:0}.hy-menu-item-sidebar.is-current-page span.hy-menu-item-sidebar__label{border-left:4px solid var(--grayscale-black);color:var(--grayscale-black);padding:8px 10px 8px 6px !important}.hy-menu-item-sidebar.is-current-page.is-parent .hy-menu-item__parent__icon{display:none}";

let MenuItemSidebar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.addBreadcrumb = createEvent(this, "addBreadcrumb", 7);
    this.menuContainerActiveTrail = createEvent(this, "menuContainerActiveTrail", 7);
    this.menuContainerToggled = createEvent(this, "menuContainerToggled", 7);
    this.routeClicked = createEvent(this, "routeClicked", 7);
    this.inActiveTrail = false;
    this.isActive = false;
    this.isActiveChild = false;
    this.isHeading = false;
    this.isParent = false;
    this.isDemo = false;
    this.menuItemAlternative = false;
    this.menuLinkId = '';
    this.menuType = MenuType.sidenav;
    this.pageSize = MenuType.mobile;
    this.menuButtonSubmenuExpand = '';
    this.menuIsOpen = false;
    this.ariaExpanded = false;
    this.depth = 0;
    this.hasChildren = null;
    this.label = '';
    this.parentAsHeading = '';
    this.parentExpanded = false;
    this.url = '';
  }
  sidebarTopLevelToggle(e) {
    if (this.depth !== 0) {
      return;
    }
    const body = document.querySelector('body');
    const container = document.querySelector('.hy-menu-sidebar--container');
    const menuItem = e.target.closest('.hy-menu-item-sidebar');
    if (container.classList.contains('sidebar-open') && menuItem.classList.contains('is-active-item')) {
      container.classList.remove('sidebar-open');
      body.classList.remove('hy-menu-sidebar__no-scroll');
    }
    else {
      container.classList.add('sidebar-open');
      body.classList.add('hy-menu-sidebar__no-scroll');
    }
    e.preventDefault();
  }
  async componentWillLoad() {
    this.ro = new ResizeObserver$1((entries) => {
      for (const entry of entries) {
        this.applySize(entry.contentRect.width);
      }
    });
    this.ro.observe(document.body);
    // If is-active class is added by system, add it to menu component as well.
    if (this.el.classList.contains('is-active')) {
      this.isActive = true;
    }
    // If current menu item is active, trigger all parent menuLevelContainer
    // elements in the same active-trail to open the menu.
    if (this.isActive) {
      const getParents = (elem) => {
        let parents = [];
        while (elem.parentNode && elem.parentNode.nodeName.toLowerCase() != 'hy-menu-sidebar') {
          elem = elem.parentNode;
          parents.push(elem);
        }
        return parents;
      };
      const parents = getParents(this.el);
      for (let i = 0; i < parents.length; i++) {
        const element = parents[i];
        if (element.tagName.toLowerCase() === 'hy-menu-item-sidebar') {
          element.classList.add('is-hidden--child');
          this.menuContainerActiveTrail.emit({
            triggerItem: element.getAttribute('menu-link-id'),
          });
        }
      }
      // If current active menu item have children, set the child
      // menu-level-container open.
      if (this.el.children.length > 0) {
        this.el.children[0].setAttribute('class', 'is-open-on-top');
      }
    }
    if (this.inActiveTrail) {
      const currentParent = this.el.parentNode;
      if (this.menuType === MenuType.sidepanel) {
        currentParent.classList.add('is-open');
        const childList = this.el.querySelector('.hy-menu-level-container');
        if (childList) {
          childList.classList.add('is-open');
        }
      }
    }
    // Assign depth value to current menu item instance; 1st level, 2nd level, etc.
    this.hasChildren = this.el.getElementsByTagName('hy-menu-level-container').length >= 1;
    if (this.menuType === MenuType.sidenav) {
      let parentMenuItem = this.el.closest('hy-menu-item-sidebar');
      let nextParentMenuItem;
      if (parentMenuItem) {
        nextParentMenuItem = parentMenuItem.parentElement.closest('hy-menu-item-sidebar');
        if (nextParentMenuItem === parentMenuItem) {
          return;
        }
        else {
          if (nextParentMenuItem !== null) {
            this.parentAsHeading = nextParentMenuItem;
          }
        }
      }
    }
  }
  applySize(size) {
    // Set the menu-type based on the width of the browser.
    if (size <= 960) {
      this.pageSize = MenuType.mobile;
    }
    else {
      this.pageSize = MenuType.desktop;
    }
  }
  componentWillRender() {
    if (this.pageSize === MenuType.mobile)
      return;
  }
  render() {
    let classAttributes = [
      'hy-menu-item-sidebar',
      this.menuType ? `hy-menu-item-sidebar--${this.menuType}` : '',
      this.depth != null ? 'hy-menu-item--level-' + this.depth : '',
      this.isDemo ? 'is-demo' : '',
      this.isActive ? 'is-current-page' : '',
      this.isParent ? 'is-parent' : '',
      this.hasChildren ? 'has-children' : '',
      this.inActiveTrail ? 'is-active-item' : '',
      this.isActive && this.hasChildren ? 'is-active--heading' : '',
    ];
    let anchorClassAttributes = ['hy-menu-item-sidebar__label'];
    classAttributes = [...classAttributes];
    if (this.url) {
      return (h("li", { "data-link-id": `menu-link-sidebar-${this.menuLinkId}`, class: classAttributes.join(' '), "aria-current": this.isActive ? 'true' : 'false', "item-level": this.depth }, this.isParent && (h("span", { class: 'hy-menu-item__parent__icon' }, h("hy-icon", { class: 'hy-menu-item__parent__icon__svg', icon: 'hy-icon-caret-left', fill: 'currentColor', size: 10 }))), h("div", { class: "hy-menu-item-sidebar--label-container" }, this.isActive ? (h("span", { class: anchorClassAttributes.join(' ') }, this.label)) : (h("a", { class: anchorClassAttributes.join(' '), href: this.url }, this.label)), this.hasChildren && (h("button", { "aria-labelledby": this.label, "aria-expanded": this.inActiveTrail && !this.isActive ? 'true' : 'false', type: "button", class: 'hy-menu-item__label__icon', onClick: (e) => this.sidebarTopLevelToggle(e) }, h("hy-icon", { class: 'hy-menu-item__label__icon__svg', icon: 'hy-icon-caret-right', fill: 'currentColor', size: 18 })))), this.hasChildren && h("slot", null)));
    }
    else {
      return;
    }
  }
  get el() { return getElement(this); }
};
MenuItemSidebar.style = menuItemSidebarCss;

const menuLanguageCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}.menu-language{position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;height:100%}.menu-language__toggle{font-size:1rem;line-height:16px;font-weight:700;color:var(--grayscale-black);-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:transparent;border:0;display:inline-grid;font-family:var(--main-font-family);gap:4px;grid-template-columns:repeat(2, auto);letter-spacing:-0.7px;margin:0;padding:14px 10px;text-transform:uppercase;height:100%}@media (min-width: 75.0625rem){.menu-language__toggle{font-size:0.75rem;line-height:24px;font-weight:400;color:var(--brand-main-nearly-black);letter-spacing:-0.5px;grid-template-columns:repeat(3, auto);padding:0}}@media (min-width: 1601px){.menu-language__toggle{font-size:0.875rem;line-height:24px}}.menu-language__toggle:hover{color:var(--brand-main);cursor:pointer}.menu-language__toggle:hover svg{fill:var(--brand-main)}.menu-language__toggle:focus{outline:solid 2px var(--additional-yellow);outline-offset:2px}.menu-language__toggle hy-icon:first-of-type{display:none !important}@media (min-width: 75.0625rem){.menu-language__toggle hy-icon:first-of-type{display:-webkit-inline-box !important;display:-ms-inline-flexbox !important;display:inline-flex !important}}.menu-language__toggle[aria-expanded=true]{position:relative}.menu-language__toggle[aria-expanded=true]:after{content:\"\";position:absolute;height:4px;right:0;bottom:-1px;left:0;background-color:var(--grayscale-black)}.menu-language__toggle[aria-expanded=true] span+hy-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.is-group .menu-language__toggle{color:var(--grayscale-white)}.is-group .menu-language__toggle:hover{color:var(--grayscale-medium);cursor:pointer}.is-group .menu-language__toggle:hover svg{fill:var(--grayscale-medium)}.menu-language__dropdown{background-color:var(--grayscale-white);border-radius:0 0 5px 5px;-webkit-box-shadow:0 10px 10px rgba(0, 0, 0, 0.2);box-shadow:0 10px 10px rgba(0, 0, 0, 0.2);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;justify-items:center;right:-15px;margin:0;padding:8px;position:absolute;text-transform:uppercase;visibility:visible;width:-webkit-max-content;width:-moz-max-content;width:max-content;z-index:100;min-width:160px}.menu-language__dropdown[aria-hidden=true]{display:none}@media (min-width: 75.0625rem){.menu-language__dropdown{left:-15px;right:0}}.menu-language__links{margin:0;padding:0;list-style:none;display:grid;gap:4px}";

let MenuLanguage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.menuLanguageToggled = createEvent(this, "menuLanguageToggled", 7);
    this.isGroup = false;
    this.isMenuOpen = false;
  }
  // Close the language menu if user clicks anywhere outside the Menu language component.
  handleOutsideMenuClick(event) {
    this.isMenuOpen = false;
    event.stopPropagation();
  }
  // CLose the language menu if user opens the desktop menu panel.
  desktopMenuToggled() {
    this.isMenuOpen = false;
  }
  // CLose the language menu if user opens the search panel
  searchPanelToggled() {
    this.isMenuOpen = false;
  }
  // Close the language menu if user opens University main menu
  universityMainMenuPanelToggled() {
    this.isMenuOpen = false;
  }
  handleComponentFocus(event) {
    // Close desktop menu panel if it's open.
    this.menuLanguageToggled.emit();
    event.stopPropagation();
  }
  handleComponentClick(event) {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      // Close desktop menu panel if it's open.
      this.menuLanguageToggled.emit();
      const languageMenuSelector = event.target;
      this.adjustPosition(languageMenuSelector, this.el);
    }
    event.stopPropagation();
  }
  adjustPosition(languageMenuSelector, target) {
    const languagePanel = languageMenuSelector.shadowRoot.querySelectorAll(`.menu-language__dropdown`)[0];
    let headerHeight = '0';
    let hyHeader = this.isGroup
      ? target.closest('.hy-site-header__content-top')
      : target.closest('.hy-site-header');
    if (hyHeader) {
      let rectHeader = hyHeader.getBoundingClientRect();
      let rectLangMenu = languageMenuSelector.getBoundingClientRect();
      headerHeight = `${languageMenuSelector.offsetHeight + rectHeader.bottom + 8 - rectLangMenu.bottom}px`;
    }
    languagePanel.style.top = headerHeight;
  }
  async componentWillLoad() {
    this._dataMenuLanguage = await jsonParserWorker(this.dataMenuLanguage);
    this._labels = await jsonParserWorker(this.labels);
  }
  render() {
    const black = 'var(--brand-main-nearly-black)';
    const white = 'var(--grayscale-white)';
    const svgColor = this.isGroup ? white : black;
    const globeIconSize = this.isGroup ? 16 : 14;
    return (h("div", { class: {
        'menu-language': true,
        'is-open': this.isMenuOpen,
        'is-group': this.isGroup,
      } }, h("button", { class: {
        'menu-language__toggle': true,
      }, "aria-label": this.isMenuOpen ? this._labels['close'] : this._labels['open'], "aria-expanded": `${this.isMenuOpen}` }, h("hy-icon", { icon: 'hy-icon-globe', size: globeIconSize, fill: svgColor }), h("span", null, this._dataMenuLanguage.map(({ isActive, langCode }) => {
      if (isActive) {
        return langCode;
      }
    })), h("hy-icon", { icon: 'hy-icon-caret-down', size: 8, fill: svgColor })), h("div", { class: {
        'menu-language__dropdown': true,
      }, "aria-hidden": `${!this.isMenuOpen}` }, h("ul", { class: "menu-language__links" }, this._dataMenuLanguage.map((item) => {
      return (h("hy-menu-language-item", { "lang-code": item.langCode, url: item.url, label: item.label, abbr: item.abbr, "is-active": item.isActive, "is-disabled": item.isDisabled }));
    })))));
  }
  get el() { return getElement(this); }
};
MenuLanguage.style = menuLanguageCss;

const menuLanguageItemCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}.menu-language__link{font-size:1rem;line-height:24px;font-weight:600;color:var(--brand-main-light);font-family:var(--main-font-family);letter-spacing:-0.5px;overflow:hidden;text-decoration:none;padding:12px 12px;display:block}.menu-language__link:hover{background-color:var(--grayscale-background-box);color:var(--brand-main)}.menu-language__link.is-active{color:var(--grayscale-black);border:2px solid var(--grayscale-black)}.menu-language__link.is-disabled{color:var(--link-disabled)}.menu-language__link.is-disabled:hover{background-color:transparent;color:var(--link-disabled)}";

let SiteLanguage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isActive = false;
    this.isDisabled = false;
  }
  render() {
    return (h("li", { class: `menu-language__links-item` }, h("a", { href: this.url, class: {
        'is-active': this.isActive,
        'is-disabled': this.isDisabled,
        'menu-language__link': true,
      } }, this.label)));
  }
};
SiteLanguage.style = menuLanguageItemCss;

const menuLevelContainerCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}.hy-menu-level-container--mobile{background-color:var(--grayscale-white);display:block;height:0;left:0;position:absolute;top:0;-webkit-transform:translateX(100%);transform:translateX(100%);-webkit-transition:visibility 0.3s ease-in-out, opacity 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;transition:visibility 0.3s ease-in-out, opacity 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;transition:transform 0.3s ease-in-out, visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;transition:transform 0.3s ease-in-out, visibility 0.3s ease-in-out, opacity 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;visibility:hidden !important;width:100%}.hy-menu-level-container--mobile.is-open{height:auto;-webkit-transform:translateX(0);transform:translateX(0);visibility:visible !important;padding-bottom:96px}.hy-menu-level-container--mobile.hy-menu-level-container--level-0{padding-top:8px;position:relative}.hy-menu-level-container--mobile.hy-menu-level-container--level-0:before{background-color:var(--brand-main-light);content:\"\";display:block;height:3px;left:0;position:absolute;right:0;top:0}.hy-menu-level-container--mobile:focus{outline:0}.hy-menu-level-container--desktop{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;width:100%}.hy-menu-level-container--desktop.is-open{display:block;visibility:visible}.hy-menu-level-container--desktop:not(.hy-menu-level-container--level-0):not(.hy-menu-level-container--level-2){display:none}.hy-menu-level-container--desktop.hy-menu-level-container--level-2{background-color:var(--grayscale-background-box)}.hy-menu-level-container--sidepanel{background-color:var(--grayscale-white);border-left:1px solid rgba(0, 0, 0, 0.2);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100vh;left:0;margin:0;max-width:320px;padding-left:13px;padding-right:13px;padding-top:240px;position:absolute;top:0;visibility:visible;width:20%;z-index:123}.hy-menu-level-container--sidepanel:not(.hy-menu-level-container--level-0){display:none;min-height:var(--minHeight);-webkit-transform:translateX(calc(100% - 1px));transform:translateX(calc(100% - 1px))}.hy-menu-level-container--sidepanel:not(.hy-menu-level-container--level-0).active-trail-panel,.hy-menu-level-container--sidepanel:not(.hy-menu-level-container--level-0).is-open{display:-webkit-box;display:-ms-flexbox;display:flex;max-width:320px;width:20vw}.hy-menu-level-container--sidepanel.is-open,.hy-menu-level-container--sidepanel.active-trail-panel{height:100%;min-height:var(--minHeight)}.hy-menu-level-container--sidenav{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;margin:0;padding:0;position:relative}.hy-menu-level-container--sidenav:not(.hy-menu-level-container--level-0){opacity:0;visibility:hidden}.hy-menu-level-container--sidenav:not(.hy-menu-level-container--level-0).is-closed{-webkit-animation-direction:normal;animation-direction:normal;-webkit-animation-duration:0.25s;animation-duration:0.25s;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards;-webkit-animation-name:slide-panel-in;animation-name:slide-panel-in}.hy-menu-level-container--sidenav:not(.hy-menu-level-container--level-0).is-open{-webkit-animation-direction:normal;animation-direction:normal;-webkit-animation-duration:0.25s;animation-duration:0.25s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-name:slide-panel-in;animation-name:slide-panel-in;display:-webkit-box;display:-ms-flexbox;display:flex;max-width:320px;opacity:1;visibility:visible;width:20vw}.hy-menu-level-container--sidenav.is-open.is-open-on-top{display:none;-webkit-transform:none !important;transform:none !important}.hy-menu-level-container--sidenav:not(.hy-menu-level-container--level-0).hy-menu-level-container.is-open{max-width:320px;width:20vw}.hy-menu-level-container--sidenav .hy-menu-level-container--level-0{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%}.hy-menu-level-container--sidenav:not(.hy-menu-level-container--level-0){background-color:var(--grayscale-white);border-left:1px solid rgba(0, 0, 0, 0.2);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100vh;left:0;margin:-100vh 0;max-width:320px;min-height:var(--minHeight);padding-left:13px;padding-right:13px;position:absolute;-webkit-transform:translateX(calc(100% - 1px));transform:translateX(calc(100% - 1px));width:20vw;z-index:123}.hy-menu-level-container--sidenav:not(.hy-menu-level-container--level-0).hy-menu-level-container--level-1{-webkit-transform:translateX(100%) !important;transform:translateX(100%) !important}.hy-menu-level-container--sidenav .hy-menu-level-container--level-1{margin:-100vh 0;padding:100vh 13px;top:0}.hy-menu-level-container--sidenav .hy-menu-level-container--level-2,.hy-menu-level-container--sidenav .hy-menu-level-container--level-3,.hy-menu-level-container--sidenav .hy-menu-level-container--level-4,.hy-menu-level-container--sidenav .hy-menu-level-container--level-5,.hy-menu-level-container--sidenav .hy-menu-level-container--level-6,.hy-menu-level-container--sidenav .hy-menu-level-container--level-7{padding:100vh 13px;top:100vh}@-webkit-keyframes slide-panel-in{from{display:none;opacity:0;-webkit-transform:translateX(0);transform:translateX(0);z-index:1}25%{display:-webkit-box;display:flex}35%{-webkit-transform:translateX(calc(100% - 1px));transform:translateX(calc(100% - 1px))}to{opacity:1;z-index:123}}@keyframes slide-panel-in{from{display:none;opacity:0;-webkit-transform:translateX(0);transform:translateX(0);z-index:1}25%{display:-webkit-box;display:-ms-flexbox;display:flex}35%{-webkit-transform:translateX(calc(100% - 1px));transform:translateX(calc(100% - 1px))}to{opacity:1;z-index:123}}@-webkit-keyframes slide-panel-out{from{-webkit-transform:translateX(100%);transform:translateX(100%);opacity:1;z-index:123}25%{-webkit-transform:translateX(0);transform:translateX(0)}95%{opacity:0;z-index:1}to{display:none}}@keyframes slide-panel-out{from{-webkit-transform:translateX(100%);transform:translateX(100%);opacity:1;z-index:123}25%{-webkit-transform:translateX(0);transform:translateX(0)}95%{opacity:0;z-index:1}to{display:none}}";

let MenuLevelContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.menuType = MenuType.mobile;
    this.activeTrailTriggered = false;
    this.depth = 0;
    this.menuIsOpen = false;
  }
  // Add/Remove is-hidden class from each upper level menu-items
  // to make browsing more accessible.
  assignMenuItemClass(parentMenu, type) {
    if (!parentMenu)
      return;
    const items = Array.from(parentMenu.children);
    items.forEach((item) => {
      if (type === 'remove') {
        item.classList.remove('is-hidden');
      }
      else {
        item.classList.add('is-hidden');
      }
    });
  }
  // Listener for assigning active-trail for parent menu level container.
  menuContainerActiveTrail(data) {
    const currentMenuContainer = this.el.getAttribute('trigger-item');
    if (currentMenuContainer === data.detail.triggerItem) {
      this.activeTrailTriggered = true;
      this.menuIsOpen = true;
      this.assignMenuItemClass(this.el.parentElement.closest('hy-menu-level-container'), 'add');
    }
  }
  // Listener for opening and closing menu level container.
  menuContainerToggled(data) {
    // Toggle submenu.
    if (this.triggerItem == data.detail.triggerItem) {
      this.activeTrailTriggered = false;
      this.menuIsOpen = data.detail.triggerType != 'remove';
      this.assignMenuItemClass(this.el.parentElement.closest('hy-menu-level-container'), data.detail.triggerType);
      // Scroll to .hy-menu top.
      let hyMenu = this.el.parentElement.closest('hy-menu');
      hyMenu.shadowRoot.querySelector('.hy-menu').scrollTop = 0;
    }
  }
  componentWillUpdate() {
    // Pass the menu type and menu-button-submenu-expand attributes to
    // the child menu item component.
    if (this.menuType) {
      const items = Array.from(this.el.children);
      items.forEach((item) => {
        item.setAttribute('menu-type', this.menuType);
        item.setAttribute('menu-button-submenu-expand', this.menuButtonSubmenuExpand);
      });
    }
  }
  componentWillLoad() {
    // Set trigger item for each mobile menu level container and handle only submenus.
    // Add a heading element foreach level.
    if (this.menuType === MenuType.mobile) {
      if (this.menuLevel > 1) {
        const parentMenuItem = this.el.closest('hy-menu-item');
        this.triggerItem = parentMenuItem.getAttribute('menu-link-id');
        this.headingItem = Object.assign(Object.assign({}, this.headingItem), { url: parentMenuItem.getAttribute('url') });
        this.headingItem = Object.assign(Object.assign({}, this.headingItem), { label: parentMenuItem.getAttribute('label') });
        this.headingItem = Object.assign(Object.assign({}, this.headingItem), { isActive: window.location.pathname === this.headingItem.url });
      }
      else {
        this.triggerItem = 'home';
      }
    }
    // Set is-active-child and menu-level attributes to all sibling menu-items.
    if (this.menuType === MenuType.sidenav) {
      const parentMenuItem = this.el.closest('hy-menu-item-sidebar');
      if (parentMenuItem && parentMenuItem.classList.contains('is-active')) {
        this.menuIsOpen = true;
        const items = Array.from(this.el.children);
        items.forEach((item) => {
          item.setAttribute('is-active-child', 'true');
          item.setAttribute('menu-level', this.menuLevel.toString());
        });
      }
    }
  }
  render() {
    let classAttributes = ['hy-menu-level-container', 'hy-menu-level-container--level-' + this.depth];
    switch (this.menuType) {
      case MenuType.desktop:
        classAttributes = [...classAttributes, 'hy-menu-level-container--desktop'];
        return (h(Host, { class: classAttributes.join(' ') }, h("slot", null)));
      case MenuType.mobile:
        classAttributes = [...classAttributes, 'hy-menu-level-container--mobile'];
        if (this.depth === 1) {
          classAttributes = [...classAttributes, 'is-open'];
          return (h(Host, { "aria-expanded": this.menuIsOpen.toString(), class: classAttributes.join(' '), tabindex: '-1' }, h("slot", null)));
        }
        else {
          classAttributes = [...classAttributes, this.menuIsOpen ? 'is-open' : null];
          return (h(Host, { "aria-expanded": this.menuIsOpen.toString(), class: classAttributes.join(' '), tabindex: '-1' }, h("hy-menu-item", { label: this.headingItem.label, url: this.headingItem.url, isHeading: true, isActive: this.headingItem.isActive, "menu-type": 'mobile', depth: this.menuLevel }), h("slot", null), h("slot", { name: "shortcuts" })));
        }
      case MenuType.sidenav:
        if (this.depth === 0) {
          const shouldBeHidden = this.depth != null && this.depth === 0 ? 'is-open' : '';
          classAttributes = [...classAttributes, 'hy-menu-level-container--sidenav', shouldBeHidden];
          return (h("ul", { "data-menu-level": this.menuLevel, "data-depth": this.menuLevel, class: classAttributes.join(' ') }, h("slot", null)));
        }
        else {
          const isMenuOpen = this.menuIsOpen ? 'is-open_is-open__sub-level' : null;
          const shouldBeHidden = this.depth != null && this.depth === 0 ? 'is-open' : '';
          const parentMenuItem = this.el.closest('hy-menu-item-sidebar');
          const parentClone = parentMenuItem !== null ? parentMenuItem.cloneNode(true) : null;
          const parentLink = parentClone ? parentClone.querySelector('.hy-menu-item-sidebar__label') : null;
          classAttributes = [...classAttributes, 'hy-menu-level-container--sidenav', shouldBeHidden, isMenuOpen];
          return (h("ul", { "data-menu-level": this.menuLevel, "data-depth": this.menuLevel, class: classAttributes.join(' ') }, parentLink && (h("li", { class: "hy-menu-item-sidebar is-parent is-parent--sub-level" }, h("hy-icon", { class: 'hy-menu-item-parent__icon', icon: 'hy-icon-dot-arrow-right', fill: 'currentColor', size: 20 }), h("span", { "aria-level": this.depth, role: "heading", class: "hy-menu-item-sidebar--label-container", innerHTML: parentLink.outerHTML }))), h("slot", null)));
        }
      case MenuType.sidepanel:
        //const shouldBeHidden = (this.depth != null && this.depth === 1) ? 'is-open' : '';
        classAttributes = [...classAttributes, 'hy-menu-level-container--sidepanel'];
        const parentMenuItem = this.el.closest('hy-menu-item-sidebar');
        const parentClone = parentMenuItem ? parentMenuItem.cloneNode(true) : null;
        const parentLink = parentClone ? parentClone.querySelector('.hy-menu-item-sidebar__label') : null;
        return (h("ul", { "data-menu-level": this.depth, "data-depth": this.menuLevel, class: classAttributes.join(' ') }, parentLink ? (h("li", { class: "hy-menu-item-sidebar is-parent is-parent--sub-level" }, h("hy-icon", { class: 'hy-menu-item-parent__icon', icon: 'hy-icon-dot-arrow-right', fill: 'currentColor', size: 20 }), h("span", { "aria-level": this.depth, role: "heading", class: "hy-menu-item-sidebar--label-container", innerHTML: parentLink.outerHTML }))) : (h("li", { class: "hy-menu-item-sidebar is-parent is-parent--sub-level is-parent--frontpage" }, h("span", { class: 'hy-menu-item__parent__icon' }, h("hy-icon", { class: 'hy-menu-item__parent__icon__svg', icon: 'hy-icon-caret-left', fill: 'currentColor', size: 10 })), h("div", { class: "hy-menu-item-sidebar--label-container" }, h("a", { class: "hy-menu-item-sidebar__label", href: this.frontUrl }, this.frontLabel)))), h("slot", null)));
    }
  }
  get el() { return getElement(this); }
};
MenuLevelContainer.style = menuLevelContainerCss;

const hyMenuMainGroupCss = ":root{--brand-main:#0e688b;--brand-main-soft:#b1e7ff;--brand-main-bright:#48c5f8;--brand-main-light:#107eab;--brand-main-active:#005379;--brand-main-dark:#003146;--brand-main-nearly-black:#000222;--link-blue:#0479a4;--link-disabled:#767676;--grayscale-white:#fff;--grayscale-slightly-gray:#fefefe;--grayscale-light:#f8f8f8;--grayscale-medium:#d2d2d2;--grayscale-background-box:#f5f5f5;--grayscale-tabs-border:#e6e6e6;--grayscale-background-arrow:#dfdfdf;--grayscale-medium-dark:#979797;--grayscale-dark:#555555;--grayscale-dark-text:#222222;--grayscale-black:#000000;--additional-red-light:#e5053a;--additional-red-dark:#a31621;--additional-purple-light:#420039;--additional-yellow:#f9a21a;--additional-skyblue:#48c5f8;--additional-orange:#d14600;--additional-green-light:#96ba3c;--additional-green-dark:#006400;--hover-gray:#eaeaea}*{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--gutter-mobile:16px;--gutter-narrow:24px;--gutter-medium:24px;--gutter-wide:24px;--gutter-extrawide:32px}:root{--breakpoint-extrawide:75.0625rem;--breakpoint-max-width:75.0625rem;--breakpoint-medium:48rem;--breakpoint-narrow:30rem;--breakpoint-wide:60rem}:host{display:block}:host(.menu--main-group){-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row;flex-flow:row;margin-left:28px}@media (min-width: 75.0625rem){:host(.menu--main-group){margin-right:auto}}.menu--main-group__toggle{font-size:0.875rem;line-height:16px;font-weight:600;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:var(--grayscale-black);border:0 none;color:var(--grayscale-white);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row;flex-flow:row;font-family:var(--main-font-family);letter-spacing:-0.44px;margin:0 -4px;padding:0;position:relative}.menu--main-group__toggle:focus{outline:none}.menu--main-group__toggle:hover{cursor:pointer}.menu--main-group__toggle:hover span{color:var(--grayscale-medium)}.menu--main-group__toggle:hover svg{fill:var(--grayscale-medium)}@media (min-width: 60rem){.menu--main-group__toggle .toggle__caret svg{height:15.27px;width:3px}}@media (min-width: 75.0625rem){.menu--main-group__toggle .toggle__caret svg{height:14px;width:3px}}@media (min-width: 60rem){.menu--main-group__toggle span{margin-left:17px}}.menu--main-group__toggle.is-open:after{border-bottom:3px solid white;bottom:-10px;content:\" \";position:absolute;width:100%}@media (min-width: 60rem){.menu--main-group__toggle.is-open .toggle__close{height:15px;width:15px}.menu--main-group__toggle.is-open .toggle__close svg{height:15px;width:15px}}@media (min-width: 60rem){.menu--main-group__toggle.is-open span{margin-left:10px}}.menu--main-group__dropdown{display:none;visibility:hidden}.menu--main-group__dropdown.is-open{background-color:var(--grayscale-black);border-radius:0 0 5px 5px;-webkit-box-shadow:0 10px 10px rgba(0, 0, 0, 0.2);box-shadow:0 10px 10px rgba(0, 0, 0, 0.2);color:var(--grayscale-white);display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--main-font-family);left:0;margin:0;padding:6px 0 20px;position:absolute;top:0;visibility:visible;width:100%;z-index:511}.menu--main-group__dropdown.is-open .list{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;justify-items:center;padding-top:14px;position:relative}.menu--main-group__dropdown.is-open .panel-toggle{background-color:transparent;border:none;position:absolute;right:0;top:0}@media (min-width: 60rem){.menu--main-group__dropdown.is-open .panel-toggle{padding:26px 32px}}.menu--main-group__dropdown.is-open .panel-toggle__label{font-size:1rem;line-height:20px;font-weight:700;color:var(--grayscale-white);display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--main-font-family);letter-spacing:-0.5px;text-transform:uppercase}.menu--main-group__dropdown.is-open .panel-toggle__label__title{padding-right:12px}.menu--main-group__dropdown.is-open .panel-toggle__label:hover{cursor:pointer}.menu--main-group__dropdown.is-open .panel-toggle__label:hover span{color:var(--grayscale-medium)}.menu--main-group__dropdown.is-open .panel-toggle__label:hover svg{fill:var(--grayscale-medium)}.menu--main-group__dropdown.is-open .menu-main-link{font-size:1rem;line-height:20px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;font-family:var(--main-font-family);-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;margin-bottom:20px;text-decoration:none}@media (min-width: 75.0625rem){.menu--main-group__dropdown.is-open .menu-main-link{font-size:0.875rem;line-height:18px}}.menu--main-group__dropdown.is-open .menu-main-link:hover span{color:var(--grayscale-medium)}.menu--main-group__dropdown.is-open .menu-main-link:hover svg{fill:var(--grayscale-medium)}.menu--main-group__dropdown.is-open .menu--main-group__label{color:var(--grayscale-white);margin-left:12px}:host(.menu--main-group--mobile){-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row;flex-flow:row;position:relative}.menu--main-group__mobile-toggle{border:none;background:transparent;padding:15px 12px}.menu--main-group__mobile-toggle:hover{cursor:pointer}.menu--main-group__dropdown__top{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:23px}.menu--main-group__dropdown__close{border:none;background-color:transparent;padding:0;margin:0}.menu--main-group__dropdown__close:hover{cursor:pointer}.menu--main-group__logo-container .hy-site-logo__label.group{max-width:250px}.menu--main-group__dropdown__items{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.menu--main-group__dropdown__items .menu-main-link{font-size:0.9375rem;line-height:20px;background-color:var(--grayscale-dark-text);color:var(--grayscale-white);font-family:var(--main-font-family);letter-spacing:-0.5px;margin-bottom:8px;padding:14px 20px;text-decoration:none;width:100%}.menu--main-group__dropdown__items .menu-main-link:hover{text-decoration:underline}.menu--main-group__dropdown__donate{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background-color:var(--grayscale-dark-text);position:fixed;bottom:0;margin-left:-20px;width:100%}.menu--main-group__dropdown__donate .hy-link__donate.group{font-size:1rem;line-height:16px;font-weight:600;display:-webkit-box;display:-ms-flexbox;display:flex;color:var(--grayscale-white);font-family:var(--main-font-family);margin:20px auto 16px auto;text-decoration:none}.menu--main-group__dropdown__donate .hy-link__donate.group .hy-link__donate__label{margin-left:6px}.menu--main-group__dropdown--mobile{-webkit-box-direction:normal;-webkit-box-orient:vertical;background-color:var(--grayscale-black);bottom:0px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;justify-items:space-between;max-width:400px;overflow:hidden;padding:0px;place-items:stretch;position:fixed;right:0px;top:0px;-webkit-transform:translateX(100%);transform:translateX(100%);-webkit-transition:all 0.3s ease 0s;transition:all 0.3s ease 0s;visibility:hidden;width:0px}.menu--main-group__dropdown--mobile.is-open{padding:50px 20px 20px;-webkit-transform:translateX(0px);transform:translateX(0px);-webkit-transition:-webkit-transform 0.3s cubic-bezier(0, 0, 0.3, 1);transition:-webkit-transform 0.3s cubic-bezier(0, 0, 0.3, 1);transition:transform 0.3s cubic-bezier(0, 0, 0.3, 1);transition:transform 0.3s cubic-bezier(0, 0, 0.3, 1), -webkit-transform 0.3s cubic-bezier(0, 0, 0.3, 1);visibility:visible;width:90%;z-index:101}.menu--main-group__dropdown--mobile.is-open::after{opacity:1;visibility:visible}";

let keys$1 = {
  enter: 'Enter',
};
let HyMenuMainGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.universityMainMenuToggled = createEvent(this, "universityMainMenuToggled", 7);
    this.mobileMenuTopToggle = createEvent(this, "mobileMenuTopToggle", 7);
    this.menuLabel = 'University main menu';
    this.isMobile = false;
    this.isMenuOpen = false;
  }
  handleComponentClick(event) {
    event.stopPropagation();
    this.emitEvent();
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.adjustMainMenuPosition(event.target);
    }
  }
  handleComponentKeyDown(event) {
    event.stopPropagation();
    const key = event.code;
    let target = event.target;
    if (key === 'Escape' && this.isMenuOpen) {
      this.isMenuOpen = false;
      this.emitEvent();
    }
    if (target && [keys$1.enter].includes(key)) {
      this.isMenuOpen = !this.isMenuOpen;
      if (this.isMenuOpen) {
        this.emitEvent();
        this.adjustMainMenuPosition(target);
      }
    }
  }
  