class NavBar{
    constructor(navbar, navLista, navLinks){
        this.navbar= document.querySelector(navbar);
        this.navLista = document.querySelector(navLista);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link, index) =>{       
            link.style.animation
            ?(link.style.animation = "")
            :(link.style.animation = `navLinkFade 0.5s ease forwards 
            ${index / 7 + 0.3}s`);
        });
    }

    handleClick(){
        this.navLista.classList.toggle(this.activeClass);
        this.navbar.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.navbar.addEventListener("click", this.handleClick);
    }
    init(){
        if(this.navbar){
            this.addClickEvent();
        }
        return this;
    }
}

const navBar = new NavBar(
    ".nav-bar",
    ".nav-lista",
    ".nav-lista li",
);

navBar.init();