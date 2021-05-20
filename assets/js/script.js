var startKnop = document.getElementById("startKnop");
var idkKnop = document.getElementById("idkKnop");
var oneensKnop = document.getElementById("oneensKnop");
var eensKnop = document.getElementById("eensKnop");
var skipKnop = document.getElementById("skipKnop");
var title = document.getElementById("title");
var description = document.getElementById("description");
var x = 0;
var antwoorden = [];

idkKnop.style.display = 'none';
oneensKnop.style.display = 'none';
eensKnop.style.display = 'none';
skipKnop.style.display = 'none';


function start(){
    startKnop.innerHTML = "VORIGE";
    idkKnop.style.display = 'inline';
    oneensKnop.style.display = 'inline';
    eensKnop.style.display = 'inline';
    skipKnop.style.display = 'inline';
    title.innerHTML = subjects[x].title;
    description.innerHTML = subjects[x].statement;
    if(x > 0){
        x--
    }
}

function eens(){
    antwoorden[x] = "pro";
    goNextStatement();
}

function oneens(){
    antwoorden[x] = "contra";
    goNextStatement();
}

function idk(){
    antwoorden[x] = "none";
    goNextStatement();
}

function skip(){
    antwoorden[x] = "undefined";
    goNextStatement();
}

function goNextStatement(){
    x++;
    if(x >= subjects.length){
        compareStatement();
        chooseParties();
    }else{
        title.innerHTML = subjects[x].title;
        description.innerHTML = subjects[x].statement;
    }
}

function chooseParties(){
    startKnop.style.display = 'none';
    skipKnop.style.display = 'none';
    title.innerHTML = "Welke soort partijen wil je meenemen in het resultaat?";
    eensKnop.innerHTML = "zittende partijen";
    oneensKnop.innerHTML = "seculiere partijen";
    idkKnop.innerHTML = "alle partijen";
    eensKnop.onclick = function() {mainParties()};
    oneensKnop.onclick = function() {sideParties()};
    idkKnop.onclick = function() {allParties()};
}

function mainParties(){
    const selectedParties = parties.filter(party => party.size > 0);

    console.log(selectedParties);
}

function sideParties(){

}

function allParties(){

}

function compareStatement(){
    for(b = 0; b < subjects.length; b++){
        for(a = 0; a < parties.length; a++){
            if(antwoorden[b] == subjects[b].parties[a].position){
                parties[a].score++;
            }else if(antwoorden[b] == "undefined"){
                parties[a].score + 0;
            }
        };
    }
}

function showResult(){
}
