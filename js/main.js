(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 600) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
        // if (window.pageYOffset > 962) {
        //     header.classList.add('header_active2');
        // } else {
        //     header.classList.remove('header_active2');
        // }
    }
} ());

// Burger handler

    (function() {
        const burgerItem = document.querySelector('.burger');
        const menu = document.querySelector ('.header__nav');
        const menuCloseItem = document.querySelector('.header__nav-close')
        burgerItem.addEventListener('click', () => {
            menu.classList.add('header__nav-active');
        });
        menuCloseItem.addEventListener('click', () => {
            menu.classList.remove('header__nav-active');
        })
    }());