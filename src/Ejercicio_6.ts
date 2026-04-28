/**Crea una tipo Calificación con estudianteId, materia, categoría ("tareas", "quices",
"examen") y nota.
Escribe una función que calcule el promedio por categoría para un estudiante
específico. */

type TipoCategoria = "tareas" | "quices" | "examen";

type Calificacion = {
    estudianteId: number;
    materia: string;
    categoria: TipoCategoria;
    nota: number;
};

function obtenerPromediosPorCategoria(estudianteId: number, calificaciones: Calificacion[]) {
    const notasEstudiante = calificaciones.filter(calificaciones => calificaciones.estudianteId === estudianteId);

    const categorias: TipoCategoria[] = ["tareas", "quices", "examen"];
    const resumen: Record<string, string> = {};

    categorias.forEach(categoria => {
        const notasDeEstaCategoria = notasEstudiante.filter(notasEstudiante => notasEstudiante.categoria === categoria);

        if (notasDeEstaCategoria.length > 0) {
            const suma = notasDeEstaCategoria.reduce((acc, curr) => acc + curr.nota, 0);
            const promedio = suma / notasDeEstaCategoria.length;
            resumen[categoria] = `${promedio.toFixed(2)}`;
        } else {
            resumen[categoria] = "Sin notas";
        }
    });

    return resumen;
}

const todasLasNotas: Calificacion[] = [
    { estudianteId: 1, materia: "Programación", categoria: "tareas", nota: 4.5 },
    { estudianteId: 1, materia: "Bases de Datos", categoria: "tareas", nota: 3.5 },
    { estudianteId: 1, materia: "Programación", categoria: "quices", nota: 5.0 },
    { estudianteId: 1, materia: "Programación", categoria: "examen", nota: 4.0 },
    { estudianteId: 2, materia: "Programación", categoria: "examen", nota: 2.0 },
];

const promedio = obtenerPromediosPorCategoria(2, todasLasNotas);
console.log("Promedios del Estudiante 2:", promedio);