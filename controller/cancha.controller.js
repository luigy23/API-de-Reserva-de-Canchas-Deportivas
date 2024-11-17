//importamos el modelo de Cancha
import Cancha from "../models/Cancha.js";


const traerCanchas = async (req, res) => {
    const canchas = await Cancha.find();
    res.json(canchas);


}

const crearCancha = async (req, res) => {
    const { descripcion, precio, estado } = req.body;
    if (!descripcion || !precio || !estado) {
        return res.status(400).json({ message: 'Faltan datos' });
    }
    const cancha = new Cancha({ descripcion, precio, estado });
    await cancha.save();
    res.json(cancha);

}

const actualizarCancha = async (req, res) => {
    try {
        const id = req.params.id;
        const { descripcion, precio, estado } = req.body;
        
        if (!descripcion || !precio || !estado) {
            return res.status(400).json({ message: 'Faltan datos' });
        }

        const cancha = await Cancha.findById(id);
        if (!cancha) {
            return res.status(404).json({ message: 'Cancha no encontrada' });
        }

        const canchaActualizada = await Cancha.findByIdAndUpdate(
            id,
            { descripcion, precio, estado },
            { new: true }
        );

        res.json(canchaActualizada);
    } catch (error) {
        console.error('Error al actualizar:', error);
        res.status(500).json({ message: 'Error al actualizar la cancha' });
    }
};

const eliminarCancha = async (req, res) => {
    const id = req.params.id;
    try {
        const cancha = await Cancha.findById(id);
        if (!cancha) {
            return res.status(404).json({ message: 'Cancha no encontrada' });
        }
        await Cancha.findByIdAndDelete(id);
        res.json({ message: 'Cancha eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la cancha' });
    }
};


export { traerCanchas, crearCancha, actualizarCancha, eliminarCancha };