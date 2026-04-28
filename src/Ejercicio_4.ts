/**Crea un tipo CampoFormulario con las propiedades: nombre, tipo ("texto", "numero",
"email") y valor (que puede ser string o number).
Desarrolla una función que valide una lista de campos y devuelva los nombres de
los campos inválidos según su tipo.
 */

type TipoCampo = "texto" | "numero" | "email";

type CampoFormulario = {
    nombre: string;
    tipo: TipoCampo;
    valor: string | number;
};

function validarCampos(campos: CampoFormulario[]): string[] {
    const camposInvalidos: string[] = [];

    campos.forEach(campo => {
        let esValido = true;

        switch (campo.tipo) {
            case "numero":
                if (typeof campo.valor !== "number") {
                    esValido = false;
                }
                break;

            case "email":
                if (typeof campo.valor !== "string" || !campo.valor.includes("@")) {
                    esValido = false;
                }
                break;

            case "texto":
                if (typeof campo.valor !== "string") {
                    esValido = false;
                }
                break;
        }

        if (!esValido) {
            camposInvalidos.push(campo.nombre);
        }
    });

    return camposInvalidos;
}

const Campos: CampoFormulario[] = [
    { nombre: "Usuario", tipo: "texto", valor: "moreno1234" },
    { nombre: "Edad", tipo: "numero", valor: "veinticinco" },
    { nombre: "Correo", tipo: "email", valor: "juanmorenogmail.com" },
    { nombre: "Telefono", tipo: "numero", valor: 3001234567 }
];

const errores = validarCampos(Campos);
console.log("Campos con errores:", errores);