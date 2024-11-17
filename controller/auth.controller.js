// auth.controller.js
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';

export const register = async (req, res) => {
  try {
    const { nombre, email, password, telefono, cedula } = req.body;
    
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Usuario ya existe' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      nombre,
      email,
      password: hashedPassword,
      telefono,
      cedula,
      role: 'user' // Asignamos el rol user por defecto
    });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '30d' }
    );

    res.status(201).json({
      id: user._id,
      name: user.nombre,
      email: user.email,
      role: user.role,
      token
    });
  } catch (error) {
    console.error('Error en registro:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '30d' }
    );

    res.json({
      id: user._id,
      name: user.nombre, // Cambiado de user.name a user.nombre
      email: user.email,
      role: user.role,
      token
    });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' });
  }
};