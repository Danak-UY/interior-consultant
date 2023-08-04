const $menuTrigger = document.querySelector("#menu-trigger");
const $menuTriggerIcon = $menuTrigger.querySelector("span");
const $menuContent = document.querySelector("#menu-content");

const ICONS = {
  MENU: "menu",
  CLOSE: "close",
};

const toggleIcon = () => {
  if ($menuTriggerIcon.textContent.includes(ICONS.MENU)) {
    $menuTriggerIcon.textContent = ICONS.CLOSE;
  } else {
    $menuTriggerIcon.textContent = ICONS.MENU;
  }
};

$menuTrigger.addEventListener("click", () => {
  $menuContent.classList.toggle("active");
  $menuTriggerIcon.classList.toggle("rotate-full");
  document.body.classList.toggle("overflow-hidden");
  setTimeout(toggleIcon, 250);
});
