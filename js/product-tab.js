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

// 사전 정보 : 각각의 문서의 시작점에서 tabPanel의 y축 위치 (문서의 시작점에서 부터 얼마나 아래 있는지)
// 요소의 Y 축위치 : window.scrollY + element.getBoundingClientRect.top();

const productTabPanelIdList = [
  'product-spec',
  'product-review',
  'product-inquiry',
  'product-shipment',
  'product-recommendation',
]

const productTabPanelList = productTabPanelIdList.map((panelId) => {
  const tabPanel = document.querySelector(`#${panelId}`)
  return tabPanel
})

const productTabPanelPositionMap = {}

function detectTabPanelPosition() {
  // 가각의 tabPanel의 y축 위치를 찾는다
  // productTabPanelPositionMap에 그 값을 업데이트
  productTabPanelList.forEach((panel) => {
    // id
    // y축 위치
    const id = panel.getAttribute('id')
    const position = window.scrollY + panel.getBoundingClientRect().top
    productTabPanelPositionMap[id] = position
  })
}

// load 이벤트 : 요소들을 모두다 렌더 됬을때....
// 1. 모두 로드되고 tabPanel의 위치를 파악해야함...
// 2. 화면 사이즈가 바뀌게 되면?! 요소의 Y값이 달라질때.. 새로 업데이트 되어야한다.
window.addEventListener('load', detectTabPanelPosition)
window.addEventListener('resize', detectTabPanelPosition)
