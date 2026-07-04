//se importa el hook useState
import { useState } from "react";

//creacion del componente todoList
function ToDoList(){
    //se crean los estados de las tareas
    const [tasks,setTasks] = useState([]);

    //el valor inicial es un arreglo vacío
    console.log(tasks);

    //se crea un nuevo estado para añadir la tarea
    //esto se añadirá al array de tasks
    const [newTask,setNewTask] = useState("");

    //se muestra por pantalla y me muestra un array vacío
    console.log(newTask)

    //se crea la función manejador de inputs 
    //cada vez que hago un cambio como escribir me devuelve el objeto SyntheticBaseEvent
    const manejadorDeCambiosEnElInput = (evento) => {
        //el evento target me devuelve el elemento HTML
        //console.log(evento.target);
    }

    return (
        <div>
            <input type="text" name="" id="" onChange={manejadorDeCambiosEnElInput}/>
        </div>
    )
}

//se exporta el componente
export default ToDoList;