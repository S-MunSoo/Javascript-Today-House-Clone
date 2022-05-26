const $sidebarToggleButton = document.querySelector(".side-bar-toggle");
const $sidebar = document.querySelector(".side-bar");
const $backdrop = document.querySelector(".back-drop");

$sidebarToggleButton.addEventListener("click", () => {
  $sidebar.classList.toggle("open");
  // 사이드바 토글 클릭시 백드록 열림
  $backdrop.style.display = "block";
});

$backdrop.addEventListener("click", () => {
  $sidebar.classList.toggle("open");
  $backdrop.style.display = "none";
});
