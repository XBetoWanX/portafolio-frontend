const botonEnviar = document.querySelector("#enviar");
botonEnviar.addEventListener("click", mostrarMensajeDeGracias)

const inputNombre = document.querySelector("#nombre");
const inpuEmail = document.querySelector("#email");
const inputAsunto = document.querySelector("#asunto");
const inputMensaje = document.querySelector("#mensaje");

const contenedorContacto = document.querySelector("#disabled");

function mostrarMensajeDeGracias(){
    contenedorContacto.style.visibility = 'visible';
    console.log(botonEnviar.value)
}

let emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"

function validarInputs(){
    for()
}