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
	var grenade = document.getElementById("bagaboom"); 

	if (button != null)
	{
		if (grenade != null)
			grenade.checked = true;

		fight();
	}
	else
		updatedata();
}

var interval = Math.random() * (7000 - 3000) + 3000;
setInterval(voidUpdate, interval);

