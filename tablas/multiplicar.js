function generarTablas(){
    let contenedor = document.getElementById("tabla-contenedor")
    let contenido = ""
    for(let i = 1; i<=10; i++){
        contenido += "<div class='fila'>";
        contenido += "<span>" + 5 + " x " + i + "</span>";
        contenido += "<span> = </span>";
        contenido += "<span>" + (5 * i) + "</span>";
        contenido += "</div>";
    }
    contenedor.innerHTML = contenido;
}
