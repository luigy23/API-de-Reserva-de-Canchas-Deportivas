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

    const id = req.params.id;
    const { descripcion, precio, estado } = req.body;
    //validaciones de seguridad
    if (!descripcion || !precio || !estado) {
        return res.status(400).json({ message: 'Faltan datos' });
    }

    const cancha = await Cancha.findByIdAndUpdate(id, { descripcion, precio, estado }, { new: true });
    res.json(cancha);
}

const eliminarCancha = async (req, res) => {
    const id = req.params.id;
    res.send({ id });
}


export { traerCanchas, crearCancha, actualizarCancha, eliminarCancha };