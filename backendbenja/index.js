// index.js
import dotenv from 'dotenv';
dotenv.config();

import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
    console.error("La variable de entorno GEMINI_API_KEY no está configurada.");
    console.error("Por favor, crea un archivo .env en la raíz de tu proyecto con GEMINI_API_KEY=TU_CLAVE_AQUI");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(API_KEY);

// --- Función para listar los modelos disponibles ---
async function listarModelos() {
    console.log("Listando modelos disponibles para tu API Key...");
    try {
        const models = await genAI.listModels();
        if (models && models.length > 0) {
            console.log("Modelos disponibles:");
            for (const model of models) {
                // Esto mostrará el nombre del modelo y si soporta generateContent
                console.log(`- Nombre: ${model.name}, Suporta generateContent: ${model.supportedGenerationMethods.includes('generateContent')}`);
            }
        } else {
            console.log("No se encontraron modelos disponibles.");
        }
    } catch (error) {
        console.error(`Error al listar modelos: ${error.message}`);
    }
}

// Llama a la función para listar modelos al inicio
listarModelos();

// --- Comenta la llamada a main() temporalmente para que solo liste los modelos ---
// async function main() {
//     const promptRecibido = "¿Cuál es la montaña más alta del mundo?";
//     console.log(`Prompt recibido de mi compañero: '${promptRecibido}'`);

//     const respuestaGemini = await obtenerRespuestaGemini(promptRecibido);
//     console.log(`Respuesta de Gemini: '${respuestaGemini}'`);

//     console.log("\n---");
//     console.log("Aquí enviarías la respuesta de vuelta a tu compañero.");
// }
// main();


// --- Mantenemos la definición de obtenerRespuestaGemini para referencia, pero no se ejecutará por ahora ---
// Tendremos que cambiar "gemini-pro" aquí una vez que sepamos el nombre correcto
const model = genAI.getGenerativeModel({ model: "gemini-pro" }); 

async function obtenerRespuestaGemini(promptDelCompanero) {
    try {
        const result = await model.generateContent(promptDelCompanero);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error(`Error al conectar con la API de Gemini: ${error.message}`);
        return "Lo siento, no pude procesar tu solicitud en este momento.";
    }
}