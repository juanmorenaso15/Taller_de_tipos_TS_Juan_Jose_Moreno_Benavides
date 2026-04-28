/**Crea un tipo Usuario con nombre, edad, estado activo y rol ("admin", "editor",
"visitante").
Implementa una función que devuelva únicamente los usuarios que sean mayores
de edad, estén activos y no tengan el rol de visitante. */

type Rol = "admin" | "editor" | "visitante";

type Usuario = {
    nombre: string;
    edad: number;
    activo: boolean;
    rol: Rol;
};

function filtrarUsuarios(listaUsuarios: Usuario[]): Usuario[] {
    return listaUsuarios.filter(usuario => {
        const MayorDeEdad = usuario.edad >= 18;
        const Activo = usuario.activo === true;
        const noEsVisitante = usuario.rol !== "visitante";

        return MayorDeEdad && Activo && noEsVisitante;
    });
}

const usuarios: Usuario[] = [
    { nombre: "Juan", edad: 18, activo: true, rol: "admin" },
    { nombre: "Manuel", edad: 13, activo: true, rol: "editor" },
    { nombre: "Mitin", edad: 30, activo: false, rol: "admin" },
    { nombre: "Thomas", edad: 40, activo: true, rol: "visitante" },
    { nombre: "Bryan", edad: 22, activo: true, rol: "editor" }
];

const resultado = filtrarUsuarios(usuarios);

console.log("Usuarios que cumplen los requisitos:");
console.log(resultado); 