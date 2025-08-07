import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method not allowed');
  }

  const { name, email, company, phone, message } = req.body;

  const webhookUrl = process.env.SLACK_WEBHOOK_URL;

  const slackPayload = {
    text: `📬 New Contact Form Submission:\n*Name:* ${name}\n*Email:* ${email}\n*Company:* ${company}\n*Phone:* ${phone}\n*Message:* ${message}`,
  };

  try {
    const slackRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(slackPayload),
    });

    if (!slackRes.ok) {
      throw new Error(`Slack responded with ${slackRes.status}`);
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
