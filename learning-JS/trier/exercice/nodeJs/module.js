var direBonjour = function(){
    console.log('Bonjour !');

}

var direByeBye = function () {
    console.log('Bye Bye');
}

exports.direBonjour = direBonjour;
exports.direByeBye = direByeBye;


var markdown = require('markdown').markdown;
console.log(markdown.toHTML('Un paragraphe en **markdow**'));