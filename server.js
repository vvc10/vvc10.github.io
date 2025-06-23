// Simple Express backend for contact form to Telegram (ESM version)
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
app.use(bodyParser.json());

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  const text = `New Contact Form Submission:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
  try {
    const tgRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text
      })
    });
    if (!tgRes.ok) throw new Error('Telegram error');
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send Telegram message' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
