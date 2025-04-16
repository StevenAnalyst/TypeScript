interface Tarea {
    id: number;
    descripcion: string;
    completada: boolean;
}
  
let listaDeTareas: Tarea[] = [];
  
function agregarTarea(descripcion: string): void {
    const nuevaTarea: Tarea = {
        id: listaDeTareas.length + 1,
        descripcion,
        completada: false
    };
    listaDeTareas.push(nuevaTarea);
    console.log(`Tarea agregada: "${descripcion}"`);
}
  
function mostrarTareas(): void {
    console.log("\nLista de tareas:");
    listaDeTareas.forEach(tarea => {
        const estado = tarea.completada ? "Completada" : "Pendiente";
        console.log(`${tarea.id}. ${tarea.descripcion} - ${estado}`);
    });
}
  
function completarTarea(id: number): void {
    const tarea = listaDeTareas.find(t => t.id === id);
    if (tarea) {
        tarea.completada = true;
        console.log(`Tarea "${tarea.descripcion}" marcada como completada.`);
    }else{
    console.log("Tarea no encontrada.");
}
}
  
agregarTarea("Aprender TypeScript");
agregarTarea("Hacer ejercicio");
agregarTarea("Leer un libro");
  
mostrarTareas();
  
completarTarea(2);
  
mostrarTareas();
  