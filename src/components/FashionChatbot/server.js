const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/fashion-advice', async (req, res) => {
    const { query } = req.body;
    
    // Log the incoming request
    console.log('Received query:', query);

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: 'You are a helpful fashion assistant.' },
                    { role: 'user', content: query }
                ],
                max_tokens: 150,
                n: 1,
                stop: null,
                temperature: 0.7,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                },
            }
        );

        // Log the response from OpenAI
        console.log('OpenAI response:', response.data);

        res.json({ advice: response.data.choices[0].message.content.trim() });
    } catch (error) {
        // Log the error details
        console.error('OpenAI API error:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));