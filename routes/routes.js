import express from 'express';

const router = express.Router();

import { login } from '../controller/auth.controller.js';
import { traerCanchas, crearCancha, actualizarCancha, eliminarCancha } from '../controller/cancha.controller.js';
import { traerReservas, crearReserva, actualizarReserva, eliminarReserva } from '../controller/reserva.controller.js';
//import { protect } from '../middleware/authMiddleware.js'; //protect es un middleware que se encarga de verificar si el usuario esta autenticado

router.get('/', (req, res) => {
    res.send('Hola Mundo');
}
);


//Canchas
router.get('/canchas', traerCanchas);
router.post('/canchas', crearCancha);
router.put('/canchas/:id', actualizarCancha);
router.delete('/canchas/:id', eliminarCancha);


// Reservas
router.get('/reservas', traerReservas);
router.post('/reservas', crearReserva);
router.put('/reservas/:id', actualizarReserva);
router.delete('/reservas/:id', eliminarReserva);




// Authentication
router.post('/login', login);


export default router;