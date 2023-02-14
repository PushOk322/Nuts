
//********MENU_BURGER**********/
const iconMenu = document.querySelector('.menu-icon');
const menuBody = document.querySelector('.header__mobile-menu');
if (iconMenu && menuBody) {
    const menuLinks = document.querySelector('.header__links');
    const menuButtons = document.querySelector('.header__buttons');
    const menuLower = document.querySelector('.header__lower');
    const menuLogo = document.querySelector('.header__logo');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}






//*********DROP-DOWN*******/

const dropdownButton = document.querySelectorAll('.select__header');
if (dropdownButton) {
    const arrow = document.querySelectorAll('.select__arrow');
    const panel = document.querySelectorAll('.select__body');
    const container = document.querySelectorAll('.select');
    for (let i = 0; i < dropdownButton.length; i++) {
        dropdownButton[i].addEventListener("click", function (e) {
            if (arrow[i].classList.contains('active')) {
                arrow[i].classList.remove('active');
                panel[i].classList.remove('active');
                container[i].classList.remove('active');
            } else {
                arrow[i].classList.add('active');
                panel[i].classList.add('active');
                container[i].classList.add('active');
            }
        })
        panel[i].addEventListener("click", function (e) {
            if (arrow[i].classList.contains('active')) {
                arrow[i].classList.remove('active');
                panel[i].classList.remove('active');
                container[i].classList.remove('active');
            } else {
                arrow[i].classList.add('active');
                panel[i].classList.add('active');
                container[i].classList.add('active');
            }
        })
    };

    const selectItem = document.querySelectorAll('.select__item');

    if (selectItem) {
        selectItem.forEach(item => {
            item.addEventListener('click', selectChoose)
        });
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select-current');
        currentText.innerText = text;
        this.closest('.select__body').classList.remove('active');
        // this.closest('.dropdown-container').classList.remove('active');
        this.closest('.select__arrow').classList.remove('active');
        arrow.forEach(item => {
            item.classList.remove('active');
        })
    }

}



const pageDefiner = document.querySelector(".page-definer");
const headerLinks = document.querySelectorAll(".header__link");
const headerLinksMobile = document.querySelectorAll(".header__link-mobile");
if (pageDefiner.classList.contains("index")) {
    headerLinks[0].classList.toggle("active");
    headerLinks[0].classList.toggle("active");
};
if (pageDefiner.classList.contains("projects") || pageDefiner.classList.contains("one-projects")) {
    headerLinks[1].classList.toggle("active");
    headerLinks[1].classList.toggle("active");
};
if (pageDefiner.classList.contains("about")) {
    headerLinks[2].classList.toggle("active");
    headerLinks[2].classList.toggle("active");
};
if (pageDefiner.classList.contains("blog") || pageDefiner.classList.contains("one-news")) {
    headerLinks[3].classList.toggle("active");
    headerLinks[3].classList.toggle("active");
};
if (pageDefiner.classList.contains("contacts")) {
    headerLinks[4].classList.toggle("active");
    headerLinks[4].classList.toggle("active");
};
if (pageDefiner.classList.contains("404")) {
    headerLinks[0].classList.toggle("active");
    headerLinks[0].classList.toggle("active");
};


//********NAVBAR*******/
const navbarButtons = document.querySelectorAll('.navbar__button');
const navbarImages = document.querySelectorAll('.navbar__img');
const tabsButtons = document.querySelectorAll('.tabs__button');
const tabsContents = document.querySelectorAll('.tabs__content');
const productButtons = document.querySelectorAll('.product-navbar__button');
const productContents = document.querySelectorAll('.product-navbar__content');
if (navbarButtons) {
    for (let i = 0; i < navbarButtons.length; i++) {
        navbarButtons[i].addEventListener("click", function (e) {
            navbarButtons.forEach(item =>
                item.classList.remove('_active')
            );
            navbarImages.forEach(item =>
                item.classList.remove('_active')
            );

            navbarButtons[i].classList.add('_active');
            navbarImages[i].classList.add('_active');
        })
    }
}

if (tabsButtons) {
    for (let i = 0; i < tabsButtons.length; i++) {
        tabsButtons[i].addEventListener("click", function (e) {
            tabsButtons.forEach(item =>
                item.classList.remove('_active')
            );
            tabsContents.forEach(item =>
                item.classList.remove('_active')
            );

            tabsButtons[i].classList.add('_active');
            tabsContents[i].classList.add('_active');
        })
    }
}

if (productButtons) {
    for (let i = 0; i < productButtons.length; i++) {
        productButtons[i].addEventListener("click", function (e) {
            productButtons.forEach(item =>
                item.classList.remove('_active')
            );
            productContents.forEach(item =>
                item.classList.remove('_active')
            );

            productButtons[i].classList.add('_active');
            productContents[i].classList.add('_active');
        })
    }
}

//********POPUP*******/
const formButtons = document.querySelectorAll('.popup-button');
const popup = document.querySelector('.popup__outer');
const cross = document.querySelector('.popup__cross');
if (formButtons && popup && cross) {
    for (let i = 0; i < formButtons.length; i++) {
        formButtons[i].addEventListener('click', (e) => {
            e.preventDefault();
            popup.classList.toggle("active");
            document.body.classList.add('_lock');
        });
    }
    cross.addEventListener('click', () => {
        popup.classList.toggle("active");
        document.body.classList.remove('_lock');
    });
};

const popupCompleteButton = document.querySelector('.popup-complete-button');
const popupComplete = document.querySelector('.popup-complete__outer');
const crossComplete = document.querySelector('.popup-complete__cross');
if (popupCompleteButton && popupComplete && crossComplete) {
    popupCompleteButton.addEventListener('click', (e) => {
        e.preventDefault();
        popupComplete.classList.toggle("active");
        document.body.classList.add('_lock');
    });
    crossComplete.addEventListener('click', () => {
        popupComplete.classList.toggle("active");
        document.body.classList.remove('_lock');
    });
};

//********POPUP*******END/




//********SWIPER**********/

const swiperProducts = new Swiper('.products-list__slider', {
    slidesPerView: 1,
    navigation: {
        nextEl: ".products-list-next",
        prevEl: ".products-list-prev",
    },
});

const swiperProductPage = new Swiper('.product-main__slider', {
    slidesPerView: 1,
    navigation: {
        nextEl: ".product-main-next",
        prevEl: ".product-main-prev",
    },
});

const swiperProducer = new Swiper('.about-producer__slider', {
    slidesPerView: 1,
    navigation: {
        nextEl: ".about-producer-next",
        prevEl: ".about-producer-prev",
    },
});

const swiperAboutProducer = new Swiper('.about-page-producer__slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".about-page-producer-next",
        prevEl: ".about-page-producer-prev",
    },
});

const swiperCatalogProducer = new Swiper('.catalog-page-producer__slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".catalog-page-producer-next",
        prevEl: ".catalog-page-producer-prev",
    },
});

const swiperMiniNews = new Swiper('.mini-news__slider', {
    slidesPerView: 3,
    spaceBetween: 32,
    navigation: {
        nextEl: ".mini-news-next",
        prevEl: ".mini-news-prev",
    },

    breakpoints: {
        // when window width is >= 320px
        200: {
            slidesPerView: 1,
            spaceBetween: 12,
        },
        500: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        // when window width is >= 480px
        769: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1025: {
            slidesPerView: 3,
            spaceBetween: 31,
        },
    },
});



