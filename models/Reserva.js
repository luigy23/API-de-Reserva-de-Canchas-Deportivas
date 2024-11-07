// // modelo de mongo para la reserva de la cancha

import { Schema, model } from "mongoose";

const ReservaSchema = Schema({
    fecha: {
        type: Date,
        required: true,
    },
    hora: {
        type: String,
        required: true,
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    cancha: {
        type: Schema.Types.ObjectId,
        ref: "Cancha",
        required: true,
    },
}, {
    timestamps: true,
});


export default model("Reserva", ReservaSchema);
