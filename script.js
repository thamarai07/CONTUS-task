document.addEventListener("DOMContentLoaded", function () {
  let productItems = document.querySelectorAll(".navbar_parent_li");
  let productsHiddenMegamenu = document.querySelector(
    ".navbar_child_ul--products"
  );
  let navbarChildUlServices = document.querySelector(
    ".navbar_child_ul--services"
  );
  let navbarParentLiMobileMenu = document.querySelector(
    ".navbar_parent_li--mobilemenu"
  );

  let isHoveredProducts = false;
  let isHoveredServices = false;

  const showMenu = (menu) => {
    if (menu === "products") {
      isHoveredProducts = true;
      productsHiddenMegamenu.classList.add("active");
    } else if (menu === "services") {
      isHoveredServices = true;
      navbarChildUlServices.classList.add("active");
    }
  };

  const hideMenu = (menu) => {
    if (menu === "products") {
      isHoveredProducts = false;
      setTimeout(() => {
        if (!isHoveredProducts) {
          productsHiddenMegamenu.classList.remove("active");
        }
      }, 100);
    } else if (menu === "services") {
      isHoveredServices = false;
      setTimeout(() => {
        if (!isHoveredServices) {
          navbarChildUlServices.classList.remove("active");
        }
      }, 100);
    }
  };

  productItems.forEach((item, index) => {
    if (index === 0) {
      item.addEventListener("mouseenter", () => showMenu("products"));
      item.addEventListener("mouseleave", () => hideMenu("products"));
    } else if (index === 1) {
      item.addEventListener("mouseenter", () => showMenu("services"));
      item.addEventListener("mouseleave", () => hideMenu("services"));
    }
  });

  productsHiddenMegamenu.addEventListener("mouseenter", () =>
    showMenu("products")
  );
  productsHiddenMegamenu.addEventListener("mouseleave", () =>
    hideMenu("products")
  );

  navbarChildUlServices.addEventListener("mouseenter", () =>
    showMenu("services")
  );
  navbarChildUlServices.addEventListener("mouseleave", () =>
    hideMenu("services")
  );

  let NavbarParentLiBar = document.querySelector(".navbar_parent_li--bar");

  NavbarParentLiBar.addEventListener("click", function () {
    NavbarParentLiBar.classList.toggle("active");
    navbarParentLiMobileMenu.classList.toggle("active");
  });

  document
    .querySelectorAll(".navbar_parent_li--mobilemenu ul .navbar_parent_li")
    .forEach((parentLi) => {
      parentLi.addEventListener("click", function () {
        const subMenu = this.nextElementSibling;

        if (subMenu && subMenu.classList.contains("navbar_child_li--sub")) {
          subMenu.classList.toggle("active");
        }
      });
    });

  // carousel
  let currentIndex = 0;
  const caseStudies = document.querySelectorAll(
    ".casestudies_bottom--wrapper--left"
  );
  const totalItems = caseStudies.length;

  const backgroundImages = [
    "./assets/case-studies/bg.png",
    "./assets/case-studies/bg.png",
  ];

  function updateCarousel() {
    caseStudies.forEach((item, index) => {
      item.style.display = index === currentIndex ? "block" : "none";
    });

    document.querySelector(
      ".casestudies_wrapper"
    ).style.backgroundImage = `url(${backgroundImages[currentIndex]})`;

    document.querySelector(".carousel-index").textContent = `${
      currentIndex + 1
    } / ${totalItems}`;
  }

  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
  }, 6000);
  updateCarousel();


  const ServicesBottomCard = document.querySelector(".services_bottom--card");
  const ShowMoreBtnService = document.querySelector(".showmore_btn--service");

  window.addEventListener("resize", function () {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 1024) {
      ServicesBottomCard.classList.add("hidden");
    } else {
      ServicesBottomCard.classList.remove("hidden");
    }
  });
  ShowMoreBtnService.addEventListener("click", function () {
    ServicesBottomCard.classList.toggle("hidden");
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const NavbarWrapper = document.querySelector("header");
  let previousScroll = 0;

  window.addEventListener("scroll", function () {
    const currentScroll = window.scrollY;

    if (currentScroll > previousScroll) {
      NavbarWrapper.classList.add("scroll-down");
      NavbarWrapper.classList.remove("scroll-up");
    } else {
      NavbarWrapper.classList.add("scroll-up");
      NavbarWrapper.classList.remove("scroll-down");
    }

    previousScroll = currentScroll;
  });
});
