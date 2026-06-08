require('dotenv').config({ path: './.env' });
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

async function main() {
    const result = await model.generateContent('Diga olá em português');
    console.log(result.response.text());
}

main().catch(console.error);