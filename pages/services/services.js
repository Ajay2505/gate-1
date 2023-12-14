const menuItems = document.querySelectorAll('li.menu_itself');
let timeoutIds = [];

function showMenu() {
clearTimeout(timeoutIds[this.dataset.menuIndex]);

// Hide other menu items after a slight delay
timeoutIds.forEach((timeoutId, index) => {
    if (index !== parseInt(this.dataset.menuIndex)) {
    clearTimeout(timeoutId);
    menuItems[index].classList.remove('show');
    }
});

this.classList.add('show');
}

function hideMenu() {
const menuIndex = this.dataset.menuIndex;
clearTimeout(timeoutIds[menuIndex]);

timeoutIds[menuIndex] = setTimeout(() => {
    this.classList.remove('show');
}, 300);
}

menuItems.forEach((menuItem, index) => {
menuItem.dataset.menuIndex = index;
menuItem.addEventListener('mouseenter', showMenu);
menuItem.addEventListener('mouseleave', hideMenu);
});

const navIcon = document.querySelector(".nav_bars_icon > a.bars");
if (navIcon) {
    navIcon.addEventListener("click", evt => {
        evt.currentTarget.parentElement.classList.toggle("active");
        document.querySelector("body").style.overflow = document.querySelector("body").style.overflow === "hidden" ? "auto" : "hidden";
    });
}
window.addEventListener("resize", evt => {
    if (navIcon && navIcon.parentElement?.classList.contains("active")) {
        navIcon.click();
    }
});

document.querySelector(".explore_cards").addEventListener("click", (evt) => {
    const hiddenCardsRow = document.querySelector(".section2 .content_wrapper .cards.d-none");
    if (hiddenCardsRow) {
        hiddenCardsRow.classList.remove("d-none");
    } else {
        const cards = document.querySelectorAll(".section2 .content_wrapper .cards");
        for (let idx = 1; idx < cards?.length; idx++) {
            cards[idx]?.classList.add("d-none");
        }
    }
    if (!document.querySelector(".section2 .content_wrapper .cards.d-none")) {
        evt.target.innerText = "Show Less";
    } else {
        evt.target.innerText = "explore more";
    }
});

document.querySelector(".services button.more").addEventListener("click", (evt) => {
    const hiddenCards = document.querySelectorAll(".services .card_content.d-none");
    if (hiddenCards?.length) {
        hiddenCards?.forEach(card => {
            card.classList.remove("d-none");
        });
    } else {
        const cards = document.querySelectorAll(".services .card_content");
        for (let idx = 3; idx < cards?.length; idx++) {       
            cards[idx]?.classList.add("d-none");
        }
    }
    if (!document.querySelectorAll(".services .card_content.d-none")?.length) {
        evt.target.innerText = "Show Less";
    } else {
        evt.target.innerText = "explore more";
    }
});

document.querySelector(".more_work_1").addEventListener("click", (evt) => {
    const hiddenCardsRow = document.querySelector(".work .first .row.d-none");
    if (hiddenCardsRow) {
        hiddenCardsRow.classList.remove("d-none");
    } else {
        const row = document.querySelectorAll(".work .first .row");
        for (let idx = 1; idx < row?.length; idx++) {       
            row[idx]?.classList.add("d-none");
        }
    }
    if (!document.querySelector(".work .first .row.d-none")) {
        evt.target.innerText = "Show Less";
    } else {
        evt.target.innerText = "explore more";
    }
});

document.querySelector(".more_work_2").addEventListener("click", (evt) => {
    const hiddenCardsRow = document.querySelector(".work .second .row.d-none");
    if (hiddenCardsRow) {
        hiddenCardsRow.classList.remove("d-none");
    } else {
        const row = document.querySelectorAll(".work .second .row");
        for (let idx = 1; idx < row?.length; idx++) {       
            row[idx]?.classList.add("d-none");
        }
    }
    if (!document.querySelector(".work .second .row.d-none")) {
        evt.target.innerText = "Show Less";
    } else {
        evt.target.innerText = "explore more";
    }
});

document.querySelector(".more_checks").addEventListener("click", (evt) => {
    const hiddenChecks = document.querySelectorAll(".features:not(.copy) .checks .check.d-none");
    if (hiddenChecks?.length) {
        hiddenChecks.forEach(check => {
            check.classList.remove("d-none");
        });
    } else {
        const checks = document.querySelectorAll(".features:not(.copy) .checks .check");
        for (let idx = 3; idx < checks.length; idx++) {
            checks[idx]?.classList.add("d-none");
        }
    }
    if (!document.querySelectorAll(".features:not(.copy) .checks .check.d-none")?.length) {
        evt.target.innerText = "Show Less";
    } else {
        evt.target.innerText = "explore more";
    }
});

document.querySelector(".accTwoBtn").addEventListener("click", (evt) => {
    const hiddenItems = document.querySelectorAll(".section2.copy .accordion-item.d-none");
    if (hiddenItems?.length) {
        hiddenItems.forEach(item => {
            item.classList.remove("d-none");
        });
    } else {
        const items = document.querySelectorAll(".section2.copy .accordion-item");
        for (let idx = 3; idx < items.length; idx++) {
            items[idx]?.classList.add("d-none");
        }
    }
    if (!document.querySelectorAll(".section2.copy .accordion-item.d-none")?.length) {
        evt.target.innerText = "Show Less";
    } else {
        evt.target.innerText = "explore more";
    }
});

document.querySelector(".features_copy_btn")?.addEventListener("click", (evt) => {
    const checks = document.querySelectorAll(".features.copy .checks");
    const hiddenChecks = document.querySelectorAll(".features.copy .checks .check.d-none");
    if (hiddenChecks?.length) {
        hiddenChecks.forEach(check => {
            check.classList.remove("d-none");
        });
        evt.target.innerText = "Show less";
    } else {
        checks.forEach(check => {
            for (let i = 2; i < check?.querySelectorAll(".check").length; i++) {
                check?.querySelectorAll(".check")[i]?.classList.add("d-none");
            }
            evt.target.innerText = "Explore more";
        });
    }
});

document.querySelector(".faq_more").addEventListener("click", (evt) => {
    const hiddenItems = document.querySelectorAll(".section2:not(.copy) .accordion-item.d-none");
    if (hiddenItems?.length) {
        hiddenItems.forEach(item => {
            item.classList.remove("d-none");
        });
    } else {
        const items = document.querySelectorAll(".section2:not(.copy) .accordion-item");
        for (let idx = 2; idx < items.length; idx++) {
            items[idx]?.classList.add("d-none");
        }
    }
    if (!document.querySelectorAll(".section2:not(.copy) .accordion-item.d-none")?.length) {
        evt.target.innerText = "Show Less";
    } else {
        evt.target.innerText = "explore more";
    }
});

const swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 1000,
    effect: 'easeIn',
    spaceBetween: 2,
    allowTouchMove: false,
    breakpoints: {
        480: {
            slidesPerView: 1,          
        },
        640: {
            slidesPerView: 2,          
        },
        1200: {
            slidesPerView: 3
        }
    }
});