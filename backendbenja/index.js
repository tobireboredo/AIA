// index.js

import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

// Cargar variables de entorno desde .env
dotenv.config();

// Leer la API Key
const API_KEY = process.env.API_KEY;

// Inicializar Gemini
const genAI = new GoogleGenerativeAI(API_KEY);

async function main() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = "Decime un chiste corto sobre programadores";

  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();

  console.log(text);
}

main();

