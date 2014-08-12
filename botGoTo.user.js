// ==UserScript==
// @name        botGoTo
// @namespace   bot
// @include     http://www.ganjawars.ru/warlog.php?*
// @version     1
// @grant       none
// ==/UserScript==
function openMain()
{
	window.open("http://www.ganjawars.ru/me/", "_self");	
}

var interval = Math.random() * (4000 - 1000) + 1000; 
setInterval(openMain, interval);
