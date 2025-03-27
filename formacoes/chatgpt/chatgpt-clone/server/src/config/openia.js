const OpenAI = require("openai");
const dotenv = require("dotenv");

dotenv.config();

class OpenAIService {
  static openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY,
    // Certifique-se de que você tem uma versão recente ou o correto da biblioteca
  });

  static async generateCompletion(prompt) {
    try {
      const response = await this.openai.completions.create({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 3500,
        temperature: 0,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0,
      });

      return response.choices[0].text.trim();
    } catch (error) {
      console.error("Erro ao gerar resposta do OpenAI:", error);
      throw error;
    }
  }
}

module.exports = OpenAIService;
