document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    //sending GET request to localhost (my local server) to retrieve data from the database
    axios.get('http://localhost:4000/')
     .then(result => {
         if(result.data.check === 'true') {
             const registrants = result.data.registeredData;
             const ul = document.getElementsByTagName('ul')[0];
             
             for(let i=0; i<registrants.length; i++) {
                 let id = registrants[i].id;
                 let username = registrants[i].username;
                 let email = registrants[i].email;

                 /* li */
                 let li = document.createElement('li');

                 /* form */
                 let form = document.createElement('form');
                 form.onsubmit = "event.preventDefault()"; 

                 /* span - FIRST */
                 let span1 = document.createElement('span');
                 span1.className = "username";
                 span1.innerText = username;

                 /* span - SECOND */
                 let span2 = document.createElement('span');
                 span2.className = "email";
                 span2.innerText = email;

                 /* button */
                 let button = document.createElement('button');
                 button.className = "del";
                 button.type = "submit";
                 button.innerText = "delete";

                 /* input */
                 let input = document.createElement('input');
                 input.type = "hidden";
                 input.name = "id";
                 input.value = id;

                 form.appendChild(span1); form.append(" ");
                 form.appendChild(span2); form.append(" ");
                 form.appendChild(button);
                 form.appendChild(input);
                 li.appendChild(form);
                 ul.appendChild(li);
             }

             /* for when the user clicks the delete button */
             let delElementArray = document.getElementsByClassName('del');
             for(let i=0; i<delElementArray.length; i++) {
                 delElementArray[i].addEventListener('click', e => {
                    e.preventDefault();

                    const id = e.target.nextElementSibling.value;

                    /* sending POST request to localhost (my local server) to DELETE data from the database */
                    axios.post('http://localhost:4000/delete', {
                        id: id
                    })
                     .then(result => {
                        console.log('delete registrant: CHECK');
                        location.reload();
                     })
                     .catch(err => console.log(err));
                 });
             }
         }
     })
     .catch(err => console.log(err));
});

function addNewRegistrant() {
    let usernameInput = document.getElementById("username");
    let emailInput = document.getElementById("email");

    //extracting input data
    let username = usernameInput.value;
    let email = emailInput.value;

    //emtying the input fields (FRONTEND)
    usernameInput.value = "";
    emailInput.value = "";

    //sending POST request to localhost (my local server) to save data in the database
    axios.post('http://localhost:4000/', {
        username: username,
        email: email
    })
     .then(result => {
         console.log('new registrant: CHECK', username, email);
         console.log(result);
         location.reload();
        })
     .catch(err => console.log(err));
}
