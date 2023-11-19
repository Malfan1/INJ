// sliders

$(document).ready(function () {
    $('.my-slider').slick({
        
    slidesToScroll: 6,
    dots: true,
    slidesToShow: 6,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.slider-b',
    variableWidth: true,
    
    
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '60px',
                dots: false,
                infinite: true,
                arrows: true,
            }
        }
    ]
    
});
    
    
$('.slider-b').slick({
    arrows: false,
    fade: true,
    slidesToShow: 1,
    asNavFor: '.my-slider',
});

$('.news__slider').slick({
    slidesToScroll: 3,
    slidesToShow: 3,
    arrows: false,
    dots: true,
    focusOnSelect: true,


    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1,
                arrows: true,
                dots: false,
                }
        }
    ]
})
    
var slider = $('.my-slider');
$('.sl-count__total').text(slider.slick('getSlick').slideCount);
slider.on('afterChange', function (event, slick, currentSlide) {
    $('.sl-count__current').text(currentSlide + 1);
})

$('.my-slider2').slick({
slidesToScroll: 8,
    dots: true,
    slidesToShow: 8,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.slider-b2',
    variableWidth: true,
    
    
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '60px',
                dots: false,
                infinite: true,
                arrows: true,
            }
        }
    ]
});
    
    
$('.slider-b2').slick({
    arrows: false,
    fade: true,
    slidesToShow: 1,
    asNavFor: '.my-slider2',
});
    
var slider = $('.my-slider2');
$('.sl-count2__total').text(slider.slick('getSlick').slideCount);
slider.on('afterChange', function (event, slick, currentSlide) {
    $('.sl-count2__current').text(currentSlide + 1);
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

// navigation

const links = document.querySelectorAll("a.yakor");

links.forEach((i, n) => {
    i.addEventListener('click', function(e) {
        e.preventDefault();

        // links.forEach(a => a.classList.remove('hov'))        
        // this.classList.add("hov");      

        
        const href = this.getAttribute('href').substring(1);
        
        const scrollTarget = document.getElementById(href);
        const topOffset = 0;
        
        const elementPos = scrollTarget.getBoundingClientRect().top;
        const offsetPos = elementPos - topOffset;
        
        console.log(elementPos);

        window.scrollBy({
            top: offsetPos,
            behavior: 'smooth',
        })
    })
})

window.addEventListener("scroll", () => {
    let scrollDist = window.scrollY;
    console.log(scrollDist);

    document.querySelectorAll('.section-scroll').forEach((el, i) => {
        if (el.offsetTop - (document.querySelector('.header').clientHeight - 899) <= scrollDist) {
            document.querySelectorAll('.header__nav a').forEach(el => {
                if (el.classList.contains('hov')) {
                    el.classList.remove('hov')
                }

                if (scrollDist <= 934) {
                    el[0].classList.remove('hov')
                }
            
            });

            document.querySelectorAll('.header__nav li')[i].querySelector('a').classList.add('hov')
        }
    })
})