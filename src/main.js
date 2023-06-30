'use strict';

//Make header dark when scrolling down
const header = document.querySelector('.header');

// const headerRect = header.getBoundingClientRect();
// const headerHeight = headerRect.height
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(scrollY > headerHeight){
        header.classList.add('header--dark');
    }else{
        header.classList.remove('header--dark');
    }
});

//makes home section transparent when scrolling down
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;

document.addEventListener('scroll', () => {
    home.style.opacity =  1 - (scrollY / homeHeight);

});

//arrow visible
const arrow = document.querySelector('.arrow-up');

document.addEventListener('scroll', () => {
    if(scrollY > homeHeight/2){
        arrow.style.opacity = 1;
    }
    else{
        arrow.style.opacity = 0;
    }
});

//mobile navbar toggle
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

//Navbar close
navbarMenu.addEventListener('click', () => {
    navbarMenu.classList.remove('open');
});

