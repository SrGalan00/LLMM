// Variables globales
const addRecipeButton = document.getElementById('add-recipe-btn');
const recipesContainer = document.getElementById('recipes-container');
const archivedContainer = document.getElementById('archived-container');

// Función para crear una nueva receta
function addNewRecipe() {
    const recipeDiv = document.createElement('div');
    recipeDiv.classList.add('recipe');

    const nameInput = prompt('Ingresa el nombre de la receta:');
    if (!nameInput) {
        alert('¡El nombre no puede estar vacío!');
        return;
    }

    const ingredientsInput = prompt('Ingresa los ingredientes separados por comas:');
    if (!ingredientsInput) {
        alert('¡Debes ingresar los ingredientes!');
        return;
    }

    const stepsInput = prompt('Ingresa los pasos de la receta:');
    if (!stepsInput) {
        alert('¡Debes ingresar los pasos!');
        return;
    }

    const name = document.createElement('h3');
    name.classList.add('name');
    name.textContent = nameInput.toUpperCase();
    name.onclick = toggleDetails;

    const details = document.createElement('p');
    details.classList.add('details');
    const ingredientes = ingredientsInput.split(',').map(i => `• ${i.trim()}`).join('\n');
    details.textContent = `Ingredientes:\n${ingredientes}\n\nPasos:\n${stepsInput}`;
    details.style.whiteSpace = 'pre-line';

    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Mostrar/Ocultar Detalles';
    toggleButton.onclick = () => {
        details.style.display = details.style.display === 'none' ? 'block' : 'none';
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.onclick = () => {
        recipeDiv.remove();
    };

    const archiveButton = document.createElement('button');
    archiveButton.textContent = 'Archivar';
    archiveButton.onclick = () => {
        // Mover al contenedor de recetas guardadas
        archivedContainer.appendChild(recipeDiv);
        archiveButton.style.display = 'none'; // Ocultar botón de archivar
    };

    recipeDiv.appendChild(name);
    recipeDiv.appendChild(details);
    recipeDiv.appendChild(toggleButton);
    recipeDiv.appendChild(deleteButton);
    recipeDiv.appendChild(archiveButton);

    recipesContainer.appendChild(recipeDiv);
}

// Alternar visibilidad de detalles al hacer clic en el nombre
function toggleDetails(event) {
    const details = event.target.nextElementSibling;
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
}

// Listener del botón principal
addRecipeButton.addEventListener('click', addNewRecipe);
