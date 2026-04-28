/**Define un tipo Transacción que contenga el monto, el tipo ("ingreso" o "egreso") y
la categoría.
Crea una función que reciba un arreglo de transacciones y retorne un objeto que
contenga la suma total agrupada por tipo.
 */

type TipoTransaccion = "ingreso" | "egreso"

type Transaccion = {
    monto: number;
    tipo: TipoTransaccion;
    categoria: string;
}

function getTransaccion(transaccion: Transaccion[]){
    return transaccion.reduce((acc, cur) => {
        if (cur.tipo === "ingreso") {
            acc.ingreso += cur.monto;
        }else{
            acc.egreso += cur.monto;
        }
        return acc;
    }, {ingreso: 0, egreso:0}
)
}

console.log(getTransaccion([
    {monto: 1000, tipo: "ingreso", categoria:"Salario"},
    {monto: 200, tipo: "egreso", categoria: "comidad"},
    {monto: 500, tipo: "ingreso", categoria: "Freelance"},
    {monto: 300, tipo: "egreso", categoria: "Renta"},
]));


