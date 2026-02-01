
let usuarios = []; // variable global para guardar usuarios
window.addEventListener("DOMContentLoaded", cargarUsuarios);
//funcion cargarUsuarios()
// Hace la peiticion a AJAX (fetch)
function cargarUsuarios(){
    fetch("https://jsonplaceholder.typicode.com/users")
        //la respuesta a JSON
        .then(respuesta => respuesta.json())
        // cuando llegan los datos
        .then(datos => {
            usuarios = datos;      //  se fguarda en una variabls en variable
            pintarTabla(usuarios); //se muestran todos
        })
        .catch(error => console.log(error));
}
// funcion pintarTabla(lista)
// Recibe un array y crea las filas
function pintarTabla(lista){
    const tabla = document.getElementById("tablaUsuarios");
    // se limpia la tabla antesd de pintar la tabla de nuevo
    tabla.innerHTML = "";
    // recorremos cada usuario
    lista.forEach(usuario => {
        let fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${usuario.name}</td>
            <td>${usuario.address.street}</td>
            <td>${usuario.address.city}</td>
        `;
        tabla.appendChild(fila);
    });

}
// buscador por  nombre
document.getElementById("btnBuscar").addEventListener("click", buscar);
function buscar(){
    let texto = document
        .getElementById("busqueda")
        .value
        .toLowerCase();
    // filtramos lo usuareios que contiene parte del nkmbre
    let filtrados = usuarios.filter(usuario =>
        usuario.name.toLowerCase().includes(texto)
    );
    pintarTabla(filtrados);
}
