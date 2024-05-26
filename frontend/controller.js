
function Request() {
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
    // contentDiv.innerHTML = ''; // Limpa o conteúdo anterior
    // document.getElementById("test").value = objects[0].id
    objects.forEach(function (object) {
        var objectDiv = document.createElement('li');
        objectDiv.textContent = JSON.parse(object.id);
        contentDiv.appendChild(objectDiv); //problema ta aqui
    });
}


const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];

nomes.forEach(function(nome) {
    console.log('[forEach]', nome);
})


















































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

