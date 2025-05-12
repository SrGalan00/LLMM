var boton= document.getElementById('btn');

document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btn");
    const entrada = document.getElementById("entrada");
    const tareas = document.getElementById("tareas");
    const tareasRealizadas = document.getElementById("tareas-realizadas");
    
    

    btn.addEventListener("click", function (e) {
        e.preventDefault();
        const texto = entrada.value.trim();

        if (texto !== "") {
            // Crear nueva tarea
            const nuevaTarea = document.createElement("div");
            nuevaTarea.classList.add("task");

            const p = document.createElement("p");
            p.textContent = texto;

            const close = document.createElement("span");
            close.classList.add("close");
            close.textContent = "X"; 

            // Evento para marcar como realizada
            close.addEventListener("click", () => {
                tareasRealizadas.appendChild(nuevaTarea); // Mueve la tarea
                close.remove(); // Opcional: quita el botón una vez completada
            });

            nuevaTarea.appendChild(p);
            nuevaTarea.appendChild(close);
            tareas.appendChild(nuevaTarea);

            entrada.value = "";
        } else{
        document.getElementById("newLine").style.backgroundColor="Red";

        }
    });
});