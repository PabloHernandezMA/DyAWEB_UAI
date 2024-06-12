// Función para agregar el elemento a la lista
function agregarElemento() {
    // Obtenemos el valor del campo de entrada
    var nuevoTexto = document.getElementById("textoNuevo").value;

    // Verificamos que el campo de entrada no esté vacío
    if (nuevoTexto !== "") {
        // Buscamos la lista desordenada por su id
        var lista = document.getElementById("miLista");

        // Creamos un nuevo elemento de lista (<li>) y le asignamos el valor del campo de entrada
        var nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = nuevoTexto;

        // Creamos un botón para eliminar el elemento
        var botonEliminar = document.createElement("button");
        botonEliminar.className = "eliminarBtn";
        botonEliminar.innerHTML = '<i class="fas fa-trash-alt"></i>';

        // Agregamos un event listener al botón para eliminar el elemento al hacer clic
        botonEliminar.addEventListener("click", function() {
            lista.removeChild(nuevoElemento);
        });

        // Agregamos el botón al elemento de lista
        nuevoElemento.appendChild(botonEliminar);

        // Agregamos el nuevo elemento a la lista desordenada
        lista.appendChild(nuevoElemento);

        // Limpiamos el campo de entrada después de agregar el elemento
        document.getElementById("textoNuevo").value = "";
    } else {
        // Mostramos una alerta si el campo de entrada está vacío
        alert("Por favor, ingresa un valor antes de agregarlo a la lista.");
    }
}

// Agregamos un event listener al botón "Agregar"
document.getElementById("agregarBtn").addEventListener("click", agregarElemento);