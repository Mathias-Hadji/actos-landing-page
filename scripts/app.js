// Navbar animée

const btnNav = document.querySelector('.responsive-nav-btn');
const listNav = document.querySelector('nav ul');
let imgBtn = document.querySelector('.responsive-nav-btn img');

btnNav.addEventListener('click', () => {

    listNav.classList.toggle('active-nav');

    if(window.location.href.includes('index')){
        if(imgBtn.src.includes('menu')) {
            imgBtn.src = "./ressources/croix.svg";
            imgBtn.style.width = "30px";
            imgBtn.style.height = "30px";
        } else {
            imgBtn.src = "./ressources/menu.svg";
        }
    } else {
        if(imgBtn.src.includes('menu')) {
            imgBtn.src = "../ressources/croix.svg";
            imgBtn.style.width = "30px";
            imgBtn.style.height = "30px";
        } else {
            imgBtn.src = "../ressources/menu.svg";
        }
    }

});



// FAQ animation

const allCross = document.querySelectorAll('.panel-visible img');

allCross.forEach(cross => {

    cross.addEventListener('click', function() {

        const height = this.parentNode.parentNode.childNodes[3].scrollHeight;
        const currentChoice = this.parentNode.parentNode.childNodes[3];

        if(this.src.includes('plus')) {
            this.src = "/ressources/minus.svg";
            currentChoice.style.height = height + 40 + "px"
            currentChoice.style.opacity = 1;
            currentChoice.style.padding = "20px 15px";
        } else {
            this.src = "/ressources/plus.svg";
            currentChoice.style.height = 0;
            currentChoice.style.opacity = 0;
            currentChoice.style.padding = "0px 15px";
        }
    });
})