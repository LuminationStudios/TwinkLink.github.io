import express from "express";
import bodyParser from "body-parser";
import { Webhook } from "@top-gg/sdk";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

const webhook = new Webhook(process.env.TOPGG_WEBHOOK_AUTH);

// ✅ Vote webhook endpoint
app.post("/topgg", webhook.middleware(), (req, res) => {
  console.log("🎉 New vote received:", req.vote);
  res.send("ok");
});

// ✅ Proxy to fetch stats from Top.gg API
app.get("/api/stats", async (req, res) => {
  try {
    const response = await fetch(`https://top.gg/api/bots/${process.env.BOT_ID}`, {
      headers: { Authorization: process.env.TOPGG_API_TOKEN }
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Top.gg stats" });
  }
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
