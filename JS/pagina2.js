function mostrarNombre() {
    const nombre = sessionStorage.getItem("nombre");
    if (nombre==="" || nombre === null) {
        document.getElementById("saludo").textContent = "No se ha guardado ningún nombre";
    } else {
        document.getElementById("saludo").textContent = "Hola, " + nombre;
    }
}
function borrar() {
    sessionStorage.removeItem("nombre");
    mostrarNombre();
}
document.addEventListener("DOMContentLoaded", mostrarNombre);
document.getElementById("btn-borrar").addEventListener("click", borrar);