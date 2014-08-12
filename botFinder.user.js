// ==UserScript==
// @name        botFinder
// @namespace   bot
// @description findBattle
// @include     http://www.ganjawars.ru/wargroup.php?war=armed
// @version     1
// @grant       none
// ==/UserScript==

function findBattle() {
	var battles = document.getElementsByTagName("u");
	window.open(battles[0].parentNode.href, "_self");
}

var interval = Math.floor(Math.random() * (7000 - 4000 + 1)) + 4000;
console.log(interval);
setInterval(findBattle, interval);