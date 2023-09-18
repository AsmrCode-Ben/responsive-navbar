let navToggle = document.querySelector('.nav-toggle');
let navToggleImg = document.querySelector('.nav-toggle img');
let navLinks = document.querySelector('.nav-links');
let isNavLinksOpen = false;

navToggle.addEventListener('click', () => {
    if (isNavLinksOpen) {
        //if open  
        navLinks.classList.add('navlinks-close');
        navToggleImg.src = './contents/menu.png';
    } else {
        //if not open
        navLinks.classList.remove('navlinks-close');
        navToggleImg.src = './contents/cross.png';
    }
    isNavLinksOpen = !isNavLinksOpen;
});

window.addEventListener('resize', () => {
    //reset on resize
    isNavLinksOpen = false;
    navLinks.classList.add('navlinks-close');
});