//se importa el hook useState
import { useState } from "react";

//creacion del componente todoList
function ToDoList(){
    //se crean los estados de las tareas
    const [tasks,setTasks] = useState(["hola","chau"]);

    //el valor inicial es un arreglo vacío
    //console.log(tasks);

    //se crea un nuevo estado para añadir la tarea
    //esto se añadirá al array de tasks
    const [newTask,setNewTask] = useState("");

    //se muestra por pantalla y me muestra un array vacío
    //console.log(newTask)

    //se crea la función manejador de inputs 
    //cada vez que hago un cambio como escribir me devuelve el objeto SyntheticBaseEvent
    const manejadorDeCambiosEnElInput = (evento) => {
        //el evento target me devuelve el elemento HTML
        //console.log(evento.target);

        //cuando imprimo me devuelve undefined 
        if(setNewTask(evento.target.value) === "undefined"){
            console.log("hola");
        }
        
    }
    //esta funcion lo que hace es agregar una tarea al array de tareas
    const addTask = () => {

    }

    //se crea la funcion eliminar tarea que recibe un índice para buscar y eliminar
    const deleteTask = (indice) => {

    }

    //se crea la funcion moveTaskUp 
    //recibe un indice para mover el indice de la lista adelante
    const moveTaskUp = (indice) => {

    }

    //se crea la funcion moveTaskDown
    //recibe un indice de la lista para moverla hacia abajo
     const moveTaskDown = (indice) => {

    }
    
    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
            <input type="text" placeholder="Escribe una tarea" value={newTask} name="" id="" onChange={manejadorDeCambiosEnElInput}/>
            <button className="botonAgregar" onClick={addTask}>Agregar</button>
            </div>

            <ol>
                {/* prueba de ver como se renderiza en consola los elementos del array actual */}
                {/* cada tarea recibe un elemento a renderizar */}
                {/*  
                {tasks.map((elemento) => {
                    console.log(elemento)
                })}
                    */}
                    {/* react añade una key para cada elemento */}
                    {/* cada elemento recibe un índice y el tipo de elemento "li" */}
                    {/*  
                {
                    tasks.map((tarea,indice) => {
                        console.log(<li key={indice}></li>)
                    })
                        
                }
                    */}

                    {tasks.map((tarea,indice) => {
                        // creamos la tarea y le asignamos el indice a cada li
                        <li key="indice">
                            <span className="text">{task}</span>
                        </li>
                    })}
            </ol>
        </div>
    )
}

//se exporta el componente
export default ToDoList;