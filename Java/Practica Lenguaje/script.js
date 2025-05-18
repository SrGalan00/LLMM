// script.js

// Variables globales
const addEntryButton = document.getElementById('add-entry-btn');
const entriesContainer = document.getElementById('entries-container');

// Función para crear una nueva entrada
function addNewEntry() {
    const entryDiv = document.createElement('div');
    entryDiv.classList.add('entry');

    const titleInput = prompt('Ingresa el título de la entrada:');
    if (!titleInput) {
        alert('¡El título no puede estar vacío!');
        return; // No continuar si el título está vacío
    }

    const title = document.createElement('h3');
    title.classList.add('title');
    title.textContent = titleInput.toUpperCase(); // Convertir título a mayúsculas
    title.onclick = toggleContent;

    const content = document.createElement('p');
    content.classList.add('content');
    content.textContent = 'Este es el contenido de la entrada. Haz clic en "Leer más" para ver más detalles.';
    
    const readMoreButton = document.createElement('button');
    readMoreButton.textContent = 'Leer más';
    readMoreButton.onclick = () => {
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.onclick = () => {
        entriesContainer.removeChild(entryDiv);
    };

    const archiveButton = document.createElement('button');
    archiveButton.textContent = 'Archivar';
    archiveButton.onclick = () => {
        entryDiv.classList.toggle('archived');
    };

    entryDiv.appendChild(title);
    entryDiv.appendChild(content);
    entryDiv.appendChild(readMoreButton);
    entryDiv.appendChild(deleteButton);
    entryDiv.appendChild(archiveButton);

    entriesContainer.appendChild(entryDiv);
}

// Función para alternar la visibilidad del contenido
function toggleContent(event) {
    const content = event.target.nextElementSibling;
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
}

// Event listener para el botón de agregar entrada
addEntryButton.addEventListener('click', addNewEntry);

