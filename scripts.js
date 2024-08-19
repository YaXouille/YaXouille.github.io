// Gérer le défilement du carrousel
document.querySelectorAll('.carousel').forEach(carousel => {
    carousel.addEventListener('wheel', (event) => {
        event.preventDefault();
        carousel.scrollBy({
            left: event.deltaY < 0 ? -200 : 200
        });
    });
});

// Sélectionner toutes les images du carrousel
const images = document.querySelectorAll('.carousel img');

// Sélectionner la lightbox et ses composants
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

// Ajouter un événement de clic sur chaque image du carrousel
images.forEach(image => {
    image.addEventListener('click', function() {
        lightbox.style.display = 'flex'; // Afficher la lightbox
        lightboxImg.src = this.src; // Mettre à jour l'image dans la lightbox
    });
});



// Ajouter un événement de clic sur le bouton de fermeture
closeBtn.addEventListener('click', function() {
    lightbox.style.display = 'none'; // Fermer la lightbox
});

// Optionnel : Fermer la lightbox en cliquant en dehors de l'image
lightbox.addEventListener('click', function(event) {
    if (event.target !== lightboxImg) {
        lightbox.style.display = 'none'; // Fermer la lightbox si on clique à l'extérieur
    }
});



// Récupération des éléments du DOM
const modal = document.getElementById("contactModal");
const btn = document.getElementById("contactBtn");
const span = document.getElementsByClassName("close")[0];

// Ouverture de la modale lorsque le bouton est cliqué
btn.onclick = function() {
    modal.style.display = "block";
}

// Fermeture de la modale lorsque l'utilisateur clique sur le "X"
span.onclick = function() {
    modal.style.display = "none";
}

// Fermeture de la modale lorsque l'utilisateur clique en dehors de la modale
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
