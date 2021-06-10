//Navigation
const mainHeader = document.querySelector(".header");
const burgerNav = document.querySelector(".nav-burger");
const burgerNavClose = document.querySelector(".nav-close");

burgerNav.addEventListener("click", () => {
    mainHeader.classList.add("active");
});

burgerNavClose.addEventListener("click", () => {
    mainHeader.classList.remove("active");
});


//Tabs

const tabs = document.querySelectorAll("[data-tab-target]");
const tabsContent = document.querySelectorAll(".features-tabs");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.tabTarget);


        tabsContent.forEach(tabContent => {
            tabContent.classList.remove("active");
        }); //To remove the active class on features tabs

        tabs.forEach(tab => {
            tab.classList.remove("active");
        }); //To remove the active class on features label

        target.classList.add("active");
        tab.classList.add("active");
    });
});


//Accordion

const accordion = document.querySelectorAll(".accordion__content");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", () => {
        accordion[i].classList.toggle("active");
    })
}
