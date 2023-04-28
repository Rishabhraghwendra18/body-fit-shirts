import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
    // apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

async function askAI(prompt) {
    const response = await openai.createImage({
        prompt,
        n:1,
        size: '1024x1024',
        response_format: 'b64_json'
    });
    return response.data.data[0].b64_json;
}
export {askAI};