"use strict"

const burger = document.querySelector('.burger');
const header__nav = document.querySelector('.header__nav');
const header__list = header__nav.querySelectorAll('a');
const body = document.body;

burger.addEventListener('click', () => {
    body.classList.toggle('stop-scroll');
    burger.classList.toggle('burger--active');
    header__nav.classList.toggle('header__nav--visible');
});

header__list.forEach(el => {
    el.addEventListener('click', () => {
        body.classList.remove('stop-scroll');
    burger.classList.remove('burger--active');
    header__nav.classList.remove('header__nav--visible')
    });
});

/*tabs*/

const tabsBtn = document.querySelectorAll('.tabs__btn');
const tabsItem = document.querySelectorAll('.tabs__content');

tabsBtn.forEach(el => {
    el.addEventListener('click', (e) => {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(el => el.classList.remove('tabs__btn--active'));
        e.currentTarget.classList.add('tabs__btn--active');
        
        tabsItem.forEach(el => el.classList.remove('tabs__content--active'));
        document.querySelector(`[data-target="${path}"]`).classList.add
        ('tabs__content--active');
    });
});


/*slaid*/

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable:true,
      },
});

/*accordion*/

document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(el => {
        el.addEventListener('click', (e) => {
            const self = e.currentTarget;
            const control = self.querySelector('.accordion__control');
            const content = self.querySelector('.accordion__content');
            self.classList.toggle('open');

            if (self.classList.contains('open')) {
                control.setAttribute('aria-expanded', true);
                content.setAttribute('aria-hidden', false);
            } else
            control.setAttribute('aria-expanded', false);
            content.setAttribute('aria-hidden', true);
        });
    });
});

/*Поиск*/

const headerBtn = document.querySelector('.header__btn');
const headerForm = document.querySelector('.header__form');
const formBtn = document.querySelector('.form__header__btn');

    headerBtn.addEventListener('click',  (e) => {
        headerForm.classList.toggle("header__form--active");
    });

    formBtn.addEventListener('click',  (e) => {
        event.preventDefault();
        headerForm.classList.remove("header__form--active");
    });