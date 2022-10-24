const nombre = document.getElementById("name")
const correo = document.getElementById("mail")
const telefono = document.getElementById("tel")
const texto = document.getElementById("msg")
const formulario = document.getElementById("form")
const alerta = document.getElementById("alerta")

formulario.addEventListener("submit", evento => {
    evento.preventDefault();
    let alertas = "";
    let correcto = true;
    const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    alerta.innerHTML = ""

    if (nombre.value.length < 6) {
        alertas += `<br><b><p style="color:#FF5733">El nombre no es válido (debe ser mayor a 6 caracteres) </b></p><br>`;
        correcto = false;
    }
    if (!emailRegExp.test(correo.value)) {
        alertas += `<b><p style="color:#FF5733">El email no es válido </b></p> <br>`;
        correcto = false;
    }
    if (telefono.value.length < 10) {
        alertas += `<b><p style="color:#FF5733">El teléfono no es válido (la cantidad de números debe ser superior a 10)</b></p><br>`;
        correcto = false;
    }

    if (texto.value.length < 10) {
        alertas += `<b><p style="color:#FF5733">Se debe completar el campo "Mensaje "</b></p>`;
        correcto = false;
    }

    if (!correcto) {
        alerta.innerHTML = alertas;
    } else {
        alerta.innerHTML =  `<b><p style="color:#42FF00">Enviado correctamente </b></p> `;
    }
})
