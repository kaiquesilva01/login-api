
function Request() {



    var xhr = new XMLHttpRequest();
     var document;

    xhr.responseType = "json"
    xhr.open("GET", "http://localhost:8080/users");
    // //xhr.setRequestHeader("Access-Control-Allow-Origin", "http://localhost:8080")
   
    // //xhr.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7")
    // //xhr.setRequestHeader("Accept-Encoding", "gzip, deflate, br, zstd")
    // //xhr.setRequestHeader("Accept-Language", "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7")
    // //xhr.setRequestHeader("Connection", "keep-alive")
    // //xhr.setRequestHeader("Host", "localhost:8080")
    // //xhr.setRequestHeader("Sec-Fetch-Dest", "document")
    // //xhr.setRequestHeader("Sec-Fetch-Mode", "navigate")
    // //xhr.setRequestHeader("Sec-Fetch-Site", "none")
    // //xhr.setRequestHeader("Sec-Fetch-User", "?1")
    // //xhr.setRequestHeader("Upgrade-Insecure-Requests","1")
    // // xhr.setRequestHeader("User-Agent","Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36")
    // // xhr.setRequestHeader("sec-ch-ua",'"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"')
    // // xhr.setRequestHeader("sec-ch-ua-mobile","?0")
    // // xhr.setRequestHeader("sec-ch-ua-platform", '"Windows"')


    xhr.send();
    xhr.onreadystatechange = function() {
         if(xhr.readyState == 4 && xhr.status == 200){
         document = xhr.response;
         console.log(document);
         }
    }  
    
    return document
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

