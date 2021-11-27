const iconMenu = document.querySelector('.header-container__buttom-burger');
const iconMenuClose = document.querySelector('.header-back-btn');
const menuBody = document.querySelector('.menu-body');
const menuBurger = document.querySelector('.menu-burger');
if (iconMenu) {
    iconMenu.addEventListener('click', function(event){
        event.preventDefault();
        menuBody.classList.add('active');
        menuBurger.classList.add('active');
    });
}
if (iconMenuClose) {
    iconMenuClose.addEventListener('click', function(event){
        event.preventDefault();
        menuBody.classList.remove('active');
        menuBurger.classList.remove('active');
    });
}
menuBody.addEventListener('click', function(event){
    event.preventDefault();
    menuBody.classList.remove('active');
    menuBurger.classList.remove('active');
});

/* modul */
const callBtn = document.querySelector('.contacts__call');
const callBtnClose = document.querySelector('.call-btn-close');
const callBody = document.querySelector('.call-body');
const modulCall = document.querySelector('.moudul-call');

callBtn.addEventListener('click', function(event){
    event.preventDefault();
    callBody.classList.add('modul-active');
    modulCall.classList.add('modul-active');
});

callBtnClose.addEventListener('click', function(event){
    event.preventDefault();
    callBody.classList.remove('modul-active');
    modulCall.classList.remove('modul-active');
});

callBody.addEventListener('click', function(event){
    event.preventDefault();
    callBody.classList.remove('modul-active');
    modulCall.classList.remove('modul-active');
});

/* modul feedback */
const chatBtn = document.querySelector('.contacts__chat');
const feedbackBtnClose = document.querySelector('.feedback-btn-close');
const feedbackBody = document.querySelector('.feedback-body');
const modulFeedback = document.querySelector('.moudul-feedback');

chatBtn.addEventListener('click', function(event){
    event.preventDefault();
    feedbackBody.classList.add('modul-active');
    modulFeedback.classList.add('modul-active');
});

feedbackBtnClose.addEventListener('click', function(event){
    event.preventDefault();
    feedbackBody.classList.remove('modul-active');
    modulFeedback.classList.remove('modul-active');
});

feedbackBody.addEventListener('click', function(event){
    event.preventDefault();
    feedbackBody.classList.remove('modul-active');
    modulFeedback.classList.remove('modul-active');
});


const swiper1 = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    slidesOffsetBefore: 16,

    observer: true,
    observerParents: true,
    observerSlideChildren: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});

const swiper2 = new Swiper('.swiper2', {
    // wrapperClass: 'tech-block__wrapper',
    slideClass: 'tech-block__slide',
    paginationClass: 'tech-block__pagination',
   
    slidesPerView: 'auto',
    spaceBetween: 16,
    slidesOffsetBefore: 16,

    observer: true,
    observerParents: true,
    observerSlideChildren: true,

    mausewheel: {
        sensitivity: 1,
    },

    speed: 800,

    pagination: {
        el: '.tech-block__pagination',
        clickable: true,
    },
});

const swiper3 = new Swiper('.swiper3', {
    // wrapperClass: 'tech-block__wrapper',
    slideClass: 'service-block__slide',
    paginationClass: 'service-block__pagination',
   
    slidesPerView: 'auto',
    spaceBetween: 16,
    slidesOffsetBefore: 16,

    observer: true,
    observerParents: true,
    observerSlideChildren: true,

    mausewheel: {
        sensitivity: 1,
    },

    speed: 800,

    pagination: {
        el: '.service-block__pagination',
        clickable: true,
    },
});

let buttonOpen = document.querySelector('.button-show');
let buttonClose = document.querySelector('.button-close');
let block = document.querySelector('.main-block');

buttonOpen.addEventListener('click', function (event){
    event.preventDefault();
    buttonOpen.classList.add('class-hidden');
    buttonClose.classList.add('class-show');
    block.classList.add('class-overflowVisible');
})

buttonClose.addEventListener('click', function (event){
    event.preventDefault();
    buttonOpen.classList.remove('class-hidden');
    buttonClose.classList.remove('class-show');
    block.classList.remove('class-overflowVisible');
});


let buttonOpenTechBblock2 = document.querySelector('.tech-block2__button-show');
let buttonCloseTechBblock2 = document.querySelector('.tech-block2__button-close');
let block2 = document.querySelector('.tech-block2');

buttonOpenTechBblock2.addEventListener('click', function (event){
    event.preventDefault();
    buttonOpenTechBblock2.classList.add('class-hidden');
    buttonCloseTechBblock2.classList.add('class-show');
    block2.classList.add('class-overflowVisible');
})

buttonCloseTechBblock2.addEventListener('click', function (event){
    event.preventDefault();
    buttonOpenTechBblock2.classList.remove('class-hidden');
    buttonCloseTechBblock2.classList.remove('class-show');
    block2.classList.remove('class-overflowVisible');
});

const btnHide = document.querySelector('.btn-hide');
const btnShow = document.querySelector('.btn-show');
const Block1Text = document.querySelector('.main-container-block-1__text')
btnShow.addEventListener('click', function (event){ 
    event.preventDefault();
    btnShow.classList.add('diactiv-btn');
    btnHide.classList.add('active-btn');
    Block1Text.classList.add('class-overflowVisible');
});

btnHide.addEventListener('click', function (event){ 
    event.preventDefault();
    btnShow.classList.remove('diactiv-btn');
    btnHide.classList.remove('active-btn');
    Block1Text.classList.remove('class-overflowVisible');
});

