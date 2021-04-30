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
        showResult();
    }else{
        title.innerHTML = subjects[x].title;
        description.innerHTML = subjects[x].statement;
    }
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
    for(c = 0; c < parties.length; c++){
        document.write(parties[c].name, " ", parties[c].score+ "<br>");
    }
}
