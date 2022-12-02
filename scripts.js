
//Create portfolio object
const portfolio = {};

// Hamburger Nav Function
portfolio.hamNavToggle = () => {

    // Hamburger nav slide-out toggle
    hamNavToggle = document.querySelector(".hamNavIcon");
    portfolio.hamNav = document.querySelector(".hamNav");
    
    hamNavToggle.addEventListener("click", () => {
        portfolio.hamNav.classList.toggle("openNav");
    });

    // Remove Hamburger Nav from view once links are clicked
    const hamLinks = document.querySelectorAll(".hamLinks");

    hamLinks.forEach(hamLinks => {
        hamLinks.addEventListener('click', () => portfolio.hamNav.classList.remove("openNav"))
    });
    
};


//init function
portfolio.init = () => {
    portfolio.hamNavToggle();
}

portfolio.init();