// Navbar animée

const btnNav = document.querySelector('.responsive-nav-btn');
const listNav = document.querySelector('nav ul');
let imgBtn = document.querySelector('.responsive-nav-btn img');

btnNav.addEventListener('click', () => {

    listNav.classList.toggle('active-nav');

    if(imgBtn.src.includes('menu')) {
        imgBtn.src = "./ressources/croix.svg";
        imgBtn.style.width = "30px";
        imgBtn.style.height = "30px";
    } else {
        imgBtn.src = "./ressources/menu.svg";
    }
});