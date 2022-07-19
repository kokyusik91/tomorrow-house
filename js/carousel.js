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

const userGalleryMobile = tns({
  container: '.user-gallery.is-mobile .slider-list',
  // prev next 버튼 삭제
  controls: false,
  navContainer: '.user-gallery.is-mobile .thumbnail-list',
  navAsThumbnails: true,
  // 카드간의 px
  gutter: 4,
  // 바깥에 있는 간격 설정
  edgePadding: 16,
  loop: false,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
})

const userGalleryDesktop = tns({
  container: '.user-gallery.is-desktop .slider-list',
  // prev next 버튼 삭제
  controls: true,
  controlsContainer: '.user-gallery.is-desktop .user-gallery-controls',
  navContainer: '.user-gallery.is-desktop .thumbnail-list',
  navAsThumbnails: true,
  // 카드간의 px
  gutter: 6,
  // 바깥에 있는 간격 설정
  edgePadding: 75,
  loop: false,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
})
