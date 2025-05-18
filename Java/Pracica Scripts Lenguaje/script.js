// Variables globales
const addRecipeButton = document.getElementById('add-recipe-btn');
const recipesContainer = document.getElementById('recipes-container');
const archivedContainer = document.getElementById('archived-container');

let archivedRecipes = []; // Array para guardar recetas archivadas (objetos)

// Función para crear una nueva receta
function addNewRecipe() {
    const recipeDiv = document.createElement('div');
    recipeDiv.classList.add('recipe');

    const nameInput = prompt('Ingresa el nombre de la receta:');
    if (!nameInput) {
        alert('¡El nombre no puede estar vacío!');
        return;
    }

    // Usamos funciones de cadenas: .toUpperCase(), .substring(), .charAt(), .indexOf()
    const nameFormatted = nameInput.toUpperCase().substring(0, 20); // máximo 20 caracteres
    const firstLetter = nameFormatted.charAt(0);
    const indexO = nameFormatted.indexOf('O'); // solo para ejemplo, no afecta funcionalidad

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
    name.textContent = nameFormatted;
    
    // Eventos onmouseover y onmouseout para cambiar color del título
    name.onmouseover = () => {
        name.style.color = '#e91e63'; // rosa fuerte
        name.style.cursor = 'pointer';
    };
    name.onmouseout = () => {
        name.style.color = '#333'; // color original
    };
    name.onclick = toggleDetails;

    const details = document.createElement('p');
    details.classList.add('details');

    // Procesamos ingredientes con split y join (arrays)
    const ingredientesArray = ingredientsInput.split(',').map(i => i.trim());
    const ingredientesLista = ingredientesArray.map(i => `• ${i}`).join('\n');

    // Guardamos en array las recetas archivadas como objetos para usar push/pop después
    const recipeObj = {
        name: nameFormatted,
        ingredients: ingredientesArray,
        steps: stepsInput
    };

    details.textContent = `Ingredientes (${ingredientesArray.length}):\n${ingredientesLista}\n\nPasos:\n${stepsInput}`;
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
        // Si la receta estaba archivada, también la eliminamos del array
        const index = archivedRecipes.findIndex(r => r.name === nameFormatted);
        if (index !== -1) {
            archivedRecipes.splice(index, 1);
        }
    };

    const archiveButton = document.createElement('button');
    archiveButton.textContent = 'Archivar';
    archiveButton.onclick = () => {
        archivedContainer.appendChild(recipeDiv);
        archiveButton.style.display = 'none'; // ocultar botón de archivar
        archivedRecipes.push(recipeObj); // añadimos al array
        alert(`Receta "${nameFormatted}" archivada. Hay ${archivedRecipes.length} receta(s) archivada(s).`);
    };

    recipeDiv.appendChild(name);
    recipeDiv.appendChild(details);
    recipeDiv.appendChild(toggleButton);
    recipeDiv.appendChild(deleteButton);
    recipeDiv.appendChild(archiveButton);

    recipesContainer.appendChild(recipeDiv);
}

// Alternar visibilidad de detalles
function toggleDetails(event) {
    const details = event.target.nextElementSibling;
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
}

addRecipeButton.addEventListener('click', addNewRecipe);
