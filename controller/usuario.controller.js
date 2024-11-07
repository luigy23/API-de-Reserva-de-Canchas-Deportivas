// Importamos el modelo de Usuario
import User from "../models/User.js";

// Obtener todos los usuarios
const traerUsuarios = async (req, res) => {
    try {
        const usuarios = await User.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios' });
    }
};


// Crear un nuevo usuario
const crearUsuario = async (req, res) => {
    const { nombre, email, password, telefono, cedula } = req.body;
    if (!nombre || !email || !password || !telefono || !cedula) {
        return res.status(400).json({ message: 'Faltan datos' });
    }
    try {
        const usuarioExistente = await User.findOne({ email });
        if (usuarioExistente) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }
        const usuario = new User({ nombre, email, password, telefono, cedula });
        usuario.password = await usuario.encryptPassword(password);
        await usuario.save();
        const token = usuario.generateJWT();
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario' });
    }
};

// Actualizar un usuario existente
const actualizarUsuario = async (req, res) => {
    const id = req.params.id;
    const { nombre, email, password, telefono, cedula } = req.body;
    if (!nombre || !email || !password || !telefono || !cedula) {
        return res.status(400).json({ message: 'Faltan datos' });
    }
    try {
        const usuario = await User.findById(id);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        usuario.nombre = nombre;
        usuario.email = email;
        usuario.password = await usuario.encryptPassword(password);
        usuario.telefono = telefono;
        usuario.cedula = cedula;
        await usuario.save();
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el usuario' });
    }
};

// Eliminar un usuario
const eliminarUsuario = async (req, res) => {
    const id = req.params.id;
    try {
        await User.findByIdAndDelete(id);
        res.json({ message: 'Usuario eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el usuario' });
    }
};

export { traerUsuarios, crearUsuario, actualizarUsuario, eliminarUsuario };