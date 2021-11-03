(function () {
  "use strict";
  const cardShareToggleButton = document.querySelector(
    ".js-cardShareToggleButton"
  );

  const toggleShareOptionsElement = () => {
    const shareOptionsElement = document.querySelector(
      ".js-shareOptionsElement"
    );

    if (shareOptionsElement.hasAttribute("hidden")) {
      shareOptionsElement.removeAttribute("hidden");
      cardShareToggleButton.classList.add("is-active");
    } else {
      shareOptionsElement.setAttribute("hidden", "");
      cardShareToggleButton.classList.remove("is-active");
    }
  };

  cardShareToggleButton.addEventListener(
    "click",
    toggleShareOptionsElement
  );
})();
