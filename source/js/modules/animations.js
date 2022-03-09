export default () => {
  window.addEventListener("load", function () {
    document.body.classList.add("loaded");
    let menuItems = document.querySelectorAll(".js-menu-link");
    menuItems.forEach((item) =>
      item.addEventListener("click", checkActiveClass)
    );

    function checkActiveClass(e, id) {
      if (e.target.dataset.href === `prizes`) {
        background.classList.add("active");
      } else {
        background.classList.remove("active");
      }
    }
  });
  const background = document.querySelector(".screen--background");
};
