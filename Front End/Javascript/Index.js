'use strict'
//if (typeof jQuery == "undefined") {
//    alert("jQuery is not installed");
//} else {
//    alert("jQuery is installed");
//}

//race dropdown options

$(".charRace").click(function () {
    var clickedObj = $(this).text();
    document.getElementById("racialChoiceText").innerHTML = clickedObj;
});
//-------------

// Class dropdown options
$(".charClass").click(function () {
    var clickedObj = $(this).text();
    document.getElementById("classChoiceText").innerHTML = clickedObj;
});
//----------------
// test jquery ui dropdowns
$(function () {
    $("#racialChoice").selectmenu();
    $("#classChoice").selectmenu();
});
// async function getRaces() {
//     const raceResponse = await fetch('http://localhost:8080/dndchars/getThingRace');
//     const raceJson = await raceResponse.json();
//     console.log(JSON.stringify(raceJson));
// }
// async function getClass() {
//     const classResponse = await fetch('http://localhost:8080/dndchars/getThingClass');
//     const classJson = await classResponse.json();
//     console.log(JSON.stringify(classJson));
// }
// async function getCharacter() {
//     const characterResponse = await fetch('http://localhost:8080/dndchars/getThingChar/');
//     const characterJson = await characterResponse.json();
//     console.log(characterJson);
//     console.log(JSON.stringify(characterJson));
// }
function character(name, raceID, classID) {
    this.name = "#name"; 
    this.raceID = "#rID";
    this.classID = "#cID";
}
async function postCharacter() {
    var char = new character()
    if (document.getElementById("enteredName").value === "") {
        getRandomName(char);
    } else {
        char.Name = document.getElementById("enteredName").value;
        createCharacter(char);
    }
}

function getRandomName(cName) {
    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/https://randommer.io/api/Name?nameType=firstname&quantity=1',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-Api-Key", "4d0ed583a2fd49e3accf5987352c72c2")
        }, success: function(data) {
            console.log(data);
            //process the JSON data etc
            cName.Name = data;
            createCharacter(cName);
        }
    })
}

function createCharacter(char) {
    var charRace = $("#racialChoice").val();
    var charClass = $("#classChoice").val();

    //Race Selector
    switch (charRace) {
        case "Dwarf":
            char.raceID = 1;
            break;
        case "Elf":
            char.raceID = 2;
            break;
        case "Halfling":
            char.raceID = 3;
            break;
        case "Human":
            char.raceID = 4;
            break;
        case "Dragonborn":
            char.raceID = 5;
            break;
        case "Gnome":
            char.raceID = 6;
            break;
        case "Half-Elf":
            char.raceID = 7;
            break;
        case "Half-Orc":
            char.raceID = 8;
            break;
        case "Tiefling":
            char.raceID = 9;
            break;
    }
    //Class selector
    switch (charClass) {
        case "Barbarian":
            char.classID = 1;
            break;
        case "Bard":
            char.classID = 2;
            break;
        case "Cleric":
            char.classID = 3;
            break;
        case "Druid":
            char.classID = 4;
            break;
        case "Fighter":
            char.classID = 5;
            break;
        case "Monk":
            char.classID = 6;
            break;
        case "Paladin":
            char.classID = 7;
            break;
        case "Ranger":
            char.classID = 8;
            break;
        case "Rogue":
            char.classID = 9;
            break;
        case "Sorcerer":
            char.classID = 10;
            break;
        case "Warlock":
            char.classID = 11;
            break;
        case "Wizard":
            char.classID = 12;
            break;
    }

    $("#charListing").append('<div class="savedUserChar">' + char.Name + ' - ' + charRace + ' - ' + charClass + '</div>');
}

// async function deleteCharacter() {
//     charName = document.getElementById("name").value;
//     const characterResponse = await fetch('http://localhost:8080/dndchars/deleteThingChar/' + charName, { method: 'DELETE' });
// }
// async function updateCharacter() {
//     charName = document.getElementById("name").value;
//     const characterResponse = await fetch('http://localhost:8080/dndchars/deleteThingChar/' + charName, { method: 'PUT' });
// }
//async function showChars() {
//    if (document.getElementById("listholder").innerHTML == "") {
//        console.log(" moving on ");
//    }
//    else{
//        document.getElementById("listholder").innerHTML = "";
//    }
    //const characterResponse = await fetch('http://localhost:8080/dndchars/getThingChar/');
    //const characterJson = await characterResponse.json();
    //console.log(characterJson);

//    for (let d of characterJson) {
//        let st = document.createElement("div");
//        st.className = "Char_List";
//        let h = document.createElement("h4");
//        let p = document.createElement("p");
//        h.innerText = d.charName + "\n";
//        p.innerText = "\n" + d.race.race + "\n \n" + d.class.class;

//        let img = document.createElement("img");
//        img.className = "classPics";

//        st.append(h, img, p);
//        doc.appendChild(st);
//    }
//}
async function delChar() {
    const charName = document.getElementById("name").value;
    console.log('http://localhost:8080/dndchars/deleteThingChar/' + charName)
    const characterResponse = await fetch('http://localhost:8080/dndchars/deleteThingChar/' + charName, { method: 'DELETE' });
}

async function updateChar() {
    const charNew = document.getElementById("charNew").value;
    const charOld = document.getElementById("charOld").value;
    console.log('http://localhost:8080/dndchars/updateThingChar/' + charNew + "/" + charOld)
    const characterResponse = await fetch('http://localhost:8080/dndchars/updateThingChar/' + charNew + "/" + charOld, { method: 'PUT' });
}