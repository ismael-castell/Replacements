/**
 * @function WombatAsyncCtaHandler
 * @param {!HTMLElement} scopeElement
 */

function WombatAsyncCtaHandler(scopeElement) {
  const Behavior = {
    UNSPECIFIED: '0',
    REDIRECT: '1',
    JOIN_WAITLIST: '2',
    SIGN_IN_AND_JOIN_WAITLIST: '3',
    LEAVE_WAITLIST: '4',
    ADD_TO_CART: '5',
    DISABLED: '6',
  };
  let observer;

  const loginUrl =
      'https://accounts.google.com/ServiceLogin?ltmpl=googlestore&continue=';

  const observeCTAState = () => {
    observer = new MutationObserver(([mutation], observer) => {
      if (mutation.type === 'attributes') {
        compareAndUpdateCTA();
        observer.disconnect();
      }
    });

    observer.observe(
        scopeElement,
        {attributes: true, attributeFilter: ['data-cta-behavior']});
  };

  /**
   * Update button Url & text if PDB CTA is different than current button
   */
  const compareAndUpdateCTA = () => {
    const pdbBarButton = document.getElementById('pdp-bar-cta-button');

    // Update current buttons text if it does not match PDB CTA text
    if (pdbBarButton && shouldUpdateText(pdbBarButton)) {
      scopeElement.textContent = pdbBarButton.textContent;
    }

    // Update current buttons Url if it does not match PDB CTA Url
    if (pdbBarButton && shouldUpdateUrl(pdbBarButton)) {
      scopeElement.dataset.ctaBehavior = Behavior.REDIRECT;
      scopeElement.dataset.ctaUrl = pdbBarButton.dataset.ctaTargetUrl;
    }
  };

  const shouldUpdateText = pdbBarButton =>
      pdbBarButton.textContent !== scopeElement.textContent;

  const shouldUpdateUrl = pdbBarButton => pdbBarButton.dataset.ctaTargetUrl &&
      (pdbBarButton.dataset.ctaTargetUrl !== scopeElement.dataset.ctaUrl);


  const handleAsyncCtaClick = () => {
    const docid = scopeElement.dataset.docid;
    switch (scopeElement.dataset.ctaBehavior) {
      case Behavior.REDIRECT:
        if (scopeElement.dataset.ctaUrl) {
          mannequinService.navigateToUrl(scopeElement.dataset.ctaUrl);
        }
        break;
      case Behavior.JOIN_WAITLIST:
        scopeElement.disabled = true;
        mannequinService.joinWaitlist(docid).then(() => {
          scopeElement.disabled = false;
        });
        break;
      case Behavior.SIGN_IN_AND_JOIN_WAITLIST:
        const encodedHref = encodeURIComponent(location.href);
        mannequinService.navigateToUrl(`${loginUrl}${encodedHref}`);
        break;
      case Behavior.LEAVE_WAITLIST:
        scopeElement.disabled = true;
        mannequinService.leaveWaitlist(docid).then(() => {
          scopeElement.disabled = false;
        });
        break;
      case Behavior.ADD_TO_CART:
        scopeElement.disabled = true;
        mannequinService.addToCart(docid).then(({redirectUrl}) => {
          mannequinService.navigateToUrl(redirectUrl);
        });
        break;
      case Behavior.UNSPECIFIED:
      case Behavior.DISABLED:
      default:
        // do nothing
    }
  };

  this.init = function(){}