const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')

function openGnbSearchHistory() {
  if (!gnbSearchHistory.classList.contains('is-active')) {
    window.addEventListener('click', closeGnbSearchHistory)
  }
  gnbSearchHistory.classList.add('is-active')
}

function closeGnbSearchHistory(e) {
  if (!gnbSearch.contains(e.target)) {
    gnbSearchHistory.classList.remove('is-active')
    window.removeEventListener('click', closeGnbSearchHistory)
  }
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)
