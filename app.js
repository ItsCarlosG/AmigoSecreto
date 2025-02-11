let listaNombres = [];


function agregarAmigo() {
    document.getElementById("listaAmigos").innerHTML = "";
    nombre = document.getElementById("amigo").value;

    if (nombre !== "") {
        listaNombres.push(nombre);
        document.getElementById("amigo").value = "";
    } else {
        alert("Por favor, inserte un nombre.");
    }

    let listaAmigos = document.getElementById("listaAmigos");

    listaNombres.forEach((nombre) => {
        let liElement = document.createElement('li');
        liElement.textContent = nombre;
        listaAmigos.appendChild(liElement);
    });
}

function sortearAmigo() {
    document.getElementById("resultado").innerHTML = "";
    let indiceAleatorio = Math.floor(Math.random() * listaNombres.length);
    let ulResultado = document.getElementById("resultado");
    let liResultado = document.createElement("li");
    liResultado.textContent = "El amigo secreto sorteado es: "+listaNombres[indiceAleatorio];
    ulResultado.appendChild(liResultado);
}
