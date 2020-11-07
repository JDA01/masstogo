//BURGER MENU BTN
const burgerBtn = document.querySelector(".toggler-wrap");

//MOBILE MENU
const mobileMenu = document.querySelector(".mobile-menu");

//MOBILE MENU LINKS
const dataBio = document.querySelector("[data-bio]");
const dataBenefits = document.querySelector("[data-benefits]");
const dataContact = document.querySelector("[data-contact]");

//BIO SECTION  ENGLISH/FRENCH TRANSLATION
const bioP1 = document.querySelector("[data-bioP1]");
const bioP2 = document.querySelector("[data-bioP2]");
const bioP3 = document.querySelector("[data-bioP3]");
const bioP4 = document.querySelector("[data-bioP4]");

//BENEFITS SECTION ENGLISH/FRENCH TRANSLATION
const massP1 = document.querySelector("[data-massP1]");
const sportsP1 = document.querySelector("[data-sportsP1]");

//FRENCH LANG BTN
const fr = document.querySelector("#fr");

//ENGLISH LANG BTN
const en = document.querySelector("#en");

//BIO EXPAND-COLLAPSE BTN
const expandCollapse = document.querySelector("#expandCollapse");

//READ MORE BTN 
// const readMore = document.querySelectorAll("#readMore");

//TESTIMONIAL SECTION
const reviews = document.querySelectorAll("#review");

//PARAGRAPHS WITH HIDE-SHOW CLASS(TOGGLE READ MORE OPTION)
const extraText = document.querySelectorAll("#extra-text");
let menuOpen = false;
let bioText = false;
let french = false;


//BIO READ MORE BTN LISTENER
expandCollapse.addEventListener("click", () => {
  for (var i = 0; i < extraText.length; i++) {
    extraText[i].classList.toggle("hide-show");
  }

  document.querySelector(".mainName").classList.toggle("hide-show");




  if (!bioText) {
    expandCollapse.innerHTML = '<i class="fas fa-minus"></i>';
    bioText = true;
  } else {
    expandCollapse.innerHTML = '<i class="fas fa-plus"></i>';
    bioText = false;
  }

});

//FRENCH LANGUAGE CHENGE EVENT LISTENERS
fr.addEventListener("click", () => {
  //REMOVE AND ADD ACTIVE CLASS TO LANGUAGE SELECTED
  en.classList.remove("active-lang");
  fr.classList.add("active-lang");

  //CALL FUNCTION TO CHANGE LANGUAGE
  toFrench();


});

//LANGUAGE CHENGE EVENT LISTENERS
en.addEventListener("click", () => {
  //REMOVE AND ADD ACTIVE CLASS TO LANGUAGE SELECTED
  fr.classList.remove("active-lang");
  en.classList.add("active-lang");

  //CALL FUNCTION TO CHANGE LANGUAGE
  toEnglish();

});


//CHANGE LANGUAGE TO FRENCH FUNCTION
function toFrench() {
  //MENU
  dataBio.textContent = language.fr.menu.bio;
  dataBenefits.textContent = language.fr.menu.benefits;
  dataContact.textContent = language.fr.menu.contact;

  //BIO 
  bioP1.textContent = language.fr.bioP1;
  bioP2.textContent = language.fr.bioP2;
  bioP3.textContent = language.fr.bioP3;
  bioP4.textContent = '"'+ language.fr.bioP4 + '"';

  //BENEFITS
  massP1.textContent = language.fr.benefitsMassage.p1;
  sportsP1.textContent = language.fr.benefitsSports.p1;

  //TESTIMONIAL SECTION
  reviewToFrench();
}

//CHANGE LANGUAGE TO ENGLISH FUNCTION
function toEnglish() {

  //MENU
  dataBio.textContent = language.en.menu.bio;
  dataBenefits.textContent = language.en.menu.benefits;
  dataContact.textContent = language.en.menu.contact;

  //BIO 
  bioP1.textContent = language.en.bioP1;
  bioP2.textContent = language.en.bioP2;
  bioP3.textContent = language.en.bioP3;
  bioP4.textContent = '"'+ language.en.bioP4 + '"';
  

  //BENEFITS
  massP1.textContent = language.en.benefitsMassage.p1;
  sportsP1.textContent = language.en.benefitsSports.p1;

  //TESTIMONIAL SECTION
  reviewToEnglish();
}

function reviewToFrench() {
  for (var i = 0; i < reviews.length; i++) {
    reviews[i].textContent = language.fr.reviews[i];
  }
}

function reviewToEnglish() {
  for (var i = 0; i < reviews.length; i++) {
    reviews[i].textContent = language.en.reviews[i];
  }
}


//BURGER BTN ANIMATION
burgerBtn.addEventListener("click", () => {

  if (!menuOpen) {
    burgerBtn.classList.add("open");
    toggleMenu();
    menuOpen = true;
  } else {
    burgerBtn.classList.remove("open");
    toggleMenu();
    menuOpen = false;
  }


});

function toggleMenu() {
  if (!menuOpen) {
    mobileMenu.style.height = "270px";

  } else {
    mobileMenu.style.height = "0";

  }
}


//LANGUAGE OPTIONS OBJECT
var language = {
  fr: {
    menu: {
      bio: "bio",
      benefits: "avantages",
      contact: "contact",
    },
    bioP1: "Marcos Escobar est Massothérapeute, propiétaire et PDG de Masso To-Go!",
    bioP2: "Il a étudié en dessin du bâtiment pour ensuite commencer sa carrière comme technicien en génie civil.",
    bioP3: "Depuis très jeune, Marcos a toujours montré un intérêt dans le domaine du sport (ex-gardien de but, sur glace, cosom et DEK). Donc, après 5 ans dans ça carrière en génie civil, il décide d’étudier à l’AMS pour apprendre d’avantages les fonctions et mouvements de la biomécanique musculaire. Diplômé de l’Academie de Massage scientifique de : Massothérapeute Practicien et Massage sportif (massage suédois et sportif).",
    bioP4: "Je crois que le sport / activité / gym est la clée qui atténue notre stress",
    followUs: "Suivez nous",
    readdMore: "plus",
    benefitsMassage: {
      p1: "Le massage favorise aussi la circulation sanguine et lymphatique ainsi que l’élimination des toxines. Cette technique peut être pratiquée autant dans un but thérapeutique que de détente.  Le massage suédois permet de détendre et relaxer le corps comme l’esprit. Particulièrement apaisant, il est apprécié pour sa capacité à diminuer les effets du stress sur le corps.",
      p2: "D’ailleurs, un massage plus ferme et vigoureux est tout indiqué pour relâcher les tensions musculaires. De même, cette technique soulage les douleurs occasionnées par une mauvaise posture, des mouvements répétitifs ou une blessure sportive. Il procure alors détente, tonus et souplesse au corps."
    },
    benefitsSports: {
      p1: "Avant l’effort, le massage prépare les muscles à performer tout en évitant les blessures. Après l’effort, il prévient les courbatures et détend la musculature, ce qui permet au corps de se détendre pour mieux récupérer. Le massage peut également être pratiqué pendant une activité ou une compétition lors d’une pause de l’athlète pour agir sur une crampe ou des courbatures résultant de l’effort et de la fatigue musculaire."
    },
    reviews: [
      "Très professionnel, vraiment doué, vraiment patient et relaxant, je recommande très fortement 100%👍",
      "Très professionnel, je le recommande très fortement",
      "super service  et professionnel",
      "vraiment talentueux et très sympathique vous allez adorer!"
    ]


  },

  en: {
    menu: {
      bio: "bio",
      benefits: "benefits",
      contact: "contact"
    },
    bioP1: "Marcos Escobar is a massage therapist, owner and CEO of Masso To-Go!",
    bioP2: "He studied in building design and then began his career as a technician in civil engineering.",
    bioP3: "Since he was very young, Marcos has always shown an interest in the field of sport (former goalkeeper, on ice, cosom and DEK). After 5 years of career in civil engineering, he decided to study at the AMS to learn the function and movements of muscle biomechanics. Graduate of the Academy of Scientific Massage: Massage Therapist Practitioner and Sports Massage (Swedish massage and sports).",
    bioP4: "I think sports, physical activity and gym is the key to easing our stress",
    followUs: "Suivez nous",
    readMore: "read more",
    benefitsMassage: {
      p1: "Massage increases blood and lymphatic flow as well as toxins’ elimination. It can be practiced both for therapeutic or relaxation purposes. The Swedish massage allows relaxation as well as mind rest. Particularly soothing, it is recognized for its ability to lessen the effects of stress on the body."
    },
    benefitsSports: {
      p1: "Before the effort, the massage prepares the muscles to perform while avoiding injuries. After the effort, it prevents aches and relaxes the muscles, allowing the body to relax for better recovery. Massage can also be performed during an activity or a competition, when the athlete is taking a break and the therapist is allowed to work on a cramp or aches resulting from the effort and muscular fatigue."
    },
    reviews: [
      "Very professional, really gifted, really patient and relaxing, highly recommend 100 %👍",
      "Very professional, highly recommend it",
      "great service and professional",
      "really talented and very friendly you will love it!"
    ]
  }
}