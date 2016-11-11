var menu = document.getElementsByClassName('menu');

var items = document.getElementsByClassName('navItem');

for (var i = 0; i < menu.length; i++) {
	menu[i].style.width = 100 / items.lenght;
}