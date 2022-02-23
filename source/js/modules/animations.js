export default () => {
  window.addEventListener("load", function () {
    document.body.classList.add("loaded");

    function backgroundAnimate(id, selector) {
      if (document.querySelector(id).classList.length === 2) {
        selector.classList.add("active");
      }
    }

    backgroundAnimate("#prizes", background);
  });
  const background = document.querySelector(".screen--background");
};
