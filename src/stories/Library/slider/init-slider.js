const sliders = document.querySelectorAll(".slider");

// Sliders should have cards in different sizes.
// We could do this server-side, but it is quite expensive, atleast in Drupal
// because of caching, and because they depend on an outer context.
sliders.forEach((slider) => {
  const cards = slider.querySelectorAll(".card");

  let index = 0;

  cards.forEach((card) => {
    index += 1;
    let variant = "large";

    if (index % 2 === 0) {
      variant = "x-large";
    }

    card.setAttribute("data-variant", variant);
  });
});

// Initialize the Swiper library, when the page is ready.
window.addEventListener("load", () => {
  // eslint-disable-next-line no-undef, @typescript-eslint/no-unused-vars
  const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: "5%",
    centeredSlidesBounds: true,
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
