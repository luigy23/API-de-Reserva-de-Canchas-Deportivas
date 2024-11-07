// Importamos el modelo de Reserva
import Reserva from "../models/Reserva.js"
// Obtener todas las reservas
const traerReservas = async (req, res) => {
    try {
        const reservas = await  Reserva.find().populate('usuario').populate('cancha');
        res.json(reservas);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las reservas' });
    }
};

// Crear una nueva reserva
const crearReserva = async (req, res) => {
    const { fecha, hora, usuario, cancha } = req.body;
    if (!fecha || !hora || !usuario || !cancha) {
        return res.status(400).json({ message: 'Faltan datos' });
    }
    try {
        const reserva = new Reserva({ fecha, hora, usuario, cancha });
        await reserva.save();
        res.json(reserva);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la reserva' });
    }
};

// Actualizar una reserva existente
const actualizarReserva = async (req, res) => {
    const id = req.params.id;
    const { fecha, hora, usuario, cancha } = req.body;
    if (!fecha || !hora || !usuario || !cancha) {
        return res.status(400).json({ message: 'Faltan datos' });
    }
    try {
        const reserva = await Reserva.findByIdAndUpdate(id, { fecha, hora, usuario, cancha }, { new: true });
        res.json(reserva);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la reserva' });
    }
};

// Eliminar una reserva
const eliminarReserva = async (req, res) => {
    const id = req.params.id;
    try {
        await Reserva.findByIdAndDelete(id);
        res.json({ message: 'Reserva eliminada' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la reserva' });
    }
};

export { traerReservas, crearReserva, actualizarReserva, eliminarReserva };