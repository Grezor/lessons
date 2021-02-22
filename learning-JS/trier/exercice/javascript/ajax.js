// var request = new XMLHttpRequest();
// request.open("GET", "http://url-service-web.com/api/users");
// request.send();

// Ligne 1 : on crée un nouvel objet de type  XMLHttpRequest  qui correspond à notre objet AJAX. C'est grâce à lui qu'on va créer et envoyer notre requête ;
// Ligne 2 : on demande à ouvrir une connexion vers un service web. C'est ici que l'on précise quelle méthode HTTP on souhaite, ainsi que l'URL du service web ;
// Ligne 3 : on envoie finalement la requête au service web.


var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        // console.log(response.current_condition.condition);
    }
};
request.open("GET", "https://www.prevision-meteo.ch/services/json/paris", true);
request.setRequestHeader("Content-Type", "application/json");
request.send(JSON.stringify({
    "id": "24",
    "lp": "16mm"
}
));

/**
 * Affiche le resultat 
 */

// {
//     "city_info": {
//         "name": "Lille",
//         "country": "France",
//         "latitude": "50.6280556",
//         "longitude": "3.0447221",
//         "elevation": "20",
//         "sunrise": "08:35",
//         "sunset": "16:45"
//     },
// }