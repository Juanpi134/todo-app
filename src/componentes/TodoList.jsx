//se importa el hook useState
import { useState } from "react";

//creacion del componente todoList
function ToDoList(){
    //se crean los estados de las tareas
    const [tasks,setTasks] = useState([]);

    
    console.log(tasks);
}

//se exporta el componente
export default ToDoList;