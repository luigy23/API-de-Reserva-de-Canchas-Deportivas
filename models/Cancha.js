// modelo de mongo para la cancha

import { Schema, model } from "mongoose";


//id, descripcion, precio, tipo, estado
const CanchaSchema = Schema({
    descripcion: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },

    estado: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const Cancha = model("Cancha", CanchaSchema);

export default Cancha;


/* Para probar usando un cliente de API como Postman envia este json:
{
    "descripcion": "Cancha 1",
    "precio": 100,
    "estado": "Disponible"
}
*/