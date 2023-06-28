//Make header dark when scrolling
const header = document.querySelector('.header');

// cosnt headerRect = header.getBoundingClientRect();
// const headerHeight = headerRect.height
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(scrollY > headerHeight){
        header.classList.add('header--dark');
    }else{
        header.classList.remove('header--dark');
    }
});