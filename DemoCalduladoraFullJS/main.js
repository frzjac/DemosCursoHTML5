var num1 = 0;
var num2 = 0;

var proceso;


function entrada(valorBtn){
	var entrada = document.getElementById('entrada');
	if (entrada.value == "0" || num1 == 0) {
		num1 = valorBtn;
	} else{
		num1 += valorBtn;
	}
	entrada.value = num1;
}

function operacion(op){
	var entrada = document.getElementById('entrada');
	if (num1 == 0) {
		resultado = entrada.value;
	}
	num2 = parseInt(num1);
	num1 = 0;
	proceso = op;
}

function resultado(){
	num1 = parseInt(num1);
	switch(proceso){
		case 'suma':
			num1 += num2;
			break
		case 'resta':
			num1 = num2 - mun1;
			break
		case 'mult':
			num1 += num2;
			break
		case 'div':
			num1 = num2 - mun1;
			break
	}
	document.getElementById('entrada').value = num1;	
}
 function borrar(){
 	num1 = 0;
 	num2 = 0;
 	document.getElementById('entrada').value = '0'
 }

