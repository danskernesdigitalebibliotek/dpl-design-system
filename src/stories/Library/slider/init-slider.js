// Initialize the Swiper library, when the page is ready.
window.addEventListener("load", () => {
  // eslint-disable-next-line no-undef, @typescript-eslint/no-unused-vars
  const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: "5%",
    freeMode: true,
    centeredSlidesBounds: false,
    a11y: {
      slideRole: "listitem",
    },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    breakpoints: {
      1200: {
        spaceBetween: 82,
      },
    },
  });
});
