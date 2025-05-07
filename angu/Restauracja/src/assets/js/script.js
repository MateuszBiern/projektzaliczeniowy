console.log("1223");
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burgerMenu");
  const menuItems = document.getElementById("menuItems");

  if (burgerMenu && menuItems) {
    burgerMenu.addEventListener("click", function (e) {
      e.stopPropagation();
      this.classList.toggle("active");
      menuItems.style.display =
        menuItems.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function () {
      burgerMenu.classList.remove("active");
      menuItems.style.display = "none";
    });

    menuItems.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }
});
