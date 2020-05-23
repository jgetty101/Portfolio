var elements = document.querySelectorAll
('.word');
for (var i = 0, l = elements.length; i < l; i++) {
	var str = elements[i].textContent;
	elements[i].innerHTML = '';
	for (var j = 0, ll = str.length; j 
	< ll; j++)    {
		var spn = document.createElement('span');
		elements[i].appendChild(spn);
		spn.textContent = str[j];
		let pos = (j % 2) ? 'up' : 'down';
		spn.classList.add(pos);
	}
 }