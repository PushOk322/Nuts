
//**********************LAZY-LOAD******************************/
let lazyImages = document.querySelectorAll(".lazy");
let windowHeight = document.documentElement.clientHeight;
let lazyImagesPositions = [];
const currentScrollPosition = window.pageYOffset;
// const elementOffsetTop = document.getElementById(elementID).offsetTop
lazyImages.forEach(img => {
    lazyImagesPositions.push(img.offsetTop);
});

showScrollTop = () => {
    const currentScrollPosition = window.pageYOffset;

    for (let i = 0; i <= lazyImagesPositions.length; i++) {
        if (currentScrollPosition + 800 > lazyImagesPositions[i]) {
            delete lazyImagesPositions[i];
            lazyImages[i].classList.add('_active');
            console.log(1);
        }
    }

}

window.addEventListener('scroll', showScrollTop)






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



//***********PAGE-DEFINER*********** */

const pageDefiner = document.querySelector(".page-definer");
console.log(pageDefiner);
const headerLinks = document.querySelectorAll(".header__link");
console.log(headerLinks);
const headerLinksMobile = document.querySelectorAll(".header__link-mobile");
console.log(headerLinksMobile);
if (pageDefiner.classList.contains("index")) {
    headerLinks[0].classList.toggle("_active");
    headerLinksMobile[0].classList.toggle("_active");
};
if (pageDefiner.classList.contains("about")) {
    headerLinks[1].classList.toggle("_active");
    headerLinksMobile[1].classList.toggle("_active");
};
if (pageDefiner.classList.contains("payment")) {
    headerLinks[2].classList.toggle("_active");
    headerLinksMobile[2].classList.toggle("_active");
};
if (pageDefiner.classList.contains("_for-clients")) {
    headerLinks[3].classList.toggle("_active");
    headerLinksMobile[3].classList.toggle("_active");
};
if (pageDefiner.classList.contains("news") || pageDefiner.classList.contains("one-news")) {
    headerLinks[4].classList.toggle("_active");
    headerLinksMobile[4].classList.toggle("_active");
};
if (pageDefiner.classList.contains("contacts")) {
    headerLinks[5].classList.toggle("_active");
    headerLinksMobile[5].classList.toggle("_active");
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
                item.classList.remove('active')
            );
            navbarImages.forEach(item =>
                item.classList.remove('active')
            );

            navbarButtons[i].classList.add('active');
            navbarImages[i].classList.add('active');
        })
    }
}

if (tabsButtons) {
    for (let i = 0; i < tabsButtons.length; i++) {
        tabsButtons[i].addEventListener("click", function (e) {
            tabsButtons.forEach(item =>
                item.classList.remove('active')
            );
            tabsContents.forEach(item =>
                item.classList.remove('active')
            );

            tabsButtons[i].classList.add('active');
            tabsContents[i].classList.add('active');
        })
    }
}

if (productButtons) {
    for (let i = 0; i < productButtons.length; i++) {
        productButtons[i].addEventListener("click", function (e) {
            productButtons.forEach(item =>
                item.classList.remove('active')
            );
            productContents.forEach(item =>
                item.classList.remove('active')
            );

            productButtons[i].classList.add('active');
            productContents[i].classList.add('active');
        })
    }
}



//********SWIPER**********/
// import Swiper, { Navigation } from 'swiper';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';




const swiperProducts = new Swiper('.products-list__slider', {
    // modules: [Navigation],
    slidesPerView: 1,
    navigation: {
        nextEl: ".products-list-next",
        prevEl: ".products-list-prev",
    },
});

const swiperProductPage = new Swiper('.product-main__slider', {
    // modules: [Navigation],
    slidesPerView: 1,
    navigation: {
        nextEl: ".product-main-next",
        prevEl: ".product-main-prev",
    },
});

const swiperProducer = new Swiper('.about-producer__slider', {
    // modules: [Navigation],
    slidesPerView: 1,
    navigation: {
        nextEl: ".about-producer-next",
        prevEl: ".about-producer-prev",
    },
});

const swiperAboutProducer = new Swiper('.about-page-producer__slider', {
    // modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".about-page-producer-next",
        prevEl: ".about-page-producer-prev",
    },
});

const swiperCatalogProducer = new Swiper('.catalog-page-producer__slider', {
    // modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".catalog-page-producer-next",
        prevEl: ".catalog-page-producer-prev",
    },
});

const swiperMiniNews = new Swiper('.mini-news__slider', {
    // modules: [Navigation],
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



