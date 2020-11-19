
let xhr = new XMLHttpRequest();
function extraire(){
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status ==200){
            let donnees = JSON.parse(xhr.responseText);
            affichage(donnees);
        }
    }
}
let id = 0;
function affichage(data){
    let txt = "";
    console.log(data); 
    for(let i = 0; i < data.length; i++){
        id = data[i].id;
        txt += `
            <div class="col-4">
                <div class="card" style="width-max:400px">
                    <img class="card-img-top" src="${data[i].img}" alt="Card image">
                    <div class="card-body">
                        <h4 class="card-title">${data[i].title}</h4>
                        <p class="card-text">${data[i].description}</p>
                        <p class="card-text"><a href="page3.html?=${data[i].id}">Lire... </a></p>
                    </div>
                </div>
            </div>
                ` ;
     }
    document.querySelector('.article-one').innerHTML = txt;
}
xhr.open("GET","./bd.json", true);
xhr.send();
extraire();
let req = new XMLHttpRequest();
function extraire2(){
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status ==200){
            let donnees = JSON.parse(req.responseText);
            affichage2(donnees);
        }
    }
}

function affichage2(data){
    let a = "";
    
    for(let k = 0; k <data.length; k++){
        
            a += `<div class="cont-img-p3">
                <img src="${data[k].img}" alt="Nature" width="100%" height="auto">
            </div>
            <div class="cont-text">
                <div class="vue">
                    <h3 class="title-art">${data[k].title}</h3>
                    ${data[k].text}
                </div>
            </div>
            `;
        document.querySelector('#grande-article').innerHTML = a;
    }
    
}


req.open("GET","./bd.json", true);
req.send();
extraire2();