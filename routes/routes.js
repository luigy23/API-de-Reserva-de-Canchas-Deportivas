import express from 'express';
import Reserva from '../models/Reserva.js';

const router = express.Router();

import { login, register } from '../controller/auth.controller.js';
import { traerCanchas, crearCancha, actualizarCancha, eliminarCancha } from '../controller/cancha.controller.js';
import { traerReservas, crearReserva, actualizarReserva, eliminarReserva } from '../controller/reserva.controller.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js'; //protect es un middleware que se encarga de verificar si el usuario esta autenticado

router.get('/', (req, res) => {
    res.send('Hola Mundo');
}
);


//Canchas
router.get('/canchas', traerCanchas);
router.post('/canchas', protect, adminOnly, crearCancha);
router.put('/canchas/:id', protect, adminOnly, actualizarCancha);
router.delete('/canchas/:id', protect, adminOnly, eliminarCancha);


// Reservas
router.get('/reservas', traerReservas);
router.post('/reservas', crearReserva);
router.put('/reservas/:id', actualizarReserva);
router.delete('/reservas/:id', eliminarReserva);

router.get('/reservas/user', protect, async (req, res) => {
  try {
    const reservas = await Reserva.find({ usuario: req.user.id })
      .populate('cancha')
      .sort({ fecha: -1 });
    res.json(reservas);
  } catch (error) {
    console.error('Error fetching reservations:', error);
    res.status(500).json({ message: 'Error al obtener las reservas' });
  }
});


// Authentication
router.post('/register', register);
router.post('/login', login);


export default router;