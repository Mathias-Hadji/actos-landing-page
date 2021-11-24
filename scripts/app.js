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
            this.src = "./ressources/minus.svg";
            currentChoice.style.height = height + 40 + "px"
            currentChoice.style.opacity = 1;
            currentChoice.style.padding = "20px 15px";
        } else {
            this.src = "./ressources/plus.svg";
            currentChoice.style.height = 0;
            currentChoice.style.opacity = 0;
            currentChoice.style.padding = "0px 15px";
        }
    });
});



// Onglets tarifs

const choiceTarifs = Array.from(document.querySelectorAll('.choice'));
const contentTarifs = Array.from(document.querySelectorAll('.panel'));

choiceTarifs.forEach(choice => {
    choice.addEventListener('click', (e) => {
        
        let indexClic = choiceTarifs.indexOf(e.target);

        for(let i = 0; i < choiceTarifs.length; i++) {
            
            if(i === indexClic) {
                choiceTarifs[i].classList.add('active-choice');
                contentTarifs[i].classList.add('panel-active');
                choiceTarifs[i].style.border = "2px solid #333";
            } else {
                choiceTarifs[i].classList.remove('active-choice');
                contentTarifs[i].classList.remove('panel-active');
                choiceTarifs[i].style.border = "none";
            }
        }
    });
});