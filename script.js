// Palabras de encriptación y desencriptacion.
let keys = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

//Obtener botones
let encrypt = document.getElementById("encrypt");
let decrypt = document.getElementById("decrypt");
let copy = document.getElementById("copy");

//Llamar a funciones
encrypt.onclick = encrypting;
decrypt.onclick = decrypting;
copy.onclick = copying;

//Funcion para encriptar
function encrypting() {
	let message = document.getElementById("message").value.toLowerCase();

	if (message != "") {
		for (let i = 0; i < keys.length; i++) {
			if (message.includes(keys[i][0])) {
				message = message.replaceAll(keys[i][0], keys[i][1]);
			}
		}

		show(message);
	} else {
		clean();
	}
}

//Funcion para desencriptar
function decrypting(argument) {
	let message = document.getElementById("message").value.toLowerCase();

	if (message != "") {
		for (let i = 0; i < keys.length; i++) {
			if (message.includes(keys[i][1])) {
				message = message.replaceAll(keys[i][1], keys[i][0]);
			}
		}

		show(message);
	} else {
		clean();
	}
}

//Funcion para copiar copiar
function copying() {
	let showmessage = document.getElementById("showmessage").value.toLowerCase();
	document.getElementById("message").value = showmessage;

	const copyshowmessage = document.getElementById("showmessage");
	copyshowmessage.select();
	copyshowmessage.setSelectionRange(0, 99999);
	document.execCommand('copy');
}

// Funcion para mostar el mensaje
function show(message) {
	document.querySelector(".textarea-show").style.display = "inline";
	document.getElementById("showmessage").value = message;
	document.querySelector(".img-muneco").style.display = "none";
	document.querySelector(".text-warning").style.display = "none";
	document.querySelector(".text-instruction").style.display = "none";
	document.querySelector(".btn-copy").style.display = "inline";
}

//Funcion para limpiar y restablecer
function clean() {
	document.querySelector(".textarea-show").style.display = "none";
	document.getElementById("showmessage").value = "";
	if (screen.width > 1025) {
		document.querySelector(".img-muneco").style.display = "block";
	} else {
		document.querySelector(".img-muneco").style.display = "none";
	}
	document.querySelector(".text-warning").style.display = "block";
	document.querySelector(".text-instruction").style.display = "block";
	document.querySelector(".btn-copy").style.display = "none";
}