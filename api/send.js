export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const webhook = process.env.DISCORD_WEBHOOK_URL;
  if (!webhook) {
    return res.status(500).json({ error: "Webhook is not configured" });
  }

  const answer = typeof req.body?.answer === "string" ? req.body.answer.trim() : "";
  if (!answer || answer.length > 1800) {
    return res.status(400).json({ error: "Invalid answer" });
  }

  try {
    const discordResponse = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: "💚 **Esilam'ın cevabı:**\n" + answer
      })
    });

    if (!discordResponse.ok) {
      return res.status(502).json({ error: "Discord webhook failed" });
    }
    return res.status(200).json({ ok: true });
  } catch {
    return res.status(502).json({ error: "Could not reach Discord" });
  }
}
