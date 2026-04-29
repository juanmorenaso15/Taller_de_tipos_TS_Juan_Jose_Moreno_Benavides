/**Modela un tipo Pago que tenga una propiedad método , que puede ser "tarjeta",
"efectivo" o "transferencia".
Cada método requiere distintos campos:
"tarjeta": número de tarjeta y CVV
"transferencia": banco y número de cuenta
"efectivo": no requiere datos adicionales
Crea una función que reciba un pago y valide que se hayan ingresado los datos
obligatorios dependiendo del método.
 */

type PagoTarjeta = {
    metodo: "tarjeta";
    numeroTarjeta: string;
    cvv: number;
};

type PagoTransferencia = {
    metodo: "transferencia";
    banco: string;
    numeroCuenta: string;
};

type PagoEfectivo = {
    metodo: "efectivo";
};

type Pago = PagoTarjeta | PagoTransferencia | PagoEfectivo;

function validarPago(pago: Pago): boolean {
    switch (pago.metodo) {
        case "tarjeta":
            return pago.numeroTarjeta.length === 16 && pago.cvv.toString().length === 3;

        case "transferencia":
            return pago.banco.trim() !== "" && pago.numeroCuenta.trim() !== "";

        case "efectivo":
            return true;

        default:
            return false;
    }
}

const pago1: Pago = {
    metodo: "tarjeta",
    numeroTarjeta: "1234567812345678",
    cvv: 123
};

const pago2: Pago = {
    metodo: "transferencia",
    banco: "Bancolombia",
    numeroCuenta: "000-123-456"
};

console.log("¿Pago 1 válido?:", validarPago(pago1));
console.log("¿Pago 2 válido?:", validarPago(pago2));