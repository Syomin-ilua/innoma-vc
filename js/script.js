// Бургер меню
const burgerBtn = document.querySelector('.burger__btn');
const burgerMenu = document.querySelector('.burger__menu_wrapper');

burgerBtn.addEventListener('click', function(e) {
    e.preventDefault();

    burgerBtn.classList.toggle('active');
    burgerMenu.classList.toggle('active');
});

// Табы 
const tabsCoutry = document.querySelectorAll('.markets__location_button');
const tabsContainer = document.querySelectorAll('.markets__wrapper_container');

tabsCoutry.forEach(tab => {
    tab.addEventListener('click', function(e) {
        e.preventDefault();

        let currentTab = tab.getAttribute('data-tab');
        let currentContainer = document.getElementById(currentTab);
        
        tabsCoutry.forEach(tabCounty => {
            tabCounty.classList.remove('active-button');
        });

        tabsContainer.forEach(tabContainer => {
            tabContainer.classList.remove('active-container');
        });

        tab.classList.add('active-button');
        currentContainer.classList.add('active-container');
        gsap.from('.markets__background', {opacity: 0, duration: 1});
        gsap.from('.markets__info_title', {opacity: 0, duration: 1, y: 30});
        gsap.from('.markets__info_subtitle', {opacity: 0, duration: 1, y: 30});
        gsap.from('.markets__button', {opacity: 0, duration: 1, x: -20});
        gsap.from('.markets__info_item', {opacity: 0, duration: 1, y: 30})
    });
});

document.querySelector('.markets__location_button').click();

// Аккордион для секции
const accordionHeader = document.querySelectorAll('.accordion__header');
const questions = document.querySelectorAll('.accordion__header'); 

accordionHeader.forEach(accordionHeaderItem => {
    accordionHeaderItem.addEventListener('click', function(e) {
        e.preventDefault();

        let accordionActual = accordionHeaderItem.getAttribute('data-accord');
        let moduleActual = document.getElementById(accordionActual);
        
        let content = moduleActual.nextElementSibling;
        
        if(content.style.maxHeight) {
            document.querySelectorAll('.accordion__text').forEach(el => {
                el.style.maxHeight = null;
            });
            questions.forEach(question => {
                question.classList.remove('active');
            });
        } else {
            document.querySelectorAll('.accordion__text').forEach(el => {
                el.style.maxHeight = null;
                moduleActual.classList.remove('active');
            });
            questions.forEach(question => {
                question.classList.remove('active');
            });
            moduleActual.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    })
});

// Слайдер 1
const swiper1 = new Swiper('.photo__swiper', {
    speed: 500,
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        566: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1050: {
            slidesPerView: 4,
            spaceBetween: 10,
        }
    }
});

const swiper2 = new Swiper('.experts__swiper', {
    speed: 500,
    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
    }, 
    breakpoints: {
        500: {
            slidesPerView: 2,  
        },
        800: {
            slidesPerView: 3,        
        },
        1100: {
            slidesPerView: 4,       
        }
    }
});

// Форма
const contactUSForm = document.querySelector('.contactUS__form');
contactUSForm.addEventListener('submit', function(e) {
    e.preventDefault();
});

// Модальное окно "Войти"
const overlay = document.querySelector('.overlay');

const modalAuthorization = document.querySelector('.modal__authorization');
const buttonLogin = document.querySelector('.button_login');
const modalAuthorizationCloseBtn = document.querySelector('.modal__authorization_closeBtn');
const modalAuthorizationForm = document.querySelector('.modal__authorization_form');

buttonLogin.addEventListener('click', function(e) {
    e.preventDefault();

    overlay.classList.add('active');
    modalAuthorization.classList.add('active');
    scrollController.disabledScroll();
});

modalAuthorizationCloseBtn.addEventListener('click', function(e) {
    e.preventDefault();

    overlay.classList.remove('active');
    modalAuthorization.classList.remove('active');
    scrollController.enabledScroll();
});

modalAuthorizationForm.addEventListener('submit', function(e) { 
    e.preventDefault();

    overlay.classList.remove('active');
    modalAuthorization.classList.remove('active');
    scrollController.enabledScroll();
});

overlay.addEventListener('click', function(e) { 
    e.preventDefault();

    overlay.classList.remove('active');
    if(modalAuthorization.classList.contains('active')) {
        modalAuthorization.classList.remove('active');
    } else {

    }
    scrollController.enabledScroll();
});

// Настройки для модальных окон

const scrollController = {
    scrollPosition: 0, 
    disabledScroll() {
        scrollController.scrollPosition = window.scrollY;
        document.body.style.cssText = `
            overflow: hidden;
            position: fixed;
            top: -${scrollController.scrollPosition}px;
            left: 0;
            height: 100vh;
            width: 100vw;
            padding-right: ${window.innerWidth - document.body.offsetWidth}px;
        `;
        document.documentElement.style.scrollBehavior = 'unset';
    },
    enabledScroll() {
        document.body.style.cssText = ``;
        window.scroll({top: scrollController.scrollPosition});
        document.documentElement.style.scrollBehavior = '';
    }
};

// Плавный скролл
const linksDesktop = document.querySelectorAll('.desktop__link');
const linksMobile = document.querySelectorAll('.mobile__link');

for(let link of linksDesktop) {
    link.addEventListener('click', function(e) { 
        e.preventDefault();

        const blockID = link.getAttribute('href');

        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}

for(let link of linksMobile) {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const blockID = link.getAttribute('href');

        burgerBtn.classList.remove('active');
        burgerMenu.classList.remove('active');

        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}

// Анимация для сайта


