//setting prison
//races Orc, Elf, Human
//weapons Crossbow, Greatsword, Warhammer, Twin Daggers

alert("You awake in a jail cell, with a pounding in the back of your skull. You glance around to get your barings before getting to your feet."); 
 
var playerRace = prompt("Choose a Race: Orc, Elf, or Human."); 
console.log(playerRace); 
 
var playerName = prompt ("What is your name?"); 
console.log(playerName); 
 
var armorList = ["light", "medium", "Heavy"];

var Hero = {
    weapon: "none",
    strength: 5,
    armor: "none",

    UpgradeArmor: function(change){
        this.armor = change;
    },

}

alert("Its extremly quiet. There's a door and a window. You go to the door finding it unlocked. Outside the cell is a chest you open it to find some weapons. A Crossbow, a Greatsword, a Warhammer, and Twin Daggers."); 
var weapon = prompt("Choose your weapon"); 

var survival = randomNumber()

alert("You examine your new weapon and hear a loud noise further down the hall. You ready your " + weapon + ". Suddenly a zombie came running down the hall."); 
function randomNumber(survival){
     Math.random(2); 

if (survival === 0){ 
    alert("You dodge the attack and continue through the jail."); 
} else if ( survival > 0){ 
    alert("You kill the enemy and continue your way through the jail.") 
}
alert("You pick up scraps of cloth and metal before you reach the exit and you can now make armor.")
Hero.UpgradeArmor(prompt("What kind of armor will you make light, medium or heavy?"));
alert(playerName + " now has " + Hero.armor + " armor.");

alert("You leave the jail and step out into the street. You notice a small goblin looking through some trash. Of course you attack it for the exp. Your attack hits but the goblin lived and strikes back.")

if(survival === 0){
    alert("Goblin lands a hit dropping your health to 10.")
} else if (survival > 0){
    alert("You dodge the attack and ready for your next attack.")
}

if(survival === 0){
    alert("You attack the goblin again killing it.")
} else if (survival > 0){
    alert("You decide to run from the goblin.")
}

alert("Catching your breath you sense a something sneaking up behind you.")

if(survival === 0){
    alert("You turn and counter the attacker.")
} else if (survival > 0){
    alert("You take a direct hit to your back.")
}

alert("Trying to get a hold of the situation you examine the enemy. It appears to be demon.")

if(survival === 0){
    alert("You unleash your a final attack and kill the demon.")
} else if (survival > 0){
    alert("The demon grabs you and places a gem to your forehead teleporting you to the demon realm.")
}

alert("To Be Continued...")
}