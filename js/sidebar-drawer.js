// drawer-menu-button을 클릭했을떄!
// drawer-menu 가 is-open

// 1. 이벤트 대상인 버튼을 찾아준다.
// const drawerMenuButton = document.querySelector(
//   '.sidebar-nav .drawer-menu-button'
// )

// 여러개

const drawerMenuButtonList = document.querySelectorAll(
  '.sidebar-navigation .drawer-menu-button'
)

function toggleDrawerMenu() {
  // 내가 누른 부모인 drawer-menu에게만 is-open 추가
  // this 는 drawerMenuButton .parentNode 로 부모를 찾을 수 있음.
  const drawerMenu = this.parentNode
  drawerMenu.classList.toggle('is-open')
}

drawerMenuButtonList.forEach(function (button) {
  button.addEventListener('click', toggleDrawerMenu)
})
