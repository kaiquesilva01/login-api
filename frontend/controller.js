

function RequestAll() {
    var xhr = new XMLHttpRequest();

    xhr.responseType = "json"
    xhr.open("GET", "http://localhost:8080/users");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var document = xhr.response;
            displayObjects(document); // Chama a função para exibir os objetos

        }
    }
}
function displayObjects(objects) {
    var contentDiv = document.getElementById('list');

    objects.map(function (object) {
        var objectDiv = document.createElement('li');
        objectDiv.textContent = "Usuário: " + object.id + '\n'
            + " Name: " 
            + object.name + '\n'
            + " Email: "
            + object.email + '\n'
            + " Phone: "
            + object.phone;
        contentDiv.appendChild(objectDiv)
    });
}
function Register() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var phone = document.getElementById('phone').value;

    var data = {
        name: name,
        email: email,
       password: password,
        phone: phone
    };

    var xhr = new XMLHttpRequest();

    xhr.open("POST", "http://localhost:8080/users");
    xhr.setRequestHeader("Content-type", "application/json")
    xhr.send(JSON.stringify(data));
    console.log(data)
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) { 
            if (xhr.status == 201) {
                var user = JSON.parse(xhr.response);
                var createdDiv = document.getElementById('Register');
                var created = document.createElement('p');
                created.textContent = "Usuário criado" + "\n" +
                    "ID: " + user.id + "\n" +
                    "Nome: " + user.name + "\n"
                ;
                createdDiv.appendChild(created);
                
            }
            else {
                console.error("Erro ao enviar dados:", xhr.status)
            }
        }
    }   
}









































//  let name = document.querySelector("#name");
//  let email = document.querySelector("#email");
//  let phone = document.querySelector("#phone");
//  let password = document.querySelector("#password");

//  cadastro.addEventListener("submit", function(event) {
//     event.preventDefault();

//     let dados = {
//         name: name.value,
//         email: email.value,
//         phone: phone.value,
//         password: password.value
//     };

//     fetch('http://localhost:8080/users', {
//         method: 'POST',
//         body: JSON.stringify(dados)
//     })
//     .then(function(response) {})
//  })

//  let btn = document.querySelector("#btn");
//  let list = document.querySelector("#list");

// btn.addEventListener("click", function() {
//     fetch('http://localhost:8080/users')
//     .then(function(response) {
//         return response.json()
//     })
//     .then(function(response){
//         response.users.forEach(function(user) {
//             let item = document.createElement("li");

//             item.innerHTML = '<img src=""  /><span>'+user.name+'</span>';
//         });

//     })
// })

