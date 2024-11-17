// backend/seeders/adminSeeder.js
import mongoose from 'mongoose';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load env variables
dotenv.config({ path: join(__dirname, '..', '.env') });

const MONGO_URI = `mongodb://${process.env.CANCHAS_APP_MONGO_HOST}:${process.env.CANCHAS_APP_MONGO_PORT}/${process.env.CANCHAS_APP_MONGO_DB}`;

const createAdminUser = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');

    // Verificar si el admin ya existe
    const adminExists = await User.findOne({ email: 'admin@admin.com' });

    if (adminExists) {
      console.log('El usuario admin ya existe');
      return;
    }

    // Crear el usuario admin
    const hashedPassword = await bcrypt.hash('admin123', 10);
    
    await User.create({
      nombre: 'Administrador',
      email: 'admin@admin.com',
      password: hashedPassword,
      role: 'admin',
      telefono: '123456789',
      cedula: '123456789'
    });

    console.log('Usuario admin creado exitosamente');
  } catch (error) {
    console.error('Error al crear el admin:', error);
  } finally {
    await mongoose.disconnect();
  }
};

createAdminUser();