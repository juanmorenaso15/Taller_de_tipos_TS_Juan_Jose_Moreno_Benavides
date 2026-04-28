/**Define una unión de tipos para representar notificaciones por email, SMS y push.
Cada una debe tener propiedades distintas.
Implementa una función enviarNotificacion que reciba una notificación y ejecute
una lógica distinta dependiendo del tipo (usando type narrowing).
 */

type SMS = {
    tipo: "sms";
    numero: number;
    mensaje: string;
}
type Email = {
    tipo: "email";
    receptor: string;
    mensaje: string
}
type Push = {
    tipo: "push";
    esquina: string
    mensaje: string
}
type Notificacion = SMS | Email | Push

function enviarNotificacion(notificacion: Notificacion) {
    switch (notificacion.tipo) {
        case "sms":
            console.log(`Enviando SMS al ${notificacion.numero}: ${notificacion.mensaje}`);
            break;

        case "email":
            console.log(`Enviando Email a ${notificacion.receptor}: ${notificacion.mensaje}`);
            break;

        case "push":
            console.log(`Enviando Push a la App ${notificacion.esquina}: ${notificacion.mensaje}`);
            break;
    }
}

const Sms: SMS = {
    tipo: "sms",
    numero: 3012835556,
    mensaje: "Tu pago ha sido exitoso"
};

const Email: Email = {
    tipo: "email",
    receptor: "juanmoreno@gmail.com",
    mensaje: "Tu codigo verificacion es 1234"
};

console.log(enviarNotificacion(Sms));
console.log(enviarNotificacion(Email));