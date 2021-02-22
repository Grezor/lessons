const elt = document.getElementById('mon-lien')   // On récupère l'élément sur lequel on veut détecter le clic
elt.addEventListener('click', function (enevent) {          // On écoute l'événement click
    // elt.innerHTML = "C'est cliqué !";               // On change le contenu de notre élément pour afficher "C'est cliqué !"
event.preventDefault();

});


StopElement.addEventListener('click', function(event){
    event.stopPropagation();
    elementAvecMessage.innerHTML = "Message de l'élément intérieur";
});


/**
 * A voir d'avantage de chose
 */