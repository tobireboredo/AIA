// index.js

// 1. Carga las variables de entorno desde el archivo .env
import dotenv from 'dotenv';
dotenv.config();

// 2. Importa la clase GoogleGenerativeAI del SDK
import { GoogleGenerativeAI } from '@google/generative-ai';

// 3. Obtiene la API Key de las variables de entorno
const API_KEY = process.env.GEMINI_API_KEY;

// 4. Verifica si la API Key está configurada
if (!API_KEY) {
    console.error("La variable de entorno GEMINI_API_KEY no está configurada.");
    console.error("Por favor, crea un archivo .env en la raíz de tu proyecto con GEMINI_API_KEY=TU_CLAVE_AQUI");
    process.exit(1); // Sale de la aplicación si no hay clave
}

// 5. Inicializa el cliente de Google Generative AI
const genAI = new GoogleGenerativeAI(API_KEY);

// --- Función para listar los modelos disponibles ---
// Esta función es útil para depurar y ver qué modelos puedes usar.
async function listarModelos() {
    console.log("Listando modelos disponibles para tu API Key...");
    try {
        const models = await genAI.listModels();
        if (models && models.length > 0) {
            console.log("Modelos disponibles:");
            for (const model of models) {
                // Filtra para mostrar solo modelos que soporten 'generateContent' si lo deseas
                if (model.supportedGenerationMethods.includes('generateContent')) {
                    console.log(`- Nombre: ${model.name} (Soporta generateContent)`);
                } else {
                    console.log(`- Nombre: ${model.name} (NO soporta generateContent)`);
                }
            }
        } else {
            console.log("No se encontraron modelos disponibles.");
        }
    } catch (error) {
        console.error(`Error al listar modelos: ${error.message}`);
    }
}

// --- Función principal para interactuar con Gemini ---
async function obtenerRespuestaGemini(promptDelCompanero) {
    // Elige el modelo que vas a usar. 'gemini-pro' es el modelo estándar para texto.
    // Si 'listarModelos()' te da un nombre diferente que funcione (ej. 'models/gemini-pro' o 'gemini-1.0-pro'), úsalo aquí.
    const model = genAI.getGenerativeModel({ model: "gemini-pro" }); 

    try {
        console.log(`Enviando prompt a Gemini: '${promptDelCompanero}'`);
        const result = await model.generateContent(promptDelCompanero);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error(`Error al conectar con la API de Gemini: ${error.message}`);
        // Puedes devolver un mensaje amigable o re-lanzar el error
        return "Lo siento, no pude procesar tu solicitud en este momento.";
    }
}

// --- Función que simula el flujo de tu aplicación ---
async function main() {
    const promptRecibido = "¿Cuál es la montaña más alta del mundo?";
    console.log(`\n---`);
    console.log(`Prompt recibido de mi compañero: '${promptRecibido}'`);

    const respuestaGemini = await obtenerRespuestaGemini(promptRecibido);
    console.log(`Respuesta de Gemini: '${respuestaGemini}'`);

    console.log("\n---");
    console.log("Aquí enviarías la respuesta de vuelta a tu compañero o la mostrarías en tu frontend.");
}

// --- Ejecución del script ---
// Puedes elegir cuál ejecutar:
// 1. listarModelos(): Para ver qué modelos tienes disponibles.
// 2. main(): Para ejecutar la lógica principal y probar la interacción con Gemini.

// Por ahora, vamos a listar los modelos para confirmar que todo funciona
// y que el error 'listModels is not a function' ha desaparecido.
listarModelos(); 

// Si listarModelos() funciona correctamente y te muestra modelos,
// puedes comentar la línea de arriba y descomentar la siguiente para probar 'main()':
// main();