//ajax y el filtro de categoria
const selectCat = document.getElementById("selectCat");
const listaBicis = document.getElementById("listaBicis");
// evento cuando cambia select
selectCat.addEventListener("change", function(){
    let cat = selectCat.value;
    // si es "Todas" no le pasamos cat
    let url = "https://api.raulserranoweb.es/rest.php";
    if(cat !== "Todas"){
        url += "?cat=" + cat;
    }
    cargarBicis(url);

});
//para hacer fetch
function cargarBicis(url){
    fetch(url)
        .then(res => res.json())
        .then(datos => {
            pintarBicis(datos);
        })
        .catch(error => console.log(error));

}
// para pintar el catalogo de bicis
function pintarBicis(lista){
    listaBicis.innerHTML = ""; // limpiamos
    lista.forEach(bici => {
        // la imagen segun la url
        let imgUrl = "https://api.raulserranoweb.es/imagenes_art/" + bici.cod;
        let div = document.createElement("div");
        div.classList.add("bici");
        div.innerHTML = `
            <img src="${imgUrl}" alt="Bici ${bici.nom}">
            <h3>${bici.nom}</h3>
            <p><strong>Categoría:</strong> ${bici.cat}</p>
            <p>${bici.des}</p>
        `;
        listaBicis.appendChild(div);

    });

}
//cuandop se carga la pagina al inicio se muestrabn todas la bicis
cargarBicis("https://api.raulserranoweb.es/rest.php");