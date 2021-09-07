/* Ouvre et ferme le menu burger au clic sur l'icone */

// Récupère tous les liens contenus dans le header
const nav = document.querySelector('#header nav');
// Récupère l'icone menu et l'icone close du menu burger
const toggle = document.querySelectorAll('nav .toggle');

// Récupère les deux éléments contenus dans la variable toggle
for (const element of toggle) {
  element.addEventListener('click', function() {
    // toggle() : si la classe 'show' existe il la supprime, si elle n'existe pas il l'ajoute
    nav.classList.toggle('show');
  });
}

/* Au clic d'un item dans le menu, le cacher */

// Récupère tous les liens du menu burger
const links = document.querySelectorAll('.title');

// Boucle sur tous les liens récupérés dans la variable links
for (const link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show');
  });
}

// Récupère le header
const header = document.querySelector('#header');
// Récupère la hauteur du header
const navHeight = header.offsetHeight;

/* Ajoute box-shadow au header quand scroll */
function changeHeaderWhenScroll() {
  
  if (window.scrollY >= navHeight) {
      header.classList.add('scroll');
    } else {
      // remove la classe 'scroll' si plus petit que la taille du header
      header.classList.remove('scroll');
  }
}

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
    slidesPerView: 2,
    setWrapperSize: true
    }
  }
});

/* SCROLLREVEAL: Montre des éléments lors du scroll de la page */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
});

scrollReveal.reveal(
  `
  #home .text, #home .image, 
  #about .image, #about .text, 
  #services header, 
  #services .card, 
  #testimonials header, 
  #testimonials .testimonials,
  #contact .text, #contact .links, 
  footer .brand, footer .social
  `,
  { interval: 100 }
);

// Récupère le bouton pour ajouter la classe show
const backToTopButton = document.querySelector('.back-to-top');

/* Bouton retour en haut de la page */
function backToTop() {  
  if (window.scrollY >= 560) {
      backToTopButton.classList.add('show');
  } else {
      backToTopButton.classList.remove('show');
  }
}

/* Activer lien menu */
const sections = document.querySelectorAll('main section[id]');

function activateMenuAtCurrentSection() {
  // pageYOffset : Prend le "deslocamento" de l'axe Y lors du scroll entre les sections
  // innerHeight : prend toute la hauteur du window
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (const section of sections) {
    // Récupère le "deslocamento" top de la section
    const sectionTop = section.offsetTop;
    // Récupère la hauteur de la section
    const sectionHeight = section.offsetHeight;
    // Récupère l'id de la section
    const sectionId = section.getAttribute('id');

    // Définition du début et de la fin du point de contrôle
    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    // Condition qui vérifie si le checkpoint est dans les limites d'une section
    if (checkpointStart && checkpointEnd) {
      document
        // Si oui, prend le lien qu'y correspond
        .querySelector('nav ul li a[href*=' + sectionId + ']') 
        // Et rajoute la classe 'active'
        .classList.add('active');
    } else {  
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']') 
        // Si non, on enlève la classe
        .classList.remove('active');
    }
  }
}

window.addEventListener('scroll', function() {
  changeHeaderWhenScroll(); 
  backToTop(); 
  activateMenuAtCurrentSection();  
});



  
