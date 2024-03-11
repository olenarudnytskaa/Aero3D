
const languageDe = document.querySelector('.lang-item-DE');
languageDe.addEventListener("click", e => {
const deutsch =  document.querySelectorAll('#deutsch')
const deutschHero =  document.querySelector('.hero__container-de')
const italiano = document.querySelectorAll("#italy");
const hero_it = document.querySelector(".hero__container-it");
hero_it.style.display =  "none";
const hero_en = document.querySelector(".hero__container-en");
hero_en.style.display =  "none";
const english  =  document.querySelectorAll("#english")
deutsch.forEach(deutsch => {
    deutsch.style.display = "block";
    deutschHero.style.display = "block";
});
italiano.forEach(italiano => {
    italiano.style.display = "none";
});
english.forEach(english => {
    english.style.display = "none";
});
})

const languageEn = document.querySelector('.lang-item-EN');
languageEn.addEventListener("click", e => {
const deutsch =  document.querySelectorAll('#deutsch')
const italiano = document.querySelectorAll("#italy");
const hero_it = document.querySelector(".hero__container-it");
hero_it.style.display =  "none";
const hero_de = document.querySelector(".hero__container-de");
hero_de.style.display =  "none";
const english  =  document.querySelectorAll("#english")
const englishHero  =  document.querySelector(".hero__container-en")
english.forEach(english => {
    english.style.display = "block";
    englishHero.style.display = "block";
});
italiano.forEach(italiano => {
    italiano.style.display = "none";
});
deutsch.forEach(deutsch => {
   deutsch.style.display = "none";
});
})

const languageIt = document.querySelector('.lang-item-IT');
languageIt.addEventListener("click", e => {
const deutsch =  document.querySelectorAll('#deutsch')
const italiano = document.querySelectorAll("#italy")
const italianoHero = document.querySelector(".hero__container-it")
const english  =  document.querySelectorAll("#english")
const englishHero  =  document.querySelector(".hero__container-en")
const hero_de = document.querySelector(".hero__container-de");
hero_de.style.display =  "none";
englishHero.style.display = "none";
italiano.forEach(italiano => {
    italiano.style.display = "block";
    italianoHero.style.display = "block";
});
english.forEach(english => {
    english.style.display = "none";
});
deutsch.forEach(deutsch => {
   deutsch.style.display = "none";

});
})

const items = document.querySelectorAll(".nav__item");
items.forEach(item => {
    item.addEventListener("click", e => {
        e.preventDefault(); 
        const hero = document.querySelector('.main');
        hero.scrollIntoView({ behavior: "smooth" });
    });
});



const navContact = document.querySelectorAll(".nav__contact");
navContact.forEach(con => {
    con.addEventListener("click", e => {
        e.preventDefault(); 
        const contact = document.querySelector('.contacts');
        contact.scrollIntoView({ behavior: "smooth" });
    });
});

const abouts = document.querySelectorAll(".nav__about");
abouts.forEach(about => {
    about.addEventListener("click", e => {
        e.preventDefault(); 
        const heroAb = document.querySelector('.main');
        heroAb.scrollIntoView({ behavior: "smooth" });
    });
});