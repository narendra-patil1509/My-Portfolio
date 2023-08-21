// ===================== toggle icon navbar =====================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=> {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// ===================== scroll sections active link =====================
let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = ()=> {// console.log("jack");
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetheight;
        let id = sec.getAttribute('id');

        if((top >= offset) && (top < offset+height)){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // ===================== sticky navbar =====================
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    // ===================== remove toggle icon and navbar when click navbar link (scroll) =====================
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


// ===================== sroll reveal =====================
ScrollReveal({
    reset:true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});


// ===================== typed js =====================
const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer','Frontend Developer 2','Gamer 3'],
    typespeed: 100,
    backspeed: 100,
    backDelay: 1000,
    loop: true
})