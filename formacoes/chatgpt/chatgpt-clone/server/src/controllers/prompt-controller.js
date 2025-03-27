const inputPrompt = require("../models/input-prompt");
const openai = require("../config/openia");

module.exports = {
  async sendText(req, res) {
    const openaiAPI = openai;
    const inputModel = new inputPrompt(req.body);

    try {
      const response = await openaiAPI.completions.create({
        model: "text-davinci-003",
        prompt: inputModel.prompt,
        temperature: 0,
        max_tokens: 3500,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0,
      });

      return res.status(200).json({
        success: true,
        data: response.choices[0].text.trim(),
      });

    } catch (error) {
      console.log("Error:", error);

      return res.status(400).json({
        success: false,
        error: error.response
          ? error.response.data
          : 'There was an issue on the server',
      });
    }
  }
};
