// ==UserScript==
// @name        botFighter
// @namespace   bot
// @description fight
// @include     http://www.ganjawars.ru/b0/btl.php?bid=*
// @version     1
// @grant       none
// ==/UserScript==

function voidUpdate()
{
	var button = document.getElementById("movego");
	
	if(button != null)
		fight();
	else
		updatedata();
}
setInterval(voidUpdate, 5000);

