// LANGUAGE BITTONS
var espBtn = document.querySelector("[data-esp]");
var engBtn = document.querySelector("[data-eng]");

// ADDING CLICK EVENT LISTENERS ON LANGUAGE BUTTONS
espBtn.addEventListener("click", setEsp);
engBtn.addEventListener("click", setEng);

// CHANGE TEXT TO SPANISH FUNCTION
function setEsp() {
    hi.textContent = language.es.welcome;
    home.textContent = language.es.menu.home;
    pictures.textContent = language.es.menu.pictures;
    
}

// CHANGE TEXT TO ENGLISH FUNCTION
function setEng() {
    hi.textContent = language.eng.welcome;
    home.textContent = language.eng.menu.home;
    pictures.textContent = language.eng.menu.pictures;
    
}


// JS OBJECT CONTAINING SPANISH/ENGLISH TEXT OPTIONS 
var language = {
    // ENGLISH TEXT OPTIONS
    eng: {
        welcome: "Welcome!",
        menu: {
            home: "Home",
            pictures: "pictures"
        }
    },

    // SPANISH TEXT OPTIONS
    es: {
        welcome: "Bienvenidos!",
        menu: {
            home: "Casa",
            pictures: "Fotos"
        }
    }
};

// if (window.location.hash) {
//     if (window.location.hash === "#es") {
//         hi.textContent = language.es.welcome;
//         home.textContent = language.es.menu.home;
//         pictures.textContent = language.es.menu.pictures;
//     }