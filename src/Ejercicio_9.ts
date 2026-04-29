/**Diseña una función que permita convertir entre distintas unidades de medida:
"cm", "m" y "km".
Usa un tipo unión para representar las unidades posibles y asegúrate de validar
correctamente los valores de entrada y salida. */

type UnidadMedida = "cm" | "m" | "km";

type Conversion = {
    valor: number;
    desde: UnidadMedida;
    a: UnidadMedida;
};

function convertirUnidades(request: Conversion): number {
    const { valor, desde, a } = request;

    const factores: Record<UnidadMedida, number> = {
        cm: 0.01,
        m: 1,
        km: 1000
    };

    const valorEnMetros = valor * factores[desde];

    const resultado = valorEnMetros / factores[a];

    return resultado;
}

const UnidadUno = convertirUnidades({ valor: 100, desde: "cm", a: "m" });
console.log(`100 cm son: ${UnidadUno} m`);

const UnidadDos = convertirUnidades({ valor: 5, desde: "km", a: "cm" });
console.log(`5 km son: ${UnidadDos} cm`);

const UnidadTres = convertirUnidades({ valor: 1500, desde: "m", a: "km" });
console.log(`1500 m son: ${UnidadTres} km`);
