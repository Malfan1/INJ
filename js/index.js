// sliders

$(document).ready(function () {
    $('.my-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-b',
    variableWidth: true,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: '60px',
});
    
    
$('.slider-b').slick({
    arrows: false,
    fade: true,
    slidesToShow: 1,
    asNavFor: '.my-slider',
});

$('.news__slider').slick({
})
    
// $('.my-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
//     var totalPages = Math.ceil(slick.slideCount / slick.originalSettings.slidesToScroll);
//     var currentPage = Math.ceil((currentSlide + 1) / slick.originalSettings.slidesToScroll);
//     counter.innerText =  currentPage + '/' + totalPages;
// });
    
    var slider = $('.my-slider');
    $('.sl-count__total').text(slider.slick('getSlick').slideCount);
    slider.on('afterChange', function (event, slick, currentSlide) {
        $('.sl-count__current').text(currentSlide + 1);
    })
})


    


//anis

const pict = document.querySelectorAll('.my-slider .my-slider-item');
const arrows =  document.querySelectorAll('.slick-arrow')

arrows.forEach(i => {
    i.addEventListener('click', () => {
        console.log(pict.classList.contains('slick-current'));
    })
})

//tabs

let tab = function () {
    let tabNav = document.querySelectorAll('.nft-marketplaces__li'),
        tabCont = document.querySelectorAll('.nft-marketplaces__tab'),
        tabName;
    
    tabNav.forEach(i => {
        i.addEventListener('click', selectTabNav);
    })

    function selectTabNav() {
        tabNav.forEach(i => {
            i.classList.remove('is-active');
        });
        this.classList.add('is-active')

        tabName = this.getAttribute('data-tab-name');
        selectTab(tabName)
    }

    function selectTab(name) {
        tabCont.forEach(i => {
            i.classList.contains(name) ? i.classList.add('is-active') : i.classList.remove('is-active')
        })
    }
}

tab()

// modal

const menu = document.querySelector('.js-burger');
const modal = document.querySelector('.nav-mob');
const close = document.querySelector('.nav-mob__burger');

document.addEventListener('click', openCloseModal) 

function openCloseModal(e) {
    if (e.target.classList.contains('js-burger')) {
        document.body.classList.add('lock')
        modal.classList.add("active");
    } else if (e.target.classList.contains('js-close')) {
        document.body.classList.remove('lock')
        modal.classList.remove("active");
    }
}

//navigation

const menuLinks = document.querySelectorAll('.nav-mob__a[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(i => {
        i.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e) { 
        const menuLink = e.target;

        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);

            const gotoBlockVal = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (modal.classList.contains('active')) {
                document.body.classList.remove('lock')
                modal.classList.remove("active");
            }

            window.scrollTo({
                top: gotoBlockVal,
                behavior: 'smooth',
            });
            e.preventDefault();
        } 
    }
}