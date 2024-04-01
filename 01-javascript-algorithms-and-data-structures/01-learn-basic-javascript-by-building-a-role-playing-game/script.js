let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
button1.onclick = goStore;
const button2 = document.querySelector("#button2");
button2.onclick = goCave;
const button3 = document.querySelector("#button3");
button3.onclick = fightDragon;

const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

function goStore() {
    button1.innerText = "Buy 10 health (10 gold)";
}

function goCave() {
    button2.innerText = "Buy weapon (30 gold)";
}

function fightDragon() {
    button3.innerText = "Go to town square";
}