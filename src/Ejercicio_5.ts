/**Modela un historial de cambios de un usuario, donde cada cambio puede ser de
nombre, correo o contraseña.
Escribe una función que reciba una lista de estos cambios y devuelva un resumen
con el número de veces que se cambió cada uno.
 */

type TipoCambio = Nombre | Correo | Contraseña

type Nombre = {
    campo: "nombre";
    valorAnterior: string;
    valorNuevo: string;
};

type Correo = {
    campo: "correo";
    valorAnterior: string;
    valorNuevo: string;
};

type Contraseña = {
    campo: "contraseña";
    valorAnterior: string;
    valorNuevo: string;
};


type ResumenCambios = {
    nombre: number;
    correo: number;
    contraseña: number;
};

function generarResumen(historial: TipoCambio[]): ResumenCambios {
    const resumen: ResumenCambios = {
        nombre: 0,
        correo: 0,
        contraseña: 0
    };

    historial.forEach(cambio => {
        resumen[cambio.campo]++;
    });

    return resumen;
}

const historial: TipoCambio[] = [
    { campo: "nombre", valorAnterior: "Juan", valorNuevo: "Juan Jose" },
    { campo: "correo", valorAnterior: "juan@mail.com", valorNuevo: "juanjose@mail.com" },
    { campo: "nombre", valorAnterior: "Juan Jose", valorNuevo: "Juan Moreno." },
    { campo: "contraseña", valorAnterior: "1234", valorNuevo: "12345" },
    { campo: "correo", valorAnterior: "juanjose@mail.com", valorNuevo: "juanmoreno@mail.com" }
];

const resultado = generarResumen(historial);
console.log("Resumen de cambios:", resultado);