var boton = document.getElementById('btn');
var entrada = document.getElementById('entrada');

boton.addEventListener('click',function(){
    if(entrada.value){
        var tareas = document.getElementById('tareas');
        var tarea= document.getElementById('div');
        tareas.appendChild(tarea);
    
        var parrafo=document.getElementById('p');
        tarea.appendChild(parrafo);
        parrafo.innerHTML = entrada.value;
        tareas.className="task";
    
        var cruz=document.createElement('span');
        tarea.appendChild(cruz);
    
        cruz.innerHTML = 'X';
        cruz.className='close';

        cruz.addEventListener('click',function(){
            borrar(tarea);
        });
    } else{
        alert("No has introducido nada");
        entrada.style.backgroundColor="red";
        
    }
    

});

function borrar(tareaBorrar){
    var tareasRealizadas =document.getElementById('tareas-realizadas');
    tareaBorrar.remove();
    tareasRealizadas.appendChild(tareaBorrar);
};