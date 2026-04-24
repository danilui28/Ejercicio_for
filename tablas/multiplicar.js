function generarTablas(){

    if (!validar()) return;

    let contenedor = document.getElementById("tabla-contenedor")
    let numero = document.getElementById("numero").value;
    let titulo = document.getElementById("titulo");
    let contenido = ""
    
    titulo.innerText = "Tabla del " + numero;
    numero = parseInt(numero);

    for(let i = 1; i<=10; i++){
        contenido += "<div class='fila'>";
        contenido += "<span>" + numero + " x " + i + "</span>";
        contenido += "<span> = </span>";
        contenido += "<span>" + (numero * i) + "</span>";
        contenido += "</div>";
    }
    contenedor.innerHTML = contenido;
}

let input = document.getElementById("numero");
let mensaje = document.getElementById("mensaje");

input.addEventListener("input", validar);

function validar() {
    let valor = input.value;

    if (valor === "") {
        mensaje.textContent = "⚠️ Ingresa un número";
        mensaje.className = "mensaje error";
        input.className = "input-error";
        return false;
    }

    if (valor <= 0) {
        mensaje.textContent = "⚠️ Debe ser mayor a 0";
        mensaje.className = "mensaje error";
        input.className = "input-error";
        return false;
    }

    if (valor > 20) {
        mensaje.textContent = "⚠️ Máximo permitido: 20";
        mensaje.className = "mensaje error";
        input.className = "input-error";
        return false;
    }

    mensaje.textContent = "✔ Número válido";
    mensaje.className = "mensaje ok";
    input.className = "input-ok";
    return true;
}
