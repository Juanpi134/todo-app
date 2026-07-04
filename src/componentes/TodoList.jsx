//se importa el hook useState
import { useState } from "react";


//se importa el archivo index.css
import  '../index.css'

//creacion del componente todoList
function ToDoList() {
  //se crean los estados de las tareas
  const [tasks, setTasks] = useState(["hola", "chau"]);

  //el valor inicial es un arreglo vacío
  //console.log(tasks);

  //se crea un nuevo estado para añadir la tarea
  //esto se añadirá al array de tasks
  const [newTask, setNewTask] = useState("");

  //se muestra por pantalla y me muestra un array vacío
  //console.log(newTask)

  //se crea la función manejador de inputs
  //cada vez que hago un cambio como escribir me devuelve el objeto SyntheticBaseEvent
  const manejadorDeCambiosEnElInput = (evento) => {
    //el evento target me devuelve el elemento HTML
    //console.log(evento.target);

    //cuando imprimo me devuelve undefined
    if (setNewTask(evento.target.value) === "undefined") {
      console.log("hola");
    }
  };
  //esta funcion lo que hace es agregar una tarea al array de tareas
  const addTask = () => {
    //Esto lo que hace es añadir una nueva tarea
    //si yo añado cualquier texto se añade cuando doy click 
    // esto ...t lo que hace es desempaqueatar todos los elementos dentro de otro array nuevo
    //t es ["hola","chau"]
    //entonces ["hola","chau",newTask];
    //el spread operator abre el array y coloca cada uno de sus elementos uno por uno dentro del array nuevo
    //no se puede usar .push porque en react no se debe modificar el estado directamente , siempre hay que crear uno nuevo
    if(newTask.trim() != ""){
    setTasks(t => [...t,newTask])
    // limpiamos el input
    setNewTask("");
    }
  };

  //se crea la funcion eliminar tarea que recibe un índice para buscar y eliminar
  const deleteTask = (indice) => {
    // cuando imprimo el indice me devuelve lo que le paso por parametro
    //console.log(indice)
    const updateTasks = tasks.filter((_,i) => {
        // te devuelve cada elemento y su indice ejemplo
        //hola 0
        //chau 1
        //si los indices no coindicen 
        //es decir si los indices coinciden los filtraos , no lo queremos
        //sino se añade el return limpia todo
        //la funcion devuelve siempre undefined porque es un valor falsy
        //si se utiliza llaves siempre return, sin llave no hace falta el return
        return i !== indice
    })

    //cuando doy click me da un array vació de ese elemento y lo mismo con el otro
    console.log(updateTasks);

    setTasks(updateTasks);
  };

  //se crea la funcion moveTaskUp
  //recibe un indice para mover el indice de la lista adelante
  const moveTaskUp = (indice) => {
    //si el indice es mayor a cero es decir el elemento está por encima del primero no lo necesitamos mover más adelante
    //necesitamos crear un nuevo array y utilizamos el operador spread y le desempaquetamos el array
    //necesitamos cambiar los elementos dentro de un array
    if(indice > 0){
        const updateTasks = [...tasks];
        //en el segundo elemento me devuelve los elementos
        [updateTasks[indice], updateTasks[indice - 1]] = [updateTasks[indice -1], updateTasks[indice]];
        setTasks(updateTasks);
        console.log(updateTasks)
    }
  };

  //se crea la funcion moveTaskDown
  //recibe un indice de la lista para moverla hacia abajo
  const moveTaskDown = (indice) => {
     if(indice < tasks.length - 1){
        const updateTasks = [...tasks];
        //en el segundo elemento me devuelve los elementos
        [updateTasks[indice], updateTasks[indice + 1]] = [updateTasks[indice  +1], updateTasks[indice]];
        setTasks(updateTasks);
        console.log(updateTasks)
    }
  };

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>

      <div>
        <input
          type="text"
          placeholder="Escribe una tarea"
          value={newTask}
          name=""
          id=""
          onChange={manejadorDeCambiosEnElInput}
        />
        <button className="botonAgregar" onClick={addTask}>
          Agregar
        </button>
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

        {tasks.map((tarea, indice) => (
          <li key={indice}>
            <span className="text">{tarea}</span>
            {/* por cada tarea creamos un boton  */}

            {/* 
            <button className="EliminarBoton" onClick={() => deleteTask(1)}>
                Delete
            </button>
            */}

            <button className="EliminarBoton" onClick={() => deleteTask(indice)}>
                Delete
            </button>

            <button className="moverBoton" onClick={() => moveTaskUp(indice)}>
                Up
            </button>

            <button className="moverBoton" onClick={() => moveTaskDown(indice)}>
                Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

//se exporta el componente
export default ToDoList;
