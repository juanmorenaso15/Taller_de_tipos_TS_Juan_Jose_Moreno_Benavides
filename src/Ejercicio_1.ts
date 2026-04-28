/**Crea un tipo Tarea que tenga las propiedades: id, descripción, si está completada,
y un estado que solo puede ser "pendiente", "en_progreso" o "finalizada".
Implementa una función que reciba una lista de tareas y devuelva solo aquellas
que estén en progreso o pendientes.
 */

type Taskstatus = "pendiente" | "en_progreso" | "finalizada";

type Task = {
    id: number;
    descripcion: string;
    isCompleted: boolean;
    status: Taskstatus;
}

function getTaskProgressOrPending(task: Task[]){
    return task.filter((task: Task) => task.status !== "finalizada");
}

const users: Task[] = [
    {id: 1,descripcion: "Tarea 2", isCompleted: false, status: "pendiente"},
    {id: 2,descripcion: "Tarea 1", isCompleted: true, status: "finalizada"},       
    {id: 3,descripcion: "Tarea 3", isCompleted: false, status: "en_progreso"}
];

console.log(getTaskProgressOrPending(users));