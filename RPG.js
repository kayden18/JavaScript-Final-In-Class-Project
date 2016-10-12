//setting prison
//races Orc, Elf, Human
//weapons Crossbow, Greatsword, Warhammer, Twin Daggers
//Items Heath Potion, gold, reviver

alert("You awake in a jail cell, with a pounding in the back of your skull. You glance around to get your barings before getting to your feet.");

var playerRace = prompt("Choose a Race: Orc, Elf, or Human.");
console.log(playerRace);

var playerName = prompt ("What is your name?");
console.log(playerName);

alert("Its extremly quiet. There's a door and a window.");

var escape = prompt ("Which exit do you choose?");

alert("You go to the " + escape + " finding it locked. You attempt to pick the lock.");

var lockpickSkill = Math.round(Math.random() * 1);

var beginningScenarios = [""];

function randomNumber( range ) {
    return Math.round( Math.random( ) * range );
}

alert( beginningScenarios[ randomNumber(beginningScenarios.length - 1 ) ] );

    var weaponList = ["axe", "crossbow", "chainsaw", "katana", "rubber chicken"];
    
    var weapon = weaponList[ randomNumber ( weaponList.length - 1 ) ];
    alert("You escape the cell and hear a loud noise further down the hall. your search around for a" + weapon + ".");

alert("Suddenly a zombie bursts through the door! You ready your " + weapon + " and advance towards the zombie.");

var survival = randomNumber(2)

if (survival === 0){
    alert("The zombie bites you. You lose! ");
} else if ( survival > 0){
    alert("You kill the zombie with your " + weapon + ". You win!")
}