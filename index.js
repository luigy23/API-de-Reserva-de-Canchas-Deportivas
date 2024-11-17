import express from "express";
import conectarDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes/routes.js";

dotenv.config();
conectarDB();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5174'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

// Rutas
app.use(routes);

const PORT = process.env.PORT || 7100;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});