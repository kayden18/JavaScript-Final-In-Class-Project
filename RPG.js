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

prompt("You go to the " + escape + " finding it locked. Do you search for a lockpick or try the other exit?");

