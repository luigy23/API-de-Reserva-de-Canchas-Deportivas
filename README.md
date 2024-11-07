# 🎾 API de Reserva de Canchas Deportivas

![Version](https://img.shields.io/badge/versión-1.0.0-blue.svg)
![Node](https://img.shields.io/badge/Node.js->=14.0.0-green.svg)
![License](https://img.shields.io/badge/licencia-MIT-orange.svg)

Una API RESTful construida con Node.js, Express y MongoDB para la gestión de reservas de canchas deportivas. Permite a los usuarios registrarse, iniciar sesión y reservar canchas. La API utiliza JWT para la autenticación.

## ✨ Características

- 🔐 **Autenticación de Usuarios**: 
  - Registro de usuarios
  - Inicio de sesión con tokens JWT
  - Gestión de perfiles

- ⚽ **Gestión de Canchas**: 
  - Crear, leer, actualizar y eliminar canchas
  - Información detallada de instalaciones
  - Estado de disponibilidad

- 📅 **Gestión de Reservas**: 
  - Sistema de reservas en tiempo real
  - Modificación y cancelación de reservas
  - Historial de reservas

- 🔒 **Rutas Protegidas**: 
  - Endpoints seguros mediante tokens JWT
  - Diferentes niveles de acceso
  - Validación de permisos

## 🛠️ Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución
- **Express.js** - Framework web
- **MongoDB** - Base de datos
- **Mongoose** - ODM para MongoDB
- **JWT** - Autenticación y autorización
- **Bcrypt.js** - Encriptación de contraseñas

## 🚀 Comenzando

### Prerrequisitos

- Node.js (>= 14.0.0)
- npm
- MongoDB

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tuusuario/web-back-canchas.git
cd web-back-canchas
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
   
Crea un archivo `.env` en el directorio raíz y añade:
```env
CANCHAS_APP_MONGO_HOST=localhost
CANCHAS_APP_MONGO_PORT=27017
CANCHAS_APP_MONGO_DB=canchas_app
JWT_SECRET=tu_clave_secreta_jwt
```

4. **Iniciar la aplicación**
```bash
npm run dev
```

## 📡 Endpoints de la API

### Autenticación
| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/login` | Iniciar sesión y recibir token JWT |

### Usuarios
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/usuarios` | Obtener todos los usuarios |
| POST | `/usuarios` | Crear nuevo usuario |
| PUT | `/usuarios/:id` | Actualizar usuario |
| DELETE | `/usuarios/:id` | Eliminar usuario |

### Canchas
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/canchas` | Obtener todas las canchas |
| POST | `/canchas` | Crear nueva cancha |
| PUT | `/canchas/:id` | Actualizar cancha |
| DELETE | `/canchas/:id` | Eliminar cancha |

### Reservas
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/reservas` | Obtener todas las reservas |
| POST | `/reservas` | Crear nueva reserva |
| PUT | `/reservas/:id` | Actualizar reserva |
| DELETE | `/reservas/:id` | Eliminar reserva |

## 📁 Estructura del Proyecto

```
├── controller/
│   ├── auth.controller.js
│   ├── cancha.controller.js
│   ├── reserva.controller.js
│   └── usuario.controller.js
├── models/
│   ├── Cancha.js
│   ├── Reserva.js
│   └── User.js
├── routes/
│   └── routes.js
├── middleware/
│   └── authMiddleware.js
├── config/
│   └── db.js
├── index.js
├── package.json
└── README.md
```

## 🧪 Pruebas

Para probar los endpoints, puedes utilizar Postman siguiendo estos pasos:

1. Importa la colección de Postman proporcionada
2. Configura el token JWT en las cabeceras de autorización
3. Prueba cada endpoint con los ejemplos JSON proporcionados

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles.

## 👥 Contribuir

1. Haz un Fork del proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📧 Contacto

Tu Nombre - [@tutwitter](https://twitter.com/tutwitter) - email@ejemplo.com

Link del proyecto: [https://github.com/tuusuario/web-back-canchas](https://github.com/tuusuario/web-back-canchas)
