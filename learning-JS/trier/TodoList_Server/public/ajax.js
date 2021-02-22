var demo = document.getElementById("demo");
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		console.log(this);
		if (this.readyState == 4 && this.status == 200) {
			demo.innerHTML = this.responseText;
			// var data = this.response;
			// var utilisateurs = data.utilisateurs;
			// console.log(utilisateurs);
			// for (var i = 0; i < utilisateurs.length; i++) {
			// 	demo.innerHTML += utilisateurs[i].prenom + " ("+ utilisateurs[i].age +") ";
			// }
		} else if (this.readyState == 4 && this.status == 404) {
			alert('Erreur 404 :/');
		}
	};

xhr.open("GET", "http://localhost:7778/api/todolists", true);
xhr .responseType = "json";
xhr.send();

document.getElementById("POSTDATA").addEventListener("submit", function(e) {
	e.preventDefault();

	var fichierARecuperer = document.getElementById("input-fichier").value;
	console.log(fichierARecuperer);
	requete(fichierARecuperer);

	return false;
})