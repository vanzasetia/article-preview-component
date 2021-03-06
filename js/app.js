(function () {
  'use strict';
  const cardShareToggleButton = document.querySelector(
    '.js-cardShareToggleButton'
  );
  const shareOptionsElement = document.querySelector(
    '.js-shareOptionsElement'
  );

  const openShareOptionsElement = () => {
    shareOptionsElement.removeAttribute('hidden');
    cardShareToggleButton.classList.add('is-active');
  };

  const closeShareOptionsElement = () => {
    shareOptionsElement.setAttribute('hidden', '');
    cardShareToggleButton.classList.remove('is-active');
  };

  const toggleShareOptionsElement = () => {
    if (shareOptionsElement.hasAttribute('hidden')) {
      openShareOptionsElement();
    } else {
      closeShareOptionsElement();
    }
  };

  cardShareToggleButton.addEventListener(
    'click',
    toggleShareOptionsElement
  );
})();
