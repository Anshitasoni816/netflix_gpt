import { GoogleGenAI } from "@google/genai";
import { geminiAPI } from "./constant";

const genAI = new GoogleGenAI({
  apiKey: geminiAPI, 
});

export default genAI;


