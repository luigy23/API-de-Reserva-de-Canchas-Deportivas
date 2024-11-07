import express from "express";

import conectarDB from "./config/db.js";

import dotenv from "dotenv";
// import cors from "cors";
// import conectarDB from "./config/db.js";

dotenv.config();
import routes from "./routes/routes.js";


conectarDB();

const app = express();
app.use(express.json());


// // Configurar CORS
// const whitelist = ['http://localhost:5174'];

// const corsOption = {
//     origin: function(origin, callback){
//         if(whitelist.includes(origin)){
//             // puede consultar la API
//             callback(null, true);
//         }else{
//             // No esta permitido
//             callback(new Error("Error de Cors"));
//         }
//     },
// };

// app.use(cors(corsOption));

// Routing
app.use( routes);
const PORT = process.env.PORT || 7100;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})