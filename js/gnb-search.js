const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const deleteAllButton = gnbSearchHistory.querySelector(
  '.search-history-header button'
)
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol')

const deleteButtonList = gnbSearchHistoryList.querySelectorAll('.delete-button')

function openGnbSearchHistory() {
  // 체크 => gnbSearchHistoryList안에 li가 몇개 있는지
  // li가 0개 => 실행 X
  if (gnbSearchHistoryList.children.length === 0) {
    return
  }
  if (!gnbSearchHistory.classList.contains('is-active')) {
    window.addEventListener('click', closeGnbSearchHistory)
  }
  gnbSearchHistory.classList.add('is-active')
}

function closeGnbSearchHistory() {
  gnbSearchHistory.classList.remove('is-active')
  window.removeEventListener('click', closeGnbSearchHistoryOnClickingOutside)
}

function closeGnbSearchHistoryOnClickingOutside(e) {
  if (!gnbSearch.contains(e.target)) {
    closeGnbSearchHistory()
  }
}

function deleteAllSearchHistories() {
  // gnbSearchHistoryList 안에 들어 있는 모든 li를 삭제
  gnbSearchHistoryList.innerHTML = ''
  closeGnbSearchHistory()
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)

deleteAllButton.addEventListener('click', deleteAllSearchHistories)

function deleteSearchHistoryItem(e) {
  // 윈도우에게 이벤트 전파를 막는다.
  e.stopPropagation()
  // li 삭제
  const itemToDelete = this.parentNode
  // 부모 요소만이 자식 DOM을 지울 수 있다.
  gnbSearchHistoryList.removeChild(itemToDelete)

  if (gnbSearchHistoryList.children.length === 0) {
    closeGnbSearchHistory()
  }
}

deleteButtonList.forEach((button) => {
  deleteButtonList.addEventListener('click', deleteSearchHistoryItem)
})
