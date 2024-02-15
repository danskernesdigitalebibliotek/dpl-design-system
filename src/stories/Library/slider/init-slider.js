// When using the keyboard, and using the arrow controls, there is a mismatch
// when you tab from the controls into the actual slider.
// It always wants to add the focus to the first item in the slider,
// meaning the slider will be reset.
// We want to instead set focus on the first fully-visible slide.
// However, we obviously don't want to set the focus on this, if you're moving
// backwards (e.g. from slider => controls => whatever).
// We get around this, by creating a "focus controller" - e.g. a custom element
// that is created after the controls.
// When focus is introduced to the focus controller, it gets removed, and we set
// the focus to the first active slide.
// We create the FocusController whenever the focus is set on the controls, so
// that way, it's only when moving 'forwards' in the DOM tree that we hijack
// focus.
function createFocusController(swiper, controls) {
  const focusControllerClass = "slider__focus-controller";
  let focusController = controls.querySelector(`.${focusControllerClass}`);

  // If a focus controller already exists, we won't create a new one.
  if (focusController) {
    return;
  }

  // Creating our custom focus element.
  focusController = document.createElement("button");
  focusController.classList.add(focusControllerClass);
  controls.appendChild(focusController);

  // When focus is set to the controller, we find the first visible slide,
  // and set the focus to that.
  // We also remove the focus controller, to make sure that we can tab
  // backwards up the tree, without being hijacked.
  focusController.addEventListener("focus", () => {
    focusController.remove();

    const slides = swiper.querySelectorAll(".swiper-slide a");

    // Finding the first slide link, that is fully visible.
    const visibleSlide = Array.from(slides).find((element) => {
      const { left, right } = element.getBoundingClientRect();
      return left > 0 && right < window.innerWidth;
    });

    visibleSlide.focus();
  });
}

// Event listener for when focus is set on the slider controls.
function controlFocusInit(swiper) {
  const controls = swiper.querySelector(".slider__controls");

  if (!controls) {
    return;
  }

  controls.addEventListener("focusin", () => {
    createFocusController(swiper, controls);
  });
}

// SwiperJS has a hard time understanding how to deal with keyboard focus and
// setting the slider positioning.
// Because we have items with very different widths, and we use "auto" for
// the actual movement, the focus goes out of sync with the visual visibility.
// This function is called when the swiper is initialized.
// We listen on focus within the item wrapper, and when we detect it, we
// calculate our own transform value, overwriting SwiperJS.
function swiperWrapperEventInit(swiperWrapper) {
  swiperWrapper.addEventListener("focusin", () => {
    // eslint-disable-next-line no-param-reassign
    swiperWrapper.style.transitionDuration = "300ms";

    const activeSlide = swiperWrapper.querySelector(".swiper-slide-active");

    if (!activeSlide) {
      return;
    }

    let currentSibling = activeSlide;
    let translateWidth = 0;
    let sideMargins = 0;

    // Finding all previous siblings.
    while (currentSibling.previousSibling) {
      currentSibling = currentSibling.previousSibling;

      // Offset width only gives us the 'inner' width. We also need to get
      // the side margins.
      const style = getComputedStyle(currentSibling);
      sideMargins =
        parseInt(style.marginLeft, 10) + parseInt(style.marginRight, 10);

      // Set a new translate width, used in transform.
      translateWidth -= currentSibling.offsetWidth + sideMargins;
    }

    // Calculate a new translate value, for pulling the slider.
    // We add half of the latest known sidemargin, so the active slide doesn't
    // go flush against the screen.
    // eslint-disable-next-line no-param-reassign
    swiperWrapper.style.transform = `translate3d(${Math.floor(
      translateWidth + sideMargins / 2
    )}px, 0, 0)`;
  });
}

// Initialize the Swiper library, when the page is ready.
window.addEventListener("load", () => {
  // eslint-disable-next-line no-undef, @typescript-eslint/no-unused-vars
  const swiperInit = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: "5%",
    freeMode: true,
    centeredSlidesBounds: false,
    on: {
      init: (swiper) => {
        controlFocusInit(swiper.el);
        const swiperWrapper = swiper.el.querySelector(".swiper-wrapper");
        swiperWrapperEventInit(swiperWrapper);
      },
    },
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
