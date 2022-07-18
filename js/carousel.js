const productCarousel = tns({
  container: '.silder-list',
  controls: false,
  navContainer: '.thumbnail-list',
  navAsThumbnails: true,
  arrowKeys: true,
  autoplay: true,
  autoplayHoverPause: false,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
})

const userGallery = tns({
  container: '.user-gallery .slider-list',
  // prev next 버튼 삭제
  controls: false,
  // 카드간의 px
  gutter: 4,
  // 바깥에 있는 간격 설정
  edgePadding: 16,
  loop: false,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,

  responsive: {
    768: {
      gutter: 6,
      controls: true,
      edgePadding: 75,
    },
  },
})
