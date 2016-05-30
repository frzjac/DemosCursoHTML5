function operacion(parm) {
	var num1 = parseInt(document.getElementById('num1').value);
	var num2 = parseInt(document.getElementById('num2').value);
	var res = document.getElementById('res');

	if (parm == 'suma') {
		resu = num1 + num2;
		res.innerHTML = resu
	}

	if (parm == 'resta') {
		resu = num1 - num2;
		res.innerHTML = resu
	}

	if (parm == 'mult') {
		resu = num1 * num2;
		res.innerHTML = resu
	}

	if (parm == 'div') {
		resu = num1 / num2;
		res.innerHTML = resu
	}
}