let menu = document.querySelector('#menuicons');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('xmlns');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
     menu.classList.remove('xmlns');
    navbar.classList.remove('active');
}

const typed = new Typed('.multipletext', {
    strings: ['Web Developer', 'Frontend Developer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
 });
