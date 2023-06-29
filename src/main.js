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
    
})
