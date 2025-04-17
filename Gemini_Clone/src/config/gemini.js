


// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node



// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: 'AIzaSyB3hg19oT3ScrpnHsi3L1IIlrLOSRIif3c' });

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: `${prompt}`,
  });
  console.log(response.text);
}

export default main;