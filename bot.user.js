// ==UserScript==
// @name        bot
// @namespace   bot
// @description bot for ganjawars.ru
// @include     http://www.ganjawars.ru/me/
// @version     1
// @grant       none
// ==/UserScript==

function findBattle()
{
	window.open("http://www.ganjawars.ru/wargroup.php?war=armed", "_self");
	console.log("battle");
}

function debug()
{
	console.log(fullHp + " " + currentHp + " " + hpToBattle);
	console.log(percentToBattle);
}

function main() 
{
	currentHp = hp_current;
	if (hpToBattle <= currentHp)
	{
		var interval = Math.floor(Math.random() * (20000 - 1000 + 1)) + 1000;
		console.log(interval);
		clearInterval(main);
		setInterval(findBattle, interval);
	}
}

var percentToBattle = Math.floor(Math.random() * (100 - 83 + 1)) + 83;
var fullHp = hp_max;
var currentHp = hp_current;
var hpToBattle = fullHp / 100 * percentToBattle;  
var main = setInterval(main, 1000);
