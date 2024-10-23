const navElement = document.querySelector('nav');
const navLinksElement = navElement.querySelectorAll('a');

const navPosition = navElement.getBoundingClientRect().top;

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    navElement.style.top = scrollPosition + 'px';

    navLinksElement.forEach(link => {
        const sectionElement = document.querySelector(link.hash);
        const offset = 80;
        
        if(scrollPosition + offset > sectionElement.offsetTop && scrollPosition + offset < sectionElement.offsetTop + sectionElement.offsetHeight)
            link.classList.add('active');
        else
            link.classList.remove('active');
    })
})