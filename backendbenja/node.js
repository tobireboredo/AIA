
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: AIzaSyAc0YFQN7agxsEiLP2Nhtrc7fV4XwrNIog} );

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

main();