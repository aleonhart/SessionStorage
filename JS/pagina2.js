function mostrarNombre() {
    const nombre = sessionStorage.getItem("nombre");
    const ciudad = sessionStorage.getItem("ciudad");
    if (ciudad === null || ciudad === "" || nombre === null || nombre === "") {
        document.getElementById("saludo").textContent = "No hay datos guardados";
    } else {
        document.getElementById("saludo").textContent = "Hola, " + nombre + " de " + ciudad;
    }
}
function borrar() {
    sessionStorage.removeItem("nombre");
    mostrarNombre();
}
function borrarCiudad() {
    sessionStorage.removeItem("ciudad");
    mostrarCiudad();
}
function borrarTodo() {
    sessionStorage.clear();
    mostrarNombre();
    mostrarCiudad();
}

document.addEventListener("DOMContentLoaded", mostrarNombre);
document.getElementById("btn-borrar-todo").addEventListener("click", borrarTodo);