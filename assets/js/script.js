var startKnop = document.getElementById("startKnop");
var idkKnop = document.getElementById("idkKnop");
var oneensKnop = document.getElementById("oneensKnop");
var eensKnop = document.getElementById("eensKnop");
var title = document.getElementById("title");
var description = document.getElementById("description");
var x = 0;
var antwoorden = []

idkKnop.style.display = 'none';
oneensKnop.style.display = 'none';
eensKnop.style.display = 'none';

function start(){
    startKnop.innerHTML = "Vorige";
    idkKnop.style.display = 'inline';
    oneensKnop.style.display = 'inline';
    eensKnop.style.display = 'inline';
    title.innerHTML = subjects[x]['title'];
    description.innerHTML = subjects[x]['statement'];
    if(x > 0){
        x--
    }
}

function eens(){
    title.innerHTML = subjects[x]['title'];
    description.innerHTML = subjects[x]['statement'];
    antwoorden[x] = "pro";
    x++;
    if(x >= 30){
        document.write("test");
    };
}

function oneens(){
    title.innerHTML = subjects[x]['title'];
    description.innerHTML = subjects[x]['statement'];
    antwoorden[x] = "contra";
    x++;
    if(x >= 30){
        document.write("test");
    };
}

function idk(){
    title.innerHTML = subjects[x]['title'];
    description.innerHTML = subjects[x]['statement'];
    antwoorden[x] = "idk";
    x++;
    if(x >= 30){
        document.write("test");
    };
}