// div
const productTab = document.querySelector('.product-tab')

const productTabButtonList = productTab.querySelectorAll('button')

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

productTabButtonList.forEach((button) => {
  button.addEventListener('click', toggleActiveTab)
})
