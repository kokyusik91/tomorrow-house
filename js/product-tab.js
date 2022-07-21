// div
const productTab = document.querySelector('.product-tab')

const productTabButtonList = productTab.querySelectorAll('button')

const TOP_HEADER_DESKTOP = 80 + 50 + 54
const TOP_HEADER_MOBILE = 50 + 40 + 40

// 현재 active 되있는 정보를 업데이트 해줌
let currentActiveTab = productTab.querySelector('.is-active')

function toggleActiveTab() {
  // 1.  button을 클릭하면 is-active 됨
  // 2. 하지만 기존에 선택된 애들은 해젝가 되어야함. (어떤녀석이 is-active 되어야함)
  const tabItem = this.parentNode

  if (currentActiveTab !== tabItem) {
    tabItem.classList.add('is-active')
    currentActiveTab.classList.remove('is-active')
    currentActiveTab = tabItem
  }
}

function scrollToTabPanel() {
  // product-tab-item에 연결된 aria-labelledby 값으로 어느 tabpanel에 연결되어있는지 확인!
  const tabPanelId = this.parentNode.getAttribute('aria-labelledby')
  const tabPanel = document.querySelector(`#${tabPanelId}`) // #product-review

  const scrollAmount =
    tabPanel.getBoundingClientRect().top -
    (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP : TOP_HEADER_MOBILE)

  window.scrollBy({
    top: scrollAmount,
    // 얼마나 스크롤을 시켜야 하는가.
    behavior: 'smooth',
  })
}

productTabButtonList.forEach((button) => {
  // 두개의 이벤트 핸들러가 동작됨. 다른 함수로 분할해 놓는게 좋음...
  button.addEventListener('click', toggleActiveTab)
  button.addEventListener('click', scrollToTabPanel)
})
