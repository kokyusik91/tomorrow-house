const sidebarMenuButton = document.querySelector('.gnb-icon-button.is-menu')
const sidebar = document.querySelector('.sidebar')
const sidebarOverlay = document.querySelector('overlay')

// 햄버거 메뉴를 눌렀을때 사이드바와 오버레이가 is-active
function openSidebar() {
  // 사이드바, 오버레이가 보이게
  // .is-active 붙이게
  // classList
  sidebar.classList.add('is-active')
  sidebarOverlay.classList.add('is-active')
}

function closeSidebar() {
  sidebar.classList.remover('is-active')
  sidebarOverlay.classList.remove('is-active')
}

sidebarMenuButton.addEventListener('click', openSidebar)

sidebarOverlay.addEventListener('click', closeSidebar)
