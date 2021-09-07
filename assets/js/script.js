var startKnop = document.getElementById("startKnop");
var idkKnop = document.getElementById("idkKnop");
var oneensKnop = document.getElementById("oneensKnop");
var eensKnop = document.getElementById("eensKnop");
var skipKnop = document.getElementById("skipKnop");
var title = document.getElementById("title");
var description = document.getElementById("description");
var importantList = document.getElementById('vragenlijst');
var x = 0;
var antwoorden = [];
var questions = 30;

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
    questions--;
    goNextStatement();
}

function goNextStatement(){
    x++;
    if(x >= subjects.length){
        chooseParties();
    }else{
        title.innerHTML = subjects[x].title;
        description.innerHTML = subjects[x].statement;
    }
}

function chooseParties(){
    startKnop.style.display = 'none';
    skipKnop.style.display = 'none';
    description.style.display = 'none';
    title.innerHTML = "Welke soort partijen wil je meenemen in het resultaat?";
    eensKnop.innerHTML = "zittende partijen";
    oneensKnop.innerHTML = "seculiere partijen";
    idkKnop.innerHTML = "alle partijen";
    eensKnop.onclick = function() {mainParties()};
    oneensKnop.onclick = function() {sideParties()};
    idkKnop.onclick = function() {allParties()};
}

function mainParties(){
    var selectedParties = parties.filter(party => party.size > 0);

    chooseStatement();
}

function sideParties(){
    var selectedParties = parties.filter(party => party.size < 1);

    chooseStatement();
}

function allParties(){
    var selectedParties = parties;

    chooseStatement();
}

function chooseStatement(){
    oneensKnop.style.display = 'none';
    idkKnop.style.display = 'none';
    title.innerHTML = "Zijn er onderwerpen die u extra belangrijk vindt?";
    eensKnop.innerHTML = "Ga verder";
    generateList();
    eensKnop.onclick = function() {showResult()};
}

function generateList(){
    for(y = 0; y < subjects.length; y++){
        var li = document.createElement("li");
        var t = document.createTextNode(subjects[y].title);
        var checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("subjectIndex", y);
        li.appendChild(checkBox);
        li.appendChild(t);
        document.getElementById("vragenlijst").appendChild(li);
    }

}

function readList(){
    var importantList = document.querySelectorAll('#vragenlijst li input');
    for(i = 0; i < importantList.length; i++){
        subjects[i].important = importantList[i].checked;
        questions++;
    }
}

function compareStatement(){
    for(b = 0; b < subjects.length; b++){
        for(a = 0; a < parties.length; a++){
            if(antwoorden[b] == subjects[b].parties[a].position){
                parties[a].score++;
                if(subjects[b].important == true){
                    parties[a].score++;
                }else{
                    parties[a].score + 0;
                }
            }else if(antwoorden[b] == "undefined"){
                parties[a].score + 0;
            }
        };
    }
}

function showResult(){
    readList();
    compareStatement();
    eensKnop.style.display = 'none';
    vragenlijst.style.display = 'none';
    description.style.display = 'inline';
    title.innerHTML = "Hier zijn uw resultaten";
    description.innerHTML = "";
    for(e = 0; e <= parties.length - 1; e++){
        var result = Math.round((parties[e].score / questions) * 100);
        var li = document.createElement("li");
        var p = document.createTextNode(parties[e].name);
        var t = document.createTextNode(result);
        li.appendChild(p);
        li.appendChild(t);
        document.getElementById("description").appendChild(li);
    }
}
