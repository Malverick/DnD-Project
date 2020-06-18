'use strict'
//if (typeof jQuery == "undefined") {
//    alert("jQuery is not installed");
//} else {
//    alert("jQuery is installed");
//}

let doc = document.getElementById("listholder");

function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}
//race dropdown options
$(".dropButton").click(function () {
    var clickedObj = $(this).text();
    document.getElementById("racialChoice").innerHTML = clickedObj;
    console.log("drop down button clicked: " + clickedObj + "" + $("#racialChoice").attr("class"));


    //switch (clickedObj) {
    //    case "Dwarf":

    //        break;
    //    case "Elf":

    //        break;
    //    case "Halflng":

    //        break;
    //    case "Human":

    //        break;
    //    case "Dragonborn":

    //        break;
    //    case "Gnome":

    //        break;
    //    case "Half-Elf":

    //        break;
    //    case "Half-orc":

    //        break;
    //    case "Tiefling":

    //        break;
    //}
});

//function dwarf() {
//    document.getElementById("racialChoice").innerHTML = "Dwarf";
//    //need to add the code which tells james' api which choice the user has chosen
//}
function elf() {
    document.getElementById("racialChoice").innerHTML = "Elf";
}
function halfling() {
    document.getElementById("racialChoice").innerHTML = "Halfling";
}
function human() {
    document.getElementById("racialChoice").innerHTML = "Human";
}
function dragonborn() {
    document.getElementById("racialChoice").innerHTML = "Dragonborn";
}
function gnome() {
    document.getElementById("racialChoice").innerHTML = "Gnome";
}
function half_elf() {
    document.getElementById("racialChoice").innerHTML = "Half-Elf";
}
function half_orc() {
    document.getElementById("racialChoice").innerHTML = "Half-Orc";
}
function tiefling() {
    document.getElementById("racialChoice").innerHTML = "Tiefling";
}
//-------------

// Class dropdown options
function barbarian() {
    document.getElementById("").value = "Barbarian";
}
function bard() {
    document.getElementById("dropdown2").value = "Bard";
}
function druid() {
    document.getElementById("dropdown2").value = "Druid";
}
function fighter() {
    document.getElementById("dropdown2").value = "Fighter";
}
function monk() {
    document.getElementById("dropdown2").value = "Monk";
}
function paladin() {
    document.getElementById("dropdown2").value = "Paladin";
}
function ranger() {
    document.getElementById("dropdown2").value = "Ranger";
}
function rogue() {
    document.getElementById("dropdown2").value = "Rogue";
}
function sorcerer() {
    document.getElementById("dropdown2").value = "Sorcerer";
}
function warlock() {
    document.getElementById("dropdown2").value = "Warlock";
}
function wizard() {
    document.getElementById("dropdown2").value = "Wizard";
}
//----------------

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
async function postCharacter() {
    const charName = document.getElementById("name");
    let charRace = document.getElementById("dropdown1");

    //change the below to a case statement ----------------------------------
    if (charRace.value == "Human") {
        charRace.value = 1;
    }
    else if (charRace.value == "High Elf") {
        charRace.value = 2;
    }
    else if (charRace.value == "Dwarf") {
        charRace.value = 3;
    } else {
        console.log("No valid Race input");
    }
    let charClass = document.getElementById("dropdown2");
    if (charClass.value == "Wizzard") {
        charClass.value = 1;
    }
    else if (charClass.value == "Fighter") {
        charClass.value = 2;
    }
    else if (charClass.value == "Cleric") {
        charClass.value = 3;
    } else {
        console.log("No valid class input");
    }
    console.log(charName.value + charRace.value + charClass.value);
    console.log('http://localhost:8080/dndchars/addThingChar/' + charName.value + "/" + charRace.value + "/" + charClass.value);
    const characterResponse = await fetch('http://localhost:8080/dndchars/addThingChar/' + charName.value + "/" + charRace.value + "/" + charClass.value, { method: 'POST' });
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