import { GoogleGenAI } from "@google/genai";

export const createGenAI = (apiKey) => new GoogleGenAI({ apiKey });
