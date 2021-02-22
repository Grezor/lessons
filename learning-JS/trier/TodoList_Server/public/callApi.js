const app = document.getElementById('root')

const container = document.createElement('ul')
container.setAttribute('id', 'incomplete-tasks')

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:7778/api/todolists/', true);
request.onload = function () {

    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {

        data.forEach(afaire => {


            const li = document.createElement('li');
            li.setAttribute('class', 'afaire')

            const input = document.createElement('INPUT')
            input.setAttribute("type", "checkbox");

            const label = document.createElement("LABEL");
            label.textContent = afaire.name
            label.setAttribute('class', 'label');

            const inputText = document.createElement('INPUT')
            inputText.setAttribute("type", "text");
            label.setAttribute('class', 'label');

            const BtnEdit = document.createElement('INPUT')
            BtnEdit.setAttribute("type", "button");
            BtnEdit.setAttribute("class", "edit");
            BtnEdit.setAttribute("value", "EDIT");

            const BtnDelete = document.createElement('INPUT')
            BtnDelete.setAttribute("type", "button");
            BtnDelete.className = 'input[type="button"]';
            BtnDelete.setAttribute("value", "DELETE");


            container.appendChild(li);
            li.appendChild(input);
            li.appendChild(label);
            li.appendChild(inputText);
            li.appendChild(BtnEdit);
            li.appendChild(BtnDelete);




        });






    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
      }
    }
    
    request.send();