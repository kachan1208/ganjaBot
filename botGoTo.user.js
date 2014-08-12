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

setInterval(openMain, 4000);
