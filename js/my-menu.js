const myMenu = document.querySelector('.my-menu')
const myMenuButton = document.querySelector('.my-menu-button')

function toggleMyMenu() {
  if (!myMenu.classList.contains('is-active')) {
    window.addEventListener('click', closeMyMenuOnClickingOutside)
  }
  myMenu.classList.toggle('is-active')
}

myMenuButton.addEventListener('click', toggleMyMenu)

// 마이메뉴 이외의 영역을 클릭했을때 닫히게
// 누를 대상이 명확하지 않다.. 나머지 요소들에게 다 걸어줄수 없다
// window에게 걸어준다.

function closeMyMenuOnClickingOutside(e) {
  if (!myMenu.contains(e.target)) {
    myMenu.classList.remove('is-active')
    window.removeEventListener('click', closeMyMenuOnClickingOutside)
  }
}

// 1. 내가 클릭한 요소가 무엇인지? => e.target
// 2. myMenu가 요소를 포함하고 있는지를 알 수 있는 방법
// contains
