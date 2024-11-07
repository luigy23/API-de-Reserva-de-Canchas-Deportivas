import mongoose from "mongoose";


const CANCHAS_APP_MONGO_HOST = process.env.CANCHAS_APP_MONGO_HOST || "localhost";
const CANCHAS_APP_MONGO_PORT = process.env.CANCHAS_APP_MONGO_PORT || 27017;
const CANCHAS_APP_MONGO_DB = process.env.CANCHAS_APP_MONGO_DB || "canchas_app";
console.log(CANCHAS_APP_MONGO_HOST);

const MONGO_URI = `mongodb://${CANCHAS_APP_MONGO_HOST}:${CANCHAS_APP_MONGO_PORT}/${CANCHAS_APP_MONGO_DB}`;

const conectarDB = async () => {
    try {
        const connection = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
    }
    );

    const url = `${connection.connection.host}:${connection.connection.port}`;


    console.log(`MongoDB Conectado en: ${url}`);

} catch (error) {
    console.log(`error: ${error.message}`);
    process.exit(1);
  }
};

export default conectarDB;