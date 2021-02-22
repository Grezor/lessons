
var InputTache=document.getElementById("new-task");
var AjouterTache=document.querySelector("button");
var incompleteTache=document.getElementById("incomplete-tasks");
var completeTache=document.getElementById("completed-tasks");


var todolist = [];
var faire = [];
var terminer = [];



var createNewTaskElement=function(taskString){

	var listeItem=document.createElement("li");
	var checkBox=document.createElement("input");
	var label=document.createElement("label");
	var InputEdit=document.createElement("input");
	var ButtonEdit=document.createElement("button");
	var ButtonSupprimer=document.createElement("button");

	label.innerText=taskString;

	checkBox.type="checkbox";
	InputEdit.type="text";

	ButtonEdit.innerText="Edit";
	ButtonEdit.className="edit";
	ButtonSupprimer.innerText="Delete";
	ButtonSupprimer.className="delete";

	listeItem.appendChild(checkBox);
	listeItem.appendChild(label);
	listeItem.appendChild(InputEdit);
	listeItem.appendChild(ButtonEdit);
	listeItem.appendChild(ButtonSupprimer);
	
	return listeItem;
	
}

/**
 * Ajouter une tache
 */
var AjouterUneTache=function(){
	console.log("Add Task...");

	var request = new XMLHttpRequest();
	request.open('POST', 'http://localhost:7778/api/todolists/', true);
	request.setRequestHeader("Content-Type", "application/json");
	
	var taskValue = document.getElementById("new-task").value; 
	var obj = { name : taskValue }
	var jsonObjet = JSON.stringify(obj);

	console.log(obj);
	console.log(jsonObjet);
	request.send(jsonObjet);
	var intervalID = window.setInterval(animation, 500);

	
	// request.onload = function () {
	// 	var surface = 

	//incompleteTache.appendChild(listeItem);
	//bindTaskEvents(listeItem, TerminerTache);
	//InputTache.value="";
}
/**
 * Editer une tache
 */
var editerTache=function(){
    console.log('%c EDITER TACHE', 'background: #222; color: #bada55');
    console.log('%c CHANGEMENT TACHE ET SAVE', 'background: #222; color: red');
    var listeItem=this.parentNode;
    var InputEdit=listeItem.querySelector('input[type=text]');
    var label=listeItem.querySelector("label");
    var containsClass=listeItem.classList.contains("editMode");
		
		if(containsClass){
			label.innerText=InputEdit.value;
		}else{
			InputEdit.value=label.innerText;
		}
		listeItem.classList.toggle("editMode");
}

/**
 * Supprimer une tache
 */
var supprimerTache =function(){
	console.log("===================== SUPRESSION TACHE =====================");

	var listeItem=this.parentNode;
	var ul=listeItem.parentNode;
	ul.removeChild(listeItem);
	console.log($(createNewTaskElement()).length);
}

/**
 * terminer une tache
 */
var TerminerTache=function(){
	console.log("===================== TACHE TERMINER =====================");

	var listeItem=this.parentNode;
	completeTache.appendChild(listeItem);
	bindTaskEvents(listeItem, taskIncomplete);
}

/**
 * Tache en cours
 */
var taskIncomplete =function(){
	console.log("===================== Tache INCOMPLETE ===================== ");

	var listeItem=this.parentNode;
	incompleteTache.appendChild(listeItem);
	bindTaskEvents(listeItem,TerminerTache);
}



var ajaxRequest=function(){
	console.log("AJAX Request");
}

// Ajouter une tache
AjouterTache.addEventListener("click",AjouterUneTache);
AjouterTache.addEventListener("click",ajaxRequest);


var bindTaskEvents=function(tasklisteItem,checkBoxEventHandler){
	console.log("bind list item events");

	var checkBox=tasklisteItem.querySelector("input[type=checkbox]");
	var ButtonEdit=tasklisteItem.querySelector("button.edit");
	var ButtonSupprimer=tasklisteItem.querySelector("button.delete");

	ButtonEdit.onclick=editerTache;
	ButtonSupprimer.onclick=supprimerTache ;
	checkBox.onchange=checkBoxEventHandler;
}

for (var i=0; i<incompleteTache.children.length;i++){
	bindTaskEvents(incompleteTache.children[i],TerminerTache);
	
}

for (var i=0; i<completeTache.children.length;i++){
	bindTaskEvents(completeTache.children[i],taskIncomplete);
}



var pushData = function(){
	var Inputext = document.getElementById('new-task');
	todolist.push(Inputext);
	var pval = "";
	for(i=0; i<todolist.length; i++){
		pval = pval + todolist[i];
	}

	document.getElementById('incomplete-tasks').innerHTML = pval;
	console.log(todolist);
}