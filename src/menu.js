let show = false; 

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")
const menuItems = menuSection.querySelectorAll(".links-menu li a");

menuToggle.addEventListener("click", () => {
  console.log('oi')
  document.body.style.overflow = show ? "hidden" : "initial"
  menuSection.classList.toggle("on", show)
  show = !show;
})

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    console.log('oi')
    document.body.style.overflow = "initial"
    menuSection.classList.remove("on")
    show = false;
  });
});
