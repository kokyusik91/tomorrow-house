const orderCta = document.querySelector('.order-cta')

// 구매하기
// const orderCtaBuyButton = orderCta.querySelector('.btn-primary')
// const orderCtaBuyButton = orderCta.children[1]
// const orderCtaBookmarkButton = orderCta.children[0]
// 비구조화 할당
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children

const orderModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')

// 다음 형제 요소 찾기
// orderModal.nextElementSibling
// // 이전 형제 요소 찾기
// orderModal.previousElementSibling
// // 자식요소
// orderCta.children // 버튼 2개가 리스트 []로 나온다.

function openOrderModal() {
  orderModal.classList.add('is-open')
  orderModalOverlay.classList.add('is-active')
}

function closeOrderModal() {
  orderModal.classList.remove('is-open')
  orderModalOverlay.classList.remove('is-active')
}

orderCtaBuyButton.addEventListener('click', openOrderModal)
orderModalOverlay.addEventListener('click', closeOrderModal)

orderCtaBookmarkButton.addEventListener('click', toggleOrderCtaBookmark)

// 북마크 버튼을 눌렀을때
function toggleOrderCtaBookmark() {
  // 1. 버튼에게 is-active 클래스
  // 2. icon 클래스가 변경 되어야 한다. => ic-bookmark-filled
  // 3. 카운트 숫자 값을 변경해햐한다.
  const [icon, countSpan] = this.children
  // 숫자의 콤마 제거
  const count = Number(countSpan.innerHTML.replaceAll(',', '')) // 18,302 => 18302
  let newCount = count
  // NOTE : 활성화 된 상태이므로 => 비 활성화를 시켜라
  if (this.classList.contains('is-active')) {
    icon.classList.add('ic-bookmark')
    icon.classList.remove('ic-bookmark-filled')
    newCount = newCount - 1
  } else {
    icon.classList.add('ic-bookmark-filled')
    icon.classList.remove('ic-bookmark')
    newCount = newCount + 1
  }
  // 버튼에 is-active를 붙였다 띄었다.
  this.classList.toggle('is-active')
  // 콤마를 붙여주는 작업
  countSpan.innerHTML = newCount.toLocaleString()
  // html 속성을 바꾸고 싶은녀석 ("뭘바꿀거냐", "어떤값을 넣어줄거냐")
  countSpan.setAttribute('aria-label', `북마크 ${newCount.toLocaleString()}회`)
}

// is-active가 있으면 , ic-bookmark로 클래스 변경

// is-active가 없으면, ic-bookmarkfilled로 클래스 변경
