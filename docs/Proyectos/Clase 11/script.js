// Variables globales para la paginación
let currentPage = 1;
const charactersPerPage = 20;
let totalCharacters = 0;
let currentFilterUrl = "";

document
  .getElementById("getAllCharacters")
  .addEventListener("click", () => getAllCharacters(1));
document
  .getElementById("getFilteredCharacters")
  .addEventListener("click", () => getFilteredCharacters(1));
document
  .getElementById("prevPage")
  .addEventListener("click", () => changePage(-1));
document
  .getElementById("nextPage")
  .addEventListener("click", () => changePage(1));

// Función para obtener todos los personajes
async function getAllCharacters(page) {
  try {
    clearError(); // Limpia cualquier mensaje de error previo
    currentPage = page; // Establece la página actual
    currentFilterUrl = "https://rickandmortyapi.com/api/character"; // URL inicial de la API sin filtros

    // Hacer solicitud a la API con la página actual
    const response = await fetch(`${currentFilterUrl}/?page=${page}`);
    if (!response.ok) throw new Error("La respuesta no fue ok"); // Manejo de error
    const data = await response.json(); // Convertir la respuesta a JSON
    totalCharacters = data.info.count; // Obtener el número total de personajes
    displayCharacters(data.results, page); // Mostrar los personajes en la página
  } catch (error) {
    displayError(error.message); // Mostrar mensaje de error si ocurre un error
  }
}

// Función para obtener personajes filtrados
async function getFilteredCharacters(page) {
  // Obtener valores de los campos de filtro
  const name = document.getElementById("name").value;
  const status = document.getElementById("status").value;
  const species = document.getElementById("species").value;
  const type = document.getElementById("type").value;
  const gender = document.getElementById("gender").value;

  // Construir la URL con los parámetros de filtro
  currentFilterUrl = "https://rickandmortyapi.com/api/character/?";
  if (name) currentFilterUrl += `name=${name}&`;
  if (status) currentFilterUrl += `status=${status}&`;
  if (species) currentFilterUrl += `species=${species}&`;
  if (type) currentFilterUrl += `type=${type}&`;
  if (gender) currentFilterUrl += `gender=${gender}&`;

  try {
    clearError(); // Limpia cualquier mensaje de error previo
    currentPage = page; // Establece la página actual

    // Hacer solicitud a la API con los filtros aplicados y la página actual
    const response = await fetch(`${currentFilterUrl}page=${page}`);
    if (!response.ok) throw new Error("La respuesta no fue ok"); // Manejo de error
    const data = await response.json(); // Convertir la respuesta a JSON
    totalCharacters = data.info.count; // Obtener el número total de personajes filtrados
    displayCharacters(data.results, page); // Mostrar los personajes filtrados en la página
  } catch (error) {
    displayError(error.message); // Mostrar mensaje de error si ocurre un error
  }
}

// Función para mostrar los personajes en la página
function displayCharacters(characters, page) {
  const charactersDiv = document.getElementById("characters"); // Obtener el div donde se mostrarán los personajes
  charactersDiv.innerHTML = ""; // Limpiar cualquier contenido anterior
  const resultinfoDiv = document.getElementById("result-info-page"); // Obtener el div donde se mostrará la información de resultados
  const resultinfoCountDiv = document.getElementById("result-info-count"); // Obtener el div donde se mostrará la cantidad total de resultados
  resultinfoDiv.innerHTML = `<p>Página ${page}</p>`; // Mostrar la página actual
  resultinfoCountDiv.innerHTML = `<p>Total de resultados: ${totalCharacters}</p>`; // Mostrar el total de resultados

  // Iterar sobre los personajes y agregarlos al div de personajes
  characters.forEach((character) => {
    const characterDiv = document.createElement("div"); // Crear un nuevo div para el personaje
    characterDiv.className = "character"; // Asignar clase CSS al div
    characterDiv.innerHTML = `
            <h3>${character.name}</h3>
            <p>Status: ${character.status}</p>
            <p>Species: ${character.species}</p>
            <p>Type: ${character.type}</p>
            <p>Gender: ${character.gender}</p>
            <img src="${character.image}" alt="${character.name}">
        `; // Asignar contenido HTML al div del personaje
    charactersDiv.appendChild(characterDiv); // Añadir el div del personaje al div principal
  });

  updatePaginationControls(page); // Actualizar los controles de paginación
}

// Función para actualizar los controles de paginación
function updatePaginationControls(page) {
  document.getElementById("prevPage").disabled = page <= 1; // Deshabilitar el botón de anterior si estamos en la primera página
  document.getElementById("nextPage").disabled =
    page >= Math.ceil(totalCharacters / charactersPerPage); // Deshabilitar el botón de siguiente si estamos en la última página
}

// Función para cambiar de página
function changePage(direction) {
  currentPage += direction; // Actualizar la página actual

  // Llamar a la función correspondiente según si hay filtros aplicados o no
  if (
    currentFilterUrl.includes("name=") ||
    currentFilterUrl.includes("status=") ||
    currentFilterUrl.includes("species=") ||
    currentFilterUrl.includes("type=") ||
    currentFilterUrl.includes("gender=")
  ) {
    getFilteredCharacters(currentPage);
  } else {
    getAllCharacters(currentPage);
  }
}

// Función para mostrar mensajes de error
function displayError(message) {
  const charactersDiv = document.getElementById("characters"); // Obtener el div donde se mostrarán los personajes
  charactersDiv.innerHTML = `<p class="error">${message}</p>`; // Asignar el mensaje de error al div
}

// Función para limpiar mensajes de error
function clearError() {
  const charactersDiv = document.getElementById("characters"); // Obtener el div donde se mostrarán los personajes
  if (charactersDiv.querySelector(".error")) {
    charactersDiv.innerHTML = ""; // Limpiar el contenido del div si hay un mensaje de error
  }
}
