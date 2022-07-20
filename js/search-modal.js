// search modal
// overlay
// 취소버튼
// 돋보기 버튼

const searchModal = document.querySelector('.search-modal')
const searchOverlay = document.querySelector('.overlay')
const searchButton = document.querySelector('.gnb-icon-button.is-search')

// 🥰 searchModal 요소 안에 녀석중에서 찾겠다. (검색 범위 줄일수 있음)
const searchModalCloseButton = searchModal.querySelector('.btn-ghost')

function openSearchModal() {
  searchModal.classList.add('is-active')
  searchOverlay.classList.add('is-active')
}

function closeSearchModal() {
  searchModal.classList.remove('is-active')
  searchOverlay.classList.remove('is-active')
}

searchButton.addEventListener('click', openSearchModal)

searchModalCloseButton.addEventListener('click', closeSearchModal)
